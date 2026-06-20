import { Award, ShieldAlert, Star } from 'lucide-react';

export default function RewardsPrizesPage() {
  const prizes = [
    {
      title: 'Tournament Champions',
      badge: '1st Place',
      gradient: 'from-amber-400 via-yellow-500 to-amber-600',
      shadowColor: 'shadow-yellow-500/5',
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
      gradient: 'from-slate-300 via-slate-400 to-slate-500',
      shadowColor: 'shadow-slate-400/5',
      description: 'Honoring final contenders who showcased outstanding spirit, skill, and performance throughout the tournament.',
      rewards: [
        'Official COPA Cebu Runner-Up Plate',
        'Silver Medals for all registered players and coaching staff',
        'Special runner-up recognition certificate',
      ],
    },
    {
      title: 'Individual MVPs',
      badge: 'Most Valuable Player',
      gradient: 'from-purple-400 via-pink-500 to-purple-600',
      shadowColor: 'shadow-pink-500/5',
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

      {/* Trophies showcase grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {prizes.map((prize, idx) => (
          <div
            key={idx}
            className={`hover-card p-6 rounded-3xl flex flex-col space-y-6 relative overflow-hidden shadow-xl ${prize.shadowColor} group`}
          >
            {/* Corner Accent Glow */}
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${prize.gradient} opacity-5 blur-xl group-hover:opacity-10 transition-opacity`} />
            
            {/* Header Badge */}
            <div className="flex items-center justify-between">
              <span className={`px-2.5 py-1 rounded-full bg-gradient-to-r ${prize.gradient} text-[10px] font-extrabold uppercase tracking-widest text-black`}>
                {prize.badge}
              </span>
              <Award className="w-6 h-6 text-slate-400 group-hover:text-slate-600 transition-colors" />
            </div>

            {/* Title */}
            <div>
              <h2 className="font-display font-bold text-2xl text-slate-800 transition-all duration-300">
                {prize.title}
              </h2>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium">
                {prize.description}
              </p>
            </div>

            {/* List of rewards */}
            <div className="space-y-3 flex-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Includes</span>
              <ul className="space-y-2">
                {prize.rewards.map((reward, rewardIdx) => (
                  <li key={rewardIdx} className="flex items-start space-x-2 text-xs text-slate-600 font-semibold">
                    <Star className="w-3.5 h-3.5 text-year-purple shrink-0 mt-0.5" />
                    <span>{reward}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Notice Banner */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/50">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-xl bg-year-purple/10 flex items-center justify-center text-year-purple shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-slate-800">Award Allocation Policy</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xl leading-relaxed font-semibold">
              Trophies and medals will be presented during the official award ceremony immediately following each division&apos;s championship match on Sunday, June 21, 2026. Standout MVP players are nominated by match officials and coaching committees.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
