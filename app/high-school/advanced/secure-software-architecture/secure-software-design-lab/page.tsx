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
const previousLesson = `${modulePath}/secure-deployment-concepts`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate the major A11 artifacts into one coherent secure software architecture assessment.",
  "Evaluate whether requirements, threat-model concerns, secrets, dependencies, logging, code review, validation, and deployment evidence tell a consistent story.",
  "Identify contradictions, missing ownership, stale evidence, and residual risk without overstating certainty.",
  "Make defensible design and release recommendations for a fictional application using bounded evidence and explicit assumptions.",
  "Produce a polished Secure Software Design Assessment suitable for the A11 portfolio outcome.",
];

const caseOverview = [
  {
    title: "Application",
    value: "Northbridge Student Services Portal",
    detail:
      "A fictional staff-facing web application used for approved student-support workflows.",
  },
  {
    title: "Primary users",
    value: "Counselors, administrators, support staff",
    detail:
      "Roles differ in authorization scope and privileged capabilities.",
  },
  {
    title: "Sensitive assets",
    value: "Student-support records, account state, audit evidence",
    detail:
      "The architecture must protect privacy, integrity, least privilege, and traceability.",
  },
  {
    title: "External services",
    value: "Scheduling and notification providers",
    detail:
      "Only approved minimum data may cross external trust boundaries.",
  },
  {
    title: "Critical dependencies",
    value: "Identity SDK, messaging client, report renderer, signing service",
    detail:
      "Ownership, support, provenance, compatibility, and update evidence matter.",
  },
  {
    title: "Release candidate",
    value: "NB-PORTAL-11.10-RC1",
    detail:
      "The capstone asks whether the current fictional evidence supports release readiness.",
  },
];

const architectureAreas = [
  {
    area: "Identity",
    requirement:
      "Staff access uses the approved workforce identity provider.",
    threat:
      "Disabled or stale identities could retain access if lifecycle assumptions fail.",
    design:
      "Application trusts the approved identity provider and rejects invalid or disabled staff sessions.",
    evidence:
      "Identity design note, test evidence, release configuration review.",
    status: "Confirmed",
  },
  {
    area: "Authorization",
    requirement:
      "Counselors may view only records for students assigned to them.",
    threat:
      "Stale or incorrect assignment data could produce access inconsistent with policy.",
    design:
      "Central authorization service checks the approved assignment source before record access.",
    evidence:
      "Code-review evidence, positive/negative test results, audit events.",
    status: "Conditional",
  },
  {
    area: "Data minimization",
    requirement:
      "Scheduling integration receives only studentRef, date, and time.",
    threat:
      "Future feature additions could expand outbound data beyond the approved purpose.",
    design:
      "Integration payload builder emits approved fields only.",
    evidence:
      "Requirement, pseudocode review, validation payload field list.",
    status: "Confirmed",
  },
  {
    area: "Secrets",
    requirement:
      "Production integrations use approved managed secret references.",
    threat:
      "Shared, unowned, stale, or cross-environment credentials increase lifecycle risk.",
    design:
      "Managed secret references and environment-specific access are used.",
    evidence:
      "Secrets register, ownership, rotation, environment metadata.",
    status: "Confirmed",
  },
  {
    area: "Dependencies",
    requirement:
      "Business-critical dependencies have owner, source, version, support status, and review trigger.",
    threat:
      "Unsupported or unvalidated dependency changes can weaken release confidence.",
    design:
      "Dependency register and release gates track material components.",
    evidence:
      "Dependency inventory, supplier/source records, compatibility results.",
    status: "Conditional",
  },
  {
    area: "Logging",
    requirement:
      "Privileged and authorization events must be auditable without exposing secrets or unnecessary private data.",
    threat:
      "Missing fields or degraded source health can weaken investigations and accountability.",
    design:
      "Structured audit events use actor/target/action/result/timestamp/correlation ID.",
    evidence:
      "Logging schema, redaction validation, source-health dashboard.",
    status: "Confirmed",
  },
  {
    area: "Resilience",
    requirement:
      "Core record workflow remains available when notification provider is unavailable.",
    threat:
      "External service outage could cascade into core service failure.",
    design:
      "Notification work is queued separately from core record persistence.",
    evidence:
      "Failure-mode validation, retry state, operational logs.",
    status: "Conditional",
  },
  {
    area: "Deployment",
    requirement:
      "Release requires current blocking evidence, configuration baseline, rollback, and monitoring readiness.",
    threat:
      "A release could ship with stale evidence or unexpected environment drift.",
    design:
      "Release packet ties artifact identity to current review and validation evidence.",
    evidence:
      "Artifact record, configuration baseline, rollback plan, release decision.",
    status: "Conditional",
  },
];

const designPrinciples = [
  {
    title: "Least privilege",
    meaning:
      "Users, services, dependencies, and secrets receive only the access needed for their approved purpose.",
    evidence:
      "Authorization requirements, service identities, secret scope, dependency privilege notes.",
  },
  {
    title: "Explicit trust boundaries",
    meaning:
      "The design identifies where identity, data, ownership, or control moves between different trust assumptions.",
    evidence:
      "Threat model, data-flow diagram, external integration review.",
  },
  {
    title: "Traceable requirements",
    meaning:
      "Important security behavior can be traced from requirement to design, review, validation, release, and maintenance.",
    evidence:
      "Requirement IDs linked across all A11 artifacts.",
  },
  {
    title: "Safe failure",
    meaning:
      "Dependency and application failures should preserve integrity and avoid expanding privilege or data exposure.",
    evidence:
      "Error design, resilience validation, rollback behavior.",
  },
  {
    title: "Evidence-based confidence",
    meaning:
      "Claims are based on current supplied evidence and limitations remain visible.",
    evidence:
      "Confirmed, Conditional, Unknown, and Blocking statuses.",
  },
  {
    title: "Lifecycle ownership",
    meaning:
      "Security responsibilities remain assigned after release for secrets, dependencies, logs, exceptions, and retirement.",
    evidence:
      "Owner fields, review dates, change triggers, closure criteria.",
  },
];

const vocabulary = [
  {
    term: "Architecture assessment",
    definition:
      "A structured review of how software requirements, components, trust boundaries, controls, evidence, ownership, and residual risk fit together.",
  },
  {
    term: "Design rationale",
    definition:
      "The reasoning that explains why a particular architecture decision was chosen and what requirement or risk it addresses.",
  },
  {
    term: "Residual risk",
    definition:
      "Risk remaining after safeguards, evidence, validation, and exceptions are considered.",
  },
  {
    term: "Evidence conflict",
    definition:
      "A situation where two pieces of evidence disagree or describe different versions, environments, configurations, or assumptions.",
  },
  {
    term: "Traceability",
    definition:
      "The ability to follow a security requirement through design, implementation, review, validation, deployment, and maintenance.",
  },
  {
    term: "Design exception",
    definition:
      "A governed, time-bounded acceptance of a condition that does not meet the normal architecture standard.",
  },
  {
    term: "Decision record",
    definition:
      "A concise document explaining the decision, evidence, assumptions, alternatives, owner, and review trigger.",
  },
  {
    term: "Security debt",
    definition:
      "Deferred security work that creates future maintenance, evidence, or risk-management burden.",
  },
  {
    term: "Control objective",
    definition:
      "The security outcome a safeguard is intended to achieve.",
  },
  {
    term: "Evidence freshness",
    definition:
      "Whether evidence still matches the current artifact, configuration, dependency, role, or environment.",
  },
  {
    term: "Release confidence",
    definition:
      "The degree to which current evidence supports the claim that the release meets defined security expectations.",
  },
  {
    term: "Change trigger",
    definition:
      "A future condition that requires architecture, requirement, threat, validation, or release evidence to be reviewed again.",
  },
];

const portfolioArtifacts = [
  {
    lesson: "A11.1",
    artifact: "Lifecycle Security Map",
    contributes:
      "Shows where security ownership, evidence, and review occur from planning through retirement.",
  },
  {
    lesson: "A11.2",
    artifact: "Secure Requirements Register",
    contributes:
      "Defines expected security behavior, owners, evidence, acceptance criteria, and change triggers.",
  },
  {
    lesson: "A11.3",
    artifact: "Software Threat Model",
    contributes:
      "Maps assets, trust boundaries, concerns, controls, evidence, priorities, and uncertainty.",
  },
  {
    lesson: "A11.4",
    artifact: "Secrets Governance Model",
    contributes:
      "Documents metadata-only ownership, purpose, environment, scope, rotation, monitoring, and retirement.",
  },
  {
    lesson: "A11.5",
    artifact: "Dependency Risk Register",
    contributes:
      "Tracks source, version, support, ownership, runtime use, exception, validation, and retirement.",
  },
  {
    lesson: "A11.6",
    artifact: "Error and Logging Design",
    contributes:
      "Defines safe user messages, audit evidence, redaction, correlation, retention, and source health.",
  },
  {
    lesson: "A11.7",
    artifact: "Security Code Review Register",
    contributes:
      "Connects implementation evidence to requirements, findings, confidence, owners, and closure conditions.",
  },
  {
    lesson: "A11.8",
    artifact: "Security Validation Matrix",
    contributes:
      "Shows expected outcomes, synthetic fixtures, evidence, stop conditions, limitations, and release impact.",
  },
  {
    lesson: "A11.9",
    artifact: "Deployment Readiness Record",
    contributes:
      "Brings artifact identity, configuration, access, dependencies, monitoring, rollback, and release decision together.",
  },
];

const evidenceConflicts = [
  {
    id: "EC-01",
    conflict:
      "Dependency register says DEP-02 compatibility is Unknown, while an old release note says the update was validated.",
    why:
      "The old release note belongs to a previous candidate build and should not be treated as current evidence.",
    resolution:
      "Keep current DEP-02 status Unknown until compatibility evidence matching NB-PORTAL-11.10-RC1 is attached.",
  },
  {
    id: "EC-02",
    conflict:
      "Threat model says temporary counselor role requires re-review, but the current authorization test matrix covers only the standard counselor role.",
    why:
      "A new role changes privilege and assignment assumptions.",
    resolution:
      "Add the temporary role to requirements, threat model, code review, and validation before release if the role is included.",
  },
  {
    id: "EC-03",
    conflict:
      "Secrets register lists all production records owned, but one legacy maintenance credential is still marked Blocked.",
    why:
      "The blocked credential is outside the current release path but remains architecture debt.",
    resolution:
      "Keep the release scope explicit and retain the migration/retirement requirement rather than pretending the debt is resolved.",
  },
  {
    id: "EC-04",
    conflict:
      "Logging design requires correlation IDs across critical workflows, but legacy report events do not include one.",
    why:
      "Cross-service traceability is weaker for that workflow.",
    resolution:
      "Keep LOG-06 Conditional and include correlation support in the report-renderer replacement plan.",
  },
];

const riskRegister = [
  {
    id: "RISK-01",
    area: "Authorization freshness",
    condition:
      "Assignment data may become stale before synchronization completes.",
    impact:
      "A counselor could temporarily receive access inconsistent with the intended assignment rule.",
    control:
      "Central authorization service, assignment source, denial audit, change-trigger review.",
    evidence:
      "Normal positive/negative tests passed; delayed-update evidence is incomplete.",
    residual: "Medium",
    owner: "Application Owner + Assignment Data Owner",
    action:
      "Complete stale-assignment validation and define synchronization behavior.",
  },
  {
    id: "RISK-02",
    area: "Messaging dependency",
    condition:
      "Candidate dependency update lacks compatibility evidence for the current release candidate.",
    impact:
      "Queue, retry, or failure behavior may differ from the approved design.",
    control:
      "Dependency release gate and rollback plan.",
    evidence:
      "Version is known; validation is missing.",
    residual: "High until resolved",
    owner: "Notification Service Team",
    action:
      "Attach current authorized compatibility validation or hold the release.",
  },
  {
    id: "RISK-03",
    area: "Legacy report renderer",
    condition:
      "Support ends this quarter.",
    impact:
      "Maintenance and response capability may degrade.",
    control:
      "Time-bounded exception, monitoring, migration project.",
    evidence:
      "Migration target and exception are current.",
    residual: "Medium",
    owner: "Reporting Team",
    action:
      "Complete replacement and close exception before expiration.",
  },
  {
    id: "RISK-04",
    area: "Logging traceability",
    condition:
      "Legacy report workflow lacks correlation ID.",
    impact:
      "Multi-service troubleshooting and investigation are slower and less reliable.",
    control:
      "Other event metadata remains available.",
    evidence:
      "LOG-06 review identifies the gap.",
    residual: "Low to Medium",
    owner: "Reporting Team + Monitoring Owner",
    action:
      "Add correlation support during renderer replacement.",
  },
  {
    id: "RISK-05",
    area: "Temporary counselor role",
    condition:
      "Role is proposed but not fully represented in requirements and validation.",
    impact:
      "Authorization assumptions could be incomplete if the role ships.",
    control:
      "Change-trigger policy.",
    evidence:
      "Role is identified in threat model; current test matrix does not cover it.",
    residual: "High if included in release",
    owner: "Product Owner + Identity Owner",
    action:
      "Exclude from release or complete full requirement/design/review/validation chain.",
  },
];

const decisionRecords = [
  {
    id: "ADR-SEC-01",
    decision: "Use central assignment-based authorization",
    rationale:
      "Assignment rules should be enforced consistently by a trusted service rather than duplicated across clients.",
    alternatives:
      "Client-only visibility rules; direct record ownership checks in each feature.",
    evidence:
      "REQ-AUTHZ-03, TM-01, CR-01, VAL-01, VAL-02.",
    tradeoff:
      "The design depends on assignment-source freshness and service availability.",
    trigger:
      "New counselor role, assignment-source change, authorization service redesign.",
  },
  {
    id: "ADR-SEC-02",
    decision: "Keep external scheduling payload minimal",
    rationale:
      "The integration needs appointment coordination, not counseling-note content.",
    alternatives:
      "Send broader record payload; allow vendor-driven field expansion.",
    evidence:
      "REQ-DATA-02, TM-02, CR-03, VAL-04.",
    tradeoff:
      "Future scheduling features may require renewed purpose and data review.",
    trigger:
      "New vendor field, new scheduling feature, supplier migration.",
  },
  {
    id: "ADR-SEC-03",
    decision: "Use managed secret references",
    rationale:
      "Centralized secret governance reduces uncontrolled copying and supports ownership, rotation, and environment separation.",
    alternatives:
      "Embedded values; shared configuration files; long-lived shared credentials.",
    evidence:
      "A11.4 secrets register, CR-04, deployment metadata.",
    tradeoff:
      "Availability and permission of the managed secret system become architecture dependencies.",
    trigger:
      "Secret platform change, workload identity migration, new environment.",
  },
  {
    id: "ADR-SEC-04",
    decision: "Treat monitoring source health as release evidence",
    rationale:
      "A quiet dashboard is not trustworthy when the source itself is stale or degraded.",
    alternatives:
      "Assume no events means no activity.",
    evidence:
      "A11.6 source-health model and A11.9 monitoring readiness.",
    tradeoff:
      "Additional operational ownership and alerting are required.",
    trigger:
      "Logging platform migration, parser change, new critical event source.",
  },
];

const dashboardMetrics = [
  {
    label: "Integrated artifacts",
    value: "9 / 9",
    note: "All A11 portfolio artifacts represented in capstone",
  },
  {
    label: "Architecture areas",
    value: "8",
    note: "Identity, authorization, data, secrets, dependencies, logging, resilience, deployment",
  },
  {
    label: "Open residual risks",
    value: "5",
    note: "1 currently release-blocking",
  },
  {
    label: "Traceability",
    value: "94%",
    note: "Temporary counselor role and DEP-02 need stronger closure evidence",
  },
];

const logs = [
  "[15:05] CAPSTONE artifact=NB-PORTAL-11.10-RC1 requirements=LOADED",
  "[15:14] TRACE REQ-AUTHZ-03 -> TM-01 -> CR-01 -> VAL-01/02 status=CONDITIONAL",
  "[15:22] TRACE REQ-DATA-02 -> TM-02 -> CR-03 -> VAL-04 status=CONFIRMED",
  "[15:31] RISK RISK-02 dependency=DEP-02 validation=MISSING residual=HIGH",
  "[15:42] CONFLICT EC-02 temporary-counselor coverage=INCOMPLETE",
  "[15:50] RELEASE blocker=DEP-02_COMPATIBILITY",
  "[16:02] CAPSTONE recommendation=HOLD_UNTIL_BLOCKER_RESOLVED",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep the release recommendation on Hold until current DEP-02 compatibility evidence is attached or a valid policy-approved decision explicitly resolves the gate.",
    outcome:
      "Best. The capstone stays consistent with the evidence and release policy.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Ignore the gap because most other architecture areas are strong.",
    outcome:
      "Risky. A single mandatory gate can still determine the release decision.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Copy the old compatibility result from the prior release candidate into the current packet.",
    outcome:
      "Risky. Stale evidence should not be relabeled as current.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Either exclude the new temporary counselor role from this release or complete its requirement, threat-model, review, and validation evidence before inclusion.",
    outcome:
      "Best. The role is treated as a real change to the authorization model.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Include the role because it is similar to an existing counselor role.",
    outcome:
      "Risky. Similar names do not prove equivalent privilege or assignment behavior.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Add the role to the release notes only and defer security evidence until after release.",
    outcome:
      "Caution. Documentation helps, but the security decision remains incomplete.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the main purpose of the A11 Secure Software Design Assessment?",
    choices: [
      "To prove software can never fail.",
      "To integrate requirements, architecture, controls, evidence, ownership, residual risk, and release decisions into one defensible assessment.",
      "To replace all future security work.",
      "To list as many security tools as possible.",
    ],
    answer: 1,
    explanation:
      "The capstone is about coherent evidence-based architecture reasoning across the software lifecycle.",
  },
  {
    question:
      "Two pieces of evidence refer to different release candidates. What should the reviewer do?",
    choices: [
      "Use whichever one is more favorable.",
      "Treat them as potentially stale or conflicting and confirm which evidence applies to the current artifact.",
      "Combine them automatically.",
      "Ignore artifact identity.",
    ],
    answer: 1,
    explanation:
      "Evidence must match the current artifact, configuration, and scope before it supports a claim.",
  },
  {
    question:
      "A threat-model concern is still Conditional. Does that automatically block release?",
    choices: [
      "Always.",
      "Never.",
      "Not necessarily; the release decision depends on the requirement, residual risk, policy, evidence, ownership, and whether the condition is permitted or blocking.",
      "Only if the concern has a long description.",
    ],
    answer: 2,
    explanation:
      "Conditional status requires context and policy rather than an automatic answer.",
  },
  {
    question:
      "What is the strongest response to a new role that is not covered by existing authorization validation?",
    choices: [
      "Assume the existing role tests apply.",
      "Treat it as a change trigger and complete the needed requirement, design, review, and validation evidence before inclusion.",
      "Add it silently.",
      "Ignore authorization because the UI is unchanged.",
    ],
    answer: 1,
    explanation:
      "Role changes can alter privilege and authorization assumptions even when the interface looks similar.",
  },
  {
    question:
      "Why should residual risk remain visible in the final assessment?",
    choices: [
      "To make the report look more serious.",
      "Because controls reduce risk but do not necessarily eliminate every uncertainty or future maintenance burden.",
      "Because all software is unsafe.",
      "Because evidence should never be collected.",
    ],
    answer: 1,
    explanation:
      "Residual risk makes the final decision more honest and supports future ownership and review.",
  },
  {
    question:
      "What makes a strong architecture decision record?",
    choices: [
      "Only the chosen technology name.",
      "Decision, rationale, alternatives, evidence, tradeoffs, owner, and change triggers.",
      "A screenshot with no explanation.",
      "A permanent rule that can never be reviewed.",
    ],
    answer: 1,
    explanation:
      "Decision records preserve why a choice was made and when it should be reconsidered.",
  },
  {
    question:
      "The final capstone has one mandatory blocking evidence gap. What is the strongest recommendation?",
    choices: [
      "Release because the overall score is high.",
      "Hold or remediate according to the defined release policy until the blocking gap is resolved.",
      "Change the evidence status manually.",
      "Delete the blocker from the report.",
    ],
    answer: 1,
    explanation:
      "A mandatory release gate should be handled consistently and transparently.",
  },
];

const checklistItems = [
  "The assessment states the fictional system, scope, audience, artifact, and decision being reviewed.",
  "Security requirements are traceable to architecture, review, validation, and release evidence.",
  "Threat-model concerns are linked to controls, owners, evidence, and residual risk.",
  "Secret governance uses metadata only and includes ownership, environment, scope, rotation, and retirement.",
  "Material dependencies include source, version, support, ownership, runtime role, validation, and replacement plans.",
  "Logging design includes auditability, redaction, correlation, retention, access, and source health.",
  "Code-review findings separate observation, interpretation, limitation, risk, owner, and closure evidence.",
  "Validation evidence uses synthetic data, defined expected outcomes, stop conditions, and limitations.",
  "Deployment readiness includes artifact identity, configuration baseline, monitoring, rollback, and exception status.",
  "Evidence conflicts and stale evidence are explicitly resolved.",
  "Unknowns remain Unknown rather than being converted into passes.",
  "Residual risk is visible and assigned to accountable owners.",
  "Architecture decision records explain rationale and tradeoffs.",
  "Change triggers identify when the assessment should be revisited.",
  "The final recommendation follows from the evidence and policy.",
  "No artifact contains real credentials, private data, internal production details, or harmful testing instructions.",
];

const takeaways = [
  "Secure software architecture is a connected system of requirements, design decisions, evidence, ownership, and lifecycle controls.",
  "The strongest assessment checks whether all artifacts tell a consistent story about the same software and release candidate.",
  "Evidence conflicts, stale records, missing ownership, and Unknowns should be made visible rather than hidden.",
  "Residual risk remains even when many controls are strong.",
  "Architecture decision records preserve rationale, alternatives, tradeoffs, and change triggers.",
  "A release recommendation should follow the defined policy and current evidence, not schedule pressure.",
  "Traceability lets teams explain why a control exists and what evidence supports it.",
  "Security debt should have owners, target states, and closure criteria.",
  "The final A11 portfolio should be safe to share because it uses fictional systems, synthetic identifiers, and metadata-only sensitive records.",
  "A11.10 prepares you for the A11 Module Test and for later Advanced architecture modules.",
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
        Module Test
      </Link>
    </div>
  );
}

export default function SecureSoftwareDesignLabPage() {
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
              A11.10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Secure Software Architecture
            </span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-100">
              Capstone Lab
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A11.10
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Secure Software Design Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This capstone brings every A11 concept into one fictional software
            architecture assessment. Your goal is not to create more separate
            artifacts. Your goal is to determine whether the artifacts already
            built form one coherent, traceable, evidence-based security design.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            You will review architecture areas, evidence conflicts, residual
            risks, decision records, release blockers, and portfolio quality
            without accessing or testing any real system.
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
          lessonTitle="Secure Software Design Lab"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A11.10 Capstone Readiness"
          items={[
            "I can explain the lifecycle role of security requirements, threat models, secrets, dependencies, logs, code review, validation, and deployment.",
            "I understand that the capstone is about integrating evidence rather than repeating each lesson separately.",
            "I can keep Unknown, Conditional, and residual-risk states visible.",
            "I will use only fictional systems, synthetic identifiers, metadata-only sensitive records, and supplied evidence.",
          ]}
        />

        <Section
          eyebrow="Capstone Scenario"
          title="Northbridge Student Services Portal"
        >
          <p className="leading-8">
            The fictional Northbridge team is preparing release candidate
            <strong className="text-white"> NB-PORTAL-11.10-RC1</strong>. The
            application has completed design review, code review, validation,
            and release preparation. Most evidence is strong, but several
            important conditions remain.
          </p>

          <p className="mt-4 leading-8">
            Your role is to act as the architecture reviewer. You must decide
            whether the software design is coherent, which residual risks
            remain, what blocks release, and what must be owned after release.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {caseOverview.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                  {item.title}
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
          eyebrow="Learning Objectives"
          title="Five Capstone Capabilities"
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
          eyebrow="Architecture Review"
          title="Eight Security Areas in One Design"
        >
          <p className="leading-8">
            A secure architecture assessment should not review identity,
            dependencies, logging, and deployment as unrelated topics. The
            strongest design shows how each area supports the others.
          </p>

          <div className="mt-6 grid gap-5">
            {architectureAreas.map((item) => (
              <article
                key={item.area}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-black text-white">
                    {item.area}
                  </h3>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Requirement
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.requirement}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Threat concern
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.threat}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Design
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.design}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.evidence}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Principles"
          title="What the Architecture Is Trying to Achieve"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {designPrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Capstone Architecture Terms"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.term}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.definition}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Portfolio Integration"
          title="How the Nine Earlier Artifacts Fit Together"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[1000px] w-full border-collapse text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-700 p-4">Lesson</th>
                  <th className="border-b border-slate-700 p-4">Artifact</th>
                  <th className="border-b border-slate-700 p-4">Contribution</th>
                </tr>
              </thead>
              <tbody>
                {portfolioArtifacts.map((item) => (
                  <tr key={item.lesson} className="align-top">
                    <td className="border-b border-slate-800 p-4 font-black text-cyan-200">
                      {item.lesson}
                    </td>
                    <td className="border-b border-slate-800 p-4 font-semibold text-white">
                      {item.artifact}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-slate-300">
                      {item.contributes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <FakeDashboardCard
          title="A11 Secure Software Design Assessment Dashboard"
          subtitle="Fictional capstone evidence"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Capstone Release Blocker"
          severity="High"
          time="15:50"
          source="Fictional Architecture Assessment"
          details="DEP-02 messaging client compatibility evidence is missing for release candidate NB-PORTAL-11.10-RC1. The release policy treats this as a mandatory gate."
          recommendation="Keep the final release recommendation on Hold until current authorized compatibility evidence is attached or the gate is resolved through valid governance."
        />

        <Section
          eyebrow="Evidence Consistency"
          title="Find and Resolve Conflicts Across Artifacts"
        >
          <p className="leading-8">
            A capstone review should actively look for contradictions. A strong
            document can still be wrong if one section references an old
            artifact, a different role, or stale evidence.
          </p>

          <div className="mt-6 grid gap-5">
            {evidenceConflicts.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Conflict
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.conflict}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Why it matters
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.why}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Resolution
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.resolution}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Capstone Decision Log"
          logs={logs}
        />

        <Section
          eyebrow="Residual Risk"
          title="Strong Controls Do Not Mean Zero Risk"
        >
          <p className="leading-8">
            The final assessment should state what remains unresolved, who owns
            it, and what future evidence or change closes it.
          </p>

          <div className="mt-6 grid gap-5">
            {riskRegister.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-xs font-black text-red-100">
                    Residual: {item.residual}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.area}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Condition / impact
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.condition}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-100">
                      {item.impact}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Control / evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.control}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      {item.evidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Owner
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.owner}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Next action
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.action}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Current Release Recommendation"
          question="What recommendation is best supported by the capstone evidence?"
          evidence={[
            "Artifact NB-PORTAL-11.10-RC1 is identified and linked to current review evidence.",
            "Most requirements and architecture areas are Confirmed or Conditional with owned follow-up.",
            "DEP-02 compatibility validation is missing for the current candidate.",
            "The fictional release policy defines that compatibility result as a mandatory release gate.",
            "Monitoring and rollback evidence are current.",
          ]}
          options={[
            "Release because most architecture areas are strong.",
            "Hold until the mandatory DEP-02 compatibility evidence is resolved or valid governance changes the gate.",
            "Mark DEP-02 Confirmed using the previous candidate's result.",
            "Delete the dependency requirement from the assessment.",
          ]}
          bestAnswer={1}
          explanation="The evidence is strong overall, but one mandatory gate remains unresolved. A coherent assessment applies the release rule consistently."
        />

        <Section
          eyebrow="Architecture Decision Records"
          title="Preserve Why the Design Looks This Way"
        >
          <p className="leading-8">
            Future teams need more than the final diagram. They need the reason
            important decisions were made, the evidence behind them, the
            tradeoffs accepted, and the changes that should trigger re-review.
          </p>

          <div className="mt-6 grid gap-5">
            {decisionRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.decision}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Rationale
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.rationale}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Alternatives
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.alternatives}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.evidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Tradeoff / trigger
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.tradeoff}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-100">
                      Re-review when: {item.trigger}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Capstone Review Questions"
          title="Questions That Reveal Whether the Design Is Coherent"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Do the requirements describe the same system and release candidate as the later evidence?",
              "Do threat concerns map to actual architecture boundaries and controls?",
              "Do secret records match the environments and services in the architecture?",
              "Do dependency records match the artifact and release packet?",
              "Do code-review findings link to current requirements?",
              "Do validation cases test the requirements and findings they claim to test?",
              "Do logging requirements produce evidence useful to the threat model and release decision?",
              "Does deployment readiness include the exact artifact reviewed and tested?",
              "Are exceptions current and time-bounded?",
              "Are stale or conflicting records labeled clearly?",
              "Are Unknowns assigned to owners?",
              "Are residual risks visible after controls are considered?",
              "Do change triggers cover new roles, dependencies, vendors, data flows, and deployment changes?",
              "Does the final recommendation follow the evidence and release policy?",
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

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 â€” One Blocking Dependency Gap"
          scenario="The fictional capstone assessment is strong across identity, data minimization, secrets, logging, rollback, and monitoring. DEP-02 compatibility evidence for the current release candidate is still missing, and policy marks it as mandatory."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 â€” New Temporary Counselor Role"
          scenario="A temporary counselor role is now requested for the same release. Existing requirements, threat-model evidence, and validation cover only the standard counselor role."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Capstone Lab"
          title="Build the Secure Software Design Assessment"
        >
          <p className="leading-8">
            Combine your nine A11 portfolio artifacts into one final assessment.
            You do not need to repeat every page. Summarize the evidence that
            matters to the architecture decision.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Write a one-paragraph executive summary.",
              "Describe the fictional application, users, data, dependencies, and external services.",
              "Summarize the most important security requirements.",
              "Summarize key trust boundaries and threat concerns.",
              "Summarize secrets governance and dependency governance.",
              "Summarize logging and error-handling architecture.",
              "Summarize code-review findings and confidence.",
              "Summarize validation evidence and limitations.",
              "Summarize deployment readiness and release blockers.",
              "Identify evidence conflicts or stale records.",
              "Create a residual-risk register.",
              "Create at least three architecture decision records.",
              "Assign owners to every open item.",
              "Define change triggers.",
              "Give a final Release, Hold, Conditional Release, or Remediate recommendation.",
              "Explain why the recommendation follows from the evidence.",
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

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Capstone boundary</p>
            <p className="mt-2 leading-7">
              Use fictional architecture and synthetic evidence only. Do not
              include real credentials, production diagrams, private source
              code, internal endpoints, real user records, or offensive test
              procedures.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Temporary Role Change"
          question="How should the capstone treat the new temporary counselor role?"
          evidence={[
            "Current requirement REQ-AUTHZ-03 covers the standard counselor role.",
            "The threat model previously identified new roles as change triggers.",
            "The current code-review and validation evidence does not cover the temporary role.",
            "The role may use a different approval owner and shorter assignment period.",
          ]}
          options={[
            "Treat the role as already covered because the word counselor appears in both role names.",
            "Treat the role as a change trigger and require updated requirement, threat-model, review, and validation evidence before inclusion in release.",
            "Add the role only to release notes.",
            "Ignore the difference because the same application is used.",
          ]}
          bestAnswer={1}
          explanation="A new role can change authorization and approval assumptions. The existing evidence should not be silently generalized."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Write the Final Executive Architecture Recommendation"
        >
          <p className="leading-8">
            Write a 250â€“400 word fictional executive recommendation that could
            be read by engineering, security, operations, and leadership.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "System and release candidate",
              "Overall architecture confidence",
              "Strongest confirmed controls",
              "Most important residual risks",
              "Blocking evidence gaps",
              "Approved exceptions",
              "Evidence conflicts resolved",
              "Ownership of open items",
              "Release recommendation",
              "Conditions for changing the recommendation",
              "Post-release obligations",
              "Future change triggers",
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

          <p className="mt-6 leading-8">
            The goal is to sound precise, not dramatic. State what the evidence
            supports, what remains unresolved, and what action should follow.
          </p>
        </Section>

        <DefenderChecklist
          title="A11.10 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A11.10 Mini Quiz: Secure Software Design Lab"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Final A11 Portfolio â€” Secure Software Design Assessment"
          prompt="Produce the final A11 portfolio artifact: a polished Secure Software Design Assessment for the fictional Northbridge Student Services Portal. Integrate the nine earlier artifacts into one coherent assessment covering lifecycle ownership, requirements, architecture, threat model, secrets, dependencies, logging, code review, validation, deployment readiness, evidence conflicts, residual risk, architecture decisions, owners, change triggers, and final release recommendation."
          tips={[
            "Use one coherent fictional release candidate throughout the assessment.",
            "Do not copy all nine earlier artifacts in full; summarize the most decision-relevant evidence.",
            "Include an executive summary, architecture overview, evidence table, residual-risk register, and final decision.",
            "Resolve stale or conflicting evidence explicitly.",
            "Keep Unknown and Conditional statuses visible.",
            "Use fictional names, synthetic identifiers, and metadata-only sensitive records so the portfolio is safe to share publicly.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the A11 Module Test?"
        >
          <p className="leading-8">
            The module test will check whether you can reason across the entire
            secure software architecture lifecycle rather than memorizing
            isolated terms.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can trace a security requirement from lifecycle planning through deployment evidence.",
              "I can explain how threat models, secrets, dependencies, logging, and code review influence architecture decisions.",
              "I can interpret validation and release evidence without overstating what it proves.",
              "I can identify residual risk, stale evidence, evidence conflicts, and change triggers.",
              "I can make a defensible release recommendation from a fictional evidence packet.",
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
          eyebrow="Portfolio Build Guide"
          title="How to Present the Final A11 Assessment"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Open with an executive summary",
                detail:
                  "State the system, release candidate, strongest controls, major residual risks, and final recommendation.",
              },
              {
                title: "Use traceability",
                detail:
                  "Reference requirement, threat, review, validation, and release IDs so the evidence chain is visible.",
              },
              {
                title: "Show architecture decisions",
                detail:
                  "Explain why important choices were made and what tradeoffs they create.",
              },
              {
                title: "Show evidence quality",
                detail:
                  "Label evidence as current, stale, Conditional, Unknown, or Blocking when appropriate.",
              },
              {
                title: "Show residual risk",
                detail:
                  "Do not hide what remains after controls are applied.",
              },
              {
                title: "Show ownership",
                detail:
                  "Every open risk, exception, migration, and retest should have an accountable owner.",
              },
              {
                title: "Show change triggers",
                detail:
                  "Identify the roles, dependencies, vendors, data uses, or architecture changes that require renewed review.",
              },
              {
                title: "Keep it publicly safe",
                detail:
                  "Use fictional names, synthetic identifiers, and no real secrets, private data, source code, or internal infrastructure details.",
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
            The capstone is an architecture assessment, not a real-system test
          </h2>
          <p className="mt-3 leading-7">
            Do not use real credentials, private data, production systems,
            internal endpoints, confidential repositories, or offensive
            procedures. Keep the entire A11 assessment fictional, defensive,
            and safe to share.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A11.10 Secure Software Design Lab Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You have completed all ten A11 lessons and built the full Secure
            Software Design Assessment. The next page is the A11 Module Test,
            covering lifecycle security, requirements, threat modeling, secrets,
            dependencies, logging, code review, safe validation, deployment,
            and integrated architecture decisions.
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
