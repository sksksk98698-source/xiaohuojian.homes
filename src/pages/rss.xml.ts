import rss from '@astrojs/rss';
import { airports } from '../data/airports';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const siteUrl = context.site ?? 'https://xiaohuojian.homes';

  return rss({
    title: '小火箭评测智库 · 42家机场品牌与节点可观测性数据库',
    description: '客观记录 42 家机场真实参数、晚高峰带宽压测、流媒体与 ChatGPT/Claude 原生解锁测试报告。',
    site: siteUrl,
    items: airports.map((airport) => ({
      title: `${airport.name} 深度测评与套餐参数 (排名 #${airport.rank})`,
      pubDate: new Date('2026-10-19'),
      description: airport.summary,
      link: `/airports/${airport.id}/`,
    })),
    customData: `<language>zh-cn</language>`,
  });
}
