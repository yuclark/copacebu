'use client';

import { useState } from 'react';
import { Division, Team, Match } from '@/lib/mockData';
import { updateMatchScore } from '@/lib/actions';
import { LayoutGrid, Save, RefreshCw, Trophy, ShieldAlert, Sparkles, MapPin } from 'lucide-react';

interface Props {
  initialDivisions: Division[];
  initialTeams: Team[];
  initialMatches: Match[];
}

export default function AdminPanel({ initialDivisions, initialTeams, initialMatches }: Props) {
  const defaultDiv = initialDivisions.find(d => d.id === 'mens-open') || initialDivisions[0];
  const [selectedDivId, setSelectedDivId] = useState(defaultDiv.id);
  const [matchesState, setMatchesState] = useState<Match[]>(initialMatches);
  const [teamsState, setTeamsState] = useState<Team[]>(initialTeams);
  const [loadingMatchId, setLoadingMatchId] = useState<string | null>(null);
  const [scoreInputs, setScoreInputs] = useState<Record<string, { home: string; away: string }>>({});
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);

  // Group divisions by category
  const categories = {
    'Mixed (P-7 to P-13)': initialDivisions.filter(d => d.category === 'Mixed'),
    'Boys (P-15 to P-17)': initialDivisions.filter(d => d.category === 'Boys'),
    'Open Categories': initialDivisions.filter(d => d.category === 'Open'),
  };

  // Get current division teams & matches
  const divisionTeams = teamsState
    .filter(t => t.divisionId === selectedDivId && !/^(winner|top \d|wc\d)/i.test(t.name))
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      const gdA = a.goalsFor - a.goalsAgainst;
      const gdB = b.goalsFor - b.goalsAgainst;
      if (gdB !== gdA) return gdB - gdA;
      return b.goalsFor - a.goalsFor;
    });

  const teamIds = new Set(initialTeams.filter(t => t.divisionId === selectedDivId).map(t => t.id));
  const divisionMatches = matchesState
    .filter(m => teamIds.has(m.homeTeamId) && teamIds.has(m.awayTeamId))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const getTeamName = (id: string) => teamsState.find(t => t.id === id)?.name || 'Unknown';

  const handleInputChange = (matchId: string, side: 'home' | 'away', val: string) => {
    // Only allow integers
    if (val !== '' && !/^\d+$/.test(val)) return;
    
    setScoreInputs(prev => ({
      ...prev,
      [matchId]: {
        ...prev[matchId] || { home: '', away: '' },
        [side]: val
      }
    }));
  };

  const handleSaveScore = async (matchId: string) => {
    const input = scoreInputs[matchId];
    if (!input || input.home === '' || input.away === '') {
      setMessage({ text: 'Please enter scores for both teams.', type: 'error' });
      return;
    }

    const homeScore = parseInt(input.home);
    const awayScore = parseInt(input.away);

    setLoadingMatchId(matchId);
    setMessage(null);

    try {
      const result = await updateMatchScore(matchId, homeScore, awayScore);
      
      if (result.success) {
        // 1. Update match state locally
        const updatedMatches = matchesState.map(m => {
          if (m.id === matchId) {
            return { ...m, homeScore, awayScore, status: 'COMPLETED' as const };
          }
          return m;
        });
        setMatchesState(updatedMatches);

        // 2. Recalculate standings locally for immediate UI response
        const currentDivTeams = teamsState.filter(t => t.divisionId === selectedDivId);
        const divTeamIds = new Set(currentDivTeams.map(t => t.id));
        
        // Find completed matches in this division
        const completedDivMatches = updatedMatches.filter(
          m => m.status === 'COMPLETED' && divTeamIds.has(m.homeTeamId) && divTeamIds.has(m.awayTeamId)
        );

        const updatedTeams = teamsState.map(team => {
          if (team.divisionId !== selectedDivId) return team;

          let played = 0;
          let won = 0;
          let drawn = 0;
          let lost = 0;
          let goalsFor = 0;
          let goalsAgainst = 0;
          let points = 0;

          completedDivMatches.forEach(m => {
            if (m.homeTeamId === team.id) {
              played++;
              goalsFor += m.homeScore;
              goalsAgainst += m.awayScore;
              if (m.homeScore > m.awayScore) {
                won++;
                points += 3;
              } else if (m.homeScore < m.awayScore) {
                lost++;
              } else {
                drawn++;
                points += 1;
              }
            } else if (m.awayTeamId === team.id) {
              played++;
              goalsFor += m.awayScore;
              goalsAgainst += m.homeScore;
              if (m.awayScore > m.homeScore) {
                won++;
                points += 3;
              } else if (m.awayScore < m.homeScore) {
                lost++;
              } else {
                drawn++;
                points += 1;
              }
            }
          });

          return { ...team, played, won, drawn, lost, goalsFor, goalsAgainst, points };
        });

        setTeamsState(updatedTeams);
        
        // Clear input state for this match
        setScoreInputs(prev => {
          const next = { ...prev };
          delete next[matchId];
          return next;
        });

        setMessage({
          text: result.message || 'Score recorded! Standings recalculated below.',
          type: 'success'
        });
      } else {
        setMessage({ text: result.error || 'Failed to save score.', type: 'error' });
      }
    } catch (e: any) {
      setMessage({ text: e.message || 'Error occurred while saving.', type: 'error' });
    } finally {
      setLoadingMatchId(null);
    }
  };

  const handleResetScores = () => {
    setMatchesState(initialMatches);
    setTeamsState(initialTeams);
    setScoreInputs({});
    setMessage({ text: 'Reset match database standings to starting states.', type: 'info' });
  };

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* DB Connection Notice */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-4 bg-white/50">
        <div className="flex items-start space-x-3.5">
          <div className="w-10 h-10 rounded-xl bg-year-purple/10 flex items-center justify-center text-year-purple shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-slate-800 text-base">Interactive Simulation Mode</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xl leading-relaxed font-semibold">
              If NeonDB is not connected in your `.env.local`, changes are saved in local React memory. You can type score results, click save, and watch the group standings recalculate instantly below!
            </p>
          </div>
        </div>
        
        <button
          onClick={handleResetScores}
          className="px-4 py-2 rounded-lg border border-slate-200 hover:border-slate-350 text-xs font-bold text-slate-600 hover:text-slate-900 transition-all flex items-center space-x-1.5 self-stretch md:self-auto justify-center bg-white/60 shadow-sm"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Standings</span>
        </button>
      </div>

      {/* Message alerts */}
      {message && (
        <div
          className={`p-4 rounded-xl border text-xs sm:text-sm font-semibold flex items-center space-x-2.5 ${
            message.type === 'success'
              ? 'bg-cebu-green/10 border-cebu-green/20 text-cebu-green'
              : message.type === 'error'
              ? 'bg-red-500/10 border-red-500/20 text-red-500'
              : 'bg-copa-blue/10 border-copa-blue/20 text-copa-blue'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>{message.text}</span>
        </div>
      )}

      {/* Layout Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* Left Side: Navigation (5 cols) */}
        <div className="xl:col-span-5 space-y-6">
          
          {/* Division Selector panel */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-200/50 bg-white/50">
            <h3 className="font-display font-bold text-base text-slate-800 mb-3 flex items-center space-x-2">
              <LayoutGrid className="w-4.5 h-4.5 text-year-purple" />
              <span>Select Division</span>
            </h3>
            <div className="grid grid-cols-2 gap-1.5">
              {initialDivisions.map((div) => (
                <button
                  key={div.id}
                  onClick={() => {
                    setSelectedDivId(div.id);
                    setMessage(null);
                  }}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold text-left truncate transition-all ${
                    selectedDivId === div.id
                      ? 'bg-gradient-to-r from-copa-blue to-year-purple text-white shadow-md'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/50'
                  }`}
                >
                  {div.name}
                </button>
              ))}
            </div>
          </div>

          {/* Scores Panel */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-200/50 bg-white/50 space-y-4">
            <h3 className="font-display font-bold text-base text-slate-800 border-b border-slate-100 pb-2">
              Record Scores
            </h3>

            <div className="space-y-3">
              {divisionMatches.length === 0 ? (
                <div className="text-center py-6 text-xs text-slate-400">No scheduled matches for this division.</div>
              ) : (
                divisionMatches.map((match) => {
                  const input = scoreInputs[match.id] || { home: '', away: '' };
                  const isCompleted = match.status === 'COMPLETED';

                  return (
                    <div key={match.id} className="p-3.5 rounded-xl bg-white border border-slate-100 space-y-3 shadow-sm">
                      <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold">
                        <span className="text-year-purple uppercase">{match.round}</span>
                        {match.pitch && <span className="flex items-center"><MapPin className="w-2.5 h-2.5 mr-0.5" />{match.pitch}</span>}
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        {/* Home team */}
                        <div className="flex-1 text-xs font-bold text-slate-800 truncate text-right">
                          {getTeamName(match.homeTeamId)}
                        </div>

                        {/* Inputs */}
                        <div className="flex items-center space-x-1 shrink-0">
                          <input
                            type="text"
                            placeholder={isCompleted ? String(match.homeScore) : '0'}
                            value={input.home}
                            onChange={(e) => handleInputChange(match.id, 'home', e.target.value)}
                            disabled={loadingMatchId === match.id}
                            className="w-10 h-8 rounded bg-slate-50 border border-slate-200 text-center font-display font-black text-xs text-slate-800 focus:outline-none focus:border-copa-blue transition-colors disabled:opacity-50"
                          />
                          <span className="text-slate-400 font-bold">:</span>
                          <input
                            type="text"
                            placeholder={isCompleted ? String(match.awayScore) : '0'}
                            value={input.away}
                            onChange={(e) => handleInputChange(match.id, 'away', e.target.value)}
                            disabled={loadingMatchId === match.id}
                            className="w-10 h-8 rounded bg-slate-50 border border-slate-200 text-center font-display font-black text-xs text-slate-800 focus:outline-none focus:border-copa-blue transition-colors disabled:opacity-50"
                          />
                        </div>

                        {/* Away team */}
                        <div className="flex-1 text-xs font-bold text-slate-800 truncate text-left">
                          {getTeamName(match.awayTeamId)}
                        </div>
                      </div>

                      {/* Save action button */}
                      <div className="flex justify-between items-center pt-1 border-t border-slate-50 mt-1">
                        <span className="text-[10px] text-slate-400 font-bold uppercase">
                          {isCompleted ? 'Completed (Edit score)' : 'Pending kickoff'}
                        </span>
                        <button
                          onClick={() => handleSaveScore(match.id)}
                          disabled={loadingMatchId === match.id}
                          className="px-3 py-1 rounded bg-copa-blue hover:bg-copa-blue/90 disabled:bg-copa-blue/50 text-[10px] font-bold text-white transition-all flex items-center space-x-1 shadow-sm"
                        >
                          <Save className="w-3 h-3" />
                          <span>{loadingMatchId === match.id ? 'Saving...' : 'Save Score'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Recalculated Standings display (7 cols) */}
        <div className="xl:col-span-7">
          <div className="glass-panel rounded-2xl border border-slate-200/50 overflow-hidden shadow-xl bg-white/50">
            <div className="p-5 border-b border-slate-100 bg-white/[0.05] flex items-center justify-between">
              <h3 className="font-display font-bold text-base text-slate-800 flex items-center space-x-2">
                <Trophy className="w-4.5 h-4.5 text-cebu-green" />
                <span>Simulated Standings: {initialDivisions.find(d => d.id === selectedDivId)?.name}</span>
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-cebu-green/10 text-[9px] font-bold text-cebu-green border border-cebu-green/20 uppercase tracking-widest">
                Preview Table
              </span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-[9px] font-bold tracking-wider uppercase text-slate-500">
                    <th className="py-2.5 px-3 text-center w-10">Pos</th>
                    <th className="py-2.5 px-3">Team</th>
                    <th className="py-2.5 px-3 text-center w-8">P</th>
                    <th className="py-2.5 px-3 text-center w-8">W</th>
                    <th className="py-2.5 px-3 text-center w-8">D</th>
                    <th className="py-2.5 px-3 text-center w-8">L</th>
                    <th className="py-2.5 px-3 text-center w-8">GF</th>
                    <th className="py-2.5 px-3 text-center w-8">GA</th>
                    <th className="py-2.5 px-3 text-center w-8">GD</th>
                    <th className="py-2.5 px-3 text-center w-10 bg-slate-50 font-black text-slate-800">PTS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {divisionTeams.map((team, idx) => {
                    const gd = team.goalsFor - team.goalsAgainst;
                    const isTopTwo = idx < 2;
                    return (
                      <tr key={team.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3 px-3 text-center">
                          <span className={`inline-flex items-center justify-center w-5 h-5 rounded text-[10px] font-bold ${isTopTwo ? 'bg-cebu-green/10 text-cebu-green border border-cebu-green/20' : 'text-slate-400'}`}>
                            {idx + 1}
                          </span>
                        </td>
                        <td className="py-3 px-3 font-bold text-slate-800 truncate max-w-44">
                          {team.name}
                        </td>
                        <td className="py-3 px-3 text-center text-slate-600">{team.played}</td>
                        <td className="py-3 px-3 text-center text-slate-600">{team.won}</td>
                        <td className="py-3 px-3 text-center text-slate-600">{team.drawn}</td>
                        <td className="py-3 px-3 text-center text-slate-600">{team.lost}</td>
                        <td className="py-3 px-3 text-center text-slate-500">{team.goalsFor}</td>
                        <td className="py-3 px-3 text-center text-slate-500">{team.goalsAgainst}</td>
                        <td className={`py-3 px-3 text-center font-bold ${gd > 0 ? 'text-cebu-green' : gd < 0 ? 'text-red-500' : 'text-slate-400'}`}>
                          {gd > 0 ? `+${gd}` : gd}
                        </td>
                        <td className="py-3 px-3 text-center font-black text-slate-800 bg-slate-50/20">
                          {team.points}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
