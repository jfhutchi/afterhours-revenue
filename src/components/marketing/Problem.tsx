import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { withoutSteps, withSteps } from "@/lib/data/landing";

export function Problem() {
  return (
    <section className="bg-paper py-[88px]">
      <Container>
        <div className="mb-11 max-w-[720px]">
          <MonoLabel className="mb-3 text-xs tracking-[0.08em] text-danger">THE LEAK</MonoLabel>
          <h2 className="m-0 mb-3.5 font-display text-[40px] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Voicemail is where local leads go to die.
          </h2>
          <p className="m-0 text-lg leading-[1.55] text-[#5A6B7B]">
            You don&rsquo;t lose customers because your service is bad. You lose them because no one answered fast enough — and you never even saw the lead.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* without */}
          <div className="rounded-[4px] border border-[#F0DADB] bg-white p-7">
            <MonoLabel className="mb-[18px] inline-block rounded-full bg-danger-tint px-3 py-[5px] text-[11px] tracking-[0.06em] text-danger">
              WITHOUT A SYSTEM
            </MonoLabel>
            {withoutSteps.map((s) => (
              <div key={s} className="flex gap-[13px] border-b border-paper py-[11px]">
                <span className="shrink-0 font-bold text-danger">✕</span>
                <span className="text-[15.5px] text-body">{s}</span>
              </div>
            ))}
          </div>
          {/* with */}
          <div className="rounded-[4px] bg-ink p-7 text-white">
            <MonoLabel
              className="mb-[18px] inline-block rounded-full px-3 py-[5px] text-[11px] tracking-[0.06em] text-mint"
              style={{ background: "rgba(14,159,110,.18)" }}
            >
              WITH AFTERHOURS REVENUE
            </MonoLabel>
            {withSteps.map((s) => (
              <div key={s} className="flex gap-[13px] border-b border-white/[0.08] py-[11px]">
                <span className="shrink-0 font-bold text-emerald">✓</span>
                <span className="text-[15.5px] text-[#CBD6DF]">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
