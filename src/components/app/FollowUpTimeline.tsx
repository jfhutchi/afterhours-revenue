import { MonoLabel } from "@/components/ui/MonoLabel";
import type { TimelineEntry } from "@/lib/data/leads";

export function FollowUpTimeline({ timeline }: { timeline: TimelineEntry[] }) {
  return (
    <div className="rounded-[4px] border border-line bg-white p-[22px]">
      <div className="mb-4 font-display text-base font-bold">Follow-up timeline</div>
      <div className="flex flex-col">
        {timeline.map((t, i) => {
          const last = i === timeline.length - 1;
          return (
            <div key={i} className="flex gap-[13px] pb-4">
              <div className="flex flex-col items-center">
                <span className="mt-[3px] h-[11px] w-[11px] shrink-0 rounded-full" style={{ background: t.color }} />
                {!last && <span className="w-0.5 flex-1 bg-line-2" />}
              </div>
              <div className="pb-1">
                <div className="text-sm font-semibold">{t.event}</div>
                <MonoLabel className="mt-0.5 text-[11px] tracking-normal text-faint">{t.time}</MonoLabel>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
