# AfterHours Revenue — Build, GitHub & Deploy Guide

Read this after the README. It covers the part the prototype only *mocks*: the system that actually answers real phone calls.

---

## 0. The honest reality check (read first)

You have **two products**, and they have wildly different difficulty:

| Part | What it is | Difficulty | Time to live |
|---|---|---|---|
| **A. Marketing site** | The landing page (hero, ROI calc, pricing, audit form) | Easy | A few days |
| **B. The product** | Actually answering calls, AI voice, SMS text-back, booking, dashboard, reports | Hard — real backend + telephony + AI | Weeks to months |

**Strongest recommendation: don't build B first.** Sell the *productized service* manually (the way the brief frames it), wire the moving parts together with existing tools, and only build custom software once you have paying customers. The design supports both — Part B's dashboard/reports can start as something you fill in by hand for each client.

There are two viable technical paths. Pick based on whether you're validating or scaling.

---

## PATH 1 — Validate fast (recommended to start)

Goal: get customers and revenue before writing a real backend.

**Marketing site (build this for real):**
- Stack: **Next.js + Tailwind** (or plain Astro/HTML if you prefer). Recreate the landing page from the prototype.
- The "Free Missed Revenue Audit" form just needs to **capture a lead** (name, phone, industry) into a spreadsheet/CRM and notify you. That's it.
- Deploy to **Vercel** or **Netlify** — both free to start, connect to GitHub, auto-deploy on push.

**The actual "product," assembled from off-the-shelf tools (no custom backend yet):**
- **Phone number + call forwarding + AI/voicemail**: a service like a hosted AI receptionist or an answering service, OR a call-flow tool. The business forwards their after-hours line to a number you control.
- **Missed-call text-back & SMS**: an SMS platform (e.g. Twilio, or an all-in-one like a GoHighLevel-type CRM) that auto-texts on a missed call.
- **Booking**: Calendly / Cal.com / Google Calendar link inserted into the text/voice flow.
- **Escalation**: SMS/call to the owner triggered on emergency keywords.
- **Dashboard + weekly report**: you fill the design's dashboard/report by hand (or with a Google Data Studio / Airtable view) each week. Customers don't care if it's automated yet — they care about the dollar figure.

This is the "done-for-you service" the brief describes. It can earn money in **week one** and proves demand before you spend on engineering.

---

## PATH 2 — Build the real SaaS (once validated)

Goal: a self-serve platform. Only do this after Path 1 has paying customers.

### Recommended architecture
```
┌─────────────────────────────────────────────────────────────┐
│  FRONTEND  — Next.js (React) + Tailwind                      │
│  Marketing site (public) + Product app (auth-gated)          │
│  Hosted on Vercel                                            │
└───────────────┬─────────────────────────────────────────────┘
                │ HTTPS / API
┌───────────────▼─────────────────────────────────────────────┐
│  BACKEND  — Next.js API routes or a Node service            │
│  Auth · business/lead/appointment data · report generation  │
└───┬───────────────┬──────────────────┬──────────────────────┘
    │               │                  │
┌───▼───┐     ┌─────▼──────┐     ┌─────▼───────┐
│ DB    │     │ TELEPHONY  │     │ AI LAYER    │
│Postgres│    │ Twilio /   │     │ Voice agent │
│(Supabase)│  │ Telnyx /   │     │ + LLM for   │
│       │     │ Vapi/Retell│     │ qualifying  │
└───────┘     └────────────┘     └─────────────┘
```

### Concrete stack
- **Frontend + API**: Next.js (App Router) + TypeScript + Tailwind. Recreate the 7 screens from the prototype.
- **Database + Auth**: **Supabase** (Postgres + auth + storage) — fastest path. Tables: `businesses`, `users`, `phone_numbers`, `calls`, `leads`, `appointments`, `escalations`, `reports`, `settings`.
- **Telephony (phone numbers, call handling, SMS)**: **Twilio** or **Telnyx**. They give you programmable numbers, missed-call webhooks, and SMS.
- **AI voice answering**: don't build voice infra from scratch. Use a **voice-AI platform** (e.g. Vapi, Retell, or Bland) that handles speech-to-text, the LLM conversation, and text-to-speech, and hands you a transcript + structured data via webhook. Feed it the per-business script from onboarding.
- **AI qualification/summaries**: an LLM (Claude/OpenAI) to turn the transcript into the structured fields shown in the Lead Detail screen (intent, urgency, summary, Q&A).
- **Booking**: Cal.com (open-source, self-hostable) or Google Calendar API.
- **Background jobs** (follow-ups, weekly report generation): a queue/cron — Supabase scheduled functions, Inngest, or a simple cron on the host.
- **Payments/billing**: **Stripe** (subscriptions for the 3 tiers + one-time setup fee).
- **Notifications to owner**: Twilio SMS / voice for escalation.

### The core data flow (what "answering a missed call" actually means)
1. Customer calls the business's published number after hours.
2. Call is forwarded to your Twilio/Telnyx number → webhook fires.
3. Webhook routes to the voice-AI platform with that business's script + rules.
4. AI greets, qualifies, detects emergency keywords. If urgent → trigger escalation (call/SMS the owner).
5. AI offers booking from the business's calendar availability → creates appointment (or appointment *request* if owner approval is on).
6. On hangup: store call + transcript; LLM generates summary/qualification → write a `lead` row.
7. If it was a *missed* call (no answer) → fire instant SMS text-back; schedule follow-ups.
8. Nightly/weekly cron aggregates → `report` row → email to owner Monday morning.

Each step maps to a screen in the prototype, so the UI is already specced.

---

## GitHub — getting it on your account

1. **Create a GitHub account** (if you don't have one) at github.com.
2. **Install Git** locally and set up a project:
   ```bash
   npx create-next-app@latest afterhours-revenue   # scaffolds the app
   cd afterhours-revenue
   git init
   git add .
   git commit -m "Initial commit: AfterHours Revenue"
   ```
3. **Create a new empty repo** on GitHub (call it `afterhours-revenue`). **Make it private.**
4. **Push it:**
   ```bash
   git remote add origin https://github.com/<your-username>/afterhours-revenue.git
   git branch -M main
   git push -u origin main
   ```
5. **Put this handoff folder in the repo** (e.g. in `/design/`) so the design reference lives alongside the code.
6. **Never commit secrets.** Add a `.gitignore` (Next.js includes one) and keep API keys in `.env.local` (ignored) — set the real values in your host's dashboard.

### Easiest route if you're not a developer
Open this repo with **Claude Code** (or hire a developer) and point it at this handoff folder. The README + this file together are a complete brief: "Recreate the 7 screens in `AfterHours Revenue.dc.html` as a Next.js app using the stack in BUILD_AND_DEPLOY.md." Start with the **landing page only** — ship that, then add the app.

---

## Deploying for customers

### Marketing site (do this first — days, not weeks)
1. Push the Next.js site to GitHub.
2. Go to **Vercel** → "Import Project" → pick your repo → Deploy. Auto-deploys on every push.
3. **Custom domain**: buy a domain (Namecheap/Cloudflare), add it in Vercel's domain settings, update DNS. HTTPS is automatic.
4. Connect the audit form to capture leads (Supabase, Airtable, or a form service) + email/SMS yourself on submit.

### Product app (after validation)
1. Same Vercel deploy; the app lives behind login (Supabase Auth).
2. Provision Twilio/Telnyx numbers; set webhooks to your deployed API URL.
3. Connect the voice-AI platform; store per-business scripts from onboarding.
4. Add Stripe for the 3 subscription tiers + setup fee.
5. **Per-customer onboarding** = the wizard in the prototype: collect business profile, values, capture/booking/escalation rules, generate script, run the launch checklist (forwarding connected, SMS active, calendar connected, test call passed).

### Rough monthly cost to run (ballpark, scales with usage)
- Vercel: $0–20 · Supabase: $0–25 · Domain: ~$1/mo · Twilio number+usage: ~$1/number + per-minute/SMS · Voice-AI platform: per-minute (varies) · Stripe: % per charge. Budget the **telephony + voice-AI per-minute** as your main variable cost — price your tiers to stay well above it.

---

## Suggested build order (MVP → later)

**Build first (MVP):**
1. Landing page + audit lead capture.
2. Missed-call **text-back** (highest ROI, simplest) + lead inbox.
3. Owner alerts/escalation.
4. Manual-ish weekly report.

**Build next:**
5. AI voice answering + transcript/summary.
6. Booking integration (Cal.com / Google Calendar).
7. Automated follow-up sequences.
8. Self-serve onboarding wizard + Stripe billing.

**Wait until later:**
- Multi-user/teams, role permissions.
- Deep CRM integrations (ServiceTitan, Jobber, Housecall Pro).
- Human/VA fallback staffing.
- Advanced analytics, A/B'd scripts, multi-location.

---

## Risks & warnings
- **Telephony/voice-AI is the hard, expensive part** — validate demand before building it.
- **Compliance**: call recording consent and SMS (A2P 10DLC registration with carriers) have legal requirements per state. Handle before going live.
- **Reliability is the product**: an AI that mishandles an emergency is worse than voicemail. Keep the human-escalation fallback and conservative emergency-keyword routing from day one.
- **Keep the "estimate, not a guarantee" language** on every revenue figure (it's already in the design) to avoid implying guaranteed income.
