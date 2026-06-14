import { MonoLabel } from "@/components/ui/MonoLabel";

export function PhoneMockup() {
  return (
    <div className="flex justify-center">
      <div
        className="w-[290px] rounded-[40px] bg-ink p-3"
        style={{ boxShadow: "0 40px 80px -30px rgba(0,0,0,.5)" }}
      >
        <div className="overflow-hidden rounded-[30px] bg-paper">
          <div className="bg-ink px-[18px] pb-3.5 pt-4 text-white">
            <MonoLabel className="text-[9px] tracking-[0.08em] opacity-70">HUDSON VALLEY HVAC · MON</MonoLabel>
            <div className="mt-2 font-display text-[28px] font-extrabold">$8,750</div>
            <div className="text-xs text-mint">recovered this week</div>
          </div>
          <div className="flex flex-col gap-[9px] p-3.5">
            <div className="rounded-[3px] border border-[#F0DADB] bg-danger-tint p-3">
              <MonoLabel className="text-[9px] tracking-[0.06em] text-danger">⚠ URGENT · ESCALATED</MonoLabel>
              <div className="mt-[3px] text-sm font-bold">Diane P. — Water leak</div>
              <div className="text-xs text-muted">$1,200 · 10:31 PM</div>
            </div>
            <div className="rounded-[3px] border border-line bg-white p-3">
              <MonoLabel className="text-[9px] tracking-[0.06em] text-emerald-deep">✓ BOOKED</MonoLabel>
              <div className="mt-[3px] text-sm font-bold">Sarah M. — AC not cooling</div>
              <div className="text-xs text-muted">$450 · Tue 10:00 AM</div>
            </div>
            <div className="rounded-[3px] border border-line bg-white p-3">
              <MonoLabel className="text-[9px] tracking-[0.06em] text-amber">↻ FOLLOW-UP SENT</MonoLabel>
              <div className="mt-[3px] text-sm font-bold">Mike R. — Furnace issue</div>
              <div className="text-xs text-muted">$300 · 6:17 AM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
