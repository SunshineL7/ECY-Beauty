# ECY Beauty

**AI-assisted skincare product analysis and routine companion — frontend prototype**

ECY Beauty explores how to turn skincare product and skin profile information into a clear, personalized user experience. The prototype brings product analysis, ingredient and risk summaries, routine tracking, skin trend visualization, and community content into one responsive web app.

> This repository is a frontend prototype. Its API layer currently returns mock data; it does not call a production AI model or backend. Analysis scores and recommendations shown by the prototype are illustrative and are not medical advice.

## Product experience

- **Product analysis flow:** enter through camera, ingredient input, or search; review a structured report with safety and skin-match scores, ingredient notes, risk flags, and usage suggestions.
- **Personalized skincare coach:** view morning/evening routines, record skin feelings, and explore a seven-day trend and AI-style summary.
- **Skincare community:** browse product feedback digests, rankings, risk alerts, search suggestions, and user notes.
- **Personal skin profile:** review skin metrics and saved assets, manage preferences, and switch visual themes.

## Product thinking

The interface is organized around a recurring user loop:

1. **Understand:** build a skin profile and surface current concerns.
2. **Evaluate:** make product analysis readable through scores, ingredient highlights, risks, and reasons.
3. **Act:** translate findings into routine and usage suggestions.
4. **Learn:** record skin feelings and review trends over time.
5. **Share:** use community feedback to add context to product decisions.

## Technical overview

- **Application:** React 19, TypeScript, TanStack Start and TanStack Router
- **Styling:** Tailwind CSS v4, reusable UI components, theme switching
- **Data fetching:** TanStack Query
- **Charts and interaction:** Recharts, Radix UI primitives, React Hook Form, Zod
- **Current data source:** centralized API facade backed by local mock fixtures

The API facade separates UI components from data access so a real service can replace mock implementations later. The current codebase demonstrates frontend routing, reusable component composition, typed domain models, loading states, and end-to-end product flows; it does not yet demonstrate a production AI integration or persistent user data.

## Run locally

Requirements: Node.js and Bun.

```bash
bun install
bun run dev
```

Available scripts:

```bash
bun run build
bun run lint
```

## Resume-ready summary

Designed and implemented **ECY Beauty**, a React + TypeScript skincare companion prototype that connects product ingredient analysis, skin-profile matching, routine tracking, trend visualization, and community feedback in a unified experience. Built reusable UI flows and typed domain models, and isolated data access behind a mock API facade to support future backend integration.

## Scope and next steps

- Replace mock API methods with a documented backend contract and persistent storage.
- Connect a verifiable AI service for ingredient interpretation and personalized suggestions; add source attribution and failure handling.
- Add privacy, consent, and safe-use controls before processing real skin or product data.
- Add automated tests and deployment instructions before presenting the app as production-ready.

## Source project

This portfolio description was prepared from the public source repository: [SunshineL7/ECY-Beauty](https://github.com/SunshineL7/ECY-Beauty).
