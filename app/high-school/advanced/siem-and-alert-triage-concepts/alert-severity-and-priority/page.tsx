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
const previousLesson = `${modulePath}/correlation-and-alert-rules`;
const nextLesson = `${modulePath}/triage-questions-and-evidence-review`;

const objectives = [
  "Distinguish fictional alert severity, evidence confidence, analyst priority, response urgency, mission impact, asset or service criticality, privilege, scope, time sensitivity, active effect, recoverability, and owner expectation.",
  "Evaluate fictional SIEM alerts using a documented priority model rather than relying on platform severity, alert order, or risk score alone.",
  "Explain how fictional source health, evidence completeness, alternative explanations, active user or service impact, and response opportunity change queue decisions.",
  "Design a fictional severity-confidence-priority matrix with definitions, evidence requirements, overrides, review triggers, ownership, limitations, and validation cases.",
  "Create a portfolio-ready fictional Alert Severity and Priority Package containing queue logic, scoring rationale, triage order, escalation boundaries, metrics, governance, residual risk, and leadership communication.",
];

const vocabulary = [
  [
    "Alert severity",
    "A fictional rating describing the potential consequence if the alert's documented risky interpretation is true.",
  ],
  [
    "Evidence confidence",
    "A fictional rating describing how strongly the available evidence supports the current observation or interpretation.",
  ],
  [
    "Analyst priority",
    "A fictional ranking describing how urgently an alert should be reviewed compared with other work.",
  ],
  [
    "Response urgency",
    "A fictional rating describing how quickly an authorized decision or action may be needed to reduce ongoing impact or preserve recovery opportunity.",
  ],
  [
    "Mission impact",
    "The fictional effect on users, identity, services, privacy, suppliers, availability, evidence, operations, or recovery.",
  ],
  [
    "Criticality",
    "A fictional rating describing how important an identity, service, data category, supplier, administrative function, or recovery capability is to the mission.",
  ],
  [
    "Privilege",
    "A fictional description of how much authority an identity, role, service, or administrative function can exercise.",
  ],
  [
    "Scope",
    "The fictional number and importance of identities, devices, services, destinations, users, data categories, environments, or time periods affected.",
  ],
  [
    "Active effect",
    "A fictional current impact on users, services, availability, privacy, evidence quality, or recovery rather than only potential future harm.",
  ],
  [
    "Time sensitivity",
    "A fictional measure of how quickly evidence, authority, sessions, recovery options, user impact, or service state may change.",
  ],
  [
    "Recoverability",
    "A fictional estimate of how difficult, costly, slow, uncertain, or disruptive it may be to restore the intended state.",
  ],
  [
    "Response opportunity",
    "A fictional period in which review or authorized action may reduce impact, preserve evidence, prevent widening scope, or improve recovery.",
  ],
  [
    "Owner expectation",
    "A fictional documented service, identity, supplier, change, privacy, or recovery expectation provided by an accountable owner.",
  ],
  [
    "Severity override",
    "A fictional documented change to the default severity based on current mission, scope, impact, source health, or owner evidence.",
  ],
  [
    "Priority override",
    "A fictional documented queue-ranking change based on urgent impact, source loss, widening scope, time sensitivity, or another evidence-based condition.",
  ],
  [
    "Confidence downgrade",
    "A fictional reduction in evidence confidence because required sources, fields, mappings, timing, coverage, or relationships are missing, delayed, conflicting, blind, or recovering.",
  ],
  [
    "Priority queue",
    "A fictional ordered set of alerts and cases ranked for analyst review using documented evidence and mission criteria.",
  ],
  [
    "Queue starvation",
    "A fictional condition in which certain alerts remain unreviewed because higher-ranked work continuously enters the queue.",
  ],
  [
    "Review deadline",
    "A fictional time expectation for initial analyst review, owner response, escalation, reassessment, or closure.",
  ],
  [
    "Priority aging",
    "A fictional process that changes queue order when an alert remains unresolved beyond documented time or risk conditions.",
  ],
  [
    "Priority explanation",
    "A fictional human-readable statement showing why an alert received its current severity, confidence, and queue position.",
  ],
  [
    "Decision threshold",
    "A fictional documented level of evidence, impact, or uncertainty required for triage, escalation, owner involvement, or closure.",
  ],
  [
    "Residual uncertainty",
    "A fictional record of important questions or evidence limitations that remain after prioritization.",
  ],
  [
    "Priority debt",
    "Fictional risk created by stale criticality, weak overrides, missing deadlines, poor metrics, unresolved queue starvation, or undocumented ranking logic.",
  ],
];

const dimensions = [
  {
    dimension: "Potential severity",
    question:
      "If the fictional risky interpretation is true, how serious could the consequence be?",
    evidence:
      "Service criticality, identity authority, data sensitivity, supplier role, availability effect, privacy impact, recovery complexity, and mission dependencies.",
    commonError:
      "Treating severity as proof that the alert interpretation is correct.",
    strongUse:
      "Describe potential impact independently from evidence confidence.",
  },
  {
    dimension: "Evidence confidence",
    question:
      "How strongly do the fictional records, source health, timing, mappings, relationships, and owner context support the current interpretation?",
    evidence:
      "Required fields, source states, provenance, semantic quality, event time, correlation tests, alternatives, owner validation, and missing-data behavior.",
    commonError:
      "Using a High severity label to imply High confidence.",
    strongUse:
      "Downgrade confidence when required evidence is incomplete while preserving potential impact.",
  },
  {
    dimension: "Mission impact",
    question:
      "Which fictional users, services, identities, suppliers, privacy obligations, evidence functions, or recovery outcomes may be affected?",
    evidence:
      "Mission catalog, service dependency map, identity model, owner statements, user-impact evidence, and recovery plans.",
    commonError:
      "Ranking alerts only by technical pattern without mission context.",
    strongUse:
      "Elevate review when a Medium technical condition affects an essential service or active user population.",
  },
  {
    dimension: "Privilege and authority",
    question:
      "What fictional authority could the identity, role, service, supplier, or administrative function exercise?",
    evidence:
      "Role catalog, approval, assignment, effective access, service authority, destination scope, owner, and lifecycle state.",
    commonError:
      "Assuming assigned privilege proves exercised privilege or harmful use.",
    strongUse:
      "Use privilege to estimate potential impact while separately reviewing actual activity.",
  },
  {
    dimension: "Scope",
    question:
      "How many fictional identities, devices, services, destinations, users, records, environments, or periods may be affected?",
    evidence:
      "Correlation results, coverage maps, case relationships, owner reports, service dependencies, and source-health boundaries.",
    commonError:
      "Treating one alert count as complete scope.",
    strongUse:
      "Increase priority when scope is widening or uncertain across critical services.",
  },
  {
    dimension: "Active effect",
    question:
      "Is there fictional current user, service, availability, privacy, evidence, or recovery impact?",
    evidence:
      "Application results, service state, user-support records, owner confirmation, queue state, recovery evidence, and source-health impact.",
    commonError:
      "Placing active impact below an unconfirmed High-severity alert.",
    strongUse:
      "Prioritize evidence of current mission effect even when platform severity is lower.",
  },
  {
    dimension: "Source health",
    question:
      "Can the fictional evidence reliably support the priority decision?",
    evidence:
      "Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering states plus affected sources, fields, mappings, windows, and coverage.",
    commonError:
      "Lowering priority automatically when confidence is lower.",
    strongUse:
      "A broad Blind period may receive high priority because it creates urgent false-negative risk.",
  },
  {
    dimension: "Time sensitivity",
    question:
      "How quickly might fictional evidence, sessions, authority, impact, recovery options, or user effect change?",
    evidence:
      "Session state, expiration, active impact, change windows, support windows, recovery deadlines, and owner response expectations.",
    commonError:
      "Using age alone without considering whether the response opportunity is changing.",
    strongUse:
      "Elevate alerts with short-lived evidence or rapidly widening scope.",
  },
  {
    dimension: "Recoverability",
    question:
      "How difficult or disruptive would fictional recovery be if the risky interpretation is true?",
    evidence:
      "Recovery objectives, service dependencies, data state, supplier role, rollback readiness, backup assumptions, and validation needs.",
    commonError:
      "Assuming connectivity restoration means recovery is complete.",
    strongUse:
      "Increase priority when recovery is complex, uncertain, or time-dependent.",
  },
  {
    dimension: "Owner expectation",
    question:
      "What do fictional identity, service, supplier, change, privacy, and recovery owners expect for this condition?",
    evidence:
      "Approvals, assignments, change records, maintenance windows, service baselines, owner confirmations, and escalation paths.",
    commonError:
      "Treating any owner statement as unquestioned truth.",
    strongUse:
      "Use owner evidence as context while preserving source, timing, and authorization review.",
  },
];

const scales = [
  {
    level: "Low severity",
    meaning:
      "Fictional potential consequence is limited, localized, reversible, or unlikely to affect an essential mission outcome.",
    examples:
      "Minor documentation drift, low-impact expected alert, limited noncritical context difference.",
    evidenceNeed:
      "Document why critical services, privilege, sensitive data, broad scope, and active impact are not involved.",
  },
  {
    level: "Medium severity",
    meaning:
      "Fictional potential consequence could affect a meaningful user, service, identity, supplier, privacy, evidence, or recovery outcome but remains bounded.",
    examples:
      "Unexplained service-destination difference, delayed supplier assignment evidence, incomplete case closure.",
    evidenceNeed:
      "Document mission relationship, affected scope, owner context, source health, and recoverability.",
  },
  {
    level: "High severity",
    meaning:
      "Fictional potential consequence could materially affect essential services, privileged authority, sensitive data, broad scope, source coverage, or recovery.",
    examples:
      "Stale emergency authority, active critical-service impact, broad source Blind period, unreconciled recovery state.",
    evidenceNeed:
      "Document criticality, privilege, impact, scope, source health, time sensitivity, and owner expectations.",
  },
  {
    level: "Low confidence",
    meaning:
      "Fictional required evidence is missing, conflicting, blind, semantically unclear, or dependent on unverified assumptions.",
    examples:
      "No session source, conflicting role states, unknown normalized value, stale enrichment.",
    evidenceNeed:
      "Show exact gaps, affected conclusions, alternate evidence, owners, and reassessment criteria.",
  },
  {
    level: "Moderate confidence",
    meaning:
      "Fictional core evidence supports the observation, but important authorization, scope, impact, timing, or source-health questions remain.",
    examples:
      "Role and session evidence current while extension evidence is delayed.",
    evidenceNeed:
      "Separate supported observations from unresolved interpretations.",
  },
  {
    level: "High confidence",
    meaning:
      "Fictional required evidence is current, semantically understood, mutually consistent, sufficiently complete, and validated for the documented observation.",
    examples:
      "Multiple healthy sources agree on stale effective authority and active service use.",
    evidenceNeed:
      "Preserve non-proof statements because High confidence in the observation still does not prove intent or complete scope.",
  },
  {
    level: "Low priority",
    meaning:
      "Fictional review can occur after higher-impact or more time-sensitive work without materially increasing risk.",
    examples:
      "Stable expected alert with current owner and no active impact.",
    evidenceNeed:
      "Document why delay is acceptable and which aging trigger changes the decision.",
  },
  {
    level: "Medium priority",
    meaning:
      "Fictional review is important but can follow urgent active-impact, source-loss, or widening-scope work.",
    examples:
      "Meaningful unexplained difference with stable scope and no current service effect.",
    evidenceNeed:
      "Document review deadline, owner, impact assumptions, and escalation triggers.",
  },
  {
    level: "High priority",
    meaning:
      "Fictional review should occur promptly because of active impact, broad source loss, privileged authority, widening scope, short response opportunity, or complex recovery.",
    examples:
      "Critical-service degradation, broad Blind evidence period, active stale privilege, rapidly expanding scope.",
    evidenceNeed:
      "Document the exact urgency driver and who must act next.",
  },
];

const priorityModel = [
  {
    step: "1. Read the alert observation",
    action:
      "Identify the fictional condition that matched without repeating the severity label as a conclusion.",
    output:
      "Neutral observation statement.",
    risk:
      "The analyst may inherit unsupported wording from the alert title.",
  },
  {
    step: "2. Check source health",
    action:
      "Review fictional freshness, completeness, schema, mapping, queue, coverage, conflicts, blind periods, and recovery.",
    output:
      "Evidence-confidence boundary.",
    risk:
      "The queue order may rely on missing or degraded evidence.",
  },
  {
    step: "3. Identify mission relationship",
    action:
      "Connect the fictional alert to users, identities, services, suppliers, privacy, availability, evidence, administration, or recovery.",
    output:
      "Mission-impact statement.",
    risk:
      "A lower-severity but actively harmful service issue may be delayed.",
  },
  {
    step: "4. Evaluate privilege and criticality",
    action:
      "Review fictional authority, service importance, data sensitivity, supplier role, administrative capability, and recovery dependency.",
    output:
      "Potential-severity rationale.",
    risk:
      "Assigned authority may be confused with exercised authority.",
  },
  {
    step: "5. Estimate scope",
    action:
      "Review fictional identities, devices, services, destinations, users, records, environments, and time periods affected or potentially affected.",
    output:
      "Current and uncertain scope.",
    risk:
      "One alert may hide a broader or smaller condition.",
  },
  {
    step: "6. Determine active effect",
    action:
      "Look for fictional current service degradation, user disruption, privacy effect, evidence loss, recovery blockage, or ongoing authority.",
    output:
      "Active-impact status.",
    risk:
      "Potential impact may be prioritized over confirmed current effect.",
  },
  {
    step: "7. Evaluate time sensitivity",
    action:
      "Review fictional session state, authorization expiry, evidence volatility, support windows, recovery deadlines, and widening scope.",
    output:
      "Review and response deadline.",
    risk:
      "A short response opportunity may be missed.",
  },
  {
    step: "8. Consider alternatives and owner evidence",
    action:
      "Review fictional approved change, maintenance, extension, assignment, migration, recovery, source delay, or ownership explanations.",
    output:
      "Alternative-explanation and owner-context statement.",
    risk:
      "Expected activity may be overprioritized or meaningful differences may be dismissed.",
  },
  {
    step: "9. Assign severity, confidence, and priority separately",
    action:
      "Document fictional potential impact, evidence certainty, and review urgency as separate decisions.",
    output:
      "Three-part decision with rationale.",
    risk:
      "A single score may hide conflicting dimensions.",
  },
  {
    step: "10. Set aging, override, and review triggers",
    action:
      "Define fictional deadlines, queue-aging conditions, widening-scope triggers, source-health changes, owner nonresponse, active-impact changes, and escalation boundaries.",
    output:
      "Managed queue decision.",
    risk:
      "Low-priority alerts may starve or High-priority alerts may remain stale.",
  },
];

const queueCases = [
  {
    id: "QUEUE-01",
    title: "Stale emergency authority",
    platformSeverity: "High",
    confidence:
      "Moderate because role and session evidence are current, but extension freshness is Conditional.",
    mission:
      "Privileged authority connected to a critical recovery service.",
    scope:
      "One identity, one role, one active session, one essential service.",
    activeEffect:
      "No confirmed service impact; effective authority may still be active.",
    sourceHealth:
      "Role Healthy, session Healthy, extension Conditional, group Degraded.",
    priority:
      "High because of privilege, time sensitivity, and continuing authority despite incomplete authorization evidence.",
  },
  {
    id: "QUEUE-02",
    title: "Critical student-support service errors",
    platformSeverity: "Medium",
    confidence:
      "High because application, user-support, and service-owner evidence agree.",
    mission:
      "Essential student-support workflow is currently unavailable to many users.",
    scope:
      "One service, broad user population, multiple dependent workflows.",
    activeEffect:
      "Confirmed current user and service impact.",
    sourceHealth:
      "Application and support evidence Healthy.",
    priority:
      "High because active mission impact and recovery opportunity outweigh the Medium platform severity.",
  },
  {
    id: "QUEUE-03",
    title: "Broad source Blind period",
    platformSeverity: "Low",
    confidence:
      "High confidence that required network evidence is Blind, but Unknown confidence about activity during the gap.",
    mission:
      "Detection coverage for several important service relationships is unavailable.",
    scope:
      "Three service zones and a forty-minute period.",
    activeEffect:
      "Current false-negative risk and delayed review across multiple detections.",
    sourceHealth:
      "Network source Blind; alternate application evidence Partial.",
    priority:
      "High because broad evidence loss creates urgent coverage and reassessment risk.",
  },
  {
    id: "QUEUE-04",
    title: "Supplier session outside normal schedule",
    platformSeverity: "High",
    confidence:
      "Low because assignment evidence is delayed while sponsor and maintenance records are current.",
    mission:
      "Supplier access to one noncritical support service.",
    scope:
      "One supplier identity, one device, one destination, one open maintenance request.",
    activeEffect:
      "No confirmed user or service impact.",
    sourceHealth:
      "Assignment Degraded; sponsor, device, destination, and maintenance Healthy.",
    priority:
      "Medium until assignment evidence or owner response changes confidence or scope.",
  },
  {
    id: "QUEUE-05",
    title: "Documentation drift",
    platformSeverity: "Low",
    confidence:
      "High that the runbook closure criteria do not match the current alert contract.",
    mission:
      "May cause future inconsistent case closure for a meaningful detection.",
    scope:
      "One rule, one runbook, multiple future cases.",
    activeEffect:
      "No known current case error, but lifecycle debt is present.",
    sourceHealth:
      "Documentation evidence Healthy.",
    priority:
      "Medium with a defined deadline because the defect can affect repeated future decisions.",
  },
  {
    id: "QUEUE-06",
    title: "Expected recovery replay alerts",
    platformSeverity: "Medium",
    confidence:
      "High that queued records are part of an approved recovery replay.",
    mission:
      "Evidence reconciliation after a source outage.",
    scope:
      "One source, historical period, duplicate-aware work queue.",
    activeEffect:
      "No direct user impact; analyst workload could increase.",
    sourceHealth:
      "Source Recovering.",
    priority:
      "Low to Medium with grouping and review because the condition is expected but still requires recovery validation.",
  },
];

const overrides = [
  {
    trigger: "Confirmed active mission impact",
    defaultChange:
      "Increase fictional priority even if platform severity is Medium or Low.",
    requiredEvidence:
      "Current service state, user effect, owner confirmation, application results, and source health.",
    safeguard:
      "Document scope, time sensitivity, recovery opportunity, and owner.",
  },
  {
    trigger: "Broad source Blind period",
    defaultChange:
      "Increase fictional priority because of false-negative and reassessment risk.",
    requiredEvidence:
      "Affected sources, populations, services, periods, detections, alternate evidence, and recovery estimate.",
    safeguard:
      "Separate confidence in the source outage from confidence about activity during the gap.",
  },
  {
    trigger: "Widening scope",
    defaultChange:
      "Increase fictional priority as new identities, services, destinations, users, or environments become involved.",
    requiredEvidence:
      "Correlation relationships, timestamps, source health, owner context, and scope boundaries.",
    safeguard:
      "Avoid double counting duplicates or replayed records.",
  },
  {
    trigger: "Short response opportunity",
    defaultChange:
      "Increase fictional priority when evidence or authorized recovery options may disappear quickly.",
    requiredEvidence:
      "Session state, expiration, support window, volatile evidence, recovery deadline, and owner availability.",
    safeguard:
      "Document why delay changes the decision.",
  },
  {
    trigger: "Low confidence with high potential impact",
    defaultChange:
      "Keep fictional severity High while setting confidence Low or Moderate and prioritize evidence collection appropriately.",
    requiredEvidence:
      "Impact model, evidence gaps, alternate evidence, source health, and owner questions.",
    safeguard:
      "Do not describe the risky interpretation as confirmed.",
  },
  {
    trigger: "Expected or approved context",
    defaultChange:
      "Lower fictional priority or label Expected without removing all visibility.",
    requiredEvidence:
      "Current approval, assignment, extension, purpose, scope, owner, time, and source health.",
    safeguard:
      "Use expiration, break conditions, review triggers, and narrow scope.",
  },
  {
    trigger: "Owner nonresponse",
    defaultChange:
      "Increase fictional priority or escalate when a time-sensitive decision remains blocked.",
    requiredEvidence:
      "Owner assignment, request time, deadline, impact, alternatives, and escalation path.",
    safeguard:
      "Do not confuse nonresponse with proof of wrongdoing.",
  },
  {
    trigger: "Queue aging",
    defaultChange:
      "Increase fictional review attention when unresolved alerts exceed documented deadlines.",
    requiredEvidence:
      "Alert age, current state, source health, impact, unresolved questions, owner actions, and reason for delay.",
    safeguard:
      "Aging should not automatically override active-impact work without mission review.",
  },
];

const sourceHealthEffects = [
  {
    state: "Healthy",
    confidenceEffect:
      "Fictional required evidence may support normal confidence for the documented observation.",
    priorityEffect:
      "Priority follows mission impact, scope, privilege, active effect, time sensitivity, and response opportunity.",
    caution:
      "Healthy evidence does not prove intent, complete scope, or required response.",
  },
  {
    state: "Conditional",
    confidenceEffect:
      "Fictional optional enrichment or noncritical context limits confidence in severity, priority, routing, or ownership.",
    priorityEffect:
      "Priority may remain unchanged when mission impact or active effect is independently supported.",
    caution:
      "Do not use stale optional context for closure or broad conclusions.",
  },
  {
    state: "Degraded",
    confidenceEffect:
      "Fictional required evidence is incomplete or delayed, lowering affected confidence.",
    priorityEffect:
      "Priority may rise when the missing evidence is time-sensitive or affects critical coverage.",
    caution:
      "Lower confidence does not always mean lower urgency.",
  },
  {
    state: "Blind",
    confidenceEffect:
      "Fictional activity during the gap may be Unknown even when confidence in the outage itself is High.",
    priorityEffect:
      "Priority may be High because of broad false-negative risk and historical reassessment needs.",
    caution:
      "Never treat quiet results as normal or absent.",
  },
  {
    state: "Conflicting",
    confidenceEffect:
      "Fictional interpretation confidence remains limited until provenance, authority, timing, and owners are reconciled.",
    priorityEffect:
      "Priority depends on potential impact, active effect, time sensitivity, and the cost of delayed reconciliation.",
    caution:
      "Do not silently choose one source because it supports the preferred conclusion.",
  },
  {
    state: "Recovering",
    confidenceEffect:
      "Fictional current evidence may be usable, but historical completeness, uniqueness, sequence, and semantic confidence remain limited.",
    priorityEffect:
      "Recovery validation and replay control may receive elevated priority to restore trustworthy coverage.",
    caution:
      "Connectivity restoration does not equal complete recovery.",
  },
];

const validationCases = [
  {
    id: "PRI-T01",
    type: "High severity, Moderate confidence",
    fictionalInput:
      "Stale emergency authority with current role and session evidence but delayed extension evidence.",
    expected:
      "Severity High, confidence Moderate, priority High, authorization question open, owners assigned.",
    protects:
      "Separation of potential impact and evidence certainty.",
  },
  {
    id: "PRI-T02",
    type: "Medium severity, High priority",
    fictionalInput:
      "Confirmed application errors affecting a critical student-support service and many users.",
    expected:
      "Severity Medium, confidence High, priority High because active mission impact is current.",
    protects:
      "Mission-aware queue order.",
  },
  {
    id: "PRI-T03",
    type: "Low severity, High priority",
    fictionalInput:
      "A broad required source becomes Blind across multiple critical service zones.",
    expected:
      "Source alert severity may remain Low or Medium, confidence High for the outage, priority High for coverage restoration and reassessment.",
    protects:
      "Source-health urgency.",
  },
  {
    id: "PRI-T04",
    type: "High severity, Low confidence",
    fictionalInput:
      "Supplier alert with delayed assignment evidence but healthy sponsor, maintenance, device, and destination context.",
    expected:
      "Potential severity High, confidence Low, priority Medium pending assignment evidence or owner response.",
    protects:
      "Avoiding severity-driven overprioritization.",
  },
  {
    id: "PRI-T05",
    type: "Expected alert",
    fictionalInput:
      "Recovery replay alerts match a current approved recovery plan and remain within documented scope.",
    expected:
      "Expected label, High confidence, Low or Medium priority, grouping, expiration, and recovery validation.",
    protects:
      "Approved-condition handling.",
  },
  {
    id: "PRI-T06",
    type: "Widening scope",
    fictionalInput:
      "A fictional alert expands from one service to three services and a new destination.",
    expected:
      "Priority increases; scope and source-health review begin; grouping breaks into new analyst attention.",
    protects:
      "Scope-sensitive prioritization.",
  },
  {
    id: "PRI-T07",
    type: "Queue aging",
    fictionalInput:
      "A Medium-priority alert remains unresolved beyond owner-response and review deadlines.",
    expected:
      "Priority aging or escalation occurs with documented reason, impact, unresolved questions, and owner path.",
    protects:
      "Queue starvation control.",
  },
  {
    id: "PRI-T08",
    type: "Conflicting evidence",
    fictionalInput:
      "Role source says Revoked while group source says Active beyond expected synchronization.",
    expected:
      "Confidence limited, priority based on privilege and time sensitivity, reconciliation owner assigned.",
    protects:
      "Evidence-aware ranking.",
  },
  {
    id: "PRI-T09",
    type: "Duplicate inflation",
    fictionalInput:
      "Recovery replay creates five alerts for one underlying event.",
    expected:
      "Priority remains tied to the underlying condition; duplicate count does not inflate scope automatically.",
    protects:
      "Accurate queue and scope decisions.",
  },
  {
    id: "PRI-T10",
    type: "Owner override",
    fictionalInput:
      "A service owner confirms current user impact not visible in the alert source.",
    expected:
      "Priority may increase, but owner evidence is documented and independently validated where possible.",
    protects:
      "Context use without unquestioned authority.",
  },
  {
    id: "PRI-T11",
    type: "Recovery complexity",
    fictionalInput:
      "Connectivity is restored, but sessions, queues, source health, and service state remain unreconciled.",
    expected:
      "Priority remains elevated until recovery validation and closure criteria are complete.",
    protects:
      "Recovery-aware prioritization.",
  },
  {
    id: "PRI-T12",
    type: "Privacy boundary",
    fictionalInput:
      "A priority panel requests unrelated personal history to increase confidence.",
    expected:
      "Privacy validation fails; purpose-limited evidence is requested instead.",
    protects:
      "Evidence minimization.",
  },
];

const qualityMetrics = [
  {
    metric: "Priority accuracy",
    question:
      "Did fictional queue order reflect mission impact, active effect, privilege, scope, source health, time sensitivity, and response opportunity?",
    evidence:
      "Reviewed queues, case outcomes, owner feedback, missed deadlines, impact timelines, and reassessment records.",
    limitation:
      "Final outcomes can be incomplete or affected by evidence availability.",
  },
  {
    metric: "Severity-confidence separation",
    question:
      "Do fictional alerts and cases document potential impact separately from evidence certainty?",
    evidence:
      "Alert contracts, case notes, review decisions, confidence downgrades, and quality audits.",
    limitation:
      "Separate labels do not guarantee the rationale is correct.",
  },
  {
    metric: "Active-impact response",
    question:
      "How quickly are fictional alerts with confirmed current user or service impact reviewed?",
    evidence:
      "Alert time, impact confirmation, first review, owner response, escalation, recovery, and closure.",
    limitation:
      "Faster review does not automatically mean better decisions.",
  },
  {
    metric: "Source-health prioritization",
    question:
      "Do fictional Degraded, Blind, Conflicting, and Recovering states affect queue decisions appropriately?",
    evidence:
      "Health-state alerts, affected detections, priority overrides, reassessment, and recovery validation.",
    limitation:
      "High outage priority does not prove harmful activity occurred during the gap.",
  },
  {
    metric: "Queue starvation",
    question:
      "Which fictional low- or medium-priority alerts exceed documented review deadlines?",
    evidence:
      "Queue age, state, owners, deadlines, aging rules, unresolved questions, and reasons for delay.",
    limitation:
      "Age alone does not define mission urgency.",
  },
  {
    metric: "Override quality",
    question:
      "Are fictional severity and priority overrides evidence-based, owned, documented, time-bounded, and reviewed?",
    evidence:
      "Override records, rationale, source health, owner evidence, approval, expiration, and outcome.",
    limitation:
      "Frequent overrides may indicate a weak default model.",
  },
  {
    metric: "Priority explanation quality",
    question:
      "Can fictional analysts explain why one alert ranked above another?",
    evidence:
      "Queue rationale, mission context, impact, confidence, scope, source health, deadlines, and owner questions.",
    limitation:
      "A readable explanation may still rely on stale context.",
  },
  {
    metric: "Priority debt",
    question:
      "Which fictional criticality values, owner records, aging rules, overrides, metrics, tests, or escalation boundaries are stale or unresolved?",
    evidence:
      "Debt register, review dates, owner matrix, failed tests, queue audits, and residual-risk records.",
    limitation:
      "Counting debt does not identify mission impact by itself.",
  },
];

const evidenceMatrix = [
  {
    id: "PRI-01",
    source: "Fictional alert queue",
    observation:
      "A High alert has Moderate confidence, a Medium alert has confirmed critical-service impact, and a Low alert represents a broad Blind period.",
    supports:
      "Queue order should not follow platform severity alone.",
    limits:
      "The queue summary does not prove cause, complete scope, or required response.",
    use:
      "Compare mission impact, active effect, privilege, scope, source health, time sensitivity, and response opportunity.",
  },
  {
    id: "PRI-02",
    source: "Fictional mission catalog",
    observation:
      "The student-support service is essential during enrollment periods, while the supplier support service is noncritical.",
    supports:
      "The same technical condition may have different mission priority by service.",
    limits:
      "Criticality does not prove the alert interpretation.",
    use:
      "Use service importance in severity and priority rationale.",
  },
  {
    id: "PRI-03",
    source: "Fictional source-health dashboard",
    observation:
      "Network evidence is Blind across three service zones, while application evidence is Healthy.",
    supports:
      "There is High confidence in the coverage outage and Unknown confidence about activity inside the gap.",
    limits:
      "The outage does not prove harmful activity occurred.",
    use:
      "Prioritize coverage restoration and historical reassessment.",
  },
  {
    id: "PRI-04",
    source: "Fictional owner statement",
    observation:
      "The service owner confirms current user disruption that is not yet reflected in the SIEM application metric.",
    supports:
      "Priority may need to increase based on current mission impact.",
    limits:
      "One owner statement does not establish cause or complete scope.",
    use:
      "Document the statement, seek supporting evidence, and update priority rationale.",
  },
  {
    id: "PRI-05",
    source: "Fictional role evidence",
    observation:
      "An emergency role remains active after expiration, but extension evidence is delayed.",
    supports:
      "Potential impact is High and authorization confidence is incomplete.",
    limits:
      "The evidence does not prove misuse or harmful action.",
    use:
      "Keep severity High, confidence Moderate, and priority High due to continuing authority and time sensitivity.",
  },
  {
    id: "PRI-06",
    source: "Fictional duplicate review",
    observation:
      "Five alerts represent one underlying event delivered by retry and replay paths.",
    supports:
      "Alert count overstates work volume and may overstate scope.",
    limits:
      "The underlying event may still be important.",
    use:
      "Group duplicates while preserving new sessions, destinations, severity, and source-health changes.",
  },
  {
    id: "PRI-07",
    source: "Fictional queue-aging report",
    observation:
      "Three Medium-priority alerts exceeded owner-response deadlines and one is now linked to a new service.",
    supports:
      "Priority aging and widening-scope review are required.",
    limits:
      "Age does not automatically prove greater impact.",
    use:
      "Recalculate priority with current mission, scope, source health, and owner context.",
  },
  {
    id: "PRI-08",
    source: "Fictional recovery report",
    observation:
      "Connectivity returned, but sessions, queues, source health, and service state remain unreconciled.",
    supports:
      "Recovery work remains time-sensitive and incomplete.",
    limits:
      "The report does not prove every service is unavailable.",
    use:
      "Maintain elevated priority until validation and closure criteria pass.",
  },
];

const commonMistakes = [
  {
    mistake: "Severity is treated as truth",
    observation:
      "A fictional High alert is described as confirmed harmful activity.",
    impact:
      "Potential consequence is confused with evidence certainty.",
    correction:
      "Document severity and confidence separately with non-proof statements.",
  },
  {
    mistake: "Queue order follows platform severity only",
    observation:
      "A fictional High alert with Low confidence outranks a Medium alert with confirmed critical-service impact.",
    impact:
      "Current mission harm may be delayed.",
    correction:
      "Use mission impact, active effect, privilege, scope, source health, time sensitivity, and response opportunity.",
  },
  {
    mistake: "Low confidence always means low priority",
    observation:
      "A fictional broad source Blind period is placed at the bottom of the queue.",
    impact:
      "Urgent false-negative and coverage risk remain unresolved.",
    correction:
      "Separate confidence about activity from confidence about evidence loss and prioritize the outage appropriately.",
  },
  {
    mistake: "High severity automatically authorizes response",
    observation:
      "A fictional alert label is used to justify action without owner, evidence, scope, or authority review.",
    impact:
      "The platform replaces documented decision rights.",
    correction:
      "Keep severity, priority, response urgency, and authorized action as separate decisions.",
  },
  {
    mistake: "Scope is estimated from alert count",
    observation:
      "A fictional five-alert burst is described as five affected identities even though the alerts are duplicates.",
    impact:
      "Priority may be inflated or misdirected.",
    correction:
      "Review uniqueness, grouping, replay, relationships, populations, and source health.",
  },
  {
    mistake: "Owner statements are accepted without evidence",
    observation:
      "A fictional owner says activity is expected and the alert is immediately lowered.",
    impact:
      "Stale, incomplete, or mistaken context may hide meaningful risk.",
    correction:
      "Document owner evidence and validate current authorization, scope, timing, and source health.",
  },
  {
    mistake: "Priority never changes",
    observation:
      "A fictional alert remains Medium despite widening scope, owner nonresponse, and active user impact.",
    impact:
      "Queue decisions become stale.",
    correction:
      "Use aging, scope, impact, source-health, and time-sensitive review triggers.",
  },
  {
    mistake: "Recovery lowers priority too early",
    observation:
      "A fictional case is deprioritized when connectivity returns.",
    impact:
      "Sessions, queues, source gaps, replay, duplicates, and service state may remain unreconciled.",
    correction:
      "Maintain priority until recovery validation and closure criteria are complete.",
  },
  {
    mistake: "Metrics reward speed only",
    observation:
      "A fictional team is measured only by first-review and closure time.",
    impact:
      "Analysts may close quickly with weak evidence or suppress hard cases.",
    correction:
      "Measure decision quality, reopen rate, source health, impact, misses, effort, privacy, and residual risk.",
  },
  {
    mistake: "Real queue data enters the portfolio",
    observation:
      "A fictional project includes copied real alert titles, scores, identities, dashboards, case ages, or internal service names.",
    impact:
      "Sensitive systems, people, suppliers, and defensive priorities may be exposed.",
    correction:
      "Invent every organization, alert, score, source, identity, service, owner, date, decision, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Define severity",
    action:
      "Describe fictional potential impact using mission, service criticality, privilege, data sensitivity, scope, privacy, availability, and recovery.",
    output:
      "Severity definition and examples.",
    quality:
      "Severity does not claim the alert interpretation is correct.",
  },
  {
    step: "2",
    title: "Define confidence",
    action:
      "Describe fictional evidence certainty using source health, provenance, field meaning, timing, relationships, alternatives, and owner evidence.",
    output:
      "Confidence scale and downgrade rules.",
    quality:
      "Evidence gaps and affected conclusions remain visible.",
  },
  {
    step: "3",
    title: "Define priority",
    action:
      "Rank fictional alerts using mission impact, active effect, privilege, scope, time sensitivity, source health, response opportunity, and recoverability.",
    output:
      "Priority scale and queue criteria.",
    quality:
      "Priority is not copied directly from severity.",
  },
  {
    step: "4",
    title: "Build the decision matrix",
    action:
      "Create fictional combinations of severity, confidence, active impact, source health, scope, and time sensitivity.",
    output:
      "Severity-confidence-priority matrix.",
    quality:
      "The matrix explains High-severity/Low-confidence and Low-severity/High-priority cases.",
  },
  {
    step: "5",
    title: "Rank the fictional queue",
    action:
      "Order the supplied Northbridge alerts and explain why each alert is above or below the others.",
    output:
      "Queue-ranking worksheet.",
    quality:
      "Every rank has evidence, mission, owner, and deadline rationale.",
  },
  {
    step: "6",
    title: "Define overrides",
    action:
      "Document fictional active-impact, source-loss, widening-scope, time-sensitive, expected-context, owner-nonresponse, and aging overrides.",
    output:
      "Override and exception register.",
    quality:
      "Every override is owned, evidence-based, time-bounded, and reviewable.",
  },
  {
    step: "7",
    title: "Define source-health effects",
    action:
      "Explain how fictional Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering states affect confidence and priority.",
    output:
      "Source-health priority model.",
    quality:
      "Lower confidence does not automatically lower urgency.",
  },
  {
    step: "8",
    title: "Validate the model",
    action:
      "Test fictional active impact, source Blind, widening scope, duplicate inflation, queue aging, conflicting evidence, recovery, owner context, and privacy cases.",
    output:
      "Priority validation matrix.",
    quality:
      "Expected results are documented before comparison.",
  },
  {
    step: "9",
    title: "Define metrics and governance",
    action:
      "Measure fictional priority accuracy, separation, response to active impact, source-health handling, starvation, overrides, explanations, and debt.",
    output:
      "Priority-quality dashboard and ownership model.",
    quality:
      "Metrics reward decision quality rather than speed or closure count alone.",
  },
  {
    step: "10",
    title: "Prepare the portfolio package",
    action:
      "Combine the fictional scales, matrix, queue, cases, overrides, metrics, owners, limitations, residual risk, leadership summary, and reflection.",
    output:
      "Public-safe Alert Severity and Priority Package.",
    quality:
      "Every organization, alert, score, source, identity, service, owner, date, decision, and outcome is invented.",
  },
];

const quizQuestions = [
  {
    question:
      "What does a fictional alert severity rating describe?",
    choices: [
      "How certain the alert interpretation is.",
      "The potential consequence if the documented risky interpretation is true.",
      "The exact queue order.",
      "The authorized response action.",
    ],
    answer: 1,
    explanation:
      "Severity describes potential impact. Confidence, priority, and response decisions are separate.",
  },
  {
    question:
      "Which fictional alert should often receive the highest review priority?",
    choices: [
      "The alert with the highest platform severity in every case.",
      "The alert with the most records.",
      "The alert with the strongest combination of active mission impact, time sensitivity, privilege, scope, source-health risk, and response opportunity.",
      "The newest alert automatically.",
    ],
    answer: 2,
    explanation:
      "Priority should reflect mission and evidence conditions rather than one platform label or count.",
  },
  {
    question:
      "A fictional required source is Blind across several critical services. How should this affect priority?",
    choices: [
      "Lower priority because confidence about activity is low.",
      "Potentially raise priority because broad evidence loss creates urgent false-negative and reassessment risk.",
      "Close related alerts as true negatives.",
      "Ignore the source-health alert.",
    ],
    answer: 1,
    explanation:
      "There may be High confidence in the source outage and Unknown confidence about activity during the gap. The outage itself can be urgent.",
  },
  {
    question:
      "Why should severity and confidence remain separate?",
    choices: [
      "Because severity is not useful.",
      "Because potential impact and evidence certainty are different dimensions.",
      "Because confidence always determines response.",
      "Because High confidence means High severity.",
    ],
    answer: 1,
    explanation:
      "A condition can have high potential impact with incomplete evidence or strong evidence with limited impact.",
  },
  {
    question:
      "Which fictional queue override is strongest?",
    choices: [
      "Move an alert higher because an analyst feels worried.",
      "Increase priority after confirmed active service impact, widening scope, source loss, or a short response opportunity is documented.",
      "Move every High severity alert to the top permanently.",
      "Lower every Expected alert permanently.",
    ],
    answer: 1,
    explanation:
      "Overrides should be evidence-based, owned, documented, time-bounded, and connected to mission decisions.",
  },
  {
    question:
      "What is the main purpose of priority aging?",
    choices: [
      "To make every old alert High severity.",
      "To prevent unresolved alerts from starving when deadlines, scope, source health, or impact require renewed attention.",
      "To close alerts automatically.",
      "To replace owner escalation.",
    ],
    answer: 1,
    explanation:
      "Aging ensures queue decisions remain current, but it should still consider mission and evidence context.",
  },
  {
    question:
      "Which public portfolio approach is safest?",
    choices: [
      "Use real queue screenshots with blurred identities.",
      "Use real service names with fake alert scores.",
      "Invent every organization, alert, score, source, identity, service, owner, date, decision, and outcome.",
      "Use internal alert titles without source fields.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real systems, people, suppliers, priorities, and defensive capabilities.",
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

export default function AlertSeverityAndPriorityPage() {
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
              Lesson 4 of 10
            </span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-100">
              Severity, Confidence, Priority, Urgency, and Mission Impact
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A6.4 Alert Severity and Priority
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional defenders rank alert work by separating
            potential impact, evidence certainty, mission importance, privilege,
            scope, source health, active effect, time sensitivity, response
            opportunity, recoverability, and owner expectations.
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
          lessonTitle="Alert Severity and Priority"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented alerts, scores, identities, services, users, sources, owners, dates, decisions, impacts, and outcomes.",
            "I will distinguish fictional severity, confidence, priority, response urgency, mission impact, scope, active effect, source health, and recoverability.",
            "I will not treat a High severity label as proof that an alert interpretation is correct or that a response action is authorized.",
            "I will consider active user or service impact, broad source loss, widening scope, privilege, time sensitivity, and response opportunity.",
            "I will document queue aging, overrides, owners, deadlines, limitations, and review triggers.",
            "I will not access, review, query, prioritize, triage, suppress, escalate, investigate, or modify any real alert, SIEM, account, endpoint, network, domain, service, supplier, platform, case, or organization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Highest-Severity Alert Is Not Always the First Alert to Review"
        >
          <p className="leading-8">
            A fictional queue contains three alerts. One is High severity with
            Moderate confidence and no confirmed impact. One is Medium severity
            with High confidence and current disruption to a critical
            student-support service. One is Low severity but confirms a broad
            source Blind period affecting several important detections. A
            platform-severity queue would place the High alert first and the
            source-health alert last. A mission-aware queue may rank them
            differently.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak queue rule
              </p>
              <p className="mt-2 leading-7">
                “Review every High alert before every Medium or Low alert.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong queue rule
              </p>
              <p className="mt-2 leading-7">
                “Rank fictional work using mission impact, active effect,
                privilege, scope, source health, confidence, time sensitivity,
                response opportunity, recoverability, and owner needs.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Severity estimates what could matter. Confidence estimates how
            strongly evidence supports the current interpretation. Priority
            decides what should be reviewed next.
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
          title="Queue Decisions Allocate Limited Defensive Attention"
        >
          <p className="leading-8">
            Fictional analysts cannot review every alert at the same time.
            Priority decisions determine which evidence receives attention,
            which owners are contacted, which deadlines apply, which source
            outages are restored first, and which users or services receive
            faster support. A weak priority model can delay active impact,
            overreact to uncertain alerts, starve quieter cases, or hide broad
            coverage loss.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Impact-aware",
                "Use fictional mission, service, identity, supplier, privacy, availability, and recovery consequences.",
              ],
              [
                "Evidence-aware",
                "Use fictional source health, provenance, timing, mappings, alternatives, and confidence.",
              ],
              [
                "Time-aware",
                "Use fictional active effect, response opportunity, queue age, deadlines, widening scope, and recoverability.",
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
          title="The P-R-I-O-R-I-T-Y Method"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "P — Potential impact",
                "Estimate fictional consequences for users, services, identity, suppliers, privacy, evidence, availability, and recovery.",
              ],
              [
                "R — Reliability of evidence",
                "Review fictional provenance, field meaning, source health, timing, relationships, alternatives, and confidence.",
              ],
              [
                "I — Importance to mission",
                "Connect fictional alerts to critical services, privileged authority, sensitive data, administrative functions, and user outcomes.",
              ],
              [
                "O — Ongoing effect",
                "Identify fictional current user disruption, service degradation, continuing authority, privacy effect, evidence loss, or recovery blockage.",
              ],
              [
                "R — Reach and scope",
                "Estimate fictional identities, devices, services, destinations, users, environments, and periods affected or uncertain.",
              ],
              [
                "I — Immediate timing",
                "Review fictional deadlines, session state, expiration, evidence volatility, widening scope, support windows, and response opportunity.",
              ],
              [
                "T — Trust boundaries and owners",
                "Use fictional identity, service, supplier, change, privacy, source, and risk owners for current context and decision rights.",
              ],
              [
                "Y — Yield a documented queue decision",
                "Assign fictional severity, confidence, priority, review deadline, owner, override, aging trigger, and non-proof statement.",
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
              Decision-ready priority statement
            </p>
            <p className="mt-2 leading-7">
              This fictional alert has High potential severity, Moderate
              evidence confidence, and High analyst priority because privileged
              authority may still be active, the response opportunity is short,
              and the service is critical, while authorization evidence remains
              incomplete.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Severity and Priority Decisions"
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
            Evaluate Ten Priority Dimensions
          </h2>

          <div className="mt-6 grid gap-5">
            {dimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.dimension}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Defender question
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.question}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Fictional evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Common error
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.commonError}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong use
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strongUse}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Use Nine Severity, Confidence, and Priority Levels"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {scales.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.level}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.meaning}
                </p>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Fictional examples
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.examples}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Evidence requirement
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidenceNeed}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 3"
          title="Apply a Ten-Step Priority Model"
        >
          <div className="grid gap-5">
            {priorityModel.map((item) => (
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

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Risk if skipped
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.risk}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Rank Six Fictional Queue Cases"
        >
          <div className="grid gap-5">
            {queueCases.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Platform severity", item.platformSeverity],
                    ["Evidence confidence", item.confidence],
                    ["Mission relationship", item.mission],
                    ["Scope", item.scope],
                    ["Active effect", item.activeEffect],
                    ["Source health", item.sourceHealth],
                    ["Recommended priority", item.priority],
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
          eyebrow="Instructional Section 5"
          title="Use Eight Evidence-Based Overrides"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {overrides.map((item) => (
              <article
                key={item.trigger}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.trigger}
                </h3>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Default change
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.defaultChange}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Required evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.requiredEvidence}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Safeguard
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.safeguard}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Change Priority with Source Health"
        >
          <div className="grid gap-5">
            {sourceHealthEffects.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-emerald-100">
                  {item.state}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Confidence effect
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.confidenceEffect}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Priority effect
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.priorityEffect}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Analyst caution
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.caution}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Validate Twelve Priority Cases"
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
          title="Measure Eight Priority Quality Dimensions"
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
          eyebrow="Fictional Priority Architecture"
          title="Northbridge Queue Decision Model"
        >
          <p className="leading-8">
            This conceptual architecture is completely invented and
            intentionally non-operational. It teaches alert ranking without
            real products, sources, alert titles, risk scores, identities,
            services, cases, screenshots, incidents, suppliers, or internal
            priorities.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Alert evidence", "Observation, provenance, source health, timing"],
                ["Mission context", "Users, services, identity, suppliers, recovery"],
                ["Impact context", "Privilege, scope, active effect, criticality"],
                ["Time context", "Deadlines, response opportunity, aging, recovery"],
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
                Fictional Priority Decision Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Severity", "Potential consequence if the risk is true"],
                  ["Confidence", "Strength of current evidence and context"],
                  ["Priority", "Urgency of analyst review compared with other work"],
                  ["Response urgency", "Time pressure for authorized decisions"],
                  ["Scope", "Affected identities, services, users, environments"],
                  ["Source health", "Reliability, gaps, conflicts, recovery state"],
                  ["Overrides", "Active impact, widening scope, owner delay, aging"],
                  ["Governance", "Owners, deadlines, metrics, review, residual risk"],
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
                ["Analyst output", "Queue rank, rationale, questions, deadline"],
                ["Owner output", "Impact, authorization, service, source decisions"],
                ["Leadership output", "Workload, risk, gaps, resources, milestones"],
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
          title="Fake Northbridge Alert Priority Dashboard"
          subtitle="Fictional severity, confidence, mission impact, source health, queue age, active effect, overrides, and priority debt for training only."
          metrics={[
            {
              label: "Alerts with separated severity and confidence",
              value: "18 / 22",
              note: "Four fictional alerts still use one combined risk label without evidence-confidence rationale.",
            },
            {
              label: "Alerts beyond review deadline",
              value: "5",
              note: "Three require owner response, one has widening scope, and one remains blocked by source recovery.",
            },
            {
              label: "Open fictional priority-debt items",
              value: "8",
              note: "Criticality, aging rules, source-health overrides, owner deadlines, active-impact metrics, queue starvation, documentation, and retirement remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Queue Ranking Requires Immediate Recalculation"
          severity="High"
          time="3:52 PM"
          source="Fake Northbridge Priority Governance Console"
          details="The fictional queue ranks a High-severity supplier alert above a Medium-severity critical-service outage and a Low-severity broad Blind source period. Five alerts exceed deadlines, one alert has widening scope, and four alerts combine severity and confidence into one label."
          recommendation="Recalculate fictional priority using active mission impact, privilege, scope, source health, time sensitivity, response opportunity, recoverability, queue age, owners, and evidence confidence. Document overrides and preserve non-proof statements."
        />

        <FakeLogPanel
          title="Fake Priority Decision Timeline"
          logs={[
            "09:00 QUEUE alerts='22'",
            "09:02 ALERT stale-role severity='high'",
            "09:03 ALERT stale-role confidence='moderate'",
            "09:04 ALERT stale-role priority='high'",
            "09:05 ALERT service-errors severity='medium'",
            "09:06 ALERT service-errors confidence='high'",
            "09:07 IMPACT users='broad'",
            "09:08 ALERT service-errors priority='high'",
            "09:09 ALERT source-blind severity='low'",
            "09:10 SOURCE network='blind'",
            "09:11 COVERAGE services='3'",
            "09:12 ALERT source-blind priority='high'",
            "09:13 ALERT supplier severity='high'",
            "09:14 ALERT supplier confidence='low'",
            "09:15 ALERT supplier priority='medium'",
            "09:16 QUEUE overdue='5'",
            "09:17 SCOPE changed='1-alert'",
            "09:18 OVERRIDE active-impact='required'",
            "09:19 READINESS queue-model='conditional'",
            "15:52 ALERT issue='priority-recalculation'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What Priority Evidence Supports—and What It Does Not Prove
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
                    ["Priority use", item.use],
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
          title="Which Queue Order Is Best Supported?"
          question="Which fictional alert should receive first analyst review?"
          evidence={[
            "Alert A is High severity with Moderate confidence, one privileged identity, one active session, and no confirmed service impact.",
            "Alert B is Medium severity with High confidence and current disruption to a critical student-support service affecting many users.",
            "Alert C is Low severity with High confidence that a required network source is Blind across three service zones, creating Unknown activity coverage.",
            "Alert A has a short authorization-response window.",
            "Alert B has confirmed current mission impact.",
            "Alert C creates broad false-negative and reassessment risk.",
            "All three require prompt attention from different owners.",
          ]}
          options={[
            "Review Alert B first for active critical-service impact, then Alert A for time-sensitive privileged authority, while assigning immediate parallel source-owner work for Alert C and documenting the exact queue rationale.",
            "Review Alert A first only because its platform severity is High.",
            "Review Alert C last because its severity is Low.",
            "Choose randomly because the alerts have different dimensions.",
          ]}
          bestAnswer={0}
          explanation="The first option uses current mission impact, time sensitivity, privilege, source-health risk, and parallel ownership rather than severity alone."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Severity and Priority Errors"
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
          title="Build the Northbridge Alert Severity and Priority Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            access, copy, sanitize, upload, inspect, query, prioritize, triage,
            suppress, escalate, investigate, configure, or modify any real
            alert, SIEM, source, account, endpoint, network, domain, service,
            supplier, platform, case, or organization.
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
          title="A Medium Alert Has Confirmed Critical-Service Impact"
          scenario="A fictional Medium-severity application alert has High confidence and confirmed disruption to a critical student-support service. A separate High-severity supplier alert has Low confidence, no confirmed impact, and several approved explanations."
          choices={[
            {
              label: "Choice A",
              response:
                "Prioritize the fictional service-impact alert first, keep the supplier alert under prompt evidence review, and document severity, confidence, mission impact, active effect, owners, and deadlines separately.",
              outcome:
                "Best defensive choice. Current mission impact can outweigh a higher but uncertain platform severity.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Always review the High-severity supplier alert first.",
              outcome:
                "Weak. Severity alone does not determine queue order.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Lower the service alert because it is only Medium severity.",
              outcome:
                "Weak. Confirmed active impact and criticality require prompt attention.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Low-Severity Source Alert Covers a Broad Blind Period"
          scenario="A fictional network-source alert is labeled Low severity, but the source is Blind across three critical service zones for forty minutes. Related activity during the gap is Unknown."
          choices={[
            {
              label: "Choice A",
              response:
                "Raise fictional review priority for source restoration, affected-detection review, alternate evidence, historical reassessment, owner coordination, and recovery validation while keeping activity conclusions Unknown.",
              outcome:
                "Best choice. Broad evidence loss creates urgent coverage risk even when the source alert itself has low potential impact.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave the alert at the bottom of the queue because severity is Low.",
              outcome:
                "Weak. Severity does not represent the full coverage and false-negative urgency.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Close all related alerts as true negatives.",
              outcome:
                "Weak. Blind evidence cannot support absence conclusions.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend a Priority Queue before a Review Board"
        >
          <p className="leading-8">
            Fictional Northbridge has twenty-two open alerts. The current queue
            sorts only by platform severity and alert age. Critical-service
            impact, source Blind periods, privilege, confidence, widening scope,
            active recovery, owner deadlines, and queue starvation are not part
            of the model.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Defend severity",
                "Explain fictional potential consequence using criticality, privilege, data, scope, privacy, availability, and recovery.",
              ],
              [
                "Defend confidence",
                "Explain fictional source health, provenance, timing, field meaning, alternatives, owner evidence, and missing-data limits.",
              ],
              [
                "Defend priority",
                "Explain fictional mission impact, active effect, response opportunity, scope, source loss, time sensitivity, and recoverability.",
              ],
              [
                "Defend overrides",
                "Explain fictional active-impact, widening-scope, source-Blind, owner-nonresponse, expected-context, and aging changes.",
              ],
              [
                "Defend fairness and workload",
                "Explain fictional queue starvation, duplicate inflation, owner distribution, deadlines, analyst capacity, and escalation.",
              ],
              [
                "Defend governance",
                "Explain fictional owners, metrics, review triggers, audits, exceptions, residual risk, documentation, and model retirement.",
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
              Produce a fictional severity scale, confidence scale, priority
              scale, decision matrix, ranked queue, override register,
              source-health model, aging rules, queue-starvation review,
              validation matrix, metric dictionary, owner matrix,
              priority-debt register, residual-risk statement, leadership
              summary, and public portfolio boundary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Alert Severity and Priority Checklist"
          items={[
            "I can distinguish fictional severity, confidence, priority, response urgency, mission impact, active effect, scope, source health, time sensitivity, recoverability, and owner expectation.",
            "I can explain why a High severity label does not prove the alert interpretation.",
            "I can explain why a Medium or Low severity alert may receive High review priority.",
            "I can prioritize fictional active service impact, broad source loss, widening scope, privileged authority, short response opportunities, and complex recovery.",
            "I can preserve Low or Moderate confidence when evidence is missing, delayed, conflicting, blind, or recovering.",
            "I can define fictional Low, Medium, and High severity, confidence, and priority levels with evidence requirements.",
            "I can create evidence-based fictional overrides for active impact, source loss, scope growth, owner nonresponse, expected context, and aging.",
            "I can prevent fictional duplicate counts and replay from inflating scope and queue urgency.",
            "I can define fictional review deadlines, aging rules, escalation triggers, and queue-starvation controls.",
            "I can measure fictional priority accuracy, separation, active-impact response, source-health handling, override quality, explanation quality, and debt.",
            "I can document fictional owners, limitations, review triggers, residual risk, and lifecycle decisions.",
            "I can create a completely fictional priority artifact without exposing real alerts, scores, identities, services, suppliers, queues, cases, or internal priorities.",
          ]}
        />

        <MiniQuiz
          title="A6.4 Mini Quiz: Alert Severity and Priority"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Alert Severity and Priority Package for the Northbridge Student-Support Cooperative. Include mission, stakeholders, alert queue purpose, severity definitions, Low severity, Medium severity, High severity, confidence definitions, Low confidence, Moderate confidence, High confidence, priority definitions, Low priority, Medium priority, High priority, response urgency, mission impact, service criticality, identity criticality, supplier criticality, data sensitivity, privilege, scope, active effect, user impact, service impact, privacy impact, availability impact, evidence impact, recovery impact, time sensitivity, recoverability, response opportunity, owner expectations, source health, Healthy behavior, Conditional behavior, Degraded behavior, Blind behavior, Conflicting behavior, Recovering behavior, alert observations, evidence, provenance, timing, alternatives, non-proof statements, severity rationale, confidence rationale, priority rationale, review deadlines, owner deadlines, aging rules, queue starvation controls, active-impact overrides, source-Blind overrides, widening-scope overrides, short-response-window overrides, expected-context overrides, owner-nonresponse overrides, recovery overrides, duplicate handling, replay handling, grouping, break conditions, ranked fictional queue, comparison matrix, positive tests, low-severity/high-priority tests, high-severity/low-confidence tests, active-impact tests, source-Blind tests, widening-scope tests, queue-aging tests, duplicate tests, conflicting-evidence tests, recovery tests, owner-context tests, privacy tests, expected outcomes, observed outcomes, defects, corrective actions, validation gates, priority-accuracy metrics, severity-confidence-separation metrics, active-impact-response metrics, source-health-priority metrics, queue-starvation metrics, override-quality metrics, explanation-quality metrics, priority debt, owner matrix, change history, review triggers, residual risks, model retirement, leadership summary, reflection, and a statement that every organization, alert, score, source, identity, service, owner, date, decision, and outcome is invented."
          tips={[
            "Use fictional mission impact and active effect rather than platform severity alone.",
            "Separate potential severity, evidence confidence, review priority, response urgency, and authorized action.",
            "Show why broad source loss and Low-confidence/High-impact alerts may still require urgent review.",
            "Include aging, overrides, owner deadlines, duplicate control, validation, metrics, residual risk, and lifecycle.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Triage Questions and Evidence Review?"
        >
          <p className="leading-8">
            Before moving to A6.5, rate your readiness from 1 to 5 for severity,
            confidence, priority, mission impact, privilege, scope, active
            effect, source health, time sensitivity, recoverability, overrides,
            aging, queue starvation, metrics, ownership, and complete
            fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why fictional severity, confidence, and priority are different decisions.",
              "I can rank a fictional queue using mission impact and evidence rather than platform severity alone.",
              "I can prioritize active service impact and broad source loss appropriately.",
              "I can preserve Low or Moderate confidence while keeping High potential severity.",
              "I can define overrides for widening scope, source health, owner delay, aging, and recovery.",
              "I can explain why lower confidence does not always mean lower urgency.",
              "I can evaluate queue quality using accuracy, deadlines, starvation, explanations, and debt.",
              "I can produce a safe fictional priority package without copying real queues, scores, alerts, or services.",
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
            Record one fictional alert, its severity, confidence, priority,
            active impact, source-health state, review deadline, and one question
            you will carry into A6.5.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Fictional severity describes potential impact, confidence describes evidence certainty, and priority describes review urgency.",
            "A High severity label does not prove the alert interpretation or authorize response.",
            "A Medium or Low severity alert may receive High priority because of active mission impact, broad source loss, widening scope, or a short response opportunity.",
            "Low confidence does not always mean low urgency, especially when privileged authority, source Blind periods, or active service impact are involved.",
            "Mission impact, privilege, scope, active effect, source health, time sensitivity, recoverability, and owner expectations belong in queue decisions.",
            "Source-health states should affect both confidence and priority without converting missing evidence into absence.",
            "Queue aging, owner deadlines, widening scope, and source-health changes should trigger documented reprioritization.",
            "Duplicate records, replay, and grouping can distort alert count and apparent scope.",
            "Priority quality requires accuracy, separation, active-impact response, source-health handling, starvation review, override governance, explanations, and debt tracking.",
            "Every CyberShield priority artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, learn how fictional analysts turn prioritized alerts into
            structured triage questions, purpose-limited evidence requests,
            source-health review, alternative explanations, ownership,
            decision states, escalation, closure, and reopening.
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