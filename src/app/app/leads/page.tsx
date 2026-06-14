import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { LeadsTable } from "@/components/app/LeadsTable";

export default function LeadsPage() {
  return (
    <Container className="pb-16 pt-8">
      <div className="mb-[22px]">
        <MonoLabel className="text-xs tracking-[0.07em] text-faint">LEAD INBOX · HUDSON VALLEY HVAC CO.</MonoLabel>
        <h1 className="mb-1 mt-1.5 font-display text-[32px] font-extrabold tracking-[-0.02em]">
          Every customer the system caught
        </h1>
        <div className="text-[14.5px] text-muted">23 missed calls recovered this week · 4 need your attention</div>
      </div>
      <LeadsTable />
    </Container>
  );
}
