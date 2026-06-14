import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { industries } from "@/lib/data/landing";

export function Industries() {
  return (
    <section className="bg-paper py-[88px]">
      <Container>
        <div className="mb-11 max-w-[640px]">
          <MonoLabel className="mb-3 text-xs tracking-[0.08em] text-amber">WHO IT&rsquo;S FOR</MonoLabel>
          <h2 className="m-0 font-display text-[40px] font-extrabold leading-[1.08] tracking-[-0.025em]">
            A missed call costs the most where one job is worth the most.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div key={ind.name} className="rounded-[4px] border border-line bg-white p-6">
              <div className="mb-3 flex items-baseline justify-between">
                <div className="font-display text-[18px] font-bold">{ind.name}</div>
                <MonoLabel className="text-xs font-semibold tracking-normal text-emerald-deep">{ind.value}</MonoLabel>
              </div>
              <div className="text-[14.5px] leading-[1.5] text-muted">{ind.why}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
