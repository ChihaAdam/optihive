# Optihive — QWEN.md

## Project Overview

**Optihive** is an AI-powered project management tool designed to streamline development workflows and provide intelligent workspace solutions. It features AI scheduling, smart resource allocation, and predictive analytics.

The project is structured as two separate applications sharing a single repository (not a formal monorepo workspace):

- **Backend** (`backend/`) — Express 5 + Mongoose (MongoDB), using ESM modules
- **Frontend** (`frontend/`) — Next.js 16 (App Router) + React 19, using pnpm

---

## Architecture

### Backend (`backend/`)

| Directory | Purpose |
|-----------|---------|
| `config/` | Configuration files (DB connection, environment variables) |
| `controllers/` | Route controller logic (flat structure, one per domain) |
| `helpers/` | Helper functions and utilities |
| `middleware/` | Express middleware (auth, validation, error handling) |
| `model/` | Mongoose schemas (User, Project, Membership, Feature) |
| `routes/` | API route definitions, nested by domain |
| `tests/` | Vitest + supertest integration tests |

- **Entry point:** `index.js`
- **API prefix:** `/api/v1/`
- **Modules:** ESM (`"type": "module"`) — imports use `.js` extensions
- **Auth:** JWT tokens issued on register/login; sent as `Authorization: Bearer <token>`
- **Membership model:** Links users to projects with roles (`member` | `project_manager`); unique compound index on `(userId, projectId)`
- **Database:** MongoDB via Docker Compose (`docker-compose.yml`)
- **Error handling:** Centralized `errorHandler` middleware

### Frontend (`frontend/`)

| Directory | Purpose |
|-----------|---------|
| `src/app/` | Next.js App Router routes (with route groups and dynamic segments) |
| `src/features/` | Feature-based modules: `auth/`, `workspace/`, `darkmode/`, `main/` |
| `src/shared/` | Shared code: `actions/`, `cache/`, `components/`, `hooks/`, `lib/` |
| `.storybook/` | Storybook configuration |

- **Authentication:** Next.js middleware (`src/middleware.ts`) checks for a `token` cookie to protect `/workspace`
- **Axios instances:** `api` (with interceptors for auth + 401 redirect) and `cacheApi` (bare, for cached server calls)
- **Server actions:** Marked with `"use server"` directive; used for form submissions via `useForm` hook
- **Cached fetchers:** Use `"use cache"` directive with `cacheTag` for on-demand revalidation
- **State management:** Zustand for client state
- **Token:** Stored in httpOnly cookie; managed via `features/auth/token.ts` server actions
- **Forms:** Use `useForm` hook (wraps `useActionState` + `useToast`) — all form actions are server actions
- **UI:** Radix UI Themes + Tailwind CSS v4

---

## Technologies

| Area | Technology |
|------|------------|
| Frontend Framework | Next.js 16 + React 19 |
| State Management | Zustand |
| Styling | Tailwind CSS v4 + Radix UI Themes |
| Icons | Lucide React |
| Data Fetching | Axios |
| Validation | Zod |
| Testing (Frontend) | Vitest + Storybook + Playwright (browser mode) |
| Backend Framework | Express 5 |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcrypt |
| Containerization | Docker + Docker Compose |
| Package Manager (Backend) | npm |
| Package Manager (Frontend) | pnpm |

---

## Commands

### Root (runs both frontend + backend together)

```bash
npm run dev          # docker-compose up -d + backend nodemon + frontend next dev
```

### Backend

```bash
cd backend
npm run dev          # nodemon index.js
npm test             # vitest run (integration tests with supertest)
npm start            # node index.js (production)
```

Run a single backend test:
```bash
cd backend && npx vitest run tests/project/project.test.js
```

### Frontend

```bash
cd frontend
pnpm dev             # next dev
pnpm build           # next build
pnpm start           # next start (production)
pnpm lint            # eslint
pnpm storybook       # storybook dev -p 6006
pnpm build-storybook # storybook build
```

Run a single frontend test:
```bash
cd frontend && pnpm exec vitest run path/to/test.test.tsx
```

---

## Environment Variables

### Backend (`backend/.env`)

Required variables:
- `PORT` — Server port
- `JWT_SECRET` — JWT signing secret
- `JWT_EXPIRES_IN` — JWT token expiration time
- `MONGO_URI` — MongoDB connection string

### Frontend (`frontend/.env`)

Required variables:
- `NEXT_PUBLIC_API_URL` — Backend API URL

---

## Key Patterns

- **Backend ESM:** Uses `import`/`export` with `.js` extensions in imports
- **Frontend server actions:** Marked with `"use server"` directive
- **Frontend cached fetchers:** Use `"use cache"` directive with `cacheTag` for on-demand revalidation
- **Backend error handling:** Middleware sets `err.statusCode`, caught by centralized `errorHandler`
- **Backend auth middleware chain:** `authMiddleware` → `isProjectMember` / `isProjectManager` for project-scoped routes
- **Frontend workspace layout:** Navbar (top) + Sidebar (left) + scrollable content area

---

## Project Status

🚧 **Under Development** — Features, architecture, and documentation are subject to rapid change.
