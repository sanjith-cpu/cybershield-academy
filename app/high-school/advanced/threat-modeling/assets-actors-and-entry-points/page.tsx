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
const modulePath = `${trackPath}/threat-modeling`;
const previousLesson = `${modulePath}/why-threat-modeling-exists`;
const nextLesson = `${modulePath}/data-flows-and-trust-boundaries`;

const objectives = [
  "Classify fictional assets by mission value, data sensitivity, identity authority, service dependency, privacy impact, operational importance, trust, safety, evidence, and recovery needs.",
  "Distinguish fictional actors by role, relationship, identity type, authority, lifecycle, origin, trust basis, expected behavior, and accountability without making unsupported claims about intent.",
  "Identify and document approved fictional entry points through which requests, identities, data, files, messages, administrative actions, recovery actions, or supplier interactions enter a system.",
  "Connect fictional assets, actors, and entry points to owners, business purpose, control expectations, evidence sources, assumptions, unknowns, and review triggers.",
  "Create a portfolio-ready fictional Asset–Actor–Entry Point Register that remains ethical, defensive, non-operational, privacy-safe, and completely invented."
];

const vocabulary = [
  [
    "Asset",
    "A fictional item, capability, outcome, relationship, or condition with value that requires protection from loss of confidentiality, integrity, availability, privacy, safety, trust, accountability, or recoverability."
  ],
  [
    "Mission asset",
    "A fictional service outcome, critical function, decision, workflow, or public responsibility that the organization must perform reliably."
  ],
  [
    "Data asset",
    "A fictional record, message, document, event, metadata set, model output, configuration, report, or derived information that has business, privacy, legal, operational, or security value."
  ],
  [
    "Identity asset",
    "A fictional account, role, credential relationship, trust assertion, authorization state, recovery process, or identity lifecycle record that controls who or what may act."
  ],
  [
    "Service asset",
    "A fictional application, API, queue, storage service, identity provider, notification service, processing function, archive, backup, or dependency required to deliver an outcome."
  ],
  [
    "Operational asset",
    "A fictional procedure, staffing capability, support workflow, monitoring practice, recovery process, supplier relationship, or knowledge base needed to operate safely."
  ],
  [
    "Trust asset",
    "A fictional relationship, reputation, assurance, approval, evidence trail, or user expectation whose loss could damage confidence or decision quality."
  ],
  [
    "Evidence asset",
    "A fictional log, record, timestamp, approval, ticket, event history, change record, alert, health signal, or audit trail needed to explain or validate activity."
  ],
  [
    "Actor",
    "A fictional human, service, workload, device, supplier, automation, administrator, reviewer, support role, emergency role, or unknown party that interacts with the system."
  ],
  [
    "Human actor",
    "A fictional person or role such as a student, counselor, support analyst, administrator, reviewer, supplier operator, or approver."
  ],
  [
    "Non-human actor",
    "A fictional service, workload, device, process, scheduled task, integration, automation, or system identity that sends requests or performs actions."
  ],
  [
    "Actor relationship",
    "The fictional basis for interaction, such as employee, student, customer, supplier, service dependency, administrator, auditor, temporary worker, or unknown external party."
  ],
  [
    "Authority",
    "The fictional set of actions an actor is permitted to perform, including limits, conditions, purpose, duration, approval, and evidence requirements."
  ],
  [
    "Entry point",
    "An approved fictional interface through which a request, identity, file, message, data item, administrative action, recovery action, or supplier interaction enters a system."
  ],
  [
    "Interface owner",
    "The fictional role accountable for the purpose, configuration, validation, monitoring, lifecycle, and risk decisions associated with an entry point."
  ],
  [
    "Expected behavior",
    "The fictional actions, volumes, timing, data types, sources, destinations, approvals, and outcomes considered normal for an actor using an entry point."
  ],
  [
    "Exposure",
    "The fictional degree to which an asset, actor relationship, or entry point is reachable, discoverable, shared, privileged, externally dependent, or difficult to monitor."
  ],
  [
    "Inventory evidence",
    "The fictional records used to support asset, actor, and entry-point claims, such as approved diagrams, role maps, service catalogs, data inventories, tickets, owner interviews, and interface lists."
  ],
  [
    "Orphaned asset",
    "A fictional asset that lacks a confirmed owner, purpose, classification, lifecycle decision, recovery requirement, or evidence source."
  ],
  [
    "Unowned entry point",
    "A fictional interface that exists in the model but lacks an accountable owner for validation, authorization, monitoring, change, and retirement."
  ]
];

const assetClasses = [
  {
    category: "Mission and outcome assets",
    examples:
      "Fictional student-support availability, accurate case status, approved counselor decisions, timely notification, fair access, and successful recovery.",
    questions:
      "Which outcome must continue? What harm occurs if it is unavailable, incorrect, delayed, private information is exposed, or users cannot trust it?",
    owner:
      "Mission owner, service owner, program leader, or accountable executive.",
    evidence:
      "Service objectives, business-impact notes, user journeys, continuity requirements, approved policies, and stakeholder decisions.",
    commonGap:
      "Teams inventory servers and databases but fail to record the outcome those technologies exist to protect."
  },
  {
    category: "Data and information assets",
    examples:
      "Fictional uploaded documents, case records, status events, notification preferences, identity attributes, audit records, reports, and derived analytics.",
    questions:
      "Why is each field needed? Who may use it? Where does it flow? How long is it retained? What accuracy, privacy, integrity, and deletion requirements apply?",
    owner:
      "Data owner, privacy owner, records owner, application owner, or business process owner.",
    evidence:
      "Data inventories, field-purpose records, classification notes, retention schedules, privacy reviews, and approved sharing decisions.",
    commonGap:
      "A database name is listed, but the model does not distinguish data purpose, sensitivity, derived information, metadata, copies, or lifecycle."
  },
  {
    category: "Identity and authority assets",
    examples:
      "Fictional student accounts, counselor roles, support privileges, service identities, supplier identities, approval states, reset processes, and access-review evidence.",
    questions:
      "Who or what may act? Under which role, condition, purpose, duration, device, location, approval, and evidence requirements?",
    owner:
      "Identity owner, application owner, role owner, privileged-access owner, or business approver.",
    evidence:
      "Role definitions, access policies, lifecycle records, approval tickets, access reviews, authentication logs, and ownership decisions.",
    commonGap:
      "Accounts are treated only as credentials instead of assets that represent authority, trust, accountability, and recovery."
  },
  {
    category: "Service and technology assets",
    examples:
      "Fictional portal, identity provider, validation service, processing supplier, notification service, storage, archive, monitoring, queue, backup, and recovery platform.",
    questions:
      "Which function does the service provide? What depends on it? Which state, availability, integrity, identity, configuration, and evidence must be protected?",
    owner:
      "System owner, platform owner, service owner, cloud owner, supplier owner, or operations owner.",
    evidence:
      "Service catalogs, architecture views, dependency maps, support records, availability targets, configuration standards, and recovery exercises.",
    commonGap:
      "A component is listed without its mission purpose, dependencies, failure behavior, owner, or replacement and retirement plan."
  },
  {
    category: "Operational and process assets",
    examples:
      "Fictional account recovery, case review, document reprocessing, incident communication, shift handoff, supplier escalation, backup restoration, and change approval.",
    questions:
      "Which people, steps, approvals, records, timing, fallback paths, and knowledge are required for the process to work safely?",
    owner:
      "Process owner, operations manager, service desk owner, incident owner, recovery owner, or supplier manager.",
    evidence:
      "Runbooks, tickets, process maps, exercise results, staffing plans, handoff records, and approval histories.",
    commonGap:
      "The technical system is modeled while manual workarounds, support privileges, emergency steps, and communication dependencies remain invisible."
  },
  {
    category: "Evidence and accountability assets",
    examples:
      "Fictional authentication events, administrative action records, source-health signals, approval history, notification changes, deletion records, recovery evidence, and case notes.",
    questions:
      "Which defender question must the evidence answer? Is actor, target, action, reason, result, source health, and time context available and trustworthy?",
    owner:
      "Security operations owner, application owner, audit owner, identity owner, data owner, or process owner.",
    evidence:
      "Logging requirements, event schemas, source-health dashboards, retention decisions, review procedures, and test results.",
    commonGap:
      "Logs are assumed to exist, but their completeness, meaning, reliability, ownership, privacy, and review value are not modeled."
  },
  {
    category: "Privacy, safety, and trust assets",
    examples:
      "Fictional user expectations, confidentiality, consent records, appropriate data use, safe communications, equitable service, reputation, and responsible decision-making.",
    questions:
      "Which harms affect people even if the system remains technically available? Which expectations, rights, relationships, or safety outcomes require protection?",
    owner:
      "Privacy owner, safety owner, legal or policy owner, communications owner, mission owner, or leadership.",
    evidence:
      "Privacy assessments, user expectations, consent and notice records, policy decisions, complaint themes, and stakeholder review.",
    commonGap:
      "Technical availability is treated as success even when privacy, communication, fairness, safety, or trust outcomes fail."
  },
  {
    category: "Recovery and resilience assets",
    examples:
      "Fictional backups, restoration procedures, recovery identities, configuration baselines, contact trees, alternate workflows, dependency recovery order, and validation records.",
    questions:
      "What must be restored, in which order, by whom, using which trusted evidence, within which target, and how will safe operation be validated?",
    owner:
      "Recovery owner, system owner, operations owner, data owner, identity owner, supplier manager, or mission owner.",
    evidence:
      "Backup inventories, restore tests, recovery plans, exercise results, dependency maps, recovery approvals, and post-restoration validation.",
    commonGap:
      "Backups are listed as assets, but restoration authority, dependencies, integrity checks, communication, and usable business state are not."
  }
];

const actorClasses = [
  {
    type: "End users",
    fictionalExamples:
      "Students submitting records, guardians reviewing status, counselors evaluating cases, and approved staff viewing assigned work.",
    expected:
      "Use approved interfaces for assigned purposes with appropriate identity proof, session controls, data limits, and support paths.",
    authorityQuestions:
      "Which records can each role view, submit, update, withdraw, or appeal? Does access depend on assignment, status, age, consent, or case ownership?",
    lifecycle:
      "Enrollment, role change, inactivity, graduation, transfer, revocation, and recovery.",
    evidence:
      "Approved role definitions, access policies, assignment records, session events, access reviews, and user-support records."
  },
  {
    type: "Administrators and privileged operators",
    fictionalExamples:
      "Platform administrators, identity administrators, application operators, database operators, and recovery administrators.",
    expected:
      "Perform approved administrative actions through controlled interfaces with limited scope, strong identity, justification, review, and evidence.",
    authorityQuestions:
      "Which privileged action is necessary? Is approval required? Can duties be separated? What emergency path exists? Which evidence supports review?",
    lifecycle:
      "Appointment, training, approval, time-bound assignment, periodic review, emergency elevation, role change, and removal.",
    evidence:
      "Privileged-role records, approvals, administrative events, change tickets, review logs, and emergency-access records."
  },
  {
    type: "Support and service-desk actors",
    fictionalExamples:
      "Account-recovery staff, case-status support, notification support, document-reprocessing support, and escalation coordinators.",
    expected:
      "Resolve approved user problems without receiving more data or authority than the support purpose requires.",
    authorityQuestions:
      "Can support reset identity, view sensitive fields, change notification settings, reprocess records, or alter case state? Which approvals and evidence are required?",
    lifecycle:
      "Hiring, team assignment, training, shift change, temporary coverage, role change, and removal.",
    evidence:
      "Support role maps, tickets, approval records, administrative action events, quality review, and access recertification."
  },
  {
    type: "Service and workload identities",
    fictionalExamples:
      "Portal service identity, document-processing workload, notification sender, archival job, monitoring collector, and backup coordinator.",
    expected:
      "Perform a narrow machine-to-machine function using only required permissions, approved destinations, defined timing, and monitored behavior.",
    authorityQuestions:
      "Which resource, operation, data field, environment, destination, and schedule are necessary? Can the identity act interactively or outside its intended workflow?",
    lifecycle:
      "Provisioning, deployment, rotation, ownership change, environment separation, suspension, replacement, and retirement.",
    evidence:
      "Service-identity inventory, ownership, permission records, deployment manifests, activity events, and rotation history."
  },
  {
    type: "Devices and managed endpoints",
    fictionalExamples:
      "Managed counselor laptop, student browser session, approved kiosk, administrative workstation, mobile device, and monitoring collector.",
    expected:
      "Connect through approved channels under defined device state, ownership, management, and session conditions.",
    authorityQuestions:
      "Does device health affect access? Is the endpoint shared, managed, temporary, remote, or privileged? Which actions require stronger conditions?",
    lifecycle:
      "Enrollment, assignment, health change, loss, repair, ownership transfer, retirement, and secure disposal.",
    evidence:
      "Device inventory, management status, health signals, assignment records, access events, and loss or retirement records."
  },
  {
    type: "Suppliers and external organizations",
    fictionalExamples:
      "Document-processing supplier, notification provider, identity federation partner, archival service, and support subcontractor.",
    expected:
      "Exchange only approved data and actions for a documented purpose under defined ownership, validation, monitoring, resilience, and exit conditions.",
    authorityQuestions:
      "Which supplier identity or service may access what? Which fields are necessary? Who approves changes? What happens during failure, compromise, contract change, or termination?",
    lifecycle:
      "Selection, due diligence, onboarding, integration change, periodic review, incident handling, contract change, and offboarding.",
    evidence:
      "Approved data fields, interface records, ownership decisions, supplier reviews, service evidence, change history, and exit plans."
  },
  {
    type: "Automation and scheduled processes",
    fictionalExamples:
      "Case-routing automation, archival scheduler, reminder generator, duplicate-submission detector, and access-review workflow.",
    expected:
      "Apply documented rules with controlled inputs, bounded authority, reviewable outcomes, failure handling, and human escalation.",
    authorityQuestions:
      "Which decisions may be automated? What data is used? What happens when confidence is low? Can a human review, pause, reverse, or correct the outcome?",
    lifecycle:
      "Design, approval, testing with fake data, release, rule change, monitoring, exception handling, and retirement.",
    evidence:
      "Rule definitions, approvals, test results, version history, outcome metrics, exception records, and human-review events."
  },
  {
    type: "Reviewers, auditors, and governance actors",
    fictionalExamples:
      "Privacy reviewer, security reviewer, risk owner, compliance reviewer, architecture board, and leadership approver.",
    expected:
      "Review supplied evidence and decisions without receiving operational access beyond the approved review purpose.",
    authorityQuestions:
      "Can the reviewer approve, reject, request evidence, grant exceptions, or accept residual risk? Which decisions require separation or escalation?",
    lifecycle:
      "Appointment, conflict review, assignment, evidence access, decision, recusal, and retention of review records.",
    evidence:
      "Review charters, decision records, evidence requests, approvals, exceptions, risk acceptance, and conflict disclosures."
  },
  {
    type: "Unknown or unverified actors",
    fictionalExamples:
      "Unattributed external requests, stale service identities, unidentified devices, missing supplier ownership, and activity with incomplete actor context.",
    expected:
      "No trusted behavior should be assumed until identity, relationship, purpose, authority, and evidence are established.",
    authorityQuestions:
      "What is known? What remains unknown? Which interface accepted the request? Which control and evidence should limit or clarify activity?",
    lifecycle:
      "Observation, classification, owner assignment, validation, restriction, escalation, resolution, or continued monitoring.",
    evidence:
      "Request context, identity signals, interface events, source health, ownership records, tickets, and review conclusions."
  }
];

const entryPointClasses = [
  {
    interface: "Public user interface",
    fictionalPurpose:
      "Allow students and guardians to submit approved information, review status, manage notification preferences, and request help.",
    incoming:
      "Authenticated sessions, forms, files, status requests, preference changes, and support requests.",
    assetConnection:
      "Student records, account authority, case status, privacy expectations, notification settings, and service availability.",
    actorConnection:
      "Students, guardians, counselors using delegated views, support actors, and approved browser or device sessions.",
    expectedControls:
      "Identity proof, authorization, safe input handling, file policy, session protection, rate and workflow controls, privacy notices, evidence, and recovery.",
    evidenceNeeds:
      "Actor, session, action, target, result, validation outcome, preference change, source health, and support correlation.",
    owner:
      "Application owner with identity, privacy, data, support, and operations partners."
  },
  {
    interface: "Administrative console",
    fictionalPurpose:
      "Support approved configuration, user support, workflow management, evidence review, and service operations.",
    incoming:
      "Privileged sessions, configuration changes, account actions, recovery actions, approvals, and maintenance requests.",
    assetConnection:
      "Privileged authority, system configuration, user accounts, case workflow, logs, recovery state, and trust.",
    actorConnection:
      "Approved administrators, support roles, recovery operators, reviewers, and emergency roles.",
    expectedControls:
      "Strong identity, least privilege, separation of duties, approval, reason capture, session protection, change control, monitoring, and review.",
    evidenceNeeds:
      "Named actor, role, action, target, before-and-after state, reason, approval, result, source health, and ticket reference.",
    owner:
      "Platform or application owner with identity, security operations, change, and recovery owners."
  },
  {
    interface: "Application programming interface",
    fictionalPurpose:
      "Exchange approved requests and responses between the portal, internal services, and fictional external dependencies.",
    incoming:
      "Service requests, identity assertions, case updates, status messages, document results, and health signals.",
    assetConnection:
      "Service availability, data integrity, identity trust, workflow state, supplier relationships, and evidence.",
    actorConnection:
      "Service identities, workloads, supplier integrations, monitoring services, and approved automation.",
    expectedControls:
      "Strong service identity, authorization, schema validation, data minimization, destination restriction, replay and error handling, monitoring, and version governance.",
    evidenceNeeds:
      "Calling identity, interface version, operation, object, validation result, response status, timing, destination, source health, and correlation identifier.",
    owner:
      "Service owner and integration owner with data, identity, supplier, and operations partners."
  },
  {
    interface: "File upload or import channel",
    fictionalPurpose:
      "Receive approved documents or batch records for a defined fictional business process.",
    incoming:
      "User-submitted files, approved batch imports, metadata, processing instructions, and validation results.",
    assetConnection:
      "Submitted records, privacy, processing integrity, storage, workflow state, user trust, and recovery.",
    actorConnection:
      "End users, authorized staff, approved suppliers, batch automation, validation service, and processing service.",
    expectedControls:
      "File policy, content and metadata validation, size and type limits, quarantine or review workflow, data minimization, storage controls, evidence, and safe failure handling.",
    evidenceNeeds:
      "Submitting actor, channel, declared type, validation outcome, processing state, storage reference, result, and user communication.",
    owner:
      "Application and data owner with privacy, processing, storage, and support owners."
  },
  {
    interface: "Message or queue channel",
    fictionalPurpose:
      "Move approved asynchronous events such as case updates, notifications, processing requests, and recovery tasks.",
    incoming:
      "Structured events, status changes, retry requests, acknowledgments, and dead-letter or exception records.",
    assetConnection:
      "Workflow integrity, event ordering, availability, notification accuracy, evidence, and recoverability.",
    actorConnection:
      "Portal service, processing service, notification service, archival workflow, recovery automation, and monitoring.",
    expectedControls:
      "Service identity, schema validation, destination policy, ordering and duplicate handling, bounded retries, failure isolation, source health, and monitoring.",
    evidenceNeeds:
      "Producer identity, event type, object reference, creation time, processing status, retry count, destination, failure reason, and correlation.",
    owner:
      "Integration or platform owner with application, operations, recovery, and security owners."
  },
  {
    interface: "Supplier integration",
    fictionalPurpose:
      "Exchange the minimum approved data and status needed for a documented external service.",
    incoming:
      "Approved requests, processing results, status updates, error information, health signals, and support communication.",
    assetConnection:
      "Data privacy, service availability, processing integrity, supplier trust, contractual expectations, recovery, and exit capability.",
    actorConnection:
      "Supplier service identities, supplier operators, internal service identities, integration owners, and incident contacts.",
    expectedControls:
      "Data minimization, strong identity, authorization, validation, monitoring, contract and ownership controls, failure handling, resilience, and offboarding.",
    evidenceNeeds:
      "Supplier identity, approved operation, data fields, result, timing, health, exception, owner, and contract or change reference.",
    owner:
      "Supplier manager and service owner with data, privacy, identity, legal or policy, operations, and recovery partners."
  },
  {
    interface: "Identity and federation interface",
    fictionalPurpose:
      "Authenticate fictional users and services or receive approved identity assertions and lifecycle updates.",
    incoming:
      "Authentication requests, assertions, role or group attributes, session context, lifecycle events, and recovery actions.",
    assetConnection:
      "Identity trust, authorization, account lifecycle, session integrity, privacy, evidence, and recovery.",
    actorConnection:
      "End users, administrators, service identities, identity provider, federation partner, and recovery operators.",
    expectedControls:
      "Approved trust relationship, strong identity, limited attributes, assertion validation, lifecycle synchronization, session controls, monitoring, and recovery governance.",
    evidenceNeeds:
      "Identity, assertion source, authentication result, attributes used, policy decision, session state, lifecycle event, and failure reason.",
    owner:
      "Identity owner with application, privacy, role, support, and security operations owners."
  },
  {
    interface: "Monitoring and evidence ingestion",
    fictionalPurpose:
      "Receive approved operational, security, identity, application, and source-health records for defensive visibility.",
    incoming:
      "Events, alerts, metrics, health signals, configuration state, approval records, and incident notes.",
    assetConnection:
      "Evidence integrity, accountability, detection, triage, investigation quality, privacy, retention, and compliance.",
    actorConnection:
      "Applications, services, devices, identity systems, collectors, analysts, case-management services, and governance reviewers.",
    expectedControls:
      "Source identity, schema and time normalization, integrity, access control, privacy limits, retention, source-health monitoring, failure handling, and review.",
    evidenceNeeds:
      "Source, event type, timestamp quality, ingestion state, parsing result, health, retention decision, access, and downstream correlation.",
    owner:
      "Security operations or monitoring owner with source-system, privacy, data, and platform owners."
  },
  {
    interface: "Recovery and emergency interface",
    fictionalPurpose:
      "Support approved restoration, emergency access, failover, communication, and validation during disruption.",
    incoming:
      "Recovery approvals, restore requests, emergency identity elevation, configuration baselines, backup data, validation results, and stakeholder updates.",
    assetConnection:
      "Backups, recovery identities, configuration integrity, service availability, business state, communication, and trust.",
    actorConnection:
      "Recovery operators, incident leads, system owners, identity owners, supplier contacts, mission owners, and approvers.",
    expectedControls:
      "Documented trigger, approval, strong identity, time limits, separation, trusted baselines, integrity checks, evidence, communication, and post-event review.",
    evidenceNeeds:
      "Trigger, approving actor, recovery identity, action, target, source artifact, validation result, time, business state, and closure review.",
    owner:
      "Recovery owner with incident, system, identity, data, supplier, communications, and mission owners."
  }
];

const relationshipQuestions = [
  {
    question: "What value is involved?",
    assetView:
      "Name the fictional mission, data, identity, service, process, evidence, privacy, safety, trust, or recovery asset.",
    actorView:
      "Identify which fictional human or non-human role interacts with that value.",
    entryView:
      "Identify the approved fictional interface through which the interaction occurs.",
    evidence:
      "Asset register, owner decision, workflow map, service catalog, data inventory, or identity record."
  },
  {
    question: "Why is the interaction necessary?",
    assetView:
      "Describe the business, service, user, privacy, support, monitoring, or recovery purpose.",
    actorView:
      "Describe the actor's approved responsibility and expected behavior.",
    entryView:
      "Describe why this interface exists and which operations it supports.",
    evidence:
      "Approved requirement, process design, role definition, support need, integration decision, or recovery plan."
  },
  {
    question: "What authority is required?",
    assetView:
      "State which action affects the asset and what harm incorrect authority could create.",
    actorView:
      "State role, permission, scope, condition, duration, approval, and separation needs.",
    entryView:
      "State which operations the interface accepts and which should be denied or escalated.",
    evidence:
      "Access policy, role matrix, approval, service permission, interface contract, or change record."
  },
  {
    question: "What is expected behavior?",
    assetView:
      "Define expected use, update, access, retention, recovery, and evidence patterns.",
    actorView:
      "Define normal timing, volume, source, destination, workflow, reason, and outcome.",
    entryView:
      "Define expected request types, fields, sizes, states, rates, versions, errors, and destinations.",
    evidence:
      "Baseline, workflow record, event history, service objective, support data, or owner statement."
  },
  {
    question: "What could change trust?",
    assetView:
      "Consider sensitivity, classification, ownership, environment, state, retention, or recovery stage.",
    actorView:
      "Consider role change, supplier change, device state, location, lifecycle, conflict, emergency, or unknown identity.",
    entryView:
      "Consider external-to-internal transfer, user-to-admin transition, public-to-private zone, supplier boundary, or recovery path.",
    evidence:
      "Data classification, identity context, device health, architecture view, supplier record, or recovery event."
  },
  {
    question: "How will activity be validated?",
    assetView:
      "Define which integrity, confidentiality, availability, privacy, and business-state checks matter.",
    actorView:
      "Define identity, authority, reason, approval, and accountability checks.",
    entryView:
      "Define validation, authorization, monitoring, source-health, error, and safe failure expectations.",
    evidence:
      "Validation result, policy decision, event schema, approval record, source-health signal, or test evidence."
  },
  {
    question: "Who owns the decision?",
    assetView:
      "Assign a fictional owner for value, classification, use, recovery, and residual risk.",
    actorView:
      "Assign a role owner for authority, lifecycle, review, conflict, and removal.",
    entryView:
      "Assign an interface owner for purpose, configuration, monitoring, change, and retirement.",
    evidence:
      "Ownership register, RACI-style decision map, approval record, service catalog, or governance charter."
  },
  {
    question: "When must the model be reviewed?",
    assetView:
      "Review when value, use, sensitivity, retention, criticality, owner, or recovery requirement changes.",
    actorView:
      "Review when role, relationship, authority, device, location, supplier, lifecycle, or expected behavior changes.",
    entryView:
      "Review when interface purpose, version, data, destination, exposure, ownership, control, failure, or retirement changes.",
    evidence:
      "Change record, access review, supplier update, architecture revision, incident lesson, recovery exercise, or scheduled review."
  }
];

const criticalityFactors = [
  {
    factor: "Mission dependence",
    strongQuestion:
      "How directly does the fictional service outcome depend on the asset, actor relationship, or entry point?",
    evidence:
      "Business impact, user journey, process map, service objective, and owner decision.",
    warning:
      "Do not rank a component highly only because it sounds technical."
  },
  {
    factor: "Confidentiality and privacy",
    strongQuestion:
      "Could inappropriate disclosure, collection, inference, sharing, retention, or use harm fictional people or the organization?",
    evidence:
      "Data classification, purpose, field inventory, privacy review, sharing decision, and retention plan.",
    warning:
      "Metadata, derived data, support notes, and evidence can be sensitive even when primary records are protected."
  },
  {
    factor: "Integrity and decision quality",
    strongQuestion:
      "Could incorrect, incomplete, duplicated, delayed, reordered, or unauthorized changes affect decisions or workflow outcomes?",
    evidence:
      "Workflow state, validation rules, approval history, reconciliation, and business-state checks.",
    warning:
      "Technical processing success does not automatically prove correct business outcome."
  },
  {
    factor: "Availability and timing",
    strongQuestion:
      "What happens if the asset, actor relationship, or entry point is unavailable, slow, isolated, or degraded?",
    evidence:
      "Service targets, dependency map, queue behavior, support impact, recovery exercise, and alternate process.",
    warning:
      "Availability includes timely communication and usable workflow state, not only server response."
  },
  {
    factor: "Authority and privilege",
    strongQuestion:
      "How much fictional power does the actor or interface have, and can that power be limited, separated, monitored, reviewed, and recovered?",
    evidence:
      "Role matrix, permission evidence, approvals, privileged events, access review, and emergency records.",
    warning:
      "A support function can be critical even when it is not labeled administrator."
  },
  {
    factor: "Dependency concentration",
    strongQuestion:
      "How many fictional services, workflows, or recovery steps depend on the same asset, actor, supplier, identity, or interface?",
    evidence:
      "Dependency map, service catalog, supplier record, failover design, and recovery order.",
    warning:
      "A small shared service can create broad impact if many paths depend on it."
  },
  {
    factor: "Detectability and evidence",
    strongQuestion:
      "Could defenders reliably observe expected and unexpected use, denied actions, failure, source health, and business outcome?",
    evidence:
      "Logging requirements, event samples, dashboards, source-health records, alert reviews, and retention.",
    warning:
      "An entry point without useful evidence may create higher uncertainty than its apparent exposure suggests."
  },
  {
    factor: "Recoverability",
    strongQuestion:
      "Can fictional data, authority, configuration, service, workflow, and trust be restored and validated within acceptable time?",
    evidence:
      "Backup inventory, restore test, identity recovery, configuration baseline, communication plan, and exercise result.",
    warning:
      "A backup does not prove recovery of correct business state, identity, communication, or dependencies."
  }
];

const evidenceMatrix = [
  {
    id: "AAE-01",
    source: "Fictional service catalog",
    observation:
      "The student-support portal depends on identity, document validation, processing, notification, storage, monitoring, archive, and recovery services.",
    supports:
      "The model contains multiple service, identity, data, evidence, and recovery assets with shared dependencies.",
    limits:
      "The catalog does not prove current ownership, effective permissions, actual data flows, control operation, or recovery readiness.",
    use:
      "Create initial service assets, dependency questions, owner assignments, and evidence requests."
  },
  {
    id: "AAE-02",
    source: "Fictional role matrix",
    observation:
      "A support role can reset accounts, view case status, change notification settings, and initiate document reprocessing.",
    supports:
      "The support actor has concentrated authority across identity, privacy, workflow, and communication assets.",
    limits:
      "The matrix does not prove that every listed permission is effective, necessary, approved, used, or monitored.",
    use:
      "Open least-privilege, separation, approval, lifecycle, evidence, and recovery questions."
  },
  {
    id: "AAE-03",
    source: "Fictional interface inventory",
    observation:
      "The portal lists public web, administrative console, supplier API, upload, queue, identity, monitoring, and recovery interfaces.",
    supports:
      "The system has several distinct entry-point classes with different actors, data, authority, and evidence needs.",
    limits:
      "The inventory does not prove that undocumented, deprecated, test, temporary, or emergency interfaces are absent.",
    use:
      "Assign owners, purpose, accepted operations, validation, monitoring, change, and retirement requirements."
  },
  {
    id: "AAE-04",
    source: "Fictional data-field review",
    observation:
      "The processing supplier receives case reference, document category, processing status, and a free-text support note.",
    supports:
      "The supplier interface affects data, privacy, workflow, and trust assets and may receive more context than its primary purpose requires.",
    limits:
      "The review does not prove whether the free-text note is currently sent in every request or whether an approved exception exists.",
    use:
      "Ask the data owner to validate necessity, classification, minimization, retention, and supplier use."
  },
  {
    id: "AAE-05",
    source: "Fictional identity event summary",
    observation:
      "A service identity used by the archival workflow is active, but the inventory owner field is blank and the last review date has passed.",
    supports:
      "The actor lifecycle and ownership evidence are incomplete for an identity connected to retention and recovery assets.",
    limits:
      "The summary does not prove misuse, compromise, excessive permission, or incorrect configuration.",
    use:
      "Assign an owner, validate purpose and authority, review activity and dependencies, and define lifecycle action."
  },
  {
    id: "AAE-06",
    source: "Fictional support ticket analysis",
    observation:
      "Notification changes can be performed through the support console, but several tickets lack a recorded reason and user confirmation.",
    supports:
      "The support actor, administrative entry point, notification asset, and accountability evidence are not consistently connected.",
    limits:
      "Missing ticket fields do not prove that the changes were unauthorized or harmful.",
    use:
      "Improve reason capture, approval or confirmation, event correlation, quality review, and support-role design."
  },
  {
    id: "AAE-07",
    source: "Fictional recovery exercise",
    observation:
      "The portal was restored, but the notification service and archival scheduler used stale service-identity references during validation.",
    supports:
      "Recovery depends on current non-human actors, entry-point configuration, ownership, and trusted baselines.",
    limits:
      "One exercise does not prove the frequency or full production impact of future recovery failures.",
    use:
      "Add recovery identities and interfaces to the register and connect them to owner, dependency, evidence, and review triggers."
  },
  {
    id: "AAE-08",
    source: "Fictional architecture review note",
    observation:
      "A temporary batch-import channel was created for migration testing and remains listed as enabled, but its current purpose and owner are unclear.",
    supports:
      "A potentially stale entry point lacks confirmed purpose, owner, lifecycle, and retirement evidence.",
    limits:
      "The note does not prove the interface is externally reachable, actively used, unsafe, or unnecessary.",
    use:
      "Validate status, purpose, accepted operations, exposure, controls, activity, owner, and retirement decision without testing a real system."
  }
];

const inventoryQuality = [
  {
    level: "Weak inventory statement",
    example:
      "Database, admins, website, API.",
    problem:
      "The statement does not identify value, purpose, ownership, authority, data, lifecycle, expected behavior, evidence, or relationship.",
    improvement:
      "Record specific fictional assets, actor roles, approved interfaces, business purpose, owners, evidence, assumptions, and review triggers."
  },
  {
    level: "Improved asset statement",
    example:
      "Case-status integrity is a mission and data asset owned by the student-services program because counselors and users depend on accurate workflow state.",
    problem:
      "Criticality, recovery, evidence, and actor relationships may still require more detail.",
    improvement:
      "Add impact, classification, dependencies, recovery target, evidence source, and connected actors and entry points."
  },
  {
    level: "Improved actor statement",
    example:
      "The fictional support analyst role may view assigned case status and initiate a verified notification correction through the support console.",
    problem:
      "The statement still requires lifecycle, approval, evidence, volume, exception, and separation details.",
    improvement:
      "Add exact authority, conditions, owner, training, review cadence, reason capture, and emergency limitations."
  },
  {
    level: "Improved entry-point statement",
    example:
      "The supplier-status API accepts approved case-reference and processing-result messages from one managed supplier service identity.",
    problem:
      "The statement still requires schema, destination, data-minimization, failure, monitoring, version, and retirement details.",
    improvement:
      "Add owner, accepted operations, validation, evidence, source health, recovery, change, and offboarding requirements."
  },
  {
    level: "Decision-ready relationship",
    example:
      "The fictional supplier service identity submits minimized processing results through the versioned supplier-status API to update the case-status asset; the service owner and data owner approve fields, the identity owner approves authority, and operations monitors validation, health, and failed updates.",
    problem:
      "The relationship remains a model and requires validation against supplied fictional evidence.",
    improvement:
      "Record assumptions, evidence sources, confidence, unresolved questions, review trigger, and residual risk owner."
  }
];

const commonMistakes = [
  {
    mistake: "Treating technology as the only asset",
    why:
      "Mission outcomes, identity authority, workflow state, evidence, privacy, trust, operational knowledge, supplier relationships, and recovery capability may be more important than a named component.",
    correction:
      "Use a multi-class asset inventory and connect every technology asset to the outcome it supports."
  },
  {
    mistake: "Assuming actor intent",
    why:
      "A role, external source, failed request, unusual time, or unknown identity does not prove malicious intent.",
    correction:
      "Document identity, relationship, authority, expected behavior, evidence, uncertainty, and review needs without unsupported attribution."
  },
  {
    mistake: "Listing people instead of roles",
    why:
      "Real names create privacy problems and become stale, while threat models need stable responsibilities, authority, lifecycle, and accountability.",
    correction:
      "Use invented role names and document purpose, permissions, conditions, owner, and lifecycle."
  },
  {
    mistake: "Ignoring non-human actors",
    why:
      "Services, workloads, devices, suppliers, queues, schedulers, automation, collectors, and recovery processes can possess authority and create dependencies.",
    correction:
      "Inventory human and non-human actors with ownership, permissions, expected behavior, evidence, and retirement."
  },
  {
    mistake: "Calling every connection an entry point",
    why:
      "A useful entry-point inventory distinguishes approved interfaces by purpose, accepted operations, actors, assets, ownership, controls, evidence, and lifecycle.",
    correction:
      "Document interfaces at a level that supports defensive decisions without exposing operational real-system detail."
  },
  {
    mistake: "Assuming documented means active or complete",
    why:
      "An inventory may contain stale, planned, temporary, duplicate, test, deprecated, or missing entries.",
    correction:
      "Record evidence date, owner confirmation, confidence, unknowns, and review trigger."
  },
  {
    mistake: "Combining asset owner, system owner, and risk owner",
    why:
      "Different fictional roles may own value, technology, data, identity, operations, supplier relationships, and residual-risk decisions.",
    correction:
      "Separate ownership and decision rights instead of assigning every responsibility to one technical owner."
  },
  {
    mistake: "Ranking before understanding relationships",
    why:
      "Criticality and exposure depend on which actors use which entry points to affect which assets under which conditions.",
    correction:
      "Build the relationship register before applying impact and likelihood labels."
  },
  {
    mistake: "Missing support and recovery paths",
    why:
      "Account reset, emergency access, reprocessing, backup restoration, supplier escalation, and manual workarounds can have broad authority and weaker evidence.",
    correction:
      "Model normal, support, administrative, emergency, degraded, and recovery interactions."
  },
  {
    mistake: "Using real internal material",
    why:
      "Real diagrams, role maps, interface lists, logs, credentials, supplier records, and recovery details can expose systems and people.",
    correction:
      "Use completely invented organizations, systems, identities, actors, assets, interfaces, evidence, dates, decisions, and outcomes."
  }
];

const labSteps = [
  {
    step: "1",
    title: "Confirm purpose and scope",
    action:
      "Use the supplied fictional Northbridge brief to state which design decision the inventory supports and which systems, workflows, actors, data, suppliers, environments, and time period are included.",
    output:
      "One purpose statement, one scope statement, one exclusion list, and one safety boundary.",
    quality:
      "The scope is precise enough that a reviewer can identify what the exercise does not cover."
  },
  {
    step: "2",
    title: "Create an asset inventory",
    action:
      "Identify fictional mission, data, identity, service, process, evidence, privacy, trust, safety, and recovery assets.",
    output:
      "An asset table with value, owner, purpose, classification, dependency, impact, evidence, confidence, and review trigger.",
    quality:
      "Every technology asset is connected to a mission or user outcome."
  },
  {
    step: "3",
    title: "Create an actor inventory",
    action:
      "Identify fictional end users, administrators, support roles, service identities, devices, suppliers, automation, reviewers, recovery roles, and unknown actors.",
    output:
      "An actor table with role, relationship, identity type, authority, expected behavior, lifecycle, owner, evidence, and unknowns.",
    quality:
      "The table does not claim intent and includes both human and non-human actors."
  },
  {
    step: "4",
    title: "Create an entry-point inventory",
    action:
      "Identify fictional public, administrative, API, upload, queue, supplier, identity, monitoring, and recovery interfaces.",
    output:
      "An interface table with purpose, accepted input, connected actors, affected assets, owner, controls, evidence, failure handling, and lifecycle.",
    quality:
      "Every interface has a documented purpose and accountable owner or is marked as an unresolved gap."
  },
  {
    step: "5",
    title: "Build the relationship map",
    action:
      "Connect each important fictional actor to the entry points used and the assets affected.",
    output:
      "An Asset–Actor–Entry Point relationship matrix with purpose, authority, expected behavior, evidence, and owner.",
    quality:
      "The matrix can answer who or what uses which interface to affect which value and why."
  },
  {
    step: "6",
    title: "Review ownership and lifecycle",
    action:
      "Find orphaned assets, stale identities, unowned interfaces, temporary channels, unclear supplier relationships, and missing retirement decisions.",
    output:
      "A gap register with owner, action, evidence request, deadline, confidence, and review trigger.",
    quality:
      "No gap is silently converted into a fact or accusation."
  },
  {
    step: "7",
    title: "Assess criticality and exposure",
    action:
      "Use the fictional criticality factors to compare mission dependence, privacy, integrity, availability, authority, dependency concentration, detectability, and recoverability.",
    output:
      "A reasoned preliminary priority view without false precision.",
    quality:
      "Every priority statement cites fictional evidence and identifies uncertainty."
  },
  {
    step: "8",
    title: "Write the defensive summary",
    action:
      "Explain the most important fictional relationships, gaps, evidence needs, ownership decisions, and next modeling questions.",
    output:
      "A one-page leadership summary and a technical appendix.",
    quality:
      "The summary is useful without exposing real systems or providing operational harmful detail."
  }
];

const quizQuestions = [
  {
    question:
      "Which statement best defines an asset for threat modeling?",
    choices: [
      "Only a server, application, or database.",
      "Any fictional item, capability, outcome, relationship, or condition with value that requires protection.",
      "Only data classified as confidential.",
      "Any interface that accepts a request."
    ],
    answer: 1,
    explanation:
      "Assets include mission outcomes, data, identity authority, services, processes, evidence, privacy, trust, safety, and recovery—not only technology."
  },
  {
    question:
      "A fictional support role can reset accounts and change notification settings. What is the strongest next modeling step?",
    choices: [
      "Assume the role is malicious.",
      "Remove the role immediately without owner review.",
      "Validate business purpose, exact authority, conditions, approvals, evidence, lifecycle, separation needs, and connected assets and entry points.",
      "Ignore the role because it is not called administrator."
    ],
    answer: 2,
    explanation:
      "Professional modeling examines authority and evidence without unsupported conclusions about intent."
  },
  {
    question:
      "Which item is a non-human actor?",
    choices: [
      "A fictional counselor.",
      "A fictional privacy reviewer.",
      "A fictional archival service identity that performs scheduled retention actions.",
      "A fictional mission owner."
    ],
    answer: 2,
    explanation:
      "Services, workloads, devices, schedulers, integrations, and automation can act and possess authority."
  },
  {
    question:
      "What makes an entry-point description decision-ready?",
    choices: [
      "It includes only the interface name.",
      "It includes purpose, accepted operations, connected actors, affected assets, owner, controls, evidence, failure handling, lifecycle, assumptions, and review triggers.",
      "It labels the interface High risk.",
      "It includes the real internal address and configuration."
    ],
    answer: 1,
    explanation:
      "A useful entry-point record supports ownership, control, evidence, lifecycle, and threat-model decisions while remaining fictional."
  },
  {
    question:
      "A fictional service identity has no owner and its review date has expired. What does the evidence prove?",
    choices: [
      "The identity has been compromised.",
      "The identity is malicious.",
      "Ownership and lifecycle evidence are incomplete and require validation and an accountable decision.",
      "The identity must be deleted immediately."
    ],
    answer: 2,
    explanation:
      "The evidence supports a governance gap, not an unsupported claim about misuse or compromise."
  },
  {
    question:
      "Why should assets, actors, and entry points be connected in one relationship register?",
    choices: [
      "To make the document longer.",
      "To show who or what uses which approved interface to affect which value, for what purpose, under which authority, controls, evidence, and ownership.",
      "To replace data-flow diagrams and all later threat modeling.",
      "To guarantee that every threat has been discovered."
    ],
    answer: 1,
    explanation:
      "The relationship register creates context for later trust-boundary, abuse-case, risk, and mitigation work."
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use a real role matrix but remove employee names.",
      "Use a real interface inventory but change the company name.",
      "Create every organization, asset, actor, identity, interface, owner, record, diagram, event, date, decision, and outcome from scratch.",
      "Use real internal details because the project is educational."
    ],
    answer: 2,
    explanation:
      "Complete fictionalization demonstrates skill without exposing real people, organizations, systems, suppliers, or controls."
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
        Module A3
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

export default function AssetsActorsAndEntryPointsPage() {
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
              Module A3
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 2 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              System Context and Ownership
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A3.2 Assets, Actors, and Entry Points
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders identify what has value, who or
            what interacts with that value, and through which approved
            interfaces those interactions occur. Build a fictional relationship
            model that connects mission outcomes, data, identity, services,
            operations, evidence, privacy, trust, recovery, authority,
            ownership, expected behavior, controls, and review triggers.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A3: Threat Modeling"
          lessonTitle="Assets, Actors, and Entry Points"
          lessonNumber={2}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, systems, assets, actors, identities, interfaces, owners, evidence, diagrams, records, dates, decisions, and outcomes.",
            "I understand that an asset can be a mission outcome, data set, identity relationship, service, process, evidence source, privacy expectation, trust relationship, safety outcome, or recovery capability.",
            "I will distinguish actor role and authority from assumed intent and will not label a fictional actor malicious without evidence.",
            "I will document entry points conceptually by purpose, accepted interaction, ownership, controls, evidence, and lifecycle rather than exposing operational real-system details.",
            "I will not access, scan, test, configure, investigate, monitor, recover, or change any real device, account, network, application, service, supplier connection, or organizational system.",
            "I will keep facts, interpretations, assumptions, hypotheses, unknowns, confidence, limitations, and review triggers separate."
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Threat Model Cannot Protect What the Team Has Not Named"
        >
          <p className="leading-8">
            A fictional Northbridge team describes its student-support portal
            as “a website and a database.” That description misses the outcomes
            students depend on, the authority represented by counselor and
            support identities, the privacy value of uploaded records, the
            integrity of case status, the evidence needed to review
            administrative actions, the supplier relationship that processes
            documents, the notification workflow that communicates decisions,
            and the recovery identities that restore service. It also fails to
            show which actors use which interfaces to affect those assets.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak inventory
              </p>
              <p className="mt-2 leading-7">
                “Website, database, users, admins, API.” This list is too vague
                to support ownership, trust, authority, privacy, evidence,
                recovery, or later risk decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Decision-ready relationship
              </p>
              <p className="mt-2 leading-7">
                “The fictional support analyst role uses the controlled support
                console to correct notification preferences for verified users;
                the action affects identity, privacy, communication, and audit
                assets and requires reason, confirmation, evidence, review, and
                an accountable role owner.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Asset, actor, and entry-point inventories are not accusation lists.
            They are structured descriptions of value, interaction, authority,
            ownership, expected behavior, evidence, uncertainty, and lifecycle.
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
          title="The Relationship Matters More Than the List"
        >
          <p className="leading-8">
            A list of fictional assets without actors does not explain who or
            what can affect them. A list of actors without entry points does not
            explain how their actions enter the system. A list of entry points
            without assets does not explain what value is at stake. Professional
            threat modeling connects all three so teams can ask precise
            defensive questions.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Asset question",
                "What fictional value, outcome, authority, evidence, privacy expectation, trust relationship, or recovery capability requires protection?"
              ],
              [
                "Actor question",
                "Who or what interacts with that value, under which role, relationship, identity, authority, conditions, lifecycle, and expected behavior?"
              ],
              [
                "Entry-point question",
                "Through which approved fictional interface does the interaction occur, and who owns its purpose, validation, monitoring, change, failure, and retirement?"
              ]
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

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
            <p className="font-black text-blue-100">
              Core relationship statement
            </p>
            <p className="mt-2 leading-7">
              A fictional actor uses an approved entry point to perform an
              authorized action that affects one or more assets for a documented
              purpose, under defined conditions, controls, evidence,
              accountability, failure handling, and lifecycle decisions.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Core Framework"
          title="The Asset–Actor–Entry Point Relationship Model"
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                1. Asset
              </p>
              <h3 className="mt-2 text-xl font-black text-white">
                What Has Value?
              </h3>
              <p className="mt-3 text-sm leading-6">
                Identify the fictional mission, data, identity, service,
                process, evidence, privacy, safety, trust, or recovery value.
              </p>
              <p className="mt-3 text-sm leading-6">
                Record purpose, owner, classification, criticality,
                dependencies, impact, recovery, evidence, confidence, and review
                trigger.
              </p>
            </article>

            <article className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5 text-purple-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-200">
                2. Actor
              </p>
              <h3 className="mt-2 text-xl font-black text-white">
                Who or What Interacts?
              </h3>
              <p className="mt-3 text-sm leading-6">
                Identify the fictional human or non-human role, relationship,
                identity type, authority, conditions, expected behavior,
                lifecycle, owner, and accountability.
              </p>
              <p className="mt-3 text-sm leading-6">
                Do not confuse actor category with intent, trustworthiness, or
                proof of harmful behavior.
              </p>
            </article>

            <article className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                3. Entry Point
              </p>
              <h3 className="mt-2 text-xl font-black text-white">
                Through Which Approved Interface?
              </h3>
              <p className="mt-3 text-sm leading-6">
                Identify the fictional interface purpose, accepted interaction,
                connected actors, affected assets, owner, validation,
                authorization, monitoring, failure, and lifecycle.
              </p>
              <p className="mt-3 text-sm leading-6">
                Keep descriptions conceptual and defensive rather than
                operational or tied to a real system.
              </p>
            </article>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
              Relationship record template
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {[
                "Asset and owner",
                "Actor role and relationship",
                "Entry point and owner",
                "Approved purpose",
                "Requested or performed action",
                "Required authority and conditions",
                "Expected behavior and limits",
                "Validation and authorization controls",
                "Evidence and source health",
                "Failure and recovery behavior",
                "Assumptions and unknowns",
                "Confidence and review trigger"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm leading-6 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Precise Asset, Actor, and Interface Reasoning"
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
            Classify Assets by Value, Not by Device Name
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            A strong fictional asset inventory begins with mission and user
            outcomes, then connects supporting data, identities, services,
            operations, evidence, privacy, trust, safety, and recovery. The
            category does not determine priority by itself. Priority depends on
            context, dependencies, impact, authority, evidence, uncertainty, and
            recoverability.
          </p>

          <div className="mt-6 grid gap-5">
            {assetClasses.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.category}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Fictional examples", item.examples],
                    ["Defender questions", item.questions],
                    ["Likely owners", item.owner],
                    ["Supporting evidence", item.evidence]
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

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Common gap
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.commonGap}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Describe Actors by Role, Authority, Relationship, and Lifecycle"
        >
          <p className="leading-8">
            Actor inventories must remain neutral and evidence-aware. A
            fictional external request is not automatically hostile. An
            administrator is not automatically trusted for every purpose. A
            service identity is not less important because no person signs in
            with it. Describe what is known, what authority exists, what
            behavior is expected, which evidence is available, and what remains
            unknown.
          </p>

          <div className="mt-6 grid gap-5">
            {actorClasses.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-black text-purple-100">
                    {item.type}
                  </h3>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Actor class
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Fictional examples", item.fictionalExamples],
                    ["Expected behavior", item.expected],
                    ["Authority questions", item.authorityQuestions],
                    ["Lifecycle", item.lifecycle],
                    ["Evidence", item.evidence]
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.type}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-300">
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

          <div className="mt-6 rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
            Never convert actor location, role, identity type, supplier status,
            error, denied request, unusual timing, or missing context into a
            claim of malicious intent. Record the observation, evidence,
            uncertainty, expected behavior, and defensive review question.
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 3
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Build an Entry-Point Inventory around Purpose and Ownership
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            An entry point is not merely a technical address. It is a fictional
            interface with a purpose, accepted operations, connected actors,
            affected assets, validation rules, authority decisions, evidence,
            failure behavior, lifecycle, and owner. Describing it this way
            supports later trust-boundary, abuse-case, risk, and mitigation work
            without exposing operational real-system information.
          </p>

          <div className="mt-6 grid gap-5">
            {entryPointClasses.map((item) => (
              <article
                key={item.interface}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.interface}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Fictional purpose", item.fictionalPurpose],
                    ["Incoming interaction", item.incoming],
                    ["Connected assets", item.assetConnection],
                    ["Connected actors", item.actorConnection],
                    ["Expected controls", item.expectedControls],
                    ["Evidence needs", item.evidenceNeeds],
                    ["Accountable owner", item.owner]
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.interface}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">
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
          title="Use Eight Relationship Questions for Every Important Interaction"
        >
          <p className="leading-8">
            The strongest inventories connect value, role, interface, purpose,
            authority, expected behavior, evidence, ownership, and change. Use
            the questions below when reviewing a fictional asset–actor–entry
            point relationship.
          </p>

          <div className="mt-6 grid gap-5">
            {relationshipQuestions.map((item, index) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">
                      {item.question}
                    </h3>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Asset view", item.assetView],
                    ["Actor view", item.actorView],
                    ["Entry-point view", item.entryView],
                    ["Evidence", item.evidence]
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.question}-${label}`}
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
          eyebrow="Instructional Section 5"
          title="Separate Ownership, Authority, and Risk Decisions"
        >
          <p className="leading-8">
            One fictional system may have several legitimate owners. The mission
            owner decides which outcomes matter. The data owner approves purpose
            and use. The identity owner governs actor authority. The interface
            owner governs accepted interactions and technical lifecycle. The
            operations owner maintains service. The recovery owner validates
            restoration. A risk owner decides whether remaining exposure is
            acceptable. Combining these responsibilities can hide disagreement
            and weaken accountability.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Decision area",
                    "Primary fictional owner",
                    "Required partners",
                    "Evidence of ownership"
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
                    "Mission value and acceptable outcome",
                    "Mission or business owner",
                    "Service, user, privacy, operations, recovery, leadership",
                    "Approved service objective and impact decision"
                  ],
                  [
                    "Data purpose, fields, use, sharing, retention, deletion",
                    "Data and privacy owners",
                    "Application, supplier, records, security, mission",
                    "Data inventory, purpose approval, classification, retention decision"
                  ],
                  [
                    "Actor role, authority, lifecycle, and review",
                    "Identity and role owners",
                    "Application, support, human resources, supplier, security",
                    "Role definition, approval, access review, lifecycle record"
                  ],
                  [
                    "Entry-point purpose, controls, change, monitoring, retirement",
                    "Interface or service owner",
                    "Data, identity, platform, supplier, operations, security",
                    "Interface inventory, architecture decision, change history, review"
                  ],
                  [
                    "Operational availability and support",
                    "Operations owner",
                    "System, supplier, identity, support, monitoring, mission",
                    "Service records, support procedures, metrics, exercise results"
                  ],
                  [
                    "Recovery order, authority, validation, and communication",
                    "Recovery owner",
                    "Mission, system, data, identity, supplier, communications",
                    "Recovery plan, restore test, validation, closure review"
                  ],
                  [
                    "Residual risk and exception",
                    "Named risk owner",
                    "All relevant owners and leadership",
                    "Risk decision, rationale, conditions, expiration, review trigger"
                  ]
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={cell} className="px-4 py-4 align-top leading-6 text-slate-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Criticality and Exposure Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Compare Importance without False Precision
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            A fictional asset, actor relationship, or entry point should not be
            marked “critical” simply because it is technical, privileged, or
            internet-facing. Use evidence and context across several factors,
            then preserve uncertainty and owner judgment.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {criticalityFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.factor}
                </h3>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Strong question
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.strongQuestion}
                  </p>
                </div>
                <div className="mt-4 rounded-xl border border-slate-700 bg-slate-900 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Evidence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.evidence}
                  </p>
                </div>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Warning
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.warning}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Inventory Quality"
          title="Move from Vague Lists to Decision-Ready Relationships"
        >
          <div className="grid gap-5">
            {inventoryQuality.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.level}
                </h3>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Example
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.example}</p>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Remaining problem
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.problem}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Improvement
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.improvement}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Architecture View"
          title="Northbridge Student-Support Relationship Map"
        >
          <p className="leading-8">
            The diagram below is an invented learning model. It describes roles
            and interfaces conceptually and does not represent any real school,
            organization, network, application, supplier, or internal design.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.8fr_1.3fr_0.9fr]">
            <div className="grid gap-3">
              {[
                [
                  "Students and guardians",
                  "Use the public portal for approved submission, status, preferences, and support."
                ],
                [
                  "Counselors",
                  "Review assigned cases and record approved decisions."
                ],
                [
                  "Support analysts",
                  "Use controlled support workflows for verified user problems."
                ],
                [
                  "Administrators",
                  "Operate approved platform, identity, and recovery functions."
                ]
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
                Fictional Northbridge Portal
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Public interface", "Submission, status, preferences, support"],
                  ["Administrative console", "Approved support and operations"],
                  ["Identity interface", "Human and service authentication"],
                  ["Supplier API", "Minimized processing requests and results"],
                  ["Upload channel", "Validated fictional documents"],
                  ["Message queue", "Workflow and notification events"],
                  ["Monitoring ingestion", "Events, health, and evidence"],
                  ["Recovery interface", "Approved restoration and validation"]
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
                [
                  "Identity provider",
                  "Authenticates fictional human and service identities."
                ],
                [
                  "Processing supplier",
                  "Returns fictional document-processing results."
                ],
                [
                  "Notification service",
                  "Delivers approved fictional status messages."
                ],
                [
                  "Archive and backup",
                  "Preserves fictional records and supports restoration."
                ]
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

          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This relationship map is a starting hypothesis. It does not prove
            actual permissions, data fields, interface status, control
            effectiveness, expected behavior, source health, ownership,
            recovery readiness, or complete coverage.
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge Asset–Actor–Entry Point Dashboard"
          subtitle="Fictional inventory, ownership, lifecycle, and evidence status for training only."
          metrics={[
            {
              label: "Assets with confirmed owners",
              value: "28 / 34",
              note: "Evidence, notification-state, archival-deletion, recovery-identity, supplier-trust, and duplicate-submission assets need ownership review."
            },
            {
              label: "Actors past review date",
              value: "4",
              note: "Two service identities, one temporary support role, and one supplier operator relationship require lifecycle validation."
            },
            {
              label: "Entry points without complete records",
              value: "3",
              note: "Temporary batch import, recovery console, and supplier support channel lack complete purpose, owner, evidence, or retirement decisions."
            }
          ]}
        />

        <FakeAlertCard
          title="Temporary Interface Has No Confirmed Owner"
          severity="High"
          time="10:42 AM"
          source="Fake Northbridge Architecture Governance Console"
          details="A fictional batch-import channel created for migration testing remains listed as enabled. The current inventory does not confirm its purpose, accepted operations, connected service identity, owner, activity evidence, review date, or retirement decision."
          recommendation="Do not assume misuse or test any real system. Validate the fictional record with the designated owners, review supplied inventory and event evidence, document assumptions and unknowns, restrict decisions to the approved model, and assign an accountable lifecycle action."
        />

        <FakeLogPanel
          title="Fake Asset, Actor, and Entry-Point Review Timeline"
          logs={[
            "09:00 REVIEW scope='student-support-portal' status='authorized-fictional'",
            "09:06 ASSET mission='accurate-case-status' owner='student-services'",
            "09:12 ASSET data='support-free-text' purpose='unconfirmed'",
            "09:18 ACTOR role='support-analyst' authority='reset,notify,reprocess'",
            "09:24 ACTOR service='archive-worker' owner='missing' review='expired'",
            "09:31 ENTRY public-portal owner='application-team' status='documented'",
            "09:37 ENTRY supplier-api fields='case-ref,category,status,note'",
            "09:43 ENTRY batch-import purpose='migration-test' owner='unknown'",
            "09:49 EVIDENCE notification-change reason='missing' count='4'",
            "09:56 RECOVERY identity-ref='stale' services='notify,archive'",
            "10:03 DEPENDENCY identity-provider consumers='portal,admin,supplier'",
            "10:10 GAP asset-owner='6' actor-review='4' interface-record='3'",
            "10:17 ACTION data-owner='review-free-text-necessity'",
            "10:24 ACTION identity-owner='validate-archive-worker'",
            "10:31 ACTION interface-owner='validate-batch-import'",
            "10:36 CONFIDENCE inventory='medium' relationship-map='draft'",
            "10:42 ALERT unowned-interface='batch-import'",
            "10:48 DECISION ranking='deferred' evidence-review='required'"
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Supplied Evidence Supports—and What It Does Not Prove
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
                    ["Threat-model use", item.use]
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
          title="Which Relationship Deserves the First Ownership Review?"
          question="Which conclusion is best supported by the fictional Northbridge evidence?"
          evidence={[
            "A temporary batch-import interface remains listed as enabled, but its current purpose, owner, connected service identity, accepted operations, activity evidence, and retirement decision are unclear.",
            "An archival service identity is active, but the owner field is blank and the review date has passed.",
            "The support role can perform several sensitive actions, but the role matrix alone does not prove current effective permission, misuse, or inadequate approval.",
            "The supplier receives a free-text support note, but the evidence does not prove that the field is transmitted in every request or lacks an approved exception.",
            "Several notification-change tickets lack reason and user-confirmation fields, but missing fields do not prove that the changes were unauthorized.",
            "The recovery exercise found stale service-identity references, showing a dependency between recovery assets, non-human actors, and interface configuration.",
            "The dashboard reports six assets without confirmed owners, four actor relationships past review, and three incomplete entry-point records.",
            "The fictional model is still marked draft with medium confidence."
          ]}
          options={[
            "Treat the temporary batch-import channel as a priority ownership and lifecycle gap: validate purpose, owner, accepted operations, connected actor, evidence, exposure, controls, and retirement before final ranking.",
            "Declare that the temporary channel has been used maliciously.",
            "Delete every service identity and supplier connection immediately.",
            "Finalize the entire threat model because the main portal interface has an owner."
          ]}
          bestAnswer={0}
          explanation="The evidence supports a significant governance and lifecycle gap around the temporary interface, but it does not prove misuse. The professional response is to validate ownership, purpose, actor relationship, controls, evidence, and retirement before making a final risk decision."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Errors That Weaken Asset, Actor, and Entry-Point Models"
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
                    Why it fails
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.why}</p>
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
          title="Build the Northbridge Asset–Actor–Entry Point Register"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional evidence on this page. Do not access,
            test, scan, configure, monitor, investigate, recover, or change any
            real system. Do not use real names, accounts, role maps, internal
            diagrams, interface lists, logs, addresses, configurations, supplier
            records, support tickets, or recovery details.
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
          title="An Unowned Service Identity Appears in the Inventory"
          scenario="The fictional archival service identity is active, its owner field is blank, and its review date has passed. No evidence on the page proves misuse, compromise, or excessive permission."
          choices={[
            {
              label: "Choice A",
              response:
                "Record an ownership and lifecycle gap, assign a review owner, validate purpose, authority, activity, dependencies, evidence, and retirement needs using only supplied fictional records.",
              outcome:
                "Best defensive choice. It addresses the supported gap without making unsupported claims or taking unauthorized action.",
              tone: "best"
            },
            {
              label: "Choice B",
              response:
                "State that the identity is compromised and delete it immediately.",
              outcome:
                "Weak and unsafe. The evidence does not prove compromise, and immediate removal could damage fictional archival or recovery workflows.",
              tone: "risk"
            },
            {
              label: "Choice C",
              response:
                "Ignore it because non-human identities are not actors.",
              outcome:
                "Weak. Service identities are actors with authority, ownership, lifecycle, evidence, and dependency requirements.",
              tone: "risk"
            }
          ]}
        />

        <ScenarioDecisionLab
          title="A Portfolio Reviewer Requests a Real Interface Inventory"
          scenario="A reviewer says the fictional project would look more professional if the student copied a real school interface list, removed addresses, and changed the organization name."
          choices={[
            {
              label: "Choice A",
              response:
                "Refuse and create every asset, actor, interface, owner, relationship, record, diagram, event, date, and decision from scratch.",
              outcome:
                "Best ethical choice. Complete fictionalization protects real systems, people, suppliers, and organizational information.",
              tone: "best"
            },
            {
              label: "Choice B",
              response:
                "Use the real list but remove hostnames and credentials.",
              outcome:
                "Unsafe. Interface purpose, relationships, ownership, technology, and structure may still expose sensitive architecture.",
              tone: "risk"
            },
            {
              label: "Choice C",
              response:
                "Publish the real list because no exploitation steps are included.",
              outcome:
                "Unsafe and unauthorized. Defensive purpose does not remove confidentiality or permission requirements.",
              tone: "risk"
            }
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Resolve Conflicting Ownership without Hiding Uncertainty"
        >
          <p className="leading-8">
            The fictional mission owner says case-status integrity is a business
            asset. The application owner says it is a database responsibility.
            The data owner says the supplier creates the value. The supplier
            manager says Northbridge owns the final decision. Build a
            decision-ready ownership model instead of forcing one role to own
            every part.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Map the value chain",
                "Separate user outcome, data accuracy, processing result, application state, supplier obligation, evidence, and recovery."
              ],
              [
                "Assign layered ownership",
                "Assign mission, data, application, supplier, identity, operations, recovery, and residual-risk responsibilities."
              ],
              [
                "Identify decision rights",
                "State who approves purpose, data fields, authority, interface changes, validation, exceptions, and residual risk."
              ],
              [
                "Document disagreement",
                "Preserve competing interpretations, evidence, assumptions, unresolved questions, and escalation path."
              ],
              [
                "Define validation",
                "Specify which fictional records show correct status, supplier result, application update, user communication, and recovery."
              ],
              [
                "Set review triggers",
                "Require review when supplier fields, workflow, ownership, identity, interface version, recovery design, or service objective changes."
              ]
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
              Create a fictional ownership and decision-rights matrix for
              case-status integrity, then write a leadership paragraph
              explaining why shared responsibility does not mean unclear
              accountability.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Assets, Actors, and Entry Points Checklist"
          items={[
            "I can define assets broadly enough to include mission, data, identity, service, process, evidence, privacy, trust, safety, and recovery value.",
            "I can connect every fictional technology asset to the outcome, workflow, user, or responsibility it supports.",
            "I can classify human and non-human actors by role, relationship, identity type, authority, conditions, lifecycle, and expected behavior.",
            "I can avoid making unsupported claims about actor intent, trustworthiness, compromise, or misuse.",
            "I can document entry points by purpose, accepted interaction, actors, assets, owner, validation, authorization, evidence, failure, and lifecycle.",
            "I can distinguish asset owner, data owner, identity owner, system owner, interface owner, operations owner, recovery owner, and risk owner.",
            "I can identify orphaned assets, stale actor relationships, unowned interfaces, temporary channels, missing evidence, and expired reviews.",
            "I can use mission dependence, privacy, integrity, availability, authority, dependency, detectability, and recovery to compare importance.",
            "I can connect each important actor to the entry point used and the assets affected.",
            "I can keep observations, interpretations, assumptions, hypotheses, unknowns, confidence, and limitations separate.",
            "I can create a fictional relationship register that supports later data-flow, trust-boundary, abuse-case, risk, and mitigation work.",
            "I will never use real names, credentials, accounts, role maps, internal diagrams, interface inventories, logs, configurations, supplier records, recovery details, or private information."
          ]}
        />

        <MiniQuiz
          title="A3.2 Mini Quiz: Assets, Actors, and Entry Points"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Asset–Actor–Entry Point Register for the Northbridge Student-Support Portal. Include the modeling decision, scope, exclusions, safety boundary, at least twelve assets across multiple asset classes, at least ten human and non-human actor roles, at least eight entry-point classes, owners, business purpose, authority, expected behavior, lifecycle, connected relationships, criticality factors, evidence sources, evidence limitations, assumptions, unknowns, confidence, review triggers, gap register, decision-rights matrix, leadership summary, technical appendix, reflection, and a statement that every organization, system, asset, actor, identity, role, interface, owner, record, diagram, event, date, decision, and outcome is invented."
          tips={[
            "Begin with mission and user outcomes before listing applications, services, or databases.",
            "Use fictional roles rather than real names and distinguish human actors from services, workloads, devices, suppliers, automation, reviewers, and recovery actors.",
            "Describe interfaces conceptually by purpose and ownership rather than including operational addresses, configurations, or real internal details.",
            "Connect each important actor to the entry point used and the asset affected, then record authority, controls, evidence, assumptions, and review triggers.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, and suitable for a public learning portfolio."
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready to Map Data Flows and Trust Boundaries?"
        >
          <p className="leading-8">
            Before moving to A3.3, rate your readiness from 1 to 5 for each
            area: asset breadth, actor neutrality, non-human identity coverage,
            entry-point ownership, relationship mapping, authority,
            evidence, lifecycle, criticality, uncertainty, and complete
            fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can identify mission, data, identity, service, operational, evidence, privacy, trust, safety, and recovery assets.",
              "I can describe human and non-human actors without assuming intent.",
              "I can explain why support, supplier, automation, temporary, emergency, and recovery actors belong in the model.",
              "I can document an entry point by purpose, accepted interaction, ownership, controls, evidence, failure, and lifecycle.",
              "I can connect an actor, interface, and asset in one decision-ready relationship statement.",
              "I can preserve ownership gaps, assumptions, unknowns, confidence, and evidence limits instead of guessing.",
              "I can create a complete fictional artifact without copying or modifying real internal information.",
              "I can use the relationship register as the foundation for A3.3 data-flow and trust-boundary analysis."
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
            Record one fictional asset that was easy to overlook, one
            non-human actor that deserves lifecycle review, one entry point that
            needs clearer ownership, one evidence limitation, and one
            relationship question you will carry into A3.3.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Assets include mission outcomes, data, identity authority, services, processes, evidence, privacy, trust, safety, and recovery—not only devices or applications.",
            "Actors include humans, services, workloads, devices, suppliers, automation, reviewers, administrators, support roles, emergency roles, and unknown parties.",
            "Actor category, source, error, denied request, unusual timing, or missing context does not prove malicious intent.",
            "Entry points are approved interfaces with purpose, accepted operations, connected actors, affected assets, owners, controls, evidence, failure behavior, and lifecycle.",
            "The relationship between asset, actor, and entry point provides the context needed for later trust-boundary, abuse-case, risk, and mitigation decisions.",
            "Ownership should distinguish mission, data, identity, system, interface, operations, recovery, supplier, and residual-risk responsibilities.",
            "Inventories require evidence, confidence, assumptions, unknowns, review dates, change triggers, and retirement decisions.",
            "Support, administrative, supplier, temporary, emergency, degraded, and recovery paths deserve the same modeling discipline as normal user flows.",
            "A vague list becomes decision-ready when it records value, purpose, authority, expected behavior, validation, evidence, ownership, failure, lifecycle, and uncertainty.",
            "Every CyberShield artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people."
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A3
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Next, use the fictional asset, actor, and entry-point register to
            map how data and requests move and where trust assumptions change.
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