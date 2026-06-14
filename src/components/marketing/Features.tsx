import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { features } from "@/lib/data/landing";

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-white py-[88px]">
      <Container>
        <div className="mb-11 max-w-[640px]">
          <MonoLabel className="mb-3 text-xs tracking-[0.08em] text-emerald-deep">WHAT&rsquo;S INSIDE</MonoLabel>
          <h2 className="m-0 font-display text-[40px] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Everything needed to catch the lead and book the job.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex gap-[13px] rounded-[4px] border border-line-2 bg-surface p-[18px]">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-tint text-[13px] font-extrabold text-emerald-deep">
                ✓
              </span>
              <div>
                <div className="mb-[3px] text-[15.5px] font-bold">{f.title}</div>
                <div className="text-[13.5px] leading-[1.45] text-muted">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
