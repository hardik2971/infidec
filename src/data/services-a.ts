import type { Service } from "@/lib/types";

export const servicesA: Service[] = [
  {
    slug: "custom-software-development",
    name: "Custom software development",
    icon: "code",
    category: "Build",
    short: "Software built around your workflows, data and growth plans, from first release to long-term support.",
    heroTitle: "Custom software development for products and operations that off-the-shelf tools can't fit",
    intro:
      "We design, build and maintain software shaped around how your business actually runs. Our teams take ownership of architecture, code quality and delivery, so you get a system you can extend for years rather than a prototype you have to rewrite.",
    metaTitle: "Custom Software Development Services",
    metaDescription:
      "Custom software development services: architecture, full-stack engineering, integrations and long-term support for products and internal systems you fully own.",
    offerings: [
      {
        title: "Greenfield product engineering",
        desc: "We take a new product from requirements to production, setting up the architecture, CI/CD pipeline, environments and coding standards the codebase needs to stay maintainable as it grows.",
      },
      {
        title: "Internal tools and back-office systems",
        desc: "We replace spreadsheets and manual handoffs with purpose-built tools for operations, finance and support teams, with role-based access, audit trails and reporting built in.",
      },
      {
        title: "API and systems integration",
        desc: "We connect your software to payment providers, ERPs, CRMs, identity providers and partner systems through documented REST or GraphQL APIs, webhooks and message queues.",
      },
      {
        title: "Legacy modernisation",
        desc: "We migrate ageing applications to current frameworks and cloud infrastructure in stages, using the strangler pattern so the business keeps running while old modules are retired.",
      },
      {
        title: "SaaS platform development",
        desc: "We build multi-tenant SaaS products with subscription billing, tenant isolation, usage metering and admin consoles, designed to scale from early customers to enterprise accounts.",
      },
      {
        title: "Maintenance and continuous improvement",
        desc: "After launch we handle bug fixes, dependency upgrades, security patches and feature work under an agreed service level, with a backlog and release cadence you can see.",
      },
    ],
    process: [
      {
        title: "Discovery and requirements",
        desc: "We interview stakeholders, map current workflows and agree on scope, priorities and success criteria in a written specification.",
      },
      {
        title: "Architecture and planning",
        desc: "We choose the stack, design the data model and integrations, and break the work into a sprint-by-sprint delivery plan.",
      },
      {
        title: "Iterative development",
        desc: "We build in two-week sprints with code review, automated tests and a demo of working software at the end of each sprint.",
      },
      {
        title: "Testing and release",
        desc: "We run regression, performance and user acceptance testing, then deploy to production with monitoring and a rollback plan.",
      },
      {
        title: "Support and evolution",
        desc: "We monitor the live system, fix issues under an agreed SLA and plan the next releases with you from real usage data.",
      },
    ],
    outcomes: [
      {
        title: "Software that fits your process",
        desc: "Your teams work the way the business needs rather than bending their process around the limits of a packaged tool.",
      },
      {
        title: "Full ownership of code and IP",
        desc: "You own the source code, documentation and infrastructure accounts, with no licence fees per seat or vendor lock-in.",
      },
      {
        title: "A codebase that stays maintainable",
        desc: "Clear architecture, automated tests and documentation mean new developers can onboard quickly and changes stay low-risk.",
      },
      {
        title: "Predictable delivery",
        desc: "Sprint demos, a shared backlog and regular progress reports show you exactly what has shipped and what comes next.",
      },
    ],
    deliverables: [
      "Software requirements specification",
      "Architecture and data model documentation",
      "Source code in your own Git repository",
      "Automated unit, integration and end-to-end test suites",
      "CI/CD pipelines and infrastructure as code",
      "API documentation (OpenAPI)",
      "Deployment runbook and admin guide",
      "Post-launch support plan with agreed SLAs",
    ],
    techs: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      ".NET",
      "Java Spring Boot",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
    ],
    industries: ["healthcare", "fintech", "logistics", "manufacturing", "real-estate"],
    faqs: [
      {
        q: "How much does custom software development cost?",
        a: "Cost depends on the number of user roles and features, integrations with third-party systems, compliance requirements and the size of the team. After a short discovery phase we give you a fixed estimate for a defined scope or a monthly rate for a dedicated team, with the assumptions written down.",
      },
      {
        q: "How long does it take to build custom software?",
        a: "A focused first release typically takes 3 to 6 months. Larger platforms with many integrations typically run 6 to 12 months, delivered in increments so you can use parts of the system before the whole roadmap is complete.",
      },
      {
        q: "Who owns the source code and intellectual property?",
        a: "You do. Our contracts assign all IP in the code we write to you, and the code lives in your repository from day one. Open-source libraries we use remain under their own licences, which we list for you.",
      },
      {
        q: "Do you provide support after launch?",
        a: "Yes. We offer maintenance plans that cover monitoring, bug fixes, security updates and ongoing feature development. You can also take the system in-house, and we will run a structured handover with documentation and knowledge-transfer sessions.",
      },
    ],
  },
  {
    slug: "web-application-development",
    name: "Web application development",
    icon: "globe",
    category: "Build",
    short: "Fast, secure web apps, portals and SaaS products built on modern front-end and back-end frameworks.",
    heroTitle: "Web application development for SaaS products, portals and dashboards",
    intro:
      "We build web applications that load fast, work on every screen size and hold up under real traffic. From customer portals to multi-tenant SaaS platforms, we handle front end, back end, infrastructure and the integrations that tie them together.",
    metaTitle: "Web Application Development Services",
    metaDescription:
      "Web application development services for SaaS platforms, customer portals and dashboards, built with React, Next.js, Node.js and .NET on scalable cloud hosting.",
    offerings: [
      {
        title: "SaaS application development",
        desc: "We build subscription products with multi-tenancy, role-based access, Stripe billing, onboarding flows and admin tooling, structured so new modules can be added without destabilising existing ones.",
      },
      {
        title: "Customer and partner portals",
        desc: "We create secure self-service portals where customers, suppliers or partners can view orders, documents, invoices and support tickets, with single sign-on and granular permissions.",
      },
      {
        title: "Progressive web apps",
        desc: "We build PWAs that install from the browser, work offline through service workers and send push notifications, giving you app-like features without separate app store releases.",
      },
      {
        title: "Dashboards and data-heavy interfaces",
        desc: "We design and build analytics dashboards, admin panels and reporting tools that render large datasets with filtering, export and real-time updates over WebSockets.",
      },
      {
        title: "Front-end rebuilds and performance work",
        desc: "We migrate ageing jQuery or AngularJS front ends to React or Next.js and fix Core Web Vitals issues through code splitting, server rendering and image optimisation.",
      },
      {
        title: "Back-end and API development",
        desc: "We design REST and GraphQL APIs, background job processing, caching and authentication layers that serve web, mobile and partner clients from one back end.",
      },
    ],
    process: [
      {
        title: "Scope and user flows",
        desc: "We define user roles, key journeys and functional requirements, and agree on the first release scope.",
      },
      {
        title: "Architecture and design",
        desc: "We select rendering strategy, hosting and data stores, while designers produce wireframes and a clickable prototype.",
      },
      {
        title: "Sprint-based build",
        desc: "Front-end and back-end engineers build features in parallel against a shared API contract, with demos every sprint.",
      },
      {
        title: "QA and hardening",
        desc: "We run cross-browser, accessibility, load and security testing and fix issues before launch.",
      },
      {
        title: "Launch and iteration",
        desc: "We deploy with monitoring and analytics in place, then prioritise improvements based on user behaviour and feedback.",
      },
    ],
    outcomes: [
      {
        title: "Faster page loads",
        desc: "Server rendering, caching and lean bundles keep pages responsive, which matters for both users and search rankings.",
      },
      {
        title: "One codebase, every device",
        desc: "Responsive layouts and PWA features reach desktop, tablet and mobile users without maintaining separate apps.",
      },
      {
        title: "Room to scale",
        desc: "Stateless services, managed databases and autoscaling infrastructure handle traffic growth without a rebuild.",
      },
      {
        title: "Security built in",
        desc: "We follow OWASP guidance for authentication, input validation, secrets management and dependency scanning from the first sprint.",
      },
    ],
    deliverables: [
      "User flows, wireframes and clickable prototype",
      "Responsive front end with a reusable component library",
      "Back-end services and documented APIs",
      "Automated test suites and CI/CD pipeline",
      "Cloud hosting setup with staging and production environments",
      "Accessibility and performance audit reports",
      "Monitoring, logging and analytics configuration",
    ],
    techs: [
      "React",
      "Next.js",
      "Angular",
      "Vue.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      ".NET",
      "Python Django",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Vercel",
    ],
    industries: ["fintech", "education", "real-estate", "travel-hospitality", "healthcare"],
    faqs: [
      {
        q: "What drives the cost of a web application?",
        a: "The main drivers are the number of user roles and screens, the complexity of business logic, third-party integrations, real-time features and any compliance needs such as HIPAA or PCI DSS. We estimate after a scoping workshop and break the cost down by feature so you can decide what goes into the first release.",
      },
      {
        q: "How long does it take to build a web application?",
        a: "A minimum viable product typically takes 10 to 16 weeks. A full-featured SaaS platform or enterprise portal typically takes 4 to 9 months, depending on integrations and the number of user roles.",
      },
      {
        q: "Should we use React, Angular or something else?",
        a: "We recommend a stack based on your team's existing skills, hiring market, performance needs and integration requirements. For most new products we use React with Next.js and a Node.js or .NET back end, but we work in Angular and Vue.js when they suit the project better.",
      },
      {
        q: "Will we own the code and hosting accounts?",
        a: "Yes. Code is committed to your repository and infrastructure runs in cloud accounts registered to your company. All IP transfers to you under our contract.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile app development",
    icon: "mobile",
    category: "Build",
    short: "Native and cross-platform iOS and Android apps, from first release through App Store updates.",
    heroTitle: "Mobile app development for iOS and Android",
    intro:
      "We build mobile apps that people keep on their phones: fast to open, reliable offline and easy to use. Our teams work in Swift, Kotlin, Flutter and React Native, and we recommend native or cross-platform based on your features, budget and roadmap.",
    metaTitle: "Mobile App Development Services for iOS and Android",
    metaDescription:
      "Mobile app development services for iOS and Android: native Swift and Kotlin or cross-platform Flutter and React Native apps, with back ends and store releases.",
    offerings: [
      {
        title: "Native iOS development",
        desc: "We build iPhone and iPad apps in Swift and SwiftUI that use platform features such as Face ID, HealthKit, Apple Pay, widgets and background processing.",
      },
      {
        title: "Native Android development",
        desc: "We build Android apps in Kotlin and Jetpack Compose, tested across a range of device sizes and OS versions, with support for Google Pay, Wear OS and background services.",
      },
      {
        title: "Cross-platform apps",
        desc: "We use Flutter or React Native to ship iOS and Android apps from one codebase, which reduces build and maintenance effort when platform-specific features are limited.",
      },
      {
        title: "Mobile back ends and APIs",
        desc: "We build the APIs, push notification services, authentication and offline sync logic that mobile apps depend on, using Node.js, .NET or Firebase.",
      },
      {
        title: "App modernisation",
        desc: "We take over existing apps, fix stability issues, upgrade outdated SDKs and migrate legacy Objective-C or Java code to Swift and Kotlin incrementally.",
      },
      {
        title: "Store release and maintenance",
        desc: "We manage App Store and Google Play submissions, review guidelines, phased rollouts and OS version updates so your app keeps working after each new release.",
      },
    ],
    process: [
      {
        title: "Product definition",
        desc: "We define target users, core features and platform requirements, and decide between native and cross-platform.",
      },
      {
        title: "UX and UI design",
        desc: "Designers produce wireframes and high-fidelity screens in Figma that follow Apple and Material Design guidelines.",
      },
      {
        title: "Development sprints",
        desc: "We build the app and its back end in sprints, sharing TestFlight and Firebase App Distribution builds for review.",
      },
      {
        title: "Device testing",
        desc: "We test on real devices and cloud device farms for performance, battery use, offline behaviour and accessibility.",
      },
      {
        title: "Store launch and updates",
        desc: "We prepare store listings, submit for review, monitor crash reports and ship regular updates.",
      },
    ],
    outcomes: [
      {
        title: "Stable, well-rated apps",
        desc: "Crash monitoring, automated testing and careful release management reduce the issues that lead to poor store reviews.",
      },
      {
        title: "The right platform choice",
        desc: "We recommend native or cross-platform based on your feature list and budget, so you avoid paying for a rewrite later.",
      },
      {
        title: "Direct customer engagement",
        desc: "Push notifications, deep links and in-app messaging give you a channel to reach customers on their own devices.",
      },
      {
        title: "Lower long-term maintenance",
        desc: "Modular architecture and CI/CD pipelines keep OS upgrades and new features manageable as the app grows.",
      },
    ],
    deliverables: [
      "Wireframes and high-fidelity designs in Figma",
      "iOS and Android app source code",
      "Back-end services and API documentation",
      "Automated tests and CI/CD for mobile builds",
      "Crash reporting and analytics setup",
      "App Store and Google Play listings and submissions",
      "Release and maintenance plan",
    ],
    techs: [
      "Swift",
      "SwiftUI",
      "Kotlin",
      "Jetpack Compose",
      "Flutter",
      "React Native",
      "Firebase",
      "Node.js",
      "GraphQL",
      "Fastlane",
      "Bitrise",
      "Sentry",
    ],
    industries: ["healthcare", "fintech", "retail-ecommerce", "travel-hospitality", "logistics"],
    faqs: [
      {
        q: "Should we build native or cross-platform?",
        a: "Cross-platform with Flutter or React Native suits most business apps and lets you ship to both stores from one codebase. Native Swift and Kotlin make more sense when the app relies heavily on device hardware, complex animations or platform-specific features. We recommend one after reviewing your feature list.",
      },
      {
        q: "How much does a mobile app cost?",
        a: "Cost depends on the number of screens and features, whether you need one or both platforms, back-end complexity, integrations such as payments or maps, and offline requirements. We provide an itemised estimate after a scoping session.",
      },
      {
        q: "How long does mobile app development take?",
        a: "A first version typically takes 3 to 5 months including design, development, testing and store review. Apps with complex back ends or regulatory requirements typically take longer.",
      },
      {
        q: "Do you handle App Store and Google Play submission?",
        a: "Yes. We prepare store listings, privacy disclosures and builds, submit them under your developer accounts and handle any review feedback. The apps are published under your company name, and you keep full ownership.",
      },
    ],
  },
  {
    slug: "enterprise-software-solutions",
    name: "Enterprise software solutions",
    icon: "building",
    category: "Build",
    short: "ERP, CRM, portals and workflow automation that connect departments and remove manual work.",
    heroTitle: "Enterprise software solutions: ERP, CRM, portals and workflow automation",
    intro:
      "We build and integrate the systems that run your operations, from custom ERP modules and CRM platforms to employee portals and automated approval workflows. Our focus is on clean data flow between systems, strong access control and software your teams will actually adopt.",
    metaTitle: "Enterprise Software Development: ERP, CRM & Portals",
    metaDescription:
      "Enterprise software development for custom ERP, CRM, employee and partner portals and workflow automation, integrated with SAP, Salesforce and Microsoft 365.",
    offerings: [
      {
        title: "Custom ERP modules",
        desc: "We build inventory, procurement, production planning and finance modules tailored to your processes, either as a standalone ERP or as extensions to SAP, Oracle or Microsoft Dynamics 365.",
      },
      {
        title: "CRM development and customisation",
        desc: "We build custom CRMs or extend Salesforce and Dynamics 365 with tailored objects, pipelines, automation rules and integrations with marketing, billing and support tools.",
      },
      {
        title: "Employee and partner portals",
        desc: "We create intranets, HR self-service portals, dealer portals and supplier portals with single sign-on through Microsoft Entra ID or Okta and permissions mapped to your organisation.",
      },
      {
        title: "Workflow and approval automation",
        desc: "We digitise approval chains, document routing and repetitive back-office tasks using workflow engines such as Camunda, Power Automate or custom-built rule engines.",
      },
      {
        title: "Enterprise integration",
        desc: "We connect ERPs, CRMs, HR systems and data warehouses through APIs, middleware and event streaming so that data is entered once and stays consistent.",
      },
      {
        title: "Reporting and business intelligence",
        desc: "We consolidate data from operational systems into dashboards in Power BI or custom web interfaces, giving managers current figures without manual spreadsheet work.",
      },
    ],
    process: [
      {
        title: "Process mapping",
        desc: "We document current workflows, systems and pain points with each department and identify what to automate first.",
      },
      {
        title: "Solution design",
        desc: "We decide what to build, buy or extend, and design the data model, integrations, roles and permissions.",
      },
      {
        title: "Phased build",
        desc: "We deliver module by module, starting with the highest-value workflow, and demo each increment to process owners.",
      },
      {
        title: "Data migration and rollout",
        desc: "We migrate and validate legacy data, run parallel operation where needed and train users department by department.",
      },
      {
        title: "Adoption and support",
        desc: "We track usage, collect feedback, fix issues and extend the system as processes change.",
      },
    ],
    outcomes: [
      {
        title: "Less manual data entry",
        desc: "Integrated systems remove re-keying between tools and the errors that come with it.",
      },
      {
        title: "One version of the truth",
        desc: "Consistent data across finance, sales and operations means reports match and decisions rest on the same figures.",
      },
      {
        title: "Faster approvals",
        desc: "Automated routing, reminders and audit trails shorten approval cycles and make bottlenecks visible.",
      },
      {
        title: "Controlled access",
        desc: "Role-based permissions, single sign-on and audit logs support internal controls and compliance reviews.",
      },
    ],
    deliverables: [
      "Current-state and target-state process maps",
      "Solution architecture and integration design",
      "Custom modules, portals or platform extensions",
      "Integration services and data synchronisation jobs",
      "Data migration scripts and validation reports",
      "User training materials and admin documentation",
      "Role and permission matrix",
      "Support and enhancement plan",
    ],
    techs: [
      ".NET",
      "Java Spring Boot",
      "Angular",
      "React",
      "SAP",
      "Salesforce",
      "Microsoft Dynamics 365",
      "Power Automate",
      "Power BI",
      "Camunda",
      "Apache Kafka",
      "Microsoft Entra ID",
      "SQL Server",
      "Azure",
    ],
    industries: ["manufacturing", "logistics", "healthcare", "real-estate", "retail-ecommerce"],
    faqs: [
      {
        q: "Should we build a custom ERP or extend an existing platform?",
        a: "If a platform such as SAP, Dynamics 365 or Odoo covers most of your processes, extending it is usually cheaper and faster. Custom development makes sense when your core workflows are a competitive advantage or when licensing and customisation costs outweigh the benefits. We assess both options during discovery.",
      },
      {
        q: "How long does an enterprise software project take?",
        a: "A single workflow or portal typically takes 2 to 4 months. A multi-module ERP or CRM rollout typically runs 6 to 18 months, delivered in phases so departments start using parts of the system early.",
      },
      {
        q: "How do you handle migration from our existing systems?",
        a: "We map legacy data to the new model, write and test migration scripts, run trial migrations on copies of production data and reconcile the results with your team before cut-over. Where risk is high, we run old and new systems in parallel for a defined period.",
      },
      {
        q: "Can you integrate with the tools we already use?",
        a: "Yes. We regularly integrate with SAP, Salesforce, Microsoft 365, HR and payroll systems, accounting software and data warehouses through their APIs or middleware. Where a system has no API, we evaluate file-based exchange or database-level integration.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    name: "eCommerce development",
    icon: "cart",
    category: "Build",
    short: "B2C and B2B online stores on Shopify, Adobe Commerce or headless stacks, built to convert and scale.",
    heroTitle: "eCommerce development for B2C and B2B brands",
    intro:
      "We build online stores that load quickly, make products easy to find and connect cleanly to your inventory, ERP and fulfilment systems. Whether you need a Shopify Plus theme, an Adobe Commerce build or a headless storefront, we choose the platform that fits your catalogue and growth plans.",
    metaTitle: "eCommerce Development Services: Shopify, Headless",
    metaDescription:
      "eCommerce development services for Shopify Plus, Adobe Commerce and headless storefronts, with payments, ERP integration, platform migration and speed tuning.",
    offerings: [
      {
        title: "Shopify and Shopify Plus stores",
        desc: "We build custom Shopify themes, private apps and checkout extensions, and configure Shopify Markets for multi-currency and multi-language selling, keeping the store easy for your team to manage day to day.",
      },
      {
        title: "Adobe Commerce and Magento development",
        desc: "We build and maintain Adobe Commerce stores with custom modules, complex catalogues, B2B features and performance tuning for large product ranges, plus security patching and version upgrades.",
      },
      {
        title: "Headless commerce",
        desc: "We pair a commerce back end such as Shopify, commercetools or BigCommerce with a Next.js storefront and a headless CMS, giving you full design control and fast page loads.",
      },
      {
        title: "B2B commerce portals",
        desc: "We build ordering portals with customer-specific pricing, quick order forms, quote requests, credit limits and integration with your ERP for live stock and invoicing.",
      },
      {
        title: "Platform migration",
        desc: "We move stores between platforms, migrating products, customers and order history while preserving URL structures and 301 redirects to protect search rankings and avoid downtime at cut-over.",
      },
      {
        title: "Integrations and marketplaces",
        desc: "We connect your store to payment gateways, ERPs, warehouse and shipping systems, PIMs and marketplaces such as Amazon so orders and stock stay in sync.",
      },
    ],
    process: [
      {
        title: "Commerce audit and goals",
        desc: "We review your catalogue, traffic, conversion funnel and back-office systems, and set measurable goals for the build.",
      },
      {
        title: "Platform and architecture choice",
        desc: "We recommend a platform and integration approach based on catalogue size, B2B needs, budget and team skills.",
      },
      {
        title: "Design and build",
        desc: "We design product, category and checkout pages, then develop the storefront, custom features and integrations.",
      },
      {
        title: "Data migration and testing",
        desc: "We migrate catalogue and customer data, set up redirects and test checkout, payments and order flows end to end.",
      },
      {
        title: "Launch and optimisation",
        desc: "We launch with analytics and monitoring in place, then run conversion and speed improvements based on real data.",
      },
    ],
    outcomes: [
      {
        title: "Faster storefronts",
        desc: "Optimised themes, image handling and caching keep product and category pages quick, which supports both conversion and SEO.",
      },
      {
        title: "Fewer manual order tasks",
        desc: "Integrated inventory, fulfilment and accounting remove copy-paste work between your store and back-office systems.",
      },
      {
        title: "A platform you can grow on",
        desc: "The right platform choice supports new markets, channels and catalogue growth without a replatform in two years.",
      },
      {
        title: "Protected search traffic",
        desc: "Careful URL mapping, redirects and structured data during migration help preserve the organic rankings you already have.",
      },
    ],
    deliverables: [
      "Platform recommendation and solution architecture",
      "Storefront design for key page templates",
      "Custom theme, modules or headless storefront code",
      "Payment, shipping and ERP integrations",
      "Product, customer and order data migration",
      "URL redirect map and SEO configuration",
      "Analytics and conversion tracking setup",
      "Admin training and operations guide",
    ],
    techs: [
      "Shopify Plus",
      "Adobe Commerce (Magento)",
      "BigCommerce",
      "commercetools",
      "WooCommerce",
      "Next.js",
      "React",
      "Contentful",
      "Algolia",
      "Stripe",
      "Adyen",
      "Klaviyo",
      "Google Analytics 4",
    ],
    industries: ["retail-ecommerce", "manufacturing", "travel-hospitality", "education"],
    faqs: [
      {
        q: "Which eCommerce platform should we choose?",
        a: "Shopify Plus suits most direct-to-consumer brands that want low maintenance. Adobe Commerce fits large or complex catalogues and heavy B2B requirements. Headless commerce makes sense when you need full control over the front end or sell across many channels. We recommend after reviewing your catalogue, integrations and budget.",
      },
      {
        q: "How much does an eCommerce website cost?",
        a: "Cost depends on the platform and licence, the amount of custom design, the number of integrations with ERP, PIM or warehouse systems, B2B features and the volume of data to migrate. We provide a fixed-scope estimate after an audit.",
      },
      {
        q: "How long does an eCommerce build or migration take?",
        a: "A Shopify store with a custom theme typically takes 8 to 14 weeks. Adobe Commerce, headless or B2B builds with several integrations typically take 4 to 8 months.",
      },
      {
        q: "Will we lose search rankings when we migrate platforms?",
        a: "A migration always carries some risk, but we reduce it by mapping every existing URL to its new location, setting up 301 redirects, preserving metadata and structured data, and monitoring Google Search Console closely after launch.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX design",
    icon: "palette",
    category: "Design",
    short: "Research-led UX and interface design for web and mobile products, delivered as dev-ready Figma files.",
    heroTitle: "UI/UX design for web and mobile products",
    intro:
      "We design products that people can understand and use without a manual. Our designers combine user research, information architecture and visual design, and they work alongside our engineers so that what you approve in Figma is what ships.",
    metaTitle: "UI/UX Design Services for Web and Mobile Apps",
    metaDescription:
      "UI/UX design services: user research, wireframes, prototypes, usability testing and design systems in Figma for web apps, mobile apps and SaaS products.",
    offerings: [
      {
        title: "User research",
        desc: "We run stakeholder workshops, user interviews, surveys and analytics reviews to understand who your users are, what they need and where the current product lets them down.",
      },
      {
        title: "UX audits",
        desc: "We review your existing product against usability heuristics, accessibility standards and analytics data, then deliver a prioritised list of issues with recommended fixes.",
      },
      {
        title: "Information architecture and wireframes",
        desc: "We structure navigation, content and user flows, then produce low-fidelity wireframes to agree on layout and functionality before visual design begins.",
      },
      {
        title: "Visual interface design",
        desc: "We create high-fidelity screens for web and mobile that reflect your brand, follow platform conventions and cover empty, loading and error states.",
      },
      {
        title: "Prototyping and usability testing",
        desc: "We build clickable Figma prototypes and test them with real users, so navigation and task-completion problems surface before any code is written and changes are still cheap.",
      },
      {
        title: "Design systems",
        desc: "We build component libraries with tokens, variants and usage guidelines in Figma, matched to a coded component library such as Storybook for consistent, faster delivery.",
      },
    ],
    process: [
      {
        title: "Research and discovery",
        desc: "We gather business goals, user insights and analytics data to define the problems the design needs to solve.",
      },
      {
        title: "Structure and flows",
        desc: "We map user journeys, information architecture and task flows, and validate them with stakeholders.",
      },
      {
        title: "Wireframes and prototypes",
        desc: "We produce wireframes, then interactive prototypes for the key journeys.",
      },
      {
        title: "Usability testing",
        desc: "We test prototypes with representative users, analyse the findings and revise the designs.",
      },
      {
        title: "Visual design and handoff",
        desc: "We finalise high-fidelity screens and the design system, then hand off annotated files and support developers during build.",
      },
    ],
    outcomes: [
      {
        title: "Fewer usability problems at launch",
        desc: "Testing prototypes with users catches confusing flows while changes are still cheap.",
      },
      {
        title: "Less rework in development",
        desc: "Clear specifications, component states and developer handoff reduce back-and-forth between design and engineering.",
      },
      {
        title: "A consistent product",
        desc: "A shared design system keeps new features visually and behaviourally consistent as more teams contribute.",
      },
      {
        title: "Accessible by design",
        desc: "We design to WCAG 2.2 AA contrast, focus and target-size requirements so the product works for more people.",
      },
    ],
    deliverables: [
      "User research findings and personas",
      "Customer journey maps and user flows",
      "Information architecture and sitemap",
      "Wireframes for key screens",
      "Interactive Figma prototypes",
      "Usability test report with recommendations",
      "High-fidelity UI designs for all states",
      "Design system and component library",
    ],
    techs: [
      "Figma",
      "FigJam",
      "Framer",
      "Adobe Illustrator",
      "Adobe After Effects",
      "Lottie",
      "Maze",
      "Hotjar",
      "Miro",
      "Storybook",
    ],
    industries: ["healthcare", "fintech", "education", "retail-ecommerce", "travel-hospitality"],
    faqs: [
      {
        q: "What does UI/UX design cost?",
        a: "Cost depends on the number of screens and user journeys, how much research and usability testing you need, and whether you need a full design system. A UX audit is a smaller, fixed-scope engagement, while designing a new product end to end is a larger one. We quote after a short scoping call.",
      },
      {
        q: "How long does the design phase take?",
        a: "A UX audit typically takes 2 to 3 weeks. Designing a new product's first release, including research, prototyping and testing, typically takes 6 to 12 weeks, and design then continues alongside development.",
      },
      {
        q: "Do you work with our in-house developers?",
        a: "Yes. We deliver annotated Figma files, design tokens and component specifications, and we join sprint ceremonies to answer questions while your developers build. You can also have our engineers build the designs.",
      },
      {
        q: "Who owns the design files?",
        a: "You do. All design files, research materials and assets are transferred to your Figma workspace and become your property under our contract.",
      },
    ],
  },
  {
    slug: "product-discovery-mvp",
    name: "Product discovery & MVP development",
    icon: "compass",
    category: "Design",
    short: "Validate the idea, define the scope and launch a focused MVP that real users can test.",
    heroTitle: "Product discovery and MVP development",
    intro:
      "We help founders and product teams test an idea before committing a full budget to it. A structured discovery phase defines the problem, the users and the smallest product worth building, and our team then designs and ships that MVP so you can learn from real usage.",
    metaTitle: "Product Discovery & MVP Development Services",
    metaDescription:
      "Product discovery and MVP development: validate your idea, prioritise features, prototype and launch a focused minimum viable product that real users can test.",
    offerings: [
      {
        title: "Discovery workshops",
        desc: "We run structured sessions with founders and stakeholders to define the problem, target users, value proposition, assumptions and the metrics that will show whether the product works.",
      },
      {
        title: "Market and competitor research",
        desc: "We review competing products, pricing models and user reviews to find gaps in the market and inform your positioning, pricing and feature priorities.",
      },
      {
        title: "Feature prioritisation and roadmap",
        desc: "We use methods such as user story mapping and MoSCoW to separate must-have features from later releases and produce a realistic MVP scope and roadmap.",
      },
      {
        title: "Clickable prototypes",
        desc: "We build interactive prototypes in Figma that you can test with users and show to investors before any production code is written.",
      },
      {
        title: "Technical feasibility and architecture",
        desc: "We assess technical risks, third-party dependencies and integration needs, and recommend an architecture that is quick to build but will not need rewriting once you find traction.",
      },
      {
        title: "MVP build and launch",
        desc: "We design, develop, test and release the MVP with analytics in place, so you can measure activation, retention and feature usage from day one.",
      },
    ],
    process: [
      {
        title: "Frame the problem",
        desc: "We agree on the business goal, target users, key assumptions and how success will be measured.",
      },
      {
        title: "Research and validate",
        desc: "We interview potential users and review the market to test the riskiest assumptions.",
      },
      {
        title: "Define and prototype",
        desc: "We prioritise features, write user stories and build a clickable prototype for user feedback.",
      },
      {
        title: "Build the MVP",
        desc: "We develop the agreed scope in short sprints, demoing working software every one to two weeks.",
      },
      {
        title: "Launch and learn",
        desc: "We release to early users, track product metrics and plan the next iteration from the evidence.",
      },
    ],
    outcomes: [
      {
        title: "Lower risk before major spend",
        desc: "Testing assumptions with users and prototypes shows whether an idea holds up before you fund a full build.",
      },
      {
        title: "A clear, defensible scope",
        desc: "A prioritised backlog and roadmap give you a plan you can share with investors, stakeholders and future hires.",
      },
      {
        title: "Faster time to market",
        desc: "A focused MVP gets a working product in front of users sooner than building every feature at once.",
      },
      {
        title: "Decisions based on evidence",
        desc: "Product analytics and user feedback from launch tell you what to build next instead of relying on guesswork.",
      },
    ],
    deliverables: [
      "Problem statement and value proposition",
      "User personas and journey maps",
      "Competitor and market analysis",
      "Prioritised feature backlog and product roadmap",
      "Clickable Figma prototype",
      "Technical architecture and cost estimate",
      "Production-ready MVP with source code",
      "Analytics dashboard and launch plan",
    ],
    techs: [
      "Figma",
      "Miro",
      "Jira",
      "React",
      "Next.js",
      "React Native",
      "Flutter",
      "Node.js",
      "Supabase",
      "Firebase",
      "PostgreSQL",
      "Vercel",
      "PostHog",
      "Mixpanel",
    ],
    industries: ["fintech", "healthcare", "education", "real-estate", "travel-hospitality"],
    faqs: [
      {
        q: "How long do discovery and MVP development take?",
        a: "A discovery phase typically takes 2 to 4 weeks. An MVP built on the resulting scope typically takes 8 to 16 weeks, depending on the number of user roles, integrations and platforms.",
      },
      {
        q: "What does an MVP cost?",
        a: "Cost depends on the features in scope, whether you need web, mobile or both, third-party integrations and any compliance needs. Discovery is a fixed-price engagement, and at its end you receive a detailed estimate for the MVP based on the agreed scope.",
      },
      {
        q: "Can we skip discovery and go straight to development?",
        a: "If you already have validated requirements, designs and a clear scope, yes. If not, a short discovery phase usually saves money by cutting features that users do not need and surfacing technical risks before they become expensive.",
      },
      {
        q: "Will the MVP code be thrown away later?",
        a: "We build MVPs with production-grade practices such as version control, automated tests and a sensible architecture, so the codebase can grow with the product. Some parts may be reworked as you scale, but a rewrite should not be necessary.",
      },
    ],
  },
  {
    slug: "it-consulting",
    name: "IT consulting & digital transformation",
    icon: "idea",
    category: "Teams",
    short: "Technology strategy, architecture reviews and modernisation roadmaps tied to business goals.",
    heroTitle: "IT consulting and digital transformation",
    intro:
      "We help leadership teams decide what to build, buy, modernise or retire. Our consultants are practising architects and engineers, so recommendations come with realistic estimates, sequencing and the option for our teams to deliver them.",
    metaTitle: "IT Consulting & Digital Transformation Services",
    metaDescription:
      "IT consulting and digital transformation services: technology strategy, architecture reviews, cloud and legacy modernisation roadmaps and vendor selection.",
    offerings: [
      {
        title: "Technology strategy and roadmaps",
        desc: "We assess your current systems, team and business goals, then produce a prioritised technology roadmap with costs, dependencies and sequencing over 12 to 36 months.",
      },
      {
        title: "Architecture and code reviews",
        desc: "We review architecture, code quality, security and infrastructure, and report on risks, technical debt and the changes that will have the most impact.",
      },
      {
        title: "Legacy modernisation planning",
        desc: "We evaluate rehosting, replatforming, refactoring and replacement options for each legacy system and recommend a phased migration plan that limits business disruption.",
      },
      {
        title: "Cloud strategy and migration planning",
        desc: "We assess workloads for cloud readiness, compare AWS, Azure and Google Cloud options, estimate running costs and design the landing zone and migration waves.",
      },
      {
        title: "Software vendor selection",
        desc: "We define requirements, shortlist vendors, run structured evaluations and demos, and give you an independent recommendation for ERP, CRM or other packaged software.",
      },
      {
        title: "Process automation assessment",
        desc: "We identify manual, repetitive processes across departments and estimate the effort and benefit of automating them through workflow tools, integrations or AI.",
      },
    ],
    process: [
      {
        title: "Stakeholder alignment",
        desc: "We interview leadership and department heads to understand goals, constraints and priorities.",
      },
      {
        title: "Current-state assessment",
        desc: "We review systems, architecture, data, processes, costs and team capabilities.",
      },
      {
        title: "Options analysis",
        desc: "We evaluate approaches against cost, risk, timeline and business value, and discuss trade-offs with you.",
      },
      {
        title: "Roadmap and business case",
        desc: "We produce a phased roadmap with budgets, resourcing and measurable milestones.",
      },
      {
        title: "Delivery support",
        desc: "We help execute the plan through governance, architecture oversight or our own delivery teams.",
      },
    ],
    outcomes: [
      {
        title: "Clear priorities",
        desc: "A sequenced roadmap tells you what to do first and what can wait, based on value and risk.",
      },
      {
        title: "Informed investment decisions",
        desc: "Cost estimates and options analysis help you approve budgets with a clear view of the trade-offs.",
      },
      {
        title: "Reduced technical risk",
        desc: "Architecture and security reviews surface problems before they turn into outages, breaches or costly rewrites.",
      },
      {
        title: "Independent advice",
        desc: "Vendor and platform recommendations are based on your requirements, not on reseller commissions.",
      },
    ],
    deliverables: [
      "Current-state assessment report",
      "Architecture and technical debt review",
      "Options analysis with cost and risk comparison",
      "Target-state architecture",
      "Phased technology roadmap",
      "Business case and budget estimates",
      "Vendor evaluation matrix",
    ],
    techs: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Kubernetes",
      "Terraform",
      "SAP",
      "Salesforce",
      "Microsoft Dynamics 365",
      "ServiceNow",
      "Power BI",
      "SonarQube",
      "Jira",
    ],
    industries: ["manufacturing", "healthcare", "logistics", "fintech", "retail-ecommerce"],
    faqs: [
      {
        q: "How is an IT consulting engagement priced?",
        a: "Most assessments and roadmap projects are fixed-price, based on the number of systems, departments and stakeholders involved. Ongoing advisory and architecture oversight are usually billed as a monthly retainer.",
      },
      {
        q: "How long does a technology assessment take?",
        a: "A focused architecture or code review typically takes 2 to 4 weeks. A company-wide assessment and digital transformation roadmap typically takes 6 to 10 weeks.",
      },
      {
        q: "Do we have to use INFIDEC to implement the recommendations?",
        a: "No. You own the reports and roadmap and can deliver them with your own team or another partner. Many clients do ask us to deliver some or all of the work, and we can also provide architecture oversight while others build.",
      },
      {
        q: "Are your recommendations vendor-neutral?",
        a: "Yes. We do not earn commissions from software vendors, and we recommend platforms based on your requirements, existing skills and total cost of ownership.",
      },
    ],
  },
];
