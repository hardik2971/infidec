import type { CaseStudy } from "@/lib/types";

/** Sample engagements written as templates. Replace with real, client-approved projects before launch. */
export const caseStudies: CaseStudy[] = [
  {
    slug: "taxi-booking-platform-erp-website-flutter-app",
    title: "A complete taxi booking platform: fleet ERP, booking website and Flutter apps",
    shortTitle: "Taxi Booking Platform",
    client: "Taxi and cab operator", // VERIFY: client descriptor
    industry: "travel-hospitality",
    services: ["enterprise-software-solutions", "web-application-development", "mobile-app-development", "ui-ux-design", "cloud-devops"],
    region: "India", // VERIFY
    duration: "6 months", // VERIFY
    team: "7 people: PM, designer, 4 engineers, QA", // VERIFY
    summary:
      "We built a taxi operator's full digital platform: a fleet and operations ERP, a booking website, and Flutter rider and driver apps sharing one real-time backend.",
    metaDescription:
      "How INFIDEC built a taxi booking platform with a fleet and operations ERP, an online booking website and Flutter rider and driver apps for iOS and Android.",
    challenge: [
      "The operator took bookings by phone and messaging apps, assigned drivers from a whiteboard and tracked trips, fares and driver payouts in spreadsheets. Riders had no way to book online, see their driver or pay digitally, and the office could not see where cars were or which drivers were free.",
      "They needed one connected system rather than separate tools: something the office could run the fleet from, a website for online and corporate bookings, and mobile apps for riders and drivers, all working from the same live data.",
    ],
    solution: [
      "We designed the platform around a single backend and API so every channel shares bookings, drivers, vehicles, fares and payments in real time. Live trip events are pushed over WebSockets, and driver locations stream from the driver app to the dispatch screen and the rider's tracking view.",
      "The ERP gives the operations team dispatch, fleet and driver management, vehicle documents and service reminders, fare and zone configuration, driver earnings and payouts, corporate accounts with invoicing, and reports on trips, revenue and utilisation. The booking website handles instant and scheduled rides, fare estimates, corporate bookings and online payment.",
      "One Flutter codebase produces the rider and driver apps for both iOS and Android. Riders book, see the fare up front, track their driver on the map, pay and rate the trip. Drivers go online, accept trips, navigate, start and end rides, and see their earnings. Push notifications keep both sides updated at every step.",
    ],
    features: [
      "Fleet ERP: dispatch board, drivers, vehicles, documents and service reminders",
      "Fare, zone and surge configuration with fare estimates before booking",
      "Booking website for instant, scheduled and corporate rides",
      "Flutter rider app: booking, live driver tracking, payment and ratings",
      "Flutter driver app: trip requests, navigation, trip status and earnings",
      "Driver payouts, corporate invoicing and trip and revenue reports",
    ],
    results: [
      { value: "3-in-1", label: "ERP, website and mobile apps on one live backend" },
      { value: "2", label: "apps for iOS and Android from one Flutter codebase" },
      { value: "Live", label: "driver tracking for riders and the dispatch team" },
    ],
    stack: ["Flutter", "Dart", "React", "Next.js", "Node.js", "PostgreSQL", "Redis", "WebSockets", "Google Maps Platform", "Firebase Cloud Messaging", "AWS"],
  },
  {
    slug: "restaurant-management-platform-erp-website-flutter-app",
    title: "A restaurant management platform: ERP, online ordering website and Flutter apps",
    shortTitle: "Restaurant Management Platform",
    client: "Multi-outlet restaurant business", // VERIFY: client descriptor
    industry: "travel-hospitality",
    services: ["enterprise-software-solutions", "web-application-development", "mobile-app-development", "ui-ux-design", "cloud-devops"],
    region: "India", // VERIFY
    duration: "5 months", // VERIFY
    team: "6 people: PM, designer, 3 engineers, QA", // VERIFY
    summary:
      "We built a restaurant group's ERP for orders, kitchen, menu and inventory, plus an online ordering website and a Flutter customer app, all on one shared system.",
    metaDescription:
      "How INFIDEC built a restaurant management platform with an ERP for POS, kitchen, menu and inventory, an online ordering website and a Flutter app.",
    challenge: [
      "Each outlet ran its own billing software, menus were updated by hand in several places, and online orders arrived through third-party apps that did not talk to the kitchen. Stock was counted on paper, so owners only found out about shortages, wastage and outlet performance at the end of the month.",
      "The business wanted to take direct online orders without commission, keep one menu and one set of prices across every channel, and see sales, stock and kitchen performance for all outlets in one place.",
    ],
    solution: [
      "We built one platform with a shared menu, pricing, orders and customer data, so a change made once in the ERP appears on the POS, the website and the app. Orders from every channel land in the same queue and flow to a kitchen display screen with preparation timers.",
      "The ERP covers table and takeaway billing, kitchen display, menu and modifier management, recipes linked to ingredients for automatic stock deduction, purchasing and supplier records, staff roles, and multi-outlet sales, tax and inventory reports.",
      "The ordering website and the Flutter app for iOS and Android let customers browse the menu, customise items, order for delivery, pickup or dine-in, pay online, track their order and collect loyalty rewards. Push notifications confirm each stage from accepted to ready.",
    ],
    features: [
      "POS for dine-in, takeaway and delivery with table management",
      "Kitchen display system with order queue and preparation timers",
      "Central menu, modifiers and pricing across all outlets and channels",
      "Recipe-based inventory with automatic stock deduction and low-stock alerts",
      "Online ordering website and Flutter app with payment, tracking and loyalty",
      "Multi-outlet sales, tax, inventory and staff reports",
    ],
    results: [
      { value: "3-in-1", label: "ERP, website and mobile app sharing one menu" },
      { value: "0%", label: "commission on direct online orders" },
      { value: "Live", label: "sales and stock view across every outlet" },
    ],
    stack: ["Flutter", "Dart", "React", "Next.js", "Node.js", "PostgreSQL", "Redis", "WebSockets", "Razorpay", "Firebase Cloud Messaging", "AWS"],
  },
  {
    slug: "telehealth-remote-patient-monitoring-platform",
    title: "A remote patient monitoring platform that care teams actually use",
    shortTitle: "Remote Patient Monitoring",
    client: "Mid-market telehealth provider, United States",
    industry: "healthcare",
    services: ["custom-software-development", "mobile-app-development", "cloud-devops", "ui-ux-design"],
    region: "North America",
    duration: "10 months",
    team: "9 people: PM, designer, 6 engineers, QA",
    summary:
      "We rebuilt a telehealth provider's video visit and remote monitoring stack so device readings, alerts and clinician workflows live in one HIPAA-aligned platform.",
    metaDescription:
      "How INFIDEC built a HIPAA-aligned telehealth and remote patient monitoring platform with device integrations, triage alerts and clinician dashboards.",
    challenge: [
      "The provider ran video visits on one vendor product and remote patient monitoring on another. Blood pressure cuffs, glucometers and pulse oximeters sent readings to a portal that nurses checked manually, so out-of-range values could sit unseen for hours and clinicians had to switch between three systems to review a single patient.",
      "Growth in chronic care management programmes made the gaps expensive. Billing for remote monitoring depends on documented reading days and clinician time, and that evidence was being assembled in spreadsheets at month end. Leadership wanted one platform that fit existing EHR workflows, met HIPAA requirements and could scale to new programmes without another vendor.",
    ],
    solution: [
      "We started with a four-week discovery phase, shadowing nurses and care coordinators to map how alerts were triaged and escalated. That produced a prioritised backlog and a clickable prototype that clinicians tested before any production code was written.",
      "The platform is a set of services on AWS behind a single API gateway. A device ingestion service normalises readings from cellular-connected devices and vendor APIs, stores them as FHIR Observations, and evaluates them against per-patient thresholds set by the care team. Alerts are routed to a triage queue with clear ownership, and video visits run on a managed WebRTC service embedded in both the clinician web app and the patient mobile app.",
      "Integration with the provider's EHR uses HL7 FHIR APIs for patient demographics and writes visit notes and monitoring summaries back into the chart. Time tracking and reading-day counts are captured automatically, giving the billing team an auditable monthly report. Infrastructure is defined in Terraform, with encryption at rest and in transit, audit logging and role-based access reviewed against HIPAA safeguards.",
    ],
    features: [
      "Device ingestion for cellular and Bluetooth blood pressure, glucose, weight and SpO2 devices",
      "Per-patient alert thresholds with a shared triage queue and escalation rules",
      "Embedded video visits in the clinician web app and patient mobile app",
      "FHIR-based EHR integration for demographics, notes and monitoring summaries",
      "Automatic reading-day and clinician time tracking for programme billing",
      "Audit logs, role-based access and encrypted storage aligned to HIPAA safeguards",
    ],
    results: [
      { value: "64%", label: "faster median time from out-of-range reading to clinician review" },
      { value: "3→1", label: "systems clinicians use to review a monitored patient" },
      { value: "11 wks", label: "to launch a new chronic care programme, down from months" },
    ],
    stack: ["React", "TypeScript", "Flutter", "Node.js", "NestJS", "PostgreSQL", "HL7 FHIR", "AWS", "Amazon Chime SDK", "Terraform", "Redis"],
  },
  {
    slug: "sme-lending-platform-automated-underwriting",
    title: "Rebuilding an SME lending platform around automated underwriting",
    shortTitle: "Automated SME Lending",
    client: "Digital lender serving small businesses, United Kingdom",
    industry: "fintech",
    services: ["web-application-development", "data-engineering-analytics", "ai-ml-development", "qa-testing"],
    region: "United Kingdom & Europe",
    duration: "12 months",
    team: "11 people: PM, BA, designer, 6 engineers, data scientist, QA",
    summary:
      "We replaced a manual, spreadsheet-heavy loan origination process with a web platform that pulls Open Banking data, scores applications and routes only edge cases to underwriters.",
    metaDescription:
      "How INFIDEC built an SME lending platform with Open Banking data, automated decision rules and an audit trail for underwriters at a UK digital lender.",
    challenge: [
      "The lender's application journey collected documents through a web form, after which underwriters downloaded bank statements, rekeyed figures into spreadsheets and emailed applicants with follow-up questions. A straightforward application took several days to decide, and applicants frequently dropped out while waiting.",
      "The business wanted to grow loan volume without growing the underwriting team at the same rate. Any automation had to be explainable to underwriters and auditable for the regulator, and credit policy changes needed to ship without a full release cycle.",
    ],
    solution: [
      "We redesigned the applicant journey first, reducing the form to the fields actually used in decisions and adding Open Banking consent so transaction data arrives directly from the applicant's bank. Company data is enriched from Companies House and a credit bureau API at submission.",
      "A categorisation and affordability service turns raw transactions into cash flow features such as average monthly revenue, volatility and existing debt servicing. A versioned rules engine applies credit policy, and a gradient-boosted model trained on the lender's historical book produces a risk score with feature-level explanations. Clear accepts and declines are decided automatically within policy limits; everything else goes to an underwriter workbench that shows the data, rules fired and model explanation side by side.",
      "Every decision is stored with the inputs, policy version and model version used, so any outcome can be reproduced later. Credit policy is edited by the risk team through a reviewed configuration workflow with test cases, and the release pipeline includes contract tests against each third-party API and regression suites for the decision logic.",
    ],
    features: [
      "Shortened applicant journey with Open Banking consent and document upload",
      "Transaction categorisation and cash flow affordability metrics",
      "Versioned credit policy rules editable by the risk team with review",
      "Risk scoring model with per-decision feature explanations",
      "Underwriter workbench with case assignment, notes and referrals",
      "Reproducible decision records for audit and complaints handling",
    ],
    results: [
      { value: "41%", label: "of applications decided automatically within policy" },
      { value: "2.6x", label: "applications handled per underwriter per week" },
      { value: "<1 day", label: "median decision time for complete applications" },
    ],
    stack: ["Next.js", "TypeScript", "Kotlin", "Spring Boot", "PostgreSQL", "Apache Kafka", "Python", "XGBoost", "MLflow", "AWS", "Terraform", "Playwright"],
  },
  {
    slug: "headless-commerce-replatform-fashion-retailer",
    title: "A headless commerce replatform for a multi-brand fashion retailer",
    shortTitle: "Headless Fashion Commerce",
    client: "Omnichannel fashion retailer, Australia",
    industry: "retail-ecommerce",
    services: ["ecommerce-development", "web-application-development", "ui-ux-design", "legacy-modernization"],
    region: "Australia",
    duration: "8 months",
    team: "8 people: PM, designer, 5 engineers, QA",
    summary:
      "We moved three storefronts off an ageing monolithic platform to a headless architecture with a shared commerce backend, a composable CMS and faster, more maintainable frontends.",
    metaDescription:
      "How INFIDEC replatformed a fashion retailer to headless commerce with Next.js, a composable CMS and a phased migration that kept every storefront trading.",
    challenge: [
      "The retailer ran three brand storefronts on a heavily customised monolithic ecommerce platform. Theme changes required developer time, seasonal campaigns were built by duplicating templates, and plugin conflicts had caused several outages during sale periods.",
      "Mobile page performance was weak, particularly on product listing pages with large image grids. The platform version was approaching end of support, and the team wanted to move without a risky big-bang cutover in the middle of the trading calendar.",
    ],
    solution: [
      "We chose a headless setup: a SaaS commerce engine for catalogue, cart, checkout and promotions, a headless CMS for content and campaign pages, and a dedicated search service. The three storefronts share one Next.js codebase with per-brand themes driven by design tokens, so brand differences live in configuration rather than forked code.",
      "Migration was phased by brand and by route. An edge routing layer sent traffic for migrated paths to the new frontend while the remaining routes still hit the old platform. Product, customer and order history data was migrated with repeatable scripts and reconciled against the source before each cutover, and URL redirects were mapped to protect search rankings.",
      "Performance work focused on what shoppers feel: server-rendered listing pages with streaming, responsive images through an image CDN, and a lean client bundle. The merchandising team now builds campaign pages from a library of CMS components with previews, and storefront releases go through automated visual and end-to-end checkout tests.",
    ],
    features: [
      "Shared multi-brand Next.js storefront with token-based theming",
      "Headless CMS component library for campaign and landing pages",
      "Faceted search and merchandising rules in a dedicated search service",
      "Phased route-by-route migration behind an edge routing layer",
      "Reconciled data migration for products, customers and order history",
      "Automated end-to-end checkout and visual regression tests per release",
    ],
    results: [
      { value: "38%", label: "faster median mobile load on product listing pages" },
      { value: "12%", label: "increase in mobile conversion rate after full cutover" },
      { value: "0", label: "unplanned outages during the following peak sale season" },
    ],
    stack: ["Next.js", "React", "TypeScript", "commercetools", "Contentful", "Algolia", "Vercel", "Cloudinary", "Node.js", "Playwright"],
  },
  {
    slug: "fleet-dispatch-optimisation-ml-eta-prediction",
    title: "Fleet dispatch optimisation with machine learning ETA prediction",
    shortTitle: "Smart Fleet Dispatch",
    client: "Regional last-mile delivery operator, Germany",
    industry: "logistics",
    services: ["custom-software-development", "ai-ml-development", "data-engineering-analytics", "cloud-devops"],
    region: "United Kingdom & Europe",
    duration: "9 months",
    team: "8 people: PM, 4 engineers, 2 data engineers/ML, QA",
    summary:
      "We built a dispatch platform that plans routes against real constraints and predicts arrival times from historical telemetry, so dispatchers plan faster and customers get reliable delivery windows.",
    metaDescription:
      "How INFIDEC built a fleet dispatch platform with constraint-based route planning and ML ETA prediction for a last-mile delivery operator in Germany.",
    challenge: [
      "Dispatchers built daily routes for around 300 vans using a desktop tool and their own local knowledge. Planning took most of the morning, routes ignored live traffic patterns, and customer delivery windows were wide because nobody trusted the estimated arrival times.",
      "Late deliveries triggered support calls and failed first attempts, both of which cost money. The operator had two years of GPS telemetry and stop-level delivery records but no pipeline to turn that data into anything usable for planning.",
    ],
    solution: [
      "We first built the data foundation: a streaming pipeline that ingests vehicle telematics and driver app events, cleans GPS traces, and joins them to stop-level outcomes in a warehouse. That gave a reliable record of actual drive times and service times by area, time of day and customer type.",
      "Route planning uses Google OR-Tools to solve a vehicle routing problem with time windows, vehicle capacities, driver shift limits and depot constraints. Instead of static road speeds, the solver uses travel and service time estimates from gradient-boosted models trained on the historical data. Dispatchers review the proposed plan on a map, adjust it with drag and drop, and publish routes to the driver app.",
      "During the day, the ETA service re-predicts arrival times as vehicles progress and pushes updated windows to customers by SMS. Models are retrained weekly with drift monitoring, and prediction error is tracked by region on an operations dashboard so the team can see where estimates are weakest.",
    ],
    features: [
      "Streaming ingestion of vehicle telematics and driver app events",
      "Constraint-based route planning with time windows, capacity and shift limits",
      "ML-predicted travel and service times in place of static road speeds",
      "Dispatcher map console with manual overrides and one-click publishing",
      "Live ETA updates pushed to customers during the delivery day",
      "Weekly model retraining with drift and accuracy monitoring by region",
    ],
    results: [
      { value: "70%", label: "less time spent on daily route planning" },
      { value: "31%", label: "lower mean absolute ETA error versus the previous tool" },
      { value: "9%", label: "fewer kilometres driven per delivered parcel" },
    ],
    stack: ["Python", "Google OR-Tools", "LightGBM", "Apache Kafka", "Apache Spark", "Snowflake", "FastAPI", "React", "Mapbox", "Kubernetes", "Google Cloud"],
  },
  {
    slug: "adaptive-learning-platform-generative-ai-tutor",
    title: "An adaptive learning platform with a curriculum-grounded AI tutor",
    shortTitle: "AI Learning Tutor",
    client: "K-12 online learning provider, India",
    industry: "education",
    services: ["generative-ai-solutions", "web-application-development", "mobile-app-development", "product-discovery-mvp"],
    region: "India",
    duration: "7 months",
    team: "8 people: PM, designer, 4 engineers, ML engineer, QA",
    summary:
      "We added adaptive practice and a generative AI tutor to an online learning platform, grounding every answer in the provider's own curriculum content and keeping teachers in control.",
    metaDescription:
      "How INFIDEC built an adaptive learning platform with a curriculum-grounded generative AI tutor, mastery tracking and teacher oversight for K-12 students.",
    challenge: [
      "The provider offered recorded lessons and fixed practice sets for secondary school maths and science. Every student saw the same questions in the same order, so strong students were bored and struggling students fell behind without anyone noticing until test results arrived.",
      "Students also wanted help outside live class hours. The team was interested in a generative AI tutor but was rightly cautious: answers had to match the syllabus, avoid simply handing over solutions, be appropriate for minors, and be reviewable by teachers and parents.",
    ],
    solution: [
      "We ran a six-week discovery and MVP phase with one subject and two grades. Each practice item was tagged to curriculum learning objectives, and a knowledge tracing model estimates mastery per objective from student responses. The practice engine then selects the next item to target weak objectives while mixing in review of earlier material.",
      "The AI tutor uses retrieval-augmented generation over the provider's own lesson transcripts, worked examples and textbook content. It is instructed to guide with hints and questions rather than give final answers, cites the lesson it drew from, and declines off-topic requests. Inputs and outputs pass through moderation, and conversations are logged for teacher review.",
      "Before launch we built an evaluation set of several hundred real student questions graded by subject teachers for correctness, pedagogy and tone, and used it to compare prompt and retrieval changes. Teachers see a dashboard of mastery by objective and can flag tutor responses, which feed back into the evaluation set.",
    ],
    features: [
      "Curriculum-tagged item bank mapped to learning objectives",
      "Knowledge tracing to estimate mastery and adapt practice sequences",
      "AI tutor grounded in the provider's lessons with source citations",
      "Hint-first tutoring behaviour with moderation and topic guardrails",
      "Teacher dashboard for mastery, at-risk students and flagged conversations",
      "Teacher-graded evaluation set used to test every tutor change",
    ],
    results: [
      { value: "27%", label: "more practice sessions completed per active student" },
      { value: "92%", label: "of sampled tutor answers rated correct and on-syllabus by teachers" },
      { value: "16 wks", label: "from discovery kickoff to first cohort launch" },
    ],
    stack: ["Next.js", "TypeScript", "React Native", "Python", "FastAPI", "PostgreSQL", "pgvector", "Azure OpenAI Service", "LangGraph", "Redis", "Azure"],
  },
  {
    slug: "iot-predictive-maintenance-mes-modernization",
    title: "IoT predictive maintenance and a modernised MES for a component manufacturer",
    shortTitle: "IoT Predictive Maintenance",
    client: "Automotive components manufacturer, United States",
    industry: "manufacturing",
    services: ["legacy-modernization", "ai-ml-development", "data-engineering-analytics", "enterprise-software-solutions"],
    region: "North America",
    duration: "14 months",
    team: "10 people: PM, architect, 5 engineers, data scientist, 2 QA",
    summary:
      "We connected machine sensors across two plants to a predictive maintenance pipeline and incrementally replaced a legacy manufacturing execution system without stopping production.",
    metaDescription:
      "How INFIDEC delivered IoT predictive maintenance and an incremental MES modernisation for an automotive components manufacturer across two US plants.",
    challenge: [
      "The manufacturer's MES was a 15-year-old client-server application with a large stored procedure layer and few people left who understood it. Work orders, production counts and quality records lived there, but plant managers relied on exports and spreadsheets for anything beyond basic reporting.",
      "Unplanned downtime on CNC machining centres and hydraulic presses was the largest controllable cost on the shop floor. Maintenance was calendar-based, sensor data from newer machines was not collected, and older machines had no instrumentation at all.",
    ],
    solution: [
      "On the shop floor, we retrofitted vibration and temperature sensors to critical older assets and connected newer machines through OPC UA. Edge gateways buffer and forward data over MQTT to a cloud time-series store, so a network outage does not lose readings. Data engineers built pipelines that align sensor streams with maintenance history and production schedules.",
      "The data scientist worked with maintenance engineers to label past failures and build anomaly detection and remaining-useful-life models for spindle bearings and hydraulic systems. Alerts are created as maintenance work orders with the supporting sensor trends attached, and technicians confirm or reject them, which feeds model improvement.",
      "For the MES, we used a strangler fig approach. New services for work orders, production tracking and quality inspections were built one capability at a time, with an anti-corruption layer keeping the legacy database in sync until each module was retired. Operators moved to tablet-friendly web screens plant by plant, and the old client was switched off after the final module cut over.",
    ],
    features: [
      "Sensor retrofits and OPC UA connectivity for mixed-age equipment",
      "Edge gateways with local buffering and MQTT forwarding",
      "Anomaly detection and remaining-useful-life models for critical assets",
      "Predictive alerts raised as maintenance work orders with evidence attached",
      "Modular MES services for work orders, production counts and quality checks",
      "Strangler fig migration with an anti-corruption layer and plant-by-plant rollout",
    ],
    results: [
      { value: "23%", label: "reduction in unplanned downtime on monitored assets" },
      { value: "4.5x", label: "faster production reports for plant managers" },
      { value: "0", label: "production shifts lost during the MES cutover" },
    ],
    stack: [".NET 8", "C#", "Angular", "SQL Server", "Azure IoT Hub", "Azure Data Explorer", "MQTT", "OPC UA", "Python", "scikit-learn", "Docker", "Azure DevOps"],
  },
];
