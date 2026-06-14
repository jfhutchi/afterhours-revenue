/** Onboarding wizard content (from design/AfterHours Revenue.dc.html). */

export type Field = { label: string; value: string; wide?: boolean };
export type Toggle = { label: string; on: boolean };

export type OnboardStep = {
  title: string;
  desc: string;
  fields?: Field[];
  toggles?: Toggle[];
  showScript?: boolean;
  showChecklist?: boolean;
};

export const stepTitles: string[] = [
  "Business Profile",
  "Customer Value",
  "Capture Rules",
  "Booking Rules",
  "Escalation",
  "Script Preview",
  "Launch Checklist",
];

export const stepData: OnboardStep[] = [
  {
    title: "Business profile",
    desc: "Tell us who you are and when you’re open so we know when to step in.",
    fields: [
      { label: "Business name", value: "Hudson Valley HVAC Co." },
      { label: "Industry", value: "HVAC / Plumbing" },
      { label: "Service area", value: "Dutchess & Ulster County, NY" },
      { label: "Business hours", value: "Mon–Fri, 8 AM – 6 PM" },
      { label: "Emergency availability", value: "24/7 for water leaks & no-heat", wide: true },
    ],
  },
  {
    title: "Customer value",
    desc: "These numbers power your revenue recovery estimates. Be realistic.",
    fields: [
      { label: "Average customer value", value: "$350" },
      { label: "Average emergency job value", value: "$795" },
      { label: "Lifetime value (if known)", value: "$2,400" },
      { label: "Average close rate", value: "55%" },
    ],
  },
  {
    title: "Capture rules",
    desc: "Decide how aggressively the system should catch and respond to leads.",
    toggles: [
      { label: "Answer calls after hours", on: true },
      { label: "Instant text-back on missed calls", on: true },
      { label: "Escalate urgent issues to owner", on: true },
      { label: "Book directly (off = request approval first)", on: false },
    ],
  },
  {
    title: "Booking rules",
    desc: "Set the guardrails so the system only books what you can actually serve.",
    fields: [
      { label: "Calendar", value: "Google Calendar — connected" },
      { label: "Appointment windows", value: "8–10 AM, 12–2 PM, 3–5 PM" },
      { label: "Buffer time", value: "30 min between jobs" },
      { label: "Services offered", value: "Repair, install, tune-up, duct cleaning" },
      { label: "Service-area restrictions", value: "Within 25 miles of Poughkeepsie", wide: true },
    ],
  },
  {
    title: "Escalation",
    desc: "When something is urgent, who do we reach and how?",
    fields: [
      { label: "Owner phone", value: "(845) 555-0100" },
      { label: "Backup contact", value: "Dispatch — (845) 555-0105" },
      { label: "Emergency keywords", value: "leak, no heat, gas, flooding, burst" },
      { label: "When to call vs text", value: "Call on Critical, text on High" },
    ],
  },
  {
    title: "Script preview",
    desc: "Here’s the greeting and text-back we generated from your business. Edit anything.",
    showScript: true,
  },
  {
    title: "Launch checklist",
    desc: "A few final connections and your recovery system goes live.",
    showChecklist: true,
  },
];

export type ChecklistItem = { label: string; done: boolean };
export const launchChecklist: ChecklistItem[] = [
  { label: "Phone forwarding connected", done: true },
  { label: "SMS number active", done: true },
  { label: "Google Calendar connected", done: true },
  { label: "Business rules reviewed", done: true },
  { label: "Test call completed", done: false },
  { label: "Weekly report enabled", done: false },
];

export const scriptGreeting =
  "Thanks for calling Hudson Valley HVAC — we’re closed right now, but I can still help. Is this an emergency like no heat or a water leak, or would you like to book a visit? I can get you on the schedule tonight.";
export const scriptTextBack =
  "Hi, this is Hudson Valley HVAC — sorry we missed your call! What’s going on with your heating or cooling? Reply here and we’ll get you scheduled.";
