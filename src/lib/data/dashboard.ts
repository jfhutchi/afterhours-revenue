/** Dashboard content (from design/AfterHours Revenue.dc.html). */

export type Metric = { value: string; label: string; delta: string; color: string };
export const metrics: Metric[] = [
  { value: "64", label: "Calls answered", delta: "↑ 9", color: "#0E1C2B" },
  { value: "23", label: "Missed calls recovered", delta: "↑ 6", color: "#0A7D57" },
  { value: "18", label: "New leads captured", delta: "↑ 4", color: "#0E1C2B" },
  { value: "11", label: "Appointments booked", delta: "↑ 3", color: "#0A7D57" },
  { value: "4", label: "Urgent calls escalated", delta: "→ same", color: "#C9474E" },
];

export type TrendPoint = { wk: string; label: string; v: number };
export const trendRaw: TrendPoint[] = [
  { wk: "May 5", label: "$4.1k", v: 4100 },
  { wk: "May 12", label: "$5.3k", v: 5300 },
  { wk: "May 19", label: "$4.8k", v: 4800 },
  { wk: "May 26", label: "$6.2k", v: 6200 },
  { wk: "Jun 2", label: "$7.2k", v: 7200 },
  { wk: "Jun 9", label: "$8.8k", v: 8750 },
];
export const trendMax = 9000;

/** Bars derived for rendering: height % + fill (last bar emphasised). */
export const trendBars = trendRaw.map((b, i) => ({
  ...b,
  h: Math.round((b.v / trendMax) * 100) + "%",
  fill: i === trendRaw.length - 1 ? "#0E9F6E" : "#CDE9DC",
}));

export const recoveryScore = 87; // percent
export const recoveredThisWeek = "$8,750";
