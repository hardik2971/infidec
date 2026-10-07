/**
 * Writes every technology logo used in src/data/tech-stack.ts to public/icons/tech/<slug>.svg
 * (simple-icons, CC0). Serving them as files keeps the long SVG paths out of the page HTML.
 *
 *   npm run tech-logos
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import * as si from "simple-icons";

const ROOT = process.cwd();
const OUT = join(ROOT, "public/icons/tech");
const src = readFileSync(join(ROOT, "src/data/tech-stack.ts"), "utf8");
const used = [...new Set([...src.matchAll(/\bsi[A-Z][A-Za-z0-9]*\b/g)].map((m) => m[0]))];

mkdirSync(OUT, { recursive: true });
let n = 0;
for (const key of used) {
  const icon = si[key];
  if (!icon) continue;
  // Very light brand colours would vanish on the light background, so use the brand ink instead
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(icon.hex.slice(i, i + 2), 16) / 255);
  const fill = 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.78 ? "#070b2e" : `#${icon.hex}`;
  writeFileSync(
    join(OUT, `${icon.slug}.svg`),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${fill}"><title>${icon.title}</title><path d="${icon.path}"/></svg>\n`,
  );
  n++;
}
console.log(`${n} logos written to public/icons/tech`);
