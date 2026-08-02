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
const previousLesson = `${modulePath}/mapping-alerts-to-defender-questions`;
const nextLesson = `${modulePath}/detection-documentation`;

const objectives = [
  "Design safe fictional detection tests using invented positive, negative, boundary, missing-field, duplicate, timing, source-health, change, maintenance, privacy, recovery, and regression cases.",
  "Differentiate a fictional test objective, test input, expected result, observed result, evidence state, decision state, defect, corrective action, validation gate, and completion criterion.",
  "Evaluate fictional detection behavior for alert precision, meaningful coverage, degraded-source handling, context use, privacy, analyst usefulness, response boundaries, and lifecycle resilience.",
  "Build a fictional test dataset that preserves provenance, field meaning, event time, collection time, processing time, uniqueness, relationships, source health, coverage, and complete separation from real environments.",
  "Create a portfolio-ready fictional detection validation package containing a test charter, data dictionary, case library, expected outcomes, defect register, regression plan, metrics, owners, residual risks, and review triggers.",
];

const vocabulary = [
  [
    "Safe detection test",
    "A fictional, isolated, authorized, non-operational evaluation of conceptual detection behavior using invented evidence and expected outcomes.",
  ],
  [
    "Synthetic data",
    "Completely invented fictional records created for a defined learning or validation purpose rather than copied from real systems.",
  ],
  [
    "Test charter",
    "A fictional document defining purpose, scope, boundaries, roles, evidence, cases, risks, completion criteria, and approval.",
  ],
  [
    "Test case",
    "A fictional scenario containing controlled inputs, source-health states, expected detection behavior, analyst questions, and outcome criteria.",
  ],
  [
    "Positive test",
    "A fictional case designed to produce the intended alert or decision state.",
  ],
  [
    "Negative test",
    "A fictional case designed not to produce the risk alert because the activity is expected, approved, or outside the condition.",
  ],
  [
    "Boundary test",
    "A fictional case evaluating behavior immediately below, at, and above a count, duration, expiration, sequence, or timing boundary.",
  ],
  [
    "Missing-field test",
    "A fictional case in which one required or optional field is absent to verify documented missing-data behavior.",
  ],
  [
    "Duplicate-data test",
    "A fictional case containing repeated records, retries, replays, or continuing-state observations.",
  ],
  [
    "Out-of-order test",
    "A fictional case in which records arrive in a different order from the underlying event sequence.",
  ],
  [
    "Source-degraded test",
    "A fictional case involving delayed, incomplete, stale, conflicting, blind, or recovering evidence.",
  ],
  [
    "Change-context test",
    "A fictional case containing an approved deployment, maintenance, migration, extension, replacement, or policy update.",
  ],
  [
    "Privacy test",
    "A fictional review confirming that only purpose-limited fields are collected, displayed, retained, and shared.",
  ],
  [
    "Regression test",
    "A fictional case retained to confirm that an earlier successful behavior continues after logic, source, field, context, or platform change.",
  ],
  [
    "Recovery test",
    "A fictional case evaluating queue, replay, duplication, clock, source restoration, state reconciliation, and reassessment after degradation.",
  ],
  [
    "Expected outcome",
    "The fictional alert, non-alert, Conditional, Unknown, Source-Degraded, Escalated, Expected, or Resolved behavior defined before execution.",
  ],
  [
    "Observed outcome",
    "The fictional result produced by the tested design.",
  ],
  [
    "Test oracle",
    "The fictional documented basis used to decide whether the observed outcome is correct.",
  ],
  [
    "Test evidence",
    "The fictional inputs, source-health state, logic version, output, notes, and decision records used to support a test conclusion.",
  ],
  [
    "Test defect",
    "A fictional mismatch between expected and observed behavior or a weakness in evidence, logic, context, privacy, documentation, or lifecycle.",
  ],
  [
    "Reproducibility",
    "The fictional ability for another reviewer to recreate the same inputs and compare the result consistently.",
  ],
  [
    "Isolation",
    "The fictional separation of the learning test from real accounts, systems, telemetry, users, suppliers, and operations.",
  ],
  [
    "Validation gate",
    "A fictional measurable requirement that must pass before a detection design or change advances.",
  ],
  [
    "Test review trigger",
    "A fictional event requiring revalidation, such as source, schema, field, logic, identity, service, workflow, privacy, supplier, or mission change.",
  ],
];

const testingPrinciples = [
  {
    principle: "Invent everything",
    description:
      "Every fictional identity, service, destination, source, field, timestamp, alert, owner, decision, and outcome must be created from scratch.",
    strongPractice:
      "Use names such as Northbridge Support Service and role categories such as Recovery Coordinator.",
    failure:
      "Real defensive evidence, people, systems, and architecture may be exposed.",
  },
  {
    principle: "Test the defender question",
    description:
      "A fictional case should validate whether the design supports its documented question rather than whether a dashboard merely displays an alert.",
    strongPractice:
      "Test whether stale effective authority is identified under healthy and degraded evidence.",
    failure:
      "The alert may fire while failing to support the intended decision.",
  },
  {
    principle: "Define expected outcomes first",
    description:
      "Fictional alert, non-alert, Conditional, Unknown, and Source-Degraded outcomes should be written before execution.",
    strongPractice:
      "State that delayed group evidence must lower authorization confidence.",
    failure:
      "Reviewers may reinterpret results after seeing them.",
  },
  {
    principle: "Test both detection directions",
    description:
      "Fictional validation should include cases that must alert and cases that must not create the same risk conclusion.",
    strongPractice:
      "Test stale authority and a current approved extension.",
    failure:
      "A design may appear successful while producing noise or misses.",
  },
  {
    principle: "Vary source health",
    description:
      "Fictional sources should be tested as Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering.",
    strongPractice:
      "Verify that missing group evidence creates a visible limitation rather than silent failure.",
    failure:
      "The design may work only under ideal evidence conditions.",
  },
  {
    principle: "Test timing and ordering",
    description:
      "Fictional event time, collection time, processing time, sequence, window, delay, clock, and expiration should be varied.",
    strongPractice:
      "Deliver extension evidence after role evidence while preserving the underlying approved sequence.",
    failure:
      "Out-of-order records may create false conclusions.",
  },
  {
    principle: "Preserve realistic relationships",
    description:
      "Fictional records should share documented identity, session, request, service, destination, change, and case relationships.",
    strongPractice:
      "Use one invented correlation identifier consistently across related records.",
    failure:
      "Tests may pass only because unrealistic records are easy to match.",
  },
  {
    principle: "Test context freshness",
    description:
      "Fictional owner, peer, criticality, assignment, maintenance, change, and authorization context should be current, stale, missing, or conflicting in different cases.",
    strongPractice:
      "Verify that stale service-owner enrichment cannot close an alert.",
    failure:
      "Context becomes hidden permanent trust.",
  },
  {
    principle: "Protect privacy in the dataset",
    description:
      "Fictional tests should use only fields necessary for the defender question and should exclude unnecessary personal detail.",
    strongPractice:
      "Use identity category, owner group, role, approval, and timing rather than personal profile data.",
    failure:
      "Testing may normalize excessive evidence collection.",
  },
  {
    principle: "Retain regression value",
    description:
      "Fictional defects and successful cases should become versioned regression tests with owners and review triggers.",
    strongPractice:
      "Keep the valid-extension false-positive case after the tuning correction.",
    failure:
      "Earlier defects may return after later changes.",
  },
];

const testCategories = [
  {
    category: "Core positive test",
    purpose:
      "Confirm that a fictional in-scope meaningful condition produces the intended alert and question path.",
    example:
      "A temporary role remains effectively active beyond expiration with no valid extension and healthy evidence.",
    expected:
      "High-severity fictional alert with strong observation confidence and authorization review.",
    failureMeaning:
      "Potential false-negative risk or broken field, source, relationship, timing, or logic.",
    evidence:
      "Role, group, session, approval end, extension, revocation, service, owner, and source health.",
  },
  {
    category: "Core negative test",
    purpose:
      "Confirm that fictional expected activity does not create the same risky conclusion.",
    example:
      "The temporary role is revoked on time and all required evidence is healthy.",
    expected:
      "No stale-authority risk alert; normal lifecycle record remains available.",
    failureMeaning:
      "False-positive risk or incorrect timing, state, field meaning, or relationship.",
    evidence:
      "Role, group, session, approval, revocation, closure, owner, and source health.",
  },
  {
    category: "Expected-alert test",
    purpose:
      "Confirm that a fictional approved condition remains visible when the design intentionally reports it.",
    example:
      "A role remains active under a current approved extension.",
    expected:
      "Expected or lower-priority alert with extension context and expiration.",
    failureMeaning:
      "The design may suppress useful awareness or mislabel approved behavior.",
    evidence:
      "Extension, identity, role, purpose, destination, owner, expiration, and source health.",
  },
  {
    category: "Boundary test",
    purpose:
      "Evaluate fictional behavior immediately before, at, and after a defined threshold or expiration.",
    example:
      "Role state at one minute before, exactly at, and one minute after the approved end.",
    expected:
      "Results match the documented grace period and time semantics.",
    failureMeaning:
      "Off-by-one, window, clock, or interpretation defect.",
    evidence:
      "Event, collection, processing time, approved end, grace period, clock state, and logic version.",
  },
  {
    category: "Missing required field test",
    purpose:
      "Verify fictional behavior when a required field is absent.",
    example:
      "Approval end is missing while role and session evidence are present.",
    expected:
      "Conditional or Unknown result explaining the missing field.",
    failureMeaning:
      "Silent failure, false absence, or unsupported confidence.",
    evidence:
      "Field dictionary, required-field list, source health, alternate evidence, and analyst guidance.",
  },
  {
    category: "Missing optional field test",
    purpose:
      "Verify fictional behavior when nonessential enrichment is absent.",
    example:
      "Service criticality is unavailable but role, approval, and effective-access evidence are healthy.",
    expected:
      "Core observation remains available while severity or prioritization is limited.",
    failureMeaning:
      "The design depends unnecessarily on optional context.",
    evidence:
      "Required and optional field definitions, confidence rules, and alert presentation.",
  },
  {
    category: "Duplicate and retry test",
    purpose:
      "Verify fictional uniqueness, grouping, and count behavior.",
    example:
      "The same supplier result is delivered three times after a retry.",
    expected:
      "One case or one unique event with retry context, unless repeated actions are truly distinct.",
    failureMeaning:
      "Inflated counts, duplicate alerts, or overaggressive deduplication.",
    evidence:
      "Event identifier, request identifier, retry state, timestamps, source path, and grouping logic.",
  },
  {
    category: "Out-of-order sequence test",
    purpose:
      "Verify fictional workflow interpretation when records arrive in a different order.",
    example:
      "Revocation is generated first but collected after session evidence.",
    expected:
      "Sequence confidence reflects event time and collection delay.",
    failureMeaning:
      "Collection order is mistaken for event order.",
    evidence:
      "Event time, collection time, processing time, clock alignment, sequence, and source health.",
  },
  {
    category: "Delayed-source test",
    purpose:
      "Verify fictional confidence and state when one required source arrives late.",
    example:
      "Group membership is delayed eight minutes while role and session evidence are current.",
    expected:
      "Conditional or Source-Degraded state with alternate-evidence guidance.",
    failureMeaning:
      "Full confidence, silent failure, or premature closure.",
    evidence:
      "Freshness, delay expectation, blind-period record, alternate sources, and reassessment rule.",
  },
  {
    category: "Conflicting-source test",
    purpose:
      "Verify fictional behavior when two sources disagree.",
    example:
      "The role source shows revoked while the group source still shows active membership.",
    expected:
      "Conflict is visible and routed for reconciliation.",
    failureMeaning:
      "The design silently trusts one source or creates unsupported certainty.",
    evidence:
      "Authority definitions, timestamps, provenance, schemas, source health, and owners.",
  },
  {
    category: "Change-context test",
    purpose:
      "Verify fictional behavior during an approved deployment, migration, maintenance, replacement, or policy update.",
    example:
      "A service reaches a new approved destination during a documented deployment.",
    expected:
      "Approved scope is recognized while out-of-scope identities, destinations, times, and results still alert.",
    failureMeaning:
      "Change context is either ignored or treated as broad trust.",
    evidence:
      "Change identifier, owner, scope, expected behavior, destination, time, result, rollback, and closure.",
  },
  {
    category: "Recovery and replay test",
    purpose:
      "Verify fictional behavior when a source returns after delay or blindness.",
    example:
      "Queued records replay after source recovery and create duplicate historical matches.",
    expected:
      "Recovering state, duplicate-aware processing, historical reassessment, and bounded confidence.",
    failureMeaning:
      "Alert flooding, false sequencing, missed blind-period cases, or incorrect closure.",
    evidence:
      "Blind-period timeline, backlog, replay marker, event time, collection time, duplicates, and recovery owner.",
  },
];

const datasetFields = [
  {
    field: "Fictional record identifier",
    purpose:
      "Distinguish each invented record and support reproducibility.",
    strongDesign:
      "Use a clearly fictional value such as EVT-F-104.",
    risk:
      "Reused identifiers can create accidental joins or hidden duplicates.",
  },
  {
    field: "Source category",
    purpose:
      "Identify whether the invented evidence represents identity, endpoint, network, DNS, application, supplier, change, support, or source health.",
    strongDesign:
      "Use source categories rather than real product or provider names.",
    risk:
      "Ambiguous source labels make provenance and field meaning unclear.",
  },
  {
    field: "Schema version",
    purpose:
      "Show which fictional field structure and meanings apply.",
    strongDesign:
      "Use invented version labels and document field changes.",
    risk:
      "Tests may hide schema drift.",
  },
  {
    field: "Event time",
    purpose:
      "Represent when the fictional activity or state change occurred.",
    strongDesign:
      "Keep it distinct from collection and processing time.",
    risk:
      "Sequence and boundary conclusions may use the wrong time.",
  },
  {
    field: "Collection time",
    purpose:
      "Represent when the fictional collector received the record.",
    strongDesign:
      "Vary it to test delay and out-of-order arrival.",
    risk:
      "Collection order may be mistaken for event order.",
  },
  {
    field: "Processing time",
    purpose:
      "Represent when fictional parsing, normalization, enrichment, or detection evaluation occurred.",
    strongDesign:
      "Use it to measure pipeline delay and replay.",
    risk:
      "Alert latency may be attributed to the wrong stage.",
  },
  {
    field: "Identity and role category",
    purpose:
      "Represent the fictional user, service, supplier, privileged, emergency, or recovery identity relationship.",
    strongDesign:
      "Use invented categories and owner groups rather than personal details.",
    risk:
      "Identity may be mistaken for authorization.",
  },
  {
    field: "Service and destination category",
    purpose:
      "Represent fictional mission purpose and communication or action scope.",
    strongDesign:
      "Use service classes and destination classes rather than real hosts or domains.",
    risk:
      "A destination label may not prove the application action or owner.",
  },
  {
    field: "Authorization context",
    purpose:
      "Represent fictional approval, assignment, extension, change, exception, expiration, and revocation.",
    strongDesign:
      "Make every authorization record time-bounded and owner-linked.",
    risk:
      "Approval presence may be treated as broad permanent trust.",
  },
  {
    field: "Source-health state",
    purpose:
      "Represent fictional freshness, completeness, schema, clock, duplication, coverage, blind period, and recovery.",
    strongDesign:
      "Create explicit Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering values.",
    risk:
      "Tests may assume perfect evidence.",
  },
  {
    field: "Correlation relationship",
    purpose:
      "Connect fictional identity, session, request, service, change, case, or supplier records.",
    strongDesign:
      "Use consistent invented keys with documented meaning.",
    risk:
      "Unrealistic relationships make tests easier than real reasoning.",
  },
  {
    field: "Expected test outcome",
    purpose:
      "Record the fictional alert state, confidence, severity, next question, and evidence requirement before execution.",
    strongDesign:
      "Use a structured expected-result field and rationale.",
    risk:
      "Reviewers may redefine success after observing the output.",
  },
];

const sourceHealthTests = [
  {
    state: "Healthy",
    fictionalCondition:
      "Required records and fields are current, complete, correctly mapped, aligned, covered, and accessible.",
    expectedBehavior:
      "Evaluate normal fictional logic and confidence.",
    analystPrompt:
      "Use standard defender questions while preserving ordinary evidence limits.",
  },
  {
    state: "Conditional",
    fictionalCondition:
      "One optional enrichment or noncritical relationship is stale or incomplete.",
    expectedBehavior:
      "Preserve the core fictional observation while limiting enrichment-dependent severity or routing.",
    analystPrompt:
      "Avoid decisions that depend on the stale context.",
  },
  {
    state: "Degraded",
    fictionalCondition:
      "One required source, field, clock, mapping, or relationship is delayed or incomplete.",
    expectedBehavior:
      "Return a visible fictional degraded state, lower confidence, and request alternate evidence.",
    analystPrompt:
      "Do not treat the result as normal-confidence evidence.",
  },
  {
    state: "Blind",
    fictionalCondition:
      "Required fictional evidence is unavailable for a defined scope and period.",
    expectedBehavior:
      "Do not claim the condition was absent; record the blind period and affected coverage.",
    analystPrompt:
      "Use approved alternate evidence and reassess after recovery.",
  },
  {
    state: "Conflicting",
    fictionalCondition:
      "Two fictional authoritative or corroborating sources disagree beyond expected timing or scope differences.",
    expectedBehavior:
      "Create a reconciliation state rather than choosing one source silently.",
    analystPrompt:
      "Review provenance, authority, timing, schema, transformation, and owners.",
  },
  {
    state: "Recovering",
    fictionalCondition:
      "The fictional source has returned, but backlog, replay, duplication, clock, schema, or historical gaps remain.",
    expectedBehavior:
      "Use limited confidence until reconciliation and backfill are validated.",
    analystPrompt:
      "Reassess alerts generated during the degraded and blind periods.",
  },
];

const expectedOutcomeMatrix = [
  {
    case: "Stale role with healthy evidence",
    expectedAlert:
      "Yes",
    state:
      "In Review or Escalated according to impact",
    confidence:
      "High observation confidence",
    nextQuestion:
      "Is effective access still active, and what service or object scope is involved?",
  },
  {
    case: "Current valid extension",
    expectedAlert:
      "Expected alert or lower-priority visibility",
    state:
      "Expected",
    confidence:
      "High if extension and source health are current",
    nextQuestion:
      "Does the activity remain within the extension's identity, role, purpose, destination, and time?",
  },
  {
    case: "Missing approval end",
    expectedAlert:
      "No definitive stale-authority conclusion",
    state:
      "Conditional or Unknown",
    confidence:
      "Limited",
    nextQuestion:
      "Can the approval end be recovered from an alternate source?",
  },
  {
    case: "Delayed group evidence",
    expectedAlert:
      "Observation remains visible",
    state:
      "Source-Degraded or Conditional",
    confidence:
      "High for role state; lower for effective access",
    nextQuestion:
      "Which alternate session or authorization evidence can support the decision?",
  },
  {
    case: "Duplicate supplier retries",
    expectedAlert:
      "One grouped case if the underlying request is the same",
    state:
      "In Review or Expected",
    confidence:
      "Depends on uniqueness evidence",
    nextQuestion:
      "Are repeated records retries or distinct business actions?",
  },
  {
    case: "New approved destination during change",
    expectedAlert:
      "Expected or Conditional",
    state:
      "Expected if exact scope matches",
    confidence:
      "High only when change, destination, owner, and application result align",
    nextQuestion:
      "Did behavior remain within the documented change scope?",
  },
  {
    case: "Source blind during quiet period",
    expectedAlert:
      "No true-negative claim",
    state:
      "Blind or Unknown",
    confidence:
      "Insufficient",
    nextQuestion:
      "What alternate evidence and reassessment plan cover the blind period?",
  },
  {
    case: "Recovered source replays old records",
    expectedAlert:
      "Historical review without duplicate flooding",
    state:
      "Recovering",
    confidence:
      "Limited until replay and backlog are reconciled",
    nextQuestion:
      "Which records are replayed, unique, previously evaluated, or still missing?",
  },
];

const defectCategories = [
  {
    defect: "No alert on positive case",
    likelyCauses:
      "Fictional source coverage, required field, relationship, timing, logic, scope, or test-data defect.",
    evidence:
      "Inputs, source health, field dictionary, logic version, expected result, and evaluation record.",
    correction:
      "Identify the failed dependency, correct it narrowly, and add the case to regression.",
  },
  {
    defect: "Alert on negative case",
    likelyCauses:
      "Fictional context gap, timing error, state error, stale enrichment, broad logic, or wrong expected result.",
    evidence:
      "Authorization, owner, timing, context freshness, source health, and alert explanation.",
    correction:
      "Add precise current context or correct the test oracle without broad suppression.",
  },
  {
    defect: "Full confidence during source degradation",
    likelyCauses:
      "Fictional missing-data behavior is absent or health fields are not connected to confidence.",
    evidence:
      "Health state, required sources, confidence logic, alert fields, and analyst guidance.",
    correction:
      "Create visible Conditional, Source-Degraded, Blind, Conflicting, and Recovering behavior.",
  },
  {
    defect: "Duplicate alerts from one underlying event",
    likelyCauses:
      "Fictional uniqueness, retry, grouping, replay, or state-transition handling is incomplete.",
    evidence:
      "Record identifiers, correlation keys, retry state, event time, collection path, and grouping logic.",
    correction:
      "Define uniqueness and break conditions, then test duplicates and legitimate repetition.",
  },
  {
    defect: "Out-of-order records create wrong sequence",
    likelyCauses:
      "Fictional logic uses collection order instead of event time or ignores clock uncertainty.",
    evidence:
      "Event, collection, processing time, clock state, sequence definition, and source health.",
    correction:
      "Use documented time semantics and preserve uncertainty when order cannot be known.",
  },
  {
    defect: "Change context hides out-of-scope behavior",
    likelyCauses:
      "Fictional exception is broader than identity, destination, time, purpose, and owner approval.",
    evidence:
      "Change scope, expected behavior, destination, identity, timing, result, rollback, and exception.",
    correction:
      "Narrow the context and add out-of-scope regression cases.",
  },
  {
    defect: "Alert exposes unnecessary data",
    likelyCauses:
      "Fictional enrichment or test fields exceed the defender question's purpose.",
    evidence:
      "Field-purpose map, alert display, access, retention, privacy review, and analyst feedback.",
    correction:
      "Remove unnecessary fields and retest analyst usefulness.",
  },
  {
    defect: "Test cannot be reproduced",
    likelyCauses:
      "Fictional inputs, versions, timestamps, expected outcomes, relationships, or source-health states are undocumented.",
    evidence:
      "Test case, dataset, version, run record, expected result, observed result, and reviewer notes.",
    correction:
      "Create a complete reproducible test record and independent rerun.",
  },
];

const evidenceMatrix = [
  {
    id: "TEST-01",
    source: "Fictional test charter",
    observation:
      "The test objective is to validate stale emergency authority under healthy, delayed, conflicting, and recovering evidence.",
    supports:
      "The test program covers both detection behavior and source-health behavior.",
    limits:
      "The charter does not prove the individual cases are complete or realistic.",
    use:
      "Trace every test case to the objective and safety boundary.",
  },
  {
    id: "TEST-02",
    source: "Fictional positive case",
    observation:
      "Role, group, and session evidence show effective authority after expiration with no extension.",
    supports:
      "The design should produce a stale-authority alert.",
    limits:
      "The case does not prove harmful action or mission impact.",
    use:
      "Validate core positive behavior and the non-proof statement.",
  },
  {
    id: "TEST-03",
    source: "Fictional valid-extension case",
    observation:
      "A current extension covers the same identity, role, purpose, destination, and time.",
    supports:
      "The design should identify the condition as expected or lower priority.",
    limits:
      "The extension does not authorize unrelated actions or destinations.",
    use:
      "Validate precise context rather than broad suppression.",
  },
  {
    id: "TEST-04",
    source: "Fictional delayed-group case",
    observation:
      "Role and session evidence are current while group evidence is delayed eight minutes.",
    supports:
      "Observation and authorization confidence should differ.",
    limits:
      "Delay does not prove access remained active or ended.",
    use:
      "Validate Conditional or Source-Degraded behavior.",
  },
  {
    id: "TEST-05",
    source: "Fictional duplicate case",
    observation:
      "Three records share the same request identifier and retry state but arrive through two collectors.",
    supports:
      "The case may represent duplicate evidence for one underlying request.",
    limits:
      "Matching identifiers do not prove the business action occurred only once without documented semantics.",
    use:
      "Validate grouping, uniqueness, and duplicate explanation.",
  },
  {
    id: "TEST-06",
    source: "Fictional change case",
    observation:
      "An approved deployment introduces one new destination, but a second unlisted destination also appears.",
    supports:
      "The design should treat the approved and unapproved relationships differently.",
    limits:
      "The unlisted destination does not prove compromise or harmful action.",
    use:
      "Validate narrow change context and out-of-scope alerting.",
  },
  {
    id: "TEST-07",
    source: "Fictional recovery case",
    observation:
      "A source returns after a blind period and replays queued records with original event times.",
    supports:
      "The design needs recovering-state, replay, duplicate, and historical reassessment behavior.",
    limits:
      "Source return does not prove the blind period is fully reconstructed.",
    use:
      "Validate reconciliation and residual uncertainty.",
  },
  {
    id: "TEST-08",
    source: "Fictional privacy review",
    observation:
      "Role, owner group, service category, destination class, approval, time, and source health answer the test question; personal profile data is unnecessary.",
    supports:
      "The dataset and alert can remain privacy-minimized.",
    limits:
      "Different defender questions may require different invented fields.",
    use:
      "Validate field purpose, access, display, retention, and portfolio safety.",
  },
];

const commonMistakes = [
  {
    mistake: "Using real logs as convenient test data",
    observation:
      "A fictional learning exercise begins with copied internal events and replaces only usernames.",
    impact:
      "Systems, architecture, behavior, suppliers, and defensive capabilities may remain exposed.",
    correction:
      "Invent every record, relationship, field, timestamp, identity, source, and outcome.",
  },
  {
    mistake: "Testing only the alerting case",
    observation:
      "A fictional detection passes one positive test and is called complete.",
    impact:
      "False positives, false negatives, boundary errors, source failures, and privacy defects remain hidden.",
    correction:
      "Use a balanced case library with positive, negative, boundary, degraded, change, and regression tests.",
  },
  {
    mistake: "Writing expected results after execution",
    observation:
      "A fictional reviewer changes the expected outcome to match the observed alert.",
    impact:
      "Defects can be hidden by outcome reinterpretation.",
    correction:
      "Define the test oracle and expected decision state before the run.",
  },
  {
    mistake: "Assuming perfect source health",
    observation:
      "Every fictional test uses current, complete, aligned, correctly mapped evidence.",
    impact:
      "The detection may fail silently during real-world-like degradation.",
    correction:
      "Test Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering states.",
  },
  {
    mistake: "Unrealistic relationships",
    observation:
      "Fictional identity, session, service, change, and destination records are unrelated but still expected to correlate.",
    impact:
      "The test does not represent the logic's actual evidence dependencies.",
    correction:
      "Use documented invented correlation keys and realistic timing relationships.",
  },
  {
    mistake: "Boundary cases are skipped",
    observation:
      "A fictional expiration test checks only well before and long after the deadline.",
    impact:
      "Off-by-one, grace-period, clock, and exact-boundary defects remain hidden.",
    correction:
      "Test immediately below, exactly at, and immediately above the boundary.",
  },
  {
    mistake: "Duplicate removal is assumed safe",
    observation:
      "A fictional dataset deletes every repeated record.",
    impact:
      "Legitimate repeated activity may disappear.",
    correction:
      "Document event identity, retry semantics, grouping rules, and legitimate repetition cases.",
  },
  {
    mistake: "Test passes but analyst workflow fails",
    observation:
      "A fictional alert fires correctly but lacks evidence, source health, questions, limits, and ownership.",
    impact:
      "The detection is technically active but operationally unusable.",
    correction:
      "Test alert presentation and analyst decision quality, not only match behavior.",
  },
  {
    mistake: "Privacy is excluded from validation",
    observation:
      "A fictional alert displays every available identity and activity field.",
    impact:
      "Testing normalizes excessive collection and exposure.",
    correction:
      "Use purpose limitation, field minimization, access, retention, and deletion tests.",
  },
  {
    mistake: "Regression library has no owner",
    observation:
      "Fictional test cases remain in a folder but are not updated after source or logic changes.",
    impact:
      "Stale cases create false confidence.",
    correction:
      "Assign versions, owners, review triggers, expected outcomes, and retirement criteria.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Write the test charter",
    action:
      "Define the fictional detection objective, defender question, scope, exclusions, safety boundary, roles, evidence, risks, and completion criteria.",
    output:
      "Detection test charter.",
    quality:
      "The charter prohibits any real-system interaction or copied telemetry.",
  },
  {
    step: "2",
    title: "Build the fake-data dictionary",
    action:
      "Define fictional source categories, fields, values, timing, relationships, source-health states, privacy purpose, and owners.",
    output:
      "Synthetic data dictionary.",
    quality:
      "Every field is invented, necessary, documented, and versioned.",
  },
  {
    step: "3",
    title: "Create the core case library",
    action:
      "Write fictional positive, negative, expected-alert, boundary, missing-field, duplicate, out-of-order, delayed, conflict, change, and recovery cases.",
    output:
      "Versioned test-case catalog.",
    quality:
      "Every case has expected and non-expected outcomes.",
  },
  {
    step: "4",
    title: "Define expected decisions",
    action:
      "Record fictional alert, non-alert, state, confidence, severity, next question, owner, escalation, and closure behavior before execution.",
    output:
      "Expected-outcome matrix.",
    quality:
      "The test oracle is independent of the observed result.",
  },
  {
    step: "5",
    title: "Execute conceptually",
    action:
      "Compare the supplied fictional inputs with the conceptual logic and record the observed result without using real query tools or platforms.",
    output:
      "Safe test-run record.",
    quality:
      "The activity remains a reasoning exercise using inert invented evidence.",
  },
  {
    step: "6",
    title: "Compare expected and observed",
    action:
      "Identify fictional matches, mismatches, unexpected states, missing explanations, source-health failures, privacy problems, and analyst-workflow gaps.",
    output:
      "Test comparison report.",
    quality:
      "A mismatch becomes a defect or oracle-review item, not a hidden edit.",
  },
  {
    step: "7",
    title: "Analyze defects",
    action:
      "Trace fictional issues to source, field, schema, timing, relationship, logic, context, threshold, grouping, presentation, privacy, or lifecycle.",
    output:
      "Detection test defect register.",
    quality:
      "Root-cause hypotheses remain provisional until validated.",
  },
  {
    step: "8",
    title: "Design narrow corrections",
    action:
      "Create fictional source, logic, context, test, documentation, ownership, privacy, or retirement actions with validation and rollback.",
    output:
      "Corrective-action plan.",
    quality:
      "Changes preserve the defender question and meaningful coverage.",
  },
  {
    step: "9",
    title: "Build regression and gates",
    action:
      "Retain fictional successful and failed cases, assign owners, define required pass conditions, observation, rollback, and completion.",
    output:
      "Regression library and validation gates.",
    quality:
      "No design advances because of one successful case.",
  },
  {
    step: "10",
    title: "Document lifecycle review",
    action:
      "Schedule fictional review after source, schema, field, logic, identity, service, workflow, supplier, privacy, or mission change.",
    output:
      "Detection testing lifecycle package.",
    quality:
      "Stale cases are updated or retired rather than silently trusted.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the safest data source for this lesson's fictional detection tests?",
    choices: [
      "Copied real logs with names removed.",
      "Completely invented records, fields, identities, timestamps, relationships, and outcomes.",
      "Production screenshots with values blurred.",
      "Public breach data copied into the alert format.",
    ],
    answer: 1,
    explanation:
      "Complete invention protects real systems, people, suppliers, behavior, and defensive capabilities.",
  },
  {
    question:
      "Why should expected outcomes be written before a fictional test?",
    choices: [
      "To make every test pass.",
      "To prevent reviewers from redefining success after seeing the result.",
      "To avoid documenting the input.",
      "To remove the need for negative cases.",
    ],
    answer: 1,
    explanation:
      "A predefined test oracle makes mismatches visible and reviewable.",
  },
  {
    question:
      "Which fictional test best evaluates an expiration boundary?",
    choices: [
      "One case several hours after expiration.",
      "Cases immediately before, exactly at, and immediately after the approved end.",
      "Only a current valid extension.",
      "Only a source-blind case.",
    ],
    answer: 1,
    explanation:
      "Boundary testing reveals exact-window, grace-period, clock, and comparison defects.",
  },
  {
    question:
      "A required fictional source is blind during a quiet period. What is the strongest expected result?",
    choices: [
      "True negative.",
      "Blind or Unknown state without claiming the condition was absent.",
      "Full-confidence normal result.",
      "Permanent suppression.",
    ],
    answer: 1,
    explanation:
      "Missing evidence cannot prove absence and should produce visible coverage limits.",
  },
  {
    question:
      "Why should duplicate and retry cases both be tested?",
    choices: [
      "Because every repeated record is malicious.",
      "Because repeated records may be duplicates, retries, or legitimate distinct actions.",
      "Because duplicates should always be deleted.",
      "Because grouping replaces source health.",
    ],
    answer: 1,
    explanation:
      "Uniqueness and retry semantics must be understood before grouping or deduplication.",
  },
  {
    question:
      "What makes a fictional regression test valuable?",
    choices: [
      "It contains the most fields.",
      "It preserves a previously important expected behavior or defect case across future changes.",
      "It is never updated.",
      "It uses a real platform.",
    ],
    answer: 1,
    explanation:
      "Regression tests protect earlier behavior when sources, logic, context, or schemas change.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use real event formats with fake usernames.",
      "Use internal alerts after deleting organization names.",
      "Invent every dataset, source, field, record, test, defect, owner, date, decision, and outcome.",
      "Use production screenshots because the lab is defensive.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization is the safest public learning approach.",
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

export default function TestingDetectionsSafelyWithFakeDataPage() {
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
              Lesson 8 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Synthetic Cases, Expected Outcomes, and Regression
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A5.8 Testing Detections Safely With Fake Data
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how to validate fictional detection behavior using completely
            invented evidence, controlled expected outcomes, source-health
            variation, boundary cases, duplicate and timing cases, change and
            recovery scenarios, privacy checks, defect analysis, and regression
            governance.
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
          lessonTitle="Testing Detections Safely With Fake Data"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will invent every source, field, identity, service, destination, timestamp, record, relationship, alert, owner, decision, and outcome.",
            "I will not copy, sanitize, transform, upload, query, or reuse any real telemetry or internal evidence.",
            "I will define fictional expected outcomes before comparing the design's behavior.",
            "I will test alert, non-alert, Conditional, Unknown, Source-Degraded, Expected, Escalated, Resolved, and Recovering behavior.",
            "I will include privacy, source health, analyst usefulness, coverage, rollback, and lifecycle in validation.",
            "I will not access, scan, monitor, test, configure, investigate, or modify any real account, endpoint, network, domain, service, supplier, detection platform, organization, or production system.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Detection That Passes One Fake Alert Test Is Not Validated"
        >
          <p className="leading-8">
            A fictional stale-role detection alerts correctly when every source
            is healthy and every field arrives in order. The same design reports
            full confidence when group evidence is delayed, misses a recovery
            identity outside source coverage, and creates three duplicate alerts
            after source replay. The first test passed, but the capability is not
            ready.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak validation claim
              </p>
              <p className="mt-2 leading-7">
                “The fictional alert appeared, so the detection works.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong validation claim
              </p>
              <p className="mt-2 leading-7">
                “The fictional design passed its core positive case but remains
                Conditional until negative, boundary, source-degraded,
                duplicate, recovery, privacy, analyst-workflow, and regression
                cases meet their expected outcomes.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Testing proves only the behavior represented by the cases, evidence
            states, and decision criteria that were actually evaluated.
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
          title="Safe Testing Reveals Both Detection and Evidence Failures"
        >
          <p className="leading-8">
            Fictional tests help defenders learn whether a conceptual
            detection supports its question under expected, unusual, missing,
            duplicated, delayed, conflicting, changed, and recovering evidence.
            They also reveal whether alert presentation, privacy, ownership,
            escalation, closure, and lifecycle behavior are usable.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Precision testing",
                "Confirm fictional expected and approved cases do not create unsupported risky conclusions.",
              ],
              [
                "Coverage testing",
                "Confirm fictional meaningful cases across identities, services, states, and source conditions remain visible.",
              ],
              [
                "Decision testing",
                "Confirm fictional alerts provide evidence, confidence, questions, owners, limits, and safe next actions.",
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

        <SectionCard eyebrow="Core Framework" title="The S-A-F-E-T-E-S-T Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "S — Set the fictional objective",
                "Define the defender question, mission risk, scope, exclusions, safety boundary, and completion criteria.",
              ],
              [
                "A — Assemble invented evidence",
                "Create fictional sources, fields, values, relationships, timing, health states, and privacy purpose.",
              ],
              [
                "F — Forecast expected outcomes",
                "Write fictional alert, non-alert, state, confidence, severity, questions, and owner behavior before the run.",
              ],
              [
                "E — Exercise varied conditions",
                "Use fictional positive, negative, boundary, missing, duplicate, out-of-order, change, privacy, and recovery cases.",
              ],
              [
                "T — Track observed behavior",
                "Record fictional logic version, inputs, source health, output, alert explanation, analyst workflow, and evidence.",
              ],
              [
                "E — Examine mismatches",
                "Identify fictional defects in source, field, timing, relationship, logic, context, privacy, presentation, or lifecycle.",
              ],
              [
                "S — Strengthen with regression",
                "Retain fictional successful and failed cases with owners, versions, validation gates, and rollback.",
              ],
              [
                "T — Trigger lifecycle review",
                "Revalidate after fictional source, schema, field, logic, identity, service, workflow, supplier, privacy, or mission change.",
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
              Decision-ready validation statement
            </p>
            <p className="mt-2 leading-7">
              This fictional detection design was evaluated with invented,
              reproducible, privacy-minimized cases covering intended alerts,
              intended non-alerts, evidence boundaries, source degradation,
              timing, duplication, change, recovery, analyst usability, defects,
              regression, ownership, limitations, and review triggers.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Safe Detection Testing"
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
            Apply Ten Safe-Testing Principles
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {testingPrinciples.map((item) => (
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
          title="Build Twelve Test Categories"
        >
          <div className="grid gap-5">
            {testCategories.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.category}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Fictional example", item.example],
                    ["Expected behavior", item.expected],
                    ["Failure may indicate", item.failureMeaning],
                    ["Required fictional evidence", item.evidence],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.category}-${label}`}
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
          title="Design Twelve Synthetic Dataset Fields"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {datasetFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.field}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Purpose
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.purpose}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong fictional design
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.strongDesign}
                  </p>
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
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Test Six Source-Health States"
        >
          <div className="grid gap-5">
            {sourceHealthTests.map((item) => (
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
                      Fictional condition
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.fictionalCondition}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Expected behavior
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.expectedBehavior}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Analyst prompt
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.analystPrompt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Define Expected Outcomes before Testing"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Fictional case",
                    "Expected alert behavior",
                    "Decision state",
                    "Confidence",
                    "Next defender question",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {expectedOutcomeMatrix.map((row) => (
                  <tr key={row.case}>
                    <td className="px-4 py-4 align-top font-bold text-white">
                      {row.case}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.expectedAlert}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.state}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.confidence}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.nextQuestion}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Analyze Eight Test Defect Categories"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {defectCategories.map((item) => (
              <article
                key={item.defect}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">
                  {item.defect}
                </h3>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Possible causes
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.likelyCauses}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Evidence to review
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
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
          eyebrow="Instructional Section 7"
          title="Use Validation Gates before Approval"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Validation gate",
                    "Fictional requirement",
                    "Evidence",
                    "Failure response",
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
                    "Safety gate",
                    "All records, identities, services, sources, and outcomes are invented and isolated.",
                    "Data dictionary, charter, reviewer statement, and portfolio boundary.",
                    "Stop and replace any non-fictional material.",
                  ],
                  [
                    "Core behavior gate",
                    "Positive, negative, and expected-alert cases match documented outcomes.",
                    "Test records, expected matrix, observed results, and evidence.",
                    "Keep the design Draft or Conditional.",
                  ],
                  [
                    "Boundary gate",
                    "Counts, windows, expiration, sequence, and exact limits behave correctly.",
                    "Below, at, and above boundary cases.",
                    "Correct timing or threshold semantics and rerun.",
                  ],
                  [
                    "Source-health gate",
                    "Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering states are visible and safe.",
                    "Health-state test library and alert outputs.",
                    "Do not approve normal-confidence behavior.",
                  ],
                  [
                    "Coverage gate",
                    "Required fictional identities, services, environments, operating states, and time periods are represented.",
                    "Coverage map, case catalog, exclusions, and residual-risk record.",
                    "Limit scope or add cases and sources.",
                  ],
                  [
                    "Privacy gate",
                    "Only purpose-limited fictional fields are collected, displayed, retained, and shared.",
                    "Field-purpose map, alert view, access, retention, and deletion review.",
                    "Remove unnecessary fields and rerun usability tests.",
                  ],
                  [
                    "Analyst-usefulness gate",
                    "The fictional alert includes evidence, source health, confidence, questions, owners, limits, and next actions.",
                    "Analyst walkthrough, decision record, time, and feedback.",
                    "Improve presentation and mapping before approval.",
                  ],
                  [
                    "Regression gate",
                    "Earlier important successful and failed cases continue to produce expected outcomes.",
                    "Versioned regression results and defect history.",
                    "Rollback or correct the new change.",
                  ],
                  [
                    "Lifecycle gate",
                    "Owners, versions, metrics, observation, rollback, review triggers, completion, and retirement are documented.",
                    "Approval packet and lifecycle register.",
                    "Keep the design Conditional.",
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
          eyebrow="Fictional Testing Architecture"
          title="Northbridge Safe Detection Validation Model"
        >
          <p className="leading-8">
            This conceptual model is completely invented and intentionally
            non-operational. It teaches validation without real telemetry,
            query syntax, detection platforms, identities, systems, domains,
            applications, suppliers, or production environments.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Charter", "Objective, scope, safety, roles, risks, completion"],
                ["Dataset", "Invented fields, timing, relationships, health, privacy"],
                ["Cases", "Positive, negative, boundary, degraded, change, recovery"],
                ["Oracle", "Expected alert, state, confidence, question, owner"],
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
                Fictional Validation Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Inputs", "Sources, fields, time, identities, services, context"],
                  ["Health", "Freshness, completeness, schema, clock, coverage"],
                  ["Logic", "Conditions, relationships, windows, missing-data behavior"],
                  ["Output", "Alert, non-alert, state, confidence, severity, questions"],
                  ["Compare", "Expected, observed, mismatch, evidence, rationale"],
                  ["Defects", "Source, field, timing, logic, context, privacy, lifecycle"],
                  ["Regression", "Cases, versions, owners, gates, rollback"],
                  ["Lifecycle", "Observe, review, update, retire, communicate"],
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
                ["Analyst outcome", "Useful evidence, questions, limits, decision state"],
                ["Owner outcome", "Defects, actions, validation, completion, risk"],
                ["Leadership outcome", "Coverage, readiness, limitations, milestones"],
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
          title="Fake Northbridge Detection Test Dashboard"
          subtitle="Fictional case coverage, expected outcomes, source-health states, defects, privacy, regression, and lifecycle status for training only."
          metrics={[
            {
              label: "Required test categories completed",
              value: "9 / 12",
              note: "Out-of-order, recovery replay, and privacy-minimization cases remain incomplete.",
            },
            {
              label: "Validation gates passed",
              value: "6 / 9",
              note: "Source-health, regression, and lifecycle gates remain Conditional.",
            },
            {
              label: "Open fictional defects",
              value: "5",
              note: "Full confidence during delay, duplicate replay, changed-destination context, stale enrichment, and incomplete closure guidance remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Fake Test Found Full Confidence during Delayed Group Evidence"
          severity="High"
          time="2:58 PM"
          source="Fake Northbridge Detection Validation Console"
          details="The fictional positive case alerts correctly, but the delayed-group case produces the same High confidence even though effective access cannot be confirmed. A valid-extension case behaves correctly, while a recovery replay creates duplicate alerts."
          recommendation="Keep the fictional detection Conditional. Add source-health-dependent confidence, duplicate-aware replay handling, recovery reassessment, and regression cases before approval."
        />

        <FakeLogPanel
          title="Fake Detection Test Run Timeline"
          logs={[
            "09:00 TEST-CHARTER objective='stale-authority-validation'",
            "09:08 DATASET version='synthetic-v3'",
            "09:16 CASE positive='passed'",
            "09:24 CASE negative='passed'",
            "09:32 CASE valid-extension='passed'",
            "09:40 CASE boundary-before='passed'",
            "09:48 CASE boundary-exact='passed'",
            "09:56 CASE boundary-after='passed'",
            "10:04 CASE missing-field='conditional'",
            "10:12 CASE delayed-group='failed-confidence'",
            "10:20 CASE conflicting-source='reconciliation'",
            "10:28 CASE duplicate-retry='passed'",
            "10:36 CASE recovery-replay='failed-duplicates'",
            "10:44 CASE changed-destination='conditional'",
            "10:52 PRIVACY unnecessary-fields='found'",
            "11:00 DEFECT count='5'",
            "11:08 REGRESSION status='incomplete'",
            "11:16 GATE source-health='failed'",
            "11:24 STATUS detection='conditional'",
            "14:58 ALERT issue='test-validation-defect'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Test Evidence Supports—and What It Does Not Prove
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
                    ["Testing use", item.use],
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
          title="Which Validation Decision Is Best Supported?"
          question="Which conclusion most responsibly represents the fictional detection test results?"
          evidence={[
            "The core positive, negative, valid-extension, and boundary cases pass.",
            "The delayed-group case incorrectly reports full confidence.",
            "The recovery replay creates duplicate alerts.",
            "The changed-destination case remains Conditional.",
            "The privacy review found unnecessary fields.",
            "The source-health, regression, and lifecycle gates are incomplete.",
            "Five fictional defects remain open.",
            "No supplied evidence proves every untested condition will fail.",
          ]}
          options={[
            "Keep the fictional design Conditional, correct source-health confidence, replay duplication, changed-destination handling, privacy fields, regression coverage, and lifecycle gates, then rerun the affected cases.",
            "Approve the design because the positive case passed.",
            "Delete the failed cases from the library.",
            "Lower every alert severity to hide the defects.",
          ]}
          bestAnswer={0}
          explanation="The first option recognizes successful behavior while preserving the unresolved defects, incomplete gates, and need for targeted reruns."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Safe-Testing Errors"
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
          title="Build the Northbridge Detection Validation Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            collect, copy, sanitize, upload, query, inspect, test, replay,
            correlate, or modify any real telemetry, alert, account, endpoint,
            network, domain, application, supplier, platform, organization, or
            production system.
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
          title="The Team Wants to Copy Real Logs for Better Realism"
          scenario="A fictional project group argues that copied internal records with changed usernames would make the detection test more realistic and save time."
          choices={[
            {
              label: "Choice A",
              response:
                "Reject the copied records and create a fully invented fictional dataset with documented field meanings, relationships, timing, source-health states, privacy purpose, expected outcomes, and reproducibility.",
              outcome:
                "Best defensive choice. It preserves safety while still allowing realistic reasoning about evidence relationships.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Use the real records after removing names.",
              outcome:
                "Weak. System, service, timing, source, behavior, supplier, and defensive details may remain identifiable.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Use production screenshots but blur visible values.",
              outcome:
                "Weak. Screenshots can expose hidden structure, metadata, fields, workflow, and architecture.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Positive Test Passes but the Blind-Source Case Does Not"
          scenario="A fictional detection alerts correctly when all sources are healthy. During a Blind source-health case, it produces no alert and the dashboard labels the quiet period a true negative."
          choices={[
            {
              label: "Choice A",
              response:
                "Record a fictional source-health defect, require Blind or Unknown behavior, display affected coverage, add alternate-evidence and reassessment guidance, retain the case for regression, and keep the detection Conditional.",
              outcome:
                "Best choice. It prevents missing evidence from being mistaken for evidence of absence.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Approve the detection because the healthy positive case passed.",
              outcome:
                "Weak. The design creates false confidence during evidence loss.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove the blind-source test because it is uncommon.",
              outcome:
                "Weak. Rare source failures can create important coverage gaps.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design a Complete Fictional Detection Test Program"
        >
          <p className="leading-8">
            Fictional Northbridge wants to validate privileged-access,
            supplier, network, DNS, wireless, application, source-health, and
            recovery detections. The current approach uses one positive case per
            alert, assumes healthy evidence, does not define expected outcomes,
            and has no regression ownership or privacy review.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Create testing governance",
                "Define fictional charters, safety boundaries, roles, approvals, completion criteria, and review triggers.",
              ],
              [
                "Create synthetic data standards",
                "Document fictional fields, provenance, relationships, timing, health, privacy, uniqueness, versions, and owners.",
              ],
              [
                "Create balanced case libraries",
                "Include fictional positive, negative, boundary, missing, duplicate, delayed, conflict, change, privacy, recovery, and regression cases.",
              ],
              [
                "Create validation gates",
                "Require fictional safety, core behavior, boundary, source health, coverage, privacy, usability, regression, and lifecycle gates.",
              ],
              [
                "Create defect workflow",
                "Record fictional mismatch, evidence, root-cause hypothesis, action, owner, validation, rollback, completion, and residual risk.",
              ],
              [
                "Create honest reporting",
                "Explain fictional passed cases, failed cases, untested states, coverage gaps, privacy findings, limitations, and next milestones.",
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
              Produce a fictional testing-governance charter, synthetic data
              standard, field dictionary, source-health model, case catalog,
              expected-outcome matrix, safe run records, comparison report,
              defect register, corrective-action plan, regression library,
              validation gates, coverage summary, privacy review, lifecycle
              triggers, residual-risk statement, analyst guide, and leadership
              summary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Testing Detections Safely With Fake Data Checklist"
          items={[
            "I can create completely invented fictional sources, fields, identities, services, destinations, timestamps, relationships, alerts, owners, and outcomes.",
            "I can write a test charter with purpose, scope, exclusions, safety boundary, roles, evidence, risks, and completion criteria.",
            "I can distinguish positive, negative, expected-alert, boundary, missing-field, duplicate, out-of-order, delayed, conflicting, change, privacy, recovery, and regression tests.",
            "I can define expected alert, non-alert, state, confidence, severity, next-question, owner, escalation, and closure behavior before execution.",
            "I can test Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering source states.",
            "I can preserve event time, collection time, processing time, correlation relationships, uniqueness, schema, and source health.",
            "I can identify fictional defects in sources, fields, timing, relationships, logic, context, grouping, presentation, privacy, and lifecycle.",
            "I can use validation gates for safety, core behavior, boundaries, source health, coverage, privacy, analyst usefulness, regression, and lifecycle.",
            "I can create narrow corrective actions with owners, evidence, tests, validation, rollback, completion, and residual risk.",
            "I can maintain a versioned fictional regression library with review triggers and retirement criteria.",
            "I can explain which tested conclusions are supported and which untested conditions remain uncertain.",
            "I can create a completely fictional testing artifact without exposing real telemetry, alerts, users, systems, suppliers, rules, or internal architecture.",
          ]}
        />

        <MiniQuiz
          title="A5.8 Mini Quiz: Testing Detections Safely With Fake Data"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Detection Testing and Validation Package for the Northbridge Student-Support Cooperative. Include mission, purpose, scope, stakeholders, exclusions, safety boundary, test charter, roles, approvals, risks, completion criteria, at least thirty fictional test cases, synthetic data dictionary, source categories, schema versions, record identifiers, event time, collection time, processing time, identity categories, role categories, service categories, destination categories, authorization context, source-health states, correlation relationships, expected outcomes, positive tests, negative tests, expected-alert tests, boundary tests, missing-required-field tests, missing-optional-field tests, duplicate tests, retry tests, out-of-order tests, delayed-source tests, conflicting-source tests, change-context tests, maintenance tests, privacy tests, recovery tests, replay tests, regression tests, Healthy cases, Conditional cases, Degraded cases, Blind cases, Conflicting cases, Recovering cases, alert expectations, non-alert expectations, decision states, confidence, severity, next questions, owners, escalation criteria, closure criteria, observed outcomes, evidence, mismatches, defects, root-cause hypotheses, corrective actions, validation gates, safety gates, core-behavior gates, boundary gates, source-health gates, coverage gates, privacy gates, analyst-usefulness gates, regression gates, lifecycle gates, observation periods, rollback criteria, completion criteria, review triggers, residual risks, retirement criteria, leadership summary, analyst guide, reflection, and a statement that every organization, source, field, record, identity, service, destination, alert, test, defect, owner, date, decision, and outcome is invented."
          tips={[
            "Invent every fictional record and relationship rather than modifying or sanitizing real evidence.",
            "Write expected outcomes before comparing the conceptual detection result.",
            "Test both alert and non-alert directions across healthy and degraded evidence.",
            "Retain important successes and defects as versioned regression cases with owners.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Detection Documentation?"
        >
          <p className="leading-8">
            Before moving to A5.9, rate your readiness from 1 to 5 for synthetic
            data, expected outcomes, positive tests, negative tests, boundaries,
            missing fields, duplicates, timing, source health, change, recovery,
            privacy, defects, regression, validation gates, lifecycle, and
            complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can build a fictional dataset without copying or sanitizing real telemetry.",
              "I can define expected outcomes before reviewing observed behavior.",
              "I can test both intended alerts and intended non-alerts.",
              "I can test boundaries, missing fields, duplicates, timing, conflicts, and recovery.",
              "I can make source-health failures visible instead of treating quiet periods as true negatives.",
              "I can test alert presentation, analyst usefulness, privacy, ownership, escalation, and closure.",
              "I can turn fictional defects into corrective actions and regression cases.",
              "I can produce a safe fictional validation package without using real systems, rules, alerts, or evidence.",
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
            Record one fictional detection objective, one positive case, one
            negative case, one boundary case, one degraded-source case, one
            validation gate, and one question you will carry into A5.9.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Safe detection testing uses completely invented fictional evidence and never depends on copied, sanitized, or transformed real telemetry.",
            "A test should validate the fictional defender question and decision path, not only whether an alert appears.",
            "Expected outcomes should be defined before execution so mismatches remain visible.",
            "Balanced validation includes positive, negative, expected-alert, boundary, missing-field, duplicate, timing, conflict, change, privacy, recovery, and regression cases.",
            "Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering evidence states should produce explicit documented behavior.",
            "Synthetic datasets should preserve fictional provenance, field meaning, event time, collection time, processing time, relationships, uniqueness, coverage, and privacy purpose.",
            "Testing should evaluate alert evidence, source health, confidence, questions, owners, escalation, closure, and analyst usefulness.",
            "Defects require evidence, root-cause hypotheses, narrow corrective actions, validation, rollback, completion criteria, and regression.",
            "Validation gates and lifecycle review prevent one successful case from creating false readiness.",
            "Every CyberShield detection-testing artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, learn how to document fictional detections with purpose,
            scope, defender questions, sources, fields, logic, context, tests,
            alerts, analyst guidance, ownership, metrics, changes, limitations,
            residual risks, and retirement.
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