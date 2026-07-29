# Folder Structure - Sahanaya

This document provides a comprehensive blueprint of Sahanaya's monorepo directory layout, explaining the purpose of each folder and file.

---

## 📂 Overall Workspace

```
sahanaya-root/
├── docs/                 # System and API documentation
│   ├── Architecture.md
│   ├── FolderStructure.md
│   ├── Roadmap.md
│   ├── Installation.md
│   └── API.md
├── assets/               # Branding assets, vector logos, and mockups
├── frontend/             # Next.js 15 client-side codebase
└── backend/              # Node/Express TypeScript server codebase
```

---

## 🎨 Frontend Folder Structure (`frontend/`)

The frontend application uses Next.js 15 App Router under `src/app/`.

```
frontend/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── src/
│   ├── app/                    # Next.js App Router (Routing and Pages)
│   │   ├── layout.tsx          # Root Layout (Navbar, Footer, Providers wrapper)
│   │   ├── globals.css         # Tailwind global styles
│   │   ├── page.tsx            # Home Page
│   │   ├── about/              # About Page
│   │   ├── resources/          # Resource Hub / Articles
│   │   ├── emergency/          # Emergency Help Page (Helplines)
│   │   ├── know-your-mental-health/ # Informative articles / Educational center
│   │   ├── self-assessment/    # Self-Assessments Directory
│   │   ├── relax/              # Relaxation Activities (Breathing exercises)
│   │   ├── journal/            # Gratitude Journal Page
│   │   ├── mood-tracker/       # Mood Tracker Page
│   │   ├── ai-companion/       # AI Mental Wellness Chatbot
│   │   ├── events/             # Leo Club Mental Health Events
│   │   ├── volunteer/          # Volunteer registration page
│   │   ├── partners/           # Partner organizations list
│   │   ├── contact/            # Support/Contact Leo Club Pannipitiya Paradise
│   │   ├── privacy/            # Privacy Policy
│   │   ├── terms/              # Terms & Conditions
│   │   ├── login/              # Admin/User Login
│   │   ├── dashboard/          # User Dashboard (Personal logs)
│   │   ├── admin/              # Admin dashboard (Manage resources & contacts)
│   │   └── not-found.tsx       # Custom 404 error page
│   │
│   ├── components/             # Reusable UI Components
│   │   ├── ui/                 # Atomic UI components (Buttons, Inputs, Toggles)
│   │   ├── layout/             # Layout templates (Navbar, Footer, Banners)
│   │   └── common/             # Cards, FAQs, Spinners, Newsletters
│   │
│   ├── layouts/                # Shared layout shells (e.g. DashboardLayout)
│   ├── sections/               # Page-specific sections (e.g. HomepageHero, EventGrid)
│   ├── hooks/                  # Custom React hooks (useAuth, useLocalStorage)
│   ├── services/               # API clients, axios configurations, fetch modules
│   ├── lib/                    # Configuration and utility libraries (e.g. framer variants)
│   ├── types/                  # TypeScript definitions (DTOs, interface entities)
│   ├── utils/                  # Pure utility functions (dates, text truncation)
│   ├── styles/                 # Sub-styles and component specific files
│   ├── constants/              # Fixed data (helpline list, page routes, locales)
│   └── public/                 # Static items (Favicon, logos, banner images)
```

---

## ⚙️ Backend Folder Structure (`backend/`)

The backend codebase is a structured Node.js & Express application built in TypeScript.

```
backend/
├── package.json
├── tsconfig.json
├── src/
│   ├── server.ts               # Core HTTP listener server
│   ├── app.ts                  # Express application setup, middlewares, routes initialization
│   │
│   ├── routes/                 # Express route handlers
│   │   ├── auth.ts             # Auth endpoints (Guest, Admin, Google OAuth)
│   │   ├── users.ts            # User endpoints
│   │   ├── assessments.ts      # Self-assessment questions and answers
│   │   ├── resources.ts        # Articles and resources endpoints
│   │   ├── emergency.ts        # Emergency contacts configuration
│   │   ├── journal.ts          # Gratitude journal entries
│   │   ├── mood.ts             # Mood logging endpoints
│   │   ├── ai.ts               # Claude/OpenAI chatbot endpoints
│   │   ├── events.ts           # Events registry endpoints
│   │   └── admin.ts            # Admin moderation endpoints
│   │
│   ├── controllers/            # Controller layer (business logic handlers for routes)
│   ├── middleware/             # Express middlewares (auth checks, CORS, rate limits, validators)
│   ├── services/               # Core services (Database queries, AI interactions)
│   ├── models/                 # Mongoose schemas for MongoDB
│   │   ├── User.ts
│   │   ├── Assessment.ts
│   │   ├── MoodEntry.ts
│   │   ├── JournalEntry.ts
│   │   ├── EmergencyContact.ts
│   │   ├── Article.ts
│   │   └── Event.ts
│   │
│   ├── database/               # Database config and seeding files
│   ├── config/                 # Application config (Environment files parsing)
│   ├── utils/                  # Logging, error parsing, and response formatting helpers
│   ├── types/                  # Express type extensions and custom TS definitions
│   └── validators/             # Request payload validator definitions
```
