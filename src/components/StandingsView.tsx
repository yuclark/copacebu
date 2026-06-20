'use client';

import { useState } from 'react';
import { Division, Team } from '@/lib/mockData';
import { Trophy } from 'lucide-react';

interface Props {
  divisions: Division[];
  teams: Team[];
}

export default function StandingsView({ divisions, teams }: Props) {
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

  // Group divisions by category
  const categories = {
    'Mixed (P-7 to P-13)': divisions.filter(d => d.category === 'Mixed'),
    'Boys (P-15 to P-17)': divisions.filter(d => d.category === 'Boys'),
    'Open Categories': divisions.filter(d => d.category === 'Open'),
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

      </div>
    </div>
  );
}
