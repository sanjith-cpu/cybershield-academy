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
const previousLesson = `${modulePath}/false-positives-and-false-negatives`;
const nextLesson = `${modulePath}/mapping-alerts-to-defender-questions`;

const objectives = [
  "Explain fictional detection tuning as a controlled, evidence-based process for improving precision and analyst usefulness while preserving meaningful coverage and missed-condition awareness.",
  "Apply fictional identity, asset, service, device, destination, peer, time, maintenance, change, authorization, source-health, mission, and recovery context without turning context into permanent trust.",
  "Distinguish enrichment, threshold adjustment, grouping, deduplication, severity adjustment, narrow exclusion, suppression, state-aware logic, and retirement decisions.",
  "Evaluate fictional tuning tradeoffs through alert usefulness, expected alerts, false positives, false negatives, unknown outcomes, source-health impact, analyst effort, user impact, privacy, rollback, and residual risk.",
  "Create a portfolio-ready fictional detection-tuning plan containing hypotheses, context sources, test cases, metrics, exception governance, validation gates, rollback criteria, ownership, and lifecycle review.",
];

const vocabulary = [
  [
    "Detection tuning",
    "A fictional controlled process for improving alert precision, usefulness, context, and maintainability while preserving intended coverage and documenting tradeoffs.",
  ],
  [
    "Enrichment",
    "Fictional identity, asset, service, device, destination, owner, change, maintenance, peer, policy, source-health, or mission context added to a detection result.",
  ],
  [
    "Context source",
    "A fictional source that supplies authorization, ownership, criticality, schedule, assignment, change, maintenance, or other decision-relevant information.",
  ],
  [
    "Threshold tuning",
    "A fictional change to a count, rate, duration, volume, score, or timing boundary used by a detection.",
  ],
  [
    "Window tuning",
    "A fictional change to the period used for sequencing, counting, expiration, expected follow-up, grouping, or suppression.",
  ],
  [
    "Narrow exclusion",
    "A fictional documented exception limited by identity, service, destination, purpose, owner, time, change, source health, expiration, and testing.",
  ],
  [
    "Broad suppression",
    "A fictional rule that hides a large category of alerts without enough context, ownership, expiration, or coverage validation.",
  ],
  [
    "Suppression debt",
    "Fictional risk created when exclusions become stale, undocumented, unreviewed, or broader than their original purpose.",
  ],
  [
    "Deduplication",
    "A fictional process for preventing repeated records or continuing states from creating duplicate alert work while preserving distinct meaningful events.",
  ],
  [
    "Grouping",
    "A fictional process for presenting related alerts as one case, sequence, identity, service, destination, or continuing condition.",
  ],
  [
    "Cooldown",
    "A fictional period during which repeated alerts for the same condition are reduced while important state changes remain visible.",
  ],
  [
    "State-aware tuning",
    "Fictional logic that behaves differently during normal, maintenance, migration, event, degraded, recovery, or emergency states.",
  ],
  [
    "Severity tuning",
    "A fictional change to the potential-impact rating based on identity, asset, privilege, scope, mission, and recoverability.",
  ],
  [
    "Confidence tuning",
    "A fictional change to evidence certainty based on source health, field completeness, correlation, alternatives, and context.",
  ],
  [
    "Priority tuning",
    "A fictional change to analyst review urgency based on severity, confidence, active impact, time sensitivity, and response opportunity.",
  ],
  [
    "Context freshness",
    "The fictional recency and validity of ownership, authorization, assignment, change, maintenance, peer, or criticality information.",
  ],
  [
    "Exception owner",
    "The fictional role accountable for an exclusion's purpose, evidence, scope, expiration, review, validation, and removal.",
  ],
  [
    "Exception expiration",
    "The fictional date, event, condition, or milestone after which an exclusion must end or be reapproved.",
  ],
  [
    "Tuning hypothesis",
    "A fictional statement predicting how a proposed change will improve one quality dimension without causing unacceptable harm elsewhere.",
  ],
  [
    "Tuning test",
    "A fictional invented case used to compare alert and non-alert behavior before and after a proposed change.",
  ],
  [
    "Before-and-after comparison",
    "A fictional quality review comparing coverage, alert outcomes, misses, effort, impact, privacy, and source behavior across logic versions.",
  ],
  [
    "Rollback criterion",
    "A fictional measurable condition requiring a tuning change to be reversed or paused.",
  ],
  [
    "Residual coverage risk",
    "The fictional possibility that meaningful conditions remain undetected after a tuning change.",
  ],
  [
    "Tuning review trigger",
    "A fictional event requiring revalidation, such as source, schema, identity, service, destination, peer, change, policy, maintenance, or mission change.",
  ],
];

const tuningPrinciples = [
  {
    principle: "Tune the cause, not only the count",
    description:
      "A fictional increase in alert volume may result from duplicate evidence, missing context, stale ownership, source delay, or real behavior change.",
    strongPractice:
      "Identify whether volume comes from retries, approved maintenance, new identities, source duplication, policy drift, or true coverage.",
    failure:
      "Raising a threshold may hide meaningful conditions while leaving the root defect unresolved.",
  },
  {
    principle: "Preserve the defender question",
    description:
      "A fictional tuning change should continue answering the original mission-driven question.",
    strongPractice:
      "After adding extension context, confirm the stale-authority question is still detected.",
    failure:
      "The alert becomes quieter but no longer supports the intended decision.",
  },
  {
    principle: "Use context before exclusion",
    description:
      "Fictional identity, owner, destination, change, maintenance, source-health, peer, and authorization context can improve precision without hiding entire categories.",
    strongPractice:
      "Add current approved extension evidence rather than suppressing all recovery-role alerts.",
    failure:
      "Broad suppression creates false-negative and lifecycle risk.",
  },
  {
    principle: "Keep context current",
    description:
      "Fictional tuning based on stale owners, peer groups, criticality, schedules, or service maps can produce wrong decisions.",
    strongPractice:
      "Require context-source freshness and define Conditional behavior when enrichment is stale.",
    failure:
      "Outdated context becomes a hidden trust decision.",
  },
  {
    principle: "Separate expected alerts from noise",
    description:
      "A fictional alert may be correct and intentionally useful even when the activity is approved.",
    strongPractice:
      "Group approved extensions as expected alerts with lower urgency while preserving visibility.",
    failure:
      "Useful awareness may be incorrectly suppressed.",
  },
  {
    principle: "Test both precision and coverage",
    description:
      "Fictional tuning should reduce unnecessary alerts without increasing missed conditions.",
    strongPractice:
      "Compare true positives, expected alerts, false positives, false negatives, Unknown outcomes, and source-degraded cases before and after change.",
    failure:
      "A clean dashboard may hide degraded detection performance.",
  },
  {
    principle: "Make exceptions narrow and temporary",
    description:
      "Fictional exclusions should be limited by purpose, identity, destination, service, change, time, owner, evidence, and expiration.",
    strongPractice:
      "Exclude one approved maintenance relationship for one window and one destination.",
    failure:
      "Exceptions expand into permanent unreviewed authority.",
  },
  {
    principle: "Use rollback as a design requirement",
    description:
      "Fictional tuning must be reversible when alert usefulness, coverage, source health, analyst effort, or operations worsen.",
    strongPractice:
      "Retain the prior version, test data, metrics, owner approval, observation period, and rollback trigger.",
    failure:
      "The team may be unable to restore known coverage quickly.",
  },
  {
    principle: "Respect privacy while enriching",
    description:
      "Fictional context should add only fields needed for the defender question and analyst decision.",
    strongPractice:
      "Use identity role, owner group, service category, change state, and source health instead of unrelated personal details.",
    failure:
      "More context can increase privacy and trust risk without improving decisions.",
  },
  {
    principle: "Treat tuning as lifecycle work",
    description:
      "Fictional thresholds, windows, context, exceptions, grouping, severity, tests, metrics, and documentation must be reviewed after change.",
    strongPractice:
      "Revalidate after source, identity, service, peer, workflow, policy, supplier, or mission changes.",
    failure:
      "A once-good tuning decision becomes stale and unsafe.",
  },
];

const contextDimensions = [
  {
    dimension: "Identity context",
    question:
      "Which fictional user, service, supplier, privileged, emergency, or recovery identity is involved?",
    fields:
      "Identity category, role, assignment, sponsor, owner, authentication, authorization, session, expiration, and revocation.",
    tuningUse:
      "Differentiate approved roles, temporary authority, service identities, and stale lifecycle states.",
    risk:
      "Identity category alone does not prove the destination, action, purpose, or object was authorized.",
  },
  {
    dimension: "Asset and service context",
    question:
      "Which fictional service, device, application, workflow, data category, or mission capability is affected?",
    fields:
      "Service purpose, criticality, owner, dependencies, operating state, user impact, recovery objective, and support.",
    tuningUse:
      "Prioritize critical mission conditions and reduce low-value repetition for less important assets.",
    risk:
      "Criticality data may be stale, subjective, or too broad.",
  },
  {
    dimension: "Device context",
    question:
      "Which fictional managed, administrative, service, supplier, guest, personal, event, or recovery device participated?",
    fields:
      "Device identity, owner, class, posture, onboarding, network class, replacement, support, and retirement.",
    tuningUse:
      "Distinguish approved service devices from unexpected classes or unmanaged contexts.",
    risk:
      "Device identity does not prove who controlled the activity.",
  },
  {
    dimension: "Destination context",
    question:
      "Which fictional destination class, service group, zone, resolver, application, supplier, or administrative target was reached?",
    fields:
      "Ownership, purpose, policy, DNS state, service map, change, application result, and network zone.",
    tuningUse:
      "Allow known approved dependencies while preserving new or policy-different destinations.",
    risk:
      "A previously observed destination may still be unauthorized or stale.",
  },
  {
    dimension: "Time and schedule context",
    question:
      "When did fictional activity occur relative to assignment, shift, maintenance, event, deployment, recovery, and source delay?",
    fields:
      "Event time, collection time, processing time, schedule, time-zone concept, window, seasonality, and source health.",
    tuningUse:
      "Differentiate normal shifts and approved maintenance from unexplained outside-window behavior.",
    risk:
      "Schedules and clocks can be wrong, delayed, or incomplete.",
  },
  {
    dimension: "Change and maintenance context",
    question:
      "Which fictional approved change, deployment, migration, maintenance, rollback, or emergency activity may explain the alert?",
    fields:
      "Change identifier, owner, scope, expected behavior, start, end, result, validation, rollback, and closure.",
    tuningUse:
      "Reduce expected change noise while preserving deviations beyond approved scope.",
    risk:
      "Change existence does not prove every observed behavior was intended.",
  },
  {
    dimension: "Peer-group context",
    question:
      "How does fictional behavior compare with identities, devices, services, suppliers, or workflows with similar missions and states?",
    fields:
      "Peer purpose, membership, environment, state, schedule, coverage, unique roles, owner, and review date.",
    tuningUse:
      "Avoid treating approved uniqueness as noise or broad organizational behavior as normal.",
    risk:
      "Poor peer groups can create both false positives and false negatives.",
  },
  {
    dimension: "Authorization context",
    question:
      "Was fictional access, communication, operation, object scope, or privilege approved under current conditions?",
    fields:
      "Role, assignment, policy, owner, purpose, destination, operation, approval, exception, expiration, and revocation.",
    tuningUse:
      "Differentiate valid temporary authority from stale or excessive authority.",
    risk:
      "Authentication or role presence alone does not prove authorization.",
  },
  {
    dimension: "Source-health context",
    question:
      "Can fictional evidence support normal confidence for the relevant fields, scope, and period?",
    fields:
      "Connectivity, freshness, completeness, clock, schema, transformation, duplication, coverage, queue, and blind period.",
    tuningUse:
      "Return Conditional or Unknown results instead of noisy or falsely confident alerts.",
    risk:
      "Suppressing source-degraded alerts may hide both evidence and behavior problems.",
  },
  {
    dimension: "Mission-impact context",
    question:
      "Could fictional behavior affect essential users, services, data, privacy, suppliers, evidence, availability, or recovery?",
    fields:
      "User journey, service criticality, data category, blast radius, recoverability, support impact, and owner confirmation.",
    tuningUse:
      "Adjust severity and priority according to mission consequences rather than technical novelty alone.",
    risk:
      "Potential impact must remain separate from evidence confidence.",
  },
];

const tuningActions = [
  {
    action: "Add enrichment",
    bestUse:
      "Fictional alerts lack identity, owner, service, destination, change, peer, authorization, or source-health context.",
    example:
      "Add role, owner group, approved end time, extension state, and group-source health to a stale-role alert.",
    benefit:
      "Improves analyst understanding and may reduce avoidable evidence requests.",
    risk:
      "Stale or excessive enrichment can create wrong certainty or privacy exposure.",
    validation:
      "Test current, stale, missing, conflicting, and unnecessary enrichment cases.",
  },
  {
    action: "Refine threshold",
    bestUse:
      "A fictional count, rate, duration, or volume boundary does not match expected state and impact.",
    example:
      "Use different approved volume ranges for normal and reporting-period states.",
    benefit:
      "Reduces noise caused by predictable variation.",
    risk:
      "Higher thresholds may hide meaningful low-volume or early-stage conditions.",
    validation:
      "Test below, at, and above boundaries, duplicates, misses, peak states, and source degradation.",
  },
  {
    action: "Adjust time window",
    bestUse:
      "A fictional sequence, expiration, expected follow-up, or grouping period is too short or too long.",
    example:
      "Allow documented synchronization delay before labeling revocation evidence stale.",
    benefit:
      "Aligns logic with real workflow timing.",
    risk:
      "Longer windows can delay response or combine unrelated events.",
    validation:
      "Test boundary timing, clock differences, delays, optional steps, and user impact.",
  },
  {
    action: "Deduplicate",
    bestUse:
      "Fictional retries, replays, collectors, or continuing states create repeated evidence for one underlying condition.",
    example:
      "Group repeated supplier result records sharing a documented request identity and retry state.",
    benefit:
      "Reduces repetitive analyst work.",
    risk:
      "Incorrect deduplication may hide distinct meaningful actions.",
    validation:
      "Test duplicates, legitimate repetition, retries, state changes, and missing identifiers.",
  },
  {
    action: "Group alerts",
    bestUse:
      "Related fictional alerts belong to the same identity, service, case, sequence, destination, or continuing condition.",
    example:
      "Group repeated stale-role observations into one case while preserving state changes and new sessions.",
    benefit:
      "Improves case-level understanding and reduces duplicate triage.",
    risk:
      "Grouping can hide escalation, spread, or separate incidents.",
    validation:
      "Test new identity, new service, severity increase, source change, and condition closure.",
  },
  {
    action: "Adjust severity",
    bestUse:
      "Fictional potential impact differs according to identity, asset, privilege, scope, data, user effect, or recoverability.",
    example:
      "Rate a stale high-privilege recovery role above a low-impact expected service state.",
    benefit:
      "Improves prioritization and communication.",
    risk:
      "Severity changes can hide evidence uncertainty or inflate low-confidence results.",
    validation:
      "Keep confidence separate and test different asset and identity contexts.",
  },
  {
    action: "Adjust confidence",
    bestUse:
      "Fictional evidence strength changes with source health, field completeness, correlation, alternatives, or owner confirmation.",
    example:
      "Reduce effective-access confidence when group and session sources are delayed.",
    benefit:
      "Prevents false certainty.",
    risk:
      "Low confidence must not become automatic closure for high-impact conditions.",
    validation:
      "Test Healthy, Conditional, Degraded, Blind, Conflicting, and Recovering source states.",
  },
  {
    action: "Create narrow exclusion",
    bestUse:
      "A fictional approved identity, destination, purpose, change, and time combination repeatedly produces expected alerts that no longer need the same workflow.",
    example:
      "Exclude one maintenance identity reaching one destination during one approved change window.",
    benefit:
      "Reduces repetitive known context without hiding broad categories.",
    risk:
      "Exceptions can become stale, expand, or outlive purpose.",
    validation:
      "Require owner, evidence, expiration, review, nonmatching tests, rollback, and residual-risk record.",
  },
  {
    action: "Change alert presentation",
    bestUse:
      "The fictional detection is correct, but analysts cannot understand the reason, evidence, source health, alternatives, or next questions.",
    example:
      "Show expected state, observed difference, confidence, owner, source health, and next evidence.",
    benefit:
      "Improves usefulness without changing coverage.",
    risk:
      "More fields may overwhelm analysts or expose unnecessary personal data.",
    validation:
      "Use analyst feedback, privacy review, triage timing, and comprehension tests.",
  },
  {
    action: "Retire or replace",
    bestUse:
      "The fictional risk, source, service, workflow, or detection objective no longer justifies the capability.",
    example:
      "Retire a destination detection after the legacy service and source are fully removed and replacement coverage is validated.",
    benefit:
      "Reduces lifecycle debt and confusion.",
    risk:
      "Retirement without replacement or dependency review can create blind spots.",
    validation:
      "Confirm risk status, source removal, replacement coverage, owner approval, documentation, and rollback window.",
  },
];

const exceptionFields = [
  {
    field: "Exception identifier",
    purpose:
      "Provide a stable fictional reference for approvals, tests, alerts, reviews, and removal.",
    strongExample:
      "EXC-MAINT-014",
    weakExample:
      "Ignore this alert",
  },
  {
    field: "Defender question affected",
    purpose:
      "Explain which fictional detection decision the exception changes.",
    strongExample:
      "Whether the support identity used an unapproved destination outside its maintenance purpose.",
    weakExample:
      "Noisy rule.",
  },
  {
    field: "Business and defensive purpose",
    purpose:
      "State why the fictional expected behavior should follow a different alert path.",
    strongExample:
      "Approved maintenance validation requires one temporary support connection.",
    weakExample:
      "Operations asked.",
  },
  {
    field: "Identity and owner",
    purpose:
      "Limit the fictional exception to the correct person, service, supplier, device, or owner group.",
    strongExample:
      "Named fictional maintenance service identity sponsored by the application owner.",
    weakExample:
      "All administrators.",
  },
  {
    field: "Service and destination",
    purpose:
      "Limit the fictional exception to the exact approved service relationship.",
    strongExample:
      "Support service to notification test destination class.",
    weakExample:
      "Any internal destination.",
  },
  {
    field: "Time and state",
    purpose:
      "Limit the fictional exception to an approved window and operating state.",
    strongExample:
      "During change window CHG-F-12 and only while source health is Healthy.",
    weakExample:
      "Until further notice.",
  },
  {
    field: "Evidence and approval",
    purpose:
      "Record fictional change, ticket, owner, authorization, expected behavior, and source-health evidence.",
    strongExample:
      "Approved change, owner confirmation, destination map, source-health status, and expected test result.",
    weakExample:
      "Verbal approval.",
  },
  {
    field: "Expiration and removal",
    purpose:
      "Define when the fictional exception ends and how removal is verified.",
    strongExample:
      "Expires at change closure or six hours, whichever occurs first; removal validated by regression test.",
    weakExample:
      "Permanent.",
  },
  {
    field: "Tests",
    purpose:
      "Confirm fictional matching and nonmatching behavior.",
    strongExample:
      "Approved identity and destination during the window does not alert; other identities, destinations, times, and source-degraded cases still alert.",
    weakExample:
      "Tested once.",
  },
  {
    field: "Residual risk",
    purpose:
      "Explain what fictional meaningful behavior could still be hidden or delayed.",
    strongExample:
      "Activity inside the exact approved relationship may receive reduced visibility during the window.",
    weakExample:
      "No risk.",
  },
  {
    field: "Rollback",
    purpose:
      "Define when and how the fictional exception is disabled.",
    strongExample:
      "Disable if new sessions, destinations, severity, source degradation, or unexpected application results occur.",
    weakExample:
      "Remove later.",
  },
  {
    field: "Review owner and trigger",
    purpose:
      "Assign fictional accountability after source, service, identity, change, policy, or mission updates.",
    strongExample:
      "Detection owner reviews after any maintenance workflow or identity-role change.",
    weakExample:
      "Security team.",
  },
];

const tradeoffMatrix = [
  {
    goal: "Reduce false positives",
    safeApproach:
      "Add fictional authorization, change, maintenance, identity, destination, owner, and source-health context.",
    coverageRisk:
      "Broad exclusions may hide meaningful behavior outside the approved situation.",
    validation:
      "Compare expected alerts, false positives, true positives, known misses, and regression cases.",
  },
  {
    goal: "Reduce duplicate work",
    safeApproach:
      "Group or deduplicate fictional alerts using stable case, identity, service, state, and event relationships.",
    coverageRisk:
      "Distinct events or worsening conditions may be merged.",
    validation:
      "Test new identities, new services, severity changes, repeated distinct actions, and closure.",
  },
  {
    goal: "Improve prioritization",
    safeApproach:
      "Use fictional severity, confidence, mission impact, privilege, scope, user effect, and time sensitivity.",
    coverageRisk:
      "Low-priority alerts may be ignored even when they form a meaningful pattern.",
    validation:
      "Review escalation outcomes, missed impact, analyst queue behavior, and owner feedback.",
  },
  {
    goal: "Reduce outside-hours noise",
    safeApproach:
      "Use fictional schedule, assignment, time-zone concept, maintenance, event, supplier, recovery, and source-health context.",
    coverageRisk:
      "Broad time suppression may hide stale access or unapproved behavior.",
    validation:
      "Test approved shifts, emergency work, unapproved access, schedule changes, and delayed sources.",
  },
  {
    goal: "Reduce change-related alerts",
    safeApproach:
      "Use fictional change identifier, expected behavior, owner, scope, destination, start, end, validation, and rollback.",
    coverageRisk:
      "Change context may hide behavior outside approved scope or incorrect implementation.",
    validation:
      "Test approved behavior, out-of-scope behavior, failed change, rollback, and post-change observation.",
  },
  {
    goal: "Improve peer-based precision",
    safeApproach:
      "Use fictional mission, identity type, environment, state, schedule, coverage, unique roles, and reviewed membership.",
    coverageRisk:
      "Stale or overly broad peer groups normalize risk or create false anomalies.",
    validation:
      "Test unique approved roles, peer drift, new services, source gaps, and policy differences.",
  },
  {
    goal: "Reduce source-degraded noise",
    safeApproach:
      "Use fictional Conditional, Unknown, Blind, Conflicting, and Recovering states with alternate evidence.",
    coverageRisk:
      "Suppressing source-health alerts may hide both evidence loss and real behavior.",
    validation:
      "Test source failure, partial recovery, backlog, duplicates, alternate sources, and reassessment.",
  },
  {
    goal: "Reduce analyst effort",
    safeApproach:
      "Add fictional explanation, context, source health, next questions, ownership, grouping, and closure guidance.",
    coverageRisk:
      "Overautomation or hidden fields may cause shallow review.",
    validation:
      "Measure triage quality, time, missed evidence, user impact, and analyst feedback.",
  },
];

const evidenceMatrix = [
  {
    id: "TUNE-01",
    source: "Fictional quality review",
    observation:
      "Five emergency-role alerts involve valid approved extensions, two are confirmed stale roles, and three have delayed group evidence.",
    supports:
      "The alert set contains expected, true-positive, and source-degraded outcomes requiring different treatment.",
    limits:
      "The sample does not prove all future alerts follow the same distribution.",
    use:
      "Tune extension context and source-health behavior without suppressing the entire role category.",
  },
  {
    id: "TUNE-02",
    source: "Fictional extension source",
    observation:
      "Approved extensions include identity, role, purpose, start, end, sponsor, owner, and current source-health evidence.",
    supports:
      "Precise extension context can distinguish approved continued authority.",
    limits:
      "Extension presence does not prove activity stayed within destination, action, or object scope.",
    use:
      "Use the source as context, not permanent allow trust.",
  },
  {
    id: "TUNE-03",
    source: "Fictional group source",
    observation:
      "Group-membership evidence is delayed during three alerts.",
    supports:
      "Effective-access confidence should be reduced during the delay.",
    limits:
      "Delay does not prove access remained active or was revoked.",
    use:
      "Return Conditional status and require alternate session or authorization evidence.",
  },
  {
    id: "TUNE-04",
    source: "Fictional analyst feedback",
    observation:
      "Analysts spend most review time locating extension, owner, and source-health context.",
    supports:
      "Alert enrichment could reduce evidence-gathering effort.",
    limits:
      "Faster triage does not prove better coverage or correct labels.",
    use:
      "Add minimized decision-relevant context and measure quality after change.",
  },
  {
    id: "TUNE-05",
    source: "Fictional missed-condition review",
    observation:
      "A broad recovery-window suppression previously hid one stale recovery role.",
    supports:
      "Category-wide suppression creates known coverage risk.",
    limits:
      "One miss does not quantify every possible false negative.",
    use:
      "Reject broad suppression and add narrow context with regression coverage.",
  },
  {
    id: "TUNE-06",
    source: "Fictional privacy review",
    observation:
      "Role, sponsor group, owner group, purpose, end time, destination class, and source health are sufficient; personal profile fields are unnecessary.",
    supports:
      "Useful enrichment can remain privacy-minimized.",
    limits:
      "Other defender questions may require different fields.",
    use:
      "Document field purpose, access, retention, and review triggers.",
  },
  {
    id: "TUNE-07",
    source: "Fictional test record",
    observation:
      "The proposed tuning correctly handles valid extensions but has not been tested against changed destinations, expired extensions, blind sources, or new sessions.",
    supports:
      "The tuning is not ready for broad approval.",
    limits:
      "Missing tests do not prove the proposed logic will fail.",
    use:
      "Add negative, boundary, degraded-source, scope, and regression cases.",
  },
  {
    id: "TUNE-08",
    source: "Fictional lifecycle register",
    observation:
      "The extension workflow and role schema will change next term, and the proposed exception has no review trigger.",
    supports:
      "Tuning ownership and lifecycle controls are incomplete.",
    limits:
      "The future change does not prove the current design is wrong.",
    use:
      "Assign review triggers, versioning, revalidation, and retirement criteria.",
  },
];

const commonMistakes = [
  {
    mistake: "Raising thresholds without root-cause review",
    observation:
      "A fictional count alert is noisy because duplicate retry events are present.",
    impact:
      "A higher threshold may hide meaningful unique activity.",
    correction:
      "Fix uniqueness and retry handling before adjusting the threshold.",
  },
  {
    mistake: "Suppressing a role category",
    observation:
      "All fictional recovery-role alerts are hidden during recovery windows.",
    impact:
      "Stale or excessive authority may be missed.",
    correction:
      "Use exact extension, identity, purpose, timing, destination, source-health, and expiration context.",
  },
  {
    mistake: "Treating change as automatic authorization",
    observation:
      "Every fictional alert during a deployment is ignored.",
    impact:
      "Out-of-scope behavior, implementation defects, or rollback failures may be hidden.",
    correction:
      "Match behavior to documented change scope, owner, expected outcome, and closure.",
  },
  {
    mistake: "Using stale enrichment",
    observation:
      "A fictional service-owner field is outdated but still controls alert severity and suppression.",
    impact:
      "Alerts may be routed or closed incorrectly.",
    correction:
      "Require context freshness and use Conditional behavior when enrichment is stale.",
  },
  {
    mistake: "Confusing severity with confidence",
    observation:
      "A fictional high-impact condition is treated as fully confirmed despite delayed evidence.",
    impact:
      "Analysts may overreact to uncertain observations.",
    correction:
      "Tune severity and confidence separately.",
  },
  {
    mistake: "Grouping hides state changes",
    observation:
      "A fictional continuing case groups new identities, destinations, or sessions into one old alert.",
    impact:
      "Worsening scope may be missed.",
    correction:
      "Break grouping when identity, service, destination, severity, source health, or state changes.",
  },
  {
    mistake: "Exception has no expiration",
    observation:
      "A fictional maintenance exclusion remains active after the project ends.",
    impact:
      "Temporary trust becomes permanent suppression debt.",
    correction:
      "Use event-based and time-based expiration with removal validation.",
  },
  {
    mistake: "Alert presentation is ignored",
    observation:
      "A fictional detection is correct, but analysts lack explanation, evidence, limits, and next questions.",
    impact:
      "Triage remains slow and inconsistent even after logic changes.",
    correction:
      "Improve presentation and analyst guidance before changing coverage.",
  },
  {
    mistake: "Success means fewer alerts",
    observation:
      "A fictional tuning change is approved because volume decreases.",
    impact:
      "Coverage, missed conditions, source loss, and operational harm may be hidden.",
    correction:
      "Measure usefulness, expected alerts, false positives, false negatives, Unknown outcomes, source health, effort, and impact.",
  },
  {
    mistake: "Real tuning artifacts appear in a portfolio",
    observation:
      "A fictional project includes copied internal exceptions, thresholds, fields, alert logic, service names, or source screenshots.",
    impact:
      "Sensitive defensive capabilities and internal architecture may be exposed.",
    correction:
      "Invent every tuning hypothesis, context source, test, metric, owner, date, decision, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Choose one quality problem",
    action:
      "Select a fictional false-positive, expected-alert, duplicate-work, missing-context, source-degraded, prioritization, or analyst-usability problem.",
    output:
      "Tuning problem and defender-question statement.",
    quality:
      "The problem is tied to a specific detection objective and evidence set.",
  },
  {
    step: "2",
    title: "Establish the baseline",
    action:
      "Document fictional true positives, expected alerts, false positives, false negatives, Unknown outcomes, source-degraded cases, effort, impact, and current coverage.",
    output:
      "Before-tuning quality baseline.",
    quality:
      "Alert volume is not the only baseline measure.",
  },
  {
    step: "3",
    title: "Identify root cause",
    action:
      "Review fictional source health, field meaning, timing, duplicates, identity, service, destination, change, peer, authorization, thresholds, tests, and ownership.",
    output:
      "Tuning root-cause hypothesis.",
    quality:
      "The proposed cause remains provisional until validated.",
  },
  {
    step: "4",
    title: "Select context",
    action:
      "Choose fictional identity, asset, service, device, destination, time, maintenance, change, peer, authorization, source-health, and mission fields needed for the decision.",
    output:
      "Context and enrichment matrix.",
    quality:
      "Every field has purpose, freshness, privacy, owner, and limitation.",
  },
  {
    step: "5",
    title: "Design the tuning action",
    action:
      "Select fictional enrichment, threshold, window, grouping, deduplication, severity, confidence, narrow exclusion, presentation, or retirement change.",
    output:
      "Versioned tuning proposal.",
    quality:
      "The action addresses the root cause and preserves the defender question.",
  },
  {
    step: "6",
    title: "Govern exceptions",
    action:
      "Document fictional purpose, identity, service, destination, time, owner, approval, source health, expiration, tests, residual risk, and rollback.",
    output:
      "Exception and suppression-debt register.",
    quality:
      "No exception is broad, permanent, ownerless, or untested.",
  },
  {
    step: "7",
    title: "Create safe tests",
    action:
      "Build invented matching, nonmatching, boundary, expired, changed-destination, new-session, blind-source, stale-context, duplicate, privacy, and regression cases.",
    output:
      "Synthetic tuning test matrix.",
    quality:
      "Expected alert, non-alert, Conditional, Unknown, and rollback outcomes are defined.",
  },
  {
    step: "8",
    title: "Compare tradeoffs",
    action:
      "Measure fictional usefulness, expected alerts, false positives, false negatives, Unknown outcomes, source impact, analyst effort, user impact, privacy, and residual risk.",
    output:
      "Before-and-after quality comparison.",
    quality:
      "Coverage does not worsen without explicit risk acceptance.",
  },
  {
    step: "9",
    title: "Approve and observe",
    action:
      "Assign fictional version, owner, observation period, metrics, validation gates, rollback criteria, communication, and completion criteria.",
    output:
      "Tuning approval and observation plan.",
    quality:
      "The previous version can be restored quickly.",
  },
  {
    step: "10",
    title: "Maintain and retire",
    action:
      "Schedule fictional source, schema, context, identity, service, peer, policy, workflow, privacy, and mission review triggers.",
    output:
      "Tuning lifecycle and retirement plan.",
    quality:
      "Stale context and exceptions are removed rather than silently inherited.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest goal of fictional detection tuning?",
    choices: [
      "Eliminate every alert.",
      "Improve precision and usefulness while preserving intended coverage and documenting tradeoffs.",
      "Increase every threshold.",
      "Suppress all approved activity.",
    ],
    answer: 1,
    explanation:
      "Professional tuning balances useful alerts, missed-condition risk, source health, analyst effort, impact, and residual risk.",
  },
  {
    question:
      "Which fictional tuning action is safest for valid role extensions?",
    choices: [
      "Suppress all recovery-role alerts.",
      "Add precise extension, identity, purpose, timing, owner, destination, source-health, and expiration context.",
      "Raise severity.",
      "Remove the detection.",
    ],
    answer: 1,
    explanation:
      "Precise context reduces avoidable alerts without hiding stale-role conditions.",
  },
  {
    question:
      "Why can stale enrichment be dangerous?",
    choices: [
      "Because enrichment is never useful.",
      "Because outdated ownership, peer, criticality, or authorization context can control alert decisions incorrectly.",
      "Because it always creates more alerts.",
      "Because it replaces source health.",
    ],
    answer: 1,
    explanation:
      "Context freshness is part of tuning quality and confidence.",
  },
  {
    question:
      "Which fictional exception is strongest?",
    choices: [
      "Ignore administrators during maintenance.",
      "Exclude one approved identity, service, destination, purpose, change window, owner, and expiration with tests and rollback.",
      "Suppress outside-hours alerts permanently.",
      "Ignore anything linked to a change.",
    ],
    answer: 1,
    explanation:
      "Narrow, owned, temporary, tested, and reversible exceptions reduce suppression debt.",
  },
  {
    question:
      "Why should severity and confidence be tuned separately?",
    choices: [
      "Because severity is never useful.",
      "Because potential impact and evidence certainty are different dimensions.",
      "Because confidence replaces priority.",
      "Because high severity proves the alert.",
    ],
    answer: 1,
    explanation:
      "A condition can be high impact but supported by incomplete evidence, or low impact with strong evidence.",
  },
  {
    question:
      "What is the strongest way to validate a fictional tuning change?",
    choices: [
      "Confirm that alert volume falls.",
      "Compare expected alerts, false positives, true positives, false negatives, Unknown outcomes, source health, effort, impact, privacy, and rollback criteria.",
      "Ask one analyst whether it looks better.",
      "Keep the change permanently after one test.",
    ],
    answer: 1,
    explanation:
      "Validation must evaluate multiple quality dimensions and preserve meaningful coverage.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use real exceptions with fake owners.",
      "Use real thresholds but invented alerts.",
      "Invent every context source, threshold, exception, test, metric, owner, date, decision, and outcome.",
      "Use internal screenshots after blurring names.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real defensive logic, systems, people, and internal architecture.",
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

export default function DetectionTuningAndContextPage() {
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
              Lesson 6 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Context, Exceptions, Tradeoffs, and Rollback
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A5.6 Detection Tuning and Context
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders improve fictional detection
            precision with identity, asset, service, device, destination,
            timing, maintenance, change, peer, authorization, source-health,
            and mission context—without hiding meaningful coverage or creating
            permanent suppression debt.
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
          lessonTitle="Detection Tuning and Context"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented detections, alerts, context sources, thresholds, exceptions, tests, owners, metrics, dates, decisions, and outcomes.",
            "I understand that tuning should preserve the original defender question and intended coverage.",
            "I will use precise context before broad suppression.",
            "I will separate expected alerts, false positives, false negatives, Unknown outcomes, and source-degraded outcomes.",
            "I will require ownership, expiration, validation, rollback, residual-risk review, and lifecycle triggers.",
            "I will not access, query, collect, test, tune, suppress, block, investigate, or modify any real telemetry, rule, alert, platform, account, endpoint, network, domain, service, supplier, or organization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Quieter Detection Can Be a Weaker Detection"
        >
          <p className="leading-8">
            A fictional team suppresses every emergency-role alert during
            recovery. Alert volume drops, but a stale recovery role is missed.
            The actual quality problem was not that emergency access existed;
            it was that valid extension context, source-health behavior, and
            lifecycle status were missing from the alert.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak tuning decision
              </p>
              <p className="mt-2 leading-7">
                “Suppress all recovery-role alerts because most are approved.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong tuning decision
              </p>
              <p className="mt-2 leading-7">
                “Add current extension, identity, purpose, owner, destination,
                source-health, expiration, and revocation context; preserve
                alerts when scope, timing, session, or lifecycle differs.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Tuning should improve the decision path, not merely remove the
            evidence that makes the dashboard uncomfortable.
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
          title="Tuning Determines Whether Context Improves Judgment or Hides Risk"
        >
          <p className="leading-8">
            Fictional detections often need refinement after testing and
            observation. The professional challenge is to reduce avoidable
            noise, duplicate work, and missing context without suppressing
            identities, services, destinations, times, or states so broadly
            that meaningful behavior disappears.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Precision with purpose",
                "Use fictional context that directly supports the defender question.",
              ],
              [
                "Coverage with evidence",
                "Measure fictional misses and source-health effects before approving lower alert volume.",
              ],
              [
                "Lifecycle with rollback",
                "Make fictional thresholds, exceptions, grouping, and enrichment owned, temporary, testable, and reversible.",
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

        <SectionCard eyebrow="Core Framework" title="The T-U-N-I-N-G Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "T — Trace the quality problem",
                "Identify the fictional false positive, expected alert, false negative, duplicate work, context gap, or source-health issue.",
              ],
              [
                "U — Understand the root cause",
                "Review fictional evidence, fields, timing, duplicates, identities, services, destinations, changes, peers, thresholds, and ownership.",
              ],
              [
                "N — Narrow the context",
                "Use fictional purpose-limited identity, asset, service, destination, time, change, maintenance, authorization, peer, and source-health fields.",
              ],
              [
                "I — Invent and run tests",
                "Create fictional matching, nonmatching, boundary, expired, changed, source-degraded, duplicate, privacy, and regression cases.",
              ],
              [
                "N — Note tradeoffs and rollback",
                "Compare fictional usefulness, expected alerts, false positives, false negatives, Unknowns, effort, impact, privacy, and residual risk.",
              ],
              [
                "G — Govern the lifecycle",
                "Assign fictional owner, version, approval, observation, metrics, exception expiration, review triggers, completion, and retirement.",
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
              Decision-ready tuning statement
            </p>
            <p className="mt-2 leading-7">
              This fictional tuning change addresses a documented quality
              problem using purpose-limited context, representative tests,
              before-and-after metrics, coverage review, privacy controls,
              ownership, expiration, observation, rollback, residual risk, and
              review triggers.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Detection Tuning"
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
            Apply Ten Tuning Principles
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {tuningPrinciples.map((item) => (
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
          title="Use Ten Context Dimensions"
        >
          <div className="grid gap-5">
            {contextDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.dimension}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Defender question", item.question],
                    ["Useful fictional fields", item.fields],
                    ["Tuning use", item.tuningUse],
                    ["Important risk", item.risk],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.dimension}-${label}`}
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
          title="Compare Ten Tuning Actions"
        >
          <div className="grid gap-5">
            {tuningActions.map((item) => (
              <article
                key={item.action}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.action}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Best use", item.bestUse],
                    ["Fictional example", item.example],
                    ["Potential benefit", item.benefit],
                    ["Coverage or lifecycle risk", item.risk],
                    ["Validation", item.validation],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.action}-${label}`}
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
          title="Document Every Exception with Twelve Fields"
        >
          <div className="grid gap-5">
            {exceptionFields.map((item, index) => (
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
            Instructional Section 5
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Review Eight Tuning Tradeoffs
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {tradeoffMatrix.map((item) => (
              <article
                key={item.goal}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.goal}
                </h3>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Safer approach
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.safeApproach}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Coverage risk
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.coverageRisk}</p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Validation
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.validation}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Use a Safe Before-and-After Evaluation"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Quality dimension",
                    "Before tuning",
                    "After tuning question",
                    "Rollback warning",
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
                    "Alert usefulness",
                    "Analysts must search for extension and owner context.",
                    "Does the fictional alert now support the defender question faster and more consistently?",
                    "Analysts lose important evidence or misunderstand the new presentation.",
                  ],
                  [
                    "Expected alerts",
                    "Valid extensions appear as full-priority alerts.",
                    "Are expected extensions grouped or reprioritized while remaining visible?",
                    "Approved activity disappears completely.",
                  ],
                  [
                    "False positives",
                    "Missing extension context creates avoidable alerts.",
                    "Did precise context reduce incorrect risky interpretations?",
                    "Noise shifts to another identity or state.",
                  ],
                  [
                    "False negatives",
                    "Broad suppression previously hid one stale recovery role.",
                    "Do stale, expired, changed-destination, and new-session cases still alert?",
                    "Any known in-scope condition is missed.",
                  ],
                  [
                    "Unknown outcomes",
                    "Delayed group evidence creates forced labels.",
                    "Does the fictional logic return Conditional or Unknown with clear follow-up?",
                    "Uncertainty is hidden or automatically closed.",
                  ],
                  [
                    "Source health",
                    "Context is used even when enrichment is stale.",
                    "Does tuning change confidence when context or required sources degrade?",
                    "The design uses stale context as trust.",
                  ],
                  [
                    "Analyst effort",
                    "Review requires repeated evidence requests.",
                    "Did triage time improve without skipping necessary validation?",
                    "Faster review produces lower-quality decisions.",
                  ],
                  [
                    "Privacy",
                    "The alert includes unnecessary personal profile fields.",
                    "Are only purpose-based role, owner, timing, destination, and health fields retained?",
                    "The tuned alert exposes more personal or internal data.",
                  ],
                  [
                    "Operational impact",
                    "Broad response may interrupt recovery.",
                    "Does improved context support narrower action and safer rollback?",
                    "Correct alerts still produce excessive disruption.",
                  ],
                  [
                    "Lifecycle",
                    "The exception has no expiration or review trigger.",
                    "Are owner, version, expiration, observation, rollback, and retirement current?",
                    "Temporary tuning becomes permanent suppression debt.",
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
          title="Set Tuning Status and Decision States"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Draft",
                "The fictional tuning hypothesis, evidence, context, tests, owner, and tradeoffs are still being designed.",
                "Do not treat the change as approved or effective.",
              ],
              [
                "Tested",
                "The fictional proposal passed its supplied synthetic cases but has not completed multidisciplinary review.",
                "Passing tests do not prove full coverage or operating behavior.",
              ],
              [
                "Conditional",
                "The fictional change may proceed in limited scope with unresolved source, context, coverage, privacy, or lifecycle conditions.",
                "Document limits, observation, owner, and rollback.",
              ],
              [
                "Approved",
                "The fictional change passed evidence, test, privacy, owner, coverage, impact, and rollback gates.",
                "Approval remains limited to the documented version and scope.",
              ],
              [
                "Observing",
                "The fictional tuned version is being measured for usefulness, expected alerts, false positives, misses, Unknowns, source impact, and operations.",
                "Do not declare success before the observation period ends.",
              ],
              [
                "Rolled back",
                "The fictional change caused unacceptable coverage, source, analyst, privacy, user, or operational impact.",
                "Preserve evidence and record lessons learned.",
              ],
              [
                "Expired",
                "The fictional exception or context window ended and must no longer affect alert behavior.",
                "Validate removal and rerun regression tests.",
              ],
              [
                "Retired",
                "The fictional tuning or detection is no longer needed because the risk, source, service, or replacement changed.",
                "Confirm replacement coverage and documentation closure.",
              ],
            ].map(([title, meaning, caution]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {meaning}
                </p>
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
          eyebrow="Fictional Tuning Architecture"
          title="Northbridge Detection Tuning Model"
        >
          <p className="leading-8">
            This conceptual model is completely invented and intentionally
            non-operational. It teaches tuning relationships without real
            thresholds, exclusions, query logic, source names, fields, alerts,
            identities, systems, domains, services, suppliers, or internal
            performance data.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Quality problem", "Expected alerts, false positives, misses, duplicates"],
                ["Root cause", "Source, field, time, context, peer, threshold, tests"],
                ["Context", "Identity, asset, service, destination, change, authorization"],
                ["Controls", "Owner, privacy, expiration, tests, rollback, lifecycle"],
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
                Fictional Tuning Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Enrichment", "Purpose, freshness, owner, privacy, limits"],
                  ["Thresholds", "State, range, duplicates, boundaries, impact"],
                  ["Windows", "Sequence, delays, expiration, follow-up, cooldown"],
                  ["Grouping", "Identity, service, state, severity, break conditions"],
                  ["Exceptions", "Narrow, owned, temporary, tested, reversible"],
                  ["Confidence", "Evidence health, fields, alternatives, scope"],
                  ["Metrics", "Usefulness, expected, false positives, misses, effort"],
                  ["Lifecycle", "Version, observe, rollback, expire, review, retire"],
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
                ["Analyst outcome", "Clearer evidence, questions, priority, closure"],
                ["Owner outcome", "Known coverage, exceptions, actions, residual risk"],
                ["Leadership outcome", "Tradeoffs, impact, milestones, resources"],
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
          title="Fake Northbridge Detection Tuning Dashboard"
          subtitle="Fictional context quality, exceptions, tests, coverage, rollback, and lifecycle status for training only."
          metrics={[
            {
              label: "Tuning proposals with full coverage tests",
              value: "6 / 11",
              note: "Five fictional proposals still lack expired, changed-destination, source-degraded, or false-negative regression cases.",
            },
            {
              label: "Active exceptions with current owners",
              value: "7 / 9",
              note: "Two fictional exceptions have stale ownership or incomplete expiration evidence.",
            },
            {
              label: "Tuned detections in observation",
              value: "4",
              note: "Alert usefulness, expected alerts, misses, Unknown outcomes, analyst effort, and user impact remain under review.",
            },
          ]}
        />

        <FakeAlertCard
          title="Extension Context Reduced Noise but Source-Health Limit Remains"
          severity="Medium"
          time="2:22 PM"
          source="Fake Northbridge Detection Tuning Console"
          details="The fictional stale-role detection now recognizes current approved extensions and groups repeated observations. Group-membership evidence is delayed, one new session appeared, and the extension does not explicitly cover the session destination. Potential severity remains High while evidence confidence is Moderate."
          recommendation="Keep the fictional tuning Conditional. Preserve the alert for the changed session and destination, validate extension scope, group and session evidence, source health, owner, expiration, rollback, and regression coverage before approval."
        />

        <FakeLogPanel
          title="Fake Detection Tuning Timeline"
          logs={[
            "09:00 QUALITY false-positive='valid-extension'",
            "09:08 QUALITY known-miss='broad-suppression'",
            "09:16 ROOT-CAUSE extension-context='missing'",
            "09:24 CONTEXT identity='added'",
            "09:32 CONTEXT owner='added'",
            "09:40 CONTEXT extension-end='added'",
            "09:48 CONTEXT destination='added'",
            "09:56 SOURCE group-state='delayed'",
            "10:04 TEST valid-extension='passed'",
            "10:12 TEST expired-extension='passed'",
            "10:20 TEST changed-destination='failed'",
            "10:28 TEST new-session='failed'",
            "10:36 STATUS tuning='conditional'",
            "10:44 CONFIDENCE observation='high'",
            "10:52 CONFIDENCE authorization='moderate'",
            "11:00 ROLLBACK criterion='coverage-loss'",
            "11:08 OWNER exception='assigned'",
            "11:16 EXPIRATION event='change-closure'",
            "11:24 CONFIDENCE overall='moderate'",
            "14:22 ALERT issue='extension-scope-difference'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Tuning Evidence Supports—and What It Does Not Prove
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
                    ["Tuning-design use", item.use],
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
          title="Which Tuning Decision Is Best Supported?"
          question="Which conclusion most responsibly represents the fictional stale-role tuning proposal?"
          evidence={[
            "Valid extension alerts are a major source of avoidable analyst effort.",
            "Broad recovery suppression previously caused a known missed condition.",
            "The extension source includes identity, role, purpose, owner, timing, and source-health context.",
            "Group evidence is delayed during some alerts.",
            "The proposed tuning passes valid and expired extension tests.",
            "Changed-destination and new-session tests fail.",
            "The extension does not prove all actions and destinations are authorized.",
            "The workflow and schema will change and require future review.",
          ]}
          options={[
            "Keep the fictional tuning Conditional, use precise extension context, preserve alerts for changed destinations and sessions, define source-degraded behavior, add failed regression cases, assign review triggers, and retain rollback.",
            "Approve the tuning because valid extension noise decreased.",
            "Suppress all alerts with any extension record.",
            "Remove group and session evidence because it complicates the logic.",
          ]}
          bestAnswer={0}
          explanation="The first option improves precision while preserving scope, source-health limits, failed tests, lifecycle needs, and rollback."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Detection Tuning Errors"
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
          title="Build the Northbridge Detection Tuning Plan"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            collect, query, inspect, test, tune, suppress, group, block,
            investigate, or modify any real telemetry, detection rule, alert,
            account, endpoint, network, domain, application, supplier, platform,
            exception, or organization.
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
          title="A Proposed Exception Covers Every Administrator"
          scenario="A fictional maintenance detection creates repeated expected alerts. The proposed fix excludes all administrator identities during the entire weekend, regardless of service, destination, purpose, source health, or change record."
          choices={[
            {
              label: "Choice A",
              response:
                "Reject the broad fictional exception and design a narrow one limited to the approved maintenance identity, service, destination, purpose, change window, owner, source-health state, expiration, tests, and rollback.",
              outcome:
                "Best defensive choice. It reduces expected noise without creating category-wide blind spots.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Approve the exception because maintenance is expected.",
              outcome:
                "Weak. The scope exceeds the approved purpose and can hide meaningful behavior.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Raise every administrator alert to High severity.",
              outcome:
                "Weak. Severity does not correct missing context or broad scope.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Alert Volume Falls but New-Session Coverage Breaks"
          scenario="A fictional grouping change reduces repeated stale-role alerts. Testing shows that a new session opened after the first alert remains inside the existing group and does not create a new analyst-visible state change."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the fictional grouping Conditional, create a break condition for new sessions, identities, destinations, severity, source-health, or effective-access changes, retest, compare effort and coverage, and preserve rollback.",
              outcome:
                "Best choice. It keeps duplicate reduction while preserving meaningful changes.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Approve the grouping because alert volume decreased.",
              outcome:
                "Weak. The design hides an important change in scope.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable session context to simplify the alert.",
              outcome:
                "Weak. Removing evidence reduces the detection's decision value.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Create a Tuning Program That Reduces Noise without Buying Blindness"
        >
          <p className="leading-8">
            Fictional Northbridge has noisy detections for privileged access,
            supplier support, new service destinations, wireless class changes,
            DNS differences, application state, and recovery. Analysts want
            fewer alerts, service owners want broad maintenance exclusions, and
            leadership wants simple metrics. Several context sources are stale,
            and previous suppression caused a known miss.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Create tuning intake",
                "Record fictional objective, quality problem, root-cause hypothesis, scope, owners, and non-proof statement.",
              ],
              [
                "Govern context sources",
                "Document fictional field purpose, freshness, ownership, privacy, failure behavior, and review triggers.",
              ],
              [
                "Govern exceptions",
                "Require fictional identity, service, destination, purpose, change, owner, expiration, tests, residual risk, and rollback.",
              ],
              [
                "Measure tradeoffs",
                "Compare fictional expected alerts, false positives, false negatives, Unknowns, source impact, effort, user impact, privacy, and coverage.",
              ],
              [
                "Use staged approval",
                "Apply fictional Draft, Tested, Conditional, Approved, Observing, Rolled Back, Expired, and Retired states.",
              ],
              [
                "Communicate honestly",
                "Explain fictional improvements, known misses, untested states, stale context, suppression debt, rollback, and next milestones.",
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
              Produce a fictional tuning-governance charter, quality baseline,
              context-source inventory, tuning-hypothesis register, exception
              register, suppression-debt register, synthetic test plan,
              before-and-after metrics, validation gates, observation plan,
              rollback criteria, completion criteria, review triggers,
              residual-risk statement, analyst guide, and leadership summary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Detection Tuning and Context Checklist"
          items={[
            "I can explain fictional tuning as a balance between precision, usefulness, coverage, missed-condition risk, effort, impact, privacy, and residual risk.",
            "I can trace a tuning proposal to one defender question and one documented quality problem.",
            "I can use fictional identity, asset, service, device, destination, time, change, maintenance, peer, authorization, source-health, and mission context.",
            "I can distinguish enrichment, threshold, window, deduplication, grouping, severity, confidence, exclusion, presentation, and retirement actions.",
            "I can explain why broad suppression creates false-negative and lifecycle risk.",
            "I can document fictional exceptions with purpose, identity, service, destination, time, owner, evidence, expiration, tests, residual risk, rollback, and review triggers.",
            "I can keep context sources fresh and use Conditional behavior when enrichment is stale.",
            "I can separate severity, confidence, priority, and response.",
            "I can compare fictional expected alerts, false positives, true positives, false negatives, Unknown outcomes, source-degraded cases, analyst effort, user impact, and privacy before and after tuning.",
            "I can define Draft, Tested, Conditional, Approved, Observing, Rolled Back, Expired, and Retired tuning states.",
            "I can assign version, ownership, validation gates, observation periods, rollback criteria, completion criteria, reopen conditions, and lifecycle reviews.",
            "I can create a completely fictional tuning artifact without exposing real thresholds, exceptions, query logic, alerts, sources, services, systems, or defensive capabilities.",
          ]}
        />

        <MiniQuiz
          title="A5.6 Mini Quiz: Detection Tuning and Context"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Detection Tuning and Context Package for the Northbridge Student-Support Cooperative. Include mission, purpose, scope, stakeholders, exclusions, safety boundary, at least twenty defender questions, current detection objectives, quality problems, expected alerts, false positives, false negatives, true positives, Unknown outcomes, source-degraded outcomes, alert usefulness, analyst effort, user impact, privacy impact, operational impact, current coverage, root-cause hypotheses, identity context, asset context, service context, device context, destination context, time context, schedule context, maintenance context, change context, peer context, authorization context, source-health context, mission-impact context, context field purpose, context freshness, context ownership, context privacy, enrichment, thresholds, time windows, sequence windows, grouping, deduplication, cooldowns, severity tuning, confidence tuning, priority tuning, narrow exclusions, alert-presentation changes, retirement decisions, at least twelve fictional exception records, exception identifiers, purpose, identity, owner, service, destination, time, state, evidence, approval, expiration, removal, tests, residual risk, rollback, review triggers, suppression-debt findings, matching tests, nonmatching tests, boundary tests, expired-context tests, changed-destination tests, new-session tests, stale-context tests, degraded-source tests, duplicate tests, privacy tests, regression tests, before-and-after comparisons, validation gates, observation periods, rollback criteria, completion criteria, reopen criteria, Draft states, Tested states, Conditional states, Approved states, Observing states, Rolled Back states, Expired states, Retired states, owners, versions, leadership summary, analyst guide, reflection, and a statement that every organization, source, field, threshold, exception, alert, test, owner, date, decision, and outcome is invented."
          tips={[
            "Start every fictional tuning proposal with one quality problem and one defender question.",
            "Use precise, current, purpose-limited context before exclusions or suppression.",
            "Measure both reduced noise and preserved coverage through false-positive and false-negative review.",
            "Make every exception owned, temporary, testable, privacy-aware, and reversible.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready to Map Alerts to Defender Questions?"
        >
          <p className="leading-8">
            Before moving to A5.7, rate your readiness from 1 to 5 for quality
            problems, root causes, identity context, service context, change,
            maintenance, peers, authorization, source health, enrichment,
            thresholds, grouping, exceptions, tradeoffs, tests, metrics,
            rollback, lifecycle, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why fewer fictional alerts do not automatically mean better quality.",
              "I can use current, purpose-limited context without creating permanent trust.",
              "I can distinguish enrichment, grouping, deduplication, threshold, window, severity, confidence, and exclusion changes.",
              "I can design narrow exceptions with owners, expiration, tests, residual risk, and rollback.",
              "I can detect stale context and suppression debt.",
              "I can compare precision improvements with false-negative and coverage risk.",
              "I can define observation, rollback, completion, and review criteria.",
              "I can produce a safe fictional tuning package without copying real exceptions, thresholds, alerts, or internal logic.",
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
            Record one fictional tuning problem, one root-cause hypothesis, one
            context source, one narrow exception condition, one coverage risk,
            one rollback criterion, and one question you will carry into A5.7.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Detection tuning should improve fictional precision and usefulness while preserving intended coverage and missed-condition awareness.",
            "Tune root causes such as source defects, field meaning, timing, duplicates, missing context, peers, tests, and ownership—not only alert count.",
            "Identity, asset, service, device, destination, time, change, maintenance, peer, authorization, source-health, and mission context should remain purpose-limited and current.",
            "Expected alerts may remain valuable and should not automatically be suppressed as false positives.",
            "Narrow exclusions require identity, service, destination, purpose, time, owner, evidence, expiration, testing, residual risk, rollback, and review triggers.",
            "Severity, confidence, priority, and response describe different decision dimensions.",
            "Grouping and deduplication must preserve new identities, sessions, destinations, severity changes, state changes, and source-health changes.",
            "Before-and-after validation should compare expected alerts, false positives, true positives, false negatives, Unknowns, source impact, effort, user impact, privacy, and lifecycle.",
            "Rollback, observation, expiration, review, and retirement are core parts of professional tuning.",
            "Every CyberShield tuning artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, learn how fictional alerts should map to structured defender
            questions about identity, device, service, destination,
            authorization, source health, scope, impact, ownership,
            alternatives, next evidence, escalation, and closure.
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