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
const previousLesson = `${modulePath}/data-sources-for-detection`;
const nextLesson = `${modulePath}/behavior-based-detection-thinking`;

const objectives = [
  "Translate fictional defender questions into conceptual detection logic using conditions, relationships, sequences, counts, time windows, state changes, context, and source-health requirements.",
  "Differentiate single-event, multi-event, sequence, threshold, relationship, absence, state, peer, and composite detection concepts without turning the lesson into operational attack guidance.",
  "Document fictional assumptions, required fields, exclusions, missing-data behavior, evidence limits, confidence, severity, ownership, testing, and review triggers for each logic design.",
  "Evaluate fictional detection logic for over-breadth, hidden dependencies, poor timing, weak context, false-positive risk, false-negative risk, privacy concerns, and failure during degraded evidence.",
  "Create a portfolio-ready fictional detection-logic specification containing defender questions, evidence requirements, conceptual logic, tests, limits, analyst guidance, lifecycle controls, and safe fictionalization.",
];

const vocabulary = [
  [
    "Detection logic",
    "A fictional conceptual description of how evidence conditions, relationships, timing, context, and source-health states produce a defined defensive result.",
  ],
  [
    "Condition",
    "A fictional test involving one field, state, relationship, category, result, or piece of context.",
  ],
  [
    "Predicate concept",
    "A fictional yes-or-no statement about evidence, such as whether a role is active beyond an approved end time.",
  ],
  [
    "Single-event logic",
    "A fictional detection concept that evaluates one record or state observation against documented conditions.",
  ],
  [
    "Multi-event logic",
    "A fictional detection concept that evaluates more than one related record, source, or state.",
  ],
  [
    "Sequence logic",
    "A fictional detection concept that looks for an ordered set of events or state changes within defined timing and identity relationships.",
  ],
  [
    "Threshold logic",
    "A fictional detection concept that compares a count, rate, duration, volume, or frequency with an approved boundary.",
  ],
  [
    "Relationship logic",
    "A fictional detection concept that examines how identities, devices, services, destinations, suppliers, objects, or owners connect.",
  ],
  [
    "State-change logic",
    "A fictional detection concept that compares a prior approved state with a later observed state.",
  ],
  [
    "Absence logic",
    "A fictional detection concept that identifies when an expected record, confirmation, revocation, heartbeat, or follow-up is missing within a defined window.",
  ],
  [
    "Peer-group logic",
    "A fictional detection concept that compares behavior with an approved group of similar identities, devices, services, or workflows.",
  ],
  [
    "Composite logic",
    "A fictional detection concept that combines several conditions, sources, relationships, and context checks.",
  ],
  [
    "Time window",
    "A fictional period used to relate records, count events, evaluate expiration, sequence behavior, or wait for an expected follow-up.",
  ],
  [
    "Correlation key concept",
    "A fictional shared identifier or relationship used to connect records, such as identity, session, request, service, device, change, case, or supplier request.",
  ],
  [
    "Join concept",
    "A fictional relationship between sources or records based on documented keys, timing, scope, and meaning.",
  ],
  [
    "Required field",
    "A fictional evidence field necessary for the logic to support its defender question with normal confidence.",
  ],
  [
    "Optional field",
    "A fictional field that improves context or precision but is not required for the core observation.",
  ],
  [
    "Exclusion",
    "A fictional documented condition that prevents expected, approved, or out-of-scope activity from producing the same result.",
  ],
  [
    "Allow context",
    "Fictional evidence showing that an identity, change, maintenance window, destination, workflow, or exception was approved.",
  ],
  [
    "Missing-data behavior",
    "A fictional rule describing what happens when required evidence is delayed, absent, conflicting, stale, or unhealthy.",
  ],
  [
    "Confidence",
    "A fictional rating describing how strongly the available evidence and source health support the detection result.",
  ],
  [
    "Severity",
    "A fictional rating describing the potential importance of the detected condition, considering identity, asset, scope, impact, and response needs.",
  ],
  [
    "Logic version",
    "A fictional identifier for a specific documented set of conditions, fields, sources, tests, assumptions, and behavior.",
  ],
  [
    "Logic review trigger",
    "A fictional event requiring revalidation, such as source, schema, identity, service, application, network, supplier, workflow, privacy, or mission change.",
  ],
];

const logicPrinciples = [
  {
    principle: "Start from one defender question",
    description:
      "Fictional logic should answer a specific defensive question rather than attempt to detect every unusual behavior at once.",
    strongPractice:
      "Ask whether a temporary privileged role remained effective beyond its approved expiration.",
    failure:
      "The logic becomes broad, noisy, difficult to test, and hard to explain.",
  },
  {
    principle: "Use evidence with known meaning",
    description:
      "Fictional logic should rely only on fields whose source, schema, values, timing, transformations, ownership, and limitations are documented.",
    strongPractice:
      "Use role state, approval end time, extension state, revocation state, and source-health fields with clear semantics.",
    failure:
      "A field may be interpreted differently than the producing source intended.",
  },
  {
    principle: "Separate direct and derived conditions",
    description:
      "Fictional logic should distinguish source-recorded evidence from normalized, enriched, grouped, or calculated values.",
    strongPractice:
      "Document that criticality is derived from service category and owner-approved mission impact.",
    failure:
      "Analysts may treat an inferred value as original authoritative evidence.",
  },
  {
    principle: "Define timing deliberately",
    description:
      "Fictional windows should match the expected workflow, source delay, approval process, maintenance, queue behavior, and mission decision.",
    strongPractice:
      "Wait for the approved revocation delay before alerting on a stale emergency role, but do not wait so long that critical authority remains unnoticed.",
    failure:
      "Poor windows create avoidable false positives or false negatives.",
  },
  {
    principle: "Use context before suppression",
    description:
      "Fictional tuning should add identity, owner, change, maintenance, destination, peer, assignment, and source-health context before broad exclusions.",
    strongPractice:
      "Exclude only the approved maintenance identity, service, destination, and window.",
    failure:
      "Broad suppression can hide meaningful behavior outside the approved context.",
  },
  {
    principle: "Design for degraded evidence",
    description:
      "Fictional logic must state what happens when required sources, fields, clocks, enrichments, or relationships are delayed or missing.",
    strongPractice:
      "Return a Conditional result and reduce confidence when group-membership evidence is delayed.",
    failure:
      "The detection may fail silently or produce false certainty.",
  },
  {
    principle: "Keep severity separate from confidence",
    description:
      "A fictional condition may have high potential impact but low evidence confidence, or strong evidence but low mission impact.",
    strongPractice:
      "Record High potential severity and Moderate confidence for a privileged-role condition with delayed effective-access evidence.",
    failure:
      "Analysts may confuse importance with certainty.",
  },
  {
    principle: "Test both alert and non-alert outcomes",
    description:
      "Fictional logic should be tested with positive, negative, boundary, maintenance, change, missing-field, degraded-source, privacy, and regression cases.",
    strongPractice:
      "Verify that approved extensions do not alert while unapproved stale roles do.",
    failure:
      "A detection may pass one example but fail common acceptable conditions.",
  },
  {
    principle: "Explain what the logic cannot prove",
    description:
      "Fictional documentation should state that a match does not automatically establish compromise, intent, cause, scope, or impact.",
    strongPractice:
      "State that stale authority is observed, while misuse and effective access remain unconfirmed.",
    failure:
      "Alert text may be mistaken for a complete incident conclusion.",
  },
  {
    principle: "Maintain versioned ownership",
    description:
      "Fictional logic needs accountable owners, source dependencies, tests, changes, observation, metrics, rollback, review triggers, and retirement.",
    strongPractice:
      "Revalidate after identity-role schema, application workflow, supplier, DNS, or recovery-process change.",
    failure:
      "The logic can become stale while appearing operational.",
  },
];

const logicTypes = [
  {
    type: "Single-event condition",
    defenderQuestion:
      "Did one fictional record directly show a defined state or result?",
    example:
      "An administrative change record shows rollback status as incomplete.",
    strengths:
      "Simple to explain, test, and trace when the source field is reliable.",
    limitations:
      "One record may lack identity, authorization, context, sequence, impact, or corroboration.",
    sourceNeeds:
      "Direct field meaning, schema, freshness, completeness, owner, and source-health state.",
    testNeeds:
      "Matching value, nonmatching value, missing field, invalid value, stale source, and schema-change cases.",
  },
  {
    type: "Multi-event relationship",
    defenderQuestion:
      "Do two or more fictional records describe related identity, service, request, destination, or state behavior?",
    example:
      "A supplier request exists, but the received result does not correlate with the same approved request identifier.",
    strengths:
      "Adds context and can reduce unsupported conclusions from one source.",
    limitations:
      "Correlation may fail because of delay, identifier changes, duplication, missing records, or scope differences.",
    sourceNeeds:
      "Reliable join keys, timing, source health, uniqueness, transformations, and relationship semantics.",
    testNeeds:
      "Correct match, delayed match, duplicate match, missing match, wrong match, and conflicting-source cases.",
  },
  {
    type: "Sequence logic",
    defenderQuestion:
      "Did fictional events occur in a meaningful order within an expected period?",
    example:
      "Emergency access approved, role assigned, session opened, exercise ended, but revocation confirmation did not follow.",
    strengths:
      "Represents workflows and state progression better than isolated events.",
    limitations:
      "Out-of-order arrival, clock differences, retries, optional steps, and delayed evidence can distort the sequence.",
    sourceNeeds:
      "Event meaning, correlation key, event time, collection time, clock alignment, optional steps, and source health.",
    testNeeds:
      "Correct order, wrong order, delayed order, missing step, repeated step, optional step, and clock-skew cases.",
  },
  {
    type: "Threshold or rate logic",
    defenderQuestion:
      "Did fictional activity exceed an approved count, rate, volume, or duration for the relevant identity, service, or workflow?",
    example:
      "A service sends more approved-result requests than its documented peak range during a non-event state.",
    strengths:
      "Useful for volume, repetition, duration, and rate-change concepts.",
    limitations:
      "Thresholds can ignore mission context, duplicate events, seasonality, peer groups, and source completeness.",
    sourceNeeds:
      "Unique-event rules, aggregation window, expected range, peer context, source health, and business state.",
    testNeeds:
      "Below, at, and above threshold; duplicates; missing events; peak periods; maintenance; and degraded-source cases.",
  },
  {
    type: "Absence or expected-follow-up logic",
    defenderQuestion:
      "Did an expected fictional confirmation, revocation, result, heartbeat, closure, or recovery event fail to appear?",
    example:
      "A temporary role reaches expiration without a current extension or revocation confirmation.",
    strengths:
      "Useful for lifecycle, workflow completion, continuity, and recovery checks.",
    limitations:
      "Absence can result from delay, source failure, retention, schema change, optional workflow paths, or correlation error.",
    sourceNeeds:
      "Expected event definition, waiting period, source health, alternate evidence, optional paths, and owner approval.",
    testNeeds:
      "Expected event present, delayed, absent, source blind, alternate completion, approved exception, and recovery cases.",
  },
  {
    type: "State-change logic",
    defenderQuestion:
      "Did a fictional identity, device, service, record, policy, or owner move from one approved state to another unexpected state?",
    example:
      "A managed service device changes from the service-device wireless class to a guest class.",
    strengths:
      "Supports lifecycle, drift, ownership, classification, and configuration questions.",
    limitations:
      "The prior state may be stale, the change may be approved, or the source may report snapshots at different times.",
    sourceNeeds:
      "Prior state, current state, change record, owner, time, authorization context, and source health.",
    testNeeds:
      "Expected change, unexpected change, missing prior state, delayed current state, approved migration, rollback, and duplicate snapshot cases.",
  },
  {
    type: "Peer-group comparison",
    defenderQuestion:
      "Does fictional behavior differ meaningfully from similar identities, devices, services, or workflows?",
    example:
      "One support-service identity communicates with a destination class not used by comparable support services.",
    strengths:
      "Adds contextual comparison when individual histories are limited.",
    limitations:
      "Peer groups may be poorly defined, mixed, stale, too broad, or unable to represent unique approved roles.",
    sourceNeeds:
      "Peer definition, service purpose, identity role, ownership, expected variation, source health, and review triggers.",
    testNeeds:
      "Typical peer, legitimate unique role, stale peer group, new service, approved exception, and source-gap cases.",
  },
  {
    type: "Composite risk logic",
    defenderQuestion:
      "Do several fictional weak signals combine into a condition that deserves stronger review?",
    example:
      "A supplier identity uses a new device class, reaches a new destination, and operates outside its approved window while source health remains acceptable.",
    strengths:
      "Can combine context and reduce reliance on one dramatic field.",
    limitations:
      "Complexity increases testing, explanation, hidden dependency, and maintenance risk.",
    sourceNeeds:
      "Documented weighting or combination logic, required sources, missing-data behavior, ownership, privacy, and quality metrics.",
    testNeeds:
      "Each signal alone, approved combinations, risky combinations, missing source, conflicting context, and regression cases.",
  },
  {
    type: "Policy-difference logic",
    defenderQuestion:
      "Does fictional observed behavior differ from documented identity, firewall, remote-access, wireless, DNS, application, or supplier policy?",
    example:
      "A service identity communicates with a destination not listed in the current approved service map.",
    strengths:
      "Connects detections directly to governance and least-privilege expectations.",
    limitations:
      "Policy documentation may be stale, effective configuration may differ, or an approved change may be incomplete.",
    sourceNeeds:
      "Current policy version, effective state, change records, owner, service map, observation, and source health.",
    testNeeds:
      "Approved path, unapproved path, stale policy, pending change, emergency path, rollback, and source-conflict cases.",
  },
  {
    type: "Source-health-aware logic",
    defenderQuestion:
      "Can the fictional detection evaluate its normal question with current and complete evidence?",
    example:
      "Required application context is delayed while network evidence remains current.",
    strengths:
      "Prevents silent failure and helps analysts interpret confidence correctly.",
    limitations:
      "Health metrics also have dependencies and may not detect every semantic problem.",
    sourceNeeds:
      "Connectivity, freshness, completeness, schema, queue, clock, transformation, coverage, blind periods, and independent checks.",
    testNeeds:
      "Healthy, Conditional, Degraded, Blind, Conflicting, Recovering, and health-source-failure cases.",
  },
];

const logicSpecificationFields = [
  {
    field: "Detection identifier and version",
    purpose:
      "Provide a stable fictional reference for purpose, logic, tests, changes, alerts, findings, rollback, and retirement.",
    strongExample:
      "DET-ID-004 version 3",
    weakExample:
      "New admin rule",
  },
  {
    field: "Mission risk",
    purpose:
      "Explain the fictional user, identity, service, data, supplier, policy, evidence, or recovery outcome being protected.",
    strongExample:
      "Privileged emergency authority may outlive its approved recovery purpose.",
    weakExample:
      "Suspicious role activity.",
  },
  {
    field: "Defender question",
    purpose:
      "State exactly what the fictional analyst or owner must determine.",
    strongExample:
      "Did an emergency role remain effectively assigned beyond its approved end time without a valid extension?",
    weakExample:
      "Is this bad?",
  },
  {
    field: "Non-proof statement",
    purpose:
      "Clarify what a fictional match does not establish.",
    strongExample:
      "A match does not prove misuse, harmful action, active sessions, or compromise.",
    weakExample:
      "Alert means incident.",
  },
  {
    field: "Required sources and fields",
    purpose:
      "Document fictional source categories, field meanings, provenance, freshness, completeness, timing, and health requirements.",
    strongExample:
      "Role state, approval end, extension, group state, revocation, identity owner, and source-health fields.",
    weakExample:
      "Identity logs.",
  },
  {
    field: "Behavior hypothesis",
    purpose:
      "Describe the fictional expected behavior, meaningful deviation, alternatives, assumptions, and context.",
    strongExample:
      "Emergency authority should be revoked or formally extended by the approved end; delay may also result from synchronization or closure processing.",
    weakExample:
      "Late role equals attack.",
  },
  {
    field: "Conceptual conditions",
    purpose:
      "Define fictional conditions, relationships, order, counts, windows, states, and context without using operational attack instructions.",
    strongExample:
      "Role active after expiration, extension absent, source health sufficient, revocation unconfirmed.",
    weakExample:
      "Look for weird activity.",
  },
  {
    field: "Exclusions and allow context",
    purpose:
      "Document fictional approved maintenance, changes, extensions, destinations, identities, service states, and exceptions.",
    strongExample:
      "Exclude only a current owner-approved extension with matching identity, role, purpose, and end time.",
    weakExample:
      "Ignore administrators.",
  },
  {
    field: "Missing-data behavior",
    purpose:
      "State how fictional results change when required evidence is delayed, absent, stale, conflicting, or unhealthy.",
    strongExample:
      "Return Conditional and reduce confidence when effective group-state evidence is delayed.",
    weakExample:
      "Assume missing means false.",
  },
  {
    field: "Severity and confidence",
    purpose:
      "Separate fictional potential importance from evidence certainty.",
    strongExample:
      "Potential severity High; evidence confidence Moderate until group and session state are confirmed.",
    weakExample:
      "High means confirmed.",
  },
  {
    field: "Testing and validation",
    purpose:
      "Define fictional positive, negative, boundary, change, maintenance, missing-field, degraded-source, privacy, and regression cases.",
    strongExample:
      "Test approved extension, stale role, delayed groups, missing approval, duplicate records, and recovery closure.",
    weakExample:
      "Test one alert.",
  },
  {
    field: "Ownership and lifecycle",
    purpose:
      "Assign fictional detection, source, service, identity, analyst, privacy, deployment, risk, review, and retirement responsibilities.",
    strongExample:
      "Identity-detection owner reviews after role schema, emergency workflow, or approval-system change.",
    weakExample:
      "Security team owns it.",
  },
];

const timingDesign = [
  {
    timingIssue: "Fixed time window",
    use:
      "Relate fictional records or count events within a defined period.",
    strongDesign:
      "Choose the window according to workflow timing, source delay, user impact, and response need.",
    risk:
      "A window that is too short misses delayed relationships; one that is too long combines unrelated activity.",
  },
  {
    timingIssue: "Expiration grace period",
    use:
      "Allow fictional workflow processing before treating a temporary state as stale.",
    strongDesign:
      "Base the grace period on documented revocation, synchronization, support, and recovery expectations.",
    risk:
      "A broad grace period can leave high-impact authority active too long.",
  },
  {
    timingIssue: "Sequence order",
    use:
      "Evaluate whether fictional approval, assignment, action, closure, and revocation occurred in the intended order.",
    strongDesign:
      "Use event time, collection time, processing time, clock alignment, optional steps, and delayed-source behavior.",
    risk:
      "Out-of-order arrival can create false sequence conclusions.",
  },
  {
    timingIssue: "Rolling count",
    use:
      "Measure fictional frequency or volume continuously over a moving interval.",
    strongDesign:
      "Document uniqueness, duplicate handling, peak periods, source completeness, and business state.",
    risk:
      "Retries or duplicate events may inflate counts.",
  },
  {
    timingIssue: "Historical comparison",
    use:
      "Compare fictional current behavior with an approved earlier period or baseline.",
    strongDesign:
      "Use representative states, seasonality, changes, source health, and peer groups.",
    risk:
      "Historical behavior may be stale or not authorized.",
  },
  {
    timingIssue: "Expected follow-up deadline",
    use:
      "Identify when a fictional result, revocation, confirmation, closure, or recovery event has not appeared.",
    strongDesign:
      "Document required versus optional follow-up, source health, alternate completion, and escalation timing.",
    risk:
      "Delayed collection may be mistaken for missing workflow completion.",
  },
  {
    timingIssue: "Suppression or cooldown",
    use:
      "Reduce repeated fictional alerts for the same continuing condition while preserving state changes and escalation.",
    strongDesign:
      "Keep identity, asset, severity, state transition, source health, and owner visibility.",
    risk:
      "Long suppression can hide worsening impact or repeated distinct events.",
  },
  {
    timingIssue: "Recovery observation period",
    use:
      "Confirm fictional source, service, policy, or workflow stability after correction.",
    strongDesign:
      "Measure normal operation, queued events, duplicate replay, source health, user outcome, and recurrence.",
    risk:
      "Closing immediately after one healthy event may miss instability.",
  },
];

const missingDataStates = [
  {
    state: "Required source healthy",
    logicBehavior:
      "Evaluate the fictional conditions normally and use documented confidence.",
    alertGuidance:
      "Display required evidence, context, limits, and next questions.",
    closure:
      "Use standard evidence and owner criteria.",
  },
  {
    state: "Optional enrichment stale",
    logicBehavior:
      "Evaluate the core fictional condition but mark enrichment-dependent context as limited.",
    alertGuidance:
      "Avoid owner-, peer-, or criticality-based certainty until enrichment is refreshed.",
    closure:
      "Do not close solely on stale enrichment.",
  },
  {
    state: "Required field missing",
    logicBehavior:
      "Return a fictional Conditional or Unknown result according to the defender question.",
    alertGuidance:
      "Explain which field is missing and which conclusions are unsupported.",
    closure:
      "Require alternate evidence, source restoration, or documented unresolved status.",
  },
  {
    state: "Required source delayed",
    logicBehavior:
      "Lower fictional confidence, preserve the observation, and wait or use approved alternate evidence.",
    alertGuidance:
      "Show delay, blind-period start, affected logic, and analyst limitations.",
    closure:
      "Reassess when the source recovers.",
  },
  {
    state: "Sources conflict",
    logicBehavior:
      "Create a fictional reconciliation result instead of silently choosing one source.",
    alertGuidance:
      "Display authority, timing, provenance, schema, and owner differences.",
    closure:
      "Resolve the conflict or document residual uncertainty.",
  },
  {
    state: "Source blind",
    logicBehavior:
      "Do not claim the fictional condition was absent; suspend or separate unsupported logic.",
    alertGuidance:
      "Record the blind period and identify alternate sources or manual review.",
    closure:
      "Backfill, reassess, and document coverage loss when possible.",
  },
  {
    state: "Source recovering",
    logicBehavior:
      "Use limited fictional confidence until backlog, duplicates, schema, clock, and field completeness are validated.",
    alertGuidance:
      "Identify replayed events and historical uncertainty.",
    closure:
      "Reconcile alerts generated during the degraded and recovering periods.",
  },
  {
    state: "Health evidence uncertain",
    logicBehavior:
      "Treat fictional source-health confidence itself as limited.",
    alertGuidance:
      "Use independent confirmation and disclose residual uncertainty.",
    closure:
      "Validate the health-monitoring dependency before restoring full confidence.",
  },
];

const evidenceMatrix = [
  {
    id: "LOGIC-01",
    source: "Fictional defender-question catalog",
    observation:
      "The program needs to know whether emergency administrative roles remain effectively active beyond approved windows.",
    supports:
      "A stale-authority detection has a clear mission and decision purpose.",
    limits:
      "The question does not define which fields, timing, sources, or logic are sufficient.",
    use:
      "Trace every condition back to the exact defender question.",
  },
  {
    id: "LOGIC-02",
    source: "Fictional identity-source map",
    observation:
      "Role assignment is current, group membership is delayed, approval extensions are recorded separately, and session evidence is optional.",
    supports:
      "The logic requires multiple sources and explicit missing-data behavior.",
    limits:
      "The map does not prove the sources correlate correctly in every case.",
    use:
      "Define required fields, joins, confidence states, and tests.",
  },
  {
    id: "LOGIC-03",
    source: "Fictional workflow timeline",
    observation:
      "Emergency access is approved, assigned, used during an exercise, and expected to be revoked after closure.",
    supports:
      "Sequence and expected-follow-up concepts are appropriate.",
    limits:
      "The timeline does not prove every exercise follows the same path or timing.",
    use:
      "Document required and optional steps, windows, and alternatives.",
  },
  {
    id: "LOGIC-04",
    source: "Fictional test record",
    observation:
      "Initial logic alerts correctly on stale roles but also alerts on valid approved extensions.",
    supports:
      "The logic is missing extension context and has false-positive risk.",
    limits:
      "One failed case does not prove the entire logic is unusable.",
    use:
      "Add a precise extension relationship and regression tests.",
  },
  {
    id: "LOGIC-05",
    source: "Fictional degraded-source test",
    observation:
      "When group-membership evidence is delayed, the detection still reports High confidence.",
    supports:
      "Missing-data behavior and confidence separation are incomplete.",
    limits:
      "The test does not prove real analysts would misinterpret every alert.",
    use:
      "Return Conditional or Moderate confidence until effective access is validated.",
  },
  {
    id: "LOGIC-06",
    source: "Fictional analyst feedback",
    observation:
      "Analysts need identity, role, owner, approval end, extension state, source health, group state, and next questions to use the alert consistently.",
    supports:
      "Alert usefulness depends on enrichment and documentation.",
    limits:
      "Analyst preference does not prove coverage or logic correctness.",
    use:
      "Define required alert content and triage guidance.",
  },
  {
    id: "LOGIC-07",
    source: "Fictional privacy review",
    observation:
      "Personal profile details are unnecessary for the stale-role question; role, owner group, approval, timing, and state are sufficient.",
    supports:
      "The logic and alert can use minimized identity fields.",
    limits:
      "Different future defender questions may require other fields.",
    use:
      "Document purpose-based field selection and review triggers.",
  },
  {
    id: "LOGIC-08",
    source: "Fictional lifecycle record",
    observation:
      "The emergency-access workflow and role schema will change, but the detection lacks a scheduled review.",
    supports:
      "The logic needs ownership, versioning, review triggers, and regression testing.",
    limits:
      "The missing review does not prove current logic is wrong.",
    use:
      "Assign review owners and change-dependent validation.",
  },
];

const commonMistakes = [
  {
    mistake: "Too many ideas in one detection",
    observation:
      "A fictional rule combines unusual time, destination, volume, identity, device, DNS, and privilege without a single defender question.",
    impact:
      "The result is difficult to test, explain, tune, and maintain.",
    correction:
      "Split the design into clear questions or document a justified composite model.",
  },
  {
    mistake: "Unclear field semantics",
    observation:
      "A fictional result field is used without confirming whether it represents technical success, policy success, or business completion.",
    impact:
      "Logic may alert or close on the wrong meaning.",
    correction:
      "Use a versioned field dictionary and source owner validation.",
  },
  {
    mistake: "No source-health condition",
    observation:
      "A fictional logic design treats delayed and healthy sources identically.",
    impact:
      "The alert may express false confidence or fail silently.",
    correction:
      "Define Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering behavior.",
  },
  {
    mistake: "Overbroad exclusion",
    observation:
      "A fictional administrator group is excluded from alerts because maintenance creates noise.",
    impact:
      "Meaningful activity outside approved maintenance may be hidden.",
    correction:
      "Use identity, destination, time, change, owner, purpose, and expiration context.",
  },
  {
    mistake: "Threshold without uniqueness",
    observation:
      "A fictional count includes duplicate supplier retry records.",
    impact:
      "The detection may overstate frequency or volume.",
    correction:
      "Document event identity, retry semantics, aggregation, and duplicate tests.",
  },
  {
    mistake: "Sequence ignores timing quality",
    observation:
      "A fictional sequence assumes event order from collection time even though source delays differ.",
    impact:
      "Events may appear in the wrong order.",
    correction:
      "Use event, collection, processing time, clock alignment, and uncertainty.",
  },
  {
    mistake: "Absence equals failure",
    observation:
      "A fictional missing revocation record is treated as proof that access remained active.",
    impact:
      "Source delay or blind periods may be misclassified as policy failure.",
    correction:
      "Use source health, alternate evidence, waiting periods, and Unknown states.",
  },
  {
    mistake: "Severity equals confidence",
    observation:
      "A fictional High-impact condition is presented as High-confidence evidence.",
    impact:
      "Potential importance and certainty become confused.",
    correction:
      "Record severity and confidence separately.",
  },
  {
    mistake: "Positive test means complete",
    observation:
      "A fictional logic alerts on one intended case and is approved.",
    impact:
      "Expected behavior, missing fields, degraded sources, privacy, and edge cases remain untested.",
    correction:
      "Use comprehensive synthetic testing and regression records.",
  },
  {
    mistake: "Real logic appears in a public artifact",
    observation:
      "A fictional portfolio includes copied internal query syntax, source fields, alert logic, identifiers, or event samples.",
    impact:
      "Sensitive defensive capabilities and internal architecture may be exposed.",
    correction:
      "Use conceptual, invented logic and completely fictional evidence.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Choose one defender question",
    action:
      "Select a fictional identity, service, supplier, policy, DNS, wireless, evidence, or recovery question with a clear decision purpose.",
    output:
      "Detection-question and non-proof statement.",
    quality:
      "The question can be answered by one bounded detection design.",
  },
  {
    step: "2",
    title: "Map required evidence",
    action:
      "List fictional primary, corroborating, enrichment, and source-health sources with required and optional fields.",
    output:
      "Evidence and field requirements matrix.",
    quality:
      "Every field has known meaning, provenance, timing, privacy, and owner.",
  },
  {
    step: "3",
    title: "Write the behavior hypothesis",
    action:
      "Describe fictional expected behavior, meaningful deviation, alternative explanations, assumptions, and impact.",
    output:
      "Behavior-hypothesis statement.",
    quality:
      "The hypothesis is not written as a confirmed harmful event.",
  },
  {
    step: "4",
    title: "Select the logic type",
    action:
      "Choose fictional single-event, relationship, sequence, threshold, absence, state-change, peer, composite, policy-difference, or health-aware logic.",
    output:
      "Logic-type rationale.",
    quality:
      "The selected type matches the defender question and source capabilities.",
  },
  {
    step: "5",
    title: "Define conditions and timing",
    action:
      "Specify fictional conditions, relationships, keys, windows, counts, order, states, grace periods, and expected follow-ups.",
    output:
      "Conceptual condition and timing design.",
    quality:
      "Timing reflects workflow, source delay, response need, and user impact.",
  },
  {
    step: "6",
    title: "Add context and exclusions",
    action:
      "Document fictional identity, owner, destination, change, maintenance, assignment, peer, exception, and source-health context.",
    output:
      "Context and exclusion register.",
    quality:
      "No exclusion is broader than the approved purpose.",
  },
  {
    step: "7",
    title: "Define missing-data behavior",
    action:
      "State how fictional results change for stale enrichment, missing fields, delayed sources, conflicts, blind periods, recovery, and uncertain health.",
    output:
      "Missing-data and confidence matrix.",
    quality:
      "The detection never fails silently or claims unsupported certainty.",
  },
  {
    step: "8",
    title: "Create safe tests",
    action:
      "Build invented positive, negative, boundary, maintenance, change, duplicate, delayed, missing-field, source-degraded, privacy, and regression cases.",
    output:
      "Synthetic logic test plan.",
    quality:
      "Expected alert and non-alert outcomes are documented before testing.",
  },
  {
    step: "9",
    title: "Write analyst guidance",
    action:
      "Define fictional alert fields, severity, confidence, next questions, evidence requests, escalation, closure, unresolved states, and response boundaries.",
    output:
      "Alert and triage guidance.",
    quality:
      "The alert states what the logic supports and does not prove.",
  },
  {
    step: "10",
    title: "Document lifecycle ownership",
    action:
      "Assign fictional owners, version, approval, observation, metrics, rollback, review triggers, changes, recertification, and retirement.",
    output:
      "Detection-logic specification and lifecycle record.",
    quality:
      "Another reviewer can understand, test, maintain, and safely retire the design.",
  },
];

const quizQuestions = [
  {
    question:
      "What should determine the type of fictional detection logic used?",
    choices: [
      "The most impressive alert title.",
      "The defender question, behavior hypothesis, source capabilities, timing, evidence health, and decision need.",
      "The largest number of available fields.",
      "The highest possible severity.",
    ],
    answer: 1,
    explanation:
      "Logic should represent a documented question and evidence model rather than technology availability or drama.",
  },
  {
    question:
      "What is the strongest use of sequence logic?",
    choices: [
      "To treat every event as unrelated.",
      "To evaluate an ordered fictional workflow with documented keys, timing, optional steps, and source-health limits.",
      "To avoid testing.",
      "To prove user intent.",
    ],
    answer: 1,
    explanation:
      "Sequence logic is appropriate when order and timing matter, but it still requires careful evidence interpretation.",
  },
  {
    question:
      "A fictional expected follow-up event is missing. What is safest?",
    choices: [
      "Declare the workflow failed.",
      "Review waiting period, source health, optional paths, alternate evidence, correlation, and owner context before concluding.",
      "Ignore the missing event forever.",
      "Increase severity automatically.",
    ],
    answer: 1,
    explanation:
      "Absence may result from real noncompletion or from evidence delay, source failure, optional workflow, or correlation problems.",
  },
  {
    question:
      "Why must severity and confidence be separate?",
    choices: [
      "Because severity is always low.",
      "Because a condition can have high potential impact but limited evidence certainty, or strong evidence with low impact.",
      "Because confidence replaces testing.",
      "Because analysts do not need severity.",
    ],
    answer: 1,
    explanation:
      "Importance and certainty describe different dimensions of a detection result.",
  },
  {
    question:
      "Which fictional exclusion is strongest?",
    choices: [
      "Exclude all administrators.",
      "Exclude only the approved maintenance identity, destination, purpose, change window, owner, and expiration that was tested and documented.",
      "Exclude every event after hours.",
      "Exclude any identity that alerted before.",
    ],
    answer: 1,
    explanation:
      "Narrow, contextual, owned, time-bound exclusions reduce noise without hiding broad risk.",
  },
  {
    question:
      "A required fictional source is delayed. What should the logic do?",
    choices: [
      "Continue with full confidence.",
      "Silently stop.",
      "Follow documented missing-data behavior, such as Conditional status, lower confidence, alternate evidence, and analyst guidance.",
      "Declare every result malicious.",
    ],
    answer: 2,
    explanation:
      "Degraded evidence should produce explicit, designed behavior rather than silence or false certainty.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use real detection syntax with fake source names.",
      "Use real internal fields but invented events.",
      "Use completely invented conceptual logic, sources, fields, events, alerts, owners, tests, dates, and outcomes.",
      "Use real screenshots after blurring identities.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real defensive capabilities, systems, people, and internal architecture.",
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

export default function DetectionLogicConceptsPage() {
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
              Lesson 3 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Conditions, Timing, Context, and Confidence
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A5.3 Detection Logic Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders translate fictional questions and evidence into
            conceptual detection logic using conditions, relationships,
            sequences, counts, time windows, state changes, context,
            exclusions, missing-data behavior, confidence, severity, testing,
            documentation, and lifecycle review.
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
          lessonTitle="Detection Logic Concepts"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented questions, sources, fields, events, relationships, logic, alerts, tests, owners, dates, decisions, and outcomes.",
            "I will describe logic conceptually rather than providing real query syntax or operational detection configurations.",
            "I understand that a fictional logic match is an observation, not automatic proof of compromise, intent, cause, scope, or impact.",
            "I will separate severity, confidence, source health, context, authorization, and mission impact.",
            "I will design missing-data behavior, tests, exclusions, ownership, lifecycle, and review triggers.",
            "I will not access, query, collect, test, deploy, tune, suppress, block, investigate, or modify any real telemetry, rule, detection platform, account, endpoint, network, domain, service, supplier, or organization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Condition Can Be Correct and Still Produce a Bad Detection"
        >
          <p className="leading-8">
            A fictional rule checks whether an emergency role is visible after
            its approved end time. The condition sounds reasonable, but the
            first version ignores approved extensions, delayed group evidence,
            optional closure steps, source health, and the difference between
            visible assignment and effective access. The logic is technically
            clear but defensively incomplete.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak logic statement
              </p>
              <p className="mt-2 leading-7">
                “Alert when a privileged role exists after the end time.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong logic statement
              </p>
              <p className="mt-2 leading-7">
                “Identify a fictional emergency role remaining assigned beyond
                its approved end when no current extension exists, source health
                supports the observation, and revocation or effective-access
                evidence is not yet confirmed.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Detection logic is not only the condition that matches. It is the
            full evidence, timing, context, missing-data, testing, analyst, and
            lifecycle design around that condition.
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
          title="Logic Determines Which Evidence Becomes an Analyst Decision"
        >
          <p className="leading-8">
            Fictional detection logic decides which records are related, which
            conditions matter, how long to wait, what expected behavior should
            be excluded, how missing sources affect confidence, what appears in
            the alert, and which analyst question follows. Weak logic can create
            excessive noise, missed conditions, false certainty, privacy
            problems, or harmful automated responses.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Evidence representation",
                "Use fictional source fields and relationships that actually represent the defender question.",
              ],
              [
                "Decision behavior",
                "Define fictional alert, confidence, severity, analyst guidance, and missing-data outcomes.",
              ],
              [
                "Lifecycle quality",
                "Test, tune, document, approve, observe, review, change, and retire fictional logic responsibly.",
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

        <SectionCard eyebrow="Core Framework" title="The L-O-G-I-C Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {[
              [
                "L — Link to the defender question",
                "Trace every fictional condition to the mission risk, decision, and non-proof statement.",
              ],
              [
                "O — Organize evidence and timing",
                "Define fictional sources, fields, relationships, event time, windows, delays, coverage, and source health.",
              ],
              [
                "G — Govern context and gaps",
                "Use fictional identity, owner, change, maintenance, peer, authorization, exclusion, privacy, and missing-data behavior.",
              ],
              [
                "I — Invent and run safe tests",
                "Create fictional positive, negative, boundary, change, duplicate, delayed, missing-field, degraded-source, and regression cases.",
              ],
              [
                "C — Communicate and maintain",
                "Document fictional alert meaning, confidence, severity, analyst guidance, ownership, metrics, versioning, review, rollback, and retirement.",
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
              Decision-ready logic statement
            </p>
            <p className="mt-2 leading-7">
              This fictional logic addresses one defender question using named
              evidence, documented field meaning, relationships, timing,
              context, exclusions, source-health behavior, confidence, severity,
              testing, analyst guidance, ownership, limitations, and review
              triggers.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Detection Logic Concepts"
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
            Apply Ten Logic Design Principles
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {logicPrinciples.map((item) => (
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
          title="Compare Ten Logic Types"
        >
          <div className="grid gap-5">
            {logicTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.type}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Defender question", item.defenderQuestion],
                    ["Fictional example", item.example],
                    ["Strengths", item.strengths],
                    ["Limitations", item.limitations],
                    ["Source requirements", item.sourceNeeds],
                    ["Testing requirements", item.testNeeds],
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
          eyebrow="Instructional Section 3"
          title="Write Every Logic Specification with Twelve Fields"
        >
          <div className="grid gap-5">
            {logicSpecificationFields.map((item, index) => (
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
                      Weak example
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.weakExample}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 4
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Design Timing without Creating False Certainty
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {timingDesign.map((item) => (
              <article
                key={item.timingIssue}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.timingIssue}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.use}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong design
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.strongDesign}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Risk
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.risk}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Define Eight Missing-Data States"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Evidence state",
                    "Logic behavior",
                    "Alert guidance",
                    "Closure requirement",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {missingDataStates.map((row) => (
                  <tr key={row.state}>
                    <td className="px-4 py-4 align-top font-bold text-white">
                      {row.state}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.logicBehavior}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.alertGuidance}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.closure}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Separate Severity, Confidence, Priority, and Response"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Severity",
                "How serious could the fictional condition be if confirmed?",
                "Consider identity, asset, service, supplier, privilege, data, blast radius, user impact, and recoverability.",
                "Severity does not prove the condition occurred as interpreted.",
              ],
              [
                "Confidence",
                "How strongly do fictional evidence and source health support the observation and interpretation?",
                "Consider provenance, required fields, freshness, completeness, timing, correlation, alternatives, and coverage.",
                "High confidence does not automatically mean high mission impact.",
              ],
              [
                "Priority",
                "How quickly should a fictional analyst or owner review the result?",
                "Combine severity, confidence, active impact, identity, criticality, source health, time sensitivity, and response opportunity.",
                "Priority can change as new evidence arrives.",
              ],
              [
                "Response",
                "Which fictional bounded action is justified now?",
                "Choose evidence requests, owner validation, monitoring, containment concepts, escalation, closure, rollback, or unresolved status.",
                "A correct detection does not automatically justify disruptive action.",
              ],
            ].map(([title, question, design, caution]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <p className="mt-3 font-semibold leading-6 text-slate-200">
                  {question}
                </p>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Design guidance
                  </p>
                  <p className="mt-2 text-sm leading-6">{design}</p>
                </div>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Caution
                  </p>
                  <p className="mt-2 text-sm leading-6">{caution}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Trace Logic from Question to Analyst Decision"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Stage",
                    "Fictional design question",
                    "Required artifact",
                    "Failure if skipped",
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
                    "Mission",
                    "Which user, identity, service, supplier, policy, evidence, or recovery outcome matters?",
                    "Mission-risk statement.",
                    "Logic may exist without defensive value.",
                  ],
                  [
                    "Question",
                    "What must the analyst determine?",
                    "Defender question and non-proof statement.",
                    "The alert may not support a clear decision.",
                  ],
                  [
                    "Evidence",
                    "Which sources and fields can answer the question?",
                    "Source and field requirements.",
                    "Conditions may rely on weak or misunderstood evidence.",
                  ],
                  [
                    "Hypothesis",
                    "Which expected and unusual behavior relationship matters?",
                    "Behavior hypothesis and alternatives.",
                    "Logic may confuse unusual with harmful.",
                  ],
                  [
                    "Logic",
                    "Which conditions, relationships, timing, context, and gaps produce a result?",
                    "Conceptual logic specification.",
                    "The detection cannot be tested or explained consistently.",
                  ],
                  [
                    "Test",
                    "Which invented cases should alert, not alert, or return Unknown?",
                    "Synthetic test matrix.",
                    "Noise, misses, and degraded-source failures remain hidden.",
                  ],
                  [
                    "Alert",
                    "Which evidence, confidence, severity, limits, and next questions appear?",
                    "Alert content and analyst guide.",
                    "Analysts may treat a match as a confirmed incident.",
                  ],
                  [
                    "Lifecycle",
                    "Who reviews sources, logic, metrics, changes, exceptions, and retirement?",
                    "Owner and review record.",
                    "The capability becomes stale.",
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
          eyebrow="Fictional Logic Architecture"
          title="Northbridge Detection Logic Operating Model"
        >
          <p className="leading-8">
            This conceptual model is completely invented and intentionally
            non-operational. It teaches logic relationships without real query
            syntax, source names, fields, event values, identities, alert
            rules, systems, domains, providers, or incident records.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Mission and question", "Risk, decision, owner, non-proof statement"],
                ["Evidence model", "Sources, fields, provenance, timing, health, privacy"],
                ["Behavior hypothesis", "Expected, deviation, sequence, alternatives, impact"],
                ["Logic type", "Event, relationship, sequence, threshold, absence, state"],
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
                Fictional Detection Logic Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Conditions", "Fields, values, states, categories, relationships"],
                  ["Timing", "Windows, order, delays, expiration, follow-up"],
                  ["Context", "Identity, owner, service, change, maintenance, peer"],
                  ["Exclusions", "Approved, narrow, owned, time-bound, tested"],
                  ["Data gaps", "Missing, delayed, stale, conflict, blind, recovery"],
                  ["Result", "Observation, confidence, severity, priority, limits"],
                  ["Testing", "Positive, negative, boundary, degraded, regression"],
                  ["Lifecycle", "Version, owner, metrics, change, rollback, retirement"],
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
                ["Alert output", "Evidence, source health, confidence, severity, next questions"],
                ["Analyst decision", "Validate, enrich, compare, escalate, close, reopen"],
                ["Owner decision", "Approve, tune, accept risk, improve, retire"],
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
          title="Fake Northbridge Detection Logic Dashboard"
          subtitle="Fictional logic quality, source-health behavior, testing, ownership, and lifecycle status for training only."
          metrics={[
            {
              label: "Logic designs with complete defender-question traceability",
              value: "13 / 17",
              note: "Four fictional designs still begin with broad alert ideas rather than bounded questions.",
            },
            {
              label: "Logic designs with degraded-source behavior",
              value: "8 / 17",
              note: "Nine fictional designs require explicit missing-field, delayed-source, or conflict handling.",
            },
            {
              label: "Logic designs with full regression tests",
              value: "7 / 17",
              note: "Most fictional designs need additional negative, boundary, maintenance, or schema-change cases.",
            },
          ]}
        />

        <FakeAlertCard
          title="Emergency Role Condition Matched with Delayed Group Evidence"
          severity="High"
          time="4:12 PM"
          source="Fake Northbridge Detection Logic Console"
          details="The fictional role remains assigned beyond its approved end time, no current extension is present, role-state evidence is current, group-membership evidence is delayed, and effective access has not been confirmed. Potential impact is High, while evidence confidence is Moderate."
          recommendation="Keep the result Conditional. Validate fictional group state, session activity, extension, owner, source health, revocation, and service impact. Do not describe the alert as proof of misuse or compromise."
        />

        <FakeLogPanel
          title="Fake Detection Logic Design Timeline"
          logs={[
            "09:00 QUESTION stale-emergency-role='defined'",
            "09:08 SOURCE role-state='required'",
            "09:16 SOURCE approval-end='required'",
            "09:24 SOURCE extension='required'",
            "09:32 SOURCE group-state='required'",
            "09:40 HYPOTHESIS stale-authority='documented'",
            "09:48 LOGIC type='sequence-plus-absence'",
            "09:56 WINDOW grace-period='documented'",
            "10:04 TEST stale-role='passed'",
            "10:12 TEST valid-extension='failed'",
            "10:20 CONTEXT extension-join='added'",
            "10:28 TEST regression='passed'",
            "10:36 TEST delayed-group='conditional'",
            "10:44 CONFIDENCE observation='high'",
            "10:52 CONFIDENCE effective-access='moderate'",
            "11:00 SEVERITY potential-impact='high'",
            "11:08 STATUS logic='conditional'",
            "11:16 OWNER detection='assigned'",
            "11:24 REVIEW trigger='role-schema-change'",
            "16:12 ALERT issue='stale-role-condition'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Logic Evidence Supports—and What It Does Not Prove
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
                    ["Logic-design use", item.use],
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
          title="Which Logic Decision Is Best Supported?"
          question="Which conclusion most responsibly represents the fictional stale-role logic?"
          evidence={[
            "The defender question is clearly defined.",
            "Role state, approval end, extension, group state, and revocation are documented as required evidence.",
            "Role-state evidence is current.",
            "Group-state evidence is delayed.",
            "The initial logic produced a false positive for an approved extension.",
            "Extension context was added and regression testing passed.",
            "Effective access and misuse remain unconfirmed.",
            "The emergency-access workflow will change and requires future review.",
          ]}
          options={[
            "Keep the fictional logic Conditional, preserve High potential severity and Moderate confidence, validate group and session state, retain extension context, add degraded-source tests, document non-proof limits, and schedule workflow-change review.",
            "Declare the identity compromised because the condition matched.",
            "Suppress all emergency-role alerts because extensions may exist.",
            "Approve the logic permanently because the regression test passed.",
          ]}
          bestAnswer={0}
          explanation="The first option preserves the strongest supported observation while addressing delayed evidence, false-positive history, future change, and the difference between severity and confidence."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Logic Design Errors"
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
          title="Build the Northbridge Detection Logic Specification"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            collect, query, search, inspect, test, deploy, tune, suppress,
            block, investigate, or modify any real telemetry, detection rule,
            source, account, endpoint, network, domain, application, supplier,
            platform, or organization.
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
          title="A Threshold Detection Is Inflated by Duplicate Supplier Events"
          scenario="A fictional supplier-volume detection alerts because the event count crosses its threshold. Review shows that delivery retries can create duplicate records, and the logic does not distinguish unique requests from repeated delivery evidence."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the fictional detection Conditional, document event identifiers and retry semantics, compare unique requests with repeated records, add duplicate and legitimate-repeat tests, revise aggregation, and preserve rollback.",
              outcome:
                "Best defensive choice. It corrects the evidence model before changing severity or suppressing the alert.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Increase the threshold until alerts stop.",
              outcome:
                "Weak. The count remains semantically wrong and may still miss meaningful unique activity.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete all repeated records automatically.",
              outcome:
                "Weak. Some repeated records may represent legitimate distinct activity rather than duplicates.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Missing Follow-Up Event May Be a Source Blind Period"
          scenario="A fictional recovery workflow should produce a closure confirmation after emergency access is revoked. The confirmation is absent, but the application source entered a blind period during the same window."
          choices={[
            {
              label: "Choice A",
              response:
                "Return a fictional Unknown or Conditional result, record the blind period, use alternate identity, change, session, and owner evidence, reassess after recovery, and avoid claiming that closure failed.",
              outcome:
                "Best choice. It separates missing evidence from confirmed workflow failure.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare the emergency role active because the closure event is missing.",
              outcome:
                "Weak. Absence during a blind period does not prove the state remained active.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Close the alert because the source was unhealthy.",
              outcome:
                "Weak. The underlying condition remains unresolved and needs alternate evidence or reassessment.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design Logic That Remains Useful during Change and Source Degradation"
        >
          <p className="leading-8">
            Fictional Northbridge wants one detection for privileged lifecycle,
            supplier behavior, DNS differences, wireless class changes,
            application state, and recovery closure. The evidence arrives at
            different times, uses different identifiers, includes duplicates,
            changes schemas, and becomes partially unavailable during
            maintenance and recovery.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Separate defender questions",
                "Split fictional privileged, supplier, DNS, wireless, application, and recovery concerns into bounded questions or justified composites.",
              ],
              [
                "Map source dependencies",
                "Document fictional required and optional fields, timing, joins, provenance, health, privacy, and alternatives.",
              ],
              [
                "Define logic states",
                "Use fictional Healthy, Conditional, Unknown, Degraded, Blind, Conflicting, and Recovering outcomes.",
              ],
              [
                "Control timing and duplication",
                "Document fictional event identity, retries, windows, sequence, grace periods, expected follow-ups, and clock limits.",
              ],
              [
                "Build comprehensive tests",
                "Use fictional positive, negative, boundary, maintenance, schema-change, duplicate, delayed, blind, recovery, and regression cases.",
              ],
              [
                "Maintain lifecycle traceability",
                "Assign fictional version, owners, metrics, observation, tuning, rollback, review triggers, residual risk, and retirement.",
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
              Produce a fictional defender-question map, evidence dependency
              model, logic-type decisions, timing design, correlation model,
              context and exclusion register, missing-data matrix, severity and
              confidence model, synthetic test plan, analyst guide, version
              history, review-trigger schedule, residual-risk statement, and
              leadership summary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Detection Logic Concepts Checklist"
          items={[
            "I can translate a fictional defender question into conceptual conditions, relationships, timing, context, and evidence requirements.",
            "I can distinguish single-event, multi-event, sequence, threshold, absence, state-change, peer, composite, policy-difference, and source-health-aware logic.",
            "I can document direct, derived, normalized, enriched, grouped, missing, and conflicting evidence conditions.",
            "I can define correlation keys, joins, event time, collection time, processing time, windows, grace periods, sequence order, and expected follow-ups.",
            "I can use narrow fictional exclusions with identity, destination, purpose, change, time, owner, expiration, testing, and rollback.",
            "I can define logic behavior for healthy, stale, missing, delayed, conflicting, blind, recovering, and uncertain-health evidence.",
            "I can separate fictional severity, confidence, priority, and response.",
            "I can write non-proof statements explaining that a logic match does not automatically establish compromise, intent, cause, scope, or impact.",
            "I can build positive, negative, boundary, change, maintenance, duplicate, missing-field, degraded-source, privacy, and regression tests.",
            "I can create alert and analyst guidance with evidence, source health, confidence, limits, next questions, escalation, and closure.",
            "I can maintain fictional owners, versions, metrics, change history, rollback, review triggers, residual risk, recertification, and retirement.",
            "I can create a completely fictional logic artifact without exposing real query syntax, rules, sources, fields, events, alerts, systems, or internal architecture.",
          ]}
        />

        <MiniQuiz
          title="A5.3 Mini Quiz: Detection Logic Concepts"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Detection Logic Specification Package for the Northbridge Student-Support Cooperative. Include mission, purpose, scope, stakeholders, exclusions, safety boundary, at least twenty defender questions, non-proof statements, mission risks, primary sources, corroborating sources, enrichment sources, source-health sources, required fields, optional fields, field meaning, provenance, event time, collection time, processing time, correlation keys, joins, single-event logic, multi-event logic, sequence logic, threshold logic, absence logic, state-change logic, peer-group logic, composite logic, policy-difference logic, source-health-aware logic, behavior hypotheses, expected behavior, meaningful deviation, alternatives, assumptions, conditions, relationships, time windows, counts, rates, sequence order, grace periods, expected follow-ups, suppression periods, recovery observation, allow context, exclusions, missing-data behavior, Healthy states, Conditional states, Unknown states, Degraded states, Blind states, Conflicting states, Recovering states, severity, confidence, priority, response, positive tests, negative tests, boundary tests, maintenance tests, change tests, duplicate tests, delayed-source tests, missing-field tests, privacy tests, regression tests, alert fields, analyst questions, evidence requests, escalation criteria, closure criteria, owners, versions, approval, observation, metrics, tuning, rollback, review triggers, residual risks, retirement, leadership summary, analyst guide, reflection, and a statement that every organization, source, field, event, identity, logic design, alert, test, owner, date, decision, and outcome is invented."
          tips={[
            "Begin every fictional logic design with one defender question and one non-proof statement.",
            "Use conceptual logic and invented evidence rather than real query syntax or operational configurations.",
            "Separate severity, confidence, priority, response, source health, and mission impact.",
            "Design missing-data behavior and comprehensive tests before declaring a logic design ready.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Behavior-Based Detection Thinking?"
        >
          <p className="leading-8">
            Before moving to A5.4, rate your readiness from 1 to 5 for defender
            questions, evidence, logic types, timing, sequence, thresholds,
            relationships, context, exclusions, missing-data states, severity,
            confidence, testing, analyst guidance, ownership, lifecycle, and
            complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can choose a fictional logic type according to the defender question and evidence.",
              "I can explain why one condition or one field rarely proves a full outcome.",
              "I can design timing, sequence, threshold, and expected-follow-up behavior carefully.",
              "I can use narrow context and exclusions instead of broad suppression.",
              "I can define Conditional, Unknown, Degraded, Blind, Conflicting, and Recovering logic states.",
              "I can separate severity from confidence and priority from response.",
              "I can test alert, non-alert, missing-data, duplicate, change, and regression outcomes.",
              "I can produce a safe conceptual logic artifact without copying real rules or internal telemetry.",
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
            Record one fictional defender question, one logic type, one required
            field, one timing decision, one narrow exclusion, one missing-data
            state, one confidence limit, and one question you will carry into
            A5.4.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Detection logic should begin with one fictional defender question and a documented mission risk.",
            "Single-event, relationship, sequence, threshold, absence, state-change, peer, composite, policy-difference, and source-health-aware logic answer different questions.",
            "Field meaning, provenance, timing, transformation, source health, and coverage determine what fictional conditions can responsibly support.",
            "Timing design should reflect workflow, source delay, uniqueness, expected follow-ups, maintenance, change, recovery, and user impact.",
            "Narrow, contextual, owned, time-bound, tested exclusions are safer than broad suppression.",
            "Missing, delayed, conflicting, blind, or recovering fictional evidence should produce explicit logic states and confidence changes.",
            "Severity describes potential importance, confidence describes evidence strength, priority describes review urgency, and response describes justified action.",
            "A fictional logic match is an observation and does not automatically prove compromise, intent, cause, scope, or impact.",
            "Comprehensive testing, versioning, ownership, metrics, rollback, review triggers, and retirement are part of logic quality.",
            "Every CyberShield logic artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, learn how fictional behavior-based detection connects
            identities, devices, services, destinations, timing, sequence,
            frequency, privilege, peer groups, change, baselines, authorization,
            source health, alternatives, and mission impact.
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