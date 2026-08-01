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
const previousLesson = `${modulePath}/reviewing-a-threat-model`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate the complete fictional threat-modeling lifecycle from scope and system context through assets, actors, entry points, flows, trust boundaries, abuse cases, categories, risk ranking, mitigation, assumptions, review, and maintenance.",
  "Produce decision-ready fictional artifacts that preserve evidence, uncertainty, ownership, privacy, safety, recovery, and current-versus-future-state distinctions.",
  "Facilitate a multidisciplinary fictional workshop that captures disagreement, evidence gaps, blocked decisions, review findings, completion criteria, and residual risk without blaming people or assuming intent.",
  "Evaluate fictional threat-model quality through traceability, consistency, coverage, evidence provenance, control maturity, recovery readiness, assumption maintenance, and safe-publication review.",
  "Assemble a portfolio-ready fictional threat-model package that is ethical, defensive, authorized, non-operational, privacy-safe, evidence-aware, maintainable, and completely invented.",
];

const vocabulary = [
  ["Workshop charter", "A fictional agreement defining the decision, scope, participants, roles, evidence, timeline, outputs, methods, and safety boundary."],
  ["System context", "A fictional high-level view of mission, users, services, data, identities, suppliers, environments, dependencies, and external relationships."],
  ["Asset register", "A fictional inventory of mission, data, identity, service, privacy, evidence, safety, trust, and recovery values that require protection."],
  ["Actor register", "A fictional inventory of human, service, supplier, automated, administrative, support, emergency, and recovery actors defined by relationship and authority."],
  ["Entry-point inventory", "A fictional list of interfaces through which users, services, suppliers, files, messages, support actions, administrators, monitors, and recovery processes interact."],
  ["Flow register", "A fictional record of source, destination, purpose, data, identity, validation, timing, state, trust, evidence, failure, and recovery for each important movement."],
  ["Trust-boundary decision", "A fictional explanation of what changes in authority, ownership, identity, validation, data, evidence, or responsibility when a flow crosses a boundary."],
  ["Abuse case", "A safe fictional description of how a legitimate capability, workflow, identity, interface, or process could produce an unsafe outcome without operational harmful instructions."],
  ["Threat category", "A conceptual fictional label that organizes defensive questions without proving event, intent, control failure, exploitability, or severity."],
  ["Risk rationale", "A fictional explanation connecting scenario, impact, likelihood, exposure, controls, uncertainty, mission context, recovery, confidence, and priority."],
  ["Mitigation package", "A fictional set of complementary design, preventive, detective, response, recovery, privacy, governance, communication, and evidence controls."],
  ["Assumption register", "A fictional record of precise, testable beliefs with evidence, confidence, owner, consequence, expiration, validation, and review triggers."],
  ["Limitations register", "A fictional record of scope, evidence, time, method, supplier, control, human, prediction, recovery, and publication limits."],
  ["Review finding", "A fictional quality observation with criterion, decision impact, evidence, limits, owner, completion criterion, status, and trigger."],
  ["Traceability chain", "The fictional connection from mission and assets through actors, interfaces, flows, boundaries, scenarios, categories, risks, controls, assumptions, owners, and review."],
  ["Decision-ready", "A fictional state in which enough scope, evidence, ownership, uncertainty, rationale, and authority exist to support a responsible choice."],
  ["Conditional decision", "A fictional choice that may proceed only while named assumptions, controls, evidence actions, deadlines, owners, and review conditions remain satisfied."],
  ["Blocked decision", "A fictional choice that cannot proceed responsibly because scope, evidence, ownership, control state, or uncertainty is insufficient."],
  ["Residual risk", "The fictional risk remaining after supported mitigation effects, limitations, dependencies, uncertainty, recovery, and owner decisions are considered."],
  ["Closure evidence", "Fictional evidence showing that a review action or mitigation completion criterion has been met."],
  ["Change trigger", "A fictional event that requires a model or decision to be revisited, such as an architecture, identity, supplier, data, control, recovery, ownership, or mission change."],
  ["Workshop retrospective", "A fictional reflection on what the team learned, missed, debated, improved, deferred, and must change in the next review."],
  ["Safe publication review", "A fictional quality check confirming that a public artifact is completely invented, non-operational, privacy-safe, and free of real targets or sensitive details."],
  ["Threat-model package", "The complete fictional collection of workshop outputs, decisions, evidence, registers, findings, leadership summary, technical appendix, and maintenance plan."],
];

const workshopPhases = [
  {
    phase: "1. Charter and safety",
    purpose: "Define the fictional decision, scope, participants, roles, evidence package, deliverables, review criteria, timeline, and non-operational safety boundary.",
    questions: "What decision must this workshop support? What is included, excluded, current, future, temporary, degraded, and recovery state?",
    outputs: "Workshop charter, safety statement, participant roles, evidence index, schedule, and decision-rights map.",
    quality: "The workshop never claims to certify perfect security or authorize activity on real systems.",
  },
  {
    phase: "2. Mission and assets",
    purpose: "Identify fictional mission, user, data, identity, service, privacy, evidence, safety, trust, supplier, and recovery values.",
    questions: "What must remain correct, available, private, attributable, recoverable, understandable, and trusted?",
    outputs: "Asset register, value statements, owners, classification, dependencies, and impact dimensions.",
    quality: "Assets include human and business outcomes rather than only technical components.",
  },
  {
    phase: "3. Actors and authority",
    purpose: "Map fictional human, service, supplier, automated, support, administrative, emergency, and recovery actors.",
    questions: "Who or what acts, under which identity, role, object scope, conditions, lifecycle, approval, and evidence?",
    outputs: "Actor register, authority map, service-identity list, ownership gaps, and lifecycle assumptions.",
    quality: "Actors are described by relationship and authority, not labeled as malicious.",
  },
  {
    phase: "4. Entry points, flows, and trust",
    purpose: "Map fictional interfaces, data movement, administrative relationships, and trust changes.",
    questions: "Where does information or authority enter, leave, change owners, cross environments, or depend on another service?",
    outputs: "Entry-point inventory, flow register, trust-boundary map, data-purpose table, source-health notes, and recovery flows.",
    quality: "Each flow explains purpose, data, identity, state, validation, evidence, failure, and recovery—not only arrows.",
  },
  {
    phase: "5. Abuse cases and categories",
    purpose: "Create safe fictional scenarios across deliberate, accidental, process, supplier, automation, usability, degraded, and recovery conditions.",
    questions: "How could legitimate capabilities produce unsafe outcomes? Which conceptual categories organize the decision?",
    outputs: "Abuse-case register, category rationale, uncategorized concerns, and intent-uncertainty notes.",
    quality: "Scenarios remain outcome-focused, defensive, fictional, and non-operational.",
  },
  {
    phase: "6. Risk ranking",
    purpose: "Compare fictional impact, likelihood, exposure, control strength, uncertainty, recovery, confidence, priority, and urgency.",
    questions: "Which scenarios require attention first, what evidence supports the ranking, and what remains uncertain?",
    outputs: "Inherent and residual risk register, criteria guide, disagreement log, confidence statements, and blocked decisions.",
    quality: "Category, impact, likelihood, intent, control state, uncertainty, priority, and urgency remain separate.",
  },
  {
    phase: "7. Mitigation selection",
    purpose: "Choose layered fictional design, prevention, detection, response, recovery, privacy, governance, communication, and evidence controls.",
    questions: "Which root conditions can be removed, what tradeoffs appear, how can controls fail, and what risk remains?",
    outputs: "Mitigation decision matrix, selected packages, owners, dependencies, validation plans, and residual-risk decisions.",
    quality: "Controls are not treated as effective without design, operating, failure, and recovery evidence.",
  },
  {
    phase: "8. Assumptions and limits",
    purpose: "Make fictional observations, interpretations, beliefs, unknowns, exclusions, constraints, confidence, expiration, and consequences visible.",
    questions: "Which conclusions depend on incomplete evidence, and what must change if an assumption is false?",
    outputs: "Assumption register, limitations register, evidence-gap queue, confidence map, and review triggers.",
    quality: "Decision-blocking uncertainty is not forced into unsupported scores or conclusions.",
  },
  {
    phase: "9. Peer review and correction",
    purpose: "Challenge the fictional model for scope, evidence, traceability, consistency, categories, risk, controls, recovery, assumptions, safety, and maintenance.",
    questions: "What would need to be true for a conclusion to be wrong? Which decisions are ready, conditional, blocked, accepted, or reopened?",
    outputs: "Review findings, action register, completion criteria, closure plan, sign-off matrix, and revision history.",
    quality: "Review challenges the model rather than blaming people.",
  },
  {
    phase: "10. Delivery and maintenance",
    purpose: "Package the fictional model for leadership, technical readers, portfolio use, and future review.",
    questions: "What is the decision, what is blocked, who owns the next action, and what changes trigger review?",
    outputs: "Leadership summary, technical appendix, portfolio artifact, maintenance calendar, trigger list, and retrospective.",
    quality: "Public delivery remains completely invented and clearly states scope, limits, confidence, and safety.",
  },
];

const assets = [
  {
    asset: "Student-support mission outcome",
    value: "Students receive accurate, timely, understandable, and fair support decisions.",
    owner: "Fictional student-services owner",
    harm: "Delay, confusion, incorrect status, inaccessible support, duplicate action, or loss of trust.",
    evidence: "Service objectives, user journeys, support themes, message reviews, and recovery exercises.",
  },
  {
    asset: "Case-state integrity",
    value: "Case status, required actions, document state, and processing results remain correct and current.",
    owner: "Fictional workflow owner",
    harm: "Stale, duplicated, reordered, missing, conflicting, or incorrect business state.",
    evidence: "State transitions, version records, correlation, reconciliation, and support tickets.",
  },
  {
    asset: "Student privacy",
    value: "Fictional personal and support information is collected, shared, used, retained, and deleted only for approved purposes.",
    owner: "Fictional privacy and data owner",
    harm: "Unnecessary collection, broad audience, unsupported inference, supplier over-sharing, or excessive retention.",
    evidence: "Field inventory, purpose records, access, retention, sharing, deletion, and privacy review.",
  },
  {
    asset: "Identity and authority",
    value: "Human and service actors act under correct, current, bounded, attributable, and recoverable authority.",
    owner: "Fictional identity owner",
    harm: "Stale roles, unowned service identity, broad support action, weak emergency access, or unclear attribution.",
    evidence: "Role maps, policy results, access reviews, lifecycle records, approvals, and administrative events.",
  },
  {
    asset: "Service availability and continuity",
    value: "Portal, identity, processing, notification, evidence, support, and recovery capabilities remain usable when needed.",
    owner: "Fictional operations owner",
    harm: "Outage, hidden backlog, degraded service, misleading status, or unavailable recovery evidence.",
    evidence: "Health, queue age, service objectives, support impact, dependency maps, and exercises.",
  },
  {
    asset: "Evidence and accountability",
    value: "Actions, decisions, approvals, failures, changes, and recoveries can be explained using trustworthy, privacy-aware evidence.",
    owner: "Fictional evidence owner",
    harm: "Inability to attribute action, validate state, assess controls, recover, or support governance decisions.",
    evidence: "Event schemas, source health, correlation, tickets, approvals, timestamps, and review history.",
  },
  {
    asset: "Recovery correctness",
    value: "Technical and business state, identity, notifications, evidence, communication, and trust are restored in a safe order.",
    owner: "Fictional continuity owner",
    harm: "Service returns with stale state, repeated tasks, broad emergency authority, missing evidence, or incorrect user communication.",
    evidence: "Recovery plan, restore tests, dependency order, reconciliation, communication, and closure.",
  },
  {
    asset: "Supplier relationship and shared responsibility",
    value: "External processing has defined purpose, fields, identity, evidence, responsibility, change review, recovery, and exit planning.",
    owner: "Fictional supplier owner",
    harm: "Unknown processing, excessive data, ambiguous identity, delayed results, weak evidence, or concentrated dependency.",
    evidence: "Interface records, field inventories, owner statements, change history, service evidence, and recovery terms.",
  },
];

const actors = [
  {
    actor: "Student portal user",
    relationship: "Fictional person requesting support through the portal.",
    authority: "Create and view own support cases, upload invented documents, and manage approved communication preferences.",
    evidence: "Identity event, session context, object ownership, case event, and confirmation.",
    question: "How is account recovery separated from routine preference change?",
  },
  {
    actor: "Support analyst",
    relationship: "Fictional employee assisting assigned student cases.",
    authority: "View assigned case status, request clarification, update bounded fields, and initiate approved reprocessing.",
    evidence: "Role, case assignment, support ticket, reason, action, target, result, and user confirmation.",
    question: "Which actions require supervisor review or object-level policy?",
  },
  {
    actor: "Support supervisor",
    relationship: "Fictional owner of higher-impact support decisions and quality review.",
    authority: "Approve defined exceptions, review sensitive changes, and supervise quality.",
    evidence: "Approval, independent role, case context, reason, result, and review record.",
    question: "How are emergency exceptions expired and reviewed?",
  },
  {
    actor: "Supplier processing service",
    relationship: "Fictional external service that processes approved document references and returns results.",
    authority: "Receive minimized request fields and submit results through one documented interface.",
    evidence: "Service identity, request schema, result schema, correlation, source health, and supplier owner review.",
    question: "Is authority delegated to any downstream identity?",
  },
  {
    actor: "Workflow service",
    relationship: "Fictional internal service that maintains case state.",
    authority: "Validate and apply approved state transitions.",
    evidence: "Service identity, state version, policy result, transition event, correlation, and reconciliation.",
    question: "How are stale, duplicate, or misordered results handled?",
  },
  {
    actor: "Notification service",
    relationship: "Fictional service that communicates case status and user actions.",
    authority: "Send approved messages to approved destinations using minimized content.",
    evidence: "Template, destination, audience, event, delivery status, preference state, and source health.",
    question: "How are stale notifications prevented after recovery?",
  },
  {
    actor: "Archival service identity",
    relationship: "Fictional non-human identity supporting retention and recovery.",
    authority: "Perform bounded archival actions on approved records.",
    evidence: "Owner, purpose, role, schedule, destination, activity, review, and recovery dependency.",
    question: "Who currently owns the identity and whether its review is current?",
  },
  {
    actor: "Recovery coordinator",
    relationship: "Fictional authorized role managing continuity events.",
    authority: "Invoke approved recovery workflows, coordinate owners, validate state, and close emergency access.",
    evidence: "Event trigger, approval, action, source artifact, validation, reconciliation, communication, and closure.",
    question: "Which actions require independent approval during degraded operation?",
  },
];

const flows = [
  {
    id: "FL-01",
    path: "Student portal user → Web portal",
    purpose: "Create a fictional support request.",
    data: "Account reference, support category, minimized description, document reference, and contact preference.",
    controls: "Identity, object ownership, required fields, input validation, duplicate handling, confirmation, and evidence.",
    failure: "Invalid, duplicate, incomplete, or confusing request state.",
    recovery: "Correct request state, preserve user intent, explain status, and reconcile duplicates.",
  },
  {
    id: "FL-02",
    path: "Web portal → Supplier processing service",
    purpose: "Request fictional document processing.",
    data: "Case reference, approved processing category, document reference, priority, and only approved optional fields.",
    controls: "Service identity, minimized schema, destination restriction, correlation, purpose, access, retention, and supplier review.",
    failure: "Excessive field, wrong destination, delayed request, or unclear supplier state.",
    recovery: "Pause unsafe field, correct request, reconcile result, and review supplier handling.",
  },
  {
    id: "FL-03",
    path: "Supplier processing service → Result queue",
    purpose: "Return a fictional processing result.",
    data: "Case reference, result category, result state, confidence, timestamp, version, and correlation.",
    controls: "Source identity, schema, freshness, ordering, duplicate detection, queue health, and evidence.",
    failure: "Delayed, stale, duplicate, misordered, malformed, or uncorrelated result.",
    recovery: "Quarantine uncertain result, review, reconcile state, correct notifications, and close evidence.",
  },
  {
    id: "FL-04",
    path: "Result queue → Workflow service",
    purpose: "Apply an approved fictional state transition.",
    data: "Validated result, current state version, target transition, correlation, and reason.",
    controls: "State compatibility, object check, version, idempotence, policy, event, and reconciliation.",
    failure: "Incorrect state update, duplicate action, or hidden backlog.",
    recovery: "Restore correct state, remove duplicate effects, notify owners, and document resolution.",
  },
  {
    id: "FL-05",
    path: "Workflow service → Notification service",
    purpose: "Create a fictional user-facing case update.",
    data: "Approved message type, minimized status, required action, destination reference, and preference state.",
    controls: "Template approval, audience restriction, state freshness, preference check, accessibility, delivery evidence, and correction.",
    failure: "Stale, excessive, inaccessible, delayed, or misdirected communication.",
    recovery: "Suppress stale message, send correction, restore preference, and update support guidance.",
  },
  {
    id: "FL-06",
    path: "Support console → Workflow and notification services",
    purpose: "Perform an approved fictional support change.",
    data: "Actor, assigned case, reason, action, old state, new state, confirmation, approval, and result.",
    controls: "Role, object assignment, verification, required reason, approval, confirmation, evidence, and quality review.",
    failure: "Unsupported change, missing evidence, incorrect state, or user communication error.",
    recovery: "Review action, restore correct state, confirm with user, and record outcome.",
  },
  {
    id: "FL-07",
    path: "Portal and connected services → Monitoring service",
    purpose: "Provide minimized fictional defensive evidence.",
    data: "Actor type, action type, target reference, result, state, timing, source health, correlation, and control outcome.",
    controls: "Purpose limitation, field minimization, access, retention, source health, event quality, correlation, and review.",
    failure: "Noise, missing context, unhealthy evidence, over-collection, or false confidence.",
    recovery: "Restore evidence pipeline, mark blind period, use alternate evidence, and review affected decisions.",
  },
  {
    id: "FL-08",
    path: "Recovery service → Connected services",
    purpose: "Restore fictional service and business state.",
    data: "Recovery trigger, source artifact, configuration baseline, state record, identity, dependency status, validation, and closure.",
    controls: "Strong recovery identity, approval, trusted baseline, order, integrity, reconciliation, communication, emergency-access revocation, and review.",
    failure: "Technical service returns with stale business state, repeated tasks, broad authority, or missing evidence.",
    recovery: "Re-enter degraded mode, correct sequence, reconcile, communicate, and document lessons.",
  },
];

const abuseCases = [
  {
    id: "AB-01",
    title: "Stale supplier result changes current case state",
    context: "Fictional supplier service, result queue, and workflow service.",
    preconditions: "Result delay, changed case state, incomplete freshness or state-version validation.",
    outcome: "Incorrect case status, duplicate action, misleading communication, support burden, or trust loss.",
    category: "Primary integrity; secondary availability, dependency, accountability, resilience.",
    evidence: "Queue delay, support pattern, state records, source-health dashboard, and recovery exercise.",
    unknowns: "Current ordering, reconciliation, duplicate handling, and production frequency.",
  },
  {
    id: "AB-02",
    title: "Free-text support note crosses supplier boundary",
    context: "Fictional support workflow, portal service, and processing supplier.",
    preconditions: "Field exists, may be populated, and purpose or minimization is unresolved.",
    outcome: "Unnecessary data sharing, broad audience, unsupported retention, or privacy expectation harm.",
    category: "Primary privacy; secondary confidentiality, governance, supplier dependency.",
    evidence: "Supplier-field inventory and proposed request schema.",
    unknowns: "Current use, purpose, access, retention, and downstream processing.",
  },
  {
    id: "AB-03",
    title: "Unowned archival service identity remains active",
    context: "Fictional archival service identity and recovery workflow.",
    preconditions: "Missing owner, expired review, unclear current purpose or scope.",
    outcome: "Unreviewed authority, weak attribution, retention error, or recovery dependency uncertainty.",
    category: "Primary governance; secondary identity, authorization, accountability, recovery.",
    evidence: "Service-identity record, service catalog, and recovery reference.",
    unknowns: "Current owner, authority, activity, delegation, and retirement need.",
  },
  {
    id: "AB-04",
    title: "Support notification change lacks verification and confirmation evidence",
    context: "Fictional support analyst, student user, and notification service.",
    preconditions: "Action permitted by role, but reason or user-confirmation fields are incomplete.",
    outcome: "Incorrect preference, missed message, privacy expectation change, or support dispute.",
    category: "Primary accountability; secondary authorization, privacy, integrity, governance.",
    evidence: "Support ticket review and role matrix.",
    unknowns: "Actual authorization, correctness, user impact, and actor intent.",
  },
  {
    id: "AB-05",
    title: "Recovery returns application before dependencies are ready",
    context: "Fictional recovery coordinator and connected services.",
    preconditions: "Restore sequence emphasizes application availability before queue, notification, archive, and evidence validation.",
    outcome: "Stale messages, repeated archival tasks, inconsistent case state, or broad emergency authority.",
    category: "Primary resilience; secondary integrity, availability, accountability, safety, trust.",
    evidence: "Fictional recovery exercise.",
    unknowns: "Current corrective controls, future frequency, and owner closure.",
  },
  {
    id: "AB-06",
    title: "Temporary migration import remains enabled without current purpose",
    context: "Fictional migration service identity and import interface.",
    preconditions: "Temporary path exists in inventory, ownership and activity are unresolved.",
    outcome: "Unexpected data path, weak validation, stale authority, or hidden dependency.",
    category: "Primary governance; secondary identity, authorization, integrity, accountability.",
    evidence: "Temporary-interface inventory.",
    unknowns: "Reachability, activity, accepted data, owner, and retirement status.",
  },
  {
    id: "AB-07",
    title: "Monitoring source appears healthy while business evidence is delayed",
    context: "Fictional monitoring service and result queue.",
    preconditions: "Health status measures connectivity but may not represent freshness or business completion.",
    outcome: "Delayed detection, false confidence, incorrect triage, or stale risk decisions.",
    category: "Primary accountability; secondary availability, integrity, governance.",
    evidence: "Green health indicator during a twenty-two-minute delay.",
    unknowns: "Dashboard semantics, source-health checks, alert thresholds, and alternate evidence.",
  },
  {
    id: "AB-08",
    title: "Future analytics design combines event sources without approved purpose",
    context: "Fictional analytics service, data owners, and event sources.",
    preconditions: "Proposed design lacks approved fields, purpose, audience, retention, ownership, and safeguards.",
    outcome: "Over-collection, unsupported inference, broad access, misleading analysis, or long-lived data use.",
    category: "Primary privacy; secondary governance, confidentiality, integrity, accountability.",
    evidence: "Fictional analytics proposal.",
    unknowns: "Final design, fields, controls, current deployment, and owner decisions.",
  },
];

const risks = [
  {
    id: "RSK-01",
    scenario: "Stale supplier result changes current case state.",
    impact: "High—case integrity, user decisions, communication, support load, evidence, and recovery.",
    likelihood: "Moderate—one fictional delay and exercise support plausibility, but current frequency and controls remain incomplete.",
    controls: "Schema validation designed; source health operating; reconciliation, ordering, duplicate handling, and recovery evidence partial.",
    uncertainty: "Moderate to High.",
    residual: "High provisional.",
    priority: "Immediate workflow, supplier, evidence, and recovery owner review.",
  },
  {
    id: "RSK-02",
    scenario: "Free-text support note may cross supplier boundary.",
    impact: "Moderate to High—depends on content, purpose, access, retention, and user expectation.",
    likelihood: "Unknown—field exists in inventory, but current population is not established.",
    controls: "Minimization expected; approved purpose, schema enforcement, retention, and owner evidence incomplete.",
    uncertainty: "Decision-blocking for final residual ranking.",
    residual: "Not final.",
    priority: "Assign data owner and validate current-state field use before approval.",
  },
  {
    id: "RSK-03",
    scenario: "Unowned archival service identity remains active.",
    impact: "High potential—identity, archival state, retention, evidence, and recovery could be affected.",
    likelihood: "Moderate—active status and expired review are supported; misuse and excessive authority are not proven.",
    controls: "Identity exists and may be logged; owner, scope, review, and recovery dependencies incomplete.",
    uncertainty: "High.",
    residual: "High provisional.",
    priority: "Validate purpose, owner, authority, activity, lifecycle, and recovery before change.",
  },
  {
    id: "RSK-04",
    scenario: "Notification change lacks verification and confirmation evidence.",
    impact: "Moderate—communication, privacy expectations, workflow state, and trust.",
    likelihood: "Moderate—multiple fictional tickets show the evidence gap.",
    controls: "Role and ticketing exist; reason, verification, correlation, confirmation, and review incomplete.",
    uncertainty: "Moderate.",
    residual: "Moderate.",
    priority: "Improve support workflow and evidence quality.",
  },
  {
    id: "RSK-05",
    scenario: "Recovery returns application before dependencies are ready.",
    impact: "High—stale business state, repeated actions, incorrect communication, and weak closure.",
    likelihood: "Moderate—supported by one fictional exercise.",
    controls: "Recovery plan and backups exist; dependency gates, reconciliation, communication, and emergency-access closure incomplete.",
    uncertainty: "Moderate.",
    residual: "High.",
    priority: "Prioritize recovery sequencing, evidence, and re-test.",
  },
  {
    id: "RSK-06",
    scenario: "Temporary migration import remains enabled without current purpose.",
    impact: "Moderate to High depending on authority, data, validation, and environment.",
    likelihood: "Unknown because current activity and reachability are not established.",
    controls: "Inventory record exists; ownership, lifecycle, activity, monitoring, and retirement evidence incomplete.",
    uncertainty: "High.",
    residual: "Provisional.",
    priority: "Validate before retain, restrict, or retire decision.",
  },
];

const mitigations = [
  {
    risk: "RSK-01 — Stale supplier result",
    design: "Make current workflow state and result version explicit.",
    prevent: "Require state compatibility, source identity, correlation, duplicate and ordering checks.",
    detect: "Monitor queue age, freshness, state mismatch, source health, and reconciliation failure.",
    respond: "Pause uncertain automatic updates and route affected records to controlled fictional review.",
    recover: "Reconcile case, notification, archive, support, and evidence state.",
    govern: "Assign supplier, workflow, queue, evidence, recovery, and residual-risk owners.",
    residual: "Supplier delay and manual review workload remain.",
  },
  {
    risk: "RSK-02 — Free-text supplier field",
    design: "Remove the field or replace it with a limited approved category unless a necessary purpose is approved.",
    prevent: "Enforce a minimized supplier schema and approved purpose.",
    detect: "Monitor field presence and schema deviation without broadly storing sensitive content.",
    respond: "Pause unapproved field use and notify fictional data and supplier owners.",
    recover: "Correct requests and review downstream retention where authorized.",
    govern: "Define purpose, fields, access, retention, deletion, owner, and exception expiration.",
    residual: "Supplier processing and metadata exposure may remain.",
  },
  {
    risk: "RSK-03 — Unowned archival identity",
    design: "Separate archival authority from unrelated processing and define one narrow purpose.",
    prevent: "Limit actions, objects, destinations, environments, schedules, and recovery use.",
    detect: "Monitor owner status, review expiration, activity, denied actions, and schedule.",
    respond: "Validate purpose, assign owner, restrict unsupported authority, and preserve evidence.",
    recover: "Verify archival and recovery workflows before rotation, replacement, suspension, or retirement.",
    govern: "Require lifecycle, review, exception, recovery, and retirement ownership.",
    residual: "Recovery dependency and specialized operational knowledge remain.",
  },
  {
    risk: "RSK-04 — Support notification change",
    design: "Make verification, reason, target, approval, and user confirmation structured workflow fields.",
    prevent: "Require correct role, case assignment, allowed action, object, and approved change type.",
    detect: "Correlate ticket, actor, target, old state, new state, reason, result, and confirmation.",
    respond: "Review incomplete changes and correct unsafe state through approved fictional process.",
    recover: "Restore preference, correct missed communication, and document outcome.",
    govern: "Assign support, identity, privacy, notification, evidence, and risk owners.",
    residual: "Human error and review workload remain.",
  },
  {
    risk: "RSK-05 — Recovery sequencing",
    design: "Create recovery gates for identity, queue, workflow, notification, archive, evidence, and business-state readiness.",
    prevent: "Do not declare full service before required validation and approval.",
    detect: "Monitor stale state, repeated tasks, delayed notifications, invalid identity references, and reconciliation gaps.",
    respond: "Declare degraded mode, limit unsafe actions, preserve evidence, and communicate status.",
    recover: "Restore in order, reconcile state, validate user outcomes, revoke emergency access, and close the event.",
    govern: "Approve recovery order, roles, evidence, exceptions, exercises, and review cadence.",
    residual: "Complex dependencies and recovery time remain.",
  },
];

const assumptions = [
  {
    id: "ASM-01",
    statement: "The fictional result queue preserves ordering for one case reference.",
    confidence: "Moderate",
    evidence: "Queue design summary and interface sequence notes.",
    limits: "No complete delay, retry, failover, or recovery evidence.",
    consequence: "If false, stale-state, duplicate, mitigation, and recovery decisions must be revised.",
    owner: "Fictional workflow integration owner",
    review: "Expires after queue, supplier, retry, or recovery change.",
  },
  {
    id: "ASM-02",
    statement: "The fictional supplier free-text field may be used in current requests.",
    confidence: "Low",
    evidence: "Field appears in the documented schema.",
    limits: "No current usage, purpose, access, retention, or payload evidence.",
    consequence: "If unused, current risk may decrease; if broadly used, mitigation urgency may increase.",
    owner: "Fictional data owner—currently unassigned",
    review: "Decision-blocking until validated.",
  },
  {
    id: "ASM-03",
    statement: "The fictional archival identity remains necessary for approved retention and recovery.",
    confidence: "Moderate",
    evidence: "Service catalog and recovery references.",
    limits: "Owner, scope, activity, and current review are incomplete.",
    consequence: "If purpose ended or changed, authority and lifecycle decisions must be revised.",
    owner: "Fictional records and recovery owner",
    review: "Review before any lifecycle decision and after recovery change.",
  },
  {
    id: "ASM-04",
    statement: "The fictional Green source-health status measures connectivity rather than complete event freshness.",
    confidence: "Moderate",
    evidence: "Green status remained during a twenty-two-minute result delay.",
    limits: "Dashboard semantics and implementation are not fully documented.",
    consequence: "Monitoring design and risk confidence may change after validation.",
    owner: "Fictional monitoring owner",
    review: "Review after telemetry or dashboard changes.",
  },
  {
    id: "ASM-05",
    statement: "The fictional recovery exercise is relevant to current recovery design but does not establish production frequency.",
    confidence: "High for exercise observation; Moderate for current-state inference",
    evidence: "Exercise output showing stale messages and repeated archival tasks.",
    limits: "One exercise and incomplete corrective-action evidence.",
    consequence: "Residual risk may increase or decrease after current control validation.",
    owner: "Fictional continuity owner",
    review: "Review after corrective action and the next exercise.",
  },
];

const reviewFindings = [
  {
    id: "REV-01",
    criterion: "Every High residual risk must link to current control-operating and failure evidence.",
    observation: "Three fictional High risks cite designed controls but incomplete operating evidence.",
    impact: "Residual-risk reduction may be overstated.",
    severity: "High review severity",
    action: "Attach fictional operating, source-health, failure, and recovery evidence or revise residual rankings.",
    owner: "Fictional control assurance owner",
    closure: "Each affected risk shows evidence, limitations, revised rationale, approval, and review trigger.",
    status: "Open—blocks final residual-risk acceptance.",
  },
  {
    id: "REV-02",
    criterion: "Every important assumption must have an owner and valid review state.",
    observation: "The archival identity assumption expired after a recovery-design change.",
    impact: "Identity, governance, archival, and recovery conclusions may be stale.",
    severity: "High review severity",
    action: "Validate purpose, owner, authority, activity, lifecycle, and recovery dependency.",
    owner: "Fictional identity and continuity owners",
    closure: "Updated assumption and dependent decisions are approved with current evidence.",
    status: "Blocked.",
  },
  {
    id: "REV-03",
    criterion: "Threat categories must improve decision ownership and control selection.",
    observation: "Four fictional scenarios use more secondary categories than distinct decisions justify.",
    impact: "Category inflation reduces clarity and comparison.",
    severity: "Moderate review severity",
    action: "Keep one primary category and only secondary labels that change assets, controls, evidence, owners, or recovery.",
    owner: "Fictional threat-model facilitator",
    closure: "Updated worksheet contains rationale and preserved uncategorized concerns.",
    status: "Open.",
  },
  {
    id: "REV-04",
    criterion: "Current and future-state scenarios must be distinguished.",
    observation: "The future analytics proposal is clearly labeled, but one summary paragraph implies current exposure.",
    impact: "Leadership may misunderstand deployment state and urgency.",
    severity: "Moderate review severity",
    action: "Revise summary language and preserve future-state design requirements.",
    owner: "Fictional model editor",
    closure: "All references align with future-state status and no incident claim remains.",
    status: "In Review.",
  },
  {
    id: "REV-05",
    criterion: "Public artifacts must remain fictional, privacy-safe, and non-operational.",
    observation: "The package uses invented names, records, dates, systems, identities, and evidence and contains no real targets.",
    impact: "Safe-publication quality is currently strong.",
    severity: "Informational strength",
    action: "Retain final safe-publication check before delivery.",
    owner: "Fictional publication reviewer",
    closure: "Final package passes the safety checklist.",
    status: "Ready.",
  },
];

const evidenceMatrix = [
  {
    id: "EV-01",
    source: "Fictional architecture context",
    observation: "The web portal, identity, supplier, queue, workflow, notification, monitoring, archive, and recovery relationships are documented.",
    supports: "The workshop can model those relationships and their trust changes.",
    limits: "The record does not prove every current path, identity, field, control, temporary interface, or failure state.",
    decision: "Use the context as a starting point and preserve current-state validation actions.",
  },
  {
    id: "EV-02",
    source: "Fictional queue-health dashboard",
    observation: "Result events were delayed twenty-two minutes while source health remained Green.",
    supports: "Availability, integrity, evidence semantics, dependency, and recovery questions are justified.",
    limits: "The dashboard does not prove data loss, malicious activity, one cause, or future frequency.",
    decision: "Create a stale-result scenario and monitoring-semantic assumption.",
  },
  {
    id: "EV-03",
    source: "Fictional support-ticket pattern",
    observation: "Users submitted duplicate documents after delayed notifications.",
    supports: "User, workflow, service, communication, support, and integrity impact may be meaningful.",
    limits: "The pattern does not prove the delay was the only cause.",
    decision: "Use bounded impact evidence and preserve alternative explanations.",
  },
  {
    id: "EV-04",
    source: "Fictional supplier-field inventory",
    observation: "A free-text support-note field appears in the request schema.",
    supports: "Privacy, confidentiality, governance, supplier, and minimization questions are valid.",
    limits: "Current use, purpose, access, retention, and downstream handling are unresolved.",
    decision: "Block final privacy ranking until a fictional data owner validates use.",
  },
  {
    id: "EV-05",
    source: "Fictional service-identity review",
    observation: "The archival service identity lacks a confirmed owner and is past review.",
    supports: "Identity, governance, authority, evidence, retention, and recovery uncertainty are elevated.",
    limits: "The record does not prove compromise, misuse, broad permission, or harmful activity.",
    decision: "Create an owner-validation action without destructive or accusatory response.",
  },
  {
    id: "EV-06",
    source: "Fictional support-ticket review",
    observation: "Several notification changes lack reason and user-confirmation fields.",
    supports: "Accountability and workflow evidence are incomplete.",
    limits: "The evidence does not prove unauthorized action, incorrect preferences, harmful outcome, or intent.",
    decision: "Choose proportionate workflow and evidence mitigations.",
  },
  {
    id: "EV-07",
    source: "Fictional recovery exercise",
    observation: "Application service returned before notification and archival dependencies were validated.",
    supports: "Recovery sequencing, reconciliation, communication, identity, evidence, and closure concerns are credible.",
    limits: "One exercise does not establish current frequency or all control effectiveness.",
    decision: "Prioritize recovery gates and re-test with fictional evidence.",
  },
  {
    id: "EV-08",
    source: "Fictional mitigation register",
    observation: "Several controls are designed or planned but lack operating, failure, or recovery evidence.",
    supports: "Residual-risk reduction should remain provisional.",
    limits: "The register does not prove the controls are absent or ineffective.",
    decision: "Assign validation actions and avoid unsupported closure.",
  },
];

const commonMistakes = [
  {
    mistake: "Starting with threats before defining the decision",
    why: "The fictional workshop may produce a large list that does not support any architecture, risk, mitigation, or ownership choice.",
    correction: "Begin with a charter, decision, audience, scope, exclusions, and success criteria.",
  },
  {
    mistake: "Letting one participant dominate",
    why: "Technical or author perspectives may hide privacy, user, support, supplier, recovery, accessibility, and mission concerns.",
    correction: "Use independent pre-work, structured rounds, role-based questions, and a facilitator.",
  },
  {
    mistake: "Treating workshop discussion as evidence",
    why: "A fictional participant statement may be useful context but does not automatically prove current state or control operation.",
    correction: "Record the statement, source, limits, confidence, owner, validation, and affected decisions.",
  },
  {
    mistake: "Creating disconnected registers",
    why: "Assets, scenarios, risks, controls, assumptions, and findings may not explain one another.",
    correction: "Use stable identifiers and complete traceability chains.",
  },
  {
    mistake: "Ranking too early",
    why: "Impact, likelihood, control state, and uncertainty may be guessed before flows and scenarios are clear.",
    correction: "Complete context, evidence, abuse cases, and category rationale before final ranking.",
  },
  {
    mistake: "Choosing tools instead of control objectives",
    why: "The fictional team may select familiar controls that do not reduce the root condition.",
    correction: "Define the exact risk dimension and scenario condition that must improve.",
  },
  {
    mistake: "Ignoring failure and recovery",
    why: "A mitigation may work during normal operation but fail during delay, retry, degraded mode, emergency, or restore.",
    correction: "Model safe failure, alternate evidence, response, reconciliation, communication, and closure.",
  },
  {
    mistake: "Hiding unresolved disagreement",
    why: "Different owner perspectives can reveal important assumptions and tradeoffs.",
    correction: "Record disagreement, evidence, rationale, uncertainty, and decision authority.",
  },
  {
    mistake: "Ending without owners and maintenance",
    why: "The fictional model may become stale immediately after the workshop.",
    correction: "Assign owners, dates, triggers, versions, closure evidence, and reopened-finding rules.",
  },
  {
    mistake: "Using real internal material",
    why: "Real systems, identities, logs, suppliers, controls, gaps, recovery details, and priorities may be sensitive or unsafe.",
    correction: "Invent every organization, system, identity, scenario, record, control, owner, date, decision, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Create the fictional workshop charter",
    action: "Define the Northbridge decision, scope, exclusions, participants, roles, evidence package, criteria, outputs, schedule, and safety boundary.",
    output: "Charter, role map, agenda, decision-rights map, and safe-use statement.",
    quality: "The workshop is clearly limited to invented, defensive, non-operational analysis.",
  },
  {
    step: "2",
    title: "Build system context",
    action: "Map the fictional mission, services, users, identities, data, environments, suppliers, dependencies, current state, future state, degraded state, and recovery state.",
    output: "System context, scope map, dependency list, and exclusions.",
    quality: "A reader can explain the mission and boundary without real-world knowledge.",
  },
  {
    step: "3",
    title: "Create asset and actor registers",
    action: "Document fictional values, owners, harm, evidence, human roles, service identities, authority, lifecycle, and open questions.",
    output: "Asset register, actor register, authority map, and owner-gap list.",
    quality: "The model includes mission, privacy, evidence, safety, trust, and recovery assets.",
  },
  {
    step: "4",
    title: "Map entry points, flows, and boundaries",
    action: "For each important fictional relationship, record purpose, data, identity, state, validation, trust change, evidence, failure, recovery, and owner.",
    output: "Entry-point inventory, flow register, and trust-boundary map.",
    quality: "No flow is represented only by an arrow or vague label.",
  },
  {
    step: "5",
    title: "Write and categorize abuse cases",
    action: "Create safe fictional scenarios across deliberate, accidental, process, supplier, automation, usability, degraded, and recovery families.",
    output: "At least sixteen abuse cases, category rationale, uncategorized concerns, and intent-uncertainty notes.",
    quality: "Scenarios describe outcomes and controls without procedural harmful detail.",
  },
  {
    step: "6",
    title: "Rank risks",
    action: "Use defined fictional impact, likelihood, exposure, control, uncertainty, confidence, recovery, priority, and urgency criteria.",
    output: "Inherent and residual risk register, disagreement log, blocked decisions, and owner actions.",
    quality: "Every rating has rationale and evidence limits.",
  },
  {
    step: "7",
    title: "Choose layered mitigations",
    action: "Generate fictional design, prevention, detection, response, recovery, privacy, governance, communication, and evidence controls.",
    output: "Mitigation decision matrix, selected packages, tradeoffs, owners, validation, and residual risk.",
    quality: "Controls address the scenario and root conditions rather than only adding monitoring.",
  },
  {
    step: "8",
    title: "Document assumptions and limits",
    action: "Record fictional observations, interpretations, assumptions, unknowns, exclusions, constraints, confidence, consequences, owners, expiration, and triggers.",
    output: "Assumption register, limitations register, evidence-gap queue, and confidence map.",
    quality: "Decision-blocking gaps remain visible and are not forced into final conclusions.",
  },
  {
    step: "9",
    title: "Conduct peer review",
    action: "Use published criteria to review scope, evidence, traceability, consistency, category quality, risk rationale, control evidence, recovery, assumptions, ownership, maintenance, and safety.",
    output: "Finding register, action plan, completion criteria, sign-off matrix, and revised model version.",
    quality: "Findings challenge the artifact, not the people.",
  },
  {
    step: "10",
    title: "Deliver and maintain",
    action: "Prepare fictional leadership, technical, portfolio, and maintenance outputs with versions, dates, owners, triggers, closure evidence, and retrospective.",
    output: "Complete threat-model package, leadership brief, technical appendix, maintenance plan, and reflection.",
    quality: "The package is useful, honest, maintainable, and safe for public learning.",
  },
];

const quizQuestions = [
  {
    question: "What should happen first in a professional threat-modeling workshop?",
    choices: [
      "Assign risk scores.",
      "Define the fictional decision, scope, participants, evidence, outputs, and safety boundary.",
      "Choose security tools.",
      "Write the final report.",
    ],
    answer: 1,
    explanation: "A charter ensures the workshop supports a fictional decision and remains bounded and safe.",
  },
  {
    question: "Why are stable identifiers useful across workshop artifacts?",
    choices: [
      "They make the document look technical.",
      "They connect assets, flows, abuse cases, risks, mitigations, assumptions, findings, owners, and review history.",
      "They eliminate the need for evidence.",
      "They prove the model is complete.",
    ],
    answer: 1,
    explanation: "Stable identifiers support traceability and maintenance.",
  },
  {
    question: "A future analytics design lacks approved purpose and fields. What is the most responsible workshop decision?",
    choices: [
      "Treat it as a current incident.",
      "Label it future-state, document potential risk and design requirements, and block implementation approval until required decisions exist.",
      "Ignore it because it is not deployed.",
      "Assign a current residual score anyway.",
    ],
    answer: 1,
    explanation: "Future-state risks should be reviewed before implementation but must not be misrepresented as current exposure.",
  },
  {
    question: "What is the strongest reason to include recovery in threat modeling?",
    choices: [
      "Backups always eliminate risk.",
      "Technical availability can return while business state, identity, evidence, communication, or trust remains incorrect.",
      "Recovery only matters after an incident.",
      "Recovery replaces preventive controls.",
    ],
    answer: 1,
    explanation: "Recovery must restore correct technical and business outcomes, not only service availability.",
  },
  {
    question: "Which workshop output makes uncertainty most maintainable?",
    choices: [
      "A paragraph saying some information is unknown.",
      "A structured fictional assumption and limitations register with owners, confidence, consequences, expiration, validation, and triggers.",
      "A larger risk score.",
      "A list of unanswered questions without ownership.",
    ],
    answer: 1,
    explanation: "Structured ownership and review fields turn uncertainty into manageable work.",
  },
  {
    question: "What should a workshop do with a finding that blocks residual-risk acceptance?",
    choices: [
      "Hide it so the workshop can finish.",
      "Record the criterion, evidence, decision impact, owner, completion criterion, status, and blocked decision.",
      "Delete the affected risk.",
      "Automatically mark it Critical.",
    ],
    answer: 1,
    explanation: "Blocked decisions should remain visible and tied to measurable closure actions.",
  },
  {
    question: "Which portfolio approach is safest?",
    choices: [
      "Use a real threat model but remove the organization name.",
      "Use real logs but change dates.",
      "Invent every organization, system, identity, flow, scenario, record, control, owner, date, decision, and outcome from scratch.",
      "Use a real recovery design because it is defensive.",
    ],
    answer: 2,
    explanation: "Complete fictionalization protects real systems, people, suppliers, gaps, controls, recovery details, and priorities.",
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
        Module Test
      </Link>
    </div>
  );
}

export default function ThreatModelingWorkshopLabPage() {
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
              Lesson 10 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Capstone Workshop Lab
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A3.10 Threat Modeling Workshop Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Combine the full A3 workflow in one completely fictional,
            professional workshop. Build system context, asset and actor
            registers, flow and trust-boundary maps, abuse cases, categories,
            risk rankings, mitigation packages, assumptions, limitations,
            peer-review findings, sign-off decisions, and a maintainable public
            portfolio package.
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
          lessonTitle="Threat Modeling Workshop Lab"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, systems, assets, actors, identities, interfaces, flows, scenarios, evidence, controls, owners, dates, decisions, and outcomes.",
            "I will follow the complete fictional threat-modeling workflow instead of jumping directly to risks or controls.",
            "I will preserve privacy, safety, recovery, usability, accessibility, evidence, ownership, uncertainty, and current-versus-future-state distinctions.",
            "I will challenge fictional reasoning and artifacts without accusing people or assuming malicious intent.",
            "I will not force final decisions through decision-blocking uncertainty or count a control as effective without evidence.",
            "I will not access, scan, test, configure, investigate, monitor, recover, or change any real system or use real internal threat-model material.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Workshop Must Produce Decisions, Not Just Diagrams"
        >
          <p className="leading-8">
            A fictional Northbridge team enters a workshop with an architecture
            diagram, a queue-delay dashboard, several support tickets, a
            supplier-field inventory, a service-identity review, and one
            recovery exercise. The evidence is useful but incomplete. The team
            must decide which risks are ready to rank, which controls are
            justified, which assumptions block decisions, and what must be
            reviewed before sign-off.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak workshop outcome
              </p>
              <p className="mt-2 leading-7">
                A polished diagram, a list of “critical threats,” and generic
                recommendations with no evidence, owners, uncertainty,
                recovery, completion criteria, or review triggers.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong workshop outcome
              </p>
              <p className="mt-2 leading-7">
                A traceable fictional package that identifies decision-ready,
                conditional, and blocked areas and assigns evidence,
                mitigations, owners, closure criteria, residual risk, and
                maintenance triggers.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            The workshop succeeds when authorized fictional owners can explain
            what the model supports, what it does not prove, what must change,
            and when the model must be reviewed again.
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
          title="Integration Reveals Gaps That Individual Worksheets Can Hide"
        >
          <p className="leading-8">
            A fictional asset register may look strong while a related data
            flow is missing. A High risk may appear justified until reviewers
            notice that control evidence is only planned. A mitigation may look
            complete until recovery and privacy owners identify new
            dependencies. The workshop connects these pieces and exposes where
            decisions do not yet align.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Integration",
                "Connect fictional mission, architecture, evidence, scenarios, risk, mitigation, assumptions, review, and maintenance.",
              ],
              [
                "Decision quality",
                "Distinguish what is ready, conditional, blocked, accepted, provisional, or reopened.",
              ],
              [
                "Portfolio value",
                "Demonstrate professional defensive reasoning without exposing or testing any real system.",
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
          title="The W-O-R-K-S-H-O-P Method"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["W — Write the charter", "Define fictional decision, scope, roles, evidence, outputs, criteria, and safety."],
              ["O — Outline the system", "Map mission, assets, actors, interfaces, flows, boundaries, dependencies, states, and exclusions."],
              ["R — Reason through misuse", "Create safe fictional abuse cases, categories, alternatives, and intent uncertainty."],
              ["K — Know the risk", "Assess impact, likelihood, exposure, controls, uncertainty, confidence, priority, urgency, and recovery."],
              ["S — Select mitigations", "Choose layered design, prevention, detection, response, recovery, privacy, governance, communication, and evidence controls."],
              ["H — Highlight assumptions", "Record fictional beliefs, unknowns, evidence limits, confidence, consequences, owners, expiration, and triggers."],
              ["O — Obtain peer challenge", "Review traceability, consistency, evidence, categories, risk, controls, recovery, ownership, safety, and maintenance."],
              ["P — Package and preserve", "Deliver leadership and technical outputs with versions, closure evidence, residual risk, dates, owners, and review triggers."],
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
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for the Full Workshop"
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
            Workshop Phase Map
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Phases from Charter to Maintenance
          </h2>

          <div className="mt-6 grid gap-5">
            {workshopPhases.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.phase}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.purpose}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Core questions
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.questions}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Outputs
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.outputs}</p>
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
          eyebrow="Fictional System Brief"
          title="Northbridge Student-Support Cooperative"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Organization", "Northbridge Student-Support Cooperative, a completely fictional organization created for defensive learning."],
              ["Mission", "Provide a fictional web portal for support requests, document references, case updates, and authorized communication."],
              ["Services", "Web portal, identity, support console, document-processing supplier, result queue, notification, monitoring, archive, and recovery."],
              ["Actors", "Fictional students, support staff, supervisors, administrators, supplier services, service identities, recovery coordinators, privacy owners, and system owners."],
              ["Data", "Fictional account details, contact preferences, support categories, document references, case state, supplier results, notification state, event evidence, and retention metadata."],
              ["Constraints", "The fictional supplier cannot be replaced this quarter; the mobile client is outside scope; all exercises use invented data; no real systems may be accessed or tested."],
            ].map(([label, detail]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {label}
                </p>
                <p className="mt-2 leading-7 text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Asset Workshop
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Prioritize What the Fictional System Must Protect
          </h2>

          <div className="mt-6 grid gap-5">
            {assets.map((item) => (
              <article
                key={item.asset}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.asset}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Value", item.value],
                    ["Owner", item.owner],
                    ["Potential harm", item.harm],
                    ["Evidence", item.evidence],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.asset}-${label}`}
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

        <SectionCard
          eyebrow="Actor Workshop"
          title="Map Relationship, Authority, Evidence, and Lifecycle"
        >
          <div className="grid gap-5">
            {actors.map((item) => (
              <article
                key={item.actor}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.actor}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Relationship", item.relationship],
                    ["Authority", item.authority],
                    ["Evidence", item.evidence],
                    ["Open question", item.question],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.actor}-${label}`}
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
          eyebrow="Flow and Boundary Workshop"
          title="Trace Purpose, Identity, State, Evidence, Failure, and Recovery"
        >
          <div className="grid gap-5">
            {flows.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.path}</h3>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Data", item.data],
                    ["Controls", item.controls],
                    ["Failure", item.failure],
                    ["Recovery", item.recovery],
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
          eyebrow="Abuse-Case Workshop"
          title="Create Safe Fictional Misuse Scenarios"
        >
          <div className="grid gap-5">
            {abuseCases.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 font-mono text-xs font-black text-purple-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.title}</h3>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Actor context", item.context],
                    ["Preconditions", item.preconditions],
                    ["Potential outcome", item.outcome],
                    ["Categories", item.category],
                    ["Evidence", item.evidence],
                    ["Unknowns", item.unknowns],
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Risk Workshop
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Rank Fictional Scenarios without False Precision
          </h2>

          <div className="mt-6 grid gap-5">
            {risks.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.scenario}</h3>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Impact", item.impact],
                    ["Likelihood", item.likelihood],
                    ["Control evidence", item.controls],
                    ["Uncertainty", item.uncertainty],
                    ["Residual risk", item.residual],
                    ["Priority", item.priority],
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

        <SectionCard
          eyebrow="Mitigation Workshop"
          title="Choose Layered Fictional Control Packages"
        >
          <div className="grid gap-5">
            {mitigations.map((item) => (
              <article
                key={item.risk}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.risk}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Design", item.design],
                    ["Prevent", item.prevent],
                    ["Detect", item.detect],
                    ["Respond", item.respond],
                    ["Recover", item.recover],
                    ["Govern", item.govern],
                    ["Residual risk", item.residual],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.risk}-${label}`}
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
          eyebrow="Assumption Workshop"
          title="Make Beliefs, Limits, and Consequences Visible"
        >
          <div className="grid gap-5">
            {assumptions.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 font-mono text-xs font-black text-yellow-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.statement}</h3>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Confidence", item.confidence],
                    ["Evidence", item.evidence],
                    ["Evidence limits", item.limits],
                    ["Consequence if false", item.consequence],
                    ["Owner", item.owner],
                    ["Review and expiration", item.review],
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
          eyebrow="Peer-Review Workshop"
          title="Convert Model Defects into Measurable Actions"
        >
          <div className="grid gap-5">
            {reviewFindings.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 font-mono text-xs font-black text-red-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.criterion}</h3>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Decision impact", item.impact],
                    ["Review severity", item.severity],
                    ["Corrective action", item.action],
                    ["Owner", item.owner],
                    ["Completion criterion", item.closure],
                    ["Status", item.status],
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
          eyebrow="Traceability Matrix"
          title="Follow One Fictional Concern across the Entire Workshop"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {["Layer", "Fictional record", "Decision contribution", "Maintenance trigger"].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {[
                  ["Mission", "Accurate and timely student-support decisions.", "Defines impact and urgency.", "Service objective or user population changes."],
                  ["Asset", "Case-state integrity and user communication.", "Defines what must remain correct and trusted.", "Data model or workflow state changes."],
                  ["Actors", "Supplier service, queue, workflow service, support reviewer.", "Defines authority, responsibility, and evidence.", "Identity, delegation, role, or ownership changes."],
                  ["Entry point", "Supplier result interface.", "Defines exposure and accepted operations.", "Interface, schema, destination, or lifecycle changes."],
                  ["Flow", "Supplier result → queue → workflow.", "Defines purpose, state, validation, and recovery.", "Queue, retry, ordering, or recovery changes."],
                  ["Boundary", "Supplier-to-Northbridge administrative boundary.", "Defines trust, identity, schema, evidence, and responsibility.", "Supplier, contract, identity, or control changes."],
                  ["Abuse case", "Stale result changes current case state.", "Defines unsafe outcome and control questions.", "New ticket, exercise, event, or workflow change."],
                  ["Category", "Primary integrity; secondary availability, dependency, accountability, resilience.", "Organizes owners and control perspectives.", "Scenario meaning or affected outcome changes."],
                  ["Risk", "High provisional residual risk.", "Sets priority and evidence needs.", "Impact, likelihood, control, uncertainty, or mission changes."],
                  ["Mitigation", "State version, correlation, freshness evidence, review, reconciliation, communication.", "Defines expected risk reduction.", "Control design, operation, failure, or recovery changes."],
                  ["Assumption", "Queue preserves ordering for one case.", "Limits confidence and selected control design.", "Supplier, queue, retry, failover, or evidence changes."],
                  ["Review finding", "Operating reconciliation evidence incomplete.", "Blocks final residual-risk acceptance.", "Closure evidence or new contradiction."],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={cell} className="px-4 py-4 align-top leading-6 text-slate-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge Workshop Dashboard"
          subtitle="Fictional workshop progress, traceability, blocked decisions, ownership, and review status for training only."
          metrics={[
            {
              label: "Traceable high-priority risks",
              value: "4 / 4",
              note: "Each high-priority fictional risk links to assets, actors, flows, scenarios, evidence, controls, assumptions, owners, and triggers.",
            },
            {
              label: "Decision-blocking gaps",
              value: "3",
              note: "Supplier field use, archival identity ownership, and control-operating evidence still block final decisions.",
            },
            {
              label: "Review actions with completion criteria",
              value: "11 / 13",
              note: "Two fictional actions still use vague wording and require measurable closure evidence.",
            },
          ]}
        />

        <FakeAlertCard
          title="Workshop Sign-Off Attempts to Close a Blocked Privacy Decision"
          severity="High"
          time="6:04 PM"
          source="Fake Northbridge Workshop Governance Console"
          details="The fictional workshop summary marks all privacy decisions Complete even though current use, purpose, access, retention, and ownership of the supplier free-text field remain unresolved."
          recommendation="Reclassify the affected privacy decision as Blocked, assign a fictional data owner, preserve evidence limits, define validation and completion criteria, and update risk, mitigation, sign-off, and review triggers."
        />

        <FakeLogPanel
          title="Fake Threat-Modeling Workshop Timeline"
          logs={[
            "09:00 CHARTER decision='support-portal-review' scope='web+services'",
            "09:08 SAFETY fictional='true' real-testing='prohibited'",
            "09:16 ASSET count='8' mission-owner='assigned'",
            "09:24 ACTOR count='8' service-identity-gap='archive'",
            "09:32 ENTRYPOINT count='8' temporary='migration-import'",
            "09:40 FLOW count='8' recovery-flow='included'",
            "09:48 BOUNDARY supplier='administrative' identity='required'",
            "09:56 ABUSECASE count='8' intent-proof='none'",
            "10:04 CATEGORY inflation='review-needed'",
            "10:12 RISK high='4' blocked='2' provisional='3'",
            "10:20 MITIGATION layered='5-packages'",
            "10:28 ASSUMPTION open='5' unowned='1' expired='1'",
            "10:36 REVIEW finding='5' blocking='3'",
            "10:44 TRACE high-risk='complete'",
            "10:52 SIGNOFF architecture='conditional' privacy='blocked'",
            "11:00 SIGNOFF recovery='conditional' publication='ready'",
            "11:08 ACTION owners='assigned-11-of-13'",
            "11:16 MAINTENANCE triggers='defined'",
            "11:24 CONFIDENCE package='moderate'",
            "18:04 ALERT issue='privacy-signoff-overreach'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Workshop Evidence Supports—and What It Does Not Prove
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
                    ["Workshop decision", item.decision],
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
          title="Which Final Workshop Decision Is Best Supported?"
          question="Which conclusion most responsibly summarizes the fictional Northbridge workshop?"
          evidence={[
            "The fictional model has clear scope, mission, asset, actor, flow, boundary, abuse-case, category, risk, mitigation, assumption, and review artifacts.",
            "Four high-priority risks are traceable across the model.",
            "The supplier free-text field remains decision-blocking because current use, purpose, access, retention, and ownership are unresolved.",
            "The archival service identity lacks current ownership and review evidence.",
            "Several controls are designed but lack complete operating, failure, or recovery evidence.",
            "Recovery sequencing concerns are supported by one fictional exercise.",
            "Safe-publication review found no real targets, credentials, routes, logs, or operational harmful instructions.",
            "The package has Moderate overall confidence.",
          ]}
          options={[
            "Issue partial and conditional sign-off: architecture and scenario coverage are usable, publication is ready, but privacy, identity, and some residual-risk decisions remain blocked until assigned owners provide measurable fictional evidence and update dependent artifacts.",
            "Approve every decision because the package is detailed.",
            "Reject the entire workshop because uncertainty remains.",
            "Mark every risk Very High and remove all conditional decisions.",
          ]}
          bestAnswer={0}
          explanation="The first option uses the complete evidence, distinguishes decision-ready and blocked areas, preserves uncertainty, assigns next actions, and avoids both false approval and unnecessary rejection."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Errors That Weaken the Workshop"
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
          title="Complete the Northbridge Threat-Modeling Workshop"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            access, scan, test, configure, investigate, monitor, recover, or
            change any real system. Do not use real identities, logs, routes,
            suppliers, diagrams, controls, incidents, recovery details,
            credentials, internal records, or organizational priorities.
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
          title="The Workshop Is Running Out of Time"
          scenario="The fictional team has completed scope, assets, actors, flows, and abuse cases, but risk rankings, assumptions, and peer review remain incomplete. A participant proposes assigning quick scores and signing off."
          choices={[
            {
              label: "Choice A",
              response: "Preserve completed artifacts, mark remaining decisions provisional or blocked, assign owners and a focused follow-up session, and do not force unsupported rankings or sign-off.",
              outcome: "Best defensive choice. Time pressure does not create evidence or decision readiness.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Assign the highest score to every scenario so nothing is missed.",
              outcome: "Weak. This destroys prioritization and creates unsupported severity.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Approve the model because the diagrams are complete.",
              outcome: "Weak. Diagrams do not replace risk, mitigation, assumption, ownership, or review evidence.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Reviewer Finds a Real-Looking Detail in the Portfolio Draft"
          scenario="The fictional portfolio draft contains a realistic internal-style route and a copied log pattern that may resemble a real environment, even though the organization name is invented."
          choices={[
            {
              label: "Choice A",
              response: "Remove and replace the detail with clearly invented, non-operational content, repeat the safe-publication review, and document the correction.",
              outcome: "Best choice. Fictional naming alone is not enough if detail may expose or imitate real internal information.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Keep it because the organization name is fictional.",
              outcome: "Unsafe. Public artifacts should avoid real or operational internal-style detail.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Publish it but add a disclaimer.",
              outcome: "Insufficient. A disclaimer does not remove unsafe or sensitive detail.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend a Conditional Sign-Off before Fictional Leadership"
        >
          <p className="leading-8">
            Fictional leadership wants one answer: “Is the portal safe?” The
            workshop shows that architecture coverage is strong, supplier-result
            risk is High provisional, privacy is blocked on field-use evidence,
            recovery controls are conditional, and public publication is ready.
            Prepare an accurate decision without saying simply yes or no.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["State the decision scope", "Explain which fictional design, risk, mitigation, and publication decisions were reviewed."],
              ["Separate readiness states", "Identify Ready, Conditional, Blocked, Accepted, Provisional, and Reopened areas."],
              ["Explain evidence and confidence", "Summarize strongest evidence, important limits, and Moderate overall confidence."],
              ["Name blocked decisions", "State why supplier-field use, archival identity ownership, and control operation require evidence."],
              ["Assign next actions", "Give each fictional action an owner, completion criterion, due condition, and trigger."],
              ["Avoid guarantees", "Explain that the model supports decisions but does not certify perfect security or predict every event."],
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
              Produce a fictional five-minute leadership briefing, sign-off
              matrix, blocked-decision list, owner action table, residual-risk
              summary, confidence statement, safe-publication statement,
              maintenance schedule, and response to “Is it safe?” without
              overpromising.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Threat Modeling Workshop Lab Checklist"
          items={[
            "I can create a fictional workshop charter with decision, scope, roles, evidence, outputs, criteria, and safety boundaries.",
            "I can map mission, assets, actors, identities, entry points, flows, trust boundaries, dependencies, current state, future state, degraded state, and recovery state.",
            "I can write safe fictional abuse cases without operational harmful instructions or unsupported intent claims.",
            "I can use conceptual categories without treating them as proof or severity.",
            "I can rank fictional risks using impact, likelihood, exposure, controls, uncertainty, confidence, recovery, priority, and urgency.",
            "I can choose layered fictional mitigations across design, prevention, detection, response, recovery, privacy, governance, communication, and evidence.",
            "I can document assumptions, unknowns, exclusions, constraints, confidence, consequences, owners, expiration, and review triggers.",
            "I can trace a fictional risk from mission and assets through actors, flows, boundaries, scenarios, controls, evidence, assumptions, findings, and maintenance.",
            "I can conduct a multidisciplinary fictional peer review and preserve disagreement without blaming people.",
            "I can write measurable review findings, completion criteria, blocked decisions, conditional approvals, and closure evidence.",
            "I can create leadership, technical, portfolio, maintenance, and retrospective outputs.",
            "I can complete a safe-publication review and ensure every organization, system, identity, scenario, record, control, owner, date, decision, and outcome is invented.",
          ]}
        />

        <MiniQuiz
          title="A3.10 Mini Quiz: Threat Modeling Workshop Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a complete, fully fictional Threat-Modeling Workshop Package for the Northbridge Student-Support Portal. Include a workshop charter, decision statement, scope, exclusions, safety boundary, agenda, role assignments, evidence index, system context, dependency map, at least twelve assets, at least twelve actors, at least twelve entry points, at least fifteen flows, trust-boundary decisions, at least twenty abuse cases, primary and secondary category rationale, uncategorized concerns, a published risk-ranking method, at least fifteen risk records, layered mitigation packages, tradeoff analysis, validation plans, at least fifteen assumptions, at least ten limitations, evidence provenance, blocked decisions, confidence statements, multidisciplinary review findings, completion criteria, sign-off matrix, leadership summary, technical appendix, maintenance schedule, review triggers, closure evidence, retrospective, reflection, and a statement that every organization, asset, actor, identity, system, interface, flow, scenario, record, control, owner, date, decision, and outcome is invented."
          tips={[
            "Use stable fictional identifiers so every important decision can be traced across the entire package.",
            "Distinguish current, future, temporary, degraded, recovery, conditional, blocked, accepted, provisional, and reopened states.",
            "Preserve evidence limits and confidence instead of forcing unsupported certainty.",
            "Show how selected controls will be validated during normal, failure, degraded, emergency, and recovery conditions using only invented data.",
            "Keep the entire package defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the A3 Module Test?"
        >
          <p className="leading-8">
            Rate your readiness from 1 to 5 for chartering, scope, assets,
            actors, entry points, flows, trust boundaries, abuse cases,
            categories, risk ranking, mitigation, assumptions, peer review,
            leadership communication, maintenance, safe publication, and
            complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain the complete fictional threat-modeling lifecycle from purpose to maintenance.",
              "I can produce traceable artifacts instead of disconnected lists and diagrams.",
              "I can separate evidence, interpretation, assumption, unknown, category, severity, intent, control state, and residual risk.",
              "I can identify what is Ready, Conditional, Blocked, Accepted, Provisional, or Reopened.",
              "I can explain why recovery, privacy, usability, accessibility, evidence, and ownership belong in threat modeling.",
              "I can defend a conditional sign-off without overpromising or hiding uncertainty.",
              "I can build a public portfolio package without real targets, logs, routes, identities, credentials, configurations, or operational harmful detail.",
              "I can proceed to the module test with a clear list of concepts that still need review.",
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
            Record one fictional decision that became conditional, one that
            remained blocked, one mitigation that changed after peer review,
            one assumption that affected a risk ranking, one safety correction,
            and three topics you will review before the A3 Module Test.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "A professional fictional workshop begins with a decision, scope, roles, evidence, outputs, criteria, and safety boundary.",
            "Threat modeling is a connected lifecycle, not a collection of independent diagrams, labels, scores, or controls.",
            "Mission, privacy, user, evidence, safety, trust, supplier, and recovery assets belong beside technical assets.",
            "Actors should be modeled by relationship, authority, lifecycle, and evidence rather than assumed intent.",
            "Flows and trust boundaries must explain purpose, data, identity, state, validation, evidence, failure, and recovery.",
            "Abuse cases should remain fictional, defensive, outcome-focused, and non-operational.",
            "Risk rankings require defined impact, likelihood, exposure, control, uncertainty, confidence, recovery, priority, and urgency criteria.",
            "Mitigations should be layered, failure-aware, privacy-aware, maintainable, testable, and honest about residual risk.",
            "Assumptions, limits, blocked decisions, disagreement, findings, closure evidence, and review triggers make the model trustworthy.",
            "Every CyberShield workshop package must remain fully fictional, authorized, defensive, non-operational, privacy-safe, maintainable, and incapable of exposing real systems or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete Module A3
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            You have completed the full fictional threat-modeling workflow.
            Continue to the A3 Module Test to evaluate scope, assets, actors,
            flows, trust boundaries, abuse cases, categories, risk ranking,
            mitigation, assumptions, review, ethics, safety, and maintenance.
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