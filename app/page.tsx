import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CapabilityOverview } from "@/components/sections/capability-overview";
import { Consultation } from "@/components/sections/consultation";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Hero } from "@/components/sections/hero";
import { Insights } from "@/components/sections/insights";
import { Proof } from "@/components/sections/proof";
import { Workflow } from "@/components/sections/workflow";

export default function Home() {
  return (
    <div className="page-shell overflow-x-clip">
      <Header />
      <main className="flex-1">
        <Hero />
        <CapabilityOverview />
        <Workflow />
        <FeatureGrid />
        <Proof />
        <Consultation />
        <Insights />
      </main>
      <Footer />
    </div>
  );
}
