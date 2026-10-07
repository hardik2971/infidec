import type { IconName } from "@/components/icon";

export type TitledText = { title: string; desc: string };
export type Faq = { q: string; a: string };

export type ServiceCategory =
  | "Build"
  | "Design"
  | "Data & AI"
  | "Cloud & Ops"
  | "Quality & Security"
  | "Teams";

export type Service = {
  slug: string;
  name: string;
  icon: IconName;
  category: ServiceCategory;
  /** One-line card description, max ~110 chars */
  short: string;
  /** H1 on the detail page */
  heroTitle: string;
  /** 2–3 sentence intro under the H1 */
  intro: string;
  /** <title>, max 60 chars, without the brand suffix */
  metaTitle: string;
  /** meta description, 140–160 chars */
  metaDescription: string;
  /** Exactly 6 offerings */
  offerings: TitledText[];
  /** Exactly 5 sequential delivery steps */
  process: TitledText[];
  /** 4 reasons this is valuable to the buyer */
  outcomes: TitledText[];
  /** 6–8 concrete deliverables */
  deliverables: string[];
  /** 8–14 technology names */
  techs: string[];
  /** Industry slugs */
  industries: string[];
  /** Exactly 4 FAQs */
  faqs: Faq[];
};

export type Industry = {
  slug: string;
  name: string;
  icon: IconName;
  short: string;
  heroTitle: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  /** Exactly 4 */
  challenges: TitledText[];
  /** Exactly 6 */
  solutions: TitledText[];
  /** 4–6 regulations/standards we design for */
  compliance: string[];
  /** Service slugs */
  services: string[];
  /** Exactly 3 */
  faqs: Faq[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  /** Short card title for the home carousel, 2 to 4 words */
  shortTitle: string;
  /** Anonymised client descriptor, e.g. "Series B logistics platform, Germany" */
  client: string;
  industry: string;
  services: string[];
  region: string;
  duration: string;
  team: string;
  summary: string;
  metaDescription: string;
  challenge: string[];
  solution: string[];
  features: string[];
  /** Exactly 3 */
  results: { value: string; label: string }[];
  stack: string[];
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  category: "Engineering" | "AI & Data" | "Cloud" | "Design" | "Strategy";
  /** ISO date, e.g. 2026-08-14 */
  date: string;
  readMinutes: number;
  author: string;
  sections: BlogSection[];
};
