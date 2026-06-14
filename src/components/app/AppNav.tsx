"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";

const tabs = [
  { href: "/app", label: "Dashboard", match: (p: string) => p === "/app" },
  { href: "/app/leads", label: "Leads", match: (p: string) => p.startsWith("/app/leads") },
  { href: "/app/report", label: "Weekly Report", match: (p: string) => p.startsWith("/app/report") },
];

export function AppNav() {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-50 border-b border-line-3 bg-paper/[0.86] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center gap-5 px-6 py-3">
        <Logo href="/" />
        <nav className="ml-2 flex flex-1 items-center gap-1 overflow-x-auto scrollbar-none">
          {tabs.map((t) => {
            const active = t.match(pathname);
            return (
              <Link
                key={t.href}
                href={t.href}
                className={`whitespace-nowrap rounded-[3px] px-[13px] py-2 text-[12px] font-semibold uppercase tracking-[0.05em] transition-colors ${
                  active ? "bg-ink text-white" : "text-slate-soft hover:bg-black/[0.04]"
                }`}
              >
                {t.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/onboarding"
          className="shrink-0 whitespace-nowrap rounded-[3px] bg-ink px-4 py-[10px] text-[12px] font-semibold uppercase tracking-[0.05em] text-white"
        >
          Set up system
        </Link>
      </div>
    </div>
  );
}
