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
const previousLesson = `${modulePath}/data-flows-and-trust-boundaries`;
const nextLesson = `${modulePath}/threat-categories-conceptually`;

const objectives = [
  "Explain fictional abuse cases and misuse thinking as defensive methods for exploring harmful outcomes, unsafe assumptions, process failures, and control gaps without providing operational attack instructions.",
  "Develop safe fictional misuse statements that connect assets, actors, entry points, data flows, trust boundaries, preconditions, affected outcomes, evidence needs, and responsible owners.",
  "Distinguish deliberate misuse, accidental misuse, process failure, supplier failure, automation failure, administrative error, privacy misuse, and recovery misuse without making unsupported claims about intent.",
  "Evaluate fictional misuse scenarios using evidence, uncertainty, business context, control coverage, detectability, recoverability, privacy, safety, and user impact.",
  "Produce a portfolio-ready fictional abuse-case library that remains ethical, authorized, defensive, non-operational, privacy-safe, and completely invented.",
];

const vocabulary = [
  [
    "Abuse case",
    "A fictional, outcome-focused description of how a feature, workflow, permission, process, dependency, assumption, or trust relationship could lead to harm, misuse, loss, or unsafe behavior.",
  ],
  [
    "Misuse case",
    "A fictional description of a system capability being used outside its intended purpose, authority, audience, sequence, condition, or business rule.",
  ],
  [
    "Outcome-focused",
    "Describing what harmful result could occur and which defensive questions follow, without explaining operational procedures for causing it.",
  ],
  [
    "Precondition",
    "A fictional state, permission, dependency, workflow condition, missing control, stale assumption, or evidence gap that must exist before a misuse outcome could occur.",
  ],
  [
    "Affected asset",
    "The fictional mission, data, identity, service, process, evidence, privacy, safety, trust, or recovery value that could be harmed.",
  ],
  [
    "Misuse actor",
    "A fictional human or non-human role involved in the scenario, described by relationship, authority, expected behavior, and evidence rather than unsupported intent.",
  ],
  [
    "Misuse path",
    "A fictional sequence of approved or expected system interactions that could produce an unsafe result when assumptions, conditions, ownership, validation, or controls fail.",
  ],
  [
    "Control assumption",
    "A fictional belief that a control exists, applies, receives correct context, operates effectively, is monitored, and fails safely.",
  ],
  [
    "Process misuse",
    "A fictional harmful outcome caused by using a legitimate business process outside its approved purpose, order, role, state, or evidence requirements.",
  ],
  [
    "Privilege misuse",
    "A fictional harmful outcome involving authority that is excessive, stale, poorly separated, weakly approved, insufficiently monitored, or used outside its intended purpose.",
  ],
  [
    "Data misuse",
    "A fictional harmful outcome involving inappropriate collection, access, sharing, transformation, inference, retention, deletion, or use of information.",
  ],
  [
    "Automation misuse",
    "A fictional harmful outcome caused when automated logic, workflow, enrichment, routing, or decision support receives poor context, operates outside limits, or lacks human review.",
  ],
  [
    "Supplier misuse",
    "A fictional harmful outcome involving unclear external responsibility, unnecessary data, stale trust, weak validation, unavailable evidence, failure handling, or incomplete offboarding.",
  ],
  [
    "Recovery misuse",
    "A fictional harmful outcome involving emergency authority, stale backups, incorrect restoration order, weak reconciliation, unsafe fallback, or incomplete closure.",
  ],
  [
    "Accidental misuse",
    "A fictional harmful outcome caused by confusion, error, misunderstanding, poor interface design, missing training, stale documentation, or unclear responsibility rather than deliberate intent.",
  ],
  [
    "Intent uncertainty",
    "A reminder that unusual behavior, policy violations, errors, denied requests, or missing context do not prove whether an actor acted deliberately, accidentally, or under incorrect assumptions.",
  ],
  [
    "Abuse story",
    "A short fictional statement describing actor context, affected asset, misused capability or condition, harmful outcome, and defender concern.",
  ],
  [
    "Misuse question",
    "A safe defensive prompt asking whether a feature, role, process, flow, or dependency could produce an unsafe outcome under specified conditions.",
  ],
  [
    "Guardrail",
    "A fictional control or decision boundary that limits action, requests stronger evidence, requires approval, supports review, or stops automation when confidence is insufficient.",
  ],
  [
    "Detection opportunity",
    "A fictional point where evidence could reveal unsafe state, unusual use, failed control, missing context, degraded service, or divergence from expected behavior.",
  ],
  [
    "Recovery requirement",
    "A fictional capability needed to restore correct technical and business state, authority, evidence, communication, and user trust after a misuse outcome.",
  ],
  [
    "Abuse-case owner",
    "The fictional role accountable for reviewing the scenario, validating assumptions, choosing mitigations, accepting residual risk, and maintaining the record.",
  ],
  [
    "Scenario traceability",
    "The connection from a fictional abuse case to assets, actors, entry points, flows, trust boundaries, evidence, controls, owners, decisions, and review triggers.",
  ],
  [
    "Non-operational detail",
    "Information that supports defensive reasoning without providing instructions, commands, bypass methods, exploit steps, evasion techniques, or real-system targets.",
  ],
];

const misuseFamilies = [
  {
    family: "Identity and authority misuse",
    description:
      "A fictional actor, service identity, role, session, delegated authority, recovery identity, or approval relationship affects assets beyond its intended purpose, scope, object, duration, or condition.",
    examples:
      "A support role changes a preference without complete verification; a stale service identity continues to act after ownership changes; an emergency role remains active after recovery.",
    safeQuestions:
      "Could authority be broader, longer, less reviewed, or less object-specific than the approved purpose requires? Which evidence confirms actor, role, target, reason, approval, result, and lifecycle?",
    evidence:
      "Role maps, policy decisions, access reviews, approval records, administrative events, lifecycle records, and recovery closure.",
    controls:
      "Least privilege, object-level authorization, separation, time limits, reason capture, approval, lifecycle, monitoring, and review.",
  },
  {
    family: "Workflow and process misuse",
    description:
      "A fictional legitimate workflow is used in the wrong order, state, purpose, volume, audience, or approval context, creating an unsafe business result.",
    examples:
      "A case is reprocessed after closure; duplicate submissions create conflicting status; a notification is sent before final approval; an archival action occurs before reconciliation.",
    safeQuestions:
      "Which process state, sequence, owner, approval, duplicate, timing, reconciliation, or rollback condition could fail?",
    evidence:
      "Workflow state, event timeline, ticket, approval history, queue state, business record, and reconciliation result.",
    controls:
      "State validation, sequence checks, duplicate handling, approvals, bounded retry, reconciliation, rollback, and user communication.",
  },
  {
    family: "Data and privacy misuse",
    description:
      "Fictional information is collected, shared, inferred, transformed, retained, or used beyond the minimum approved purpose, audience, field set, or lifecycle.",
    examples:
      "A free-text support note crosses to a supplier; notification content includes unnecessary case detail; analytics combines events beyond the approved purpose.",
    safeQuestions:
      "Which data is necessary? Which fields, metadata, derived information, audience, retention, deletion, consent, or privacy expectations apply?",
    evidence:
      "Data inventory, field-purpose record, classification, privacy review, sharing decision, access record, retention schedule, and deletion evidence.",
    controls:
      "Data minimization, purpose limitation, field validation, audience control, masking, retention, deletion, privacy review, and access restrictions.",
  },
  {
    family: "Input and transformation misuse",
    description:
      "A fictional process accepts, interprets, transforms, routes, or derives information under incomplete format, meaning, source, timing, state, or version assumptions.",
    examples:
      "A valid-looking result belongs to the wrong case state; an old event is accepted as current; a conversion drops an important status field.",
    safeQuestions:
      "Could well-formed input still be semantically wrong, stale, duplicated, reordered, incomplete, or inappropriate for the current workflow?",
    evidence:
      "Schema, validation result, version, source identity, business-state check, transformation record, and downstream correlation.",
    controls:
      "Schema and semantic validation, freshness, object and state checks, canonical formats, versioning, duplicate and ordering handling, and safe failure.",
  },
  {
    family: "Supplier and dependency misuse",
    description:
      "A fictional external service, integration, data exchange, identity, operational process, or contract assumption creates harmful outcomes through unclear ownership, excess data, failure, stale trust, or incomplete exit.",
    examples:
      "A supplier result is trusted without complete source-health context; a contract changes but the interface fields remain; a supplier identity remains active after offboarding.",
    safeQuestions:
      "Which responsibility, field, identity, evidence, availability, failure, change, recovery, and offboarding decision is shared or unclear?",
    evidence:
      "Supplier inventory, approved fields, service evidence, owner register, interface version, incident contact, change record, and exit plan.",
    controls:
      "Minimization, strong identity, validation, ownership, service expectations, evidence rights, failure handling, change review, resilience, and offboarding.",
  },
  {
    family: "Logging and evidence misuse",
    description:
      "Fictional evidence is missing, misleading, excessive, inconsistently interpreted, unavailable, unhealthy, or used outside its approved purpose.",
    examples:
      "A dashboard reports healthy while events are delayed; logs omit the target object; sensitive free text is copied into broad monitoring records.",
    safeQuestions:
      "Can defenders answer actor, action, target, reason, result, state, health, timing, source, and correlation questions without over-collecting data?",
    evidence:
      "Event schema, source-health status, parser result, retention, access record, alert review, ticket, and investigation notes.",
    controls:
      "Purposeful logging, field minimization, event quality, source health, integrity, access control, retention, correlation, and review.",
  },
  {
    family: "Automation and decision-support misuse",
    description:
      "A fictional automated workflow, enrichment, classification, routing, or decision-support process acts with missing context, poor confidence, unclear limits, or inadequate human review.",
    examples:
      "An automated case-priority rule uses stale data; low-confidence classification triggers a high-impact workflow; exception handling silently becomes the normal path.",
    safeQuestions:
      "Which decisions may be automated? What context and confidence are required? When must automation pause, escalate, explain, reverse, or request human review?",
    evidence:
      "Rule definition, version, input source, confidence, outcome, exception, human override, test result, and monitoring metric.",
    controls:
      "Bounded authority, validation, confidence thresholds, guardrails, human review, explainability, rollback, testing with fake data, and governance.",
  },
  {
    family: "Availability and resilience misuse",
    description:
      "A fictional service, queue, identity, supplier, storage, notification, or process becomes unavailable or degraded in a way that produces unsafe workarounds, hidden backlog, duplicate action, or incorrect business state.",
    examples:
      "Delayed status causes duplicate submission; unavailable identity services lead to broad emergency access; retries continue without clear stop conditions.",
    safeQuestions:
      "Which degraded-state choices change authority, user behavior, evidence, queue state, communication, recovery order, or trust assumptions?",
    evidence:
      "Service health, queue state, support tickets, retry records, recovery exercise, user communication, and business-state reconciliation.",
    controls:
      "Resilience, bounded retry, graceful degradation, clear status, alternate process, escalation, recovery sequencing, reconciliation, and communication.",
  },
  {
    family: "Recovery and emergency misuse",
    description:
      "A fictional recovery or emergency capability restores incorrect state, uses broad authority, trusts stale artifacts, skips reconciliation, or remains active after the event.",
    examples:
      "Application restoration occurs before identity and queue validation; emergency access is not revoked; stale notifications are sent after recovery.",
    safeQuestions:
      "Who declares recovery? Which source and identity are trusted? What is restored first? How is correct business state validated and emergency authority closed?",
    evidence:
      "Recovery trigger, approval, identity, source artifact, action, validation, reconciliation, communication, closure, and post-event review.",
    controls:
      "Documented trigger, strong and time-bound identity, trusted baselines, restore order, integrity checks, reconciliation, communication, revocation, and review.",
  },
  {
    family: "Human error and usability misuse",
    description:
      "A fictional interface, process, message, permission, or responsibility is confusing enough that a reasonable user or operator may choose an unsafe action.",
    examples:
      "Two buttons have similar labels but different impact; support staff cannot see whether a user confirmed a change; error messages hide the correct recovery path.",
    safeQuestions:
      "Could interface design, terminology, training, workload, timing, handoff, or incomplete feedback make unsafe action likely?",
    evidence:
      "User journey, support themes, quality review, training records, interface mockup, error text, and task observation using fictional material.",
    controls:
      "Clear design, confirmation, progressive disclosure, warnings, role-specific training, workload management, safer defaults, and feedback.",
  },
];

const abuseCaseFields = [
  {
    field: "Scenario identifier and title",
    purpose:
      "Give the fictional abuse case a stable reference and a concise outcome-focused name.",
    strongExample:
      "AC-07: Duplicate case updates create conflicting student status.",
    weakExample:
      "Hack the portal.",
  },
  {
    field: "Business or mission context",
    purpose:
      "Explain which fictional service, workflow, user outcome, or responsibility the scenario affects.",
    strongExample:
      "The student-support portal must preserve accurate case status and timely communication.",
    weakExample:
      "The system is important.",
  },
  {
    field: "Affected assets",
    purpose:
      "Connect the scenario to fictional mission, data, identity, service, process, evidence, privacy, trust, safety, and recovery value.",
    strongExample:
      "Case-status integrity, notification accuracy, user trust, evidence quality, and support workload.",
    weakExample:
      "The database.",
  },
  {
    field: "Actor context",
    purpose:
      "Identify the fictional role or service involved without assuming intent.",
    strongExample:
      "A support analyst, portal service, supplier service, or recovery operator acting under incomplete context.",
    weakExample:
      "A malicious insider.",
  },
  {
    field: "Preconditions",
    purpose:
      "Describe fictional states, permissions, assumptions, missing controls, or dependency conditions that make the outcome possible.",
    strongExample:
      "Retry events are not correlated, notification state is delayed, and duplicate-detection evidence is incomplete.",
    weakExample:
      "The attacker gets in.",
  },
  {
    field: "Misused capability or condition",
    purpose:
      "Name the legitimate feature, process, authority, trust relationship, or system state that could produce harm.",
    strongExample:
      "The reprocessing function can be initiated while a prior request remains unresolved.",
    weakExample:
      "Exploit the API.",
  },
  {
    field: "Harmful outcome",
    purpose:
      "Describe the fictional impact without operational instructions.",
    strongExample:
      "Conflicting case state, duplicate notification, support confusion, delayed service, and loss of trust.",
    weakExample:
      "Take over everything.",
  },
  {
    field: "Existing controls",
    purpose:
      "Record fictional safeguards already expected to reduce likelihood, impact, or uncertainty.",
    strongExample:
      "State checks, bounded retries, duplicate detection, approval, event correlation, and reconciliation.",
    weakExample:
      "Security tools.",
  },
  {
    field: "Evidence and uncertainty",
    purpose:
      "Identify what supports the scenario, what remains unknown, and which claims require validation.",
    strongExample:
      "Support tickets show duplicate submissions after delayed status, but one technical cause is not proven.",
    weakExample:
      "Logs prove the attack.",
  },
  {
    field: "Defensive questions",
    purpose:
      "Translate the scenario into safe design, control, evidence, ownership, and recovery questions.",
    strongExample:
      "How are retries correlated, duplicates prevented, users informed, and correct business state reconciled?",
    weakExample:
      "How would someone do it?",
  },
  {
    field: "Owner and decision",
    purpose:
      "Assign fictional responsibility for validation, mitigation, residual risk, and review.",
    strongExample:
      "Workflow owner validates state logic; notification owner validates communication; risk owner reviews residual exposure.",
    weakExample:
      "IT should fix it.",
  },
  {
    field: "Review trigger",
    purpose:
      "Define when the abuse case must be reconsidered.",
    strongExample:
      "Review after queue, notification, retry, supplier, workflow, or recovery design changes.",
    weakExample:
      "Review later.",
  },
];

const safeWritingPatterns = [
  {
    pattern: "Could an approved capability produce an unsafe outcome?",
    example:
      "Could the fictional support console allow a verified support action to affect a broader set of records than the support purpose requires?",
    whySafe:
      "It asks a defensive scope and authorization question without explaining how to bypass controls.",
  },
  {
    pattern: "What if a required assumption is false?",
    example:
      "What if the fictional supplier result is well formed but belongs to stale workflow state?",
    whySafe:
      "It focuses on validation and state integrity rather than operational misuse instructions.",
  },
  {
    pattern: "What if a process runs in the wrong order?",
    example:
      "What if fictional archival processing begins before recovery reconciliation confirms final case state?",
    whySafe:
      "It explores sequencing, evidence, and recovery safeguards.",
  },
  {
    pattern: "What if legitimate authority outlives its purpose?",
    example:
      "What if a fictional temporary migration identity remains active after the approved migration window ends?",
    whySafe:
      "It highlights lifecycle and ownership without teaching account misuse.",
  },
  {
    pattern: "What if data moves beyond its minimum purpose?",
    example:
      "What if a fictional free-text support note is included in a supplier request even when only a case reference and category are needed?",
    whySafe:
      "It supports privacy and minimization review.",
  },
  {
    pattern: "What if evidence gives incomplete confidence?",
    example:
      "What if a fictional dashboard shows Green while result events are delayed or missing?",
    whySafe:
      "It teaches evidence correlation, source health, and uncertainty.",
  },
  {
    pattern: "What if failure creates a risky workaround?",
    example:
      "What if an unavailable fictional identity service causes teams to rely on broad emergency access for longer than planned?",
    whySafe:
      "It focuses on degraded operation, authority, closure, and recovery.",
  },
  {
    pattern: "What if automation lacks enough context?",
    example:
      "What if a fictional case-routing rule acts on stale status and no human review occurs before a high-impact decision?",
    whySafe:
      "It raises governance and guardrail questions without unsafe instructions.",
  },
];

const unsafeWritingPatterns = [
  {
    pattern: "Step-by-step misuse procedures",
    problem:
      "Operational instructions can facilitate harmful action and are unnecessary for defensive reasoning.",
    safeAlternative:
      "Describe the affected capability, preconditions, harmful outcome, evidence, controls, and owner questions.",
  },
  {
    pattern: "Real target details",
    problem:
      "Real organizations, accounts, hosts, domains, interfaces, logs, suppliers, configurations, or recovery paths can expose sensitive information.",
    safeAlternative:
      "Invent every organization, identity, service, field, event, date, interface, and outcome.",
  },
  {
    pattern: "Unsupported intent claims",
    problem:
      "Unusual timing, denied requests, external origin, role type, error, or missing context does not prove deliberate misuse.",
    safeAlternative:
      "State the observation, expected behavior, evidence, uncertainty, and defensive validation question.",
  },
  {
    pattern: "Guaranteed exploitability",
    problem:
      "A missing control, stale diagram, warning, or weak process does not prove a harmful outcome can be produced.",
    safeAlternative:
      "Describe the condition as a modeled concern and record confidence, assumptions, evidence limits, and owner review.",
  },
  {
    pattern: "Fear-based impact language",
    problem:
      "Catastrophic claims without evidence distort prioritization and reduce trust.",
    safeAlternative:
      "Describe bounded fictional impacts across mission, data, identity, privacy, service, evidence, recovery, and users.",
  },
  {
    pattern: "Control labels without context",
    problem:
      "Saying use MFA, logging, encryption, or monitoring does not explain the actor, object, decision, state, evidence, failure, or owner.",
    safeAlternative:
      "Connect each control to the exact fictional abuse case and define owner, evidence, limitations, and residual risk.",
  },
];

const scenarioQuality = [
  {
    level: "Weak",
    statement:
      "A hacker attacks the portal and steals data.",
    problem:
      "It assumes an actor and outcome, omits system context, provides no preconditions, assets, controls, evidence, uncertainty, or owner questions.",
    improvement:
      "Reframe the scenario around a fictional capability, trust assumption, affected assets, evidence, and defensive outcome.",
  },
  {
    level: "Developing",
    statement:
      "An unauthorized user might view case data.",
    problem:
      "It identifies an authorization concern but does not state actor context, object, entry point, conditions, evidence, or impact.",
    improvement:
      "Define which fictional role, object, assignment condition, authorization decision, evidence, and privacy outcome are involved.",
  },
  {
    level: "Strong",
    statement:
      "A fictional counselor account may receive case-view authority beyond current assignment if object-level authorization relies only on broad role membership.",
    problem:
      "The scenario still requires evidence, control status, likelihood, owner, and detection questions.",
    improvement:
      "Add role and assignment evidence, policy decision, review result, uncertainty, mitigation, and review trigger.",
  },
  {
    level: "Decision-ready",
    statement:
      "If the fictional portal authorizes case viewing using counselor role membership without confirming active assignment to the requested case, a valid counselor session could expose unrelated case information; review requires role, assignment, object, policy-decision, access-event, owner, and privacy evidence.",
    problem:
      "The statement remains a model and must not be treated as proof of real behavior.",
    improvement:
      "Preserve assumptions, confidence, evidence limits, current controls, responsible owners, mitigation options, residual risk, and change triggers.",
  },
];

const evidenceMatrix = [
  {
    id: "AC-01",
    source: "Fictional support-role matrix",
    observation:
      "The support analyst role can reset accounts, change notification settings, view case status, and initiate document reprocessing.",
    supports:
      "The role affects identity, privacy, workflow, communication, and service assets and deserves misuse questions about scope, separation, approval, evidence, and lifecycle.",
    limits:
      "The matrix does not prove current effective permissions, inappropriate use, weak controls, or deliberate intent.",
    use:
      "Create safe privilege and process misuse cases tied to exact actions, objects, conditions, evidence, and owners.",
  },
  {
    id: "AC-02",
    source: "Fictional notification ticket review",
    observation:
      "Several notification changes lack a recorded reason and user confirmation.",
    supports:
      "The support workflow and evidence design may not consistently connect actor, purpose, user approval, action, and result.",
    limits:
      "Missing fields do not prove that the changes were unauthorized, harmful, or deliberate.",
    use:
      "Develop misuse questions about verification, reason capture, confirmation, review, and user communication.",
  },
  {
    id: "AC-03",
    source: "Fictional supplier field inventory",
    observation:
      "Processing requests may include a free-text support note in addition to case reference, document category, and priority.",
    supports:
      "The supplier flow deserves privacy, minimization, purpose, validation, retention, and access misuse questions.",
    limits:
      "The inventory does not prove the field is populated in every request, retained, misused, or unapproved.",
    use:
      "Create data misuse scenarios that preserve field-purpose uncertainty and owner decisions.",
  },
  {
    id: "AC-04",
    source: "Fictional queue-health dashboard",
    observation:
      "The processing-result queue was delayed for twenty-two minutes while source health continued to display Green.",
    supports:
      "Evidence and workflow state may diverge, creating misuse questions about stale decisions, retries, duplicate processing, communication, and reconciliation.",
    limits:
      "The dashboard does not prove data loss, tampering, compromise, or incorrect final outcomes.",
    use:
      "Create evidence and availability misuse cases focused on state, confidence, source health, and safe failure.",
  },
  {
    id: "AC-05",
    source: "Fictional support ticket pattern",
    observation:
      "Users submitted duplicate documents after delayed case-status notifications.",
    supports:
      "Communication delay and workflow uncertainty can contribute to duplicate action, support load, conflicting state, and user frustration.",
    limits:
      "The tickets do not prove that every duplicate had the same cause or that one component was responsible.",
    use:
      "Develop process, usability, availability, and recovery misuse questions with causal uncertainty preserved.",
  },
  {
    id: "AC-06",
    source: "Fictional service-identity review",
    observation:
      "An archival service identity has no confirmed owner and its scheduled review date has passed.",
    supports:
      "The non-human actor has an ownership and lifecycle gap that could affect retention, recovery, evidence, and authority.",
    limits:
      "The review does not prove misuse, compromise, excessive permission, or active processing.",
    use:
      "Create lifecycle and recovery misuse questions and assign owner-validation actions.",
  },
  {
    id: "AC-07",
    source: "Fictional recovery exercise",
    observation:
      "The application returned before notification and archival dependencies were validated, causing stale messages and repeated archival tasks.",
    supports:
      "Recovery order, emergency authority, queue state, identity, communication, and business-state reconciliation require misuse analysis.",
    limits:
      "One exercise does not prove future frequency, current production state, or malicious behavior.",
    use:
      "Create recovery and resilience misuse cases tied to sequencing, evidence, communication, and closure.",
  },
  {
    id: "AC-08",
    source: "Fictional analytics proposal",
    observation:
      "A future analytics process may combine events from portal, support, supplier, and notification sources, but purpose, fields, audience, retention, and owner approval remain unresolved.",
    supports:
      "The proposal creates potential data, privacy, evidence, inference, automation, and governance misuse questions.",
    limits:
      "The proposal is not current-state implementation and does not prove any collection or misuse has occurred.",
    use:
      "Mark scenarios as future-state assumptions and require decisions before ranking them as current exposure.",
  },
];

const commonMistakes = [
  {
    mistake: "Writing an attack story instead of a defensive abuse case",
    why:
      "Operational steps, bypass methods, or real-system detail are unnecessary and unsafe.",
    correction:
      "Describe fictional preconditions, affected assets, misused capability, harmful outcome, evidence, controls, owners, and review questions.",
  },
  {
    mistake: "Assuming malicious intent",
    why:
      "Errors, unusual timing, denied requests, external origin, stale identity, or policy violations do not prove intent.",
    correction:
      "Use neutral actor language and preserve accidental, deliberate, process, supplier, automation, and unknown explanations.",
  },
  {
    mistake: "Ignoring accidental and process misuse",
    why:
      "Many harmful outcomes arise from confusing interfaces, stale state, poor handoffs, broad authority, missing confirmation, or incorrect sequence.",
    correction:
      "Include human error, usability, process, workflow, support, and recovery scenarios.",
  },
  {
    mistake: "Using generic catastrophic impact",
    why:
      "Statements such as everything is compromised prevent meaningful comparison and owner decisions.",
    correction:
      "Describe bounded impact to mission, data, identity, privacy, service, evidence, recovery, users, and trust.",
  },
  {
    mistake: "Treating a possibility as proof",
    why:
      "A model identifies plausible questions and assumptions; it does not prove that a condition exists or an outcome occurred.",
    correction:
      "Separate observation, interpretation, hypothesis, assumption, unknown, confidence, and evidence limitation.",
  },
  {
    mistake: "Listing controls without traceability",
    why:
      "Generic controls may not address the specific actor, object, flow, state, or failure in the abuse case.",
    correction:
      "Map each control to the exact scenario, owner, evidence, dependency, limitation, and residual risk.",
  },
  {
    mistake: "Forgetting detection and recovery",
    why:
      "Prevention may fail, be bypassed by normal process, or lack context; teams need evidence, triage, containment, recovery, reconciliation, and communication.",
    correction:
      "Add detection opportunities, source health, escalation, business-state recovery, and closure requirements.",
  },
  {
    mistake: "Mixing current and future state",
    why:
      "A proposed analytics or supplier flow may be mistaken for implemented exposure.",
    correction:
      "Label current, proposed, deprecated, temporary, degraded, and recovery scenarios clearly.",
  },
  {
    mistake: "Creating duplicate scenarios with different words",
    why:
      "Large lists can hide the fact that several cases share one root cause, owner, or mitigation.",
    correction:
      "Group related cases, preserve distinct outcomes, and link shared preconditions, controls, and owners.",
  },
  {
    mistake: "Using real organizational material",
    why:
      "Real abuse cases, diagrams, roles, interfaces, logs, suppliers, and recovery details can expose sensitive information.",
    correction:
      "Invent every organization, actor, system, record, event, flow, boundary, case, date, control, decision, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Confirm decision and scope",
    action:
      "State which fictional Northbridge design or risk decision the abuse-case library will support and which assets, actors, entry points, flows, boundaries, suppliers, environments, and recovery states are included.",
    output:
      "Purpose, scope, exclusions, stakeholders, model version, and safety boundary.",
    quality:
      "The scope is narrow enough to keep scenarios relevant and broad enough to include non-technical outcomes.",
  },
  {
    step: "2",
    title: "Select high-value relationships",
    action:
      "Choose important fictional asset–actor–entry point and data-flow relationships from A3.2 and A3.3.",
    output:
      "A relationship shortlist with mission value, actor, interface, flow, trust boundary, owner, and evidence.",
    quality:
      "Every selected relationship has a clear business or user purpose.",
  },
  {
    step: "3",
    title: "Ask safe misuse questions",
    action:
      "Use outcome-focused prompts about excessive authority, stale state, wrong sequence, unnecessary data, missing evidence, supplier failure, automation limits, degraded service, and recovery.",
    output:
      "At least fifteen fictional misuse questions without operational attack steps.",
    quality:
      "Each question asks what could go wrong and how defenders should reason, not how to cause harm.",
  },
  {
    step: "4",
    title: "Write structured abuse cases",
    action:
      "For each selected question, record context, affected assets, actor, preconditions, misused capability, harmful outcome, controls, evidence, uncertainty, owners, and review triggers.",
    output:
      "A fictional abuse-case register with stable identifiers.",
    quality:
      "No case assumes intent, exploitability, or current exposure without evidence.",
  },
  {
    step: "5",
    title: "Add accidental and process scenarios",
    action:
      "Include fictional usability, handoff, workflow, supplier, automation, support, administrative, degraded-mode, and recovery cases.",
    output:
      "A balanced scenario library that goes beyond deliberate misuse.",
    quality:
      "The library represents multiple actor and failure explanations.",
  },
  {
    step: "6",
    title: "Connect controls and evidence",
    action:
      "Map prevention, detection, response, recovery, privacy, governance, communication, and source-health controls to each scenario.",
    output:
      "A traceability table with control owner, expected evidence, dependency, limitation, and residual question.",
    quality:
      "Controls are specific to the scenario rather than generic labels.",
  },
  {
    step: "7",
    title: "Review overlap and quality",
    action:
      "Merge duplicates, preserve distinct outcomes, identify shared root conditions, check fictionalization, and challenge unsupported claims.",
    output:
      "A quality-review log and revised abuse-case library.",
    quality:
      "Every case remains bounded, evidence-aware, non-operational, and decision-relevant.",
  },
  {
    step: "8",
    title: "Communicate priorities and unknowns",
    action:
      "Write a fictional leadership summary explaining the most important scenario families, owner decisions, evidence gaps, mitigation themes, and next threat-model steps.",
    output:
      "Leadership summary, technical appendix, decision log, reflection, and maintenance triggers.",
    quality:
      "The summary explains uncertainty and avoids fear-based or unsupported claims.",
  },
];

const quizQuestions = [
  {
    question:
      "Which statement best describes a safe abuse case?",
    choices: [
      "A step-by-step explanation of how to bypass a control.",
      "An outcome-focused fictional scenario connecting preconditions, assets, actors, capabilities, harmful outcomes, evidence, controls, owners, and review questions.",
      "A list of real weaknesses found in a school system.",
      "A claim that a suspicious actor is malicious.",
    ],
    answer: 1,
    explanation:
      "Safe abuse cases support defensive reasoning without operational harmful detail or real targets.",
  },
  {
    question:
      "A fictional support role can reset accounts and change notification settings. What is the strongest abuse-case question?",
    choices: [
      "How can someone take over accounts?",
      "Could the support role affect identity or notification assets beyond the verified support purpose if object, approval, reason, or lifecycle checks are incomplete?",
      "Which employee is most suspicious?",
      "How can the control be bypassed?",
    ],
    answer: 1,
    explanation:
      "The strongest question is bounded, defensive, role-based, evidence-aware, and non-operational.",
  },
  {
    question:
      "Why should accidental misuse be included?",
    choices: [
      "Because every accident is a security incident.",
      "Because confusing interfaces, stale state, poor sequencing, broad authority, unclear ownership, and missing confirmation can create harmful outcomes without deliberate intent.",
      "Because intent never matters.",
      "Because accidental misuse is always more serious than deliberate misuse.",
    ],
    answer: 1,
    explanation:
      "Threat models should consider realistic process and human conditions without assuming intent.",
  },
  {
    question:
      "What does a fictional queue delay prove?",
    choices: [
      "The supplier acted maliciously.",
      "All data was lost.",
      "A flow-state concern exists and may affect retries, duplicates, communication, reconciliation, and evidence, but more context is required.",
      "The system has been compromised.",
    ],
    answer: 2,
    explanation:
      "A delay supports bounded defensive questions, not unsupported conclusions.",
  },
  {
    question:
      "Which field belongs in a decision-ready abuse case?",
    choices: [
      "Real target address",
      "Operational bypass method",
      "Affected assets, preconditions, evidence, uncertainty, controls, owners, and review triggers",
      "The suspected person's name",
    ],
    answer: 2,
    explanation:
      "Decision-ready abuse cases connect scenario context to defensive decisions and ownership.",
  },
  {
    question:
      "Why should current-state and future-state misuse cases be separated?",
    choices: [
      "So the document has more sections.",
      "Because proposed designs and unresolved assumptions should not be presented as existing exposure or implemented control.",
      "Because future-state cases never matter.",
      "Because current-state evidence is always complete.",
    ],
    answer: 1,
    explanation:
      "Clear state labels prevent proposals and assumptions from being mistaken for current fact.",
  },
  {
    question:
      "Which portfolio choice is safest?",
    choices: [
      "Copy a real abuse-case document and change the organization name.",
      "Use real logs but replace usernames.",
      "Invent every organization, asset, actor, identity, system, flow, boundary, event, date, scenario, control, decision, and outcome from scratch.",
      "Use real supplier relationships because the scenarios are defensive.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real systems, people, suppliers, and organizational information.",
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

export default function AbuseCasesAndMisuseThinkingPage() {
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
              Lesson 4 of 10
            </span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-200">
              Safe Misuse Reasoning
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A3.4 Abuse Cases and Misuse Thinking
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders examine fictional ways that
            legitimate features, permissions, workflows, trust assumptions,
            dependencies, automation, support processes, and recovery paths
            could produce harmful outcomes. Keep every scenario safe,
            outcome-focused, evidence-aware, non-operational, and completely
            fictional.
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
          lessonTitle="Abuse Cases and Misuse Thinking"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, assets, actors, identities, systems, interfaces, flows, boundaries, records, events, scenarios, controls, dates, decisions, and outcomes.",
            "I understand that an abuse case is a defensive, outcome-focused model and not an instruction for causing harm.",
            "I will not include exploit steps, bypass methods, commands, real targets, real credentials, real internal details, evasion, persistence, malware, or destructive procedures.",
            "I will distinguish deliberate misuse, accidental misuse, process failure, supplier failure, automation failure, administrative error, privacy misuse, and recovery misuse.",
            "I will not claim malicious intent, exploitability, compromise, or impact without fictional evidence and clearly stated uncertainty.",
            "I will connect every scenario to assets, actors, entry points, flows, trust boundaries, evidence, controls, owners, recovery, and review triggers.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Safest Threat Model Asks What Could Go Wrong without Teaching How to Cause It"
        >
          <p className="leading-8">
            A fictional Northbridge team notices that support analysts can reset
            accounts, change notification preferences, view case status, and
            initiate document reprocessing. A weak exercise might jump to a
            dramatic insider story. A professional abuse case asks a safer and
            more useful question: could a legitimate support capability affect
            identity, privacy, workflow, or communication assets beyond the
            verified support purpose if object checks, approvals, reason
            capture, evidence, or lifecycle controls are incomplete?
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Unsafe framing
              </p>
              <p className="mt-2 leading-7">
                “Explain how an insider could take over accounts and avoid
                detection.” This is operational, assumes intent, and does not
                support a safe high-school learning objective.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Safe defensive framing
              </p>
              <p className="mt-2 leading-7">
                “Could the fictional support role perform a high-impact account
                or notification action without complete object, approval,
                reason, user-confirmation, evidence, or lifecycle context?”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            The goal is not to imagine the most dramatic story. The goal is to
            identify bounded harmful outcomes, challenge assumptions, improve
            controls, assign owners, preserve evidence limits, and support
            better design decisions.
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
          title="Features, Workflows, and Controls Can Fail in More Than One Way"
        >
          <p className="leading-8">
            Traditional threat lists often focus on a deliberately harmful
            external actor. Professional defenders also examine accidental
            misuse, broad authority, incorrect state, poor sequencing, confusing
            interfaces, stale trust, supplier failure, automation limits,
            missing evidence, degraded operation, and recovery mistakes. These
            conditions can harm confidentiality, integrity, availability,
            privacy, safety, trust, accountability, and recoverability even when
            no malicious intent is proven.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Design question",
                "Could a legitimate fictional feature or role produce an unsafe result under the wrong state, object, purpose, timing, or authority?",
              ],
              [
                "Evidence question",
                "Which fictional records would distinguish normal use, error, policy violation, degraded service, stale state, or deliberate misuse?",
              ],
              [
                "Decision question",
                "Which owner should validate the assumption, choose a mitigation, accept residual risk, and maintain the scenario?",
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
          title="The SAFE Abuse-Case Method"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "S — Scope the outcome",
                "Define the fictional decision, assets, actors, interfaces, flows, trust boundaries, state, and harmful outcome without operational detail.",
              ],
              [
                "A — Analyze assumptions",
                "Identify permissions, process order, ownership, data purpose, supplier trust, automation limits, evidence, and recovery assumptions.",
              ],
              [
                "F — Find controls and evidence",
                "Connect prevention, detection, response, recovery, privacy, governance, communication, source health, and responsible owners.",
              ],
              [
                "E — Explain uncertainty",
                "Separate observation, interpretation, hypothesis, assumption, unknown, confidence, limitation, current state, and future state.",
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
              Complete abuse-case statement template
            </p>
            <p className="mt-2 leading-7">
              If a fictional precondition or trust assumption is true, an
              approved capability, role, workflow, dependency, or process state
              could affect specified assets and produce a bounded harmful
              outcome. The model records existing controls, required evidence,
              uncertainty, detection opportunities, recovery needs, responsible
              owners, residual questions, and review triggers without describing
              how to carry out harmful action.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Safe Misuse and Abuse-Case Reasoning"
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
            Explore Ten Families of Fictional Misuse
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            A balanced fictional abuse-case library includes human and
            non-human actors, deliberate and accidental explanations, technical
            and process conditions, privacy and evidence concerns, supplier and
            automation dependencies, and recovery outcomes.
          </p>

          <div className="mt-6 grid gap-5">
            {misuseFamilies.map((item) => (
              <article
                key={item.family}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.family}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Fictional examples", item.examples],
                    ["Safe defender questions", item.safeQuestions],
                    ["Supporting evidence", item.evidence],
                    ["Control themes", item.controls],
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
        </section>

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Build Every Abuse Case with Twelve Decision Fields"
        >
          <div className="grid gap-5">
            {abuseCaseFields.map((item, index) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">
                      {item.field}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.purpose}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong fictional example
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strongExample}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak or unsafe example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weakExample}</p>
                  </div>
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
            Use Safe Question Patterns
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Safe misuse thinking asks whether a fictional capability,
            assumption, role, state, or dependency could produce harm and which
            defensive decisions follow. It never provides procedural harmful
            instructions.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {safeWritingPatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.pattern}
                </h3>
                <div className="mt-4 rounded-xl border border-emerald-300/25 bg-slate-950/70 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Fictional example
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.example}</p>
                </div>
                <p className="mt-4 text-sm leading-6">{item.whySafe}</p>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Recognize Unsafe or Low-Quality Patterns"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {unsafeWritingPatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-red-400/25 bg-red-400/10 p-5 text-red-50"
              >
                <h3 className="text-lg font-black text-red-100">
                  {item.pattern}
                </h3>
                <p className="mt-3 text-sm leading-6">{item.problem}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Safe alternative
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.safeAlternative}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Separate Intent, Mechanism, Outcome, and Evidence"
        >
          <p className="leading-8">
            Professional abuse cases do not collapse every question into a
            single story. They distinguish what happened, what could happen,
            what condition might permit it, what intent is known or unknown,
            what outcome matters, and what evidence supports each statement.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Dimension",
                    "Safe fictional question",
                    "What not to assume",
                    "Useful evidence",
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
                    "Actor",
                    "Which role or service was involved, and what relationship and authority did it have?",
                    "Do not assume identity, motivation, trustworthiness, or malicious intent.",
                    "Identity, role, lifecycle, assignment, service owner, and activity records.",
                  ],
                  [
                    "Precondition",
                    "Which state, permission, assumption, missing control, stale dependency, or workflow condition matters?",
                    "Do not assume the condition exists because it is plausible.",
                    "Configuration decision, policy, workflow state, review, diagram, owner statement, and test evidence.",
                  ],
                  [
                    "Capability",
                    "Which legitimate feature, role, workflow, interface, automation, or recovery function could be misused?",
                    "Do not describe operational procedures for causing harm.",
                    "Requirement, interface purpose, role map, workflow record, and service definition.",
                  ],
                  [
                    "Outcome",
                    "Which bounded mission, data, identity, privacy, service, evidence, safety, recovery, or trust harm could result?",
                    "Do not claim catastrophic impact without evidence and context.",
                    "Business impact, data classification, support themes, recovery exercise, and owner decision.",
                  ],
                  [
                    "Intent",
                    "Is deliberate, accidental, process, supplier, automation, or unknown explanation supported?",
                    "Do not convert unusual behavior or policy violation into proof of intent.",
                    "Interview, ticket, event context, approval, expected behavior, and investigation conclusion.",
                  ],
                  [
                    "Evidence",
                    "Which records support or limit the scenario, and are sources healthy and complete?",
                    "Do not treat one alert, log, dashboard, or missing field as complete proof.",
                    "Events, source health, correlation, tickets, approvals, timelines, reviews, and confidence.",
                  ],
                  [
                    "Control",
                    "Which prevention, detection, response, recovery, privacy, governance, and communication controls apply?",
                    "Do not list generic controls without scenario traceability.",
                    "Control requirements, policy decisions, event outputs, tests, owner reviews, and metrics.",
                  ],
                  [
                    "Decision",
                    "Who validates the scenario, chooses mitigations, accepts residual risk, and maintains the record?",
                    "Do not assign every decision to an unnamed technical team.",
                    "Ownership map, decision log, risk acceptance, review trigger, and completion evidence.",
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
          eyebrow="Scenario Quality"
          title="Move from a Dramatic Story to a Decision-Ready Abuse Case"
        >
          <div className="grid gap-5">
            {scenarioQuality.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.level}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Scenario statement
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.statement}</p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Remaining problem
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.problem}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Improvement
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.improvement}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Abuse-Case Map"
          title="Northbridge Student-Support Misuse Relationships"
        >
          <p className="leading-8">
            The model below is entirely invented. It shows how fictional
            capabilities and conditions can connect to bounded harmful outcomes
            without explaining how to cause them.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.2fr_0.9fr]">
            <div className="grid gap-3">
              {[
                [
                  "Support authority",
                  "Reset, notification correction, status view, and reprocessing capabilities.",
                ],
                [
                  "Supplier trust",
                  "Processing request and result flows with shared ownership.",
                ],
                [
                  "Automation",
                  "Routing, prioritization, retry, archival, and notification logic.",
                ],
                [
                  "Recovery authority",
                  "Restore, failover, queue restart, emergency identity, and reconciliation.",
                ],
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
                Fictional Misuse Outcomes
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Identity", "Incorrect reset, stale role, broad authority"],
                  ["Privacy", "Unnecessary field, audience, retention, inference"],
                  ["Workflow", "Wrong state, order, duplicate, retry, conflict"],
                  ["Evidence", "Missing context, unhealthy source, weak correlation"],
                  ["Availability", "Delay, hidden backlog, unsafe workaround"],
                  ["Automation", "Low confidence, stale context, weak guardrail"],
                  ["Recovery", "Wrong order, stale source, incomplete closure"],
                  ["Trust", "Incorrect status, confusing message, unclear ownership"],
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
                [
                  "Prevention",
                  "Authorization, validation, minimization, guardrails, safer defaults.",
                ],
                [
                  "Detection",
                  "Events, source health, state, correlation, review, alert quality.",
                ],
                [
                  "Response",
                  "Triage, ownership, containment, communication, evidence preservation.",
                ],
                [
                  "Recovery",
                  "Trusted source, sequencing, reconciliation, validation, closure.",
                ],
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
          title="Fake Northbridge Abuse-Case Dashboard"
          subtitle="Fictional scenario coverage, ownership, evidence, and quality status for training only."
          metrics={[
            {
              label: "Abuse cases drafted",
              value: "18",
              note: "The library covers identity, workflow, privacy, supplier, evidence, automation, availability, recovery, and usability.",
            },
            {
              label: "Cases missing owner decisions",
              value: "5",
              note: "Supplier-field, support-confirmation, analytics-purpose, archival-identity, and recovery-sequencing cases need accountable owners.",
            },
            {
              label: "Cases with weak evidence",
              value: "7",
              note: "Several scenarios rely on draft diagrams, incomplete role records, dashboard summaries, or future-state assumptions.",
            },
          ]}
        />

        <FakeAlertCard
          title="Abuse Case Assumes Intent without Evidence"
          severity="High"
          time="12:06 PM"
          source="Fake Northbridge Threat-Model Quality Console"
          details="A fictional draft scenario states that a support analyst deliberately changed notification settings to hide case activity. The available evidence shows missing reason and confirmation fields, but it does not establish actor intent, purpose, authorization status, or harmful outcome."
          recommendation="Rewrite the scenario using neutral actor language. Separate observation, possible explanations, preconditions, affected assets, evidence limits, control questions, owner review, and residual uncertainty. Do not investigate or test any real system."
        />

        <FakeLogPanel
          title="Fake Abuse-Case Review Timeline"
          logs={[
            "09:00 REVIEW scope='northbridge-support-portal' mode='fictional'",
            "09:07 CASE AC-01 family='identity-authority' status='draft'",
            "09:14 CASE AC-02 family='workflow-process' status='draft'",
            "09:21 CASE AC-03 family='data-privacy' field='support-note'",
            "09:28 CASE AC-04 family='supplier-dependency' evidence='partial'",
            "09:35 CASE AC-05 family='logging-evidence' health='green-delay'",
            "09:42 CASE AC-06 family='automation' state='future-proposed'",
            "09:49 CASE AC-07 family='recovery' sequence='unvalidated'",
            "09:56 QUALITY intent-claim='unsupported' case='support-change'",
            "10:03 QUALITY operational-detail='none' status='pass'",
            "10:10 EVIDENCE duplicate-submission cause='not-proven'",
            "10:17 EVIDENCE archival-identity owner='missing'",
            "10:24 CONTROL object-check='question' approval='question'",
            "10:31 CONTROL minimization='question' retention='question'",
            "10:38 CONTROL source-health='question' reconciliation='question'",
            "10:45 OWNER decisions-missing='5'",
            "10:52 REVIEW weak-evidence='7' duplicate-cases='2'",
            "10:59 ACTION rewrite-intent='required'",
            "11:06 ACTION merge-duplicates='required'",
            "11:13 CONFIDENCE library='medium' current-state='partial'",
            "12:06 ALERT quality='intent-assumption'",
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
                    ["Abuse-case use", item.use],
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
          title="Which Abuse Case Is Best Supported by the Fictional Evidence?"
          question="Which scenario is the strongest evidence-aware and non-operational conclusion?"
          evidence={[
            "The fictional support role can reset accounts, change notification settings, view case status, and initiate reprocessing.",
            "Several notification-change tickets lack reason and user-confirmation fields.",
            "The evidence does not establish whether the changes were authorized, accidental, deliberate, or harmful.",
            "The supplier request may include a free-text support note, but actual population and approved purpose remain uncertain.",
            "Queue delays occurred while source health displayed Green.",
            "Users submitted duplicate documents after delayed status notifications, but one cause is not proven.",
            "An archival service identity lacks a confirmed owner and has passed its review date.",
            "The recovery exercise produced stale notifications and repeated archival tasks after application restoration.",
          ]}
          options={[
            "A legitimate fictional support capability could affect identity, notification, workflow, or privacy assets beyond the verified support purpose if object checks, reason capture, user confirmation, approval, evidence, or lifecycle controls are incomplete; owner review is required.",
            "A support analyst deliberately hid case activity.",
            "The supplier has misused private data.",
            "The portal has been compromised because users submitted duplicate documents.",
          ]}
          bestAnswer={0}
          explanation="The first conclusion is bounded, neutral, evidence-aware, defensive, and non-operational. It identifies a plausible misuse condition and owner questions without claiming intent, misuse, compromise, or impact that the evidence does not prove."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Errors That Weaken Abuse Cases and Misuse Thinking"
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
          title="Build the Northbridge Abuse-Case Library"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            access, test, scan, configure, monitor, investigate, recover, or
            change any real system. Do not include operational attack
            instructions, real identities, credentials, diagrams, interfaces,
            logs, suppliers, configurations, support records, recovery details,
            or private information.
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
          title="A Draft Abuse Case Accuses a Fictional Support Analyst"
          scenario="The draft says a support analyst deliberately changed notification settings to hide case activity. The supplied evidence only shows missing reason and user-confirmation fields."
          choices={[
            {
              label: "Choice A",
              response:
                "Rewrite the case using neutral actor language, list multiple possible explanations, identify affected assets and control questions, preserve evidence limits, and assign owner review.",
              outcome:
                "Best defensive choice. It keeps the scenario useful without inventing intent or unsupported facts.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the accusation because the missing fields look suspicious.",
              outcome:
                "Weak and unfair. Missing evidence does not establish intent, authorization status, or harmful purpose.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the scenario entirely because intent is unknown.",
              outcome:
                "Incomplete. The underlying workflow and evidence gap can still support a neutral, defensive abuse case.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Portfolio Reviewer Requests More Realistic Abuse Cases"
          scenario="A reviewer suggests copying real incident scenarios, internal role names, supplier details, and interface descriptions, then removing addresses and passwords."
          choices={[
            {
              label: "Choice A",
              response:
                "Refuse and invent every organization, asset, actor, identity, role, interface, flow, boundary, event, date, scenario, control, decision, and outcome from scratch.",
              outcome:
                "Best ethical choice. Complete fictionalization protects people, systems, suppliers, processes, and sensitive organizational information.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Use the real scenarios but replace names and addresses.",
              outcome:
                "Unsafe. Relationships, roles, workflows, suppliers, controls, and recovery details may still expose real information.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Publish the real scenarios because the project is defensive.",
              outcome:
                "Unsafe and unauthorized. Defensive purpose does not remove confidentiality, privacy, or permission requirements.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Create One Abuse-Case Chain without Turning It into an Attack Narrative"
        >
          <p className="leading-8">
            Build a fictional chain connecting delayed supplier results,
            misleading health evidence, duplicate user submissions, support
            reprocessing, stale notification state, and recovery sequencing.
            The challenge is to preserve causal uncertainty and avoid claiming
            that one actor or component caused every outcome.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Separate observations",
                "List each fictional event or record independently before drawing relationships.",
              ],
              [
                "Identify multiple explanations",
                "Include delay, stale state, duplicate behavior, support confusion, automation, supplier failure, and recovery ordering.",
              ],
              [
                "Map affected assets",
                "Connect case integrity, notification accuracy, user trust, support workload, evidence quality, and recovery.",
              ],
              [
                "Preserve uncertainty",
                "State which relationships are supported, plausible, unknown, contradicted, or awaiting owner validation.",
              ],
              [
                "Choose control themes",
                "Use state checks, bounded retry, duplicate handling, source health, confirmation, reconciliation, communication, and ownership.",
              ],
              [
                "Define closure",
                "Specify which fictional evidence and owner decisions would close, merge, split, reprioritize, or retire the scenarios.",
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
              Produce a fictional causal-hypothesis map, three alternative
              explanations, five connected abuse cases, shared preconditions,
              evidence limits, control traceability, owner decisions, recovery
              requirements, and a leadership explanation of why correlation is
              not proof of one cause.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Abuse Cases and Misuse Thinking Checklist"
          items={[
            "I can explain an abuse case as an outcome-focused defensive model rather than an attack procedure.",
            "I can write safe fictional misuse questions without exploit steps, bypass methods, commands, evasion, persistence, malware, or real targets.",
            "I can connect each abuse case to affected assets, actors, entry points, data flows, trust boundaries, preconditions, and owners.",
            "I can include deliberate, accidental, process, supplier, automation, usability, degraded-operation, and recovery scenarios.",
            "I can distinguish actor role and behavior from unsupported conclusions about intent.",
            "I can separate observation, interpretation, hypothesis, assumption, unknown, confidence, and evidence limitation.",
            "I can describe bounded impact across mission, data, identity, privacy, service, evidence, safety, recovery, users, and trust.",
            "I can map prevention, detection, response, recovery, privacy, governance, communication, and source-health controls to exact scenarios.",
            "I can identify detection opportunities and evidence requirements without over-collecting sensitive fictional data.",
            "I can label current-state, future-state, temporary, degraded, recovery, and retired scenarios clearly.",
            "I can merge duplicate cases while preserving distinct affected assets, outcomes, owners, and mitigations.",
            "I can create a completely fictional abuse-case library without copying or modifying real internal scenarios, roles, diagrams, logs, suppliers, configurations, or recovery details.",
          ]}
        />

        <MiniQuiz
          title="A3.4 Mini Quiz: Abuse Cases and Misuse Thinking"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Abuse-Case and Misuse-Question Library for the Northbridge Student-Support Portal. Include purpose, scope, exclusions, safety boundary, at least eighteen abuse cases across identity, workflow, privacy, input, supplier, evidence, automation, availability, recovery, and usability families, affected assets, actor context, entry points, flows, trust boundaries, preconditions, misused capabilities, bounded outcomes, existing controls, detection opportunities, response and recovery needs, evidence, evidence limits, assumptions, unknowns, confidence, current-state and future-state labels, owners, residual questions, review triggers, overlap review, leadership summary, technical appendix, reflection, and a statement that every organization, asset, actor, identity, system, interface, flow, boundary, record, event, scenario, control, date, decision, and outcome is invented."
          tips={[
            "Write outcome-focused defensive scenarios and never include step-by-step harmful procedures.",
            "Use neutral fictional actor language and preserve deliberate, accidental, process, supplier, automation, and unknown explanations.",
            "Connect every case to exact assets, capabilities, conditions, controls, evidence, owners, and review triggers.",
            "Include detection, response, recovery, privacy, communication, source health, and business-state reconciliation—not only prevention.",
            "Keep the entire artifact completely fictional, non-operational, privacy-safe, school-appropriate, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready to Organize Threats Conceptually?"
        >
          <p className="leading-8">
            Before moving to A3.5, rate your readiness from 1 to 5 for safe
            misuse questions, scenario structure, actor neutrality, bounded
            impact, evidence limits, accidental misuse, supplier and automation
            cases, control traceability, recovery, ownership, current-state
            labeling, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can write a fictional abuse case that supports defensive decisions without explaining how to cause harm.",
              "I can distinguish a role, capability, precondition, outcome, intent, evidence, control, and owner decision.",
              "I can include accidental, process, supplier, automation, usability, degraded, and recovery misuse.",
              "I can challenge a control assumption without claiming exploitability or current failure.",
              "I can explain what fictional evidence supports and what it does not prove.",
              "I can map each scenario to specific prevention, detection, response, recovery, privacy, governance, and communication controls.",
              "I can identify duplicate scenarios, shared root conditions, distinct outcomes, and review triggers.",
              "I can create a complete fictional artifact without copying, modifying, or exposing real internal information.",
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
            Record one fictional scenario you rewrote to remove operational
            detail, one actor-intent assumption you corrected, one accidental
            misuse case, one evidence limitation, and one question you will
            carry into A3.5 threat categories.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Abuse cases are defensive, outcome-focused models—not instructions for causing harm.",
            "A strong abuse case connects affected assets, actors, entry points, flows, trust boundaries, preconditions, capabilities, outcomes, evidence, controls, owners, and review triggers.",
            "Professional misuse thinking includes deliberate, accidental, process, supplier, automation, usability, degraded-operation, and recovery explanations.",
            "Actor role, unusual behavior, denied requests, external origin, missing fields, or stale identity do not prove malicious intent.",
            "A plausible scenario is not proof that a weakness exists, a control failed, or an outcome occurred.",
            "Bounded impact is more useful than catastrophic language because it supports evidence, prioritization, mitigation, recovery, and ownership decisions.",
            "Controls must be traced to exact scenarios and include expected evidence, dependencies, limitations, owners, and residual risk.",
            "Detection, response, recovery, privacy, governance, communication, source health, and reconciliation belong in abuse-case design.",
            "Current-state, future-state, temporary, degraded, recovery, and retired scenarios must be labeled clearly.",
            "Every CyberShield scenario and artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, organize fictional threat and misuse questions into
            conceptual categories without treating labels as proof or forcing
            every concern into one framework.
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