import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { homeContent } from "@/content/home";

export function Workflow() {
  return (
    <section className="py-14 sm:py-[4.5rem]">
      <Container>
        <div className="rounded-[36px] border border-[#141B29] bg-[#F4F5F6] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="reference-title">{homeContent.workflow.title}</h2>
            </div>
          </Reveal>

          <div className="relative mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal delay={0.05}>
              <div className="overflow-hidden rounded-[30px] border border-[#dbe4f2] bg-[#10163d] p-3 shadow-[0_20px_70px_rgba(4,10,40,0.18)]">
                <Image
                  src={homeContent.workflow.image}
                  alt={homeContent.workflow.title}
                  width={957}
                  height={598}
                  className="h-auto w-full rounded-[24px]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {homeContent.workflow.abilities.map((item, index) => (
                <Reveal key={item.title} delay={0.1 + index * 0.04}>
                  <article className="h-full rounded-[26px] border border-[#dbe4f2] bg-[#EEEFF4] p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-12 items-center justify-center rounded-[12px] bg-[#4C73F6]">
                        <Image
                          src={item.icon}
                          alt=""
                          width={24}
                          height={24}
                          className="brightness-0 invert"
                        />
                      </span>
                      <h3 className="text-lg font-semibold text-[#10233f]">{item.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#63718b]">{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
