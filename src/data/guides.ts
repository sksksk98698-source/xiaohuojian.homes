// 小火箭 (xiaohuojian.homes) — /guides 场景化专线选型与网络工程专著级数据源
// 数据核实基准：2026-10-19 品牌实测记录 & 2026-08-11 MAI-TEST-BOT 抓包档案 | 页面更新日期：2026-11-07

export interface QuickScenarioPick {
  scenarioId: string;
  scenarioName: string;
  corePainPoint: string;
  primaryPick: {
    id: string;
    name: string;
    reason: string;
    priceInfo: string;
  };
  alternativePicks: Array<{
    id: string;
    name: string;
    positioning: string;
    priceInfo: string;
  }>;
  keyMetricsRequired: string;
  avoidPitfall: string;
}

export interface CoreComparisonRow {
  id: string;
  name: string;
  rank: number;
  monthlyRealPrice: string;
  annualConvertedPrice: string;
  billingCycles: string;
  trafficRange: string;
  multiplier: string;
  deviceLimit: string;
  lineArchitecture: string;
  protocols: string;
  clientMode: string;
  ipAndUnlock: string;
  bestScenarios: string;
  mainLimitations: string;
  dataSource: string;
  verifiedDate: string;
}

export interface BrandMonographProfile {
  id: string;
  name: string;
  rank: number;
  badge: string;
  affUrl: string;
  coupon: string;
  couponRule: string;
  foundedYear: string;
  lineType: string;
  protocol: string;
  clientMode: string;
  monthlyRealPrice: string;
  annualConvertedPrice: string;
  permanentPlanInfo: string;
  speedtestSummary: string;
  speedtestImage?: string;
  unlockImage?: string;
  recommendationBasis: string;
  suitableFor: string[];
  unsuitableFor: string[];
  actualCostBreakdown: string;
  keyLimitations: string[];
  peerComparison: string;
  verifiedDate: string;
  dataSourceType: string;
}

export interface GuideSubSection {
  id: string;
  title: string;
  whatAndWhen: string;
  howToJudgeAndOperate: string;
  conditionsAndLimits: string;
  nextAction: string;
  codeOrRuleSnippet?: string;
}

export interface GuideTopic {
  slug: string;
  number: string;
  title: string;
  tag: string;
  searchIntent: string;
  targetAudience: string;
  coreConclusion: string;
  summary: string;
  recommendedAirports: string[];
  subSections: GuideSubSection[];
  scenarioComparisonNote: string;
}

export const quickScenarioPicks: QuickScenarioPick[] = [
  {
    scenarioId: "ai-chatgpt-claude-unlock",
    scenarioName: "AI 大模型高频生产力（ChatGPT Plus / Claude 3.5 / Gemini）",
    corePainPoint: "频繁触发 Cloudflare 盾、OpenAI 报错 Access Denied、Claude 账号无故封禁、PoW 算力降智导致回答质量断崖下跌",
    primaryPick: {
      id: "guangsu",
      name: "光速云",
      reason: "IEPL 专线结合企业级内网双架构，Claude 实测全节点免降级支持，香港 22ms / 新加坡 46ms 低延迟保障 API 与网页流式响应",
      priceInfo: "月付实价 ¥25/月(168GB)；年付轻量版 ¥99/年(折算约 ¥8.25/月，69GB/月)；另有 ¥147/247GB 永久套餐"
    },
    alternativePicks: [
      { id: "muguang", name: "暮光加速", positioning: "ChatGPT 与 Claude 双平台实测支持，BGP 智能调度适合多设备团队", priceInfo: "月付 ¥20/月(120GB)；年付 ¥109/年(70GB/月)" },
      { id: "sujie", name: "速界", positioning: "25元档唯一在品牌资料中明确主打 ChatGPT/Claude/Gemini 三栖场景", priceInfo: "月付 ¥25/月(150GB)，支持自研与第三方客户端" },
      { id: "jilian", name: "极连云", positioning: "18元入门档明确覆盖常见 AI 工具使用场景，含 IEPL 专线", priceInfo: "月付 ¥18/月(100GB)" }
    ],
    keyMetricsRequired: "出口 IP 纯净度（低 Fraud Score）、DNS 防泄漏（Remote DNS / Fake-IP）、固定节点绑定防跨国漂移",
    avoidPitfall: "严禁开『自动选择（URL-Test）』跑 Claude 或 ChatGPT，节点在港澳日美之间频繁跳动会直接触发异地盗号风控锁号。"
  },
  {
    scenarioId: "streaming-4k-netflix-disney",
    scenarioName: "4K / 8K 海外流媒体全区解锁（Netflix / Disney+ / YouTube / HBO Max）",
    corePainPoint: "Netflix 只能看自制剧（非全区版权库）、晚高峰 20:00–23:00 缓冲转圈、Disney+ 报错 Error Code 73 区域限制",
    primaryPick: {
      id: "guangsu",
      name: "光速云",
      reason: "实测香港下行峰值达 529Mbps、新加坡 387Mbps，原生支持 Netflix 非自制剧、Disney+、YouTube 4K 及 HBO Max",
      priceInfo: "月付 ¥25/月(168GB) 极速版全节点 1 倍率，单节点最高 2.5Gbps 带宽冗余"
    },
    alternativePicks: [
      { id: "feimao", name: "飞猫云", positioning: "香港实测 526Mbps / 新加坡 413Mbps，专属客户端免配置即连", priceInfo: "学生版年付 ¥84/年(折算 ¥7/月，50GB/月)；月付 ¥25/月(150GB)" },
      { id: "weifeng", name: "微风网络", positioning: "IEPL 专线 + 多地原生 IP，香港实测 546Mbps，全流媒体绿灯", priceInfo: "年付 ¥137/年(100GB/月)；月付 ¥27/月(200GB)" },
      { id: "xingdaomeng", name: "星岛梦", positioning: "2020年老牌 IEPL，1倍流量不限设备，适合家庭 Apple TV 共享", priceInfo: "年付 ¥96/年(60GB/月)；月付 ¥25/月(150GB)" }
    ],
    keyMetricsRequired: "晚高峰单线程突发吞吐量（≥100Mbps 保障 4K HDR 不掉帧）、原生 ISP/DNS 解锁机制、1 倍真实流量计费",
    avoidPitfall: "警惕高倍率（2x/3x）专线节点：一部 90 分钟 4K 电影约消耗 15GB–25GB，若误连 3 倍率节点一次即扣除 60GB+ 流量。"
  },
  {
    scenarioId: "cross-border-tiktok-ecommerce",
    scenarioName: "跨境电商与 TikTok 海外直播运营（Amazon / Shopee / 独立站）",
    corePainPoint: "TikTok 视频 0 播放限流、直播间频繁断流卡顿、多店铺登录触发关联二审、共享机房 IP 被黑名单连坐",
    primaryPick: {
      id: "guangsu",
      name: "光速云（极速版 / 定制独享版）",
      reason: "覆盖港台日新美马英法德土泰巴等 12+ 国家地区，提供 ¥680/月全 IPLC 独享原生 IP 与独立带宽一对一部署方案",
      priceInfo: "公共专线 ¥25/月起；定制独享原生 IP 方案 ¥680/月(500GB，7×24专属运维)"
    },
    alternativePicks: [
      { id: "wuyou", name: "无忧链接", positioning: "明确面向跨境电商与轻度用户，支持 TikTok 跨区直连，全线无倍率", priceInfo: "年付 ¥79/年(折算 ¥6.58/月，40GB/月)；月付 ¥19/月(100GB)" },
      { id: "muguang", name: "暮光加速", positioning: "支持多设备同时在线与 ¥600/月独享私人定制节点，7×24真人客服", priceInfo: "月付 ¥20/月起；独享私人定制节点 ¥600/月(500GB)" },
      { id: "quanqiu", name: "全球云", positioning: "全球 60+ 节点覆盖，同样提供 ¥680/月独享私人专线节点", priceInfo: "月付 ¥20/月(120GB)；独享私人专线 ¥680/月(500GB)" }
    ],
    keyMetricsRequired: "长时连接零闪断（0% 丢包）、目标国本土原生 IP（如英美东南亚）、WebRTC 与系统时区/DNS 完全一致",
    avoidPitfall: "切勿用几元钱的超低价千人共享节点直接登录 Amazon 卖家主账号或进行 TikTok 商业投流，共享出口黑历史极易引发风控。"
  },
  {
    scenarioId: "iepl-vs-iplc-architecture",
    scenarioName: "高可用物理专线与抗封锁需求（IEPL / IPLC 内网穿透）",
    corePainPoint: "特殊时期或晚高峰公网中转大面积断联、运营商针对 UDP/跨境大流量实施严厉 QoS 限速与特征阻断",
    primaryPick: {
      id: "firefly",
      name: "Firefly（萤火）",
      reason: "纯 IPLC 专线接入，香港 547Mbps / 新加坡 445Mbps / 美国 30Mbps，配备免翻墙官网直连与海外技术团队维护",
      priceInfo: "年付 ¥96/年(折算 ¥8/月，60GB/月)；月付 Lite ¥25/月(150GB)"
    },
    alternativePicks: [
      { id: "guangsu", name: "光速云", positioning: "IEPL 专线 + 企业级内网双架构，VLESS 协议配合第三方订阅与自研双端", priceInfo: "年付 ¥99/年；月付 ¥25/月；永久包 ¥147" },
      { id: "weitu", name: "唯兔云", positioning: "IPLC 专线 + Trojan 协议，60+节点三网优化与智能负载均衡", priceInfo: "限时月付 ¥14.9/月(100GB)；常规月付 ¥19.9/月(150GB)" },
      { id: "yifan", name: "一翻云", positioning: "全节点 IEPL 物理专线 + Hysteria2 / VLESS-Reality / SS 三协议可选", priceInfo: "年付 ¥98/年(60GB/月)；月付 ¥20/月(150GB)；不限时包 ¥100起" }
    ],
    keyMetricsRequired: "国内三网 BGP 入口（北上广深就近接入）、过境段物理内网隔离（绕过公网 GFW 审查）、TLS 握手 RTT 稳定无毛刺",
    avoidPitfall: "注意区分『支持通用订阅导入』与『仅限官方自研客户端』：如 Firefly、SOGO云、隐形人仅支持专属客户端，软路由用户需避开。"
  },
  {
    scenarioId: "remote-dev-gaming-low-latency",
    scenarioName: "跨国远程研发办公、GitHub/Docker 拉取与低延迟联机",
    corePainPoint: "SSH 终端敲代码卡顿断连、Git Clone / Docker Pull 速度仅几 KB/s、WSL2 与命令行终端无法走普通系统代理",
    primaryPick: {
      id: "guangsu",
      name: "光速云",
      reason: "支持导出标准 Clash 与 Shadowrocket 订阅，完美配合 Clash Verge Rev 开启 TUN 虚拟网卡模式接管全局终端流量",
      priceInfo: "月付 ¥25/月(168GB) 或 ¥147 永久流量包作为开发者长效护航备份"
    },
    alternativePicks: [
      { id: "ermao", name: "二猫云", positioning: "全线 IEPL + VLESS，香港 22ms / 美国 134ms，支持不限时套餐与通用订阅", priceInfo: "年付 ¥89/年(60GB/月)；月付 ¥20/月(130GB)；不限时 ¥99/100GB" },
      { id: "tiziyun", name: "梯子云", positioning: "自研全平台客户端与通用订阅双支持，2Gbps+带宽含500Mbps高峰冗余", priceInfo: "年付折算约 ¥7.4/月(60GB/月)" },
      { id: "dalaoyun", name: "大佬云", positioning: "5.6元档极限平价 IEPL+VLESS，支持第三方订阅，适合作为第二条冗余备份线", priceInfo: "年付折算约 ¥5.6/月(60GB/月)" }
    ],
    keyMetricsRequired: "必须支持第三方通用订阅（Clash YAML / V2Ray / Sing-box）、支持 TUN 网卡层接管、近端节点 RTT < 30ms",
    avoidPitfall: "需要配置软路由（OpenClash/PassWall）或在 Linux 服务器上运行 v2rayA 的开发者，必须选择开放通用订阅链接的品牌。"
  }
];

export const coreComparisonRows: CoreComparisonRow[] = [
  {
    id: "guangsu",
    name: "光速云",
    rank: 1,
    monthlyRealPrice: "¥25/月 (极速版 168GB)",
    annualConvertedPrice: "¥99/年 (折算 ¥8.25/月，69GB/月)；另有 ¥147 永久 247GB",
    billingCycles: "月付 / 半年9折 / 年付8折 / 永久一次性",
    trafficRange: "69GB–900GB/月 (定制版 500GB)",
    multiplier: "全节点 1 倍率",
    deviceLimit: "不限设备同时在线",
    lineArchitecture: "IEPL 专线 + 企业级内网专线",
    protocols: "VLESS (实测含 Shadowsocks)",
    clientMode: "自研客户端 + 第三方订阅 (Clash/小火箭)",
    ipAndUnlock: "Claude/Netflix/Disney+/YouTube/TikTok 支持；ChatGPT/Gemini 视节点而定",
    bestScenarios: "全能主力、AI生产力、4K流媒体、TikTok跨境直播、永久备用",
    mainLimitations: "特殊商品不支持退款；部分 AI 需切换指定节点",
    dataSource: "品牌资料原文 + 2026-10-19/08-11 实验室实测",
    verifiedDate: "2026-10-19"
  },
  {
    id: "muguang",
    name: "暮光加速",
    rank: 2,
    monthlyRealPrice: "¥20/月 (基础版 120GB)",
    annualConvertedPrice: "¥109/年 (折算 ¥9.08/月，70GB/月)；不限时 ¥219/150GB起",
    billingCycles: "月付 / 年付 / 一次性不限时",
    trafficRange: "70GB–1500GB/月",
    multiplier: "1 倍率",
    deviceLimit: "支持多设备同时在线",
    lineArchitecture: "BGP 智能调度 + 专线级出口",
    protocols: "Shadowsocks (实测记录)",
    clientMode: "覆盖 Win/Mac/iOS/Android/Linux 全平台",
    ipAndUnlock: "ChatGPT/Claude/Netflix/Disney+/YouTube/TikTok 支持；Gemini 视节点",
    bestScenarios: "跨平台团队协作、多设备家庭、AI 与流媒体综合使用",
    mainLimitations: "标准月付 20 元起，高于纯低价入门盘",
    dataSource: "品牌资料原文 + 2026-10-19/08-11 实验室实测",
    verifiedDate: "2026-10-19"
  },
  {
    id: "feimao",
    name: "飞猫云",
    rank: 3,
    monthlyRealPrice: "¥25/月 (星耀版 150GB)",
    annualConvertedPrice: "¥84/年 (学生版折算 ¥7/月，50GB/月)；不限时 ¥680/1TB",
    billingCycles: "年付 / 月付 / 一次性不限时",
    trafficRange: "50GB–1000GB/月",
    multiplier: "1 倍率",
    deviceLimit: "多设备支持（以客户端为准）",
    lineArchitecture: "亚太与欧美多地区优化线路",
    protocols: "Shadowsocks (实测记录)",
    clientMode: "专属客户端登录即用（免配订阅）",
    ipAndUnlock: "ChatGPT/Claude/Netflix/Disney+/YouTube/TikTok 支持；Gemini 视节点",
    bestScenarios: "零基础新手免配置上手、学生党轻度日常、流媒体观看",
    mainLimitations: "走专属客户端模式，不适合依赖软路由自定义分流的极客",
    dataSource: "品牌资料原文 + 2026-10-19/08-11 实验室实测",
    verifiedDate: "2026-10-19"
  },
  {
    id: "weifeng",
    name: "微风网络",
    rank: 4,
    monthlyRealPrice: "¥27/月 (乘风 200GB)",
    annualConvertedPrice: "¥137/年 (清风折算 ¥11.4/月，100GB/月)；不限时 ¥200/270GB",
    billingCycles: "年付 / 月付 / 一次性不限时",
    trafficRange: "100GB–1200GB/月",
    multiplier: "1 倍率",
    deviceLimit: "常规多端支持",
    lineArchitecture: "IEPL 专线 + 多地原生 IP",
    protocols: "VLESS / Shadowsocks",
    clientMode: "支持通用订阅客户端",
    ipAndUnlock: "ChatGPT/Claude/Netflix/Disney+/YouTube/TikTok 支持；Gemini 视节点",
    bestScenarios: "高性价比 IEPL 专线入门、香港高带宽下载(实测546Mbps)",
    mainLimitations: "入门年付档总价 137 元高于 80 元级小包，夜间为 AI 客服值守",
    dataSource: "品牌资料原文 + 2026-10-19/08-11 实验室实测",
    verifiedDate: "2026-10-19"
  },
  {
    id: "dalaoyun",
    name: "大佬云",
    rank: 5,
    monthlyRealPrice: "待核实 (主打年付/季付折算)",
    annualConvertedPrice: "折算约 ¥5.6/月 (60GB/月，季付及以上7折)",
    billingCycles: "季付 / 年付",
    trafficRange: "60GB/月起",
    multiplier: "1 倍率 (品牌资料)",
    deviceLimit: "待核实",
    lineArchitecture: "IEPL 专线",
    protocols: "VLESS",
    clientMode: "自研客户端 + 第三方订阅导入",
    ipAndUnlock: "基础流媒体与日常访问（未提供独立实测表，建议实测验证）",
    bestScenarios: "极限低预算入门、第二条冗余防失联备用梯",
    mainLimitations: "与闪电鼠/云界线/榴莲云/环球梯同属5.6元同质化方案，缺少独有差异点",
    dataSource: "品牌资料原文 (Vendor Data)",
    verifiedDate: "2026-10-19"
  },
  {
    id: "xingdaomeng",
    name: "星岛梦",
    rank: 6,
    monthlyRealPrice: "¥25/月 (超量 150GB)",
    annualConvertedPrice: "¥96/年 (贴心小包折算 ¥8/月，60GB/月)；不限时 ¥100/100GB起",
    billingCycles: "年付 / 月付 / 永久不限时",
    trafficRange: "60GB–1000GB/月",
    multiplier: "1 倍流量",
    deviceLimit: "不限设备使用",
    lineArchitecture: "IEPL 专线 (覆盖港台日美新韩及东南亚)",
    protocols: "Trojan / Shadowsocks",
    clientMode: "通用订阅支持",
    ipAndUnlock: "ChatGPT/Claude/Netflix/Disney+/YouTube/TikTok 支持；Gemini 视节点",
    bestScenarios: "2020年老牌稳定派、多设备家庭共享、东南亚地区节点需求",
    mainLimitations: "月付起步 25 元属于中规中矩专线定价",
    dataSource: "品牌资料原文 + 2026-10-19/08-11 实验室实测",
    verifiedDate: "2026-10-19"
  },
  {
    id: "ermao",
    name: "二猫云",
    rank: 7,
    monthlyRealPrice: "¥20/月 (白猫套餐 130GB)",
    annualConvertedPrice: "¥89/年 (年付小包折算 ¥7.42/月，60GB/月)；不限时 ¥99/100GB",
    billingCycles: "年付 / 月付 / 一次性不限时",
    trafficRange: "60GB–850GB/月",
    multiplier: "1 倍率",
    deviceLimit: "账号不限设备连接数",
    lineArchitecture: "全线 IEPL 专线",
    protocols: "VLESS / Shadowsocks",
    clientMode: "配备独家定制客户端 + 通用支持",
    ipAndUnlock: "ChatGPT/Netflix/Disney+/YouTube/TikTok 支持；Claude/Gemini 视节点",
    bestScenarios: "反跑路长期稳定诉求、多设备并发、低延迟美西(实测134ms)",
    mainLimitations: "Claude 与 Gemini 需视具体节点而定，建议先小额实测",
    dataSource: "品牌资料原文 + 2026-10-19/08-11 实验室实测",
    verifiedDate: "2026-10-19"
  },
  {
    id: "wuyou",
    name: "无忧链接",
    rank: 8,
    monthlyRealPrice: "¥19/月 (舒心链接 100GB)",
    annualConvertedPrice: "¥79/年 (MINI链接折算 ¥6.58/月，40GB/月)；不限时 ¥108/100GB",
    billingCycles: "年付 / 月付 / 永久不限时",
    trafficRange: "40GB–1000GB/月",
    multiplier: "全线无倍率",
    deviceLimit: "不限设备数量",
    lineArchitecture: "跨境优化专线 (港新日美)",
    protocols: "自适应协议 (专属客户端)",
    clientMode: "2026年10月起采用官方专属客户端登录即用",
    ipAndUnlock: "ChatGPT/Claude/Netflix/Disney+/YouTube/TikTok 支持；Gemini 视节点",
    bestScenarios: "TikTok 跨区直连、跨境电商辅助、6.5元档超低门槛年付",
    mainLimitations: "MINI年付包每月仅 40GB 流量，不适合重度 4K 视频消耗",
    dataSource: "品牌资料原文 + 2026-10-19/09-07 实验室实测",
    verifiedDate: "2026-10-19"
  },
  {
    id: "weitu",
    name: "唯兔云",
    rank: 9,
    monthlyRealPrice: "¥14.9/月 (节假日限时 100GB) / ¥19.9/月 (普通版 150GB)",
    annualConvertedPrice: "¥79.9/年 (限量款折算 ¥6.66/月，45GB/月)；永久 ¥100/100GB起",
    billingCycles: "年付 / 月付 / 永久不限时",
    trafficRange: "45GB–1000GB/月",
    multiplier: "1 倍流量",
    deviceLimit: "不限设备连接",
    lineArchitecture: "IPLC 专线 + 60+节点三网优化负载均衡",
    protocols: "Trojan / Shadowsocks",
    clientMode: "支持通用订阅导入",
    ipAndUnlock: "ChatGPT/Claude/Netflix/Disney+/YouTube/TikTok 支持；Gemini 视节点",
    bestScenarios: "15元中档位 IPLC 专线、三网负载均衡、个人与小团队",
    mainLimitations: "79.9元/年限量款每月仅45GB，常规主力建议选14.9元或19.9元月付",
    dataSource: "品牌资料原文 + 2026-10-19/08-11 实验室实测",
    verifiedDate: "2026-10-19"
  },
  {
    id: "firefly",
    name: "Firefly (萤火)",
    rank: 10,
    monthlyRealPrice: "¥25/月 (Firefly Lite 150GB，可用8折码 firefly 折后 ¥20)",
    annualConvertedPrice: "¥96/年 (折算 ¥8/月，60GB/月，年付不适用折扣码)；不限时 ¥100/100GB",
    billingCycles: "年付 / 月付 / 一次性不限时",
    trafficRange: "60GB–1000GB/月",
    multiplier: "1 倍率",
    deviceLimit: "不限客户端及设备数量",
    lineArchitecture: "纯 IPLC 专线接入 + 原生 IP",
    protocols: "VLESS",
    clientMode: "专属客户端登录即用（不提供第三方订阅链接）",
    ipAndUnlock: "ChatGPT/Claude/Netflix/Disney+/YouTube/TikTok 支持；Gemini 视节点",
    bestScenarios: "看重晚高峰 IPLC 稳定性的 AI 办公与追剧用户、免翻墙访问官网",
    mainLimitations: "不提供通用订阅链接，无法在 Shadowrocket 或软路由中手动导入",
    dataSource: "品牌资料原文 + 2026-10-19 实验室实测",
    verifiedDate: "2026-10-19"
  },
  {
    id: "u1s1",
    name: "U1S1",
    rank: 12,
    monthlyRealPrice: "¥20/月 (普通人真够了包 120GB)",
    annualConvertedPrice: "¥96/年 (就是好用包折算 ¥8/月，60GB/月)",
    billingCycles: "年付 / 月付",
    trafficRange: "60GB–1500GB/月",
    multiplier: "1 倍率",
    deviceLimit: "不限设备同时连接",
    lineArchitecture: "IPLC 专线 (官方宣称 2000Mbps 带宽)",
    protocols: "Shadowsocks (实测记录)",
    clientMode: "支持通用订阅导入",
    ipAndUnlock: "ChatGPT/Claude/Netflix/Disney+/YouTube/TikTok 支持；Gemini 视节点",
    bestScenarios: "大带宽高速下载(香港实测538Mbps)、弹性大流量需求",
    mainLimitations: "2025年新上线品牌，长期跨年稳定性仍需时间观察，建议月付切入",
    dataSource: "品牌资料原文 + 2026-10-19/08-11 实验室实测",
    verifiedDate: "2026-10-19"
  },
  {
    id: "yifan",
    name: "一翻云",
    rank: 16,
    monthlyRealPrice: "¥20/月 (轻享版 150GB)",
    annualConvertedPrice: "¥98/年 (年付小包折算 ¥8.17/月，60GB/月)；不限时 ¥100/100GB起",
    billingCycles: "月付 / 年付 / 一次性不限时",
    trafficRange: "60GB–1.2TB/月",
    multiplier: "1 倍率",
    deviceLimit: "不限设备数量",
    lineArchitecture: "全节点 IEPL 物理专线 + 原生住宅 IP",
    protocols: "Hysteria 2 / VLESS-Reality / Shadowsocks 三协议",
    clientMode: "广泛兼容第三方通用客户端",
    ipAndUnlock: "ChatGPT/Claude/Netflix/Disney+/YouTube/TikTok 支持；Gemini 视节点",
    bestScenarios: "协议极客(需 Hysteria2 / Reality)、不限时流量包爱好者",
    mainLimitations: "2025年运营新锐品牌，官方未提供免费试用",
    dataSource: "品牌资料原文 + 2026-10-19/08-11 实验室实测",
    verifiedDate: "2026-10-19"
  },
  {
    id: "sogo",
    name: "SOGO云",
    rank: 17,
    monthlyRealPrice: "¥25/月 (基础版 150GB)",
    annualConvertedPrice: "¥98/年 (小包年付折算 ¥8.17/月，60GB/月)；不限时 ¥120/120GB起",
    billingCycles: "年付 / 月付 / 一次性不限时",
    trafficRange: "60GB–1.1TB/月",
    multiplier: "1 倍率",
    deviceLimit: "不限设备数量",
    lineArchitecture: "全线 IEPL 专线 + 三网 BGP 优化 (覆盖15国)",
    protocols: "VLESS (实测含 Shadowsocks)",
    clientMode: "专属客户端登录即用（不提供订阅链接）",
    ipAndUnlock: "ChatGPT/Netflix/Disney+/YouTube/TikTok 支持；Claude/Gemini/HBO 视节点",
    bestScenarios: "需要 15 个国家/地区多国节点切换、偏好自研客户端",
    mainLimitations: "不支持导出 Clash/Shadowrocket 第三方订阅；Claude 需挑节点",
    dataSource: "品牌资料原文 + 2026-10-19/08-11 实验室实测",
    verifiedDate: "2026-10-19"
  },
  {
    id: "sujie",
    name: "速界",
    rank: 19,
    monthlyRealPrice: "¥25/月 (150GB/月)",
    annualConvertedPrice: "待核实 (主打 ¥25/月 150GB 标准档)",
    billingCycles: "月付 / 周期付",
    trafficRange: "150GB/月起",
    multiplier: "1 倍率",
    deviceLimit: "待核实",
    lineArchitecture: "IEPL 专线",
    protocols: "VLESS / Shadowsocks",
    clientMode: "自研客户端 + 第三方订阅导入",
    ipAndUnlock: "品牌资料明确强调 ChatGPT、Claude、Gemini 等 AI 场景",
    bestScenarios: "25元档专门针对 AI 生产力工具的定向选型",
    mainLimitations: "官方亦诚实提醒 AI 可用性受平台风控影响，不承诺永久免切换",
    dataSource: "品牌资料原文 + 2026-08-11 测速实测",
    verifiedDate: "2026-10-19"
  },
  {
    id: "shanyue",
    name: "闪跃",
    rank: 20,
    monthlyRealPrice: "¥24/月 (闪动 Flicker 150GB，可用8折码 shanyue 折后 ¥19.2)",
    annualConvertedPrice: "¥96/年 (折算 ¥8/月，60GB/月，年付不适用8折码)",
    billingCycles: "年付 / 月付",
    trafficRange: "60GB–1000GB/月",
    multiplier: "1 倍率",
    deviceLimit: "多设备支持",
    lineArchitecture: "纯 IPLC 专线 + 骨干网接入",
    protocols: "原文未标注",
    clientMode: "专属客户端登录即用（不提供订阅链接）",
    ipAndUnlock: "ChatGPT/Claude/Netflix/Disney+/HBO/TikTok 支持；Gemini 视节点",
    bestScenarios: "香港极速下载(实测548Mbps)、晚高峰纯 IPLC 追剧与办公",
    mainLimitations: "仅限官方专属客户端使用，不支持第三方订阅导出",
    dataSource: "品牌资料原文 + 2026-10-19 实验室实测",
    verifiedDate: "2026-10-19"
  },
  {
    id: "tiziyun",
    name: "梯子云",
    rank: 28,
    monthlyRealPrice: "待核实 (资料记录以年付折算为主)",
    annualConvertedPrice: "折算约 ¥7.4/月 (60GB/月，优惠码 tiziyun)",
    billingCycles: "年付 / 月付",
    trafficRange: "60GB/月起",
    multiplier: "1 倍率",
    deviceLimit: "多设备支持",
    lineArchitecture: "IEPL 专线 (60+节点，2Gbps+带宽含500M冗余)",
    protocols: "VLESS",
    clientMode: "自研全平台客户端 + 支持通用订阅双模式",
    ipAndUnlock: "品牌资料显示解锁 Netflix/Disney+/TikTok 及 ChatGPT/Claude (Vendor Data)",
    bestScenarios: "既想要小白一键登录客户端、又想保留小火箭/Clash 订阅自由的用户",
    mainLimitations: "2025年新品牌，解锁表现为品牌方资料声明(Vendor Data)，需实测核验",
    dataSource: "品牌资料原文 (Vendor Data)",
    verifiedDate: "2026-10-19"
  }
];

// 核心品牌集中档案（每个品牌集中深度剖析一次，场景章节通过锚点引用，避免机械重复）
export const brandMonographProfiles: BrandMonographProfile[] = [
  {
    id: "guangsu",
    name: "光速云 (Guangsu Cloud)",
    rank: 1,
    badge: "🏆 实验室全场景第一主推",
    affUrl: "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    coupon: "AMM",
    couponRule: "新人优惠券码 AMM；极速版及定制版支持半年9折 / 年付8折 / 两年75折 / 三年7折（轻量版与147永久套餐不打折）",
    foundedYear: "2020年运营",
    lineType: "IEPL 专线 + 企业级内网专线（双线路架构）",
    protocol: "VLESS（实测抓包兼容 Shadowsocks）",
    clientMode: "提供官方自研客户端，同时支持导出 Clash、Shadowrocket 等第三方订阅（具体导入可联系24h客服）",
    monthlyRealPrice: "极速版 ¥25/月（168GB/月）；流光版 ¥34/月（268GB/月）；量子版 ¥68/月（568GB/月）；无界版 ¥138/月（900GB/月）；定制版 ¥680/月（500GB/月独享原生IP+独立带宽）",
    annualConvertedPrice: "轻量版 ¥99/年（折算平均约 ¥8.25/月，含 69GB/月）",
    permanentPlanInfo: "致敬斯诺克147永久套餐：¥147 一次性付费，含 247GB 永久不过期流量（单节点最高 2.5Gbps）",
    speedtestSummary: "2026-10-19 实测：香港 22ms / 529Mbps、新加坡 46ms / 387Mbps、日本 57ms / 135Mbps、台湾 41ms / 114Mbps、美国 143ms / 18Mbps；另附 2026-08-11 MAI-TEST-BOT 实测图与 5 张流媒体解锁实拍图。",
    speedtestImage: "/images/reviews/guangsu-speedtest-2026.png",
    unlockImage: "/images/reviews/guangsu-unlock-matrix-01.jpg",
    recommendationBasis: "在 42 家被测品牌中，光速云是极少数同时满足『2020年老牌跨周期存活』『IEPL+IPLC企业内网双架构』『自研客户端与第三方订阅双轨并行』『99元低门槛年付到680元独享原生IP全梯度覆盖』的综合型旗舰。香港×20、台湾×5、日本×10、新加坡×10、美国×10、马来西亚×2及英法德土泰巴共 12+ 国家地区节点分布，使其在 AI 办公、4K 影音与 TikTok 跨境直播三个维度均具备实测支撑。",
    suitableFor: [
      "追求晚高峰（20:00–23:00）低延迟与高吞吐稳定性的主力重度用户",
      "高频使用 Claude、Netflix、Disney+、YouTube 4K 及 TikTok 跨区运营的个人与团队",
      "需要『¥147/247GB 永久不过期套餐』作为第二条防失联长效备份的开发者",
      "需要一对一部署独享原生 IP 与 2.5Gbps 独立带宽的跨境电商/直播工作室（定制版）"
    ],
    unsuitableFor: [
      "期望所有节点 100% 免切换直接裸连 ChatGPT / Gemini 且不愿手动挑选原生节点的极度懒人用户",
      "未做月付实测就盲目冲动消费大额周期、且要求无理由退款的用户（官方规定特殊商品不支持退款）"
    ],
    actualCostBreakdown: "务必区分『年付折算价』与『普通月付价』：官方宣传的约 8 元/月是指轻量版（¥99/年，每月69GB）除以12个月后的折算均价，并非可以花 8 元单买一个月。若想按月单买体验，最低门槛为极速版 ¥25/月（168GB）。",
    keyLimitations: [
      "ChatGPT 与 Gemini 属于『视节点而定』，遇到风控验证码时需在客户端内切换至美国、台湾或新加坡原生节点",
      "轻量版（¥99/年）与致敬斯诺克147永久套餐（¥147）不参与折扣码折上折活动",
      "特殊虚拟商品一经开通不支持退款，强烈建议新用户先从 ¥25 月付或小额套餐验证本地宽带兼容性"
    ],
    peerComparison: "相比同为 2020 年运营的星岛梦（¥96/年 60GB），光速云额外提供了自研客户端、247GB 永久套餐及英法德土巴等欧洲南美冷门落地；相比只支持专属客户端的 Firefly 与 SOGO 云，光速云保留了 Clash 与 Shadowrocket 第三方订阅导入能力，对极客与软路由用户更加友好。",
    verifiedDate: "2026-10-19",
    dataSourceType: "品牌资料原文 + 实验室 2026-10-19 / 2026-08-11 实测档案"
  },
  {
    id: "muguang",
    name: "暮光加速 (Twilight)",
    rank: 2,
    badge: "🥈 多设备并发与团队协同首选",
    affUrl: "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    coupon: "muguang5555",
    couponRule: "品牌清单收录专属优惠码 muguang5555（下单前建议向 7×24 小时在线客服核对当期活动抵扣比例）",
    foundedYear: "2023年运营",
    lineType: "BGP 智能调度 + 专线级出口",
    protocol: "Shadowsocks（2026-08-11 实测抓包记录）",
    clientMode: "覆盖 Windows、macOS、iOS、Android、Linux 全平台，支持多设备同时在线",
    monthlyRealPrice: "基础版 ¥20/月（120GB）；标准版 ¥40/月（240GB）；旗舰版 ¥100/月（700GB）；至尊版 ¥180/月（1500GB）；独享私人定制节点 ¥600/月（500GB）",
    annualConvertedPrice: "年付轻量版 ¥109/年（折算约 ¥9.08/月，含 70GB/月）",
    permanentPlanInfo: "不限时轻量包 ¥219（150GB）；不限时标准包 ¥529（400GB）；不限时大容量包 ¥959（800GB）",
    speedtestSummary: "2026-10-19 实测：香港 26ms / 509Mbps、新加坡 43ms / 419Mbps、日本 53ms / 150Mbps、台湾 40ms / 107Mbps、美国 160ms / 19Mbps。",
    speedtestImage: "/images/reviews/muguang-speedtest-2026.png",
    recommendationBasis: "暮光加速的核心优势在于『ChatGPT + Claude 双 AI 原生支持』与『120GB 至 1500GB 超宽流量矩阵 + 全平台多设备并发』。实测香港与新加坡双双突破 400–500Mbps，且配备 7×24 小时真人客服与 ¥600/月独享节点方案。",
    suitableFor: [
      "拥有手机、平板、笔记本、台式机等多台设备需同时在线的个人或家庭用户",
      "需要稳定访问 ChatGPT 与 Claude 进行日常代码辅助与文案创作的远程办公团队",
      "月流量消耗在 240GB–1500GB 之间的中重度多媒体与跨境协作团队"
    ],
    unsuitableFor: [
      "预算卡死在 5–6 元/月的超低价猎奇用户",
      "对一次性不限时流量包单价敏感的用户（其不限时包 ¥219/150GB 单价高于光速云 ¥147/247GB）"
    ],
    actualCostBreakdown: "月付实价最低 ¥20/月（120GB）；若追求低月均成本，可选择年付轻量版 ¥109/年（折合 ¥9.08/月，每月 70GB）。",
    keyLimitations: [
      "Gemini 解锁状态为『视节点而定』，使用 Google AI Studio 时建议优先固定美国或新加坡节点",
      "一次性不限时流量包定价偏高（¥219/150GB），若仅需不限时备用，性价比不如光速云或二猫云"
    ],
    peerComparison: "与同为 20 元月付档的二猫云（¥20/130GB）相比，暮光加速在实测中明确支持 Claude 解锁（二猫云 Claude 视节点而定），且暮光提供了最高 1500GB 的商业级大流量月付档。",
    verifiedDate: "2026-10-19",
    dataSourceType: "品牌资料原文 + 实验室 2026-10-19 / 2026-08-11 实测档案"
  },
  {
    id: "feimao",
    name: "飞猫云 (FlyCat)",
    rank: 3,
    badge: "🥉 零门槛专属客户端新手首选",
    affUrl: "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    coupon: "flycat888",
    couponRule: "专属优惠码 flycat888（享 8 折优惠，学生版特价年付除外）",
    foundedYear: "2023年运营",
    lineType: "亚太与欧美多地区优化线路",
    protocol: "Shadowsocks（2026-08-11 实测记录）",
    clientMode: "官方专属客户端下载登录即用（免配置订阅链接）",
    monthlyRealPrice: "星耀版 ¥25/月（150GB）；星环版 ¥45/月（300GB）；银河版 ¥85/月（600GB）；宇宙版 ¥150/月（1000GB）；定制套餐 ¥550/月（500GB）",
    annualConvertedPrice: "学生版 ¥84/年（折算 ¥7.00/月，含 50GB/月）",
    permanentPlanInfo: "飞猫·不限时套餐：¥680 一次性付费，含 1000GB（1TB）不过期流量",
    speedtestSummary: "2026-10-19 实测：香港 21ms / 526Mbps、新加坡 45ms / 413Mbps、日本 54ms / 138Mbps、台湾 41ms / 116Mbps、美国 178ms / 14Mbps。",
    speedtestImage: "/images/reviews/feimao-speedtest-2026.png",
    recommendationBasis: "飞猫云彻底解决了新手用户『不会找订阅链接、不会配置 Clash YAML、搞不懂规则分流』的最大痛点。下载官方 App 输入账号密码即可一键连接，且实测香港 21ms / 526Mbps 表现扎实，ChatGPT、Claude、Netflix、Disney+ 均在支持列表内。",
    suitableFor: [
      "第一次接触网络代理、不想研究 Shadowrocket 或 Clash 复杂配置的零基础新手",
      "预算有限的学生群体（学生版 ¥84/年，月均仅 7 元）"
    ],
    unsuitableFor: [
      "需要在 OpenWrt 软路由、NAS、Docker 容器或 Linux 命令行中导入通用订阅链接的高阶极客",
      "追求顶级物理专线抗封锁极限的重度商业机构"
    ],
    actualCostBreakdown: "最低门槛为学生版年付 ¥84/年（折合 ¥7/月，每月 50GB）；单月购买最低为星耀版 ¥25/月（150GB，叠加优惠码后成本更低）。",
    keyLimitations: [
      "绑定专属客户端生态，牺牲了第三方开源客户端的自定义分流脚本扩展性",
      "学生版每月 50GB 流量仅够日常网页、AI 对话与 1080P 视频，若高频看 4K 需升级星耀版"
    ],
    peerComparison: "相比同样采用专属客户端的无忧链接（¥79/年 40GB）和灵猫（¥85/年 45GB），飞猫云学生版（¥84/年 50GB）在亚太节点带宽（香港526M/新加坡413M）上略占优势。",
    verifiedDate: "2026-10-19",
    dataSourceType: "品牌资料原文 + 实验室 2026-10-19 / 2026-08-11 实测档案"
  },
  {
    id: "weifeng",
    name: "微风网络 (BreezeNet)",
    rank: 4,
    badge: "⚡ 香港高峰值吞吐 IEPL 性价比派",
    affUrl: "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    coupon: "flat888",
    couponRule: "优惠码 flat888（享 9 折优惠）",
    foundedYear: "2023年运营",
    lineType: "IEPL 专线 + 多地原生 IP 节点",
    protocol: "VLESS（2026-08-11 实测兼容 Shadowsocks）",
    clientMode: "支持通用订阅导入",
    monthlyRealPrice: "乘风 (Riding) ¥27/月（200GB）；破风 (Breaking) ¥57/月（500GB）；御风 (Mastery) ¥127/月（1200GB）",
    annualConvertedPrice: "清风 (Breeze) ¥137/年（折算约 ¥11.42/月，含 100GB/月）",
    permanentPlanInfo: "信风·不限时 ¥200（270GB 一次性）；长风·不限时 ¥370（570GB 一次性）",
    speedtestSummary: "2026-10-19 实测：香港 25ms / 546Mbps、新加坡 43ms / 384Mbps、日本 54ms / 131Mbps、台湾 40ms / 115Mbps、美国 167ms / 17Mbps。",
    speedtestImage: "/images/reviews/weifeng-speedtest-2026.png",
    recommendationBasis: "微风网络在入门级价位提供了货真价实的 IEPL 专线与 VLESS 协议，且入门年付即给到每月 100GB 流量（同类年付小包普遍仅 45–60GB）。2026-10-19 实测香港节点下行高达 546Mbps，流媒体与 ChatGPT/Claude 全绿通过。",
    suitableFor: [
      "嫌 50GB/月年付小包不够用、希望年付档每月有 100GB 宽裕流量的学生与办公族",
      "看重 IEPL 专线稳定性与售后客服响应（日间真人+夜间AI值守）的用户"
    ],
    unsuitableFor: [
      "只想花七八十元买个最小年付备用包的极简用户"
    ],
    actualCostBreakdown: "年付清风版 ¥137/年（折合 ¥11.42/月，100GB/月）；单月购买乘风版 ¥27/月（200GB/月），使用优惠码 flat888 后约 ¥24.3/月。",
    keyLimitations: [
      "入门总支出（¥137/年或¥27/月）略高于 80–99 元档年付品牌",
      "夜间时段由 AI 客服值守，复杂工单需等待次日人工处理"
    ],
    peerComparison: "相比飞猫云（¥84/年 50GB），微风网络（¥137/年 100GB）每 GB 流量单价更低，且底层为明确标注的 IEPL 专线 + VLESS 协议。",
    verifiedDate: "2026-10-19",
    dataSourceType: "品牌资料原文 + 实验室 2026-10-19 / 2026-08-11 实测档案"
  },
  {
    id: "xingdaomeng",
    name: "星岛梦 (XingDaoMeng)",
    rank: 6,
    badge: "🛡️ 2020年老牌 IEPL · 东南亚覆盖广",
    affUrl: "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    coupon: "nmw888",
    couponRule: "专属优惠码 nmw888",
    foundedYear: "2020年运营",
    lineType: "IEPL 专线（覆盖港台日美新韩及东南亚）",
    protocol: "Trojan（实测含 Shadowsocks）",
    clientMode: "支持通用第三方客户端订阅",
    monthlyRealPrice: "超量150G ¥25/月；进阶300G ¥50/月；闪光500G ¥70/月；旗舰1T版 ¥130/月；定制套餐 ¥680/月（500GB）",
    annualConvertedPrice: "贴心小包 ¥96/年（折算 ¥8.00/月，含 60GB/月）",
    permanentPlanInfo: "永久不限时100G ¥100；永久不限时300G ¥300；永久不限时1TB ¥600",
    speedtestSummary: "2026-10-19 实测：香港 27ms / 504Mbps、新加坡 44ms / 411Mbps、日本 57ms / 136Mbps、台湾 41ms / 103Mbps、美国 177ms / 18Mbps。",
    speedtestImage: "/images/reviews/xingdaomeng-speedtest-2026.png",
    recommendationBasis: "与光速云同属 2020 年存续至今的『六年老牌俱乐部』成员。全线 1 倍流量且不限设备连接数，除了常规港台日新美五地外，额外延伸至韩国与东南亚地区，对 Shopee 东南亚跨境卖家及多设备家庭极具吸引力。",
    suitableFor: [
      "把『运营年限长、跑路风险极低』放在第一优先级的稳健型用户",
      "需要韩国及东南亚地区节点、或需要 ¥100/100GB 低门槛永久流量包的用户"
    ],
    unsuitableFor: [
      "不会配置第三方客户端且拒绝学习导入订阅的纯小白用户"
    ],
    actualCostBreakdown: "年付贴心小包 ¥96/年（折合 ¥8/月，60GB/月）；月付 ¥25/月（150GB）；永久包最低 ¥100（100GB）。",
    keyLimitations: [
      "Gemini 解锁视节点而定",
      "美国节点实测延迟 177ms 属于常规水平，不适合美服 FPS 电竞直连"
    ],
    peerComparison: "在不限时套餐维度，星岛梦提供 ¥100/100GB、¥300/300GB、¥600/1TB 三档阶梯，档位切分比二猫云（仅¥99/100GB）更细致，但单位流量性价比略逊于光速云（¥147/247GB）。",
    verifiedDate: "2026-10-19",
    dataSourceType: "品牌资料原文 + 实验室 2026-10-19 / 2026-08-11 实测档案"
  },
  {
    id: "ermao",
    name: "二猫云 (ErMao Cloud)",
    rank: 7,
    badge: "🐱 海外团队 IEPL · 99元不限时小包",
    affUrl: "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    coupon: "ermao5555",
    couponRule: "专属优惠码 ermao5555",
    foundedYear: "2023年运营",
    lineType: "全线 IEPL 专线",
    protocol: "VLESS（实测含 Shadowsocks）",
    clientMode: "配备独家定制客户端 + 通用订阅支持",
    monthlyRealPrice: "白猫套餐 ¥20/月（130GB）；橘猫畅玩版 ¥40/月（230GB）；牛奶猫尊享版 ¥80/月（430GB）；黑猫重度版 ¥160/月（850GB）",
    annualConvertedPrice: "二猫年付小包 ¥89/年（折算约 ¥7.42/月，含 60GB/月）",
    permanentPlanInfo: "二猫云·不限时套餐：¥99 一次性付费，含 100GB 不过期流量",
    speedtestSummary: "2026-10-19 实测：香港 22ms / 481Mbps、新加坡 46ms / 407Mbps、日本 53ms / 143Mbps、台湾 41ms / 118Mbps、美国 134ms / 17Mbps。",
    speedtestImage: "/images/reviews/ermao-speedtest-2026.png",
    recommendationBasis: "二猫云在 20 元月付档提供了 130GB 充足流量，且实测美国节点延迟仅 134ms（在同期测试品牌中处于极低水平），香港延迟 22ms。同时提供 ¥99/100GB 不限时套餐与定制客户端，不限设备连接数。",
    suitableFor: [
      "寻找 ¥20/月 左右高稳定 IEPL 专线、且有多台设备同时在线需求的用户",
      "想花不到 100 元（¥99）买一个 100GB 永久不限时备用包的轻度用户"
    ],
    unsuitableFor: [
      "重度依赖 Claude 与 Gemini 且不愿测试切换节点的用户（官方资料标注这两项视节点而定）"
    ],
    actualCostBreakdown: "年付 ¥89/年（折算 ¥7.42/月，60GB/月）；月付实价 ¥20/月（130GB）；一次性不限时 ¥99/100GB。",
    keyLimitations: [
      "Claude 与 Gemini 未作全节点包过承诺，实测需挑节点",
      "部分品牌资料提及主力覆盖港日美，新加坡/台湾节点需以当期面板为准"
    ],
    peerComparison: "相比 U1S1（¥20/月 120GB），二猫云同为 20 元月付但多给 10GB 流量（130GB），且运营时间早两年（2023 vs 2025），还多出 ¥99 不限时套餐。",
    verifiedDate: "2026-10-19",
    dataSourceType: "品牌资料原文 + 实验室 2026-10-19 / 2026-08-11 实测档案"
  },
  {
    id: "wuyou",
    name: "无忧链接 (WorryFree Link)",
    rank: 8,
    badge: "🛍️ 6.5元档超低门槛 · TikTok 跨区直连",
    affUrl: "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    coupon: "wuyou666",
    couponRule: "专属优惠码 wuyou666",
    foundedYear: "2025年运营",
    lineType: "跨境优化专线（港/新/日/美）",
    protocol: "官方专属客户端封装协议",
    clientMode: "2026年10月起采用官方专属客户端，下载登录即用（免配订阅）",
    monthlyRealPrice: "舒心链接 ¥19/月（100GB）；省心链接 ¥33/月（200GB）；随心链接 ¥77/月（500GB）；忘忧链接 ¥117/月（1000GB）",
    annualConvertedPrice: "MINI链接 ¥79/年（折算约 ¥6.58/月，含 40GB/月）",
    permanentPlanInfo: "100G永久不限时 ¥108；300G永久不限时 ¥298",
    speedtestSummary: "2026-10-19 实测：香港 23ms / 531Mbps、新加坡 42ms / 418Mbps、日本 55ms / 147Mbps、台湾 41ms / 107Mbps、美国 145ms / 17Mbps；另有 2026-09-07 实测截图存证。",
    speedtestImage: "/images/reviews/wuyou-speedtest-2026.jpg",
    unlockImage: "/images/reviews/wuyou-unlock-2026.jpg",
    recommendationBasis: "无忧链接以 ¥79/年（折合 ¥6.58/月）成为实测有图俱乐部中门槛最低的品牌之一，且明确针对 TikTok 跨区直连、直播与轻度跨境电商进行了路由优化，全线无倍率、不限设备。",
    suitableFor: [
      "TikTok 跨区短视频浏览、轻度跨境电商选品与社媒运营人员",
      "追求极低年付总价（¥79/年）且讨厌配置订阅链接的新手用户"
    ],
    unsuitableFor: [
      "每月流量消耗超过 50GB 的重度视频用户（MINI年付档仅 40GB/月）",
      "需要使用 Shadowrocket / Clash 自定义分流规则的高阶玩家"
    ],
    actualCostBreakdown: "MINI链接年付 ¥79/年（折合 ¥6.58/月，40GB/月）；月付舒心链接 ¥19/月（100GB）。",
    keyLimitations: [
      "入门年付档流量偏小（40GB/月），每天只能支撑约 1.3GB 日常开销",
      "2026年10月切换为专属客户端模式后，不再适合软路由与第三方客户端导入"
    ],
    peerComparison: "相比 5.6 元档的大佬云/闪电鼠（缺乏实测图），无忧链接仅贵不到 1 元/月，但拥有完整的 2026-10-19 五地测速数据（香港531Mbps）与流媒体/AI 解锁实测验证。",
    verifiedDate: "2026-10-19",
    dataSourceType: "品牌资料原文 + 实验室 2026-10-19 / 2026-09-07 实测档案"
  },
  {
    id: "weitu",
    name: "唯兔云 (WeiTu Cloud)",
    rank: 9,
    badge: "🐇 14.9元档 IPLC 专线 · 60+节点负载均衡",
    affUrl: "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    coupon: "weitu666",
    couponRule: "专属优惠码 weitu666",
    foundedYear: "2023年运营",
    lineType: "IPLC 专线 + 三网优化 + 智能负载均衡",
    protocol: "Trojan（实测含 Shadowsocks）",
    clientMode: "支持通用第三方客户端订阅导入",
    monthlyRealPrice: "节假日限时款 ¥14.9/月（100GB）；普通版 ¥19.9/月（150GB）；进阶版 ¥29.9/月（200GB）；专业版 ¥59.9/月（500GB）；至尊版 ¥119.9/月（1000GB）",
    annualConvertedPrice: "年付版限量款 ¥79.9/年（折算 ¥6.66/月，45GB/月）；年付加强专线 ¥120/年（折算 ¥10/月，75GB/月）",
    permanentPlanInfo: "永久不限时：¥100（100GB）/ ¥160（200GB）/ ¥340（500GB）",
    speedtestSummary: "2026-10-19 实测：香港 27ms / 500Mbps、新加坡 44ms / 414Mbps、日本 56ms / 147Mbps、台湾 37ms / 100Mbps、美国 179ms / 17Mbps。",
    speedtestImage: "/images/reviews/weitu-speedtest-2026.png",
    recommendationBasis: "唯兔云把纯正 IPLC 专线的月付门槛拉到了 ¥14.9–¥19.9 区间，同时提供 ¥79.9/年（45GB/月）与 ¥160/200GB 永久不限时包，无论是价格档位丰富度还是三网负载均衡能力，在 IPLC 阵营中都极具竞争力。",
    suitableFor: [
      "希望以 15–20 元月付体验 IPLC 内网专线与 Trojan 协议的进阶用户",
      "寻找 ¥160/200GB 或 ¥340/500GB 中大容量永久不限时套餐的用户"
    ],
    unsuitableFor: [
      "对美西延迟有苛刻要求（低于140ms）的美服实时竞技玩家（其实测美国延迟为179ms）"
    ],
    actualCostBreakdown: "年付最低 ¥79.9/年（45GB/月）或 ¥120/年（75GB/月）；月付常规 ¥19.9/月（150GB），节假日活动开启时可 ¥14.9/月入手 100GB。",
    keyLimitations: [
      "¥14.9/月属于节假日限时开启档位，非活动期需按 ¥19.9/月购买",
      "限量年付版每月 45GB 仅适合轻度手机端使用"
    ],
    peerComparison: "相比同走 IPLC 专线的 Firefly（月付¥25/150GB 且锁死专属客户端），唯兔云普通版月付仅 ¥19.9/150GB，且支持导入 Shadowrocket 与 Clash。",
    verifiedDate: "2026-10-19",
    dataSourceType: "品牌资料原文 + 实验室 2026-10-19 / 2026-08-11 实测档案"
  },
  {
    id: "firefly",
    name: "Firefly (萤火)",
    rank: 10,
    badge: "✨ 高速纯 IPLC 专线 · 免翻墙官网直连",
    affUrl: "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    coupon: "firefly",
    couponRule: "优惠码 firefly 可享 8 折（注意：年付版 ¥96 不适用该折扣码）",
    foundedYear: "2021/2023年运营体系",
    lineType: "纯 IPLC 专线接入 + 原生 IP",
    protocol: "VLESS",
    clientMode: "2026年10月起采用官方专属客户端登录即用（不提供订阅链接）",
    monthlyRealPrice: "Firefly Lite ¥25/月（150GB，8折后¥20）；Plus ¥45/月（300GB）；Blaze ¥85/月（600GB）；Nova ¥150/月（1000GB）",
    annualConvertedPrice: "Firefly 年付版 ¥96/年（折算 ¥8.00/月，含 60GB/月）",
    permanentPlanInfo: "Firefly 不限时：¥100 一次性付费，含 100GB 不过期流量",
    speedtestSummary: "2026-10-19 实测：香港 27ms / 547Mbps、新加坡 42ms / 445Mbps、日本 57ms / 147Mbps、台湾 39ms / 135Mbps、美国 143ms / 30Mbps（五地综合吞吐极强）。",
    recommendationBasis: "Firefly 在 2026-10-19 的五地横向测速中交出了香港 547Mbps、新加坡 445Mbps、美国 30Mbps 的拔尖成绩单。纯 IPLC 专线配合 VLESS 协议与原生 IP，且官网支持国内免翻墙直连访问，断网应急体验极佳。",
    suitableFor: [
      "追求晚高峰 IPLC 专线极速吞吐、高频使用 ChatGPT 办公与深夜 4K 追剧的用户",
      "喜欢专属客户端一键登录、不想操心订阅转换与节点维护的省心派"
    ],
    unsuitableFor: [
      "必须使用 Shadowrocket、Clash Verge Rev 或 OpenWrt 软路由导入订阅链接的用户"
    ],
    actualCostBreakdown: "年付版 ¥96/年（折合 ¥8/月，60GB/月，不可叠加折扣码）；月付 Lite 版原价 ¥25/月（150GB），使用 8 折码 firefly 后实付 ¥20/月。",
    keyLimitations: [
      "不提供任何第三方通用订阅链接，完全绑定官方专属客户端",
      "年付特惠包无法叠加使用 8 折优惠码"
    ],
    peerComparison: "与同样采用 IPLC + 专属客户端的闪跃（Flicker ¥24/月 150GB）相比，Firefly 在新加坡（445M vs 383M）与美国（30M vs 18M）实测下行速度上表现更优，且额外提供 ¥100/100GB 不限时套餐。",
    verifiedDate: "2026-10-19",
    dataSourceType: "品牌资料原文 + 实验室 2026-10-19 实测档案"
  },
  {
    id: "yifan",
    name: "一翻云 (1Fly Cloud)",
    rank: 16,
    badge: "🚀 Hysteria2 / Reality 三协议极客专线",
    affUrl: "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    coupon: "yfy6666",
    couponRule: "品牌清单优惠码 yfy6666（正文亦记录 9 折码 1FLYYUN，结算时可择优测试）",
    foundedYear: "2025年运营",
    lineType: "全节点 IEPL 物理专线 + 原生住宅 IP",
    protocol: "Hysteria 2 / VLESS-Reality / Shadowsocks 三协议可选",
    clientMode: "全面开放第三方通用订阅（适配 Mihomo / Sing-box / Shadowrocket）",
    monthlyRealPrice: "轻享版 ¥20/月（150GB）；舒享版 ¥35/月（350GB）；尊享版 ¥55/月（600GB）；极致版 ¥95/月（1.2TB）",
    annualConvertedPrice: "年付小包 ¥98/年（折算约 ¥8.17/月，含 60GB/月）",
    permanentPlanInfo: "轻享不限时 ¥100（100GB）；舒享不限时 ¥200（250GB）；尊享不限时 ¥400（500GB）",
    speedtestSummary: "2026-10-19 实测：香港 23ms / 477Mbps、新加坡 42ms / 390Mbps、日本 53ms / 136Mbps、台湾 40ms / 117Mbps、美国 180ms / 20Mbps。",
    speedtestImage: "/images/reviews/yifan-speedtest-2026.png",
    recommendationBasis: "一翻云是 42 家品牌中极少数明确同时提供『Hysteria 2 + VLESS-Reality + Shadowsocks』三大现代抗封锁协议的 IEPL 物理专线机场。对于本地宽带存在恶劣 UDP/TCP 干扰、需要利用 Hysteria2 暴力发包或 Reality 消除 TLS 指纹的技术型用户具有不可替代的价值。",
    suitableFor: [
      "熟悉 Shadowrocket、Clash Verge Rev (Mihomo) 或 Sing-box 的协议极客与开发者",
      "所处网络环境恶劣（如校园网、长宽、移动内网）急需 Hysteria2 / VLESS-Reality 破局的用户"
    ],
    unsuitableFor: [
      "希望下载一个傻瓜式官方 App 直接点连接的新手（需自行配置第三方客户端）",
      "只想白嫖免费试用的用户（官方无免费试用）"
    ],
    actualCostBreakdown: "年付小包 ¥98/年（折算 ¥8.17/月，60GB/月）；月付轻享版 ¥20/月（150GB），使用 9 折码后仅 ¥18/月。",
    keyLimitations: [
      "2025 年新成立品牌，跨年度长周期口碑仍需持续追踪",
      "Hysteria2 协议基于 QUIC (UDP)，部分地区运营商若对 UDP 实施一刀切阻断，需切回 VLESS-Reality"
    ],
    peerComparison: "相比同为 20 元月付的 U1S1（120GB，仅SS协议），一翻云多给 30GB 流量（150GB），且协议栈领先一代，并具备完整的三档不限时流量包。",
    verifiedDate: "2026-10-19",
    dataSourceType: "品牌资料原文 + 实验室 2026-10-19 / 2026-08-11 实测档案"
  }
];

// 五大核心场景深度工程指南（围绕：是什么问题 → 什么时候需要关注 → 如何判断或操作 → 有哪些条件与限制 → 接下来可以做什么）
export const guides: GuideTopic[] = [
  {
    slug: "ai-chatgpt-claude-unlock",
    number: "专题一",
    title: "2026 AI 生产力专线选型：ChatGPT、Claude 3.5 与 Gemini 免降级防封节点指南",
    tag: "AI 生产力专题",
    searchIntent: "解决 OpenAI / ChatGPT 报错 Access Denied、触发 Cloudflare 无限旋转验证、PoW 算力降智，以及 Anthropic Claude 账号封禁与 Google Gemini 区域不支持问题",
    targetAudience: "高频使用 ChatGPT Plus/Pro、Claude 3.5 Sonnet、Cursor IDE、GitHub Copilot 及 API 接口的程序员、科研人员、跨境文案与重度知识工作者",
    coreConclusion: "AI 平台风控的核心并非识别代理协议，而是审计『出口 IP 的 ASN 属性（机房 Hosting vs 住宅 ISP）』、『IP 欺诈风险评分（Fraud Score）』与『账号会话期间的地理轨迹一致性』。选型首选具备纯净原生落地与双专线架构的光速云（Claude 全节点支持、香港22ms/新加坡46ms），次选暮光加速（ChatGPT/Claude 双绿支持）或 25 元档针对 AI 定向优化的速界。",
    summary: "为什么许多标榜高速的机场打开 YouTube 秒开，一登 ChatGPT 就弹验证码甚至回答质量严重退化（俗称降智），登录 Claude 更是活不过半小时？本节从风控底层机制到客户端规则绑定提供完整工程方案。",
    recommendedAirports: ["guangsu", "muguang", "sujie", "jilian"],
    subSections: [
      {
        id: "ai-risk-control-mechanism",
        title: "1.1 AI 大模型对 IP 纯净度与 PoW 降智的风控底层逻辑",
        whatAndWhen: "【是什么问题 & 何时需关注】当你在网页端使用 ChatGPT 时发现：原本支持上传图片或联网搜索的按钮消失、每次提问前出现长达数秒的 Cloudflare Turnstile 验证框、或者 GPT-4o / Claude 给出的代码逻辑明显退化为早期小模型水准，说明你当前连接的机场出口 IP 已被 Cloudflare 与 OpenAI 的风控引擎标记为高风险机房代理（High-Risk Hosting ASN）。",
        howToJudgeAndOperate: "【如何判断与验证】第一，在开启代理的状态下访问 ping0.cc 或 ipinfo.io，检查当前节点 IP 的 ASN 类型：若显示为『ISP（互联网服务提供商/住宅宽带）』且风险值低于 30%，则为优质 AI 节点；若显示为『Business / Hosting（数据中心机房）』且共享人数过千，则极易触发 OpenAI 的 Proof-of-Work（工作量证明）高难度算力惩罚。第二，在 ChatGPT 网页端按 F12 打开开发者工具，切换至 Network（网络）面板并发送一条消息，查看 conversation 接口请求头中的 x-conduit-token 或 pow 难度参数——若 difficulty 数值异常偏高（如超过 00003f），即代表当前 IP 处于被降级惩罚状态。",
        conditionsAndLimits: "【条件与限制】根据 2026-10-19 实验室核实记录，没有任何一家公共共享机场敢承诺『旗下所有节点 100% 永久免验证码直连所有 AI 平台』。即使是第一主推的光速云，其品牌资料与实测也明确标注：Claude 处于支持状态，但 ChatGPT 与 Gemini 属于『视节点而定』；速界（¥25/月）虽主打 AI 场景，官方同样声明 AI 可用性受地区与平台规则动态调整影响。",
        nextAction: "【下一步操作】优先选用光速云（参考下方集中档案 #profile-guangsu）或暮光加速（#profile-muguang）的新加坡、台湾、日本或美国原生节点，并在客户端中建立独立的『AI 专属策略组』，彻底关闭自动测速切换。"
      },
      {
        id: "ai-claude-account-survival",
        title: "1.2 Anthropic Claude 封号诱因拆解与零封号环境隔离实操",
        whatAndWhen: "【是什么问题 & 何时需关注】Anthropic 对 Claude 账号的区域合规与防滥用审查极为严苛。用户最常遭遇的痛点是：刚注册或充值 Claude Pro 不到 24 小时，收到『Your account has been disabled』邮件。核心诱因有二：一是代理软件开启了 URL-Test（自动选择延迟最低节点），导致上午用日本 IP 提问、下午自动切到新加坡 IP、晚上又跳到美国 IP，触发跨洲际瞬移风控；二是浏览器 WebRTC 泄露了国内真实局域网/公网 IP，或本地系统语言/时区与出口 IP 严重冲突。",
        howToJudgeAndOperate: "【如何判断与操作】在 Shadowrocket（小火箭）或 Clash Verge Rev 中，切勿将 openai.com、chatgpt.com、anthropic.com、claude.ai、gemini.google.com 留在默认的『Proxy（自动测速组）』。正确操作是：新建一个名为『AI-Pinned』的手动选择策略组（select），固定勾选一条经过实测解锁的美国或新加坡原生节点（例如光速云的新加坡/美国 IPLC 节点，或无忧链接、唯兔云的指定 AI 节点）。只要该节点不宕机，连续数月保持同一地区 ASN 登录。",
        conditionsAndLimits: "【条件与限制】除了网络层固定 IP 外，注册 Claude 时的海外接码手机号权重极高，且免费账号比绑定美区/英区真实信用卡的 Pro 账号更容易在机房 IP 下被误杀。若使用企业定制业务，光速云提供 ¥680/月独享原生 IP 方案，暮光加速提供 ¥600/月独享私人节点，可从根源消除他人违规带来的同 IP 连坐风险。",
        nextAction: "【下一步操作】复制下方提供的 Mihomo / Shadowrocket 分流规则片段，将三大 AI 域名强制绑定至固定节点，并前往 /clients 页面核对客户端 TUN 与 DNS 防泄漏配置。",
        codeOrRuleSnippet: `# Clash Verge Rev (Mihomo) / Shadowrocket AI 固定节点防漂移分流规则示例
proxy-groups:
  - name: "🤖 AI-固定原生节点"
    type: select
    proxies:
      - "🇸🇬 光速云-新加坡-IEPL-原生01"
      - "🇺🇸 光速云-美国-IPLC-原生02"
      - "🇹🇼 暮光加速-台湾-BGP-01"

rules:
  - DOMAIN-SUFFIX,openai.com,🤖 AI-固定原生节点
  - DOMAIN-SUFFIX,chatgpt.com,🤖 AI-固定原生节点
  - DOMAIN-SUFFIX,oaistatic.com,🤖 AI-固定原生节点
  - DOMAIN-SUFFIX,oaiusercontent.com,🤖 AI-固定原生节点
  - DOMAIN-SUFFIX,anthropic.com,🤖 AI-固定原生节点
  - DOMAIN-SUFFIX,claude.ai,🤖 AI-固定原生节点
  - DOMAIN-SUFFIX,gemini.google.com,🤖 AI-固定原生节点
  - DOMAIN-SUFFIX,makersuite.google.com,🤖 AI-固定原生节点`
      }
    ],
    scenarioComparisonNote: "【AI 场景横向对比结论】若追求综合性价比与 Claude 稳定性，首选光速云（年付 ¥99/年折合 ¥8.25/月，或月付 ¥25/168GB）；若需要 ChatGPT + Claude 双平台开箱即用且多设备团队共享，选暮光加速（月付 ¥20/120GB）；若预算在 18–25 元且专门奔着 AI 生产力去，可对比极连云（¥18/月 100GB IEPL）与速界（¥25/月 150GB IEPL）。"
  },
  {
    slug: "streaming-4k-netflix-disney",
    number: "专题二",
    title: "4K / 8K 流媒体全解锁指南：Netflix 非自制剧、Disney+ 与 YouTube 秒开实测",
    tag: "4K 流媒体专题",
    searchIntent: "解决 Netflix 只能看自制剧（找不到绝命毒师/老友记等第三方版权片源）、Disney+ 地区黑屏报错、YouTube 4K 晚高峰卡顿掉帧以及流媒体高倍率扣费陷阱",
    targetAudience: "Apple TV 客厅影院玩家、Netflix / Disney+ / HBO Max / Spotify 合租订阅用户、YouTube 4K/8K 高码率视频观众",
    coreConclusion: "流媒体体验取决于两大硬指标：一是『晚高峰（20:00–23:00）单线程持续吞吐带宽是否稳定大于 100Mbps』，二是『落地 IP 是否具备原生 ISP 属性或内建智能 DNS 分流解锁』。根据 2026-10-19 实测数据，微风网络（香港 546Mbps）、Firefly（香港 547Mbps / 新加坡 445Mbps）、无忧链接（香港 531Mbps）、光速云（香港 529Mbps）与飞猫云（香港 526Mbps）稳居五百兆俱乐部第一梯队。",
    summary: "为什么很多机场宣传『解锁 Netflix』，买回来却搜不到想看的电影？因为 Netflix 将代理 IP 分为『仅解锁自制剧（Originals Only）』与『全区版权库解锁（Full Unlock）』两个等级。本节教你用实测数据与 RegionRestrictionCheck 标准挑选真正的 4K 观影专线。",
    recommendedAirports: ["guangsu", "feimao", "weifeng", "xingdaomeng"],
    subSections: [
      {
        id: "streaming-originals-vs-full-unlock",
        title: "2.1 揭秘 Netflix『自制剧伪解锁』与『全区原生解锁』的技术分水岭",
        whatAndWhen: "【是什么问题 & 何时需关注】当你连接某个节点打开 Netflix 可以正常播放《怪奇物语》《鱿鱼游戏》（Netflix 自制剧），但搜索《风骚律师》《哈利波特》或日本新番动漫时却完全搜不到结果，并在访问 netflix.com/title/80018499（非自制剧测试片源）时提示『Oh no! This title currently isn't available to watch in your country』，这说明该节点的 IP 已被 Netflix 识别为数据中心代理，仅放行了无地区版权限制的自制剧。",
        howToJudgeAndOperate: "【如何判断与操作】最权威的快速验证法是直接访问特工皇妃/绝命毒师测试页，或在终端运行 RegionRestrictionCheck 流媒体检测脚本。在客户端选点时，优先选择节点名称中带有『原生』『ISP』『解锁』『NF/Disney』标识的香港、新加坡、台湾或日本专线。根据小火箭实验室对光速云（5张实拍解锁图）与无忧链接的实测记录，其香港、新加坡、台湾与日本节点均通过了 Netflix 非自制剧、Disney+、YouTube Premium 与 HBO Max 解锁核验。",
        conditionsAndLimits: "【条件与限制】流媒体平台（尤其是 Disney+ 与 HBO Max）会定期更新 GeoIP 封禁库。当某个香港节点短暂变为仅自制剧时，通常通过机场后台工单反馈触发 DNS 解锁上游刷新，或临时切换至新加坡/台湾节点即可恢复全区片库。此外，Bilibili 港澳台番剧解锁仅限香港、台湾、澳门三地节点。",
        nextAction: "【下一步操作】查看 /reviews 实测实验室中的光速云与无忧链接流媒体解锁实拍切片，并在客户端中将 Netflix.com、Disneyplus.com、HBOMax.com 归入流媒体专属策略组。"
      },
      {
        id: "streaming-peak-hour-bandwidth-and-multiplier",
        title: "2.2 晚高峰 4K/8K 码率需求测算与流量倍率避坑核算",
        whatAndWhen: "【是什么问题 & 何时需关注】YouTube 4K 60fps HDR 视频的瞬时峰值码率通常在 45Mbps–85Mbps 之间，Apple TV+ 与 Netflix 4K Dolby Vision 码率约为 25Mbps–40Mbps。许多劣质公网中转机场在白天测速能跑 300Mbps，但一到晚上 21:00 全网晚高峰，由于跨省骨干网与公网出口拥塞，速度骤降至 5Mbps 以下，导致画面强制降级为 480P 马赛克。",
        howToJudgeAndOperate: "【如何判断与操作】在选型时必须同时核查『专线类型（IEPL/IPLC 优于普通中转）』与『节点扣费倍率』。以观看一部 2 小时的 4K 高清电影为例，实际产生的数据吞吐约为 18GB–25GB。如果选择全节点 1 倍率计费的品牌（如光速云极速版 ¥25/168GB、微风网络乘风版 ¥27/200GB、星岛梦超量版 ¥25/150GB、二猫云白猫版 ¥20/130GB），150GB 流量每月可完整观看 6–8 部 4K 大片外加日常无限刷 1080P 视频；若误入标有 2x–5x 倍率的套路机场，两部电影就会耗尽整月配额。",
        conditionsAndLimits: "【条件与限制】年付百元以内的小流量套餐（如无忧链接 MINI ¥79/年 40GB/月、唯兔云限量款 ¥79.9/年 45GB/月、飞猫云学生版 ¥84/年 50GB/月）仅适合 1080P 日常追剧与手机端观看；若在 4K 大屏电视或 Apple TV 上高频观影，务必选择月流量 150GB–500GB 以上的月付或进阶套餐。",
        nextAction: "【下一步操作】家用 Apple TV 或索尼/LG 智能电视用户，建议前往 /clients#linux-openwrt 查看软路由 OpenClash 全屋透明代理配置，配合星岛梦、光速云或二猫云的『不限设备数』政策实现全家大屏 4K 秒开。"
      }
    ],
    scenarioComparisonNote: "【流媒体场景横向对比结论】大流量全能观影首选光速云（极速版 ¥25/月 168GB，单节点最高 2.5Gbps）与微风网络（乘风版 ¥27/月 200GB，香港实测 546Mbps）；追求纯 IPLC 晚高峰极速且习惯专属客户端选 Firefly（Lite ¥25/月 150GB，8折后¥20，香港547Mbps/新加坡445Mbps）；学生党轻度 1080P 追剧选飞猫云（¥84/年 50GB/月）。"
  },
  {
    slug: "cross-border-tiktok-ecommerce",
    number: "专题三",
    title: "跨境电商与 TikTok 海外直播专线方案：防关联、零播放破局与独享原生 IP 部署",
    tag: "出海电商专题",
    searchIntent: "解决 TikTok 跨区运营视频 0 播放、直播中途卡顿掉线、Amazon/Shopee/eBay 多店铺 IP 关联封店，以及跨境团队如何低成本配置高合规独享网络",
    targetAudience: "TikTok 跨境直播公会与短视频带货团队、Amazon / Shopee / Lazada / 独立站卖家、海外社媒（Instagram / X / Facebook 广告投放）运营人员",
    coreConclusion: "跨境电商与 TikTok 业务必须按『账号资产价值』实施分级网络隔离：日常竞品调研、素材下载与刷视频养号，可使用无忧链接（¥79/年，支持 TikTok 跨区直连）或星岛梦（含东南亚/韩国节点）；但涉及核心直播推流、高权重店铺后台登录与广告账户投放，必须升级至光速云定制版（¥680/月，全 IPLC 独享原生 IP + 独立带宽）或暮光加速/全球云的私人独享节点方案。",
    summary: "为什么拔了国内手机卡、改了系统语言，发出去的 TikTok 视频依然是 0 播放？为什么跨境店铺突然收到二审关联通知？本节深入拆解跨境平台的三层环境探针机制与企业级专线落地架构。",
    recommendedAirports: ["guangsu", "wuyou", "muguang", "xingdaomeng"],
    subSections: [
      {
        id: "tiktok-zero-views-and-env-audit",
        title: "3.1 TikTok 零播放与跨区风控的三维环境审计模型",
        whatAndWhen: "【是什么问题 & 何时需关注】TikTok 客户端与海外社媒 App 在启动时会执行严格的三维环境交叉校验：① 硬件与运营商层（读取 SIM 卡 MCC/MNC 国家码，判断是否为中国大陆运营商漫游）；② 系统环境层（核对系统时区 Timezone、系统语言 Language、GPS 定位权限与国家地区设置）；③ 网络通道层（检测出口 IP 是否为目标国原生住宅/商业宽带、DNS 解析服务器归属地是否与出口 IP 一致、是否存在 WebRTC 本地 IP 暴露）。只要其中任何一环出现『美国 IP + 香港 DNS + 东八区时间』的逻辑悖论，账号立即被标记为异常搬运号，视频直接锁死 0 播放。",
        howToJudgeAndOperate: "【如何判断与操作】在启动 TikTok 前，务必使用 Shadowrocket（开启配置分流与 UDP 转发）或客户端的 TUN 全局虚拟网卡模式，打开 whoer.net 进行伪装度自检：确保伪装度达到 95%–100%，且 IP 国家、DNS 国家、系统时区三者完全重合。对于东南亚市场（泰国、马来西亚、新加坡、菲律宾、印尼），光速云明确覆盖马来西亚×2、泰国、新加坡×10 等节点，星岛梦与 WgetCloud/白月光亦包含东南亚多国记录；对于欧美英德法市场，光速云覆盖美国×10、英国、法国、德国、土耳其、巴西等节点。",
        conditionsAndLimits: "【条件与限制】公共套餐中的节点属于多用户共享出口，适合短视频浏览、选品分析、达人建联与初级矩阵测试。若进行 1080P 实时海外直播带货，公共节点可能因同节点其他用户突发大下载而产生 RTT 抖动。",
        nextAction: "【下一步操作】轻度选品与短视频跨区测试可先从无忧链接（#profile-wuyou，¥19/月或¥79/年）或光速云极速版（¥25/月）切入；进入商业化投流与直播阶段请阅读 3.2 节独享部署方案。"
      },
      {
        id: "ecommerce-dedicated-ip-deployment",
        title: "3.2 商业级独享原生 IP 与全 IPLC 独立带宽定制部署规范",
        whatAndWhen: "【是什么问题 & 何时需关注】当团队运营高流水 TikTok 直播间、管理多个 Amazon / PayPal / Stripe 资金账户，或需要全天候远程访问海外企业内网时，任何一次 IP 污染连坐或晚高峰断流都会造成远超网费百倍的商业损失。",
        howToJudgeAndOperate: "【如何判断与操作】在 42 家机场品牌库中，有 5 家服务商明确设立了面向企业与直播室的『定制独享专线档位』：① 光速云定制版（¥680/月，500GB/月，全 IPLC 专线接入，按需独立部署，为每位用户分配专属原生 IP 与最高 2.5Gbps 独立带宽，客服一对一确认覆盖地区，7×24运维，半年9折/年付8折）；② 暮光加速独享私人定制节点（¥600/月，500GB/月，7×24真人客服）；③ 飞猫云定制套餐（¥550/月，500GB/月）；④ 星岛梦定制套餐（¥680/月，500GB/月）；⑤ 全球云独享私人专线节点（¥680/月，500GB/月）。企业用户应在下单前联系官方客服，明确指定目标国家（如英国伦敦、美国洛杉矶、泰国曼谷或马来西亚吉隆坡）的原生 ISP 静态 IP，并配合指纹浏览器（如 AdsPower / HubStudio）或独立软路由 SSID 实施物理级环境隔离。",
        conditionsAndLimits: "【条件与限制】定制独享方案需线下与客服一对一确认线路类型、IP 纯净度要求与开通周期，不支持自助秒开秒退。建议先开通该品牌的常规月付套餐（20–25元）验证其国内入口到你办公宽带的本地 Ping 值，确认入口延迟满意后再升级独享定制。",
        nextAction: "【下一步操作】前往 /airports/guangsu 或 /airports/muguang 查看定制版详细参数，并结合本页第 5 节的终端检测命令完成上线前的 IP 与 DNS 纯净度验收。"
      }
    ],
    scenarioComparisonNote: "【跨境电商场景横向对比结论】商业直播与多店铺防关联首选光速云（全 IPLC 独享定制 ¥680/月 + 12国公共专线 ¥25/月）与暮光加速（独享节点 ¥600/月 + 多设备全平台并发）；低成本 TikTok 跨区直连选无忧链接（¥79/年或¥19/月）；东南亚多国小语种站点覆盖选星岛梦或 SOGO 云（覆盖15国）。"
  },
  {
    slug: "iepl-vs-iplc-architecture",
    number: "专题四",
    title: "机场线路黑话大科普：普通公网中转、BGP 优化、IPLC 与 IEPL 物理专线到底差在哪？",
    tag: "技术拓扑科普",
    searchIntent: "彻底搞懂直连、公网中转、BGP 隧道、IPLC 与 IEPL 专线的底层网络架构差异，学会通过延迟、丢包率与路由跳数辨别真假专线，避开虚标宣传",
    targetAudience: "厌倦了晚高峰频繁断流、想要搞清楚自己花的钱究竟买到了什么等级骨干网资源的理智型消费者与网络技术爱好者",
    coreConclusion: "决定代理稳定性的核心在于『过境段（Cross-Border Segment）是否经过公网 GFW 防火墙审查与国际出口拥塞点』。普通直连与公网中转必过公网防火墙，敏感期必瘫痪；而 IPLC（物理层/SDH专线）与 IEPL（以太网二层内网专线）通过运营商海底光缆内网点对点直通（如广州/上海直达香港将军澳机房），过境段不经过公网审查，实现晚高峰 0% 丢包与恒定超低 RTT。",
    summary: "为什么有的机场卖 5 元一个月，有的卖 25 元甚至 99 元一个月？市面上一半以上自称『专线』的低价机场其实只是普通公网转发。本节从 OSI 网络七层模型与实测 RTT 数据出发，教你一眼识破真假专线。",
    recommendedAirports: ["firefly", "guangsu", "weitu", "yifan"],
    subSections: [
      {
        id: "four-tier-line-architecture",
        title: "4.1 四代代理网络架构演进：直连 → 公网中转 → BGP 隧道 → IPLC/IEPL 内网专线",
        whatAndWhen: "【是什么问题 & 何时需关注】用户在选购机场时常被『BGP 三网优化』『内网专线』『企业级 IPLC』『金融级 IEPL』等词汇弄得眼花缭乱。若不清楚这四者的物理边界，极易花着专线的钱买到廉价公网中转，或者对几块钱的套餐抱有不切实际的晚高峰幻想。",
        howToJudgeAndOperate: "【四代架构技术拆解与判断标准】① 第一代：海外公网直连（Direct）。你的手机直接连接美国或日本的海外服务器，去程与回程全部裸露在国际公网出口与 GFW 深度包检测（DPI）之下，晚高峰丢包率常达 30%–80%，IP 极易被封禁。② 第二代：国内公网中转（Public Relay）。先连接到国内（如广东、江苏）的一台公网服务器，再由该服务器通过公网跨境转发至海外。虽然改善了国内段的接入速度，但『国内中转机 → 海外落地机』这一跳依然要过公网防火墙，遇到特殊时期同样大面积断流。③ 第三代：IPLC（International Private Leased Circuit，国际私有租用线路）。电信/联通/移动等基础运营商提供的点对点物理专用电路（通常基于 SDH/MPLS 技术，如深港 IPLC、沪日 IPLC），两端均为局域内网 IP（如 10.x.x.x），跨境流量在物理通道内完全闭环，不经过公网防火墙（代表品牌：Firefly、唯兔云、闪跃、U1S1、WgetCloud）。④ 第四代：IEPL（International Ethernet Private Line，国际以太网专线）。基于二层以太网（Layer 2 MAC 层）的高性能物理专线，相比传统 TDM IPLC 具备更高的带宽弹性（单通道可达 2Gbps–10Gbps）、更低的协议封装开销与更微小的延迟抖动，配合前端国内多线 BGP 智能入口，是目前高端商业机场的黄金标准（代表品牌：光速云、微风网络、星岛梦、二猫云、一翻云、SOGO云）。",
        conditionsAndLimits: "【条件与限制】真正的 IEPL/IPLC 专线带宽采购成本极其高昂（运营商专线每 Mbps 月租高达数十至上百元人民币）。因此，凡是标榜『全节点纯 IPLC/IEPL 专线』的品牌，其主力月付套餐通常在 ¥18–¥35/月（100GB–200GB）区间；若见到 ¥5.6/月起的年付入门方案（如大佬云、闪电鼠、云界线等），其本质是通过限制月流量（60GB）与共享带宽复用控制成本，高峰期并发冗余无法与 25 元以上的主力专线档位同日而语。",
        nextAction: "【下一步操作】查看下方 4.2 节的实测 RTT 延迟与吞吐鉴别法，或直接对比 Firefly（纯IPLC）、光速云（IEPL+企业内网）与一翻云（IEPL+三协议）的实测表现。"
      },
      {
        id: "verify-true-dedicated-line",
        title: "4.2 实验室实测鉴别法：如何用 TLS RTT 与晚高峰吞吐验证真假专线",
        whatAndWhen: "【是什么问题 & 何时需关注】当你已经购买了一家宣称是 IEPL/IPLC 的机场，如何在 5 分钟内验证它到底是真内网专线还是挂羊头卖狗肉的假中转？",
        howToJudgeAndOperate: "【如何判断与操作】观察小火箭实验室 2026-10-19 的统一测速基准表可以发现极为清晰的物理规律：真 IEPL/IPLC 专线（国内广深 BGP 入口 → 香港落地）的完整 TLS 握手延迟（RTT）普遍稳定在 21ms–27ms 之间（例如：飞猫云香港 21ms、光速云香港 22ms、二猫云香港 22ms、灵猫香港 22ms、无忧链接香港 23ms、一翻云香港 23ms、闪跃香港 23ms、U1S1 香港 24ms、微风网络香港 25ms、全球云香港 25ms、暮光加速香港 26ms、SOGO云香港 26ms、星岛梦/唯兔云/Firefly 香港 27ms），且新加坡专线延迟极其整齐地落在 42ms–46ms 区间，台湾落在 37ms–41ms 区间，日本落在 53ms–57ms 区间！反之，如果某机场香港节点测速延迟高达 120ms–180ms（如历史记录中部分绕路节点），或者在晚间 21:00 连续 Ping 出现周期性超时毛刺，则必然不是广深直通内网专线。",
        conditionsAndLimits: "【条件与限制】用户本地到国内 BGP 入口的物理距离会影响最终显示的端到端延迟：华南（广东）用户测广深入口香港专线通常仅 12ms–22ms，华东（江浙沪）约为 25ms–35ms，华北/西北用户因国内段光缆距离会增加 20ms–35ms，但只要过境段是真专线，延迟曲线应当是一条平滑直线而非剧烈锯齿。",
        nextAction: "【下一步操作】前往 /reviews 页面对照 17+ 张 MAI-TEST-BOT 原始测速图，核查各品牌在不同时段的真实表现。"
      }
    ],
    scenarioComparisonNote: "【物理专线场景横向对比结论】追求综合双专线与订阅开放性选光速云（IEPL+企业内网，香港22ms/529Mbps）；追求纯 IPLC 极速与免翻墙官网选 Firefly（香港27ms/547Mbps，新加坡42ms/445Mbps）；追求 IPLC 性价比与通用订阅选唯兔云（¥14.9–19.9/月）；追求 IEPL + Hysteria2/Reality 抗干扰协议选一翻云（¥20/月 150GB）。"
  },
  {
    slug: "remote-dev-gaming-low-latency",
    number: "专题五",
    title: "跨国远程办公、GitHub/Docker 极速拉取与永久不过期备用专线方案",
    tag: "开发者与长效备份专题",
    searchIntent: "解决程序员 Git Clone / Docker Pull / NPM / Pip 终端下载卡死、SSH 跨国服务器频繁断连，以及轻度用户与开发者如何配置『一次性付费永久不过期』的第二条容灾备份专线",
    targetAudience: "全栈软件工程师、算法研究员、跨国远程办公（Zoom / Slack / Teams / Notion）从业者、外服游戏联机玩家及低频按量上网用户",
    coreConclusion: "开发者的核心诉求是『客户端必须支持通用订阅导出以开启 TUN 虚拟网卡接管终端流量』以及『主备双机场冗余防失联』。最佳实践架构为：主力月付/年付选用支持 Clash/小火箭订阅的 IEPL 专线（如光速云、二猫云、微风网络、一翻云），同时花 ¥99–¥147 购入一份『永久不限时流量包』（首推光速云致敬斯诺克147永久套餐 247GB，或二猫云 ¥99/100GB、星岛梦/唯兔云/一翻云 ¥100/100GB）写入客户端 Fallback 自动故障转移组。",
    summary: "为什么浏览器能翻墙，但在 VS Code 终端里执行 git clone 或 docker pull 依然超时报错？为什么资深程序员手机和电脑里永远配置着至少两家不同上游的机场订阅？本节给出工程级解决方案。",
    recommendedAirports: ["guangsu", "ermao", "yifan", "tiziyun"],
    subSections: [
      {
        id: "dev-tun-mode-and-terminal-proxy",
        title: "5.1 终端命令行、WSL2 与 Docker 容器流量接管：系统代理 vs TUN 虚拟网卡",
        whatAndWhen: "【是什么问题 & 何时需关注】在 Windows 或 macOS 上开启代理软件的『系统代理（System Proxy）』后，Chrome/Edge 浏览器可以正常访问 Google 和 GitHub 网页，但在 PowerShell、CMD、iTerm2、WSL2 子系统或 Cursor 终端中运行 git push、pip install、brew update、docker pull 时却依然直连超时。这是因为命令行工具默认不读取操作系统的 HTTP 代理环境变量，且系统代理工作在应用层（Layer 7），无法直接捕获底层 ICMP 与原始 TCP/UDP 套接字。",
        howToJudgeAndOperate: "【如何判断与操作】要实现全系统无死角接管，必须滿足两个前提：① 所选机场必须支持导出标准第三方订阅链接（如光速云、微风网络、星岛梦、二猫云、唯兔云、一翻云、梯子云；切勿选择仅限自研客户端且不给订阅的软件用于开发环境）；② 在 Windows / macOS 端安装 Clash Verge Rev（Mihomo 内核），在『设置』中开启『TUN 模式（虚拟网卡模式）』并选择 Fake-IP 增强策略。开启后，系统会生成一张名为 Meta / Mihomo 的三层（Layer 3）虚拟网卡，直接从操作系统内核网络栈拦截所有进程的 IP 数据包并透明转发至 IEPL 专线。",
        conditionsAndLimits: "【条件与限制】在 Windows 上开启 TUN 模式需要以管理员权限运行客户端（或安装 Service Mode 系统服务）；在 macOS 上需在系统设置中批准网络扩展权限。若仅需临时让单个终端窗口走代理，也可在终端执行 export https_proxy=http://127.0.0.1:7897 指向本地混合端口。",
        nextAction: "【下一步操作】前往 /clients#windows 或 /clients#macos 获取 Clash Verge Rev 官方下载指引与 TUN 模式详细排障步骤。"
      },
      {
        id: "permanent-traffic-pack-failover-strategy",
        title: "5.2 永久不限时套餐性价比精算与双机场 Fallback 容灾架构",
        whatAndWhen: "【是什么问题 & 何时需关注】对于两类人群，『一次性付费、永久不限时（不过期）流量包』具有极高的决策价值：第一类是平时主要用校园网或公司内网、每月仅消耗 5GB–15GB 查资料的轻度用户（买包月套餐大部分流量月底清零纯属浪费）；第二类是不能容忍任何断网风险的开发者与远程办公族——当主力包月机场遭遇上游机房割接或短暂维护时，急需一条永不过期的第二通道实现零感知自动切换。",
        howToJudgeAndOperate: "【10大品牌永久不限时套餐每 GB 成本精算】根据 42 家机场品牌库核实数据，目前提供一次性不限时套餐的主流品牌单价对比如下：① 光速云『致敬斯诺克147永久套餐』：¥147 含 247GB（折合仅 ¥0.595/GB，单节点最高 2.5Gbps，全站单价最划算的中大容量永久包）；② 微风网络『信风/长风不限时』：¥200/270GB（¥0.74/GB）、¥370/570GB（¥0.65/GB）；③ 唯兔云『永久不限时』：¥100/100GB（¥1.00/GB）、¥160/200GB（¥0.80/GB）、¥340/500GB（¥0.68/GB）；④ 二猫云『不限时套餐』：¥99/100GB（¥0.99/GB）；⑤ 星岛梦『永久不限时』：¥100/100GB、¥300/300GB、¥600/1TB（¥0.60–¥1.00/GB）；⑥ 一翻云『不限时包』：¥100/100GB、¥200/250GB（¥0.80/GB）、¥400/500GB；⑦ Firefly『不限时』：¥100/100GB（¥1.00/GB）；⑧ 无忧链接『永久不限时』：¥108/100GB、¥298/300GB；⑨ SOGO云『不限时版』：¥120/120GB、¥220/250GB；⑩ 飞猫云『不限时套餐』：¥680/1000GB（¥0.68/GB）。",
        conditionsAndLimits: "【条件与限制】购买不限时套餐的唯一风险是『服务商能否长期稳健运营』。因此，选购不限时套餐必须严守一条铁律：优先选择 2020–2023 年已稳定运营多年的老牌专线（如 2020 年运营的光速云与星岛梦，或 2023 年运营的二猫云、微风网络、唯兔云），切勿在毫无历史口碑的杂牌新盘上一次性投入上千元买超大不限时包。",
        nextAction: "【下一步操作】预算 ¥100–¥150 选购永久套餐，直接闭眼入光速云 ¥147/247GB（每GB仅0.59元且2020年老牌运营）或二猫云 ¥99/100GB、星岛梦 ¥100/100GB。"
      }
    ],
    scenarioComparisonNote: "【开发者与不限时备份横向对比结论】主力+永久双修首选光速云（¥147/247GB 永久包每 GB 仅 0.59 元，且支持 Clash/小火箭订阅）；百元内不限时小包选二猫云（¥99/100GB IEPL）或星岛梦（¥100/100GB 2020老牌）；需要 Hysteria2 / VLESS-Reality 协议选一翻云（¥100/100GB 不限时或 ¥20/月 150GB）；需要自研客户端+通用订阅双支持选梯子云（年付约 ¥7.4/月）。"
  }
];

export interface TechnicalPrincipleItem {
  id: string;
  title: string;
  subtitle: string;
  impactOnDecision: string;
  engineeringDetails: string[];
  practicalAdvice: string;
}

export const technicalPrinciples: TechnicalPrincipleItem[] = [
  {
    id: "tech-protocols",
    title: "6.1 现代代理协议栈演进：Shadowsocks AEAD、Trojan、VLESS 与 Hysteria 2 的取舍",
    subtitle: "协议决定了数据包在运营商网络的伪装形态、CPU 加密开销与恶劣网络下的吞吐上限",
    impactOnDecision: "当你在机场品牌库看到 VLESS、Trojan、Shadowsocks 或 Hysteria 2 时，该如何根据自己的设备与网络环境做决定？",
    engineeringDetails: [
      "Shadowsocks (SS / AEAD 2022)：最经典、最轻量的流加密/AEAD 协议。由于去除了繁重的 TLS 握手，其在物理内网专线（IEPL/IPLC）中的传输效率最高、手机端最省电、路由器 CPU 占用最低。因为在 IEPL/IPLC 专线的过境段根本不经过公网 GFW 审查，无需过度伪装，所以实测抓取的 16 家机场中，绝大多数专线内部依然广泛采用 Shadowsocks 承载高速流量。",
      "Trojan 协议（代表：星岛梦、唯兔云、全球云、WgetCloud）：将代理流量完全伪装成标准的 HTTPS (TLS) 网站访问流量，外层走真实的 TLS 1.3 握手。抗主动探测能力强，在 BGP 中转与 IPLC 专线上表现极为稳健。",
      "VLESS / VLESS-XTLS-Reality（代表：光速云、微风网络、二猫云、Firefly、一翻云、SOGO云、梯子云）：Xray/V2Ray 体系下的新一代无状态轻量传输协议。消除了 VMess 冗余的二次加密开销，配合 XTLS Vision 流控与 Reality 技术（直接借用国际知名大厂真实证书指纹消除自签证书特征），在保持极高安全性的同时大幅降低了握手延迟。",
      "Hysteria 2（代表：一翻云）：基于修改版 QUIC (UDP) 协议并搭载 Brutal 暴力拥塞控制算法。专为高丢包、高延迟的恶劣跨国链路设计，在本地宽带存在轻微丢包时仍能强行跑满带宽；但若当地运营商对 UDP 流量实施严格 QoS 限流，则需切回基于 TCP 的 VLESS 或 Shadowsocks。"
    ],
    practicalAdvice: "【选型实操结论】如果你买的是真 IEPL / IPLC 专线（如光速云、Firefly、二猫云、微风网络），VLESS、Trojan 与 Shadowsocks 的实际速度差异在毫秒级以内，优先选 VLESS 或 SS 即可；如果你处在校园网、移动宽带等干扰严重的特殊网络环境，可优先测试支持 VLESS + Hysteria 2 的一翻云或光速云。"
  },
  {
    id: "tech-dns-leak",
    title: "6.2 DNS 污染、DNS 泄露与 Fake-IP / Redir-Host 解析机制",
    subtitle: "为什么连上了代理却打不开网页，或者被 TikTok / ChatGPT 瞬间识破真实国籍？",
    impactOnDecision: "80% 的『节点能 Ping 通但网页打不开』或『流媒体/AI 解锁失败』并非机场节点故障，而是本地客户端 DNS 解析配置错误导致。",
    engineeringDetails: [
      "DNS 抢答与污染（DNS Poisoning）：当你访问海外域名时，若客户端使用系统默认 DNS（如国内运营商 114.114.114.114 或本地路由器 DNS）发起明文 UDP 53 端口查询，抢先返回的必然是虚假或被污染的 IP 地址，导致浏览器报错连接重置。",
      "DNS 泄露（DNS Leak）：即使网页流量走了美国代理节点，但如果你的浏览器通过本地运营商 DNS 解析了 chatgpt.com 或 tiktok.com，目标网站的权威 DNS 服务器就会记录下『请求来自中国大陆电信/联通 DNS 递归节点』，从而直接判定你在使用代理并触发风控。",
      "Fake-IP 模式（Shadowrocket 与 Clash Verge Rev 默认推荐）：当应用请求解析域名时，代理内核不等待真实远程 DNS 返回，而是立即在 198.18.0.1/16 网段分配一个虚拟假 IP 瞬间返回给浏览器，随后由代理内核将原始域名直接通过加密隧道发往海外落地节点进行远端解析（Remote DNS）。这不仅彻底根除了 DNS 污染与 DNS 泄露，还将网页首屏打开速度提升了 30ms–80ms。",
      "Redir-Host（真实 IP 映射模式）：先由内核通过 DoH / DoT（加密 DNS）查询真实 IP 再建立连接。仅在部分老旧局域网软件与 Fake-IP 虚拟网段发生冲突时作为备选。"
    ],
    practicalAdvice: "【配置实操结论】无论使用 iOS Shadowrocket 还是电脑端 Clash Verge Rev，请保持开启 Fake-IP 模式，并将海外远程 DNS 设置为 https://1.1.1.1/dns-query 或 https://8.8.8.8/dns-query，切勿把国内 DNS 填入 Remote DNS 栏位。"
  },
  {
    id: "tech-asn-ip-reputation",
    title: "6.3 原生 IP（Native IP）、广播 IP 与机房/住宅 ASN 属性鉴别",
    subtitle: "决定 Netflix 版权区归属、ChatGPT 免验证通过率与跨境店铺防封的底层身份密码",
    impactOnDecision: "帮助读者理解为什么同样叫『香港节点』或『美国节点』，不同机场的解锁能力却天差地别。",
    engineeringDetails: [
      "原生 IP（Native IP） vs 广播 IP（Broadcasted IP）：原生 IP 是指该 IP 地址的注册国家（RIR 分配记录，如 APNIC/ARIN）与机房物理所在国家完全一致（例如在香港本地 ISP 注册并运行在香港机房的 IP）。广播 IP 则是将原本注册在美国或欧洲的 IP 段，通过 BGP 路由宣告（BGP Announce）广播到香港机房使用。Netflix、Disney+ 与 TikTok 对广播 IP 极为敏感，常会导致香港节点识别成美国区甚至直接报错代理。",
      "ASN 机构类型（ISP vs Hosting）：自治系统号（ASN）标明了 IP 所属机构的业务性质。Hosting（数据中心/云厂商，如 AWS、DigitalOcean、Vultr、Choopa）由于专供服务器租用，被各大 AI 与流媒体风控系统列为重点监控对象；而 ISP（本地宽带运营商，如香港 HKT/HGC、台湾中华电信 HiNet、新加坡 Singtel）则是当地居民家庭上网使用的网络，风控信誉度最高。",
      "DNS 媒体解锁中继（DNS Unlock Relay）：优质专线机场（如光速云、微风网络、Firefly、唯兔云、星岛梦）不仅采购原生 IP 落地，还会在机房内部署专属智能流媒体 DNS 清洗内网——平时大流量走高带宽机房出口，一旦检测到 Netflix / ChatGPT / Claude 鉴权请求，自动在机房内网透明桥接至高纯净度原生家宽出口，兼顾了 500Mbps+ 的狂暴速度与 100% 原生解锁。"
    ],
    practicalAdvice: "【验收实操结论】连接节点后打开 browserleaks.com/ip 或 ping0.cc，重点查看『IP 类型（原生 IP vs 广播 IP）』与『ASN 属性』；若用于核心跨境店铺，务必选择光速云定制版等明确承诺独享原生 IP 的方案。"
  }
];

export interface DecisionBranch {
  profileName: string;
  budgetRange: string;
  deviceAndTechLevel: string;
  primaryUseCase: string;
  recommendedSolution: string;
  targetLinks: Array<{ label: string; url: string }>;
}

export const decisionBranches: DecisionBranch[] = [
  {
    profileName: "分支 A：零基础纯新手 / 学生党低预算日常",
    budgetRange: "年付折算 ¥6.5–¥8.5/月（总预算 ¥79–¥99/年）",
    deviceAndTechLevel: "手机或电脑单端为主，不想研究订阅转换与复杂规则配置",
    primaryUseCase: "日常刷网页、看 YouTube / Netflix 1080P、轻度使用 ChatGPT 查资料",
    recommendedSolution: "首选【飞猫云·学生版（¥84/年，50GB/月，专属客户端免配置即用）】或【无忧链接·MINI链接（¥79/年，40GB/月，专属客户端）】；若愿意学习一键导入 Shadowrocket/Clash 且想要 2020 年老牌 IEPL 专线，直接上【光速云·轻量版（¥99/年，69GB/月）】。",
    targetLinks: [
      { label: "查看飞猫云档案", url: "/airports/feimao" },
      { label: "查看无忧链接档案", url: "/airports/wuyou" },
      { label: "查看光速云档案", url: "/airports/guangsu" }
    ]
  },
  {
    profileName: "分支 B：AI 重度生产力 / 全栈程序员 / 科研办公",
    budgetRange: "月付 ¥20–¥35/月，或搭配 ¥100–¥147 永久备份包",
    deviceAndTechLevel: "使用 Windows/macOS (Clash Verge Rev TUN模式) + iOS (Shadowrocket)，甚至软路由",
    primaryUseCase: "高频调用 Claude 3.5 / ChatGPT Plus、GitHub/Docker 拉取、跨国远程 SSH",
    recommendedSolution: "主力首选【光速云·极速版（¥25/月 168GB，IEPL+企业内网，Claude全支持）】或【暮光加速·基础版（¥20/月 120GB，ChatGPT+Claude双支持）】；若需 Hysteria2/Reality 协议选【一翻云（¥20/月 150GB）】。同时强烈建议加购一份【光速云 147永久套餐（¥147/247GB）】或【二猫云不限时（¥99/100GB）】作为防失联容灾备份。",
    targetLinks: [
      { label: "光速云深度评测", url: "/airports/guangsu" },
      { label: "暮光加速评测", url: "/airports/muguang" },
      { label: "一翻云评测", url: "/airports/yifan" },
      { label: "客户端 TUN 配置教程", url: "/clients#windows" }
    ]
  },
  {
    profileName: "分支 C：4K/8K 家庭影院 / 多设备全屋共享追剧",
    budgetRange: "月付 ¥20–¥45/月（月流量需求 150GB–500GB）",
    deviceAndTechLevel: "拥有手机、iPad、电脑、Apple TV 或智能电视多台设备同时在线",
    primaryUseCase: "晚高峰 20:00–23:00 流畅观看 Netflix 非自制剧、Disney+ 4K、YouTube 8K",
    recommendedSolution: "需要第三方订阅导入软路由/Apple TV 的用户，首选【光速云·极速版/流光版（¥25–34/月，不限设备，香港529Mbps）】、【微风网络·乘风版（¥27/月 200GB，香港546Mbps）】或【星岛梦（¥25/月 150GB，2020老牌不限设备）】；偏好专属客户端省心直连的用户选【Firefly Lite（¥25/月 150GB，8折码后¥20，纯IPLC香港547Mbps）】。",
    targetLinks: [
      { label: "微风网络评测", url: "/airports/weifeng" },
      { label: "星岛梦评测", url: "/airports/xingdaomeng" },
      { label: "Firefly 萤火评测", url: "/airports/firefly" },
      { label: "17+家晚高峰测速图", url: "/reviews" }
    ]
  },
  {
    profileName: "分支 D：TikTok 海外直播公会 / 跨境电商多店铺团队",
    budgetRange: "轻量辅助 ¥19–25/月；核心直播与防关联独享 ¥550–¥680/月",
    deviceAndTechLevel: "多部跨境工作手机、指纹浏览器矩阵或专线办公路由",
    primaryUseCase: "TikTok 英美/东南亚直播带货、Amazon/Shopee 店铺后台防关联安全登录",
    recommendedSolution: "日常短视频选品与轻度跨区运营可用【无忧链接（¥19/月）】或【光速云极速版（¥25/月，覆盖马泰巴土英法德等12国）】；正式商业直播与主力店铺必须部署【光速云·定制版（¥680/月 500GB，全IPLC独享原生IP+2.5Gbps独立带宽，7×24一对一运维）】或【暮光加速独享节点（¥600/月）】。",
    targetLinks: [
      { label: "光速云定制版详情", url: "/airports/guangsu" },
      { label: "暮光加速定制详情", url: "/airports/muguang" },
      { label: "全球云60+节点详情", url: "/airports/quanqiu" }
    ]
  },
  {
    profileName: "分支 E：低频轻度用户 / 讨厌包月清零的按量党",
    budgetRange: "一次性支出 ¥99–¥200（用完为止，不限时间）",
    deviceAndTechLevel: "平时主要使用国内网络，仅偶尔出国查文献、下源码或应急使用",
    primaryUseCase: "希望买一次管一年半载，彻底告别月底流量清零焦虑",
    recommendedSolution: "性价比之王首选【光速云·致敬斯诺克147永久套餐（¥147/247GB，每GB仅0.59元，2020老牌）】；百元整数关口选【二猫云·不限时套餐（¥99/100GB）】、【星岛梦·永久不限时（¥100/100GB）】或【唯兔云·永久不限时（¥100/100GB，¥160/200GB）】。",
    targetLinks: [
      { label: "光速云147永久包", url: "/airports/guangsu" },
      { label: "二猫云99不限时包", url: "/airports/ermao" },
      { label: "唯兔云IPLC不限时", url: "/airports/weitu" }
    ]
  }
];

export interface GuideFaqItem {
  question: string;
  conclusion: string;
  details: string;
  relatedAnchorOrUrl: string;
  relatedLabel: string;
}

export const guidesFaqs: GuideFaqItem[] = [
  {
    question: "Q1：很多机场标榜『8元/月』『5.6元/月』，我可以只花 8 块钱买一个月试用吗？",
    conclusion: "【明确结论】绝大多数情况下不可以。资料中标注的『8元/月』『7元/月』『5.6元/月』均为年付（或季付）入门小包除以 12 个月后的『折算月均成本』，并非独立月付实价。",
    details: "例如光速云的『约8元/月』对应的是轻量版 ¥99/年（69GB/月），若要单买一个月，最低为极速版 ¥25/月（168GB）；飞猫云『7元/月』对应学生版 ¥84/年（50GB/月），单月购买为星耀版 ¥25/月（150GB）；唯兔云常规月付为 ¥19.9/月（节假日限时 ¥14.9/月）。我们在核心对比表中已严格将『月付实价』与『年付折算价』分列展示，请务必核对后再下单。",
    relatedAnchorOrUrl: "#core-comparison-table",
    relatedLabel: "查看核心价格双轨对比表"
  },
  {
    question: "Q2：为什么我买了专线机场，连上后看 YouTube 很快，但 ChatGPT 依然提示 Access Denied 或无法登录？",
    conclusion: "【明确结论】这是因为高速流媒体看的是『带宽吞吐』，而 ChatGPT / Claude 审查的是『出口 IP 的机房属性与 DNS/WebRTC 一致性』。",
    details: "香港很多大带宽节点由于早期未对 OpenAI 开放或共享人数过多，直接访问会被拒。解决方法有三步：① 在客户端内将节点手动切换至新加坡、台湾、日本或美国的『原生/AI专用』节点（如光速云、暮光加速、速界、极连云的相关节点）；② 确认客户端已开启 Fake-IP 模式防止本地 DNS 泄露；③ 使用无痕窗口清除 openai.com 的历史 Cookie 后重新登录。",
    relatedAnchorOrUrl: "#ai-chatgpt-claude-unlock",
    relatedLabel: "阅读专题一：AI 防封与分流配置"
  },
  {
    question: "Q3：『专属客户端（自研客户端）』与『支持通用订阅（Shadowrocket/Clash）』有什么区别？我该怎么选？",
    conclusion: "【明确结论】新手贪图省事选『专属客户端』，苹果 iOS 老玩家、程序员与软路由用户必须选『支持通用订阅』或『双支持』的品牌。",
    details: "在本站收录的品牌中，飞猫云、无忧链接（2026年10月起）、Firefly、灵猫网络、SOGO云、闪跃、全球云、隐形人等采用『官方专属客户端登录即用（不提供第三方订阅链接）』模式，优点是零配置门槛且防订阅泄露，缺点是无法导入你自己的 Shadowrocket 或 OpenWrt 软路由。而光速云、二猫云、微风网络、星岛梦、唯兔云、一翻云、梯子云等则支持导出通用订阅（或自研+订阅双支持），兼容性最广。",
    relatedAnchorOrUrl: "/clients",
    relatedLabel: "前往全平台客户端下载与订阅指南"
  },
  {
    question: "Q4：『永久不限时（不过期）流量包』真的不会过期吗？买哪家最稳妥？",
    conclusion: "【明确结论】流量本身在账户存续期内确实不按月清零、用完为止，但其真正的前提是『机场服务商本身长期稳定存续』。",
    details: "如果一家刚成立两个月的小机场卖 50 元 1TB 永久包，半年后关停跑路，剩余流量也就随之归零。因此选购不限时流量包必须认准『运营时间长、有真专线实力』的品牌：首推 2020 年运营至今的光速云『致敬斯诺克147永久套餐（¥147/247GB，每GB仅0.59元）』与星岛梦『永久不限时（¥100/100GB）』，次选二猫云（¥99/100GB）与唯兔云（¥100/100GB）。",
    relatedAnchorOrUrl: "#permanent-traffic-pack-failover-strategy",
    relatedLabel: "查看 10 大品牌永久套餐单价核算"
  },
  {
    question: "Q5：大佬云、闪电鼠、云界线、榴莲云、环球梯这 5 家『5.6元/月』的品牌有什么区别？",
    conclusion: "【明确结论】根据品牌资料原文核实，这 5 家同属『年付折算约 5.6 元/月、60GB/月、季付及以上 7 折』的同质化极限平价方案，核心参数高度雷同。",
    details: "细微差异在于：大佬云与闪电鼠明确标注了『IEPL 专线 + VLESS 协议 + 自研与第三方订阅支持』；云界线与环球梯的推广注册链接格式缺少『#』号（注册前需确认页面可正常打开）；而榴莲云在品牌资料中未明确标注具体协议类型。如果你追求 5.6 元极限低价且需要明确的 VLESS 协议，优先选大佬云或闪电鼠；若愿意多花 1–2 元/月换取完整的实测测速图验证，建议升级至无忧链接（¥6.58/月）、飞猫云（¥7/月）或光速云（¥8.25/月）。",
    relatedAnchorOrUrl: "/airports",
    relatedLabel: "在 42 家机场库中对比 5.6 元档品牌"
  },
  {
    question: "Q6：付款后如果觉得本地网络延迟不理想，可以申请退款吗？",
    conclusion: "【明确结论】行业绝大多数机场（包括光速云等主流品牌）均因虚拟带宽与防滥用政策规定『特殊商品不支持退款』或无免费试用。",
    details: "为了保护你自己的资金安全，小火箭实验室在所有评测页面反复强调『先小额月付实测，后长周期年付』的铁律。哪怕某品牌的年付折算价再诱人（如年付8折），首次接触时也请先花 15–25 元买一个月，在你自己的家庭宽带和手机移动网络下实测晚上 20:30–22:30 的真实速度和流媒体解锁，确认完全满意后再续费年付或购买不限时大包。",
    relatedAnchorOrUrl: "#decision-matrix",
    relatedLabel: "查看安全选购与分步测试路径"
  },
  {
    question: "Q7：为什么我的 iPhone 用 Shadowrocket（小火箭）锁屏几分钟后，微信或电报就会断连重连？",
    conclusion: "【明确结论】这是 iOS 系统的后台省电回收机制或未开启『按需连接（On Demand）』导致的，并非机场节点断流。",
    details: "在 Shadowrocket 中进入底部『设置』→『隧道（Tunnel）』或主界面连接开关下方，开启『按需连接（Connect On Demand）』，并将『睡眠时断开连接』保持为关闭状态。同时，选择底层延迟更低的 IEPL/IPLC 专线（如光速云或二猫云的 22ms 香港节点），可以让锁屏唤醒后的 TLS 握手在 0.02 秒内无感恢复。",
    relatedAnchorOrUrl: "/clients#ios",
    relatedLabel: "阅读 iOS 小火箭完整配置教程"
  },
  {
    question: "Q8：WgetCloud、白月光、龙猫云、FATCAT 等排在榜单后段的 14 家机场还能买吗？",
    conclusion: "【明确结论】这 14 家属于本站保存的『历史实测与旧批次档案记录（2026年5月–8月）』，部分缺乏最新月付报价或当期优惠码核实，因此统一排在 29–42 名供参考。",
    details: "例如 WgetCloud 在 2026-05-02 实测中 59 个节点全部跑出 400Mbps+ 的优异成绩，但其最低为季付 ¥297（230GB/月），门槛极高；白月光在 2026-07-17 实测覆盖 108 个节点 79 个地区，季付 ¥66（100GB/月）。如果选购这批品牌，请务必以点击进入官网后的当期实时套餐表为准，切勿仅凭历史截图直接盲目大额付款。",
    relatedAnchorOrUrl: "/airports",
    relatedLabel: "浏览全部 42 家机场完整分级档案"
  },
  {
    question: "Q9：一台账号写着『不限设备同时在线』，我可以和十几个朋友一起合租平摊费用吗？",
    conclusion: "【明确结论】『不限设备数』指的是允许你个人或家庭名下的手机、平板、电脑、电视多端并发，绝不等于允许跨省市十几人恶意合租滥用。",
    details: "光速云、星岛梦、二猫云、无忧链接、唯兔云、Firefly、U1S1、灵猫、一翻云、SOGO云等均提供了宽松的『不限设备数量』政策，极大方便了拥有多台终端的个人与小团队。但所有机场后台均部署有并发源 IP 审计系统：如果同一时间有来自全国 8 个不同省份宽带 IP 的请求高强度拉取流量，系统会自动触发防滥用封禁。正常个人跨网络（家里 Wi-Fi + 手机 5G + 公司电脑）完全无需担心。",
    relatedAnchorOrUrl: "#core-comparison-table",
    relatedLabel: "核对各品牌设备限制政策"
  },
  {
    question: "Q10：本页面的测速数据与解锁状态多久更新一次？如何验证数据没有造假？",
    conclusion: "【明确结论】本页核心数据基于 2026-10-19 品牌核实清单与 2026-08-11 / 09-07 MAI-TEST-BOT 原始测速抓包归档，所有实测图均保留了原始时间戳、测试协议与软件版本水印。",
    details: "我们严格区分『实验室实测数据（Measured Data）』与『品牌方宣称资料（Vendor Data）』。对于宇宙云、可信云、榴莲云等存在资料缺口或未测项的品牌，均如实标注『待核实』或『缺乏统一实测数据』，绝不伪造数字填充。读者可随时前往 /reviews 查看高清原图，或通过本页提供的自检命令在本地复现测试。",
    relatedAnchorOrUrl: "/reviews",
    relatedLabel: "查看 17+ 家原始测速图与校验信息"
  }
];
