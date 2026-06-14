import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { tiers } from "@/lib/data/landing";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-white py-[88px]">
      <Container>
        <div className="mx-auto mb-12 max-w-[640px] text-center">
          <MonoLabel className="mb-3 text-xs tracking-[0.08em] text-emerald-deep">EXAMPLE PACKAGES</MonoLabel>
          <h2 className="m-0 mb-3 font-display text-[40px] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Priced so one recovered customer covers it.
          </h2>
          <p className="m-0 text-base text-muted">
            Draft pricing shown as example packages. One-time setup: $500–$1,500 depending on integrations.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-[18px] md:grid-cols-3">
          {tiers.map((t) => {
            const popular = t.popular;
            return (
              <div
                key={t.name}
                className={
                  popular
                    ? "rounded-[4px] border border-ink bg-ink p-7 text-white md:-translate-y-2"
                    : "rounded-[4px] border border-line bg-white p-7"
                }
                style={popular ? { boxShadow: "0 30px 60px -28px rgba(14,28,43,.5)" } : undefined}
              >
                {popular && (
                  <MonoLabel className="mb-3.5 inline-block rounded-full bg-emerald px-3 py-[5px] text-[11px] tracking-[0.06em] text-white">
                    MOST POPULAR
                  </MonoLabel>
                )}
                <div className="font-display text-xl font-bold">{t.name}</div>
                <div className="mb-1 mt-3">
                  <span className="font-display text-[40px] font-extrabold tracking-[-0.02em]">{t.price}</span>
                  <span className="text-[15px] text-faint">/mo</span>
                </div>
                <div className={`mb-5 text-[13.5px] ${popular ? "text-[#CBD6DF]" : "text-muted"}`}>{t.tagline}</div>
                <button
                  type="button"
                  className={
                    popular
                      ? "w-full cursor-pointer rounded-[3px] bg-emerald p-[13px] text-[13px] font-bold uppercase tracking-[0.05em] text-white"
                      : "w-full cursor-pointer rounded-[3px] border border-line-3 bg-paper p-[13px] text-[13px] font-bold uppercase tracking-[0.05em] text-ink"
                  }
                >
                  Choose {t.name}
                </button>
                <div className="mt-[22px] flex flex-col gap-[11px]">
                  {t.features.map((ft) => (
                    <div key={ft} className="flex gap-2.5 text-[14.5px]">
                      <span className="font-bold text-emerald">✓</span>
                      <span className={popular ? "text-[#CBD6DF]" : "text-body"}>{ft}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
