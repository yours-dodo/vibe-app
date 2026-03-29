import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const siteUrl = getSiteUrl();

export const revalidate = 0;
export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "封神AI智能体官网 | AI短视频创作与IP流量增长平台",
    template: "%s | 封神AI智能体官网",
  },
  description:
    "封神AI智能体是一站式AI短视频创作与企业家IP打造平台，支持选题策划、知识库增强、文案生成、数字人口播、视频生成与流量增长，帮助品牌更高效完成内容生产与传播转化。",
  keywords: [
    "封神AI",
    "封神AI智能体",
    "封神AI官网",
    "AI短视频创作",
    "AI短视频生成",
    "AI智能体",
    "企业家IP打造",
    "IP流量增长",
    "品牌IP孵化",
    "数字人口播",
    "AI视频生成",
    "AI知识库",
    "短视频营销",
  ],
  openGraph: {
    title: "封神AI智能体官网 | AI短视频创作与IP流量增长平台",
    description:
      "封神AI智能体聚焦企业家IP与品牌增长，提供从选题策划、文案生成、知识库增强到数字人口播和视频生成的一站式AI短视频创作能力。",
    url: siteUrl,
    siteName: "封神.AI",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
