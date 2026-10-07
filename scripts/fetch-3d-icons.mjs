/**
 * Downloads the site's 3D icons from Microsoft Fluent Emoji (MIT licence,
 * https://github.com/microsoft/fluentui-emoji) and saves them as optimised WebP
 * in public/icons/3d/<name>.webp. Run with `npm run icons` after adding names below.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const BASE = "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/";
const OUT = join(process.cwd(), "public/icons/3d");
const SIZE = 192; // crisp up to 96px on 2x screens

/** Site icon name -> Fluent asset path (relative to assets/) */
export const iconSources = {
  award: "1st place medal/3D/1st_place_medal_3d.png",
  chart: "Bar chart/3D/bar_chart_3d.png",
  bot: "Robot/3D/robot_3d.png",
  boxes: "Package/3D/package_3d.png",
  brain: "Brain/3D/brain_3d.png",
  briefcase: "Briefcase/3D/briefcase_3d.png",
  building: "Office building/3D/office_building_3d.png",
  cloud: "Cloud/3D/cloud_3d.png",
  code: "Laptop/3D/laptop_3d.png",
  compass: "Compass/3D/compass_3d.png",
  cpu: "Gear/3D/gear_3d.png",
  database: "Card file box/3D/card_file_box_3d.png",
  factory: "Factory/3D/factory_3d.png",
  film: "Film frames/3D/film_frames_3d.png",
  gauge: "Stopwatch/3D/stopwatch_3d.png",
  globe: "Globe with meridians/3D/globe_with_meridians_3d.png",
  education: "Graduation cap/3D/graduation_cap_3d.png",
  handshake: "Handshake/3D/handshake_3d.png",
  health: "Stethoscope/3D/stethoscope_3d.png",
  bank: "Bank/3D/bank_3d.png",
  layers: "Card index dividers/3D/card_index_dividers_3d.png",
  leaf: "Seedling/3D/seedling_3d.png",
  idea: "Light bulb/3D/light_bulb_3d.png",
  lock: "Locked/3D/locked_3d.png",
  monitor: "Desktop computer/3D/desktop_computer_3d.png",
  palette: "Artist palette/3D/artist_palette_3d.png",
  plane: "Airplane/3D/airplane_3d.png",
  puzzle: "Puzzle piece/3D/puzzle_piece_3d.png",
  refresh: "Counterclockwise arrows button/3D/counterclockwise_arrows_button_3d.png",
  rocket: "Rocket/3D/rocket_3d.png",
  server: "File cabinet/3D/file_cabinet_3d.png",
  shield: "Shield/3D/shield_3d.png",
  cart: "Shopping cart/3D/shopping_cart_3d.png",
  mobile: "Mobile phone/3D/mobile_phone_3d.png",
  sparkles: "Sparkles/3D/sparkles_3d.png",
  store: "Convenience store/3D/convenience_store_3d.png",
  target: "Bullseye/3D/bullseye_3d.png",
  truck: "Delivery truck/3D/delivery_truck_3d.png",
  users: "Technologist/Default/3D/technologist_3d_default.png",
  workflow: "Link/3D/link_3d.png",
  wrench: "Hammer and wrench/3D/hammer_and_wrench_3d.png",
  zap: "High voltage/3D/high_voltage_3d.png",
  cloudbolt: "Cloud with lightning/3D/cloud_with_lightning_3d.png",
  mail: "Envelope/3D/envelope_3d.png",
  phone: "Telephone receiver/3D/telephone_receiver_3d.png",
  pin: "Round pushpin/3D/round_pushpin_3d.png",
  clock: "Alarm clock/3D/alarm_clock_3d.png",
  check: "Check mark button/3D/check_mark_button_3d.png",
  growth: "Chart increasing/3D/chart_increasing_3d.png",
  money: "Money bag/3D/money_bag_3d.png",
  key: "Key/3D/key_3d.png",
};

async function main() {
  mkdirSync(OUT, { recursive: true });
  let failed = 0;
  await Promise.all(
    Object.entries(iconSources).map(async ([name, path]) => {
      const res = await fetch(BASE + path.split("/").map(encodeURIComponent).join("/"));
      if (!res.ok) {
        failed++;
        return console.error(`FAIL ${name}: ${res.status} ${path}`);
      }
      const buf = Buffer.from(await res.arrayBuffer());
      // Icon at 90% of the canvas, centred, no shadow
      const inner = Math.round(SIZE * 0.9);
      const icon = await sharp(buf).resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
      const pad = Math.round((SIZE - inner) / 2);
      await sharp({ create: { width: SIZE, height: SIZE, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
        .composite([{ input: icon, left: pad, top: pad }])
        .webp({ quality: 82, alphaQuality: 90, effort: 6 })
        .toFile(join(OUT, `${name}.webp`));
    }),
  );
  writeFileSync(
    join(OUT, "LICENSE.txt"),
    "3D icons: Microsoft Fluent Emoji, https://github.com/microsoft/fluentui-emoji\nMIT License, Copyright (c) Microsoft Corporation.\n",
  );
  console.log(`${Object.keys(iconSources).length - failed} icons saved to public/icons/3d${failed ? `, ${failed} failed` : ""}.`);
  if (failed) process.exit(1);
}

main();
