"use client";

import { useState } from 'react';
import {
  ShieldCheck,
  FileText,
  CheckCircle2,
  Plus,
  ChevronRight
} from 'lucide-react';

export default function FAQsPage() {
  // 1. Milestone Ledger Data & State
  const [expandedMilestone, setExpandedMilestone] = useState<number | null>(2); // Defaults to Day 2/Ongoing open
  
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

  // 2. Registry Clearance Data & State
  const [expandedClearance, setExpandedClearance] = useState<number | null>(0); // Defaults to first item open

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
      steps: ['Roster Comparison Check', 'Duplicate Name Check', 'Roster Lock Confirmed'],
      reasons: 'Violating this is grounds for immediate team disqualification. A player cannot be registered on more than one team roster in the same division.'
    },
    {
      item: 'Open Division Exemption',
      scope: "Men's Open",
      purpose: 'Category compliance',
      requirement: 'No birth verification documents needed',
      steps: ['Govt Photo ID Present', 'Match Registration Sheet', 'Roster Validation Clear'],
      reasons: 'Although age-exempt, teams must still present a valid government-issued ID (Passport, SSS, LTO, etc.) during official check-in.'
    }
  ];


  return (
    <div className="w-full space-y-10 py-4 animate-fade-in-up relative">
      {/* Background outline decorative text */}
      <div className="absolute top-[-30px] right-[-10px] text-[10vw] font-black text-slate-100/40 select-none pointer-events-none z-[-2] tracking-tighter">
        FAQS
      </div>

      {/* Header */}
      <div className="space-y-2 border-b border-slate-100 pb-6">
        <span className="text-[10px] font-bold text-copa-blue uppercase tracking-widest bg-copa-blue/5 border border-copa-blue/10 px-3 py-1 rounded-full">
          Frequently Asked Questions
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-slate-900 leading-none mt-2">
          Tournament <span className="text-gradient-copa-cebu">FAQs</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed">
          The official tournament helper. Frequently asked questions, milestone ledger tracking, and registry requirements for COPA Cebu 2026.
        </p>
      </div>

      {/* Section 1: Milestone Stepper Accordion */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display font-bold text-2xl text-slate-900">
            Tournament <span className="text-gradient-copa">Milestone Ledger</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Click any milestone row to inspect deadlines, pricing checkpoints, and critical event stages.
          </p>
        </div>

        <div className="space-y-4">
          {milestoneLedger.map((milestone, idx) => {
            const isExpanded = expandedMilestone === idx;
            return (
              <div
                key={idx}
                className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${isExpanded
                    ? 'border-copa-blue bg-white shadow-[0_4px_20px_-4px_rgba(0,124,255,0.08)]'
                    : 'border-slate-200/50 bg-white/40 hover:bg-white/80'
                  }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => setExpandedMilestone(isExpanded ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer focus:outline-hidden"
                >
                  <div className="flex items-center space-x-4">
                    {/* Step indicator */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-all ${isExpanded
                        ? 'bg-copa-blue text-white shadow-[0_0_12px_rgba(0,124,255,0.3)]'
                        : 'bg-slate-100 text-slate-500'
                      }`}>
                      {idx + 1}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">{milestone.date}</span>
                      <strong className={`text-sm block mt-0.5 font-bold transition-colors ${isExpanded ? 'text-copa-blue' : 'text-slate-800'
                        }`}>
                        {milestone.phase}
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className={`hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[9px] font-extrabold border uppercase tracking-wider ${milestone.statusClass}`}>
                      {milestone.status}
                    </span>
                    <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 transition-all duration-300 ${isExpanded ? 'bg-copa-blue border-copa-blue text-white rotate-45' : 'bg-white hover:bg-slate-55'
                      }`}>
                      <Plus className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </div>
                </button>

                {/* Collapsible Details Drawer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'
                    }`}
                >
                  <div className="p-6 bg-slate-50/50 space-y-6">
                    {/* Status for mobile */}
                    <div className="sm:hidden flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Status</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold border uppercase tracking-wider ${milestone.statusClass}`}>
                        {milestone.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Timeline Info</span>
                        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{milestone.tagline}</p>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Pricing & Checkpoint</span>
                        <p className="text-sm font-extrabold text-gradient-copa mt-1">{milestone.pricing}</p>
                      </div>
                      <div className="md:col-span-1">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Details</span>
                        <p className="text-xs text-slate-650 font-medium leading-relaxed mt-1.5">{milestone.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 2: Registry Clearance Assistant Accordion */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display font-bold text-2xl text-slate-900">
            Registry <span className="text-gradient-copa-cebu">Clearance Assistant</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Required player credentials and document verification standards. Click any criteria below to expand details.
          </p>
        </div>

        <div className="space-y-4">
          {clearanceCriteria.map((c, idx) => {
            const isExpanded = expandedClearance === idx;
            return (
              <div
                key={idx}
                className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${isExpanded
                    ? 'border-copa-blue bg-white shadow-[0_4px_20px_-4px_rgba(0,124,255,0.08)]'
                    : 'border-slate-200/50 bg-white/40 hover:bg-white/80'
                  }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => setExpandedClearance(isExpanded ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer focus:outline-hidden"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${isExpanded ? 'bg-copa-blue/10 text-copa-blue' : 'bg-slate-100 text-slate-400'
                      }`}>
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className={`text-sm block font-bold transition-colors ${isExpanded ? 'text-copa-blue' : 'text-slate-800'
                        }`}>
                        {c.item}
                      </strong>
                      <span className="text-[10px] text-slate-400 block mt-0.5">{c.scope}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[9px] font-extrabold bg-copa-blue/5 text-copa-blue border border-copa-blue/10 uppercase tracking-wider">
                      {c.purpose}
                    </span>
                    <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 transition-all duration-300 ${isExpanded ? 'bg-copa-blue border-copa-blue text-white rotate-45' : 'bg-white hover:bg-slate-55'
                      }`}>
                      <Plus className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </div>
                </button>

                {/* Details Drawer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'
                    }`}
                >
                  <div className="p-6 bg-slate-50/50 space-y-6">
                    {/* Pipeline / Steps */}
                    <div className="space-y-3">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-sans">Verification Pipeline Steps</span>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-100">
                        {c.steps.map((step, stepIdx) => (
                          <div key={stepIdx} className="flex items-center space-x-3 w-full">
                            <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-semibold text-slate-700 leading-tight">
                              {step}
                            </span>
                            {stepIdx < 2 && (
                              <ChevronRight className="w-4 h-4 text-slate-300 hidden sm:block ml-auto shrink-0" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Registry Standard Requirement</span>
                        <p className="text-xs text-slate-700 font-semibold mt-1 bg-white border border-slate-100 p-3 rounded-lg leading-relaxed">
                          {c.requirement}
                        </p>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block text-rose-500">Critical Failure Caveat</span>
                        <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                          {c.reasons}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Notice Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/50 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-copa-blue via-year-purple to-cebu-green" />
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-xl bg-copa-blue/10 flex items-center justify-center text-copa-blue shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-slate-850">Document Compliance Notification</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xl leading-relaxed font-semibold">
              All players must be validated before kick-off. Failure to present clear original credentials matching the lock constraints may result in forfeit rules. Roster locks are permanent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
