/** Landing-page content (from design/AfterHours Revenue.dc.html). */

export const withoutSteps: string[] = [
  "Customer calls after hours — your business is closed or busy.",
  "The call rings out and drops to voicemail.",
  "Most callers hang up. They don’t leave a message.",
  "They call the next company on the list instead.",
  "You never even know that lead existed.",
];

export const withSteps: string[] = [
  "The call is answered or texted back within seconds.",
  "We capture the name, number, and what they need.",
  "Urgent jobs get escalated straight to your phone.",
  "The appointment gets booked or requested for approval.",
  "You see every lead, every dollar, every Monday.",
];

export type HowStep = { n: string; title: string; desc: string };
export const howSteps: HowStep[] = [
  { n: "1", title: "We audit your path", desc: "We call after hours and find exactly where customers drop off today." },
  { n: "2", title: "We install capture", desc: "Call answering, text-back, booking and escalation — configured for your business." },
  { n: "3", title: "Leads get answered", desc: "Calls and texts are handled automatically, around the clock, with your rules." },
  { n: "4", title: "You get results", desc: "Booked appointments, owner alerts, and a weekly revenue recovery report." },
];

export type Feature = { title: string; desc: string };
export const features: Feature[] = [
  { title: "24/7 missed-call response", desc: "Every call after hours gets handled, never ignored." },
  { title: "AI voice answering", desc: "A natural-sounding answer that captures the details." },
  { title: "Instant SMS text-back", desc: "Missed calls get a text within seconds, not hours." },
  { title: "Appointment booking", desc: "Books or requests visits inside your real availability." },
  { title: "Lead qualification", desc: "Asks the right questions so you know the job before you call." },
  { title: "Urgent lead escalation", desc: "Emergencies route straight to the owner’s phone." },
  { title: "Call summaries & transcripts", desc: "Every conversation saved, summarized, and searchable." },
  { title: "No-show follow-up", desc: "Automatic nudges when a customer hasn’t booked yet." },
  { title: "Weekly recovery reports", desc: "A clear dollar figure for what was recovered." },
  { title: "Human fallback option", desc: "Escalate to a real person or VA when it matters." },
  { title: "CRM & calendar sync", desc: "Works with Google Calendar and your existing tools." },
];

export type Industry = { name: string; value: string; why: string };
export const industries: Industry[] = [
  { name: "HVAC & Plumbing", value: "$300–$1,200", why: "A no-heat or water-leak call at midnight is an emergency job — and the first company to answer almost always wins it." },
  { name: "Med Spas", value: "$200–$900", why: "High-intent bookings come in after work hours. A missed call is a high-value treatment booked somewhere else." },
  { name: "Dog Grooming", value: "$60–$150", why: "Owners book in the evening. Miss the call and they scroll to the next groomer with an open slot." },
  { name: "Barber Shops & Salons", value: "$40–$120 / chair", why: "Every empty chair is lost revenue. Multiply missed calls across stylists and it adds up fast." },
  { name: "Auto Repair", value: "$150–$1,500", why: "A breakdown is urgent. Drivers call the first shop that picks up or texts back same day." },
  { name: "Roofing & Restoration", value: "$1,500–$15,000", why: "Storm and water-damage jobs are huge and time-sensitive. One missed call can be a five-figure loss." },
];

export type Tier = {
  name: string;
  price: string;
  tagline: string;
  popular: boolean;
  features: string[];
};
export const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$299",
    tagline: "Stop the most obvious leak.",
    popular: false,
    features: ["Missed-call text-back", "Lead capture & inbox", "Weekly recovery report", "Basic setup & scripts"],
  },
  {
    name: "Growth",
    price: "$499",
    tagline: "Answer, qualify, and book — automatically.",
    popular: true,
    features: ["Everything in Starter", "AI call answering", "Appointment requests", "Owner alerts", "Follow-up automation", "Monthly optimization"],
  },
  {
    name: "Premium",
    price: "$799+",
    tagline: "Full booking, routing, and human fallback.",
    popular: false,
    features: ["Everything in Growth", "Full booking integration", "Urgent call routing", "Custom scripts", "Human / VA escalation", "Advanced reporting"],
  },
];

export const auditPromise: string[] = [
  "We call your business after hours, like a real customer.",
  "We test voicemail, text-back, booking, and follow-up.",
  "We show exactly where customers are dropping off.",
  "We estimate the revenue leaking out every month.",
  "We show what the system would recover for you.",
];

export const trust: string[] = [
  "The owner gets notified instantly on urgent jobs.",
  "The AI escalates to a human when it’s unsure.",
  "Every call summary and transcript is saved.",
  "Booking rules are set and controlled by you.",
  "Emergency calls can route straight to your phone.",
  "Weekly reports show exactly what happened. No black box.",
];
