# Planetrix — Solar System Explorer

Planetrix is a modern Solar System explorer built with Next.js. It provides an interactive browsing experience for planets and the Sun, with smooth motion and a responsive UI.

## Demo

- Live site: `https://planetrixsolor.netlify.app/`

## Tech stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting started

### Prerequisites

- Node.js (recommended: latest LTS)
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Static export

This project is configured for static export via `output: "export"` in `next.config.ts`.

To generate a static build, run:

```bash
npm run build
```

The exported output is generated in `out/`.

## Project structure (high level)

- `src/app/`: routes and UI (App Router)
- `src/data/`: data sources used by the UI
