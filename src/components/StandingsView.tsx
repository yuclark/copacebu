'use client';

import { useState } from 'react';
import { Division, Team, Match } from '@/lib/mockData';
import { Trophy, Calendar, MapPin, Play } from 'lucide-react';

interface Props {
  divisions: Division[];
  teams: Team[];
  matches: Match[];
}

export default function StandingsView({ divisions, teams, matches }: Props) {
  const defaultDivision = divisions.find(d => d.id === 'mens-open') || divisions[0];
  const [selectedDivisionId, setSelectedDivisionId] = useState(defaultDivision.id);

  // Filter and sort teams for the selected division based on rules:
  // 1. Points
  // 2. Goal Difference
  // 3. Goals For (Goals Scored)
  // 4. Goals Against (Goals Conceded - fewer is better)
  const divisionTeams = teams
    .filter(t => t.divisionId === selectedDivisionId)
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      const gdA = a.goalsFor - a.goalsAgainst;
      const gdB = b.goalsFor - b.goalsAgainst;
      if (gdB !== gdA) return gdB - gdA;
      if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
      return a.goalsAgainst - b.goalsAgainst;
    });

  // Filter matches for the selected division
  const currentDivisionTeams = teams.filter(t => t.divisionId === selectedDivisionId);
  const teamIds = new Set(currentDivisionTeams.map(t => t.id));
  const divisionMatches = matches
    .filter(m => teamIds.has(m.homeTeamId) && teamIds.has(m.awayTeamId))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const getTeamName = (id: string) => teams.find(t => t.id === id)?.name || 'Unknown Team';

  // Group divisions by category
  const categories = {
    'Mixed (P-7 to P-13)': divisions.filter(d => d.category === 'Mixed'),
    'Boys (P-15 to P-17)': divisions.filter(d => d.category === 'Boys'),
    'Open Categories': divisions.filter(d => d.category === 'Open'),
  };

  const formatDate = (dateInput: Date | string) => {
    const d = new Date(dateInput);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Sidebar navigation for divisions */}
      <div className="lg:col-span-1 space-y-6">
        <div className="glass-panel p-6 rounded-2xl border border-slate-200/50">
          <h3 className="font-display font-bold text-lg text-slate-800 mb-4 flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-year-purple" />
            <span>Select Division</span>
          </h3>
          <div className="space-y-6">
            {Object.entries(categories).map(([catName, divs]) => (
              <div key={catName} className="space-y-2">
                <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">{catName}</span>
                <div className="flex flex-col space-y-1">
                  {divs.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDivisionId(d.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                        selectedDivisionId === d.id
                          ? 'bg-gradient-to-r from-copa-blue to-year-purple text-white shadow-md'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                      }`}
                    >
                      {d.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Standings Table & Matches */}
      <div className="lg:col-span-2 space-y-8">
        {/* Table glass panel */}
        <div className="glass-panel rounded-2xl border border-slate-200/50 overflow-hidden shadow-xl">
          <div className="p-6 border-b border-slate-100 bg-white/[0.05] flex items-center justify-between">
            <h2 className="font-display font-bold text-xl text-slate-900">
              Standings &mdash; {divisions.find(d => d.id === selectedDivisionId)?.name}
            </h2>
            <span className="px-2.5 py-1 rounded-full bg-copa-blue/10 text-[10px] font-bold text-copa-blue border border-copa-blue/20">
              Live Updates
            </span>
          </div>

          <div className="overflow-x-auto">
            {divisionTeams.length === 0 ? (
              <div className="p-8 text-center text-slate-500 text-sm">
                No teams registered in this division yet.
              </div>
            ) : (
              <table className="w-full text-left text-sm border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold tracking-wider uppercase text-slate-500">
                    <th className="py-3.5 px-4 text-center w-12">Pos</th>
                    <th className="py-3.5 px-4">Club/Team</th>
                    <th className="py-3.5 px-4 text-center w-12">P</th>
                    <th className="py-3.5 px-4 text-center w-12">W</th>
                    <th className="py-3.5 px-4 text-center w-12">D</th>
                    <th className="py-3.5 px-4 text-center w-12">L</th>
                    <th className="py-3.5 px-4 text-center w-12">GF</th>
                    <th className="py-3.5 px-4 text-center w-12">GA</th>
                    <th className="py-3.5 px-4 text-center w-12">GD</th>
                    <th className="py-3.5 px-4 text-center w-16 bg-slate-50 font-black text-slate-800">PTS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {divisionTeams.map((team, idx) => {
                    const gd = team.goalsFor - team.goalsAgainst;
                    const isTopTwo = idx < 2; // Advance slots
                    return (
                      <tr
                        key={team.id}
                        className="hover:bg-slate-50/50 transition-colors group"
                      >
                        <td className="py-4 px-4 text-center">
                          <span
                            className={`inline-flex items-center justify-center w-6 h-6 rounded-md text-xs font-bold ${
                              isTopTwo
                                ? 'bg-cebu-green/10 text-cebu-green border border-cebu-green/20'
                                : 'text-slate-400'
                            }`}
                          >
                            {idx + 1}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-bold text-slate-800 group-hover:text-copa-blue transition-colors">
                          {team.name}
                        </td>
                        <td className="py-4 px-4 text-center text-slate-600">{team.played}</td>
                        <td className="py-4 px-4 text-center text-slate-600">{team.won}</td>
                        <td className="py-4 px-4 text-center text-slate-600">{team.drawn}</td>
                        <td className="py-4 px-4 text-center text-slate-600">{team.lost}</td>
                        <td className="py-4 px-4 text-center text-slate-500">{team.goalsFor}</td>
                        <td className="py-4 px-4 text-center text-slate-500">{team.goalsAgainst}</td>
                        <td className={`py-4 px-4 text-center font-bold ${gd > 0 ? 'text-cebu-green' : gd < 0 ? 'text-red-500' : 'text-slate-400'}`}>
                          {gd > 0 ? `+${gd}` : gd}
                        </td>
                        <td className="py-4 px-4 text-center font-black text-slate-800 bg-slate-50/30">
                          {team.points}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
          
          <div className="p-4 bg-slate-50/50 border-t border-slate-100 text-[10px] text-slate-500 flex items-center space-x-1.5 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-cebu-green" />
            <span>Top-ranked teams advance to the knockout stages.</span>
          </div>
        </div>

        {/* Schedule / Matches Panel */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-200/50 shadow-xl">
          <h3 className="font-display font-bold text-lg text-slate-800 mb-4 flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-copa-blue" />
            <span>Division Matches & Results</span>
          </h3>

          <div className="space-y-4">
            {divisionMatches.length === 0 ? (
              <div className="p-6 text-center text-slate-500 text-sm">
                No fixtures scheduled for this division yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3">
                {divisionMatches.map((match) => {
                  const isLive = match.status === 'LIVE';
                  const isCompleted = match.status === 'COMPLETED';

                  return (
                    <div
                      key={match.id}
                      className="glass-panel p-4 rounded-xl border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/40 relative overflow-hidden"
                    >
                      {isLive && (
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 to-year-purple animate-pulse" />
                      )}
                      
                      {/* Match Details */}
                      <div className="flex flex-col space-y-1 self-start sm:self-center">
                        <span className="text-[10px] font-extrabold tracking-widest text-year-purple uppercase">
                          {match.round}
                        </span>
                        <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
                          <span>{formatDate(match.date)}</span>
                          {match.pitch && (
                            <>
                              <span>&bull;</span>
                              <span className="flex items-center text-slate-700">
                                <MapPin className="w-3 h-3 mr-1" />
                                {match.pitch}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Scoreboard block */}
                      <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-start">
                        {/* Home team */}
                        <span className="text-sm font-bold text-slate-800 text-right w-28 sm:w-36 truncate">
                          {getTeamName(match.homeTeamId)}
                        </span>
                        
                        {/* Scores */}
                        <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200/50 font-display font-extrabold text-sm min-w-16 justify-center text-slate-900">
                          {isCompleted || isLive ? (
                            <>
                              <span className={match.homeScore > match.awayScore ? 'text-cebu-green' : 'text-slate-700'}>
                                {match.homeScore}
                              </span>
                              <span className="text-slate-400 font-normal">:</span>
                              <span className={match.awayScore > match.homeScore ? 'text-cebu-green' : 'text-slate-700'}>
                                {match.awayScore}
                              </span>
                            </>
                          ) : (
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">VS</span>
                          )}
                        </div>

                        {/* Away team */}
                        <span className="text-sm font-bold text-slate-800 text-left w-28 sm:w-36 truncate">
                          {getTeamName(match.awayTeamId)}
                        </span>
                      </div>

                      {/* Status pill */}
                      <div className="self-end sm:self-center shrink-0">
                        {isLive && (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold border border-red-500/20 uppercase tracking-widest animate-pulse">
                            <Play className="w-2.5 h-2.5 fill-red-500" />
                            <span>Live</span>
                          </span>
                        )}
                        {isCompleted && (
                          <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-semibold border border-slate-200">
                            Final
                          </span>
                        )}
                        {match.status === 'SCHEDULED' && (
                          <span className="px-2.5 py-1 rounded-full bg-copa-blue/10 text-copa-blue text-[10px] font-semibold border border-copa-blue/20">
                            Scheduled
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
