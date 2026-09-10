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

const modulePath = "/high-school/advanced/advanced-defensive-labs";
const previousLesson = `${modulePath}/multi-source-alert-investigation`;
const nextLesson = `${modulePath}/cloud-security-review-case`;

const objectives = [
  "Review a fictional network architecture using trust boundaries, segmentation, identity, management paths, logging, monitoring, resilience, and ownership rather than focusing on isolated devices.",
  "Distinguish architecture design evidence from assumptions, missing documentation, stale diagrams, and unresolved dependencies so findings remain traceable and defensible.",
  "Evaluate whether control placement, monitoring coverage, fallback paths, and administrative access support least privilege, containment, observability, and operational continuity.",
  "Prioritize architecture findings using business criticality, affected scope, likelihood of control failure, detectability, reversibility, dependency concentration, and remediation effort.",
  "Build a Network Defense Architecture Review with findings, evidence references, risk statements, priorities, owners, compensating controls, validation needs, and a leadership summary.",
];

const architecturePrinciples = [
  {
    principle: "Trust boundaries",
    meaning:
      "Places where data, identities, systems, or management authority cross between zones with different trust assumptions.",
    review:
      "Ask what control validates the transition, what evidence is logged, and who owns the boundary.",
  },
  {
    principle: "Segmentation",
    meaning:
      "Logical or physical separation that reduces unnecessary communication and limits the scope of faults or incidents.",
    review:
      "Ask whether segments reflect real business and administrative needs rather than arbitrary network shape.",
  },
  {
    principle: "Least privilege",
    meaning:
      "Access paths should support the minimum approved communication and management need.",
    review:
      "Ask whether broad pathways exist simply for convenience or because ownership is unclear.",
  },
  {
    principle: "Management-plane separation",
    meaning:
      "Administrative access should be distinct from normal user and application traffic where appropriate.",
    review:
      "Ask how privileged management is identified, approved, monitored, and separated conceptually.",
  },
  {
    principle: "Observability",
    meaning:
      "The design should produce enough evidence to understand important transitions, failures, and administrative changes.",
    review:
      "Ask what is logged, where evidence goes, how complete it is, and whether health is monitored.",
  },
  {
    principle: "Resilience",
    meaning:
      "Important services should not depend on one fragile control, path, or logging component when continuity matters.",
    review:
      "Ask what happens if a dependency is unavailable and whether safe degraded operation exists.",
  },
  {
    principle: "Ownership",
    meaning:
      "Every important service, segment, control, logging source, and administrative path needs a current owner.",
    review:
      "Ask who maintains the design, approves change, and responds when health degrades.",
  },
  {
    principle: "Change governance",
    meaning:
      "Architecture evidence should remain aligned with real approved design decisions over time.",
    review:
      "Ask whether diagrams, inventories, review dates, and exceptions are current.",
  },
];

const networkZones = [
  {
    zone: "User Access Zone",
    purpose:
      "Represents standard employee endpoints and approved user-facing access paths.",
    expectedControls:
      "Identity-aware access, endpoint health concepts, monitored transitions, limited direct administrative reach.",
    reviewConcern:
      "Should not become an unrestricted bridge into management or sensitive service zones.",
  },
  {
    zone: "Application Zone",
    purpose:
      "Contains fictional business application services that support normal workflows.",
    expectedControls:
      "Defined service-to-service paths, logging, ownership, health monitoring, limited management access.",
    reviewConcern:
      "Application dependencies should be documented so broad exceptions are not used as substitutes for architecture.",
  },
  {
    zone: "Data Services Zone",
    purpose:
      "Represents fictional storage and database services used by approved applications.",
    expectedControls:
      "Narrow service access, identity validation, logging, backup, ownership, and recovery planning.",
    reviewConcern:
      "Direct user access should be justified rather than assumed.",
  },
  {
    zone: "Management Zone",
    purpose:
      "Represents administrative systems, privileged management paths, and approved operational tooling.",
    expectedControls:
      "Separate privileged identities, strong review, monitored administration, narrow scope, change evidence.",
    reviewConcern:
      "Management should not share broad trust with normal user traffic.",
  },
  {
    zone: "Security Monitoring Zone",
    purpose:
      "Collects fictional logs, alert context, health, and review evidence.",
    expectedControls:
      "Independent evidence paths, source attribution, health monitoring, retention, controlled access.",
    reviewConcern:
      "Monitoring should not depend entirely on the same failure domain it is meant to observe.",
  },
  {
    zone: "External Services Boundary",
    purpose:
      "Represents approved connections to fictional third-party or externally managed services.",
    expectedControls:
      "Documented purpose, ownership, identity, logging, availability expectations, and fallback.",
    reviewConcern:
      "External dependency assumptions should be explicit and reviewed.",
  },
];

const northbridgeArchitecture = [
  {
    id: "ARC-1801",
    component: "User Access Zone",
    evidence:
      "Standard users reach APP-NB-10 through an approved application gateway path.",
    condition:
      "Expected",
    concern:
      "No direct management path is documented.",
    interpretation:
      "Supports separation between user access and administration.",
  },
  {
    id: "ARC-1802",
    component: "Management Zone",
    evidence:
      "Administrative workflows use a separate fictional privileged access service.",
    condition:
      "Expected",
    concern:
      "The diagram does not show the backup administrative path.",
    interpretation:
      "Separation is strong, but resilience evidence is incomplete.",
  },
  {
    id: "ARC-1803",
    component: "Security Monitoring Zone",
    evidence:
      "Application and identity logs are forwarded to MON-NB-4.",
    condition:
      "Expected",
    concern:
      "Network device health logs depend on the same collector as application logs.",
    interpretation:
      "Shared collector concentration may create an observability failure domain.",
  },
  {
    id: "ARC-1804",
    component: "Application Zone",
    evidence:
      "APP-NB-10 communicates with DATA-NB-3 using a defined service path.",
    condition:
      "Expected",
    concern:
      "The architecture review package does not include the latest dependency owner.",
    interpretation:
      "Communication appears bounded, but ownership evidence needs refresh.",
  },
  {
    id: "ARC-1805",
    component: "Data Services Zone",
    evidence:
      "DATA-NB-3 is reachable only from the approved application service and management zone in the fictional design.",
    condition:
      "Expected",
    concern:
      "A temporary exception is listed but its expiration field is blank.",
    interpretation:
      "Exception governance is incomplete and could create long-term drift.",
  },
  {
    id: "ARC-1806",
    component: "External Services Boundary",
    evidence:
      "APP-NB-10 depends on EXT-NB-2 for a noncritical reference lookup.",
    condition:
      "Expected",
    concern:
      "Fallback behavior is not shown.",
    interpretation:
      "An optional dependency could become an unnecessary single point of failure.",
  },
  {
    id: "ARC-1807",
    component: "Identity Dependency",
    evidence:
      "User and management access both depend on ID-NB-1 for fictional authentication decisions.",
    condition:
      "Needs Review",
    concern:
      "The architecture package does not show degraded-mode or recovery assumptions.",
    interpretation:
      "Central identity is expected, but resilience planning must be explicit.",
  },
  {
    id: "ARC-1808",
    component: "Logging Path",
    evidence:
      "MON-NB-4 receives both operational and security-relevant telemetry.",
    condition:
      "Needs Review",
    concern:
      "The collector and dashboard service share the same fictional hosting dependency.",
    interpretation:
      "A shared dependency could reduce both collection and visibility at once.",
  },
  {
    id: "ARC-1809",
    component: "Architecture Documentation",
    evidence:
      "Diagram version 4.1 was last approved nine months ago.",
    condition:
      "Stale",
    concern:
      "Two current service owners differ from the diagram labels.",
    interpretation:
      "The model may no longer represent current approved ownership.",
  },
  {
    id: "ARC-1810",
    component: "Change Governance",
    evidence:
      "Three architecture changes were approved after diagram version 4.1.",
    condition:
      "Needs Review",
    concern:
      "The changes are documented individually but not reflected in the consolidated diagram.",
    interpretation:
      "Change records exist, but architecture evidence is fragmented.",
  },
];

const dependencyTypes = [
  {
    type: "Functional dependency",
    explanation:
      "A service depends on another component to deliver business functionality.",
    example:
      "APP-NB-10 uses DATA-NB-3 for application data.",
  },
  {
    type: "Identity dependency",
    explanation:
      "Access depends on a shared identity or authorization service.",
    example:
      "User and management access depend on ID-NB-1.",
  },
  {
    type: "Monitoring dependency",
    explanation:
      "A control depends on a logging, telemetry, or dashboard service for visibility.",
    example:
      "Several sources forward evidence to MON-NB-4.",
  },
  {
    type: "Administrative dependency",
    explanation:
      "Operational management depends on a privileged access or change-control path.",
    example:
      "Management workflows use a separate administrative service.",
  },
  {
    type: "External dependency",
    explanation:
      "A service relies on a third party or externally managed component.",
    example:
      "APP-NB-10 uses EXT-NB-2 for a noncritical reference lookup.",
  },
  {
    type: "Governance dependency",
    explanation:
      "Safe operation depends on current ownership, approval, review, or exception records.",
    example:
      "A data-zone exception lacks an expiration date.",
  },
];

const reviewFindings = [
  {
    id: "FND-1801",
    title: "Monitoring concentration creates an observability dependency",
    evidence:
      "ARC-1803, ARC-1808",
    risk:
      "A shared collector or hosting failure could reduce collection and visibility at the same time.",
    impact:
      "High",
    likelihood:
      "Moderate",
    priority:
      "P1",
    recommendation:
      "Document independent health signals and a resilient evidence path for critical monitoring sources.",
    owner:
      "Security Monitoring Owner",
    validation:
      "Review synthetic failure scenario and confirm evidence remains available during collector degradation.",
  },
  {
    id: "FND-1802",
    title: "Identity resilience assumptions are not documented",
    evidence:
      "ARC-1807",
    risk:
      "A central identity dependency could interrupt both standard and administrative access if recovery or degraded-mode assumptions are unclear.",
    impact:
      "High",
    likelihood:
      "Low to Moderate",
    priority:
      "P1",
    recommendation:
      "Document approved resilience, recovery ownership, and emergency administrative decision paths conceptually.",
    owner:
      "Identity Platform Owner",
    validation:
      "Tabletop the fictional identity dependency failure and record decision authority.",
  },
  {
    id: "FND-1803",
    title: "Architecture diagram is stale",
    evidence:
      "ARC-1809, ARC-1810",
    risk:
      "Reviewers may make decisions from ownership and dependency information that no longer represents the approved current state.",
    impact:
      "Moderate",
    likelihood:
      "High",
    priority:
      "P1",
    recommendation:
      "Reconcile approved change records into a current architecture version with owner signoff.",
    owner:
      "Security Architecture Owner",
    validation:
      "Compare all approved post-4.1 changes with the refreshed diagram.",
  },
  {
    id: "FND-1804",
    title: "Data-zone exception has no expiration",
    evidence:
      "ARC-1805",
    risk:
      "A temporary architectural deviation may become permanent without deliberate review.",
    impact:
      "Moderate",
    likelihood:
      "Moderate",
    priority:
      "P1",
    recommendation:
      "Assign scope, owner, compensating control, expiration, and closure evidence.",
    owner:
      "Risk / Governance Owner",
    validation:
      "Confirm the exception is either closed, renewed, or redesigned with current approval.",
  },
  {
    id: "FND-1805",
    title: "Optional external dependency lacks documented fallback",
    evidence:
      "ARC-1806",
    risk:
      "A noncritical external lookup could unnecessarily interrupt the application workflow.",
    impact:
      "Moderate",
    likelihood:
      "Moderate",
    priority:
      "P2",
    recommendation:
      "Define visible degraded behavior so the core fictional workflow can continue without the optional reference.",
    owner:
      "Application Service Owner",
    validation:
      "Use a synthetic tabletop where EXT-NB-2 is unavailable and confirm safe degraded behavior.",
  },
  {
    id: "FND-1806",
    title: "Management separation is strong but backup-path evidence is missing",
    evidence:
      "ARC-1802",
    risk:
      "A primary management dependency could become an operational bottleneck if the approved fallback is unknown.",
    impact:
      "Moderate",
    likelihood:
      "Low",
    priority:
      "P2",
    recommendation:
      "Document the approved recovery path and decision authority without broadening normal access.",
    owner:
      "Platform Operations Owner",
    validation:
      "Review the fictional recovery plan and ensure the fallback preserves least privilege.",
  },
];

const findingQuality = [
  {
    weak:
      "The network is insecure.",
    strong:
      "Monitoring evidence from several critical sources depends on one collector and one shared hosting dependency, creating an observability concentration risk.",
    why:
      "The strong version names the condition, affected function, and risk without exaggeration.",
  },
  {
    weak:
      "Identity is a single point of failure.",
    strong:
      "User and management access depend on one identity service, while the review package does not document degraded-mode or recovery assumptions.",
    why:
      "The strong version separates the observed dependency from the unproven outcome.",
  },
  {
    weak:
      "The diagram is wrong.",
    strong:
      "Diagram version 4.1 is nine months old and does not reflect three approved changes or two current owner mappings.",
    why:
      "The strong version points to specific stale evidence.",
  },
  {
    weak:
      "The external service is dangerous.",
    strong:
      "The external reference lookup is noncritical, but fallback behavior is undocumented, so an optional dependency may have disproportionate availability impact.",
    why:
      "The strong version focuses on resilience rather than dramatic language.",
  },
];

const prioritizationModel = [
  {
    factor: "Business criticality",
    question:
      "How important is the affected service or control to normal defensive or business operations?",
  },
  {
    factor: "Blast radius",
    question:
      "How many fictional systems, workflows, or users could be affected if the design fails?",
  },
  {
    factor: "Control dependency",
    question:
      "Does one architecture element protect or observe many others?",
  },
  {
    factor: "Detectability",
    question:
      "Would failure be immediately visible or could the design fail silently?",
  },
  {
    factor: "Reversibility",
    question:
      "Can the problem be corrected safely without broad disruption?",
  },
  {
    factor: "Evidence confidence",
    question:
      "Is the finding supported by current architecture evidence or mainly by stale or missing documentation?",
  },
  {
    factor: "Existing safeguards",
    question:
      "Are compensating controls already reducing the practical risk?",
  },
  {
    factor: "Remediation dependency",
    question:
      "Does the fix require several owners, a major redesign, or a simple documentation correction?",
  },
];

const reviewFields = [
  {
    field: "Finding ID",
    purpose:
      "Stable reference for each architecture finding.",
    example:
      "FND-1801",
  },
  {
    field: "Architecture scope",
    purpose:
      "Names the zone, service, dependency, or trust boundary being reviewed.",
    example:
      "Security Monitoring Zone",
  },
  {
    field: "Evidence references",
    purpose:
      "Links the finding to specific fictional architecture records.",
    example:
      "ARC-1803, ARC-1808",
  },
  {
    field: "Observed condition",
    purpose:
      "States what the evidence actually shows.",
    example:
      "Multiple critical sources share one collector and hosting dependency",
  },
  {
    field: "Risk statement",
    purpose:
      "Explains what could happen and why it matters.",
    example:
      "Collector failure could reduce both telemetry collection and visibility",
  },
  {
    field: "Impact",
    purpose:
      "Rates the consequence if the condition produces a failure.",
    example:
      "High",
  },
  {
    field: "Likelihood",
    purpose:
      "Estimates how plausible the failure is within the fictional context.",
    example:
      "Moderate",
  },
  {
    field: "Priority",
    purpose:
      "Orders the finding for remediation and leadership attention.",
    example:
      "P1",
  },
  {
    field: "Recommendation",
    purpose:
      "Defines the defensive improvement without overprescribing implementation.",
    example:
      "Add resilient monitoring health and evidence path",
  },
  {
    field: "Owner",
    purpose:
      "Names the accountable fictional role.",
    example:
      "Security Monitoring Owner",
  },
  {
    field: "Compensating control",
    purpose:
      "Records an existing or temporary safeguard while the finding remains open.",
    example:
      "Manual health verification during collector degradation",
  },
  {
    field: "Validation",
    purpose:
      "Defines how reviewers will know the issue is actually resolved.",
    example:
      "Synthetic failure tabletop with evidence continuity confirmed",
  },
];

const dashboardMetrics = [
  {
    label: "Architecture records",
    value: "10",
    note: "Zones, identity, logging, dependencies, documentation, and governance evidence",
  },
  {
    label: "Priority findings",
    value: "6",
    note: "Monitoring, identity resilience, stale documentation, exception, external fallback, and management recovery",
  },
  {
    label: "P1 findings",
    value: "4",
    note: "Highest current remediation attention",
  },
  {
    label: "Real network tests",
    value: "0",
    note: "All review work remains fictional and architecture-focused",
  },
];

const logs = [
  "[08:10] ARC-1801 zone=USER_ACCESS state=EXPECTED direct_management_path=NONE_DOCUMENTED",
  "[08:28] ARC-1802 zone=MANAGEMENT separation=STRONG backup_path=NOT_DOCUMENTED",
  "[08:46] ARC-1803 zone=MONITORING shared_collector=YES concentration=REVIEW",
  "[09:04] ARC-1805 zone=DATA_SERVICES exception_expiration=MISSING action=GOVERNANCE_REVIEW",
  "[09:22] ARC-1807 dependency=IDENTITY recovery_assumption=NOT_DOCUMENTED",
  "[09:40] ARC-1808 logging_hosting_dependency=SHARED state=REVIEW",
  "[09:58] ARC-1809 diagram_version=4.1 age=9_MONTHS owner_labels=STALE",
  "[10:16] ARC-1810 approved_changes=3 reflected_in_diagram=NO",
];

const safeLabTasks = [
  "Create at least thirty-five fictional ARC records across user, application, data, management, monitoring, identity, and external-service areas.",
  "Give every architecture record a stable ARC ID.",
  "Document the purpose of each zone or service.",
  "Document the owner of each important architecture element.",
  "Document trust-boundary transitions.",
  "Document management paths.",
  "Document identity dependencies.",
  "Document logging dependencies.",
  "Document monitoring dependencies.",
  "Document business-service dependencies.",
  "Document optional external dependencies.",
  "Record whether each dependency is essential or optional.",
  "Record resilience or degraded-mode assumptions.",
  "Record current architecture version.",
  "Record last review date.",
  "Record approved changes not yet reflected in diagrams.",
  "Record temporary exceptions.",
  "Record exception owners and expiration.",
  "Create at least twelve findings.",
  "Give each finding a stable FND ID.",
  "Link every finding to ARC evidence.",
  "Write an observed-condition statement.",
  "Write a bounded risk statement.",
  "Assign impact.",
  "Assign likelihood.",
  "Assign priority.",
  "Identify compensating controls.",
  "Assign a fictional remediation owner.",
  "Define a validation method.",
  "Identify at least three observability concentration risks.",
  "Identify at least three identity or management dependency risks.",
  "Identify at least three stale-documentation or ownership issues.",
  "Identify at least three resilience or fallback gaps.",
  "Write a one-page leadership summary.",
  "Keep every review step conceptual, fictional, and non-disruptive.",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Treat the shared monitoring collector as a resilience and observability concentration risk, then document independent health and recovery requirements.",
    outcome:
      "Best. The design concern is loss of visibility, not the mere existence of a central collector.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Declare the entire monitoring architecture failed because one collector is shared.",
    outcome:
      "Caution. The evidence shows concentration risk, not current failure.",
    tone: "caution" as const,
  },
  {
    label: "Choice C",
    response:
      "Ignore the dependency because centralization is always good.",
    outcome:
      "Risky. Centralization can improve operations while still creating a failure domain that needs resilience.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Preserve the current segmentation design, document the backup management path, and validate that any fallback keeps privileged access narrow and governed.",
    outcome:
      "Best. Resilience should not require weakening least privilege.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Add broad user-zone access to management systems as an emergency fallback.",
    outcome:
      "Risky. Resilience should not be achieved by collapsing trust boundaries.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Assume no fallback is necessary because the primary path is reliable.",
    outcome:
      "Caution. Important administrative dependencies should have documented recovery assumptions.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is a trust boundary?",
    choices: [
      "A point where systems, data, identities, or management authority cross between areas with different trust assumptions.",
      "Any line drawn on a network diagram.",
      "A list of usernames.",
      "A ticket queue.",
    ],
    answer: 0,
    explanation:
      "Trust boundaries matter because transitions between different trust assumptions need controls, evidence, and ownership.",
  },
  {
    question:
      "Why is management-plane separation useful?",
    choices: [
      "It reduces unnecessary overlap between normal user activity and privileged administration.",
      "It removes the need for identity controls.",
      "It allows every user to become an administrator.",
      "It eliminates logging requirements.",
    ],
    answer: 0,
    explanation:
      "Separating administrative workflows can reduce unnecessary privileged exposure and make monitoring clearer.",
  },
  {
    question:
      "What is the strongest conclusion when one monitoring collector supports many critical sources?",
    choices: [
      "The design has a concentration risk that should be evaluated for resilience and independent health visibility.",
      "The architecture is automatically compromised.",
      "Central monitoring should always be removed.",
      "The collector proves a security incident occurred.",
    ],
    answer: 0,
    explanation:
      "Shared components can be useful while still creating failure domains that need explicit resilience planning.",
  },
  {
    question:
      "What should happen when an architecture diagram is stale but approved change records exist?",
    choices: [
      "Reconcile the approved changes into a current diagram and preserve the change evidence.",
      "Delete the change records.",
      "Assume the old diagram is still correct.",
      "Ignore ownership differences.",
    ],
    answer: 0,
    explanation:
      "Architecture documentation should represent the current approved design rather than fragmenting evidence across several records.",
  },
  {
    question:
      "What is strongest for a temporary architecture exception?",
    choices: [
      "Define scope, owner, compensating control, expiration, approval, and closure evidence.",
      "Leave it open indefinitely.",
      "Avoid documenting it.",
      "Treat it as the new permanent design automatically.",
    ],
    answer: 0,
    explanation:
      "Temporary deviations require governance so they do not become permanent by accident.",
  },
  {
    question:
      "How should architecture findings be prioritized?",
    choices: [
      "Using business criticality, blast radius, control dependency, detectability, evidence confidence, existing safeguards, and remediation dependencies.",
      "By whichever finding sounds most technical.",
      "Alphabetically.",
      "By device count only.",
    ],
    answer: 0,
    explanation:
      "Architecture priority should reflect real defensive impact and confidence rather than appearance.",
  },
  {
    question:
      "What is the purpose of the Network Defense Architecture Review artifact?",
    choices: [
      "Document architecture evidence, findings, risks, priorities, owners, compensating controls, validation needs, and leadership meaning.",
      "Provide real-world network exploitation steps.",
      "Replace change management.",
      "Remove the need for current diagrams.",
    ],
    answer: 0,
    explanation:
      "The artifact turns architecture evidence into a defensible review and remediation plan.",
  },
];

const checklistItems = [
  "Trust boundaries are identified.",
  "Zones have clear purposes.",
  "Management access is reviewed separately from user access.",
  "Identity dependencies are documented.",
  "Logging dependencies are documented.",
  "Monitoring concentration is reviewed.",
  "Optional external dependencies have fallback assumptions.",
  "Resilience and degraded mode are considered.",
  "Architecture versions are current.",
  "Approved changes are reflected in consolidated documentation.",
  "Ownership is current.",
  "Temporary exceptions have expiration.",
  "Findings link to evidence.",
  "Risk statements are bounded.",
  "Business criticality is considered.",
  "Blast radius is considered.",
  "Detectability is considered.",
  "Compensating controls are documented.",
  "Validation evidence is defined.",
  "No real network is scanned, probed, exploited, or modified.",
];

const takeaways = [
  "Network architecture review is about relationships, boundaries, dependencies, resilience, and ownership—not just device inventory.",
  "Trust boundaries need clear control, evidence, and accountability.",
  "Management-plane separation supports least privilege and clearer administrative oversight.",
  "Centralized services can still create concentration risks that deserve resilience planning.",
  "Monitoring should remain observable even when part of the monitored environment is degraded.",
  "Stale diagrams and ownership records are architecture risks because decisions depend on current models.",
  "Temporary exceptions need governance, expiration, compensating controls, and closure evidence.",
  "Optional dependencies should not become unnecessary single points of failure.",
  "Strong findings describe observed conditions and bounded consequences without exaggerating certainty.",
  "The Network Defense Architecture Review becomes the second artifact in the A18 Advanced Defensive Casebook.",
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
        Module A18
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

export default function NetworkDefenseArchitectureReviewPage() {
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
              A18.2
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Defensive Labs
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A18.2
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Network Defense Architecture Review
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Defensive architecture review asks whether trust, access,
            monitoring, resilience, ownership, and failure behavior make sense
            together. A network can look neatly segmented on a diagram while
            still hiding stale ownership, fragile dependencies, or incomplete
            evidence.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses a fictional architecture package only. No live
            network discovery, probing, scanning, or modification is involved.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A18: Advanced Defensive Labs"
          lessonTitle="Network Defense Architecture Review"
          lessonNumber={2}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A18.2 Entry Readiness"
          items={[
            "I can distinguish architecture evidence from assumptions and missing documentation.",
            "I understand trust boundaries, segmentation, least privilege, monitoring, resilience, and ownership conceptually.",
            "I can write defensive findings without turning them into instructions for defeating controls.",
            "I will keep all architecture review work fictional, conceptual, and non-disruptive.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Architecture Review Is Really Dependency Review"
        >
          <p className="leading-8">
            A diagram may show six zones and dozens of arrows, but the hardest
            question is usually simpler: what depends on what? If identity
            fails, which services stop? If monitoring loses one collector, what
            evidence disappears? If an owner record is stale, which routing or
            access decisions become unreliable?
          </p>

          <p className="mt-4 leading-8">
            Strong reviewers look beyond clean visual boundaries and ask how the
            design behaves under change, failure, missing evidence, and
            operational pressure.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              A good architecture review explains where trust changes, where dependencies concentrate, what evidence exists, and how the system fails safely.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for This Lab"
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
          eyebrow="Architecture Principles"
          title="Eight Ideas That Shape a Defensive Review"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {architecturePrinciples.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.principle}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Review question: {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional Zone Model"
          title="Six Zones in the Northbridge Architecture"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {networkZones.map((item) => (
              <article
                key={item.zone}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.zone}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Purpose: {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Expected controls: {item.expectedControls}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Review concern: {item.reviewConcern}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Architecture Case File"
          title="Northbridge Synthetic Architecture Evidence"
        >
          <div className="grid gap-5">
            {northbridgeArchitecture.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.component}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.condition}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.evidence}
                    </p>
                  </div>

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
                      Interpretation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.interpretation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Dependency Thinking"
          title="Six Different Dependencies Can Shape One Architecture"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {dependencyTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.type}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.explanation}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Network Defense Architecture Dashboard"
          subtitle="Fictional architecture evidence, findings, priorities, and safety posture"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Monitoring Dependency Concentration Requires Review"
          severity="High"
          time="10:16"
          source="Fictional Architecture Review Queue"
          details="Several security-relevant telemetry sources depend on one collector, while the collector and its dashboard share the same fictional hosting dependency. No current outage is shown, but the evidence suggests a concentrated observability failure domain."
          recommendation="Document independent health visibility, resilient evidence handling, and a safe recovery path without assuming the current architecture is already failing."
        />

        <FakeLogPanel
          title="Northbridge Fictional Architecture Review Log"
          logs={logs}
        />

        <Section
          eyebrow="Architecture Findings"
          title="Six Evidence-Backed Findings"
        >
          <div className="grid gap-5">
            {reviewFindings.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black text-yellow-100">
                    {item.priority}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.title}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Evidence", item.evidence],
                    ["Risk", item.risk],
                    ["Impact", item.impact],
                    ["Likelihood", item.likelihood],
                    ["Recommendation", item.recommendation],
                    ["Owner", item.owner],
                    ["Validation", item.validation],
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
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Monitoring Concentration"
          question="What is the strongest architecture finding supported by ARC-1803 and ARC-1808?"
          evidence={[
            "Application and identity telemetry depend on MON-NB-4.",
            "Network-device health evidence also depends on MON-NB-4.",
            "The collector and dashboard share one fictional hosting dependency.",
            "No current outage is shown.",
            "The review package does not show an independent monitoring-health path.",
          ]}
          options={[
            "The architecture has an observability concentration risk that should be addressed through resilient health and evidence design.",
            "The monitoring system has definitely failed.",
            "Centralized monitoring is always insecure.",
            "The evidence proves an active incident.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports a concentration risk, not a claim that failure has already occurred."
        />

        <Section
          eyebrow="Finding Quality"
          title="Turn Vague Statements Into Defensible Architecture Findings"
        >
          <div className="grid gap-5">
            {findingQuality.map((item) => (
              <article
                key={item.weak}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Weak
                    </p>
                    <p className="mt-2 leading-7 text-red-50">{item.weak}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Stronger
                    </p>
                    <p className="mt-2 leading-7 text-emerald-50">
                      {item.strong}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Why stronger: {item.why}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Prioritization"
          title="How to Decide Which Architecture Finding Matters First"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {prioritizationModel.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.factor}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.question}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Review Artifact"
          title="What a Professional Architecture Review Contains"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reviewFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.field}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Shared Monitoring Collector"
          scenario="A fictional architecture uses one collector for several important telemetry sources. The collector and dashboard also share one hosting dependency, but no outage has occurred."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Management Resilience"
          scenario="The fictional architecture has strong management-plane separation, but the review package does not document what happens if the primary privileged-access path is unavailable."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Network Defense Architecture Review"
        >
          <p className="leading-8">
            Review a fictional network design as a set of trust relationships,
            operational dependencies, evidence paths, ownership decisions, and
            failure domains rather than as a collection of devices.
          </p>

          <div className="mt-6 grid gap-4">
            {safeLabTasks.map((item, index) => (
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
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              Use only fictional diagrams, ownership records, service
              dependencies, architecture versions, monitoring paths, and
              exception records. Do not scan, probe, enumerate, exploit, or
              change any real network. The lab is a conceptual defensive review.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Stale Architecture Documentation"
          question="What is the strongest response when a nine-month-old diagram does not reflect three approved changes?"
          evidence={[
            "Diagram version 4.1 is nine months old.",
            "Three approved architecture changes occurred after version 4.1.",
            "The change records are individually documented.",
            "Two owner labels in the diagram differ from current records.",
            "The consolidated architecture view has not been refreshed.",
          ]}
          options={[
            "Reconcile the approved changes and current ownership into a new reviewed architecture version while preserving the change evidence.",
            "Keep using the old diagram because the individual changes exist somewhere else.",
            "Delete the older change records.",
            "Assume ownership differences are harmless.",
          ]}
          bestAnswer={0}
          explanation="A current consolidated model helps reviewers reason from the approved present state instead of reconstructing it from fragmented records."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Create a Resilience and Observability Review"
        >
          <p className="leading-8">
            Take the fictional Northbridge architecture and write a short review
            focused only on failure domains and evidence continuity. Identify
            where one dependency could reduce both service availability and the
            team's ability to observe what happened.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Critical service dependency",
              "Identity dependency",
              "Monitoring dependency",
              "Management dependency",
              "External dependency",
              "Governance dependency",
              "Potential failure domain",
              "Detectability concern",
              "Existing safeguard",
              "Safe degraded behavior",
              "Recovery owner",
              "Validation evidence",
              "Highest-priority resilience gap",
              "Leadership recommendation",
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
            Keep the challenge conceptual. You are reviewing architecture
            resilience, not testing a real system.
          </p>
        </Section>

        <DefenderChecklist
          title="A18.2 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A18.2 Mini Quiz: Network Defense Architecture Review"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Network Defense Architecture Review"
          prompt="Create the second artifact for your A18 Advanced Defensive Casebook: a fictional Network Defense Architecture Review. Include architecture scope, zone purpose, trust boundaries, identity dependencies, management paths, logging and monitoring dependencies, resilience assumptions, architecture version, ownership, exceptions, at least twelve findings, evidence references, impact, likelihood, priority, compensating controls, remediation owner, validation method, and a one-page leadership summary."
          tips={[
            "Review relationships and dependencies, not just individual components.",
            "Separate observed architecture evidence from assumptions.",
            "Treat stale diagrams and ownership as real governance issues.",
            "Do not call a dependency a failure unless evidence shows it failed.",
            "Write bounded recommendations that preserve least privilege and resilience.",
            "Keep every record fictional and non-disruptive.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A18.3?"
        >
          <p className="leading-8">
            A18.3 moves into a fictional cloud security review. Before
            continuing, make sure you can explain how trust boundaries,
            identity, monitoring, resilience, ownership, and documentation
            quality shape the strength of a network architecture.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can identify trust boundaries and explain why they matter.",
              "I can distinguish segmentation from simple diagram separation.",
              "I can identify dependency concentration without claiming a failure has already occurred.",
              "I can write evidence-backed architecture findings and priorities.",
              "I can recommend conceptual improvements without probing or modifying a real network.",
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
          title="How to Make the Architecture Review Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Show the architecture scope",
                detail:
                  "Define which zones, services, identity systems, monitoring paths, and dependencies the review covers.",
              },
              {
                title: "Use evidence IDs",
                detail:
                  "Every finding should trace back to specific architecture evidence.",
              },
              {
                title: "Write bounded risk statements",
                detail:
                  "Describe what could happen without claiming that the failure has already occurred.",
              },
              {
                title: "Prioritize by consequence",
                detail:
                  "Use business criticality, blast radius, detectability, and dependency concentration.",
              },
              {
                title: "Separate design from governance",
                detail:
                  "A technically strong design can still have stale ownership, expired exceptions, or outdated documentation.",
              },
              {
                title: "Show validation",
                detail:
                  "A recommendation is incomplete until you define how reviewers will know the issue is resolved.",
              },
              {
                title: "Keep resilience compatible with least privilege",
                detail:
                  "Fallback should not require collapsing trust boundaries or broadening access unnecessarily.",
              },
              {
                title: "Connect forward",
                detail:
                  "A18.3 applies the same architecture-review discipline to a fictional cloud environment.",
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
            A18.2 stays fictional, conceptual, defensive, and non-disruptive
          </h2>
          <p className="mt-3 leading-7">
            Do not scan, probe, enumerate, fuzz, exploit, access, or modify real
            networks. Do not use real credentials, private records, or live
            security platforms. This lesson is about architecture reasoning,
            evidence, resilience, ownership, monitoring, governance, and
            defensible recommendations.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A18.2 Network Defense Architecture Review Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a defensible approach to trust boundaries,
            segmentation, management paths, identity dependencies, monitoring
            concentration, resilience, architecture freshness, exceptions, and
            prioritization. Next, A18.3 applies those skills to a fictional cloud
            security review case.
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