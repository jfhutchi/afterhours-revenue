import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { getAudit } from "@/lib/data/audit";

export default async function AuditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const audit = getAudit(id);

  return (
    <div className="min-h-screen bg-paper">
      {/* minimal header */}
      <div className="border-b border-line-3 bg-paper/[0.86] backdrop-blur-md">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-3">
          <Logo href="/" />
          <Link href="/" className="text-[13.5px] font-semibold text-slate-soft">
            ← Back to site
          </Link>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[820px] px-6 pb-16 pt-9">
        <div
          className="overflow-hidden rounded-[4px] border border-line bg-white"
          style={{ boxShadow: "0 30px 60px -30px rgba(16,24,40,.2)" }}
        >
          {/* header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-ink to-navy-600 p-[34px] text-white">
            <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
            <div
              className="pointer-events-none absolute -right-[50px] -top-20 h-[280px] w-[280px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(201,71,78,.25), transparent 70%)" }}
            />
            <div className="relative">
              <MonoLabel className="mb-3.5 text-[11px] tracking-[0.06em] text-[#F0C79B]">
                MISSED REVENUE AUDIT · SAMPLE
              </MonoLabel>
              <div className="mb-1.5 font-display text-[28px] font-extrabold tracking-[-0.02em]">{audit.business}</div>
              <div className="text-[14.5px] text-[#B6C4D0]">
                We called after hours and tested the full customer path. Here&rsquo;s where money is leaking.
              </div>
            </div>
          </div>

          {/* body */}
          <div className="p-8">
            {/* risk banner */}
            <div className="mb-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <div className="rounded-[4px] border border-[#F0DADB] bg-danger-tint p-5">
                <MonoLabel className="text-[10.5px] tracking-[0.06em] text-danger">RISK LEVEL</MonoLabel>
                <div className="mt-1 font-display text-[30px] font-extrabold text-danger">{audit.riskLevel}</div>
                <div className="mt-1 text-[13px] text-[#99565A]">Customer friction score: {audit.frictionScore}</div>
              </div>
              <div className="rounded-[4px] bg-ink p-5 text-white">
                <MonoLabel className="text-[10.5px] tracking-[0.06em] text-[#F0C79B]">
                  EST. MONTHLY MISSED REVENUE
                </MonoLabel>
                <div className="mt-1 font-display text-[30px] font-extrabold">{audit.missedRevenue}</div>
                <div className="mt-1 text-[13px] text-[#B6C4D0]">Estimated range, based on local job values</div>
              </div>
            </div>

            {/* tests */}
            <div className="mb-3.5 font-display text-lg font-bold">What we tested</div>
            <div className="mb-7 overflow-hidden rounded-[4px] border border-line-2">
              {audit.tests.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-[#F2EFE7] px-[18px] py-[15px] last:border-b-0"
                >
                  <span className="text-[14.5px] text-body">{t.test}</span>
                  <span className="inline-flex items-center gap-[7px] text-[13.5px] font-bold" style={{ color: t.color }}>
                    <span className="h-2 w-2 rounded-full" style={{ background: t.color }} />
                    {t.result}
                  </span>
                </div>
              ))}
            </div>

            {/* recommended fix */}
            <div className="rounded-[4px] bg-gradient-to-br from-emerald to-emerald-deep p-6 text-white">
              <MonoLabel className="mb-2.5 text-[10.5px] tracking-[0.06em] opacity-85">RECOMMENDED FIX</MonoLabel>
              <div className="text-[16.5px] font-medium leading-[1.55]">{audit.recommendedFix}</div>
              <Link
                href="/onboarding"
                className="mt-[18px] inline-block rounded-[3px] bg-white px-[22px] py-3.5 text-[13px] font-bold uppercase tracking-[0.05em] text-emerald-deep"
              >
                Start recovering these leads →
              </Link>
            </div>

            <Disclaimer className="mt-4 leading-[1.55]">
              Missed revenue range is an estimate based on typical local job values and the gaps found during the audit.
              Actual results depend on call volume and your close rate.
            </Disclaimer>
          </div>
        </div>
      </div>
    </div>
  );
}
