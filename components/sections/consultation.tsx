import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { homeContent } from "@/content/home";

function Input({
  label,
  placeholder,
  className = "",
}: {
  label?: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      {label ? (
        <span className="mb-3 block text-base font-medium text-white">{label}</span>
      ) : null}
      <input
        type="text"
        placeholder={placeholder}
        className="h-14 w-full rounded-[16px] border border-white/12 bg-white/8 px-4 text-white outline-none placeholder:text-white/36 focus:border-[#68b8ff]"
      />
    </label>
  );
}

export function Consultation() {
  return (
    <section id="consult" className="min-h-[100svh]">
      <div className="flex min-h-[100svh] w-full items-center bg-[#467EF7] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="mx-auto w-full max-w-[1180px]">
          <Reveal>
            <div className="text-center">
              <h2 className="reference-title text-white">
                {homeContent.consultation.title}
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
            <Reveal delay={0.05}>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.06] px-5 py-5 sm:px-6 sm:py-7 lg:px-7">
                <Input label="手机号" placeholder="请输入手机号" />
                <p className="mt-4 text-sm text-white/[0.68]">
                  {homeContent.consultation.hint}
                </p>

                <div className="mt-5 grid gap-4">
                  <Input placeholder="请输入公司名称" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input placeholder="请输入联系人姓名" />
                    <Input placeholder="请输入城市" />
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-6 inline-flex h-14 min-w-36 items-center justify-center rounded-[18px] bg-[#4C73F6] px-8 text-lg font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  {homeContent.consultation.submit}
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex h-full flex-col items-center justify-center rounded-[28px] border border-white/10 bg-white/[0.06] px-6 py-10 text-center sm:px-8">
                <div className="rounded-[22px] bg-white p-4 shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
                  <Image
                    src={homeContent.consultation.qrcode}
                    alt="客服微信二维码"
                    width={140}
                    height={136}
                    className="h-36 w-36"
                  />
                </div>
                <p className="mt-6 text-2xl font-medium text-white">添加客服微信</p>
                <p className="mt-3 max-w-xs text-sm leading-7 text-white/[0.66]">
                  提交信息后，也可以通过扫码直接与团队取得联系，提前了解接入方案。
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
