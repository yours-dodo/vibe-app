# Implementation Steps

## 1. Setup

1. 初始化 `Next.js App Router` 项目。
2. 勾选 `TypeScript`、`ESLint`、`Tailwind CSS`。
3. 安装 `motion` 和 `swiper`。
4. 建立 `components`、`content`、`public`、`lib` 目录。
5. 清理脚手架默认页面和无关样式。

## 2. Foundation

1. 在 `app/layout.tsx` 中配置基础 `metadata`。
2. 定义 `NEXT_PUBLIC_SITE_URL`，并在 `metadataBase`、`sitemap.xml` 和 `robots.txt` 中复用。
3. 在 `app/globals.css` 中写主题 token、reset 和通用容器规则。
4. 在 `lib/cn.ts` 中提供类名合并工具。
5. 在 `content/home.ts` 中建立首页内容数据结构。
6. 在 `app/layout.tsx` 中配置 `export const revalidate = 0` 与 `export const fetchCache = 'force-no-store'`。

## 3. File Structure

建议先创建以下文件：

1. `app/layout.tsx`
2. `app/page.tsx`
3. `app/sitemap.ts`
4. `app/robots.ts`
5. `app/globals.css`
6. `content/home.ts`
7. `components/layout/header.tsx`
8. `components/layout/footer.tsx`
9. `components/sections/hero.tsx`
10. `components/sections/capability-overview.tsx`
11. `components/sections/workflow.tsx`
12. `components/sections/feature-grid.tsx`
13. `components/sections/proof.tsx`
14. `components/sections/consultation.tsx`
15. `components/sections/insights.tsx`
16. `components/carousels/testimonial-carousel.tsx`
17. `components/motion/reveal.tsx`
18. `components/ui/button.tsx`
19. `components/ui/container.tsx`
20. `components/ui/section-heading.tsx`

## 4. Above-the-Fold First

### Step 4.1 Header

1. 完成 Logo 区。
2. 完成桌面导航。
3. 完成 CTA 按钮。
4. 简化移动端导航交互。

### Step 4.2 Hero

1. 渲染标签、主标题、副标题。
2. 渲染主次 CTA。
3. 渲染指标卡。
4. 添加 Hero 背景装饰层。
5. 用 `Motion` 加入轻量入场动效。

### Step 4.3 First Paint Review

1. 确认首屏不依赖 `Swiper`。
2. 确认首屏没有不必要的客户端组件。
3. 确认 `globals.css` 未堆入非首屏大段样式。

## 5. Below-the-Fold Build

### Step 5.1 Capability Overview

1. 输出核心能力卡片。
2. 完成桌面端网格布局。
3. 完成移动端单列或滑动布局。

### Step 5.2 Workflow

1. 建立四步流程结构。
2. 用连线、序号或节奏化布局增强理解。

### Step 5.3 Feature Grid

1. 展示细分能力。
2. 控制每张卡片文案长度。
3. 让排版保持均衡。

### Step 5.4 Proof

1. 完成成果数据区。
2. 接入评价卡片。
3. 在该区引入 `Swiper` 轮播。

### Step 5.5 Consultation

1. 完成表单 UI。
2. 完成表单字段布局。
3. 先接占位提交逻辑或空态按钮处理。

### Step 5.6 Insights

1. 添加 2-3 张文章卡片。
2. 保持内容区密度不要过高。

### Step 5.7 Footer

1. 补品牌说明。
2. 补版权信息。
3. 补二次 CTA。

## 6. Dynamic Loading

1. 将轮播组件放入明确的 `Client Component` 边界。
2. 对非首屏交互模块使用 `next/dynamic`。
3. 仅对确实需要浏览器交互的模块使用客户端组件。
4. 避免从顶层 `Server Component` 直接把重交互模块拉入首包。

## 7. Styling Pass

1. 优先使用 Tailwind 工具类完成布局。
2. 超长 `className` 先通过拆组件解决。
3. 复杂渐变、描边和高光只保留少量自定义 CSS。
4. 检查各 section 的留白、层级、色彩统一性。

## 8. Motion Pass

1. 给首屏标题、按钮、指标卡增加轻量入场。
2. 给非首屏卡片增加 `whileInView` 淡入。
3. hover 只做轻微位移、阴影或描边增强。
4. 删除干扰阅读的多余动画。

## 9. SEO And Accessibility

1. 检查标题、描述、OG 配置。
2. 实现 `app/sitemap.ts` metadata route。
3. 实现 `app/robots.ts` metadata route。
4. 校验 sitemap 中输出的 URL 为绝对地址。
5. 校验 `robots.txt` 中包含正确的 `Sitemap:` 指令。
6. 检查语义化标签。
7. 检查图片 `alt`。
8. 检查按钮与表单可访问性。
9. 检查移动端点击区域和可读性。

## 10. Performance Pass

1. 确认首页与 metadata routes 默认停用缓存。
2. 确认首屏只包含关键样式与关键模块。
3. 确认非首屏图片默认懒加载。
4. 确认 `Swiper` 和非首屏动画不阻塞首屏。
5. 确认 `sitemap.xml` 与 `robots.txt` 不进入首页首屏关键路径。
6. 跑一次 `next build` 检查构建输出。
7. 构建后确认 `/sitemap.xml` 与 `/robots.txt` 可访问。

## 11. Final QA

1. 检查桌面端视觉完整性。
2. 检查移动端断点表现。
3. 检查轮播交互。
4. 检查表单 UI。
5. 检查页面滚动节奏与动效节奏。
6. 在浏览器中访问 `/sitemap.xml`。
7. 在浏览器中访问 `/robots.txt`。
8. 对照 README 验收标准逐项确认。

## 12. Suggested Execution Order

1. 先完成项目初始化和基础结构。
2. 再完成首屏。
3. 再完成非首屏静态布局。
4. 再接入轮播和动效。
5. 再补 `sitemap.xml`、`robots.txt` 与 `metadataBase`。
6. 最后处理 SEO、性能和验收。
