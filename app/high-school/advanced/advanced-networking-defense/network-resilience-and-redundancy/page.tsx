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
const previousLesson = `${modulePath}/dns-security-concepts`;
const nextLesson = `${modulePath}/advanced-network-defense-lab`;

const objectives = [
  "Explain fictional network resilience as the ability to preserve, degrade safely, restore, validate, and improve mission communication across failures rather than merely adding duplicate devices or links.",
  "Evaluate fictional redundancy for genuine independence across providers, locations, power, identity, DNS, routing, management, monitoring, suppliers, capacity, people, and recovery dependencies.",
  "Design fictional failover, failback, degraded-mode, capacity, health-check, communication, evidence-continuity, recovery-order, reconciliation, and closure decisions.",
  "Analyze fictional resilience evidence without assuming that a backup path, Green dashboard, successful connection, or completed exercise proves full service recovery or independent redundancy.",
  "Create a portfolio-ready fictional network-resilience package with service objectives, dependency maps, failure domains, redundancy patterns, exercises, findings, residual risks, owners, and review triggers.",
];

const vocabulary = [
  [
    "Network resilience",
    "A fictional system's ability to preserve critical communication, degrade safely, restore dependencies, validate outcomes, reconcile state, and improve after disruption.",
  ],
  [
    "Redundancy",
    "A fictional design that provides more than one component, path, service, provider, location, process, or role for a required capability.",
  ],
  [
    "Resilience objective",
    "A fictional statement describing which mission outcome must continue or recover, within which conditions, and with which acceptable limitations.",
  ],
  [
    "Availability",
    "The fictional degree to which an approved service or communication capability is usable when needed.",
  ],
  [
    "High-availability concept",
    "A fictional design intended to reduce interruption through coordinated redundancy, health evaluation, failover, capacity, evidence, and recovery.",
  ],
  [
    "Fault tolerance concept",
    "A fictional design intended to continue a required function despite certain failures without waiting for complete manual restoration.",
  ],
  [
    "Failure domain",
    "A fictional set of components or services that may fail together because they share a dependency, location, provider, power source, management plane, policy, or process.",
  ],
  [
    "Single point of failure",
    "A fictional dependency whose loss can stop a required mission function because no sufficiently independent alternative exists.",
  ],
  [
    "Shared dependency",
    "A fictional resource used by multiple primary and backup paths, such as identity, DNS, power, management, monitoring, provider, location, or approval.",
  ],
  [
    "Correlated failure",
    "A fictional disruption in which multiple supposedly separate components fail together because they share a hidden or documented dependency.",
  ],
  [
    "Diversity",
    "A fictional resilience property in which alternatives differ meaningfully in provider, path, location, technology, management, people, or dependency.",
  ],
  [
    "Independence",
    "A fictional resilience property in which one alternative can function without relying on the same critical failure domain as another.",
  ],
  [
    "Capacity",
    "The fictional amount of approved workload a component, path, service, team, or recovery process can support under normal, peak, degraded, and recovery conditions.",
  ],
  [
    "Headroom",
    "Fictional unused capacity reserved for workload growth, failover, recovery, maintenance, and unexpected demand.",
  ],
  [
    "Failover",
    "The fictional movement of a service or communication function from a primary dependency to an approved alternate after defined health and decision conditions.",
  ],
  [
    "Failback",
    "The fictional controlled return from an alternate dependency to the preferred normal design after stability, validation, reconciliation, and approval.",
  ],
  [
    "Active-active concept",
    "A fictional resilience pattern in which multiple approved components or paths serve workload at the same time.",
  ],
  [
    "Active-passive concept",
    "A fictional resilience pattern in which one component or path serves workload while an alternate remains ready to take over.",
  ],
  [
    "Graceful degradation",
    "A fictional design that preserves the most important mission functions while lower-priority features are limited or paused.",
  ],
  [
    "Fail-limited",
    "A fictional degraded mode in which only pre-approved critical communication continues under tighter scope, evidence, and review.",
  ],
  [
    "Health check",
    "A fictional evidence source used to determine whether a component, path, service, dependency, or business function is ready and operating as expected.",
  ],
  [
    "Recovery sequence",
    "The fictional dependency-aware order in which network, identity, DNS, policy, applications, data, monitoring, suppliers, support, and communication are restored.",
  ],
  [
    "Reconciliation",
    "The fictional process of comparing and correcting business, application, policy, queue, session, naming, evidence, and user state after disruption.",
  ],
  [
    "Resilience review trigger",
    "A fictional event requiring revalidation, such as architecture, provider, location, capacity, identity, DNS, routing, firewall, supplier, monitoring, remote-access, wireless, or recovery change.",
  ],
];

const principles = [
  {
    principle: "Begin with mission outcomes",
    description:
      "Fictional resilience should protect a service outcome, user journey, safety requirement, administrative capability, evidence function, or recovery dependency.",
    strongPractice:
      "Define that case-status viewing must remain available in limited mode even when notification delivery is degraded.",
    failure:
      "A design may keep links or devices online while the mission remains unavailable.",
  },
  {
    principle: "Redundancy must be independent",
    description:
      "Fictional duplicate components are not meaningfully redundant when they share the same provider, power, location, management plane, DNS, identity, or human process.",
    strongPractice:
      "Map primary and alternate paths to their shared and independent failure domains.",
    failure:
      "Two paths may fail together during the exact event they were intended to survive.",
  },
  {
    principle: "Plan capacity for failover",
    description:
      "Fictional alternate paths and services must support the required critical workload during peak, degraded, maintenance, and recovery states.",
    strongPractice:
      "Reserve enough headroom for priority services and define which lower-priority features pause.",
    failure:
      "Failover may succeed technically but collapse under actual demand.",
  },
  {
    principle: "Use business-aware health checks",
    description:
      "Fictional component reachability is weaker evidence than a validated end-to-end mission transaction.",
    strongPractice:
      "Check naming, identity, policy, application response, queue state, user outcome, and evidence health.",
    failure:
      "A Green network path may lead to an unavailable or incorrect service.",
  },
  {
    principle: "Design degraded modes",
    description:
      "Fictional resilience should define which capabilities continue, pause, queue, limit, or require manual review.",
    strongPractice:
      "Keep case viewing available while updates queue and privileged changes stop.",
    failure:
      "Teams may choose between unsafe broad access and complete outage.",
  },
  {
    principle: "Preserve evidence continuity",
    description:
      "Fictional failover and recovery should keep enough source-health, policy, session, application, change, and business-state evidence for decisions.",
    strongPractice:
      "Mark blind periods and use approved alternate evidence when normal monitoring is unavailable.",
    failure:
      "A service may recover while defenders cannot explain what happened or validate correctness.",
  },
  {
    principle: "Separate failover from recovery",
    description:
      "Fictional failover may restore limited service, while full recovery requires dependency repair, validation, reconciliation, communication, and closure.",
    strongPractice:
      "Declare Degraded Operation after failover and Normal Operation only after full validation.",
    failure:
      "Connectivity may be mistaken for complete recovery.",
  },
  {
    principle: "Make failback deliberate",
    description:
      "Fictional return to the primary path can create another disruption if state, caches, sessions, queues, routes, or policies are not reconciled.",
    strongPractice:
      "Use readiness gates, change approval, observation, rollback, and business validation.",
    failure:
      "An unstable or rushed failback can cause repeated outages.",
  },
  {
    principle: "Exercise the whole dependency chain",
    description:
      "Fictional resilience testing should include network, routing, DNS, identity, policy, applications, suppliers, monitoring, support, communication, and recovery roles.",
    strongPractice:
      "Test a complete user journey and evidence path rather than one component.",
    failure:
      "A successful device or path test may hide service, policy, or support failures.",
  },
  {
    principle: "Maintain the lifecycle",
    description:
      "Fictional resilience requires owners, versions, capacity reviews, exercises, findings, residual risks, change triggers, maintenance, and retirement.",
    strongPractice:
      "Revalidate after provider, topology, service, supplier, identity, DNS, policy, staffing, or recovery change.",
    failure:
      "A once-valid recovery design can become stale and misleading.",
  },
];

const resilienceObjectives = [
  {
    objective: "Critical user access",
    mission:
      "Fictional students and staff can view essential case status and approved guidance.",
    normal:
      "Full portal experience with current identity, application, DNS, policy, monitoring, and notification services.",
    degraded:
      "Read-only case viewing with queued updates and clear status communication.",
    recovery:
      "Restore update processing, reconcile queued actions, verify user state, and close communication gaps.",
    evidence:
      "User journey, identity, DNS, policy, application, queue, support, source health, and reconciliation.",
  },
  {
    objective: "Identity and authorization",
    mission:
      "Fictional users and services receive correct authentication and authorization decisions.",
    normal:
      "Primary identity and policy services with current roles, devices, sessions, evidence, and revocation.",
    degraded:
      "Fail-limited access for pre-approved critical users and services; high-impact actions stop.",
    recovery:
      "Restore current identity sources, invalidate stale authority, reconcile sessions, and verify revocation.",
    evidence:
      "Authentication, role, device, policy, session, source health, exception, revocation, and user outcome.",
  },
  {
    objective: "Supplier processing",
    mission:
      "Fictional approved supplier requests and results continue or queue safely.",
    normal:
      "Primary integration path with current identity, DNS, policy, queue, correlation, and monitoring.",
    degraded:
      "Pause new high-risk requests, preserve queued work, and accept only validated results through approved limited paths.",
    recovery:
      "Restore supplier communication, reconcile queues and duplicates, validate results, and communicate delays.",
    evidence:
      "Supplier identity, request, result, queue age, correlation, policy, source health, support, and reconciliation.",
  },
  {
    objective: "Administrative control",
    mission:
      "Fictional defenders can perform approved maintenance and recovery without broad emergency access.",
    normal:
      "Managed administrative devices, privileged identity, approved destinations, session evidence, and change control.",
    degraded:
      "Emergency access limited to critical destinations with independent approval, stronger evidence, and time limits.",
    recovery:
      "Restore normal administration, revoke emergency roles, validate changes, and complete retrospective review.",
    evidence:
      "Identity, device, approval, destination, action, change, session, source health, revocation, and closure.",
  },
  {
    objective: "Naming and service discovery",
    mission:
      "Fictional users and services receive correct approved naming answers.",
    normal:
      "Primary and alternate DNS services with current zones, policy, caches, monitoring, and ownership.",
    degraded:
      "Use approved alternate resolution for critical services with marked policy or evidence limitations.",
    recovery:
      "Restore authoritative and recursive services, reconcile caches, validate applications, and retire temporary values.",
    evidence:
      "Zone version, resolver result, cache state, policy, source health, application outcome, and recovery timeline.",
  },
  {
    objective: "Network visibility",
    mission:
      "Fictional defenders retain enough evidence to understand policy, service, failure, and recovery decisions.",
    normal:
      "Current network, firewall, IDS/IPS, DNS, wireless, remote-access, application, and source-health evidence.",
    degraded:
      "Mark blind periods, preserve alternate evidence, and limit high-impact changes.",
    recovery:
      "Restore sources, validate completeness, identify gaps, reassess prior decisions, and close findings.",
    evidence:
      "Collector health, freshness, queue age, clock, schema, policy version, blind periods, and alternate sources.",
  },
  {
    objective: "Notification continuity",
    mission:
      "Fictional users receive essential status and recovery communication.",
    normal:
      "Primary notification path with current recipient preference, supplier, queue, DNS, policy, and delivery evidence.",
    degraded:
      "Use approved status channels and queue noncritical messages while preserving preference and privacy rules.",
    recovery:
      "Reconcile queued, duplicate, delayed, or failed messages and confirm user-facing state.",
    evidence:
      "Preference, queue, supplier result, delivery category, user confirmation, privacy, and reconciliation.",
  },
  {
    objective: "Recovery coordination",
    mission:
      "Fictional owners restore dependencies in the correct order and make accountable decisions.",
    normal:
      "Current plans, owners, communication paths, evidence, exercises, and access.",
    degraded:
      "Use approved emergency roles, alternate communication, manual decision records, and dependency gates.",
    recovery:
      "Restore normal governance, revoke emergency authority, validate mission outcomes, and record lessons learned.",
    evidence:
      "Trigger, owner, approval, action, dependency state, communication, validation, revocation, and closure.",
  },
];

const redundancyPatterns = [
  {
    pattern: "Multiple network paths",
    purpose:
      "Provide fictional alternate communication between approved zones, locations, services, or providers.",
    independence:
      "Review provider, physical path, location, power, routing policy, management, DNS, monitoring, and support dependencies.",
    capacity:
      "The alternate must support defined priority workload with documented headroom.",
    risk:
      "Two links may share a provider facility, route, power source, or management failure domain.",
    validation:
      "Test end-to-end user and service outcomes, not only path reachability.",
  },
  {
    pattern: "Multiple providers",
    purpose:
      "Reduce fictional reliance on one external connectivity or service provider.",
    independence:
      "Review upstream relationships, facilities, contracts, support, DNS, identity, routing, equipment, and regional dependencies.",
    capacity:
      "Confirm the alternate provider can sustain critical traffic and support escalation.",
    risk:
      "Different provider names may still share infrastructure or geographic risk.",
    validation:
      "Exercise provider failover, policy, monitoring, support, communication, and failback.",
  },
  {
    pattern: "Multiple locations",
    purpose:
      "Provide fictional service or recovery capability across separate sites or environments.",
    independence:
      "Review power, network, identity, DNS, management, supplier, staffing, data, and regional failure domains.",
    capacity:
      "Confirm the alternate location supports required services, people, evidence, and recovery workload.",
    risk:
      "Locations may share cloud region, management, supplier, identity, or data dependencies.",
    validation:
      "Test complete mission workflow, access, data state, evidence, communication, and reconciliation.",
  },
  {
    pattern: "Active-active services",
    purpose:
      "Serve fictional workload across multiple approved instances or paths at the same time.",
    independence:
      "Review shared state, data, policy, load distribution, identity, DNS, monitoring, and management.",
    capacity:
      "Each remaining component must support redistributed critical workload after one fails.",
    risk:
      "A shared software, configuration, policy, or data defect can affect every active component.",
    validation:
      "Test partial failure, load redistribution, state consistency, monitoring, and recovery.",
  },
  {
    pattern: "Active-passive services",
    purpose:
      "Keep a fictional alternate ready to take over after the primary becomes unavailable.",
    independence:
      "Review readiness, update parity, credentials, DNS, policy, state, monitoring, capacity, and human approval.",
    capacity:
      "The passive component must be sized and maintained for defined failover demand.",
    risk:
      "An unused alternate may drift, fail to start, or depend on the same control plane.",
    validation:
      "Exercise startup, traffic shift, application state, evidence, and failback.",
  },
  {
    pattern: "Redundant DNS",
    purpose:
      "Preserve fictional naming and service discovery across resolver or authoritative failures.",
    independence:
      "Review provider, location, policy, zone data, cache, network, management, monitoring, and upstream dependencies.",
    capacity:
      "Alternate resolvers and authoritative services must handle critical query demand.",
    risk:
      "Availability may continue while policy, cache, logging, or answer consistency degrades.",
    validation:
      "Test answers, policy, source health, applications, caches, and recovery reconciliation.",
  },
  {
    pattern: "Redundant identity and policy",
    purpose:
      "Preserve fictional authentication and authorization for critical users and services.",
    independence:
      "Review data replication, policy version, device context, DNS, network, management, time, and revocation dependencies.",
    capacity:
      "Alternate identity services must support priority authentication and policy demand.",
    risk:
      "Stale identity or policy data may allow or deny incorrectly.",
    validation:
      "Test login, service identity, role, device, policy, revocation, evidence, and failback.",
  },
  {
    pattern: "Operational and human redundancy",
    purpose:
      "Ensure fictional recovery decisions do not depend on one person, team, approval channel, or inaccessible document.",
    independence:
      "Review role coverage, authority, communication, documentation, access, training, schedule, and conflict of interest.",
    capacity:
      "Enough trained people must be available for prolonged degraded and recovery operations.",
    risk:
      "Technical redundancy may fail because no authorized or prepared person can operate it.",
    validation:
      "Exercise role handoffs, independent approval, communication, decision records, and fatigue management.",
  },
];

const failureDomains = [
  {
    domain: "Provider failure domain",
    question:
      "Do fictional primary and alternate paths depend on the same external provider, upstream facility, support channel, or contract?",
    evidence:
      "Provider map, upstream relationship, facility class, support path, exercise, and owner attestation.",
    hiddenRisk:
      "Different service labels can still share one upstream dependency.",
    action:
      "Document the shared risk and add diversity or a degraded-mode plan.",
  },
  {
    domain: "Location failure domain",
    question:
      "Do fictional alternatives share the same building, campus, region, environmental condition, or physical access dependency?",
    evidence:
      "Location class, power, network, staffing, recovery site, supplier, and exercise records.",
    hiddenRisk:
      "Separate rooms may not survive the same site-wide event.",
    action:
      "Match geographic diversity to the mission's disruption scenarios.",
  },
  {
    domain: "Power failure domain",
    question:
      "Do fictional network, DNS, identity, monitoring, and management alternatives depend on the same power and cooling chain?",
    evidence:
      "Power-source map, runtime assumption, capacity, maintenance, monitoring, and exercise.",
    hiddenRisk:
      "Duplicate devices may stop together when shared power fails.",
    action:
      "Document runtime, load priority, alternate power, shutdown, and recovery.",
  },
  {
    domain: "Management-plane failure domain",
    question:
      "Can fictional alternatives be operated if the normal management, identity, DNS, remote-access, or approval system is unavailable?",
    evidence:
      "Administrative path, emergency identity, device, approval, alternate communication, and exercise.",
    hiddenRisk:
      "A backup path may exist but be impossible to activate or observe.",
    action:
      "Provide bounded emergency administration with independent evidence and revocation.",
  },
  {
    domain: "Configuration and software failure domain",
    question:
      "Do fictional redundant components share the same policy, software, template, automation, or change error?",
    evidence:
      "Version history, deployment process, diversity rationale, validation, rollback, and exercise.",
    hiddenRisk:
      "Automation can distribute one mistake to every redundant component.",
    action:
      "Use staged change, independent validation, rollback, and safe defaults.",
  },
  {
    domain: "Identity failure domain",
    question:
      "Do fictional primary and alternate services depend on the same identity, role, device, time, or revocation source?",
    evidence:
      "Identity architecture, policy version, replication, fail-limited rules, source health, and exercise.",
    hiddenRisk:
      "A network path may be available while users and services cannot authenticate correctly.",
    action:
      "Design critical fail-limited access with current evidence and strong closure.",
  },
  {
    domain: "DNS failure domain",
    question:
      "Do fictional alternatives depend on the same resolver, authoritative data, cache, forwarding relationship, policy, or management?",
    evidence:
      "DNS dependency map, resolver policy, zone data, cache behavior, source health, and failover exercise.",
    hiddenRisk:
      "A backup destination cannot be reached if naming does not shift correctly.",
    action:
      "Validate naming, policy, cache, application, and recovery behavior together.",
  },
  {
    domain: "Monitoring failure domain",
    question:
      "Do fictional primary and alternate paths rely on the same collector, clock, storage, dashboard, or management service?",
    evidence:
      "Source inventory, freshness, queue age, clock, storage, blind periods, alternate evidence, and exercise.",
    hiddenRisk:
      "Failover may work while defenders lose decision evidence.",
    action:
      "Preserve alternate evidence and limit high-impact actions during blind periods.",
  },
  {
    domain: "Supplier failure domain",
    question:
      "Do fictional primary and backup workflows rely on the same supplier, subcontractor, identity, region, support, or API relationship?",
    evidence:
      "Supplier dependency, contract, shared-responsibility map, alternate process, support, and exercise.",
    hiddenRisk:
      "An internal backup may not help when the external dependency is common.",
    action:
      "Create a safe queue, manual fallback, or alternate provider strategy.",
  },
  {
    domain: "Human and process failure domain",
    question:
      "Do fictional alternatives depend on one person, undocumented step, unavailable approval, or inaccessible recovery document?",
    evidence:
      "Role matrix, handoff, training, document access, approval alternatives, exercise, and retrospective.",
    hiddenRisk:
      "Technical redundancy can fail because the operating process is not resilient.",
    action:
      "Cross-train, document, exercise, and maintain bounded decision authority.",
  },
];

const failoverFields = [
  {
    field: "Failover identifier",
    purpose:
      "Provide a stable fictional reference for trigger, approvals, evidence, actions, findings, reconciliation, and closure.",
    strongExample:
      "RES-FAILOVER-014",
    weakExample:
      "Switch to backup.",
  },
  {
    field: "Mission objective",
    purpose:
      "State which fictional user, service, data, identity, evidence, administrative, or recovery outcome must continue.",
    strongExample:
      "Preserve read-only case access and essential status communication.",
    weakExample:
      "Keep the network up.",
  },
  {
    field: "Trigger and confidence",
    purpose:
      "Define the fictional health, impact, time, capacity, source-health, and owner conditions that justify failover.",
    strongExample:
      "Primary path unavailable for the approved threshold, end-to-end health failed, alternate evidence current, and owner approval recorded.",
    weakExample:
      "When something looks wrong.",
  },
  {
    field: "Primary and alternate dependency",
    purpose:
      "Identify the fictional path, service, provider, location, DNS, identity, policy, monitoring, and management relationships.",
    strongExample:
      "Primary application path A and alternate path B with documented shared identity but independent provider and location.",
    weakExample:
      "Main and backup.",
  },
  {
    field: "Failure-domain review",
    purpose:
      "Record which fictional dependencies are independent and which remain shared.",
    strongExample:
      "Independent provider and location; shared identity, DNS policy, and monitoring storage remain residual risks.",
    weakExample:
      "Fully redundant.",
  },
  {
    field: "Capacity and priority",
    purpose:
      "Define the fictional workload, headroom, critical services, paused features, queue limits, and user groups supported.",
    strongExample:
      "Alternate supports all read access, priority updates, and critical administration; bulk reporting pauses.",
    weakExample:
      "Backup has enough capacity.",
  },
  {
    field: "Degraded-mode policy",
    purpose:
      "Define which fictional functions continue, queue, limit, deny, require approval, or move to manual processing.",
    strongExample:
      "Viewing continues; updates queue; privileged changes require emergency approval; noncritical exports stop.",
    weakExample:
      "Use limited mode.",
  },
  {
    field: "Evidence and communication",
    purpose:
      "Define fictional source health, alternate evidence, blind periods, owner notifications, user status, support scripts, and decision records.",
    strongExample:
      "Mark network collector Degraded, use application and queue evidence, notify owners, and publish approved service status.",
    weakExample:
      "Tell users there is an issue.",
  },
  {
    field: "Validation gates",
    purpose:
      "Define fictional network, DNS, identity, policy, application, supplier, monitoring, user, and business checks.",
    strongExample:
      "Confirm approved naming, identity, policy, read-only transaction, queue preservation, alerting, support, and user outcome.",
    weakExample:
      "Ping the backup.",
  },
  {
    field: "Rollback and failback",
    purpose:
      "Define how the fictional failover is reversed or how the service returns to the preferred path.",
    strongExample:
      "Restore primary health, reconcile state, approve failback, shift limited workload, observe, complete migration, and retain rollback.",
    weakExample:
      "Switch back when ready.",
  },
  {
    field: "Reconciliation and closure",
    purpose:
      "Define how fictional queues, sessions, changes, messages, caches, policy, evidence, user state, and exceptions are corrected.",
    strongExample:
      "Reconcile queued updates, duplicates, failed notifications, sessions, DNS caches, blind periods, and emergency roles.",
    weakExample:
      "Close after service returns.",
  },
  {
    field: "Review trigger",
    purpose:
      "Define which fictional changes require the resilience decision to be revalidated.",
    strongExample:
      "Review after provider, capacity, routing, DNS, identity, policy, monitoring, supplier, application, or recovery change.",
    weakExample:
      "Review annually.",
  },
];

const lifecycle = [
  {
    stage: "1. Define mission resilience",
    purpose:
      "The fictional organization identifies which user, service, identity, administrative, evidence, supplier, and recovery outcomes must continue or recover.",
    evidence:
      "Mission objective, criticality, users, data, service dependencies, acceptable degradation, and owners.",
    failure:
      "Technical uptime may be optimized while essential user outcomes remain unavailable.",
  },
  {
    stage: "2. Map dependencies and failure domains",
    purpose:
      "The fictional team documents primary, alternate, and shared network, provider, location, power, DNS, identity, policy, monitoring, supplier, and human dependencies.",
    evidence:
      "Dependency map, ownership, diversity, independence, failure-domain assumptions, and residual risks.",
    failure:
      "Hidden shared dependencies create correlated failure.",
  },
  {
    stage: "3. Set service objectives",
    purpose:
      "The fictional team defines required availability, degraded functions, restoration timing, data or queue tolerance, evidence needs, and communication.",
    evidence:
      "Service objective, priority classes, recovery targets, business impact, support, privacy, and approval.",
    failure:
      "Teams cannot decide which services to preserve or restore first.",
  },
  {
    stage: "4. Design redundancy and capacity",
    purpose:
      "The fictional architecture adds appropriate alternate paths, services, providers, locations, people, and evidence sources.",
    evidence:
      "Pattern choice, capacity, headroom, independence, management, monitoring, policy, cost, and owner review.",
    failure:
      "Backup capability may be insufficient, dependent, stale, or impossible to operate.",
  },
  {
    stage: "5. Define failover and degraded modes",
    purpose:
      "The fictional organization establishes triggers, approvals, automatic and manual actions, limitations, evidence, communication, and rollback.",
    evidence:
      "Health checks, confidence, owner, priority workload, fail-limited policy, source health, and decision record.",
    failure:
      "Failover may happen too early, too late, or without safe limitations.",
  },
  {
    stage: "6. Validate end-to-end readiness",
    purpose:
      "The fictional team tests complete user and service journeys across network, DNS, identity, policy, applications, suppliers, monitoring, and support.",
    evidence:
      "Scenario, expected result, actual result, source health, user outcome, capacity, findings, and rollback.",
    failure:
      "Component success may hide mission failure.",
  },
  {
    stage: "7. Operate during disruption",
    purpose:
      "The fictional team preserves critical functions, records decisions, communicates status, monitors capacity, and protects trust boundaries.",
    evidence:
      "Trigger, actions, degraded mode, health, capacity, queues, policy, source health, support, and communications.",
    failure:
      "Operational pressure may create broad access, undocumented workarounds, or evidence loss.",
  },
  {
    stage: "8. Restore and fail back",
    purpose:
      "The fictional team repairs the primary dependency, validates stability, reconciles state, and returns through controlled change.",
    evidence:
      "Primary health, dependency readiness, state comparison, approval, phased shift, observation, rollback, and business validation.",
    failure:
      "Rushed failback can create a second disruption.",
  },
  {
    stage: "9. Reconcile and close",
    purpose:
      "The fictional organization corrects queues, sessions, records, messages, caches, policy, data, user state, evidence gaps, and emergency access.",
    evidence:
      "Reconciliation register, user outcome, support, source restoration, revocation, residual risk, and closure approval.",
    failure:
      "Service may appear normal while hidden business and access errors remain.",
  },
  {
    stage: "10. Improve and maintain",
    purpose:
      "The fictional team records lessons, assigns findings, updates capacity and architecture, repeats exercises, and retires stale alternatives.",
    evidence:
      "Retrospective, findings, owners, completion criteria, due dates, versions, review triggers, and next exercise.",
    failure:
      "The same weaknesses recur and backup systems drift.",
  },
];

const evidenceMatrix = [
  {
    id: "RES-01",
    source: "Fictional dependency and failure-domain map",
    observation:
      "The primary and alternate application paths use different providers but share identity, DNS policy, monitoring storage, and one management process.",
    supports:
      "Connectivity diversity exists, while several control and evidence failure domains remain shared.",
    limits:
      "The map does not prove those shared dependencies will fail or that failover is ineffective.",
    use:
      "Document residual risk and design fail-limited identity, DNS, monitoring, and management alternatives.",
  },
  {
    id: "RES-02",
    source: "Fictional capacity review",
    observation:
      "The alternate path supports all read traffic but only forty percent of peak update and reporting demand.",
    supports:
      "A degraded-mode priority plan is required during failover.",
    limits:
      "Capacity estimates do not prove real performance under every failure or demand condition.",
    use:
      "Preserve essential reads and priority updates while pausing bulk reporting and noncritical exports.",
  },
  {
    id: "RES-03",
    source: "Fictional failover exercise",
    observation:
      "Network connectivity shifted successfully, but DNS answers remained mixed, remote support failed, and monitoring evidence was incomplete.",
    supports:
      "Path failover alone does not provide full service, support, naming, or evidence resilience.",
    limits:
      "One exercise does not establish every current production condition or future failure.",
    use:
      "Add DNS, remote-access, monitoring, communication, reconciliation, and closure gates.",
  },
  {
    id: "RES-04",
    source: "Fictional health-check review",
    observation:
      "Link and gateway checks remained Green while the end-to-end case-update transaction failed.",
    supports:
      "Component reachability is insufficient for mission-aware readiness decisions.",
    limits:
      "The transaction failure does not identify one cause or prove the network path is unhealthy.",
    use:
      "Use layered health checks and preserve separate confidence for each dependency.",
  },
  {
    id: "RES-05",
    source: "Fictional source-health dashboard",
    observation:
      "The alternate network collector is current, while application correlation and DNS evidence are delayed during failover.",
    supports:
      "Evidence confidence differs across network, application, and naming layers.",
    limits:
      "Delayed application and DNS evidence does not prove failed service or lost events.",
    use:
      "Mark those layers Degraded and use approved alternate business and support evidence.",
  },
  {
    id: "RES-06",
    source: "Fictional supplier continuity review",
    observation:
      "Primary and backup internal paths both rely on the same supplier result service and support process.",
    supports:
      "Internal network redundancy does not remove the common external dependency.",
    limits:
      "The shared supplier does not prove poor reliability or an active failure.",
    use:
      "Design safe queuing, manual review, user communication, and supplier recovery evidence.",
  },
  {
    id: "RES-07",
    source: "Fictional failback record",
    observation:
      "A prior return to the primary path caused duplicate notifications because queued state was not reconciled before traffic shifted.",
    supports:
      "Failback requires queue, message, session, cache, and business-state reconciliation.",
    limits:
      "One prior defect does not prove every failback will fail.",
    use:
      "Add phased failback, duplicate controls, validation, rollback, and user-state checks.",
  },
  {
    id: "RES-08",
    source: "Fictional recovery-role exercise",
    observation:
      "Technical alternatives were ready, but the only authorized approver was unavailable for twenty-six minutes.",
    supports:
      "Human authority and communication are resilience dependencies.",
    limits:
      "The delay does not prove the approval model is always inadequate.",
    use:
      "Add trained alternate approvers with bounded authority, handoff evidence, and retrospective review.",
  },
];

const defects = [
  {
    defect: "Duplicate is treated as independent",
    observation:
      "Fictional primary and backup devices share the same provider, power, management, DNS, and location.",
    impact:
      "One failure domain can remove both alternatives.",
    correction:
      "Map independence explicitly and disclose shared residual risk.",
  },
  {
    defect: "No failover capacity",
    observation:
      "A fictional alternate path is available but cannot support peak critical demand.",
    impact:
      "Failover may create severe slowdown, dropped work, or unsafe prioritization.",
    correction:
      "Define capacity, headroom, priority services, queues, and paused features.",
  },
  {
    defect: "Health check equals mission health",
    observation:
      "Fictional link and device checks are Green while the user transaction fails.",
    impact:
      "Automated or human decisions may declare readiness incorrectly.",
    correction:
      "Use layered component, dependency, application, evidence, and user-journey checks.",
  },
  {
    defect: "Failover equals recovery",
    observation:
      "Fictional connectivity returns and the incident is closed immediately.",
    impact:
      "DNS, identity, policy, application, queue, monitoring, support, and business-state problems may remain.",
    correction:
      "Use Degraded Operation, recovery gates, reconciliation, and closure criteria.",
  },
  {
    defect: "No degraded mode",
    observation:
      "A fictional service either runs fully or stops completely.",
    impact:
      "Teams may create unsafe emergency access or unnecessary mission outage.",
    correction:
      "Define critical, limited, queued, manual, and paused functions.",
  },
  {
    defect: "Shared control plane",
    observation:
      "Fictional backup paths cannot be activated when identity, DNS, management, or approval services fail.",
    impact:
      "Technical redundancy becomes unusable during disruption.",
    correction:
      "Design bounded alternate administration, evidence, naming, identity, and authority.",
  },
  {
    defect: "Monitoring disappears during failover",
    observation:
      "Fictional alternate paths restore service but do not provide current policy or source-health evidence.",
    impact:
      "Defenders may operate blindly during a high-risk state.",
    correction:
      "Preserve alternate evidence, mark blind periods, and limit high-impact actions.",
  },
  {
    defect: "Failback without reconciliation",
    observation:
      "Fictional traffic returns to the primary path before queues, sessions, caches, messages, and policy state are aligned.",
    impact:
      "Duplicate, missing, stale, or inconsistent outcomes may occur.",
    correction:
      "Use phased failback with state comparison, validation, observation, and rollback.",
  },
  {
    defect: "Technical-only exercise",
    observation:
      "A fictional test confirms path reachability but excludes identity, DNS, suppliers, applications, support, communication, and users.",
    impact:
      "The exercise may report success while the mission remains unavailable.",
    correction:
      "Test complete user journeys and recovery decisions.",
  },
  {
    defect: "No maintenance lifecycle",
    observation:
      "Fictional backups, runbooks, capacity estimates, contacts, and approvals are not reviewed after change.",
    impact:
      "Alternatives drift and fail when needed.",
    correction:
      "Use owners, versions, exercises, triggers, findings, due dates, and retirement.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Define mission-resilience objectives",
    action:
      "List the fictional user, application, identity, supplier, administrative, evidence, communication, and recovery outcomes that must continue or recover.",
    output:
      "Mission-resilience and criticality register.",
    quality:
      "Each objective describes a user or service outcome rather than only device uptime.",
  },
  {
    step: "2",
    title: "Map primary, alternate, and shared dependencies",
    action:
      "Document fictional providers, paths, locations, power, routing, DNS, identity, policy, monitoring, suppliers, people, and management.",
    output:
      "Dependency and failure-domain map.",
    quality:
      "Shared dependencies are visible instead of being described as fully redundant.",
  },
  {
    step: "3",
    title: "Choose resilience patterns",
    action:
      "Select fictional multiple paths, providers, locations, active-active, active-passive, DNS, identity, monitoring, supplier, and human alternatives where justified.",
    output:
      "Redundancy-pattern decision matrix.",
    quality:
      "Each pattern connects to one failure scenario and mission objective.",
  },
  {
    step: "4",
    title: "Plan capacity and priorities",
    action:
      "Define fictional normal, peak, degraded, failover, maintenance, and recovery demand with headroom and priority classes.",
    output:
      "Capacity, headroom, queue, and feature-priority plan.",
    quality:
      "The alternate supports the documented critical workload.",
  },
  {
    step: "5",
    title: "Design health checks and triggers",
    action:
      "Define fictional component, network, DNS, identity, policy, application, supplier, evidence, support, and user-journey checks.",
    output:
      "Health-check, confidence, and failover-trigger matrix.",
    quality:
      "No single Green indicator determines complete mission health.",
  },
  {
    step: "6",
    title: "Define degraded operation",
    action:
      "Classify fictional functions as continue, limit, queue, manual, deny, or pause with owners, evidence, support, and communication.",
    output:
      "Degraded-mode service matrix.",
    quality:
      "The design preserves critical outcomes without broad trust expansion.",
  },
  {
    step: "7",
    title: "Design failover and failback",
    action:
      "Record fictional triggers, approvals, actions, capacity, validation, communication, observation, rollback, reconciliation, and closure.",
    output:
      "Failover, failback, and decision workflow.",
    quality:
      "Failback is treated as a separate controlled change.",
  },
  {
    step: "8",
    title: "Preserve evidence and communication",
    action:
      "Define fictional source health, alternate evidence, blind periods, owner updates, user status, support guidance, and decision records.",
    output:
      "Evidence-continuity and communication plan.",
    quality:
      "Defenders and users can understand the current operating state and limitations.",
  },
  {
    step: "9",
    title: "Exercise complete scenarios",
    action:
      "Use invented provider, path, DNS, identity, policy, supplier, monitoring, capacity, management, failback, and human-availability failures.",
    output:
      "Resilience exercise and findings matrix.",
    quality:
      "No real network, route, provider, device, service, account, or recovery system is accessed or changed.",
  },
  {
    step: "10",
    title: "Reconcile, improve, and maintain",
    action:
      "Assign fictional findings, owners, completion criteria, residual risks, architecture updates, capacity changes, next exercises, review triggers, and retirement.",
    output:
      "Network-resilience governance and portfolio package.",
    quality:
      "The final artifact is traceable, maintainable, evidence-aware, and completely fictional.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest definition of fictional network resilience?",
    choices: [
      "Having two network devices.",
      "Preserving critical mission communication, degrading safely, restoring dependencies, validating outcomes, reconciling state, and improving after disruption.",
      "Preventing every possible outage.",
      "Keeping every feature available at full capacity.",
    ],
    answer: 1,
    explanation:
      "Resilience is an end-to-end mission capability, not merely duplicate infrastructure.",
  },
  {
    question:
      "Two fictional links use different device names but share one provider and physical path. What is the strongest conclusion?",
    choices: [
      "They are fully independent.",
      "They provide some component redundancy but share an important failure domain.",
      "They can never fail.",
      "They should be treated as separate providers.",
    ],
    answer: 1,
    explanation:
      "Redundancy should be evaluated through actual dependencies rather than labels or device count.",
  },
  {
    question:
      "A backup path restores connectivity, but DNS, remote support, and monitoring remain degraded. What is the correct operating state?",
    choices: [
      "Normal operation is fully restored.",
      "The event is closed.",
      "Degraded operation continues until dependency, evidence, service, and business validation are complete.",
      "The backup path should be removed.",
    ],
    answer: 2,
    explanation:
      "Connectivity failover is only one part of full service recovery.",
  },
  {
    question:
      "Why must fictional alternate capacity be reviewed?",
    choices: [
      "Because backup paths always have unlimited capacity.",
      "Because failover can technically succeed while critical demand exceeds the alternate's usable headroom.",
      "Because capacity replaces health checks.",
      "Because every feature must remain available.",
    ],
    answer: 1,
    explanation:
      "Capacity planning supports safe prioritization, graceful degradation, and realistic recovery.",
  },
  {
    question:
      "Which is the strongest fictional health check?",
    choices: [
      "One device responds.",
      "One link is Green.",
      "A layered check validates network, DNS, identity, policy, application, evidence, and an approved user journey.",
      "No alert appears.",
    ],
    answer: 2,
    explanation:
      "Mission-aware readiness requires multiple dependency and outcome checks.",
  },
  {
    question:
      "Why should failback be treated as a controlled change?",
    choices: [
      "Because the primary path should never be used again.",
      "Because queues, sessions, caches, messages, policies, and state may differ after degraded operation.",
      "Because failback requires no validation.",
      "Because the alternate is always safer.",
    ],
    answer: 1,
    explanation:
      "State and dependency reconciliation are necessary to avoid a second disruption.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use real provider and topology details without addresses.",
      "Use actual recovery results with names removed.",
      "Invent every provider, path, service, dependency, exercise, owner, date, decision, and outcome from scratch.",
      "Use real diagrams because the project is defensive.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real architecture, dependencies, providers, recovery capabilities, and failure information.",
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

export default function NetworkResilienceAndRedundancyPage() {
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
              Lesson 9 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Mission Continuity, Failover, and Recovery
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A4.9 Network Resilience and Redundancy
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders design fictional networks to
            preserve critical mission outcomes, avoid hidden shared failure
            domains, support priority workload, fail over safely, operate in
            degraded modes, retain decision evidence, restore dependencies,
            reconcile state, fail back carefully, and improve through exercises.
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
          lessonTitle="Network Resilience and Redundancy"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented providers, paths, locations, services, dependencies, exercises, evidence, owners, dates, decisions, and outcomes.",
            "I understand that duplicate devices or links do not prove independent redundancy.",
            "I will evaluate network, DNS, identity, policy, applications, suppliers, monitoring, management, people, capacity, communication, and recovery together.",
            "I will separate failover, degraded operation, recovery, reconciliation, failback, and closure.",
            "I will not assume that connectivity, a Green health check, or a completed exercise proves full mission resilience.",
            "I will not test, disrupt, fail over, reroute, disconnect, configure, inspect, or modify any real network, provider, device, service, account, route, DNS system, or recovery environment.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Two Links Can Still Be One Failure Domain"
        >
          <p className="leading-8">
            Fictional Northbridge has a primary and backup network link. They use
            different edge devices, but both depend on the same provider
            facility, power chain, DNS policy, identity service, monitoring
            storage, and approval process. During an exercise, connectivity
            shifts successfully, yet naming becomes inconsistent, remote support
            cannot authenticate, monitoring loses application context, and the
            alternate path reaches capacity.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak conclusion
              </p>
              <p className="mt-2 leading-7">
                “The backup link became active, so resilience worked.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong conclusion
              </p>
              <p className="mt-2 leading-7">
                “The fictional network path failed over, but service, DNS,
                identity, evidence, capacity, support, and recovery confidence
                remain incomplete. The environment is operating in a Degraded
                state.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Redundancy counts alternatives. Resilience proves that critical
            mission outcomes can continue or recover through real failure
            conditions.
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
          title="Mission Resilience Depends on More Than Connectivity"
        >
          <p className="leading-8">
            Fictional services rely on network paths, routing, DNS, identity,
            policy, applications, data, suppliers, monitoring, remote access,
            wireless, people, capacity, support, communication, and recovery
            processes. An alternate link may preserve packets while the actual
            user journey remains unavailable or incorrect.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Independent alternatives",
                "Understand which fictional providers, locations, power, control, identity, DNS, and human dependencies are truly separate.",
              ],
              [
                "Safe degraded operation",
                "Preserve the most important fictional functions while lower-priority work queues, limits, pauses, or moves to manual review.",
              ],
              [
                "Validated recovery",
                "Restore fictional dependencies in order, reconcile state, communicate clearly, revoke emergency access, and close only after mission validation.",
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

        <SectionCard eyebrow="Core Framework" title="The R-E-S-I-L-I-E-N-T Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {[
              [
                "R — Rank mission outcomes",
                "Define fictional critical user, service, identity, evidence, supplier, administrative, and recovery objectives.",
              ],
              [
                "E — Expose dependencies",
                "Map fictional network, provider, location, power, routing, DNS, identity, policy, monitoring, supplier, people, and management.",
              ],
              [
                "S — Separate failure domains",
                "Distinguish fictional independent alternatives from shared control, location, provider, power, data, and human dependencies.",
              ],
              [
                "I — Include capacity",
                "Plan fictional normal, peak, maintenance, degraded, failover, recovery, queue, and headroom requirements.",
              ],
              [
                "L — Limit degraded functions",
                "Decide which fictional features continue, queue, require approval, move to manual processing, or pause.",
              ],
              [
                "I — Instrument health",
                "Use fictional component, path, DNS, identity, policy, application, source-health, support, and user-journey checks.",
              ],
              [
                "E — Execute failover safely",
                "Use fictional triggers, confidence, owners, evidence, communication, capacity, rollback, and observation.",
              ],
              [
                "N — Normalize through recovery",
                "Restore fictional dependencies, reconcile state, revoke emergency access, validate users, and fail back carefully.",
              ],
              [
                "T — Test the complete mission",
                "Exercise fictional end-to-end scenarios, record findings, assign owners, and update architecture and procedures.",
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
              Decision-ready resilience statement
            </p>
            <p className="mt-2 leading-7">
              This fictional design protects a defined mission outcome through
              documented primary, alternate, and shared dependencies; capacity;
              health checks; failover; degraded operation; evidence continuity;
              communication; recovery order; reconciliation; failback; residual
              risk; owners; and review triggers.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Network Resilience and Redundancy"
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
            Apply Ten Resilience Principles
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
          title="Define Eight Mission-Resilience Objectives"
        >
          <div className="grid gap-5">
            {resilienceObjectives.map((item) => (
              <article
                key={item.objective}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.objective}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Mission outcome", item.mission],
                    ["Normal operation", item.normal],
                    ["Degraded operation", item.degraded],
                    ["Recovery and reconciliation", item.recovery],
                    ["Fictional evidence", item.evidence],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.objective}-${label}`}
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
          title="Compare Eight Redundancy Patterns"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {redundancyPatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.pattern}
                </h3>

                <div className="mt-4 grid gap-4">
                  {[
                    ["Purpose", item.purpose],
                    ["Independence review", item.independence],
                    ["Capacity", item.capacity],
                    ["Hidden risk", item.risk],
                    ["Validation", item.validation],
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 4
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Review Ten Failure Domains
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {failureDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.domain}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Review question
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Fictional evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Hidden risk
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.hiddenRisk}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Design action
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.action}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Write Every Failover Decision with Twelve Fields"
        >
          <div className="grid gap-5">
            {failoverFields.map((item, index) => (
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
          title="Follow the Ten-Stage Resilience Lifecycle"
        >
          <div className="grid gap-5">
            {lifecycle.map((item) => (
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
          title="Separate Connectivity, Service, Evidence, and Recovery"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Resilience layer",
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
                    "Component availability",
                    "Is the fictional device, link, gateway, resolver, identity service, or application component reachable?",
                    "Component health, time, source health, capacity, policy version, and dependency status.",
                    "That the end-to-end mission works.",
                  ],
                  [
                    "Path availability",
                    "Can fictional approved communication traverse the intended route or alternate route?",
                    "Source, destination, direction, policy result, latency category, capacity, and source health.",
                    "That DNS, identity, application, data, or user state is correct.",
                  ],
                  [
                    "Service availability",
                    "Can the fictional application perform the required function?",
                    "Application transaction, dependency health, error state, queue, policy, and owner validation.",
                    "That every user journey or later business effect is correct.",
                  ],
                  [
                    "Mission continuity",
                    "Can fictional users and services achieve the required outcome under normal or degraded conditions?",
                    "User journey, business state, support, accessibility, communication, queue, and confirmation.",
                    "That all lower-priority functions are restored.",
                  ],
                  [
                    "Evidence continuity",
                    "Can fictional defenders explain decisions and source health during disruption?",
                    "Network, DNS, identity, policy, application, support, alternate evidence, blind periods, and provenance.",
                    "That missing evidence means nothing harmful occurred.",
                  ],
                  [
                    "Full recovery",
                    "Are fictional dependencies restored, emergency access revoked, state reconciled, users informed, and findings closed?",
                    "Recovery sequence, validation, reconciliation, source restoration, communication, residual risk, and closure.",
                    "That the same failure cannot happen again.",
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
          title="Design Capacity, Degraded Modes, and Recovery Gates"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Normal capacity",
                "Define fictional expected demand, growth, service objectives, utilization ranges, and maintenance needs.",
                "A normal average may not represent peaks or failover.",
              ],
              [
                "Peak capacity",
                "Model fictional enrollment, reporting, event, supplier backlog, notification, and recovery demand.",
                "Peak conditions may combine rather than occur separately.",
              ],
              [
                "Failover capacity",
                "Confirm fictional alternate path and service capacity for priority users, updates, administration, DNS, identity, monitoring, and suppliers.",
                "Technical availability without headroom may still create mission failure.",
              ],
              [
                "Priority classes",
                "Rank fictional read access, critical updates, identity, DNS, administration, monitoring, support, reporting, and exports.",
                "Priority should reflect mission and safety, not only technical convenience.",
              ],
              [
                "Queue strategy",
                "Define which fictional requests, updates, supplier results, notifications, and reports may queue safely.",
                "Queues can create duplicates, stale state, and recovery workload.",
              ],
              [
                "Manual fallback",
                "Define fictional human review, paper or offline record concept, approval, privacy, reconciliation, and closure where justified.",
                "Manual workarounds need authorization and evidence.",
              ],
              [
                "Recovery gates",
                "Require fictional network, DNS, identity, policy, application, data, supplier, monitoring, support, and user validations in dependency order.",
                "One successful transaction should not close the whole event.",
              ],
              [
                "Failback gates",
                "Require fictional primary stability, state reconciliation, capacity, source health, approval, phased shift, observation, and rollback.",
                "Returning too early can create another outage.",
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
          eyebrow="Fictional Resilience View"
          title="Northbridge Network-Resilience Architecture"
        >
          <p className="leading-8">
            This conceptual view is completely invented and intentionally
            non-operational. It teaches dependency and recovery reasoning
            without real providers, routes, addresses, facilities, power
            systems, accounts, device names, capacities, contracts, or internal
            recovery details.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Primary operation", "Preferred network, DNS, identity, policy, application, supplier, monitoring"],
                ["Alternate operation", "Independent path, capacity, approved dependencies, evidence"],
                ["Degraded mode", "Critical functions, queues, limits, manual review, communication"],
                ["Emergency control", "Bounded administration, approval, evidence, time limit, revocation"],
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
                Fictional Northbridge Resilience Decision Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Mission", "Users, services, identity, supplier, administration, evidence"],
                  ["Dependencies", "Provider, path, location, power, routing, DNS, policy"],
                  ["Capacity", "Normal, peak, failover, queue, headroom, priority"],
                  ["Health", "Component, path, DNS, identity, application, user journey"],
                  ["Failover", "Trigger, confidence, owner, action, communication, rollback"],
                  ["Evidence", "Source health, blind periods, alternate sources, decisions"],
                  ["Recovery", "Dependency order, validation, reconciliation, revocation"],
                  ["Lifecycle", "Exercises, findings, owners, triggers, improvement, retirement"],
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
                ["Service restoration", "Application, data, queues, supplier, notification, support"],
                ["Failback", "Primary stability, phased shift, observation, rollback"],
                ["Reconciliation", "Sessions, caches, messages, records, user state, evidence"],
                ["Improvement", "Findings, capacity, architecture, exercise, residual risk"],
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
          title="Fake Northbridge Network-Resilience Dashboard"
          subtitle="Fictional dependency independence, capacity, health, exercises, recovery, and residual-risk status for training only."
          metrics={[
            {
              label: "Critical services with validated failover",
              value: "6 / 9",
              note: "Notification, remote support, and monitoring services still have incomplete end-to-end failover evidence.",
            },
            {
              label: "Open shared failure domains",
              value: "5",
              note: "Identity, DNS policy, monitoring storage, supplier processing, and approval authority remain shared across alternatives.",
            },
            {
              label: "Failover paths with sufficient peak headroom",
              value: "4 / 7",
              note: "Three fictional alternate paths require degraded-mode priority and queue controls.",
            },
          ]}
        />

        <FakeAlertCard
          title="Backup Path Active but Mission Recovery Is Incomplete"
          severity="High"
          time="4:26 PM"
          source="Fake Northbridge Resilience Assurance Console"
          details="The fictional alternate network path is active and basic connectivity is available. DNS answers remain inconsistent, remote support authentication is failing, application correlation is delayed, and the alternate path is above its approved priority-capacity range."
          recommendation="Maintain Degraded Operation. Preserve priority services, pause lower-priority work, validate DNS, identity, policy, application, source health, capacity, support, and user outcomes, then reconcile state before full recovery or failback."
        />

        <FakeLogPanel
          title="Fake Resilience Exercise Timeline"
          logs={[
            "09:00 EXERCISE scenario='primary-path-loss'",
            "09:08 HEALTH primary-path='failed'",
            "09:16 DECISION failover='approved'",
            "09:24 PATH alternate='active'",
            "09:32 CAPACITY alternate='78-percent'",
            "09:40 DNS answers='mixed'",
            "09:48 IDENTITY remote-support='failed'",
            "09:56 APPLICATION read-access='available'",
            "10:04 APPLICATION updates='queued'",
            "10:12 MONITORING network='current'",
            "10:20 MONITORING application='delayed'",
            "10:28 SUPPLIER requests='limited'",
            "10:36 COMMUNICATION status='published'",
            "10:44 STATE operation='degraded'",
            "10:52 CONFIDENCE connectivity='high'",
            "11:00 CONFIDENCE mission='moderate'",
            "11:08 FAILBACK readiness='not-ready'",
            "11:16 FINDINGS open='5'",
            "11:24 CONFIDENCE resilience='moderate'",
            "16:26 ALERT issue='mission-recovery-incomplete'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Resilience Evidence Supports—and What It Does Not Prove
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
                    ["Resilience-design use", item.use],
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
          title="Which Resilience Decision Is Best Supported?"
          question="Which conclusion most responsibly addresses the fictional failover evidence?"
          evidence={[
            "The alternate fictional network path is active.",
            "Basic connectivity and read-only case access are available.",
            "DNS answers remain mixed.",
            "Remote support authentication is failing.",
            "Application correlation evidence is delayed.",
            "The alternate path is above its approved priority-capacity range.",
            "Updates are queued and lower-priority work can be paused.",
            "No supplied evidence supports full recovery or safe failback.",
          ]}
          options={[
            "Maintain Degraded Operation, preserve critical read access and priority updates, pause lower-priority work, validate DNS, identity, policy, application, source health, capacity, support, and user outcomes, then reconcile before recovery or failback.",
            "Declare full recovery because the backup path is active.",
            "Fail back immediately to reduce alternate-path load.",
            "Open broad emergency access so remote support can connect.",
          ]}
          bestAnswer={0}
          explanation="The first option distinguishes path failover from mission recovery, respects capacity, preserves trust boundaries, and requires dependency validation and reconciliation."
        />

        <SectionCard
          eyebrow="Resilience Defects"
          title="Ten Problems That Weaken Network Resilience"
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
          title="Build the Northbridge Network-Resilience Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            test, disrupt, fail over, reroute, disconnect, configure, inspect,
            monitor, access, or modify any real network, provider, route, DNS
            service, identity system, device, account, supplier, application, or
            recovery environment.
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
          title="The Alternate Path Cannot Carry Peak Demand"
          scenario="A fictional failover restores the alternate path, but capacity reaches ninety-two percent. Read access is stable, updates are slowing, bulk reports are consuming capacity, and supplier results are beginning to queue."
          choices={[
            {
              label: "Choice A",
              response:
                "Enter the approved fictional degraded mode: preserve read access and priority updates, pause bulk reports and noncritical exports, monitor queue and capacity, communicate limitations, and continue dependency recovery.",
              outcome:
                "Best defensive choice. It protects priority mission outcomes and prevents overload without broadening access.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep every feature active because failover should be transparent.",
              outcome:
                "Weak. The alternate may overload and remove all service availability.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Fail back immediately even though the primary dependency is unstable.",
              outcome:
                "Weak. A rushed failback can create a second disruption.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Primary Path Is Healthy but State Is Not Reconciled"
          scenario="The fictional primary path has remained stable for thirty minutes. However, queued updates, DNS caches, remote sessions, emergency roles, and duplicate notification risk have not been reconciled."
          choices={[
            {
              label: "Choice A",
              response:
                "Delay fictional failback, reconcile queues, caches, sessions, notification state, emergency access, policy, and evidence, then use phased traffic return with observation and rollback.",
              outcome:
                "Best choice. Primary health is necessary but not sufficient for safe failback.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Move all traffic back immediately because the primary path is Green.",
              outcome:
                "Weak. Green path health does not prove business and control state are ready.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remain on the alternate forever and skip reconciliation.",
              outcome:
                "Weak. The organization still needs an approved stable operating state and closure.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design Resilience without Hiding Shared Dependencies"
        >
          <p className="leading-8">
            Fictional Northbridge has multiple network links, two resolver
            groups, replicated applications, alternate identity services, a
            recovery location, and cross-trained staff. A review finds that
            several alternatives share one management process, monitoring
            storage, supplier, approval path, and policy-distribution system.
            Leadership still wants to describe the environment as fully
            redundant.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "State independence honestly",
                "Separate fictional independent providers, paths, locations, and people from shared identity, DNS, monitoring, supplier, and management dependencies.",
              ],
              [
                "Prioritize shared risks",
                "Rank fictional common dependencies by mission impact, authority, capacity, evidence, recoverability, and exercise history.",
              ],
              [
                "Design fail-limited alternatives",
                "Provide fictional bounded identity, DNS, administration, monitoring, supplier, and approval paths for critical functions.",
              ],
              [
                "Protect capacity",
                "Define fictional priority workload, queues, paused features, manual fallbacks, and headroom.",
              ],
              [
                "Exercise full user journeys",
                "Test fictional network, naming, identity, policy, application, supplier, monitoring, support, communication, and reconciliation.",
              ],
              [
                "Communicate residual risk",
                "Explain fictional limitations, accepted dependencies, owners, completion criteria, and next exercise to leadership.",
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
              Produce a fictional mission-resilience register, dependency and
              failure-domain map, redundancy-pattern analysis, capacity plan,
              degraded-mode matrix, health-check design, failover and failback
              workflow, evidence-continuity plan, exercise record, finding
              register, residual-risk summary, and leadership explanation.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Network Resilience and Redundancy Checklist"
          items={[
            "I can explain fictional resilience as mission continuity, safe degradation, recovery, validation, reconciliation, and improvement.",
            "I can distinguish redundancy, diversity, independence, capacity, availability, fault tolerance, failover, failback, and graceful degradation.",
            "I can map provider, location, power, management, configuration, identity, DNS, monitoring, supplier, and human failure domains.",
            "I can identify hidden shared dependencies across primary and alternate paths.",
            "I can design fictional active-active, active-passive, multiple-path, multiple-provider, multiple-location, DNS, identity, and operational redundancy conceptually.",
            "I can plan normal, peak, failover, degraded, queue, maintenance, and recovery capacity with headroom.",
            "I can use component, path, DNS, identity, policy, application, evidence, support, and user-journey health checks.",
            "I can distinguish path failover from full service recovery.",
            "I can design safe degraded modes with critical, limited, queued, manual, denied, and paused functions.",
            "I can preserve source health, alternate evidence, blind-period records, owner communication, and user status during disruption.",
            "I can reconcile queues, sessions, caches, messages, policies, emergency access, user state, and evidence before closure or failback.",
            "I can create a completely fictional resilience artifact without using real providers, routes, facilities, capacities, devices, accounts, contracts, recovery plans, or internal dependencies.",
          ]}
        />

        <MiniQuiz
          title="A4.9 Mini Quiz: Network Resilience and Redundancy"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Network Resilience and Redundancy Package for the Northbridge Student-Support Cooperative. Include mission, purpose, scope, stakeholders, exclusions, safety boundary, at least ten mission-resilience objectives, primary dependencies, alternate dependencies, shared dependencies, provider failure domains, location failure domains, power failure domains, management failure domains, configuration failure domains, identity failure domains, DNS failure domains, monitoring failure domains, supplier failure domains, human failure domains, multiple-path design, multiple-provider design, multiple-location design, active-active concepts, active-passive concepts, redundant DNS, redundant identity, operational redundancy, normal capacity, peak capacity, failover capacity, headroom, priority classes, queues, manual fallbacks, health checks, failover triggers, confidence, degraded modes, evidence continuity, communication, failback, rollback, recovery order, reconciliation, at least twelve fictional exercise scenarios, findings, owners, completion criteria, residual risks, review triggers, leadership summary, technical appendix, reflection, and a statement that every organization, provider, path, location, service, dependency, exercise, owner, date, decision, and outcome is invented."
          tips={[
            "Begin with fictional mission outcomes and user journeys rather than device count.",
            "Show which dependencies are independent and which remain shared across alternatives.",
            "Plan capacity, priority services, queues, degraded features, evidence, support, and communication before failover.",
            "Treat failover, recovery, reconciliation, and failback as separate governed stages.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the Advanced Network Defense Lab?"
        >
          <p className="leading-8">
            Before moving to A4.10, rate your readiness from 1 to 5 for mission
            objectives, dependencies, failure domains, diversity, independence,
            capacity, health checks, degraded modes, failover, evidence,
            communication, recovery order, reconciliation, failback, exercises,
            lifecycle, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why fictional duplicate links or devices do not automatically provide independent redundancy.",
              "I can identify network, provider, power, DNS, identity, management, monitoring, supplier, and human shared dependencies.",
              "I can plan failover capacity and decide which fictional functions continue, queue, limit, or pause.",
              "I can use end-to-end mission checks instead of relying only on component Green status.",
              "I can distinguish failover, degraded operation, recovery, reconciliation, failback, and closure.",
              "I can preserve evidence and communication during monitoring or dependency degradation.",
              "I can design complete exercises that include users, applications, support, suppliers, and recovery roles.",
              "I can produce a safe fictional resilience package without testing, copying, or exposing real recovery capabilities.",
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
            Record one fictional shared failure domain, one capacity limit, one
            degraded-mode decision, one evidence gap, one reconciliation gate,
            and one question you will carry into A4.10.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Fictional network resilience protects mission outcomes through safe degradation, recovery, validation, reconciliation, and improvement.",
            "Redundancy does not prove independence; primary and alternate paths may share provider, power, location, identity, DNS, management, monitoring, supplier, or human failure domains.",
            "Alternate capacity and headroom must support the defined priority workload during peak, failover, degraded, and recovery states.",
            "Component reachability and Green dashboards do not prove end-to-end service or user-journey health.",
            "Degraded modes should define which fictional functions continue, queue, limit, require approval, move to manual processing, or pause.",
            "Failover restores an alternate operating path; full recovery also requires dependency repair, validation, evidence, communication, reconciliation, and closure.",
            "Evidence continuity and blind-period management are part of resilience, not optional monitoring extras.",
            "Failback is a controlled change requiring primary stability, state reconciliation, phased traffic return, observation, and rollback.",
            "Exercises should test complete fictional network, DNS, identity, policy, application, supplier, support, monitoring, communication, and recovery workflows.",
            "Every CyberShield resilience artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, complete the Advanced Network Defense Lab by combining
            architecture, segmentation, firewall governance, visibility, remote
            access, wireless defense, baselines, DNS, resilience, evidence,
            tradeoffs, and professional communication in one fictional review.
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