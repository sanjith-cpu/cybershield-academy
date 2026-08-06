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
const modulePath = `${trackPath}/incident-response-lifecycle`;
const previousLesson = `${modulePath}/metrics-and-continuous-improvement`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate fictional preparation, activation, role coordination, source-health reasoning, scoping, prioritization, containment, continuity, communication, evidence preservation, eradication, recovery, validation, review, metrics, and reopening into one coherent response.",
  "Build and maintain a fictional incident record that separates confirmed, possible, Unknown, unaffected, excluded, and out-of-scope entities while preserving chronology, source health, evidence quality, decision rights, and version history.",
  "Defend fictional containment and recovery decisions using bounded questions, options, authority, expected state, validation, rollback, continuity, privacy, user impact, supplier dependencies, and residual risk.",
  "Create fictional audience-specific communications, evidence-preservation records, post-incident lessons, corrective actions, and metrics without exposing real systems, identities, incidents, suppliers, or operational procedures.",
  "Produce a portfolio-ready fictional Incident Response Simulation Package containing the complete lifecycle record, decision log, scope register, communication set, evidence package, recovery plan, review findings, improvement dashboard, leadership brief, and reflection.",
];

const vocabulary = [
  ["Simulation inject", "A fictional timed event, evidence item, source change, decision request, user report, supplier update, or recovery condition introduced into the exercise."],
  ["Master scenario events list", "A fictional ordered list controlling inject timing, expected decisions, evidence availability, source health, and observer prompts."],
  ["Controller", "The fictional role that introduces approved exercise injects and keeps the scenario on its intended path."],
  ["Facilitator", "The fictional role that explains rules, keeps participants focused on decisions, and protects the exercise boundary."],
  ["Observer", "The fictional role that records decisions, evidence use, source-health reasoning, communication quality, ownership, and outcomes without secretly changing the scenario."],
  ["Participant", "A fictional responder role expected to interpret evidence and make decisions within its documented authority."],
  ["White cell", "A fictional exercise coordination group controlling scenario flow, clarifications, timing, safety, and observer consistency."],
  ["Exercise boundary", "The fictional rule that all systems, evidence, identities, suppliers, communications, actions, and outcomes are invented and non-operational."],
  ["Decision point", "A fictional moment requiring a bounded choice, owner, authority, evidence, rationale, validation, and next review."],
  ["Decision clock", "A fictional time window showing when a decision or acknowledgement is needed for mission, risk, communication, or recovery reasons."],
  ["Scope register", "A fictional versioned list of confirmed, possible, Unknown, unaffected, excluded, and out-of-scope entities and relationships."],
  ["Evidence pack", "A fictional set of decision-relevant records with purpose, provenance, timing, source health, limitations, access, and retention."],
  ["Source-health inject", "A fictional change to a source such as Healthy, Conditional, Degraded, Blind, Conflicting, or Recovering."],
  ["Control objective", "A fictional desired defensive condition such as reduced risk, protected continuity, trusted recovery, accurate communication, or validated improvement."],
  ["Containment objective", "The fictional current risk or unsafe condition that an authorized action should reduce."],
  ["Clean-state gate", "A fictional identity, session, configuration, service, data, supplier, source, dependency, monitoring, privacy, continuity, or user condition required for recovery."],
  ["Recovery wave", "A fictional bounded group of users, identities, functions, integrations, or services restored under shared entry, validation, rollback, and exit criteria."],
  ["Break condition", "A fictional event that freezes, reverses, escalates, or reopens containment, communication, recovery, or closure."],
  ["Exercise success condition", "A fictional evidence-supported outcome demonstrating the intended decision or program capability."],
  ["Exercise failure condition", "A fictional missed gate, unsupported conclusion, unowned action, privacy problem, source-health error, or harmful decision requiring correction."],
  ["Hotwash", "A fictional immediate structured reflection capturing strengths, gaps, unanswered questions, and urgent actions after the exercise."],
  ["After-action review", "A fictional evidence-based review converting exercise observations into lessons, corrective actions, owners, tests, and improvement decisions."],
  ["Exercise metric", "A fictional defined measure of role activation, evidence use, scope quality, containment, communication, recovery, review, or improvement performance."],
  ["Exercise debt", "Fictional unresolved playbook, source, ownership, communication, recovery, evidence, supplier, validation, or governance work revealed by the simulation."],
  ["Reopen trigger", "A fictional late evidence, recurring condition, source recovery, failed validation, scope expansion, user effect, supplier problem, or overdue action that returns the scenario to active review."],
];

const simulationRoles = [
  {
    role: "Incident lead",
    mission: "Coordinate fictional activation, priorities, decisions, scope, containment, communications, recovery, risk, and closure.",
    authority: "Approve response coordination within the exercise plan and escalate beyond delegated authority.",
    evidenceNeed: "Current chronology, scope, source health, impacts, owners, decisions, and deadlines.",
    deliverable: "Incident command record and leadership decision brief.",
    failurePattern: "Becoming the only decision-maker or skipping domain owners.",
  },
  {
    role: "Technical lead",
    mission: "Translate fictional evidence into bounded technical questions, options, expected states, validation, and rollback.",
    authority: "Recommend technical actions and coordinate authorized technical owners.",
    evidenceNeed: "Identity, session, service, configuration, source, dependency, and validation records.",
    deliverable: "Technical decision and containment option matrix.",
    failurePattern: "Treating technical possibility as authority or confirmed scope.",
  },
  {
    role: "Identity owner",
    mission: "Evaluate fictional roles, groups, approvals, sponsors, lifecycle state, effective access, and sessions.",
    authority: "Approve identity actions within delegated policy.",
    evidenceNeed: "Role, group, approval, sponsor, session, source-health, and owner records.",
    deliverable: "Identity scope, validation, and clean-state record.",
    failurePattern: "Assuming role removal proves active-session closure.",
  },
  {
    role: "Service and continuity owner",
    mission: "Protect fictional critical workflows, users, accessibility, alternate processes, capacity, and service recovery.",
    authority: "Approve service and continuity decisions within the exercise.",
    evidenceNeed: "Service health, dependencies, users, backlog, support reports, recovery gates, and supplier state.",
    deliverable: "Continuity impact and user-acceptance record.",
    failurePattern: "Treating service availability as full recovery.",
  },
  {
    role: "Evidence coordinator",
    mission: "Maintain fictional evidence purpose, provenance, chronology, source health, access, custody, retention, corrections, and derived links.",
    authority: "Govern exercise evidence metadata and preservation records.",
    evidenceNeed: "Every material source, decision, communication, transfer, correction, and review record.",
    deliverable: "Evidence register, chronology, custody log, and source-health matrix.",
    failurePattern: "Preserving everything without purpose or minimum-necessary limits.",
  },
  {
    role: "Privacy and data reviewer",
    mission: "Evaluate fictional data categories, access, source health, sharing, retention, user communication, and acceptance.",
    authority: "Approve privacy conclusions and data-related communication within delegated policy.",
    evidenceNeed: "Data scope, source health, alternate evidence, transfers, suppliers, communications, and recovery state.",
    deliverable: "Privacy decision and data-state record.",
    failurePattern: "Calling a Blind period unaffected.",
  },
  {
    role: "Communications lead",
    mission: "Create fictional audience-specific facts, uncertainty, impact, guidance, decisions, corrections, and next updates.",
    authority: "Coordinate approved internal, user, supplier, leadership, and recovery communications.",
    evidenceNeed: "Approved facts, uncertainty, impact categories, decisions, privacy boundaries, and owner commitments.",
    deliverable: "Versioned communication package and acknowledgement tracker.",
    failurePattern: "Sending one technical message to every audience.",
  },
  {
    role: "Supplier relationship owner",
    mission: "Coordinate fictional provider evidence, status, commitments, confidentiality, escalation, and recovery dependencies.",
    authority: "Send bounded supplier requests and activate approved escalation paths.",
    evidenceNeed: "Dependency map, relevant period, local evidence, supplier statements, queue state, and privacy limits.",
    deliverable: "Supplier request, commitment log, and reconciliation record.",
    failurePattern: "Assigning causation before evidence or lacking an alternate.",
  },
  {
    role: "Recovery lead",
    mission: "Design fictional clean-state criteria, canary waves, validation, rollback, observation, acceptance, and reopen triggers.",
    authority: "Recommend or approve recovery waves within documented decision rights.",
    evidenceNeed: "Identity, session, configuration, service, data, supplier, source, dependency, monitoring, and user gates.",
    deliverable: "Recovery-wave plan and validation dashboard.",
    failurePattern: "Restoring broadly because the service responds.",
  },
  {
    role: "Observer and facilitator",
    mission: "Protect fictional exercise safety, timing, scoring consistency, and learning.",
    authority: "Pause the exercise for safety, clarification, or controller alignment.",
    evidenceNeed: "Scenario events, expected decisions, scoring criteria, participant records, and inject history.",
    deliverable: "Observer scorecard, hotwash record, and after-action evidence.",
    failurePattern: "Coaching participants toward answers or changing scores inconsistently.",
  },
];

const phases = [
  {
    phase: "Phase 0 — Preparation",
    objective: "Confirm fictional roles, alternates, playbooks, evidence sources, communication templates, continuity options, recovery gates, and simulation rules.",
    participantTasks: "Acknowledge roles, review authority, identify Blind-source branches, verify user and supplier contacts, and record exercise boundaries.",
    controllerInject: "One alternate identity owner is unavailable and one supplier contact is stale.",
    requiredDecision: "Activate alternates and determine whether readiness debt blocks the exercise.",
    success: "Critical roles, authority, alternates, evidence ownership, and safety boundaries are explicit.",
    breakCondition: "Participants use real systems, real contacts, real evidence, or unsupported operational actions.",
  },
  {
    phase: "Phase 1 — Detection and activation",
    objective: "Interpret a fictional alert without assuming intent, impact, or complete scope.",
    participantTasks: "Review the alert, source health, identity, service, destination, change context, and decision clock.",
    controllerInject: "A temporary recovery role remains Active near approval expiration, and one session reaches an administrative destination.",
    requiredDecision: "Routine triage, source-recovery issue, service issue, or incident coordination?",
    success: "Activation is bounded, evidence-based, owned, and time-stamped.",
    breakCondition: "The team declares breach, data access, or malicious intent from the alert alone.",
  },
  {
    phase: "Phase 2 — Initial scoping",
    objective: "Create the first fictional scope version using confirmed, possible, Unknown, unaffected, excluded, and out-of-scope categories.",
    participantTasks: "Register identity, role, group, session, service, destination, device, supplier, data, and user relationships.",
    controllerInject: "Group evidence is Degraded, the device relationship is possible, and one user reports delay.",
    requiredDecision: "Which entities enter confirmed, possible, and Unknown scope?",
    success: "Every entity has evidence, source health, confidence, owner, limitation, and next evidence.",
    breakCondition: "Every related entity is called affected.",
  },
  {
    phase: "Phase 3 — Priority and containment",
    objective: "Select the narrowest fictional authorized action that reduces supported current risk.",
    participantTasks: "Compare monitor, close session, restrict role, disable identity, limit service function, pause integration, and broad interruption options.",
    controllerInject: "The identity supports urgent student-assistance work and the service remains available.",
    requiredDecision: "Which action best balances risk, continuity, evidence, authority, validation, and rollback?",
    success: "The decision includes question, options, authority, expected state, validation, side effects, rollback, and residual risk.",
    breakCondition: "The broadest action is selected automatically without comparison.",
  },
  {
    phase: "Phase 4 — Communication and privacy",
    objective: "Create fictional analyst, user, supplier, privacy, recovery, and leadership updates.",
    participantTasks: "Separate facts, conclusions, uncertainty, non-proof, impact, guidance, privacy, decisions, and next updates.",
    controllerInject: "The protected-data source becomes Blind, and a draft message says no data was affected.",
    requiredDecision: "How should the data status and correction process be handled?",
    success: "Data becomes Unknown, the unsupported statement is corrected, and affected owners acknowledge the change.",
    breakCondition: "The Blind source is treated as proof of no access.",
  },
  {
    phase: "Phase 5 — Evidence preservation",
    objective: "Preserve only fictional evidence needed for bounded response questions.",
    participantTasks: "Build purpose, authority, scope, provenance, multi-time chronology, source health, access, custody, retention, transfer, and correction records.",
    controllerInject: "A broad request asks to preserve every user and supplier record indefinitely.",
    requiredDecision: "What minimum-necessary evidence should be preserved, by whom, for how long, and for which decision?",
    success: "Every item has purpose, source, owner, timing, health, supports, limitations, access, retention, and decision use.",
    breakCondition: "Preserve everything forever becomes the plan.",
  },
  {
    phase: "Phase 6 — Eradication and recovery",
    objective: "Separate containment, cause correction, clean state, staged recovery, validation, rollback, observation, and closure readiness.",
    participantTasks: "Build trigger, immediate cause, root cause, contributing conditions, control gaps, clean-state gates, and recovery waves.",
    controllerInject: "The service is reachable, but group evidence is Degraded, supplier backlog is unreconciled, and critical-user validation is incomplete.",
    requiredDecision: "Can recovery expand beyond the identity canary?",
    success: "Mandatory failed gates block or narrow expansion; rollback and owner acceptance remain ready.",
    breakCondition: "Service availability is called trusted recovery.",
  },
  {
    phase: "Phase 7 — Late evidence and reopening",
    objective: "Reassess fictional decisions when sources recover or evidence conflicts.",
    participantTasks: "Preserve prior versions, register recovered evidence, correct scope and communications, and identify affected recovery and risk decisions.",
    controllerInject: "Recovered group records conflict with the prior effective-access interpretation.",
    requiredDecision: "Does the case, recovery plan, communication set, or closure review reopen?",
    success: "Prior history remains visible and affected decisions are corrected with acknowledgement.",
    breakCondition: "Late evidence is ignored or silently overwrites the prior record.",
  },
  {
    phase: "Phase 8 — Post-incident review",
    objective: "Convert fictional response experience into strengths, gaps, lessons, corrective actions, and validation.",
    participantTasks: "Review chronology, decisions, source health, continuity, communication, preservation, recovery, metrics, and residual risk.",
    controllerInject: "Leadership asks who caused the incident and wants all actions closed after the review meeting.",
    requiredDecision: "How will the review preserve accountability without unsupported blame?",
    success: "Lessons become specific owned actions with alternates, due dates, validation, risk, and escalation.",
    breakCondition: "The review becomes personal blame or vague recommendations.",
  },
  {
    phase: "Phase 9 — Metrics and continuous improvement",
    objective: "Measure fictional exercise and program outcomes without rewarding shortcuts.",
    participantTasks: "Define populations, quality gates, source health, distributions, action validation, recurrence, gaming risk, and metric retirement.",
    controllerInject: "Closure speed is green, but three sampled cases lack owner validation.",
    requiredDecision: "Can the program claim improvement, and what metric redesign is required?",
    success: "The valid speed result is preserved while the overall quality claim remains Conditional.",
    breakCondition: "A green number is treated as proof of complete improvement.",
  },
];

const scenarioEvents = [
  {
    time: "08:00",
    inject: "Exercise start and role acknowledgement.",
    sourceState: "All fictional baseline sources Healthy.",
    evidence: "Role chart, authority matrix, playbook version, contact list, and exercise charter.",
    expectedAction: "Confirm primary and alternate owners, boundaries, communication channels, and pause authority.",
    observerFocus: "Role acceptance, alternate coverage, safety, and readiness debt.",
  },
  {
    time: "08:12",
    inject: "Temporary recovery role remains Active near approval expiration.",
    sourceState: "Role source Healthy; group source Conditional.",
    evidence: "Role NB-ROLE-17, identity NB-ID-042, approval end, sponsor, and owner.",
    expectedAction: "Open bounded triage and request session plus group evidence.",
    observerFocus: "Fact versus conclusion, owner assignment, and source-health awareness.",
  },
  {
    time: "08:18",
    inject: "One privileged session reaches coordination-admin.",
    sourceState: "Session source Healthy.",
    evidence: "Session NB-SES-881, service NB-SVC-07, destination, start time, and identity relationship.",
    expectedAction: "Consider incident activation and create initial confirmed scope.",
    observerFocus: "Activation rationale and avoidance of intent assumptions.",
  },
  {
    time: "08:25",
    inject: "Group evidence becomes Degraded because synchronization is delayed.",
    sourceState: "Group source Degraded.",
    evidence: "Source-health notice, delayed processing, and incomplete effective-access view.",
    expectedAction: "Qualify identity conclusions and assign alternate evidence.",
    observerFocus: "Whether missing evidence becomes proof of safe or unsafe state.",
  },
  {
    time: "08:31",
    inject: "One staff user reports a delayed support submission.",
    sourceState: "User-support source Conditional.",
    evidence: "One report, workflow, service state, alternate process, and support owner.",
    expectedAction: "Add possible limited user impact without broad disruption claim.",
    observerFocus: "Impact categorization and continuity ownership.",
  },
  {
    time: "08:37",
    inject: "Supplier integration reports delayed responses.",
    sourceState: "Supplier statement Conditional; local service source Healthy.",
    evidence: "Supplier NB-SUP-03 notice, dependency map, queue summary, and local health.",
    expectedAction: "Create a bounded supplier request and preserve alternative explanations.",
    observerFocus: "Fairness, confidentiality, deadline, acknowledgement, and escalation.",
  },
  {
    time: "08:43",
    inject: "Protected-data evidence source becomes Blind for the relevant period.",
    sourceState: "Data source Blind.",
    evidence: "Blind-period notice, data categories, owner, alternate evidence, and privacy questions.",
    expectedAction: "Classify protected-data access as Unknown and review message language.",
    observerFocus: "Source-health honesty and privacy decision quality.",
  },
  {
    time: "08:50",
    inject: "Leadership asks whether the service should be paused.",
    sourceState: "Service source Healthy; broader scope still Conditional.",
    evidence: "Current scope, service health, continuity, user report, supplier delay, and data Unknown.",
    expectedAction: "Present options, recommendation, mission effect, authority, validation, and next review.",
    observerFocus: "Decision framing and avoidance of broad default action.",
  },
  {
    time: "08:57",
    inject: "Scoped session containment is approved.",
    sourceState: "Identity and session evidence Healthy enough for session-level action.",
    evidence: "Decision record, authority, expected Closed state, continuity, rollback, and residual risk.",
    expectedAction: "Close the confirmed session conceptually and validate source-side state.",
    observerFocus: "Target precision, separation of duties, and expected-state validation.",
  },
  {
    time: "09:05",
    inject: "Service remains available after containment.",
    sourceState: "Service source Healthy; identity and data questions remain.",
    evidence: "Service health, critical workflow, user-support status, and session validation.",
    expectedAction: "Report successful session containment without declaring full eradication or recovery.",
    observerFocus: "Outcome precision and non-proof statements.",
  },
  {
    time: "09:12",
    inject: "Draft Update 2.1 states protected data was unaffected.",
    sourceState: "Data source still Blind.",
    evidence: "Draft message, source-health record, audience map, and privacy review.",
    expectedAction: "Reject the unsupported statement and prepare an accurate approved update.",
    observerFocus: "Communication approval and uncertainty language.",
  },
  {
    time: "09:20",
    inject: "Update 2.1 is discovered after distribution to leadership and recovery owners.",
    sourceState: "Communication record Healthy; data source Blind.",
    evidence: "Prior version, distribution, recipients, acknowledgement, and decision dependencies.",
    expectedAction: "Issue explicit correction, redistribute, obtain acknowledgement, and update connected records.",
    observerFocus: "Correction completeness and decision impact.",
  },
  {
    time: "09:30",
    inject: "A request asks to preserve every available record indefinitely.",
    sourceState: "Multiple sources mixed.",
    evidence: "Broad preservation request with no question, owner, fields, period, access, or retention.",
    expectedAction: "Pause and replace with purpose-based minimum-necessary preservation.",
    observerFocus: "Authority, privacy, proportionality, and lifecycle governance.",
  },
  {
    time: "09:42",
    inject: "Cause analysis identifies a lifecycle ownership gap.",
    sourceState: "Role, approval, session, and process evidence mostly Healthy.",
    evidence: "Trigger, immediate cause, root-cause hypothesis, contributing factors, and alternatives.",
    expectedAction: "Approve a bounded correction target with validation and rollback.",
    observerFocus: "Cause confidence, alternatives, and non-blaming analysis.",
  },
  {
    time: "10:00",
    inject: "Identity canary preparation is complete.",
    sourceState: "Role and session sources Healthy; group source Degraded.",
    evidence: "Known-good role, approval, sponsor, session plan, and rollback.",
    expectedAction: "Keep the canary Conditional until group-state limitations are resolved or accepted.",
    observerFocus: "Clean-state discipline and source-health gates.",
  },
  {
    time: "10:12",
    inject: "Supplier queue may contain duplicate submissions.",
    sourceState: "Supplier and queue evidence Conditional.",
    evidence: "Supplier statement, local queue count, data-integrity question, and recovery dependency.",
    expectedAction: "Freeze integration expansion and assign reconciliation.",
    observerFocus: "Data integrity, supplier fairness, ownership, and rollback.",
  },
  {
    time: "10:25",
    inject: "Critical-user canary sign-in succeeds, but submission workflow fails.",
    sourceState: "Identity Healthy; user workflow and data state Conditional.",
    evidence: "Canary result, user report, service response, queue state, and monitoring.",
    expectedAction: "Freeze expansion, preserve evidence, investigate dependency, and roll back or revise.",
    observerFocus: "Availability versus trusted recovery.",
  },
  {
    time: "10:40",
    inject: "Recovered group records conflict with the prior interpretation.",
    sourceState: "Group source Recovering then Conflicting.",
    evidence: "Historical records, prior scope, correction log, recovery decision, and communications.",
    expectedAction: "Preserve history, correct affected records, and reopen relevant decisions.",
    observerFocus: "Late evidence, correction propagation, and reopening.",
  },
  {
    time: "11:00",
    inject: "Leadership requests formal closure.",
    sourceState: "Several sources Healthy; supplier and data obligations remain Conditional.",
    evidence: "Observation, recovery gates, residual risk, action register, debt, and source reconciliation.",
    expectedAction: "Provide a closure-readiness recommendation and preserve open obligations.",
    observerFocus: "Closure conditions, risk acceptance, and reopen triggers.",
  },
  {
    time: "11:20",
    inject: "Exercise hotwash begins.",
    sourceState: "Exercise evidence pack complete enough for review.",
    evidence: "Observer notes, decision log, communications, scorecard, strengths, gaps, and actions.",
    expectedAction: "Capture immediate strengths, gaps, urgent corrections, and unanswered questions.",
    observerFocus: "Blameless accountability, specificity, and action ownership.",
  },
];

const scopeEntities = [
  {
    entity: "NB-ID-042",
    type: "Fictional identity",
    status: "Confirmed",
    evidence: "Role and session records connect the identity to the relevant session.",
    sourceHealth: "Healthy",
    limitation: "Does not prove harmful intent or every action.",
    owner: "Identity owner",
    nextEvidence: "Role, group, approval, session, and owner validation.",
  },
  {
    entity: "NB-SES-881",
    type: "Fictional privileged session",
    status: "Confirmed",
    evidence: "Session source records service, destination, identity, and time.",
    sourceHealth: "Healthy",
    limitation: "Does not prove protected-data access.",
    owner: "Identity and service owners",
    nextEvidence: "Containment validation and session-end confirmation.",
  },
  {
    entity: "NB-SVC-07",
    type: "Fictional service",
    status: "Confirmed relationship",
    evidence: "The confirmed session reached one administrative destination within the service.",
    sourceHealth: "Healthy",
    limitation: "Relationship does not prove service-wide impact.",
    owner: "Service owner",
    nextEvidence: "Administrative state, user workflows, errors, and recovery validation.",
  },
  {
    entity: "coordination-admin",
    type: "Fictional destination",
    status: "Confirmed",
    evidence: "Session source identifies the destination.",
    sourceHealth: "Healthy",
    limitation: "Destination does not prove a specific action occurred.",
    owner: "Service owner",
    nextEvidence: "Function-level and change-context review.",
  },
  {
    entity: "recovery-admin",
    type: "Fictional group",
    status: "Unknown / Conditional",
    evidence: "Group relationship may affect effective access.",
    sourceHealth: "Degraded then Recovering",
    limitation: "Exact state during the key period is not initially reliable.",
    owner: "Identity platform owner",
    nextEvidence: "Recovered historical group records and alternate identity evidence.",
  },
  {
    entity: "NB-DEV-14",
    type: "Fictional device",
    status: "Possible",
    evidence: "One session relationship may connect the device.",
    sourceHealth: "Conditional",
    limitation: "The relationship is not independently confirmed.",
    owner: "Technical owner",
    nextEvidence: "Qualified device-session ownership record.",
  },
  {
    entity: "NB-SUP-03",
    type: "Fictional supplier integration",
    status: "Possible dependency",
    evidence: "Supplier reports delayed responses and the service depends on the integration.",
    sourceHealth: "Conditional",
    limitation: "Does not prove supplier causation.",
    owner: "Supplier relationship owner",
    nextEvidence: "Bounded supplier evidence and local queue reconciliation.",
  },
  {
    entity: "Protected student-support records",
    type: "Fictional data category",
    status: "Unknown",
    evidence: "The decision-critical data source is Blind for part of the relevant period.",
    sourceHealth: "Blind",
    limitation: "Supports neither access nor no-access conclusions.",
    owner: "Data and privacy owners",
    nextEvidence: "Alternate evidence, source recovery, and historical reconciliation.",
  },
  {
    entity: "One staff support user",
    type: "Fictional user",
    status: "Possible limited impact",
    evidence: "One report describes a delayed submission.",
    sourceHealth: "Conditional",
    limitation: "Does not represent all users or prove incident causation.",
    owner: "Service and continuity owners",
    nextEvidence: "Canary testing, support reports, and workflow validation.",
  },
  {
    entity: "Broader user population",
    type: "Fictional users",
    status: "Not confirmed affected",
    evidence: "No broad error increase or widespread reports exist.",
    sourceHealth: "Healthy enough for broad service-health question",
    limitation: "Does not prove every user was unaffected.",
    owner: "Service owner",
    nextEvidence: "Segmented user acceptance and observation.",
  },
];

const decisionPoints = [
  {
    id: "DEC-01",
    decision: "Activate fictional incident coordination",
    question: "Does the evidence justify structured response beyond routine triage?",
    options: "Continue routine triage, treat as source issue, treat as service issue, or activate incident coordination.",
    evidence: "Role remains Active, one privileged session reaches an administrative destination, source health is mixed, and mission impact is not yet confirmed.",
    authority: "Incident lead within the exercise charter.",
    choice: "Activate bounded incident coordination.",
    expectedState: "Named owners, current scope, decision clocks, evidence questions, communication plan, and next review.",
    validation: "Role acknowledgements, scope version, decision log, and owner deadlines exist.",
    rollback: "Return to routine ownership if later evidence shows no incident-response coordination need.",
    residualRisk: "Intent, data access, complete scope, and supplier relationship remain unresolved.",
  },
  {
    id: "DEC-02",
    decision: "Classify protected-data status",
    question: "Can protected-data access be called affected or unaffected?",
    options: "Affected, possible, unaffected, or Unknown.",
    evidence: "The decision-critical source is Blind for part of the relevant period.",
    authority: "Privacy and data owner with incident coordination.",
    choice: "Classify as Unknown.",
    expectedState: "Messages, scope, recovery, leadership, and evidence records preserve the uncertainty.",
    validation: "No approved message says unaffected without alternate qualified evidence.",
    rollback: "Revise classification when recovered or alternate evidence supports a bounded conclusion.",
    residualRisk: "Historical data access remains unresolved until source recovery or accepted limitation.",
  },
  {
    id: "DEC-03",
    decision: "Select fictional containment",
    question: "Which authorized action reduces the strongest supported current risk with the smallest mission blast radius?",
    options: "Monitor, close the confirmed session, restrict role, disable identity, limit service function, pause integration, or pause service.",
    evidence: "One session is confirmed; the identity supports urgent work; broad service impact is not confirmed.",
    authority: "Identity owner and incident lead under the exercise matrix.",
    choice: "Close the confirmed session and preserve broader identity availability.",
    expectedState: "The session reaches Closed while critical service continuity remains stable.",
    validation: "Source-side session state, identity state, service health, user impact, and monitoring agree.",
    rollback: "Restore only an approved replacement session when business and technical gates pass.",
    residualRisk: "Role, group, data, device, supplier, and recurrence questions remain.",
  },
  {
    id: "DEC-04",
    decision: "Issue fictional user guidance",
    question: "Do users need an advisory before broad impact is confirmed?",
    options: "No message, broad outage notice, or limited plain-language guidance.",
    evidence: "One user reports delay, the service remains available, and an alternate process exists.",
    authority: "Service and communications owners with privacy review.",
    choice: "Issue limited guidance for delayed submissions and the alternate process.",
    expectedState: "Users know what they may notice, what to do, what not to do, where to get help, and when the next update arrives.",
    validation: "Support owner and accessibility reviewer acknowledge the approved message.",
    rollback: "Correct or retract guidance if service conditions or evidence materially change.",
    residualRisk: "The complete affected user population remains unknown.",
  },
  {
    id: "DEC-05",
    decision: "Correct fictional Update 2.1",
    question: "How should an unsupported unaffected statement be handled?",
    options: "Quiet edit, delay correction, or issue explicit versioned correction.",
    evidence: "Update 2.1 reached decision owners while the data source was Blind.",
    authority: "Incident, privacy, and communications leads.",
    choice: "Issue explicit correction changing the status to Unknown.",
    expectedState: "Every affected recipient receives the current version and understands decision impact.",
    validation: "Distribution, acknowledgement, connected-record updates, and version history are complete.",
    rollback: "Not applicable to history; a later evidence-based update may supersede the correction.",
    residualRisk: "Some recipients may continue using the prior statement until acknowledgement completes.",
  },
  {
    id: "DEC-06",
    decision: "Approve fictional evidence preservation scope",
    question: "Which evidence is necessary for the response questions?",
    options: "Preserve everything, preserve nothing until certainty, or preserve bounded decision-relevant records.",
    evidence: "Role, session, group, service, data-source limitation, supplier, user, communication, and recovery records support material decisions.",
    authority: "Evidence coordinator with domain, privacy, and incident owners.",
    choice: "Preserve the minimum necessary bounded evidence package.",
    expectedState: "Every item has purpose, provenance, timing, source health, access, retention, limitations, and decision use.",
    validation: "Evidence register, custody, access, and retention records pass review.",
    rollback: "Correct scope or disposition when purpose, authority, or evidence needs change.",
    residualRisk: "Source recovery may add historical records requiring correction or reopening.",
  },
  {
    id: "DEC-07",
    decision: "Approve fictional recovery expansion",
    question: "Can recovery move beyond the identity canary?",
    options: "Full expansion, bounded exception, remain at current wave, or rollback.",
    evidence: "Service availability passes, but group, supplier queue, protected-data, and critical-user gates remain incomplete.",
    authority: "Recovery lead with technical, service, privacy, supplier, and business acceptance owners.",
    choice: "Remain at Wave 1 Conditional.",
    expectedState: "No broader users or integrations restore until mandatory gates pass or an explicit exception is approved.",
    validation: "Recovery dashboard, owner acknowledgements, rollback readiness, and failed-gate records are current.",
    rollback: "Close the canary session and return to scoped containment if a break condition occurs.",
    residualRisk: "Mission delay and recovery debt continue while gates remain open.",
  },
  {
    id: "DEC-08",
    decision: "Respond to fictional canary failure",
    question: "What happens when sign-in succeeds but the critical submission workflow fails?",
    options: "Expand anyway, freeze and investigate, remove the gate, or close the incident.",
    evidence: "Canary identity passes; service workflow and queue integrity do not.",
    authority: "Recovery, service, data, and incident leads.",
    choice: "Freeze expansion and investigate the workflow plus queue state.",
    expectedState: "Evidence is preserved, users remain on the alternate workflow, and rollback remains available.",
    validation: "The failed workflow, queue, monitoring, user effect, and owner decisions are recorded.",
    rollback: "Return to the prior accepted wave.",
    residualRisk: "Recovery time increases, but a broader inconsistent state is avoided.",
  },
  {
    id: "DEC-09",
    decision: "Reopen after fictional late evidence",
    question: "Which prior conclusions and decisions are affected by recovered group records?",
    options: "Ignore, overwrite history, correct selected records, or reopen all relevant decisions.",
    evidence: "Recovered records conflict with the prior effective-access interpretation.",
    authority: "Incident lead with identity, evidence, recovery, privacy, and communications owners.",
    choice: "Preserve history, correct affected artifacts, and reopen relevant decisions.",
    expectedState: "Scope, communication, recovery, risk, and closure records reflect the new evidence.",
    validation: "Correction propagation and owner acknowledgement are complete.",
    rollback: "Prior versions remain preserved; no silent replacement occurs.",
    residualRisk: "Further historical records may still change the conclusion.",
  },
  {
    id: "DEC-10",
    decision: "Declare fictional closure readiness",
    question: "Are response, recovery, evidence, communication, improvement, and risk obligations complete enough for closure?",
    options: "Close, close conditionally, remain active, or reopen.",
    evidence: "Containment is stable, but source reconciliation, supplier work, several actions, and observation remain open.",
    authority: "Closure authority defined by the exercise charter.",
    choice: "Maintain Conditional closure readiness.",
    expectedState: "Open obligations transfer into owned records with due dates, risk, escalation, and reopen triggers.",
    validation: "Closure checklist, debt, risk, archive, action owners, and observation are complete.",
    rollback: "Return to active response when a reopen trigger occurs.",
    residualRisk: "Late evidence, recurrence, supplier delay, or failed corrective action may change the case.",
  },
];

const evidencePack = [
  {
    id: "SIM-E01",
    item: "Fictional role and approval record",
    purpose: "Support activation, identity scope, cause, containment, and recovery decisions.",
    provenance: "Identity-role source supplied by the identity owner.",
    timing: "Event 08:12; collected 08:13; processed 08:14.",
    health: "Healthy",
    supports: "Temporary recovery role remained Active near approval expiration.",
    limits: "Does not prove exercised privilege, group state, or intent.",
    access: "Incident, identity, evidence, and recovery owners.",
    retention: "Through corrective-action validation and closure review.",
  },
  {
    id: "SIM-E02",
    item: "Fictional privileged-session record",
    purpose: "Support activation, scope, containment, validation, and recovery.",
    provenance: "Session source supplied by identity and service owners.",
    timing: "Event 08:18; collected 08:19; processed 08:20.",
    health: "Healthy",
    supports: "One session connected the identity, service, destination, and period.",
    limits: "Does not prove data access or every action within the session.",
    access: "Incident, identity, service, evidence, and recovery owners.",
    retention: "Through observation, review, and corrective-action validation.",
  },
  {
    id: "SIM-E03",
    item: "Fictional group-source health record",
    purpose: "Support effective-access, recovery, source-quality, and reopening decisions.",
    provenance: "Identity platform owner and source-health monitor.",
    timing: "Degraded at 08:25; Recovering at 10:40.",
    health: "Degraded then Recovering and Conflicting",
    supports: "Initial group conclusions require qualification and later reassessment.",
    limits: "Does not prove exact effective state until reconciliation.",
    access: "Identity, incident, evidence, recovery, and review owners.",
    retention: "Through historical reconciliation and review closure.",
  },
  {
    id: "SIM-E04",
    item: "Fictional service and user-impact record",
    purpose: "Support continuity, communication, containment side effects, and recovery acceptance.",
    provenance: "Service-health and user-support sources.",
    timing: "Service checks 08:31-10:25; user report 08:31.",
    health: "Service Healthy; user sample Conditional",
    supports: "No broad outage is confirmed, but limited workflow impact is possible.",
    limits: "Does not represent every user or prove incident causation.",
    access: "Service, continuity, communications, recovery, and incident owners.",
    retention: "Through user acceptance and post-incident review.",
  },
  {
    id: "SIM-E05",
    item: "Fictional protected-data source limitation",
    purpose: "Support privacy, scope, communication, recovery, evidence, and leadership decisions.",
    provenance: "Data owner and source-health record.",
    timing: "Blind period begins 08:43.",
    health: "Blind",
    supports: "Protected-data access remains Unknown for the period.",
    limits: "Supports neither access nor no-access conclusions.",
    access: "Data, privacy, incident, evidence, communications, and leadership owners.",
    retention: "Through source recovery, privacy acceptance, and closure review.",
  },
  {
    id: "SIM-E06",
    item: "Fictional supplier and queue record",
    purpose: "Support dependency, alternative explanation, communication, data integrity, and recovery.",
    provenance: "Supplier statement and local integration owner.",
    timing: "Supplier notice 08:37; queue concern 10:12.",
    health: "Conditional",
    supports: "The integration is delayed and queue reconciliation is required.",
    limits: "Does not prove supplier causation or duplicate records.",
    access: "Supplier, service, data, privacy, recovery, and incident owners.",
    retention: "Through reconciliation and supplier corrective action.",
  },
  {
    id: "SIM-E07",
    item: "Fictional communication correction record",
    purpose: "Support message accountability, decision correction, and acknowledgement.",
    provenance: "Approved communications versions 2.1 and 3.2.",
    timing: "Draft 09:12; distributed then corrected at 09:20.",
    health: "Healthy",
    supports: "The prior unaffected statement was unsupported and explicitly corrected.",
    limits: "Does not prove every recipient changed its decision.",
    access: "Affected owners, communications, privacy, incident, recovery, and archive reviewers.",
    retention: "Through acknowledgement, review, and communication corrective action.",
  },
  {
    id: "SIM-E08",
    item: "Fictional containment validation record",
    purpose: "Support session-level outcome, continuity, recovery preparation, and review.",
    provenance: "Session, identity, service, monitoring, and decision records.",
    timing: "Approved 08:57; validated 09:05.",
    health: "Healthy for session-level question",
    supports: "The confirmed session reached Closed and service continuity remained stable.",
    limits: "Does not prove eradication, complete identity cleanup, or trusted recovery.",
    access: "Incident, identity, service, recovery, evidence, and review owners.",
    retention: "Through review and corrective-action validation.",
  },
  {
    id: "SIM-E09",
    item: "Fictional recovery gate and canary record",
    purpose: "Support recovery expansion, rollback, user acceptance, and closure readiness.",
    provenance: "Recovery lead and domain-owner gate records.",
    timing: "Canary preparation 10:00; workflow failure 10:25.",
    health: "Conditional",
    supports: "Identity sign-in passes while workflow and data-integrity gates fail.",
    limits: "Does not prove all recovery domains failed.",
    access: "Recovery, service, identity, data, supplier, incident, and leadership owners.",
    retention: "Through observation and recovery-debt review.",
  },
  {
    id: "SIM-E10",
    item: "Fictional exercise observer scorecard",
    purpose: "Support hotwash, after-action review, corrective actions, metrics, and exercise redesign.",
    provenance: "Calibrated observers using versioned criteria.",
    timing: "Recorded throughout the simulation and finalized after hotwash.",
    health: "Conditional until observer reconciliation",
    supports: "Shows decision quality, strengths, gaps, missed gates, and action needs.",
    limits: "Does not prove participant capability in every future condition.",
    access: "Facilitator, program owner, participants, and approved leadership reviewers.",
    retention: "Through action validation and exercise redesign.",
  },
];

const communicationSet = [
  {
    type: "Initial analyst situation report",
    audience: "Incident, technical, identity, service, evidence, privacy, and continuity roles.",
    message: "Fictional Northbridge confirms identity NB-ID-042, temporary role NB-ROLE-17, session NB-SES-881, service NB-SVC-07, and destination coordination-admin within the current review scope. Intent, protected-data access, broader user impact, device relationship, supplier causation, and complete effective access are not confirmed. Group evidence is Degraded. Owners and next evidence are assigned.",
    approval: "Incident lead with technical and evidence review.",
    nextUpdate: "At the next material scope change or 08:35.",
    qualityGate: "Facts, Unknowns, source health, owners, and next decisions are visible.",
  },
  {
    type: "Technical owner request",
    audience: "Identity platform owner.",
    message: "Determine whether recovery-admin provided effective access to NB-ID-042 from 08:00 to 08:30. The group source is Degraded, so identify alternate evidence and state what the result supports and does not prove. A decision-ready response is needed by 09:00 because containment and recovery depend on this question.",
    approval: "Technical lead and incident lead.",
    nextUpdate: "Owner acknowledgement within ten fictional minutes.",
    qualityGate: "The question, period, source limitation, deadline, purpose, and decision consequence are bounded.",
  },
  {
    type: "User advisory",
    audience: "Fictional student-support service users and support staff.",
    message: "Some users may experience delays when submitting requests. Continue using the service for urgent work and use the published alternate support process if a submission does not complete. Do not submit the same request repeatedly. No broad service interruption is currently confirmed. The next update will be provided at 10:00 or sooner if guidance changes.",
    approval: "Service, continuity, accessibility, communications, incident, and privacy reviewers.",
    nextUpdate: "10:00 or meaningful guidance change.",
    qualityGate: "Plain language, safe action, accessibility, support, limitations, and timing pass.",
  },
  {
    type: "Supplier evidence request",
    audience: "Approved fictional supplier role.",
    message: "Northbridge requests a bounded status and evidence update for integration NB-SUP-03 from 08:00 to 10:30. Please confirm delay periods, queue behavior, replay or duplication concerns, current service state, and expected recovery timing. This request is limited to the Student Assistance Coordination dependency. Acknowledgement is requested by 09:00.",
    approval: "Supplier owner with service, privacy, data, and incident review.",
    nextUpdate: "Escalate if acknowledgement is missed.",
    qualityGate: "Purpose, period, fields, confidentiality, deadline, owner, and escalation are explicit.",
  },
  {
    type: "Leadership decision brief",
    audience: "Fictional leadership and risk authority.",
    message: "One privileged session is confirmed and contained. No broad service interruption is confirmed. Protected-data access is Unknown because the required source is Blind. Group evidence is Degraded, one user delay is possible, and supplier backlog remains unresolved. The recommended decision is to continue narrow containment and hold recovery at Wave 1 until required gates pass.",
    approval: "Incident lead with service, privacy, recovery, supplier, and communications review.",
    nextUpdate: "At the 10:30 recovery decision or earlier if user guidance changes.",
    qualityGate: "Decision, evidence, uncertainty, mission effect, recommendation, consequence, and next review are clear.",
  },
  {
    type: "Correction notice",
    audience: "Every fictional recipient of Update 2.1.",
    message: "Correction to Update 2.1: the prior message stated that protected-data access was unaffected. That statement was not supported because the required source is Blind for part of the relevant period. The correct current status is Unknown. User guidance is unchanged. Privacy and evidence owners are reviewing alternate records. Decision-owner acknowledgement is required.",
    approval: "Incident, privacy, communications, and policy owners.",
    nextUpdate: "Acknowledgement review at 09:40.",
    qualityGate: "Prior error, corrected statement, evidence reason, decision effect, unchanged guidance, owner, and next update are explicit.",
  },
  {
    type: "Recovery wave update",
    audience: "Recovery, identity, service, data, supplier, monitoring, continuity, privacy, and leadership roles.",
    message: "Recovery remains at Wave 1 Conditional. Identity and session canary preparation passes. Group, protected-data, supplier-queue, and critical-user workflow gates remain incomplete. No expansion is authorized. Rollback remains available and the next recovery decision occurs at 10:40.",
    approval: "Recovery and incident leads with required domain owners.",
    nextUpdate: "10:40 or upon a failed break condition.",
    qualityGate: "Passing and failing gates, authority, rollback, and next decision are visible.",
  },
  {
    type: "Late-evidence reopening notice",
    audience: "Incident, identity, privacy, communications, recovery, evidence, leadership, and closure owners.",
    message: "Recovered group records conflict with the prior effective-access interpretation. Prior versions remain preserved. Scope, identity recovery, communication, residual-risk, and closure records are reopening for bounded review. No conclusion should be silently replaced. The next approved update follows owner reconciliation.",
    approval: "Incident lead with identity and evidence owners.",
    nextUpdate: "At the reconciliation decision or within thirty fictional minutes.",
    qualityGate: "New evidence, affected artifacts, preserved history, owner, and reopening boundary are explicit.",
  },
  {
    type: "Closure-readiness brief",
    audience: "Fictional closure authority and leadership.",
    message: "Session containment and service continuity are validated. Formal closure is not yet recommended because source reconciliation, supplier queue review, corrective-action validation, observation, and one acknowledgement remain open. These obligations have named owners, dates, residual risk, escalation, and reopen triggers.",
    approval: "Incident lead with recovery, evidence, privacy, service, supplier, and risk review.",
    nextUpdate: "At the next closure-gate review.",
    qualityGate: "Completed and incomplete obligations, owners, risks, and reopen triggers are explicit.",
  },
];

const recoveryGates = [
  {
    domain: "Identity",
    entry: "Fictional role, group, approval, sponsor, owner, effective access, emergency access, and lifecycle state are current.",
    evidence: "Role, group, approval, sponsor, owner, session, source-health, and exception records.",
    status: "Conditional",
    validation: "Independent review confirms only approved access remains.",
    breakCondition: "Unexpected role, group, approval, owner, or effective-access conflict.",
    rollback: "Close canary sessions and return to scoped containment.",
  },
  {
    domain: "Sessions",
    entry: "Prior fictional sessions are Closed or explicitly accepted.",
    evidence: "Session identities, services, destinations, start/end times, and containment validation.",
    status: "Pass",
    validation: "No unexpected active session remains; new canary session matches current authorization.",
    breakCondition: "Stale or unexplained session reappears.",
    rollback: "Close the canary session.",
  },
  {
    domain: "Configuration",
    entry: "Fictional identity and service configuration match an approved known-good state.",
    evidence: "Baseline, change history, owner approval, dependencies, and exceptions.",
    status: "Pass",
    validation: "Independent comparison shows expected scoped values.",
    breakCondition: "Unexpected drift or dependency failure.",
    rollback: "Return to the prior accepted configuration.",
  },
  {
    domain: "Service",
    entry: "Critical fictional functions, administrative paths, errors, capacity, and dependencies are understood.",
    evidence: "Service health, function tests, monitoring, continuity, and owner acceptance.",
    status: "Conditional",
    validation: "Critical-user canary completes the required workflow.",
    breakCondition: "Critical workflow, capacity, or administrative-state failure.",
    rollback: "Return users to the alternate process.",
  },
  {
    domain: "Data and privacy",
    entry: "Fictional data categories, access, integrity, queues, transfers, source limitations, and privacy acceptance are documented.",
    evidence: "Data source, alternate evidence, queue state, privacy review, and integrity checks.",
    status: "Fail / Unknown",
    validation: "Data state supports the required mission and privacy conclusion.",
    breakCondition: "Blind evidence, integrity mismatch, unexplained access, or exposure concern.",
    rollback: "Freeze the data-dependent recovery wave.",
  },
  {
    domain: "Supplier",
    entry: "Fictional provider status, local dependency, queue, commitment, fallback, and owner are current.",
    evidence: "Supplier notice, local integration state, queue, commitment, and validation.",
    status: "Fail / Conditional",
    validation: "Integration and queue operate within accepted limits.",
    breakCondition: "Queue duplication, missed commitment, privacy issue, or service degradation.",
    rollback: "Pause the integration and use the local fallback.",
  },
  {
    domain: "Evidence sources",
    entry: "Decision-critical fictional sources are Healthy or their limitations are explicitly accepted.",
    evidence: "Freshness, completeness, timing, schema, coverage, conflicts, Blind periods, and recovery.",
    status: "Conditional",
    validation: "Required sources support identity, data, supplier, service, and monitoring decisions.",
    breakCondition: "A mandatory source becomes Blind, Conflicting, or unable to support a gate.",
    rollback: "Freeze or narrow the wave.",
  },
  {
    domain: "Dependencies",
    entry: "Fictional identity, service, supplier, data, continuity, communication, monitoring, and owner dependencies are available or have fallbacks.",
    evidence: "Architecture, owner statements, capacity, supplier state, source health, and fallback tests.",
    status: "Pass",
    validation: "Dependencies remain stable during the canary.",
    breakCondition: "Dependency or fallback failure.",
    rollback: "Return to the last accepted wave.",
  },
  {
    domain: "Monitoring",
    entry: "Fictional monitoring can observe expected state, break conditions, source health, user impact, and recovery milestones.",
    evidence: "Detection logic, dashboards, source health, routing, owners, and test signals.",
    status: "Pass",
    validation: "Expected canary signals and break conditions remain visible.",
    breakCondition: "Blind monitoring, missed signal, or unowned alert.",
    rollback: "Freeze expansion until visibility returns.",
  },
  {
    domain: "Business and user acceptance",
    entry: "Fictional critical users, accessibility, alternate workflows, capacity, deadlines, and limitations are understood.",
    evidence: "Canary tests, support reports, backlog, accessibility review, and owner acceptance.",
    status: "Fail",
    validation: "Critical users complete essential tasks within accepted quality and timing.",
    breakCondition: "Critical workflow, accessibility, queue, or guidance failure.",
    rollback: "Return users to the alternate workflow.",
  },
];

const observerScorecard = [
  {
    dimension: "Preparation and roles",
    excellent: "Fictional primary and alternate owners acknowledge authority, limits, decision clocks, evidence needs, and handoffs.",
    developing: "Roles exist but alternates, authority, or handoffs are incomplete.",
    unsafe: "Participants act outside role authority or use real systems.",
    evidence: "Role chart, acknowledgements, alternate activation, and observer notes.",
  },
  {
    dimension: "Evidence and source health",
    excellent: "Fictional evidence is purposeful, traceable, time-aware, source-qualified, and linked to supports plus limitations.",
    developing: "Evidence is present but timing, provenance, source health, or non-proof statements are incomplete.",
    unsafe: "Missing evidence becomes proof or real evidence is introduced.",
    evidence: "Evidence register, chronology, source-health matrix, custody, and corrections.",
  },
  {
    dimension: "Scoping",
    excellent: "Fictional confirmed, possible, Unknown, unaffected, excluded, and out-of-scope categories are versioned and evidence-supported.",
    developing: "Categories exist but relationships, confidence, owners, or next evidence are weak.",
    unsafe: "All related entities are labeled affected.",
    evidence: "Scope register, relationship map, versions, owners, and change log.",
  },
  {
    dimension: "Prioritization and containment",
    excellent: "Fictional options are compared and the narrowest effective authorized action is validated with continuity and rollback.",
    developing: "A reasonable action is selected but options, side effects, or validation are incomplete.",
    unsafe: "The broadest action is automatic or authority is invented.",
    evidence: "Decision matrix, approval, expected state, validation, continuity, and residual risk.",
  },
  {
    dimension: "Communication and privacy",
    excellent: "Fictional messages are accurate, audience-specific, approved, versioned, corrected, acknowledged, privacy-aware, and actionable.",
    developing: "Messages are mostly accurate but audience, approval, accessibility, acknowledgement, or next update is weak.",
    unsafe: "Blind data is called unaffected or sensitive detail is shared unnecessarily.",
    evidence: "Message set, approvals, distribution, acknowledgements, corrections, and privacy review.",
  },
  {
    dimension: "Evidence preservation",
    excellent: "Fictional preservation is purpose-based, minimum necessary, authorized, access-controlled, retained, and correction-ready.",
    developing: "Evidence is registered but access, transfer, retention, or disposition is incomplete.",
    unsafe: "Preserve everything forever or operational collection is attempted.",
    evidence: "Preservation charter, register, custody, access, retention, and transfer records.",
  },
  {
    dimension: "Recovery",
    excellent: "Fictional clean-state gates, canary waves, validation, rollback, user acceptance, supplier reconciliation, and observation control restoration.",
    developing: "Recovery is staged but one domain owner, gate, or rollback detail is weak.",
    unsafe: "Service availability is called full recovery or failed mandatory gates are ignored.",
    evidence: "Recovery plan, gate matrix, canary results, rollback, observation, and acceptance.",
  },
  {
    dimension: "Review and improvement",
    excellent: "Fictional strengths and gaps become owned, testable, validated, measurable actions with residual risk and reopening.",
    developing: "Lessons exist but actions, alternates, validation, or escalation are incomplete.",
    unsafe: "The review assigns unsupported blame or closes actions at implementation.",
    evidence: "Hotwash, after-action review, action register, tests, metrics, debt, and risk.",
  },
];

const validationCases = [
  ["SIM-T01", "Role unavailable", "A fictional primary identity owner is unavailable at exercise start.", "Activate the documented alternate, record acknowledgement, authority, and any readiness debt.", "Role continuity"],
  ["SIM-T02", "Alert uncertainty", "A fictional alert shows stale authority and one administrative session.", "Activate bounded coordination without claiming intent, data access, or complete impact.", "Activation quality"],
  ["SIM-T03", "Degraded group source", "Fictional effective-access evidence is delayed and incomplete.", "Keep identity conclusions Conditional and assign alternate evidence plus source recovery.", "Source-health honesty"],
  ["SIM-T04", "One user report", "One fictional staff user reports a delayed submission.", "Classify possible limited impact and activate continuity review without broad outage language.", "Impact accuracy"],
  ["SIM-T05", "Blind data source", "A fictional draft says no protected data was affected.", "Reject the statement, classify status as Unknown, and prepare an accurate approved update.", "Privacy and evidence"],
  ["SIM-T06", "Broad containment request", "Leadership asks whether the entire fictional service should pause.", "Compare narrower options, mission effect, authority, validation, rollback, and residual risk.", "Proportional containment"],
  ["SIM-T07", "Preserve everything request", "A fictional responder wants every user and supplier record indefinitely.", "Replace the request with purpose-based minimum-necessary preservation and retention.", "Evidence governance"],
  ["SIM-T08", "Supplier delay", "A fictional provider reports slow integration responses but causation is unconfirmed.", "Send a bounded request, preserve local evidence, assign deadlines, and avoid blame.", "Supplier coordination"],
  ["SIM-T09", "Service reachable", "The fictional service responds while data, supplier, group, and user gates remain incomplete.", "Keep recovery Conditional and block or narrow expansion.", "Recovery integrity"],
  ["SIM-T10", "Canary workflow failure", "A fictional canary signs in but cannot complete the critical workflow.", "Freeze expansion, preserve evidence, investigate, and roll back or revise.", "Staged recovery"],
  ["SIM-T11", "Late conflicting evidence", "Recovered fictional group records challenge an earlier conclusion.", "Preserve history, issue corrections, update affected decisions, and reopen bounded review.", "Historical continuity"],
  ["SIM-T12", "Blame request", "Leadership asks which fictional person caused the incident.", "Redirect to evidence, decision-time context, system conditions, accountability, and actions.", "Blameless review"],
  ["SIM-T13", "Green closure metric", "Fictional closure speed improves while quality samples lack owner validation.", "Preserve the speed result but reject the complete improvement claim and revise gates.", "Balanced measurement"],
  ["SIM-T14", "Action implemented", "A fictional corrective action updates a playbook but has not been tested.", "Keep it In validation until outcome evidence and owner acceptance exist.", "Improvement quality"],
  ["SIM-T15", "Closure pressure", "Fictional containment is stable but source, supplier, action, and observation obligations remain open.", "Maintain Conditional closure readiness with owners, dates, risk, escalation, and reopen triggers.", "Closure governance"],
  ["SIM-T16", "Public portfolio", "A student plans to adapt a real incident exercise package.", "Fail portfolio validation and invent every organization, role, system, record, action, metric, date, and outcome.", "Confidentiality and safety"],
];

const commonMistakes = [
  {
    mistake: "The simulation becomes a technical puzzle",
    observation: "Participants focus only on identifying the fictional system condition.",
    impact: "Roles, authority, continuity, privacy, communication, evidence, recovery, leadership, and improvement disappear.",
    correction: "Score the complete incident-response lifecycle, not one technical answer.",
  },
  {
    mistake: "Controllers coach the answer",
    observation: "The fictional controller explains which containment or recovery decision participants should choose.",
    impact: "The exercise no longer measures participant reasoning or playbook quality.",
    correction: "Controllers provide approved injects and clarifications, not hidden solutions.",
  },
  {
    mistake: "Every inject becomes confirmed scope",
    observation: "A fictional supplier mention, user report, device relationship, and Blind source are all labeled affected.",
    impact: "Scope becomes inflated and decisions lose evidence discipline.",
    correction: "Use confirmed, possible, Unknown, unaffected, excluded, and out-of-scope categories.",
  },
  {
    mistake: "The broadest action looks strongest",
    observation: "Participants pause the fictional service before comparing session, role, function, supplier, and continuity options.",
    impact: "Mission disruption and evidence loss may exceed the supported risk.",
    correction: "Require an option matrix, authority, expected state, validation, rollback, and residual risk.",
  },
  {
    mistake: "One message goes to everyone",
    observation: "Fictional users receive raw identifiers while leadership receives unstructured technical detail.",
    impact: "Recipients lack the guidance or decision information they need and sensitive details spread.",
    correction: "Tailor audience, purpose, facts, uncertainty, guidance, approval, and next update.",
  },
  {
    mistake: "Preservation means unlimited collection",
    observation: "Participants preserve every fictional record with no question, owner, access, or retention.",
    impact: "Privacy, review burden, custody, and evidence debt grow.",
    correction: "Use bounded purpose, minimum necessary scope, provenance, access, retention, and disposition.",
  },
  {
    mistake: "Service availability becomes recovery",
    observation: "The fictional page loads, so recovery is marked Complete.",
    impact: "Identity, data, supplier, source, user, monitoring, and privacy gates are ignored.",
    correction: "Require multi-domain clean state, canary validation, rollback, observation, and acceptance.",
  },
  {
    mistake: "Late evidence silently replaces history",
    observation: "Recovered fictional records overwrite the prior scope and decision.",
    impact: "Reviewers cannot reconstruct what was known or why earlier decisions occurred.",
    correction: "Preserve prior versions, issue corrections, update affected decisions, and reopen when required.",
  },
  {
    mistake: "The hotwash ends the improvement lifecycle",
    observation: "Fictional lessons are written but no owners, due dates, tests, or escalation exist.",
    impact: "Exercise insight does not become program change.",
    correction: "Create governed corrective actions and track them through validation and acceptance.",
  },
  {
    mistake: "Scores become personal rankings",
    observation: "Fictional participant scores are used to compare individuals without role, case, collaboration, or source context.",
    impact: "People may hide uncertainty, avoid difficult decisions, and game the exercise.",
    correction: "Use scoring to improve systems, training, playbooks, sources, and team capability.",
  },
  {
    mistake: "Green metrics replace observer evidence",
    observation: "A fictional time target passes even though observers record missing validation and privacy errors.",
    impact: "The exercise rewards speed over trustworthy outcomes.",
    correction: "Pair every metric with quality gates and evidence review.",
  },
  {
    mistake: "Real information enters the simulation",
    observation: "A student adapts a real alert, architecture, contact list, incident email, recovery plan, or dashboard.",
    impact: "Sensitive systems, identities, incidents, suppliers, and response capability may remain identifiable.",
    correction: "Invent every organization, role, service, source, record, action, message, metric, date, and outcome.",
  },
];

const labSteps = [
  ["1", "Approve the fictional simulation charter", "Define purpose, audience, scope, roles, controllers, observers, authority, confidentiality, safety, scoring, pause conditions, outputs, and timeline.", "Simulation charter and role matrix.", "The exercise is fully fictional, defensive, non-operational, and bounded."],
  ["2", "Prepare the fictional master scenario events list", "Sequence role, alert, source-health, user, supplier, privacy, containment, recovery, late-evidence, review, and metrics injects.", "Twenty-event scenario timeline.", "Each inject has purpose, evidence, expected decisions, observer focus, and break conditions."],
  ["3", "Build the fictional evidence pack", "Create role, session, group, service, data, supplier, communication, containment, recovery, and observer records.", "Ten-item evidence register.", "Every item has purpose, provenance, timing, source health, supports, limitations, access, and retention."],
  ["4", "Run activation and scoping", "Assign fictional owners and create the first versioned confirmed, possible, Unknown, unaffected, excluded, and out-of-scope register.", "Activation record and scope register.", "No alert, relationship, report, or missing record becomes an unsupported conclusion."],
  ["5", "Run priority and containment decisions", "Compare fictional monitoring, session, role, identity, function, supplier, and service options.", "Containment decision package.", "The selected action is authorized, precise, validated, continuity-aware, reversible, and risk-owned."],
  ["6", "Run communication and preservation", "Create fictional analyst, user, supplier, privacy, leadership, correction, recovery, and closure updates while preserving minimum-necessary evidence.", "Communication and evidence package.", "Versions, approvals, acknowledgements, corrections, custody, access, and retention remain visible."],
  ["7", "Run eradication and recovery", "Build fictional cause, clean-state gates, canary waves, validation, rollback, user acceptance, supplier reconciliation, observation, and reopen triggers.", "Recovery decision package.", "Service availability cannot override failed mandatory gates."],
  ["8", "Run late-evidence and reopening", "Introduce fictional recovered group records and trace every affected scope, message, recovery, risk, evidence, and closure decision.", "Correction-propagation and reopening record.", "Prior versions remain preserved and affected owners acknowledge the change."],
  ["9", "Run hotwash and after-action review", "Capture fictional strengths, gaps, decision-time context, lessons, actions, validation, debt, residual risk, and leadership needs.", "After-action and corrective-action package.", "Blameless learning remains accountable, specific, owned, and testable."],
  ["10", "Build the improvement dashboard", "Measure fictional role activation, evidence quality, scope, containment, communication, preservation, recovery, review, action validation, recurrence, and gaming risk.", "Balanced exercise dashboard.", "Speed and completion values cannot pass without quality gates."],
  ["11", "Prepare the leadership readout", "Summarize fictional mission effect, strengths, gaps, source limitations, decisions, actions, resources, residual risk, closure, and reopening.", "Leadership simulation brief.", "Every leadership ask is bounded, evidence-supported, owned, and time-sensitive."],
  ["12", "Prepare the portfolio package", "Combine charter, roles, timeline, evidence, scope, decisions, communications, preservation, recovery, review, metrics, debt, reflection, and public-safe boundary.", "Incident Response Simulation Package.", "No real incident, system, identity, supplier, contact, architecture, evidence, or response procedure appears."],
];

const quizQuestions = [
  {
    question: "What is the strongest purpose of the fictional A7.10 simulation?",
    choices: [
      "Find one technical answer as quickly as possible.",
      "Integrate the full incident-response lifecycle through evidence-supported decisions, ownership, validation, communication, recovery, review, and improvement.",
      "Rank individual participants.",
      "Use real systems to make the scenario realistic.",
    ],
    answer: 1,
    explanation: "The capstone measures complete defensive reasoning and program coordination, not one technical puzzle.",
  },
  {
    question: "A fictional group source is Degraded. What should happen?",
    choices: [
      "Assume the group state is safe.",
      "Assume the group state is unsafe.",
      "Keep the conclusion Conditional, preserve the limitation, assign alternate evidence, and plan source recovery.",
      "Remove the source from the case.",
    ],
    answer: 2,
    explanation: "Degraded evidence supports qualification and further work, not a forced conclusion.",
  },
  {
    question: "Which fictional containment decision is strongest when one session is confirmed and broad service impact is not?",
    choices: [
      "Pause every service immediately.",
      "Compare options and select the narrowest authorized effective action with validation, continuity, rollback, and residual-risk review.",
      "Do nothing until every Unknown is resolved.",
      "Let any participant act without approval.",
    ],
    answer: 1,
    explanation: "Proportional containment targets the supported risk while protecting mission and evidence.",
  },
  {
    question: "The protected-data source is Blind. Which communication is strongest?",
    choices: [
      "No protected data was affected.",
      "Protected-data access is Unknown while alternate evidence and source recovery are reviewed.",
      "Protected data was definitely accessed.",
      "Do not mention the limitation.",
    ],
    answer: 1,
    explanation: "Blind evidence supports neither access nor no-access conclusions.",
  },
  {
    question: "A fictional service responds, but mandatory data and user gates fail. What should recovery do?",
    choices: [
      "Expand to every user.",
      "Remain Conditional, freeze or narrow expansion, preserve rollback, and complete the failed gates.",
      "Delete the failed gates.",
      "Close the incident.",
    ],
    answer: 1,
    explanation: "Service availability is only one recovery dimension.",
  },
  {
    question: "Recovered fictional evidence conflicts with a prior decision. What is strongest?",
    choices: [
      "Silently overwrite the old record.",
      "Ignore it because the simulation is nearly complete.",
      "Preserve prior versions, register the new evidence, correct affected artifacts, obtain acknowledgement, and reopen when required.",
      "Delete the source.",
    ],
    answer: 2,
    explanation: "Historical continuity requires visible correction and bounded reassessment.",
  },
  {
    question: "Which public portfolio approach is safest?",
    choices: [
      "Sanitize a real incident exercise.",
      "Use a real alert with fake usernames.",
      "Invent every organization, role, source, record, action, message, metric, date, and outcome.",
      "Use real recovery gates without service names.",
    ],
    answer: 2,
    explanation: "Complete fictionalization protects real systems, people, incidents, suppliers, and response capabilities.",
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
        Module A7
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

export default function IncidentResponseSimulationLabPage() {
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
              Module A7
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 10 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Full-Lifecycle Defensive Simulation
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A7.10 Incident Response Simulation Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Integrate preparation, activation, roles, evidence, source health,
            scoping, priority, containment, continuity, communication,
            preservation, cause, recovery, validation, review, metrics,
            corrective actions, closure, and reopening in one fully fictional
            defensive capstone.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A7: Incident Response Lifecycle"
          lessonTitle="Incident Response Simulation Lab"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, roles, identities, services, sources, suppliers, records, communications, decisions, actions, metrics, dates, and outcomes.",
            "I will not access, test, change, monitor, investigate, preserve, or recover any real system, identity, service, device, data set, supplier, organization, or person.",
            "I will separate fictional facts, supported conclusions, Unknowns, non-proof statements, assumptions, and late evidence.",
            "I will make fictional decisions only within documented roles, authority, privacy, continuity, evidence, validation, rollback, and escalation boundaries.",
            "I will treat fictional source health as part of every scope, communication, containment, recovery, metric, and closure decision.",
            "I will pause the exercise if real information, unsafe instructions, or unapproved operational actions appear.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Hardest Incident-Response Problems Are Coordination Problems"
        >
          <p className="leading-8">
            Fictional Northbridge begins with one stale role and one privileged
            session. Within two hours, the team must handle a Degraded identity
            source, a Blind data source, one user report, a delayed supplier,
            a leadership decision, a narrow containment action, an inaccurate
            message, a broad preservation request, failed recovery gates, late
            conflicting evidence, corrective actions, and a green metric that
            hides poor quality. No single technical answer can solve the whole
            scenario.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak simulation behavior
              </p>
              <p className="mt-2 leading-7">
                “Find the cause, shut everything down, and call the service
                recovered when it responds.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong simulation behavior
              </p>
              <p className="mt-2 leading-7">
                “Coordinate bounded evidence, roles, decisions, mission,
                privacy, communication, recovery gates, validation, learning,
                and improvement.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            The simulation is successful when participants can defend the
            lifecycle of their decisions—not when they guess a hidden answer.
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
          title="A Complete Response Must Remain Coherent as Evidence Changes"
        >
          <p className="leading-8">
            Fictional response decisions are connected. A source-health change
            may alter scope, communication, containment confidence, recovery,
            privacy, leadership, metrics, and closure. A corrected message may
            require decision-owner acknowledgement. A failed canary may trigger
            rollback. A recovered source may reopen the case. The lab teaches
            students to maintain that connected record under pressure.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Integrate the lifecycle", "Fictional preparation, decisions, communications, evidence, recovery, review, and metrics remain connected."],
              ["Protect mission and people", "Fictional continuity, accessibility, privacy, suppliers, users, and leadership needs shape response choices."],
              ["Create durable learning", "Fictional exercise evidence becomes owned, testable, measurable, and validated program improvement."],
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

        <SectionCard eyebrow="Core Framework" title="The I-N-C-I-D-E-N-T Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["I — Initiate safely", "Confirm fictional charter, roles, alternates, authority, evidence owners, boundaries, and pause conditions."],
              ["N — Name the question", "Define fictional activation, scope, containment, communication, preservation, recovery, or leadership decision."],
              ["C — Classify evidence and scope", "Separate fictional facts, conclusions, Unknowns, relationships, source health, confidence, and non-proof."],
              ["I — Identify options and owners", "Compare fictional choices, authority, mission effect, privacy, dependencies, validation, and rollback."],
              ["D — Decide and document", "Record fictional evidence, rationale, expected state, action, communication, owner, deadline, and residual risk."],
              ["E — Evaluate outcomes", "Validate fictional source-side state, continuity, user effect, data, supplier, monitoring, and side effects."],
              ["N — Navigate change", "Correct fictional messages, update scope, respond to late evidence, freeze recovery, and reopen decisions."],
              ["T — Transform learning", "Convert fictional hotwash and review evidence into actions, tests, metrics, debt, governance, and closure."],
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
              Simulation command statement
            </p>
            <p className="mt-2 leading-7">
              Fictional Northbridge will coordinate a bounded response to one
              confirmed identity-session-service relationship, preserve
              uncertainty around group, device, supplier, user, and protected
              data, select narrow authorized containment, maintain mission
              continuity, correct unsupported communication, and recover only
              through mandatory clean-state gates.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Incident Response Simulation"
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

        <SectionCard
          eyebrow="Instructional Section 1"
          title="Assign Ten Simulation Roles"
        >
          <div className="grid gap-5">
            {simulationRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">{item.role}</h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Mission", item.mission],
                    ["Authority", item.authority],
                    ["Evidence needed", item.evidenceNeed],
                    ["Required deliverable", item.deliverable],
                    ["Failure pattern", item.failurePattern],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.role}-${label}`}
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
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Run Ten Full-Lifecycle Phases"
        >
          <div className="grid gap-5">
            {phases.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.phase}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Objective", item.objective],
                    ["Participant tasks", item.participantTasks],
                    ["Controller inject", item.controllerInject],
                    ["Required decision", item.requiredDecision],
                    ["Success condition", item.success],
                    ["Break condition", item.breakCondition],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.phase}-${label}`}
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
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 3"
          title="Control a Twenty-Inject Scenario Timeline"
        >
          <div className="grid gap-4">
            {scenarioEvents.map((item) => (
              <article
                key={`${item.time}-${item.inject}`}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-sm font-black text-cyan-200">
                    {item.time}
                  </span>
                  <h3 className="font-black text-white">{item.inject}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Source state", item.sourceState],
                    ["Evidence", item.evidence],
                    ["Expected action", item.expectedAction],
                    ["Observer focus", item.observerFocus],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.time}-${label}`}
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
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Maintain a Ten-Entity Scope Register"
        >
          <div className="grid gap-5">
            {scopeEntities.map((item) => (
              <article
                key={item.entity}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black text-white">
                      {item.entity}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-cyan-200">
                      {item.type}
                    </p>
                  </div>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-200">
                    {item.status}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence", item.evidence],
                    ["Source health", item.sourceHealth],
                    ["Limitation", item.limitation],
                    ["Owner", item.owner],
                    ["Next evidence", item.nextEvidence],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.entity}-${label}`}
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
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Defend Ten Material Decisions"
        >
          <div className="grid gap-6">
            {decisionPoints.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {item.decision}
                  </h3>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    ["Decision question", item.question],
                    ["Options", item.options],
                    ["Evidence", item.evidence],
                    ["Authority", item.authority],
                    ["Selected choice", item.choice],
                    ["Expected state", item.expectedState],
                    ["Validation", item.validation],
                    ["Rollback", item.rollback],
                    ["Residual risk", item.residualRisk],
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
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Preserve a Ten-Item Fictional Evidence Pack"
        >
          <div className="grid gap-5">
            {evidencePack.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.item}</h3>
                  <span className="rounded-full border border-slate-600 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-300">
                    {item.health}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Provenance", item.provenance],
                    ["Timing", item.timing],
                    ["Supports", item.supports],
                    ["Does not prove", item.limits],
                    ["Access", item.access],
                    ["Retention", item.retention],
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
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Create Nine Audience-Specific Communications"
        >
          <div className="grid gap-5">
            {communicationSet.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.type}
                </h3>

                <div className="mt-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Fictional message
                  </p>
                  <p className="mt-3 leading-7">{item.message}</p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Audience", item.audience],
                    ["Approval", item.approval],
                    ["Next update", item.nextUpdate],
                    ["Quality gate", item.qualityGate],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.type}-${label}`}
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
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 8"
          title="Control Ten Recovery Gates"
        >
          <div className="grid gap-5">
            {recoveryGates.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h3 className="text-xl font-black text-cyan-100">
                    {item.domain}
                  </h3>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-200">
                    {item.status}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Entry criteria", item.entry],
                    ["Evidence", item.evidence],
                    ["Validation", item.validation],
                    ["Break condition", item.breakCondition],
                    ["Rollback", item.rollback],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.domain}-${label}`}
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
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 9"
          title="Score Eight Exercise Dimensions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {observerScorecard.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.dimension}
                </h3>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Excellent
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.excellent}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Developing
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.developing}</p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Unsafe or ineffective
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.unsafe}</p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 10"
          title="Validate Sixteen Simulation Scenarios"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Case",
                    "Type",
                    "Fictional input",
                    "Expected result",
                    "Quality protected",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {validationCases.map(
                  ([id, type, input, expected, protects]) => (
                    <tr key={id}>
                      <td className="px-4 py-4 align-top font-mono font-bold text-white">
                        {id}
                      </td>
                      <td className="px-4 py-4 align-top font-semibold text-cyan-200">
                        {type}
                      </td>
                      <td className="px-4 py-4 align-top leading-6 text-slate-300">
                        {input}
                      </td>
                      <td className="px-4 py-4 align-top leading-6 text-slate-300">
                        {expected}
                      </td>
                      <td className="px-4 py-4 align-top leading-6 text-slate-300">
                        {protects}
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Simulation Architecture"
          title="Northbridge Full-Lifecycle Exercise Model"
        >
          <p className="leading-8">
            This architecture is entirely fictional and non-operational. It
            teaches incident-response coordination without real identities,
            systems, suppliers, communications, evidence, contacts,
            architecture, procedures, or incidents.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Readiness inputs", "Charter, roles, alternates, authority, playbooks"],
                ["Evidence inputs", "Records, provenance, chronology, health, limitations"],
                ["Mission inputs", "Services, users, privacy, suppliers, continuity"],
                ["Decision inputs", "Scope, options, validation, rollback, risk"],
              ].map(([title, detail]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-4 text-purple-50"
                >
                  <p className="font-black text-purple-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-center text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                Fictional Simulation Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Activate", "Evidence, urgency, ownership, decision clock"],
                  ["Scope", "Confirmed, possible, Unknown, unaffected, excluded"],
                  ["Contain", "Options, authority, continuity, validation, rollback"],
                  ["Communicate", "Audience, facts, uncertainty, guidance, correction"],
                  ["Preserve", "Purpose, provenance, access, custody, retention"],
                  ["Recover", "Clean state, canary, gates, rollback, observation"],
                  ["Review", "Strengths, gaps, lessons, actions, risk"],
                  ["Improve", "Metrics, validation, recurrence, debt, retirement"],
                ].map(([title, detail]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-cyan-300/30 bg-slate-950/80 p-4"
                  >
                    <p className="font-black text-cyan-100">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ["Responder output", "Scope, decisions, actions, communications"],
                ["Recovery output", "Gates, canary, acceptance, observation"],
                ["Program output", "Review, actions, metrics, debt, risk"],
                ["Portfolio boundary", "Fully fictional, safe, non-operational"],
              ].map(([title, detail]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-blue-400/30 bg-blue-400/10 p-4 text-blue-50"
                >
                  <p className="font-black text-blue-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge Incident Response Simulation Dashboard"
          subtitle="Fictional role activation, source health, scope quality, containment, communication, preservation, recovery, review, action validation, and exercise debt."
          metrics={[
            {
              label: "Material fictional decisions completed",
              value: "10 / 10",
              note: "Every decision includes evidence, authority, rationale, expected state, validation, rollback, and residual risk.",
            },
            {
              label: "Mandatory fictional recovery gates passing",
              value: "5 / 10",
              note: "Identity, service, data, supplier, and user gates remain Conditional or failed, so expansion is blocked.",
            },
            {
              label: "Open fictional exercise debt",
              value: "8",
              note: "Alternate ownership, source recovery, correction acknowledgement, supplier reconciliation, accessibility, recovery validation, action testing, and metric redesign remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Recovery Expansion and Closure Are Blocked"
          severity="High"
          time="10:25 AM"
          source="Fake Northbridge Simulation Control Console"
          details="The fictional identity canary can sign in, but the critical submission workflow fails. Protected-data evidence is Blind, supplier queue state is Conditional, group evidence is Recovering and Conflicting, and one decision-changing correction lacks complete acknowledgement."
          recommendation="Freeze fictional recovery expansion, preserve evidence, maintain the alternate workflow, reconcile group and supplier records, complete correction acknowledgement, and keep closure readiness Conditional."
        />

        <FakeLogPanel
          title="Fake Incident Response Simulation Timeline"
          logs={[
            "08:00 EXERCISE status='started'",
            "08:12 ROLE state='active-near-expiration'",
            "08:18 SESSION destination='coordination-admin'",
            "08:25 SOURCE group='degraded'",
            "08:31 USER impact='possible-limited'",
            "08:37 SUPPLIER state='conditional'",
            "08:43 SOURCE data='blind'",
            "08:57 CONTAINMENT action='session-close'",
            "09:05 VALIDATION session='closed'",
            "09:20 CORRECTION version='3.2'",
            "09:30 PRESERVATION request='overbroad'",
            "10:12 SUPPLIER queue='unreconciled'",
            "10:25 RECOVERY canary='failed-workflow'",
            "10:40 SOURCE group='recovering-conflicting'",
            "11:00 CLOSURE status='conditional'",
            "11:20 HOTWASH status='started'",
          ]}
        />

        <SectionCard
          eyebrow="Fictional Evidence Matrix"
          title="What the Simulation Evidence Supports—and What It Does Not Prove"
        >
          <div className="grid gap-5">
            {evidencePack.map((item) => (
              <article
                key={`matrix-${item.id}`}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.item}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Supports
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.supports}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Does not prove
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.limits}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Provenance and timing
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.provenance} {item.timing}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Governance
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      Access: {item.access} Retention: {item.retention}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Which Full-Lifecycle Decision Is Best Supported?"
          question="Which fictional response decision best fits the current Northbridge simulation evidence?"
          evidence={[
            "The confirmed privileged session is Closed.",
            "The service remains reachable.",
            "The group source is Recovering and Conflicting.",
            "Protected-data evidence remains Blind.",
            "The supplier queue remains unreconciled.",
            "The critical-user canary workflow failed.",
            "One decision-changing correction lacks complete acknowledgement.",
            "Several corrective actions remain unvalidated.",
          ]}
          options={[
            "Maintain fictional containment, freeze recovery expansion, preserve and reconcile late evidence, complete communication acknowledgement, keep closure Conditional, and continue owned recovery and improvement work.",
            "Declare the incident resolved because the session is Closed.",
            "Restore all users because the service responds.",
            "Delete the failed gates and close the exercise.",
          ]}
          bestAnswer={0}
          explanation="The first option integrates evidence, source health, recovery gates, communication correction, validation, closure, and improvement obligations."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Twelve Simulation Errors"
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
                    Fictional observation
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.observation}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Impact
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.impact}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Fictional Capstone Lab"
          title="Run the Complete Northbridge Incident Response Simulation"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only invented Northbridge information. Do not access, test,
            scan, monitor, investigate, alter, contain, preserve, recover, or
            communicate about any real identity, system, service, device, data
            set, supplier, organization, incident, or person.
          </div>

          <div className="mt-6 grid gap-5">
            {labSteps.map(([step, title, action, output, quality]) => (
              <article
                key={step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {step}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{action}</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{output}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Quality check
                    </p>
                    <p className="mt-2 text-sm leading-6">{quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Service Is Reachable but the Recovery Story Is Not Trustworthy"
          scenario="Fictional Northbridge has closed the confirmed session and restored service availability. The group source is Recovering and Conflicting, protected-data evidence is Blind, the supplier queue is unreconciled, the critical-user canary failed, and one correction acknowledgement remains incomplete."
          choices={[
            {
              label: "Choice A",
              response: "Maintain fictional containment, freeze recovery expansion, preserve and reconcile evidence, keep users on the alternate workflow, complete correction acknowledgement, update leadership, and keep closure Conditional.",
              outcome: "Best defensive choice. It integrates source health, recovery gates, user continuity, communication, evidence, and closure obligations.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Restore all users because the service responds.",
              outcome: "Weak. Mandatory data, supplier, identity, user, and communication gates remain incomplete.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Close the incident because the original session is gone.",
              outcome: "Weak. Session containment is not eradication, trusted recovery, validated improvement, or closure.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Late Evidence Challenges the Nearly Closed Case"
          scenario="Recovered fictional group records conflict with the prior effective-access interpretation after leadership has requested closure and the final dashboard is already green."
          choices={[
            {
              label: "Choice A",
              response: "Preserve prior versions, register the new evidence, qualify source health, reopen affected scope, communication, recovery, risk, metric, and closure decisions, obtain owner acknowledgement, and update corrective actions.",
              outcome: "Best choice. Late evidence must change the connected lifecycle when it changes decision support.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Ignore the records because the response is almost complete.",
              outcome: "Weak. Closure pressure does not remove evidence or correction obligations.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Overwrite the earlier scope so the record looks consistent.",
              outcome: "Weak. Silent replacement destroys historical continuity and decision fairness.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend the Entire Simulation before an Incident Governance Board"
        >
          <p className="leading-8">
            The fictional board asks whether Northbridge activated correctly,
            scoped accurately, contained proportionately, protected users and
            privacy, preserved evidence responsibly, recovered safely,
            corrected communication, responded to late evidence, learned
            without blame, measured improvement honestly, and can now close.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Defend activation and scope", "Explain fictional alert facts, source health, relationships, categories, confidence, owners, next evidence, and decision clocks."],
              ["Defend containment", "Explain fictional options, authority, mission effect, expected state, validation, rollback, side effects, and residual risk."],
              ["Defend communication and privacy", "Explain fictional audiences, facts, Unknowns, guidance, approvals, versions, correction, acknowledgement, and minimum necessary detail."],
              ["Defend preservation and recovery", "Explain fictional purpose, provenance, access, retention, clean-state gates, canary failure, rollback, observation, and acceptance."],
              ["Defend review and improvement", "Explain fictional strengths, gaps, decision-time context, lessons, actions, validation, metrics, debt, and recurrence."],
              ["Defend closure or reopening", "Explain fictional source reconciliation, supplier obligations, action status, residual risk, observation, correction, archive, and reopen triggers."],
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
              Produce a fictional simulation charter, ten-role matrix,
              twenty-inject timeline, ten-entity scope register, ten-decision
              log, ten-item evidence pack, nine-message communication set,
              preservation plan, ten-gate recovery matrix, observer scorecard,
              sixteen validation cases, hotwash, after-action review,
              corrective-action register, metrics dashboard, debt register,
              leadership recommendation, closure decision, reopen triggers,
              and public portfolio boundary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Incident Response Simulation Checklist"
          items={[
            "I can activate fictional incident coordination without overstating intent, impact, or complete scope.",
            "I can assign fictional primary and alternate roles with clear authority, evidence needs, deliverables, and handoffs.",
            "I can maintain fictional confirmed, possible, Unknown, unaffected, excluded, and out-of-scope categories.",
            "I can make fictional source-health states change scope, communication, containment, recovery, metrics, and closure confidence.",
            "I can compare fictional containment options and defend the narrowest effective authorized action.",
            "I can protect fictional continuity, users, accessibility, privacy, suppliers, evidence, and mission during response.",
            "I can create fictional audience-specific updates, corrections, acknowledgements, and next-update commitments.",
            "I can preserve fictional minimum-necessary evidence with provenance, timing, source health, access, custody, retention, and corrections.",
            "I can separate fictional containment, eradication, recovery preparation, restoration, validation, observation, closure, and reopening.",
            "I can respond to fictional late evidence without silently replacing history.",
            "I can convert fictional hotwash and review observations into owned, validated, measurable corrective actions.",
            "I can create a completely fictional capstone artifact without exposing real incidents, systems, identities, suppliers, evidence, communications, metrics, or response capabilities.",
          ]}
        />

        <MiniQuiz
          title="A7.10 Mini Quiz: Incident Response Simulation Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Incident Response Simulation Package for the Northbridge Student-Support Cooperative. Include simulation purpose, audience, charter, exercise boundary, confidentiality, pause authority, controller, facilitator, observers, participants, primary roles, alternate roles, authority, evidence needs, deliverables, failure patterns, master scenario events list, inject IDs, inject times, source-health changes, decision clocks, observer prompts, preparation, activation, detection, initial scope, confirmed entities, possible entities, Unknown entities, unaffected entities, excluded entities, out-of-scope entities, relationship classes, source health, confidence, limitations, owners, next evidence, priority, containment options, selected action, authority, expected state, validation, rollback, continuity, user impact, accessibility, privacy, supplier coordination, communication audiences, analyst update, technical request, user advisory, supplier request, leadership brief, correction notice, recovery update, reopening notice, closure brief, evidence purpose, provenance, event time, collection time, processing time, decision time, access, custody, transfer, retention, disposition, supports, non-proof statements, trigger, immediate cause, root cause, contributing conditions, control gaps, recovery complications, known-good state, identity gates, session gates, configuration gates, service gates, data gates, supplier gates, source gates, dependency gates, monitoring gates, business gates, canary waves, failed gates, rollback, observation, acceptance, break conditions, late evidence, correction propagation, reopening, hotwash, post-incident review, strengths, gaps, lessons, corrective actions, primary owners, alternate owners, due dates, dependencies, validation tests, residual risk, exercise scorecard, role metrics, evidence metrics, scope metrics, containment metrics, communication metrics, preservation metrics, recovery metrics, review metrics, action-validation metrics, recurrence, gaming review, exercise debt, leadership readout, closure recommendation, archive, reopen triggers, reflection, and a statement that every organization, role, identity, service, source, supplier, record, action, message, metric, date, and outcome is invented."
          tips={[
            "Keep the fictional simulation focused on decision quality, ownership, evidence, mission protection, validation, and learning rather than guessing one hidden answer.",
            "Make fictional source health visible in every scope, communication, containment, recovery, metric, and closure decision.",
            "Preserve fictional prior versions and correction history when late evidence changes the response.",
            "Keep fictional implementation, validation, acceptance, completion, closure, and reopening separate.",
            "Keep the package completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the A7 Module Test?"
        >
          <p className="leading-8">
            Rate your readiness from 1 to 5 for preparation, roles, activation,
            evidence, source health, scoping, priority, containment, continuity,
            communication, privacy, preservation, cause, recovery, validation,
            late evidence, review, corrective actions, metrics, closure,
            reopening, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can coordinate the fictional incident lifecycle without reducing it to one technical answer.",
              "I can keep fictional facts, conclusions, Unknowns, source health, and non-proof statements separate.",
              "I can defend fictional containment and recovery decisions with authority, validation, rollback, continuity, and risk.",
              "I can create fictional audience-specific communications and explicit corrections.",
              "I can preserve fictional evidence responsibly without teaching invasive collection.",
              "I can respond to fictional failed recovery gates and late conflicting evidence.",
              "I can convert fictional exercise observations into validated improvement actions and balanced metrics.",
              "I can produce a safe fictional capstone package without adapting any real incident material.",
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
            Record one fictional activation decision, one scope uncertainty, one
            containment option, one user or privacy need, one preservation
            boundary, one failed recovery gate, one late-evidence correction,
            one corrective action, one quality-gated metric, and one area to
            review before the module test.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "A fictional incident-response simulation should evaluate the full lifecycle, not one technical answer.",
            "Roles, alternates, authority, evidence needs, deliverables, handoffs, and pause conditions belong before the first inject.",
            "Confirmed, possible, Unknown, unaffected, excluded, and out-of-scope entities require separate fictional evidence and ownership.",
            "Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering source states should change fictional decisions and confidence.",
            "The strongest fictional containment is the narrowest authorized action that reduces supported risk and passes validation, continuity, rollback, and residual-risk review.",
            "Fictional communications should be audience-specific, privacy-aware, approved, versioned, actionable, corrected, acknowledged, and tied to the next update.",
            "Fictional evidence preservation requires purpose, authority, minimum necessary scope, provenance, timing, access, custody, retention, limitations, and decision use.",
            "Service availability is not fictional trusted recovery; clean-state gates, canary validation, rollback, user acceptance, observation, and source health remain essential.",
            "Late fictional evidence should preserve history, correct connected records, obtain acknowledgement, and reopen affected decisions when required.",
            "Hotwash findings become improvement only when fictional actions are owned, validated, measured, monitored, and connected to risk and reopening.",
            "Speed, volume, closure, and completion metrics require fictional quality gates and gaming review.",
            "Every CyberShield simulation artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real incidents, systems, people, suppliers, evidence, or response capabilities.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete Module A7
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            You have completed all ten Incident Response Lifecycle lessons.
            Continue to the module test to assess preparation, roles, playbooks,
            activation, evidence, source health, scoping, priority,
            containment, recovery, communication, preservation, review,
            metrics, closure, and reopening.
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