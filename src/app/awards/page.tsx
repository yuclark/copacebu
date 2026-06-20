import { Award, ShieldAlert, Star, Trophy, Shield, Medal } from 'lucide-react';

export default function RewardsPrizesPage() {
  const prizes = [
    {
      title: 'Tournament Champions',
      badge: '1st Place',
      numLabel: '01 / Champions',
      gradient: 'from-amber-400 via-yellow-500 to-amber-600',
      badgeBg: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
      glowColor: 'from-amber-500/5 to-transparent',
      hoverBorder: 'hover:border-amber-500/30',
      lineGradient: 'from-amber-500 via-yellow-500 to-amber-500',
      icon: Trophy,
      description: 'The ultimate glory in Cebu football. Awarded to the top-ranked club in each division after the knockout stages.',
      rewards: [
        'Official COPA Cebu Championship Trophy',
        'Gold Medals for all registered players and coaching staff',
        'Seeded entry slot for next season\'s tournament',
        'Special champions profile feature on the official website',
      ],
    },
    {
      title: '1st Runner-Up',
      badge: '2nd Place',
      numLabel: '02 / Runner-Up',
      gradient: 'from-slate-300 via-slate-400 to-slate-500',
      badgeBg: 'bg-slate-500/10 text-slate-600 border-slate-500/20',
      glowColor: 'from-slate-400/5 to-transparent',
      hoverBorder: 'hover:border-slate-400/30',
      lineGradient: 'from-slate-400 via-slate-350 to-slate-400',
      icon: Medal,
      description: 'Honoring final contenders who showcased outstanding spirit, skill, and performance throughout the tournament.',
      rewards: [
        'Official COPA Cebu Runner-Up Plate',
        'Silver Medals for all registered players and coaching staff',
        'Special runner-up recognition certificate',
      ],
    },
    {
      title: 'Individual MVPs',
      badge: 'Standout Player',
      numLabel: '03 / Individual',
      gradient: 'from-purple-400 via-pink-500 to-purple-600',
      badgeBg: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
      glowColor: 'from-purple-500/5 to-transparent',
      hoverBorder: 'hover:border-purple-500/30',
      lineGradient: 'from-purple-500 via-pink-500 to-purple-500',
      icon: Award,
      description: 'Celebrating exceptional individual skill, teamwork, and sportsmanship. Awarded to the standout player in each age bracket.',
      rewards: [
        'Official COPA Cebu MVP Trophy',
        'Individual performance recognition plate',
        'MVP merchandise package',
      ],
    },
  ];

  return (
    <div className="w-full space-y-12 py-4 animate-fade-in-up">
      {/* Title */}
      <div>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-slate-900">
          Rewards & <span className="text-gradient-copa-cebu">Prizes</span>
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          Discover the awards, trophies, medals, and recognitions waiting for the champions of COPA Cebu 2026.
        </p>
      </div>

      {/* Hall of Champions (Boys P-17 Specific) */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-1.5 rounded-lg bg-copa-blue/10 border border-copa-blue/20">
            <Trophy className="w-5 h-5 text-copa-blue" />
          </div>
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 uppercase tracking-wider">
            Hall of <span className="text-gradient-copa-cebu">Champions</span>
          </h2>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-slate-200/50 relative overflow-hidden bg-white/40 shadow-xl">
          {/* Background decorative glows */}
          <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-gradient-to-bl from-amber-500/10 to-transparent blur-2xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-gradient-to-tr from-copa-blue/5 to-transparent blur-xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Champion details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-600 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span>Boys P-17 Division Champion</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight flex items-center gap-3">
                  <span>Bast Green Lions</span>
                  <span className="text-amber-500 animate-bounce">👑</span>
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-semibold max-w-xl">
                  Crowned the official Boys P-17 Champions of COPA Cebu 2026 after an incredible undefeated campaign, culminating in a thrilling 4-3 victory in the finals.
                </p>
              </div>

              {/* Campaign Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-sm pt-2">
                <div className="p-3 bg-white/60 border border-slate-100 rounded-xl text-center shadow-sm">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Record</span>
                  <span className="font-display font-extrabold text-sm text-slate-800 mt-0.5">5 - 0 - 0</span>
                </div>
                <div className="p-3 bg-white/60 border border-slate-100 rounded-xl text-center shadow-sm">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Goals For</span>
                  <span className="font-display font-extrabold text-sm text-slate-800 mt-0.5">8</span>
                </div>
                <div className="p-3 bg-white/60 border border-slate-100 rounded-xl text-center shadow-sm">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Points</span>
                  <span className="font-display font-extrabold text-sm text-slate-800 mt-0.5">15</span>
                </div>
              </div>
            </div>

            {/* Match finals mini scoreboard */}
            <div className="lg:col-span-5 w-full">
              <div className="glass-panel p-6 rounded-2xl border border-slate-200/50 bg-white/80 shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-year-purple to-cebu-green" />
                
                <div className="text-center mb-4">
                  <span className="text-[10px] font-extrabold tracking-widest text-year-purple uppercase">
                    Championship Match Final
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  {/* Champion */}
                  <div className="flex flex-col items-center text-center w-28">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-display font-black text-amber-600 text-sm mb-2 shadow-sm select-none">
                      BGL
                    </div>
                    <span className="text-xs font-black text-slate-800 leading-tight">Bast Green Lions</span>
                    <span className="text-[9px] font-bold text-amber-500 uppercase tracking-wider mt-1">Champion</span>
                  </div>

                  {/* Score */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200/60 font-display font-black text-lg justify-center text-slate-900 shadow-inner">
                      <span className="text-amber-500">4</span>
                      <span className="text-slate-300 font-normal">:</span>
                      <span className="text-slate-500">3</span>
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2">Full Time</span>
                  </div>

                  {/* Runner up */}
                  <div className="flex flex-col items-center text-center w-28">
                    <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-display font-black text-slate-500 text-xs mb-2 shadow-sm select-none">
                      DBA
                    </div>
                    <span className="text-xs font-black text-slate-800 leading-tight">Don Bosco - A</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-1">2nd Place</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Catalog Section */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-1.5 rounded-lg bg-copa-blue/10 border border-copa-blue/20">
            <Shield className="w-5 h-5 text-copa-blue" />
          </div>
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 uppercase tracking-wider">
            Rewards <span className="text-gradient-copa-cebu">Catalog</span>
          </h2>
        </div>

        {/* Trophies showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, idx) => {
            const Icon = prize.icon;
            return (
              <div
                key={idx}
                className={`hover-card p-8 rounded-3xl flex flex-col space-y-6 relative overflow-hidden shadow-xl border border-slate-200/50 bg-white/70 backdrop-blur-md hover:bg-white/90 transition-all duration-500 hover:-translate-y-1.5 group ${prize.hoverBorder}`}
              >
                {/* Corner Accent Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${prize.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl`} />
                
                {/* Header Badge & Labels */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest ${prize.badgeBg}`}>
                    {prize.badge}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase select-none">
                    {prize.numLabel}
                  </span>
                </div>

                {/* Pedestal circle with floating icon */}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-200/50 flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-slate-100">
                    <Icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl text-slate-800 leading-tight transition-colors duration-300">
                      {prize.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  {prize.description}
                </p>

                {/* List of rewards */}
                <div className="space-y-3 flex-1 pt-2 border-t border-slate-100">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Allocated Benefits</span>
                  <ul className="space-y-2.5">
                    {prize.rewards.map((reward, rewardIdx) => (
                      <li key={rewardIdx} className="flex items-start space-x-2.5 text-xs text-slate-650 font-semibold leading-snug">
                        <Star className="w-3.5 h-3.5 text-year-purple shrink-0 mt-0.5" />
                        <span>{reward}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover line accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${prize.lineGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Notice Banner */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/50 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-copa-blue via-year-purple to-cebu-green" />
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-xl bg-year-purple/10 flex items-center justify-center text-year-purple shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-slate-850">Award Allocation Policy</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xl leading-relaxed font-semibold">
              Trophies and medals will be presented during the official award ceremony immediately following each division&apos;s championship match on Sunday, June 21, 2026. Standout MVP players are nominated by match officials and coaching committees.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
