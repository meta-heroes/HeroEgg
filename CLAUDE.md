# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> **Read `AGENTS.md` first.** This repo runs **Next.js 16 + React 19 + Tailwind v4** — APIs and conventions differ from older versions. Consult `node_modules/next/dist/docs/` before writing Next.js code.

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # production build
npm run lint    # ESLint (eslint-config-next)
```

There is no test suite. Validate changes with `npx tsc --noEmit` and `npm run lint`.

Requires `.env.local` (copy `.env.local.example`): `MICROCMS_SERVICE_DOMAIN` and `MICROCMS_API_KEY` are mandatory — `lib/microcms.ts` throws at import time without them, so the app won't build or run.

## Architecture

A marketing/LP site for "Hero Egg", a DX education facility. Single-language (Japanese). Deployed on Vercel.

### Pixel-perfect, fixed-width desktop layout
This is a Figma-derived design reproduced at **fixed desktop dimensions**, not a fluid responsive site:
- `app/layout.tsx` pins `viewport.width = "1440"`. Phones render at 1440px and scale the whole page down; desktop ignores the width hint. **Mobile is not a separate breakpoint layout** — it's the desktop layout shrunk.
- Section components use hardcoded arbitrary Tailwind values (`text-[24px]`, `h-[61px]`, absolute positioning with `left: "23.18%"`) to match Figma exactly. Match this idiom when editing sections; don't "fix" them into fluid layouts.
- `components/ui/ScaledStage.tsx` renders a Figma frame at its real px size and applies `transform: scale` to fit the container — used for sections that need proportional scaling without overflow. Prefer it over percentage-positioning for new absolutely-positioned stages.

### Brand color tokens
Colors are defined once in `app/globals.css` under `@theme` as `--egg-*` (blue/yellow/red/green/orange/dark/gray). Use the generated Tailwind utilities (`bg-egg-blue`, `text-egg-dark`, etc.) — never hardcode the hex values.

### Single sources of truth — `lib/constants.ts`
Shared data lives here, not duplicated across components: `LINE_URL` (every official-LINE button), `NAV_ITEMS` / `MAIN_NAV` (Header drawer + Footer both consume these), `EVENT_IMAGES`, community/service card data. When adding a nav link or changing the LINE URL, edit this file only. `MAIN_NAV` child anchors must point to real `id` anchors that exist on the target page (no broken links).

### Component organization
- `components/layout/` — `Header` (client; responsive drawer driven by `MAIN_NAV`) and `Footer`.
- `components/sections/` — one component per page section (e.g. `FirstViewSection`, `EventSection`, `ContactCTASection`). Pages are thin compositions: `app/page.tsx` imports and stacks ~13 section components in order.
- `components/ui/` — reusable primitives (`ScaledStage`, carousels, `Reveal`, `CounterAnimation`, `SectionTitle`).
- `hooks/` — `useIntersectionObserver` (scroll reveal/animation triggers), `useAutoSlide`, `useCountUp`.

### microCMS blog integration
The "News/お知らせ" content comes from microCMS, with a deliberate **server-only / client-safe split**:
- `lib/microcms.ts` — `import "server-only"`. Holds the API client and all fetchers (`getBlogs`, `getBlog`, `getAllBlogIds`, `getCategories`). Lists support category/full-text(`q`)/year filtering. All fetches use ISR (`next: { revalidate: 60 }`). `app/news/[id]` uses `generateStaticParams` via `getAllBlogIds`.
- `lib/blog-utils.ts` — no server-only import; safe for client components. Holds `BlogCardData`, `formatBlogDate` (→ `YYYY.MM.DD`), and `categoryTagClass` (maps category name → egg color). Use `toBlogCardData()` to convert a `Blog` into the lightweight card shape passed to top-page sections.

Category names are coupled to colors in `categoryTagClass` (e.g. "更新情報" → blue) — adding a microCMS category that needs its own color requires updating that switch.

### Contact form → email
`components/sections/ContactForm.tsx` (client) POSTs JSON to `app/api/contact/route.ts`, which validates server-side and sends via **nodemailer + SMTP** (env: `SMTP_HOST/PORT/SECURE/USER/PASS`, `FROM_EMAIL`, `FROM_NAME`, `CONTACT_TO`). Recipients default to the meta-heroes.io addresses in `route.ts` if `CONTACT_TO` is unset. The SMTP env vars must be configured in Vercel (Settings → Environment Variables) for production; without them the route returns a 500.
