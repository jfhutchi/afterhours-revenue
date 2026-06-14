import Link from "next/link";

type LogoProps = {
  /** size of the gradient mark in px */
  markSize?: number;
  /** "footer" uses a white-on-emerald mark + all-white wordmark */
  variant?: "default" | "footer";
  /** when set, wraps the logo in a link */
  href?: string;
  className?: string;
};

export function Logo({ markSize = 30, variant = "default", href, className }: LogoProps) {
  const footer = variant === "footer";
  const mark = (
    <div
      style={{
        width: markSize,
        height: markSize,
        borderRadius: markSize * 0.3,
        background: footer
          ? "conic-gradient(from 220deg, #fff 0deg 180deg, #0E9F6E 180deg 360deg)"
          : "conic-gradient(from 220deg, #0E1C2B 0deg 180deg, #0E9F6E 180deg 360deg)",
        boxShadow: footer ? undefined : "0 2px 6px rgba(14,28,43,.25)",
        flexShrink: 0,
      }}
    />
  );

  const content = (
    <div className={`flex items-center gap-[11px] ${className ?? ""}`}>
      {mark}
      <div
        className="font-display font-extrabold tracking-[-0.02em]"
        style={{ fontSize: footer ? 16 : 17, color: footer ? "#fff" : undefined }}
      >
        AfterHours
        {footer ? (
          <span>&nbsp;Revenue</span>
        ) : (
          <span className="text-emerald">&nbsp;Revenue</span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {content}
      </Link>
    );
  }
  return content;
}
