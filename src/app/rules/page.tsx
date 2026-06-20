import { ScrollText, Settings, ShieldAlert, Award, Footprints } from 'lucide-react';

export default function RulesPage() {
  const sections = [
    {
      title: 'Game Format & Structure',
      icon: Settings,
      color: 'text-copa-blue',
      items: [
        {
          label: 'Playing Format By Division',
          content: (
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400">
                    <th className="py-2 pr-4 font-semibold uppercase">Divisions</th>
                    <th className="py-2 px-4 font-semibold uppercase">Aside</th>
                    <th className="py-2 px-4 font-semibold uppercase">Duration</th>
                    <th className="py-2 pl-4 font-semibold uppercase">Field Size</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                  <tr>
                    <td className="py-2.5 pr-4 font-bold text-slate-800">P-7 & P-9</td>
                    <td className="py-2.5 px-4">8-aside</td>
                    <td className="py-2.5 px-4">12 Mins</td>
                    <td className="py-2.5 pl-4">1/6 size field</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 font-bold text-slate-800">P-11 & Above</td>
                    <td className="py-2.5 px-4">9-aside</td>
                    <td className="py-2.5 px-4">16 Mins</td>
                    <td className="py-2.5 pl-4">1/3 size field</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          label: 'Guaranteed Games',
          content: 'All divisions (P-7 to P-17 and Open Categories) are guaranteed a minimum of 5 games throughout the event.',
        },
        {
          label: 'Tournament Structure',
          content: 'Follows a round-robin group stage where teams compete within their respective groups. The top-ranked teams from each group advance to the knockout stages.',
        },
      ],
    },
    {
      title: 'Rankings & Tie-Breakers',
      icon: Award,
      color: 'text-cebu-green',
      items: [
        {
          label: 'Point Allocation',
          content: 'Group stage rankings are determined by cumulative points: 3 points for a win, 1 point for a draw, and 0 points for a loss.',
        },
        {
          label: 'Tie-Breaker Criteria',
          content: (
            <div>
              <p>In the event of a tie in points, teams will be ranked by applying the following criteria in order:</p>
              <ol className="list-decimal list-inside space-y-1 mt-2 text-slate-500 font-semibold">
                <li>Goal difference (GF &minus; GA)</li>
                <li>Goals scored (GF)</li>
                <li>Goals conceded (GA &mdash; fewer is better)</li>
                <li>Head-to-head match results</li>
                <li>Disciplinary records</li>
                <li>Penalty kicks (if necessary)</li>
              </ol>
            </div>
          ),
        },
      ],
    },
    {
      title: 'In-Game Regulations',
      icon: ShieldAlert,
      color: 'text-year-purple',
      items: [
        {
          label: 'Substitutions Rule',
          content: 'Open substitutions are permitted, meaning substituted players are allowed to re-enter. Substitutions can be made on the fly without stopping play, except during a goalkeeper change.',
        },
        {
          label: 'Offside Rule',
          content: 'The offside rule is NOT in effect. Offside rules do not apply to either the 8-a-side or 9-a-side formats.',
        },
        {
          label: 'Goals directly from Kick-Off',
          content: 'No. A goal cannot be scored directly from kick-off. The ball must touch or be deflected by another player before passing the goal line to count as a goal.',
        },
        {
          label: 'Goalkeeper Exceptions',
          content: 'Goalkeepers are not allowed to handle back passes with their hands. Goalkeeper throws cannot result in a direct goal unless touched by another player first. Volleys during open play are allowed and can result in goals.',
        },
        {
          label: 'Knockout Tie-Breakers',
          content: (
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 font-medium">
              <li><strong className="text-slate-800">Quarter-finals & Semi-finals:</strong> Sudden death penalty shootout with one kicker per side.</li>
              <li><strong className="text-slate-800">Championship Match:</strong> Standard penalty shootout with three kickers per side, followed by sudden death if necessary.</li>
            </ul>
          ),
        },
      ],
    },
    {
      title: 'Equipment & Safety',
      icon: Footprints,
      color: 'text-copa-blue',
      items: [
        {
          label: 'Footwear & Studs',
          content: 'Since matches are played on artificial turf fields, metal studs are strictly prohibited. Players must wear standard firm-ground (FG) or artificial-grass (AG) football boots.',
        },
        {
          label: 'Medical Standby',
          content: 'A dedicated, professional medical team will be on standby pitch-side throughout the duration of the tournament to attend to any injuries or medical emergencies.',
        },
      ],
    },
  ];

  return (
    <div className="w-full space-y-8 py-4 animate-fade-in-up">
      {/* Title */}
      <div>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-slate-900">
          Tournament <span className="text-gradient-copa-cebu">Rules</span>
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          Read official regulations, playing formats, in-game procedures, and safety guidelines for COPA Cebu 2026.
        </p>
      </div>

      {/* Rules Layout grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, secIdx) => {
          const Icon = section.icon;
          return (
            <div key={secIdx} className="hover-card p-6 rounded-2xl space-y-6">
              <h2 className="font-display font-bold text-xl text-slate-900 flex items-center space-x-2.5 border-b border-slate-100 pb-3">
                <Icon className={`w-5 h-5 ${section.color}`} />
                <span>{section.title}</span>
              </h2>

              <div className="space-y-4">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="space-y-1.5">
                    <h3 className="text-[10px] font-bold uppercase tracking-wider text-copa-blue">{item.label}</h3>
                    <div className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{item.content}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
