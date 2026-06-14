# AfterHours Revenue

After-hours revenue-recovery system for local service businesses (HVAC, plumbing, roofing, med spas, auto repair, salons, etc.). It answers missed calls, texts customers back instantly, qualifies and books the job, escalates emergencies to the owner, and produces a weekly "revenue recovered" report.

This repo is the **Next.js front-end implementation** of the design handoff in [`design/`](design/). All 7 product screens are recreated pixel-faithfully from the prototype, wired with real routing, working interactive pieces, and seeded data.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** — design tokens defined with `@theme` in [`src/app/globals.css`](src/app/globals.css)
- **Fonts** via `next/font/google`: Schibsted Grotesk (display), Hanken Grotesk (body), IBM Plex Mono (labels)
- No database yet — product data is typed mock data in [`src/lib/data/`](src/lib/data); the audit form persists leads to a gitignored JSON file via a route handler.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build (type-check + lint + compile)
npm run start        # serve the production build
npm run lint         # eslint
```

## Routes / screens

| Route | Screen |
|---|---|
| `/` | Marketing landing page (hero, ROI calculator, pricing, audit form) |
| `/app` | Dashboard — recovered revenue, recovery-score gauge, trend, recent leads |
| `/app/leads` | Lead inbox — filter chips + table |
| `/app/leads/[id]` | Lead detail — summary, AI qualification, call recording, timeline |
| `/app/report` | Weekly revenue-recovery report (email-style) |
| `/onboarding` | 7-step setup wizard |
| `/audit/[id]` | Missed Revenue Audit report (lead magnet; sample at `/audit/sample`) |
| `POST /api/audit` | Captures a "Free Missed Revenue Audit" lead |

## Project structure

```
design/                  Original design handoff (prototype HTML + README + BUILD_AND_DEPLOY)
src/
  app/                   Routes (see table above) + globals.css + api/audit
  components/
    marketing/           Landing-page sections
    app/                 Dashboard / leads / report building blocks
    ui/                  Shared primitives (Logo, MonoLabel, Disclaimer, Container)
  lib/
    format.ts            Money formatter
    data/                Typed mock content for every screen
```

## What's mocked (and what's next)

This is **Part A + the product UI** from [`design/BUILD_AND_DEPLOY.md`](design/BUILD_AND_DEPLOY.md). The hard, paid **Part B** is intentionally **not** built here and slots in behind the existing UI/data shape later:

- Live telephony + SMS (Twilio / Telnyx)
- AI voice answering (Vapi / Retell / Bland)
- Database + auth (Supabase)
- Billing (Stripe) for the 3 tiers + setup fee
- Automated weekly-report cron

All revenue figures keep an **"estimate, not a guarantee"** disclaimer — required for legal safety; keep it in production.

## Deploy

> **You are on the `github-pages` branch** — a static-export variant of `master`. The
> app, screens, and flow are identical; the only difference is that the audit form has
> no server to post to (GitHub Pages is static-only). See below. The full-server version
> (with the live `/api/audit` route) lives on `master` and is meant for Vercel.

### GitHub Pages (this branch)

1. Push this branch to GitHub: `git push -u origin github-pages`.
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. The included workflow (`.github/workflows/deploy-pages.yml`) builds the static export
   (`next build` → `out/`) and publishes it. Your site lands at
   `https://<user>.github.io/<repo>/` (the workflow sets `basePath` from the repo name automatically).
4. **Audit form:** with no server, the form flows through to the sample audit but doesn't
   store the lead. To capture leads, create a free form backend (Formspree / Getform / Basin),
   then add a repo **Variable** named `FORM_ENDPOINT` (Settings → Secrets and variables →
   Actions → Variables) with its URL. The form will POST there. Everything else is unchanged.

### Vercel (the `master` branch)

Import the repo into **Vercel** (auto-detects Next.js, deploys on every push). This runs the
full app including the live audit API. Keep secrets in the host's dashboard — never commit them.
