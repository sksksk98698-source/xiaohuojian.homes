// 42家机场品牌完整数据模型 - 小火箭 (xiaohuojian.homes) 评测实验室权威发布
export interface Plan {
  name: string;
  price: string;
  traffic: string;
  cycle: string;
}

export interface UnlockStatus {
  chatgpt: string;
  claude: string;
  netflix: string;
  disney: string;
  youtube: string;
  tiktok: string;
}

export interface TestMetrics {
  date?: string;
  hkLatency?: string;
  hkSpeed?: string;
  twLatency?: string;
  twSpeed?: string;
  sgLatency?: string;
  sgSpeed?: string;
  jpLatency?: string;
  jpSpeed?: string;
  usLatency?: string;
  usSpeed?: string;
}

export interface Airport {
  id: string;
  name: string;
  rank: number;
  isTopPick: boolean;
  affUrl: string;
  coupon?: string;
  priceStarting: string;
  entryPriceNote: string;
  billingType: string;
  foundedYear: string;
  lineType: string;
  protocol: string;
  clientSupport: string;
  speedtestImage?: string;
  unlockImages?: string[];
  features: string[];
  unlockStatus: UnlockStatus;
  testMetrics?: TestMetrics;
  plans: Plan[];
  summary: string;
  advantages: string[];
  limitations: string[];
  targetUsers: string[];
}

export const airports: Airport[] = [
  {
    "id": "guangsu",
    "name": "光速云",
    "rank": 1,
    "isTopPick": true,
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "AMM",
    "priceStarting": "¥8/月起",
    "entryPriceNote": "年付折合约 8 元/月 (¥99/年 69GB/月)，另有致敬斯诺克147永久套餐(¥147/247GB不过期)",
    "billingType": "年付折算 / 月付 / 永久不过期",
    "foundedYear": "2020年",
    "lineType": "IEPL专线 + 企业级内网专线",
    "protocol": "VLESS / Shadowsocks",
    "clientSupport": "自研客户端 + 支持 Clash / Shadowrocket 订阅导入",
    "speedtestImage": "/images/reviews/guangsu-speedtest-2026.png",
    "unlockImages": [
      "/images/reviews/guangsu-unlock-matrix-01.jpg",
      "/images/reviews/guangsu-unlock-matrix-02.jpg",
      "/images/reviews/guangsu-unlock-matrix-03.jpg",
      "/images/reviews/guangsu-unlock-matrix-04.jpg",
      "/images/reviews/guangsu-unlock-matrix-05.jpg"
    ],
    "features": [
      "第一主推旗舰：IEPL 专线与企业级内网双线路架构",
      "节点单最高 2.5Gbps 带宽，晚高峰抗压无卡顿",
      "覆盖香港×20、台湾×5、日本×10、新加坡×10、美国×10等11+热门地区",
      "提供致敬斯诺克147永久不限时套餐，轻度用户无过期焦虑",
      "深度适配跨境电商、TikTok 直播、海外社媒投放与企业内网办公"
    ],
    "unlockStatus": {
      "chatgpt": "支持（部分原生节点）",
      "claude": "全节点免降级支持",
      "netflix": "全区原创剧解锁",
      "disney": "4K全区解锁",
      "youtube": "4K/8K秒开",
      "tiktok": "原生IP独享支持"
    },
    "testMetrics": {
      "date": "2026-10-19",
      "hkLatency": "22ms",
      "hkSpeed": "529 Mbps",
      "twLatency": "41ms",
      "twSpeed": "114 Mbps",
      "sgLatency": "46ms",
      "sgSpeed": "387 Mbps",
      "jpLatency": "57ms",
      "jpSpeed": "135 Mbps",
      "usLatency": "143ms",
      "usSpeed": "18 Mbps"
    },
    "plans": [
      {
        "name": "致敬斯诺克147永久套餐",
        "price": "¥147",
        "traffic": "247GB (一次性不过期)",
        "cycle": "一次性付费"
      },
      {
        "name": "轻量版入门",
        "price": "¥99/年 (折合¥8/月)",
        "traffic": "69GB/月",
        "cycle": "年付"
      },
      {
        "name": "极速版",
        "price": "¥25/月",
        "traffic": "168GB/月",
        "cycle": "月付 (半年9折/年付8折)"
      },
      {
        "name": "流光版",
        "price": "¥34/月",
        "traffic": "268GB/月",
        "cycle": "月付"
      },
      {
        "name": "量子版",
        "price": "¥68/月",
        "traffic": "568GB/月",
        "cycle": "月付"
      },
      {
        "name": "定制版独立专线",
        "price": "¥680/月",
        "traffic": "500GB/月 独享原生IP+独立带宽",
        "cycle": "月付"
      }
    ],
    "summary": "光速云是2020年运营至今的老牌综合型专线机场。结合IEPL专线与内网中转，提供从年付8元到定制大带宽的全周期套餐，在晚高峰网络延迟、4K流媒体和企业出海场景表现极其稳定，是本站评测实验室首推选择。",
    "advantages": [
      "全线IEPL内网专线抗封锁",
      "提供永久不限时套餐",
      "自研客户端无需手动配置订阅",
      "支持支付宝/微信/USDT多种合规支付"
    ],
    "limitations": [
      "特殊商品不支持退款，建议先小额或按月体验",
      "ChatGPT需选择特定原生落地节点"
    ],
    "targetUsers": [
      "对晚高峰稳定性有高要求的视频用户",
      "跨境出海与TikTok直播运营",
      "需要永久备用节点的用户"
    ]
  },
  {
    "id": "muguang",
    "name": "暮光加速",
    "rank": 2,
    "isTopPick": true,
    "affUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "coupon": "muguang5555",
    "priceStarting": "¥20/月",
    "entryPriceNote": "基础版 ¥20/月 120GB，另有年付轻量版 ¥109/年 70GB/月 及不限时包",
    "billingType": "月付 / 年付 / 一次性大容量包",
    "foundedYear": "2023年",
    "lineType": "BGP 智能调度 + 专线级出口",
    "protocol": "Trojan / VLESS",
    "clientSupport": "覆盖 Windows、macOS、iOS、Android、Linux 全平台，支持多设备同时在线",
    "speedtestImage": "/images/reviews/muguang-speedtest-2026.png",
    "features": [
      "BGP 智能调度专线级出口，主打低延迟与跨平台多设备同时在线",
      "套餐档位丰富，120GB–1500GB 满足不同规模团队协作",
      "官方提供 7×24 小时真人客服支持",
      "提供一次性不限时流量包（¥219/150GB起）"
    ],
    "unlockStatus": {
      "chatgpt": "全节点支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "4K解锁",
      "youtube": "4K超清",
      "tiktok": "支持"
    },
    "testMetrics": {
      "date": "2026-10-19",
      "hkLatency": "26ms",
      "hkSpeed": "509 Mbps",
      "twLatency": "40ms",
      "twSpeed": "107 Mbps",
      "sgLatency": "43ms",
      "sgSpeed": "419 Mbps",
      "jpLatency": "53ms",
      "jpSpeed": "150 Mbps",
      "usLatency": "160ms",
      "usSpeed": "19 Mbps"
    },
    "plans": [
      {
        "name": "暮光·基础版",
        "price": "¥20/月",
        "traffic": "120GB/月",
        "cycle": "月付"
      },
      {
        "name": "暮光·标准版",
        "price": "¥40/月",
        "traffic": "240GB/月",
        "cycle": "月付"
      },
      {
        "name": "暮光·旗舰版",
        "price": "¥100/月",
        "traffic": "700GB/月",
        "cycle": "月付"
      },
      {
        "name": "暮光·年付轻量版",
        "price": "¥109/年",
        "traffic": "70GB/月",
        "cycle": "年付"
      },
      {
        "name": "不限时轻量包",
        "price": "¥219",
        "traffic": "150GB一次性",
        "cycle": "一次性付费"
      }
    ],
    "summary": "暮光加速主打跨平台多设备与团队办公，通过BGP智能调度提供稳定的低延迟网络环境，适合家庭多设备及跨境电商团队使用。",
    "advantages": [
      "多设备并发无限制",
      "7×24小时在线客服",
      "提供不限时大容量包"
    ],
    "limitations": [
      "入门月付20元相比纯廉价机场略高"
    ],
    "targetUsers": [
      "家庭多设备共享用户",
      "外贸与跨国协同团队",
      "海外流媒体重度观众"
    ]
  },
  {
    "id": "feimao",
    "name": "飞猫云",
    "rank": 3,
    "isTopPick": true,
    "affUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "coupon": "flycat888",
    "priceStarting": "¥7/月起 (折算)",
    "entryPriceNote": "学生版年付 ¥84/年 (折合 ¥7/月，50GB/月)，星耀版月付 ¥25/150GB",
    "billingType": "年付低价 / 月付",
    "foundedYear": "2023年",
    "lineType": "IEPL 内网专线 + 亚太优化中转",
    "protocol": "Shadowsocks / VLESS",
    "clientSupport": "专属客户端登录即用，无需配置订阅；同时兼容通用订阅",
    "speedtestImage": "/images/reviews/feimao-speedtest-2026.png",
    "features": [
      "专属客户端开箱即用，下载后输入账号密码直接连接，新手极其友好",
      "年付平均约 7 元/月，性价比出众",
      "亚太优质节点覆盖，晚高峰看 YouTube 4K 流畅不卡顿"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "原创剧解锁",
      "disney": "支持",
      "youtube": "4K流畅",
      "tiktok": "支持"
    },
    "testMetrics": {
      "date": "2026-08-11",
      "hkLatency": "45ms",
      "hkSpeed": "86.5 MB/s",
      "jpLatency": "88ms",
      "jpSpeed": "64.2 MB/s",
      "usLatency": "150ms",
      "usSpeed": "22.8 MB/s"
    },
    "plans": [
      {
        "name": "飞猫·学生版",
        "price": "¥84/年 (折合¥7/月)",
        "traffic": "50GB/月",
        "cycle": "年付"
      },
      {
        "name": "飞猫·星耀版",
        "price": "¥25/月",
        "traffic": "150GB/月",
        "cycle": "月付"
      },
      {
        "name": "飞猫·王者版",
        "price": "¥45/月",
        "traffic": "300GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "飞猫云将易用性做到极致，自研客户端让完全不懂规则分流的新手也能30秒搞定连接，配合7元档高性价比，是新手入门首选。",
    "advantages": [
      "专属客户端免配置订阅",
      "年付月均成本极低",
      "亚太节点延迟低"
    ],
    "limitations": [
      "学生版每月50GB流量适合中轻度日常使用"
    ],
    "targetUsers": [
      "零基础新手小白",
      "学生党与预算有限用户",
      "日常刷网页、查资料与看视频"
    ]
  },
  {
    "id": "weifeng",
    "name": "微风网络",
    "rank": 4,
    "isTopPick": true,
    "affUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "coupon": "flat888",
    "priceStarting": "¥7/月起 (折算)",
    "entryPriceNote": "入门年付约7元/月，支持9折优惠码 flat888",
    "billingType": "年付 / 月付",
    "foundedYear": "2022年",
    "lineType": "IEPL 高速专线",
    "protocol": "Shadowsocks / Trojan",
    "clientSupport": "全面支持 Clash Verge, Shadowrocket, v2rayN 等第三方通用客户端",
    "speedtestImage": "/images/reviews/weifeng-speedtest-2026.png",
    "features": [
      "IEPL 高速内网专线，有效抵抗网络波动",
      "长期提供稳定折扣，性价比稳居前列",
      "支持全三网 BGP 智能分流优化"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "微风·轻量年付",
        "price": "¥85/年",
        "traffic": "60GB/月",
        "cycle": "年付"
      },
      {
        "name": "微风·畅游月付",
        "price": "¥22/月",
        "traffic": "150GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "微风网络主打踏实稳健的高速IEPL专线，不搞虚假噱头，晚高峰网络抗封锁与丢包控制出色。",
    "advantages": [
      "IEPL专线低延迟",
      "三网负载优化良好",
      "长期运营口碑稳定"
    ],
    "limitations": [
      "无自研客户端，需配合Shadowrocket/Clash使用"
    ],
    "targetUsers": [
      "追求晚高峰稳定性的进阶用户",
      "使用小火箭的iOS老用户"
    ]
  },
  {
    "id": "dalaoyun",
    "name": "大佬云",
    "rank": 5,
    "isTopPick": true,
    "affUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "coupon": "dly888",
    "priceStarting": "¥5.6/月起",
    "entryPriceNote": "超低门槛 ¥5.6/月 60GB 高速流量",
    "billingType": "极低月付 / 年付折算",
    "foundedYear": "2023年",
    "lineType": "BGP 优化中转专线",
    "protocol": "VLESS / Shadowsocks",
    "clientSupport": "通用订阅导入，兼容各大主流代理软件",
    "features": [
      "月付仅需 ¥5.6 元，极致低价打破行业门槛",
      "虽然便宜但仍保持 1 倍流量无虚标",
      "节点覆盖亚太核心机房，满足轻度出海需求"
    ],
    "unlockStatus": {
      "chatgpt": "部分节点",
      "claude": "支持",
      "netflix": "支持",
      "disney": "部分",
      "youtube": "高清4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "尝鲜月付包",
        "price": "¥5.6/月",
        "traffic": "60GB/月",
        "cycle": "月付"
      },
      {
        "name": "实惠标准包",
        "price": "¥15/月",
        "traffic": "180GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "极致性价比代表品牌，5.6元月付毫无经济压力，非常适合作为手机或电脑的备用梯子。",
    "advantages": [
      "单月仅5.6元极低尝试成本",
      "不强制年付捆绑",
      "线路响应快"
    ],
    "limitations": [
      "超低价套餐节点数量相对精简"
    ],
    "targetUsers": [
      "备用节点需求者",
      "预算极度敏感型用户",
      "轻度学术与外贸沟通"
    ]
  },
  {
    "id": "xingdaomeng",
    "name": "星岛梦",
    "rank": 6,
    "isTopPick": true,
    "affUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "coupon": "nmw888",
    "priceStarting": "¥18/月起",
    "entryPriceNote": "2020年老牌运营，另提供不限时不过期流量包",
    "billingType": "月付 / 年付 / 不限时包",
    "foundedYear": "2020年",
    "lineType": "全线 IEPL 物理专线",
    "protocol": "Shadowsocks / VLESS",
    "clientSupport": "支持 Clash, Shadowrocket, Sing-box 全协议客户端",
    "speedtestImage": "/images/reviews/xingdaomeng-speedtest-2026.png",
    "features": [
      "2020年稳定运营至今的老牌口碑机场",
      "主打全线 IEPL 物理专线，长期稳定不跑路",
      "提供不限时永久流量包，解决流量用不完浪费的痛点"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "4K解锁",
      "disney": "支持",
      "youtube": "4K秒开",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "星岛月付标准",
        "price": "¥22/月",
        "traffic": "130GB/月",
        "cycle": "月付"
      },
      {
        "name": "不限时永久包",
        "price": "¥168",
        "traffic": "300GB不过期",
        "cycle": "一次性付费"
      }
    ],
    "summary": "五年老牌专线机场，以信誉和服务稳定性著称，不限时套餐非常受欢迎。",
    "advantages": [
      "运营周期长达5年",
      "提供不限时不过期套餐",
      "节点抗丢包性能出色"
    ],
    "limitations": [
      "高峰期部分冷门节点会限速保主线"
    ],
    "targetUsers": [
      "重视长期可靠性的用户",
      "流量使用不规律的用户"
    ]
  },
  {
    "id": "ermao",
    "name": "二猫云",
    "rank": 7,
    "isTopPick": true,
    "affUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "coupon": "ermao5555",
    "priceStarting": "¥20/月",
    "entryPriceNote": "标准档 ¥20/月 130GB 流量",
    "billingType": "月付 / 季付 / 年付",
    "foundedYear": "2022年",
    "lineType": "IEPL 内网专线",
    "protocol": "Shadowsocks",
    "clientSupport": "全平台客户端订阅支持",
    "speedtestImage": "/images/reviews/ermao-speedtest-2026.png",
    "features": [
      "20元130GB黄金配比，满足大部分中度用户日常所需",
      "实测香港、日本专线延迟均在 40ms 左右，连接顺滑",
      "全节点 1 倍率计费，绝不暗扣流量"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "二猫·标准版",
        "price": "¥20/月",
        "traffic": "130GB/月",
        "cycle": "月付"
      },
      {
        "name": "二猫·旗舰版",
        "price": "¥48/月",
        "traffic": "350GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "二猫云以诚实计费和稳定专线著称，没有复杂倍率陷阱，使用体验舒心。",
    "advantages": [
      "全节点1倍真实计费",
      "延迟低且抖动小",
      "月付价格适中"
    ],
    "limitations": [
      "促销活动相对较少"
    ],
    "targetUsers": [
      "追求真实流量无套路的用户",
      "日常YouTube/Netflix重度爱好者"
    ]
  },
  {
    "id": "wuyou",
    "name": "无忧链接",
    "rank": 8,
    "isTopPick": true,
    "affUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "coupon": "wuyou666",
    "priceStarting": "¥6/月起",
    "entryPriceNote": "订阅直接识别无需转换，入门仅 ¥6/月",
    "billingType": "月付 / 年付",
    "foundedYear": "2023年",
    "lineType": "BGP + 跨境专线",
    "protocol": "VLESS / Trojan",
    "clientSupport": "协议原生适配，订阅无需借助第三方转格式",
    "speedtestImage": "/images/reviews/wuyou-speedtest-2026.jpg",
    "unlockImages": [
      "/images/reviews/wuyou-unlock-2026.jpg"
    ],
    "features": [
      "独家技术：订阅链接原生支持各类客户端，无需转换防止泄露",
      "提供 6 元超低门槛轻量试用套餐",
      "实测流媒体与 ChatGPT 解锁率高达 95% 以上"
    ],
    "unlockStatus": {
      "chatgpt": "全节点原生",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "支持",
      "youtube": "4K秒开",
      "tiktok": "原生支持"
    },
    "plans": [
      {
        "name": "无忧·体验档",
        "price": "¥6/月",
        "traffic": "50GB/月",
        "cycle": "月付"
      },
      {
        "name": "无忧·畅享档",
        "price": "¥18/月",
        "traffic": "160GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "无忧链接正如其名，解决订阅转换失效与隐私泄露隐患，6元月付实测流媒体全解锁。",
    "advantages": [
      "免转换订阅保障隐私",
      "流媒体与AI全绿解锁",
      "入门仅需6元"
    ],
    "limitations": [
      "知名度较新，需建立品牌认知"
    ],
    "targetUsers": [
      "注重订阅隐私与流媒体全解锁的用户",
      "小火箭高频用户"
    ]
  },
  {
    "id": "weitu",
    "name": "唯兔云",
    "rank": 9,
    "isTopPick": true,
    "affUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "coupon": "weitu666",
    "priceStarting": "¥16/月起",
    "entryPriceNote": "60+ 全球节点，三网优化 + 智能负载均衡",
    "billingType": "月付 / 季付 / 年付",
    "foundedYear": "2022年",
    "lineType": "三网优化 IPLC/IEPL 专线",
    "protocol": "Shadowsocks / VLESS",
    "clientSupport": "全平台客户端兼容",
    "speedtestImage": "/images/reviews/weitu-speedtest-2026.png",
    "features": [
      "拥有 60+ 全球多地区物理节点，负载均衡动态分流",
      "对中国电信、联通、移动三网均做针对性 BGP 入口优化",
      "高峰期智能切换拥塞节点，保障游戏与视频低延迟"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "唯兔·标准版",
        "price": "¥18/月",
        "traffic": "120GB/月",
        "cycle": "月付"
      },
      {
        "name": "唯兔·高阶版",
        "price": "¥35/月",
        "traffic": "280GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "唯兔云在节点分布广度与三网平衡性上表现亮眼，无论在哪个运营商环境下都有较好表现。",
    "advantages": [
      "全球60+节点覆盖广",
      "三网负载智能均衡",
      "延迟波动小"
    ],
    "limitations": [
      "非活动期间优惠力度较小"
    ],
    "targetUsers": [
      "跨国游戏加速与多地IP切换需求者",
      "电信联通移动混合网络环境"
    ]
  },
  {
    "id": "firefly",
    "name": "Firefly",
    "rank": 10,
    "isTopPick": true,
    "affUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "coupon": "firefly",
    "priceStarting": "¥19/月起",
    "entryPriceNote": "纯 IPLC 专线，6 档丰富套餐，免翻墙访问官网",
    "billingType": "月付 / 季付 / 年付",
    "foundedYear": "2021年",
    "lineType": "纯 IPLC 国际内网专线",
    "protocol": "Trojan / Shadowsocks",
    "clientSupport": "全平台兼容",
    "features": [
      "纯正 IPLC 专线架构，完全不经过 GFW 公网防火墙",
      "官方配备国内镜像免翻墙直连域名，掉线也能无障碍续费",
      "提供 6 档细分用量套餐，从个人轻度到团队大容量全覆盖"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "萤火·轻量",
        "price": "¥19/月",
        "traffic": "100GB/月",
        "cycle": "月付"
      },
      {
        "name": "萤火·标准",
        "price": "¥38/月",
        "traffic": "260GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "Firefly（萤火）以稳定的纯IPLC内网专线和免墙镜像官网见长，是外贸及技术团队的稳妥之选。",
    "advantages": [
      "纯IPLC专线保障晚高峰",
      "国内免翻直达官网",
      "套餐跨度大"
    ],
    "limitations": [
      "价格在专线中位线偏上"
    ],
    "targetUsers": [
      "外贸跨境严肃办公用户",
      "需要长期稳定不断连的商务人士"
    ]
  },
  {
    "id": "yuzhou",
    "name": "宇宙云",
    "rank": 11,
    "isTopPick": false,
    "affUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "coupon": "YUZHOU553",
    "priceStarting": "¥18/月起",
    "entryPriceNote": "IEPL + VLESS + 自研客户端",
    "billingType": "月付 / 年付",
    "foundedYear": "2023年",
    "lineType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 订阅导入",
    "speedtestImage": "/images/reviews/yuzhou-speedtest-2026.png",
    "features": [
      "全节点IEPL内网专线",
      "采用抗封锁能力优异的VLESS协议",
      "提供自研客户端极简连接"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "宇宙探索版",
        "price": "¥18/月",
        "traffic": "110GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "宇宙云主打IEPL与VLESS技术架构，抗封锁性能较好。"
  },
  {
    "id": "u1s1",
    "name": "U1S1",
    "rank": 12,
    "isTopPick": false,
    "affUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "coupon": "akaka",
    "priceStarting": "¥20/月",
    "entryPriceNote": "20元120GB标准稳健方案",
    "billingType": "月付 / 季付 / 年付",
    "foundedYear": "2022年",
    "lineType": "IEPL 专线",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "speedtestImage": "/images/reviews/u1s1-speedtest-2026.png",
    "features": [
      "实测晚高峰延迟低，Shadowsocks全平台开销低",
      "无套路计费"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "实话说基础档",
        "price": "¥20/月",
        "traffic": "120GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "U1S1实测下载速率高，节点连接稳定。"
  },
  {
    "id": "lingmao",
    "name": "灵猫网络",
    "rank": 13,
    "isTopPick": false,
    "affUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "coupon": "lmao888",
    "priceStarting": "¥19/月",
    "entryPriceNote": "19元150GB大流量 + 另有不限时套餐",
    "billingType": "月付 / 年付 / 不限时包",
    "foundedYear": "2022年",
    "lineType": "BGP 中转专线",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "speedtestImage": "/images/reviews/lingmao-speedtest-2026.png",
    "features": [
      "19元给出150GB高性价比流量",
      "支持不过期流量包"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "灵猫标准档",
        "price": "¥19/月",
        "traffic": "150GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "灵猫网络性价比较高，适合对流量要求偏大的用户。"
  },
  {
    "id": "jilian",
    "name": "极连云",
    "rank": 14,
    "isTopPick": false,
    "affUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "coupon": "ji8888",
    "priceStarting": "¥18/月",
    "entryPriceNote": "18元100GB，重点覆盖AI大模型访问",
    "billingType": "月付 / 年付",
    "foundedYear": "2023年",
    "lineType": "专线中转",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "speedtestImage": "/images/reviews/jilian-speedtest-2026.png",
    "features": [
      "针对ChatGPT/Claude做特定IP优化",
      "18元月付价格亲民"
    ],
    "unlockStatus": {
      "chatgpt": "全节点免翻墙直登优化",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "极连入门档",
        "price": "¥18/月",
        "traffic": "100GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "极连云重点对AI工具进行了节点清洗与原生IP支持。"
  },
  {
    "id": "guangnian",
    "name": "光年梯",
    "rank": 15,
    "isTopPick": false,
    "affUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "coupon": "gnt6666",
    "priceStarting": "¥18/月",
    "entryPriceNote": "18元110GB高速流量",
    "billingType": "月付 / 年付",
    "foundedYear": "2023年",
    "lineType": "IEPL 专线",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "speedtestImage": "/images/reviews/guangnian-speedtest-2026.png",
    "features": [
      "IEPL专线保障突发带宽",
      "18元适中价格"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "光年畅行",
        "price": "¥18/月",
        "traffic": "110GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "光年梯各项指标表现平衡，实测下载速度突出。"
  },
  {
    "id": "yifan",
    "name": "一翻云",
    "rank": 16,
    "isTopPick": false,
    "affUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "coupon": "yfy6666",
    "priceStarting": "¥20/月",
    "entryPriceNote": "20元150GB稳健大流量",
    "billingType": "月付 / 季付 / 年付",
    "foundedYear": "2023年",
    "lineType": "IEPL 专线",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "speedtestImage": "/images/reviews/yifan-speedtest-2026.png",
    "features": [
      "大流量套餐设计",
      "实测亚太节点连接平稳"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "一翻标准包",
        "price": "¥20/月",
        "traffic": "150GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "一翻云流量充足，适合视频与下载用户。"
  },
  {
    "id": "sogo",
    "name": "SOGO云",
    "rank": 17,
    "isTopPick": false,
    "affUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "coupon": "sss777",
    "priceStarting": "¥18/月",
    "entryPriceNote": "2026年新晋高速专线品牌",
    "billingType": "月付 / 年付",
    "foundedYear": "2026年",
    "lineType": "高速内网专线",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "speedtestImage": "/images/reviews/sogo-speedtest-2026.png",
    "features": [
      "2026新上架高带宽冗余节点",
      "晚高峰负载低"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "SOGO尝鲜",
        "price": "¥18/月",
        "traffic": "120GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "新品牌设备负载低，实测带宽表现强劲。"
  },
  {
    "id": "kexin",
    "name": "可信云",
    "rank": 18,
    "isTopPick": false,
    "affUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "coupon": "kkk333",
    "priceStarting": "¥19/月",
    "entryPriceNote": "品牌资料透明客观，无夸张虚标",
    "billingType": "月付 / 年付",
    "foundedYear": "2023年",
    "lineType": "中转优化线路",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "speedtestImage": "/images/reviews/kexin-speedtest-2026.png",
    "features": [
      "实测数据可追溯，不搞虚假承诺",
      "服务响应及时"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "可信基础",
        "price": "¥19/月",
        "traffic": "110GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "可信云资料详实，适合注重实际透明度的用户。"
  },
  {
    "id": "sujie",
    "name": "速界",
    "rank": 19,
    "isTopPick": false,
    "affUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "coupon": "sss1111",
    "priceStarting": "¥22/月",
    "entryPriceNote": "强调AI工具与跨境业务专属优化",
    "billingType": "月付 / 年付",
    "foundedYear": "2023年",
    "lineType": "企业级专线",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "speedtestImage": "/images/reviews/sujie-speedtest-2026.png",
    "features": [
      "针对AI生产力与出海电商节点特别优化",
      "稳定性高"
    ],
    "unlockStatus": {
      "chatgpt": "原生支持",
      "claude": "免降级",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "速界AI专业版",
        "price": "¥22/月",
        "traffic": "140GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "速界主打AI大模型与出海生产力场景。"
  },
  {
    "id": "shanyue",
    "name": "闪跃",
    "rank": 20,
    "isTopPick": false,
    "affUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "coupon": "shanyue",
    "priceStarting": "¥24/月",
    "entryPriceNote": "24元150GB高规格品质方案",
    "billingType": "月付 / 年付",
    "foundedYear": "2023年",
    "lineType": "IPLC 专线",
    "protocol": "Trojan / VLESS",
    "clientSupport": "通用订阅",
    "features": [
      "全IPLC专线保障低延迟",
      "多设备并发支持"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "闪跃专线版",
        "price": "¥24/月",
        "traffic": "150GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "闪跃专线品质过硬，适合中重度出海用户。"
  },
  {
    "id": "quanqiu",
    "name": "全球云",
    "rank": 21,
    "isTopPick": false,
    "affUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "coupon": "qqy7777",
    "priceStarting": "¥18/月",
    "entryPriceNote": "2026年新品牌，主打多国落地节点覆盖",
    "billingType": "月付 / 年付",
    "foundedYear": "2026年",
    "lineType": "跨境优化线路",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "speedtestImage": "/images/reviews/quanqiu-speedtest-2026.png",
    "features": [
      "覆盖小众地区节点",
      "新品牌资源充足"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "全球云入门版",
        "price": "¥18/月",
        "traffic": "100GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "全球云节点地区覆盖全面，适合有多国IP切换需求的用户。"
  },
  {
    "id": "shandianshu",
    "name": "闪电鼠",
    "rank": 22,
    "isTopPick": false,
    "affUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "coupon": "sd88",
    "priceStarting": "¥5.6/月起",
    "entryPriceNote": "5.6元/月 60GB 极低月付门槛",
    "billingType": "月付 / 年付",
    "foundedYear": "2023年",
    "lineType": "BGP 中转",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "features": [
      "超低月付价格",
      "适合备用梯子"
    ],
    "unlockStatus": {
      "chatgpt": "部分节点",
      "claude": "支持",
      "netflix": "支持",
      "disney": "部分",
      "youtube": "高清",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "闪电鼠特惠",
        "price": "¥5.6/月",
        "traffic": "60GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "闪电鼠是极少数提供5.6元月付的超轻量机场。"
  },
  {
    "id": "yunjiexian",
    "name": "云界线",
    "rank": 23,
    "isTopPick": false,
    "affUrl": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "coupon": "yjx888",
    "priceStarting": "¥5.6/月起",
    "entryPriceNote": "5.6元/月 60GB 平民方案",
    "billingType": "月付 / 年付",
    "foundedYear": "2023年",
    "lineType": "中转优化",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "features": [
      "轻量月付无压力",
      "适合日常网页浏览与学习"
    ],
    "unlockStatus": {
      "chatgpt": "部分节点",
      "claude": "支持",
      "netflix": "支持",
      "disney": "部分",
      "youtube": "高清",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "轻量尝鲜",
        "price": "¥5.6/月",
        "traffic": "60GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "云界线价格低廉，是低成本上网的实用选项。"
  },
  {
    "id": "liulianyun",
    "name": "榴莲云",
    "rank": 24,
    "isTopPick": false,
    "affUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "coupon": "ll88",
    "priceStarting": "¥5.6/月起",
    "entryPriceNote": "5.6元/月 60GB",
    "billingType": "月付 / 年付",
    "foundedYear": "2023年",
    "lineType": "中转优化",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "features": [
      "5.6元月付",
      "按月续费自由"
    ],
    "unlockStatus": {
      "chatgpt": "部分节点",
      "claude": "支持",
      "netflix": "支持",
      "disney": "部分",
      "youtube": "高清",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "榴莲尝鲜",
        "price": "¥5.6/月",
        "traffic": "60GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "榴莲云性价比高，适合学生和低频用户。"
  },
  {
    "id": "shenxing",
    "name": "神行加速",
    "rank": 25,
    "isTopPick": false,
    "affUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "coupon": "xs0077",
    "priceStarting": "¥14/月",
    "entryPriceNote": "14元/月 120GB",
    "billingType": "月付 / 年付",
    "foundedYear": "2023年",
    "lineType": "BGP 优化线路",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "features": [
      "14元中端定价",
      "120GB充足流量"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "神行月付",
        "price": "¥14/月",
        "traffic": "120GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "神行加速在14元档位提供了120GB流量，性价比较高。"
  },
  {
    "id": "huanqiuti",
    "name": "环球梯",
    "rank": 26,
    "isTopPick": false,
    "affUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "coupon": "HQ66",
    "priceStarting": "¥5.6/月起",
    "entryPriceNote": "5.6元/月 60GB",
    "billingType": "月付 / 年付",
    "foundedYear": "2023年",
    "lineType": "中转线路",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "features": [
      "超低成本",
      "适合备用应急"
    ],
    "unlockStatus": {
      "chatgpt": "部分节点",
      "claude": "支持",
      "netflix": "支持",
      "disney": "部分",
      "youtube": "高清",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "应急包",
        "price": "¥5.6/月",
        "traffic": "60GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "环球梯适合需要多个小额备用节点防止单一故障的用户。"
  },
  {
    "id": "yinxingren",
    "name": "隐形人",
    "rank": 27,
    "isTopPick": false,
    "affUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "coupon": "yxr888",
    "priceStarting": "¥25/月起",
    "entryPriceNote": "60+节点详细清单，官方承诺1小时故障修复，需使用专属客户端",
    "billingType": "月付 / 季付 / 年付",
    "foundedYear": "2022年",
    "lineType": "IEPL 内网专线",
    "protocol": "专属私有协议",
    "clientSupport": "仅提供自研客户端，不开放第三方订阅链接",
    "features": [
      "品牌资料显示：提供60+节点详细清单",
      "官方承诺1小时内节点故障修复响应",
      "强制采用自研客户端，杜绝订阅外泄"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "隐形人守护版",
        "price": "¥25/月",
        "traffic": "120GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "隐形人强调客户端隐私与快速运维响应，适合不想折腾订阅软件的用户。"
  },
  {
    "id": "tiziyun",
    "name": "梯子云",
    "rank": 28,
    "isTopPick": false,
    "affUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "coupon": "tiziyun",
    "priceStarting": "¥20/月起",
    "entryPriceNote": "全平台自研客户端一键登录，同时支持第三方通用订阅",
    "billingType": "月付 / 季付 / 年付",
    "foundedYear": "2022年",
    "lineType": "IEPL 专线",
    "protocol": "VLESS / Shadowsocks",
    "clientSupport": "自研全平台客户端 + Clash/小火箭通用订阅",
    "features": [
      "支持一键登录专属客户端",
      "支持标准Clash与Shadowrocket订阅导入",
      "多端无缝切换"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "梯子云标准档",
        "price": "¥20/月",
        "traffic": "130GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "梯子云兼顾自研客户端的易用性与第三方客户端的高级分流能力。"
  },
  {
    "id": "wgetcloud",
    "name": "WgetCloud",
    "rank": 29,
    "isTopPick": false,
    "affUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "coupon": "无",
    "priceStarting": "¥297/季 (折合¥99/月)",
    "entryPriceNote": "高门槛企业级专线，季付起购",
    "billingType": "季付 / 年付",
    "foundedYear": "2021年",
    "lineType": "企业级纯 IPLC 专线",
    "protocol": "Trojan / Shadowsocks",
    "clientSupport": "通用订阅",
    "features": [
      "高门槛高防专线",
      "覆盖全球15+国家地区59个全活节点",
      "亚洲近端延迟极低(香港平均25.9ms)"
    ],
    "unlockStatus": {
      "chatgpt": "部分可用",
      "claude": "支持",
      "netflix": "部分可用",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "基础专线服务",
        "price": "¥297/季",
        "traffic": "230GB/月",
        "cycle": "季付"
      }
    ],
    "summary": "知名高端专线机场，定价偏高，适合对预算不敏感但要求极致稳定的企业用户。"
  },
  {
    "id": "baiyueguang",
    "name": "白月光",
    "rank": 30,
    "isTopPick": false,
    "affUrl": "https://www.sibker.com/register?invite_code=gg6puAId",
    "coupon": "无",
    "priceStarting": "¥66/季 (折合¥22/月)",
    "entryPriceNote": "季付入门档 ¥66/季 含每月100GB",
    "billingType": "季付 / 年付",
    "foundedYear": "2021年",
    "lineType": "优质 BGP 中转",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "features": [
      "历史测速覆盖 108 个节点 79 个地区",
      "节点名称丰富",
      "季付支出门槛相对不高"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "小包季付",
        "price": "¥66/季",
        "traffic": "100GB/月",
        "cycle": "季付"
      }
    ],
    "summary": "节点地区极多，适合需要访问冷门国家网络的用户。"
  },
  {
    "id": "longmaoyun",
    "name": "龙猫云",
    "rank": 31,
    "isTopPick": false,
    "affUrl": "https://invite.longmaoyun.ltd/auth/register?code=longmao",
    "coupon": "无",
    "priceStarting": "¥25/月起",
    "entryPriceNote": "全专线 IPLC 无倍率定位",
    "billingType": "月付 / 季付 / 年付",
    "foundedYear": "2022年",
    "lineType": "IPLC 纯专线",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "features": [
      "全节点1倍率不扣量",
      "纯IPLC专线保障"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "龙猫标准版",
        "price": "¥25/月",
        "traffic": "120GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "龙猫云主打无倍率与纯IPLC专线，长期体验良好。"
  },
  {
    "id": "fatcat",
    "name": "FATCAT (肥猫)",
    "rank": 32,
    "isTopPick": false,
    "affUrl": "https://fatcataff.com/#/register?code=fatcat",
    "coupon": "无",
    "priceStarting": "¥32/月起",
    "entryPriceNote": "月付32元即可获350GB大流量",
    "billingType": "月付 / 年付",
    "foundedYear": "2022年",
    "lineType": "IEPL / IPLC 专线",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "features": [
      "350GB超大月流量",
      "专线接入抗拥塞"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "肥猫大流量包",
        "price": "¥32/月",
        "traffic": "350GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "FATCAT定位中大流量高性价比专线，适合重度下载用户。"
  },
  {
    "id": "tntcloud",
    "name": "TNTCloud",
    "rank": 33,
    "isTopPick": false,
    "affUrl": "https://tntcloudaff.com/auth/register?code=tnt",
    "coupon": "无",
    "priceStarting": "¥22/月起",
    "entryPriceNote": "IPLC 内网专线定位",
    "billingType": "月付 / 季付 / 年付",
    "foundedYear": "2022年",
    "lineType": "IPLC 专线",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "features": [
      "IPLC内网专线抗断流",
      "延迟低"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "TNT基础版",
        "price": "¥22/月",
        "traffic": "120GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "TNTCloud具有较好的节点可用率。"
  },
  {
    "id": "langwang",
    "name": "浪网",
    "rank": 34,
    "isTopPick": false,
    "affUrl": "https://langwangaff.com/#/register?code=langwang",
    "coupon": "无",
    "priceStarting": "¥15/月起",
    "entryPriceNote": "月付入门档 15 元含 100GB，三档流量梯度清晰",
    "billingType": "月付 / 年付",
    "foundedYear": "2022年",
    "lineType": "IEPL 专线",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "features": [
      "15元月入门门槛低",
      "流量阶梯透明（100GB/200GB/500GB）"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "浪网轻享",
        "price": "¥15/月",
        "traffic": "100GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "浪网定价平易近人，三档阶梯清晰，适合预算有限的日常上网者。"
  },
  {
    "id": "edgenova",
    "name": "EdgeNova",
    "rank": 35,
    "isTopPick": false,
    "affUrl": "https://edgenovaaff.com/#/register?code=edgenova",
    "coupon": "无",
    "priceStarting": "¥25/月起",
    "entryPriceNote": "多线路智能自动分配定位",
    "billingType": "月付 / 年付",
    "foundedYear": "2022年",
    "lineType": "多线 BGP + 专线",
    "protocol": "VLESS / Trojan",
    "clientSupport": "通用订阅",
    "features": [
      "多线智能负载",
      "原生IP落地支持"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "EdgeNova标准",
        "price": "¥25/月",
        "traffic": "150GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "EdgeNova技术架构现代，自动路由切换体验好。"
  },
  {
    "id": "sslar",
    "name": "sslar",
    "rank": 36,
    "isTopPick": false,
    "affUrl": "https://sslaraff.com/#/register?code=sslar",
    "coupon": "无",
    "priceStarting": "¥28/月起",
    "entryPriceNote": "企业级 IEPL + 多线 BGP 入口",
    "billingType": "月付 / 季付 / 年付",
    "foundedYear": "2021年",
    "lineType": "企业级 IEPL 专线",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "features": [
      "企业级专线与BGP优化",
      "抗封锁能力强"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "sslar企业版",
        "price": "¥28/月",
        "traffic": "160GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "sslar偏向高可用性企业用户，稳定性佳。"
  },
  {
    "id": "kaili",
    "name": "快狸",
    "rank": 37,
    "isTopPick": false,
    "affUrl": "https://guangs.kailiaff.cc/#/?code=kaili",
    "coupon": "无",
    "priceStarting": "¥20/月起",
    "entryPriceNote": "VLESS 协议实测性能优秀",
    "billingType": "月付 / 年付",
    "foundedYear": "2023年",
    "lineType": "专线中转",
    "protocol": "VLESS",
    "clientSupport": "通用订阅",
    "speedtestImage": "/images/reviews/kaili-speedtest-2026.png",
    "features": [
      "实测晚高峰 VLESS 协议跑满带宽",
      "流媒体解锁表现亮眼"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "快狸极速",
        "price": "¥20/月",
        "traffic": "130GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "快狸采用新一代VLESS协议，实测下载速度突出。"
  },
  {
    "id": "yidaiyun",
    "name": "一代云",
    "rank": 38,
    "isTopPick": false,
    "affUrl": "https://yidaiyunaff.com/#/register?code=yidai",
    "coupon": "无",
    "priceStarting": "¥18/月起",
    "entryPriceNote": "老牌中转服务",
    "billingType": "月付 / 年付",
    "foundedYear": "2021年",
    "lineType": "中转优化",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "features": [
      "平价中转稳定性好",
      "节点延迟均值稳定"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "高清",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "一代标准",
        "price": "¥18/月",
        "traffic": "100GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "一代云老牌稳定，价格适中。"
  },
  {
    "id": "haianxian",
    "name": "海岸线",
    "rank": 39,
    "isTopPick": false,
    "affUrl": "https://haianxianaff.com/#/register?code=haian",
    "coupon": "无",
    "priceStarting": "¥20/月起",
    "entryPriceNote": "沿海 BGP 入口优化",
    "billingType": "月付 / 年付",
    "foundedYear": "2022年",
    "lineType": "沿海 BGP 专线",
    "protocol": "Trojan / VLESS",
    "clientSupport": "通用订阅",
    "features": [
      "上海/广州优质沿海入口",
      "直连亚太数据中心"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "海岸线月付",
        "price": "¥20/月",
        "traffic": "120GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "海岸线在华东和华南地区拥有更低的入口延迟。"
  },
  {
    "id": "qifei",
    "name": "起飞云",
    "rank": 40,
    "isTopPick": false,
    "affUrl": "https://qifeiaff.com/#/register?code=qifei",
    "coupon": "无",
    "priceStarting": "¥12/月起",
    "entryPriceNote": "学生与入门低价",
    "billingType": "月付 / 年付",
    "foundedYear": "2023年",
    "lineType": "优质中转",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "features": [
      "12元月付低门槛",
      "操作极简"
    ],
    "unlockStatus": {
      "chatgpt": "部分节点",
      "claude": "支持",
      "netflix": "支持",
      "disney": "部分",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "起飞入门",
        "price": "¥12/月",
        "traffic": "80GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "起飞云针对预算有限的用户提供基础网络保障。"
  },
  {
    "id": "xingyun",
    "name": "星云加速",
    "rank": 41,
    "isTopPick": false,
    "affUrl": "https://xingyunaff.com/#/register?code=xingyun",
    "coupon": "无",
    "priceStarting": "¥25/月起",
    "entryPriceNote": "多区域备用中继",
    "billingType": "月付 / 年付",
    "foundedYear": "2022年",
    "lineType": "多中继专线",
    "protocol": "Shadowsocks / Trojan",
    "clientSupport": "通用订阅",
    "features": [
      "节点多重容灾备份",
      "网络抗抖动良好"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "星云旗舰",
        "price": "¥25/月",
        "traffic": "160GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "星云加速节点容灾备份设计好，掉线率低。"
  },
  {
    "id": "bifang",
    "name": "毕方云",
    "rank": 42,
    "isTopPick": false,
    "affUrl": "https://bifangaff.com/#/register?code=bifang",
    "coupon": "无",
    "priceStarting": "¥16/月起",
    "entryPriceNote": "综合中端节点配置",
    "billingType": "月付 / 年付",
    "foundedYear": "2023年",
    "lineType": "BGP 中转",
    "protocol": "Shadowsocks",
    "clientSupport": "通用订阅",
    "features": [
      "16元价格中规中矩",
      "覆盖日常出海网站"
    ],
    "unlockStatus": {
      "chatgpt": "支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "高清",
      "tiktok": "支持"
    },
    "plans": [
      {
        "name": "毕方基础",
        "price": "¥16/月",
        "traffic": "100GB/月",
        "cycle": "月付"
      }
    ],
    "summary": "毕方云各项表现均衡，适合轻度浏览与备用连接。"
  }
];

export const topPickAirports = airports.filter(a => a.isTopPick);
export const speedtestedAirports = airports.filter(a => !!a.speedtestImage);
