/**
 * Single source of truth for brand facts.
 * Everything marked VERIFY must be confirmed with real company data before launch.
 */
export const site = {
  name: "INFIDEC",
  legalName: "INFIDEC", // VERIFY: registered legal entity name
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.infidec.com").replace(/\/$/, ""), // VERIFY: production domain
  tagline: "Software engineering and digital product partner",
  description:
    "INFIDEC designs, builds and scales custom software, web and mobile apps, AI solutions and cloud platforms for startups and enterprises worldwide.",
  email: "contact@infidec.com",
  careersEmail: "careers@infidec.com", // VERIFY
  phone: "+91 8128974378" as string,
  address: "C1-1207, Pragati Infra IT Park, Uttran, Surat-394105, Gujarat, India" as string,
  postalAddress: {
    streetAddress: "C1-1207, Pragati Infra IT Park, Uttran",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "394105",
    addressCountry: "IN",
  },
  hours: { label: "Mon - Fri: 9:00 AM - 6:00 PM", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
  founded: 2016, // VERIFY
  social: {
    linkedin: "https://www.linkedin.com/company/infidec", // VERIFY
    x: "" as string, // optional
    github: "" as string, // optional
  },
  /** VERIFY: replace with audited figures. Shown on home, about and service pages. */
  stats: [
    { value: 180, suffix: "+", label: "Products shipped" },
    { value: 20, suffix: "+", label: "Countries served" },
    { value: 75, suffix: "+", label: "Engineers and designers" },
    { value: 94, suffix: "%", label: "Clients who return for a second project" },
  ],
  /**
   * Trust signals. Leave empty until you have real, verifiable ones; each home section renders only when filled.
   * Never use another company's clients, reviews or certifications.
   */
  testimonials: [] as { quote: string; name: string; role: string; company: string; logo?: string }[], // logo: path in /public
  /** Certifications INFIDEC holds. VERIFY: keep each certificate on file; remove any that lapse. */
  certifications: [
    { code: "ISO 27001", name: "Information Security Management System", desc: "International standard for managing and protecting sensitive company and customer information." },
    { code: "ISO 9001", name: "Quality Management System", desc: "Globally recognised standard for consistent quality, customer focus and continual improvement." },
    { code: "SOC 2", name: "Service Organization Control", desc: "Audited controls for security, availability, processing integrity, confidentiality and privacy." },
  ] as { code: string; name: string; desc: string; logo?: string }[],
  /** Review and listing profiles. VERIFY: paste each live profile URL; badges without a URL are shown unlinked. */
  profiles: [
    { platform: "Google Reviews", url: "" },
    { platform: "Clutch", url: "" },
    { platform: "GoodFirms", url: "" },
    { platform: "Upwork", url: "" },
  ] as { platform: "Google Reviews" | "Clutch" | "GoodFirms" | "Upwork"; url: string }[],
  rating: null as null | { platform: string; score: string; count: number; url: string },
  regions: ["North America", "United Kingdom & Europe", "Middle East", "Australia", "India"],
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Marketplace", href: "https://marketplace.elaynetech.com/" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
] as const;
