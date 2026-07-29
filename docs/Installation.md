# Local Installation Guide - Sahanaya

Follow this step-by-step guide to clone, install dependencies, configure, and start the Sahanaya development server on your machine.

---

## 📋 Prerequisites

Ensure you have the following installed:
- **Node.js**: `v20.x` or above (Recommended `v25` or current LTS)
- **npm**: `v10.x` or above
- **MongoDB**: A running MongoDB instance locally or a MongoDB Atlas cloud URI.

---

## 🛠️ Step-by-Step Setup

### 1. Project Initialization

If you're starting from scratch or pulling from remote:
```bash
git clone <repository-url> sahanaya
cd sahanaya
```

### 2. Frontend Configuration & Execution

1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```
3. Set up the local environment variables. Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```
4. Run the frontend in development mode:
   ```bash
   npm run dev
   ```
   The client will be running at `http://localhost:3000`.

---

### 3. Backend Configuration & Execution

1. Navigate to the `backend/` directory from the root:
   ```bash
   cd ../backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Set up the server environment variables. Create a `.env` file:
   ```env
   # Server Config
   PORT=5000
   NODE_ENV=development

   # Database
   MONGODB_URI=mongodb://localhost:27017/sahanaya

   # Security & Session
   JWT_SECRET=your_jwt_secret_key_here
   SESSION_SECRET=your_express_session_secret_here

   # AI integration (Future use)
   AI_API_KEY=your_claude_or_openai_api_key_here
   ```
4. Run the backend server:
   - For dev mode (reloads on save):
     ```bash
     npm run dev
     ```
   - For building to production:
     ```bash
     npm run build
     npm start
     ```
   The server will listen at `http://localhost:5000`.

---

## ⚙️ Running the Entire Monorepo

To make development easier, you can run both services simultaneously. You may install a root-level task runner like `concurrently` (optional) or run them in separate terminal tabs.

```bash
# Tab 1: Frontend
cd frontend && npm run dev

# Tab 2: Backend
cd backend && npm run dev
```
