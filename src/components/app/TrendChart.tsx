import { MonoLabel } from "@/components/ui/MonoLabel";
import { trendBars } from "@/lib/data/dashboard";

export function TrendChart() {
  return (
    <div className="rounded-[4px] border border-line bg-white p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="font-display text-[17px] font-bold">Revenue recovered · last 6 weeks</div>
        <MonoLabel className="text-[11px] tracking-normal text-faint">USD</MonoLabel>
      </div>
      <div className="flex h-[180px] items-end justify-between gap-3.5">
        {trendBars.map((b) => (
          <div key={b.wk} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
            <MonoLabel className="text-[10.5px] font-semibold tracking-normal text-body">{b.label}</MonoLabel>
            <div className="w-full rounded-t-lg" style={{ height: b.h, background: b.fill }} />
            <MonoLabel className="text-[10px] tracking-normal text-faint">{b.wk}</MonoLabel>
          </div>
        ))}
      </div>
    </div>
  );
}
