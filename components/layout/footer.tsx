import Image from "next/image";
import { homeContent } from "@/content/home";

export function Footer() {
  return (
    <footer className="w-full pt-14">
      <div className="relative w-full overflow-hidden bg-[#040b21] text-white shadow-[0_26px_80px_rgba(5,16,48,0.3)]">
        <Image
          src="/fengshen/home/bottom1.png"
          alt=""
          fill
          sizes="(max-width: 639px) 100vw, 0px"
          className="object-cover opacity-[0.18] mix-blend-screen sm:hidden"
        />
        <Image
          src="/fengshen/home/bottom.png"
          alt=""
          fill
          sizes="(max-width: 639px) 0px, 100vw"
          className="hidden object-cover opacity-[0.18] mix-blend-screen sm:block"
        />

        <div className="relative mx-auto w-full max-w-[1180px] px-0 py-10 sm:py-12 lg:py-14">
          <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-start">
            <div className="flex flex-col gap-6">
              <Image
                src={homeContent.brand.logo}
                alt={homeContent.brand.name}
                width={121}
                height={28}
                className="h-[28px] w-[121px] object-contain"
              />

              <div className="flex flex-col gap-3">
                <p className="text-lg font-bold text-white">{homeContent.footer.legal}</p>
                <a
                  href="#home"
                  className="text-sm text-white/72 transition-colors hover:text-white"
                >
                  {homeContent.footer.agreement}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 border border-white/10 bg-white/[0.06] px-0 py-0">
              <Image
                src={homeContent.consultation.qrcodeLarge}
                alt="客服微信二维码"
                width={84}
                height={84}
                className="size-20 bg-white p-0 object-contain"
              />
              <div>
                <p className="text-base font-medium text-white">添加客服微信</p>
                <p className="mt-2 text-sm leading-6 text-white/[0.66]">
                  获取产品演示与落地方案
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm text-white/[0.62]">{homeContent.footer.company}</p>
              <p className="mt-5 text-2xl font-medium leading-10 text-white sm:text-[2rem]">
                {homeContent.footer.sloganPrefix}
                <span className="hero-gradient-text mx-2 inline-block font-semibold">
                  {homeContent.footer.sloganBrand}
                </span>
                {homeContent.footer.sloganSuffix}
              </p>
            </div>

            <div className="flex flex-col gap-3 p-0 sm:flex-row sm:items-center">
              <div className="flex min-w-0 items-center gap-3 border border-white/[0.16] bg-white/[0.045] px-0 py-0 backdrop-blur-sm">
                <span className="flex size-9 items-center justify-center bg-white/[0.08] text-sm font-semibold text-white">
                  U
                </span>
                <input
                  type="text"
                  placeholder="请输入手机号"
                  className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
                />
              </div>
              <a
                href="#consult"
                className="inline-flex h-12 items-center justify-center whitespace-nowrap border border-white bg-transparent px-7 text-base font-bold text-white transition-colors hover:bg-white/8"
              >
                预约咨询
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
