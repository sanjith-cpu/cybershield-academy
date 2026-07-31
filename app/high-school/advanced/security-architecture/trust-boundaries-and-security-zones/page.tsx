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
const previousLesson = `${modulePath}/defense-in-depth-design`;
const nextLesson = `${modulePath}/network-segmentation-strategy`;

const objectives = [
  "Explain fictional trust boundaries as points where identity, authority, ownership, sensitivity, network, service, data, or control assumptions change.",
  "Distinguish fictional security zones from simple network groupings by connecting each zone to purpose, trust level, data sensitivity, ownership, access, monitoring, and recovery.",
  "Map fictional users, services, identities, data flows, administrative paths, supplier connections, and recovery paths across clearly documented trust boundaries.",
  "Evaluate fictional boundary controls using least privilege, explicit validation, evidence quality, safe failure, exception governance, and end-to-end service impact.",
  "Create a portfolio-ready fictional trust-boundary and security-zone package using only invented systems, identities, diagrams, evidence, decisions, dates, and outcomes."
];
const vocabulary = [
  [
    "Trust boundary",
    "A fictional point where identity, authority, ownership, sensitivity, network, service, data, control, or assurance assumptions change and new validation is required."
  ],
  [
    "Security zone",
    "A fictional grouping of systems, services, identities, or data with a shared purpose, trust posture, ownership model, protection need, and communication policy."
  ],
  [
    "Trust assumption",
    "A fictional condition treated as reliable, such as a service identity being valid or a data source being authoritative, which must be documented and tested."
  ],
  [
    "Boundary crossing",
    "A fictional request, identity action, data transfer, administrative session, supplier connection, recovery action, or event that moves across a trust boundary."
  ],
  [
    "Validation point",
    "A fictional control location where identity, authorization, input, data purpose, device state, service context, path, or evidence is checked."
  ],
  [
    "Policy enforcement point",
    "A fictional component or process that applies an approved decision such as allow, deny, limit, pause, quarantine, or require approval."
  ],
  [
    "Policy decision point",
    "A fictional component or role that evaluates context and decides whether a requested boundary crossing should be allowed."
  ],
  [
    "Zone purpose",
    "The fictional mission function a security zone supports, such as public access, application processing, data storage, administration, logging, backup, or supplier integration."
  ],
  [
    "North-south flow",
    "A fictional flow entering or leaving a defined environment or service boundary."
  ],
  [
    "East-west flow",
    "A fictional flow between systems or services inside a broader environment."
  ],
  [
    "Administrative plane",
    "The fictional identities, services, paths, interfaces, and evidence used to manage systems and controls."
  ],
  [
    "Data plane",
    "The fictional paths and processing used to deliver the normal user or service function."
  ],
  [
    "Control plane",
    "The fictional logic and services that define, distribute, or enforce security and operational decisions."
  ],
  [
    "Management zone",
    "A fictional zone containing tightly controlled administrative services, identities, interfaces, and evidence."
  ],
  [
    "Logging zone",
    "A fictional zone designed to receive, protect, analyze, retain, and validate security and service evidence."
  ],
  [
    "Recovery zone",
    "A fictional zone containing protected restore states, recovery identities, tools, evidence, and processes separated from normal production failure paths."
  ],
  [
    "Supplier boundary",
    "A fictional trust boundary where responsibility, visibility, evidence, support, ownership, and control shift to or from an external provider."
  ],
  [
    "Boundary exception",
    "A fictional temporary or approved deviation from normal communication or access rules, with purpose, owner, scope, evidence, expiration, and review."
  ],
  [
    "Boundary drift",
    "A fictional mismatch between the approved boundary design and the effective identities, paths, data flows, services, or exceptions."
  ],
  [
    "Zone collapse",
    "A fictional condition where distinct security zones no longer provide meaningful separation because broad access, shared administration, shared failure, or unmanaged paths connect them."
  ]
];
const zoneCatalog = [
  {
    "zone": "Public interaction zone",
    "purpose": "Receive fictional user requests and provide only the minimum public-facing service functions.",
    "contains": "Public application endpoints, content delivery, request-routing services, and limited user-facing interfaces.",
    "trust": "Treat all incoming requests and identities as untrusted until validated.",
    "allowed": "Approved public requests to the application processing zone through documented validation points.",
    "denied": "Direct access to data, management, logging, backup, recovery, or internal service interfaces.",
    "evidence": "Request identity, source context, action, target, result, rate, validation outcome, and source health."
  },
  {
    "zone": "Application processing zone",
    "purpose": "Process fictional business logic and coordinate approved service-to-service activity.",
    "contains": "Application services, APIs, service identities, approved configuration, and limited runtime dependencies.",
    "trust": "Trust only approved service identities and validated requests for defined purposes.",
    "allowed": "Narrow application-to-data and application-to-internal-service flows required by the mission.",
    "denied": "Broad administrative access, direct public database access, and undocumented supplier communication.",
    "evidence": "Service identity, request context, authorization result, dependency use, errors, configuration version, and health."
  },
  {
    "zone": "Sensitive data zone",
    "purpose": "Store and process fictional protected or mission-critical data with strict purpose and access controls.",
    "contains": "Databases, protected records, data services, integrity checks, and approved backup interfaces.",
    "trust": "Do not trust network location alone; require service identity, role, purpose, path, and data-level authorization.",
    "allowed": "Approved application service queries and tightly controlled data administration.",
    "denied": "Direct public access, broad support access, unmanaged export, and unapproved supplier paths.",
    "evidence": "Actor, service, role, data category, action, result, volume, purpose, integrity, and administrative changes."
  },
  {
    "zone": "Internal service zone",
    "purpose": "Provide fictional shared internal capabilities needed by approved applications and users.",
    "contains": "Internal APIs, workflow services, messaging services, reporting services, and approved shared dependencies.",
    "trust": "Treat internal services as separate identities with explicit permissions rather than automatically trusted peers.",
    "allowed": "Documented service-to-service flows with purpose, owner, and validation.",
    "denied": "Unrestricted east-west communication and inherited access based only on internal location.",
    "evidence": "Calling service, target service, action, authorization, result, latency, dependency, and health."
  },
  {
    "zone": "Identity and access zone",
    "purpose": "Provide fictional authentication, authorization, role, privilege, lifecycle, approval, and identity evidence.",
    "contains": "Identity services, role systems, approval workflows, privileged-access services, and lifecycle processes.",
    "trust": "Identity assertions require source, context, assurance level, lifecycle state, and policy validation.",
    "allowed": "Approved authentication and policy decisions for registered services and identities.",
    "denied": "Anonymous administration, shared privileged identities, and undocumented service trust.",
    "evidence": "Identity, assurance, role, request, decision, approver, lifecycle state, result, and source health."
  },
  {
    "zone": "Management zone",
    "purpose": "Provide fictional administrative access to systems and controls through highly restricted and monitored paths.",
    "contains": "Administrative interfaces, management services, temporary privileged sessions, change systems, and operator tools.",
    "trust": "Require named identity, approved role, device or workload context, purpose, time limit, approval, and session evidence.",
    "allowed": "Time-bound approved administration through controlled management paths.",
    "denied": "Public or broad user access, shared accounts, direct unmanaged administration, and silent changes.",
    "evidence": "Administrator, approver, purpose, target, command category, start, end, result, change record, and validation."
  },
  {
    "zone": "Logging and detection zone",
    "purpose": "Protect fictional evidence used for monitoring, triage, validation, response, recovery, and accountability.",
    "contains": "Log collectors, analysis services, source-health monitoring, time-quality checks, alerting, and protected retention.",
    "trust": "Treat evidence as useful only when source, time, integrity, context, access, and health are known.",
    "allowed": "Approved evidence ingestion, analysis, case access, and limited administration.",
    "denied": "Broad deletion, silent source disablement, unmanaged administrator access, and unreviewed retention changes.",
    "evidence": "Source health, ingestion, time quality, administrative change, access, retention, integrity, and case linkage."
  },
  {
    "zone": "Backup and recovery zone",
    "purpose": "Preserve fictional approved restore states and support recovery independent from common production failure domains.",
    "contains": "Protected backups, recovery identities, restore services, integrity records, exercises, and recovery evidence.",
    "trust": "Recovery authority and evidence should not depend entirely on the production identities or systems being restored.",
    "allowed": "Approved backup creation, integrity validation, restore exercises, and controlled recovery operations.",
    "denied": "Routine production administration, broad write access, unmanaged deletion, and recovery without validation.",
    "evidence": "Backup source, state, integrity, owner, retention, restore action, recovery identity, result, and service validation."
  },
  {
    "zone": "Supplier integration zone",
    "purpose": "Isolate and govern fictional external service connections where ownership, visibility, and control change.",
    "contains": "Supplier gateways, limited integration services, exchange points, evidence collectors, and fallback mechanisms.",
    "trust": "Treat supplier assertions, services, and data as externally controlled and validate purpose, identity, path, scope, and health.",
    "allowed": "Only approved minimum flows required by the contract and mission.",
    "denied": "Broad supplier reachability, inherited internal trust, and undocumented data sharing.",
    "evidence": "Supplier identity, service, flow, data category, result, health, change, support event, and owner communication."
  },
  {
    "zone": "User access zone",
    "purpose": "Provide fictional users with approved access to the services required for their roles.",
    "contains": "User devices conceptually, access portals, remote access services, session controls, and user guidance.",
    "trust": "Validate identity, role, session context, service purpose, and current authorization for each important action.",
    "allowed": "Role-appropriate access through documented paths.",
    "denied": "Direct management access, broad data access, shared identities, and bypass of service controls.",
    "evidence": "User identity, role, session, source context, service, action, result, and unusual access patterns."
  }
];
const boundaryTypes = [
  {
    "type": "Identity boundary",
    "change": "A fictional anonymous, user, service, device, workload, administrator, supplier, or recovery identity becomes trusted for a defined action.",
    "questions": "Who is acting, how was identity established, what role applies, which approval exists, and when does access expire?",
    "controls": "Authentication, role evaluation, least privilege, approval, session limits, lifecycle, and identity evidence.",
    "failure": "A valid identity is treated as authorized for every action."
  },
  {
    "type": "Authorization boundary",
    "change": "A fictional request moves from being identified to being permitted for a specific resource, action, purpose, and context.",
    "questions": "Is the actor allowed to perform this exact action on this exact target for this exact purpose?",
    "controls": "Policy decision, resource authorization, purpose check, context, separation of duties, and denial evidence.",
    "failure": "Authentication is incorrectly treated as complete authorization."
  },
  {
    "type": "Network boundary",
    "change": "A fictional flow crosses between zones, environments, locations, suppliers, or administrative paths.",
    "questions": "Why is the path needed, which identities and services use it, what is allowed, what is denied, and how is it monitored?",
    "controls": "Segmentation, gateways, approved flow rules, service identity, path monitoring, and exceptions.",
    "failure": "Network location is treated as proof of trust."
  },
  {
    "type": "Data boundary",
    "change": "Fictional information changes owner, purpose, sensitivity, format, location, recipient, retention, or access model.",
    "questions": "Which data is moving, why, who owns it, what is minimum necessary, and how will use and deletion be validated?",
    "controls": "Classification, field allowlist, authorization, encryption concepts, integrity, retention, deletion, and audit.",
    "failure": "A permitted connection is assumed to authorize all data."
  },
  {
    "type": "Service boundary",
    "change": "A fictional request moves between independently operated applications, APIs, workloads, or shared services.",
    "questions": "Which service is calling, what function is requested, what trust exists, and how are failures and retries handled?",
    "controls": "Service identity, narrow authorization, request validation, rate limits, error handling, logging, and dependency health.",
    "failure": "Internal services automatically trust every peer."
  },
  {
    "type": "Administrative boundary",
    "change": "A fictional user or service receives authority to configure, manage, monitor, recover, or change a system.",
    "questions": "Who approved the action, which role is used, what is the purpose, how long is access valid, and what evidence remains?",
    "controls": "Named privilege, temporary access, approval, session evidence, change records, rollback, and independent review.",
    "failure": "Routine support access silently includes broad administration."
  },
  {
    "type": "Supplier boundary",
    "change": "Fictional responsibility, control, evidence, support, data handling, or service delivery shifts to an external provider.",
    "questions": "Which obligations remain internal, what evidence is available, how are incidents communicated, and what fallback exists?",
    "controls": "Contract requirements, narrow integration, owner review, supplier evidence, fallback, exit, and residual-risk decision.",
    "failure": "The supplier is treated as fully trusted because it is approved."
  },
  {
    "type": "Recovery boundary",
    "change": "Fictional identities, data, services, configurations, and evidence move from failed or suspect states into restored operation.",
    "questions": "Which state is trusted, who authorizes recovery, what dependencies come first, and how is restored trust validated?",
    "controls": "Protected restore states, separate recovery identity, integrity, dependency order, service checks, evidence, and signoff.",
    "failure": "A restored system is considered safe because it starts successfully."
  }
];
const flowReview = [
  {
    "flow": "Public user → public application",
    "purpose": "Submit a fictional support request and view approved status information.",
    "required_validation": "Request structure, session or identity when needed, rate, action, target, input safety, and service availability.",
    "allowed_data": "Minimum request fields and approved public response fields.",
    "evidence": "Source context, request, identity state, validation result, target, response, and rate.",
    "deny_when": "The request targets internal, management, data, logging, or recovery functions directly."
  },
  {
    "flow": "Public application → application service",
    "purpose": "Pass a validated fictional request to the service responsible for business logic.",
    "required_validation": "Service identity, approved route, action, context, integrity, and authorization.",
    "allowed_data": "Only fields required for the approved service function.",
    "evidence": "Calling service, target service, route, action, result, latency, and errors.",
    "deny_when": "The public layer attempts direct data, management, logging, or supplier administration."
  },
  {
    "flow": "Application service → sensitive data service",
    "purpose": "Read or update fictional records required for an approved transaction.",
    "required_validation": "Service identity, role, action, data category, purpose, field scope, and transaction context.",
    "allowed_data": "Minimum approved fields for the requested function.",
    "evidence": "Service, role, action, data category, result, volume, and administrative override.",
    "deny_when": "The request is broad, unowned, outside purpose, or uses an administrative interface."
  },
  {
    "flow": "Administrator → management zone",
    "purpose": "Perform a fictional approved time-bound change or review.",
    "required_validation": "Named identity, privileged role, approval, purpose, device or workload context, time limit, and change record.",
    "allowed_data": "Only management information required for the approved task.",
    "evidence": "Administrator, approver, session, target, action category, result, change, and validation.",
    "deny_when": "The identity is shared, approval is missing, access is outside scope, or session evidence is unavailable."
  },
  {
    "flow": "Systems → logging zone",
    "purpose": "Send fictional evidence required for detection, validation, recovery, and accountability.",
    "required_validation": "Source identity, source health, event integrity, reliable time, required context, and retention classification.",
    "allowed_data": "Only approved security and service evidence fields.",
    "evidence": "Source, health, ingestion status, time quality, event class, access, and retention.",
    "deny_when": "The source is unknown, integrity is invalid, or evidence collection exceeds approved purpose."
  },
  {
    "flow": "Recovery operator → recovery zone",
    "purpose": "Perform a fictional approved restore exercise or recovery action.",
    "required_validation": "Separate recovery identity, owner approval, purpose, target, restore state, integrity, and dependency order.",
    "allowed_data": "Approved backup metadata, restore states, validation results, and required service data.",
    "evidence": "Operator, approver, backup state, integrity, restore action, result, service checks, and signoff.",
    "deny_when": "Recovery depends on an untrusted production identity or restore integrity cannot be established."
  },
  {
    "flow": "Supplier service → integration zone",
    "purpose": "Provide a fictional external capability required by the service.",
    "required_validation": "Supplier identity, approved interface, contract purpose, data scope, health, rate, and owner.",
    "allowed_data": "Minimum approved data and service calls required by the agreement.",
    "evidence": "Supplier, flow, action, data category, result, health, change, and owner communication.",
    "deny_when": "The supplier attempts broad internal access, undocumented data use, or unmanaged administration."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define the fictional system context",
    "questions": "What mission, users, systems, identities, data, suppliers, services, locations, and dependencies exist?",
    "output": "System-context diagram and boundary statement.",
    "stop": "Do not draw security zones before the service purpose and system limits are understood."
  },
  {
    "step": "2",
    "title": "Identify trust changes",
    "questions": "Where do fictional identity, authority, ownership, sensitivity, network, service, data, or control assumptions change?",
    "output": "Trust-boundary register.",
    "stop": "Pause if any assumed trust cannot be explained or owned."
  },
  {
    "step": "3",
    "title": "Define zone purpose",
    "questions": "Which fictional mission function, asset set, identity group, data category, or administrative role belongs in each zone?",
    "output": "Security-zone catalog.",
    "stop": "Do not group systems only because they share a network or product."
  },
  {
    "step": "4",
    "title": "Map every approved flow",
    "questions": "Which fictional identity or service crosses each boundary, for what purpose, with which data, action, path, and owner?",
    "output": "Approved flow and denied-flow matrix.",
    "stop": "Pause if a flow lacks a purpose, owner, data scope, or validation point."
  },
  {
    "step": "5",
    "title": "Place decision and enforcement points",
    "questions": "Where should fictional identity, authorization, input, service, data, path, approval, or recovery decisions be made and enforced?",
    "output": "Boundary-control architecture.",
    "stop": "Do not rely on one control or one network location as complete trust."
  },
  {
    "step": "6",
    "title": "Design evidence at crossings",
    "questions": "Which fictional evidence proves actor, action, target, purpose, decision, result, source health, time, and owner?",
    "output": "Boundary evidence and source-health plan.",
    "stop": "Pause if important crossings cannot be reconstructed."
  },
  {
    "step": "7",
    "title": "Analyze bypass and collapse",
    "questions": "Which fictional exceptions, shared administrators, alternate paths, suppliers, or broad identities could bypass or collapse the zones?",
    "output": "Boundary-bypass and zone-collapse analysis.",
    "stop": "Do not approve zones that provide only visual separation."
  },
  {
    "step": "8",
    "title": "Design failure and recovery",
    "questions": "How should fictional boundaries behave when identity, network, logging, service, supplier, or recovery dependencies fail?",
    "output": "Safe-failure, degraded-mode, and recovery-boundary plan.",
    "stop": "Do not create uncontrolled access or unnecessary total outage."
  },
  {
    "step": "9",
    "title": "Validate effective state",
    "questions": "Do fictional actual identities, paths, data flows, controls, exceptions, and evidence match the approved design?",
    "output": "Boundary and zone validation matrix.",
    "stop": "Do not treat diagrams or policy as proof of effective behavior."
  },
  {
    "step": "10",
    "title": "Govern change and exceptions",
    "questions": "How are fictional new flows, suppliers, identities, services, data uses, exceptions, owners, and retirements reviewed?",
    "output": "Boundary-change and exception-governance plan.",
    "stop": "Do not let temporary crossings become permanent invisible trust."
  }
];
const owners = [
  {
    "role": "Mission owner",
    "owns": "Fictional critical functions, users, acceptable disruption, service priorities, and business risk.",
    "decision": "Whether zone and boundary restrictions preserve the required mission outcome.",
    "evidence": "Mission priorities, service dependencies, disruption limits, and risk acceptance."
  },
  {
    "role": "Security architect",
    "owns": "Fictional trust model, zone purpose, boundary controls, approved patterns, exceptions, and integrated validation.",
    "decision": "Whether the boundary design is explicit, layered, evidence-aware, recoverable, and governed.",
    "evidence": "Context diagram, trust register, zone catalog, flow matrix, decisions, and validation plan."
  },
  {
    "role": "Identity owner",
    "owns": "Fictional human, service, device, workload, supplier, administrator, and recovery identities.",
    "decision": "Which identities may cross each boundary and under what assurance, role, approval, and lifecycle conditions.",
    "evidence": "Identity inventory, role matrix, approvals, sessions, lifecycle, and reviews."
  },
  {
    "role": "Network and platform owner",
    "owns": "Fictional zones, gateways, paths, platform services, connectivity, configuration, health, and network evidence.",
    "decision": "Which paths are supportable and how effective state will be verified.",
    "evidence": "Zone diagram, path matrix, configuration review, flow evidence, health, and exceptions."
  },
  {
    "role": "Application and service owner",
    "owns": "Fictional service identities, interfaces, actions, dependencies, authorization, errors, continuity, and service evidence.",
    "decision": "Which service-to-service crossings are required for the mission.",
    "evidence": "Service map, interface catalog, authorization tests, health, errors, and rollback."
  },
  {
    "role": "Data and privacy owner",
    "owns": "Fictional data purpose, categories, fields, access, sharing, integrity, retention, deletion, and privacy effects.",
    "decision": "Which data may cross each boundary and what minimum necessary means.",
    "evidence": "Data inventory, flow map, field allowlist, access review, retention, deletion, and restore checks."
  },
  {
    "role": "Detection and evidence owner",
    "owns": "Fictional crossing evidence, source health, time quality, integrity, access, retention, alerts, and case linkage.",
    "decision": "Whether boundary use, bypass, drift, and recovery can be detected and reconstructed.",
    "evidence": "Coverage map, sample events, source-health checks, time quality, and access review."
  },
  {
    "role": "Recovery owner",
    "owns": "Fictional recovery identities, restore states, dependency order, boundary behavior during failure, exercises, and validation.",
    "decision": "Whether recovery can reestablish trusted operation without inheriting the original failure.",
    "evidence": "Recovery map, restore records, integrity checks, service validation, and signoff."
  },
  {
    "role": "Supplier owner",
    "owns": "Fictional external connections, obligations, access, data, evidence, support, fallback, change, and exit.",
    "decision": "Which supplier boundary crossings and residual risks are acceptable.",
    "evidence": "Supplier map, requirements, flow evidence, change notices, fallback, and review."
  },
  {
    "role": "Governance and risk owner",
    "owns": "Fictional exceptions, architecture versions, residual risk, review cadence, corrective actions, and final acceptance.",
    "decision": "Whether remaining boundary and zone risks are accepted, reduced, transferred, avoided, or monitored.",
    "evidence": "Decision records, exceptions, deadlines, owner signoff, and closure evidence."
  }
];
const evidenceMatrix = [
  {
    "id": "TBZ-01",
    "source": "Fictional approved zone diagram",
    "observation": "Public, application, data, management, logging, recovery, and supplier zones are shown.",
    "supports": "The intended architecture recognizes several trust and service boundaries.",
    "limits": "Does not prove actual identities, paths, controls, or data flows match the drawing.",
    "use": "Compare the approved view with effective flow, identity, and configuration evidence."
  },
  {
    "id": "TBZ-02",
    "source": "Fictional effective flow record",
    "observation": "The public application reaches a management interface through an undocumented path.",
    "supports": "A boundary bypass or architecture drift may exist.",
    "limits": "Does not prove the flow was harmful or intentionally created.",
    "use": "Confirm purpose, owner, identity, path, control, evidence, and corrective action."
  },
  {
    "id": "TBZ-03",
    "source": "Fictional identity matrix",
    "observation": "One support role may access application, data, management, logging, and recovery zones.",
    "supports": "Zone separation may collapse through broad privilege.",
    "limits": "Does not prove the role has been misused.",
    "use": "Review least privilege, role separation, temporary access, approval, and independent evidence."
  },
  {
    "id": "TBZ-04",
    "source": "Fictional supplier integration record",
    "observation": "A supplier service sends additional fields not listed in the approved data-flow document.",
    "supports": "Data scope or supplier-boundary assumptions may have drifted.",
    "limits": "Does not prove the added fields are sensitive or unauthorized.",
    "use": "Validate purpose, fields, owner approval, retention, evidence, and contract requirements."
  },
  {
    "id": "TBZ-05",
    "source": "Fictional logging coverage map",
    "observation": "Application flows are visible, but management and recovery boundary crossings are not.",
    "supports": "Important privileged and recovery activity may be unobservable.",
    "limits": "Does not prove improper activity occurred.",
    "use": "Add boundary evidence, source-health checks, time quality, access control, and retention."
  },
  {
    "id": "TBZ-06",
    "source": "Fictional recovery exercise",
    "observation": "Restored systems return to service, but the temporary recovery path remains open afterward.",
    "supports": "A recovery exception may become permanent boundary drift.",
    "limits": "Does not prove the path has been used after recovery.",
    "use": "Require closure validation, expiration, owner signoff, and effective-path review."
  },
  {
    "id": "TBZ-07",
    "source": "Fictional exception register",
    "observation": "Four temporary cross-zone rules have no expiration or current owner.",
    "supports": "Boundary exceptions are not governed effectively.",
    "limits": "Does not prove every exception is unnecessary.",
    "use": "Assign purpose, scope, owner, evidence, expiration, review, and removal criteria."
  },
  {
    "id": "TBZ-08",
    "source": "Fictional source-health dashboard",
    "observation": "The logging source for the management zone stopped reporting forty minutes before an administrative change.",
    "supports": "Confidence in the administrative timeline is reduced.",
    "limits": "Does not prove the change was unauthorized.",
    "use": "Preserve uncertainty, seek independent evidence, validate the change, and restore source health."
  }
];
const commonMistakes = [
  "Treating fictional security zones as colored network boxes without defining purpose, identities, data, owners, allowed flows, denied flows, evidence, failure, and recovery.",
  "Assuming internal location or network membership equals trust.",
  "Treating successful authentication as authorization for every resource and action.",
  "Allowing one fictional support or administrator role to cross every security zone.",
  "Protecting north-south flows while ignoring fictional east-west service and administrative paths.",
  "Failing to separate the fictional administrative plane, data plane, control plane, logging path, and recovery path.",
  "Using a single gateway or identity provider as the only validation point for every boundary.",
  "Allowing public or user zones to reach management, logging, backup, or recovery interfaces directly.",
  "Creating supplier connections without minimum data scope, owner, evidence, fallback, change review, and exit planning.",
  "Logging normal service flows while leaving privileged, recovery, supplier, and exception crossings invisible.",
  "Treating a diagram as proof that effective identity, path, data, and control behavior match the approved design.",
  "Leaving temporary boundary exceptions without owner, purpose, expiration, monitoring, validation, and removal.",
  "Restoring fictional systems but failing to close temporary recovery paths and privileges.",
  "Using real internal diagrams, network paths, system names, supplier details, identities, configurations, logs, or exceptions in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What best defines a fictional trust boundary?",
    "choices": [
      "Any line drawn between two network boxes.",
      "A point where identity, authority, ownership, sensitivity, network, service, data, or control assumptions change.",
      "A firewall product only.",
      "A list of trusted employees."
    ],
    "answer": 1,
    "explanation": "A trust boundary exists wherever assumptions change and new validation, ownership, evidence, or control is required."
  },
  {
    "question": "What makes a fictional security zone meaningful?",
    "choices": [
      "Every system uses the same product.",
      "The zone has a defined purpose, trust posture, ownership, identities, data, allowed flows, denied flows, evidence, and recovery behavior.",
      "The zone has a unique color.",
      "The zone is labeled internal."
    ],
    "answer": 1,
    "explanation": "A meaningful zone is defined by security and mission characteristics, not appearance or location alone."
  },
  {
    "question": "A user authenticates successfully. What does that prove?",
    "choices": [
      "The user may perform every action.",
      "The identity was accepted at a stated assurance level, but authorization for the exact action and target is still required.",
      "The user is an administrator.",
      "The network path is safe."
    ],
    "answer": 1,
    "explanation": "Authentication identifies an actor; authorization decides whether a specific action is allowed."
  },
  {
    "question": "A fictional approved diagram omits a flow seen in effective records. What is strongest?",
    "choices": [
      "Ignore the flow because the diagram is approved.",
      "Treat the mismatch as possible boundary drift and validate purpose, owner, identity, path, data, controls, evidence, and correction.",
      "Assume malicious activity.",
      "Delete the flow record."
    ],
    "answer": 1,
    "explanation": "The mismatch requires evidence-based review without assuming intent or harm."
  },
  {
    "question": "Why can one support role weaken several fictional zones?",
    "choices": [
      "Support roles are always unsafe.",
      "Broad privilege may collapse intended separation and allow one identity to cross many boundaries.",
      "Zones should have no administrators.",
      "Identity controls replace network controls."
    ],
    "answer": 1,
    "explanation": "Zone separation is weakened when broad privilege bypasses intended boundaries and independent ownership."
  },
  {
    "question": "What should happen to a temporary fictional recovery path after restoration?",
    "choices": [
      "Leave it open for convenience.",
      "Close it, validate effective state, review evidence, expire temporary privilege, and obtain owner signoff.",
      "Remove all recovery capability.",
      "Hide it from the architecture diagram."
    ],
    "answer": 1,
    "explanation": "Recovery exceptions must be closed and validated so they do not become permanent invisible trust."
  },
  {
    "question": "What makes an A2.3 portfolio artifact safe to share?",
    "choices": [
      "Real system names are shortened.",
      "The real diagram is blurred.",
      "Every organization, system, identity, zone, path, data flow, evidence item, exception, decision, date, and outcome is invented.",
      "Only credentials are removed."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects real organizations, systems, people, architecture, and security controls."
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

export default function TrustBoundariesAndSecurityZonesPage() {
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
              Lesson 3 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Trust and Zone Design
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A2.3 Trust Boundaries and Security Zones
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how advanced defenders identify where fictional trust changes,
            group systems into purposeful security zones, control every crossing,
            detect boundary drift, protect administrative and recovery paths,
            and validate that effective behavior matches the approved design.
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
          lessonTitle="Trust Boundaries and Security Zones"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional organizations, systems, identities, zones, paths, services, data, evidence, exceptions, decisions, dates, and outcomes.",
            "I understand that a network line or internal label does not automatically create trust.",
            "I will separate authentication, authorization, path approval, data purpose, service identity, administration, evidence, and recovery decisions.",
            "I will not upload or reproduce real diagrams, network details, system names, configurations, credentials, logs, supplier information, or exceptions.",
            "I will analyze only supplied fictional evidence and will not access, scan, test, change, or investigate real systems.",
            "I will document uncertainty, boundary drift, exceptions, source health, recovery closure, ownership, and residual risk.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Colored Diagram Does Not Prove Separation"
        >
          <p className="leading-8">
            A fictional architecture contains public, application, data,
            management, logging, recovery, and supplier zones. The diagram looks
            organized, but one support identity can reach every zone, an
            undocumented path connects the public application to management, a
            supplier sends extra data fields, and recovery leaves a temporary
            path open. The zones exist visually, but several controls allow
            their trust assumptions to collapse.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Visual separation
              </p>
              <p className="mt-2 leading-7">
                Boxes and colors imply boundaries, while broad identities,
                undocumented flows, invisible administration, and permanent
                exceptions bypass them.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Effective separation
              </p>
              <p className="mt-2 leading-7">
                Each crossing has purpose, identity, authorization, data scope,
                path, owner, evidence, failure behavior, recovery, and validation.
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
          title="Every Important Crossing Changes Risk, Responsibility, or Trust"
        >
          <p className="leading-8">
            Fictional systems do not become safe because they are inside a
            network. A user becomes a service actor, a service requests data, an
            administrator changes a control, a supplier exchanges information,
            or a recovery operator restores a system. Each crossing changes who
            is acting, what they may do, which data is involved, who owns the
            decision, what evidence remains, and what happens when the control
            fails.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Make trust explicit",
                "Document fictional identities, authority, assumptions, owners, conditions, and expiration.",
              ],
              [
                "Control the crossing",
                "Validate fictional actor, action, target, purpose, data, path, context, and result.",
              ],
              [
                "Prove effective state",
                "Compare fictional approved design with actual paths, identities, evidence, exceptions, and recovery.",
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
          title="Context → Boundary → Zone → Flow → Validation → Evidence → Governance"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Context", "Define fictional mission, users, systems, identities, data, suppliers, owners, and dependencies."],
              ["Boundary", "Identify where fictional trust, authority, sensitivity, ownership, service, network, or control assumptions change."],
              ["Zone", "Group fictional assets by purpose, trust posture, ownership, data, access, monitoring, and recovery needs."],
              ["Flow", "Document fictional actor, action, target, path, purpose, data, owner, and result for every approved crossing."],
              ["Validation", "Check fictional identity, authorization, input, service, data, path, context, approval, and recovery conditions."],
              ["Evidence", "Preserve fictional source, time, health, decision, action, target, result, owner, and exception information."],
              ["Governance", "Control fictional changes, suppliers, exceptions, drift, review cadence, ownership, and residual risk."],
              ["Recovery", "Restore fictional trusted operation and close temporary paths, privileges, and exceptions after validation."],
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
          title="Language for Trust and Zone Design"
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
            Security-Zone Catalog
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Fictional Zones with Different Purposes and Trust Postures
          </h2>

          <div className="mt-6 grid gap-5">
            {zoneCatalog.map((item) => (
              <article
                key={item.zone}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.zone}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.purpose}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Contains", item.contains],
                    ["Trust posture", item.trust],
                    ["Allowed", item.allowed],
                    ["Denied", item.denied],
                    ["Required evidence", item.evidence],
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
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Boundary Types
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Ways Fictional Trust Can Change
          </h2>

          <div className="mt-6 grid gap-5">
            {boundaryTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.type}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["What changes", item.change],
                    ["Questions", item.questions],
                    ["Controls", item.controls],
                    ["Failure pattern", item.failure],
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
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Approved Flow Review
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Seven Fictional Crossings That Require Explicit Validation
          </h2>

          <div className="mt-6 grid gap-5">
            {flowReview.map((item) => (
              <article
                key={item.flow}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.flow}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.purpose}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Required validation", item.required_validation],
                    ["Allowed data", item.allowed_data],
                    ["Required evidence", item.evidence],
                    ["Deny when", item.deny_when],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.flow}-${label}`}
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
            Professional Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Steps from System Context to Governed Boundaries
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
            Boundary Ownership
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Owners for Identity, Paths, Data, Evidence, Recovery, and Risk
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
          title="Fake Northbridge Trust-Boundary Dashboard"
          subtitle="Fictional zone, flow, identity, evidence, exception, and recovery review for training only."
          metrics={[
            {
              label: "Defined zones",
              value: "7",
              note: "Public, application, data, management, logging, recovery, and supplier zones appear in the approved design.",
            },
            {
              label: "Boundary concerns",
              value: "5",
              note: "Broad privilege, undocumented path, expanded supplier data, evidence gap, and open recovery path require review.",
            },
            {
              label: "Current status",
              value: "Drift",
              note: "The effective fictional architecture does not fully match the approved boundary design.",
            },
          ]}
        />

        <FakeAlertCard
          title="Approved Zone Design Does Not Match Effective Boundary Behavior"
          severity="High"
          time="4:22 PM"
          source="Fake Northbridge Trust Architecture Console"
          details="The fictional public application reaches a management interface through an undocumented path, one support role crosses every major zone, supplier data scope has expanded, management and recovery crossings lack full evidence, and a temporary recovery rule remains active."
          recommendation="Pause approval, validate every crossing, reduce broad privilege, update the flow and data maps, restore boundary evidence, close or govern temporary exceptions, verify recovery closure, and document residual risk."
        />

        <FakeLogPanel
          title="Fake Trust-Boundary Review Timeline"
          logs={[
            "15:00 ZONE public='defined'",
            "15:01 ZONE application='defined'",
            "15:02 ZONE data='defined'",
            "15:03 ZONE management='defined'",
            "15:04 ZONE logging='defined'",
            "15:05 ZONE recovery='defined'",
            "15:06 ZONE supplier='defined'",
            "15:20 FLOW public-app-to-management='observed'",
            "15:21 FLOW approved-diagram='missing'",
            "15:30 IDENTITY support-role='cross-zone-broad'",
            "15:40 SUPPLIER extra-fields='observed'",
            "15:50 LOGGING management-crossing='partial'",
            "15:51 LOGGING recovery-crossing='missing'",
            "16:00 RECOVERY temporary-rule='still-active'",
            "16:10 EXCEPTION owner='missing'",
            "16:22 STATUS architecture-drift='confirmed'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence before Approving Trust Boundaries and Zones
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
          title="Do the Fictional Zones Provide Effective Separation?"
          question="Do the current fictional Northbridge zones provide effective trust separation?"
          evidence={[
            "The approved diagram contains seven distinct zones.",
            "The public application reaches a management interface through an undocumented path.",
            "One support role may access application, data, management, logging, and recovery zones.",
            "A supplier sends additional fields not listed in the approved data flow.",
            "Management and recovery boundary crossings have incomplete evidence coverage.",
            "A temporary recovery rule remains active after restoration.",
            "Four boundary exceptions have no expiration or current owner.",
          ]}
          options={[
            "No. Pause approval, validate every crossing, reduce broad privilege, correct undocumented paths and data scope, restore evidence, close recovery access, govern exceptions, and verify effective state.",
            "Yes, because the diagram contains several colored zones.",
            "Yes, because all systems are internal.",
            "Yes, because the supplier is approved.",
          ]}
          bestAnswer={0}
          explanation="Effective separation depends on explicit identities, purposes, paths, data, controls, evidence, ownership, failure behavior, recovery closure, and validation—not visual zones alone."
        />

        <SectionCard
          eyebrow="Common Boundary Mistakes"
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
          title="Build a Fictional Trust-Boundary and Security-Zone Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Rebuild the Northbridge Trust Model
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                copy, quote, lightly modify, summarize, or reproduce real
                internal diagrams, system names, identities, network paths,
                configurations, credentials, logs, suppliers, exceptions, or
                recovery details.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Fictional system-context and boundary statement.</li>
                <li>Trust-assumption and trust-boundary register.</li>
                <li>Security-zone catalog with purpose, trust, ownership, data, and recovery.</li>
                <li>Approved and denied flow matrix.</li>
                <li>Identity, authorization, network, data, service, administrative, supplier, and recovery boundaries.</li>
                <li>Decision and enforcement-point map.</li>
                <li>Boundary evidence and source-health plan.</li>
                <li>Bypass, zone-collapse, exception, and architecture-drift analysis.</li>
                <li>Failure-state, recovery-closure, and effective-state validation plan.</li>
                <li>Reflection, revision history, and complete fictionalization statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This activity creates a fictional educational design only. It does
            not authorize access, scanning, testing, configuration, change,
            recovery, investigation, or collection involving any real system.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Support Role Crosses Every Zone"
          scenario="A fictional support role can reach application, sensitive data, management, logging, and recovery zones. The access was created for convenience, and review evidence is incomplete."
          choices={[
            {
              label: "Choice A",
              response: "Separate duties, reduce access to task-specific temporary roles, require approval and session evidence, protect logging and recovery independently, and validate effective permissions.",
              outcome: "Best professional choice. The design restores meaningful zone separation without assuming misuse.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Keep the access because the user is trusted.",
              outcome: "Risky. Personal trust does not replace least privilege, separation, approval, and evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Remove every support permission immediately without checking service impact.",
              outcome: "Unsafe. Broad access should be reduced, but changes must preserve critical service and recovery outcomes.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Temporary Recovery Rule Remains Active"
          scenario="After a fictional recovery exercise, systems return to service, but a temporary cross-zone rule and emergency recovery privilege remain active. The original owner is unavailable."
          choices={[
            {
              label: "Choice A",
              response: "Pause closure, identify an authorized replacement owner, validate service health, close the rule and privilege, review evidence, confirm effective state, and document the recovery decision.",
              outcome: "Best professional choice. Recovery is incomplete until temporary trust is removed or formally governed.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Leave the access open in case another recovery is needed.",
              outcome: "Risky. Temporary trust can become a permanent invisible bypass.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Delete the evidence and close the ticket.",
              outcome: "Unsafe. Evidence and owner validation are required for accountable recovery closure.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design a Boundary That Survives Identity and Logging Failure"
        >
          <p className="leading-8">
            Extend the fictional Northbridge design for a failure in which the
            central identity service and logging platform become unreliable at
            the same time. A critical support function must continue in a
            limited safe mode. Design the identity, authorization, path, data,
            evidence, owner, degraded-service, recovery, and closure controls
            needed to preserve the mission without turning every zone into one
            shared trust area.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              [
                "Required architecture",
                "Show fictional alternate identity assurance, narrow roles, approved paths, data limits, independent evidence, owner approval, and expiry.",
              ],
              [
                "Required validation",
                "Explain how the design proves safe degraded service, prevents zone collapse, restores normal trust, and closes all temporary access.",
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
          title="Trust-Boundary and Security-Zone Checklist"
          items={[
            "I can define the fictional mission, system context, users, identities, data, services, suppliers, owners, and dependencies.",
            "I can identify where fictional identity, authority, ownership, sensitivity, network, service, data, or control assumptions change.",
            "I can define fictional zones by purpose, trust posture, ownership, data, access, monitoring, failure, and recovery rather than by color or location alone.",
            "I can document fictional approved and denied flows with actor, action, target, purpose, data, path, owner, and result.",
            "I can separate fictional authentication, authorization, service identity, path approval, data purpose, administration, and recovery decisions.",
            "I can place fictional policy decision, enforcement, evidence, and validation points at meaningful crossings.",
            "I can identify fictional broad privilege, alternate paths, supplier drift, east-west flows, exceptions, and zone-collapse risks.",
            "I can protect fictional management, logging, backup, recovery, and supplier boundaries separately from public and normal service paths.",
            "I can design fictional fail-open, fail-closed, degraded, manual, and recovery behavior without uncontrolled access or unnecessary outage.",
            "I can compare fictional approved diagrams with effective identities, paths, data flows, evidence, and exceptions.",
            "I can govern fictional boundary changes, temporary access, recovery closure, owner review, residual risk, and corrective actions.",
            "I will never use real internal diagrams, network paths, system names, suppliers, identities, configurations, logs, or exceptions in this portfolio.",
          ]}
        />

        <MiniQuiz
          title="A2.3 Mini Quiz: Trust Boundaries and Security Zones"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Trust-Boundary and Security-Zone Package for Northbridge. Include the system context, trust assumptions, boundary register, ten-zone catalog, approved and denied flow matrix, identity and authorization boundaries, network and service boundaries, data and privacy boundaries, administrative and supplier boundaries, logging and recovery boundaries, decision and enforcement points, evidence coverage, source health, bypass and zone-collapse analysis, boundary drift, exceptions, safe degraded mode, recovery closure, effective-state validation, residual risk, reflection, revision history, and a statement that every organization, system, identity, zone, path, data flow, evidence item, exception, decision, date, and outcome is invented."
          tips={[
            "Define each fictional zone by purpose and trust posture rather than location alone.",
            "For every crossing, show actor, action, target, purpose, data, path, owner, evidence, and denial conditions.",
            "Include at least one broad identity or undocumented path that collapses intended separation, then redesign it.",
            "Show how temporary recovery access is approved, monitored, expired, closed, and validated.",
            "Keep every system, identity, diagram, path, supplier, exception, evidence item, decision, and outcome completely invented.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready to Design Network Segmentation Strategy?"
        >
          <p className="leading-8">
            Before moving to A2.4, rate your readiness from 1 to 5 for each area:
            system context, trust assumptions, zone purpose, approved and denied
            flows, identity and authorization boundaries, administrative paths,
            supplier boundaries, evidence, drift, exceptions, recovery closure,
            and effective-state validation.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why a fictional internal network or colored zone does not automatically create trust.",
              "I can identify fictional identity, authorization, network, data, service, administrative, supplier, and recovery boundaries.",
              "I can define fictional zones with purpose, ownership, allowed flows, denied flows, evidence, and recovery behavior.",
              "I can detect fictional broad privilege, undocumented paths, zone collapse, and boundary drift.",
              "I can validate fictional approved intent against effective identities, paths, data, evidence, and exceptions.",
              "I can keep the entire trust-boundary portfolio fully invented and safe to share.",
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
            Record one fictional trust assumption you would challenge, one
            boundary crossing you would validate first, and one segmentation
            decision you will carry into A2.4.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "A trust boundary exists wherever fictional identity, authority, ownership, sensitivity, network, service, data, or control assumptions change.",
            "A meaningful security zone has a defined mission purpose, trust posture, ownership model, identities, data, flows, evidence, failure behavior, and recovery plan.",
            "Internal location, network membership, successful authentication, or supplier approval does not create unlimited trust.",
            "Every fictional crossing should define actor, action, target, purpose, data, path, owner, decision, result, evidence, and denial conditions.",
            "Administrative, logging, backup, recovery, supplier, and control-plane paths need separate protection from normal user and service traffic.",
            "Broad privilege and undocumented alternate paths can collapse several fictional zones into one effective trust area.",
            "Approved diagrams must be compared with effective identities, flows, data use, controls, evidence, exceptions, and recovery behavior.",
            "Temporary boundary exceptions require purpose, owner, scope, monitoring, expiration, validation, and closure.",
            "Recovery is incomplete until temporary paths and privileges are closed or formally governed and effective state is validated.",
            "Every CyberShield trust-boundary artifact must remain fully fictional, defensive, non-operational, privacy-safe, and incapable of exposing real systems.",
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