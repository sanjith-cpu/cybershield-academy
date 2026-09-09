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
const previousLesson = `${modulePath}/security-controls-and-control-testing`;
const nextLesson = `${modulePath}/audit-evidence-and-documentation`;

const objectives = [
  "Explain the purpose of cybersecurity frameworks, standards, control catalogs, policies, procedures, and evidence mappings.",
  "Distinguish security effectiveness from compliance status so that a passed control requirement is not treated as proof that all relevant risk is solved.",
  "Evaluate applicability, control ownership, evidence, exceptions, compensating controls, and review cadence in a compliance mapping.",
  "Connect risk records and control-effectiveness results to broader governance requirements without forcing one framework to become the entire security program.",
  "Build a Framework and Control Mapping Register that becomes the fifth artifact in the A15 Risk Register and Leadership Recommendation.",
];

const governanceLayers = [
  {
    layer: "Law / regulation / contract",
    purpose:
      "Creates external obligations that may apply because of geography, sector, data type, contract, or business relationship.",
    example:
      "A contract requires specific security evidence or incident-notification expectations.",
    question:
      "Why is this obligation applicable to the organization or service?",
  },
  {
    layer: "Framework",
    purpose:
      "Provides a structured way to organize cybersecurity activities, outcomes, or control domains.",
    example:
      "A framework may group work into governance, protection, detection, response, recovery, and supplier-risk themes.",
    question:
      "How does the framework help organize the security program?",
  },
  {
    layer: "Standard / control catalog",
    purpose:
      "Defines more specific security requirements or controls that can be assessed.",
    example:
      "A control catalog may define access review, logging, backup, supplier review, or configuration-management expectations.",
    question:
      "What measurable requirement must the organization satisfy?",
  },
  {
    layer: "Policy",
    purpose:
      "States the organization's mandatory security expectations.",
    example:
      "Sensitive data must be protected and access reviewed according to approved standards.",
    question:
      "What organizational rule or outcome is mandatory?",
  },
  {
    layer: "Procedure",
    purpose:
      "Describes how an approved process is carried out.",
    example:
      "Quarterly access review, risk exception approval, or backup validation procedure.",
    question:
      "Can teams follow the process consistently and produce evidence?",
  },
  {
    layer: "Evidence",
    purpose:
      "Shows whether the requirement or control is designed and operating as intended.",
    example:
      "Current access review, recovery test, supplier assessment, policy approval, or control-test result.",
    question:
      "What current evidence supports the compliance conclusion?",
  },
];

const complianceVsSecurity = [
  {
    concept: "Compliance",
    meaning:
      "Meeting an applicable requirement and producing enough evidence to demonstrate that status.",
    usefulFor:
      "Consistency, accountability, audits, contractual obligations, governance, baseline expectations.",
    limitation:
      "A requirement may be narrow, outdated, or insufficient for a new threat or business context.",
  },
  {
    concept: "Security",
    meaning:
      "Managing risk so that systems, data, identities, services, and business objectives are reasonably protected.",
    usefulFor:
      "Risk reduction, architecture, resilience, prevention, detection, response, recovery, and adaptive decision making.",
    limitation:
      "Security can be difficult to measure perfectly and requires judgment beyond checklists.",
  },
  {
    concept: "Strong program",
    meaning:
      "Uses compliance requirements as one input while continuing to evaluate actual risk and control effectiveness.",
    usefulFor:
      "Keeping required controls aligned with business risk.",
    limitation:
      "Still requires current evidence, ownership, exceptions, and leadership decisions.",
  },
];

const applicabilityQuestions = [
  {
    question: "Which business service or data is in scope?",
    why:
      "A requirement should not be applied or excluded without understanding the actual system and data boundary.",
    evidence:
      "Service inventory, data classification, architecture scope, contract scope.",
  },
  {
    question: "Which requirement applies and why?",
    why:
      "Compliance conclusions need a clear applicability basis.",
    evidence:
      "Policy, contract, standard, framework mapping, legal interpretation where authorized.",
  },
  {
    question: "Which control satisfies the requirement?",
    why:
      "A requirement should map to a real security control or governance process.",
    evidence:
      "Control ID, control owner, objective, design review, operating evidence.",
  },
  {
    question: "Does one control satisfy multiple requirements?",
    why:
      "Organizations often reuse the same control across several frameworks or policies.",
    evidence:
      "Crosswalk, mapping register, evidence reuse, control objective.",
  },
  {
    question: "Is the requirement fully or partially met?",
    why:
      "Coverage may be incomplete across systems, identities, regions, or workflows.",
    evidence:
      "Population inventory, exception list, control coverage, test results.",
  },
  {
    question: "What evidence proves the status?",
    why:
      "A mapping without evidence is only an assertion.",
    evidence:
      "Current logs, reviews, approvals, assessments, test results, owner attestations.",
  },
];

const mappingFields = [
  {
    field: "Requirement ID",
    strong:
      "Stable identifier such as GOV-AC-01 or FRAME-PR-07.",
    weak:
      "“Access requirement.”",
    purpose:
      "Makes the requirement traceable across reviews and evidence.",
  },
  {
    field: "Requirement statement",
    strong:
      "Privileged access must be reviewed at an approved cadence and after material role change.",
    weak:
      "“Check admins.”",
    purpose:
      "Explains the actual expected security or governance outcome.",
  },
  {
    field: "Applicability",
    strong:
      "Applies to production workforce privileged access because the service processes sensitive data.",
    weak:
      "“Probably applies.”",
    purpose:
      "Explains why the requirement is in scope.",
  },
  {
    field: "Mapped control",
    strong:
      "CTL-201 Quarterly Workforce Access Review.",
    weak:
      "“IAM controls.”",
    purpose:
      "Connects the requirement to a specific safeguard.",
  },
  {
    field: "Control owner",
    strong:
      "Identity Governance.",
    weak:
      "“IT.”",
    purpose:
      "Creates accountability for operation and evidence.",
  },
  {
    field: "Evidence",
    strong:
      "Current quarterly review record, exception list, and remediation closure.",
    weak:
      "“Screenshot available.”",
    purpose:
      "Supports the conclusion with current proof.",
  },
  {
    field: "Status",
    strong:
      "Met, Partially Met, Not Met, Not Applicable, Compensating, Unknown.",
    weak:
      "“Fine.”",
    purpose:
      "Communicates the current compliance decision clearly.",
  },
  {
    field: "Exception / gap",
    strong:
      "Two legacy admin accounts remain under approved exception until migration.",
    weak:
      "“Some exceptions.”",
    purpose:
      "Keeps incomplete coverage visible.",
  },
  {
    field: "Review cadence",
    strong:
      "Quarterly plus event-driven review after architecture or ownership change.",
    weak:
      "“Review sometimes.”",
    purpose:
      "Prevents mappings from becoming stale.",
  },
];

const statuses = [
  {
    state: "Met",
    meaning:
      "Current evidence supports the requirement across the intended scope.",
  },
  {
    state: "Partially Met",
    meaning:
      "The requirement is satisfied for some but not all intended scope or control conditions.",
  },
  {
    state: "Not Met",
    meaning:
      "Current evidence shows a material requirement is not satisfied.",
  },
  {
    state: "Unknown",
    meaning:
      "Evidence is insufficient, stale, missing, or contradictory.",
  },
  {
    state: "Compensating",
    meaning:
      "An approved alternate control temporarily supports the requirement while the preferred control is unavailable.",
  },
  {
    state: "Not Applicable",
    meaning:
      "The requirement does not apply to the reviewed scope, with documented rationale.",
  },
];

const crosswalkConcepts = [
  {
    concept: "One control, many requirements",
    example:
      "A strong access review can support internal policy, audit, supplier, and framework requirements.",
    benefit:
      "Reduces duplicate work when control objectives are genuinely equivalent.",
    caution:
      "Do not assume every similarly worded requirement has identical scope or evidence needs.",
  },
  {
    concept: "One requirement, many controls",
    example:
      "A sensitive-data protection requirement may rely on access control, encryption, monitoring, and recovery.",
    benefit:
      "Shows that complex outcomes often depend on several safeguards.",
    caution:
      "Do not reduce a broad requirement to one convenient control.",
  },
  {
    concept: "Equivalent evidence",
    example:
      "One current control test may support several mappings if the tested scope matches each requirement.",
    benefit:
      "Improves efficiency and consistency.",
    caution:
      "Check date, scope, owner, population, and objective before reusing evidence.",
  },
  {
    concept: "Gap inheritance",
    example:
      "If a shared access-review control fails, several mapped requirements may become Partially Met or Not Met.",
    benefit:
      "Shows why control quality matters across the governance program.",
    caution:
      "Update every affected mapping rather than only the original risk record.",
  },
];

const frameworkPrinciples = [
  {
    title: "Frameworks organize; risk decides",
    meaning:
      "A framework helps structure the program, but actual business risk still drives priority.",
    review:
      "Which high-risk issue deserves action even if no audit deadline is near?",
  },
  {
    title: "Applicability must be explained",
    meaning:
      "A requirement should not be included or excluded without rationale.",
    review:
      "What business, data, contract, or policy basis makes this applicable?",
  },
  {
    title: "Mappings need real controls",
    meaning:
      "A requirement should connect to one or more specific safeguards.",
    review:
      "Can the reviewer identify the actual control owner and expected outcome?",
  },
  {
    title: "Evidence must fit the requirement",
    meaning:
      "Convenient evidence is not always relevant evidence.",
    review:
      "Does the evidence prove the exact requirement across the correct scope?",
  },
  {
    title: "Partial coverage stays visible",
    meaning:
      "A control that works for most systems can still leave the requirement Partially Met.",
    review:
      "Which systems, users, suppliers, or environments remain outside coverage?",
  },
  {
    title: "Exceptions do not equal compliance",
    meaning:
      "An approved exception may govern the gap, but the underlying requirement is still not fully satisfied.",
    review:
      "Is the status Met, Partially Met, or Compensating rather than falsely complete?",
  },
  {
    title: "Compliance evidence ages",
    meaning:
      "Architecture and control changes can invalidate previous evidence.",
    review:
      "What evidence must be refreshed after change?",
  },
  {
    title: "Security can exceed compliance",
    meaning:
      "A mature organization may implement stronger controls than the minimum requirement.",
    review:
      "Which business risks justify stronger protection than the baseline?",
  },
];

const vocabulary = [
  {
    term: "Framework",
    definition:
      "A structured model for organizing cybersecurity outcomes, activities, or control domains.",
  },
  {
    term: "Control catalog",
    definition:
      "A collection of specific security or governance controls that can be implemented and assessed.",
  },
  {
    term: "Requirement",
    definition:
      "An expected security, governance, contractual, policy, or regulatory outcome.",
  },
  {
    term: "Applicability",
    definition:
      "The reason a requirement does or does not apply to a defined business or technical scope.",
  },
  {
    term: "Control mapping",
    definition:
      "The relationship between a requirement and the control or controls used to satisfy it.",
  },
  {
    term: "Crosswalk",
    definition:
      "A comparison that shows relationships between requirements across frameworks, standards, or policies.",
  },
  {
    term: "Evidence mapping",
    definition:
      "The connection between a requirement or control and the evidence used to support its status.",
  },
  {
    term: "Compensating control",
    definition:
      "An approved alternate safeguard used when the preferred requirement cannot currently be met.",
  },
  {
    term: "Not Applicable",
    definition:
      "A documented conclusion that a requirement does not apply to the reviewed scope.",
  },
  {
    term: "Exception",
    definition:
      "A formally approved, bounded deviation from a required policy or standard.",
  },
  {
    term: "Compliance status",
    definition:
      "The current conclusion about whether an applicable requirement is met, partially met, not met, unknown, or otherwise governed.",
  },
  {
    term: "Evidence reuse",
    definition:
      "Using one evidence source to support multiple requirements when the scope and objective genuinely align.",
  },
];

const records = [
  {
    id: "MAP-301",
    requirement:
      "Privileged workforce access must be reviewed regularly and after material role change.",
    applicability:
      "Applies to production privileged identities supporting Student Services.",
    mappedControls:
      "CTL-201 Quarterly Workforce Access Review",
    owner:
      "Identity Governance",
    evidence:
      "Current quarterly review + exception list + completed remediation",
    status:
      "Met",
    gap:
      "No material gap",
    relatedRisks:
      "RSK-101",
    review:
      "Quarterly + role-change trigger",
    nextAction:
      "Maintain evidence freshness and update after identity-model changes",
  },
  {
    id: "MAP-302",
    requirement:
      "Critical legacy services must operate under approved compensating controls until modernization closes.",
    applicability:
      "Applies to Legacy Reporting Service because preferred controls cannot yet be fully implemented.",
    mappedControls:
      "CTL-202 Legacy Reporting Network Restriction + modernization exception",
    owner:
      "Infrastructure Security + Reporting Product Owner",
    evidence:
      "Current network review + current exception + partial modernization evidence",
    status:
      "Compensating",
    gap:
      "Obsolete trust, unowned key relationship, and transport gaps remain",
    relatedRisks:
      "RSK-102",
    review:
      "Monthly + exception expiry",
    nextAction:
      "Complete modernization and retire compensating status when closure evidence exists",
  },
  {
    id: "MAP-303",
    requirement:
      "External service identities must have current lifecycle ownership and timely renewal.",
    applicability:
      "Applies to partner scheduling certificate and relying-service relationship.",
    mappedControls:
      "CTL-203 Partner Certificate Renewal Monitoring",
    owner:
      "Integration Platform",
    evidence:
      "Current certificate + alert + renewal ticket + sponsor confirmation",
    status:
      "Partially Met",
    gap:
      "Replacement certificate validation not yet complete",
    relatedRisks:
      "RSK-103",
    review:
      "Monthly until renewal closes",
    nextAction:
      "Validate replacement and retire old trust before expiry",
  },
  {
    id: "MAP-304",
    requirement:
      "Critical services must maintain tested recovery capability.",
    applicability:
      "Applies to backup repository and dependent critical services.",
    mappedControls:
      "CTL-204 Backup Restore Validation",
    owner:
      "Resilience Team",
    evidence:
      "Current restore test + key-version mapping + issue closure",
    status:
      "Met",
    gap:
      "No material gap under current evidence",
    relatedRisks:
      "RSK-104",
    review:
      "Annual + major platform change",
    nextAction:
      "Repeat validation on schedule and after major architecture changes",
  },
  {
    id: "MAP-305",
    requirement:
      "Critical suppliers must have continuity, oversight, and documented business ownership.",
    applicability:
      "Applies to critical SaaS provider because the organization depends heavily on the service.",
    mappedControls:
      "CTL-205 Supplier Continuity Review",
    owner:
      "Vendor Management + Business Service Owner",
    evidence:
      "Current supplier assessment + contract + continuity plan",
    status:
      "Partially Met",
    gap:
      "No practical alternate provider exists",
    relatedRisks:
      "RSK-105",
    review:
      "Annual + contract renewal + material supplier change",
    nextAction:
      "Improve alternate operating procedures and exit planning",
  },
  {
    id: "MAP-306",
    requirement:
      "Temporary sensitive data must be removed according to approved retention rules.",
    applicability:
      "Applies to analytics export staging and temporary data-science workspaces.",
    mappedControls:
      "CTL-206 Analytics Export Cleanup + CTL-207 Temporary Workspace Destruction",
    owner:
      "Analytics Platform + Data Science Platform",
    evidence:
      "Current export cleanup evidence + partial workspace cleanup evidence",
    status:
      "Partially Met",
    gap:
      "Workspace destruction evidence incomplete",
    relatedRisks:
      "RSK-106, RSK-107",
    review:
      "Monthly + project-close trigger",
    nextAction:
      "Refresh full-population workspace cleanup evidence",
  },
  {
    id: "MAP-307",
    requirement:
      "Security controls must have current ownership, evidence, and review cadence.",
    applicability:
      "Applies across all in-scope production security controls.",
    mappedControls:
      "CTL-201 through CTL-207 control-governance records",
    owner:
      "Security Governance",
    evidence:
      "Control register + owner attestations + current control-test results",
    status:
      "Partially Met",
    gap:
      "CTL-207 evidence remains incomplete",
    relatedRisks:
      "Multiple A15 risks",
    review:
      "Quarterly",
    nextAction:
      "Refresh CTL-207 evidence and keep control ownership current",
  },
];

const dashboardMetrics = [
  {
    label: "Requirements mapped",
    value: "7",
    note: "Access, legacy, PKI, recovery, supplier, retention, and control-governance requirements",
  },
  {
    label: "Met",
    value: "2",
    note: "Privileged access review and recovery validation currently satisfy requirements",
  },
  {
    label: "Partial / Compensating",
    value: "5",
    note: "Lifecycle, supplier, retention, legacy, and governance mappings have bounded gaps",
  },
  {
    label: "Unknown",
    value: "0",
    note: "Current mappings have enough evidence for a stated decision",
  },
];

const logs = [
  "[08:20] MAP-301 requirement=PRIVILEGED_ACCESS status=MET evidence=CURRENT",
  "[08:44] MAP-302 requirement=LEGACY_CONTROL status=COMPENSATING exception=CURRENT",
  "[09:08] MAP-303 requirement=CERT_LIFECYCLE status=PARTIAL replacement=OPEN",
  "[09:32] MAP-304 requirement=RECOVERY_TEST status=MET evidence=CURRENT",
  "[09:56] MAP-305 requirement=SUPPLIER_CONTINUITY status=PARTIAL concentration=OPEN",
  "[10:20] MAP-306 requirement=TEMP_DATA_RETENTION status=PARTIAL workspace_evidence=INCOMPLETE",
  "[10:44] MAP-307 requirement=CONTROL_GOVERNANCE status=PARTIAL CTL207=UNKNOWN",
];

const antiPatterns = [
  {
    title: "Compliance equals security",
    problem:
      "The organization treats a passed audit as proof that all major security risk is solved.",
    better:
      "Use compliance as one input and continue evaluating actual business risk.",
  },
  {
    title: "Requirement mapped to vague technology",
    problem:
      "A requirement says 'use IAM' without a specific control owner, scope, or objective.",
    better:
      "Map to a concrete control with a clear expected outcome.",
  },
  {
    title: "Evidence reused without scope check",
    problem:
      "One test is copied across many requirements even though the tested population differs.",
    better:
      "Verify objective, population, date, owner, and scope before reuse.",
  },
  {
    title: "Exception marked Met",
    problem:
      "An approved exception is treated as if the preferred requirement is fully satisfied.",
    better:
      "Use Compensating or Partially Met while keeping the underlying gap visible.",
  },
  {
    title: "Not Applicable without rationale",
    problem:
      "A team excludes a difficult requirement with no documented basis.",
    better:
      "Record scope, reason, owner, and supporting evidence for Not Applicable decisions.",
  },
  {
    title: "Framework becomes the entire security program",
    problem:
      "Teams work only on listed requirements and ignore new risks or business changes.",
    better:
      "Use frameworks to organize work while risk analysis drives priority.",
  },
  {
    title: "Mappings never age",
    problem:
      "Architecture, data, supplier, or control changes occur but old mappings remain untouched.",
    better:
      "Add scheduled and event-driven review triggers.",
  },
  {
    title: "Minimum becomes maximum",
    problem:
      "The organization refuses stronger controls because the baseline requirement is already satisfied.",
    better:
      "Exceed minimum requirements when business risk justifies stronger protection.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep MAP-302 as Compensating because the approved alternate control reduces risk but the preferred legacy requirements are not fully satisfied.",
    outcome:
      "Best. Governance recognizes the temporary protection without hiding the underlying gap.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark MAP-302 Met because the exception is approved.",
    outcome:
      "Risky. An approved exception does not make the preferred requirement fully satisfied.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Mark MAP-302 Not Applicable because the system is legacy.",
    outcome:
      "Risky. Legacy status does not remove an otherwise applicable requirement.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep MAP-306 Partially Met because export cleanup is current but workspace-destruction evidence is incomplete.",
    outcome:
      "Best. The requirement spans multiple controls and one part of the intended scope is not fully proven.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark MAP-306 Met because one cleanup control is Effective.",
    outcome:
      "Risky. One successful control does not prove the full requirement across all in-scope temporary data.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Mark MAP-306 Not Met because one evidence source is incomplete.",
    outcome:
      "Caution. The requirement is partially supported; the most accurate state is Partially Met.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the main purpose of a cybersecurity framework?",
    choices: [
      "Organize security outcomes, activities, or control domains.",
      "Guarantee that all cyber risk is eliminated.",
      "Replace business risk analysis.",
      "Replace every organizational policy.",
    ],
    answer: 0,
    explanation:
      "Frameworks help structure security work, but they do not replace risk decisions.",
  },
  {
    question:
      "What is the strongest statement about compliance and security?",
    choices: [
      "Compliance supports governance, but security still requires actual risk and control-effectiveness analysis.",
      "They are exactly the same.",
      "Compliance is always stronger than security.",
      "Security makes evidence unnecessary.",
    ],
    answer: 0,
    explanation:
      "A compliant control environment can still contain meaningful risk.",
  },
  {
    question:
      "What should a control mapping include?",
    choices: [
      "Requirement, applicability, mapped control, owner, evidence, status, and review information.",
      "Only a framework name.",
      "Only a screenshot.",
      "Only a risk score.",
    ],
    answer: 0,
    explanation:
      "A good mapping is traceable from requirement to control to evidence and status.",
  },
  {
    question:
      "What is strongest for an approved exception to a preferred control requirement?",
    choices: [
      "Keep the requirement gap visible and use a Compensating or Partially Met status where appropriate.",
      "Always mark Met.",
      "Delete the requirement.",
      "Mark Not Applicable automatically.",
    ],
    answer: 0,
    explanation:
      "An exception governs the gap but does not make the underlying requirement fully satisfied.",
  },
  {
    question:
      "What is a crosswalk?",
    choices: [
      "A comparison that shows relationships between requirements across frameworks, standards, or policies.",
      "A network scan.",
      "A control failure.",
      "A type of risk owner.",
    ],
    answer: 0,
    explanation:
      "Crosswalks help organizations understand overlapping or related requirements.",
  },
  {
    question:
      "Why should evidence reuse be checked carefully?",
    choices: [
      "The same evidence is valid only when objective, population, scope, date, and ownership align.",
      "Evidence can never support more than one requirement.",
      "Old evidence is always better.",
      "Reused evidence removes the need for review.",
    ],
    answer: 0,
    explanation:
      "One evidence source can support multiple requirements, but only when it truly matches each one.",
  },
  {
    question:
      "What is strongest when a control works for only part of the intended population?",
    choices: [
      "Use Partially Met or another accurate status and keep the uncovered scope visible.",
      "Mark Met because most systems pass.",
      "Mark Not Applicable for the uncovered systems.",
      "Delete the gap.",
    ],
    answer: 0,
    explanation:
      "Coverage matters. Partial control coverage should remain visible in the compliance conclusion.",
  },
];

const checklistItems = [
  "Every requirement has a stable ID.",
  "Requirement statement is clear.",
  "Applicability is documented.",
  "Business/service scope is explicit.",
  "Mapped controls are specific.",
  "Control owners are named.",
  "Evidence is current.",
  "Evidence fits the exact requirement.",
  "Evidence reuse is checked for scope alignment.",
  "Status is one of Met, Partially Met, Not Met, Unknown, Compensating, or Not Applicable.",
  "Exceptions remain visible.",
  "Compensating controls are bounded.",
  "Not Applicable decisions have rationale.",
  "Crosswalk relationships are documented where useful.",
  "One control supporting many requirements is handled consistently.",
  "One requirement depending on many controls is handled consistently.",
  "Related risk IDs are recorded.",
  "Review cadence is defined.",
  "Change triggers reopen the mapping.",
  "Compliance conclusions do not replace actual security-risk analysis.",
];

const takeaways = [
  "Frameworks help organize cybersecurity work, but they do not replace business-risk analysis.",
  "Requirements should have clear applicability and scope.",
  "Control mappings should connect requirements to specific controls, owners, and evidence.",
  "Compliance and security overlap but are not identical.",
  "Exceptions govern gaps; they do not make unmet requirements disappear.",
  "Partially Met is often more accurate than forcing a binary pass/fail result.",
  "Crosswalks can reduce duplicate effort when requirements truly overlap.",
  "Evidence reuse is safe only when scope, objective, date, and population align.",
  "Compliance evidence should be refreshed after meaningful change.",
  "The Framework and Control Mapping Register prepares you for A15.6 Audit Evidence and Documentation.",
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

export default function ComplianceFrameworkConceptsPage() {
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
              A15.5
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Risk Management and Compliance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A15.5
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Compliance Framework Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Frameworks and control catalogs help organizations organize security
            work, but a checklist is not the same as a risk program. This lesson
            teaches how requirements, controls, evidence, applicability, and
            exceptions fit together without confusing compliance with security.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All examples use fictional requirements, mappings, control IDs,
            policies, and evidence. No real confidential audit or compliance
            data is required.
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
          lessonTitle="Compliance Framework Concepts"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A15.5 Entry Readiness"
          items={[
            "I can map a risk to one or more security controls.",
            "I can distinguish design effectiveness from operating effectiveness.",
            "I understand that control evidence should match the expected outcome.",
            "I will use fictional framework, policy, requirement, and evidence records only.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Passed Requirement Does Not Mean the Organization Has No Risk"
        >
          <p className="leading-8">
            Compliance answers an important question: are applicable
            requirements being met with enough evidence to support the
            conclusion? Security asks a broader question: is the organization
            managing actual risk well? Strong programs need both.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Frameworks organize the work; risk tells you what matters most.
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
          eyebrow="Governance Layers"
          title="External Obligations, Frameworks, Standards, Policies, Procedures, and Evidence"
        >
          <div className="grid gap-5">
            {governanceLayers.map((item) => (
              <article
                key={item.layer}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.layer}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Example: {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Review: {item.question}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Compliance and Security"
          title="Related, Important, and Not Identical"
        >
          <div className="grid gap-5">
            {complianceVsSecurity.map((item) => (
              <article
                key={item.concept}
                className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6"
              >
                <h3 className="text-xl font-black text-purple-50">
                  {item.concept}
                </h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Useful for: {item.usefulFor}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Limitation: {item.limitation}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Applicability"
          title="Before Mapping a Requirement, Decide Whether It Applies"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {applicabilityQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Why: {item.why}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Mapping Anatomy"
          title="A Compliance Mapping Should Be Specific Enough to Audit"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {mappingFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.field}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Strong: {item.strong}
                </p>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Weak: {item.weak}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Compliance Status"
          title="Use Status Labels That Preserve Reality"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {statuses.map((item) => (
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
          eyebrow="Crosswalks"
          title="Requirements and Controls Often Have Many-to-Many Relationships"
        >
          <div className="grid gap-5">
            {crosswalkConcepts.map((item) => (
              <article
                key={item.concept}
                className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6"
              >
                <h3 className="text-xl font-black text-emerald-50">
                  {item.concept}
                </h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Example: {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Benefit: {item.benefit}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Principles"
          title="Eight Principles for Practical Compliance Mapping"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {frameworkPrinciples.map((item) => (
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
          title="Framework and Compliance Terms"
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
          eyebrow="Fictional Mapping Register"
          title="Seven Northbridge Framework and Control Mappings"
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
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.requirement}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Applicability", item.applicability],
                    ["Mapped control(s)", item.mappedControls],
                    ["Control owner", item.owner],
                    ["Evidence", item.evidence],
                    ["Gap / exception", item.gap],
                    ["Related risk(s)", item.relatedRisks],
                    ["Review cadence", item.review],
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
          title="Northbridge Framework Mapping Dashboard"
          subtitle="Fictional compliance status, control mapping, evidence, and exception summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Temporary Data Requirement Is Only Partially Met"
          severity="High"
          time="10:20"
          source="Fictional Compliance Mapping Review"
          details="MAP-306 covers temporary analytics and data-science storage. Export cleanup evidence is current, but workspace-destruction evidence remains incomplete, so the full requirement cannot be rated Met."
          recommendation="Keep MAP-306 Partially Met until current evidence confirms cleanup across the full intended population."
        />

        <Section
          eyebrow="Minimum Requirement vs. Business Risk"
          title="Meeting the Baseline Can Still Leave Meaningful Risk"
        >
          <p className="leading-8">
            A requirement may define a minimum acceptable control. A business
            service can still justify stronger protection because of criticality,
            data sensitivity, supplier concentration, or new threat conditions.
            Mature programs do not stop thinking when the checkbox turns green.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-50">Compliance question</h3>
              <p className="mt-2 text-sm leading-7 text-emerald-100">
                “Does the applicable requirement have enough current evidence to
                support the stated status?”
              </p>
            </article>

            <article className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5">
              <h3 className="font-black text-purple-50">Risk question</h3>
              <p className="mt-2 text-sm leading-7 text-purple-100">
                “Given our business context, controls, dependencies, and
                uncertainty, is the remaining risk acceptable?”
              </p>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Framework Mapping Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Compensating Mapping"
          question="What is the strongest status for MAP-302?"
          evidence={[
            "The preferred legacy control requirements are not fully satisfied.",
            "A current modernization exception exists.",
            "A network restriction and partial monitoring reduce exposure.",
            "Obsolete trust, key ownership, and transport gaps remain.",
            "The exception has a defined review cadence and closure path.",
          ]}
          options={[
            "Compensating — alternate controls reduce risk, but the preferred requirement is not fully met.",
            "Met — an exception means full compliance.",
            "Not Applicable — legacy systems do not need the requirement.",
            "Closed — compensating controls remove all residual risk.",
          ]}
          bestAnswer={0}
          explanation="The alternate safeguards support temporary governance, but the preferred requirement remains incomplete and must stay visible."
        />

        <Section
          eyebrow="Common Compliance Mistakes"
          title="Eight Ways Framework Work Becomes Misleading"
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
          title="Scenario Decision Lab 1 — Approved Exception, Incomplete Requirement"
          scenario="A legacy service cannot yet meet the preferred control standard, but a current exception and alternate safeguards are reducing risk during modernization."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — One Requirement, Two Cleanup Controls"
          scenario="A temporary-data retention requirement is satisfied for analytics export staging, but evidence is incomplete for temporary data-science workspaces."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Framework and Control Mapping Register"
        >
          <p className="leading-8">
            Use fictional requirements, policies, controls, evidence, owners,
            mappings, and exceptions only. Focus on traceability and governance,
            not real regulatory interpretation.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twenty-five fictional mapping records.",
              "Give every record a stable MAP ID.",
              "Record the requirement ID.",
              "Write the requirement statement.",
              "Record the source category: policy, standard, contract, framework, or internal control catalog.",
              "Record applicability rationale.",
              "Record business/service scope.",
              "Map one or more CTL IDs.",
              "Map related RSK IDs.",
              "Record the control owner.",
              "Record the evidence source.",
              "Record evidence freshness.",
              "Record status as Met, Partially Met, Not Met, Unknown, Compensating, or Not Applicable.",
              "Record gap or exception details.",
              "Record compensating controls where applicable.",
              "Record review cadence.",
              "Record change triggers.",
              "Record next action.",
              "Include at least five one-control-to-many-requirement mappings.",
              "Include at least five many-controls-to-one-requirement mappings.",
              "Include at least three Partially Met requirements.",
              "Include at least two Compensating requirements.",
              "Include at least two Not Applicable examples with rationale.",
              "Include at least two Unknown examples with missing or stale evidence.",
              "Include at least two Not Met examples with explicit remediation.",
              "Create a small crosswalk showing how three different requirement sets overlap.",
              "Identify where one control failure would affect multiple mappings.",
              "Identify where a requirement is technically Met but business risk still justifies stronger protection.",
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
              Do not collect confidential audit reports, private contracts,
              legal advice, or restricted compliance evidence. Do not treat this
              fictional lab as legal or regulatory guidance. Use synthetic
              requirements and provider-neutral examples only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Temporary Data Requirement"
          question="What is the strongest status for MAP-306?"
          evidence={[
            "Analytics export cleanup is currently Effective.",
            "Temporary workspace destruction is well designed.",
            "Current workspace-destruction evidence is incomplete across the full population.",
            "Both control groups are in scope for the same temporary-data requirement.",
          ]}
          options={[
            "Partially Met because one part of the required scope is not fully proven.",
            "Met because one cleanup control is Effective.",
            "Not Met because any incomplete evidence means total failure.",
            "Not Applicable to workspaces because they are temporary.",
          ]}
          bestAnswer={0}
          explanation="The requirement covers both control populations. Current evidence supports some but not all of the intended scope."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Framework Mapping and Evidence Reuse Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard that explains how
            requirements are mapped to controls, how evidence is reused, how
            exceptions are represented, and when a mapping must be refreshed.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Requirement ID format",
              "Applicability criteria",
              "Control mapping rules",
              "Risk mapping rules",
              "Evidence ownership",
              "Evidence reuse criteria",
              "Crosswalk method",
              "Status definitions",
              "Partially Met rules",
              "Not Applicable rationale",
              "Compensating control rules",
              "Exception references",
              "Review cadence",
              "Change triggers",
              "Audit traceability",
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
            The strongest standard should reduce duplicate work without hiding
            scope differences, exceptions, or actual security risk.
          </p>
        </Section>

        <DefenderChecklist
          title="A15.5 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A15.5 Mini Quiz: Compliance Framework Concepts"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Framework and Control Mapping Register"
          prompt="Create the fifth artifact for your A15 Risk Register and Leadership Recommendation: a fictional Framework and Control Mapping Register with at least twenty-five records. Include MAP ID, requirement ID, requirement statement, source category, applicability rationale, business/service scope, mapped CTL IDs, mapped RSK IDs, control owner, evidence, evidence freshness, status, exception or gap, compensating control, review cadence, change trigger, next action, and crosswalk relationships."
          tips={[
            "Do not confuse compliance with complete security.",
            "Explain why every requirement applies.",
            "Map to specific controls, not vague technologies.",
            "Keep partial coverage visible.",
            "Reuse evidence only when scope truly aligns.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A15.6?"
        >
          <p className="leading-8">
            A15.6 focuses on Audit Evidence and Documentation. Before
            continuing, make sure every compliance conclusion in your mapping
            register can point to evidence that is current, relevant, complete,
            and attributable.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish a framework from a control catalog, policy, procedure, and evidence.",
              "I can explain why compliance and security are related but not identical.",
              "I can map a requirement to one or more specific controls.",
              "I can use Partially Met or Compensating when full coverage is not proven.",
              "I can explain when evidence reuse is valid and when it is misleading.",
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
          title="How to Make the Framework and Control Mapping Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Explain applicability",
                detail:
                  "A requirement should have a documented reason for being in or out of scope.",
              },
              {
                title: "Map to real controls",
                detail:
                  "Use stable CTL IDs, owners, objectives, and evidence rather than vague technology categories.",
              },
              {
                title: "Keep status accurate",
                detail:
                  "Use Met, Partially Met, Not Met, Unknown, Compensating, or Not Applicable consistently.",
              },
              {
                title: "Show exceptions",
                detail:
                  "Do not hide gaps just because they are formally approved.",
              },
              {
                title: "Reuse evidence carefully",
                detail:
                  "Check objective, population, date, owner, and scope before one evidence source supports several requirements.",
              },
              {
                title: "Show crosswalks",
                detail:
                  "Make overlapping requirements visible so controls can be managed consistently across frameworks.",
              },
              {
                title: "Connect back to risk",
                detail:
                  "Compliance status should inform risk decisions, but should not replace them.",
              },
              {
                title: "Connect forward",
                detail:
                  "A15.6 will evaluate evidence quality, documentation, freshness, traceability, and audit readiness.",
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
            Compliance learning uses fictional mappings and safe evidence
          </h2>
          <p className="mt-3 leading-7">
            Do not collect confidential contracts, restricted audit reports,
            legal advice, or private compliance records. Do not treat this
            lesson as legal or regulatory guidance. All requirements, mappings,
            controls, evidence, organizations, and exceptions are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A15.5 Compliance Framework Concepts Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a structured model for frameworks, requirements,
            applicability, control mappings, crosswalks, evidence reuse,
            exceptions, and compliance status. Next, A15.6 focuses on Audit
            Evidence and Documentation.
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