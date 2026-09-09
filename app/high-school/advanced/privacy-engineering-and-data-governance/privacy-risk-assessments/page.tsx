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
const modulePath = `${trackPath}/privacy-engineering-and-data-governance`;
const previousLesson = `${modulePath}/retention-and-deletion-concepts`;
const nextLesson = `${modulePath}/data-governance-roles`;

const objectives = [
  "Explain privacy risk as the possibility that data practices could create harm, loss of trust, unexpected exposure, unfairness, loss of control, operational impact, or other adverse consequences for people or the organization.",
  "Build privacy risk scenarios that connect data, purpose, people, context, access, sharing, retention, inference, user expectations, control conditions, and business consequences.",
  "Evaluate impact, likelihood, evidence confidence, control strength, uncertainty, and residual privacy risk without reducing the decision to a single score.",
  "Choose defensible privacy risk treatments such as Minimize, Redesign, Restrict, Separate, Monitor, Accept, Block, or Close with clear ownership and review triggers.",
  "Build a Privacy Risk Assessment Register that becomes the sixth artifact in the A16 Privacy Engineering Review.",
];

const riskDimensions = [
  {
    dimension: "Unexpected use",
    question:
      "Could data be used in a way that differs materially from the original purpose or context?",
    example:
      "Support-case details are proposed for unrelated individual profiling.",
    consequence:
      "Loss of trust, unfair treatment, user surprise, governance failure.",
  },
  {
    dimension: "Excessive collection",
    question:
      "Does the system collect more data than the approved purpose reasonably needs?",
    example:
      "A support form keeps several unused demographic fields.",
    consequence:
      "More exposure, more retention burden, more misuse opportunity.",
  },
  {
    dimension: "Excessive access",
    question:
      "Can more people, systems, or suppliers access the data than necessary?",
    example:
      "Broad internal roles can view detailed case notes.",
    consequence:
      "Unauthorized internal exposure and weakened accountability.",
  },
  {
    dimension: "Overbroad sharing",
    question:
      "Does a recipient receive more information than needed for its role or purpose?",
    example:
      "A scheduling partner receives eight fields when four are sufficient.",
    consequence:
      "Unnecessary third-party exposure and purpose mismatch.",
  },
  {
    dimension: "Long retention",
    question:
      "Does data remain available longer than its continuing purpose supports?",
    example:
      "Individual activity events persist for years even though long-term reporting uses aggregates.",
    consequence:
      "Expanded exposure window and unnecessary historical profiling.",
  },
  {
    dimension: "Sensitive inference",
    question:
      "Does the system create a derived value that reveals more than the source data?",
    example:
      "Ordinary course activity becomes an individual engagement indicator.",
    consequence:
      "Higher sensitivity, unfair conclusions, stronger expectation mismatch.",
  },
  {
    dimension: "Weak deletion evidence",
    question:
      "Can the organization prove the intended lifecycle completed?",
    example:
      "A supplier contract describes deletion, but current supplier-side evidence is incomplete.",
    consequence:
      "Unknown residual exposure and false closure confidence.",
  },
  {
    dimension: "Choice mismatch",
    question:
      "Does the user-facing explanation or choice differ from actual system behavior?",
    example:
      "The interface describes limited partner sharing while the backend sends additional fields.",
    consequence:
      "Transparency failure and user expectation mismatch.",
  },
];

const impactDimensions = [
  {
    impact: "Loss of confidentiality",
    description:
      "Information becomes visible to people, systems, or organizations that should not receive it.",
    example:
      "Sensitive support notes become available to a broad internal audience.",
  },
  {
    impact: "Loss of control",
    description:
      "People cannot reasonably understand or influence an optional data use that affects them.",
    example:
      "Optional research participation is bundled into a required service.",
  },
  {
    impact: "Unfair or harmful inference",
    description:
      "A derived value influences a decision without sufficient context, evidence, or purpose.",
    example:
      "A behavioral indicator is treated as a reliable individual judgment when it was designed only for aggregate analysis.",
  },
  {
    impact: "Loss of trust",
    description:
      "The system behaves in a way that conflicts with reasonable expectations.",
    example:
      "Support data is reused for unrelated purposes that were never explained.",
  },
  {
    impact: "Operational impact",
    description:
      "Weak governance creates service disruption, rework, investigation, customer support burden, or remediation cost.",
    example:
      "A broad data integration must be redesigned after a late privacy review.",
  },
  {
    impact: "Compliance / governance impact",
    description:
      "The organization cannot demonstrate that data use, retention, sharing, or deletion follows approved internal or external requirements.",
    example:
      "Deletion decisions cannot be traced to retention rules or evidence.",
  },
  {
    impact: "Security amplification",
    description:
      "Unnecessary data or copies increase the consequence of a future security event.",
    example:
      "A breach exposes years of individual-level data that the organization no longer needed.",
  },
];

const likelihoodFactors = [
  {
    factor: "Current exposure",
    explanation:
      "More systems, recipients, copies, or users can increase the number of ways the privacy concern could occur.",
    evidence:
      "Access review, data-flow map, supplier list, inventory.",
  },
  {
    factor: "Control strength",
    explanation:
      "Strong preventive, detective, lifecycle, and governance controls can reduce likelihood.",
    evidence:
      "Access-control review, deletion evidence, interface validation, product controls.",
  },
  {
    factor: "Evidence confidence",
    explanation:
      "Low-quality or stale evidence should increase uncertainty rather than being treated as proof that risk is low.",
    evidence:
      "Audit trail, current system record, owner review, supplier assurance.",
  },
  {
    factor: "Change",
    explanation:
      "New suppliers, new data fields, new purpose, new inference, longer retention, or new users can increase likelihood.",
    evidence:
      "Release history, architecture change, product roadmap, supplier change.",
  },
  {
    factor: "History",
    explanation:
      "Recurring lifecycle failures, stale inventories, repeated exceptions, or prior incidents can change the assessment.",
    evidence:
      "Issue history, exception register, incident summary, control test.",
  },
  {
    factor: "Dependency",
    explanation:
      "The more the business depends on one data practice or supplier, the harder it may be to reduce or avoid the risk quickly.",
    evidence:
      "Business dependency map, supplier criticality review, product architecture.",
  },
  {
    factor: "Human process",
    explanation:
      "Manual handling, unclear ownership, or inconsistent approval can make privacy controls less reliable.",
    evidence:
      "Workflow review, ownership matrix, exception history.",
  },
];

const controlCategories = [
  {
    category: "Minimization controls",
    examples:
      "Field removal, reduced precision, aggregation, copy reduction, shorter retention.",
    effect:
      "Reduces the amount of data and exposure before other controls are needed.",
  },
  {
    category: "Access controls",
    examples:
      "Role-based access, purpose-based restriction, temporary access, review.",
    effect:
      "Reduces who can use or see the data.",
  },
  {
    category: "Sharing controls",
    examples:
      "Purpose-specific schemas, supplier scope limits, recipient approval.",
    effect:
      "Reduces overbroad internal or third-party exposure.",
  },
  {
    category: "Lifecycle controls",
    examples:
      "Retention rules, automatic expiry, project closeout, deletion evidence.",
    effect:
      "Reduces unnecessary persistence and historical exposure.",
  },
  {
    category: "Transparency controls",
    examples:
      "Clear explanation, just-in-time notice, consistent settings.",
    effect:
      "Improves alignment between user expectations and actual system behavior.",
  },
  {
    category: "Governance controls",
    examples:
      "Owner approval, change triggers, exceptions, review cadence, evidence.",
    effect:
      "Makes important privacy decisions accountable and reviewable.",
  },
  {
    category: "Security controls",
    examples:
      "Encryption, logging, segmentation, identity controls, secure transfer.",
    effect:
      "Protects necessary data but does not replace purpose or minimization.",
  },
];

const decisionStates = [
  {
    state: "Minimize",
    meaning:
      "Reduce the data, precision, access, sharing, copies, inference, or retention.",
    use:
      "Best when unnecessary data is driving the risk.",
  },
  {
    state: "Redesign",
    meaning:
      "Change the workflow or architecture so the privacy risk is reduced by design.",
    use:
      "Best when current system structure creates recurring privacy exposure.",
  },
  {
    state: "Restrict",
    meaning:
      "Keep the data but narrow access, sharing, recipient scope, or operational use.",
    use:
      "Best when the data is necessary but current exposure is too broad.",
  },
  {
    state: "Separate",
    meaning:
      "Keep materially different purposes, audiences, datasets, or processing paths distinct.",
    use:
      "Best when purpose or context is being mixed.",
  },
  {
    state: "Monitor",
    meaning:
      "Current residual risk is acceptable under current controls but remains relevant.",
    use:
      "Best when evidence is current and the remaining risk is within tolerance.",
  },
  {
    state: "Accept",
    meaning:
      "An authorized owner formally accepts a bounded residual privacy risk.",
    use:
      "Best only when the residual risk is understood, evidenced, owned, and reviewable.",
  },
  {
    state: "Block",
    meaning:
      "Do not approve the data practice until a material privacy condition is resolved.",
    use:
      "Best when evidence, purpose, authority, control strength, or user impact is insufficient.",
  },
  {
    state: "Closed",
    meaning:
      "Objective evidence shows the privacy concern has been removed or reduced to the approved target state.",
    use:
      "Best only after closure evidence exists.",
  },
];

const riskFields = [
  {
    field: "PRA ID",
    purpose:
      "Stable identifier for the privacy risk assessment.",
    example:
      "PRA-601",
  },
  {
    field: "Linked artifact IDs",
    purpose:
      "Connects the risk to context, data, minimization, expectation, and retention evidence.",
    example:
      "CTX-P03 / DATA-205 / MIN-305 / EXP-402 / RET-505",
  },
  {
    field: "Privacy scenario",
    purpose:
      "Explains what data practice could create what consequence and why.",
    example:
      "Expanded partner sharing may expose unnecessary profile data beyond the scheduling purpose.",
  },
  {
    field: "People / context",
    purpose:
      "Identifies who is affected and the service context.",
    example:
      "Students using the scheduling service",
  },
  {
    field: "Impact",
    purpose:
      "Rates the consequence if the privacy concern occurs.",
    example:
      "Medium-High",
  },
  {
    field: "Likelihood",
    purpose:
      "Estimates plausibility using current evidence and controls.",
    example:
      "Medium",
  },
  {
    field: "Controls",
    purpose:
      "Shows current safeguards and design decisions.",
    example:
      "Encrypted transfer, schema validation, partner review",
  },
  {
    field: "Evidence confidence",
    purpose:
      "Shows how much trust to place in the current conclusion.",
    example:
      "Moderate",
  },
  {
    field: "Residual risk",
    purpose:
      "Explains what remains after current controls.",
    example:
      "Moderate",
  },
  {
    field: "Owner",
    purpose:
      "Names the accountable business or data owner.",
    example:
      "Integration Product Owner",
  },
  {
    field: "Treatment",
    purpose:
      "Records the chosen response.",
    example:
      "Minimize / Restrict",
  },
  {
    field: "Review trigger",
    purpose:
      "Defines what should reopen the assessment.",
    example:
      "New partner field, new purpose, retention extension, supplier change",
  },
];

const northbridgeRecords = [
  {
    id: "PRA-601",
    linked:
      "CTX-P01 / DATA-201 / MIN-301 / EXP-407",
    scenario:
      "The support profile collects three fields that are not used by the current service, increasing unnecessary exposure and future secondary-use risk.",
    people:
      "Students using the support portal",
    impact:
      "Medium",
    likelihood:
      "High",
    controls:
      "Normal access controls and encrypted storage",
    confidence:
      "High",
    inherent:
      "Medium-High",
    residual:
      "Medium until fields are removed",
    owner:
      "Student Services Product Owner",
    treatment:
      "Minimize",
    recommendation:
      "Remove the unused fields and reconcile downstream copies.",
    state:
      "Treat",
    trigger:
      "New support feature or new field requirement",
  },
  {
    id: "PRA-602",
    linked:
      "DATA-202 / MIN-302 / EXP-405 / RET-502",
    scenario:
      "Sensitive support case notes could be exposed beyond the approved support audience if access scope expands.",
    people:
      "Students represented in support records",
    impact:
      "High",
    likelihood:
      "Low-Medium",
    controls:
      "Narrow role access, restricted archive, current owner review",
    confidence:
      "High",
    inherent:
      "High",
    residual:
      "Moderate",
    owner:
      "Student Services Data Owner",
    treatment:
      "Restrict / Monitor",
    recommendation:
      "Maintain narrow role access and reopen review after role or purpose changes.",
    state:
      "Monitor",
    trigger:
      "New support role, new analytics use, supplier sharing, archive redesign",
  },
  {
    id: "PRA-603",
    linked:
      "DATA-203 / MIN-303 / EXP-403 / RET-503",
    scenario:
      "Individual course activity events could remain available longer than the bounded analytics purpose requires, creating unnecessary historical exposure.",
    people:
      "Students represented in learning analytics",
    impact:
      "Medium-High",
    likelihood:
      "Medium-High",
    controls:
      "Restricted analytics access, aggregate reporting, project register",
    confidence:
      "Moderate",
    inherent:
      "High",
    residual:
      "Moderate-High until retention is standardized",
    owner:
      "Learning Analytics Owner",
    treatment:
      "Minimize / Redesign lifecycle",
    recommendation:
      "Standardize shorter individual-level retention and preserve aggregate trends only.",
    state:
      "Treat",
    trigger:
      "New project, new analytics purpose, retention change, workspace change",
  },
  {
    id: "PRA-604",
    linked:
      "DATA-204 / MIN-304",
    scenario:
      "An individual engagement indicator could create a sensitive inference that is not required for the current aggregate program-improvement purpose.",
    people:
      "Students represented by derived indicators",
    impact:
      "High",
    likelihood:
      "Medium",
    controls:
      "Restricted analytics access and bounded project scope",
    confidence:
      "High",
    inherent:
      "High",
    residual:
      "Medium-High if persisted operationally",
    owner:
      "Learning Analytics Owner",
    treatment:
      "Avoid / Minimize inference",
    recommendation:
      "Do not persist individual-level engagement indicators outside separately approved bounded research.",
    state:
      "Treat",
    trigger:
      "New individual decision use or new model output",
  },
  {
    id: "PRA-605",
    linked:
      "CTX-P03 / DATA-205 / MIN-305 / EXP-402 / RET-505",
    scenario:
      "The scheduling partner receives more profile data than the current scheduling purpose supports, while external deletion evidence remains incomplete.",
    people:
      "Students using partner scheduling",
    impact:
      "Medium-High",
    likelihood:
      "Medium",
    controls:
      "Encrypted transport, approved partner, certificate lifecycle, interface schema",
    confidence:
      "Moderate",
    inherent:
      "High",
    residual:
      "Moderate-High",
    owner:
      "Integration Product Owner",
    treatment:
      "Minimize / Restrict / Conditional",
    recommendation:
      "Reduce the payload to the approved fields and refresh supplier lifecycle evidence.",
    state:
      "Treat",
    trigger:
      "Partner change, schema change, new purpose, retention extension",
  },
  {
    id: "PRA-606",
    linked:
      "DATA-206 / MIN-306 / EXP-404 / RET-506",
    scenario:
      "Temporary research data could persist after project closeout if workspace and export deletion are not fully evidenced.",
    people:
      "Individuals represented in the de-identified research sample",
    impact:
      "Medium",
    likelihood:
      "Low-Medium",
    controls:
      "Project expiry, restricted workspace, deletion requirement",
    confidence:
      "High until closeout",
    inherent:
      "Medium",
    residual:
      "Low-Moderate during project; Unknown after closeout until evidence arrives",
    owner:
      "Research Program Owner",
    treatment:
      "Conditional / Monitor",
    recommendation:
      "Require deletion and workspace-reconciliation evidence at closeout.",
    state:
      "Conditional",
    trigger:
      "Project extension, closeout failure, new data source",
  },
  {
    id: "PRA-607",
    linked:
      "DATA-207 / MIN-307 / EXP-406 / RET-507",
    scenario:
      "Aggregate quality reporting could become more privacy-sensitive if individual drill-down or source export is introduced.",
    people:
      "Support-service users represented in aggregate metrics",
    impact:
      "Low-Medium",
    likelihood:
      "Low",
    controls:
      "Strong aggregation, routine source export disabled, role-based dashboard access",
    confidence:
      "High",
    inherent:
      "Medium",
    residual:
      "Low",
    owner:
      "Operations Analytics Owner",
    treatment:
      "Monitor",
    recommendation:
      "Maintain aggregate-only reporting and reopen review before individual drill-down.",
    state:
      "Monitor",
    trigger:
      "New drill-down, source export, small-group reporting, new audience",
  },
];

const dashboardMetrics = [
  {
    label: "Privacy risks",
    value: "7",
    note: "Collection, access, retention, inference, partner, research, and aggregate-reporting risks",
  },
  {
    label: "Treat",
    value: "4",
    note: "Unused fields, analytics retention, individual inference, and partner scope require active change",
  },
  {
    label: "Monitor / Conditional",
    value: "3",
    note: "Support access, research closeout, and aggregate reporting remain bounded under current controls",
  },
  {
    label: "High-impact risks",
    value: "3",
    note: "Support notes, derived inference, and partner sharing can create significant privacy consequences",
  },
];

const logs = [
  "[08:14] PRA-601 risk=UNUSED_FIELDS impact=MEDIUM likelihood=HIGH treatment=MINIMIZE state=TREAT",
  "[08:36] PRA-602 risk=CASE_NOTE_ACCESS impact=HIGH likelihood=LOW_MED state=MONITOR",
  "[08:58] PRA-603 risk=ANALYTICS_RETENTION impact=MED_HIGH likelihood=MED_HIGH state=TREAT",
  "[09:20] PRA-604 risk=DERIVED_INFERENCE impact=HIGH likelihood=MEDIUM treatment=AVOID state=TREAT",
  "[09:42] PRA-605 risk=PARTNER_SCOPE impact=MED_HIGH confidence=MODERATE state=TREAT",
  "[10:04] PRA-606 risk=RESEARCH_CLOSEOUT impact=MEDIUM evidence=FUTURE state=CONDITIONAL",
  "[10:26] PRA-607 risk=AGGREGATE_DRILLDOWN impact=LOW_MED likelihood=LOW state=MONITOR",
];

const antiPatterns = [
  {
    title: "Risk equals data sensitivity only",
    problem:
      "The assessment labels data Sensitive and stops there.",
    better:
      "Connect sensitivity to purpose, context, people, controls, likelihood, and consequence.",
  },
  {
    title: "One privacy score decides everything",
    problem:
      "A number replaces evidence, uncertainty, ownership, and treatment reasoning.",
    better:
      "Use scores as summaries, not as the decision itself.",
  },
  {
    title: "Security control means low privacy risk",
    problem:
      "Encryption is treated as proof that collection, sharing, retention, or purpose is appropriate.",
    better:
      "Evaluate purpose and minimization separately from security strength.",
  },
  {
    title: "Low evidence treated as low risk",
    problem:
      "Unknown supplier or deletion evidence is interpreted as reassurance.",
    better:
      "Keep uncertainty visible and avoid stronger conclusions than the evidence supports.",
  },
  {
    title: "Impact only considers breach",
    problem:
      "The team ignores unfair inference, unexpected use, loss of control, trust, or governance impact.",
    better:
      "Consider multiple privacy impact dimensions.",
  },
  {
    title: "Risk owner is the privacy team",
    problem:
      "Advisory reviewers are treated as owners of every business data decision.",
    better:
      "Assign the accountable data, product, or business owner while privacy teams advise and govern.",
  },
  {
    title: "Risk closed when treatment starts",
    problem:
      "A remediation ticket is treated as proof that residual risk is reduced.",
    better:
      "Require objective closure evidence.",
  },
  {
    title: "No change triggers",
    problem:
      "The assessment stays unchanged after new purpose, supplier, data, access, or retention changes.",
    better:
      "Define event-driven reassessment triggers.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Treat the partner risk by reducing the payload to the approved scheduling fields and refreshing supplier-side lifecycle evidence before lowering residual risk.",
    outcome:
      "Best. The decision addresses both unnecessary sharing and evidence uncertainty.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark the risk Low because the connection is encrypted.",
    outcome:
      "Risky. Encryption does not solve purpose, scope, or external lifecycle uncertainty.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Accept the risk automatically because the partner is already approved.",
    outcome:
      "Risky. Existing approval does not replace current purpose and evidence review.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Avoid persistent individual-level engagement indicators unless a separate approved purpose requires them; use aggregate trends for the current program-improvement goal.",
    outcome:
      "Best. The treatment removes unnecessary sensitive inference while preserving the legitimate business purpose.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep the indicator because the source events already exist.",
    outcome:
      "Risky. Derived data can create a new privacy risk even when source collection is valid.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Keep the indicator but classify it Internal.",
    outcome:
      "Risky. A label does not address whether the individual inference is needed.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is privacy risk?",
    choices: [
      "The possibility that data practices could create adverse consequences for people or the organization through collection, use, sharing, access, inference, retention, weak controls, or expectation mismatch.",
      "Only the chance of a data breach.",
      "Only legal penalties.",
      "Only a data classification label.",
    ],
    answer: 0,
    explanation:
      "Privacy risk is broader than breach risk and includes purpose, context, use, exposure, inference, lifecycle, and trust.",
  },
  {
    question:
      "What should a strong privacy risk scenario include?",
    choices: [
      "Data practice, people/context, current controls, plausible event or condition, and meaningful consequence.",
      "Only a severity number.",
      "Only the data classification.",
      "Only the system name.",
    ],
    answer: 0,
    explanation:
      "A strong scenario explains what could happen, to whom, in what context, and why it matters.",
  },
  {
    question:
      "How should low evidence confidence affect the assessment?",
    choices: [
      "Increase visible uncertainty and prevent stronger conclusions than the evidence supports.",
      "Automatically make the risk Low.",
      "Automatically make the risk Closed.",
      "Remove the risk from the register.",
    ],
    answer: 0,
    explanation:
      "Weak evidence should reduce confidence rather than create false reassurance.",
  },
  {
    question:
      "Why is encryption not enough to lower every privacy risk?",
    choices: [
      "Encryption protects necessary data but does not prove that collection, use, sharing, inference, or retention is appropriate.",
      "Encryption is never useful.",
      "Encryption only works for Public data.",
      "Encryption removes ownership.",
    ],
    answer: 0,
    explanation:
      "Security controls and privacy-purpose decisions answer different questions.",
  },
  {
    question:
      "What is residual privacy risk?",
    choices: [
      "The privacy risk that remains after current controls and treatment are considered.",
      "The risk before any controls.",
      "A supplier contract.",
      "A data inventory field.",
    ],
    answer: 0,
    explanation:
      "Residual risk is what remains after safeguards and treatment are accounted for.",
  },
  {
    question:
      "When is Block an appropriate privacy risk treatment?",
    choices: [
      "When purpose, evidence, authority, control strength, or user impact is insufficient to approve the data practice.",
      "Whenever a product uses any data.",
      "Only after an incident.",
      "Whenever encryption is missing from a mock scenario.",
    ],
    answer: 0,
    explanation:
      "Block is appropriate when the current privacy conditions do not support responsible approval.",
  },
  {
    question:
      "What is strongest for closing a privacy risk?",
    choices: [
      "Objective evidence that the concern was removed or reduced to the approved target state.",
      "A remediation ticket was opened.",
      "The risk is old.",
      "The owner says it is probably fixed.",
    ],
    answer: 0,
    explanation:
      "Closure should be evidence-based, not activity-based.",
  },
];

const checklistItems = [
  "The privacy risk scenario is written in business language.",
  "People or groups affected are identified.",
  "The service context is identified.",
  "Data categories are identified.",
  "Purpose is documented.",
  "Access and sharing are considered.",
  "Retention is considered.",
  "Inference is considered.",
  "User expectation is considered.",
  "Impact is evaluated.",
  "Likelihood is evaluated.",
  "Current controls are documented.",
  "Evidence sources are documented.",
  "Evidence confidence is stated.",
  "Inherent risk is distinguished from residual risk.",
  "Uncertainty remains visible.",
  "Treatment options are compared.",
  "Accountable owner is named.",
  "Review triggers are defined.",
  "Closure requires objective evidence.",
  "All examples remain fictional or synthetic.",
];

const takeaways = [
  "Privacy risk is broader than data-breach risk.",
  "A strong privacy risk scenario connects data, people, purpose, context, controls, and consequence.",
  "Impact and likelihood should be reasoned separately.",
  "Low evidence confidence should increase uncertainty, not create reassurance.",
  "Security controls do not replace minimization, purpose, retention, or user-expectation review.",
  "Derived inference can create new privacy risk even when source data collection is legitimate.",
  "Residual privacy risk should remain visible after treatment.",
  "Risk ownership belongs with the accountable business, product, or data role.",
  "Block and Closed are governance states that require evidence and authority.",
  "The Privacy Risk Assessment Register prepares you for A16.7 Data Governance Roles.",
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
        Module A16
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

export default function PrivacyRiskAssessmentsPage() {
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
              A16.6
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Privacy Engineering and Data Governance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A16.6
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Privacy Risk Assessments
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Privacy risk assessment connects data practices to real consequences.
            This lesson examines collection, use, sharing, access, retention,
            inference, evidence, controls, expectations, uncertainty, ownership,
            and residual privacy risk so teams can make defensible decisions.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All risk scenarios, data records, people, systems, suppliers, and
            evidence are fictional or synthetic. This lesson is educational and
            does not provide legal advice.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A16: Privacy Engineering and Data Governance"
          lessonTitle="Privacy Risk Assessments"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A16.6 Entry Readiness"
          items={[
            "I can explain a data practice in terms of purpose, access, sharing, retention, and user expectation.",
            "I can distinguish strong evidence from partial or stale evidence.",
            "I understand that privacy risk can exist even when security controls are strong.",
            "I will use only fictional or synthetic risk scenarios.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Privacy Risk Is About Consequence, Not Just Data Labels"
        >
          <p className="leading-8">
            A classification label tells you how data should be handled, but it
            does not tell you the full risk. Privacy risk emerges from what the
            organization does with data, how people are affected, how strong the
            controls are, how confident the evidence is, and what remains after
            treatment.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              The strongest assessment explains why the data practice matters, not merely how severe the label sounds.
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
          eyebrow="Privacy Risk Dimensions"
          title="Eight Ways Data Practices Can Create Privacy Risk"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {riskDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.dimension}
                </h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  Ask: {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Possible consequence: {item.consequence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Impact"
          title="Privacy Impact Is Broader Than Confidentiality"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {impactDimensions.map((item) => (
              <article
                key={item.impact}
                className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5"
              >
                <h3 className="font-black text-red-50">{item.impact}</h3>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  {item.description}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Likelihood"
          title="Estimate Plausibility From Current Conditions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {likelihoodFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.factor}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.explanation}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Privacy Controls"
          title="Different Controls Change Different Parts of the Risk"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {controlCategories.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.category}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Examples: {item.examples}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Risk effect: {item.effect}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision States"
          title="Choose a Treatment That Matches the Actual Problem"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {decisionStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.state}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Best use: {item.use}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Assessment Anatomy"
          title="What a Reviewable Privacy Risk Record Should Contain"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {riskFields.map((item) => (
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

        <Section
          eyebrow="Inherent and Residual Risk"
          title="Controls Change the Risk, but Rarely Make It Disappear"
        >
          <p className="leading-8">
            Inherent privacy risk describes the concern before current controls
            are considered. Residual privacy risk describes what remains after
            minimization, access control, lifecycle controls, transparency,
            governance, security, and other treatment are considered.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5">
              <h3 className="font-black text-red-50">Inherent risk</h3>
              <p className="mt-2 text-sm leading-7 text-red-100">
                What is the privacy concern before current safeguards?
              </p>
            </article>

            <article className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <h3 className="font-black text-cyan-50">Controls</h3>
              <p className="mt-2 text-sm leading-7 text-cyan-100">
                Which design and governance measures reduce impact, likelihood,
                exposure, or uncertainty?
              </p>
            </article>

            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-50">Residual risk</h3>
              <p className="mt-2 text-sm leading-7 text-emerald-100">
                What privacy risk remains after current treatment?
              </p>
            </article>
          </div>
        </Section>

        <Section
          eyebrow="Fictional Risk Register"
          title="Seven Northbridge Privacy Risk Assessments"
        >
          <div className="grid gap-5">
            {northbridgeRecords.map((item) => (
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
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 font-mono text-xs font-black text-purple-100">
                    {item.linked}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.scenario}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["People / context", item.people],
                    ["Impact", item.impact],
                    ["Likelihood", item.likelihood],
                    ["Current controls", item.controls],
                    ["Evidence confidence", item.confidence],
                    ["Inherent privacy risk", item.inherent],
                    ["Residual privacy risk", item.residual],
                    ["Owner", item.owner],
                    ["Treatment", item.treatment],
                    ["Recommendation", item.recommendation],
                    ["Review trigger", item.trigger],
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
          title="Northbridge Privacy Risk Dashboard"
          subtitle="Fictional impact, likelihood, evidence, treatment, and residual-risk summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Partner Privacy Risk Remains Moderate-High"
          severity="High"
          time="09:42"
          source="Fictional Privacy Risk Review"
          details="PRA-605 combines two concerns: the scheduling partner receives more profile fields than the current purpose supports, and current supplier-side lifecycle evidence is incomplete. Encryption reduces transfer risk but does not resolve these privacy issues."
          recommendation="Keep the risk in Treat. Reduce the payload to approved fields and refresh supplier-side deletion evidence before lowering residual risk."
        />

        <FakeLogPanel
          title="Fictional Privacy Risk Assessment Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Partner Privacy Risk"
          question="What is the strongest current treatment for PRA-605?"
          evidence={[
            "The partner receives eight fields while the validated scheduling purpose supports four.",
            "Encrypted transport is current.",
            "The supplier relationship is approved.",
            "Supplier-side deletion evidence is incomplete.",
            "No current purpose supports the extra four fields.",
          ]}
          options={[
            "Minimize the partner payload to the approved fields and refresh supplier lifecycle evidence before lowering residual risk.",
            "Mark the risk Low because encryption is current.",
            "Accept the risk automatically because the supplier is approved.",
            "Close the risk because no incident has occurred.",
          ]}
          bestAnswer={0}
          explanation="The strongest treatment addresses unnecessary sharing and evidence uncertainty directly rather than using security controls or prior approval as substitutes."
        />

        <Section
          eyebrow="Common Privacy Risk Mistakes"
          title="Eight Ways Privacy Risk Assessments Become Unreliable"
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
          title="Scenario Decision Lab 1 — Partner Scope and Lifecycle Evidence"
          scenario="The scheduling partner receives more data than the current purpose supports, while supplier-side deletion evidence is only partial."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Unnecessary Sensitive Inference"
          scenario="A learning analytics project creates an individual engagement indicator, but the current approved program-improvement purpose only needs aggregate trends."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Privacy Risk Assessment Register"
        >
          <p className="leading-8">
            Use your fictional A16 artifacts to build structured privacy risks
            that connect data practices to people, consequences, controls,
            evidence, uncertainty, ownership, treatment, and residual risk.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twenty-five fictional privacy risk records.",
              "Give every record a stable PRA ID.",
              "Link each risk to relevant CTX-P, DATA, MIN, EXP, or RET IDs.",
              "Write the privacy risk scenario.",
              "Name the people or groups affected.",
              "Name the service or product context.",
              "Record the data category.",
              "Record the current purpose.",
              "Record collection concerns.",
              "Record access concerns.",
              "Record sharing or supplier concerns.",
              "Record retention concerns.",
              "Record inference concerns.",
              "Record user-expectation concerns.",
              "Rate impact.",
              "Explain impact reasoning.",
              "Rate likelihood.",
              "Explain likelihood reasoning.",
              "Record current controls.",
              "Record evidence sources.",
              "Rate evidence confidence.",
              "Record inherent privacy risk.",
              "Record residual privacy risk.",
              "Name the accountable risk owner.",
              "Compare at least two treatment options.",
              "Choose a treatment.",
              "Set a priority.",
              "Set a due date or milestone.",
              "Define escalation criteria.",
              "Define review triggers.",
              "Define closure evidence.",
              "Include at least five Minimize treatments.",
              "Include at least three Redesign treatments.",
              "Include at least three Restrict treatments.",
              "Include at least three Separate treatments.",
              "Include at least three Monitor risks.",
              "Include at least two Block decisions.",
              "Include at least two Accepted Risk examples with bounded authority.",
              "Include at least two Closed risks with objective closure evidence.",
              "Include at least three supplier-related privacy risks.",
              "Include at least three derived-data or inference risks.",
              "Include at least three retention or deletion-evidence risks.",
              "Include at least three user-expectation or transparency risks.",
              "Include at least three records with Low or Moderate evidence confidence.",
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
              Use fictional or synthetic scenarios only. Do not inspect real
              people, private accounts, confidential datasets, real supplier
              systems, or restricted organizational records. Do not attempt to
              infer sensitive traits about real individuals.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Derived Engagement Indicator"
          question="What is the strongest current treatment for PRA-604?"
          evidence={[
            "The current approved purpose is aggregate program improvement.",
            "The system can produce aggregate trends without an individual engagement indicator.",
            "The individual indicator creates a more sensitive derived interpretation.",
            "No current operational decision requires the individual-level value.",
          ]}
          options={[
            "Avoid persistent individual-level inference and use aggregate outputs for the current purpose.",
            "Keep the individual indicator because the source events already exist.",
            "Keep the indicator but lower its classification.",
            "Mark the risk Closed because the data is internal.",
          ]}
          bestAnswer={0}
          explanation="The current purpose does not require individual-level inference, so avoiding that inference is the strongest privacy-by-design treatment."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Privacy Risk Governance Standard"
        >
          <p className="leading-8">
            Create a fictional standard describing how teams identify, assess,
            own, treat, monitor, accept, block, and close privacy risks across
            products, analytics, suppliers, retention, and user-facing
            experiences.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Risk scenario standard",
              "People / context",
              "Impact dimensions",
              "Likelihood factors",
              "Evidence confidence",
              "Inherent risk",
              "Control mapping",
              "Residual risk",
              "Treatment options",
              "Priority method",
              "Risk owner",
              "Control owner",
              "Remediation owner",
              "Acceptance authority",
              "Supplier dependency",
              "Review cadence",
              "Change triggers",
              "Escalation criteria",
              "Closure evidence",
              "Decision history",
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
            The strongest standard should guide thoughtful judgment rather than
            force every privacy risk into one mechanical score.
          </p>
        </Section>

        <DefenderChecklist
          title="A16.6 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A16.6 Mini Quiz: Privacy Risk Assessments"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Privacy Risk Assessment Register"
          prompt="Create the sixth artifact for your A16 Privacy Engineering Review: a fictional Privacy Risk Assessment Register with at least twenty-five records. Include PRA ID, linked CTX-P/DATA/MIN/EXP/RET IDs, privacy risk scenario, people affected, service context, data category, current purpose, collection/access/sharing/retention/inference/expectation concerns, impact, impact reasoning, likelihood, likelihood reasoning, current controls, evidence, evidence confidence, inherent privacy risk, residual privacy risk, risk owner, treatment options, selected treatment, priority, milestone/due date, escalation criteria, review triggers, and closure evidence."
          tips={[
            "Write risks in business and people terms.",
            "Keep impact and likelihood separate.",
            "Use evidence confidence explicitly.",
            "Do not let encryption substitute for purpose or minimization.",
            "Keep uncertainty visible.",
            "Use fictional or synthetic records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A16.7?"
        >
          <p className="leading-8">
            A16.7 focuses on Data Governance Roles. Before continuing, make sure
            you can explain which decisions belong to the risk owner, data
            owner, system owner, control owner, privacy team, and business
            leader.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can write a privacy risk scenario that explains people, context, data practice, and consequence.",
              "I can separate impact, likelihood, evidence confidence, inherent risk, and residual risk.",
              "I can choose treatment based on the privacy problem rather than on a single score.",
              "I can explain why security controls do not solve every privacy risk.",
              "I can keep risk open when evidence, treatment, or closure conditions remain incomplete.",
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
          title="How to Make the Privacy Risk Assessment Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Write a real scenario",
                detail:
                  "Avoid labels such as “privacy risk: High.” Explain the data practice, affected people, consequence, and context.",
              },
              {
                title: "Show reasoning",
                detail:
                  "Explain why impact and likelihood have their current ratings.",
              },
              {
                title: "Show evidence confidence",
                detail:
                  "Do not let stale or partial evidence support a stronger conclusion than it deserves.",
              },
              {
                title: "Show controls by purpose",
                detail:
                  "Minimization, access, lifecycle, transparency, governance, and security controls reduce different parts of risk.",
              },
              {
                title: "Show residual risk",
                detail:
                  "Treatment changes risk; it rarely removes every uncertainty.",
              },
              {
                title: "Show ownership",
                detail:
                  "Make clear who owns the business consequence and who owns the treatment work.",
              },
              {
                title: "Show decision triggers",
                detail:
                  "New data, purpose, suppliers, inference, retention, or access should reopen assessment.",
              },
              {
                title: "Connect forward",
                detail:
                  "A16.7 will clarify the governance roles responsible for these decisions.",
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
            Privacy risk assessment uses synthetic evidence and fictional people only
          </h2>
          <p className="mt-3 leading-7">
            Do not inspect, identify, profile, infer sensitive traits about, or
            investigate real people. Do not access private accounts,
            confidential datasets, real supplier systems, or restricted
            organizational records. All risk scenarios and evidence in this
            lesson are fictional and educational.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A16.6 Privacy Risk Assessments Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a structured model for privacy risk scenarios, impact,
            likelihood, controls, evidence confidence, inherent risk, residual
            risk, treatment, ownership, and closure. Next, A16.7 focuses on Data
            Governance Roles.
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