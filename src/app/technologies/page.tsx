import type { Metadata } from "next";
import { Button, CtaBand, PageHero, Section, SectionHeading } from "@/components/ui";
import { StackLayers } from "@/components/infographics";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Technologies: Our Software Development Tech Stack",
  description:
    "React, Next.js, Node.js, .NET, Python, Flutter, AWS, Azure, Kubernetes, PyTorch and LLM tooling. See the technologies INFIDEC engineers use and why.",
  path: "/technologies",
});

const groups: { name: string; why: string; items: string[] }[] = [
  {
    name: "Frontend",
    why: "Fast, accessible interfaces with strong typing and server rendering for SEO.",
    items: ["React", "Next.js", "Angular", "Vue.js", "Nuxt", "TypeScript", "Tailwind CSS", "Redux Toolkit", "TanStack Query", "Storybook"],
  },
  {
    name: "Backend",
    why: "Well-supported frameworks with large hiring markets and long-term support releases.",
    items: ["Node.js", "NestJS", ".NET 8", "ASP.NET Core", "Java Spring Boot", "Python", "Django", "FastAPI", "Go", "PHP Laravel", "GraphQL", "gRPC"],
  },
  {
    name: "Mobile",
    why: "Native where performance or device APIs demand it, cross-platform where speed and one codebase matter more.",
    items: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "Flutter", "React Native", "Expo", "Firebase"],
  },
  {
    name: "Databases and messaging",
    why: "Chosen by access pattern: relational for integrity, document and search engines where they fit.",
    items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis", "Elasticsearch", "DynamoDB", "Apache Kafka", "RabbitMQ"],
  },
  {
    name: "Data and analytics",
    why: "Modern ELT pipelines and governed warehouses that analysts and ML teams can trust.",
    items: ["Snowflake", "Databricks", "BigQuery", "dbt", "Apache Airflow", "Apache Spark", "Power BI", "Looker", "Metabase"],
  },
  {
    name: "AI and machine learning",
    why: "Model-agnostic tooling with evaluation and guardrails, so you can switch providers as the market moves.",
    items: ["PyTorch", "scikit-learn", "Hugging Face", "LangChain", "LangGraph", "LlamaIndex", "OpenAI", "Anthropic Claude", "AWS Bedrock", "Azure OpenAI", "pgvector", "MLflow"],
  },
  {
    name: "Cloud and DevOps",
    why: "Infrastructure as code, repeatable environments and observability from day one.",
    items: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "GitLab CI", "Argo CD", "Prometheus", "Grafana", "Datadog"],
  },
  {
    name: "Quality and security",
    why: "Automated suites in the pipeline and security scanning on every pull request.",
    items: ["Playwright", "Cypress", "Selenium", "Appium", "Jest", "k6", "SonarQube", "Snyk", "OWASP ZAP"],
  },
  {
    name: "Commerce, CMS and platforms",
    why: "Proven platforms where building from scratch would add cost without adding value.",
    items: ["Shopify Plus", "Adobe Commerce", "commercetools", "Strapi", "Contentful", "Sanity", "WordPress", "Salesforce", "Microsoft Dynamics 365"],
  },
];

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        image="hero/technologies"
        crumbs={[{ name: "Technologies", href: "/technologies" }]}
        title="Technology chosen for the next five years, not the next demo"
        intro="We pick tools on maintainability, ecosystem maturity, hiring market and total cost of ownership, and record each decision so your future team knows why."
        actions={<Button href="/contact">Ask an architect</Button>}
      />
      <Section labelledBy="layers-title">
        <SectionHeading
          id="layers-title"
          title="The stack at a glance"
          intro="Four layers, each with a default we trust and alternatives we use when the product calls for them."
        />
        <div className="mt-12">
          <StackLayers />
        </div>
      </Section>
      <Section tone="mist" labelledBy="groups-title">
        <SectionHeading id="groups-title" title="Technologies by discipline" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <section key={g.name} aria-labelledby={`g-${g.name}`} className="rounded-panel border border-line bg-white p-7">
              <h3 id={`g-${g.name}`} className="text-lg font-semibold text-ink">
                {g.name}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">{g.why}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <li key={t} className="rounded-chip bg-mist px-2.5 py-1 text-sm font-medium text-ink">
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>
      <Section labelledBy="choose-title">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading
            id="choose-title"
            title="How we choose a stack with you"
            intro="Technology choices outlive the people who make them. We run a short, documented selection for every new product."
          />
          <ol className="space-y-5">
            {[
              ["Understand constraints", "Existing systems, team skills, compliance, hosting and budget."],
              ["Shortlist two or three options", "Compared on maturity, performance, talent pool and licensing cost."],
              ["Prove the risky parts", "A spike or proof of concept for anything unfamiliar or performance-critical."],
              ["Record the decision", "An architecture decision record your team can revisit later."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-btn bg-ink font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{t}</h3>
                  <p className="mt-1 text-slate">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
