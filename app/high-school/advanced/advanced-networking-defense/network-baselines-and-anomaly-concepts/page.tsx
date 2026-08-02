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
const previousLesson = `${modulePath}/wireless-defense-strategy`;
const nextLesson = `${modulePath}/dns-security-concepts`;

const objectives = [
  "Explain a fictional network baseline as an evidence-supported model of expected behavior across mission, identity, service, destination, timing, volume, protocol, change, maintenance, failure, and recovery context.",
  "Differentiate normal variation, expected change, unusual behavior, meaningful anomaly, evidence gap, source-health problem, policy drift, and confirmed impact without assuming malicious intent.",
  "Design fictional baselines for public, east-west, supplier, administrative, wireless, DNS, monitoring, and recovery paths using appropriate time windows, peer groups, owners, confidence, and review triggers.",
  "Evaluate fictional anomaly evidence by separating observation, comparison, alternative explanations, source health, confidence, scope, impact, escalation, tuning, and closure.",
  "Create a portfolio-ready fictional network baseline and anomaly-review package with metrics, evidence limits, change context, maintenance windows, seasonality, residual risk, validation, and lifecycle governance.",
];

const vocabulary = [
  [
    "Network baseline",
    "A fictional evidence-supported description of expected network behavior for defined users, devices, services, destinations, time periods, states, and mission conditions.",
  ],
  [
    "Expected behavior",
    "Fictional activity that aligns with approved mission purpose, architecture, identity, service, destination, timing, volume, protocol, policy, and current operating state.",
  ],
  [
    "Normal variation",
    "A fictional difference that falls within an understood range caused by ordinary workload, schedule, user, service, capacity, or environmental changes.",
  ],
  [
    "Anomaly",
    "A fictional observation that differs from an expected baseline and requires contextual review; it does not automatically prove harmful activity.",
  ],
  [
    "Meaningful anomaly",
    "A fictional deviation that remains important after considering mission, identity, service, change, maintenance, seasonality, source health, and alternative explanations.",
  ],
  [
    "Baseline window",
    "The fictional time period used to learn or summarize expected behavior.",
  ],
  [
    "Comparison window",
    "The fictional time period being compared with a baseline.",
  ],
  [
    "Peer group",
    "A fictional collection of similar users, devices, services, workloads, locations, or periods used for meaningful comparison.",
  ],
  [
    "Seasonality",
    "Fictional repeating variation associated with time of day, day of week, academic term, event schedule, reporting cycle, maintenance cycle, or other expected pattern.",
  ],
  [
    "Change window",
    "A fictional approved period during which architecture, policy, service, supplier, wireless, DNS, recovery, or application behavior may differ.",
  ],
  [
    "Maintenance context",
    "Fictional information describing authorized work, affected services, owners, expected behavior, start, end, rollback, and review.",
  ],
  [
    "Behavior dimension",
    "A fictional attribute used for comparison, such as identity, source class, destination class, service, direction, timing, volume, duration, protocol category, policy result, or failure state.",
  ],
  [
    "Static threshold",
    "A fictional fixed value used to identify when a measured condition exceeds or falls below an approved limit.",
  ],
  [
    "Dynamic baseline",
    "A fictional expected range that changes according to time, service, identity, seasonality, state, or other context.",
  ],
  [
    "Contextual baseline",
    "A fictional baseline that combines multiple dimensions instead of treating one metric as sufficient.",
  ],
  [
    "Baseline drift",
    "A fictional gradual change in expected behavior that may reflect legitimate evolution, hidden policy change, source change, degraded service, or growing risk.",
  ],
  [
    "Policy drift",
    "A fictional difference between intended communication policy and observed or documented behavior.",
  ],
  [
    "Evidence gap",
    "A fictional absence of sufficient information to evaluate a baseline or anomaly confidently.",
  ],
  [
    "Source-health anomaly",
    "A fictional deviation caused by delayed, missing, duplicated, malformed, stale, transformed, or unhealthy evidence rather than the underlying network behavior.",
  ],
  [
    "False positive",
    "A fictional anomaly that appears concerning but is explained by approved or benign conditions after review.",
  ],
  [
    "False negative",
    "A fictional meaningful condition that the current baseline or detection process did not identify.",
  ],
  [
    "Confidence",
    "A fictional statement describing how strongly the available evidence supports an observation or interpretation.",
  ],
  [
    "Anomaly triage",
    "A fictional review process that evaluates observation, baseline, context, alternatives, source health, scope, impact, owner, action, and closure.",
  ],
  [
    "Baseline review trigger",
    "A fictional event requiring revalidation, such as architecture, segmentation, firewall, identity, supplier, wireless, DNS, application, monitoring, recovery, or mission change.",
  ],
];

const principles = [
  {
    principle: "Baseline a mission, not a network in general",
    description:
      "A fictional baseline should describe expected behavior for a defined service, user group, device class, destination, path, state, or mission outcome.",
    strongPractice:
      "Baseline the supplier-result path by service identity, destination, queue state, time, volume, policy result, and academic schedule.",
    failure:
      "A single organization-wide average can hide meaningful differences among services and states.",
  },
  {
    principle: "Use multiple behavior dimensions",
    description:
      "Fictional baselines become more useful when identity, service, destination, timing, volume, direction, duration, policy, and state are considered together.",
    strongPractice:
      "Compare one workflow service with its own normal destinations and time patterns instead of all internal traffic.",
    failure:
      "One high-volume metric may create noise or miss unusual destination changes.",
  },
  {
    principle: "Model variation explicitly",
    description:
      "Expected fictional behavior changes across schedules, seasons, events, maintenance, degraded operation, recovery, and growth.",
    strongPractice:
      "Maintain normal, peak, maintenance, and recovery baseline states.",
    failure:
      "Expected variation may be escalated as suspicious, or risky drift may be normalized.",
  },
  {
    principle: "Separate observation from interpretation",
    description:
      "A fictional anomaly is a measured difference, not a conclusion about cause, intent, compromise, or impact.",
    strongPractice:
      "State that destination diversity increased, then review service change, policy, source health, maintenance, and owner context.",
    failure:
      "Teams may jump directly from difference to blame or containment.",
  },
  {
    principle: "Measure source health",
    description:
      "Fictional baseline quality depends on event freshness, completeness, timing, schema, duplication, transformation, collector status, and blind periods.",
    strongPractice:
      "Mark a baseline unreliable when its event stream is delayed or missing.",
    failure:
      "A source-health problem may look like a drop or spike in network behavior.",
  },
  {
    principle: "Use peer groups carefully",
    description:
      "Fictional peer comparison should group services or identities with genuinely similar purpose, authority, workload, and lifecycle.",
    strongPractice:
      "Compare student-portal application instances with the same role and environment.",
    failure:
      "Comparing unrelated services may label legitimate differences as anomalies.",
  },
  {
    principle: "Include approved change",
    description:
      "Fictional architecture, policy, application, supplier, wireless, DNS, and recovery changes may alter expected behavior.",
    strongPractice:
      "Link anomaly review to approved change, expected effect, rollback, and post-change validation.",
    failure:
      "Change noise may overwhelm defenders or hide unintended effects.",
  },
  {
    principle: "Tune without normalizing risk",
    description:
      "Fictional baselines should adapt to legitimate evolution while preserving visibility into unsafe policy, broad access, repeated failure, or unexplained drift.",
    strongPractice:
      "Update the baseline only after owner validation and evidence that the new behavior is intended and acceptable.",
    failure:
      "Automatically learning every observed behavior can make harmful or accidental patterns appear normal.",
  },
  {
    principle: "Connect anomalies to decisions",
    description:
      "Fictional anomaly review should lead to bounded validation, tuning, escalation, recovery, ownership, or closure actions.",
    strongPractice:
      "Assign an owner and completion criteria for a new administrative destination anomaly.",
    failure:
      "Dashboards may accumulate unexplained deviations without improving defense.",
  },
  {
    principle: "Maintain the baseline lifecycle",
    description:
      "Fictional baselines require ownership, versions, windows, evidence, confidence, validation, change history, review triggers, and retirement.",
    strongPractice:
      "Revalidate after service, identity, supplier, network, policy, DNS, wireless, monitoring, or recovery change.",
    failure:
      "A stale baseline may create both false positives and false negatives.",
  },
];

const baselineTypes = [
  {
    baseline: "Service communication baseline",
    purpose:
      "Describe fictional source services, destination services, approved operations, timing, volume, direction, policy results, and failure states.",
    dimensions:
      "Service identity, application role, destination group, operation, environment, time, volume, duration, and policy.",
    variation:
      "Peak usage, deployment, queue backlog, maintenance, supplier delay, degraded state, and recovery.",
    evidence:
      "Service identity, policy decision, connection metadata, application correlation, source health, and owner review.",
    limit:
      "Network evidence may not explain the full business action or object authorization.",
  },
  {
    baseline: "User or role baseline",
    purpose:
      "Describe fictional remote, employee, support, administrator, guest, supplier, or recovery behavior.",
    dimensions:
      "Human identity, role, device class, destination class, time, session, action category, approval, and state.",
    variation:
      "Role changes, shifts, projects, support assignments, emergency work, and leave periods.",
    evidence:
      "Identity, device, remote-access, wireless, policy, application, ticket, and source-health records.",
    limit:
      "A difference does not establish intent or misuse.",
  },
  {
    baseline: "Device-class baseline",
    purpose:
      "Describe fictional managed, personal, service, guest, administrative, supplier, or recovery device communication.",
    dimensions:
      "Device identity, owner, class, destinations, services, timing, update, monitoring, support, and lifecycle.",
    variation:
      "Replacement, repair, roaming, event use, maintenance, degraded operation, and retirement.",
    evidence:
      "Device inventory, wireless, policy, session, destination, support, and source health.",
    limit:
      "Device-class behavior may not identify the human or application action.",
  },
  {
    baseline: "Zone-to-zone baseline",
    purpose:
      "Describe fictional communication among public, application, data, supplier, administration, monitoring, wireless, and recovery zones.",
    dimensions:
      "Source zone, destination zone, service, direction, volume, policy result, time, state, and owner.",
    variation:
      "Architecture change, migration, maintenance, supplier operations, failover, and recovery.",
    evidence:
      "Communication register, firewall policy, connection metadata, source health, change, and owner review.",
    limit:
      "A zone-level baseline may hide differences among services inside the same zone.",
  },
  {
    baseline: "Supplier-path baseline",
    purpose:
      "Describe fictional request, result, support, queue, timing, correlation, freshness, failure, and recovery behavior for an external dependency.",
    dimensions:
      "Supplier identity, destination, request category, result category, queue age, timing, volume, correlation, and state.",
    variation:
      "Supplier maintenance, academic peaks, schema change, delay, outage, backlog, and recovery.",
    evidence:
      "Supplier integration, queue, policy, service, correlation, source health, contract owner, and support evidence.",
    limit:
      "External internal behavior may remain outside scope.",
  },
  {
    baseline: "Administrative baseline",
    purpose:
      "Describe fictional privileged remote access, management, support, change, emergency, and recovery communication.",
    dimensions:
      "Administrator identity, device, role, destination, action, approval, session, time, change, and result.",
    variation:
      "Maintenance, emergency response, recovery exercises, on-call work, and infrastructure change.",
    evidence:
      "Remote access, identity, device, policy, change, session, application, and source health.",
    limit:
      "Unusual timing alone does not prove unauthorized administration.",
  },
  {
    baseline: "Wireless baseline",
    purpose:
      "Describe fictional managed, personal, guest, service-device, administrative, supplier, event, and recovery wireless behavior.",
    dimensions:
      "User identity, device identity, network class, destination class, session, roaming, time, volume, policy, and source health.",
    variation:
      "Events, room changes, device replacement, roaming, coverage issues, maintenance, and recovery.",
    evidence:
      "Onboarding, wireless session, controller, access point, identity, policy, support, and source health.",
    limit:
      "Coverage and roaming differences may reflect environment or support conditions.",
  },
  {
    baseline: "Recovery-state baseline",
    purpose:
      "Describe fictional emergency access, restore communication, failover, validation, reconciliation, and closure behavior.",
    dimensions:
      "Recovery identity, destination, action, sequence, volume, time, approval, source health, validation, and revocation.",
    variation:
      "Exercise size, service priority, dependency availability, partial restoration, and alternate evidence.",
    evidence:
      "Recovery plan, exercise, identity, network, policy, service, validation, communication, and closure.",
    limit:
      "Recovery behavior should not automatically become part of the normal baseline.",
  },
];

const behaviorDimensions = [
  {
    dimension: "Identity",
    question:
      "Which fictional human, device, service, supplier, administrator, wireless, or recovery identity is acting?",
    baselineUse:
      "Compare the identity with its approved role, owner, peer group, lifecycle, and usual service relationships.",
    anomalyExample:
      "A service identity reaches a destination normally used only by administration.",
    alternative:
      "Approved migration, support, ownership change, policy mistake, stale inventory, or source correlation error.",
  },
  {
    dimension: "Source class",
    question:
      "Which fictional zone, network class, service group, workload role, or device class initiated the behavior?",
    baselineUse:
      "Compare similar sources with the same mission and environment.",
    anomalyExample:
      "A guest-class device appears in an internal application path.",
    alternative:
      "Misclassification, onboarding error, stale class evidence, event exception, or policy mapping issue.",
  },
  {
    dimension: "Destination",
    question:
      "Which fictional service, zone, supplier, management, DNS, monitoring, or recovery destination was reached?",
    baselineUse:
      "Maintain approved destination sets and expected destination diversity.",
    anomalyExample:
      "A workflow service communicates with a new management destination.",
    alternative:
      "Approved deployment, monitoring change, new dependency, naming change, or incorrect service mapping.",
  },
  {
    dimension: "Service or protocol category",
    question:
      "Which fictional application service or communication category was used?",
    baselineUse:
      "Compare behavior with the documented dependency and allowed operation.",
    anomalyExample:
      "A service uses a communication category not listed in the architecture.",
    alternative:
      "Application update, monitoring, support, recovery, dependency discovery, or classification error.",
  },
  {
    dimension: "Direction",
    question:
      "Is fictional communication inbound, outbound, east-west, administrative, supplier, wireless, or recovery-oriented?",
    baselineUse:
      "Compare direction with trust boundaries and mission flows.",
    anomalyExample:
      "A normally receiving-only service initiates outbound communication.",
    alternative:
      "Health check, callback, update, recovery, support, new integration, or source-direction error.",
  },
  {
    dimension: "Timing",
    question:
      "When does fictional behavior occur relative to schedule, role, service objective, maintenance, event, or recovery state?",
    baselineUse:
      "Use time-of-day, day-of-week, term, event, maintenance, and recovery context.",
    anomalyExample:
      "Administrative access occurs outside the normal support window.",
    alternative:
      "Approved on-call work, emergency response, time-zone change, delayed job, or timestamp issue.",
  },
  {
    dimension: "Volume",
    question:
      "How much fictional communication occurs relative to service, peer, time, state, and source health?",
    baselineUse:
      "Use ranges and percentiles by mission state instead of one global average.",
    anomalyExample:
      "Supplier-result volume triples during a non-peak period.",
    alternative:
      "Backlog release, duplicate delivery, reporting cycle, recovery, test data, collector duplication, or source change.",
  },
  {
    dimension: "Duration and frequency",
    question:
      "How long and how often does fictional communication occur?",
    baselineUse:
      "Compare session duration, connection frequency, retry behavior, and batch intervals.",
    anomalyExample:
      "A short-lived service connection becomes continuous.",
    alternative:
      "Streaming update, stuck job, keepalive change, monitoring change, recovery, or collection artifact.",
  },
  {
    dimension: "Policy result",
    question:
      "Was fictional communication allowed, denied, limited, redirected, or evaluated under an exception?",
    baselineUse:
      "Compare allow, deny, exception, and failure patterns by service and state.",
    anomalyExample:
      "A previously stable service begins receiving repeated denials.",
    alternative:
      "Deployment drift, expired exception, identity change, destination change, policy update, or source-health issue.",
  },
  {
    dimension: "Source health",
    question:
      "Are fictional events fresh, complete, correctly timed, non-duplicated, properly transformed, and available?",
    baselineUse:
      "Mark baseline confidence and exclude or annotate unreliable windows.",
    anomalyExample:
      "Observed traffic volume falls sharply while collector queue age rises.",
    alternative:
      "Evidence delay, loss, transformation issue, clock problem, storage failure, or real service reduction.",
  },
];

const anomalyCategories = [
  {
    category: "Expected variation",
    description:
      "The fictional difference aligns with documented schedule, workload, event, seasonality, maintenance, or recovery context.",
    example:
      "Student-portal volume rises during a scheduled enrollment period.",
    action:
      "Document the context and confirm the baseline already represents it.",
    confidence:
      "High when owner, schedule, source health, and service evidence agree.",
  },
  {
    category: "Approved change effect",
    description:
      "The fictional difference follows a documented architecture, application, identity, firewall, supplier, wireless, DNS, or recovery change.",
    example:
      "A service begins reaching a new monitoring destination after an approved deployment.",
    action:
      "Validate the expected result, rollback criteria, evidence, and baseline update decision.",
    confidence:
      "Moderate or High depending on implementation and outcome evidence.",
  },
  {
    category: "Source-health issue",
    description:
      "The fictional difference may be caused by delayed, missing, duplicated, malformed, stale, or transformed evidence.",
    example:
      "Traffic appears to drop while the collector queue grows.",
    action:
      "Mark evidence Degraded and validate alternate sources before behavior conclusions.",
    confidence:
      "High for the source issue, Low for the underlying network interpretation.",
  },
  {
    category: "Unexplained operational anomaly",
    description:
      "The fictional difference remains unexplained after initial context review but has no confirmed harmful impact.",
    example:
      "A service reaches a new destination with no matching change record.",
    action:
      "Assign an owner, validate dependency, policy, identity, source health, and business state.",
    confidence:
      "Moderate in the observation, Low or Moderate in cause.",
  },
  {
    category: "Policy-drift anomaly",
    description:
      "The fictional observed behavior differs from intended segmentation, firewall, remote-access, wireless, or destination policy.",
    example:
      "A guest-class session appears in an internal service path.",
    action:
      "Validate class, policy, implementation, exception, source mapping, impact, and rollback.",
    confidence:
      "Moderate until effective policy and source health are confirmed.",
  },
  {
    category: "Service-degradation anomaly",
    description:
      "The fictional behavior suggests delay, retries, denials, backlog, partial failure, or dependency instability.",
    example:
      "Supplier-result retries increase while queue age and user delays rise.",
    action:
      "Connect network evidence with service health, queue, supplier, support, user impact, and recovery.",
    confidence:
      "Moderate when multiple independent sources agree.",
  },
  {
    category: "Potential security-relevant anomaly",
    description:
      "The fictional difference affects high-value assets, privileged paths, unexpected identities, destinations, or policy outcomes and requires defensive escalation.",
    example:
      "A privileged service identity reaches an unapproved administrative destination.",
    action:
      "Escalate proportionately, preserve evidence, validate scope, owner, purpose, policy, source health, and impact.",
    confidence:
      "State observation confidence separately from cause or intent.",
  },
  {
    category: "Confirmed impact condition",
    description:
      "Fictional evidence confirms a mission, service, data, identity, policy, privacy, or recovery effect.",
    example:
      "Repeated denials prevent approved notifications and create duplicate user submissions.",
    action:
      "Coordinate containment or correction, recovery, communication, reconciliation, and closure.",
    confidence:
      "High for the confirmed impact; cause may still remain uncertain.",
  },
];

const anomalyRecordFields = [
  {
    field: "Anomaly identifier",
    purpose:
      "Provide a stable fictional reference for evidence, owners, actions, tuning, findings, and closure.",
    strongExample:
      "ANOM-073",
    weakExample:
      "Weird traffic.",
  },
  {
    field: "Observation",
    purpose:
      "State the fictional measured difference without unsupported cause or intent claims.",
    strongExample:
      "Workflow-service destination diversity increased from its approved range of two groups to five groups.",
    weakExample:
      "The workflow service was compromised.",
  },
  {
    field: "Baseline",
    purpose:
      "Identify the fictional version, window, peer group, state, dimensions, owner, and confidence used for comparison.",
    strongExample:
      "Service baseline version 4, normal weekday state, four-week comparison window, source health current.",
    weakExample:
      "Compared with normal.",
  },
  {
    field: "Comparison window",
    purpose:
      "Define the fictional period, state, event, and evidence included in the observation.",
    strongExample:
      "One-hour window after approved application deployment.",
    weakExample:
      "Recently.",
  },
  {
    field: "Context",
    purpose:
      "Record fictional mission, identity, service, change, maintenance, seasonality, supplier, wireless, DNS, failure, or recovery context.",
    strongExample:
      "Approved deployment active; no maintenance exception; new monitoring dependency expected.",
    weakExample:
      "No context.",
  },
  {
    field: "Source health",
    purpose:
      "Describe fictional freshness, completeness, timing, duplication, schema, transformation, and blind periods.",
    strongExample:
      "Collector current, queue normal, clock aligned, application correlation partial.",
    weakExample:
      "Dashboard Green.",
  },
  {
    field: "Alternative explanations",
    purpose:
      "Preserve fictional benign, operational, policy, change, evidence, and dependency possibilities.",
    strongExample:
      "Approved deployment, stale destination mapping, monitoring change, policy drift, or source-correlation error.",
    weakExample:
      "Only an attack.",
  },
  {
    field: "Confidence",
    purpose:
      "State fictional confidence in observation, comparison, scope, cause, and impact separately.",
    strongExample:
      "High confidence in destination change; Moderate in scope; Low in cause; no conclusion about intent.",
    weakExample:
      "Critical certainty.",
  },
  {
    field: "Potential impact",
    purpose:
      "Connect the fictional anomaly to service, user, data, identity, policy, privacy, evidence, or recovery outcomes.",
    strongExample:
      "May expand service reachability and weaken segmentation if the destinations are not approved.",
    weakExample:
      "Everything is at risk.",
  },
  {
    field: "Owner and action",
    purpose:
      "Assign the fictional role responsible for validation, tuning, escalation, correction, recovery, or closure.",
    strongExample:
      "Application owner validates destinations; network owner validates policy; monitoring owner validates source health.",
    weakExample:
      "Security handles it.",
  },
  {
    field: "Status and completion",
    purpose:
      "Track fictional Open, In Review, Expected, Source Degraded, Confirmed Impact, Closed, or Reopened status and closure evidence.",
    strongExample:
      "In Review; complete when destination purpose, policy, source health, user impact, and baseline decision are documented.",
    weakExample:
      "Resolved.",
  },
  {
    field: "Review trigger",
    purpose:
      "Define when the fictional baseline or anomaly logic must be re-evaluated.",
    strongExample:
      "Review after application, destination, identity, firewall, supplier, monitoring, DNS, or recovery change.",
    weakExample:
      "Review later.",
  },
];

const baselineLifecycle = [
  {
    stage: "1. Define the mission question",
    purpose:
      "Identify which fictional network behavior defenders need to understand and which decision it supports.",
    evidence:
      "Service objective, architecture, user journey, owner, risk, support, and recovery need.",
    failure:
      "A vague baseline may measure activity that does not support a useful decision.",
  },
  {
    stage: "2. Select scope and dimensions",
    purpose:
      "Choose fictional identities, services, zones, destinations, times, volumes, directions, policies, and states.",
    evidence:
      "Scope statement, communication register, peer group, environment, and exclusions.",
    failure:
      "Overly broad scope creates noisy averages; overly narrow scope may miss dependencies.",
  },
  {
    stage: "3. Validate evidence sources",
    purpose:
      "Confirm fictional freshness, completeness, timing, schema, transformation, duplication, retention, and ownership.",
    evidence:
      "Source inventory, health metrics, blind periods, field meaning, and data-quality review.",
    failure:
      "Poor evidence quality becomes part of the baseline.",
  },
  {
    stage: "4. Choose baseline windows",
    purpose:
      "Select fictional learning and comparison periods that represent normal, peak, maintenance, degraded, and recovery states.",
    evidence:
      "Calendar, seasonality, change, event, service, support, and source-health history.",
    failure:
      "A short or unusual window may define the wrong expectation.",
  },
  {
    stage: "5. Describe expected ranges",
    purpose:
      "Create fictional ranges, destination sets, schedules, peer patterns, policy outcomes, and state-specific expectations.",
    evidence:
      "Summaries, distributions, approved destinations, owner review, and confidence.",
    failure:
      "One fixed average may hide variation or create false certainty.",
  },
  {
    stage: "6. Review with owners",
    purpose:
      "Ask fictional service, network, identity, supplier, wireless, support, privacy, monitoring, and recovery owners to validate meaning.",
    evidence:
      "Owner decisions, assumptions, exclusions, exceptions, and residual risks.",
    failure:
      "Technical evidence may be misinterpreted without mission context.",
  },
  {
    stage: "7. Detect and triage anomalies",
    purpose:
      "Compare fictional current behavior with the correct baseline and evaluate context, alternatives, source health, scope, and impact.",
    evidence:
      "Observation, baseline version, comparison window, change, maintenance, owner, and source health.",
    failure:
      "Every difference may be escalated, or meaningful anomalies may be dismissed.",
  },
  {
    stage: "8. Tune or update carefully",
    purpose:
      "Adjust fictional ranges, peer groups, states, context, or alerting only after intended behavior is validated.",
    evidence:
      "Owner approval, change record, false-positive review, missed-condition review, residual risk, and validation.",
    failure:
      "Automatic adaptation may normalize unsafe behavior.",
  },
  {
    stage: "9. Recover and reconcile",
    purpose:
      "After fictional failure or anomaly impact, restore service, evidence, policy, identity, communication, and correct business state.",
    evidence:
      "Recovery action, source restoration, validation, reconciliation, user impact, and closure.",
    failure:
      "Network metrics may return to normal while the mission remains incorrect.",
  },
  {
    stage: "10. Revalidate and retire",
    purpose:
      "Review fictional baselines after architecture, service, identity, supplier, wireless, DNS, monitoring, recovery, or mission change.",
    evidence:
      "Version history, trigger, owner decision, new validation, retired source, and lessons learned.",
    failure:
      "Stale baselines produce growing noise and missed conditions.",
  },
];

const evidenceMatrix = [
  {
    id: "BL-01",
    source: "Fictional service baseline summary",
    observation:
      "The workflow service normally communicates with two destination groups during weekday operating periods.",
    supports:
      "A destination-diversity comparison can be made for that service and state.",
    limits:
      "The summary does not prove every future destination outside the set is unsafe or unauthorized.",
    use:
      "Use owner, change, policy, dependency, and source-health evidence before conclusions.",
  },
  {
    id: "BL-02",
    source: "Fictional anomaly record",
    observation:
      "The workflow service reached five destination groups after an approved application deployment.",
    supports:
      "A meaningful change occurred relative to the selected baseline.",
    limits:
      "The change does not prove compromise, harmful intent, or unacceptable policy.",
    use:
      "Validate deployment expectations, destination purpose, effective policy, and business outcome.",
  },
  {
    id: "BL-03",
    source: "Fictional source-health dashboard",
    observation:
      "Network event freshness is current, while application correlation is eleven minutes behind.",
    supports:
      "Network observation confidence may be High while application-context confidence is lower.",
    limits:
      "The delay does not prove missing events or incorrect network behavior.",
    use:
      "Separate confidence by evidence layer and delay final cause interpretation.",
  },
  {
    id: "BL-04",
    source: "Fictional change record",
    observation:
      "The deployment introduced one new monitoring destination and one temporary migration destination.",
    supports:
      "Some destination growth may be expected and time-bound.",
    limits:
      "The record does not explain all five observed destination groups or prove implementation matched approval.",
    use:
      "Map observed groups to approved purpose and expiration.",
  },
  {
    id: "BL-05",
    source: "Fictional policy-decision summary",
    observation:
      "Four destination groups were allowed by current policy; one was denied repeatedly.",
    supports:
      "The anomaly includes both approved and denied communication outcomes.",
    limits:
      "An allowed result does not prove business authorization; a denial does not prove harmful behavior.",
    use:
      "Review intended segmentation, destination ownership, service behavior, and user impact.",
  },
  {
    id: "BL-06",
    source: "Fictional supplier baseline",
    observation:
      "Supplier-result volume is normally higher at the end of reporting periods and after short outages.",
    supports:
      "Seasonality and backlog-release states should have separate expected ranges.",
    limits:
      "A high-volume period is not automatically expected merely because it resembles a past peak.",
    use:
      "Confirm schedule, queue, correlation, source health, and supplier state.",
  },
  {
    id: "BL-07",
    source: "Fictional administrative baseline",
    observation:
      "Most privileged sessions occur during approved maintenance, but emergency access has a separate low-frequency pattern.",
    supports:
      "Normal and emergency administrative states should not share one baseline.",
    limits:
      "Outside-hours access does not automatically prove unauthorized activity.",
    use:
      "Validate identity, device, approval, destination, action, session, and emergency trigger.",
  },
  {
    id: "BL-08",
    source: "Fictional recovery exercise",
    observation:
      "Recovery traffic exceeded normal volume ranges and used broader approved destination groups while normal monitoring was partially degraded.",
    supports:
      "Recovery behavior needs a distinct baseline and alternate evidence.",
    limits:
      "Exercise behavior should not automatically become normal operational expectation.",
    use:
      "Maintain recovery-specific windows, source-health limits, revocation, reconciliation, and closure.",
  },
];

const defects = [
  {
    defect: "One global baseline",
    observation:
      "Fictional traffic from all services, users, devices, zones, and states is averaged together.",
    impact:
      "Meaningful service differences disappear and normal variation creates noise.",
    correction:
      "Create mission-, identity-, service-, destination-, peer-, and state-specific baselines.",
  },
  {
    defect: "Baseline equals allowlist",
    observation:
      "Any fictional behavior not seen in the baseline is treated as prohibited.",
    impact:
      "Legitimate change, growth, maintenance, recovery, or rare workflows may be blocked or misclassified.",
    correction:
      "Use baselines for comparison and review, while authorization remains a separate policy decision.",
  },
  {
    defect: "Anomaly equals attack",
    observation:
      "A fictional deviation is immediately described as malicious compromise.",
    impact:
      "Unsupported certainty may cause unnecessary escalation, blame, or disruption.",
    correction:
      "Separate observation, alternatives, confidence, scope, impact, and validation.",
  },
  {
    defect: "Short learning window",
    observation:
      "A fictional baseline is built from one quiet day or one unusual event.",
    impact:
      "The model may not represent normal schedules, peaks, seasonality, failures, or recovery.",
    correction:
      "Use representative windows and document excluded conditions.",
  },
  {
    defect: "Source-health blindness",
    observation:
      "A fictional volume drop is analyzed without noticing delayed collection and rising queue age.",
    impact:
      "Evidence failure may be mistaken for network behavior.",
    correction:
      "Include freshness, completeness, timing, duplication, schema, transformation, and blind periods.",
  },
  {
    defect: "Automatic normalization",
    observation:
      "Every fictional observed behavior is learned into the baseline without owner validation.",
    impact:
      "Unsafe policy drift or persistent error may become expected.",
    correction:
      "Require intended-purpose, owner, change, policy, evidence, and risk review before updates.",
  },
  {
    defect: "Poor peer grouping",
    observation:
      "Fictional services with different roles, authority, users, and destinations are compared as peers.",
    impact:
      "Legitimate differences become anomalies and meaningful differences may be hidden.",
    correction:
      "Group only genuinely similar mission and environment roles.",
  },
  {
    defect: "No maintenance state",
    observation:
      "Fictional deployment and recovery behavior is compared only with normal operations.",
    impact:
      "Approved change creates noise and defenders may suppress too broadly.",
    correction:
      "Maintain normal, peak, maintenance, degraded, and recovery states.",
  },
  {
    defect: "No business impact link",
    observation:
      "Fictional anomalies are ranked only by statistical difference.",
    impact:
      "Large harmless variation may outrank smaller high-impact policy or identity changes.",
    correction:
      "Include asset value, authority, mission impact, user effect, evidence quality, and recoverability.",
  },
  {
    defect: "Stale baseline lifecycle",
    observation:
      "A fictional baseline remains unchanged after service, identity, supplier, policy, DNS, wireless, or recovery changes.",
    impact:
      "Noise and missed conditions increase over time.",
    correction:
      "Use ownership, versions, triggers, validation, retirement, and lessons learned.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Define the defender question",
    action:
      "State which fictional service, identity, device, zone, supplier, administrative, wireless, DNS, or recovery behavior must be understood.",
    output:
      "Baseline purpose and decision statement.",
    quality:
      "The baseline supports a clear mission or defensive decision.",
  },
  {
    step: "2",
    title: "Choose scope and peer groups",
    action:
      "Select fictional identities, services, environments, destinations, times, states, and genuinely comparable peers.",
    output:
      "Scope, exclusions, and peer-group register.",
    quality:
      "The group is neither organization-wide nor artificially narrow.",
  },
  {
    step: "3",
    title: "Select behavior dimensions",
    action:
      "Choose fictional identity, source class, destination, service, direction, timing, volume, duration, policy, and source-health fields.",
    output:
      "Behavior-dimension matrix.",
    quality:
      "Each dimension supports one defender question.",
  },
  {
    step: "4",
    title: "Validate evidence quality",
    action:
      "Review fictional freshness, completeness, timing, duplication, schema, transformation, retention, correlation, and blind periods.",
    output:
      "Evidence-quality and source-health record.",
    quality:
      "Unreliable periods are excluded or clearly marked.",
  },
  {
    step: "5",
    title: "Define baseline states",
    action:
      "Create fictional normal, peak, maintenance, degraded, supplier-delay, event, and recovery expectations where needed.",
    output:
      "State-specific baseline model.",
    quality:
      "Expected variation is not collapsed into one average.",
  },
  {
    step: "6",
    title: "Document ranges and confidence",
    action:
      "Record fictional destination sets, schedules, ranges, frequencies, policy outcomes, owners, evidence limits, and confidence.",
    output:
      "Baseline version and confidence record.",
    quality:
      "Ranges are explainable and do not claim certainty.",
  },
  {
    step: "7",
    title: "Create anomaly records",
    action:
      "Document fictional observation, baseline version, comparison window, context, source health, alternatives, confidence, impact, owner, action, and status.",
    output:
      "Anomaly-review worksheet.",
    quality:
      "No anomaly is labeled malicious without supporting evidence.",
  },
  {
    step: "8",
    title: "Triage and prioritize",
    action:
      "Rank fictional anomalies using asset value, authority, policy difference, service impact, evidence quality, scope, recoverability, and uncertainty.",
    output:
      "Anomaly-priority and action register.",
    quality:
      "Statistical size is not the only priority factor.",
  },
  {
    step: "9",
    title: "Validate tuning and recovery",
    action:
      "Use invented normal, change, maintenance, source-degraded, supplier, administrative, wireless, policy-drift, failure, and recovery cases.",
    output:
      "Validation, tuning, and recovery matrix.",
    quality:
      "No real network, traffic, account, device, sensor, or system is accessed or tested.",
  },
  {
    step: "10",
    title: "Maintain and communicate",
    action:
      "Assign fictional owners, versions, review dates, triggers, findings, residual risks, baseline-update decisions, retirement, and leadership communication.",
    output:
      "Network baseline and anomaly portfolio package.",
    quality:
      "The final artifact is traceable, maintainable, evidence-aware, and completely fictional.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest definition of a fictional network baseline?",
    choices: [
      "A list of every connection ever observed.",
      "An evidence-supported description of expected behavior for defined identities, services, destinations, times, states, and mission conditions.",
      "A permanent rule that blocks every new behavior.",
      "Proof that observed activity is safe.",
    ],
    answer: 1,
    explanation:
      "A baseline provides contextual expectations for comparison; it does not replace policy or prove safety.",
  },
  {
    question:
      "A service reaches a new destination. What does that prove?",
    choices: [
      "The service is compromised.",
      "The destination is malicious.",
      "A behavior difference occurred; change, purpose, policy, identity, source health, scope, and impact still require review.",
      "The baseline must be deleted.",
    ],
    answer: 2,
    explanation:
      "An anomaly is an observation requiring context, not an automatic conclusion about cause or intent.",
  },
  {
    question:
      "Why should normal, maintenance, degraded, and recovery states have separate baseline context?",
    choices: [
      "Because every state must use different tools.",
      "Because expected timing, volume, destinations, policy, evidence, and ownership may differ significantly by operating state.",
      "Because recovery traffic is always harmful.",
      "Because normal behavior never changes.",
    ],
    answer: 1,
    explanation:
      "State-specific context reduces noise while preserving visibility into unintended behavior.",
  },
  {
    question:
      "A traffic-volume drop occurs while collector queue age rises. What is the strongest response?",
    choices: [
      "Conclude the service stopped communicating.",
      "Conclude the collector was attacked.",
      "Mark evidence Degraded, validate freshness and alternate sources, and delay behavior conclusions until source health is understood.",
      "Update the baseline downward immediately.",
    ],
    answer: 2,
    explanation:
      "Source-health anomalies can resemble changes in the underlying network.",
  },
  {
    question:
      "Why can automatic baseline learning be risky?",
    choices: [
      "Because baselines should never change.",
      "Because persistent policy drift, unsafe behavior, or errors may be normalized without owner and evidence review.",
      "Because all anomalies are attacks.",
      "Because owner context is unnecessary.",
    ],
    answer: 1,
    explanation:
      "Baseline updates should follow validation that new behavior is intended and acceptable.",
  },
  {
    question:
      "Which anomaly should generally receive stronger priority?",
    choices: [
      "The largest statistical difference in every case.",
      "A smaller deviation involving privileged identity, sensitive destination, policy drift, and confirmed mission impact.",
      "Any anomaly with a dramatic title.",
      "Only anomalies occurring at night.",
    ],
    answer: 1,
    explanation:
      "Priority should include authority, asset value, policy, impact, evidence quality, scope, and recoverability.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use real traffic summaries but change organization names.",
      "Use real destination and identity patterns without addresses.",
      "Invent every identity, service, destination, baseline, anomaly, record, owner, date, decision, and outcome from scratch.",
      "Use real monitoring screenshots because the project is defensive.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real architecture, identities, services, evidence, behavior patterns, and internal operations.",
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

export default function NetworkBaselinesAndAnomalyConceptsPage() {
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
              Lesson 7 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Expected Behavior, Variation, and Anomaly Review
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A4.7 Network Baselines and Anomaly Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders define fictional expected network
            behavior using mission, identity, service, destination, timing,
            volume, direction, protocol category, policy, change, maintenance,
            seasonality, source health, degraded operation, recovery, evidence
            limits, and uncertainty.
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
          lessonTitle="Network Baselines and Anomaly Concepts"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented identities, services, destinations, baseline windows, anomalies, evidence, owners, dates, decisions, and outcomes.",
            "I understand that an anomaly is a difference from an expectation, not automatic proof of compromise, intent, cause, or impact.",
            "I will distinguish expected variation, approved change, source-health issues, policy drift, service degradation, security-relevant conditions, and confirmed impact.",
            "I will document baseline scope, peer groups, evidence health, seasonality, maintenance, degraded states, recovery, confidence, and limitations.",
            "I will not automatically learn every observed behavior into a baseline without owner, purpose, policy, evidence, and risk review.",
            "I will not capture, inspect, scan, monitor, test, profile, identify, or analyze any real network traffic, user, device, service, account, sensor, or system.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Different Does Not Automatically Mean Dangerous"
        >
          <p className="leading-8">
            A fictional Northbridge workflow service normally communicates with
            two destination groups. After an approved deployment, it reaches
            five. One new destination is expected for monitoring, one is
            temporary for migration, one is repeatedly denied, and two remain
            unexplained. The difference is real, but the correct response
            requires change, policy, identity, source-health, service, and
            business context—not an immediate claim of compromise.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak conclusion
              </p>
              <p className="mt-2 leading-7">
                “The service reached new destinations, so it was attacked.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong conclusion
              </p>
              <p className="mt-2 leading-7">
                “The fictional service shows a High-confidence destination
                change. Cause is Low confidence. Validate deployment,
                destination purpose, effective policy, source health,
                dependencies, and user impact.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Baselines support comparison. They do not replace architecture,
            authorization, threat modeling, service ownership, or evidence-based
            review.
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
          title="Baselines Help Defenders Recognize Change without Treating Change as Proof"
        >
          <p className="leading-8">
            Fictional networks change because users, services, schedules,
            suppliers, wireless devices, policy, architecture, maintenance,
            failures, and recovery change. Useful baselines help defenders
            notice meaningful differences while preserving uncertainty,
            evidence limits, privacy, ownership, and mission context.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Expected behavior",
                "Describe what fictional identities, services, destinations, timing, volume, policy, and states usually support the mission.",
              ],
              [
                "Contextual anomaly review",
                "Evaluate differences using change, maintenance, seasonality, source health, policy, impact, and alternatives.",
              ],
              [
                "Lifecycle improvement",
                "Tune baselines carefully, recover from failures, preserve history, and revalidate after meaningful change.",
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

        <SectionCard eyebrow="Core Framework" title="The B-A-S-E-L-I-N-E Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "B — Bound the question",
                "Define the fictional service, identity, destination, path, state, mission, and decision the baseline supports.",
              ],
              [
                "A — Assess evidence",
                "Validate fictional freshness, completeness, timing, schema, duplication, transformation, retention, and blind periods.",
              ],
              [
                "S — Select dimensions",
                "Choose fictional identity, source class, destination, service, direction, time, volume, duration, policy, and state.",
              ],
              [
                "E — Establish expected variation",
                "Represent fictional normal, peak, seasonal, maintenance, degraded, supplier, event, and recovery conditions.",
              ],
              [
                "L — Link context",
                "Connect fictional change, owner, architecture, identity, application, policy, source health, and business impact.",
              ],
              [
                "I — Interpret anomalies",
                "Separate fictional observation, alternatives, confidence, scope, cause, impact, and intent.",
              ],
              [
                "N — Normalize carefully",
                "Update fictional expectations only after intended behavior, ownership, policy, evidence, and residual risk are validated.",
              ],
              [
                "E — Escalate proportionately",
                "Choose fictional review, tuning, owner action, containment, recovery, communication, or closure according to evidence and impact.",
              ],
              [
                "E — Evolve the lifecycle",
                "Maintain fictional versions, triggers, validation, lessons learned, retirement, and replacement baselines.",
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
              Decision-ready baseline statement
            </p>
            <p className="mt-2 leading-7">
              This fictional baseline describes expected behavior for a defined
              mission, service, identity, peer group, destination set, time,
              operating state, policy outcome, and evidence source. It documents
              variation, source health, confidence, limitations, owners, anomaly
              actions, update rules, residual risk, and review triggers.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Baselines and Anomalies"
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
            Apply Ten Baseline Principles
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
          title="Build Eight Contextual Baseline Types"
        >
          <div className="grid gap-5">
            {baselineTypes.map((item) => (
              <article
                key={item.baseline}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.baseline}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Dimensions", item.dimensions],
                    ["Expected variation", item.variation],
                    ["Fictional evidence", item.evidence],
                    ["Evidence limit", item.limit],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.baseline}-${label}`}
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 3
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Compare Ten Behavior Dimensions
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {behaviorDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.dimension}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Defender question
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Baseline use
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.baselineUse}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Fictional anomaly example
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.anomalyExample}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Possible alternative explanations
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.alternative}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Classify Eight Anomaly Outcomes"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {anomalyCategories.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.category}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Fictional example
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.example}</p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Proportional action
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.action}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Confidence guidance
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.confidence}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Write Every Anomaly with Twelve Fields"
        >
          <div className="grid gap-5">
            {anomalyRecordFields.map((item, index) => (
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
          eyebrow="Instructional Section 6"
          title="Follow the Ten-Stage Baseline Lifecycle"
        >
          <div className="grid gap-5">
            {baselineLifecycle.map((item) => (
              <article
                key={item.stage}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.stage}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.purpose}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Fictional evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      If weak
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.failure}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Separate Baseline Difference, Authorization, and Impact"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Decision layer",
                    "Question answered",
                    "Fictional evidence",
                    "What it does not prove",
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
                    "Baseline difference",
                    "Did fictional current behavior differ from the selected expected range or set?",
                    "Baseline version, dimensions, comparison window, peer group, and source health.",
                    "That the behavior is unauthorized, harmful, or malicious.",
                  ],
                  [
                    "Change context",
                    "Was a fictional deployment, maintenance, migration, supplier, wireless, DNS, or recovery change expected to alter behavior?",
                    "Change record, owner, expected effect, implementation, rollback, and validation.",
                    "That every observed difference is explained by the change.",
                  ],
                  [
                    "Policy authorization",
                    "Was the fictional communication allowed under intended and effective policy?",
                    "Architecture, communication register, firewall decision, identity, exception, and implementation evidence.",
                    "That the business action was appropriate.",
                  ],
                  [
                    "Service validity",
                    "Did the fictional service need the destination, operation, timing, and state?",
                    "Service dependency, application role, object, workflow, owner, and result.",
                    "That the evidence source or policy was complete.",
                  ],
                  [
                    "Mission impact",
                    "Did the fictional condition affect users, service, data, identity, privacy, support, evidence, or recovery?",
                    "Application state, support, queue, error, notification, user report, and recovery evidence.",
                    "The exact cause or intent behind the impact.",
                  ],
                  [
                    "Closure",
                    "Was the fictional anomaly explained, corrected, tuned, recovered, or accepted with evidence?",
                    "Owner decision, action, validation, baseline update, residual risk, communication, and completion criteria.",
                    "That similar future behavior should be ignored.",
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
          eyebrow="Instructional Section 8"
          title="Prioritize Anomalies by Decision Impact"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Asset and mission value",
                "Does the fictional anomaly involve sensitive data, critical service, identity, administration, supplier, monitoring, DNS, or recovery?",
                "A small difference affecting high-value authority may outrank a large harmless peak.",
              ],
              [
                "Identity and authority",
                "Does the fictional anomaly involve privileged, service, supplier, guest, unmanaged-device, or recovery identity?",
                "Authority changes can increase blast radius even with low volume.",
              ],
              [
                "Destination sensitivity",
                "Is the fictional destination public, application, data, management, monitoring, supplier, DNS, or recovery?",
                "Unexpected management or data destinations often deserve stronger review.",
              ],
              [
                "Policy difference",
                "Does fictional observed behavior differ from architecture, segmentation, firewall, remote-access, or wireless policy?",
                "A policy mismatch may indicate drift, implementation error, exception, or evidence problem.",
              ],
              [
                "Evidence quality",
                "Are fictional sources fresh, complete, independent, correctly timed, and meaningfully correlated?",
                "Low-quality evidence should reduce certainty, not automatically reduce impact.",
              ],
              [
                "Scope",
                "How many fictional users, services, devices, destinations, zones, or states are represented?",
                "Broad scope may increase urgency, but scope itself may be uncertain.",
              ],
              [
                "Confirmed impact",
                "Is there fictional service failure, incorrect state, user harm, privacy effect, evidence loss, or recovery difficulty?",
                "Confirmed mission impact can justify action even when cause remains unknown.",
              ],
              [
                "Recoverability",
                "Can the fictional condition be reversed, isolated, corrected, reconciled, and communicated safely?",
                "Low recoverability may increase priority.",
              ],
              [
                "Persistence and recurrence",
                "Is the fictional anomaly isolated, repeating, growing, seasonal, or linked to a change?",
                "Repeated unexplained conditions may justify stronger validation.",
              ],
              [
                "Owner and decision readiness",
                "Is there a fictional owner, completion criteria, rollback, evidence action, and next review time?",
                "Unowned high-impact anomalies can remain unresolved despite strong alerts.",
              ],
            ].map(([title, question, guidance]) => (
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
                    Priority guidance
                  </p>
                  <p className="mt-2 text-sm leading-6">{guidance}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Baseline View"
          title="Northbridge Contextual Network Baseline"
        >
          <p className="leading-8">
            This conceptual view is completely invented and intentionally
            non-operational. It teaches baseline reasoning without real traffic,
            identities, destinations, addresses, logs, device names, suppliers,
            schedules, monitoring data, or internal architecture.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Normal state", "Expected weekday service and user behavior"],
                ["Peak state", "Enrollment, reporting, event, or batch variation"],
                ["Maintenance state", "Approved change and temporary destinations"],
                ["Degraded state", "Retries, denials, queues, limited services, alternate evidence"],
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
                Fictional Northbridge Baseline Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Identity", "Human, device, service, supplier, administrator, recovery"],
                  ["Source class", "Zone, workload, wireless class, role, environment"],
                  ["Destination", "Application, data, supplier, management, DNS, monitoring, recovery"],
                  ["Service", "Application operation and communication category"],
                  ["Timing", "Schedule, seasonality, maintenance, event, recovery"],
                  ["Volume", "Expected ranges by service, peer, time, state"],
                  ["Policy", "Allow, deny, exception, failure, source health"],
                  ["Evidence", "Freshness, completeness, clock, schema, correlation, confidence"],
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
                ["Recovery state", "Broader approved paths, higher volumes, alternate evidence"],
                ["Anomaly review", "Observation, alternatives, confidence, scope, impact"],
                ["Owner decision", "Expected, tune, validate, escalate, correct, recover, close"],
                ["Lifecycle", "Version, trigger, update, residual risk, retirement"],
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
          title="Fake Northbridge Baseline and Anomaly Dashboard"
          subtitle="Fictional baseline coverage, anomaly status, source health, change context, and review confidence for training only."
          metrics={[
            {
              label: "High-value paths with validated baselines",
              value: "17 / 23",
              note: "Administrative, supplier-recovery, wireless-service, DNS, and two east-west paths need updated context.",
            },
            {
              label: "Open anomalies requiring owner action",
              value: "6",
              note: "Two policy-drift, two source-health, one service-degradation, and one unexplained destination anomaly remain open.",
            },
            {
              label: "Baselines past review trigger",
              value: "4",
              note: "Recent application, supplier, wireless, and recovery changes require revalidation.",
            },
          ]}
        />

        <FakeAlertCard
          title="Workflow Service Destination Diversity Exceeds Baseline"
          severity="High"
          time="2:47 PM"
          source="Fake Northbridge Baseline Assurance Console"
          details="The fictional workflow service reached five destination groups compared with its expected normal-state range of two. One new monitoring destination and one temporary migration destination are documented. One destination is repeatedly denied, while two remain unexplained. Application correlation is delayed by eleven minutes."
          recommendation="Keep the anomaly In Review. Validate fictional deployment, destination purpose, effective policy, owner, application correlation, source health, user impact, expiration, and rollback before tuning the baseline or escalating cause."
        />

        <FakeLogPanel
          title="Fake Baseline and Anomaly Review Timeline"
          logs={[
            "09:00 BASELINE service='workflow' version='4'",
            "09:08 STATE selected='normal-weekday'",
            "09:16 DESTINATION expected-groups='2'",
            "09:24 OBSERVATION destination-groups='5'",
            "09:32 CHANGE deployment='approved'",
            "09:40 CHANGE monitoring-destination='expected'",
            "09:48 CHANGE migration-destination='temporary'",
            "09:56 POLICY allowed-groups='4'",
            "10:04 POLICY denied-groups='1'",
            "10:12 SOURCE network-freshness='current'",
            "10:20 SOURCE application-correlation='delayed-11m'",
            "10:28 CONFIDENCE observation='high'",
            "10:36 CONFIDENCE scope='moderate'",
            "10:44 CONFIDENCE cause='low'",
            "10:52 IMPACT user='unconfirmed'",
            "11:00 OWNER application='assigned'",
            "11:08 OWNER network='assigned'",
            "11:16 STATUS anomaly='in-review'",
            "11:24 CONFIDENCE baseline='moderate'",
            "14:47 ALERT issue='destination-diversity'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Baseline Evidence Supports—and What It Does Not Prove
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
                    ["Baseline use", item.use],
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
          title="Which Anomaly Decision Is Best Supported?"
          question="Which conclusion most responsibly addresses the fictional workflow-service anomaly?"
          evidence={[
            "The normal-state baseline expects two destination groups.",
            "Five destination groups were observed after an approved deployment.",
            "One monitoring destination and one temporary migration destination are documented.",
            "Four destination groups were allowed by current policy and one was repeatedly denied.",
            "Two observed destinations remain unexplained.",
            "Network evidence is current, but application correlation is delayed by eleven minutes.",
            "No supplied evidence confirms user impact, compromise, or malicious intent.",
            "Observation confidence is High; cause confidence is Low.",
          ]}
          options={[
            "Keep the anomaly In Review, validate fictional destination ownership and purpose, deployment expectations, effective policy, application correlation, source health, user impact, temporary expiration, and rollback before tuning or escalation.",
            "Declare the workflow service compromised because it reached new destinations.",
            "Update the baseline to five destinations immediately because the behavior was observed.",
            "Close the anomaly because an approved deployment occurred.",
          ]}
          bestAnswer={0}
          explanation="The first option preserves the strong observation while keeping cause and impact uncertain. It prevents both unsupported escalation and automatic normalization."
        />

        <SectionCard
          eyebrow="Baseline Defects"
          title="Ten Problems That Weaken Baseline and Anomaly Decisions"
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
          title="Build the Northbridge Network Baseline and Anomaly Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            capture, inspect, scan, monitor, test, profile, identify, compare,
            baseline, investigate, or analyze any real network traffic, user,
            device, service, account, destination, sensor, log source, or
            organizational system.
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
          title="A Volume Drop May Be an Evidence Problem"
          scenario="The fictional supplier-result baseline shows a sixty-percent volume drop. At the same time, collector queue age rises, event freshness is delayed, and the application queue still reports normal arrivals."
          choices={[
            {
              label: "Choice A",
              response:
                "Mark the fictional network evidence Degraded, preserve the anomaly, compare alternate application and queue sources, validate collector freshness and completeness, and delay conclusions about supplier behavior until source health is restored.",
              outcome:
                "Best defensive choice. The evidence supports a source-health concern more strongly than a confirmed network drop.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Conclude that the supplier stopped sending results.",
              outcome:
                "Weak. Alternate service evidence conflicts with the network summary.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Lower the baseline immediately to match the observed volume.",
              outcome:
                "Weak. Updating a baseline during degraded evidence can normalize a collection failure.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Repeated Administrative Anomaly May Be Approved Work"
          scenario="A fictional administrator begins accessing a management destination outside the usual maintenance window. Identity and device evidence are current, but the change record is not yet correlated."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the fictional anomaly In Review, validate assignment, approval, destination, action, emergency or on-call context, change record, session evidence, source health, and business impact before escalation or baseline update.",
              outcome:
                "Best choice. It treats privileged differences seriously while preserving uncertainty and legitimate alternatives.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume the administrator is acting maliciously because the time is unusual.",
              outcome:
                "Weak. Unusual timing alone does not establish intent or authorization.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the anomaly because the identity and device are valid.",
              outcome:
                "Weak. Valid identity and device do not prove assignment, purpose, destination, or action authorization.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design Baselines That Adapt without Learning Unsafe Behavior"
        >
          <p className="leading-8">
            Fictional Northbridge introduces a new supplier workflow, changes
            wireless classes, updates firewall policy, increases enrollment
            capacity, and runs a recovery exercise. Leadership wants fewer
            false positives, but defenders do not want automatic learning to
            normalize broad access, stale exceptions, source-health failures, or
            repeated service errors.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Use state-specific baselines",
                "Maintain fictional normal, peak, maintenance, degraded, supplier, wireless-event, and recovery expectations.",
              ],
              [
                "Require owner validation",
                "Do not update fictional destination sets, ranges, or peer groups until purpose, ownership, policy, and impact are confirmed.",
              ],
              [
                "Protect source health",
                "Exclude or annotate fictional delayed, missing, duplicated, malformed, or blind evidence windows.",
              ],
              [
                "Separate baseline and policy",
                "A fictional behavior can be common but unauthorized, or rare but approved.",
              ],
              [
                "Measure false negatives",
                "Review fictional conditions that baselines missed, not only noisy anomalies.",
              ],
              [
                "Preserve residual risk",
                "Document fictional accepted variation, evidence limitations, uncertain dependencies, and review triggers.",
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
              Produce a fictional baseline architecture, state model, peer-group
              register, source-health plan, anomaly taxonomy, update-governance
              workflow, false-positive and false-negative review, recovery
              baseline, residual-risk summary, validation cases, and leadership
              explanation of why observed behavior should not be learned
              automatically.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Network Baselines and Anomaly Concepts Checklist"
          items={[
            "I can explain a fictional network baseline as an evidence-supported expectation rather than an allowlist or proof of safety.",
            "I can define baseline scope by mission, identity, service, destination, time, state, peer group, owner, and evidence.",
            "I can distinguish normal variation, approved change, source-health issues, policy drift, service degradation, security-relevant anomalies, and confirmed impact.",
            "I can use identity, source class, destination, service, direction, timing, volume, duration, policy, and source health as behavior dimensions.",
            "I can build separate normal, peak, maintenance, degraded, supplier, wireless-event, and recovery baseline states.",
            "I can evaluate freshness, completeness, timing, duplication, schema, transformation, correlation, retention, and blind periods.",
            "I can interpret anomalies without assuming cause, compromise, harmful intent, or impact.",
            "I can prioritize anomalies using mission value, authority, destination sensitivity, policy difference, evidence quality, scope, impact, recoverability, persistence, and ownership.",
            "I can prevent automatic baseline learning from normalizing unsafe policy drift or persistent error.",
            "I can connect anomaly review to owner action, tuning, escalation, correction, recovery, communication, residual risk, and closure.",
            "I can maintain fictional baseline versions, review triggers, validation, lessons learned, replacement, and retirement.",
            "I can create a completely fictional baseline artifact without using real traffic, identities, destinations, schedules, behavior profiles, logs, monitoring data, suppliers, or internal architecture.",
          ]}
        />

        <MiniQuiz
          title="A4.7 Mini Quiz: Network Baselines and Anomaly Concepts"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Network Baseline and Anomaly-Review Package for the Northbridge Student-Support Cooperative. Include mission, purpose, scope, stakeholders, exclusions, safety boundary, at least eight baseline types, at least ten behavior dimensions, identities, services, zones, destinations, directions, timing, volume, duration, policy outcomes, peer groups, baseline windows, comparison windows, seasonality, normal state, peak state, maintenance state, degraded state, supplier state, wireless-event state, recovery state, evidence sources, provenance, freshness, completeness, timing, duplication, schema, transformation, correlation, retention, blind periods, at least fifteen fictional anomalies, observation, baseline version, comparison window, context, alternatives, confidence, scope, impact, owner, action, status, completion criteria, false-positive review, false-negative review, tuning, update governance, rollback, recovery, residual risks, review triggers, leadership summary, technical appendix, reflection, and a statement that every organization, identity, service, destination, baseline, anomaly, record, owner, date, decision, and outcome is invented."
          tips={[
            "Begin with fictional defender questions and mission-specific scope instead of one organization-wide average.",
            "Use multiple behavior dimensions and state-specific baselines rather than one fixed threshold.",
            "Separate observation, authorization, service validity, mission impact, cause, and intent.",
            "Do not update a fictional baseline until intended purpose, ownership, policy, evidence, and residual risk are validated.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for DNS Security Concepts?"
        >
          <p className="leading-8">
            Before moving to A4.8, rate your readiness from 1 to 5 for baseline
            purpose, scope, peer groups, dimensions, windows, seasonality,
            change, maintenance, source health, anomaly reasoning, confidence,
            impact, tuning, recovery, lifecycle, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why a fictional anomaly is not proof of compromise or intent.",
              "I can create mission-, service-, identity-, destination-, and state-specific baselines.",
              "I can distinguish expected variation from policy drift, source-health failure, and confirmed impact.",
              "I can identify when evidence quality makes a baseline or anomaly unreliable.",
              "I can use change, maintenance, seasonality, degraded operation, and recovery context.",
              "I can prioritize a smaller high-impact anomaly above a larger harmless variation.",
              "I can update a baseline without automatically normalizing every observed behavior.",
              "I can produce a safe fictional baseline package without copying, analyzing, or exposing real behavior data.",
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
            Record one fictional baseline you narrowed, one expected variation
            you documented, one source-health anomaly, one behavior you refused
            to normalize automatically, one residual risk, and one question you
            will carry into A4.8.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "A fictional network baseline is an evidence-supported model of expected behavior for a defined mission, identity, service, destination, time, state, and peer group.",
            "An anomaly is a difference from an expectation, not automatic proof of compromise, malicious intent, cause, scope, or impact.",
            "Useful baselines combine identity, source class, destination, service, direction, timing, volume, duration, policy, state, and source health.",
            "Normal, peak, maintenance, degraded, supplier, wireless-event, and recovery behavior may require separate baseline states.",
            "Source-health problems can resemble network spikes, drops, new destinations, missing services, or changing peer behavior.",
            "Baseline behavior and authorized behavior are separate: common activity may be unauthorized, while rare activity may be approved.",
            "Automatic learning can normalize policy drift, stale exceptions, repeated error, or unsafe behavior.",
            "Anomaly priority should include mission value, authority, destination, policy, evidence, scope, impact, recoverability, recurrence, and ownership.",
            "Baseline lifecycle requires versions, owners, evidence, confidence, validation, tuning, recovery, residual risk, review triggers, and retirement.",
            "Every CyberShield baseline artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, study fictional DNS as a critical naming, routing, policy,
            evidence, privacy, availability, supplier, change, and recovery
            dependency without manipulating real domains or systems.
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