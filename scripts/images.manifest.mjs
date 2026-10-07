/**
 * Every generated image on the site: where it goes, its exact size, alt text and Higgsfield prompt.
 * Run `npm run images` to generate missing ones. Delete a file in public/images/generated to regenerate it.
 */

const STYLE =
  "Bright, airy editorial photograph, clean white environment with soft blue and violet accent lighting, " +
  "natural daylight, shallow depth of field, modern and premium, high detail, photorealistic. " +
  "No text, no words, no letters, no logos, no watermarks, no brand names on any screen or object.";

const PEOPLE = "diverse professional team, natural candid expressions, business casual clothing";

const BAND = { w: 1600, h: 686 }; // 21:9 feature band on detail pages
const COVER = { w: 1200, h: 675 }; // 16:9 cards and article headers
const PORTRAIT = { w: 1000, h: 1250 }; // 4:5 about and careers
const PANEL = { w: 800, h: 1060 }; // tall industry panels in the home accordion
const HERO = { w: 1920, h: 640 }; // inner page hero banners

const img = (id, size, alt, subject) => ({ id, ...size, alt, prompt: `${subject}. ${STYLE}` });

export const images = [
  /* ---------- Home ---------- */
  img("home/hero", { w: 1200, h: 1000 }, "An INFIDEC engineer working with AI-assisted development tools",
    "A focused software engineer at a modern workstation with two large monitors showing abstract code editor color blocks and an AI assistant side panel, soft blue and violet ambient light, bright office"),
  img("home/culture", COVER, "INFIDEC engineers collaborating at a team workshop",
    `A lively engineering team workshop, people around a table with laptops and a large screen showing an abstract architecture diagram, ${PEOPLE}`),
  img("home/office", { w: 900, h: 540 }, "Modern IT park office building at dusk",
    "Exterior of a modern glass IT park office tower at blue hour with warm window lights, clean architectural photography, no signage"),

  /* ---------- Inner page hero banners (dark overlay, white text) ---------- */
  ...[
    ["services", "A software developer writing code at a workstation in a modern office"],
    ["industries", "A business team discussing a project around a laptop in a bright office"],
    ["case-studies", "A product team reviewing charts and reports on a table, viewed from above"],
    ["technologies", "Close-up of programming code on a monitor in a dim room"],
    ["hire-developers", "A developer's desk with dual monitors and a laptop, viewed from above"],
    ["engagement-models", "Two business people shaking hands over a desk in a modern office"],
    ["process", "A team planning sprints on a wall of colourful sticky notes"],
    ["about", "An engineering team working together around a large table"],
    ["careers", "Colleagues collaborating at laptops in a friendly office"],
    ["blog", "A programmer working late at a desk with glowing monitors"],
    ["service-build", "A keyboard and monitors showing code in a developer workspace"],
    ["service-design", "UX wireframe sketches in a notebook beside a smartphone"],
    ["service-data-ai", "An analytics dashboard with charts on a laptop screen"],
    ["service-cloud-ops", "A network server rack lit in blue in a data centre"],
    ["service-quality-security", "A security monitoring interface on a computer screen"],
    ["service-teams", "A software team gathered around a laptop discussing work"],
  ].map(([slug, subject]) => img(`hero/${slug}`, HERO, "", subject)),
  ...["healthcare", "fintech", "retail-ecommerce", "education", "logistics", "real-estate", "manufacturing", "travel-hospitality"].map(
    (slug) => img(`hero/industry/${slug}`, HERO, "", `Wide banner photograph for the ${slug.replace(/-/g, " ")} industry`),
  ),

  /* ---------- Company ---------- */
  img("about/team", PORTRAIT, "INFIDEC engineers and designers reviewing a product roadmap together",
    `A small ${PEOPLE} of software engineers and designers gathered around a large monitor, reviewing a product roadmap in a bright modern office`),
  img("about/office", COVER, "A bright, modern software development workspace",
    "A bright modern software development office with long white desks, large monitors showing abstract code editor color blocks, plants, glass meeting room in background, empty of people"),
  img("careers/team", PORTRAIT, "Team members collaborating during a pair programming session",
    `Two developers pair programming at one desk with a laptop and external monitor, smiling and discussing code, part of a ${PEOPLE}`),

  /* ---------- Services ---------- */
  img("service/custom-software-development", BAND, "Engineers planning software architecture on a whiteboard",
    `Software architects sketching a system architecture diagram of boxes and arrows on a glass whiteboard, ${PEOPLE}`),
  img("service/web-application-development", BAND, "A developer building a responsive web application across screens",
    "A developer's desk with a widescreen monitor and laptop showing a clean web application dashboard UI made of abstract cards and charts, blue and violet interface accents"),
  img("service/mobile-app-development", BAND, "Mobile app screens being tested on several smartphones",
    "Several modern smartphones laid on a white desk displaying colorful abstract mobile app interfaces, a hand holding one phone, testing devices"),
  img("service/enterprise-software-solutions", BAND, "Operations team using an enterprise dashboard",
    `Operations managers in a meeting room looking at a large screen showing an abstract enterprise dashboard with charts and workflow boxes, ${PEOPLE}`),
  img("service/ecommerce-development", BAND, "An online store experience on laptop and phone",
    "A laptop and smartphone on a white table showing an elegant abstract online fashion store interface with product image tiles, shopping bags and a credit card nearby"),
  img("service/ui-ux-design", BAND, "Product designers arranging interface wireframes",
    `Product designers arranging paper wireframes and sticky notes on a wall next to a large monitor showing interface design components, ${PEOPLE}`),
  img("service/product-discovery-mvp", BAND, "A product discovery workshop with sticky notes and journey maps",
    `A product discovery workshop, a team mapping a customer journey with colored sticky notes on a long white wall, ${PEOPLE}`),
  img("service/it-consulting", BAND, "Consultants presenting a digital transformation roadmap",
    `A technology consultant presenting a digital transformation roadmap timeline on a large screen to company executives in a bright boardroom, ${PEOPLE}`),
  img("service/ai-ml-development", BAND, "Abstract visualisation of a neural network",
    "Abstract three-dimensional visualization of a glowing neural network, interconnected nodes and soft light trails in blue, violet and cyan on a white background"),
  img("service/generative-ai-solutions", BAND, "A professional working with an AI assistant on a laptop",
    "A professional at a laptop using a conversational AI assistant interface made of abstract chat bubbles and source document cards, soft glowing violet and blue accents"),
  img("service/data-engineering-analytics", BAND, "Data analysts reviewing analytics dashboards",
    `Data analysts reviewing large monitors with abstract analytics dashboards, bar charts, line charts and data pipelines, ${PEOPLE}`),
  img("service/cloud-devops", BAND, "Abstract cloud infrastructure and server racks",
    "A clean modern data center aisle with white server racks and subtle blue status lights, abstract and orderly, symmetrical perspective"),
  img("service/legacy-modernization", BAND, "Legacy systems being transformed into modern cloud architecture",
    "Conceptual still life: an old beige computer terminal on the left gradually transforming into sleek glass modular blocks on the right, blue and violet light, white studio background"),
  img("service/qa-testing", BAND, "A QA engineer running automated tests across devices",
    "A QA engineer at a desk with a laptop, tablet and phones arranged for cross-device testing, monitor showing abstract test results with green check marks"),
  img("service/dedicated-development-team", BAND, "A dedicated development team in a sprint stand-up",
    `A software team holding a morning stand-up meeting in front of a digital task board with abstract colored cards, ${PEOPLE}`),

  /* ---------- Industries ---------- */
  img("industry/healthcare", BAND, "A clinician using a telehealth platform on a tablet",
    "A doctor in a bright modern clinic reviewing patient vitals on a tablet with abstract health charts, stethoscope, clean white medical environment"),
  img("industry/fintech", BAND, "A person managing finances in a mobile banking app",
    "Close-up of hands holding a smartphone showing an abstract mobile banking app with balance cards and charts, contactless card and coffee on a white desk"),
  img("industry/retail-ecommerce", BAND, "A modern retail store with digital checkout",
    "A bright modern retail boutique with minimal shelves, a tablet point-of-sale on the counter, customer shopping, white interior"),
  img("industry/education", BAND, "A student learning online with a laptop",
    "A university student studying at a bright desk with a laptop showing an abstract online course interface, notebooks and headphones"),
  img("industry/logistics", BAND, "A warehouse with logistics tracking on a tablet",
    "A clean modern warehouse with neat shelving and parcels, a logistics worker holding a tablet with an abstract route map, delivery vans visible at loading bay"),
  img("industry/real-estate", BAND, "A modern residential building and property platform",
    "Modern glass-and-white residential apartment building exterior on a clear day, architectural photography, soft blue sky"),
  img("industry/manufacturing", BAND, "A smart factory production line with robotic arms",
    "A clean smart factory production line with white robotic arms and sensors, an engineer with a tablet monitoring equipment, industry 4.0"),
  img("industry/travel-hospitality", BAND, "A traveller booking a trip on a smartphone in a hotel lobby",
    "A traveller with a suitcase in a bright modern hotel lobby checking a booking on a smartphone, airy architecture"),

  /* ---------- Industry accordion panels (home page, tall portrait). Same bright site style as every other image. ---------- */
  img("industry-panel/healthcare", PANEL, "A clinician reviewing a patient's health records on a tablet in a bright clinic",
    "A doctor in a bright modern clinic holding a tablet that shows an abstract patient record and vitals dashboard, a patient smiling in the background, connected care and electronic health records"),
  img("industry-panel/fintech", PANEL, "A customer using a mobile banking app to make a payment",
    "A young professional in a bright cafe using a smartphone with an abstract mobile banking and payments app, tapping a card on a contactless terminal, secure digital banking"),
  img("industry-panel/retail-ecommerce", PANEL, "A shopper buying online while a store team fulfils orders",
    "A smiling shopper browsing an abstract online store on a phone in a bright modern boutique, staff packing an online order at the counter behind, connected online and in-store retail"),
  img("industry-panel/education", PANEL, "A student learning on an online learning platform",
    "A university student at a bright desk taking an online course on a laptop with an abstract learning platform and progress dashboard, notebook and headphones beside her"),
  img("industry-panel/logistics", PANEL, "A warehouse worker tracking shipments on a tablet",
    "A logistics coordinator in a bright modern warehouse holding a tablet with an abstract shipment tracking map, neat shelves of parcels and a delivery van at the loading bay"),
  img("industry-panel/real-estate", PANEL, "An agent showing a property listing app to a couple",
    "A real estate agent showing a couple an abstract property listing app on a tablet inside a bright, newly finished apartment with large windows"),
  img("industry-panel/manufacturing", PANEL, "An engineer monitoring a smart production line",
    "An engineer in a clean smart factory monitoring a production line with white robotic arms, holding a tablet with abstract machine health and output charts"),
  img("industry-panel/travel-hospitality", PANEL, "A traveller checking in with a mobile booking app",
    "A traveller with a suitcase in a bright modern hotel lobby checking in with an abstract booking app on a smartphone, friendly receptionist in the background"),

  /* ---------- Case studies ---------- */
  img("case/taxi-booking-platform-erp-website-flutter-app", COVER, "A smartphone showing a ride route inside a car",
    "A passenger's hand holding a smartphone showing an abstract taxi booking app with a route map inside a car at night"),
  img("case/restaurant-management-platform-erp-website-flutter-app", COVER, "A restaurant ordering screen showing a food menu",
    "A modern restaurant counter with a touchscreen ordering terminal showing an abstract food menu, warm lighting"),
  img("case/telehealth-remote-patient-monitoring-platform", COVER, "Remote patient monitoring devices and a clinician dashboard",
    "A home blood pressure monitor and smartwatch next to a tablet showing an abstract patient monitoring dashboard with vitals charts, clean white surface"),
  img("case/sme-lending-platform-automated-underwriting", COVER, "A small business owner applying for a loan online",
    "A small business owner in a bright cafe using a laptop to complete an abstract online loan application form, receipts and tablet nearby"),
  img("case/headless-commerce-replatform-fashion-retailer", COVER, "A fashion storefront displayed across devices",
    "Fashion clothing items neatly arranged beside a laptop, tablet and phone each showing an abstract online fashion store layout"),
  img("case/fleet-dispatch-optimisation-ml-eta-prediction", COVER, "Delivery fleet routes on a dispatch map",
    "A dispatcher's monitor showing an abstract city map with glowing delivery routes and vehicle markers, delivery vans blurred through the window"),
  img("case/adaptive-learning-platform-generative-ai-tutor", COVER, "A student working with an AI tutor on a tablet",
    "A teenage student at home using a tablet with an abstract AI tutor chat interface and learning progress charts, warm daylight"),
  img("case/iot-predictive-maintenance-mes-modernization", COVER, "IoT sensors monitoring industrial machinery",
    "Close-up of industrial machinery with small attached IoT sensors, an engineer's tablet showing abstract vibration and temperature graphs"),

  /* ---------- Blog ---------- */
  img("blog/kubernetes-cost-optimisation-finops-checklist", COVER, "Cover: Kubernetes cost optimisation",
    "Abstract arrangement of glossy shipping-container-shaped blocks in blue and violet stacked on a white surface, a few blocks being removed, minimal studio composition"),
  img("blog/custom-software-development-cost-2026", COVER, "Cover: software development cost in 2026",
    "A desk with a laptop showing abstract budget charts, a printed project plan, calculator and coffee, product manager's hands planning"),
  img("blog/building-production-rag-systems", COVER, "Cover: production RAG systems",
    "Abstract visualization of floating document pages connected by glowing lines to a central luminous sphere, blue and violet light on white background"),
  img("blog/design-systems-figma-tokens-to-production-components", COVER, "Cover: design systems with Figma and React",
    "Neatly arranged physical UI component tiles, buttons, toggles, color swatches and cards made of matte material on a white surface, top-down flat lay"),
  img("blog/practical-guide-legacy-application-modernization", COVER, "Cover: legacy application modernization",
    "A vintage computer keyboard beside a sleek modern laptop on a white desk, contrasting old and new technology, soft blue light"),
  img("blog/native-vs-flutter-vs-react-native", COVER, "Cover: native vs Flutter vs React Native",
    "Three modern smartphones of different sizes standing side by side on a white surface displaying abstract colorful app interfaces, studio lighting"),
];
