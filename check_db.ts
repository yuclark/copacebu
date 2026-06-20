import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { db } from './src/db/index';
import * as schema from './src/db/schema';

async function check() {
  try {
    const divs = await db.select().from(schema.divisions);
    const tms = await db.select().from(schema.teams);
    const mtchs = await db.select().from(schema.matches);
    
    console.log('Teams count by division:');
    for (const d of divs) {
      const divisionTeams = tms.filter(t => t.divisionId === d.id);
      console.log(`  - ${d.name} (${d.id}): ${divisionTeams.length} teams`);
    }
    console.log(`Total matches in database: ${mtchs.length}`);
  } catch (e) {
    console.error('Failed to query database:', e);
  }
}

check();
