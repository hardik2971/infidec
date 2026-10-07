/**
 * Fills image slots with free stock photos from Pexels (Pexels licence: free for commercial
 * use, no attribution required, https://www.pexels.com/license/). Each photo is cropped to
 * its slot size from scripts/images.manifest.mjs and saved as WebP.
 *
 *   npm run images:stock
 *
 * To replace one with a Higgsfield image later, delete its file in public/images/generated
 * and run `npm run images`.
 */
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import sharp from "sharp";
import { images } from "./images.manifest.mjs";

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, "public/images/generated");

/** Manifest id -> [Pexels photo id, alt text describing the photo, optional crop position (sharp gravity)] */
const stock = {
  "industry-panel/healthcare": [4266947, "A doctor and a colleague reviewing patient information on a tablet"],
  "industry-panel/fintech": [5332468, "A customer paying with a smartphone at a contactless payment terminal"],
  "industry-panel/retail-ecommerce": [6994316, "A happy shopper holding a smartphone and shopping bags", "centre"],
  "industry-panel/education": [8199167, "A student learning on a laptop in a lecture hall"],
  "industry-panel/logistics": [4484078, "A warehouse worker managing inventory on a tablet"],
  "industry-panel/real-estate": [7937330, "A real estate agent showing a new apartment to a couple"],
  "industry-panel/manufacturing": [34207359, "An industrial robotic arm on an automated production line"],
  "industry-panel/travel-hospitality": [7820616, "A traveller pulling a suitcase through a hotel lobby"],
  // Inner page hero banners (shown under a dark overlay)
  "hero/services": [36706460, "A software developer writing code in a modern office"],
  "hero/industries": [7693698, "A business team discussing a project around a laptop"],
  "hero/case-studies": [6476254, "A team reviewing charts and reports, viewed from above"],
  "hero/technologies": [6424584, "Programming code on a monitor"],
  "hero/hire-developers": [3861972, "A developer's desk with dual monitors and a laptop"],
  "hero/engagement-models": [5673488, "Colleagues shaking hands in an office"],
  "hero/process": [4623462, "A team planning work on a wall of sticky notes"],
  "hero/about": [29267512, "An engineering team working together around a table"],
  "hero/careers": [3184303, "Colleagues collaborating at laptops"],
  "hero/blog": [18935831, "A programmer working at a desk with a monitor showing code"],
  "hero/service-build": [33349204, "A developer workspace with code on screen"],
  "hero/service-design": [196644, "UX wireframe sketches in a notebook beside a smartphone"],
  "hero/service-data-ai": [7109291, "An analytics chart on a laptop screen"],
  "hero/service-cloud-ops": [17323801, "A network server rack lit in blue"],
  "hero/service-quality-security": [5380618, "A security monitoring interface on a screen"],
  "hero/service-teams": [7652054, "A software team gathered around a laptop"],
  "hero/industry/healthcare": [4266947, "A doctor and a colleague reviewing patient information on a tablet"],
  "hero/industry/fintech": [5332468, "A customer paying with a smartphone at a payment terminal"],
  "hero/industry/retail-ecommerce": [6994316, "A happy shopper holding a smartphone and shopping bags"],
  "hero/industry/education": [8199167, "A student learning on a laptop in a lecture hall"],
  "hero/industry/logistics": [4484078, "A warehouse worker managing inventory on a tablet"],
  "hero/industry/real-estate": [7937330, "A real estate agent showing a new apartment to a couple"],
  "hero/industry/manufacturing": [34207359, "An industrial robotic arm on a production line"],
  "hero/industry/travel-hospitality": [7820616, "A traveller pulling a suitcase through a hotel lobby"],
  "case/taxi-booking-platform-erp-website-flutter-app": [6169868, "A smartphone showing a ride route inside a car"],
  "case/restaurant-management-platform-erp-website-flutter-app": [12935078, "A restaurant ordering screen showing a food menu"],
  "case/telehealth-remote-patient-monitoring-platform": [19957215, "A doctor running an online medical consultation with a tablet and phone"],
  "case/sme-lending-platform-automated-underwriting": [7857526, "A small business owner reviewing financial charts on a laptop"],
  "case/headless-commerce-replatform-fashion-retailer": [6331230, "A shopper browsing a fashion store on a smartphone"],
  "case/fleet-dispatch-optimisation-ml-eta-prediction": [6169047, "A delivery driver checking packages beside a delivery van"],
  "case/adaptive-learning-platform-generative-ai-tutor": [36764624, "A child learning online on a laptop at home"],
  "case/iot-predictive-maintenance-mes-modernization": [34194567, "A robotic arm in an automated industrial setup"],
};

const byId = Object.fromEntries(images.map((im) => [im.id, im]));
const fileFor = (id) => join(OUT_DIR, `${id}.webp`);

async function main() {
  const credits = [];
  const alts = {};
  for (const [id, [photo, alt, position]] of Object.entries(stock)) {
    const im = byId[id];
    if (!im) throw new Error(`Unknown manifest id ${id}`);
    alts[id] = alt;
    credits.push(`${id}: https://www.pexels.com/photo/${photo}/`);
    if (existsSync(fileFor(id))) continue;
    const url = `https://images.pexels.com/photos/${photo}/pexels-photo-${photo}.jpeg?auto=compress&cs=tinysrgb&w=2000`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${id}: download failed ${res.status}`);
    mkdirSync(dirname(fileFor(id)), { recursive: true });
    await sharp(Buffer.from(await res.arrayBuffer()))
      .resize(im.w, im.h, { fit: "cover", position: position ?? sharp.strategy.attention })
      .webp({ quality: 78, effort: 5 })
      .toFile(fileFor(id));
    console.log(`  saved ${id}`);
  }

  // Register every image that exists (stock or generated) for the site
  const manifest = {};
  for (const im of images) {
    if (existsSync(fileFor(im.id))) {
      manifest[im.id] = { src: `/images/generated/${im.id}.webp`, width: im.w, height: im.h, alt: alts[im.id] ?? im.alt };
    }
  }
  writeFileSync(join(ROOT, "src/data/image-manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
  // Drop Next's optimised-image cache so replaced files show up immediately
  rmSync(join(ROOT, ".next/cache/images"), { recursive: true, force: true });
  writeFileSync(
    join(OUT_DIR, "CREDITS.txt"),
    "Stock photos from Pexels (free for commercial use, https://www.pexels.com/license/)\n\n" + credits.join("\n") + "\n",
  );
  console.log(`${Object.keys(manifest).length} images registered.`);
}

main();
