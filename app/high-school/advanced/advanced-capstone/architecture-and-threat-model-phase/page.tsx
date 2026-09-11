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

const modulePath = "/high-school/advanced/advanced-capstone";
const previousLesson = `${modulePath}/capstone-scenario-briefing`;
const nextLesson = `${modulePath}/detection-and-monitoring-phase`;

const objectives = [
  "Translate the A20 case charter into a security architecture view that identifies critical assets, identities, data flows, trust boundaries, dependencies, control locations, and recovery paths.",
  "Write bounded threat statements that connect plausible conditions to affected assets and defensive consequences without claiming unsupported vulnerabilities, intent, or exploitation.",
  "Distinguish architecture facts, design assumptions, expected control behavior, implementation evidence, and unresolved validation needs.",
  "Evaluate concentration, dependency, degraded-mode, and recovery risks so the capstone architecture remains resilient rather than focusing only on prevention.",
  "Create an Architecture and Threat Model Decision Pack that later detection, incident-response, cloud, identity, risk, privacy, and executive phases can reference consistently.",
];

const architectureLayers = [
  {
    layer: "Mission and service",
    question:
      "Which fictional service outcomes matter most, and what would materially affect users or business operations?",
    northbridge:
      "Northbridge Learning Portal availability, trustworthy administrative actions, protected student-service data, reliable reporting, and recoverable service operations.",
    evidence:
      "Case charter, service inventory, business-impact notes, ownership records.",
  },
  {
    layer: "Assets and data",
    question:
      "Which applications, identities, services, data stores, queues, configuration states, logs, and recovery assets deserve protection?",
    northbridge:
      "Portal application, identity platform, worker service, protected data store, reporting queue, monitoring pipeline, configuration records, and backup/recovery artifacts.",
    evidence:
      "Architecture inventory, data-classification notes, service records, recovery inventory.",
  },
  {
    layer: "Identity paths",
    question:
      "Which human and workload identities can act, what resources can they reach, and where does privilege change?",
    northbridge:
      "Student users, staff users, privileged administrators, portal workload identity, worker workload identity, monitoring service identity, and recovery operator role.",
    evidence:
      "Role inventory, approval records, identity design, access-review notes.",
  },
  {
    layer: "Data and service flows",
    question:
      "What information or requests move between components, and what security expectations apply at each step?",
    northbridge:
      "User requests reach the portal, the portal requests identity and data services, worker jobs use queue and storage dependencies, and monitoring sources export evidence to the collector.",
    evidence:
      "Architecture diagram, application-flow notes, service dependency map.",
  },
  {
    layer: "Trust boundaries",
    question:
      "Where does control, identity, administrative authority, data sensitivity, environment, or organizational responsibility change?",
    northbridge:
      "User-to-portal, portal-to-data, administrator-to-management plane, workload-to-cloud service, provider/customer boundary, and monitoring-source-to-collector relationships.",
    evidence:
      "Architecture diagram, role definitions, cloud responsibility notes, policy requirements.",
  },
  {
    layer: "Control expectations",
    question:
      "Which prevention, detection, response, recovery, privacy, and governance controls should exist at important boundaries?",
    northbridge:
      "Strong identity, least privilege, scoped service access, audit evidence, source-health monitoring, change governance, recovery validation, and privacy-aware telemetry.",
    evidence:
      "Policy, standards, threat model, detection plan, recovery requirements.",
  },
  {
    layer: "Dependencies and concentration",
    question:
      "Which shared services could affect several security or availability outcomes at once?",
    northbridge:
      "Identity, monitoring, worker queue, protected storage, configuration, and recovery services create shared dependency relationships.",
    evidence:
      "Dependency inventory, service-health records, architecture review.",
  },
  {
    layer: "Recovery and degraded operation",
    question:
      "How should the environment behave when identity, monitoring, queue, or recovery dependencies are partially unavailable?",
    northbridge:
      "Critical functions should have bounded degraded behavior, clear ownership, recovery priorities, source-health awareness, and validation before normal confidence returns.",
    evidence:
      "Recovery objectives, degraded-mode notes, service-owner decisions, validation records.",
  },
];

const trustBoundaries = [
  {
    id: "TB-NB-01",
    name: "User to Portal",
    change:
      "Untrusted or partially trusted user requests enter an application that must authenticate, authorize, validate, and protect data.",
    assets:
      "Portal session, student-service data, account state, application availability.",
    controls:
      "Authentication, authorization, input handling, session governance, logging, rate and service protections.",
    evidenceNeed:
      "Expected access rules, synthetic application records, identity outcome, source-health state.",
  },
  {
    id: "TB-NB-02",
    name: "Portal to Protected Data",
    change:
      "The application workload crosses into a more sensitive data plane where resource-level authorization and workload identity matter.",
    assets:
      "Protected records, data integrity, workload identity, audit evidence.",
    controls:
      "Scoped workload identity, resource authorization, encryption, audit logging, data minimization, recovery controls.",
    evidenceNeed:
      "Role design, access policy, data classification, audit evidence, current recovery validation.",
  },
  {
    id: "TB-NB-03",
    name: "Privileged Administration",
    change:
      "Human administrative authority increases and can change identity policy, application configuration, or service state.",
    assets:
      "Configuration integrity, identity policy, service availability, accountability.",
    controls:
      "Separate privileged identity, approval, time-bounded access, change record, session evidence, review, revocation.",
    evidenceNeed:
      "Approved task, role assignment, action evidence, owner confirmation, completion and revocation record.",
  },
  {
    id: "TB-NB-04",
    name: "Worker to Queue and Storage",
    change:
      "A workload identity processes queued jobs and reaches protected storage on behalf of application workflows.",
    assets:
      "Job integrity, data confidentiality, queue health, worker availability.",
    controls:
      "Scoped service identity, destination restriction, queue authorization, error handling, monitoring, retry governance.",
    evidenceNeed:
      "Workload purpose, allowed resources, queue health, service logs, configuration version.",
  },
  {
    id: "TB-NB-05",
    name: "Monitoring Sources to Collector",
    change:
      "Security and service evidence crosses from producing systems into the monitoring plane, creating a dependency on collection health and timing.",
    assets:
      "Detection confidence, incident chronology, audit evidence, source health.",
    controls:
      "Collector health, backlog monitoring, time normalization, source identity, retention, privacy controls, recovery.",
    evidenceNeed:
      "Source inventory, collection health, delay metrics, time alignment, recovery state.",
  },
  {
    id: "TB-NB-06",
    name: "Cloud Provider to Customer Responsibility",
    change:
      "Operational responsibility is split between managed platform capabilities and customer-controlled identity, configuration, data, monitoring, and governance choices.",
    assets:
      "Cloud service security, customer data, access, configuration, recovery, evidence.",
    controls:
      "Responsibility mapping, least privilege, configuration governance, monitoring, backup/recovery, exceptions, review.",
    evidenceNeed:
      "Service model, customer configuration, role ownership, logging state, recovery evidence, risk decisions.",
  },
];

const dependencies = [
  {
    dependency: "Identity platform",
    supports:
      "User and privileged authentication, workload trust, role decisions, and several administrative paths.",
    concentration:
      "Affects both normal access and defensive interpretation of identity-related events.",
    degradedRisk:
      "Authentication or policy instability can affect application use while delayed identity evidence lowers confidence in the case.",
    resilience:
      "Define degraded behavior, independent service-health evidence, recovery ownership, and post-recovery validation.",
  },
  {
    dependency: "Monitoring collector",
    supports:
      "Centralized evidence, alert context, correlation, investigation timing, and compliance records.",
    concentration:
      "Multiple defensive decisions depend on the same collection pipeline.",
    degradedRisk:
      "A backlog can make missing events appear more meaningful than they are.",
    resilience:
      "Monitor source health separately from event content, preserve local source context, and define recovery and backlog-clearing evidence.",
  },
  {
    dependency: "Worker queue",
    supports:
      "Background processing, reporting jobs, service coordination, and application workflows.",
    concentration:
      "Queue latency can influence multiple user-facing and back-end symptoms.",
    degradedRisk:
      "A queue problem may be mistaken for an application, identity, or security event if dependencies are not modeled.",
    resilience:
      "Track health, ownership, retry behavior, capacity, recovery criteria, and correlated service evidence.",
  },
  {
    dependency: "Protected data store",
    supports:
      "Student-service records, application state, reporting, and recovery objectives.",
    concentration:
      "Confidentiality, integrity, and availability all depend on correct access and recovery behavior.",
    degradedRisk:
      "Access or performance problems can create broad operational impact while overly broad service access increases security risk.",
    resilience:
      "Use scoped workload access, monitoring, encryption, backup, restoration evidence, and explicit data ownership.",
  },
  {
    dependency: "Configuration and change process",
    supports:
      "Known-good state, approved maintenance, rollback, ownership, and decision history.",
    concentration:
      "Identity and worker-service changes may occur in the same maintenance window.",
    degradedRisk:
      "Poorly scoped change records can make expected activity difficult to distinguish from unrelated activity.",
    resilience:
      "Use precise task scope, owner approval, pre/post validation, rollback, version evidence, and closure review.",
  },
  {
    dependency: "Recovery service",
    supports:
      "Backup availability, restoration capability, service recovery, and continuity decisions.",
    concentration:
      "Multiple services may rely on the same recovery platform and identity roles.",
    degradedRisk:
      "Current backups can create false confidence when restoration evidence or dependency recovery is stale.",
    resilience:
      "Separate backup health from restoration readiness, test dependencies, assign recovery owners, and track evidence freshness.",
  },
];

const threatStatements = [
  {
    id: "THR-NB-01",
    condition:
      "If privileged administrative actions occur outside the approved maintenance scope or cannot be traced to an accountable owner",
    asset:
      "identity policy, configuration integrity, and service trust",
    consequence:
      "defenders may be unable to distinguish expected administration from an unauthorized or process-failure condition",
    controls:
      "bounded privileged access, explicit change-task scope, session evidence, approval, revocation, and retrospective review",
    confidence:
      "Medium — the 09:11 event is confirmed, but whether it matched the approved task remains unresolved.",
  },
  {
    id: "THR-NB-02",
    condition:
      "If monitoring-source health degrades without being represented separately from event content",
    asset:
      "detection confidence and incident chronology",
    consequence:
      "missing or late events may lead reviewers to make unsupported negative-evidence conclusions",
    controls:
      "source-health monitoring, backlog visibility, timestamp normalization, degraded-state indicators, and recovery validation",
    confidence:
      "High — the briefing already confirms collector delay during the case window.",
  },
  {
    id: "THR-NB-03",
    condition:
      "If a workload identity has broader access than its worker-service purpose requires",
    asset:
      "protected data and job integrity",
    consequence:
      "a service error or identity misuse could affect more resources than the business workflow requires",
    controls:
      "scoped workload authorization, narrow destinations, role ownership, access review, audit evidence, and revocation",
    confidence:
      "Low to Medium — the architecture shows the relationship, but current role scope has not yet been reviewed.",
  },
  {
    id: "THR-NB-04",
    condition:
      "If queue health, application health, and maintenance timing are reviewed independently",
    asset:
      "availability reasoning and incident-scope accuracy",
    consequence:
      "a dependency problem may be misclassified as a direct application or security cause",
    controls:
      "dependency mapping, normalized timing, service-health correlation, owner context, and multiple competing hypotheses",
    confidence:
      "High that the reasoning risk exists; the case does not yet establish which dependency caused the interruption.",
  },
  {
    id: "THR-NB-05",
    condition:
      "If backup availability is treated as proof of complete recovery readiness",
    asset:
      "service continuity and trustworthy restoration",
    consequence:
      "leaders may believe the environment can recover when restoration procedures, identities, dependencies, or evidence are stale",
    controls:
      "current restoration exercises, dependency validation, recovery-role review, RTO/RPO evidence, and residual-risk ownership",
    confidence:
      "High — the case briefing identifies current backups but older full restoration evidence.",
  },
  {
    id: "THR-NB-06",
    condition:
      "If technical telemetry collects more data than the defensive purpose requires",
    asset:
      "privacy, trust, and governance quality",
    consequence:
      "monitoring may create unnecessary access, retention, or data-exposure risk",
    controls:
      "purpose limitation, minimization, role-based access, retention rules, review, and privacy-aware logging",
    confidence:
      "Conceptual — A20.7 will evaluate actual synthetic data-purpose and minimization evidence.",
  },
];

const evidenceStates = [
  {
    state: "Architecture fact",
    example:
      "The supplied diagram shows the portal depends on identity, worker, data, monitoring, and recovery services.",
    use:
      "Can support dependency and trust-boundary reasoning.",
  },
  {
    state: "Design assumption",
    example:
      "The architecture inventory is assumed current unless later evidence contradicts it.",
    use:
      "Allows modeling to proceed while keeping freshness uncertainty visible.",
  },
  {
    state: "Control expectation",
    example:
      "Privileged maintenance should use approved, accountable, bounded administrative access.",
    use:
      "Defines what the defensive design expects.",
  },
  {
    state: "Implementation evidence",
    example:
      "A synthetic identity record confirms that a privileged event occurred under a named administrative role.",
    use:
      "Supports a statement about observed behavior, not automatically about purpose or correctness.",
  },
  {
    state: "Validation evidence",
    example:
      "A post-change record confirms that expected service behavior and access restrictions were checked after maintenance.",
    use:
      "Supports whether a control or change achieved its intended outcome.",
  },
  {
    state: "Unknown",
    example:
      "The current evidence does not confirm whether the 09:11 privileged event was included in the approved task.",
    use:
      "Blocks stronger claims until additional case evidence resolves or governs the uncertainty.",
  },
];

const architectureFindings = [
  {
    id: "ARC-NB-01",
    finding:
      "Identity and monitoring are high-concentration dependencies for both operations and defensive interpretation.",
    evidence:
      "Architecture inventory plus case briefing shows several access and investigation decisions depend on both services.",
    implication:
      "Degraded-state design and independent health evidence should be treated as architecture requirements.",
    owner:
      "Fictional Platform Architecture Owner",
  },
  {
    id: "ARC-NB-02",
    finding:
      "The privileged administrative path crosses a strong trust boundary and requires better task-level traceability.",
    evidence:
      "09:11 privileged event is confirmed, but the summarized approved change record does not explicitly map that exact action.",
    implication:
      "A20 should preserve this as a validation need instead of classifying the event as expected or unauthorized.",
    owner:
      "Fictional Identity Governance Owner",
  },
  {
    id: "ARC-NB-03",
    finding:
      "The worker queue is an important availability and analysis dependency.",
    evidence:
      "Queue latency increased before portal errors, but causation remains unconfirmed.",
    implication:
      "Later detection and incident phases should include queue health and normalized timing in the evidence model.",
    owner:
      "Fictional Application Reliability Owner",
  },
  {
    id: "ARC-NB-04",
    finding:
      "Recovery architecture has a freshness gap between current backup status and older restoration validation.",
    evidence:
      "Recovery inventory confirms current backup status while the latest full restoration exercise is older than the preferred review window.",
    implication:
      "Recovery confidence should remain bounded until restoration and dependency evidence is refreshed or residual risk is accepted.",
    owner:
      "Fictional Recovery Owner",
  },
  {
    id: "ARC-NB-05",
    finding:
      "Workload identity scope is a material architecture question that should be carried into A20.6.",
    evidence:
      "Worker service accesses queue and protected data, but the current briefing does not contain complete authorization-scope evidence.",
    implication:
      "Do not label the access weak or excessive yet; create a targeted identity-review question.",
    owner:
      "Fictional Cloud and Identity Owner",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest purpose of a security architecture review in the A20 capstone?",
    choices: [
      "To prove which vulnerability caused the case before evidence review.",
      "To map assets, identities, trust boundaries, flows, dependencies, controls, degraded states, and recovery needs so later decisions share the same system context.",
      "To replace incident response.",
      "To document real production infrastructure.",
    ],
    answer: 1,
    explanation:
      "Architecture provides shared context for later monitoring, response, cloud, identity, risk, privacy, and recovery decisions.",
  },
  {
    question:
      "Which statement is a strong bounded threat statement?",
    choices: [
      "The worker service will definitely be hacked.",
      "If a workload identity has broader access than its business purpose requires, more protected resources could be affected; scoped authorization and review would reduce that exposure.",
      "The cloud is dangerous.",
      "Every administrator is a threat.",
    ],
    answer: 1,
    explanation:
      "A strong threat statement identifies a plausible condition, affected asset or consequence, and defensive control direction without unsupported certainty or intent.",
  },
  {
    question:
      "The architecture diagram says privileged access should be bounded and approved. What does that prove?",
    choices: [
      "Every observed privileged action was approved.",
      "The design expects bounded approved access; implementation and task-level evidence are still needed to validate specific activity.",
      "Privileged access can be ignored during incidents.",
      "The design itself is an implementation test.",
    ],
    answer: 1,
    explanation:
      "Control expectation and implementation evidence are different. Architecture can define required behavior without proving current operation.",
  },
  {
    question:
      "Why is the monitoring collector considered a concentration dependency?",
    choices: [
      "Because it stores the most data.",
      "Because multiple detection, timeline, audit, and incident decisions rely on the same collection path and source-health state.",
      "Because monitoring is always more important than identity.",
      "Because all alerts are incidents.",
    ],
    answer: 1,
    explanation:
      "Concentration exists when one dependency affects several important outcomes or decisions.",
  },
  {
    question:
      "Current backups exist, but full restoration evidence is stale. What is the strongest architecture conclusion?",
    choices: [
      "Recovery is fully validated.",
      "Backup availability is current, while restoration and dependency recovery readiness remain a validation need.",
      "The backups definitely do not work.",
      "Recovery should be removed from the architecture.",
    ],
    answer: 1,
    explanation:
      "Backup health and recovery readiness are distinct. Restoration, dependencies, identity, timing, and validation evidence matter.",
  },
  {
    question:
      "The worker queue degraded before portal errors. What is the strongest conclusion?",
    choices: [
      "The queue definitely caused the portal errors.",
      "The queue is an important dependency and plausible explanatory factor, but causation remains unresolved until timing and other evidence are reviewed.",
      "The queue is unrelated because it is a background service.",
      "The queue degradation proves malicious activity.",
    ],
    answer: 1,
    explanation:
      "Sequence makes the dependency relevant but does not alone prove causation or intent.",
  },
  {
    question:
      "What is safest for the A20 architecture and threat-model phase?",
    choices: [
      "Use only the fictional Northbridge architecture and synthetic evidence supplied by CyberShield Academy.",
      "Recreate a real organization's internal network diagram.",
      "Probe a public system to test the threat model.",
      "Use real credentials to validate trust boundaries.",
    ],
    answer: 0,
    explanation:
      "The capstone demonstrates professional defensive reasoning without real-world access, testing, sensitive architecture, or credentials.",
  },
];

const takeaways = [
  "Architecture gives later capstone phases a shared model of mission, assets, identities, flows, trust boundaries, dependencies, controls, and recovery paths.",
  "A threat model describes plausible defensive conditions and consequences; it does not prove that an event occurred, identify malicious intent, or authorize exploitation.",
  "Architecture facts, design assumptions, control expectations, implementation evidence, validation evidence, and unknowns should remain separate.",
  "Trust boundaries matter when identity, authority, data sensitivity, environment, or responsibility changes.",
  "Concentration dependencies such as identity, monitoring, queue, data, configuration, and recovery services can affect several security outcomes at once.",
  "Degraded operation and recovery are architecture concerns because a secure system must remain governable when important dependencies are unhealthy.",
  "Strong architecture findings create specific later questions for detection, incident response, cloud, identity, risk, privacy, and recovery reviews.",
  "The entire A20 architecture and threat-model phase remains fictional, synthetic, defensive, non-operational, and safe for public learning.",
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
        Module A20
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

export default function ArchitectureThreatModelPhasePage() {
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
              A20.3
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Capstone
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A20.3
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Architecture and Threat Model Phase
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            The capstone briefing told us what evidence exists. Architecture tells
            us how the fictional environment fits together. Threat modeling then
            asks which plausible conditions could affect important assets and which
            defensive controls, evidence, resilience, and ownership decisions matter.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This phase does not hunt for real vulnerabilities or prove an attacker
            exists. It builds a safe, evidence-aware decision model for the later
            detection, incident-response, cloud, identity, risk, privacy, and
            executive phases.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A20: Advanced Capstone"
          lessonTitle="Architecture and Threat Model Phase"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can use the A20.2 case charter without changing its scope just to support a preferred explanation.",
            "I understand that architecture design does not automatically prove current implementation.",
            "I can write plausible defensive threat statements without operational attack instructions.",
            "I will keep every system, identity, address, service, diagram, and evidence item fictional or synthetic.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Architecture Explains Relationships; Threat Modeling Explains Why Those Relationships Matter"
        >
          <p className="leading-8">
            A list of technologies is not an architecture review. A professional
            reviewer needs to understand which services support the mission, which
            identities can act, which data moves where, which trust assumptions
            change, which dependencies are concentrated, and what happens when
            important controls or services degrade.
          </p>

          <p className="mt-4 leading-8">
            Threat modeling adds a second question: under what plausible conditions
            could those relationships produce a meaningful security, privacy,
            reliability, or recovery concern? The answer should lead to defensive
            controls and evidence needs—not exploitation procedures.
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A20.3">
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

        <Section
          eyebrow="Architecture Review"
          title="Eight Layers of the Northbridge Defensive Architecture"
        >
          <p className="leading-8">
            The architecture review should become more specific as it moves from
            mission to assets, identities, flows, trust, controls, dependencies,
            and recovery. Each layer should answer a different professional question.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {architectureLayers.map((item) => (
              <article
                key={item.layer}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.layer}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  <span className="font-black">Review question:</span>{" "}
                  {item.question}
                </p>
                <p className="mt-4 rounded-xl border border-blue-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-blue-50">
                  <span className="font-black">Northbridge:</span>{" "}
                  {item.northbridge}
                </p>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  <span className="font-black">Evidence:</span> {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Trust Boundaries"
          title="Security Decisions Change Where Trust or Responsibility Changes"
        >
          <p className="leading-8">
            A trust boundary is not simply a line between two boxes. It marks a
            place where identity, privilege, data sensitivity, environment,
            administrative authority, or operational responsibility changes.
          </p>

          <div className="mt-6 grid gap-5">
            {trustBoundaries.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-purple-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <h3 className="text-xl font-black text-purple-50">
                    {item.name}
                  </h3>
                </div>

                <p className="mt-4 leading-7 text-purple-100">{item.change}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-purple-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-purple-50">
                    <span className="font-black">Assets:</span> {item.assets}
                  </div>
                  <div className="rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-50">
                    <span className="font-black">Controls:</span> {item.controls}
                  </div>
                  <div className="rounded-xl border border-emerald-300/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                    <span className="font-black">Evidence need:</span>{" "}
                    {item.evidenceNeed}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Architecture Review Board"
          subtitle="Synthetic architecture, dependency, and trust-boundary snapshot"
          metrics={[
            {
              label: "Critical architecture layers",
              value: "8",
              note: "Mission through recovery and degraded operation",
            },
            {
              label: "Named trust boundaries",
              value: "6",
              note: "User, data, administration, workload, monitoring, cloud responsibility",
            },
            {
              label: "Concentration dependencies",
              value: "6",
              note: "Identity, monitoring, queue, data, change/configuration, recovery",
            },
            {
              label: "Open architecture findings",
              value: "5",
              note: "Each has evidence, implication, and fictional owner",
            },
          ]}
        />

        <FakeAlertCard
          title="Design Expectation Mistaken for Implementation Proof"
          severity="High"
          time="A20.3 architecture review"
          source="Synthetic Northbridge Architecture Quality Check"
          details="A draft threat model states that the 09:11 privileged action was approved because the architecture requires privileged maintenance to use approved bounded access."
          recommendation="Separate the control expectation from implementation evidence. Keep the event confirmed, keep approval of the specific action unresolved, and identify the task-level evidence needed."
        />

        <FakeLogPanel
          title="Synthetic Northbridge Architecture Notes"
          logs={[
            "[ARCH] portal depends on identity, worker, protected data, monitoring, and recovery services",
            "[TRUST] privileged administration crosses a high-authority boundary",
            "[IDENTITY] worker workload identity reaches queue and protected data relationships",
            "[MONITOR] collector delay affects multiple downstream evidence decisions",
            "[QUEUE] latency increased before portal errors; causation remains unresolved",
            "[CHANGE] approved maintenance establishes context but not event-level proof",
            "[RECOVERY] backup status current; complete restoration evidence older than preferred review window",
            "[PRIVACY] monitoring purpose and minimization remain later review questions",
            "[SAFETY] all architecture and threat-model records are fictional and non-operational",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — Design or Proof?"
          question="The architecture requires privileged maintenance to use approved, time-bounded administrative access. A privileged action appears at 09:11. What is the strongest conclusion?"
          evidence={[
            "The design expects approved bounded privilege.",
            "A synthetic privileged event is confirmed at 09:11.",
            "The event occurs during an approved maintenance window.",
            "The summarized change task does not explicitly list that exact action.",
          ]}
          options={[
            "The action was definitely approved because the architecture requires approval",
            "The action is confirmed, and the design defines the expected control; task-level authorization remains a validation question",
            "The action was definitely unauthorized because it is not listed in the summary",
            "Architecture should be ignored during incident review",
          ]}
          bestAnswer={1}
          explanation="Architecture defines expected control behavior. Specific implementation and task authorization require supporting evidence."
        />

        <Section
          eyebrow="Dependency Analysis"
          title="Concentration Can Turn One Weak Dependency Into Several Security Problems"
        >
          <p className="leading-8">
            A dependency deserves special attention when many services, controls, or
            decisions rely on it. Concentration does not mean the dependency is bad.
            It means architecture should understand how failure, delay, compromise,
            or uncertainty would affect multiple outcomes.
          </p>

          <div className="mt-6 grid gap-5">
            {dependencies.map((item) => (
              <article
                key={item.dependency}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="text-xl font-black text-cyan-50">
                  {item.dependency}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-cyan-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-cyan-50">
                    <span className="font-black">Supports:</span> {item.supports}
                  </div>
                  <div className="rounded-xl border border-purple-300/20 bg-purple-400/10 p-4 text-sm leading-7 text-purple-50">
                    <span className="font-black">Concentration:</span>{" "}
                    {item.concentration}
                  </div>
                  <div className="rounded-xl border border-yellow-300/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                    <span className="font-black">Degraded risk:</span>{" "}
                    {item.degradedRisk}
                  </div>
                  <div className="rounded-xl border border-emerald-300/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                    <span className="font-black">Resilience:</span>{" "}
                    {item.resilience}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Threat Modeling"
          title="Write Threat Statements That Lead to Defensive Decisions"
        >
          <p className="leading-8">
            Threat modeling should make architecture more useful, not more
            sensational. A strong threat statement describes a plausible condition,
            the asset or security outcome that could be affected, the consequence
            that matters, the controls that reduce the concern, and the confidence
            supported by the current case.
          </p>

          <div className="mt-6 grid gap-5">
            {threatStatements.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-red-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-red-50">
                  <span className="font-black">Condition:</span> {item.condition}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  <span className="font-black">Affected asset/outcome:</span>{" "}
                  {item.asset}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  <span className="font-black">Consequence:</span>{" "}
                  {item.consequence}
                </p>
                <p className="mt-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Defensive controls:</span>{" "}
                  {item.controls}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  <span className="font-black">Current confidence:</span>{" "}
                  {item.confidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence Discipline"
          title="Keep Design, Observation, and Validation Separate"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.state}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  {item.example}
                </p>
                <p className="mt-4 rounded-xl border border-emerald-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Use:</span> {item.use}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — Dependency or Root Cause?"
          question="Queue latency rises before portal errors during the approved maintenance window. What is the strongest architecture conclusion?"
          evidence={[
            "Worker queue latency rises at 09:13.",
            "Portal errors rise at 09:14.",
            "A privileged action occurred at 09:11.",
            "Monitoring evidence is delayed for part of the period.",
            "Portal health improves after a worker-service restart and queue recovery.",
          ]}
          options={[
            "The queue definitely caused the portal outage",
            "The queue is an important dependency and plausible explanatory factor; normalized timing and competing evidence are still needed before assigning causation",
            "The privileged action definitely caused the queue delay",
            "Because the portal recovered later, architecture review is unnecessary",
          ]}
          bestAnswer={1}
          explanation="Architecture can identify dependency relevance and sequence. Root cause still requires stronger evidence and competing-hypothesis review."
        />

        <Section
          eyebrow="Architecture Findings"
          title="Five Findings to Carry Forward Into Later A20 Phases"
        >
          <div className="grid gap-5">
            {architectureFindings.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <span className="text-sm font-black text-slate-300">
                    Owner: {item.owner}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-white">
                  <span className="font-black">Finding:</span> {item.finding}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  <span className="font-black">Evidence:</span> {item.evidence}
                </p>
                <p className="mt-3 rounded-xl border border-purple-400/20 bg-purple-400/10 p-4 text-sm leading-7 text-purple-50">
                  <span className="font-black">Carry forward:</span>{" "}
                  {item.implication}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Common Architecture Mistakes"
          title="Avoid These Threat-Model and Architecture Anti-Patterns"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Turning a diagram into proof",
                detail:
                  "A diagram can document intended structure without proving every deployed control, current permission, or operational behavior.",
              },
              {
                title: "Calling every concern a vulnerability",
                detail:
                  "Threat models can identify plausible conditions and validation needs without claiming a confirmed weakness.",
              },
              {
                title: "Ignoring workloads",
                detail:
                  "Service and workload identities can hold meaningful access and need purpose, ownership, scope, review, and lifecycle governance.",
              },
              {
                title: "Ignoring degraded states",
                detail:
                  "Architecture should explain how decisions change when identity, monitoring, queue, or recovery services are partially unhealthy.",
              },
              {
                title: "Confusing sequence with causation",
                detail:
                  "An earlier queue or administrative event may be relevant without being the proven cause of a later service symptom.",
              },
              {
                title: "Treating backup as recovery",
                detail:
                  "Recovery also depends on restoration evidence, dependencies, identities, ownership, timing, and validation.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build the Architecture and Threat Model Decision Pack"
        >
          <p className="leading-8">
            Use only the synthetic Northbridge evidence supplied in A20.2 and this
            lesson. The goal is to create a defensible model for later phases, not
            to test or attack anything.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Task 1 — Map the mission and assets",
                detail:
                  "List the portal mission, protected data, critical services, human identities, workload identities, evidence systems, and recovery assets.",
              },
              {
                title: "Task 2 — Draw the defensive architecture",
                detail:
                  "Create a fictional diagram showing portal, identity, worker, queue, data, monitoring, recovery, and important administrative relationships.",
              },
              {
                title: "Task 3 — Mark trust boundaries",
                detail:
                  "Label at least five places where identity, privilege, data sensitivity, environment, or responsibility changes.",
              },
              {
                title: "Task 4 — Review dependencies",
                detail:
                  "Identify at least four concentration dependencies and describe degraded behavior, evidence needs, and recovery ownership.",
              },
              {
                title: "Task 5 — Write threat statements",
                detail:
                  "Write at least five bounded threat statements using condition, affected asset/outcome, consequence, controls, and current confidence.",
              },
              {
                title: "Task 6 — Carry findings forward",
                detail:
                  "Create architecture findings for A20.4–A20.7 that identify what monitoring, identity, recovery, risk, or privacy evidence should be reviewed later.",
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
          title="Scenario Decision 1 — Workload Access Is Not Fully Documented"
          scenario="The worker service clearly needs queue and protected-data access, but the supplied case does not contain complete evidence showing the exact current workload permissions."
          choices={[
            {
              label: "Choice A",
              response:
                "Document the intended business relationship, keep current permission scope Unknown, and carry a targeted workload-identity validation question into A20.6.",
              outcome:
                "Best architecture decision. It distinguishes design purpose from current implementation evidence.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare the workload overprivileged because the permission evidence is missing.",
              outcome:
                "Risky. Missing evidence creates uncertainty, not automatic proof of excessive access.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Assume permissions are correct because the application normally works.",
              outcome:
                "Risky. Operational success does not validate authorization scope.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Recovery Confidence"
          scenario="Northbridge has current backup status, but the latest full restoration exercise is older than the preferred review window."
          choices={[
            {
              label: "Choice A",
              response:
                "Record backup availability as current, keep restoration readiness partially evidenced, and assign a recovery-validation or risk-owner decision.",
              outcome:
                "Best professional choice. It preserves what is known without overstating recovery confidence.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Mark recovery fully validated because backups are current.",
              outcome:
                "Risky. Backup existence is only one part of recovery readiness.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Declare recovery impossible because the test is old.",
              outcome:
                "Caution. Stale validation lowers confidence but does not prove recovery failure.",
              tone: "caution",
            },
          ]}
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Defend One Architecture Decision From Four Perspectives"
        >
          <p className="leading-8">
            Choose the monitoring collector as the example concentration dependency.
            Explain the same architecture decision from four professional
            perspectives while preserving one consistent set of facts.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Architect perspective",
                detail:
                  "Explain why one collection path serving many sources creates concentration and degraded-mode requirements.",
              },
              {
                title: "Detection perspective",
                detail:
                  "Explain why source health and backlog state must be visible separately from alert content.",
              },
              {
                title: "Incident-response perspective",
                detail:
                  "Explain why missing events during a delay should not be treated as strong negative evidence.",
              },
              {
                title: "Risk / leadership perspective",
                detail:
                  "Explain the business effect of reduced visibility, the residual risk, the owner, and the improvement decision.",
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
          title="Architecture and Threat Model Phase Checklist"
          items={[
            "I can connect the Northbridge mission to critical services, identities, data, evidence, and recovery assets.",
            "I can identify trust boundaries where identity, privilege, data sensitivity, environment, or responsibility changes.",
            "I can model both human and workload identity paths.",
            "I can distinguish normal service flows from privileged administrative flows and monitoring flows.",
            "I can identify concentration dependencies and explain degraded-state consequences.",
            "I can write bounded threat statements without unsupported vulnerability, intent, or causation claims.",
            "I can separate architecture facts, assumptions, control expectations, implementation evidence, validation evidence, and unknowns.",
            "I can distinguish backup availability from restoration and recovery readiness.",
            "I can create findings that later A20 phases can test or govern.",
            "I can assign fictional owners to architecture findings and validation needs.",
            "I can preserve uncertainty when the current evidence does not support a stronger conclusion.",
            "I will use only fictional systems, synthetic evidence, and non-operational defensive reasoning.",
          ]}
        />

        <Section eyebrow="Assessment" title="A20.3 Knowledge Check">
          <MiniQuiz
            title="A20.3 Mini Quiz: Architecture and Threat Model Phase"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Architecture and Threat Model Decision Pack"
          prompt="Create a fictional Northbridge Architecture and Threat Model Decision Pack. Include mission, critical services, assets, protected data, human identities, workload identities, service flows, administrative flows, monitoring flows, at least five trust boundaries, at least four concentration dependencies, degraded-mode considerations, recovery paths, control expectations, evidence sources, architecture assumptions, implementation-evidence gaps, at least five bounded threat statements, current confidence, defensive controls, architecture findings, fictional owners, validation needs, unresolved questions, and a short summary explaining which findings should be carried into detection, incident response, cloud, identity, risk, privacy, and recovery review."
          tips={[
            "Use architecture to explain relationships, not to claim unsupported implementation facts.",
            "Write threat statements around plausible conditions and defensive consequences rather than attack instructions.",
            "Keep human identity, workload identity, privileged administration, and monitoring service identity distinct.",
            "Treat concentration and degraded states as architecture concerns, not only availability concerns.",
            "Separate backup availability from validated restoration readiness.",
            "Use only fictional Northbridge systems and synthetic evidence.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A20.4?"
        >
          <p className="leading-8">
            A20.4 moves into Detection and Monitoring Phase. Before continuing,
            make sure the architecture model identifies what defenders need to
            observe and why those sources matter.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can identify which architecture relationships should influence monitoring priorities.",
              "I can explain why source health is itself an important defensive signal.",
              "I can identify identity, queue, application, data, configuration, and recovery relationships that deserve observable evidence.",
              "I can distinguish a threat-model concern from a confirmed incident.",
              "I can carry architecture findings into A20.4 without turning them into unsupported alert conclusions.",
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
          title="Keep the Architecture Pack Useful Through the Rest of A20"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use stable IDs",
                detail:
                  "Trust boundaries, findings, dependencies, threats, and validation needs should be easy to reference from later artifacts.",
              },
              {
                title: "Version assumptions",
                detail:
                  "If later evidence proves or disproves an assumption, record the change instead of silently rewriting the model.",
              },
              {
                title: "Link findings to evidence",
                detail:
                  "Every important architecture conclusion should identify the source or assumption supporting it.",
              },
              {
                title: "Carry questions forward",
                detail:
                  "Workload identity, monitoring delay, recovery freshness, and maintenance-scope questions belong in later A20 phases.",
              },
              {
                title: "Separate diagrams from prose",
                detail:
                  "Let diagrams show relationships while written notes explain evidence, confidence, limitations, and decisions.",
              },
              {
                title: "Track degraded states",
                detail:
                  "Identity, monitoring, queue, data, and recovery services should have expected behavior when partially unavailable.",
              },
              {
                title: "Maintain owner consistency",
                detail:
                  "Architecture owners should align with later detection, response, cloud, identity, risk, and recovery decisions.",
              },
              {
                title: "Preserve publication safety",
                detail:
                  "Keep all names, systems, addresses, diagrams, roles, evidence, and control details fictional and non-operational.",
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
            Threat modeling stays conceptual, defensive, fictional, and non-operational
          </h2>
          <p className="mt-3 leading-7">
            Use only the fictional Northbridge architecture and synthetic records
            supplied by CyberShield Academy. Do not scan, probe, enumerate, test
            credentials, exploit, bypass, evade monitoring, access cloud accounts,
            inspect private systems, collect real logs, recreate confidential
            production architecture, or validate threats against real targets.
            The purpose is to reason about defensive design, evidence, governance,
            resilience, and safe validation needs.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A20.3 Architecture and Threat Model Phase Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            The capstone now has a shared architecture, trust-boundary model,
            dependency review, bounded threat statements, and architecture
            findings. Next, A20.4 turns those findings into defensive monitoring
            questions, telemetry requirements, source-health decisions, and
            detection-quality review.
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