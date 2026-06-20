# 🏆 COPA Cebu 2026 Official Website

Welcome to the official web application for **COPA Cebu 2026**—an elite, 3-day football tournament held from **June 19–21, 2026**, at the **Dynamic Herb Sports Complex** in Talisay City, Cebu, Philippines.

This portal acts as the central hub for tournament logistics, rules directory, rewards structure, live group standings, and admin score fixtures.

---

## 🚀 Tech Stack

- **Core Framework**: [Next.js 16 (App Router)](https://nextjs.org/) (React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with native HSL theme tokens and CSS-based backdrop glows.
- **Database Engine**: [Neon Database](https://neon.tech/) (Serverless PostgreSQL client)
- **ORM & Migrations**: [Drizzle ORM](https://orm.drizzle.team/)
- **Visual Utilities**: [Lucide React Icons](https://lucide.dev/)

---

## ✨ Features

### 1. 📊 Live Standings & Fixtures Ledger (`/standings`)
- Automatically computes and updates group standings using FIFA/COPA rules (Wins, Draws, Losses, Goals For, Goals Against, Goal Difference, Points).
- Interactive category selector for **Mixed** (P-7, P-9, P-11, P-13), **Boys** (P-15, P-17), and **Men's & Women's Open** divisions.
- Connects directly to NeonDB to fetch live fixtures and round statuses (Scheduled, Live, Completed).

### 2. 📋 Interactive Milestone Stepper (`/information`)
- A timeline stepper highlighting tournament checkpoints (Early Bird, Roster Locks, Match Days, Championships).
- Synced dynamically with the active schedule of the tournament (June 20, 2026 status updates are live).
- Converted from plain lists into an interactive card detailing official directives.

### 3. ⚽ Tactical Pitch & Roster Simulator (`/information`)
- Renders an interactive CSS soccer field layout of the Dynamic Herb Turf Complex.
- Features toggles between **8-aside (P-7/P-9)** and **9-aside (P-11+)** dimensions.
- Features interactive clickable player bubbles (GK, LCB, CB, LM, FW, etc.) that reveal position-specific game guidelines, substitution scopes, and boundary checks.

### 4. 🗂️ Document Credentials Hub (`/information`)
- Interactive verification wizard to check player validation criteria (PSA Birth Certificates, Passport scans, Roster locking exemptions).
- Details 3-stage validation pipelines (Submission ➔ Review ➔ Roster Clearance) to prepare coaches and club managers.

### 5. 🔍 Slide Guides Slider & Lightbox (`/information`)
- Official slides browser showing rules, divisions, and rosters details.
- Features transition indicators, navigation loops, and a **Fullscreen Lightbox Viewer** to zoom and inspect slide documents in high definition.

### 6. 🔒 Admin Fixtures Panel (`/admin`)
- Provides tournament officials with a direct interface to log match outcomes.
- Includes validation rules preventing impossible score entries.
- **Dual-State Connectivity**:
  - *Direct Database*: Write updates directly to NeonDB and revalidate caches if `DATABASE_URL` is active.
  - *React Simulation*: Runs immediate in-memory standings calculations and visual updates if database credentials are not present.

---

## 🛠️ Installation & Database Setup

### 1. Environment Configuration
Create a `.env.local` file in the root directory:
```env
DATABASE_URL="postgresql://[user]:[password]@[neon-host]/copa?sslmode=require"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Database Push (Drizzle ORM)
Push the tables schema directly to your Neon database instance:
```bash
npm run db:push
```

### 4. Seed Database
Populate mock divisions, starting teams, and fixtures data:
```bash
npm run db:seed
```

### 5. Launch Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build Commands

*   `npm run dev` - Starts the Next.js development server.
*   `npm run build` - Performs static page generation and optimizes for production.
*   `npm run start` - Launches the production build server.
*   `npm run db:generate` - Generates schema snapshots for Drizzle Kit.
*   `npm run db:push` - Pushes schemas directly to NeonDB serverless database.
*   `npm run db:seed` - Runs the database seeding script to populate initial rosters.
