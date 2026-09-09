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
const previousLesson = `${modulePath}/audit-evidence-and-documentation`;
const nextLesson = `${modulePath}/third-party-risk-concepts`;

const objectives = [
  "Explain the difference between risk acceptance, policy or standard exceptions, compensating controls, remediation, mitigation, transfer, avoidance, and monitoring.",
  "Evaluate whether residual risk is suitable for acceptance by considering business impact, likelihood, uncertainty, control strength, evidence quality, duration, and decision authority.",
  "Design exception records with clear scope, rationale, owner, approver, compensating controls, expiry, review cadence, escalation, and closure criteria.",
  "Recognize weak acceptance practices such as indefinite exceptions, hidden residual risk, missing approvers, expired decisions, and acceptance used as a substitute for treatment.",
  "Build a Risk Acceptance and Exception Register that becomes the seventh artifact in the A15 Risk Register and Leadership Recommendation.",
];

const decisionTypes = [
  {
    type: "Accept",
    purpose:
      "Formally continue with a known level of residual risk because an authorized risk owner determines it is within tolerance for the defined scope and period.",
    example:
      "A low residual risk remains after strong controls, and the business owner accepts it for the next annual review period.",
    caution:
      "Acceptance is a governed decision, not permission to stop monitoring.",
  },
  {
    type: "Exception",
    purpose:
      "Temporarily allow a defined deviation from a policy, standard, or required control while the underlying gap remains visible.",
    example:
      "A legacy service cannot meet the preferred identity standard during a scheduled modernization project.",
    caution:
      "An exception should have a defined reason, scope, compensating control, owner, expiry, and closure path.",
  },
  {
    type: "Mitigate / Treat",
    purpose:
      "Reduce risk by improving controls, architecture, process, ownership, or resilience.",
    example:
      "Reduce excessive permissions and improve access-review evidence.",
    caution:
      "Treatment should have milestones and validation evidence.",
  },
  {
    type: "Avoid",
    purpose:
      "Stop or redesign the activity creating the risk.",
    example:
      "Delay a sensitive data-sharing workflow until required safeguards can be implemented.",
    caution:
      "Avoidance may affect business goals and should be an explicit decision.",
  },
  {
    type: "Transfer / Share",
    purpose:
      "Shift part of the financial or operational consequence through contracts, insurance, or service arrangements.",
    example:
      "A supplier agreement allocates specific response costs and service commitments.",
    caution:
      "The organization still retains responsibility for residual business impact.",
  },
  {
    type: "Monitor",
    purpose:
      "Keep the current control state while watching for evidence or context changes.",
    example:
      "A well-controlled critical service remains under quarterly review.",
    caution:
      "Monitoring is active governance, not passive neglect.",
  },
];

const acceptanceCriteria = [
  {
    criterion: "Known residual risk",
    question:
      "Is the remaining risk clearly described after current controls are considered?",
    strong:
      "Impact, likelihood, uncertainty, and remaining exposure are documented.",
    weak:
      "The record says “low enough” with no supporting rationale.",
  },
  {
    criterion: "Decision authority",
    question:
      "Does the approver have authority to accept the business consequence?",
    strong:
      "Named risk owner or delegated approver with documented authority.",
    weak:
      "A technical team accepts risk for a business unit without authorization.",
  },
  {
    criterion: "Business rationale",
    question:
      "Why is continued operation reasonable compared with the available alternatives?",
    strong:
      "Treatment cost, operational need, timeline, and residual risk are explained.",
    weak:
      "“Too hard to fix.”",
  },
  {
    criterion: "Evidence quality",
    question:
      "Is the risk decision supported by current control and business evidence?",
    strong:
      "Current control tests, ownership, scope, and evidence limitations are visible.",
    weak:
      "Decision relies on stale or missing evidence.",
  },
  {
    criterion: "Bounded scope",
    question:
      "Exactly which service, system, user group, data, provider, or workflow does the acceptance cover?",
    strong:
      "Defined production service, environment, and business process.",
    weak:
      "“All legacy systems.”",
  },
  {
    criterion: "Time boundary",
    question:
      "When must the decision be reviewed, renewed, closed, or escalated?",
    strong:
      "Defined expiry or review date plus event-driven triggers.",
    weak:
      "No expiry and no scheduled review.",
  },
  {
    criterion: "Compensating controls",
    question:
      "If a preferred control is missing, what alternate safeguards reduce the risk now?",
    strong:
      "Restricted scope, increased monitoring, approval, reduced data, or continuity controls.",
    weak:
      "No alternate safeguard and no explanation.",
  },
  {
    criterion: "Closure path",
    question:
      "What evidence ends the exception or acceptance?",
    strong:
      "Modernization complete, preferred control validated, ownership current, evidence reviewed.",
    weak:
      "“Close when fixed.”",
  },
];

const exceptionFields = [
  {
    field: "Exception ID",
    purpose:
      "Creates a stable reference for approvals, reviews, audits, and closure.",
    example:
      "EXC-15-07",
  },
  {
    field: "Related risk / requirement",
    purpose:
      "Shows which risk and policy or standard gap the exception governs.",
    example:
      "RSK-102 + MAP-302 legacy control requirement",
  },
  {
    field: "Scope",
    purpose:
      "Defines exactly which systems, users, data, processes, or environments are covered.",
    example:
      "Legacy Reporting production hosts only",
  },
  {
    field: "Rationale",
    purpose:
      "Explains why the deviation is necessary and why alternatives are not immediately feasible.",
    example:
      "Modernization is in progress and immediate retirement would interrupt required reporting.",
  },
  {
    field: "Residual risk",
    purpose:
      "Describes what risk remains after compensating controls.",
    example:
      "High until obsolete trust and ownership gaps close",
  },
  {
    field: "Compensating controls",
    purpose:
      "Shows which alternate safeguards reduce risk during the exception.",
    example:
      "Restricted network scope, increased monitoring, monthly review",
  },
  {
    field: "Risk owner / approver",
    purpose:
      "Shows who owns and authorizes the business decision.",
    example:
      "Reporting Product Owner + delegated governance approver",
  },
  {
    field: "Expiry / review date",
    purpose:
      "Prevents the exception from becoming permanent by default.",
    example:
      "2027-01-31 or earlier after modernization milestone",
  },
  {
    field: "Closure criteria",
    purpose:
      "Defines the evidence required to end the exception.",
    example:
      "Preferred controls implemented, obsolete trust removed, validation complete",
  },
];

const lifecycleStates = [
  {
    state: "Proposed",
    meaning:
      "An exception or acceptance request has been drafted but has not yet been approved.",
    action:
      "Complete risk analysis, evidence, ownership, scope, rationale, and compensating controls.",
  },
  {
    state: "Under Review",
    meaning:
      "Authorized reviewers are evaluating the residual risk and decision basis.",
    action:
      "Resolve evidence gaps and verify authority before approval.",
  },
  {
    state: "Approved",
    meaning:
      "An authorized owner has accepted the risk or approved the exception for the defined scope and period.",
    action:
      "Monitor controls, review dates, conditions, and evidence.",
  },
  {
    state: "Conditional",
    meaning:
      "Approval is valid only while stated conditions remain true.",
    action:
      "Track the condition and escalate if it is missed.",
  },
  {
    state: "Expired",
    meaning:
      "The decision is no longer valid because the review or expiry date passed.",
    action:
      "Reassess, reapprove through governance, remediate, or block continued operation.",
  },
  {
    state: "Revoked",
    meaning:
      "The prior decision is withdrawn because conditions changed or risk increased.",
    action:
      "Return the underlying risk to active treatment or another appropriate decision state.",
  },
  {
    state: "Closed",
    meaning:
      "The exception or acceptance is no longer needed because the target condition was reached or the activity ended.",
    action:
      "Preserve closure evidence and update the related risk and compliance records.",
  },
];

const compensatingControlQualities = [
  {
    quality: "Addresses the same risk",
    example:
      "If the preferred access control is unavailable, alternate approval and restricted scope reduce the same unauthorized-access scenario.",
    failure:
      "A backup control is listed even though the actual gap is identity governance.",
  },
  {
    quality: "Has measurable scope",
    example:
      "Applies only to named legacy hosts and approved business users.",
    failure:
      "Applies to an undefined group of systems.",
  },
  {
    quality: "Has an owner",
    example:
      "Infrastructure Security maintains the network restriction and evidence.",
    failure:
      "Nobody is accountable for keeping the alternate safeguard current.",
  },
  {
    quality: "Has evidence",
    example:
      "Monthly review confirms the restriction and monitoring are operating.",
    failure:
      "The control is assumed to exist with no current proof.",
  },
  {
    quality: "Has a time boundary",
    example:
      "Remains in place until modernization milestone M3 or exception expiry.",
    failure:
      "Temporary control becomes permanent with no review.",
  },
  {
    quality: "Has failure handling",
    example:
      "Control failure immediately reopens the risk and can revoke the exception.",
    failure:
      "The exception remains approved even if the compensating control stops working.",
  },
];

const acceptanceBoundaries = [
  {
    boundary: "Within tolerance",
    description:
      "Residual risk is within approved business tolerance and current evidence supports the decision.",
    governance:
      "Acceptance may be reasonable with review cadence and triggers.",
  },
  {
    boundary: "Above tolerance but temporarily necessary",
    description:
      "Business need exists, but residual risk is higher than normal tolerance.",
    governance:
      "Requires stronger authority, compensating controls, short duration, and clear escalation.",
  },
  {
    boundary: "Uncertain",
    description:
      "Evidence is incomplete or contradictory, so the actual residual risk cannot be confidently judged.",
    governance:
      "Do not treat uncertainty as low risk; resolve evidence or use Conditional / Blocked.",
  },
  {
    boundary: "Unacceptable",
    description:
      "Residual risk is too high for current authority, business need, or control state.",
    governance:
      "Treat, avoid, redesign, or block rather than forcing acceptance.",
  },
];

const principles = [
  {
    title: "Acceptance is a decision, not a disappearance",
    meaning:
      "Accepted Risk remains real and should stay visible in the register.",
    review:
      "Can the organization still explain the residual risk and owner?",
  },
  {
    title: "Exceptions should be temporary by design",
    meaning:
      "A deviation should have expiry, review, closure, and reapproval rules.",
    review:
      "What prevents this exception from becoming permanent?",
  },
  {
    title: "Authority must match consequence",
    meaning:
      "Higher-impact risk may require higher-level approval.",
    review:
      "Does the approver have authority for the affected business consequence?",
  },
  {
    title: "Compensating controls must be relevant",
    meaning:
      "An alternate safeguard should reduce the same risk created by the missing preferred control.",
    review:
      "Which part of the scenario does the compensating control reduce?",
  },
  {
    title: "Evidence remains necessary after approval",
    meaning:
      "Approved decisions can become stale when controls, owners, or business context change.",
    review:
      "What evidence must stay current while the decision remains active?",
  },
  {
    title: "Expired means expired",
    meaning:
      "A passed review date should not be ignored.",
    review:
      "What happens if the decision reaches expiry before renewal?",
  },
  {
    title: "Acceptance should not replace feasible treatment",
    meaning:
      "Risk should not be accepted merely because remediation is inconvenient.",
    review:
      "Were reasonable alternatives actually considered?",
  },
  {
    title: "Closure requires evidence",
    meaning:
      "An exception ends when the preferred state is validated or the scoped activity ends.",
    review:
      "What proves the exception is no longer needed?",
  },
];

const vocabulary = [
  {
    term: "Risk acceptance",
    definition:
      "A formal decision by an authorized owner to retain a defined level of residual risk.",
  },
  {
    term: "Exception",
    definition:
      "A formally approved, bounded deviation from a policy, standard, or required control.",
  },
  {
    term: "Compensating control",
    definition:
      "An alternate safeguard used to reduce the same risk while the preferred control is unavailable.",
  },
  {
    term: "Residual risk",
    definition:
      "Risk remaining after current controls and treatment are considered.",
  },
  {
    term: "Risk tolerance",
    definition:
      "The acceptable boundary for risk in a defined business context.",
  },
  {
    term: "Approval authority",
    definition:
      "The role or level permitted to accept or approve a defined category of risk.",
  },
  {
    term: "Expiry",
    definition:
      "The date or condition after which an exception or acceptance is no longer valid without renewed governance.",
  },
  {
    term: "Reapproval",
    definition:
      "A fresh decision that extends or changes an existing acceptance or exception after reassessment.",
  },
  {
    term: "Revocation",
    definition:
      "Withdrawal of a prior approval because risk, evidence, controls, or business conditions changed.",
  },
  {
    term: "Closure criteria",
    definition:
      "The measurable conditions required before an exception or acceptance can be Closed.",
  },
  {
    term: "Risk treatment",
    definition:
      "The selected response to risk, such as mitigate, avoid, transfer/share, accept, or monitor.",
  },
  {
    term: "Decision record",
    definition:
      "The evidence-backed documentation of who approved what, why, for which scope, and for how long.",
  },
];

const records = [
  {
    id: "EXC-501",
    related:
      "RSK-102 / MAP-302 — Legacy Reporting Service",
    type:
      "Policy / control exception",
    scope:
      "Legacy Reporting production hosts and approved reporting workflow only",
    rationale:
      "Immediate retirement would disrupt required historical reporting while modernization is in progress.",
    residual:
      "High — obsolete trust, incomplete ownership, and transport gaps remain",
    compensating:
      "Restricted network scope, increased monitoring, monthly governance review",
    riskOwner:
      "Reporting Product Owner",
    approver:
      "Delegated Risk Governance Approver",
    evidence:
      "Current exception, network review, partial inventory, modernization milestones",
    start:
      "2026-08-01",
    expiry:
      "2027-01-31",
    state:
      "Approved",
    trigger:
      "Missed P0 milestone, control failure, incident, owner change, new data onboarding",
    closure:
      "Modernization complete, obsolete trust removed, ownership current, protected transport validated",
  },
  {
    id: "EXC-502",
    related:
      "RSK-103 / MAP-303 — Partner Scheduling Certificate",
    type:
      "Conditional risk acceptance",
    scope:
      "Existing partner scheduling certificate during active renewal window",
    rationale:
      "Current certificate remains valid and monitored while replacement validation is underway.",
    residual:
      "Moderate until replacement certificate is validated",
    compensating:
      "Daily expiry monitoring, active renewal ticket, partner sponsor oversight",
    riskOwner:
      "Integration Owner",
    approver:
      "Integration Governance Owner",
    evidence:
      "Current certificate inventory + renewal ticket + sponsor confirmation",
    start:
      "2026-09-01",
    expiry:
      "Before current certificate expiration",
    state:
      "Conditional",
    trigger:
      "Renewal delay, partner change, certificate status change",
    closure:
      "Replacement validated and old trust retired",
  },
  {
    id: "EXC-503",
    related:
      "RSK-104 — Recovery Backup Repository",
    type:
      "Residual-risk acceptance",
    scope:
      "Current recovery design for critical backup services",
    rationale:
      "Current recovery controls and validation are strong, but no test can perfectly reproduce every real disaster condition.",
    residual:
      "Moderate uncertainty remains despite current recovery evidence",
    compensating:
      "Regular restore testing, protected replication, restricted recovery access",
    riskOwner:
      "Resilience Leader",
    approver:
      "Business Continuity Executive",
    evidence:
      "Current restore validation + current key mapping + issue closure",
    start:
      "2026-07-15",
    expiry:
      "Next annual full-recovery review",
    state:
      "Approved",
    trigger:
      "Restore failure, major platform change, key-lifecycle change, provider migration",
    closure:
      "Not expected while service remains critical; acceptance is revalidated on schedule",
  },
  {
    id: "EXC-504",
    related:
      "RSK-105 — Critical SaaS Provider",
    type:
      "Temporary risk acceptance with treatment",
    scope:
      "Current critical SaaS dependency while continuity improvements are underway",
    rationale:
      "No practical alternate provider exists today; business requires the service to continue.",
    residual:
      "Moderate-High concentration risk",
    compensating:
      "Supplier monitoring, contract commitments, continuity plan, alternate operating procedures",
    riskOwner:
      "Business Service Owner",
    approver:
      "Business Operations Executive",
    evidence:
      "Current supplier assessment + contract + continuity plan",
    start:
      "2026-08-15",
    expiry:
      "Contract renewal review",
    state:
      "Conditional",
    trigger:
      "Supplier incident, material financial change, contract change, missed continuity milestone",
    closure:
      "Risk reduced to tolerance through stronger alternatives or renewed acceptance with updated evidence",
  },
  {
    id: "EXC-505",
    related:
      "RSK-107 / MAP-306 — Temporary Data Science Workspace",
    type:
      "Exception request",
    scope:
      "Recently closed temporary workspaces with incomplete destruction evidence",
    rationale:
      "Cleanup is designed but current evidence does not yet cover the full population.",
    residual:
      "Moderate and uncertain",
    compensating:
      "Restricted workspace access, encrypted storage, daily lifecycle processing",
    riskOwner:
      "Data Science Platform Owner",
    approver:
      "Pending",
    evidence:
      "Workspace policy + partial cleanup logs + project closeout records",
    start:
      "2026-09-05",
    expiry:
      "Not applicable until approval",
    state:
      "Under Review",
    trigger:
      "Evidence refresh, cleanup failure, project extension, data-classification change",
    closure:
      "Full-population destruction evidence confirms lifecycle completion",
  },
  {
    id: "EXC-506",
    related:
      "Low-risk internal reporting dashboard",
    type:
      "Residual-risk acceptance",
    scope:
      "Internal non-sensitive metrics dashboard",
    rationale:
      "Current controls reduce risk to within approved tolerance.",
    residual:
      "Low",
    compensating:
      "Normal access review, logging, backup, owner review",
    riskOwner:
      "Reporting Operations Owner",
    approver:
      "Reporting Operations Owner",
    evidence:
      "Current access review + monitoring + backup evidence",
    start:
      "2026-06-01",
    expiry:
      "2027-06-01",
    state:
      "Approved",
    trigger:
      "New sensitive data, external exposure, owner change, control degradation",
    closure:
      "Close only if the service is retired; otherwise revalidate annually",
  },
  {
    id: "EXC-507",
    related:
      "Expired legacy file-transfer exception",
    type:
      "Policy exception",
    scope:
      "Former legacy transfer workflow",
    rationale:
      "Previous temporary approval allowed operation during migration.",
    residual:
      "Unknown because current evidence has not been refreshed",
    compensating:
      "Formerly restricted partner list and monitoring",
    riskOwner:
      "Legacy Integration Owner",
    approver:
      "Previous governance approver",
    evidence:
      "Old exception + stale control evidence",
    start:
      "2025-12-01",
    expiry:
      "2026-08-31",
    state:
      "Expired",
    trigger:
      "Any continued use requires immediate reassessment",
    closure:
      "Either prove workflow retired or obtain new authorized decision after reassessment",
  },
];

const dashboardMetrics = [
  {
    label: "Decision records",
    value: "7",
    note: "Legacy, partner, recovery, supplier, workspace, low-risk, and expired-transfer decisions",
  },
  {
    label: "Approved",
    value: "3",
    note: "Legacy, recovery, and low-risk residual acceptance are currently approved",
  },
  {
    label: "Conditional / Review",
    value: "3",
    note: "Partner, supplier, and workspace decisions depend on active conditions or approval",
  },
  {
    label: "Expired",
    value: "1",
    note: "Legacy file-transfer exception requires immediate reassessment before continued reliance",
  },
];

const logs = [
  "[08:24] EXC-501 legacy_reporting state=APPROVED expiry=2027-01-31 residual=HIGH",
  "[08:48] EXC-502 partner_cert state=CONDITIONAL renewal=OPEN",
  "[09:12] EXC-503 recovery state=APPROVED evidence=CURRENT",
  "[09:36] EXC-504 critical_saas state=CONDITIONAL concentration=OPEN",
  "[10:00] EXC-505 workspace state=UNDER_REVIEW evidence=PARTIAL",
  "[10:24] EXC-506 internal_dashboard state=APPROVED residual=LOW",
  "[10:48] EXC-507 legacy_transfer state=EXPIRED evidence=STALE action=REASSESS",
];

const antiPatterns = [
  {
    title: "Acceptance used to avoid difficult remediation",
    problem:
      "A team chooses acceptance because treatment is inconvenient rather than because residual risk is within tolerance.",
    better:
      "Compare realistic treatment options, business need, cost, timing, and residual risk before acceptance.",
  },
  {
    title: "Exception with no expiry",
    problem:
      "A temporary deviation quietly becomes permanent.",
    better:
      "Require review date, expiry, closure path, and reapproval rules.",
  },
  {
    title: "Wrong approver",
    problem:
      "A technical team accepts a business consequence it does not own.",
    better:
      "Match approval authority to the business impact and organizational governance model.",
  },
  {
    title: "Exception marked compliant",
    problem:
      "An approved deviation is treated as if the preferred requirement is fully met.",
    better:
      "Keep the gap visible as Compensating, Partially Met, or another accurate status.",
  },
  {
    title: "Compensating control unrelated to the gap",
    problem:
      "An alternate control is listed even though it does not reduce the actual risk scenario.",
    better:
      "Map the compensating control to the same risk and expected outcome.",
  },
  {
    title: "Expired decision still treated as valid",
    problem:
      "The review date passes but the business keeps relying on the old approval.",
    better:
      "Reassess, reapprove, remediate, or block continued reliance.",
  },
  {
    title: "No revocation trigger",
    problem:
      "The decision remains approved even after a control fails or impact increases.",
    better:
      "Define conditions that automatically reopen or revoke approval.",
  },
  {
    title: "Closure without validation",
    problem:
      "An exception is closed because the project says it finished.",
    better:
      "Require evidence that the preferred control state or approved target state actually exists.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Treat EXC-507 as Expired and require immediate reassessment before anyone relies on the old exception.",
    outcome:
      "Best. An expired decision no longer provides valid governance authority.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep using EXC-507 because it was approved once.",
    outcome:
      "Risky. Past approval does not remain valid after expiry without renewed governance.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Mark EXC-507 Closed because its review date passed.",
    outcome:
      "Risky. Expiry is not proof that the underlying activity ended or the risk was resolved.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep EXC-505 Under Review until the full-population cleanup evidence supports the residual-risk decision and an authorized approver acts.",
    outcome:
      "Best. Incomplete evidence and pending authority should not be converted into an approved acceptance.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Approve EXC-505 because encryption is enabled.",
    outcome:
      "Risky. Encryption does not prove data-destruction lifecycle effectiveness.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Mark the workspace risk Low because the exception request exists.",
    outcome:
      "Risky. A request does not change the underlying evidence or residual risk.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is risk acceptance?",
    choices: [
      "A formal decision by an authorized owner to retain a defined level of residual risk.",
      "Deleting the risk from the register.",
      "Ignoring remediation.",
      "Automatically closing an exception.",
    ],
    answer: 0,
    explanation:
      "Acceptance is an explicit, governed decision about residual risk.",
  },
  {
    question:
      "What is an exception?",
    choices: [
      "A formally approved, bounded deviation from a policy, standard, or required control.",
      "A permanent waiver with no review.",
      "A completed remediation project.",
      "A control test result.",
    ],
    answer: 0,
    explanation:
      "Exceptions should be scoped, approved, time-bounded, and reviewable.",
  },
  {
    question:
      "What should happen when an exception expires?",
    choices: [
      "Reassess, reapprove through governance, remediate, or block continued reliance.",
      "Keep using it indefinitely.",
      "Automatically mark the risk Closed.",
      "Delete the old evidence.",
    ],
    answer: 0,
    explanation:
      "Expiry means the prior decision is no longer valid without renewed governance.",
  },
  {
    question:
      "What makes a compensating control strong?",
    choices: [
      "It reduces the same risk as the missing preferred control and has scope, ownership, evidence, and a time boundary.",
      "It is unrelated but easy to implement.",
      "It never needs review.",
      "It removes the need for a risk owner.",
    ],
    answer: 0,
    explanation:
      "Compensating controls should meaningfully reduce the same underlying risk.",
  },
  {
    question:
      "Why should acceptance authority match business consequence?",
    choices: [
      "The person approving the decision must have authority over the residual business risk being retained.",
      "Technical teams should accept every risk automatically.",
      "Evidence owners should make all business decisions.",
      "Authority does not matter when controls exist.",
    ],
    answer: 0,
    explanation:
      "Risk acceptance is a business decision and requires appropriate authority.",
  },
  {
    question:
      "Which statement about Accepted Risk is strongest?",
    choices: [
      "It remains visible, owned, evidenced, reviewed, and subject to change triggers.",
      "It disappears from the risk register.",
      "It never needs reevaluation.",
      "It means the underlying risk no longer exists.",
    ],
    answer: 0,
    explanation:
      "Acceptance governs residual risk; it does not eliminate the risk.",
  },
  {
    question:
      "When should an exception be Closed?",
    choices: [
      "When evidence shows the preferred control or approved target state exists, or the scoped activity has ended.",
      "When the project team says work is done.",
      "When the expiry date passes.",
      "When the exception has existed for a long time.",
    ],
    answer: 0,
    explanation:
      "Closure should be based on objective evidence or end of the scoped activity.",
  },
];

const checklistItems = [
  "Every acceptance or exception has a stable ID.",
  "Related risk and requirement IDs are recorded.",
  "Scope is specific.",
  "Business rationale is documented.",
  "Residual risk is explicit.",
  "Risk owner is named.",
  "Approver is named.",
  "Approval authority is appropriate.",
  "Compensating controls reduce the same risk.",
  "Compensating-control evidence is current.",
  "Start date is recorded.",
  "Expiry or review date is recorded.",
  "Review cadence is defined.",
  "Revocation triggers are defined.",
  "Reapproval rules are clear.",
  "Accepted Risk remains visible in the register.",
  "Expired decisions are not treated as valid.",
  "Closure criteria are objective.",
  "Closure evidence is retained.",
  "No acceptance or exception depends on unsafe testing or unauthorized access to real systems.",
];

const takeaways = [
  "Risk acceptance is a formal decision to retain residual risk, not a way to make risk disappear.",
  "Exceptions are bounded deviations from policy or required controls.",
  "Compensating controls should reduce the same risk created by the missing preferred control.",
  "Acceptance authority should match the business consequence.",
  "Residual risk, scope, evidence, rationale, and duration should all be explicit.",
  "Expired exceptions are no longer valid without renewed governance.",
  "Accepted Risk should stay visible and reviewable.",
  "Uncertainty should not be treated as low risk.",
  "Closure requires objective evidence that the preferred or approved target state exists.",
  "The Risk Acceptance and Exception Register prepares you for A15.8 Third-Party Risk Concepts.",
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

export default function RiskAcceptanceAndExceptionsPage() {
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
              A15.7
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Risk Management and Compliance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A15.7
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Risk Acceptance and Exceptions
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Organizations cannot eliminate every risk immediately. Sometimes a
            residual risk is within tolerance. Sometimes a policy deviation is
            temporarily necessary. Mature governance makes those decisions
            explicit, bounded, owned, evidenced, reviewable, and reversible.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional risks, exceptions, owners, approvals,
            evidence, and compensating controls only. It does not require
            testing or accessing real systems.
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
          lessonTitle="Risk Acceptance and Exceptions"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A15.7 Entry Readiness"
          items={[
            "I can explain residual risk.",
            "I can distinguish risk ownership from control ownership.",
            "I can evaluate evidence quality and compliance status.",
            "I will use only fictional decisions, approvals, and evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Risk Acceptance Is a Business Decision With Boundaries"
        >
          <p className="leading-8">
            A mature risk program does not pretend every gap can be eliminated
            instantly. It also does not use acceptance as a shortcut around
            difficult work. The key question is whether the remaining risk is
            understood, supported by evidence, within the right authority, and
            governed for the correct scope and time.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Accepted Risk is still risk. The difference is that an authorized owner has made a documented decision about it.
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
          eyebrow="Decision Types"
          title="Acceptance Is One Risk Treatment Option Among Several"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {decisionTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.type}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Example: {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Acceptance Criteria"
          title="Eight Questions Before a Risk Is Accepted"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {acceptanceCriteria.map((item) => (
              <article
                key={item.criterion}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.criterion}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.question}
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
          eyebrow="Exception Anatomy"
          title="A Good Exception Record Explains the Entire Decision"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {exceptionFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.field}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
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
          eyebrow="Lifecycle"
          title="Acceptance and Exceptions Have States"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {lifecycleStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.state}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Action: {item.action}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Compensating Controls"
          title="Alternate Safeguards Need the Same Discipline as Preferred Controls"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {compensatingControlQualities.map((item) => (
              <article
                key={item.quality}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.quality}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Strong: {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Weak: {item.failure}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision Boundaries"
          title="Not Every Residual Risk Is Suitable for Acceptance"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {acceptanceBoundaries.map((item) => (
              <article
                key={item.boundary}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.boundary}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {item.description}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Governance: {item.governance}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Principles"
          title="Eight Principles for Responsible Acceptance and Exceptions"
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
          title="Risk Acceptance and Exception Terms"
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
          eyebrow="Fictional Exception Register"
          title="Seven Northbridge Acceptance and Exception Decisions"
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
                  {item.related}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Decision type", item.type],
                    ["Scope", item.scope],
                    ["Rationale", item.rationale],
                    ["Residual risk", item.residual],
                    ["Compensating controls", item.compensating],
                    ["Risk owner", item.riskOwner],
                    ["Approver", item.approver],
                    ["Evidence", item.evidence],
                    ["Start", item.start],
                    ["Expiry / review", item.expiry],
                    ["Revocation / change trigger", item.trigger],
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
          title="Northbridge Acceptance and Exception Dashboard"
          subtitle="Fictional approval, condition, expiry, and residual-risk summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Legacy File-Transfer Exception Has Expired"
          severity="High"
          time="10:48"
          source="Fictional Exception Governance Review"
          details="EXC-507 reached its expiry date and the underlying workflow state has not been revalidated. The old approval can no longer be treated as current governance authority."
          recommendation="Immediately reassess whether the workflow is retired. If it remains active, require a fresh risk decision, current evidence, and authorized approval before continued reliance."
        />

        <Section
          eyebrow="Acceptance vs. Avoidance of Accountability"
          title="The Quality of the Decision Matters More Than the Label"
        >
          <p className="leading-8">
            Two records can both say Accepted Risk and still represent very
            different governance quality. One may have a clear owner, strong
            evidence, limited scope, low residual risk, and annual review. The
            other may have no approver, no expiry, stale evidence, and unresolved
            high-impact gaps. The label alone does not make the decision sound.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-50">
                Responsible acceptance
              </h3>
              <p className="mt-2 text-sm leading-7 text-emerald-100">
                Known residual risk, current evidence, authorized owner, clear
                rationale, bounded scope, review date, and change triggers.
              </p>
            </article>

            <article className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5">
              <h3 className="font-black text-red-50">
                Avoidance disguised as acceptance
              </h3>
              <p className="mt-2 text-sm leading-7 text-red-100">
                High or uncertain residual risk, missing authority, vague scope,
                no expiry, no compensating controls, and no closure path.
              </p>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Acceptance and Exception Activity Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Expired Legacy Exception"
          question="What is the strongest current decision for EXC-507?"
          evidence={[
            "The exception expired on 2026-08-31.",
            "Current control evidence has not been refreshed.",
            "The organization has not yet confirmed whether the legacy transfer workflow is retired.",
            "The previous approval was tied to a temporary migration period.",
          ]}
          options={[
            "Treat the exception as Expired and require immediate reassessment before continued reliance.",
            "Keep it Approved because it was valid last month.",
            "Mark it Closed because the expiry date passed.",
            "Mark it Met because migration was planned.",
          ]}
          bestAnswer={0}
          explanation="Expiry ends the prior governance authority. The organization must determine whether the activity ended or requires a fresh decision."
        />

        <Section
          eyebrow="Common Acceptance Mistakes"
          title="Eight Ways Risk Acceptance Becomes Weak Governance"
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
          title="Scenario Decision Lab 1 — Expired Approval"
          scenario="A legacy file-transfer exception expired last week. Nobody has confirmed whether the workflow is retired, and the supporting control evidence is stale."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Incomplete Workspace Evidence"
          scenario="A temporary-workspace exception request has good design controls, but cleanup evidence is incomplete and the approver has not yet made a decision."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Risk Acceptance and Exception Register"
        >
          <p className="leading-8">
            Use fictional risks, requirements, owners, approvers, evidence,
            exceptions, compensating controls, and closure decisions only.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twenty-five fictional acceptance or exception records.",
              "Give every record a stable EXC ID.",
              "Map each record to one or more RSK IDs.",
              "Map related MAP or CTL IDs where useful.",
              "Record decision type.",
              "Record exact scope.",
              "Record business rationale.",
              "Record inherent and residual risk where useful.",
              "Record current controls.",
              "Record compensating controls.",
              "Record evidence source.",
              "Record evidence freshness.",
              "Record risk owner.",
              "Record approver.",
              "Record approval authority.",
              "Record start date.",
              "Record expiry or review date.",
              "Record review cadence.",
              "Record revocation triggers.",
              "Record reapproval rules.",
              "Record closure criteria.",
              "Record closure evidence.",
              "Classify state as Proposed, Under Review, Approved, Conditional, Expired, Revoked, or Closed.",
              "Include at least five Approved records.",
              "Include at least five Conditional records.",
              "Include at least three Under Review records.",
              "Include at least three Expired records.",
              "Include at least two Revoked records.",
              "Include at least two Closed records with validation evidence.",
              "Include at least five records using compensating controls.",
              "Include at least three records with evidence-quality concerns.",
              "Include at least three records where the approver authority must be escalated because business impact is high.",
              "Include at least two records where acceptance is rejected because residual risk is too uncertain.",
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
              Do not test, scan, probe, exploit, or access real systems to
              justify acceptance. Do not collect confidential approval records,
              private risk decisions, or restricted audit evidence. Use
              synthetic records only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Workspace Exception Request"
          question="What is the strongest state for EXC-505?"
          evidence={[
            "Workspace cleanup design is documented.",
            "Encryption and restricted access are active.",
            "Current destruction evidence is incomplete across the full population.",
            "The risk owner is known.",
            "The authorized approver has not yet made a decision.",
          ]}
          options={[
            "Under Review until evidence and approval authority support a final decision.",
            "Approved because the control design is strong.",
            "Closed because encryption is active.",
            "Accepted Risk automatically because the workspaces are temporary.",
          ]}
          bestAnswer={0}
          explanation="A complete acceptance decision requires both adequate evidence and authorized approval. Neither should be assumed."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design an Exception Governance Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard for how risk
            acceptance and exceptions are requested, reviewed, approved,
            monitored, renewed, revoked, and closed.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Exception ID format",
              "Required related risk IDs",
              "Scope definition",
              "Residual-risk requirements",
              "Compensating-control requirements",
              "Evidence requirements",
              "Risk-owner role",
              "Approval-authority levels",
              "Maximum exception duration",
              "Review cadence",
              "Expiry handling",
              "Reapproval rules",
              "Revocation triggers",
              "Escalation thresholds",
              "Closure criteria",
              "Closure evidence",
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
            The strongest standard should make it difficult for temporary
            exceptions to become invisible permanent risk.
          </p>
        </Section>

        <DefenderChecklist
          title="A15.7 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A15.7 Mini Quiz: Risk Acceptance and Exceptions"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Risk Acceptance and Exception Register"
          prompt="Create the seventh artifact for your A15 Risk Register and Leadership Recommendation: a fictional Risk Acceptance and Exception Register with at least twenty-five records. Include EXC ID, related RSK/MAP/CTL IDs, decision type, scope, rationale, current controls, compensating controls, evidence, evidence freshness, residual risk, risk owner, approver, approval authority, start date, expiry/review date, state, review cadence, revocation triggers, reapproval rules, closure criteria, closure evidence, and next action."
          tips={[
            "Keep Accepted Risk visible.",
            "Make scope and duration explicit.",
            "Match authority to business impact.",
            "Use compensating controls that reduce the same risk.",
            "Treat expiry as a real governance event.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A15.8?"
        >
          <p className="leading-8">
            A15.8 focuses on Third-Party Risk Concepts. Before continuing, make
            sure you can explain why an organization may accept some residual
            risk without pretending that the risk is gone.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish acceptance from exception.",
              "I can explain what makes a compensating control relevant.",
              "I can identify appropriate acceptance authority.",
              "I can explain what should happen when an exception expires.",
              "I can define evidence-based closure criteria.",
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
          title="How to Make the Risk Acceptance and Exception Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use stable decision IDs",
                detail:
                  "Keep every approval traceable through renewal, revocation, and closure.",
              },
              {
                title: "Make scope specific",
                detail:
                  "Name the exact service, environment, workflow, user group, or data boundary covered.",
              },
              {
                title: "Show residual risk",
                detail:
                  "Acceptance is about what remains after controls, not about pretending risk is zero.",
              },
              {
                title: "Show authority",
                detail:
                  "Readers should know who owns the risk and who approved the decision.",
              },
              {
                title: "Show time boundaries",
                detail:
                  "Use expiry, review dates, event triggers, and reapproval rules.",
              },
              {
                title: "Show compensating controls",
                detail:
                  "Alternate controls should reduce the same risk and stay evidenced while the exception is active.",
              },
              {
                title: "Treat expiry seriously",
                detail:
                  "An expired record should move to reassessment, treatment, block, or renewed approval—not remain silently valid.",
              },
              {
                title: "Connect forward",
                detail:
                  "A15.8 will apply these ideas to suppliers and partners, where the organization depends on controls it does not fully operate.",
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
            Acceptance decisions use governance evidence, not unsafe testing
          </h2>
          <p className="mt-3 leading-7">
            Do not scan, probe, exploit, bypass, or test real systems, vendors,
            accounts, or people to justify an exception or acceptance. Do not
            collect private approval records or confidential risk evidence. All
            decisions, owners, systems, evidence, and exceptions in this lesson
            are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A15.7 Risk Acceptance and Exceptions Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a structured model for risk acceptance, exceptions,
            compensating controls, approval authority, expiry, reapproval,
            revocation, residual risk, and closure. Next, A15.8 focuses on
            Third-Party Risk Concepts.
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