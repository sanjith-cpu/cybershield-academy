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
const previousLesson = `${modulePath}/assets-threats-impact-and-likelihood`;
const nextLesson = `${modulePath}/security-controls-and-control-testing`;

const objectives = [
  "Explain how a cybersecurity risk register turns individual findings into a structured decision record with ownership, treatment, evidence, review, escalation, and closure.",
  "Distinguish risk owner, control owner, remediation owner, system owner, data owner, evidence owner, and approver responsibilities.",
  "Build risk records with scenario, impact, likelihood, controls, evidence, residual risk, treatment, status, due dates, review cadence, and change triggers.",
  "Evaluate when a risk should remain Monitor, Treat, Conditional, Accepted Risk, Blocked, or Closed based on current evidence and governance.",
  "Build a Cybersecurity Risk Register that becomes the third artifact in the A15 Risk Register and Leadership Recommendation.",
];

const registerPurpose = [
  {
    title: "One source of decision context",
    meaning:
      "The register connects the scenario, business consequence, controls, evidence, ownership, treatment, and review state in one place.",
    value:
      "A reviewer can understand why the risk exists and what decision is being tracked without searching through scattered notes.",
  },
  {
    title: "Visible accountability",
    meaning:
      "The register names who owns the business risk, who operates controls, and who performs remediation.",
    value:
      "The organization can separate decision authority from technical execution.",
  },
  {
    title: "Treatment tracking",
    meaning:
      "The record shows actions, milestones, due dates, dependencies, and expected closure evidence.",
    value:
      "Risk treatment becomes a managed process rather than a one-time conversation.",
  },
  {
    title: "Evidence and uncertainty history",
    meaning:
      "The register preserves what evidence supported the decision and what remained partial, stale, missing, or contradictory.",
    value:
      "Future reviewers can tell why a previous decision was reasonable and when it should be reconsidered.",
  },
  {
    title: "Prioritization",
    meaning:
      "Impact, likelihood, criticality, control strength, evidence quality, and time sensitivity help compare risks.",
    value:
      "Limited security and business resources can focus on the most consequential unresolved risks.",
  },
  {
    title: "Governance history",
    meaning:
      "The register records decisions, approvals, exceptions, Accepted Risk, escalation, and closure.",
    value:
      "The organization can reconstruct who decided what, when, and on the basis of which evidence.",
  },
];

const registerFields = [
  {
    field: "Risk ID",
    purpose: "Provide a stable reference that survives edits, owner changes, and treatment updates.",
    strong: "RSK-102",
    weak: "The old server issue",
  },
  {
    field: "Business service / asset",
    purpose: "Show what capability, data, identity, supplier, or technology is affected.",
    strong: "Legacy Reporting Service / historical sensitive reports",
    weak: "Server",
  },
  {
    field: "Risk scenario",
    purpose: "Explain what could happen and why it matters to the organization.",
    strong: "Legacy trust and transport gaps could expose sensitive reports or interrupt reporting services.",
    weak: "Legacy risk",
  },
  {
    field: "Impact",
    purpose: "Describe the business consequence if the scenario occurs.",
    strong: "High — sensitive data exposure, disruption, difficult investigation, governance impact",
    weak: "Bad",
  },
  {
    field: "Likelihood",
    purpose: "Record how plausible the scenario is under current conditions and evidence.",
    strong: "Medium-High — several active control gaps and incomplete ownership remain",
    weak: "Probably high",
  },
  {
    field: "Current controls",
    purpose: "Show which safeguards already reduce the scenario.",
    strong: "Restricted network scope, partial monitoring, time-bounded modernization exception",
    weak: "Security controls",
  },
  {
    field: "Evidence",
    purpose: "Show what supports the risk and control judgment.",
    strong: "Current exception, partial inventory, current trust findings, latest control review",
    weak: "Team says it is fine",
  },
  {
    field: "Risk owner",
    purpose: "Name the role accountable for the business decision about residual risk.",
    strong: "Reporting Product Owner",
    weak: "Security",
  },
  {
    field: "Treatment",
    purpose: "State what the organization intends to do about the risk.",
    strong: "Treat — modernize trust, assign ownership, improve transport, retire obsolete dependencies",
    weak: "Fix later",
  },
  {
    field: "Residual risk",
    purpose: "Explain what remains after current controls and treatment are considered.",
    strong: "High until legacy trust and ownership gaps close",
    weak: "Some risk remains",
  },
  {
    field: "Due date / milestone",
    purpose: "Create accountability for a meaningful treatment step.",
    strong: "Dependency mapping complete by 2026-10-30",
    weak: "ASAP",
  },
  {
    field: "Review trigger",
    purpose: "Define which change automatically reopens the risk.",
    strong: "Owner change, new data onboarding, exception expiry, incident, architecture migration",
    weak: "Review later",
  },
];

const ownershipModel = [
  {
    role: "Risk owner",
    responsibility:
      "Owns the business consequence and decides whether the residual risk is acceptable.",
    does:
      "Approves treatment direction, accepts risk where authorized, supports prioritization, and participates in review.",
    doesNot:
      "Automatically operate every technical safeguard.",
  },
  {
    role: "Control owner",
    responsibility:
      "Owns the operation and effectiveness of a specific security control.",
    does:
      "Maintains the control, produces evidence, reports failures, and remediates control weaknesses.",
    doesNot:
      "Accept the business residual risk merely because they operate the control.",
  },
  {
    role: "Remediation owner",
    responsibility:
      "Owns a specific treatment task, milestone, or project.",
    does:
      "Executes the work, tracks dependencies, and produces closure evidence.",
    doesNot:
      "Close the risk just because implementation work was attempted.",
  },
  {
    role: "System owner",
    responsibility:
      "Owns the application or platform and coordinates technical change.",
    does:
      "Supports architecture decisions, dependency mapping, remediation, and operating evidence.",
    doesNot:
      "Automatically become the authorized risk acceptor.",
  },
  {
    role: "Data owner",
    responsibility:
      "Defines data sensitivity, business use, retention, and acceptable disclosure.",
    does:
      "Clarifies business impact, classification, handling, and acceptable use.",
    doesNot:
      "Operate every technical security control protecting the data.",
  },
  {
    role: "Evidence owner",
    responsibility:
      "Maintains the records used to support a control or risk decision.",
    does:
      "Keeps evidence current, attributable, complete, and available for review.",
    doesNot:
      "Change the risk conclusion simply to match the evidence they maintain.",
  },
];

const lifecycleStates = [
  {
    state: "Draft",
    meaning:
      "Risk has been identified but context, evidence, ownership, or treatment is still incomplete.",
    action: "Complete analysis before relying on the record for a final decision.",
  },
  {
    state: "Open",
    meaning:
      "Risk is active but treatment or governance is still being organized.",
    action: "Assign owners, treatment, milestones, and review cadence.",
  },
  {
    state: "Treat",
    meaning:
      "The organization is actively reducing the risk through remediation or mitigation.",
    action: "Track actions, due dates, dependencies, evidence, and residual risk.",
  },
  {
    state: "Conditional",
    meaning:
      "The business decision can continue only under specific time-bounded conditions.",
    action: "Monitor the condition and define what moves the risk to Treat, Blocked, or Closed.",
  },
  {
    state: "Accepted Risk",
    meaning:
      "An authorized risk owner formally accepts the residual risk for a defined scope and period.",
    action: "Maintain rationale, approval, review trigger, and expiry where applicable.",
  },
  {
    state: "Blocked",
    meaning:
      "Current residual risk or missing evidence is too significant for approval.",
    action: "Resolve the blocking condition before proceeding.",
  },
  {
    state: "Monitor",
    meaning:
      "Current controls and residual risk are acceptable, but the risk remains business-relevant.",
    action: "Review on schedule and when triggers occur.",
  },
  {
    state: "Closed",
    meaning:
      "Evidence shows the risk was resolved, avoided, retired, or reduced to the approved target state.",
    action: "Preserve closure rationale and validation evidence.",
  },
];

const prioritizationFactors = [
  {
    factor: "Business impact",
    question: "How severe would the consequence be if the scenario occurred?",
    effect:
      "High-impact risks generally deserve stronger attention even when likelihood is lower.",
  },
  {
    factor: "Likelihood",
    question: "How plausible is the scenario under current conditions?",
    effect:
      "More plausible scenarios often justify faster treatment or closer monitoring.",
  },
  {
    factor: "Business criticality",
    question: "How essential is the affected service, data, supplier, or process?",
    effect:
      "Critical services can justify faster action because operational consequences are larger.",
  },
  {
    factor: "Control weakness",
    question: "How much current protection actually reduces the scenario?",
    effect:
      "Weak or unproven controls increase urgency.",
  },
  {
    factor: "Evidence quality",
    question: "How current and reliable is the evidence?",
    effect:
      "Missing or contradictory evidence can justify escalation or a more cautious decision.",
  },
  {
    factor: "Dependency / concentration",
    question: "Does the organization rely heavily on one provider, system, team, or control?",
    effect:
      "Single points of dependency can increase residual risk and recovery urgency.",
  },
  {
    factor: "Time sensitivity",
    question: "Is there an approaching expiry, launch, migration, contract renewal, or audit?",
    effect:
      "Near-term deadlines can increase treatment urgency.",
  },
  {
    factor: "Risk tolerance",
    question: "How much residual risk is acceptable for this business context?",
    effect:
      "A risk above tolerance should escalate even if another risk has a similar score.",
  },
];

const reviewTriggers = [
  {
    trigger: "Ownership change",
    example: "Application, supplier, data, or business owner changes.",
    why: "Accountability and decision authority may no longer be current.",
  },
  {
    trigger: "Architecture change",
    example: "Migration, redesign, new environment, integration, or trust relationship.",
    why: "Exposure, controls, dependencies, impact, and evidence may change.",
  },
  {
    trigger: "Data change",
    example: "New sensitive data, new retention requirement, or larger user population.",
    why: "Business impact and applicable controls may change.",
  },
  {
    trigger: "Control degradation",
    example: "Failed test, stale evidence, configuration drift, or monitoring failure.",
    why: "Residual risk may increase even if the original scenario is unchanged.",
  },
  {
    trigger: "Incident / outage",
    example: "Actual disruption or security event related to the scenario.",
    why: "Likelihood and control effectiveness should be reconsidered.",
  },
  {
    trigger: "Exception expiry",
    example: "Temporary approved deviation reaches its end date.",
    why: "The organization must close, renew through governance, or change the decision.",
  },
  {
    trigger: "Supplier change",
    example: "Contract renewal, acquisition, major finding, or service expansion.",
    why: "Third-party risk assumptions may no longer hold.",
  },
  {
    trigger: "Evidence degradation",
    example: "Evidence becomes stale, missing, partial, or contradictory.",
    why: "Confidence in the current decision should decrease.",
  },
];

const principles = [
  {
    title: "A register is a decision tool, not a storage bin",
    meaning:
      "Every material risk should have a purpose, owner, treatment, evidence, and next action.",
    review: "Does each record help someone make or track a decision?",
  },
  {
    title: "Ownership should be explicit",
    meaning:
      "Risk owner, control owner, and remediation owner often have different responsibilities.",
    review: "Can everyone tell who decides, who operates, and who fixes?",
  },
  {
    title: "Status should reflect reality",
    meaning:
      "A risk should not be Closed because a ticket exists or an exception was approved.",
    review: "Does the status match current evidence and residual risk?",
  },
  {
    title: "Due dates need meaningful milestones",
    meaning:
      "A generic date is weaker than a defined treatment outcome.",
    review: "What exactly should be different by the due date?",
  },
  {
    title: "Evidence should age",
    meaning:
      "Risk conclusions should lose confidence when evidence becomes stale.",
    review: "Which records need evidence refresh before the next review?",
  },
  {
    title: "Accepted Risk remains visible",
    meaning:
      "Acceptance is a governed decision, not a reason to delete the record.",
    review: "Is the acceptance scope, owner, rationale, and review trigger still current?",
  },
  {
    title: "Closure requires validation",
    meaning:
      "A remediation task can finish while the underlying risk remains.",
    review: "What objective evidence proves the target risk state was reached?",
  },
  {
    title: "Registers should support escalation",
    meaning:
      "High-impact, overdue, unowned, Blocked, or evidence-poor risks need a clear leadership path.",
    review: "What condition requires escalation?",
  },
];

const vocabulary = [
  { term: "Risk register", definition: "A structured record of risks, owners, controls, evidence, treatment, status, and review information." },
  { term: "Risk owner", definition: "The role accountable for the business decision about residual risk." },
  { term: "Control owner", definition: "The role accountable for operating and maintaining a safeguard." },
  { term: "Remediation owner", definition: "The role accountable for completing a specific treatment action." },
  { term: "Residual risk", definition: "Risk remaining after current controls and treatment are considered." },
  { term: "Risk treatment", definition: "The chosen response to a risk, such as mitigate, avoid, transfer, accept, or monitor." },
  { term: "Due date", definition: "The date by which a treatment milestone or decision is expected." },
  { term: "Review cadence", definition: "The normal schedule for reconsidering a risk and its evidence." },
  { term: "Review trigger", definition: "An event that causes a risk to be reconsidered outside the normal schedule." },
  { term: "Closure criteria", definition: "The measurable conditions that must be true before a risk can be Closed." },
  { term: "Escalation", definition: "Moving a risk decision to a higher authority because of impact, urgency, ownership, tolerance, or unresolved treatment." },
  { term: "Risk aging", definition: "How long a risk or treatment has remained open and whether that duration changes urgency or confidence." },
];

const records = [
  {
    id: "RSK-101",
    service: "Student Services Portal",
    scenario: "A major service failure could interrupt sensitive student-support workflows during a high-demand period.",
    impact: "High",
    likelihood: "Low-Medium",
    controls: "Monitoring, redundancy, strong authentication, workload identity, recovery procedures",
    evidence: "Current architecture review + current recovery test + current service monitoring",
    riskOwner: "Student Services Product Owner",
    controlOwners: "Platform Security, Security Operations, Resilience Team",
    treatment: "Monitor",
    residual: "Moderate because the service remains business-critical despite strong controls",
    due: "Quarterly review",
    status: "Monitor",
    closure: "Not intended for closure while the critical service remains active; monitor residual risk",
    trigger: "Major outage, architecture change, new data class, control degradation",
  },
  {
    id: "RSK-102",
    service: "Legacy Reporting Service",
    scenario: "Legacy trust, transport, and ownership gaps could expose sensitive reports or interrupt reporting services.",
    impact: "High",
    likelihood: "Medium-High",
    controls: "Restricted network scope, partial monitoring, time-bounded modernization exception",
    evidence: "Current exception + partial inventory + current trust findings",
    riskOwner: "Reporting Product Owner",
    controlOwners: "Infrastructure Security, Reporting Platform Team",
    treatment: "Treat — modernize trust, assign ownership, improve transport, retire obsolete dependencies",
    residual: "High until major legacy gaps close",
    due: "P0 milestones tracked monthly",
    status: "Treat",
    closure: "Modernization complete, obsolete trust removed, key ownership current, protected transport validated",
    trigger: "Exception expiry, incident, migration milestone, owner change, new data onboarding",
  },
  {
    id: "RSK-103",
    service: "Partner Scheduling Integration",
    scenario: "Partner certificate lifecycle failure could interrupt trusted service communication.",
    impact: "Medium-High",
    likelihood: "Medium",
    controls: "Certificate monitoring, renewal workflow, sponsor oversight, protected transport",
    evidence: "Current certificate + renewal ticket + current sponsor",
    riskOwner: "Integration Owner",
    controlOwners: "Integration Platform, Platform Security",
    treatment: "Treat / monitor renewal",
    residual: "Moderate until replacement certificate is validated",
    due: "Renewal complete before current certificate expiration",
    status: "Conditional",
    closure: "Replacement certificate validated and old trust retired",
    trigger: "Renewal delay, partner ownership change, certificate status change",
  },
  {
    id: "RSK-104",
    service: "Recovery Backup Repository",
    scenario: "A major disruption could become prolonged if current backup data, key versions, or recovery procedures cannot restore critical services.",
    impact: "High",
    likelihood: "Low-Medium",
    controls: "Encrypted backups, protected replication, restricted recovery, regular restore testing",
    evidence: "Current backup inventory + current key inventory + current restore evidence",
    riskOwner: "Resilience Leader",
    controlOwners: "Resilience Team, Data Platform",
    treatment: "Monitor",
    residual: "Moderate because disaster conditions cannot be perfectly reproduced in testing",
    due: "Next scheduled recovery validation",
    status: "Monitor",
    closure: "Not closed while business-critical recovery dependency exists",
    trigger: "Restore failure, key rotation, provider migration, major backup change",
  },
  {
    id: "RSK-105",
    service: "Critical SaaS Provider",
    scenario: "A major provider outage or provider business failure could interrupt a critical organizational workflow.",
    impact: "High",
    likelihood: "Medium",
    controls: "Supplier review, contractual commitments, continuity plan, service monitoring",
    evidence: "Current supplier assessment + contract + continuity plan",
    riskOwner: "Business Service Owner",
    controlOwners: "Vendor Management, Service Owner",
    treatment: "Treat — improve continuity, alternate operating procedures, exit planning, concentration monitoring",
    residual: "Moderate-High because no practical alternate provider exists today",
    due: "Continuity improvement plan reviewed before contract renewal",
    status: "Treat",
    closure: "Residual risk reduced to tolerance through improved alternatives or approved acceptance",
    trigger: "Supplier incident, contract renewal, financial change, major service expansion",
  },
  {
    id: "RSK-106",
    service: "Analytics Export Workflow",
    scenario: "Sensitive exports could remain in temporary staging longer than intended or be released outside approved business authorization.",
    impact: "High",
    likelihood: "Low-Medium",
    controls: "Export approval, encrypted staging, protected transfer, signed manifest, cleanup monitoring",
    evidence: "Current export review + current recipient trust + recent cleanup validation",
    riskOwner: "Analytics Product Owner",
    controlOwners: "Analytics Platform, Data Governance",
    treatment: "Monitor",
    residual: "Low-Moderate when authorization and retention controls operate as intended",
    due: "Monthly review of temporary-storage cleanup evidence",
    status: "Monitor",
    closure: "Risk remains monitored while the export workflow remains active",
    trigger: "New recipient, new data class, retention change, export redesign",
  },
  {
    id: "RSK-107",
    service: "Temporary Data Science Workspace",
    scenario: "Temporary sensitive datasets could persist beyond approved project timelines.",
    impact: "Medium-High",
    likelihood: "Low-Medium",
    controls: "Encrypted temporary storage, project-scoped access, automated cleanup",
    evidence: "Current workspace policy + partial cleanup evidence",
    riskOwner: "Data Science Platform Owner",
    controlOwners: "Data Science Platform, Data Governance",
    treatment: "Validate cleanup evidence and retention controls",
    residual: "Moderate until lifecycle evidence is complete",
    due: "Cleanup validation before next project closeout",
    status: "Conditional",
    closure: "Automated destruction evidence proves expired workspaces and datasets are removed",
    trigger: "Retention policy change, project extension, cleanup failure, data classification change",
  },
];

const dashboardMetrics = [
  { label: "Active risks", value: "7", note: "Portal, legacy, partner, recovery, supplier, export, and temporary-workspace risks" },
  { label: "Treat", value: "2", note: "Legacy reporting and critical SaaS concentration require active reduction" },
  { label: "Conditional", value: "2", note: "Partner renewal and temporary-workspace lifecycle require bounded conditions" },
  { label: "Monitor", value: "3", note: "Portal, recovery, and export remain governed under current controls" },
];

const logs = [
  "[08:16] RSK-101 owner=STUDENT_SERVICES status=MONITOR review=QUARTERLY",
  "[08:40] RSK-102 owner=REPORTING status=TREAT p0_milestones=OPEN",
  "[09:04] RSK-103 owner=INTEGRATION status=CONDITIONAL cert_renewal=OPEN",
  "[09:28] RSK-104 owner=RESILIENCE status=MONITOR restore=CURRENT",
  "[09:52] RSK-105 owner=BUSINESS_SERVICE status=TREAT concentration=SINGLE_PROVIDER",
  "[10:16] RSK-106 owner=ANALYTICS status=MONITOR cleanup=CURRENT",
  "[10:40] RSK-107 owner=DATA_SCIENCE status=CONDITIONAL cleanup_evidence=PARTIAL",
];

const antiPatterns = [
  { title: "Every risk owned by Security", problem: "Security becomes accountable for business consequences it does not own.", better: "Assign a business risk owner and separate technical control owners." },
  { title: "Risk register as a ticket list", problem: "Records contain tasks but no business scenario, residual risk, or governance decision.", better: "Connect treatment tasks to the risk scenario and decision state." },
  { title: "Accepted Risk disappears", problem: "The record is deleted after acceptance.", better: "Keep Accepted Risk visible with scope, owner, rationale, review trigger, and expiry where relevant." },
  { title: "Closed when work starts", problem: "A risk is closed as soon as remediation begins.", better: "Close only when validation evidence shows the target state was reached." },
  { title: "No due date or meaningless due date", problem: "ASAP or an arbitrary date does not define accountability.", better: "Track meaningful milestones tied to treatment outcomes." },
  { title: "Overdue risk without escalation", problem: "High-impact treatment slips repeatedly with no leadership attention.", better: "Define escalation triggers for overdue, Blocked, unowned, or above-tolerance risks." },
  { title: "Stale evidence, unchanged status", problem: "A Monitor risk keeps the same status even after supporting evidence becomes old.", better: "Refresh evidence or reduce confidence in the decision state." },
  { title: "One owner field hides multiple responsibilities", problem: "Risk acceptance, control operation, remediation, and evidence maintenance are treated as one job.", better: "Use distinct owner roles when responsibility differs." },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response: "Keep RSK-102 in Treat and escalate any missed P0 milestones to the risk owner and leadership.",
    outcome: "Best. High residual risk and open legacy gaps require active treatment and accountability.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response: "Change RSK-102 to Closed because a modernization project exists.",
    outcome: "Risky. A project plan does not prove that the underlying risk changed.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response: "Move RSK-102 to Accepted Risk automatically because treatment is taking a long time.",
    outcome: "Risky. Risk acceptance requires explicit authorization and never happens automatically.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response: "Keep RSK-107 Conditional until current cleanup evidence proves temporary datasets are removed as designed.",
    outcome: "Best. The condition is directly tied to the lifecycle evidence that remains incomplete.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response: "Close RSK-107 because encryption is enabled.",
    outcome: "Risky. Encryption does not prove retention and cleanup controls are working.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response: "Assign the risk to the security team because security maintains the platform controls.",
    outcome: "Caution. Security may own controls while a business or platform owner remains accountable for residual risk.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question: "What is the main purpose of a cybersecurity risk register?",
    choices: [
      "To organize risk scenarios, owners, evidence, treatment, residual risk, and review decisions in one structured record.",
      "To store vulnerabilities only.",
      "To replace all technical controls.",
      "To guarantee that risk scores are accurate.",
    ],
    answer: 0,
    explanation: "A risk register supports ongoing business and security decisions, not just issue storage.",
  },
  {
    question: "Who should normally own the business decision about residual risk?",
    choices: ["The authorized risk owner.", "The control owner automatically.", "The evidence owner.", "Any security analyst."],
    answer: 0,
    explanation: "Risk ownership is about accountability for the business consequence.",
  },
  {
    question: "When should a risk normally be Closed?",
    choices: [
      "When validation evidence shows the risk was resolved, avoided, retired, or reduced to the approved target state.",
      "As soon as a remediation ticket is opened.",
      "As soon as someone says work is complete.",
      "Whenever the risk becomes old.",
    ],
    answer: 0,
    explanation: "Closure requires evidence that the risk state actually changed.",
  },
  {
    question: "What is strongest for an Accepted Risk record?",
    choices: [
      "Keep it visible with owner, rationale, scope, review trigger, and expiry where relevant.",
      "Delete it immediately.",
      "Remove all evidence.",
      "Treat it as Closed forever.",
    ],
    answer: 0,
    explanation: "Accepted Risk remains an active governance decision that may need future review.",
  },
  {
    question: "Why should control ownership be separate from risk ownership?",
    choices: [
      "Because operating a safeguard is different from owning the business consequence and acceptance decision.",
      "Because control owners should never participate in risk reviews.",
      "Because risk owners cannot understand controls.",
      "Because evidence owners accept all risk.",
    ],
    answer: 0,
    explanation: "Different roles support different accountability boundaries.",
  },
  {
    question: "What should happen when supporting evidence for a Monitor risk becomes stale?",
    choices: [
      "Refresh the evidence or reduce confidence in the current risk decision.",
      "Keep the status unchanged forever.",
      "Delete the risk.",
      "Assume the control is still effective.",
    ],
    answer: 0,
    explanation: "Risk status should reflect current evidence quality.",
  },
  {
    question: "What is a review trigger?",
    choices: [
      "An event that causes a risk to be reconsidered outside the normal review schedule.",
      "A vulnerability exploit.",
      "A permanent risk acceptance.",
      "A score that never changes.",
    ],
    answer: 0,
    explanation: "Review triggers keep risk decisions current when important conditions change.",
  },
];

const checklistItems = [
  "Every risk has a stable ID.",
  "Business service or asset is named.",
  "Risk scenario is understandable in business language.",
  "Impact is documented.",
  "Likelihood is documented with reasoning.",
  "Current controls are listed.",
  "Evidence source and freshness are recorded.",
  "Risk owner is named.",
  "Control owners are named separately.",
  "Remediation owner is assigned where treatment work exists.",
  "Residual risk is explicit.",
  "Treatment is explicit.",
  "Meaningful due dates or milestones are recorded.",
  "Status reflects current evidence.",
  "Accepted Risk remains visible.",
  "Conditional risks have explicit conditions.",
  "Blocked risks have explicit blockers.",
  "Closure criteria require validation evidence.",
  "Review cadence is defined.",
  "Change triggers are defined without requiring unsafe testing of real systems.",
];

const takeaways = [
  "A risk register turns analysis into an ongoing governance process.",
  "Risk ownership, control ownership, remediation ownership, and evidence ownership are different responsibilities.",
  "Status should reflect current residual risk and evidence, not project activity alone.",
  "Accepted Risk should remain visible and reviewable.",
  "Closure requires objective validation evidence.",
  "Meaningful milestones are stronger than vague due dates.",
  "Stale evidence should reduce confidence in the current decision.",
  "High-impact, overdue, unowned, or above-tolerance risks need escalation.",
  "Review triggers keep risk records current when business or technical conditions change.",
  "The Cybersecurity Risk Register prepares you for A15.4 Security Controls and Control Testing.",
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

export default function RiskRegistersAndOwnershipPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-100">High School Advanced</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">A15.3</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">Risk Management and Compliance</span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">Lesson A15.3</p>
          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">Risk Registers and Ownership</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A strong risk register is not a list of scary findings. It is a structured decision system that shows what the risk is, why it matters, who owns the decision, what controls exist, what treatment is planned, what evidence supports the status, and what would make the decision change.
          </p>
          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional risk records and safe evidence only. It does not require scanning, exploiting, or investigating real systems, organizations, or suppliers.
          </p>
          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A15: Risk Management and Compliance"
          lessonTitle="Risk Registers and Ownership"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A15.3 Entry Readiness"
          items={[
            "I can write a clear risk scenario.",
            "I can separate impact from likelihood.",
            "I can explain uncertainty and evidence quality.",
            "I understand that risk owner and control owner are different roles.",
          ]}
        />

        <Section eyebrow="Professional Hook" title="A Risk Exists in the Register Because Someone Needs to Make or Track a Decision">
          <p className="leading-8">
            A useful register helps a leader answer practical questions: What could happen? How serious is it? What already reduces the risk? What remains? Who owns the decision? What treatment is underway? When will we review it again? What would allow us to close it?
          </p>
          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">A professional risk register turns analysis into ownership, treatment, evidence, review, and closure.</p>
          </div>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Capabilities for This Lesson">
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div key={objective} className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">{index + 1}</span>
                <p className="leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Purpose" title="Why Organizations Maintain Risk Registers">
          <div className="grid gap-5 md:grid-cols-2">
            {registerPurpose.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.meaning}</p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">Value: {item.value}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Core Fields" title="A Risk Record Should Be Specific Enough to Govern">
          <div className="grid gap-5 md:grid-cols-2">
            {registerFields.map((item) => (
              <article key={item.field} className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
                <h3 className="font-black text-blue-50">{item.field}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">{item.purpose}</p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">Strong: {item.strong}</p>
                <p className="mt-2 text-sm leading-7 text-red-100">Weak: {item.weak}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Ownership Model" title="Different Decisions Belong to Different Roles">
          <div className="grid gap-5">
            {ownershipModel.map((item) => (
              <article key={item.role} className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6">
                <h3 className="text-xl font-black text-purple-50">{item.role}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">Responsibility: {item.responsibility}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">Should do</p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">{item.does}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">Should not assume</p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">{item.doesNot}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Risk Lifecycle" title="Status Should Describe the Current Governance State">
          <div className="grid gap-5 md:grid-cols-2">
            {lifecycleStates.map((item) => (
              <article key={item.state} className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                <h3 className="font-black text-cyan-50">{item.state}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">{item.meaning}</p>
                <p className="mt-3 text-sm leading-7 text-white">Action: {item.action}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Prioritization" title="Not Every Risk Needs the Same Urgency">
          <div className="grid gap-5 md:grid-cols-2">
            {prioritizationFactors.map((item) => (
              <article key={item.factor} className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5">
                <h3 className="font-black text-yellow-50">{item.factor}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">{item.question}</p>
                <p className="mt-3 text-sm leading-7 text-white">Priority effect: {item.effect}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Review Triggers" title="Risk Decisions Should Reopen When Conditions Change">
          <div className="grid gap-5 md:grid-cols-2">
            {reviewTriggers.map((item) => (
              <article key={item.trigger} className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <h3 className="font-black text-emerald-50">{item.trigger}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">Example: {item.example}</p>
                <p className="mt-3 text-sm leading-7 text-white">Why it matters: {item.why}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Design Principles" title="Eight Principles for a Useful Risk Register">
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.meaning}</p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">Review: {item.review}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Vocabulary" title="Risk Register and Ownership Terms">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map((item) => (
              <article key={item.term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-white">{item.term}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.definition}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Fictional Risk Register" title="Seven Northbridge Risk Records">
          <div className="grid gap-5">
            {records.map((item) => (
              <article key={item.id} className="rounded-3xl border border-slate-700 bg-slate-950 p-6">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">{item.id}</span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">{item.status}</span>
                </div>
                <h3 className="mt-5 text-xl font-black text-white">{item.service}</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Risk scenario", item.scenario],
                    ["Impact", item.impact],
                    ["Likelihood", item.likelihood],
                    ["Current controls", item.controls],
                    ["Evidence", item.evidence],
                    ["Risk owner", item.riskOwner],
                    ["Control owners", item.controlOwners],
                    ["Treatment", item.treatment],
                    ["Residual risk", item.residual],
                    ["Due / milestone", item.due],
                    ["Closure criteria", item.closure],
                    ["Review trigger", item.trigger],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">{label}</p>
                      <p className="mt-2 text-sm leading-7 text-blue-50">{value}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Cybersecurity Risk Register Dashboard"
          subtitle="Fictional active risk status, treatment, ownership, and review summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Legacy Reporting Risk Has Open P0 Treatment Milestones"
          severity="High"
          time="08:40"
          source="Fictional Risk Register Review"
          details="RSK-102 remains High residual risk because legacy trust, ownership, and transport gaps are still open. The record has an assigned business risk owner and active treatment, but closure criteria are not yet met."
          recommendation="Keep the risk in Treat, track P0 milestones monthly, and escalate missed milestones to the risk owner and leadership."
        />

        <Section eyebrow="Risk Aging and Escalation" title="An Old Open Risk Is Not Automatically a Bad Risk—But It Needs Explanation">
          <p className="leading-8">
            Some risks remain open for years because the underlying business service continues to exist. The important question is whether the risk remains governed. A well-controlled critical service may stay in Monitor indefinitely. A high-risk legacy problem that repeatedly misses treatment milestones should escalate.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-50">Healthy long-lived risk</h3>
              <p className="mt-2 text-sm leading-7 text-emerald-100">Current owner, current controls, current evidence, acceptable residual risk, regular review, clear triggers.</p>
            </article>
            <article className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5">
              <h3 className="font-black text-red-50">Unhealthy aging risk</h3>
              <p className="mt-2 text-sm leading-7 text-red-100">Overdue treatment, stale evidence, unclear owner, repeated exceptions, no escalation, or no closure plan.</p>
            </article>
          </div>
        </Section>

        <FakeLogPanel title="Fictional Risk Register Activity Log" logs={logs} />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Reporting Ownership and Status"
          question="What is the strongest current decision for RSK-102?"
          evidence={[
            "The business still relies on the service.",
            "High-impact legacy trust and ownership gaps remain.",
            "A named Reporting Product Owner owns the business risk.",
            "P0 treatment milestones are active.",
            "Closure criteria require modernization, current ownership, protected transport, and obsolete-trust retirement.",
          ]}
          options={[
            "Treat — keep treatment active and escalate missed milestones until closure evidence exists.",
            "Closed — a named risk owner means the issue is resolved.",
            "Accepted Risk automatically — the risk is old.",
            "Monitor only — treatment milestones are optional.",
          ]}
          bestAnswer={0}
          explanation="The risk remains active and high until objective closure criteria are satisfied. Ownership improves governance but does not remove the risk."
        />

        <Section eyebrow="Common Register Mistakes" title="Eight Ways a Risk Register Stops Helping">
          <div className="grid gap-5">
            {antiPatterns.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-black text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-red-100">Why it fails: {item.problem}</p>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">Better approach: {item.better}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Overdue High-Risk Treatment"
          scenario="A legacy reporting risk has a current risk owner and treatment plan, but several P0 milestones are slipping while residual risk remains High."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Temporary Workspace Cleanup Evidence"
          scenario="A temporary workspace risk is encrypted and access-controlled, but current cleanup evidence is incomplete."
          choices={scenarioTwoChoices}
        />

        <Section eyebrow="Safe Fictional Lab" title="Build a Cybersecurity Risk Register">
          <p className="leading-8">
            Use fictional services, risks, owners, controls, treatment plans, evidence, and governance decisions only. The goal is to create a professional register that supports decisions without interacting with real systems.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twenty-five fictional risk records.",
              "Give every risk a stable RSK ID.",
              "Record the business service or asset.",
              "Write a clear risk scenario.",
              "Record impact and impact rationale.",
              "Record likelihood and likelihood rationale.",
              "Record current controls.",
              "Record evidence sources and freshness.",
              "Assign a business risk owner.",
              "Assign control owners separately.",
              "Assign remediation owner where treatment exists.",
              "Assign evidence owner where useful.",
              "Record treatment strategy.",
              "Record current residual risk.",
              "Record current status.",
              "Record treatment milestone or due date.",
              "Record review cadence.",
              "Record event-driven review triggers.",
              "Record assumptions and uncertainty.",
              "Record escalation criteria.",
              "Record closure criteria.",
              "Record closure evidence when applicable.",
              "Include at least five Monitor risks.",
              "Include at least five Treat risks.",
              "Include at least three Conditional risks.",
              "Include at least two Accepted Risk records.",
              "Include at least two Blocked risks.",
              "Include at least two Closed risks with objective closure evidence.",
              "Include at least three supplier or concentration risks.",
              "Include at least three legacy or long-lived risks.",
              "Include at least two risks with stale or contradictory evidence.",
            ].map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">{index + 1}</span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">Do not scan, probe, exploit, test, or investigate real systems, vendors, users, or accounts. Do not collect private risk records or confidential organizational documents. Use fictional and synthetic evidence only.</p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Temporary Workspace Risk"
          question="What is the strongest status for RSK-107?"
          evidence={[
            "Workspace storage is encrypted.",
            "Project access is scoped.",
            "Automated cleanup exists.",
            "Current cleanup evidence is incomplete.",
            "The risk owner and control owners are current.",
          ]}
          options={[
            "Conditional until current cleanup evidence proves the temporary lifecycle works as designed.",
            "Closed because encryption is enabled.",
            "Accepted Risk automatically because the project is temporary.",
            "Monitor with no follow-up because the owners are known.",
          ]}
          bestAnswer={0}
          explanation="The control design is promising, but incomplete evidence means the lifecycle condition is not yet fully proven."
        />

        <Section eyebrow="Advanced Challenge" title="Design a Risk Register Governance Standard">
          <p className="leading-8">
            Create a fictional organization-wide standard that explains what every risk record must contain, who may change each field, how status transitions work, when escalation is required, and what evidence is necessary for closure.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Required risk fields",
              "Risk-owner authority",
              "Control-owner responsibility",
              "Remediation-owner responsibility",
              "Evidence-owner responsibility",
              "Status transition rules",
              "Accepted Risk requirements",
              "Blocked-state requirements",
              "Review cadence",
              "Review triggers",
              "Due-date standards",
              "Escalation thresholds",
              "Overdue-risk handling",
              "Closure criteria",
              "Closure evidence",
              "Leadership reporting",
            ].map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5 text-purple-50">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">{index + 1}</span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 leading-8">The strongest governance standard should make risk status changes explainable and evidence-based rather than dependent on informal judgment.</p>
        </Section>

        <DefenderChecklist title="A15.3 Defender Checklist" items={checklistItems} />

        <Section eyebrow="Skill Check" title="Seven Questions">
          <MiniQuiz title="A15.3 Mini Quiz: Risk Registers and Ownership" questions={quizQuestions} />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Cybersecurity Risk Register"
          prompt="Create the third artifact for your A15 Risk Register and Leadership Recommendation: a fictional Cybersecurity Risk Register with at least twenty-five records. Include RSK ID, business service/asset, risk scenario, impact, likelihood, current controls, evidence, evidence freshness, risk owner, control owner, remediation owner, evidence owner where useful, treatment, residual risk, status, due date/milestone, review cadence, review trigger, escalation criteria, closure criteria, closure evidence, uncertainty, and next action."
          tips={[
            "Use stable IDs.",
            "Keep risk owner separate from control owner.",
            "Use meaningful milestones rather than vague deadlines.",
            "Keep Accepted Risk visible.",
            "Close only with validation evidence.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A15.4?">
          <p className="leading-8">A15.4 focuses on Security Controls and Control Testing. Before continuing, make sure every risk in your register can point to the controls that reduce it and the evidence that supports those controls.</p>
          <div className="mt-6 grid gap-4">
            {[
              "I can explain why a risk register is a decision tool.",
              "I can distinguish risk owner, control owner, and remediation owner.",
              "I can choose a status that matches current evidence.",
              "I can define meaningful closure criteria.",
              "I can explain when an overdue or high-risk record should escalate.",
            ].map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">{index + 1}</span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Portfolio Build Guide" title="How to Make the Cybersecurity Risk Register Look Professional">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { title: "Use stable IDs", detail: "A risk should keep the same identifier through treatment, owner change, escalation, acceptance, and closure." },
              { title: "Separate owner roles", detail: "Risk owner, control owner, remediation owner, and evidence owner may all be different." },
              { title: "Show decision state", detail: "Draft, Open, Treat, Conditional, Accepted Risk, Blocked, Monitor, and Closed should have clear meanings." },
              { title: "Use meaningful milestones", detail: "A due date should describe what should be different by that date." },
              { title: "Show evidence freshness", detail: "Risk status should lose confidence when evidence becomes stale or contradictory." },
              { title: "Use objective closure criteria", detail: "A risk closes because evidence shows the target state was reached—not because the task list is empty." },
              { title: "Show escalation rules", detail: "High residual risk, missed P0 work, missing ownership, or above-tolerance conditions should have a path to leadership." },
              { title: "Connect forward", detail: "A15.4 will evaluate whether the controls referenced in your risk register are actually designed and operating as intended." },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </Section>

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">Lesson Safety Boundary</p>
          <h2 className="mt-2 text-2xl font-black">Risk governance uses safe evidence—not offensive validation</h2>
          <p className="mt-3 leading-7">Do not scan, probe, exploit, test, or investigate real systems, vendors, accounts, or people. Do not collect private risk records or confidential organizational evidence. All records, owners, systems, logs, and evidence in this lesson are fictional.</p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Lesson Complete</p>
          <h2 className="mt-2 text-2xl font-black text-white">A15.3 Risk Registers and Ownership Complete</h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">You now have a structured model for risk records, ownership, treatment, residual risk, milestones, escalation, evidence, and closure. Next, A15.4 focuses on Security Controls and Control Testing.</p>
          <div className="mt-6"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}