# Development Plan

## 1. Goal

基于 `Next.js App Router` 搭建一个浅色科技风官网首页，参考 `fengshenai.cn` 的信息结构与节奏，但保持独立的品牌表达、内容与视觉细节。

首版目标：

1. 完成单页官网首页。
2. 完成桌面端与移动端适配。
3. 接入基础动效、单个主轮播区和基础 SEO。
4. 落实全局停用缓存、首屏优先渲染、非首屏模块延迟加载。
5. 提供标准 `sitemap.xml` 与 `robots.txt`。

## 2. Delivery Scope

本轮交付包含：

1. 首页视觉与信息架构落地。
2. 首页主要 section 的静态内容实现。
3. 轻量动效与一个主轮播区。
4. 基础表单 UI。
5. 元信息、图片策略、响应式与性能基线。
6. 标准 SEO 文件输出。

本轮不包含：

1. 真实表单后端。
2. CMS。
3. 多语言。
4. 博客系统。
5. 登录能力。

## 3. Milestones

### Milestone 1: Project Bootstrap

目标：

1. 初始化 `Next.js` 项目。
2. 打通 `Tailwind CSS`、`Motion`、`Swiper`、`ESLint`。
3. 建立目录结构与基础主题变量。

交付物：

1. 可运行的项目骨架。
2. `app/`、`components/`、`content/`、`public/` 基础目录。
3. 最小化 `globals.css`。

### Milestone 2: Above-the-Fold

目标：

1. 完成 `Header`、`Hero`、首屏指标区。
2. 明确首屏样式与非首屏样式边界。
3. 保持首页顶层为 `Server Component`。

交付物：

1. 首屏完整视觉。
2. 首屏主 CTA 与副 CTA。
3. 首屏基础入场动效。

### Milestone 3: Below-the-Fold

目标：

1. 完成能力卡片、流程区、功能区、客户证明区、咨询区、文章区、页脚。
2. 非首屏交互组件按需加载。
3. 轮播仅在非首屏区域使用。

交付物：

1. 完整首页内容。
2. 单个 `Swiper` 主轮播区。
3. 下方区块动态导入方案。

### Milestone 4: Quality Pass

目标：

1. 接入基础 SEO。
2. 补齐交互动效与移动端细节。
3. 验证全局无缓存与性能策略。
4. 输出标准 SEO 文件。

交付物：

1. `metadata` 配置完成。
2. `sitemap.xml` 与 `robots.txt` 可访问。
3. 图片与懒加载策略完成。
4. Lighthouse 与手工验收通过。

## 4. Work Breakdown

### Phase 1

1. 初始化项目。
2. 安装依赖。
3. 建立目录结构。
4. 写全局 token。
5. 规划数据文件结构。

### Phase 2

1. 搭建首页骨架。
2. 实现首屏内容。
3. 完成首屏样式与基础动效。
4. 控制首屏 JS 与 CSS 范围。

### Phase 3

1. 实现非首屏 section。
2. 添加轮播组件。
3. 接入滚动显现动效。
4. 拆分非首屏动态模块。

### Phase 4

1. 接入 SEO 元信息。
2. 输出 `sitemap.xml` 与 `robots.txt`。
3. 优化图片、字体和动画策略。
4. 完成响应式修正。
5. 做最终验收。

## 5. Technical Constraints

1. 页面框架必须使用 `Next.js App Router`。
2. 样式主方案使用 `Tailwind CSS`。
3. 动效主方案使用 `Motion`。
4. 轮播主方案使用 `Swiper`。
5. 全站默认停用缓存，根布局使用 `revalidate = 0` 与 `fetchCache = 'force-no-store'`。
6. 首屏优先渲染，非首屏交互模块按需加载。
7. 不直接复用参考站文案、素材或品牌信息。
8. 组件拆分要保持简洁，避免过度抽象。
9. `metadataBase`、`sitemap.xml` 与 `robots.txt` 统一使用 `NEXT_PUBLIC_SITE_URL` 生成绝对地址。

## 6. Risks

1. 如果把过多样式写入 `globals.css`，首屏样式体积会失控。
2. 如果首屏直接引入 `Swiper` 或重动画，首包体积会偏大。
3. 如果动态导入边界放错，可能无法达到预期 code splitting 效果。
4. 如果 Tailwind 类在单组件内过长，后续维护成本会快速上升。
5. 如果未正确配置 `NEXT_PUBLIC_SITE_URL`，`sitemap.xml` 与 `robots.txt` 中的绝对 URL 会错误。
6. 如果误把局部页面重新配置为静态缓存，线上行为会与“全局停用缓存”目标不一致。

## 7. Definition Of Done

满足以下条件视为首版完成：

1. 首页结构完整，信息表达清晰。
2. 视觉方向符合浅色科技风。
3. 首屏优先策略落地，非首屏重模块延迟加载。
4. 动效轻量，轮播可用。
5. `sitemap.xml` 与 `robots.txt` 可访问且内容正确。
6. 响应式、SEO、基础性能达标。
