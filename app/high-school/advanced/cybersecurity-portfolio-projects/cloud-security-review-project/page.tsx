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

const modulePath = "/high-school/advanced/cybersecurity-portfolio-projects";
const previousLesson = `${modulePath}/security-policy-draft-project`;
const nextLesson = `${modulePath}/portfolio-reflection-and-presentation`;

const objectives = [
  "Explain how a cloud security review evaluates shared responsibility, identity, data, network boundaries, logging, resilience, configuration governance, and ownership without assuming the cloud provider manages every security decision.",
  "Review fictional cloud architecture and evidence by separating confirmed design facts, policy requirements, control evidence, assumptions, exceptions, and unknowns.",
  "Identify defensible cloud findings involving least privilege, storage exposure, workload identity, telemetry, recovery, dependency concentration, and lifecycle governance without teaching exploitation or real-system testing.",
  "Prioritize cloud security recommendations using business impact, control strength, evidence confidence, operational dependencies, residual risk, ownership, and validation needs.",
  "Create a portfolio-ready Cloud Security Review Project that demonstrates provider-neutral architecture reasoning, evidence discipline, safe recommendations, governance, and professional communication.",
];

const cloudReviewDomains = [
  {
    domain: "Shared responsibility",
    purpose:
      "Clarify which security responsibilities belong to the fictional cloud provider and which remain with the customer organization.",
    question:
      "Which control outcomes depend on provider capabilities, and which still require Northbridge configuration, ownership, review, or policy?",
  },
  {
    domain: "Identity and access",
    purpose:
      "Review workforce identities, service identities, privileged roles, temporary access, role ownership, and lifecycle decisions.",
    question:
      "Who or what can act, why is the access needed, how much privilege exists, and when should that privilege change or end?",
  },
  {
    domain: "Data protection",
    purpose:
      "Understand where fictional information is stored, how it is classified, who can access it, how it moves, and how its lifecycle is governed.",
    question:
      "Is the data protected according to its sensitivity, purpose, retention, sharing, recovery, and access requirements?",
  },
  {
    domain: "Network and trust boundaries",
    purpose:
      "Review how cloud services communicate, where trust contexts change, and which paths require stronger validation, filtering, segmentation, or ownership.",
    question:
      "Where does identity, data, authority, or responsibility cross a boundary that deserves explicit control?",
  },
  {
    domain: "Logging and monitoring",
    purpose:
      "Confirm that important cloud identity, storage, workload, network, administrative, and service-health events produce enough evidence for defensive decisions.",
    question:
      "Which events must be observable, who owns the telemetry, and what happens when coverage or freshness is reduced?",
  },
  {
    domain: "Resilience and recovery",
    purpose:
      "Review backups, dependencies, recovery ownership, service restoration, and evidence that critical workflows can return to trusted operation.",
    question:
      "Which failures matter most, what must be restored first, and what evidence is needed before declaring recovery complete?",
  },
  {
    domain: "Configuration governance",
    purpose:
      "Keep cloud configuration changes approved, attributable, reviewable, and aligned with policy rather than depending on informal one-time fixes.",
    question:
      "Who owns the control, how is change approved, how is drift detected conceptually, and how are exceptions governed?",
  },
  {
    domain: "Third-party and service dependencies",
    purpose:
      "Identify managed services, identity providers, integrations, and external services whose failure or lifecycle can affect security outcomes.",
    question:
      "What responsibility, evidence, recovery, and exit assumptions exist around each important dependency?",
  },
];

const sharedResponsibilityExamples = [
  {
    area: "Physical facilities and core provider infrastructure",
    provider:
      "The fictional cloud provider operates data centers, foundational infrastructure, and underlying platform availability responsibilities defined by its service.",
    customer:
      "Northbridge still decides which cloud services to use, what business data belongs there, and whether the service meets organizational requirements.",
  },
  {
    area: "Identity configuration",
    provider:
      "The provider supplies identity capabilities, authentication features, logging options, and administrative controls.",
    customer:
      "Northbridge defines roles, grants access, reviews privileges, protects privileged identities, and removes access when the need ends.",
  },
  {
    area: "Managed storage",
    provider:
      "The provider operates the storage service and platform-level durability capabilities.",
    customer:
      "Northbridge classifies data, configures approved access, defines sharing, chooses retention, reviews exposure, and validates recovery expectations.",
  },
  {
    area: "Logging",
    provider:
      "The platform may produce administrative, identity, service, or data-access telemetry depending on the service.",
    customer:
      "Northbridge decides which evidence is required, enables appropriate collection through authorized processes, monitors source health, controls access, and reviews retention.",
  },
  {
    area: "Managed application service",
    provider:
      "The provider maintains parts of the managed runtime according to the service model.",
    customer:
      "Northbridge remains responsible for application logic, identities, data use, permissions, secure design, dependency choices, and operational governance.",
  },
  {
    area: "Recovery",
    provider:
      "The platform may offer redundancy, snapshots, backups, or regional service options depending on the fictional service.",
    customer:
      "Northbridge defines business recovery goals, owns restoration decisions, tests recovery safely, and verifies that restored service is trustworthy.",
  },
];

const evidenceCategories = [
  {
    category: "Confirmed architecture fact",
    meaning:
      "A relationship explicitly shown in the fictional design or supplied record.",
    example:
      "APP-NB-C1 reads from DATA-NB-C2 through a designated workload identity.",
  },
  {
    category: "Policy requirement",
    meaning:
      "An organizational rule that the design should satisfy.",
    example:
      "Privileged access must have named ownership and recurring review.",
  },
  {
    category: "Control evidence",
    meaning:
      "A synthetic record showing that a review, approval, log, recovery exercise, or other control activity occurred.",
    example:
      "A fictional quarterly access review shows the owner approved three roles and removed one stale grant.",
  },
  {
    category: "Assumption",
    meaning:
      "A condition believed to be true but not yet supported by enough evidence.",
    example:
      "The team assumes all required cloud audit sources meet the expected freshness target.",
  },
  {
    category: "Exception",
    meaning:
      "A documented, approved deviation from a requirement with owner, rationale, residual risk, and review.",
    example:
      "A legacy reporting workload has a temporary monitoring exception until migration completes.",
  },
  {
    category: "Unknown",
    meaning:
      "A missing fact that affects confidence or prioritization.",
    example:
      "The student evidence set does not include proof that every backup has been recently restored in a synthetic exercise.",
  },
];

const northbridgeAssets = [
  {
    id: "CLOUD-NB-01",
    name: "Portal Application APP-NB-C1",
    role: "Fictional managed application serving student-facing features.",
    trust:
      "Receives authenticated identity context and communicates with protected data and queue services.",
    owner: "Application Platform Team",
    sensitivity: "Moderate",
    dependency:
      "Identity service ID-NB-C3, Data Store DATA-NB-C2, Queue Q-NB-C4, monitoring MON-NB-C8",
  },
  {
    id: "CLOUD-NB-02",
    name: "Profile Data Store DATA-NB-C2",
    role: "Managed storage containing synthetic student preference and profile records.",
    trust:
      "Accepts approved workload and administrative identities only in the fictional design.",
    owner: "Data Services Team",
    sensitivity: "High",
    dependency:
      "Workload identity, backup service BAK-NB-C7, access review process",
  },
  {
    id: "CLOUD-NB-03",
    name: "Cloud Identity Service ID-NB-C3",
    role: "Provides workforce, privileged, and workload identity context.",
    trust:
      "Acts as a central dependency for application and administration decisions.",
    owner: "Identity Governance Team",
    sensitivity: "High",
    dependency:
      "Role inventory, approval workflow, federation lifecycle, monitoring",
  },
  {
    id: "CLOUD-NB-04",
    name: "Processing Queue Q-NB-C4",
    role: "Supports asynchronous processing between the portal and background worker.",
    trust:
      "Carries synthetic processing context across a service boundary.",
    owner: "Application Operations",
    sensitivity: "Moderate",
    dependency:
      "Worker WRK-NB-C5, monitoring, service-health workflow",
  },
  {
    id: "CLOUD-NB-05",
    name: "Background Worker WRK-NB-C5",
    role: "Processes approved queued work using a dedicated workload identity.",
    trust:
      "Can update selected synthetic records through a scoped service role.",
    owner: "Platform Engineering",
    sensitivity: "High",
    dependency:
      "Queue, workload identity, data store, deployment governance",
  },
  {
    id: "CLOUD-NB-06",
    name: "Admin Workspace ADM-NB-C6",
    role: "Restricted administrative interface for approved cloud operations.",
    trust:
      "Crosses from normal workforce context into privileged cloud administration.",
    owner: "Cloud Operations Lead",
    sensitivity: "High",
    dependency:
      "Privileged identity, approvals, administrative logs, change governance",
  },
  {
    id: "CLOUD-NB-07",
    name: "Backup and Recovery Service BAK-NB-C7",
    role: "Stores synthetic recovery copies and supports restoration exercises.",
    trust:
      "Requires protected administrative access and clear recovery ownership.",
    owner: "Resilience Team",
    sensitivity: "High",
    dependency:
      "Data Store, recovery plan, validation record",
  },
  {
    id: "CLOUD-NB-08",
    name: "Cloud Monitoring MON-NB-C8",
    role: "Collects synthetic identity, workload, administrative, service-health, and storage evidence.",
    trust:
      "Provides evidence used by detections, investigations, governance, and recovery review.",
    owner: "Security Monitoring Team",
    sensitivity: "Moderate",
    dependency:
      "Source health, retention policy, access governance",
  },
];

const findings = [
  {
    id: "FIND-NB-C401",
    title: "Privileged cloud role review evidence is incomplete",
    domain: "Identity and Access",
    evidence:
      "The fictional role inventory names an owner and shows strong authentication, but the latest quarterly review record is missing from the supplied portfolio evidence.",
    interpretation:
      "The design includes the correct governance concept, but current review completion cannot be confirmed from the student evidence set.",
    risk:
      "Stale privileged access could persist longer than intended, increasing administrative exposure.",
    priority: "High",
    confidence: "Moderate",
    recommendation:
      "Require recurring review evidence, named ownership, temporary-access expiration, and an escalation path for overdue privileged reviews.",
    validation:
      "A synthetic completed-review record should show role, owner, disposition, date, and any removed or renewed access.",
  },
  {
    id: "FIND-NB-C402",
    title: "Workload identity purpose is defined but change-triggered review is unclear",
    domain: "Workload Identity",
    evidence:
      "WRK-NB-C5 uses a dedicated fictional identity with a scoped purpose, but the portfolio does not state when permissions must be reconsidered after workload changes.",
    interpretation:
      "Least-privilege intent exists, while lifecycle governance around changing workload scope remains under-specified.",
    risk:
      "Permissions could accumulate as the worker gains new responsibilities.",
    priority: "Medium",
    confidence: "High",
    recommendation:
      "Define change-triggered review whenever the workload adds data access, service dependencies, or materially different responsibilities.",
    validation:
      "A synthetic change review should show old purpose, new purpose, required permissions, owner approval, and resulting disposition.",
  },
  {
    id: "FIND-NB-C403",
    title: "Storage-sharing policy is clear but exception expiration needs stronger evidence",
    domain: "Data Protection",
    evidence:
      "DATA-NB-C2 is marked protected and external sharing is prohibited by default, but one fictional exception record has an owner and rationale without a visible expiration date.",
    interpretation:
      "The exception process exists, but one required governance field is incomplete.",
    risk:
      "A temporary exception could continue longer than intended if it lacks a closure or review trigger.",
    priority: "Medium",
    confidence: "High",
    recommendation:
      "Require explicit expiration or scheduled review for storage-sharing exceptions and track closure evidence.",
    validation:
      "The revised synthetic exception should include owner, rationale, residual risk, compensating controls, expiration, and closure.",
  },
  {
    id: "FIND-NB-C404",
    title: "Cloud audit coverage is broad but source-freshness expectations are inconsistent",
    domain: "Logging and Monitoring",
    evidence:
      "MON-NB-C8 receives synthetic identity, administrative, workload, storage, and health records, but only some sources have documented freshness expectations.",
    interpretation:
      "Coverage appears broad, yet reduced source freshness could weaken detection confidence without being immediately obvious.",
    risk:
      "Defenders may make slower or less confident decisions if a key evidence source is delayed.",
    priority: "High",
    confidence: "Moderate",
    recommendation:
      "Document required source coverage, freshness expectations, health ownership, dependent detections, and how reduced visibility changes confidence.",
    validation:
      "Synthetic source-health records should demonstrate normal, delayed, maintenance, and recovery states.",
  },
  {
    id: "FIND-NB-C405",
    title: "Backup ownership exists but restoration evidence is not current",
    domain: "Resilience and Recovery",
    evidence:
      "BAK-NB-C7 has a named fictional owner and documented recovery purpose, but the evidence set includes planning records rather than a recent completed restoration exercise.",
    interpretation:
      "Backup existence alone does not prove that the organization can restore the service to trusted operation.",
    risk:
      "Recovery capability could be overestimated during a disruption.",
    priority: "High",
    confidence: "High",
    recommendation:
      "Schedule safe synthetic restoration validation with defined success criteria, owner sign-off, dependency checks, and post-restore integrity review.",
    validation:
      "A fictional exercise record should show scope, expected outcome, result, gaps, owner, and follow-up actions.",
  },
  {
    id: "FIND-NB-C406",
    title: "Shared identity dependency needs stronger continuity planning",
    domain: "Dependency and Resilience",
    evidence:
      "APP-NB-C1, ADM-NB-C6, and several monitoring decisions depend on ID-NB-C3.",
    interpretation:
      "The central identity service is intentionally important, but its dependency concentration raises resilience and continuity questions.",
    risk:
      "Identity-service disruption could affect both normal user access and administrative recovery workflows.",
    priority: "Medium",
    confidence: "High",
    recommendation:
      "Document identity-service dependency, recovery assumptions, emergency governance, and the evidence required before privileged recovery actions proceed.",
    validation:
      "A synthetic tabletop record should show how owners communicate, preserve accountability, and restore trusted identity service.",
  },
];

const reviewQuestions = [
  {
    area: "Identity",
    questions: [
      "Which workforce, privileged, service, and external identities exist?",
      "Who owns each role or trust relationship?",
      "How is least privilege reviewed over time?",
      "What event should remove or reduce access?",
    ],
  },
  {
    area: "Data",
    questions: [
      "What fictional data exists and how sensitive is it?",
      "Who can read, change, share, export, or administer it?",
      "What retention, recovery, and exception rules apply?",
      "What evidence supports the claimed protection?",
    ],
  },
  {
    area: "Network and boundaries",
    questions: [
      "Which services communicate and why?",
      "Where does trust change?",
      "Which paths carry privileged or sensitive context?",
      "How is unnecessary connectivity limited conceptually?",
    ],
  },
  {
    area: "Logging",
    questions: [
      "Which events are important for defensive review?",
      "Which source owns each event?",
      "How are health, freshness, and retention governed?",
      "What happens to confidence when a source is missing?",
    ],
  },
  {
    area: "Recovery",
    questions: [
      "Which service must recover first?",
      "Which dependencies must be available?",
      "Who owns the recovery decision?",
      "What evidence proves service is trustworthy after restoration?",
    ],
  },
  {
    area: "Governance",
    questions: [
      "How are cloud changes approved and reviewed?",
      "How are exceptions documented and expired?",
      "Which findings have risk owners?",
      "What future event should trigger re-review?",
    ],
  },
];

const commonMistakes = [
  {
    mistake: "Assuming the provider secures everything",
    correction:
      "Cloud providers operate important platform controls, but customers still own major decisions about identity, data, configuration, workload design, logging, recovery, and governance.",
  },
  {
    mistake: "Treating a diagram as proof of implementation",
    correction:
      "A diagram shows design intent. Keep control evidence separate from what the architecture says should exist.",
  },
  {
    mistake: "Reviewing only network exposure",
    correction:
      "Modern cloud security also depends heavily on identity, workload permissions, data access, logging, service relationships, recovery, and lifecycle governance.",
  },
  {
    mistake: "Ignoring managed-service dependencies",
    correction:
      "Managed services reduce some operational work but can become critical dependencies. Ownership, recovery, evidence, and exit assumptions still matter.",
  },
  {
    mistake: "Calling every gap critical",
    correction:
      "Prioritize using business impact, exposure, privilege, dependencies, current controls, uncertainty, and residual risk.",
  },
  {
    mistake: "Testing a real cloud account for a portfolio",
    correction:
      "Student portfolio work should stay synthetic and provider-neutral. Architecture review and fictional evidence are enough to demonstrate advanced reasoning.",
  },
];

const quizQuestions = [
  {
    question:
      "What does shared responsibility mean in cloud security?",
    choices: [
      "Security duties are divided between provider capabilities and customer responsibilities, and the exact division depends on the service model",
      "The cloud provider is responsible for every customer security decision",
      "Customers are responsible for the provider's physical data centers",
      "Nobody owns security because responsibility is shared",
    ],
    answer: 0,
    explanation:
      "Cloud security is collaborative. Providers operate platform capabilities while customers retain important responsibility for identity, data, configuration, workloads, logging, recovery, and governance.",
  },
  {
    question:
      "Why should a cloud review distinguish architecture facts from control evidence?",
    choices: [
      "Because showing that a control should exist is not the same as proving that it was implemented, reviewed, and functioning as expected",
      "Because diagrams are always more reliable than evidence",
      "Because control evidence is unnecessary in cloud environments",
      "Because policy replaces technical evidence",
    ],
    answer: 0,
    explanation:
      "Architecture expresses design intent. Control evidence supports whether governance or implementation activity actually occurred.",
  },
  {
    question:
      "Which finding best represents a workload-identity lifecycle concern?",
    choices: [
      "A dedicated service identity has a clear current purpose, but there is no defined review when the workload gains new responsibilities",
      "The workload has a fictional name",
      "The service uses managed infrastructure",
      "The application has a dashboard",
    ],
    answer: 0,
    explanation:
      "Least privilege can weaken over time if workload scope changes without a corresponding permission review.",
  },
  {
    question:
      "Why is backup existence alone insufficient evidence of recovery readiness?",
    choices: [
      "Because recovery also requires restoration capability, dependency availability, ownership, validation, and evidence that the restored service is trustworthy",
      "Because backups should never be used",
      "Because cloud services cannot fail",
      "Because recovery is only a provider responsibility",
    ],
    answer: 0,
    explanation:
      "A backup is one part of resilience. Recovery readiness depends on the complete restoration and validation process.",
  },
  {
    question:
      "What should defenders do when cloud telemetry freshness is uncertain?",
    choices: [
      "Document the evidence gap, identify affected detections or decisions, define source-health ownership, and keep confidence bounded",
      "Assume an attack disabled logging",
      "Assume nothing happened because the log is late",
      "Ignore freshness because the source exists",
    ],
    answer: 0,
    explanation:
      "Missing or delayed evidence changes confidence and coverage but does not prove the cause.",
  },
  {
    question:
      "Which recommendation is strongest for a temporary cloud-security exception?",
    choices: [
      "Require owner, rationale, residual risk, compensating controls where appropriate, expiration or review date, and closure evidence",
      "Allow the exception to continue silently",
      "Delete the policy requirement",
      "Publish real production details to justify the exception",
    ],
    answer: 0,
    explanation:
      "Governed exceptions remain visible, owned, time-bounded, and reviewable.",
  },
  {
    question:
      "What is safest for a student Cloud Security Review Project?",
    choices: [
      "Use fictional provider-neutral architecture, synthetic evidence, and conceptual recommendations without accessing real cloud accounts",
      "Inspect a real organization's cloud environment without permission",
      "Publish real credentials to prove the finding",
      "Provide step-by-step cloud exploitation instructions",
    ],
    answer: 0,
    explanation:
      "The project should demonstrate architecture and governance reasoning without touching or exposing real systems.",
  },
];

const takeaways = [
  "Cloud security is a shared-responsibility problem: provider capabilities and customer governance must be understood together.",
  "Identity, data, trust boundaries, logging, recovery, configuration governance, and dependencies all belong in a mature cloud review.",
  "Architecture diagrams describe intended design, while evidence is needed to support claims about control operation or review.",
  "Workload identities need purpose, least privilege, ownership, and lifecycle review just like human identities.",
  "Cloud logging quality depends on coverage, freshness, ownership, retention, and knowledge of what each source can prove.",
  "Backups are not the same as recovery readiness; restoration and validation evidence matter.",
  "Findings should distinguish fact, interpretation, risk, uncertainty, recommendation, ownership, and validation evidence.",
  "A student cloud portfolio should remain provider-neutral, fictional, synthetic, publication-safe, and completely non-operational.",
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
        Module A19
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

export default function CloudSecurityReviewProjectPage() {
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
              A19.8
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cybersecurity Portfolio Projects
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A19.8
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Cloud Security Review Project
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A cloud security review asks whether identity, data, services,
            dependencies, visibility, recovery, and governance work together to
            protect the organization's goals. It also asks whether security
            responsibilities are actually understood and owned.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This project is provider-neutral, fictional, and non-operational. You
            will review supplied Northbridge architecture and synthetic evidence.
            You will not sign in to, scan, configure, test, or investigate any real
            cloud account or environment.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A19: Cybersecurity Portfolio Projects"
          lessonTitle="Cloud Security Review Project"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that cloud providers and customers have different security responsibilities.",
            "I can distinguish design intent from evidence that a control was actually reviewed or validated.",
            "I can reason about identity, data, logging, recovery, and governance without needing real production access.",
            "I will use only fictional Northbridge systems, provider-neutral concepts, and synthetic evidence.",
          ]}
        />

        <Section eyebrow="Professional Hook" title="Moving to the Cloud Does Not Move Every Security Decision to the Provider">
          <p className="leading-8">
            Cloud services can reduce the amount of infrastructure an organization
            must operate directly, but they do not eliminate the need for security
            design. Someone still decides who receives access, which data is stored,
            how services communicate, which logs matter, how exceptions work, and
            what happens when an important dependency is unavailable.
          </p>

          <p className="mt-4 leading-8">
            A professional cloud review therefore begins with responsibility. The
            reviewer asks which platform capabilities the provider supplies and
            which outcomes still depend on customer decisions. That prevents two
            common mistakes: assuming the provider handles everything, or assuming
            the customer must operate every layer itself.
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A19.8">
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7 text-cyan-50">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Core Teaching" title="Eight Domains of a Cloud Security Review">
          <p className="leading-8">
            Cloud reviews should not be reduced to checking whether storage is
            public or whether a firewall exists. Modern cloud environments are
            identity-centered, service-dependent, heavily automated, and built from
            managed capabilities. A review therefore needs several connected
            perspectives.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {cloudReviewDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.domain}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.purpose}
                </p>
                <p className="mt-4 rounded-xl border border-blue-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-blue-50">
                  <span className="font-black">Review question:</span>{" "}
                  {item.question}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Shared Responsibility" title="Provider Capability Does Not Replace Customer Governance">
          <p className="leading-8">
            Shared responsibility changes with the cloud service model, but the
            underlying reasoning stays consistent: the provider operates certain
            platform layers, while the customer still makes important decisions
            about use, access, data, configuration, monitoring, resilience, and
            governance.
          </p>

          <div className="mt-6 grid gap-5">
            {sharedResponsibilityExamples.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.area}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Provider side
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.provider}
                    </p>
                  </div>
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                      Customer side
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.customer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Evidence Discipline" title="Separate What the Architecture Says from What the Evidence Proves">
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceCategories.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.category}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  {item.meaning}
                </p>
                <p className="mt-4 text-sm leading-7 text-white">
                  <span className="font-black">Example:</span> {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Fictional Architecture" title="Northbridge Cloud Environment">
          <p className="leading-8">
            The following inventory is intentionally abstract. It contains no real
            provider names, addresses, account identifiers, credentials,
            configuration values, or production routes. It is enough to demonstrate
            cloud architecture and governance reasoning.
          </p>

          <div className="mt-6 grid gap-5">
            {northbridgeAssets.map((asset) => (
              <article
                key={asset.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                    {asset.id}
                  </span>
                  <h3 className="font-black text-white">{asset.name}</h3>
                  <span className="text-sm text-slate-400">
                    Sensitivity: {asset.sensitivity}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-slate-300">{asset.role}</p>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Trust context
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {asset.trust}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Owner
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {asset.owner}
                    </p>
                  </div>
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Dependencies
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {asset.dependency}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Cloud Review Board"
          subtitle="Synthetic portfolio dashboard summarizing the fictional cloud security review."
          metrics={[
            {
              label: "Cloud assets",
              value: "8",
              note: "Application, data, identity, queue, worker, admin, recovery, and monitoring",
            },
            {
              label: "Review findings",
              value: "6",
              note: "Identity, workload, data, monitoring, recovery, and dependency governance",
            },
            {
              label: "High priorities",
              value: "3",
              note: "Privileged review evidence, monitoring freshness, and recovery validation",
            },
            {
              label: "Open assumptions",
              value: "4",
              note: "Control validation, exception lifecycle, telemetry freshness, and recovery evidence",
            },
          ]}
        />

        <FakeAlertCard
          title="Cloud Review Finding Requires Validation Evidence"
          severity="High"
          time="Synthetic architecture review"
          source="Northbridge Cloud Governance Queue"
          details="The fictional backup service has a named owner and documented purpose, but the student evidence set does not contain a recent completed restoration exercise."
          recommendation="Treat backup existence and recovery readiness as separate claims. Require a safe synthetic restoration record with success criteria, dependency checks, owner sign-off, and post-restore validation."
        />

        <FakeLogPanel
          title="Synthetic Cloud Review Evidence"
          logs={[
            "[ID] privileged role inventory includes named owner and strong-authentication requirement",
            "[REVIEW] latest quarterly privileged-review artifact not present in supplied evidence set",
            "[WORKLOAD] WRK-NB-C5 uses dedicated fictional identity with documented current purpose",
            "[DATA] protected storage default prohibits external sharing unless exception is approved",
            "[EXCEPTION] one synthetic sharing exception lacks visible expiration date",
            "[MON] identity, admin, workload, storage, and service-health sources are present",
            "[RECOVERY] backup ownership exists; recent synthetic restoration evidence is not present",
            "[SAFETY] all records are fictional, provider-neutral, and non-operational",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — Backup or Recovery?"
          question="The architecture shows a managed backup service and a named recovery owner, but no recent synthetic restore result. What is the strongest conclusion?"
          evidence={[
            "The fictional backup service exists in the architecture.",
            "A recovery owner is named.",
            "The portfolio contains a recovery plan.",
            "No recent completed synthetic restoration exercise is included in the evidence set.",
          ]}
          options={[
            "Backup capability is documented, but recovery readiness remains only partially evidenced until restoration and validation are demonstrated",
            "The service is fully recoverable because a backup exists",
            "The backup must have failed because there is no restore record",
            "A student should connect to a real cloud account and test recovery",
          ]}
          bestAnswer={0}
          explanation="Backup existence supports one part of resilience. Recovery readiness also depends on restoration, dependencies, ownership, and validation evidence."
        />

        <Section eyebrow="Review Findings" title="Six Northbridge Cloud Security Findings">
          <p className="leading-8">
            Each finding separates evidence from interpretation and then connects
            the issue to risk, priority, recommendation, and validation. This makes
            the project more defensible than a checklist containing only pass/fail
            labels.
          </p>

          <div className="mt-6 grid gap-5">
            {findings.map((finding) => (
              <article
                key={finding.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-purple-300 px-3 py-1 text-xs font-black text-slate-950">
                    {finding.id}
                  </span>
                  <h3 className="font-black text-white">{finding.title}</h3>
                  <span className="text-sm text-slate-400">{finding.domain}</span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {finding.evidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                      Interpretation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {finding.interpretation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Risk
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {finding.risk}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Priority / confidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {finding.priority} priority · {finding.confidence} confidence
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Recommendation
                  </p>
                  <p className="mt-2 text-sm leading-7 text-purple-50">
                    {finding.recommendation}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Validation evidence
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {finding.validation}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — Shared Responsibility"
          question="Northbridge uses a managed identity service. Which statement best reflects shared responsibility?"
          evidence={[
            "The fictional provider operates the underlying managed identity platform.",
            "Northbridge defines privileged roles, federation relationships, service identities, and approval workflows.",
            "Northbridge decides when access should be reviewed and removed.",
            "The provider does not know Northbridge's internal business purpose for each role.",
          ]}
          options={[
            "The provider operates platform capabilities, while Northbridge remains responsible for identity design, grants, ownership, lifecycle, and governance",
            "The provider is responsible for every Northbridge access decision",
            "Northbridge should operate the provider's physical identity infrastructure",
            "Shared responsibility means nobody is accountable",
          ]}
          bestAnswer={0}
          explanation="Managed services change operational responsibility but do not remove customer responsibility for how the capability is configured, governed, and used."
        />

        <Section eyebrow="Review Questions" title="Use Questions to Drive Evidence-Based Review">
          <div className="grid gap-5 md:grid-cols-2">
            {reviewQuestions.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.area}</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-cyan-100">
                  {item.questions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Prioritization" title="A Finding Matters Because of Context, Not Because It Is in the Cloud">
          <p className="leading-8">
            Cloud findings should be prioritized the same way other professional
            security findings are: by considering realistic impact, exposure,
            privilege, dependencies, current controls, evidence confidence,
            recovery readiness, business importance, and ownership.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Business importance",
                detail:
                  "A finding affecting a critical identity or recovery dependency may deserve more attention than a similar issue in a low-impact reporting service.",
              },
              {
                title: "Privilege and reach",
                detail:
                  "Administrative and workload identities with broader authority deserve stronger ownership and lifecycle governance.",
              },
              {
                title: "Dependency concentration",
                detail:
                  "Identity, monitoring, network, storage, or queue services can influence many downstream functions at once.",
              },
              {
                title: "Control strength",
                detail:
                  "Existing controls lower residual risk only when their relevance and evidence are understood.",
              },
              {
                title: "Evidence confidence",
                detail:
                  "A confirmed policy gap should not be written the same way as an assumption based on incomplete evidence.",
              },
              {
                title: "Recovery readiness",
                detail:
                  "A service with strong prevention but weak recovery evidence may still deserve high resilience priority.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Common Mistakes" title="Avoid These Cloud Review Anti-Patterns">
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map((item) => (
              <article
                key={item.mistake}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.mistake}</h3>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  {item.correction}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Safe Fictional Lab" title="Build the Northbridge Cloud Security Review">
          <p className="leading-8">
            Use only the supplied architecture, findings, policy requirements, and
            synthetic records. The exercise is a documentation review, not a live
            cloud assessment.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Task 1 — Responsibility map",
                detail:
                  "Choose four cloud capabilities and explain the fictional provider responsibility, Northbridge responsibility, and evidence needed to review the customer side.",
              },
              {
                title: "Task 2 — Identity review",
                detail:
                  "Review privileged and workload identities. Identify purpose, owner, lifecycle trigger, evidence gap, and one improvement.",
              },
              {
                title: "Task 3 — Data review",
                detail:
                  "Describe the protected storage asset, approved access, sharing rule, exception process, retention or recovery need, and one governance concern.",
              },
              {
                title: "Task 4 — Visibility review",
                detail:
                  "List the important synthetic telemetry sources, explain what each supports, and identify how a missing source would change confidence.",
              },
              {
                title: "Task 5 — Recovery review",
                detail:
                  "Explain why backup evidence differs from restoration evidence and define what a successful synthetic recovery record should contain.",
              },
              {
                title: "Task 6 — Executive summary",
                detail:
                  "Write one short paragraph naming the top three findings, overall review confidence, and the most important owner decisions.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision 1 — Missing Privileged Review Record"
          scenario="The fictional cloud role inventory is well documented, but the latest recurring privileged-access review cannot be found in the supplied portfolio evidence."
          choices={[
            {
              label: "Choice A",
              response:
                "Record a governance evidence gap, keep the finding bounded, assign the fictional identity owner, and require completed review evidence before claiming the lifecycle control is current.",
              outcome:
                "Best defensive choice. It separates architecture intent from evidence that the control activity occurred.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume all privileged access is unauthorized.",
              outcome:
                "Risky. Missing review evidence does not prove every grant is invalid.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Sign in to a real cloud account to inspect privileged users.",
              outcome:
                "Unsafe. This student project does not authorize access or investigation of real cloud environments.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Temporary Storage Exception"
          scenario="A fictional storage-sharing exception has an approved owner and rationale but no expiration or scheduled review date."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the exception visible and require an expiration or review point, residual-risk statement, compensating controls where appropriate, and closure evidence.",
              outcome:
                "Best governance choice. Temporary exceptions should not become invisible permanent states.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Treat the exception as permanent because it was approved once.",
              outcome:
                "Risky. Business context and residual risk can change over time.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Publish real storage identifiers and permissions to prove the issue.",
              outcome:
                "Unsafe. Portfolio work must not expose real cloud configuration or sensitive internal information.",
              tone: "risk",
            },
          ]}
        />

        <Section eyebrow="Advanced Challenge" title="Defend the Cloud Review to Three Audiences">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Cloud Architect",
                detail:
                  "Explain trust boundaries, workload identities, data flows, dependencies, shared responsibility, and which design assumptions need validation.",
              },
              {
                title: "Risk Owner",
                detail:
                  "Explain top findings in terms of business impact, residual risk, ownership, recovery, and the decisions required next.",
              },
              {
                title: "Portfolio Reviewer",
                detail:
                  "Explain how the artifact demonstrates provider-neutral knowledge, evidence discipline, governance, prioritization, safe recommendations, and professional communication.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <DefenderChecklist
          title="Cloud Security Review Project Checklist"
          items={[
            "I explained shared responsibility instead of assuming the provider handles every security decision.",
            "I reviewed identity, data, trust boundaries, logging, recovery, configuration governance, and dependencies.",
            "I separated confirmed architecture facts, policy requirements, control evidence, assumptions, exceptions, and unknowns.",
            "I reviewed both workforce and workload identities.",
            "I explained how data sensitivity, sharing, lifecycle, and recovery affect cloud decisions.",
            "I documented important telemetry sources and known visibility limitations.",
            "I treated backup and recovery validation as different evidence questions.",
            "I prioritized findings using business impact, privilege, dependencies, controls, uncertainty, and residual risk.",
            "Each important recommendation has an owner and validation evidence.",
            "Exceptions include rationale, ownership, residual risk, and a review or expiration point.",
            "I kept all recommendations defensive and provider-neutral.",
            "My portfolio contains no real cloud credentials, account identifiers, internal architecture, or confidential security information.",
          ]}
        />

        <Section eyebrow="Assessment" title="A19.8 Knowledge Check">
          <MiniQuiz
            title="A19.8 Mini Quiz: Cloud Security Review Project"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Cloud Security Review Project"
          prompt="Create a professional fictional Northbridge Cloud Security Review. Include scope, shared-responsibility summary, cloud asset inventory, identity review, data-protection review, trust-boundary review, logging and monitoring review, resilience and recovery review, configuration-governance review, six findings with evidence and confidence, top-three priorities, owner-based recommendations, validation evidence, one governed exception example, an executive summary, and a publication-safety statement."
          tips={[
            "Keep the project provider-neutral so the reasoning remains useful across cloud platforms.",
            "Separate design facts from proof that a control was reviewed or functioning.",
            "Include both human and workload identity governance.",
            "Treat telemetry source health and recovery validation as important dependencies.",
            "Use findings that connect evidence, interpretation, risk, recommendation, ownership, and validation.",
            "Use only fictional architecture and synthetic evidence; never connect to or inspect real cloud accounts.",
          ]}
        />

        <Section eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A19.9?">
          <p className="leading-8">
            A19.9 moves into Portfolio Reflection and Presentation. Before
            continuing, make sure you can explain not only what your cloud review
            found, but also what the artifact demonstrates about your reasoning,
            communication, ethical boundaries, revision process, and growth across
            the entire portfolio module.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain shared responsibility without oversimplifying provider and customer duties.",
              "I can review cloud identity, data, logging, recovery, and governance using fictional evidence.",
              "I can separate architecture intent from control-validation evidence.",
              "I can write a bounded cloud finding with evidence, risk, priority, recommendation, owner, and validation.",
              "I can explain why a student cloud portfolio should remain provider-neutral, fictional, and non-operational.",
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

        <Section eyebrow="Portfolio Build Guide" title="Make the Cloud Review Easy to Understand and Safe to Share">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Open with scope and responsibility",
                detail:
                  "Tell the reader what the fictional environment contains and how provider and customer responsibilities are divided conceptually.",
              },
              {
                title: "Use an asset inventory",
                detail:
                  "Stable fictional IDs make architecture, findings, risks, and recommendations easy to connect without repeating long descriptions.",
              },
              {
                title: "Separate evidence and interpretation",
                detail:
                  "Show what the synthetic record says before explaining what you think it means.",
              },
              {
                title: "Group findings by domain",
                detail:
                  "Identity, data, monitoring, resilience, governance, and dependency sections help reviewers understand the breadth of the review.",
              },
              {
                title: "Rank only material findings",
                detail:
                  "A portfolio looks stronger when priorities are justified rather than when every minor observation is labeled High.",
              },
              {
                title: "Show validation evidence",
                detail:
                  "For each major recommendation, state what fictional record or review would demonstrate that the improvement is complete.",
              },
              {
                title: "Summarize for leadership",
                detail:
                  "Finish with top risks, overall confidence, owner decisions, and the next review milestone rather than repeating every technical detail.",
              },
              {
                title: "Remove real cloud details",
                detail:
                  "Do not include production screenshots, account IDs, resource names, credentials, secret values, internal routes, or unresolved real findings.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
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
            Cloud review in this lesson is fictional, provider-neutral, and non-operational
          </h2>
          <p className="mt-3 leading-7">
            Do not sign in to, scan, probe, enumerate, exploit, test, configure,
            modify, or investigate any real cloud account, identity, storage
            service, network, workload, monitoring system, or backup environment.
            Do not publish real account identifiers, credentials, secret values,
            production diagrams, access policies, logs, private records, internal
            routes, or unresolved security findings. Use only the synthetic
            Northbridge evidence supplied in the lesson.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A19.8 Cloud Security Review Project Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a portfolio-ready structure for reviewing cloud security
            across shared responsibility, identity, data, logging, resilience, and
            governance. Next, A19.9 focuses on reflecting on your portfolio work and
            presenting it clearly to different audiences.
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