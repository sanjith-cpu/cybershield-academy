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
const modulePath = `${trackPath}/risk-management-and-compliance`;
const previousLesson = `${modulePath}/risk-registers-and-ownership`;
const nextLesson = `${modulePath}/compliance-framework-concepts`;

const objectives = [
  "Explain how security controls reduce risk by changing likelihood, impact, detection time, recovery time, or another part of a risk scenario.",
  "Distinguish preventive, detective, corrective, recovery, administrative, technical, and physical control roles without treating any one category as universally stronger.",
  "Evaluate control design effectiveness and operating effectiveness using safe, authorized evidence.",
  "Connect control testing to owners, expected outcomes, test scope, evidence quality, gaps, remediation, and residual risk.",
  "Build a Control Effectiveness Review that becomes the fourth artifact in the A15 Risk Register and Leadership Recommendation.",
];

const controlFunctions = [
  {
    type: "Preventive",
    purpose:
      "Reduce the chance that an unwanted event happens.",
    examples:
      "Strong authentication, least privilege, segmentation, secure configuration, approved change controls.",
    question:
      "What event or exposure is this control intended to prevent?",
  },
  {
    type: "Detective",
    purpose:
      "Identify that an event, failure, drift, or policy violation occurred.",
    examples:
      "Monitoring, alerting, integrity verification, access review, audit logging.",
    question:
      "What evidence shows the control can notice the condition in time?",
  },
  {
    type: "Corrective",
    purpose:
      "Reduce harm or restore a safer state after a problem is identified.",
    examples:
      "Account disablement, configuration repair, control remediation, issue correction.",
    question:
      "What safer state should exist after correction?",
  },
  {
    type: "Recovery",
    purpose:
      "Restore business capability after disruption.",
    examples:
      "Backups, tested restore procedures, alternate service paths, disaster-recovery plans.",
    question:
      "Can the organization recover the service within the expected business need?",
  },
  {
    type: "Deterrent",
    purpose:
      "Discourage behavior through visible governance or consequences.",
    examples:
      "Acceptable-use policy, access banners, approval controls, oversight.",
    question:
      "Does the control meaningfully influence behavior or expectations?",
  },
  {
    type: "Compensating",
    purpose:
      "Reduce risk when the preferred control cannot currently be implemented.",
    examples:
      "Restricted network scope, increased monitoring, manual approval, reduced data scope.",
    question:
      "Does the alternate control reduce the same risk enough for the temporary decision?",
  },
];

const controlDomains = [
  {
    domain: "Administrative",
    meaning:
      "Policies, standards, procedures, training, approvals, ownership, and governance.",
    examples:
      "Access review standard, incident procedure, risk exception process, supplier review policy.",
  },
  {
    domain: "Technical",
    meaning:
      "Technology-enforced safeguards.",
    examples:
      "Authentication, encryption, network controls, logging, backups, endpoint protection.",
  },
  {
    domain: "Physical",
    meaning:
      "Safeguards for facilities, devices, equipment, and physical access.",
    examples:
      "Facility access controls, locked equipment areas, environmental controls.",
  },
];

const designVsOperation = [
  {
    concept: "Design effectiveness",
    question:
      "If the control operates exactly as designed, would it meaningfully reduce the intended risk?",
    strongEvidence:
      "Clear objective, correct scope, mapped risk, defined owner, required frequency, expected failure handling.",
    weakEvidence:
      "The control exists but nobody can explain what risk it is intended to reduce.",
  },
  {
    concept: "Operating effectiveness",
    question:
      "Is the control actually operating as designed, at the expected frequency, with current evidence?",
    strongEvidence:
      "Current review records, test results, monitoring, completed approvals, recovery validation, issue follow-up.",
    weakEvidence:
      "The policy says the control should happen, but no current evidence shows it did.",
  },
  {
    concept: "Coverage",
    question:
      "Does the control apply to the full intended population, environment, data scope, or workflow?",
    strongEvidence:
      "Inventory shows all in-scope systems or identities are covered.",
    weakEvidence:
      "A control works on one system but several similar systems are outside scope.",
  },
  {
    concept: "Sustainability",
    question:
      "Can the control continue to operate with current ownership, tooling, staffing, and process support?",
    strongEvidence:
      "Named owner, documented cadence, monitoring, escalation, training, backup ownership.",
    weakEvidence:
      "The control works only because one person remembers to run it manually.",
  },
];

const testEvidence = [
  {
    evidence: "Configuration / design review",
    proves:
      "Whether the control is designed with the intended scope, settings, ownership, and dependencies.",
    limitation:
      "Does not prove the control operates successfully over time.",
  },
  {
    evidence: "Operational record",
    proves:
      "That a recurring review, approval, backup, update, or other control activity occurred.",
    limitation:
      "May not prove quality unless the expected outcome is also reviewed.",
  },
  {
    evidence: "Monitoring evidence",
    proves:
      "Whether the control is generating expected signals and whether failures are visible.",
    limitation:
      "Monitoring can be incomplete or stale if source health is poor.",
  },
  {
    evidence: "Recovery / resilience test",
    proves:
      "Whether recovery controls can restore expected business capability under a safe test.",
    limitation:
      "A planned test cannot perfectly reproduce every real disruption.",
  },
  {
    evidence: "Access review",
    proves:
      "Whether current access remains aligned to expected roles and business need.",
    limitation:
      "The review is only as strong as the identity inventory and reviewer quality.",
  },
  {
    evidence: "Audit / assurance evidence",
    proves:
      "Whether an independent or structured review found the control operating as intended.",
    limitation:
      "Scope, date, and tested population must match the current decision.",
  },
];

const testDimensions = [
  {
    dimension: "Objective",
    question:
      "What specific risk or control objective should this control address?",
    example:
      "Only authorized workforce roles may access sensitive student-support records.",
  },
  {
    dimension: "Population",
    question:
      "What users, systems, records, suppliers, or environments are in scope?",
    example:
      "All production workforce accounts with Student Services access.",
  },
  {
    dimension: "Frequency",
    question:
      "How often should the control operate or be reviewed?",
    example:
      "Quarterly access review plus event-driven review after role change.",
  },
  {
    dimension: "Owner",
    question:
      "Who operates the control and who reviews its evidence?",
    example:
      "Identity Governance owns operation; Student Services owner approves business access.",
  },
  {
    dimension: "Evidence",
    question:
      "What safe evidence demonstrates the control operated?",
    example:
      "Current access-review record, completion status, exceptions, and remediation tickets.",
  },
  {
    dimension: "Failure handling",
    question:
      "What happens when the control fails or identifies a gap?",
    example:
      "Excess access is removed, owner notified, remediation tracked, residual risk reassessed.",
  },
  {
    dimension: "Closure",
    question:
      "What proves remediation changed the control state?",
    example:
      "Follow-up review shows corrected access and no remaining unapproved accounts.",
  },
  {
    dimension: "Change trigger",
    question:
      "What event should cause the control design or test plan to be reconsidered?",
    example:
      "New application, data class, supplier, identity model, business process, or control owner.",
  },
];

const controlStates = [
  {
    state: "Effective",
    meaning:
      "Design and operation are both supported by current evidence and no material gap remains.",
  },
  {
    state: "Partially Effective",
    meaning:
      "The control reduces risk but coverage, frequency, evidence, or operating quality is incomplete.",
  },
  {
    state: "Ineffective",
    meaning:
      "The control does not reliably reduce the intended risk under current evidence.",
  },
  {
    state: "Not Implemented",
    meaning:
      "The expected control is absent.",
  },
  {
    state: "Unknown",
    meaning:
      "Evidence is insufficient, stale, or contradictory.",
  },
  {
    state: "Compensating",
    meaning:
      "An alternate control temporarily reduces the risk when the preferred control is not available.",
  },
];

const principles = [
  {
    title: "Controls should map to risks",
    meaning:
      "A control is useful because it reduces a specific risk or supports a clear security objective.",
    review:
      "Which risk would increase if this control disappeared?",
  },
  {
    title: "Design and operation are separate",
    meaning:
      "A perfectly designed control can fail in practice, and a consistently operated control can still be badly designed.",
    review:
      "Do we have evidence for both design and operating effectiveness?",
  },
  {
    title: "Coverage matters",
    meaning:
      "A strong control on half the environment may still leave major residual risk.",
    review:
      "What systems, identities, data, or processes remain outside scope?",
  },
  {
    title: "Evidence should prove the expected outcome",
    meaning:
      "A completed task is not always proof that the control worked.",
    review:
      "What evidence shows the intended security outcome actually happened?",
  },
  {
    title: "Failures should lead to action",
    meaning:
      "A control test is valuable only if identified gaps are owned and remediated.",
    review:
      "Who receives the finding and what happens next?",
  },
  {
    title: "Compensating controls are bounded",
    meaning:
      "Alternate controls should be scoped, monitored, and reviewed rather than becoming permanent by default.",
    review:
      "What condition ends the compensating arrangement?",
  },
  {
    title: "Testing should be safe and authorized",
    meaning:
      "Control assurance can rely on configuration review, logs, approvals, recovery exercises, synthetic checks, and other safe evidence.",
    review:
      "Can the control be validated without offensive activity?",
  },
  {
    title: "Control evidence should age",
    meaning:
      "Evidence should become less trustworthy after architecture, ownership, or business conditions change.",
    review:
      "What evidence is stale or needs refresh?",
  },
];

const vocabulary = [
  {
    term: "Security control",
    definition:
      "A safeguard intended to reduce risk or support a security objective.",
  },
  {
    term: "Preventive control",
    definition:
      "A control designed to reduce the chance that an unwanted event occurs.",
  },
  {
    term: "Detective control",
    definition:
      "A control designed to identify events, failures, drift, or violations.",
  },
  {
    term: "Corrective control",
    definition:
      "A control designed to restore a safer state after a problem is identified.",
  },
  {
    term: "Recovery control",
    definition:
      "A control designed to restore business capability after disruption.",
  },
  {
    term: "Compensating control",
    definition:
      "An alternate safeguard used when the preferred control cannot currently be implemented.",
  },
  {
    term: "Design effectiveness",
    definition:
      "Whether the control, if operated as intended, would meaningfully reduce the target risk.",
  },
  {
    term: "Operating effectiveness",
    definition:
      "Whether the control is actually operating as designed under current evidence.",
  },
  {
    term: "Control objective",
    definition:
      "The security outcome the control is expected to achieve.",
  },
  {
    term: "Control owner",
    definition:
      "The role accountable for operating and maintaining the control.",
  },
  {
    term: "Control test",
    definition:
      "A structured review of control design, operation, evidence, scope, and outcome.",
  },
  {
    term: "Control deficiency",
    definition:
      "A weakness that reduces the control's ability to achieve its intended objective.",
  },
];

const records = [
  {
    id: "CTL-201",
    control: "Quarterly Workforce Access Review",
    risk: "RSK-101 — excessive access to Student Services",
    type: "Preventive / Detective",
    domain: "Administrative + Technical",
    objective:
      "Ensure workforce access remains aligned to approved roles and current business need.",
    owner: "Identity Governance",
    population:
      "All production workforce identities with Student Services access",
    frequency: "Quarterly + event-driven role-change review",
    design:
      "Effective — owner, scope, approver, cadence, evidence, and remediation are defined",
    operation:
      "Effective — latest review completed on schedule with follow-up remediation",
    evidence:
      "Current review record + approved exceptions + completed remediation records",
    gap: "No material gap",
    residual:
      "Low-Moderate because access needs change over time",
    state: "Effective",
    nextAction:
      "Maintain quarterly cadence and trigger re-review after identity-model change",
  },
  {
    id: "CTL-202",
    control: "Legacy Reporting Network Restriction",
    risk: "RSK-102 — broad legacy trust and exposure",
    type: "Preventive / Compensating",
    domain: "Technical",
    objective:
      "Reduce exposure while legacy modernization is incomplete.",
    owner: "Infrastructure Security",
    population:
      "Legacy reporting production hosts",
    frequency: "Continuous configuration + monthly review",
    design:
      "Partially Effective — reduces exposure but does not solve obsolete trust or ownership gaps",
    operation:
      "Effective for current documented scope",
    evidence:
      "Current network policy review + host inventory + monthly owner attestation",
    gap:
      "Does not remediate unowned key relationship or retired trust anchor",
    residual:
      "High because multiple legacy risks remain",
    state: "Compensating",
    nextAction:
      "Keep compensating control until modernization closure criteria are met",
  },
  {
    id: "CTL-203",
    control: "Partner Certificate Renewal Monitoring",
    risk: "RSK-103 — partner certificate lifecycle interruption",
    type: "Preventive / Detective",
    domain: "Technical + Administrative",
    objective:
      "Identify approaching certificate expiry early enough to complete renewal safely.",
    owner: "Integration Platform",
    population:
      "Partner scheduling certificate and relying-service relationship",
    frequency: "Daily monitoring + monthly governance review",
    design:
      "Effective — threshold, owner, sponsor, renewal workflow, and escalation defined",
    operation:
      "Effective — current certificate has active renewal ticket at 45 days remaining",
    evidence:
      "Certificate inventory + alert record + renewal ticket + sponsor confirmation",
    gap:
      "Replacement validation not yet complete",
    residual:
      "Moderate until renewal closes",
    state: "Partially Effective",
    nextAction:
      "Validate replacement certificate and retire old trust before expiry",
  },
  {
    id: "CTL-204",
    control: "Backup Restore Validation",
    risk: "RSK-104 — recovery failure",
    type: "Recovery",
    domain: "Technical + Administrative",
    objective:
      "Prove critical backup data and current key relationships can restore expected business capability.",
    owner: "Resilience Team",
    population:
      "Critical production backup sets and required recovery dependencies",
    frequency: "Annual full validation + more frequent component checks",
    design:
      "Effective — scope, owners, recovery objective, evidence, and failure handling defined",
    operation:
      "Effective — latest full validation completed within required period",
    evidence:
      "Restore test summary + key-version mapping + issue log + closure evidence",
    gap:
      "Real disaster conditions can differ from planned test",
    residual:
      "Moderate",
    state: "Effective",
    nextAction:
      "Repeat on schedule and after major platform or key-lifecycle change",
  },
  {
    id: "CTL-205",
    control: "Supplier Continuity Review",
    risk: "RSK-105 — critical SaaS concentration",
    type: "Preventive / Recovery",
    domain: "Administrative",
    objective:
      "Evaluate whether the business can continue operating if the critical supplier is unavailable.",
    owner: "Vendor Management + Business Service Owner",
    population:
      "Critical SaaS provider and dependent business process",
    frequency: "Annual + contract renewal + material supplier change",
    design:
      "Partially Effective — review is defined but alternate operating options remain limited",
    operation:
      "Effective — current assessment and continuity plan exist",
    evidence:
      "Current supplier assessment + contract review + continuity plan",
    gap:
      "No practical alternate provider",
    residual:
      "Moderate-High concentration risk",
    state: "Partially Effective",
    nextAction:
      "Improve alternate operating procedures and exit planning",
  },
  {
    id: "CTL-206",
    control: "Analytics Export Cleanup",
    risk: "RSK-106 — temporary sensitive data retained too long",
    type: "Preventive / Corrective",
    domain: "Technical",
    objective:
      "Remove temporary export packages after the approved retention period.",
    owner: "Analytics Platform",
    population:
      "Temporary export staging locations",
    frequency: "Automated lifecycle + daily exception monitoring",
    design:
      "Effective — retention and failure handling are defined",
    operation:
      "Effective — recent validation shows expected cleanup",
    evidence:
      "Lifecycle policy + cleanup logs + exception queue",
    gap:
      "Large interrupted jobs require exception monitoring",
    residual:
      "Low-Moderate",
    state: "Effective",
    nextAction:
      "Maintain exception review and validate after export-process changes",
  },
  {
    id: "CTL-207",
    control: "Temporary Workspace Destruction",
    risk: "RSK-107 — sensitive data persists past project need",
    type: "Preventive / Corrective",
    domain: "Technical + Administrative",
    objective:
      "Ensure temporary workspaces and datasets are removed after approved project closure.",
    owner: "Data Science Platform",
    population:
      "Temporary project workspaces containing sensitive derived data",
    frequency: "At project close + daily lifecycle processing",
    design:
      "Effective — lifecycle and ownership are defined",
    operation:
      "Unknown — evidence is partial for several recently closed projects",
    evidence:
      "Workspace policy + partial cleanup logs + project closeout records",
    gap:
      "Current cleanup evidence incomplete",
    residual:
      "Moderate",
    state: "Unknown",
    nextAction:
      "Refresh evidence and validate cleanup across the full in-scope population",
  },
];

const dashboardMetrics = [
  {
    label: "Controls reviewed",
    value: "7",
    note: "Access, legacy, certificate, recovery, supplier, export, and workspace controls",
  },
  {
    label: "Effective",
    value: "3",
    note: "Access review, recovery validation, and export cleanup",
  },
  {
    label: "Partial / Compensating",
    value: "3",
    note: "Legacy restriction, partner lifecycle, and supplier continuity reduce but do not fully close risk",
  },
  {
    label: "Unknown",
    value: "1",
    note: "Temporary-workspace destruction needs current operating evidence",
  },
];

const logs = [
  "[08:18] CTL-201 access_review design=EFFECTIVE operation=EFFECTIVE state=EFFECTIVE",
  "[08:42] CTL-202 legacy_restriction design=PARTIAL operation=EFFECTIVE state=COMPENSATING",
  "[09:06] CTL-203 partner_renewal design=EFFECTIVE operation=EFFECTIVE gap=REPLACEMENT_OPEN state=PARTIAL",
  "[09:30] CTL-204 backup_restore design=EFFECTIVE operation=EFFECTIVE state=EFFECTIVE",
  "[09:54] CTL-205 supplier_continuity design=PARTIAL operation=EFFECTIVE state=PARTIAL",
  "[10:18] CTL-206 export_cleanup design=EFFECTIVE operation=EFFECTIVE state=EFFECTIVE",
  "[10:42] CTL-207 workspace_destruction design=EFFECTIVE operation=UNKNOWN evidence=PARTIAL state=UNKNOWN",
];

const antiPatterns = [
  {
    title: "Control exists, therefore it works",
    problem:
      "The organization confuses control presence with operating effectiveness.",
    better:
      "Review current evidence showing the control operates as intended.",
  },
  {
    title: "Policy proves operation",
    problem:
      "A written standard is treated as proof that the control activity occurred.",
    better:
      "Use policy for design intent and operational records for performance evidence.",
  },
  {
    title: "One sample proves full coverage",
    problem:
      "A small successful example is generalized to the entire population.",
    better:
      "Define scope and ensure evidence represents the intended population.",
  },
  {
    title: "Compensating control becomes permanent",
    problem:
      "A temporary alternate safeguard remains indefinitely with no closure plan.",
    better:
      "Tie compensating controls to scope, review, expiry, and remediation.",
  },
  {
    title: "Control test has no expected outcome",
    problem:
      "The tester collects screenshots or logs but never defines what success means.",
    better:
      "State the objective, pass condition, failure handling, and closure evidence first.",
  },
  {
    title: "Failed control test has no owner",
    problem:
      "A gap is identified but nobody is accountable for remediation.",
    better:
      "Assign remediation owner, due date, escalation, and validation evidence.",
  },
  {
    title: "Stale evidence stays Effective",
    problem:
      "A control is considered Effective long after the environment changed.",
    better:
      "Refresh evidence after major change or reduce confidence.",
  },
  {
    title: "Unsafe validation",
    problem:
      "A team assumes control assurance requires risky testing against real systems.",
    better:
      "Use safe, authorized evidence, synthetic scenarios, recovery exercises, configuration review, and operational records.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep CTL-207 Unknown until current evidence covers the full set of recently closed workspaces.",
    outcome:
      "Best. Good design does not prove current operation when evidence is incomplete.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark CTL-207 Effective because the policy says cleanup must happen.",
    outcome:
      "Risky. Policy supports design intent, not operating effectiveness.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Mark CTL-207 Ineffective automatically because evidence is incomplete.",
    outcome:
      "Caution. Missing evidence reduces confidence, but it does not necessarily prove the control failed.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep CTL-202 as a Compensating control because it reduces exposure but does not solve the root legacy risks.",
    outcome:
      "Best. The control is useful but should remain bounded to the temporary modernization period.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark the legacy risk Closed because the network restriction is working.",
    outcome:
      "Risky. A compensating control does not necessarily reduce residual risk to the closure target.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Remove the control because compensating controls are never useful.",
    outcome:
      "Risky. Compensating controls can be valuable when they are scoped, monitored, and temporary.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the main purpose of a security control?",
    choices: [
      "Reduce risk or support a defined security objective.",
      "Create more documentation.",
      "Replace risk ownership.",
      "Guarantee that incidents never happen.",
    ],
    answer: 0,
    explanation:
      "Controls exist to reduce risk or support a security outcome.",
  },
  {
    question:
      "What is design effectiveness?",
    choices: [
      "Whether the control, if operated as intended, would meaningfully reduce the target risk.",
      "Whether the control ran yesterday.",
      "Whether the risk owner likes the control.",
      "Whether the control has a dashboard.",
    ],
    answer: 0,
    explanation:
      "Design effectiveness asks whether the control is conceptually capable of achieving the intended objective.",
  },
  {
    question:
      "What is operating effectiveness?",
    choices: [
      "Whether the control is actually operating as designed under current evidence.",
      "Whether the control is documented in policy.",
      "Whether the control is expensive.",
      "Whether the control is preventive.",
    ],
    answer: 0,
    explanation:
      "Operating effectiveness is about real performance over time.",
  },
  {
    question:
      "What is strongest when current operating evidence is incomplete?",
    choices: [
      "Use Unknown or Partially Effective until stronger evidence is available.",
      "Mark Effective because the design is strong.",
      "Mark Closed automatically.",
      "Delete the control record.",
    ],
    answer: 0,
    explanation:
      "Decision confidence should match current evidence quality.",
  },
  {
    question:
      "What is a compensating control?",
    choices: [
      "An alternate safeguard used when the preferred control cannot currently be implemented.",
      "A control that replaces risk ownership.",
      "A failed control.",
      "A control that never needs review.",
    ],
    answer: 0,
    explanation:
      "Compensating controls reduce risk temporarily or under specific constraints.",
  },
  {
    question:
      "Why is control coverage important?",
    choices: [
      "A strong control on only part of the intended population can still leave major residual risk.",
      "Coverage only matters for physical controls.",
      "Coverage is the same as likelihood.",
      "Coverage removes the need for evidence.",
    ],
    answer: 0,
    explanation:
      "A control must apply to the intended scope to reduce the target risk effectively.",
  },
  {
    question:
      "What should happen after a control test identifies a material gap?",
    choices: [
      "Assign remediation, track it, and validate the corrected control state with evidence.",
      "Hide the result.",
      "Close the risk immediately.",
      "Assume the next test will pass.",
    ],
    answer: 0,
    explanation:
      "Control testing should lead to accountable remediation and evidence-based closure.",
  },
];

const checklistItems = [
  "Every control maps to a risk or control objective.",
  "Control function is identified.",
  "Administrative, technical, and physical domains are distinguished where useful.",
  "Design effectiveness is assessed.",
  "Operating effectiveness is assessed separately.",
  "Control scope or population is explicit.",
  "Control frequency is explicit.",
  "Control owner is named.",
  "Evidence owner is named where useful.",
  "Expected outcome is defined.",
  "Evidence source is current.",
  "Evidence quality is assessed.",
  "Coverage gaps are visible.",
  "Control failures have remediation owners.",
  "Due dates or milestones are tracked.",
  "Compensating controls are bounded and reviewed.",
  "Residual risk is reconsidered after control results.",
  "Closure requires validation evidence.",
  "Change triggers reopen the control review.",
  "Testing uses only safe, authorized evidence and does not require offensive activity.",
];

const takeaways = [
  "Security controls reduce risk by preventing, detecting, correcting, or helping recover from harmful events.",
  "Administrative, technical, and physical controls can all be important.",
  "Design effectiveness and operating effectiveness are different questions.",
  "A control can be well designed but poorly operated.",
  "Coverage matters as much as control strength.",
  "Evidence should prove the expected security outcome, not just task completion.",
  "Compensating controls should remain scoped, temporary, and reviewable.",
  "Failed controls need owners, remediation, escalation, and closure evidence.",
  "Safe control testing can use reviews, logs, approvals, recovery exercises, and synthetic evidence.",
  "The Control Effectiveness Review prepares you for A15.5 Compliance Framework Concepts.",
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
        Module A15
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

export default function SecurityControlsAndControlTestingPage() {
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
              A15.4
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Risk Management and Compliance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A15.4
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Security Controls and Control Testing
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A risk register becomes more useful when every risk can point to the
            controls that reduce it and the evidence showing whether those
            controls actually work. This lesson focuses on control design,
            operation, evidence, gaps, and remediation.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All testing in this lesson is safe and defensive. Students use
            fictional controls, synthetic evidence, configuration reviews,
            logs, approvals, recovery exercises, and other authorized evidence.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A15: Risk Management and Compliance"
          lessonTitle="Security Controls and Control Testing"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A15.4 Entry Readiness"
          items={[
            "I can explain how controls reduce residual risk.",
            "I can identify risk owners and control owners separately.",
            "I can read a risk register record and find the existing controls.",
            "I will use safe, fictional, authorized evidence only.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Control Is Useful Only If It Reduces the Risk You Think It Reduces"
        >
          <p className="leading-8">
            Security teams often have many controls: authentication, access
            reviews, encryption, monitoring, backups, supplier reviews, change
            approvals, and more. The important question is not how many controls
            exist. The important question is whether they are designed well,
            cover the intended scope, operate consistently, and produce evidence
            that supports the risk decision.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Control effectiveness = good design + reliable operation + appropriate coverage + current evidence.
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
          eyebrow="Control Functions"
          title="Controls Can Prevent, Detect, Correct, Recover, Deter, or Compensate"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {controlFunctions.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.type}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Examples: {item.examples}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Ask: {item.question}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Control Domains"
          title="Administrative, Technical, and Physical Controls Work Together"
        >
          <div className="grid gap-5 md:grid-cols-3">
            {controlDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.domain}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Examples: {item.examples}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Control Effectiveness"
          title="Design and Operation Are Different Questions"
        >
          <div className="grid gap-5">
            {designVsOperation.map((item) => (
              <article
                key={item.concept}
                className="rounded-3xl border border-blue-400/20 bg-blue-400/10 p-6"
              >
                <h3 className="text-xl font-black text-blue-50">
                  {item.concept}
                </h3>
                <p className="mt-3 leading-7 text-blue-100">
                  {item.question}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Strong evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.strongEvidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Weak evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.weakEvidence}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence"
          title="Different Evidence Sources Prove Different Things"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {testEvidence.map((item) => (
              <article
                key={item.evidence}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">
                  {item.evidence}
                </h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Proves: {item.proves}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Limitation: {item.limitation}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Test Design"
          title="A Control Test Needs Scope, Evidence, and a Pass Condition"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {testDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.dimension}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision States"
          title="Control Results Should Be Clear Enough to Affect Risk"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {controlStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.state}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Principles"
          title="Eight Principles for Defensible Control Testing"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Review: {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Control Testing Terms"
        >
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
          eyebrow="Fictional Control Review"
          title="Seven Northbridge Control Effectiveness Records"
        >
          <div className="grid gap-5">
            {records.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.state}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.control}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Mapped risk", item.risk],
                    ["Type", item.type],
                    ["Domain", item.domain],
                    ["Control objective", item.objective],
                    ["Control owner", item.owner],
                    ["Population / scope", item.population],
                    ["Frequency", item.frequency],
                    ["Design effectiveness", item.design],
                    ["Operating effectiveness", item.operation],
                    ["Evidence", item.evidence],
                    ["Gap", item.gap],
                    ["Residual risk", item.residual],
                    ["Next action", item.nextAction],
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

        <FakeDashboardCard
          title="Northbridge Control Effectiveness Dashboard"
          subtitle="Fictional design, operation, coverage, and evidence summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Temporary Workspace Control Has Incomplete Operating Evidence"
          severity="High"
          time="10:42"
          source="Fictional Control Effectiveness Review"
          details="CTL-207 is well designed, but operating evidence is incomplete for several recently closed workspaces. The control cannot be confidently rated Effective until the full in-scope population is validated."
          recommendation="Keep the control state Unknown, refresh cleanup evidence, review coverage, and update residual risk after current validation."
        />

        <Section
          eyebrow="Control Failure vs. Evidence Failure"
          title="Missing Evidence Is Not the Same as a Proven Control Failure"
        >
          <p className="leading-8">
            A failed test can prove the control did not operate as intended. A
            missing test result proves something different: the organization
            does not currently know. Mature assurance preserves that
            distinction.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5">
              <h3 className="font-black text-red-50">
                Proven operating failure
              </h3>
              <p className="mt-2 text-sm leading-7 text-red-100">
                Current evidence shows the expected control did not operate,
                missed scope, or failed its outcome.
              </p>
            </article>

            <article className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5">
              <h3 className="font-black text-yellow-50">
                Evidence gap
              </h3>
              <p className="mt-2 text-sm leading-7 text-yellow-100">
                Current evidence is incomplete, stale, or missing, so the
                reviewer cannot confidently judge operation.
              </p>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Control Testing Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Temporary Workspace Destruction"
          question="What is the strongest state for CTL-207?"
          evidence={[
            "The control objective and scope are clearly defined.",
            "The control design includes automated cleanup and project-close processing.",
            "Recent cleanup evidence is complete for some projects but missing for others.",
            "No current evidence proves that all in-scope recently closed workspaces were removed.",
          ]}
          options={[
            "Unknown until current evidence covers the full in-scope population.",
            "Effective because the design is strong.",
            "Ineffective because any missing evidence proves failure.",
            "Closed because the policy exists.",
          ]}
          bestAnswer={0}
          explanation="The design may be strong, but incomplete operating evidence means the organization cannot yet prove effectiveness across the full intended scope."
        />

        <Section
          eyebrow="Common Control Testing Mistakes"
          title="Eight Ways Control Assurance Becomes Misleading"
        >
          <div className="grid gap-5">
            {antiPatterns.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-red-100">
                      Why it fails: {item.problem}
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
          title="Scenario Decision Lab 1 — Strong Design, Incomplete Evidence"
          scenario="A temporary-workspace destruction control has a clear design and automated cleanup, but current evidence is incomplete across the full population."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Legacy Compensating Control"
          scenario="A legacy reporting system has a working network restriction that reduces exposure while modernization remains incomplete."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Control Effectiveness Review"
        >
          <p className="leading-8">
            Use fictional risks, controls, owners, evidence, and test results
            only. Focus on design, operation, coverage, and evidence quality.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twenty-five fictional control-review records.",
              "Give every record a stable CTL ID.",
              "Map each control to one or more risk IDs.",
              "Record the control objective.",
              "Classify control function.",
              "Classify administrative, technical, or physical domain.",
              "Record control owner.",
              "Record evidence owner where useful.",
              "Define the in-scope population.",
              "Define control frequency.",
              "Define expected outcome.",
              "Assess design effectiveness.",
              "Assess operating effectiveness.",
              "Record current evidence.",
              "Record evidence freshness.",
              "Record coverage gaps.",
              "Record exceptions.",
              "Record compensating controls where applicable.",
              "Classify state as Effective, Partially Effective, Ineffective, Not Implemented, Unknown, or Compensating.",
              "Record residual-risk effect.",
              "Assign remediation owner for gaps.",
              "Record due date or milestone.",
              "Record escalation criteria.",
              "Record closure criteria.",
              "Record closure evidence.",
              "Add change triggers.",
              "Include at least five preventive controls.",
              "Include at least five detective controls.",
              "Include at least three recovery controls.",
              "Include at least three compensating controls.",
              "Include at least three controls with partial or stale evidence.",
              "Include at least two controls that are well designed but operationally weak.",
              "Include at least two controls that operate consistently but have weak design coverage.",
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
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              Do not scan, probe, exploit, bypass, or test real systems,
              vendors, users, or accounts. Do not collect private credentials
              or confidential control evidence. Use fictional configuration
              reviews, synthetic logs, mock approvals, and safe recovery
              evidence only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Network Restriction"
          question="What is the strongest conclusion for CTL-202?"
          evidence={[
            "The network restriction reduces the legacy system's exposure.",
            "Current review evidence shows the restriction is operating within documented scope.",
            "The control does not solve obsolete trust, key ownership, or modernization gaps.",
            "A time-bounded modernization plan remains open.",
          ]}
          options={[
            "Compensating — useful and currently operating, but not sufficient to close the underlying legacy risk.",
            "Effective enough to close all legacy risks.",
            "Ineffective because compensating controls are never valid.",
            "Not Applicable because the system is legacy.",
          ]}
          bestAnswer={0}
          explanation="The control reduces risk and is operating, but it is intentionally temporary and does not eliminate the root legacy conditions."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Control Assurance Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard that explains how
            security controls are documented, tested, rated, remediated, and
            linked back to the risk register.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Control objective",
              "Mapped risks",
              "Control type",
              "Control owner",
              "Population / scope",
              "Frequency",
              "Design criteria",
              "Operating criteria",
              "Evidence requirements",
              "Evidence freshness",
              "Sampling or coverage logic",
              "Failure handling",
              "Compensating controls",
              "Remediation ownership",
              "Escalation criteria",
              "Closure evidence",
              "Risk-register update",
              "Leadership reporting",
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
            The strongest assurance standard should help reviewers decide what
            the control is supposed to do, whether it is doing it, how much of
            the intended scope it covers, and how the result changes residual
            risk.
          </p>
        </Section>

        <DefenderChecklist
          title="A15.4 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A15.4 Mini Quiz: Security Controls and Control Testing"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Control Effectiveness Review"
          prompt="Create the fourth artifact for your A15 Risk Register and Leadership Recommendation: a fictional Control Effectiveness Review with at least twenty-five records. Include CTL ID, mapped risk ID, control objective, function, control domain, owner, population/scope, frequency, expected outcome, design effectiveness, operating effectiveness, evidence, evidence freshness, coverage, gap, compensating control, state, residual-risk effect, remediation owner, due date, escalation, closure criteria, closure evidence, and change trigger."
          tips={[
            "Separate design from operation.",
            "Map every control to a risk or objective.",
            "Record population and coverage.",
            "Use evidence that proves the intended outcome.",
            "Keep compensating controls bounded.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A15.5?"
        >
          <p className="leading-8">
            A15.5 focuses on Compliance Framework Concepts. Before continuing,
            make sure you can explain how a risk, control objective, control,
            test result, and evidence record connect to each other.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish preventive, detective, corrective, recovery, and compensating controls.",
              "I can separate design effectiveness from operating effectiveness.",
              "I can explain why control coverage matters.",
              "I can identify when evidence is missing rather than assuming the control failed.",
              "I can explain how a control-test result changes residual risk and remediation priority.",
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
          title="How to Make the Control Effectiveness Review Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Map controls to risks",
                detail:
                  "Every control should clearly reduce one or more identified risk scenarios or support a specific security objective.",
              },
              {
                title: "Separate design and operation",
                detail:
                  "A control can be well designed but poorly operated, or consistently operated with weak scope.",
              },
              {
                title: "Show population and coverage",
                detail:
                  "Readers should know what systems, identities, data, suppliers, or processes are actually covered.",
              },
              {
                title: "Use outcome-based evidence",
                detail:
                  "Evidence should show whether the intended security result occurred, not only whether a task was completed.",
              },
              {
                title: "Show uncertainty",
                detail:
                  "Use Unknown when evidence is incomplete rather than forcing an Effective/Ineffective decision.",
              },
              {
                title: "Keep compensating controls temporary",
                detail:
                  "Show scope, owner, review cadence, and the condition that ends the arrangement.",
              },
              {
                title: "Link failures to remediation",
                detail:
                  "Control findings should produce owners, milestones, escalation, and closure evidence.",
              },
              {
                title: "Connect forward",
                detail:
                  "A15.5 will show how control objectives and evidence connect to broader compliance frameworks and control catalogs.",
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
            Control testing can be rigorous without offensive activity
          </h2>
          <p className="mt-3 leading-7">
            Do not scan, probe, exploit, bypass, or test real systems, vendors,
            users, or accounts. Do not collect credentials or confidential
            control evidence. All controls, tests, logs, approvals, owners, and
            findings in this lesson are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A15.4 Security Controls and Control Testing Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a model for control purpose, design effectiveness,
            operating effectiveness, scope, evidence, compensating controls,
            remediation, and closure. Next, A15.5 focuses on Compliance
            Framework Concepts.
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