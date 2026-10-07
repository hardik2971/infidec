import { servicesA } from "./services-a";
import { servicesB } from "./services-b";
import { industries } from "./industries";
import { caseStudies } from "./case-studies";
import { posts } from "./blog";
import type { ServiceCategory } from "@/lib/types";

export const services = [...servicesA, ...servicesB];
export { industries, caseStudies, posts };

export const serviceCategories: { name: ServiceCategory; blurb: string }[] = [
  { name: "Build", blurb: "Software, web, mobile and commerce products engineered for scale." },
  { name: "Design", blurb: "Research-led product design, from first sketch to validated MVP." },
  { name: "Data & AI", blurb: "Machine learning, generative AI and the data platforms that feed them." },
  { name: "Cloud & Ops", blurb: "Cloud architecture, DevOps automation and modernisation of legacy systems." },
  { name: "Quality & Security", blurb: "Testing and assurance built into every release." },
  { name: "Teams", blurb: "Consulting and dedicated engineers who work as part of your team." },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const servicesIn = (slugs: string[]) =>
  slugs.map(getService).filter((s): s is NonNullable<typeof s> => Boolean(s));
export const industriesIn = (slugs: string[]) =>
  slugs.map(getIndustry).filter((s): s is NonNullable<typeof s> => Boolean(s));
