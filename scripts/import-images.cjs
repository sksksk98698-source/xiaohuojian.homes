const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\Pro User\\Desktop\\机场品牌信息';
const targetImgDir = path.join(__dirname, '..', 'public', 'images', 'reviews');

if (!fs.existsSync(targetImgDir)) {
  fs.mkdirSync(targetImgDir, { recursive: true });
}

// 1. Copy and normalize images
const imageMap = [
  { src: path.join(baseDir, 'extracted', '光速云-节点测速实测.png'), dest: 'guangsu-speedtest-2026.png', brand: '光速云' },
  { src: path.join(baseDir, 'extracted', '幕光加速-节点测速实测.png'), dest: 'muguang-speedtest-2026.png', brand: '暮光加速' },
  { src: path.join(baseDir, 'extracted', '飞猫云-节点测速实测.png'), dest: 'feimao-speedtest-2026.png', brand: '飞猫云' },
  { src: path.join(baseDir, 'extracted', '微风-节点测速实测.png'), dest: 'weifeng-speedtest-2026.png', brand: '微风网络' },
  { src: path.join(baseDir, 'extracted', '星岛梦-节点测速实测.png'), dest: 'xingdaomeng-speedtest-2026.png', brand: '星岛梦' },
  { src: path.join(baseDir, 'extracted', '二猫云-节点测速实测.png'), dest: 'ermao-speedtest-2026.png', brand: '二猫云' },
  { src: path.join(baseDir, 'zip_extracted', '无忧链接.jpg'), dest: 'wuyou-speedtest-2026.jpg', brand: '无忧链接' },
  { src: path.join(baseDir, 'zip_extracted', '无忧链接2.jpg'), dest: 'wuyou-unlock-2026.jpg', brand: '无忧链接' },
  { src: path.join(baseDir, 'extracted', '唯兔云-节点测速实测.png'), dest: 'weitu-speedtest-2026.png', brand: '唯兔云' },
  { src: path.join(baseDir, 'extracted', '宇宙云-节点测速实测.png'), dest: 'yuzhou-speedtest-2026.png', brand: '宇宙云' },
  { src: path.join(baseDir, 'extracted', 'U1S1-节点测速实测.png'), dest: 'u1s1-speedtest-2026.png', brand: 'U1S1' },
  { src: path.join(baseDir, 'extracted', '灵猫网络-节点测速实测.png'), dest: 'lingmao-speedtest-2026.png', brand: '灵猫网络' },
  { src: path.join(baseDir, 'extracted', '极连云-节点测速实测.png'), dest: 'jilian-speedtest-2026.png', brand: '极连云' },
  { src: path.join(baseDir, 'extracted', '光年梯-节点测速实测.png'), dest: 'guangnian-speedtest-2026.png', brand: '光年梯' },
  { src: path.join(baseDir, 'extracted', '一翻云-节点测速实测.png'), dest: 'yifan-speedtest-2026.png', brand: '一翻云' },
  { src: path.join(baseDir, 'extracted', 'SOGO云-节点测速实测.png'), dest: 'sogo-speedtest-2026.png', brand: 'SOGO云' },
  { src: path.join(baseDir, 'extracted', '可信云-节点测速实测.png'), dest: 'kexin-speedtest-2026.png', brand: '可信云' },
  { src: path.join(baseDir, 'extracted', '速界-节点测速实测.png'), dest: 'sujie-speedtest-2026.png', brand: '速界' },
  { src: path.join(baseDir, 'extracted', '全球云-节点测速实测.png'), dest: 'quanqiu-speedtest-2026.png', brand: '全球云' },
  { src: path.join(baseDir, 'zip_extracted', '快狸-节点测速实测.png'), dest: 'kaili-speedtest-2026.png', brand: '快狸' },
];

// Copy unlock test images for guangsu
const guangsuUnlockDir = path.join(baseDir, '光速云测试图解锁图');
if (fs.existsSync(guangsuUnlockDir)) {
  const unlockFiles = fs.readdirSync(guangsuUnlockDir);
  unlockFiles.forEach((file, idx) => {
    const srcFile = path.join(guangsuUnlockDir, file);
    const destName = `guangsu-unlock-matrix-0${idx + 1}.jpg`;
    imageMap.push({ src: srcFile, dest: destName, brand: '光速云' });
  });
}

let copiedCount = 0;
for (const item of imageMap) {
  if (fs.existsSync(item.src)) {
    fs.copyFileSync(item.src, path.join(targetImgDir, item.dest));
    copiedCount++;
  } else {
    console.warn('Image not found:', item.src);
  }
}
console.log(`Successfully copied ${copiedCount} review and unlock images.`);
