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
const previousLesson = `${modulePath}/privacy-risk-assessments`;
const nextLesson = `${modulePath}/privacy-by-design-in-systems`;

const objectives = [
  "Explain the responsibilities of data owners, system or product owners, data stewards, privacy teams, security teams, records teams, compliance teams, control owners, evidence owners, remediation owners, and business leaders.",
  "Distinguish accountability, approval, advisory support, control operation, evidence custody, remediation execution, and escalation so governance roles do not become interchangeable labels.",
  "Evaluate fictional governance gaps such as unclear ownership, duplicate approval, advisory teams treated as risk owners, orphaned controls, missing evidence owners, and unresolved cross-functional handoffs.",
  "Design decision-rights and responsibility mappings that connect privacy purpose, data classification, access, sharing, retention, privacy risk, exceptions, evidence, and change triggers to named roles.",
  "Build a Data Governance Responsibility Matrix that becomes the seventh artifact in the A16 Privacy Engineering Review.",
];

const governanceRoles = [
  {
    role: "Data Owner",
    core:
      "Accountable for important decisions about how a data domain is used, classified, shared, retained, and governed.",
    decides:
      "Business purpose, acceptable data use, ownership of major data risks, sharing approval, retention rationale, and escalation.",
    doesNotMean:
      "The person who administers the database or personally operates every control.",
    evidence:
      "Data ownership register, approved purpose, classification decisions, risk acceptance, sharing approval.",
  },
  {
    role: "System / Product Owner",
    core:
      "Accountable for the service or product lifecycle and for implementing approved privacy and governance requirements in the system.",
    decides:
      "Feature design, implementation priorities, product change, system architecture decisions within delegated authority.",
    doesNotMean:
      "The automatic owner of every business data risk.",
    evidence:
      "Product requirement, architecture review, release record, change approval, remediation plan.",
  },
  {
    role: "Data Steward",
    core:
      "Supports day-to-day data quality, metadata, inventory accuracy, lineage, classification hygiene, and governance operations.",
    decides:
      "Operational stewardship actions within the framework set by owners.",
    doesNotMean:
      "Final authority for business-purpose or risk-acceptance decisions.",
    evidence:
      "Inventory updates, metadata review, lineage record, stewardship issue log.",
  },
  {
    role: "Privacy Team",
    core:
      "Advises on privacy engineering, user expectations, minimization, risk, governance, and review standards.",
    decides:
      "Privacy review conclusions and recommendations within the organization's governance model.",
    doesNotMean:
      "Owner of every privacy risk or business consequence.",
    evidence:
      "Privacy assessment, review memo, design recommendation, governance standard.",
  },
  {
    role: "Security Team",
    core:
      "Designs and operates safeguards that protect necessary data and services.",
    decides:
      "Security architecture, control design, security requirements, monitoring, and security risk recommendations.",
    doesNotMean:
      "Authority to decide whether every data use is necessary or appropriate.",
    evidence:
      "Security architecture, access review, logging evidence, control test, threat model.",
  },
  {
    role: "Records / Information Governance",
    core:
      "Defines and supports record classes, retention schedules, archival rules, lifecycle, and approved holds.",
    decides:
      "Records classification and retention guidance within the governance model.",
    doesNotMean:
      "The sole owner of all deletion operations.",
    evidence:
      "Retention schedule, archive rule, hold record, disposition standard.",
  },
  {
    role: "Compliance / Governance Analyst",
    core:
      "Maps requirements, controls, policies, evidence, reviews, and governance obligations.",
    decides:
      "Assessment conclusions and mapping recommendations within assigned authority.",
    doesNotMean:
      "A substitute for business ownership or technical control operation.",
    evidence:
      "Control mapping, policy register, assessment record, review finding.",
  },
  {
    role: "Control Owner",
    core:
      "Accountable for the design and ongoing effectiveness of a specific control.",
    decides:
      "How the control should operate, how gaps are remediated, and what evidence demonstrates effectiveness.",
    doesNotMean:
      "Owner of the underlying business risk unless separately assigned.",
    evidence:
      "Control definition, test result, operating evidence, remediation record.",
  },
  {
    role: "Evidence Owner",
    core:
      "Ensures required evidence is produced, retained, attributable, current, and available for review.",
    decides:
      "Operational evidence-handling steps within assigned scope.",
    doesNotMean:
      "Authority to approve the business decision the evidence supports.",
    evidence:
      "Evidence register, source mapping, retention metadata, review history.",
  },
  {
    role: "Remediation Owner",
    core:
      "Executes the work required to fix a gap or reduce a risk.",
    decides:
      "Implementation sequencing within the approved remediation plan.",
    doesNotMean:
      "The risk owner or final approver unless separately assigned.",
    evidence:
      "Remediation ticket, milestone record, implementation proof, closure package.",
  },
  {
    role: "Business Leader / Risk Owner",
    core:
      "Owns the business consequence and approves treatment or residual-risk decisions within authority.",
    decides:
      "Priorities, funding, acceptance, escalation, and tradeoffs for material business risks.",
    doesNotMean:
      "The person who performs every technical or privacy-control task.",
    evidence:
      "Risk decision, funding approval, acceptance record, leadership recommendation.",
  },
];

const decisionRights = [
  {
    decision:
      "Approve a new business purpose for data",
    accountable:
      "Data Owner / Business Owner",
    consulted:
      "Privacy, Product, Security, Compliance",
    evidence:
      "Purpose record + impact review + owner approval",
  },
  {
    decision:
      "Change data classification",
    accountable:
      "Data Owner",
    consulted:
      "Data Steward, Privacy, Security",
    evidence:
      "Classification rationale + context review + owner approval",
  },
  {
    decision:
      "Add a new supplier recipient",
    accountable:
      "Business or Product Owner",
    consulted:
      "Privacy, Security, Third-Party Risk, Legal/Procurement where applicable",
    evidence:
      "Supplier review + data-scope mapping + purpose + approval",
  },
  {
    decision:
      "Change retention period",
    accountable:
      "Data Owner",
    consulted:
      "Records, Privacy, Product, Compliance",
    evidence:
      "Updated retention rationale + schedule + lifecycle impact",
  },
  {
    decision:
      "Accept residual privacy risk",
    accountable:
      "Authorized Risk Owner",
    consulted:
      "Privacy, Security, Product, Compliance",
    evidence:
      "Risk record + residual risk + rationale + expiry/review trigger",
  },
  {
    decision:
      "Operate a privacy or security control",
    accountable:
      "Control Owner",
    consulted:
      "System Owner, Privacy/Security as appropriate",
    evidence:
      "Control procedure + operating evidence + test result",
  },
  {
    decision:
      "Close a privacy remediation",
    accountable:
      "Risk or Control Owner depending on governance model",
    consulted:
      "Remediation Owner, Evidence Owner, Privacy",
    evidence:
      "Closure criteria + current evidence + review conclusion",
  },
];

const accountabilityPrinciples = [
  {
    principle: "One accountable owner",
    detail:
      "Important decisions should have one clearly accountable owner even when many teams are consulted.",
    failure:
      "Everyone is responsible, so nobody is actually accountable.",
  },
  {
    principle: "Advisory is not ownership",
    detail:
      "Privacy, security, legal, or compliance teams may advise strongly without owning the business consequence.",
    failure:
      "The business sends every decision to privacy and assumes privacy owns the risk.",
  },
  {
    principle: "Control ownership is specific",
    detail:
      "The person accountable for a control may differ from the data owner, risk owner, and remediation owner.",
    failure:
      "A vague “IT owns it” label hides who is accountable for effectiveness.",
  },
  {
    principle: "Evidence has an owner",
    detail:
      "Important governance conclusions need someone responsible for producing current, reviewable evidence.",
    failure:
      "A control is supposed to work, but no one owns the evidence needed to prove it.",
  },
  {
    principle: "Decision authority has limits",
    detail:
      "Owners should act within defined authority and escalate decisions beyond their scope.",
    failure:
      "A low-level owner accepts a major residual risk without the required authority.",
  },
  {
    principle: "Handoffs are explicit",
    detail:
      "When responsibility moves between teams, the handoff should define what is complete and what remains open.",
    failure:
      "Product thinks Security owns the gap; Security thinks Product owns it.",
  },
  {
    principle: "Ownership survives organizational change",
    detail:
      "Role changes, team moves, and vendor transitions should not orphan risks, controls, or data.",
    failure:
      "A departed employee remains listed as owner for a critical privacy decision.",
  },
];

const handoffPatterns = [
  {
    handoff: "Data Owner → Product Owner",
    sends:
      "Approved purpose, classification, retention, sharing constraints, decision requirements.",
    receives:
      "Implemented product behavior, change evidence, unresolved design tradeoffs.",
    risk:
      "Requirements are approved but never translated into product behavior.",
  },
  {
    handoff: "Product Owner → Privacy Team",
    sends:
      "Feature design, data flow, user experience, planned purpose, supplier or analytics changes.",
    receives:
      "Privacy recommendations, risk findings, minimization and expectation requirements.",
    risk:
      "Privacy is engaged after the architecture is already fixed.",
  },
  {
    handoff: "Privacy Team → Risk Owner",
    sends:
      "Residual risk, uncertainty, treatment options, evidence confidence, recommendation.",
    receives:
      "Treatment decision, acceptance, escalation, or funding direction.",
    risk:
      "Privacy recommendation is mistaken for final business approval.",
  },
  {
    handoff: "Control Owner → Evidence Owner",
    sends:
      "Control requirements, evidence definition, test frequency, review criteria.",
    receives:
      "Current operating evidence and evidence-quality status.",
    risk:
      "The control exists but evidence is stale or incomplete.",
  },
  {
    handoff: "Remediation Owner → Risk Owner",
    sends:
      "Implementation status, milestone evidence, unresolved blockers.",
    receives:
      "Priority, scope change, escalation, or closure decision.",
    risk:
      "A completed ticket is treated as equivalent to reduced residual risk.",
  },
  {
    handoff: "Records Team → System Owner",
    sends:
      "Retention schedule, lifecycle trigger, archival and deletion expectations.",
    receives:
      "Implemented lifecycle behavior and deletion evidence.",
    risk:
      "Retention policy exists on paper but system behavior never changes.",
  },
];

const responsibilityMatrixFields = [
  {
    field: "GOV ID",
    purpose:
      "Stable identifier for the governance decision.",
    example:
      "GOV-701",
  },
  {
    field: "Decision / responsibility",
    purpose:
      "Names the specific decision being governed.",
    example:
      "Approve partner scheduling data scope",
  },
  {
    field: "Accountable owner",
    purpose:
      "Names the role ultimately accountable for the outcome.",
    example:
      "Integration Product Owner",
  },
  {
    field: "Approver / authority",
    purpose:
      "Shows who has authority when formal approval is required.",
    example:
      "Business Service Owner",
  },
  {
    field: "Consulted roles",
    purpose:
      "Shows which specialist teams advise the decision.",
    example:
      "Privacy, Security, Third-Party Risk",
  },
  {
    field: "Control owner",
    purpose:
      "Shows who owns the control that supports the decision.",
    example:
      "Integration Engineering Lead",
  },
  {
    field: "Evidence owner",
    purpose:
      "Shows who ensures reviewable proof exists.",
    example:
      "Integration Governance Analyst",
  },
  {
    field: "Remediation owner",
    purpose:
      "Shows who performs corrective work when a gap exists.",
    example:
      "Integration Engineering Team",
  },
  {
    field: "Linked records",
    purpose:
      "Connects the governance decision to A16 evidence.",
    example:
      "PRA-605 / MIN-305 / RET-505",
  },
  {
    field: "Escalation trigger",
    purpose:
      "Defines when the decision must move to higher authority.",
    example:
      "New sensitive fields, unresolved supplier evidence, residual risk above tolerance",
  },
  {
    field: "Review cadence",
    purpose:
      "Defines when ownership and authority should be revalidated.",
    example:
      "Quarterly and after material change",
  },
  {
    field: "Current state",
    purpose:
      "Shows whether the governance assignment is Current, Gap, Conditional, Blocked, or Closed.",
    example:
      "Conditional",
  },
];

const northbridgeRecords = [
  {
    id: "GOV-701",
    decision:
      "Approve the support-profile field set",
    accountable:
      "Student Services Data Owner",
    approver:
      "Student Services Director",
    consulted:
      "Product Owner, Privacy Team, Security Team",
    controlOwner:
      "Support Product Owner",
    evidenceOwner:
      "Data Steward",
    remediationOwner:
      "Support Product Team",
    linked:
      "PRA-601 / DATA-201 / MIN-301",
    issue:
      "Three unused fields remain in the base profile.",
    escalation:
      "New sensitive fields or unresolved minimization gap",
    state:
      "Treat",
  },
  {
    id: "GOV-702",
    decision:
      "Maintain restricted access to support case notes",
    accountable:
      "Student Services Data Owner",
    approver:
      "Student Services Director",
    consulted:
      "Privacy, Security, Records",
    controlOwner:
      "Support Access Control Owner",
    evidenceOwner:
      "Security Governance Analyst",
    remediationOwner:
      "Identity and Support Engineering",
    linked:
      "PRA-602 / DATA-202 / RET-502",
    issue:
      "No current material governance gap; ownership is clear.",
    escalation:
      "New support role, new supplier, new analytics use",
    state:
      "Monitor",
  },
  {
    id: "GOV-703",
    decision:
      "Set retention for individual learning analytics events",
    accountable:
      "Learning Analytics Data Owner",
    approver:
      "Analytics Program Director",
    consulted:
      "Privacy, Records, Security, Product",
    controlOwner:
      "Analytics Platform Owner",
    evidenceOwner:
      "Analytics Data Steward",
    remediationOwner:
      "Analytics Engineering",
    linked:
      "PRA-603 / RET-503",
    issue:
      "Different workspaces use inconsistent expiry dates.",
    escalation:
      "Retention extension or failure to standardize lifecycle",
    state:
      "Treat",
  },
  {
    id: "GOV-704",
    decision:
      "Approve creation of individual engagement indicators",
    accountable:
      "Learning Analytics Data Owner",
    approver:
      "Analytics Program Director",
    consulted:
      "Privacy, Product, Research Governance",
    controlOwner:
      "Analytics Model Owner",
    evidenceOwner:
      "Analytics Governance Analyst",
    remediationOwner:
      "Analytics Engineering",
    linked:
      "PRA-604 / MIN-304",
    issue:
      "No current approved operational purpose supports persistent individual inference.",
    escalation:
      "Any proposal to use the indicator for individual decisions",
    state:
      "Blocked",
  },
  {
    id: "GOV-705",
    decision:
      "Approve partner scheduling data scope and lifecycle",
    accountable:
      "Integration Product Owner",
    approver:
      "Student Services Business Owner",
    consulted:
      "Privacy, Security, Third-Party Risk, Procurement",
    controlOwner:
      "Integration Engineering Lead",
    evidenceOwner:
      "Integration Governance Analyst",
    remediationOwner:
      "Integration Engineering",
    linked:
      "PRA-605 / MIN-305 / RET-505",
    issue:
      "Partner payload exceeds current purpose and supplier lifecycle evidence is incomplete.",
    escalation:
      "Residual risk above tolerance or unresolved supplier evidence",
    state:
      "Conditional",
  },
  {
    id: "GOV-706",
    decision:
      "Close temporary research workspace",
    accountable:
      "Research Program Owner",
    approver:
      "Research Governance Lead",
    consulted:
      "Privacy, Security, Data Steward",
    controlOwner:
      "Research Workspace Owner",
    evidenceOwner:
      "Research Governance Analyst",
    remediationOwner:
      "Research Operations",
    linked:
      "PRA-606 / RET-506",
    issue:
      "Closure evidence becomes due at the project end.",
    escalation:
      "Project extension or failed deletion reconciliation",
    state:
      "Conditional",
  },
  {
    id: "GOV-707",
    decision:
      "Maintain aggregate-only support quality reporting",
    accountable:
      "Operations Analytics Data Owner",
    approver:
      "Operations Director",
    consulted:
      "Privacy, Product, Security",
    controlOwner:
      "Dashboard Product Owner",
    evidenceOwner:
      "Operations Data Steward",
    remediationOwner:
      "Dashboard Engineering",
    linked:
      "PRA-607 / DATA-207",
    issue:
      "Current design is strong; individual drill-down would require re-review.",
    escalation:
      "New individual-level drill-down or source export",
    state:
      "Monitor",
  },
];

const dashboardMetrics = [
  {
    label: "Governance decisions",
    value: "7",
    note: "Profile, support, analytics, partner, research, and dashboard decisions",
  },
  {
    label: "Clear accountability",
    value: "6",
    note: "Most major decisions have named accountable owners and approvers",
  },
  {
    label: "Treat / Conditional",
    value: "4",
    note: "Profile, analytics retention, partner scope, and research closeout need active governance",
  },
  {
    label: "Blocked",
    value: "1",
    note: "Persistent individual engagement inference lacks an approved operational purpose",
  },
];

const logs = [
  "[08:12] GOV-701 decision=PROFILE_FIELDS accountable=DATA_OWNER state=TREAT",
  "[08:34] GOV-702 decision=CASE_NOTE_ACCESS control_owner=ASSIGNED state=MONITOR",
  "[08:56] GOV-703 decision=ANALYTICS_RETENTION expiry=INCONSISTENT state=TREAT",
  "[09:18] GOV-704 decision=INDIVIDUAL_INFERENCE purpose=UNAPPROVED state=BLOCKED",
  "[09:40] GOV-705 decision=PARTNER_SCOPE evidence=PARTIAL state=CONDITIONAL",
  "[10:02] GOV-706 decision=RESEARCH_CLOSEOUT evidence=FUTURE state=CONDITIONAL",
  "[10:24] GOV-707 decision=AGGREGATE_REPORTING ownership=CLEAR state=MONITOR",
];

const antiPatterns = [
  {
    title: "Privacy owns every privacy risk",
    problem:
      "The organization treats the advisory privacy team as the owner of business decisions it does not control.",
    better:
      "Assign business or data ownership while privacy advises, challenges, and governs.",
  },
  {
    title: "IT owns the data",
    problem:
      "Technical administration is confused with business accountability.",
    better:
      "Separate system administration from data ownership and purpose authority.",
  },
  {
    title: "Everyone approves",
    problem:
      "Too many approvers create delay while no one is clearly accountable.",
    better:
      "Define one accountable owner and only the approvals truly required.",
  },
  {
    title: "No evidence owner",
    problem:
      "Controls are expected to work, but no role owns production of current reviewable evidence.",
    better:
      "Assign evidence ownership explicitly.",
  },
  {
    title: "Remediation owner treated as risk owner",
    problem:
      "The team performing the fix is assumed to own the business consequence.",
    better:
      "Keep remediation execution separate from risk accountability.",
  },
  {
    title: "Departed owner remains assigned",
    problem:
      "Risks, controls, and data decisions become orphaned after organizational change.",
    better:
      "Revalidate ownership during role changes and scheduled governance review.",
  },
  {
    title: "Advisory recommendation treated as approval",
    problem:
      "A specialist recommendation is mistaken for final business authority.",
    better:
      "Document who advises, who approves, and who owns the outcome.",
  },
  {
    title: "RACI without decision detail",
    problem:
      "A generic matrix lists teams but does not say which exact decisions they own.",
    better:
      "Map responsibilities to concrete decisions, evidence, escalation, and review triggers.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep the Integration Product Owner accountable for the partner data decision, consult Privacy and Security, assign the control and evidence owners separately, and escalate if residual risk exceeds authority.",
    outcome:
      "Best. This preserves clear accountability while using specialist teams appropriately.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Make the Privacy Team the owner of the partner risk because the issue involves privacy.",
    outcome:
      "Risky. Privacy can advise and govern without owning the business consequence.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Make every consulted team jointly accountable.",
    outcome:
      "Caution. Shared consultation is useful, but blurred accountability makes decisions harder to govern.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Assign a specific Evidence Owner for deletion proof while keeping the Research Program Owner accountable for the lifecycle outcome.",
    outcome:
      "Best. Evidence custody and business accountability are related but distinct roles.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Make the person who runs the deletion job the sole owner of the privacy risk.",
    outcome:
      "Risky. Control operation does not automatically equal risk ownership.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Leave evidence ownership undefined because the project is temporary.",
    outcome:
      "Risky. Temporary data still needs reviewable lifecycle evidence.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest description of a Data Owner?",
    choices: [
      "The accountable role for important business decisions about data purpose, classification, sharing, retention, and governance.",
      "The person who administers the database.",
      "The person who writes every privacy policy.",
      "The evidence custodian for all systems.",
    ],
    answer: 0,
    explanation:
      "Data ownership is business accountability, not merely technical administration.",
  },
  {
    question:
      "What is the strongest description of a Control Owner?",
    choices: [
      "The role accountable for the design and effectiveness of a specific control.",
      "The owner of every business risk affected by the control.",
      "The person who approves every data purpose.",
      "The user who created the dataset.",
    ],
    answer: 0,
    explanation:
      "Control ownership is specific to the control and can differ from risk or data ownership.",
  },
  {
    question:
      "Why should evidence ownership be explicit?",
    choices: [
      "Because important governance conclusions need someone responsible for current, attributable, reviewable proof.",
      "Because evidence owners automatically accept residual risk.",
      "Because evidence owners replace data owners.",
      "Because evidence never changes.",
    ],
    answer: 0,
    explanation:
      "Evidence ownership supports reliable assurance without changing who owns the business decision.",
  },
  {
    question:
      "Which statement about privacy teams is strongest?",
    choices: [
      "Privacy teams often advise, challenge, assess, and govern, but they do not automatically own every business privacy risk.",
      "Privacy teams must own every privacy decision.",
      "Privacy teams only write notices.",
      "Privacy teams replace product owners.",
    ],
    answer: 0,
    explanation:
      "Advisory and governance roles should not be confused with business risk ownership.",
  },
  {
    question:
      "What is strongest when a decision exceeds an owner's authority?",
    choices: [
      "Escalate to the appropriate higher authority while preserving clear ownership and evidence.",
      "Accept the risk anyway.",
      "Hide the decision.",
      "Make every team jointly accountable.",
    ],
    answer: 0,
    explanation:
      "Decision rights should include clear authority boundaries and escalation.",
  },
  {
    question:
      "What is strongest when a remediation ticket is marked complete?",
    choices: [
      "The accountable risk or control owner should review objective closure evidence before changing the governance state.",
      "The risk automatically becomes Closed.",
      "The evidence owner becomes the risk owner.",
      "No further review is needed.",
    ],
    answer: 0,
    explanation:
      "Completion of work is not the same as evidence that residual risk reached the approved state.",
  },
  {
    question:
      "Why should governance ownership be reviewed after organizational change?",
    choices: [
      "To prevent orphaned data decisions, controls, risks, evidence, and remediation responsibilities.",
      "Because ownership never changes.",
      "Only to update job titles.",
      "To eliminate all consultation.",
    ],
    answer: 0,
    explanation:
      "Governance breaks when owners leave or change roles without reassignment.",
  },
];

const checklistItems = [
  "Every important data decision has one accountable owner.",
  "Approval authority is documented where required.",
  "Advisory roles are distinguished from accountable roles.",
  "Data ownership is separated from technical administration.",
  "System or product ownership is documented.",
  "Control ownership is explicit.",
  "Evidence ownership is explicit.",
  "Remediation ownership is explicit.",
  "Risk ownership is explicit.",
  "Data stewardship responsibilities are documented.",
  "Privacy-team responsibilities are documented.",
  "Security-team responsibilities are documented.",
  "Records-team responsibilities are documented.",
  "Compliance/governance responsibilities are documented.",
  "Cross-functional handoffs define inputs and outputs.",
  "Decision authority limits are documented.",
  "Escalation triggers are documented.",
  "Ownership is revalidated after organizational change.",
  "Closure authority is defined.",
  "All examples remain fictional or synthetic.",
];

const takeaways = [
  "Governance works best when accountability, advice, control operation, evidence, remediation, and approval are distinguished.",
  "Data owners are accountable for important business data decisions; system owners implement those decisions in products and services.",
  "Privacy and security teams may strongly influence a decision without owning the underlying business consequence.",
  "Control owners, evidence owners, remediation owners, and risk owners can be different roles.",
  "One accountable owner is usually clearer than broad shared accountability.",
  "Decision authority should include escalation when a risk exceeds the owner's scope.",
  "Handoffs need explicit inputs, outputs, evidence, and remaining responsibilities.",
  "Organizational change can orphan risks, controls, and data if ownership is not revalidated.",
  "A responsibility matrix should map concrete decisions, not merely list teams.",
  "The Data Governance Responsibility Matrix prepares you for A16.8 Privacy by Design in Systems.",
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

export default function DataGovernanceRolesPage() {
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
              A16.7
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Privacy Engineering and Data Governance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A16.7
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Data Governance Roles
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Data governance succeeds when people know which decisions they own,
            which controls they operate, which evidence they produce, who they
            consult, and when they must escalate. This lesson turns vague
            “everyone owns privacy” statements into concrete decision rights and
            responsibility.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All organizations, roles, decisions, risks, and evidence in this
            lesson are fictional or synthetic.
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
          lessonTitle="Data Governance Roles"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A16.7 Entry Readiness"
          items={[
            "I can distinguish a data decision from a technical implementation task.",
            "I understand that privacy, security, product, records, and business teams may have different responsibilities.",
            "I can identify the owner of a fictional privacy risk.",
            "I will use only fictional or synthetic governance examples.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Good Decision Can Still Fail When Nobody Owns It"
        >
          <p className="leading-8">
            Privacy programs often fail at handoffs rather than at principles.
            A team may agree that data should be minimized, access reduced, or a
            supplier reviewed—but the decision stalls because nobody is
            accountable for approving the change, operating the control,
            producing evidence, or confirming closure.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Governance is the structure that turns privacy decisions into owned, reviewable action.
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
          eyebrow="Governance Roles"
          title="Eleven Roles That Often Participate in Data Decisions"
        >
          <div className="grid gap-5">
            {governanceRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.role}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Core responsibility
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.core}
                    </p>
                  </div>
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Typical decisions
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.decides}
                    </p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Does not automatically mean
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.doesNotMean}
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
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision Rights"
          title="Who Owns Which Decision?"
        >
          <p className="leading-8">
            A useful governance model maps roles to specific decisions rather
            than saying one team “owns privacy.” The accountable owner should be
            able to explain the decision, the authority, the evidence, and who
            was consulted.
          </p>

          <div className="mt-6 grid gap-5">
            {decisionRights.map((item) => (
              <article
                key={item.decision}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.decision}</h3>
                <p className="mt-3 text-sm leading-7 text-white">
                  Accountable: {item.accountable}
                </p>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Consulted: {item.consulted}
                </p>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Accountability"
          title="Seven Principles for Clear Governance"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {accountabilityPrinciples.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.principle}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.detail}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Failure mode: {item.failure}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Cross-Functional Handoffs"
          title="Governance Breaks When Responsibility Falls Between Teams"
        >
          <div className="grid gap-5">
            {handoffPatterns.map((item) => (
              <article
                key={item.handoff}
                className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6"
              >
                <h3 className="text-xl font-black text-emerald-50">
                  {item.handoff}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Sends
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white">
                      {item.sends}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Receives
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white">
                      {item.receives}
                    </p>
                  </div>
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Handoff risk
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.risk}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Responsibility Matrix"
          title="What a Reviewable Governance Record Should Contain"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {responsibilityMatrixFields.map((item) => (
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
          eyebrow="Fictional Governance Matrix"
          title="Seven Northbridge Governance Decisions"
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
                  {item.decision}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Accountable owner", item.accountable],
                    ["Approver / authority", item.approver],
                    ["Consulted roles", item.consulted],
                    ["Control owner", item.controlOwner],
                    ["Evidence owner", item.evidenceOwner],
                    ["Remediation owner", item.remediationOwner],
                    ["Current issue", item.issue],
                    ["Escalation trigger", item.escalation],
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
          title="Northbridge Data Governance Dashboard"
          subtitle="Fictional accountability, approval, control ownership, evidence ownership, remediation, and escalation summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Partner Decision Has Multiple Specialists but One Accountable Owner"
          severity="High"
          time="09:40"
          source="Fictional Governance Review"
          details="GOV-705 requires Privacy, Security, Third-Party Risk, Procurement, Engineering, and business input. The Integration Product Owner remains accountable for the product decision, while the Business Owner holds approval authority for material residual risk."
          recommendation="Keep specialist consultation broad but preserve one accountable owner, distinct control/evidence/remediation owners, and a clear escalation trigger."
        />

        <FakeLogPanel
          title="Fictional Data Governance Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Who Owns the Partner Privacy Risk?"
          question="Which governance model is strongest for GOV-705?"
          evidence={[
            "The partner issue affects business service design, data sharing, supplier lifecycle, privacy, and security.",
            "Privacy and Security provide specialist assessment.",
            "Integration Engineering operates the technical controls.",
            "The Integration Product Owner controls the product and integration roadmap.",
            "The Business Owner holds authority for material residual-risk approval.",
          ]}
          options={[
            "Keep the Integration Product Owner accountable, consult specialist teams, assign control/evidence/remediation ownership separately, and escalate material residual risk to the Business Owner.",
            "Make the Privacy Team accountable for the entire risk because privacy is involved.",
            "Make all teams jointly accountable with no single owner.",
            "Make Integration Engineering the risk owner because it operates the connection.",
          ]}
          bestAnswer={0}
          explanation="The strongest model separates product accountability, specialist advice, control operation, evidence, remediation, and higher approval authority."
        />

        <Section
          eyebrow="Common Governance Mistakes"
          title="Eight Ways Role Design Becomes Unclear"
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
          title="Scenario Decision Lab 1 — Partner Data Accountability"
          scenario="A partner data issue requires input from Privacy, Security, Third-Party Risk, Procurement, Engineering, and business leadership. The team proposes making Privacy the owner because the concern is privacy-related."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Research Deletion Evidence"
          scenario="A temporary research project ends. The Research Program Owner is accountable for lifecycle completion, the workspace team runs deletion, but no one has been assigned to own the deletion evidence."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Data Governance Responsibility Matrix"
        >
          <p className="leading-8">
            Use your fictional A16 privacy risks, retention decisions, and data
            inventory to assign responsibility for concrete governance
            decisions. Focus on who is accountable, who approves, who operates
            controls, who owns evidence, who remediates, and when escalation is
            required.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twenty-five fictional governance records.",
              "Give every record a stable GOV ID.",
              "Link each record to relevant PRA, DATA, MIN, EXP, or RET IDs.",
              "Name the specific decision or responsibility.",
              "Assign one accountable owner.",
              "Name formal approval authority where required.",
              "List consulted roles.",
              "List informed roles where useful.",
              "Assign the control owner.",
              "Assign the evidence owner.",
              "Assign the remediation owner.",
              "Assign the data steward where relevant.",
              "Assign the system or product owner.",
              "Record the current governance issue.",
              "Record decision authority limits.",
              "Define escalation triggers.",
              "Define review cadence.",
              "Define organizational-change triggers.",
              "Define closure authority.",
              "Define required closure evidence.",
              "Include at least five data-purpose decisions.",
              "Include at least five retention or lifecycle decisions.",
              "Include at least five privacy-risk decisions.",
              "Include at least three supplier-sharing decisions.",
              "Include at least three control-ownership decisions.",
              "Include at least three evidence-ownership gaps.",
              "Include at least three remediation handoffs.",
              "Include at least three decisions that require leadership escalation.",
              "Include at least three cases where Privacy advises but does not own the business risk.",
              "Include at least three cases where system ownership differs from data ownership.",
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
              Use fictional teams, roles, data, risks, systems, and evidence
              only. Do not identify real employees, internal ownership gaps,
              private organizational structures, or confidential governance
              records.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Research Closeout Ownership"
          question="What is the strongest governance decision for GOV-706?"
          evidence={[
            "The Research Program Owner is accountable for the project lifecycle outcome.",
            "Research Operations performs workspace cleanup.",
            "The privacy review requires current deletion and reconciliation evidence.",
            "No role is currently assigned to own evidence production and custody.",
          ]}
          options={[
            "Assign a specific Evidence Owner while keeping the Research Program Owner accountable for the lifecycle outcome.",
            "Make the person running the deletion job the sole risk owner.",
            "Leave evidence ownership undefined because the data is temporary.",
            "Make the Privacy Team responsible for performing the deletion.",
          ]}
          bestAnswer={0}
          explanation="Evidence ownership supports assurance, while the accountable business owner still owns the lifecycle outcome."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Data Governance Operating Model"
        >
          <p className="leading-8">
            Create a fictional operating model that explains how data, privacy,
            security, product, records, compliance, control, evidence,
            remediation, and business roles work together without duplicating
            authority.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Data owner definition",
              "System owner definition",
              "Data steward definition",
              "Privacy-team mandate",
              "Security-team mandate",
              "Records-team mandate",
              "Compliance-team mandate",
              "Control-owner definition",
              "Evidence-owner definition",
              "Remediation-owner definition",
              "Risk-owner definition",
              "Approval authority",
              "Consultation rules",
              "Escalation thresholds",
              "Decision-rights catalog",
              "Handoff standard",
              "Ownership review cadence",
              "Organizational-change reassignment",
              "Closure authority",
              "Governance evidence",
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
            The strongest operating model should make decision ownership clear
            without forcing every team into the same role for every decision.
          </p>
        </Section>

        <DefenderChecklist
          title="A16.7 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A16.7 Mini Quiz: Data Governance Roles"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Data Governance Responsibility Matrix"
          prompt="Create the seventh artifact for your A16 Privacy Engineering Review: a fictional Data Governance Responsibility Matrix with at least twenty-five records. Include GOV ID, linked PRA/DATA/MIN/EXP/RET IDs, decision/responsibility, accountable owner, approval authority, consulted roles, informed roles where useful, control owner, evidence owner, remediation owner, data steward, system/product owner, current governance issue, authority limit, escalation trigger, review cadence, organizational-change trigger, closure authority, and closure evidence."
          tips={[
            "Assign one accountable owner for each major decision.",
            "Separate business ownership from technical administration.",
            "Keep advisory roles distinct from approval authority.",
            "Assign evidence ownership explicitly.",
            "Define escalation before a difficult decision occurs.",
            "Use fictional or synthetic roles only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A16.8?"
        >
          <p className="leading-8">
            A16.8 focuses on Privacy by Design in Systems. Before continuing,
            make sure you can identify who has authority to turn privacy
            requirements into architecture, product, control, and lifecycle
            decisions.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish data owner, system owner, control owner, evidence owner, remediation owner, and risk owner.",
              "I can explain why advisory teams do not automatically own business risk.",
              "I can assign one accountable owner while keeping consultation broad.",
              "I can identify when a decision should be escalated.",
              "I can explain how governance handoffs affect privacy-control effectiveness.",
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
          title="How to Make the Data Governance Responsibility Matrix Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Map decisions, not departments",
                detail:
                  "A strong matrix says who owns a specific decision such as partner scope, retention, or risk acceptance.",
              },
              {
                title: "Separate role types",
                detail:
                  "Keep accountable owner, approver, control owner, evidence owner, and remediation owner distinct.",
              },
              {
                title: "Show authority limits",
                detail:
                  "An owner should know when a decision must be escalated.",
              },
              {
                title: "Show handoffs",
                detail:
                  "Important cross-functional work should define what one team sends and what another must return.",
              },
              {
                title: "Show evidence ownership",
                detail:
                  "Reviewable governance depends on current evidence with a named custodian.",
              },
              {
                title: "Show change triggers",
                detail:
                  "Ownership should be revisited after reorganizations, supplier changes, or major product changes.",
              },
              {
                title: "Show closure authority",
                detail:
                  "The person performing remediation should not automatically decide that the risk is closed.",
              },
              {
                title: "Connect forward",
                detail:
                  "A16.8 will use these governance roles to assign privacy-by-design responsibilities across system architecture.",
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
            Governance exercises use fictional organizations and roles only
          </h2>
          <p className="mt-3 leading-7">
            Do not identify real employees, expose private organizational
            structures, investigate internal ownership gaps, or use
            confidential governance documents. All responsibilities, roles,
            systems, and evidence in this lesson are fictional and educational.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A16.7 Data Governance Roles Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a structured model for data ownership, product
            ownership, privacy and security advice, control ownership, evidence
            ownership, remediation ownership, risk ownership, decision rights,
            handoffs, escalation, and closure authority. Next, A16.8 focuses on
            Privacy by Design in Systems.
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