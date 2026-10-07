# INFIDEC website

Marketing website for INFIDEC, built with **Next.js 16.4** (App Router, Cache Components, Turbopack), **React 19.3**, **TypeScript** and **Tailwind CSS 4**. Every page is prerendered as static HTML.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Before launch: things to confirm

Every value marked `VERIFY` must be confirmed with real company data:

| File | What to confirm |
| --- | --- |
| `src/lib/site.ts` | Domain, legal name, careers email, founding year, LinkedIn URL, headline stats (contact email, phone, address and hours are set) |
| `src/data/case-studies.ts` | Six sample case studies. Replace them with real, client-approved projects |
| `src/lib/site.ts` → `testimonials`, `certifications`, `rating` | Empty on purpose. Add only real, verifiable ones; the home page shows each section once filled |
| `src/data/tech-stack.ts` → `aiTools` | The AI tools shown under "Powered by leading AI technologies" (Claude, OpenAI, GitHub Copilot, Cursor) |
| `src/app/careers/page.tsx` | Open roles |
| `src/app/privacy-policy/page.tsx`, `src/app/terms/page.tsx` | Legal review and governing law |


## Images (Higgsfield)

All 49 site images are listed in `scripts/images.manifest.mjs`, each with its placement, exact size, alt text and generation prompt. They cover services, industries, case studies, blog posts, About and Careers.

1. Create an API key at [cloud.higgsfield.ai](https://cloud.higgsfield.ai) and add it to `.env.local`:
   ```
   HF_API_KEY_ID=your-key-id
   HF_API_KEY_SECRET=your-key-secret
   ```
2. Run `npm run images`. Only missing images are generated; use `npm run images -- --only=blog/` to limit to one group.
3. Rebuild. Images appear automatically: each is cropped to its slot size, saved as WebP in `public/images/generated/`, and registered in `src/data/image-manifest.json`.

To replace an image, delete its file and run the command again, or edit its prompt first. Until an image exists, its page simply renders without it.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production URL used for canonical links, the sitemap, JSON-LD and Open Graph tags. Defaults to `https://www.infidec.com` |
| `CONTACT_WEBHOOK_URL` | **Option A** for the contact form: the enquiry is POSTed as JSON to this URL (Zapier, Make, Slack workflow, CRM webhook) |
| `RESEND_API_KEY` | **Option B**: send enquiries by email through [Resend](https://resend.com) |
| `CONTACT_TO_EMAIL` | Inbox for Option B (defaults to `site.email`) |
| `CONTACT_FROM_EMAIL` | Verified sender for Option B, e.g. `Website <noreply@infidec.com>` |

If neither option is configured, the production form shows visitors a message asking them to email you directly, so no enquiry is silently lost.

## Structure

```
src/
  app/                 routes: home, services/[slug], industries/[slug], case-studies/[slug],
                       blog/[slug], technologies, hire-developers, engagement-models, process,
                       about, careers, contact, privacy-policy, terms, sitemap, robots,
                       manifest, opengraph-image
  components/          header, footer, UI primitives, cards, infographics
  data/                all page content (services, industries, case studies, blog posts)
  lib/                 site config, SEO helper, content types
```

To add a service, industry, case study or blog post, add an entry to the matching file in `src/data/`. The page, sitemap entry, metadata and structured data are generated from it.

## SEO and quality

- Unique title, meta description and canonical URL on every page; Open Graph and Twitter cards
- JSON-LD: Organization, WebSite, Service, BreadcrumbList, FAQPage, Article and BlogPosting
- `sitemap.xml`, `robots.txt` and the web manifest are generated from content
- Lighthouse (mobile, production build): Performance 96–97, Accessibility 100, Best Practices 100, SEO 100

## 3D icons

Content icons use **Microsoft Fluent Emoji 3D** ([MIT licence](https://github.com/microsoft/fluentui-emoji), free for commercial use; notice in `public/icons/3d/LICENSE.txt`). They are stored as optimised WebP files in `public/icons/3d/`, with a soft shadow baked in so no CSS filter is needed.

- Use them with `<Icon name="rocket" className="size-10" />`. Pass `float={false}` for small inline icons.
- Animation: a gentle idle float plus lift-and-tilt on hover. Both switch off for visitors who prefer reduced motion.
- To add an icon, map a new name to a Fluent asset path in `scripts/fetch-3d-icons.mjs`, add the name to `iconNames` in `src/components/icon.tsx`, and run `npm run icons`.

Buttons, arrows, chevrons and check marks stay as line icons (lucide-react) for clarity.

## Stock photos (current)

Until Higgsfield images are generated, 14 slots use free Pexels photos ([Pexels licence](https://www.pexels.com/license/): free for commercial use, no attribution required): the 8 industry panels on the home page and the 6 case-study images. Sources are listed in `public/images/generated/CREDITS.txt`, and choices live in `scripts/fetch-stock-images.mjs` (`npm run images:stock`). To replace one with a Higgsfield image, delete its file in `public/images/generated/` and run `npm run images`. Both scripts clear Next's image cache so changes show immediately.

## Success stories (testimonials)

The home page "Success stories from our clients" section (fading quote slider with a review-rating badge) appears automatically once you add real testimonials in `src/lib/site.ts`:

```ts
testimonials: [
  { quote: "…", name: "Jane Doe", role: "CTO", company: "Acme Ltd", logo: "/images/clients/acme.svg" },
],
rating: { platform: "Clutch", score: "4.9", count: 12, url: "https://clutch.co/profile/your-profile" },
```

Use only genuine quotes you have permission to publish; `logo` and `rating` are optional.

## Inner page banners and blog covers

- **Hero banners:** every inner page (services, industries, case studies, blog, about, careers, process and more) opens with a dark photo banner. Photos are Pexels images (free commercial licence) registered in `scripts/fetch-stock-images.mjs` under `hero/...`; pass `image="hero/<id>"` to `<PageHero>`. Service pages use one banner per practice (`hero/service-build`, `-design`, `-data-ai`, `-cloud-ops`, `-quality-security`, `-teams`); industry pages reuse their industry photo.
- **Blog covers:** original illustrations rendered by `npm run covers` (`scripts/blog-covers.mjs`) from real technology logos, the 3D icons and the brand font. To add a cover for a new post, add an entry to `covers` in that script, run `npm run covers`, then `npm run images:stock` to register it.

## Share images (Open Graph)

Every page has a 1200x630 share image for LinkedIn, WhatsApp, X, Slack and Facebook:

- `src/app/opengraph-image.tsx`: the site-wide default (logo, headline, rocket icon).
- `src/app/{services,industries,case-studies,blog}/[slug]/opengraph-image.tsx`: one per detail page, showing that page's title, category and matching 3D icon.
- The shared design lives in `src/lib/og.tsx` and uses Bricolage Grotesque from `src/assets/fonts/`.

All images are generated at build time. Preview any of them at `/<page>/opengraph-image`, for example `/services/mobile-app-development/opengraph-image`.

## Performance notes

- `experimental.inlineCss` in `next.config.ts` inlines the stylesheet so the first paint does not wait for a CSS download.
- Technology logos are served from `public/icons/tech/*.svg` (`npm run tech-logos`) instead of inline SVG, keeping the home page HTML small.
- Swiper (both carousels) is imported after first paint.
