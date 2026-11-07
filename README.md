<div align="center">

# 🚀 小火箭 (xiaohuojian.homes)
### 全球网络基础设施与 42 家精选机场独立评测智库

[![Astro](https://img.shields.io/badge/Astro-v5.0-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bulma](https://img.shields.io/badge/CSS-Bulma_1.0-00D1B2?style=flat-square&logo=bulma&logoColor=white)](https://bulma.io)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Website](https://img.shields.io/badge/Website-xiaohuojian.homes-0A84FF?style=flat-square)](https://xiaohuojian.homes/)
[![SEO](https://img.shields.io/badge/SEO-100%25_Clean_Canonical-success?style=flat-square)](https://xiaohuojian.homes/sitemap.xml)

<p align="center">
  <b>客观 · 可复现 · 无干扰</b><br>
  拒绝虚标倍率与虚假宣传，致力于为极客、跨国研发与科研群体建立工程级网络观测智库。
</p>

[🌐 访问官网](https://xiaohuojian.homes/) • [📊 42家机场品牌库](https://xiaohuojian.homes/airports/) • [🎁 免费资源避坑指南](https://xiaohuojian.homes/free/) • [🚨 跑路预警黑名单](https://xiaohuojian.homes/scam-alerts/) • [📱 客户端配置实战](https://xiaohuojian.homes/clients/)

---

</div>

## 📖 项目愿景与定位

**小火箭 (xiaohuojian.homes)** 是一个专注于全球内网专线（IPLC/IEPL）、BGP 智能中转出口、流媒体（Netflix/Disney+）及 AI 生产力工具（ChatGPT/Claude）原生解锁能力的独立技术评测智库与知识矩阵。

项目杜绝廉价海报风格与泛滥的黑话吹嘘，坚持采用 **Dark Network Observatory** 与 **Editorial** 相融合的现代设计语言，结合万字专著级深度长文与工程实测数据，直击网络选型核心痛点。

---

## ✨ 核心特色功能

| 专题板块 | 路由路径 | 深度与核心价值 |
| :--- | :--- | :--- |
| **42家机场品牌库** | `/airports/` | 涵盖光速云、暮光云、肥猫云等 42 家主流品牌，提供价格门槛、协议支持、测速截图与解锁状态即时筛选。 |
| **专著级免费资源专题** | `/free/` | **10,000+ 纯汉字深度编纂**。系统性拆解公共白嫖节点 4 大安全陷阱、限免试用机场全名单、签到白嫖可行性分析及应急方案。 |
| **跑路预警与防坑黑名单** | `/scam-alerts/` | **10,500+ 纯汉字深度编纂**。首创「机场破产倒闭五阶段生命周期模型」，全面拆解年付割韭菜套路、维权挽损 SOP 与资金防火墙。 |
| **全平台客户端实战** | `/clients/` | 覆盖 iOS (Shadowrocket / Loon / Surge / Quantumult X)、Windows (Clash Verge Rev)、macOS、Android (Clash / Surfboard) 与 Linux。 |
| **机场知识百科与指南** | `/guides/` | 深入拆解 IPLC vs IEPL 底层传输物理链路、BGP 入口调度、流媒体 DNS 分流机制与 TLS 握手特征阻断原理。 |
| **客观评测实验室准则** | `/about/` | 明确「三大评测红线」：严禁编造测速数据、穿透价格迷雾与虚假计费、多地探针真实延迟采集。 |

---

## 🛠️ 技术栈与架构亮点

* **全静态生成 (SSG)**：基于 **Astro 5** 架构，所有页面均在构建期生成静态 HTML。爬虫抓取零 JS 依赖，首屏加载首字节时间 (TTFB) 极速响应。
* **高对比度自适应 UI**：
  * 支持深色模式（Dark）与浅色模式（Light）毫秒级自适应切换；
  * 定制 Editorial 设计规范，元素均满足 **WCAG AAA 级（对比度 ≥ 10:1）** 视觉无障碍可读标准，杜绝黑底暗字。
* **技术 SEO 与 GEO（生成式引擎）权威优化**：
  * **单规范主域**：全站 100% 自指向绝对 HTTPS 域名，尾斜杠 `/` 绝对统一；
  * **双 Sitemap 架构**：内置 `@astrojs/sitemap` 索引 `sitemap-index.xml` 并自动兼容标准 `sitemap.xml`；
  * **搜索引擎白名单**：`robots.txt` 深度放行 Googlebot、bingbot、Baiduspider、yisouspider；
  * **外链风控隔离**：所有商业跳转链接均强制实施 `rel="nofollow sponsored noopener"` 隔离机制，保护站点权重；
  * **全量结构化数据 (JSON-LD)**：静态预埋 `Organization`、`WebSite`、`BreadcrumbList`、`TechArticle`、`Product` 与 `FAQPage`。

---

## 📂 项目工程目录

```text
xiaohuojian.homes/
├── public/                 # 静态资源、robots.txt、SVG 图标与站点清单
│   ├── favicon.svg         # 独立矢量小火箭 Favicon
│   ├── og-image.svg        # 社交媒体 Open Graph 分享图
│   ├── robots.txt          # 爬虫策略与 Sitemap 声明
│   └── site.webmanifest    # PWA Web Manifest 配置
├── src/
│   ├── components/         # 模块化 Astro 可复用组件 (Navbar, Footer, Card 等)
│   ├── data/               # 静态数据集 (42家机场库、免费资源、跑路预警、客户端教程)
│   │   ├── airports.ts     # 42家品牌完整参数、解锁状态与资费
│   │   ├── free.ts         # 免费试用与白嫖专题结构化数据
│   │   └── scamAlerts.ts   # 跑路征兆评级与黑名单特征库
│   ├── layouts/
│   │   └── Layout.astro    # 全局 SEO Head、JSON-LD、主题持久化骨架
│   ├── pages/              # 语义化路由系统 (纯小写英文 slug)
│   │   ├── 404.astro       # 中文定制友好 404 引导页
│   │   ├── about.astro     # 评测智库准则与方法论
│   │   ├── airports/       # 42 家机场品牌库与单独评测详情页 ([slug].astro)
│   │   ├── clients/        # 全平台客户端配置指南
│   │   ├── free/           # 免费资源避坑万字专题
│   │   ├── guides/         # 网络基础设施百科全书
│   │   ├── index.astro     # 智库门户首页与精选专线看板
│   │   ├── reviews/        # 42 家横向对比评测矩阵
│   │   ├── rss.xml.ts      # 自动化 RSS Feed 广播订阅
│   │   ├── scam-alerts/    # 跑路预警与防坑万字专著
│   │   └── sitemap.xml.ts  # 自动化兼容型 Sitemap 发生器
│   └── styles/
│       └── global.css      # CSS 变量设计令牌、排版与明暗对比度规范
├── astro.config.mjs        # Astro 框架工程配置与 Sitemap 插件集成
└── package.json            # 依赖管理与构建脚本 (pnpm)
```

---

## 🚀 快速上手与本地开发

### 环境要求
* **Node.js**: `>= 22.12.0`
* **包管理器**: `pnpm` (`npm install -g pnpm`)

### 1. 克隆代码仓库
```bash
git clone https://github.com/sksksk98698-source/xiaohuojian.homes.git
cd xiaohuojian.homes
```

### 2. 安装依赖
```bash
pnpm install
```

### 3. 启动本地开发服务
```bash
pnpm dev
```
本地访问地址为 `http://localhost:4321`，支持实时热更新与瞬时预览。

### 4. 生产环境静态打包构建
```bash
pnpm build
```
构建产物将输出至 `./dist/` 目录，可一键部署至任何静态托管平台（Cloudflare Pages、Vercel、Netlify 或 Nginx）。

### 5. 本地预览打包产物
```bash
pnpm preview
```

---

## 📈 部署与上线指南 (Cloudflare Pages 推荐)

1. 将本代码仓库推送到 GitHub；
2. 登录 **Cloudflare Dashboard** -> 进入 **Workers & Pages** -> 点击 **Create Application** -> 选择 **Pages** 并连接 GitHub 仓库；
3. 构建配置：
   * **Framework preset**: `Astro`
   * **Build command**: `pnpm build`
   * **Build output directory**: `dist`
   * **Root directory**: `/` (或留空)
   * **Environment variable**: `NODE_VERSION` = `22.12.0`
4. 点击 **Save and Deploy** 即可完成全球 Anycast CDN 极速分发。

---

## 📄 开源许可与合规声明

本项目遵循 [MIT License](LICENSE) 协议开源。

> **免责声明**：本站所有评测数据均基于小火箭实验室实测网络环境及公开可查之公开资料编纂，仅供网络工程技术研究、学术交流与合规跨境办公选型参考。严禁将本站信息用于任何违反中华人民共和国法律法规及当地网络监管政策的活动。
