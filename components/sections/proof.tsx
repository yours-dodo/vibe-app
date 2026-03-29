import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { homeContent } from "@/content/home";

export function Proof() {
  return (
    <section className="py-14 sm:py-[4.5rem]">
      <Container>
        <Reveal>
          <div className="text-center">
            <h2 className="reference-title">{homeContent.partners.title}</h2>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {homeContent.partners.items.map((partner, index) => (
            <Reveal key={partner.name} delay={0.05 + index * 0.05}>
              <article className="reference-soft-card flex h-full flex-col justify-between rounded-[30px] p-6 sm:p-7">
                <div className="flex min-h-44 items-center justify-center rounded-[24px] bg-[#f8fbff] p-6">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={400}
                    height={283}
                    className="h-auto max-h-44 w-auto max-w-full object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <p className="mt-5 text-lg font-medium text-[#111827]">{partner.name}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            <h2 className="reference-title">{homeContent.testimonial.title}</h2>
            <p className="reference-subtitle mx-auto mt-5 max-w-2xl">
              {homeContent.testimonial.summary}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <Reveal delay={0.08} className="h-full">
            <article className="reference-soft-card flex h-full flex-col justify-between rounded-[34px] p-6 sm:p-8">
              <p className="text-lg leading-8 text-[#111827] sm:text-[1.25rem] sm:leading-9">
                {homeContent.testimonial.quote}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={homeContent.testimonial.avatar}
                  alt={homeContent.testimonial.name}
                  width={48}
                  height={48}
                  className="size-12 rounded-full"
                />
                <div>
                  <p className="text-lg font-semibold text-[#111827]">
                    {homeContent.testimonial.name}
                  </p>
                  <p className="mt-1 text-sm text-[#6b7a94]">{homeContent.testimonial.role}</p>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.12} className="h-full">
            <div className="grid h-full gap-4 lg:grid-rows-2">
              {homeContent.testimonial.metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`flex h-full flex-col justify-center rounded-[28px] px-6 py-6 ${
                    index === 0
                      ? "bg-[linear-gradient(135deg,#eff6ff,#f7fbff)]"
                      : "bg-[linear-gradient(135deg,#0e48f4,#2f8cff)] text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={
                        index === 0
                          ? "/fengshen/home/arrow_1.png"
                          : "/fengshen/home/arrow_2.png"
                      }
                      alt=""
                      width={20}
                      height={15}
                    />
                    <p
                      className={`text-4xl font-semibold tracking-tight ${
                        index === 0 ? "text-[#0f172a]" : "text-white"
                      }`}
                    >
                      {metric.value}
                    </p>
                  </div>
                  <p
                    className={`mt-4 text-base ${
                      index === 0 ? "text-[#4f5f7d]" : "text-white/82"
                    }`}
                  >
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
