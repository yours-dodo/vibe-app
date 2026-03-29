import Image from "next/image";
import { homeContent } from "@/content/home";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-4 z-40 px-4 sm:top-5 sm:px-5">
      <div className="flex w-full items-start justify-between gap-4 px-5 py-4 sm:px-7 sm:py-5 lg:items-center lg:px-10">
        <a
          href="#home"
          className="inline-flex items-center rounded-[18px] bg-white/[0.08] px-4 py-3 backdrop-blur-sm sm:px-5 sm:py-4"
        >
          <Image
            src="/fengshen/home/logo.png"
            alt="封神.AI"
            width={121}
            height={28}
            priority
            className="h-7 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-12 lg:flex">
          {homeContent.nav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[15px] font-semibold text-white transition-colors hover:text-white/82 ${
                index === 0 ? "text-white" : "text-white"
              }`}
              style={{ color: "#ffffff" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden h-14 min-w-36 items-center justify-center rounded-full border-[3px] border-white bg-transparent px-8 text-lg font-semibold text-white transition-colors hover:bg-white/8 lg:inline-flex"
            style={{ color: "#ffffff" }}
          >
            {homeContent.hero.login}
          </button>

          <details className="flex flex-col items-end lg:hidden">
            <summary className="flex size-12 cursor-pointer list-none items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white backdrop-blur-sm transition-colors hover:bg-white/[0.12] [&::-webkit-details-marker]:hidden">
              <span className="sr-only">打开菜单</span>
              <span className="flex flex-col gap-1.5">
                <span className="h-0.5 w-5 rounded-full bg-white" />
                <span className="h-0.5 w-5 rounded-full bg-white" />
                <span className="h-0.5 w-5 rounded-full bg-white" />
              </span>
            </summary>

            <div className="mt-3 w-56 rounded-[24px] border border-white/12 bg-[#091b52]/96 p-4 text-white shadow-[0_20px_60px_rgba(3,10,35,0.32)] backdrop-blur-md">
              <nav className="flex flex-col gap-1">
                {homeContent.nav.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold text-white transition-colors ${
                      index === 0 ? "bg-white/10" : ""
                    } hover:bg-white/10`}
                    style={{ color: "#ffffff" }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href="#home"
                className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-full border border-white bg-transparent px-5 text-base font-bold text-white transition-colors hover:bg-white/8"
                style={{ color: "#ffffff" }}
              >
                {homeContent.hero.login}
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
