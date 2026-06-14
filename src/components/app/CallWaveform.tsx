import { MonoLabel } from "@/components/ui/MonoLabel";

/**
 * Call-recording placeholder with a CSS waveform.
 * Bar heights are deterministic (no Math.random) so server and client render
 * identically — matches the prototype's `20 + |sin(i*0.9)·cos(i*0.4)|·80`%.
 */
const bars = Array.from(
  { length: 40 },
  (_, i) => 20 + Math.round(Math.abs(Math.sin(i * 0.9) * Math.cos(i * 0.4)) * 80) + "%",
);

export function CallWaveform({ duration = "1:48" }: { duration?: string }) {
  return (
    <div className="rounded-[4px] bg-ink p-[22px] text-white">
      <MonoLabel className="mb-3.5 text-[10.5px] tracking-[0.06em] text-mint">CALL RECORDING · {duration}</MonoLabel>
      <div className="flex items-center gap-3.5">
        <div className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-emerald text-base">
          ▶
        </div>
        <div className="flex h-9 flex-1 items-center gap-[3px]">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-[2px]" style={{ height: h, background: "rgba(191,233,214,.5)" }} />
          ))}
        </div>
      </div>
    </div>
  );
}
