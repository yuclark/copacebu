"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  ShieldAlert,
  Award,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Mail
} from 'lucide-react';

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

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
            href="/faqs"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel border border-slate-200 text-slate-650 hover:text-slate-950 hover:border-slate-350 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>FAQs</span>
          </Link>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
        {/* Date Card */}
        <div className="hover-card p-8 rounded-2xl flex flex-col space-y-6 relative overflow-hidden group border border-slate-200/50 bg-white/70 backdrop-blur-md hover:bg-white/90 hover:border-copa-blue/20 transition-all duration-500">
          <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-gradient-to-bl from-copa-blue/5 to-transparent blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200/50 flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-copa-blue/30 group-hover:bg-copa-blue/5">
              <Calendar className="w-5 h-5 text-slate-700 transition-colors duration-300 group-hover:text-copa-blue" />
            </div>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase select-none">
              01 / Dates
            </span>
          </div>
          <div className="space-y-2">
            <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-copa-blue transition-colors duration-300">Three Days of Football</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              June 19 – 21, 2026. Non-stop matches featuring local talents, clubs, and academies.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-copa-blue to-year-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>

        {/* Location Card */}
        <div className="hover-card p-8 rounded-2xl flex flex-col space-y-6 relative overflow-hidden group border border-slate-200/50 bg-white/70 backdrop-blur-md hover:bg-white/90 hover:border-cebu-green/20 transition-all duration-500">
          <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-gradient-to-bl from-cebu-green/5 to-transparent blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200/50 flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-cebu-green/30 group-hover:bg-cebu-green/5">
              <MapPin className="w-5 h-5 text-slate-700 transition-colors duration-300 group-hover:text-cebu-green" />
            </div>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase select-none">
              02 / Venue
            </span>
          </div>
          <div className="space-y-2">
            <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-cebu-green transition-colors duration-300">Elite Sports Arena</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Hosted at the premium Dynamic Herb Sports Complex, Talisay City, Cebu. Top-tier artificial turf field.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cebu-green to-copa-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>

        {/* Divisions Card */}
        <div className="hover-card p-8 rounded-2xl flex flex-col space-y-6 relative overflow-hidden group border border-slate-200/50 bg-white/70 backdrop-blur-md hover:bg-white/90 hover:border-year-purple/20 transition-all duration-500">
          <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-gradient-to-bl from-year-purple/5 to-transparent blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200/50 flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-year-purple/30 group-hover:bg-year-purple/5">
              <Trophy className="w-5 h-5 text-slate-700 transition-colors duration-300 group-hover:text-year-purple" />
            </div>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase select-none">
              03 / Divisions
            </span>
          </div>
          <div className="space-y-2">
            <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-year-purple transition-colors duration-300">Diverse Age Brackets</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              From Mixed youth divisions (P-7 to P-13) and Boys (P-15 to P-17) to Men&apos;s Open categories.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-year-purple to-cebu-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
                href="/handbook"
                className="inline-flex items-center space-x-2 text-sm font-bold text-copa-blue hover:text-copa-blue/80 transition-colors group"
              >
                <span>Read Official Tournament Handbook</span>
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

      {/* Latest News & Announcements Section */}
      <section className="space-y-6 pt-4">
        <div>
          <span className="text-[10px] font-bold text-copa-blue uppercase tracking-widest bg-copa-blue/5 border border-copa-blue/10 px-3 py-1 rounded-full font-sans">
            Updates & Announcements
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase text-slate-900 leading-none mt-3">
            Latest <span className="text-gradient-copa-cebu">News</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl leading-relaxed font-semibold">
            Stay informed with the latest updates, event rules, and official announcements for COPA Cebu 2026.
          </p>
        </div>

        {/* Large News display card */}
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
              <span className="text-[10px] font-bold text-year-purple uppercase tracking-widest block font-sans">News Selection Panel</span>
              <div className="space-y-1.5">
                <span className="text-[9px] font-bold text-slate-400 block font-mono">UPDATE-0{slideIndex + 1} OF 03</span>
                <h4 className="text-sm font-extrabold text-slate-800 uppercase leading-snug">{slides[slideIndex].alt}</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {slides[slideIndex].notes}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            <div className="space-y-3">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-sans">News Updates Gallery</span>
              <div className="grid grid-cols-3 gap-2.5">
                {slides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSlideIndex(idx)}
                    className={`relative aspect-[4/3] rounded-lg overflow-hidden border transition-all cursor-pointer ${slideIndex === idx
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
      </section>

      {/* Professional Newsletter-Style Contact Card */}
      <section id="contact" className="w-full max-w-7xl mx-auto px-2 pt-4 relative z-10 scroll-mt-24">
        <div className="glass-panel py-8 px-6 sm:px-8 md:p-12 rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xs flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#007cff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          
          {/* Left Column: Heading & Description */}
          <div className="relative z-10 max-w-xl space-y-4">
            <span className="text-[10px] font-bold text-copa-blue uppercase tracking-widest bg-copa-blue/5 border border-copa-blue/10 px-3 py-1 rounded-full inline-block">
              Organizing Committee
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase leading-tight text-slate-900">
              Need Direct <span className="text-gradient-copa-cebu">Support?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
              Have questions regarding team rosters, match schedule adjustments, or age verifications? Send our administration crew a direct message or email us at <a href="mailto:info@copacebu.com" className="text-copa-blue hover:underline">info@copacebu.com</a>.
            </p>
          </div>

          {/* Right Column: Newsletter-style Support Form */}
          <div className="relative z-10 w-full lg:max-w-md shrink-0">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const msg = formData.get('message') as string;
                window.location.href = `mailto:info@copacebu.com?subject=Copa Cebu 2026 Inquiry&body=${encodeURIComponent(msg || '')}`;
              }}
              className="flex flex-col sm:flex-row items-stretch gap-2.5 bg-white p-2.5 rounded-2xl border border-slate-200 shadow-sm"
            >
              <input
                type="text"
                name="message"
                required
                placeholder="Type your question here..."
                className="flex-1 px-4 py-3 rounded-xl bg-slate-50/50 text-slate-900 text-xs border border-slate-200 focus:outline-hidden focus:border-copa-blue placeholder-slate-400 font-semibold"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm shrink-0 cursor-pointer"
              >
                Send Message
              </button>
            </form>
            <span className="text-[10px] text-slate-400 font-bold block mt-3 text-center sm:text-left">
              * Click send to draft an email directly to our support mailbox.
            </span>
          </div>
        </div>
      </section>

      {/* Lightbox / Zoom Overlay Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 animate-fade-in">
          {/* Modal Header Controls */}
          <div className="w-full max-w-6xl flex justify-between items-center text-white mb-4 z-10">
            <div>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">High Resolution News Viewer</span>
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
