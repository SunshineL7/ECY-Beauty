# ECY Beauty

ECY Beauty is a skincare companion frontend prototype. It brings product ingredient insights, skin profile context, routine coaching, daily skin logs, and community feedback into one experience.

> **Project status:** this repository currently runs with mock data. Product scores, ingredient explanations, and skincare suggestions are illustrative. The source does not show a production AI service or persistent backend, so this project should be described as a prototype.

## Run locally

### Requirements

- Node.js 22 or newer
- npm 10 or newer

### Install and start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in the terminal. The app uses local mock fixtures, so no API key or backend setup is required for the current demo.

### Production build and preview

```bash
npm run build
npm run preview
```

## What you can explore

- Product analysis flow and ingredient/risk report
- Skin profile and product match information
- Routine coach, daily skin-feeling log, and trend view
- Community feedback, product rankings, and personal profile
- Reusable UI components and theme switching

## Repository layout

```text
public/                Static assets
src/
  components/          Feature and shared UI components
  contexts/            React context providers
  hooks/               Reusable React hooks
  lib/                 Shared utilities
  mock/                Demo fixtures used by the current app
  routes/              TanStack Start pages and route tree
  services/            API facade and data access boundary
  themes/              Theme definitions
  types/               Domain and API types
  server.ts            TanStack Start server entry
  router.tsx           Router setup
  styles.css           Global styles
```

## Technology

React 19, TypeScript, TanStack Start and Router, Tailwind CSS v4, Radix UI, TanStack Query, and Vite.

## Notes

- Data access is currently mock-backed with simulated latency. The services layer is the intended boundary for a future backend integration.
- Product analysis and suggestions are illustrative and are not medical advice.
- See [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) for product flows and architecture notes, and [RESUME_BULLETS.md](./RESUME_BULLETS.md) for concise portfolio wording.
