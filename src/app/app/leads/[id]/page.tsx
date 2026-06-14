import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { CallWaveform } from "@/components/app/CallWaveform";
import { FollowUpTimeline } from "@/components/app/FollowUpTimeline";
import { getLead, leads, urgencyColor, statusStyle } from "@/lib/data/leads";
import { money } from "@/lib/format";

export function generateStaticParams() {
  return leads.map((l) => ({ id: String(l.id) }));
}

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lead = getLead(Number(id));
  if (!lead) notFound();

  const status = statusStyle[lead.status];

  return (
    <div className="mx-auto w-full max-w-[1080px] px-6 pb-16 pt-7">
      <Link href="/app/leads" className="mb-[18px] inline-block text-sm font-semibold text-muted">
        ← Back to inbox
      </Link>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr]">
        {/* left */}
        <div className="flex flex-col gap-[18px]">
          {/* header */}
          <div className="rounded-[4px] border border-line bg-white p-[26px]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="m-0 mb-1 font-display text-[28px] font-extrabold tracking-[-0.02em]">{lead.name}</h1>
                <MonoLabel className="text-[13px] tracking-normal text-muted">
                  {lead.phone} · {lead.source} · {lead.time}
                </MonoLabel>
              </div>
              <span
                className="shrink-0 rounded-full px-[13px] py-1.5 text-[12.5px] font-bold"
                style={{ background: status.bg, color: status.color }}
              >
                {lead.status}
              </span>
            </div>
            <div className="mt-[18px] flex flex-wrap gap-2.5">
              <StatTile label="EST. VALUE" value={money(lead.value)} color="#0A7D57" />
              <StatTile label="URGENCY" value={lead.urgency} color={urgencyColor[lead.urgency]} />
              <StatTile label="INTENT" value={lead.intent} />
            </div>
          </div>

          <CallWaveform />

          {/* summary + qualification */}
          <div className="rounded-[4px] border border-line bg-white p-[26px]">
            <div className="mb-3 font-display text-[17px] font-bold">Summary</div>
            <p className="m-0 mb-5 rounded-[0_3px_3px_0] border-l-[3px] border-emerald bg-surface px-4 py-3.5 text-[15.5px] leading-[1.6] text-body">
              {lead.summary}
            </p>
            <div className="mb-3 font-display text-[17px] font-bold">AI qualification</div>
            <div className="flex flex-col gap-2.5">
              {lead.qa.map((q) => (
                <div key={q.q} className="flex justify-between gap-4 border-b border-[#F2EFE7] py-[11px]">
                  <span className="text-sm text-muted">{q.q}</span>
                  <span className="text-right text-sm font-semibold">{q.a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col gap-[18px]">
          <div className="rounded-[4px] border border-line bg-white p-[22px]">
            <div className="mb-3.5 font-display text-base font-bold">Next action</div>
            <button
              type="button"
              className="mb-2.5 w-full cursor-pointer rounded-[3px] bg-emerald p-3.5 text-[15px] font-bold text-white"
            >
              Confirm appointment →
            </button>
            <div className="grid grid-cols-2 gap-2">
              <ActionButton>Call customer</ActionButton>
              <ActionButton>Send text</ActionButton>
              <ActionButton>Mark booked</ActionButton>
              <button
                type="button"
                className="cursor-pointer rounded-[3px] border border-[#F0DADB] bg-danger-tint p-[11px] text-[13.5px] font-semibold text-danger"
              >
                Escalate
              </button>
            </div>
          </div>

          <FollowUpTimeline timeline={lead.timeline} />

          <div className="rounded-[4px] border border-[#F0E4D2] bg-amber-tint-2 p-[22px]">
            <div className="mb-2.5 font-display text-base font-bold">Owner notes</div>
            <div className="text-sm italic leading-[1.5] text-muted">
              &ldquo;Repeat customer from 2023 — replaced her condenser. Priority booking.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatTile({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="rounded-[3px] border border-line-2 bg-surface px-3.5 py-2.5">
      <MonoLabel className="text-[10px] tracking-[0.05em] text-faint">{label}</MonoLabel>
      <div className="font-display text-[19px] font-extrabold" style={{ color }}>
        {value}
      </div>
    </div>
  );
}

function ActionButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="cursor-pointer rounded-[3px] border border-line-3 bg-paper p-[11px] text-[13.5px] font-semibold"
    >
      {children}
    </button>
  );
}
