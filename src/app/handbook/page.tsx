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

interface RuleItem {
  id: string;
  category: string;
  title: string;
  short: string;
  officialText: string;
  interpretation: string;
}

function RuleCard({ rule, index }: { rule: RuleItem; index: number }) {
  return (
    <div className="py-6 border-b border-slate-200/50 space-y-3.5 transition-all duration-300 hover:pl-2 origin-left">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3.5">
          <div className="w-7 h-7 rounded-none bg-slate-100 flex items-center justify-center text-slate-700 font-extrabold text-xs">
            {index}
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-slate-805 uppercase tracking-wider">{rule.title}</h4>
        </div>
        <span className="px-2.5 py-0.5 rounded-none text-[9px] font-bold bg-slate-50 text-slate-400 border border-slate-200/30 uppercase tracking-widest font-mono">
          Code {rule.id.split('-')[1]?.toUpperCase() || rule.id.toUpperCase()}
        </span>
      </div>
      
      <div className="space-y-2.5 font-sans pl-1">
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
          {rule.officialText}
        </p>
        
        {/* Sleek inline vertical indicator verdict line */}
        <div className="pl-4 border-l-2 border-cebu-green text-xs text-slate-500 font-semibold leading-relaxed py-0.5 mt-1.5">
          <strong className="text-slate-700 uppercase tracking-widest text-[9px] mr-1.5 font-sans">Official Verdict:</strong>
          {rule.interpretation}
        </div>
      </div>
    </div>
  );
}

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
    <div className="w-full space-y-10 py-4 animate-fade-in-up relative">
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
          The official interactive playbook. Browse, search, and inspect regulatory codes for COPA Cebu 2026.
        </p>
      </div>

      {/* Grid Layout: Sidebar Navigation & Main Document Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Sticky Table of Contents (3 cols) */}
        <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-4 py-2 pl-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Sections</span>
          <div className="flex flex-col space-y-3">
            {[
              { id: 'section-format', label: '1. Match Formats', icon: BookOpen },
              { id: 'section-gameplay', label: '2. Gameplay Rules', icon: Scale },
              { id: 'section-safety', label: '3. Safety & Footwear', icon: ShieldCheck }
            ].map((sec) => (
              <button
                key={sec.id}
                onClick={() => {
                  document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="w-full text-left py-1 text-sm sm:text-base font-extrabold text-slate-600 hover:text-copa-blue transition-all duration-300 hover:scale-105 origin-left flex items-center space-x-2.5 cursor-pointer"
              >
                <sec.icon className="w-4 h-4 shrink-0" />
                <span>{sec.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Main Document Content (9 cols) */}
        <div className="lg:col-span-9 space-y-12">
          
          {/* Category 1: Match Formats */}
          <div id="section-format" className="glass-panel p-6 sm:p-8 rounded-none space-y-6 scroll-mt-24">
            <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 uppercase leading-none transition-all duration-300 hover:scale-[1.01] origin-left">
                  1. Match Formats & Structure
                </h2>
                <p className="text-xs text-slate-500 mt-1.5 font-semibold">
                  Pitch layouts, match quantities, and setup definitions.
                </p>
              </div>
              
              {/* Relocated Search Bar */}
              <div className="relative w-full sm:w-64 shrink-0">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search handbook..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2 text-xs rounded-none bg-white border border-slate-200 focus:outline-hidden focus:border-copa-blue placeholder-slate-400 font-semibold text-slate-800 shadow-2xs"
                />
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {rulesList.filter(r => r.category === 'format' && (r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.short.toLowerCase().includes(searchQuery.toLowerCase()))).map((rule, idx) => (
                <RuleCard key={rule.id} rule={rule} index={idx + 1} />
              ))}
            </div>
          </div>

          {/* Category 2: Gameplay Rules */}
          <div id="section-gameplay" className="glass-panel p-6 sm:p-8 rounded-none space-y-6 scroll-mt-24">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 uppercase leading-none transition-all duration-300 hover:scale-[1.01] origin-left">
                2. Gameplay Regulations
              </h2>
              <p className="text-xs text-slate-500 mt-1.5 font-semibold">
                Points, substitution mechanics, gk setups, offsides, and knockouts.
              </p>
            </div>
            <div className="divide-y divide-slate-100">
              {rulesList.filter(r => r.category === 'gameplay' && (r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.short.toLowerCase().includes(searchQuery.toLowerCase()))).map((rule, idx) => (
                <RuleCard key={rule.id} rule={rule} index={idx + 1} />
              ))}
            </div>
          </div>

          {/* Category 3: Safety & Footwear */}
          <div id="section-safety" className="glass-panel p-6 sm:p-8 rounded-none space-y-6 scroll-mt-24">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 uppercase leading-none transition-all duration-300 hover:scale-[1.01] origin-left">
                3. Safety & Footwear Regulations
              </h2>
              <p className="text-xs text-slate-500 mt-1.5 font-semibold">
                Equipment policies, footwear standards, and medical standby protocols.
              </p>
            </div>
            <div className="divide-y divide-slate-100">
              {rulesList.filter(r => r.category === 'safety' && (r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.short.toLowerCase().includes(searchQuery.toLowerCase()))).map((rule, idx) => (
                <RuleCard key={rule.id} rule={rule} index={idx + 1} />
              ))}
              
              {/* Visual Footwear Inspector nested cleanly in Safety */}
              <div className="pt-8 space-y-5">
                <h3 className="font-display font-bold text-sm text-slate-805 uppercase tracking-wider">
                  Footwear Compliance Matrix
                </h3>
                <div className="py-4 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
                    {bootPolicies.map((boot, idx) => {
                      const isApproved = boot.status === 'APPROVED';
                      return (
                        <div 
                          key={idx} 
                          className={`flex flex-col justify-between space-y-4 ${idx > 0 ? 'md:pl-8' : ''} ${idx < 2 ? 'pb-6 md:pb-0' : ''}`}
                        >
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <div className={`w-9 h-9 rounded-none flex items-center justify-center shrink-0 ${
                                isApproved ? 'bg-emerald-500/10 text-emerald-600' : 'bg-rose-500/10 text-rose-600'
                              }`}>
                                <Footprints className="w-4.5 h-4.5" />
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-slate-800 leading-snug">{boot.name}</h4>
                                <span className="text-[9px] font-mono text-slate-400 block uppercase tracking-widest">Type 0{idx + 1}</span>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2">
                              <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-none text-[9px] font-extrabold border uppercase tracking-wider ${
                                isApproved 
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200/60' 
                                  : 'bg-rose-50 text-rose-700 border-rose-200/60'
                              }`}>
                                <span className={`w-1.5 h-1.5 rounded-none ${isApproved ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                                <span>{boot.status}</span>
                              </span>
                            </div>

                            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                              {boot.desc}
                            </p>
                          </div>

                          <div className="p-3.5 rounded-none bg-slate-50 border border-slate-200/40 text-[10px] text-slate-655 font-semibold leading-relaxed">
                            <span className="font-bold text-slate-800 block text-[9px] uppercase tracking-wider mb-0.5">Referee Directive</span>
                            {boot.advice}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
