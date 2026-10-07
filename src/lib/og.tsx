import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import type { IconName } from "@/components/icon";
import { site } from "@/lib/site";

/** Shared Open Graph image (1200x630) used by the root and every detail page. */
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const root = process.cwd();
const assets = Promise.all([
  readFile(join(root, "src/assets/fonts/BricolageGrotesque-500.woff")),
  readFile(join(root, "src/assets/fonts/BricolageGrotesque-700.woff")),
  readFile(join(root, "public/images/infidec-logo.png")),
]);

/** 3D icons are WebP; the image renderer needs PNG, so convert once per icon. */
const iconCache = new Map<string, Promise<string>>();
function iconSrc(name: IconName) {
  if (!iconCache.has(name)) {
    iconCache.set(
      name,
      sharp(join(root, "public/icons/3d", `${name}.webp`))
        .resize(320, 320)
        .png()
        .toBuffer()
        .then((b) => `data:image/png;base64,${b.toString("base64")}`),
    );
  }
  return iconCache.get(name)!;
}

export async function renderOg({
  eyebrow,
  title,
  subtitle,
  icon = "rocket",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  icon?: IconName;
}) {
  const [medium, bold, logo] = await assets;
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const iconImg = await iconSrc(icon);
  const host = new URL(site.url).hostname.replace(/^www\./, "");
  const titleSize = title.length > 70 ? 54 : title.length > 45 ? 62 : 72;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          fontFamily: "Bricolage",
          background: "linear-gradient(135deg, #f4f7fd 0%, #e6edfa 55%, #ece6fb 100%)",
          color: "#070b2e",
        }}
      >
        {/* Soft white shape and brand tiles */}
        <div style={{ position: "absolute", left: -160, bottom: -220, width: 760, height: 620, borderRadius: 300, background: "rgba(255,255,255,0.7)" }} />
        <div
          style={{
            position: "absolute",
            right: -70,
            top: -90,
            width: 360,
            height: 360,
            borderRadius: 64,
            transform: "rotate(14deg)",
            background: "linear-gradient(135deg, #6d28d9 0%, #0a5bff 55%, #00c2f0 100%)",
          }}
        />
        <div style={{ position: "absolute", right: 300, top: 40, width: 46, height: 46, borderRadius: 12, transform: "rotate(14deg)", background: "#00c2f0", opacity: 0.85 }} />
        <div style={{ position: "absolute", right: 250, top: 120, width: 26, height: 26, borderRadius: 7, transform: "rotate(14deg)", background: "#6d28d9", opacity: 0.8 }} />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", padding: "64px 72px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={300} height={89} alt="" />

          <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignSelf: "flex-start",
                  padding: "8px 18px",
                  borderRadius: 999,
                  background: "#ffffff",
                  border: "1px solid #dfe5f3",
                  color: "#0a5bff",
                  fontSize: 24,
                  fontWeight: 700,
                }}
              >
                {eyebrow}
              </div>
              <div style={{ marginTop: 22, fontSize: titleSize, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 780 }}>
                {title}
              </div>
              {subtitle && (
                <div style={{ marginTop: 20, fontSize: 28, fontWeight: 500, color: "#3c4466", lineHeight: 1.35, maxWidth: 760 }}>
                  {subtitle}
                </div>
              )}
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={iconImg} width={230} height={230} alt="" style={{ marginRight: 10 }} />
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 24, fontWeight: 500, color: "#3c4466" }}>
            <div style={{ display: "flex" }}>{host}</div>
            <div style={{ display: "flex", padding: "10px 22px", borderRadius: 12, background: "#0a5bff", color: "#ffffff", fontWeight: 700 }}>
              Get a free proposal
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Bricolage", data: medium, weight: 500, style: "normal" },
        { name: "Bricolage", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
