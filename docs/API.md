# REST API Specifications - Sahanaya

This document maps the REST API endpoints provided by the Express backend.

---

## 🔒 Base Endpoint
`http://localhost:5000/api`

*All request and response bodies are JSON unless specified.*

---

## 🔑 Authentication Router (`/auth`)

| Endpoint | Method | Auth Required | Description |
| :--- | :--- | :--- | :--- |
| `/auth/guest` | POST | None | Creates a temporary guest session and issues a local guest token. |
| `/auth/google` | POST | None | Handles Google OAuth login (verifies JWT ID token from Google client). |
| `/auth/logout` | POST | Guest / Admin | Invalidates session and clears local cookies. |

---

## 👥 Users Router (`/users`)

| Endpoint | Method | Auth Required | Description |
| :--- | :--- | :--- | :--- |
| `/users/me` | GET | Token | Fetch details of the current user or guest profile. |
| `/users/profile` | PUT | Token | Update user preferences (e.g. theme preference, language preference). |

---

## 🏥 Emergency Helpline Router (`/emergency`)

| Endpoint | Method | Auth Required | Description |
| :--- | :--- | :--- | :--- |
| `/emergency` | GET | None | Fetch all verified Sri Lankan mental health helplines (contacts, opening hours, descriptions). |
| `/emergency` | POST | Admin | [Admin only] Create a new emergency helpline contact card. |
| `/emergency/:id` | PUT | Admin | [Admin only] Modify helpline card details. |
| `/emergency/:id` | DELETE | Admin | [Admin only] Delete a helpline card. |

---

## 📚 Articles & Resources Router (`/resources`)

| Endpoint | Method | Auth Required | Description |
| :--- | :--- | :--- | :--- |
| `/resources` | GET | None | Fetch educational articles, categorized (e.g., self-care, anxiety, depression). |
| `/resources/:slug` | GET | None | Fetch details of a single article based on its URL slug. |
| `/resources` | POST | Admin | [Admin only] Publish a new mental wellness resource article. |

---

## 📝 Self-Assessment Router (`/assessments`)

| Endpoint | Method | Auth Required | Description |
| :--- | :--- | :--- | :--- |
| `/assessments` | GET | None | Get active questionnaires (questions, scoring weights, ranges). |
| `/assessments/submit` | POST | Token | Log assessment answers, calculate scores, and store results anonymously. |

---

## 📊 Mood Tracker Router (`/mood`)

| Endpoint | Method | Auth Required | Description |
| :--- | :--- | :--- | :--- |
| `/mood` | GET | Token | Fetch mood history list for the logged-in user or guest. |
| `/mood` | POST | Token | Log a daily mood score (1-5 scale) with tags (e.g. stressed, happy) and brief notes. |

---

## 📓 Journal Router (`/journal`)

| Endpoint | Method | Auth Required | Description |
| :--- | :--- | :--- | :--- |
| `/journal` | GET | Token | Fetch user's gratitude journal entries. |
| `/journal` | POST | Token | Create a new journal entry. |
| `/journal/:id` | PUT | Token | Edit an existing journal entry. |
| `/journal/:id` | DELETE | Token | Delete an entry. |

---

## 🤖 AI Companion Chat Router (`/ai`)

| Endpoint | Method | Auth Required | Description |
| :--- | :--- | :--- | :--- |
| `/ai/chat` | POST | Token | Submit a user chat message to the Sahanaya AI. Checks for crisis patterns. |
| `/ai/history` | GET | Token | Retrieve recent chat session logs. |
