import type { ReactNode } from "react";

/**
 * "Estimate, not a guarantee" disclaimer — required on every revenue figure
 * for legal safety (see design/README.md and design/BUILD_AND_DEPLOY.md).
 */
export function Disclaimer({
  children,
  className,
  dashed,
}: {
  children: ReactNode;
  className?: string;
  dashed?: boolean;
}) {
  if (dashed) {
    return (
      <div
        className={`rounded-[3px] border border-dashed border-[#D8D2C6] bg-surface p-4 text-xs leading-[1.55] text-faint ${className ?? ""}`}
      >
        {children}
      </div>
    );
  }
  return (
    <div className={`text-xs leading-[1.5] text-faint ${className ?? ""}`}>
      {children}
    </div>
  );
}
