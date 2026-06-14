"use client";

import { useState } from "react";
import Link from "next/link";
import { leads, urgencyColor, statusStyle, type Lead } from "@/lib/data/leads";
import { money } from "@/lib/format";
import { MonoLabel } from "@/components/ui/MonoLabel";

const filters: { label: string; test: (l: Lead) => boolean }[] = [
  { label: "All leads (8)", test: () => true },
  {
    label: "Needs attention (4)",
    test: (l) => ["Needs follow-up", "Escalated", "Waiting on customer", "Quote requested"].includes(l.status),
  },
  { label: "Booked (3)", test: (l) => ["Booked", "Completed"].includes(l.status) },
  { label: "Escalated (1)", test: (l) => l.status === "Escalated" },
  { label: "Follow-up (1)", test: (l) => l.status === "Needs follow-up" },
  { label: "Lost (1)", test: (l) => l.status === "Lost" },
];

const COLS = "grid-cols-[1.4fr_1fr_1fr_1.4fr_0.8fr_0.9fr]";

export function LeadsTable() {
  const [active, setActive] = useState(0);
  const visible = leads.filter(filters[active].test);

  return (
    <>
      {/* filter chips */}
      <div className="mb-4 flex flex-wrap gap-2">
        {filters.map((f, i) => {
          const on = i === active;
          return (
            <button
              key={f.label}
              type="button"
              onClick={() => setActive(i)}
              className={`cursor-pointer rounded-full border px-3.5 py-[7px] text-[13px] font-semibold ${
                on ? "border-ink bg-ink text-white" : "border-line-3 bg-white text-slate-soft"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* table */}
      <div className="overflow-x-auto rounded-[4px] border border-line bg-white">
        <div className="min-w-[760px]">
          <div className={`grid ${COLS} gap-3 border-b border-line bg-surface px-[22px] py-3.5`}>
            {["CUSTOMER", "TIME", "SOURCE", "INTENT", "VALUE", "STATUS"].map((h) => (
              <MonoLabel key={h} className="text-[10.5px] tracking-[0.05em] text-faint">
                {h}
              </MonoLabel>
            ))}
          </div>
          {visible.map((l) => (
            <Link
              key={l.id}
              href={`/app/leads/${l.id}`}
              className={`grid ${COLS} items-center gap-3 border-b border-[#F2EFE7] px-[22px] py-4 last:border-b-0 hover:bg-surface/60`}
            >
              <div className="flex items-center gap-[11px]">
                <span className="h-[9px] w-[9px] shrink-0 rounded-full" style={{ background: urgencyColor[l.urgency] }} />
                <div>
                  <div className="text-[14.5px] font-bold">{l.name}</div>
                  <div className="text-[11.5px] text-faint">{l.urgency} urgency</div>
                </div>
              </div>
              <div className="text-[13.5px] text-body">{l.time}</div>
              <div className="text-[13px]">
                <span className="rounded-[2px] border border-line bg-paper px-[9px] py-[3px] font-mono text-[11px] text-body">
                  {l.source}
                </span>
              </div>
              <div className="text-[13.5px] text-body">{l.intent}</div>
              <div className="font-display text-[14.5px] font-bold">{money(l.value)}</div>
              <div>
                <span
                  className="whitespace-nowrap rounded-full px-2.5 py-1 text-[11.5px] font-bold"
                  style={{ background: statusStyle[l.status].bg, color: statusStyle[l.status].color }}
                >
                  {l.status}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
