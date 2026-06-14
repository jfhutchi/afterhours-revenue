/** Missed Revenue Audit content (from design/AfterHours Revenue.dc.html). */

export type AuditTest = { test: string; result: string; color: string };

export type AuditReport = {
  id: string;
  business: string;
  riskLevel: string;
  frictionScore: string;
  missedRevenue: string;
  tests: AuditTest[];
  recommendedFix: string;
};

const sampleTests: AuditTest[] = [
  { test: "Called after hours", result: "Yes", color: "#0A7D57" },
  { test: "Result", result: "Voicemail", color: "#C9474E" },
  { test: "Missed-call text-back", result: "None", color: "#C9474E" },
  { test: "Online booking available", result: "No", color: "#C9474E" },
  { test: "Emergency routing", result: "Not clear", color: "#D98A3D" },
  { test: "Follow-up speed", result: "No follow-up", color: "#C9474E" },
];

export const sampleAudit: AuditReport = {
  id: "sample",
  business: "Beacon Valley Plumbing",
  riskLevel: "High",
  frictionScore: "8.5 / 10",
  missedRevenue: "$2,400–$7,500",
  tests: sampleTests,
  recommendedFix:
    "Install after-hours answering, urgent-call escalation, and missed-call text-back immediately. Based on your test, capturing even 4 of these leads per month would more than cover the system.",
};

export function getAudit(id: string): AuditReport {
  // Only a sample audit exists today; future audits resolve by id from a store.
  return { ...sampleAudit, id };
}
