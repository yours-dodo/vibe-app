import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { homeContent } from "@/content/home";

export function Hero() {
  return (
    <section id="home" className="relative pb-0 pt-0 sm:px-0 sm:pt-0">
      <div className="hero-stage min-h-[720px] pb-28 pt-0 sm:min-h-[calc(100svh-5rem)] sm:px-10 sm:pb-28 lg:px-14 lg:pb-32">
        <Image
          src="/fengshen/home/circle1.png"
          alt=""
          fill
          priority
          sizes="(max-width: 639px) 100vw, 0px"
          className="object-cover opacity-[0.14] mix-blend-screen sm:hidden"
        />
        <Image
          src="/fengshen/home/circle.png"
          alt=""
          fill
          priority
          sizes="(max-width: 639px) 0px, 100vw"
          className="hidden object-cover opacity-[0.16] mix-blend-screen sm:block"
        />

        <div className="relative mx-auto flex min-h-[500px] max-w-5xl flex-col items-center justify-center pb-8 pt-24 text-center sm:min-h-[calc(100svh-14rem)] sm:pb-12 sm:pt-28 lg:min-h-[calc(100svh-15rem)] lg:pb-16 lg:pt-24">
          <h1 className="text-balance text-[2.7rem] leading-[1.06] tracking-[-0.04em] text-white sm:text-[4.25rem] lg:text-[5rem]">
            <span className="font-normal">封神</span>
            <span className="font-semibold">AI</span>
            <span className="font-normal">智能体</span>
          </h1>

          <p className="hero-gradient-text mt-3 text-[3.05rem] font-semibold leading-none tracking-[-0.05em] sm:text-[5rem] lg:text-[6.25rem]">
            赋能IP流量增长
          </p>

          <p className="mt-5 text-[0.95rem] leading-6 text-white sm:text-[1.75rem] sm:leading-[2.6rem]">
            用好AI，IP打造弯道超车
          </p>

          <a
            href="#consult"
            className="hero-cta-pill mt-10 inline-flex h-16 min-w-[214px] items-center justify-center rounded-full px-8 text-lg font-semibold text-white transition-transform hover:-translate-y-0.5 sm:mt-12 sm:h-[72px] sm:min-w-[300px] sm:px-12 sm:text-[1.65rem]"
            style={{ color: "#ffffff" }}
          >
            {homeContent.hero.cta}
          </a>
        </div>

        <div className="hero-stat-ribbon absolute inset-x-4 bottom-0 translate-y-[36%] rounded-[18px] px-4 py-5 sm:inset-x-12 sm:translate-y-1/2 sm:rounded-[14px] sm:px-10 sm:py-8 lg:inset-x-24 lg:px-14 lg:py-9 xl:inset-x-28">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4 xl:gap-10">
            {homeContent.hero.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.14 + index * 0.04}>
                <div className="text-center">
                  <div className="flex items-end justify-center gap-1.5">
                    <span className="text-[2.35rem] font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[4.1rem]">
                      <AnimatedCounter value={stat.value} duration={1500 + index * 120} />
                    </span>
                    <span className="pb-0.5 text-sm font-semibold text-white sm:pb-1 sm:text-xl lg:text-[1.7rem]">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="mt-2 text-[12px] leading-5 text-white/75 sm:mt-4 sm:text-base">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
