import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { howSteps } from "@/lib/data/landing";

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 bg-paper py-[88px]">
      <Container>
        <div className="mx-auto mb-12 max-w-[640px] text-center">
          <MonoLabel className="mb-3 text-xs tracking-[0.08em] text-emerald-deep">DONE FOR YOU</MonoLabel>
          <h2 className="m-0 font-display text-[40px] font-extrabold leading-[1.08] tracking-[-0.025em]">
            We install it. You get booked appointments.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {howSteps.map((h) => (
            <div key={h.n} className="rounded-[4px] border border-line bg-white p-6">
              <div className="mb-4 flex h-[34px] w-[34px] items-center justify-center rounded-[3px] bg-emerald font-display text-[15px] font-extrabold text-white">
                {h.n}
              </div>
              <div className="mb-[7px] font-display text-[17px] font-bold">{h.title}</div>
              <div className="text-[14.5px] leading-[1.5] text-muted">{h.desc}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
