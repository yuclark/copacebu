import { getDivisions, getTeams, getMatches } from '@/lib/data';
import StandingsView from '@/components/StandingsView';

export const dynamic = 'force-dynamic';

export default async function StandingsPage() {
  const [divisions, teams, matches] = await Promise.all([
    getDivisions(),
    getTeams(),
    getMatches()
  ]);

  return (
    <div className="w-full space-y-8 animate-fade-in-up py-4">
      <div>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-white">
          Tournament <span className="text-gradient-copa-cebu">Standings</span>
        </h1>
        <p className="text-sm text-gray-400 mt-2">
          Track group stage rankings, match histories, and upcoming knockout schedules across all age divisions.
        </p>
      </div>

      <StandingsView divisions={divisions} teams={teams} matches={matches} />
    </div>
  );
}
