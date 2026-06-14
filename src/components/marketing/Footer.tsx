import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-ink py-11 text-white">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-6">
        <Logo variant="footer" markSize={26} />
        <div className="text-[13px] text-[#7E93A3]">
          Your business should never lose a customer to voicemail.
        </div>
      </div>
    </footer>
  );
}
