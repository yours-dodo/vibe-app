import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { homeContent } from "@/content/home";

export function Insights() {
  return (
    <section className="py-14 sm:py-[4.5rem]">
      <Container>
        <Reveal>
          <div className="text-center">
            <h2 className="reference-title">{homeContent.insights.title}</h2>
            <p className="reference-subtitle mt-4">{homeContent.insights.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {homeContent.insights.posts.map((post, index) => (
            <Reveal key={post.title} delay={0.05 + index * 0.05}>
              <article className="reference-soft-card overflow-hidden rounded-[30px] p-4 sm:p-5">
                <div className="overflow-hidden rounded-[24px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={426}
                    height={283}
                    className="h-[240px] w-full object-cover sm:h-[270px]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <h3 className="mt-5 text-2xl font-semibold leading-9 text-[#111827]">
                  {post.title}
                </h3>
                <a
                  href="#consult"
                  className="mt-6 inline-flex items-center gap-3 text-base font-medium text-[#246cff]"
                >
                  阅读更多
                  <Image
                    src="/fengshen/home/ArrowRight.png"
                    alt=""
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5"
                  />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
