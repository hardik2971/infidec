/**
 * Renders the blog cover illustrations (1200x675 WebP) from an HTML template:
 * soft light-blue backdrop, real technology logos (simple-icons), the site's 3D icons
 * and the title in Bricolage Grotesque. Original artwork, no stock imagery.
 *
 *   npm run covers            (needs Google Chrome installed; set CHROME_PATH if it is elsewhere)
 *
 * Output: public/images/generated/blog/<slug>.webp, then run `npm run images:stock`
 * (or `npm run images`) to register them.
 */
import { mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import { chromium } from "playwright-core";
import * as si from "simple-icons";

const ROOT = process.cwd();
const OUT = join(ROOT, "public/images/generated/blog");
const CHROME = process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe";

const icon3d = (name) =>
  `data:image/webp;base64,${readFileSync(join(ROOT, "public/icons/3d", `${name}.webp`)).toString("base64")}`;
const logo = (key, size = 120) => {
  const i = si[key];
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="#${i.hex}"><path d="${i.path}"/></svg>`;
};

/** slug -> cover definition */
const covers = {
  "kubernetes-cost-optimisation-finops-checklist": {
    kind: "feature",
    logo: "siKubernetes",
    title: "Kubernetes<br>Cost Optimisation",
    icons: ["money", "growth", "cloud"],
  },
  "custom-software-development-cost-2026": {
    kind: "feature",
    title: "Software Development<br>Cost in 2026",
    icons: ["money", "code", "chart"],
  },
  "building-production-rag-systems": {
    kind: "feature",
    logo: "siLangchain",
    title: "Production<br>RAG Systems",
    icons: ["brain", "database", "shield"],
  },
  "design-systems-figma-tokens-to-production-components": {
    kind: "logos",
    items: [
      { logo: "siFigma", label: "Figma" },
      { logo: "siReact", label: "React" },
    ],
    join: "+",
    title: "Design Systems That Scale",
  },
  "practical-guide-legacy-application-modernization": {
    kind: "feature",
    title: "Legacy App<br>Modernization",
    icons: ["refresh", "cloud", "server"],
  },
  "native-vs-flutter-vs-react-native": {
    kind: "logos",
    items: [
      { logo: "siSwift", label: "Native" },
      { logo: "siFlutter", label: "Flutter" },
      { logo: "siReact", label: "React Native" },
    ],
    join: "vs",
  },
};

const badge = (text) => `
  <div class="badge"><svg viewBox="0 0 100 100" width="96" height="96"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
  <stop offset="0" stop-color="#6d28d9"/><stop offset=".6" stop-color="#0a5bff"/><stop offset="1" stop-color="#00c2f0"/></linearGradient></defs>
  <path d="M50 4 90 27v46L50 96 10 73V27Z" fill="url(#g)"/></svg><span>${text}</span></div>`;

function html(c) {
  const body =
    c.kind === "feature"
      ? `<div class="left">${c.logo ? `<div class="logo">${logo(c.logo, 110)}</div>` : ""}<h1>${c.title}</h1></div>
         <div class="cluster">
           <div class="halo"></div>
           <img class="big" src="${icon3d(c.icons[0])}"><img class="s1" src="${icon3d(c.icons[1])}"><img class="s2" src="${icon3d(c.icons[2])}">
         </div>`
      : `${c.title ? `<h2 class="cap">${c.title}</h2>` : ""}<div class="row${c.title ? " low" : ""}">${c.items
          .map((it, i) => `${i ? badge(c.join) : ""}<div class="item">${logo(it.logo, 150)}<p>${it.label}</p></div>`)
          .join("")}</div>`;
  return `<!doctype html><html><head><meta charset="utf-8">
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&display=block" rel="stylesheet">
  <style>
    *{margin:0;box-sizing:border-box}
    body{width:1200px;height:675px;overflow:hidden;font-family:"Bricolage Grotesque",sans-serif;color:#070b2e;
      background:linear-gradient(135deg,#f2f6fd 0%,#e3ecfa 100%);position:relative}
    .blob{position:absolute;background:#fff;opacity:.75;border-radius:46% 54% 60% 40%/50% 45% 55% 50%}
    .b1{width:760px;height:640px;left:-120px;top:120px}
    .b2{width:620px;height:560px;right:-140px;top:-180px;opacity:.55}
    .stage{position:absolute;inset:0;display:flex;align-items:center;justify-content:space-between;padding:0 80px}
    .left{max-width:600px}
    .logo{margin-bottom:28px}
    h1{font-size:64px;font-weight:700;line-height:1.08;letter-spacing:-.02em}
    .cluster{position:relative;width:440px;height:440px}
    .halo{position:absolute;inset:40px;border-radius:50%;background:radial-gradient(circle,#ffffff 0%,rgba(255,255,255,0) 70%)}
    .cluster img{position:absolute;filter:drop-shadow(0 18px 24px rgba(7,11,46,.18))}
    .big{width:300px;height:300px;left:70px;top:70px}
    .s1{width:150px;height:150px;right:0;top:0}
    .s2{width:150px;height:150px;left:0;bottom:10px}
    .row{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:56px}
    .item{display:flex;flex-direction:column;align-items:center;gap:28px}
    .item p{font-size:44px;font-weight:700;letter-spacing:-.01em}
    .cap{position:absolute;top:92px;left:0;right:0;text-align:center;font-size:54px;font-weight:700;letter-spacing:-.02em}
    .row.low{top:110px}
    .badge{position:relative;display:grid;place-items:center;margin-bottom:72px}
    .badge span{position:absolute;color:#fff;font-size:34px;font-weight:700}
  </style></head><body>
  <div class="blob b1"></div><div class="blob b2"></div>
  <div class="stage">${body}</div></body></html>`;
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ executablePath: CHROME });
  const page = await browser.newPage({ viewport: { width: 1200, height: 675 }, deviceScaleFactor: 1 });
  for (const [slug, c] of Object.entries(covers)) {
    await page.setContent(html(c), { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const png = await page.screenshot({ type: "png" });
    await sharp(png).webp({ quality: 86, effort: 6 }).toFile(join(OUT, `${slug}.webp`));
    console.log(`  cover ${slug}`);
  }
  await browser.close();
}

main();
