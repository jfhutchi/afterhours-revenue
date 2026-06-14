import Link from "next/link";
import { MonoLabel } from "@/components/ui/MonoLabel";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink to-navy-700 text-white">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute -right-20 -top-[120px] h-[460px] w-[460px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(14,159,110,.22), transparent 70%)" }}
      />
      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 px-6 pb-[84px] pt-[72px] lg:grid-cols-[1.05fr_0.95fr]">
        {/* left */}
        <div>
          <div className="mb-[22px] inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.07] px-[13px] py-1.5 text-[11.5px] tracking-[0.04em] text-mint">
            <span className="h-[7px] w-[7px] animate-ah-pulse rounded-full bg-emerald" />
            <MonoLabel className="tracking-[0.04em]">AFTER-HOURS REVENUE RECOVERY</MonoLabel>
          </div>
          <h1 className="m-0 mb-5 font-display text-[44px] font-bold leading-[1.02] tracking-[-0.01em] sm:text-[60px]">
            Recover the customers you&rsquo;re losing when no one answers.
          </h1>
          <p className="m-0 mb-[30px] max-w-[520px] text-[18.5px] leading-[1.55] text-[#B6C4D0]">
            We answer missed calls, text customers back instantly, book the appointment, and show you exactly how much revenue your follow-up recovered — every week.
          </p>
          <div className="mb-[22px] flex flex-wrap gap-3">
            <Link
              href="/audit/sample"
              className="rounded-[3px] bg-emerald px-6 py-[15px] text-[14px] font-bold uppercase tracking-[0.06em] text-white"
              style={{ boxShadow: "0 8px 24px -8px rgba(14,159,110,.6)" }}
            >
              Get a Free Missed Revenue Audit
            </Link>
            <Link
              href="/app"
              className="rounded-[3px] border border-white/[0.18] bg-white/[0.08] px-6 py-[15px] text-[14px] font-semibold uppercase tracking-[0.06em] text-white"
            >
              See How It Works →
            </Link>
          </div>
          <MonoLabel className="text-xs tracking-[0.02em] text-[#7E93A3]">
            No contracts · Installed for you · If one customer pays for it, the math is simple.
          </MonoLabel>
        </div>

        {/* right — live dashboard card */}
        <div className="animate-ah-rise rounded-[4px] bg-white p-6 text-ink" style={{ boxShadow: "0 40px 80px -30px rgba(0,0,0,.55)" }}>
          <div className="mb-[18px] flex items-center justify-between">
            <div>
              <MonoLabel className="text-[10.5px] tracking-[0.08em] text-faint">THIS WEEK · HUDSON VALLEY HVAC</MonoLabel>
              <div className="mt-[3px] font-display text-[17px] font-bold">Revenue Recovery</div>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-tint px-[11px] py-[5px] text-xs font-bold text-emerald-text">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
              Live
            </div>
          </div>
          <div className="mb-[14px] rounded-[4px] bg-gradient-to-br from-emerald to-emerald-deep p-5 text-white">
            <MonoLabel className="text-[11px] tracking-[0.06em] opacity-85">ESTIMATED REVENUE RECOVERED</MonoLabel>
            <div className="mt-1 font-display text-[42px] font-extrabold tracking-[-0.02em]">$6,850</div>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { v: "42", l: "Calls answered", c: undefined },
              { v: "17", l: "Missed calls recovered", c: "#0A7D57" },
              { v: "9", l: "Appointments booked", c: undefined },
              { v: "87%", l: "Recovery score", c: undefined },
            ].map((s) => (
              <div key={s.l} className="rounded-[4px] border border-line-2 bg-surface p-[13px]">
                <div className="font-display text-2xl font-extrabold" style={{ color: s.c }}>{s.v}</div>
                <div className="text-xs text-muted">{s.l}</div>
              </div>
            ))}
          </div>
          {/* text-back conversation */}
          <div className="mt-[14px] border-t border-dashed border-line-3 pt-[14px]">
            <MonoLabel className="mb-[9px] text-[10px] tracking-[0.07em] text-faint">10:42 PM · MISSED CALL → INSTANT TEXT-BACK</MonoLabel>
            <div className="flex flex-col gap-[7px]">
              <div className="max-w-[86%] self-start rounded-[14px_14px_14px_4px] bg-ink px-[13px] py-[9px] text-[13px] text-white">
                Hi, this is Hudson Valley HVAC — sorry we missed you! Is this about a heating or cooling issue? We can get you on the schedule tonight.
              </div>
              <div className="max-w-[86%] self-end rounded-[14px_14px_4px_14px] bg-emerald-tint px-[13px] py-[9px] text-[13px] font-semibold text-emerald-text">
                Yes! My AC stopped cooling. Earliest you have?
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
