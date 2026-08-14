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
const modulePath = `${trackPath}/digital-forensics-concepts`;
const previousLesson = `${modulePath}/ethical-limits-in-investigations`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate fictional scope, authorization, evidence integrity, chronology, endpoint, memory/storage, browser/account, correlation, reporting, and ethics concepts into one coherent forensic reasoning workflow.",
  "Build a fictional evidence register that preserves evidence identity, source owner, source health, provenance, time type, transformation, privacy, availability, integrity state, and non-proof limitations.",
  "Develop a defensible fictional chronology and correlation model that separates event order, evidence availability, account or device association, person attribution, causation, intent, and impact.",
  "Create a professional fictional forensic report package with evidence-linked findings, confidence, limitations, alternatives, Unknowns, reviewer comments, versioning, corrections, distribution, retention, and reopen criteria.",
  "Demonstrate ethical restraint by recognizing fictional stop conditions, unrelated findings, third-party data, scope changes, conflicts, privacy limits, and cases where the strongest professional answer is Unknown or no further investigation.",
];

const moduleSkills = [
  {
    lesson: "A8.1",
    skill: "Scope, authority, and forensic purpose",
    capstoneUse:
      "Define exactly what the fictional investigation may answer, which systems and evidence categories are included, and what remains excluded.",
  },
  {
    lesson: "A8.2",
    skill: "Evidence integrity and chain of custody",
    capstoneUse:
      "Preserve evidence identity, provenance, ownership, transformations, handoffs, versioning, and decision traceability.",
  },
  {
    lesson: "A8.3",
    skill: "Timeline analysis",
    capstoneUse:
      "Separate event, receipt, processing, review, and decision times while preserving source health and uncertainty.",
  },
  {
    lesson: "A8.4",
    skill: "Endpoint artifact concepts",
    capstoneUse:
      "Interpret supplied endpoint evidence at the device, account, session, application, process, file, configuration, and update level without over-attributing a person.",
  },
  {
    lesson: "A8.5",
    skill: "Memory and storage evidence concepts",
    capstoneUse:
      "Reason about temporary, persistent, synchronized, backed-up, archived, expired, and unavailable evidence states.",
  },
  {
    lesson: "A8.6",
    skill: "Browser and account activity concepts",
    capstoneUse:
      "Separate authentication, session, browser context, notification, synchronization, recovery, and person-level attribution.",
  },
  {
    lesson: "A8.7",
    skill: "Log correlation",
    capstoneUse:
      "Connect fictional identity, endpoint, application, service, supplier, and audit records without double-counting or forcing causal stories.",
  },
  {
    lesson: "A8.8",
    skill: "Forensic reporting",
    capstoneUse:
      "Convert evidence and reasoning into a professional report with confidence, limitations, alternatives, review, corrections, and audience-specific summaries.",
  },
  {
    lesson: "A8.9",
    skill: "Ethical limits",
    capstoneUse:
      "Apply purpose limitation, necessity, proportionality, minimization, privacy, conflicts, stop conditions, retention, and disclosure boundaries.",
  },
];

const caseFacts = [
  {
    id: "CF-01",
    statement:
      "Fictional organization Northbridge uses Service S for a support workflow involving shared Endpoint D-17 and Account A.",
    status: "Context",
  },
  {
    id: "CF-02",
    statement:
      "A temporary support role for Account A became effective at 13:42 and was scheduled to expire at 15:00.",
    status: "Supported",
  },
  {
    id: "CF-03",
    statement:
      "A fictional authentication event associates Account A with Session S at 14:01.",
    status: "Supported",
  },
  {
    id: "CF-04",
    statement:
      "A fictional workflow event occurs at 14:04 while Session S is represented as active.",
    status: "Supported with source limit",
  },
  {
    id: "CF-05",
    statement:
      "The application source is Degraded from 14:02 through 14:18.",
    status: "Supported",
  },
  {
    id: "CF-06",
    statement:
      "A supplier note received later reports a dependency-state change at 13:58, but its original creation-time provenance remains Conditional.",
    status: "Conditional",
  },
  {
    id: "CF-07",
    statement:
      "Endpoint D-17 is an approved shared workstation, so physical-person attribution is not established by device association alone.",
    status: "Supported limitation",
  },
  {
    id: "CF-08",
    statement:
      "A role-change notification was generated before Session S, but no acknowledgement record establishes that a person saw or accepted it.",
    status: "Supported with awareness Unknown",
  },
];

const evidenceRegister = [
  {
    id: "EV-01",
    category: "Identity approval",
    source: "Fictional identity governance record",
    owner: "Identity owner",
    sourceHealth: "Healthy",
    time: "13:42 event time",
    provenance: "Direct supplied record",
    integrity: "Verified within fictional exercise",
    supports:
      "Temporary support role became effective for Account A.",
    limits:
      "Does not prove the account was used or that a specific person acted.",
  },
  {
    id: "EV-02",
    category: "Authentication",
    source: "Fictional identity authentication record",
    owner: "Identity owner",
    sourceHealth: "Healthy",
    time: "14:01 event time",
    provenance: "Direct supplied record",
    integrity: "Verified within fictional exercise",
    supports:
      "Account A successfully entered Session S.",
    limits:
      "Does not independently establish the physical person.",
  },
  {
    id: "EV-03",
    category: "Endpoint session",
    source: "Fictional endpoint session record",
    owner: "Endpoint owner",
    sourceHealth: "Conditional",
    time: "14:01–14:19 interval",
    provenance: "Supplied session summary",
    integrity: "Conditional due to summary representation",
    supports:
      "Session S was represented on shared Endpoint D-17.",
    limits:
      "Does not prove continuous physical presence or manual activity.",
  },
  {
    id: "EV-04",
    category: "Application workflow",
    source: "Fictional application record",
    owner: "Application owner",
    sourceHealth: "Degraded",
    time: "14:04 event time",
    provenance: "Supplied application event",
    integrity: "Usable with source-health limitation",
    supports:
      "Workflow W recorded one unusual state transition.",
    limits:
      "Source degradation limits completeness and does not prove cause.",
  },
  {
    id: "EV-05",
    category: "Source health",
    source: "Fictional monitoring quality record",
    owner: "Application owner",
    sourceHealth: "Healthy",
    time: "14:02–14:18 interval",
    provenance: "Direct supplied health record",
    integrity: "Verified within fictional exercise",
    supports:
      "The application source was Degraded during the central review period.",
    limits:
      "Does not identify which unseen events, if any, occurred.",
  },
  {
    id: "EV-06",
    category: "Supplier dependency",
    source: "Fictional supplier note",
    owner: "Supplier owner",
    sourceHealth: "Conditional",
    time: "13:58 reported event / 14:39 receipt",
    provenance: "Forwarded note; original creation-time provenance incomplete",
    integrity: "Conditional",
    supports:
      "The note reports an earlier dependency-state change.",
    limits:
      "Does not prove supplier causation, fault, or exact creation time.",
  },
  {
    id: "EV-07",
    category: "Notification",
    source: "Fictional account notification record",
    owner: "Identity owner",
    sourceHealth: "Healthy",
    time: "13:46 event time",
    provenance: "Direct supplied notification record",
    integrity: "Verified within fictional exercise",
    supports:
      "A role-change notification was generated before the session.",
    limits:
      "Does not establish acknowledgement, awareness, consent, or action.",
  },
  {
    id: "EV-08",
    category: "Endpoint inventory",
    source: "Fictional asset record",
    owner: "Endpoint owner",
    sourceHealth: "Healthy",
    time: "Current case context",
    provenance: "Direct supplied asset record",
    integrity: "Verified within fictional exercise",
    supports:
      "D-17 is an approved shared workstation.",
    limits:
      "Does not identify which approved user physically controlled the device.",
  },
  {
    id: "EV-09",
    category: "Browser context",
    source: "Fictional browser navigation summary",
    owner: "Browser/application owner",
    sourceHealth: "Conditional",
    time: "14:03–14:06 interval",
    provenance: "Transformed summary",
    integrity: "Conditional due to transformation",
    supports:
      "The Support Console and Workflow Review page were represented in browser context.",
    limits:
      "Does not prove person-level navigation, intent, attention, or causation.",
  },
  {
    id: "EV-10",
    category: "Backup state",
    source: "Fictional backup summary",
    owner: "Storage owner",
    sourceHealth: "Healthy",
    time: "13:30 version time",
    provenance: "Supplied retained-state summary",
    integrity: "Verified for represented version",
    supports:
      "Application Q state can be described as of 13:30.",
    limits:
      "Does not represent changes after the backup point.",
  },
];

const timeline = [
  {
    time: "13:30",
    type: "Version time",
    evidence: "EV-10",
    event:
      "Fictional backup represents Application Q state.",
    confidence: "High",
    limit:
      "Does not cover later changes.",
  },
  {
    time: "13:42",
    type: "Event time",
    evidence: "EV-01",
    event:
      "Temporary support role becomes effective for Account A.",
    confidence: "High",
    limit:
      "Role state does not prove later account use.",
  },
  {
    time: "13:46",
    type: "Event time",
    evidence: "EV-07",
    event:
      "Role-change notification is generated.",
    confidence: "High",
    limit:
      "Acknowledgement and awareness remain Unknown.",
  },
  {
    time: "13:58",
    type: "Reported event time",
    evidence: "EV-06",
    event:
      "Supplier note reports dependency-state change.",
    confidence: "Conditional",
    limit:
      "Original creation-time provenance incomplete.",
  },
  {
    time: "14:01",
    type: "Event time",
    evidence: "EV-02 / EV-03",
    event:
      "Account A authenticates and Session S begins on shared D-17.",
    confidence: "High for account/session association",
    limit:
      "Physical-person attribution unresolved.",
  },
  {
    time: "14:02–14:18",
    type: "Source-health interval",
    evidence: "EV-05",
    event:
      "Application source operates in a Degraded state.",
    confidence: "High",
    limit:
      "Missing application records cannot support strong absence claims.",
  },
  {
    time: "14:03–14:06",
    type: "Event interval",
    evidence: "EV-09",
    event:
      "Support Console and Workflow Review are represented in browser context.",
    confidence: "Moderate",
    limit:
      "Manual navigation and intent not established.",
  },
  {
    time: "14:04",
    type: "Event time",
    evidence: "EV-04",
    event:
      "Workflow W records an unusual state transition.",
    confidence: "Moderate",
    limit:
      "Application-source degradation and causation limit apply.",
  },
  {
    time: "14:19",
    type: "Session end",
    evidence: "EV-03",
    event:
      "Session S is represented as ended.",
    confidence: "Moderate",
    limit:
      "Does not explain every action within the interval.",
  },
  {
    time: "14:39",
    type: "Receipt time",
    evidence: "EV-06",
    event:
      "Supplier note reaches the investigation.",
    confidence: "High about receipt",
    limit:
      "Receipt time differs from reported supplier event time.",
  },
];

const correlationFindings = [
  {
    id: "FN-01",
    question:
      "Was Account A associated with Session S on shared Endpoint D-17?",
    evidence: "EV-02 + EV-03 + EV-08",
    finding:
      "Account A and Session S correlate with shared Endpoint D-17 during the approved review period.",
    confidence: "High",
    alternative:
      "Shared-device use and stale-session continuation limit person-level attribution.",
    nonProof:
      "The evidence does not independently identify the physical person controlling D-17.",
  },
  {
    id: "FN-02",
    question:
      "Did Workflow W record an unusual transition during the active session?",
    evidence: "EV-03 + EV-04 + EV-05",
    finding:
      "The supplied workflow event occurs during the interval represented as an active Account A session.",
    confidence: "Moderate",
    alternative:
      "The event may be unrelated to the account session despite temporal overlap.",
    nonProof:
      "Temporal overlap does not establish causation or intent.",
  },
  {
    id: "FN-03",
    question:
      "Did the supplier dependency state change before the workflow event?",
    evidence: "EV-06 + EV-04",
    finding:
      "The supplier note reports a dependency-state change before the workflow event.",
    confidence: "Conditional",
    alternative:
      "The supplier event may be correctly timed but unrelated to Workflow W.",
    nonProof:
      "The supplied evidence does not establish supplier fault or causation.",
  },
  {
    id: "FN-04",
    question:
      "Does missing application evidence prove no other event occurred?",
    evidence: "EV-05 + application gap",
    finding:
      "The Degraded application source cannot support complete absence conclusions from 14:02 through 14:18.",
    confidence: "High about limitation",
    alternative:
      "An event may have occurred without being represented in the source.",
    nonProof:
      "Missing application evidence does not prove event absence.",
  },
  {
    id: "FN-05",
    question:
      "Did the notification establish person-level awareness of the temporary role?",
    evidence: "EV-07 + no acknowledgement record",
    finding:
      "A role-change notification was generated before Session S.",
    confidence: "High about generation / Unknown about awareness",
    alternative:
      "The notification may not have been seen or understood.",
    nonProof:
      "Generation does not establish acknowledgement, awareness, consent, or acceptance.",
  },
  {
    id: "FN-06",
    question:
      "Does browser context prove a person intentionally navigated to the Support Console?",
    evidence: "EV-09 + EV-03 + EV-08",
    finding:
      "The Support Console was represented in browser context during the session interval.",
    confidence: "Moderate",
    alternative:
      "Automation, synchronization, prior state, or shared-device use may explain the browser representation.",
    nonProof:
      "The evidence does not establish physical-user navigation, attention, intent, or causation.",
  },
];

const ethicalDecisions = [
  {
    issue: "New Service T reference",
    trigger:
      "One fictional record references Service T outside current scope.",
    decision:
      "Record the reference but do not investigate Service T under current authority.",
    owner:
      "Investigation coordinator",
    reopen:
      "A qualified owner determines that Service T is materially necessary to answer the approved question.",
  },
  {
    issue: "Unrelated personal browser detail",
    trigger:
      "A fictional transformed browser summary contains unrelated personal activity.",
    decision:
      "Exclude and minimize the unrelated detail and follow the fictional privacy process.",
    owner:
      "Privacy reviewer",
    reopen:
      "Only under a separate qualified purpose and authority decision.",
  },
  {
    issue: "Reviewer conflict",
    trigger:
      "A fictional reviewer previously approved a change now under evaluation.",
    decision:
      "Disclose the relationship and use independent review for material conclusions.",
    owner:
      "Decision owner",
    reopen:
      "Conflict ownership changes or independent reviewer becomes unavailable.",
  },
  {
    issue: "Secondary purpose request",
    trigger:
      "A manager asks to reuse the forensic evidence for unrelated employee-performance review.",
    decision:
      "Stop secondary use under the incident-response purpose.",
    owner:
      "Governance / privacy owner",
    reopen:
      "A separate lawful, proportionate, purpose-specific fictional decision is documented.",
  },
];

const reportPackage = [
  {
    artifact: "Executive summary",
    mustContain:
      "Question, strongest conclusion, confidence, material Unknowns, service effect, owner decision, and next action.",
  },
  {
    artifact: "Scope and authority page",
    mustContain:
      "Purpose, requesting owner, decision owner, scope version, systems, identities, time window, evidence categories, exclusions, and stop conditions.",
  },
  {
    artifact: "Evidence register",
    mustContain:
      "Evidence IDs, owners, source health, provenance, integrity, time type, transformation, privacy, support, and limitations.",
  },
  {
    artifact: "Forensic timeline",
    mustContain:
      "Event, receipt, processing, review, and decision time distinctions; source-health intervals; gaps; confidence; non-causal language.",
  },
  {
    artifact: "Correlation matrix",
    mustContain:
      "Relationship questions, supporting evidence, duplicate state, contradiction, alternatives, confidence, attribution and causation limits.",
  },
  {
    artifact: "Findings register",
    mustContain:
      "Finding ID, evidence references, conclusion, confidence, limitation, alternative, Unknown, and non-proof statement.",
  },
  {
    artifact: "Ethics register",
    mustContain:
      "Necessity, proportionality, minimization, sensitive information, third-party issues, conflicts, stop conditions, purpose changes, retention, disclosure.",
  },
  {
    artifact: "Review and version history",
    mustContain:
      "Reviewers, comments, prior wording, corrected wording, reason, approval state, redistribution, retention, and reopen criteria.",
  },
  {
    artifact: "Public-safe portfolio summary",
    mustContain:
      "Fully invented scenario, general defensive reasoning, safe diagrams or cards, limitations, ethics, lessons learned, and no real system detail.",
  },
];

const capstonePhases = [
  {
    phase: "Phase 1 — Frame the investigation",
    tasks: [
      "Write the fictional purpose, primary forensic question, requesting owner, decision owner, scope version, systems, identities, services, time window, approved evidence categories, exclusions, and stop conditions.",
      "State three things the capstone explicitly does not authorize.",
      "Write one public-safe statement explaining that all organizations, accounts, systems, records, times, and outcomes are invented.",
    ],
  },
  {
    phase: "Phase 2 — Register evidence",
    tasks: [
      "Create an evidence register using EV-01 through EV-10.",
      "For each item, record owner, source health, provenance, integrity, time type, availability, transformation, privacy limit, what it supports, and what it does not prove.",
      "Identify which records are Healthy, Conditional, Degraded, transformed, or time-limited.",
    ],
  },
  {
    phase: "Phase 3 — Build chronology",
    tasks: [
      "Create the fictional event chronology without collapsing receipt, processing, and version times into event time.",
      "Mark the Degraded application interval.",
      "Preserve the supplier note as Conditional and show that its receipt time occurs after earlier owner decisions.",
      "Write at least four sequence statements with confidence and non-causation limits.",
    ],
  },
  {
    phase: "Phase 4 — Analyze endpoint, memory/storage, browser, and account evidence",
    tasks: [
      "Write one endpoint finding, one temporary-versus-persistent evidence finding, one browser-context finding, and one session/account finding.",
      "Preserve shared-device, stale-session, automation, synchronization, backup-version, and source-health alternatives where relevant.",
      "Write at least four person-attribution or intent statements that must remain Unknown.",
    ],
  },
  {
    phase: "Phase 5 — Correlate sources",
    tasks: [
      "Build a correlation matrix connecting identity, endpoint, application, service, supplier, and audit/governance evidence.",
      "Identify at least one strong relationship, one moderate relationship, one Conditional relationship, one evidence-limited absence, and one possible duplicate or derived representation.",
      "Write at least six non-proof statements.",
    ],
  },
  {
    phase: "Phase 6 — Apply ethics",
    tasks: [
      "Use the ethical decisions register to document one scope-change trigger, one sensitive-information minimization decision, one conflict disclosure, and one secondary-purpose stop decision.",
      "Explain why technical visibility does not create authority.",
      "Add fictional retention, distribution, and disclosure decisions.",
    ],
  },
  {
    phase: "Phase 7 — Write the report",
    tasks: [
      "Create an executive summary, evidence summary, chronology section, findings section, unresolved questions, owner actions, and conclusion.",
      "Use High, Moderate, Conditional, and Unknown confidence where appropriate.",
      "Keep account association, person attribution, causation, intent, and impact separate.",
    ],
  },
  {
    phase: "Phase 8 — Review, correct, and version",
    tasks: [
      "Simulate one technical reviewer comment and one privacy reviewer comment.",
      "Create one corrected finding while preserving the prior wording.",
      "Record version number, reason, reviewer, affected section, redistribution, retention, and reopen state.",
    ],
  },
  {
    phase: "Phase 9 — Build the portfolio output",
    tasks: [
      "Create a fully fictional public-safe case summary using only invented evidence cards and abstract diagrams.",
      "Remove unnecessary operational detail, private information, and internal system specificity.",
      "Explain what the evidence supports, what remains Unknown, how ethical limits shaped the investigation, and what professional lesson was learned.",
    ],
  },
];

const reviewQuestions = [
  {
    question:
      "Does the capstone clearly state the fictional purpose and authority before evidence analysis begins?",
    category: "Scope",
  },
  {
    question:
      "Can every material finding be traced to evidence IDs and source-health context?",
    category: "Integrity",
  },
  {
    question:
      "Are event, receipt, processing, review, and decision times kept distinct?",
    category: "Timeline",
  },
  {
    question:
      "Are shared-device, stale-session, automation, synchronization, and backup-version limits visible?",
    category: "Interpretation",
  },
  {
    question:
      "Does the correlation matrix distinguish independent evidence from derived or duplicate records?",
    category: "Correlation",
  },
  {
    question:
      "Does every major finding include confidence, limitation, alternative explanation, and non-proof language?",
    category: "Reporting",
  },
  {
    question:
      "Are Degraded or missing-source intervals prevented from becoming unsupported absence claims?",
    category: "Evidence quality",
  },
  {
    question:
      "Are account association, person attribution, causation, intent, and impact kept separate?",
    category: "Reasoning",
  },
  {
    question:
      "Are scope changes, sensitive information, third parties, conflicts, new purposes, retention, and disclosure decisions documented?",
    category: "Ethics",
  },
  {
    question:
      "Is the public portfolio version fully fictional and free of real logs, screenshots, accounts, systems, suppliers, or private details?",
    category: "Public safety",
  },
];

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>
      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Module A8
      </Link>
      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Module Test
      </Link>
    </div>
  );
}

export default function DigitalForensicsCapstoneLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Module A8
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">
              Lesson A8.10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Capstone Lab
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A8.10 Digital Forensics Capstone Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Bring the entire Digital Forensics Concepts module together in one
            safe fictional case. Define scope, register evidence, reconstruct
            chronology, analyze endpoint and account context, reason about
            temporary and persistent evidence, correlate sources, document
            uncertainty, apply ethical limits, build a professional report,
            simulate review and correction, and create a public-safe portfolio
            artifact.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A8: Digital Forensics Concepts"
          lessonTitle="Digital Forensics Capstone Lab"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Capstone Readiness Check"
          items={[
            "I will use only the invented Northbridge systems, accounts, evidence records, timestamps, source states, findings, reviewers, and outcomes supplied in A8.",
            "I will not access, inspect, collect, query, monitor, export, capture, image, extract, recover, or investigate any real device, account, browser, service, application, storage system, network, supplier, message, or person.",
            "I can distinguish evidence availability from event truth and source association from physical-person attribution.",
            "I can keep event time, receipt time, processing time, review time, and decision time separate.",
            "I can preserve Degraded, Conditional, missing, transformed, synchronized, shared-device, stale-session, and provenance limitations.",
            "I will use authorization, purpose, necessity, proportionality, minimization, privacy, conflicts, retention, disclosure, and stop conditions throughout the capstone.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Capstone Is Not About Solving the Mystery at Any Cost"
        >
          <p className="leading-8">
            A fictional investigation can produce a neat story quickly:
            Account A received a temporary role, authenticated, a workflow event
            happened, and a supplier change occurred nearby in time. But a
            professional forensic conclusion must survive shared-device
            ambiguity, source degradation, delayed evidence, incomplete
            supplier provenance, browser transformation, notification-awareness
            limits, and ethical scope boundaries.
          </p>

          <p className="mt-4 leading-8">
            The goal of this capstone is therefore not to force one dramatic
            explanation. It is to build the strongest evidence-bounded account
            possible. A capstone can be successful even when some answers remain
            Unknown, because disciplined uncertainty is part of professional
            forensic work.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak capstone goal
              </p>
              <p className="mt-2 leading-7">
                “Find the person responsible and prove the cause.”
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional capstone goal
              </p>
              <p className="mt-2 leading-7">
                “Answer the approved fictional forensic questions as strongly as
                the supplied evidence allows while preserving uncertainty,
                ethics, traceability, and non-proof limits.”
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Learning Objectives"
          title="Five Objectives for A8.10"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 text-sm font-semibold leading-7">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Module Integration"
          title="How A8.1 through A8.9 Feed the Capstone"
        >
          <div className="grid gap-5">
            {moduleSkills.map((item) => (
              <article
                key={item.lesson}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.lesson}
                  </span>
                  <h3 className="text-lg font-black text-white">
                    {item.skill}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.capstoneUse}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Case File"
          title="Northbridge Fictional Capstone Facts"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {caseFacts.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-bold text-yellow-100">
                    {item.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.statement}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fictional Capstone Evidence Dashboard"
          subtitle="Northbridge A8 capstone — invented values only"
          metrics={[
            {
              label: "Evidence items",
              value: "10",
              note: "Identity, endpoint, application, supplier, browser, backup, notification",
            },
            {
              label: "Material limitations",
              value: "6",
              note: "Shared device, Degraded source, Conditional provenance, transformed browser summary, awareness Unknown, version-limited backup",
            },
            {
              label: "Core findings",
              value: "6",
              note: "Account/session, workflow overlap, supplier timing, absence limit, notification state, browser context",
            },
            {
              label: "Ethical stop points",
              value: "4",
              note: "New service, unrelated personal detail, conflict, secondary purpose",
            },
          ]}
        />

        <SectionCard
          eyebrow="Evidence Register"
          title="Ten Supplied Fictional Evidence Items"
        >
          <div className="grid gap-5">
            {evidenceRegister.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <span className="font-black text-white">{item.category}</span>
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-bold text-yellow-100">
                    {item.sourceHealth}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Source", item.source],
                    ["Owner", item.owner],
                    ["Time", item.time],
                    ["Provenance", item.provenance],
                    ["Integrity", item.integrity],
                    ["Supports", item.supports],
                    ["Limitation", item.limits],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeAlertCard
          title="Fictional Capstone Integrity Warning"
          severity="High"
          time="Fictional review window"
          source="Supplied fictional evidence"
          details="The application source is Degraded during the central review interval, so missing application records cannot support strong absence conclusions."
          recommendation={["Affected source: fictional application evidence",
            "Degraded interval: 14:02–14:18",
            "Known event: one workflow transition at 14:04",
            "Unknown: completeness of additional application events",
            "Required reporting behavior: preserve source-limited or Unknown absence language",].join(" • ")}
        />

        <SectionCard
          eyebrow="Chronology"
          title="Build the Timeline Without Turning Order into Cause"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full overflow-hidden rounded-2xl border border-slate-700 text-left">
              <thead className="bg-slate-950">
                <tr>
                  {[
                    "Time",
                    "Type",
                    "Evidence",
                    "Event",
                    "Confidence",
                    "Limit",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="border-b border-slate-700 px-4 py-4 text-sm font-black text-cyan-200"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeline.map((item) => (
                  <tr
                    key={`${item.time}-${item.evidence}`}
                    className="border-b border-slate-800 bg-slate-900/50 align-top"
                  >
                    <td className="px-4 py-4 font-mono text-sm text-white">
                      {item.time}
                    </td>
                    <td className="px-4 py-4 text-sm text-purple-100">
                      {item.type}
                    </td>
                    <td className="px-4 py-4 font-mono text-sm text-cyan-100">
                      {item.evidence}
                    </td>
                    <td className="px-4 py-4 text-sm leading-6 text-slate-300">
                      {item.event}
                    </td>
                    <td className="px-4 py-4 text-sm leading-6 text-emerald-100">
                      {item.confidence}
                    </td>
                    <td className="px-4 py-4 text-sm leading-6 text-yellow-100">
                      {item.limit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <FakeLogPanel
          title="Fictional Capstone Records"
          logs={[
            "13:42 | IDENTITY | evidence=EV-01 | account=Account-A | temp-role=effective",
            "13:46 | NOTIFICATION | evidence=EV-07 | role-change=generated | acknowledgement=Unknown",
            "13:58 | SUPPLIER | evidence=EV-06 | dependency-state=changed | provenance=Conditional",
            "14:01 | AUTH | evidence=EV-02 | account=Account-A | result=success",
            "14:01-14:19 | ENDPOINT_SESSION | evidence=EV-03 | endpoint=D-17 | shared=true | physical_user=Unknown",
            "14:02-14:18 | SOURCE_HEALTH | evidence=EV-05 | application=Degraded",
            "14:03-14:06 | BROWSER | evidence=EV-09 | context=Support-Console+Workflow-Review | intent=Unknown",
            "14:04 | APPLICATION | evidence=EV-04 | workflow=Workflow-W | state=unusual-transition",
            "14:39 | RECEIPT | evidence=EV-06 | supplier-note-received | reported-event=13:58",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze the Capstone Timeline"
          question="Which fictional timeline conclusion is strongest?"
          evidence={[
            "The temporary support role was effective at 13:42.",
            "Account A authenticated at 14:01.",
            "Workflow W recorded an unusual transition at 14:04.",
            "The application source was Degraded from 14:02 through 14:18.",
            "The supplier note reports a dependency change at 13:58 but has Conditional creation-time provenance.",
          ]}
          options={[
            "The temporary role caused Account A to create the workflow event, and the supplier caused the overall incident.",
            "The supplied timeline supports that the role change preceded authentication and the workflow event occurred during the account session; application-source degradation and supplier-provenance limits prevent stronger causal conclusions.",
            "The Degraded application source proves the workflow event did not occur.",
            "The supplier note should replace all other evidence because it reports the earliest event.",
          ]}
          bestAnswer={1}
          explanation="The strongest answer preserves supported sequence and overlap while keeping causation, source degradation, and supplier provenance limits visible."
        />

        <SectionCard
          eyebrow="Correlation Findings"
          title="Six Evidence-Bounded Capstone Findings"
        >
          <div className="grid gap-5">
            {correlationFindings.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-100">
                    {item.confidence}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.question}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Finding
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.finding}</p>
                  </div>
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Alternative
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.alternative}
                    </p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Does not prove
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.nonProof}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Analyze the Person-Attribution Question"
          question="Which fictional statement best handles person-level attribution?"
          evidence={[
            "Account A authenticated successfully.",
            "Session S was represented on shared Endpoint D-17.",
            "The browser context included the Support Console.",
            "No supplied evidence independently identifies the physical person controlling D-17 during every event.",
          ]}
          options={[
            "Person A definitely performed the browser and workflow activity.",
            "The supplied evidence supports Account A, Session S, and shared D-17 associations, but physical-person attribution remains Unknown.",
            "Because D-17 is shared, none of the evidence is useful.",
            "The browser context proves harmful intent.",
          ]}
          bestAnswer={1}
          explanation="The evidence remains useful at the account, session, endpoint, and browser-context levels while person-level attribution stays unresolved."
        />

        <SectionCard
          eyebrow="Ethical Decisions"
          title="The Capstone Must Demonstrate When Not to Investigate Further"
        >
          <div className="grid gap-5">
            {ethicalDecisions.map((item) => (
              <article
                key={item.issue}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.issue}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.trigger}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Decision
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.decision}</p>
                  </div>
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Owner
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.owner}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Reopen trigger
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.reopen}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1: The New Service"
          scenario="During the fictional capstone, one supplied record references Service T. Service T is outside current scope, the approved account/session question can already be answered without investigating it, and reviewing Service T would expose unrelated third-party information."
          choices={[
            {
              label: "Choice A",
              response:
                "Expand immediately because more evidence could make the report stronger.",
              outcome:
                "More evidence is not automatically necessary, proportionate, or authorized.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response:
                "Record the Service T reference, keep it outside current analysis, document that the approved question can be answered without expansion, and require a separate qualified owner decision before any future use.",
              outcome:
                "This demonstrates purpose limitation, necessity, proportionality, privacy, and a clear stop condition.",
              tone: "best",
            },
            {
              label: "Choice C",
              response:
                "Delete the Service T reference entirely so nobody knows it appeared.",
              outcome:
                "The observation can remain minimally documented without becoming an authorized investigation target.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard
          eyebrow="Professional Report Package"
          title="Nine Deliverables That Complete the Capstone"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reportPackage.map((item, index) => (
              <article
                key={item.artifact}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  Deliverable {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-black text-white">
                  {item.artifact}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.mustContain}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Review Gate"
          title="Ten Questions Before the Fictional Capstone Is Considered Complete"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {reviewQuestions.map((item, index) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Check {index + 1}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">
                    {item.category}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.question}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2: The Final Executive Conclusion"
          scenario="The fictional capstone report is complete. Evidence strongly supports Account A and Session S association with shared D-17, moderately supports workflow overlap, conditionally supports an earlier supplier dependency change, and leaves physical-person attribution plus causation unresolved."
          choices={[
            {
              label: "Choice A",
              response:
                "Write that Person A caused the incident because leadership wants one clear answer.",
              outcome:
                "This discards the strongest limits in the case and turns object-level evidence into unsupported blame.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response:
                "State the supported account/session relationship, the workflow overlap, the Conditional supplier timing, the Degraded-source limitation, and the unresolved physical-person and causation questions, then identify the decisions that can still be made from those findings.",
              outcome:
                "This is evidence-bounded, useful, transparent, and professionally defensible.",
              tone: "best",
            },
            {
              label: "Choice C",
              response:
                "Avoid giving any conclusion because some questions remain Unknown.",
              outcome:
                "Unknowns do not erase the conclusions that are well supported.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard
          eyebrow="Safe Fictional Capstone Lab"
          title="Complete the Full A8 Forensic Workflow"
        >
          <p className="leading-8">
            Complete all nine phases below using only the invented Northbridge
            case and evidence on this page. Do not access, inspect, collect,
            query, monitor, export, capture, image, extract, recover, unlock,
            bypass, correlate, or investigate any real device, account, browser,
            service, application, storage system, network, supplier, message,
            organization, classmate, teacher, family member, or other person.
          </p>

          <div className="mt-6 grid gap-5">
            {capstonePhases.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.phase}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {item.tasks.map((task) => (
                    <li key={task}>• {task}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black">Capstone boundary</p>
            <p className="mt-2 leading-7">
              This capstone is a classification, reasoning, writing, ethics, and
              reporting exercise using only invented, pre-supplied evidence. It
              does not authorize real forensic collection, evidence acquisition,
              memory capture, storage imaging, file recovery, browser review,
              account access, log querying, network capture, extraction,
              surveillance, bypass, configuration changes, or investigation of
              real people or systems.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Produce a Defensible Case When Leadership Wants More Certainty Than the Evidence Provides"
        >
          <p className="leading-8">
            The fictional leadership team accepts the account/session finding
            but wants you to identify the person and the cause. Your evidence
            cannot support either conclusion with confidence. Your challenge is
            to demonstrate why the capstone is complete even without those
            answers.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Write the strongest supported account/session finding.",
              "Write the strongest workflow-overlap finding.",
              "Write the strongest supplier-timing finding.",
              "Explain why shared Endpoint D-17 blocks confident physical-person attribution.",
              "Explain why temporal overlap and supplier sequence do not establish causation.",
              "Show how the Degraded application source limits absence conclusions.",
              "Identify which decisions leadership can still make from the supported findings.",
              "Write one professional Unknown statement for physical-person attribution.",
              "Write one professional Unknown statement for root causation.",
              "Explain why refusing unsupported certainty improves rather than weakens forensic credibility.",
              "Create one executive summary and one public-safe portfolio summary that preserve the same evidence strength.",
              "State one ethical stop condition that prevents unnecessary additional investigation.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A8.10 Digital Forensics Capstone Checklist"
          items={[
            "I can frame a fictional forensic investigation with purpose, authority, scope, exclusions, owners, and stop conditions.",
            "I can build an evidence register preserving source health, provenance, integrity, transformation, timing, privacy, and limitations.",
            "I can build a chronology without collapsing event, receipt, processing, review, and decision time.",
            "I can reason about endpoint, browser, account, temporary, persistent, synchronized, backup, and archived evidence conceptually and safely.",
            "I can correlate fictional sources without double-counting derived records or forcing unsupported causal stories.",
            "I can preserve shared-device, stale-session, automation, synchronization, Degraded-source, supplier-provenance, notification-awareness, and backup-version limits.",
            "I can keep account association, person attribution, causation, intent, and impact separate.",
            "I can use High, Moderate, Conditional, Conflicting, and Unknown confidence appropriately.",
            "I can document ethical stop conditions, minimization, unrelated findings, third-party issues, conflicts, new purposes, retention, and disclosure.",
            "I can create reviewer comments, corrections, version history, redistribution, retention, and reopen criteria.",
            "I can produce technical, leadership, privacy/governance, and public-safe fictional outputs without changing the underlying evidence.",
            "I can complete a professional forensic capstone entirely through fictional, defensive, non-invasive reasoning rather than real investigation.",
          ]}
        />

        <MiniQuiz
          title="A8.10 Mini Quiz: Digital Forensics Capstone Lab"
          questions={[
            {
              question:
                "A fictional shared endpoint shows Account A and Session S during the event window. What is strongest?",
              choices: [
                "Person A definitely performed the activity.",
                "The supplied evidence supports an Account A / Session S / shared-endpoint relationship while physical-person attribution remains Unknown.",
                "The evidence proves harmful intent.",
                "The shared endpoint makes all evidence useless.",
              ],
              answer: 1,
              explanation:
                "Object-level relationships can be strong while person-level attribution remains unresolved.",
            },
            {
              question:
                "A fictional application source is Degraded and has no matching event during part of the review window. What is strongest?",
              choices: [
                "No event occurred.",
                "The missing record should be treated as source-limited and cannot strongly support absence.",
                "The application source is false.",
                "Every other source should be ignored.",
              ],
              answer: 1,
              explanation:
                "Degraded coverage weakens the meaning of missing evidence.",
            },
            {
              question:
                "A supplier note reports an event at 13:58 but reaches the case at 14:39. What should the capstone preserve?",
              choices: [
                "Only 13:58.",
                "Only 14:39.",
                "13:58 as the Conditional reported event time and 14:39 as receipt time, with provenance and causation limits.",
                "Neither timestamp.",
              ],
              answer: 2,
              explanation:
                "Event and receipt time answer different forensic questions.",
            },
            {
              question:
                "A fictional browser context references the Support Console during Session S. What does that alone prove?",
              choices: [
                "A specific person intentionally used the Support Console.",
                "The Support Console was represented in browser context, subject to shared-device, automation, synchronization, and transformation limits.",
                "The browser caused the workflow event.",
                "The account was compromised.",
              ],
              answer: 1,
              explanation:
                "Browser context is not automatic proof of physical user, intent, or causation.",
            },
            {
              question:
                "A new fictional Service T appears outside approved scope, and the current question can already be answered without it. What is strongest?",
              choices: [
                "Expand immediately.",
                "Record the reference, keep Service T outside current analysis, and require a separate owner decision before future investigation.",
                "Assume Service T caused the issue.",
                "Delete the reference entirely.",
              ],
              answer: 1,
              explanation:
                "Purpose, necessity, proportionality, privacy, and authority govern scope expansion.",
            },
            {
              question:
                "What is the strongest capstone report when physical-person attribution and causation remain unresolved?",
              choices: [
                "Avoid all conclusions.",
                "State the supported account/session, chronology, and workflow findings; preserve attribution and causation Unknowns; identify what decisions can still be made.",
                "Choose the most likely person and cause.",
                "Remove uncertainty from the executive summary.",
              ],
              answer: 1,
              explanation:
                "Unknowns do not erase supported findings. Professional reports distinguish what is known from what remains unresolved.",
            },
            {
              question:
                "What makes the public CyberShield capstone portfolio-safe?",
              choices: [
                "Removing names from real logs.",
                "Using fully invented systems, identities, evidence, timelines, findings, diagrams, reviewers, and outcomes from the beginning.",
                "Publishing real screenshots after blurring usernames.",
                "Using real internal configurations with fake hostnames.",
              ],
              answer: 1,
              explanation:
                "The safest public artifact is fictional from the beginning rather than derived from real sensitive evidence.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: Digital Forensics Capstone Case Package"
          prompt="Create a fully fictional A8.10 Digital Forensics Capstone Case Package for Northbridge. Include a purpose statement; authority statement; primary forensic question; decision owner; investigation coordinator; scope version; included systems, identities, services, evidence categories, and time window; explicit exclusions; stop conditions; evidence register with at least ten invented evidence items; source owners; source health; provenance; integrity state; time type; availability; transformation; privacy limit; chronology; at least six correlation findings; confidence; alternative explanations; non-proof statements; endpoint interpretation; temporary-versus-persistent evidence reasoning; browser/account interpretation; supplier evidence; one Degraded-source absence limit; one shared-device person-attribution Unknown; one notification-awareness Unknown; one supplier-causation Unknown; ethical boundary register; unrelated-finding referral; third-party minimization; conflict disclosure; recusal or independent-review decision; secondary-purpose stop decision; retention plan; disclosure matrix; executive summary; technical findings section; privacy/governance summary; leadership summary; reviewer comments; one material correction; prior and corrected wording; version history; redistribution; reopen criteria; lessons learned; and a public-safe portfolio summary. Every organization, person, account, endpoint, service, supplier, application, source, evidence item, timestamp, finding, reviewer, decision, and outcome must be invented."
          tips={[
            "Use the entire A8 workflow: scope, integrity, chronology, endpoint, memory/storage, browser/account, correlation, reporting, ethics, review, and portfolio communication.",
            "Keep evidence availability separate from event truth and object association separate from physical-person attribution.",
            "Use source health before interpreting missing evidence as absence.",
            "Use sequence and overlap carefully and do not convert them into automatic causation.",
            "Demonstrate at least one ethical decision to stop, narrow, minimize, recuse, or defer.",
            "Keep the final capstone completely fictional, non-invasive, defensive, privacy-safe, and public-safe.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the A8 Module Test?"
        >
          <p className="leading-8">
            Rate your readiness from 1 to 5 across all nine A8 skill areas.
            Before moving to the module test, you should be able to explain not
            only what a fictional evidence item supports, but also how source
            health, timing, provenance, transformation, privacy, ethics, and
            non-proof limits change the strength of the final conclusion.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can define a fictional forensic purpose and scope before evidence analysis begins.",
              "I can preserve evidence identity, provenance, integrity, owner, transformation, and chain-of-custody concepts.",
              "I can distinguish event, receipt, processing, review, and decision time.",
              "I can interpret supplied endpoint evidence without over-attributing a person.",
              "I can distinguish temporary, persistent, synchronized, backup, archived, expired, and unavailable evidence states.",
              "I can interpret authentication, session, browser, notification, synchronization, and recovery evidence without claiming more than it proves.",
              "I can correlate fictional sources while preserving duplicates, contradictions, source health, and alternatives.",
              "I can write evidence-linked findings with confidence, limitations, alternatives, Unknowns, and non-proof statements.",
              "I can apply authorization, necessity, proportionality, minimization, privacy, conflicts, retention, disclosure, and stop conditions.",
              "I can build a professional fictional forensic case package that is safe to place in a public CyberShield portfolio.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "A complete fictional forensic investigation begins with purpose and authority, not with evidence access.",
            "Evidence integrity requires identity, provenance, ownership, source health, transformation, timing, versioning, and limitations to remain traceable.",
            "Chronology should preserve event, receipt, processing, review, and decision times rather than collapsing them into one sequence.",
            "Endpoint, browser, account, temporary, persistent, synchronized, backup, and archived evidence each support different levels of conclusion.",
            "Shared-device, stale-session, automation, synchronization, Degraded-source, supplier-provenance, and notification-awareness limits can prevent stronger attribution or causal claims.",
            "Correlation connects evidence when a bounded question justifies the relationship, but duplicates and derived records should not be counted as independent events.",
            "Professional findings distinguish account association, physical-person attribution, sequence, causation, intent, and impact.",
            "Unknown is a valid outcome when fictional evidence cannot support confirmation or exclusion.",
            "Ethical forensic practice includes stopping, narrowing, minimizing, recusing, referring, or deferring when authority, purpose, privacy, proportionality, or impartiality requires it.",
            "A8 capstone success is measured by defensible reasoning, traceable evidence, ethical restraint, accurate uncertainty, and public-safe communication—not by forcing every question into a definite answer.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            This Capstone Teaches Forensic Reasoning, Not Real Evidence Acquisition
          </h2>
          <p className="mt-3 leading-7">
            Nothing in A8.10 authorizes access, investigation, monitoring,
            querying, log collection, browser inspection, account access,
            credential use, password recovery, secret recovery, private-message
            review, device access, memory capture, storage imaging, file
            recovery, packet capture, extraction, decryption bypass, unlocking,
            surveillance, configuration changes, live acquisition, or
            examination involving any real device, account, application,
            service, supplier, storage system, network, organization, incident,
            classmate, teacher, family member, or other person. Use only the
            fully invented, pre-supplied Northbridge capstone material.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
            A8 Lessons Complete
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Continue to the A8 Module Test
          </h2>
          <p className="mt-3 max-w-3xl leading-7">
            You have now completed all ten lessons in Digital Forensics
            Concepts. The module test will check whether you can apply the full
            A8 framework across scope, evidence integrity, timeline analysis,
            endpoint artifacts, memory and storage, browser and account
            activity, correlation, reporting, ethics, and capstone reasoning
            while preserving the same defensive and non-invasive boundaries.
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