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
const previousLesson = `${modulePath}/assets-actors-and-entry-points`;
const nextLesson = `${modulePath}/abuse-cases-and-misuse-thinking`;

const objectives = [
  "Create clear fictional data-flow diagrams that identify actors, processes, stores, transfer paths, destinations, owners, purposes, and system states.",
  "Recognize meaningful fictional trust changes involving identity, authority, ownership, sensitivity, location, technology, administration, supplier relationships, and recovery conditions.",
  "Document fictional trust boundaries with entry conditions, validation, authorization, monitoring, privacy, failure handling, recovery, evidence, assumptions, and review triggers.",
  "Evaluate fictional flow evidence without treating diagrams, logs, dashboards, alerts, or architecture records as complete proof of actual behavior or control effectiveness.",
  "Produce a portfolio-ready fictional data-flow and trust-boundary package that remains ethical, defensive, non-operational, privacy-safe, and completely invented.",
];

const vocabulary = [
  [
    "Data flow",
    "A fictional movement of information, a request, an identity assertion, an event, a file, a command, a decision, or a status update between actors, processes, services, or stores.",
  ],
  [
    "Process",
    "A fictional component, service, workflow, or human-supported function that receives input, performs an approved transformation or decision, and produces an output.",
  ],
  [
    "Data store",
    "A fictional location where information, state, configuration, evidence, backups, messages, or workflow records are retained for an approved purpose.",
  ],
  [
    "External entity",
    "A fictional actor or service outside the immediate modeled process that sends or receives data, requests, decisions, or identity information.",
  ],
  [
    "Trust boundary",
    "A fictional point where an important trust assumption changes, such as identity, authority, ownership, sensitivity, administration, location, technology, supplier responsibility, or recovery state.",
  ],
  [
    "Boundary crossing",
    "A fictional interaction in which data, a request, an identity, or authority moves across a trust boundary and therefore requires explicit control and evidence questions.",
  ],
  [
    "Trust assumption",
    "A documented fictional belief about identity, ownership, configuration, service state, data quality, authority, availability, or control operation that requires validation and review.",
  ],
  [
    "Source",
    "The fictional actor, service, process, device, workload, supplier, or store from which a flow originates.",
  ],
  [
    "Destination",
    "The fictional actor, service, process, device, workload, supplier, or store that receives a flow.",
  ],
  [
    "Flow purpose",
    "The approved fictional business, service, security, privacy, operational, support, or recovery reason for the interaction.",
  ],
  [
    "Flow content",
    "The fictional fields, records, files, assertions, status values, commands, metadata, or events carried by the interaction.",
  ],
  [
    "Transformation",
    "The fictional change performed by a process, such as validation, classification, enrichment, approval, routing, storage, notification, or aggregation.",
  ],
  [
    "Validation",
    "A fictional check that confirms the received data, request, file, identity assertion, event, or state meets defined format, meaning, source, timing, and business rules.",
  ],
  [
    "Authorization",
    "A fictional decision about whether a specific actor or service may perform a specific action on a specific asset under defined conditions.",
  ],
  [
    "Data minimization",
    "Limiting a fictional flow to the minimum fields and context needed for its approved purpose.",
  ],
  [
    "Protocol transition",
    "A fictional change in communication method or service interface that may introduce new ownership, validation, monitoring, or failure assumptions.",
  ],
  [
    "Administrative boundary",
    "A fictional boundary between different owners, teams, suppliers, organizations, accounts, projects, environments, or operational responsibilities.",
  ],
  [
    "Sensitivity boundary",
    "A fictional change in data classification, privacy expectation, retention requirement, permitted use, or exposure.",
  ],
  [
    "Identity boundary",
    "A fictional change in how an actor or service proves identity, receives authority, or carries trust into another component.",
  ],
  [
    "Recovery boundary",
    "A fictional transition into backup, restoration, failover, emergency access, degraded operation, alternate processing, or post-recovery validation.",
  ],
  [
    "Flow evidence",
    "Fictional records such as events, tickets, diagrams, interface definitions, approvals, source-health signals, validation results, queue records, and owner statements that support or limit a flow claim.",
  ],
  [
    "Flow state",
    "The fictional status of an interaction, such as requested, accepted, validated, denied, queued, processing, completed, failed, retried, restored, or reconciled.",
  ],
  [
    "Data lineage",
    "A fictional record of where information originated, which processes transformed it, where it was stored, who approved its use, and which outputs were derived from it.",
  ],
  [
    "Flow completeness",
    "The degree to which a fictional model includes normal, failure, retry, support, administrative, supplier, degraded, recovery, archival, and deletion paths.",
  ],
];

const flowElements = [
  {
    element: "Actors and external entities",
    purpose:
      "Show fictional people, services, devices, suppliers, reviewers, administrators, support roles, and automation that originate or receive interactions.",
    record:
      "Role, relationship, identity type, owner, authority, expected behavior, lifecycle, and connected assets.",
    questions:
      "Who or what initiates the flow? Who receives it? Which identity represents the actor? What authority and evidence are required?",
    warning:
      "Do not use real names, accounts, email addresses, device identifiers, supplier records, or internal identity details.",
  },
  {
    element: "Processes and services",
    purpose:
      "Show fictional components that validate, authorize, transform, route, approve, enrich, classify, store, notify, reconcile, or recover information.",
    record:
      "Purpose, owner, inputs, outputs, decision rules, dependencies, failure behavior, evidence, and lifecycle.",
    questions:
      "What transformation occurs? Which business rule is applied? What happens when validation fails or a dependency is unavailable?",
    warning:
      "A process box is not proof that the process operates as documented or that controls are effective.",
  },
  {
    element: "Data stores",
    purpose:
      "Show fictional locations where records, workflow state, identity attributes, evidence, configuration, messages, backups, and archives are retained.",
    record:
      "Data purpose, owner, classification, retention, deletion, access, integrity, recovery, copies, and evidence.",
    questions:
      "What is stored? Why? For how long? Who may use it? Which copies or derived records exist? How is correct recovery validated?",
    warning:
      "Do not assume one database symbol represents every table, cache, backup, export, queue, archive, or derived data set.",
  },
  {
    element: "Flow arrows",
    purpose:
      "Show the fictional direction and purpose of requests, data, identity assertions, events, decisions, files, status updates, and administrative actions.",
    record:
      "Source, destination, purpose, content, sensitivity, identity, authority, validation, timing, state, evidence, and failure behavior.",
    questions:
      "What moves? In which direction? Under which identity? Why is it needed? Which states and errors are possible?",
    warning:
      "An unlabeled arrow hides the most important context needed for threat modeling.",
  },
  {
    element: "Trust boundaries",
    purpose:
      "Mark fictional points where trust assumptions change across identity, authority, ownership, sensitivity, location, technology, environment, supplier, administration, or recovery state.",
    record:
      "Boundary type, owner, crossing flows, assumptions, controls, evidence, failure, recovery, unknowns, and review triggers.",
    questions:
      "What changed? Which trust is being accepted or transformed? Which control and evidence are required before the destination relies on the input?",
    warning:
      "A network line is not automatically a trust boundary, and an important trust boundary may exist inside one network or application.",
  },
  {
    element: "Evidence and health signals",
    purpose:
      "Show how fictional teams know that flows are accepted, rejected, delayed, transformed, retried, failed, restored, or missing.",
    record:
      "Source, event meaning, timestamp quality, actor, action, target, result, correlation, health, retention, access, and owner.",
    questions:
      "Can defenders answer who, what, when, where, why, result, and source-health questions? What evidence gaps remain?",
    warning:
      "Logging presence does not prove completeness, integrity, correct interpretation, or active review.",
  },
];

const boundaryTypes = [
  {
    type: "Identity trust boundary",
    change:
      "A fictional user, service, device, or supplier identity is authenticated, federated, translated, delegated, elevated, recovered, or represented in another component.",
    examples:
      "Public user to portal session; service identity to internal API; federation assertion to local role; emergency identity to recovery console.",
    questions:
      "Which identity source is trusted? Which attributes and conditions are used? How is authority limited? What happens when identity context is stale or missing?",
    controls:
      "Strong identity proof, assertion validation, attribute minimization, conditional access, session controls, least privilege, lifecycle, monitoring, and recovery governance.",
    evidence:
      "Authentication result, assertion source, attributes used, policy decision, session state, role mapping, lifecycle event, and failure reason.",
  },
  {
    type: "Authorization boundary",
    change:
      "A fictional request moves from general access into an action that affects another user, sensitive record, configuration, workflow state, evidence source, or privileged function.",
    examples:
      "Student viewing own case versus counselor reviewing assigned cases; support analyst viewing status versus changing notification settings.",
    questions:
      "Which actor may perform which action on which object under which condition, purpose, approval, duration, and separation requirement?",
    controls:
      "Object-level authorization, role and attribute checks, reason capture, approval, separation of duties, time limits, review, and denial evidence.",
    evidence:
      "Actor, role, object, action, policy decision, condition, approval, reason, result, and review record.",
  },
  {
    type: "Administrative ownership boundary",
    change:
      "A fictional flow crosses between different teams, suppliers, organizations, cloud accounts, environments, operational owners, or governance responsibilities.",
    examples:
      "Portal team to processing supplier; application owner to identity platform; internal service to externally operated notification provider.",
    questions:
      "Who owns each side? Which responsibility transfers? Which data, controls, evidence, failure, recovery, and change obligations are shared?",
    controls:
      "Clear ownership, interface agreement, data minimization, service expectations, evidence rights, change notification, incident coordination, recovery, and exit planning.",
    evidence:
      "Owner register, service agreement, approved fields, interface version, change record, health status, incident contact, and offboarding decision.",
  },
  {
    type: "Sensitivity and privacy boundary",
    change:
      "Fictional information moves into a context with different classification, audience, purpose, retention, consent, exposure, or privacy expectation.",
    examples:
      "User-uploaded record to support notes; case details to notification text; full record to minimized supplier request; operational event to analytics report.",
    questions:
      "Which fields are necessary? Does the destination have a compatible purpose? What data is derived? Which retention, deletion, masking, and access rules apply?",
    controls:
      "Classification, minimization, purpose limitation, field validation, audience control, access restrictions, retention, deletion, masking, and privacy review.",
    evidence:
      "Field inventory, classification, approved purpose, consent or notice decision, access record, retention schedule, and deletion evidence.",
  },
  {
    type: "Environment boundary",
    change:
      "A fictional flow moves across development, test, training, staging, production, disaster recovery, archive, or another environment with different data and control expectations.",
    examples:
      "Synthetic training data to test environment; approved configuration to production; production backup to recovery environment.",
    questions:
      "Is the data appropriate for the environment? Are identities and permissions separate? Which configuration, evidence, and change controls apply?",
    controls:
      "Environment separation, synthetic data, separate identities, change approval, configuration baselines, deployment evidence, access review, and recovery validation.",
    evidence:
      "Environment inventory, data source, identity scope, deployment record, change approval, configuration version, and access events.",
  },
  {
    type: "Technology or protocol boundary",
    change:
      "A fictional request or record changes format, interface, protocol, parser, queue, storage model, or processing technology.",
    examples:
      "Web form to API request; API result to queue event; uploaded file to extracted metadata; event stream to dashboard metric.",
    questions:
      "What transformation occurs? Which assumptions are lost or added? How are type, schema, size, encoding, ordering, duplication, and error handled?",
    controls:
      "Schema validation, safe parsing, size and type limits, canonical formats, duplicate handling, ordering, error isolation, versioning, and monitoring.",
    evidence:
      "Schema version, parser result, validation outcome, conversion record, retry state, error reason, and downstream correlation.",
  },
  {
    type: "Network or location boundary",
    change:
      "A fictional interaction moves between public, internal, management, restricted, supplier, remote, wireless, cloud, or recovery zones.",
    examples:
      "Public portal to protected application service; management workstation to administrative console; supplier service to integration gateway.",
    questions:
      "Which source and destination zones are involved? Which identity and service are expected? What should be allowed, denied, observed, isolated, or rate-limited?",
    controls:
      "Segmentation, explicit access paths, identity-aware policy, filtering, secure remote access, monitoring, rate controls, source health, and fail-safe behavior.",
    evidence:
      "Zone map, policy decision, connection event, service identity, destination, result, health signal, and change record.",
  },
  {
    type: "Recovery and degraded-operation boundary",
    change:
      "A fictional service enters failover, restore, emergency access, manual workaround, delayed processing, reconciliation, or post-recovery validation.",
    examples:
      "Primary storage to backup restoration; normal identity to emergency recovery role; queue failure to manual case review.",
    questions:
      "Which trust assumptions change during disruption? Who may act? Which data and configuration are trusted? How is business state reconciled and communicated?",
    controls:
      "Documented trigger, approval, time-bound authority, trusted baselines, integrity checks, alternate workflow, reconciliation, communication, and post-event review.",
    evidence:
      "Trigger, approving actor, recovery identity, source artifact, action, validation result, business-state check, communication, and closure record.",
  },
];

const flowLifecycle = [
  {
    phase: "1. Origination",
    question:
      "Which fictional actor, service, device, supplier, process, or store creates the request or information?",
    record:
      "Source identity, purpose, trigger, authority, original fields, classification, timestamp, owner, and evidence.",
    failure:
      "Unknown source, stale identity, incorrect trigger, unnecessary fields, unsupported purpose, or missing evidence.",
  },
  {
    phase: "2. Entry",
    question:
      "Through which approved fictional interface does the interaction enter the next component or trust context?",
    record:
      "Entry point, interface owner, accepted operation, source context, destination, exposure, version, and rate or size expectations.",
    failure:
      "Unowned interface, deprecated path, unsupported version, unexpected source, uncontrolled retry, or temporary channel left active.",
  },
  {
    phase: "3. Validation",
    question:
      "Which fictional format, meaning, identity, source, timing, state, and business-rule checks occur before use?",
    record:
      "Schema result, source validation, data quality, identity context, duplicate or ordering checks, rejection reason, and evidence.",
    failure:
      "Malformed input, missing context, stale state, duplicate event, unsupported field, incorrect type, or silent acceptance.",
  },
  {
    phase: "4. Authorization",
    question:
      "May this fictional actor perform this action on this object under the current conditions?",
    record:
      "Actor, role, attributes, object, action, conditions, approval, policy result, reason, and denial handling.",
    failure:
      "Excessive authority, missing object check, stale role, unsupported delegation, absent approval, or unclear exception.",
  },
  {
    phase: "5. Transformation",
    question:
      "How does the fictional process classify, enrich, route, aggregate, approve, extract, redact, or otherwise change the information?",
    record:
      "Transformation rule, version, input, output, fields added or removed, owner, evidence, and error behavior.",
    failure:
      "Incorrect mapping, hidden derived data, lost context, unsafe default, silent truncation, inconsistent version, or unreviewed automation.",
  },
  {
    phase: "6. Storage or delivery",
    question:
      "Where is the fictional result stored or delivered, for which purpose, audience, retention period, and downstream use?",
    record:
      "Destination, data purpose, classification, owner, access, retention, deletion, integrity, notification, and recovery.",
    failure:
      "Wrong destination, excessive audience, unnecessary retention, duplicate copy, unprotected metadata, or missing confirmation.",
  },
  {
    phase: "7. Observation",
    question:
      "Which fictional evidence shows the interaction was accepted, denied, delayed, transformed, completed, failed, retried, or restored?",
    record:
      "Actor, action, target, result, state, correlation, source health, timestamp quality, retention, and reviewer.",
    failure:
      "Missing event, ambiguous meaning, unhealthy source, inconsistent time, unlinked retry, excessive sensitive logging, or no owner.",
  },
  {
    phase: "8. Failure and retry",
    question:
      "What happens when the fictional interaction cannot complete safely?",
    record:
      "Failure reason, bounded retry, queue or isolation state, user impact, alert, escalation, fallback, and evidence.",
    failure:
      "Infinite retry, duplicate action, lost request, hidden backlog, unsafe fallback, unclear user status, or unbounded queue growth.",
  },
  {
    phase: "9. Recovery and reconciliation",
    question:
      "How is correct fictional technical and business state restored after disruption?",
    record:
      "Recovery trigger, trusted source, authority, restore order, validation, reconciliation, communication, owner, and closure.",
    failure:
      "Technically restored service with stale identity, incorrect workflow state, duplicate records, missing notification, or unverified data integrity.",
  },
  {
    phase: "10. Retirement and deletion",
    question:
      "How is the fictional flow, interface, copy, identity, rule, or store removed when no longer needed?",
    record:
      "Retirement owner, dependency review, archive or deletion decision, evidence retention, identity removal, interface disablement, and confirmation.",
    failure:
      "Temporary interface remains active, stale copy persists, service identity is orphaned, documentation remains current-looking, or dependencies are missed.",
  },
];

const boundaryQuestions = [
  {
    question: "What trust changed?",
    detail:
      "Identify changes in identity, authority, ownership, sensitivity, location, technology, administration, environment, supplier responsibility, or recovery state.",
    evidence:
      "Architecture view, role matrix, data classification, service agreement, environment inventory, identity record, or recovery plan.",
  },
  {
    question: "Which flow crosses the boundary?",
    detail:
      "Name the fictional source, destination, purpose, content, actor, operation, state, timing, and direction.",
    evidence:
      "Labeled diagram arrow, interface definition, event sample, workflow record, or approved requirement.",
  },
  {
    question: "What is trusted before use?",
    detail:
      "State which identity, data, field, source, device, assertion, schema, configuration, timing, or business state the destination relies on.",
    evidence:
      "Validation rule, identity policy, configuration baseline, schema, owner decision, or test result.",
  },
  {
    question: "Which controls decide acceptance?",
    detail:
      "Describe fictional validation, authorization, minimization, filtering, segmentation, session, rate, approval, monitoring, and safe-failure controls.",
    evidence:
      "Control requirement, policy decision, design review, event output, change record, or safe test evidence.",
  },
  {
    question: "What evidence supports review?",
    detail:
      "Define which fictional records answer actor, action, target, reason, result, state, health, timing, source, and correlation questions.",
    evidence:
      "Event schema, source-health dashboard, ticket, approval, queue state, recovery validation, or review record.",
  },
  {
    question: "What happens when trust cannot be established?",
    detail:
      "Describe denial, isolation, quarantine, bounded retry, manual review, fallback, escalation, user communication, and preservation of evidence.",
    evidence:
      "Failure design, error record, incident procedure, support workflow, queue policy, or recovery exercise.",
  },
  {
    question: "Who owns each side?",
    detail:
      "Identify fictional source owner, destination owner, interface owner, data owner, identity owner, supplier owner, operations owner, and risk owner.",
    evidence:
      "Ownership register, service catalog, role assignment, supplier record, or governance decision.",
  },
  {
    question: "When must the boundary be reviewed?",
    detail:
      "Set triggers for changes in actor, data, purpose, identity, permission, interface version, supplier, environment, protocol, exposure, failure, recovery, or ownership.",
    evidence:
      "Change record, access review, architecture revision, supplier update, incident lesson, scheduled review, or exercise finding.",
  },
];

const diagramQuality = [
  {
    level: "Level 1: Unlabeled sketch",
    description:
      "Boxes are connected with arrows, but flows, actors, assets, boundaries, purpose, ownership, and evidence are missing.",
    risk:
      "Reviewers may assume the diagram is complete even though it cannot support control or threat decisions.",
    improvement:
      "Name actors, processes, stores, flow purpose, content, direction, and owners.",
  },
  {
    level: "Level 2: Labeled system flow",
    description:
      "The fictional diagram identifies actors, services, stores, and named flows.",
    risk:
      "Trust changes, validation, authorization, privacy, failure, and recovery may remain implicit.",
    improvement:
      "Mark meaningful boundaries and record what trust changes at each crossing.",
  },
  {
    level: "Level 3: Boundary-aware model",
    description:
      "Fictional identity, ownership, sensitivity, environment, supplier, network, and recovery boundaries are visible.",
    risk:
      "Controls may still be listed without evidence, ownership, or failure behavior.",
    improvement:
      "Link each boundary crossing to validation, authorization, monitoring, minimization, failure, and evidence.",
  },
  {
    level: "Level 4: Decision-ready model",
    description:
      "Each important fictional flow and boundary has purpose, content, actors, assets, owners, controls, evidence, assumptions, unknowns, confidence, failure, recovery, and review triggers.",
    risk:
      "The model can still become stale or be mistaken for proof of actual implementation.",
    improvement:
      "Version the model, validate claims against supplied fictional evidence, record disagreements, and maintain change triggers.",
  },
];

const evidenceMatrix = [
  {
    id: "DF-01",
    source: "Fictional architecture diagram",
    observation:
      "The student-support portal sends document-processing requests to an external supplier and receives status results through a separate integration path.",
    supports:
      "A supplier administrative boundary exists, and the outbound and inbound flows may have different data, validation, evidence, and failure requirements.",
    limits:
      "The diagram does not prove which fields are actually transmitted, which identity is used, or whether every path is current.",
    use:
      "Create two labeled flows, identify owners on both sides, and request fictional field, identity, health, and lifecycle evidence.",
  },
  {
    id: "DF-02",
    source: "Fictional data-field record",
    observation:
      "The supplier request includes case reference, document category, processing priority, and a free-text support note.",
    supports:
      "The flow crosses a privacy and administrative boundary and may include a field whose necessity requires owner review.",
    limits:
      "The record does not prove the field is populated in every request, retained by the supplier, or unapproved.",
    use:
      "Document field purpose, classification, minimization question, validation, retention, and responsible owner.",
  },
  {
    id: "DF-03",
    source: "Fictional identity review",
    observation:
      "The supplier integration trusts one service identity, but the local owner field is incomplete and the review date has expired.",
    supports:
      "The boundary depends on a non-human identity whose ownership and lifecycle evidence need validation.",
    limits:
      "The evidence does not prove compromise, misuse, excessive permission, or failed authentication.",
    use:
      "Open identity-owner, authority, rotation, activity, monitoring, failure, and retirement questions.",
  },
  {
    id: "DF-04",
    source: "Fictional queue-health dashboard",
    observation:
      "Processing-result events were delayed for twenty-two minutes while source-health reporting continued to show Green.",
    supports:
      "Flow-state and health evidence may not reflect the same condition, and delayed events can affect workflow integrity and user communication.",
    limits:
      "The dashboard does not prove data loss, incorrect status, or a security incident.",
    use:
      "Review queue state, source-health meaning, delay evidence, reconciliation, user impact, and alert thresholds.",
  },
  {
    id: "DF-05",
    source: "Fictional support ticket review",
    observation:
      "Users submitted duplicate documents after receiving delayed status notifications during a processing disruption.",
    supports:
      "Notification, workflow state, user behavior, duplicate handling, and recovery communication are connected flows.",
    limits:
      "The tickets do not prove which technical component caused the delay or whether every duplicate resulted from notification timing.",
    use:
      "Add notification, duplicate-detection, support, and reconciliation flows to the model with uncertainty noted.",
  },
  {
    id: "DF-06",
    source: "Fictional recovery exercise",
    observation:
      "Application service was restored before the notification queue and archival scheduler were validated, producing stale status messages and repeated archival tasks.",
    supports:
      "The recovery boundary includes dependency order, service identities, queue state, business-state validation, and communication.",
    limits:
      "One exercise does not prove how often this condition will occur or the effectiveness of current corrective actions.",
    use:
      "Model recovery sequencing, trusted state, reconciliation, approval, validation, evidence, and closure.",
  },
  {
    id: "DF-07",
    source: "Fictional change request",
    observation:
      "A new analytics process will receive event data from the portal, support console, supplier integration, and notification service.",
    supports:
      "The proposed design creates new data-lineage, privacy, ownership, interpretation, retention, and aggregation questions.",
    limits:
      "The request does not prove the final fields, purpose, audience, controls, or retention have been approved.",
    use:
      "Mark the proposed flow as future-state, list assumptions, and require owner decisions before treating it as implemented.",
  },
  {
    id: "DF-08",
    source: "Fictional interface inventory",
    observation:
      "A temporary migration-import channel remains documented as enabled but is missing current purpose, owner, activity, accepted fields, and retirement evidence.",
    supports:
      "The model contains a potentially stale entry point and an unresolved environment or administrative boundary.",
    limits:
      "The inventory does not prove the interface is reachable, used, unsafe, or unnecessary.",
    use:
      "Validate fictional purpose, state, owner, flow content, identity, controls, evidence, dependencies, and retirement without real testing.",
  },
];

const commonMistakes = [
  {
    mistake: "Drawing only the happy path",
    why:
      "Normal successful flows hide denial, validation failure, retry, timeout, support, administrative, supplier, degraded, recovery, archival, and deletion states.",
    correction:
      "Model normal, failure, retry, support, emergency, recovery, reconciliation, and retirement paths.",
  },
  {
    mistake: "Using unlabeled arrows",
    why:
      "A line without source, destination, purpose, content, identity, authority, state, and owner cannot support threat or control decisions.",
    correction:
      "Label every important fictional flow with enough context to explain what moves and why.",
  },
  {
    mistake: "Treating every network line as a trust boundary",
    why:
      "Trust can change inside one network, one application, one cloud account, or one team; a network crossing may also preserve the same trust context.",
    correction:
      "Mark boundaries only where identity, authority, ownership, sensitivity, environment, technology, supplier, administration, or recovery assumptions change.",
  },
  {
    mistake: "Missing non-data flows",
    why:
      "Identity assertions, policy decisions, approvals, administrative actions, configuration changes, health signals, alerts, evidence, and recovery commands affect security even when they are not business records.",
    correction:
      "Model information, identity, authority, control, evidence, and recovery flows.",
  },
  {
    mistake: "Assuming the diagram is proof",
    why:
      "A diagram reflects a model, version, owner perspective, and evidence limit; it may omit temporary, stale, manual, supplier, retry, and recovery paths.",
    correction:
      "Link diagram claims to supplied fictional evidence, confidence, assumptions, unknowns, and review dates.",
  },
  {
    mistake: "Ignoring data minimization",
    why:
      "A flow may carry fields, metadata, free text, derived information, or context that the destination does not need.",
    correction:
      "Record field-level purpose, sensitivity, destination use, retention, and owner approval.",
  },
  {
    mistake: "Combining validation and authorization",
    why:
      "A request can be well formed but unauthorized, or authorized in principle but invalid for the current object, state, timing, or business rule.",
    correction:
      "Document format and meaning validation separately from actor and object authorization.",
  },
  {
    mistake: "Ignoring state and timing",
    why:
      "Delayed, duplicated, reordered, retried, stale, partial, or conflicting events can harm workflow integrity even when each message is valid.",
    correction:
      "Model flow state, ordering, duplication, freshness, timeout, retry, reconciliation, and user communication.",
  },
  {
    mistake: "Forgetting source health",
    why:
      "Missing events can look like normal inactivity when the source, collector, queue, parser, or dashboard is unhealthy.",
    correction:
      "Include health, completeness, timestamp quality, parsing state, and evidence ownership.",
  },
  {
    mistake: "Publishing real internal diagrams",
    why:
      "Removing credentials or addresses does not remove the sensitivity of real relationships, suppliers, roles, boundaries, workflows, evidence sources, or recovery paths.",
    correction:
      "Invent every organization, actor, system, flow, boundary, record, date, control, decision, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Confirm scope and modeling decision",
    action:
      "State which fictional Northbridge design decision the data-flow model will support and which actors, processes, stores, suppliers, environments, interfaces, and time period are included.",
    output:
      "Purpose, scope, exclusions, stakeholders, model version, and safety boundary.",
    quality:
      "The reviewer can identify which flows and environments are intentionally outside the model.",
  },
  {
    step: "2",
    title: "Place actors, processes, and stores",
    action:
      "Use the A3.2 relationship register to place fictional end users, support actors, administrators, service identities, suppliers, portal services, queues, stores, monitoring, archive, and recovery components.",
    output:
      "A component inventory with owner, purpose, asset connection, and evidence source.",
    quality:
      "Every component has a purpose and owner or is marked as an unresolved gap.",
  },
  {
    step: "3",
    title: "Draw and label normal flows",
    action:
      "Map fictional user submission, identity, processing, status, notification, evidence, storage, archival, and reporting flows.",
    output:
      "Labeled arrows showing source, destination, purpose, content, direction, actor, state, and owner.",
    quality:
      "No important arrow is described only as Data or API.",
  },
  {
    step: "4",
    title: "Mark meaningful trust boundaries",
    action:
      "Identify fictional identity, authorization, administrative, supplier, sensitivity, environment, technology, network, and recovery boundaries.",
    output:
      "Boundary map with boundary type, owner, changed assumption, crossing flows, and evidence needs.",
    quality:
      "Each boundary is justified by a trust change rather than by visual layout alone.",
  },
  {
    step: "5",
    title: "Add failure and retry paths",
    action:
      "Model fictional rejection, queue delay, supplier failure, duplicate event, notification failure, support correction, bounded retry, and escalation.",
    output:
      "Failure-state and retry diagram with evidence, user impact, owner, and safe fallback.",
    quality:
      "Retries are bounded and do not silently create duplicate or conflicting business state.",
  },
  {
    step: "6",
    title: "Add recovery and reconciliation",
    action:
      "Model fictional failover, restore order, recovery identity, trusted baseline, queue recovery, business-state validation, communication, and closure.",
    output:
      "Recovery flow with approval, source, destination, authority, validation, reconciliation, and evidence.",
    quality:
      "The model validates business and user state, not only technical availability.",
  },
  {
    step: "7",
    title: "Build the boundary review table",
    action:
      "For each important crossing, record changed trust, controls, evidence, failure behavior, owners, assumptions, unknowns, confidence, and review triggers.",
    output:
      "A decision-ready trust-boundary register.",
    quality:
      "Every listed control has an owner and expected evidence rather than being a generic label.",
  },
  {
    step: "8",
    title: "Review completeness and communicate",
    action:
      "Check normal, administrative, support, supplier, evidence, degraded, recovery, archival, deletion, and future-state paths, then write a leadership summary.",
    output:
      "Quality review, gap register, decision log, leadership summary, technical appendix, and reflection.",
    quality:
      "The final package distinguishes current-state, future-state, assumption, unknown, and unresolved decision.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest definition of a trust boundary?",
    choices: [
      "Any line drawn between two network devices.",
      "A fictional point where an important trust assumption changes, such as identity, authority, ownership, sensitivity, administration, technology, environment, supplier responsibility, or recovery state.",
      "Only the edge between the public internet and an internal network.",
      "Any place where encryption is used.",
    ],
    answer: 1,
    explanation:
      "Trust boundaries are defined by meaningful changes in trust assumptions, not by one technology or network position.",
  },
  {
    question:
      "Which label makes a fictional flow most useful for threat modeling?",
    choices: [
      "Data",
      "API call",
      "The fictional portal service sends a minimized processing request containing case reference and document category to the supplier service through the approved integration interface under one managed service identity.",
      "Traffic",
    ],
    answer: 2,
    explanation:
      "A decision-ready label identifies source, destination, purpose, content, interface, identity, and context.",
  },
  {
    question:
      "A queue-health dashboard shows Green while processing-result events are delayed. What is the best conclusion?",
    choices: [
      "There is no problem because the dashboard is Green.",
      "The supplier is malicious.",
      "Health evidence and flow-state evidence may represent different conditions and require correlation before a conclusion.",
      "All queued events have been lost.",
    ],
    answer: 2,
    explanation:
      "One health status does not prove complete, timely, or correct business flow. Correlation and evidence limits matter.",
  },
  {
    question:
      "Why should validation and authorization be modeled separately?",
    choices: [
      "They are identical but use different names.",
      "A request can be well formed but unauthorized, or authorized in principle but invalid for the current object, state, timing, or business rule.",
      "Authorization applies only to administrators.",
      "Validation applies only to files.",
    ],
    answer: 1,
    explanation:
      "Format and meaning checks differ from actor, object, action, condition, and policy decisions.",
  },
  {
    question:
      "Which path is commonly missed in a weak data-flow diagram?",
    choices: [
      "The main successful user flow.",
      "Failure, retry, support, emergency, recovery, reconciliation, archival, and deletion paths.",
      "The page title.",
      "The fictional organization name.",
    ],
    answer: 1,
    explanation:
      "Professional models include non-happy-path states because they often change authority, trust, evidence, and risk.",
  },
  {
    question:
      "What does a fictional architecture diagram prove?",
    choices: [
      "Every flow is implemented exactly as shown.",
      "Every control is effective.",
      "It supports a model of intended or documented relationships but requires evidence, assumptions, confidence, and review before being treated as fact.",
      "No undocumented interface exists.",
    ],
    answer: 2,
    explanation:
      "A diagram is evidence with limits, not complete proof of current implementation or control effectiveness.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Copy a real internal diagram and remove addresses.",
      "Use a real supplier flow but change the names.",
      "Invent every organization, actor, process, store, flow, boundary, interface, event, date, decision, control, and outcome from scratch.",
      "Publish a real recovery flow because it is defensive.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real systems, organizations, suppliers, people, and recovery information.",
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

export default function DataFlowsAndTrustBoundariesPage() {
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
              Lesson 3 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              System Flow and Trust Analysis
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A3.3 Data Flows and Trust Boundaries
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders map fictional information,
            requests, identity assertions, events, files, decisions,
            administrative actions, evidence, failures, and recovery activity.
            Mark where trust assumptions change and connect every important
            boundary crossing to purpose, ownership, validation, authorization,
            privacy, monitoring, failure handling, evidence, uncertainty, and
            review.
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
          lessonTitle="Data Flows and Trust Boundaries"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, actors, identities, processes, services, stores, interfaces, flows, events, diagrams, records, dates, controls, decisions, and outcomes.",
            "I understand that a data-flow diagram is a model and not complete proof of real implementation, behavior, configuration, ownership, or control effectiveness.",
            "I will mark trust boundaries only where an important trust assumption changes, not simply wherever a network line appears.",
            "I will include normal, failure, retry, support, supplier, administrative, degraded, recovery, reconciliation, archival, deletion, and future-state paths when relevant.",
            "I will not access, scan, test, configure, investigate, monitor, recover, or change any real system, account, device, network, application, supplier connection, or organizational environment.",
            "I will separate observation, interpretation, assumption, hypothesis, unknown, confidence, limitation, owner decision, and review trigger.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Most Important Security Question May Be Hidden inside an Arrow"
        >
          <p className="leading-8">
            A fictional Northbridge diagram shows one arrow labeled “Data” from
            the student-support portal to an external processing supplier. That
            arrow does not explain which actor initiated the request, which
            identity represents the portal, which fields move, why they are
            needed, which trust assumptions change, which validations occur,
            what the supplier returns, how delayed or duplicate results are
            handled, which evidence exists, who owns each side, or how the
            integration is retired.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak flow description
              </p>
              <p className="mt-2 leading-7">
                “Portal sends data to supplier.” This hides purpose, fields,
                identity, authority, ownership, validation, privacy, evidence,
                failure, recovery, and lifecycle.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Decision-ready flow
              </p>
              <p className="mt-2 leading-7">
                “The fictional portal processing service uses one managed
                service identity to send a minimized case reference and document
                category through the approved supplier interface for document
                classification; both sides validate schema, authority, result,
                source health, failure state, and evidence.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            A trust boundary is not automatically dangerous. It is a place where
            the model must make assumptions, ownership, controls, evidence,
            failure behavior, and uncertainty explicit.
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
          title="Flow Context Turns a Component List into a Security Model"
        >
          <p className="leading-8">
            A3.2 identified fictional assets, actors, and entry points. A3.3
            connects them in motion. The model must show which actor uses which
            interface to send which request or information to which process or
            store, for which purpose, under which authority, across which trust
            change, with which controls, evidence, failure behavior, owners, and
            recovery path.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Without flow context",
                "Teams cannot tell which actor affects which asset, which data is exposed, or which control should apply.",
              ],
              [
                "Without boundaries",
                "Teams may accept identity, authority, data, supplier results, configuration, or recovery state without making trust assumptions visible.",
              ],
              [
                "Without evidence",
                "Teams cannot distinguish intended design from current behavior, failure, delay, missing telemetry, or stale documentation.",
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
          title="The Six-Layer Data-Flow and Trust Model"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "1. Purpose",
                "Why the fictional interaction exists, which mission or user outcome it supports, and who approved that purpose.",
              ],
              [
                "2. Participants",
                "Which actors, services, devices, suppliers, processes, and stores originate, transform, receive, or observe the interaction.",
              ],
              [
                "3. Content and state",
                "Which fields, files, events, assertions, commands, decisions, metadata, and statuses move, including timing, ordering, freshness, and retry state.",
              ],
              [
                "4. Trust change",
                "Which identity, authority, ownership, sensitivity, environment, technology, supplier, administration, location, or recovery assumption changes.",
              ],
              [
                "5. Controls and evidence",
                "Which validation, authorization, minimization, segmentation, monitoring, failure, recovery, and source-health checks support safe use.",
              ],
              [
                "6. Ownership and lifecycle",
                "Who owns each side, which assumptions remain, how changes are reviewed, and how the flow, identity, interface, copy, or rule is retired.",
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
              Complete flow statement template
            </p>
            <p className="mt-2 leading-7">
              The fictional source actor uses a documented identity to send a
              defined request or information set through an approved entry point
              to a destination process or store for a documented purpose. The
              interaction crosses a named trust boundary, is validated and
              authorized under stated conditions, produces reviewable evidence,
              fails safely, supports recovery, and has owners, assumptions,
              confidence, and review triggers.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Precise Flow and Boundary Reasoning"
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
            Build the Diagram from Six Evidence-Aware Elements
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            A professional fictional data-flow diagram is more than a picture.
            Each visual element must support a clear statement about purpose,
            ownership, value, authority, interaction, control, evidence,
            uncertainty, and lifecycle.
          </p>

          <div className="mt-6 grid gap-5">
            {flowElements.map((item) => (
              <article
                key={item.element}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.element}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose in the model", item.purpose],
                    ["What to record", item.record],
                    ["Defender questions", item.questions],
                    ["Safety or quality warning", item.warning],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.element}-${label}`}
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
          eyebrow="Instructional Section 2"
          title="Recognize Eight Types of Meaningful Trust Change"
        >
          <p className="leading-8">
            The strongest fictional models do not mark a boundary merely because
            two boxes are separated. They explain exactly what trust assumption
            changes and what the destination must verify before relying on the
            interaction.
          </p>

          <div className="mt-6 grid gap-5">
            {boundaryTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-black text-purple-100">
                    {item.type}
                  </h3>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Trust change
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["What changes", item.change],
                    ["Fictional examples", item.examples],
                    ["Defender questions", item.questions],
                    ["Control expectations", item.controls],
                    ["Evidence expectations", item.evidence],
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
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 3
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Model the Full Flow Lifecycle
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            A flow is not complete when a request is sent. Professional
            defenders consider origination, entry, validation, authorization,
            transformation, storage or delivery, observation, failure, retry,
            recovery, reconciliation, retirement, and deletion.
          </p>

          <div className="mt-6 grid gap-5">
            {flowLifecycle.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.phase}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Core question
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.question}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      What to record
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.record}</p>
                  </div>
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Failure themes
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.failure}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Ask Eight Questions at Every Important Boundary Crossing"
        >
          <div className="grid gap-5">
            {boundaryQuestions.map((item, index) => (
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
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.detail}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
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
          title="Distinguish Current, Future, Failure, and Recovery Flows"
        >
          <p className="leading-8">
            A fictional model should never mix proposed design with current
            design without clear labels. It should also separate normal
            processing from failure, degraded operation, support intervention,
            emergency administration, recovery, reconciliation, and retirement.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Flow state",
                    "Meaning",
                    "Required labels",
                    "Review concern",
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
                    "Current-state",
                    "Fictional flow documented as operating now.",
                    "Evidence date, owner, confidence, source, destination, purpose, content, controls, and known gaps.",
                    "Documentation may be stale or incomplete.",
                  ],
                  [
                    "Future-state",
                    "Fictional proposed flow that is not yet approved or implemented.",
                    "Proposal owner, assumptions, required decisions, dependencies, planned controls, and approval status.",
                    "Do not present planned design as current fact.",
                  ],
                  [
                    "Failure-state",
                    "Fictional rejection, timeout, invalid input, unavailable dependency, denied action, or processing error.",
                    "Failure reason, state, evidence, owner, user impact, escalation, and safe fallback.",
                    "Failure can expose hidden authority and retry behavior.",
                  ],
                  [
                    "Retry-state",
                    "Fictional repeated attempt after failure or delay.",
                    "Retry limit, timing, duplication handling, ordering, correlation, queue state, and stop condition.",
                    "Unbounded retry can create duplicates or hidden backlog.",
                  ],
                  [
                    "Support-state",
                    "Fictional human-assisted correction or exception workflow.",
                    "Verified actor, purpose, authority, approval, reason, evidence, and user confirmation.",
                    "Support paths may have broad privileges and weak traceability.",
                  ],
                  [
                    "Emergency-state",
                    "Fictional elevated access or alternate process during disruption.",
                    "Trigger, approval, time limit, scope, evidence, monitoring, review, and revocation.",
                    "Emergency access must not become a permanent normal path.",
                  ],
                  [
                    "Recovery-state",
                    "Fictional restoration, failover, queue restart, identity recovery, or configuration restoration.",
                    "Trusted source, authority, order, validation, reconciliation, communication, and closure.",
                    "Technical availability may return before correct business state.",
                  ],
                  [
                    "Retired-state",
                    "Fictional interface, identity, data copy, process, or flow removed from use.",
                    "Owner, dependency review, disablement, identity removal, deletion or archive, evidence, and confirmation.",
                    "Temporary and deprecated paths often remain visible or active without ownership.",
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
          eyebrow="Diagram Quality"
          title="Move from a Sketch to a Decision-Ready Threat Model"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {diagramQuality.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.level}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Remaining risk
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.risk}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Next improvement
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.improvement}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Architecture View"
          title="Northbridge Student-Support Data-Flow Model"
        >
          <p className="leading-8">
            The model below is completely invented. It illustrates how normal,
            supplier, evidence, notification, administrative, and recovery flows
            can cross different trust boundaries. It does not describe any real
            school, organization, application, supplier, network, identity
            system, or internal architecture.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                [
                  "Students and guardians",
                  "Submit fictional records, view status, update preferences, and request support.",
                ],
                [
                  "Counselors",
                  "Review assigned fictional cases and record approved decisions.",
                ],
                [
                  "Support analysts",
                  "Perform verified support actions through a controlled console.",
                ],
                [
                  "Recovery operators",
                  "Use approved recovery identities during declared restoration activity.",
                ],
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
                Fictional Northbridge Service Zone
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Portal interface", "User requests, files, status, preferences"],
                  ["Identity service", "Human and service identity decisions"],
                  ["Application service", "Validation, authorization, workflow"],
                  ["Case store", "Fictional records and workflow state"],
                  ["Processing queue", "Supplier requests and result events"],
                  ["Notification service", "Approved fictional status messages"],
                  ["Monitoring pipeline", "Events, health, and evidence"],
                  ["Archive and recovery", "Retention, restore, and reconciliation"],
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
                  "Processing supplier",
                  "Receives minimized fictional requests and returns processing results.",
                ],
                [
                  "Notification provider",
                  "Delivers approved fictional messages and status receipts.",
                ],
                [
                  "Analytics proposal",
                  "Future-state process awaiting purpose, field, owner, and retention decisions.",
                ],
                [
                  "Backup environment",
                  "Receives approved recovery artifacts and supports validation.",
                ],
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

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Boundary A: Public to service",
                "Identity, session, authorization, input, file, rate, privacy, and evidence assumptions change.",
              ],
              [
                "Boundary B: Service to supplier",
                "Administrative ownership, service identity, data purpose, minimization, availability, evidence, and recovery assumptions change.",
              ],
              [
                "Boundary C: Workflow to notification",
                "Audience, privacy, content, timing, user expectation, delivery, and retry assumptions change.",
              ],
              [
                "Boundary D: Normal to recovery",
                "Authority, trusted baseline, dependency order, business state, evidence, communication, and closure assumptions change.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50"
              >
                <p className="font-black text-yellow-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge Flow and Boundary Dashboard"
          subtitle="Fictional data-flow completeness, ownership, evidence, and recovery status for training only."
          metrics={[
            {
              label: "Flows with complete labels",
              value: "21 / 29",
              note: "Eight flows still lack complete purpose, content, actor, state, owner, evidence, or failure information.",
            },
            {
              label: "Boundary crossings needing review",
              value: "6",
              note: "Supplier, notification, analytics, recovery, support, and temporary migration paths need additional owner or evidence decisions.",
            },
            {
              label: "Failure paths without reconciliation",
              value: "3",
              note: "Delayed supplier result, notification failure, and archival retry paths do not yet show complete business-state reconciliation.",
            },
          ]}
        />

        <FakeAlertCard
          title="Supplier Result Flow Lacks Complete Boundary Evidence"
          severity="High"
          time="11:18 AM"
          source="Fake Northbridge Threat-Model Review Console"
          details="A fictional processing-result flow crosses from an externally operated supplier into the Northbridge workflow service. The current model does not confirm result schema ownership, source-health meaning, duplicate and ordering behavior, delay thresholds, reconciliation, or evidence retention."
          recommendation="Do not test any real integration or assume compromise. Validate the fictional owners, purpose, identity, schema, state, evidence, health, failure, retry, reconciliation, and review triggers using only supplied records."
        />

        <FakeLogPanel
          title="Fake Data-Flow and Trust-Boundary Review Timeline"
          logs={[
            "09:00 MODEL scope='student-support-portal' version='A3.3-draft'",
            "09:08 FLOW user-upload source='public-interface' destination='validation-service'",
            "09:15 BOUNDARY type='identity+sensitivity' crossing='public-to-service'",
            "09:22 FLOW supplier-request fields='case-ref,category,priority,note'",
            "09:29 BOUNDARY type='administrative+privacy' crossing='service-to-supplier'",
            "09:36 IDENTITY supplier-service owner='incomplete' review='expired'",
            "09:44 RESULT queue-delay='22m' health='green'",
            "09:51 EVIDENCE state='delayed' source-health='reported-healthy'",
            "09:58 SUPPORT duplicate-submissions='observed' cause='not-proven'",
            "10:06 FLOW notification-status state='delayed'",
            "10:14 RECOVERY app='restored' queue='unvalidated' archive='unvalidated'",
            "10:22 BOUNDARY type='recovery' trust='baseline+identity+state'",
            "10:31 FUTURE analytics-flow status='proposed' fields='unapproved'",
            "10:39 ENTRY migration-import owner='unknown' purpose='unclear'",
            "10:47 GAP flow-labels='8' boundary-review='6' reconciliation='3'",
            "10:55 ACTION supplier-owner='validate-schema-and-state'",
            "11:03 ACTION recovery-owner='define-order-and-reconciliation'",
            "11:10 CONFIDENCE diagram='medium' current-state='partial'",
            "11:18 ALERT crossing='supplier-result' evidence='incomplete'",
            "11:25 DECISION ranking='deferred' owner-review='required'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Evidence Supports—and What It Does Not Prove
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
                    ["Threat-model use", item.use],
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
          title="Which Boundary Finding Deserves the First Design Review?"
          question="Which conclusion is best supported by the fictional Northbridge evidence?"
          evidence={[
            "The supplier-result flow crosses an administrative and technology boundary into the Northbridge workflow service.",
            "The queue dashboard reported Green while result events were delayed for twenty-two minutes.",
            "The current model does not confirm result schema ownership, duplicate handling, ordering behavior, delay thresholds, reconciliation, or evidence retention.",
            "The support tickets show duplicate submissions after delayed notifications, but they do not prove one technical cause.",
            "The supplier identity owner field is incomplete and its review date has passed.",
            "The recovery exercise showed stale status messages and repeated archival tasks after application restoration.",
            "The analytics flow is proposed future-state and does not yet have approved fields, purpose, audience, or retention.",
            "The model is still a draft with medium confidence.",
          ]}
          options={[
            "Prioritize a boundary design review for the supplier-result flow covering identity, schema, source health, delay, ordering, duplication, reconciliation, evidence, ownership, failure, and recovery before final ranking.",
            "Declare that the supplier caused a security incident.",
            "Assume the Green dashboard proves the flow is healthy.",
            "Finalize the diagram because the main components are already shown.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports an important design and evidence gap at the supplier-result boundary. It does not prove malicious behavior or a security incident. The professional next step is a structured owner review of trust, state, evidence, failure, and recovery."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Errors That Weaken Data-Flow and Trust-Boundary Models"
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
          title="Build the Northbridge Data-Flow and Trust-Boundary Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            access, test, scan, configure, monitor, investigate, recover, or
            change any real system. Do not use real identities, diagrams,
            interfaces, addresses, configurations, logs, tickets, supplier
            records, data fields, recovery details, or private information.
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
          title="A Supplier Flow Carries an Unclear Free-Text Field"
          scenario="The fictional processing request crosses into an externally operated supplier and includes a free-text support note. The current evidence does not prove whether the field is populated in every request, retained by the supplier, or approved for this purpose."
          choices={[
            {
              label: "Choice A",
              response:
                "Document a privacy and administrative boundary question, ask the fictional data and supplier owners to validate purpose, necessity, fields, retention, access, evidence, and minimization, and defer final ranking until the decision is supported.",
              outcome:
                "Best defensive choice. It addresses the supported uncertainty without assuming unauthorized disclosure or testing a real system.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "State that the supplier is collecting private data illegally.",
              outcome:
                "Weak and unsupported. The evidence does not prove legal status, actual population, retention, or approved exception.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the field because the supplier connection already exists.",
              outcome:
                "Weak. Existing architecture does not remove purpose, minimization, ownership, evidence, and lifecycle requirements.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Reviewer Requests a Real Recovery Diagram"
          scenario="A reviewer says the portfolio would be stronger if the student copied a real organization's recovery flow, removed addresses, and changed the organization name."
          choices={[
            {
              label: "Choice A",
              response:
                "Refuse and invent every actor, identity, process, store, boundary, flow, recovery step, event, date, control, decision, and outcome from scratch.",
              outcome:
                "Best ethical choice. Recovery diagrams can expose highly sensitive relationships, authority, dependencies, and operational assumptions even without addresses.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Use the real diagram but blur system names.",
              outcome:
                "Unsafe. Structure, dependencies, roles, suppliers, and recovery order may still reveal sensitive information.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Publish the real diagram because it is defensive rather than offensive.",
              outcome:
                "Unsafe and unauthorized. Defensive purpose does not remove permission or confidentiality requirements.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design a Degraded-Mode and Recovery Flow without Losing Business State"
        >
          <p className="leading-8">
            The fictional application service returns to operation before the
            supplier-result queue, notification service, and archival scheduler
            are fully validated. Users can view the portal, but some case
            statuses are stale, some notifications are delayed, and duplicate
            archival tasks are possible. Design a safe fictional degraded-mode
            and recovery flow.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Declare the state",
                "Define when the fictional service enters degraded mode, who approves it, which features remain available, and how users are informed.",
              ],
              [
                "Limit authority",
                "Define which human and service identities may perform recovery, reconciliation, queue, notification, and archival actions.",
              ],
              [
                "Protect workflow integrity",
                "Prevent duplicate, stale, reordered, or conflicting case updates while dependencies recover.",
              ],
              [
                "Validate trusted sources",
                "Identify which backup, queue, event, configuration, and identity records are trusted and how their integrity is checked.",
              ],
              [
                "Reconcile business state",
                "Compare technical records with correct fictional case, notification, duplicate-submission, and archival outcomes.",
              ],
              [
                "Close and review",
                "Record evidence, remaining uncertainty, user communication, residual risk, owner approval, lessons, and review triggers.",
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
              Produce a fictional degraded-mode diagram, recovery-boundary
              table, reconciliation checklist, evidence plan, responsibility
              map, user-communication decision, and leadership explanation of
              why technical availability is not the same as correct business
              recovery.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Data Flows and Trust Boundaries Checklist"
          items={[
            "I can identify fictional actors, processes, stores, interfaces, flows, and evidence sources.",
            "I can label every important flow with source, destination, purpose, content, identity, authority, state, owner, and evidence.",
            "I can distinguish identity, authorization, administrative, sensitivity, environment, technology, network, supplier, and recovery trust boundaries.",
            "I can explain what trust assumption changes at each important crossing.",
            "I can separate validation from authorization and document both.",
            "I can model normal, failure, retry, support, emergency, degraded, recovery, reconciliation, archival, deletion, and retirement paths.",
            "I can distinguish current-state, future-state, assumption, unknown, and unresolved decision.",
            "I can include data minimization, purpose, retention, audience, derived data, and privacy review.",
            "I can include source health, timestamp quality, correlation, event meaning, completeness, and evidence ownership.",
            "I can avoid treating a diagram, dashboard, log, alert, or owner statement as complete proof.",
            "I can assign source, destination, interface, data, identity, operations, supplier, recovery, and risk owners.",
            "I can create a completely fictional diagram without using or modifying real internal architecture, identities, flows, suppliers, configurations, logs, or recovery details.",
          ]}
        />

        <MiniQuiz
          title="A3.3 Mini Quiz: Data Flows and Trust Boundaries"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Data-Flow and Trust-Boundary Package for the Northbridge Student-Support Portal. Include purpose, scope, exclusions, safety boundary, current-state and future-state labels, actors, processes, stores, interfaces, at least fourteen labeled flows, at least six justified trust boundaries, source and destination owners, flow purpose, content, identity, authority, validation, authorization, data minimization, state, timing, ordering, duplication, evidence, source health, failure, retry, degraded operation, recovery, reconciliation, archival, deletion, assumptions, unknowns, confidence, review triggers, gap register, decision log, leadership summary, technical appendix, reflection, and a statement that every organization, actor, identity, process, service, store, interface, flow, boundary, event, date, control, decision, and outcome is invented."
          tips={[
            "Build from the fictional A3.2 asset–actor–entry point register so every flow is connected to value, role, interface, purpose, and ownership.",
            "Label arrows with meaningful descriptions rather than generic words such as Data, Traffic, or API.",
            "Mark trust boundaries only where identity, authority, ownership, sensitivity, environment, technology, supplier, administration, network, or recovery assumptions change.",
            "Include failure, retry, support, degraded, recovery, reconciliation, archival, deletion, and retirement paths—not only the successful path.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready to Develop Safe Abuse Cases and Misuse Questions?"
        >
          <p className="leading-8">
            Before moving to A3.4, rate your readiness from 1 to 5 for flow
            labeling, boundary identification, validation, authorization,
            minimization, evidence, source health, failure, retry, recovery,
            reconciliation, lifecycle, ownership, uncertainty, and complete
            fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can draw a fictional flow that identifies source, destination, purpose, content, actor, state, owner, and evidence.",
              "I can explain why a trust boundary exists instead of marking one only because boxes are separated.",
              "I can distinguish identity, authority, privacy, supplier, environment, technology, network, and recovery trust changes.",
              "I can separate validation from authorization and show what happens when either fails.",
              "I can include delay, duplication, ordering, retry, failure, support, emergency, degraded, recovery, reconciliation, and retirement.",
              "I can explain what a diagram supports and what it does not prove.",
              "I can preserve assumptions, unknowns, confidence, evidence limits, ownership gaps, and review triggers.",
              "I can create a complete fictional model without copying, modifying, or exposing real internal information.",
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
            Record one fictional flow that needed a clearer purpose, one boundary
            whose trust change was easy to miss, one failure path that changed
            authority or state, one evidence limitation, and one question you
            will carry into A3.4 abuse-case and misuse thinking.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "A data-flow diagram should identify actors, processes, stores, flows, boundaries, evidence, ownership, and lifecycle—not only components.",
            "A trust boundary exists where an important trust assumption changes, including identity, authority, ownership, sensitivity, environment, technology, supplier, administration, network, or recovery state.",
            "Every important flow needs source, destination, purpose, content, actor, identity, authority, state, validation, evidence, owner, failure, and review context.",
            "Validation and authorization solve different questions and should be modeled separately.",
            "Normal, failure, retry, support, emergency, degraded, recovery, reconciliation, archival, deletion, and retirement paths can produce different trust and authority conditions.",
            "A diagram, log, dashboard, alert, or owner statement supports a model but does not prove complete current behavior or control effectiveness.",
            "Source health, event completeness, timestamp quality, correlation, duplication, ordering, delay, and reconciliation are part of trustworthy flow evidence.",
            "Current-state and future-state flows must be labeled separately so proposals are not mistaken for implemented fact.",
            "Supplier and recovery boundaries require clear ownership, minimized data, identity, evidence, failure, change, and exit decisions.",
            "Every CyberShield diagram and artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, use the fictional assets, actors, entry points, data flows,
            and trust boundaries to develop safe, outcome-focused abuse cases
            and misuse questions without operational harmful detail.
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