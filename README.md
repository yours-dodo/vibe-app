# Vibe App 官网开发文档

## 1. 项目目标

本项目用于开发一个基于 `Next.js` `App Router` 的官网首页，视觉风格参考 [fengshenai.cn](https://fengshenai.cn/)，目标是做出同类气质与信息结构的落地页，而不是直接复制对方的文案、图片或品牌素材。

当前阶段目标：

1. 先完成一个可上线展示的官网首页。
2. 首版以静态内容为主，优先完成视觉、布局、响应式与信息表达。
3. 后续再逐步补充表单提交、CMS、埋点、SEO 与多语言能力。

## 2. 参考站拆解

参考站首页具备以下典型特征：

1. 强视觉 Hero 区域  
   大标题、简短副标题、主 CTA、科技感背景、数据指标。

2. 能力卡片区  
   用多张卡片说明产品能力，例如模型、知识库、内容生产、数字人、Agent 等。

3. 流程/功能展示区  
   展示从输入选题到生成内容的完整链路，强调“一站式”和“高效率”。

4. 信任建立区  
   包括合作企业、客户评价、效果数据、案例说明。

5. 转化区  
   页面中后部有预约咨询入口、表单或客服引导，推动线索收集。

6. 内容延展区  
   用文章/观点/洞察继续强化品牌认知。

7. 页脚二次 CTA  
   通过大字标语和按钮再次收口，提升转化率。

## 3. 首版官网的信息架构

首页建议拆成以下模块：

1. `Header`
   包含 Logo、导航、主按钮。

2. `Hero`
   包含品牌主张、价值表达、主次按钮、关键指标、背景视觉。

3. `Capability Overview`
   用 4-6 张卡片展示核心能力。

4. `Workflow / Product Demo`
   展示用户从输入需求到生成结果的路径。

5. `Feature Grid`
   进一步说明能力细节，例如智能选题、内容生成、知识检索、品牌资产复用、多语言支持等。

6. `Proof / Trust`
   展示客户成果、关键数字、合作伙伴、行业适配场景。

7. `Consultation CTA`
   放置预约咨询入口，首版可先用静态表单。

8. `Insights / Articles`
   展示 2-3 篇观点卡片，增强品牌专业感。

9. `Footer`
   放品牌信息、联系方式、备案/版权信息、二次 CTA。

## 4. 视觉方向

参考站传达的是“AI + 商业增长 + 科技感”的官网气质，但本项目首版调整为更轻盈的浅色科技风，建议采用以下方向：

1. 背景以浅色为主  
   建议使用浅白、雾蓝、冰蓝、浅青渐变，整体明亮、干净，不走深色科幻风。

2. 局部使用发光元素  
   通过柔和光斑、浅色渐变描边、半透明面板做层次，控制发光强度，避免过重。

3. 字体分层明确  
   标题要强势，正文要克制，数字指标要有辨识度。

4. 卡片有“产品面板”质感  
   建议使用浅色背景、细描边、柔和阴影、圆角和轻微高光。

5. 动效要少而有效  
   只做首屏入场、卡片 hover、数字区轻动效，避免过度动画。

注意：

1. 不直接使用参考站的文案与图片。
2. 不复刻其品牌名、图标、企业名称或客户信息。
3. 只借鉴其布局节奏、视觉语气和内容组织方式。

## 5. 推荐技术栈

首版建议使用以下方案：

1. `Next.js` + `App Router`
2. `TypeScript`
3. `Tailwind CSS`
4. `next/font` 管理字体
5. `Motion` 负责页面动效
6. `Swiper` 负责轮播场景
7. `ESLint` + `Prettier`

选型原则：

1. 样式以 `Tailwind CSS` 为主，提升开发速度，减少样式文件分散带来的维护成本。
2. 动效统一交给 `Motion`，避免混用过多动画方案。
3. 轮播统一交给 `Swiper`，避免手写轮播逻辑增加复杂度。
4. 首版优先保证实现效率和代码简洁，不引入重型 UI 组件库。

### 5.5 性能与渲染原则

1. 首页采用全局 `no-store` 策略，默认不复用页面与数据缓存。
2. 首次请求优先保证首屏内容可见，首屏模块包括 `Header`、`Hero`、首屏数据区。
3. 下方区块优先做组件级延迟加载，特别是 `Swiper`、复杂动效和非首屏交互模块。
4. 全局样式只保留主题 token、reset 和必要基础样式，避免把大量装饰性样式堆进首屏全局 CSS。
5. 非首屏的重视觉样式尽量局部化，避免让首页初始样式包过大。

### 5.1 Tailwind CSS 使用原则

1. 以原子类快速搭建页面结构和视觉层次。
2. 全局设计变量仍保留在 `app/globals.css` 中，统一管理颜色、阴影、圆角等 token。
3. 重复率较高的 UI 片段提炼为组件，不滥用超长 className。
4. 单个组件内如果 Tailwind 类过长，优先拆子组件，而不是堆叠复杂逻辑。

### 5.2 Motion 使用原则

建议使用官方 `Motion` React 方案，安装后通过 `motion/react` 引入。

适合加入动效的位置：

1. Hero 首屏标题和按钮入场
2. 数据卡片的渐进出现
3. 卡片 hover 的轻微浮动和发光
4. 部分 section 的 `whileInView` 滚动显现

不建议做的动效：

1. 大面积持续运动背景
2. 高频闪烁
3. 影响阅读的长时位移动画

### 5.3 Swiper 使用原则

适合使用 `Swiper` 的区域：

1. 客户评价轮播
2. 产品能力展示轮播
3. 移动端卡片横向滑动区

实现原则：

1. 优先使用 `Swiper` 官方 React 组件。
2. 只启用必要模块，例如分页、自动播放、导航。
3. 样式尽量复用 Tailwind，不额外堆一层复杂封装。
4. 首版只保留一个主轮播组件，避免轮播泛滥。

### 5.4 代码简洁原则

1. 页面按 section 拆分，但避免过度抽象。
2. 动画封装保持轻量，优先封装常用 reveal/float 变体。
3. 轮播逻辑集中在单独组件中，不把 `Swiper` 配置散落到多个页面文件。
4. 文案与数据统一收敛到 `content/home.ts`，避免 JSX 中出现大段硬编码。

## 6. 推荐目录结构

```text
.
├─ app/
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ robots.ts
│  └─ sitemap.ts
├─ components/
│  ├─ layout/
│  │  ├─ header.tsx
│  │  └─ footer.tsx
│  ├─ sections/
│  │  ├─ hero.tsx
│  │  ├─ capability-overview.tsx
│  │  ├─ workflow.tsx
│  │  ├─ feature-grid.tsx
│  │  ├─ proof.tsx
│  │  ├─ consultation.tsx
│  │  └─ insights.tsx
│  ├─ carousels/
│  │  └─ testimonial-carousel.tsx
│  ├─ motion/
│  │  └─ reveal.tsx
│  └─ ui/
│     ├─ container.tsx
│     ├─ section-heading.tsx
│     ├─ stat-card.tsx
│     ├─ feature-card.tsx
│     └─ button.tsx
├─ content/
│  └─ home.ts
├─ public/
│  ├─ images/
│  ├─ icons/
│  └─ og/
├─ lib/
│  ├─ utils.ts
│  └─ cn.ts
├─ postcss.config.mjs
├─ package.json
├─ tsconfig.json
├─ next.config.ts
└─ README.md
```

说明：

1. `content/home.ts` 统一管理首页静态内容，方便后续切 CMS。
2. `components/sections` 只负责区块渲染，不直接硬编码大量数据。
3. `components/ui` 放可复用基础组件，避免首页代码过长。
4. `components/motion` 只放少量高复用动画封装，避免每个 section 都重复写动画参数。
5. `components/carousels` 集中承载 `Swiper` 相关组件，减少页面层的实现噪音。

如果后续首页内容继续增长，建议补充：

1. `components/sections/above-the-fold/`
2. `components/sections/below-the-fold/`

用目录层面明确哪些模块属于首屏关键路径，哪些模块允许延迟加载。

## 7. 首页模块拆分建议

### 7.1 Header

职责：

1. 品牌展示
2. 锚点导航
3. 主转化按钮

建议包含：

1. `Logo`
2. `Nav`
3. `Primary CTA`
4. 移动端菜单

### 7.2 Hero

职责：

1. 在首屏 5 秒内说清楚“我们是谁、能解决什么问题、为什么值得相信”。

建议包含：

1. 标签型 eyebrow
2. 主标题
3. 副标题
4. 主次 CTA
5. 3-4 组核心指标
6. 右侧或背景的产品可视化面板

### 7.3 Capability Overview

职责：

1. 快速说明产品能力全貌。

建议形式：

1. 2 行卡片网格
2. 1 张主卡 + 多张副卡

每张卡片建议包含：

1. 标题
2. 1 句解释
3. 小图标或抽象图形

### 7.4 Workflow

职责：

1. 呈现产品链路，让用户理解使用方式。

建议结构：

1. 输入需求
2. AI 分析
3. 内容生成
4. 结果交付

### 7.5 Proof

职责：

1. 强化可信度，降低用户决策成本。

建议内容：

1. 数据成果
2. 合作客户或适配行业
3. 用户评价

### 7.6 Consultation

职责：

1. 收集销售线索。

首版建议字段：

1. 手机号
2. 公司名称
3. 联系人
4. 城市

首版处理方式：

1. 先做前端 UI
2. 表单提交可先接占位 API
3. 后续再接真实 CRM 或飞书表单

### 7.7 Insights

职责：

1. 提升品牌专业度和内容深度。

建议先放静态卡片，后续可切换为博客/文章系统。

## 8. 内容数据组织建议

首页文案建议统一放在 `content/home.ts`，结构示例：

```ts
export const homeContent = {
  hero: {
    title: "封神AI智能体",
    highlight: "赋能IP流量增长",
    description: "用好AI，IP打造弯道超车",
  },
};
```

这样做的好处：

1. 页面组件更干净。
2. 后续替换文案不需要频繁改 JSX。
3. 接 CMS 时改造成本更低。
4. 对 `Swiper`、`Motion` 这类组件的输入数据也能统一管理。

## 9. 样式规范建议

### 9.1 设计 Token

建议在 `app/globals.css` 中先定义基础变量，并配合 Tailwind 使用：

1. 颜色变量
2. 间距变量
3. 圆角变量
4. 阴影变量
5. 容器宽度

示例方向：

```css
:root {
  --bg: #f6fbff;
  --bg-soft: #edf6ff;
  --panel: rgba(255, 255, 255, 0.72);
  --line: rgba(109, 173, 255, 0.18);
  --text: #10233f;
  --text-muted: rgba(16, 35, 63, 0.68);
  --accent: #7dc8ff;
  --accent-strong: #56b4ff;
  --container: 1200px;
  --radius-lg: 28px;
  --radius-md: 20px;
}
```

建议方式：

1. 用 CSS 变量定义主题色与阴影。
2. 在 Tailwind 类中优先消费这些变量，保证整体风格统一。
3. 复杂背景、玻璃拟态、渐变描边可保留少量自定义 CSS，不强行全部写成工具类。

为了满足首屏优先渲染：

1. `app/globals.css` 只放基础变量、排版 reset、页面底色、通用容器和少量首屏公共样式。
2. 不把大段 section 专属背景、轮播皮肤、复杂 hover 效果直接写进全局样式。
3. 非首屏复杂样式优先跟随组件拆分，避免所有样式都在首页首次进入时一起下发。

### 9.2 响应式断点

建议使用：

1. `>= 1280px` 桌面大屏
2. `>= 1024px` 标准桌面
3. `>= 768px` 平板
4. `< 768px` 手机

### 9.3 页面节奏

建议统一控制：

1. section 上下留白
2. 标题与正文间距
3. 卡片栅格间距
4. 最大阅读宽度

## 10. SEO 与基础工程要求

首版就应该补齐：

1. `metadata` 标题与描述
2. `openGraph` 基础信息
3. `sitemap.xml`
4. `robots.txt`
5. 语义化标签
6. 图片 `alt`
7. 首屏内容优先渲染
8. 移动端适配

建议在 `app/layout.tsx` 中配置：

1. `title`
2. `description`
3. `keywords`
4. `metadataBase`
5. `openGraph`

SEO 文件建议使用 Next.js 原生 metadata routes：

1. 使用 `app/sitemap.ts` 生成 `/sitemap.xml`
2. 使用 `app/robots.ts` 生成 `/robots.txt`
3. 首版 `sitemap.xml` 仅收录首页 `/`
4. `robots.txt` 默认允许抓取公开页面，并显式声明 sitemap 地址

站点域名来源建议统一使用：

1. `NEXT_PUBLIC_SITE_URL` 作为站点绝对 URL 来源
2. `metadataBase`、`sitemap.xml`、`robots.txt` 统一复用该值
3. 本地开发默认可使用 `http://localhost:3000`

## 11. 性能与渲染策略

### 11.1 全局停用缓存策略

当前首页与 SEO 文件统一按全局 `no-store` 策略处理。

实现建议：

1. 在 `app/layout.tsx` 中配置 `export const revalidate = 0`。
2. 在 `app/layout.tsx` 中配置 `export const fetchCache = 'force-no-store'`。
3. 在 `app/sitemap.ts` 与 `app/robots.ts` 中同步配置 `export const revalidate = 0`。
4. 在 `next.config.ts` 中关闭 `serverComponentsHmrCache`，避免开发态 HMR 继续复用服务端组件抓取结果。

说明：

1. 当前站点不再使用首页 `ISR`。
2. 页面、布局与 metadata routes 默认每次请求都重新计算，不复用缓存结果。
3. `sitemap.xml` 与 `robots.txt` 虽然不是首屏渲染路径的一部分，但也保持与全站一致的无缓存策略。
4. 如果后续接入 CMS 或高频数据，再按页面或数据源单独恢复精细化缓存。

### 11.2 首屏优先策略

首页首个响应阶段只保证首屏关键内容优先可见：

1. `Header`
2. `Hero`
3. 首屏指标卡
4. Hero 背景氛围图层

落地原则：

1. 首页顶层保持 `Server Component`，减少首包客户端 JavaScript。
2. 非首屏模块尽量不要进入首屏关键渲染路径。
3. 首屏内避免引入 `Swiper` 这类非必要客户端依赖。
4. Hero 使用的图片、插画和字体按 LCP 优先级处理，其它媒体资源延后。

### 11.3 下方区块延迟加载策略

针对首屏以下模块，采用组件级延迟加载：

1. 客户评价轮播
2. 复杂数据展示区
3. Insights 卡片轮播或动效模块
4. 非首屏的重交互装饰组件

实现建议：

1. 使用 `next/dynamic` 按需加载非首屏 `Client Components`。
2. `Swiper` 相关组件必须放在非首屏区块，并通过动态导入加载。
3. `Motion` 如果只用于首屏以下模块，也跟随该模块一起加载，避免所有动画逻辑进首页首包。
4. 服务端组件保持默认代码拆分，下方的客户端交互模块才做真正的按需引入。

重要约束：

1. 在 App Router 中，如果直接由 `Server Component` 动态导入 `Client Component`，官方文档说明自动 code splitting 当前并不支持。
2. 因此真正需要延迟加载的交互模块，应放入明确的 `Client Component` 边界内，再在该边界中使用 `dynamic()` 或 `React.lazy()`。
3. 轮播、复杂动画、浏览器 API 依赖模块，都按这个模式实现。

### 11.4 CSS 加载策略

页面要求“首屏 CSS 优先，下方样式尽量延后”，在 `Next.js + Tailwind CSS` 下建议采用混合方案：

1. `Tailwind CSS` 继续作为主样式方案。
2. `globals.css` 保持极小，只承载全局 token 和基础样式。
3. 首屏 section 直接使用 Tailwind 类，保证结构与基础视觉立即可用。
4. 非首屏复杂装饰、轮播皮肤、特殊背景效果，优先拆到局部样式文件或跟随动态组件加载。
5. 不追求把所有样式都塞进首屏 HTML，而是优先缩小关键路径样式的体积。

工程判断：

1. `Next.js` 生产环境会自动做 CSS chunking 和 route 级代码拆分。
2. 但如果把所有视觉细节都堆进 `globals.css` 或根层通用样式，首屏无法真正变轻。
3. 因此这里的核心不是“手写一套 critical CSS”，而是“严格控制进入关键路径的样式范围”。

### 11.5 可选优化项

以下能力可以在首版完成后评估是否启用：

1. `experimental.inlineCss`
2. 更细粒度的 `cssChunking` 策略
3. 图片占位与分辨率裁剪
4. 非首屏模块进入视口后再挂载

注意：

1. `inlineCss` 当前是 Next.js 的实验能力，官方文档明确标注为不建议直接用于生产默认方案。
2. 因此首版不把它作为硬依赖，而是作为压测后可选项。

## 12. 交互与动效范围

首版建议把动效控制在“提升质感但不干扰转化”的范围内：

1. Hero 文案和按钮做轻量入场。
2. 功能卡片进入视口时做淡入上移。
3. 卡片 hover 使用轻微位移、描边高亮或阴影增强。
4. 客户评价区使用单个 `Swiper` 轮播增强信息密度。
5. 移动端可将部分卡片区切为横向滑动。

技术约束：

1. 所有页面动效优先使用 `Motion`。
2. 所有轮播优先使用 `Swiper`。
3. 不为了炫技增加复杂时间轴动画。
4. 动效实现应服务于阅读路径和 CTA 转化。

性能补充要求：

1. 首屏不引入非必要轮播与重动画逻辑。
2. 非首屏动效组件优先延迟加载。
3. 所有非首屏图片默认 `loading="lazy"`，LCP 资源除外。

## 13. 首版开发范围

### 必做

1. 完成单页官网首页
2. 完成桌面端与移动端适配
3. 实现 Hero、卡片区、流程区、客户证明区、表单区、Footer
4. 接入基础动效与一个主轮播区
5. 完成统一视觉风格
6. 接入基础 SEO
7. 提供 `/sitemap.xml` 与 `/robots.txt`

### 可延后

1. 实际表单后端
2. 埋点系统
3. 多语言
4. 博客系统
5. CMS
6. 登录功能

## 14. 开发里程碑

### Phase 1: 基础初始化

1. 初始化 `Next.js App Router` 项目
2. 配置 `TypeScript / ESLint / Prettier / Tailwind CSS`
3. 建立基础目录
4. 配置全局样式变量
5. 安装 `Motion` 与 `Swiper`
6. 预留全局 `no-store` 与动态导入基础结构

### Phase 2: 首页静态搭建

1. 完成页面骨架
2. 完成各 section 静态内容
3. 完成响应式布局
4. 替换占位图形与图标
5. 明确首屏与非首屏模块边界

### Phase 3: 视觉完善

1. 调整渐变背景
2. 优化卡片层次
3. 增加入场动效
4. 接入主轮播区
5. 校准移动端排版
6. 将非首屏模块做动态加载

### Phase 4: 功能接入

1. 表单提交
2. 埋点
3. SEO 补强
4. 性能优化
5. 补齐 `sitemap.xml` 与 `robots.txt`

## 15. 启动命令建议

如果目录还是空的，建议下一步直接初始化项目：

```bash
pnpm create next-app@latest .
```

建议初始化选项：

1. 使用 `TypeScript`
2. 使用 `App Router`
3. 使用 `ESLint`
4. 使用 `Tailwind CSS`
5. 使用 `src/` 否
6. 使用别名 `@/*`

初始化完成后建议补装：

```bash
pnpm add motion swiper
```

建议同时准备环境变量：

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

启动开发环境：

```bash
pnpm install
pnpm dev
```

## 16. 首版验收标准

当以下条件满足时，可认为首页首版完成：

1. 视觉风格与参考站同属“科技增长型官网”气质，但内容与品牌表达独立。
2. 页面结构完整，首屏表达清晰。
3. 桌面端与移动端均可正常浏览。
4. 卡片、区块、按钮、表单样式一致。
5. 动效轻量、稳定，不影响首屏加载与阅读。
6. 轮播在桌面端与移动端都具备可用性。
7. Lighthouse 基础表现可接受。
8. 后续能无痛接入真实数据与表单接口。
9. 首页默认停用缓存，且非首屏重模块不进入首屏关键加载路径。
10. `/sitemap.xml` 可访问且返回有效 XML。
11. `/robots.txt` 可访问且返回有效文本。
12. `robots.txt` 中正确指向 sitemap 地址，且域名来源与 `metadataBase` 一致。

## 17. 下一步执行建议

建议按以下顺序推进：

1. 先初始化 `Next.js` 项目。
2. 先拆清首屏与非首屏模块。
3. 先把首页静态结构搭出来。
4. 再补 Tailwind 视觉细节。
5. 再接 `Motion` 和 `Swiper`，并确保它们不阻塞首屏。
6. 最后接入表单、SEO 与性能优化。

如果你确认这份 README 的方向没问题，下一步我就可以直接开始在当前目录初始化 `Next.js App Router` 项目，并先把首版首页页面搭出来。
