import type { ReactNode } from "react";

/** Centered 1240px max-width wrapper with 24px gutters (matches the prototype). */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-6 ${className ?? ""}`}>
      {children}
    </div>
  );
}
