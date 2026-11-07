export interface GuideTopic {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  recommendedAirports: string[]; // airport IDs
  contentSections: Array<{
    heading: string;
    body: string;
  }>;
}

export const guides: GuideTopic[] = [
  {
    slug: "ai-chatgpt-claude-unlock",
    title: "2026 AI生产力专线选型：ChatGPT与Claude免降级防封节点指南",
    tag: "AI 生产力专题",
    summary: "为什么很多机场无法登录 ChatGPT 或频繁触发验证码？本文深度拆解 OpenAI 与 Anthropic 的风控机制，盘点具备原生住宅 IP 与免降级支持的高稳定机场。",
    recommendedAirports: ["guangsu", "muguang", "wuyou", "jilian"],
    contentSections: [
      {
        heading: "一、AI 大模型对 IP 地址的风控底层逻辑",
        body: "OpenAI 与 Claude 对机房广播 IP（如大型公有云 AWS/Azure/GCP）实施严格的声誉过滤。普通中转机场由于千人共用同一公网出口，IP 极易被标记为代理从而报错『Access Denied』或强制降级模型回答质量。高品质 AI 专线必须采用干净的原生住宅 IP 或定期轮换的纯净 BGP 出口。"
      },
      {
        heading: "二、实测支持 ChatGPT / Claude 机场推荐",
        body: "经小火箭实验室实测：光速云针对香港、新加坡、美国节点提供专门的 AI 直连清洗路由；无忧链接的 VLESS 专线在 Claude 官方网页端能保持 100% 连续会话免掉线；极连云则对学术研发团队提供了针对性的低延迟 AI 节点通道。"
      },
      {
        heading: "三、Shadowrocket 与 Clash 的 AI 分流规则优化",
        body: "建议在客户端中配置专用规则集：将 domain-suffix: openai.com, chatgpt.com, anthropic.com, claude.ai 强制分流绑定至光速云或暮光加速的美国/台湾原生专线节点，而常规流量走香港节点，兼顾极速响应与防封稳定性。"
      }
    ]
  },
  {
    slug: "streaming-4k-netflix-disney",
    title: "4K 8K 流媒体全解锁指南：Netflix、Disney+ 与 YouTube 秒开实测",
    tag: "4K 流媒体专题",
    summary: "拒绝锁区与画质降级！全面解析跨区流媒体（Netflix 原创剧、Disney+ 全区、HBO Max、YouTube Premium）对 DNS 污染与原生 IP 解锁的硬性要求。",
    recommendedAirports: ["guangsu", "feimao", "ermao", "xingdaomeng"],
    contentSections: [
      {
        heading: "一、Netflix 跨区与版权库解锁机制",
        body: "Netflix 采用复杂的 IP 地理位置数据库判断策略。非原生 IP 只能观看没有地区版权限制的自制剧（自制剧全解锁不等于全区解锁）。真正的全区解锁需要落地节点具备流媒体 DNS 重定向或原生本地住宅 IP 伪装。"
      },
      {
        heading: "二、晚高峰 8K 400Mbps+ 真实带宽实测",
        body: "在晚间 20:00 至 23:00 网络高峰期，普通公网直连中转通常出现严重丢包。而实测光速云（香港节点 529Mbps）与二猫云、飞猫云的 IEPL 专线在晚高峰跑满百兆宽带，4K 拖拽进度条毫无缓冲停顿。"
      }
    ]
  },
  {
    slug: "cross-border-tiktok-ecommerce",
    title: "跨境电商与 TikTok 海外直播专用专线部署方案",
    tag: "出海电商专题",
    summary: "面向亚马逊、Shopee、独立站及 TikTok 运营团队，提供独享纯净 IP、固定出口与零卡顿的高合规专用网络解决方案。",
    recommendedAirports: ["guangsu", "muguang", "firefly"],
    contentSections: [
      {
        heading: "一、TikTok 平台环境检测三要素",
        body: "TikTok 严格检查设备 SIM 卡、系统语言时区与出口 IP 的纯净度。若使用普通廉价机场的动态漂移 IP，账号极易被限流（0播放）甚至封店。跨境电商团队必须采用固定原生 IP 或定制版 IPLC 专线。"
      },
      {
        heading: "二、光速云定制版专线在跨境业务中的落地",
        body: "光速云提供 500GB/月 起的独立专线与专属原生 IP 部署服务，单节点最高 2.5Gbps 带宽，客服一对一确认线路类型与落地地区，完美满足多账号防关联、跨境团队长期稳定直播等高要求场景。"
      }
    ]
  },
  {
    slug: "iepl-vs-iplc-architecture",
    title: "机场线路黑话大科普：IEPL 与 IPLC 物理专线到底强在哪里？",
    tag: "技术拓扑科普",
    summary: "为什么老玩家都认准内网专线？深入浅出拆解普通直连、公网中转与 IEPL/IPLC 跨境专线的底层差异，教你避开廉价虚标套路。",
    recommendedAirports: ["guangsu", "firefly", "weitu", "yuzhou"],
    contentSections: [
      {
        heading: "一、公网中转 vs 物理专线核心区别",
        body: "普通公网中转依然需要经过 GFW 防火墙出境，在特殊敏感时期容易出现大面积断流；而 IEPL（国际以太网专线）与 IPLC（国际私有租用线路）是电信运营商直接在海底光缆中划出的专用隧道，内部直接跨境互联，完全不经过公网防火墙，真正实现 0 丢包与晚高峰稳定无感连接。"
      },
      {
        heading: "二、如何辨别真假专线？",
        body: "真专线具有明显的特征：入口为国内三网 BGP 节点，测试 TLS 握手 RTT 通常低于 45ms；全天测速延迟波动不会超过 5ms；在全国断网潮时依然保持坚挺。本站实测推荐的光速云、Firefly 与唯兔云均通过了严密的内网专线检测。"
      }
    ]
  }
];
