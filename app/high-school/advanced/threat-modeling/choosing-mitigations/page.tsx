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
const previousLesson = `${modulePath}/risk-ranking-in-threat-models`;
const nextLesson = `${modulePath}/documenting-assumptions-and-limits`;

const objectives = [
  "Explain fictional mitigation selection as a decision process that connects a specific threat scenario to mission needs, affected assets, root conditions, risk rationale, control evidence, owners, limitations, and residual risk.",
  "Compare fictional mitigation options across design change, prevention, detection, response, recovery, privacy, governance, communication, evidence quality, and operational sustainability.",
  "Build layered fictional control strategies that reduce impact, likelihood, exposure, uncertainty, recovery time, and harmful user outcomes without relying on one safeguard.",
  "Evaluate fictional mitigation tradeoffs involving usability, privacy, cost, complexity, maintainability, supplier responsibility, accessibility, resilience, and unintended consequences.",
  "Create a portfolio-ready fictional mitigation decision package that remains ethical, authorized, defensive, evidence-aware, privacy-safe, non-operational, and completely invented.",
];

const vocabulary = [
  [
    "Mitigation",
    "A fictional design, process, technical, operational, privacy, governance, communication, detection, response, or recovery action intended to reduce a specific risk.",
  ],
  [
    "Risk treatment",
    "A fictional decision to reduce, avoid, transfer, accept, monitor, gather evidence about, or escalate a risk.",
  ],
  [
    "Preventive control",
    "A fictional safeguard intended to stop an unsafe action, state, flow, exposure, or condition before harmful impact occurs.",
  ],
  [
    "Detective control",
    "A fictional safeguard intended to reveal unsafe behavior, missing context, failed validation, unhealthy evidence, policy divergence, or degraded service.",
  ],
  [
    "Responsive control",
    "A fictional capability that supports triage, containment, escalation, communication, evidence preservation, and coordinated action after a concerning condition is detected.",
  ],
  [
    "Recovery control",
    "A fictional capability that restores correct technical and business state, authority, evidence, communication, and trust after disruption or misuse.",
  ],
  [
    "Design mitigation",
    "A fictional change to architecture, workflow, interface, data flow, role model, process state, dependency, or system behavior that removes or reduces a risky condition.",
  ],
  [
    "Compensating control",
    "A fictional alternative safeguard used when the preferred control is not feasible, while preserving equivalent or clearly documented risk reduction.",
  ],
  [
    "Defense in depth",
    "A fictional strategy that combines multiple independent or complementary controls so one failure does not determine the entire outcome.",
  ],
  [
    "Control objective",
    "The fictional outcome a mitigation must achieve, such as limiting authority, preserving integrity, minimizing data, detecting delay, or validating recovery.",
  ],
  [
    "Control owner",
    "The fictional role accountable for control design, implementation, operation, evidence, monitoring, review, exception, failure, and retirement.",
  ],
  [
    "Control dependency",
    "A fictional service, identity, process, data source, supplier, human role, or evidence source on which a mitigation relies.",
  ],
  [
    "Control limitation",
    "A fictional condition, scope boundary, failure mode, blind spot, assumption, cost, usability effect, privacy effect, or dependency that reduces control effectiveness.",
  ],
  [
    "Control evidence",
    "Fictional records that show whether a mitigation is designed, implemented, operating, monitored, reviewed, and resilient.",
  ],
  [
    "Residual risk",
    "The fictional risk remaining after considering mitigation effects, limitations, dependencies, uncertainty, and recovery.",
  ],
  [
    "Risk reduction",
    "The fictional improvement created by lowering impact, likelihood, exposure, uncertainty, recovery difficulty, or harmful user consequences.",
  ],
  [
    "Control coverage",
    "The fictional extent to which a set of mitigations addresses prevention, detection, response, recovery, privacy, governance, communication, and evidence needs.",
  ],
  [
    "Control overlap",
    "The fictional degree to which several mitigations address the same condition, which may provide resilience or unnecessary duplication.",
  ],
  [
    "Control gap",
    "A fictional scenario condition, asset, flow, boundary, failure state, or recovery need not adequately addressed by current mitigations.",
  ],
  [
    "Tradeoff",
    "A fictional benefit and cost relationship involving security, privacy, usability, accessibility, performance, resilience, complexity, maintainability, budget, or mission outcomes.",
  ],
  [
    "Unintended consequence",
    "A fictional harmful or undesirable result caused by a mitigation, such as unsafe workarounds, excessive data collection, user confusion, hidden backlog, or concentrated privilege.",
  ],
  [
    "Implementation readiness",
    "The fictional degree to which ownership, scope, requirements, dependencies, evidence, approvals, resources, and success criteria are defined.",
  ],
  [
    "Validation plan",
    "A fictional method for checking whether a mitigation achieves its objective under normal, failure, degraded, emergency, and recovery conditions.",
  ],
  [
    "Mitigation review trigger",
    "A fictional change that requires the control decision to be reconsidered, such as a new supplier, interface, role, workflow, incident lesson, evidence gap, or recovery result.",
  ],
];

const mitigationPrinciples = [
  {
    principle: "Mitigate the scenario, not the label",
    description:
      "Choose fictional controls for the exact actor, asset, action, object, flow, boundary, state, precondition, and harmful outcome.",
    strongPractice:
      "Address stale supplier results with state validation, correlation, delay handling, reconciliation, communication, and recovery—not a generic “integrity tool.”",
    failure:
      "Category-based control lists may look complete while missing the actual scenario.",
  },
  {
    principle: "Prefer removing risky conditions",
    description:
      "When practical, change the fictional design so the dangerous precondition, unnecessary data flow, broad authority, or fragile dependency no longer exists.",
    strongPractice:
      "Remove an unnecessary free-text field rather than relying only on monitoring after it crosses a supplier boundary.",
    failure:
      "Layering controls around an unnecessary design can preserve cost, complexity, and residual exposure.",
  },
  {
    principle: "Use multiple control functions",
    description:
      "Combine fictional prevention, detection, response, recovery, privacy, governance, communication, and evidence controls.",
    strongPractice:
      "Prevent duplicate processing, detect queue delay, respond with controlled triage, reconcile state, and communicate clearly.",
    failure:
      "One control failure may leave no visibility or recovery path.",
  },
  {
    principle: "Match the risk rationale",
    description:
      "Mitigations should reduce the specific impact, likelihood, exposure, uncertainty, or recovery difficulty identified in A3.6.",
    strongPractice:
      "If uncertainty drives priority, collect evidence and assign owners rather than pretending a new technical control alone solves the problem.",
    failure:
      "Controls may be selected because they are familiar rather than because they reduce the documented risk.",
  },
  {
    principle: "Define ownership and evidence",
    description:
      "Every fictional mitigation needs a named owner, success criteria, operating evidence, source health, review cadence, failure behavior, and retirement plan.",
    strongPractice:
      "Record who maintains state-validation rules and which events prove acceptance, rejection, and reconciliation.",
    failure:
      "Unowned controls may become stale or assumed effective without proof.",
  },
  {
    principle: "Preserve privacy and usability",
    description:
      "A fictional security control should not collect unnecessary information, create confusing workflows, block legitimate users, or push teams toward unsafe workarounds.",
    strongPractice:
      "Use proportionate identity assurance and minimal evidence fields tied to a clear purpose.",
    failure:
      "A control can reduce one risk while creating privacy, accessibility, or operational harm.",
  },
  {
    principle: "Plan for control failure",
    description:
      "Assume a fictional control can be unavailable, misconfigured, bypassed by normal process, overwhelmed, stale, or dependent on unhealthy evidence.",
    strongPractice:
      "Define fail-safe behavior, alternate evidence, escalation, graceful degradation, and recovery.",
    failure:
      "A mitigation can become a new single point of failure.",
  },
  {
    principle: "Validate under realistic states",
    description:
      "Check fictional controls during normal, failure, retry, support, administrative, supplier, degraded, emergency, and recovery conditions.",
    strongPractice:
      "Test with invented data whether duplicate handling still works after a queue delay and recovery.",
    failure:
      "A control may work only on the happy path.",
  },
  {
    principle: "Document residual risk",
    description:
      "No fictional mitigation removes all uncertainty, dependency, human error, or failure possibility.",
    strongPractice:
      "Explain what remains, who owns it, which evidence is required, and when the decision must be revisited.",
    failure:
      "Teams may declare a scenario solved and stop monitoring meaningful change.",
  },
  {
    principle: "Choose sustainable controls",
    description:
      "A fictional mitigation should be maintainable, understandable, reviewable, affordable, and compatible with mission needs.",
    strongPractice:
      "Prefer clear workflow state checks and owner evidence over a complex rule set no team can maintain.",
    failure:
      "Complexity can create hidden exceptions, stale logic, and operational dependence.",
  },
];

const mitigationFamilies = [
  {
    family: "Design and architecture change",
    objective:
      "Remove or reduce the fictional condition that creates the risk.",
    examples:
      "Eliminate unnecessary data fields, separate administrative functions, narrow trust relationships, isolate recovery paths, simplify dependencies, or redesign workflow state.",
    evidence:
      "Architecture decision, updated flow, interface definition, owner approval, dependency review, and design validation.",
    limitations:
      "Design changes can be costly, slow, disruptive, or dependent on suppliers and legacy processes.",
    strongestWhen:
      "The risk is driven by unnecessary exposure, broad trust, complex state, concentrated authority, or avoidable dependency.",
  },
  {
    family: "Identity and authorization",
    objective:
      "Ensure the correct fictional actor or service performs only approved actions on approved objects under defined conditions.",
    examples:
      "Narrow roles, object-level checks, assignment validation, service-identity ownership, time-bound authority, stronger approval, and recovery-access governance.",
    evidence:
      "Policy decisions, role maps, access reviews, administrative events, lifecycle records, approval, and denial evidence.",
    limitations:
      "Identity controls can fail when roles are stale, object context is missing, emergency access expands, or suppliers use shared identities.",
    strongestWhen:
      "The scenario depends on broad authority, stale lifecycle, unclear actor context, weak separation, or incomplete approval.",
  },
  {
    family: "Input, state, and integrity validation",
    objective:
      "Reject or isolate fictional requests, events, files, results, or actions that do not match expected format, meaning, source, object, state, timing, or version.",
    examples:
      "Schema checks, semantic validation, freshness, state checks, versioning, duplicate detection, ordering, correlation, and reconciliation.",
    evidence:
      "Validation results, rejected-event records, state transitions, version history, correlation, test outcomes, and business-state checks.",
    limitations:
      "Validation rules can become stale, overly strict, incomplete, inconsistent, or dependent on poor source data.",
    strongestWhen:
      "The scenario involves stale, duplicated, reordered, malformed, incomplete, or semantically incorrect information.",
  },
  {
    family: "Data minimization and privacy",
    objective:
      "Limit fictional collection, use, sharing, inference, retention, audience, and derived information to the approved purpose.",
    examples:
      "Remove free-text fields, restrict notifications, minimize supplier payloads, define retention, mask sensitive context, and limit analytics sources.",
    evidence:
      "Field inventory, purpose approval, privacy review, data-flow record, access evidence, retention schedule, and deletion confirmation.",
    limitations:
      "Minimization can fail if downstream copies, logs, exports, support notes, metadata, or derived data remain unreviewed.",
    strongestWhen:
      "The scenario depends on unnecessary data, unclear purpose, broad audience, long retention, supplier sharing, or inference.",
  },
  {
    family: "Segmentation and exposure reduction",
    objective:
      "Reduce fictional reachability, shared trust, privilege concentration, and unnecessary communication paths.",
    examples:
      "Separate administrative access, restrict supplier interfaces, isolate recovery services, limit environment paths, and narrow service destinations.",
    evidence:
      "Zone map, policy decision, connection evidence, service identity, interface inventory, change review, and denial events.",
    limitations:
      "Segmentation may create operational complexity, hidden alternate paths, or false confidence if identity and application controls remain weak.",
    strongestWhen:
      "The scenario depends on broad reachability, shared zones, supplier trust, privileged paths, or environment mixing.",
  },
  {
    family: "Monitoring and evidence quality",
    objective:
      "Provide trustworthy fictional evidence about actor, action, object, reason, result, state, timing, source health, and correlation.",
    examples:
      "Improve event fields, source-health checks, queue-delay monitoring, state reconciliation evidence, approval correlation, and recovery validation.",
    evidence:
      "Event schemas, source-health dashboards, alert reviews, correlation records, retention decisions, access records, and quality checks.",
    limitations:
      "Monitoring can over-collect data, create noise, miss context, become unhealthy, or be ignored without clear owners and response paths.",
    strongestWhen:
      "The scenario is driven by uncertainty, missing context, delayed detection, ambiguous health, or weak accountability.",
  },
  {
    family: "Operational workflow and human process",
    objective:
      "Reduce fictional errors, confusion, unsafe handoffs, broad support action, unclear responsibility, and inconsistent exception handling.",
    examples:
      "Verification steps, reason capture, confirmation, dual review, clearer interfaces, role-specific training, workload controls, and escalation.",
    evidence:
      "Workflow records, tickets, quality reviews, training, user testing with fake data, approvals, and support metrics.",
    limitations:
      "Manual controls can be skipped under pressure, create delay, increase workload, or become ceremonial.",
    strongestWhen:
      "The scenario involves support, administration, human error, usability, handoff, approval, or exceptional workflow.",
  },
  {
    family: "Resilience and graceful degradation",
    objective:
      "Maintain safe fictional service behavior when dependencies fail or become delayed, unavailable, uncertain, or partially recovered.",
    examples:
      "Bounded retries, queue isolation, alternate workflows, safe read-only mode, dependency health, capacity, and clear user status.",
    evidence:
      "Failure tests, queue records, service metrics, degraded-mode decisions, communication, alternate-path validation, and exercises.",
    limitations:
      "Fallback paths can create weaker controls, stale state, hidden backlog, broad emergency access, or user confusion.",
    strongestWhen:
      "The scenario depends on supplier delay, service outage, queue backlog, identity failure, or shared dependency.",
  },
  {
    family: "Response and containment",
    objective:
      "Support fictional triage, safe limitation of impact, evidence preservation, ownership, escalation, and communication when a concerning condition is detected.",
    examples:
      "Pause unsafe processing, isolate a queue, restrict a role, require manual review, preserve events, notify owners, and track decisions.",
    evidence:
      "Alert, case record, decision log, owner assignment, containment action, evidence preservation, communication, and closure review.",
    limitations:
      "Response can cause service disruption, over-containment, lost context, delayed recovery, or inconsistent decisions.",
    strongestWhen:
      "The scenario cannot be fully prevented and timely detection can limit harm.",
  },
  {
    family: "Recovery and reconciliation",
    objective:
      "Restore correct fictional technical and business state, authority, evidence, communication, and trust.",
    examples:
      "Trusted backups, restore order, identity validation, queue reconciliation, duplicate cleanup, notification correction, and emergency-access revocation.",
    evidence:
      "Recovery trigger, source artifact, approval, action, validation, reconciliation, communication, closure, and exercise results.",
    limitations:
      "Recovery may restore systems before business state, identity, notifications, evidence, or user trust are correct.",
    strongestWhen:
      "The scenario can produce stale, duplicated, incorrect, unavailable, or difficult-to-reconstruct state.",
  },
  {
    family: "Governance and lifecycle",
    objective:
      "Clarify fictional ownership, approval, exceptions, evidence, review, risk acceptance, change, and retirement.",
    examples:
      "Assign owners, expire temporary access, review service identities, approve supplier fields, govern exceptions, and retire unused interfaces.",
    evidence:
      "Owner register, approval, review date, exception decision, risk acceptance, change record, offboarding, and retirement confirmation.",
    limitations:
      "Governance documents can become stale or disconnected from implementation and operations.",
    strongestWhen:
      "The scenario is driven by unowned assets, stale identities, temporary interfaces, unclear supplier responsibility, or missing review.",
  },
  {
    family: "Communication and user protection",
    objective:
      "Help fictional users, operators, and owners understand service state, required actions, limitations, and recovery without exposing unnecessary information.",
    examples:
      "Clear status messages, delayed-processing notices, confirmation, safer error text, support guidance, and recovery communication.",
    evidence:
      "Message templates, user feedback, support themes, accessibility review, delivery evidence, and communication exercises.",
    limitations:
      "Messages can be delayed, misunderstood, overly detailed, inaccessible, or inconsistent with actual state.",
    strongestWhen:
      "The scenario affects user decisions, duplicate action, trust, support load, privacy, or degraded service.",
  },
];

const decisionCriteria = [
  {
    criterion: "Scenario fit",
    question:
      "Does the fictional mitigation directly address the documented precondition, capability, flow, trust boundary, harmful outcome, or uncertainty?",
    strongEvidence:
      "Traceability from scenario field to control objective and expected risk reduction.",
    warning:
      "A familiar control may not reduce the actual scenario.",
  },
  {
    criterion: "Risk reduction",
    question:
      "Which fictional impact, likelihood, exposure, uncertainty, or recovery dimension should improve?",
    strongEvidence:
      "Before-and-after rationale tied to the A3.6 risk register.",
    warning:
      "Do not claim exact reduction without evidence.",
  },
  {
    criterion: "Control independence",
    question:
      "Does the fictional mitigation fail independently, or does it rely on the same identity, supplier, evidence source, administrator, or service as another control?",
    strongEvidence:
      "Dependency map, failure review, alternate evidence, and ownership separation.",
    warning:
      "Several controls may appear layered while sharing one failure point.",
  },
  {
    criterion: "Privacy and data use",
    question:
      "Does the fictional mitigation collect, retain, share, infer, or expose additional information?",
    strongEvidence:
      "Purpose, fields, audience, retention, access, and privacy-owner decision.",
    warning:
      "More logging or monitoring can create new privacy risk.",
  },
  {
    criterion: "Usability and accessibility",
    question:
      "Can fictional users and operators understand and complete legitimate tasks without unsafe workarounds?",
    strongEvidence:
      "User journey, interface review, accessibility review, support feedback, and fake-data testing.",
    warning:
      "Overly difficult controls can shift risk into support or shadow processes.",
  },
  {
    criterion: "Operational sustainability",
    question:
      "Can fictional owners operate, monitor, review, update, and recover the mitigation over time?",
    strongEvidence:
      "Staffing, ownership, runbooks, metrics, training, support, maintenance, and review cadence.",
    warning:
      "A control that cannot be maintained may create false confidence.",
  },
  {
    criterion: "Failure behavior",
    question:
      "What happens when the fictional mitigation is unavailable, wrong, delayed, overloaded, misconfigured, or based on stale evidence?",
    strongEvidence:
      "Failure mode, safe default, alternate path, alert, escalation, and recovery test.",
    warning:
      "A mitigation can become a new source of outage or unsafe state.",
  },
  {
    criterion: "Supplier and dependency impact",
    question:
      "Does the fictional mitigation introduce or deepen reliance on a supplier, identity provider, queue, data source, specialist, or external service?",
    strongEvidence:
      "Dependency map, contract responsibility, service evidence, exit plan, and recovery path.",
    warning:
      "Risk may be shifted rather than reduced.",
  },
  {
    criterion: "Implementation readiness",
    question:
      "Are fictional requirements, owners, approvals, resources, dependencies, evidence, and success criteria defined?",
    strongEvidence:
      "Decision record, owner, scope, plan, acceptance criteria, test plan, and review date.",
    warning:
      "A theoretically strong mitigation may not be ready or achievable.",
  },
  {
    criterion: "Residual risk and review",
    question:
      "What fictional risk remains, who owns it, and when must the decision be revisited?",
    strongEvidence:
      "Residual-risk rationale, risk owner, monitoring, exceptions, review trigger, and expiration.",
    warning:
      "No mitigation should be marked complete without residual-risk ownership.",
  },
];

const controlLayerExamples = [
  {
    scenario:
      "Delayed fictional supplier results may update stale case state.",
    design:
      "Make workflow state version explicit and require result-to-state compatibility before update.",
    prevention:
      "Reject stale, duplicate, misordered, or uncorrelated results.",
    detection:
      "Monitor queue age, source health, result-state mismatch, duplicate rate, and reconciliation failures.",
    response:
      "Pause automatic updates when confidence is low and route affected records to controlled review.",
    recovery:
      "Reconcile correct case state, remove duplicate actions, correct notifications, and document closure.",
    governance:
      "Assign supplier, workflow, queue, evidence, and risk owners with review triggers.",
    communication:
      "Show users accurate delayed-processing status without exposing unnecessary details.",
  },
  {
    scenario:
      "A fictional free-text support note may cross to a processing supplier.",
    design:
      "Remove the field or replace it with a limited approved category when the supplier does not need free text.",
    prevention:
      "Enforce an approved field schema and block unnecessary content from the supplier flow.",
    detection:
      "Review field-population metrics and alert on unapproved field use without storing sensitive text broadly.",
    response:
      "Pause the field, notify data and supplier owners, preserve minimal evidence, and review affected flows.",
    recovery:
      "Correct records, remove unnecessary retained copies where authorized, and confirm downstream handling.",
    governance:
      "Document purpose, retention, access, ownership, supplier responsibility, and exception expiration.",
    communication:
      "Explain approved support-note use to operators through clear workflow guidance.",
  },
  {
    scenario:
      "A fictional archival service identity lacks a confirmed owner and current review.",
    design:
      "Separate archival authority from unrelated processing and ensure the identity has a narrow purpose.",
    prevention:
      "Limit the identity to required resources, actions, environment, schedule, and destinations.",
    detection:
      "Monitor activity, ownership status, review expiration, unusual schedule, denied actions, and source health.",
    response:
      "Assign an owner, validate purpose and activity, restrict unsupported authority, and preserve evidence.",
    recovery:
      "Confirm archival and recovery workflows remain correct if the identity is rotated, suspended, or replaced.",
    governance:
      "Require lifecycle, review, rotation, change, exception, and retirement ownership.",
    communication:
      "Provide clear operator guidance for approved identity changes and recovery dependencies.",
  },
  {
    scenario:
      "Fictional notification changes lack reason and user confirmation.",
    design:
      "Make verification, reason, target, and confirmation part of the support workflow rather than optional text.",
    prevention:
      "Require the correct support role, verified user context, allowed object, and approved change type.",
    detection:
      "Correlate support ticket, actor, target, reason, old state, new state, result, and confirmation.",
    response:
      "Review incomplete changes, contact the fictional user through approved channels, and correct unsafe state.",
    recovery:
      "Restore the correct preference, repair missed communication, and document the outcome.",
    governance:
      "Assign support, identity, privacy, notification, evidence, and risk owners.",
    communication:
      "Use clear user-facing confirmation and support guidance.",
  },
  {
    scenario:
      "Fictional recovery restores application service before dependencies are validated.",
    design:
      "Define recovery gates based on identity, queue, notification, archive, evidence, and business-state readiness.",
    prevention:
      "Block full service status until required dependency checks and approvals complete.",
    detection:
      "Monitor stale state, repeated tasks, delayed notifications, invalid identity references, and reconciliation gaps.",
    response:
      "Declare degraded mode, limit unsafe actions, assign owners, preserve evidence, and communicate status.",
    recovery:
      "Restore in defined order, reconcile state, validate user outcomes, revoke emergency access, and close the event.",
    governance:
      "Approve recovery order, evidence, roles, exceptions, and review cadence.",
    communication:
      "Provide accurate degraded and recovery messages to users and stakeholders.",
  },
];

const evidenceMatrix = [
  {
    id: "MT-01",
    source: "Fictional supplier-result risk record",
    observation:
      "Residual risk remains High because state reconciliation, duplicate handling, ordering, delay thresholds, and source-health meaning are only partially evidenced.",
    supports:
      "Mitigation should include state validation, bounded retry, monitoring, controlled response, reconciliation, communication, and ownership.",
    limits:
      "The risk record does not prove one technical design is the only valid solution.",
    use:
      "Compare layered options and define evidence for expected risk reduction.",
  },
  {
    id: "MT-02",
    source: "Fictional supplier-field review",
    observation:
      "A free-text support note may cross the supplier boundary, but current population, purpose, access, retention, and approval are unresolved.",
    supports:
      "Data minimization and governance are likely preferred over adding broad monitoring alone.",
    limits:
      "The evidence does not prove the field is always populated or currently misused.",
    use:
      "Select a provisional design mitigation and assign owner evidence actions.",
  },
  {
    id: "MT-03",
    source: "Fictional service-identity review",
    observation:
      "The archival identity is active, unowned, and past review.",
    supports:
      "Identity lifecycle, least privilege, monitoring, ownership, and recovery validation require mitigation.",
    limits:
      "The evidence does not prove excessive authority, compromise, or harmful activity.",
    use:
      "Avoid immediate destructive action; validate purpose and dependencies before changing fictional state.",
  },
  {
    id: "MT-04",
    source: "Fictional notification-ticket review",
    observation:
      "Several support changes lack reason and user-confirmation evidence.",
    supports:
      "Workflow design, verification, required fields, event correlation, user confirmation, and quality review are relevant.",
    limits:
      "The evidence does not prove unauthorized action or incorrect preferences.",
    use:
      "Choose proportionate process and evidence controls rather than accusing actors.",
  },
  {
    id: "MT-05",
    source: "Fictional recovery exercise",
    observation:
      "Application service returned before notification and archival dependencies were validated.",
    supports:
      "Recovery gates, dependency order, degraded mode, reconciliation, communication, and closure controls are needed.",
    limits:
      "One exercise does not establish future frequency or prove every recovery control fails.",
    use:
      "Design a layered recovery mitigation package and define re-test evidence.",
  },
  {
    id: "MT-06",
    source: "Fictional dashboard review",
    observation:
      "Source health displayed Green during a twenty-two-minute processing-result delay.",
    supports:
      "Monitoring must distinguish source connectivity, event freshness, queue age, processing state, and business impact.",
    limits:
      "The dashboard does not prove data loss or deliberate concealment.",
    use:
      "Improve evidence semantics and alert quality without collecting unnecessary content.",
  },
  {
    id: "MT-07",
    source: "Fictional temporary-interface record",
    observation:
      "A migration-import channel remains documented as enabled without confirmed owner, purpose, activity, or retirement.",
    supports:
      "Ownership, lifecycle validation, restricted authority, monitoring, and retirement decision are relevant.",
    limits:
      "The record does not prove the interface is reachable, used, or unsafe.",
    use:
      "Require fictional validation before deciding to retain, restrict, or retire the interface.",
  },
  {
    id: "MT-08",
    source: "Fictional analytics proposal",
    observation:
      "A future analytics process lacks approved purpose, fields, audience, retention, and ownership.",
    supports:
      "The strongest mitigation may be a design gate that prevents implementation until privacy, governance, evidence, and control requirements are approved.",
    limits:
      "The proposal is not current exposure and does not prove collection or misuse.",
    use:
      "Use pre-implementation requirements rather than incident-style response.",
  },
];

const optionComparison = [
  {
    option: "Add more logging",
    potentialBenefit:
      "May improve fictional accountability, correlation, source-health awareness, and control validation.",
    tradeoffs:
      "Can increase privacy risk, noise, storage, access exposure, cost, and review burden.",
    evidenceNeeded:
      "Purpose, fields, audience, retention, access, event meaning, source health, alert use, and owner review.",
    bestUse:
      "When uncertainty and detection gaps are central and the evidence can remain minimized and useful.",
  },
  {
    option: "Require additional approval",
    potentialBenefit:
      "May reduce broad fictional authority and improve accountability for high-impact actions.",
    tradeoffs:
      "Can create delay, workload, rubber-stamping, emergency bypasses, and inaccessible workflows.",
    evidenceNeeded:
      "Action criticality, approver independence, response time, exception use, completion evidence, and user impact.",
    bestUse:
      "For bounded high-impact actions where independent review meaningfully changes the decision.",
  },
  {
    option: "Block the flow",
    potentialBenefit:
      "May remove fictional exposure or prevent unsafe state immediately.",
    tradeoffs:
      "Can interrupt mission service, create hidden workarounds, lose data, delay users, or shift risk.",
    evidenceNeeded:
      "Flow purpose, dependencies, user impact, alternate path, recovery, communication, and owner approval.",
    bestUse:
      "When the flow is unnecessary, clearly unsafe, or can be paused through authorized fictional governance.",
  },
  {
    option: "Reduce data fields",
    potentialBenefit:
      "May lower fictional privacy, confidentiality, supplier, retention, and evidence exposure.",
    tradeoffs:
      "Can reduce business context, processing quality, support effectiveness, or downstream interpretation.",
    evidenceNeeded:
      "Field purpose, minimum need, transformation, recipient use, retention, access, and outcome testing.",
    bestUse:
      "When the same mission outcome can be achieved with less information.",
  },
  {
    option: "Automate the decision",
    potentialBenefit:
      "May improve fictional consistency, speed, repeatability, and evidence.",
    tradeoffs:
      "Can amplify stale context, hidden bias, incorrect state, low-confidence actions, and unclear accountability.",
    evidenceNeeded:
      "Rule purpose, input quality, confidence, limits, human review, exceptions, versioning, testing, and rollback.",
    bestUse:
      "For narrow, reversible, well-defined decisions with strong guardrails and human oversight.",
  },
  {
    option: "Add a manual review",
    potentialBenefit:
      "May provide contextual judgment for ambiguous or high-impact fictional cases.",
    tradeoffs:
      "Can create delay, inconsistency, workload, privacy access, fatigue, and weak evidence.",
    evidenceNeeded:
      "Reviewer role, criteria, training, workload, decision record, quality review, escalation, and independence.",
    bestUse:
      "When context cannot be safely automated and the review is bounded and supportable.",
  },
  {
    option: "Use a compensating control",
    potentialBenefit:
      "May reduce fictional risk when the preferred design change is not currently feasible.",
    tradeoffs:
      "Can increase complexity, dependency, monitoring burden, and residual uncertainty.",
    evidenceNeeded:
      "Equivalent objective, scope, owner, limitations, expiration, review, operating evidence, and replacement plan.",
    bestUse:
      "As a time-bound, evidence-supported alternative with explicit residual risk.",
  },
  {
    option: "Accept and monitor",
    potentialBenefit:
      "May be proportionate when fictional residual risk is within tolerance and mitigation cost or harm exceeds benefit.",
    tradeoffs:
      "Can become passive neglect if ownership, evidence, triggers, expiration, and review are weak.",
    evidenceNeeded:
      "Authorized risk owner, rationale, conditions, monitoring, thresholds, review date, and change triggers.",
    bestUse:
      "When the decision is explicit, authorized, time-bound, monitored, and revisable.",
  },
];

const commonMistakes = [
  {
    mistake: "Choosing controls before understanding the scenario",
    why:
      "The team may solve a familiar problem rather than the documented fictional precondition or harmful outcome.",
    correction:
      "Start from the A3.6 scenario, risk rationale, controls, uncertainty, and owner decision.",
  },
  {
    mistake: "Using one control as the complete solution",
    why:
      "A single fictional control can fail, become unavailable, depend on the same source, or miss recovery and user impact.",
    correction:
      "Use layered design, prevention, detection, response, recovery, privacy, governance, communication, and evidence controls.",
  },
  {
    mistake: "Adding more monitoring by default",
    why:
      "More fictional data can create privacy risk, noise, cost, broad access, and weak review without improving decisions.",
    correction:
      "Define the defender question first, then collect the minimum evidence needed.",
  },
  {
    mistake: "Ignoring usability and accessibility",
    why:
      "A difficult fictional control may cause unsafe workarounds, support overload, exclusion, or poor user decisions.",
    correction:
      "Review legitimate user journeys, accessibility, clarity, workload, and safer defaults.",
  },
  {
    mistake: "Assuming implementation equals effectiveness",
    why:
      "A deployed fictional control may not operate, be monitored, handle failure, or remain current.",
    correction:
      "Define operating evidence, source health, tests, failure behavior, reviews, and owners.",
  },
  {
    mistake: "Reducing risk by shifting it silently",
    why:
      "A fictional mitigation can move risk to a supplier, support team, recovery process, user, or evidence system.",
    correction:
      "Map new dependencies, owners, tradeoffs, and residual risk explicitly.",
  },
  {
    mistake: "Ignoring unintended consequences",
    why:
      "A fictional control can create delay, privacy over-collection, privilege concentration, hidden backlog, or confusing state.",
    correction:
      "Run a control-focused threat review before implementation.",
  },
  {
    mistake: "Treating compensating controls as permanent",
    why:
      "Temporary fictional alternatives can become long-lived without equivalent coverage or review.",
    correction:
      "Set owner, expiration, evidence, replacement plan, and residual-risk acceptance.",
  },
  {
    mistake: "Declaring the risk solved",
    why:
      "No fictional mitigation removes all dependency, uncertainty, human error, change, or failure.",
    correction:
      "Document residual risk, monitoring, review triggers, owner, and revalidation.",
  },
  {
    mistake: "Using real mitigation plans",
    why:
      "Real controls, gaps, owners, suppliers, recovery processes, timelines, and priorities may be sensitive.",
    correction:
      "Invent every organization, scenario, mitigation, owner, record, date, control, decision, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Select a ranked fictional scenario",
    action:
      "Choose one A3.6 risk with clear scope, affected assets, preconditions, controls, uncertainty, owners, and residual rationale.",
    output:
      "Scenario identifier, current risk statement, and mitigation decision question.",
    quality:
      "The scenario is specific enough to trace every proposed control.",
  },
  {
    step: "2",
    title: "Define control objectives",
    action:
      "State which fictional impact, likelihood, exposure, uncertainty, recovery, privacy, or user outcome must improve.",
    output:
      "Measurable control objectives and success conditions.",
    quality:
      "Objectives describe outcomes rather than naming products or vague control types.",
  },
  {
    step: "3",
    title: "Generate layered options",
    action:
      "Create fictional design, prevention, detection, response, recovery, privacy, governance, communication, and evidence options.",
    output:
      "A mitigation option library with owners and dependencies.",
    quality:
      "At least one option removes or reduces the root condition rather than only monitoring it.",
  },
  {
    step: "4",
    title: "Compare benefits and tradeoffs",
    action:
      "Assess scenario fit, risk reduction, independence, privacy, usability, accessibility, operations, failure, supplier, readiness, and residual risk.",
    output:
      "A decision matrix with rationale and uncertainty.",
    quality:
      "No option is marked best without acknowledging limitations and new risks.",
  },
  {
    step: "5",
    title: "Choose a layered strategy",
    action:
      "Select complementary fictional controls that address normal, failure, degraded, support, administrative, supplier, and recovery states.",
    output:
      "A control package with sequencing and dependencies.",
    quality:
      "The package does not depend entirely on one identity, service, supplier, evidence source, or person.",
  },
  {
    step: "6",
    title: "Define implementation readiness",
    action:
      "Assign fictional owners, scope, requirements, approvals, resources, milestones, exceptions, dependencies, and communication.",
    output:
      "Implementation plan and responsibility map.",
    quality:
      "Each action has one accountable owner and a clear completion condition.",
  },
  {
    step: "7",
    title: "Create the validation plan",
    action:
      "Use invented data to check fictional control behavior during normal, failure, retry, degraded, emergency, and recovery states.",
    output:
      "Test cases, expected evidence, source-health checks, success criteria, and review plan.",
    quality:
      "The validation plan is safe, fictional, and non-operational.",
  },
  {
    step: "8",
    title: "Reassess residual risk",
    action:
      "Explain how the selected fictional controls should change impact, likelihood, exposure, uncertainty, recovery, and user harm.",
    output:
      "Updated residual-risk rationale, owner acceptance, review date, and triggers.",
    quality:
      "Risk reduction is reasoned and evidence-based rather than guaranteed.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest starting point for choosing a mitigation?",
    choices: [
      "A list of popular security tools.",
      "The exact fictional scenario, risk rationale, affected assets, preconditions, controls, uncertainty, and owners.",
      "The threat category alone.",
      "The highest-cost control option.",
    ],
    answer: 1,
    explanation:
      "Mitigation selection begins with the decision-ready scenario and risk rationale.",
  },
  {
    question:
      "Why is a design change often stronger than monitoring alone?",
    choices: [
      "Because monitoring is never useful.",
      "Because a design change may remove the risky condition, unnecessary data flow, broad authority, or fragile dependency before harm occurs.",
      "Because design changes have no tradeoffs.",
      "Because every design change eliminates residual risk.",
    ],
    answer: 1,
    explanation:
      "Removing the risky condition can reduce exposure at the source, though monitoring and recovery may still be needed.",
  },
  {
    question:
      "A fictional free-text field is not required by the supplier. Which mitigation is strongest?",
    choices: [
      "Keep the field and log every value broadly.",
      "Remove or replace the field with a minimal approved value, then validate the supplier schema and evidence.",
      "Ignore it because the connection already exists.",
      "Accuse the supplier of misuse.",
    ],
    answer: 1,
    explanation:
      "Data minimization and schema control address the root condition without unsupported claims.",
  },
  {
    question:
      "What does defense in depth mean?",
    choices: [
      "Using many controls from the same evidence source.",
      "Combining complementary fictional controls so one failure does not determine the entire outcome.",
      "Adding the most expensive control.",
      "Eliminating the need for recovery.",
    ],
    answer: 1,
    explanation:
      "Layered controls should provide complementary prevention, detection, response, recovery, governance, and evidence.",
  },
  {
    question:
      "Why must control failure be modeled?",
    choices: [
      "Because every control always fails.",
      "Because a mitigation can be unavailable, stale, misconfigured, overloaded, or dependent on unhealthy evidence and may become a new risk.",
      "Because failure modeling proves the control is weak.",
      "Because controls should never have dependencies.",
    ],
    answer: 1,
    explanation:
      "Failure-aware design supports safe defaults, escalation, recovery, and realistic residual-risk decisions.",
  },
  {
    question:
      "What is a compensating control?",
    choices: [
      "A permanent excuse for not fixing a risk.",
      "A fictional alternative safeguard used when the preferred control is not feasible, with documented equivalent objective, limitations, evidence, owner, and expiration.",
      "Any additional log source.",
      "A control that guarantees zero risk.",
    ],
    answer: 1,
    explanation:
      "Compensating controls should be justified, time-bound, evidence-supported, and reviewed.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use a real mitigation plan but remove organization names.",
      "Use real control gaps but change dates.",
      "Invent every organization, scenario, mitigation, owner, record, control, date, decision, and outcome from scratch.",
      "Use a real recovery design because it is defensive.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects sensitive systems, controls, suppliers, owners, recovery plans, and priorities.",
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

export default function ChoosingMitigationsPage() {
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
              Lesson 7 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Layered Risk Reduction
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A3.7 Choosing Mitigations
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders choose fictional mitigations that
            address exact threat scenarios and risk rationales. Compare design,
            prevention, detection, response, recovery, privacy, governance,
            communication, evidence, usability, resilience, ownership, and
            residual-risk tradeoffs without relying on one control or claiming
            perfect protection.
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
          lessonTitle="Choosing Mitigations"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, assets, actors, systems, scenarios, mitigations, controls, owners, records, dates, decisions, and outcomes.",
            "I understand that a mitigation should address a specific fictional scenario and risk rationale rather than a category label alone.",
            "I will compare design, prevention, detection, response, recovery, privacy, governance, communication, evidence, usability, accessibility, and operational tradeoffs.",
            "I will not treat a listed or implemented fictional control as effective without operating, monitoring, review, failure, or recovery evidence.",
            "I will document residual risk, control limitations, dependencies, unintended consequences, owners, review dates, and triggers.",
            "I will not access, scan, test, configure, investigate, monitor, recover, or change any real system or use real internal mitigation plans.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Best Mitigation Is Not Always the Most Technical Control"
        >
          <p className="leading-8">
            A fictional Northbridge team discovers that a free-text support note
            may be included in a supplier processing request. One reviewer
            proposes more logging. Another proposes stronger encryption. Those
            controls may have value, but neither asks the most basic design
            question: does the supplier need the field at all? Removing or
            replacing unnecessary data may reduce privacy, confidentiality,
            supplier, retention, monitoring, and recovery risk at the source.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak mitigation
              </p>
              <p className="mt-2 leading-7">
                “Add more security monitoring.” The statement does not identify
                the scenario, objective, evidence, owner, privacy effect,
                failure behavior, success measure, or residual risk.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong mitigation
              </p>
              <p className="mt-2 leading-7">
                “Remove the fictional free-text field unless the data owner
                approves a necessary purpose; enforce the minimized schema,
                monitor field use without collecting content broadly, validate
                supplier retention, and document residual risk.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            A mitigation is successful only when it measurably improves the
            fictional risk decision without creating unacceptable privacy,
            usability, accessibility, resilience, complexity, or operational
            harm.
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
          title="Mitigations Turn Threat Models into Decisions"
        >
          <p className="leading-8">
            A threat model that ends with a list of risks does not yet improve
            the fictional system. Mitigation selection translates risk
            rationales into design, ownership, evidence, operational, privacy,
            response, recovery, and communication decisions. Strong selections
            are specific, layered, proportionate, testable, maintainable, and
            honest about what remains.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Control-objective question",
                "What fictional condition or outcome must change, and which risk dimension should improve?",
              ],
              [
                "Tradeoff question",
                "What new privacy, usability, accessibility, complexity, dependency, cost, or recovery effects could the mitigation create?",
              ],
              [
                "Evidence question",
                "Which fictional records will show the control is implemented, operating, monitored, reviewed, and resilient?",
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
          title="The M-I-T-I-G-A-T-E Method"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "M — Match the scenario",
                "Start with the fictional assets, actor, preconditions, capability, outcome, evidence, controls, uncertainty, and risk rationale.",
              ],
              [
                "I — Identify objectives",
                "Define which impact, likelihood, exposure, uncertainty, recovery, privacy, or user outcome should improve.",
              ],
              [
                "T — Think in layers",
                "Generate design, prevention, detection, response, recovery, privacy, governance, communication, and evidence options.",
              ],
              [
                "I — Investigate tradeoffs",
                "Review usability, accessibility, privacy, performance, complexity, dependency, supplier, cost, and unintended consequences.",
              ],
              [
                "G — Give ownership",
                "Assign control, scenario, evidence, operations, privacy, recovery, supplier, and residual-risk owners.",
              ],
              [
                "A — Assure operation",
                "Define implementation, operating evidence, source health, monitoring, review, failure behavior, and recovery.",
              ],
              [
                "T — Test safely",
                "Validate with completely fictional data across normal, failure, degraded, emergency, support, supplier, and recovery states.",
              ],
              [
                "E — Explain residual risk",
                "Document what remains, confidence, limitations, exceptions, review dates, triggers, and authorized decisions.",
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
              Decision-ready mitigation statement
            </p>
            <p className="mt-2 leading-7">
              This fictional mitigation package addresses a specific scenario
              and control objective through complementary design, prevention,
              detection, response, recovery, privacy, governance,
              communication, and evidence controls. Each control has an owner,
              dependency, limitation, validation plan, success criterion, and
              review trigger. Residual risk remains documented and owned.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Precise Mitigation Selection"
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
            Apply Ten Mitigation Principles
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {mitigationPrinciples.map((item) => (
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
          title="Use Twelve Mitigation Families"
        >
          <p className="leading-8">
            Strong fictional mitigation packages combine several families.
            They do not rely on a single tool, policy, alert, approval, or
            recovery action.
          </p>

          <div className="mt-6 grid gap-5">
            {mitigationFamilies.map((item) => (
              <article
                key={item.family}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.family}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Control objective", item.objective],
                    ["Fictional examples", item.examples],
                    ["Evidence", item.evidence],
                    ["Limitations", item.limitations],
                    ["Strongest when", item.strongestWhen],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.family}-${label}`}
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
            Instructional Section 3
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Compare Ten Decision Criteria
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {decisionCriteria.map((item) => (
              <article
                key={item.criterion}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.criterion}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Decision question
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.strongEvidence}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Warning
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.warning}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Build Layered Control Packages"
        >
          <p className="leading-8">
            The examples below connect fictional A3 risks to design,
            prevention, detection, response, recovery, governance, and
            communication. They are conceptual and do not describe any real
            system or operational implementation.
          </p>

          <div className="mt-6 grid gap-5">
            {controlLayerExamples.map((item) => (
              <article
                key={item.scenario}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.scenario}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Design", item.design],
                    ["Prevention", item.prevention],
                    ["Detection", item.detection],
                    ["Response", item.response],
                    ["Recovery", item.recovery],
                    ["Governance", item.governance],
                    ["Communication", item.communication],
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
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Compare Common Options and Their Tradeoffs"
        >
          <div className="grid gap-5">
            {optionComparison.map((item) => (
              <article
                key={item.option}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.option}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Potential benefit
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.potentialBenefit}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Tradeoffs
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.tradeoffs}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence needed
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.evidenceNeeded}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Best use
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.bestUse}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Separate Mitigation, Evidence, and Residual Risk"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Decision field",
                    "Question answered",
                    "Fictional example",
                    "What it does not prove",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {[
                  [
                    "Control objective",
                    "What risk condition or outcome should improve?",
                    "Prevent stale supplier results from changing current case state.",
                    "That a selected implementation will work.",
                  ],
                  [
                    "Mitigation design",
                    "Which fictional control or design change should achieve the objective?",
                    "Require state-version compatibility and correlation.",
                    "That the control is implemented or operating.",
                  ],
                  [
                    "Implementation evidence",
                    "What shows the fictional control exists in the approved design or workflow?",
                    "Updated interface rule, workflow state record, owner approval.",
                    "That it handles real failure states successfully.",
                  ],
                  [
                    "Operating evidence",
                    "What shows the fictional control behaves as expected?",
                    "Accepted and rejected result events, test outcomes, source health.",
                    "That all paths or future changes are covered.",
                  ],
                  [
                    "Failure evidence",
                    "What happens when the fictional control is unavailable, wrong, delayed, or unhealthy?",
                    "Safe rejection, alert, controlled review, reconciliation.",
                    "That failure will always be contained.",
                  ],
                  [
                    "Tradeoff decision",
                    "Which privacy, usability, accessibility, performance, dependency, cost, or mission effects are accepted?",
                    "Additional review delay is accepted for high-impact state conflicts.",
                    "That every stakeholder agrees.",
                  ],
                  [
                    "Residual risk",
                    "What fictional risk remains after supported control effects?",
                    "Some delay and manual reconciliation remain during supplier outages.",
                    "That the scenario is eliminated.",
                  ],
                  [
                    "Review trigger",
                    "When should the fictional decision be revisited?",
                    "Supplier version, queue design, workflow state, identity, recovery, or evidence changes.",
                    "That scheduled review alone keeps the control current.",
                  ],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td
                        key={cell}
                        className="px-4 py-4 align-top leading-6 text-slate-300"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Mitigation Architecture"
          title="Northbridge Layered Control View"
        >
          <p className="leading-8">
            This conceptual architecture is completely invented. It shows how a
            fictional mitigation package can connect root-condition reduction,
            preventive controls, evidence, response, recovery, governance, and
            user protection.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.3fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Design", "Remove unnecessary fields and simplify risky state"],
                ["Identity", "Narrow human and service authority"],
                ["Validation", "Check object, state, source, version, and timing"],
                ["Exposure", "Limit interfaces, destinations, and environments"],
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
                Fictional Northbridge Control Package
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Prevent", "Authorization, minimization, state validation"],
                  ["Detect", "Events, source health, delay, correlation"],
                  ["Respond", "Controlled pause, review, escalation, evidence"],
                  ["Recover", "Trusted restore, reconciliation, communication"],
                  ["Govern", "Owners, approvals, exceptions, lifecycle"],
                  ["Protect users", "Clear status, confirmation, accessibility"],
                  ["Validate", "Fake-data tests across failure states"],
                  ["Review", "Residual risk, triggers, version, retirement"],
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
                ["Evidence", "Actor, action, object, reason, result, health"],
                ["Operations", "Ownership, maintenance, workload, support"],
                ["Privacy", "Purpose, fields, access, retention, deletion"],
                ["Residual risk", "Limitations, dependencies, uncertainty, triggers"],
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
          title="Fake Northbridge Mitigation Dashboard"
          subtitle="Fictional mitigation coverage, readiness, validation, ownership, and residual-risk status for training only."
          metrics={[
            {
              label: "High risks with selected packages",
              value: "4 / 4",
              note: "Supplier-result, archival-identity, recovery-sequencing, and temporary-interface risks have draft layered strategies.",
            },
            {
              label: "Controls lacking operating evidence",
              value: "9",
              note: "Several controls are designed or planned but do not yet have fictional normal, failure, degraded, or recovery evidence.",
            },
            {
              label: "Residual risks without acceptance",
              value: "3",
              note: "Supplier-delay, compensating monitoring, and emergency-access residual risks need authorized fictional owners.",
            },
          ]}
        />

        <FakeAlertCard
          title="Mitigation Package Relies on One Evidence Source"
          severity="High"
          time="3:08 PM"
          source="Fake Northbridge Control Assurance Console"
          details="The fictional supplier-result mitigation uses queue-health status as its primary detection, response trigger, and validation evidence. The same dashboard previously displayed Green during a twenty-two-minute delay."
          recommendation="Add independent fictional state, freshness, correlation, and business-outcome evidence. Define source-health checks, safe failure, controlled review, reconciliation, owners, and residual risk. Do not test any real system."
        />

        <FakeLogPanel
          title="Fake Mitigation Decision Timeline"
          logs={[
            "09:00 SCENARIO supplier-result residual='high'",
            "09:08 OBJECTIVE prevent='stale-case-update'",
            "09:16 DESIGN state-version='required' correlation='required'",
            "09:24 PREVENT duplicate='reject' ordering='validate'",
            "09:32 DETECT queue-age='monitor' health='separate-signal'",
            "09:40 RESPONSE low-confidence='manual-review'",
            "09:48 RECOVERY reconcile='case+notification+archive'",
            "09:56 GOVERN owner='workflow' supplier-owner='assigned'",
            "10:04 PRIVACY evidence-fields='minimized'",
            "10:12 TEST normal='planned' delay='planned' recovery='planned'",
            "10:20 LIMITATION supplier-dependency='remains'",
            "10:28 RESIDUAL risk='moderate-provisional'",
            "10:36 CONTROL archive-identity lifecycle='planned'",
            "10:44 CONTROL support-confirmation design='approved'",
            "10:52 CONTROL recovery-gates status='draft'",
            "11:00 QUALITY single-evidence-source='detected'",
            "11:08 ACTION independent-state-evidence='required'",
            "11:16 OWNER residual-acceptance='pending'",
            "11:24 CONFIDENCE mitigation-register='medium'",
            "15:08 ALERT issue='evidence-dependency'",
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
                    ["Mitigation use", item.use],
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
          title="Which Mitigation Package Best Fits the Fictional Supplier-Result Risk?"
          question="Which option most responsibly addresses the documented scenario and evidence?"
          evidence={[
            "Fictional supplier results were delayed for twenty-two minutes while source health remained Green.",
            "Users submitted duplicate documents after delayed status notifications.",
            "State reconciliation, duplicate handling, ordering, delay thresholds, and source-health meaning are only partially evidenced.",
            "The scenario can affect case-state integrity, user communication, service quality, evidence, support workload, and recovery.",
            "Schema validation is designed but resilient operation is not fully evidenced.",
            "One fictional recovery exercise produced stale notifications and repeated archival tasks.",
            "The current residual risk is High with moderate confidence.",
            "No evidence proves malicious supplier behavior.",
          ]}
          options={[
            "Use a layered fictional package: explicit state-version validation, correlation and duplicate handling, independent freshness and queue-health evidence, controlled review during uncertainty, bounded retries, reconciliation, user communication, recovery gates, owners, validation tests, and residual-risk review.",
            "Add one dashboard and mark the risk solved.",
            "Block every supplier interaction permanently without mission, dependency, alternate-path, or owner analysis.",
            "Assume the supplier is malicious and focus only on investigation.",
          ]}
          bestAnswer={0}
          explanation="The first option addresses the documented root conditions and combines design, prevention, detection, response, recovery, communication, evidence, and governance. It also preserves uncertainty and residual risk without unsupported accusations."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Errors That Weaken Mitigation Decisions"
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
          title="Build the Northbridge Mitigation Decision Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            access, scan, test, configure, investigate, monitor, recover, or
            change any real system. Do not use real mitigation plans, control
            gaps, owners, suppliers, logs, configurations, incidents, recovery
            details, or organizational priorities.
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
          title="A Proposed Control Collects More Sensitive Evidence"
          scenario="The fictional team proposes copying full support notes into the monitoring platform so analysts can review supplier-field use. The stated goal is privacy risk reduction."
          choices={[
            {
              label: "Choice A",
              response:
                "Reject broad content collection, define the minimum evidence needed, use field-presence and approved-category signals, restrict access and retention, and preserve a separate authorized review path for exceptional cases.",
              outcome:
                "Best defensive choice. The mitigation should not create a larger privacy problem than the scenario it addresses.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Collect every note because more evidence always improves security.",
              outcome:
                "Weak. Excessive collection can increase privacy, access, retention, and misuse risk.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove all monitoring because privacy and security controls cannot coexist.",
              outcome:
                "Incomplete. Purposeful, minimized, access-controlled evidence can support both privacy and security.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Compensating Control Has No Expiration"
          scenario="The fictional preferred design change will take several months, so the team adds manual approval and monitoring. The temporary control has no owner, expiration, replacement milestone, or residual-risk decision."
          choices={[
            {
              label: "Choice A",
              response:
                "Assign owners, define equivalent objectives, evidence, limitations, expiration, replacement milestones, residual-risk acceptance, review triggers, and failure behavior.",
              outcome:
                "Best choice. Compensating controls must be governed and time-bound.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Treat the temporary control as permanent because it is already in use.",
              outcome:
                "Weak. Temporary complexity can become long-lived without equivalent coverage or review.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove the temporary control immediately even though no alternative exists.",
              outcome:
                "Weak. The decision should consider mission, current risk, authority, and a safe transition.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Choose a Layered Mitigation under Conflicting Constraints"
        >
          <p className="leading-8">
            The fictional Northbridge team must reduce supplier-result risk, but
            it cannot replace the supplier this quarter. The workflow owner
            wants strict blocking, the support owner fears user delay, the
            privacy owner rejects broad logging, and the recovery owner needs
            clear reconciliation. Design a proportionate package.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Reduce the root condition",
                "Require explicit result-to-state compatibility, correlation, duplicate handling, and bounded retry.",
              ],
              [
                "Protect privacy",
                "Collect only the evidence needed to validate state, timing, identity, result, health, and reconciliation.",
              ],
              [
                "Preserve service",
                "Use controlled review and degraded mode instead of automatically blocking every delayed result.",
              ],
              [
                "Strengthen detection",
                "Separate connectivity health from event freshness, queue age, state mismatch, and business outcome.",
              ],
              [
                "Plan recovery",
                "Define reconciliation, notification correction, duplicate cleanup, owner approval, and closure evidence.",
              ],
              [
                "Own residual risk",
                "Record supplier dependency, remaining delay, manual workload, uncertainty, review dates, and escalation triggers.",
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
              Produce a fictional mitigation decision matrix, selected layered
              package, rejected options, privacy and usability analysis,
              control-dependency map, implementation sequence, validation plan,
              residual-risk statement, owner assignments, and leadership
              explanation of the tradeoff.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Choosing Mitigations Checklist"
          items={[
            "I can begin mitigation selection from a specific fictional scenario and risk rationale rather than a category label.",
            "I can define the control objective and the impact, likelihood, exposure, uncertainty, recovery, privacy, or user outcome that should improve.",
            "I can generate design, prevention, detection, response, recovery, privacy, governance, communication, and evidence options.",
            "I can prefer root-condition reduction when practical instead of surrounding an unnecessary design with more controls.",
            "I can assess control independence, dependencies, limitations, failure behavior, and unintended consequences.",
            "I can evaluate privacy, usability, accessibility, performance, cost, complexity, supplier, operational, and mission tradeoffs.",
            "I can define owners, implementation readiness, success criteria, operating evidence, source health, review cadence, and retirement.",
            "I can build layered control packages that address normal, failure, degraded, support, administrative, supplier, and recovery states.",
            "I can create a safe fictional validation plan using only invented data and environments.",
            "I can distinguish control design, implementation, operation, monitoring, review, and resilience.",
            "I can document residual risk, authorized acceptance, monitoring, exceptions, review dates, and triggers.",
            "I can create a completely fictional mitigation package without copying or modifying real controls, gaps, owners, suppliers, recovery plans, or priorities.",
          ]}
        />

        <MiniQuiz
          title="A3.7 Mini Quiz: Choosing Mitigations"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Mitigation Decision Package for the Northbridge Student-Support Portal. Include purpose, scope, exclusions, safety boundary, at least ten ranked fictional scenarios, control objectives, design options, preventive controls, detective controls, response controls, recovery controls, privacy controls, governance controls, communication controls, evidence controls, option comparisons, tradeoffs, unintended consequences, control dependencies, control owners, scenario owners, implementation readiness, sequence, success criteria, validation plan, normal and failure-state tests using fake data, operating evidence, source-health evidence, limitations, compensating controls, exceptions, residual risk, authorized risk owner, review date, triggers, leadership summary, technical appendix, reflection, and a statement that every organization, asset, actor, scenario, mitigation, control, owner, record, date, decision, and outcome is invented."
          tips={[
            "Start from the fictional risk rationale and define the exact control objective before naming a mitigation.",
            "Include at least one root-condition or design option and several complementary control functions.",
            "Evaluate privacy, usability, accessibility, operations, failure, dependency, supplier, recovery, and unintended-consequence tradeoffs.",
            "Define how each selected fictional control will be implemented, observed, tested, reviewed, and retired.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready to Document Assumptions and Limits?"
        >
          <p className="leading-8">
            Before moving to A3.8, rate your readiness from 1 to 5 for
            scenario fit, control objectives, layered options, root-condition
            reduction, tradeoffs, control independence, privacy, usability,
            implementation readiness, validation, residual risk, ownership,
            maintenance, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why a mitigation must trace to an exact fictional scenario and risk rationale.",
              "I can define the expected risk reduction without claiming guaranteed results.",
              "I can compare design, prevention, detection, response, recovery, privacy, governance, communication, and evidence controls.",
              "I can identify new privacy, usability, accessibility, complexity, dependency, and operational risks created by a mitigation.",
              "I can distinguish designed, implemented, operating, monitored, reviewed, and resilient controls.",
              "I can plan safe fictional validation across normal, failure, degraded, emergency, and recovery states.",
              "I can document residual risk, control limitations, owners, exceptions, review dates, and triggers.",
              "I can create a complete fictional mitigation artifact without copying, modifying, or exposing real organizational information.",
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
            Record one fictional mitigation you changed after discovering a
            tradeoff, one control dependency, one unintended consequence, one
            residual-risk decision, and one assumption or limitation you will
            document explicitly in A3.8.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Mitigations should address specific fictional scenarios and risk rationales—not categories or vague topics.",
            "Root-condition and design changes can be stronger than surrounding an unnecessary exposure with more controls.",
            "Layered mitigation combines design, prevention, detection, response, recovery, privacy, governance, communication, and evidence.",
            "A listed or implemented control should not be treated as effective without operating, monitoring, review, failure, and recovery evidence.",
            "Security controls can create privacy, usability, accessibility, performance, complexity, dependency, supplier, and operational risks.",
            "Control independence matters because several controls may share the same identity, supplier, service, administrator, or evidence failure.",
            "Compensating controls should have equivalent objectives, owners, evidence, limitations, expiration, replacement plans, and residual-risk acceptance.",
            "Validation should include normal, failure, retry, degraded, emergency, support, supplier, and recovery states using completely fictional data.",
            "Every mitigation package should document residual risk, owners, exceptions, review dates, triggers, and retirement.",
            "Every CyberShield mitigation artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, document the fictional assumptions, evidence limits,
            exclusions, dependencies, confidence, unanswered questions, and
            conditions that constrain the threat model and mitigation decisions.
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