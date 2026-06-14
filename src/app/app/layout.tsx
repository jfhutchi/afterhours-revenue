import { AppNav } from "@/components/app/AppNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper">
      <AppNav />
      {children}
    </div>
  );
}
