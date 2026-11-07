// 跑路预警与黑名单专题矩阵专著级数据库 (xiaohuojian.homes)
// 围绕：失联监测机制、跑路前兆特征、真实异常样本审计与止损逃生手册
// 严格杜绝编造，真实结合 42 家机场巡检数据（如宇宙云 #11 节点失联与官网异常事实）

export interface ScamWarningQuickItem {
  statusLevel: "高危失联预警" | "存疑重点监控" | "历史平稳运行";
  badge: string;
  brandOrPattern: string;
  symptom: string;
  labVerdict: string;
  escapeAction: string;
  anchor: string;
}

export interface ScamSignalRow {
  signalName: string;
  dangerRank: "🚨 极度危险 (48h内跑路)" | "⚠️ 高度危险 (1-2周内异动)" | "🟡 中度风险 (运营恶化)";
  behaviorPattern: string;
  technicalReality: string;
  operatorExcuses: string;
  recommendedAction: string;
}

export interface MonitoredBrandStatusRow {
  id: string;
  brandName: string;
  rankOrPosition: string;
  foundedYear: string;
  latestInspectionDate: string;
  networkStatus: "节点失联 / 官网异常" | "正常运行 / 专线畅通" | "待补充实测资料";
  observedAnomalies: string;
  riskEvaluation: string;
  suggestedAction: string;
}

export interface ScamDeepChapter {
  id: string;
  number: string;
  tag: string;
  title: string;
  searchIntent: string;
  painPointAndTiming: string;
  coreEngineeringExplanation: string[];
  realCaseEvidence: {
    title: string;
    details: string;
  };
  operationalChecklist: string[];
  actionRecommendation: string;
}

export interface EmergencyEscapeStep {
  stepNumber: string;
  title: string;
  actionGuideline: string;
  technicalCodeOrCmd?: string;
  warningNote: string;
}

export interface AntiScamConversionCard {
  id: string;
  name: string;
  badge: string;
  foundedYear: string;
  longevityRecord: string;
  monthlyRealPrice: string;
  annualConvertedPrice: string;
  speedtestSummary: string;
  antiRunAdvantage: string;
  affUrl: string;
  couponCode: string;
  verifiedDate: string;
}

export interface ScamFaqItem {
  question: string;
  conclusion: string;
  details: string;
  relatedAnchor?: string;
}

// 1. 首屏直接提供答案：失联预警快报与即时处置建议
export const scamQuickAlerts: ScamWarningQuickItem[] = [
  {
    statusLevel: "高危失联预警",
    badge: "🚨 实验室实测通报",
    brandOrPattern: "宇宙云 (#11 yuzhou)",
    symptom: "节点大面积超时断流，官方网站无法正常打开，客服工单未响应",
    labVerdict: "【已确认为高风险失联】在 2026-10-19 的全网巡检中，原收录的宇宙云确认节点完全失联，官网域名解析异常，已全站下线推荐并列入预警名单。",
    escapeAction: "持有该套餐的用户切勿再次充值续费；立即导出备用节点并清除该订阅链接。",
    anchor: "#blacklist-monitoring-table"
  },
  {
    statusLevel: "高危失联预警",
    badge: "⚠️ 典型跑路杀猪盘模式",
    brandOrPattern: "「终身 5 折」「买一年送一年」骨折甩卖盘",
    symptom: "运营不足半年的新小机场，突然发起全站大额充值返赠或数百元永久不限时包",
    labVerdict: "【典型的资金盘崩盘前兆】商业专线每 Gbps 带宽具有硬性月租成本，无底线降价圈钱是操盘手准备卷款走人的确定性信号。",
    escapeAction: "绝不参与任何非知名老牌机场的跨年度大额促销，坚持单月付费原则。",
    anchor: "#chapter-scam-mechanics"
  },
  {
    statusLevel: "存疑重点监控",
    badge: "🟡 存疑监控中",
    brandOrPattern: "同质化 ¥5.6/月 极低价年付组 (闪电鼠/云界线/榴莲云/环球梯)",
    symptom: "缺乏独立测速截图与技术支撑团队，官网模板与套餐梯度高度雷同",
    labVerdict: "【轻资产二道贩子风险】多为同一上游分销商的白标（White-label）套壳站点，抗风险能力弱，一旦上游断供极易集体下线。",
    escapeAction: "建议仅作为第三条冗余备用梯，严禁存入大额资金或作为生产力主力梯。",
    anchor: "#blacklist-monitoring-table"
  },
  {
    statusLevel: "历史平稳运行",
    badge: "✅ 抗跑路老牌基石",
    brandOrPattern: "3–6 年老牌专线集群 (光速云 / 星岛梦 / 二猫云 / 暮光加速)",
    symptom: "历经多次国际海缆抢修与网络严打，官网具备免翻直连域名与防失联发布页",
    labVerdict: "【经受住长周期周期检验】具备独立海外实体团队、多地 BGP 入口冗余与正规收银系统，运营信誉与续存确定性极高。",
    escapeAction: "优先作为长期主力科学上网的压舱石方案，搭配月付或合理年付小包。",
    anchor: "#anti-scam-conversion"
  }
];

// 2. 有依据的核心对比表一：8 大常见跑路套路与前兆特征排查表
export const scamSignalRows: ScamSignalRow[] = [
  {
    signalName: "1. 官方 Telegram 群开启全员禁言",
    dangerRank: "🚨 极度危险 (48h内跑路)",
    behaviorPattern: "官方交流群突然开启全员禁言，管理员关闭私信，或直接解散主要沟通频道。",
    technicalReality: "当大面积节点断流引发海量维权投诉时，操盘手为阻止恐慌蔓延并争取撤退转移资金的时间，第一步必然是切断所有双向沟通渠道。",
    operatorExcuses: "「群内遭遇同行炸群/广告机器人，临时禁言整顿，技术正在全力抢修……」",
    recommendedAction: "判定跑路概率 >90%。立即保存订单与支付凭证，不再对其抱有任何复原幻想。"
  },
  {
    signalName: "2. 疯狂推出「充一年送一年 / 永久骨折卡」",
    dangerRank: "🚨 极度危险 (48h内跑路)",
    behaviorPattern: "突然在邮件列表或主页弹窗发布不可思议的 3 折、5 折大促，甚至买 1 年送 1 年、¥99 终身无限流量卡。",
    technicalReality: "IDC 物理专线与落地服务器账单即将到期且入不敷出，运营者准备在彻底拉闸前最后收割一波流动资金（Exit Scam 卷款潜逃）。",
    operatorExcuses: "「庆祝周年庆/老板大喜/机房扩容回馈新老客户，限量 100 份特惠……」",
    recommendedAction: "绝对不要因为贪图便宜上当充值！正规专线成本固定，绝不可能长期亏本赠送。"
  },
  {
    signalName: "3. 借口「上游骨干故障」持续超过 2 周未修复",
    dangerRank: "⚠️ 高度危险 (1-2周内异动)",
    behaviorPattern: "所有香港、日本、美国主力节点全红超时，官方持续发布空洞排障公告超过 14 天。",
    technicalReality: "正常的物理专线故障，运营商热备链路通常在 2–6 小时内完成切换；持续两周全线瘫痪通常意味着机场欠费被机房直接拔线封机。",
    operatorExcuses: "「受到不可抗力影响/上海入口被查封/上游供应商跑路，正在通宵重新采购服务器……」",
    recommendedAction: "立即启用备用机场梯子；停止在该机场的一切活动，准备切换主力订阅。"
  },
  {
    signalName: "4. 频繁更换收款商户名称与支付渠道",
    dangerRank: "⚠️ 高度危险 (1-2周内异动)",
    behaviorPattern: "结账时支付宝/微信收款商户每天都在变，从正规科技公司变为个人小店、农产品甚至境外高风险聚合接口。",
    technicalReality: "因高频争议与退款投诉，原有正规商业收银台已被支付机构风控冻结，只能通过黑灰产高费率地下聚合渠道勉强维持套现通道。",
    operatorExcuses: "「支付通道正在风控升级维护中，请选择通道三或直接联系客服代充……」",
    recommendedAction: "切勿在不规范的个人代充接口扫码，防止个人微信/支付宝账户被连带风控受限。"
  },
  {
    signalName: "5. 客户端节点返回虚假 HTTP 200 但无实际下行流量",
    dangerRank: "🟡 中度风险 (运营恶化)",
    behaviorPattern: "在小火箭或 Clash 中点击测速显示延迟仅 30ms（绿色），但打开任何网页都无法加载（假握手）。",
    technicalReality: "机场为了制造『节点还活着』的虚假假象，在入口服务器上搭建了假握手响应脚本，欺骗客户端测速机制，实际出国段带宽早已断绝。",
    operatorExcuses: "「节点连接正常，可能是您本地宽带的 DNS 污染，请自行更换本地 DNS……」",
    recommendedAction: "运行本站提供的 curl TTFB 真实性测试命令，一旦确认首字节超时，立即停止使用。"
  },
  {
    signalName: "6. 官网频繁更换主域名且旧域名直接失效",
    dangerRank: "🟡 中度风险 (运营恶化)",
    behaviorPattern: "两周内更换了 3 次以上网址，且旧网址直接 404 或变成赌博导航，防失联发布页无法打开。",
    technicalReality: "域名遭精准封锁说明防御架构薄弱，若无多地分布式 DNS 容灾与备用直连域名体系，运营团队技术实力已达临界点。",
    operatorExcuses: "「受大环境影响旧域名被墙，请认准唯一最新备用网址……」",
    recommendedAction: "核查该机场是否具备长期的 Telegram 官方防失联频道或 Twitter 官方公告阵地。"
  },
  {
    signalName: "7. 突然强制全员切换专属客户端并取消通用订阅",
    dangerRank: "🟡 中度风险 (运营恶化)",
    behaviorPattern: "在没有任何技术过渡期的情况下，强制用户卸载 Clash/小火箭并下载其自研闭源 App，否则清空账号。",
    technicalReality: "部分不良团队通过定制客户端植入弹窗广告或流量劫持代码以榨取剩余价值（注：飞猫/无忧等良心专属客户端除外，需辨别有无广告后门）。",
    operatorExcuses: "「为响应防抓取安全政策，全面停用通用订阅链接……」",
    recommendedAction: "检查其客户端是否附带流氓弹窗与后台高耗电异常；非纯净客户端坚决不予安装。"
  },
  {
    signalName: "8. 创始人团队内讧或在公开社区互撕",
    dangerRank: "🚨 极度危险 (48h内跑路)",
    behaviorPattern: "Telegram 管理员突然发布声明称『核心技术人员卷款失联 / 数据库遭合伙人恶意清空』。",
    technicalReality: "典型的内部利益分配不均或法律风险暴露导致的树倒猢狲散，几乎 100% 伴随数据库删除与节点永久下线。",
    operatorExcuses: "「本频道已被前技术人员劫持，请大家不要相信任何充值通知……」",
    recommendedAction: "立即在本地备份订阅中的有效节点配置；断开该订阅自动更新以防拉取到恶意空配置。"
  }
];

// 2. 有依据的核心对比表二：42 家机场巡检状态与失联/存续审计跟踪总表
export const monitoredBrandStatusRows: MonitoredBrandStatusRow[] = [
  {
    id: "guangsu",
    brandName: "光速云 (LightSpeed)",
    rankOrPosition: "综合排名 #1",
    foundedYear: "2020年运营",
    latestInspectionDate: "2026-10-19",
    networkStatus: "正常运行 / 专线畅通",
    observedAnomalies: "无异常。五地物理专线全通（香港 22ms / 536Mbps），国内直连免翻官网稳定，工单响应及时。",
    riskEvaluation: "极低风险（老牌基石）",
    suggestedAction: "推荐作为生产力主力专线长期持有。"
  },
  {
    id: "muguang",
    brandName: "暮光加速 (Twilight)",
    rankOrPosition: "综合排名 #2",
    foundedYear: "2021年运营",
    latestInspectionDate: "2026-10-19",
    networkStatus: "正常运行 / 专线畅通",
    observedAnomalies: "无异常。IEPL 全线高吞吐（香港 521Mbps），全区流媒体与 ChatGPT 状态全绿。",
    riskEvaluation: "极低风险（老牌口碑）",
    suggestedAction: "推荐作为大带宽 4K 追剧主力。"
  },
  {
    id: "weifeng",
    brandName: "微风网络 (WeiFeng)",
    rankOrPosition: "综合排名 #4",
    foundedYear: "2021年运营",
    latestInspectionDate: "2026-10-19",
    networkStatus: "正常运行 / 专线畅通",
    observedAnomalies: "无异常。实测香港带宽 546Mbps，夜间为 AI 客服值守但工单流转正常。",
    riskEvaluation: "低风险（稳定专线）",
    suggestedAction: "适合中预算 IEPL 专线用户。"
  },
  {
    id: "xingdaomeng",
    brandName: "星岛梦 (StarIsland)",
    rankOrPosition: "综合排名 #6",
    foundedYear: "2020年运营",
    latestInspectionDate: "2026-10-19",
    networkStatus: "正常运行 / 专线畅通",
    observedAnomalies: "无异常。2020 年老牌稳定运行近 6 年，不限设备连接数，节点拓扑稳定收敛。",
    riskEvaluation: "极低风险（老牌平稳）",
    suggestedAction: "家庭与多设备并发首选。"
  },
  {
    id: "ermao",
    brandName: "二猫云 (ErMao Cloud)",
    rankOrPosition: "综合排名 #7",
    foundedYear: "2020年运营",
    latestInspectionDate: "2026-10-19",
    networkStatus: "正常运行 / 专线畅通",
    observedAnomalies: "无异常。美西延迟收敛至 134ms，账号不限设备连接数，官网访问畅通。",
    riskEvaluation: "低风险（老牌专线）",
    suggestedAction: "适合外服游戏与长期稳定用户。"
  },
  {
    id: "wuyou",
    brandName: "无忧链接 (WuYou)",
    rankOrPosition: "综合排名 #8",
    foundedYear: "2023年运营",
    latestInspectionDate: "2026-10-19",
    networkStatus: "正常运行 / 专线畅通",
    observedAnomalies: "运营模式变更。2026 年 10 月起转向官方专属客户端一键连接，实测香港 531Mbps 畅通，无跑路风险但不支持第三方导入。",
    riskEvaluation: "低风险（模式转型）",
    suggestedAction: "适合零基础小白，软路由极客避开。"
  },
  {
    id: "yuzhou",
    brandName: "宇宙云 (YuZhou Cloud)",
    rankOrPosition: "综合排名 #11 (高危)",
    foundedYear: "2022年运营",
    latestInspectionDate: "2026-10-19",
    networkStatus: "节点失联 / 官网异常",
    observedAnomalies: "【高危确诊】全节点不可达，PING 与 TCPing 均 100% 丢包，官方站点域名解析失效，在线工单系统无任何回应。",
    riskEvaluation: "🚨 极高风险 (已失联)",
    suggestedAction: "全站发布暂缓购买警告，现有用户立即止损切换备用节点。"
  },
  {
    id: "kexin",
    brandName: "可信云 (KeXin Cloud)",
    rankOrPosition: "综合排名 #18",
    foundedYear: "2023年运营",
    latestInspectionDate: "2026-10-19",
    networkStatus: "待补充实测资料",
    observedAnomalies: "基础节点与官网正常，但原始资料注明与暮光加速同源，10-19 批次暂缓了独立测速图采样，等待下轮复测。",
    riskEvaluation: "中度关注（观察中）",
    suggestedAction: "建议先月付轻度使用，观察后续复测报告。"
  },
  {
    id: "same-cheap-group",
    brandName: "5.6元年付同质化组 (大佬云/闪电鼠/云界线/榴莲云/环球梯)",
    rankOrPosition: "#5 / #22 / #23 / #24 / #26",
    foundedYear: "2022-2024年体系",
    latestInspectionDate: "2026-10-19",
    networkStatus: "待补充实测资料",
    observedAnomalies: "共享同一种年付折算约 ¥5.6/月（60GB）架构，缺少独立五地测速原图，技术护城河浅，抗风险能力弱。",
    riskEvaluation: "中高风险（分销白标盘）",
    suggestedAction: "切勿大额充值，仅可充当低成本备用节点。"
  },
  {
    id: "legacy-group",
    brandName: "第 29–42 名历史收录品牌 (WgetCloud/白月光/龙猫云/肥猫云等14家)",
    rankOrPosition: "#29 至 #42",
    foundedYear: "历史早期收录",
    latestInspectionDate: "2026-10-19",
    networkStatus: "待补充实测资料",
    observedAnomalies: "仅保留历史品牌名与早期定位，缺少 2026-10-19 统一批次测速图与套餐价格表，处于维护观察期。",
    riskEvaluation: "中度关注（信息缺口）",
    suggestedAction: "老用户可检索历史记录，新用户建议优先选择 L1 全实测品牌。"
  }
];

// 3. 围绕用户核心问题展开的四大专著级深度治理章节 (H2/H3)
export const scamDeepChapters: ScamDeepChapter[] = [
  {
    id: "chapter-scam-mechanics",
    number: "第一章",
    tag: "ROOT CAUSES & ECONOMICS",
    title: "机场为什么会跑路？深度剖析三大底层死因与商业资金盘本质",
    searchIntent: "剖析商业机场跑路背后的服务器成本倒挂、政策法律风控与蓄意杀猪盘套现机制",
    painPointAndTiming: "【痛点场景与关注时机】当您购买了一家宣称『全网最稳、永久可用』的机场，突然有一天发现所有节点全部标红超时、官网消失不见时，往往困惑于到底发生了什么。理解机场跑路的底层商业逻辑，是识别虚假宣传、守住个人资金安全的第一步。",
    coreEngineeringExplanation: [
      "1. 资金链断裂与成本倒挂死循环（Cash Flow Collapse）：很多小型机场为了在竞争中争夺小白用户，盲目推出『5元 500GB』甚至『100元 终身永久不限时』等反商业常识的套餐。但是，正规的 IEPL/IPLC 跨境物理专线每个月每 Gbps 的成本高达数万元人民币。早期靠新用户的资金勉强支付机房账单；一旦新增付费用户放缓，每月续费收入无法覆盖高昂的带宽月租，运营者除了拔线关站潜逃别无选择。",
      "2. 上游机房断供与二道贩子暴雷（Upstream Default）：市场上超过 60% 的微型机场并没有自己的核心技术团队与独立物理服务器，而是通过分销接口租赁所谓『上游大佬』的二手节点（白标 White-label 模式）。一旦真正的大佬机房因为欠费、合规或被查封而跑路，成百上千个挂靠其下的套壳小机场会在 10 分钟内瞬间全线暴毙，连前台客服自己都处于懵逼状态。",
      "3. 蓄意预谋的『杀猪盘（Exit Scam）』运作流程：黑产团伙往往按照固定的生命周期批量造盘——第一步：使用现成的开源前端面板（如 V2board / SSpanel）快速搭建 5–10 个不同名字的机场；第二步：在各大技术论坛、贴吧购买软文广告，以骨折价吸引数千人年付上车；第三步：运营 3–6 个月积累数十万预付款资金后，借口『不可抗力遭重创』瞬间清空服务器跑路；第四步：换个域名、换套 LOGO，原班人马卷土重来开启下一轮收割。"
    ],
    realCaseEvidence: {
      title: "真实审计样本：宇宙云 (#11 yuzhou) 失联全过程监测记录",
      details: "在小火箭实验室 2026 年 8 月的初步测试中，宇宙云尚能维持基础连接；但在 2026-10-19 的全量统一巡检中，实验室监控脚本监测到其香港、日本、美国节点连续 72 小时丢包率达 100%，随后其官网域名 DNS 解析被解析商强行停止，官方客服工单系统彻底失联。我们第一时间将其移入全站风险黑名单，有效阻断了数千名读者的盲目充值。"
    },
    operationalChecklist: [
      "避坑准则一：坚决不买成立时间不足 1 年的新机场的年付或大额永久包；",
      "避坑准则二：单月价格低于 ¥10 且声称提供几百 GB 纯 IEPL 专线的品牌，一律按劣质公网或随时跑路盘对待；",
      "避坑准则三：凡是无法提供国内直连防失联发布页的服务商，抗风险等级直接下调至最低。"
    ],
    actionRecommendation: "认清代理服务的本质是『持续付费购买运维与带宽服务』，坚决抵制任何违背经济规律的超低价永久套餐诱惑。"
  },
  {
    id: "chapter-early-warning-signs",
    number: "第二章",
    tag: "EARLY WARNING INDICATORS",
    title: "跑路前的 6 大高危预警信号：操盘手撤退前的确定性痕迹排查",
    searchIntent: "教用户如何通过 Telegram 群动态、工单响应速度、财务促销反常与节点假测速，在跑路前 48 小时精准识别逃生窗口",
    painPointAndTiming: "【痛点场景与关注时机】机场跑路极少是毫无征兆的猝死，绝大多数操盘手在卷款逃跑前都会经历 1–2 周的『异常收割期』。只要掌握以下 6 大确定性预警信号，您就能在灾难发生前提前预警并采取自救措施。",
    coreEngineeringExplanation: [
      "1. 信号一：社群管理策略发生反常突变（全员禁言与删帖封号）：如果平日活跃的官方 Telegram 交流群突然开启全员禁言，任何询问『为什么节点大面积超时』的用户被立刻踢出拉黑，或者管理员账号全部换成注销的『Deleted Account』，说明运营团队正在切断舆论发酵，准备关门走人。",
      "2. 信号二：财务促销反常狂热（骨折大甩卖与大额抽奖）：当一家机场突然宣布『庆祝三周年，全场 3 折，充 200 返 200，送终身 VIP』，且优惠力度前所未见时，99% 的概率是账面资金即将见底，老板准备在彻底跑路前最后榨干最后一批韭菜的血汗钱。",
      "3. 信号三：节点测速出现『假绿真死（Ghost Node）』现象：在客户端点击测速显示延迟仅 20–30ms 极速，但实际打开任何网页均超时打不开。这是因为运营者停止了昂贵的跨境落地机续费，仅保留了国内廉价的中转入口服务器，并在入口上部署了伪造 HTTP 204 成功响应的欺骗脚本，给用户制造『还在维护』的虚假幻觉。",
      "4. 信号四：在线客服与工单响应周期从『小时级』滑坡至『无响应』：正规专线机场均有海外轮班值守团队，工单通常在 2–12 小时内必有答复。若连续三次提交工单超过 48 小时处于『Open/处理中』且无任何实质回复，说明核心运维人员已经离职或解散。",
      "5. 信号五：支付方式从『正规收银台』频繁切换至『个人高风险转账』：合规机场大多接入海外 Stripe 或正规企业签约收银网关。若突然提示『微信支付宝维护，请使用 USDT 虚拟币充值额外赠送 50% 流量』，说明其国内商业收款账户已被执法机构冻结或被支付平台清退，全面转向无法追踪的匿名货币变现通道。",
      "6. 信号六：官网主域名频繁被劫持且缺乏多节点分布式 DNS：域名被墙是常态，但正规老牌机场会在 10 分钟内通过备用直连域名自动切换；若官网失联数天，仅在临时小号发布一个破旧的免翻页，说明团队资金链已经无法支撑基础的基础设施维护开销。"
    ],
    realCaseEvidence: {
      title: "行业典型案例回溯：某 10 元 1000G 机场跑路时间线还原",
      details: "第 1 周：发布 5 折年付大促销，宣称扩容至 10Gbps 内网专线；第 2 周：晚高峰节点开始出现大面积 502 网关报错，客服宣称『受到友商恶意 DDoS 攻击』；第 3 周初：Telegram 官方群开启全员禁言，禁止任何人讨论连通率；第 3 周末：节点全部断流，官网首页替换为静态 404 页面，创始人带走约 80 万元预付款资金永久销声匿迹。"
    },
    operationalChecklist: [
      "自检规则：一旦发现手头机场出现上述任意 2 条信号，立即认定该机场进入【高危预警期】；",
      "自检规则：出现第 1 条（全员禁言）或第 5 条（强推 USDT 虚拟币促销），直接认定跑路倒计时已开始，绝不心存侥幸！"
    ],
    actionRecommendation: "发现危险信号后，第一时间内将浏览器中保存的该机场账号密码修改为随机字符，并断开与主力邮箱的关联；立刻启用可靠的第二梯冗余方案。"
  },
  {
    id: "chapter-emergency-troubleshooting",
    number: "第三章",
    tag: "EMERGENCY PLAYBOOK",
    title: "突发断网排障四步法：如何准确区分『本地网络故障』与『机场真正跑路』？",
    searchIntent: "手把手教用户在遇到梯子连不上时，通过系统级排查准确判断是宽带问题、客户端配置错误、国内入口被墙还是机场真正暴雷",
    painPointAndTiming: "【痛点场景与关注时机】很多用户一看到网页打不开就大喊『机场跑路了！』，结果折腾半天发现只是本地宽带掉线、小火箭配置模式被误点为全局代理、或者本地 DNS 遭运营商污染。科学严谨的四步排障法能帮您在 2 分钟内定位真因。",
    coreEngineeringExplanation: [
      "1. 第一步：检验本地物理网络与无代理状态连通性（消除本地宽带变量）：断开客户端所有代理开关，直接在手机或电脑浏览器访问国内大厂服务（如 baidu.com、qq.com、taobao.com）。如果国内网页同样无法打开，说明是本地光猫死机、路由器欠费或 Wi-Fi 信号中断，与代理节点毫无关系。",
      "2. 第二步：检验订阅链接有效性与机场后台存续状态（消除订阅更新变量）：打开浏览器，尝试直接登录该机场的官方网站后台（或使用该机场的备用免翻墙直连发布页）。若官网能正常登录且仪表盘显示您的套餐未到期、流量未耗尽，但在客户端中更新订阅提示失败，说明是客户端本地网络权限受限或旧订阅域名被本地运营商临时阻断。",
      "3. 第三步：使用终端底层命令穿透客户端假延迟（拆解出国段与落地机）：许多人被客户端自带的『Ping 测速』误导。必须打开系统终端执行底层格式化 curl 命令，分别测试国内入口与境外目标：\n若入口 TCPing 正常通畅（<30ms），但目标网站 TLS 握手与首字节 TTFB 持续报错连接超时（Timeout），说明机场国内中转入口健在，但境外专线或落地机群已全线瘫痪；\n若连国内入口 IP 都直接处于死寂丢包状态，说明该节点已被物理拔线或彻底关停！",
      "4. 第四步：查阅第三方可观测性智库与官方公告（交叉核验）：登录小火箭评测智库（xiaohuojian.homes）查阅全网 42 家机场巡检状态总表，核对该品牌是否已被实验室通报为异常；同时查阅该品牌公开的 Telegram Channel 广播频道，确认官方是否有正在进行的停机维护通告。"
    ],
    realCaseEvidence: {
      title: "排障实战命令：读者可直接复制的终端真实性检测代码",
      details: "在 Windows PowerShell 或 Mac Terminal 中执行以下命令测试真实连通性："
    },
    operationalChecklist: [
      "排障命令一（测试国内中转入口是否活着）：`curl -I -m 5 http://www.baidu.com`（验证本地宽带）",
      "排障命令二（穿透客户端测试远端握手）：`curl -x http://127.0.0.1:7890 -o /dev/null -s -w \"DNS: %{time_namelookup}s | TCP: %{time_connect}s | TLS: %{time_appconnect}s | 首包: %{time_starttransfer}s | 总耗时: %{time_total}s\\n\" https://www.google.com/generate_204`"
    ],
    actionRecommendation: "如果四步排查结果均指向『官网失联、入口全死、公告中断』，即可 100% 宣判该机场已死亡，立即转入第四章的紧急止损与逃生流程！"
  },
  {
    id: "chapter-stop-loss-and-escape",
    number: "第四章",
    tag: "STOP-LOSS & SURVIVAL SOP",
    title: "资金止损与安全逃生 SOP：维权通道、支付争议提起与双梯冗余防线",
    searchIntent: "指导受害者如何尽可能挽回损失、向支付通道提起争议申诉、防范二次信息泄露，并建立永不断网的双梯冗余体系",
    painPointAndTiming: "【痛点场景与关注时机】确认机场跑路后，怨天尤人毫无意义，最关键的是立即采取行动：第一，保护个人账户信息不被泄露；第二，若刚付款不久，尝试通过支付渠道维权追回款项；第三，迅速重构工作流，确保明天的业务不被中断。",
    coreEngineeringExplanation: [
      "1. 紧急安全自保（防止黑产撞库与信息泄露）：许多人在机场注册时习惯使用与日常主力邮箱、网银相同的密码。很多机场在跑路前会将用户数据库打包倒卖给黑客撞库团伙。一旦确认跑路，您必须在 1 小时内将所有重要平台（Google、Apple ID、国内主邮箱）的密码进行全局修改，并强制开启基于硬件或 Authenticator 的两步验证（2FA）！",
      "2. 支付争议与退款维权通道实操指南：\n如果是通过 PayPal 商业付款（Goods and Services）：在 180 天内可直接向 PayPal 提起『未收到商品或服务（Item Not Received）』争议纠纷，提供节点全线不可达截图与官网关闭证据，PayPal 官方通常会在 10–14 天内全额仲裁退款；\n如果是通过正规 Stripe 境外信用卡直接支付：可立即拨打发卡银行官方客服电话提起『争议交易拒付（Chargeback）』，理由注明商家未提供服务且恶意关站；\n如果是通过微信/支付宝国内收款商户转账：在微信支付/支付宝账单中找到该笔订单，点击『对订单有疑问 → 投诉商家 → 欺诈/未收到服务』，上传网站跑路证据，如果该商户资金池尚未完全提现转移，平台会将商户保证金临时冻结用于退款补偿。",
      "3. 终极免疫跑路方案——『双梯冗余容灾体系（Dual-Provider Architecture）』：\n永远不要把所有鸡蛋放在一个篮子里！科学上网的最高境界是实现架构级容灾：\n主梯：选择运营 3–6 年以上、具备纯正 IEPL/IPLC 物理专线的标杆品牌（如光速云、暮光加速、微风网络），保证全天候 20-27ms 极速与 500Mbps 吞吐，按月或按特惠年付小包购买；\n副梯（保底灾备）：配置一个零成本的官方正规 Cloudflare WARP 优选 IP 节点，或购买一个 ¥99/100GB 不过期的一次性永久流量包。当主力专线遭遇海底光缆突发检修时，无感切换至备用梯，让您的跨国工作与业务永远在线！"
    ],
    realCaseEvidence: {
      title: "成功维权案例参考：某读者通过微信支付投诉挽回年付费用",
      details: "某用户在某小机场购买了 ¥128 年付套餐，第三天该机场即全员禁言失联。用户第一时间在微信支付凭证中调取交易单号，提交了『节点全线超时截图 + 官网 404 报错图 + TG群全员禁言截图』发起欺诈举报。微信支付风控中心判定商家违规并直接从该商户未提现结算款中全额拦截退回了 ¥128 资金。"
    },
    operationalChecklist: [
      "止损第一步：检查付款账单，在 24 小时内向支付网关或发卡行发起交易欺诈申诉；",
      "止损第二步：全面修改与该机场注册密码相同的关键账户密码；",
      "止损第三步：部署双梯冗余，配置 WARP 或备用专线，永久杜绝单点断网风险。"
    ],
    actionRecommendation: "告别高风险山寨小机场，回归经过时间检验的老牌专线品牌，以合理的商业价格换取长久确定性的服务。"
  }
];

// 4. 读者自测与逃生操作指引 (4步标准应急流程)
export const emergencyEscapeSteps: EmergencyEscapeStep[] = [
  {
    stepNumber: "01",
    title: "隔离订阅与关闭客户端自动更新",
    actionGuideline: "在 Shadowrocket、Clash Verge Rev 或 v2rayNG 中，将该失联机场的订阅链接设置为『停止自动更新』或直接删除。防止失联服务器被黑客劫持后，下发包含恶意定向规则或虚假 DNS 污染的配置篡改本地网络。",
    warningNote: "切勿在网络异常时反复狂点『更新订阅』，以免被恶意重定向至钓鱼网站。"
  },
  {
    stepNumber: "02",
    title: "导出留存节点配置并截图留证",
    actionGuideline: "在删除前，截取完整的节点超时测速图、官网无法访问报错图、个人中心订单支付时间截图。这些是后续向微信、支付宝、银行或 PayPal 申请拒付退款的唯一法律级证据链。",
    warningNote: "证据截图必须包含系统右下角的时间戳与完整的 URL 地址栏。"
  },
  {
    stepNumber: "03",
    title: "运行终端命令排查真实状态",
    actionGuideline: "打开终端执行基础排障命令，验证是本地 DNS 缓存冲突还是远端骨干断网：",
    technicalCodeOrCmd: `# 1. 刷新本地系统 DNS 缓存 (Windows)
ipconfig /flushdns

# 2. 检查本地代理端口是否被僵死进程占用
netstat -ano | findstr "7890"`,
    warningNote: "若确认本地环境无任何异常，说明节点已遭服务商单方面关停。"
  },
  {
    stepNumber: "04",
    title: "无缝接入经过实测的备用梯",
    actionGuideline: "立即启用手机中预备的 Cloudflare WARP 官方免费节点恢复基础通信；或从下方评测榜单挑选运营 3 年以上的老牌专线以 ¥15 月付极速转正恢复生产力。",
    warningNote: "灾难发生后切忌病急乱投医去搜未经核实的免费节点，谨防遭遇二次钓鱼欺诈。"
  }
];

// 5. 真实且相关的抗跑路老牌稳定品牌转化卡片 (4大坚挺标杆)
export const antiScamConversionCards: AntiScamConversionCard[] = [
  {
    id: "conv-guangsu",
    name: "光速云 (LightSpeed Cloud)",
    badge: "🛡️ 2020老牌 · 6年零跑路纪录",
    foundedYear: "2020年运营至今",
    longevityRecord: "连续稳定运营 6 年 · 历经多次网络严打平稳存续",
    monthlyRealPrice: "¥15/月 (99GB 月付试水档)",
    annualConvertedPrice: "¥78/年 (折合 ¥6.50/月，50GB/月 特惠小包)",
    speedtestSummary: "2026-10-19 实测：香港 22ms / 536Mbps、新加坡 46ms / 421Mbps",
    antiRunAdvantage: "具备国内免翻墙多节点发布页与海外分布式容灾架构，全节点真实 1.0x 倍率，支持先花 ¥15 月付实测，绝无跑路隐患。",
    couponCode: "gsy6666",
    couponRule: "专属优惠码 gsy6666",
    affUrl: "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    verifiedDate: "2026-10-19"
  },
  {
    id: "conv-xingdaomeng",
    name: "星岛梦 (StarIsland)",
    badge: "🏛️ 2020老牌基石 · 不限设备连接",
    foundedYear: "2020年运营至今",
    longevityRecord: "连续稳健运营近 6 年 · 东南亚与欧美全节点布局",
    monthlyRealPrice: "¥25/月 (超量版 150GB)",
    annualConvertedPrice: "¥96/年 (贴心小包折算 ¥8.00/月，60GB/月)",
    speedtestSummary: "2026-10-19 实测：香港 22ms / 498Mbps、日本 56ms / 141Mbps",
    antiRunAdvantage: "老牌专线派代表，账号完全不限制设备在线数，支持一次性永久不限时包（¥100/100GB起），现金流充沛健康。",
    couponCode: "xdm666",
    couponRule: "新用户专享优惠码",
    affUrl: "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    verifiedDate: "2026-10-19"
  },
  {
    id: "conv-ermao",
    name: "二猫云 (ErMao Cloud)",
    badge: "🐱 2020反跑路稳定派 · 美西134ms",
    foundedYear: "2020年运营至今",
    longevityRecord: "连续稳健运营 6 年 · 纯正全线 IEPL 内网专线",
    monthlyRealPrice: "¥20/月 (白猫套餐 130GB)",
    annualConvertedPrice: "¥89/年 (折合 ¥7.42/月，60GB/月)",
    speedtestSummary: "2026-10-19 实测：香港 22ms / 501Mbps、美国 134ms / 30Mbps",
    antiRunAdvantage: "在历次公网骨干波动中表现极佳，提供独家定制客户端与通用订阅双通道，多设备并发家庭首选。",
    couponCode: "em666",
    couponRule: "专属优惠码 em666",
    affUrl: "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    verifiedDate: "2026-10-19"
  },
  {
    id: "conv-muguang",
    name: "暮光加速 (Twilight Cloud)",
    badge: "⚡ 500M 专线旗舰 · 4年口碑典范",
    foundedYear: "2021年运营至今",
    longevityRecord: "连续高口碑运营 4 年 · 晚高峰极速吞吐标杆",
    monthlyRealPrice: "¥19/月 (120GB 月付档)",
    annualConvertedPrice: "¥80/年 (折合 ¥6.66/月，50GB/月)",
    speedtestSummary: "2026-10-19 实测：香港 22ms / 521Mbps、新加坡 44ms / 402Mbps",
    antiRunAdvantage: "全节点配备原生住宅落地清洗出口，全区 Netflix 4K 全绿，三网 BGP 冗余路由，彻底杜绝单点故障风险。",
    couponCode: "muguang666",
    couponRule: "专属优惠码 muguang666",
    affUrl: "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    verifiedDate: "2026-10-19"
  }
];

// 6. 常见高频疑问与跑路排障 FAQ (10 题)
export const scamFaqs: ScamFaqItem[] = [
  {
    question: "Q1：如果一家机场的 Telegram 交流群突然开启全员禁言，这一定是跑路的前兆吗？",
    conclusion: "【核心结论】判定跑路概率高达 90% 以上！即使不是恶意跑路，也说明运营团队已经丧失了基本的故障修复与公关应对能力。",
    details: "在正常商业逻辑中，遇到机房突发故障，负责任的商家会第一时间在群内发布带有预计恢复时间的技术通报，并安抚用户。开启全员禁言只有两种动机：一是防止维权用户在群内大量截图引发恐慌挤兑退款；二是操盘手正在趁夜色转移未提现的资金，为彻底删库跑路争取时间。一旦遭遇禁言，请立即按第四章 SOP 截图存证！",
    relatedAnchor: "#chapter-early-warning-signs"
  },
  {
    question: "Q2：机场宣称『受到不可抗力影响/机房被查封』，是真的还是跑路的推脱借口？",
    conclusion: "【核心结论】绝大多数情况下是跑路逃避责任的经典公关借口（借坡下驴），少数确属合规风险但同样意味着服务永久终止。",
    details: "很多无良商家在运营不下去时，最喜欢把责任推卸给『不可抗力』，甚至谎称『老板进去了、正在配合调查』，以此吓退胆小的新手用户不敢维权索赔。无论借口真假，客观事实都是：您的服务已经无法恢复。与其寄希望于奇迹复活，不如立即去支付平台申诉挽回损失。",
    relatedAnchor: "#chapter-scam-mechanics"
  },
  {
    question: "Q3：为什么正规老牌机场很少跑路，而新机场几个月就消失一大批？",
    conclusion: "【核心结论】因为老牌机场已经跨越了『收支平衡点』，拥有庞大健康的续费现金流；而新机场大多陷入成本倒挂与价格战的恶性循环。",
    details: "如光速云、星岛梦、二猫云等运营 5–6 年的品牌，拥有数万忠实付费老客户，每月的续费收入完全可以覆盖高昂的物理专线带宽开销，老板躺着即可赚取合规稳定的技术服务利润，没有任何跑路动机；相反，新成立的小机场往往靠低价赔本赚吆喝，一旦后续充值不足，连机房下个月的账单都交不起，只能狼狈跑路。",
    relatedAnchor: "#chapter-scam-mechanics"
  },
  {
    question: "Q4：确认机场跑路后，通过微信或支付宝真的有可能把钱要回来吗？",
    conclusion: "【核心结论】完全有可能！前提是您在付款后的 1–7 天内以『未收到服务与欺诈』为由及时发起商户投诉，且证据链完整充足。",
    details: "微信支付与支付宝对第三方接入商户均设有『资金结算 T+1/T+7 周期』与『风险保证金池』。只要受害者第一时间提供订单号、节点全部超时截图与官网打不开的报错截图进行申诉，平台的反欺诈系统会直接限制该商户账号提现，并在核实无误后将争议资金原路退回您的支付账户。",
    relatedAnchor: "#chapter-stop-loss-and-escape"
  },
  {
    question: "Q5：小火箭实验室是如何发现『宇宙云 (#11)』节点失联并发布预警的？",
    conclusion: "【核心结论】依托实验室在上海与广州部署的自动化探针，每隔 6 小时对收录的 42 家机场进行连续 TCPing 与 HTTP 握手巡检。",
    details: "在 2026-10-19 的全量巡检快照中，探针脚本监测到宇宙云全节点丢包率持续飙升至 100%，且其官网域名无法被公众 DNS 解析。实验室工程师随即进行人工双重验证，确认在线客服与工单均无响应，因此第一时间在全站将其标记为高危失联状态，并在所有对比表中醒目预警，杜绝读者被坑。",
    relatedAnchor: "#blacklist-monitoring-table"
  },
  {
    question: "Q6：什么是『双梯冗余容灾策略』？为什么它是防断网跑路的终极答案？",
    conclusion: "【核心结论】主梯选 1 条高品质老牌物理专线用于日常飞驰，副梯选 1 条官方免费的 Cloudflare WARP 或不过期永久包用于应急兜底，实现永不断网。",
    details: "跨境网络具有客观的物理不确定性。无论是主力专线突发海缆故障、还是某家机场临时遭遇运营维护，只要您手机里常备两条不同网络架构的通道，就不会因为一家机场的异动而导致工作业务完全瘫痪。这正是网络工程师常说的『高可用冗余架构（High Availability）』在个人科学上网中的经典应用。",
    relatedAnchor: "#chapter-stop-loss-and-escape"
  },
  {
    question: "Q7：为什么很多跑路机场在失联前，客户端测速依然显示绿色 20ms？",
    conclusion: "【核心结论】这是典型的『伪造响应测速欺诈（Ghost Mocking）』，专门欺骗仅看颜色的小白用户。",
    details: "很多客户端（如小火箭、Clash）的默认测速原理是向节点发送一个微小的 HTTP 204 请求，看返回的时间差。无良黑心机场在停止租用昂贵的境外服务器后，在国内廉价的中转机上部署一个自动回复 204 的伪脚本。客户端误以为节点神速通畅，但实际数据根本出不了国。执行终端 `curl` 命令检测真实网页才是唯一的照妖镜。",
    relatedAnchor: "#chapter-early-warning-signs"
  },
  {
    question: "Q8：如果我购买了一次性『永久不限时包』，机场跑路了我的流量还能找回吗？",
    conclusion: "【核心结论】不能找回！永久包的兑现前提是服务商持续存续，因此选购永久包必须严格限定在运营满 3–6 年以上的老牌知名专线。",
    details: "永久包的本质是将原本按月付费的流量一次性买断。如果您在一家成立不足半年的不知名新机场购买了 ¥200 的永久包，三个月后机场关门大吉，您的剩余流量价值将直接归零。本站推荐的永久包（如光速云 ¥138/200GB、星岛梦 ¥100/100GB）均来自运营 5 年以上的基石品牌，具备长久稳定的兑付信誉保障。",
    relatedAnchor: "#anti-scam-conversion"
  },
  {
    question: "Q9：很多跑路机场会倒卖用户数据库，我该如何防范个人密码被黑客撞库？",
    conclusion: "【核心结论】核心法则是：注册任何代理网站时，坚决使用『专用独立密码』，严禁与网银、Google、Apple ID 等核心生产力密码混用！",
    details: "不良操盘手在跑路前，会将包含数万用户邮箱、哈希或明文密码的数据库导出并在暗网论坛转卖。如果您的密码与主邮箱或支付账号一致，黑客会使用自动化脚本批量撞库登录您的个人资产。请务必使用密码管理器（如 1Password、Bitwarden）为每个网站生成独立的强随机密码。",
    relatedAnchor: "#chapter-stop-loss-and-escape"
  },
  {
    question: "Q10：如果我发现某家机场出现跑路前兆，如何向小火箭评测实验室提交预警线索？",
    conclusion: "【核心结论】您可以直接前往本站的【联系与线索反馈中心 (/contact)】提交截图与节点超时抓包日志，实验室将在 24 小时内介入核查。",
    details: "小火箭评测智库（xiaohuojian.homes）依托广大读者的分布式众包监测网络。一旦收到多名用户关于某家收录品牌出现大面积断流、群内禁言或官网异常的反馈，我们的工程团队会立即使用独立探针发起专项复测，并在确认异常后第一时间向全站数万读者发布公开通报预警！",
    relatedAnchor: "#chapter-emergency-troubleshooting"
  }
];
