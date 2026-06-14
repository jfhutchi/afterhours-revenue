/** Lead data + status/urgency styling (from design/AfterHours Revenue.dc.html). */

export type Urgency = "Critical" | "High" | "Medium" | "Low";

export type LeadStatus =
  | "Booked"
  | "Needs follow-up"
  | "Escalated"
  | "Lost"
  | "Waiting on customer"
  | "Completed"
  | "Quote requested";

export type QA = { q: string; a: string };
export type TimelineEntry = { event: string; time: string; color: string };

export type Lead = {
  id: number;
  name: string;
  phone: string;
  time: string;
  source: string;
  status: LeadStatus;
  intent: string;
  value: number;
  urgency: Urgency;
  summary: string;
  qa: QA[];
  timeline: TimelineEntry[];
};

export const urgencyColor: Record<Urgency, string> = {
  Critical: "#C9474E",
  High: "#D98A3D",
  Medium: "#C9A23D",
  Low: "#0E9F6E",
};

export const statusStyle: Record<LeadStatus, { bg: string; color: string }> = {
  Booked: { bg: "#E7F5EF", color: "#0A7D57" },
  "Needs follow-up": { bg: "#FBF1E3", color: "#B5731F" },
  Escalated: { bg: "#FBE9E9", color: "#C9474E" },
  Lost: { bg: "#F0EEE9", color: "#8A97A3" },
  "Waiting on customer": { bg: "#EAF0F6", color: "#3E6E9E" },
  Completed: { bg: "#E7F5EF", color: "#0A7D57" },
  "Quote requested": { bg: "#EAF0F6", color: "#3E6E9E" },
};

export const leads: Lead[] = [
  {
    id: 1,
    name: "Sarah M.",
    phone: "(845) 555-0142",
    time: "8:42 PM",
    source: "Missed Call",
    status: "Booked",
    intent: "AC not cooling",
    value: 450,
    urgency: "High",
    summary:
      "Sarah called after hours because her AC stopped cooling. She requested the earliest available appointment. The system offered Tuesday at 10:00 AM, confirmed her address, and sent the booking request to the owner.",
    qa: [
      { q: "Issue type", a: "AC not cooling" },
      { q: "Emergency?", a: "No — comfortable overnight" },
      { q: "Preferred time", a: "Earliest available" },
      { q: "Address confirmed", a: "Yes — 14 Maple Ave" },
    ],
    timeline: [
      { event: "Missed call detected", time: "8:42 PM", color: "#D98A3D" },
      { event: "AI answered & qualified", time: "8:42 PM", color: "#0E9F6E" },
      { event: "Tuesday 10:00 AM offered", time: "8:44 PM", color: "#0E9F6E" },
      { event: "Booking request sent to owner", time: "8:45 PM", color: "#0A7D57" },
    ],
  },
  {
    id: 2,
    name: "Mike R.",
    phone: "(845) 555-0188",
    time: "6:17 AM",
    source: "Website Form",
    status: "Needs follow-up",
    intent: "Furnace issue",
    value: 300,
    urgency: "Medium",
    summary:
      "Mike submitted the website form early morning about a furnace that won’t stay lit. The system sent an instant text and a follow-up two hours later. Awaiting his reply to confirm a visit window.",
    qa: [
      { q: "Issue type", a: "Furnace won’t stay lit" },
      { q: "Emergency?", a: "No — has space heaters" },
      { q: "Preferred time", a: "This week, mornings" },
      { q: "Follow-ups sent", a: "2" },
    ],
    timeline: [
      { event: "Website form received", time: "6:17 AM", color: "#0E9F6E" },
      { event: "Instant text sent", time: "6:17 AM", color: "#0E9F6E" },
      { event: "Follow-up #1 sent", time: "8:20 AM", color: "#D98A3D" },
      { event: "Awaiting customer reply", time: "now", color: "#C9A23D" },
    ],
  },
  {
    id: 3,
    name: "Diane P.",
    phone: "(845) 555-0119",
    time: "10:31 PM",
    source: "AI Voice",
    status: "Escalated",
    intent: "Water leak",
    value: 1200,
    urgency: "Critical",
    summary:
      "Diane called late at night about active water leaking near her water heater. The system flagged it as an emergency, escalated immediately to the owner’s phone, and texted Diane that someone would call within 15 minutes.",
    qa: [
      { q: "Issue type", a: "Active water leak" },
      { q: "Emergency?", a: "YES — water spreading" },
      { q: "Escalated to owner", a: "Yes — called at 10:32 PM" },
      { q: "Customer notified", a: "Yes" },
    ],
    timeline: [
      { event: "After-hours call answered", time: "10:31 PM", color: "#0E9F6E" },
      { event: "Emergency keyword detected", time: "10:31 PM", color: "#C9474E" },
      { event: "Owner phone called", time: "10:32 PM", color: "#C9474E" },
      { event: "Customer texted ETA", time: "10:33 PM", color: "#0A7D57" },
    ],
  },
  {
    id: 4,
    name: "Carlos G.",
    phone: "(845) 555-0173",
    time: "Sun 9:15 AM",
    source: "SMS",
    status: "Quote requested",
    intent: "Duct cleaning",
    value: 250,
    urgency: "Low",
    summary:
      "Carlos texted on Sunday asking about duct cleaning pricing. The system shared a starting range, asked about home size, and offered to book an estimate. Awaiting his preferred date.",
    qa: [
      { q: "Service", a: "Duct cleaning" },
      { q: "Home size", a: "4 bed / 2,400 sqft" },
      { q: "Quote shared", a: "Yes — from $250" },
      { q: "Next step", a: "Book estimate" },
    ],
    timeline: [
      { event: "SMS received", time: "Sun 9:15 AM", color: "#0E9F6E" },
      { event: "Pricing range shared", time: "Sun 9:16 AM", color: "#0E9F6E" },
      { event: "Estimate offered", time: "Sun 9:18 AM", color: "#D98A3D" },
    ],
  },
  {
    id: 5,
    name: "Tanya W.",
    phone: "(845) 555-0150",
    time: "11:48 PM",
    source: "Missed Call",
    status: "Booked",
    intent: "No heat upstairs",
    value: 520,
    urgency: "High",
    summary:
      "Tanya called near midnight about no heat upstairs. The system qualified the issue, confirmed it was not a full outage, and booked the first morning slot.",
    qa: [
      { q: "Issue type", a: "No heat upstairs" },
      { q: "Emergency?", a: "No — has heat downstairs" },
      { q: "Booked", a: "Mon 8:00 AM" },
      { q: "Address confirmed", a: "Yes" },
    ],
    timeline: [
      { event: "Missed call detected", time: "11:48 PM", color: "#D98A3D" },
      { event: "AI answered & booked", time: "11:50 PM", color: "#0A7D57" },
    ],
  },
  {
    id: 6,
    name: "Robert E.",
    phone: "(845) 555-0166",
    time: "7:03 AM",
    source: "AI Voice",
    status: "Waiting on customer",
    intent: "Thermostat replace",
    value: 180,
    urgency: "Low",
    summary:
      "Robert asked about replacing an old thermostat. The system gave options and is waiting on him to pick a model before scheduling.",
    qa: [
      { q: "Service", a: "Thermostat replacement" },
      { q: "Emergency?", a: "No" },
      { q: "Options shared", a: "Yes — 3 models" },
      { q: "Next step", a: "Customer to choose" },
    ],
    timeline: [
      { event: "Call answered", time: "7:03 AM", color: "#0E9F6E" },
      { event: "Options texted", time: "7:05 AM", color: "#D98A3D" },
    ],
  },
  {
    id: 7,
    name: "Priya N.",
    phone: "(845) 555-0134",
    time: "9:27 PM",
    source: "SMS",
    status: "Completed",
    intent: "AC tune-up",
    value: 145,
    urgency: "Low",
    summary: "Priya booked a seasonal AC tune-up via text. Visit completed and marked done.",
    qa: [
      { q: "Service", a: "AC tune-up" },
      { q: "Emergency?", a: "No" },
      { q: "Status", a: "Completed" },
      { q: "Rating", a: "5 stars" },
    ],
    timeline: [
      { event: "SMS received", time: "9:27 PM", color: "#0E9F6E" },
      { event: "Booked", time: "9:30 PM", color: "#0A7D57" },
      { event: "Visit completed", time: "Thu", color: "#0A7D57" },
    ],
  },
  {
    id: 8,
    name: "Frank D.",
    phone: "(845) 555-0101",
    time: "5:51 AM",
    source: "Missed Call",
    status: "Lost",
    intent: "Heat pump quote",
    value: 900,
    urgency: "Medium",
    summary:
      "Frank requested a heat pump quote but went with another company before the follow-up window closed. Logged as lost for learning.",
    qa: [
      { q: "Service", a: "Heat pump quote" },
      { q: "Emergency?", a: "No" },
      { q: "Outcome", a: "Chose competitor" },
      { q: "Reason", a: "Wanted same-day quote" },
    ],
    timeline: [
      { event: "Missed call detected", time: "5:51 AM", color: "#D98A3D" },
      { event: "Text-back sent", time: "5:51 AM", color: "#0E9F6E" },
      { event: "No reply — marked lost", time: "Wed", color: "#8A97A3" },
    ],
  },
];

export function getLead(id: number): Lead | undefined {
  return leads.find((l) => l.id === id);
}

export const filterChips: { label: string; active?: boolean }[] = [
  { label: "All leads (8)", active: true },
  { label: "Needs attention (4)" },
  { label: "Booked (3)" },
  { label: "Escalated (1)" },
  { label: "Follow-up (1)" },
  { label: "Lost (1)" },
];
