"use client";

import { useState } from "react";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { money } from "@/lib/format";

export function RoiCalculator() {
  const [avg, setAvg] = useState(350);
  const [recovered, setRecovered] = useState(4);
  const [cost, setCost] = useState(399);

  const recoveredRev = avg * recovered;
  const net = recoveredRev - cost;

  return (
    <section className="relative overflow-hidden bg-ink py-[88px] text-white">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        {/* left — sliders */}
        <div>
          <MonoLabel className="mb-3 text-xs tracking-[0.08em] text-mint">THE MATH</MonoLabel>
          <h2 className="m-0 mb-4 font-display text-[40px] font-extrabold leading-[1.08] tracking-[-0.025em]">
            If one customer pays for it, the math is simple.
          </h2>
          <p className="m-0 mb-6 text-lg leading-[1.55] text-[#A9B8C4]">
            Move the sliders to your own numbers. Most owners only need to recover one or two real jobs a month to come out ahead.
          </p>
          <div className="flex max-w-[420px] flex-col gap-[22px]">
            <Slider
              label="Average customer value"
              value={money(avg)}
              min={100}
              max={2000}
              step={25}
              raw={avg}
              onChange={setAvg}
            />
            <Slider
              label="Recovered appointments / month"
              value={String(recovered)}
              min={1}
              max={30}
              step={1}
              raw={recovered}
              onChange={setRecovered}
            />
            <Slider
              label="Monthly system cost"
              value={money(cost)}
              min={199}
              max={999}
              step={50}
              raw={cost}
              onChange={setCost}
            />
          </div>
        </div>

        {/* right — result card */}
        <div
          className="rounded-[4px] bg-white p-8 text-ink"
          style={{ boxShadow: "0 40px 80px -30px rgba(0,0,0,.5)" }}
        >
          <div className="flex justify-between border-b border-[#EEE9DF] py-3.5">
            <span className="text-muted">Recovered revenue / month</span>
            <span className="font-display text-[19px] font-extrabold">{money(recoveredRev)}</span>
          </div>
          <div className="flex justify-between border-b border-[#EEE9DF] py-3.5">
            <span className="text-muted">Less monthly cost</span>
            <span className="font-display text-[19px] font-bold text-danger">−{money(cost)}</span>
          </div>
          <div className="mt-[18px] rounded-[4px] bg-gradient-to-br from-emerald to-emerald-deep p-[22px] text-white">
            <MonoLabel className="text-[11px] tracking-[0.06em] opacity-85">NET ESTIMATED GAIN / MONTH</MonoLabel>
            <div className="mt-1 font-display text-[46px] font-extrabold tracking-[-0.02em]">{money(net)}</div>
          </div>
          <div className="mt-3.5 text-xs leading-[1.5] text-faint">
            Estimate only, based on your average customer value and recovered booked opportunities. Not a guarantee of revenue.
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  raw,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  raw: number;
  onChange: (n: number) => void;
}) {
  return (
    <div>
      <div className="mb-[9px] flex justify-between text-sm">
        <span className="text-[#A9B8C4]">{label}</span>
        <span className="font-mono font-semibold">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={raw}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
        aria-label={label}
      />
    </div>
  );
}
