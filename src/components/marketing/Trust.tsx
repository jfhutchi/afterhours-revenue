import { MonoLabel } from "@/components/ui/MonoLabel";
import { trust } from "@/lib/data/landing";
import { PhoneMockup } from "./PhoneMockup";

export function Trust() {
  return (
    <section className="bg-white pb-24 pt-[88px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <MonoLabel className="mb-3 text-xs tracking-[0.08em] text-emerald-deep">NO BLACK BOX</MonoLabel>
          <h2 className="m-0 mb-6 font-display text-[38px] font-extrabold leading-[1.08] tracking-[-0.025em]">
            You stay in control. Always.
          </h2>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {trust.map((tr) => (
              <div key={tr} className="flex gap-[11px] rounded-[4px] border border-line-2 bg-surface p-3.5">
                <span className="font-bold text-emerald">✓</span>
                <span className="text-[14.5px] text-body">{tr}</span>
              </div>
            ))}
          </div>
        </div>
        <PhoneMockup />
      </div>
    </section>
  );
}
