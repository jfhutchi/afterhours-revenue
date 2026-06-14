import { MonoLabel } from "@/components/ui/MonoLabel";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { reportStats, sources, recommendations } from "@/lib/data/report";

export default function WeeklyReportPage() {
  return (
    <div className="mx-auto w-full max-w-[760px] px-6 pb-16 pt-9">
      <div
        className="overflow-hidden rounded-[4px] border border-line bg-white"
        style={{ boxShadow: "0 30px 60px -30px rgba(16,24,40,.2)" }}
      >
        {/* header */}
        <div className="bg-ink p-8 text-white">
          <MonoLabel className="mb-4 text-[11px] tracking-[0.06em] text-[#7E93A3]">
            WEEKLY REVENUE RECOVERY REPORT · MON JUN 9
          </MonoLabel>
          <div className="font-display text-[26px] font-extrabold leading-[1.2] tracking-[-0.02em]">
            Your system recovered an estimated <span className="text-[#5FD3A4]">$8,750</span> this week.
          </div>
          <div className="mt-3 text-[14.5px] text-[#B6C4D0]">
            Hudson Valley HVAC Co. · 11 appointment opportunities captured
          </div>
        </div>

        {/* body */}
        <div className="p-8">
          <div className="mb-6 rounded-[4px] bg-gradient-to-br from-emerald to-emerald-deep p-[22px] text-white">
            <div className="text-[15px] leading-[1.55]">
              Your system captured <b>11 appointment opportunities</b> this week. Based on your average job value of{" "}
              <b>$795</b>, estimated recovered revenue was <b>$8,745</b>.
            </div>
          </div>

          <div className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {reportStats.map((r) => (
              <div key={r.label} className="rounded-[4px] border border-line-2 bg-surface p-4">
                <div className="font-display text-[28px] font-extrabold" style={{ color: r.color }}>
                  {r.value}
                </div>
                <div className="text-[13px] text-muted">{r.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-3.5 font-display text-[17px] font-bold">Top lead sources</div>
          <div className="mb-7 flex flex-col gap-3">
            {sources.map((s) => (
              <div key={s.name}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="font-semibold">{s.name}</span>
                  <span className="text-muted">{s.count} leads</span>
                </div>
                <div className="h-[9px] overflow-hidden rounded-full bg-surface-2">
                  <div className="h-full rounded-full bg-emerald" style={{ width: s.pct }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mb-3.5 font-display text-[17px] font-bold">Recommended improvements</div>
          <div className="mb-6 flex flex-col gap-2.5">
            {recommendations.map((rec) => (
              <div key={rec} className="flex gap-[11px] rounded-[3px] border border-[#F0E4D2] bg-amber-tint-2 p-3.5">
                <span className="font-bold text-amber">→</span>
                <span className="text-[14.5px] text-body">{rec}</span>
              </div>
            ))}
          </div>

          <Disclaimer dashed>
            Estimated recovered revenue is calculated from booked and recovered opportunities multiplied by your stated
            average customer value of $795. These are estimates of potential value, not a guarantee of collected revenue
            or completed jobs.
          </Disclaimer>
        </div>
      </div>
    </div>
  );
}
