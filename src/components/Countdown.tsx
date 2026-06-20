'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // June 19, 2026 at 8:00 AM (Cebu Time)
    const targetDate = new Date('2026-06-19T08:00:00+08:00').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return (
      <div className="flex justify-center items-center h-24">
        <div className="w-6 h-6 border-2 border-copa-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const items = [
    { label: 'Days', value: timeLeft.days, color: 'text-copa-blue' },
    { label: 'Hours', value: timeLeft.hours, color: 'text-year-purple' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'text-cebu-green' },
    { label: 'Seconds', value: timeLeft.seconds, color: 'text-white' },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-4">
      <div className="flex items-center space-x-1.5 md:space-x-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="glass-panel w-16 h-16 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                <span className={`font-display font-extrabold text-xl sm:text-4xl tracking-tight transition-transform duration-300 group-hover:scale-105 ${item.color}`}>
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-400 mt-2">
                {item.label}
              </span>
            </div>
            {idx < items.length - 1 && (
              <span className="text-xl sm:text-3xl font-display font-bold text-white/20 mx-1 sm:mx-3 self-center -mt-6">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
