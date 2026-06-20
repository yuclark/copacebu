import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Trophy, Users, ShieldAlert, Award, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full space-y-16 py-6 md:py-12 relative">
      {/* Full-bleed viewport-width background banner of cover.png starting exactly under navbar and ending before the bottom cards */}
      <div className="absolute top-0 -mt-8 left-1/2 right-1/2 -translate-x-1/2 w-screen h-[550px] sm:h-[650px] md:h-[750px] z-[-1] overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center filter saturate-110 animate-zoom-in-bg"
          style={{ backgroundImage: "url('/cover.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/20 via-[#f8fafc]/80 to-[#f8fafc]" />
      </div>

      {/* Hero Section - Completely transparent, floating on the cover backdrop */}
      <section className="relative w-full flex flex-col items-center justify-center text-center space-y-10 py-12 md:py-24 px-4 overflow-hidden">
        {/* Glow behind title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-copa-blue/15 via-year-purple/10 to-cebu-green/10 rounded-full blur-[80px] z-[-1]" />
        
        {/* Brand Text Header & Tagline */}
        <div className="flex flex-col items-center text-center space-y-4 w-full max-w-5xl mx-auto">
          <h1 
            style={{ animationDelay: '150ms' }}
            className="font-display font-black text-6xl sm:text-9xl md:text-[9.5rem] lg:text-[11rem] tracking-tighter uppercase leading-none select-none text-center w-full block opacity-0 animate-fade-in-up"
          >
            <span className="text-gradient-copa">COPA</span> <span className="text-gradient-cebu">CEBU</span>
          </h1>
          <div 
            style={{ animationDelay: '300ms' }}
            className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-[0.35em] text-year-purple uppercase leading-none mt-2 select-none w-full text-center block opacity-0 animate-fade-in-up"
          >
            2026
          </div>
          
          <h2 
            style={{ animationDelay: '450ms' }}
            className="font-display italic text-lg sm:text-2xl text-slate-800 font-bold tracking-wide max-w-2xl px-4 mt-6 text-center opacity-0 animate-fade-in-up"
          >
            &ldquo;ONE PITCH. ONE PASSION. ONE CEBU!&rdquo;
          </h2>
        </div>

        {/* CTAs */}
        <div 
          style={{ animationDelay: '600ms' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full px-4 max-w-md mx-auto opacity-0 animate-fade-in-up"
        >
          <Link
            href="/standings"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-copa-blue via-year-purple to-cebu-green text-white font-semibold text-base shadow-lg shadow-copa-blue/20 hover:shadow-copa-blue/40 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 group"
          >
            <span>View Standings</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/information"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel border border-slate-200 text-slate-650 hover:text-slate-950 hover:border-slate-350 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>General Info</span>
          </Link>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
        {/* Date Card */}
        <div className="hover-card p-8 rounded-2xl flex flex-col space-y-4 relative overflow-hidden group">
          <div className="w-12 h-12 rounded-xl bg-copa-blue/10 flex items-center justify-center text-copa-blue">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-slate-900">Three Days of Football</h3>
            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
              June 19 – 21, 2026. Non-stop matches featuring local talents, clubs, and academies.
            </p>
          </div>
        </div>

        {/* Location Card */}
        <div className="hover-card p-8 rounded-2xl flex flex-col space-y-4 relative overflow-hidden group">
          <div className="w-12 h-12 rounded-xl bg-cebu-green/10 flex items-center justify-center text-cebu-green">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-slate-900">Elite Sports Arena</h3>
            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
              Hosted at the premium Dynamic Herb Sports Complex, Talisay City, Cebu. Top-tier artificial turf field.
            </p>
          </div>
        </div>

        {/* Divisions Card */}
        <div className="hover-card p-8 rounded-2xl flex flex-col space-y-4 relative overflow-hidden group">
          <div className="w-12 h-12 rounded-xl bg-year-purple/10 flex items-center justify-center text-year-purple">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-slate-900">Diverse Age Brackets</h3>
            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
              From Mixed youth divisions (P-7 to P-13) and Boys (P-15 to P-17) to Men&apos;s and Women&apos;s Open categories.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Banner Section */}
      <section className="hover-card p-8 md:p-12 rounded-3xl relative overflow-hidden bg-white/40">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-copa-blue/10 to-transparent blur-2xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-gradient-to-tr from-cebu-green/5 to-transparent blur-xl rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="font-display font-bold text-3xl md:text-4xl text-slate-900 leading-tight">
              Who will claim the <span className="text-gradient-copa-cebu font-black">Championship?</span>
            </h3>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
              Matches are active at the Dynamic Herb Sports Complex. Keep track of live standings, match logs, and upcoming knockouts across all divisions.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-650 font-semibold">
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-550 shrink-0 mt-0.5">✓</div>
                <span>Registrations are closed and rosters are permanently locked.</span>
              </li>
              <li className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-650 font-semibold">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">✓</div>
                <span>Teams compete in guaranteed 5-game round-robin fixtures.</span>
              </li>
              <li className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-650 font-semibold">
                <div className="w-5 h-5 rounded-full bg-copa-blue/10 flex items-center justify-center text-copa-blue shrink-0 mt-0.5">✓</div>
                <span>Active formats: 8-aside (P-7/9) and 9-aside (P-11+).</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/rules"
                className="inline-flex items-center space-x-2 text-sm font-bold text-copa-blue hover:text-copa-blue/80 transition-colors group"
              >
                <span>Read Official Tournament Rules</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-100 bg-slate-50/50 flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              <ShieldAlert className="w-6 h-6 text-slate-700" />
              <h4 className="font-display font-bold text-lg text-slate-800">Eligibility Note</h4>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              All players participating in divisions P-7 to P-17 must provide a valid PSA Birth Certificate with ID or Passport. Roster limits are strictly monitored: max 12 players for P-7 & P-9, and max 15 players for P-11 and above. No exceptions.
            </p>
            <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
              <span className="text-xs text-slate-450 font-semibold">Roster verification finalized</span>
              <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-slate-600 border border-slate-200/50">Rosters Locked</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
