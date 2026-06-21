# 🏆 COPA Cebu 2026 Official Web Portal

Welcome to the official web application for **COPA Cebu 2026**—an elite, 3-day football tournament held from **June 19–21, 2026**, at the **Dynamic Herb Sports Complex** in Talisay City, Cebu, Philippines.

This portal acts as the central hub for tournament logistics, rules directory, rewards structure, live group standings, and admin score fixtures. It features a premium, responsive glassmorphic UI, custom animations, and a dual-state database architecture.

---

## 🚀 Tech Stack & Design System

### Technology Stack
*   **Core Framework**: [Next.js 16.2.x](https://nextjs.org/) (App Router, React 19)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with native HSL theme tokens and CSS-based backdrop glows.
*   **Database Engine**: [Neon Database](https://neon.tech/) (Serverless PostgreSQL client)
*   **ORM & Migrations**: [Drizzle ORM](https://orm.drizzle.team/)
*   **Visual Utilities**: [Lucide React Icons](https://lucide.dev/)

### Design System Tokens
All visual components must follow the brand rules defined in [globals.css](file:///c:/Users/clarkyu/copa/src/app/globals.css) to maintain a cohesive, high-performance, and premium layout:
*   **Copa Blue (`#007cff`)**: Core branding color, primary CTAs, interactive buttons.
*   **Cebu Green (`#20c96c`)**: Live indicators, winning highlights, success elements.
*   **Year Purple (`#a845f5`)**: Secondary accent, division headers, countdown timer badges.
*   **Background (`#f8fafc`)**: Cool light-gray slate background.
*   **Foreground (`#0f172a`)**: Deep slate-blue for body text and headers.
*   **Typography**:
    *   *Sans Serif*: `Plus Jakarta Sans` for description text, stats, tables, grids, and buttons.
    *   *Display*: `Space Grotesk` (styled as `uppercase font-black`) for main headlines, team headers, and scoreboard digits.
*   **CSS Utility Presets**:
    *   `.glass-panel`: Translucent white card layout with `backdrop-filter: blur(16px)` and subtle borders.
    *   `.hover-card`: Interactive grid cards featuring a smooth `translateY` transition and a hidden gradient border (Copa Blue ➔ Year Purple ➔ Cebu Green) that lights up on mouse hover.
    *   `.mesh-bg`: Ambient background mesh containing faded radial color blots.
    *   `.grid-overlay`: Dotted overlay providing depth under main hero sections.

---

## ✨ Features & Route Directory

### 1. 📊 Live Standings Board ([standings/page.tsx](file:///c:/Users/clarkyu/copa/src/app/standings/page.tsx))
*   **Real-time Standings**: Automatically computes and updates group standings using FIFA/COPA rules (Wins, Draws, Losses, Goals For, Goals Against, Goal Difference, Points).
*   **Green Qualification Glow**: Automatically highlights the top two slots in each table representing qualification for the knockout rounds.
*   **Interactive Selector**: Supports quick toggling between **Mixed** (P-7, P-9, P-11, P-13), **Boys** (P-15, P-17), and **Open** divisions.

### 2. 📅 Match Fixtures Ledger ([fixtures/page.tsx](file:///c:/Users/clarkyu/copa/src/app/fixtures/page.tsx))
*   **Round Filters**: Interactive navigation to filter match lists by divisions and tournament rounds (Group Stage, Quarter-Final, Semi-Final, Championship).
*   **Detailed Cards**: Displays kickoff timestamps, participating team logos, pitch assignments (Pitches A, B, and C), and real-time game status indicators (Scheduled, Live, Completed).

### 3. 🏆 Tournament Awards Catalog ([awards/page.tsx](file:///c:/Users/clarkyu/copa/src/app/awards/page.tsx))
*   **Hall of Champions**: Renders a dedicated victory card commemorating champions (such as the Boys P-17 Champions *Bast Green Lions* and their final 4-3 victory over *Don Bosco - A*).
*   **Rewards Structure**: Displays detailed benefits for Champions, 1st Runner-Up, and Individual MVPs.
*   **Award Policy**: Outlines official award ceremony rules and MVP nomination procedures.

### 4. 📖 Playbook & Official Handbook ([handbook/page.tsx](file:///c:/Users/clarkyu/copa/src/app/handbook/page.tsx))
*   **Section Index**: Sticky table-of-contents navigation for Match Formats, Gameplay Rules, and Safety & Footwear.
*   **Searchable Rules Directory**: Allows coaches and players to search standard regulations (offside rules, backpass guidelines, kickoff shooting exemptions, and game durations) and read the official referee verdicts.
*   **Footwear Compliance Matrix**: Lists approved shoe types (Firm Ground/FG/AG cleats and Turf Trainers/TF) and strictly prohibited footwear (Metal Spikes/SG).

### 5. ❓ FAQs & Milestone Stepper ([faqs/page.tsx](file:///c:/Users/clarkyu/copa/src/app/faqs/page.tsx))
*   **Milestone Timeline**: Accordion card steps detailing tournament dates (Early Bird, Roster Locks, Match Days, Championships) with ongoing vs concluded badges.
*   **Registry Clearance Assistant**: Highlights mandatory credentials for player registration (PSA Birth Certificates, Valid Passport scans, Roster locking limits) and the three-stage validation pipeline.

### 6. 🔒 Admin Score Controller ([admin/page.tsx](file:///c:/Users/clarkyu/copa/src/app/admin/page.tsx))
*   **Official score entries**: Provides tournament officials with an interactive interface to log match outcomes.
*   **Dual-State Connectivity**:
    *   *Direct Database Mode*: When `DATABASE_URL` is active in `.env.local`, updates are pushed directly to the serverless Neon PostgreSQL database via Server Actions, triggering server-side cache revalidation (`revalidatePath`).
    *   *Simulation Mode*: If no database credentials are present, updates run dynamically in React memory state. Standings recalculations are immediately computed and reflected in a preview table on the dashboard, with a "Reset Standings" toggle to reset mock data states.

---

## 🗂️ Project Directory Map

```text
copa/
├── src/
│   ├── app/                    # Next.js App Router Pages
│   │   ├── admin/              # Score controller with live/simulation calculation
│   │   ├── awards/             # Rewards, prizes, and Hall of Champions
│   │   ├── faqs/               # FAQs, milestone ledger, and credentials validation pipeline
│   │   ├── fixtures/           # Schedule pagination viewer with division filters
│   │   ├── handbook/           # Playing rules, offside exceptions, and footwear guidelines
│   │   ├── standings/          # Standings table calculated from completed fixtures
│   │   ├── globals.css         # Tailwind v4 configuration, theme colors, and glassmorphic card presets
│   │   ├── layout.tsx          # Floating navbar, footer container wrapper
│   │   └── page.tsx            # Interactive landing page with news carousel slider and support desk mailer
│   │
│   ├── components/             # Reusable interactive components
│   │   ├── AdminPanel.tsx      # Admin score logger and simulation standings recalculator
│   │   ├── Countdown.tsx       # Live countdown clock for tournament kickoff
│   │   ├── Footer.tsx          # Standard footer with info & social links
│   │   ├── Navbar.tsx          # Floating glassmorphic navigation bar
│   │   ├── ScheduleView.tsx    # Filterable and paginated match list component
│   │   └── StandingsView.tsx   # Division-specific group stand tables viewer
│   │
│   ├── db/                     # Database schemas, adapters, and mock seeders
│   │   ├── index.ts            # Drizzle client constructor
│   │   ├── schema.ts           # PostgreSQL tables mapping (divisions, teams, matches)
│   │   └── seed.ts             # Seeding script to initialize divisions and rosters
│   │
│   └── lib/                    # Shared utility layers, mock payloads, and server actions
│       ├── actions.ts          # Server Action to update scores and recalculate standings in Neon DB
│       ├── data.ts             # Conditional API loaders (falling back to mock when DB is inactive)
│       └── mockData.ts         # Pre-configured team data, division details, and completed fixtures
```

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
Push the tables schema directly to your serverless database instance:
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

## 📦 Build Commands Reference

*   `npm run dev` - Starts the Next.js development server.
*   `npm run build` - Performs static page generation and optimizes for production.
*   `npm run start` - Launches the production build server.
*   `npm run db:generate` - Generates schema snapshots for Drizzle Kit.
*   `npm run db:push` - Pushes schemas directly to NeonDB serverless database.
*   `npm run db:seed` - Runs the database seeding script to populate initial rosters.

