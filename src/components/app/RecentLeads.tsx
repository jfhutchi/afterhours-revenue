import Link from "next/link";
import { leads, urgencyColor, statusStyle } from "@/lib/data/leads";
import { money } from "@/lib/format";

export function RecentLeads() {
  const recent = leads.slice(0, 4);
  return (
    <div className="rounded-[4px] border border-line bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-display text-[17px] font-bold">Recent recovered leads</div>
        <Link href="/app/leads" className="text-[13px] font-semibold text-emerald-deep">
          View all →
        </Link>
      </div>
      <div className="flex flex-col">
        {recent.map((l) => (
          <Link
            key={l.id}
            href={`/app/leads/${l.id}`}
            className="flex items-center justify-between border-b border-[#F2EFE7] py-3 last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <span className="h-[9px] w-[9px] shrink-0 rounded-full" style={{ background: urgencyColor[l.urgency] }} />
              <div>
                <div className="text-[14.5px] font-bold">{l.name}</div>
                <div className="text-[12.5px] text-muted">
                  {l.intent} · {l.time}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-display text-[14.5px] font-bold">{money(l.value)}</div>
              <div className="text-[11px] font-semibold" style={{ color: statusStyle[l.status].color }}>
                {l.status}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
