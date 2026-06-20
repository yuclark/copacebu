import Link from 'next/link';
import { Trophy, Mail, MapPin, Calendar, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full glass-panel border-t border-white/5 backdrop-blur-md mt-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand details */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-copa-blue via-year-purple to-cebu-green p-[1px]">
              <div className="w-full h-full bg-[#08090d] rounded-[7px] flex items-center justify-center font-display font-extrabold text-xs">
                <span className="text-copa-blue">C</span>
                <span className="text-cebu-green">C</span>
              </div>
            </div>
            <span className="font-display font-extrabold tracking-wider text-base">
              <span className="text-copa-blue">COPA</span>{' '}
              <span className="text-cebu-green">CEBU</span>{' '}
              <span className="text-year-purple">2026</span>
            </span>
          </Link>
          <p className="text-xs text-gray-400 max-w-sm">
            A premier 3-day football tournament gathering the finest football talents across Cebu and neighboring provinces. Experience non-stop, high-octane football!
          </p>
        </div>

        {/* Tournament Highlights */}
        <div className="flex flex-col space-y-3">
          <span className="text-sm font-semibold tracking-wider uppercase text-white font-display">Event Details</span>
          <div className="space-y-2 text-xs text-gray-400">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-copa-blue shrink-0" />
              <span>June 19 – 21, 2026 (3 Days)</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-cebu-green shrink-0" />
              <span>Dynamic Herb Sports Complex, Talisay City, Cebu</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="w-4 h-4 text-year-purple shrink-0" />
              <span>Mixed, Boys & Open Divisions</span>
            </div>
          </div>
        </div>

        {/* Quick Links & Contact */}
        <div className="flex flex-col space-y-3">
          <span className="text-sm font-semibold tracking-wider uppercase text-white font-display">Contact & Support</span>
          <p className="text-xs text-gray-400 leading-relaxed">
            For registration inquiries, tournament guidelines, or sponsorship packages, get in touch with our organizing committee.
          </p>
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <Mail className="w-4 h-4 text-copa-blue" />
            <a href="mailto:info@copacebu.com" className="hover:text-copa-blue transition-colors">info@copacebu.com</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
        <span>&copy; 2026 COPA Cebu. All rights reserved.</span>
        <span className="flex items-center mt-2 sm:mt-0">
          Designed with <Heart className="w-3 h-3 text-red-500 mx-1 fill-red-500 animate-pulse" /> in Cebu
        </span>
      </div>
    </footer>
  );
}
