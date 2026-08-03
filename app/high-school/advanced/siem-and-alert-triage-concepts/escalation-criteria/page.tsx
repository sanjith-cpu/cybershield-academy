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
const modulePath = `${trackPath}/siem-and-alert-triage-concepts`;
const previousLesson = `${modulePath}/triage-questions-and-evidence-review`;
const nextLesson = `${modulePath}/case-management-and-notes`;

const objectives = [
  "Explain fictional escalation as an evidence-based expansion of review, authority, expertise, communication, or urgency rather than a punishment, assumption of guilt, or automatic response action.",
  "Distinguish fictional technical, identity, service-owner, supplier, source-health, privacy, recovery, leadership, and time-sensitive escalation criteria.",
  "Design fictional escalation thresholds using mission impact, privilege, scope, active effect, source health, owner nonresponse, time sensitivity, recoverability, legal or privacy concerns, and residual uncertainty.",
  "Create fictional escalation handoffs containing neutral observations, evidence, source health, confidence, severity, priority, unanswered questions, owners, deadlines, boundaries, and de-escalation criteria.",
  "Create a portfolio-ready fictional Escalation Criteria Package containing matrices, triggers, communication templates, handoff records, ownership, metrics, validation cases, residual risk, and review triggers.",
];

const vocabulary = [
  [
    "Escalation",
    "A fictional evidence-based decision to involve broader, faster, more specialized, or more authoritative review because current conditions exceed the original analyst or owner scope.",
  ],
  [
    "Escalation trigger",
    "A fictional documented condition that causes the case to move to a broader review path.",
  ],
  [
    "Escalation threshold",
    "A fictional minimum evidence, impact, scope, time, source-health, privacy, recovery, or owner condition required before escalation.",
  ],
  [
    "Technical escalation",
    "A fictional escalation to a source, detection, platform, identity, device, network, application, or recovery specialist for evidence or system-state questions.",
  ],
  [
    "Service-owner escalation",
    "A fictional escalation to the owner of an affected service, workflow, data category, dependency, or user outcome.",
  ],
  [
    "Identity-owner escalation",
    "A fictional escalation to the owner of a role, group, assignment, approval, extension, sponsor, revocation, or identity lifecycle.",
  ],
  [
    "Supplier escalation",
    "A fictional escalation to a supplier owner, sponsor, support coordinator, assignment owner, or service manager.",
  ],
  [
    "Source-health escalation",
    "A fictional escalation when evidence freshness, completeness, schema, parser, queue, coverage, conflict, blind period, or recovery state materially affects decisions.",
  ],
  [
    "Privacy escalation",
    "A fictional escalation when evidence collection, access, display, retention, sharing, or purpose limitation requires specialized review.",
  ],
  [
    "Recovery escalation",
    "A fictional escalation when restoration, replay, backlog, session state, source health, service validation, rollback, or closure remains uncertain.",
  ],
  [
    "Leadership escalation",
    "A fictional escalation for mission impact, resource conflict, cross-team accountability, risk acceptance, deadlines, priorities, or major residual risk.",
  ],
  [
    "Time-sensitive escalation",
    "A fictional escalation used when delay may reduce evidence quality, response opportunity, user protection, service continuity, or recovery options.",
  ],
  [
    "Escalation owner",
    "The fictional person or role accountable for coordinating the escalation and ensuring questions, evidence, deadlines, and outcomes remain tracked.",
  ],
  [
    "Receiving owner",
    "The fictional person or role that accepts the escalated question and has authority or expertise to answer it.",
  ],
  [
    "Handoff",
    "A fictional transfer of review responsibility or specialized work that preserves the original evidence, context, ownership, chronology, and deadlines.",
  ],
  [
    "Acceptance criteria",
    "Fictional requirements the receiving owner must confirm before the escalation is considered successfully handed off.",
  ],
  [
    "Escalation boundary",
    "A fictional statement describing which questions, systems, data, decisions, and actions are inside or outside the escalation.",
  ],
  [
    "De-escalation",
    "A fictional evidence-based decision to reduce urgency or return the case to a narrower workflow after triggers no longer apply.",
  ],
  [
    "De-escalation criteria",
    "Fictional evidence, source-health, impact, ownership, recovery, or timing conditions required to lower the escalation level.",
  ],
  [
    "Parallel escalation",
    "A fictional process in which multiple accountable owners review different bounded questions at the same time.",
  ],
  [
    "Escalation aging",
    "A fictional process that increases attention when an escalated question remains unresolved beyond documented deadlines.",
  ],
  [
    "Escalation fatigue",
    "A fictional condition in which too many low-quality or broad escalations reduce attention and trust.",
  ],
  [
    "Premature escalation",
    "A fictional escalation made before the minimum evidence, scope, owner, or decision need is documented.",
  ],
  [
    "Delayed escalation",
    "A fictional failure to broaden review when impact, scope, source loss, owner nonresponse, privacy, recovery, or time sensitivity requires it.",
  ],
];

const escalationTypes = [
  {
    type: "Technical escalation",
    question:
      "Which fictional source, parser, mapping, timing, correlation, session, service-state, or recovery question requires specialist review?",
    evidence:
      "Source health, parser status, schema version, field meaning, timing, queue, correlation explanation, replay, duplication, and failed validation.",
    trigger:
      "Required evidence cannot be interpreted or trusted within the current analyst scope.",
    recipient:
      "Source owner, detection owner, platform owner, identity specialist, device specialist, service specialist, or recovery specialist.",
    nonTrigger:
      "The alert is simply unfamiliar or marked High severity.",
  },
  {
    type: "Identity-owner escalation",
    question:
      "Which fictional role, group, assignment, approval, extension, sponsor, revocation, or effective-access question requires identity authority?",
    evidence:
      "Identity lifecycle records, role catalog, group state, approval, extension, assignment, sponsor, session relationship, source health, and timing.",
    trigger:
      "Authorization or effective-access decisions cannot be resolved through documented evidence and normal owner response.",
    recipient:
      "Identity owner, role owner, access-governance owner, or recovery-identity owner.",
    nonTrigger:
      "A username or identity label appears in an alert.",
  },
  {
    type: "Service-owner escalation",
    question:
      "Which fictional service, user, availability, dependency, data, privacy, or recovery impact requires accountable service review?",
    evidence:
      "Service criticality, current state, user-impact evidence, dependency map, owner response, application result, recovery state, and source health.",
    trigger:
      "Active or potentially significant mission impact cannot be resolved through routine triage.",
    recipient:
      "Service owner, application owner, business-process owner, or recovery owner.",
    nonTrigger:
      "The service is labeled critical but no relevant condition is present.",
  },
  {
    type: "Supplier escalation",
    question:
      "Which fictional supplier assignment, sponsor, device, destination, support purpose, maintenance, or contract-boundary question requires supplier governance?",
    evidence:
      "Supplier identity, sponsor, assignment, support request, destination, device, timing, owner, approval, and source health.",
    trigger:
      "Supplier activity falls outside current evidence, scope, owner response, or documented assignment.",
    recipient:
      "Supplier owner, sponsor, support coordinator, procurement owner, or service manager.",
    nonTrigger:
      "The activity occurred outside normal hours but matches a current maintenance record.",
  },
  {
    type: "Source-health escalation",
    question:
      "Which fictional source outage, delay, conflict, blind period, schema drift, parser failure, queue issue, duplication, or recovery condition threatens evidence quality?",
    evidence:
      "Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering states plus affected populations, periods, detections, and alternate evidence.",
    trigger:
      "Evidence reliability affects multiple alerts, critical coverage, or time-sensitive decisions.",
    recipient:
      "Source owner, SIEM quality owner, platform owner, detection owner, or leadership owner.",
    nonTrigger:
      "One optional enrichment field is briefly stale without mission impact.",
  },
  {
    type: "Privacy escalation",
    question:
      "Which fictional collection, field, access, display, sharing, retention, deletion, or purpose question requires specialized privacy review?",
    evidence:
      "Field-purpose map, access roles, retention schedule, sharing audience, case notes, evidence requests, and public portfolio boundary.",
    trigger:
      "Current review requires potentially excessive, sensitive, unclear, or broadly shared evidence.",
    recipient:
      "Privacy reviewer, data-governance owner, risk owner, or leadership owner.",
    nonTrigger:
      "A purpose-limited category field is used under current documented access.",
  },
  {
    type: "Recovery escalation",
    question:
      "Which fictional service, source, session, queue, backlog, replay, validation, rollback, or closure issue requires broader recovery coordination?",
    evidence:
      "Recovery plan, current operating state, source health, backlog, replay, duplicates, service validation, session state, owner responses, and residual risk.",
    trigger:
      "Connectivity or partial restoration exists, but trustworthy service or evidence recovery remains incomplete.",
    recipient:
      "Recovery owner, service owner, source owner, identity owner, leadership owner, or quality owner.",
    nonTrigger:
      "The service has fully met documented recovery and closure criteria.",
  },
  {
    type: "Leadership escalation",
    question:
      "Which fictional mission, resource, cross-team, deadline, accountability, residual-risk, or risk-acceptance decision requires leadership authority?",
    evidence:
      "Impact, scope, time sensitivity, owner conflicts, resource constraints, unresolved deadlines, residual risk, and response options.",
    trigger:
      "The decision exceeds operational authority or requires organization-level prioritization or acceptance.",
    recipient:
      "Leadership owner, risk owner, program owner, or executive sponsor.",
    nonTrigger:
      "A routine evidence request is still within normal response time.",
  },
  {
    type: "Time-sensitive escalation",
    question:
      "Which fictional evidence, authority, session, support window, user impact, service state, or recovery opportunity may materially change if review is delayed?",
    evidence:
      "Expiration, session state, volatile evidence, active impact, support deadline, recovery window, owner availability, and widening scope.",
    trigger:
      "Delay may reduce the ability to answer the defender question or limit recovery options.",
    recipient:
      "The relevant specialist, owner, coordinator, privacy reviewer, or leadership owner with immediate decision authority.",
    nonTrigger:
      "The case is old but stable, fully owned, and within a documented review plan.",
  },
];

const criteriaDomains = [
  {
    domain: "Mission impact",
    escalationQuestion:
      "Does the fictional condition affect an essential service, broad user population, sensitive data category, privileged identity, supplier dependency, evidence capability, or recovery function?",
    evidence:
      "Service catalog, criticality, user-impact records, identity authority, data category, dependency map, source-health effect, and recovery plan.",
    escalationTrigger:
      "Confirmed or plausible high-impact mission effect exceeds normal triage authority.",
    caution:
      "Potential impact and confirmed active effect must remain separate.",
  },
  {
    domain: "Privilege and authority",
    escalationQuestion:
      "Does fictional active or uncertain authority allow broad, privileged, administrative, recovery, or supplier access?",
    evidence:
      "Role catalog, group state, assignment, approval, extension, session, effective access, owner, and source health.",
    escalationTrigger:
      "Privileged authority remains active or unresolved beyond a time-sensitive boundary.",
    caution:
      "Assigned privilege does not prove exercised privilege or harmful use.",
  },
  {
    domain: "Scope",
    escalationQuestion:
      "Is fictional scope broad, widening, cross-service, cross-environment, or still materially unknown?",
    evidence:
      "Unique identities, devices, services, destinations, users, environments, periods, duplicates, replay, and coverage.",
    escalationTrigger:
      "Scope expands beyond the original alert or affects multiple owners and services.",
    caution:
      "Alert count and duplicate records do not equal scope.",
  },
  {
    domain: "Active effect",
    escalationQuestion:
      "Is there fictional current user disruption, service degradation, privacy effect, continuing authority, source loss, recovery blockage, or evidence loss?",
    evidence:
      "Application results, user-support records, service state, owner confirmation, sessions, source health, and recovery state.",
    escalationTrigger:
      "Current impact requires faster coordination or broader authority.",
    caution:
      "High severity alone does not prove active effect.",
  },
  {
    domain: "Source health",
    escalationQuestion:
      "Does fictional Degraded, Blind, Conflicting, or Recovering evidence affect critical decisions or multiple detections?",
    evidence:
      "Freshness, completeness, schema, parser, queue, clock, coverage, conflict, blind period, recovery, and affected rules.",
    escalationTrigger:
      "Evidence quality creates broad false-negative, false-confidence, or historical-reassessment risk.",
    caution:
      "A source outage does not prove harmful activity occurred during the gap.",
  },
  {
    domain: "Owner nonresponse",
    escalationQuestion:
      "Has a fictional accountable owner missed a documented response deadline for a time-sensitive or high-impact question?",
    evidence:
      "Request time, owner assignment, deadline, reminders, impact, alternatives, current state, and escalation path.",
    escalationTrigger:
      "The unresolved owner question blocks triage, recovery, closure, or risk acceptance beyond the allowed time.",
    caution:
      "Nonresponse is not proof of misconduct or intent.",
  },
  {
    domain: "Time sensitivity",
    escalationQuestion:
      "Will fictional evidence, authorization, session state, active impact, support availability, or recovery options change materially if delayed?",
    evidence:
      "Expiration, session duration, volatile evidence, support window, service deadline, recovery deadline, and owner availability.",
    escalationTrigger:
      "The response opportunity is short or rapidly decreasing.",
    caution:
      "Age alone does not define urgency.",
  },
  {
    domain: "Privacy and governance",
    escalationQuestion:
      "Does fictional evidence use exceed current purpose, access, display, sharing, retention, or portfolio boundaries?",
    evidence:
      "Evidence request, field-purpose map, access roles, case audience, retention, sharing, deletion, and privacy review.",
    escalationTrigger:
      "The required evidence or proposed action needs specialized privacy or governance authority.",
    caution:
      "Privacy escalation should preserve the bounded defensive question rather than stop all review automatically.",
  },
  {
    domain: "Recovery and residual risk",
    escalationQuestion:
      "Does fictional restoration remain incomplete, unreconciled, unvalidated, or dependent on risk acceptance?",
    evidence:
      "Service state, sessions, queues, source health, replay, duplicates, rollback, validation, owner confirmation, and residual risk.",
    escalationTrigger:
      "Technical restoration exists but mission, evidence, or lifecycle recovery remains uncertain.",
    caution:
      "Connectivity restoration does not equal complete recovery.",
  },
  {
    domain: "Cross-team conflict",
    escalationQuestion:
      "Do fictional owners disagree about source authority, service impact, authorization, priority, scope, or closure?",
    evidence:
      "Owner statements, source provenance, role matrix, service catalog, timestamps, policy, and decision rights.",
    escalationTrigger:
      "The disagreement blocks a time-sensitive or high-impact decision.",
    caution:
      "Escalation should resolve the decision boundary, not assign blame.",
  },
];

const escalationLevels = [
  {
    level: "Level 0 — Routine triage",
    meaning:
      "Fictional analyst can answer the question through normal evidence review and owner response.",
    examples:
      "Stable scope, healthy sources, no active impact, clear ownership, normal response time.",
    owner:
      "Assigned analyst and routine source or service owners.",
    exit:
      "Move to closure, Expected, Conditional, or another normal triage state.",
  },
  {
    level: "Level 1 — Specialist review",
    meaning:
      "A fictional source, identity, device, service, supplier, detection, or recovery specialist is needed.",
    examples:
      "Field meaning, schema drift, source delay, identity lifecycle, service state, or replay ambiguity.",
    owner:
      "Case owner retains coordination while the specialist answers a bounded question.",
    exit:
      "Return to routine triage when the specialist question is resolved.",
  },
  {
    level: "Level 2 — Multi-owner coordination",
    meaning:
      "Several fictional owners must review related questions in parallel.",
    examples:
      "Identity, source, service, change, supplier, and recovery evidence must be reconciled.",
    owner:
      "Escalation coordinator with named receiving owners and deadlines.",
    exit:
      "Return to narrower ownership when scope, impact, and unresolved questions are reduced.",
  },
  {
    level: "Level 3 — Time-sensitive mission escalation",
    meaning:
      "Fictional active impact, privileged authority, broad source loss, widening scope, or short response opportunity requires immediate coordinated review.",
    examples:
      "Critical-service disruption, active stale privilege, broad Blind period, rapidly expanding scope, recovery deadline.",
    owner:
      "Senior operational owner with direct access to relevant service, identity, source, privacy, or recovery decision makers.",
    exit:
      "De-escalate only after active triggers are controlled and evidence is stable enough.",
  },
  {
    level: "Level 4 — Leadership or risk decision",
    meaning:
      "Fictional mission, resource, cross-team, legal, privacy, deadline, or residual-risk decisions exceed operational authority.",
    examples:
      "Conflicting priorities, unavailable resources, unresolved major risk, broad privacy concern, prolonged critical impact.",
    owner:
      "Leadership owner, risk owner, privacy authority, program owner, or executive sponsor.",
    exit:
      "Return to operational coordination after a documented decision, resources, acceptance, or direction are provided.",
  },
];

const handoffFields = [
  {
    field: "Escalation identifier",
    requirement:
      "Use a fictional unique identifier linked to the original alert and case.",
    purpose:
      "Preserves traceability across owners, notes, evidence, and decisions.",
  },
  {
    field: "Neutral observation",
    requirement:
      "Describe the fictional condition without unsupported intent, cause, scope, impact, or outcome.",
    purpose:
      "Prevents the receiving owner from inheriting a biased conclusion.",
  },
  {
    field: "Primary escalation question",
    requirement:
      "State the exact fictional question the receiving owner must answer.",
    purpose:
      "Keeps the escalation bounded and actionable.",
  },
  {
    field: "Evidence summary",
    requirement:
      "List fictional direct evidence, normalized fields, enrichment, owner statements, chronology, and evidence references.",
    purpose:
      "Allows the receiving owner to understand what is known without repeating broad collection.",
  },
  {
    field: "Source-health summary",
    requirement:
      "Show fictional Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering evidence and affected conclusions.",
    purpose:
      "Prevents false confidence or false absence.",
  },
  {
    field: "Severity, confidence, and priority",
    requirement:
      "Document fictional potential impact, evidence certainty, and review urgency separately.",
    purpose:
      "Explains why the escalation is important without claiming certainty.",
  },
  {
    field: "Scope and impact",
    requirement:
      "Document fictional affected and potentially affected identities, devices, services, destinations, users, environments, periods, and active effect.",
    purpose:
      "Supports appropriate receiving-owner authority and urgency.",
  },
  {
    field: "Alternative explanations",
    requirement:
      "List fictional approved, technical, timing, source-health, change, maintenance, supplier, recovery, and ownership possibilities.",
    purpose:
      "Keeps the receiving review evidence-driven.",
  },
  {
    field: "Actions already completed",
    requirement:
      "Record fictional triage, owner requests, source checks, validation, communication, and decision states already completed.",
    purpose:
      "Reduces duplicate work and preserves chronology.",
  },
  {
    field: "Requested action and boundary",
    requirement:
      "State which fictional evidence, decision, validation, coordination, or authority is requested and what is out of scope.",
    purpose:
      "Prevents escalation from becoming an unlimited investigation.",
  },
  {
    field: "Owner, recipient, and deadline",
    requirement:
      "Name fictional case owner, escalation owner, receiving owner, response deadline, review deadline, and backup path.",
    purpose:
      "Preserves accountability and time management.",
  },
  {
    field: "Acceptance and de-escalation criteria",
    requirement:
      "Document fictional handoff acceptance, success conditions, escalation exit, residual risk, closure, and reopen triggers.",
    purpose:
      "Prevents escalations from remaining open indefinitely.",
  },
];

const communicationRules = [
  {
    rule: "Lead with the decision need",
    weak:
      "Urgent! High alert! Please investigate everything.",
    strong:
      "Please confirm whether the fictional emergency-role extension was valid for the named role, purpose, service, destination, and alert period by the stated deadline.",
    reason:
      "A bounded decision question is more actionable than alarm language.",
  },
  {
    rule: "Separate observation from interpretation",
    weak:
      "The supplier performed unauthorized activity.",
    strong:
      "The fictional supplier session occurred outside the documented assignment window; current assignment evidence is delayed.",
    reason:
      "The strong version preserves uncertainty and the evidence gap.",
  },
  {
    rule: "Show source health",
    weak:
      "No extension was found.",
    strong:
      "No current extension is visible in the fictional SIEM, and the extension source is Conditional with an eighteen-minute delay.",
    reason:
      "The strong version avoids converting delayed evidence into absence.",
  },
  {
    rule: "Explain urgency",
    weak:
      "Please respond immediately.",
    strong:
      "A response is requested within thirty minutes because the fictional privileged session remains active and the authorization window has ended.",
    reason:
      "The strong version connects timing to a documented decision.",
  },
  {
    rule: "Limit the request",
    weak:
      "Send all identity and service records.",
    strong:
      "Provide only fictional role, approval, extension, session, owner, source-health, and service-impact fields for the alert period.",
    reason:
      "Purpose limitation reduces privacy and workload.",
  },
  {
    rule: "Preserve ownership",
    weak:
      "This is now the identity team's problem.",
    strong:
      "The fictional case owner retains coordination while the identity owner answers the authorization question and the source owner answers the delay question.",
    reason:
      "Escalation should not abandon the original case.",
  },
  {
    rule: "State non-proof boundaries",
    weak:
      "The alert confirms misuse.",
    strong:
      "The fictional alert does not prove harmful intent, privileged action, complete scope, or service impact.",
    reason:
      "The receiving owner should not inherit unsupported certainty.",
  },
  {
    rule: "Define completion",
    weak:
      "Let us know when this is handled.",
    strong:
      "The fictional escalation may de-escalate after extension state, effective access, session scope, source health, service impact, and residual risk are documented.",
    reason:
      "Explicit completion criteria prevent endless handoffs.",
  },
];

const escalationMatrix = [
  {
    id: "ESC-01",
    scenario: "Active privileged authority after expiration",
    evidence:
      "Fictional role and session remain Active after approval_end; extension evidence is delayed; service is critical.",
    level:
      "Level 3 — Time-sensitive mission escalation",
    owners:
      "Case owner, identity owner, source owner, service owner.",
    deadline:
      "Immediate review window with short owner-response deadline.",
    deEscalation:
      "Valid extension confirmed or authority revoked, session reviewed, source reconciled, service impact assessed, and residual risk documented.",
  },
  {
    id: "ESC-02",
    scenario: "Critical-service disruption with healthy evidence",
    evidence:
      "Fictional application and user-support sources confirm current impact across a broad user population.",
    level:
      "Level 3 — Time-sensitive mission escalation",
    owners:
      "Service owner, recovery owner, case owner, leadership owner if resources conflict.",
    deadline:
      "Immediate service coordination.",
    deEscalation:
      "Service restored, user impact validated, root cause questions owned, recovery criteria met, and follow-up scheduled.",
  },
  {
    id: "ESC-03",
    scenario: "Broad source Blind period",
    evidence:
      "Fictional network evidence is Blind across three critical service zones and multiple detections.",
    level:
      "Level 2 or Level 3 depending on current mission impact and duration.",
    owners:
      "Source owner, SIEM quality owner, detection owners, service owners.",
    deadline:
      "Prompt source restoration and affected-coverage review.",
    deEscalation:
      "Source recovery, backlog reconciliation, historical reassessment, alternate-evidence review, and residual gaps documented.",
  },
  {
    id: "ESC-04",
    scenario: "Conflicting role and group evidence",
    evidence:
      "Fictional role source says Revoked while group source says Active beyond expected synchronization.",
    level:
      "Level 1 — Specialist review",
    owners:
      "Identity owner, source owners, case owner.",
    deadline:
      "Within the documented identity-review window.",
    deEscalation:
      "Source authority, timing, synchronization, effective access, and current state reconciled.",
  },
  {
    id: "ESC-05",
    scenario: "Supplier assignment evidence missing",
    evidence:
      "Fictional sponsor, maintenance, device, and destination evidence are healthy; assignment source is Degraded.",
    level:
      "Level 1 or Level 2 depending on privilege, scope, and time sensitivity.",
    owners:
      "Supplier owner, sponsor, source owner, service owner.",
    deadline:
      "Before the support or maintenance window ends.",
    deEscalation:
      "Assignment, purpose, scope, owner, device, destination, and timing are confirmed or access is ended under authorized process.",
  },
  {
    id: "ESC-06",
    scenario: "Privacy-heavy evidence request",
    evidence:
      "Fictional analyst requests complete identity and device history for one bounded authorization question.",
    level:
      "Level 1 — Privacy specialist review",
    owners:
      "Privacy reviewer, case owner, identity owner.",
    deadline:
      "Before the broad request is fulfilled.",
    deEscalation:
      "Purpose-limited fields, scope, period, access, retention, and decision use are approved.",
  },
  {
    id: "ESC-07",
    scenario: "Recovery remains unreconciled",
    evidence:
      "Fictional connectivity returned, but sessions, replay, duplicates, source health, service validation, and residual risk remain incomplete.",
    level:
      "Level 2 — Multi-owner coordination",
    owners:
      "Recovery owner, service owner, source owner, identity owner, quality owner.",
    deadline:
      "Within the recovery-validation deadline.",
    deEscalation:
      "Backlog, replay, sessions, source health, service state, validation, and closure criteria pass.",
  },
  {
    id: "ESC-08",
    scenario: "Cross-team owner conflict",
    evidence:
      "Fictional identity and service owners disagree about authorization scope and case closure while the response window narrows.",
    level:
      "Level 2 or Level 4 depending on mission impact and authority.",
    owners:
      "Escalation coordinator, risk owner, leadership owner, relevant operational owners.",
    deadline:
      "Before the time-sensitive decision window closes.",
    deEscalation:
      "Decision rights, evidence authority, scope, residual risk, and next actions are documented.",
  },
];

const validationCases = [
  {
    id: "ESC-T01",
    type: "Routine case",
    fictionalInput:
      "Healthy sources, stable scope, no active impact, clear owner, normal response time.",
    expected:
      "Remain Level 0 with routine triage and no unnecessary escalation.",
    protects:
      "Escalation fatigue and unnecessary handoff.",
  },
  {
    id: "ESC-T02",
    type: "Specialist evidence question",
    fictionalInput:
      "One normalized field has unclear source meaning and affects confidence.",
    expected:
      "Level 1 technical escalation to source and normalization owners.",
    protects:
      "Semantic accuracy.",
  },
  {
    id: "ESC-T03",
    type: "Active critical-service impact",
    fictionalInput:
      "Healthy application and support evidence confirm broad current user impact.",
    expected:
      "Level 3 time-sensitive service and recovery escalation.",
    protects:
      "Mission continuity.",
  },
  {
    id: "ESC-T04",
    type: "Privileged authority",
    fictionalInput:
      "Fictional emergency role and session remain Active after expiration with delayed extension evidence.",
    expected:
      "Level 3 parallel escalation to identity, source, and service owners.",
    protects:
      "Time-sensitive authority review.",
  },
  {
    id: "ESC-T05",
    type: "Broad Blind period",
    fictionalInput:
      "Required source is Blind across several critical services.",
    expected:
      "Level 2 or 3 source-health escalation with affected-detection review.",
    protects:
      "False-negative and historical-reassessment risk.",
  },
  {
    id: "ESC-T06",
    type: "Owner nonresponse",
    fictionalInput:
      "Identity owner misses the documented deadline while privileged authority may remain active.",
    expected:
      "Escalation aging and alternate owner or leadership path activate.",
    protects:
      "Blocked time-sensitive decisions.",
  },
  {
    id: "ESC-T07",
    type: "Privacy boundary",
    fictionalInput:
      "A proposed request includes unrelated personal and historical fields.",
    expected:
      "Privacy escalation before collection; request is minimized.",
    protects:
      "Purpose limitation.",
  },
  {
    id: "ESC-T08",
    type: "Cross-team disagreement",
    fictionalInput:
      "Source and service owners disagree about whether evidence is authoritative and closure is appropriate.",
    expected:
      "Level 2 coordination or Level 4 decision if authority or risk acceptance is required.",
    protects:
      "Decision-right clarity.",
  },
  {
    id: "ESC-T09",
    type: "Recovery incomplete",
    fictionalInput:
      "Connectivity is restored but replay, duplicates, sessions, and service validation remain unresolved.",
    expected:
      "Remain escalated until recovery criteria and residual-risk review pass.",
    protects:
      "Premature closure.",
  },
  {
    id: "ESC-T10",
    type: "De-escalation",
    fictionalInput:
      "Active impact ends, source health stabilizes, scope is bounded, owners respond, and validation passes.",
    expected:
      "De-escalate to routine case management with follow-up and review triggers.",
    protects:
      "Escalation aging and unnecessary urgency.",
  },
  {
    id: "ESC-T11",
    type: "False urgency",
    fictionalInput:
      "A High-severity alert has healthy sources, no active impact, expected context, and complete owner response.",
    expected:
      "Do not escalate solely because of severity; classify Expected or continue routine review.",
    protects:
      "Severity-driven escalation fatigue.",
  },
  {
    id: "ESC-T12",
    type: "Handoff acceptance",
    fictionalInput:
      "Receiving owner is named but no bounded question, evidence, deadline, or acceptance criteria are included.",
    expected:
      "Handoff fails validation and must be corrected before transfer.",
    protects:
      "Ownership loss.",
  },
];

const qualityMetrics = [
  {
    metric: "Escalation precision",
    question:
      "How often do fictional escalations meet documented evidence, impact, scope, time, source-health, privacy, or owner criteria?",
    evidence:
      "Escalation records, trigger mapping, reviews, de-escalations, owner feedback, and outcomes.",
    limitation:
      "A technically valid escalation may still reach the wrong recipient.",
  },
  {
    metric: "Delayed-escalation rate",
    question:
      "How often do fictional active impact, source loss, privileged authority, owner nonresponse, or recovery risk exceed deadlines before escalation?",
    evidence:
      "Alert time, trigger time, escalation time, owner requests, impact timeline, and review records.",
    limitation:
      "Not every delay changes mission outcome.",
  },
  {
    metric: "Premature-escalation rate",
    question:
      "How often do fictional cases escalate without bounded questions, minimum evidence, ownership, or decision need?",
    evidence:
      "Rejected handoffs, downgraded cases, owner feedback, missing fields, and quality audits.",
    limitation:
      "A low rate does not prove all important cases escalated on time.",
  },
  {
    metric: "Handoff completeness",
    question:
      "Do fictional escalations include observation, question, evidence, source health, severity, confidence, priority, scope, owners, deadline, boundary, and completion criteria?",
    evidence:
      "Handoff checklist, receiving-owner acceptance, duplicate work, and case continuity.",
    limitation:
      "Complete forms can still contain stale or incorrect evidence.",
  },
  {
    metric: "Owner response quality",
    question:
      "Do fictional receiving owners provide current, scoped, evidence-supported responses within deadlines?",
    evidence:
      "Response time, fields supplied, authority, source health, validation, and follow-up.",
    limitation:
      "Fast responses may still be incomplete.",
  },
  {
    metric: "Parallel-escalation coordination",
    question:
      "Do fictional identity, service, source, supplier, privacy, recovery, and leadership owners answer separate questions without losing central coordination?",
    evidence:
      "Owner matrix, shared chronology, deadlines, handoffs, decision log, and unresolved-question register.",
    limitation:
      "More owners do not automatically improve decision quality.",
  },
  {
    metric: "De-escalation quality",
    question:
      "Do fictional escalations return to narrower workflows only after triggers end and evidence, impact, source health, ownership, and residual risk are stable?",
    evidence:
      "De-escalation criteria, validation, owner confirmation, remaining tasks, and reopen triggers.",
    limitation:
      "Low escalation volume may reflect premature de-escalation.",
  },
  {
    metric: "Escalation debt",
    question:
      "Which fictional triggers, thresholds, owners, recipients, deadlines, communication templates, acceptance criteria, or review paths are stale or unresolved?",
    evidence:
      "Debt register, review dates, failed tests, owner matrix, rejected handoffs, and residual-risk records.",
    limitation:
      "Counting debt does not identify mission impact by itself.",
  },
];

const evidenceMatrix = [
  {
    id: "ESC-E01",
    source: "Fictional stale-authority case",
    observation:
      "Role and session remain Active after approval_end; extension evidence is delayed; group evidence is Degraded.",
    supports:
      "A time-sensitive identity and source escalation is justified.",
    limits:
      "The evidence does not prove misuse, harmful intent, or current service impact.",
    use:
      "Parallel escalation to identity and source owners with bounded questions and short deadlines.",
  },
  {
    id: "ESC-E02",
    source: "Fictional service-impact evidence",
    observation:
      "Application and support sources confirm broad current disruption to a critical student-support service.",
    supports:
      "Immediate service and recovery coordination is justified.",
    limits:
      "The evidence does not prove technical cause or complete recovery scope.",
    use:
      "Level 3 service escalation with recovery owner and leadership visibility if resources conflict.",
  },
  {
    id: "ESC-E03",
    source: "Fictional source-health dashboard",
    observation:
      "Network evidence is Blind across three critical service zones and affects five detections.",
    supports:
      "Broad false-negative and historical-reassessment risk exists.",
    limits:
      "The outage does not prove harmful activity occurred.",
    use:
      "Source-health escalation with affected-detection review and recovery validation.",
  },
  {
    id: "ESC-E04",
    source: "Fictional owner-response log",
    observation:
      "The identity owner missed two response deadlines while privileged authority may remain active.",
    supports:
      "Escalation aging and an alternate owner or leadership path are justified.",
    limits:
      "Nonresponse does not prove wrongdoing.",
    use:
      "Escalate the decision blockage, not the person.",
  },
  {
    id: "ESC-E05",
    source: "Fictional privacy review",
    observation:
      "The proposed escalation asks for complete identity, device, and service history for one authorization question.",
    supports:
      "The request exceeds the documented purpose.",
    limits:
      "The finding does not prevent all evidence review.",
    use:
      "Escalate to privacy review and replace the request with purpose-limited fields.",
  },
  {
    id: "ESC-E06",
    source: "Fictional recovery report",
    observation:
      "Connectivity returned, but replay, duplicates, sessions, source health, and service validation remain incomplete.",
    supports:
      "Recovery coordination should remain escalated.",
    limits:
      "The report does not prove every service remains unavailable.",
    use:
      "Maintain Level 2 coordination until recovery criteria pass.",
  },
  {
    id: "ESC-E07",
    source: "Fictional cross-team decision log",
    observation:
      "Identity and service owners disagree about authorization scope and closure while the response window narrows.",
    supports:
      "A coordination or leadership decision is needed.",
    limits:
      "The disagreement does not identify which owner is correct.",
    use:
      "Escalate decision rights, evidence authority, and risk acceptance without assigning blame.",
  },
  {
    id: "ESC-E08",
    source: "Fictional handoff review",
    observation:
      "The receiving owner is named, but the handoff lacks a bounded question, evidence summary, deadline, and de-escalation criteria.",
    supports:
      "The handoff is incomplete and risks ownership loss.",
    limits:
      "The receiving owner may still have relevant expertise.",
    use:
      "Correct the handoff before transfer and retain the original case owner.",
  },
];

const commonMistakes = [
  {
    mistake: "Escalation is treated as punishment",
    observation:
      "A fictional case escalates because an owner is blamed for delay.",
    impact:
      "Communication becomes defensive and the decision need becomes unclear.",
    correction:
      "Escalate the blocked question, impact, scope, source-health, or authority need—not the person.",
  },
  {
    mistake: "Every High alert escalates automatically",
    observation:
      "A fictional High-severity alert with expected context and no active impact is escalated immediately.",
    impact:
      "Escalation fatigue and lost attention increase.",
    correction:
      "Use documented triggers involving evidence, mission impact, scope, source health, time sensitivity, or authority.",
  },
  {
    mistake: "Escalation waits for certainty",
    observation:
      "A fictional critical-service impact case remains in routine triage until technical cause is proven.",
    impact:
      "User impact and recovery opportunity may worsen.",
    correction:
      "Escalate based on supported impact and decision need while preserving uncertainty about cause.",
  },
  {
    mistake: "The handoff abandons the case",
    observation:
      "A fictional analyst changes the owner and stops tracking deadlines or evidence.",
    impact:
      "Chronology, accountability, and unresolved questions may be lost.",
    correction:
      "Retain a coordinating case owner and require receiving-owner acceptance.",
  },
  {
    mistake: "The request is unbounded",
    observation:
      "A fictional escalation asks another team to investigate everything related to an identity.",
    impact:
      "Privacy, workload, duplication, and delay increase.",
    correction:
      "State one bounded question, specific evidence, period, owner, deadline, and out-of-scope boundary.",
  },
  {
    mistake: "Source-health escalation is deprioritized",
    observation:
      "A fictional Blind period remains Low priority because no harmful activity is confirmed.",
    impact:
      "Broad false-negative and historical-reassessment risk remain unresolved.",
    correction:
      "Escalate the evidence outage while keeping activity conclusions Unknown.",
  },
  {
    mistake: "Parallel escalation has no coordinator",
    observation:
      "Fictional identity, service, source, and recovery owners work independently with no shared chronology.",
    impact:
      "Answers may conflict, duplicate, or arrive without a final decision.",
    correction:
      "Assign one escalation coordinator, shared questions, owners, deadlines, and decision log.",
  },
  {
    mistake: "De-escalation happens when activity becomes quiet",
    observation:
      "A fictional case de-escalates when alerts stop, even though source recovery and validation remain incomplete.",
    impact:
      "Residual uncertainty and recovery risk disappear from view.",
    correction:
      "Use explicit de-escalation and closure criteria.",
  },
  {
    mistake: "Leadership escalation lacks a decision request",
    observation:
      "A fictional leadership update describes the case but does not request resources, risk acceptance, priority, or authority.",
    impact:
      "Leadership cannot provide a useful decision.",
    correction:
      "State the exact decision, options, evidence, impact, deadline, owner, and residual risk.",
  },
  {
    mistake: "Real escalation details enter the portfolio",
    observation:
      "A fictional learning artifact includes copied real owner names, alert details, service names, screenshots, timelines, or internal communication.",
    impact:
      "Sensitive people, systems, suppliers, priorities, and incident processes may be exposed.",
    correction:
      "Invent every organization, alert, source, identity, service, owner, date, decision, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Define the escalation purpose",
    action:
      "State which fictional question, impact, scope, source-health, privacy, recovery, or authority condition exceeds routine triage.",
    output:
      "Escalation-purpose statement.",
    quality:
      "The escalation is tied to a decision rather than fear or blame.",
  },
  {
    step: "2",
    title: "Select the escalation type",
    action:
      "Choose fictional technical, identity, service, supplier, source-health, privacy, recovery, leadership, or time-sensitive escalation.",
    output:
      "Escalation-type rationale.",
    quality:
      "The recipient has the expertise or authority to answer the bounded question.",
  },
  {
    step: "3",
    title: "Document the trigger",
    action:
      "Record fictional mission impact, privilege, scope, active effect, source health, owner nonresponse, time sensitivity, privacy, recovery, or cross-team conflict.",
    output:
      "Trigger-to-evidence matrix.",
    quality:
      "The trigger is evidence-supported and testable.",
  },
  {
    step: "4",
    title: "Assign the level",
    action:
      "Choose fictional Level 0, Level 1, Level 2, Level 3, or Level 4 and explain why.",
    output:
      "Escalation-level decision.",
    quality:
      "The level matches current mission and authority needs.",
  },
  {
    step: "5",
    title: "Create the handoff",
    action:
      "Write fictional observation, question, evidence, source health, severity, confidence, priority, scope, alternatives, completed actions, requested action, owner, deadline, boundary, acceptance, and de-escalation criteria.",
    output:
      "Complete escalation handoff.",
    quality:
      "The receiving owner can act without repeating broad collection.",
  },
  {
    step: "6",
    title: "Plan parallel ownership",
    action:
      "Assign fictional identity, service, source, supplier, privacy, recovery, quality, risk, or leadership questions separately.",
    output:
      "Parallel-owner matrix.",
    quality:
      "One coordinator preserves chronology, deadlines, and final decision responsibility.",
  },
  {
    step: "7",
    title: "Write communication",
    action:
      "Create fictional analyst, owner, specialist, leadership, and privacy messages using neutral language and purpose-limited requests.",
    output:
      "Escalation communication set.",
    quality:
      "Every message explains what is known, unknown, requested, urgent, and out of scope.",
  },
  {
    step: "8",
    title: "Define acceptance and aging",
    action:
      "Document fictional recipient acceptance, response deadlines, reminders, alternate owners, leadership paths, and escalation aging.",
    output:
      "Acceptance and deadline plan.",
    quality:
      "The escalation cannot disappear after handoff.",
  },
  {
    step: "9",
    title: "Define de-escalation and closure",
    action:
      "Document fictional trigger resolution, source-health stability, impact control, scope, owner decisions, validation, residual risk, closure, and reopen criteria.",
    output:
      "De-escalation and exit checklist.",
    quality:
      "Quiet alerts or restored connectivity alone cannot end the escalation.",
  },
  {
    step: "10",
    title: "Prepare the portfolio package",
    action:
      "Combine the fictional purpose, types, triggers, levels, matrix, handoffs, communications, owners, tests, metrics, debt, residual risk, and reflection.",
    output:
      "Public-safe Escalation Criteria Package.",
    quality:
      "Every organization, alert, source, identity, service, owner, date, decision, and outcome is invented.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest definition of fictional escalation?",
    choices: [
      "A punishment for an owner who responds slowly.",
      "An evidence-based expansion of review, expertise, authority, communication, or urgency.",
      "An automatic response to every High severity alert.",
      "A transfer that ends the original analyst's responsibility.",
    ],
    answer: 1,
    explanation:
      "Escalation broadens review because the decision need exceeds routine scope. It should not assign blame or abandon ownership.",
  },
  {
    question:
      "Which fictional condition most strongly supports time-sensitive escalation?",
    choices: [
      "An alert is unfamiliar.",
      "A privileged session remains active after expiration and the authorization window is unresolved.",
      "The alert title sounds serious.",
      "The case is one day old but stable and fully owned.",
    ],
    answer: 1,
    explanation:
      "Continuing authority and a narrowing response window create a documented time-sensitive need.",
  },
  {
    question:
      "A fictional required source is Blind across multiple critical services. What should be escalated?",
    choices: [
      "A claim that harmful activity definitely occurred.",
      "The source outage, affected coverage, alternate evidence, restoration, and historical reassessment.",
      "Every identity in the environment.",
      "Nothing, because no harmful activity is confirmed.",
    ],
    answer: 1,
    explanation:
      "The evidence outage itself creates urgent coverage risk while activity during the gap remains Unknown.",
  },
  {
    question:
      "What makes a fictional escalation handoff complete?",
    choices: [
      "A recipient name and High severity label.",
      "Observation, bounded question, evidence, source health, severity, confidence, priority, scope, owners, deadline, boundary, acceptance, and de-escalation criteria.",
      "A request to investigate everything.",
      "A screenshot of the alert.",
    ],
    answer: 1,
    explanation:
      "A complete handoff preserves context, accountability, scope, timing, and success criteria.",
  },
  {
    question:
      "Which fictional privacy escalation is strongest?",
    choices: [
      "Request all available identity data because the case is important.",
      "Pause the broad request, involve the privacy reviewer, and define purpose-limited fields, scope, period, access, retention, and decision use.",
      "Stop all defensive review permanently.",
      "Share the case with every owner.",
    ],
    answer: 1,
    explanation:
      "Privacy escalation should preserve the bounded defensive need while reducing unnecessary collection and exposure.",
  },
  {
    question:
      "When is de-escalation strongest?",
    choices: [
      "When alerts stop appearing.",
      "When the receiving owner says the issue is handled.",
      "When escalation triggers end and evidence, impact, source health, ownership, validation, residual risk, and follow-up are stable.",
      "When the case becomes old.",
    ],
    answer: 2,
    explanation:
      "De-escalation requires documented evidence and lifecycle conditions rather than silence, age, or a vague statement.",
  },
  {
    question:
      "Which public portfolio approach is safest?",
    choices: [
      "Use real escalation emails with fake names.",
      "Use real owner roles and service names without screenshots.",
      "Invent every organization, alert, source, identity, service, owner, date, decision, and outcome.",
      "Copy internal handoff templates exactly.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real people, systems, suppliers, priorities, and internal coordination processes.",
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
        Module A6
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

export default function EscalationCriteriaPage() {
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
              Module A6
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 6 of 10
            </span>
            <span className="rounded-full border border-red-400/40 bg-red-400/10 px-4 py-2 text-red-100">
              Triggers, Owners, Handoffs, Deadlines, and De-escalation
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A6.6 Escalation Criteria
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn when fictional alerts require broader, faster, or more
            specialized review—and how to escalate questions, evidence,
            ownership, communication, privacy, recovery, and risk without
            exaggerating conclusions or losing case accountability.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A6: SIEM and Alert Triage Concepts"
          lessonTitle="Escalation Criteria"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented alerts, evidence, identities, services, suppliers, sources, owners, dates, deadlines, decisions, impacts, and outcomes.",
            "I will treat fictional escalation as an evidence-based expansion of review, authority, expertise, communication, or urgency rather than blame.",
            "I will distinguish technical, identity, service, supplier, source-health, privacy, recovery, leadership, and time-sensitive escalation.",
            "I will preserve neutral observations, source health, confidence, severity, priority, alternatives, ownership, deadlines, and non-proof statements.",
            "I will define acceptance, aging, de-escalation, closure, residual risk, and reopening criteria.",
            "I will not access, contact, escalate, investigate, coordinate, collect, query, suppress, close, reopen, or modify any real alert, case, SIEM, account, endpoint, network, domain, service, supplier, platform, organization, or person.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Escalate the Decision Need, Not the Fear"
        >
          <p className="leading-8">
            A fictional analyst sees a High alert for a stale emergency role.
            The role and session remain Active after expiration, the extension
            source is delayed, and the service is critical. One weak approach is
            to send an urgent message claiming confirmed misuse. Another weak
            approach is to wait for complete certainty while privileged
            authority remains active. A professional escalation identifies the
            exact authorization, source-health, session, service-impact, and
            time-sensitive questions that require accountable owners.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak escalation
              </p>
              <p className="mt-2 leading-7">
                “Critical incident! Investigate this identity immediately.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong escalation
              </p>
              <p className="mt-2 leading-7">
                “Please confirm whether the fictional role had a valid extension
                for the stated service, purpose, and alert period. The role and
                session remain Active, the extension source is delayed, and the
                response window is time-sensitive.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Strong escalation is specific enough to act on, honest enough to
            preserve uncertainty, and structured enough to maintain ownership.
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
          title="Escalation Changes Who Reviews, How Fast, and with What Authority"
        >
          <p className="leading-8">
            Fictional alerts sometimes exceed the evidence, expertise,
            authority, time, privacy, or coordination available in routine
            triage. Escalation can protect users, services, evidence quality,
            privacy, privileged access, recovery, and decision deadlines. Poor
            escalation can also create panic, duplicate work, blame, privacy
            exposure, abandoned cases, leadership fatigue, and unclear
            responsibility.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Escalate early enough",
                "Use fictional active impact, privileged authority, broad source loss, widening scope, short response opportunity, and recovery risk.",
              ],
              [
                "Escalate precisely enough",
                "Use fictional bounded questions, evidence, source health, owners, deadlines, scope, boundaries, and acceptance criteria.",
              ],
              [
                "De-escalate carefully enough",
                "Use fictional trigger resolution, validation, source health, impact control, residual risk, follow-up, and reopen criteria.",
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
          title="The E-S-C-A-L-A-T-E Method"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "E — Establish the decision need",
                "State the fictional question, impact, scope, source-health, privacy, recovery, or authority condition that exceeds routine triage.",
              ],
              [
                "S — Support with evidence",
                "Provide fictional observation, evidence layers, source health, timing, severity, confidence, priority, alternatives, and limitations.",
              ],
              [
                "C — Choose the correct escalation path",
                "Select fictional technical, identity, service, supplier, source-health, privacy, recovery, leadership, or time-sensitive review.",
              ],
              [
                "A — Assign ownership",
                "Name fictional case owner, escalation coordinator, receiving owners, backup owners, deadlines, and acceptance responsibilities.",
              ],
              [
                "L — Limit the boundary",
                "Define fictional questions, evidence, systems, data, decisions, actions, and time periods that are inside or outside the escalation.",
              ],
              [
                "A — Activate parallel work",
                "Coordinate fictional identity, service, source, supplier, privacy, recovery, quality, risk, and leadership questions without losing one case timeline.",
              ],
              [
                "T — Track aging and communication",
                "Record fictional acceptance, responses, reminders, missed deadlines, escalation aging, decisions, and unresolved questions.",
              ],
              [
                "E — Exit with evidence",
                "Use fictional de-escalation, validation, residual risk, closure, follow-up, and reopen criteria.",
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
              Decision-ready escalation statement
            </p>
            <p className="mt-2 leading-7">
              This fictional case requires Level 3 parallel escalation because
              privileged authority and an active session remain after
              expiration, authorization evidence is delayed, the service is
              critical, and the response opportunity is short. Identity,
              source, and service owners must answer separate bounded questions
              under one coordinated case.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Escalation and Handoffs"
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
            Compare Nine Escalation Types
          </h2>

          <div className="mt-6 grid gap-5">
            {escalationTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.type}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Primary question", item.question],
                    ["Fictional evidence", item.evidence],
                    ["Escalation trigger", item.trigger],
                    ["Receiving owner", item.recipient],
                    ["What alone is not enough", item.nonTrigger],
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
        </section>

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Evaluate Ten Escalation Criteria Domains"
        >
          <div className="grid gap-5">
            {criteriaDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.domain}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Escalation question
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.escalationQuestion}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Fictional evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Escalation trigger
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.escalationTrigger}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Caution
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.caution}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 3"
          title="Use Five Escalation Levels"
        >
          <div className="grid gap-5">
            {escalationLevels.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.level}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Meaning", item.meaning],
                    ["Fictional examples", item.examples],
                    ["Primary owner", item.owner],
                    ["Exit path", item.exit],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.level}-${label}`}
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
          title="Build a Twelve-Field Escalation Handoff"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {["Field", "Requirement", "Why it matters"].map(
                    (heading) => (
                      <th key={heading} className="px-4 py-3 font-black">
                        {heading}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {handoffFields.map((row) => (
                  <tr key={row.field}>
                    <td className="px-4 py-4 align-top font-bold text-white">
                      {row.field}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.requirement}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Use Eight Escalation Communication Rules"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {communicationRules.map((item) => (
              <article
                key={item.rule}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.rule}
                </h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Weak version
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.weak}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong fictional version
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.strong}</p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Why it works
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.reason}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Apply an Eight-Case Escalation Matrix"
        >
          <div className="grid gap-5">
            {escalationMatrix.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {item.scenario}
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Fictional evidence", item.evidence],
                    ["Recommended level", item.level],
                    ["Owners", item.owners],
                    ["Deadline", item.deadline],
                    ["De-escalation criteria", item.deEscalation],
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
          title="Validate Twelve Escalation Cases"
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
                {validationCases.map((row) => (
                  <tr key={row.id}>
                    <td className="px-4 py-4 align-top font-mono font-bold text-white">
                      {row.id}
                    </td>
                    <td className="px-4 py-4 align-top font-semibold text-cyan-200">
                      {row.type}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.fictionalInput}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.expected}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.protects}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 8"
          title="Measure Eight Escalation Quality Dimensions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {qualityMetrics.map((item) => (
              <article
                key={item.metric}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.metric}
                </h3>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Review question
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Fictional evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Limitation
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.limitation}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Escalation Architecture"
          title="Northbridge Question-to-Owner Model"
        >
          <p className="leading-8">
            This conceptual architecture is completely invented and
            intentionally non-operational. It teaches escalation without real
            alerts, owner names, services, systems, addresses, screenshots,
            communications, suppliers, incidents, or internal decision paths.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Evidence inputs", "Observation, source health, timing, confidence"],
                ["Mission inputs", "Impact, privilege, scope, active effect, recovery"],
                ["Governance inputs", "Privacy, authority, owners, deadlines, risk"],
                ["Lifecycle inputs", "Acceptance, aging, validation, de-escalation"],
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
                Fictional Escalation Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Define", "Question, trigger, impact, scope, authority need"],
                  ["Classify", "Type and escalation level"],
                  ["Package", "Evidence, health, confidence, priority, limits"],
                  ["Assign", "Case owner, coordinator, recipients, deadlines"],
                  ["Bound", "Requested decision and out-of-scope areas"],
                  ["Coordinate", "Parallel owner questions and shared chronology"],
                  ["Track", "Acceptance, aging, responses, decisions, gaps"],
                  ["Exit", "De-escalation, validation, residual risk, closure"],
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
                ["Specialist outputs", "Source, identity, service, supplier answers"],
                ["Governance outputs", "Privacy, risk, authority, leadership decisions"],
                ["Case outputs", "Timeline, state, handoff, residual risk, closure"],
                ["Portfolio boundary", "Fully fictional, privacy-safe, non-operational"],
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
          title="Fake Northbridge Escalation Quality Dashboard"
          subtitle="Fictional trigger precision, delayed escalation, handoff completeness, owner response, parallel coordination, de-escalation, privacy, and escalation debt for training only."
          metrics={[
            {
              label: "Open escalations with complete handoffs",
              value: "7 / 10",
              note: "Three fictional handoffs lack bounded questions, acceptance criteria, deadlines, or de-escalation conditions.",
            },
            {
              label: "Escalations beyond owner-response deadline",
              value: "4",
              note: "Two identity, one source-health, and one recovery escalation require aging or alternate-owner paths.",
            },
            {
              label: "Open fictional escalation-debt items",
              value: "8",
              note: "Thresholds, recipients, privacy review, aging, acceptance, communication, de-escalation, and leadership decision paths remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Escalation Handoff and Aging Require Review"
          severity="High"
          time="4:38 PM"
          source="Fake Northbridge Escalation Governance Console"
          details="The fictional stale-authority case is Level 3, but the identity owner missed the response deadline, the source owner has not accepted the handoff, the service-impact question lacks an owner, and the de-escalation criteria do not include source reconciliation or residual risk."
          recommendation="Activate fictional escalation aging, assign alternate and leadership paths, complete receiving-owner acceptance, assign the service-impact question, preserve central case ownership, and add source reconciliation, validation, residual risk, closure, and reopen criteria."
        />

        <FakeLogPanel
          title="Fake Escalation Timeline"
          logs={[
            "09:00 CASE id='ESC-ST-03'",
            "09:02 TRIGGER privilege='active'",
            "09:03 TRIGGER approval-end='passed'",
            "09:04 SOURCE extension='conditional'",
            "09:05 SOURCE group='degraded'",
            "09:06 IMPACT service='critical'",
            "09:07 LEVEL escalation='3'",
            "09:08 OWNER case='assigned'",
            "09:09 OWNER identity='requested'",
            "09:10 OWNER source='requested'",
            "09:11 OWNER service='missing'",
            "09:12 DEADLINE identity='30-minutes'",
            "09:13 DEADLINE source='30-minutes'",
            "09:42 RESPONSE identity='overdue'",
            "09:43 ACCEPTANCE source='missing'",
            "09:44 AGING escalation='required'",
            "09:45 LEADERSHIP path='available'",
            "09:46 DEESCALATION criteria='incomplete'",
            "09:47 READINESS escalation='conditional'",
            "16:38 ALERT issue='handoff-and-aging'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What Escalation Evidence Supports—and What It Does Not Prove
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
                    ["Escalation use", item.use],
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
          title="Which Escalation Decision Is Best Supported?"
          question="Which fictional escalation path best fits the Northbridge stale-authority case?"
          evidence={[
            "Role and session remain Active after approval_end.",
            "Extension evidence is delayed and group evidence is Degraded.",
            "The service is critical, but current service impact is not yet confirmed.",
            "The identity owner missed the response deadline.",
            "The source owner has not accepted the handoff.",
            "The service-impact question has no owner.",
            "The response opportunity is time-sensitive.",
            "Current evidence does not prove misuse or harmful intent.",
          ]}
          options={[
            "Maintain Level 3 parallel escalation, activate aging and alternate-owner paths, assign identity, source, and service questions under one coordinator, preserve non-proof statements, and define acceptance and de-escalation criteria.",
            "Declare confirmed misuse and escalate every possible team.",
            "Return to routine triage because service impact is not confirmed.",
            "Transfer ownership completely to the identity team and close the analyst's case.",
          ]}
          bestAnswer={0}
          explanation="The first option responds to privileged authority, source limitations, owner delay, critical service context, and time sensitivity without exaggerating the conclusion or abandoning case ownership."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Escalation Errors"
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
                    Decision impact
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
          eyebrow="Safe Fictional Practice Lab"
          title="Build the Northbridge Escalation Criteria Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            access, contact, message, escalate, investigate, coordinate,
            collect, query, suppress, close, reopen, or modify any real alert,
            case, SIEM, source, account, endpoint, network, domain, service,
            supplier, platform, organization, or person.
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
          title="The Identity Owner Misses the Deadline"
          scenario="A fictional emergency role and session remain Active after approval_end. Extension evidence is delayed, the service is critical, and the identity owner misses the thirty-minute response deadline."
          choices={[
            {
              label: "Choice A",
              response:
                "Activate fictional escalation aging, use the documented alternate identity owner or leadership path, retain the case owner, preserve the authorization question, and continue parallel source and service review.",
              outcome:
                "Best defensive choice. The blocked time-sensitive decision is escalated without treating nonresponse as wrongdoing.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare the activity unauthorized because the owner did not respond.",
              outcome:
                "Weak. Nonresponse is not proof of authorization state or intent.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Wait indefinitely because only the assigned owner can answer.",
              outcome:
                "Weak. A documented alternate path is necessary for time-sensitive decisions.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Source Returns but Recovery Is Incomplete"
          scenario="A fictional source reconnects after a Blind period. Records are arriving, but replay, duplicate handling, one schema change, active sessions, service validation, and a missing period remain unresolved."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the fictional recovery escalation active, coordinate source, quality, service, identity, and recovery owners, validate backlog and replay, reassess the blind period, and de-escalate only after recovery criteria pass.",
              outcome:
                "Best choice. Reconnection alone does not restore trustworthy evidence or mission state.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "De-escalate immediately because connectivity returned.",
              outcome:
                "Weak. Important recovery and evidence questions remain unresolved.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete replayed records to reduce workload and close the case.",
              outcome:
                "Weak. Replay evidence may be necessary for historical reassessment.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend an Escalation Plan before a Review Board"
        >
          <p className="leading-8">
            Fictional Northbridge has a stale-authority case, a critical-service
            outage, a broad source Blind period, delayed supplier assignment,
            incomplete recovery, a privacy-heavy evidence request, and
            conflicting owner decisions. The current process has only one
            escalation level and no acceptance, aging, parallel ownership,
            de-escalation, or residual-risk rules.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Defend the triggers",
                "Explain fictional mission impact, privilege, scope, active effect, source health, owner nonresponse, time sensitivity, privacy, recovery, and conflict.",
              ],
              [
                "Defend the paths",
                "Explain fictional technical, identity, service, supplier, source-health, privacy, recovery, leadership, and time-sensitive escalation.",
              ],
              [
                "Defend the levels",
                "Explain fictional routine triage, specialist review, multi-owner coordination, mission escalation, and leadership decision.",
              ],
              [
                "Defend the handoffs",
                "Explain fictional observation, question, evidence, source health, severity, confidence, priority, scope, owners, deadline, boundary, and acceptance.",
              ],
              [
                "Defend coordination",
                "Explain fictional central ownership, parallel questions, shared chronology, deadlines, aging, alternate owners, and decision rights.",
              ],
              [
                "Defend the exit",
                "Explain fictional de-escalation, validation, source health, impact control, residual risk, closure, follow-up, and reopen criteria.",
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
              Produce a fictional escalation charter, type matrix, criteria
              matrix, level model, trigger register, handoff template,
              communication set, parallel-owner matrix, acceptance plan, aging
              rules, de-escalation checklist, validation matrix, metric
              dictionary, escalation-debt register, residual-risk statement,
              leadership summary, and public portfolio boundary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Escalation Criteria Checklist"
          items={[
            "I can explain fictional escalation as an evidence-based expansion of review, expertise, authority, communication, or urgency.",
            "I can distinguish technical, identity, service, supplier, source-health, privacy, recovery, leadership, and time-sensitive escalation.",
            "I can use mission impact, privilege, scope, active effect, source health, owner nonresponse, time sensitivity, privacy, recovery, and conflict as criteria.",
            "I can select fictional Level 0, Level 1, Level 2, Level 3, or Level 4 escalation appropriately.",
            "I can create a fictional handoff with observation, question, evidence, source health, severity, confidence, priority, scope, alternatives, actions, owners, deadline, boundary, acceptance, and de-escalation criteria.",
            "I can preserve central case ownership during fictional parallel escalation.",
            "I can write neutral, purpose-limited fictional escalation communication.",
            "I can escalate source Blind periods and delayed owner responses without converting them into proof of harmful activity.",
            "I can define fictional acceptance, aging, alternate-owner, leadership, de-escalation, closure, residual-risk, and reopen paths.",
            "I can measure fictional precision, delay, premature escalation, handoff completeness, owner response, coordination, de-escalation, and debt.",
            "I can avoid escalation fatigue, blame, unbounded requests, abandoned cases, and premature de-escalation.",
            "I can create a completely fictional escalation artifact without exposing real alerts, owners, services, suppliers, cases, communications, or internal decision paths.",
          ]}
        />

        <MiniQuiz
          title="A6.6 Mini Quiz: Escalation Criteria"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Escalation Criteria Package for the Northbridge Student-Support Cooperative. Include mission, stakeholders, escalation purpose, escalation definitions, triggers, thresholds, technical escalation, identity escalation, service-owner escalation, supplier escalation, source-health escalation, privacy escalation, recovery escalation, leadership escalation, time-sensitive escalation, mission-impact criteria, privilege criteria, scope criteria, active-effect criteria, source-health criteria, owner-nonresponse criteria, time-sensitivity criteria, privacy criteria, recovery criteria, cross-team-conflict criteria, Level 0 routine triage, Level 1 specialist review, Level 2 multi-owner coordination, Level 3 time-sensitive mission escalation, Level 4 leadership or risk decision, escalation identifiers, neutral observations, primary escalation questions, evidence summaries, source-health summaries, severity, confidence, priority, scope, impact, alternatives, completed actions, requested actions, out-of-scope boundaries, case owners, escalation coordinators, receiving owners, backup owners, response deadlines, review deadlines, acceptance criteria, de-escalation criteria, closure criteria, reopen criteria, communication templates, analyst messages, specialist messages, owner messages, privacy messages, recovery messages, leadership messages, parallel-owner matrices, shared chronology, unresolved-question registers, acceptance records, aging rules, reminders, alternate paths, leadership paths, trigger-resolution evidence, source-health stabilization, impact control, recovery validation, residual uncertainty, residual risk, routine-case tests, specialist-question tests, critical-impact tests, privileged-authority tests, broad-Blind-period tests, owner-nonresponse tests, privacy-boundary tests, cross-team-disagreement tests, incomplete-recovery tests, de-escalation tests, false-urgency tests, handoff-acceptance tests, expected outcomes, observed outcomes, defects, corrective actions, validation gates, escalation-precision metrics, delayed-escalation metrics, premature-escalation metrics, handoff-completeness metrics, owner-response metrics, parallel-coordination metrics, de-escalation metrics, escalation debt, owner matrix, change history, review triggers, leadership summary, reflection, and a statement that every organization, alert, source, identity, service, owner, date, decision, and outcome is invented."
          tips={[
            "Escalate fictional decision needs, impact, source loss, privacy, recovery, or authority—not people.",
            "Keep observation, source health, severity, confidence, priority, alternatives, and non-proof statements visible.",
            "Use bounded questions, named owners, deadlines, acceptance, aging, de-escalation, residual risk, and reopen criteria.",
            "Preserve central case coordination during parallel fictional owner review.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Case Management and Notes?"
        >
          <p className="leading-8">
            Before moving to A6.7, rate your readiness from 1 to 5 for
            escalation types, triggers, thresholds, levels, handoffs, source
            health, mission impact, privilege, scope, owner nonresponse,
            privacy, recovery, leadership, communication, acceptance, aging,
            de-escalation, metrics, ownership, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why fictional escalation is not punishment or proof.",
              "I can select the correct fictional escalation type and level.",
              "I can identify evidence-based escalation and non-escalation conditions.",
              "I can create a complete fictional handoff with bounded questions and deadlines.",
              "I can preserve one coordinating owner during parallel escalation.",
              "I can use aging and alternate-owner paths without blaming nonresponsive owners.",
              "I can de-escalate only after triggers, evidence, impact, source health, validation, and residual risk are stable.",
              "I can produce a safe fictional escalation package without copying real communications, owners, services, or decision paths.",
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
            Record one fictional escalation trigger, one escalation type, one
            level, one receiving owner, one deadline, one de-escalation
            criterion, and one question you will carry into A6.7.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Fictional escalation is an evidence-based expansion of review, expertise, authority, communication, or urgency—not punishment or proof.",
            "Technical, identity, service, supplier, source-health, privacy, recovery, leadership, and time-sensitive escalations answer different bounded questions.",
            "Mission impact, privilege, scope, active effect, source health, owner nonresponse, time sensitivity, privacy, recovery, and cross-team conflict can justify escalation.",
            "High severity alone is not enough, and complete certainty is not required when active impact or a short response opportunity is supported.",
            "A complete fictional handoff preserves observation, evidence, source health, severity, confidence, priority, scope, alternatives, actions, owners, deadlines, boundaries, acceptance, and exit criteria.",
            "The original case owner should retain coordination during parallel escalation.",
            "Blind sources, delayed owner responses, incomplete recovery, privacy-heavy requests, and conflicting decision rights require explicit escalation paths.",
            "De-escalation requires trigger resolution, evidence stability, impact control, source-health review, validation, residual risk, follow-up, and reopen criteria.",
            "Escalation quality includes precision, timeliness, handoff completeness, owner response, parallel coordination, de-escalation quality, and debt.",
            "Every CyberShield escalation artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A6
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Next, learn how fictional analysts create professional case records
            and notes that preserve chronology, evidence, questions, owners,
            decisions, uncertainty, actions, communications, privacy, closure,
            and reopening without mixing assumptions with facts.
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