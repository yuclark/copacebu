import { getDivisions, getTeams, getMatches } from '@/lib/data';
import ScheduleView from '@/components/ScheduleView';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Tournament Schedule & Results | COPA Cebu 2026',
  description: 'View upcoming match fixtures, live match scores, and completed group and knockout stage results for COPA Cebu 2026.',
};

export default async function SchedulePage() {
  const [divisions, teams, matches] = await Promise.all([
    getDivisions(),
    getTeams(),
    getMatches(),
  ]);

  return (
    <div className="w-full space-y-8 animate-fade-in-up py-4">
      <div>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-slate-900">
          Match <span className="text-gradient-copa-cebu">Schedule</span> & Results
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          Stay updated with live scores, upcoming fixtures, and final match standings across all divisions.
        </p>
      </div>

      <ScheduleView divisions={divisions} teams={teams} matches={matches} />
    </div>
  );
}
