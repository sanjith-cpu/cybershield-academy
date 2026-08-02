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
const previousLesson = modulePath;
const nextLesson = `${modulePath}/segmentation-and-microsegmentation-concepts`;

const objectives = [
  "Explain defensive network architecture as a mission-driven design discipline connecting users, services, identities, data, zones, dependencies, visibility, safe failure, recovery, evidence, and ownership.",
  "Model fictional network zones, communication paths, administrative relationships, supplier boundaries, wireless classes, remote-access paths, monitoring locations, and recovery connections without using real infrastructure details.",
  "Evaluate fictional north-south, east-west, administrative, supplier, wireless, DNS, management, monitoring, and recovery traffic based on documented purpose, identity, service need, trust, evidence, and lifecycle.",
  "Identify fictional architectural weaknesses such as flat trust, hidden dependencies, shared control points, weak administrative separation, blind spots, unsafe fallback, stale exceptions, and recovery paths that bypass normal controls.",
  "Create a portfolio-ready fictional defensive network architecture brief with zones, critical services, path requirements, control objectives, evidence needs, owners, assumptions, residual risks, and review triggers.",
];

const vocabulary = [
  [
    "Defensive network architecture",
    "A fictional mission-driven design showing how users, devices, services, identities, data, zones, dependencies, controls, evidence, administration, and recovery interact safely.",
  ],
  [
    "Network zone",
    "A fictional grouping of systems, services, users, or devices with similar mission purpose, trust requirements, data sensitivity, administrative ownership, or control expectations.",
  ],
  [
    "Security boundary",
    "A fictional point where trust, identity, authority, data handling, ownership, visibility, policy, or responsibility changes.",
  ],
  [
    "North-south traffic",
    "Fictional communication entering or leaving a defined environment, such as user-to-portal or internal-service-to-supplier traffic.",
  ],
  [
    "East-west traffic",
    "Fictional communication between internal zones, services, workloads, or dependencies.",
  ],
  [
    "Administrative path",
    "A fictional communication path used for privileged management, support, configuration, maintenance, monitoring, emergency access, or recovery.",
  ],
  [
    "Control point",
    "A fictional location where identity, authorization, segmentation, validation, inspection, logging, rate handling, approval, or recovery requirements are enforced.",
  ],
  [
    "Choke point",
    "A fictional place where many important paths depend on one component or control, creating both strong governance opportunities and concentrated failure risk.",
  ],
  [
    "Shared dependency",
    "A fictional service such as identity, DNS, time, networking, monitoring, management, supplier connectivity, or recovery that supports several zones or mission functions.",
  ],
  [
    "Management plane",
    "The fictional services, identities, interfaces, and evidence used to administer network and infrastructure components.",
  ],
  [
    "Data plane",
    "The fictional paths that carry normal user, application, service, file, message, and business communication.",
  ],
  [
    "Control plane",
    "The fictional decisions and protocols that determine how communication is routed, permitted, denied, prioritized, or changed.",
  ],
  [
    "Out-of-band management",
    "A fictional separately governed management path intended to remain available when normal operational paths are degraded.",
  ],
  [
    "Blast radius",
    "The fictional scope of assets, services, users, identities, data, or recovery functions that could be affected by one unsafe condition or control failure.",
  ],
  [
    "Least connectivity",
    "A fictional design principle allowing only the communication required for an approved mission purpose under defined identity, service, destination, time, state, and ownership conditions.",
  ],
  [
    "Service dependency",
    "A fictional identity, naming, queue, data, management, supplier, monitoring, storage, notification, or recovery capability needed for another service to operate.",
  ],
  [
    "Failure domain",
    "A fictional grouping of components that may fail together because they share power, management, routing, identity, DNS, supplier, policy, capacity, or administrative ownership.",
  ],
  [
    "Trust relationship",
    "A fictional decision describing why one actor, zone, service, or dependency is allowed to rely on another and what evidence or controls justify that reliance.",
  ],
  [
    "Reachability",
    "Whether a fictional source can communicate with a destination under defined conditions; reachability alone does not prove authorization or safe business action.",
  ],
  [
    "Policy enforcement point",
    "A fictional place where approved network, identity, application, device, data, or administrative policy is evaluated.",
  ],
  [
    "Visibility point",
    "A fictional source of network evidence such as connection metadata, control results, source health, flow records, service events, DNS events, or approved inspection.",
  ],
  [
    "Architectural invariant",
    "A fictional design statement that must remain true, such as administrative access never sharing the same trust path as guest access.",
  ],
  [
    "Safe failure",
    "A fictional condition where control or dependency failure limits exposure, preserves evidence, communicates degradation, and supports controlled recovery.",
  ],
  [
    "Architecture review trigger",
    "A fictional event that requires the design to be reconsidered, such as a new supplier, zone, identity source, remote-access path, wireless class, DNS dependency, recovery method, or mission change.",
  ],
];

const principles = [
  {
    principle: "Begin with mission, not devices",
    description:
      "A fictional architecture should first explain which users, services, data, identities, evidence, support, suppliers, and recovery outcomes matter.",
    strongPractice:
      "Define the student-support mission, critical workflows, owners, and recovery needs before choosing zones or control points.",
    failure:
      "A diagram may contain many devices without showing which communication or controls actually protect the mission.",
  },
  {
    principle: "Make trust explicit",
    description:
      "Every fictional relationship should state what one zone or service trusts another to do, which identity acts, and which evidence supports that decision.",
    strongPractice:
      "The workflow service accepts supplier results only after source identity, schema, correlation, freshness, state compatibility, and evidence checks.",
    failure:
      "A line between boxes can hide assumptions about identity, authorization, validation, and responsibility.",
  },
  {
    principle: "Separate user, service, and administrative paths",
    description:
      "Fictional normal use, service communication, privileged management, monitoring, support, emergency access, and recovery should have distinct purposes and controls.",
    strongPractice:
      "Administrative access uses a separately governed path with stronger identity, approval, destination, evidence, and lifecycle requirements.",
    failure:
      "One shared path can expand blast radius and make normal traffic indistinguishable from privileged action.",
  },
  {
    principle: "Design least connectivity",
    description:
      "Allow only fictional communication required by a documented mission purpose, source, destination, identity, service, data need, state, owner, and review.",
    strongPractice:
      "A notification service receives only approved message requests from the workflow service and does not require broad data-zone access.",
    failure:
      "Broad reachability can outlive its purpose and become difficult to review safely.",
  },
  {
    principle: "Model shared dependencies",
    description:
      "Identity, DNS, time, routing, management, monitoring, supplier, storage, and recovery services may support many fictional zones.",
    strongPractice:
      "Show which critical services rely on the same identity and naming systems and how those dependencies fail or recover.",
    failure:
      "Apparently separated services may still share one failure domain.",
  },
  {
    principle: "Place visibility with purpose",
    description:
      "Fictional evidence collection should answer defined defender questions while preserving privacy, source health, retention, and access limits.",
    strongPractice:
      "Collect connection, policy, source-health, and service-correlation evidence where trust changes occur.",
    failure:
      "More visibility can create noise, privacy exposure, cost, and false confidence without improving decisions.",
  },
  {
    principle: "Assume controls can fail",
    description:
      "Fictional policy enforcement, identity, DNS, routing, monitoring, remote access, wireless, supplier, and recovery controls may be unavailable or unhealthy.",
    strongPractice:
      "Define safe defaults, degraded modes, alternate evidence, owner escalation, and recovery gates.",
    failure:
      "A strong control can become a concentrated single point of failure.",
  },
  {
    principle: "Design for recovery correctness",
    description:
      "Restoring fictional connectivity is not enough if identity, DNS, routing, business state, monitoring, notifications, and administrative access remain incorrect.",
    strongPractice:
      "Use recovery order, dependency validation, reconciliation, communication, and closure evidence.",
    failure:
      "Technical availability can return while the service remains unsafe or misleading.",
  },
  {
    principle: "Assign ownership and lifecycle",
    description:
      "Every fictional zone, path, control, dependency, visibility source, exception, and recovery relationship needs an accountable owner and review trigger.",
    strongPractice:
      "Temporary supplier connectivity expires unless the fictional owner revalidates purpose, scope, evidence, and residual risk.",
    failure:
      "Unowned paths and exceptions can become permanent architecture.",
  },
  {
    principle: "Keep the public artifact fictional",
    description:
      "A learning architecture must demonstrate reasoning without exposing real addresses, routes, rules, devices, suppliers, logs, credentials, or internal diagrams.",
    strongPractice:
      "Invent every zone, path, identity, policy, record, date, owner, finding, and outcome.",
    failure:
      "Removing a company name does not make real internal network detail safe to publish.",
  },
];

const zones = [
  {
    zone: "Public access zone",
    purpose:
      "Hosts the fictional student-facing portal and only the functions required to receive approved user requests.",
    typicalActors:
      "Student portal users and approved public-facing service identities.",
    allowedRelationships:
      "User-to-portal communication and narrowly defined portal-to-application communication.",
    controlObjectives:
      "Strong identity transition, input validation, session protection, object authorization, rate handling, minimal service reachability, and evidence.",
    evidence:
      "Authentication result, session context, request validation, policy decision, destination, result, source health, and user confirmation.",
    failureQuestions:
      "What happens when identity, application, DNS, rate handling, or monitoring is unavailable?",
  },
  {
    zone: "Application services zone",
    purpose:
      "Runs fictional workflow, case, and service logic that coordinates business processes.",
    typicalActors:
      "Portal service, workflow service, approved service identities, and controlled support workflows.",
    allowedRelationships:
      "Approved communication with public access, data, supplier integration, notification, evidence, and recovery services.",
    controlObjectives:
      "Service identity, least connectivity, object and state validation, dependency separation, change control, and resilient evidence.",
    evidence:
      "Service identity, request purpose, object, state, destination, control result, correlation, change version, and health.",
    failureQuestions:
      "Could degraded service bypass validation, create stale state, or hide dependency failure?",
  },
  {
    zone: "Sensitive data zone",
    purpose:
      "Stores fictional case, account, preference, retention, and workflow state requiring stronger confidentiality and integrity controls.",
    typicalActors:
      "Approved data services, workflow service identities, recovery identities, and limited administrative roles.",
    allowedRelationships:
      "Narrow application-to-data and recovery-to-data relationships with explicit identity and purpose.",
    controlObjectives:
      "Strong identity, object authorization, purpose limitation, encryption, integrity, auditability, retention, backup, and recovery validation.",
    evidence:
      "Actor, service identity, data object, operation, purpose, result, approval, source health, retention, and recovery state.",
    failureQuestions:
      "How is access limited during support, maintenance, degraded operation, and recovery?",
  },
  {
    zone: "Supplier integration zone",
    purpose:
      "Separates fictional external processing communication from core internal services.",
    typicalActors:
      "Supplier service identities, integration services, queue services, and supplier owners.",
    allowedRelationships:
      "Approved minimized requests to the supplier and validated results returning through controlled interfaces.",
    controlObjectives:
      "Identity, destination restriction, schema validation, data minimization, correlation, freshness, duplicate handling, evidence, and safe failure.",
    evidence:
      "Service identity, supplier destination, request fields, result fields, correlation, queue age, source health, validation, and owner review.",
    failureQuestions:
      "What if the supplier is delayed, unavailable, returns stale data, changes fields, or loses evidence continuity?",
  },
  {
    zone: "Administrative management zone",
    purpose:
      "Provides fictional privileged management, configuration, maintenance, and support capabilities through separately governed paths.",
    typicalActors:
      "Authorized administrators, support supervisors, service-management identities, and emergency-access roles.",
    allowedRelationships:
      "Purpose-bound, time-bound, destination-bound administrative access to approved management interfaces.",
    controlObjectives:
      "Strong identity, device context, approval, least privilege, session evidence, separation of duties, change tracking, and revocation.",
    evidence:
      "Actor, device, role, approval, destination, action, old state, new state, result, session, and review.",
    failureQuestions:
      "How are emergency access, remote administration, failed identity, and recovery authority controlled?",
  },
  {
    zone: "Monitoring and evidence zone",
    purpose:
      "Collects fictional minimized evidence about network, identity, service, policy, DNS, queue, wireless, control, and recovery behavior.",
    typicalActors:
      "Evidence collection services, analysts, source-health monitors, and review owners.",
    allowedRelationships:
      "Approved event delivery from defined sources and controlled analyst access to necessary evidence.",
    controlObjectives:
      "Purpose limitation, source health, event meaning, correlation, privacy, access, retention, availability, integrity, and alternate evidence.",
    evidence:
      "Source, event schema, health, timestamp, transformation, collector status, access, retention, alert, analyst action, and closure.",
    failureQuestions:
      "How are blind periods, unhealthy sources, noisy alerts, and over-collection identified and handled?",
  },
  {
    zone: "Wireless access zone",
    purpose:
      "Separates fictional managed devices, employee access, guest access, service devices, and administrative wireless needs.",
    typicalActors:
      "Managed endpoints, approved users, guest users, service devices, support roles, and wireless-management identities.",
    allowedRelationships:
      "Identity- and device-aware communication to approved services; guest access remains separated from internal service paths.",
    controlObjectives:
      "Onboarding, identity, device context, network class separation, management security, monitoring, support, lifecycle, and safe alternatives.",
    evidence:
      "User identity, device identity, network class, authorization result, session, destination class, policy outcome, source health, and revocation.",
    failureQuestions:
      "What happens when identity, device posture, wireless management, or onboarding services are unavailable?",
  },
  {
    zone: "Recovery and continuity zone",
    purpose:
      "Supports fictional backup, restore, emergency coordination, alternate access, validation, reconciliation, and closure.",
    typicalActors:
      "Recovery coordinators, recovery service identities, approved administrators, evidence owners, and continuity owners.",
    allowedRelationships:
      "Separately approved recovery communication with identity, DNS, application, data, notification, archive, and monitoring services.",
    controlObjectives:
      "Trusted recovery identity, artifact integrity, order, dependency validation, emergency-access governance, evidence continuity, reconciliation, and revocation.",
    evidence:
      "Recovery trigger, approver, actor, source artifact, destination, action, result, validation, communication, reconciliation, and closure.",
    failureQuestions:
      "Could recovery restore connectivity while leaving identity, DNS, business state, monitoring, or communication incorrect?",
  },
];

const pathTypes = [
  {
    path: "User access path",
    example:
      "Fictional student device → public portal → application service.",
    requiredContext:
      "User identity, session, device or client context, request purpose, object ownership, validation, destination, result, and evidence.",
    controlPoint:
      "Public access boundary and application authorization layer.",
    failure:
      "Identity outage, stale session, invalid input, duplicate request, or misleading response.",
    recovery:
      "Safe retry, preserved user intent, clear status, correction, and evidence.",
  },
  {
    path: "Application-to-data path",
    example:
      "Fictional workflow service → sensitive data service.",
    requiredContext:
      "Service identity, approved operation, data object, business state, purpose, authorization, result, and audit evidence.",
    controlPoint:
      "Application policy and data authorization boundary.",
    failure:
      "Broad service authority, wrong object, stale state, unavailable data, or incomplete evidence.",
    recovery:
      "Restore correct service identity, data state, authorization, reconciliation, and monitoring.",
  },
  {
    path: "Supplier request path",
    example:
      "Fictional application service → supplier integration → processing supplier.",
    requiredContext:
      "Service identity, supplier destination, approved fields, purpose, schema, correlation, retention, and owner.",
    controlPoint:
      "Supplier administrative boundary.",
    failure:
      "Excessive data, wrong destination, schema drift, supplier delay, or unclear ownership.",
    recovery:
      "Pause unsafe processing, correct request, validate supplier state, and reconcile.",
  },
  {
    path: "Supplier result path",
    example:
      "Fictional supplier → result queue → workflow service.",
    requiredContext:
      "Source identity, correlation, freshness, ordering, duplicate handling, state version, validation, and source health.",
    controlPoint:
      "Result validation and workflow-state boundary.",
    failure:
      "Stale, delayed, duplicated, misordered, malformed, or incorrectly trusted result.",
    recovery:
      "Controlled review, state reconciliation, corrected notification, and closure evidence.",
  },
  {
    path: "Administrative path",
    example:
      "Fictional administrator → remote-access service → management zone → approved target.",
    requiredContext:
      "Strong identity, managed device, role, purpose, destination, time, approval, session evidence, action, and revocation.",
    controlPoint:
      "Remote-access and management authorization layers.",
    failure:
      "Broad destination access, stale role, weak device context, incomplete session evidence, or emergency-access persistence.",
    recovery:
      "Revoke unsafe authority, validate configuration state, restore access safely, and review evidence.",
  },
  {
    path: "Monitoring path",
    example:
      "Fictional network and service sources → evidence collection → analyst review.",
    requiredContext:
      "Source, schema, health, purpose, transformation, timestamp, privacy limit, correlation, retention, and owner.",
    controlPoint:
      "Evidence collection and access boundary.",
    failure:
      "Blind period, unhealthy source, over-collection, noise, missing context, or false confidence.",
    recovery:
      "Restore collection, mark evidence gaps, use alternate evidence, and reassess affected decisions.",
  },
  {
    path: "Wireless path",
    example:
      "Fictional managed device → managed wireless class → approved application service.",
    requiredContext:
      "User identity, device identity, network class, authorization, destination, session, policy, evidence, and lifecycle.",
    controlPoint:
      "Wireless onboarding and network authorization boundary.",
    failure:
      "Wrong network class, stale device, unavailable identity, weak guest separation, or missing visibility.",
    recovery:
      "Move to safe limited access, restore identity and policy, revoke stale access, and validate evidence.",
  },
  {
    path: "Recovery path",
    example:
      "Fictional recovery coordinator → recovery zone → identity, DNS, application, data, notification, archive, and monitoring services.",
    requiredContext:
      "Trigger, approval, recovery identity, artifact, destination, order, validation, evidence, communication, and closure.",
    controlPoint:
      "Recovery governance and dependency gates.",
    failure:
      "Incorrect restore order, broad emergency authority, stale naming, unavailable evidence, or unreconciled business state.",
    recovery:
      "Return to controlled degraded mode, correct sequence, reconcile state, revoke emergency access, and close.",
  },
];

const architectureQuestions = [
  {
    area: "Mission",
    question:
      "Which fictional user and service outcomes must remain correct, available, private, attributable, understandable, and recoverable?",
    evidence:
      "Service objectives, user journeys, critical workflows, owner decisions, support themes, and recovery expectations.",
  },
  {
    area: "Identity",
    question:
      "Which human and service identities act across each path, and how are role, object, device, time, purpose, lifecycle, and approval evaluated?",
    evidence:
      "Identity source, role map, service-identity register, access review, approval, session, and lifecycle records.",
  },
  {
    area: "Reachability",
    question:
      "Which fictional source truly needs to reach which destination for which purpose and under which state?",
    evidence:
      "Communication register, service dependency, owner approval, policy result, usage evidence, exception, and expiration.",
  },
  {
    area: "Trust",
    question:
      "What must be validated before a fictional zone accepts identity, data, commands, results, or evidence from another zone?",
    evidence:
      "Identity, schema, authorization, state, freshness, correlation, source health, policy, and owner review.",
  },
  {
    area: "Administration",
    question:
      "Are privileged management, support, emergency, and recovery paths separated from normal user and service communication?",
    evidence:
      "Management architecture, remote-access decision, destination list, session evidence, approval, change record, and revocation.",
  },
  {
    area: "Visibility",
    question:
      "Which defender questions must be answered at each fictional boundary and which source-health or privacy limits apply?",
    evidence:
      "Visibility map, event schema, connection metadata, policy result, source health, retention, access, and alert review.",
  },
  {
    area: "Failure",
    question:
      "What happens when fictional identity, DNS, routing, policy, supplier, monitoring, wireless, remote access, or management becomes unavailable?",
    evidence:
      "Failure-mode review, degraded-mode decision, alternate path, alert, communication, and exercise results.",
  },
  {
    area: "Recovery",
    question:
      "How does the fictional architecture restore correct connectivity, identity, DNS, service, evidence, business state, and communication?",
    evidence:
      "Recovery order, source artifact, validation, reconciliation, emergency-access revocation, communication, and closure.",
  },
  {
    area: "Ownership",
    question:
      "Who owns each fictional zone, path, dependency, policy, visibility source, exception, control, and residual risk?",
    evidence:
      "Owner register, decision rights, approval, review date, exception record, acceptance, and retirement.",
  },
  {
    area: "Maintenance",
    question:
      "Which fictional changes require architecture review and which temporary paths or assumptions must expire?",
    evidence:
      "Change history, architecture version, review trigger, expiration, reopened finding, and lifecycle plan.",
  },
];

const evidenceMatrix = [
  {
    id: "AR-01",
    source: "Fictional system-context brief",
    observation:
      "A public portal, application service, sensitive data service, processing supplier, notification service, monitoring service, archive, and recovery service support one student-help mission.",
    supports:
      "The architecture needs distinct user, service, supplier, administrative, evidence, data, and recovery trust decisions.",
    limits:
      "The brief does not prove actual communication, current policies, control effectiveness, or complete dependencies.",
    architectureUse:
      "Define initial zones, mission dependencies, owners, flows, and review questions.",
  },
  {
    id: "AR-02",
    source: "Fictional communication register",
    observation:
      "Two temporary zone-to-zone paths have no current owner, expiration, or documented business purpose.",
    supports:
      "Lifecycle, least-connectivity, firewall-governance, exception, and ownership review are justified.",
    limits:
      "The register does not prove the paths are active, reachable, unsafe, or misused.",
    architectureUse:
      "Mark the paths unvalidated and assign evidence owners before retain, restrict, or retire decisions.",
  },
  {
    id: "AR-03",
    source: "Fictional management-path summary",
    observation:
      "Support administration and infrastructure administration currently share one remote-access gateway but use different roles and destinations.",
    supports:
      "Administrative paths require separate purpose, authorization, device, destination, evidence, and failure analysis.",
    limits:
      "A shared gateway does not prove broad authority or unsafe sessions.",
    architectureUse:
      "Model distinct access profiles and determine whether stronger separation or evidence is needed.",
  },
  {
    id: "AR-04",
    source: "Fictional visibility map",
    observation:
      "Public-boundary metadata is strong, while east-west application, supplier-result, DNS, wireless, management, and recovery evidence is uneven.",
    supports:
      "Network visibility should be designed across internal and dependency paths rather than only at the perimeter.",
    limits:
      "Uneven coverage does not prove compromise, complete blindness, or control failure.",
    architectureUse:
      "Prioritize defender questions, source health, correlation, privacy, and alternate evidence.",
  },
  {
    id: "AR-05",
    source: "Fictional DNS dependency record",
    observation:
      "Portal, identity, supplier, notification, monitoring, and recovery services rely on two naming services managed through one shared change process.",
    supports:
      "DNS is a shared architecture and recovery dependency that needs ownership, change, evidence, failure, and resilience review.",
    limits:
      "The record does not prove incorrect resolution, outage, tampering, or insufficient redundancy.",
    architectureUse:
      "Map shared failure points and define validation and recovery assumptions.",
  },
  {
    id: "AR-06",
    source: "Fictional wireless inventory",
    observation:
      "Managed employee devices, guest users, service devices, and one administrative use case are represented, but two service devices have unclear owners and lifecycle.",
    supports:
      "Wireless classes, device identity, onboarding, segmentation, ownership, monitoring, and retirement require design attention.",
    limits:
      "The inventory does not prove those devices are active, unsafe, or broadly reachable.",
    architectureUse:
      "Create ownership and authorization actions before changing fictional access.",
  },
  {
    id: "AR-07",
    source: "Fictional resilience exercise",
    observation:
      "A backup path restored connectivity, but DNS updates lagged, remote support failed, and monitoring evidence was incomplete during transition.",
    supports:
      "Connectivity redundancy alone does not establish full mission, support, naming, evidence, or recovery resilience.",
    limits:
      "One exercise does not establish production frequency or every current control condition.",
    architectureUse:
      "Define dependency gates, evidence continuity, degraded-mode communication, and retest criteria.",
  },
  {
    id: "AR-08",
    source: "Fictional recovery architecture",
    observation:
      "The recovery zone can reach several critical services under emergency approval, but destination scope, evidence, and revocation are only partially documented.",
    supports:
      "Recovery paths need identity, destination, order, evidence, approval, revocation, and residual-risk governance.",
    limits:
      "The diagram does not prove current reachability, misuse, or excessive authority.",
    architectureUse:
      "Mark recovery access conditional and assign validation before final approval.",
  },
];

const architectureDefects = [
  {
    defect: "Flat trust model",
    observation:
      "Many fictional services are treated as equally trusted because they are inside one environment.",
    impact:
      "Compromise, error, stale authority, or dependency failure may have a larger blast radius.",
    correction:
      "Define zones and trust decisions by mission, identity, data, service purpose, administration, evidence, and recovery.",
  },
  {
    defect: "Hidden administrative path",
    observation:
      "A fictional support or maintenance interface is omitted from the main architecture.",
    impact:
      "Privileged reachability, evidence, lifecycle, and recovery decisions may be incomplete.",
    correction:
      "Add management and support paths with identity, device, destination, approval, session evidence, and revocation.",
  },
  {
    defect: "Unowned temporary connectivity",
    observation:
      "A fictional path remains after a migration or exception without current owner, purpose, expiration, or evidence.",
    impact:
      "Temporary reachability may become permanent and escape review.",
    correction:
      "Assign owner, validate activity and dependencies, set expiration, and document retain, restrict, or retire decision.",
  },
  {
    defect: "Perimeter-only visibility",
    observation:
      "Fictional defenders can see public traffic but not east-west, supplier, DNS, wireless, management, or recovery paths.",
    impact:
      "Important state changes and dependency failures may be difficult to explain.",
    correction:
      "Design visibility around trust changes, defender questions, source health, privacy, and alternate evidence.",
  },
  {
    defect: "Shared control failure domain",
    observation:
      "Identity, DNS, policy, monitoring, and management depend on one fictional service or administrative process.",
    impact:
      "One failure can disable enforcement, evidence, administration, and recovery simultaneously.",
    correction:
      "Map shared dependencies, define safe degraded states, alternate evidence, recovery order, and residual risk.",
  },
  {
    defect: "Recovery bypass",
    observation:
      "A fictional recovery path can reach sensitive services without the same identity, destination, evidence, or revocation requirements.",
    impact:
      "Emergency authority may remain broad or invisible after restoration.",
    correction:
      "Define recovery-specific controls, independent approval, time limits, session evidence, validation, revocation, and closure.",
  },
  {
    defect: "Zone by technology only",
    observation:
      "Fictional zones group systems by product type without considering mission, data, identity, administration, ownership, or recovery.",
    impact:
      "Communication policy may not reflect actual trust or business risk.",
    correction:
      "Use mission and trust characteristics alongside technical architecture.",
  },
  {
    defect: "Redundancy without independence",
    observation:
      "A fictional backup network path shares DNS, identity, management, power, monitoring, and supplier dependencies with the primary path.",
    impact:
      "The second path may fail during the same event and create false resilience confidence.",
    correction:
      "Map shared failure domains and validate end-to-end mission recovery, not only connectivity.",
  },
  {
    defect: "Architecture without lifecycle",
    observation:
      "Fictional diagrams show current paths but no owners, versions, review dates, exceptions, assumptions, or retirement rules.",
    impact:
      "The design quickly becomes stale and cannot support later decisions.",
    correction:
      "Add ownership, evidence, versioning, expiration, triggers, findings, and maintenance.",
  },
  {
    defect: "Unsafe publication detail",
    observation:
      "A fictional portfolio draft includes real-looking addresses, routes, device names, policy details, DNS records, or copied logs.",
    impact:
      "The artifact may expose sensitive information or become operationally unsafe.",
    correction:
      "Replace all details with clearly invented, non-operational, outcome-focused content.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Write the architecture decision",
    action:
      "Define the fictional student-support mission, the network architecture decision, stakeholders, current state, future state, exclusions, and public-learning safety boundary.",
    output:
      "Architecture purpose and decision statement.",
    quality:
      "The decision is narrower and more useful than “design a secure network.”",
  },
  {
    step: "2",
    title: "Inventory mission dependencies",
    action:
      "List fictional users, critical services, identities, data, suppliers, DNS, wireless, remote access, management, monitoring, support, archive, and recovery needs.",
    output:
      "Mission and dependency register.",
    quality:
      "Each dependency has a purpose, owner, importance, failure effect, and evidence source.",
  },
  {
    step: "3",
    title: "Define zones",
    action:
      "Group fictional services and actors by mission purpose, trust requirements, data sensitivity, administration, visibility, ownership, and recovery.",
    output:
      "Zone register with inclusion and exclusion criteria.",
    quality:
      "Zones are not based only on product type or convenience.",
  },
  {
    step: "4",
    title: "Map paths and trust changes",
    action:
      "Document fictional user, service, supplier, administrative, monitoring, wireless, DNS, and recovery communication with purpose, identity, data, state, evidence, failure, and recovery.",
    output:
      "Path and trust-decision register.",
    quality:
      "Every path has one approved mission purpose and accountable owner.",
  },
  {
    step: "5",
    title: "Identify control and visibility points",
    action:
      "Choose fictional locations for identity, authorization, segmentation, validation, firewall policy, monitoring, source health, alerting, and recovery gates.",
    output:
      "Control-point and visibility map.",
    quality:
      "Each control point answers a defined defender question and includes failure behavior.",
  },
  {
    step: "6",
    title: "Review shared failure domains",
    action:
      "Trace fictional identity, DNS, management, routing, monitoring, supplier, wireless, remote-access, power, capacity, and recovery dependencies across zones.",
    output:
      "Shared-dependency and failure-domain matrix.",
    quality:
      "Redundancy claims include independence and end-to-end mission validation.",
  },
  {
    step: "7",
    title: "Design safe failure and recovery",
    action:
      "Define fictional degraded modes, blocked actions, alternate evidence, communication, recovery order, validation, reconciliation, emergency access, revocation, and closure.",
    output:
      "Failure and recovery architecture.",
    quality:
      "Recovery restores correct mission and business state, not only connectivity.",
  },
  {
    step: "8",
    title: "Assign owners and maintenance",
    action:
      "Give each fictional zone, path, control, dependency, evidence source, exception, assumption, risk, and trigger an accountable owner.",
    output:
      "Ownership and maintenance register.",
    quality:
      "Temporary paths and assumptions have expiration and review conditions.",
  },
  {
    step: "9",
    title: "Conduct peer review",
    action:
      "Review fictional scope, trust, reachability, administration, visibility, dependencies, failure, recovery, evidence, privacy, lifecycle, and publication safety.",
    output:
      "Architecture findings and action log.",
    quality:
      "Findings challenge the design and evidence without blaming people or assuming intent.",
  },
  {
    step: "10",
    title: "Prepare the portfolio brief",
    action:
      "Create a fictional leadership summary, technical architecture, risk priorities, assumptions, residual risks, decisions, review triggers, and reflection.",
    output:
      "Complete defensive network architecture brief.",
    quality:
      "Every name, path, identity, control, record, date, owner, and outcome is invented.",
  },
];

const quizQuestions = [
  {
    question:
      "Which statement best describes defensive network architecture?",
    choices: [
      "A diagram showing every device in one environment.",
      "A mission-driven fictional design connecting users, services, identities, zones, paths, dependencies, controls, evidence, administration, failure, recovery, and ownership.",
      "A list of firewall products.",
      "A guarantee that internal systems are trusted.",
    ],
    answer: 1,
    explanation:
      "Defensive architecture explains why communication exists, how trust is limited, what evidence validates controls, and how the mission fails and recovers.",
  },
  {
    question:
      "Why should administrative paths be separated from normal user and service paths?",
    choices: [
      "Because administrators never use applications.",
      "Because privileged management requires stronger identity, destination, approval, evidence, lifecycle, failure, and recovery controls.",
      "Because all administrative traffic is malicious.",
      "Because normal services do not need evidence.",
    ],
    answer: 1,
    explanation:
      "Administrative authority can affect many assets and should have distinct controls and accountability.",
  },
  {
    question:
      "A fictional service can reach a destination. What does that prove?",
    choices: [
      "The service is authorized to perform every action.",
      "The destination is trusted.",
      "Only that communication may be reachable under some conditions; purpose, identity, authorization, validation, state, and evidence still require review.",
      "The connection is secure.",
    ],
    answer: 2,
    explanation:
      "Reachability is not the same as authorization, semantic validity, or safe business action.",
  },
  {
    question:
      "What is the strongest reason to map shared dependencies?",
    choices: [
      "To make the architecture more complicated.",
      "To identify fictional services that may fail together and invalidate segmentation, visibility, management, or resilience assumptions.",
      "To prove all shared services are unsafe.",
      "To eliminate the need for recovery.",
    ],
    answer: 1,
    explanation:
      "Shared identity, DNS, management, monitoring, routing, supplier, or recovery dependencies can create common failure domains.",
  },
  {
    question:
      "Which visibility strategy is strongest?",
    choices: [
      "Collect every available detail forever.",
      "Monitor only the public perimeter.",
      "Place fictional evidence sources where trust changes occur, define defender questions, source health, privacy, retention, access, correlation, failure, and alternate evidence.",
      "Assume application logs answer every network question.",
    ],
    answer: 2,
    explanation:
      "Visibility should be purposeful, privacy-aware, health-aware, and tied to decisions across important paths.",
  },
  {
    question:
      "Why does a second fictional network path not automatically prove resilience?",
    choices: [
      "Because backup paths never work.",
      "Because both paths may share identity, DNS, management, power, monitoring, supplier, capacity, or recovery dependencies.",
      "Because resilience only concerns data backups.",
      "Because every failover must be manual.",
    ],
    answer: 1,
    explanation:
      "Resilience requires independence, capacity, dependency validation, evidence continuity, degraded operation, and end-to-end recovery.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use a real internal network diagram but remove the company name.",
      "Use real firewall rules and replace addresses.",
      "Invent every organization, zone, identity, path, rule, DNS record, event, owner, date, decision, and outcome from scratch.",
      "Use copied packet-capture details because the project is defensive.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real infrastructure, identities, suppliers, controls, evidence, and recovery details.",
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
        Module A4
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Advanced Track
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

export default function DefensiveNetworkArchitecturePage() {
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
              Lesson 1 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Mission-Driven Network Design
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A4.1 Defensive Network Architecture
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders design fictional networks around
            mission, identity, services, data, zones, trust relationships,
            administrative separation, supplier dependencies, visibility, safe
            failure, recovery, evidence, ownership, and lifecycle—not merely
            around devices or one perimeter.
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
          lessonTitle="Defensive Network Architecture"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, zones, identities, services, paths, policies, DNS records, wireless systems, evidence, owners, dates, decisions, and outcomes.",
            "I understand that network architecture should begin with mission, trust, service, identity, data, evidence, administration, failure, and recovery needs.",
            "I will separate reachability, identity, authorization, validation, policy, evidence, and business action.",
            "I will document shared dependencies and control failure domains rather than assuming segmentation or redundancy is automatically effective.",
            "I will preserve privacy, usability, accessibility, support, supplier, and recovery perspectives.",
            "I will not access, scan, map, capture, intercept, test, configure, reroute, block, investigate, monitor, recover, or modify any real network or system.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Clean Diagram Can Still Hide a Dangerous Architecture"
        >
          <p className="leading-8">
            A fictional Northbridge diagram shows a public portal, application
            services, data services, a supplier connection, monitoring, and a
            recovery network. Everything is separated into neat boxes. During
            review, the team learns that the same identity and DNS services
            support every zone, administrators and supplier support share one
            gateway, two temporary paths lack owners, internal visibility is
            incomplete, and recovery can reach sensitive services through
            poorly documented emergency permissions.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak architecture statement
              </p>
              <p className="mt-2 leading-7">
                “The internal network is trusted, the supplier is behind a
                firewall, and a backup link provides resilience.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong architecture statement
              </p>
              <p className="mt-2 leading-7">
                “Each fictional path requires a documented purpose, identity,
                destination, service, state, control point, evidence source,
                owner, failure mode, recovery decision, exception, and review
                trigger.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Architecture quality is not measured by how many boxes appear. It
            is measured by whether the design explains and limits trust,
            supports mission needs, produces trustworthy evidence, fails
            safely, and recovers correctly.
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
          title="Architecture Determines What Can Reach, Trust, Observe, Fail, and Recover"
        >
          <p className="leading-8">
            Network architecture shapes the blast radius of error, misuse,
            control failure, supplier delay, stale identity, DNS problems,
            management mistakes, wireless access, monitoring gaps, and recovery
            actions. A strong fictional architecture does not assume an
            “inside” is safe. It assigns purpose and control to every important
            relationship.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Mission protection",
                "Network paths should support only approved fictional user, service, data, administrative, supplier, evidence, and recovery outcomes.",
              ],
              [
                "Trust reduction",
                "Zones and control points reduce unnecessary reachability and make identity, validation, evidence, and ownership explicit.",
              ],
              [
                "Resilient operation",
                "Failure and recovery design preserve safe degraded service, evidence, communication, reconciliation, and closure.",
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
          title="The Z-O-N-E-D Method"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Z — Zero in on mission",
                "Define fictional users, critical services, data, identity, evidence, support, supplier, and recovery outcomes.",
              ],
              [
                "O — Organize zones and owners",
                "Group fictional services by purpose, trust, sensitivity, administration, visibility, recovery, and accountable ownership.",
              ],
              [
                "N — Name every necessary path",
                "Document source, destination, identity, service, purpose, data, state, evidence, owner, exception, and expiration.",
              ],
              [
                "E — Establish controls and evidence",
                "Choose fictional identity, authorization, validation, segmentation, policy, visibility, source-health, and review points.",
              ],
              [
                "D — Design for disruption",
                "Plan fictional safe failure, degraded modes, alternate evidence, dependency validation, recovery order, reconciliation, and closure.",
              ],
              [
                "D — Document lifecycle decisions",
                "Maintain versions, assumptions, findings, owners, exceptions, residual risk, review dates, and change triggers.",
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
              Decision-ready architecture statement
            </p>
            <p className="mt-2 leading-7">
              This fictional architecture supports a defined mission through
              owned zones and narrowly justified communication paths. Each
              important path has identity, authorization, validation, evidence,
              failure, recovery, exception, and review requirements. Shared
              dependencies and residual risks remain visible.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Defensive Network Architecture"
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
            Apply Ten Architecture Principles
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
          title="Define Eight Fictional Architecture Zones"
        >
          <p className="leading-8">
            Zones should represent meaningful differences in mission, trust,
            identity, data, administration, visibility, and recovery. They
            should not be treated as automatically trusted simply because they
            are internal.
          </p>

          <div className="mt-6 grid gap-5">
            {zones.map((item) => (
              <article
                key={item.zone}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.zone}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Typical fictional actors", item.typicalActors],
                    ["Allowed relationships", item.allowedRelationships],
                    ["Control objectives", item.controlObjectives],
                    ["Evidence", item.evidence],
                    ["Failure questions", item.failureQuestions],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.zone}-${label}`}
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
            Review Eight Important Path Types
          </h2>

          <div className="mt-6 grid gap-5">
            {pathTypes.map((item) => (
              <article
                key={item.path}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.path}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Fictional example", item.example],
                    ["Required context", item.requiredContext],
                    ["Control point", item.controlPoint],
                    ["Failure", item.failure],
                    ["Recovery", item.recovery],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.path}-${label}`}
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

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Ask Ten Architecture Review Questions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {architectureQuestions.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.area}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Review question
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Supporting fictional evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Separate Reachability, Authorization, Validation, and Business Action"
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
                    "Reachability",
                    "Can the fictional source communicate with the destination under current policy and state?",
                    "Connection result, path, policy outcome, destination, time, and source health.",
                    "That the actor or service is authorized for every operation.",
                  ],
                  [
                    "Identity",
                    "Which fictional human, device, or service is acting?",
                    "Authentication, service identity, device identity, session, certificate concept, and source.",
                    "That the identity may access the object or perform the action.",
                  ],
                  [
                    "Authorization",
                    "May the fictional identity perform this action on this destination or object under these conditions?",
                    "Role, object, assignment, purpose, approval, policy result, and denial evidence.",
                    "That the supplied data or state is correct.",
                  ],
                  [
                    "Validation",
                    "Does the fictional request, message, result, or state meet expected format, meaning, freshness, correlation, and version?",
                    "Schema result, state check, freshness, correlation, ordering, duplicate check, and reason.",
                    "That the resulting business action is safe in the current workflow.",
                  ],
                  [
                    "Business action",
                    "Should the fictional system change case, preference, workflow, notification, archive, or recovery state?",
                    "Current state, transition rule, owner decision, user impact, result, and reconciliation.",
                    "That every dependency or future state is correct.",
                  ],
                  [
                    "Evidence",
                    "Can defenders explain the fictional actor, path, decision, state, result, failure, and recovery?",
                    "Events, source health, correlation, ticket, approval, change, alert, recovery, and closure.",
                    "That the model has complete visibility or certainty.",
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
          eyebrow="Instructional Section 6"
          title="Model Shared Dependencies and Failure Domains"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Identity services",
                "Ask which fictional zones depend on the same authentication, authorization, device, service-identity, and emergency-access systems.",
                "Failure may affect user access, administration, service communication, monitoring attribution, and recovery.",
              ],
              [
                "DNS and naming",
                "Ask which fictional services share naming, change, validation, evidence, and failover dependencies.",
                "A second path may remain unusable when naming is stale or unavailable.",
              ],
              [
                "Management services",
                "Ask whether fictional network, wireless, firewall, remote-access, monitoring, and recovery administration share one path or identity.",
                "A management failure may prevent containment, evidence collection, and recovery.",
              ],
              [
                "Monitoring and time",
                "Ask whether fictional evidence sources share collectors, time synchronization, storage, access, or dashboards.",
                "A common failure can make multiple controls appear healthy while evidence is incomplete.",
              ],
              [
                "Supplier connectivity",
                "Ask which fictional workflows, identities, data, queues, support processes, and recovery decisions rely on one supplier relationship.",
                "Delay or change may affect multiple mission outcomes simultaneously.",
              ],
              [
                "Wireless and remote access",
                "Ask whether fictional onboarding, identity, policy, management, DNS, and monitoring dependencies are shared.",
                "A failure may force unsafe fallback or block legitimate support.",
              ],
              [
                "Power, capacity, and location",
                "Ask whether fictional primary and backup paths share capacity, provider, physical location, or operational ownership.",
                "Redundant diagrams may hide one real failure domain.",
              ],
              [
                "Recovery services",
                "Ask whether fictional backup, restore, emergency access, DNS, identity, evidence, and communication can fail together.",
                "Recovery may not be independently usable during the event it is intended to address.",
              ],
            ].map(([title, question, impact]) => (
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
                    Why it matters
                  </p>
                  <p className="mt-2 text-sm leading-6">{impact}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Architecture View"
          title="Northbridge Defensive Network Architecture"
        >
          <p className="leading-8">
            This conceptual diagram is fully invented and intentionally
            non-operational. It shows mission relationships and control
            questions rather than real addresses, routes, devices, vendors,
            ports, firewall rules, wireless identifiers, or DNS records.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Public users", "Student access through approved portal functions"],
                ["Remote users", "Support, administrators, suppliers, and recovery roles"],
                ["Wireless users", "Managed, employee, guest, and service-device classes"],
                ["External supplier", "Minimized request and validated result relationships"],
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
                Fictional Northbridge Network
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Public access zone", "Portal and user-facing boundary"],
                  ["Application zone", "Workflow and service logic"],
                  ["Data zone", "Sensitive state and retention"],
                  ["Supplier zone", "External request and result control"],
                  ["Management zone", "Privileged administration"],
                  ["Evidence zone", "Monitoring and source health"],
                  ["Wireless zone", "Managed, guest, and service classes"],
                  ["Recovery zone", "Restore, validation, and reconciliation"],
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
                ["Identity", "Human, device, service, emergency, and recovery authority"],
                ["DNS", "Naming, ownership, change, evidence, and failover"],
                ["Policy", "Segmentation, firewall, authorization, and exceptions"],
                ["Recovery", "Safe failure, order, evidence, communication, and closure"],
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
          title="Fake Northbridge Network Architecture Dashboard"
          subtitle="Fictional zone, path, ownership, dependency, evidence, and recovery status for training only."
          metrics={[
            {
              label: "Approved communication paths",
              value: "26 / 31",
              note: "Five fictional paths remain temporary, unowned, expired, or insufficiently evidenced.",
            },
            {
              label: "Shared critical dependencies",
              value: "6",
              note: "Identity, DNS, management, monitoring, supplier connectivity, and recovery support several zones.",
            },
            {
              label: "Architecture findings blocking approval",
              value: "3",
              note: "Recovery access scope, temporary path ownership, and control-source independence require validation.",
            },
          ]}
        />

        <FakeAlertCard
          title="Recovery Path Bypasses Normal Administrative Evidence"
          severity="High"
          time="1:42 PM"
          source="Fake Northbridge Architecture Assurance Console"
          details="The fictional recovery zone has emergency reachability to the sensitive data and management zones, but destination scope, session evidence, approval independence, expiration, and revocation are only partially documented."
          recommendation="Treat recovery access as conditional. Define fictional identity, destination, purpose, approval, evidence, time limit, validation, revocation, reconciliation, owner, and review trigger before final approval."
        />

        <FakeLogPanel
          title="Fake Defensive Architecture Review Timeline"
          logs={[
            "09:00 SCOPE mission='student-support' state='current+future'",
            "09:08 ZONE public-access owner='portal-team'",
            "09:16 ZONE application owner='workflow-team'",
            "09:24 ZONE data owner='data-team'",
            "09:32 ZONE supplier owner='integration-team'",
            "09:40 ZONE management owner='infrastructure-team'",
            "09:48 ZONE evidence owner='monitoring-team'",
            "09:56 ZONE wireless owner='network-team'",
            "10:04 ZONE recovery owner='continuity-team'",
            "10:12 PATH approved='26' total='31'",
            "10:20 PATH temporary-unowned='2'",
            "10:28 DEPENDENCY identity shared='true'",
            "10:36 DEPENDENCY dns shared='true'",
            "10:44 VISIBILITY east-west='partial'",
            "10:52 VISIBILITY recovery='partial'",
            "11:00 RESILIENCE backup-path='connectivity-only'",
            "11:08 FINDING recovery-evidence='incomplete'",
            "11:16 FINDING temporary-owner='missing'",
            "11:24 CONFIDENCE architecture='moderate'",
            "13:42 ALERT issue='recovery-access-evidence'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Architecture Evidence Supports—and What It Does Not Prove
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
                    ["Architecture use", item.architectureUse],
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
          title="Which Architecture Decision Is Best Supported?"
          question="Which conclusion most responsibly addresses the fictional recovery-path evidence?"
          evidence={[
            "The fictional recovery zone can reach sensitive data and management services under emergency approval.",
            "Destination scope and session evidence are only partially documented.",
            "The recovery design references strong identity but does not show approval independence.",
            "Emergency-access expiration and revocation are incomplete.",
            "One resilience exercise restored connectivity while DNS, remote support, and monitoring remained degraded.",
            "The evidence does not prove misuse or current excessive authority.",
            "The recovery path affects identity, data, management, evidence, DNS, communication, and closure.",
            "Overall architecture confidence is Moderate.",
          ]}
          options={[
            "Mark recovery access Conditional, define fictional destination, purpose, identity, approval, session evidence, time limit, revocation, dependency validation, reconciliation, owner, and completion criteria before final approval.",
            "Remove the recovery path immediately because it may be dangerous.",
            "Approve it because emergency access must be broad.",
            "Assume the path is being misused and begin an incident investigation.",
          ]}
          bestAnswer={0}
          explanation="The first option uses the supplied evidence, preserves uncertainty, protects recovery capability, and requires measurable governance without unsupported claims or destructive action."
        />

        <SectionCard
          eyebrow="Architecture Defects"
          title="Ten Problems That Weaken Defensive Network Design"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {architectureDefects.map((item) => (
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
          title="Build the Northbridge Defensive Network Architecture Brief"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            access, scan, map, capture, intercept, test, configure, reroute,
            block, investigate, monitor, recover, or change any real network,
            device, wireless system, account, DNS service, gateway, firewall,
            sensor, or organizational infrastructure.
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
          title="A Temporary Path Has No Owner"
          scenario="The fictional communication register shows a temporary application-to-management path created during migration. The migration is complete, but current activity, purpose, owner, dependencies, and expiration are unknown."
          choices={[
            {
              label: "Choice A",
              response:
                "Mark the path Unvalidated, assign a fictional architecture owner, review supplied activity and dependency evidence, identify affected services, and make an authorized retain, restrict, or retire decision with rollback and review criteria.",
              outcome:
                "Best defensive choice. It preserves service safety while preventing an unsupported permanent exception.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete the path immediately because temporary access is always unsafe.",
              outcome:
                "Weak. Immediate change without dependency and recovery review may disrupt legitimate fictional service.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Keep the path forever because it has not caused a known problem.",
              outcome:
                "Weak. Absence of known harm does not establish current purpose or acceptable residual risk.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Backup Path Restores Connectivity but Not the Mission"
          scenario="During a fictional resilience exercise, the secondary path becomes active. Basic connectivity returns, but DNS updates lag, remote support cannot connect, and monitoring evidence is incomplete."
          choices={[
            {
              label: "Choice A",
              response:
                "Classify the exercise as partial recovery, identify shared dependencies, define DNS, support, evidence, capacity, communication, reconciliation, and closure gates, and schedule a fictional re-test.",
              outcome:
                "Best choice. Resilience must be evaluated end to end, not only by link availability.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare the architecture resilient because packets can travel.",
              outcome:
                "Weak. Connectivity alone does not restore service, administration, evidence, or business state.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove the secondary path because the first exercise was imperfect.",
              outcome:
                "Weak. The evidence supports improvement and revalidation, not automatic removal.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend a Network Architecture under Conflicting Requirements"
        >
          <p className="leading-8">
            The fictional mission owner wants fast supplier processing, the
            privacy owner wants fewer fields and narrower paths, the support
            owner needs reliable remote access, the network owner wants simpler
            policy, and the recovery owner needs emergency reachability. Build
            an architecture decision that protects the mission without turning
            every zone into one trust space.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Define mission-critical paths",
                "Identify only the fictional communication required for student access, workflow, supplier processing, notification, support, evidence, and recovery.",
              ],
              [
                "Separate administrative use",
                "Create distinct fictional support, infrastructure, supplier, and recovery access profiles with destination and evidence limits.",
              ],
              [
                "Minimize supplier trust",
                "Use a controlled integration zone, minimized data, validated results, queue evidence, and safe degraded operation.",
              ],
              [
                "Preserve support usability",
                "Define approved remote destinations, strong identity, managed devices, session evidence, support alternatives, and revocation.",
              ],
              [
                "Design recovery conditions",
                "Use emergency approval, limited destinations, evidence, time limits, dependency gates, reconciliation, and closure.",
              ],
              [
                "Explain residual risk",
                "Document shared identity, DNS, supplier, monitoring, management, capacity, and operational dependencies that remain.",
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
              Produce a fictional zone architecture, communication register,
              administrative-path design, supplier-boundary decision,
              visibility map, shared-dependency matrix, failure and recovery
              plan, owner map, assumptions, residual risks, and leadership
              explanation of the tradeoffs.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Defensive Network Architecture Checklist"
          items={[
            "I can begin a fictional network architecture with mission, users, services, data, identity, evidence, support, suppliers, administration, and recovery.",
            "I can define zones by purpose, trust, sensitivity, ownership, administration, visibility, and recovery rather than only technology.",
            "I can distinguish north-south, east-west, administrative, supplier, wireless, monitoring, DNS, and recovery paths.",
            "I can separate reachability, identity, authorization, validation, business action, and evidence.",
            "I can document path purpose, source, destination, identity, service, data, state, control, owner, exception, expiration, failure, and recovery.",
            "I can identify shared identity, DNS, management, monitoring, supplier, capacity, wireless, remote-access, and recovery failure domains.",
            "I can design visibility around defender questions, source health, privacy, retention, correlation, access, and alternate evidence.",
            "I can distinguish connectivity redundancy from proven mission resilience.",
            "I can design fictional administrative and recovery paths with stronger approval, evidence, destination, time, revocation, and closure requirements.",
            "I can identify flat trust, hidden management, unowned exceptions, perimeter-only visibility, recovery bypass, and architecture-lifecycle defects.",
            "I can assign owners, versions, review dates, assumptions, residual risks, expiration, findings, and architecture triggers.",
            "I can create a completely fictional network architecture without using real addresses, routes, devices, rules, DNS records, wireless names, logs, credentials, suppliers, or internal diagrams.",
          ]}
        />

        <MiniQuiz
          title="A4.1 Mini Quiz: Defensive Network Architecture"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Defensive Network Architecture Brief for the Northbridge Student-Support Cooperative. Include purpose, mission, decision, scope, stakeholders, exclusions, safety boundary, current state, future state, at least eight zones, at least twenty communication paths, human and service identities, north-south paths, east-west paths, administrative paths, supplier paths, wireless classes, DNS dependencies, visibility points, control points, shared failure domains, least-connectivity requirements, evidence fields, source-health requirements, safe-failure decisions, degraded modes, recovery order, reconciliation, emergency-access controls, owners, exceptions, expirations, assumptions, residual risks, review findings, completion criteria, architecture triggers, leadership summary, technical appendix, reflection, and a statement that every organization, zone, identity, path, service, record, control, owner, date, decision, and outcome is invented."
          tips={[
            "Start with fictional mission and service outcomes before drawing zones or control points.",
            "Give every important communication path a documented purpose, identity, destination, owner, evidence source, failure mode, recovery need, and review trigger.",
            "Show shared dependencies and failure domains rather than assuming segmentation or redundancy is automatically effective.",
            "Separate normal user, service, supplier, administrative, monitoring, wireless, and recovery communication.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Segmentation and Microsegmentation?"
        >
          <p className="leading-8">
            Before moving to A4.2, rate your readiness from 1 to 5 for mission
            context, zones, trust relationships, path purpose, identity,
            authorization, visibility, shared dependencies, administration,
            safe failure, recovery, ownership, maintenance, and complete
            fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why an internal network should not be treated as one trusted space.",
              "I can distinguish a clean-looking diagram from a decision-ready architecture.",
              "I can separate reachability from authorization and safe business action.",
              "I can identify where trust, ownership, identity, validation, evidence, or responsibility changes.",
              "I can model shared identity, DNS, management, monitoring, supplier, and recovery dependencies.",
              "I can explain why a backup path may not restore the mission.",
              "I can create owned, reviewable, failure-aware administrative and recovery paths.",
              "I can produce a safe fictional architecture without copying, modifying, or exposing real network information.",
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
            Record one fictional zone you changed after reviewing mission
            purpose, one hidden dependency, one administrative-path control,
            one recovery weakness, one residual risk, and one question you will
            carry into A4.2.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Defensive network architecture begins with fictional mission, users, services, identity, data, evidence, administration, failure, and recovery—not devices alone.",
            "Zones should represent meaningful differences in purpose, trust, sensitivity, ownership, administration, visibility, and recovery.",
            "Reachability does not prove identity, authorization, validation, safe business action, or control effectiveness.",
            "Every important path should have a purpose, source, destination, identity, service, data need, owner, evidence, failure mode, recovery decision, exception, and review trigger.",
            "Administrative, supplier, wireless, monitoring, DNS, and recovery paths require explicit architecture treatment.",
            "Shared identity, DNS, management, monitoring, supplier, capacity, and recovery dependencies can invalidate segmentation and resilience assumptions.",
            "Visibility should answer defined defender questions and include source health, privacy, retention, access, correlation, and alternate evidence.",
            "Connectivity redundancy is not the same as end-to-end mission resilience.",
            "Architecture is a living decision artifact with owners, versions, assumptions, residual risks, findings, expiration, and change triggers.",
            "Every CyberShield network architecture artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, turn the fictional architecture into segmentation and
            microsegmentation decisions based on mission purpose, identity,
            service communication, asset value, trust, policy, evidence,
            operations, and recovery.
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