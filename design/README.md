# Handoff: AfterHours Revenue — MVP

## Overview
**AfterHours Revenue** is an after-hours revenue-recovery system for local service businesses (HVAC, plumbing, roofing, med spas, auto repair, salons, etc.). It answers missed calls, texts customers back instantly, qualifies and books the job, escalates emergencies to the owner, and produces a weekly "revenue recovered" report.

This bundle contains:
- **`AfterHours Revenue.dc.html`** — the full clickable design prototype (marketing site + product app, 7 screens).
- **`BUILD_AND_DEPLOY.md`** — the production architecture, tech-stack recommendation, GitHub setup, and step-by-step deployment for real customers (telephony, AI voice, SMS, booking). **Read this second — it covers the parts the prototype only mocks.**

## About the Design Files
The HTML file is a **design reference**, not production code to ship directly. It is a single self-contained prototype written as a streaming component with inline styles. The task is to **recreate these designs in a real codebase** (recommended stack in `BUILD_AND_DEPLOY.md`) using that stack's conventions — not to deploy the HTML as-is. The marketing landing page *can* be lifted fairly directly; the product app screens are UI references that need to be wired to a real backend and database.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, and copy are intentional. Recreate the UI to match. Exact tokens are listed below.

## Screens / Views
All screens are reachable from the top navigator in the prototype. State is held in one component (`view`, `avg/recovered/cost`, `leadId`, `step`).

1. **Landing page** (`view: 'landing'`) — marketing site. Sections in order: sticky nav · hero (headline + live dashboard card + missed-call→text-back conversation) · Problem (without/with comparison) · **interactive ROI calculator** (3 sliders → net gain) · How It Works (4 steps) · Features (11) · Industry use cases (6 cards) · Pricing (3 tiers + setup-fee note) · Free Audit CTA (with form) · Trust/control (6 points) · phone mockup · footer.
2. **Dashboard** (`view: 'dashboard'`) — sample business "Hudson Valley HVAC Co." Hero metric ($8,750 recovered), 87% Revenue Recovery Score gauge, 5 metric cards, 6-week trend bar chart, recent-leads list.
3. **Lead inbox** (`view: 'leads'`) — filter chips + table (customer, time, source, intent, value, status). 8 sample rows. Click a row → detail.
4. **Lead detail** (`view: 'detail'`, keyed by `leadId`) — header w/ status, est. value / urgency / intent stat tiles, call-recording placeholder w/ waveform, AI summary, AI qualification Q&A, next-action buttons (Call / Text / Mark booked / Escalate), follow-up timeline, owner notes.
5. **Weekly report** (`view: 'report'`) — email-style report: headline $ figure, 6 stat tiles, top lead sources (bars), recommended improvements, estimate disclaimer.
6. **Onboarding wizard** (`view: 'onboard'`, 7 steps) — Business Profile · Customer Value · Capture Rules (toggles) · Booking Rules · Escalation · Script Preview · Launch Checklist. Left step rail + progress bar.
7. **Missed Revenue Audit report** (`view: 'audit'`) — sample for "Beacon Valley Plumbing": risk level High, est. monthly missed revenue $2,400–$7,500, what-we-tested table, recommended fix. This is the primary lead magnet.

## Interactions & Behavior
- **Top nav tabs** switch `view` and scroll to top. Active tab = navy pill.
- **ROI calculator**: three `<input type=range>` sliders (avg customer value $100–$2,000; recovered appts/mo 1–30; monthly cost $199–$999). Live compute: `recoveredRev = avg × recovered`; `net = recoveredRev − cost`. Right card shows net gain in green.
- **Lead rows / recent-leads** are clickable → open detail for that `leadId`. "Back to inbox" returns.
- **Onboarding**: clicking a step in the rail, or Back/Continue, sets `step` (1–7). Completed steps show a green check; current step highlighted. Step 7 button reads "Launch system →".
- CTAs (`Get a Free Missed Revenue Audit`, hero/audit-form buttons) route to the Audit view; audit's final CTA routes to Onboarding.
- All revenue figures display an **"estimate, not a guarantee"** disclaimer — keep this in production for legal safety.

## State Management
Single source of truth in the prototype's logic class:
- `view` — which screen is shown.
- `avg`, `recovered`, `cost` — ROI calculator inputs.
- `leadId` — selected lead for the detail view.
- `step` — onboarding step (1–7).

In production these become: client routing (`/`, `/app`, `/app/leads`, `/app/leads/:id`, `/app/report`, `/onboarding`, `/audit/:id`) + server data (leads, calls, appointments, reports) fetched per business.

## Design Tokens
**Colors**
- Paper / app background: `#F4F2EC`
- Card surface: `#FFFFFF`; subtle surface: `#F7F5F0`
- Ink (primary text / trust): `#0E1C2B`; secondary navy panel: `#122738` / `#15324A`
- Body text: `#44525E`; muted: `#6B7A88`; faint: `#8A97A3`
- **Emerald (recovered money / action)**: `#0E9F6E`, deep `#0A7D57`, tint bg `#E7F5EF`, mint text `#BFE9D6`
- **Amber (after-hours / urgency-secondary)**: `#D98A3D`, tint `#FBF1E3` / `#FBF6EE`
- **Red (loss / critical)**: `#C9474E`, tint `#FBE9E9`
- Borders: `#E9E5DC` / `#ECE7DD` / `#E4DFD4`

**Typography**
- Headlines/numbers: **Schibsted Grotesk** (700–900), tight letter-spacing (−.02 to −.03em)
- Body/UI: **Hanken Grotesk** (400–700)
- Data labels / meta / mono: **IBM Plex Mono** (400–600), letter-spacing ~.06em, uppercase

**Radius**: cards 16–22px; chips/buttons 10–12px; pills 999px.
**Shadows**: soft drop e.g. `0 30px 60px -30px rgba(16,24,40,.2)`; deeper hero `0 40px 80px -30px rgba(0,0,0,.5)`.

## Assets
No external images — logo is a CSS conic-gradient mark; "call recording" is a CSS waveform placeholder. In production, swap the recording placeholder for a real audio player and add the customer's logo upload.

## Files
- `AfterHours Revenue.dc.html` — the design prototype (open in a browser to click through all 7 screens).
- `BUILD_AND_DEPLOY.md` — production build, GitHub, and deployment guide.
