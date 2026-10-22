# ECY Beauty — Project Overview

## One-line description

A skincare companion frontend prototype that helps users explore product ingredients and risks, relate products to a skin profile, follow routines, and track changes over time.

## Problem framing

Skincare product decisions involve multiple kinds of information: product ingredients, personal skin concerns, potential risks, usage routines, and feedback over time. ECY Beauty groups these tasks into a single product experience instead of treating product analysis as a one-off screen.

## Main user journeys

### Product analysis

Users enter an analysis through camera, ingredient input, or search, then review a report containing product details, safety and match scores, ingredient highlights, risk notes, and use recommendations.

### Routine and tracking

Users review morning and evening tasks, record how their skin feels, and inspect a seven-day trend and generated-style summary.

### Community and profile

Users browse feedback digests, rankings, risk alerts, and notes; the profile area surfaces skin metrics, saved assets, settings, and visual themes.

## Architecture observed in source

```text
TanStack Start routes
        ↓
Page-level flows and reusable React components
        ↓
Typed domain models and hooks
        ↓
Central API facade
        ↓
Mock fixtures (current implementation)
```

The separation around the API facade creates a boundary for future service integration. Current source comments explicitly identify the API implementations as mock-backed and the cloud database as a future integration.

## Stack observed in package configuration

- React 19 and TypeScript
- TanStack Start, TanStack Router, and TanStack Query
- Tailwind CSS v4
- Radix UI primitives and reusable component patterns
- Recharts, React Hook Form, and Zod
- Bun scripts and lockfile

## Current implementation limits

- API results are mock data with simulated latency.
- No production model integration or persistent backend is evidenced by the current API facade.
- No verified deployment URL, user metrics, or test results are included in the source README.
- Product analysis and skincare suggestions are illustrative and should not be presented as medical advice.

## Suggested portfolio evidence to add

- Screenshots of the key flows: analysis entry, report, coach, trend chart, community, and profile.
- A short demo video showing one complete user journey.
- A clear statement of which parts you personally designed and implemented.
- Verified build/lint results, deployment URL, and any real outcome metrics (only if available).
- A data-flow diagram and a concrete next-step plan for real AI, privacy, and backend integration.
