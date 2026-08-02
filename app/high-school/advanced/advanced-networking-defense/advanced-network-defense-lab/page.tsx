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
const previousLesson = `${modulePath}/network-resilience-and-redundancy`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate fictional network architecture, segmentation, firewall governance, IDS/IPS visibility, remote access, wireless defense, baselines, DNS, resilience, evidence, and recovery into one professional defensive review.",
  "Evaluate fictional findings by separating observation, expected design, effective behavior, evidence quality, alternative explanations, confidence, scope, mission impact, ownership, and completion criteria.",
  "Prioritize fictional network-defense improvements using trust boundaries, identity, least privilege, service criticality, source health, blast radius, recoverability, user impact, privacy, and operational feasibility.",
  "Produce fictional technical, operational, risk, recovery, and leadership artifacts that communicate both strengths and unresolved limitations without exposing real systems.",
  "Defend a portfolio-ready fictional network-defense recommendation through evidence, tradeoffs, residual risk, phased implementation, validation, rollback, maintenance, and review triggers.",
];

const vocabulary = [
  [
    "Integrated network-defense review",
    "A fictional professional assessment that connects architecture, identity, communication policy, evidence, operations, resilience, recovery, and governance rather than reviewing controls in isolation.",
  ],
  [
    "Design intent",
    "The fictional approved architecture, segmentation, communication, access, monitoring, recovery, and ownership model that the environment is supposed to follow.",
  ],
  [
    "Effective behavior",
    "The fictional communication, policy, identity, service, evidence, and recovery behavior that supplied records indicate is actually occurring.",
  ],
  [
    "Control objective",
    "A fictional statement describing the defensive result a control or process is expected to achieve.",
  ],
  [
    "Control evidence",
    "Fictional records that support evaluation of whether a control objective is designed, implemented, operating, observed, and maintained.",
  ],
  [
    "Finding",
    "A fictional evidence-supported difference, weakness, uncertainty, or improvement opportunity requiring ownership and a defined response.",
  ],
  [
    "Observation",
    "A fictional statement of what supplied evidence shows without unsupported conclusions about cause or intent.",
  ],
  [
    "Root-cause hypothesis",
    "A fictional possible explanation requiring validation; it is not automatically a confirmed cause.",
  ],
  [
    "Compensating control",
    "A fictional alternative safeguard used when the preferred control is unavailable, delayed, impractical, or incomplete.",
  ],
  [
    "Residual risk",
    "The fictional remaining uncertainty or potential impact after approved controls and corrective actions are considered.",
  ],
  [
    "Blast radius",
    "The fictional scope of users, services, identities, devices, zones, suppliers, data, evidence, or recovery capabilities that may be affected by one failure or trust decision.",
  ],
  [
    "Control dependency",
    "A fictional identity, DNS, policy, monitoring, supplier, management, evidence, or recovery service required for another control to work.",
  ],
  [
    "Evidence confidence",
    "A fictional rating describing how strongly source quality, freshness, completeness, correlation, consistency, and scope support a conclusion.",
  ],
  [
    "Coverage confidence",
    "A fictional rating describing how well evidence represents the relevant zones, paths, identities, services, time periods, states, and failure conditions.",
  ],
  [
    "Corrective action",
    "A fictional approved change intended to reduce a finding's cause, exposure, impact, uncertainty, or recurrence.",
  ],
  [
    "Containment concept",
    "A fictional bounded action used to limit potential impact while evidence and recovery decisions continue.",
  ],
  [
    "Validation gate",
    "A fictional evidence-based condition that must be satisfied before implementation, escalation, failover, recovery, failback, closure, or progression to the next phase.",
  ],
  [
    "Rollback criterion",
    "A fictional condition requiring a planned change to be reversed or paused because expected safety, service, evidence, or mission outcomes were not achieved.",
  ],
  [
    "Completion criterion",
    "A fictional measurable condition proving that an assigned action or finding can be closed.",
  ],
  [
    "Executive summary",
    "A fictional leadership-facing explanation of mission impact, strongest evidence, priority decisions, residual risks, resources, owners, and next milestones.",
  ],
  [
    "Technical appendix",
    "A fictional detailed record of architecture, assumptions, evidence, matrices, findings, decisions, validation, and limitations supporting the executive summary.",
  ],
  [
    "Phased implementation",
    "A fictional sequence that introduces changes through controlled scope, validation, observation, rollback, expansion, and maintenance.",
  ],
  [
    "Operational ownership",
    "A fictional assignment of the role accountable for day-to-day control health, evidence, support, exceptions, recovery, and lifecycle.",
  ],
  [
    "Review trigger",
    "A fictional event requiring revalidation, such as architecture, identity, firewall, supplier, wireless, DNS, monitoring, service, resilience, ownership, or mission change.",
  ],
];

const caseFacts = [
  {
    area: "Mission",
    fact:
      "The fictional Northbridge Student-Support Cooperative provides a portal for case viewing, approved updates, notifications, staff support, supplier result processing, and recovery communication.",
    importance:
      "Network-defense decisions must preserve essential user access, privacy, correct case state, support, evidence, and recovery.",
  },
  {
    area: "Architecture",
    fact:
      "The fictional environment uses public, application, data, supplier, employee, guest, service-device, administrative, monitoring, and recovery zones.",
    importance:
      "Each zone has different trust, identity, destination, evidence, and recovery requirements.",
  },
  {
    area: "Segmentation",
    fact:
      "Most high-value paths are documented, but guest-to-internal, service-device, supplier-result, administrative, DNS, and recovery paths have inconsistent ownership or evidence.",
    importance:
      "Unclear paths may increase blast radius or create unsupported assumptions.",
  },
  {
    area: "Firewall governance",
    fact:
      "Several fictional rules are narrowly defined, while three broad rules rely on legacy service groups and incomplete expiration evidence.",
    importance:
      "Broad or stale communication policy can outlive its mission purpose.",
  },
  {
    area: "Visibility",
    fact:
      "Network, policy, DNS, wireless, remote-access, and application evidence exist, but some sources are delayed or lack complete provenance.",
    importance:
      "A Green dashboard does not prove current, complete, or correctly interpreted evidence.",
  },
  {
    area: "Remote access",
    fact:
      "Employee and administrator profiles are documented, while one supplier profile and one emergency role have incomplete expiration or revocation evidence.",
    importance:
      "Temporary and privileged access require stronger lifecycle controls.",
  },
  {
    area: "Wireless",
    fact:
      "Managed, guest, service-device, administrative, event, and recovery classes exist, but two service devices lack current owners and one event exception remains open.",
    importance:
      "Connected devices may be in the wrong class or lack accountable lifecycle.",
  },
  {
    area: "Baselines",
    fact:
      "Service, supplier, administrative, wireless, and recovery baselines exist, but four were not revalidated after recent architecture and policy changes.",
    importance:
      "Stale baselines can increase both false positives and false negatives.",
  },
  {
    area: "DNS",
    fact:
      "Two approved fictional resolver groups return different destination categories for one migrated service, and a temporary alias remains open.",
    importance:
      "Authoritative state, caches, policy, service ownership, and application outcomes require reconciliation.",
  },
  {
    area: "Resilience",
    fact:
      "The alternate network path restores basic connectivity but has limited capacity and shares identity, DNS policy, monitoring storage, supplier, and approval dependencies.",
    importance:
      "Redundancy does not equal independent mission resilience.",
  },
];

const professionalWorkflow = [
  {
    phase: "1. Frame the mission and safety boundary",
    purpose:
      "Define the fictional service outcomes, stakeholders, critical assets, exclusions, ethical rules, evidence limits, and public-portfolio boundary.",
    outputs:
      "Mission statement, scope, exclusions, safety boundary, stakeholder map, and review questions.",
    quality:
      "The review never claims authority over real systems and never uses real internal data.",
  },
  {
    phase: "2. Reconstruct the intended architecture",
    purpose:
      "Document fictional zones, trust boundaries, identities, services, suppliers, wireless classes, administrative paths, evidence sources, and recovery dependencies.",
    outputs:
      "Architecture narrative, zone inventory, trust-boundary map, data-flow summary, and ownership matrix.",
    quality:
      "The design distinguishes intended relationships from observed behavior.",
  },
  {
    phase: "3. Inventory communication and access",
    purpose:
      "Record fictional source, destination, identity, service, purpose, direction, policy, owner, evidence, state, exception, and lifecycle.",
    outputs:
      "Communication register, access matrix, firewall rule review, remote-access profiles, and wireless class matrix.",
    quality:
      "Every allowed relationship has a mission purpose and accountable owner.",
  },
  {
    phase: "4. Evaluate visibility and evidence quality",
    purpose:
      "Assess fictional sensors, logs, dashboards, policy records, DNS, wireless, remote access, application correlation, source health, privacy, and blind periods.",
    outputs:
      "Visibility coverage map, evidence inventory, provenance register, source-health matrix, and privacy plan.",
    quality:
      "Evidence confidence and coverage confidence remain separate.",
  },
  {
    phase: "5. Compare expected and observed behavior",
    purpose:
      "Use fictional baselines, architecture, policy, change, maintenance, supplier, event, failure, and recovery context.",
    outputs:
      "Baseline matrix, anomaly register, policy-drift review, and expected-versus-observed analysis.",
    quality:
      "Differences are not labeled malicious without supporting evidence.",
  },
  {
    phase: "6. Analyze DNS and shared dependencies",
    purpose:
      "Review fictional resolvers, authoritative data, caching, aliases, ownership, policy, identity, monitoring, suppliers, management, and approval dependencies.",
    outputs:
      "DNS governance review, shared-dependency map, and failure-domain register.",
    quality:
      "Availability, correctness, policy, evidence, privacy, and service outcome are treated separately.",
  },
  {
    phase: "7. Evaluate resilience and recovery",
    purpose:
      "Assess fictional redundancy, diversity, capacity, degraded modes, health checks, failover, evidence continuity, recovery order, reconciliation, and failback.",
    outputs:
      "Resilience-objective register, capacity plan, degraded-mode matrix, failover workflow, recovery gates, and exercise findings.",
    quality:
      "Connectivity restoration is not treated as full mission recovery.",
  },
  {
    phase: "8. Create and prioritize findings",
    purpose:
      "Write fictional observations, expected design, evidence, alternatives, confidence, scope, impact, owner, action, residual risk, and completion criteria.",
    outputs:
      "Finding register, priority matrix, corrective-action plan, and residual-risk summary.",
    quality:
      "Priorities consider mission, identity, blast radius, evidence, user impact, privacy, and recoverability.",
  },
  {
    phase: "9. Design phased improvements",
    purpose:
      "Sequence fictional policy cleanup, access changes, visibility work, DNS corrections, resilience upgrades, validation, communication, rollback, and maintenance.",
    outputs:
      "Thirty-, sixty-, and ninety-day roadmap; validation plan; rollback plan; and ownership schedule.",
    quality:
      "The plan reduces risk without causing uncontrolled disruption.",
  },
  {
    phase: "10. Communicate and defend the review",
    purpose:
      "Present fictional technical detail and leadership decisions with honest limitations, tradeoffs, resources, milestones, and next review triggers.",
    outputs:
      "Executive summary, technical appendix, evidence packet, briefing notes, and portfolio reflection.",
    quality:
      "The final package is understandable, defensible, traceable, and completely fictional.",
  },
];

const architectureLayers = [
  {
    layer: "Public access layer",
    purpose:
      "Provide fictional users with approved portal and status access without exposing internal application, data, management, or recovery services.",
    controls:
      "Public gateway, service identity, input handling, rate and availability concepts, firewall policy, monitoring, and recovery.",
    evidence:
      "Public request category, service identity, policy result, application result, source health, support, and user outcome.",
    concern:
      "One legacy public-to-application rule uses a broad destination group and incomplete expiration evidence.",
    recommendation:
      "Replace it with service-specific destinations, current ownership, validation, rollback, and automatic review.",
  },
  {
    layer: "Application layer",
    purpose:
      "Run fictional portal, workflow, notification, support, and reporting services with least-privilege communication.",
    controls:
      "Service identities, application roles, segmentation, destination policy, baseline context, health checks, and change control.",
    evidence:
      "Service identity, source and destination group, operation, policy, application state, queue, change, and source health.",
    concern:
      "Two services reached new destinations after deployment; one destination remains unexplained.",
    recommendation:
      "Keep the anomaly In Review and validate purpose, owner, policy, application correlation, and impact before baseline updates.",
  },
  {
    layer: "Data layer",
    purpose:
      "Protect fictional case, preference, audit, queue, and reporting data through narrow service and administrative relationships.",
    controls:
      "Service authorization, object scope, network segmentation, encryption concept, evidence, backup, recovery, and reconciliation.",
    evidence:
      "Service identity, object category, operation, policy result, application authorization, data state, and recovery evidence.",
    concern:
      "The architecture documents network restriction but lacks complete evidence for one support-service object boundary.",
    recommendation:
      "Add application authorization and object-level evidence rather than relying on network location alone.",
  },
  {
    layer: "Supplier integration layer",
    purpose:
      "Exchange fictional approved requests and results with a supplier under shared-responsibility and lifecycle controls.",
    controls:
      "Supplier identity, narrow destinations, request and result categories, queueing, correlation, monitoring, remote support, and recovery.",
    evidence:
      "Supplier identity, request, result, timing, queue age, policy, correlation, source health, and support records.",
    concern:
      "Both primary and alternate internal paths rely on the same supplier and support process.",
    recommendation:
      "Document the common failure domain and design safe queueing, manual review, communication, and recovery.",
  },
  {
    layer: "Employee and support layer",
    purpose:
      "Allow fictional employees and support analysts to perform approved tasks from managed identities and devices.",
    controls:
      "Identity, role, assignment, managed device, remote access, wireless class, destination limits, session evidence, and revocation.",
    evidence:
      "Human identity, device, role, case assignment, destination, action, result, ticket, confirmation, and source health.",
    concern:
      "Three support sessions have strong identity evidence but incomplete reason or user-confirmation fields.",
    recommendation:
      "Improve structured purpose, object, old-state, new-state, result, and confirmation evidence.",
  },
  {
    layer: "Administrative layer",
    purpose:
      "Support fictional privileged maintenance, change, emergency response, and recovery under stronger controls.",
    controls:
      "Separate privileged identity, managed administrative device, approved destination, change, session, emergency access, and revocation.",
    evidence:
      "Administrator identity, device, approval, destination, action, change, result, source health, revocation, and closure.",
    concern:
      "One emergency role remains assigned after a completed exercise.",
    recommendation:
      "Treat revocation as incomplete and add automatic expiration, independent closure, and retrospective review.",
  },
  {
    layer: "Wireless layer",
    purpose:
      "Separate fictional managed, personal, guest, service-device, administrative, event, supplier, and recovery use cases.",
    controls:
      "User and device identity, onboarding, network class, destination policy, monitoring, privacy, support, source health, and offboarding.",
    evidence:
      "User, device, owner, class, session, destination, policy result, source health, exception, and lifecycle.",
    concern:
      "Two service devices lack current owners, and one temporary event exception has no active sponsor.",
    recommendation:
      "Stop new enrollment under the exception and validate ownership before retain, reclassify, isolate, or offboard decisions.",
  },
  {
    layer: "DNS layer",
    purpose:
      "Provide fictional governed naming and service discovery across users, services, suppliers, monitoring, administration, and recovery.",
    controls:
      "Zone and record ownership, approved resolvers, caching, policy, source health, privacy, change, rollback, and recovery.",
    evidence:
      "Authoritative version, resolver result, cache state, requester group, policy, source health, application outcome, and change.",
    concern:
      "Resolver groups return mixed destinations for a migrated service while a temporary alias remains open.",
    recommendation:
      "Validate audience policy, cache state, alias use, source health, service outcome, expiration, and rollback before correction.",
  },
  {
    layer: "Monitoring and evidence layer",
    purpose:
      "Provide fictional decision-ready visibility into network, policy, identity, DNS, wireless, remote-access, application, and recovery behavior.",
    controls:
      "Source ownership, provenance, freshness, queue age, clock, schema, transformation, privacy, alerting, tuning, and retention.",
    evidence:
      "Sensor status, last-event time, queue age, policy version, field quality, blind period, alternate source, and owner review.",
    concern:
      "Several dashboards show Green connectivity while application or DNS evidence is delayed.",
    recommendation:
      "Separate connectivity from evidence freshness and mark dependent findings provisional when sources are degraded.",
  },
  {
    layer: "Recovery layer",
    purpose:
      "Restore fictional network, DNS, identity, policy, applications, data, suppliers, monitoring, support, communication, and correct business state.",
    controls:
      "Recovery identities, dependency order, degraded mode, evidence continuity, validation gates, reconciliation, failback, revocation, and closure.",
    evidence:
      "Trigger, owner, approval, action, dependency state, source health, validation, queue, user outcome, revocation, and closure.",
    concern:
      "The alternate path restores reads but lacks sufficient peak capacity and complete DNS, remote support, and monitoring readiness.",
    recommendation:
      "Maintain Degraded Operation until dependency, capacity, evidence, reconciliation, and failback gates are satisfied.",
  },
];

const findings = [
  {
    id: "F-01",
    title: "Broad legacy firewall destination group",
    observation:
      "A fictional public-to-application rule permits a legacy destination group broader than the current portal service dependency.",
    evidence:
      "Architecture register, firewall rule record, owner review, and current application dependency map.",
    alternatives:
      "Temporary migration need, undocumented shared service, stale group membership, or incomplete architecture documentation.",
    confidence:
      "High in the rule scope; Moderate in the full set of dependent services.",
    impact:
      "May expand reachable application services and increase blast radius.",
    priority:
      "High",
    action:
      "Validate dependencies, split the rule into service-specific destinations, stage the change, monitor results, and retain rollback.",
    owner:
      "Network-policy owner with application-owner approval.",
    completion:
      "Current dependencies are documented; narrow rules operate successfully; no required service is blocked; legacy group is retired.",
  },
  {
    id: "F-02",
    title: "Supplier remote-access expiration incomplete",
    observation:
      "A fictional supplier-support profile has an active sponsor but lacks complete automatic expiration and recent session-evidence validation.",
    evidence:
      "Remote-access profile, supplier sponsor record, session register, and exception review.",
    alternatives:
      "Recently renewed support need, incomplete evidence export, or approved long-running maintenance relationship.",
    confidence:
      "High in the lifecycle gap; Low in any misuse or excessive activity conclusion.",
    impact:
      "Temporary external access may become standing authority.",
    priority:
      "High",
    action:
      "Confirm purpose and destination, implement time-bound access, validate device and session evidence, and define complete revocation.",
    owner:
      "Supplier sponsor and remote-access owner.",
    completion:
      "Named identity, destination, approval, expiration, session evidence, rollback, and closure are current.",
  },
  {
    id: "F-03",
    title: "Emergency role revocation incomplete",
    observation:
      "A fictional emergency administrative role remains assigned after the related exercise ended.",
    evidence:
      "Exercise timeline, identity role record, session closure, destination-group review, and approval record.",
    alternatives:
      "Closure processing delay, separate authorized event, stale identity evidence, or incomplete group synchronization.",
    confidence:
      "High in the assigned role; Moderate in effective remaining access.",
    impact:
      "Privileged authority may outlive its approved emergency purpose.",
    priority:
      "Critical",
    action:
      "Remove the role and related groups through authorized closure, verify no active or cached access, and improve automatic expiration.",
    owner:
      "Identity owner, administrative owner, and recovery owner.",
    completion:
      "Role, groups, sessions, exceptions, and cached permissions are removed and independently reviewed.",
  },
  {
    id: "F-04",
    title: "Unowned wireless service devices",
    observation:
      "Two fictional service-device identities have active sessions but no current accountable owner or replacement date.",
    evidence:
      "Wireless inventory, onboarding register, session evidence, destination policy, and support records.",
    alternatives:
      "Ownership transfer, replacement project, stale inventory, or newly deployed approved equipment.",
    confidence:
      "High in the ownership gap; Low in any unsafe-behavior conclusion.",
    impact:
      "Policy, support, replacement, and retirement decisions may be unaccountable.",
    priority:
      "High",
    action:
      "Mark devices Unvalidated, identify purpose and owner, review destinations, and authorize retain, reclassify, isolate, or offboard.",
    owner:
      "Wireless owner and service-device sponsor.",
    completion:
      "Each device has a current owner, purpose, class, destinations, support plan, evidence, and retirement date.",
  },
  {
    id: "F-05",
    title: "Baseline versions stale after architecture change",
    observation:
      "Four fictional baselines were not revalidated after application, wireless, supplier, and recovery changes.",
    evidence:
      "Baseline register, architecture changes, policy records, and review-trigger history.",
    alternatives:
      "The behavior may remain unchanged, review evidence may be stored elsewhere, or the trigger process may be incomplete.",
    confidence:
      "High in the review-date gap; Moderate in actual baseline inaccuracy.",
    impact:
      "Stale expectations may increase false positives, false negatives, or automatic normalization risk.",
    priority:
      "Medium",
    action:
      "Rebuild state-specific expectations using current sources, owners, evidence health, change, maintenance, and recovery context.",
    owner:
      "Monitoring owner with service and network owners.",
    completion:
      "Each baseline has a current version, representative windows, source-health review, owner approval, and trigger schedule.",
  },
  {
    id: "F-06",
    title: "Mixed DNS resolver answers",
    observation:
      "Two fictional approved resolver groups return different destination categories for one migrated service.",
    evidence:
      "Authoritative-zone summary, resolver comparison, cache state, policy versions, application result, and source health.",
    alternatives:
      "Expected audience difference, stale cache, temporary alias, incomplete migration, source-health delay, or unapproved change.",
    confidence:
      "High in the answer difference; Moderate in cause; Low in user impact.",
    impact:
      "Clients may reach inconsistent environments or experience unreliable service behavior.",
    priority:
      "High",
    action:
      "Validate audience policy, authoritative state, cache, alias, owner, application outcome, expiration, rollback, and recovery.",
    owner:
      "DNS owner and notification-service owner.",
    completion:
      "Approved resolver groups return intended answers; temporary migration state is closed; application behavior is validated.",
  },
  {
    id: "F-07",
    title: "Green sources with delayed evidence",
    observation:
      "Fictional collectors report healthy connectivity while application or DNS evidence freshness exceeds the approved delay range.",
    evidence:
      "Source-health dashboard, last-event time, queue age, clock, collector status, and alternate-source comparison.",
    alternatives:
      "Temporary queue backlog, low event volume, schema delay, storage delay, or actual service quietness.",
    confidence:
      "High in delayed evidence; Low or Moderate in underlying network or service behavior.",
    impact:
      "Alerts, baselines, triage, failover, and closure may rely on stale context.",
    priority:
      "High",
    action:
      "Mark sources Degraded, use alternate evidence, limit high-impact decisions, restore freshness, and reassess dependent findings.",
    owner:
      "Monitoring and evidence owner.",
    completion:
      "Freshness, queue, clock, schema, transformation, and alternate-source validation meet approved thresholds.",
  },
  {
    id: "F-08",
    title: "Alternate path capacity below peak priority demand",
    observation:
      "The fictional alternate path supports read access but cannot carry all peak update, reporting, supplier, and notification demand.",
    evidence:
      "Capacity review, exercise record, queue trend, application result, and service-priority register.",
    alternatives:
      "Estimate error, temporary test overhead, unoptimized traffic, or incorrect priority classification.",
    confidence:
      "Moderate to High in the capacity constraint.",
    impact:
      "Failover may overload, delay critical work, or create unsafe improvisation.",
    priority:
      "Critical",
    action:
      "Define degraded priorities, pause lower-value workloads, preserve queues, increase headroom, and retest end-to-end.",
    owner:
      "Network-resilience owner with application and business owners.",
    completion:
      "The alternate supports documented critical demand with headroom and validated degraded-mode controls.",
  },
  {
    id: "F-09",
    title: "Support-session business evidence incomplete",
    observation:
      "Three fictional support sessions show valid identity and device evidence but incomplete reason, object, result, or user confirmation.",
    evidence:
      "Remote-access session records, support tickets, application changes, and user-confirmation fields.",
    alternatives:
      "Evidence export gap, legitimate low-impact session, incomplete ticket template, or delayed confirmation.",
    confidence:
      "High in the documentation gap; Low in any unauthorized-action conclusion.",
    impact:
      "The business purpose and correctness of changes cannot be fully demonstrated.",
    priority:
      "Medium",
    action:
      "Require structured reason, assignment, object, old state, new state, result, user confirmation, and closure evidence.",
    owner:
      "Support-operations owner and application owner.",
    completion:
      "Required fields are enforced and a sample review confirms complete, privacy-safe evidence.",
  },
  {
    id: "F-10",
    title: "Shared resilience dependencies underreported",
    observation:
      "The fictional primary and alternate designs use different network paths but share identity, DNS policy, monitoring storage, supplier processing, and approval authority.",
    evidence:
      "Dependency map, exercise, provider review, DNS architecture, identity design, monitoring inventory, and role matrix.",
    alternatives:
      "Some shared services may have internal redundancy or bounded degraded modes not represented in the current map.",
    confidence:
      "High in documented shared dependencies; Moderate in their full resilience impact.",
    impact:
      "A correlated failure may remove multiple alternatives or prevent safe operation.",
    priority:
      "Critical",
    action:
      "Disclose residual risk, add bounded alternatives, strengthen degraded operation, and exercise shared-dependency failures.",
    owner:
      "Architecture and resilience owners.",
    completion:
      "Shared dependencies are documented, accepted or reduced, assigned, tested, and reflected in leadership reporting.",
  },
];

const prioritizationDimensions = [
  {
    dimension: "Mission impact",
    question:
      "Could the fictional finding affect essential case access, correct state, notifications, supplier processing, support, administration, evidence, or recovery?",
    strongUse:
      "Raise priority when a control weakness threatens an essential user or service outcome.",
    caution:
      "A technically dramatic finding may have low mission impact, while a subtle state error may be severe.",
  },
  {
    dimension: "Identity and authority",
    question:
      "Does the fictional finding involve privileged, service, supplier, emergency, guest, unmanaged, or recovery identity?",
    strongUse:
      "Prioritize stale privileged roles and broad service identities.",
    caution:
      "Valid identity does not prove appropriate destination, action, or purpose.",
  },
  {
    dimension: "Blast radius",
    question:
      "How many fictional users, services, zones, destinations, suppliers, devices, records, or recovery capabilities may be affected?",
    strongUse:
      "Prioritize broad legacy rules and shared dependencies that influence many systems.",
    caution:
      "Scope may be uncertain when evidence coverage is incomplete.",
  },
  {
    dimension: "Evidence quality",
    question:
      "Are fictional sources current, complete, independent, correlated, correctly timed, and relevant to the finding?",
    strongUse:
      "Use strong evidence for action and preserve provisional status when sources are degraded.",
    caution:
      "Weak evidence reduces certainty but does not automatically reduce potential impact.",
  },
  {
    dimension: "Exploitability or misuse opportunity concept",
    question:
      "Does the fictional design create broad standing access, weak separation, stale exceptions, or uncontrolled administrative paths?",
    strongUse:
      "Prioritize conditions that expand authority or remove trust-boundary enforcement.",
    caution:
      "Do not convert a design weakness into an unsupported claim that misuse occurred.",
  },
  {
    dimension: "Detectability",
    question:
      "Would fictional defenders notice policy drift, wrong destinations, stale access, failed revocation, or degraded recovery quickly?",
    strongUse:
      "Raise priority for high-impact conditions with weak evidence or blind periods.",
    caution:
      "More logging is not always better; evidence should remain purpose-limited.",
  },
  {
    dimension: "Recoverability",
    question:
      "Can the fictional service, access, policy, queue, cache, data, user state, and evidence be restored and reconciled safely?",
    strongUse:
      "Raise priority when rollback or reconciliation is difficult.",
    caution:
      "A reversible network change may still create irreversible user or privacy harm.",
  },
  {
    dimension: "Privacy and user trust",
    question:
      "Could the fictional finding expose personal activity, create incorrect user state, block access, or encourage unsafe workarounds?",
    strongUse:
      "Include user impact and evidence minimization in technical recommendations.",
    caution:
      "Security improvements should not create unnecessary surveillance or inaccessible workflows.",
  },
  {
    dimension: "Operational feasibility",
    question:
      "Can the fictional recommendation be implemented, validated, supported, monitored, rolled back, and maintained?",
    strongUse:
      "Use phased changes and compensating controls when immediate replacement is unsafe.",
    caution:
      "A perfect control that cannot be operated may create new risk.",
  },
  {
    dimension: "Residual and correlated risk",
    question:
      "Which fictional failure domains, suppliers, identity, DNS, monitoring, human, and management dependencies remain after improvement?",
    strongUse:
      "Communicate accepted limitations and next milestones honestly.",
    caution:
      "Do not label a design fully secure or fully redundant when shared dependencies remain.",
  },
];

const roadmap = [
  {
    period: "First 30 days — Stabilize evidence and ownership",
    goals:
      "Address fictional critical lifecycle and evidence gaps before large architecture changes.",
    actions: [
      "Remove and independently verify the stale emergency role and related groups.",
      "Mark delayed DNS and application sources Degraded and restore source-health visibility.",
      "Assign owners to unvalidated wireless service devices and the temporary event exception.",
      "Confirm supplier remote-access purpose, destination, sponsor, expiration, and session evidence.",
      "Publish an approved degraded-mode matrix for alternate-path capacity limits.",
      "Create one consolidated finding register with owners and completion criteria.",
    ],
    validation:
      "Identity closure review, source-health freshness check, owner confirmations, remote-access review, degraded-mode tabletop, and finding governance approval.",
    rollback:
      "Use authorized restoration of required access or service only through documented approval if a corrective action interrupts a validated mission dependency.",
  },
  {
    period: "Days 31–60 — Narrow trust and correct policy",
    goals:
      "Reduce fictional blast radius and stale communication or naming dependencies.",
    actions: [
      "Split the broad legacy firewall destination group into service-specific relationships.",
      "Validate unexplained application destinations before baseline or policy updates.",
      "Resolve mixed DNS answers and close or formally extend the temporary alias.",
      "Reclassify, isolate, retain, or offboard unvalidated wireless devices.",
      "Enforce structured support-session reason, object, result, and confirmation evidence.",
      "Rebuild affected service, supplier, wireless, administrative, and recovery baselines.",
    ],
    validation:
      "Service-path tests, policy-decision review, application transaction checks, DNS consistency, wireless ownership closure, support evidence sampling, and false-positive review.",
    rollback:
      "Retain previous fictional policy and naming states as controlled rollback options until user, service, evidence, and support outcomes are stable.",
  },
  {
    period: "Days 61–90 — Strengthen resilience and exercises",
    goals:
      "Improve fictional capacity, shared-dependency handling, recovery, and executive assurance.",
    actions: [
      "Increase alternate-path headroom or refine priority workloads and queue controls.",
      "Create bounded alternatives for shared identity, DNS policy, monitoring, supplier, and approval dependencies.",
      "Exercise provider, DNS, identity, monitoring, supplier, capacity, and human-availability failures.",
      "Validate failover, degraded operation, recovery order, reconciliation, failback, and emergency revocation.",
      "Publish updated architecture, residual-risk, leadership, and portfolio documents.",
      "Schedule recurring review triggers and the next integrated defense exercise.",
    ],
    validation:
      "End-to-end fictional user journeys, source-health review, capacity results, owner decisions, reconciliation evidence, leadership acceptance, and retrospective findings.",
    rollback:
      "Pause expansion when validation gates fail, preserve safe degraded operation, correct the design, and repeat the fictional exercise.",
  },
];

const evidenceMatrix = [
  {
    id: "LAB-E01",
    source: "Fictional architecture and communication register",
    observation:
      "Most high-value relationships are defined, while several legacy, supplier, wireless, DNS, administrative, and recovery paths have ownership or lifecycle gaps.",
    supports:
      "A targeted trust-boundary and ownership review is justified.",
    limits:
      "Documentation gaps do not prove active misuse, unauthorized communication, or complete implementation failure.",
    use:
      "Prioritize validation before removal or broad redesign.",
  },
  {
    id: "LAB-E02",
    source: "Fictional firewall and segmentation review",
    observation:
      "Three broad or stale policy relationships have incomplete expiration, owner, or service-dependency evidence.",
    supports:
      "Rule hygiene and least-connectivity improvements are needed.",
    limits:
      "The review does not prove every permitted path is used or harmful.",
    use:
      "Stage service-specific replacements with rollback and business validation.",
  },
  {
    id: "LAB-E03",
    source: "Fictional identity and access review",
    observation:
      "One supplier profile and one emergency role have incomplete expiration or revocation evidence.",
    supports:
      "Temporary and privileged access lifecycle requires immediate attention.",
    limits:
      "The evidence does not prove misuse, active sessions, or harmful actions.",
    use:
      "Close the lifecycle and improve automated expiration and independent review.",
  },
  {
    id: "LAB-E04",
    source: "Fictional wireless ownership review",
    observation:
      "Two service devices and one event exception lack current ownership or sponsorship evidence.",
    supports:
      "Wireless classification and lifecycle decisions are incomplete.",
    limits:
      "Missing ownership does not prove unsafe device behavior.",
    use:
      "Use an Unvalidated state with targeted retain, reclassify, isolate, or offboard decisions.",
  },
  {
    id: "LAB-E05",
    source: "Fictional visibility and source-health dashboard",
    observation:
      "Some collectors report Green connectivity while application or DNS evidence is delayed.",
    supports:
      "Evidence freshness must be separated from connectivity health.",
    limits:
      "Delay does not prove event loss, tampering, or unsafe underlying behavior.",
    use:
      "Mark dependent conclusions provisional and restore evidence health.",
  },
  {
    id: "LAB-E06",
    source: "Fictional baseline review",
    observation:
      "Four baseline versions predate recent architecture, wireless, supplier, and recovery changes.",
    supports:
      "Expected behavior and anomaly logic require revalidation.",
    limits:
      "Old review dates do not prove the baselines are inaccurate.",
    use:
      "Rebuild representative states before tuning or suppression changes.",
  },
  {
    id: "LAB-E07",
    source: "Fictional DNS comparison",
    observation:
      "Approved resolver groups return different destination categories for a migrated service, and one temporary alias remains open.",
    supports:
      "Authoritative, cache, policy, source-health, owner, and application review is required.",
    limits:
      "Different answers do not prove manipulation or compromise.",
    use:
      "Resolve naming state through governed change and recovery evidence.",
  },
  {
    id: "LAB-E08",
    source: "Fictional resilience exercise",
    observation:
      "The alternate path restores basic connectivity but has limited capacity and incomplete DNS, support, monitoring, supplier, and approval independence.",
    supports:
      "The environment can enter Degraded Operation but cannot claim full independent resilience.",
    limits:
      "One exercise does not prove every future condition or total failure.",
    use:
      "Improve capacity, shared-dependency alternatives, recovery gates, and exercises.",
  },
];

const commonMistakes = [
  {
    mistake: "Treating each control as isolated",
    example:
      "A fictional firewall rule is reviewed without identity, DNS, application, monitoring, supplier, or recovery context.",
    consequence:
      "The recommendation may block required work or preserve hidden risk.",
    correction:
      "Review complete service and trust-boundary relationships.",
  },
  {
    mistake: "Confusing intent with implementation",
    example:
      "A fictional architecture diagram is treated as proof that effective policy matches the design.",
    consequence:
      "Policy drift and stale access may remain invisible.",
    correction:
      "Compare approved design with supplied behavior and source-health evidence.",
  },
  {
    mistake: "Confusing alerts with confirmed incidents",
    example:
      "A fictional High alert is described as proof of compromise.",
    consequence:
      "Unsupported escalation or blame may occur.",
    correction:
      "Separate observation, alternatives, confidence, scope, impact, and intent.",
  },
  {
    mistake: "Ignoring evidence health",
    example:
      "A fictional dashboard is Green while events are delayed.",
    consequence:
      "Decisions may rely on stale or incomplete context.",
    correction:
      "Track freshness, queue age, clock, schema, transformation, and blind periods.",
  },
  {
    mistake: "Removing access before validating dependencies",
    example:
      "A fictional alias, firewall rule, device, or supplier profile is deleted because ownership evidence is missing.",
    consequence:
      "A hidden mission or recovery dependency may fail.",
    correction:
      "Use an Unvalidated or Conditional state with owner and dependency review.",
  },
  {
    mistake: "Normalizing every observed behavior",
    example:
      "A fictional baseline learns new destinations automatically.",
    consequence:
      "Policy drift, error, or unsafe communication may become expected.",
    correction:
      "Require purpose, owner, policy, evidence, impact, and residual-risk validation.",
  },
  {
    mistake: "Calling redundancy complete",
    example:
      "Fictional duplicate paths share DNS, identity, monitoring, supplier, and approval dependencies.",
    consequence:
      "Leadership may underestimate correlated failure.",
    correction:
      "Disclose shared failure domains and test degraded alternatives.",
  },
  {
    mistake: "Closing at connectivity restoration",
    example:
      "A fictional failover is considered complete before queues, caches, sessions, policies, users, and evidence are reconciled.",
    consequence:
      "Hidden business and access errors may remain.",
    correction:
      "Use recovery and closure gates beyond network reachability.",
  },
  {
    mistake: "Writing vague findings",
    example:
      "A fictional report says, 'Improve network security.'",
    consequence:
      "No owner, action, evidence, completion criterion, or validation exists.",
    correction:
      "Write specific observation, impact, action, owner, priority, residual risk, and completion criteria.",
  },
  {
    mistake: "Overexposing portfolio details",
    example:
      "A fictional-style report is built from real topology, providers, logs, naming, identities, or recovery details.",
    consequence:
      "Sensitive internal information may be exposed.",
    correction:
      "Invent every organization, path, record, alert, owner, date, decision, and outcome.",
  },
];

const labDeliverables = [
  {
    step: "1",
    title: "Mission and scope brief",
    task:
      "Write the fictional mission, users, critical services, assets, stakeholders, exclusions, assumptions, ethics, and safe-lab boundary.",
    deliverable:
      "One-page review charter.",
    quality:
      "The charter distinguishes educational analysis from real authorization.",
  },
  {
    step: "2",
    title: "Architecture and trust-boundary model",
    task:
      "Document fictional public, application, data, supplier, employee, guest, service-device, administrative, monitoring, DNS, and recovery zones.",
    deliverable:
      "Architecture narrative and trust-boundary matrix.",
    quality:
      "Every zone has purpose, identity, data, owner, allowed relationships, evidence, and recovery context.",
  },
  {
    step: "3",
    title: "Communication and firewall review",
    task:
      "Record fictional source, destination, identity, service, purpose, direction, owner, policy, exception, evidence, and lifecycle.",
    deliverable:
      "Communication register and firewall-rule finding worksheet.",
    quality:
      "No broad relationship is accepted only because it is currently allowed.",
  },
  {
    step: "4",
    title: "Visibility and IDS/IPS review",
    task:
      "Map fictional sensors, policy evidence, network metadata, alerts, encrypted boundaries, blind spots, source health, tuning, suppression, and prevention decisions.",
    deliverable:
      "Visibility coverage and alert-governance package.",
    quality:
      "Alerts remain observations rather than proof of cause or intent.",
  },
  {
    step: "5",
    title: "Remote-access and wireless review",
    task:
      "Evaluate fictional employee, support, administrator, supplier, emergency, guest, service-device, event, and recovery profiles.",
    deliverable:
      "Identity-device-destination-lifecycle matrix.",
    quality:
      "Temporary, privileged, external, and non-user access receive stronger lifecycle controls.",
  },
  {
    step: "6",
    title: "Baseline and anomaly review",
    task:
      "Compare fictional expected and observed behavior by identity, service, destination, timing, volume, policy, change, maintenance, event, failure, and recovery state.",
    deliverable:
      "Baseline, anomaly, and source-health register.",
    quality:
      "The review does not automatically normalize observed behavior.",
  },
  {
    step: "7",
    title: "DNS governance review",
    task:
      "Evaluate fictional zones, records, owners, resolvers, caches, policy, aliases, evidence, privacy, change, rollback, and recovery.",
    deliverable:
      "DNS governance, change, and mixed-resolution analysis.",
    quality:
      "Resolution availability, answer correctness, service authorization, and application outcome remain separate.",
  },
  {
    step: "8",
    title: "Resilience and recovery review",
    task:
      "Map fictional primary, alternate, shared, provider, location, capacity, identity, DNS, monitoring, supplier, management, and human dependencies.",
    deliverable:
      "Failure-domain map, degraded-mode matrix, failover workflow, recovery gates, and exercise findings.",
    quality:
      "The review states shared dependencies and capacity limits honestly.",
  },
  {
    step: "9",
    title: "Findings and roadmap",
    task:
      "Prioritize fictional findings and build phased corrective actions with owners, validation, rollback, residual risk, and completion criteria.",
    deliverable:
      "Finding register and thirty-, sixty-, and ninety-day roadmap.",
    quality:
      "The roadmap balances risk reduction with mission continuity and operational feasibility.",
  },
  {
    step: "10",
    title: "Professional briefing and portfolio",
    task:
      "Prepare fictional executive, technical, evidence, reflection, and presentation materials.",
    deliverable:
      "Final defense package and presentation notes.",
    quality:
      "The package is clear, evidence-based, honest about limits, and safe for public review.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest purpose of an integrated fictional network-defense review?",
    choices: [
      "To count how many security products exist.",
      "To connect architecture, identity, communication policy, evidence, operations, resilience, recovery, and governance to mission outcomes.",
      "To prove the environment is fully secure.",
      "To replace service and business owners.",
    ],
    answer: 1,
    explanation:
      "Integrated review evaluates how defensive controls work together to support real mission outcomes.",
  },
  {
    question:
      "A fictional architecture diagram shows strong segmentation. What does that prove?",
    choices: [
      "Effective firewall policy matches the design.",
      "No unauthorized path exists.",
      "The intended design is documented, but implementation, evidence, ownership, exceptions, and lifecycle still require validation.",
      "Monitoring is complete.",
    ],
    answer: 2,
    explanation:
      "Design intent and effective behavior are separate evidence layers.",
  },
  {
    question:
      "Which fictional finding should usually receive the strongest priority?",
    choices: [
      "The finding with the longest description.",
      "A stale emergency role affecting privileged destinations with strong evidence and incomplete revocation.",
      "A low-impact naming typo with no service effect.",
      "Any finding involving the most devices.",
    ],
    answer: 1,
    explanation:
      "Authority, mission impact, evidence, blast radius, and recoverability support stronger priority.",
  },
  {
    question:
      "Why should a Green fictional collector not automatically close a finding?",
    choices: [
      "Because Green always means failure.",
      "Because connectivity may be healthy while event freshness, completeness, timing, schema, or correlation remains degraded.",
      "Because source health is unrelated to evidence.",
      "Because every finding must remain open forever.",
    ],
    answer: 1,
    explanation:
      "Source connectivity and evidence quality are distinct conditions.",
  },
  {
    question:
      "What is the strongest response to an unowned fictional service device?",
    choices: [
      "Assume it is malicious.",
      "Delete it immediately.",
      "Mark it Unvalidated, preserve evidence, identify purpose and ownership, review destinations, then authorize retain, reclassify, isolate, or offboard.",
      "Ignore it because it is already connected.",
    ],
    answer: 2,
    explanation:
      "The response preserves safety and mission continuity without unsupported claims.",
  },
  {
    question:
      "When is fictional network recovery complete?",
    choices: [
      "When the alternate link is active.",
      "When one health check is Green.",
      "After dependencies, policy, evidence, applications, queues, sessions, caches, users, emergency access, communication, and residual risks are validated and reconciled.",
      "When the technical team stops receiving alerts.",
    ],
    answer: 2,
    explanation:
      "Full recovery extends beyond connectivity to correct service and business state.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use real topology but remove addresses.",
      "Use real alerts and change the organization name.",
      "Invent every organization, identity, path, zone, rule, record, alert, owner, date, decision, and outcome from scratch.",
      "Use real recovery details because the project is defensive.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real architecture, evidence, identities, suppliers, controls, and recovery capabilities.",
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
        Module Test
      </Link>
    </div>
  );
}

export default function AdvancedNetworkDefenseLabPage() {
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
              Lesson 10 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Capstone Defensive Review
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A4.10 Advanced Network Defense Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete a fully fictional professional network-defense review that
            integrates architecture, segmentation, firewall strategy, IDS/IPS,
            visibility, remote access, wireless defense, baselines, DNS,
            resilience, evidence quality, tradeoffs, corrective actions,
            recovery, and executive communication.
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
          lessonTitle="Advanced Network Defense Lab"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Begin the Capstone Lab"
          items={[
            "I will use only invented organizations, identities, zones, paths, services, rules, records, alerts, evidence, owners, dates, decisions, and outcomes.",
            "I will distinguish design intent, effective behavior, evidence health, assumptions, alternative explanations, confidence, impact, and residual risk.",
            "I will not describe an alert, anomaly, stale record, broad rule, or unknown device as proof of compromise or malicious intent.",
            "I will evaluate architecture, identity, network policy, DNS, wireless, remote access, monitoring, suppliers, capacity, recovery, and people as one system.",
            "I will create recommendations with owners, validation, rollback, completion criteria, maintenance, and review triggers.",
            "I will not access, test, scan, capture, query, configure, disrupt, reroute, fail over, inspect, monitor, or modify any real network, system, account, provider, device, domain, rule, or recovery environment.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Strong Control Can Still Fail inside a Weak System"
        >
          <p className="leading-8">
            Fictional Northbridge has segmented zones, firewalls, remote-access
            controls, wireless classes, DNS services, monitoring, and a backup
            path. Each control appears reasonable when viewed alone. The
            integrated review reveals something different: a broad legacy rule,
            stale emergency access, unowned service devices, mixed DNS answers,
            delayed evidence, outdated baselines, limited alternate capacity,
            and several shared failure domains.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak review
              </p>
              <p className="mt-2 leading-7">
                “Northbridge has the expected security technologies, so the
                network is secure and resilient.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong review
              </p>
              <p className="mt-2 leading-7">
                “The fictional environment has several strong control designs,
                but evidence supports specific lifecycle, policy, ownership,
                visibility, DNS, capacity, and shared-dependency risks that
                require phased correction.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Professional defense evaluates how controls interact under normal,
            changed, degraded, and recovery conditions—not merely whether they
            exist.
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
          title="Real Defensive Decisions Cross Technical and Organizational Boundaries"
        >
          <p className="leading-8">
            Fictional network defense depends on architecture, identities,
            users, devices, service ownership, policies, naming, suppliers,
            monitoring, privacy, support, capacity, change, recovery, and
            leadership decisions. A narrow technical fix may move risk instead
            of reducing it when these relationships are ignored.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "System thinking",
                "Connect fictional control objectives, dependencies, evidence, failure domains, and mission outcomes.",
              ],
              [
                "Decision quality",
                "Prioritize fictional findings using evidence, authority, blast radius, user impact, privacy, and recoverability.",
              ],
              [
                "Professional communication",
                "Explain fictional technical risk, tradeoffs, residual limitations, owners, resources, and milestones clearly.",
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

        <SectionCard eyebrow="Core Framework" title="The D-E-F-E-N-D-E-R Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "D — Define the mission",
                "State the fictional users, services, assets, outcomes, stakeholders, exclusions, and safety boundary.",
              ],
              [
                "E — Establish intended design",
                "Reconstruct fictional zones, trust boundaries, identities, communication, access, evidence, and recovery.",
              ],
              [
                "F — Find effective behavior",
                "Compare fictional policy, sessions, DNS, wireless, application, supplier, baseline, and recovery evidence.",
              ],
              [
                "E — Evaluate evidence health",
                "Assess fictional freshness, completeness, timing, provenance, coverage, privacy, correlation, and blind periods.",
              ],
              [
                "N — Name findings precisely",
                "Write fictional observations, alternatives, confidence, scope, impact, owner, action, residual risk, and completion criteria.",
              ],
              [
                "D — Decide priorities",
                "Use fictional mission impact, identity, blast radius, evidence, privacy, recoverability, and feasibility.",
              ],
              [
                "E — Engineer phased correction",
                "Sequence fictional containment, ownership, policy, access, DNS, monitoring, resilience, validation, rollback, and maintenance.",
              ],
              [
                "R — Report and review",
                "Communicate fictional executive, technical, evidence, portfolio, and review-trigger information honestly.",
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
              Decision-ready integrated finding
            </p>
            <p className="mt-2 leading-7">
              The fictional evidence supports a specific difference between
              intended and effective network defense. The finding states source
              quality, alternatives, confidence, affected mission, owner,
              priority, corrective action, validation, rollback, completion
              criteria, residual risk, and review trigger without claiming
              unsupported compromise or intent.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for the Integrated Defense Lab"
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

        <SectionCard
          eyebrow="Fictional Case File"
          title="Northbridge Student-Support Cooperative"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Every organization, service, identity, network, provider, record,
            alert, dashboard, owner, date, decision, and outcome in this lab is
            invented. The case cannot authorize access to or testing of any real
            environment.
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {caseFacts.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.area}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.fact}
                </p>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Why it matters
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.importance}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Professional Workflow"
          title="Complete the Ten-Phase Review"
        >
          <div className="grid gap-5">
            {professionalWorkflow.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.phase}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.purpose}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required outputs
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.outputs}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Quality standard
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Integrated Architecture Review"
          title="Analyze Ten Defensive Layers"
        >
          <div className="grid gap-5">
            {architectureLayers.map((item) => (
              <article
                key={item.layer}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.layer}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Mission purpose", item.purpose],
                    ["Control design", item.controls],
                    ["Fictional evidence", item.evidence],
                    ["Integrated concern", item.concern],
                    ["Recommended direction", item.recommendation],
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
          eyebrow="Finding Register"
          title="Review Ten Evidence-Supported Findings"
        >
          <div className="grid gap-5">
            {findings.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ${
                      item.priority === "Critical"
                        ? "border border-red-400/30 bg-red-400/10 text-red-100"
                        : item.priority === "High"
                          ? "border border-yellow-400/30 bg-yellow-400/10 text-yellow-100"
                          : "border border-blue-400/30 bg-blue-400/10 text-blue-100"
                    }`}
                  >
                    {item.priority}
                  </span>
                  <h3 className="font-black text-white">{item.title}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Evidence", item.evidence],
                    ["Alternative explanations", item.alternatives],
                    ["Confidence", item.confidence],
                    ["Potential impact", item.impact],
                    ["Corrective action", item.action],
                    ["Owner", item.owner],
                    ["Completion criteria", item.completion],
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Prioritization Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evaluate Ten Decision Dimensions
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {prioritizationDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.dimension}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Decision question
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong use
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.strongUse}</p>
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
        </section>

        <SectionCard
          eyebrow="Phased Improvement Plan"
          title="Build a Thirty-, Sixty-, and Ninety-Day Roadmap"
        >
          <div className="grid gap-5">
            {roadmap.map((item) => (
              <article
                key={item.period}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-emerald-100">
                  {item.period}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.goals}</p>

                <div className="mt-5 rounded-xl border border-slate-700 bg-slate-900 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Actions
                  </p>
                  <div className="mt-3 grid gap-2">
                    {item.actions.map((action) => (
                      <div
                        key={action}
                        className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm leading-6 text-slate-300"
                      >
                        {action}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Validation
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.validation}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Rollback and safety
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.rollback}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Professional Communication"
          title="Build the Executive Summary and Technical Appendix"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Executive mission statement",
                "Explain which fictional user and service outcomes the network must protect.",
              ],
              [
                "Overall assurance statement",
                "Describe fictional strengths, major limitations, evidence confidence, and coverage confidence.",
              ],
              [
                "Top three priorities",
                "Name the fictional findings with the highest mission, authority, blast-radius, or resilience impact.",
              ],
              [
                "Why action is needed",
                "Connect fictional policy, access, evidence, DNS, capacity, or recovery gaps to user and service outcomes.",
              ],
              [
                "Recommended roadmap",
                "Summarize fictional immediate, near-term, and longer-term corrective actions.",
              ],
              [
                "Resources and ownership",
                "Identify fictional roles, coordination, evidence, testing, support, and leadership decisions required.",
              ],
              [
                "Residual risk",
                "State which fictional shared dependencies, evidence gaps, suppliers, capacity, and lifecycle limitations remain.",
              ],
              [
                "Decision request",
                "Ask fictional leadership to approve priorities, owners, milestones, acceptance, or additional resilience work.",
              ],
              [
                "Technical architecture",
                "Document fictional zones, trust boundaries, identities, communication, DNS, monitoring, and recovery dependencies.",
              ],
              [
                "Finding evidence",
                "Provide fictional observation, source, alternatives, confidence, impact, owner, action, validation, and completion criteria.",
              ],
              [
                "Change and rollback",
                "Explain fictional implementation sequence, gates, observation, rollback, and support.",
              ],
              [
                "Maintenance and review",
                "Define fictional ownership, recertification, source health, exercises, trigger events, and retirement.",
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
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Integrated Architecture"
          title="Northbridge Advanced Network Defense Model"
        >
          <p className="leading-8">
            This conceptual model is completely invented and intentionally
            non-operational. It teaches professional integration without real
            addresses, routes, devices, providers, domains, credentials,
            policies, logs, identities, suppliers, capacities, or recovery
            details.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.85fr_1.5fr_0.85fr]">
            <div className="grid gap-3">
              {[
                ["Users and devices", "Employee, support, guest, service, supplier, administrator"],
                ["Access controls", "Identity, role, device, purpose, destination, time, session"],
                ["Network classes", "Public, employee, guest, service-device, administration, recovery"],
                ["Policy boundaries", "Segmentation, firewall, remote access, wireless, DNS"],
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
                Fictional Northbridge Defense Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Architecture", "Zones, trust, services, data, suppliers, management"],
                  ["Policy", "Least privilege, least connectivity, exceptions, lifecycle"],
                  ["Visibility", "Network, IDS/IPS, policy, DNS, wireless, application"],
                  ["Evidence health", "Freshness, completeness, timing, provenance, privacy"],
                  ["Baselines", "Expected identity, service, destination, time, state"],
                  ["DNS", "Zones, records, resolvers, cache, policy, ownership"],
                  ["Resilience", "Diversity, capacity, degraded mode, failover, failback"],
                  ["Recovery", "Dependency order, validation, reconciliation, revocation"],
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
                ["Mission outcomes", "Case access, updates, notifications, support, supplier results"],
                ["Decision records", "Findings, owners, priorities, validation, rollback"],
                ["Leadership view", "Impact, resources, residual risk, milestones"],
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
          title="Fake Northbridge Integrated Defense Dashboard"
          subtitle="Fictional architecture, policy, access, evidence, DNS, baseline, resilience, and remediation status for training only."
          metrics={[
            {
              label: "Critical findings",
              value: "3",
              note: "Emergency-role revocation, alternate-path capacity, and underreported shared failure domains require immediate ownership.",
            },
            {
              label: "High-priority findings",
              value: "5",
              note: "Firewall scope, supplier access, wireless ownership, mixed DNS answers, and delayed evidence require near-term correction.",
            },
            {
              label: "Integrated assurance confidence",
              value: "Moderate",
              note: "Architecture coverage is strong, but delayed evidence, stale baselines, DNS inconsistency, and resilience gaps limit confidence.",
            },
          ]}
        />

        <FakeAlertCard
          title="Integrated Defense Review Requires Degraded-State Governance"
          severity="High"
          time="5:18 PM"
          source="Fake Northbridge Integrated Defense Console"
          details="The fictional environment has basic alternate connectivity, but shared identity and DNS dependencies, delayed monitoring evidence, limited capacity, stale emergency access, mixed service resolution, and incomplete supplier and wireless lifecycle controls prevent a full assurance declaration."
          recommendation="Maintain Moderate assurance and a documented Degraded operating model. Close critical identity and capacity findings, restore evidence health, reconcile DNS, assign wireless and supplier ownership, narrow policy, revalidate baselines, and repeat the integrated exercise before claiming stronger assurance."
        />

        <FakeLogPanel
          title="Fake Integrated Review Timeline"
          logs={[
            "09:00 SCOPE mission='approved'",
            "09:08 ARCH zones='10'",
            "09:16 POLICY broad-rules='3'",
            "09:24 ACCESS supplier-expiration='incomplete'",
            "09:32 ACCESS emergency-role='active'",
            "09:40 WIRELESS unowned-devices='2'",
            "09:48 BASELINE stale-versions='4'",
            "09:56 DNS resolver-difference='open'",
            "10:04 SOURCE delayed-streams='2'",
            "10:12 RESILIENCE alternate-capacity='limited'",
            "10:20 RESILIENCE shared-domains='5'",
            "10:28 SUPPORT incomplete-sessions='3'",
            "10:36 FINDINGS critical='3'",
            "10:44 FINDINGS high='5'",
            "10:52 FINDINGS medium='2'",
            "11:00 ROADMAP days-30='defined'",
            "11:08 ROADMAP days-60='defined'",
            "11:16 ROADMAP days-90='defined'",
            "11:24 CONFIDENCE assurance='moderate'",
            "17:18 ALERT issue='integrated-defense-gaps'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Integrated Evidence Supports—and What It Does Not Prove
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
                    ["Integrated-review use", item.use],
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
          title="Which Integrated Recommendation Is Best Supported?"
          question="Which conclusion most responsibly represents the fictional Northbridge review?"
          evidence={[
            "Most high-value zones and communication relationships are documented.",
            "Three broad or stale firewall relationships have incomplete lifecycle evidence.",
            "One supplier profile and one emergency role have incomplete expiration or revocation.",
            "Two wireless service devices and one event exception lack current ownership.",
            "Two evidence streams are delayed despite Green collector connectivity.",
            "Approved resolver groups return mixed answers for a migrated service.",
            "The alternate path restores reads but has limited capacity and several shared dependencies.",
            "No supplied evidence proves compromise, malicious intent, or total control failure.",
          ]}
          options={[
            "Rate fictional assurance Moderate, close critical identity and capacity findings first, restore evidence health, reconcile DNS, assign wireless and supplier ownership, narrow stale policy, revalidate baselines, strengthen shared-dependency alternatives, and repeat the integrated exercise before raising assurance.",
            "Declare the environment compromised because multiple findings exist.",
            "Rate assurance High because all major security technologies are present.",
            "Remove every uncertain rule, device, alias, and access profile immediately without dependency validation.",
          ]}
          bestAnswer={0}
          explanation="The first option integrates the supplied strengths and weaknesses, preserves uncertainty, prioritizes the highest-impact issues, and uses phased validation rather than unsupported conclusions or disruptive mass removal."
        />

        <SectionCard
          eyebrow="Common Review Mistakes"
          title="Avoid Ten Capstone Errors"
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
                    Fictional example
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.example}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Consequence
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.consequence}</p>
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
          eyebrow="Safe Fictional Capstone Lab"
          title="Produce the Complete Advanced Network Defense Review"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the fictional Northbridge evidence supplied on this page.
            Do not access, scan, capture, query, test, configure, change, block,
            reroute, fail over, inspect, monitor, identify, or modify any real
            network, account, system, device, domain, provider, rule, supplier,
            log source, or recovery environment.
          </div>

          <div className="mt-6 grid gap-5">
            {labDeliverables.map((item) => (
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
                    <p className="mt-2 leading-7 text-slate-300">{item.task}</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required deliverable
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.deliverable}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Quality standard
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Leadership Wants Every Finding Fixed Immediately"
          scenario="Fictional leadership asks the review team to remove every broad rule, uncertain device, temporary alias, supplier profile, and exception in one change window. Several dependencies and rollback paths remain incomplete."
          choices={[
            {
              label: "Choice A",
              response:
                "Prioritize fictional critical identity and capacity findings, apply bounded compensating controls, validate dependencies, then use phased policy, DNS, wireless, supplier, and baseline changes with observation and rollback.",
              outcome:
                "Best defensive choice. It reduces urgent risk while protecting mission continuity and evidence quality.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Remove everything immediately because uncertainty is unacceptable.",
              outcome:
                "Weak. Mass removal can break hidden mission and recovery dependencies.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delay every action until all evidence is perfect.",
              outcome:
                "Weak. Critical lifecycle and capacity findings already justify bounded corrective action.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Exercise Restores Connectivity but Evidence and State Remain Incomplete"
          scenario="A fictional integrated exercise activates the alternate path. Read access works, but DNS answers are mixed, support authentication fails, application evidence is delayed, updates are queued, and an emergency role remains active."
          choices={[
            {
              label: "Choice A",
              response:
                "Maintain fictional Degraded Operation, preserve critical reads and priority work, limit high-impact changes, restore DNS, identity, evidence, and support, reconcile queues and sessions, revoke emergency access, then validate failback and closure.",
              outcome:
                "Best choice. It separates connectivity failover from full mission recovery.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare full recovery because the portal loads.",
              outcome:
                "Weak. Multiple dependencies, evidence sources, and lifecycle controls remain incomplete.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Fail back immediately because the alternate environment is imperfect.",
              outcome:
                "Weak. Rushed failback can create a second disruption before state is reconciled.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend Your Recommendation before a Fictional Review Board"
        >
          <p className="leading-8">
            A fictional review board includes application, identity, network,
            privacy, support, supplier, monitoring, recovery, and leadership
            representatives. Each role challenges a different part of your
            recommendation. Your job is to defend the roadmap without claiming
            certainty the evidence does not support.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Application owner challenge",
                "Explain how fictional policy narrowing avoids breaking required service dependencies.",
              ],
              [
                "Identity owner challenge",
                "Explain why stale emergency and supplier access receive immediate lifecycle attention.",
              ],
              [
                "Privacy owner challenge",
                "Explain how fictional visibility improves without collecting unnecessary personal or naming data.",
              ],
              [
                "Support owner challenge",
                "Explain how fictional changes preserve accessible help and safe alternatives.",
              ],
              [
                "Supplier owner challenge",
                "Explain how fictional shared dependencies and external access remain governable.",
              ],
              [
                "Resilience owner challenge",
                "Explain why alternate connectivity does not justify a Full Recovery declaration.",
              ],
              [
                "Leadership challenge",
                "Explain fictional costs, milestones, residual risk, accepted limitations, and decision requests.",
              ],
              [
                "Portfolio challenge",
                "Explain how every fictional detail remains safe for public learning while still demonstrating advanced skill.",
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
              Prepare a fictional eight-minute briefing, twelve-question review
              defense, evidence appendix, priority justification, alternative
              option analysis, residual-risk statement, implementation gates,
              rollback plan, and reflection on what evidence would change your
              recommendation.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Advanced Network Defense Lab Checklist"
          items={[
            "I can connect fictional architecture, segmentation, firewalls, visibility, remote access, wireless, baselines, DNS, resilience, and recovery.",
            "I can distinguish design intent, effective behavior, control objectives, control evidence, findings, assumptions, and residual risk.",
            "I can write findings with observation, evidence, alternatives, confidence, scope, impact, priority, action, owner, and completion criteria.",
            "I can evaluate user, device, service, supplier, privileged, emergency, guest, and recovery identities.",
            "I can evaluate policy, DNS, baseline, source-health, capacity, and shared-dependency conditions without unsupported compromise claims.",
            "I can prioritize fictional findings by mission impact, authority, blast radius, evidence, privacy, recoverability, and feasibility.",
            "I can use compensating controls and phased implementation when immediate replacement could disrupt the mission.",
            "I can define validation gates, observation periods, rollback criteria, completion criteria, maintenance, and review triggers.",
            "I can distinguish network failover, degraded operation, service recovery, reconciliation, failback, and closure.",
            "I can communicate different levels of detail to fictional technical, operational, privacy, support, supplier, recovery, and leadership audiences.",
            "I can state evidence limits, residual risks, and shared dependencies honestly.",
            "I can create a completely fictional capstone without using real topology, providers, domains, identities, policies, logs, devices, suppliers, capacities, or recovery details.",
          ]}
        />

        <MiniQuiz
          title="A4.10 Mini Quiz: Advanced Network Defense Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Advanced Network Defense Review for the Northbridge Student-Support Cooperative. Include mission, scope, stakeholders, exclusions, safety boundary, assumptions, at least ten zones, trust boundaries, identity types, user journeys, service dependencies, communication register, segmentation review, firewall strategy, rule-hygiene findings, IDS/IPS visibility, sensor coverage, encrypted-boundary limits, alert governance, source health, privacy, remote-access profiles, supplier access, emergency access, wireless classes, service-device ownership, guest and event access, baselines, anomalies, DNS zones, records, resolvers, caches, mixed-resolution review, resilience objectives, failure domains, capacity, degraded modes, health checks, failover, failback, recovery order, reconciliation, at least twenty findings, priority matrix, corrective actions, compensating controls, owners, validation gates, rollback criteria, completion criteria, thirty-day roadmap, sixty-day roadmap, ninety-day roadmap, residual-risk summary, executive summary, technical appendix, evidence appendix, presentation notes, review-board questions, reflection, and a statement that every organization, identity, zone, path, service, rule, record, alert, provider, owner, date, decision, and outcome is invented."
          tips={[
            "Begin with fictional mission outcomes and trust boundaries before writing technical recommendations.",
            "Separate intended design, effective behavior, evidence quality, source health, alternative explanations, confidence, and impact.",
            "Prioritize stale privileged access, capacity, broad policy, ownership, evidence, DNS, and shared-dependency risks according to mission consequences.",
            "Use phased correction, compensating controls, validation, rollback, recovery, maintenance, and review triggers.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the A4 Module Test?"
        >
          <p className="leading-8">
            Rate your readiness from 1 to 5 for architecture, trust boundaries,
            segmentation, firewall governance, IDS/IPS, visibility, remote
            access, wireless, baselines, DNS, resilience, evidence, findings,
            prioritization, corrective actions, recovery, executive
            communication, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain how fictional network controls depend on identity, DNS, applications, suppliers, monitoring, users, and recovery.",
              "I can distinguish architecture documentation from effective policy and behavior.",
              "I can evaluate alerts, anomalies, unknown devices, stale records, and broad rules without unsupported intent claims.",
              "I can prioritize findings using mission, authority, blast radius, evidence, privacy, recoverability, and feasibility.",
              "I can create phased recommendations with validation, rollback, ownership, and completion criteria.",
              "I can separate failover, degraded operation, recovery, reconciliation, failback, and closure.",
              "I can defend a fictional recommendation before technical and leadership audiences.",
              "I can produce a safe public portfolio without exposing or modifying real network information.",
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
            Record your strongest fictional finding, the evidence that supports
            it, one alternative explanation, your confidence, the priority, the
            first corrective action, the rollback condition, the completion
            criterion, and one question you still need to review before the
            module test.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Advanced fictional network defense evaluates how architecture, identity, policy, evidence, applications, suppliers, people, and recovery operate as one system.",
            "Documented design does not prove effective implementation, and observed behavior does not automatically prove authorization or safety.",
            "Findings should separate observation, evidence, alternatives, confidence, scope, impact, owner, action, residual risk, and completion criteria.",
            "Stale privileged access, broad communication policy, delayed evidence, mixed DNS state, ownership gaps, capacity limits, and shared dependencies can interact and increase risk.",
            "Evidence connectivity, freshness, completeness, timing, provenance, correlation, coverage, and privacy should be evaluated separately.",
            "Unknown or unowned fictional devices, records, rules, aliases, and access profiles require validation—not automatic blame or deletion.",
            "Priority should reflect mission impact, authority, blast radius, evidence, privacy, recoverability, feasibility, and correlated risk.",
            "Phased implementation, compensating controls, validation gates, rollback, support, and maintenance reduce the risk of defensive change.",
            "Failover, degraded operation, recovery, reconciliation, failback, and closure are separate professional decisions.",
            "Every CyberShield capstone artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete Module A4
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            You have completed all ten Advanced Networking Defense lessons.
            Continue to the module test to demonstrate mastery of architecture,
            segmentation, firewall governance, visibility, remote access,
            wireless defense, baselines, DNS, resilience, evidence, and
            professional defensive decision-making.
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