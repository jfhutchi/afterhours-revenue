import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * Captures a "Free Missed Revenue Audit" lead.
 *
 * MVP behavior (per design/BUILD_AND_DEPLOY.md — Path 1): persist the lead so it
 * isn't lost and return success. In production this is where you'd also notify
 * yourself (email/SMS) and push into a CRM. Storage here is a gitignored JSON
 * file; swap for Supabase/Airtable when the backend lands.
 */

export const runtime = "nodejs";

type AuditLead = {
  businessName: string;
  phone: string;
  industry: string;
  receivedAt: string;
};

const STORE = path.join(process.cwd(), "data", "leads.local.json");

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

async function appendLead(lead: AuditLead): Promise<void> {
  await fs.mkdir(path.dirname(STORE), { recursive: true });
  let existing: AuditLead[] = [];
  try {
    const raw = await fs.readFile(STORE, "utf8");
    existing = JSON.parse(raw) as AuditLead[];
    if (!Array.isArray(existing)) existing = [];
  } catch {
    // file doesn't exist yet — start fresh
  }
  existing.push(lead);
  await fs.writeFile(STORE, JSON.stringify(existing, null, 2), "utf8");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { businessName, phone, industry } = (body ?? {}) as Record<string, unknown>;

  if (!isNonEmptyString(businessName) || !isNonEmptyString(phone) || !isNonEmptyString(industry)) {
    return NextResponse.json(
      { error: "Business name, phone, and industry are all required." },
      { status: 400 },
    );
  }

  const lead: AuditLead = {
    businessName: businessName.trim(),
    phone: phone.trim(),
    industry: industry.trim(),
    receivedAt: new Date().toISOString(),
  };

  try {
    await appendLead(lead);
  } catch (err) {
    console.error("Failed to persist audit lead:", err);
    return NextResponse.json({ error: "Could not save your request. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
