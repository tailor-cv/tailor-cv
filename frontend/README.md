# TailorCV Landing Website

AI-powered CV generator landing page built with modern web technologies.

## Tech Stack

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn/ui** - Component library built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js & npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd landing-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The dev server will start at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/       # Feature components (Hero, Features, etc.)
│   └── ui/          # shadcn/ui components
├── pages/           # Route pages
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── assets/          # Static assets
```

## Development

The project uses path aliases - import from `@/` to reference the `src/` directory:

```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```
