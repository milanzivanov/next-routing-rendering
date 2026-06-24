# Next.js Routing & Rendering Demo

Small Next.js App Router project that demonstrates route groups, dynamic routes, parallel routes, intercepting routes, loading states, not-found handling, and a simple SQLite-backed news dataset.

## Tech stack

- Next.js 16
- React 19
- better-sqlite3
- Optional Express backend in `backend\`

## What this project shows

- **Route groups** with separate marketing and content layouts
- **Dynamic routes** for individual news articles
- **Parallel routes** in the archive view
- **Intercepting routes** for image modals
- **Loading states** and custom not-found pages
- **SQLite data access** through `lib\news.js`

## Getting started

Install dependencies:

```bash
npm install
```

Start the Next.js app:

```bash
npm run dev
```

Open `http://localhost:3000`.

Production commands:

```bash
npm run build
npm run start
```

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Marketing landing page |
| `/news` | All news articles |
| `/news/[slug]` | News detail page |
| `/news/[slug]/image` | Fullscreen article image |
| `/archive` | Archive overview with latest news |
| `/archive/[year]` | Year filter |
| `/archive/[year]/[month]` | Year + month filter |
| `/api` | Simple example route handler |

## Project structure

```text
app\
  (marketing)\        Landing page layout and homepage
  (content)\          Main news experience
    archive\          Archive page with parallel routes
    news\             News list, detail page, and image modal flow
  api\                Example route handler
components\           Shared UI components
lib\                  SQLite data access helpers
backend\              Optional Express server
data.db               SQLite database used by the demo
```

## Data source

The main app reads news directly from `data.db` via `lib\news.js`. Those helpers intentionally include small delays to make loading states and Suspense behavior easier to observe while developing.

## Optional backend

`backend\app.js` starts a small Express server on port `8080` and exposes `GET /news`.

Run it separately if needed:

```bash
cd backend
npm install
npm start
```

This backend is optional; the Next.js app does not depend on it for the current UI.
