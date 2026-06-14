import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/app", label: "Dashboard" },
];

export function MarketingNav() {
  return (
    <div className="sticky top-0 z-50 border-b border-line-3 bg-paper/[0.86] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center gap-5 px-6 py-3">
        <Logo href="/" />
        <nav className="ml-2 flex flex-1 items-center gap-1 overflow-x-auto scrollbar-none">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="whitespace-nowrap rounded-[3px] px-[13px] py-2 text-[12px] font-semibold uppercase tracking-[0.05em] text-slate-soft transition-colors hover:bg-black/[0.04]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/audit/sample"
          className="shrink-0 whitespace-nowrap rounded-[3px] bg-ink px-4 py-[10px] text-[12px] font-semibold uppercase tracking-[0.05em] text-white"
        >
          Free Revenue Audit
        </Link>
      </div>
    </div>
  );
}
