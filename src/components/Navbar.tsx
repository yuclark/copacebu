'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Trophy, Menu, X, Info, ScrollText, Award, Calendar, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Fixtures', href: '/fixtures', icon: Calendar },
    { name: 'Standings', href: '/standings', icon: Trophy },
    { name: 'Awards', href: '/awards', icon: Award },
    { name: 'Handbook', href: '/handbook', icon: ScrollText },
    { name: 'FAQs', href: '/faqs', icon: Info },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`sticky top-0 z-50 w-full border-b backdrop-blur-md px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled
        ? 'bg-white/40 border-slate-200/50 py-2 shadow-sm'
        : 'bg-white/85 border-slate-200 py-3.5'
      }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="/logo.png"
            alt="COPA Cebu 2026 Logo"
            width={40}
            height={40}
            className="object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display font-extrabold tracking-wider leading-none text-lg">
              <span className="text-copa-blue">COPA</span>{' '}
              <span className="text-cebu-green">CEBU</span>
            </span>
            <span className="font-display text-[10px] tracking-[0.25em] text-year-purple font-bold leading-none mt-1">2026</span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center space-x-1.5 group ${active
                    ? 'text-copa-blue'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                  }`}
              >
                {active && (
                  <span className="absolute inset-0 bg-gradient-to-r from-copa-blue/5 via-year-purple/5 to-cebu-green/5 rounded-lg border border-slate-200/50" />
                )}
                <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${active ? 'text-copa-blue' : 'text-slate-400'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}

          <div className="h-4 w-[1px] bg-slate-200 mx-2" />

          <div className="flex items-center space-x-2">
            <a
              href="https://www.facebook.com/copa.cebu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-copa-blue hover:bg-slate-100/50 transition-all duration-300 flex items-center justify-center"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/copacebu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-year-purple hover:bg-slate-100/50 transition-all duration-300 flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <Link
              href="/#contact"
              className="p-2 rounded-lg text-slate-500 hover:text-copa-blue hover:bg-slate-100/50 transition-all duration-300 flex items-center justify-center"
              aria-label="Contact Support"
            >
              <Mail className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 hover:text-slate-900 focus:outline-none p-1.5 rounded-lg hover:bg-slate-100/50"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-slate-100 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg text-base font-semibold transition-all ${active
                    ? 'bg-gradient-to-r from-copa-blue/5 to-year-purple/5 border border-slate-200 text-copa-blue'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                  }`}
              >
                <Icon className={`w-5 h-5 ${active ? 'text-copa-blue' : 'text-slate-400'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}

          <div className="border-t border-slate-150 mt-3 pt-3 flex items-center justify-center space-x-6">
            <a
              href="https://www.facebook.com/copa.cebu"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-650 hover:text-copa-blue hover:bg-slate-100/50 transition-all flex items-center justify-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
              <span className="text-sm font-semibold">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/copacebu/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-650 hover:text-year-purple hover:bg-slate-100/50 transition-all flex items-center justify-center"
            >
              <svg className="w-4 h-4" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span className="text-sm font-semibold">Instagram</span>
            </a>
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-650 hover:text-copa-blue hover:bg-slate-100/50 transition-all flex items-center justify-center"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span className="text-sm font-semibold">Contact</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
