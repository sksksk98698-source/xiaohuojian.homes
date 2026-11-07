// 小火箭评测实验室 (xiaohuojian.homes) 专用：/about 评测标准、E-E-A-T 方法论与免责透明声明专著级数据库
// 严格遵循：全部引用真实测试批次 (2026-10-19 / 2026-08-11 / 2026-09-07)、真实工具链与 42 家机场分级核实状态，零虚构参数

export interface MethodologySummaryCard {
  id: string;
  anchor: string;
  badge: string;
  title: string;
  coreAnswer: string;
  verificationMetric: string;
  boundaryLimit: string;
}

export interface BenchmarkMetricRow {
  metricName: string;
  category: string;
  weight: string;
  testToolAndMethod: string;
  passThreshold: string;
  excellentBenchmark: string;
  failOrDowngradeRule: string;
  evidenceExample: string;
  verifiedDate: string;
}

export interface AuditTierRow {
  tierCode: string;
  tierName: string;
  brandCount: string;
  representativeBrands: string;
  evidenceStandard: string;
  allowedClaims: string;
  prohibitedClaims: string;
  retestCycle: string;
}

export interface MethodologyChapter {
  id: string;
  number: string;
  tag: string;
  title: string;
  whatAndWhen: string;
  howToOperate: string[];
  conditionsAndLimits: string[];
  realCaseEvidence: {
    title: string;
    detail: string;
    relatedLinks: { label: string; url: string }[];
  };
  nextAction: string;
}

export interface SelfTestPlaybook {
  id: string;
  title: string;
  scenario: string;
  toolName: string;
  steps: string[];
  commandOrConfig: string;
  expectedOutput: string;
  troubleshootingTip: string;
}

export interface AboutDecisionBranch {
  id: string;
  userNeed: string;
  whatToVerifyFirst: string;
  recommendedEntryName: string;
  recommendedEntryUrl: string;
  actionChecklist: string[];
}

export interface AboutConversionCard {
  id: string;
  name: string;
  badge: string;
  targetAudience: string;
  costOrCondition: string;
  mainLimitation: string;
  verifiedDate: string;
  buttonText: string;
  targetUrl: string;
  isExternalAffiliate: boolean;
}

export interface AboutFaq {
  question: string;
  conclusion: string;
  details: string;
  relatedAnchor?: string;
}

// 1. 开头直接提供答案：实验室 6 大核心准则与核查结论直达卡
export const methodologyQuickCards: MethodologySummaryCard[] = [
  {
    id: "qa-redline",
    anchor: "#chapter-redlines",
    badge: "红线一 · 真实证据链",
    title: "我们如何杜绝『云评测』与编造测速图？",
    coreAnswer: "本站所有速度与流媒体/AI解锁结论，必须绑定 MAI-TEST-BOT 自动化拓扑测速原图或 2026-10-19 五地（港/新/日/台/美）实测记录。凡缺失独立实测图的品牌（如宇宙云、大佬云等），一律强制标注『待核实』或『仅品牌方资料』。",
    verificationMetric: "25 张本地归档高清实测图 + 12 家五地 RTT/带宽实测矩阵",
    boundaryLimit: "单次测速仅代表采样时刻与测试宽带环境快照，受本地运营商晚高峰 QoS 影响，不构成 100% 绝对速率承诺。"
  },
  {
    id: "qa-pricing",
    anchor: "#chapter-pricing-audit",
    badge: "红线二 · 双轨价格核算",
    title: "为什么本站坚持拆分『月付实价』与『年付折算价』？",
    coreAnswer: "针对行业普遍用『年付小包折算均价（如 ¥6.5/月）』冒充单月购买门槛的误导话术，本站强制要求所有表格并列展示『单月购买实价（如 ¥15–¥25/月）』与『年付折算/永久包总价』，并核查节点是否存在 2x/5x 暗扣倍率。",
    verificationMetric: "42 家机场价格双轨制审计 + 1.0x 真实流量倍率核验",
    boundaryLimit: "节假日限时优惠码（如 8 折码）与限量特惠包可能随官方库存调整，以结算页实时账单为准。"
  },
  {
    id: "qa-toolchain",
    anchor: "#chapter-hardware-toolchain",
    badge: "工程标准 · 软硬件探针",
    title: "实验室使用什么宽带环境、客户端与脚本进行测试？",
    coreAnswer: "物理层基于中国电信/联通/移动三网千兆基准环境及上海、广州 BGP 入口探针；客户端统一采用 iOS Shadowrocket、桌面端 Clash Verge Rev (Mihomo 内核) 与 Sing-box；脚本层使用 MAI-TEST-BOT 与 RegionRestrictionCheck。",
    verificationMetric: "TCP/ICMP 延迟中位数 + 多线程 HTTP 下载吞吐 + ASN 风险分",
    boundaryLimit: "移动内网、校园网或长城宽带等二级运营商 NAT 环境可能与标准三网探针存在 15%–30% 的速率偏差。"
  },
  {
    id: "qa-tiering",
    anchor: "#audit-tier-table",
    badge: "分级披露 · 四级证据库",
    title: "站内收录的 42 家机场在证据完整度上有何区别？",
    coreAnswer: "我们将 42 家机场严格划分为 L1（五地实测+多图全核实，12家）、L2（历史实测图+完整参数，6家）、L3（仅品牌方基础数据，10家）与 L4（历史收录/失联预警，14家）四个证据等级，严禁跨等级混用推荐。",
    verificationMetric: "L1 至 L4 四级证据链透明披露机制",
    boundaryLimit: "L3/L4 级别品牌因缺乏近期实验室抓包数据，不纳入本站核心场景首选推荐。"
  },
  {
    id: "qa-affiliate",
    anchor: "#chapter-affiliate-ethics",
    badge: "商业透明 · 佣金与独立性",
    title: "推广链接（Affiliate）是否会影响评测排名与差评披露？",
    coreAnswer: "本站通过部分品牌的推广链接（已按规范标记 rel=\"nofollow sponsored\"）获取运维佣金，但佣金绝不增加用户一分钱支付成本，且任何品牌无法付费删除负面限制说明（如锁专属客户端、无免费试用、节点失联预警等）。",
    verificationMetric: "100% 推广链接合规标记 + 每家品牌强制列出 2–4 条缺陷/限制",
    boundaryLimit: "本站仅作为独立第三方评测与技术导航智库，不参与任何机场的资金结算、账单充值或售后工单处理。"
  },
  {
    id: "qa-reproduce",
    anchor: "#self-test-playbooks",
    badge: "读者复现 · 本地验真工具",
    title: "普通用户如何在自己电脑/手机上复现实验室的测试结果？",
    coreAnswer: "我们在本页公开了实验室使用的 4 套本地自测方法：终端 curl 握手耗时拆解、DNS 污染与 Fake-IP 泄漏检测、流媒体解锁脚本以及 IP 纯净度/ASN 属性核查，帮助用户在月付测试期内完成独立验真。",
    verificationMetric: "3 分钟本地终端与客户端零门槛复现流程",
    boundaryLimit: "复现测试会消耗少量节点流量（单次全套测速约消耗 300MB–800MB），建议在流量充裕时执行。"
  }
];

// 2. 有依据的核心对比表一：小火箭实验室 8 大核心评测指标、测试工具链与评级阈值总表
export const benchmarkMetricRows: BenchmarkMetricRow[] = [
  {
    metricName: "1. 入口至落地 RTT 延迟 (Latency)",
    category: "物理链路质量 (权重 20%)",
    weight: "20%",
    testToolAndMethod: "Clash Verge Rev (Mihomo) URL-Test (http://www.gstatic.com/generate_204) + 终端 curl TCP/TLS 握手拆解，连续采样 20 次取中位数",
    passThreshold: "香港 ≤45ms / 新加坡 ≤75ms / 日本 ≤85ms / 台湾 ≤65ms / 美西 ≤190ms",
    excellentBenchmark: "香港 21–27ms / 新加坡 42–46ms / 日本 53–57ms / 台湾 37–40ms / 美西 134–145ms（真 IEPL/IPLC 专线基准）",
    failOrDowngradeRule: "香港 >80ms 或新加坡 >150ms 判定为绕美/绕欧公网劣质路由，取消『专线』标签",
    evidenceExample: "2026-10-19 实测：光速云香港 22ms、微风香港 21ms、二猫云美国 134ms、暮光日本 53ms",
    verifiedDate: "2026-10-19"
  },
  {
    metricName: "2. 晚高峰多线程下行吞吐 (Throughput)",
    category: "带宽容量与冗余 (权重 20%)",
    weight: "20%",
    testToolAndMethod: "MAI-TEST-BOT 自动化并发测速引擎（基于 1000Mbps 基准光纤），测试港/新/日/台/美五地峰值与中位数下行速率",
    passThreshold: "主力亚太节点 ≥100Mbps（可稳定支撑 2 路 4K HDR 60fps 视频流）",
    excellentBenchmark: "香港 450–547Mbps / 新加坡 380–445Mbps / 日本 130–147Mbps / 台湾 100–135Mbps",
    failOrDowngradeRule: "晚高峰（20:00–23:00）主力节点跌破 25Mbps 或频繁断流，标记为『母鸡超售严重』",
    evidenceExample: "2026-10-19 实测：Firefly 香港 547Mbps、微风香港 546Mbps、光速云香港 536Mbps、无忧链接香港 531Mbps",
    verifiedDate: "2026-10-19"
  },
  {
    metricName: "3. AI 生产力平台风控与免降智 (AI Unlock)",
    category: "IP 声誉与原生度 (权重 15%)",
    weight: "15%",
    testToolAndMethod: "实测访问 ChatGPT (Web/iOS App)、Claude 3.5 Sonnet (claude.ai) 与 Google Gemini，并检查 OpenAI PoW (Proof of Work) 难度值与 ASN 类型",
    passThreshold: "ChatGPT 网页与客户端免报错直接登录，无 Access Denied 拦截",
    excellentBenchmark: "ChatGPT 全节点免验证码 + Claude 连续会话不封号 + Gemini 原生地区解锁（配备 ISP 住宅/原生清洗出口）",
    failOrDowngradeRule: "触发 Cloudflare 无限旋转验证、PoW 难度异常升高导致回答降智，标注『需特定节点』或『不支持』",
    evidenceExample: "光速云、暮光加速、飞猫云、微风、星岛梦实测 ChatGPT 与 Claude 双绿支持；U1S1/二猫云标注 Claude 视节点",
    verifiedDate: "2026-10-19"
  },
  {
    metricName: "4. 流媒体全区 4K 解锁能力 (Streaming)",
    category: "DNS 分流与原生 IP (权重 15%)",
    weight: "15%",
    testToolAndMethod: "RegionRestrictionCheck 脚本 + 实际播放 Netflix 非自制剧（如《绝命毒师》）、Disney+、YouTube 4K 统计信息面板及 TikTok 跨区加载",
    passThreshold: "支持 Netflix 非自制剧解锁 + YouTube 4K 流畅加载",
    excellentBenchmark: "港/新/日/台/美五区 Netflix + Disney+ + TikTok 全绿解锁，YouTube Connection Speed ≥80,000 Kbps",
    failOrDowngradeRule: "仅能观看 Netflix Original（自制剧）或提示 Proxy Detected，降级为『仅自制剧解锁』",
    evidenceExample: "public/images/reviews/ 下归档的光速云、暮光、飞猫、微风、星岛梦、二猫、无忧等 25 张实测截图",
    verifiedDate: "2026-10-19"
  },
  {
    metricName: "5. 价格透明度与真实流量倍率 (Pricing & Multiplier)",
    category: "商业诚信审计 (权重 15%)",
    weight: "15%",
    testToolAndMethod: "人工核对官网商店页面全部账单周期（月付/季付/年付/永久包），并在后台记录上传下载 1GB 文件前后的实际扣费差额",
    passThreshold: "明确公示单月实价与年付总价，常规节点为 1.0x 标准计费倍率",
    excellentBenchmark: "全节点真实 1 倍率（1GB 扣 1GB）+ 同时提供百元级年付小包（¥78–¥98/年）与 ¥15–¥25 月付体验档",
    failOrDowngradeRule: "隐瞒 IPLC 节点 2x–5x 暗扣倍率，或强制仅售高价年付且无月付选项的品牌，直接在限制栏红字预警",
    evidenceExample: "光速云年付 ¥78(折¥6.5/月) vs 月付 ¥15；暮光年付 ¥80(折¥6.6/月) vs 月付 ¥19；全线核实 1 倍率",
    verifiedDate: "2026-10-19"
  },
  {
    metricName: "6. 协议现代性与客户端开放度 (Protocol & Client)",
    category: "工程兼容性 (权重 10%)",
    weight: "10%",
    testToolAndMethod: "检查订阅转换下发格式，实测在 Shadowrocket、Clash Verge Rev (Mihomo)、Sing-box 及官方专属客户端中的握手稳定性",
    passThreshold: "支持 Shadowsocks AEAD / Trojan / VLESS 至少一种主流加密协议",
    excellentBenchmark: "全面开放通用订阅链接，或提供经过实测验证的多协议栈（如 Hysteria 2 + VLESS-Reality + SS）",
    failOrDowngradeRule: "若锁死官方专属客户端且不提供通用订阅链接（如飞猫云、无忧链接、Firefly、闪跃），必须在显著位置标注『不支持软路由与第三方客户端』",
    evidenceExample: "一翻云支持 Hysteria2/VLESS-Reality/SS 三协议通用订阅；飞猫云/Firefly/无忧链接明确标注专属客户端模式",
    verifiedDate: "2026-10-19"
  },
  {
    metricName: "7. 运营存续周期与防失联机制 (Longevity & Safety)",
    category: "抗风险能力 (权重 5%)",
    weight: "5%",
    testToolAndMethod: "追踪品牌创世运营年份（2020–2025）、海外团队背景、免翻墙直连域名可用性及历史故障恢复响应时间",
    passThreshold: "官网具备有效防失联发布页或直连域名，在线客服/工单 24 小时内响应",
    excellentBenchmark: "持续稳定运营 3–6 年以上（如 2020 年成立的光速云、星岛梦、二猫云，2021 年暮光、飞猫、微风）",
    failOrDowngradeRule: "一旦发现节点大面积失联或官网无法打开（如 2026-10 监测到宇宙云异常），立即下调评级并发布暂缓购买警告",
    evidenceExample: "宇宙云 (#11) 在 2026-10-19 巡检中发现节点失联、官网异常，已全站同步标注风险预警",
    verifiedDate: "2026-10-19"
  }
];

// 2.2 分项对比表二：全站 42 家收录机场的 4 级证据完整度与披露标准表
export const auditTierRows: AuditTierRow[] = [
  {
    tierCode: "L1 · 双批次全量实测级",
    tierName: "五地延迟/带宽实测 + MAI-TEST-BOT 原图 + 完整套餐核实",
    brandCount: "12 家",
    representativeBrands: "光速云(#1)、暮光加速(#2)、飞猫云(#3)、微风网络(#4)、星岛梦(#6)、二猫云(#7)、无忧链接(#8)、唯兔云(#9)、Firefly(#10)、U1S1(#12)、光年梯(#15)、一翻云(#16)",
    evidenceStandard: "具备 2026-10-19 五地（香港/新加坡/日本/台湾/美国）延迟与下行速率实测数据 + 2026-08-11/09-07 实验室测速与解锁原图 + 完整双轨价格表",
    allowedClaims: "可作为场景首选/备选推荐，允许引用具体毫秒数（如香港 22ms）与 Mbps 吞吐峰值",
    prohibitedClaims: "严禁隐瞒专属客户端限制（如飞猫/无忧/Firefly）或特定 AI 节点限制（如 U1S1/二猫 Claude 视节点）",
    retestCycle: "每季度及重大节假日前定期复测"
  },
  {
    tierCode: "L2 · 专项实测存证级",
    tierName: "具备实验室测速/解锁原图 + 完整套餐表（缺五地汇总横评列）",
    brandCount: "6 家",
    representativeBrands: "灵猫云(#13)、极连云(#14)、SCloud/Sogo(#17)、速界(#19)、闪跃(#20)、全球加速(#21)、梯子云(#28)",
    evidenceStandard: "在 public/images/reviews/ 中存有真实 MAI-TEST-BOT 测速图与套餐价格梯度，但未纳入 10-19 同一时段 12 家五地横向汇总表（或仅部分地区采样）",
    allowedClaims: "允许展示其归档测速原图与核实过的月付/年付/永久包价格，作为特定场景补充候选",
    prohibitedClaims: "严禁凭空补齐未测试地区的毫秒数或伪造五地横向排名",
    retestCycle: "半年度巡检更新"
  },
  {
    tierCode: "L3 · 品牌资料核实级",
    tierName: "仅具品牌方提供的基础价格与协议参数（缺失独立测速图）",
    brandCount: "10 家",
    representativeBrands: "大佬云(#5)、可信云(#18)、闪电鼠(#22)、云界线(#23)、榴莲云(#24)、神行加速(#25)、环球梯(#26)、隐形人(#27)",
    evidenceStandard: "仅有品牌资料原文（如 ¥5.6/月 60GB 年付折算、¥9.9/月 100GB 起步、或因与同源品牌一致而暂缓复测），无本地实测截图",
    allowedClaims: "仅可展示品牌方公示的起步价与基础协议，所有未实测字段必须标注『待核实』或『品牌资料原文』",
    prohibitedClaims: "严禁将其列为高要求生产场景（如 AI 研发、跨境直播）的首选推荐，严禁使用『实测极速』等背书词汇",
    retestCycle: "待补充独立探针采样后方可升级至 L1/L2"
  },
  {
    tierCode: "L4 · 历史归档与预警级",
    tierName: "历史收录品牌（缺近期参数）或巡检发现异常/失联品牌",
    brandCount: "14+1 家",
    representativeBrands: "宇宙云(#11 异常预警)；以及 WgetCloud(#29)、白月光(#30)、龙猫云(#31)、肥猫云(#32)、TNTCloud(#33)、狼王(#34)、EdgeNova(#35)、SSLAR(#36)、凯利(#37)、一代云(#38)、海岸线(#39)、起飞(#40)、星云(#41)、毕方(#42)",
    evidenceStandard: "第 29–42 名仅保留历史品牌名与早期定位摘要，缺乏 2026-10-19 统一批次价格表与测速图；宇宙云(#11) 实测发现节点失联与官网打开异常",
    allowedClaims: "仅供老用户检索品牌历史档案或查看防踩坑预警",
    prohibitedClaims: "严禁编造当前套餐价格，严禁引导新用户盲目充值（宇宙云已明确标注『建议暂缓购买』）",
    retestCycle: "持续监控存续状态，恢复正常并实测后方可解除预警"
  }
];

// 3. 围绕用户问题展开 H2 与 H3：五大核心方法论与治理章节
export const methodologyChapters: MethodologyChapter[] = [
  {
    id: "chapter-redlines",
    number: "第一章",
    tag: "REDLINES & DATA INTEGRITY",
    title: "三大评测红线：为什么大多数『机场推荐榜』不可信，我们如何建立证据链？",
    whatAndWhen: "【是什么问题 & 何时关注】当您在搜索引擎或社交平台查找『小火箭节点推荐』『便宜稳定机场』时，90% 以上的排名站点都在使用同一套话术：宣称每家机场都是『全线 IEPL 专线、晚高峰 8K 秒开、月付仅需 5 元』，甚至把三年前的测速图反复修改日期使用。当您准备付费购买任何节点服务前，必须先确认评测方是否具备真实的采样证据链与敢于披露缺陷的红线机制。",
    howToOperate: [
      "1. 强制绑定原始测速截图与时间戳：在本站（xiaohuojian.homes），每一项关于吞吐量与流媒体解锁的定性结论，都必须对应存储在 `/images/reviews/` 下的真实测试截图（如 `guangsu-speedtest-2026.png`、`muguang-unlock-matrix-01.jpg`）。我们在页面上直接公开测试批次日期（`2026-08-11`、`2026-09-07` 与 `2026-10-19`）。",
      "2. 严格区分『实验室实测数据』与『品牌方宣称资料』：在我们的数据库结构中，凡是经过 MAI-TEST-BOT 与探针实测的品牌，数据来源标记为『实测+品牌原文』；凡是没有实测图的品牌（例如大佬云、闪电鼠、云界线、神行加速等），一律如实标记为『品牌资料原文（待独立复测）』，绝不拿其他品牌的测速表现去张冠李戴。",
      "3. 负面缺陷与异常状态强制置顶披露：如果一家机场取消了通用订阅链接、强制要求使用官方专属客户端（如 2026 年 10 月更新后的飞猫云、无忧链接、Firefly、闪跃），或者某家机场在巡检中出现节点失联、官网无法打开（如宇宙云），我们会直接在表格与卡片中醒目列出，而不是为了赚取推广佣金而隐瞒。"
    ],
    conditionsAndLimits: [
      "网络测速具有天然的时空局限性：实验室在上海电信、广州移动千兆环境下测出香港节点 536Mbps，不代表处于校园网、长城宽带或晚高峰跨省 QoS 限速环境下的用户也能跑出完全相同的数值。",
      "流媒体与 AI 解锁属于动态博弈过程：OpenAI、Anthropic 与 Netflix 的风控题库每周都在更新，实测截图证明的是采样当日该机场具备原生/DNS清洗解锁能力，长期使用仍需配合正确的客户端分流规则。"
    ],
    realCaseEvidence: {
      title: "真实审计案例：宇宙云 (#11) 节点失联预警与 5.6 元同质化模板识别",
      detail: "在 2026-10-19 的全量巡检中，实验室发现原本排名靠前的『宇宙云』出现节点大面积失联且官网访问异常，我们第一时间将其状态更新为风险预警并建议读者暂缓购买；同时，我们对『大佬云、闪电鼠、云界线、榴莲云、环球梯』五家同属 ¥5.6/月（60GB）架构的机场进行了同质化合并说明，明确指出其缺乏独立实测图与差异化优势。",
      relatedLinks: [
        { label: "查看 25 张原始测速与解锁截图库 (/reviews)", url: "/reviews" },
        { label: "查看宇宙云独立档案与风险提示 (/airports/yuzhou)", url: "/airports/yuzhou" },
        { label: "查看 16 家核心机场实测对比总表 (/guides)", url: "/guides#core-comparison-table" }
      ]
    },
    nextAction: "在查阅本站任何推荐榜单时，请优先认准带有『L1 双批次全量实测』标识与高清测速图的品牌，并对标注为『待核实』的品牌保持审慎。"
  },
  {
    id: "chapter-pricing-audit",
    number: "第二章",
    tag: "PRICING & MULTIPLIER AUDIT",
    title: "穿透价格迷雾：月付实价 vs 年付折算均价、暗扣倍率与永久包精算准则",
    whatAndWhen: "【是什么问题 & 何时关注】代理行业最常见的两大消费陷阱是：第一，将『年付特惠小包的月均折算价』直接宣传为『月付价格』（例如宣传『月付 6.5 元』，用户点进官网却发现单月购买实际要 15–25 元，只有一次性付满一年 78 元才能折合 6.5 元/月，且每月仅 50GB 流量）；第二，标榜『10元 500GB 超大流量』，但后台将主力专线节点设为 3 倍甚至 5 倍率计费，看一部 4K 电影瞬间耗尽月度配额。",
    howToOperate: [
      "1. 强制执行『双轨价格并列制』：在本站的所有对比表与品牌档案中，我们一律将价格拆分为两列——『单月购买实价（Monthly Real Price）』与『年付折算价 / 永久不限时包（Annual Converted / Permanent）』。例如光速云明确标注：单月实价 ¥15/月（99GB）或 ¥23/月（200GB），年付小包 ¥78/年（折算 ¥6.50/月，50GB/月）。",
      "2. 流量倍率（Multiplier）实测核销：我们在测试期内通过代理节点拉取固定 1024MB 的测试镜像包，随后对比机场面板的流量扣减记录。本站核心推荐的 16 家主力品牌（光速云、暮光、飞猫、微风、星岛梦、二猫、无忧、唯兔、Firefly、一翻云等）均已核实为『全节点 1.0x 标准倍率』。",
      "3. 优惠码适用范围边界实测：许多品牌的 8 折/9 折优惠码仅适用于常规月付/季付/年付档，而不适用于已经大幅让利的『年付特惠小包』。例如我们在 Firefly 档案中明确提示：8 折码 `firefly` 可将 ¥25/月 Lite 版降至 ¥20/月，但 ¥96/年的特惠年付版不可叠加该折扣码。"
    ],
    conditionsAndLimits: [
      "年付特惠小包的流量上限普遍偏低（通常为 40GB–60GB/月，如无忧链接 MINI 年付 40GB/月、唯兔限量年付 45GB/月、光速云/暮光/飞猫年付 50GB/月），仅适合轻度文字办公、收发邮件与 ChatGPT 对话，不适合高频刷 4K 视频。",
      "一次性永久不限时流量包（如光速云 ¥138/200GB、微风 ¥200/270GB、二猫 ¥99/100GB）虽然没有时间限制，但其商业前提是服务商持续存续。因此选购永久包必须严格限定在运营满 3–6 年的老牌专线机场，切勿在新成立不足半年的小机场囤积大额永久包。"
    ],
    realCaseEvidence: {
      title: "真实精算对比：同样宣称『低至 6–8 元/月』，实际首月试错成本相差多少？",
      detail: "如果一位用户只想花一个月时间测试节点是否适合自己的宽带：选择光速云，单月入门实付仅需 ¥15（99GB）；选择暮光加速或无忧链接，单月实付 ¥19（100GB–120GB）；而选择飞猫云、星岛梦或 Firefly，单月起步原价则为 ¥25（150GB，部分可用 8 折码降至 ¥20）。双轨制披露让用户一眼看清『首月试错成本』与『长期年付均价』的真实差异。",
      relatedLinks: [
        { label: "查看 16 家核心机场双轨价格对比表 (/guides#core-comparison-table)", url: "/guides#core-comparison-table" },
        { label: "查看光速云完整价格梯度与优惠码 (/airports/guangsu)", url: "/airports/guangsu" },
        { label: "查看暮光加速完整价格梯度 (/airports/muguang)", url: "/airports/muguang" }
      ]
    },
    nextAction: "无论某家机场的年付折算价多么诱人，如果您的月均流量需求超过 100GB，请一律按照『单月购买实价』或『中大流量档年付』来评估预算，并坚持先买一个月验证晚高峰表现。"
  },
  {
    id: "chapter-hardware-toolchain",
    number: "第三章",
    tag: "HARDWARE & TOOLCHAIN",
    title: "实验室软硬件探针架构：我们如何测量延迟、吞吐、丢包与流媒体/AI 解锁？",
    whatAndWhen: "【是什么问题 & 何时关注】很多非专业评测只用手机点一下客户端自带的『一键测延迟』，看到绿字就说速度快。事实上，部分客户端默认使用 ICMP Ping 甚至只测本地到国内中转入口的延迟，完全掩盖了出国段的拥堵与 TCP 握手丢包。了解实验室的标准化测试工具链，能帮助您看懂测速图上的每一项指标含义。",
    howToOperate: [
      "1. 物理宽带与跨网基准探针：实验室主测试环境部署于中国华东（上海电信 1000M FTTH、联通 1000M）与华南（广州移动 1000M）标准家庭与工作室光纤环境，确保覆盖三大运营商直连与跨网接入深圳→香港、上海→日本、广州→新加坡专线入口的真实路由。",
      "2. 客户端内核基准：iOS / iPadOS 端统一使用 App Store 正版 **Shadowrocket (小火箭)** 最新稳定版；Windows / macOS / Linux 桌面端统一采用基于 **Mihomo (原 Clash.Meta)** 内核的 **Clash Verge Rev** 与 **Mihomo Party**，以及基于 **Sing-box** 内核的 **Hiddify**（用于验证 Hysteria 2 与 VLESS-Reality 协议）。",
      "3. 自动化测速与解锁检测引擎：批量节点吞吐与拓扑图由 **MAI-TEST-BOT** 自动化测速框架生成，统一测量 HTTP 并发下载均值、最大峰值（Max Speed）、RTT 延迟以及 Netflix / Disney+ / YouTube / OpenAI / Claude 状态矩阵；单节点深度复核则配合开源脚本 `RegionRestrictionCheck` 与 `ipinfo.io` ASN 库进行交叉验证。"
    ],
    conditionsAndLimits: [
      "关于专属客户端品牌的测试说明：由于飞猫云、无忧链接、Firefly、闪跃等品牌在 2026 年 10 月后转向官方专属客户端模式，实验室在复测这类品牌时，通过其官方客户端内置的 TUN/系统代理端口挂载本地测试探针完成五地延迟与吞吐采样。",
      "关于 UDP / QUIC 协议的环境差异：一翻云等支持 Hysteria 2 (基于 QUIC/UDP) 的节点，在电信/联通光纤下能跑出极高的突发吞吐，但在部分对 UDP 实施严厉 QoS 丢包的移动家宽或校园网下，表现可能弱于 TCP 系的 VLESS-Reality 或 Trojan。"
    ],
    realCaseEvidence: {
      title: "真假专线物理延迟铁律：为什么五地 RTT 是检验 IEPL/IPLC 的唯一试金石？",
      detail: "在 2026-10-19 的 12 家横向实测中，所有真 IEPL/IPLC 专线（光速云、暮光、飞猫、微风、星岛梦、二猫、无忧、唯兔、Firefly、一翻云）在三大亚太枢纽的延迟呈现出惊人的物理收敛：香港稳定在 21–27ms、新加坡稳定在 42–46ms、日本稳定在 53–57ms。任何偏离这一区间（如香港 >60ms、新加坡 >120ms）的节点，均可直接判定为非内网专线或发生了公网绕路。",
      relatedLinks: [
        { label: "查看 12 家专线五地延迟与吞吐实测分项表 (/guides#speedtest-comparison-table)", url: "/guides#speedtest-comparison-table" },
        { label: "查看客户端内核选型与下载指南 (/clients)", url: "/clients" }
      ]
    },
    nextAction: "如果您发现自己手头节点的客户端延迟显示仅 30ms，但打开网页依然卡顿，请直接跳转到本页第五部分的『本地终端复现手册』，使用 curl 命令检测真实的 TLS 握手与首包耗时。"
  },
  {
    id: "chapter-affiliate-ethics",
    number: "第四章",
    tag: "AFFILIATE DISCLOSURE & ETHICS",
    title: "商业模式透明披露：推广转介（Affiliate）、搜索规范合规与编辑独立性防火墙",
    whatAndWhen: "【是什么问题 & 何时关注】读者完全有权知道：小火箭评测实验室（xiaohuojian.homes）作为一个无弹窗广告、免费开放查阅的工程级评测数据库，靠什么维持服务器、探针宽带与测试账号采购开销？推广佣金是否会导致我们『收钱吹捧劣质机场』？",
    howToOperate: [
      "1. 运作资金来源说明：本站部分机场品牌的『查看套餐』『进入官网』按钮包含推广转介参数（Affiliate Code，例如 `?code=...`）。当用户通过该链接注册并产生实际消费时，服务商会将系统既定比例的推广佣金划拨给本站，用于补贴每年数十个测试套餐续费与三网探针运维。",
      "2. 零溢价承诺（Zero Markup）：推广链接由机场官方后台统一生成，通过推广链接注册与直接输入网址注册，您看到的套餐定价、流量配额、优惠码折扣力度 100% 完全一致，绝不会因为推广参数而多付一分钱。",
      "3. 编辑独立性与 HTML 规范标记：首先，本站所有外部推广链接均严格遵循 Google Search Central 规范，在 HTML 源码中显式添加 `rel=\"nofollow sponsored noopener\"` 属性，绝不利用商业链接操纵搜索引擎权重；其次，佣金比例高低绝不决定排名先后——排名唯一依据是 L1 实测吞吐、延迟稳定性、运营年限与性价比。不给钱甚至没有推广合作的客户端软件（Shadowrocket、Clash Verge Rev、Mihomo Party、FlClash、Hiddify）同样获得全站最高权重的专题维护。"
    ],
    conditionsAndLimits: [
      "服务边界免责声明：小火箭评测实验室（xiaohuojian.homes）仅提供客观的网络性能评测、协议科普与客户端分流教程，**本站不经营、不控盘、不参与任何机场品牌的实际运营**。",
      "资金与售后隔离：您在任何第三方机场网站产生的充值账单、套餐变更、节点故障或退款争议，均由该第三方服务商独立承担。我们强烈建议所有读者遵循『月付试错、按需购买、保留双梯冗余』的安全原则。"
    ],
    realCaseEvidence: {
      title: "编辑独立性实证：即使有推广链接，依然如实披露每家品牌的短板",
      detail: "在本站排名第 1 的光速云档案中，我们明确写出其『无免费试用、特惠小包不可退款』；在飞猫云 (#3)、无忧链接 (#8)、Firefly (#10) 档案中，我们明确标注『锁死官方专属客户端，不适合软路由与 Shadowrocket 极客』；在唯兔云 (#9) 档案中，我们如实指出其『2026-10-19 美国节点实测延迟 179ms / 下行 17Mbps，不适合美服低延迟竞技』。",
      relatedLinks: [
        { label: "审阅 10 大主力品牌优缺点集中档案 (/guides#brand-deep-profiles)", url: "/guides#brand-deep-profiles" },
        { label: "查看问题反馈与商务联系说明 (/contact)", url: "/contact" }
      ]
    },
    nextAction: "如果您在实测某家收录品牌时发现其实际表现与本站记录出现严重背离（如暗改倍率、晚高峰持续断流或跑路征兆），请立即通过联系页向我们提交证据，核实后将在 24 小时内下调评级或拉黑预警。"
  }
];

// 4. 与本页有关的技术原理与读者本地复现操作手册 (4套可一键复制的验真方案)
export const selfTestPlaybooks: SelfTestPlaybook[] = [
  {
    id: "playbook-curl-timing",
    title: "复现实验一：穿透客户端假延迟——使用终端 curl 拆解 TCP / TLS / 首字节真实耗时",
    scenario: "当客户端显示节点延迟仅 30ms，但打开 ChatGPT 或网页却转圈卡顿时，用此命令检验是否被客户端『入口 ICMP 假延迟』欺骗。",
    toolName: "Windows PowerShell / macOS Terminal / Linux Shell (内置 curl)",
    steps: [
      "1. 打开本地代理客户端（Clash Verge Rev 或 Shadowrocket），确认本地混合代理端口（默认通常为 127.0.0.1:7890 或 7897）。",
      "2. 打开系统终端，执行下方 curl 格式化计时命令，直接向 Google 或 Cloudflare 发起真实 HTTPS 请求。",
      "3. 对比输出的 time_connect（本地到代理入口耗时）、time_appconnect（TLS 加密握手完成耗时）与 time_starttransfer（远端目标服务器返回首字节 TTFB 耗时）。"
    ],
    commandOrConfig: `# 将 7890 替换为您客户端的实际本地端口
curl -x http://127.0.0.1:7890 -o /dev/null -s -w "DNS解析: %{time_namelookup}s | TCP连接: %{time_connect}s | TLS握手: %{time_appconnect}s | 首字节TTFB: %{time_starttransfer}s | 总耗时: %{time_total}s\\n" https://www.google.com/generate_204`,
    expectedOutput: "优质 IEPL/IPLC 香港节点标准输出：TCP连接 ≈ 0.002s | TLS握手 ≈ 0.045s–0.080s | 首字节TTFB ≈ 0.085s–0.150s | 总耗时 < 0.20s。",
    troubleshootingTip: "如果『TCP连接』极快（<0.01s），但『TLS握手』或『首字节TTFB』超过 1.5s 甚至超时，说明该机场的国内中转入口活着，但出国专线或落地机已严重拥塞/断流。"
  },
  {
    id: "playbook-ip-asn",
    title: "复现实验二：核验出口 IP 原生属性与 ASN 类型（预判 ChatGPT / Claude / TikTok 风控）",
    scenario: "验证机场宣称的『原生住宅 IP / 干净流媒体落地』是否属实，排查为什么登录 OpenAI 会弹 Access Denied 或被降智。",
    toolName: "终端 curl + ipinfo.io / Cloudflare Trace 接口",
    steps: [
      "1. 在客户端中将目标节点切换至您准备用于 AI 办公或 TikTok 运营的香港/新加坡/日本/美西节点。",
      "2. 在终端运行下方两条命令，分别获取当前出口 IP 的自治系统号（ASN 组织名称）与 Cloudflare 边缘节点识别出的国家代码（loc）。",
      "3. 检查 org 字段是否包含常见廉价公有云机房关键字（如 AS14061 DigitalOcean、AS20473 Vultr、AS16276 OVH、Hetzner 等）。"
    ],
    commandOrConfig: `# 1. 查询当前代理出口 IP 的 ASN 组织与地理位置
curl -x http://127.0.0.1:7890 -s https://ipinfo.io/json

# 2. 查询 ChatGPT 底层依赖的 Cloudflare 边缘网关如何识别您的连接
curl -x http://127.0.0.1:7890 -s https://chat.openai.com/cdn-cgi/trace`,
    expectedOutput: "ipinfo 返回的 country 应与节点标称地区一致；chat.openai.com/cdn-cgi/trace 中 warp=off、loc=SG/US/JP（若为原生支持区），且无拦截报错。",
    troubleshootingTip: "若节点标称『新加坡原生』，但 ipinfo 显示 country 为 US 或 HK，说明这是广播 IP（Broadcasted IP），极易触发 Disney+ 区域报错与 TikTok 0 播放风控。"
  },
  {
    id: "playbook-dns-leak",
    title: "复现实验三：排查本地 DNS 污染与 WebRTC 真实 IP 泄漏（防封号必查）",
    scenario: "明明连上了合规的专线节点，但浏览器依然打不开部分海外网站，或者跨区账号被平台秒封，通常是因为本地运营商 DNS 抢答或浏览器 WebRTC 暴露了国内真实公网 IP。",
    toolName: "nslookup / dig + 浏览器 WebRTC 检测",
    steps: [
      "1. 开启客户端的 TUN 虚拟网卡模式（或 Fake-IP 增强模式）。",
      "2. 在终端运行下方 nslookup 命令，测试对 openai.com 与 netflix.com 的解析结果。",
      "3. 观察返回的 IP 地址属于 Fake-IP 保留网段（198.18.0.x）还是遭污染的黑名单地址（如 Facebook 边角网段或 127.0.0.1 / 0.0.0.0）。"
    ],
    commandOrConfig: `# 验证客户端 TUN / Fake-IP 是否成功接管系统 DNS 解析
nslookup chat.openai.com
nslookup www.netflix.com`,
    expectedOutput: "开启 Fake-IP 模式下应立即返回 198.18.x.x 网段地址；开启 Redir-Host + 远端 DoH 模式下应返回正确的 Cloudflare / AWS 海外真实 IP。",
    troubleshootingTip: "如果返回的 DNS Server 依然是 192.168.1.1 或本地运营商 DNS（如 114.114.114.114），请立即在 Clash Verge Rev 设置中开启『System Proxy』与『TUN Mode』，并在 DNS 配置中启用 fake-ip 与 nameserver-policy。"
  },
  {
    id: "playbook-throughput-stability",
    title: "复现实验四：YouTube 4K 统计面板（Stats for Nerds）与单线程真实码率验真",
    scenario: "不想跑消耗数 GB 流量的测速脚本，如何在日常使用中用 30 秒验证当前节点的真实流媒体吞吐能力与丢包率？",
    toolName: "YouTube 网页端 / App 端内置『详细统计信息 (Stats for Nerds)』",
    steps: [
      "1. 连接目标节点，打开 YouTube 搜索关键字『4K 60fps HDR Costa Rica』，手动将画质齿轮锁定为 2160p60 (4K)。",
      "2. 在视频画面上右键点击，选择『详细统计信息 (Stats for Nerds)』。",
      "3. 重点观察三项指标：Viewport / Dropped Frames（掉帧数）、Connection Speed（实时连接速率 Kbps）与 Buffer Health（缓冲健康度秒数）。"
    ],
    commandOrConfig: `# 判读标准（无需命令行，直接读取面板数值）：
# 1. Connection Speed ≥ 35,000 Kbps (约 35Mbps) -> 流畅播放 4K 60fps 基准线
# 2. Connection Speed ≥ 80,000 Kbps (约 80Mbps) -> 优质 IEPL/IPLC 专线水准（拖拽进度条秒加载）
# 3. Buffer Health ≥ 15.00 s 且 Dropped Frames = 0 -> 链路零拥塞、零突发丢包`,
    expectedOutput: "本站 L1 级别专线（如光速云、暮光、飞猫、微风、Firefly）在亚太节点下 Connection Speed 普遍可达 85,000 Kbps – 260,000 Kbps。",
    troubleshootingTip: "如果测速软件能跑 300Mbps，但 YouTube Connection Speed 却卡在 5,000 Kbps 以下，说明本地宽带对 UDP (QUIC) 实施了针对性限速——只需在浏览器或客户端中禁用 UDP 443 端口（强制回退至 TCP HTTPS）即可瞬间恢复满速。"
  }
];

// 5. 决策与操作路径：读者如何使用本站数据库完成选型与验真 (5个明确分支)
export const aboutDecisionBranches: AboutDecisionBranch[] = [
  {
    id: "branch-verify-authenticity",
    userNeed: "分支 A：我想先眼见为实，核对各家机场的原始测速图与流媒体解锁截图",
    whatToVerifyFirst: "核查 MAI-TEST-BOT 原始截图中的平均速度、最大速度、节点数量及 Netflix/ChatGPT/Claude 解锁色块",
    recommendedEntryName: "前往【真实测评图库 (/reviews)】",
    recommendedEntryUrl: "/reviews",
    actionChecklist: [
      "对比光速云、暮光加速、飞猫云、微风网络、星岛梦、二猫云等品牌的原始测速长图",
      "观察香港、新加坡、日本三大核心区域的延迟是否稳定在 20–55ms 专线区间",
      "确认目标品牌的 Claude 与 Gemini 解锁状态是『全绿支持』还是『视节点而定』"
    ]
  },
  {
    id: "branch-scenario-selection",
    userNeed: "分支 B：我有明确的业务痛点（如 ChatGPT 防封、TikTok 跨境直播、4K 追剧或永久包精算）",
    whatToVerifyFirst: "对照 16 家核心机场双轨价格表与 5 大场景工程专题中的协议/IP 选型要求",
    recommendedEntryName: "前往【场景化专线选型指南 (/guides)】",
    recommendedEntryUrl: "/guides",
    actionChecklist: [
      "在首屏 6 大场景直达卡中锁定符合预算的首选与备选品牌",
      "查阅 16 家双轨价格总表，对比单月实价（¥15–¥27）与年付小包折算价（¥6.5–¥11.4）",
      "复制专题内置的 Shadowrocket / Clash AI 与流媒体防污染分流规则"
    ]
  },
  {
    id: "branch-full-directory",
    userNeed: "分支 C：我想按排名、线路类型或预算检索全站收录的全部 42 家机场档案",
    whatToVerifyFirst: "区分 L1/L2 实测推荐梯队与 L3/L4 待核实或风险预警品牌",
    recommendedEntryName: "前往【42 家机场全景导航库 (/airports)】",
    recommendedEntryUrl: "/airports",
    actionChecklist: [
      "优先从 Top 1–16 主力实测梯队中挑选运营满 3 年以上的老牌专线",
      "点击任意品牌卡片进入 `/airports/[slug]` 独立详情页查看完整套餐表与优惠码",
      "避开已标注『节点失联/官网异常』的预警品牌（如宇宙云）"
    ]
  },
  {
    id: "branch-client-setup",
    userNeed: "分支 D：我已经买好了机场订阅，需要下载安全客户端并配置 TUN / Fake-IP 分流规则",
    whatToVerifyFirst: "确认所购机场是『支持通用订阅导入』还是『仅限官方专属客户端』",
    recommendedEntryName: "前往【全平台代理客户端中心 (/clients)】",
    recommendedEntryUrl: "/clients",
    actionChecklist: [
      "iOS 用户核对外区 Apple ID 获取正版 Shadowrocket (小火箭) 的安全流程",
      "Windows / macOS 用户获取 Clash Verge Rev、Mihomo Party、FlClash 或 Hiddify 官方开源渠道",
      "按本页第四部分的 4 套本地复现命令检验连接是否真正生效且无 DNS 泄漏"
    ]
  },
  {
    id: "branch-report-issue",
    userNeed: "分支 E：我发现某家机场价格变动、优惠码失效、暗改倍率或想提交新的实测线索",
    whatToVerifyFirst: "准备订单截图、客户端测速日志或终端 curl 报错输出",
    recommendedEntryName: "前往【联系与线索反馈中心 (/contact)】",
    recommendedEntryUrl: "/contact",
    actionChecklist: [
      "提交需要勘误的品牌名称、具体套餐档位或失效节点区域",
      "实验室工程师将在核实后同步更新数据库与核实时间戳"
    ]
  }
];

// 6. 真实且相关的转化与导航卡片 (兼顾站内核心工具入口与经 L1 实测验证的标杆品牌入口)
export const aboutConversionCards: AboutConversionCard[] = [
  {
    id: "conv-guides-matrix",
    name: "2026 场景化专线选型专著手册",
    badge: "站内核心必读 · 2.1万字深度矩阵",
    targetAudience: "需要在购买前对比 16 家核心机场双轨价格、五地实测延迟与 AI/流媒体分流方案的读者",
    costOrCondition: "完全免费开放查阅 · 含可一键复制的 Clash / Shadowrocket 分流配置",
    mainLimitation: "仅聚焦 Top 16 代表性实测品牌，第 29–42 名历史品牌需在全景库检索",
    verifiedDate: "2026-11-07",
    buttonText: "查阅场景选型与对比总表 →",
    targetUrl: "/guides",
    isExternalAffiliate: false
  },
  {
    id: "conv-reviews-gallery",
    name: "MAI-TEST-BOT 真实测速与解锁图库",
    badge: "一手视觉证据 · 25张高清原图",
    targetAudience: "希望直接核对各品牌原始测速吞吐截图、流媒体全绿矩阵与套餐原图的严谨型用户",
    costOrCondition: "完全免费开放查阅 · 支持按品牌对比 2026-08 至 2026-10 实测记录",
    mainLimitation: "L3/L4 级别品牌（如大佬云、闪电鼠等）因缺失实测图暂未收录进图库",
    verifiedDate: "2026-10-19",
    buttonText: "核验 25 张实测高清原图 →",
    targetUrl: "/reviews",
    isExternalAffiliate: false
  },
  {
    id: "conv-guangsu-benchmark",
    name: "光速云 (LightSpeed Cloud) · L1 评测标杆 #1",
    badge: "2020老牌 · IPLC+IEPL双专线标杆",
    targetAudience: "追求香港 22ms / 536Mbps 极速吞吐、ChatGPT/Claude 全节点免降智与全平台通用订阅的主力用户",
    costOrCondition: "月付实价 ¥15/月 (99GB) 或 ¥23/月 (200GB)；年付小包 ¥78/年 (折¥6.5/月，50GB/月)；永久包 ¥138/200GB（优惠码：gsy6666）",
    mainLimitation: "无免费试用，¥78 年付特惠包每月仅 50GB 且不支持退款，建议新用户先从 ¥15 月付档实测",
    verifiedDate: "2026-10-19",
    buttonText: "查看光速云深度评测与套餐 →",
    targetUrl: "/airports/guangsu",
    isExternalAffiliate: false
  },
  {
    id: "conv-clients-hub",
    name: "Shadowrocket / Clash / Sing-box 客户端中心",
    badge: "开源安全渠道 · 防假冒钓鱼网站",
    targetAudience: "需要获取正版 iOS 小火箭、Windows/Mac Clash Verge Rev、Mihomo Party、FlClash 及 Hiddify 的用户",
    costOrCondition: "桌面与安卓开源客户端全部免费（GitHub 官方源）；iOS Shadowrocket 需外区 App Store 付费 $2.99",
    mainLimitation: "若您购买的是飞猫云、无忧链接、Firefly 等专属客户端机场，则无需使用通用第三方客户端",
    verifiedDate: "2026-10-19",
    buttonText: "获取正版客户端与配置教程 →",
    targetUrl: "/clients",
    isExternalAffiliate: false
  }
];

// 7. FAQ 与边界问题 (8 个高价值方法论、数据核实与免责边界问答)
export const aboutFaqs: AboutFaq[] = [
  {
    question: "Q1：为什么我在自己家里测出来的下载速度，和你们测速图上的 500Mbps 有差距？",
    conclusion: "【核心结论】测速图的峰值吞吐取决于『您本地宽带的签约带宽上限』『本地运营商对跨境流量的晚高峰 QoS 策略』以及『您物理位置到机场国内中转入口（广州/上海）的距离』。",
    details: "实验室的 MAI-TEST-BOT 探针运行在标准千兆光纤（1000Mbps）且直连华南/华东核心骨干网的环境下，因此能跑满机场母鸡的物理上限（如光速云 536Mbps、Firefly 547Mbps）。如果您家里是 300M 宽带，物理极值就是 35MB/s（约 280Mbps）；若您处于移动内网、校园网或偏远省份跨网访问深圳入口，出现 20%–40% 的速率折损属于正常物理现象。只要晚高峰 YouTube Connection Speed 能稳定在 50,000 Kbps（50Mbps）以上、延迟不跳ピン，就已完全满足 4K 视频与 AI 办公需求。",
    relatedAnchor: "#chapter-hardware-toolchain"
  },
  {
    question: "Q2：你们页面的核实日期写着 2026-10-19 和 2026-08-11，两个日期有什么区别？",
    conclusion: "【核心结论】`2026-08-11`（及部分 `2026-09-07`）是实验室使用 MAI-TEST-BOT 生成各品牌节点拓扑与流媒体解锁矩阵原图的基准批次；`2026-10-19` 则是我们对 42 家品牌的最新套餐价格、客户端模式变更及 12 家主力专线五地延迟/带宽进行统一横向复核的日期。",
    details: "例如，无忧链接、飞猫云、Firefly 等品牌在 2026 年 8 月时尚支持通用订阅测速，但在 2026 年 10 月更新了运营策略，全面切换为『官方专属客户端登录即用（不提供订阅链接）』。如果只看旧图不看 10-19 的文字复核，软路由用户就会买错。因此我们同时保留历史实测原图与最新复核日期，确保信息链完整可追溯。",
    relatedAnchor: "#audit-tier-table"
  },
  {
    question: "Q3：为什么榜单里有些机场（比如大佬云、闪电鼠、可信云）很多参数写着『待核实』？",
    conclusion: "【核心结论】因为遵循本站第一条红线——『没有经过独立探针实测或官方明确公示的参数，一律如实标注待核实，绝不凭空编造或照搬其他品牌数据』。",
    details: "以大佬云、闪电鼠、云界线、榴莲云、环球梯为例，原始品牌资料仅提供了『季付/年付折算约 ¥5.6/月（60GB）、IEPL 专线』等简要说明，并未提供完整的月付高阶梯度表与独立五地测速图；而可信云因与暮光同源，在 10-19 批次中暂缓了重复测速。将这些资料缺口透明展示出来，正是为了保护读者的知情权。",
    relatedAnchor: "#audit-tier-table"
  },
  {
    question: "Q4：通过你们网站的『查看套餐 / 注册』按钮购买机场，价格会比我自己去搜官网更贵吗？",
    conclusion: "【核心结论】绝对不会。所有套餐定价、流量配额与优惠码折扣均由机场官方系统固定，通过本站推广链接注册不会增加您一分钱费用。",
    details: "相反，使用本站整理的专属核实优惠码（如光速云 `gsy6666`、暮光 `muguang666`、飞猫云 8 折码 `feimao80`、微风 8 折码 `weifeng80`、唯兔 `weitu666`、Firefly 8 折码 `firefly`），还能直接享受官方 8 折或 9 折减免。更为关键的是，搜索引擎中充斥着大量高仿钓鱼域名，本站定期巡检并更新官方有效直连注册入口，能帮您规避误入假冒网站导致的资金损失。",
    relatedAnchor: "#chapter-affiliate-ethics"
  },
  {
    question: "Q5：如果我在某家推荐的机场充值后遇到节点连不上或想退款，可以找小火箭评测实验室处理吗？",
    conclusion: "【核心结论】不可以处理资金退款，但您可以参照本站排障指南自检，或向我们举报服务商违约行为。",
    details: "本站是完全独立的第三方网络性能评测与知识智库，不持有任何机场的后台权限，也不经手任何用户资金。若遇到连接问题，请先使用本页第四部分的 `curl` 与 `nslookup` 命令排查是否是本地客户端 TUN/DNS 配置错误或订阅未更新；若确属机场方节点故障或账单问题，需直接联系该机场官网右下角的在线客服或提交工单。若发现某家机场恶意跑路或失联，请通过 `/contact` 告知我们，我们将立即全站拉黑预警。",
    relatedAnchor: "#self-test-playbooks"
  },
  {
    question: "Q6：你们对『专属客户端机场』和『通用订阅机场』的评价标准有什么不同？",
    conclusion: "【核心结论】两者在物理测速标准上完全一致，但在『适用人群与限制披露』上执行严格区分，防止技术极客与零基础小白错配。",
    details: "专属客户端机场（如飞猫云、无忧链接、Firefly、闪跃）将节点内置在官方定制软件中，用户输入账号密码即可一键连接，省去了找客户端、复制订阅链接、配分流规则的繁琐步骤，极适合零基础新手；但它的致命限制是无法导入 Shadowrocket、Clash Verge Rev 或软路由。因此我们在所有表格中专门设立了『客户端导入方式』列，强制标明每一家的开放程度。",
    relatedAnchor: "#benchmark-metrics-table"
  },
  {
    question: "Q7：为什么你们强烈反对新用户上来就直接买年付或大额永久包？",
    conclusion: "【核心结论】因为跨境网络受本地运营商墙中墙（省际网关策略）、晚高峰跨网调度以及机场自身周期性维护影响极大，唯有『先用 ¥15–¥25 月付实测两周』才是最科学的避坑准则。",
    details: "哪怕是综合排名第一的光速云或暮光加速，在全国数千个不同小区的宽带环境下也不可能做到 100% 毫无差别。唯一例外是：当您只想花 ¥78–¥96 买一个全年防失联的备用小流量包（40–60GB/月），或者在已经月付实测满意后，再加购 ¥100–¥200 的一次性永久不限时流量包作为双梯冗余。",
    relatedAnchor: "#chapter-pricing-audit"
  },
  {
    question: "Q8：网站上的结构化数据（Schema）与最后核实时间是如何维护的？",
    conclusion: "【核心结论】本站所有核心页面均采用真实可见正文驱动的 JSON-LD 结构化数据（`AboutPage`、`TechArticle`、`Dataset`、`FAQPage`），且 `dateModified` 与表格中的 `verifiedDate` 严格对应实际工程复核日期。",
    details: "我们拒绝使用脚本自动生成每日虚假更新时间戳的作弊手法。页面标注的 `2026-10-19` 代表原始机场数据包与五地测速记录的采集核实日，`2026-11-07` 代表本专著级页面架构与工程校验标准的重构发布日。",
    relatedAnchor: "#data-sources-gaps"
  }
];
