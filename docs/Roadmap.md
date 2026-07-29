# Project Roadmap - Sahanaya

This document provides a roadmap outlining the development phases of the Sahanaya mental wellness platform.

---

## 🗺️ Phases of Development

### 🚩 Phase 1: Foundation & Informational Core (Current Goal)
Focuses on delivering a secure, beautiful, responsive interface that provides educational resources and vital emergency contact systems.

- [x] **Project Scaffolding**: Setup Next.js 15 frontend, Express backend, and monorepo structure.
- [x] **Static Pages & Shell Layout**: Responsive navigation, customizable footer, global emergency advisory banners, and layout shells.
- [x] **Common Component Library**: Accessible hero banner, glassmorphic feature cards, FAQ card, loading spinner, and responsive buttons.
- [x] **Language i18n Preparedness**: Structure configurations mapping out English, Sinhala, and Tamil localization.
- [ ] **Phase 1 Execution (Ready next)**:
  - Connect Resources API (fetching articles).
  - Populate verified Sri Lankan Emergency Helplines (Sumithrayo, 1926, etc.).
  - Implement basic Guest session generation.

---

### 🧠 Phase 2: User Engagement & Wellness Utilities
Introduces personal logging capabilities, assessment features, and breathing/relaxation modules.

- **Guest Session State**: Secure local database creation for anonymous guest tracking.
- **Self Assessments**: Short screening questionnaires (e.g., PHQ-9, GAD-7) with feedback directing users to professional assistance when necessary.
- **Gratitude Journal**: A secure diary tool supporting markdown and mood association.
- **Mood Tracker**: Interlocking micro-interactions allowing users to log their mood daily and view historical trends.
- **Relax Zone**: Client-side breathing exercises (with visual guidance) and relaxing ambient soundscapes.

---

### 🤖 Phase 3: AI Assistant & Management Portals
Integrates AI features and gives Leo Club moderators administrative interfaces.

- **AI Companion (Sahanaya Bot)**: Integrations with Claude/OpenAI APIs offering conversational comfort, wellness tips, and active crisis red-flag detection.
- **Events & Volunteer Registration**: Registration for local Leo Club Pannipitiya Paradise mental health camps, seminars, and peer-support events.
- **Admin Dashboard**: Content Management System (CMS) for managing resource articles, reviewing helplines, moderating volunteer requests, and reviewing anonymous analytical insights.
- **Partners Portal**: Showcasing local clinics, clinical psychologists, and counseling centers partnering with the initiative.

---

### 🛡️ Phase 4: Production Polish, Security, & Deployment
Ensures compliance, testing coverage, scaling optimization, and public deployment.

- **Security Audits**: Comprehensive vulnerability scan, rate limiting verification, and penetration check.
- **Automated Testing**: Backend unit tests (Jest/Supertest), frontend component validation (Vitest), and end-to-end integration tests (Playwright).
- **Deployment Pipelines**:
  - Frontend configured to build and deploy to **Vercel** with edge caching.
  - Backend API server hosted on **Railway** or **Render**, with automated SSL renewal.
  - MongoDB database scaled with indexing on queries.
- **SEO & Meta Verification**: Verification of search engine indexing tags, sitemaps, and OpenGraph visuals for media sharing.
