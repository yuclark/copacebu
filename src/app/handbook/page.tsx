"use client";

import { useState } from 'react';
import { 
  Search, 
  ChevronRight, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  Scale,
  Footprints
} from 'lucide-react';

export default function HandbookPage() {
  // 1. Filter and Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'format' | 'gameplay' | 'safety'>('all');
  const [selectedRuleId, setSelectedRuleId] = useState('format-divisions');

  // Rules Data Array
  const rulesList = [
    {
      id: 'format-divisions',
      category: 'format',
      title: 'Playing Format & Pitch Sizes',
      short: 'Divisions play in 8-aside or 9-aside formats.',
      officialText: 'The playing format differs by age bracket to optimize player touches. P-7 and P-9 brackets play 8-aside matches on a 1/6 pitch size. P-11 and above divisions play 9-aside on a 1/3 pitch size layout.',
      interpretation: 'Coaches must field exactly 8 players (including GK) for junior divisions and 9 players for senior/open divisions. Pitch dimensions are lined on turf fields.'
    },
    {
      id: 'format-games',
      category: 'format',
      title: 'Guaranteed Match Counts',
      short: 'Minimum of 5 games guaranteed.',
      officialText: 'All registered teams in all divisions (from youth brackets up to Mens and Womens Open) are guaranteed to play a minimum of five (5) games throughout the three-day event schedule.',
      interpretation: 'In case of group stage withdrawals, points and matches will be adjusted dynamically by the credentials desk to maintain the 5-game guarantee.'
    },
    {
      id: 'format-brackets',
      category: 'format',
      title: 'Tournament Structure',
      short: 'Round-robin group stages leading to knockouts.',
      officialText: 'Teams compete in a round-robin format within their allocated groups. The top-performing squads from each group pool advance directly to single-elimination knockout brackets.',
      interpretation: 'Knockout match-ups are seeded based on final group stage placements. Check the Live Standings tab for updated standings.'
    },
    {
      id: 'gameplay-points',
      category: 'gameplay',
      title: 'Points Allocation Ledger',
      short: '3 points for a win, 1 point for a draw.',
      officialText: 'Group rankings are computed based on points earned: three (3) points for a win, one (1) point for a draw, and zero (0) points for a loss.',
      interpretation: 'Forfeited matches result in an automatic 3-0 scoreline credited to the opposing team, with 3 points allocated accordingly.'
    },
    {
      id: 'gameplay-tiebreakers',
      category: 'gameplay',
      title: 'Tie-Breaker Hierarchy',
      short: 'Calculated using goal difference, goals scored, and head-to-head.',
      officialText: 'If teams are tied in group points, placements are settled in order: 1) Goal Difference (GF-GA), 2) Goals Scored (GF), 3) Goals Conceded (GA), 4) Head-to-Head, 5) Shootout.',
      interpretation: 'In rare cases where all variables match, a direct sudden-death penalty shootout is scheduled between the teams.'
    },
    {
      id: 'gameplay-subs',
      category: 'gameplay',
      title: 'Unlimited Substitutions',
      short: 'Rolling substitutions allowed on-the-fly.',
      officialText: 'Matches run under rolling substitutions. Players can re-enter. Play does not stop for subs, except during a goalkeeper swap, which requires referee notification.',
      interpretation: 'Substitutes must wait for the leaving player to fully step off the pitch at mid-field before entering the field of play.'
    },
    {
      id: 'gameplay-offside',
      category: 'gameplay',
      title: 'Offside Exception Rules',
      short: 'Offsides are NOT in effect for any division.',
      officialText: 'To promote fast-paced match flow and scoring opportunities, the offside rule is not active. Players cannot be flagged for offsides in either 8-aside or 9-aside formats.',
      interpretation: 'Strikers are legally allowed to position themselves behind the last defender. Deep positioning is fully permitted.'
    },
    {
      id: 'gameplay-kickoff',
      category: 'gameplay',
      title: 'Direct Kick-Off Scoring',
      short: 'Goals scored directly from kickoff do not count.',
      officialText: 'A goal cannot be scored directly from a kickoff. The ball must be touched or deflected by at least one other player on the pitch before passing the goal line to count as a goal.',
      interpretation: 'If a kickoff shot enters the net untouched, a goal kick is awarded to the defensive team.'
    },
    {
      id: 'gameplay-gk',
      category: 'gameplay',
      title: 'Goalkeeper Exceptions',
      short: 'Backpass rules apply; no direct throws scoring.',
      officialText: 'Goalkeepers are prohibited from handling backpasses from teammate feet. Goal throws cannot score directly; volleys during active play can count as direct goals.',
      interpretation: 'Picking up a backpass results in an indirect free kick for the opposition at the spot of the infraction.'
    },
    {
      id: 'gameplay-knockouts',
      category: 'gameplay',
      title: 'Knockout Tie Shootouts',
      short: 'Sudden death penalty setups determine ties.',
      officialText: 'Quarter/Semi-finals tied at regulation go straight to sudden death penalty shootouts (1 kicker). Championship finals play a standard 3-kicker shootout, followed by sudden death.',
      interpretation: 'No extra time halves are played. Teams proceed directly to the penalty mark to maintain schedule alignment.'
    },
    {
      id: 'safety-boots',
      category: 'safety',
      title: 'Turf Footwear Policy',
      short: 'FG and AG cleats are approved; metal studs are banned.',
      officialText: 'All matches are played on artificial turf fields. Detachable metal studs or soft-ground spikes are strictly prohibited to prevent turf tears and injury.',
      interpretation: 'Referee inspections take place before each match. Standard plastic/rubber moulded cleats or flat turf trainers are approved.'
    },
    {
      id: 'safety-medical',
      category: 'safety',
      title: 'Medical Standby Crew',
      short: 'Dedicated first-aid responders standby pitch-side.',
      officialText: 'A professional medical team will be positioned pitch-side during all active tournament hours to handle injuries, emergencies, or first-aid responses.',
      interpretation: 'Coaches must stop play immediately if a referee signals a medical stoppage. Only certified medical crews may enter for treatments.'
    }
  ];


  // Boot Visual Policy Data
  const bootPolicies = [
    {
      name: 'Firm Ground (FG / AG) Cleats',
      status: 'APPROVED',
      statusClass: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
      icon: CheckCircle2,
      desc: 'Moulded plastic or rubber studs. Engineered specifically for artificial turf and dry grass traction. Fully legal across all divisions.',
      advice: 'The recommended boot type for the Dynamic Herb Sports Complex turf.'
    },
    {
      name: 'Turf Trainers (TF)',
      status: 'APPROVED',
      statusClass: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
      icon: CheckCircle2,
      desc: 'Flat rubber outsoles with dozens of small, short rubber dimples. Highly recommended for junior players in P-7 and P-9 divisions.',
      advice: 'Provides excellent traction and minimizes joint fatigue on turf.'
    },
    {
      name: 'Metal Spikes (SG) Boots',
      status: 'PROHIBITED',
      statusClass: 'bg-rose-500/10 text-rose-700 border-rose-500/20',
      icon: XCircle,
      desc: 'Detachable metal studs, aluminium spikes, or soft-ground configurations. Strictly banned to prevent turf damage and severe cuts.',
      advice: 'If worn during pre-match check, players must change footwear before entry.'
    }
  ];

  // Filtering Logic
  const filteredRules = rulesList.filter(rule => {
    const matchesSearch = rule.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          rule.short.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || rule.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const activeRule = rulesList.find(r => r.id === selectedRuleId) || rulesList[0];

  return (
    <div className="w-full space-y-16 py-4 animate-fade-in-up relative">
      {/* Background outline decorative text */}
      <div className="absolute top-[-30px] right-[-10px] text-[10vw] font-black text-slate-100/40 select-none pointer-events-none z-[-2] tracking-tighter">
        HANDBOOK
      </div>

      {/* Header */}
      <div className="space-y-2 border-b border-slate-100 pb-6">
        <span className="text-[10px] font-bold text-copa-blue uppercase tracking-widest bg-copa-blue/5 border border-copa-blue/10 px-3 py-1 rounded-full">
          Official Manual & Directives
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-slate-900 leading-none mt-2">
          Tournament <span className="text-gradient-copa-cebu">Handbook</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed">
          The official interactive playbook. Select, search, and simulate gameplay handbook rules for COPA Cebu 2026.
        </p>
      </div>

      {/* Section 1: Interactive Rule Inspector Directory (Split Screen) */}
      <div className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-display font-bold text-2xl text-slate-900">
              Interactive <span className="text-gradient-copa">Rule Inspector</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Search the regulatory code or filter by category to inspect official interpretations.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search handbook..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-hidden focus:border-copa-blue font-medium"
            />
          </div>
        </div>

        {/* Category Filter Tags */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Regulations' },
            { id: 'format', label: 'Match Formats' },
            { id: 'gameplay', label: 'Gameplay Rules' },
            { id: 'safety', label: 'Safety & Footwear' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase border transition-all ${
                activeCategory === cat.id
                  ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                  : 'bg-white border-slate-100 text-slate-500 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Split Screen Inspector Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Rules Directory List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[480px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredRules.length > 0 ? (
              filteredRules.map((rule) => {
                const isSelected = selectedRuleId === rule.id;
                return (
                  <button
                    key={rule.id}
                    onClick={() => setSelectedRuleId(rule.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                      isSelected 
                        ? 'border-copa-blue bg-white shadow-[0_4px_20px_-4px_rgba(0,124,255,0.12)]' 
                        : 'border-slate-100 bg-white/40 hover:bg-white/80 hover:border-slate-200'
                    }`}
                  >
                    <div className="space-y-1 pr-2">
                      <span className={`text-[8px] font-bold uppercase tracking-wider block ${
                        rule.category === 'format' ? 'text-copa-blue' : rule.category === 'gameplay' ? 'text-year-purple' : 'text-emerald-600'
                      }`}>
                        Category: {rule.category}
                      </span>
                      <strong className={`text-xs block font-bold transition-colors leading-tight ${
                        isSelected ? 'text-copa-blue' : 'text-slate-800'
                      }`}>
                        {rule.title}
                      </strong>
                      <span className="text-[10px] text-slate-400 block truncate max-w-[280px]">
                        {rule.short}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-copa-blue translate-x-1' : 'text-slate-400 opacity-0 group-hover:opacity-100'
                    }`} />
                  </button>
                );
              })
            ) : (
              <div className="p-8 text-center bg-white/40 border border-dashed border-slate-200 rounded-3xl text-slate-400 text-xs">
                No matching regulations found.
              </div>
            )}
          </div>

          {/* Right Side: Rule Detailed Directive Clipboard (7 cols) */}
          <div className="lg:col-span-7">
            <div className="hover-card p-6 sm:p-8 rounded-3xl min-h-[380px] flex flex-col justify-between bg-white relative overflow-hidden">
              {/* Subtle background decoration */}
              <div className="absolute right-[-20px] bottom-[-20px] text-slate-100 font-display font-black text-[12vw] select-none pointer-events-none z-[0] opacity-40">
                REF
              </div>

              <div className="space-y-6 relative z-[1]">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Governing Code</span>
                      <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-800 uppercase mt-0.5">
                        {activeRule.title}
                      </h3>
                    </div>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold border uppercase tracking-wider ${
                    activeRule.category === 'format' 
                      ? 'bg-blue-50 text-blue-700 border-blue-200/50' 
                      : activeRule.category === 'gameplay' 
                        ? 'bg-purple-50 text-purple-700 border-purple-200/50' 
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200/50'
                  }`}>
                    {activeRule.category}
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-sans">Official Hand Book Text</span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                    {activeRule.officialText}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-sans">Referee Interpretation / Verdict</span>
                  <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 shadow-sm flex items-start space-x-3.5">
                    <Scale className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[9px] font-mono text-emerald-400 block uppercase tracking-wider">MATCH OFFICIAL VERDICT</span>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium mt-0.5">
                        {activeRule.interpretation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Roster Badge Info */}
              <div className="flex items-center space-x-2.5 pt-4 border-t border-slate-100 mt-4 text-[10px] font-bold text-slate-500">
                <ShieldCheck className="w-4 h-4 text-copa-blue shrink-0" />
                <span>All decisions are subject to the final ruling of the Head Referee Committee.</span>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* Section 3: Visual Boot Check Policy Inspector */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display font-bold text-2xl text-slate-900">
            Official <span className="text-gradient-copa-cebu">Footwear Inspector</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Rules regarding turf safety are strict. Inspect shoe allowances below to prepare your gear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bootPolicies.map((boot, idx) => {
            const Icon = boot.icon;
            return (
              <div 
                key={idx} 
                className="hover-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between bg-white border border-slate-200/50 relative overflow-hidden group space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-800">
                        <Footprints className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-800 leading-snug">{boot.name}</h4>
                        <span className="text-[8px] text-slate-400 block font-mono">TYPE-0{idx + 1}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className={`px-2 py-0.5 rounded text-[8px] font-bold border tracking-wider inline-block ${boot.statusClass}`}>
                      {boot.status}
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      {boot.desc}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-[10px] text-slate-650 font-medium">
                  <span className="font-bold text-slate-800 block text-[9px] uppercase tracking-wider mb-0.5">Referee Advice</span>
                  {boot.advice}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
