# Optihive 🐝

> **🚧 Project Status: Under Development 🚧**  
> Optihive is currently in active development. Features, architecture, and documentation are subject to rapid change. 

Optihive is a cutting-edge, **AI-powered project management tool** designed to streamline development workflows and provide intelligent workspace solutions. Built with a robust technology stack, it goes beyond traditional tracking to offer:

- 🧠 **AI Scheduling:** Dynamically adjust project timelines based on real-time team velocity, inter-task dependencies, and historical delivery patterns.
- 💡 **Smart Resource Allocation:** Match the right talent to the right tasks by analyzing skill graphs and availability to balance workloads across the organization.
- 📈 **Predictive Analytics:** Foresee delays before they happen and leverage data-driven insights to manage risks and ensure consistent sprint outcomes.

---

## 🛠️ Technologies Used

### Frontend
- **Framework:** [Next.js](https://nextjs.org/) (Version 16+) with [React 19](https://react.dev/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) for lightweight and scalable state.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [Radix UI Themes](https://www.radix-ui.com/) for beautiful, accessible components.
- **Icons:** [Lucide React](https://lucide.dev/)
- **Data Fetching:** [Axios](https://axios-http.com/)
- **Validation:** [Zod](https://zod.dev/)
- **Testing & UI Driven Development:** [Storybook](https://storybook.js.org/) & [Vitest](https://vitest.dev/)

### Backend
- **Runtime:** Node.js
- **Framework:** [Express.js](https://expressjs.com/) (Version 5+)
- **Database:** MongoDB via [Mongoose](https://mongoosejs.com/)
- **Authentication:** JSON Web Tokens (JWT) & bcrypt for secure password hashing.
- **Containerization:** Docker & Docker Compose (for simplified database setup).

---

## 🚀 Getting Started

### Prerequisites
Before you begin, ensure you have the following installed on your machine:
- **Node.js** (v18 or higher recommended)
- **npm** or **pnpm**
- **Docker Desktop** / **Docker Engine** (Required for the `docker-compose` MongoDB container)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd optihive
   ```

2. **Install root dependencies:**
   The root directory contains a `package.json` primarily used to orchestrate running both ends of the app concurrently.
   ```bash
   npm install
   ```

3. **Install Frontend and Backend dependencies:**
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   cd ..
   ```

4. **Environment Variables:**
   - Define your `.env` files. Both `frontend/.env` and `backend/.env` have been initialized. You will likely need MongoDB connection strings, JWT Secrets, etc., in the backend, and local API URLs in the frontend.

---

## 🏃‍♂️ Running the Application

Optihive uses a root script leveraging `concurrently` to bring up the database, start the backend API, and run the Next.js frontend all at once.

From the **root directory** (`optihive/`), run:

```bash
npm run dev
```

**What this does under the hood:**
1. Navigates to the `backend/` directory, runs `docker-compose up -d` (spins up the MongoDB container), and starts the Express server using Nodemon.
2. Navigates to the `frontend/` directory and starts the Next.js development server.

You can then access the frontend application at [http://localhost:3000](http://localhost:3000) (or the port specified by Next.js) and the backend API on its respective configured port.

---

## 📁 Project Structure

```text
optihive/
├── backend/                  # Node.js + Express Backend API
│   ├── config/               # Configuration files (DB, environment variables)
│   ├── controllers/          # Route controller logic
│   ├── helpers/              # Helper functions and utilities
│   ├── middleware/           # Express middleware (Auth, error handling)
│   ├── model/                # Mongoose database schemas
│   ├── routes/               # API route definitions
│   ├── docker-compose.yml    # Container setup for database services
│   └── index.js              # Application entry point
├── frontend/                 # Next.js Frontend App
│   ├── src/                  # Main application source code
│   ├── public/               # Static assets
│   ├── .storybook/           # Storybook configuration
│   └── next.config.ts        # Next.js configuration
├── design/                   # UI/UX design assets, wireframes, or references
└── package.json              # Root orchestrator for concurrently running the app
```

---

## 🧪 Testing & Storybook (Frontend)

The frontend project is configured with Storybook for isolated component development and Vitest for unit testing.

To run Storybook:
```bash
cd frontend
npm run storybook
```

---

## 🤝 Contributing
As the project is currently in the active development phase, major sweeping changes should be communicated with the core team. Make sure to abide by the configured Next.js ESLint and Vitest checks before submitting a PR.
