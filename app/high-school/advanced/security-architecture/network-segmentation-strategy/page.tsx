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
const modulePath = `${trackPath}/security-architecture`;
const previousLesson = `${modulePath}/trust-boundaries-and-security-zones`;
const nextLesson = `${modulePath}/identity-centered-architecture`;

const objectives = [
  "Explain fictional network segmentation as a mission-driven architecture strategy for limiting unnecessary communication, privilege, impact, and recovery complexity.",
  "Group fictional systems and services by purpose, sensitivity, ownership, trust, dependency, administration, evidence, and recovery needs rather than by convenience alone.",
  "Design fictional approved and denied communication paths using least privilege, service identity, narrow scope, explicit ownership, monitoring, exceptions, and safe failure.",
  "Evaluate fictional segmentation for hidden dependencies, broad administrative reach, supplier access, logging gaps, recovery bypasses, performance, usability, resilience, and architecture drift.",
  "Create a portfolio-ready fictional segmentation package using only invented organizations, systems, zones, identities, flows, evidence, decisions, dates, and outcomes."
];
const vocabulary = [
  [
    "Network segmentation",
    "A fictional architecture strategy that divides systems and services into purposeful communication groups with explicit trust, access, monitoring, ownership, and recovery rules."
  ],
  [
    "Segment",
    "A fictional group of systems, services, identities, or data sharing similar mission, trust, sensitivity, ownership, or operational requirements."
  ],
  [
    "Microsegmentation",
    "A fictional fine-grained approach that limits communication between individual workloads or service groups based on identity, purpose, and policy rather than broad location alone."
  ],
  [
    "Communication path",
    "A fictional source-to-destination relationship defining who or what may communicate, for which purpose, through which controlled route, using which data and action."
  ],
  [
    "Flow allowlist",
    "A fictional approved list of minimum necessary communication paths with source, destination, identity, service, purpose, data, owner, evidence, and review conditions."
  ],
  [
    "Denied path",
    "A fictional communication relationship that should not occur because it lacks mission need, authority, safe design, owner approval, or required evidence."
  ],
  [
    "East-west traffic",
    "Fictional communication between systems or services inside a broader environment."
  ],
  [
    "North-south traffic",
    "Fictional communication entering or leaving a defined environment, service, or trust boundary."
  ],
  [
    "Administrative path",
    "A fictional communication route used to configure, monitor, support, recover, or manage systems and controls."
  ],
  [
    "Service identity",
    "A fictional non-human identity used by an application, workload, process, or integration to authenticate and request approved actions."
  ],
  [
    "Segmentation gateway",
    "A fictional policy enforcement location that applies approved communication decisions between segments or trust zones."
  ],
  [
    "Blast radius",
    "The fictional scope of systems, identities, users, data, services, and operations affected when a control or service fails."
  ],
  [
    "Dependency path",
    "A fictional communication path required for identity, name resolution, logging, time, storage, support, recovery, or another service dependency."
  ],
  [
    "Hidden dependency",
    "A fictional service or communication need not documented in the approved design but required for effective operation."
  ],
  [
    "Exception rule",
    "A fictional temporary or approved deviation from normal segmentation policy with purpose, owner, scope, evidence, expiration, and review."
  ],
  [
    "Rule hygiene",
    "The fictional process of keeping communication rules specific, justified, owned, tested, monitored, current, and removable."
  ],
  [
    "Default deny",
    "A fictional design principle that blocks communication unless an approved need and rule exist, while still planning safe service continuity and recovery."
  ],
  [
    "Safe degraded mode",
    "A fictional limited operating state that preserves critical mission functions while higher-risk or nonessential communication remains restricted."
  ],
  [
    "Segmentation drift",
    "A fictional mismatch between approved communication design and effective paths, rules, identities, exceptions, or service dependencies."
  ],
  [
    "Effective-path validation",
    "Evidence that fictional actual source, destination, identity, service, data, result, and route match the approved communication policy."
  ]
];
const segmentCatalog = [
  {
    "segment": "Public access segment",
    "purpose": "Receive fictional public requests and expose only the minimum user-facing service functions.",
    "contains": "Public-facing application endpoints, request-routing services, and limited content delivery.",
    "allowed": "Validated public traffic to approved application services.",
    "denied": "Direct communication to data, management, logging, backup, recovery, or supplier administration.",
    "dependencies": "Identity when needed, application services, time, logging, health monitoring, and approved content sources.",
    "evidence": "Source context, request, target, validation, result, rate, errors, and source health."
  },
  {
    "segment": "Application service segment",
    "purpose": "Run fictional business logic and approved service-to-service processing.",
    "contains": "Application workloads, internal APIs, service identities, and approved runtime dependencies.",
    "allowed": "Narrow communication to identity, data, internal services, logging, and approved supplier integration.",
    "denied": "Broad peer-to-peer communication, unmanaged administration, and direct public data access.",
    "dependencies": "Identity, data, name resolution, time, logging, configuration, health, and recovery.",
    "evidence": "Calling service, target, route, action, authorization, result, latency, error, and version."
  },
  {
    "segment": "Sensitive data segment",
    "purpose": "Protect fictional protected, regulated, or mission-critical records.",
    "contains": "Databases, data services, integrity controls, and approved backup interfaces.",
    "allowed": "Approved service queries and tightly controlled administration through named management paths.",
    "denied": "Public access, broad support access, unmanaged exports, and supplier reachability without approved purpose.",
    "dependencies": "Service identity, access policy, integrity, logging, backup, time, and recovery.",
    "evidence": "Actor, service, data category, action, result, volume, purpose, administrative override, and integrity."
  },
  {
    "segment": "Identity services segment",
    "purpose": "Provide fictional authentication, authorization, role, lifecycle, privilege, and approval services.",
    "contains": "Identity providers, authorization services, role systems, approval workflows, and identity evidence.",
    "allowed": "Registered service and user authentication, policy decisions, lifecycle events, and controlled administration.",
    "denied": "Anonymous administration, unmanaged service trust, broad supplier access, and direct public management.",
    "dependencies": "Time, directory data, logging, recovery, service registration, and approved administration.",
    "evidence": "Identity, assurance, role, request, decision, approver, lifecycle state, result, and source health."
  },
  {
    "segment": "Management segment",
    "purpose": "Provide fictional restricted administrative access to systems and controls.",
    "contains": "Management interfaces, temporary privileged sessions, change systems, monitoring tools, and operator services.",
    "allowed": "Approved time-bound administration from controlled operator paths to specific targets.",
    "denied": "Public access, shared administration, direct user access, and unrestricted cross-segment reach.",
    "dependencies": "Named identity, approval, time, logging, change records, rollback, and recovery.",
    "evidence": "Administrator, approver, purpose, target, action category, start, end, result, change, and validation."
  },
  {
    "segment": "Logging and detection segment",
    "purpose": "Receive and protect fictional security, service, administrative, and recovery evidence.",
    "contains": "Collectors, analysis services, source-health monitoring, time-quality checks, alerts, and protected retention.",
    "allowed": "Approved evidence ingestion, analysis, case access, source health, and controlled administration.",
    "denied": "Broad deletion, silent source disablement, unowned retention change, and routine production access.",
    "dependencies": "Time, storage, source identity, integrity, access control, health monitoring, and recovery.",
    "evidence": "Source health, ingestion, time quality, access, retention, administration, integrity, and case linkage."
  },
  {
    "segment": "Backup and recovery segment",
    "purpose": "Preserve fictional restore states and support recovery separate from common production failure domains.",
    "contains": "Protected backups, recovery identities, restore services, integrity evidence, exercises, and validation records.",
    "allowed": "Approved backup creation, integrity checks, controlled restore, recovery exercises, and status reporting.",
    "denied": "Routine production administration, broad write access, silent deletion, and recovery without owner approval.",
    "dependencies": "Protected recovery identity, time, integrity, logging, storage, communication, and owner approval.",
    "evidence": "Backup source, state, owner, integrity, retention, restore action, recovery identity, result, and validation."
  },
  {
    "segment": "Supplier integration segment",
    "purpose": "Isolate and govern fictional external service connections where ownership and control change.",
    "contains": "Supplier gateways, limited integration services, exchange points, health checks, and fallback mechanisms.",
    "allowed": "Minimum approved supplier flows required by contract and mission.",
    "denied": "Broad internal reachability, inherited internal trust, unmanaged data sharing, and supplier administration of unrelated systems.",
    "dependencies": "Supplier identity, contract requirements, owner, logging, health, fallback, and exit plan.",
    "evidence": "Supplier, service, flow, data category, result, health, change, support event, and owner communication."
  },
  {
    "segment": "User access segment",
    "purpose": "Provide fictional users with role-appropriate access to approved services.",
    "contains": "User access portals, session services, remote access concepts, and user-facing service entry points.",
    "allowed": "Role-appropriate access to approved services through documented paths.",
    "denied": "Direct management, data, logging, backup, or recovery access.",
    "dependencies": "Identity, authorization, time, service health, logging, and support.",
    "evidence": "User identity, role, session, service, action, result, source context, and unusual patterns."
  },
  {
    "segment": "Development and test segment",
    "purpose": "Support fictional non-production design, testing, and validation without inheriting production trust.",
    "contains": "Synthetic data, test services, development tools, approved build artifacts, and validation environments.",
    "allowed": "Approved development, testing, artifact delivery, and limited dependency use.",
    "denied": "Direct production data use, shared privileged identities, unreviewed production administration, and unrestricted supplier access.",
    "dependencies": "Synthetic data, identity, artifact integrity, logging, change process, and approved promotion.",
    "evidence": "Developer identity, change, artifact, test result, approval, promotion, and environment health."
  }
];
const segmentationDimensions = [
  {
    "dimension": "Mission function",
    "question": "Which fictional systems and services support the same critical user or business outcome?",
    "benefit": "Keeps segmentation aligned with service delivery and recovery priorities.",
    "risk_if_ignored": "Controls may separate technology while breaking the mission dependency chain.",
    "evidence": "Mission map, critical functions, service ownership, and dependency review."
  },
  {
    "dimension": "Data sensitivity",
    "question": "Which fictional systems store, process, transmit, or administer similar data categories?",
    "benefit": "Limits unnecessary exposure and supports minimum-necessary communication.",
    "risk_if_ignored": "Low-sensitivity services may gain broad paths to protected data.",
    "evidence": "Data inventory, flow map, classification, field scope, and access review."
  },
  {
    "dimension": "Identity and privilege",
    "question": "Which fictional users, services, devices, workloads, administrators, and recovery identities require access?",
    "benefit": "Connects segmentation to explicit authorization rather than network location alone.",
    "risk_if_ignored": "Broad roles may collapse otherwise separate segments.",
    "evidence": "Identity inventory, role matrix, service identities, approvals, and sessions."
  },
  {
    "dimension": "Ownership and operations",
    "question": "Which fictional team owns, supports, changes, monitors, and recovers each system or segment?",
    "benefit": "Makes communication, exceptions, validation, and corrective action accountable.",
    "risk_if_ignored": "Rules remain unreviewed because no owner accepts responsibility.",
    "evidence": "Owner map, change records, reviews, exceptions, and signoff."
  },
  {
    "dimension": "Trust and exposure",
    "question": "Which fictional services face public, user, internal, supplier, administrative, or recovery trust conditions?",
    "benefit": "Places stronger controls where assumptions change.",
    "risk_if_ignored": "Public or external exposure may inherit internal reachability.",
    "evidence": "Trust-boundary map, exposure inventory, allowed flows, and denied paths."
  },
  {
    "dimension": "Availability and recovery",
    "question": "Which fictional systems must continue together, degrade together, or recover in a specific order?",
    "benefit": "Avoids segmentation that blocks critical continuity and restoration.",
    "risk_if_ignored": "Recovery paths and dependencies fail during disruption.",
    "evidence": "Recovery sequence, dependency map, safe degraded mode, exercises, and service validation."
  },
  {
    "dimension": "Evidence and monitoring",
    "question": "Which fictional communications must remain visible, attributable, time-aligned, and reviewable?",
    "benefit": "Allows defenders to detect drift, bypass, misuse, failure, and recovery errors.",
    "risk_if_ignored": "Segmentation may exist without proof that it works.",
    "evidence": "Flow records, source health, time quality, alert coverage, access, and retention."
  },
  {
    "dimension": "Supplier and lifecycle",
    "question": "Which fictional external dependencies, temporary systems, legacy services, development environments, or retirement states exist?",
    "benefit": "Prevents permanent trust from growing around temporary or externally controlled needs.",
    "risk_if_ignored": "Old paths, supplier access, and temporary exceptions remain active indefinitely.",
    "evidence": "Supplier register, lifecycle state, expiration, architecture changes, and removal validation."
  }
];
const flowMatrix = [
  {
    "source": "Public access segment",
    "destination": "Application service segment",
    "purpose": "Deliver a validated fictional user request to the approved business service.",
    "identity": "Public session or approved user context plus application endpoint identity.",
    "data": "Minimum request fields and approved response context.",
    "control": "Request validation, rate control, route allowlist, service authorization, and evidence.",
    "deny": "Requests targeting data, management, logging, backup, recovery, or supplier administration."
  },
  {
    "source": "Application service segment",
    "destination": "Sensitive data segment",
    "purpose": "Read or update fictional records required for an approved service action.",
    "identity": "Registered application service identity with narrow role.",
    "data": "Only approved fields and transaction context.",
    "control": "Service authentication, authorization, field scope, purpose, path rule, logging, and integrity.",
    "deny": "Broad queries, administrative interfaces, unowned access, or use outside approved purpose."
  },
  {
    "source": "Application service segment",
    "destination": "Identity services segment",
    "purpose": "Validate fictional user or service identity and receive an authorization decision.",
    "identity": "Registered application service identity.",
    "data": "Minimum identity request, assurance, role, and decision context.",
    "control": "Registered client, approved interface, secure decision flow, health check, time quality, and evidence.",
    "deny": "Identity administration or broad directory access from normal application paths."
  },
  {
    "source": "Management segment",
    "destination": "Production segments",
    "purpose": "Perform a fictional approved time-bound administrative task.",
    "identity": "Named administrator using approved temporary privilege.",
    "data": "Only management information required for the approved task.",
    "control": "Approval, device or workload context, target allowlist, session evidence, change record, rollback, and validation.",
    "deny": "Shared identities, missing approval, out-of-scope targets, or unavailable session evidence."
  },
  {
    "source": "Production segments",
    "destination": "Logging and detection segment",
    "purpose": "Send fictional evidence needed for monitoring, validation, response, and recovery.",
    "identity": "Registered evidence source identity.",
    "data": "Approved security and service event fields.",
    "control": "Source identity, integrity, reliable time, required context, source health, retention, and access.",
    "deny": "Unknown source, invalid integrity, unnecessary sensitive content, or unowned event collection."
  },
  {
    "source": "Backup and recovery segment",
    "destination": "Production segments",
    "purpose": "Restore fictional systems, data, identity state, or configuration from approved recovery states.",
    "identity": "Separate recovery identity with owner approval.",
    "data": "Approved restore state and required validation context.",
    "control": "Integrity, dependency order, target allowlist, change control, evidence, service checks, and closure.",
    "deny": "Untrusted restore state, missing owner, broad production write access, or incomplete integrity validation."
  },
  {
    "source": "Supplier integration segment",
    "destination": "Application service segment",
    "purpose": "Provide a fictional external capability required by the approved service.",
    "identity": "Registered supplier service identity.",
    "data": "Minimum contract-approved fields and actions.",
    "control": "Supplier identity, interface allowlist, data scope, rate, health, logging, fallback, and owner review.",
    "deny": "Broad internal access, undocumented fields, unmanaged administration, or unapproved purpose."
  },
  {
    "source": "Development and test segment",
    "destination": "Production artifact intake",
    "purpose": "Deliver a fictional approved build artifact for controlled promotion.",
    "identity": "Registered build or release identity.",
    "data": "Approved artifact, integrity metadata, test evidence, and release record.",
    "control": "Artifact verification, approval, environment separation, promotion gate, logging, rollback, and owner signoff.",
    "deny": "Direct development administration of production or unapproved use of production data."
  }
];
const ruleHygiene = [
  {
    "check": "Specific source and destination",
    "weak": "Allow any application system to reach any internal system.",
    "strong": "Allow one approved fictional service identity and source segment to reach one named service function in one destination segment.",
    "validation": "Compare effective source, destination, identity, service, and result with the approved rule."
  },
  {
    "check": "Clear mission purpose",
    "weak": "Required for business.",
    "strong": "Required for the fictional support application to request one approved data function for one documented user workflow.",
    "validation": "Link the rule to a mission function, service owner, and current dependency."
  },
  {
    "check": "Minimum data and action",
    "weak": "Allow database access.",
    "strong": "Allow the fictional service to perform only the approved read or update action on the minimum necessary record fields.",
    "validation": "Review service authorization, field scope, event evidence, and denied actions."
  },
  {
    "check": "Identity-aware control",
    "weak": "Trust everything from the internal segment.",
    "strong": "Require the registered fictional service identity, role, context, and approved path.",
    "validation": "Test conceptually that a different identity or source does not inherit the rule."
  },
  {
    "check": "Named owner and reviewer",
    "weak": "Owned by IT.",
    "strong": "Named fictional service owner approves purpose; network owner implements; security owner validates; data owner approves fields.",
    "validation": "Check current ownership, review date, approval, and corrective responsibility."
  },
  {
    "check": "Evidence and source health",
    "weak": "Traffic is logged.",
    "strong": "Record fictional source, destination, identity, service, action, result, time, rule, owner, and source-health state.",
    "validation": "Confirm important flows and denied paths remain reconstructable."
  },
  {
    "check": "Expiration and lifecycle",
    "weak": "Temporary rule.",
    "strong": "The fictional rule expires on an approved date unless the named owner revalidates purpose, scope, evidence, and risk.",
    "validation": "Verify expiration, renewal decision, removal, and effective-state closure."
  },
  {
    "check": "Failure and recovery",
    "weak": "Block the flow if something fails.",
    "strong": "Define whether the fictional flow blocks, degrades, pauses, uses fallback, or requires manual approval during identity, logging, network, supplier, or recovery failure.",
    "validation": "Review normal, degraded, failed, and recovered service outcomes."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Map the fictional mission and dependencies",
    "questions": "Which users, services, identities, data, suppliers, administrators, evidence sources, and recovery functions support the mission?",
    "output": "Mission, system-context, and dependency map.",
    "stop": "Do not segment only by existing network layout or product."
  },
  {
    "step": "2",
    "title": "Define segment purpose and ownership",
    "questions": "Which systems share a mission, sensitivity, trust posture, owner, administration model, monitoring need, and recovery plan?",
    "output": "Segment catalog and owner map.",
    "stop": "Pause if a segment contains systems with conflicting trust or ownership needs."
  },
  {
    "step": "3",
    "title": "Inventory required communication",
    "questions": "Which fictional source, destination, identity, service, action, data, and dependency are required for each function?",
    "output": "Required-flow inventory.",
    "stop": "Do not preserve a path merely because it already exists."
  },
  {
    "step": "4",
    "title": "Define approved and denied paths",
    "questions": "Which fictional communications are minimum necessary, and which should be denied explicitly?",
    "output": "Flow allowlist and denied-path matrix.",
    "stop": "Pause if a flow lacks purpose, identity, data scope, owner, or validation."
  },
  {
    "step": "5",
    "title": "Place layered controls",
    "questions": "Which fictional identity, gateway, application, data, monitoring, approval, and recovery controls protect each path?",
    "output": "Segmentation control architecture.",
    "stop": "Do not rely on network location alone."
  },
  {
    "step": "6",
    "title": "Analyze hidden dependencies and failure",
    "questions": "What happens when fictional identity, name resolution, time, logging, supplier, network, administration, or recovery services fail?",
    "output": "Dependency, fail-state, and safe-degraded-mode matrix.",
    "stop": "Do not approve segmentation that blocks critical recovery or creates uncontrolled fallback."
  },
  {
    "step": "7",
    "title": "Design evidence and validation",
    "questions": "Which fictional records prove allowed flows work, denied paths remain blocked, rules are current, and source health is reliable?",
    "output": "Flow evidence and effective-path validation plan.",
    "stop": "Do not treat intended rules as proof of actual behavior."
  },
  {
    "step": "8",
    "title": "Govern exceptions and administration",
    "questions": "Who approves fictional temporary rules, broad access, supplier paths, recovery changes, and management reach?",
    "output": "Exception, privileged-path, and rule-hygiene register.",
    "stop": "Pause if one administrator can cross every segment without independent evidence."
  },
  {
    "step": "9",
    "title": "Test mission and recovery impact",
    "questions": "Can fictional critical services continue, degrade safely, recover in order, and close temporary paths after restoration?",
    "output": "Service-impact and recovery-validation package.",
    "stop": "Do not approve security that cannot be operated or recovered safely."
  },
  {
    "step": "10",
    "title": "Review drift and lifecycle",
    "questions": "How are fictional systems, suppliers, rules, identities, data uses, exceptions, owners, and retired services reviewed over time?",
    "output": "Segmentation lifecycle and architecture-drift plan.",
    "stop": "Do not allow temporary or legacy paths to become permanent invisible trust."
  }
];
const owners = [
  {
    "role": "Mission owner",
    "owns": "Fictional critical functions, user outcomes, acceptable disruption, priority, and business residual risk.",
    "decision": "Whether segmentation preserves the required mission and service continuity.",
    "evidence": "Mission map, critical dependencies, service-impact review, and risk acceptance."
  },
  {
    "role": "Security architect",
    "owns": "Fictional segmentation principles, trust model, control patterns, failure analysis, tradeoffs, and integrated review.",
    "decision": "Whether segment purpose, flows, controls, evidence, recovery, and governance are defensible.",
    "evidence": "Segment catalog, flow matrix, decisions, failure analysis, and validation plan."
  },
  {
    "role": "Network and platform owner",
    "owns": "Fictional segments, gateways, paths, platform dependencies, configuration, health, and effective connectivity.",
    "decision": "Which communication paths are implementable, supportable, observable, and recoverable.",
    "evidence": "Path map, rule inventory, health, change records, effective-flow review, and rollback."
  },
  {
    "role": "Identity owner",
    "owns": "Fictional user, service, device, workload, administrator, supplier, and recovery identities.",
    "decision": "Which identities may use each path and under what role, approval, assurance, and lifecycle conditions.",
    "evidence": "Identity inventory, service registration, role matrix, approvals, sessions, and reviews."
  },
  {
    "role": "Application and service owner",
    "owns": "Fictional service behavior, interfaces, dependencies, continuity, errors, authorization, and user outcomes.",
    "decision": "Which application and service flows are actually required for the mission.",
    "evidence": "Service map, interface catalog, dependency review, health, errors, and rollback."
  },
  {
    "role": "Data and privacy owner",
    "owns": "Fictional data purpose, categories, fields, access, sharing, integrity, retention, deletion, and privacy impact.",
    "decision": "Which information may cross each segment boundary and what minimum necessary means.",
    "evidence": "Data inventory, field allowlist, flow map, access review, retention, deletion, and restore checks."
  },
  {
    "role": "Detection and evidence owner",
    "owns": "Fictional flow records, source health, time quality, integrity, access, retention, alerts, and case linkage.",
    "decision": "Whether approved, denied, bypassed, failed, and recovered communication can be reconstructed.",
    "evidence": "Coverage map, sample flow records, source-health checks, time quality, and access review."
  },
  {
    "role": "Recovery owner",
    "owns": "Fictional recovery identities, restore paths, dependency order, temporary rules, exercises, closure, and service validation.",
    "decision": "Whether segmentation supports safe recovery without inheriting the original failure.",
    "evidence": "Recovery map, restore records, temporary access, closure checks, service health, and signoff."
  },
  {
    "role": "Supplier owner",
    "owns": "Fictional external paths, obligations, identity, data scope, evidence, health, fallback, changes, and exit.",
    "decision": "Which supplier communication and residual risk are acceptable.",
    "evidence": "Supplier register, approved flows, field scope, health, notices, fallback, and review."
  },
  {
    "role": "Governance and risk owner",
    "owns": "Fictional rule lifecycle, exceptions, architecture drift, review cadence, residual risk, and final acceptance.",
    "decision": "Whether remaining segmentation risks are accepted, reduced, transferred, avoided, or monitored.",
    "evidence": "Decision records, exception register, deadlines, owner signoff, corrective actions, and closure evidence."
  }
];
const evidenceMatrix = [
  {
    "id": "SEG-01",
    "source": "Fictional approved segmentation diagram",
    "observation": "Public, application, data, identity, management, logging, recovery, and supplier segments are documented.",
    "supports": "The intended design separates several mission and trust functions.",
    "limits": "Does not prove effective identities, rules, paths, data, or exceptions match the design.",
    "use": "Compare the approved diagram with effective-flow, identity, and rule evidence."
  },
  {
    "id": "SEG-02",
    "source": "Fictional effective-flow record",
    "observation": "The public application reaches a management service through an undocumented route.",
    "supports": "Segmentation drift or a bypass path may exist.",
    "limits": "Does not prove harmful activity or intentional bypass.",
    "use": "Validate source, identity, service, purpose, path, owner, evidence, and correction."
  },
  {
    "id": "SEG-03",
    "source": "Fictional identity-access matrix",
    "observation": "One support role can communicate with application, data, management, logging, and recovery segments.",
    "supports": "Broad privilege may collapse intended segmentation.",
    "limits": "Does not prove the role has been misused.",
    "use": "Use task-specific temporary roles, approval, session evidence, and independent review."
  },
  {
    "id": "SEG-04",
    "source": "Fictional rule inventory",
    "observation": "Six temporary rules use broad source or destination groups and have no expiration.",
    "supports": "Rule hygiene and exception governance are weak.",
    "limits": "Does not prove each rule is unnecessary.",
    "use": "Assign purpose, scope, owner, evidence, expiration, validation, and removal."
  },
  {
    "id": "SEG-05",
    "source": "Fictional dependency review",
    "observation": "Application services require identity, time, name resolution, logging, and recovery paths not all shown in the approved flow matrix.",
    "supports": "Hidden dependencies may cause outage or emergency bypass.",
    "limits": "Does not prove segmentation must be removed.",
    "use": "Document approved dependency paths and safe degraded behavior."
  },
  {
    "id": "SEG-06",
    "source": "Fictional supplier-flow record",
    "observation": "A supplier service communicates with two internal segments beyond the approved integration point.",
    "supports": "Supplier reachability may exceed approved scope.",
    "limits": "Does not prove the communication is unauthorized or harmful.",
    "use": "Validate contract purpose, identity, path, data, owner, evidence, fallback, and correction."
  },
  {
    "id": "SEG-07",
    "source": "Fictional logging coverage map",
    "observation": "Allowed flows are visible, but denied attempts and management-path changes are not.",
    "supports": "Defenders cannot validate that segmentation blocks and changes work as intended.",
    "limits": "Does not prove denied paths have succeeded.",
    "use": "Add denied-flow evidence, administrative change records, source health, and retention."
  },
  {
    "id": "SEG-08",
    "source": "Fictional recovery exercise",
    "observation": "A temporary recovery path remains active after service restoration.",
    "supports": "Recovery access may become permanent segmentation drift.",
    "limits": "Does not prove the path has been used improperly.",
    "use": "Close the path, expire temporary privilege, validate effective state, and obtain owner signoff."
  }
];
const commonMistakes = [
  "Grouping fictional systems only by physical location, subnet, product, or existing network design instead of mission, trust, data, identity, ownership, evidence, and recovery.",
  "Assuming segmentation is complete because several network zones appear on a diagram.",
  "Allowing broad source, destination, service, action, data, or identity scope for convenience.",
  "Trusting fictional internal traffic without service identity and authorization.",
  "Ignoring east-west service communication while focusing only on public entry and exit paths.",
  "Allowing one fictional support or administrator role to cross every segment.",
  "Combining normal user, administrative, logging, backup, recovery, and supplier paths.",
  "Failing to document identity, time, name resolution, logging, monitoring, storage, support, and recovery dependencies.",
  "Using default deny without planning safe degraded service and recovery.",
  "Using broad fail-open fallback that creates uncontrolled communication.",
  "Treating allowed-flow logs as enough while denied attempts, rule changes, source health, and recovery paths remain invisible.",
  "Leaving temporary rules and exceptions without purpose, owner, expiration, monitoring, validation, and removal.",
  "Failing to compare the fictional approved diagram with effective paths, identities, rules, data, and exceptions.",
  "Designing segmentation so complex that operators cannot support, validate, troubleshoot, or recover it safely.",
  "Using real internal diagrams, addresses, paths, identities, configurations, rules, logs, suppliers, or exceptions in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What best describes fictional network segmentation?",
    "choices": [
      "Dividing systems into as many network groups as possible.",
      "Grouping systems and controlling communication according to mission, trust, identity, data, ownership, evidence, and recovery needs.",
      "Blocking all east-west communication.",
      "Using one gateway for every decision."
    ],
    "answer": 1,
    "explanation": "Segmentation should be mission-driven, explicit, identity-aware, evidence-aware, supportable, and recoverable."
  },
  {
    "question": "What makes a fictional flow allowlist strong?",
    "choices": [
      "It allows an entire source segment to reach an entire destination segment.",
      "It defines specific source, destination, identity, service, purpose, action, data, owner, evidence, and review conditions.",
      "It has no expiration.",
      "It uses the word secure."
    ],
    "answer": 1,
    "explanation": "Strong allowlists are specific, justified, owned, testable, monitored, and reviewable."
  },
  {
    "question": "Why are hidden dependencies important?",
    "choices": [
      "They prove segmentation is unnecessary.",
      "Undocumented identity, time, name, logging, supplier, or recovery paths may cause outages or emergency bypasses.",
      "Every dependency should be public.",
      "Dependencies replace trust boundaries."
    ],
    "answer": 1,
    "explanation": "Hidden dependencies weaken service continuity and may create uncontrolled temporary paths during failure."
  },
  {
    "question": "A support role can reach every fictional segment. What is the strongest concern?",
    "choices": [
      "Support roles should never exist.",
      "Broad privilege may collapse intended segmentation and allow one identity to bypass several controls.",
      "The network diagram is too detailed.",
      "Logging is unnecessary."
    ],
    "answer": 1,
    "explanation": "Segmentation is weakened when one role crosses all boundaries without task-specific scope, approval, and evidence."
  },
  {
    "question": "What is strongest evidence that fictional segmentation works?",
    "choices": [
      "The approved diagram contains many segments.",
      "Allowed flows succeed, denied paths remain blocked, rule changes are visible, source health is reliable, and recovery closes temporary access.",
      "A supplier confirms the design.",
      "No user has complained."
    ],
    "answer": 1,
    "explanation": "Effective-state validation must prove both intended communication and denied or temporary paths."
  },
  {
    "question": "What should happen to a temporary fictional recovery rule after restoration?",
    "choices": [
      "Leave it active for future convenience.",
      "Close it, expire related privilege, validate effective state, review evidence, and obtain owner signoff.",
      "Hide it from documentation.",
      "Convert it into a permanent broad rule automatically."
    ],
    "answer": 1,
    "explanation": "Recovery is incomplete until temporary communication and privilege are removed or formally governed."
  },
  {
    "question": "What makes an A2.4 portfolio artifact safe to share?",
    "choices": [
      "Only real addresses are removed.",
      "The real diagram is cropped.",
      "Every organization, system, segment, identity, flow, rule, dependency, evidence item, exception, decision, date, and outcome is invented.",
      "Only passwords are removed."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects real architecture, organizations, people, and control details."
  }
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
        Module A2
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

export default function NetworkSegmentationStrategyPage() {
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
              Module A2
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 4 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Segmentation Strategy
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A2.4 Network Segmentation Strategy
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how advanced defenders group fictional systems by mission,
            trust, data, identity, ownership, evidence, and recovery needs;
            allow only required communication; deny unnecessary paths; expose
            hidden dependencies; govern exceptions; and validate effective
            segmentation without breaking critical services.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A2: Security Architecture"
          lessonTitle="Network Segmentation Strategy"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional organizations, systems, segments, identities, flows, rules, dependencies, evidence, exceptions, decisions, dates, and outcomes.",
            "I understand that a segmented diagram does not prove effective communication restrictions.",
            "I will connect every fictional path to mission purpose, identity, service, data, owner, evidence, failure behavior, and review.",
            "I will not upload or reproduce real diagrams, addresses, hostnames, paths, configurations, rules, credentials, logs, suppliers, or exceptions.",
            "I will analyze only supplied fictional evidence and will not access, scan, test, change, or investigate real systems.",
            "I will document hidden dependencies, safe degraded modes, recovery paths, rule lifecycle, effective-state validation, and residual risk.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Segmented Diagram Can Still Behave Like a Flat Network"
        >
          <p className="leading-8">
            A fictional design shows public, application, data, identity,
            management, logging, recovery, and supplier segments. Yet one support
            role reaches every segment, six temporary rules have no expiration,
            a supplier communicates beyond its integration point, important
            service dependencies are undocumented, and a recovery path remains
            open. The diagram is segmented, but effective trust and communication
            remain broad.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Cosmetic segmentation
              </p>
              <p className="mt-2 leading-7">
                Fictional zones exist visually, while broad roles, rules,
                supplier paths, hidden dependencies, and exceptions connect them.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strategic segmentation
              </p>
              <p className="mt-2 leading-7">
                Every fictional path has a mission purpose, narrow identity and
                data scope, owner, evidence, failure behavior, expiration, and
                validation.
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Segmentation Limits Unnecessary Communication and Reduces Impact"
        >
          <p className="leading-8">
            Strong fictional segmentation helps prevent one mistaken identity,
            weak service, supplier issue, configuration error, or failed control
            from reaching every system. It also makes approved service
            relationships easier to understand, monitor, recover, and govern.
            Weak segmentation can create hidden outages, emergency bypasses,
            broad privilege, invisible supplier reach, and permanent exceptions.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Reduce blast radius",
                "Limit fictional reachability, privilege, data exposure, and control impact.",
              ],
              [
                "Improve visibility",
                "Make fictional approved, denied, failed, changed, and recovered paths easier to validate.",
              ],
              [
                "Support resilience",
                "Preserve fictional critical dependencies, safe degraded service, recovery order, and closure.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Core Model"
          title="Mission → Segments → Required Flows → Controls → Evidence → Recovery → Governance"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Mission", "Define fictional users, critical services, data, dependencies, service priorities, and acceptable disruption."],
              ["Segments", "Group fictional systems by purpose, trust, identity, data, ownership, evidence, and recovery needs."],
              ["Required flows", "Document fictional source, destination, identity, service, purpose, action, data, and owner."],
              ["Controls", "Apply fictional identity, gateway, service, data, approval, monitoring, and recovery controls."],
              ["Evidence", "Record fictional path, identity, decision, result, time, source health, rule, owner, and exception."],
              ["Failure", "Plan fictional blocking, degraded service, fallback, manual approval, and safe recovery."],
              ["Validation", "Compare fictional approved rules with effective paths, identities, data, results, and denied attempts."],
              ["Governance", "Review fictional changes, temporary rules, suppliers, exceptions, owners, lifecycle, and residual risk."],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <p className="text-xl font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Language for Segmentation Decisions"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Segment Catalog
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Segments with Different Mission and Trust Requirements
          </h2>

          <div className="mt-6 grid gap-5">
            {segmentCatalog.map((item) => (
              <article
                key={item.segment}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.segment}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.purpose}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Contains", item.contains],
                    ["Allowed communication", item.allowed],
                    ["Denied communication", item.denied],
                    ["Dependencies", item.dependencies],
                    ["Required evidence", item.evidence],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.segment}-${label}`}
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Segmentation Dimensions
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Ways to Decide What Belongs Together
          </h2>

          <div className="mt-6 grid gap-5">
            {segmentationDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.dimension}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Design question", item.question],
                    ["Benefit", item.benefit],
                    ["Risk if ignored", item.risk_if_ignored],
                    ["Evidence", item.evidence],
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
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Approved Communication Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Paths with Explicit Purpose and Scope
          </h2>

          <div className="mt-6 grid gap-5">
            {flowMatrix.map((item) => (
              <article
                key={`${item.source}-${item.destination}`}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.source} → {item.destination}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">{item.purpose}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Required identity", item.identity],
                    ["Allowed data", item.data],
                    ["Control stack", item.control],
                    ["Deny when", item.deny],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.source}-${item.destination}-${label}`}
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Rule Hygiene
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Checks for Specific, Owned, and Reviewable Rules
          </h2>

          <div className="mt-6 grid gap-5">
            {ruleHygiene.map((item) => (
              <article
                key={item.check}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.check}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak rule
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong rule
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Validation
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.validation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Professional Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Steps from Mission Mapping to Segmentation Governance
          </h2>

          <div className="mt-6 grid gap-5">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 lg:grid-cols-[auto_0.45fr_1fr] lg:items-start">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-black text-cyan-100">
                    {item.title}
                  </h3>
                  <p className="leading-7 text-slate-300">{item.questions}</p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Stop condition
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.stop}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Segmentation Ownership
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Owners for Paths, Identities, Data, Evidence, Recovery, and Risk
          </h2>

          <div className="mt-6 grid gap-5">
            {owners.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.role}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Owns", item.owns],
                    ["Primary decision", item.decision],
                    ["Required evidence", item.evidence],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.role}-${label}`}
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

        <FakeDashboardCard
          title="Fake Northbridge Segmentation Dashboard"
          subtitle="Fictional segment, flow, rule, identity, dependency, evidence, and recovery review for training only."
          metrics={[
            {
              label: "Defined segments",
              value: "8",
              note: "Public, application, data, identity, management, logging, recovery, and supplier segments appear in the approved design.",
            },
            {
              label: "Rule concerns",
              value: "6",
              note: "Six temporary or broad fictional rules lack sufficient scope, ownership, or expiration.",
            },
            {
              label: "Current status",
              value: "Drift",
              note: "Effective communication does not fully match the approved segmentation strategy.",
            },
          ]}
        />

        <FakeAlertCard
          title="Broad Rules and Hidden Dependencies Weaken Segmentation"
          severity="High"
          time="5:14 PM"
          source="Fake Northbridge Segmentation Review Console"
          details="The fictional public application reaches a management service through an undocumented route, one support role crosses every major segment, supplier reach exceeds the approved integration point, six temporary rules lack expiration, and a recovery path remains active."
          recommendation="Pause approval, map dependencies, narrow identities and flows, correct supplier scope, add denied-path and change evidence, govern exceptions, close recovery access, validate service continuity, and document residual risk."
        />

        <FakeLogPanel
          title="Fake Segmentation Review Timeline"
          logs={[
            "16:00 SEGMENT public='defined'",
            "16:01 SEGMENT application='defined'",
            "16:02 SEGMENT data='defined'",
            "16:03 SEGMENT identity='defined'",
            "16:04 SEGMENT management='defined'",
            "16:05 SEGMENT logging='defined'",
            "16:06 SEGMENT recovery='defined'",
            "16:07 SEGMENT supplier='defined'",
            "16:20 FLOW public-app-to-management='observed'",
            "16:21 FLOW approved-matrix='missing'",
            "16:30 IDENTITY support-role='cross-segment-broad'",
            "16:40 RULE temporary-broad='6'",
            "16:45 DEPENDENCY undocumented='identity,time,dns,logs'",
            "16:50 SUPPLIER extra-segments='2'",
            "17:00 RECOVERY temporary-path='active'",
            "17:14 STATUS segmentation-drift='confirmed'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence before Approving the Segmentation Strategy
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
                    ["Design use", item.use],
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
          title="Does the Fictional Segmentation Strategy Limit Communication Effectively?"
          question="Does the current fictional Northbridge segmentation strategy provide effective, mission-aligned separation?"
          evidence={[
            "The approved design contains eight distinct segments.",
            "The public application reaches a management service through an undocumented route.",
            "One support role can communicate with application, data, management, logging, and recovery segments.",
            "Six temporary rules use broad source or destination groups and have no expiration.",
            "Identity, time, name resolution, logging, and recovery dependencies are missing from parts of the approved flow matrix.",
            "A supplier communicates with two internal segments beyond the approved integration point.",
            "Denied attempts and management-path changes have incomplete evidence coverage.",
            "A temporary recovery path remains active after restoration.",
          ]}
          options={[
            "No. Pause approval, map hidden dependencies, narrow identities and flows, correct supplier scope, add denied-path and change evidence, govern rules, close recovery access, validate service continuity, and verify effective state.",
            "Yes, because the diagram contains eight segments.",
            "Yes, because temporary rules are normal.",
            "Yes, because all systems belong to the same organization.",
          ]}
          bestAnswer={0}
          explanation="Effective segmentation requires mission-aligned groups, minimum necessary flows, identity-aware controls, reliable evidence, safe failure, governed exceptions, recovery closure, and proof that actual paths match approved design."
        />

        <SectionCard
          eyebrow="Common Segmentation Mistakes"
          title="What Advanced Defenders Must Avoid"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Build a Fictional Network Segmentation Strategy"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Redesign the Northbridge Segmentation Model
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                copy, quote, lightly modify, summarize, or reproduce real
                internal diagrams, addresses, hostnames, identities, rules,
                configurations, logs, suppliers, dependencies, exceptions, or
                recovery details.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Mission, system-context, trust-boundary, and dependency map.</li>
                <li>Ten-segment catalog with purpose, ownership, data, identity, evidence, and recovery.</li>
                <li>Approved and denied flow matrix.</li>
                <li>Service identity, administration, logging, supplier, and recovery path design.</li>
                <li>Hidden-dependency and safe-degraded-mode analysis.</li>
                <li>Rule-hygiene, exception, and lifecycle register.</li>
                <li>Allowed-flow, denied-path, source-health, and change-evidence plan.</li>
                <li>Blast-radius, failure-state, service-impact, and recovery analysis.</li>
                <li>Effective-path validation and architecture-drift review.</li>
                <li>Reflection, revision history, and complete fictionalization statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This activity creates a fictional educational design only. It does
            not authorize access, scanning, testing, configuration, rule
            changes, recovery, investigation, or collection involving any real
            system.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Default Deny Breaks a Critical Dependency"
          scenario="A fictional segmentation change blocks undocumented identity, time, and name-resolution dependencies. Public access is limited correctly, but a critical support service also stops working."
          choices={[
            {
              label: "Choice A",
              response: "Pause broad rollout, preserve the intended restriction, identify and document the minimum required dependencies, approve narrow paths, add evidence, validate service recovery, and update the architecture.",
              outcome: "Best professional choice. The response preserves security intent while correcting hidden dependencies safely.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Remove segmentation completely.",
              outcome: "Risky. A hidden dependency does not justify restoring broad unnecessary communication.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Keep the outage because default deny is always correct.",
              outcome: "Unsafe. Security architecture must preserve approved critical mission outcomes and safe recovery.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Supplier Reaches Additional Segments"
          scenario="A fictional supplier integration was approved for one application service. Effective records show the supplier communicating with data and management segments as well."
          choices={[
            {
              label: "Choice A",
              response: "Pause unapproved reach, preserve evidence, validate supplier identity and purpose, narrow the integration path, review data scope and contract requirements, confirm fallback, and document the owner decision.",
              outcome: "Best professional choice. The response limits scope without assuming malicious intent.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Allow the paths because the supplier is trusted.",
              outcome: "Risky. Supplier approval does not authorize unlimited internal communication.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "End the supplier relationship immediately without reviewing service impact.",
              outcome: "Unsafe. The path should be controlled, but mission, evidence, contract, fallback, and owner decisions must be considered.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design Segmentation for Safe Degraded Operation"
        >
          <p className="leading-8">
            Extend the fictional Northbridge design for a combined failure of
            the central identity service, logging platform, and supplier
            integration. A critical support function must continue in a limited
            safe mode. Design the segments, identities, paths, data limits,
            approvals, independent evidence, fail states, fallback, recovery
            order, closure, and validation needed to preserve the mission
            without reopening broad communication.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              [
                "Required segmentation",
                "Show fictional normal, degraded, recovery, and restored paths with specific identity, purpose, data, owner, evidence, expiration, and denial conditions.",
              ],
              [
                "Required validation",
                "Explain how the design preserves critical service, limits blast radius, prevents emergency rules from becoming permanent, and proves effective closure.",
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
        </SectionCard>

        <DefenderChecklist
          title="Network Segmentation Strategy Checklist"
          items={[
            "I can define the fictional mission, users, systems, services, identities, data, suppliers, administrators, evidence sources, and recovery dependencies.",
            "I can group fictional systems by mission, trust, sensitivity, ownership, identity, monitoring, administration, and recovery needs.",
            "I can document fictional approved and denied flows with source, destination, identity, service, purpose, action, data, owner, result, and evidence.",
            "I can distinguish fictional north-south, east-west, administrative, logging, supplier, backup, and recovery communication.",
            "I can identify fictional hidden identity, time, name-resolution, logging, storage, support, supplier, and recovery dependencies.",
            "I can use fictional identity-aware and service-aware controls instead of trusting network location alone.",
            "I can evaluate fictional broad roles, broad rules, supplier reach, temporary exceptions, and architecture drift.",
            "I can design fictional default-deny, fail-open, fail-closed, degraded, manual, fallback, and recovery behavior based on mission and risk.",
            "I can validate fictional allowed flows, denied paths, rule changes, source health, recovery paths, and effective closure.",
            "I can assign fictional mission, architecture, network, identity, service, data, evidence, recovery, supplier, governance, and risk owners.",
            "I can govern fictional rule purpose, scope, approval, expiration, review, removal, and residual risk.",
            "I will never use real internal diagrams, addresses, hostnames, identities, configurations, rules, logs, suppliers, or exceptions in this portfolio.",
          ]}
        />

        <MiniQuiz
          title="A2.4 Mini Quiz: Network Segmentation Strategy"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Network Segmentation Strategy Package for Northbridge. Include the mission map, system context, trust boundaries, dependency inventory, ten-segment catalog, approved and denied flow matrix, service identities, administrative paths, logging paths, supplier integration, backup and recovery paths, hidden dependencies, rule-hygiene review, exception register, blast-radius analysis, safe degraded mode, failure-state decisions, service-impact review, allowed-flow and denied-path evidence, source health, effective-path validation, architecture drift, recovery closure, residual risk, reflection, revision history, and a statement that every organization, system, segment, identity, flow, rule, dependency, evidence item, exception, decision, date, and outcome is invented."
          tips={[
            "Group fictional systems by mission and trust needs rather than existing location alone.",
            "Make every fictional flow specific, identity-aware, minimum necessary, owned, monitored, and reviewable.",
            "Include at least one hidden dependency and redesign it without restoring broad communication.",
            "Show how temporary supplier or recovery paths expire, close, and receive effective-state validation.",
            "Keep every system, segment, identity, path, rule, supplier, dependency, exception, evidence item, decision, and outcome completely invented.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready to Design Identity-Centered Architecture?"
        >
          <p className="leading-8">
            Before moving to A2.5, rate your readiness from 1 to 5 for each area:
            segment purpose, flow allowlists, denied paths, identity-aware
            controls, hidden dependencies, supplier scope, administration,
            evidence, rule hygiene, degraded service, recovery closure, and
            effective-path validation.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why a fictional segmented diagram may still behave like a flat network.",
              "I can group fictional systems by mission, trust, data, identity, ownership, evidence, and recovery.",
              "I can write fictional flow rules with specific source, destination, identity, service, purpose, data, owner, evidence, and expiration.",
              "I can identify fictional broad privilege, hidden dependencies, supplier overreach, weak rule hygiene, and recovery drift.",
              "I can validate fictional allowed flows, denied paths, rule changes, source health, and recovery closure.",
              "I can keep the entire segmentation portfolio fully invented and safe to share.",
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
            Record one fictional communication path you would narrow, one hidden
            dependency you would validate first, and one identity decision you
            will carry into A2.5.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Network segmentation is a mission-driven fictional architecture strategy, not merely a collection of network boxes.",
            "Segments should reflect purpose, trust, identity, data, ownership, administration, evidence, failure, and recovery needs.",
            "Every fictional communication path should define source, destination, identity, service, purpose, action, data, owner, result, evidence, and review.",
            "Internal location does not replace service identity, authorization, minimum necessary access, monitoring, and owner approval.",
            "Hidden identity, time, name-resolution, logging, supplier, support, and recovery dependencies must be documented before restrictive changes.",
            "Broad fictional roles and rules can collapse otherwise separate segments.",
            "Strong rule hygiene requires specific scope, current mission need, owner, evidence, expiration, validation, and removal.",
            "Default deny must be paired with safe degraded service, fallback, recovery, and service-impact validation.",
            "Effective segmentation is proven through allowed-flow, denied-path, rule-change, source-health, supplier, and recovery evidence.",
            "Every CyberShield segmentation artifact must remain fully fictional, defensive, non-operational, privacy-safe, and incapable of exposing real systems.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A2
          </h2>
          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}