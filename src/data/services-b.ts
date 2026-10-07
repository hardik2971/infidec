import type { Service } from "@/lib/types";

export const servicesB: Service[] = [
  {
    slug: "ai-ml-development",
    name: "AI & machine learning development",
    icon: "bot",
    category: "Data & AI",
    short: "Custom ML models for forecasting, classification, vision and recommendations, built to run in production.",
    heroTitle: "AI and machine learning development that reaches production",
    intro:
      "We build machine learning systems that solve a defined business problem, from demand forecasting and fraud scoring to document and image understanding. Every engagement starts with your data and a measurable target, and ends with a monitored model running inside your product or operations.",
    metaTitle: "AI & Machine Learning Development Services",
    metaDescription:
      "Custom AI and machine learning development: forecasting, computer vision, NLP and recommendation models, built with MLOps pipelines and monitored in production.",
    offerings: [
      {
        title: "Predictive analytics and forecasting",
        desc: "Time-series and tabular models for demand, churn, pricing and risk, built with gradient boosting or deep learning and validated against a simple baseline before rollout.",
      },
      {
        title: "Computer vision",
        desc: "Object detection, classification, OCR and visual inspection models trained on your images, optimised for cloud inference or edge devices where latency and bandwidth matter.",
      },
      {
        title: "Natural language processing",
        desc: "Text classification, entity extraction, sentiment and document parsing pipelines that turn emails, tickets, contracts and forms into structured data your systems can act on.",
      },
      {
        title: "Recommendation and personalisation",
        desc: "Collaborative filtering, ranking and embedding-based recommenders for products, content and next-best actions, with offline evaluation and A/B testing hooks built in.",
      },
      {
        title: "MLOps and model deployment",
        desc: "Reproducible training pipelines, model registries, CI/CD for models and drift monitoring, so retraining and releases become routine instead of a manual project each time.",
      },
      {
        title: "AI feasibility and data audits",
        desc: "A short, fixed-scope assessment of your data quality, labelling needs and expected accuracy, so you know whether a model is worth building before committing budget.",
      },
    ],
    process: [
      {
        title: "Problem framing",
        desc: "We define the business decision the model supports, the success metric, the baseline it must beat and the constraints on latency, cost and explainability.",
      },
      {
        title: "Data assessment and preparation",
        desc: "We profile available data, fix quality issues, plan labelling where needed and build feature pipelines that work the same way in training and production.",
      },
      {
        title: "Modelling and evaluation",
        desc: "We train candidate models, compare them on held-out data and business metrics, and review errors with your domain experts before choosing one.",
      },
      {
        title: "Integration and deployment",
        desc: "We package the model as an API or batch job, connect it to your applications and set up the pipelines for retraining and versioned releases.",
      },
      {
        title: "Monitoring and iteration",
        desc: "We track prediction quality, data drift and infrastructure cost in production, and retrain or adjust the model as your data changes.",
      },
    ],
    outcomes: [
      {
        title: "Decisions backed by evidence",
        desc: "Models are measured against a clear baseline and business metric, so you can see what the system adds before and after it goes live.",
      },
      {
        title: "Less manual work",
        desc: "Repetitive classification, extraction and review tasks move to models, with people handling the exceptions the model flags as uncertain.",
      },
      {
        title: "Models that stay accurate",
        desc: "Drift monitoring and automated retraining keep performance from silently degrading as customer behaviour and input data change.",
      },
      {
        title: "Assets you own",
        desc: "You receive the code, trained weights, feature pipelines and documentation, so your team can maintain and extend the system without us.",
      },
    ],
    deliverables: [
      "Problem definition and success-metric document",
      "Data quality report and feature engineering pipelines",
      "Trained, versioned models with evaluation reports",
      "Inference API or batch scoring jobs",
      "MLOps pipeline for training, testing and deployment",
      "Monitoring dashboards for accuracy, drift and cost",
      "Model cards and technical handover documentation",
    ],
    techs: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "XGBoost",
      "Hugging Face Transformers",
      "OpenCV",
      "MLflow",
      "Kubeflow",
      "AWS SageMaker",
      "Azure Machine Learning",
      "Google Vertex AI",
      "FastAPI",
      "Docker",
    ],
    industries: ["healthcare", "fintech", "retail-ecommerce", "manufacturing", "logistics"],
    faqs: [
      {
        q: "How much does a custom machine learning project cost?",
        a: "Cost depends mainly on data readiness, how much labelling is required, the accuracy target and how the model must integrate with existing systems. A feasibility study is a small fixed-price engagement; a production model with MLOps is scoped after that study, once the data and target are known.",
      },
      {
        q: "How long does it take to get a model into production?",
        a: "A feasibility study typically takes two to four weeks. Building, integrating and deploying a first production model typically takes two to four months, depending on data preparation effort and integration complexity.",
      },
      {
        q: "Who owns the models and code you build?",
        a: "You do. Source code, trained model weights, training pipelines and documentation are assigned to you under the contract. We do not reuse your data or models for other clients.",
      },
      {
        q: "What if our data is not good enough?",
        a: "That is what the feasibility stage is for. If the data cannot support the accuracy you need, we tell you, and recommend what to collect or label first. Sometimes a rules-based approach or a simpler model is the better option, and we will say so.",
      },
    ],
  },
  {
    slug: "generative-ai-solutions",
    name: "Generative AI & LLM solutions",
    icon: "sparkles",
    category: "Data & AI",
    short: "RAG assistants, AI agents and copilots built on LLMs, with evaluation and guardrails from day one.",
    heroTitle: "Generative AI and LLM solutions built for real workloads",
    intro:
      "We design and build LLM-powered products: retrieval-augmented assistants over your documents, AI agents that complete multi-step tasks, and copilots embedded in your software. Each system ships with an evaluation suite, guardrails and cost controls, so you can trust its answers and predict its running costs.",
    metaTitle: "Generative AI & LLM Development: RAG, Agents, Copilots",
    metaDescription:
      "Generative AI and LLM development: RAG assistants, AI agents, copilots and fine-tuning, with evaluation suites, guardrails and cost controls built in.",
    offerings: [
      {
        title: "Retrieval-augmented generation (RAG)",
        desc: "Assistants that answer from your documents, wikis and databases with citations, using tuned chunking, hybrid search and re-ranking to keep answers grounded and current.",
      },
      {
        title: "AI agents and workflow automation",
        desc: "Agents that call your APIs and tools to complete multi-step tasks such as triaging tickets, reconciling records or drafting reports, with human approval at the points you choose.",
      },
      {
        title: "Copilots inside your product",
        desc: "In-app assistants that draft, summarise, search and explain in the context of the user's data and permissions, designed with your product and UX teams.",
      },
      {
        title: "Fine-tuning and model customisation",
        desc: "Fine-tuning of open-weight or hosted models when prompting and retrieval are not enough, for consistent output formats, domain language or lower inference cost.",
      },
      {
        title: "LLM evaluation and testing",
        desc: "Test sets, automated scoring and LLM-as-judge pipelines that measure accuracy, groundedness and regressions every time a prompt, model or retrieval setting changes.",
      },
      {
        title: "Guardrails, security and governance",
        desc: "Input and output filtering, PII redaction, prompt-injection defences, access control and audit logging, so generative features meet your security and compliance requirements.",
      },
    ],
    process: [
      {
        title: "Use-case selection",
        desc: "We rank candidate use cases by value, risk and data availability, and agree on what a correct, useful answer looks like for the first one.",
      },
      {
        title: "Prototype and evaluation set",
        desc: "We build a working prototype on your real data alongside a test set of representative questions and expected answers to measure it against.",
      },
      {
        title: "Model and architecture choice",
        desc: "We compare models and retrieval designs on quality, latency, cost and data residency, then choose the simplest setup that meets the target.",
      },
      {
        title: "Production build",
        desc: "We add authentication, permissions-aware retrieval, guardrails, observability, caching and fallbacks, and integrate the system with your applications.",
      },
      {
        title: "Launch and continuous evaluation",
        desc: "We roll out to a pilot group, review real conversations and failure cases, and keep the evaluation suite running as models and content change.",
      },
    ],
    outcomes: [
      {
        title: "Answers you can verify",
        desc: "Grounded responses with source citations let users check the output, and evaluation reports show how often the system gets it right.",
      },
      {
        title: "Faster knowledge work",
        desc: "Staff spend less time searching documents, writing first drafts and moving data between systems, and more time on judgement calls.",
      },
      {
        title: "Predictable running costs",
        desc: "Model routing, caching and token budgets keep per-request costs visible and under control as usage grows.",
      },
      {
        title: "No lock-in to one vendor",
        desc: "A provider-agnostic architecture lets you switch or mix models as prices and capabilities change, without rebuilding the application.",
      },
    ],
    deliverables: [
      "Use-case assessment and solution architecture",
      "Working prototype on your data",
      "Evaluation dataset and automated scoring pipeline",
      "Production RAG, agent or copilot application",
      "Guardrail, PII and access-control configuration",
      "Observability dashboards for quality, latency and token cost",
      "Prompt, retrieval and runbook documentation",
    ],
    techs: [
      "Python",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "OpenAI",
      "Anthropic Claude",
      "AWS Bedrock",
      "Azure OpenAI",
      "Google Vertex AI",
      "Llama",
      "pgvector",
      "Pinecone",
      "Langfuse",
      "Ragas",
    ],
    industries: ["healthcare", "fintech", "education", "retail-ecommerce", "real-estate"],
    faqs: [
      {
        q: "Which LLM should we use, and can we change it later?",
        a: "We choose based on measured quality on your evaluation set, latency, cost and where your data is allowed to be processed. Options include OpenAI, Anthropic Claude, Google Gemini and open-weight models such as Llama. We build behind a model abstraction layer, so switching providers later is a configuration change plus a re-run of the evaluation suite.",
      },
      {
        q: "Will our data be used to train the model provider's models?",
        a: "Not with the enterprise APIs we use by default, such as Azure OpenAI, AWS Bedrock and the OpenAI and Anthropic business APIs, whose terms exclude customer data from training. Where data must stay in your environment, we can deploy open-weight models in your own cloud account.",
      },
      {
        q: "How long does a generative AI project take?",
        a: "A prototype with an evaluation set typically takes three to six weeks. A production system with permissions, guardrails and integrations typically takes two to four months, depending on the number of data sources and systems involved.",
      },
      {
        q: "What drives the cost of an LLM solution?",
        a: "Build cost depends on the number of data sources, integration and permission complexity, and the accuracy bar. Running cost depends on request volume, prompt and context length, and model choice. We estimate both up front and design caching and model routing to keep usage costs down.",
      },
    ],
  },
  {
    slug: "data-engineering-analytics",
    name: "Data engineering & analytics",
    icon: "chart",
    category: "Data & AI",
    short: "Data pipelines, warehouses and dashboards that give every team one reliable version of the numbers.",
    heroTitle: "Data engineering and analytics your teams can trust",
    intro:
      "We build the pipelines, warehouses and semantic layers that turn scattered operational data into reliable reporting. From ingestion and modelling to dashboards and data quality checks, we give your teams consistent metrics and give your AI projects a clean foundation.",
    metaTitle: "Data Engineering & Analytics Services",
    metaDescription:
      "Data engineering and analytics services: ELT pipelines, cloud data warehouses, dbt modelling, streaming and BI dashboards built on Snowflake or Databricks.",
    offerings: [
      {
        title: "Data platform architecture",
        desc: "Design of warehouse or lakehouse platforms on Snowflake, Databricks, BigQuery or Redshift, sized for your data volumes, query patterns, security model and budget.",
      },
      {
        title: "Data pipelines and integration",
        desc: "Batch and incremental ELT pipelines from your databases, SaaS tools and APIs, with orchestration, retries and alerting so loads run without daily manual checks.",
      },
      {
        title: "Real-time streaming",
        desc: "Event pipelines with Kafka or cloud streaming services for use cases that need fresh data, such as fraud signals, inventory levels or live operational dashboards.",
      },
      {
        title: "Data modelling with dbt",
        desc: "Tested, documented dbt models and a shared semantic layer that define metrics once, so finance, sales and product report the same numbers.",
      },
      {
        title: "BI and dashboards",
        desc: "Dashboards and self-service reporting in Power BI, Tableau or Looker, designed around the decisions each team makes rather than every available metric.",
      },
      {
        title: "Data quality and governance",
        desc: "Automated tests, freshness checks, lineage, access policies and a data catalogue, so issues are caught before they reach a report and sensitive fields stay protected.",
      },
    ],
    process: [
      {
        title: "Discovery and source audit",
        desc: "We map your data sources, current reports and the questions teams cannot answer today, and agree on the first set of priority metrics.",
      },
      {
        title: "Platform design",
        desc: "We choose the warehouse, ingestion and orchestration tools, and define the data model, environments, security and cost controls.",
      },
      {
        title: "Pipeline and model build",
        desc: "We build ingestion pipelines and dbt models in iterations, each one delivering a usable dataset that your analysts can validate.",
      },
      {
        title: "Reporting and enablement",
        desc: "We build the first dashboards with the teams who use them and train analysts to extend models and reports on their own.",
      },
      {
        title: "Operate and extend",
        desc: "We monitor pipeline health, data quality and warehouse spend, then add new sources and metrics as requirements grow.",
      },
    ],
    outcomes: [
      {
        title: "One version of the numbers",
        desc: "Shared metric definitions end debates about whose spreadsheet is right and let meetings focus on decisions.",
      },
      {
        title: "Faster answers",
        desc: "Analysts query clean, modelled tables instead of exporting and stitching data by hand, so new questions take hours rather than weeks.",
      },
      {
        title: "Controlled platform costs",
        desc: "Warehouse sizing, incremental models and usage monitoring keep compute spend visible and proportional to value.",
      },
      {
        title: "A foundation for AI",
        desc: "Clean, documented and governed data is the prerequisite for reliable machine learning and generative AI projects.",
      },
    ],
    deliverables: [
      "Data platform architecture and source inventory",
      "Ingestion and orchestration pipelines",
      "dbt project with tests and documentation",
      "Semantic layer with agreed metric definitions",
      "BI dashboards and self-service datasets",
      "Data quality monitoring and alerting",
      "Access policies, lineage and data catalogue",
      "Runbooks and analyst training sessions",
    ],
    techs: [
      "Snowflake",
      "Databricks",
      "Google BigQuery",
      "Amazon Redshift",
      "dbt",
      "Apache Airflow",
      "Apache Kafka",
      "Apache Spark",
      "Fivetran",
      "Airbyte",
      "Power BI",
      "Tableau",
      "Looker",
      "Python",
    ],
    industries: ["retail-ecommerce", "fintech", "logistics", "manufacturing", "healthcare"],
    faqs: [
      {
        q: "Should we use Snowflake, Databricks or BigQuery?",
        a: "It depends on your workloads and existing cloud. Snowflake suits SQL-centric analytics teams, Databricks suits heavy data science and Spark workloads, and BigQuery fits naturally if you already run on Google Cloud. We compare them against your query patterns, skills and cost model before recommending one.",
      },
      {
        q: "How long does it take to set up a modern data platform?",
        a: "A first production slice, with a few core sources, a modelled dataset and initial dashboards, typically takes six to ten weeks. Covering all major sources and departments is usually done in further iterations over several months.",
      },
      {
        q: "What affects the cost of a data engineering project?",
        a: "The number and complexity of data sources, data volume, real-time requirements, data quality issues and the number of reports needed are the main drivers. Ongoing warehouse and tool licensing costs are separate, and we estimate them during design.",
      },
      {
        q: "How do you handle sensitive and personal data?",
        a: "We apply least-privilege access, column-level masking, encryption at rest and in transit, and keep personal data only where it is needed. Pipelines are built to support your obligations under regulations such as GDPR or HIPAA, and access is logged for audit.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps services",
    icon: "cloudbolt",
    category: "Cloud & Ops",
    short: "Cloud architecture, migration, Kubernetes and CI/CD pipelines that make releases routine and spend visible.",
    heroTitle: "Cloud and DevOps services for reliable, frequent releases",
    intro:
      "We design, migrate and run cloud infrastructure on AWS, Azure and Google Cloud, defined as code and deployed through automated pipelines. The result is infrastructure your team can reproduce, release to several times a day and understand on a cost report.",
    metaTitle: "Cloud & DevOps Services: AWS, Azure, GCP",
    metaDescription:
      "Cloud and DevOps services on AWS, Azure and GCP: cloud migration, Kubernetes, Terraform, CI/CD pipelines, observability and cost optimisation.",
    offerings: [
      {
        title: "Cloud architecture and migration",
        desc: "Landing zones, network design and migration plans that move workloads to AWS, Azure or GCP by rehosting, replatforming or refactoring, based on each application's needs.",
      },
      {
        title: "Infrastructure as code",
        desc: "Terraform or Pulumi modules for every environment, reviewed and versioned like application code, so infrastructure changes are repeatable and auditable.",
      },
      {
        title: "CI/CD pipelines",
        desc: "Build, test, security scan and deployment pipelines in GitHub Actions, GitLab CI or Azure DevOps, with blue-green or canary releases and one-click rollback.",
      },
      {
        title: "Kubernetes and containers",
        desc: "Containerisation of services and managed Kubernetes on EKS, AKS or GKE, with autoscaling, GitOps deployment through Argo CD and sensible defaults for security.",
      },
      {
        title: "Observability and SRE",
        desc: "Metrics, logs, traces and alerting with service-level objectives, plus incident runbooks, so problems are detected and diagnosed before customers report them.",
      },
      {
        title: "Cloud cost optimisation",
        desc: "Tagging, rightsizing, reserved capacity and storage lifecycle reviews that make spend attributable to teams and remove resources nobody uses.",
      },
    ],
    process: [
      {
        title: "Assessment",
        desc: "We review your current infrastructure, release process, security posture and cloud bill, and identify the biggest risks and bottlenecks.",
      },
      {
        title: "Target architecture and roadmap",
        desc: "We define the target environment, migration waves or pipeline changes, and sequence the work to reduce risk and deliver early wins.",
      },
      {
        title: "Foundation build",
        desc: "We set up accounts, networking, identity, infrastructure as code and CI/CD so every later change goes through the same controlled path.",
      },
      {
        title: "Migration and rollout",
        desc: "We move workloads or switch services to the new pipelines in planned waves, with rehearsed cutovers and rollback plans for each.",
      },
      {
        title: "Operate and optimise",
        desc: "We monitor reliability and cost, tune scaling and spend, and hand over or co-run operations with your team.",
      },
    ],
    outcomes: [
      {
        title: "Frequent, low-risk releases",
        desc: "Automated testing and deployment turn releases from scheduled events into routine changes that can be rolled back in minutes.",
      },
      {
        title: "Reproducible environments",
        desc: "Infrastructure defined in code removes configuration drift and lets you rebuild any environment from version control.",
      },
      {
        title: "Visible, accountable spend",
        desc: "Cost allocation by team and service shows where money goes and makes optimisation decisions straightforward.",
      },
      {
        title: "Faster incident response",
        desc: "Centralised observability and runbooks shorten the time from alert to diagnosis to fix.",
      },
    ],
    deliverables: [
      "Infrastructure and cost assessment report",
      "Target cloud architecture and migration plan",
      "Terraform modules for all environments",
      "CI/CD pipelines with security scanning",
      "Kubernetes cluster and GitOps configuration",
      "Monitoring, alerting and SLO dashboards",
      "Disaster recovery and backup setup",
      "Operational runbooks and handover sessions",
    ],
    techs: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Terraform",
      "Kubernetes",
      "Docker",
      "Helm",
      "Argo CD",
      "GitHub Actions",
      "GitLab CI",
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "Datadog",
    ],
    industries: ["fintech", "healthcare", "retail-ecommerce", "logistics", "travel-hospitality"],
    faqs: [
      {
        q: "Which cloud provider should we choose?",
        a: "We work with AWS, Azure and Google Cloud and recommend based on your existing contracts, team skills, required managed services and data residency needs. For most companies, staying with the provider your team already knows is the cheapest option unless a specific service justifies a move.",
      },
      {
        q: "How long does a cloud migration take?",
        a: "A small application estate typically moves in six to twelve weeks. Larger estates are migrated in waves over several months, with the first wave chosen to prove the approach on lower-risk workloads.",
      },
      {
        q: "Will we have downtime during migration?",
        a: "We plan cutovers to minimise it, using data replication, parallel running and rehearsed switchovers. Most services can move with little or no downtime; where a short maintenance window is unavoidable, we schedule it with you in advance.",
      },
      {
        q: "Do you provide ongoing DevOps support after setup?",
        a: "Yes. We offer ongoing operations support covering monitoring, patching, cost reviews and pipeline changes, or we can train your team and hand over fully with runbooks. Many clients start with co-managed operations and move to self-managed over time.",
      },
    ],
  },
  {
    slug: "legacy-modernization",
    name: "Legacy application modernization",
    icon: "refresh",
    category: "Cloud & Ops",
    short: "Staged modernization of ageing applications to current frameworks, APIs and cloud, without a risky rewrite.",
    heroTitle: "Legacy application modernization without the big-bang rewrite",
    intro:
      "We modernize ageing applications in stages: replacing outdated frameworks, breaking monoliths into services where it pays off, and moving workloads to the cloud while the business keeps running. Each stage ships working software and reduces risk, rather than betting everything on one cutover date.",
    metaTitle: "Legacy Application Modernization Services",
    metaDescription:
      "Legacy application modernization: code audits, framework upgrades, monolith to microservices, database migration and cloud replatforming in safe stages.",
    offerings: [
      {
        title: "Application and code assessment",
        desc: "Analysis of architecture, code quality, dependencies, security issues and undocumented business rules, producing a ranked list of what to keep, refactor, replace or retire.",
      },
      {
        title: "Framework and platform upgrades",
        desc: "Upgrades from .NET Framework to modern .NET, from older Java and PHP versions, and from AngularJS or jQuery front ends to React or Angular.",
      },
      {
        title: "Monolith decomposition",
        desc: "Gradual extraction of services from a monolith using the strangler fig pattern, starting with the parts that change most often or limit scaling.",
      },
      {
        title: "Database modernization",
        desc: "Migration from legacy or licensed databases to PostgreSQL or managed cloud databases, with schema redesign, data validation and parallel-run reconciliation.",
      },
      {
        title: "API enablement",
        desc: "REST or GraphQL APIs placed in front of legacy systems, so new web, mobile and partner applications can use existing data and logic safely.",
      },
      {
        title: "UI and UX modernization",
        desc: "Redesign of outdated desktop or web interfaces into responsive applications, keeping the workflows power users depend on while removing friction.",
      },
    ],
    process: [
      {
        title: "Discovery and assessment",
        desc: "We study the codebase, infrastructure and usage, interview users and document the business rules hidden in the code.",
      },
      {
        title: "Modernization strategy",
        desc: "We choose an approach per component, whether rehost, replatform, refactor or replace, and sequence the work by value and risk.",
      },
      {
        title: "Safety net",
        desc: "We add automated tests, monitoring and CI/CD around the existing system so changes can be verified before and after each step.",
      },
      {
        title: "Incremental migration",
        desc: "We modernize component by component, running old and new side by side and routing traffic gradually to the new implementation.",
      },
      {
        title: "Decommission and handover",
        desc: "We retire legacy components once replaced, migrate remaining data and hand over documentation for the new system.",
      },
    ],
    outcomes: [
      {
        title: "Lower operational risk",
        desc: "Supported frameworks, current security patches and fewer single points of knowledge reduce the chance of outages and breaches.",
      },
      {
        title: "Faster feature delivery",
        desc: "Cleaner code, automated tests and modern tooling make changes that once took months achievable in normal sprints.",
      },
      {
        title: "Reduced licensing and hosting costs",
        desc: "Moving off end-of-life platforms and licensed databases often removes significant recurring costs.",
      },
      {
        title: "Business continuity throughout",
        desc: "Staged delivery keeps the existing system running while modernization proceeds, with no single high-risk cutover.",
      },
    ],
    deliverables: [
      "Legacy system assessment and risk report",
      "Modernization roadmap with per-component strategy",
      "Documented business rules and data mappings",
      "Automated regression test suite",
      "Modernized application components and APIs",
      "Data migration scripts and reconciliation reports",
      "CI/CD pipelines for the new stack",
      "Architecture and operations documentation",
    ],
    techs: [
      ".NET",
      "Java",
      "Spring Boot",
      "Node.js",
      "React",
      "Angular",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "AWS",
      "Microsoft Azure",
      "Terraform",
      "SonarQube",
      "GitHub Actions",
    ],
    industries: ["manufacturing", "fintech", "healthcare", "logistics", "education"],
    faqs: [
      {
        q: "Should we rewrite the application from scratch?",
        a: "Usually not. Full rewrites tend to take longer than planned and lose business rules nobody documented. We recommend incremental modernization in most cases, and a rewrite only for small systems or where the existing code genuinely cannot be salvaged.",
      },
      {
        q: "How long does legacy modernization take?",
        a: "An assessment and roadmap typically takes three to six weeks. Execution depends on system size and the chosen approach; most projects deliver the first modernized component within a few months and continue in stages after that.",
      },
      {
        q: "Can the old system keep running during modernization?",
        a: "Yes. We run old and new components side by side, route traffic gradually and keep rollback paths open, so users continue working throughout.",
      },
      {
        q: "What if nobody understands the legacy code anymore?",
        a: "This is common. We reverse-engineer behaviour from the code, database and logs, write characterisation tests that capture what the system currently does, and validate findings with your users before changing anything.",
      },
    ],
  },
  {
    slug: "qa-testing",
    name: "QA & software testing",
    icon: "shield",
    category: "Quality & Security",
    short: "Manual and automated testing for web, mobile and APIs, built into your CI pipeline so defects surface early.",
    heroTitle: "QA and software testing that catches defects before users do",
    intro:
      "We plan and run testing across web, mobile and APIs, combining exploratory testing by experienced QA engineers with automated suites that run on every commit. You get clear release-readiness reports and a regression suite your team can keep using.",
    metaTitle: "QA & Software Testing Services: Manual & Automated",
    metaDescription:
      "QA and software testing services: test automation, manual and exploratory testing, API, performance, mobile and accessibility testing built into your CI/CD.",
    offerings: [
      {
        title: "Test automation",
        desc: "Maintainable UI and end-to-end suites in Playwright, Cypress or Selenium, structured with page objects and stable selectors so tests survive UI changes.",
      },
      {
        title: "Manual and exploratory testing",
        desc: "Structured test cases and exploratory sessions by QA engineers who learn your domain and find the edge cases scripted tests miss.",
      },
      {
        title: "API and integration testing",
        desc: "Contract, functional and negative tests for REST and GraphQL APIs and third-party integrations, run automatically in your pipeline.",
      },
      {
        title: "Performance and load testing",
        desc: "Load, stress and soak tests with k6 or JMeter that find capacity limits and bottlenecks before peak traffic does.",
      },
      {
        title: "Mobile app testing",
        desc: "Functional and compatibility testing on real iOS and Android devices and device clouds, with Appium automation for regression coverage.",
      },
      {
        title: "Accessibility and security testing",
        desc: "WCAG 2.2 audits with assistive technologies and automated checks, plus OWASP-based security testing of web applications and APIs.",
      },
    ],
    process: [
      {
        title: "QA assessment",
        desc: "We review your current testing, defect history, release process and risk areas to decide where testing effort matters most.",
      },
      {
        title: "Test strategy and plan",
        desc: "We define test levels, coverage targets, environments, data and tooling, and agree on entry and exit criteria for releases.",
      },
      {
        title: "Test design and automation",
        desc: "We write test cases, build automated suites for stable, high-value flows and connect them to your CI pipeline.",
      },
      {
        title: "Execution and defect management",
        desc: "We run tests each sprint and release, log reproducible defects with evidence in Jira, and verify fixes.",
      },
      {
        title: "Reporting and improvement",
        desc: "We report coverage, defect trends and release readiness, and remove flaky tests and gaps over time.",
      },
    ],
    outcomes: [
      {
        title: "Fewer production defects",
        desc: "Risk-based testing focuses effort on the features where bugs would cost you most.",
      },
      {
        title: "Faster release cycles",
        desc: "Automated regression runs in minutes instead of days of manual checking before each release.",
      },
      {
        title: "Clear release decisions",
        desc: "Release-readiness reports show what was tested, what failed and what risk remains.",
      },
      {
        title: "Developers focused on building",
        desc: "Engineers get precise, reproducible bug reports and spend less time on manual verification.",
      },
    ],
    deliverables: [
      "QA assessment and test strategy",
      "Test plans and test case repository",
      "Automated UI, API and mobile test suites",
      "CI pipeline integration for automated tests",
      "Performance test scripts and results report",
      "Accessibility audit report against WCAG 2.2",
      "Defect reports and release-readiness summaries",
    ],
    techs: [
      "Playwright",
      "Cypress",
      "Selenium",
      "Appium",
      "Postman",
      "REST Assured",
      "k6",
      "Apache JMeter",
      "BrowserStack",
      "axe",
      "OWASP ZAP",
      "Jira",
      "TestRail",
      "GitHub Actions",
    ],
    industries: ["fintech", "healthcare", "retail-ecommerce", "education", "travel-hospitality"],
    faqs: [
      {
        q: "Should we automate all our tests?",
        a: "No. Automation pays off for stable, frequently run flows such as login, checkout and core APIs. New features, usability and complex edge cases are often better covered by exploratory testing. We recommend a mix based on how often each area changes and how costly a failure would be.",
      },
      {
        q: "Can you test software that another team built?",
        a: "Yes. Independent QA is a common engagement. We start with a short assessment of the application and its documentation, then work alongside the development team through your existing tools and ceremonies.",
      },
      {
        q: "How is QA priced?",
        a: "Most clients engage QA engineers on a monthly basis as part of a team, or on a fixed scope for audits such as performance or accessibility testing. Cost depends on the number of platforms, the level of automation and how frequently you release.",
      },
      {
        q: "How do you handle test data and production data?",
        a: "We prefer synthetic or masked data and do not need access to real customer data for most testing. Where production-like data is required, we follow your data-handling policies and work only in approved environments.",
      },
    ],
  },
  {
    slug: "dedicated-development-team",
    name: "Dedicated development teams",
    icon: "users",
    category: "Teams",
    short: "Full-time engineers, designers and QA who work as an extension of your team, under your direction.",
    heroTitle: "Dedicated development teams that work as part of yours",
    intro:
      "We assemble full-time engineering teams matched to your stack and product, who join your tools, standups and planning. You direct the work and priorities; we handle hiring, retention, equipment and delivery oversight, and scale the team up or down as your roadmap changes.",
    metaTitle: "Dedicated Development Teams for Hire",
    metaDescription:
      "Hire a dedicated development team: full-time engineers, designers and QA working in your tools and hours, with flexible scaling and full IP ownership.",
    offerings: [
      {
        title: "Full product teams",
        desc: "Cross-functional teams with developers, a tech lead, QA, design and delivery management that can own a product or a major workstream end to end.",
      },
      {
        title: "Team extension",
        desc: "Individual engineers or small groups who join your existing team to add capacity or skills, working within your processes and code review standards.",
      },
      {
        title: "Specialist roles",
        desc: "Hard-to-hire specialists such as ML engineers, DevOps and SRE, data engineers or mobile developers, added for the length of time you need them.",
      },
      {
        title: "Offshore development centre",
        desc: "A larger long-term team with its own leadership structure, built around your engineering culture, with an option to transfer the team to you later.",
      },
      {
        title: "Technical leadership",
        desc: "Fractional CTO, architect or engineering manager support to set technical direction, review architecture and coach the team on delivery practices.",
      },
      {
        title: "Delivery management",
        desc: "A delivery manager who handles sprint planning, reporting, risk tracking and coordination across time zones, so your product owner can focus on priorities.",
      },
    ],
    process: [
      {
        title: "Requirements discussion",
        desc: "We learn your product, stack, team structure and working style, and define the roles, seniority and time-zone overlap you need.",
      },
      {
        title: "Candidate selection",
        desc: "We shortlist engineers who match, and you interview them and run your own technical assessments before deciding.",
      },
      {
        title: "Onboarding",
        desc: "The team gets access to your tools and codebase, meets your people and agrees on communication, code review and definition of done.",
      },
      {
        title: "Delivery",
        desc: "The team works in your sprints and repositories, with regular demos, progress reports and a delivery manager overseeing quality.",
      },
      {
        title: "Review and scale",
        desc: "We review performance and fit with you regularly, and adjust team size or skills as your roadmap and budget change.",
      },
    ],
    outcomes: [
      {
        title: "Capacity without long hiring cycles",
        desc: "You add experienced engineers in weeks rather than spending months on recruiting each role.",
      },
      {
        title: "Full control of priorities",
        desc: "You direct the backlog and day-to-day work, while we handle employment, retention and administration.",
      },
      {
        title: "Flexible team size",
        desc: "Scale the team up for a major release or down after it, with agreed notice periods instead of hiring and layoff cycles.",
      },
      {
        title: "Knowledge stays with the product",
        desc: "A stable, long-term team accumulates product knowledge, and documentation and handover practices keep it accessible to you.",
      },
    ],
    deliverables: [
      "Team composition and role definitions",
      "Shortlisted candidate profiles for your interviews",
      "Onboarding plan and access checklist",
      "Sprint plans, demos and progress reports",
      "Code in your repositories under your review standards",
      "Monthly performance and delivery reviews",
      "Documentation and knowledge-transfer materials",
    ],
    techs: [
      "React",
      "Next.js",
      "Node.js",
      "Python",
      ".NET",
      "Java",
      "Flutter",
      "React Native",
      "AWS",
      "Microsoft Azure",
      "Jira",
      "GitHub",
      "Slack",
      "Confluence",
    ],
    industries: ["fintech", "healthcare", "retail-ecommerce", "education", "real-estate"],
    faqs: [
      {
        q: "How quickly can a dedicated team start?",
        a: "For common roles, we typically share candidate profiles within one to two weeks, and engineers can start shortly after you approve them. Specialist or senior roles can take longer, and we will tell you the expected timeline up front.",
      },
      {
        q: "Who owns the code the team writes?",
        a: "You do. All code, designs and documentation produced by the team are assigned to you under the contract, and the work lives in your own repositories and tools from day one.",
      },
      {
        q: "What does a dedicated team cost?",
        a: "You pay a monthly rate per team member, which depends on role, seniority and skills. There are no separate recruiting fees. We provide a costed team proposal once we understand the roles you need.",
      },
      {
        q: "What happens if a team member is not the right fit?",
        a: "Tell us and we will replace them. We handle the transition, including overlap time for knowledge transfer, so the team's delivery is not disrupted.",
      },
    ],
  },
];
