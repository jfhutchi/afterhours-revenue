"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { auditPromise } from "@/lib/data/landing";

export function AuditCta() {
  const router = useRouter();
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [industry, setIndustry] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  // GitHub Pages is static — there's no /api server. To capture the lead, set
  // NEXT_PUBLIC_FORM_ENDPOINT to a free form backend (Formspree, Getform, Basin,
  // a Google Apps Script, etc.). If it's unset, the form still flows through to
  // the sample audit; the lead just isn't stored.
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      if (formEndpoint) {
        const res = await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ businessName, phone, industry }),
        });
        if (!res.ok) throw new Error("Something went wrong. Please try again.");
      }
      router.push("/audit/sample");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputClass =
    "rounded-[3px] border border-white/[0.16] bg-white/[0.08] px-3.5 py-[13px] text-[15px] text-white placeholder:text-[#9FB1BE] outline-none focus:border-emerald";

  return (
    <section id="audit" className="scroll-mt-20 bg-paper py-[88px]">
      <Container>
        <div className="relative grid grid-cols-1 items-center gap-12 overflow-hidden rounded-[4px] bg-gradient-to-br from-ink to-navy-600 p-8 text-white sm:p-[52px] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
          <div
            className="pointer-events-none absolute -bottom-[100px] -left-[60px] h-[360px] w-[360px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(217,138,61,.2), transparent 70%)" }}
          />
          <div className="relative">
            <MonoLabel className="mb-3.5 text-xs tracking-[0.08em] text-[#F0C79B]">THE WEDGE · FREE</MonoLabel>
            <h2 className="m-0 mb-3.5 font-display text-[38px] font-extrabold leading-[1.08] tracking-[-0.025em]">
              Get a Free Missed Revenue Audit.
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.55] text-[#B6C4D0]">
              We call your business after hours and test exactly what a real customer would hit — then show you where the money is leaking.
            </p>
            <div className="flex flex-col gap-[11px]">
              {auditPromise.map((a) => (
                <div key={a} className="flex gap-[11px] text-[15px]">
                  <span className="font-bold text-emerald">✓</span>
                  <span className="text-[#CBD6DF]">{a}</span>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="relative rounded-[4px] border border-white/[0.14] bg-white/[0.06] p-[26px]"
          >
            <div className="mb-4 font-display text-[18px] font-bold">Request your audit</div>
            <div className="flex flex-col gap-2.5">
              <input
                required
                placeholder="Business name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className={inputClass}
              />
              <input
                required
                placeholder="Business phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
              />
              <input
                required
                placeholder="Industry (e.g. HVAC, plumbing)"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className={inputClass}
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-1 cursor-pointer rounded-[3px] bg-emerald p-[15px] text-[14px] font-bold uppercase tracking-[0.06em] text-white disabled:opacity-70"
              >
                {status === "submitting" ? "Submitting…" : "See a sample audit report →"}
              </button>
            </div>
            {error && <div className="mt-2.5 text-center text-[12.5px] text-[#F0B2B5]">{error}</div>}
            <div className="mt-3 text-center text-xs text-[#7E93A3]">Takes 24 hours · No obligation</div>
          </form>
        </div>
      </Container>
    </section>
  );
}
