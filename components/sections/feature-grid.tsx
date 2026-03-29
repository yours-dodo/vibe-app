import CaseCarousel from "@/components/carousels/case-carousel";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { homeContent } from "@/content/home";

export function FeatureGrid() {
  return (
    <section id="cases" className="py-14 sm:py-[4.5rem]">
      <Container>
        <Reveal>
          <div className="text-center">
            <h2 className="reference-title">{homeContent.showcase.title}</h2>
            <p className="reference-subtitle mt-4">{homeContent.showcase.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="mt-10">
          <CaseCarousel items={homeContent.showcase.cases} />
        </Reveal>
      </Container>
    </section>
  );
}
