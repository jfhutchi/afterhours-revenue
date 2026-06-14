import { MonoLabel } from "@/components/ui/MonoLabel";

/** Circular recovery-score gauge (conic-gradient ring with a white knockout). */
export function RecoveryGauge({ score }: { score: number }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[4px] border border-line bg-white p-[30px] text-center">
      <div
        className="mb-4 flex h-[150px] w-[150px] items-center justify-center rounded-full"
        style={{ background: `conic-gradient(#0E9F6E 0% ${score}%, #EDE8DE ${score}% 100%)` }}
      >
        <div className="flex h-[116px] w-[116px] flex-col items-center justify-center rounded-full bg-white">
          <div className="font-display text-[38px] font-extrabold tracking-[-0.02em]">{score}%</div>
          <MonoLabel className="text-[9.5px] tracking-[0.05em] text-faint">RECOVERY SCORE</MonoLabel>
        </div>
      </div>
      <div className="max-w-[220px] text-[13.5px] leading-[1.5] text-muted">
        Most after-hours leads were answered, captured, or followed up with.
      </div>
    </div>
  );
}
