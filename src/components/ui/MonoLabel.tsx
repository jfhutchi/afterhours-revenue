import type { CSSProperties, ReactNode } from "react";

/** The IBM Plex Mono, letter-spaced eyebrow/meta label used across the design. */
export function MonoLabel({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`font-mono tracking-[0.07em] ${className ?? ""}`}
      style={style}
    >
      {children}
    </div>
  );
}
