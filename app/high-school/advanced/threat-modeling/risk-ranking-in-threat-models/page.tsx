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
const modulePath = `${trackPath}/threat-modeling`;
const previousLesson = `${modulePath}/threat-categories-conceptually`;
const nextLesson = `${modulePath}/choosing-mitigations`;

const objectives = [
  "Explain fictional risk ranking as a structured decision process that compares evidence, impact, likelihood, exposure, control strength, uncertainty, mission context, and recovery—not as an objective prediction.",
  "Define consistent fictional ranking scales and criteria for impact, likelihood, exposure, control effectiveness, confidence, uncertainty, and residual risk.",
  "Evaluate fictional threat scenarios without confusing threat category, possibility, severity, actor intent, exploitability, or missing evidence.",
  "Document fictional ranking rationale, evidence, assumptions, unknowns, disagreements, owners, review triggers, and confidence so that priorities remain explainable and revisable.",
  "Create a portfolio-ready fictional threat-risk register that remains ethical, defensive, non-operational, privacy-safe, evidence-aware, and completely invented.",
];

const vocabulary = [
  [
    "Risk ranking",
    "A structured fictional comparison of threat scenarios using defined criteria so owners can decide what requires attention first.",
  ],
  [
    "Impact",
    "The fictional degree of harm to mission, people, data, identity, privacy, service, evidence, safety, recovery, trust, or organizational responsibility if a scenario occurs.",
  ],
  [
    "Likelihood",
    "A reasoned fictional estimate of how plausible a scenario is under current assumptions, exposure, actor opportunity, control state, history, and evidence.",
  ],
  [
    "Exposure",
    "The fictional degree to which an asset, actor relationship, entry point, flow, boundary, dependency, or capability is reachable, shared, privileged, externally dependent, or difficult to observe.",
  ],
  [
    "Control strength",
    "The fictional degree to which safeguards are appropriately designed, implemented, operating, monitored, reviewed, and able to fail safely.",
  ],
  [
    "Control coverage",
    "The fictional extent to which prevention, detection, response, recovery, privacy, governance, communication, and source-health controls address a scenario.",
  ],
  [
    "Uncertainty",
    "The fictional degree to which missing evidence, stale records, assumptions, conflicting sources, unknown ownership, or incomplete scope limits confidence.",
  ],
  [
    "Confidence",
    "A documented fictional judgment about how strongly the available evidence supports the ranking.",
  ],
  [
    "Inherent risk",
    "A fictional view of risk before considering the expected effect of current controls.",
  ],
  [
    "Residual risk",
    "A fictional view of the risk that remains after considering current controls, limitations, dependencies, uncertainty, and recovery.",
  ],
  [
    "Risk owner",
    "The fictional role authorized to decide whether residual risk is accepted, reduced, transferred, avoided, monitored, or escalated.",
  ],
  [
    "Scenario owner",
    "The fictional role responsible for validating the threat scenario, maintaining evidence, coordinating mitigations, and reviewing changes.",
  ],
  [
    "Risk criterion",
    "A defined fictional factor used consistently across scenarios, such as impact, likelihood, exposure, control strength, uncertainty, recovery, or mission dependence.",
  ],
  [
    "Ordinal scale",
    "A fictional ordered set of labels such as Low, Moderate, High, and Very High where the order matters more than exact numerical distance.",
  ],
  [
    "False precision",
    "Presenting fictional scores or percentages as more exact, objective, or predictive than the evidence supports.",
  ],
  [
    "Risk matrix",
    "A fictional comparison tool that combines defined impact and likelihood bands while preserving evidence, uncertainty, and context.",
  ],
  [
    "Risk appetite",
    "A fictional organization's general willingness to accept different kinds and levels of risk while pursuing its mission.",
  ],
  [
    "Risk tolerance",
    "A fictional boundary around how much variation, delay, exposure, uncertainty, or residual harm is acceptable for a specific objective.",
  ],
  [
    "Priority",
    "The fictional order in which scenarios should receive owner attention, evidence collection, mitigation, monitoring, or review.",
  ],
  [
    "Urgency",
    "The fictional time sensitivity of a decision based on exposure, active change, control gap, dependency, deadline, or possible impact.",
  ],
  [
    "Velocity",
    "The fictional speed at which harm could develop after a scenario begins.",
  ],
  [
    "Recoverability",
    "The fictional ability to restore correct technical and business state, authority, evidence, communication, and trust within acceptable time.",
  ],
  [
    "Risk rationale",
    "The fictional explanation that connects scenario, criteria, evidence, assumptions, controls, uncertainty, owners, and the resulting priority.",
  ],
  [
    "Risk review trigger",
    "A fictional change or event that requires the ranking to be reconsidered, such as a new supplier, control change, incident lesson, evidence gap, ownership change, or recovery result.",
  ],
];

const rankingPrinciples = [
  {
    principle: "Rank scenarios, not vague topics",
    description:
      "Evaluate a specific fictional actor–action–asset–condition–outcome scenario rather than assigning one score to an entire system, role, supplier, or category.",
    strongPractice:
      "Rank “delayed supplier results update stale case state when reconciliation is incomplete,” not “supplier risk.”",
    failure:
      "Vague objects hide different impacts, controls, owners, evidence, and recovery needs.",
  },
  {
    principle: "Define scales before scoring",
    description:
      "Publish fictional criteria and examples for every impact, likelihood, exposure, control, uncertainty, and confidence band.",
    strongPractice:
      "Reviewers use the same definitions and record why a scenario fits a band.",
    failure:
      "Teams may use the same label to mean very different things.",
  },
  {
    principle: "Use evidence and preserve limits",
    description:
      "Connect each fictional rating to supplied records, owner decisions, diagrams, exercises, events, tickets, reviews, and source-health information.",
    strongPractice:
      "State what evidence supports, what it does not prove, and when it was reviewed.",
    failure:
      "Plausibility, familiarity, fear, or confidence can replace evidence.",
  },
  {
    principle: "Separate category from severity",
    description:
      "Identity, privacy, integrity, availability, governance, or resilience labels describe concern type—not importance.",
    strongPractice:
      "Apply the same risk criteria across all relevant category families.",
    failure:
      "Teams may automatically over-rank some categories and under-rank others.",
  },
  {
    principle: "Separate likelihood from impact",
    description:
      "A highly harmful fictional outcome may be unlikely, while a frequent condition may have limited impact.",
    strongPractice:
      "Score and explain both dimensions independently before combining them.",
    failure:
      "One dramatic consequence can dominate the entire ranking.",
  },
  {
    principle: "Include control effectiveness",
    description:
      "Consider whether fictional controls are designed, implemented, operating, monitored, reviewed, and resilient.",
    strongPractice:
      "Record control evidence and limitations rather than assuming a listed control works.",
    failure:
      "A control inventory can create false confidence.",
  },
  {
    principle: "Treat uncertainty as information",
    description:
      "Missing ownership, incomplete fields, stale reviews, conflicting sources, or unhealthy evidence should affect confidence and follow-up.",
    strongPractice:
      "Record uncertainty separately and assign an evidence owner.",
    failure:
      "Unknowns are silently converted into low or high risk without explanation.",
  },
  {
    principle: "Consider mission and human context",
    description:
      "Evaluate fictional user, service, privacy, safety, fairness, communication, recovery, and trust outcomes—not only technical effects.",
    strongPractice:
      "Use mission owners and affected-user perspectives in impact review.",
    failure:
      "Technical availability may be treated as success while business or human state remains unsafe.",
  },
  {
    principle: "Document disagreement",
    description:
      "Preserve fictional differences between security, privacy, operations, data, supplier, recovery, support, and mission owners.",
    strongPractice:
      "Record each rationale, evidence, uncertainty, and final decision owner.",
    failure:
      "A forced consensus can hide meaningful assumptions and tradeoffs.",
  },
  {
    principle: "Review rankings when context changes",
    description:
      "Update fictional priorities when assets, actors, interfaces, flows, suppliers, controls, automation, evidence, recovery, or ownership changes.",
    strongPractice:
      "Use dates, triggers, versions, and named owners.",
    failure:
      "A once-useful score can become a stale source of false confidence.",
  },
];

const impactDimensions = [
  {
    dimension: "Mission and service outcome",
    low:
      "Minor fictional inconvenience with a supported workaround and no meaningful interruption to the service objective.",
    moderate:
      "Noticeable delay or reduced quality affecting a limited group or workflow.",
    high:
      "Major disruption, incorrect decision, or loss of a critical service outcome.",
    veryHigh:
      "Severe fictional failure of an essential mission, widespread service, or high-consequence decision process.",
    evidence:
      "Service objectives, business-impact notes, user journeys, support themes, leadership decisions, and recovery exercises.",
  },
  {
    dimension: "Data and integrity",
    low:
      "Small, easily corrected fictional record issue with strong detection and reconciliation.",
    moderate:
      "Limited incorrect, missing, delayed, duplicated, or stale data requiring owner review.",
    high:
      "Significant fictional workflow, decision, evidence, or record integrity impact across multiple users or services.",
    veryHigh:
      "Widespread or difficult-to-recover fictional corruption of critical data, decisions, evidence, or business state.",
    evidence:
      "Validation results, reconciliation, event order, change history, duplicate handling, source health, and data-owner review.",
  },
  {
    dimension: "Confidentiality and privacy",
    low:
      "Minimal fictional exposure of low-sensitivity information to a narrowly limited audience with rapid correction.",
    moderate:
      "Limited disclosure, over-collection, inappropriate purpose, or retention involving sensitive context.",
    high:
      "Substantial fictional exposure, misuse, inference, audience expansion, or retention affecting important personal or organizational data.",
    veryHigh:
      "Widespread, highly sensitive, or difficult-to-remediate fictional privacy or confidentiality harm.",
    evidence:
      "Data classification, field inventory, approved purpose, audience, sharing records, access, retention, deletion, and privacy review.",
  },
  {
    dimension: "Identity and authority",
    low:
      "Narrow fictional authority issue with limited action scope and strong review.",
    moderate:
      "Role, assignment, object, approval, or lifecycle weakness affecting a limited set of actions.",
    high:
      "Broad or privileged fictional authority that can affect sensitive assets, users, configuration, workflow, or recovery.",
    veryHigh:
      "Concentrated fictional authority across critical identity, data, service, evidence, and recovery assets with weak separation or review.",
    evidence:
      "Role maps, object checks, approvals, access reviews, administrative events, lifecycle, and emergency-access records.",
  },
  {
    dimension: "Availability and dependency",
    low:
      "Brief fictional delay with limited user effect and a tested alternate path.",
    moderate:
      "Service degradation or dependency failure affecting a defined workflow or group.",
    high:
      "Sustained fictional outage, hidden backlog, significant delay, or shared dependency failure affecting major services.",
    veryHigh:
      "Widespread fictional inability to provide essential service or recover within mission needs.",
    evidence:
      "Health, queues, capacity, service objectives, dependency maps, supplier records, support impact, and recovery exercises.",
  },
  {
    dimension: "Safety and human impact",
    low:
      "Minor fictional confusion or inconvenience with clear correction and no significant decision consequence.",
    moderate:
      "Meaningful delay, confusion, accessibility barrier, or decision-quality effect for some users.",
    high:
      "Serious fictional harm to service access, fairness, trusted decisions, communication, or vulnerable users.",
    veryHigh:
      "Severe fictional harm to people, essential support, safety, rights, or high-consequence decisions.",
    evidence:
      "User journeys, support records, complaints, communications, decision reviews, accessibility review, and mission-owner input.",
  },
  {
    dimension: "Evidence and accountability",
    low:
      "Limited fictional evidence gap with alternative reliable records and low decision impact.",
    moderate:
      "Missing context or source-health uncertainty that slows review or weakens confidence.",
    high:
      "Major fictional inability to attribute actions, validate state, investigate, recover, or support required decisions.",
    veryHigh:
      "Widespread fictional loss of trustworthy evidence across critical identity, workflow, recovery, or governance decisions.",
    evidence:
      "Event schemas, source health, correlation, tickets, approvals, timestamps, retention, access, and review quality.",
  },
  {
    dimension: "Recovery and trust",
    low:
      "Fictional state can be restored quickly with tested evidence and little user impact.",
    moderate:
      "Recovery requires manual work, additional validation, or limited communication repair.",
    high:
      "Recovery is slow, dependent, uncertain, or likely to leave stale, duplicated, or incorrect business state.",
    veryHigh:
      "Fictional recovery cannot reliably restore critical service, authority, data, evidence, communication, or trust.",
    evidence:
      "Restore tests, dependency order, recovery identity, configuration baselines, reconciliation, communications, closure, and lessons learned.",
  },
];

const likelihoodFactors = [
  {
    factor: "Required preconditions",
    lower:
      "Many independent fictional conditions must align and current evidence shows strong barriers.",
    higher:
      "Few conditions are required, or one common workflow state may be enough.",
    evidence:
      "Abuse-case preconditions, control design, role scope, workflow state, supplier dependency, and review results.",
  },
  {
    factor: "Actor opportunity",
    lower:
      "Narrow fictional role, uncommon workflow, limited object set, short time window, and strong approval.",
    higher:
      "Broad role, frequent workflow, shared interface, long-lived access, or common service identity.",
    evidence:
      "Actor inventory, role map, assignment, frequency, lifecycle, interface use, and approval records.",
  },
  {
    factor: "Exposure",
    lower:
      "Limited fictional reachability, constrained interface, isolated environment, restricted audience, and strong ownership.",
    higher:
      "Public, shared, supplier-dependent, privileged, broadly reachable, or difficult-to-observe relationship.",
    evidence:
      "Entry-point inventory, trust boundaries, network zones, supplier relationships, user population, and interface ownership.",
  },
  {
    factor: "Control reliability",
    lower:
      "Fictional controls are specifically designed, operating, monitored, tested, reviewed, and fail safely.",
    higher:
      "Controls are missing, generic, untested, stale, inconsistently applied, or unsupported by evidence.",
    evidence:
      "Control requirements, test results, monitoring, reviews, exceptions, source health, and failure exercises.",
  },
  {
    factor: "Historical and exercise evidence",
    lower:
      "No similar fictional events in a relevant period, with healthy evidence and strong control review.",
    higher:
      "Repeated fictional tickets, exercises, failures, or near misses show similar conditions.",
    evidence:
      "Tickets, incident summaries, exercises, alert reviews, support patterns, and change history.",
  },
  {
    factor: "Change and complexity",
    lower:
      "Stable fictional design, limited dependencies, clear ownership, controlled release, and current documentation.",
    higher:
      "Recent change, multiple suppliers, complex state, many handoffs, temporary interfaces, or unclear ownership.",
    evidence:
      "Change requests, architecture versions, dependency maps, owner records, release evidence, and temporary-access records.",
  },
  {
    factor: "Detectability before harm",
    lower:
      "Fictional evidence reliably identifies unsafe state early enough for intervention.",
    higher:
      "Evidence is delayed, ambiguous, unhealthy, incomplete, or available only after business impact.",
    evidence:
      "Event meaning, source health, alert thresholds, correlation, dashboard review, and response timing.",
  },
  {
    factor: "Recovery difficulty",
    lower:
      "Fictional restoration and reconciliation are tested, timely, and supported by trusted evidence.",
    higher:
      "Recovery depends on stale identities, uncertain state, manual repair, supplier coordination, or incomplete reconciliation.",
    evidence:
      "Recovery tests, dependency order, identity records, reconciliation, communication, and closure review.",
  },
];

const controlAssessment = [
  {
    level: "Not demonstrated",
    description:
      "The fictional control may be proposed, assumed, undocumented, unowned, or unsupported by evidence.",
    evidence:
      "No current design decision, implementation evidence, operating result, monitoring, test, or owner confirmation.",
    rankingEffect:
      "Do not count the control as reducing residual risk. Increase uncertainty and assign an evidence owner.",
  },
  {
    level: "Designed",
    description:
      "The fictional control has a documented purpose, owner, scope, and expected behavior.",
    evidence:
      "Design record, policy, architecture decision, role definition, workflow, or requirement.",
    rankingEffect:
      "Recognize design intent but do not assume implementation or operating effectiveness.",
  },
  {
    level: "Implemented",
    description:
      "The fictional control is represented in configuration, workflow, process, or deployed design evidence.",
    evidence:
      "Approved configuration summary, workflow record, deployment evidence, role mapping, or interface decision.",
    rankingEffect:
      "Consider partial risk reduction while preserving uncertainty about actual operation.",
  },
  {
    level: "Operating",
    description:
      "The fictional control produces expected outcomes and evidence under normal and relevant failure conditions.",
    evidence:
      "Event output, test result, review sample, source health, ticket analysis, or exercise outcome.",
    rankingEffect:
      "Consider stronger reduction when evidence is current, relevant, and complete.",
  },
  {
    level: "Monitored and reviewed",
    description:
      "The fictional control has health, ownership, exception, performance, failure, and review evidence.",
    evidence:
      "Metrics, source-health dashboard, access review, control test, exception log, and owner sign-off.",
    rankingEffect:
      "Use the strongest justified reduction while documenting limitations, dependencies, and residual risk.",
  },
  {
    level: "Resilient and recoverable",
    description:
      "The fictional control continues or fails safely during disruption and supports recovery and reconciliation.",
    evidence:
      "Failure test, alternate path, recovery exercise, integrity validation, communication, and closure review.",
    rankingEffect:
      "Account for reduced impact or likelihood only where recovery evidence supports the claim.",
  },
];

const uncertaintyLevels = [
  {
    level: "Low uncertainty",
    meaning:
      "Fictional scope, owners, evidence, control state, affected assets, and scenario conditions are current and consistent.",
    action:
      "Proceed with ranking while retaining normal review triggers.",
  },
  {
    level: "Moderate uncertainty",
    meaning:
      "Some fictional assumptions, evidence sources, owner decisions, or control details remain incomplete but the central scenario is understandable.",
    action:
      "Rank with caution, document confidence, and assign targeted evidence actions.",
  },
  {
    level: "High uncertainty",
    meaning:
      "Important fictional ownership, exposure, data, identity, control, event, source-health, or recovery information is missing or conflicting.",
    action:
      "Avoid false precision, consider a provisional priority, and escalate evidence collection.",
  },
  {
    level: "Decision-blocking uncertainty",
    meaning:
      "The fictional scenario, affected assets, current state, control state, or business context is too unclear for a responsible ranking.",
    action:
      "Pause final ranking, preserve the concern, assign owners, and define the evidence needed to continue.",
  },
];

const riskBands = [
  {
    band: "Low",
    description:
      "The fictional scenario has limited impact and likelihood, strong controls, high recoverability, and low uncertainty.",
    response:
      "Maintain controls, document rationale, monitor changes, and review on schedule.",
    warning:
      "Low does not mean impossible or irrelevant; it means lower priority under current evidence and criteria.",
  },
  {
    band: "Moderate",
    description:
      "The fictional scenario has meaningful but bounded impact or likelihood, partial control coverage, manageable recovery, or moderate uncertainty.",
    response:
      "Assign an owner, plan proportionate improvement, collect missing evidence, and monitor review triggers.",
    warning:
      "Moderate scenarios can become urgent when context, exposure, control state, or dependencies change.",
  },
  {
    band: "High",
    description:
      "The fictional scenario can significantly affect mission, people, privacy, integrity, service, evidence, authority, or recovery and has credible conditions or weak control coverage.",
    response:
      "Prioritize owner review, evidence validation, mitigation planning, monitoring, recovery preparation, and leadership visibility.",
    warning:
      "High is not proof that harm will occur; it is a decision priority supported by defined criteria.",
  },
  {
    band: "Very High",
    description:
      "The fictional scenario combines severe impact, credible conditions, broad exposure, weak controls, difficult recovery, concentrated dependency, or major uncertainty requiring immediate owner attention.",
    response:
      "Escalate to authorized leadership and owners, define near-term protective action, preserve evidence, and review residual risk frequently.",
    warning:
      "Very High should be rare, evidence-aware, and justified—not used as a dramatic label.",
  },
];

const rankingWorkflow = [
  {
    step: "1",
    title: "Confirm the scenario",
    action:
      "Use one fictional abuse case with defined actor context, assets, preconditions, capability, outcome, evidence, controls, owners, and state.",
    output:
      "Stable scenario identifier and decision statement.",
    quality:
      "The scenario is specific enough that different reviewers are ranking the same thing.",
  },
  {
    step: "2",
    title: "Verify scope and category",
    action:
      "Confirm current or future state, affected environment, trust boundary, primary category, meaningful secondary categories, and exclusions.",
    output:
      "Scope and category record.",
    quality:
      "Category labels organize the scenario but do not determine severity.",
  },
  {
    step: "3",
    title: "Rate impact dimensions",
    action:
      "Review mission, data, privacy, identity, availability, safety, evidence, recovery, and trust impacts.",
    output:
      "Impact table with rationale, evidence, owner input, and strongest dimension.",
    quality:
      "Impact is bounded and does not rely on catastrophic language.",
  },
  {
    step: "4",
    title: "Rate likelihood factors",
    action:
      "Review preconditions, opportunity, exposure, control reliability, history, change, detectability, and recovery difficulty.",
    output:
      "Likelihood table with evidence and assumptions.",
    quality:
      "Likelihood is not inferred from impact or category.",
  },
  {
    step: "5",
    title: "Assess control strength",
    action:
      "Determine whether each fictional control is merely proposed, designed, implemented, operating, monitored, reviewed, and resilient.",
    output:
      "Control-evidence matrix with limitations and owners.",
    quality:
      "A listed control is not counted as effective without supporting evidence.",
  },
  {
    step: "6",
    title: "Record uncertainty and confidence",
    action:
      "Identify missing ownership, stale records, conflicting evidence, source-health gaps, incomplete scope, or untested recovery.",
    output:
      "Uncertainty level, confidence statement, and evidence action list.",
    quality:
      "Unknowns remain visible rather than being converted into a score.",
  },
  {
    step: "7",
    title: "Assign inherent and residual bands",
    action:
      "Use defined fictional criteria to compare risk before and after control evidence.",
    output:
      "Inherent band, residual band, rationale, and disagreement record.",
    quality:
      "The result explains how controls and uncertainty changed the decision.",
  },
  {
    step: "8",
    title: "Set priority and urgency",
    action:
      "Consider mission deadlines, active change, exposure, dependencies, review dates, recovery, and owner capacity.",
    output:
      "Priority order, urgency, owner, and next decision date.",
    quality:
      "Priority is not based only on the final band.",
  },
  {
    step: "9",
    title: "Choose the decision path",
    action:
      "Decide whether to reduce, avoid, transfer, accept, monitor, gather evidence, or escalate the fictional risk.",
    output:
      "Risk treatment decision and residual-risk owner.",
    quality:
      "The decision is authorized and tied to specific conditions and evidence.",
  },
  {
    step: "10",
    title: "Maintain the ranking",
    action:
      "Set review triggers for changes in assets, identity, flows, suppliers, controls, evidence, incidents, recovery, ownership, or mission.",
    output:
      "Version, review date, triggers, history, and retirement criteria.",
    quality:
      "The ranking can be revised when context changes.",
  },
];

const rankingExamples = [
  {
    scenario:
      "Fictional supplier result updates stale case state after a queue delay.",
    impact:
      "High integrity and service impact because incorrect case status can affect decisions, communication, duplicate action, and trust.",
    likelihood:
      "Moderate because a similar delay occurred in a fictional exercise, but final production behavior and current controls remain uncertain.",
    controls:
      "Schema validation is designed; source-health reporting operates; state reconciliation and duplicate handling are not fully evidenced.",
    uncertainty:
      "Moderate to high because queue-health meaning, ordering, reconciliation, and current owner evidence are incomplete.",
    inherent:
      "High",
    residual:
      "High",
    rationale:
      "Existing evidence does not justify enough reduction. The scenario deserves priority owner review and mitigation planning.",
  },
  {
    scenario:
      "Fictional free-text support note may be sent to the processing supplier.",
    impact:
      "Moderate to high privacy and confidentiality impact depending on content, population, access, retention, and purpose.",
    likelihood:
      "Unclear because the field inventory shows the field exists but does not prove it is populated in current requests.",
    controls:
      "Data minimization is expected, but owner approval, field validation, supplier retention, and evidence are incomplete.",
    uncertainty:
      "High",
    inherent:
      "High",
    residual:
      "Provisional Moderate or High pending evidence",
    rationale:
      "Final ranking should remain provisional because current use and control state are not sufficiently established.",
  },
  {
    scenario:
      "Fictional archival service identity has no confirmed owner and an expired review.",
    impact:
      "Potentially high identity, governance, retention, recovery, and evidence impact because the service may affect archival state.",
    likelihood:
      "Moderate based on current active status and lifecycle gap, but misuse or excessive permission is not proven.",
    controls:
      "Service identity exists and activity may be logged, but ownership, access review, permission scope, and retirement are not confirmed.",
    uncertainty:
      "High",
    inherent:
      "High",
    residual:
      "High provisional",
    rationale:
      "Ownership and authority evidence are needed before a more precise residual ranking.",
  },
  {
    scenario:
      "Fictional notification-change tickets lack reason and user-confirmation fields.",
    impact:
      "Moderate because incorrect preferences can affect privacy, communication, workflow, user trust, and support effort.",
    likelihood:
      "Moderate because multiple fictional tickets show the evidence gap, but authorization or harmful outcomes are not proven.",
    controls:
      "Support role and tickets exist; verification, confirmation, event correlation, and review coverage are incomplete.",
    uncertainty:
      "Moderate",
    inherent:
      "Moderate",
    residual:
      "Moderate",
    rationale:
      "The scenario warrants workflow and evidence improvement but does not justify an extreme rating.",
  },
  {
    scenario:
      "Fictional recovery restores application service before notification and archival dependencies are validated.",
    impact:
      "High resilience, integrity, availability, safety, and trust impact because technical availability can return with incorrect business state.",
    likelihood:
      "Moderate because the condition occurred in one fictional exercise and dependencies remain complex.",
    controls:
      "Recovery plan and backups exist, but ordering, identity validation, reconciliation, communication, and closure evidence are incomplete.",
    uncertainty:
      "Moderate",
    inherent:
      "High",
    residual:
      "High",
    rationale:
      "Recovery evidence supports a meaningful priority even though future frequency is unknown.",
  },
  {
    scenario:
      "Fictional future analytics process may combine portal, support, supplier, and notification events.",
    impact:
      "Potentially high privacy, confidentiality, governance, accountability, and interpretation impact.",
    likelihood:
      "Not yet applicable as current exposure because the process is proposed future state.",
    controls:
      "Purpose, fields, audience, retention, access, owner, review, and safeguards are not yet approved.",
    uncertainty:
      "Decision-blocking for current-state risk ranking.",
    inherent:
      "Future-state High potential",
    residual:
      "Not yet assigned",
    rationale:
      "Treat as a design decision and pre-implementation requirement, not as a current incident or deployed risk.",
  },
];

const evidenceMatrix = [
  {
    id: "RR-01",
    source: "Fictional queue-health dashboard",
    observation:
      "Processing-result events were delayed for twenty-two minutes while the source-health indicator remained Green.",
    supports:
      "Availability, integrity, accountability, dependency, and resilience criteria require review.",
    limits:
      "The dashboard does not prove data loss, malicious activity, incorrect final state, or future frequency.",
    rankingUse:
      "Increase evidence attention and uncertainty; do not automatically assign Very High severity.",
  },
  {
    id: "RR-02",
    source: "Fictional support-ticket pattern",
    observation:
      "Users submitted duplicate records after delayed status notifications.",
    supports:
      "User, workflow, service, support, integrity, and communication impact may be meaningful.",
    limits:
      "The pattern does not prove one cause or that every duplicate produced the same impact.",
    rankingUse:
      "Use as bounded impact evidence and preserve causal uncertainty.",
  },
  {
    id: "RR-03",
    source: "Fictional supplier-field inventory",
    observation:
      "The processing request may include a free-text support note.",
    supports:
      "Privacy and confidentiality impact could be meaningful if the field is populated, unnecessary, retained, or broadly accessed.",
    limits:
      "Current population, purpose, access, retention, and approval are not established.",
    rankingUse:
      "Treat residual ranking as provisional and assign evidence actions.",
  },
  {
    id: "RR-04",
    source: "Fictional service-identity review",
    observation:
      "An archival service identity is active, lacks a confirmed owner, and is past its review date.",
    supports:
      "Exposure, governance, identity, authority, retention, and recovery uncertainty are elevated.",
    limits:
      "The record does not prove compromise, misuse, broad permission, or harmful activity.",
    rankingUse:
      "Increase uncertainty and owner urgency without claiming an incident.",
  },
  {
    id: "RR-05",
    source: "Fictional recovery exercise",
    observation:
      "Application service returned before notification and archival dependencies were validated, producing stale messages and repeated tasks.",
    supports:
      "High potential impact and credible recovery complexity are supported by exercise evidence.",
    limits:
      "One exercise does not establish production frequency or prove all current controls are ineffective.",
    rankingUse:
      "Support a meaningful resilience priority while preserving likelihood uncertainty.",
  },
  {
    id: "RR-06",
    source: "Fictional notification-ticket review",
    observation:
      "Several preference changes lack a recorded reason and user confirmation.",
    supports:
      "Accountability and workflow evidence are incomplete across multiple records.",
    limits:
      "The evidence does not prove unauthorized action, incorrect preference, intent, or user harm.",
    rankingUse:
      "Support a Moderate evidence and process priority rather than a dramatic rating.",
  },
  {
    id: "RR-07",
    source: "Fictional analytics proposal",
    observation:
      "A proposed process may combine several event sources, but purpose, fields, audience, retention, and ownership remain unresolved.",
    supports:
      "Potential future privacy, confidentiality, governance, and interpretation impact requires design review.",
    limits:
      "The proposal is not proof of current collection, use, exposure, or control failure.",
    rankingUse:
      "Record future-state potential and block final current-state ranking.",
  },
  {
    id: "RR-08",
    source: "Fictional temporary-interface inventory",
    observation:
      "A migration-import channel remains documented as enabled without confirmed current purpose, owner, activity, or retirement.",
    supports:
      "Exposure, ownership, lifecycle, identity, evidence, and dependency uncertainty are meaningful.",
    limits:
      "The inventory does not prove reachability, use, unsafe configuration, or malicious activity.",
    rankingUse:
      "Assign a governance and evidence priority while avoiding unsupported severity.",
  },
];

const commonMistakes = [
  {
    mistake: "Using category as severity",
    why:
      "A privacy, identity, supplier, or availability label does not determine importance.",
    correction:
      "Apply the same fictional impact, likelihood, exposure, control, uncertainty, mission, and recovery criteria across scenarios.",
  },
  {
    mistake: "Multiplying numbers without explaining them",
    why:
      "A mathematical-looking score can hide subjective definitions and false precision.",
    correction:
      "Publish criteria, show rationale, preserve evidence, and use numbers only as a support—not a substitute—for judgment.",
  },
  {
    mistake: "Letting impact determine likelihood",
    why:
      "A severe outcome may be rare, while a common condition may be low impact.",
    correction:
      "Rate impact and likelihood independently before combining them.",
  },
  {
    mistake: "Treating missing evidence as Low",
    why:
      "Unknown control state, ownership, exposure, or event history does not prove low risk.",
    correction:
      "Record uncertainty separately and assign an evidence action.",
  },
  {
    mistake: "Treating missing evidence as automatically Very High",
    why:
      "Uncertainty can justify urgency and caution, but it does not prove severe impact or likely occurrence.",
    correction:
      "Use provisional ratings, confidence statements, and decision-blocking labels when needed.",
  },
  {
    mistake: "Assuming listed controls are effective",
    why:
      "A policy, tool, dashboard, or design record may not prove implementation, operation, review, or resilience.",
    correction:
      "Assess control design, implementation, operation, monitoring, review, failure, and recovery evidence.",
  },
  {
    mistake: "Ranking the entire system",
    why:
      "One overall score hides different assets, scenarios, owners, controls, evidence, and priorities.",
    correction:
      "Rank specific fictional scenarios and aggregate only for communication with clear limits.",
  },
  {
    mistake: "Ignoring user and mission impact",
    why:
      "Technical measures may overlook service access, fairness, communication, privacy, trust, or decision consequences.",
    correction:
      "Include mission and affected-user perspectives in impact review.",
  },
  {
    mistake: "Hiding disagreement",
    why:
      "Different fictional owners may reasonably interpret evidence and impact differently.",
    correction:
      "Record viewpoints, assumptions, evidence, uncertainty, and the authorized final decision.",
  },
  {
    mistake: "Using real risk registers",
    why:
      "Real scenarios, controls, owners, suppliers, systems, incidents, recovery details, and priorities can be sensitive.",
    correction:
      "Invent every organization, asset, actor, scenario, score, record, control, owner, date, decision, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Publish the ranking method",
    action:
      "Define fictional impact, likelihood, exposure, control strength, uncertainty, confidence, inherent risk, residual risk, and review bands before rating scenarios.",
    output:
      "A ranking guide with clear criteria and examples.",
    quality:
      "Two reviewers can explain the same bands even if they reach different evidence-based judgments.",
  },
  {
    step: "2",
    title: "Select scenario-ready cases",
    action:
      "Choose fictional abuse cases with stable scope, assets, owners, evidence, controls, category, and current or future-state labels.",
    output:
      "A risk-ranking queue with readiness status.",
    quality:
      "Decision-blocking cases remain visible but are not forced into final ratings.",
  },
  {
    step: "3",
    title: "Assess impact",
    action:
      "Review mission, data, privacy, identity, availability, safety, evidence, recovery, and trust dimensions.",
    output:
      "Impact rationale with owner perspectives and strongest dimensions.",
    quality:
      "The impact statement is bounded, fictional, and supported by evidence.",
  },
  {
    step: "4",
    title: "Assess likelihood and exposure",
    action:
      "Review preconditions, actor opportunity, reachability, frequency, change, complexity, history, detectability, and recovery difficulty.",
    output:
      "Likelihood and exposure rationale with assumptions.",
    quality:
      "Likelihood is not copied from impact or category.",
  },
  {
    step: "5",
    title: "Assess controls",
    action:
      "Record whether each fictional control is designed, implemented, operating, monitored, reviewed, and resilient.",
    output:
      "Control-evidence table with limitations and owners.",
    quality:
      "Only supported control effects reduce residual risk.",
  },
  {
    step: "6",
    title: "Record uncertainty and confidence",
    action:
      "Identify missing, stale, conflicting, unhealthy, proposed, or unowned evidence.",
    output:
      "Uncertainty level, confidence statement, and evidence plan.",
    quality:
      "Unknowns are not converted into false precision.",
  },
  {
    step: "7",
    title: "Assign and compare bands",
    action:
      "Assign fictional inherent and residual bands, explain differences, and compare scenarios using the same criteria.",
    output:
      "Threat-risk register with rationale and disagreement log.",
    quality:
      "Every band can be traced to scenario, evidence, controls, uncertainty, and owner input.",
  },
  {
    step: "8",
    title: "Choose priority and next action",
    action:
      "Set fictional priority, urgency, owner, treatment path, evidence action, review date, and trigger.",
    output:
      "Prioritized risk plan and leadership summary.",
    quality:
      "Priority considers mission timing, dependency, change, and uncertainty—not only the final band.",
  },
];

const quizQuestions = [
  {
    question:
      "Which statement best describes risk ranking?",
    choices: [
      "A precise prediction of whether harm will occur.",
      "A structured fictional comparison using defined criteria, evidence, controls, uncertainty, mission context, and owner judgment.",
      "A way to convert threat categories directly into severity.",
      "A method for identifying malicious actors.",
    ],
    answer: 1,
    explanation:
      "Risk ranking supports decisions. It is not an objective prediction or proof of intent.",
  },
  {
    question:
      "Why should impact and likelihood be rated separately?",
    choices: [
      "Because they always have opposite values.",
      "Because a severe outcome may be unlikely, while a common condition may have limited impact.",
      "Because likelihood does not require evidence.",
      "Because impact is determined by category.",
    ],
    answer: 1,
    explanation:
      "Separate dimensions reduce distortion and improve reasoning.",
  },
  {
    question:
      "A fictional control appears in a design document but has no operating evidence. How should it be treated?",
    choices: [
      "As fully effective.",
      "As proof that residual risk is Low.",
      "As a designed control whose implementation and operating effectiveness remain uncertain.",
      "As evidence of control failure.",
    ],
    answer: 2,
    explanation:
      "Design evidence supports intent, not full effectiveness.",
  },
  {
    question:
      "What is the best response to decision-blocking uncertainty?",
    choices: [
      "Assign Low because there is no proof of harm.",
      "Assign Very High because anything could be happening.",
      "Pause final ranking, preserve the concern, assign evidence owners, and define what is needed to continue.",
      "Delete the scenario.",
    ],
    answer: 2,
    explanation:
      "Decision-blocking uncertainty should be made visible and resolved responsibly.",
  },
  {
    question:
      "What is residual risk?",
    choices: [
      "The risk before controls are considered.",
      "The fictional risk remaining after considering current controls, their limitations, dependencies, uncertainty, and recovery.",
      "The highest possible score.",
      "A threat category.",
    ],
    answer: 1,
    explanation:
      "Residual risk reflects what remains after supported control effects are considered.",
  },
  {
    question:
      "Why can a Moderate scenario still be urgent?",
    choices: [
      "Because all Moderate risks are secretly High.",
      "Because active change, deadlines, exposure, dependency, control expiration, or decision timing may require near-term action.",
      "Because urgency and priority are identical to impact.",
      "Because uncertainty always means immediate danger.",
    ],
    answer: 1,
    explanation:
      "Priority and urgency include timing and context beyond the final band.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use a real organizational risk register but remove company names.",
      "Use real incidents but change dates.",
      "Invent every organization, scenario, asset, actor, control, score, owner, record, date, decision, and outcome from scratch.",
      "Use a real supplier assessment because it is defensive.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects sensitive systems, people, suppliers, controls, recovery information, and priorities.",
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
        Module A3
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

export default function RiskRankingInThreatModelsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Advanced
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module A3
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 6 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Evidence-Aware Prioritization
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A3.6 Risk Ranking in Threat Models
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders compare fictional threat
            scenarios using defined impact, likelihood, exposure, control
            strength, uncertainty, confidence, mission context, dependency, and
            recovery criteria. Build priorities that are explainable and
            revisable without pretending that a score is an objective
            prediction.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A3: Threat Modeling"
          lessonTitle="Risk Ranking in Threat Models"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, assets, actors, systems, scenarios, evidence, controls, scores, owners, dates, decisions, and outcomes.",
            "I understand that risk ranking supports decisions but does not predict the future or prove that a scenario will occur.",
            "I will keep threat category, impact, likelihood, exposure, control strength, uncertainty, confidence, priority, urgency, and intent separate.",
            "I will not count a fictional control as effective unless the supplied evidence supports its design, implementation, operation, monitoring, review, or resilience.",
            "I will document disagreement, assumptions, unknowns, evidence limits, and decision-blocking uncertainty instead of hiding them.",
            "I will not access, scan, test, configure, investigate, monitor, recover, or change any real system or use real risk registers or incidents.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Number Can Look Precise while Hiding Weak Reasoning"
        >
          <p className="leading-8">
            A fictional Northbridge reviewer assigns the supplier-result
            scenario a score of 19. The number appears exact, but the worksheet
            does not define its scale, show how delay and stale state affect
            mission impact, explain whether queue controls operate, record
            uncertainty about source health, or identify the risk owner. Another
            reviewer gives the same scenario a score of 8. Neither number is
            useful until the team agrees on criteria and documents evidence.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak ranking
              </p>
              <p className="mt-2 leading-7">
                “Risk score: 19, Critical.” No scenario definition, scale,
                evidence, controls, uncertainty, owner, disagreement, recovery,
                or review trigger is shown.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong ranking
              </p>
              <p className="mt-2 leading-7">
                “Residual risk: High, with moderate confidence. Impact is High
                because stale case state can affect decisions and users;
                likelihood is Moderate based on one exercise and incomplete
                current-state evidence; control effectiveness is only partially
                demonstrated.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            The goal is not to create the most impressive score. The goal is to
            help authorized fictional owners decide what needs evidence,
            mitigation, monitoring, recovery preparation, acceptance, or review
            first.
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Exactly Five Learning Objectives"
          title="What You Will Be Able to Do"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Why This Matters"
          title="Prioritization Directs Limited Defensive Time and Resources"
        >
          <p className="leading-8">
            Fictional teams cannot improve every concern at the same time. Risk
            ranking helps them compare scenarios, decide where evidence is
            missing, identify the most important mitigations, schedule reviews,
            prepare recovery, communicate uncertainty, and assign accountable
            owners. Poor ranking can waste effort, hide human impact, or create
            false confidence.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Impact question",
                "What fictional mission, user, data, identity, privacy, service, evidence, recovery, safety, or trust harm could result?",
              ],
              [
                "Likelihood question",
                "How plausible is the fictional scenario under current preconditions, exposure, actor opportunity, controls, change, history, and recovery?",
              ],
              [
                "Decision question",
                "Which owner should gather evidence, reduce risk, monitor, accept residual exposure, escalate, or review the scenario?",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <h3 className="font-black text-purple-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Core Framework"
          title="The R-A-N-K-E-D Method"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "R — Refine the scenario",
                "Confirm one fictional scenario, affected assets, actor context, state, category, scope, evidence, and owners.",
              ],
              [
                "A — Assess impact",
                "Review mission, data, privacy, identity, availability, safety, evidence, recovery, user, and trust consequences.",
              ],
              [
                "N — Note likelihood and exposure",
                "Evaluate preconditions, opportunity, reachability, frequency, change, complexity, detectability, and dependencies.",
              ],
              [
                "K — Know the controls",
                "Distinguish controls that are proposed, designed, implemented, operating, monitored, reviewed, and resilient.",
              ],
              [
                "E — Explain uncertainty",
                "Record assumptions, unknowns, stale evidence, conflict, confidence, and decision-blocking gaps.",
              ],
              [
                "D — Decide and document",
                "Assign inherent and residual bands, priority, urgency, treatment, owners, review dates, and triggers.",
              ],
            ].map(([title, detail]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
            <p className="font-black text-blue-100">
              Decision-ready risk statement
            </p>
            <p className="mt-2 leading-7">
              This fictional scenario has a documented inherent and residual
              risk band based on defined impact, likelihood, exposure, control,
              uncertainty, mission, and recovery criteria. The ranking cites
              evidence and limits, records owner disagreement, states
              confidence, explains the next action, and identifies review
              triggers. It does not claim that harm will occur.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Evidence-Aware Risk Ranking"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-200">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 1
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Apply Ten Ranking Principles
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {rankingPrinciples.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.principle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong practice
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.strongPractice}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    If ignored
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.failure}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Assess Eight Impact Dimensions"
        >
          <p className="leading-8">
            Fictional impact should be reviewed across multiple dimensions.
            The strongest dimension may guide the final impact band, but the
            rationale should preserve all meaningful harms and owner
            perspectives.
          </p>

          <div className="mt-6 grid gap-5">
            {impactDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.dimension}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    ["Low", item.low],
                    ["Moderate", item.moderate],
                    ["High", item.high],
                    ["Very High", item.veryHigh],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.dimension}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Supporting fictional evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 3
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evaluate Eight Likelihood and Exposure Factors
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {likelihoodFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.factor}
                </h3>

                <div className="mt-4 grid gap-4">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Lower likelihood or exposure
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.lower}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Higher likelihood or exposure
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.higher}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Assess Controls by Evidence Maturity"
        >
          <p className="leading-8">
            A fictional policy, tool, diagram, or requirement should not reduce
            residual risk merely because it exists on paper. Review control
            evidence in stages.
          </p>

          <div className="mt-6 grid gap-5">
            {controlAssessment.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.level}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Fictional evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Ranking effect
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.rankingEffect}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Make Uncertainty Visible"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {uncertaintyLevels.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.level}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Recommended action
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.action}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Uncertainty is not the same as risk. It affects confidence, evidence
            actions, urgency, and decision quality. It should never be silently
            converted into Low or Very High without explanation.
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Use Four Fictional Risk Bands"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {riskBands.map((item) => (
              <article
                key={item.band}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-2xl font-black text-cyan-100">
                  {item.band}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Typical response
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.response}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Important warning
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.warning}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Professional Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Steps from Scenario to Maintained Risk Decision
          </h2>

          <div className="mt-6 grid gap-5">
            {rankingWorkflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.action}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Quality check
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Worked Fictional Examples"
          title="Compare Risk Rationales without False Precision"
        >
          <div className="grid gap-5">
            {rankingExamples.map((item) => (
              <article
                key={item.scenario}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.scenario}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Impact", item.impact],
                    ["Likelihood", item.likelihood],
                    ["Control evidence", item.controls],
                    ["Uncertainty", item.uncertainty],
                    ["Inherent risk", item.inherent],
                    ["Residual risk", item.residual],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.scenario}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Ranking rationale
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.rationale}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Risk Matrix"
          title="Northbridge Threat-Model Ranking View"
        >
          <p className="leading-8">
            This conceptual matrix is fully invented. It shows how impact and
            likelihood may support comparison, but it does not replace control,
            uncertainty, mission, owner, urgency, or recovery analysis.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-center text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  <th className="px-4 py-3 text-left font-black">
                    Likelihood ↓ / Impact →
                  </th>
                  <th className="px-4 py-3 font-black">Low</th>
                  <th className="px-4 py-3 font-black">Moderate</th>
                  <th className="px-4 py-3 font-black">High</th>
                  <th className="px-4 py-3 font-black">Very High</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {[
                  ["Very High", "Moderate", "High", "Very High", "Very High"],
                  ["High", "Moderate", "High", "High", "Very High"],
                  ["Moderate", "Low", "Moderate", "High", "High"],
                  ["Low", "Low", "Low", "Moderate", "High"],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td
                        key={`${row[0]}-${index}`}
                        className={`px-4 py-4 ${
                          index === 0
                            ? "text-left font-black text-cyan-100"
                            : "text-slate-300"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            The matrix is only a starting point. A final fictional residual
            rating must also explain exposure, control evidence, uncertainty,
            dependency, mission importance, urgency, recovery, owner judgment,
            and review triggers.
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge Threat-Risk Dashboard"
          subtitle="Fictional scenario ranking, control evidence, uncertainty, and ownership status for training only."
          metrics={[
            {
              label: "Scenarios ready for final ranking",
              value: "11 / 18",
              note: "Seven scenarios still lack sufficient ownership, control, exposure, current-state, or recovery evidence.",
            },
            {
              label: "High residual risks",
              value: "4",
              note: "Supplier-result integrity, archival identity governance, recovery sequencing, and temporary-interface ownership require prioritized review.",
            },
            {
              label: "Decision-blocking uncertainty",
              value: "2",
              note: "The proposed analytics process and unclear free-text supplier field need owner decisions before final ranking.",
            },
          ]}
        />

        <FakeAlertCard
          title="Risk Score Uses Undefined Criteria"
          severity="High"
          time="2:14 PM"
          source="Fake Northbridge Risk Governance Console"
          details="A fictional reviewer assigned numerical scores to all eighteen scenarios, but the worksheet does not define impact bands, likelihood bands, control maturity, uncertainty, confidence, or how current-state and future-state scenarios differ."
          recommendation="Pause use of the scores. Publish the fictional ranking method, preserve the original reviewer rationale, reassess scenario readiness, document evidence and uncertainty, and assign authorized owners before final prioritization."
        />

        <FakeLogPanel
          title="Fake Risk-Ranking Review Timeline"
          logs={[
            "09:00 METHOD impact-bands='defined' likelihood-bands='defined'",
            "09:08 METHOD controls='designed,implemented,operating,reviewed'",
            "09:16 METHOD uncertainty='low,moderate,high,blocking'",
            "09:24 SCENARIO supplier-result readiness='ready'",
            "09:32 IMPACT supplier-result='high' rationale='stale-case-state'",
            "09:40 LIKELIHOOD supplier-result='moderate' evidence='exercise+gaps'",
            "09:48 CONTROL supplier-result='partial' reconciliation='not-evidenced'",
            "09:56 RESIDUAL supplier-result='high' confidence='moderate'",
            "10:04 SCENARIO supplier-note readiness='provisional'",
            "10:12 UNCERTAINTY supplier-note='high' current-use='unknown'",
            "10:20 SCENARIO analytics readiness='blocked' state='future'",
            "10:28 SCENARIO archive-identity residual='high-provisional'",
            "10:36 SCENARIO notification-change residual='moderate'",
            "10:44 SCENARIO recovery-sequence residual='high'",
            "10:52 QUALITY false-precision='detected' numeric-scores='paused'",
            "11:00 OWNER risk-decisions='assigned'",
            "11:08 REVIEW privacy='complete' operations='complete'",
            "11:16 REVIEW mission='pending' recovery='complete'",
            "11:24 CONFIDENCE register='medium'",
            "14:14 ALERT method='undefined-numeric-score'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Evidence Supports—and What It Does Not Prove
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceMatrix.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.source}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Does not prove", item.limits],
                    ["Ranking use", item.rankingUse],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
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
        </section>

        <AnalyzeEvidenceCard
          title="Which Risk Decision Is Best Supported?"
          question="Which conclusion most responsibly ranks the fictional supplier-result scenario?"
          evidence={[
            "Processing-result events were delayed for twenty-two minutes while source health remained Green.",
            "Users submitted duplicate documents after delayed status notifications.",
            "The support tickets do not prove one technical cause.",
            "A recovery exercise produced stale messages and repeated archival tasks after application restoration.",
            "State reconciliation, duplicate handling, ordering, delay thresholds, and source-health meaning are not fully evidenced.",
            "Schema validation is documented as designed, but operating and resilient evidence is incomplete.",
            "The scenario affects case-state integrity, user communication, service quality, support workload, evidence, and recovery.",
            "The fictional model has moderate confidence.",
          ]}
          options={[
            "Assign a High provisional residual risk with moderate confidence, document significant integrity and service impact, Moderate likelihood, partial control evidence, uncertainty, owner actions, and review triggers.",
            "Assign Very High because any supplier delay is catastrophic.",
            "Assign Low because no malicious activity is proven.",
            "Do not record the scenario until every fact is certain.",
          ]}
          bestAnswer={0}
          explanation="The first option uses bounded impact, likelihood, control evidence, uncertainty, and confidence. It supports a priority decision without claiming certainty, malicious intent, or guaranteed harm."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Errors That Weaken Risk Ranking"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map((item) => (
              <article
                key={item.mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">
                  {item.mistake}
                </h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Why it fails
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.why}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Fictional Practice Lab"
          title="Build the Northbridge Threat-Risk Register"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            access, scan, test, configure, investigate, monitor, recover, or
            change any real system. Do not use real incidents, risk registers,
            identities, suppliers, diagrams, logs, controls, recovery details,
            owners, or organizational priorities.
          </div>

          <div className="mt-6 grid gap-5">
            {labSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.action}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Quality check
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Two Reviewers Produce Different Risk Ratings"
          scenario="The fictional privacy owner rates the supplier free-text field High because sensitive information could be included. The supplier owner rates it Moderate because current population and retention are unknown."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve both rationales, identify the evidence each rating depends on, assign data and supplier owners to validate current field use and controls, and keep the residual ranking provisional.",
              outcome:
                "Best defensive choice. The disagreement reveals assumptions and evidence needs instead of being hidden.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Average the ratings and remove the written disagreement.",
              outcome:
                "Weak. Averaging can hide the actual decision, uncertainty, and owner perspectives.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Automatically choose High because privacy always receives priority.",
              outcome:
                "Weak and unsupported. Category does not determine severity.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Future-State Scenario Is Scored as Current Risk"
          scenario="The fictional analytics process is still proposed. Fields, purpose, audience, retention, controls, and ownership are not approved, but a reviewer assigns a current residual risk score."
          choices={[
            {
              label: "Choice A",
              response:
                "Label it future-state, record potential impact and design requirements, mark current-state ranking as decision-blocked, and require approval evidence before assigning residual risk.",
              outcome:
                "Best choice. Proposed design should not be represented as current exposure.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the current score because the design may eventually exist.",
              outcome:
                "Weak. It mixes proposed and current states and creates misleading priorities.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the scenario because future-state risk never matters.",
              outcome:
                "Incomplete. Future design risk should be reviewed before implementation, but labeled correctly.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Prioritize Five Fictional Risks under Limited Capacity"
        >
          <p className="leading-8">
            The fictional Northbridge team can begin only two major
            improvements this quarter. Compare supplier-result integrity,
            archival-identity ownership, notification-change evidence,
            recovery sequencing, and the future analytics proposal. Choose two
            actions without relying only on the final risk band.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Compare mission timing",
                "Identify which decisions, changes, expirations, exercises, or service deadlines create urgency.",
              ],
              [
                "Compare evidence readiness",
                "Separate scenarios ready for mitigation from scenarios that first require owner or evidence work.",
              ],
              [
                "Compare dependency concentration",
                "Identify which scenario affects multiple services, recovery steps, identities, or user workflows.",
              ],
              [
                "Compare control opportunity",
                "Estimate which action can produce meaningful reduction with available authority and resources.",
              ],
              [
                "Protect future design",
                "Consider whether a pre-implementation decision can prevent expensive or persistent risk.",
              ],
              [
                "Document deferred risk",
                "Assign owners, monitoring, evidence actions, review dates, and escalation triggers for scenarios not selected.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5 text-purple-50"
              >
                <p className="font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
            <p className="font-black text-blue-100">Challenge output</p>
            <p className="mt-2 leading-7">
              Produce a fictional prioritization memo with criteria, two chosen
              actions, three deferred actions, evidence needs, expected risk
              reduction, owner capacity, recovery effect, uncertainty,
              monitoring, escalation triggers, and a leadership explanation of
              why priority is broader than a single score.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Risk Ranking in Threat Models Checklist"
          items={[
            "I can define fictional impact, likelihood, exposure, control strength, uncertainty, confidence, inherent risk, residual risk, priority, and urgency.",
            "I can rank a specific fictional scenario rather than an entire system, role, supplier, or category.",
            "I can keep category, severity, intent, exploitability, evidence, control state, and risk separate.",
            "I can assess mission, data, privacy, identity, availability, safety, evidence, recovery, and trust impacts.",
            "I can assess preconditions, opportunity, exposure, control reliability, history, change, detectability, and recovery difficulty.",
            "I can distinguish controls that are proposed, designed, implemented, operating, monitored, reviewed, and resilient.",
            "I can record uncertainty and decision-blocking evidence gaps without converting them into false precision.",
            "I can explain how supported controls reduce inherent risk to residual risk.",
            "I can document disagreement, owner perspectives, confidence, rationale, review dates, and triggers.",
            "I can distinguish current-state risk from future-state design potential.",
            "I can prioritize scenarios using mission timing, urgency, dependencies, evidence readiness, owner capacity, and mitigation opportunity.",
            "I can create a completely fictional risk register without copying or modifying real incidents, owners, suppliers, systems, controls, scores, or organizational priorities.",
          ]}
        />

        <MiniQuiz
          title="A3.6 Mini Quiz: Risk Ranking in Threat Models"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Threat-Risk Register for the Northbridge Student-Support Portal. Include purpose, scope, exclusions, safety boundary, ranking method, definitions for impact, likelihood, exposure, control strength, uncertainty, confidence, inherent risk, residual risk, priority, urgency, and review bands; at least fifteen fictional scenarios; affected assets; primary and secondary categories; evidence and evidence limits; impact dimensions; likelihood factors; exposure; control maturity; recovery; uncertainty; confidence; inherent and residual bands; disagreement records; current-state or future-state label; scenario owner; risk owner; treatment decision; evidence actions; mitigation readiness; monitoring; review date; change triggers; leadership summary; technical appendix; reflection; and a statement that every organization, asset, actor, system, scenario, record, control, score, owner, date, decision, and outcome is invented."
          tips={[
            "Publish the fictional ranking criteria before assigning any bands or numbers.",
            "Use one stable scenario per row and explain impact, likelihood, controls, uncertainty, and confidence separately.",
            "Do not count a control as effective merely because it is listed in a policy, diagram, or tool inventory.",
            "Use provisional or decision-blocked status when evidence is insufficient for a responsible final ranking.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready to Choose Mitigations?"
        >
          <p className="leading-8">
            Before moving to A3.7, rate your readiness from 1 to 5 for scenario
            definition, impact, likelihood, exposure, control evidence,
            uncertainty, confidence, inherent risk, residual risk, owner
            disagreement, urgency, prioritization, maintenance, and complete
            fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why a risk score is a decision aid rather than an objective prediction.",
              "I can separate threat category, impact, likelihood, control strength, uncertainty, priority, urgency, and intent.",
              "I can use defined fictional criteria consistently across different scenario types.",
              "I can distinguish designed controls from operating, monitored, reviewed, and resilient controls.",
              "I can preserve evidence gaps and decision-blocking uncertainty without guessing.",
              "I can explain inherent and residual risk and show how supported controls affect the difference.",
              "I can document disagreement and identify the authorized owner of the final decision.",
              "I can create a complete fictional risk register without copying, modifying, or exposing real organizational information.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-50"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
            Record one fictional ranking that changed after control evidence,
            one uncertainty that blocked a final decision, one disagreement that
            improved the rationale, one urgency factor outside the risk band,
            and one question you will carry into A3.7 mitigation selection.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Risk ranking is a structured fictional decision process—not a prediction, proof, or guarantee.",
            "Rank specific scenarios rather than entire systems, suppliers, roles, or categories.",
            "Impact, likelihood, exposure, control strength, uncertainty, confidence, priority, urgency, and intent answer different questions.",
            "Threat category does not determine severity.",
            "A listed control should reduce residual risk only when relevant evidence supports its design, implementation, operation, review, or resilience.",
            "Uncertainty should remain visible and can justify evidence work, provisional status, or decision blocking.",
            "Inherent risk reflects the fictional scenario before control effects; residual risk reflects what remains after supported controls and limitations.",
            "Priority may depend on mission timing, active change, dependency, owner capacity, evidence readiness, and mitigation opportunity—not only the final band.",
            "Risk rationales, disagreement, owners, review dates, triggers, and version history make rankings explainable and maintainable.",
            "Every CyberShield risk register and artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A3
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Next, use the fictional threat-risk register to choose layered
            mitigations across design, prevention, detection, response,
            recovery, privacy, governance, communication, and evidence.
          </p>

          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}