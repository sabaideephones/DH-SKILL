// usage: node render.js start end out.mp4   |  node render.js --frames t1,t2,... prefix
const puppeteer = require('puppeteer-core');
const { spawn } = require('child_process');
const path = require('path');
(async () => {
  const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--allow-file-access-from-files', '--disable-gpu'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1920 });
  await page.goto('file://' + path.resolve('scene.html'), { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  if (process.argv[2] === '--frames') {
    const ts = process.argv[3].split(',').map(Number);
    for (const t of ts) { await page.evaluate(t => render(t), t); await page.screenshot({ path: `${process.argv[4]}_${t}.jpg`, type: 'jpeg', quality: 85 }); }
    await browser.close(); return;
  }
  const a = parseFloat(process.argv[2]), b = parseFloat(process.argv[3]), out = process.argv[4];
  const tmp = out.replace(/\.mp4$/, '.tmp.mp4');
  const ff = spawn('ffmpeg', ['-y', '-v', 'error', '-f', 'image2pipe', '-framerate', '30', '-c:v', 'mjpeg', '-i', '-', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '19', '-pix_fmt', 'yuv420p', '-r', '30', tmp], { stdio: ['pipe', 'inherit', 'inherit'] });
  const n = Math.round((b - a) * 30);
  for (let i = 0; i < n; i++) {
    const t = a + i / 30;
    await page.evaluate(t => render(t), t);
    const buf = await page.screenshot({ type: 'jpeg', quality: 92 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', c => { if (c === 0) require('fs').renameSync(tmp, out); r(); }));
  await browser.close();
})();
