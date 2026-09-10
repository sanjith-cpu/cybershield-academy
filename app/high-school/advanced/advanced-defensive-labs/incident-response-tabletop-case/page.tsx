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
const previousLesson = `${modulePath}/identity-access-review-case`;
const nextLesson = `${modulePath}/detection-tuning-case`;

const objectives = [
  "Work through a fictional incident-response tabletop where evidence changes over time and decisions must be revisited as confidence, scope, ownership, and business impact change.",
  "Distinguish incident facts, working hypotheses, assumptions, decisions, actions-for-authorized-teams, communications, unresolved questions, and recovery criteria in a structured decision log.",
  "Evaluate when to escalate, preserve evidence, request additional context, recommend containment support, communicate uncertainty, and pause decisions that lack sufficient evidence.",
  "Coordinate fictional technical, business, legal, communications, service-owner, identity, cloud, and leadership roles without performing real-world response actions.",
  "Build an Incident Response Tabletop Record containing the evolving timeline, decision points, evidence references, rationale, ownership, communication, recovery readiness, lessons learned, and executive summary.",
];

const responsePhases = [
  {
    phase: "Detection and validation",
    purpose:
      "Determine what the fictional evidence actually shows, whether the case belongs in incident response, and which facts remain uncertain.",
    keyQuestions:
      "What triggered review? Which sources support it? What is direct evidence? Which hypothesis is still unproven?",
  },
  {
    phase: "Scoping",
    purpose:
      "Define which fictional users, services, data, identities, business processes, and time windows belong in the case.",
    keyQuestions:
      "What is confirmed in scope? What is only potentially related? What evidence would expand or narrow scope?",
  },
  {
    phase: "Containment support",
    purpose:
      "Recommend safe, authorized containment options conceptually while preserving evidence, business continuity, and decision authority.",
    keyQuestions:
      "Which team has authority? What evidence supports the recommendation? What business impact could occur? Is a less disruptive option available?",
  },
  {
    phase: "Communication",
    purpose:
      "Keep technical teams, service owners, leadership, and other authorized stakeholders aligned without overstating certainty.",
    keyQuestions:
      "What is known? What is not known? What changed? What decision is needed? When is the next update?",
  },
  {
    phase: "Recovery readiness",
    purpose:
      "Define the evidence needed before normal operation is considered stable and monitored.",
    keyQuestions:
      "What must be true before recovery? What validation evidence is required? Who approves transition?",
  },
  {
    phase: "Lessons learned",
    purpose:
      "Review why the event was difficult, what evidence or process was missing, and what should improve after the tabletop.",
    keyQuestions:
      "Which decision was slow? Which evidence was stale? Which ownership gap mattered? Which control or process should be improved?",
  },
];

const decisionLanguage = [
  {
    term: "Fact",
    meaning:
      "A statement directly supported by fictional evidence.",
    example:
      "Alert IR-AL-04 was created at 10:18 for service APP-NB-40.",
  },
  {
    term: "Hypothesis",
    meaning:
      "A plausible explanation that still needs evidence.",
    example:
      "The alert cluster may be related to the earlier identity anomaly.",
  },
  {
    term: "Assumption",
    meaning:
      "A temporary condition used for planning that is not yet proven.",
    example:
      "Assume the service owner can join within 15 minutes for tabletop planning.",
  },
  {
    term: "Decision",
    meaning:
      "A documented choice made by an authorized fictional role.",
    example:
      "Escalate the case to Severity 2 tabletop status based on service impact and identity evidence.",
  },
  {
    term: "Recommendation",
    meaning:
      "A proposed defensive action that still requires the correct owner or approver.",
    example:
      "Recommend restricting the affected fictional service path pending owner review.",
  },
  {
    term: "Open question",
    meaning:
      "A missing fact that could materially change the next decision.",
    example:
      "Does the synthetic identity event involve the same service account used by APP-NB-40?",
  },
  {
    term: "Trigger",
    meaning:
      "A condition that causes reassessment, escalation, communication, or recovery review.",
    example:
      "New evidence expands the affected service scope from one application to three.",
  },
  {
    term: "Exit criterion",
    meaning:
      "Evidence required before moving out of a response phase.",
    example:
      "All affected fictional services have current owners, stable telemetry, and approved recovery validation.",
  },
];

const northbridgeTimeline = [
  {
    id: "IR-1801",
    time: "10:05",
    source: "Synthetic Service Health",
    event:
      "APP-NB-40 reports intermittent failures affecting a fictional customer-support workflow.",
    status:
      "Fact",
    implication:
      "Business impact exists, but cause is unknown.",
  },
  {
    id: "IR-1802",
    time: "10:11",
    source: "Synthetic Identity Alert",
    event:
      "Unusual sign-in pattern is recorded for service identity SVC-NB-40.",
    status:
      "Fact",
    implication:
      "Identity evidence may be relevant but does not yet establish misuse.",
  },
  {
    id: "IR-1803",
    time: "10:18",
    source: "Synthetic Alert Queue",
    event:
      "Alert IR-AL-04 links APP-NB-40 to repeated application errors and service-identity activity.",
    status:
      "Fact",
    implication:
      "Correlation is strong enough to open an incident-response tabletop review.",
  },
  {
    id: "IR-1804",
    time: "10:24",
    source: "Fictional Change Calendar",
    event:
      "Approved maintenance CHG-IR-77 began at 09:50 and is still in progress.",
    status:
      "Fact",
    implication:
      "Normal operational change may explain part of the evidence and must remain in the case context.",
  },
  {
    id: "IR-1805",
    time: "10:31",
    source: "Synthetic Ownership Registry",
    event:
      "APP-NB-40 owner is Team Atlas; SVC-NB-40 owner is also Team Atlas.",
    status:
      "Fact",
    implication:
      "One service owner can coordinate both application and service-identity evidence.",
  },
  {
    id: "IR-1806",
    time: "10:39",
    source: "Fictional Analyst Note",
    event:
      "Analyst notes that identity activity may be a side effect of maintenance validation.",
    status:
      "Hypothesis",
    implication:
      "Useful explanation, but not yet supported by direct causal evidence.",
  },
  {
    id: "IR-1807",
    time: "10:46",
    source: "Synthetic Monitoring",
    event:
      "A second fictional service, API-NB-41, begins showing a similar error signature.",
    status:
      "Fact",
    implication:
      "Possible scope expansion should be reviewed before changing severity.",
  },
  {
    id: "IR-1808",
    time: "10:54",
    source: "Synthetic Dependency Map",
    event:
      "APP-NB-40 and API-NB-41 share dependency ID-NB-7 and queue service QUEUE-NB-2.",
    status:
      "Fact",
    implication:
      "Shared dependencies create two plausible nonexclusive investigation paths.",
  },
  {
    id: "IR-1809",
    time: "11:02",
    source: "Fictional Identity Review",
    event:
      "SVC-NB-40 activity matches an approved maintenance-validation pattern documented in CHG-IR-77.",
    status:
      "Fact",
    implication:
      "Confidence that the identity alert reflects misuse decreases.",
  },
  {
    id: "IR-1810",
    time: "11:10",
    source: "Synthetic Queue Health",
    event:
      "QUEUE-NB-2 reports elevated processing delay beginning at 10:01.",
    status:
      "Fact",
    implication:
      "Operational degradation now has a stronger evidence path.",
  },
  {
    id: "IR-1811",
    time: "11:18",
    source: "Fictional Service Owner Update",
    event:
      "Team Atlas reports APP-NB-40 and API-NB-41 both depend on QUEUE-NB-2 for customer-support transactions.",
    status:
      "Fact",
    implication:
      "The shared queue becomes the leading operational hypothesis.",
  },
  {
    id: "IR-1812",
    time: "11:27",
    source: "Synthetic Monitoring",
    event:
      "Queue latency returns to normal while application error rates begin falling.",
    status:
      "Fact",
    implication:
      "Recovery may be starting, but the case still needs validation and monitoring.",
  },
  {
    id: "IR-1813",
    time: "11:42",
    source: "Fictional Change Record",
    event:
      "CHG-IR-77 is marked complete with no unauthorized change evidence in the synthetic review package.",
    status:
      "Fact",
    implication:
      "Maintenance remains relevant but no longer looks like an unauthorized event.",
  },
  {
    id: "IR-1814",
    time: "12:00",
    source: "Synthetic Service Health",
    event:
      "APP-NB-40 and API-NB-41 remain stable for 33 minutes.",
    status:
      "Fact",
    implication:
      "Recovery readiness can be evaluated using evidence rather than assumption.",
  },
];

const decisionPoints = [
  {
    id: "DP-1801",
    moment:
      "10:18 — Tabletop activation",
    evidence:
      "IR-1801, IR-1802, IR-1803",
    decision:
      "Open a coordinated incident-response tabletop review.",
    rationale:
      "Business impact plus multi-source technical evidence requires structured review, even though root cause is unknown.",
    owner:
      "Incident Response Lead",
    communication:
      "Notify service owner, identity review owner, and monitoring owner that the case is under coordinated review.",
    trigger:
      "New evidence expanding scope or clarifying root cause.",
  },
  {
    id: "DP-1802",
    moment:
      "10:24 — Maintenance context appears",
    evidence:
      "IR-1804",
    decision:
      "Keep maintenance as a competing explanation and request change evidence before recommending disruptive containment.",
    rationale:
      "Authorized change overlaps the event window and could explain part of the behavior.",
    owner:
      "Incident Response Lead",
    communication:
      "Update stakeholders that normal change is a relevant factor and certainty remains limited.",
    trigger:
      "Evidence showing the change is unrelated or unauthorized.",
  },
  {
    id: "DP-1803",
    moment:
      "10:46 — Second service affected",
    evidence:
      "IR-1807, IR-1808",
    decision:
      "Expand case scope to API-NB-41 and shared dependencies.",
    rationale:
      "A second service with a similar error signature creates a defensible scope-expansion trigger.",
    owner:
      "Incident Response Lead + Service Owner",
    communication:
      "Update leadership that impact now spans two related services and shared dependencies are under review.",
    trigger:
      "Additional service impact or evidence narrowing the shared dependency.",
  },
  {
    id: "DP-1804",
    moment:
      "11:02 — Identity hypothesis weakens",
    evidence:
      "IR-1809",
    decision:
      "Reduce priority of the service-identity misuse hypothesis while preserving the evidence in the record.",
    rationale:
      "Current evidence shows the activity matches approved maintenance validation.",
    owner:
      "Identity Review Owner",
    communication:
      "Clarify that identity misuse is no longer the leading explanation but remains documented.",
    trigger:
      "Contradictory identity evidence.",
  },
  {
    id: "DP-1805",
    moment:
      "11:10 — Queue degradation identified",
    evidence:
      "IR-1810, IR-1811",
    decision:
      "Make QUEUE-NB-2 degradation the leading operational hypothesis and focus recovery support on its owner.",
    rationale:
      "The shared queue connects both affected services and shows overlapping degradation evidence.",
    owner:
      "Service Owner + Queue Owner",
    communication:
      "Update technical and business stakeholders with the stronger evidence path and remaining uncertainty.",
    trigger:
      "Queue recovery or evidence showing another dependency is involved.",
  },
  {
    id: "DP-1806",
    moment:
      "11:27 — Recovery begins",
    evidence:
      "IR-1812",
    decision:
      "Move from active containment-support planning to monitored recovery validation.",
    rationale:
      "Queue latency normalizes and application errors begin to decline.",
    owner:
      "Incident Response Lead",
    communication:
      "State that recovery appears to be underway but closure criteria are not yet met.",
    trigger:
      "Error recurrence, telemetry loss, or stable recovery period reached.",
  },
  {
    id: "DP-1807",
    moment:
      "12:00 — Stability observed",
    evidence:
      "IR-1813, IR-1814",
    decision:
      "Prepare to close the tabletop response phase after owner validation and lessons-learned capture.",
    rationale:
      "Services are stable, change evidence is accounted for, and the leading operational cause is sufficiently supported for a bounded conclusion.",
    owner:
      "Incident Response Lead + Service Owner",
    communication:
      "Send final technical update and schedule lessons-learned review.",
    trigger:
      "Owner confirmation and completion of required evidence package.",
  },
];

const communicationLayers = [
  {
    audience: "Technical responders",
    need:
      "Detailed evidence, scope, hypotheses, dependencies, logs, owners, and current decision points.",
    avoid:
      "Hiding contradictions or compressing uncertainty so much that responders lose important context.",
  },
  {
    audience: "Service owners",
    need:
      "Business impact, affected workflows, current technical hypothesis, owner actions, recovery criteria, and next checkpoint.",
    avoid:
      "Overloading the update with irrelevant raw telemetry.",
  },
  {
    audience: "Leadership",
    need:
      "What is affected, current severity, business consequence, confidence, decisions made, decisions needed, and next update time.",
    avoid:
      "Presenting a hypothesis as confirmed root cause.",
  },
  {
    audience: "Governance / risk",
    need:
      "Material impact, decision authority, exceptions, unresolved control questions, and evidence needed for follow-up.",
    avoid:
      "Treating a live response update as the final risk assessment.",
  },
  {
    audience: "Post-incident review",
    need:
      "Decision chronology, evidence gaps, process delays, communication issues, ownership problems, and improvement actions.",
    avoid:
      "Blame-focused storytelling that ignores system and process design.",
  },
];

const severityFactors = [
  {
    factor: "Business impact",
    question:
      "Which fictional services or users are affected, and how important are those workflows?",
  },
  {
    factor: "Scope",
    question:
      "Is the case limited to one system or expanding across shared dependencies?",
  },
  {
    factor: "Evidence confidence",
    question:
      "How strongly does current evidence support the leading explanation?",
  },
  {
    factor: "Data sensitivity",
    question:
      "Does the case involve restricted or important information?",
  },
  {
    factor: "Identity impact",
    question:
      "Does evidence suggest privileged or service identity misuse, or is authorized activity a stronger explanation?",
  },
  {
    factor: "Operational stability",
    question:
      "Are services degrading, stable, recovering, or repeatedly failing?",
  },
  {
    factor: "Detectability",
    question:
      "Is telemetry complete enough to understand current state?",
  },
  {
    factor: "Decision urgency",
    question:
      "Would delay materially worsen impact or evidence quality?",
  },
];

const containmentPrinciples = [
  {
    principle: "Use authority, not urgency, to determine who decides",
    explanation:
      "A serious event does not erase ownership and approval boundaries.",
  },
  {
    principle: "Prefer reversible options when evidence is incomplete",
    explanation:
      "Early decisions should preserve the ability to adjust as the case changes.",
  },
  {
    principle: "Preserve evidence",
    explanation:
      "Response decisions should not destroy the records needed to understand what happened.",
  },
  {
    principle: "Consider business continuity",
    explanation:
      "A technically aggressive action can create more harm than the condition under review.",
  },
  {
    principle: "Use the narrowest justified scope",
    explanation:
      "Containment support should target the affected fictional service or dependency, not unrelated systems.",
  },
  {
    principle: "Document why",
    explanation:
      "The decision log should capture the evidence, rationale, owner, expected benefit, and trigger for reassessment.",
  },
];

const recoveryCriteria = [
  {
    criterion: "Service stability",
    evidence:
      "Affected fictional services remain stable for the agreed monitoring window.",
  },
  {
    criterion: "Telemetry health",
    evidence:
      "Required logging and monitoring sources are current and complete enough for validation.",
  },
  {
    criterion: "Owner confirmation",
    evidence:
      "Service and dependency owners confirm expected operational state.",
  },
  {
    criterion: "Known changes accounted for",
    evidence:
      "Approved maintenance and configuration changes are reconciled with the timeline.",
  },
  {
    criterion: "Open high-risk hypotheses resolved or bounded",
    evidence:
      "No unresolved high-confidence evidence suggests broader impact requiring continued active response.",
  },
  {
    criterion: "Communication complete",
    evidence:
      "Technical and leadership stakeholders receive a current status and next-step summary.",
  },
  {
    criterion: "Follow-up actions assigned",
    evidence:
      "Monitoring, ownership, documentation, detection, or resilience improvements have owners and review dates.",
  },
];

const lessonsLearned = [
  {
    issue:
      "Identity alert initially looked more important than operational evidence.",
    lesson:
      "Alert severity should not outrank broader evidence context.",
    improvement:
      "Add maintenance context to enrichment and analyst review guidance.",
  },
  {
    issue:
      "Two services shared a dependency that was not immediately obvious.",
    lesson:
      "Dependency maps can accelerate scope analysis.",
    improvement:
      "Keep current service dependency records available to responders.",
  },
  {
    issue:
      "Maintenance and service-health records were reviewed late.",
    lesson:
      "Operational context can prevent premature conclusions.",
    improvement:
      "Include current change and health evidence in the initial case package.",
  },
  {
    issue:
      "Leadership needed a scope update before root cause was known.",
    lesson:
      "Communication can be accurate without waiting for full certainty.",
    improvement:
      "Use structured updates separating facts, hypotheses, impact, and next checkpoint.",
  },
  {
    issue:
      "Recovery started before closure criteria were written.",
    lesson:
      "Recovery confidence should be evidence-based and planned.",
    improvement:
      "Define stability, telemetry, owner, and validation criteria earlier.",
  },
];

const tabletopRecordFields = [
  {
    field: "Incident ID",
    purpose:
      "Stable identifier for the tabletop case.",
    example:
      "IR-CASE-1805",
  },
  {
    field: "Activation reason",
    purpose:
      "Explains why coordinated response review began.",
    example:
      "Business-impacting service failure plus correlated identity and application alerts",
  },
  {
    field: "Scope",
    purpose:
      "Lists affected fictional services, identities, dependencies, and time window.",
    example:
      "APP-NB-40, API-NB-41, SVC-NB-40, QUEUE-NB-2",
  },
  {
    field: "Evidence inventory",
    purpose:
      "References every synthetic source used in decisions.",
    example:
      "IR-1801 through IR-1814",
  },
  {
    field: "Timeline",
    purpose:
      "Preserves the order in which evidence and decisions appeared.",
    example:
      "10:05–12:00 normalized case timeline",
  },
  {
    field: "Decision log",
    purpose:
      "Records decision, owner, evidence, rationale, communication, and reassessment trigger.",
    example:
      "DP-1801 through DP-1807",
  },
  {
    field: "Hypotheses",
    purpose:
      "Shows which explanations are active, weakened, ruled out, or still unresolved.",
    example:
      "Identity misuse weakened; queue degradation becomes leading operational hypothesis",
  },
  {
    field: "Business impact",
    purpose:
      "Explains effect on fictional users, services, and business workflow.",
    example:
      "Customer-support transactions intermittently delayed",
  },
  {
    field: "Containment-support recommendations",
    purpose:
      "Documents safe conceptual recommendations requiring authorized owners.",
    example:
      "Narrow recovery support around QUEUE-NB-2 while preserving evidence",
  },
  {
    field: "Communications",
    purpose:
      "Tracks technical and leadership updates.",
    example:
      "Scope update at 10:46; recovery update at 11:27",
  },
  {
    field: "Recovery criteria",
    purpose:
      "Defines evidence needed before the active response phase ends.",
    example:
      "Stable services, healthy telemetry, owner confirmation, bounded hypotheses",
  },
  {
    field: "Lessons learned",
    purpose:
      "Captures process and evidence improvements after the case.",
    example:
      "Add change and dependency context to initial case enrichment",
  },
];

const dashboardMetrics = [
  {
    label: "Evidence events",
    value: "14",
    note: "Service health, identity, alerts, changes, ownership, dependencies, queue health, and recovery",
  },
  {
    label: "Decision points",
    value: "7",
    note: "Activation, context, scope expansion, hypothesis change, leading cause, recovery, and closure readiness",
  },
  {
    label: "Affected services",
    value: "2",
    note: "APP-NB-40 and API-NB-41 in the fictional tabletop",
  },
  {
    label: "Real response actions",
    value: "0",
    note: "All response work is fictional, conceptual, and human-governed",
  },
];

const logPreview = [
  "[10:05] IR-1801 service=APP-NB-40 state=DEGRADED impact=CUSTOMER_SUPPORT",
  "[10:11] IR-1802 identity=SVC-NB-40 pattern=UNUSUAL status=REVIEW",
  "[10:18] IR-1803 alert=IR-AL-04 action=TABLETOP_ACTIVATED",
  "[10:24] IR-1804 change=CHG-IR-77 state=IN_PROGRESS authorized=YES",
  "[10:46] IR-1807 service=API-NB-41 similar_error=YES scope=EXPANDED",
  "[11:02] IR-1809 identity_pattern=APPROVED_MAINTENANCE_MATCH hypothesis=MISUSE_DOWNRANKED",
  "[11:10] IR-1810 dependency=QUEUE-NB-2 latency=ELEVATED leading_hypothesis=QUEUE_DEGRADATION",
  "[11:27] IR-1812 queue_latency=NORMAL application_errors=DECLINING phase=RECOVERY_VALIDATION",
  "[12:00] IR-1814 services=STABLE duration=33_MINUTES closure=OWNER_REVIEW_PENDING",
];

const safeLabTasks = [
  "Create a fictional incident-response tabletop with at least thirty-five timeline events.",
  "Give every timeline event a stable IR ID.",
  "Use at least five evidence-source types.",
  "Include service-health evidence.",
  "Include identity evidence.",
  "Include change-management evidence.",
  "Include monitoring evidence.",
  "Include ownership or dependency evidence.",
  "Mark each event as Fact, Hypothesis, Assumption, Decision, Recommendation, or Open Question where appropriate.",
  "Normalize event times.",
  "Record when the case is activated.",
  "Record initial scope.",
  "Record at least three scope changes.",
  "Create at least twelve decision points.",
  "Give every decision point a stable DP ID.",
  "Link every decision to evidence.",
  "Name the decision owner.",
  "Write the decision rationale.",
  "Record the communication generated by the decision.",
  "Record the reassessment trigger.",
  "Create at least four competing hypotheses.",
  "Show at least one hypothesis becoming stronger.",
  "Show at least one hypothesis becoming weaker.",
  "Show at least one hypothesis remaining unresolved.",
  "Record at least five open questions.",
  "Record at least five business-impact observations.",
  "Record at least five ownership decisions.",
  "Record at least five conceptual containment-support recommendations.",
  "Keep all recommendations non-operational and owner-approved.",
  "Create at least three leadership updates.",
  "Create at least three technical updates.",
  "Define recovery criteria.",
  "Create at least three recovery checkpoints.",
  "Create at least five lessons learned.",
  "Assign improvement owners.",
  "Assign review dates.",
  "Write a one-page technical summary.",
  "Write a one-page leadership summary.",
  "Preserve uncertainty where evidence remains incomplete.",
  "Keep the entire tabletop fictional, inert, defensive, and non-disruptive.",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep the identity alert in the case, review the authorized maintenance evidence, and avoid recommending disruptive action until the identity activity is better understood.",
    outcome:
      "Best. The evidence is concerning enough to review but not strong enough to justify a high-impact conclusion.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Assume the service identity is compromised because the alert is unusual.",
    outcome:
      "Risky. Unusual activity is evidence for review, not proof of misuse.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Ignore the alert because maintenance is occurring.",
    outcome:
      "Caution. Authorized change can explain evidence, but the alert should still be reconciled with that context.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Move into monitored recovery validation, keep the case open until stability and telemetry criteria are met, and communicate that recovery appears underway.",
    outcome:
      "Best. Recovery should be evidence-based rather than assumed from one good data point.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Close the case immediately because queue latency returned to normal once.",
    outcome:
      "Caution. One recovery signal is not enough to prove sustained stability.",
    tone: "caution" as const,
  },
  {
    label: "Choice C",
    response:
      "Keep the incident permanently open even after all recovery criteria are met.",
    outcome:
      "Risky. Response should have defined exit criteria and transition into follow-up work.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest reason to use a decision log during an incident-response tabletop?",
    choices: [
      "It records what was decided, by whom, based on which evidence, why, and what would trigger reassessment.",
      "It replaces technical evidence.",
      "It guarantees the first decision is correct.",
      "It prevents the case from changing.",
    ],
    answer: 0,
    explanation:
      "Decision logs preserve accountability and show how choices changed as evidence evolved.",
  },
  {
    question:
      "What should happen when approved maintenance overlaps a suspicious-looking event?",
    choices: [
      "Treat maintenance as relevant context and reconcile it with the evidence before drawing a stronger conclusion.",
      "Assume the event is harmless.",
      "Assume the maintenance is malicious.",
      "Delete the maintenance record.",
    ],
    answer: 0,
    explanation:
      "Authorized change may explain some evidence, but it should be tested against the rest of the case.",
  },
  {
    question:
      "What is strongest when a second related service begins showing similar failures?",
    choices: [
      "Reassess scope and shared dependencies using the new evidence.",
      "Ignore it until root cause is known.",
      "Automatically declare the highest severity.",
      "Assume the first service caused the second.",
    ],
    answer: 0,
    explanation:
      "New affected services are a scope trigger, but severity and cause still depend on evidence.",
  },
  {
    question:
      "What does recovery readiness require?",
    choices: [
      "Defined evidence such as service stability, telemetry health, owner confirmation, and bounded unresolved hypotheses.",
      "One normal metric.",
      "The incident lead feeling confident.",
      "Closing the case as soon as impact decreases.",
    ],
    answer: 0,
    explanation:
      "Recovery should be validated against explicit criteria rather than intuition.",
  },
  {
    question:
      "How should leadership communication handle uncertainty?",
    choices: [
      "State what is known, what is not known, current impact, decisions made, decisions needed, and the next update time.",
      "Hide uncertainty until root cause is known.",
      "Present the leading hypothesis as confirmed.",
      "Send raw logs with no summary.",
    ],
    answer: 0,
    explanation:
      "Leadership can make better decisions when uncertainty is clear but structured.",
  },
  {
    question:
      "What is the strongest approach to containment support when evidence is incomplete?",
    choices: [
      "Prefer narrow, reversible, authorized options that preserve evidence and business continuity.",
      "Choose the most disruptive option immediately.",
      "Ignore decision authority.",
      "Remove all monitoring first.",
    ],
    answer: 0,
    explanation:
      "Containment should balance safety, evidence, business impact, and authority.",
  },
  {
    question:
      "What is the purpose of the Incident Response Tabletop Record?",
    choices: [
      "Document the evolving timeline, evidence, hypotheses, decisions, owners, communications, recovery criteria, lessons learned, and leadership summary.",
      "Provide real-world attack instructions.",
      "Replace incident ownership.",
      "Automate destructive response actions.",
    ],
    answer: 0,
    explanation:
      "The artifact captures disciplined defensive decision-making in a fictional case.",
  },
];

const checklistItems = [
  "Activation reason is documented.",
  "Initial scope is documented.",
  "Scope changes are evidence-based.",
  "Facts are separated from hypotheses.",
  "Assumptions are labeled.",
  "Open questions are visible.",
  "Decision owners are named.",
  "Decision rationale points to evidence.",
  "Reassessment triggers are documented.",
  "Business impact is included.",
  "Service ownership is current.",
  "Dependency evidence is reviewed.",
  "Authorized maintenance is included as context.",
  "Containment-support recommendations remain narrow and conceptual.",
  "Evidence preservation is considered.",
  "Leadership communication preserves uncertainty.",
  "Technical communication includes enough detail for responders.",
  "Recovery criteria are explicit.",
  "Lessons learned focus on process and evidence improvement.",
  "No real system, account, service, or control is changed.",
];

const takeaways = [
  "Incident response is a sequence of evidence-backed decisions, not a single root-cause guess.",
  "A tabletop should preserve facts, hypotheses, assumptions, open questions, decisions, and triggers separately.",
  "Authorized maintenance can be relevant without automatically proving or disproving a security concern.",
  "Scope should expand or contract when new evidence justifies it.",
  "A hypothesis can become stronger, weaker, or remain unresolved as the case changes.",
  "Containment support should remain narrow, reversible, authorized, evidence-preserving, and business-aware.",
  "Leadership updates can be useful before root cause is known when facts, uncertainty, impact, and next decisions are clear.",
  "Recovery requires explicit validation evidence rather than one normal metric.",
  "Lessons learned should improve evidence, ownership, communication, resilience, and process rather than assign blame.",
  "The Incident Response Tabletop Record becomes the fifth artifact in the A18 Advanced Defensive Casebook.",
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

export default function IncidentResponseTabletopCasePage() {
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
              A18.5
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Defensive Labs
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A18.5
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Incident Response Tabletop Case
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Incident response becomes difficult when the evidence changes while
            people are already making decisions. This tabletop follows a
            fictional service-impact case where identity, maintenance, shared
            dependencies, alerts, and recovery evidence all shift the team's
            understanding over time.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            You will practice decision-making, coordination, communication,
            evidence review, and recovery planning only. No real response action
            is performed.
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
          lessonTitle="Incident Response Tabletop Case"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A18.5 Entry Readiness"
          items={[
            "I can separate direct evidence from hypotheses and assumptions.",
            "I understand that incident severity, scope, and response decisions may change as evidence changes.",
            "I can communicate uncertainty without hiding it or exaggerating it.",
            "I will keep all containment, escalation, recovery, and response work fictional, conceptual, and human-governed.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="The Best Incident Decision Can Change Ten Minutes Later"
        >
          <p className="leading-8">
            At 10:18, a service failure and an unusual identity alert may make
            identity misuse look important. By 11:02, maintenance evidence may
            weaken that hypothesis. By 11:10, a shared queue may become the
            strongest operational explanation. None of those changes means the
            earlier review was careless. It means the response adapted to better
            evidence.
          </p>

          <p className="mt-4 leading-8">
            Professional incident response is not about defending the first
            theory. It is about keeping decisions aligned with the best current
            evidence.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Good responders change their minds when the evidence changes—and preserve the decision trail that explains why.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for This Tabletop"
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
          eyebrow="Response Lifecycle"
          title="Six Phases That Organize the Tabletop"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {responsePhases.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.phase}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Ask: {item.keyQuestions}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision Language"
          title="Keep Facts, Hypotheses, Assumptions, and Decisions Separate"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {decisionLanguage.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.term}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Tabletop Case File"
          title="Northbridge Synthetic Incident Timeline"
        >
          <p className="leading-8">
            The timeline deliberately changes the most plausible explanation.
            Preserve each event as it appeared instead of rewriting the early
            case with information learned later.
          </p>

          <div className="mt-6 grid gap-5">
            {northbridgeTimeline.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black text-blue-100">
                    {item.time}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.source}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <p className="mt-5 leading-7 text-white">{item.event}</p>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Response implication
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.implication}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Incident Response Tabletop Dashboard"
          subtitle="Fictional evidence, decision points, service scope, and safety posture"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Scope Expansion: Second Service Shows Similar Failures"
          severity="High"
          time="10:46"
          source="Fictional Incident Coordination Queue"
          details="API-NB-41 now shows a similar synthetic error signature to APP-NB-40. The two services share identity dependency ID-NB-7 and queue service QUEUE-NB-2, but the evidence does not yet prove which dependency is responsible."
          recommendation="Expand case scope, compare shared dependencies, update stakeholders, and avoid declaring a root cause until evidence distinguishes the competing explanations."
        />

        <FakeLogPanel
          title="Northbridge Fictional Incident Timeline Preview"
          logs={logPreview}
        />

        <Section
          eyebrow="Decision Log"
          title="Seven Decision Points as the Case Evolves"
        >
          <div className="grid gap-5">
            {decisionPoints.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.moment}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.decision}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Evidence", item.evidence],
                    ["Rationale", item.rationale],
                    ["Owner", item.owner],
                    ["Communication", item.communication],
                    ["Reassessment trigger", item.trigger],
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

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Identity Alert During Maintenance"
          question="What is the strongest response when unusual service-identity activity overlaps an approved maintenance window?"
          evidence={[
            "SVC-NB-40 shows an unusual sign-in pattern at 10:11.",
            "Approved maintenance CHG-IR-77 began at 09:50.",
            "The analyst suspects the identity activity may be related to maintenance.",
            "At 11:02 the activity is shown to match the documented maintenance-validation pattern.",
            "No evidence in the case proves unauthorized use.",
          ]}
          options={[
            "Review the identity evidence, preserve the alert, and reconcile it with maintenance context before recommending a stronger response.",
            "Declare the identity compromised immediately.",
            "Ignore all identity evidence because maintenance is approved.",
            "Remove the identity from the case record.",
          ]}
          bestAnswer={0}
          explanation="The alert deserves review, but approved change context and later evidence reduce confidence in the misuse hypothesis."
        />

        <Section
          eyebrow="Communication"
          title="Different Audiences Need Different Levels of Detail"
        >
          <div className="grid gap-5">
            {communicationLayers.map((item) => (
              <article
                key={item.audience}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {item.audience}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Needs
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.need}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Avoid
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.avoid}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Severity"
          title="Severity Should Follow Evidence and Impact"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {severityFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.factor}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {item.question}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Containment Support"
          title="Containment Decisions Need Authority, Evidence, and Restraint"
        >
          <p className="leading-8">
            This lesson does not perform containment. It teaches how a responder
            should reason about containment recommendations before an authorized
            owner decides what to do.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {containmentPrinciples.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">
                  {item.principle}
                </h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.explanation}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Recovery"
          title="Recovery Is a Decision Supported by Evidence"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {recoveryCriteria.map((item) => (
              <article
                key={item.criterion}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.criterion}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Identity Alert During Maintenance"
          scenario="A fictional service identity shows unusual activity while an approved maintenance window is active. The activity is relevant to the case, but the evidence does not yet prove misuse."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Early Recovery Signal"
          scenario="The shared queue returns to normal and application errors begin declining, but the services have only been stable for a short period."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Lessons Learned"
          title="A Tabletop Should Improve the System After the Event"
        >
          <div className="grid gap-5">
            {lessonsLearned.map((item) => (
              <article
                key={item.issue}
                className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6"
              >
                <h3 className="font-black text-purple-50">{item.issue}</h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Lesson
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.lesson}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Improvement
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.improvement}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Tabletop Record"
          title="What a Professional Incident Response Tabletop Record Contains"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {tabletopRecordFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.field}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build an Incident Response Tabletop Record"
        >
          <p className="leading-8">
            Create a synthetic incident that changes over time. Your goal is to
            show how evidence changes scope, confidence, communication,
            containment support, and recovery readiness.
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
              Use fictional alerts, logs, identities, service-health records,
              ownership records, change records, dependencies, decision logs,
              and communications only. Do not access, modify, isolate, disable,
              block, scan, probe, or test any real system or account.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Recovery Readiness"
          question="What is the strongest decision at 11:27 when queue latency returns to normal and application errors begin declining?"
          evidence={[
            "QUEUE-NB-2 latency returns to normal.",
            "APP-NB-40 and API-NB-41 error rates begin declining.",
            "Only one recovery period has been observed so far.",
            "Required telemetry remains healthy.",
            "Service-owner confirmation is not yet recorded.",
          ]}
          options={[
            "Move into monitored recovery validation while keeping the case open until stability and owner-confirmation criteria are met.",
            "Close the case immediately.",
            "Ignore the recovery evidence.",
            "Declare the root cause fully proven.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports a phase change into monitored recovery, but not immediate closure."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Write a Three-Update Incident Communication Set"
        >
          <p className="leading-8">
            Write three fictional leadership updates for the same case: one at
            activation, one after scope expansion, and one during recovery. Each
            update should remain accurate to the evidence available at that
            moment.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Update 1 — what is known",
              "Update 1 — what is unknown",
              "Update 1 — business impact",
              "Update 1 — next decision",
              "Update 2 — scope change",
              "Update 2 — leading hypotheses",
              "Update 2 — leadership relevance",
              "Update 2 — next checkpoint",
              "Update 3 — recovery evidence",
              "Update 3 — remaining uncertainty",
              "Update 3 — closure criteria",
              "Update 3 — follow-up actions",
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
            Do not rewrite earlier updates with later knowledge. The exercise is
            about communicating honestly from the evidence available at each
            point in time.
          </p>
        </Section>

        <DefenderChecklist
          title="A18.5 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A18.5 Mini Quiz: Incident Response Tabletop Case"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Incident Response Tabletop Record"
          prompt="Create the fifth artifact for your A18 Advanced Defensive Casebook: a fictional Incident Response Tabletop Record. Include activation reason, scope, evidence inventory, normalized timeline, facts, hypotheses, assumptions, open questions, at least twelve decision points, evidence links, decision owners, rationale, communications, reassessment triggers, business impact, conceptual containment-support recommendations, recovery criteria, recovery checkpoints, lessons learned, improvement owners, review dates, technical summary, and leadership summary."
          tips={[
            "Preserve the order in which evidence appeared.",
            "Do not rewrite earlier decisions using later knowledge.",
            "Separate facts, hypotheses, assumptions, and recommendations.",
            "Make every decision traceable to evidence and an owner.",
            "Use recovery criteria instead of intuition.",
            "Keep all response actions fictional and non-operational.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A18.6?"
        >
          <p className="leading-8">
            A18.6 moves into a Detection Tuning Case. Before continuing, make
            sure you can explain how incident decisions should change when
            evidence, scope, confidence, business impact, and recovery status
            change.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can separate incident facts from hypotheses and assumptions.",
              "I can document a decision with evidence, owner, rationale, communication, and reassessment trigger.",
              "I can expand or narrow scope when evidence justifies it.",
              "I can communicate uncertainty clearly to technical and leadership audiences.",
              "I can define evidence-based recovery criteria without performing a real response action.",
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
          title="How to Make the Tabletop Record Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Preserve chronology",
                detail:
                  "Keep the case in the order evidence appeared so reviewers can understand why decisions changed.",
              },
              {
                title: "Use decision IDs",
                detail:
                  "Stable decision references make escalation, communication, and lessons learned easier to trace.",
              },
              {
                title: "Label uncertainty",
                detail:
                  "Hypotheses and assumptions should never look like confirmed facts.",
              },
              {
                title: "Show authority",
                detail:
                  "Every important decision should name the fictional role responsible for making or approving it.",
              },
              {
                title: "Show business impact",
                detail:
                  "Response decisions should connect technical evidence to service and workflow consequences.",
              },
              {
                title: "Use explicit recovery criteria",
                detail:
                  "Closure should depend on evidence, not on a single improving metric.",
              },
              {
                title: "Capture process learning",
                detail:
                  "Lessons learned should improve evidence, dependency maps, communication, resilience, and ownership.",
              },
              {
                title: "Connect forward",
                detail:
                  "A18.6 will use similar evidence discipline to decide whether a fictional detection should be tuned.",
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
            A18.5 stays fictional, tabletop-based, defensive, and non-operational
          </h2>
          <p className="mt-3 leading-7">
            Do not access, isolate, disable, block, modify, scan, probe, exploit,
            or test any real system, account, service, network, or security
            control. All containment and recovery discussion is conceptual and
            owner-governed. The lesson practices evidence, decision-making,
            communication, coordination, recovery criteria, and lessons learned.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A18.5 Incident Response Tabletop Case Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a structured way to manage evolving incident evidence,
            decision ownership, scope, hypotheses, communication, containment
            support, recovery readiness, and lessons learned. Next, A18.6 moves
            into a Detection Tuning Case.
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