"use client";

import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { MonoLabel } from "@/components/ui/MonoLabel";
import {
  stepTitles,
  stepData,
  launchChecklist,
  scriptGreeting,
  scriptTextBack,
  type Toggle,
} from "@/lib/data/onboarding";

export default function OnboardingPage() {
  const [step, setStep] = useState(1); // 1-based, 1..7
  const active = stepData[step - 1];

  // capture-rule toggles (only step 3 uses them) — interactive local state
  const [toggles, setToggles] = useState<Toggle[]>(
    () => stepData[2].toggles?.map((t) => ({ ...t })) ?? [],
  );
  const flip = (i: number) =>
    setToggles((prev) => prev.map((t, idx) => (idx === i ? { ...t, on: !t.on } : t)));

  const next = () => setStep((s) => Math.min(7, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  return (
    <div className="min-h-screen bg-paper">
      {/* minimal header */}
      <div className="border-b border-line-3 bg-paper/[0.86] backdrop-blur-md">
        <div className="mx-auto max-w-[1240px] px-6 py-3">
          <Logo href="/" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[920px] px-6 pb-16 pt-8">
        <div className="mb-6">
          <MonoLabel className="text-xs tracking-[0.07em] text-faint">
            SETUP · Step {step} of 7 · {active.title}
          </MonoLabel>
          <h1 className="mt-1.5 font-display text-[30px] font-extrabold tracking-[-0.02em]">
            Let&rsquo;s set up your recovery system
          </h1>
        </div>

        {/* progress */}
        <div className="mb-7 flex gap-1.5">
          {stepTitles.map((_, i) => (
            <div
              key={i}
              className="h-1.5 flex-1 rounded-full"
              style={{ background: i + 1 <= step ? "#0E9F6E" : "#EDE8DE" }}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-[240px_1fr]">
          {/* step rail */}
          <div className="flex flex-col gap-1">
            {stepTitles.map((title, i) => {
              const n = i + 1;
              const done = n < step;
              const cur = n === step;
              return (
                <button
                  key={title}
                  type="button"
                  onClick={() => setStep(n)}
                  className={`flex items-center gap-[11px] rounded-[3px] border p-3 text-left ${
                    cur ? "border-line-3 bg-paper" : "border-transparent bg-transparent"
                  }`}
                >
                  <span
                    className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                    style={{
                      background: done ? "#0E9F6E" : cur ? "#0E1C2B" : "#EDE8DE",
                      color: done || cur ? "#fff" : "#8A97A3",
                    }}
                  >
                    {done ? "✓" : n}
                  </span>
                  <span className="text-sm font-semibold">{title}</span>
                </button>
              );
            })}
          </div>

          {/* body */}
          <div className="min-h-[360px] rounded-[4px] border border-line bg-white p-[30px]">
            <div className="mb-1.5 font-display text-[22px] font-bold">{active.title}</div>
            <div className="mb-6 text-[15px] text-muted">{active.desc}</div>

            {active.fields && (
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {active.fields.map((f) => (
                  <div key={f.label} className={f.wide ? "sm:col-span-2" : ""}>
                    <div className="mb-[7px] text-[12.5px] font-semibold text-body">{f.label}</div>
                    <div className="rounded-[3px] border border-line-3 bg-surface px-[13px] py-3 text-[14.5px] text-body">
                      {f.value}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col gap-3">
                {toggles.map((t, i) => (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => flip(i)}
                    className="flex items-center justify-between rounded-[3px] border border-line-2 bg-surface p-4 text-left"
                  >
                    <span className="text-[14.5px] font-semibold">{t.label}</span>
                    <span
                      className="relative h-[26px] w-[46px] rounded-full transition-colors"
                      style={{ background: t.on ? "#0E9F6E" : "#D8D2C6" }}
                    >
                      <span
                        className="absolute top-[3px] h-5 w-5 rounded-full bg-white transition-all"
                        style={{ left: t.on ? "23px" : "3px", boxShadow: "0 1px 3px rgba(0,0,0,.25)" }}
                      />
                    </span>
                  </button>
                ))}
              </div>
            )}

            {active.showScript && (
              <div className="rounded-[4px] bg-ink p-5 text-white">
                <MonoLabel className="mb-3.5 text-[10.5px] tracking-[0.06em] text-mint">
                  GENERATED AFTER-HOURS GREETING
                </MonoLabel>
                <div className="text-[15px] leading-[1.6] text-[#DCE5EC]">&ldquo;{scriptGreeting}&rdquo;</div>
                <div className="mt-4 border-t border-white/10 pt-3.5">
                  <MonoLabel className="text-[10.5px] tracking-[0.06em] text-mint">MISSED-CALL TEXT-BACK</MonoLabel>
                  <div className="mt-2 text-[15px] leading-[1.6] text-[#DCE5EC]">&ldquo;{scriptTextBack}&rdquo;</div>
                </div>
              </div>
            )}

            {active.showChecklist && (
              <div className="flex flex-col gap-2.5">
                {launchChecklist.map((c) => (
                  <div key={c.label} className="flex items-center gap-3 rounded-[3px] border border-line-2 bg-surface p-3.5">
                    <span
                      className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full text-xs font-bold"
                      style={{ background: c.done ? "#0E9F6E" : "#EDE8DE", color: c.done ? "#fff" : "#8A97A3" }}
                    >
                      {c.done ? "✓" : ""}
                    </span>
                    <span className="text-[14.5px] font-semibold text-body">{c.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* footer nav */}
            <div className="mt-7 flex justify-between border-t border-[#F2EFE7] pt-[22px]">
              <button
                type="button"
                onClick={prev}
                className="cursor-pointer rounded-[3px] border border-line-3 bg-paper px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.05em]"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={next}
                className="cursor-pointer rounded-[3px] bg-emerald px-6 py-3 text-[13px] font-bold uppercase tracking-[0.05em] text-white"
              >
                {step >= 7 ? "Launch system →" : "Continue →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
