export interface ClientTool {
  name: string;
  tag: string;
  features: string;
  downloadUrl: string;
  isRecommended?: boolean;
}

export interface PlatformClients {
  platform: string;
  slug: string;
  icon: string;
  headline: string;
  description: string;
  guideSummary: string;
  tools: ClientTool[];
  setupSteps: string[];
}

export const platformClients: PlatformClients[] = [
  {
    platform: "iOS / iPadOS (苹果手机与平板)",
    slug: "ios",
    icon: "🍎",
    headline: "Shadowrocket（小火箭）权威配置与订阅导入指南",
    description: "iOS 首推 Shadowrocket（小火箭）作为核心网络代理工具，原生支持 Shadowsocks、VLESS、Trojan 等主流协议，具备轻量、低耗电与强大按需规则分流能力。",
    guideSummary: "在非国区 App Store 下载 Shadowrocket 后，复制机场订阅链接打开即可自动识别导入，一键启动全局或按需规则分流。",
    tools: [
      {
        name: "Shadowrocket (小火箭)",
        tag: "iOS 最强国民首选",
        features: "规则分流、节点订阅自动更新、测速排序、URL Rewrite、流量监控、按需连接",
        downloadUrl: "https://apps.apple.com/us/app/shadowrocket/id932747118",
        isRecommended: true
      },
      {
        name: "Stash",
        tag: "Clash for iOS 最佳平替",
        features: "支持 Clash 规则覆写、策略组切换、高级脚本支持",
        downloadUrl: "https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349"
      },
      {
        name: "Quantumult X (圈X)",
        tag: "进阶极客",
        features: "强大重写、JS脚本、MITM解密、精致分流规则",
        downloadUrl: "https://apps.apple.com/us/app/quantumult-x/id1453926345"
      },
      {
        name: "Surge 5",
        tag: "商业网络调试神器",
        features: "企业级网络调试、精准抓包与捕获、智能接管",
        downloadUrl: "https://apps.apple.com/us/app/surge-5/id1442620678"
      }
    ],
    setupSteps: [
      "准备非国区 Apple ID（如美区、港区或日区），在 App Store 搜索购买并下载 Shadowrocket（小火箭）。",
      "在小火箭评测推荐的机场（如光速云、暮光加速等）用户后台，点击『复制 Shadowrocket 订阅链接』。",
      "打开 Shadowrocket 应用，软件会自动检测到剪贴板中的订阅链接并弹窗提示『是否添加节点』，点击『保存』即可完成解析。",
      "若未弹出，点击右上角『+』号，类型选择『Subscribe』，将订阅链接粘贴至 URL 输入框后点击保存完成节点抓取。",
      "进入应用主界面，全局路由建议选择『配置（Config）』模式（国内直连、海外走节点），选择延迟最低的绿色优质节点，打开顶部的连接总开关并同意添加 VPN 配置即可！"
    ]
  },
  {
    platform: "Windows 电脑客户端",
    slug: "windows",
    icon: "🪟",
    headline: "Windows 平台主流代理软件精选与配置",
    description: "Windows 平台推荐使用基于 Mihomo 内核的现代图形客户端 Clash Verge Rev 或全协议管理利器 v2rayN。",
    guideSummary: "安装后配置 TUN 虚拟网卡模式，可接管电脑所有应用程序和终端命令行的跨境网络流量。",
    tools: [
      {
        name: "Clash Verge Rev",
        tag: "Windows 首选推荐",
        features: "Mihomo 内核、TUN 模式一键开启、现代化 Fluent UI、支持 Clash YAML 订阅",
        downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
        isRecommended: true
      },
      {
        name: "v2rayN",
        tag: "多核心老牌利器",
        features: "Xray / sing-box 双核心、全协议支持、多节点批量测速与自定义路由",
        downloadUrl: "https://github.com/2dust/v2rayN/releases",
        isRecommended: true
      },
      {
        name: "FlClash",
        tag: "极简轻量",
        features: "Flutter 打造、界面干净、跨平台一致体验",
        downloadUrl: "https://github.com/chen08209/FlClash/releases"
      },
      {
        name: "Hiddify",
        tag: "新秀全能",
        features: "多协议自适应、智能自动优选节点、无需复杂配置",
        downloadUrl: "https://github.com/hiddify/hiddify-app/releases"
      }
    ],
    setupSteps: [
      "下载并安装 Clash Verge Rev 对应架构的 Windows 安装包（推荐 64 位 x64 版本）。",
      "在机场控制台复制『Clash 订阅链接』，打开 Clash Verge Rev，进入『订阅 (Profiles)』菜单。",
      "将链接粘贴至输入框并点击『导入 (Import)』，右键该配置选中激活。",
      "在『设置 (Settings)』中建议勾选『TUN 模式』及『系统代理』，在『代理 (Proxies)』中选择延迟表现优秀的香港或日本专线节点即可畅享高速体验。"
    ]
  },
  {
    platform: "Android (安卓手机与车机)",
    slug: "android",
    icon: "🤖",
    headline: "Android 平台高速稳定的代理客户端",
    description: "安卓生态开放多元，针对不同使用习惯，我们精选了 v2rayNG 与基于 Mihomo 内核的规则代理客户端。",
    guideSummary: "支持一键导入多种通用订阅链接，内存开销低且后台保活能力优越。",
    tools: [
      {
        name: "v2rayNG",
        tag: "安卓装机必备",
        features: "Xray 核心原生支持、支持分应用代理、扫描二维码或剪贴板一键导入订阅",
        downloadUrl: "https://github.com/2dust/v2rayNG/releases",
        isRecommended: true
      },
      {
        name: "FlClash",
        tag: "优雅分流首选",
        features: "现代化 Material Design 视觉、Mihomo 内核、规则分流精准",
        downloadUrl: "https://github.com/chen08209/FlClash/releases",
        isRecommended: true
      },
      {
        name: "Hiddify Android",
        tag: "全协议新手友好",
        features: "智能根据网络环境切换节点、支持 VLESS/Trojan/Hysteria2",
        downloadUrl: "https://github.com/hiddify/hiddify-app/releases"
      },
      {
        name: "Karing",
        tag: "跨平台新秀",
        features: "sing-box 架构、支持多格式订阅、对手机省电优化良好",
        downloadUrl: "https://github.com/KaringX/karing/releases"
      }
    ],
    setupSteps: [
      "下载并安装 v2rayNG APK 官方安装包，授予网络与 VPN 连接权限。",
      "登录机场后台，点击『复制通用订阅链接』或『v2rayNG 一键导入』。",
      "打开 v2rayNG，点击左上角侧边栏进入『订阅分组设置』，点击右上角『+』号添加订阅并粘贴 URL。",
      "返回主界面，点击右上角三个点选择『更新订阅』，节点刷新后选择所需节点，点击右下角 V 形连接按钮即可。"
    ]
  },
  {
    platform: "macOS 苹果电脑客户端",
    slug: "macos",
    icon: "💻",
    headline: "macOS 平台原生代理客户端与网络加速方案",
    description: "为搭载 Apple Silicon (M1/M2/M3/M4) 与 Intel 芯片的 Mac 电脑提供深度优化的低耗电规则代理方案。",
    guideSummary: "原生兼容 macOS 最新系统，支持 Enhanced Mode（增强模式）接管全系统终端与容器流量。",
    tools: [
      {
        name: "Clash Verge Rev for Mac",
        tag: "Mac 首选推荐",
        features: "提供 Universal 通用架构安装包、支持增强模式与菜单栏快速切点",
        downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
        isRecommended: true
      },
      {
        name: "Surge for Mac",
        tag: "高端开发调试",
        features: "网络诊断、深度规则覆写、强大的脚本与仪表盘面板",
        downloadUrl: "https://nssurge.com/mac"
      },
      {
        name: "FlClash for macOS",
        tag: "轻巧美观",
        features: "极低系统内存占用、精致小巧、与系统深色模式完美融合",
        downloadUrl: "https://github.com/chen08209/FlClash/releases"
      }
    ],
    setupSteps: [
      "下载对应芯片版本（Apple Silicon 请下载 aarch64.dmg）的 Clash Verge Rev 并拖入应用程序文件夹。",
      "打开软件导入机场提供的 Clash 配置文件，开启『TUN 模式』授权系统网络扩展。",
      "Mac 终端中 curl 测试即可确认是否成功接入海外学术或代码镜像服务。"
    ]
  },
  {
    platform: "Linux 与 软路由 OpenWrt",
    slug: "linux-openwrt",
    icon: "🐧",
    headline: "Linux 服务器与家庭软路由全屋透明代理指南",
    description: "实现家庭或办公室网络设备（包括电视盒、智能音箱、Switch/PS5 游戏主机）全屋无感出国网络覆盖。",
    guideSummary: "软路由端安装 OpenClash 插件，统一分流并优化国内与国外 DNS 解析，防止 DNS 污染。",
    tools: [
      {
        name: "OpenClash",
        tag: "软路由绝对王者",
        features: "集成于 OpenWrt 系统、支持 Fake-IP 高速解析、分流规则定制、全屋设备免客户端",
        downloadUrl: "https://github.com/vernesong/OpenClash",
        isRecommended: true
      },
      {
        name: "v2rayA",
        tag: "Linux 桌面与服务器",
        features: "Web 网页化图形控制台、一键配置透明代理、支持无显示器的 Linux 主机",
        downloadUrl: "https://github.com/v2rayA/v2rayA"
      },
      {
        name: "sing-box",
        tag: "超高性能核心",
        features: "极低资源消耗、模块化路由表、性能极度彪悍",
        downloadUrl: "https://github.com/SagerNet/sing-box"
      }
    ],
    setupSteps: [
      "在软路由后台上传并安装 OpenClash IPK 插件包与内核依赖。",
      "在『配置文件订阅』中填入机场提供的订阅链接，选择『Meta/Mihomo 内核』与『Fake-IP 混合模式』。",
      "保存并启动插件，家庭 Wi-Fi 下的所有设备即可无需安装任何软件实现全屋高速上网。"
    ]
  }
];
