# Belle Cake Crafts

[![TanStack Start](https://img.shields.io/badge/TanStack_Start-FF4154?style=flat-square&logo=react-query&logoColor=white)](https://tanstack.com/start)
[![React](https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Convex](https://img.shields.io/badge/Convex-backend-EE342F?style=flat-square)](https://www.convex.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

> A home on the web for a cloud-kitchen bakery — a place to show the cakes, take
> orders, and one day teach people how to make them too.

## The story

A friend of mine runs a cloud kitchen and a thriving bakery business. She is
genuinely good at it, and it shows — she has built a real following through Google
and social media, and the orders keep coming. The one thing she did not have was a
place of her own. Everything lived on platforms she rented attention from, and
none of it was truly hers.

She told me what she wanted, simply: "I need to put my content on a website." A
single place that belongs to her brand, where the cakes look as good as they taste,
where customers can browse and order without bouncing between an ad and a DM. And
down the line, something she is excited about — she wants to **publish courses**
there and teach what she knows. That part will be really cool once it is live.

So Belle Cake Crafts is that home: a warm, polished storefront for her bakery, with
room to grow into the teaching side when she is ready.

## What it includes

| Section | What it does |
|---|---|
| **Home** | A full-bleed hero, a rotating order/announcement ticker, and the week's featured cakes. |
| **Shop** | The full catalog — cakes, healthy options, and desserts — with themes, dietary tags, prices, and lead times. |
| **The Academy** | A sketch of the teaching side — baking courses, free demos and paid masterclasses with a player, ingredients, and method. Roughed out, not built. |
| **Recipes** | Short, approachable recipes to bring people back between orders. |
| **Corporate** | A path for bulk and corporate orders. |
| **Cart** | A running cart for placing orders across the shop. |

## Tech stack

| Layer | Choice |
|---|---|
| Framework | TanStack Start (TanStack Router + server functions) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| Data / state | TanStack Query |
| Backend | Convex (real-time database + functions) |
| Env safety | T3 Env + Zod |
| Server | Nitro (deploys to any Node host) |
| Lint + format | Biome |

## Running it locally

Requires Node and a [Convex](https://www.convex.dev/) deployment.

```bash
npm install
npx convex dev   # sets up VITE_CONVEX_URL + CONVEX_DEPLOYMENT and runs the backend
npm run dev      # http://localhost:3000
```

Useful scripts:

```bash
npm run build    # production build (Nitro server output)
npm run test     # Vitest
npm run check    # Biome lint + format
```

## Status

Early and unfinished — honestly, more of a head start than a working site. The
storefront layout is in place, but everything on it is placeholder: the cakes are
stock photos, the catalog and recipes run on mock data, and the Academy is only
roughed out, not actually built. None of it is wired to Convex yet, and nothing is
published.

This is the kind of project that needs two people in the same room, and my friend
runs a busy kitchen — we simply haven't found the time to sit down, swap in her
real cakes, prices, and story, and take it live. It's paused, not abandoned. When
we get a window, the path forward is real content in, Convex wired up, the Academy
built for real, and then ship it.

Built with [Claude Code](https://claude.com/claude-code).
