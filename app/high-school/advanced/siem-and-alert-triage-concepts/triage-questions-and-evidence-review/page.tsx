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
const previousLesson = `${modulePath}/alert-severity-and-priority`;
const nextLesson = `${modulePath}/escalation-criteria`;

const objectives = [
  "Conduct a fictional alert triage using neutral observations, bounded defender questions, source-health review, evidence provenance, context, alternatives, scope, impact, ownership, and decision criteria.",
  "Distinguish fictional direct evidence, normalized fields, enrichment, derived context, owner statements, hypotheses, assumptions, decisions, and unresolved questions.",
  "Create purpose-limited fictional evidence requests covering identity, device, service, destination, authorization, timing, sequence, source health, scope, impact, and closure without collecting unnecessary information.",
  "Use fictional New, In Review, Conditional, Expected, Source-Degraded, Unknown, Escalated, Resolved, and Reopened states with explicit evidence, ownership, transition, and review requirements.",
  "Create a portfolio-ready fictional Triage Questions and Evidence Review Package containing alert summaries, question maps, evidence matrices, owner requests, decisions, limits, privacy controls, closure criteria, reopening criteria, and reflection.",
];

const vocabulary = [
  [
    "Alert triage",
    "A fictional structured first review that determines what was observed, how reliable the evidence is, what questions matter, who owns the next answers, and which decision state is justified.",
  ],
  [
    "Neutral observation",
    "A fictional description of what records or conditions show without claiming intent, cause, authorization, complete scope, impact, or final outcome.",
  ],
  [
    "Primary defender question",
    "The fictional bounded question the alert is designed to help answer.",
  ],
  [
    "Supporting question",
    "A fictional narrower question about identity, device, service, destination, authorization, timing, source health, scope, impact, alternatives, or ownership.",
  ],
  [
    "Direct evidence",
    "Fictional evidence recorded by a source for the underlying activity, state, result, assignment, authorization, or health condition.",
  ],
  [
    "Normalized evidence",
    "Fictional source evidence mapped into shared fields or categories for consistent SIEM analysis.",
  ],
  [
    "Enrichment",
    "Fictional identity, device, service, destination, owner, criticality, peer, change, authorization, or mission context added after collection.",
  ],
  [
    "Derived context",
    "A fictional value calculated or inferred from one or more records rather than directly recorded by the source.",
  ],
  [
    "Owner statement",
    "A fictional explanation, confirmation, or expectation provided by an accountable identity, service, supplier, source, change, privacy, or recovery owner.",
  ],
  [
    "Hypothesis",
    "A fictional possible explanation that remains open to evidence review.",
  ],
  [
    "Alternative explanation",
    "A fictional plausible approved, expected, technical, timing, source-health, ownership, or workflow explanation for the observation.",
  ],
  [
    "Evidence request",
    "A fictional purpose-limited request for the specific information needed to answer a documented defender question.",
  ],
  [
    "Evidence gap",
    "A fictional missing, delayed, conflicting, blind, stale, semantically unclear, or unavailable piece of information needed for a decision.",
  ],
  [
    "Decision state",
    "A fictional label describing where the alert or case stands based on current evidence and unresolved questions.",
  ],
  [
    "New",
    "A fictional state in which the alert has entered the queue but structured review has not yet begun.",
  ],
  [
    "In Review",
    "A fictional state in which an analyst is actively evaluating evidence, source health, context, alternatives, ownership, scope, and impact.",
  ],
  [
    "Conditional",
    "A fictional state in which the core observation is supported but one or more important contextual, ownership, authorization, or impact questions remain unresolved.",
  ],
  [
    "Expected",
    "A fictional state in which the observation matches current approved, authorized, documented, time-bounded, and source-supported activity.",
  ],
  [
    "Source-Degraded",
    "A fictional state in which required evidence is delayed, incomplete, conflicting, blind, or recovering and limits the supported conclusion.",
  ],
  [
    "Unknown",
    "A fictional state in which available evidence cannot support a confident interpretation or absence claim.",
  ],
  [
    "Escalated",
    "A fictional state in which broader, faster, or more specialized review is required based on evidence, impact, scope, time sensitivity, source loss, privacy, or owner conditions.",
  ],
  [
    "Resolved",
    "A fictional state in which documented questions, evidence, owner actions, validation, residual risk, closure criteria, and reopen criteria are complete enough for closure.",
  ],
  [
    "Reopened",
    "A fictional state used when new evidence, changed scope, failed validation, repeated behavior, source recovery, or unmet closure conditions require renewed review.",
  ],
  [
    "Residual uncertainty",
    "A fictional record of important questions, evidence limitations, or risks that remain after the current decision.",
  ],
];

const triageDomains = [
  {
    domain: "Observation",
    primaryQuestion:
      "What fictional condition matched, and which exact records, fields, relationships, thresholds, sequences, states, or source-health conditions support it?",
    evidence:
      "Alert contract, source records, normalized fields, event time, collection time, processing time, correlation explanation, and source health.",
    weakConclusion:
      "The alert proves malicious behavior.",
    strongOutput:
      "Neutral observation with evidence references and non-proof statement.",
  },
  {
    domain: "Identity",
    primaryQuestion:
      "Which fictional identity, identity category, role, group, sponsor, owner, assignment, approval, or lifecycle state is involved?",
    evidence:
      "Identity source, role catalog, group state, assignment record, sponsor record, approval, extension, revocation, and owner confirmation.",
    weakConclusion:
      "The identity name alone proves authorization or intent.",
    strongOutput:
      "Identity context, authority, ownership, lifecycle, and unresolved authorization questions.",
  },
  {
    domain: "Device",
    primaryQuestion:
      "Which fictional device, device category, management state, owner, onboarding state, replacement state, support state, or session relationship is involved?",
    evidence:
      "Device inventory, ownership, lifecycle, support record, network class, session relationship, and source-health state.",
    weakConclusion:
      "A known device proves the expected person used it.",
    strongOutput:
      "Device context with ownership and lifecycle limitations.",
  },
  {
    domain: "Service and asset",
    primaryQuestion:
      "Which fictional service, data category, administrative function, supplier dependency, recovery capability, or mission outcome may be affected?",
    evidence:
      "Service catalog, criticality, owner, dependencies, user-impact records, data classification, recovery plan, and current operating state.",
    weakConclusion:
      "A critical service label proves current impact.",
    strongOutput:
      "Potential and active impact separated with owner validation.",
  },
  {
    domain: "Destination and object",
    primaryQuestion:
      "Which fictional destination, object, service dependency, data category, administrative target, or supplier service is involved?",
    evidence:
      "Destination catalog, service relationship, object class, policy, ownership, assignment, approval, and current change context.",
    weakConclusion:
      "A new destination automatically means harmful activity.",
    strongOutput:
      "Destination purpose, relationship, novelty, authorization, and limitation.",
  },
  {
    domain: "Authorization",
    primaryQuestion:
      "Which fictional approval, extension, assignment, sponsor, maintenance, emergency-use, change, or policy evidence supports or limits the activity?",
    evidence:
      "Approval records, start and end times, purpose, scope, owner, destination, change record, sponsor confirmation, and source health.",
    weakConclusion:
      "Any approval authorizes every action, identity, destination, or time.",
    strongOutput:
      "Current authorization state with exact scope, time, owner, and unresolved differences.",
  },
  {
    domain: "Timing and sequence",
    primaryQuestion:
      "When did fictional events occur, arrive, process, correlate, and alert, and which sequence or duration is supported?",
    evidence:
      "Event time, collection time, processing time, alert time, clock state, source delay, sequence, window, replay, duplicate, and blind-period records.",
    weakConclusion:
      "Dashboard order proves event order.",
    strongOutput:
      "Time-bounded chronology with delay and uncertainty visible.",
  },
  {
    domain: "Source health",
    primaryQuestion:
      "Are fictional required sources, fields, schemas, parsers, mappings, queues, clocks, coverage, and recovery states healthy enough for the decision?",
    evidence:
      "Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering states plus affected fields, periods, populations, and detections.",
    weakConclusion:
      "No record proves no activity.",
    strongOutput:
      "Evidence-confidence boundary and alternate-evidence plan.",
  },
  {
    domain: "Scope",
    primaryQuestion:
      "How many fictional identities, devices, services, destinations, users, data categories, environments, records, or time periods may be affected?",
    evidence:
      "Correlation relationships, service dependencies, owner reports, source coverage, duplicates, replay, case links, and current health states.",
    weakConclusion:
      "Alert count equals affected scope.",
    strongOutput:
      "Current scope, possible scope, excluded duplicates, and unknown coverage.",
  },
  {
    domain: "Impact",
    primaryQuestion:
      "What fictional user, service, privacy, identity, evidence, availability, administrative, supplier, or recovery effect is current, potential, or unconfirmed?",
    evidence:
      "Application results, user-support records, service owner statements, availability state, privacy review, source-health effect, and recovery status.",
    weakConclusion:
      "High severity proves active impact.",
    strongOutput:
      "Potential severity, confirmed active effect, confidence, and recoverability separated.",
  },
  {
    domain: "Alternative explanations",
    primaryQuestion:
      "Which fictional approved change, maintenance, extension, supplier work, migration, recovery, timing delay, stale ownership, parser issue, mapping issue, or incomplete workflow could explain the observation?",
    evidence:
      "Change records, owner confirmation, maintenance windows, extension records, source-health reports, mapping history, and recovery plan.",
    weakConclusion:
      "One alternative explanation automatically closes the alert.",
    strongOutput:
      "Ranked alternatives with evidence needed to confirm or reject each one.",
  },
  {
    domain: "Ownership and next evidence",
    primaryQuestion:
      "Which fictional source, identity, device, service, supplier, change, privacy, quality, risk, or leadership owner must answer the next question?",
    evidence:
      "Owner matrix, service catalog, source inventory, identity ownership, supplier assignment, change ownership, and escalation path.",
    weakConclusion:
      "The security analyst owns every question and decision.",
    strongOutput:
      "Specific evidence request, accountable owner, deadline, and escalation trigger.",
  },
];

const evidenceLayers = [
  {
    layer: "Direct source evidence",
    description:
      "Fictional original evidence about an activity, state, result, approval, assignment, session, service condition, or source-health state.",
    example:
      "Role source records Active after approval_end.",
    caution:
      "Direct does not mean complete, correct, current, or sufficient for every conclusion.",
  },
  {
    layer: "Parsed source fields",
    description:
      "Fictional source evidence interpreted into documented source-specific fields.",
    example:
      "role_state, approval_end, session_state, service_result.",
    caution:
      "Parser defects or schema drift may change meaning.",
  },
  {
    layer: "Normalized fields",
    description:
      "Fictional source fields mapped into shared SIEM categories.",
    example:
      "authorization.state = expired; session.state = active.",
    caution:
      "Shared categories may hide source-specific semantic differences.",
  },
  {
    layer: "Enrichment",
    description:
      "Fictional identity, service, destination, owner, criticality, peer, change, or mission context added after collection.",
    example:
      "service.criticality = essential; identity.owner = recovery-operations.",
    caution:
      "Enrichment may be stale, incomplete, or nonauthoritative.",
  },
  {
    layer: "Derived context",
    description:
      "Fictional calculated or inferred values created from multiple records.",
    example:
      "authorization.state = Conditional because extension evidence is delayed.",
    caution:
      "Derived context depends on logic, source health, timing, and assumptions.",
  },
  {
    layer: "Owner evidence",
    description:
      "Fictional explanations, confirmations, approvals, or impact statements from accountable owners.",
    example:
      "Service owner confirms current student-support disruption.",
    caution:
      "Owner evidence should be documented and validated where possible.",
  },
  {
    layer: "Analyst hypothesis",
    description:
      "A fictional possible explanation proposed to guide evidence review.",
    example:
      "The role may remain active because revocation synchronization is delayed.",
    caution:
      "A hypothesis is not a fact and should remain clearly labeled.",
  },
  {
    layer: "Decision",
    description:
      "A fictional evidence-based state, priority, escalation, closure, or reopening conclusion.",
    example:
      "Conditional, High priority, identity-owner response required within thirty minutes.",
    caution:
      "The decision should show supporting evidence, limitations, owner, and review trigger.",
  },
];

const questionSequence = [
  {
    step: "1. Restate the observation",
    action:
      "Rewrite the fictional alert as a neutral sentence using only supported fields, timing, relationships, and source-health facts.",
    output:
      "Observation statement.",
    quality:
      "No intent, cause, authorization, complete scope, or impact is assumed.",
  },
  {
    step: "2. Identify the primary question",
    action:
      "State the one fictional defender question the alert should help answer.",
    output:
      "Primary triage question.",
    quality:
      "The question is bounded, evidence-driven, and tied to a decision.",
  },
  {
    step: "3. Check evidence layers",
    action:
      "Separate fictional direct evidence, parsed fields, normalized fields, enrichment, derived context, owner statements, and hypotheses.",
    output:
      "Evidence-layer map.",
    quality:
      "Derived context and assumptions are never presented as direct facts.",
  },
  {
    step: "4. Check source health",
    action:
      "Review fictional freshness, completeness, schema, parser, mapping, queue, coverage, blind periods, conflicts, and recovery.",
    output:
      "Source-health and confidence statement.",
    quality:
      "Missing evidence never becomes false absence.",
  },
  {
    step: "5. Review identity and authority",
    action:
      "Examine fictional identity category, role, group, assignment, approval, extension, sponsor, owner, and lifecycle state.",
    output:
      "Identity and authorization statement.",
    quality:
      "Assigned privilege and effective access remain separate.",
  },
  {
    step: "6. Review device, service, and destination",
    action:
      "Examine fictional device state, service criticality, destination purpose, object class, ownership, and relationship context.",
    output:
      "Asset and relationship statement.",
    quality:
      "A known device or destination does not automatically prove expected use.",
  },
  {
    step: "7. Build chronology",
    action:
      "Order fictional events by event time and preserve collection, processing, and alert time separately.",
    output:
      "Triage timeline.",
    quality:
      "Delay, replay, duplicates, out-of-order arrival, and blind periods remain visible.",
  },
  {
    step: "8. Estimate scope and impact",
    action:
      "Review fictional identities, devices, services, destinations, users, data categories, environments, periods, current impact, and recoverability.",
    output:
      "Scope and impact assessment.",
    quality:
      "Potential severity and confirmed active effect remain separate.",
  },
  {
    step: "9. Rank alternatives",
    action:
      "List fictional approved, expected, technical, timing, source-health, ownership, change, maintenance, supplier, and recovery explanations.",
    output:
      "Alternative-explanation matrix.",
    quality:
      "Each alternative has supporting evidence, contradicting evidence, owner, and next test.",
  },
  {
    step: "10. Request next evidence",
    action:
      "Ask the accountable fictional owner for only the evidence needed to answer the unresolved question.",
    output:
      "Purpose-limited evidence request.",
    quality:
      "The request has purpose, scope, period, fields, owner, deadline, privacy boundary, and expected decision use.",
  },
  {
    step: "11. Assign a decision state",
    action:
      "Choose fictional New, In Review, Conditional, Expected, Source-Degraded, Unknown, Escalated, Resolved, or Reopened.",
    output:
      "Decision state with rationale.",
    quality:
      "The state matches current evidence rather than analyst preference.",
  },
  {
    step: "12. Set transitions and triggers",
    action:
      "Define fictional evidence, owner, source-health, scope, impact, deadline, escalation, closure, and reopen conditions.",
    output:
      "State-transition and review plan.",
    quality:
      "The case cannot remain stale or close without explicit criteria.",
  },
];

const decisionStates = [
  {
    state: "New",
    evidenceRequirement:
      "Fictional alert identity, creation time, observation, severity, confidence, priority, source health, and owner routing are present.",
    entry:
      "Alert enters the queue.",
    exit:
      "Analyst begins structured review and records the primary defender question.",
    risk:
      "New alerts may age without ownership or become mislabeled by their title.",
  },
  {
    state: "In Review",
    evidenceRequirement:
      "Fictional analyst is actively evaluating evidence layers, source health, identity, device, service, destination, authorization, timing, scope, impact, alternatives, and owners.",
    entry:
      "Initial review begins.",
    exit:
      "Evidence supports Conditional, Expected, Source-Degraded, Unknown, Escalated, or Resolved.",
    risk:
      "Cases may remain In Review indefinitely without deadlines or owner requests.",
  },
  {
    state: "Conditional",
    evidenceRequirement:
      "Fictional core observation is supported, but important authorization, context, ownership, impact, scope, or lifecycle questions remain unresolved.",
    entry:
      "The analyst can support part of the interpretation but not the full decision.",
    exit:
      "New evidence moves the case to Expected, Unknown, Escalated, Resolved, or another documented state.",
    risk:
      "Conditional can become a vague holding state without exact gaps and owners.",
  },
  {
    state: "Expected",
    evidenceRequirement:
      "Fictional current approval, purpose, identity, device, service, destination, scope, owner, timing, and source health support the observed condition.",
    entry:
      "Approved or documented activity explains the observation.",
    exit:
      "The expected window ends, scope changes, source health degrades, owner evidence changes, or the case closes with validation.",
    risk:
      "Expected labels may remain after authorization or scope expires.",
  },
  {
    state: "Source-Degraded",
    evidenceRequirement:
      "Fictional required source, field, schema, parser, mapping, queue, clock, coverage, or recovery condition limits the supported conclusion.",
    entry:
      "Evidence reliability becomes insufficient for normal confidence.",
    exit:
      "Source recovery and validation complete, alternate evidence resolves the question, or escalation occurs.",
    risk:
      "Source degradation may be treated as a reason to stop reviewing meaningful risk.",
  },
  {
    state: "Unknown",
    evidenceRequirement:
      "Fictional available evidence cannot support a confident interpretation or absence claim.",
    entry:
      "Evidence is insufficient, conflicting, or unavailable after reasonable review.",
    exit:
      "New evidence, owner response, source recovery, or scope change supports another state.",
    risk:
      "Unknown may be forced into false positive or true negative for reporting convenience.",
  },
  {
    state: "Escalated",
    evidenceRequirement:
      "Fictional evidence, impact, scope, time sensitivity, source loss, privacy, recovery, owner nonresponse, or specialized review criteria are met.",
    entry:
      "Broader, faster, or specialized review is required.",
    exit:
      "Escalated questions are answered and the case transitions to another state.",
    risk:
      "Escalation may become a handoff without retained ownership or evidence context.",
  },
  {
    state: "Resolved",
    evidenceRequirement:
      "Fictional questions, source health, authorization, scope, impact, owner actions, validation, residual risk, closure criteria, and reopen criteria are complete enough for closure.",
    entry:
      "The case meets documented closure requirements.",
    exit:
      "New evidence, failed validation, repeated behavior, changed scope, or source recovery triggers reopening.",
    risk:
      "Alert silence or elapsed time may be mistaken for resolution.",
  },
  {
    state: "Reopened",
    evidenceRequirement:
      "Fictional new evidence, changed scope, repeated activity, source recovery, failed validation, unmet closure, or residual-risk trigger requires renewed review.",
    entry:
      "A documented reopen condition occurs.",
    exit:
      "The renewed review reaches another evidence-supported state.",
    risk:
      "Reopened cases may lose the original chronology or repeat old assumptions.",
  },
];

const evidenceRequests = [
  {
    request: "Identity lifecycle request",
    purpose:
      "Determine whether fictional role, group, approval, assignment, extension, sponsor, or revocation evidence supports current authority.",
    requiredFields:
      "Identity category, role category, assignment, approval start, approval end, extension state, sponsor, owner, revocation, source health, and event time.",
    privacyLimit:
      "Do not request unrelated personal history, content, location, or full activity history.",
    owner:
      "Identity owner and identity-source owner.",
  },
  {
    request: "Device context request",
    purpose:
      "Determine whether a fictional device relationship supports or limits the alert interpretation.",
    requiredFields:
      "Device category, management state, owner group, onboarding state, replacement state, support state, session relationship, and source health.",
    privacyLimit:
      "Do not request personal files, messages, browsing content, or unrelated device activity.",
    owner:
      "Device owner and device-source owner.",
  },
  {
    request: "Service impact request",
    purpose:
      "Determine whether a fictional alert is affecting a service, users, availability, privacy, evidence, or recovery.",
    requiredFields:
      "Service category, criticality, current state, affected function, user-impact category, dependency, recovery state, owner, and source health.",
    privacyLimit:
      "Use aggregate or category-level user impact rather than personal user details.",
    owner:
      "Service owner and recovery owner.",
  },
  {
    request: "Destination-purpose request",
    purpose:
      "Determine whether a fictional destination or object relationship is expected, approved, new, changed, or outside documented purpose.",
    requiredFields:
      "Destination category, service relationship, object class, approval, assignment, purpose, owner, timing, and source health.",
    privacyLimit:
      "Do not request real addresses, internal routes, content, or unrelated destination history.",
    owner:
      "Service owner, destination owner, or supplier owner.",
  },
  {
    request: "Change and maintenance request",
    purpose:
      "Determine whether a fictional approved change, maintenance window, migration, recovery action, or emergency process explains the observation.",
    requiredFields:
      "Change identifier, purpose, scope, identities, services, destinations, start, end, owner, expected behavior, validation, rollback, and source health.",
    privacyLimit:
      "Do not request operational configuration or internal architecture beyond the bounded decision need.",
    owner:
      "Change owner and service owner.",
  },
  {
    request: "Source-health request",
    purpose:
      "Determine whether fictional delay, loss, duplication, conflict, schema drift, parser failure, clock issue, blind period, or recovery affects confidence.",
    requiredFields:
      "Source category, affected population, period, freshness, completeness, schema, parser, queue, clock, duplicates, blind state, recovery state, and owner.",
    privacyLimit:
      "Request health metadata rather than unrelated record content.",
    owner:
      "Source owner and SIEM quality owner.",
  },
  {
    request: "Scope request",
    purpose:
      "Determine which fictional identities, devices, services, destinations, users, environments, and periods may be affected.",
    requiredFields:
      "Relationship counts, unique entities, duplicate handling, coverage, source health, service dependencies, time range, and uncertainty.",
    privacyLimit:
      "Use categories and counts unless a specific identity is required for the documented decision.",
    owner:
      "Analyst, service owner, source owner, and quality owner.",
  },
  {
    request: "Closure-validation request",
    purpose:
      "Determine whether fictional revocation, session closure, source reconciliation, service recovery, owner validation, corrective action, and residual-risk requirements are complete.",
    requiredFields:
      "Current authority, session state, service state, source health, corrective action, validation result, owner confirmation, residual risk, closure criteria, and reopen triggers.",
    privacyLimit:
      "Do not attach unrelated historical evidence to the closure record.",
    owner:
      "Case owner, identity owner, service owner, source owner, and risk owner.",
  },
];

const alternativeMatrix = [
  {
    alternative: "Valid extension arrived late",
    supports:
      "Fictional extension record has current scope, owner, purpose, identity, role, destination, and time but entered the SIEM after the alert.",
    contradicts:
      "No valid extension exists at the source or the extension does not match scope.",
    nextEvidence:
      "Source-side extension state, event time, collection delay, owner confirmation, and source health.",
    decisionEffect:
      "May move Conditional to Expected after validation.",
  },
  {
    alternative: "Revocation synchronization is delayed",
    supports:
      "Fictional role source says Revoked while group source remains Active and is Degraded.",
    contradicts:
      "Group source is Healthy and effective access remains active beyond expected synchronization.",
    nextEvidence:
      "Source-health report, event times, group state, session state, recovery estimate, and identity-owner confirmation.",
    decisionEffect:
      "May keep Source-Degraded until reconciliation.",
  },
  {
    alternative: "Approved maintenance explains the destination",
    supports:
      "Fictional change record matches identity, service, destination, purpose, owner, start, end, and expected behavior.",
    contradicts:
      "Destination, identity, time, or activity falls outside the approved change.",
    nextEvidence:
      "Change scope, destination relationship, owner, event timeline, and service impact.",
    decisionEffect:
      "May move In Review to Expected or remain Conditional.",
  },
  {
    alternative: "Recovery replay created duplicates",
    supports:
      "Fictional records share event identifiers and replay metadata during a Recovering source state.",
    contradicts:
      "Records represent distinct event times, sessions, destinations, or state changes.",
    nextEvidence:
      "Uniqueness keys, replay markers, event time, collection path, session, destination, and source owner.",
    decisionEffect:
      "May reduce apparent scope without lowering the underlying condition's importance.",
  },
  {
    alternative: "Stale ownership caused routing error",
    supports:
      "Fictional service catalog owner differs from current change and support records.",
    contradicts:
      "Current catalog, assignment, and owner confirmations agree.",
    nextEvidence:
      "Owner catalog, service record, change record, support assignment, review date, and ownership authority.",
    decisionEffect:
      "May change owner and deadline without changing alert meaning.",
  },
  {
    alternative: "Normalization changed source meaning",
    supports:
      "Fictional accepted and completed values map to the same Success category.",
    contradicts:
      "Source-owner review confirms the values are equivalent for the defender question.",
    nextEvidence:
      "Source fields, canonical mapping, transformation history, schema version, owner review, and regression tests.",
    decisionEffect:
      "May change confidence, alert logic, or historical case classification.",
  },
];

const closureCriteria = [
  {
    criterion: "Primary defender question answered",
    evidence:
      "Fictional final observation, supported interpretation, alternatives, confidence, and non-proof statement are documented.",
    failure:
      "The case closes with the alert title rather than an evidence-based answer.",
  },
  {
    criterion: "Authorization resolved",
    evidence:
      "Fictional approval, assignment, extension, sponsor, purpose, scope, time, owner, and lifecycle evidence are current enough.",
    failure:
      "The case closes while authorization remains Unknown or Conditional.",
  },
  {
    criterion: "Effective access and activity reviewed",
    evidence:
      "Fictional role, group, session, device, service, destination, and result evidence are reconciled.",
    failure:
      "Assigned privilege is mistaken for exercised activity or vice versa.",
  },
  {
    criterion: "Source health reconciled",
    evidence:
      "Fictional required sources are Healthy enough or residual gaps are explicitly accepted and documented.",
    failure:
      "Blind, Degraded, Conflicting, or Recovering evidence is ignored.",
  },
  {
    criterion: "Scope and impact documented",
    evidence:
      "Fictional affected and unaffected identities, devices, services, destinations, users, environments, periods, active effect, and recoverability are documented.",
    failure:
      "One alert or one identity is mistaken for complete scope.",
  },
  {
    criterion: "Owner actions complete",
    evidence:
      "Fictional identity, service, supplier, source, change, privacy, quality, or risk owners completed assigned decisions and validation.",
    failure:
      "The case closes while owner requests remain open.",
  },
  {
    criterion: "Corrective action validated",
    evidence:
      "Fictional revocation, reconciliation, service recovery, mapping correction, tuning, documentation, or ownership update passed defined checks.",
    failure:
      "An action was performed but not validated.",
  },
  {
    criterion: "Residual risk and reopen triggers recorded",
    evidence:
      "Fictional remaining uncertainty, accepted limitations, owner, review date, and reopen criteria are documented.",
    failure:
      "The case cannot be revisited when new evidence or repeated behavior appears.",
  },
];

const triageMetrics = [
  {
    metric: "Question quality",
    question:
      "Do fictional triage questions remain bounded, neutral, evidence-driven, and tied to decisions?",
    evidence:
      "Alert reviews, question maps, case notes, owner feedback, and quality audits.",
    limitation:
      "A well-written question may still rely on incomplete evidence.",
  },
  {
    metric: "Evidence-layer accuracy",
    question:
      "Do fictional analysts separate direct evidence, normalization, enrichment, derived context, owner statements, hypotheses, and decisions?",
    evidence:
      "Evidence matrices, case notes, review corrections, and analyst coaching records.",
    limitation:
      "Correct labels do not guarantee the source evidence is healthy.",
  },
  {
    metric: "Source-health visibility",
    question:
      "Do fictional triage decisions show Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering evidence effects?",
    evidence:
      "Case states, confidence statements, alternate evidence, source-owner requests, and reassessment.",
    limitation:
      "Visible health states still require correct interpretation.",
  },
  {
    metric: "Evidence-request precision",
    question:
      "Are fictional owner requests purpose-limited, time-bounded, field-specific, privacy-aware, and connected to a decision?",
    evidence:
      "Request logs, owner responses, unnecessary-field reviews, delays, and case outcomes.",
    limitation:
      "A precise request may still reach the wrong owner.",
  },
  {
    metric: "Decision-state accuracy",
    question:
      "Do fictional New, In Review, Conditional, Expected, Source-Degraded, Unknown, Escalated, Resolved, and Reopened states match current evidence?",
    evidence:
      "State transitions, rationales, deadlines, owner actions, validation, and reopen history.",
    limitation:
      "Outcome labels can still become stale after new evidence.",
  },
  {
    metric: "Owner-response quality",
    question:
      "Do fictional owners provide current, scoped, evidence-supported responses within documented deadlines?",
    evidence:
      "Request time, response time, fields supplied, scope, source health, confirmation, and escalation records.",
    limitation:
      "Fast owner responses may still be incomplete or incorrect.",
  },
  {
    metric: "Closure quality",
    question:
      "Do fictional cases close only after questions, source health, authorization, scope, impact, owner actions, validation, residual risk, and reopen criteria are complete?",
    evidence:
      "Closure checklist, reopen rate, failed validation, residual-risk records, and quality review.",
    limitation:
      "Low reopen rate may reflect weak detection of reopened conditions.",
  },
  {
    metric: "Triage debt",
    question:
      "Which fictional question maps, evidence requests, state definitions, owner records, deadlines, runbooks, privacy controls, or closure criteria are stale or unresolved?",
    evidence:
      "Debt register, review dates, owner matrix, failed audits, reopened cases, and residual-risk records.",
    limitation:
      "Counting debt does not identify mission impact by itself.",
  },
];

const evidenceMatrix = [
  {
    id: "TRIAGE-01",
    source: "Fictional alert contract",
    observation:
      "The alert says Temporary Recovery Role Remains Active after Approved End and provides role, extension, group, session, service, and source-health references.",
    supports:
      "A stale-authority review is justified.",
    limits:
      "The alert does not prove misuse, harmful intent, complete scope, or service impact.",
    use:
      "Begin with a bounded authorization and effective-access question.",
  },
  {
    id: "TRIAGE-02",
    source: "Fictional role and group evidence",
    observation:
      "Role source is Healthy and records Active; group source is Degraded and also records Active.",
    supports:
      "The role assignment appears active, while effective-access confidence is limited by group-source health.",
    limits:
      "The records do not prove current valid authorization or actual use.",
    use:
      "Separate role-state confidence from effective-access confidence.",
  },
  {
    id: "TRIAGE-03",
    source: "Fictional extension evidence",
    observation:
      "Extension source is Conditional and the latest record is delayed by eighteen minutes.",
    supports:
      "Authorization evidence may be incomplete at alert time.",
    limits:
      "Delay does not prove a valid extension exists.",
    use:
      "Request source-side extension state and owner confirmation.",
  },
  {
    id: "TRIAGE-04",
    source: "Fictional session evidence",
    observation:
      "One session remains Active across approval_end and reaches one critical student-support service.",
    supports:
      "Effective activity may continue beyond expiration.",
    limits:
      "The session record does not prove privileged action, harmful intent, or user impact.",
    use:
      "Review session purpose, operation category, destination, result, owner, and service effect.",
  },
  {
    id: "TRIAGE-05",
    source: "Fictional service evidence",
    observation:
      "The service is critical, but application results show no current error increase and the service owner reports normal availability.",
    supports:
      "Potential severity is High, while current service impact is not confirmed.",
    limits:
      "Normal availability does not prove no unauthorized or unnecessary access occurred.",
    use:
      "Keep severity separate from active impact.",
  },
  {
    id: "TRIAGE-06",
    source: "Fictional change evidence",
    observation:
      "A maintenance record exists but ends before the session crosses approval_end and does not include the observed destination.",
    supports:
      "The maintenance record does not fully explain the observation.",
    limits:
      "The record does not prove the activity was unauthorized.",
    use:
      "Keep maintenance as a partial alternative and request change-owner clarification.",
  },
  {
    id: "TRIAGE-07",
    source: "Fictional owner responses",
    observation:
      "Identity owner says no extension is visible; service owner reports no current impact; source owner confirms delayed extension ingestion.",
    supports:
      "Authorization remains unresolved while service impact appears absent and source delay is confirmed.",
    limits:
      "Owner responses do not replace source reconciliation.",
    use:
      "Assign Conditional or Source-Degraded state with targeted next evidence.",
  },
  {
    id: "TRIAGE-08",
    source: "Fictional closure review",
    observation:
      "The role is later revoked and the session closes, but extension-source recovery and historical reconciliation remain incomplete.",
    supports:
      "The immediate active condition ended.",
    limits:
      "The case is not ready for complete closure while source reconciliation and historical authorization remain unresolved.",
    use:
      "Maintain Conditional or Source-Degraded until validation and residual-risk review complete.",
  },
];

const commonMistakes = [
  {
    mistake: "The alert title becomes the analyst conclusion",
    observation:
      "A fictional case note repeats confirmed misuse even though the alert title only describes stale authority.",
    impact:
      "Unsupported certainty enters the case record.",
    correction:
      "Rewrite the alert as a neutral observation and state the primary defender question.",
  },
  {
    mistake: "Direct, normalized, enriched, and derived evidence are mixed",
    observation:
      "A fictional analyst describes derived authorization state as a direct source fact.",
    impact:
      "Logic assumptions and source limitations become invisible.",
    correction:
      "Label evidence layers and preserve provenance, transformation, owner, and confidence.",
  },
  {
    mistake: "No record becomes proof of absence",
    observation:
      "A fictional analyst closes a session question during a Blind source period.",
    impact:
      "Missing evidence becomes false confidence.",
    correction:
      "Use Unknown or Source-Degraded and request alternate evidence or reassessment.",
  },
  {
    mistake: "Evidence requests are too broad",
    observation:
      "A fictional analyst requests complete identity and device history for one bounded authorization question.",
    impact:
      "Privacy, workload, retention, and relevance problems increase.",
    correction:
      "Request only the fields, period, scope, and owner evidence needed for the decision.",
  },
  {
    mistake: "Owner statements are treated as unquestioned fact",
    observation:
      "A fictional owner says activity is expected and the case immediately closes.",
    impact:
      "Stale, incomplete, or mistaken context may hide meaningful differences.",
    correction:
      "Document owner evidence and validate current authorization, scope, time, destination, and source health.",
  },
  {
    mistake: "Alert count becomes scope",
    observation:
      "A fictional case reports five affected identities when replay created five alerts for one identity.",
    impact:
      "Scope and priority may be inflated.",
    correction:
      "Review uniqueness, duplicates, replay, sessions, destinations, relationships, and coverage.",
  },
  {
    mistake: "Conditional and Unknown are avoided",
    observation:
      "A fictional reporting process forces every case into true positive or false positive.",
    impact:
      "Uncertainty and source-health limitations disappear from metrics and decisions.",
    correction:
      "Use evidence-supported Conditional, Source-Degraded, and Unknown states.",
  },
  {
    mistake: "Resolved means the alert stopped",
    observation:
      "A fictional case closes because no new alert appeared.",
    impact:
      "Authorization, sessions, source recovery, validation, residual risk, and reopen criteria remain incomplete.",
    correction:
      "Use documented closure criteria and validation evidence.",
  },
  {
    mistake: "Escalation becomes abandonment",
    observation:
      "A fictional analyst changes the state to Escalated and removes the original owner.",
    impact:
      "Context, accountability, and follow-up can be lost.",
    correction:
      "Retain case ownership, chronology, evidence, questions, deadlines, and handoff confirmation.",
  },
  {
    mistake: "Real case evidence enters the portfolio",
    observation:
      "A fictional learning artifact includes copied real alert details, usernames, screenshots, owner notes, service names, or case timelines.",
    impact:
      "Sensitive people, systems, suppliers, incidents, and defensive processes may be exposed.",
    correction:
      "Invent every organization, alert, record, field, identity, service, owner, date, decision, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Create the neutral alert summary",
    action:
      "Rewrite the fictional Northbridge alert using only supported observation, evidence, timing, source health, and non-proof statements.",
    output:
      "One-paragraph triage summary.",
    quality:
      "No unsupported cause, intent, authorization, scope, impact, or final outcome appears.",
  },
  {
    step: "2",
    title: "Map the primary and supporting questions",
    action:
      "Define fictional observation, identity, device, service, destination, authorization, timing, source-health, scope, impact, alternatives, and ownership questions.",
    output:
      "Triage question map.",
    quality:
      "Every question supports a specific decision.",
  },
  {
    step: "3",
    title: "Separate evidence layers",
    action:
      "Classify fictional direct evidence, parsed fields, normalized fields, enrichment, derived context, owner statements, hypotheses, and decisions.",
    output:
      "Evidence-layer matrix.",
    quality:
      "No derived value or hypothesis is labeled as direct fact.",
  },
  {
    step: "4",
    title: "Review source health",
    action:
      "Document fictional Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering sources and affected conclusions.",
    output:
      "Source-health and confidence statement.",
    quality:
      "Missing evidence never becomes false absence.",
  },
  {
    step: "5",
    title: "Build chronology",
    action:
      "Order fictional role, group, extension, session, service, change, owner, source-health, and recovery evidence by event time while preserving other times.",
    output:
      "Triage timeline.",
    quality:
      "Delay, duplicates, replay, out-of-order arrival, and blind periods remain visible.",
  },
  {
    step: "6",
    title: "Evaluate scope and impact",
    action:
      "Review fictional identities, devices, services, destinations, users, environments, periods, potential severity, active effect, and recoverability.",
    output:
      "Scope and impact assessment.",
    quality:
      "Potential consequence and confirmed impact remain separate.",
  },
  {
    step: "7",
    title: "Rank alternatives",
    action:
      "Compare fictional extension delay, synchronization delay, maintenance, recovery replay, stale ownership, and normalization differences.",
    output:
      "Alternative-explanation matrix.",
    quality:
      "Each alternative has supporting evidence, contradicting evidence, owner, and next question.",
  },
  {
    step: "8",
    title: "Write evidence requests",
    action:
      "Create fictional purpose-limited requests for identity, service, change, source-health, scope, and closure evidence.",
    output:
      "Evidence-request register.",
    quality:
      "Each request includes purpose, fields, period, owner, deadline, privacy boundary, and decision use.",
  },
  {
    step: "9",
    title: "Assign state and transitions",
    action:
      "Choose fictional New, In Review, Conditional, Expected, Source-Degraded, Unknown, Escalated, Resolved, or Reopened and document transition criteria.",
    output:
      "Decision-state and transition record.",
    quality:
      "The state matches current evidence and cannot remain stale.",
  },
  {
    step: "10",
    title: "Prepare the portfolio package",
    action:
      "Combine the fictional summary, questions, evidence layers, timeline, source health, scope, impact, alternatives, requests, owners, state, closure, reopening, metrics, and reflection.",
    output:
      "Public-safe Triage Questions and Evidence Review Package.",
    quality:
      "Every organization, alert, record, field, identity, service, owner, date, decision, and outcome is invented.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest first step in fictional alert triage?",
    choices: [
      "Accept the alert title as the conclusion.",
      "Restate the alert as a neutral observation and identify the primary defender question.",
      "Request every available record.",
      "Escalate every High severity alert immediately.",
    ],
    answer: 1,
    explanation:
      "A neutral observation and bounded defender question prevent unsupported assumptions from controlling the review.",
  },
  {
    question:
      "Why should direct evidence and enrichment remain separate?",
    choices: [
      "Because enrichment is never useful.",
      "Because enrichment may be stale, derived, or nonauthoritative even when direct source evidence is current.",
      "Because direct evidence always proves intent.",
      "Because normalized fields cannot be searched.",
    ],
    answer: 1,
    explanation:
      "Evidence layers have different origins and confidence. Separating them preserves provenance and limitations.",
  },
  {
    question:
      "A fictional required source is Blind. Which decision state is strongest?",
    choices: [
      "Resolved.",
      "True negative.",
      "Source-Degraded or Unknown, depending on which conclusions are affected.",
      "Expected.",
    ],
    answer: 2,
    explanation:
      "Blind evidence prevents normal-confidence conclusions and may block both confirmation and absence claims.",
  },
  {
    question:
      "Which fictional evidence request is most privacy-aware?",
    choices: [
      "Provide the identity's complete history.",
      "Provide every available device and service record.",
      "Provide only the role, approval, extension, session, owner, timing, and source-health fields needed for the defined alert period.",
      "Provide full screenshots of all related systems.",
    ],
    answer: 2,
    explanation:
      "Purpose-limited, field-specific, time-bounded requests reduce unnecessary collection and exposure.",
  },
  {
    question:
      "When is Expected the strongest fictional state?",
    choices: [
      "Whenever an owner says the activity is normal.",
      "When current approval, purpose, scope, identity, service, destination, owner, timing, and source health support the observation.",
      "Whenever severity is Low.",
      "Whenever the alert repeats.",
    ],
    answer: 1,
    explanation:
      "Expected requires current, scoped, evidence-supported authorization and context rather than a vague statement.",
  },
  {
    question:
      "Which fictional closure condition is strongest?",
    choices: [
      "The alert stopped appearing.",
      "The analyst changed severity to Low.",
      "Questions, authorization, source health, scope, impact, owner actions, validation, residual risk, closure criteria, and reopen criteria are complete.",
      "The case is old.",
    ],
    answer: 2,
    explanation:
      "Closure should reflect resolved evidence and lifecycle requirements, not silence, age, or a label change.",
  },
  {
    question:
      "Which public portfolio approach is safest?",
    choices: [
      "Use real case notes with fake usernames.",
      "Use real alert screenshots with blurred details.",
      "Invent every organization, alert, record, field, identity, service, owner, date, decision, and outcome.",
      "Use internal service names without addresses.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real people, systems, suppliers, cases, and defensive processes.",
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

export default function TriageQuestionsAndEvidenceReviewPage() {
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
              Lesson 5 of 10
            </span>
            <span className="rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-2 text-blue-200">
              Questions, Evidence, Ownership, States, Closure, and Reopening
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A6.5 Triage Questions and Evidence Review
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional analysts turn prioritized alerts into
            structured evidence reviews using neutral observations, bounded
            questions, source health, identity, service, destination,
            authorization, timing, scope, impact, alternatives, ownership,
            privacy, decision states, closure, and reopening.
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
          lessonTitle="Triage Questions and Evidence Review"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented alerts, records, fields, identities, devices, services, destinations, owners, dates, decisions, impacts, and outcomes.",
            "I will begin with a neutral observation and bounded defender question rather than the alert title or severity label.",
            "I will distinguish direct evidence, parsed fields, normalized fields, enrichment, derived context, owner statements, hypotheses, and decisions.",
            "I will make source health, timing, duplicates, replay, blind periods, scope, impact, alternatives, and unresolved questions visible.",
            "I will request only the fictional evidence needed for the documented decision and preserve privacy, access, retention, and ownership boundaries.",
            "I will not access, review, query, triage, investigate, collect, copy, suppress, escalate, close, reopen, or modify any real alert, case, SIEM, account, endpoint, network, domain, service, supplier, platform, or organization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Same Alert Can Support Conditional, Expected, or Source-Degraded"
        >
          <p className="leading-8">
            A fictional alert reports a temporary recovery role still Active
            after expiration. Role evidence is Healthy, group evidence is
            Degraded, extension evidence is Conditional, one session remains
            Active, and the service owner reports no current impact. A strong
            analyst does not force the case into confirmed misuse or false
            positive. The analyst separates what is known, what is delayed,
            what remains possible, which owners must answer, and which state
            current evidence supports.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak triage
              </p>
              <p className="mt-2 leading-7">
                “High alert plus active session equals confirmed misuse.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong triage
              </p>
              <p className="mt-2 leading-7">
                “The role and session remain active after approval_end.
                Authorization is unresolved because extension evidence is
                delayed and group evidence is Degraded. Service impact is not
                confirmed. Identity, source, and change owners must answer
                specific questions.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Triage is not the search for a fast label. It is the disciplined
            process of finding the strongest evidence-supported next decision.
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
          title="Triage Turns Alerts into Defensible Work"
        >
          <p className="leading-8">
            Fictional alerts are useful only when analysts can understand what
            matched, what evidence is reliable, what remains unknown, which
            mission outcomes matter, who owns the next answer, and what state,
            deadline, escalation, closure, or reopening decision is justified.
            Weak triage creates unsupported conclusions, broad evidence
            requests, privacy exposure, stale cases, missed impact, inconsistent
            closure, and misleading metrics.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Evidence discipline",
                "Separate fictional direct records, normalization, enrichment, derived context, owner statements, hypotheses, and decisions.",
              ],
              [
                "Question discipline",
                "Use fictional bounded observation, authorization, source-health, scope, impact, alternative, and ownership questions.",
              ],
              [
                "Lifecycle discipline",
                "Use fictional decision states, deadlines, escalation, closure, reopening, metrics, review triggers, and residual risk.",
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
          title="The T-R-I-A-G-E Method"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "T — Translate the alert",
                "Rewrite the fictional alert as a neutral observation with evidence, timing, source health, and non-proof statements.",
              ],
              [
                "R — Review evidence layers",
                "Separate fictional direct evidence, parsed fields, normalized fields, enrichment, derived context, owner statements, and hypotheses.",
              ],
              [
                "I — Investigate bounded questions",
                "Ask fictional identity, device, service, destination, authorization, timing, source-health, scope, impact, alternative, and ownership questions.",
              ],
              [
                "A — Assign owners and actions",
                "Send fictional purpose-limited evidence requests to accountable source, identity, service, supplier, change, privacy, quality, and risk owners.",
              ],
              [
                "G — Grade the current state",
                "Choose fictional New, In Review, Conditional, Expected, Source-Degraded, Unknown, Escalated, Resolved, or Reopened.",
              ],
              [
                "E — Establish transitions",
                "Document fictional deadlines, escalation triggers, closure criteria, reopen criteria, residual uncertainty, review dates, and lifecycle.",
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
              Decision-ready triage statement
            </p>
            <p className="mt-2 leading-7">
              This fictional alert remains Conditional because role and session
              evidence support continuing authority after expiration, while
              extension evidence is delayed, group evidence is Degraded,
              service impact is not confirmed, and identity, source, and change
              owners still owe bounded evidence.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Triage and Evidence Review"
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
            Ask Twelve Triage Question Domains
          </h2>

          <div className="mt-6 grid gap-5">
            {triageDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.domain}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Primary question
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.primaryQuestion}
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
                      Weak conclusion
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.weakConclusion}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong output
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strongOutput}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Separate Eight Evidence Layers"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceLayers.map((item) => (
              <article
                key={item.layer}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.layer}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Fictional example
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.example}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Analyst caution
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.caution}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 3"
          title="Use a Twelve-Step Triage Sequence"
        >
          <div className="grid gap-5">
            {questionSequence.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.step}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Analyst action
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.action}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Quality requirement
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Use Nine Decision States"
        >
          <div className="grid gap-5">
            {decisionStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.state}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence requirement", item.evidenceRequirement],
                    ["Entry condition", item.entry],
                    ["Exit condition", item.exit],
                    ["Risk if misused", item.risk],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.state}-${label}`}
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
          title="Write Eight Purpose-Limited Evidence Requests"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceRequests.map((item) => (
              <article
                key={item.request}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.request}
                </h3>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Purpose
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.purpose}</p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Required fields
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.requiredFields}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Privacy boundary
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.privacyLimit}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Accountable owner
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.owner}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Compare Six Alternative Explanations"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Alternative",
                    "Supporting evidence",
                    "Contradicting evidence",
                    "Next evidence",
                    "Decision effect",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {alternativeMatrix.map((row) => (
                  <tr key={row.alternative}>
                    <td className="px-4 py-4 align-top font-bold text-white">
                      {row.alternative}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.supports}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.contradicts}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.nextEvidence}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.decisionEffect}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Require Eight Closure Criteria"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {closureCriteria.map((item) => (
              <article
                key={item.criterion}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.criterion}
                </h3>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Fictional evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Failure if skipped
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.failure}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 8"
          title="Measure Eight Triage Quality Dimensions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {triageMetrics.map((item) => (
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
          eyebrow="Fictional Triage Architecture"
          title="Northbridge Alert-to-Decision Model"
        >
          <p className="leading-8">
            This conceptual architecture is completely invented and
            intentionally non-operational. It teaches triage without real
            alerts, identities, services, records, screenshots, case notes,
            queries, suppliers, incidents, or internal systems.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Alert input", "Observation, evidence, source health, severity, confidence"],
                ["Context input", "Identity, device, service, destination, authorization"],
                ["Timeline input", "Event, collection, processing, alert, recovery"],
                ["Owner input", "Source, identity, service, change, privacy, risk"],
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
                Fictional Triage Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Translate", "Neutral observation and primary question"],
                  ["Separate", "Evidence layers, hypotheses, owner statements"],
                  ["Review", "Source health, timing, identity, service, destination"],
                  ["Estimate", "Scope, impact, recoverability, uncertainty"],
                  ["Compare", "Approved, technical, timing, source-health alternatives"],
                  ["Request", "Purpose-limited evidence from accountable owners"],
                  ["Decide", "State, priority, escalation, deadline, closure"],
                  ["Maintain", "Transitions, metrics, residual risk, reopening"],
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
                ["Analyst output", "Questions, evidence, state, deadline, next steps"],
                ["Owner output", "Specific evidence request and decision need"],
                ["Case output", "Chronology, rationale, actions, closure, reopen"],
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
          title="Fake Northbridge Triage Quality Dashboard"
          subtitle="Fictional question quality, evidence layers, source-health visibility, owner responses, decision states, closure quality, privacy, and triage debt for training only."
          metrics={[
            {
              label: "Alerts with complete triage question maps",
              value: "14 / 20",
              note: "Six fictional alerts still lack source-health, scope, impact, or ownership questions.",
            },
            {
              label: "Open fictional evidence requests beyond deadline",
              value: "5",
              note: "Two identity, one source-health, one change, and one service-impact response remain overdue.",
            },
            {
              label: "Open fictional triage-debt items",
              value: "9",
              note: "Evidence-layer labels, state definitions, owner records, privacy fields, closure criteria, reopen triggers, metrics, runbooks, and review dates remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Triage State Requires Reassessment"
          severity="High"
          time="4:17 PM"
          source="Fake Northbridge Triage Governance Console"
          details="The fictional stale-role case is labeled Resolved because the role was revoked and the session closed. However, extension-source recovery, historical authorization, group reconciliation, corrective-action validation, residual risk, and reopen criteria remain incomplete."
          recommendation="Move the fictional case from Resolved to Conditional or Source-Degraded. Complete source reconciliation, historical review, owner validation, corrective-action testing, residual-risk documentation, closure criteria, and reopen triggers before closure."
        />

        <FakeLogPanel
          title="Fake Alert Triage Timeline"
          logs={[
            "09:00 ALERT id='TRIAGE-ST-07'",
            "09:01 STATE new='true'",
            "09:03 QUESTION primary='stale-authority'",
            "09:05 SOURCE role='healthy'",
            "09:06 SOURCE group='degraded'",
            "09:07 SOURCE extension='conditional'",
            "09:08 SOURCE session='healthy'",
            "09:10 OBSERVATION role-after-end='true'",
            "09:11 IMPACT service='not-confirmed'",
            "09:12 ALTERNATIVE extension-delay='open'",
            "09:13 ALTERNATIVE maintenance='partial'",
            "09:15 REQUEST identity-owner='sent'",
            "09:16 REQUEST source-owner='sent'",
            "09:17 REQUEST change-owner='sent'",
            "09:19 STATE conditional='true'",
            "09:31 ACTION role='revoked'",
            "09:34 ACTION session='closed'",
            "09:41 SOURCE extension='recovering'",
            "09:45 CLOSURE validation='incomplete'",
            "16:17 ALERT issue='state-reassessment'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What Triage Evidence Supports—and What It Does Not Prove
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
                    ["Triage use", item.use],
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
          title="Which Triage State Is Best Supported?"
          question="Which fictional state best represents the Northbridge stale-role review after role revocation and session closure?"
          evidence={[
            "Role and session evidence confirm the immediate active condition ended.",
            "Extension-source recovery remains incomplete.",
            "Historical authorization at alert time is still unresolved.",
            "Group-source reconciliation remains incomplete.",
            "No current service impact is confirmed.",
            "Corrective-action validation has not finished.",
            "Residual risk and reopen criteria are not documented.",
            "The case was labeled Resolved only because the alert stopped.",
          ]}
          options={[
            "Move the fictional case to Conditional or Source-Degraded until historical authorization, source reconciliation, validation, residual risk, closure criteria, and reopen triggers are complete.",
            "Keep Resolved because the alert stopped.",
            "Mark Expected because no current impact is visible.",
            "Mark Unknown and remove all owner requests.",
          ]}
          bestAnswer={0}
          explanation="The first option recognizes that the immediate active condition ended while preserving unresolved evidence and lifecycle requirements that prevent defensible closure."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Triage and Evidence Review Errors"
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
          title="Build the Northbridge Triage Questions and Evidence Review Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            access, copy, sanitize, upload, inspect, query, triage, investigate,
            collect, suppress, escalate, close, reopen, or modify any real
            alert, case, SIEM, source, account, endpoint, network, domain,
            service, supplier, platform, or organization.
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
          title="The Extension Source Is Delayed"
          scenario="A fictional stale-role alert has current role and session evidence, Degraded group evidence, and an extension source delayed by eighteen minutes. The identity owner does not see a current extension, but the source owner confirms ingestion delay."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the fictional case Conditional or Source-Degraded, request source-side extension state and event time, preserve the stale-authority question, separate observation confidence from authorization confidence, and set an owner deadline.",
              outcome:
                "Best defensive choice. The core observation is meaningful, but delayed authorization evidence prevents a final conclusion.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Mark confirmed misuse because the identity owner cannot see an extension.",
              outcome:
                "Weak. The source owner confirmed delay and the evidence remains incomplete.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Mark Expected because an extension might exist.",
              outcome:
                "Weak. Possibility is not sufficient evidence for Expected.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Alert Stops after Revocation"
          scenario="A fictional role is revoked and the active session closes. The alert stops, but group reconciliation, extension-source recovery, historical authorization, corrective-action validation, residual risk, and reopen criteria remain incomplete."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the fictional case Conditional or Source-Degraded until reconciliation, historical review, validation, owner confirmation, residual risk, closure criteria, and reopen triggers are complete.",
              outcome:
                "Best choice. Alert silence does not equal defensible resolution.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close the case immediately because no new alert appears.",
              outcome:
                "Weak. Important evidence and lifecycle requirements remain unresolved.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the case because the technical condition ended.",
              outcome:
                "Weak. The chronology, decisions, validation, and residual risk still matter.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend a Triage Decision before a Review Board"
        >
          <p className="leading-8">
            Fictional Northbridge presents a stale-authority alert with mixed
            source health, one active session, no confirmed service impact, a
            partial maintenance explanation, delayed extension evidence,
            conflicting owner responses, and incomplete closure validation.
            The review board asks whether the case should be Expected,
            Conditional, Source-Degraded, Escalated, or Resolved.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Defend the observation",
                "Explain the fictional matched condition using direct evidence, timing, source health, provenance, and non-proof statements.",
              ],
              [
                "Defend the questions",
                "Explain fictional identity, device, service, destination, authorization, timing, source-health, scope, impact, alternatives, and ownership questions.",
              ],
              [
                "Defend the evidence layers",
                "Explain fictional direct, parsed, normalized, enriched, derived, owner, hypothesis, and decision layers.",
              ],
              [
                "Defend the requests",
                "Explain fictional purpose, fields, period, owner, deadline, privacy boundary, and decision use for each evidence request.",
              ],
              [
                "Defend the state",
                "Explain fictional state entry, evidence requirement, unresolved gaps, exit criteria, aging, and escalation triggers.",
              ],
              [
                "Defend closure and reopening",
                "Explain fictional authorization, access, source health, scope, impact, owner actions, validation, residual risk, closure criteria, and reopen triggers.",
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
              Produce a fictional triage summary, question map, evidence-layer
              matrix, source-health review, chronology, scope and impact
              assessment, alternative matrix, evidence-request register,
              owner matrix, state decision, transition map, closure checklist,
              reopen criteria, triage-quality report, residual-risk statement,
              leadership summary, and public portfolio boundary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Triage Questions and Evidence Review Checklist"
          items={[
            "I can rewrite a fictional alert as a neutral observation with a primary defender question and non-proof statement.",
            "I can distinguish fictional direct evidence, parsed fields, normalized fields, enrichment, derived context, owner statements, hypotheses, and decisions.",
            "I can ask fictional observation, identity, device, service, destination, authorization, timing, source-health, scope, impact, alternative, and ownership questions.",
            "I can preserve event time, collection time, processing time, alert time, delays, duplicates, replay, out-of-order arrival, and blind periods.",
            "I can use Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering evidence in triage confidence and decisions.",
            "I can create fictional purpose-limited evidence requests with exact purpose, fields, period, owner, deadline, privacy boundary, and decision use.",
            "I can use fictional New, In Review, Conditional, Expected, Source-Degraded, Unknown, Escalated, Resolved, and Reopened states correctly.",
            "I can separate potential severity from confirmed active impact and current recoverability.",
            "I can rank fictional alternative explanations and identify supporting, contradicting, and next evidence.",
            "I can define fictional closure criteria, validation evidence, residual risk, and reopen triggers.",
            "I can measure fictional question quality, evidence-layer accuracy, source-health visibility, request precision, state accuracy, owner response, closure quality, and triage debt.",
            "I can create a completely fictional triage artifact without exposing real alerts, records, identities, services, owners, cases, suppliers, or internal processes.",
          ]}
        />

        <MiniQuiz
          title="A6.5 Mini Quiz: Triage Questions and Evidence Review"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Triage Questions and Evidence Review Package for the Northbridge Student-Support Cooperative. Include mission, stakeholders, alert identifiers, neutral alert summaries, primary defender questions, supporting questions, non-proof statements, direct evidence, parsed fields, normalized fields, enrichment, derived context, owner statements, hypotheses, assumptions, decisions, unresolved questions, source categories, source owners, identity evidence, role evidence, group evidence, assignment evidence, approval evidence, extension evidence, sponsor evidence, revocation evidence, device evidence, device ownership, device lifecycle, session evidence, service evidence, service criticality, destination evidence, object categories, change evidence, maintenance evidence, supplier evidence, source-health evidence, event time, collection time, processing time, alert time, clock state, delay, duplicates, replay, out-of-order arrival, blind periods, recovery, Healthy states, Conditional states, Degraded states, Blind states, Conflicting states, Recovering states, identity questions, device questions, service questions, destination questions, authorization questions, timing questions, source-health questions, scope questions, impact questions, alternative explanations, ownership questions, current scope, possible scope, excluded duplicates, active impact, potential severity, recoverability, identity-lifecycle requests, device-context requests, service-impact requests, destination-purpose requests, change requests, source-health requests, scope requests, closure-validation requests, purpose, fields, periods, owners, deadlines, privacy boundaries, decision use, New state, In Review state, Conditional state, Expected state, Source-Degraded state, Unknown state, Escalated state, Resolved state, Reopened state, state-entry criteria, state-exit criteria, aging rules, escalation triggers, closure criteria, reopen criteria, corrective actions, validation evidence, residual uncertainty, residual risk, question-quality metrics, evidence-layer metrics, source-health metrics, evidence-request metrics, decision-state metrics, owner-response metrics, closure-quality metrics, triage debt, owner matrix, change history, review triggers, leadership summary, reflection, and a statement that every organization, alert, record, field, identity, service, owner, date, decision, and outcome is invented."
          tips={[
            "Begin with fictional observation and questions rather than a final label.",
            "Separate direct evidence from normalization, enrichment, derived context, owner statements, and hypotheses.",
            "Use purpose-limited fictional evidence requests with privacy, scope, time, ownership, and decision boundaries.",
            "Make state transitions, deadlines, closure criteria, reopen criteria, residual risk, and review triggers explicit.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Escalation Criteria?"
        >
          <p className="leading-8">
            Before moving to A6.6, rate your readiness from 1 to 5 for neutral
            observations, defender questions, evidence layers, source health,
            identity, device, service, destination, authorization, timing,
            scope, impact, alternatives, ownership, evidence requests, decision
            states, closure, reopening, metrics, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can turn a fictional alert into a neutral observation and bounded primary question.",
              "I can separate direct, normalized, enriched, derived, owner, hypothesis, and decision evidence.",
              "I can request only the fictional evidence needed for a specific decision.",
              "I can keep source-health limitations visible in confidence and state.",
              "I can compare scope, impact, alternatives, owners, and timing without forcing certainty.",
              "I can use all nine fictional decision states with evidence-based transitions.",
              "I can define closure and reopening criteria beyond alert silence.",
              "I can produce a safe fictional triage package without copying real alerts, records, or cases.",
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
            Record one fictional alert observation, one primary question, one
            evidence gap, one source-health state, one owner request, one
            decision state, and one question you will carry into A6.6.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Fictional triage begins with a neutral observation and bounded defender question, not the alert title or severity label.",
            "Direct evidence, parsed fields, normalized fields, enrichment, derived context, owner statements, hypotheses, and decisions are different layers.",
            "Triage should review identity, device, service, destination, authorization, timing, source health, scope, impact, alternatives, ownership, and next evidence.",
            "Missing, delayed, conflicting, Blind, or Recovering evidence should remain visible through Conditional, Source-Degraded, or Unknown states.",
            "Purpose-limited fictional evidence requests should specify purpose, fields, period, owner, deadline, privacy boundary, and decision use.",
            "Expected requires current, scoped, evidence-supported authorization and context rather than a vague owner statement.",
            "Resolved requires completed questions, source health, authorization, scope, impact, owner actions, validation, residual risk, closure criteria, and reopen criteria.",
            "Alert silence, elapsed time, or a label change does not prove resolution.",
            "Triage quality includes question quality, evidence-layer accuracy, source-health visibility, request precision, state accuracy, owner response, closure quality, and debt.",
            "Every CyberShield triage artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, learn how fictional defenders define evidence-based technical,
            service-owner, source-health, privacy, leadership, supplier,
            recovery, and time-sensitive escalation criteria without
            overreacting or delaying necessary review.
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