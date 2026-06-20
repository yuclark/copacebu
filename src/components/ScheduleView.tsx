'use client';

import { useState } from 'react';
import { Division, Team, Match } from '@/lib/mockData';
import { Calendar, Play, Trophy, Award, Shield, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

interface Props {
  divisions: Division[];
  teams: Team[];
  matches: Match[];
}

type RoundFilter = 'GROUP' | 'QF' | 'SF' | 'FINAL';

export default function ScheduleView({ divisions, teams, matches }: Props) {
  const defaultDivision = divisions.find(d => d.id === 'mens-open') || divisions[0];
  const [selectedDivisionId, setSelectedDivisionId] = useState(defaultDivision.id);
  const [roundFilter, setRoundFilter] = useState<RoundFilter>('GROUP');
  const [activeDateIndex, setActiveDateIndex] = useState(0);
  const [matchPageIndex, setMatchPageIndex] = useState(0);

  // Filter teams for the selected division to get their IDs
  const divisionTeams = teams.filter(t => t.divisionId === selectedDivisionId);
  const teamIds = new Set(divisionTeams.map(t => t.id));

  // Filter matches belonging to the selected division
  let divisionMatches = matches.filter(
    m => teamIds.has(m.homeTeamId) && teamIds.has(m.awayTeamId)
  );

  // Apply round/stage filter
  divisionMatches = divisionMatches.filter(m => {
    if (roundFilter === 'GROUP') return m.round === 'Group Stage';
    if (roundFilter === 'QF') return m.round === 'Quarter-Final';
    if (roundFilter === 'SF') return m.round === 'Semi-Final';
    if (roundFilter === 'FINAL') return m.round === 'Championship';
    return false;
  });

  // Sort matches by date/time
  divisionMatches.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const getTeamName = (id: string) => teams.find(t => t.id === id)?.name || 'Unknown Team';

  // Group divisions by category for the sidebar
  const categories = {
    'Mixed (P-7 to P-13)': divisions.filter(d => d.category === 'Mixed'),
    'Boys (P-15 to P-17)': divisions.filter(d => d.category === 'Boys'),
    'Open Categories': divisions.filter(d => d.category === 'Open'),
  };

  const formatDateHeader = (dateInput: Date | string) => {
    const d = new Date(dateInput);
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  // Group matches by date
  const matchesByDate: { [key: string]: Match[] } = {};
  divisionMatches.forEach(match => {
    const dateHeader = formatDateHeader(match.date);
    if (!matchesByDate[dateHeader]) {
      matchesByDate[dateHeader] = [];
    }
    matchesByDate[dateHeader].push(match);
  });

  const dateKeys = Object.keys(matchesByDate);
  const hasMultipleDates = dateKeys.length > 1;

  // Safeguard active date index bounds
  const currentActiveIndex = activeDateIndex >= dateKeys.length ? 0 : activeDateIndex;
  const currentDateHeader = dateKeys[currentActiveIndex];
  const currentDateMatches = currentDateHeader ? matchesByDate[currentDateHeader] : [];

  // Match sliding pagination logic (max 4 matches per page)
  const gamesPerSlide = 4;
  const totalMatchPages = Math.ceil(currentDateMatches.length / gamesPerSlide);
  const currentMatchPageIndex = matchPageIndex >= totalMatchPages ? 0 : matchPageIndex;

  // Slice the current date matches for the active slide
  const displayedMatches = currentDateMatches.slice(
    currentMatchPageIndex * gamesPerSlide,
    (currentMatchPageIndex + 1) * gamesPerSlide
  );

  const tabs: { id: RoundFilter; label: string; icon: any; iconColor: string }[] = [
    { id: 'GROUP', label: 'Group Stage', icon: Trophy, iconColor: 'text-copa-blue' },
    { id: 'QF', label: 'Quarterfinals', icon: Shield, iconColor: 'text-year-purple' },
    { id: 'SF', label: 'Semi Finals', icon: Award, iconColor: 'text-cebu-green' },
    { id: 'FINAL', label: 'Finals', icon: Trophy, iconColor: 'text-amber-500' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Sidebar navigation for divisions */}
      <div className="lg:col-span-1 space-y-6">
        <div className="glass-panel p-6 rounded-2xl border border-slate-200/50 shadow-sm">
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
                      onClick={() => {
                        setSelectedDivisionId(d.id);
                        setRoundFilter('GROUP');
                        setActiveDateIndex(0);
                        setMatchPageIndex(0);
                      }}
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

      {/* Matches schedule panel */}
      <div className="lg:col-span-2 space-y-6">
        {/* Filter Tabs by Stage */}
        <div className="glass-panel p-2.5 rounded-2xl border border-slate-200/50 flex flex-wrap gap-1 shadow-sm">
          {tabs.map(tab => {
            const active = roundFilter === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setRoundFilter(tab.id);
                  setActiveDateIndex(0);
                  setMatchPageIndex(0);
                }}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  active
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? 'text-white' : tab.iconColor}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Date Pager Header Control */}
        {dateKeys.length > 0 && (
          <div className="glass-panel p-4 rounded-2xl border border-slate-200/50 flex items-center justify-between bg-white/60 shadow-sm">
            {hasMultipleDates ? (
              <button
                onClick={() => {
                  setActiveDateIndex(prev => (prev === 0 ? dateKeys.length - 1 : prev - 1));
                  setMatchPageIndex(0);
                }}
                className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 active:scale-95 transition-all border border-slate-200/50 bg-white"
                aria-label="Previous Day"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            ) : (
              <div className="w-9 h-9" />
            )}

            <div className="flex flex-col sm:flex-row items-center sm:space-x-3 text-center">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-copa-blue" />
                <span className="font-display font-extrabold text-sm sm:text-base text-slate-800 uppercase tracking-wider">
                  {currentDateHeader}
                </span>
              </div>
              {hasMultipleDates && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200 mt-1 sm:mt-0">
                  Day {currentActiveIndex + 1} of {dateKeys.length}
                </span>
              )}
            </div>

            {hasMultipleDates ? (
              <button
                onClick={() => {
                  setActiveDateIndex(prev => (prev === dateKeys.length - 1 ? 0 : prev + 1));
                  setMatchPageIndex(0);
                }}
                className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 active:scale-95 transition-all border border-slate-200/50 bg-white"
                aria-label="Next Day"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <div className="w-9 h-9" />
            )}
          </div>
        )}

        {/* Matches list container */}
        <div className="space-y-4">
          {dateKeys.length === 0 ? (
            <div className="glass-panel p-12 text-center text-slate-500 text-sm rounded-2xl border border-slate-200/50 shadow-sm">
              No fixtures scheduled for this stage in the selected division.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4">
                {displayedMatches.map(match => {
                  const isLive = match.status === 'LIVE';
                  const isCompleted = match.status === 'COMPLETED';

                  return (
                    <div
                      key={match.id}
                      className={`hover-card p-5 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-5 bg-white/70 relative overflow-hidden ${
                        isLive ? 'border-red-200 ring-1 ring-red-500/20' : 'border-slate-200/50'
                      }`}
                    >
                      {isLive && (
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 via-year-purple to-red-500 animate-pulse" />
                      )}

                      {/* Match details & round */}
                      <div className="flex flex-col space-y-1 self-start sm:self-center">
                        <span className="text-[10px] font-extrabold tracking-widest text-year-purple uppercase">
                          {match.round}
                        </span>
                        {match.pitch && (
                          <span className="flex items-center text-xs text-slate-500 font-semibold">
                            <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                            {match.pitch}
                          </span>
                        )}
                      </div>

                      {/* Scoreboard Block */}
                      <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-start">
                        {/* Home team */}
                        <span className="text-sm sm:text-base font-extrabold text-slate-800 text-right w-[120px] sm:w-[180px] truncate leading-tight">
                          {getTeamName(match.homeTeamId)}
                        </span>

                        {/* Score box */}
                        <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-100/80 border border-slate-200/60 font-display font-black text-base min-w-[76px] justify-center text-slate-900 shadow-inner">
                          {isCompleted || isLive ? (
                            <>
                              <span
                                className={
                                  match.homeScore > match.awayScore
                                    ? 'text-cebu-green font-extrabold'
                                    : 'text-slate-600 font-medium'
                                }
                              >
                                {match.homeScore}
                              </span>
                              <span className="text-slate-300 font-normal">:</span>
                              <span
                                className={
                                  match.awayScore > match.homeScore
                                    ? 'text-cebu-green font-extrabold'
                                    : 'text-slate-600 font-medium'
                                }
                              >
                                {match.awayScore}
                              </span>
                            </>
                          ) : (
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                              VS
                            </span>
                          )}
                        </div>

                        {/* Away team */}
                        <span className="text-sm sm:text-base font-extrabold text-slate-800 text-left w-[120px] sm:w-[180px] truncate leading-tight">
                          {getTeamName(match.awayTeamId)}
                        </span>
                      </div>

                      {/* Match Status Badge */}
                      <div className="self-end sm:self-center shrink-0">
                        {isLive && (
                          <span className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold border border-red-500/20 uppercase tracking-widest animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping mr-1" />
                            <span>Live</span>
                          </span>
                        )}
                        {isCompleted && (
                          <span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold border border-slate-200 uppercase tracking-widest">
                            Final
                          </span>
                        )}
                        {match.status === 'SCHEDULED' && (
                          <span className="px-3 py-1.5 rounded-full bg-copa-blue/10 text-copa-blue text-[10px] font-bold border border-copa-blue/20 uppercase tracking-widest">
                            Scheduled
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Pagination Switcher */}
              {totalMatchPages > 1 && (
                <div className="glass-panel p-4 rounded-2xl border border-slate-200/50 flex items-center justify-between bg-white/60 shadow-sm mt-4">
                  <button
                    onClick={() => setMatchPageIndex(prev => (prev === 0 ? totalMatchPages - 1 : prev - 1))}
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-xl border border-slate-200/50 bg-white text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 active:scale-95 transition-all shadow-sm"
                    aria-label="Previous Page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Prev</span>
                  </button>

                  <span className="text-[10px] sm:text-xs font-bold text-slate-500 text-center">
                    Slide {currentMatchPageIndex + 1} of {totalMatchPages} &bull; Showing {currentMatchPageIndex * gamesPerSlide + 1}–{Math.min((currentMatchPageIndex + 1) * gamesPerSlide, currentDateMatches.length)} of {currentDateMatches.length} matches
                  </span>

                  <button
                    onClick={() => setMatchPageIndex(prev => (prev === totalMatchPages - 1 ? 0 : prev + 1))}
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-xl border border-slate-200/50 bg-white text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 active:scale-95 transition-all shadow-sm"
                    aria-label="Next Page"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
