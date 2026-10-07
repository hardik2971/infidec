/**
 * Generates site images with the Higgsfield API, then crops them to exact size as WebP.
 *
 *   1. Put your keys in .env.local:
 *        HF_API_KEY_ID=...
 *        HF_API_KEY_SECRET=...
 *   2. npm run images            (generates only missing images)
 *      npm run images -- --only=blog/   (filter by id prefix)
 *
 * Output: public/images/generated/<id>.webp and src/data/image-manifest.json
 */
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { randomUUID } from "node:crypto";
import sharp from "sharp";
import { images } from "./images.manifest.mjs";

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, "public/images/generated");
const MANIFEST = join(ROOT, "src/data/image-manifest.json");
const API = "https://api.higgsfield.ai";
const MODEL = process.env.HF_IMAGE_MODEL ?? "higgsfield-ai/soul/v2/standard";
const CONCURRENCY = 3;
const POLL_MS = 4000;
const TIMEOUT_MS = 6 * 60 * 1000;

for (const f of [".env.local", ".env"]) {
  if (existsSync(join(ROOT, f))) process.loadEnvFile(join(ROOT, f));
}

const fileFor = (id) => join(OUT_DIR, `${id}.webp`);
const only = process.argv.find((a) => a.startsWith("--only="))?.slice(7);

function writeManifest() {
  // Keep alt text already registered (e.g. stock photos describe their actual content)
  const prev = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : {};
  const out = {};
  for (const im of images) {
    if (existsSync(fileFor(im.id))) {
      out[im.id] = { src: `/images/generated/${im.id}.webp`, width: im.w, height: im.h, alt: prev[im.id]?.alt ?? im.alt };
    }
  }
  writeFileSync(MANIFEST, JSON.stringify(out, null, 2) + "\n");
  // Drop Next's optimised-image cache so replaced files show up immediately
  rmSync(join(ROOT, ".next/cache/images"), { recursive: true, force: true });
  return Object.keys(out).length;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function api(path, init = {}) {
  const res = await fetch(path.startsWith("http") ? path : `${API}${path}`, {
    ...init,
    headers: {
      Authorization: `Key ${process.env.HF_API_KEY_ID}:${process.env.HF_API_KEY_SECRET}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
  const body = await res.text();
  let json;
  try {
    json = JSON.parse(body);
  } catch {
    json = { raw: body };
  }
  return { ok: res.ok, status: res.status, json };
}

function aspectFor(im) {
  const r = im.w / im.h;
  return r > 1.9 ? "21:9" : r > 1.5 ? "16:9" : r < 0.9 ? "4:5" : "1:1";
}

async function submit(im) {
  const composition =
    im.w / im.h > 1.9 ? "Wide panoramic composition." : im.w < im.h ? "Vertical portrait composition." : "Landscape composition.";
  const prompt = `${im.prompt} ${composition}`;
  const send = (body) =>
    api(`/${MODEL}`, { method: "POST", headers: { "Idempotency-Key": randomUUID() }, body: JSON.stringify(body) });

  let r = await send({ prompt, aspect_ratio: aspectFor(im) });
  // Fall back to prompt-only if the model rejects the aspect_ratio field; we crop locally anyway.
  if (!r.ok && (r.status === 400 || r.status === 422)) r = await send({ prompt });
  if (!r.ok) throw new Error(`submit ${r.status}: ${JSON.stringify(r.json).slice(0, 300)}`);
  const id = r.json.request_id ?? r.json.id;
  if (!id) throw new Error(`no request_id in ${JSON.stringify(r.json).slice(0, 300)}`);
  return { id, statusUrl: r.json.status_url ?? `${API}/requests/${id}/status` };
}

async function waitFor({ id, statusUrl }) {
  const start = Date.now();
  while (Date.now() - start < TIMEOUT_MS) {
    await sleep(POLL_MS);
    const r = await api(statusUrl);
    if (!r.ok) throw new Error(`status ${r.status}: ${JSON.stringify(r.json).slice(0, 300)}`);
    const s = r.json.status;
    if (s === "completed") {
      const url = r.json.images?.[0]?.url;
      if (!url) throw new Error(`completed without image url (${id})`);
      return url;
    }
    if (["failed", "nsfw", "canceled"].includes(s)) throw new Error(`${s}: ${r.json.error ?? ""}`);
  }
  throw new Error(`timed out (${id})`);
}

async function generate(im) {
  const req = await submit(im);
  const url = await waitFor(req);
  const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
  mkdirSync(dirname(fileFor(im.id)), { recursive: true });
  await sharp(buf)
    .resize(im.w, im.h, { fit: "cover", position: sharp.strategy.attention })
    .webp({ quality: 78, effort: 5 })
    .toFile(fileFor(im.id));
}

async function main() {
  if (!process.env.HF_API_KEY_ID || !process.env.HF_API_KEY_SECRET) {
    console.error("Missing HF_API_KEY_ID / HF_API_KEY_SECRET. Add them to .env.local (see the top of this file).");
    console.log(`Manifest refreshed: ${writeManifest()} existing images.`);
    process.exit(1);
  }
  const todo = images.filter((im) => !existsSync(fileFor(im.id)) && (!only || im.id.startsWith(only)));
  console.log(`${images.length} images in manifest, ${todo.length} to generate with ${MODEL}.`);

  const failed = [];
  let next = 0;
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (next < todo.length) {
        const im = todo[next++];
        try {
          await generate(im);
          console.log(`  done  ${im.id}`);
        } catch (e) {
          failed.push(im.id);
          console.error(`  FAIL  ${im.id}: ${e.message}`);
        }
      }
    }),
  );

  console.log(`Manifest written: ${writeManifest()} images available.`);
  if (failed.length) {
    console.error(`${failed.length} failed. Run "npm run images" again to retry them.`);
    process.exit(1);
  }
}

main();
