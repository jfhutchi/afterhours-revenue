import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { RecoveryGauge } from "@/components/app/RecoveryGauge";
import { TrendChart } from "@/components/app/TrendChart";
import { RecentLeads } from "@/components/app/RecentLeads";
import { metrics, recoveryScore } from "@/lib/data/dashboard";

export default function DashboardPage() {
  return (
    <Container className="pb-16 pt-8">
      {/* header */}
      <div className="mb-[26px] flex flex-wrap items-end justify-between gap-3.5">
        <div className="min-w-[280px] flex-1">
          <MonoLabel className="text-xs tracking-[0.07em] text-faint">DASHBOARD · HUDSON VALLEY HVAC CO.</MonoLabel>
          <h1 className="mb-1 mt-1.5 font-display text-[32px] font-extrabold tracking-[-0.02em]">
            What did we recover this week?
          </h1>
          <div className="text-[14.5px] text-muted">Mon Jun 9 – Sun Jun 15 · Compared to last week</div>
        </div>
        <Link
          href="/app/report"
          className="rounded-[3px] bg-ink px-[18px] py-3 text-sm font-semibold text-white"
        >
          View weekly report →
        </Link>
      </div>

      {/* hero metric + score */}
      <div className="mb-[18px] grid grid-cols-1 gap-[18px] lg:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-col justify-between rounded-[4px] bg-gradient-to-br from-emerald to-emerald-deep p-[30px] text-white">
          <div>
            <MonoLabel className="text-[11.5px] tracking-[0.06em] opacity-85">ESTIMATED REVENUE RECOVERED</MonoLabel>
            <div className="my-1.5 font-display text-[58px] font-extrabold leading-none tracking-[-0.02em]">$8,750</div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.16] px-3 py-[5px] text-[13px] font-semibold">
              ↑ 22% vs last week
            </div>
          </div>
          <div className="mt-5 text-[12.5px] leading-[1.5] text-white/80">
            Based on 11 booked opportunities × your average job value of $795. Estimate only — not a guarantee.
          </div>
        </div>
        <RecoveryGauge score={recoveryScore} />
      </div>

      {/* metric cards */}
      <div className="mb-[18px] grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-[4px] border border-line bg-white p-[18px]">
            <div className="font-display text-[30px] font-extrabold tracking-[-0.02em]" style={{ color: m.color }}>
              {m.value}
            </div>
            <div className="mt-0.5 text-[13px] leading-[1.3] text-muted">{m.label}</div>
            <MonoLabel className="mt-2 text-[11px] tracking-normal text-emerald-deep">{m.delta}</MonoLabel>
          </div>
        ))}
      </div>

      {/* trend + recent */}
      <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-[1.2fr_1fr]">
        <TrendChart />
        <RecentLeads />
      </div>
    </Container>
  );
}
