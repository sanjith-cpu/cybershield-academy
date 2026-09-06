import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/cloud-security-architecture`;
const previousModule = `${trackPath}/secure-software-architecture`;
const nextModule = `${trackPath}/identity-zero-trust-and-access-control`;

const lessons = [
  {
    code: "A12.1",
    title: "Cloud Architecture and Shared Responsibility",
    slug: "cloud-architecture-and-shared-responsibility",
    focus:
      "Understand cloud architecture as a division of responsibility between the organization and the provider, then translate that model into security ownership, evidence, and design decisions.",
    lab:
      "Review a fictional cloud application and build a shared-responsibility map showing what the provider operates, what the organization configures, what the application team owns, and where responsibility is shared.",
    portfolio:
      "Shared Responsibility and Ownership Map",
  },
  {
    code: "A12.2",
    title: "Cloud IAM Architecture",
    slug: "cloud-iam-architecture",
    focus:
      "Design identity and access architecture around least privilege, role boundaries, workload identity, privileged access, lifecycle ownership, and evidence.",
    lab:
      "Review fictional workforce and workload identities, then classify access by purpose, environment, privilege, owner, approval path, and change trigger.",
    portfolio:
      "Cloud IAM Architecture Matrix",
  },
  {
    code: "A12.3",
    title: "Storage Security and Data Exposure",
    slug: "storage-security-and-data-exposure",
    focus:
      "Reason about cloud data classification, storage purpose, access paths, exposure boundaries, encryption responsibilities, retention, logging, and lifecycle decisions.",
    lab:
      "Assess fictional object, database, backup, and analytics storage records using metadata only and propose bounded exposure controls.",
    portfolio:
      "Cloud Storage Exposure Review",
  },
  {
    code: "A12.4",
    title: "Cloud Network Boundaries",
    slug: "cloud-network-boundaries",
    focus:
      "Understand cloud network boundaries, service-to-service trust, public and private exposure, segmentation, routing intent, ingress, egress, and monitoring as architecture concepts.",
    lab:
      "Review a fictional cloud service map and identify where trust changes, where exposure should be limited, and what evidence would support each network decision.",
    portfolio:
      "Cloud Trust Boundary Map",
  },
  {
    code: "A12.5",
    title: "Cloud Logging and Monitoring Design",
    slug: "cloud-logging-and-monitoring-design",
    focus:
      "Design cloud telemetry around identity, configuration, data access, network events, service health, source health, retention, ownership, and actionable monitoring.",
    lab:
      "Build a fictional cloud monitoring coverage matrix that separates security audit evidence, operational telemetry, alerts, source health, and unresolved visibility gaps.",
    portfolio:
      "Cloud Monitoring Coverage Matrix",
  },
  {
    code: "A12.6",
    title: "Secrets and Key Handling in Cloud",
    slug: "secrets-and-key-handling-in-cloud",
    focus:
      "Apply cloud-specific thinking to secrets, service credentials, key references, workload identity, access scope, rotation, environment separation, and ownership.",
    lab:
      "Review fictional cloud secret and key metadata without exposing values, then identify overbroad scope, stale ownership, weak lifecycle evidence, and safer identity alternatives.",
    portfolio:
      "Cloud Secrets and Key Governance Register",
  },
  {
    code: "A12.7",
    title: "Backup, Recovery, and Resilience",
    slug: "backup-recovery-and-resilience",
    focus:
      "Connect backup, recovery, redundancy, dependency failure, recovery objectives, ownership, testing evidence, and operational resilience to cloud architecture.",
    lab:
      "Evaluate a fictional recovery design and decide whether backup existence, restoration evidence, dependency recovery, and monitoring support the stated resilience goals.",
    portfolio:
      "Cloud Recovery and Resilience Assessment",
  },
  {
    code: "A12.8",
    title: "Cloud Misconfiguration Prevention",
    slug: "cloud-misconfiguration-prevention",
    focus:
      "Treat cloud misconfiguration as an architecture and governance problem involving baselines, review, automation, change control, ownership, drift, exceptions, and evidence.",
    lab:
      "Review a fictional configuration baseline and change packet, classify drift, and design prevention and detection controls without touching a real cloud environment.",
    portfolio:
      "Cloud Configuration Assurance Register",
  },
  {
    code: "A12.9",
    title: "Cloud Governance Concepts",
    slug: "cloud-governance-concepts",
    focus:
      "Bring policy, ownership, standards, exceptions, asset inventory, evidence, review cadence, cost-awareness, lifecycle decisions, and risk acceptance into one cloud governance model.",
    lab:
      "Build a fictional governance register showing owners, standards, review triggers, exceptions, evidence, and unresolved risk across several cloud services.",
    portfolio:
      "Cloud Governance Decision Register",
  },
  {
    code: "A12.10",
    title: "Cloud Architecture Review Lab",
    slug: "cloud-architecture-review-lab",
    focus:
      "Integrate the entire module into one evidence-based review of a fictional cloud architecture spanning identity, storage, networks, monitoring, secrets, resilience, configuration, and governance.",
    lab:
      "Perform a capstone cloud architecture review, resolve evidence conflicts, identify residual risk, and write a final recommendation with owners and change triggers.",
    portfolio:
      "Final Cloud Security Architecture Assessment",
  },
];

const workflow = [
  {
    step: "Understand the cloud design",
    detail:
      "Start with business purpose, service model, cloud services, identities, data, dependencies, environments, and trust boundaries before evaluating controls.",
  },
  {
    step: "Map responsibility and ownership",
    detail:
      "Identify which responsibilities belong to the cloud provider, the organization, platform teams, application teams, security teams, and service owners.",
  },
  {
    step: "Evaluate exposure and control",
    detail:
      "Review identity, storage, network, secrets, configuration, logging, recovery, and governance decisions against their intended security outcomes.",
  },
  {
    step: "Verify evidence and uncertainty",
    detail:
      "Use current fictional evidence to distinguish Confirmed, Conditional, Unknown, stale, or conflicting claims without overstating certainty.",
  },
  {
    step: "Make an architecture decision",
    detail:
      "Record residual risk, owners, exceptions, follow-up evidence, change triggers, and the final design or release recommendation.",
  },
];

const outcomes = [
  "Explain cloud shared responsibility in terms of security ownership, configuration, monitoring, and evidence.",
  "Design cloud identity and access boundaries using least privilege, role separation, workload identity, and accountable ownership.",
  "Evaluate cloud storage, network, secrets, monitoring, and configuration decisions using exposure, trust, lifecycle, and evidence reasoning.",
  "Assess backup, recovery, dependency failure, and resilience claims using restoration and operational evidence rather than assumptions.",
  "Identify cloud governance gaps involving ownership, drift, exceptions, stale evidence, and policy-to-architecture traceability.",
  "Produce a coherent Cloud Security Architecture Assessment that integrates identity, storage, networks, logging, monitoring, resilience, configuration, and governance.",
];

const roles = [
  {
    role: "Cloud Security Architect",
    relevance:
      "Connects identity, data, network, monitoring, resilience, and governance decisions across cloud services.",
  },
  {
    role: "Cloud Engineer",
    relevance:
      "Builds and maintains cloud services while preserving approved architecture, configuration, identity, and monitoring requirements.",
  },
  {
    role: "Security Engineer",
    relevance:
      "Reviews cloud controls, evidence, telemetry, access models, exceptions, and risk decisions.",
  },
  {
    role: "Platform Engineer",
    relevance:
      "Owns shared cloud foundations such as identity integration, logging, configuration baselines, deployment patterns, and service guardrails.",
  },
  {
    role: "Cloud Governance Analyst",
    relevance:
      "Tracks standards, ownership, exceptions, review cadence, evidence quality, and lifecycle responsibilities.",
  },
  {
    role: "Site Reliability / Operations Engineer",
    relevance:
      "Connects observability, resilience, recovery, dependency health, change control, and post-change validation.",
  },
];

const evidencePreview = [
  {
    id: "CLD-IAM-01",
    source: "Cloud IAM Review",
    claim:
      "Production workload identity is scoped to the required storage service.",
    status: "Confirmed",
    limitation:
      "Future analytics integration is not yet covered.",
  },
  {
    id: "CLD-STO-02",
    source: "Storage Exposure Review",
    claim:
      "Student-support exports use a restricted production storage location.",
    status: "Conditional",
    limitation:
      "Retention review is due next month.",
  },
  {
    id: "CLD-NET-03",
    source: "Network Boundary Review",
    claim:
      "Application service is not directly exposed to the public internet.",
    status: "Confirmed",
    limitation:
      "A new vendor callback path is still under design.",
  },
  {
    id: "CLD-LOG-04",
    source: "Monitoring Coverage",
    claim:
      "Privileged identity and configuration events are collected and current.",
    status: "Confirmed",
    limitation:
      "One legacy storage source lacks source-health monitoring.",
  },
  {
    id: "CLD-RES-05",
    source: "Recovery Evidence",
    claim:
      "Critical records can be restored within the stated recovery target.",
    status: "Unknown",
    limitation:
      "The most recent restoration exercise is older than the current architecture baseline.",
  },
  {
    id: "CLD-GOV-06",
    source: "Governance Register",
    claim:
      "All blocking cloud exceptions have current owners and review dates.",
    status: "Conditional",
    limitation:
      "One configuration exception expires in 12 days.",
  },
];

const riskPreview = [
  {
    area: "Identity",
    concern:
      "Privilege can expand through role inheritance, stale access, shared credentials, or unclear workload identity scope.",
    architectureQuestion:
      "Can every human and workload identity explain why it has access, who owns it, and what evidence supports the scope?",
  },
  {
    area: "Storage",
    concern:
      "Data can become exposed through overly broad access, unexpected replication, retention, backup copies, or unclear ownership.",
    architectureQuestion:
      "Is each storage location tied to a purpose, classification, access model, retention rule, and evidence owner?",
  },
  {
    area: "Networks",
    concern:
      "Public exposure, broad service connectivity, or unclear egress can expand trust without an explicit design decision.",
    architectureQuestion:
      "Which flows are required, which boundaries change trust, and what proves exposure remains bounded?",
  },
  {
    area: "Monitoring",
    concern:
      "Missing or stale telemetry can create false confidence about cloud activity and configuration.",
    architectureQuestion:
      "Are important sources current, owned, retained, and able to support the claims the team makes?",
  },
  {
    area: "Resilience",
    concern:
      "Backup existence can be mistaken for recovery readiness.",
    architectureQuestion:
      "What current evidence shows the organization can actually restore services and data under the stated conditions?",
  },
  {
    area: "Governance",
    concern:
      "Temporary exceptions, drift, unowned services, or stale standards can become permanent architecture debt.",
    architectureQuestion:
      "Does every exception and major cloud service have an owner, review trigger, target state, and closure evidence?",
  },
];

const conceptualBoundaries = [
  {
    title: "Architecture, not cloud exploitation",
    detail:
      "A12 teaches defensive design reasoning. It does not teach unauthorized scanning, probing, exploitation, account abuse, credential attacks, or bypass techniques.",
  },
  {
    title: "Evidence, not real tenant access",
    detail:
      "Labs use fictional cloud records, synthetic identifiers, safe diagrams, and metadata rather than real cloud consoles, accounts, credentials, keys, or production resources.",
  },
  {
    title: "Shared responsibility is not provider blame",
    detail:
      "The model is used to clarify who owns configuration, identity, data, monitoring, resilience, and evidence at each layer.",
  },
  {
    title: "Configuration is architecture",
    detail:
      "A cloud design can be strong on paper and still become unsafe through unexpected identity, network, storage, logging, or service configuration.",
  },
  {
    title: "Availability is not resilience",
    detail:
      "Running now does not prove recovery capability. Resilience requires evidence about backup, restoration, dependencies, ownership, and recovery behavior.",
  },
  {
    title: "Governance supports engineering",
    detail:
      "Standards, exceptions, review triggers, ownership, and evidence should make secure decisions repeatable rather than becoming paperwork with no operational value.",
  },
];

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-5 text-slate-300">{children}</div>
    </section>
  );
}

function ModuleNavigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousModule}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
      >
        Previous Module — A11
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
      >
        Advanced Track
      </Link>

      <Link
        href={`${modulePath}/${lessons[0].slug}`}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Start A12.1
      </Link>
    </div>
  );
}

export default function CloudSecurityArchitectureModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-100">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">
              Module A12
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              10 Lessons + Module Test
            </span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-100">
              Cloud Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Module A12
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Cloud Security Architecture
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Develop cloud security architecture thinking across identity,
            storage, networks, logging, monitoring, and resilience. A12 treats
            cloud security as a design and ownership problem: who controls what,
            where trust changes, how evidence is collected, and how the
            architecture remains understandable as services evolve.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            You will work with fictional cloud services and synthetic evidence.
            The goal is to reason like a cloud security architect without
            accessing or testing real cloud accounts, tenants, credentials, or
            production resources.
          </p>

          <div className="mt-8">
            <ModuleNavigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <Section
          eyebrow="Module Snapshot"
          title="What A12 Adds to the Advanced Track"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Primary purpose",
                value: "Cloud architecture reasoning",
                detail:
                  "Connect identity, storage, networks, logging, monitoring, resilience, configuration, and governance.",
              },
              {
                label: "Core method",
                value: "Evidence-based design review",
                detail:
                  "Evaluate current ownership, exposure, configuration, controls, Unknowns, and residual risk.",
              },
              {
                label: "Hands-on style",
                value: "Fictional architecture labs",
                detail:
                  "Use safe diagrams, metadata, registers, dashboards, and decision records rather than real cloud consoles.",
              },
              {
                label: "Portfolio outcome",
                value: "Cloud Security Architecture Assessment",
                detail:
                  "A polished capstone review integrating all ten A12 lessons.",
              },
            ].map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-black text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Module Professional Meaning"
          title="What Makes Cloud Security an Architecture Problem?"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-cyan-400/25 bg-cyan-400/10 p-6">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                Main Question
              </p>
              <h3 className="mt-3 text-2xl font-black text-white">
                Can the organization explain who owns each cloud security
                decision and what evidence supports it?
              </h3>
              <p className="mt-4 leading-8 text-cyan-50">
                Cloud systems combine provider-operated services with
                organization-controlled identities, configurations, data,
                applications, networks, monitoring, and recovery decisions. A
                secure design makes those responsibilities explicit.
              </p>
            </article>

            <article className="rounded-3xl border border-yellow-400/25 bg-yellow-400/10 p-6">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                Safety Boundary
              </p>
              <h3 className="mt-3 text-2xl font-black text-white">
                Analyze fictional cloud evidence only
              </h3>
              <p className="mt-4 leading-8 text-yellow-50">
                A12 does not authorize cloud scanning, probing, exploitation,
                credential use, account access, bypass testing, or modification
                of real cloud resources. Every lab stays architectural,
                defensive, synthetic, and school-appropriate.
              </p>
            </article>
          </div>
        </Section>

        <Section
          eyebrow="Module Entry Readiness"
          title="What You Should Bring From Earlier Advanced Modules"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "You can reason about trust boundaries, assets, actors, threats, controls, evidence, and residual risk.",
              "You understand identity, authorization, secrets, dependencies, logging, and safe validation from A11.",
              "You can keep Unknown and Conditional states visible rather than turning incomplete evidence into certainty.",
              "You can distinguish architecture review from offensive testing.",
              "You can connect technical controls to accountable owners and lifecycle decisions.",
              "You can read fictional dashboards, logs, configuration records, and review evidence without assuming they prove more than they do.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Professional Workflow"
          title="How Cloud Architecture Reviews Usually Come Together"
        >
          <p className="leading-8">
            This workflow is a practical review pattern for the module. It is
            not meant to force every cloud concept into the same structure.
            Individual lessons will use the model that best fits the topic.
          </p>

          <div className="mt-6 grid gap-5">
            {workflow.map((item, index) => (
              <article
                key={item.step}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="grid gap-5 md:grid-cols-[90px_1fr]">
                  <span className="text-4xl font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white">
                      {item.step}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Learning Outcomes"
          title="Six Things You Should Be Able to Do After A12"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {outcomes.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Role Readiness Preview"
          title="Where These Skills Show Up Professionally"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.role}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.relevance}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Lesson Roadmap"
          title="A12.1–A12.10"
        >
          <div className="grid gap-6">
            {lessons.map((lesson) => (
              <article
                key={lesson.code}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6 md:p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                      {lesson.code}
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      {lesson.title}
                    </h3>
                  </div>

                  <Link
                    href={`${modulePath}/${lesson.slug}`}
                    className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    Open Lesson
                  </Link>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Focus
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {lesson.focus}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Defensive Lab
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {lesson.lab}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Portfolio Contribution
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {lesson.portfolio}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional Evidence Preview"
          title="What an A12 Architecture Review Might See"
        >
          <p className="leading-8">
            Cloud architecture review is not only about diagrams. Reviewers also
            need evidence about ownership, configuration, data exposure,
            identity, monitoring, recovery, exceptions, and evidence freshness.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[1050px] w-full border-collapse text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-700 p-4">Evidence ID</th>
                  <th className="border-b border-slate-700 p-4">Source</th>
                  <th className="border-b border-slate-700 p-4">Claim</th>
                  <th className="border-b border-slate-700 p-4">Status</th>
                  <th className="border-b border-slate-700 p-4">Limitation</th>
                </tr>
              </thead>
              <tbody>
                {evidencePreview.map((item) => (
                  <tr key={item.id} className="align-top">
                    <td className="border-b border-slate-800 p-4 font-mono text-sm font-black text-cyan-200">
                      {item.id}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm text-slate-300">
                      {item.source}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-white">
                      {item.claim}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm font-black text-purple-200">
                      {item.status}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-yellow-100">
                      {item.limitation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          eyebrow="Decision Preview"
          title="Cloud Architecture Decisions Are Usually Tradeoffs"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Public access vs. business need",
                detail:
                  "A service should not be public simply because the cloud makes public access easy. Exposure should follow business purpose, trust boundaries, controls, monitoring, and ownership.",
              },
              {
                title: "Convenience vs. least privilege",
                detail:
                  "Broad roles and shared access may simplify setup but create larger failure and accountability boundaries.",
              },
              {
                title: "Managed service vs. responsibility",
                detail:
                  "Using a managed cloud service can reduce operational burden while still leaving the organization responsible for identity, configuration, data, monitoring, and governance.",
              },
              {
                title: "Availability vs. recoverability",
                detail:
                  "A highly available service can still have weak recovery evidence if backups are stale, restoration is untested, or dependencies are not included.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Portfolio Outcome"
          title="Cloud Security Architecture Assessment"
        >
          <p className="leading-8">
            Across A12, you will build a portfolio-quality fictional assessment
            that explains how a cloud system handles responsibility, identity,
            storage, network boundaries, monitoring, secrets, resilience,
            configuration, governance, evidence quality, and residual risk.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Executive architecture summary",
              "Shared-responsibility and ownership map",
              "Cloud IAM architecture matrix",
              "Storage exposure review",
              "Cloud trust-boundary map",
              "Monitoring coverage matrix",
              "Secrets and key governance register",
              "Recovery and resilience assessment",
              "Configuration assurance register",
              "Governance decision register",
              "Evidence conflicts and Unknowns",
              "Residual-risk register",
              "Architecture decision records",
              "Final recommendation and change triggers",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5 text-purple-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-emerald-50">
            <p className="font-black">Public-safe portfolio rule</p>
            <p className="mt-2 leading-7">
              Keep every service name, account reference, cloud identifier,
              diagram, log, configuration record, secret record, and evidence
              source fictional or synthetic. The final assessment should be safe
              to share without revealing real infrastructure.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Risk Preview"
          title="Six Cloud Risk Areas You Will Revisit"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {riskPreview.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Concern: {item.concern}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Architecture question: {item.architectureQuestion}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Conceptual Boundaries"
          title="What A12 Is and Is Not"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {conceptualBoundaries.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Module Test"
          title="A12 Cloud Security Architecture — 25 Questions"
        >
          <p className="leading-8">
            After A12.10, the module test will assess cloud shared
            responsibility, IAM, storage, network boundaries, logging,
            monitoring, secrets, recovery, misconfiguration prevention, and
            governance.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                label: "Questions",
                value: "25",
                detail:
                  "One complete MiniQuiz with hidden answers until reveal.",
              },
              {
                label: "Reasoning style",
                value: "Architecture scenarios",
                detail:
                  "Questions emphasize evidence, ownership, boundaries, and decisions rather than memorization alone.",
              },
              {
                label: "Review support",
                value: "Targeted map",
                detail:
                  "The test will point back to the A12 lessons behind any missed concepts.",
              },
            ].map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-black text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>

          <Link
            href={`${modulePath}/module-test`}
            className="mt-6 inline-flex rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
          >
            A12 Module Test
          </Link>
        </Section>

        <Section
          eyebrow="Module Navigation"
          title="Continue the Advanced Architecture Track"
        >
          <ModuleNavigation />
        </Section>

        <section className="rounded-3xl border border-purple-400/30 bg-purple-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-200">
            After A12
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A13 — Identity, Zero Trust, and Access Control
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-purple-50">
            A12 develops cloud architecture reasoning across identity, storage,
            networks, logging, monitoring, resilience, configuration, and
            governance. A13 will go deeper into identity architecture, Zero
            Trust thinking, and access-control decisions.
          </p>

          <Link
            href={nextModule}
            className="mt-6 inline-flex rounded-xl bg-purple-300 px-5 py-3 font-black text-slate-950 transition hover:bg-purple-200"
          >
            Preview A13
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}