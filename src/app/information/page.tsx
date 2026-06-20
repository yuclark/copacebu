"use client";

import { useState } from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Compass, 
  FileText, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';

export default function InformationPage() {
  // 1. Milestone Ledger State
  const [activeMilestone, setActiveMilestone] = useState(2);
  const milestoneLedger = [
    {
      date: 'May 1, 2026',
      phase: 'Early Bird Registration',
      pricing: '₱1,000 Off (P-11+) | ₱500 Off (P-9-)',
      status: 'Concluded',
      statusClass: 'bg-slate-100 text-slate-600 border-slate-200/60',
      tagline: 'Discounted rate window has closed.',
      details: 'Early registration discounts ended on May 1, 2026. All active teams are registered under the standard tournament fee schedule.'
    },
    {
      date: 'June 5, 2026',
      phase: 'Roster Submission Lock',
      pricing: 'Final lists & player IDs due',
      status: 'Locked',
      statusClass: 'bg-slate-100 text-slate-600 border-slate-200/60',
      tagline: 'Rosters locked on June 5.',
      details: 'All rosters, player profiles, and age verifications are finalized. In alignment with tournament rules, no roster modifications or late player additions are permitted during the matches.'
    },
    {
      date: 'June 19-21, 2026',
      phase: 'Copa Cebu Tournament',
      pricing: 'Kick-off matches & group rounds',
      status: 'Ongoing',
      statusClass: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20 shadow-[0_0_12px_rgba(32,201,108,0.2)]',
      tagline: 'Day 2 matches underway at Dynamic Herb.',
      details: 'The tournament is actively in progress. Day 2 matches are currently underway across Pitches A, B, and C. Check live scores and standings in the Standings tab.'
    },
    {
      date: 'June 21, 2026',
      phase: 'Championship Awarding',
      pricing: 'Trophy presentation ceremonies',
      status: 'Closing Day',
      statusClass: 'bg-purple-50 text-purple-700 border-purple-200/60',
      tagline: 'Final ceremonies tomorrow.',
      details: 'The tournament draws to a close tomorrow afternoon. Official presentation of trophies, medals, and individual MVP awards will commence immediately following the championship matches.'
    }
  ];

  // 2. Tactical Pitch State
  const [pitchFormat, setPitchFormat] = useState<'8-aside' | '9-aside'>('8-aside');
  const [selectedPosition, setSelectedPosition] = useState<string>('gk');

  const positionsData = {
    '8-aside': [
      { id: 'gk', label: 'GK', name: 'Goalkeeper', x: '50%', y: '85%', role: 'Goal Sentinel', desc: 'Protects the net. Rules: Must wear distinct jersey. Goal kicks taken from within penalty area. Substitutions are rolling and done at mid-pitch.' },
      { id: 'lcb', label: 'LCB', name: 'Left Center Back', x: '25%', y: '65%', role: 'Left Defender', desc: 'Anchors the left defensive channel. Rules: No strict offside line enforced for P-7 & P-9 divisions, allowing defensive flexibility.' },
      { id: 'cb', label: 'CB', name: 'Center Back', x: '50%', y: '68%', role: 'Defense Pillar', desc: 'Command center for defense. Rules: Focuses on clean tackling and tracking. Slide tackles are discouraged for youth safety.' },
      { id: 'rcb', label: 'RCB', name: 'Right Center Back', x: '75%', y: '65%', role: 'Right Defender', desc: 'Anchors the right defensive channel. Rules: Coordinates throw-ins and clearance zones on the right side of the pitch.' },
      { id: 'lm', label: 'LM', name: 'LM', x: '30%', y: '40%', role: 'Left Winger', desc: 'Links defense to attack on the left wing. Rules: Standard throw-ins and corner kick duties apply.' },
      { id: 'rm', label: 'RM', name: 'RM', x: '70%', y: '40%', role: 'Right Winger', desc: 'Links defense to attack on the right wing. Rules: Standard throw-ins and corner kick duties apply.' },
      { id: 'lf', label: 'LF', name: 'Left Forward', x: '35%', y: '15%', role: 'Striker Left', desc: 'Primary offensive force. Rules: Direct kicks are taken from where the infraction occurred. Quick restarts are permitted.' },
      { id: 'rf', label: 'RF', name: 'Right Forward', x: '65%', y: '15%', role: 'Striker Right', desc: 'Primary offensive force. Rules: Responsible for kickoff sequences and high press tactics.' }
    ],
    '9-aside': [
      { id: 'gk', label: 'GK', name: 'Goalkeeper', x: '50%', y: '85%', role: 'Goal Sentinel', desc: 'Protects the net. Rules: Hand distribution within penalty area. Goal kicks are taken from the deck.' },
      { id: 'lb', label: 'LB', name: 'Left Back', x: '20%', y: '65%', role: 'Left Fullback', desc: 'Locks down the left flank. Rules: Standard offside lines apply for P-11 and above. Must align with the center back.' },
      { id: 'cb', label: 'CB', name: 'Center Back', x: '50%', y: '68%', role: 'Defense Commander', desc: 'Primary central defender. Rules: Sets the offside line and commands the backline alignment.' },
      { id: 'rb', label: 'RB', name: 'Right Back', x: '80%', y: '65%', role: 'Right Fullback', desc: 'Locks down the right flank. Rules: Standard offside lines apply. Coordinated overlaps are permitted.' },
      { id: 'lm', label: 'LM', name: 'LM', x: '25%', y: '40%', role: 'Left Winger', desc: 'Flank attacker. Rules: Responsible for whipping crosses and maintaining width on the left channel.' },
      { id: 'cm', label: 'CM', name: 'Center Midfielder', x: '50%', y: '43%', role: 'Playmaker', desc: 'Dictates the game pace. Rules: Connects the defensive core with target forwards. Monitored for center circle control.' },
      { id: 'rm', label: 'RM', name: 'RM', x: '75%', y: '40%', role: 'Right Winger', desc: 'Flank attacker. Rules: Responsible for crosses and wide transitions on the right channel.' },
      { id: 'lf', label: 'LF', name: 'Left Forward', x: '35%', y: '18%', role: 'Target Man Left', desc: 'Striker. Rules: Standard offside regulations apply at the moment of pass release.' },
      { id: 'rf', label: 'RF', name: 'Right Forward', x: '65%', y: '18%', role: 'Target Man Right', desc: 'Striker. Rules: Pressures defensive clearances and coordinates set piece responses.' }
    ]
  };

  const currentPositions = positionsData[pitchFormat];
  const activePositionObj = currentPositions.find(p => p.id === selectedPosition) || currentPositions[0];

  // 3. Clearance Ledger State
  const [selectedClearance, setSelectedClearance] = useState(0);
  const clearanceCriteria = [
    {
      item: 'PSA Birth Certificate',
      scope: 'Youth Brackets (P-7 to P-17)',
      purpose: 'Official age verification',
      requirement: 'Valid original copy with ID match',
      steps: ['Scan & Upload Original', 'Verify against PSA Database', 'Roster Validation Clear'],
      reasons: 'Photocopies must be fully legible. Digital camera snaps of copies will be rejected. Ensure name spellings match the registration forms.'
    },
    {
      item: 'Valid Passport',
      scope: 'Youth Brackets (P-7 to P-17)',
      purpose: 'Alternative age verification',
      requirement: 'Accepted in lieu of PSA Certificate',
      steps: ['Photo Page Scanning', 'Expiration Date Integrity Check', 'Roster Validation Clear'],
      reasons: 'Must have at least 6 months validity left. Emergency or temporary passports require special pre-approval from the organizing committee.'
    },
    {
      item: 'Roster Lock Constraint',
      scope: 'All Divisions',
      purpose: 'Fair play enforcement',
      requirement: '1 team per category, 1 player 1 team',
      steps: ['Roster Roster Comparison', 'Duplicate Name Check', 'Roster Lock Confirmed'],
      reasons: 'Violating this is grounds for immediate team disqualification. A player cannot be registered on more than one team roster in the same division.'
    },
    {
      item: 'Open Division Exemption',
      scope: "Men's / Women's Open",
      purpose: 'Category compliance',
      requirement: 'No birth verification documents needed',
      steps: ['Govt Photo ID Present', 'Match Registration Sheet', 'Roster Validation Clear'],
      reasons: 'Although age-exempt, teams must still present a valid government-issued ID (Passport, SSS, LTO, etc.) during official check-in.'
    }
  ];

  // 4. Slide Deck State
  const [slideIndex, setSlideIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const slides = [
    { 
      src: '/image.png', 
      alt: 'General Tournament Information',
      notes: 'Contains general categories, field layouts, game duration definitions, and contact credentials.' 
    },
    { 
      src: '/image copy.png', 
      alt: 'Registration and Eligibility Guidelines',
      notes: 'Detailing document requirements, roster locks, payment procedures, and coach protocols.' 
    },
    { 
      src: '/image copy 2.png', 
      alt: 'Roster Rules and Early Bird Pricing',
      notes: 'Covering player maximum sizes, substitution patterns, pricing brackets, and schedules.' 
    },
  ];

  return (
    <div className="w-full space-y-16 py-4 animate-fade-in-up relative">
      {/* Background outline decorative text */}
      <div className="absolute top-[-30px] right-[-10px] text-[10vw] font-black text-slate-100/40 select-none pointer-events-none z-[-2] tracking-tighter">
        REGULATION
      </div>

      {/* Header */}
      <div className="space-y-2 border-b border-slate-100 pb-6">
        <span className="text-[10px] font-bold text-copa-blue uppercase tracking-widest bg-copa-blue/5 border border-copa-blue/10 px-3 py-1 rounded-full">
          Official Ledger & Guides
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-slate-900 leading-none mt-2">
          General <span className="text-gradient-copa-cebu">Information</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed">
          The interactive ledger for tournament timelines, tactical pitches, document verification, and visual resources for COPA Cebu 2026.
        </p>
      </div>

      {/* Section 1: Milestone Stepper (Interactive timeline instead of generic cards/tables) */}
      <div className="space-y-8">
        <div>
          <h2 className="font-display font-bold text-2xl text-slate-900">
            Tournament <span className="text-gradient-copa">Milestone Ledger</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Toggle milestones below to inspect deadlines, pricing checkpoints, and critical event stages.
          </p>
        </div>

        {/* Stepper Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Stepper Timeline Navigation */}
          <div className="lg:col-span-4 space-y-3">
            {milestoneLedger.map((milestone, idx) => {
              const isActive = activeMilestone === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveMilestone(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isActive 
                      ? 'border-copa-blue bg-white shadow-[0_4px_20px_-4px_rgba(0,124,255,0.12)]' 
                      : 'border-slate-100 bg-white/40 hover:bg-white/80 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    {/* Visual Stepper Dot indicator */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                      isActive 
                        ? 'bg-copa-blue text-white shadow-[0_0_12px_rgba(0,124,255,0.4)]' 
                        : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                    }`}>
                      {idx + 1}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">{milestone.date}</span>
                      <strong className={`text-xs block mt-0.5 font-bold transition-colors ${
                        isActive ? 'text-copa-blue' : 'text-slate-700'
                      }`}>
                        {milestone.phase}
                      </strong>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isActive ? 'text-copa-blue translate-x-1' : 'text-slate-400 opacity-0 group-hover:opacity-100'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Stepper Briefing Card */}
          <div className="lg:col-span-8">
            <div className="hover-card p-6 sm:p-8 rounded-3xl min-h-[290px] flex flex-col justify-between bg-white relative overflow-hidden">
              {/* Subtle background graphics */}
              <div className="absolute right-[-40px] bottom-[-40px] text-slate-100 font-display font-black text-9xl select-none pointer-events-none z-[0] opacity-70">
                0{activeMilestone + 1}
              </div>

              <div className="space-y-6 relative z-[1]">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest block">Selected Milestone</span>
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-800 uppercase mt-0.5">
                      {milestoneLedger[activeMilestone].phase}
                    </h3>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold border uppercase tracking-wider ${milestoneLedger[activeMilestone].statusClass}`}>
                    {milestoneLedger[activeMilestone].status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Milestone Timeline</span>
                    <p className="text-sm font-extrabold text-slate-800 mt-1">{milestoneLedger[activeMilestone].date}</p>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{milestoneLedger[activeMilestone].tagline}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Pricing & Checkpoint details</span>
                    <p className="text-sm font-extrabold text-gradient-copa mt-1">{milestoneLedger[activeMilestone].pricing}</p>
                  </div>
                </div>

                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Official Directive</span>
                  <p className="text-xs text-slate-650 font-medium leading-relaxed bg-slate-50 border border-slate-100 p-3.5 rounded-xl">
                    {milestoneLedger[activeMilestone].details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Tactical Formats & Roster Capacities (Interactive pitch with position details) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Field Setup & Interactive Pitch Visualizer (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="font-display font-bold text-2xl text-slate-900">
                  Elite <span className="text-gradient-cebu">Venue & Pitches</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Tactical layout at the standard turf field of the **Dynamic Herb Sports Complex**, Cebu.
                </p>
              </div>

              {/* Pitch Toggles */}
              <div className="flex bg-slate-100 p-0.75 rounded-xl border border-slate-200 shrink-0">
                <button
                  onClick={() => {
                    setPitchFormat('8-aside');
                    setSelectedPosition('gk');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${
                    pitchFormat === '8-aside' 
                      ? 'bg-white text-slate-800 shadow-xs' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  8-aside (P-7/P-9)
                </button>
                <button
                  onClick={() => {
                    setPitchFormat('9-aside');
                    setSelectedPosition('gk');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${
                    pitchFormat === '9-aside' 
                      ? 'bg-white text-slate-800 shadow-xs' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  9-aside (P-11+)
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Soccer Field Map Representation */}
          <div className="w-full aspect-[5/3.4] rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 flex flex-col justify-between relative overflow-hidden shadow-xl border-2 border-white/40 group">
            {/* Field Grid lines */}
            <div className="absolute inset-0 border border-white/25 m-4 rounded-xl pointer-events-none" />
            <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[1px] bg-white/20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/40 pointer-events-none" />

            {/* Goal Posts markings */}
            <div className="absolute left-4 top-1/4 bottom-1/4 w-10 border-y border-r border-white/20 pointer-events-none" />
            <div className="absolute right-4 top-1/4 bottom-1/4 w-10 border-y border-l border-white/20 pointer-events-none" />

            {/* Labels overlay */}
            <div className="z-[1] flex justify-between items-start w-full relative text-[9px] font-extrabold text-white uppercase tracking-widest bg-black/15 backdrop-blur-xs p-2 rounded-lg border border-white/10">
              <span className="flex items-center space-x-1">
                <Compass className="w-3.5 h-3.5 text-emerald-300" />
                <span>Format: {pitchFormat === '8-aside' ? '1/6 Field Setup' : '1/3 Field Setup'}</span>
              </span>
              <span>Cleat constraint: FG / AG Turf Cleats Only</span>
            </div>

            {/* Interactive Player Position Dots */}
            {currentPositions.map((pos) => {
              const isSelected = selectedPosition === pos.id;
              return (
                <button
                  key={pos.id}
                  onClick={() => setSelectedPosition(pos.id)}
                  style={{ left: pos.x, top: pos.y }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-8.5 sm:h-8.5 rounded-full flex items-center justify-center font-display text-[9px] sm:text-xs font-black uppercase transition-all duration-300 z-10 ${
                    isSelected 
                      ? 'bg-white text-emerald-800 scale-110 shadow-[0_0_15px_#fff] border-2 border-emerald-400' 
                      : 'bg-emerald-950/80 text-white hover:bg-white hover:text-emerald-900 border border-white/20'
                  }`}
                >
                  {pos.label}
                </button>
              );
            })}

            <div className="z-[1] flex justify-between items-end w-full text-[9px] text-emerald-100/90 font-bold uppercase">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-300" />
                <span>Dynamic Herb turf field</span>
              </span>
              <span>Tap circles to see position rules</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Position Rules Clipboard Briefing (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <h2 className="font-display font-bold text-2xl text-slate-900">
              Tactical <span className="text-gradient-copa-cebu">Roster Rules</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Starting formation formats and position-specific rule constraints.
            </p>
          </div>

          <div className="hover-card p-6 sm:p-7 rounded-3xl bg-white flex-1 flex flex-col justify-between space-y-6">
            
            {/* Position Details Clipboard */}
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Position Briefing Clipboard</span>
              
              <div className="bg-slate-950 text-slate-100 rounded-2xl p-5 space-y-4 border border-slate-800 shadow-md relative overflow-hidden">
                {/* Field outline design artifact */}
                <div className="absolute right-[-10px] top-[-10px] w-20 h-20 rounded-full border border-slate-800 opacity-20 pointer-events-none" />
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-display font-extrabold text-[10px] uppercase">
                      {activePositionObj.label}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{activePositionObj.name}</h4>
                      <span className="text-[9px] text-slate-400 block font-mono">{activePositionObj.role}</span>
                    </div>
                  </div>
                  <span className="text-[9px] text-slate-500 font-mono">CODE-{pitchFormat.toUpperCase()}</span>
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block font-sans">Role Regulations</span>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium">
                    {activePositionObj.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Details Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100/50">
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block">Bracket Format</span>
                <span className="text-xs font-extrabold text-slate-800 block mt-1">
                  {pitchFormat === '8-aside' ? '8-aside (Mixed)' : '9-aside (Junior)'}
                </span>
                <span className="text-[9px] text-slate-500 block leading-tight mt-0.5">
                  {pitchFormat === '8-aside' ? 'Max 12 players' : 'Max 15 players'}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100/50">
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block">Game Duration</span>
                <span className="text-xs font-extrabold text-slate-800 block mt-1">
                  {pitchFormat === '8-aside' ? '12 Mins' : '16 Mins'}
                </span>
                <span className="text-[9px] text-slate-500 block leading-tight mt-0.5">Straight half play</span>
              </div>
            </div>

            {/* Roster Locks Note */}
            <div className="flex items-start space-x-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 text-xs">
              <AlertTriangle className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-amber-800 block">Registration Compliance</span>
                <span className="text-amber-700 leading-relaxed block mt-0.5 font-medium">
                  Roster limits are strictly monitored. Players can only represent a single team across the entire bracket. Check-in roster locks permanently 2 weeks prior.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Section 3: Registry Clearance Assistant (Interactive Accordion / Verification wizard) */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display font-bold text-2xl text-slate-900">
            Registry <span className="text-gradient-copa-cebu">Clearance Assistant</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Required player credentials and document verification standards. Select a document below to inspect requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Document tabs selection */}
          <div className="lg:col-span-4 space-y-3">
            {clearanceCriteria.map((c, idx) => {
              const isSelected = selectedClearance === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedClearance(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected 
                      ? 'border-copa-blue bg-white shadow-[0_4px_20px_-4px_rgba(0,124,255,0.12)]' 
                      : 'border-slate-100 bg-white/40 hover:bg-white/80 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-copa-blue/10 text-copa-blue' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'
                    }`}>
                      <FileText className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <strong className={`text-xs block font-bold transition-colors ${
                        isSelected ? 'text-copa-blue' : 'text-slate-700'
                      }`}>
                        {c.item}
                      </strong>
                      <span className="text-[9px] text-slate-400 block mt-0.5">{c.scope}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-copa-blue translate-x-1' : 'text-slate-400 opacity-0 group-hover:opacity-100'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Verification Journey Details */}
          <div className="lg:col-span-8">
            <div className="hover-card p-6 sm:p-8 rounded-3xl bg-white min-h-[300px] flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Scope & Category</span>
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-800 uppercase mt-0.5">
                      {clearanceCriteria[selectedClearance].item}
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold bg-copa-blue/5 text-copa-blue border border-copa-blue/10 uppercase tracking-wider">
                    {clearanceCriteria[selectedClearance].purpose}
                  </span>
                </div>

                {/* 3-Step Journey Indicator */}
                <div className="space-y-3">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Verification Pipeline Journey</span>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 relative pt-2">
                    {clearanceCriteria[selectedClearance].steps.map((step, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center space-y-2 relative">
                        {/* Connection Line */}
                        {idx < 2 && (
                          <div className="absolute top-3.5 left-[60%] right-[-40%] h-[1px] bg-slate-100 hidden sm:block z-0" />
                        )}
                        
                        <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center z-10 shrink-0 text-copa-blue">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-[9px] font-bold text-slate-650 tracking-tight leading-tight px-1 max-w-[100px] block">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Registry Standard</span>
                    <p className="text-xs text-slate-700 font-semibold mt-1 bg-slate-50 border border-slate-100 p-2.5 rounded-lg leading-relaxed">
                      {clearanceCriteria[selectedClearance].requirement}
                    </p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Critical Failure Caveat</span>
                    <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                      {clearanceCriteria[selectedClearance].reasons}
                    </p>
                  </div>
                </div>
              </div>

              {/* Roster Badge Info */}
              <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100/50 text-[10px] font-bold text-slate-500">
                <ShieldCheck className="w-4 h-4 text-copa-blue shrink-0" />
                <span>All roster document compliance is checked by the Credentials Committee before matches.</span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Visual Guides Slides Gallery */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display font-bold text-2xl text-slate-900">
            Visual <span className="text-gradient-copa-cebu">Tournament Guides</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Reference the official tournament info slides below. Click on any slide to inspect it in full high-resolution.
          </p>
        </div>

        {/* Large Slide viewer */}
        <div className="hover-card rounded-3xl overflow-hidden bg-white border border-slate-200/50 grid grid-cols-1 md:grid-cols-12 items-stretch shadow-md">
          {/* Main Slide display */}
          <div className="md:col-span-8 bg-slate-50 relative aspect-[4/3] w-full flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-100 group">
            <div className="relative w-full h-full p-4 flex items-center justify-center">
              <Image
                src={slides[slideIndex].src}
                alt={slides[slideIndex].alt}
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>

            {/* Navigation Overlay Arrows */}
            <button
              onClick={() => setSlideIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 border border-slate-200/50 backdrop-blur-xs flex items-center justify-center shadow-xs text-slate-700 hover:bg-white hover:text-copa-blue transition-all cursor-pointer z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0))}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 border border-slate-200/50 backdrop-blur-xs flex items-center justify-center shadow-xs text-slate-700 hover:bg-white hover:text-copa-blue transition-all cursor-pointer z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Fullscreen Trigger */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute right-4 bottom-4 px-3 py-1.5 rounded-lg bg-black/75 hover:bg-black/90 text-white text-[9px] font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all shadow-md backdrop-blur-xs cursor-pointer z-10"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Fullscreen</span>
            </button>
          </div>

          {/* Slide metadata side panel */}
          <div className="md:col-span-4 p-6 flex flex-col justify-between bg-white space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-year-purple uppercase tracking-widest block">Guide Selection Panel</span>
              <div className="space-y-1.5">
                <span className="text-[9px] font-bold text-slate-400 block font-mono">SLIDE-0{slideIndex + 1} OF 03</span>
                <h4 className="text-sm font-extrabold text-slate-800 uppercase leading-snug">{slides[slideIndex].alt}</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {slides[slideIndex].notes}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            <div className="space-y-3">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Slide Thumbnails Selector</span>
              <div className="grid grid-cols-3 gap-2.5">
                {slides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSlideIndex(idx)}
                    className={`relative aspect-[4/3] rounded-lg overflow-hidden border transition-all ${
                      slideIndex === idx 
                        ? 'border-copa-blue shadow-xs scale-103 bg-slate-50 ring-2 ring-copa-blue/20' 
                        : 'border-slate-100 bg-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-contain p-1"
                      sizes="10vw"
                    />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Overlay Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 animate-fade-in">
          {/* Modal Header Controls */}
          <div className="w-full max-w-6xl flex justify-between items-center text-white mb-4 z-10">
            <div>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">High Resolution Slide Viewer</span>
              <h4 className="text-sm font-extrabold uppercase mt-0.5">{slides[slideIndex].alt}</h4>
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="relative w-full max-w-6xl aspect-[4/3] flex items-center justify-center">
            <Image
              src={slides[slideIndex].src}
              alt={slides[slideIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />

            {/* Lightbox Overlay Navigation */}
            <button
              onClick={() => setSlideIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1))}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-black/90 transition-all cursor-pointer z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0))}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-black/90 transition-all cursor-pointer z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
