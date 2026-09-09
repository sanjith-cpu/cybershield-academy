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
const previousLesson = `${modulePath}/communicating-risk-to-leaders`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate asset, threat, impact, likelihood, ownership, control, compliance, evidence, exception, supplier, and leadership information into one coherent risk decision package.",
  "Resolve conflicting evidence, ownership gaps, expired approvals, control weaknesses, supplier dependencies, and residual-risk questions without hiding uncertainty.",
  "Prioritize enterprise risks using business impact, likelihood, control effectiveness, evidence confidence, dependency, time sensitivity, and risk tolerance.",
  "Produce defensible treatment, acceptance, monitoring, escalation, blocking, and closure decisions with owners, milestones, evidence, and review triggers.",
  "Complete an Enterprise Risk Decision Package that serves as the final A15 Risk Register and Leadership Recommendation portfolio artifact.",
];

const reviewDomains = [
  {
    domain: "Business context",
    focus:
      "Identify the service, data, people, supplier, operational objective, and business dependency behind the risk.",
    decisionQuestion:
      "What business outcome could be harmed, and how important is it?",
    evidence:
      "Service inventory, data classification, dependency map, business-owner record.",
  },
  {
    domain: "Risk scenario",
    focus:
      "Connect the asset, threat event, exposure condition, consequence, current controls, and uncertainty.",
    decisionQuestion:
      "What could happen, why is it plausible, and what would the organization lose?",
    evidence:
      "Risk analysis worksheet, control findings, incident or outage summaries, architecture records.",
  },
  {
    domain: "Ownership",
    focus:
      "Separate risk owner, control owner, remediation owner, evidence owner, supplier sponsor, and approval authority.",
    decisionQuestion:
      "Who owns the consequence, who operates the safeguard, and who must act next?",
    evidence:
      "Risk register, ownership register, governance records, supplier sponsorship.",
  },
  {
    domain: "Control effectiveness",
    focus:
      "Evaluate design, operation, coverage, evidence, exceptions, and compensating controls.",
    decisionQuestion:
      "Do the controls reduce the intended risk across the intended scope?",
    evidence:
      "Control tests, operational records, configuration reviews, recovery exercises.",
  },
  {
    domain: "Compliance and governance",
    focus:
      "Evaluate applicable requirements, mappings, exceptions, evidence, and status.",
    decisionQuestion:
      "Which requirements are Met, Partially Met, Compensating, Unknown, or Not Met?",
    evidence:
      "Framework mapping register, policies, standards, exception records.",
  },
  {
    domain: "Evidence confidence",
    focus:
      "Evaluate relevance, sufficiency, reliability, freshness, attribution, completeness, and contradictions.",
    decisionQuestion:
      "How confident should decision makers be in the current conclusion?",
    evidence:
      "Audit evidence register, workpapers, test records, current source records.",
  },
  {
    domain: "Third-party dependency",
    focus:
      "Evaluate supplier criticality, assurance, concentration, fourth parties, continuity, and exit.",
    decisionQuestion:
      "What risk remains because the organization depends on a service it does not fully control?",
    evidence:
      "Supplier review, contract, continuity plan, architecture dependency map, assurance records.",
  },
  {
    domain: "Decision and treatment",
    focus:
      "Compare Treat, Accept, Avoid, Transfer/Share, Monitor, Conditional, Blocked, and Closed options.",
    decisionQuestion:
      "Which option best balances risk reduction, business need, cost, effort, timing, and tolerance?",
    evidence:
      "Risk brief, treatment plan, acceptance record, budget/effort estimate, leadership decision.",
  },
  {
    domain: "Leadership communication",
    focus:
      "Translate the technical record into a concise business decision.",
    decisionQuestion:
      "What should leadership decide, who owns it, when must it happen, and what residual risk remains?",
    evidence:
      "Leadership risk brief, dashboard, decision history, milestone plan.",
  },
];

const decisionStates = [
  {
    state: "Treat",
    meaning:
      "Active risk reduction is required because current residual risk is above tolerance or controls are not strong enough.",
    evidenceNeed:
      "Clear remediation owner, milestones, expected control outcome, and closure evidence.",
    example:
      "Legacy trust and ownership gaps remain High residual risk.",
  },
  {
    state: "Monitor",
    meaning:
      "Current residual risk is acceptable under current controls, but the risk remains business-relevant.",
    evidenceNeed:
      "Current control evidence, owner, review cadence, and change triggers.",
    example:
      "Recovery controls are strong and regularly validated, with normal residual uncertainty.",
  },
  {
    state: "Conditional",
    meaning:
      "Activity may continue only while specific bounded conditions remain true.",
    evidenceNeed:
      "Explicit conditions, expiry/review date, owner, evidence, and trigger that changes the state.",
    example:
      "Partner certificate renewal must complete before the current certificate expires.",
  },
  {
    state: "Accepted Risk",
    meaning:
      "An authorized owner formally accepts known residual risk for a defined scope and period.",
    evidenceNeed:
      "Current risk evidence, rationale, authority, scope, review trigger, and residual-risk statement.",
    example:
      "Moderate recovery uncertainty remains after successful testing and is accepted until the next annual validation.",
  },
  {
    state: "Blocked",
    meaning:
      "Current risk, missing authority, failed control, or evidence uncertainty prevents approval.",
    evidenceNeed:
      "Clear blocker, owner, evidence gap, and condition for reconsideration.",
    example:
      "An expired exception cannot support continued operation without current evidence and reapproval.",
  },
  {
    state: "Closed",
    meaning:
      "Evidence shows the risk was removed, retired, avoided, or reduced to the approved target state.",
    evidenceNeed:
      "Objective closure evidence and updated related risk/control/compliance records.",
    example:
      "Obsolete trust is removed and preferred controls are validated.",
  },
];

const prioritizationFactors = [
  {
    factor: "Business impact",
    question:
      "How severe is the consequence to operations, data, people, finances, legal obligations, or trust?",
    highSignal:
      "Critical service outage, sensitive data consequence, major operational disruption, significant compliance or trust impact.",
  },
  {
    factor: "Likelihood",
    question:
      "How plausible is the scenario under current exposure, controls, history, change, and dependency?",
    highSignal:
      "Multiple active gaps, weak controls, recurring issues, unstable dependency, or strong evidence of occurrence.",
  },
  {
    factor: "Control effectiveness",
    question:
      "How much do current controls actually reduce the risk?",
    highSignal:
      "Design or operation is Partially Effective, Ineffective, Unknown, or coverage is materially incomplete.",
  },
  {
    factor: "Evidence confidence",
    question:
      "How trustworthy is the evidence behind the current conclusion?",
    highSignal:
      "Stale, partial, missing, contradictory, or weakly attributed evidence.",
  },
  {
    factor: "Dependency / concentration",
    question:
      "How much does the organization depend on one system, supplier, platform, team, or trust relationship?",
    highSignal:
      "No practical alternative, shared critical dependency, or difficult recovery path.",
  },
  {
    factor: "Time sensitivity",
    question:
      "Is there an expiry, launch, renewal, migration, audit, contract, or operational deadline?",
    highSignal:
      "Exception expiry, certificate expiry, contract renewal, overdue P0 work, or imminent business event.",
  },
  {
    factor: "Risk tolerance",
    question:
      "Is the residual risk within the authority and tolerance of the current decision maker?",
    highSignal:
      "Residual risk exceeds approved tolerance or requires higher approval authority.",
  },
  {
    factor: "Ownership",
    question:
      "Is there a current accountable risk owner and assigned remediation/control ownership?",
    highSignal:
      "Unowned risk, missing approver, ambiguous business sponsor, or unresolved handoff.",
  },
];

const evidenceHierarchy = [
  {
    level: "Decision-ready",
    description:
      "Current, direct, attributable, sufficiently complete evidence supports the conclusion and scope.",
    use:
      "Supports Treat, Monitor, Accepted Risk, Conditional, or Closed decisions with strong confidence.",
  },
  {
    level: "Decision-ready with caveat",
    description:
      "Evidence supports the decision, but a bounded limitation remains visible.",
    use:
      "Supports a decision when the limitation is understood and monitored.",
  },
  {
    level: "Partial",
    description:
      "Some but not all intended scope or evidence elements are supported.",
    use:
      "Often supports Conditional or Treat rather than full approval.",
  },
  {
    level: "Stale",
    description:
      "Evidence may no longer represent the current environment or control state.",
    use:
      "Triggers refresh before relying on the old conclusion.",
  },
  {
    level: "Contradictory",
    description:
      "Two or more credible sources support different conclusions.",
    use:
      "Requires reconciliation; preserve the conflict rather than forcing certainty.",
  },
  {
    level: "Missing",
    description:
      "Required evidence cannot currently be produced.",
    use:
      "Creates Unknown confidence and may justify Blocked or Conditional status.",
  },
];

const integratedRecords = [
  {
    id: "DEC-801",
    title:
      "Legacy Reporting Modernization",
    linked:
      "RSK-102 / CTL-202 / MAP-302 / AUD-402 / EXC-501 / LDR-701",
    business:
      "Historical reporting remains required for ongoing business and governance operations.",
    scenario:
      "Legacy trust, ownership, and transport gaps could expose sensitive reports or interrupt service.",
    impact:
      "High",
    likelihood:
      "Medium-High",
    controls:
      "Restricted network scope, partial monitoring, modernization program, monthly governance review",
    controlState:
      "Compensating / Partially Effective",
    compliance:
      "Compensating — preferred legacy control state not fully met",
    evidence:
      "Current exception and network evidence; partial dependency inventory; active treatment milestones",
    confidence:
      "Moderate",
    owner:
      "Reporting Product Owner",
    supplier:
      "No material external supplier dependency drives the core risk",
    exception:
      "EXC-501 approved through 2027-01-31",
    options:
      "Continue P0 treatment; accelerate retirement; reduce service scope; seek higher-authority acceptance",
    recommendation:
      "Continue P0 treatment and escalate any missed milestone. Do not convert the remaining High residual risk to Accepted Risk without higher authority and updated evidence.",
    residual:
      "High",
    priority:
      "P0",
    state:
      "Treat",
    trigger:
      "Missed P0 milestone, exception expiry, incident, owner change, new sensitive data",
    closure:
      "Modernization complete, obsolete trust removed, ownership current, protected transport validated",
  },
  {
    id: "DEC-802",
    title:
      "Shared External Identity Concentration",
    linked:
      "RSK-105-related dependency / TPR-602 / LDR-702",
    business:
      "Several critical applications depend on one external identity platform.",
    scenario:
      "A major identity-provider outage could simultaneously interrupt access to multiple critical services.",
    impact:
      "High",
    likelihood:
      "Medium",
    controls:
      "Current supplier assurance, service monitoring, limited emergency-access path, recovery procedure",
    controlState:
      "Partially Effective for continuity",
    compliance:
      "No direct compliance gap; business concentration remains",
    evidence:
      "Current assurance, uptime history, dependency map, limited alternate-access procedure",
    confidence:
      "High for dependency; Moderate for extreme-outage conditions",
    owner:
      "Identity Platform Owner",
    supplier:
      "Critical external identity provider with High concentration",
    exception:
      "No exception",
    options:
      "Improve continuity; accept concentration; redesign dependency; transition provider",
    recommendation:
      "Fund alternate-access and continuity improvements while retaining the current provider.",
    residual:
      "Moderate-High",
    priority:
      "P1",
    state:
      "Treat",
    trigger:
      "Supplier incident, architecture expansion, continuity-test failure, acquisition or service change",
    closure:
      "Residual concentration reduced to tolerance and alternate-access capability validated",
  },
  {
    id: "DEC-803",
    title:
      "Partner Scheduling Certificate Renewal",
    linked:
      "RSK-103 / CTL-203 / MAP-303 / AUD-403 / EXC-502 / TPR-603 / LDR-703",
    business:
      "Scheduling operations depend on a trusted partner integration.",
    scenario:
      "Certificate lifecycle delay could interrupt the integration when the current trust credential expires.",
    impact:
      "Medium-High",
    likelihood:
      "Medium",
    controls:
      "Daily expiry monitoring, renewal workflow, sponsor oversight, protected transport",
    controlState:
      "Partially Effective until replacement validation completes",
    compliance:
      "Partially Met",
    evidence:
      "Current certificate, alert, renewal ticket, sponsor confirmation",
    confidence:
      "High",
    owner:
      "Integration Owner",
    supplier:
      "Partner scheduling service; Low-Medium concentration",
    exception:
      "EXC-502 Conditional acceptance during renewal window",
    options:
      "Complete renewal; accelerate validation; pause integration; accept limited short-term residual risk",
    recommendation:
      "Keep Conditional and complete replacement validation before expiry.",
    residual:
      "Moderate",
    priority:
      "P1 time-sensitive",
    state:
      "Conditional",
    trigger:
      "Renewal delay, partner ownership change, certificate status change",
    closure:
      "Replacement validated and old trust retired",
  },
  {
    id: "DEC-804",
    title:
      "Critical Payroll Supplier Continuity",
    linked:
      "TPR-604 / LDR-704 / RSK-105-pattern",
    business:
      "Payroll is a critical employee service with no practical short-term substitute.",
    scenario:
      "A major provider outage could delay payroll processing and require emergency manual procedures.",
    impact:
      "High",
    likelihood:
      "Medium",
    controls:
      "Supplier monitoring, current assurance, contract commitments, continuity plan, limited emergency payroll procedure",
    controlState:
      "Partially Effective for continuity",
    compliance:
      "Partially Met for continuity expectations",
    evidence:
      "Current supplier assurance, contract, continuity plan, limited emergency-procedure evidence",
    confidence:
      "Moderate-High",
    owner:
      "Finance Operations Owner",
    supplier:
      "Critical payroll SaaS with High concentration and low substitutability",
    exception:
      "Temporary acceptance may be considered only with authorized approval",
    options:
      "Improve continuity; accept residual concentration; change provider; build stronger internal emergency capability",
    recommendation:
      "Approve continuity improvement and validate emergency payroll operations before contract renewal.",
    residual:
      "Moderate-High",
    priority:
      "P1",
    state:
      "Treat",
    trigger:
      "Supplier incident, missed continuity milestone, contract change, material service change",
    closure:
      "Continuity capability reaches target and residual concentration is within approved tolerance",
  },
  {
    id: "DEC-805",
    title:
      "Temporary Workspace Destruction Evidence",
    linked:
      "RSK-107 / CTL-207 / MAP-306 / AUD-406 / AUD-407 / EXC-505 / LDR-705",
    business:
      "Temporary data-science workspaces may contain sensitive derived data.",
    scenario:
      "Sensitive data could persist beyond approved project closure.",
    impact:
      "Medium-High",
    likelihood:
      "Low-Medium",
    controls:
      "Encrypted storage, restricted access, automated lifecycle processing",
    controlState:
      "Design Effective; operating state Unknown",
    compliance:
      "Partially Met",
    evidence:
      "Partial cleanup logs plus contradictory owner attestation",
    confidence:
      "Low-Moderate",
    owner:
      "Data Science Platform Owner",
    supplier:
      "No material supplier dependency in this risk decision",
    exception:
      "EXC-505 Under Review; not approved",
    options:
      "Refresh evidence; pause sensitive new projects; strengthen lifecycle monitoring; seek conditional approval",
    recommendation:
      "Do not approve risk acceptance yet. Reconcile the inventory, cleanup logs, and owner attestation across the full population.",
    residual:
      "Moderate and uncertain",
    priority:
      "P1 evidence gap",
    state:
      "Blocked",
    trigger:
      "Evidence reconciliation complete, cleanup failure, data-classification change, new sensitive project",
    closure:
      "Full-population destruction evidence confirms expected lifecycle operation",
  },
  {
    id: "DEC-806",
    title:
      "Critical Recovery Capability",
    linked:
      "RSK-104 / CTL-204 / MAP-304 / AUD-404 / EXC-503 / LDR-706",
    business:
      "Critical services depend on reliable backup restoration after major disruption.",
    scenario:
      "A real recovery event could differ from planned testing and delay restoration.",
    impact:
      "High",
    likelihood:
      "Low-Medium",
    controls:
      "Encrypted backups, protected replication, restricted recovery, current restore testing",
    controlState:
      "Effective",
    compliance:
      "Met",
    evidence:
      "Current restore test, key-version mapping, issue closure, current owners",
    confidence:
      "High",
    owner:
      "Resilience Leader",
    supplier:
      "Provider dependency monitored but not currently a blocking condition",
    exception:
      "EXC-503 approved residual-risk acceptance",
    options:
      "Monitor; increase test frequency; redesign recovery; accept normal residual uncertainty",
    recommendation:
      "Maintain Monitor / Accepted Risk with annual full validation and change-triggered reassessment.",
    residual:
      "Moderate normal recovery uncertainty",
    priority:
      "P2",
    state:
      "Monitor",
    trigger:
      "Restore failure, platform migration, key-lifecycle change, provider change",
    closure:
      "Not intended for closure while critical recovery dependency exists; revalidate acceptance",
  },
  {
    id: "DEC-807",
    title:
      "Expired Legacy Transfer Approval",
    linked:
      "EXC-507 / LDR-707",
    business:
      "It is unclear whether a former legacy transfer workflow remains active.",
    scenario:
      "The organization could be relying on an expired approval and stale controls.",
    impact:
      "Potentially High",
    likelihood:
      "Unknown",
    controls:
      "Former restricted partner list and monitoring; current state unverified",
    controlState:
      "Unknown",
    compliance:
      "Unknown / previous exception expired",
    evidence:
      "Expired exception, stale control evidence, no current workflow confirmation",
    confidence:
      "Low",
    owner:
      "Legacy Integration Owner",
    supplier:
      "Potential external transfer partner relationship requires current confirmation",
    exception:
      "EXC-507 Expired",
    options:
      "Confirm retirement; reassess and reapprove; remediate; block continued use",
    recommendation:
      "Treat the old approval as invalid. Confirm workflow status immediately and block continued reliance if still active without a fresh decision.",
    residual:
      "Unknown",
    priority:
      "P0 governance",
    state:
      "Blocked",
    trigger:
      "Current workflow evidence obtained",
    closure:
      "Workflow retirement proven or fresh authorized governance decision completed",
  },
  {
    id: "DEC-808",
    title:
      "Analytics Export Temporary Storage",
    linked:
      "RSK-106 / CTL-206 / MAP-306-related / AUD-406-related",
    business:
      "Approved analytics exports support reporting while creating temporary copies of sensitive data.",
    scenario:
      "Temporary export packages could remain in staging longer than intended.",
    impact:
      "Medium-High",
    likelihood:
      "Low-Medium",
    controls:
      "Export approval, encrypted staging, short retention, automated cleanup, exception monitoring",
    controlState:
      "Effective",
    compliance:
      "Met for export-staging scope",
    evidence:
      "Current lifecycle policy, cleanup logs, exception queue",
    confidence:
      "High",
    owner:
      "Analytics Product Owner",
    supplier:
      "Approved export recipient reviewed separately under TPR-606",
    exception:
      "No active exception",
    options:
      "Monitor; reduce retention further; redesign staging; discontinue exports",
    recommendation:
      "Monitor under current controls and revalidate after export-process or recipient changes.",
    residual:
      "Low-Moderate",
    priority:
      "P3",
    state:
      "Monitor",
    trigger:
      "New recipient, new data class, retention change, export redesign, cleanup failure",
    closure:
      "Not intended for closure while workflow remains active; monitor lifecycle evidence",
  },
];

const conflictCases = [
  {
    id: "CONFLICT-01",
    title:
      "Owner attestation vs. operating evidence",
    sources:
      "Workspace owner says cleanup is complete; full-population cleanup evidence is incomplete.",
    risk:
      "The organization could approve acceptance based on an assertion that is not fully supported.",
    resolution:
      "Keep confidence Low-Moderate, preserve contradiction, reconcile inventory and lifecycle logs before approval.",
  },
  {
    id: "CONFLICT-02",
    title:
      "Supplier assurance vs. concentration",
    sources:
      "Identity supplier assurance is strong; multiple critical services still share one dependency.",
    risk:
      "Leadership could confuse strong supplier controls with low business dependency risk.",
    resolution:
      "Keep supplier-control confidence High while treating concentration separately.",
  },
  {
    id: "CONFLICT-03",
    title:
      "Approved exception vs. unmet preferred control",
    sources:
      "Legacy exception is approved; preferred modernization controls are incomplete.",
    risk:
      "The organization could report the requirement as fully Met when it is only Compensating.",
    resolution:
      "Keep compliance state Compensating and residual risk High until closure evidence exists.",
  },
  {
    id: "CONFLICT-04",
    title:
      "Expired approval vs. historical legitimacy",
    sources:
      "Legacy transfer was previously approved; the approval has expired.",
    risk:
      "Teams could continue relying on old authorization after its governance boundary ended.",
    resolution:
      "Treat old approval as invalid and require current evidence plus a fresh decision.",
  },
  {
    id: "CONFLICT-05",
    title:
      "Strong recovery test vs. unavoidable uncertainty",
    sources:
      "Current recovery evidence is strong; real disaster conditions can still differ from planned testing.",
    risk:
      "Teams could either overstate certainty or undervalue strong controls.",
    resolution:
      "Maintain High confidence in current control effectiveness while accepting bounded residual uncertainty.",
  },
];

const remediationBoard = [
  {
    id: "REM-801",
    priority: "P0",
    action:
      "Confirm whether the expired legacy transfer workflow is still active.",
    owner:
      "Legacy Integration Owner",
    due:
      "Immediate",
    evidence:
      "Current workflow inventory + owner confirmation + control state",
    changes:
      "Moves DEC-807 from Blocked to Closed if retired, or to reassessed Treat/Conditional if active.",
  },
  {
    id: "REM-802",
    priority: "P0",
    action:
      "Keep legacy reporting modernization milestones on schedule and escalate slippage.",
    owner:
      "Reporting Product Owner",
    due:
      "Monthly",
    evidence:
      "Milestone completion + preferred-control validation",
    changes:
      "Reduces DEC-801 residual risk and supports eventual closure of EXC-501.",
  },
  {
    id: "REM-803",
    priority: "P1",
    action:
      "Reconcile temporary-workspace inventory, cleanup logs, and owner attestation.",
    owner:
      "Data Science Platform Owner",
    due:
      "Before next sensitive project closeout",
    evidence:
      "Full-population lifecycle validation",
    changes:
      "Allows DEC-805 to move from Blocked to Monitor/Conditional if evidence supports operation.",
  },
  {
    id: "REM-804",
    priority: "P1",
    action:
      "Complete partner certificate replacement validation and retire old trust.",
    owner:
      "Integration Owner",
    due:
      "Before certificate expiration",
    evidence:
      "Replacement validation + old-trust retirement record",
    changes:
      "Moves DEC-803 from Conditional to Monitor/Closed treatment state.",
  },
  {
    id: "REM-805",
    priority: "P1",
    action:
      "Improve alternate-access and continuity for the shared identity provider.",
    owner:
      "Identity Platform Owner",
    due:
      "Design this quarter; validate next quarter",
    evidence:
      "Continuity design + safe validation + leadership acceptance of residual concentration",
    changes:
      "Reduces DEC-802 concentration risk.",
  },
  {
    id: "REM-806",
    priority: "P1",
    action:
      "Validate emergency payroll operating procedure before supplier contract renewal.",
    owner:
      "Finance Operations Owner",
    due:
      "Before renewal",
    evidence:
      "Safe continuity exercise + updated plan + issue closure",
    changes:
      "Reduces DEC-804 residual continuity risk.",
  },
  {
    id: "REM-807",
    priority: "P2",
    action:
      "Maintain annual full recovery validation and event-driven reassessment.",
    owner:
      "Resilience Leader",
    due:
      "Annual + trigger based",
    evidence:
      "Current restore test + dependency map + issue closure",
    changes:
      "Maintains DEC-806 accepted residual risk within approved tolerance.",
  },
  {
    id: "REM-808",
    priority: "P3",
    action:
      "Continue analytics export cleanup monitoring and recipient review.",
    owner:
      "Analytics Product Owner",
    due:
      "Monthly + annual recipient review",
    evidence:
      "Cleanup monitoring + recipient approval + retention evidence",
    changes:
      "Maintains DEC-808 at Low-Moderate residual risk.",
  },
];

const decisionBoard = [
  {
    risk: "DEC-801 Legacy Reporting",
    current:
      "Treat",
    leadership:
      "Continue P0 modernization; escalate missed milestones",
    rationale:
      "High residual risk and compensating controls remain.",
  },
  {
    risk: "DEC-802 Identity Concentration",
    current:
      "Treat",
    leadership:
      "Fund continuity and alternate-access improvement",
    rationale:
      "Strong supplier assurance does not eliminate shared critical dependency.",
  },
  {
    risk: "DEC-803 Partner Certificate",
    current:
      "Conditional",
    leadership:
      "Complete renewal before expiry",
    rationale:
      "Time-sensitive but currently controlled lifecycle risk.",
  },
  {
    risk: "DEC-804 Payroll Supplier",
    current:
      "Treat",
    leadership:
      "Approve continuity improvement before renewal",
    rationale:
      "Critical service with limited substitutability.",
  },
  {
    risk: "DEC-805 Workspace Cleanup",
    current:
      "Blocked",
    leadership:
      "Do not accept until evidence contradiction is resolved",
    rationale:
      "Operating effectiveness and residual risk are not sufficiently proven.",
  },
  {
    risk: "DEC-806 Recovery",
    current:
      "Monitor / Accepted Risk",
    leadership:
      "Maintain current validation cadence",
    rationale:
      "Strong controls with bounded normal recovery uncertainty.",
  },
  {
    risk: "DEC-807 Legacy Transfer",
    current:
      "Blocked",
    leadership:
      "Treat old approval as invalid until current state is known",
    rationale:
      "Expired governance and Low evidence confidence.",
  },
  {
    risk: "DEC-808 Analytics Export",
    current:
      "Monitor",
    leadership:
      "Maintain lifecycle evidence and review triggers",
    rationale:
      "Current controls are Effective with Low-Moderate residual risk.",
  },
];

const dashboardMetrics = [
  {
    label: "Decision records",
    value: "8",
    note: "Integrated business, control, compliance, evidence, exception, supplier, and leadership records",
  },
  {
    label: "P0 decisions",
    value: "2",
    note: "Legacy reporting treatment and expired legacy transfer governance",
  },
  {
    label: "Blocked",
    value: "2",
    note: "Workspace evidence contradiction and expired legacy transfer approval",
  },
  {
    label: "Treat / Conditional",
    value: "4",
    note: "Legacy, identity concentration, partner renewal, and payroll continuity require active action",
  },
];

const logs = [
  "[08:30] DEC-801 state=TREAT priority=P0 residual=HIGH confidence=MODERATE",
  "[08:54] DEC-802 state=TREAT priority=P1 concentration=HIGH confidence=HIGH_DEPENDENCY",
  "[09:18] DEC-803 state=CONDITIONAL priority=P1 cert_renewal=OPEN",
  "[09:42] DEC-804 state=TREAT priority=P1 payroll_continuity=PARTIAL",
  "[10:06] DEC-805 state=BLOCKED priority=P1 evidence=CONTRADICTORY",
  "[10:30] DEC-806 state=MONITOR_ACCEPTED priority=P2 evidence=STRONG",
  "[10:54] DEC-807 state=BLOCKED priority=P0 exception=EXPIRED confidence=LOW",
  "[11:18] DEC-808 state=MONITOR priority=P3 control=EFFECTIVE",
];

const antiPatterns = [
  {
    title: "Choose a state before reviewing evidence",
    problem:
      "The team decides it wants to Accept or Close the risk and then looks for evidence that supports that outcome.",
    better:
      "Review business context, controls, evidence, uncertainty, and authority before choosing the state.",
  },
  {
    title: "Use one score as the final decision",
    problem:
      "A risk number replaces ownership, evidence, dependency, timing, and treatment analysis.",
    better:
      "Use scores only as summaries inside a richer decision record.",
  },
  {
    title: "Close because a remediation ticket completed",
    problem:
      "Project completion is treated as proof that residual risk reached the target state.",
    better:
      "Require objective control or architecture validation.",
  },
  {
    title: "Accept because treatment is inconvenient",
    problem:
      "The organization substitutes acceptance for feasible remediation.",
    better:
      "Compare options and confirm the residual risk is actually within authorized tolerance.",
  },
  {
    title: "Ignore conflicting evidence",
    problem:
      "One convenient source is chosen and the contradictory source disappears from the record.",
    better:
      "Preserve both sources and resolve what each proves.",
  },
  {
    title: "Treat compliance status as the whole risk decision",
    problem:
      "A Met requirement is assumed to mean business risk is acceptable.",
    better:
      "Evaluate actual residual business risk separately.",
  },
  {
    title: "Supplier owns the consequence",
    problem:
      "The organization assumes strong contract or assurance evidence transfers accountability.",
    better:
      "Keep the internal risk owner accountable for business impact.",
  },
  {
    title: "Leadership brief hides uncertainty",
    problem:
      "Low-confidence evidence is summarized as a certain conclusion.",
    better:
      "State confidence and the next evidence needed.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep DEC-805 Blocked until full-population workspace evidence is reconciled, then reassess residual risk and any exception request.",
    outcome:
      "Best. The decision preserves uncertainty and prevents acceptance from outrunning the evidence.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Approve the exception because the control design is strong and the owner says cleanup works.",
    outcome:
      "Risky. Strong design and attestation do not resolve contradictory operating evidence.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Mark the risk Closed because encryption limits exposure.",
    outcome:
      "Risky. Encryption does not prove temporary data is destroyed according to lifecycle requirements.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Treat the old legacy-transfer approval as invalid and block continued reliance until current workflow evidence and a fresh governance decision exist.",
    outcome:
      "Best. Expired approval and stale evidence create an immediate governance gap.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Continue operating because the exception was approved previously.",
    outcome:
      "Risky. Previous approval ended at expiry.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Close the risk because there is no proof the workflow is still active.",
    outcome:
      "Risky. Missing evidence does not prove retirement.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest basis for an enterprise risk decision?",
    choices: [
      "Integrated business context, risk scenario, controls, evidence, ownership, compliance, dependencies, residual risk, and decision authority.",
      "A single numeric score.",
      "One technical finding.",
      "One policy requirement.",
    ],
    answer: 0,
    explanation:
      "Enterprise risk decisions should combine business, technical, governance, and evidence context.",
  },
  {
    question:
      "What should happen when credible evidence sources contradict each other?",
    choices: [
      "Preserve the contradiction, determine what each source proves, and resolve the conflict before claiming certainty.",
      "Delete the inconvenient source.",
      "Always trust the owner attestation.",
      "Average the conclusions.",
    ],
    answer: 0,
    explanation:
      "Conflicting evidence should reduce confidence until reconciled.",
  },
  {
    question:
      "When is Blocked an appropriate risk state?",
    choices: [
      "When risk, missing authority, failed controls, expired governance, or evidence uncertainty prevents approval.",
      "Whenever a risk is technically complicated.",
      "Whenever a vendor is involved.",
      "Only after an incident.",
    ],
    answer: 0,
    explanation:
      "Blocked is appropriate when current conditions do not support safe or authorized approval.",
  },
  {
    question:
      "What is strongest for an Accepted Risk decision?",
    choices: [
      "Known residual risk, current evidence, authorized owner, defined scope, review cadence, and change triggers.",
      "A technical team's verbal approval.",
      "No expiry or review.",
      "Missing evidence treated as Low risk.",
    ],
    answer: 0,
    explanation:
      "Acceptance should be evidence-based, bounded, owned, and reviewable.",
  },
  {
    question:
      "Why should supplier assurance and concentration risk be analyzed separately?",
    choices: [
      "A supplier can have strong controls while the organization still has major business dependency on that supplier.",
      "Supplier assurance is irrelevant.",
      "Concentration only matters when controls fail.",
      "Contracts eliminate concentration.",
    ],
    answer: 0,
    explanation:
      "Control quality and dependency consequence are different risk dimensions.",
  },
  {
    question:
      "What proves a risk can be Closed?",
    choices: [
      "Objective evidence that the risk was removed, retired, avoided, or reduced to the approved target state.",
      "A completed project ticket.",
      "An expired exception.",
      "A lower risk score alone.",
    ],
    answer: 0,
    explanation:
      "Closure should be based on validated target-state evidence.",
  },
  {
    question:
      "What should a leadership recommendation include?",
    choices: [
      "Business consequence, evidence confidence, options, recommendation, owner, timeline, residual risk, and change triggers.",
      "Only technical detail.",
      "Only a severity label.",
      "Only a budget number.",
    ],
    answer: 0,
    explanation:
      "Decision-ready communication combines business meaning with accountable action.",
  },
];

const checklistItems = [
  "Business service and objective are clear.",
  "Risk scenario is written in business language.",
  "Impact is documented.",
  "Likelihood is documented with reasoning.",
  "Current controls are mapped.",
  "Control effectiveness is current.",
  "Compliance status is mapped.",
  "Evidence confidence is stated.",
  "Contradictions are preserved.",
  "Risk owner is named.",
  "Control owner is named.",
  "Remediation owner is named.",
  "Approval authority is clear.",
  "Supplier dependency is assessed.",
  "Concentration risk is assessed.",
  "Active exceptions are mapped.",
  "Expired exceptions are treated as expired.",
  "Treatment options are compared.",
  "Residual risk is explicit.",
  "Decision state matches current evidence.",
  "Priority is justified.",
  "Milestones are defined.",
  "Escalation criteria are defined.",
  "Change triggers are defined.",
  "Closure criteria require objective evidence.",
  "Leadership recommendation is concise.",
  "All evidence and scenarios are fictional and safe.",
];

const takeaways = [
  "Enterprise risk decisions require business, technical, governance, supplier, evidence, and ownership context.",
  "Risk scores help prioritize but should never replace reasoning.",
  "Contradictory evidence should reduce confidence until reconciled.",
  "Expired approvals cannot be treated as current governance.",
  "A strong supplier can still create high concentration risk.",
  "Accepted Risk must remain visible, owned, evidenced, and reviewable.",
  "Blocked is appropriate when evidence, authority, or control state does not support approval.",
  "Closure requires objective target-state evidence.",
  "Leadership recommendations should state the decision, owner, timeline, residual risk, and change triggers.",
  "The Enterprise Risk Decision Package completes the A15 portfolio and prepares you for the A15 Module Test.",
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
        Module Test
      </Link>
    </div>
  );
}

export default function RiskDecisionLabPage() {
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
              A15.10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Risk Management and Compliance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A15.10
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Risk Decision Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This capstone combines everything in A15. You will move from
            business context and risk analysis through controls, evidence,
            compliance, exceptions, suppliers, prioritization, and leadership
            communication to a final set of enterprise risk decisions.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            Every organization, service, supplier, control, exception, evidence
            record, and leadership decision is fictional. The lab requires no
            scanning, exploitation, credential access, or testing of real
            systems.
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
          lessonTitle="Risk Decision Lab"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A15.10 Entry Readiness"
          items={[
            "I can analyze assets, threats, impact, and likelihood.",
            "I can read a risk register and distinguish owner roles.",
            "I can evaluate controls, compliance mappings, evidence, exceptions, and supplier risk.",
            "I can communicate a decision to leadership in business language.",
          ]}
        />

        <Section
          eyebrow="Capstone Mission"
          title="Build One Decision Package From Many Kinds of Evidence"
        >
          <p className="leading-8">
            Real risk decisions rarely arrive as one perfect record. The
            business owner may know the consequence. The control owner may know
            the safeguard. Governance may know the requirement. Audit may know
            the evidence quality. Vendor management may know the supplier. The
            security leader must connect those perspectives into one coherent
            recommendation.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              The capstone goal is not to produce the most risk records. It is to produce the clearest defensible decisions.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for the Final A15 Lab"
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
          eyebrow="Integrated Review"
          title="Nine Domains of an Enterprise Risk Decision"
        >
          <div className="grid gap-5">
            {reviewDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.domain}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.focus}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Decision question: {item.decisionQuestion}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision States"
          title="Choose the State That Matches Current Evidence and Authority"
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
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Evidence needed: {item.evidenceNeed}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Prioritization"
          title="Priority Is More Than Impact × Likelihood"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {prioritizationFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.factor}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Higher-priority signal: {item.highSignal}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence Confidence"
          title="Decision Strength Should Match Evidence Strength"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceHierarchy.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.level}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {item.description}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Decision use: {item.use}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Enterprise Evidence"
          title="Eight Integrated Northbridge Risk Decisions"
        >
          <div className="grid gap-5">
            {integratedRecords.map((item) => (
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
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black text-yellow-100">
                    {item.priority}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 font-mono text-xs leading-6 text-slate-400">
                  Linked records: {item.linked}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Business context", item.business],
                    ["Risk scenario", item.scenario],
                    ["Impact", item.impact],
                    ["Likelihood", item.likelihood],
                    ["Controls", item.controls],
                    ["Control state", item.controlState],
                    ["Compliance", item.compliance],
                    ["Evidence", item.evidence],
                    ["Confidence", item.confidence],
                    ["Risk owner", item.owner],
                    ["Supplier / dependency", item.supplier],
                    ["Exception", item.exception],
                    ["Treatment options", item.options],
                    ["Recommendation", item.recommendation],
                    ["Residual risk", item.residual],
                    ["Change trigger", item.trigger],
                    ["Closure criteria", item.closure],
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
          title="Northbridge Enterprise Risk Decision Dashboard"
          subtitle="Fictional priority, treatment, evidence confidence, and governance summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Two P0 Decisions Require Immediate Governance Attention"
          severity="High"
          time="10:54"
          source="Fictional Enterprise Risk Decision Review"
          details="DEC-801 remains High residual risk under compensating controls, while DEC-807 relies on an expired approval with Low evidence confidence. Both require active leadership attention for different reasons."
          recommendation="Keep DEC-801 in P0 treatment with milestone escalation. Keep DEC-807 Blocked until current workflow evidence and a fresh governance decision exist."
        />

        <Section
          eyebrow="Evidence Conflicts"
          title="Five Conflicts the Decision Package Must Preserve and Resolve"
        >
          <div className="grid gap-5">
            {conflictCases.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-red-400/20 bg-red-400/10 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-red-400/30 px-3 py-1 font-mono text-xs font-black text-red-100">
                    {item.id}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-black text-red-50">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Conflicting sources: {item.sources}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Decision risk: {item.risk}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Resolution: {item.resolution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Remediation Board"
          title="Eight Actions That Change the Enterprise Risk State"
        >
          <div className="grid gap-5">
            {remediationBoard.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black text-yellow-100">
                    {item.priority}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">
                  {item.action}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                      Owner / due
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-200">
                      {item.owner} — {item.due}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Evidence / effect
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      Evidence: {item.evidence}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      Decision effect: {item.changes}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision Board"
          title="What Leadership Should Decide"
        >
          <div className="grid gap-5">
            {decisionBoard.map((item) => (
              <article
                key={item.risk}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.risk}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Current state: {item.current}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Leadership decision: {item.leadership}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Rationale: {item.rationale}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Enterprise Risk Decision Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Workspace Decision"
          question="What is the strongest current decision for DEC-805?"
          evidence={[
            "Temporary workspace design includes encryption, restricted access, and automated cleanup.",
            "Operating cleanup evidence is incomplete across the full population.",
            "A control-owner attestation says cleanup is complete.",
            "The full inventory has not yet been reconciled against the logs.",
            "The exception request is still Under Review.",
          ]}
          options={[
            "Blocked until the evidence contradiction is reconciled, then reassess residual risk and approval.",
            "Accepted Risk because the owner attestation is current.",
            "Closed because encryption is enabled.",
            "Monitor because design effectiveness is strong.",
          ]}
          bestAnswer={0}
          explanation="The organization cannot confidently approve acceptance while current operating evidence and owner attestation remain contradictory."
        />

        <Section
          eyebrow="Common Decision Mistakes"
          title="Eight Ways Enterprise Risk Decisions Become Unreliable"
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
          title="Scenario Decision Lab 1 — Contradictory Workspace Evidence"
          scenario="The temporary-workspace control is well designed, but full-population cleanup evidence is incomplete and conflicts with a current owner attestation."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Expired Governance and Unknown Current State"
          scenario="A legacy transfer exception expired, control evidence is stale, and nobody has confirmed whether the workflow is still active."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Capstone Lab"
          title="Build the Enterprise Risk Decision Package"
        >
          <p className="leading-8">
            Combine your A15 portfolio artifacts into one fictional enterprise
            package. The package should show not just the risk data, but how the
            organization reaches, documents, and communicates decisions.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create an executive overview of the fictional organization and its critical services.",
              "Include at least twenty-five RSK records from your Cybersecurity Risk Register.",
              "Include at least twenty-five CTL records from your Control Effectiveness Review.",
              "Include at least twenty-five MAP records from your Framework and Control Mapping Register.",
              "Include at least thirty AUD records from your Audit Evidence Register.",
              "Include at least twenty-five EXC records from your Risk Acceptance and Exception Register.",
              "Include at least twenty-five TPR records from your Third-Party Risk Review.",
              "Include at least fifteen LDR leadership briefs.",
              "Create at least ten final DEC decision records.",
              "Link each DEC record to relevant RSK, CTL, MAP, AUD, EXC, TPR, and LDR records.",
              "State the affected business service.",
              "State the risk scenario.",
              "State impact and likelihood.",
              "State control effectiveness.",
              "State compliance status.",
              "State evidence confidence.",
              "State risk owner.",
              "State control and remediation owners.",
              "State supplier or concentration dependency where relevant.",
              "State active exception or acceptance where relevant.",
              "Compare at least two treatment options.",
              "Choose a final decision state.",
              "Assign a priority.",
              "State residual risk.",
              "State the leadership recommendation.",
              "Set a milestone or due date.",
              "Define escalation criteria.",
              "Define review triggers.",
              "Define closure criteria.",
              "Include at least two P0 risks.",
              "Include at least three Treat decisions.",
              "Include at least two Monitor decisions.",
              "Include at least two Conditional decisions.",
              "Include at least two Accepted Risk decisions.",
              "Include at least two Blocked decisions.",
              "Include at least two Closed decisions with objective closure evidence.",
              "Include at least three supplier or concentration risks.",
              "Include at least three evidence conflicts.",
              "Include at least three expired or near-expiry governance decisions.",
              "Include at least three cases where compliance status and residual business risk differ.",
              "Build one leadership dashboard summarizing priority, decision state, evidence confidence, overdue treatment, expired exceptions, and concentration risk.",
              "Write a final leadership recommendation explaining the top five actions for the next review period.",
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
            <p className="font-black">Capstone safety boundary</p>
            <p className="mt-2 leading-7">
              Use fictional organizations, services, suppliers, controls,
              evidence, owners, contracts, risks, and decisions only. Do not
              scan, probe, exploit, bypass, enumerate, test, or access real
              systems, vendors, accounts, credentials, or confidential
              organizational records.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Expired Legacy Transfer Governance"
          question="What is the strongest decision for DEC-807?"
          evidence={[
            "The previous exception expired.",
            "Current control evidence is stale.",
            "The organization has not confirmed whether the workflow is retired.",
            "The historical approval was limited to a temporary migration period.",
            "No fresh acceptance or exception has been approved.",
          ]}
          options={[
            "Blocked until current workflow evidence and a fresh authorized decision exist.",
            "Approved because the workflow had historical authorization.",
            "Closed because there is no proof it is still active.",
            "Monitor because the risk cannot be scored precisely.",
          ]}
          bestAnswer={0}
          explanation="Expired approval and missing current-state evidence mean the organization cannot responsibly rely on the previous governance decision."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design an Enterprise Risk Governance Standard"
        >
          <p className="leading-8">
            Create a fictional standard that defines how the organization moves
            from risk identification to evidence, treatment, leadership
            decision, monitoring, escalation, acceptance, and closure.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Risk ID and decision ID standards",
              "Business-context requirements",
              "Impact and likelihood method",
              "Ownership model",
              "Control mapping",
              "Control-test expectations",
              "Compliance mapping",
              "Evidence-quality standards",
              "Exception governance",
              "Supplier-risk integration",
              "Concentration-risk analysis",
              "Risk-tolerance boundaries",
              "Decision-state definitions",
              "Priority model",
              "Escalation rules",
              "Leadership-brief standard",
              "Review cadence",
              "Change triggers",
              "Closure evidence",
              "Decision-history retention",
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
            The strongest standard should make risk decisions repeatable without
            pretending that every judgment can be reduced to a rigid formula.
          </p>
        </Section>

        <DefenderChecklist
          title="A15.10 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A15.10 Mini Quiz: Risk Decision Lab"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Final Portfolio Build — Enterprise Risk Decision Package"
          prompt="Complete the final A15 Risk Register and Leadership Recommendation as an Enterprise Risk Decision Package. Integrate your Risk Analysis Worksheet, Cybersecurity Risk Register, Control Effectiveness Review, Framework and Control Mapping Register, Audit Evidence Register, Risk Acceptance and Exception Register, Third-Party Risk Review, Leadership Risk Brief, remediation board, decision board, and at least ten final DEC records. Every major decision should show business context, evidence confidence, ownership, control state, compliance state, residual risk, treatment options, priority, recommendation, milestone, escalation, review triggers, and closure criteria."
          tips={[
            "Preserve uncertainty instead of hiding it.",
            "Link decisions across A15 artifacts.",
            "Separate supplier assurance from business dependency.",
            "Treat expired approvals as expired.",
            "Use objective closure evidence.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the A15 Module Test?"
        >
          <p className="leading-8">
            The module test checks whether you can reason across the full A15
            lifecycle. You should be able to explain why a decision is Treat,
            Monitor, Conditional, Accepted Risk, Blocked, or Closed using
            business context, controls, evidence, governance, and ownership.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can integrate risk, control, compliance, evidence, exception, supplier, and leadership records.",
              "I can preserve and resolve contradictory evidence.",
              "I can choose a decision state that matches residual risk and authority.",
              "I can prioritize enterprise risks using more than a single score.",
              "I can produce a concise leadership recommendation with owner, timeline, residual risk, and review triggers.",
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
          title="How to Make the Enterprise Risk Decision Package Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use linked records",
                detail:
                  "A final DEC record should trace back to the risk, controls, compliance mappings, evidence, exception, supplier, and leadership brief that support it.",
              },
              {
                title: "Show evidence confidence",
                detail:
                  "A decision should say whether evidence is strong, caveated, partial, stale, contradictory, or missing.",
              },
              {
                title: "Show ownership",
                detail:
                  "Risk owner, control owner, remediation owner, supplier sponsor, and approver should be distinct where responsibility differs.",
              },
              {
                title: "Show priority logic",
                detail:
                  "Explain urgency using impact, likelihood, controls, evidence, dependency, timing, and tolerance.",
              },
              {
                title: "Show treatment tradeoffs",
                detail:
                  "Compare realistic options instead of presenting one unexplained answer.",
              },
              {
                title: "Show residual risk",
                detail:
                  "Explain what remains after the recommended action and whether it is within tolerance.",
              },
              {
                title: "Use evidence-based closure",
                detail:
                  "Close a risk only when objective evidence proves the approved target state exists.",
              },
              {
                title: "Prepare for the module test",
                detail:
                  "Review the decision states, ownership model, control/evidence logic, exceptions, supplier dependency, and leadership communication before continuing.",
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
            Enterprise risk analysis uses safe, authorized, fictional evidence
          </h2>
          <p className="mt-3 leading-7">
            Do not scan, probe, exploit, bypass, enumerate, test, or access real
            systems, vendors, accounts, credentials, or confidential
            organizational records. All risks, services, suppliers, controls,
            evidence, approvals, and leadership decisions in this lab are
            fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A15.10 Risk Decision Lab Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You have completed the A15 lesson sequence and assembled the final
            Enterprise Risk Decision Package: risk analysis, risk register,
            controls, compliance mappings, audit evidence, exceptions,
            third-party risk, leadership briefs, remediation priorities, and
            final decision records. Next is the A15 Module Test.
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