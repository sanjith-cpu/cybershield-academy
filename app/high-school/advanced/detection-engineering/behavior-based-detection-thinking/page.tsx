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
const previousLesson = `${modulePath}/detection-logic-concepts`;
const nextLesson = `${modulePath}/false-positives-and-false-negatives`;

const objectives = [
  "Explain fictional behavior-based detection as the analysis of identities, devices, services, destinations, timing, sequence, frequency, privilege, peer context, change, authorization, source health, and mission impact.",
  "Distinguish rare, unusual, changed, policy-different, degraded, expected, approved, and potentially harmful fictional behavior without treating any one category as proof of malicious intent.",
  "Build fictional behavior hypotheses that include expected patterns, meaningful deviations, alternative explanations, evidence requirements, confidence, scope, impact, and non-proof statements.",
  "Evaluate fictional peer groups, baselines, seasonality, maintenance, deployments, recovery, ownership, and source-health conditions before designing or tuning behavior detections.",
  "Create a portfolio-ready fictional behavior-detection hypothesis library, context matrix, evidence plan, safe test set, analyst guide, lifecycle record, and residual-risk summary.",
];

const vocabulary = [
  [
    "Behavior-based detection",
    "A fictional defensive approach that evaluates patterns, relationships, state changes, sequences, frequency, timing, identity, destination, privilege, peer context, and mission impact.",
  ],
  [
    "Expected behavior",
    "A fictional evidence-supported description of approved activity for a defined identity, service, device, workflow, state, and period.",
  ],
  [
    "Observed behavior",
    "A fictional record-supported description of what appears to have occurred under the available source-health conditions.",
  ],
  [
    "Behavior difference",
    "A fictional difference between expected and observed activity that requires context before interpretation.",
  ],
  [
    "Behavior hypothesis",
    "A fictional explanation of why a pattern may matter, which evidence supports it, which alternatives remain, and what decision it could inform.",
  ],
  [
    "Rare behavior",
    "Fictional activity that occurs infrequently in the available evidence; rarity does not automatically mean harm or policy violation.",
  ],
  [
    "Unusual behavior",
    "Fictional activity that differs from a defined baseline, peer group, workflow, or state and requires contextual review.",
  ],
  [
    "Policy-different behavior",
    "Fictional activity that appears inconsistent with documented identity, network, application, supplier, wireless, DNS, or administrative policy.",
  ],
  [
    "State-dependent behavior",
    "Fictional activity whose meaning changes during normal operation, maintenance, migration, event, incident, degraded operation, or recovery.",
  ],
  [
    "Peer group",
    "A fictional set of similar identities, devices, services, suppliers, or workflows used for contextual comparison.",
  ],
  [
    "Peer-group drift",
    "A fictional condition in which the members, purpose, ownership, or behavior of a comparison group change over time.",
  ],
  [
    "Seasonality",
    "Fictional repeating variation associated with schedules, enrollment periods, reporting periods, events, maintenance, or other known cycles.",
  ],
  [
    "Behavior sequence",
    "A fictional ordered relationship among events, requests, approvals, assignments, actions, results, closures, or recovery steps.",
  ],
  [
    "Behavior frequency",
    "The fictional count or rate of an activity over a defined identity, service, workflow, or time period.",
  ],
  [
    "Destination novelty",
    "A fictional condition in which an identity or service reaches a destination category not previously observed or expected.",
  ],
  [
    "Identity novelty",
    "A fictional condition in which a new or changed user, service, supplier, privileged, device, or recovery identity participates in a workflow.",
  ],
  [
    "Privilege context",
    "Fictional information about role, authority, approval, assignment, destination, session, expiration, revocation, and effective access.",
  ],
  [
    "Change context",
    "Fictional evidence about approved deployments, migrations, maintenance, policy updates, configuration changes, ownership changes, and rollback.",
  ],
  [
    "Authorization context",
    "Fictional evidence showing whether an identity, service, device, destination, operation, or workflow was approved under current conditions.",
  ],
  [
    "Source-health context",
    "Fictional evidence about freshness, completeness, timing, schema, transformation, coverage, duplication, and blind periods.",
  ],
  [
    "Behavior confidence",
    "A fictional rating describing how strongly current evidence supports the observation and its interpretation.",
  ],
  [
    "Behavior impact",
    "The fictional effect on users, services, data, suppliers, privacy, policy, availability, evidence, or recovery if the condition is meaningful.",
  ],
  [
    "Alternative explanation",
    "A fictional plausible reason for a behavior difference, such as approved change, maintenance, assignment, recovery, source delay, or peer-group error.",
  ],
  [
    "Behavior review trigger",
    "A fictional event requiring revalidation, such as identity, service, destination, workflow, peer, baseline, source, policy, supplier, or mission change.",
  ],
];

const behaviorPrinciples = [
  {
    principle: "Rare does not equal harmful",
    description:
      "A fictional activity may be rare because the user, service, assignment, event, or recovery state is unusual but approved.",
    strongPractice:
      "Review identity role, purpose, assignment, change, owner, policy, source health, and impact before escalation.",
    failure:
      "A detection may create dramatic alerts that reflect legitimate low-frequency work.",
  },
  {
    principle: "Repeated does not equal safe",
    description:
      "A fictional behavior may occur frequently because a stale exception, policy drift, unsupported workflow, or source defect has become normal.",
    strongPractice:
      "Compare observed behavior with current authorization and service purpose rather than frequency alone.",
    failure:
      "Persistent risk can become embedded in the baseline.",
  },
  {
    principle: "Identity changes meaning",
    description:
      "The same fictional action can have different significance for a student, employee, supplier, service identity, administrator, or emergency role.",
    strongPractice:
      "Use identity category, role, assignment, device, destination, purpose, and lifecycle.",
    failure:
      "Broad rules may miss privilege or over-alert on low-risk activity.",
  },
  {
    principle: "Destination changes meaning",
    description:
      "A fictional destination may be normal for one service and unexpected for another.",
    strongPractice:
      "Evaluate service dependency, network zone, DNS ownership, supplier relationship, policy, and application outcome.",
    failure:
      "Novel destinations may be either ignored or over-escalated without service context.",
  },
  {
    principle: "Timing changes meaning",
    description:
      "Fictional behavior outside a usual period may reflect shift changes, maintenance, global support, recovery, or an unexpected condition.",
    strongPractice:
      "Use schedule, assignment, time zone concept, maintenance, event, source delay, and owner context.",
    failure:
      "Outside-hours alerts become noisy or misleading.",
  },
  {
    principle: "Sequence adds context",
    description:
      "Fictional approval, assignment, action, result, closure, and revocation relationships may be more meaningful than one isolated event.",
    strongPractice:
      "Review ordered workflow evidence and optional or delayed steps.",
    failure:
      "Single events may be interpreted without the surrounding authorized process.",
  },
  {
    principle: "Peer groups require governance",
    description:
      "Fictional peers should share relevant mission, identity, service, device, destination, and workflow characteristics.",
    strongPractice:
      "Document peer membership, owner, review date, exclusions, unique roles, and drift triggers.",
    failure:
      "Poor peers create false anomalies or hide meaningful differences.",
  },
  {
    principle: "Change must not become an automatic excuse",
    description:
      "A fictional approved change can explain new behavior but does not prove correct implementation, scope, outcome, or closure.",
    strongPractice:
      "Validate change identifier, owner, expected behavior, timing, affected services, result, rollback, and user outcome.",
    failure:
      "Policy drift or defects may be normalized under broad change context.",
  },
  {
    principle: "Source health affects interpretation",
    description:
      "Fictional behavior may appear rare, missing, reordered, duplicated, or novel because the evidence is degraded.",
    strongPractice:
      "Review freshness, completeness, clock, schema, transformation, duplication, and blind periods.",
    failure:
      "Evidence defects may be labeled as behavior defects.",
  },
  {
    principle: "Behavior detections need lifecycle ownership",
    description:
      "Fictional hypotheses, peer groups, baselines, thresholds, tests, exclusions, and analyst guidance must change with the environment.",
    strongPractice:
      "Revalidate after identity, service, destination, workflow, source, supplier, policy, or recovery change.",
    failure:
      "The detection can become stale while appearing sophisticated.",
  },
];

const behaviorDimensions = [
  {
    dimension: "Identity",
    defenderQuestion:
      "Which fictional user, service, supplier, device, privileged, emergency, or recovery identity performed or participated in the behavior?",
    usefulContext:
      "Role, assignment, owner, device, authentication, authorization, session, expiration, revocation, and peer group.",
    risk:
      "Identity labels may be stale, shared, transformed, or incomplete.",
    example:
      "A supplier support identity performs an approved action during its scheduled support window.",
  },
  {
    dimension: "Device",
    defenderQuestion:
      "Which fictional managed, personal, service, administrative, supplier, guest, event, or recovery device was involved?",
    usefulContext:
      "Owner, class, posture, onboarding, network class, application, support, replacement, and retirement.",
    risk:
      "A device identity does not prove which person or service controlled the action.",
    example:
      "A service device changes network class after a documented replacement.",
  },
  {
    dimension: "Service",
    defenderQuestion:
      "Which fictional application, workflow, identity service, DNS service, supplier process, support function, or recovery capability was involved?",
    usefulContext:
      "Mission purpose, dependencies, owner, criticality, normal operations, maintenance, change, and recovery.",
    risk:
      "Service categories may hide distinct subservices or state differences.",
    example:
      "A notification service contacts a new approved provider after migration.",
  },
  {
    dimension: "Destination",
    defenderQuestion:
      "Which fictional destination class, service group, zone, supplier, resolver, application, or administrative target was reached?",
    usefulContext:
      "Ownership, purpose, policy, DNS state, route, application result, change, and service dependency.",
    risk:
      "Novelty alone does not establish unauthorized or harmful communication.",
    example:
      "A workflow service reaches a new destination listed in the approved deployment plan.",
  },
  {
    dimension: "Time",
    defenderQuestion:
      "When did the fictional behavior occur relative to schedule, assignment, maintenance, event, recovery, source delay, and expected workflow?",
    usefulContext:
      "Event time, collection time, processing time, time-zone concept, shift, window, seasonality, and source health.",
    risk:
      "Clock differences and delayed collection can distort timing conclusions.",
    example:
      "A support action occurs outside the typical schedule but during an approved emergency event.",
  },
  {
    dimension: "Sequence",
    defenderQuestion:
      "Did fictional approval, assignment, authentication, action, result, closure, and revocation occur in the expected order?",
    usefulContext:
      "Correlation key, optional steps, retries, event time, collection delay, clock, source health, and workflow owner.",
    risk:
      "Out-of-order evidence may appear as out-of-order behavior.",
    example:
      "An emergency role is approved, assigned, used, then revoked after closure.",
  },
  {
    dimension: "Frequency and volume",
    defenderQuestion:
      "How often or how much fictional activity occurred for the identity, service, destination, or workflow?",
    usefulContext:
      "Unique-event rules, retries, duplicates, peak state, peer group, seasonality, capacity, and source completeness.",
    risk:
      "Counts can be inflated by duplicate evidence or expected demand changes.",
    example:
      "Supplier result volume increases during an approved reporting period.",
  },
  {
    dimension: "Privilege",
    defenderQuestion:
      "Did fictional authority, role, destination, action, or object scope exceed the approved purpose or time?",
    usefulContext:
      "Role, approval, assignment, administrative device, destination, session, expiration, revocation, and evidence health.",
    risk:
      "Role assignment does not always equal effective access, and valid identity does not prove authorized action.",
    example:
      "An emergency role remains assigned after the approved window but group evidence is delayed.",
  },
  {
    dimension: "Peer context",
    defenderQuestion:
      "How does fictional behavior compare with similar identities, devices, services, suppliers, or workflows?",
    usefulContext:
      "Peer purpose, membership, unique roles, owner, review date, expected variation, and source coverage.",
    risk:
      "Poorly chosen peers can make approved uniqueness look risky.",
    example:
      "One support service uses a destination class not used by comparable support services.",
  },
  {
    dimension: "Mission impact",
    defenderQuestion:
      "Could the fictional behavior affect essential users, service state, privacy, policy, evidence, supplier processing, availability, or recovery?",
    usefulContext:
      "Asset value, user journey, service criticality, data, support, blast radius, recoverability, and owner confirmation.",
    risk:
      "Technical unusualness does not automatically equal business impact.",
    example:
      "A DNS difference changes which environment receives student notifications.",
  },
];

const behaviorCategories = [
  {
    category: "Expected and approved",
    definition:
      "Fictional behavior matches current service purpose, identity, policy, change, timing, destination, and owner expectations.",
    response:
      "Record as expected; preserve evidence and review only if the baseline or authorization changes.",
    caution:
      "Expected behavior can still reveal a weak policy or outdated process.",
  },
  {
    category: "Expected alert",
    definition:
      "Fictional behavior correctly matches a detection even though it is approved and still deserves awareness or confirmation.",
    response:
      "Confirm context, document why the alert is expected, and decide whether the detection should continue reporting it.",
    caution:
      "Do not label every approved alert as a false positive.",
  },
  {
    category: "Rare but approved",
    definition:
      "Fictional behavior occurs infrequently but has current authorization, ownership, purpose, and evidence.",
    response:
      "Preserve the rare pattern and its approval context without automatically suppressing future differences.",
    caution:
      "Authorization may expire or not cover every future occurrence.",
  },
  {
    category: "Changed and approved",
    definition:
      "Fictional behavior differs from the earlier baseline because of a documented deployment, migration, maintenance, policy, ownership, or workflow change.",
    response:
      "Validate implementation, timing, scope, outcome, rollback, and baseline update.",
    caution:
      "Approved change does not prove every observed difference is intended.",
  },
  {
    category: "Unusual and unresolved",
    definition:
      "Fictional behavior differs from expectations, but authorization, ownership, source health, or impact remains incomplete.",
    response:
      "Keep In Review or Conditional and gather targeted evidence.",
    caution:
      "Avoid both automatic escalation and automatic normalization.",
  },
  {
    category: "Policy-different",
    definition:
      "Fictional observed behavior appears inconsistent with current documented identity, network, application, wireless, DNS, supplier, or administrative policy.",
    response:
      "Validate effective policy, change, exception, owner, source health, scope, and impact.",
    caution:
      "Documentation may be stale or incomplete.",
  },
  {
    category: "Source-degraded",
    definition:
      "Fictional behavior appears unusual because evidence is delayed, incomplete, duplicated, reordered, transformed incorrectly, or outside coverage.",
    response:
      "Correct source health, reduce confidence, use alternate evidence, and reassess.",
    caution:
      "Do not close the underlying behavior question solely because the source is unhealthy.",
  },
  {
    category: "Potentially harmful",
    definition:
      "Fictional evidence supports a behavior that may threaten approved identity, service, data, policy, privacy, availability, or recovery outcomes.",
    response:
      "Escalate proportionately with evidence, confidence, scope, impact, owner, and safe response boundaries.",
    caution:
      "Potential harm still does not prove intent or complete scope.",
  },
];

const hypothesisFields = [
  {
    field: "Hypothesis identifier and version",
    purpose:
      "Provide a stable fictional reference for sources, logic, tests, alerts, findings, tuning, and lifecycle.",
    strongExample:
      "BH-SVC-007 version 2",
    weakExample:
      "Weird service behavior",
  },
  {
    field: "Mission risk",
    purpose:
      "State which fictional user, identity, service, supplier, policy, evidence, privacy, or recovery outcome matters.",
    strongExample:
      "A service may communicate outside its approved destination set and increase trust-boundary exposure.",
    weakExample:
      "Suspicious traffic.",
  },
  {
    field: "Defender question",
    purpose:
      "Define exactly what the fictional analyst or owner must determine.",
    strongExample:
      "Did the workflow service reach a destination outside its current approved dependency map?",
    weakExample:
      "Is the service compromised?",
  },
  {
    field: "Expected behavior",
    purpose:
      "Describe the fictional approved identity, device, service, destination, time, sequence, frequency, privilege, state, and owner context.",
    strongExample:
      "The workflow service reaches only approved application and DNS destination classes during normal and maintenance states.",
    weakExample:
      "Normal traffic.",
  },
  {
    field: "Meaningful deviation",
    purpose:
      "Describe the fictional difference that deserves review.",
    strongExample:
      "The service reaches a new destination class not present in the current dependency or change record.",
    weakExample:
      "Anything unusual.",
  },
  {
    field: "Alternative explanations",
    purpose:
      "Record fictional change, maintenance, migration, recovery, supplier, peer, source-health, and documentation possibilities.",
    strongExample:
      "Approved deployment, stale dependency map, DNS migration, source mapping error, or unapproved communication.",
    weakExample:
      "Probably malicious.",
  },
  {
    field: "Evidence requirements",
    purpose:
      "List fictional primary, corroborating, enrichment, source-health, change, policy, and owner evidence.",
    strongExample:
      "Service identity, destination class, policy result, DNS ownership, change record, application result, source health, and owner validation.",
    weakExample:
      "Network logs.",
  },
  {
    field: "Confidence and scope",
    purpose:
      "Explain how strongly the fictional evidence supports the observation and which identities, services, periods, and environments are represented.",
    strongExample:
      "High confidence in the new destination observation; Moderate confidence in policy difference because the service map may be stale.",
    weakExample:
      "High confidence overall.",
  },
  {
    field: "Potential impact",
    purpose:
      "Describe fictional effects on trust boundaries, users, services, data, suppliers, policy, privacy, evidence, or recovery.",
    strongExample:
      "Could expand the service's reachable dependency set and complicate segmentation assurance.",
    weakExample:
      "Very dangerous.",
  },
  {
    field: "Non-proof statement",
    purpose:
      "Clarify what the fictional behavior difference does not establish.",
    strongExample:
      "The new destination does not prove compromise, intent, data transfer, or harmful application action.",
    weakExample:
      "Alert confirms incident.",
  },
  {
    field: "Test and review plan",
    purpose:
      "Define fictional positive, negative, change, peer, timing, source-degraded, missing-field, privacy, and regression cases.",
    strongExample:
      "Test approved deployment destinations, stale maps, new unapproved destinations, DNS mapping errors, and delayed application evidence.",
    weakExample:
      "See if it alerts.",
  },
  {
    field: "Ownership and triggers",
    purpose:
      "Assign fictional hypothesis, source, service, policy, analyst, privacy, risk, review, and retirement responsibilities.",
    strongExample:
      "Review after service dependency, DNS, network policy, source schema, or owner change.",
    weakExample:
      "Security owns it.",
  },
];

const peerGroupDesign = [
  {
    designArea: "Shared mission",
    question:
      "Do fictional peers perform comparable user, service, supplier, administrative, or recovery functions?",
    strongPractice:
      "Group support services with similar case-access purposes rather than every application service.",
    risk:
      "Different missions can produce valid behavior differences that appear anomalous.",
  },
  {
    designArea: "Shared identity type",
    question:
      "Are fictional peers users, service identities, suppliers, devices, privileged roles, or recovery roles with comparable authority?",
    strongPractice:
      "Compare supplier support identities with supplier support identities under similar sponsorship.",
    risk:
      "Mixing identity types hides privilege differences.",
  },
  {
    designArea: "Shared environment",
    question:
      "Do fictional peers operate in comparable zones, applications, wireless classes, cloud environments, or recovery states?",
    strongPractice:
      "Separate normal production behavior from recovery-environment behavior.",
    risk:
      "Environment differences may dominate the comparison.",
  },
  {
    designArea: "Shared state",
    question:
      "Are fictional peers compared during normal, maintenance, migration, event, degraded, or recovery operation?",
    strongPractice:
      "Use state-specific peer comparisons.",
    risk:
      "Recovery behavior can look extreme compared with normal operation.",
  },
  {
    designArea: "Shared time and season",
    question:
      "Do fictional peers operate on similar schedules, shifts, reporting periods, or event cycles?",
    strongPractice:
      "Use current schedule and seasonality context.",
    risk:
      "Different work windows create predictable timing differences.",
  },
  {
    designArea: "Coverage equality",
    question:
      "Do fictional peers have comparable source, field, timing, and environment coverage?",
    strongPractice:
      "Exclude or mark peers with major blind periods or source differences.",
    risk:
      "Weak coverage can make one peer appear quieter or more unusual.",
  },
  {
    designArea: "Unique approved roles",
    question:
      "Does a fictional peer have a documented special destination, operation, supplier, or recovery responsibility?",
    strongPractice:
      "Preserve unique-role context instead of forcing uniformity.",
    risk:
      "Approved uniqueness may create repeated false positives.",
  },
  {
    designArea: "Lifecycle and drift",
    question:
      "Who owns fictional peer membership and when is it revalidated?",
    strongPractice:
      "Review after service, identity, ownership, policy, environment, or source change.",
    risk:
      "Stale peers reduce both detection precision and coverage.",
  },
];

const sequencePatterns = [
  {
    pattern: "Approval to action",
    expected:
      "Fictional approval occurs before privileged, supplier, support, or change activity.",
    difference:
      "Action appears before approval or approval cannot be correlated.",
    alternatives:
      "Delayed approval source, emergency process, incorrect key, optional preapproval, or policy difference.",
    evidence:
      "Approval, identity, assignment, action, time, source health, owner, and result.",
  },
  {
    pattern: "Assignment to access",
    expected:
      "Fictional user or service access aligns with a current case, service, role, device, or support assignment.",
    difference:
      "Access occurs without current assignment or after assignment closure.",
    alternatives:
      "Assignment delay, reassignment, source gap, emergency access, or stale closure.",
    evidence:
      "Identity, assignment, object, destination, session, timing, source health, and owner.",
  },
  {
    pattern: "Request to result",
    expected:
      "Fictional supplier, application, or notification results correlate with approved requests.",
    difference:
      "A result appears without a matching request or the request remains unresolved.",
    alternatives:
      "Duplicate delivery, retry, delayed request source, batch processing, or correlation error.",
    evidence:
      "Request identifier, result identifier, supplier, time, duplicates, source health, and business state.",
  },
  {
    pattern: "Change to new behavior",
    expected:
      "Fictional deployment or policy change is followed by the documented new destination, service, field, or volume pattern.",
    difference:
      "Observed behavior exceeds or differs from the approved change scope.",
    alternatives:
      "Incomplete documentation, rollback, staged deployment, source mapping, or implementation defect.",
    evidence:
      "Change, owner, expected behavior, destination, application result, policy, source health, and rollback.",
  },
  {
    pattern: "Alert to owner confirmation",
    expected:
      "A fictional alert receives timely owner, service, identity, supplier, or user context.",
    difference:
      "The alert remains unresolved or confirmation conflicts with evidence.",
    alternatives:
      "Owner unavailable, support delay, incomplete context, source conflict, or unclear responsibility.",
    evidence:
      "Alert, owner, ticket, confirmation, source health, impact, and closure.",
  },
  {
    pattern: "Emergency access to revocation",
    expected:
      "Fictional emergency authority is approved, assigned, used, closed, revoked, and reviewed.",
    difference:
      "Role, groups, sessions, or exceptions remain after the approved end.",
    alternatives:
      "Valid extension, synchronization delay, separate event, incomplete closure, or source blind period.",
    evidence:
      "Approval, role, group, session, end time, extension, revocation, source health, and owner.",
  },
  {
    pattern: "Failover to reconciliation",
    expected:
      "Fictional failover preserves critical service, then queues, sessions, caches, DNS, policy, messages, evidence, and emergency roles are reconciled.",
    difference:
      "Connectivity returns but state reconciliation or source restoration is incomplete.",
    alternatives:
      "Long-running degraded mode, planned queue processing, delayed sources, or incomplete recovery evidence.",
    evidence:
      "Failover, service, queue, session, DNS, application, source health, owner, and closure.",
  },
  {
    pattern: "Onboarding to retirement",
    expected:
      "Fictional user, device, service, supplier, wireless, DNS, or detection assets have owners, purpose, support, review, replacement, and offboarding.",
    difference:
      "The asset remains active after ownership, purpose, sponsor, or support ends.",
    alternatives:
      "Ownership transfer, delayed inventory, approved extension, replacement, or stale source.",
    evidence:
      "Inventory, owner, sponsor, purpose, activity, expiration, support, source health, and retirement.",
  },
];

const evidenceMatrix = [
  {
    id: "BEH-01",
    source: "Fictional service dependency map",
    observation:
      "The workflow service is approved to contact application and DNS destination classes, but not the newly observed reporting destination.",
    supports:
      "A destination difference exists relative to the current documented service map.",
    limits:
      "The map may be stale and does not prove compromise, intent, data transfer, or harmful application behavior.",
    use:
      "Form a policy-difference hypothesis and request change and owner evidence.",
  },
  {
    id: "BEH-02",
    source: "Fictional deployment record",
    observation:
      "A deployment introduced a reporting integration, but the listed destination category differs from the observed destination.",
    supports:
      "Change context may explain some new behavior but not the exact observed relationship.",
    limits:
      "The difference may result from DNS mapping, documentation, routing, or source transformation.",
    use:
      "Keep the behavior In Review and compare intended and effective dependencies.",
  },
  {
    id: "BEH-03",
    source: "Fictional network evidence",
    observation:
      "The service identity reached the new destination three times during the deployment window.",
    supports:
      "The communication observation is repeated and time-correlated with change.",
    limits:
      "The evidence does not prove the application operation, content, authorization, or business outcome.",
    use:
      "Correlate with DNS, application, policy, and owner evidence.",
  },
  {
    id: "BEH-04",
    source: "Fictional DNS evidence",
    observation:
      "The approved service name resolved to the new destination category for one resolver group.",
    supports:
      "Naming or audience policy may contribute to the destination difference.",
    limits:
      "Resolution does not prove the service was authorized to use the result or that all resolvers agreed.",
    use:
      "Review authoritative state, cache, policy, resolver group, source health, and application outcome.",
  },
  {
    id: "BEH-05",
    source: "Fictional application evidence",
    observation:
      "The reporting operation completed successfully, but the application source is delayed by six minutes.",
    supports:
      "The observed communication may support a real application workflow.",
    limits:
      "Delay reduces sequence confidence, and success does not prove policy compliance.",
    use:
      "Raise confidence in workflow context while preserving timing and policy limits.",
  },
  {
    id: "BEH-06",
    source: "Fictional peer comparison",
    observation:
      "Comparable workflow services do not reach the new destination, but this service has a unique reporting role.",
    supports:
      "The behavior is unusual relative to peers but may be explained by a unique mission function.",
    limits:
      "Peer difference does not prove the behavior is unauthorized.",
    use:
      "Validate unique-role documentation and peer-group design.",
  },
  {
    id: "BEH-07",
    source: "Fictional source-health dashboard",
    observation:
      "Network and DNS evidence are current, application evidence is delayed, and service-owner enrichment is two days old.",
    supports:
      "Observation confidence differs across network, naming, application, and ownership context.",
    limits:
      "Stale owner enrichment does not prove the service lacks an owner.",
    use:
      "Avoid owner-based closure or suppression until enrichment is refreshed.",
  },
  {
    id: "BEH-08",
    source: "Fictional owner review",
    observation:
      "The service owner confirms the reporting integration is expected but cannot confirm the exact destination category.",
    supports:
      "The broad purpose is likely approved, while implementation detail remains unresolved.",
    limits:
      "Owner confirmation does not replace current policy, DNS, application, or change evidence.",
    use:
      "Keep the finding Conditional and require destination-level validation.",
  },
];

const commonMistakes = [
  {
    mistake: "Rare equals malicious",
    observation:
      "A fictional supplier session occurs once outside the usual period and is escalated as an incident.",
    impact:
      "Approved low-frequency support or recovery work may create unnecessary disruption.",
    correction:
      "Review schedule, purpose, sponsor, assignment, device, destination, source health, and impact.",
  },
  {
    mistake: "Common equals approved",
    observation:
      "A fictional service repeatedly reaches a broad destination set and the behavior becomes baseline.",
    impact:
      "Persistent policy drift may be normalized.",
    correction:
      "Validate current service purpose, authorization, owner, policy, and residual risk.",
  },
  {
    mistake: "Peer groups are too broad",
    observation:
      "Every fictional application service is compared together despite different missions and destinations.",
    impact:
      "Unique approved roles create noise and meaningful differences may disappear.",
    correction:
      "Build peer groups around shared mission, identity, environment, state, and coverage.",
  },
  {
    mistake: "Change context closes the review",
    observation:
      "A fictional new destination appears after deployment and is automatically accepted.",
    impact:
      "Incorrect scope, implementation defects, DNS differences, or policy drift may be missed.",
    correction:
      "Validate expected behavior, destination, owner, application result, policy, rollback, and user impact.",
  },
  {
    mistake: "Timing uses the wrong clock",
    observation:
      "A fictional sequence uses collection time even though source delays differ.",
    impact:
      "Approved behavior may appear out of order.",
    correction:
      "Use event, collection, processing time, clock alignment, and uncertainty.",
  },
  {
    mistake: "Frequency ignores duplicates",
    observation:
      "A fictional supplier pattern appears high-volume because retries create duplicate records.",
    impact:
      "The detection overstates activity.",
    correction:
      "Document uniqueness, retry semantics, aggregation, and duplicate tests.",
  },
  {
    mistake: "No source-health context",
    observation:
      "A fictional service appears quiet because one event source is delayed.",
    impact:
      "Missing evidence may be misclassified as changed behavior.",
    correction:
      "Track freshness, completeness, coverage, schema, transformation, and blind periods.",
  },
  {
    mistake: "Authorization is assumed from identity",
    observation:
      "A fictional administrator performs an action and the role alone is treated as authorization.",
    impact:
      "Purpose, destination, object, time, change, and scope may remain unauthorized.",
    correction:
      "Use complete identity, assignment, approval, action, destination, session, and lifecycle evidence.",
  },
  {
    mistake: "Anomaly score replaces explanation",
    observation:
      "A fictional behavior receives a high score but analysts cannot explain the contributing evidence.",
    impact:
      "Severity and response may be driven by an opaque value.",
    correction:
      "Expose the identity, service, destination, timing, sequence, peer, source-health, and impact factors.",
  },
  {
    mistake: "Real behavior data appears in a portfolio",
    observation:
      "A fictional project includes copied internal histories, user patterns, service destinations, alerts, or source records.",
    impact:
      "Sensitive systems, people, suppliers, and defensive capabilities may be exposed.",
    correction:
      "Invent every identity, service, destination, event, pattern, owner, test, date, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Select a mission behavior question",
    action:
      "Choose one fictional identity, device, service, destination, supplier, privilege, DNS, wireless, or recovery behavior that matters.",
    output:
      "Behavior defender question and mission-risk statement.",
    quality:
      "The question supports one bounded defensive decision.",
  },
  {
    step: "2",
    title: "Define expected behavior",
    action:
      "Document fictional identity, device, service, destination, timing, sequence, frequency, privilege, state, peer, authorization, and owner expectations.",
    output:
      "Expected-behavior profile.",
    quality:
      "Expected does not mean automatically safe or permanent.",
  },
  {
    step: "3",
    title: "Define meaningful deviations",
    action:
      "List fictional rare, unusual, changed, policy-different, source-degraded, peer-different, and potentially harmful behavior conditions.",
    output:
      "Behavior-difference matrix.",
    quality:
      "Each difference has a reason for review and a non-proof statement.",
  },
  {
    step: "4",
    title: "Build alternative explanations",
    action:
      "Record fictional change, maintenance, migration, assignment, supplier, event, recovery, peer, documentation, source-health, and policy possibilities.",
    output:
      "Alternative-explanation register.",
    quality:
      "Alternatives are evidence requests, not automatic excuses.",
  },
  {
    step: "5",
    title: "Map evidence and source health",
    action:
      "Identify fictional identity, device, network, DNS, application, supplier, change, policy, support, owner, and health evidence.",
    output:
      "Behavior evidence and confidence map.",
    quality:
      "Observation and interpretation confidence are separated.",
  },
  {
    step: "6",
    title: "Design peer and state context",
    action:
      "Define fictional peer mission, identity, environment, operating state, schedule, coverage, unique roles, owner, and review date.",
    output:
      "Peer-group and operating-state specification.",
    quality:
      "Normal, maintenance, event, degraded, and recovery states are not mixed.",
  },
  {
    step: "7",
    title: "Write the behavior hypothesis",
    action:
      "Combine fictional expected behavior, deviation, alternatives, evidence, confidence, scope, impact, and non-proof statement.",
    output:
      "Versioned behavior hypothesis.",
    quality:
      "The hypothesis does not claim malicious intent.",
  },
  {
    step: "8",
    title: "Create safe behavior tests",
    action:
      "Build invented expected, rare-approved, change, policy-different, source-degraded, peer-drift, timing, duplicate, missing-field, and regression cases.",
    output:
      "Synthetic behavior test matrix.",
    quality:
      "Expected alert, non-alert, Conditional, and Unknown outcomes are defined.",
  },
  {
    step: "9",
    title: "Define analyst guidance",
    action:
      "Write fictional evidence, questions, alternatives, source-health review, owner checks, impact, escalation, closure, and unresolved criteria.",
    output:
      "Behavior alert and analyst guide.",
    quality:
      "The alert explains why the behavior differs and what remains unknown.",
  },
  {
    step: "10",
    title: "Document lifecycle governance",
    action:
      "Assign fictional hypothesis, source, service, peer, policy, analyst, privacy, risk, version, review, rollback, and retirement responsibilities.",
    output:
      "Behavior-detection lifecycle package.",
    quality:
      "The design can be maintained after source, service, peer, policy, or mission change.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest interpretation of rare fictional behavior?",
    choices: [
      "It is automatically malicious.",
      "It is infrequent and requires identity, purpose, authorization, change, source-health, peer, and impact context.",
      "It should always be suppressed.",
      "It proves the baseline is wrong.",
    ],
    answer: 1,
    explanation:
      "Rarity is a descriptive property, not proof of harm or policy violation.",
  },
  {
    question:
      "Why can repeated fictional behavior still be risky?",
    choices: [
      "Repeated behavior is always harmful.",
      "A stale exception, policy drift, unsupported workflow, or source defect may become common and appear normal.",
      "Frequency replaces authorization.",
      "Repeated behavior should never be baselined.",
    ],
    answer: 1,
    explanation:
      "Common behavior must still be compared with current purpose, policy, ownership, and risk.",
  },
  {
    question:
      "A fictional service reaches a new destination after deployment. What is safest?",
    choices: [
      "Approve it automatically because a change occurred.",
      "Declare compromise.",
      "Validate change scope, destination purpose, policy, DNS, application outcome, source health, owner, and rollback before baseline updates.",
      "Ignore the destination permanently.",
    ],
    answer: 2,
    explanation:
      "Change is important context but does not prove correct implementation or authorization.",
  },
  {
    question:
      "What makes a fictional peer group strong?",
    choices: [
      "Including as many identities as possible.",
      "Shared mission, identity type, environment, state, schedule, coverage, ownership, and reviewed membership.",
      "Using one organization-wide group.",
      "Removing unique roles.",
    ],
    answer: 1,
    explanation:
      "Peers should be comparable in the dimensions that matter to the defender question.",
  },
  {
    question:
      "Why should source health be reviewed before behavior conclusions?",
    choices: [
      "Because unhealthy sources always prove nothing happened.",
      "Because delay, missing records, duplication, reordering, schema changes, and blind periods can create false behavior differences.",
      "Because source health replaces owner context.",
      "Because only network sources matter.",
    ],
    answer: 1,
    explanation:
      "Evidence defects can look like behavior differences and should affect confidence.",
  },
  {
    question:
      "Which fictional behavior hypothesis is strongest?",
    choices: [
      "The unusual service is compromised.",
      "The workflow service reached a destination outside its current map; approved change, stale documentation, DNS mapping, source transformation, or unapproved communication remain possible.",
      "All new destinations are dangerous.",
      "Anything outside the baseline should be blocked.",
    ],
    answer: 1,
    explanation:
      "The strongest hypothesis states the observation, context, alternatives, and uncertainty without unsupported intent claims.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use real behavior history with fake names.",
      "Use real destination categories and blurred screenshots.",
      "Invent every identity, device, service, destination, event, pattern, source, test, owner, date, decision, and outcome.",
      "Use internal alerts because no query syntax is shown.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real systems, people, behavior, suppliers, and defensive capabilities.",
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

export default function BehaviorBasedDetectionThinkingPage() {
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
              Lesson 4 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Identity, Context, Sequences, and Impact
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A5.4 Behavior-Based Detection Thinking
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders reason about fictional identity,
            device, service, destination, timing, sequence, frequency,
            privilege, peer groups, change, authorization, source health,
            alternatives, confidence, and mission impact without treating rare
            or unusual activity as automatic proof of harm.
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
          lessonTitle="Behavior-Based Detection Thinking"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented identities, devices, services, destinations, behaviors, peer groups, evidence, tests, owners, dates, decisions, and outcomes.",
            "I understand that rare, unusual, changed, outside-hours, high-volume, new-destination, or peer-different behavior is not automatic proof of malicious intent.",
            "I will include authorization, owner, change, maintenance, assignment, state, source health, alternatives, confidence, scope, and mission impact.",
            "I will distinguish expected behavior from approved behavior and repeated behavior from safe behavior.",
            "I will not automatically normalize observed behavior or suppress broad identity, service, destination, or time categories.",
            "I will not access, collect, query, monitor, inspect, profile, test, investigate, or modify any real behavior data, account, endpoint, network, domain, application, supplier, detection platform, or organization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Unusual Behavior Is a Question, Not a Verdict"
        >
          <p className="leading-8">
            A fictional workflow service reaches a new destination three times
            during a deployment window. The destination is absent from the
            current service map, but DNS evidence shows an approved name
            resolving there, the application operation succeeds, owner context
            is partly stale, and comparable services do not use the destination.
            The behavior is unusual—but several explanations remain possible.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak behavior conclusion
              </p>
              <p className="mt-2 leading-7">
                “The service reached a new destination, so it is compromised.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong behavior conclusion
              </p>
              <p className="mt-2 leading-7">
                “A fictional destination difference exists. Approved change,
                stale documentation, DNS mapping, source transformation,
                service-specific purpose, or unapproved communication remain
                possible and require targeted validation.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Behavior-based detection becomes professional when it explains why
            a difference matters, what evidence supports it, what alternatives
            remain, and what decision should follow.
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
          title="Behavior Context Helps Defenders Move beyond Static Rules"
        >
          <p className="leading-8">
            Fictional static conditions may identify one field or destination,
            but behavior thinking connects who acted, which device or service
            was involved, where the activity went, when and how often it
            occurred, which sequence surrounded it, whether privilege or policy
            mattered, how peers behaved, whether change or recovery explained
            it, and what mission impact could result.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Contextual precision",
                "Use fictional identity, service, destination, timing, peer, state, change, and authorization to reduce unsupported conclusions.",
              ],
              [
                "Coverage beyond indicators",
                "Recognize fictional relationships and workflows even when no single static value is inherently concerning.",
              ],
              [
                "Decision-centered analysis",
                "Translate fictional behavior differences into evidence requests, confidence, impact, ownership, and proportional action.",
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

        <SectionCard eyebrow="Core Framework" title="The B-E-H-A-V-I-O-R Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "B — Begin with mission and question",
                "Define the fictional risk, defender decision, owner, and non-proof statement.",
              ],
              [
                "E — Establish expected behavior",
                "Document fictional identity, device, service, destination, time, sequence, frequency, privilege, state, and authorization.",
              ],
              [
                "H — Highlight meaningful differences",
                "Identify fictional rare, unusual, changed, policy-different, peer-different, source-degraded, or potentially harmful behavior.",
              ],
              [
                "A — Add alternative explanations",
                "Consider fictional change, maintenance, assignment, migration, supplier, recovery, peer, documentation, and source-health possibilities.",
              ],
              [
                "V — Validate evidence and source health",
                "Review fictional provenance, fields, freshness, completeness, timing, coverage, transformation, duplication, and blind periods.",
              ],
              [
                "I — Interpret confidence and impact",
                "Separate fictional observation confidence, interpretation confidence, potential severity, scope, priority, and response.",
              ],
              [
                "O — Outline tests and analyst guidance",
                "Create fictional expected, rare-approved, changed, degraded, peer, timing, privacy, and regression cases.",
              ],
              [
                "R — Review and maintain",
                "Assign fictional owners, versions, peer and baseline reviews, change triggers, tuning, rollback, residual risk, and retirement.",
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
              Decision-ready behavior statement
            </p>
            <p className="mt-2 leading-7">
              This fictional behavior differs from the current expected model
              in documented identity, service, destination, timing, sequence,
              frequency, privilege, peer, policy, or state dimensions. The
              evidence supports a bounded observation while alternatives,
              source-health limits, authorization, scope, impact, ownership,
              testing, and lifecycle remain explicit.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Behavior-Based Detection"
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
            Apply Ten Behavior Detection Principles
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {behaviorPrinciples.map((item) => (
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
          title="Evaluate Ten Behavior Dimensions"
        >
          <div className="grid gap-5">
            {behaviorDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.dimension}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Defender question", item.defenderQuestion],
                    ["Useful fictional context", item.usefulContext],
                    ["Interpretation risk", item.risk],
                    ["Fictional example", item.example],
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
          title="Classify Eight Behavior Outcomes"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {behaviorCategories.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.category}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.definition}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional response
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.response}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Caution
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.caution}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Write Every Behavior Hypothesis with Twelve Fields"
        >
          <div className="grid gap-5">
            {hypothesisFields.map((item, index) => (
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
            Build Strong Peer Groups
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {peerGroupDesign.map((item) => (
              <article
                key={item.designArea}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.designArea}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Review question
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong practice
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.strongPractice}
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
        </section>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Review Eight Behavior Sequences"
        >
          <div className="grid gap-5">
            {sequencePatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.pattern}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Expected fictional sequence", item.expected],
                    ["Meaningful difference", item.difference],
                    ["Alternative explanations", item.alternatives],
                    ["Evidence needed", item.evidence],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.pattern}-${label}`}
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
          title="Separate Observation, Interpretation, and Decision"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Stage",
                    "Fictional question",
                    "Strong statement",
                    "What to avoid",
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
                    "Observation",
                    "What does the supplied evidence show?",
                    "The workflow service reached a new destination category three times.",
                    "The service is compromised.",
                  ],
                  [
                    "Expected comparison",
                    "How does the behavior differ from the current expected model?",
                    "The destination is absent from the current dependency map.",
                    "Anything outside the baseline is harmful.",
                  ],
                  [
                    "Context",
                    "Which identity, service, change, DNS, peer, state, and source-health details matter?",
                    "The behavior occurred during deployment and an approved name resolved to the destination.",
                    "The change explains everything.",
                  ],
                  [
                    "Alternatives",
                    "Which plausible explanations remain?",
                    "Approved integration, stale map, DNS mapping, source transformation, or unapproved communication.",
                    "There is only one possible cause.",
                  ],
                  [
                    "Confidence",
                    "How strongly do evidence and source health support the observation and interpretation?",
                    "High confidence in the communication; Moderate confidence in a policy difference.",
                    "High severity means high confidence.",
                  ],
                  [
                    "Impact",
                    "Which fictional mission outcomes could be affected?",
                    "The service dependency set and segmentation assurance may be broader than documented.",
                    "The behavior is dangerous because it is new.",
                  ],
                  [
                    "Decision",
                    "Which bounded action follows?",
                    "Validate destination ownership, change scope, DNS, application result, policy, and owner before baseline changes.",
                    "Block or normalize immediately.",
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
          eyebrow="Fictional Behavior Architecture"
          title="Northbridge Behavior Detection Model"
        >
          <p className="leading-8">
            This conceptual model is completely invented and intentionally
            non-operational. It teaches behavior relationships without real
            identities, devices, services, destinations, domains, addresses,
            event histories, source names, peer groups, alert rules, or
            incident records.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Actors", "Users, services, suppliers, devices, privileged, recovery"],
                ["Activity", "Destinations, operations, frequency, sequence, state"],
                ["Context", "Assignment, change, maintenance, peer, policy, authorization"],
                ["Evidence health", "Freshness, completeness, timing, coverage, duplication"],
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
                Fictional Behavior Analysis Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Expected", "Purpose, identity, destination, time, state, owner"],
                  ["Observed", "Evidence, fields, sequence, frequency, source health"],
                  ["Difference", "Rare, changed, policy, peer, timing, privilege"],
                  ["Alternatives", "Change, maintenance, recovery, source, documentation"],
                  ["Confidence", "Observation, interpretation, scope, coverage"],
                  ["Impact", "Users, services, data, privacy, policy, recovery"],
                  ["Decision", "Validate, enrich, escalate, close, remain unresolved"],
                  ["Lifecycle", "Tests, peers, baselines, owners, review, retirement"],
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
                ["Alert output", "Difference, evidence, alternatives, confidence, impact"],
                ["Analyst review", "Authorization, owner, source health, next evidence"],
                ["Owner review", "Purpose, change, policy, baseline, residual risk"],
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
          title="Fake Northbridge Behavior Detection Dashboard"
          subtitle="Fictional expected behavior, peer context, source health, hypothesis, testing, and review status for training only."
          metrics={[
            {
              label: "Behavior hypotheses with current owner validation",
              value: "11 / 16",
              note: "Five fictional hypotheses depend on stale service, peer, change, or destination ownership context.",
            },
            {
              label: "Peer groups reviewed this term",
              value: "7 / 12",
              note: "Five fictional peer groups changed membership, mission, source coverage, or operating state.",
            },
            {
              label: "Behavior detections with source-degraded tests",
              value: "8 / 16",
              note: "Half of the fictional designs still need delayed, missing, duplicate, conflict, or blind-period cases.",
            },
          ]}
        />

        <FakeAlertCard
          title="Workflow Service Reached a New Destination during Deployment"
          severity="Medium"
          time="2:46 PM"
          source="Fake Northbridge Behavior Analysis Console"
          details="The fictional workflow service reached a destination absent from its current dependency map. The activity occurred during an approved deployment, DNS evidence shows the service name resolving there for one resolver group, application evidence is delayed, and the service owner confirms the broad integration purpose but not the exact destination."
          recommendation="Keep the behavior In Review. Validate fictional change scope, destination ownership, DNS state, application result, policy, source health, peer uniqueness, rollback, and service-owner documentation before updating the baseline or escalating."
        />

        <FakeLogPanel
          title="Fake Behavior Review Timeline"
          logs={[
            "09:00 BEHAVIOR service-destination='new'",
            "09:08 CHANGE deployment='approved'",
            "09:16 MAP dependency-destination='absent'",
            "09:24 DNS service-name='new-destination'",
            "09:32 NETWORK observations='3'",
            "09:40 APPLICATION result='success'",
            "09:48 SOURCE application='delayed-6m'",
            "09:56 PEER comparable-services='no-match'",
            "10:04 ROLE service='unique-reporting'",
            "10:12 OWNER purpose='expected'",
            "10:20 OWNER exact-destination='unconfirmed'",
            "10:28 POLICY status='conditional'",
            "10:36 CONFIDENCE observation='high'",
            "10:44 CONFIDENCE policy-difference='moderate'",
            "10:52 IMPACT segmentation='possible'",
            "11:00 STATUS behavior='in-review'",
            "11:08 BASELINE update='blocked'",
            "11:16 REVIEW destination-owner='required'",
            "11:24 CONFIDENCE overall='moderate'",
            "14:46 ALERT issue='new-service-destination'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Behavior Evidence Supports—and What It Does Not Prove
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
                    ["Behavior-design use", item.use],
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
          title="Which Behavior Decision Is Best Supported?"
          question="Which conclusion most responsibly represents the fictional workflow-service behavior?"
          evidence={[
            "The service reached a destination absent from the current dependency map.",
            "The communication occurred three times during an approved deployment window.",
            "DNS evidence shows one approved resolver group returning the destination.",
            "The application operation completed successfully, but application evidence is delayed.",
            "Comparable services do not use the destination.",
            "The service has a unique reporting role.",
            "The owner confirms the broad integration purpose but not the exact destination.",
            "No supplied evidence proves compromise, harmful intent, data loss, or complete policy compliance.",
          ]}
          options={[
            "Keep the fictional behavior In Review, preserve High confidence in the communication and Moderate confidence in a policy difference, then validate destination ownership, change scope, DNS, application result, peer uniqueness, policy, source health, and rollback before baseline changes.",
            "Declare compromise because the destination is new.",
            "Normalize the destination because a deployment occurred.",
            "Suppress all new-destination alerts for this service.",
          ]}
          bestAnswer={0}
          explanation="The first option uses all supplied evidence, preserves alternatives and uncertainty, and prevents both premature escalation and premature normalization."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Behavior Detection Errors"
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
          title="Build the Northbridge Behavior Hypothesis Library"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            collect, query, inspect, monitor, profile, test, investigate,
            correlate, or modify any real behavior data, account, endpoint,
            network, domain, application, supplier, detection platform, peer
            group, baseline, or organization.
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
          title="A Rare Supplier Session Occurs outside the Usual Window"
          scenario="A fictional supplier support identity opens one session outside its usual schedule. The sponsor is current, the destination is approved, the device class changed after replacement, and the maintenance ticket was created shortly before the session."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the fictional behavior Conditional, validate sponsor, replacement onboarding, maintenance purpose, assignment, destination, session, source health, and closure, then decide whether the rare behavior was approved or requires escalation.",
              outcome:
                "Best defensive choice. It treats rarity as a review question and uses the available authorization context.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare compromise because the session is rare and outside hours.",
              outcome:
                "Weak. Several approved explanations remain possible.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Suppress all future outside-hours supplier sessions.",
              outcome:
                "Weak. Broad suppression could hide meaningful future behavior.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Common Service Behavior Conflicts with Current Policy"
          scenario="A fictional service has reached a broad destination class every day for months, so the behavior appears normal. A policy review shows that only a narrow destination set is currently approved, and no current exception owner can be identified."
          choices={[
            {
              label: "Choice A",
              response:
                "Treat the fictional behavior as Policy-Different, validate effective configuration, service purpose, owner, historical change, source health, dependencies, impact, and rollback, and do not preserve it solely because it is common.",
              outcome:
                "Best choice. Repetition does not establish authorization or safety.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Update the baseline because the behavior is frequent.",
              outcome:
                "Weak. Persistent policy drift may become normalized.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove the communication immediately without dependency review.",
              outcome:
                "Weak. The organization should reduce risk without breaking an unknown mission dependency.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design a Behavior Detection Program without Turning Difference into Blame"
        >
          <p className="leading-8">
            Fictional Northbridge wants behavior detections for users, services,
            suppliers, privileged roles, wireless devices, DNS, applications,
            administrative changes, and recovery. Leadership wants every rare
            behavior escalated, while service owners want every repeated
            behavior normalized. Source health, peer groups, changes, and
            ownership are inconsistent.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Create behavior categories",
                "Define fictional expected, expected-alert, rare-approved, changed-approved, unresolved, policy-different, source-degraded, and potentially harmful states.",
              ],
              [
                "Govern expected models",
                "Document fictional identity, service, destination, timing, sequence, frequency, privilege, state, owner, and authorization.",
              ],
              [
                "Govern peer groups",
                "Use fictional mission, identity, environment, state, schedule, coverage, unique-role, owner, and drift criteria.",
              ],
              [
                "Preserve alternatives",
                "Require fictional change, maintenance, assignment, supplier, recovery, source, documentation, and policy explanations.",
              ],
              [
                "Measure evidence quality",
                "Separate fictional observation confidence, interpretation confidence, source health, scope, impact, severity, and priority.",
              ],
              [
                "Maintain lifecycle",
                "Assign fictional tests, peer reviews, baseline reviews, tuning, rollback, review triggers, residual risk, and retirement.",
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
              Produce a fictional behavior-governance charter, expected-model
              register, peer-group specification, behavior-category matrix,
              hypothesis library, evidence and source-health map, alternative
              explanation register, confidence and impact model, synthetic test
              plan, analyst guide, owner and lifecycle matrix, residual-risk
              statement, and leadership summary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Behavior-Based Detection Thinking Checklist"
          items={[
            "I can evaluate fictional identity, device, service, destination, time, sequence, frequency, privilege, peer, state, and mission impact.",
            "I can distinguish rare, unusual, changed, policy-different, source-degraded, expected, approved, and potentially harmful behavior.",
            "I can explain why rare does not equal harmful and repeated does not equal authorized.",
            "I can define fictional expected behavior without automatically normalizing every observed pattern.",
            "I can build peer groups around mission, identity, environment, state, schedule, coverage, unique roles, ownership, and lifecycle.",
            "I can use change, maintenance, migration, assignment, supplier, event, recovery, documentation, and source-health alternatives.",
            "I can separate observation confidence, interpretation confidence, potential impact, severity, priority, and response.",
            "I can write behavior hypotheses with mission risk, question, expected state, deviation, alternatives, evidence, confidence, scope, impact, and non-proof statements.",
            "I can review approval-to-action, assignment-to-access, request-to-result, change-to-behavior, alert-to-confirmation, emergency-to-revocation, failover-to-reconciliation, and onboarding-to-retirement sequences.",
            "I can design expected, rare-approved, change, policy-different, source-degraded, peer-drift, timing, duplicate, missing-field, and regression tests.",
            "I can assign hypothesis, source, service, peer, policy, analyst, privacy, risk, review, rollback, and retirement ownership.",
            "I can create a completely fictional behavior artifact without exposing real user histories, service destinations, peer groups, alerts, sources, systems, suppliers, or internal activity.",
          ]}
        />

        <MiniQuiz
          title="A5.4 Mini Quiz: Behavior-Based Detection Thinking"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Behavior-Based Detection Package for the Northbridge Student-Support Cooperative. Include mission, purpose, scope, stakeholders, exclusions, safety boundary, at least twenty-five defender questions, identity dimensions, device dimensions, service dimensions, destination dimensions, time dimensions, sequence dimensions, frequency dimensions, privilege dimensions, peer dimensions, mission-impact dimensions, expected behavior, observed behavior, rare behavior, unusual behavior, changed behavior, policy-different behavior, state-dependent behavior, source-degraded behavior, expected alerts, potentially harmful behavior, at least twenty behavior hypotheses, hypothesis identifiers, versions, mission risks, non-proof statements, expected patterns, meaningful deviations, alternative explanations, evidence requirements, primary sources, corroborating sources, enrichment sources, source-health sources, confidence, scope, impact, severity, priority, response, peer-group purpose, peer membership, unique roles, environment, operating state, schedule, seasonality, coverage, ownership, drift triggers, approval-to-action sequences, assignment-to-access sequences, request-to-result sequences, change-to-behavior sequences, alert-to-confirmation sequences, emergency-to-revocation sequences, failover-to-reconciliation sequences, onboarding-to-retirement sequences, source-health review, change context, authorization context, privacy, expected tests, rare-approved tests, change tests, policy-difference tests, source-degraded tests, peer-drift tests, timing tests, duplicate tests, missing-field tests, privacy tests, regression tests, analyst guidance, evidence requests, escalation criteria, closure criteria, owners, review triggers, tuning, rollback, residual risks, retirement, leadership summary, reflection, and a statement that every organization, identity, device, service, destination, source, event, pattern, peer, owner, date, decision, and outcome is invented."
          tips={[
            "Treat fictional unusual behavior as a question requiring context rather than a verdict.",
            "Define expected behavior through current mission, identity, service, destination, timing, state, policy, owner, and evidence.",
            "Preserve alternative explanations and source-health limitations before escalation or baseline updates.",
            "Govern peer groups and repeated behavior so stale policy or persistent drift does not become normal automatically.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for False Positives and False Negatives?"
        >
          <p className="leading-8">
            Before moving to A5.5, rate your readiness from 1 to 5 for identity,
            device, service, destination, timing, sequence, frequency,
            privilege, peers, expected behavior, alternatives, source health,
            confidence, impact, tests, analyst guidance, lifecycle, and complete
            fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why fictional rare, unusual, or outside-hours behavior is not automatically harmful.",
              "I can explain why repeated behavior is not automatically authorized or safe.",
              "I can build a behavior hypothesis with expected state, deviation, alternatives, evidence, confidence, impact, and limits.",
              "I can design and govern meaningful peer groups.",
              "I can use change and maintenance as evidence to validate, not as automatic closure.",
              "I can separate source-health problems from behavior problems.",
              "I can prevent automatic escalation and automatic normalization.",
              "I can produce a safe fictional behavior package without using real histories, alerts, destinations, or internal activity.",
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
            Record one fictional behavior question, one expected pattern, one
            meaningful deviation, two alternative explanations, one
            source-health limitation, one potential impact, and one question
            you will carry into A5.5.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Behavior-based detection evaluates fictional identities, devices, services, destinations, timing, sequences, frequency, privilege, peers, state, authorization, source health, and mission impact.",
            "Rare, unusual, changed, outside-hours, peer-different, or new-destination behavior is not automatic proof of harmful intent.",
            "Repeated fictional behavior can still represent stale exceptions, policy drift, unsupported workflows, or source defects.",
            "Expected behavior should reflect current authorization, purpose, owner, state, policy, and evidence—not merely historical repetition.",
            "Peer groups require shared mission, identity type, environment, state, schedule, coverage, ownership, unique-role context, and lifecycle review.",
            "Change context can explain behavior but does not prove correct implementation, scope, outcome, or closure.",
            "Source delay, missing evidence, duplication, reordering, schema change, and blind periods can create false behavior differences.",
            "Strong behavior hypotheses include expected state, deviation, alternatives, evidence, confidence, scope, impact, non-proof statements, tests, and ownership.",
            "Professional decisions avoid both premature escalation and premature normalization.",
            "Every CyberShield behavior artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, examine how fictional detections can alert on acceptable
            behavior, miss meaningful conditions, overfit test data, rely on
            unhealthy sources, or create hidden coverage gaps—and how defenders
            review false positives and false negatives responsibly.
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