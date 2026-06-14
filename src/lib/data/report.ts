/** Weekly report content (from design/AfterHours Revenue.dc.html). */

export type ReportStat = { value: string; label: string; color: string };
export const reportStats: ReportStat[] = [
  { value: "64", label: "Calls answered", color: "#0E1C2B" },
  { value: "18", label: "Leads captured", color: "#0E1C2B" },
  { value: "11", label: "Appointments booked", color: "#0A7D57" },
  { value: "4", label: "Urgent issues escalated", color: "#C9474E" },
  { value: "3", label: "Missed opportunities", color: "#D98A3D" },
  { value: "$8,750", label: "Estimated revenue recovered", color: "#0A7D57" },
];

export type Source = { name: string; count: number; pct: string };
export const sources: Source[] = [
  { name: "After-hours missed calls", count: 23, pct: "100%" },
  { name: "Website form", count: 9, pct: "39%" },
  { name: "SMS / text-in", count: 7, pct: "30%" },
];

export const recommendations: string[] = [
  "Add a second emergency contact — 1 urgent call waited 6 min for owner pickup.",
  "Enable weekend booking — 4 of this week’s leads came in Sat–Sun.",
  "Shorten follow-up delay to 1 hour for high-value furnace and heat-pump jobs.",
];
