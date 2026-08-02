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
const modulePath = `${trackPath}/advanced-networking-defense`;
const previousLesson = `${modulePath}/firewall-strategy-and-rule-hygiene`;
const nextLesson = `${modulePath}/secure-remote-access-concepts`;

const objectives = [
  "Explain fictional IDS, IPS, network visibility, policy evidence, metadata, alerting, and response as distinct but connected defensive capabilities.",
  "Evaluate fictional sensor placement, coverage, encrypted boundaries, east-west visibility, administrative paths, supplier paths, wireless, DNS, recovery, source health, and blind spots.",
  "Interpret fictional network alerts using evidence, context, confidence, alternative explanations, scope, ownership, and impact without assuming compromise or malicious intent.",
  "Design a fictional tuning, escalation, prevention, privacy, safe-failure, and recovery process that balances detection value with mission reliability and evidence quality.",
  "Create a portfolio-ready fictional network visibility and IDS/IPS coverage package with defender questions, evidence sources, limitations, owners, validation, residual risk, and review triggers.",
];

const vocabulary = [
  [
    "Network visibility",
    "The fictional ability to observe and explain communication, policy decisions, service relationships, failures, source health, and changes across approved network paths.",
  ],
  [
    "Intrusion detection system concept",
    "A fictional defensive capability that analyzes supplied network or event evidence and generates alerts or findings without automatically changing traffic.",
  ],
  [
    "Intrusion prevention system concept",
    "A fictional defensive capability that may block, limit, reject, or otherwise prevent selected communication according to approved policy and confidence conditions.",
  ],
  [
    "Sensor",
    "A fictional evidence source positioned to observe defined network, service, policy, DNS, wireless, administrative, supplier, or recovery activity.",
  ],
  [
    "Sensor placement",
    "The fictional decision about where evidence should be collected to answer a defender question while preserving privacy, source health, and mission reliability.",
  ],
  [
    "Coverage",
    "The fictional set of zones, paths, services, identities, states, protocols, environments, and failure conditions represented by available evidence.",
  ],
  [
    "Blind spot",
    "A fictional area where defenders lack sufficient evidence to answer a defined question with appropriate confidence.",
  ],
  [
    "Encrypted boundary",
    "A fictional point where content visibility may be limited while metadata, identity, destination, policy, service, certificate concept, timing, or endpoint evidence may still exist.",
  ],
  [
    "Network metadata",
    "Fictional non-content context such as source group, destination group, service, timing, volume, direction, duration, policy result, source health, and correlation.",
  ],
  [
    "Signature concept",
    "A fictional detection pattern representing known characteristics in supplied evidence; it does not prove a complete event or intent by itself.",
  ],
  [
    "Behavioral detection concept",
    "A fictional detection method that compares current activity with expected service, identity, destination, timing, volume, protocol, or state context.",
  ],
  [
    "Anomaly",
    "A fictional difference from an expected pattern that requires contextual review and does not automatically prove harmful activity.",
  ],
  [
    "False positive",
    "A fictional alert that appears meaningful but is explained by approved or benign conditions after review.",
  ],
  [
    "False negative",
    "A fictional unsafe condition that available detection did not identify.",
  ],
  [
    "Detection fidelity",
    "The fictional usefulness and accuracy of an alert based on evidence quality, context, specificity, correlation, source health, and review results.",
  ],
  [
    "Tuning",
    "The fictional process of improving alert usefulness by adjusting scope, context, evidence, thresholds, exclusions, correlation, ownership, and review without hiding meaningful risk.",
  ],
  [
    "Suppression",
    "A fictional decision to reduce or hide repeated alerting under documented conditions, ownership, expiration, evidence, and review.",
  ],
  [
    "Prevention action",
    "A fictional approved control outcome such as blocking, limiting, delaying, isolating, or requiring review for selected communication.",
  ],
  [
    "Fail-open concept",
    "A fictional condition where traffic may continue if a prevention control is unavailable, potentially preserving availability while increasing exposure.",
  ],
  [
    "Fail-closed concept",
    "A fictional condition where traffic is blocked if a prevention control is unavailable, potentially reducing exposure while affecting mission availability.",
  ],
  [
    "Fail-limited concept",
    "A fictional middle approach where only pre-approved critical communication continues under degraded conditions.",
  ],
  [
    "Source health",
    "Fictional evidence about whether a sensor, collector, policy source, clock, pipeline, storage system, or dashboard is operating and current.",
  ],
  [
    "Alert provenance",
    "The fictional source, transformation, timestamp, logic, context, owner, version, and limitations behind an alert.",
  ],
  [
    "Visibility review trigger",
    "A fictional change requiring revalidation, such as architecture, segmentation, firewall, identity, supplier, wireless, DNS, encryption, remote access, recovery, or mission change.",
  ],
];

const principles = [
  {
    principle: "Begin with defender questions",
    description:
      "Fictional visibility should exist to answer specific questions about identity, path, policy, service, source health, failure, and recovery.",
    strongPractice:
      "Ask whether supplier results are delayed, stale, duplicated, misordered, or rejected and choose evidence accordingly.",
    failure:
      "Collecting large amounts of data without defined questions creates noise, cost, privacy risk, and false confidence.",
  },
  {
    principle: "Separate detection from proof",
    description:
      "A fictional alert indicates that supplied evidence matched a condition; it does not automatically prove compromise, intent, cause, scope, or impact.",
    strongPractice:
      "Record observation, evidence, interpretation, alternatives, confidence, owner, and next validation action.",
    failure:
      "Alerts may be escalated with unsupported certainty or blame.",
  },
  {
    principle: "Design coverage around trust changes",
    description:
      "Fictional sensors and evidence sources should reflect public, east-west, supplier, administrative, wireless, DNS, monitoring, and recovery boundaries.",
    strongPractice:
      "Place conceptual visibility where identity, ownership, data, authority, environment, or responsibility changes.",
    failure:
      "Perimeter-only monitoring can miss important internal and dependency conditions.",
  },
  {
    principle: "Measure source health",
    description:
      "Fictional defenders should know whether evidence sources are current, complete, delayed, transformed, overloaded, or unavailable.",
    strongPractice:
      "Track collector status, last event time, queue age, clock alignment, event volume, schema quality, and blind periods.",
    failure:
      "A healthy-looking dashboard may rely on stale or incomplete evidence.",
  },
  {
    principle: "Treat encrypted traffic honestly",
    description:
      "Fictional encryption may limit content visibility but does not eliminate identity, metadata, policy, endpoint, DNS, certificate concept, service, or source-health evidence.",
    strongPractice:
      "State exactly which evidence remains available and which questions cannot be answered.",
    failure:
      "Teams may claim complete blindness or complete visibility without support.",
  },
  {
    principle: "Tune with accountability",
    description:
      "Fictional tuning should improve signal quality while preserving risk, ownership, expiration, evidence, and review.",
    strongPractice:
      "Narrow a noisy alert to the affected service and expected maintenance context instead of suppressing it permanently.",
    failure:
      "Broad suppression can hide meaningful change or source-health failure.",
  },
  {
    principle: "Use prevention proportionately",
    description:
      "Fictional prevention should match evidence confidence, impact, false-positive cost, mission criticality, failure behavior, and recovery.",
    strongPractice:
      "Use blocking only where the condition is specific, validated, owned, reversible, and safe for the mission.",
    failure:
      "Aggressive prevention can create outages, unsafe fallback, or operational pressure to bypass controls.",
  },
  {
    principle: "Preserve privacy",
    description:
      "Fictional visibility should collect only what is needed for approved defensive questions with clear access, retention, purpose, and deletion.",
    strongPractice:
      "Prefer minimized metadata and service context when content is unnecessary.",
    failure:
      "Over-collection may create new confidentiality, governance, and trust risk.",
  },
  {
    principle: "Plan response and recovery",
    description:
      "Fictional detection should connect to triage, owner actions, containment decisions, evidence preservation, service recovery, communication, and closure.",
    strongPractice:
      "Define what happens when an alert is confirmed, disproven, source-degraded, repeated, or associated with recovery state.",
    failure:
      "Alerts may accumulate without improving decisions or restoring the mission.",
  },
  {
    principle: "Review the entire lifecycle",
    description:
      "Fictional visibility requires ownership, versions, validation, tuning, suppression, expiration, source changes, lessons learned, and retirement.",
    strongPractice:
      "Revalidate coverage after architecture, encryption, supplier, identity, DNS, wireless, remote-access, or recovery change.",
    failure:
      "A sensor can remain active while no longer observing the intended path or meaning.",
  },
];

const visibilityLayers = [
  {
    layer: "Perimeter visibility",
    purpose:
      "Observe fictional communication entering or leaving the defined environment.",
    questions:
      "Which approved public or external relationships are active, denied, delayed, unusual, unhealthy, or changing?",
    evidence:
      "Direction, source group, destination group, service, timing, volume, policy result, source health, and correlation.",
    limits:
      "Does not automatically explain internal service behavior, user intent, business state, or encrypted content.",
    response:
      "Correlate with identity, application, DNS, supplier, endpoint, and policy evidence.",
  },
  {
    layer: "East-west visibility",
    purpose:
      "Observe fictional communication among internal zones, services, workloads, and dependencies.",
    questions:
      "Which service relationships are active, new, denied, broader than expected, delayed, or missing?",
    evidence:
      "Service identity, source group, destination group, application role, environment, policy result, timing, and source health.",
    limits:
      "May be incomplete in dynamic, encrypted, or shared-service environments.",
    response:
      "Use architecture and segmentation context to prioritize high-value paths.",
  },
  {
    layer: "Administrative visibility",
    purpose:
      "Observe fictional privileged management, support, configuration, emergency, and recovery communication.",
    questions:
      "Who acted, from which managed device, toward which destination, for what purpose, under which approval, and with what result?",
    evidence:
      "Human identity, device, role, destination, session, approval, action, policy result, change, and revocation.",
    limits:
      "Network evidence may not explain the exact business or configuration outcome.",
    response:
      "Correlate with change, ticket, identity, application, and recovery records.",
  },
  {
    layer: "Supplier visibility",
    purpose:
      "Observe fictional external request, result, support, health, change, and recovery relationships.",
    questions:
      "Are requests minimized, results current and correlated, support sessions approved, and source-health claims meaningful?",
    evidence:
      "Supplier identity, destination, request category, result category, timing, correlation, queue age, policy result, and owner review.",
    limits:
      "External internal processing may remain outside scope.",
    response:
      "Preserve shared-responsibility and evidence limitations.",
  },
  {
    layer: "Wireless visibility",
    purpose:
      "Observe fictional managed, employee, guest, service-device, and administrative wireless communication and policy.",
    questions:
      "Which identity and device class joined, which policy applied, what destinations were used, and was source health current?",
    evidence:
      "User identity, device identity, network class, session, destination class, policy result, source health, and revocation.",
    limits:
      "May not explain endpoint behavior or off-network activity.",
    response:
      "Correlate with onboarding, device, identity, support, and network-policy evidence.",
  },
  {
    layer: "DNS visibility",
    purpose:
      "Observe fictional naming requests, policy decisions, service dependencies, change, health, and recovery.",
    questions:
      "Which identity or service requested which approved naming category, what result was returned, and was the resolver healthy?",
    evidence:
      "Requester group, resolver, query category, response category, policy result, timing, source health, and change record.",
    limits:
      "A name request does not prove successful communication, harmful intent, or business impact.",
    response:
      "Correlate with connection, service, policy, identity, and endpoint evidence.",
  },
  {
    layer: "Application-aware network visibility",
    purpose:
      "Connect fictional network evidence with service, request, object, state, and business-operation context.",
    questions:
      "Which approved service action produced this communication, and did the network result align with application state?",
    evidence:
      "Service identity, request type, object reference, state, correlation, destination, policy result, and outcome.",
    limits:
      "Requires reliable application correlation and careful privacy boundaries.",
    response:
      "Use only the minimum context needed for the defensive decision.",
  },
  {
    layer: "Recovery visibility",
    purpose:
      "Observe fictional emergency access, restore communication, dependency readiness, degraded modes, validation, reconciliation, and closure.",
    questions:
      "Which recovery identity acted, what was restored, which dependencies were ready, and when was emergency access revoked?",
    evidence:
      "Trigger, approver, recovery identity, destination, action, result, source health, validation, reconciliation, communication, and closure.",
    limits:
      "Normal monitoring may be degraded during the event.",
    response:
      "Use alternate evidence and explicitly mark blind periods.",
  },
];

const idsIpsComparison = [
  {
    area: "Primary purpose",
    detection:
      "Generate fictional alerts or findings for defender review.",
    prevention:
      "Apply fictional blocking, limiting, delay, isolation, or review actions under approved conditions.",
    designQuestion:
      "Does the mission need visibility, automatic control, or both?",
  },
  {
    area: "Decision confidence",
    detection:
      "Can operate with lower confidence because a human or workflow reviews the alert.",
    prevention:
      "Usually requires stronger specificity, validation, impact analysis, and rollback.",
    designQuestion:
      "What is the cost of acting incorrectly versus not acting quickly?",
  },
  {
    area: "Failure impact",
    detection:
      "Failure may create blind spots or missed alerts.",
    prevention:
      "Failure may either expand trust or block legitimate mission traffic.",
    designQuestion:
      "Should the fictional control fail open, fail closed, or fail limited?",
  },
  {
    area: "Evidence need",
    detection:
      "Needs alert provenance, source health, context, correlation, reviewer action, and closure.",
    prevention:
      "Needs all detection evidence plus action, blocked scope, mission impact, rollback, and recovery.",
    designQuestion:
      "Can defenders explain and reverse the action?",
  },
  {
    area: "Tuning",
    detection:
      "Focuses on alert usefulness, context, thresholds, correlation, and suppression governance.",
    prevention:
      "Focuses on preventing harmful false blocks and preserving critical service paths.",
    designQuestion:
      "Which conditions are safe enough for automated action?",
  },
  {
    area: "Privacy",
    detection:
      "May collect metadata or content depending on purpose and approved design.",
    prevention:
      "May require enough context to make a policy decision without unnecessary collection.",
    designQuestion:
      "What is the minimum evidence needed?",
  },
  {
    area: "Human workflow",
    detection:
      "Requires triage, ownership, escalation, investigation boundary, and closure.",
    prevention:
      "Requires exception, override, emergency, approval, review, and retrospective workflows.",
    designQuestion:
      "Who owns the next decision and how quickly?",
  },
  {
    area: "Best fit",
    detection:
      "Useful for uncertain, contextual, emerging, or lower-confidence conditions.",
    prevention:
      "Useful for specific, high-confidence, high-impact, reversible, well-tested conditions.",
    designQuestion:
      "Which fictional scenarios are mature enough for prevention?",
  },
];

const alertFields = [
  {
    field: "Alert identifier",
    purpose:
      "Provide a stable fictional reference for evidence, triage, tuning, actions, and closure.",
    strongExample:
      "NET-ALERT-042",
    weakExample:
      "Suspicious traffic.",
  },
  {
    field: "Observation",
    purpose:
      "State what the fictional evidence source recorded without unsupported interpretation.",
    strongExample:
      "The supplier-result path exceeded its normal delay range while queue age increased.",
    weakExample:
      "The supplier was attacked.",
  },
  {
    field: "Source and provenance",
    purpose:
      "Identify the fictional sensor, collector, logic, version, transformation, and source-health status.",
    strongExample:
      "Integration-path sensor, rule version 7, collector healthy, last event current, clock aligned.",
    weakExample:
      "Network tool.",
  },
  {
    field: "Scope",
    purpose:
      "Define the fictional zones, services, identities, destinations, time window, and environments represented.",
    strongExample:
      "Supplier integration and workflow result paths during the fictional review window.",
    weakExample:
      "The whole network.",
  },
  {
    field: "Context",
    purpose:
      "Add fictional service, identity, application, maintenance, change, recovery, and business-state information.",
    strongExample:
      "No approved maintenance; workflow service healthy; supplier queue delay under owner review.",
    weakExample:
      "Unusual activity.",
  },
  {
    field: "Alternative explanations",
    purpose:
      "Preserve fictional benign, operational, source-health, change, or dependency explanations.",
    strongExample:
      "Supplier delay, queue backlog, clock mismatch, collector delay, schema change, or approved recovery test.",
    weakExample:
      "None.",
  },
  {
    field: "Confidence",
    purpose:
      "Express how strongly fictional evidence supports the interpretation.",
    strongExample:
      "Moderate confidence in delay; Low confidence in cause; no conclusion about intent.",
    weakExample:
      "Critical certainty.",
  },
  {
    field: "Potential impact",
    purpose:
      "Connect the fictional condition to mission, service, data, identity, privacy, evidence, or recovery outcomes.",
    strongExample:
      "May cause stale case state, delayed notification, duplicate submissions, or support burden.",
    weakExample:
      "Everything may be compromised.",
  },
  {
    field: "Recommended action",
    purpose:
      "Define a proportional fictional triage, validation, escalation, prevention, or recovery step.",
    strongExample:
      "Validate queue age, source health, correlation, supplier status, and workflow state before containment decisions.",
    weakExample:
      "Block all supplier traffic.",
  },
  {
    field: "Owner and status",
    purpose:
      "Assign fictional accountability and track Open, In Review, Confirmed, False Positive, Source Degraded, Closed, or Reopened.",
    strongExample:
      "Integration owner; In Review; completion requires source-health and workflow reconciliation.",
    weakExample:
      "Security team.",
  },
  {
    field: "Tuning decision",
    purpose:
      "Record whether fictional logic, scope, threshold, correlation, suppression, or prevention should change.",
    strongExample:
      "Add queue-age context and expire the maintenance suppression after the fictional change window.",
    weakExample:
      "Ignore future alerts.",
  },
  {
    field: "Review trigger",
    purpose:
      "Define when the fictional alert logic or coverage must be reconsidered.",
    strongExample:
      "Review after supplier, queue, architecture, encryption, DNS, identity, or recovery change.",
    weakExample:
      "Review later.",
  },
];

const tuningPatterns = [
  {
    pattern: "Add service context",
    problem:
      "A fictional alert fires for expected communication because it lacks application or service purpose.",
    improvement:
      "Include approved service identity, destination group, application role, environment, and state.",
    risk:
      "Overly broad context may hide unexpected use of the same path.",
    governance:
      "Document owner, evidence, validation, and review trigger.",
  },
  {
    pattern: "Add maintenance context",
    problem:
      "A fictional change window generates repeated alerts.",
    improvement:
      "Use time-bound maintenance state, approved change identifier, affected services, and expiration.",
    risk:
      "Permanent maintenance suppression can hide unrelated activity.",
    governance:
      "Require automatic expiration and retrospective review.",
  },
  {
    pattern: "Improve correlation",
    problem:
      "One fictional network event lacks enough meaning.",
    improvement:
      "Correlate network, identity, policy, DNS, application, source-health, support, or recovery evidence.",
    risk:
      "More data can increase privacy and complexity.",
    governance:
      "Use only required fields and defined purpose.",
  },
  {
    pattern: "Narrow scope",
    problem:
      "A fictional alert covers many zones or services with different expected behavior.",
    improvement:
      "Split logic by mission service, identity, destination, environment, or state.",
    risk:
      "Too many narrow alerts can become difficult to maintain.",
    governance:
      "Use shared templates, owners, and review criteria.",
  },
  {
    pattern: "Adjust threshold",
    problem:
      "A fictional volume, delay, or rate threshold is too sensitive or too broad.",
    improvement:
      "Use historical context, service objective, seasonality, source health, and impact.",
    risk:
      "Raising thresholds may hide meaningful degradation.",
    governance:
      "Record rationale, validation, owner, and recheck date.",
  },
  {
    pattern: "Use suppression",
    problem:
      "A fictional repeated alert has a documented temporary explanation.",
    improvement:
      "Suppress only the narrow condition for a defined window and owner.",
    risk:
      "Suppression may outlive the condition or hide a changed event.",
    governance:
      "Require expiration, evidence, residual risk, and closure.",
  },
  {
    pattern: "Escalate to prevention",
    problem:
      "A fictional high-confidence condition repeatedly causes significant impact.",
    improvement:
      "Consider blocking or limiting only after validation, mission analysis, rollback, exception, and recovery design.",
    risk:
      "False prevention may disrupt critical services.",
    governance:
      "Use stronger approval and evidence than detection alone.",
  },
  {
    pattern: "Return prevention to detection",
    problem:
      "A fictional prevention action creates unacceptable false blocks or mission impact.",
    improvement:
      "Move the condition back to alert-only while redesigning evidence and policy.",
    risk:
      "Exposure may increase during the redesign.",
    governance:
      "Document residual risk, compensating controls, owner, and completion criteria.",
  },
];

const evidenceMatrix = [
  {
    id: "NV-01",
    source: "Fictional visibility coverage map",
    observation:
      "Public-boundary coverage is strong, while east-west application, supplier-result, DNS, wireless, management, and recovery coverage varies.",
    supports:
      "Visibility architecture should prioritize internal and dependency trust changes.",
    limits:
      "Uneven coverage does not prove compromise, bypass, or complete blindness.",
    use:
      "Create a defender-question and source-health matrix for high-value paths.",
  },
  {
    id: "NV-02",
    source: "Fictional source-health dashboard",
    observation:
      "One collector reports Green connectivity while event freshness is twenty-one minutes behind.",
    supports:
      "Connectivity health and evidence freshness are different conditions.",
    limits:
      "Delay does not prove loss, tampering, or one cause.",
    use:
      "Add freshness, queue age, schema quality, and blind-period evidence.",
  },
  {
    id: "NV-03",
    source: "Fictional encrypted-path review",
    observation:
      "Content inspection is unavailable for several approved service paths, but service identity, destination group, timing, volume, policy result, and endpoint correlation remain available.",
    supports:
      "Encrypted traffic can still produce useful minimized defensive evidence.",
    limits:
      "Metadata does not prove content, intent, or full business meaning.",
    use:
      "State exactly which questions can and cannot be answered.",
  },
  {
    id: "NV-04",
    source: "Fictional IDS alert review",
    observation:
      "A high-volume alert occurred during an approved data-recovery exercise and matched expected recovery destinations.",
    supports:
      "Recovery context may explain the alert and should be incorporated into tuning.",
    limits:
      "Approved recovery context does not prove every event in the window is expected.",
    use:
      "Narrow context and preserve review rather than suppressing the entire window.",
  },
  {
    id: "NV-05",
    source: "Fictional IPS action summary",
    observation:
      "A prevention rule blocked three supplier-result messages, two of which were later found to be valid delayed results.",
    supports:
      "The prevention condition may lack sufficient freshness or state context.",
    limits:
      "The summary does not prove the prevention concept is inappropriate in all cases.",
    use:
      "Review confidence, false-block impact, rollback, and whether detection-only is temporarily safer.",
  },
  {
    id: "NV-06",
    source: "Fictional DNS evidence review",
    observation:
      "Naming requests are visible by requester group and response category, but resolver source health was incomplete during one outage.",
    supports:
      "DNS evidence can support dependency and anomaly review but needs health context.",
    limits:
      "A query does not prove successful connection, harmful intent, or user impact.",
    use:
      "Correlate with policy, service, connection, and recovery evidence.",
  },
  {
    id: "NV-07",
    source: "Fictional wireless visibility summary",
    observation:
      "Managed and guest classes have clear policy evidence, while two service-device identities have incomplete ownership and session correlation.",
    supports:
      "Wireless visibility requires identity, device, class, owner, policy, session, and lifecycle context.",
    limits:
      "Incomplete ownership does not prove unsafe behavior.",
    use:
      "Assign owner validation and improve correlation before changing access.",
  },
  {
    id: "NV-08",
    source: "Fictional recovery monitoring exercise",
    observation:
      "Normal monitoring became incomplete during failover, but recovery actions, approvals, and validation were partly preserved in alternate evidence.",
    supports:
      "Alternate evidence and blind-period marking belong in recovery design.",
    limits:
      "One exercise does not establish all future failure behavior.",
    use:
      "Define evidence continuity, source-health gates, and re-test criteria.",
  },
];

const defects = [
  {
    defect: "Perimeter-only visibility",
    observation:
      "Fictional monitoring focuses on public traffic and lacks internal service, administrative, supplier, DNS, wireless, and recovery evidence.",
    impact:
      "Important trust changes and failure conditions may be difficult to explain.",
    correction:
      "Prioritize visibility at high-value boundaries and dependencies.",
  },
  {
    defect: "Alert equals incident",
    observation:
      "A fictional detection match is described as confirmed compromise.",
    impact:
      "Unsupported certainty may cause unnecessary escalation or blame.",
    correction:
      "Separate observation, interpretation, alternatives, confidence, scope, impact, and validation.",
  },
  {
    defect: "Green source equals complete evidence",
    observation:
      "A fictional collector is reachable but its events are delayed.",
    impact:
      "Dashboards may appear healthy while decisions rely on stale evidence.",
    correction:
      "Track freshness, queue age, volume, schema, clock, and blind periods.",
  },
  {
    defect: "Encrypted means invisible",
    observation:
      "A fictional team assumes encrypted traffic cannot be monitored meaningfully.",
    impact:
      "Available identity, metadata, policy, DNS, endpoint, and service evidence may be ignored.",
    correction:
      "Document remaining evidence and unanswered questions precisely.",
  },
  {
    defect: "Collect everything",
    observation:
      "Fictional monitoring retains unnecessary content and fields without defined purpose.",
    impact:
      "Privacy, cost, access, retention, and trust risk increase.",
    correction:
      "Use minimal data for approved defender questions.",
  },
  {
    defect: "Permanent suppression",
    observation:
      "A noisy fictional alert is disabled without expiration or owner review.",
    impact:
      "Meaningful future change may be hidden.",
    correction:
      "Use narrow, time-bound, evidenced suppression with automatic review.",
  },
  {
    defect: "Prevention without rollback",
    observation:
      "A fictional IPS action blocks traffic but has no rapid reversal or business-state recovery plan.",
    impact:
      "False blocks may create prolonged service harm.",
    correction:
      "Define approval, rollback, validation, exception, communication, and recovery.",
  },
  {
    defect: "One sensor equals complete coverage",
    observation:
      "A fictional team assumes one sensor explains all zones and encrypted paths.",
    impact:
      "Coverage and evidence limits become overstated.",
    correction:
      "Use a coverage matrix and multiple complementary sources where justified.",
  },
  {
    defect: "No source-health ownership",
    observation:
      "Fictional alerts have owners, but collectors and pipelines do not.",
    impact:
      "Blind periods and stale evidence may remain unresolved.",
    correction:
      "Assign source-health owners, thresholds, escalation, recovery, and review.",
  },
  {
    defect: "No lifecycle review",
    observation:
      "Fictional sensors and alert logic remain unchanged after architecture or service changes.",
    impact:
      "Coverage drift, noisy alerts, missed conditions, and stale prevention can accumulate.",
    correction:
      "Use versions, triggers, validation, tuning history, and retirement.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Define defender questions",
    action:
      "List the fictional questions about public, east-west, supplier, administrative, wireless, DNS, policy, service, failure, and recovery behavior.",
    output:
      "Defender-question register.",
    quality:
      "Every evidence source exists to support one or more defined decisions.",
  },
  {
    step: "2",
    title: "Map visibility coverage",
    action:
      "Identify fictional zones, paths, services, identities, states, encrypted boundaries, policy points, and recovery conditions represented by evidence.",
    output:
      "Network visibility coverage map.",
    quality:
      "Coverage and blind spots are stated without claiming complete truth.",
  },
  {
    step: "3",
    title: "Inventory evidence sources",
    action:
      "Record fictional sensor, collector, metadata, policy, DNS, application, identity, wireless, supplier, source-health, and alternate evidence.",
    output:
      "Evidence-source and provenance register.",
    quality:
      "Each source has purpose, owner, fields, health, retention, privacy, and limits.",
  },
  {
    step: "4",
    title: "Separate detection and prevention",
    action:
      "Classify fictional conditions as alert-only, review-required, limit, block, or recovery-gated based on confidence, impact, reversibility, and mission cost.",
    output:
      "IDS/IPS action decision matrix.",
    quality:
      "Prevention requires stronger evidence and rollback than detection.",
  },
  {
    step: "5",
    title: "Write alert records",
    action:
      "Document fictional observation, provenance, scope, context, alternatives, confidence, impact, action, owner, status, tuning, and trigger.",
    output:
      "Network alert register.",
    quality:
      "No alert is treated as proof of compromise or intent.",
  },
  {
    step: "6",
    title: "Design source-health monitoring",
    action:
      "Define fictional freshness, queue age, event volume, schema, clock, collector, storage, transformation, and blind-period evidence.",
    output:
      "Source-health and evidence-continuity plan.",
    quality:
      "Green connectivity is not treated as complete evidence health.",
  },
  {
    step: "7",
    title: "Tune responsibly",
    action:
      "Use fictional service, identity, maintenance, recovery, threshold, correlation, scope, and suppression context.",
    output:
      "Tuning and suppression register.",
    quality:
      "Every tuning decision has owner, evidence, risk, expiration, and review.",
  },
  {
    step: "8",
    title: "Plan failure and recovery",
    action:
      "Define fictional fail-open, fail-closed, fail-limited, alert-only, degraded, rollback, alternate evidence, communication, and recovery behavior.",
    output:
      "IDS/IPS failure and recovery plan.",
    quality:
      "The plan protects both mission continuity and trust boundaries.",
  },
  {
    step: "9",
    title: "Validate with invented cases",
    action:
      "Use fictional normal, noisy, delayed, encrypted, source-degraded, supplier, wireless, DNS, administrative, prevention, and recovery scenarios.",
    output:
      "Validation matrix and review findings.",
    quality:
      "No real traffic, capture, device, network, sensor, or control is accessed or tested.",
  },
  {
    step: "10",
    title: "Maintain and communicate",
    action:
      "Assign fictional owners, versions, coverage confidence, findings, residual risks, review triggers, leadership decisions, and retirement conditions.",
    output:
      "Network visibility and IDS/IPS portfolio package.",
    quality:
      "The artifact remains traceable, privacy-safe, evidence-aware, and completely fictional.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest difference between fictional IDS and IPS concepts?",
    choices: [
      "IDS always blocks traffic and IPS only logs.",
      "IDS emphasizes detection and alerting, while IPS may automatically prevent or limit selected communication under approved conditions.",
      "They are identical.",
      "IPS never requires evidence.",
    ],
    answer: 1,
    explanation:
      "Detection and prevention are related but have different action, confidence, failure, and rollback requirements.",
  },
  {
    question:
      "A fictional alert fires. What does it prove?",
    choices: [
      "A compromise occurred.",
      "The matched actor had malicious intent.",
      "Supplied evidence matched a detection condition; cause, scope, impact, and intent still require contextual review.",
      "The system must be blocked immediately.",
    ],
    answer: 2,
    explanation:
      "Alerts are observations and interpretations, not automatic proof of compromise or intent.",
  },
  {
    question:
      "Why is source health important?",
    choices: [
      "Because every source is always complete.",
      "Because stale, delayed, missing, transformed, or unhealthy evidence can mislead detection and response decisions.",
      "Because source health proves no attack occurred.",
      "Because it replaces alert review.",
    ],
    answer: 1,
    explanation:
      "Evidence quality depends on freshness, completeness, timing, schema, collection, and pipeline health.",
  },
  {
    question:
      "What is the strongest approach to encrypted fictional traffic?",
    choices: [
      "Assume complete blindness.",
      "Assume complete visibility.",
      "Document which metadata, identity, policy, DNS, endpoint, service, timing, and source-health evidence remains and which questions cannot be answered.",
      "Disable encryption for monitoring.",
    ],
    answer: 2,
    explanation:
      "Encrypted boundaries change available evidence but do not justify unsupported claims of total visibility or total blindness.",
  },
  {
    question:
      "When is fictional prevention most appropriate?",
    choices: [
      "Whenever an alert has a dramatic name.",
      "When the condition is specific, high-confidence, validated, high-impact, reversible, owned, and safe for the mission.",
      "Whenever detection creates too many alerts.",
      "When rollback is unavailable.",
    ],
    answer: 1,
    explanation:
      "Automatic prevention requires stronger assurance and mission analysis than alert-only detection.",
  },
  {
    question:
      "What is the strongest treatment for a noisy alert during maintenance?",
    choices: [
      "Disable the alert permanently.",
      "Use narrow, approved, time-bound maintenance context with expiration, evidence, owner review, and retrospective validation.",
      "Ignore all alerts during the change.",
      "Convert every alert to prevention.",
    ],
    answer: 1,
    explanation:
      "Tuning should preserve meaningful risk and expire when the temporary context ends.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use a real packet capture but remove addresses.",
      "Use copied sensor names and logs without the organization name.",
      "Invent every sensor, path, alert, evidence source, rule, owner, date, decision, and outcome from scratch.",
      "Use real IDS rules because the project is defensive.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real networks, evidence, controls, identities, and internal visibility details.",
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
        Module A4
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

export default function IdsIpsConceptsAndNetworkVisibilityPage() {
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
              Module A4
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 4 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Detection, Prevention, and Evidence
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A4.4 IDS/IPS Concepts and Network Visibility
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders design fictional network
            visibility and distinguish detection from prevention. Examine
            placement, coverage, blind spots, encrypted boundaries, source
            health, alert provenance, tuning, privacy, prevention tradeoffs,
            response, safe failure, recovery, and lifecycle maintenance.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A4: Advanced Networking Defense"
          lessonTitle="IDS/IPS Concepts and Network Visibility"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented sensors, paths, alerts, evidence sources, rules, owners, dates, decisions, and outcomes.",
            "I understand that a fictional alert does not automatically prove compromise, intent, cause, scope, or impact.",
            "I will separate detection, prevention, evidence, source health, tuning, response, and recovery.",
            "I will document encrypted-boundary limits, blind spots, privacy, source-health gaps, and confidence.",
            "I will evaluate false-positive cost, false-negative risk, mission impact, rollback, and safe failure before recommending prevention.",
            "I will not capture, intercept, inspect, scan, test, configure, deploy, bypass, block, or modify any real traffic, sensor, network, IDS, IPS, firewall, account, or system.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Green Dashboard and a High-Severity Alert Can Both Be Misleading"
        >
          <p className="leading-8">
            A fictional Northbridge dashboard shows all sensors Green. At the
            same time, a High alert reports delayed supplier-result traffic.
            Reviewers discover that Green means the collector is reachable, not
            that events are current. One evidence stream is twenty-one minutes
            behind. The alert may reflect supplier delay, queue backlog,
            collector delay, schema change, maintenance, or another cause. The
            team must improve evidence before deciding whether to alert, block,
            suppress, or recover.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak conclusion
              </p>
              <p className="mt-2 leading-7">
                “The sensor is Green, so the evidence is complete, and the High
                alert proves an attack.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong conclusion
              </p>
              <p className="mt-2 leading-7">
                “The fictional evidence supports a delayed-path condition with
                Moderate confidence. Cause and intent remain unknown. Validate
                freshness, queue age, correlation, policy, service state, and
                source health before prevention.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Detection quality depends on what evidence means, where it comes
            from, how current it is, which scope it covers, and how defenders
            respond—not simply on severity labels or dashboard colors.
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
          title="Visibility Determines Which Network Questions Defenders Can Answer"
        >
          <p className="leading-8">
            Fictional network evidence can help explain identity, service,
            path, policy, DNS, wireless, supplier, administrative, failure, and
            recovery behavior. But incomplete placement, encrypted boundaries,
            stale collectors, poor tuning, over-collection, and aggressive
            prevention can produce false confidence or mission harm.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Detection quality",
                "Alerts become useful when evidence, context, provenance, source health, scope, confidence, and ownership are visible.",
              ],
              [
                "Prevention safety",
                "Automatic actions require stronger specificity, validation, rollback, mission analysis, and recovery.",
              ],
              [
                "Coverage honesty",
                "A mature design states what is visible, what is limited, what is blind, and what alternate evidence exists.",
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

        <SectionCard eyebrow="Core Framework" title="The V-I-S-I-B-L-E Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "V — Verify the question",
                "Define the fictional defender decision before selecting sensors, fields, alerts, or prevention.",
              ],
              [
                "I — Inventory evidence",
                "List fictional network, policy, identity, DNS, application, wireless, supplier, source-health, and recovery sources.",
              ],
              [
                "S — Scope coverage",
                "Document zones, paths, services, identities, environments, states, encrypted boundaries, and blind spots.",
              ],
              [
                "I — Interpret carefully",
                "Separate observation, interpretation, alternatives, confidence, impact, and intent.",
              ],
              [
                "B — Balance action",
                "Choose alert, review, limit, block, fail-open, fail-closed, or fail-limited based on mission and evidence.",
              ],
              [
                "L — Limit collection",
                "Use fictional minimized evidence with approved purpose, access, retention, privacy, and deletion.",
              ],
              [
                "E — Evaluate health and tuning",
                "Track freshness, queue age, schema, clock, volume, suppression, false positives, and false negatives.",
              ],
              [
                "E — Evolve and recover",
                "Maintain owners, versions, validation, rollback, source recovery, review triggers, and retirement.",
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
              Decision-ready visibility statement
            </p>
            <p className="mt-2 leading-7">
              This fictional visibility design answers defined defender
              questions across documented zones, paths, services, identities,
              states, and recovery conditions. It identifies evidence,
              provenance, health, encrypted limits, blind spots, tuning,
              prevention conditions, privacy, ownership, residual risk, and
              review triggers.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for IDS/IPS and Network Visibility"
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
            Apply Ten Visibility and IDS/IPS Principles
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {principles.map((item) => (
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
          title="Review Eight Visibility Layers"
        >
          <div className="grid gap-5">
            {visibilityLayers.map((item) => (
              <article
                key={item.layer}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.layer}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Defender questions", item.questions],
                    ["Fictional evidence", item.evidence],
                    ["Limits", item.limits],
                    ["Response use", item.response],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.layer}-${label}`}
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
          title="Compare Detection and Prevention"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Comparison area",
                    "IDS concept",
                    "IPS concept",
                    "Design question",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {idsIpsComparison.map((row) => (
                  <tr key={row.area}>
                    <td className="px-4 py-4 align-top font-bold text-cyan-100">
                      {row.area}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.detection}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.prevention}
                    </td>
                    <td className="px-4 py-4 align-top leading-6 text-slate-300">
                      {row.designQuestion}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Write Every Alert with Twelve Fields"
        >
          <div className="grid gap-5">
            {alertFields.map((item, index) => (
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

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Tune without Hiding Risk"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {tuningPatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.pattern}
                </h3>

                <div className="mt-4 grid gap-4">
                  {[
                    ["Problem", item.problem],
                    ["Improvement", item.improvement],
                    ["Risk", item.risk],
                    ["Governance", item.governance],
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
          eyebrow="Instructional Section 6"
          title="Interpret Source Health beyond Green and Red"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Connectivity",
                "Can the fictional sensor or collector communicate?",
                "Does not prove event freshness, completeness, timing, schema, or meaning.",
              ],
              [
                "Freshness",
                "How long since the latest expected fictional event?",
                "A fresh event stream may still be incomplete or malformed.",
              ],
              [
                "Queue age",
                "Are fictional events delayed before analysis or storage?",
                "Delay does not prove loss or one cause.",
              ],
              [
                "Event volume",
                "Does fictional volume align with expected service and state context?",
                "Low volume may reflect quiet operation, source failure, or a change.",
              ],
              [
                "Schema quality",
                "Are required fictional fields present and interpreted consistently?",
                "A valid schema does not prove correct business meaning.",
              ],
              [
                "Clock alignment",
                "Can fictional events be correlated across sources accurately?",
                "Aligned clocks do not prove event completeness.",
              ],
              [
                "Transformation health",
                "Were fictional fields filtered, enriched, aggregated, or changed as expected?",
                "A healthy transformation may still omit needed context.",
              ],
              [
                "Storage and access",
                "Can approved fictional reviewers retrieve the evidence within retention and privacy rules?",
                "Availability does not prove correctness or sufficient scope.",
              ],
              [
                "Blind period",
                "Which fictional time, zone, path, service, or state lacks reliable evidence?",
                "A blind period does not prove harmful activity occurred.",
              ],
              [
                "Recovery state",
                "How is fictional source health restored and validated after failure?",
                "A collector restart does not prove historical gaps were recovered.",
              ],
            ].map(([title, question, caution]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {question}
                </p>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Evidence limit
                  </p>
                  <p className="mt-2 text-sm leading-6">{caution}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Design Prevention with Mission and Recovery in Mind"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Specific condition",
                "The fictional prevention logic should match a narrow, explainable, validated condition.",
                "Avoid dramatic but broad labels.",
              ],
              [
                "High confidence",
                "Evidence, context, source health, and alternatives should support the action strongly.",
                "Do not let severity replace confidence.",
              ],
              [
                "Known impact",
                "The fictional team should understand which users, services, data, suppliers, and recovery functions may be affected.",
                "Preventing communication can create business harm.",
              ],
              [
                "Reversibility",
                "The fictional action should have rollback, override, exception, and validation.",
                "Irreversible or slow reversal increases risk.",
              ],
              [
                "Safe failure",
                "Define fail-open, fail-closed, or fail-limited behavior for the fictional mission.",
                "One setting may not fit every path.",
              ],
              [
                "Owner approval",
                "Detection, network, service, risk, privacy, and recovery owners may need to approve the fictional action.",
                "Technical ownership alone may not cover mission impact.",
              ],
              [
                "Evidence continuity",
                "The fictional action should preserve enough evidence to explain cause, scope, result, and recovery.",
                "Blocking without evidence may make later review harder.",
              ],
              [
                "Recovery plan",
                "Define how fictional communication, business state, users, and controls return safely.",
                "Unblocking traffic alone may not restore the mission.",
              ],
            ].map(([title, design, caution]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {design}
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
          eyebrow="Fictional Visibility View"
          title="Northbridge Network Visibility Architecture"
        >
          <p className="leading-8">
            This conceptual view is completely invented and intentionally
            non-operational. It shows evidence relationships without real
            packet captures, addresses, routes, device names, sensor rules,
            signatures, ports, credentials, vendors, or internal logs.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Public boundary", "Direction, policy, service, timing, volume, source health"],
                ["Wireless boundary", "User, device, class, session, destination, policy"],
                ["Supplier boundary", "Identity, request, result, queue age, correlation, health"],
                ["Administrative boundary", "Identity, device, destination, approval, session, action"],
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
                Fictional Northbridge Evidence Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Network metadata", "Source, destination, service, timing, volume, direction"],
                  ["Policy evidence", "Allow, deny, reason, version, exception, source health"],
                  ["Identity evidence", "Human, device, service, role, lifecycle, approval"],
                  ["Application context", "Request, object, state, correlation, result"],
                  ["DNS evidence", "Requester group, resolver, response category, health"],
                  ["Source health", "Freshness, queue age, schema, clock, collector, blind period"],
                  ["Alert workflow", "Observation, alternatives, confidence, owner, action, closure"],
                  ["Recovery evidence", "Trigger, identity, destination, validation, reconciliation, closure"],
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
                ["Detection", "Alert, context, confidence, triage, review, tuning"],
                ["Prevention", "Limit, block, exception, rollback, mission impact"],
                ["Privacy", "Purpose, minimization, access, retention, deletion"],
                ["Lifecycle", "Owner, version, validation, suppression, trigger, retirement"],
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
          title="Fake Northbridge Network Visibility Dashboard"
          subtitle="Fictional coverage, source health, alerts, prevention, blind spots, and tuning status for training only."
          metrics={[
            {
              label: "High-value paths with current evidence",
              value: "18 / 24",
              note: "Supplier-result, administrative, DNS, wireless-service, and recovery paths need stronger or independent evidence.",
            },
            {
              label: "Source-health gaps",
              value: "4",
              note: "One stale collector, one incomplete DNS source, one unowned wireless source, and one recovery blind period remain open.",
            },
            {
              label: "Prevention rules under review",
              value: "3",
              note: "Two have false-block concerns and one lacks complete rollback evidence.",
            },
          ]}
        />

        <FakeAlertCard
          title="Collector Green but Evidence Freshness Is Delayed"
          severity="High"
          time="4:12 PM"
          source="Fake Northbridge Visibility Assurance Console"
          details="The fictional supplier-path collector reports Green connectivity, but event freshness is twenty-one minutes behind and queue age is increasing. A High alert relies on this delayed evidence."
          recommendation="Mark the source Degraded, preserve the alert as provisional, validate freshness, queue age, clock, schema, correlation, alternate evidence, supplier state, and workflow impact before prevention or closure."
        />

        <FakeLogPanel
          title="Fake Network Visibility Review Timeline"
          logs={[
            "09:00 QUESTION supplier-delay='defined'",
            "09:08 COVERAGE perimeter='strong'",
            "09:16 COVERAGE east-west='partial'",
            "09:24 COVERAGE administration='partial'",
            "09:32 COVERAGE supplier='moderate'",
            "09:40 COVERAGE wireless='moderate'",
            "09:48 COVERAGE dns='partial'",
            "09:56 COVERAGE recovery='partial'",
            "10:04 SOURCE collector-connectivity='green'",
            "10:12 SOURCE event-freshness='delayed-21m'",
            "10:20 SOURCE queue-age='rising'",
            "10:28 ALERT supplier-path='high'",
            "10:36 CONFIDENCE delay='moderate'",
            "10:44 CONFIDENCE cause='low'",
            "10:52 IPS false-block='2-of-3'",
            "11:00 TUNING maintenance-context='reviewed'",
            "11:08 PRIVACY minimization='approved'",
            "11:16 BLINDPERIOD recovery='open'",
            "11:24 CONFIDENCE visibility='moderate'",
            "16:12 ALERT issue='source-freshness-degraded'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Visibility Evidence Supports—and What It Does Not Prove
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
                    ["Visibility use", item.use],
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
          title="Which Visibility Decision Is Best Supported?"
          question="Which conclusion most responsibly addresses the fictional delayed-evidence alert?"
          evidence={[
            "The supplier-path collector reports Green connectivity.",
            "Event freshness is twenty-one minutes behind.",
            "Queue age is increasing.",
            "A High alert relies on the delayed stream.",
            "Alternate workflow and supplier-status evidence are available but not yet correlated.",
            "The evidence supports delay but not one cause, compromise, or intent.",
            "Prevention could block valid supplier results.",
            "Overall visibility confidence is Moderate.",
          ]}
          options={[
            "Mark the source Degraded, keep the alert provisional, correlate fictional queue, supplier, workflow, policy, clock, schema, and alternate evidence, then decide whether tuning, response, prevention, or recovery is justified.",
            "Block all supplier traffic immediately because the alert is High.",
            "Close the alert because the collector is Green.",
            "Assume the supplier is compromised.",
          ]}
          bestAnswer={0}
          explanation="The first option separates connectivity health from evidence freshness, preserves uncertainty, uses alternate evidence, and avoids both false closure and unsafe prevention."
        />

        <SectionCard
          eyebrow="Visibility Defects"
          title="Ten Problems That Weaken IDS/IPS and Network Evidence"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {defects.map((item) => (
              <article
                key={item.defect}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">
                  {item.defect}
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
          title="Build the Northbridge Network Visibility and IDS/IPS Coverage Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            capture, intercept, inspect, scan, test, configure, deploy, bypass,
            block, suppress, monitor, investigate, or modify any real traffic,
            packet, sensor, IDS, IPS, firewall, network, device, account, DNS
            service, wireless system, or organizational infrastructure.
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
          title="A Prevention Rule Blocks Valid Supplier Results"
          scenario="A fictional IPS rule blocks three supplier-result messages. Later review shows that two were valid but delayed. The condition uses destination and volume but lacks freshness, state, and queue context."
          choices={[
            {
              label: "Choice A",
              response:
                "Move the fictional condition temporarily to detection-only, preserve evidence, add freshness, state, queue, correlation, and source-health context, review mission impact and rollback, then revalidate whether prevention is justified.",
              outcome:
                "Best defensive choice. It reduces false-block harm while preserving visibility and controlled redesign.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep blocking because false positives are acceptable.",
              outcome:
                "Weak. Valid results may affect case state, communication, and user outcomes.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable all detection for the supplier path.",
              outcome:
                "Weak. Removing visibility abandons the defender question rather than improving evidence.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Recovery Exercise Creates Thousands of Alerts"
          scenario="A fictional recovery exercise causes expected high-volume communication and hundreds of repeated alerts. The team proposes suppressing every network alert during all future recovery windows."
          choices={[
            {
              label: "Choice A",
              response:
                "Use narrow fictional recovery context, approved identities, destinations, actions, time windows, and expected patterns; keep source-health and out-of-scope alerts active; expire the suppression and review the exercise afterward.",
              outcome:
                "Best choice. It reduces noise without creating a broad visibility gap.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Suppress all alerts during recovery because activity is approved.",
              outcome:
                "Weak. Approved recovery does not make every event expected or safe.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Cancel recovery exercises to avoid alert noise.",
              outcome:
                "Weak. The solution is better context and governance, not abandoning resilience validation.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design Visibility for Encrypted, Dynamic, and Recovery-Dependent Services"
        >
          <p className="leading-8">
            Fictional Northbridge uses encrypted service communication,
            dynamic workloads, supplier integration, managed wireless, remote
            administration, and a recovery environment where normal monitoring
            may be degraded. Leadership wants stronger detection without
            unnecessary content collection or frequent false blocking.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Define questions first",
                "Identify fictional identity, service, path, policy, delay, source-health, DNS, administration, and recovery questions.",
              ],
              [
                "Use complementary evidence",
                "Combine minimized network metadata, service identity, policy, DNS, application, endpoint, source-health, and recovery evidence.",
              ],
              [
                "State encrypted limits",
                "Explain which content questions are unavailable and which metadata or endpoint questions remain answerable.",
              ],
              [
                "Separate detection and prevention",
                "Use alert-only for uncertain conditions and prevention only for specific, validated, reversible, high-confidence conditions.",
              ],
              [
                "Protect privacy",
                "Minimize fictional fields, purpose, access, retention, correlation, and audience.",
              ],
              [
                "Design recovery evidence",
                "Use alternate sources, blind-period records, dependency gates, communication, validation, and re-test criteria.",
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
              Produce a fictional defender-question register, visibility
              coverage map, encrypted-boundary matrix, evidence-source
              inventory, source-health design, IDS/IPS action matrix, tuning
              register, privacy plan, failure and recovery plan, validation
              cases, residual-risk statement, and leadership explanation.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="IDS/IPS Concepts and Network Visibility Checklist"
          items={[
            "I can distinguish fictional network visibility, detection, prevention, policy evidence, source health, alerting, response, and recovery.",
            "I can define defender questions before selecting sensors or evidence fields.",
            "I can map perimeter, east-west, administrative, supplier, wireless, DNS, application-aware, and recovery visibility.",
            "I can document coverage, blind spots, encrypted boundaries, alternate evidence, and confidence.",
            "I can separate an alert observation from interpretation, cause, scope, impact, compromise, and intent.",
            "I can evaluate source health using freshness, queue age, volume, schema, clock, transformation, storage, access, and blind periods.",
            "I can tune fictional alerts with service, identity, maintenance, recovery, threshold, correlation, scope, and suppression context.",
            "I can govern suppression with owner, evidence, expiration, residual risk, and review.",
            "I can select prevention only when evidence, confidence, specificity, reversibility, mission impact, rollback, and recovery support it.",
            "I can design fail-open, fail-closed, fail-limited, detection-only, degraded, rollback, and recovery behavior.",
            "I can preserve privacy through purpose limitation, minimization, access, retention, and deletion.",
            "I can create a completely fictional visibility artifact without using real packets, addresses, routes, sensors, rules, logs, credentials, device names, DNS records, suppliers, or internal architecture.",
          ]}
        />

        <MiniQuiz
          title="A4.4 Mini Quiz: IDS/IPS Concepts and Network Visibility"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Network Visibility and IDS/IPS Coverage Package for the Northbridge Student-Support Cooperative. Include mission, purpose, scope, stakeholders, exclusions, safety boundary, at least twenty defender questions, at least twelve visibility points, perimeter coverage, east-west coverage, administrative coverage, supplier coverage, wireless coverage, DNS coverage, application-aware coverage, recovery coverage, encrypted-boundary analysis, evidence-source inventory, provenance, source health, freshness, queue age, schema, clock, blind periods, privacy purpose, fields, access, retention, deletion, at least fifteen fictional alerts, observation, alternatives, confidence, impact, owner, status, tuning, suppression, detection-versus-prevention decisions, false-positive analysis, false-negative analysis, fail-open, fail-closed, fail-limited, rollback, recovery, validation cases, findings, completion criteria, residual risks, review triggers, leadership summary, technical appendix, reflection, and a statement that every organization, sensor, path, alert, rule, source, record, owner, date, decision, and outcome is invented."
          tips={[
            "Begin with fictional defender questions and choose only the evidence required to answer them.",
            "Separate collector connectivity, evidence freshness, completeness, schema, timing, and meaning.",
            "Use alert-only decisions for uncertain conditions and reserve prevention for specific, high-confidence, reversible, well-tested conditions.",
            "Treat encrypted boundaries honestly by documenting remaining metadata and unanswered questions.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Secure Remote Access Concepts?"
        >
          <p className="leading-8">
            Before moving to A4.5, rate your readiness from 1 to 5 for defender
            questions, coverage, blind spots, encrypted boundaries, source
            health, alert reasoning, tuning, suppression, prevention, privacy,
            failure, recovery, ownership, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why a fictional alert does not prove compromise or intent.",
              "I can distinguish detection from prevention and explain why prevention requires stronger evidence.",
              "I can design visibility beyond the perimeter.",
              "I can state what encrypted traffic evidence can and cannot support.",
              "I can recognize when a Green source is stale or incomplete.",
              "I can tune or suppress alerts without hiding meaningful risk.",
              "I can design fail-open, fail-closed, fail-limited, rollback, and recovery decisions.",
              "I can produce a safe fictional visibility package without copying, modifying, or exposing real network evidence.",
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
            Record one fictional blind spot you prioritized, one alert you
            reclassified, one source-health issue, one tuning decision, one
            prevention rule you moved to detection-only, and one question you
            will carry into A4.5.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Network visibility begins with fictional defender questions, not with collecting every possible detail.",
            "IDS concepts emphasize detection and alerting; IPS concepts may automatically prevent or limit communication.",
            "A fictional alert is evidence of a matched condition, not automatic proof of compromise, cause, scope, impact, or intent.",
            "Coverage should include perimeter, east-west, administrative, supplier, wireless, DNS, application, and recovery relationships.",
            "Encrypted boundaries change available evidence but do not justify claims of total blindness or total visibility.",
            "Source health includes freshness, queue age, volume, schema, clock, transformation, access, blind periods, and recovery.",
            "Tuning and suppression require evidence, owner, scope, expiration, residual risk, and review.",
            "Prevention requires stronger specificity, confidence, validation, reversibility, mission analysis, rollback, and recovery than detection.",
            "Privacy, response, evidence preservation, closure, lifecycle, and review triggers belong in visibility design.",
            "Every CyberShield IDS/IPS and visibility artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A4
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Next, design fictional secure remote access around verified
            identity, managed devices, role and object context, approved
            destinations, time limits, session evidence, supplier support,
            emergency access, safe failure, revocation, and lifecycle review.
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