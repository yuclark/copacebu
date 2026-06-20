import { getDivisions, getTeams, getMatches } from '@/lib/data';
import AdminPanel from '@/components/AdminPanel';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const [divisions, teams, matches] = await Promise.all([
    getDivisions(),
    getTeams(),
    getMatches()
  ]);

  return (
    <div className="w-full space-y-8 animate-fade-in-up py-4">
      <div>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-white">
          Admin <span className="text-gradient-copa-cebu">Dashboard</span>
        </h1>
        <p className="text-sm text-gray-400 mt-2">
          Update game scores, manage match schedules, and review standing calculations in real-time.
        </p>
      </div>

      <AdminPanel initialDivisions={divisions} initialTeams={teams} initialMatches={matches} />
    </div>
  );
}
