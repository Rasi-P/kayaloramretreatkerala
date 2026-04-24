# Kayaloram: Kerala Homestay Explorer

Welcome to the **Kayaloram** project! This is a modern, responsive web application designed for discovering and booking unique homestay accommodations across the beautiful state of Kerala.

## 🚀 Tech Stack

- **Framework:** [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (built on [Radix UI](https://www.radix-ui.com/))
- **Routing:** [React Router](https://reactrouter.com/)
- **State Management:** [React Query](https://tanstack.com/query/latest)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

## 📦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended). This project also supports [Bun](https://bun.sh/) as a package manager.

### Installation

1. Clone the repository.
2. Install dependencies by running:
   ```bash
   npm install
   # or utilizing bun:
   bun install
   ```

### Running the Development Server

Start the Vite development server:
```bash
npm run dev
# or
bun run dev
```

Open your browser and navigate to the local server URL provided by Vite (typically `http://localhost:5173` or `http://localhost:8080`) to view the application.

## 🛠️ Scripts

- `npm run dev`: Starts the local development server.
- `npm run build`: Builds the application for production into the `dist/` directory.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs ESLint for code formatting and analysis.
- `npm run test`: Runs the test suite utilizing Vitest.

## 📁 Project Structure

- **`src/`**: Main application source code
- **`public/`**: Static assets that don't require bundling
- **`components.json`**: Configuration for shadcn/ui components
