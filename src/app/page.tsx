import type { Metadata } from "next";
import { business } from "@/config/business";
import { createPageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/home/HeroSection";
import { SelectedWork } from "@/components/home/SelectedWork";
import { StatementBand } from "@/components/home/StatementBand";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhySection } from "@/components/home/WhySection";
import { ProcessPreview } from "@/components/home/ProcessPreview";
import { ProofSection } from "@/components/home/ProofSection";
import { Testimonials } from "@/components/shared/Testimonials";
import { PricingPreview } from "@/components/home/PricingPreview";
import { JournalPreview } from "@/components/home/JournalPreview";
import { ProjectCTA } from "@/components/shared/ProjectCTA";

export const metadata: Metadata = createPageMetadata({
  title: "Web design & development for growing businesses",
  description:
    "Freelen Studio is an independent web design and development studio in India, building custom business websites, e-commerce experiences and SEO-ready platforms for clients worldwide.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SelectedWork />
      <StatementBand />
      <ServicesPreview />
      <WhySection />
      <ProcessPreview />
      <ProofSection />
      <Testimonials />
      <PricingPreview />
      <JournalPreview />
      <ProjectCTA
        tone="lime"
        eyebrow="Have a project in mind?"
        title={
          <>
            Let&apos;s build something
            <br />
            <span className="serif-accent">worthwhile.</span>
          </>
        }
        description={`${business.responseNote} Share the context, the constraints and what success looks like — even if the brief is still taking shape.`}
      />
    </>
  );
}
