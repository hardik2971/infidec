import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "INFIDEC: AI-accelerated custom software, mobile app and cloud development company";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Software, AI and cloud engineering",
    title: "AI-accelerated software engineering",
    subtitle: "Custom software, web and mobile apps, generative AI and cloud platforms built by senior teams.",
    icon: "rocket",
  });
}
