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
const previousLesson = `${modulePath}/incident-report-project`;
const nextLesson = `${modulePath}/risk-assessment-project`;

const objectives = [
  "Explain what a threat model is, why defenders use one, and how it differs from a vulnerability list, incident report, security diagram, or risk register.",
  "Identify fictional assets, actors, trust boundaries, entry points, dependencies, security assumptions, and defensive objectives without drifting into offensive testing instructions.",
  "Write bounded threat statements that connect an asset, a plausible adverse event, an affected security property, available evidence, and a defensive concern.",
  "Prioritize threat-model findings using impact, exposure, control strength, uncertainty, dependency importance, and business context rather than dramatic labels alone.",
  "Create a portfolio-ready Threat Model Project that demonstrates structured reasoning, clear diagrams, traceable assumptions, defensive recommendations, and publication-safe documentation.",
];

const threatModelPurpose = [
  {
    title: "Make assumptions visible before they become hidden risk",
    detail:
      "A system design always contains assumptions: which identities are trusted, which service owns a decision, which boundary separates contexts, which data flow is expected, and which dependency must remain available. Threat modeling brings those assumptions into the open so defenders can review them.",
  },
  {
    title: "Connect architecture to defensive questions",
    detail:
      "A security diagram shows components and flows. A threat model asks what could go wrong at those boundaries, what matters if it does, what evidence supports the concern, and which controls or design choices reduce the exposure.",
  },
  {
    title: "Prioritize what deserves attention",
    detail:
      "Not every hypothetical problem has the same importance. Threat modeling helps teams focus on assets, flows, privileges, and dependencies whose failure, misuse, or loss of trust could create meaningful impact.",
  },
  {
    title: "Improve design before an incident occurs",
    detail:
      "Threat modeling is most useful when it informs architecture, requirements, ownership, logging, resilience, and review decisions early enough to change the design safely.",
  },
  {
    title: "Create an explainable security artifact",
    detail:
      "A good model lets another reviewer understand why a concern exists, what evidence or assumption supports it, which control addresses it, what remains uncertain, and who owns the next decision.",
  },
];

const modelElements = [
  {
    element: "Assets",
    meaning:
      "The data, service, capability, identity, workflow, decision, reputation, or business function that needs protection.",
    reviewQuestion:
      "What would matter if confidentiality, integrity, availability, authenticity, or accountability were weakened?",
  },
  {
    element: "Actors",
    meaning:
      "People, services, devices, applications, partners, administrators, automated workloads, or other entities that interact with the fictional system.",
    reviewQuestion:
      "Which actors are expected, which are external, and which require elevated trust or privilege?",
  },
  {
    element: "Trust boundaries",
    meaning:
      "Places where data, identity, authority, responsibility, or assumptions change between zones, services, organizations, or security contexts.",
    reviewQuestion:
      "What must be re-verified when information or authority crosses this boundary?",
  },
  {
    element: "Entry points",
    meaning:
      "Approved interfaces through which actors or systems begin an interaction, such as a fictional user portal, API gateway, admin workflow, partner integration, or message queue.",
    reviewQuestion:
      "Which controls govern the interaction before trust is extended?",
  },
  {
    element: "Data and decision flows",
    meaning:
      "How information, requests, approvals, events, and decisions move between system components.",
    reviewQuestion:
      "Where could a flow lose integrity, confidentiality, context, attribution, or availability?",
  },
  {
    element: "Dependencies",
    meaning:
      "Services, identity providers, storage, networks, logging systems, approval workflows, third parties, and operational processes required for the design to function safely.",
    reviewQuestion:
      "What happens if the dependency is unavailable, stale, misconfigured, or no longer trustworthy?",
  },
  {
    element: "Controls",
    meaning:
      "Defensive measures that reduce likelihood or impact, including authentication, authorization, validation, segmentation, logging, review, recovery, and governance.",
    reviewQuestion:
      "What does the control actually prevent, detect, limit, recover, or prove?",
  },
  {
    element: "Assumptions and unknowns",
    meaning:
      "Conditions believed to be true but not yet fully proven, plus evidence gaps that affect confidence.",
    reviewQuestion:
      "Which conclusions would change if this assumption were false?",
  },
];

const securityProperties = [
  {
    property: "Confidentiality",
    focus:
      "Information should be available only to approved identities, roles, services, and processes.",
    portfolioUse:
      "Describe which fictional information requires protection and where a boundary or flow could expose more than intended.",
  },
  {
    property: "Integrity",
    focus:
      "Data, configuration, approvals, software, messages, and decisions should remain accurate and protected from unauthorized change.",
    portfolioUse:
      "Show where validation, authorization, provenance, or separation of duties helps preserve trustworthy state.",
  },
  {
    property: "Availability",
    focus:
      "Important services, dependencies, monitoring, and recovery capabilities should remain usable when needed.",
    portfolioUse:
      "Identify critical dependencies and resilience assumptions without turning the exercise into disruption instructions.",
  },
  {
    property: "Authenticity",
    focus:
      "The system should have reasonable evidence that an identity, message, service, or source is what it claims to be.",
    portfolioUse:
      "Document where identity proof, service trust, certificate validation, or ownership evidence matters conceptually.",
  },
  {
    property: "Accountability",
    focus:
      "Important actions and decisions should be attributable through appropriate logging, ownership, approvals, and review records.",
    portfolioUse:
      "Show which events must be observable enough for later investigation and governance without exposing real logs.",
  },
];

const threatStatementFormula = [
  {
    part: "1. Protected asset",
    detail:
      "Name the fictional data, service, identity, workflow, or decision that could be affected.",
  },
  {
    part: "2. Plausible adverse event",
    detail:
      "Describe the concern at a high level, such as unauthorized access, incorrect privilege, loss of availability, untrusted input, stale authorization, or missing visibility.",
  },
  {
    part: "3. Security property",
    detail:
      "State whether confidentiality, integrity, availability, authenticity, accountability, or several properties are at stake.",
  },
  {
    part: "4. Condition or boundary",
    detail:
      "Explain which trust boundary, dependency, assumption, or design condition makes the concern plausible.",
  },
  {
    part: "5. Consequence",
    detail:
      "Describe the realistic operational or business effect without exaggeration.",
  },
  {
    part: "6. Defensive response",
    detail:
      "Identify the control, architecture change, validation, monitoring, ownership, recovery, or governance action that reduces the concern.",
  },
];

const weakVsStrong = [
  {
    weak: "The API could be hacked.",
    strong:
      "If a request reaches the fictional API from an external zone without the expected identity and authorization checks, protected records could be disclosed or changed outside approved access. The model therefore requires authenticated identity, least-privilege authorization, input validation, logging, and owner review at that trust boundary.",
    lesson:
      "The strong statement names the boundary, protected asset, security properties, defensive controls, and decision owner instead of using a vague dramatic claim.",
  },
  {
    weak: "The cloud is risky.",
    strong:
      "The fictional application depends on a shared cloud identity service. If role ownership becomes stale or access reviews stop occurring, unnecessary privileges could persist and weaken accountability. The design should maintain named role owners, recurring access review, expiration for temporary grants, and evidence of review completion.",
    lesson:
      "The concern is tied to a specific dependency and governance condition rather than treating an entire technology category as dangerous.",
  },
  {
    weak: "Logs will stop attackers.",
    strong:
      "Logging does not prevent every adverse event, but reliable identity, application, and authorization telemetry can improve detection, investigation, accountability, and validation. The threat model should record what must be observable and what happens if visibility is degraded.",
    lesson:
      "Controls should be described according to what they actually do, not as universal guarantees.",
  },
  {
    weak: "Use more security everywhere.",
    strong:
      "The admin workflow crosses a higher-trust boundary and can change sensitive configuration. It deserves stronger authentication, limited role membership, approval evidence, session accountability, and a defined recovery path because the potential impact is greater than a normal read-only user flow.",
    lesson:
      "Security effort should be proportional to privilege, impact, exposure, and dependency importance.",
  },
];

const northbridgeArchitecture = [
  {
    id: "NB-TM-01",
    component: "Public Student Portal",
    zone: "External-facing application zone",
    asset:
      "Fictional account profile data, session state, service availability, and user trust",
    dependency:
      "Identity Gateway IG-NB-4 and Application API API-NB-14",
    boundary:
      "Untrusted internet context to authenticated application context",
    assumption:
      "Only authenticated sessions with expected authorization can request protected profile data",
  },
  {
    id: "NB-TM-02",
    component: "Identity Gateway IG-NB-4",
    zone: "Identity services zone",
    asset:
      "Authentication decisions, role context, session assertions, and identity audit evidence",
    dependency:
      "Directory DIR-NB-2 and approved federation configuration",
    boundary:
      "External authentication request to trusted identity decision",
    assumption:
      "Role mappings and federation relationships are reviewed and owned",
  },
  {
    id: "NB-TM-03",
    component: "Application API API-NB-14",
    zone: "Application services zone",
    asset:
      "Business logic, authorization decisions, profile records, and service integrity",
    dependency:
      "Identity Gateway, Data Service DS-NB-6, Queue Q-NB-5",
    boundary:
      "Authenticated user context to service-to-service execution context",
    assumption:
      "The API validates identity context and applies resource-level authorization before returning protected data",
  },
  {
    id: "NB-TM-04",
    component: "Data Service DS-NB-6",
    zone: "Protected data zone",
    asset:
      "Synthetic student preference records and application configuration",
    dependency:
      "Managed storage, service identity, backup workflow",
    boundary:
      "Application service context to protected data context",
    assumption:
      "Only the designated service identity and approved administrative roles can reach the data service",
  },
  {
    id: "NB-TM-05",
    component: "Queue Q-NB-5",
    zone: "Internal messaging zone",
    asset:
      "Processing integrity, delivery order, workload availability, and event context",
    dependency:
      "Worker WK-NB-8 and Monitoring MON-NB-3",
    boundary:
      "Application request context to asynchronous processing context",
    assumption:
      "Messages preserve expected context and failures remain observable through fictional telemetry",
  },
  {
    id: "NB-TM-06",
    component: "Worker WK-NB-8",
    zone: "Internal compute zone",
    asset:
      "Automated processing decisions and downstream update integrity",
    dependency:
      "Queue Q-NB-5, service identity SVC-NB-8, Data Service DS-NB-6",
    boundary:
      "Queued task to privileged service operation",
    assumption:
      "The worker identity has only the permissions required for its defined task",
  },
  {
    id: "NB-TM-07",
    component: "Admin Review Console ADM-NB-2",
    zone: "Restricted administration zone",
    asset:
      "Configuration changes, privileged approvals, and operational accountability",
    dependency:
      "Identity Gateway, approval workflow APR-NB-7, logging service LOG-NB-9",
    boundary:
      "Normal workforce context to privileged administrative context",
    assumption:
      "Administrative actions require stronger authentication, narrow role assignment, and attributable approval evidence",
  },
  {
    id: "NB-TM-08",
    component: "Monitoring MON-NB-3",
    zone: "Observability zone",
    asset:
      "Alerts, service-health evidence, authentication evidence, and investigation visibility",
    dependency:
      "Application, identity, queue, and logging sources",
    boundary:
      "Operational systems to centralized observation context",
    assumption:
      "Telemetry arrives with enough freshness, provenance, and coverage to support defensive decisions",
  },
];

const threatRecords = [
  {
    id: "THR-NB-101",
    area: "Portal authorization",
    statement:
      "If the external portal accepts an authenticated session but the API does not enforce resource-level authorization, one user context could receive a fictional profile record that belongs to another account.",
    property: "Confidentiality and integrity",
    evidence:
      "Architecture review shows the portal relies on API-NB-14 for final authorization; no independent portal-side assumption should replace the API control.",
    currentControls:
      "Identity Gateway authentication, API authorization policy, application logging",
    uncertainty:
      "The portfolio evidence does not include a production configuration; the model therefore records the control as a design requirement rather than claiming implementation proof.",
    response:
      "Keep authorization enforcement at the API, document resource ownership rules, log denied and allowed decisions, and require owner validation of the design.",
  },
  {
    id: "THR-NB-102",
    area: "Privileged administration",
    statement:
      "If administrative role membership becomes stale, an identity that no longer requires elevated access could retain the ability to change sensitive fictional configuration.",
    property: "Integrity and accountability",
    evidence:
      "The admin console crosses a higher-trust boundary and depends on role ownership plus approval records.",
    currentControls:
      "Restricted role, stronger authentication, approval workflow, administrative logging",
    uncertainty:
      "The review cadence is a governance assumption and must be confirmed by the fictional service owner.",
    response:
      "Maintain named role owners, scheduled access review, expiration for temporary grants, approval evidence, and review of privileged activity.",
  },
  {
    id: "THR-NB-103",
    area: "Service identity privilege",
    statement:
      "If worker identity SVC-NB-8 receives permissions beyond its processing purpose, an error or unintended service action could affect a broader set of fictional records than necessary.",
    property: "Integrity and least privilege",
    evidence:
      "The worker can update downstream records and therefore operates with more authority than a read-only service.",
    currentControls:
      "Dedicated service identity and scoped application role",
    uncertainty:
      "Exact permissions are intentionally not represented in this fictional student exercise.",
    response:
      "Define minimum required capabilities, assign a named owner, review grants when the workload changes, and preserve evidence of authorization.",
  },
  {
    id: "THR-NB-104",
    area: "Queue dependency",
    statement:
      "If the internal queue is unavailable or loses processing context, time-sensitive fictional updates could be delayed or processed inconsistently.",
    property: "Availability and integrity",
    evidence:
      "API-NB-14 depends on Q-NB-5 for asynchronous processing and the worker depends on the same queue.",
    currentControls:
      "Queue health monitoring, worker status monitoring, retry policy concept, recovery procedure",
    uncertainty:
      "The exercise does not model exact throughput or failure thresholds.",
    response:
      "Define service-level health criteria, preserve message context, monitor backlog condition, test recovery in an authorized synthetic environment, and document owner escalation.",
  },
  {
    id: "THR-NB-105",
    area: "Monitoring coverage",
    statement:
      "If authentication or authorization telemetry is delayed or incomplete, defenders may not have enough evidence to evaluate unusual activity or validate a recovery decision.",
    property: "Accountability and detection confidence",
    evidence:
      "MON-NB-3 receives data from identity, application, queue, and logging sources and is used for defensive review.",
    currentControls:
      "Centralized telemetry and source-health monitoring",
    uncertainty:
      "The model does not assume that every event source has equal freshness or coverage.",
    response:
      "Record required telemetry sources, monitor source health, identify evidence gaps explicitly, and avoid treating missing telemetry as proof that nothing occurred.",
  },
  {
    id: "THR-NB-106",
    area: "Federation ownership",
    statement:
      "If an external identity trust remains enabled after its business relationship changes, identities from that relationship could retain access beyond the intended lifecycle.",
    property: "Authenticity, authorization, and accountability",
    evidence:
      "IG-NB-4 depends on an approved federation configuration and maintained role mappings.",
    currentControls:
      "Federation approval, relationship owner, role mapping, access review",
    uncertainty:
      "The fictional model does not include a live partner or real federation metadata.",
    response:
      "Require named relationship ownership, lifecycle review, mapping validation, expiration or removal when the relationship ends, and evidence of the review.",
  },
  {
    id: "THR-NB-107",
    area: "Data-service trust boundary",
    statement:
      "If an application service reaches DS-NB-6 without the expected service identity or scope, protected fictional records could be exposed to an unintended workload context.",
    property: "Confidentiality and integrity",
    evidence:
      "The data service sits behind a trust boundary and is expected to accept only designated application and administrative identities.",
    currentControls:
      "Service identity, authorization policy, network segmentation concept, logging",
    uncertainty:
      "No real network path, address, or production policy is included in the exercise.",
    response:
      "Document approved service identities, preserve least privilege, separate normal and administrative access, and validate the architecture through fictional review evidence.",
  },
  {
    id: "THR-NB-108",
    area: "Recovery dependency",
    statement:
      "If backup or recovery evidence is assumed rather than verified, the team could overestimate its ability to restore an important fictional service after disruption.",
    property: "Availability and resilience",
    evidence:
      "DS-NB-6 and the application workflow depend on documented recovery capability.",
    currentControls:
      "Backup workflow, recovery ownership, service-health validation",
    uncertainty:
      "The student portfolio does not connect to any real backup or recovery system.",
    response:
      "Define recovery objectives conceptually, assign an owner, use safe synthetic recovery exercises, and retain evidence that the recovery process was reviewed.",
  },
];

const prioritizationFactors = [
  {
    factor: "Asset importance",
    question:
      "How important is the fictional service, data, identity, or decision to users and business operations?",
    caution:
      "Importance should be grounded in the scenario, not inferred from a dramatic technical label.",
  },
  {
    factor: "Potential impact",
    question:
      "What realistic confidentiality, integrity, availability, authenticity, accountability, safety, or operational effect could result?",
    caution:
      "Describe bounded consequences instead of assuming worst-case outcomes without evidence.",
  },
  {
    factor: "Exposure and reachability",
    question:
      "Which actors and contexts can legitimately reach the boundary or workflow?",
    caution:
      "Keep this architectural and conceptual; do not turn portfolio work into scanning or probing instructions.",
  },
  {
    factor: "Privilege",
    question:
      "How much authority does the identity, role, service, or workflow hold if something goes wrong?",
    caution:
      "Higher privilege increases the need for least privilege, ownership, review, and accountability.",
  },
  {
    factor: "Control strength",
    question:
      "Which preventive, detective, recovery, or governance controls already reduce the concern?",
    caution:
      "Do not count a control as effective merely because it appears in a diagram; distinguish design intent from validated evidence.",
  },
  {
    factor: "Dependency concentration",
    question:
      "Does one identity, service, queue, logging source, or external relationship support several critical functions?",
    caution:
      "Shared dependencies can create correlated impact even when individual components look well protected.",
  },
  {
    factor: "Evidence confidence",
    question:
      "How much of the concern is supported by supplied evidence versus assumption or missing information?",
    caution:
      "High uncertainty may call for better evidence, not automatically a higher or lower risk rating.",
  },
  {
    factor: "Recovery readiness",
    question:
      "Can the fictional organization detect, contain conceptually, restore service, and validate recovery if the concern becomes real?",
    caution:
      "Recovery planning is part of threat modeling because prevention is never the only defensive layer.",
  },
];

const portfolioWorkflow = [
  {
    phase: "Frame the system",
    detail:
      "State the purpose, scope, fictional organization, included services, excluded areas, audience, and security objectives before listing threats.",
    output:
      "A short scope statement plus the security diagram from A19.2 or a simplified derivative.",
  },
  {
    phase: "Identify assets and trust decisions",
    detail:
      "Name what matters, who or what interacts with it, where trust changes, and which privileges or dependencies deserve closer attention.",
    output:
      "Asset table, actor list, trust-boundary annotations, and key assumptions.",
  },
  {
    phase: "Develop bounded threat statements",
    detail:
      "Describe plausible adverse events in terms of asset, condition, security property, consequence, and defensive response.",
    output:
      "A curated threat register with clear evidence and uncertainty notes.",
  },
  {
    phase: "Review controls and gaps",
    detail:
      "Map each material concern to the controls that prevent, detect, limit, recover, or govern it. Note where control evidence is incomplete.",
    output:
      "Control mapping and gap notes without pretending design intent equals implementation proof.",
  },
  {
    phase: "Prioritize",
    detail:
      "Use impact, privilege, exposure, dependencies, control strength, evidence confidence, and recovery readiness to decide what deserves attention first.",
    output:
      "A defensible priority order with short rationale rather than unexplained colors or scores.",
  },
  {
    phase: "Recommend and assign ownership",
    detail:
      "Turn high-priority findings into specific defensive improvements with responsible roles, validation evidence, and review points.",
    output:
      "Owned recommendations linked back to threat IDs.",
  },
  {
    phase: "Review for publication safety",
    detail:
      "Remove or fictionalize anything that could expose real internal architecture, credentials, private records, security weaknesses, or confidential incident information.",
    output:
      "A publication-safe final model and a short revision note.",
  },
];

const revisionChecklist = [
  "The scope clearly identifies what the model includes and excludes.",
  "The diagram or architecture summary uses only fictional systems and does not expose real internal details.",
  "Assets, actors, trust boundaries, dependencies, and assumptions are visible.",
  "Every major threat statement names a protected asset and plausible defensive concern.",
  "The model separates design requirements, confirmed evidence, assumptions, and unknowns.",
  "Controls are described according to what they actually prevent, detect, limit, recover, or govern.",
  "Priority decisions include a short rationale based on impact, privilege, exposure, controls, dependencies, uncertainty, and recovery.",
  "Recommendations remain defensive, authorized, proportionate, owned, and verifiable.",
  "No section teaches exploitation, bypass, credential abuse, evasion, or real-system probing.",
  "A reviewer can trace each recommendation back to a threat ID or model element.",
  "The final artifact explains at least one limitation or evidence gap honestly.",
  "The publication copy contains no real credentials, private records, addresses, internal hostnames, production diagrams, or confidential security information.",
];

const quizQuestions = [
  {
    question:
      "What is the main purpose of a defensive threat model?",
    choices: [
      "To connect system design, assets, trust decisions, plausible adverse events, controls, and priorities before or alongside incidents",
      "To provide step-by-step exploitation instructions",
      "To replace every security control with one risk score",
      "To prove that a system is perfectly secure",
    ],
    answer: 0,
    explanation:
      "Threat modeling helps defenders reason about what matters, where trust changes, what could go wrong, and how the design reduces or responds to those concerns.",
  },
  {
    question:
      "Which statement best describes a trust boundary?",
    choices: [
      "A place where identity, authority, data handling, responsibility, or security assumptions change and should be re-evaluated",
      "Any visual line placed on a diagram for decoration",
      "A list of all software versions",
      "A guarantee that everything inside the boundary is safe",
    ],
    answer: 0,
    explanation:
      "A trust boundary marks a change in security context. Crossing it should trigger appropriate verification, authorization, validation, or monitoring decisions.",
  },
  {
    question:
      "Which threat statement is strongest for a portfolio?",
    choices: [
      "A bounded statement that identifies the asset, condition, security property, consequence, supporting evidence, uncertainty, and defensive response",
      "The system could be hacked somehow",
      "Everything connected to the internet is critical",
      "Add more security because security is important",
    ],
    answer: 0,
    explanation:
      "Strong threat statements are specific enough to support a defensive decision without claiming more than the model and evidence justify.",
  },
  {
    question:
      "Why should a threat model distinguish a design requirement from validated implementation evidence?",
    choices: [
      "Because showing that a control should exist is not the same as proving that a real implementation is configured and operating correctly",
      "Because requirements are always more important than evidence",
      "Because implementation evidence should never be reviewed",
      "Because diagrams automatically prove controls are effective",
    ],
    answer: 0,
    explanation:
      "A portfolio model can describe required controls, but it should not pretend to have verified a production implementation when it has only synthetic design evidence.",
  },
  {
    question:
      "Which factor is most appropriate when prioritizing fictional threat-model findings?",
    choices: [
      "A combination of asset importance, realistic impact, privilege, exposure, control strength, dependencies, uncertainty, and recovery readiness",
      "Whichever threat has the scariest name",
      "Only the number of components in the diagram",
      "Only whether an alert color is red",
    ],
    answer: 0,
    explanation:
      "Professional prioritization combines multiple contextual factors rather than relying on one dramatic label.",
  },
  {
    question:
      "What should a portfolio threat model do with an important unknown?",
    choices: [
      "Record it explicitly, explain how it affects confidence, and identify what safe evidence or owner review would resolve it",
      "Hide it so the model looks complete",
      "Assume the worst case is true",
      "Replace it with a real credential or private production screenshot",
    ],
    answer: 0,
    explanation:
      "Visible uncertainty makes the model more defensible because readers can distinguish known facts from assumptions and evidence gaps.",
  },
  {
    question:
      "Which publication choice is safest for a student threat-model portfolio?",
    choices: [
      "Use fictional architecture, synthetic records, abstracted controls, and no real internal identifiers or confidential security details",
      "Publish a real production network diagram to prove technical skill",
      "Include real credentials but redact only part of each secret",
      "List known weaknesses in a real school or company system",
    ],
    answer: 0,
    explanation:
      "A strong student portfolio demonstrates reasoning with safe synthetic material rather than exposing or investigating real systems.",
  },
];

const takeaways = [
  "Threat modeling connects architecture, assets, trust decisions, plausible adverse events, controls, priorities, and ownership.",
  "A threat model is not a vulnerability scan, exploit guide, incident report, or generic list of bad things that might happen.",
  "Trust boundaries matter because identity, authority, data handling, responsibility, or assumptions change across them.",
  "Strong threat statements are bounded: they identify the asset, condition, security property, realistic consequence, evidence, uncertainty, and defensive response.",
  "Controls should be described honestly according to whether they prevent, detect, limit, recover, validate, or govern.",
  "Priority should reflect impact, privilege, exposure, dependencies, control strength, evidence confidence, and recovery readiness rather than dramatic labels.",
  "Assumptions and unknowns belong in the final model because visible uncertainty supports better review and safer decisions.",
  "Portfolio threat models should use fictional architecture and synthetic evidence only; real credentials, internal diagrams, private records, and confidential weaknesses do not belong in student work.",
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

export default function ThreatModelProjectPage() {
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
              A19.4
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cybersecurity Portfolio Projects
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A19.4
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Threat Model Project
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A strong threat model turns a security diagram into a structured
            defensive argument. It identifies what matters, where trust changes,
            what could plausibly go wrong, which controls reduce the concern, and
            what deserves attention first.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson teaches threat modeling as safe design review. You will use
            only fictional Northbridge architecture and synthetic evidence. The work
            does not involve probing, exploiting, scanning, testing, or changing any
            real system.
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
          lessonTitle="Threat Model Project"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that this lesson uses fictional architecture and synthetic evidence only.",
            "I can read a basic security diagram and identify components, flows, and trust boundaries.",
            "I understand that a plausible threat is not proof that an incident has occurred.",
            "I am ready to focus on defensive design, control quality, ownership, and evidence rather than offensive techniques.",
          ]}
        />

        <Section eyebrow="Professional Hook" title="A Diagram Shows the System; a Threat Model Challenges Its Assumptions">
          <p className="leading-8">
            Security diagrams are useful because they show where components,
            identities, data, and responsibilities connect. But a diagram can still
            leave an important question unanswered: what assumptions are we making
            about those connections? A threat model asks that question deliberately.
          </p>

          <p className="mt-4 leading-8">
            When a user request crosses from an external portal into an authenticated
            application, the system assumes identity and authorization controls will
            behave correctly. When a worker service updates protected records, the
            design assumes the service identity has only the required permissions.
            When monitoring supports incident response, the team assumes telemetry
            will arrive with enough coverage and freshness to support a decision.
            Threat modeling turns these assumptions into reviewable security work.
          </p>

          <p className="mt-4 leading-8">
            The goal is not to imagine the most dramatic failure possible. The goal
            is to identify credible defensive concerns, explain why they matter,
            understand which controls address them, record uncertainty, and improve
            the design before a real problem occurs.
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A19.4">
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

        <Section eyebrow="Core Teaching" title="What Threat Modeling Actually Does">
          <p className="leading-8">
            Threat modeling is a structured way to examine a system from a defensive
            point of view. It starts with the system's purpose and important assets,
            then examines actors, trust boundaries, flows, dependencies, controls,
            and assumptions. From there, the defender writes bounded statements
            about what could go wrong and how the design should reduce the concern.
          </p>

          <p className="mt-4 leading-8">
            A threat model is not the same thing as a vulnerability assessment. A
            vulnerability assessment looks for specific weaknesses in an
            implementation. A threat model can begin before implementation exists
            because it reasons from architecture, trust, privilege, data flow, and
            business impact. It is also not an incident report, because the model
            describes plausible future concerns rather than reconstructing an event
            that already happened.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {threatModelPurpose.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Model Vocabulary" title="Eight Elements That Make the Model Understandable">
          <p className="leading-8">
            A portfolio threat model should be readable by someone who did not build
            the original diagram. These elements give the reader enough context to
            understand what is protected, where trust changes, which dependencies
            matter, and why the recommendations exist.
          </p>

          <div className="mt-6 grid gap-5">
            {modelElements.map((item, index) => (
              <article
                key={item.element}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white">
                      {item.element}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">{item.meaning}</p>
                    <p className="mt-3 rounded-xl border border-purple-400/20 bg-purple-400/10 p-4 text-sm leading-7 text-purple-100">
                      <span className="font-black">Review question:</span>{" "}
                      {item.reviewQuestion}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Security Properties" title="Describe What the System Is Trying to Preserve">
          <p className="leading-8">
            Threat statements become clearer when they identify the security
            property that could be weakened. This prevents the model from becoming a
            generic list of problems and helps connect the concern to the right kind
            of control.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {securityProperties.map((item) => (
              <article
                key={item.property}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="text-lg font-black text-emerald-50">
                  {item.property}
                </h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  {item.focus}
                </p>
                <p className="mt-4 rounded-xl border border-emerald-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Portfolio use:</span>{" "}
                  {item.portfolioUse}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Threat Statements" title="Write Concerns That Can Support a Defensive Decision">
          <p className="leading-8">
            Weak threat statements are difficult to act on because they do not say
            what is protected, why the concern is plausible, or what kind of
            defensive response is appropriate. A stronger statement connects the
            concern to architecture and evidence.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {threatStatementFormula.map((item) => (
              <article
                key={item.part}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.part}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black">A useful pattern</p>
            <p className="mt-3 leading-7">
              If <span className="font-semibold">a defined condition at a trust boundary or dependency</span>{" "}
              occurs, then <span className="font-semibold">a protected asset</span>{" "}
              could experience <span className="font-semibold">a bounded security consequence</span>{" "}
              because <span className="font-semibold">a control or assumption may be insufficient</span>.
              The defensive response should identify the control, owner, validation,
              or recovery improvement that reduces the concern.
            </p>
          </div>
        </Section>

        <Section eyebrow="Writing Quality" title="From Vague Security Language to Defensible Model Statements">
          <div className="grid gap-5">
            {weakVsStrong.map((item) => (
              <article
                key={item.weak}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak
                    </p>
                    <p className="mt-2 leading-7 text-red-50">{item.weak}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Stronger
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.strong}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  <span className="font-black text-white">Why it improves:</span>{" "}
                  {item.lesson}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Threat Model Review Board"
          subtitle="Synthetic portfolio dashboard showing the status of a fictional design review."
          metrics={[
            {
              label: "Model elements",
              value: "8",
              note: "Assets, actors, trust boundaries, entry points, flows, dependencies, controls, and assumptions",
            },
            {
              label: "Threat statements",
              value: "8",
              note: "Curated concerns linked to fictional architecture evidence",
            },
            {
              label: "Priority items",
              value: "3",
              note: "Admin privilege, API authorization, and monitoring coverage need owner review first",
            },
            {
              label: "Open assumptions",
              value: "4",
              note: "Review cadence, telemetry freshness, recovery evidence, and role ownership require confirmation",
            },
          ]}
        />

        <FakeAlertCard
          title="Threat Model Review Finding"
          severity="Medium"
          time="Portfolio review checkpoint"
          source="Synthetic Architecture Governance Queue"
          details="The fictional admin console has a clearly defined restricted zone, but the model records role-review cadence as an assumption rather than confirmed evidence."
          recommendation="Keep the assumption visible, assign a fictional governance owner, and require review evidence before claiming the control is fully validated."
        />

        <FakeLogPanel
          title="Synthetic Threat Model Evidence Notes"
          logs={[
            "[TM-01] Portal -> Identity Gateway crosses from external context to authenticated identity context.",
            "[TM-02] Identity Gateway -> API carries user identity and role context; API remains responsible for resource authorization.",
            "[TM-03] API -> Queue changes from synchronous request context to asynchronous processing context.",
            "[TM-04] Queue -> Worker delegates a task to service identity SVC-NB-8.",
            "[TM-05] Worker -> Data Service crosses into protected data context with write capability.",
            "[TM-06] Admin Console -> Configuration service uses restricted role and approval evidence.",
            "[TM-07] Monitoring receives telemetry from identity, application, queue, and logging sources.",
            "[TM-08] Recovery workflow is documented as required but validation evidence is not part of this student model.",
          ]}
        />

        <Section eyebrow="Fictional Architecture" title="Northbridge System Elements for the Portfolio Model">
          <p className="leading-8">
            The following records extend the fictional security diagram from A19.2.
            They are intentionally abstract. There are no real addresses,
            credentials, hostnames, production routes, or exploitable configuration
            details. The goal is to reason about trust, privilege, dependencies, and
            controls.
          </p>

          <div className="mt-6 grid gap-5">
            {northbridgeArchitecture.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <h3 className="font-black text-blue-50">{item.component}</h3>
                  <span className="text-sm text-blue-200">{item.zone}</span>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-300/20 bg-slate-950/40 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Asset
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.asset}
                    </p>
                  </div>
                  <div className="rounded-xl border border-blue-300/20 bg-slate-950/40 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Dependency
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.dependency}
                    </p>
                  </div>
                  <div className="rounded-xl border border-purple-300/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Trust Boundary
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.boundary}
                    </p>
                  </div>
                  <div className="rounded-xl border border-yellow-300/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Assumption
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.assumption}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — Authorization Boundary"
          question="The security diagram shows an authenticated portal session reaching API-NB-14. Which conclusion is strongest?"
          evidence={[
            "The Identity Gateway authenticates the fictional user before the request reaches the application API.",
            "The architecture notes state that API-NB-14 remains responsible for resource-level authorization.",
            "The student model contains no production configuration proving how the live API is implemented.",
            "Protected profile records are treated as an asset requiring confidentiality and integrity.",
          ]}
          options={[
            "The model should record API authorization as a critical design control and avoid claiming that implementation has been verified",
            "Authentication proves that every authenticated user may access every profile record",
            "The model should publish a real API configuration to prove the control exists",
            "The API should be treated as safe because it is inside the application zone",
          ]}
          bestAnswer={0}
          explanation="Authentication establishes identity, but authorization still determines which resource an identity may access. The supplied architecture supports a design requirement, not production proof."
        />

        <Section eyebrow="Threat Register" title="Eight Bounded Threat Statements for the Northbridge Model">
          <p className="leading-8">
            Notice that each record avoids offensive detail. The statements focus on
            an asset, a trust or dependency condition, a realistic consequence,
            current controls, uncertainty, and a defensive response. That is enough
            to demonstrate professional threat-model reasoning in a school
            portfolio.
          </p>

          <div className="mt-6 grid gap-5">
            {threatRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.area}</h3>
                  <span className="text-sm text-slate-400">{item.property}</span>
                </div>

                <p className="mt-4 leading-7 text-slate-200">{item.statement}</p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence / reason
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.evidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Current controls
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.currentControls}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Uncertainty
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.uncertainty}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Defensive response
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.response}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — Monitoring as a Dependency"
          question="MON-NB-3 is expected to receive identity, application, queue, and logging telemetry. What is the most defensible threat-model conclusion?"
          evidence={[
            "Monitoring evidence is used to support detection, investigation, accountability, and recovery validation.",
            "Different telemetry sources may have different freshness and coverage.",
            "The model does not assume that missing telemetry proves no event occurred.",
            "The portfolio exercise contains only synthetic source-health notes.",
          ]}
          options={[
            "Monitoring coverage and source health are defensive dependencies; the model should record expected sources, gaps, and fallback review without treating logs as perfect proof",
            "If one source is missing, defenders should conclude there was definitely an attack",
            "If no alert appears, the system is proven secure",
            "The student should connect to a real SIEM to gather stronger evidence",
          ]}
          bestAnswer={0}
          explanation="Threat models should capture the defensive value and limitations of observability. Missing or delayed telemetry changes confidence; it does not prove either safety or compromise."
        />

        <Section eyebrow="Prioritization" title="Decide What Deserves Attention Without Turning the Model into a Fear List">
          <p className="leading-8">
            A mature threat model is selective. Teams rarely have unlimited time,
            and not every concern deserves the same response. Prioritization should
            explain why one issue matters more than another using context that a
            reviewer can understand.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {prioritizationFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.factor}</h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  {item.question}
                </p>
                <p className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                  <span className="font-black">Caution:</span> {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Control Reasoning" title="Describe Controls by Their Real Defensive Function">
          <p className="leading-8">
            A threat model becomes misleading when every control is described as
            though it prevents every problem. Different controls serve different
            roles. Some reduce the chance of an adverse event, some limit its scope,
            some improve detection, some support recovery, and some ensure that
            decisions remain owned and reviewable.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Prevent",
                detail:
                  "Authentication, authorization, validation, secure defaults, and segmentation can reduce the chance that an unapproved action reaches a protected asset.",
              },
              {
                title: "Limit",
                detail:
                  "Least privilege, separation of duties, narrow service roles, segmentation, quotas, and scoped access can reduce how much one failure or misuse can affect.",
              },
              {
                title: "Detect",
                detail:
                  "Logging, alerting, anomaly review, service-health monitoring, and source-health checks improve awareness when conditions depart from expectations.",
              },
              {
                title: "Recover",
                detail:
                  "Backups, failover, rollback planning, recovery procedures, owner communication, and validation criteria help restore trusted operation.",
              },
              {
                title: "Govern",
                detail:
                  "Access reviews, approvals, ownership, exception records, due dates, and risk acceptance keep decisions accountable over time.",
              },
              {
                title: "Validate",
                detail:
                  "Evidence review, testing in authorized synthetic environments, monitoring, and post-change checks help confirm that a control or recovery decision works as intended.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Evidence Discipline" title="What the Model Knows, Assumes, and Still Needs to Verify">
          <p className="leading-8">
            Strong portfolio work does not pretend to have evidence that it does not
            have. Threat models often mix architecture facts, design requirements,
            assumptions, and future validation needs. Those categories should remain
            visible so the reader understands the confidence level of each finding.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-900 text-cyan-100">
                <tr>
                  <th className="px-4 py-3 font-black">Category</th>
                  <th className="px-4 py-3 font-black">Meaning</th>
                  <th className="px-4 py-3 font-black">Portfolio example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950 text-slate-300">
                <tr>
                  <td className="px-4 py-4 font-black text-white">Architecture fact</td>
                  <td className="px-4 py-4">
                    A relationship explicitly shown in the supplied fictional design.
                  </td>
                  <td className="px-4 py-4">
                    API-NB-14 depends on IG-NB-4 for identity context.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-black text-white">Design requirement</td>
                  <td className="px-4 py-4">
                    A control or property the design should provide.
                  </td>
                  <td className="px-4 py-4">
                    Resource-level authorization should be enforced by API-NB-14.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-black text-white">Assumption</td>
                  <td className="px-4 py-4">
                    A condition believed to be true but not fully proven in the supplied evidence.
                  </td>
                  <td className="px-4 py-4">
                    Privileged role membership is reviewed on an appropriate schedule.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-black text-white">Unknown</td>
                  <td className="px-4 py-4">
                    A missing fact that affects confidence or priority.
                  </td>
                  <td className="px-4 py-4">
                    Exact telemetry freshness for every fictional source is not specified.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-black text-white">Validation need</td>
                  <td className="px-4 py-4">
                    Evidence an authorized owner would need before claiming a control is effective.
                  </td>
                  <td className="px-4 py-4">
                    Review evidence should confirm privileged-role ownership and lifecycle.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section eyebrow="Portfolio Workflow" title="Build the Threat Model as a Coherent Project, Not a Collection of Random Threats">
          <div className="grid gap-5">
            {portfolioWorkflow.map((item, index) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-blue-50">
                      {item.phase}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-blue-100">
                      {item.detail}
                    </p>
                    <p className="mt-3 rounded-xl border border-blue-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-blue-50">
                      <span className="font-black">Portfolio output:</span>{" "}
                      {item.output}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Safe Fictional Lab" title="Northbridge Threat Model Review">
          <p className="leading-8">
            Use the supplied architecture and threat records as if you were reviewing
            a design document. Do not test anything. Your job is to decide which
            statements are well-supported, which assumptions need owner confirmation,
            which controls are missing or under-specified, and which findings deserve
            the highest defensive priority.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Task 1 — Scope",
                detail:
                  "Write a six-to-eight sentence scope statement naming the fictional service, users, assets, zones, dependencies, and explicit exclusions.",
              },
              {
                title: "Task 2 — Boundaries",
                detail:
                  "Select four trust boundaries from the model and explain what should be re-verified when identity, authority, data, or responsibility crosses each one.",
              },
              {
                title: "Task 3 — Threat statements",
                detail:
                  "Choose five THR-NB records and rewrite each in your own words while preserving the asset, condition, consequence, evidence, uncertainty, and defensive response.",
              },
              {
                title: "Task 4 — Control map",
                detail:
                  "Classify the controls for those five records as prevent, limit, detect, recover, validate, or govern. A control may serve more than one role if you explain why.",
              },
              {
                title: "Task 5 — Priority",
                detail:
                  "Choose the top three concerns and justify the order using impact, privilege, exposure, dependencies, control strength, uncertainty, and recovery readiness.",
              },
              {
                title: "Task 6 — Ownership",
                detail:
                  "Assign a fictional accountable role to each priority recommendation and define the evidence that would show the review action is complete.",
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
          title="Scenario Decision 1 — Privileged Role Assumption"
          scenario="The fictional admin console is restricted and uses stronger authentication, but the threat model cannot confirm how often privileged membership is reviewed."
          choices={[
            {
              label: "Choice A",
              response:
                "Record the review cadence as an assumption, keep privileged access as a priority governance concern, assign a fictional owner, and require review evidence before closing the finding.",
              outcome:
                "Best defensive choice. It preserves uncertainty and turns the gap into an owned validation need without claiming a real weakness has been proven.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume access is safe because the console is in a restricted zone.",
              outcome:
                "Risky. Network or zone placement does not replace lifecycle governance for privileged identities.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Test a real administrative account to see what access it has.",
              outcome:
                "Unsafe. This lesson does not authorize access testing or investigation of real accounts.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Missing Telemetry"
          scenario="The fictional model expects identity and API logs to support detection, but one synthetic review note says source freshness is not yet documented."
          choices={[
            {
              label: "Choice A",
              response:
                "Record telemetry freshness as an evidence gap, explain how it affects detection confidence, and recommend source-health ownership plus validation criteria.",
              outcome:
                "Best defensive choice. It treats observability as a dependency and keeps the uncertainty visible.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Conclude that an incident definitely occurred because a source might be delayed.",
              outcome:
                "Risky. Missing or delayed evidence reduces confidence but does not prove an incident.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Connect to a real monitoring platform and collect logs without permission.",
              outcome:
                "Unsafe. Portfolio work must remain fictional, authorized, and non-operational.",
              tone: "risk",
            },
          ]}
        />

        <Section eyebrow="Advanced Challenge" title="Defend the Model to Three Different Reviewers">
          <p className="leading-8">
            A good threat model should survive questions from people with different
            priorities. Prepare a short explanation for each fictional reviewer
            below. Keep the technical facts consistent while changing the emphasis
            to fit the audience.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Security Architect",
                detail:
                  "Explain the most important trust boundaries, privilege decisions, control assumptions, and architecture changes. Be ready to show which threat IDs support each recommendation.",
              },
              {
                title: "Service Owner",
                detail:
                  "Explain business impact, dependencies, ownership gaps, recovery needs, and which changes should be prioritized without overwhelming the reader with every technical detail.",
              },
              {
                title: "Portfolio Reviewer",
                detail:
                  "Explain how the artifact demonstrates structured reasoning, evidence discipline, ethical boundaries, communication, revision, and clear separation between design requirements and validated evidence.",
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
          title="Threat Model Project Quality Checklist"
          items={revisionChecklist}
        />

        <Section eyebrow="Assessment" title="A19.4 Knowledge Check">
          <p className="leading-8">
            Answer all seven questions before reviewing the explanations. Focus on
            purpose, trust boundaries, evidence discipline, bounded threat
            statements, prioritization, controls, uncertainty, and publication
            safety.
          </p>

          <div className="mt-6">
            <MiniQuiz
              title="A19.4 Mini Quiz: Threat Model Project"
              questions={quizQuestions}
            />
          </div>
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Threat Model Project"
          prompt="Create a polished fictional Northbridge Threat Model Project. Include scope, security objectives, a simplified system diagram or architecture summary, assets, actors, trust boundaries, dependencies, assumptions, at least six bounded threat statements, control mapping, a top-three priority section with rationale, defensive recommendations with owners and validation evidence, key unknowns, and a short revision note."
          tips={[
            "Use only fictional Northbridge systems, identities, records, roles, diagrams, and evidence.",
            "Do not include exploitation procedures, testing commands, scanning steps, credential use, or any real-system instructions.",
            "Make each threat statement specific enough to support a decision but bounded enough to avoid pretending that a hypothetical concern is a confirmed incident.",
            "Distinguish design requirements from evidence that would be needed to validate implementation.",
            "Show at least one assumption or unknown and explain how it affects confidence.",
            "End with a publication-safety check confirming that the artifact contains no real internal architecture, private records, credentials, or confidential weaknesses.",
          ]}
        />

        <Section eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A19.5?">
          <p className="leading-8">
            A19.5 moves into the Risk Assessment Project. Before continuing, make
            sure you can explain how threat modeling identifies and organizes
            defensive concerns before risk assessment turns those concerns into
            business-oriented decisions about likelihood, impact, treatment,
            ownership, and residual risk.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain how a threat model differs from a security diagram, vulnerability list, incident report, and risk register.",
              "I can identify assets, actors, trust boundaries, dependencies, controls, assumptions, and unknowns in a fictional design.",
              "I can write a bounded threat statement without turning it into offensive instructions or an unsupported incident claim.",
              "I can prioritize concerns using context such as impact, privilege, exposure, controls, dependencies, uncertainty, and recovery.",
              "I can explain why a portfolio artifact should distinguish design intent from validated implementation evidence.",
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

        <Section eyebrow="Portfolio Build Guide" title="How to Make the Threat Model Look Professional Without Making It Overcomplicated">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Start with one clear system story",
                detail:
                  "A reviewer should understand the fictional service, who uses it, what it protects, and why it matters before reading individual threats.",
              },
              {
                title: "Reuse the A19.2 diagram intelligently",
                detail:
                  "You do not need a brand-new architecture. Add trust boundaries, assets, assumptions, and threat IDs to a simplified version of the existing fictional diagram.",
              },
              {
                title: "Curate instead of listing everything",
                detail:
                  "A smaller set of well-reasoned threats is more professional than dozens of vague possibilities. Choose concerns that teach something about trust, privilege, dependencies, or resilience.",
              },
              {
                title: "Use stable threat IDs",
                detail:
                  "IDs make it easier to connect the diagram, threat register, priority decisions, recommendations, and revision notes without repeating full paragraphs everywhere.",
              },
              {
                title: "Make uncertainty visible",
                detail:
                  "Use labels such as confirmed architecture fact, design requirement, assumption, unknown, or validation need so the reader understands what the model can and cannot prove.",
              },
              {
                title: "Explain priority in words",
                detail:
                  "A color or score can help scanning, but include a short reason tied to impact, privilege, exposure, controls, dependency concentration, evidence confidence, or recovery.",
              },
              {
                title: "Show ownership and validation",
                detail:
                  "A recommendation should identify who is accountable and what evidence would demonstrate that the review action has been completed.",
              },
              {
                title: "Protect real security information",
                detail:
                  "A professional student portfolio uses fictional architecture and safe abstraction. Real internal diagrams, private identifiers, credentials, or unpatched weaknesses should never be used as proof of skill.",
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
            Keep the threat-model project fictional, architectural, and defensive
          </h2>
          <p className="mt-3 leading-7">
            Do not scan, probe, enumerate, exploit, fuzz, guess credentials, test
            access, bypass controls, collect private data, change configurations, or
            investigate real systems for this lesson. Do not publish real internal
            diagrams, credentials, private records, security weaknesses, or
            confidential architecture details. Use only the synthetic Northbridge
            systems and evidence supplied in the curriculum. The purpose is to
            practice architecture reasoning, trust analysis, control design,
            prioritization, governance, and professional portfolio communication
            safely.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A19.4 Threat Model Project Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have the structure for a portfolio-ready threat model that
            connects architecture, assets, trust boundaries, assumptions, controls,
            priorities, ownership, and safe publication. Next, A19.5 converts this
            kind of security concern into a formal Risk Assessment Project.
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