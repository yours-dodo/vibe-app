# Requirements Breakdown

## 1. Product Requirements

### 1.1 Page Objective

首页需要在首屏快速完成三件事：

1. 说明品牌定位。
2. 说明产品价值。
3. 引导用户点击咨询或了解方案。

### 1.2 Page Sections

首版首页至少包含以下模块：

1. `Header`
2. `Hero`
3. `Capability Overview`
4. `Workflow / Product Demo`
5. `Feature Grid`
6. `Proof / Trust`
7. `Consultation CTA`
8. `Insights / Articles`
9. `Footer`

## 2. Functional Requirements

### FR-01 Header

要求：

1. 展示品牌 Logo。
2. 提供导航锚点。
3. 提供主 CTA。
4. 在移动端支持折叠菜单或简化导航。

### FR-02 Hero

要求：

1. 展示品牌标签、主标题、副标题。
2. 提供主 CTA 和次 CTA。
3. 展示 3-4 组关键指标。
4. 提供一个可视化背景或产品感面板。

### FR-03 Capability Overview

要求：

1. 使用 4-6 张卡片说明核心能力。
2. 每张卡片包含标题、简述、视觉符号。
3. 卡片布局在桌面端和移动端都要可读。

### FR-04 Workflow

要求：

1. 展示从输入需求到产出结果的过程。
2. 至少包含 4 个步骤。
3. 结构需要清晰且易于快速理解。

### FR-05 Feature Grid

要求：

1. 进一步说明细分能力。
2. 支持图文卡片或小面板形式。
3. 在移动端允许改为横向滑动或单列布局。

### FR-06 Proof / Trust

要求：

1. 展示成果数据。
2. 展示客户评价或场景证明。
3. 允许使用单个轮播区承载评价内容。

### FR-07 Consultation CTA

要求：

1. 展示预约咨询表单。
2. 表单字段至少包含手机号、公司名称、联系人、城市。
3. 首版以前端 UI 为主，可使用占位提交逻辑。

### FR-08 Insights / Articles

要求：

1. 展示 2-3 个观点或文章卡片。
2. 内容作为品牌专业感补充。
3. 首版使用静态数据。

### FR-09 Footer

要求：

1. 展示品牌信息与版权信息。
2. 可包含联系方式和二次 CTA。
3. 与首页整体风格保持一致。

## 3. Visual Requirements

### VR-01 Visual Tone

1. 视觉主基调为浅色科技风。
2. 背景以浅白、雾蓝、冰蓝为主。
3. 蓝色使用浅色、低压迫感的色阶。

### VR-02 Card Style

1. 卡片使用浅色底、细描边、柔和阴影。
2. 允许少量发光与高光。
3. 不采用厚重深色霓虹风。

### VR-03 Typography

1. 标题层级清晰。
2. 正文保持克制。
3. 数据指标要有独立视觉权重。

## 4. Motion Requirements

### MR-01 Animation Scope

1. Hero 标题和按钮允许轻量入场。
2. 卡片支持轻微 hover 与滚动显现。
3. 不做长时、重节奏或阅读干扰型动画。

### MR-02 Motion Library

1. 页面动效统一使用 `Motion`。
2. 常用 reveal 动效应复用统一封装。
3. 首屏不引入非必要重动画逻辑。

## 5. Carousel Requirements

### CR-01 Swiper Scope

1. 轮播统一使用 `Swiper`。
2. 首版只保留一个主轮播区。
3. 轮播推荐用于客户评价区或能力展示区。

### CR-02 Swiper Constraints

1. 只启用必要模块。
2. 不在首屏使用轮播。
3. 轮播组件必须放在非首屏延迟加载模块中。

## 6. Performance Requirements

### PR-01 Global No-Store

1. 全站默认停用缓存。
2. 根布局必须配置 `revalidate = 0`。
3. 根布局必须配置 `fetchCache = 'force-no-store'`。
4. 首页与 metadata routes 不能依赖静态缓存或 ISR。

### PR-02 Above-the-Fold Priority

1. 首次响应优先渲染 `Header`、`Hero`、首屏指标区。
2. 首屏应尽量保持低客户端 JS 负担。
3. 首页顶层优先保持 `Server Component`。

### PR-03 Below-the-Fold Lazy Loading

1. 首屏以下复杂交互模块使用动态导入。
2. 非首屏的 `Swiper`、复杂 `Motion` 和重装饰组件延迟加载。
3. 非首屏图片默认懒加载。

### PR-04 CSS Strategy

1. `globals.css` 只保留全局 token、reset 和少量基础样式。
2. 非首屏复杂视觉样式应局部化。
3. 不把所有 section 装饰样式都放进根样式文件。

## 7. SEO Requirements

1. 首页需要配置 `metadata`。
2. 需要配置标题、描述、关键词、`openGraph`。
3. 必须提供 `/sitemap.xml`。
4. 必须提供 `/robots.txt`。
5. 图片必须带 `alt`。
6. 结构需要使用语义化标签。

### SR-01 Sitemap Requirements

1. `sitemap.xml` 使用 Next.js 原生 metadata route 生成。
2. 首版仅包含首页 `/`。
3. 所有 URL 必须是绝对地址。
4. URL 基于 `NEXT_PUBLIC_SITE_URL` 生成。

### SR-02 Robots Requirements

1. `robots.txt` 使用 Next.js 原生 metadata route 生成。
2. 默认输出 `User-agent: *`。
3. 默认输出 `Allow: /`。
4. 必须输出 sitemap 地址。
5. 首版不增加复杂抓取策略。

## 8. Engineering Requirements

1. 使用 `TypeScript`。
2. 使用 `Tailwind CSS` 作为主样式方案。
3. 文案和数据统一放入 `content/home.ts`。
4. 页面按 section 拆分，但避免过度抽象。
5. 轮播逻辑集中在独立组件中。
6. 动画逻辑集中在轻量可复用封装中。
7. 使用 `NEXT_PUBLIC_SITE_URL` 作为 `metadataBase`、`sitemap.xml` 和 `robots.txt` 的统一域名来源。

## 9. Acceptance Requirements

1. 页面在桌面端与移动端都可正常浏览。
2. 页面结构、样式、按钮、表单风格统一。
3. 动效不影响阅读和首屏加载。
4. 轮播交互可用且稳定。
5. `/sitemap.xml` 与 `/robots.txt` 可访问且内容正确。
6. Lighthouse 基础表现可接受。
