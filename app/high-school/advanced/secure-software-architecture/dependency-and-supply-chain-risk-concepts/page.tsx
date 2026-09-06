import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  AnalyzeEvidenceCard,
  DefenderChecklist,
  FakeAlertCard,
  FakeDashboardCard,
  FakeLogPanel,
  KeyTakeaways,
  LessonProgressBar,
  MiniQuiz,
  PortfolioPrompt,
  ReadinessCheck,
  ScenarioDecisionLab,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/secure-software-architecture`;
const previousLesson = `${modulePath}/secrets-management-concepts`;
const nextLesson = `${modulePath}/secure-error-handling-and-logging`;

const objectives = [
  "Explain why dependency and software supply-chain risk includes more than package version numbers.",
  "Evaluate fictional dependencies using ownership, business importance, provenance, support status, maintenance health, exposure, privilege, update path, validation evidence, and replacement difficulty.",
  "Distinguish dependency presence, runtime use, reachable functionality, known risk, observed activity, and confirmed impact.",
  "Design a defensive dependency-governance workflow covering intake, approval, inventory, update, exception, validation, monitoring, replacement, and retirement.",
  "Build a dependency risk register that becomes the fifth artifact in the A11 Secure Software Design Assessment.",
];

const lifecycle = [
  {
    stage: "Discover",
    question: "What dependencies does the software actually rely on?",
    detail:
      "Identify direct packages, important transitive dependencies, external services, registries, build tools, images, plugins, SDKs, and other third-party components that materially affect the software.",
    evidence:
      "Dependency inventory, lock metadata, build records, supplier list, architecture diagram.",
  },
  {
    stage: "Classify",
    question: "Why does this dependency matter?",
    detail:
      "Record business purpose, runtime role, privilege, exposure, data access, criticality, environment, and whether the dependency participates in build, release, or production behavior.",
    evidence:
      "Architecture mapping, runtime use notes, data-flow map, service-owner input.",
  },
  {
    stage: "Approve",
    question: "Is the source and maintenance model acceptable?",
    detail:
      "Review source, provenance, licensing or policy constraints, support status, maintainer activity, supplier trust, approved registry, and update expectations.",
    evidence:
      "Approval record, source metadata, support note, supplier review, policy exception.",
  },
  {
    stage: "Pin and record",
    question: "Can the team identify exactly what version or artifact is intended?",
    detail:
      "Record approved versions, integrity or provenance metadata where available, expected source, ownership, and build linkage so the team can distinguish intended artifacts from drift.",
    evidence:
      "Lock record, artifact metadata, version inventory, build manifest, ownership record.",
  },
  {
    stage: "Monitor",
    question: "What changes could affect dependency risk?",
    detail:
      "Track support status, important advisories, ownership changes, supplier changes, version drift, new runtime use, environment exposure, and stale exceptions.",
    evidence:
      "Dependency dashboard, advisory review record, source-health metrics, exception register.",
  },
  {
    stage: "Update",
    question: "How should the team change versions safely?",
    detail:
      "Review compatibility, release notes, business impact, test evidence, rollback, dependent services, configuration changes, and validation before moving to a new version.",
    evidence:
      "Change record, test results, release notes, rollback plan, approval evidence.",
  },
  {
    stage: "Exception",
    question: "What happens when an immediate update is not practical?",
    detail:
      "Create a narrow, time-bounded, owned exception with rationale, compensating controls, monitoring, validation, target date, and closure criteria.",
    evidence:
      "Exception record, owner approval, mitigation plan, review date.",
  },
  {
    stage: "Replace or retire",
    question: "When should the team stop depending on the component?",
    detail:
      "Replace unsupported, unmaintained, incompatible, unnecessary, or strategically risky dependencies when the residual risk or maintenance burden is no longer acceptable.",
    evidence:
      "Migration plan, replacement decision, validation evidence, retirement record.",
  },
];

const riskDimensions = [
  {
    title: "Business importance",
    question:
      "What happens to the product if the dependency fails, changes, or becomes unavailable?",
    example:
      "A date-formatting helper and the central identity SDK do not have the same business impact.",
  },
  {
    title: "Runtime use",
    question:
      "Is the dependency only present in development, used during build, or active in the released application?",
    example:
      "A test-only package should not automatically be treated as production runtime exposure.",
  },
  {
    title: "Reachability",
    question:
      "Does the software actually use the functionality connected to the concern?",
    example:
      "Installed code is not automatically the same as active, reachable functionality.",
  },
  {
    title: "Privilege",
    question:
      "What access or authority does the component have in the intended environment?",
    example:
      "A build tool with artifact-signing access deserves stronger governance than a local formatting utility.",
  },
  {
    title: "Data sensitivity",
    question:
      "Does the component process private, confidential, authentication, or security-relevant data?",
    example:
      "A logging integration handling audit events may require different review than a static icon package.",
  },
  {
    title: "Exposure",
    question:
      "Where is the dependency used and which trust boundaries does it cross?",
    example:
      "A package used only in an offline build step differs from an internet-facing application component.",
  },
  {
    title: "Provenance",
    question:
      "Can the team identify the approved source, artifact, supplier, and version?",
    example:
      "An ambiguous package source weakens confidence even when the version number looks current.",
  },
  {
    title: "Maintenance health",
    question:
      "Is the dependency supported, actively maintained, and receiving appropriate updates?",
    example:
      "An abandoned component can become a long-term architecture risk even without a current incident.",
  },
  {
    title: "Update difficulty",
    question:
      "How hard is it to validate, replace, or roll back the dependency?",
    example:
      "A deeply embedded framework may require a larger migration plan than a small isolated library.",
  },
  {
    title: "Ownership",
    question:
      "Who is accountable for version review, exceptions, updates, and retirement?",
    example:
      "Unowned dependencies often remain stale because everyone assumes someone else is reviewing them.",
  },
];

const vocabulary = [
  {
    term: "Dependency",
    definition:
      "A library, package, SDK, service, build tool, plugin, image, supplier component, or other external element the software relies on.",
  },
  {
    term: "Direct dependency",
    definition:
      "A component the project intentionally includes or references directly.",
  },
  {
    term: "Transitive dependency",
    definition:
      "A component included because another dependency relies on it.",
  },
  {
    term: "Provenance",
    definition:
      "Evidence describing where software or an artifact came from and how its identity can be related to an approved source or build process.",
  },
  {
    term: "Dependency inventory",
    definition:
      "A maintained record of important components, versions, sources, owners, environments, roles, and lifecycle status.",
  },
  {
    term: "Support status",
    definition:
      "Whether a component is currently maintained and supported by its project, supplier, or organization.",
  },
  {
    term: "Reachability",
    definition:
      "Whether the software actually uses or can invoke the functionality relevant to a dependency concern.",
  },
  {
    term: "Version drift",
    definition:
      "A difference between the approved or expected dependency version and what is recorded in another environment or artifact.",
  },
  {
    term: "Supply chain",
    definition:
      "The people, projects, registries, tools, services, builds, artifacts, and suppliers that contribute to software delivery.",
  },
  {
    term: "Exception",
    definition:
      "A governed, time-bounded decision to temporarily accept a dependency condition that does not meet the normal standard.",
  },
  {
    term: "Compensating control",
    definition:
      "A safeguard used to reduce risk when the preferred control or update cannot be implemented immediately.",
  },
  {
    term: "Retirement",
    definition:
      "The controlled removal of a dependency and its associated permissions, configuration, build references, ownership, and monitoring responsibilities.",
  },
];

const records = [
  {
    id: "DEP-01",
    name: "Northbridge Identity SDK",
    role: "Staff sign-in and identity claims",
    environment: "Production",
    source: "Approved supplier registry",
    version: "Approved baseline current",
    runtime: "Active",
    privilege: "Authentication context",
    support: "Supported",
    owner: "Identity Platform Team",
    status: "Confirmed",
    concern: "No current exception",
    next: "Continue scheduled version and support review.",
  },
  {
    id: "DEP-02",
    name: "Messaging Client Library",
    role: "Outbound notification queue client",
    environment: "Production",
    source: "Approved registry",
    version: "Two approved minor releases behind target",
    runtime: "Active",
    privilege: "Notification service only",
    support: "Supported",
    owner: "Notification Service Team",
    status: "Conditional",
    concern:
      "Update is pending compatibility validation with retry behavior.",
    next:
      "Complete authorized compatibility testing and schedule bounded update.",
  },
  {
    id: "DEP-03",
    name: "Legacy Report Renderer",
    role: "Generates staff-only PDF reports",
    environment: "Production",
    source: "Approved internal mirror",
    version: "Legacy baseline",
    runtime: "Active",
    privilege: "Reads approved reporting data",
    support: "Limited support",
    owner: "Reporting Team",
    status: "Blocked",
    concern:
      "Replacement project is required because support ends this quarter.",
    next:
      "Execute migration plan, validate replacement, and retire old component.",
  },
  {
    id: "DEP-04",
    name: "Unit Test Helper",
    role: "Test-only assertion helper",
    environment: "CI Test",
    source: "Approved registry",
    version: "Current",
    runtime: "Not shipped to production",
    privilege: "Test environment only",
    support: "Supported",
    owner: "Engineering Productivity",
    status: "Confirmed",
    concern:
      "Must remain separated from production artifact.",
    next:
      "Verify build manifest continues to exclude test-only dependency.",
  },
  {
    id: "DEP-05",
    name: "Scheduling Vendor SDK",
    role: "External scheduling integration",
    environment: "Production",
    source: "Supplier distribution",
    version: "Current approved",
    runtime: "Active",
    privilege: "Approved appointment fields only",
    support: "Supported",
    owner: "Integration Owner",
    status: "Conditional",
    concern:
      "Supplier migration next quarter may change provenance and API behavior.",
    next:
      "Treat supplier migration as architecture and dependency change trigger.",
  },
  {
    id: "DEP-06",
    name: "Historical CSV Utility",
    role: "Old import workflow",
    environment: "Maintenance",
    source: "Unknown historical source",
    version: "Unknown",
    runtime: "Unclear",
    privilege: "Unknown",
    support: "Unknown",
    owner: "Unknown",
    status: "Unknown",
    concern:
      "Source, ownership, active use, version, and support are not established.",
    next:
      "Determine whether the dependency is still needed before any release decision.",
  },
  {
    id: "DEP-07",
    name: "Release Signing Service",
    role: "Approved artifact-signing dependency",
    environment: "Build / Release",
    source: "Approved platform service",
    version: "Managed service",
    runtime: "Build pipeline only",
    privilege: "Release-signing authority",
    support: "Supported",
    owner: "Release Engineering",
    status: "Confirmed",
    concern:
      "High privilege means ownership and access review must remain current.",
    next:
      "Continue quarterly access and emergency-use review.",
  },
];

const evidenceSeparation = [
  {
    claim: "The dependency is present.",
    supports:
      "Inventory, lock metadata, manifest, build record, or artifact record.",
    doesNotProve:
      "Presence alone does not prove runtime use, reachability, harmful activity, or impact.",
  },
  {
    claim: "The dependency is used at runtime.",
    supports:
      "Architecture mapping, runtime package record, service-owner evidence, artifact composition.",
    doesNotProve:
      "Runtime presence alone does not prove a specific risky function is reachable.",
  },
  {
    claim: "Relevant functionality is reachable.",
    supports:
      "Safe design review, code-path evidence, approved test evidence, feature mapping.",
    doesNotProve:
      "Reachability does not prove harmful use or confirmed impact.",
  },
  {
    claim: "A known risk applies to this version.",
    supports:
      "Trusted advisory matched to exact component identity and version.",
    doesNotProve:
      "An advisory does not by itself prove the affected function is used or that harm occurred.",
  },
  {
    claim: "Harmful activity occurred.",
    supports:
      "Specific incident or monitoring evidence within an authorized investigation.",
    doesNotProve:
      "Dependency age or advisory severity alone cannot establish this claim.",
  },
  {
    claim: "Business impact is confirmed.",
    supports:
      "Application, data, identity, transaction, operational, or user evidence tied to the event.",
    doesNotProve:
      "A dependency finding by itself does not prove business impact.",
  },
];

const commonMistakes = [
  {
    mistake: "Treating every outdated package as equal risk",
    why:
      "Business importance, runtime use, privilege, exposure, controls, support, and reachability can differ greatly.",
    better:
      "Prioritize with a consistent risk model and explain the evidence.",
  },
  {
    mistake: "Looking only at direct dependencies",
    why:
      "Important transitive components and supplier services can affect the software too.",
    better:
      "Maintain an inventory that captures materially important transitive and service dependencies.",
  },
  {
    mistake: "Assuming newest automatically means safest",
    why:
      "A version change can create compatibility, configuration, or operational risk that still needs validation.",
    better:
      "Use approved update workflows with evidence, rollback, and post-change validation.",
  },
  {
    mistake: "Ignoring provenance",
    why:
      "A familiar package name does not by itself establish that the artifact came from the approved source or build path.",
    better:
      "Track approved source, artifact identity, version, and build linkage.",
  },
  {
    mistake: "No owner",
    why:
      "Unowned dependencies can remain stale, unsupported, or exception-bound indefinitely.",
    better:
      "Assign accountable owners for review, updates, exceptions, and retirement.",
  },
  {
    mistake: "Permanent exceptions",
    why:
      "Temporary risk can silently become the normal architecture.",
    better:
      "Make exceptions narrow, time-bounded, monitored, owned, and linked to closure criteria.",
  },
  {
    mistake: "Updating without rollback",
    why:
      "Compatibility failures can disrupt service or force rushed changes.",
    better:
      "Plan validation, staged rollout, monitoring, and rollback.",
  },
  {
    mistake: "Confusing advisory with compromise",
    why:
      "Known risk in a dependency does not prove the software was harmed.",
    better:
      "Separate component risk, reachability, observed activity, and business impact.",
  },
];

const reviewQuestions = [
  "What exact component or external service is this?",
  "Why does the software depend on it?",
  "Is it direct, transitive, build-time, test-only, runtime, or external service dependency?",
  "Which environment uses it?",
  "Who owns the dependency?",
  "What source or supplier is approved?",
  "Which version or artifact identity is expected?",
  "Is the component supported and maintained?",
  "What privilege or data access does it have?",
  "Which trust boundaries does it cross?",
  "Is the relevant functionality actually used or reachable?",
  "What security controls reduce dependency risk?",
  "What evidence supports the current status?",
  "How difficult is update or replacement?",
  "What rollback or recovery plan exists?",
  "What monitoring detects drift, stale support, or exception expiry?",
  "What change triggers require architecture or threat-model review?",
  "What retirement criteria close the dependency lifecycle?",
];

const dashboardMetrics = [
  {
    label: "Tracked dependencies",
    value: "126",
    note: "Direct, material transitive, build, and external service records",
  },
  {
    label: "Owned records",
    value: "123 / 126",
    note: "Three legacy records need ownership resolution",
  },
  {
    label: "Supported baseline",
    value: "94%",
    note: "Four legacy components require migration or exception review",
  },
  {
    label: "Open exceptions",
    value: "5",
    note: "All have owners; two expire within 30 days",
  },
];

const logs = [
  "[08:35] DEP-01 identity-sdk source=APPROVED support=SUPPORTED status=CONFIRMED",
  "[08:58] DEP-02 messaging-client update=pending compatibility-validation",
  "[09:27] DEP-03 report-renderer support-ending -> migration BLOCKED",
  "[09:55] DEP-04 unit-test-helper production-artifact=NOT PRESENT",
  "[10:22] DEP-05 supplier-migration flagged as change-trigger",
  "[10:47] DEP-06 source=UNKNOWN owner=UNKNOWN runtime-use=UNKNOWN",
  "[11:15] DEP-07 signing-service privilege=HIGH owner=ReleaseEngineering status=CONFIRMED",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Treat support ending as a migration trigger, complete replacement validation, preserve rollback, and retire the old component through an owned plan.",
    outcome:
      "Best. The team manages lifecycle risk instead of waiting for support to disappear.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Ignore support status because the component still works today.",
    outcome:
      "Risky. Functionality today does not remove future maintenance, compatibility, or response risk.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Replace it immediately in production without compatibility testing.",
    outcome:
      "Caution. Replacement is directionally correct but unsafe without validation and rollback.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep the dependency status Unknown, determine whether it is still used, identify source/version/owner/support, and remove it if it is unnecessary.",
    outcome:
      "Best. The team resolves the uncertainty before making a release claim.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Assume it is safe because nobody has reported a problem.",
    outcome:
      "Risky. Missing evidence is not evidence of safety.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Assume it is compromised because the source is unknown.",
    outcome:
      "Risky. Unknown provenance is a governance concern, not proof of compromise.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "Which statement best describes software supply-chain risk?",
    choices: [
      "Only whether a package has an old version number.",
      "The security and reliability risks introduced through dependencies, suppliers, registries, build tools, services, artifacts, ownership, provenance, updates, and lifecycle decisions.",
      "Only whether source code is public.",
      "Only whether an application uses third-party APIs.",
    ],
    answer: 1,
    explanation:
      "Supply-chain risk spans dependencies and the systems, people, sources, builds, suppliers, and processes that deliver software.",
  },
  {
    question:
      "Why is dependency presence different from runtime exposure?",
    choices: [
      "They are always identical.",
      "A component may be listed in development or build metadata without being shipped or used at runtime.",
      "Runtime exposure only matters for operating systems.",
      "Presence automatically proves harmful activity.",
    ],
    answer: 1,
    explanation:
      "Inventory context matters. Development, build, test, and runtime dependencies have different roles and risk.",
  },
  {
    question:
      "A trusted advisory matches a dependency version. What does that prove?",
    choices: [
      "The application was definitely compromised.",
      "The matched version deserves review, but reachability, controls, observed activity, and business impact still require evidence.",
      "The dependency must be removed immediately without testing.",
      "Every application using the package has the same impact.",
    ],
    answer: 1,
    explanation:
      "An advisory supports component risk review, not automatic conclusions about reachability or impact.",
  },
  {
    question:
      "Why does dependency ownership matter?",
    choices: [
      "Because every dependency needs a person's name printed in source code.",
      "Because someone must be accountable for updates, support review, exceptions, validation, and retirement.",
      "Because ownership proves the dependency is safe.",
      "Because only one person may use the dependency.",
    ],
    answer: 1,
    explanation:
      "Ownership makes lifecycle decisions actionable and prevents maintenance from being abandoned.",
  },
  {
    question:
      "What is the strongest response when a supported dependency update is available?",
    choices: [
      "Update production immediately without testing.",
      "Ignore all updates.",
      "Review compatibility and risk, validate the update safely, plan rollback, and deploy through the approved change process.",
      "Copy the dependency into the repository permanently.",
    ],
    answer: 2,
    explanation:
      "Updates should be evidence-based changes with validation and rollback.",
  },
  {
    question:
      "What is a strong exception?",
    choices: [
      "A permanent note saying the dependency is too hard to update.",
      "A narrow, time-bounded, owned decision with rationale, compensating controls, monitoring, target date, and closure criteria.",
      "An undocumented delay.",
      "A decision with no owner or review date.",
    ],
    answer: 1,
    explanation:
      "Exceptions should remain governed and temporary rather than becoming invisible permanent risk.",
  },
  {
    question:
      "A legacy dependency has unknown source, version, owner, and runtime use. What is the strongest status?",
    choices: [
      "Confirmed safe.",
      "Confirmed compromised.",
      "Unknown until the team establishes whether it is used and resolves identity, source, ownership, and support evidence.",
      "Automatically production critical.",
    ],
    answer: 2,
    explanation:
      "Unknown evidence should remain Unknown rather than being converted into unsupported safety or compromise claims.",
  },
];

const checklistItems = [
  "The inventory includes important direct, transitive, build, runtime, and external service dependencies.",
  "Each material dependency has an owner.",
  "Business purpose and runtime role are recorded.",
  "Approved source or supplier is documented.",
  "Expected version or artifact identity is recorded.",
  "Support and maintenance status are reviewed.",
  "Privilege, exposure, data access, and trust boundaries are considered.",
  "Presence is separated from runtime use and reachability.",
  "Known dependency risk is separated from observed activity and business impact.",
  "Updates use compatibility testing, validation, monitoring, and rollback.",
  "Exceptions are narrow, time-bounded, owned, and monitored.",
  "Supplier or provenance changes trigger renewed review.",
  "Unsupported or unnecessary dependencies have migration or retirement plans.",
  "No dependency review requires unauthorized probing, exploitation, or testing of real systems.",
];

const takeaways = [
  "Dependency risk is contextual: identity, source, runtime use, reachability, privilege, exposure, support, ownership, and business impact all matter.",
  "A package being present does not automatically mean the relevant functionality is used at runtime.",
  "A known advisory does not prove compromise or business impact.",
  "Provenance and approved source matter because software identity is more than a package name.",
  "Ownership is essential for updates, exceptions, support review, migration, and retirement.",
  "Updates should be validated changes with rollback, not automatic production actions.",
  "Exceptions must be temporary, visible, owned, monitored, and tied to closure criteria.",
  "Unsupported or strategically risky components require replacement or retirement planning.",
  "The dependency risk register becomes a core input to code review, testing, release readiness, and maintenance.",
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

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
      >
        Previous Lesson
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
      >
        Module A11
      </Link>

      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function DependencySupplyChainRiskConceptsPage() {
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
              A11.5
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Secure Software Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A11.5
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Dependency and Supply Chain Risk Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Modern software depends on packages, libraries, SDKs, build tools,
            registries, managed services, suppliers, and many other components.
            Secure architecture must understand those dependencies as part of
            the product â€” not as invisible implementation details.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional inventories and metadata only. You will
            evaluate ownership, source, version, support, runtime role,
            reachability, privilege, update difficulty, evidence, exceptions,
            and retirement without scanning or exploiting any real component.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A11: Secure Software Architecture"
          lessonTitle="Dependency and Supply Chain Risk Concepts"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A11.5 Entry Readiness"
          items={[
            "I understand how requirements, threat models, and secrets governance connect to software architecture.",
            "I can separate a control or dependency claim from the evidence that supports it.",
            "I understand that presence, reachability, observed activity, and business impact are different claims.",
            "I am prepared to use only fictional dependency and supplier records.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Your Code Is Not the Whole Product"
        >
          <p className="leading-8">
            A fictional engineering team may write only part of an application.
            The final service could still depend on an identity SDK, database
            driver, messaging client, scheduling vendor, build service,
            artifact-signing service, test framework, container image, and many
            transitive components.
          </p>

          <p className="mt-4 leading-8">
            If one of those components becomes unsupported, changes supplier,
            drifts from the approved version, loses an owner, or becomes
            difficult to update, the software architecture inherits that risk.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Dependencies are architecture decisions with lifecycle
              responsibilities.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for This Lesson"
        >
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Why It Matters"
          title="Dependency Risk Is Contextual"
        >
          <p className="leading-8">
            Two applications can use the same component but have different risk
            because they use different functionality, environments, privileges,
            data, exposure, controls, or versions.
          </p>

          <p className="mt-4 leading-8">
            That is why professional dependency review asks for context instead
            of reacting only to package age or severity labels.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Identity",
                text:
                  "What exact dependency, source, version, supplier, and owner are we talking about?",
              },
              {
                title: "Context",
                text:
                  "Where is it used, what does it do, what can it access, and which trust boundaries does it cross?",
              },
              {
                title: "Evidence",
                text:
                  "What supports the current status, and what remains Unknown?",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Core Framework"
          title="Eight Stages of Dependency Governance"
        >
          <div className="grid gap-5">
            {lifecycle.map((item, index) => (
              <article
                key={item.stage}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="grid gap-5 md:grid-cols-[100px_1fr]">
                  <span className="text-4xl font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-xl font-black text-white">
                      {item.stage}
                    </h3>
                    <p className="mt-2 font-semibold leading-7 text-cyan-100">
                      {item.question}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.detail}
                    </p>
                    <div className="mt-4 rounded-xl border border-purple-400/20 bg-purple-400/10 p-4 text-sm leading-7 text-purple-50">
                      Evidence: {item.evidence}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Risk Dimensions"
          title="Ten Questions That Change Dependency Priority"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {riskDimensions.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.question}
                </p>
                <p className="mt-3 rounded-xl border border-blue-300/20 bg-slate-950/30 p-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Vocabulary" title="Dependency and Supply-Chain Terms">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.term}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.definition}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence Discipline"
          title="Presence, Reachability, Activity, and Impact Are Different Claims"
        >
          <p className="leading-8">
            Dependency findings become misleading when reviewers jump from â€œthe
            component existsâ€ directly to â€œthe application was harmed.â€ Strong
            analysis keeps each claim separate.
          </p>

          <div className="mt-6 grid gap-5">
            {evidenceSeparation.map((item) => (
              <article
                key={item.claim}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.claim}
                </h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Supporting evidence: {item.supports}
                </p>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  Limitation: {item.doesNotProve}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Dependency Governance Dashboard"
          subtitle="Fictional inventory and lifecycle metadata"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Unsupported Component Migration Required"
          severity="High"
          time="09:27"
          source="Fictional Dependency Review"
          details="DEP-03, the Legacy Report Renderer, remains active in production but its limited support ends this quarter. A replacement project exists but validation is not complete."
          recommendation="Treat support ending as a migration trigger, complete replacement validation, preserve rollback, and retire the old component through an owned plan."
        />

        <Section eyebrow="Dependency Register" title="Seven Fictional Dependency Records">
          <div className="mt-2 grid gap-5">
            {records.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.name}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Role", item.role],
                    ["Environment", item.environment],
                    ["Source", item.source],
                    ["Version", item.version],
                    ["Runtime", item.runtime],
                    ["Privilege", item.privilege],
                    ["Support", item.support],
                    ["Owner", item.owner],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-blue-50">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Concern
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.concern}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Next action
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.next}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Dependency Review Log"
          logs={logs}
        />

        <Section eyebrow="Review Questions" title="Eighteen Questions for Material Dependencies">
          <div className="grid gap-4 md:grid-cols-2">
            {reviewQuestions.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Test-Only Dependency"
          question="What is the strongest conclusion about DEP-04?"
          evidence={[
            "DEP-04 is a unit-test helper.",
            "The dependency is present in CI Test.",
            "The production artifact record does not include it.",
            "No evidence shows production runtime use.",
          ]}
          options={[
            "DEP-04 must be treated as confirmed production runtime exposure.",
            "The supplied evidence supports test-only use and does not establish production runtime presence.",
            "The package should be tested against production to confirm.",
            "Because it is a dependency, compromise is proven.",
          ]}
          bestAnswer={1}
          explanation="Presence in test metadata is not the same as production runtime presence. The available evidence supports a test-only classification."
        />

        <Section eyebrow="Update Strategy" title="A Dependency Update Is a Controlled Change">
          <p className="leading-8">
            Updating a dependency can reduce one risk while introducing
            compatibility, configuration, performance, or operational change.
            Strong teams use an evidence-based change process.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Confirm exact component identity and approved source.",
              "Review support status and relevant release information.",
              "Understand runtime role, privilege, data access, and dependencies.",
              "Define expected behavior and compatibility criteria.",
              "Validate in an authorized non-production environment.",
              "Review configuration changes and migration notes.",
              "Plan rollback and monitoring.",
              "Deploy through approved change control.",
              "Validate intended version and service behavior after deployment.",
              "Update inventory, baseline, exception, and retirement records.",
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
        </Section>

        <Section eyebrow="Exceptions" title="Temporary Risk Must Stay Temporary">
          <p className="leading-8">
            Sometimes a dependency cannot be updated immediately because of
            compatibility, supplier timing, migration complexity, or business
            constraints. That does not mean the risk should disappear from
            view.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Scope", "Which exact component, version, environment, and workflow are covered?"],
              ["Rationale", "Why is the normal requirement not currently achievable?"],
              ["Owner", "Who is accountable for the exception and closure?"],
              ["Controls", "Which compensating safeguards reduce the temporary risk?"],
              ["Monitoring", "How will the team watch for changes while the exception is active?"],
              ["Expiration", "When must the exception be reviewed or closed?"],
              ["Target state", "What update, migration, replacement, or retirement resolves the exception?"],
              ["Closure evidence", "What evidence proves the temporary condition is gone?"],
            ].map(([title, detail]) => (
              <article
                key={title}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Common Mistakes" title="Eight Ways Dependency Reviews Go Wrong">
          <div className="grid gap-5">
            {commonMistakes.map((item, index) => (
              <article
                key={item.mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.mistake}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-red-100">
                      Why it fails: {item.why}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      Better approach: {item.better}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 â€” Support Ending"
          scenario="The fictional Legacy Report Renderer remains active in production. Limited support ends this quarter. A replacement component has been selected, but compatibility and rollback validation are not complete."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 â€” Unknown Historical Utility"
          scenario="A historical CSV utility appears in an old maintenance inventory. Its source, version, owner, support status, and current runtime use are all Unknown."
          choices={scenarioTwoChoices}
        />

        <Section eyebrow="Safe Fictional Lab" title="Build a Dependency Risk Register">
          <p className="leading-8">
            Use fictional components only. Do not scan, download, inspect,
            exploit, or test real software packages, registries, repositories,
            services, or systems.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least ten fictional dependency records.",
              "Give each dependency a stable ID.",
              "Record business purpose and application role.",
              "Classify direct, transitive, test, build, runtime, or external-service use.",
              "Record environment and approved source.",
              "Record version or artifact identity metadata.",
              "Assign an owner.",
              "Record support and maintenance status.",
              "Describe privilege, data access, and trust boundaries.",
              "Record evidence for runtime use or reachability when relevant.",
              "Assign status: Confirmed, Conditional, Unknown, Blocked, or Retired.",
              "Define update, exception, replacement, or retirement action.",
              "Add change triggers.",
              "Add validation and rollback expectations.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Advisory vs. Impact"
          question="A trusted advisory matches the exact version of a fictional dependency. What is the strongest conclusion?"
          evidence={[
            "The component identity and version match the advisory.",
            "The component is present in the production artifact.",
            "The supplied evidence does not establish whether the affected functionality is reachable.",
            "No incident or business-impact evidence is supplied.",
          ]}
          options={[
            "The application was definitely compromised.",
            "The advisory is irrelevant because no incident is confirmed.",
            "The dependency deserves prioritized review, but reachability, controls, observed activity, and business impact remain separate evidence questions.",
            "The team should attempt exploitation against production to find out.",
          ]}
          bestAnswer={2}
          explanation="Matching an advisory establishes a component-level concern. It does not automatically prove reachability, harmful activity, or business impact."
        />

        <Section eyebrow="Advanced Challenge" title="Design a Dependency Exception That Can Actually Close">
          <p className="leading-8">
            Create a fictional exception for a business-critical dependency that
            cannot be updated for 45 days because the replacement requires a
            compatibility change.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Exact dependency ID and version",
              "Business reason for temporary delay",
              "Affected environment and workflow",
              "Runtime role and privilege",
              "Known concern and evidence",
              "Compensating controls",
              "Monitoring",
              "Accountable owner",
              "Target update or replacement date",
              "Validation plan",
              "Rollback plan",
              "Expiration date",
              "Closure criteria",
              "Residual risk statement",
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
        </Section>

        <DefenderChecklist
          title="A11.5 Defender Checklist"
          items={checklistItems}
        />

        <Section eyebrow="Skill Check" title="Seven Questions">
          <MiniQuiz
            title="A11.5 Mini Quiz: Dependency and Supply Chain Risk Concepts"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build â€” Dependency Risk Register"
          prompt="Create the fifth artifact for your A11 Secure Software Design Assessment: a fictional dependency risk register with at least ten records. Include ID, component or service name, purpose, dependency type, environment, source or supplier, version or artifact metadata, runtime role, privilege, data access, support status, owner, evidence, status, exception or update plan, validation, rollback, change triggers, and retirement criteria."
          tips={[
            "Use fictional packages, services, versions, suppliers, registries, and artifacts only.",
            "Include at least one test-only dependency and show why it is not automatically production runtime exposure.",
            "Include at least one Unknown legacy dependency.",
            "Include at least one time-bounded exception.",
            "Include one component approaching end of support with a replacement plan.",
            "Separate advisory evidence, reachability, observed activity, and business impact.",
          ]}
        />

        <Section eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A11.6?">
          <p className="leading-8">
            A11.6 moves to Secure Error Handling and Logging. Before continuing,
            check whether you can explain dependency risk without turning every
            component finding into a claim of compromise.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can identify direct, transitive, build, test, runtime, and external-service dependencies.",
              "I can evaluate ownership, source, support, runtime role, privilege, exposure, and replacement difficulty.",
              "I can separate component presence, reachability, advisory match, observed activity, and confirmed impact.",
              "I can design a governed update or exception process with validation and rollback.",
              "I can define when a dependency should be replaced or retired.",
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

        <Section eyebrow="Portfolio Build Guide" title="How to Make the Dependency Register Look Professional">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use stable IDs",
                detail:
                  "Give each material dependency a unique identifier so architecture, review, testing, release, and maintenance evidence can reference it.",
              },
              {
                title: "Show dependency role",
                detail:
                  "Distinguish test-only, build-time, runtime, service, and privileged dependencies.",
              },
              {
                title: "Show exact context",
                detail:
                  "Record environment, business purpose, source, version, support status, data access, and privilege.",
              },
              {
                title: "Show evidence limits",
                detail:
                  "Do not claim compromise or impact from version data alone.",
              },
              {
                title: "Show ownership",
                detail:
                  "Every material dependency should have an accountable review and maintenance owner.",
              },
              {
                title: "Show update readiness",
                detail:
                  "Record validation, compatibility, rollback, monitoring, and deployment expectations.",
              },
              {
                title: "Show exceptions",
                detail:
                  "Keep exceptions narrow, time-bounded, owned, monitored, and connected to closure criteria.",
              },
              {
                title: "Show retirement",
                detail:
                  "Unsupported, unnecessary, or strategically risky dependencies should have a clear replacement or retirement path.",
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

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Lesson Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Dependency review is defensive governance
          </h2>
          <p className="mt-3 leading-7">
            This lesson does not authorize scanning, downloading, probing,
            exploiting, fuzzing, modifying, or testing real packages,
            registries, repositories, services, devices, applications, or
            networks. Use fictional inventories and supplied metadata only.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A11.5 Dependency and Supply Chain Risk Concepts Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a dependency-governance framework covering identity,
            provenance, support, ownership, runtime role, reachability, updates,
            exceptions, replacement, and retirement. Next, A11.6 focuses on
            Secure Error Handling and Logging.
          </p>

          <div className="mt-6">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
