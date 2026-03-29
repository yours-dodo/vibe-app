import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { homeContent } from "@/content/home";

export function CapabilityOverview() {
  return (
    <section className="mt-24 pb-12 pt-24 sm:mt-28 sm:pb-16 sm:pt-28 lg:mt-32 lg:pt-32">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="reference-title">{homeContent.architecture.title}</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 px-3 py-6 sm:px-6 sm:py-10">
            <Image
              src={homeContent.architecture.image}
              alt={homeContent.architecture.title}
              width={1323}
              height={1318}
              className="mx-auto h-auto w-full max-w-[980px]"
              sizes="(max-width: 1024px) 100vw, 980px"
            />
          </div>
        </Reveal>

        <div
          id="products"
          className="mt-10 rounded-[34px] bg-[#f7f8fb] px-6 py-10 sm:px-8 sm:py-12 lg:mt-14 lg:px-12 lg:py-14"
        >
          <Reveal>
            <div className="text-center">
              <h2 className="reference-title">{homeContent.products.title}</h2>
              <p className="reference-subtitle mx-auto mt-4 max-w-3xl">
                {homeContent.products.description}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-x-10 gap-y-12 lg:grid-cols-2">
            {homeContent.products.cards.map((card, index) => (
              <Reveal key={card.title} delay={0.05 + index * 0.04}>
                <article className="grid gap-6">
                  <div className="overflow-hidden rounded-[26px] bg-[#f2f4fa] px-6 py-6 sm:px-8 sm:py-8">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={422}
                      height={500}
                      className="mx-auto h-[250px] w-full max-w-[360px] object-contain sm:h-[275px]"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>

                  <div className="max-w-[36rem]">
                    <h3 className="text-[2rem] font-semibold tracking-tight text-[#1a2437]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-base leading-8 text-[#4e5b72]">
                      {card.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
