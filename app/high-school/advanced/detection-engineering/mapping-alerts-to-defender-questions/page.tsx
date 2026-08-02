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
const modulePath = `${trackPath}/detection-engineering`;
const previousLesson = `${modulePath}/detection-tuning-and-context`;
const nextLesson = `${modulePath}/testing-detections-safely-with-fake-data`;

const objectives = [
  "Explain why every fictional alert should map to a documented defender question, decision purpose, evidence requirement, owner, and non-proof statement.",
  "Build structured fictional defender questions covering observation, identity, device, service, destination, authorization, timing, sequence, source health, scope, impact, ownership, alternatives, next evidence, escalation, closure, and lifecycle.",
  "Separate fictional alert facts, derived context, hypotheses, unknowns, source-health limitations, confidence, severity, priority, response, and confirmed outcomes.",
  "Evaluate fictional alert quality by determining whether the alert helps an analyst answer the intended question without causing unsupported certainty, excessive evidence hunting, privacy exposure, or harmful response.",
  "Create a portfolio-ready fictional alert-to-question mapping package containing question trees, evidence maps, analyst prompts, decision states, escalation criteria, closure criteria, ownership, metrics, and review triggers.",
];

const vocabulary = [
  [
    "Defender question",
    "A fictional question that an analyst or owner must answer to make a bounded defensive decision.",
  ],
  [
    "Alert-to-question mapping",
    "A fictional documented connection among an alert, its mission risk, defender question, evidence, analyst decision, owner, and lifecycle.",
  ],
  [
    "Primary question",
    "The fictional main question the alert is intended to help answer.",
  ],
  [
    "Supporting question",
    "A fictional question that adds identity, service, destination, timing, authorization, source-health, scope, impact, or ownership context.",
  ],
  [
    "Decision question",
    "A fictional question whose answer directly affects escalation, closure, evidence collection, tuning, or risk acceptance.",
  ],
  [
    "Non-proof statement",
    "A fictional statement explaining what the alert and evidence do not establish.",
  ],
  [
    "Observation",
    "A fictional description of what supplied evidence shows without unsupported conclusions.",
  ],
  [
    "Derived context",
    "Fictional information calculated, normalized, enriched, grouped, or inferred from one or more sources.",
  ],
  [
    "Evidence request",
    "A fictional targeted request for records or owner context needed to answer a defender question.",
  ],
  [
    "Question tree",
    "A fictional branching structure that organizes the next question according to evidence and decision state.",
  ],
  [
    "Decision state",
    "A fictional status such as New, In Review, Conditional, Escalated, Expected, Resolved, Unknown, Source-Degraded, or Reopened.",
  ],
  [
    "Escalation criterion",
    "A fictional evidence-based condition that justifies broader or faster review.",
  ],
  [
    "Closure criterion",
    "A fictional evidence-based condition that justifies ending active review while documenting outcome and residual risk.",
  ],
  [
    "Reopen criterion",
    "A fictional future event or evidence change requiring a closed case to be reviewed again.",
  ],
  [
    "Analyst prompt",
    "A fictional concise instruction that helps an analyst interpret evidence and ask the next question.",
  ],
  [
    "Alert enrichment",
    "Fictional identity, asset, service, device, destination, owner, change, authorization, source-health, or mission context displayed with an alert.",
  ],
  [
    "Question coverage",
    "The fictional extent to which alert evidence and guidance support the intended defender questions.",
  ],
  [
    "Question usefulness",
    "The fictional degree to which a question leads toward a defensible decision rather than unnecessary information gathering.",
  ],
  [
    "Question ownership",
    "The fictional role accountable for answering or coordinating a specific defender question.",
  ],
  [
    "Evidence sufficiency",
    "The fictional degree to which available evidence is adequate for a bounded decision.",
  ],
  [
    "Decision confidence",
    "A fictional rating describing how strongly evidence supports the current decision.",
  ],
  [
    "Decision latency",
    "The fictional time between alert creation and a sufficiently supported analyst or owner decision.",
  ],
  [
    "Question debt",
    "Fictional risk created when alerts remain active without clear questions, owners, evidence, closure, or review triggers.",
  ],
  [
    "Mapping review trigger",
    "A fictional event requiring revalidation, such as source, field, logic, identity, service, workflow, policy, owner, privacy, or mission change.",
  ],
];

const mappingPrinciples = [
  {
    principle: "Every alert needs a purpose",
    description:
      "A fictional alert should exist because a defender must answer a meaningful question.",
    strongPractice:
      "Map a stale-role alert to whether emergency authority remained effectively active beyond approval.",
    failure:
      "Analysts may receive data without knowing which decision it should support.",
  },
  {
    principle: "Lead with observation",
    description:
      "A fictional alert should state what matched before presenting hypotheses or conclusions.",
    strongPractice:
      "State that a role appears assigned after expiration while effective access remains unconfirmed.",
    failure:
      "Alert titles may imply compromise, intent, or impact that the evidence does not prove.",
  },
  {
    principle: "Ask bounded questions",
    description:
      "Fictional questions should be answerable through defined evidence and should support a specific decision.",
    strongPractice:
      "Ask whether a current extension covers the same identity, role, purpose, destination, and time.",
    failure:
      "Broad questions such as 'Is this malicious?' encourage vague or inconsistent analysis.",
  },
  {
    principle: "Order questions by decision value",
    description:
      "Fictional questions should begin with evidence that changes urgency, scope, authorization, or response.",
    strongPractice:
      "Check source health and effective authority before collecting unrelated historical detail.",
    failure:
      "Analysts may spend time on low-value evidence while urgent facts remain unknown.",
  },
  {
    principle: "Separate fact, context, and hypothesis",
    description:
      "Fictional alert content should distinguish direct evidence, derived enrichment, owner statements, and possible explanations.",
    strongPractice:
      "Label the role state as direct evidence and service criticality as derived enrichment.",
    failure:
      "Derived or stale context may be mistaken for authoritative fact.",
  },
  {
    principle: "Make source health visible",
    description:
      "Fictional questions and decisions must change when required evidence is delayed, incomplete, conflicting, or blind.",
    strongPractice:
      "Return Conditional when group membership is delayed and effective access cannot be confirmed.",
    failure:
      "The alert may create false certainty or close incorrectly.",
  },
  {
    principle: "Preserve alternative explanations",
    description:
      "Fictional question trees should include approved change, maintenance, extension, assignment, recovery, source defect, and policy difference possibilities.",
    strongPractice:
      "Ask which explanation is supported and which evidence would distinguish alternatives.",
    failure:
      "Analysts may treat the first plausible story as confirmed.",
  },
  {
    principle: "Connect questions to owners",
    description:
      "Fictional identity, service, source, supplier, change, privacy, and risk questions require accountable roles.",
    strongPractice:
      "Route source-health questions to the source owner and service-impact questions to the service owner.",
    failure:
      "Cases remain open because no one owns the missing answer.",
  },
  {
    principle: "Define escalation and closure",
    description:
      "Fictional mappings should state which evidence increases urgency and which evidence supports resolution.",
    strongPractice:
      "Escalate on confirmed effective privilege and active impact; close only after authority, sessions, source health, and owner validation are addressed.",
    failure:
      "Cases may escalate too early or close while important uncertainty remains.",
  },
  {
    principle: "Maintain question maps",
    description:
      "Fictional questions, evidence, owners, criteria, and alert presentation must change with the detection environment.",
    strongPractice:
      "Review after identity, source, schema, service, workflow, policy, privacy, or mission change.",
    failure:
      "Analyst guidance becomes stale even when the alert still appears active.",
  },
];

const questionDomains = [
  {
    domain: "Observation",
    primaryQuestion:
      "What fictional condition matched, and which supplied evidence directly supports that observation?",
    supportingQuestions:
      "Which fields, values, relationships, time window, sequence, or state produced the result? Which logic version evaluated them?",
    decisionUse:
      "Establish the bounded alert fact before interpretation.",
    weakQuestion:
      "What attack happened?",
    evidence:
      "Detection result, direct source records, logic version, event time, processing time, and source health.",
  },
  {
    domain: "Identity",
    primaryQuestion:
      "Which fictional user, service, supplier, device, privileged, emergency, or recovery identity is involved?",
    supportingQuestions:
      "What role, assignment, sponsor, owner, session, expiration, revocation, and peer context applies?",
    decisionUse:
      "Determine authority, accountability, lifecycle, and potential scope.",
    weakQuestion:
      "Who is the bad actor?",
    evidence:
      "Identity source, role, group, approval, session, assignment, owner, and source-health records.",
  },
  {
    domain: "Device",
    primaryQuestion:
      "Which fictional device or device class participated, and was it expected for this identity and workflow?",
    supportingQuestions:
      "Is it managed, administrative, service, supplier, guest, personal, event, or recovery equipment? Is its ownership and lifecycle current?",
    decisionUse:
      "Distinguish expected device relationships from new or unsupported contexts.",
    weakQuestion:
      "Is the device suspicious?",
    evidence:
      "Device inventory, owner, class, onboarding, health, network class, replacement, support, and retirement.",
  },
  {
    domain: "Service and asset",
    primaryQuestion:
      "Which fictional service, application, workflow, data category, or mission capability is involved?",
    supportingQuestions:
      "What is its purpose, owner, criticality, dependency, operating state, user impact, and recovery objective?",
    decisionUse:
      "Connect technical evidence to mission importance and safe response.",
    weakQuestion:
      "Is this system important?",
    evidence:
      "Service catalog, owner, dependency map, criticality, change, user journey, support, and recovery records.",
  },
  {
    domain: "Destination and object",
    primaryQuestion:
      "Which fictional destination, zone, service group, resolver, application, supplier, object, or data scope was reached?",
    supportingQuestions:
      "Is it approved for the identity and service? What policy, DNS, application, and owner evidence confirms the relationship?",
    decisionUse:
      "Evaluate whether the observed relationship fits current purpose and policy.",
    weakQuestion:
      "Is the destination dangerous?",
    evidence:
      "Network, DNS, application, policy, service map, object authorization, change, and owner evidence.",
  },
  {
    domain: "Authorization",
    primaryQuestion:
      "Was the fictional identity, action, destination, object, role, and time authorized under current conditions?",
    supportingQuestions:
      "Which approval, assignment, extension, change, exception, sponsor, purpose, expiration, and revocation applies?",
    decisionUse:
      "Separate valid identity or successful action from authorized use.",
    weakQuestion:
      "Did the login work?",
    evidence:
      "Approval, role, assignment, destination, operation, session, policy, exception, expiration, and owner confirmation.",
  },
  {
    domain: "Timing and sequence",
    primaryQuestion:
      "When did the fictional behavior occur, and did approval, assignment, action, result, closure, and revocation appear in the expected order?",
    supportingQuestions:
      "Which event, collection, processing, alert, owner-confirmation, and recovery times are reliable?",
    decisionUse:
      "Determine expiration, workflow difference, delay, sequence, and response opportunity.",
    weakQuestion:
      "Did it happen after hours?",
    evidence:
      "Event time, collection time, processing time, schedule, window, clock alignment, sequence, and source health.",
  },
  {
    domain: "Source health",
    primaryQuestion:
      "Can the fictional evidence support normal confidence for this scope, field set, and time period?",
    supportingQuestions:
      "Are freshness, completeness, schema, transformation, duplication, clock, coverage, queue, access, and blind periods acceptable?",
    decisionUse:
      "Prevent false certainty, false absence, and incorrect closure.",
    weakQuestion:
      "Is the collector Green?",
    evidence:
      "Health metrics, source owner, field dictionary, schema, queue, blind-period record, alternate sources, and recovery status.",
  },
  {
    domain: "Scope",
    primaryQuestion:
      "How broad is the fictional condition across identities, devices, services, destinations, objects, zones, suppliers, and time?",
    supportingQuestions:
      "Is this one record, one case, one continuing state, several related events, or a wider pattern?",
    decisionUse:
      "Determine priority, containment concepts, owner involvement, and evidence needs.",
    weakQuestion:
      "How bad is it?",
    evidence:
      "Correlated alerts, identity, device, service, destination, session, object, time, and coverage evidence.",
  },
  {
    domain: "Impact",
    primaryQuestion:
      "Which fictional users, services, data, privacy, suppliers, policy, availability, evidence, or recovery outcomes are affected or at risk?",
    supportingQuestions:
      "Is impact active, potential, prevented, unknown, contained, reversible, or growing?",
    decisionUse:
      "Set severity, priority, stakeholder communication, and response boundaries.",
    weakQuestion:
      "Is this critical?",
    evidence:
      "Application result, user reports, service state, data scope, support, owner validation, recovery, and source health.",
  },
  {
    domain: "Alternative explanations",
    primaryQuestion:
      "Which fictional approved or non-harmful explanations remain plausible?",
    supportingQuestions:
      "Could change, maintenance, migration, extension, assignment, recovery, source delay, stale documentation, peer uniqueness, or duplicate evidence explain the alert?",
    decisionUse:
      "Reduce unsupported certainty and guide targeted evidence collection.",
    weakQuestion:
      "Why did the attacker do this?",
    evidence:
      "Change, maintenance, extension, assignment, owner, source health, peer, service, policy, and workflow records.",
  },
  {
    domain: "Ownership and next evidence",
    primaryQuestion:
      "Who owns the next fictional question, and what specific evidence is needed?",
    supportingQuestions:
      "Which detection, identity, service, source, supplier, change, privacy, risk, or leadership owner must respond by when?",
    decisionUse:
      "Turn an alert into coordinated, accountable progress.",
    weakQuestion:
      "Who should investigate?",
    evidence:
      "Responsibility matrix, evidence request, due date, response, escalation path, and case notes.",
  },
  {
    domain: "Escalation",
    primaryQuestion:
      "Which fictional evidence justifies broader, faster, or higher-level review?",
    supportingQuestions:
      "Is there confirmed effective privilege, active user impact, widening scope, source loss, critical service effect, repeated failure, or owner nonresponse?",
    decisionUse:
      "Increase priority proportionately and safely.",
    weakQuestion:
      "Does the alert say High?",
    evidence:
      "Severity, confidence, scope, impact, source health, owner response, service criticality, and time sensitivity.",
  },
  {
    domain: "Closure and reopening",
    primaryQuestion:
      "Which fictional evidence supports closure, and which future condition should reopen the case?",
    supportingQuestions:
      "Were authority, sessions, service state, source health, owner validation, user impact, corrective action, residual risk, and documentation addressed?",
    decisionUse:
      "End active review without hiding uncertainty or future recurrence.",
    weakQuestion:
      "Did the alert stop?",
    evidence:
      "Final source state, owner confirmation, action result, validation, user outcome, residual risk, lessons learned, and review triggers.",
  },
];

const alertLayers = [
  {
    layer: "Alert identity",
    requiredContent:
      "Fictional alert identifier, detection identifier, logic version, creation time, and current state.",
    analystValue:
      "Supports traceability across design, tests, changes, cases, and lifecycle.",
    risk:
      "A dramatic title without a stable reference makes review inconsistent.",
  },
  {
    layer: "Primary defender question",
    requiredContent:
      "The exact fictional question the alert is intended to help answer.",
    analystValue:
      "Focuses triage on one bounded decision.",
    risk:
      "Without it, analysts may gather unrelated evidence.",
  },
  {
    layer: "Observation",
    requiredContent:
      "The fictional condition that matched, written without unsupported cause, intent, or impact.",
    analystValue:
      "Separates evidence from interpretation.",
    risk:
      "Alert language may imply a confirmed incident.",
  },
  {
    layer: "Supporting evidence",
    requiredContent:
      "Fictional source records, fields, time, relationship, sequence, state, and provenance.",
    analystValue:
      "Allows the observation to be verified.",
    risk:
      "Only showing a score or title hides why the alert exists.",
  },
  {
    layer: "Context and enrichment",
    requiredContent:
      "Fictional identity, device, service, destination, owner, change, authorization, peer, and mission context.",
    analystValue:
      "Improves precision and reduces evidence hunting.",
    risk:
      "Stale or excessive context creates false certainty and privacy exposure.",
  },
  {
    layer: "Source health",
    requiredContent:
      "Fictional freshness, completeness, timing, schema, coverage, conflicts, and blind-period state.",
    analystValue:
      "Explains confidence and missing-data behavior.",
    risk:
      "Green connectivity may be mistaken for complete healthy evidence.",
  },
  {
    layer: "Confidence, severity, and priority",
    requiredContent:
      "Separate fictional evidence confidence, potential impact, and review urgency.",
    analystValue:
      "Prevents importance from being confused with certainty.",
    risk:
      "One combined score can hide the reason for prioritization.",
  },
  {
    layer: "Alternatives and limits",
    requiredContent:
      "Fictional plausible explanations and explicit non-proof statements.",
    analystValue:
      "Reduces premature conclusions and directs evidence requests.",
    risk:
      "Analysts may treat the alert's first hypothesis as fact.",
  },
  {
    layer: "Next questions",
    requiredContent:
      "Ordered fictional identity, authorization, source-health, scope, impact, owner, and evidence prompts.",
    analystValue:
      "Creates a repeatable triage workflow.",
    risk:
      "Generic advice produces inconsistent investigations.",
  },
  {
    layer: "Decision criteria",
    requiredContent:
      "Fictional escalation, closure, Unknown, source-degraded, reopen, and response boundaries.",
    analystValue:
      "Supports consistent outcomes and handoffs.",
    risk:
      "Cases may remain open indefinitely or close too early.",
  },
];

const decisionStates = [
  {
    state: "New",
    meaning:
      "The fictional alert has been created, but evidence and ownership review have not begun.",
    requiredQuestion:
      "What condition matched, which defender question applies, and are required sources healthy?",
    exit:
      "Move to In Review, Source-Degraded, Expected, or Invalid Mapping.",
  },
  {
    state: "In Review",
    meaning:
      "A fictional analyst is evaluating evidence, context, alternatives, scope, impact, and ownership.",
    requiredQuestion:
      "Which next evidence will most change authorization, confidence, scope, impact, or priority?",
    exit:
      "Move to Conditional, Escalated, Expected, Resolved, Unknown, or Source-Degraded.",
  },
  {
    state: "Conditional",
    meaning:
      "The fictional observation is supported, but one important source, field, authorization, context, scope, or impact condition remains unresolved.",
    requiredQuestion:
      "Which limitation prevents normal confidence, and what evidence or owner can resolve it?",
    exit:
      "Move to Escalated, Expected, Resolved, Unknown, or Source-Degraded.",
  },
  {
    state: "Expected",
    meaning:
      "The fictional alert correctly reports an approved or benign condition that remains intentionally visible.",
    requiredQuestion:
      "Should the condition remain alert-visible, grouped, reprioritized, or tuned with precise context?",
    exit:
      "Move to Resolved after documentation or Reopened if scope changes.",
  },
  {
    state: "Source-Degraded",
    meaning:
      "The fictional alert cannot be interpreted normally because required evidence is delayed, incomplete, conflicting, stale, or blind.",
    requiredQuestion:
      "Which conclusions are unsupported, what alternate evidence exists, and when will reassessment occur?",
    exit:
      "Move to In Review, Conditional, Unknown, Escalated, or Resolved after source recovery.",
  },
  {
    state: "Unknown",
    meaning:
      "The fictional case cannot be classified confidently with available evidence.",
    requiredQuestion:
      "What is known, unknown, unobservable, and accepted as residual uncertainty?",
    exit:
      "Move to another state when new evidence appears or close with documented Unknown outcome.",
  },
  {
    state: "Escalated",
    meaning:
      "Fictional evidence justifies broader, faster, or higher-level review.",
    requiredQuestion:
      "Which confirmed scope, impact, authority, source loss, or time-sensitive condition supports escalation?",
    exit:
      "Move to Resolved, Conditional, Unknown, or Reopened after decision and validation.",
  },
  {
    state: "Resolved",
    meaning:
      "The fictional decision, action, validation, owner review, residual risk, and documentation meet closure criteria.",
    requiredQuestion:
      "What evidence supports closure, and which future change would reopen the case?",
    exit:
      "Remain closed or move to Reopened.",
  },
  {
    state: "Reopened",
    meaning:
      "New fictional evidence, recurrence, source recovery, owner disagreement, impact, or change invalidates the earlier closure.",
    requiredQuestion:
      "Which assumption or closure condition changed, and what must be reassessed?",
    exit:
      "Move through the review states again with updated evidence.",
  },
];

const evidenceRequestDesign = [
  {
    requestType: "Identity evidence request",
    weakRequest:
      "Send all user information.",
    strongRequest:
      "Provide the fictional identity category, role, assignment, sponsor, owner, expiration, revocation, and source-health state relevant to alert ALT-F-21.",
    privacyControl:
      "Exclude unrelated profile, personal, and historical details.",
    decision:
      "Determine authority, ownership, and lifecycle.",
  },
  {
    requestType: "Service evidence request",
    weakRequest:
      "Send the application logs.",
    strongRequest:
      "Provide the fictional operation category, result, object scope, service owner, expected workflow, change state, and source-health status for the alert window.",
    privacyControl:
      "Use object categories rather than unnecessary content.",
    decision:
      "Determine application purpose, result, scope, and impact.",
  },
  {
    requestType: "Network and destination request",
    weakRequest:
      "Send all traffic.",
    strongRequest:
      "Provide the fictional source group, destination class, direction, policy result, service relationship, timing, and sensor-health evidence for the defined period.",
    privacyControl:
      "Avoid unrelated destination histories or exact user activity.",
    decision:
      "Determine whether the relationship fits current service policy.",
  },
  {
    requestType: "DNS evidence request",
    weakRequest:
      "Send all DNS history.",
    strongRequest:
      "Provide the fictional requester group, resolver, question category, response category, cache state, policy result, timing, and resolver-health evidence related to the service.",
    privacyControl:
      "Limit naming evidence to the approved service question.",
    decision:
      "Determine whether resolution explains or contradicts the destination relationship.",
  },
  {
    requestType: "Change and maintenance request",
    weakRequest:
      "Was there a change?",
    strongRequest:
      "Provide the fictional change identifier, owner, approved scope, expected behavior, start, end, result, rollback, validation, and closure state.",
    privacyControl:
      "Exclude unnecessary internal configuration detail.",
    decision:
      "Determine whether the alert fits or exceeds approved change scope.",
  },
  {
    requestType: "Source-health request",
    weakRequest:
      "Is the source working?",
    strongRequest:
      "Provide fictional freshness, completeness, queue age, clock, schema, transformation, duplication, coverage, blind-period, and recovery evidence for required fields.",
    privacyControl:
      "Use operational health metadata rather than personal event detail.",
    decision:
      "Determine which conclusions and confidence levels are supportable.",
  },
  {
    requestType: "Owner confirmation request",
    weakRequest:
      "Is this normal?",
    strongRequest:
      "Confirm the fictional identity or service purpose, expected destination, authorization, operating state, user impact, change context, and any known exception for the exact alert period.",
    privacyControl:
      "Request only decision-relevant owner context.",
    decision:
      "Validate expected behavior, alternatives, impact, and next action.",
  },
  {
    requestType: "Closure validation request",
    weakRequest:
      "Can we close this?",
    strongRequest:
      "Confirm fictional authority state, active sessions, service result, source-health recovery, user outcome, corrective action, residual risk, and reopen trigger.",
    privacyControl:
      "Avoid collecting unrelated post-event activity.",
    decision:
      "Determine whether closure criteria are satisfied.",
  },
];

const evidenceMatrix = [
  {
    id: "MAP-01",
    source: "Fictional alert record",
    observation:
      "A temporary emergency role appears assigned twenty minutes after its approved end time.",
    supports:
      "The primary defender question should address stale authority after expiration.",
    limits:
      "Role assignment does not prove effective access, active sessions, misuse, or harmful impact.",
    use:
      "Write the observation and non-proof statement.",
  },
  {
    id: "MAP-02",
    source: "Fictional extension source",
    observation:
      "No current extension is included for the identity and role in the supplied evidence.",
    supports:
      "The available evidence does not currently explain the late assignment through extension.",
    limits:
      "Absence may result from delay, source coverage, field mapping, or an unrecorded approved process.",
    use:
      "Ask whether the extension source is healthy and whether alternate approval evidence exists.",
  },
  {
    id: "MAP-03",
    source: "Fictional group source",
    observation:
      "Group-membership evidence is delayed by eight minutes.",
    supports:
      "Effective-access confidence is lower than role-assignment confidence.",
    limits:
      "Delay does not prove group access remained or ended.",
    use:
      "Move the case to Conditional or Source-Degraded and request alternate session evidence.",
  },
  {
    id: "MAP-04",
    source: "Fictional session source",
    observation:
      "One active session began before expiration and remains visible after the approved end.",
    supports:
      "A current session may extend the effective-authority question beyond role assignment.",
    limits:
      "Session visibility does not prove privileged action or harmful use.",
    use:
      "Ask which destination, action, object, and revocation state apply.",
  },
  {
    id: "MAP-05",
    source: "Fictional service record",
    observation:
      "The session reached a student-support administration service during the recovery exercise.",
    supports:
      "The alert involves a mission-relevant service and may deserve prompt review.",
    limits:
      "Service access does not prove unauthorized operation or user impact.",
    use:
      "Ask the service owner about purpose, action, object scope, result, and impact.",
  },
  {
    id: "MAP-06",
    source: "Fictional owner statement",
    observation:
      "The identity owner expected the role to end at exercise closure and is unaware of an extension.",
    supports:
      "The current owner expectation is inconsistent with the observed role state.",
    limits:
      "Owner memory does not replace approval, source, group, session, or application evidence.",
    use:
      "Increase priority while preserving evidence requirements.",
  },
  {
    id: "MAP-07",
    source: "Fictional source-health dashboard",
    observation:
      "Role, session, and service evidence are current; group evidence is delayed; extension-source freshness is Unknown.",
    supports:
      "The case has mixed evidence health and should not receive full authorization confidence.",
    limits:
      "Mixed health does not prove the behavior is harmful.",
    use:
      "Display source health and separate observation confidence from authorization confidence.",
  },
  {
    id: "MAP-08",
    source: "Fictional recovery checklist",
    observation:
      "Recovery closure requires role revocation, session review, source reconciliation, service validation, owner confirmation, and lessons learned.",
    supports:
      "Closure requires more than the alert disappearing.",
    limits:
      "The checklist does not prove each requirement is currently incomplete.",
    use:
      "Define closure and reopen criteria.",
  },
];

const commonMistakes = [
  {
    mistake: "Alert title becomes the question",
    observation:
      "A fictional alert titled Privileged Misuse causes analysts to ask only how the misuse occurred.",
    impact:
      "The title assumes intent and skips authorization, source health, scope, and alternatives.",
    correction:
      "Use a neutral primary question tied to the detection objective.",
  },
  {
    mistake: "Questions are too broad",
    observation:
      "A fictional analyst asks whether the environment is compromised.",
    impact:
      "The question lacks a bounded evidence path and decision use.",
    correction:
      "Break it into observation, identity, authorization, scope, impact, source-health, and owner questions.",
  },
  {
    mistake: "Questions are not ordered",
    observation:
      "A fictional case requests long historical records before checking source health or current authority.",
    impact:
      "High-value decisions are delayed by low-value evidence gathering.",
    correction:
      "Order questions by decision impact, urgency, and evidence sufficiency.",
  },
  {
    mistake: "Derived context is presented as fact",
    observation:
      "A fictional criticality score and peer label appear without source or freshness.",
    impact:
      "Analysts may trust stale or incorrect enrichment.",
    correction:
      "Label direct, derived, owner-provided, and inferred information separately.",
  },
  {
    mistake: "Source health is hidden",
    observation:
      "A fictional alert shows High confidence while a required source is delayed.",
    impact:
      "The analyst may close or escalate with unsupported certainty.",
    correction:
      "Display health states and define Conditional, Source-Degraded, and Unknown outcomes.",
  },
  {
    mistake: "No question owner",
    observation:
      "A fictional case needs identity, service, and source answers, but all tasks are assigned to Security.",
    impact:
      "Evidence requests remain unanswered or duplicated.",
    correction:
      "Assign each question to the accountable detection, identity, service, source, supplier, change, privacy, or risk owner.",
  },
  {
    mistake: "Escalation follows severity alone",
    observation:
      "A fictional High alert escalates automatically despite low confidence and no active impact.",
    impact:
      "Importance and certainty are confused.",
    correction:
      "Use severity, confidence, scope, impact, time sensitivity, source health, and response opportunity.",
  },
  {
    mistake: "Closure follows alert disappearance",
    observation:
      "A fictional case closes when the alert stops firing.",
    impact:
      "Authority, sessions, source recovery, service impact, corrective actions, and residual risk may remain unresolved.",
    correction:
      "Use evidence-based closure and reopen criteria.",
  },
  {
    mistake: "Questions collect too much data",
    observation:
      "A fictional analyst requests full user, message, browsing, or destination history for a narrow role question.",
    impact:
      "Privacy and analyst-overload risk increase without improving the decision.",
    correction:
      "Use purpose-based, time-bounded, role-limited evidence requests.",
  },
  {
    mistake: "Real alert workflows appear in a portfolio",
    observation:
      "A fictional learning artifact includes copied internal prompts, fields, owners, screenshots, cases, or escalation criteria.",
    impact:
      "Sensitive systems, people, incidents, and defensive processes may be exposed.",
    correction:
      "Invent every alert, source, field, question, owner, decision, date, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Select one fictional alert",
    action:
      "Choose an invented identity, service, destination, supplier, wireless, DNS, application, or recovery alert.",
    output:
      "Alert identifier, objective, mission risk, and primary defender question.",
    quality:
      "The primary question supports one bounded decision.",
  },
  {
    step: "2",
    title: "Write the observation",
    action:
      "Describe the fictional matched condition using direct evidence and include a non-proof statement.",
    output:
      "Observation and evidence-limit statement.",
    quality:
      "No cause, intent, scope, or impact is asserted without evidence.",
  },
  {
    step: "3",
    title: "Map question domains",
    action:
      "Create fictional identity, device, service, destination, authorization, timing, source-health, scope, impact, alternatives, ownership, escalation, and closure questions.",
    output:
      "Alert defender-question map.",
    quality:
      "Every question has a decision use and evidence source.",
  },
  {
    step: "4",
    title: "Order the question tree",
    action:
      "Sequence fictional questions according to urgency, evidence health, authorization, scope, impact, and decision value.",
    output:
      "Question tree with branches and stop conditions.",
    quality:
      "The tree does not collect unrelated evidence.",
  },
  {
    step: "5",
    title: "Design evidence requests",
    action:
      "Write fictional purpose-limited requests for identity, service, network, DNS, change, source-health, owner, and closure evidence.",
    output:
      "Evidence-request catalog.",
    quality:
      "Requests include scope, time, fields, privacy, owner, and decision use.",
  },
  {
    step: "6",
    title: "Assign question ownership",
    action:
      "Map fictional detection, identity, service, source, supplier, change, privacy, risk, and leadership owners.",
    output:
      "Question-owner responsibility matrix.",
    quality:
      "Every unresolved question has one accountable owner and due date.",
  },
  {
    step: "7",
    title: "Define decision states",
    action:
      "Use fictional New, In Review, Conditional, Expected, Source-Degraded, Unknown, Escalated, Resolved, and Reopened states.",
    output:
      "Decision-state transition model.",
    quality:
      "Each transition requires documented evidence.",
  },
  {
    step: "8",
    title: "Define escalation and closure",
    action:
      "Document fictional evidence for broader review, response boundaries, closure, residual risk, and reopening.",
    output:
      "Escalation, closure, and reopen criteria.",
    quality:
      "Alert disappearance alone cannot satisfy closure.",
  },
  {
    step: "9",
    title: "Test analyst usability",
    action:
      "Use invented complete, missing-field, delayed-source, expected-alert, wider-scope, active-impact, privacy, and regression cases.",
    output:
      "Question-map test matrix.",
    quality:
      "Another reviewer can reach a consistent bounded decision.",
  },
  {
    step: "10",
    title: "Document lifecycle governance",
    action:
      "Assign fictional version, owner, metrics, decision latency, question debt, review triggers, updates, and retirement.",
    output:
      "Alert-to-question mapping package.",
    quality:
      "The mapping can be maintained after source, logic, service, identity, policy, or mission change.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest primary question for a fictional stale-role alert?",
    choices: [
      "Who is the attacker?",
      "Did temporary emergency authority remain effectively active beyond its approved end without a valid extension?",
      "Why was the system compromised?",
      "Should every administrator be blocked?",
    ],
    answer: 1,
    explanation:
      "The question is bounded, evidence-driven, tied to the detection objective, and avoids unsupported intent.",
  },
  {
    question:
      "Why should source health appear in a fictional alert question map?",
    choices: [
      "Because Green connectivity proves complete evidence.",
      "Because freshness, completeness, timing, schema, coverage, and conflicts affect which conclusions are supportable.",
      "Because source health replaces authorization.",
      "Because unhealthy sources should always close the case.",
    ],
    answer: 1,
    explanation:
      "Evidence quality changes confidence, decision state, and next questions.",
  },
  {
    question:
      "Which fictional question is most useful after confirming a valid identity?",
    choices: [
      "Is the identity suspicious?",
      "Was this role, destination, action, object, and time authorized under current approval and assignment?",
      "What is the user's full history?",
      "Should the alert be ignored?",
    ],
    answer: 1,
    explanation:
      "Identity validity does not prove authorized use.",
  },
  {
    question:
      "A required fictional source is delayed. Which decision state is strongest?",
    choices: [
      "Resolved.",
      "Source-Degraded or Conditional with documented limits and alternate evidence.",
      "True negative.",
      "Expected automatically.",
    ],
    answer: 1,
    explanation:
      "The state should preserve the observation while making evidence limitations visible.",
  },
  {
    question:
      "What is the strongest closure criterion?",
    choices: [
      "The alert stopped appearing.",
      "Authority, sessions, service state, source health, owner validation, user impact, corrective action, residual risk, and reopen triggers are addressed.",
      "The analyst has no more time.",
      "The severity changed to Low.",
    ],
    answer: 1,
    explanation:
      "Closure should reflect resolved decisions and documented remaining risk rather than alert silence.",
  },
  {
    question:
      "Which fictional evidence request is most privacy-aware?",
    choices: [
      "Provide the user's full activity history.",
      "Provide only the role, assignment, approval, expiration, revocation, owner, and source-health evidence needed for the alert period.",
      "Provide every available identity field.",
      "Publish the alert screenshot for review.",
    ],
    answer: 1,
    explanation:
      "Purpose-limited and time-bounded requests support the decision without unnecessary collection.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use real alert questions with fake identities.",
      "Use real escalation criteria after removing company names.",
      "Invent every alert, source, field, question, owner, decision, date, and outcome.",
      "Use internal screenshots with blurred values.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real systems, people, incidents, and defensive workflows.",
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
        Module A5
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

export default function MappingAlertsToDefenderQuestionsPage() {
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
              Module A5
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 7 of 10
            </span>
            <span className="rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-2 text-blue-200">
              Questions, Evidence, Ownership, and Decisions
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A5.7 Mapping Alerts to Defender Questions
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders turn fictional alerts into
            structured questions about observation, identity, device, service,
            destination, authorization, timing, source health, scope, impact,
            alternatives, ownership, next evidence, escalation, closure, and
            lifecycle.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A5: Detection Engineering"
          lessonTitle="Mapping Alerts to Defender Questions"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented alerts, identities, devices, services, destinations, evidence, questions, owners, dates, decisions, and outcomes.",
            "I understand that a fictional alert is an observation designed to support a question, not a complete incident conclusion.",
            "I will distinguish direct evidence, derived context, owner statements, hypotheses, unknowns, and source-health limitations.",
            "I will use purpose-limited evidence requests and avoid collecting unrelated personal or internal data.",
            "I will define escalation, closure, Unknown, Source-Degraded, and reopen criteria.",
            "I will not access, query, collect, inspect, investigate, correlate, test, or modify any real telemetry, alert, account, endpoint, network, domain, application, supplier, platform, incident, or organization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="An Alert Is Useful Only When It Helps Answer the Next Question"
        >
          <p className="leading-8">
            A fictional alert says “Emergency Role Misuse.” The supplied
            evidence shows only that the role appears assigned after expiration
            and one session remains visible. The title implies intent, but the
            analyst still needs to answer whether an extension exists, whether
            effective access remains, whether the session used privileged
            functions, whether the service was affected, and whether the sources
            are healthy.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak alert workflow
              </p>
              <p className="mt-2 leading-7">
                “The alert is High. Escalate the suspected misuse immediately.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong alert workflow
              </p>
              <p className="mt-2 leading-7">
                “Confirm the matched condition, source health, extension,
                effective authority, session scope, service impact, owner
                expectation, alternatives, and evidence needed for escalation or
                closure.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            The professional skill is not asking more questions. It is asking
            the smallest set of questions that changes the defensive decision.
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
          title="Question Design Controls Triage Quality"
        >
          <p className="leading-8">
            Fictional alert quality depends on more than detection logic. The
            alert must guide analysts toward the right identity, authorization,
            source-health, scope, impact, ownership, and closure decisions.
            Poorly mapped alerts create evidence hunting, inconsistent labels,
            privacy overcollection, delayed escalation, premature closure, and
            tuning based on incomplete understanding.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Decision focus",
                "Connect fictional alert evidence to one primary question and an ordered set of supporting questions.",
              ],
              [
                "Evidence discipline",
                "Request only fictional records and owner context needed to answer the decision.",
              ],
              [
                "Lifecycle consistency",
                "Use fictional states, criteria, ownership, metrics, and review triggers so cases are handled consistently.",
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

        <SectionCard eyebrow="Core Framework" title="The Q-U-E-S-T-I-O-N Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Q — Question the alert purpose",
                "Identify the fictional mission risk, detection objective, primary defender question, and non-proof statement.",
              ],
              [
                "U — Understand the observation",
                "Separate fictional direct evidence, derived context, source health, and hypotheses.",
              ],
              [
                "E — Evaluate identity and authorization",
                "Ask which fictional identity, role, assignment, approval, destination, action, object, and time are involved.",
              ],
              [
                "S — Scope services and impact",
                "Determine fictional devices, services, destinations, users, data, suppliers, policy, availability, and recovery effects.",
              ],
              [
                "T — Test source health and timing",
                "Review fictional freshness, completeness, sequence, clock, schema, coverage, conflicts, and blind periods.",
              ],
              [
                "I — Investigate alternatives",
                "Consider fictional change, maintenance, extension, assignment, recovery, source defect, peer uniqueness, and policy difference.",
              ],
              [
                "O — Organize owners and evidence",
                "Assign fictional question owners, evidence requests, due dates, escalation paths, and privacy boundaries.",
              ],
              [
                "N — Navigate decisions and lifecycle",
                "Use fictional states, escalation, closure, reopen, metrics, review triggers, and mapping retirement.",
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
              Decision-ready alert statement
            </p>
            <p className="mt-2 leading-7">
              This fictional alert supports one documented defender question
              through direct evidence, current context, source-health status,
              ordered supporting questions, purpose-limited evidence requests,
              accountable owners, decision states, escalation criteria, closure
              criteria, limitations, and review triggers.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Alert-to-Question Mapping"
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
            Apply Ten Alert-Mapping Principles
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {mappingPrinciples.map((item) => (
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
          title="Build Fourteen Defender-Question Domains"
        >
          <div className="grid gap-5">
            {questionDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.domain}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Primary question", item.primaryQuestion],
                    ["Supporting questions", item.supportingQuestions],
                    ["Decision use", item.decisionUse],
                    ["Weak question", item.weakQuestion],
                    ["Fictional evidence", item.evidence],
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
          eyebrow="Instructional Section 3"
          title="Design Ten Alert Information Layers"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {alertLayers.map((item) => (
              <article
                key={item.layer}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.layer}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Required fictional content
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.requiredContent}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Analyst value
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.analystValue}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Risk if missing
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.risk}</p>
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
                <h3 className="text-xl font-black text-emerald-100">
                  {item.state}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Meaning
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.meaning}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Required question
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.requiredQuestion}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Exit path
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.exit}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Write Eight Purpose-Limited Evidence Requests"
        >
          <div className="grid gap-5">
            {evidenceRequestDesign.map((item) => (
              <article
                key={item.requestType}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.requestType}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak request
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.weakRequest}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong fictional request
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strongRequest}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Privacy control
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.privacyControl}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Decision supported
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.decision}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Order Questions by Decision Value"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Order",
                    "Fictional question",
                    "Why it comes here",
                    "Possible next state",
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
                    "1",
                    "What matched, and which direct evidence supports the observation?",
                    "Establishes the bounded fact.",
                    "New or Invalid Mapping.",
                  ],
                  [
                    "2",
                    "Are required sources and fields healthy enough for normal interpretation?",
                    "Prevents false certainty or false absence.",
                    "In Review, Source-Degraded, or Unknown.",
                  ],
                  [
                    "3",
                    "Which identity, device, service, destination, and object are involved?",
                    "Defines accountability and technical scope.",
                    "In Review or Conditional.",
                  ],
                  [
                    "4",
                    "Was the role, action, destination, object, and time authorized?",
                    "Distinguishes valid identity from valid use.",
                    "Expected, Conditional, or Escalated.",
                  ],
                  [
                    "5",
                    "Which sequence, timing, extension, change, maintenance, or recovery context applies?",
                    "Tests expected workflows and alternatives.",
                    "Expected, In Review, or Conditional.",
                  ],
                  [
                    "6",
                    "How broad is the condition and which mission outcomes are affected?",
                    "Determines severity, priority, and stakeholders.",
                    "Escalated, Conditional, or In Review.",
                  ],
                  [
                    "7",
                    "Who owns the next evidence and decision?",
                    "Creates accountability and prevents stalled cases.",
                    "In Review or Escalated.",
                  ],
                  [
                    "8",
                    "Which evidence supports closure, Unknown outcome, or reopening?",
                    "Completes the lifecycle responsibly.",
                    "Resolved, Unknown, or Reopened.",
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
          eyebrow="Instructional Section 7"
          title="Assign Questions to Professional Owners"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Detection owner",
                "Does the fictional alert match the documented objective, logic version, tests, limits, and analyst guidance?",
                "Detection specification, test record, change history, quality metrics, and mapping.",
              ],
              [
                "Identity owner",
                "Which fictional role, assignment, approval, extension, session, expiration, and revocation apply?",
                "Identity lifecycle, approvals, group state, authentication, authorization, and owner confirmation.",
              ],
              [
                "Service owner",
                "Which fictional service purpose, operation, object scope, impact, dependency, and recovery state apply?",
                "Service catalog, application evidence, change, user journey, impact, and recovery records.",
              ],
              [
                "Source owner",
                "Can the fictional source support the required fields, scope, timing, and confidence?",
                "Freshness, completeness, schema, transformation, duplication, coverage, blind periods, and recovery.",
              ],
              [
                "Supplier owner",
                "Which fictional sponsor, request, session, destination, support purpose, and contract responsibility apply?",
                "Supplier identity, sponsorship, request, support ticket, result, session, and owner evidence.",
              ],
              [
                "Change owner",
                "Does fictional behavior fit the approved change scope, timing, expected result, rollback, and closure?",
                "Change identifier, owner, start, end, expected behavior, result, validation, and rollback.",
              ],
              [
                "Privacy reviewer",
                "Are fictional evidence requests, enrichment, access, retention, and case notes necessary and proportionate?",
                "Purpose, field minimization, access roles, retention, deletion, sharing, and portfolio boundary.",
              ],
              [
                "Risk or leadership owner",
                "Which fictional residual risk, resources, deadlines, accepted limitations, and milestones require approval?",
                "Risk decision, priority, funding, acceptance, action owner, milestone, and review.",
              ],
            ].map(([owner, question, evidence]) => (
              <article
                key={owner}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{owner}</h3>
                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Owned question
                  </p>
                  <p className="mt-2 text-sm leading-6">{question}</p>
                </div>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Fictional evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{evidence}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Alert Architecture"
          title="Northbridge Alert-to-Question Model"
        >
          <p className="leading-8">
            This conceptual model is completely invented and intentionally
            non-operational. It teaches alert reasoning without real alert
            rules, source names, fields, identities, systems, domains,
            applications, suppliers, incidents, or internal escalation
            workflows.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Alert input", "Identifier, objective, observation, evidence, source health"],
                ["Context input", "Identity, device, service, destination, owner, change"],
                ["Question input", "Authorization, timing, scope, impact, alternatives"],
                ["Governance input", "Owners, privacy, criteria, lifecycle, review triggers"],
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
                Fictional Defender Question Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Observe", "What matched and what does not follow?"],
                  ["Validate", "Are sources, fields, timing, and context reliable?"],
                  ["Identify", "Who, what device, service, destination, and object?"],
                  ["Authorize", "Was role, action, scope, and time approved?"],
                  ["Scope", "How many identities, services, states, and periods?"],
                  ["Impact", "Which users, data, services, privacy, and recovery?"],
                  ["Decide", "Expected, Conditional, Unknown, Escalated, Resolved?"],
                  ["Maintain", "Owner, metrics, review, reopen, tune, retire"],
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
                ["Analyst output", "Evidence request, confidence, state, next question"],
                ["Owner output", "Context, validation, action, residual risk"],
                ["Leadership output", "Scope, impact, priority, limitations, milestones"],
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
          title="Fake Northbridge Alert Question Dashboard"
          subtitle="Fictional question coverage, evidence sufficiency, ownership, decision latency, source health, and lifecycle status for training only."
          metrics={[
            {
              label: "Alerts with documented primary questions",
              value: "15 / 18",
              note: "Three fictional alerts still rely on dramatic titles rather than bounded defender questions.",
            },
            {
              label: "Alerts with complete source-health prompts",
              value: "10 / 18",
              note: "Eight fictional mappings need delayed, missing, conflicting, or blind-source branches.",
            },
            {
              label: "Open questions without accountable owners",
              value: "6",
              note: "Identity, service, supplier, source, privacy, and closure questions require assignment.",
            },
          ]}
        />

        <FakeAlertCard
          title="Emergency Role Remains Visible after Approved End"
          severity="High"
          time="3:41 PM"
          source="Fake Northbridge Alert Question Console"
          details="The fictional role appears assigned twenty minutes after expiration. One pre-expiration session remains visible, role and session evidence are current, group evidence is delayed, extension-source freshness is Unknown, and the identity owner expected the role to end. No supplied evidence proves misuse or harmful service action."
          recommendation="Use the primary question: Did emergency authority remain effectively active beyond approval without a valid extension? Validate fictional extension-source health, group state, session destination and action, service impact, revocation, owner, scope, and closure criteria."
        />

        <FakeLogPanel
          title="Fake Alert-to-Question Timeline"
          logs={[
            "09:00 ALERT identifier='ALT-F-21'",
            "09:08 QUESTION primary='stale-effective-authority'",
            "09:16 OBSERVATION role-after-expiration='true'",
            "09:24 SOURCE role-state='current'",
            "09:32 SOURCE extension='unknown-freshness'",
            "09:40 SOURCE group-state='delayed-8m'",
            "09:48 SOURCE session='active'",
            "09:56 QUESTION authorization='open'",
            "10:04 QUESTION destination='open'",
            "10:12 QUESTION service-impact='open'",
            "10:20 OWNER identity='responded'",
            "10:28 OWNER service='assigned'",
            "10:36 OWNER source='assigned'",
            "10:44 CONFIDENCE observation='high'",
            "10:52 CONFIDENCE authorization='moderate'",
            "11:00 SEVERITY potential-impact='high'",
            "11:08 STATE alert='conditional'",
            "11:16 CLOSURE criteria='incomplete'",
            "11:24 CONFIDENCE overall='moderate'",
            "15:41 ALERT issue='role-after-approved-end'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Alert Evidence Supports—and Which Questions Remain
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
                    ["Question-mapping use", item.use],
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
          title="Which Question Path Is Best Supported?"
          question="Which fictional analyst path most responsibly handles the emergency-role alert?"
          evidence={[
            "The role appears assigned twenty minutes after expiration.",
            "One session began before expiration and remains visible.",
            "Role and session evidence are current.",
            "Group evidence is delayed.",
            "Extension-source freshness is Unknown.",
            "The identity owner expected the role to end.",
            "The session reached a mission-relevant administration service.",
            "No supplied evidence proves misuse, harmful action, or complete service impact.",
          ]}
          options={[
            "Keep the fictional alert Conditional, ask whether a valid extension exists, validate group and effective-access state, review session destination and action, confirm service impact and revocation, assign source and service owners, and require evidence-based closure.",
            "Escalate confirmed misuse because the role remained visible.",
            "Close the alert because the session began before expiration.",
            "Suppress all future recovery-role alerts.",
          ]}
          bestAnswer={0}
          explanation="The first option uses the strongest evidence, preserves uncertainty, assigns owners, and orders the questions that most affect authorization, scope, impact, and closure."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Alert-Mapping Errors"
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
          title="Build the Northbridge Alert-to-Question Map"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            collect, query, inspect, investigate, correlate, test, escalate,
            close, or modify any real telemetry, alert, account, endpoint,
            network, domain, application, supplier, platform, incident, or
            organization.
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
          title="A High Alert Has Low Evidence Confidence"
          scenario="A fictional alert concerns a privileged service and could affect a critical student-support workflow. The potential impact is High, but required authorization evidence is delayed and the service owner has not confirmed the operation."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the fictional alert High potential severity but Conditional confidence, assign authorization and service questions to their owners, request purpose-limited evidence, preserve source-health limits, and escalate only according to scope, impact, time sensitivity, and confirmed authority.",
              outcome:
                "Best defensive choice. It separates importance from certainty and preserves a clear evidence path.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare a confirmed incident because the service is critical.",
              outcome:
                "Weak. Criticality does not prove the alert interpretation.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Close the alert because authorization evidence is delayed.",
              outcome:
                "Weak. The underlying high-impact question remains unresolved.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Alert Stops before Closure Evidence Is Complete"
          scenario="A fictional stale-role alert stops firing after the next evaluation. Group evidence has recovered, but session review, service-owner validation, source reconciliation, and residual-risk documentation remain incomplete."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the fictional case In Review or Conditional until role, groups, sessions, service outcome, source health, owner validation, corrective action, residual risk, and reopen criteria meet closure requirements.",
              outcome:
                "Best choice. Alert silence is not the same as evidence-based resolution.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close the case because the alert disappeared.",
              outcome:
                "Weak. Important closure questions remain unanswered.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the case to reduce decision latency.",
              outcome:
                "Weak. This removes traceability and hides unresolved risk.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design an Alert System That Teaches Analysts What to Ask"
        >
          <p className="leading-8">
            Fictional Northbridge has alerts for privileged roles, supplier
            sessions, service destinations, wireless class changes, DNS
            differences, application states, and recovery. Each alert shows a
            title and severity but not a primary question, source-health state,
            owner, alternatives, evidence request, escalation criterion, or
            closure criterion.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Create primary questions",
                "Write one fictional mission-driven question and non-proof statement for every alert.",
              ],
              [
                "Create supporting domains",
                "Map fictional observation, identity, device, service, destination, authorization, time, source health, scope, impact, alternatives, ownership, escalation, and closure.",
              ],
              [
                "Design decision states",
                "Use fictional New, In Review, Conditional, Expected, Source-Degraded, Unknown, Escalated, Resolved, and Reopened states.",
              ],
              [
                "Assign owners",
                "Map fictional detection, identity, service, source, supplier, change, privacy, risk, and leadership responsibilities.",
              ],
              [
                "Measure usability",
                "Track fictional question coverage, evidence sufficiency, decision latency, analyst effort, unresolved questions, and reopen quality.",
              ],
              [
                "Maintain lifecycle",
                "Review fictional mappings after source, field, logic, service, identity, workflow, policy, privacy, or mission change.",
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
              Produce a fictional alert-question governance charter, alert
              catalog, primary-question register, supporting-question maps,
              evidence-request catalog, owner matrix, decision-state model,
              escalation criteria, closure and reopen criteria, privacy plan,
              usability metrics, question-debt register, lifecycle triggers,
              residual-risk statement, analyst guide, and leadership summary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Mapping Alerts to Defender Questions Checklist"
          items={[
            "I can connect every fictional alert to a mission risk, detection objective, primary defender question, and non-proof statement.",
            "I can separate direct observation, derived context, source health, alternatives, confidence, severity, priority, response, and confirmed outcome.",
            "I can ask bounded fictional questions about identity, device, service, destination, authorization, timing, sequence, source health, scope, impact, alternatives, ownership, escalation, and closure.",
            "I can order questions according to urgency, decision value, evidence sufficiency, and privacy.",
            "I can create purpose-limited fictional evidence requests with scope, time, fields, owner, privacy control, and decision use.",
            "I can assign detection, identity, service, source, supplier, change, privacy, risk, and leadership owners.",
            "I can use New, In Review, Conditional, Expected, Source-Degraded, Unknown, Escalated, Resolved, and Reopened states.",
            "I can separate potential severity from evidence confidence and review priority.",
            "I can define evidence-based escalation, closure, residual-risk, and reopen criteria.",
            "I can identify question debt, missing owners, stale mappings, weak alert presentation, and unnecessary evidence collection.",
            "I can maintain fictional mapping versions, metrics, decision latency, review triggers, updates, and retirement.",
            "I can create a completely fictional alert-question artifact without exposing real alerts, sources, cases, identities, systems, incidents, or internal workflows.",
          ]}
        />

        <MiniQuiz
          title="A5.7 Mini Quiz: Mapping Alerts to Defender Questions"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Alert-to-Defender-Question Mapping Package for the Northbridge Student-Support Cooperative. Include mission, purpose, scope, stakeholders, exclusions, safety boundary, at least twenty fictional alerts, alert identifiers, detection identifiers, logic versions, mission risks, detection objectives, primary defender questions, supporting questions, decision questions, non-proof statements, observations, direct evidence, derived context, owner statements, hypotheses, alternatives, source-health states, confidence, severity, priority, response boundaries, identity questions, device questions, service questions, destination questions, object questions, authorization questions, timing questions, sequence questions, source-health questions, scope questions, impact questions, alternative-explanation questions, ownership questions, evidence requests, escalation questions, closure questions, reopen questions, alert information layers, question trees, decision branches, stop conditions, New states, In Review states, Conditional states, Expected states, Source-Degraded states, Unknown states, Escalated states, Resolved states, Reopened states, detection owners, identity owners, service owners, source owners, supplier owners, change owners, privacy reviewers, risk owners, leadership owners, purpose-limited identity requests, service requests, network requests, DNS requests, change requests, source-health requests, owner confirmations, closure validations, escalation criteria, closure criteria, residual risks, reopen triggers, question coverage, question usefulness, evidence sufficiency, decision latency, analyst effort, question debt, review triggers, retirement criteria, leadership summary, analyst guide, reflection, and a statement that every organization, alert, source, field, identity, owner, question, date, decision, and outcome is invented."
          tips={[
            "Start every fictional alert with one bounded primary defender question.",
            "Separate direct evidence, derived context, source-health limitations, hypotheses, alternatives, and confirmed outcomes.",
            "Order questions by decision value rather than collecting every possible record.",
            "Define owners, escalation, closure, Unknown, Source-Degraded, and reopen criteria.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready to Test Detections Safely with Fake Data?"
        >
          <p className="leading-8">
            Before moving to A5.8, rate your readiness from 1 to 5 for primary
            questions, supporting questions, evidence requests, source health,
            identity, authorization, scope, impact, alternatives, ownership,
            states, escalation, closure, privacy, metrics, lifecycle, and
            complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can write a neutral fictional primary defender question for an alert.",
              "I can separate observation, context, hypothesis, and confirmed outcome.",
              "I can ask authorization questions that go beyond successful authentication or role presence.",
              "I can make source-health limitations visible in the decision state.",
              "I can order questions according to decision value and urgency.",
              "I can assign purpose-limited evidence requests to accountable owners.",
              "I can define escalation, closure, Unknown, Source-Degraded, and reopen criteria.",
              "I can produce a safe fictional question map without copying real alerts, cases, or internal workflows.",
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
            Record one fictional alert observation, one primary question, three
            supporting questions, one source-health limitation, one owner, one
            closure criterion, and one question you will carry into A5.8.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Every fictional alert should map to a mission risk, detection objective, primary defender question, decision purpose, and non-proof statement.",
            "Alert evidence should distinguish direct observation, derived context, owner statements, hypotheses, source health, alternatives, and confirmed outcomes.",
            "Useful defender questions are bounded, evidence-driven, ordered by decision value, and assigned to accountable owners.",
            "Identity validity does not prove authorization; role, assignment, destination, action, object, time, approval, expiration, and revocation matter.",
            "Source health changes confidence, question order, decision state, and closure requirements.",
            "Purpose-limited evidence requests reduce privacy exposure and analyst overload.",
            "Severity, confidence, priority, response, and outcome are separate decision dimensions.",
            "Escalation and closure should depend on evidence, scope, impact, ownership, source health, residual risk, and lifecycle—not alert title or disappearance.",
            "Question maps require versioning, metrics, decision-latency review, question-debt tracking, change triggers, and retirement.",
            "Every CyberShield alert-mapping artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A5
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Next, learn how to test fictional detections safely with invented
            positive, negative, boundary, maintenance, change, duplicate,
            missing-field, degraded-source, privacy, regression, and recovery
            cases.
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