import type { Industry } from "@/lib/types";

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare & life sciences",
    icon: "health",
    short: "Patient apps, EHR integrations and clinical data platforms built for HIPAA, GDPR and HL7 FHIR.",
    heroTitle: "Healthcare software that clinicians use and auditors accept",
    intro:
      "We build patient portals, telehealth apps, clinical workflow tools and data platforms that connect to the EHR systems you already run. Every build starts with privacy, audit trails and interoperability, so clinical teams get usable software and your compliance team gets evidence.",
    metaTitle: "Healthcare Software Development Services",
    metaDescription:
      "Healthcare software development for patient apps, telehealth, EHR integration and clinical data platforms, designed for HIPAA, GDPR and HL7 FHIR from day one.",
    challenges: [
      {
        title: "Fragmented clinical data",
        desc: "Patient records sit across EHR/EMR systems, lab systems, imaging archives and billing tools that rarely share a common format, so clinicians re-key data and decisions rely on incomplete histories.",
      },
      {
        title: "Strict privacy obligations",
        desc: "Protected health information must be encrypted, access-controlled and logged under HIPAA and GDPR. One weak integration or misconfigured bucket can expose records and trigger regulatory action.",
      },
      {
        title: "Clinician time and adoption",
        desc: "Clinicians already spend hours on documentation. New tools that add clicks or ignore real ward and clinic workflows get abandoned, no matter how good the feature list looks.",
      },
      {
        title: "Ageing core systems",
        desc: "Many providers run on-premise systems with limited APIs and older HL7 v2 interfaces. Adding digital front doors or analytics without disrupting care delivery takes careful integration work.",
      },
    ],
    solutions: [
      {
        title: "EHR/EMR integration",
        desc: "We connect your applications to Epic, Oracle Health, athenahealth and other EHRs through HL7 FHIR R4 APIs, SMART on FHIR launch flows and HL7 v2 interface engines.",
      },
      {
        title: "Patient portals and mobile apps",
        desc: "We build appointment booking, intake forms, secure messaging, results viewing and medication reminders that patients can use on any device, designed to WCAG 2.2 accessibility guidelines.",
      },
      {
        title: "Telehealth platforms",
        desc: "We deliver video consultation, virtual waiting rooms, e-prescribing hand-offs and visit documentation, with encrypted media, consent capture and audit logging built in.",
      },
      {
        title: "Remote patient monitoring",
        desc: "We ingest readings from connected devices and wearables, apply alert thresholds set by clinicians and present trends in dashboards that care teams can act on.",
      },
      {
        title: "Clinical data platforms",
        desc: "We build pipelines that normalise data into FHIR or OMOP models, de-identify it for research and feed reporting, population health and quality measure dashboards.",
      },
      {
        title: "AI for clinical and admin workflows",
        desc: "We build AI assistants for ambient note drafting, coding suggestions and prior authorisation, with clinician review steps, evaluation sets and clear limits on what the model decides.",
      },
    ],
    compliance: ["HIPAA", "GDPR", "HL7 FHIR R4", "ISO 27001", "SOC 2", "WCAG 2.2"],
    services: [
      "custom-software-development",
      "mobile-app-development",
      "data-engineering-analytics",
      "ai-ml-development",
      "legacy-modernization",
      "qa-testing",
    ],
    faqs: [
      {
        q: "Will you sign a business associate agreement (BAA)?",
        a: "Yes. When our team will handle protected health information for a US covered entity or business associate, we sign a BAA and scope access to the minimum data needed. Where possible we work with synthetic or de-identified data during development.",
      },
      {
        q: "Can you integrate with our existing EHR?",
        a: "In most cases, yes. We use the EHR vendor's FHIR APIs, SMART on FHIR app frameworks or your interface engine for HL7 v2 feeds. Access usually depends on vendor app registration, so we help you plan that process early.",
      },
      {
        q: "Do you build software that qualifies as a medical device?",
        a: "We can build software that sits within a regulated quality system, but the regulatory strategy and submissions must be owned by you and your regulatory advisers. We supply the design records, traceability and test evidence your process requires.",
      },
    ],
  },
  {
    slug: "fintech",
    name: "Fintech & banking",
    icon: "bank",
    short: "Digital banking, payments, lending and wealth platforms built for PCI DSS, PSD2 and KYC/AML rules.",
    heroTitle: "Fintech and banking software built for scale and scrutiny",
    intro:
      "We build digital banking apps, payment flows, lending platforms and back-office tools for banks, credit unions and fintech startups. Our teams design for security, auditability and regulator expectations from the first sprint, so you can launch faster without rework later.",
    metaTitle: "Fintech Software Development Services",
    metaDescription:
      "Fintech and banking software development for payments, digital banking, lending and wealth platforms, designed for PCI DSS, PSD2, KYC/AML and SOC 2 controls.",
    challenges: [
      {
        title: "Regulatory pressure on every release",
        desc: "Payments, lending and deposit products each carry their own rules. Teams must prove controls for KYC/AML, data protection and consumer duty without slowing product delivery to a crawl.",
      },
      {
        title: "Core banking constraints",
        desc: "Many institutions run core systems with batch processing and limited APIs. Real-time customer experiences need an integration layer that protects the core while exposing the right data.",
      },
      {
        title: "Fraud and account takeover",
        desc: "Instant payments and digital onboarding attract synthetic identities, mule accounts and credential stuffing. Static rules alone produce too many false positives and still miss new patterns.",
      },
      {
        title: "Reliability and reconciliation",
        desc: "Money movement cannot drop or duplicate a transaction. Systems need idempotent processing, double-entry ledgers and clean reconciliation against processors, card schemes and bank statements.",
      },
    ],
    solutions: [
      {
        title: "Digital banking apps",
        desc: "We build web and mobile banking for retail and business customers, covering onboarding, accounts, cards, transfers, statements and secure messaging with strong customer authentication.",
      },
      {
        title: "Payments and ledgers",
        desc: "We build payment orchestration, wallets and double-entry ledgers that connect to card processors, ACH, SEPA and Faster Payments rails, with idempotency and daily reconciliation built in.",
      },
      {
        title: "Open banking integration",
        desc: "We implement PSD2 and open banking APIs for account information and payment initiation, either directly or through aggregators such as Plaid, TrueLayer and Tink.",
      },
      {
        title: "Digital onboarding and KYC",
        desc: "We design onboarding flows with identity verification, document checks, sanctions and PEP screening and risk scoring, with case management for analysts who review exceptions.",
      },
      {
        title: "Lending platforms",
        desc: "We build loan origination, decisioning, servicing and collections workflows, with configurable credit rules, bureau integrations and a full audit trail of every decision.",
      },
      {
        title: "Fraud and risk analytics",
        desc: "We combine rules engines with machine learning models for transaction monitoring and fraud scoring, and give analysts explainable alerts instead of opaque scores.",
      },
    ],
    compliance: ["PCI DSS", "PSD2 and open banking", "KYC/AML", "SOC 2", "GDPR", "ISO 27001"],
    services: [
      "custom-software-development",
      "web-application-development",
      "mobile-app-development",
      "ai-ml-development",
      "cloud-devops",
      "legacy-modernization",
    ],
    faqs: [
      {
        q: "Can you work within our bank's security and vendor risk requirements?",
        a: "Yes. We complete vendor due diligence questionnaires, work inside your access controls and environments, and follow your change management process. Tell us your requirements during scoping so we staff and plan around them.",
      },
      {
        q: "How do you keep card data out of scope for PCI DSS?",
        a: "Where we can, we use tokenisation and hosted payment fields from your processor so raw card numbers never touch your servers. That reduces your PCI DSS scope. Where card data must be handled, we design the environment to the relevant requirements.",
      },
      {
        q: "Do you build on top of banking-as-a-service providers?",
        a: "Yes. Many fintech products launch faster on a BaaS or card-issuing partner. We integrate with your chosen provider and design your own ledger and data layer so you are not locked in if you change partners later.",
      },
    ],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & eCommerce",
    icon: "store",
    short: "Storefronts, marketplaces, order management and retail data platforms that connect online and in-store.",
    heroTitle: "Retail and eCommerce platforms that sell across every channel",
    intro:
      "We build storefronts, marketplaces, mobile shopping apps and the order, inventory and pricing systems behind them. Whether you run on Shopify Plus, Adobe Commerce, commercetools or a custom stack, we connect online and store operations so customers see accurate stock and fast checkout.",
    metaTitle: "Retail & eCommerce Software Development",
    metaDescription:
      "Retail and eCommerce development for headless storefronts, marketplaces, order management and personalisation, built for PCI DSS, GDPR and WCAG 2.2 compliance.",
    challenges: [
      {
        title: "Disconnected channels",
        desc: "Web, app, marketplace and store sales often run on separate systems. Inventory, pricing and customer data drift apart, leading to overselling, inconsistent promotions and frustrated shoppers.",
      },
      {
        title: "Slow storefront performance",
        desc: "Heavy themes, third-party scripts and monolithic platforms slow page loads on mobile. Shoppers abandon slow pages, and poor Core Web Vitals scores also hurt search visibility.",
      },
      {
        title: "Complex fulfilment",
        desc: "Ship-from-store, click and collect, drop shipping and returns all need accurate stock, order routing rules and carrier integrations that many off-the-shelf setups handle poorly.",
      },
      {
        title: "Generic customer experiences",
        desc: "Without clean product data and unified customer profiles, search, recommendations and campaigns stay generic. Shoppers struggle to find products and marketing spend goes to the wrong audiences.",
      },
    ],
    solutions: [
      {
        title: "Headless commerce storefronts",
        desc: "We build fast storefronts with Next.js on top of Shopify Plus, commercetools, BigCommerce or Adobe Commerce, giving your team design freedom without rebuilding commerce logic.",
      },
      {
        title: "Marketplace platforms",
        desc: "We build multi-vendor marketplaces with seller onboarding, catalogue moderation, split payments, commissions and payouts through providers such as Stripe Connect or Adyen for Platforms.",
      },
      {
        title: "Order and inventory management",
        desc: "We implement order management and distributed inventory that route orders across warehouses and stores, support click and collect and returns, and sync with ERP and POS systems.",
      },
      {
        title: "Product information management",
        desc: "We set up PIM workflows and data models aligned with GS1 identifiers so product content, attributes and images stay consistent across your site, apps and marketplaces.",
      },
      {
        title: "Search and personalisation",
        desc: "We tune product search, merchandising rules and recommendation models using behavioural and catalogue data, and measure their impact with controlled A/B tests.",
      },
      {
        title: "Mobile shopping apps",
        desc: "We build native and cross-platform shopping apps with saved carts, wish lists, loyalty programmes, push notifications and wallet payments such as Apple Pay and Google Pay.",
      },
    ],
    compliance: ["PCI DSS", "GDPR", "CCPA/CPRA", "WCAG 2.2", "GS1 standards"],
    services: [
      "ecommerce-development",
      "web-application-development",
      "mobile-app-development",
      "ui-ux-design",
      "data-engineering-analytics",
      "qa-testing",
    ],
    faqs: [
      {
        q: "Should we replatform or go headless?",
        a: "It depends on where your constraints are. If your platform's commerce logic works but the front end limits you, headless is often enough. If pricing, catalogue or checkout logic is the problem, a replatform may be justified. We assess this in a short discovery phase.",
      },
      {
        q: "Can you migrate our store without losing search rankings?",
        a: "We plan migrations with URL mapping, redirects, structured data and metadata carried over, then monitor crawl errors and rankings after launch. Some short-term fluctuation is normal, but careful planning limits the risk.",
      },
      {
        q: "Do you integrate with our ERP and POS?",
        a: "Yes. We have integrated storefronts and order systems with ERPs such as SAP, Microsoft Dynamics and NetSuite and with common POS systems, using their APIs or middleware where direct APIs are limited.",
      },
    ],
  },
  {
    slug: "education",
    name: "Education & eLearning",
    icon: "education",
    short: "Learning platforms, LMS integrations and assessment tools for schools, universities and corporate training.",
    heroTitle: "Education and eLearning platforms learners come back to",
    intro:
      "We build learning management systems, course platforms, assessment tools and student apps for schools, universities, EdTech companies and corporate learning teams. Our platforms follow LTI, SCORM and xAPI standards so content and grades move cleanly between the tools you already use.",
    metaTitle: "Education & eLearning Software Development",
    metaDescription:
      "Education and eLearning software development for LMS platforms, course delivery, assessment and student apps, built on LTI, SCORM, xAPI, WCAG 2.2 and FERPA.",
    challenges: [
      {
        title: "Tools that do not talk to each other",
        desc: "Institutions run an LMS, student information system, video platform and assessment tools side by side. Without standard integrations, staff copy grades and rosters by hand.",
      },
      {
        title: "Low learner engagement",
        desc: "Long videos and static PDFs lead to drop-off. Learners expect short, interactive content, clear progress tracking and feedback that helps them improve.",
      },
      {
        title: "Accessibility requirements",
        desc: "Public institutions must meet accessibility law, and every learner deserves equal access. Retrofitting captions, keyboard navigation and screen reader support after launch is slow and costly.",
      },
      {
        title: "Student data protection",
        desc: "Learner records, including those of minors, are subject to FERPA, COPPA and GDPR. Platforms need consent handling, data minimisation and clear controls over third-party tools.",
      },
    ],
    solutions: [
      {
        title: "Custom LMS and course platforms",
        desc: "We build learning platforms with course authoring, cohorts, scheduling, certificates and payments, or extend open source LMSs such as Moodle and Open edX to fit your model.",
      },
      {
        title: "Standards-based integrations",
        desc: "We implement LTI 1.3 for tool launches and grade passback, SCORM and xAPI for content tracking, and roster sync with your student information system.",
      },
      {
        title: "Assessment and proctoring tools",
        desc: "We build question banks, adaptive quizzes, rubric-based grading and secure exam workflows, with analytics that show instructors which concepts learners struggle with.",
      },
      {
        title: "Mobile learning apps",
        desc: "We build mobile apps with offline content, push reminders and short-form lessons so learners can study on a commute or in areas with limited connectivity.",
      },
      {
        title: "AI tutoring and content tools",
        desc: "We build AI tutors and authoring assistants grounded in your own course material, with guardrails, citation of sources and instructor oversight of what the model produces.",
      },
      {
        title: "Learning analytics",
        desc: "We collect xAPI statements into a learning record store and build dashboards that track progress, completion and at-risk learners for instructors and administrators.",
      },
    ],
    compliance: ["FERPA", "COPPA", "GDPR", "WCAG 2.2", "LTI 1.3", "SCORM and xAPI"],
    services: [
      "web-application-development",
      "mobile-app-development",
      "ui-ux-design",
      "generative-ai-solutions",
      "product-discovery-mvp",
    ],
    faqs: [
      {
        q: "Should we build a custom LMS or extend Moodle or Canvas?",
        a: "If your needs are mostly standard course delivery, extending an established LMS is usually cheaper and faster. A custom platform makes sense when the learning experience or business model is your product. We help you weigh both during discovery.",
      },
      {
        q: "Can our existing SCORM content run on the new platform?",
        a: "Yes. We support SCORM 1.2 and SCORM 2004 packages and can add xAPI tracking for richer data. We test a sample of your existing courses early to catch packaging issues before migration.",
      },
      {
        q: "How do you handle accessibility?",
        a: "We design and build to WCAG 2.2 AA, test with screen readers and keyboard-only navigation, and include captions and transcripts in content workflows. We can provide an accessibility conformance report on request.",
      },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics & supply chain",
    icon: "truck",
    short: "Transport, warehouse and visibility platforms that connect carriers, shippers and partners in real time.",
    heroTitle: "Logistics software that keeps freight and data moving",
    intro:
      "We build transport management, warehouse, fleet and shipment visibility software for carriers, 3PLs, freight forwarders and shippers. Our teams handle the EDI, telematics and partner integrations that make supply chain data reliable enough to plan against.",
    metaTitle: "Logistics & Supply Chain Software Development",
    metaDescription:
      "Logistics software development for TMS, WMS, fleet tracking and supply chain visibility, with EDI, GS1 and carrier API integrations built in from the start.",
    challenges: [
      {
        title: "Poor shipment visibility",
        desc: "Shipment status is spread across carrier portals, emails and spreadsheets. Customers and planners lack reliable ETAs, so exceptions are found late and expensive to fix.",
      },
      {
        title: "Partner integration overhead",
        desc: "Each carrier, customer and warehouse partner uses different EDI messages, APIs or file formats. Onboarding a new partner can take weeks of custom mapping and testing.",
      },
      {
        title: "Manual warehouse processes",
        desc: "Paper pick lists, manual counts and disconnected scanners slow fulfilment and cause inventory errors, especially during peak periods when temporary staff join.",
      },
      {
        title: "Planning on stale data",
        desc: "Route planning, capacity and demand forecasts often rely on last week's spreadsheets. Fuel, labour and asset costs rise when plans cannot react to real conditions.",
      },
    ],
    solutions: [
      {
        title: "Transport management systems",
        desc: "We build or extend TMS platforms covering load planning, carrier selection, tendering, dock scheduling, freight audit and proof of delivery.",
      },
      {
        title: "Warehouse management and scanning",
        desc: "We build WMS features and handheld scanning apps for receiving, putaway, picking, packing and cycle counts, using GS1 barcodes and labels.",
      },
      {
        title: "EDI and partner integration",
        desc: "We implement EDI X12 and EDIFACT messages, carrier APIs and partner portals behind a reusable integration layer so new partners connect faster.",
      },
      {
        title: "Fleet and telematics platforms",
        desc: "We ingest GPS and telematics data to track vehicles, monitor driver hours and vehicle health, and alert dispatchers to delays and route deviations.",
      },
      {
        title: "Driver and field apps",
        desc: "We build mobile apps for drivers with job lists, navigation hand-off, electronic proof of delivery, photo capture and offline operation for areas with weak signal.",
      },
      {
        title: "Supply chain analytics and forecasting",
        desc: "We build data platforms and forecasting models for demand, ETA prediction and route optimisation, with dashboards that planners use day to day.",
      },
    ],
    compliance: ["EDI X12 and EDIFACT", "GS1 standards", "ISO 27001", "SOC 2", "GDPR"],
    services: [
      "custom-software-development",
      "enterprise-software-solutions",
      "mobile-app-development",
      "data-engineering-analytics",
      "ai-ml-development",
      "cloud-devops",
    ],
    faqs: [
      {
        q: "Can you integrate with our existing ERP and carrier network?",
        a: "Yes. We connect to ERPs such as SAP, Oracle and Microsoft Dynamics and to carriers through EDI, APIs or visibility aggregators. We start by mapping your partners and message types so effort is estimated realistically.",
      },
      {
        q: "Should we buy an off-the-shelf TMS or WMS instead?",
        a: "Often a packaged system is the right core. Custom work pays off where your process differs from the standard, such as specialised workflows, customer portals or integrations. We will tell you when buying makes more sense.",
      },
      {
        q: "Do your mobile apps work offline?",
        a: "Yes. Driver and warehouse apps store data locally and sync when connectivity returns, with conflict handling so scans and proof of delivery records are not lost.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real estate & proptech",
    icon: "building",
    short: "Listing portals, property management and proptech platforms built on MLS/RESO data and secure payments.",
    heroTitle: "Real estate and proptech software for listings, leases and buildings",
    intro:
      "We build listing portals, property and lease management systems, tenant apps and building data platforms for brokerages, property managers, developers and proptech startups. Our teams work with MLS feeds through RESO standards, payment providers and smart building systems.",
    metaTitle: "Real Estate & Proptech Software Development",
    metaDescription:
      "Real estate and proptech software development for listing portals, property management, tenant apps and building data, built on MLS/RESO, GDPR and PCI DSS.",
    challenges: [
      {
        title: "Inconsistent listing data",
        desc: "Listings arrive from multiple MLSs, agents and feeds with different fields and quality. Duplicates, stale prices and missing photos damage trust in your portal.",
      },
      {
        title: "Manual leasing and management work",
        desc: "Applications, screening, lease signing, rent collection and maintenance requests often run through email and spreadsheets, which slows response times and hides costs.",
      },
      {
        title: "Disconnected building systems",
        desc: "Access control, HVAC, metering and occupancy sensors run on separate vendor platforms. Owners struggle to get a single view of building performance and energy use.",
      },
      {
        title: "Sensitive tenant and payment data",
        desc: "Tenant screening, identity documents and rent payments carry personal and financial data that must be protected under GDPR, fair housing rules and PCI DSS.",
      },
    ],
    solutions: [
      {
        title: "Listing portals and search",
        desc: "We build property portals with map search, saved searches, alerts and virtual tour embeds, fed by MLS data through the RESO Web API and normalised to the RESO Data Dictionary.",
      },
      {
        title: "Property and lease management",
        desc: "We build systems for leases, rent rolls, invoicing, owner statements and maintenance work orders, integrated with your accounting platform.",
      },
      {
        title: "Tenant and resident apps",
        desc: "We build apps for online rent payment, maintenance requests, amenity booking, visitor access and community messages, designed for residents of all ages.",
      },
      {
        title: "Digital leasing and screening",
        desc: "We build online application flows with identity verification, credit and background screening integrations and e-signature, with consistent criteria applied to every applicant.",
      },
      {
        title: "Smart building data platforms",
        desc: "We integrate IoT sensors, BMS and access control data into one platform for occupancy, energy and maintenance insight across a portfolio.",
      },
      {
        title: "Valuation and investment analytics",
        desc: "We build data pipelines and models for comparable sales, rent estimates and portfolio performance, with clear inputs that analysts can review and adjust.",
      },
    ],
    compliance: ["MLS/RESO standards", "GDPR", "PCI DSS", "Fair housing rules", "WCAG 2.2", "SOC 2"],
    services: [
      "web-application-development",
      "mobile-app-development",
      "custom-software-development",
      "data-engineering-analytics",
      "ui-ux-design",
      "product-discovery-mvp",
    ],
    faqs: [
      {
        q: "Can you integrate MLS data into our website?",
        a: "Yes. We connect through the RESO Web API or the feed your MLS provides, and we follow each MLS's display and attribution rules. You will need a data licence agreement with the MLS, which we can help you prepare for.",
      },
      {
        q: "Do you integrate with property management platforms such as Yardi or AppFolio?",
        a: "Yes, where the vendor offers API or partner access. We build integrations to sync units, leases, tenants and payments, or build complementary tools that sit alongside your existing platform.",
      },
      {
        q: "How do you avoid bias in automated tenant screening?",
        a: "We apply the same documented criteria to every applicant, avoid protected characteristics and their proxies, keep decision logs and route edge cases to human review. Your legal team should review the criteria before launch.",
      },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Industry 4.0",
    icon: "factory",
    short: "MES, IIoT and production analytics that connect shop-floor machines to planning and quality systems.",
    heroTitle: "Manufacturing software that connects the shop floor to the business",
    intro:
      "We build manufacturing execution, industrial IoT, quality and maintenance software that links machines, operators and ERP systems. Our teams work with OPC UA, MQTT and historian data and design for IEC 62443 security, so plant data is useful without exposing operational technology.",
    metaTitle: "Manufacturing Software Development Services",
    metaDescription:
      "Manufacturing software development for MES, IIoT, predictive maintenance and quality analytics, connecting OPC UA machine data to ERP with IEC 62443 security.",
    challenges: [
      {
        title: "Machine data locked on the floor",
        desc: "Machines from different vendors and decades use proprietary protocols and PLCs. Production data stays in local HMIs and historians, out of reach of planners and engineers.",
      },
      {
        title: "Unplanned downtime",
        desc: "Without condition monitoring, equipment failures are found when lines stop. Maintenance teams fall back on fixed schedules that replace parts too early or too late.",
      },
      {
        title: "Paper-based quality and traceability",
        desc: "Inspection checklists, batch records and non-conformance reports on paper make root cause analysis slow and recalls hard to scope accurately.",
      },
      {
        title: "IT/OT security risk",
        desc: "Connecting operational technology to cloud and enterprise networks opens new attack paths. Security must be designed into the architecture, not added after the first incident.",
      },
    ],
    solutions: [
      {
        title: "Manufacturing execution systems",
        desc: "We build or extend MES functions for work orders, routing, operator instructions, material tracking and production reporting, integrated with your ERP.",
      },
      {
        title: "Industrial IoT connectivity",
        desc: "We connect PLCs and machines through OPC UA and MQTT gateways, stream data to edge and cloud platforms and model it so every line reports in the same structure.",
      },
      {
        title: "OEE and production dashboards",
        desc: "We build real-time dashboards for availability, performance and quality, with downtime reason capture that operators can complete in seconds.",
      },
      {
        title: "Predictive maintenance",
        desc: "We use vibration, temperature and run-time data to build models that flag early signs of failure, and connect alerts to your maintenance work order system.",
      },
      {
        title: "Quality and traceability",
        desc: "We digitise inspections, SPC charts, non-conformance and CAPA workflows, and link batches, serial numbers and materials for genealogy from supplier to shipment.",
      },
      {
        title: "Computer vision inspection",
        desc: "We build vision models that detect surface defects, assembly errors and labelling issues on the line, with feedback loops so operators can correct and retrain them.",
      },
    ],
    compliance: ["IEC 62443", "ISO 27001", "ISO 9001", "OPC UA", "ISA-95", "GDPR"],
    services: [
      "enterprise-software-solutions",
      "custom-software-development",
      "data-engineering-analytics",
      "ai-ml-development",
      "cloud-devops",
      "legacy-modernization",
    ],
    faqs: [
      {
        q: "Can you work with our older machines and PLCs?",
        a: "Usually, yes. Many older controllers can be read through protocol converters or OPC UA gateways, and retrofit sensors can cover machines with no data interface. We start with a site survey to confirm what each asset supports.",
      },
      {
        q: "Do we need to move plant data to the cloud?",
        a: "No. Time-critical processing can stay on edge servers in the plant, with only aggregated data sent to the cloud for analytics. We design the split around your latency, security and IT policies.",
      },
      {
        q: "How do you keep the OT network secure?",
        a: "We follow IEC 62443 principles: network zones and conduits, one-way or brokered data flows out of the OT network, least privilege access and no direct inbound connections from the internet to controllers.",
      },
    ],
  },
  {
    slug: "travel-hospitality",
    name: "Travel & hospitality",
    icon: "plane",
    short: "Booking engines, guest apps and distribution integrations for airlines, hotels, tour operators and OTAs.",
    heroTitle: "Travel and hospitality software that converts lookers into bookers",
    intro:
      "We build booking engines, guest apps, property and channel integrations and revenue tools for hotels, airlines, tour operators and online travel agencies. Our teams work with GDS, NDC and channel manager APIs and handle payments the way PCI DSS requires.",
    metaTitle: "Travel & Hospitality Software Development",
    metaDescription:
      "Travel and hospitality software development for booking engines, guest apps, GDS and NDC integrations and PMS connectivity, designed for PCI DSS and GDPR rules.",
    challenges: [
      {
        title: "Complex distribution",
        desc: "Inventory and rates flow through GDSs, OTAs, channel managers, NDC APIs and direct channels. Keeping availability and pricing consistent across them is hard and errors cost revenue.",
      },
      {
        title: "Booking abandonment",
        desc: "Slow searches, confusing fare and room options and long checkout forms push travellers to book elsewhere, often through intermediaries that charge commission.",
      },
      {
        title: "Fragmented guest data",
        desc: "Guest profiles are split across PMS, CRM, loyalty and booking systems. Staff cannot see preferences or history, so service and personalisation suffer.",
      },
      {
        title: "Payment and fraud risk",
        desc: "Card-not-present bookings, stored cards for incidentals and multi-currency payments raise PCI DSS scope and chargeback risk if handled without care.",
      },
    ],
    solutions: [
      {
        title: "Booking engines",
        desc: "We build direct booking for rooms, flights, tours and packages with fast availability search, clear pricing, upsells and mobile-first checkout that supports 3-D Secure.",
      },
      {
        title: "GDS, NDC and channel integration",
        desc: "We integrate with Amadeus, Sabre and Travelport, airline NDC APIs, bed banks and channel managers, with caching and error handling that protect search performance.",
      },
      {
        title: "PMS and hotel systems integration",
        desc: "We connect booking, CRM and guest apps to property management systems such as Oracle OPERA, Mews and Cloudbeds, using vendor APIs and HTNG or OpenTravel messages where supported.",
      },
      {
        title: "Guest and traveller apps",
        desc: "We build apps for mobile check-in, digital keys, itinerary management, in-stay requests and loyalty, with offline access for travellers abroad.",
      },
      {
        title: "Revenue and pricing tools",
        desc: "We build data pipelines and pricing models that use demand, competitor rates and booking pace to support revenue managers' decisions on rates and restrictions.",
      },
      {
        title: "AI travel assistants",
        desc: "We build conversational assistants for trip planning, booking changes and guest questions, grounded in your inventory and policies, with hand-off to human agents.",
      },
    ],
    compliance: ["PCI DSS", "GDPR", "PSD2 strong customer authentication", "WCAG 2.2", "OpenTravel and HTNG standards"],
    services: [
      "web-application-development",
      "mobile-app-development",
      "custom-software-development",
      "generative-ai-solutions",
      "cloud-devops",
      "ui-ux-design",
    ],
    faqs: [
      {
        q: "Can you integrate with Amadeus, Sabre or airline NDC APIs?",
        a: "Yes. These integrations need commercial agreements and certification with the provider, which you hold. We handle the technical build, certification testing and the caching layer that keeps search fast and API costs under control.",
      },
      {
        q: "How do you handle card payments for hotel bookings?",
        a: "We use tokenisation and hosted payment fields from your payment provider so card data stays out of your systems, and support pre-authorisation and stored credentials for incidentals in line with PCI DSS and card scheme rules.",
      },
      {
        q: "Can a direct booking engine reduce our OTA dependence?",
        a: "A faster direct booking path, member rates and better mobile checkout give travellers reasons to book direct. Results depend on your brand, pricing and marketing, so we help you measure conversion before and after launch.",
      },
    ],
  },
];
