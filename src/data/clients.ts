// 全平台代理客户端与梯子工具矩阵专著级数据库 (xiaohuojian.homes)
// 包含 6 大平台（iOS, Windows, Android, macOS, Linux, OpenWrt/软路由）
// 严格核查自《第三方代理客户端.txt》与 2026 最新开源/官方安全审计资料

export interface ClientQuickAnswer {
  platform: string;
  icon: string;
  recommendedTool: string;
  secondaryTool: string;
  coreAdvantage: string;
  pricingOrAcquisition: string;
  avoidPitfall: string;
  anchor: string;
}

export interface ClientComparisonRow {
  name: string;
  platform: string;
  category: string; // "通用开源客户端" | "进阶商业软件" | "专属客户端"
  coreEngine: string; // "Mihomo (原 Meta)" | "Xray-core" | "sing-box" | "自研内核"
  supportedProtocols: string;
  tunModeSupport: string;
  ruleSplitCapability: string;
  licenseAndPrice: string;
  securityAudit: string;
  bestAudience: string;
  officialSource: string;
  verifiedDate: string;
}

export interface ClientDetailedChapter {
  id: string;
  platform: string;
  icon: string;
  headline: string;
  searchIntent: string;
  coreDecision: string;
  painPointAndTiming: string;
  recommendedToolsList: {
    name: string;
    tag: string;
    architectureOrKernel: string;
    downloadUrl: string;
    features: string[];
    limitations: string[];
    isRecommended: boolean;
  }[];
  stepByStepPlaybook: {
    stepTitle: string;
    instruction: string;
    codeSnippet?: string;
  }[];
  protocolAndTunMechanics: string;
  commonErrorsAndTroubleshooting: {
    symptom: string;
    cause: string;
    solution: string;
  }[];
  relatedAirportAnchor: string;
}

export interface ClientDecisionNode {
  scenarioId: string;
  userProfile: string;
  budgetAndSkill: string;
  recommendedCombination: string;
  whyThisChoice: string;
  actionRoute: string;
}

export interface ClientFaqItem {
  question: string;
  conclusion: string;
  details: string;
  relatedAnchor?: string;
}

// 1. 首屏直接给出答案：6 大操作系统客户端首选与排坑决策卡
export const clientQuickAnswers: ClientQuickAnswer[] = [
  {
    platform: "iOS / iPadOS",
    icon: "🍎",
    recommendedTool: "Shadowrocket (小火箭)",
    secondaryTool: "Stash / sing-box (SFI)",
    coreAdvantage: "极速秒连、低待机耗电、原生兼容 SS/VLESS/Trojan、支持按需规则分流与测速排序",
    pricingOrAcquisition: "美区/外区 App Store 官方售价 $2.99（需非国区 Apple ID 一次性购买）",
    avoidPitfall: "国区 App Store 无法搜到正版；严禁在公用非信任 Apple ID 登录 iCloud，切勿下载带有广告的高仿同名山寨软件。",
    anchor: "#ios-playbook"
  },
  {
    platform: "Windows 电脑",
    icon: "🪟",
    recommendedTool: "Clash Verge Rev",
    secondaryTool: "v2rayN / FlClash / Hiddify",
    coreAdvantage: "基于现代 Mihomo 内核、现代化 Fluent UI、一键 TUN 虚拟网卡接管所有桌面程序与终端 Git/pip/npm",
    pricingOrAcquisition: "开源免费（GitHub Releases 官方开源仓库发布）",
    avoidPitfall: "老旧已停更的 Clash for Windows (CFW) 存在旧内核漏洞，请彻底卸载并迁移至 Clash Verge Rev；避免下载被注入恶意后门的第三方重打包版本。",
    anchor: "#windows-playbook"
  },
  {
    platform: "Android 安卓系统",
    icon: "🤖",
    recommendedTool: "v2rayNG / FlClash",
    secondaryTool: "Hiddify / Karing / SFA",
    coreAdvantage: "v2rayNG 内存占用极低且支持分应用代理；FlClash 提供精致 Material 3 界面与 Mihomo 规则分流",
    pricingOrAcquisition: "开源免费（GitHub 官方发布 APK，免 Google Play 框架亦可流畅运行）",
    avoidPitfall: "NekoBox 官方已提示维护资源有限，并严正警告切勿下载已被第三方控制的假冒 Google Play 版本；安装 APK 时需授予自启动与电量无限制权限以防后台杀进程。",
    anchor: "#android-playbook"
  },
  {
    platform: "macOS 苹果电脑",
    icon: "💻",
    recommendedTool: "Clash Verge Rev (Universal / arm64)",
    secondaryTool: "Surge 5 for Mac / FlClash",
    coreAdvantage: "原生兼容 Apple Silicon (M1/M2/M3/M4) 与 Intel 架构，提供 TUN/增强模式完整接管终端与 Docker 容器流量",
    pricingOrAcquisition: "Clash Verge Rev 开源免费；Surge for Mac 为高阶商业收费软件（单授权 $49.99 起）",
    avoidPitfall: "首次启动 macOS 版需在「系统设置 → 隐私与安全性」允许安装系统代理帮助程序（Helper）；M 系列芯片切勿错下 x64 架构以避免 Rosetta 转译发热。",
    anchor: "#macos-playbook"
  },
  {
    platform: "Linux 桌面与服务器",
    icon: "🐧",
    recommendedTool: "Clash Verge Rev / v2rayA",
    secondaryTool: "sing-box / FlClash",
    coreAdvantage: "v2rayA 提供 Web 网页化控制台，无 GUI 纯命令行服务器可实现透明网关；Verge Rev 提供完整 AppImage / deb / rpm 桌面支持",
    pricingOrAcquisition: "完全开源免费（GPL / MIT 协议）",
    avoidPitfall: "运行 systemd 托管服务时需配置好 `systemd-resolved` 防止 53 端口冲突；配置 iptables/nftables 透明代理时必须避开内网直连广播。",
    anchor: "#linux-playbook"
  },
  {
    platform: "OpenWrt / 软路由",
    icon: "🌐",
    recommendedTool: "OpenClash",
    secondaryTool: "PassWall 2 / Nikki / HomeProxy",
    coreAdvantage: "全屋设备（Apple TV、智能电视、PS5/Switch 主机）免装客户端透明出国；支持 Fake-IP 高速防污染 DNS 缓存",
    pricingOrAcquisition: "开源免费（OpenWrt 第三方软路由固件/插件生态）",
    avoidPitfall: "安装前需核对软路由 CPU 架构（x86-64 / aarch64）与可用闪存空间；Nikki 项目明确要求 OpenWrt 24.10 以上固件；切勿在小闪存旧路由器上强行安装大型内核导致变砖。",
    anchor: "#openwrt-playbook"
  }
];

// 2. 核心对比表：20+ 款主流梯子客户端深度横向评测
export const clientComparisonRows: ClientComparisonRow[] = [
  {
    name: "Shadowrocket (小火箭)",
    platform: "iOS / iPadOS",
    category: "独立商业软件",
    coreEngine: "自研原生网络引擎",
    supportedProtocols: "SS, VLESS, Trojan, VMess, Hysteria 2, WireGuard, SOCKS5",
    tunModeSupport: "原生 NetworkExtension (TUN)",
    ruleSplitCapability: "卓越 (域名/IP-CIDR/GEOIP/USER-AGENT/URL Rewrite/脚本)",
    licenseAndPrice: "付费买断 ($2.99 / 一次购买多设备共享)",
    securityAudit: "上架 App Store 严格沙盒，无第三方广告，闭源但持续运营近 10 年",
    bestAudience: "全网 iOS 用户首选装机神器，极适合配合专线机场实现全自动分流",
    officialSource: "https://apps.apple.com/us/app/shadowrocket/id932747118",
    verifiedDate: "2026-10-19"
  },
  {
    name: "Clash Verge Rev",
    platform: "Windows / macOS / Linux",
    category: "通用开源客户端",
    coreEngine: "Mihomo (原 Clash.Meta 内核)",
    supportedProtocols: "SS, VLESS (Reality), Trojan, Hysteria 2, TUIC, VMess, WireGuard",
    tunModeSupport: "原生 TUN 虚拟网卡 (Wintun / macOS PacketTunnel)",
    ruleSplitCapability: "顶尖 (Clash YAML / Rule-Providers / 进程匹配 / 策略组嵌套)",
    licenseAndPrice: "开源免费 (GPL-3.0)",
    securityAudit: "社区活跃，GitHub 源码公开审查，已彻底取代老旧停更的 CFW",
    bestAudience: "Windows 及 Mac 电脑主力用户、需要接管终端命令行及多协议极客",
    officialSource: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
    verifiedDate: "2026-10-19"
  },
  {
    name: "v2rayN",
    platform: "Windows / Linux",
    category: "通用开源客户端",
    coreEngine: "Xray-core / sing-box 双内核可选",
    supportedProtocols: "VLESS, VMess, Trojan, Shadowsocks, Hysteria 2, WireGuard",
    tunModeSupport: "支持 (基于 sing-box 或 tun2socks 路由)",
    ruleSplitCapability: "优秀 (基于路由规则集与自定义黑白名单)",
    licenseAndPrice: "开源免费 (GPL-3.0)",
    securityAudit: "老牌开源项目，支持单节点批量 Ping/测速与订阅分组，无后门",
    bestAudience: "习惯传统多节点列表管理、自建 VPS 多协议测试及开发者",
    officialSource: "https://github.com/2dust/v2rayN/releases",
    verifiedDate: "2026-10-19"
  },
  {
    name: "v2rayNG",
    platform: "Android",
    category: "通用开源客户端",
    coreEngine: "Xray-core",
    supportedProtocols: "VLESS (XTLS/Reality), VMess, Trojan, Shadowsocks",
    tunModeSupport: "Android VpnService 原生接管",
    ruleSplitCapability: "实用 (支持分应用代理、绕过局域网及大陆地址)",
    licenseAndPrice: "开源免费 (GPL-3.0)",
    securityAudit: "安卓最稳定的国民级客户端，纯净无广告，极低后台内存占用 (30-60MB)",
    bestAudience: "安卓手机、平板、智能电视盒通用必备工具",
    officialSource: "https://github.com/2dust/v2rayNG/releases",
    verifiedDate: "2026-10-19"
  },
  {
    name: "FlClash",
    platform: "Android / Windows / macOS / Linux",
    category: "通用开源客户端",
    coreEngine: "Mihomo 内核",
    supportedProtocols: "SS, VLESS, Trojan, Hysteria 2, VMess, TUIC",
    tunModeSupport: "原生 TUN 虚拟网卡支持",
    ruleSplitCapability: "顶尖 (完全继承 Mihomo 策略组与规则语法)",
    licenseAndPrice: "开源免费 (GPL-3.0)",
    securityAudit: "基于 Flutter 构建，多端 UI 体验高度一致，内存开销优于 Electron",
    bestAudience: "追求现代极简颜值、在手机与桌面端寻求一致体验的用户",
    officialSource: "https://github.com/chen08209/FlClash/releases",
    verifiedDate: "2026-10-19"
  },
  {
    name: "Hiddify",
    platform: "Windows / macOS / Linux / Android / iOS",
    category: "通用开源客户端",
    coreEngine: "sing-box 内核",
    supportedProtocols: "全协议覆盖 (Hysteria 2, TUIC, VLESS-Reality, SSH, WireGuard等)",
    tunModeSupport: "原生全平台 TUN 接管",
    ruleSplitCapability: "良好 (智能自适应路由、自动最优节点选择)",
    licenseAndPrice: "开源免费 (GPL-3.0)",
    securityAudit: "专注抗封锁场景，提供标准化跨平台体验，新手导入订阅即用",
    bestAudience: "本地宽带存在严重干扰、需要无脑一键自适应连接的新手与极客",
    officialSource: "https://github.com/hiddify/hiddify-app/releases",
    verifiedDate: "2026-10-19"
  },
  {
    name: "OpenClash",
    platform: "OpenWrt / 软路由",
    category: "网关级插件",
    coreEngine: "Mihomo / Clash Premium 双核心",
    supportedProtocols: "全协议 (通过 Mihomo 内核扩展)",
    tunModeSupport: "Fake-IP (TUN) / Redir-Host 混合模式",
    ruleSplitCapability: "极致 (全屋设备无感透明分流、局域网黑白名单、DoH防污染)",
    licenseAndPrice: "开源免费 (GPL-3.0)",
    securityAudit: "软路由固件标准配备，完全本地运行，不上传任何局域网流量数据",
    bestAudience: "家庭与工作室软路由网络管理者、全屋智能终端出国需求",
    officialSource: "https://github.com/vernesong/OpenClash",
    verifiedDate: "2026-10-19"
  },
  {
    name: "Stash",
    platform: "iOS / iPadOS / macOS / tvOS",
    category: "独立商业软件",
    coreEngine: "Clash 内核兼容引擎",
    supportedProtocols: "SS, VLESS, Trojan, VMess, Hysteria 2, TUIC, WireGuard",
    tunModeSupport: "原生支持",
    ruleSplitCapability: "顶尖 (原生支持 Clash 配置语法、策略组覆写、JavaScript 脚本)",
    licenseAndPrice: "付费买断 ($3.99 左右 / 外区 App Store)",
    securityAudit: "iOS 平台 Clash 最佳平替，支持 Apple TV (tvOS) 独立运行作为旁路由",
    bestAudience: "习惯 Clash 规则语法、拥有 Apple TV 希望实现客厅免翻墙的用户",
    officialSource: "https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349",
    verifiedDate: "2026-10-19"
  },
  {
    name: "Quantumult X (圈X)",
    platform: "iOS / iPadOS",
    category: "独立商业软件",
    coreEngine: "自研高性能网络引擎",
    supportedProtocols: "SS, SSR, VMess, Trojan, HTTP(S)",
    tunModeSupport: "原生支持",
    ruleSplitCapability: "极致 (MITM 解密、重写 Rewrite、JS 自动化脚本生态极为繁荣)",
    licenseAndPrice: "付费买断 ($7.99 / 外区 App Store)",
    securityAudit: "老牌神级软件，功耗与吞吐控制极其出色，但对现代 VLESS/Hy2 协议支持较慢",
    bestAudience: "需要去网页广告、执行签到脚本、微调每条请求的高阶 iOS 极客",
    officialSource: "https://apps.apple.com/us/app/quantumult-x/id1453926345",
    verifiedDate: "2026-10-19"
  },
  {
    name: "Surge 5",
    platform: "iOS / macOS",
    category: "高阶商业调试器",
    coreEngine: "企业级自研引擎",
    supportedProtocols: "SS, Trojan, VMess, Snell, SOCKS5, HTTP(S), WireGuard",
    tunModeSupport: "全系统增强接管 (Enhanced Mode)",
    ruleSplitCapability: "工业级标杆 (网络捕获、实时仪表盘、精准流量溯源、本地抓包)",
    licenseAndPrice: "高阶订阅制/买断 (iOS $49.99 起 / Mac 独占授权更高)",
    securityAudit: "苹果生态网络代理的黄金天花板，商业网络工程师专用",
    bestAudience: "预算充裕、从事网络抓包调试与跨国商业架构的技术专家",
    officialSource: "https://nssurge.com/",
    verifiedDate: "2026-10-19"
  },
  {
    name: "Karing",
    platform: "iOS / Android / Windows / macOS",
    category: "跨平台开源新秀",
    coreEngine: "sing-box 内核",
    supportedProtocols: "VLESS, Trojan, SS, Hysteria 2, TUIC",
    tunModeSupport: "原生 TUN 模式",
    ruleSplitCapability: "良好 (支持多格式订阅、直观的分流切换界面)",
    licenseAndPrice: "开源免费",
    securityAudit: "UI 清新，多端同步，适合不愿折腾复杂规则的新手用户",
    bestAudience: "家庭多设备用户、希望免学习成本上手的新手",
    officialSource: "https://github.com/KaringX/karing/releases",
    verifiedDate: "2026-10-19"
  },
  {
    name: "Nikki (原 OpenWrt-nikki)",
    platform: "OpenWrt 24.10+",
    category: "现代轻量软路由插件",
    coreEngine: "Mihomo 内核",
    supportedProtocols: "全协议支持",
    tunModeSupport: "基于 TProxy / TUN 的纯净透明代理",
    ruleSplitCapability: "顶尖 (原生 Mihomo 规则、零冗余 Web 界面)",
    licenseAndPrice: "开源免费",
    securityAudit: "代码架构现代，无历史旧代码包袱，明确要求 OpenWrt 24.10 以上固件",
    bestAudience: "追求系统干净轻量、运行高版本 OpenWrt 固件的软路由极客",
    officialSource: "https://github.com/nikkinikki-org/OpenWrt-nikki",
    verifiedDate: "2026-10-19"
  }
];

// 3. 围绕 6 大核心平台展开的深度配置与实战指南 (H2/H3 结构化工程数据)
export const clientChapters: ClientDetailedChapter[] = [
  {
    id: "ios-playbook",
    platform: "iOS / iPadOS 苹果手机与平板",
    icon: "🍎",
    headline: "Shadowrocket (小火箭) 购买下载、订阅导入与防跳直连分流全攻略",
    searchIntent: "解决国区 App Store 搜索不到小火箭、假冒软件横行、美区账号购买困难、订阅节点更新失败以及分流配置错误导致国内 App 变慢问题",
    coreDecision: "iOS 首选且唯一的全能国民级工具就是 Shadowrocket ($2.99)。只需一个非国区 Apple ID 一次性购买，即可终身享受低功耗、全协议支持（SS/VLESS/Trojan/Hysteria2）与原生按需连接能力。预算充裕且习惯 Clash 规则者可考虑 Stash ($3.99)。",
    painPointAndTiming: "【痛点场景与关注时机】新买 iPhone 或刚接触出国网络的新手，在国区 App Store 搜索「小火箭」会搜出一堆带有「VPN」「加速器」名字的高仿扣费软件（甚至诱导周费 ¥68）。您必须明确：Shadowrocket 从未在中国大陆 App Store 上架，正版开发者名为『Pan modal (Shadowlaunch Technology Group LLC)』，售价固定为 $2.99。",
    recommendedToolsList: [
      {
        name: "Shadowrocket (小火箭)",
        tag: "iOS 最强国民首选",
        architectureOrKernel: "自研原生低功耗引擎",
        downloadUrl: "https://apps.apple.com/us/app/shadowrocket/id932747118",
        features: [
          "原生支持 Shadowsocks、VLESS (Reality)、Trojan、Hysteria 2、WireGuard 全协议",
          "支持扫码导入、剪贴板一键识别、多种订阅链接格式自动更新",
          "内置规则分流（配置模式），国内域名与 IP 极速直连，海外流量走节点",
          "按需连接（On-Demand）：进入特定 Wi-Fi 或蜂窝网络时自动无感开启"
        ],
        limitations: [
          "必须使用非国区（美区/港区/日区）Apple ID 购买（售价 $2.99）",
          "不提供免费版，切勿在非官方渠道下载所谓的破解 ipa 以免被盗取敏感数据"
        ],
        isRecommended: true
      },
      {
        name: "Stash",
        tag: "Clash for iOS 最佳平替",
        architectureOrKernel: "Mihomo/Clash 核心定制",
        downloadUrl: "https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349",
        features: [
          "完美兼容 Clash YAML 配置文件与策略组嵌套",
          "支持覆写功能、分流规则集热更新与 JavaScript 脚本支持",
          "支持 Apple TV (tvOS 17+) 原生运行，可将客厅电视盒直接当成透明网关"
        ],
        limitations: [
          "价格略高于小火箭（约 $3.99），初学者理解策略组概念成本略高"
        ],
        isRecommended: false
      }
    ],
    stepByStepPlaybook: [
      {
        stepTitle: "第一步：安全获取外区 Apple ID 并下载正版小火箭",
        instruction: "在电脑或手机浏览器打开 appleid.apple.com 注册一个美区账号（账单地址填写免税州如俄勒冈 Oregon）。在 App Store 退出当前国区账号，登录新注册的外区账号，通过购买正规苹果礼品卡（Apple Gift Card）兑换 $2.99 余额，搜索『Shadowrocket』点击购买下载。下载完成后务必退出外区账号，换回国区日常账号（下载的 App 会永久保留且不影响后续更新）。"
      },
      {
        stepTitle: "第二步：在机场后台获取通用订阅链接",
        instruction: "登录您购买的专线机场（如光速云、暮光加速、微风网络等），在用户中心仪表盘找到『便捷导入』或『订阅链接』，优先点击『复制通用订阅链接』或『复制 Shadowrocket 专属订阅』。"
      },
      {
        stepTitle: "第三步：打开小火箭自动识别或手动添加订阅",
        instruction: "打开 Shadowrocket 应用，软件会自动读取系统剪贴板，弹出『是否导入订阅节点』弹窗，点击『保存』；若未自动弹出，点击主界面右上角『+』号，类型（Type）选择『Subscribe』，将复制的链接粘贴进『URL』一栏，备注填写机场名称（如光速云），点击右上角『保存』。软件将瞬间拉取全部香港、新加坡、日本、美国等节点列表。"
      },
      {
        stepTitle: "第四步：设置全局路由为『配置 (Config)』并启动连接",
        instruction: "在主界面下方『全局路由』处，务必确保选择的是【配置 (Config)】（绝不要选『代理/Proxy』，否则国内微信和淘宝也会绕道海外消耗流量）。点击测速（Ping 排序），选中延迟低且绿色的节点（如香港 IEPL 01），打开顶部总开关，系统弹出『添加 VPN 配置』提示时输入手机锁屏密码确认授权即可畅享高速上网！"
      }
    ],
    protocolAndTunMechanics: "Shadowrocket 内部基于 iOS NetworkExtension 框架创建虚拟 TUN 接口。当应用发起网络请求时，流量首先进入小火箭内部的路由决策树：如果是国内顶级域名（.cn）、国内各大互联网公司域名（通过 内置规则集 GEOIP CN 判断）或局域网私有地址，小火箭直接将数据包交由本地物理网卡发送（DIRECT），只有命中海外规则名单的流量才会打包加密发送给远程代理节点（PROXY），彻底杜绝微信断连与国内网速下降。",
    commonErrorsAndTroubleshooting: [
      {
        symptom: "订阅更新失败，提示「Invalid format」或超时错误",
        cause: "机场原订阅域名遭本地运营商 DNS 污染，或使用了仅限专属客户端的账号链接。",
        solution: "先开启其他可用热点或用历史可用节点开启代理后再点更新订阅；或登录机场后台获取免翻墙备用订阅 API 接口；核实该机场是否已转为锁专属客户端模式（如无忧链接/飞猫云需使用官方定制 App）。"
      },
      {
        symptom: "打开 ChatGPT 或 Netflix 提示「Access Denied」或仅显示自制剧",
        cause: "默认走到了非原生广播出口，或节点当前出口 IP 被 OpenAI/Netflix 封控识别为机房代理。",
        solution: "在小火箭节点列表中手动切换至标有『原生/AI专线』的香港/新加坡或美西节点，并在底层规则中将 `DOMAIN-SUFFIX,openai.com,PROXY` 绑定至特定低风控住宅节点组。"
      }
    ],
    relatedAirportAnchor: "光速云 (#1) 与微风网络 (#4) 均提供经过官方实测核验的 Shadowrocket 一键导入订阅与全节点 1 倍率保障。"
  },
  {
    id: "windows-playbook",
    platform: "Windows 电脑客户端",
    icon: "🪟",
    headline: "Windows 平台 Clash Verge Rev 与 v2rayN 现代化配置实战",
    searchIntent: "解决老旧 Clash for Windows 停更风险、如何下载官方安全版 Clash Verge Rev、开启 TUN 虚拟网卡接管系统全部软件（包括 CMD/PowerShell/Git）、以及防 DNS 泄漏与局域网代理共享",
    coreDecision: "Windows 平台 2026 年绝对主力首选是基于现代 Mihomo (Meta) 内核的 Clash Verge Rev。彻底弃用停止维护的 CFW，Verge Rev 凭借现代化 Fluent UI、一键 TUN 模式、强大的规则提供者（Rule Providers）成为桌面端无可替代的标准答案。对于自建节点极客，v2rayN 同样作为可靠补充。",
    painPointAndTiming: "【痛点场景与关注时机】许多用户电脑上依然运行着 2023 年底停更的 Clash for Windows (CFW)，不仅无法解析现代 Hysteria 2 / VLESS-Reality 等新协议，且存在已知的历史漏洞；更致命的是，很多非官方下载站打包了带有盗号木马的「汉化版 CFW」。在升级 Windows 11 或遇到 Git clone 报错时，必须立即切换至 Clash Verge Rev。",
    recommendedToolsList: [
      {
        name: "Clash Verge Rev",
        tag: "Windows 首选推荐",
        architectureOrKernel: "Mihomo (原 Clash.Meta) 内核",
        downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
        features: [
          "Mihomo 内核原生加持，完美支持 VLESS (Reality)、Hysteria 2、TUIC 等全部现代协议",
          "原生一键 TUN 模式（基于 Wintun 驱动），免配系统环境变量即可全盘接管命令行与游戏",
          "支持 Clash YAML 订阅一键导入、定时自动更新与智能策略组切换",
          "支持订阅脚本与扩展配置覆写，具备中文 Fluent UI 现代化界面"
        ],
        limitations: [
          "开启 TUN 模式首次需要以管理员权限安装虚拟网卡服务",
          "部分杀毒软件可能对开源 Wintun 驱动误报，需加入信任名单"
        ],
        isRecommended: true
      },
      {
        name: "v2rayN",
        tag: "多核心老牌利器",
        architectureOrKernel: "Xray-core / sing-box 双内核",
        downloadUrl: "https://github.com/2dust/v2rayN/releases",
        features: [
          "支持单节点批量 Ping/TCPing/真连接测速",
          "支持原生 vmess/vless/trojan/shadowsocks 链接直接粘贴",
          "内存占用极小，不依赖 Electron 渲染"
        ],
        limitations: [
          "界面风格偏传统工程化，策略组分流配置对小白不如 Clash 直观"
        ],
        isRecommended: true
      }
    ],
    stepByStepPlaybook: [
      {
        stepTitle: "第一步：在 GitHub 官方 Releases 下载对应 Windows 架构的安装包",
        instruction: "前往官方项目 releases 页面（谨防假冒仿冒网址），主流 64 位 Intel/AMD 电脑下载 `Clash.Verge_x.x.x_x64-setup.exe`（Arm64 架构平板下载 arm64 安装包）。运行安装向导，完成安装。"
      },
      {
        stepTitle: "第二步：导入机场提供的 Clash / Meta 订阅链接",
        instruction: "在机场网站（如光速云、暮光等）点击『复制 Clash 订阅链接』。打开 Clash Verge Rev，点击左侧菜单栏的【订阅 (Profiles)】，将链接粘贴至顶部的 URL 输入框，点击【导入 (Import)】。导入成功后，鼠标右键点击该配置卡片，选择【使用 (Use)】将其激活（卡片左侧变蓝即生效）。"
      },
      {
        stepTitle: "第三步：配置 TUN 虚拟网卡模式（关键排障步骤）",
        instruction: "点击左侧【设置 (Settings)】，找到『内核配置』。点击【服务模式 (Service Mode)】旁边的【安装 (Install)】，Windows 会弹窗申请管理员权限，安装成功后图标由红变绿。接着在设置中打开【TUN 模式】开关，并打开【系统代理 (System Proxy)】。此时，无论浏览器、微信客户端还是 VS Code、Git 终端，所有出国网络均被底层接管！"
      },
      {
        stepTitle: "第四步：在代理策略组选择节点并测试连通性",
        instruction: "点击左侧【代理 (Proxies)】，策略组选择【Rule (规则模式)】。在『节点选择』或『PROXIES』分组中，点击右下角闪电图标进行批量测速，选择一个低延迟的香港或日本 IEPL 节点。打开浏览器访问 fast.com 即可验证下载满速表现。"
      }
    ],
    protocolAndTunMechanics: "传统的 Windows 系统代理仅向操作系统注册了 HTTP/HTTPS 环境变量（127.0.0.1:7890），大量不遵守系统代理规范的程序（如 Git、pip、npm、Docker 以及各类游戏客户端）会直接绕过代理走本地直连导致网络超时。Clash Verge Rev 开启 TUN 模式后，会在 Windows 网络适配器中创建一个 Wintun 虚拟网卡，并在内核路由表中接管所有出站 IP 数据包，将所有流量经由 Fake-IP（198.18.0.0/15）直接送入 Mihomo 核心分流，实现真正的全系统透明代理！",
    commonErrorsAndTroubleshooting: [
      {
        symptom: "开启 TUN 模式后电脑无法联网，网页全部提示 DNS 解析失败",
        cause: "系统中存在其他旧版 TAP 虚拟网卡残留冲突，或本地 53 端口被某些安全软件/本地 DNS 服务强行占用。",
        solution: "进入 Clash Verge Rev 设置，点击『服务模式』卸载后重新安装；在 DNS 配置中将增强模式设为 `fake-ip`，并将 DNS 监听端口设为 1053 或自动避免占用 53 端口；在控制面板中停用卸载无用的旧版 TAP-Windows 适配器。"
      },
      {
        symptom: "Windows 终端下 Git / pip 依然报错无法连接 GitHub 或 HuggingFace",
        cause: "未开启 TUN 模式，且终端未显式读取本地环境变量代理。",
        solution: "最省心方案是直接开启 Clash Verge Rev 的 TUN 模式；若不想开启 TUN，可在 PowerShell 中临时运行：`$env:all_proxy=\"http://127.0.0.1:7897\"`。"
      }
    ],
    relatedAirportAnchor: "微风网络 (#4) 与一翻云 (#16) 全面兼容 Clash Verge Rev 的现代 VLESS-Reality 与 Hysteria2 协议下发。"
  },
  {
    id: "android-playbook",
    platform: "Android (安卓手机、平板与电视盒)",
    icon: "🤖",
    headline: "Android 平台 v2rayNG 与 FlClash 双雄选型与后台保活指南",
    searchIntent: "解决国内安卓手机无法访问 Google Play 下载客户端、微信国内流量被分流浪费、后台被手机系统杀进程掉线、以及 NekoBox 假冒版本防坑",
    coreDecision: "安卓端双雄并立：追求极致省电、极小内存占用（30MB）与纯粹 Xray 核心首选 **v2rayNG**；追求现代精致 Material 3 界面与强大 Clash 规则分流首选 **FlClash**。对多协议自适应感兴趣的新手可使用 **Hiddify**。切记避开 NekoBox 假冒盗版！",
    painPointAndTiming: "【痛点场景与关注时机】安卓厂商的定制系统（小米 HyperOS、华为 HarmonyOS、vivo OriginOS、OPPO ColorOS 等）具有极其激进的后台省电策略，经常在用户锁屏 5 分钟后杀死代理 VPN 进程；此外，NekoBox 官方项目已被第三方在 Google Play 抢注冒名，下载盗版极易导致订阅链接与隐私外泄。在安卓配置时必须从 GitHub Releases 官方源码仓下载，并做好电池无限制白名单配置。",
    recommendedToolsList: [
      {
        name: "v2rayNG",
        tag: "安卓装机必备标杆",
        architectureOrKernel: "Xray-core 原生封装",
        downloadUrl: "https://github.com/2dust/v2rayNG/releases",
        features: [
          "原生基于 Xray-core，支持 VLESS (Reality)、VMess、Trojan、Shadowsocks",
          "极简原生设计，后台运行内存仅 30-50MB，对低配手机极度友好",
          "支持应用分流（分应用代理）：可勾选让特定海外 App 走代理，国内微信抖音淘宝绝对直连",
          "支持扫描屏幕二维码导入、批量更新订阅分组与真连接测速"
        ],
        limitations: [
          "界面偏原生朴素，暂不支持复杂的 Clash YAML 策略组嵌套"
        ],
        isRecommended: true
      },
      {
        name: "FlClash for Android",
        tag: "现代 Material 3 颜值担当",
        architectureOrKernel: "Mihomo (Meta) 内核",
        downloadUrl: "https://github.com/chen08209/FlClash/releases",
        features: [
          "采用 Google Material 3 规范与 Flutter 构建，支持跟随系统色彩的主题切换",
          "完整继承 Mihomo 的 Clash 规则解析，支持复杂的规则分流与分流节点选择",
          "支持一键导入 Clash 订阅链接，操作逻辑与桌面端保持一致"
        ],
        limitations: [
          "内存占用略高于 v2rayNG（约 80-120MB）"
        ],
        isRecommended: true
      }
    ],
    stepByStepPlaybook: [
      {
        stepTitle: "第一步：在官方 GitHub 获取最新稳定版 APK 安装包",
        instruction: "使用手机自带浏览器打开 v2rayNG 的 GitHub Releases 官方发布页，在 Assets 列表中下载通用架构的 `v2rayNG_x.x.x_universal.apk`（或对应 arm64-v8a 安装包）。下载完成后直接点击安装（若系统提示来源不明，勾选允许本次安装）。"
      },
      {
        stepTitle: "第二步：在机场后台复制通用订阅并在软件中添加",
        instruction: "登录机场控制台，点击『复制通用订阅链接』或『v2ray 订阅』。打开 v2rayNG，点击左上角侧边栏【三道杠】，进入【订阅分组设置】。点击右上角【+】号，输入备注名称（如光速云），将复制的链接粘贴到【可选地址 (url)】中，点击右上角【对勾】保存。"
      },
      {
        stepTitle: "第三步：刷新获取节点并开启【分应用代理】",
        instruction: "返回 v2rayNG 主界面，点击右上角【三个点】菜单，选择【更新订阅】。所有节点列表将瞬间加载。点击左上角侧边栏进入【设置】，找到【分应用代理】，勾选开启，并在应用列表中勾选需要代理的应用（如 Chrome、YouTube、Twitter、Telegram、ChatGPT），确保微信、支付宝等国内应用不被勾选，实现物理级分流！"
      },
      {
        stepTitle: "第四步：连接节点并设置手机【电池后台白名单】（防断连核心）",
        instruction: "选中一个低延迟香港或日本节点，点击右下角圆形的【V 形连接按钮】，系统弹出 VPN 权限确认框，点击【允许】即可。最后，长按手机桌面 v2rayNG 图标进入『应用信息』，将『省电策略 / 电池管理』由『智能限制』改为【无限制 / 允许后台高耗电】，并开启【自启动】与【允许后台弹出界面】，确保全天锁屏不掉线！"
      }
    ],
    protocolAndTunMechanics: "Android 系统通过内置的 VpnService API 创建虚拟网络通道。v2rayNG 通过 tun2socks 或直接将 IP 包交由 Xray 内核处理。分应用代理机制是在 Android Linux 内核层通过应用程序的 UID（User Identifier）进行 iptables 标记：属于被勾选 UID 的数据包被重定向至 VpnService 虚拟网卡，而国内 App 的 UID 数据包直接交由物理 Wi-Fi / 移动蜂窝网络网关发送，真正实现互不干扰与零额外流量消耗。",
    commonErrorsAndTroubleshooting: [
      {
        symptom: "手机锁屏一段时间后，海外 App 消息接收延迟或提示无网络",
        cause: "国产系统后台省电机制强行休眠了 v2rayNG 的进程，或切断了 VPN 虚拟网卡接口。",
        solution: "进入系统设置将该 App 设为『允许自启动』与『电池不优化/无限制』；在多任务后台卡片界面下拉锁定该 App 卡片加锁。"
      },
      {
        symptom: "v2rayNG 提示「Fail to start Core」或导入节点后测速全部为 -1",
        cause: "订阅链接内容遭防火墙拦截返回了 HTML 错误页面，导致节点配置损坏；或核心文件权限损坏。",
        solution: "在手机浏览器手动粘贴该订阅链接，确认能下载到 Base64 编码的文本；在 v2rayNG 设置中切换核心为 sing-box 或重置路由设置重新拉取。"
      }
    ],
    relatedAirportAnchor: "二猫云 (#7) 与星岛梦 (#6) 账号不限设备连接数，非常适合安卓手机、平板与电视盒同时在线使用。"
  },
  {
    id: "macos-playbook",
    platform: "macOS 苹果电脑客户端",
    icon: "💻",
    headline: "macOS 平台原生代理客户端与 Apple Silicon 深度优化方案",
    searchIntent: "解决 Mac M1/M2/M3/M4 芯片与 Intel 架构安装包选型、Clash Verge Rev for Mac 增强模式授权、Surge Mac 高阶调试、以及终端终端终端环境代理配置",
    coreDecision: "macOS 平台推荐基于 Universal 通用架构的 **Clash Verge Rev for Mac** 作为绝对主力；对于从事 iOS/Web 开发、需要精准网络抓包与重写规则的高阶极客，**Surge for Mac** 是行业天花板。M 芯片务必下载 aarch64 (arm64) 原生安装包以保障 0 发热与长续航！",
    painPointAndTiming: "【痛点场景与关注时机】Mac 用户常犯的错误是下载了 x64 架构的旧软件，导致 M 系列芯片的 MacBook 必须调用 Rosetta 2 转译执行，不仅增加内存开销，更导致笔记本异常发热与电池断崖式掉电；此外，macOS 具有极为严格的系统扩展（System Extension）安全沙箱，许多用户开启 TUN 模式却未在系统设置中点击「允许安装辅助工具」，导致无法透明接管流量。",
    recommendedToolsList: [
      {
        name: "Clash Verge Rev for Mac",
        tag: "Mac 首选装机标杆",
        architectureOrKernel: "Mihomo 内核 (支持 arm64/x64 原生架构)",
        downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
        features: [
          "提供适配 Apple Silicon 的 `aarch64.dmg` 与 Intel 架构的 `x64.dmg` 原生安装镜像",
          "支持 macOS 菜单栏常驻图标，随时一键切换节点、复制环境变量与查看实时网速",
          "一键开启 TUN 增强模式，免配置即可接管 macOS 终端命令行、Docker、Homebrew",
          "与 macOS Sonoma / Sequoia 系统外观与深色模式完美契合"
        ],
        limitations: [
          "初次在系统设置中允许 Helper 辅助程序需要输入 Mac 锁屏密码"
        ],
        isRecommended: true
      },
      {
        name: "Surge for Mac",
        tag: "高端开发与网络调试天花板",
        architectureOrKernel: "商业自研极速核心",
        downloadUrl: "https://nssurge.com/mac",
        features: [
          "提供工业级的实时网络交互仪表盘、连接耗时瀑布流与完整抓包重写",
          "Enhanced Mode（增强模式）对网络数据包的处理效率极高，几乎零丢包",
          "支持网关模式（Gateway）：可让局域网内其他设备将 Mac 作为旁路由上网"
        ],
        limitations: [
          "售价昂贵（单设备授权 $49.99 起），仅适合专业开发者与网络工程师"
        ],
        isRecommended: false
      }
    ],
    stepByStepPlaybook: [
      {
        stepTitle: "第一步：根据 Mac 芯片型号下载对应的 DMG 镜像",
        instruction: "点击屏幕左上角苹果图标【关于本机】确认芯片型号。若是 Apple M1/M2/M3/M4 系列，前往 GitHub Releases 下载 `Clash.Verge_x.x.x_aarch64.dmg`；若是 Intel 处理器，下载 `x64.dmg`。双击打开 dmg 镜像，将 Clash Verge 图标拖入【Applications (应用程序)】文件夹。"
      },
      {
        stepTitle: "第二步：首次启动安全授权与 Helper 辅助程序安装",
        instruction: "打开启动台运行 Clash Verge Rev。若系统弹出『无法打开，因为无法验证开发者』，打开【系统设置 → 隐私与安全性】，在页面底部找到『仍要打开』并输入锁屏密码。进入软件设置，点击【服务模式 (Service Mode)】的【安装】，输入 Mac 管理员密码授权系统辅助工具（Privileged Helper Tool）。"
      },
      {
        stepTitle: "第三步：导入机场订阅并激活配置",
        instruction: "复制机场（如光速云、暮光等）提供的 Clash 订阅链接。进入 Clash Verge Rev 的【订阅 (Profiles)】界面粘贴并点击【导入】。右键激活该配置为当前使用。"
      },
      {
        stepTitle: "第四步：开启 TUN 模式与验证 Mac 终端连通性",
        instruction: "在设置中勾选【TUN 模式】与【系统代理】。打开 Mac 原生【终端 (Terminal)】，运行：`curl -I https://www.google.com`。若直接返回 HTTP 200 或 301 且耗时在 0.2 秒以内，说明终端与全系统流量均已被完美接管！"
      }
    ],
    protocolAndTunMechanics: "macOS 采用基于 BSD 的 Darwin 内核。Clash Verge Rev 通过安装的特权帮助程序（Helper Tool）调用系统网络核心的 `utun` 接口创建一个虚拟点对点网络设备，并通过修改 macOS 路由表（`route add default -interface utunX`）强制将所有非私有局域网的外部网络请求注入 Mihomo 内核。借助 Fake-IP 机制，macOS 的 `mDNSResponder` 系统解析服务会自动将域名重定向至虚拟保留地址，彻底粉碎任何本地 DNS 抢答污染。",
    commonErrorsAndTroubleshooting: [
      {
        symptom: "提示「Clash core stopped abnormally」或提示无法安装 Helper",
        cause: "macOS SIP 系统完整性保护或权限配置被第三方清理软件误删了 `/Library/PrivilegedHelperTools` 下的守护进程。",
        solution: "进入 Clash Verge Rev 设置中先点击『卸载服务模式』，重启 Mac 后再次以管理员密码重新安装 Helper；确保系统设置的『登录项与扩展』中允许 Clash Verge 自启动与后台运行。"
      },
      {
        symptom: "Mac 锁屏唤醒后突然无法联网，必须关闭代理开关才恢复",
        cause: "Mac 睡眠时休眠了网络适配器导致 TUN 虚拟网卡句柄断开，唤醒后路由表未自动刷新。",
        solution: "在 Clash Verge Rev 设置中将『自动重启内核』开启，并在菜单栏点击『重启内核 (Restart Core)』即可秒级恢复。"
      }
    ],
    relatedAirportAnchor: "Firefly (#10) 与唯兔云 (#9) 专线具备顶尖的 macOS 晚高峰抗抖动能力，香港与新加坡节点拖拽 4K 秒加载。"
  },
  {
    id: "linux-playbook",
    platform: "Linux 桌面与无头服务器 (Debian / Ubuntu / CentOS)",
    icon: "🐧",
    headline: "Linux 桌面与服务器透明网关：Clash Verge Rev、v2rayA 与 sing-box 实战",
    searchIntent: "解决 Linux 服务器拉取 Docker 镜像卡死、apt/yum 更新慢、GitHub clone 超时、以及无 GUI 桌面环境下如何通过 Web 网页后台配置全局透明代理",
    coreDecision: "Linux 桌面端（Ubuntu / Fedora / Arch）直接使用 **Clash Verge Rev (AppImage / .deb)**；无图形界面的独立云服务器或本地 Linux 主机首选 **v2rayA**（基于 Web UI 网页管理与透明代理一键开启）；极客与开发者可直接编写 **sing-box** 原生 systemd 守护脚本。",
    painPointAndTiming: "【痛点场景与关注时机】深度学习服务器、本地 NAS 或云端 Linux 实例在执行 `git clone`、`pip install`、`docker pull` 时经常遭遇极速为零或 Connection Refused 拦截。在没有显示器的无头（Headless）服务器上，很多人无法使用常见的桌面代理软件，因此需要支持 Web 远程面板或标准 systemd 服务管理的工具方案。",
    recommendedToolsList: [
      {
        name: "v2rayA",
        tag: "Linux 服务器绝对神器",
        architectureOrKernel: "Xray / v2ray 核心 + Web 仪表盘",
        downloadUrl: "https://github.com/v2rayA/v2rayA",
        features: [
          "原生自带 Web 管理后台（默认 2017 端口），在任何手机或电脑浏览器中远程配置",
          "支持一键开启全局透明代理（基于 tproxy / redirect），接管主机全部应用与 Docker 容器",
          "支持导入各种格式的机场订阅与多节点路由策略配置"
        ],
        limitations: [
          "需要 Linux 主机具备 systemd 运行环境并开放对应控制端口"
        ],
        isRecommended: true
      },
      {
        name: "Clash Verge Rev (Linux)",
        tag: "Linux 桌面用户首选",
        architectureOrKernel: "Mihomo 内核",
        downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
        features: [
          "提供 AppImage 免安装格式、.deb (Debian/Ubuntu) 与 .rpm (Fedora/CentOS) 安装包",
          "完整图形界面，支持系统托盘、规则分流与 TUN 模式"
        ],
        limitations: [
          "依赖桌面 X11 或 Wayland 环境，不适合纯命令行服务器"
        ],
        isRecommended: true
      }
    ],
    stepByStepPlaybook: [
      {
        stepTitle: "第一步：在 Linux 服务器上一键安装 v2rayA 与 Xray 内核",
        instruction: "在 Debian / Ubuntu 终端中执行官方脚本添加软件源并安装：\n`curl -Ls https://mirrors.v2raya.org/go.sh | sudo bash`\n安装完成后运行：`sudo systemctl start v2raya.service && sudo systemctl enable v2raya.service`。"
      },
      {
        stepTitle: "第二步：访问 Web 网页管理控制台",
        instruction: "在同一局域网的电脑浏览器中输入 `http://<Linux服务器IP>:2017`，首次进入按提示创建管理员账号与密码。"
      },
      {
        stepTitle: "第三步：导入订阅链接并选择节点",
        instruction: "点击右上角【创建/导入】，类型选择订阅，将机场通用订阅链接粘贴进去并命名。点击导入后，在节点列表中选中延迟最低的香港或美西专线节点。"
      },
      {
        stepTitle: "第四步：开启透明代理与验证 Docker 容器拉取",
        instruction: "点击左上角【设置】，将透明代理模式设置为【开启 (适用于所有物理网卡流量)】，分流规则选择【绕过大陆与局域网】。点击左上角【启动】大开关。在 Linux 终端中运行：`docker pull hello-world` 或 `curl -I https://www.google.com` 即可确认透明加速已生效！"
      }
    ],
    protocolAndTunMechanics: "Linux 透明代理的核心依赖 Linux 内核的 netfilter 架构与 iptables/nftables 的 TPROXY（透明代理）模块。v2rayA 在启动透明代理时，会在 PREROUTING 链创建标记规则，将非局域网且非大陆 IP 的 TCP/UDP 数据包重定向到本地透明代理端口（如 12345），同时通过 policy routing（策略路由）将流量交由 loopback 接口送入 Xray/sing-box 内核。整个过程对上层的 curl、git、docker daemon 完全无感透明。",
    commonErrorsAndTroubleshooting: [
      {
        symptom: "启动透明代理后 Linux 主机自身与局域网内其他设备全部断网",
        cause: "路由回环（Routing Loop）：代理客户端发出的出国加密数据包本身未打上 fwmark 标记，导致自身发出的外网流量又被重定向回透明代理端口陷入死循环。",
        solution: "检查 v2rayA 设置中的『防回环 (Anti-loop)』选项，确保本地客户端进程所有者（如 root 或专用用户）被正确排除；或在设置中切换为使用 GFWList 白名单模式代替全局绕过。"
      },
      {
        symptom: "终端 curl 可以访问，但 Docker 容器内部依然无法访问外网",
        cause: "Docker 默认使用的是 bridge 虚拟网桥（docker0），其流量由单独的 FORWARD 链处理，部分透明代理规则未对 bridge 网卡生效。",
        solution: "在 v2rayA 设置中将『透明代理作用范围』选择为【所有网卡（包括 docker0 与虚拟网桥）】即可无缝穿透所有容器。"
      }
    ],
    relatedAirportAnchor: "暮光加速 (#2) 与极连云 (#14) 的高带宽物理专线针对境外学术仓库与镜像源拉取拥有极强的并发表现。"
  },
  {
    id: "openwrt-playbook",
    platform: "OpenWrt / 软路由与家庭网关",
    icon: "🌐",
    headline: "软路由全屋透明代理指南：OpenClash 与 Nikki 选型配置与防 DNS 污染",
    searchIntent: "解决全屋智能家居、Apple TV、Switch/PS5 游戏主机无法装客户端翻墙问题、软路由 OpenClash 经常断网、DNS 污染导致打不开国内网页、以及固件兼容性选型",
    coreDecision: "软路由网关首选基于 Mihomo 内核的 **OpenClash**（老牌稳定、全功能、支持 Fake-IP 高速缓存）；对于运行最新 OpenWrt 24.10+ 的极客，**Nikki (原 OpenWrt-nikki)** 是轻量纯净的新一代首选。配置软路由的核心只有四个字：【Fake-IP + 规避回环】！",
    painPointAndTiming: "【痛点场景与关注时机】很多家庭和小型工作室有多台手机、电脑、电视盒、游戏机，挨个配置客户端极其麻烦，且电视盒遥控器操作订阅导入非常痛苦；更严重的是，许多小白在软路由安装了旧版插件，DNS 配置不当导致国内访问百度、淘宝频繁卡顿甚至被污染。当您希望全屋 Wi-Fi 连上即可无感科学上网时，必须搭建软路由透明网关。",
    recommendedToolsList: [
      {
        name: "OpenClash",
        tag: "软路由绝对王者标杆",
        architectureOrKernel: "Mihomo (Meta) / Clash Premium 双核心",
        downloadUrl: "https://github.com/vernesong/OpenClash",
        features: [
          "支持 Fake-IP 混合模式与 TUN 模式，全屋设备零配置透明出国",
          "内置强大的 DNS 分流体系，支持本地运营商 DNS 负责国内，海外 DoH 负责防止解析污染",
          "支持按设备 IP 设定黑白名单（如让老人家手机完全不走代理，让电视盒与主机强制出国）",
          "支持 Clash 配置文件定时更新、策略组规则集切换与网络连接实时监控"
        ],
        limitations: [
          "安装包体积较大，需要软路由具备足够的可用 ROM 闪存空间（建议 ≥128MB）"
        ],
        isRecommended: true
      },
      {
        name: "Nikki",
        tag: "现代纯净新一代",
        architectureOrKernel: "Mihomo 内核",
        downloadUrl: "https://github.com/nikkinikki-org/OpenWrt-nikki",
        features: [
          "专为 OpenWrt 24.10 及以上新固件打造，架构极简干净，无历史包袱",
          "采用现代化 Luci 界面，对 CPU 负载与内存占用控制极度出色"
        ],
        limitations: [
          "明确不支持 OpenWrt 23 及以下老旧固件版本"
        ],
        isRecommended: false
      }
    ],
    stepByStepPlaybook: [
      {
        stepTitle: "第一步：在 OpenWrt 软件包后台安装 OpenClash 及其依赖",
        instruction: "登录软路由后台（如 192.168.1.1），进入【系统 → 软件包】。先点击『更新列表』，确认系统已安装 `kmod-tun`、`libcap`、`libcap-bin`、`coreutils` 等核心依赖。从 OpenClash Releases 下载对应的 `.ipk` 安装包上传安装。"
      },
      {
        stepTitle: "第二步：在【配置文件订阅】添加机场订阅链接",
        instruction: "进入【服务 → OpenClash】，点击【配置文件订阅】页面。点击【添加】，填入配置名称（如光速云），将机场提供的 Clash 订阅链接粘贴进去。在线转换建议选择【关闭】（直接使用机场原始配置）。点击保存并更新配置。"
      },
      {
        stepTitle: "第三步：配置核心【DNS 设置】（杜绝 DNS 污染关键！）",
        instruction: "进入【常规设置 → DNS 设置】。勾选【启用本地 DNS 劫持】与【启用 Fake-IP 模式】。在 NameServer 中填入本地最快的国内公共 DNS（如 223.5.5.5 与 119.29.29.29）；在 Fallback 或海外 DNS 中填入加密 DoH（如 https://1.1.1.1/dns-query 与 https://8.8.8.8/dns-query），并勾选【仅代理命中名单走 Fallback】。"
      },
      {
        stepTitle: "第四步：启动 OpenClash 并进行全屋 Wi-Fi 验证",
        instruction: "返回 OpenClash 首页，点击【启动 OpenClash】。稍等 10-20 秒，状态栏显示『运行正常』且内核版本成功加载。拿出手机连上家庭 Wi-Fi，无需打开任何手机代理 App，直接在手机浏览器打开 fast.com 或 YouTube 4K 视频，即刻享受全屋千兆无感飞驰！"
      }
    ],
    protocolAndTunMechanics: "在 OpenWrt 中，OpenClash 劫持了内网客户端发往路由器 53 端口的 DNS 查询请求。当客户端查询海外域名（如 youtube.com）时，Fake-IP 机制直接秒级回复一个保留网段伪 IP（198.18.0.x），客户端立即向该伪 IP 发起 TCP 连接；OpenWrt 的 iptables 将该数据包重定向至 Mihomo 监听端口；Mihomo 在内核中根据伪 IP 逆向查出原始域名并按照规则路由，通过加密专线发往香港落地机进行真实解析与访问。这一机制彻底消除了本地 DNS 污染与解析等待耗时！",
    commonErrorsAndTroubleshooting: [
      {
        symptom: "全屋出国正常，但国内微信图片发不出去、部分国内 App 频繁提示网络连接失败",
        cause: "DNS 劫持配置冲突，导致国内常用域名也被判定为解析失败或走到了超时的海外 DNS。",
        solution: "在 OpenClash DNS 设置中，确保开启了『Dnsmasq 转发劫持』，并将国内 NameServer 设为运营商下发的网关 DNS 或 223.5.5.5；在『访问控制』中将智能电视盒、Apple TV 的 IP 加入独立出国列表，避免将所有局域网广播流量强行劫持。"
      },
      {
        symptom: "OpenClash 提示「内核下载失败」或频繁自动重启崩溃",
        cause: "路由器闪存空间不足（ROM 爆满）导致内核写入截断，或下载了错误的 CPU 架构内核（如 x86 错下成了 arm64）。",
        solution: "在 OpenWrt 状态页面检查可用空间；手动从 GitHub 下载对应架构的 `clash-meta` 二进制文件，通过 WinSCP 上传至 `/etc/openclash/core/clash_meta` 并赋予 755 可执行权限即可。"
      }
    ],
    relatedAirportAnchor: "光速云 (#1) 与唯兔云 (#9) 纯物理专线拥有全网公认极高的软路由多并发长连接稳定性，晚高峰零断流。"
  }
];

// 4. 读者选型决策树：根据预算、设备生态与技术水平匹配方案
export const clientDecisionNodes: ClientDecisionNode[] = [
  {
    scenarioId: "decision-ios-novice",
    userProfile: "小白新手 / 纯苹果生态用户 (iPhone + iPad + Mac)",
    budgetAndSkill: "预算 $2.99 一次性购买，不愿折腾复杂代码与规则语法",
    recommendedCombination: "iOS 端【Shadowrocket】+ Mac 端【Clash Verge Rev】+ 机场【光速云 / 暮光加速】",
    whyThisChoice: "小火箭在 iOS 体验独步天下，配合专线机场的一键订阅，免配任何额外规则；电脑端用 Verge Rev 开启 TUN 模式互为镜像，最少步骤达成最稳体验。",
    actionRoute: "阅读第一章 iOS 实战指南 (#ios-playbook) → 查看光速云详情 (/airports/guangsu)"
  },
  {
    scenarioId: "decision-windows-heavy",
    userProfile: "Windows 办公 / 游戏玩家 / 程序员与科研工作者",
    budgetAndSkill: "完全偏好开源免费软件，需要接管 Git、Python、Docker 镜像与海外开发接口",
    recommendedCombination: "Windows 端【Clash Verge Rev (开启 TUN 模式)】+ 机场【一翻云 / 微风网络】",
    whyThisChoice: "Wintun 驱动全盘无感接管终端与代码仓库，搭配一翻云的 Hysteria 2 / VLESS-Reality 高并发协议，彻底终结 Git clone 卡死与 HuggingFace 断流。",
    actionRoute: "阅读第二章 Windows 实战指南 (#windows-playbook) → 查看一翻云详情 (/airports/yifan)"
  },
  {
    scenarioId: "decision-android-battery",
    userProfile: "安卓重度用户 / 经常出差 / 追求极致省电不杀后台",
    budgetAndSkill: "免费开源，希望手机发热低、待机耗电小、国内应用绝对不绕路",
    recommendedCombination: "安卓端【v2rayNG (开启分应用代理)】+ 机场【二猫云 / 星岛梦】",
    whyThisChoice: "v2rayNG 内存仅占 30MB，配置分应用代理仅放行特定海外 App，微信全天在后台秒收推送且手机不发热，二猫云不限设备连接数支持全家手机共享。",
    actionRoute: "阅读第三章 Android 实战指南 (#android-playbook) → 查看二猫云详情 (/airports/ermao)"
  },
  {
    scenarioId: "decision-home-openwrt",
    userProfile: "家庭极客 / 工作室主管 / 全屋智能家居与 Apple TV 客厅影院",
    budgetAndSkill: "拥有软路由或 NAS，具备一定网络排障基础，追求全屋无感出国",
    recommendedCombination: "网关端【OpenClash (Fake-IP 混合模式)】+ 机场【光速云 / Firefly 纯专线】",
    whyThisChoice: "全屋电视盒、游戏机（PS5/Switch）连上 Wi-Fi 直接免翻，海外 4K 流媒体秒播；光速云/Firefly 的纯 IPLC/IEPL 专线保障全天候 20-27ms 物理极速与零丢包率。",
    actionRoute: "阅读第六章 OpenWrt 实战指南 (#openwrt-playbook) → 查阅 16 家专线对比表 (/guides#core-comparison-table)"
  },
  {
    scenarioId: "decision-exclusive-app",
    userProfile: "零基础纯小白 / 讨厌复制任何链接与配置文件的用户",
    budgetAndSkill: "完全不想学什么是节点、什么是订阅转换，希望像普通软件一样下载登录就能用",
    recommendedCombination: "专属客户端机场【飞猫云 / 无忧链接 / Firefly】(直接下载官方定制 App)",
    whyThisChoice: "这些品牌在 2026 年采用专属定制客户端，官网下载安装后直接账号密码登录，主界面点击大按钮连接，彻底省去下载小火箭与配置规则的所有麻烦。",
    actionRoute: "查看飞猫云专属客户端详情 (/airports/feimao) → 查看无忧链接详情 (/airports/wuyou)"
  }
];

// 5. 常见问题与边界解答 (FAQ 8 题)
export const clientFaqs: ClientFaqItem[] = [
  {
    question: "Q1：小火箭（Shadowrocket）和 Clash 相比，两者有什么本质区别？哪个更好？",
    conclusion: "【核心结论】在 iOS 平台小火箭是当之无愧的王者；在桌面电脑（Windows / Mac / Linux）与软路由端，基于 Mihomo 的 Clash (Clash Verge Rev / OpenClash) 更加强大。",
    details: "小火箭是专门针对 iOS 系统深度调优的独立 App，原生低功耗、单文件规则轻巧；而 Clash 的本质是一套强大的网络分流核心与规则策略组引擎，支持复杂的规则集动态拉取、嵌套策略组（如让 ChatGPT 走一组节点、Netflix 走另一组节点）。在苹果手机上首选小火箭，在电脑上首选 Clash Verge Rev，两者并不冲突。",
    relatedAnchor: "#ios-playbook"
  },
  {
    question: "Q2：为什么很多教程说「老版 Clash for Windows (CFW)」不能用了？继续用有什么风险？",
    conclusion: "【核心结论】CFW 原作者已于 2023 年底停止维护并清空仓库，继续使用不仅无法支持最新的抗封锁协议，更存在未修补的旧内核安全漏洞与假冒木马风险。",
    details: "CFW 停更后，搜索引擎和社交媒体上出现了大量所谓的『CFW 中文官网 / 汉化增强版』，其中相当一部分被黑客植入了窃取剪贴板数字货币地址和账号密码的恶意远控代码。2026 年请务必迁移至活跃维护的官方开源替代品——基于 Mihomo 内核的 **Clash Verge Rev** 或极简的 **FlClash**。",
    relatedAnchor: "#windows-playbook"
  },
  {
    question: "Q3：什么是客户端的 TUN 模式？为什么有时候开了代理但 Git 和终端依然报错？",
    conclusion: "【核心结论】因为传统系统代理仅针对遵循系统设置的普通浏览器有效，而命令行（CMD/Terminal）、Git、Docker 等工具默认直接走物理网卡；必须开启 TUN 虚拟网卡模式才能强制全盘接管。",
    details: "TUN（Network TUNnel）模式会在操作系统底层创建一个虚拟网卡设备，将所有进出系统的网络数据包全部强行重定向至代理内核进行路由判别。在 Clash Verge Rev 中点击『安装服务模式』并开启【TUN 模式】后，终端无须再执行任何复杂的 proxy 环境变量设置，即可彻底解决 Git clone 超时与 Docker pull 失败。",
    relatedAnchor: "#windows-playbook"
  },
  {
    question: "Q4：为什么连上代理后，国内的微信、高德地图、淘宝经常转圈或报错？",
    conclusion: "【核心结论】通常是因为在客户端中错误开启了【全局代理 (Proxy/Global)】模式，将所有国内数据包也绕道海外发送；请务必切换为【规则模式 (Rule / Config)】。",
    details: "在规则模式下，客户端会先匹配内置的 GEOIP CN 大陆 IP 列表与国内白名单域名，属于国内的流量会自动以 DIRECT（直连）方式交由本地物理网卡发出，毫秒不差且不消耗机场流量；仅有海外网站才会走 PROXY（代理）。如果规则模式下依然卡顿，说明客户端内置的 DNS 分流存在抢答污染，请参考本页各系统实战章节开启 Fake-IP 模式。",
    relatedAnchor: "#openwrt-playbook"
  },
  {
    question: "Q5：在国区 App Store 搜索 Shadowrocket 搜出的软件是真的吗？如何防骗？",
    conclusion: "【核心结论】国区 App Store 搜索到的所有类似名字的软件 100% 都是假冒高仿软件！正版小火箭从未在中国大陆区上架。",
    details: "正版 Shadowrocket 仅在海外 App Store（如美区、港区、日区等）销售，开发者全称为『Pan modal (Shadowlaunch Technology Group LLC)』，图标为经典暗灰底色配白色发射小火箭，一次性买断价格为 $2.99。国区搜索出的软件大多包含周费 ¥68 的流氓扣费协议，请务必准备一个海外 Apple ID 前往外区官方下载。",
    relatedAnchor: "#ios-playbook"
  },
  {
    question: "Q6：什么是『通用订阅机场』与『专属客户端机场』？购买前如何选择？",
    conclusion: "【核心结论】通用订阅机场允许将链接导入任何第三方开源客户端（小火箭、Clash、软路由），适合进阶极客；专属客户端机场完全绑定官方 App，下载登录即用，适合零基础新手。",
    details: "在本站评测的 42 家机场中，光速云、暮光加速、微风网络、一翻云等属于支持通用订阅的品牌，用户可以自由挑选最顺手的客户端并配合软路由全屋使用；而飞猫云、无忧链接、Firefly、闪跃等品牌自 2026 年 10 月起转向专属客户端模式，虽然极度省心无脑，但其致命缺陷是无法导入软路由与第三方软件。用户在购买前需根据自己的设备生态审慎选择。",
    relatedAnchor: "#core-comparison-table"
  },
  {
    question: "Q7：Fake-IP 模式和 Redir-Host 模式有什么区别？为什么现代客户端都推荐 Fake-IP？",
    conclusion: "【核心结论】Redir-Host 需要先在本地完成远程真实 DNS 解析后才能建立连接（容易卡顿和被污染）；而 Fake-IP 直接秒级回复一个虚拟保留 IP 并立即发起连接，彻底终结 DNS 解析等待延迟与抢答污染。",
    details: "在 Fake-IP 模式下，当操作系统向内核查询域名（如 google.com）时，客户端内部 DNS 立即分配一个 198.18.x.x 的虚构 IP 返回给系统，应用瞬间完成连接初始化；随后客户端在内部将该虚构 IP 还原为真实域名，交由远端机场节点进行无污染解析。这不仅使得网页首包打开速度极大加快，更在根本上免疫了国内运营商的本地 DNS 投毒劫持。",
    relatedAnchor: "#openwrt-playbook"
  },
  {
    question: "Q8：NekoBox for Android 还能继续使用吗？为什么要特别注意风险？",
    conclusion: "【核心结论】原作者官方项目已提示维护资源有限，更重要的是其同名应用在 Google Play 上已被非官方第三方抢注，存在严重的安全合规风险，官方已明确发布警告。",
    details: "如果需要继续在安卓端使用 sing-box 核心工具，建议直接使用官方原版的 **sing-box for Android (SFA)**、跨平台的 **Hiddify** 或新秀 **Karing**；如果追求稳定省电，请继续坚守成熟的 **v2rayNG** 或 **FlClash**，切勿在非信任渠道下载来历不明的 NekoBox 变种版本。",
    relatedAnchor: "#android-playbook"
  }
];
