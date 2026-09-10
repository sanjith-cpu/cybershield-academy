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
const previousLesson = `${modulePath}/detection-tuning-case`;
const nextLesson = `${modulePath}/forensics-timeline-case`;

const objectives = [
  "Translate fictional technical findings into clear risk statements that connect a condition, plausible event, affected asset or process, and business consequence.",
  "Distinguish inherent risk, existing controls, control effectiveness, residual risk, uncertainty, and evidence quality so scoring does not replace reasoning.",
  "Evaluate likelihood and impact using documented evidence, business context, exposure, dependency, detectability, resilience, and control strength rather than intuition alone.",
  "Choose and justify appropriate risk treatment decisions such as mitigate, accept, avoid, transfer/share, monitor, or escalate while preserving accountable ownership and review triggers.",
  "Build a Defensive Risk Register that links evidence, risk statements, ratings, controls, residual risk, treatment, owners, due dates, validation, and leadership priorities.",
];

const riskVocabulary = [
  {
    term: "Risk condition",
    meaning:
      "The current situation or weakness that creates uncertainty.",
    example:
      "A critical monitoring function depends on one fictional collector and one shared hosting dependency.",
  },
  {
    term: "Risk event",
    meaning:
      "The plausible event that could occur if the condition matters.",
    example:
      "The shared monitoring dependency becomes unavailable during an important service issue.",
  },
  {
    term: "Business consequence",
    meaning:
      "The effect on operations, evidence, safety, compliance, service delivery, or decision quality.",
    example:
      "The defensive team may lose timely visibility and make slower or less confident decisions.",
  },
  {
    term: "Likelihood",
    meaning:
      "A reasoned estimate of how plausible the risk event is within the fictional context.",
    example:
      "Moderate because the monitoring service has shown repeated health instability.",
  },
  {
    term: "Impact",
    meaning:
      "The seriousness of the consequence if the event occurs.",
    example:
      "High because several important evidence sources depend on the monitoring path.",
  },
  {
    term: "Inherent risk",
    meaning:
      "The risk level considered before taking existing controls into account.",
    example:
      "High before resilient health checks and manual fallback are considered.",
  },
  {
    term: "Existing control",
    meaning:
      "A current safeguard that reduces likelihood, impact, or both.",
    example:
      "Independent service-health review and a documented manual escalation path.",
  },
  {
    term: "Control effectiveness",
    meaning:
      "How well the existing control appears to reduce the risk based on current evidence.",
    example:
      "Partially effective because the fallback is documented but has not been validated recently.",
  },
  {
    term: "Residual risk",
    meaning:
      "The risk remaining after existing controls are considered.",
    example:
      "Moderate after current fallback and health monitoring are considered.",
  },
  {
    term: "Risk owner",
    meaning:
      "The accountable role that has authority to manage or accept the risk.",
    example:
      "Security Monitoring Owner.",
  },
  {
    term: "Treatment",
    meaning:
      "The chosen response to the risk.",
    example:
      "Mitigate by improving independent monitoring health and evidence continuity.",
  },
  {
    term: "Review trigger",
    meaning:
      "A condition that requires the risk to be reassessed before the normal review date.",
    example:
      "A monitoring outage, architecture change, or repeated failed health check.",
  },
];

const strongRiskStatements = [
  {
    weak:
      "Monitoring could fail.",
    strong:
      "Because multiple critical fictional telemetry sources depend on one collector and shared hosting dependency, a collector or hosting failure could reduce both evidence collection and analyst visibility, delaying defensive decisions.",
    why:
      "The stronger version identifies the condition, event, affected function, and consequence.",
  },
  {
    weak:
      "Old access is risky.",
    strong:
      "Because a former-team reporting role remains assigned after the user's role change and the only approval references the former position, access may persist without a current business need, weakening least-privilege governance.",
    why:
      "The stronger statement links stale entitlement evidence to a specific governance consequence.",
  },
  {
    weak:
      "The cloud backup is bad.",
    strong:
      "Although daily fictional backups exist, recovery validation is thirteen months old, so the organization may have lower confidence that DATA-C1 can be restored within expected conditions if recovery is needed.",
    why:
      "The statement separates healthy backup creation from stale recovery assurance.",
  },
  {
    weak:
      "The detection has too many alerts.",
    strong:
      "Because the fictional detection's alert volume increased substantially while analyst reclassification and duplicate rates also rose, excessive noise may consume review capacity and reduce attention available for higher-confidence signals.",
    why:
      "The statement connects measurable evidence to an operational consequence.",
  },
  {
    weak:
      "The architecture diagram is outdated.",
    strong:
      "Because the current fictional architecture diagram does not reflect three approved changes or current ownership, reviewers may make security and resilience decisions from a model that no longer represents the approved environment.",
    why:
      "The stronger statement explains why stale documentation matters.",
  },
];

const likelihoodFactors = [
  {
    factor: "Observed frequency",
    question:
      "Has the fictional condition or related failure happened repeatedly, occasionally, or not at all?",
  },
  {
    factor: "Exposure",
    question:
      "How often is the system, process, dependency, or identity exposed to the condition that could produce the event?",
  },
  {
    factor: "Dependency concentration",
    question:
      "Does one component support many services, decisions, or evidence paths?",
  },
  {
    factor: "Change rate",
    question:
      "Does the environment change often enough that stale assumptions or drift are likely?",
  },
  {
    factor: "Control reliability",
    question:
      "Are preventive and detective controls current, healthy, and validated?",
  },
  {
    factor: "Exception rate",
    question:
      "Do unusual cases occur often enough that normal safeguards are frequently bypassed or escalated?",
  },
  {
    factor: "Evidence freshness",
    question:
      "Is the evidence current enough to support a likelihood estimate?",
  },
  {
    factor: "Uncertainty",
    question:
      "What important facts remain unknown, and how should that uncertainty affect confidence?",
  },
];

const impactFactors = [
  {
    factor: "Service criticality",
    question:
      "How important is the affected fictional service to business or defensive operations?",
  },
  {
    factor: "Data sensitivity",
    question:
      "Could the event affect restricted, internal, regulated, or otherwise important information?",
  },
  {
    factor: "Scope",
    question:
      "Would one identity or one service be affected, or could the issue spread across many dependencies?",
  },
  {
    factor: "Decision quality",
    question:
      "Could the event reduce the evidence available for making safe security decisions?",
  },
  {
    factor: "Recovery complexity",
    question:
      "Would restoration be straightforward, or depend on several teams, systems, and approvals?",
  },
  {
    factor: "Operational disruption",
    question:
      "Could normal workflows be slowed, unavailable, or forced into manual fallback?",
  },
  {
    factor: "Governance consequence",
    question:
      "Could the event create an audit, compliance, ownership, or accountability issue?",
  },
  {
    factor: "Reputational / stakeholder impact",
    question:
      "Would the event require significant leadership, customer, partner, or stakeholder communication?",
  },
];

const controlTypes = [
  {
    type: "Preventive control",
    purpose:
      "Reduces the chance that a risk event occurs.",
    example:
      "Least-privilege role design reduces unnecessary access.",
  },
  {
    type: "Detective control",
    purpose:
      "Helps reveal when a condition or event occurs.",
    example:
      "Monitoring health alerts identify repeated collector degradation.",
  },
  {
    type: "Corrective control",
    purpose:
      "Helps restore an acceptable state after a problem is identified.",
    example:
      "A documented owner reconciliation process corrects stale routing data.",
  },
  {
    type: "Compensating control",
    purpose:
      "Provides an alternative safeguard when the preferred control is not currently available.",
    example:
      "Manual approval review while a governance workflow is being updated.",
  },
  {
    type: "Recovery control",
    purpose:
      "Supports restoration and continuity after a disruption.",
    example:
      "Validated fictional recovery procedures for important data.",
  },
  {
    type: "Governance control",
    purpose:
      "Keeps ownership, approvals, exceptions, and review decisions current.",
    example:
      "Time-bounded exceptions with expiration and closure evidence.",
  },
];

const treatmentOptions = [
  {
    treatment: "Mitigate",
    use:
      "Reduce likelihood or impact through additional or improved controls.",
    example:
      "Improve monitoring resilience and independently verify health.",
  },
  {
    treatment: "Accept",
    use:
      "Formally acknowledge residual risk when it is within approved tolerance and further treatment is not justified.",
    example:
      "Accept a low-impact optional-service degradation risk with documented fallback.",
  },
  {
    treatment: "Avoid",
    use:
      "Stop or redesign the activity that creates the risk when the exposure is not acceptable.",
    example:
      "Retire a fictional workflow that requires unjustified privileged overlap.",
  },
  {
    treatment: "Transfer / Share",
    use:
      "Shift or share part of the financial or operational consequence through an approved external arrangement.",
    example:
      "Use contractual service commitments for a fictional external dependency while retaining internal governance responsibility.",
  },
  {
    treatment: "Monitor",
    use:
      "Keep the risk under observation when the current evidence does not justify immediate change.",
    example:
      "Track a low-severity detection-quality issue while collecting another review window.",
  },
  {
    treatment: "Escalate",
    use:
      "Send the risk to a role with appropriate decision authority when impact, uncertainty, or tolerance exceeds the current owner's authority.",
    example:
      "Escalate a cross-service identity exception that affects several control owners.",
  },
];

const northbridgeRisks = [
  {
    id: "RSK-1801",
    title: "Monitoring observability concentration",
    evidence:
      "ARC-1803, ARC-1808, CLD-1809",
    statement:
      "Because several critical fictional telemetry sources depend on MON-NB-4 and shared hosting, a monitoring dependency failure could reduce collection and visibility at the same time, delaying defensive decisions.",
    inherent:
      "High",
    controls:
      "Collector health checks; manual evidence-verification process",
    effectiveness:
      "Partial",
    residual:
      "Moderate",
    treatment:
      "Mitigate",
    owner:
      "Security Monitoring Owner",
    due:
      "30 days",
    trigger:
      "Another failed health check or monitoring architecture change",
  },
  {
    id: "RSK-1802",
    title: "Expired privileged exception",
    evidence:
      "CLD-1802, CLD-1803",
    statement:
      "Because a dual-role privileged exception expired while the assignment remained active, separation-of-duties intent may be weakened until the role state is corrected or reapproved.",
    inherent:
      "High",
    controls:
      "Enhanced logging; time-bounded exception record",
    effectiveness:
      "Weak after expiration",
    residual:
      "High",
    treatment:
      "Mitigate / Escalate",
    owner:
      "Identity Governance Owner",
    due:
      "Immediate",
    trigger:
      "Any extension request or evidence of continued dual-role assignment",
  },
  {
    id: "RSK-1803",
    title: "Stale former-team entitlement",
    evidence:
      "IAM-1801, IAM-1802, IAM-1803",
    statement:
      "Because a former-team read-only role remains assigned after a job change and current purpose is unsupported, access may persist beyond business need and weaken least-privilege governance.",
    inherent:
      "Moderate",
    controls:
      "Periodic access review; owner confirmation",
    effectiveness:
      "Partial",
    residual:
      "Moderate",
    treatment:
      "Mitigate",
    owner:
      "Application Access Owner",
    due:
      "14 days",
    trigger:
      "Further role change or owner review",
  },
  {
    id: "RSK-1804",
    title: "Stale recovery validation",
    evidence:
      "CLD-1811",
    statement:
      "Because DATA-C1 backups exist but recovery validation is thirteen months old, the fictional organization may have reduced confidence in restoring the service within expected conditions during a disruption.",
    inherent:
      "High",
    controls:
      "Daily backup jobs; backup health review",
    effectiveness:
      "Moderate",
    residual:
      "Moderate",
    treatment:
      "Mitigate",
    owner:
      "Application Resilience Owner",
    due:
      "30 days",
    trigger:
      "Backup policy change, failed job, or recovery-plan change",
  },
  {
    id: "RSK-1805",
    title: "Stale architecture documentation",
    evidence:
      "ARC-1809, ARC-1810, CLD-1812, CLD-1813",
    statement:
      "Because consolidated architecture evidence does not reflect several approved changes, reviewers may make security, ownership, and resilience decisions from an outdated model.",
    inherent:
      "Moderate",
    controls:
      "Individual approved change records",
    effectiveness:
      "Partial",
    residual:
      "Moderate",
    treatment:
      "Mitigate",
    owner:
      "Security Architecture Owner",
    due:
      "45 days",
    trigger:
      "Another architecture change or ownership dispute",
  },
  {
    id: "RSK-1806",
    title: "Optional external dependency visibility gap",
    evidence:
      "CLD-1816",
    statement:
      "Because APP-C1 can continue without EXT-C3 but degraded state is not visible on the dashboard, operators may believe the service is fully healthy while optional capability is unavailable.",
    inherent:
      "Moderate",
    controls:
      "Application can continue safely without the reference lookup",
    effectiveness:
      "Strong for continuity, weak for visibility",
    residual:
      "Low to Moderate",
    treatment:
      "Mitigate / Monitor",
    owner:
      "Application Service Owner",
    due:
      "60 days",
    trigger:
      "Repeated EXT-C3 availability issue",
  },
  {
    id: "RSK-1807",
    title: "Service identity review overdue",
    evidence:
      "IAM-1806, IAM-1807, IAM-1808",
    statement:
      "Because SVC-NB-22 retains permissions that appear aligned with current workload needs but its formal review is fifteen months old, privilege drift may go unnoticed as dependencies change.",
    inherent:
      "Moderate",
    controls:
      "Current owner; documented workload purpose",
    effectiveness:
      "Moderate",
    residual:
      "Low to Moderate",
    treatment:
      "Mitigate",
    owner:
      "Team Atlas Service Owner",
    due:
      "30 days",
    trigger:
      "Permission change, workload redesign, or ownership change",
  },
  {
    id: "RSK-1808",
    title: "Detection noise consumes analyst capacity",
    evidence:
      "Synthetic A18.6 tuning records",
    statement:
      "Because alert volume, duplicate rate, and analyst reclassification increased after a fictional detection revision, excessive noise may consume review capacity and reduce attention available for higher-confidence defensive signals.",
    inherent:
      "Moderate",
    controls:
      "Analyst review; rule ownership; post-change monitoring",
    effectiveness:
      "Partial",
    residual:
      "Moderate",
    treatment:
      "Mitigate / Monitor",
    owner:
      "Detection Engineering Owner",
    due:
      "Next review window",
    trigger:
      "Further false-positive or duplicate-rate increase",
  },
  {
    id: "RSK-1809",
    title: "Conflicting access ownership",
    evidence:
      "IAM-1817, IAM-1818",
    statement:
      "Because current application ownership and older entitlement approval records disagree, access decisions may be delayed or made under unclear authority.",
    inherent:
      "Moderate",
    controls:
      "Identity governance escalation path",
    effectiveness:
      "Strong",
    residual:
      "Low",
    treatment:
      "Mitigate",
    owner:
      "Identity Governance Owner",
    due:
      "14 days",
    trigger:
      "Any material access change before ownership reconciliation",
  },
  {
    id: "RSK-1810",
    title: "Temporary architecture exception lacks expiration",
    evidence:
      "ARC-1805",
    statement:
      "Because a temporary data-zone architecture exception has no recorded expiration, the deviation may become permanent without deliberate review or closure evidence.",
    inherent:
      "Moderate",
    controls:
      "Exception is documented and has an owner",
    effectiveness:
      "Partial",
    residual:
      "Moderate",
    treatment:
      "Mitigate",
    owner:
      "Risk / Governance Owner",
    due:
      "14 days",
    trigger:
      "Scope change, architecture review, or owner change",
  },
];

const scoreCautions = [
  {
    caution:
      "A numeric risk score can look precise even when the evidence is uncertain.",
    better:
      "Record the likelihood and impact rationale alongside the score.",
  },
  {
    caution:
      "Two risks with the same score may need different treatment.",
    better:
      "Consider business criticality, reversibility, regulatory context, ownership, and control maturity.",
  },
  {
    caution:
      "A low residual score can hide weak control evidence.",
    better:
      "Rate control effectiveness and validation freshness separately.",
  },
  {
    caution:
      "High impact does not automatically mean high likelihood.",
    better:
      "Evaluate consequence and plausibility independently.",
  },
  {
    caution:
      "A risk register can become stale even when the risk score stays the same.",
    better:
      "Use review dates and event-based triggers.",
  },
  {
    caution:
      "Color coding can encourage shallow decisions.",
    better:
      "Use colors only as navigation; preserve the full evidence-linked rationale.",
  },
];

const registerFields = [
  {
    field: "Risk ID",
    purpose:
      "Stable identifier for the risk.",
    example:
      "RSK-1804",
  },
  {
    field: "Risk title",
    purpose:
      "Short, precise label for the issue.",
    example:
      "Stale recovery validation",
  },
  {
    field: "Evidence",
    purpose:
      "Links the risk to the fictional case records that support it.",
    example:
      "CLD-1811",
  },
  {
    field: "Risk statement",
    purpose:
      "Explains condition, event, affected function, and consequence.",
    example:
      "Backups exist, but stale recovery validation reduces confidence in restoration.",
  },
  {
    field: "Inherent likelihood",
    purpose:
      "Estimates plausibility before existing controls.",
    example:
      "Moderate",
  },
  {
    field: "Inherent impact",
    purpose:
      "Estimates consequence before existing controls.",
    example:
      "High",
  },
  {
    field: "Existing controls",
    purpose:
      "Lists safeguards already reducing likelihood or impact.",
    example:
      "Daily backup jobs and health review",
  },
  {
    field: "Control effectiveness",
    purpose:
      "Rates how well those safeguards currently work.",
    example:
      "Moderate",
  },
  {
    field: "Residual risk",
    purpose:
      "States the risk remaining after controls.",
    example:
      "Moderate",
  },
  {
    field: "Treatment",
    purpose:
      "Records the chosen risk response.",
    example:
      "Mitigate",
  },
  {
    field: "Risk owner",
    purpose:
      "Names the accountable fictional role.",
    example:
      "Application Resilience Owner",
  },
  {
    field: "Action owner",
    purpose:
      "Names who carries out the treatment work if different from the risk owner.",
    example:
      "Platform Operations Team",
  },
  {
    field: "Due date",
    purpose:
      "Defines when treatment or review should be completed.",
    example:
      "30 days",
  },
  {
    field: "Validation",
    purpose:
      "Defines what evidence proves treatment is complete or effective.",
    example:
      "Current synthetic recovery validation",
  },
  {
    field: "Review trigger",
    purpose:
      "Defines events that require earlier reassessment.",
    example:
      "Failed backup job or recovery-plan change",
  },
  {
    field: "Status",
    purpose:
      "Shows whether the risk is Open, Treating, Monitoring, Accepted, Escalated, or Closed.",
    example:
      "Treating",
  },
];

const dashboardMetrics = [
  {
    label: "Risk records",
    value: "10",
    note: "Architecture, cloud, identity, monitoring, recovery, detection, and governance risks",
  },
  {
    label: "High residual risk",
    value: "1",
    note: "Expired privileged exception requires immediate attention",
  },
  {
    label: "Treatment owners",
    value: "8",
    note: "Risks are distributed across accountable fictional roles",
  },
  {
    label: "Real systems changed",
    value: "0",
    note: "All analysis remains fictional, inert, and governance-focused",
  },
];

const logPreview = [
  "[08:10] RSK-1801 category=MONITORING inherent=HIGH residual=MODERATE treatment=MITIGATE",
  "[08:28] RSK-1802 category=IDENTITY residual=HIGH treatment=MITIGATE_ESCALATE due=IMMEDIATE",
  "[08:46] RSK-1804 category=RECOVERY control_effectiveness=MODERATE validation=STALE",
  "[09:04] RSK-1805 category=ARCHITECTURE evidence_state=STALE treatment=MITIGATE",
  "[09:22] RSK-1807 category=SERVICE_IDENTITY review_age=15_MONTHS residual=LOW_MODERATE",
  "[09:40] RSK-1808 category=DETECTION analyst_capacity=AT_RISK treatment=MITIGATE_MONITOR",
  "[09:58] RSK-1809 category=OWNERSHIP residual=LOW escalation_path=AVAILABLE",
  "[10:16] RSK-1810 category=EXCEPTION expiration=MISSING residual=MODERATE",
];

const safeLabTasks = [
  "Create at least forty fictional risk records.",
  "Give every risk a stable RSK ID.",
  "Use evidence from architecture, cloud, identity, detection, workflow, and recovery cases.",
  "Write a precise risk title.",
  "Link every risk to evidence IDs.",
  "Write a condition statement.",
  "Write a plausible risk event.",
  "Write the affected asset, service, control, or process.",
  "Write the business or defensive consequence.",
  "Assign inherent likelihood.",
  "Explain the likelihood rationale.",
  "Assign inherent impact.",
  "Explain the impact rationale.",
  "List existing controls.",
  "Classify controls as preventive, detective, corrective, compensating, recovery, or governance where useful.",
  "Rate control effectiveness.",
  "Record control-evidence freshness.",
  "Assign residual risk.",
  "Explain why residual risk differs from inherent risk.",
  "Choose a treatment decision.",
  "Use Mitigate cases.",
  "Use Accept cases.",
  "Use Avoid cases.",
  "Use Transfer/Share cases where appropriate.",
  "Use Monitor cases.",
  "Use Escalate cases.",
  "Assign a risk owner.",
  "Assign an action owner.",
  "Assign a due date or review window.",
  "Define validation evidence.",
  "Define a review trigger.",
  "Set a status.",
  "Create at least five cases where a high-impact risk has low or moderate likelihood.",
  "Create at least five cases where strong controls materially reduce residual risk.",
  "Create at least five cases where weak control evidence keeps residual risk elevated.",
  "Create at least five risks where uncertainty lowers rating confidence.",
  "Create at least five risks where ownership or governance is part of the risk.",
  "Create at least five risks where monitoring or detectability affects impact.",
  "Create a top-five leadership priority view.",
  "Write a one-page executive risk summary.",
  "Keep all evidence, risks, organizations, owners, and systems fictional.",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Rate the stale recovery-validation issue based on current backup evidence, business criticality, and the uncertainty created by old restore validation, then mitigate through a synthetic recovery test.",
    outcome:
      "Best. The risk reflects reduced recovery confidence without claiming that backups are broken.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark recovery risk Critical because the last validation is old.",
    outcome:
      "Caution. Stale validation matters, but severity should consider current controls, likelihood, impact, and evidence rather than age alone.",
    tone: "caution" as const,
  },
  {
    label: "Choice C",
    response:
      "Mark the risk Low because daily backups exist.",
    outcome:
      "Risky. Backup existence does not replace recovery validation.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Escalate the expired privileged exception, treat the residual risk as elevated until access is corrected or reapproved, and preserve the enhanced logging evidence.",
    outcome:
      "Best. The exception has moved outside its approved time boundary and requires a current decision.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Accept the risk automatically because the exception was approved once.",
    outcome:
      "Risky. Expired approval does not equal current risk acceptance.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Assume the privileged user caused an incident.",
    outcome:
      "Caution. The governance failure is real, but malicious activity requires separate evidence.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What makes a strong risk statement?",
    choices: [
      "It connects a condition, plausible event, affected asset or process, and consequence.",
      "It uses the highest possible severity word.",
      "It contains a color and a score only.",
      "It avoids mentioning evidence.",
    ],
    answer: 0,
    explanation:
      "A strong risk statement explains what creates uncertainty, what could happen, what is affected, and why it matters.",
  },
  {
    question:
      "What is residual risk?",
    choices: [
      "The risk that remains after existing controls are considered.",
      "The risk before any controls exist.",
      "The number of open tickets.",
      "The cost of a control.",
    ],
    answer: 0,
    explanation:
      "Residual risk reflects the remaining exposure after existing safeguards are taken into account.",
  },
  {
    question:
      "Why should likelihood and impact be rated separately?",
    choices: [
      "A very serious event may still be unlikely, while a frequent event may have limited impact.",
      "They always have the same value.",
      "Impact is only used for financial risks.",
      "Likelihood replaces evidence quality.",
    ],
    answer: 0,
    explanation:
      "Plausibility and consequence answer different risk questions.",
  },
  {
    question:
      "What does risk acceptance require?",
    choices: [
      "An accountable decision that the residual risk is within approved tolerance.",
      "Ignoring the risk.",
      "Deleting the risk record.",
      "Waiting until the risk disappears.",
    ],
    answer: 0,
    explanation:
      "Acceptance is an explicit governance decision, not inaction.",
  },
  {
    question:
      "Why are review triggers useful?",
    choices: [
      "They force reassessment when important conditions change before the normal review date.",
      "They permanently freeze the risk score.",
      "They replace risk owners.",
      "They eliminate the need for validation.",
    ],
    answer: 0,
    explanation:
      "Risk can change after architecture, ownership, control, or incident conditions change.",
  },
  {
    question:
      "What is the main weakness of relying only on a numeric risk score?",
    choices: [
      "The score can hide uncertainty, weak evidence, different business contexts, and control-quality differences.",
      "Numbers can never be used in risk work.",
      "Scores are always too low.",
      "Scores automatically reveal root cause.",
    ],
    answer: 0,
    explanation:
      "Scores are useful summaries but should not replace evidence-linked reasoning.",
  },
  {
    question:
      "What is the purpose of the Defensive Risk Register?",
    choices: [
      "Connect evidence, risk reasoning, controls, residual risk, treatment, ownership, validation, and leadership priorities.",
      "List vulnerabilities without owners.",
      "Provide offensive test instructions.",
      "Replace all technical review.",
    ],
    answer: 0,
    explanation:
      "The register converts technical and operational evidence into accountable decisions.",
  },
];

const checklistItems = [
  "Every risk has a stable ID.",
  "Every risk links to supporting evidence.",
  "The risk condition is explicit.",
  "The plausible risk event is explicit.",
  "The affected service or process is clear.",
  "The business or defensive consequence is clear.",
  "Likelihood has a rationale.",
  "Impact has a rationale.",
  "Inherent risk is distinguished from residual risk.",
  "Existing controls are documented.",
  "Control effectiveness is evaluated.",
  "Control-evidence freshness is considered.",
  "Residual risk matches the control evidence.",
  "Treatment is explicit.",
  "Acceptance is an accountable decision, not inaction.",
  "Risk owner and action owner are identified.",
  "Due date or review window is defined.",
  "Validation evidence is defined.",
  "Review triggers are defined.",
  "No real system is tested, changed, accessed, or disrupted.",
];

const takeaways = [
  "Risk management translates technical conditions into decision-relevant consequences.",
  "Strong risk statements connect condition, event, affected asset or process, and consequence.",
  "Likelihood and impact should be reasoned separately.",
  "Inherent risk describes exposure before controls; residual risk describes what remains after controls.",
  "Control effectiveness matters more than simply listing a control.",
  "Risk acceptance is a formal accountable decision, not a synonym for doing nothing.",
  "Review triggers matter because architecture, identity, evidence, and business context can change before the next scheduled review.",
  "Numeric scores and colors are summaries, not substitutes for evidence and rationale.",
  "Risk owners make or sponsor risk decisions; action owners may carry out treatment work.",
  "The Defensive Risk Register becomes the seventh artifact in the A18 Advanced Defensive Casebook.",
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

export default function RiskRegisterCasePage() {
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
              A18.7
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Defensive Labs
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A18.7
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Risk Register Case
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A risk register should not be a spreadsheet full of red, yellow, and
            green boxes. It should explain what could happen, why it matters,
            what evidence supports the concern, which controls already reduce
            it, what remains, and who owns the decision.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson converts the fictional evidence from A18 into a
            professional defensive risk register. Every system, identity,
            finding, owner, and risk record remains synthetic.
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
          lessonTitle="Risk Register Case"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A18.7 Entry Readiness"
          items={[
            "I can distinguish an observed technical finding from the business risk created by that finding.",
            "I understand that likelihood, impact, control effectiveness, and residual risk are related but different.",
            "I can justify a treatment decision instead of choosing a response from a score alone.",
            "I will keep all risk analysis fictional, defensive, evidence-based, and non-operational.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Risk Is the Language Between Technical Evidence and Leadership Decisions"
        >
          <p className="leading-8">
            A security architect may say a monitoring collector is a
            concentration point. An identity reviewer may say an exception
            expired. A detection engineer may say alert noise increased. Those
            are findings. Risk work explains what those findings could mean for
            the organization and what decision is justified next.
          </p>

          <p className="mt-4 leading-8">
            The strongest risk register preserves the original evidence while
            translating it into consequences, priorities, ownership, treatment,
            and review.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              A useful risk record tells a decision-maker what matters, why it matters, what already reduces it, and who must decide what happens next.
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
          eyebrow="Risk Language"
          title="Twelve Terms That Keep Risk Reasoning Precise"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {riskVocabulary.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.term}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Risk Statements"
          title="Turn Findings Into Decision-Relevant Risk"
        >
          <div className="grid gap-5">
            {strongRiskStatements.map((item) => (
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
          eyebrow="Likelihood"
          title="Estimate Plausibility From Evidence, Not Mood"
        >
          <p className="leading-8">
            Likelihood is not a prediction of the future. It is a reasoned
            estimate based on the fictional evidence available today. The same
            condition can receive a different likelihood when exposure,
            frequency, controls, or architecture change.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {likelihoodFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.factor}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.question}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Impact"
          title="Impact Is About Consequence, Not Technical Drama"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {impactFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.factor}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.question}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Controls"
          title="Existing Safeguards Change the Risk Story"
        >
          <p className="leading-8">
            Listing a control is not enough. Reviewers need to know what the
            control is meant to do, whether it is current, whether it is
            working, and what evidence supports that conclusion.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {controlTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.type}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
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
          eyebrow="Treatment"
          title="Risk Responses Are Governance Decisions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {treatmentOptions.map((item) => (
              <article
                key={item.treatment}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.treatment}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  Use when: {item.use}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Case Register"
          title="Northbridge Synthetic Risk Records"
        >
          <div className="grid gap-5">
            {northbridgeRisks.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    Residual: {item.residual}
                  </span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-100">
                    {item.treatment}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.statement}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Evidence", item.evidence],
                    ["Inherent risk", item.inherent],
                    ["Existing controls", item.controls],
                    ["Control effectiveness", item.effectiveness],
                    ["Residual risk", item.residual],
                    ["Owner", item.owner],
                    ["Due / review", item.due],
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
          title="Northbridge Defensive Risk Dashboard"
          subtitle="Fictional risk records, residual exposure, ownership, and safety posture"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="High Residual Risk Requires Current Decision"
          severity="High"
          time="10:16"
          source="Fictional Risk Review Queue"
          details="RSK-1802 remains High residual risk because a temporary privileged-role exception expired while the dual-role assignment still appears active. Enhanced logging remains available, but the approval boundary is no longer current."
          recommendation="Escalate to the accountable identity governance owner and either restore the approved role model or establish a new explicit, time-bounded exception with current justification."
        />

        <FakeLogPanel
          title="Northbridge Fictional Risk Review Log"
          logs={logPreview}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Recovery Risk"
          question="What is the strongest risk interpretation when daily backups exist but recovery validation is thirteen months old?"
          evidence={[
            "Daily fictional backup jobs complete successfully.",
            "Backup-job health is monitored.",
            "The last recovery validation is thirteen months old.",
            "No current recovery failure is shown.",
            "The data service is operationally important.",
          ]}
          options={[
            "Backups reduce the risk, but stale recovery validation leaves moderate residual uncertainty about restoration capability.",
            "The backups are definitely unusable.",
            "Recovery risk is zero because backup jobs succeed.",
            "The service has already failed.",
          ]}
          bestAnswer={0}
          explanation="Existing backups are meaningful controls, but stale recovery validation prevents reviewers from assuming full recovery confidence."
        />

        <Section
          eyebrow="Scoring Cautions"
          title="Why Risk Scores Need Narrative Context"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {scoreCautions.map((item) => (
              <article
                key={item.caution}
                className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5"
              >
                <p className="font-black text-red-50">{item.caution}</p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Better practice: {item.better}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Risk Register Structure"
          title="What a Professional Defensive Risk Record Contains"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {registerFields.map((item) => (
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
          title="Scenario Decision Lab 1 — Backups Without Current Restore Evidence"
          scenario="A fictional critical data service has healthy daily backup jobs, but the most recent documented recovery validation is thirteen months old."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Expired Privileged Exception"
          scenario="A fictional dual-role privileged exception expired three days ago, but the user still appears to hold both roles. Enhanced logging remains enabled and no misuse evidence is present."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Defensive Risk Register"
        >
          <p className="leading-8">
            Turn mixed fictional findings into an accountable risk register that
            preserves evidence and makes treatment decisions understandable.
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
              Use fictional findings, assets, services, identities, controls,
              owners, and consequences only. Do not validate risk by probing,
              scanning, exploiting, changing, or disrupting any real system. The
              exercise is evidence-based risk analysis and governance.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Expired Exception Risk"
          question="Why does RSK-1802 remain elevated even though enhanced logging is enabled?"
          evidence={[
            "The dual-role access was approved only through a time-bounded exception.",
            "The exception expired three days ago.",
            "The role assignment still appears active.",
            "Enhanced logging remains enabled.",
            "No misuse evidence is present.",
          ]}
          options={[
            "Logging is a useful detective control, but it does not replace current authorization or separation-of-duties governance.",
            "Logging makes expired approval irrelevant.",
            "The access is automatically malicious.",
            "The risk should be removed because no misuse was observed.",
          ]}
          bestAnswer={0}
          explanation="Detective evidence can reduce uncertainty about use, but it does not make an expired authorization boundary current."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Build a Top-Five Leadership Risk View"
        >
          <p className="leading-8">
            Select five fictional risks from the A18 case portfolio and prepare
            a leadership view that explains why each one deserves attention,
            what is already reducing it, what decision is needed, and what would
            change its priority.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Risk ID",
              "Short risk title",
              "Evidence source",
              "Business consequence",
              "Likelihood rationale",
              "Impact rationale",
              "Existing controls",
              "Control effectiveness",
              "Residual risk",
              "Treatment decision",
              "Risk owner",
              "Action owner",
              "Due date",
              "Review trigger",
              "Decision requested from leadership",
              "What would lower the risk",
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
            The strongest leadership view should help someone make a decision
            without requiring them to read every technical finding first.
          </p>
        </Section>

        <DefenderChecklist
          title="A18.7 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A18.7 Mini Quiz: Risk Register Case"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Defensive Risk Register"
          prompt="Create the seventh artifact for your A18 Advanced Defensive Casebook: a fictional Defensive Risk Register. Include risk IDs, evidence references, condition-event-consequence statements, inherent likelihood and impact, existing controls, control effectiveness, residual risk, treatment, risk owner, action owner, due date or review window, validation evidence, review triggers, status, a top-five leadership priority view, and a one-page executive risk summary."
          tips={[
            "Keep risk statements tied to actual evidence.",
            "Do not let a score replace the likelihood and impact rationale.",
            "Separate inherent risk from residual risk.",
            "Evaluate whether controls are actually current and effective.",
            "Use explicit treatment and ownership.",
            "Keep every risk and system fictional.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A18.8?"
        >
          <p className="leading-8">
            A18.8 moves into a Forensics Timeline Case. Before continuing, make
            sure you can translate technical findings into risk without losing
            the evidence, uncertainty, control context, or ownership that makes
            the risk defensible.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can write a condition-event-consequence risk statement.",
              "I can distinguish inherent risk from residual risk.",
              "I can rate control effectiveness rather than merely listing controls.",
              "I can justify treatment, ownership, due dates, validation, and review triggers.",
              "I can explain risk to leadership without relying only on colors or numeric scores.",
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
          title="How to Make the Risk Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Write complete risk statements",
                detail:
                  "A reviewer should understand the condition, plausible event, affected function, and consequence without guessing.",
              },
              {
                title: "Link every risk to evidence",
                detail:
                  "Risk reasoning becomes stronger when the original architecture, cloud, identity, detection, or recovery evidence remains traceable.",
              },
              {
                title: "Show control quality",
                detail:
                  "Do not treat a named control as effective unless current evidence supports that conclusion.",
              },
              {
                title: "Keep residual risk explainable",
                detail:
                  "A reviewer should see why risk became lower—or stayed high—after controls were considered.",
              },
              {
                title: "Make acceptance explicit",
                detail:
                  "Accepted risk needs a responsible owner and review basis.",
              },
              {
                title: "Use triggers, not dates alone",
                detail:
                  "Architecture changes, ownership changes, incidents, or failed controls may require earlier review.",
              },
              {
                title: "Create a leadership layer",
                detail:
                  "Summarize the highest-priority risks and decisions without deleting the detailed evidence underneath.",
              },
              {
                title: "Connect forward",
                detail:
                  "A18.8 will use the same evidence discipline to reconstruct a fictional event timeline.",
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
            A18.7 stays fictional, defensive, evidence-based, and non-operational
          </h2>
          <p className="mt-3 leading-7">
            Do not test, scan, probe, exploit, access, disrupt, or change real
            systems to validate a risk. Use only synthetic evidence and
            fictional assets, identities, controls, services, owners, and
            consequences. This lesson is about risk reasoning, treatment,
            governance, ownership, and communication.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A18.7 Risk Register Case Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a defensible risk-management model that connects
            evidence, condition, consequence, likelihood, impact, controls,
            residual risk, treatment, ownership, validation, and leadership
            priorities. Next, A18.8 moves into a Forensics Timeline Case.
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