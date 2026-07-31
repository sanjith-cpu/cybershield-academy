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
const previousLesson = `${modulePath}/identity-centered-architecture`;
const nextLesson = `${modulePath}/resilience-and-recovery-planning`;

const objectives = [
  "Explain logging and visibility by design as the intentional fictional planning of evidence, context, source health, time quality, privacy, retention, access, ownership, and recovery before incidents occur.",
  "Select fictional evidence sources by starting with defender, service-owner, privacy, recovery, governance, and leadership questions rather than collecting every available event.",
  "Design fictional logs and telemetry that preserve actor, action, target, purpose, decision, result, time, source, integrity, ownership, and service context.",
  "Evaluate fictional visibility architecture for blind spots, overcollection, inconsistent time, source failure, weak access control, retention gaps, missing ownership, alert noise, and recovery dependence.",
  "Create a portfolio-ready fictional visibility architecture package using only invented organizations, systems, identities, records, evidence, decisions, dates, and outcomes."
];
const vocabulary = [
  [
    "Logging by design",
    "A fictional architecture approach that defines evidence requirements, fields, sources, owners, access, retention, health, and validation before systems are deployed or incidents occur."
  ],
  [
    "Visibility",
    "The fictional ability to understand system, identity, network, application, data, service, change, failure, and recovery behavior from trustworthy evidence."
  ],
  [
    "Telemetry",
    "Fictional technical or operational measurements, events, traces, logs, health signals, and metrics used to understand system behavior."
  ],
  [
    "Event source",
    "A fictional system, service, identity platform, application, network control, database, supplier, backup process, or recovery tool that produces evidence."
  ],
  [
    "Evidence question",
    "A fictional question that a defender, owner, privacy reviewer, auditor, recovery lead, or leader must be able to answer reliably."
  ],
  [
    "Event schema",
    "A fictional structure defining fields such as time, actor, action, target, decision, result, context, source, owner, and integrity."
  ],
  [
    "Source health",
    "The fictional state showing whether an evidence source is producing, transmitting, and preserving events as expected."
  ],
  [
    "Time quality",
    "The fictional reliability, consistency, synchronization, and context of timestamps used to order and compare events."
  ],
  [
    "Event integrity",
    "The fictional confidence that evidence has not been altered, lost, duplicated, reordered, or detached from its source context."
  ],
  [
    "Normalization",
    "The fictional process of translating events from different sources into a consistent structure while preserving source-specific meaning."
  ],
  [
    "Correlation",
    "The fictional process of linking related events across identities, systems, services, data, changes, and time to answer a larger question."
  ],
  [
    "Coverage map",
    "A fictional record showing which evidence sources answer which defender, service, privacy, recovery, and governance questions."
  ],
  [
    "Blind spot",
    "A fictional area where important behavior cannot be observed, attributed, reconstructed, or validated with sufficient confidence."
  ],
  [
    "Signal",
    "Fictional evidence that meaningfully supports a decision or question."
  ],
  [
    "Noise",
    "Fictional events, alerts, duplicates, or context-poor records that consume attention without improving understanding."
  ],
  [
    "Retention",
    "The fictional period and conditions under which evidence is preserved, reviewed, protected, and deleted."
  ],
  [
    "Evidence access",
    "The fictional authorization model controlling who may view, search, export, administer, alter, or delete evidence."
  ],
  [
    "Data minimization",
    "Collecting only fictional evidence fields necessary for approved security, service, privacy, recovery, governance, or legal purposes."
  ],
  [
    "Administrative evidence",
    "Fictional records of changes to logging, rules, retention, access, sources, dashboards, alerts, backups, and recovery settings."
  ],
  [
    "Evidence chain",
    "A fictional sequence connecting source generation, transport, collection, normalization, analysis, storage, access, case use, and retention."
  ],
  [
    "Visibility resilience",
    "The fictional ability to preserve minimum evidence, source health, chronology, and recovery validation when one platform, source, clock, identity, or network path fails."
  ],
  [
    "Evidence confidence",
    "A fictional judgment about how strongly available records support a conclusion after considering source health, time quality, integrity, context, and limitations."
  ]
];
const evidenceQuestions = [
  {
    "audience": "Identity and access owner",
    "question": "Which fictional identity requested which action on which target, under which role and context, and what decision was made?",
    "required_sources": "Identity provider, authorization service, application, privileged session, lifecycle system, and approval workflow.",
    "minimum_fields": "Identity, role, assurance, action, target, policy decision, approver, result, time, source health, and lifecycle state.",
    "risk_if_missing": "Authentication may be visible while authorization, approval, or privilege misuse remains hidden.",
    "validation": "Trace one approved, one denied, one privileged, and one expired access event end to end."
  },
  {
    "audience": "Application and service owner",
    "question": "Which fictional service request failed, slowed, retried, changed data, or depended on another service?",
    "required_sources": "Application, service identity, API gateway conceptually, dependency health, change system, and error records.",
    "minimum_fields": "Calling service, target, route, action, result, latency, error class, dependency, version, and time.",
    "risk_if_missing": "Security and service teams may confuse application failure with identity, network, data, or supplier problems.",
    "validation": "Reconstruct one normal request, one failed dependency, and one recovered service transaction."
  },
  {
    "audience": "Network and platform owner",
    "question": "Which fictional source, destination, identity, service, path, rule, and result were involved in a communication attempt?",
    "required_sources": "Segmentation gateway, service identity, path health, platform events, rule changes, and denied-flow evidence.",
    "minimum_fields": "Source, destination, identity, service, rule, decision, result, path, time, change version, and source health.",
    "risk_if_missing": "Approved flows may be visible while denied attempts, bypasses, or rule drift remain unproven.",
    "validation": "Compare approved, denied, changed, and recovery paths with effective-flow evidence."
  },
  {
    "audience": "Data and privacy owner",
    "question": "Which fictional identity or service accessed which data category, fields, purpose, action, volume, and retention state?",
    "required_sources": "Application, data service, authorization, data catalog, export process, retention workflow, and deletion evidence.",
    "minimum_fields": "Actor, service, data category, fields, purpose, action, volume, result, owner, time, and retention state.",
    "risk_if_missing": "Security visibility may exist while data overcollection, broad access, export, or retention problems remain invisible.",
    "validation": "Reconstruct one approved use, one denied field, one export, one retention change, and one deletion confirmation."
  },
  {
    "audience": "Detection and response team",
    "question": "Which fictional events together indicate a control failure, unusual behavior, architecture drift, or incident requiring review?",
    "required_sources": "Identity, endpoint or workload conceptually, network, application, data, supplier, logging health, case, and change evidence.",
    "minimum_fields": "Actor, action, target, result, context, source, time, confidence, alert logic, owner, and case linkage.",
    "risk_if_missing": "Alerts may lack enough context for triage or may depend on a single unreliable source.",
    "validation": "Test whether one source failure still allows a cautious evidence-based triage decision."
  },
  {
    "audience": "Recovery owner",
    "question": "What fictional state was restored, by whom, from which source, in what order, with which integrity and service validation?",
    "required_sources": "Backup, recovery identity, restore service, application, data integrity, identity, logging, and owner signoff.",
    "minimum_fields": "Recovery identity, approver, source state, target, action, integrity, dependency order, result, validation, and closure.",
    "risk_if_missing": "A system may appear available while identity, data, logs, dependencies, or temporary access remain incomplete.",
    "validation": "Reconstruct one full restore from approval through service and evidence closure."
  },
  {
    "audience": "Governance and audit owner",
    "question": "Which fictional control, exception, rule, retention setting, source, owner, or architecture decision changed, and who approved it?",
    "required_sources": "Change system, architecture decision records, exception register, logging administration, source health, and risk register.",
    "minimum_fields": "Change, owner, approver, purpose, affected controls, version, time, validation, exception, and residual risk.",
    "risk_if_missing": "Architecture drift and evidence tampering may be difficult to distinguish from approved change.",
    "validation": "Trace one approved control change and confirm the old and new effective states."
  },
  {
    "audience": "Leadership",
    "question": "Which fictional services, risks, controls, incidents, recovery outcomes, and corrective actions require a decision?",
    "required_sources": "Service health, risk register, incident cases, recovery exercises, control metrics, and owner actions.",
    "minimum_fields": "Mission impact, confidence, owner, status, trend, decision needed, deadline, residual risk, and evidence basis.",
    "risk_if_missing": "Leadership may receive technical volume without clear mission impact or accountable action.",
    "validation": "Produce a concise decision-ready summary from the same evidence used by technical teams."
  }
];
const sourceCatalog = [
  {
    "source": "Identity and authorization events",
    "purpose": "Show fictional authentication, role, policy decision, approval, privilege, session, lifecycle, and recovery behavior.",
    "key_fields": "Identity, assurance, role, action, target, decision, approver, session, result, lifecycle, and source health.",
    "privacy": "Avoid collecting unnecessary personal attributes; use only identity context required for approved purpose.",
    "failure_mode": "Login events exist, but authorization and privilege decisions are missing.",
    "owner": "Identity and evidence owners."
  },
  {
    "source": "Application and service events",
    "purpose": "Show fictional requests, service identities, actions, dependencies, errors, versions, and user-impact outcomes.",
    "key_fields": "Calling service, target service, route, action, result, latency, error, dependency, version, and time.",
    "privacy": "Do not record full sensitive content when identifiers or approved categories answer the question.",
    "failure_mode": "Errors are visible without actor, service identity, dependency, or data context.",
    "owner": "Application, service, and evidence owners."
  },
  {
    "source": "Network and segmentation evidence",
    "purpose": "Show fictional communication attempts, approved flows, denied paths, rule decisions, supplier paths, and architecture drift.",
    "key_fields": "Source, destination, identity, service, rule, decision, path, result, time, and change version.",
    "privacy": "Limit collection to approved metadata and avoid unnecessary content capture.",
    "failure_mode": "Allowed flows are visible while denied attempts and rule changes are not.",
    "owner": "Network, platform, and evidence owners."
  },
  {
    "source": "Data-service and privacy events",
    "purpose": "Show fictional data access, field scope, purpose, export, retention, deletion, integrity, and administrative changes.",
    "key_fields": "Actor, service, data category, fields, purpose, action, result, volume, retention state, and owner.",
    "privacy": "Collect categories and approved metadata instead of full protected content whenever possible.",
    "failure_mode": "Data access is recorded without purpose, field scope, volume, or lifecycle context.",
    "owner": "Data, privacy, service, and evidence owners."
  },
  {
    "source": "Administrative and change events",
    "purpose": "Show fictional privileged sessions, configuration changes, approvals, rollback, validation, and control administration.",
    "key_fields": "Administrator, approver, purpose, target, action category, change, version, result, rollback, and validation.",
    "privacy": "Restrict access because administrative evidence may reveal sensitive architecture details.",
    "failure_mode": "System events exist, but the administrator who changed evidence, rules, backups, or controls is not visible.",
    "owner": "Privileged-access, system, governance, and evidence owners."
  },
  {
    "source": "Supplier and external-service events",
    "purpose": "Show fictional supplier identity, service, data scope, health, change, support action, fallback, and owner communication.",
    "key_fields": "Supplier, sponsor, service, action, target, data category, result, health, change, and time.",
    "privacy": "Limit evidence to contract-approved service and support context.",
    "failure_mode": "Supplier activity is treated as internal or trusted without independent evidence.",
    "owner": "Supplier, service, data, and evidence owners."
  },
  {
    "source": "Backup and recovery events",
    "purpose": "Show fictional backup state, integrity, retention, restore authority, recovery action, dependency order, and service validation.",
    "key_fields": "Backup source, state, integrity, owner, recovery identity, approver, target, action, result, and closure.",
    "privacy": "Protect evidence revealing restore locations, architecture, or sensitive data categories.",
    "failure_mode": "Backup success is visible, but restore integrity and end-to-end recovery are not.",
    "owner": "Recovery, data, service, and evidence owners."
  },
  {
    "source": "Logging-platform administration",
    "purpose": "Show fictional source onboarding, parser or schema changes, rule changes, retention, access, deletion, health, and recovery.",
    "key_fields": "Administrator, source, change, version, purpose, approval, result, health, retention, and validation.",
    "privacy": "Restrict powerful search, export, retention, and deletion privileges.",
    "failure_mode": "Evidence exists, but changes to the evidence system itself are invisible.",
    "owner": "Evidence, governance, privileged-access, and recovery owners."
  }
];
const schemaDesign = [
  {
    "field_group": "Time and sequence",
    "fields": "Event time, receipt time, processing time, timezone context, sequence, and time-quality state.",
    "why": "Allows fictional events to be ordered and compared while preserving uncertainty.",
    "weak_design": "One timestamp with unknown clock quality.",
    "strong_design": "Source and receipt times with time-quality and sequence context.",
    "validation": "Compare related events during normal operation and one simulated time-quality failure."
  },
  {
    "field_group": "Actor and identity",
    "fields": "Human, service, device, workload, supplier, automation, administrator, or recovery identity plus role and assurance.",
    "why": "Supports attribution and separates authentication from authorization.",
    "weak_design": "Generic user or shared service account.",
    "strong_design": "Unique identity type, owner, role, assurance, session, and lifecycle state.",
    "validation": "Trace one action to an identity, role, owner, session, and approval."
  },
  {
    "field_group": "Action and target",
    "fields": "Requested action, target system, service, resource, data category, configuration, or identity.",
    "why": "Shows what was attempted or changed rather than only who logged in.",
    "weak_design": "Activity occurred.",
    "strong_design": "Specific action on a named fictional target category with result and purpose.",
    "validation": "Distinguish read, write, approve, configure, export, restore, and deny events."
  },
  {
    "field_group": "Decision and result",
    "fields": "Allow, deny, limit, require approval, pause, fail, retry, restore, rollback, or complete plus reason and result.",
    "why": "Explains how the fictional control responded and whether the intended outcome occurred.",
    "weak_design": "Success or failure only.",
    "strong_design": "Decision, policy or rule, reason, result, error, and follow-up state.",
    "validation": "Compare approved, denied, failed, retried, and recovered events."
  },
  {
    "field_group": "Purpose and context",
    "fields": "Mission workflow, service, task, request, approval, device or workload state, risk context, and data purpose.",
    "why": "Prevents valid identities and paths from being treated as universally authorized.",
    "weak_design": "No reason or service context is recorded.",
    "strong_design": "Purpose, workflow, context, approval, and scope appear in the event or linked record.",
    "validation": "Confirm that one approved and one out-of-purpose action can be distinguished."
  },
  {
    "field_group": "Source and integrity",
    "fields": "Source system, source identity, source version, health, transport status, parser or schema version, and integrity state.",
    "why": "Allows defenders to judge whether the evidence itself is trustworthy.",
    "weak_design": "The central platform contains an event, so it is assumed complete.",
    "strong_design": "Source health, transport, parsing, version, and integrity are visible.",
    "validation": "Detect one missing source, delayed transport, duplicate event, and schema failure."
  },
  {
    "field_group": "Ownership and governance",
    "fields": "System owner, data owner, evidence owner, approver, risk owner, retention class, access class, and exception.",
    "why": "Connects fictional evidence to accountable decisions and lifecycle.",
    "weak_design": "Events have no owner or retention purpose.",
    "strong_design": "Owner, purpose, retention, access, exception, and review information are linked.",
    "validation": "Trace one event from source owner through case, decision, retention, and closure."
  },
  {
    "field_group": "Recovery and closure",
    "fields": "Rollback, restore state, recovery identity, validation checks, temporary access, residual monitoring, closure, and signoff.",
    "why": "Shows whether fictional response and recovery restored trusted service outcomes.",
    "weak_design": "The application returned online.",
    "strong_design": "Identity, data, service, evidence, access, temporary rules, and owner signoff are validated.",
    "validation": "Reconstruct one complete recovery with closure and remaining risk."
  }
];
const visibilityFailureModes = [
  {
    "failure": "Source stops reporting silently",
    "impact": "Fictional blind spots grow while dashboards appear normal.",
    "design_response": "Use source-health baselines, expected volume, heartbeat, delay, and owner alerts.",
    "validation": "Simulate one missing source and confirm the health alert appears before a coverage claim is made.",
    "stop": "The team cannot distinguish no activity from no evidence."
  },
  {
    "failure": "Time quality becomes unreliable",
    "impact": "Fictional events may appear out of order and correlation confidence falls.",
    "design_response": "Record source and receipt time, monitor clock quality, preserve uncertainty, and use alternate sequencing evidence.",
    "validation": "Reconstruct a timeline with one source showing degraded time quality.",
    "stop": "A critical decision depends on chronology that cannot be established."
  },
  {
    "failure": "Evidence overcollection",
    "impact": "Fictional privacy risk, cost, noise, access burden, and retention complexity increase.",
    "design_response": "Use question-driven fields, data minimization, approved purpose, access, retention, and periodic review.",
    "validation": "Remove one unnecessary field and confirm the approved question remains answerable.",
    "stop": "Sensitive content is collected without approved need or owner."
  },
  {
    "failure": "Logging administrator can erase evidence",
    "impact": "A fictional privileged identity may change systems and remove proof.",
    "design_response": "Separate duties, preserve independent administrative evidence, restrict deletion, require approval, and review access.",
    "validation": "Confirm that evidence-system changes remain visible outside the control of the same administrator.",
    "stop": "The same identity can alter source, retention, access, and all copies of evidence."
  },
  {
    "failure": "Schema or parser drift",
    "impact": "Fictional events arrive but important fields are lost, renamed, or misinterpreted.",
    "design_response": "Version schemas, test required fields, alert on parse failures, preserve raw source context conceptually, and validate changes.",
    "validation": "Detect one missing required field and trace it to a version change.",
    "stop": "Critical events cannot be interpreted consistently."
  },
  {
    "failure": "Central platform outage",
    "impact": "Fictional detection, investigation, change validation, and recovery proof may fail together.",
    "design_response": "Use local or alternate evidence, action limits, manual review, source buffering conceptually, recovery priorities, and post-outage reconciliation.",
    "validation": "Show which minimum questions remain answerable during the outage and how evidence is reconciled later.",
    "stop": "High-impact actions continue without reliable evidence or owner approval."
  },
  {
    "failure": "Retention mismatch",
    "impact": "Fictional evidence may disappear before investigation, review, audit, or recovery validation is complete.",
    "design_response": "Map retention to purpose, risk, case lifecycle, legal or policy need, privacy, storage, and deletion evidence.",
    "validation": "Compare one incident, recovery, and access-review timeline against retention settings.",
    "stop": "Required evidence expires before the approved question can be answered."
  },
  {
    "failure": "Alert noise overwhelms review",
    "impact": "Fictional important signals may be delayed or ignored.",
    "design_response": "Improve context, grouping, thresholds, ownership, suppression rules, feedback, and question-based detection design.",
    "validation": "Measure whether alert volume, duplicates, false positives, and time-to-decision improve without losing coverage.",
    "stop": "The queue cannot support timely review of high-impact signals."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Start with evidence questions",
    "questions": "Which fictional defender, service, privacy, recovery, governance, and leadership questions must be answerable?",
    "output": "Evidence-question register.",
    "stop": "Do not collect events only because a source can produce them."
  },
  {
    "step": "2",
    "title": "Map sources and owners",
    "questions": "Which fictional systems, identities, services, networks, data stores, suppliers, backups, and change processes produce relevant evidence?",
    "output": "Source inventory with owner, purpose, health, and lifecycle.",
    "stop": "Pause if a critical source has no owner or health signal."
  },
  {
    "step": "3",
    "title": "Design minimum event fields",
    "questions": "Which fictional time, actor, action, target, purpose, decision, result, source, integrity, owner, and closure fields are necessary?",
    "output": "Event-schema and minimum-field standard.",
    "stop": "Reject both context-poor events and unnecessary sensitive content."
  },
  {
    "step": "4",
    "title": "Define source health and time quality",
    "questions": "How will fictional missing, delayed, duplicated, malformed, unsynchronized, or unhealthy evidence be detected?",
    "output": "Source-health, time-quality, and schema-monitoring plan.",
    "stop": "Do not claim visibility if source failure is invisible."
  },
  {
    "step": "5",
    "title": "Design transport, collection, and normalization",
    "questions": "How does fictional evidence move from source to analysis while preserving context, integrity, version, and failure state?",
    "output": "Evidence-chain architecture.",
    "stop": "Pause if transport or normalization can silently drop required meaning."
  },
  {
    "step": "6",
    "title": "Protect access, privacy, and retention",
    "questions": "Who may view, search, export, administer, alter, retain, or delete fictional evidence, and for how long?",
    "output": "Evidence-access, minimization, retention, and deletion plan.",
    "stop": "Do not collect or retain sensitive evidence without approved purpose and owner."
  },
  {
    "step": "7",
    "title": "Map coverage and blind spots",
    "questions": "Which fictional questions are fully, partially, or not answerable, and which sources or assumptions create uncertainty?",
    "output": "Coverage, blind-spot, and confidence matrix.",
    "stop": "Do not hide gaps behind a large event volume."
  },
  {
    "step": "8",
    "title": "Design failure and recovery",
    "questions": "What happens when fictional sources, time, network, identity, storage, normalization, or the central platform fail?",
    "output": "Visibility resilience, degraded-mode, and reconciliation plan.",
    "stop": "Do not allow high-impact decisions to continue without minimum evidence and approval."
  },
  {
    "step": "9",
    "title": "Validate end-to-end evidence",
    "questions": "Can a fictional event be traced from source through collection, analysis, case, decision, retention, recovery, and closure?",
    "output": "End-to-end evidence validation package.",
    "stop": "Do not approve based only on dashboard appearance."
  },
  {
    "step": "10",
    "title": "Govern change and improvement",
    "questions": "How are fictional sources, schemas, rules, dashboards, access, retention, blind spots, exceptions, and corrective actions reviewed?",
    "output": "Visibility governance and improvement plan.",
    "stop": "Do not allow evidence architecture to drift silently."
  }
];
const owners = [
  {
    "role": "Mission owner",
    "owns": "Fictional critical services, user outcomes, acceptable uncertainty, decision needs, and business residual risk.",
    "decision": "Which evidence questions matter most to the mission.",
    "evidence": "Mission priorities, decision needs, service impact, and risk acceptance."
  },
  {
    "role": "Security architect",
    "owns": "Fictional visibility principles, evidence questions, source patterns, resilience, privacy, tradeoffs, and integrated review.",
    "decision": "Whether the visibility architecture supports prevention, detection, response, recovery, governance, and mission decisions.",
    "evidence": "Coverage map, evidence chain, failure analysis, decisions, and validation plan."
  },
  {
    "role": "Source-system owner",
    "owns": "Fictional source generation, event quality, schema, version, health, access, change, and recovery.",
    "decision": "Which events and fields the source can provide reliably.",
    "evidence": "Source inventory, schema, health, change records, samples, and validation."
  },
  {
    "role": "Identity and access owner",
    "owns": "Fictional identity, authorization, privilege, lifecycle, session, approval, and recovery evidence.",
    "decision": "Which identity events and contexts are required and who may access them.",
    "evidence": "Identity schema, coverage, access controls, source health, and review."
  },
  {
    "role": "Application and service owner",
    "owns": "Fictional request, dependency, error, performance, change, service health, and recovery evidence.",
    "decision": "Which service questions and outcomes must be observable.",
    "evidence": "Service events, dependency map, health, error records, versions, and validation."
  },
  {
    "role": "Data and privacy owner",
    "owns": "Fictional data categories, fields, purpose, minimization, access, retention, deletion, and privacy impact.",
    "decision": "Which evidence fields are necessary and proportionate.",
    "evidence": "Field inventory, purpose map, access review, retention, deletion, and exception."
  },
  {
    "role": "Detection and evidence platform owner",
    "owns": "Fictional collection, normalization, source health, time quality, storage, search, dashboards, alerts, access, and platform recovery.",
    "decision": "Whether evidence remains trustworthy, available, and usable.",
    "evidence": "Platform health, schema tests, source status, access, retention, alerts, and recovery records."
  },
  {
    "role": "Response and case owner",
    "owns": "Fictional evidence use in triage, case linkage, decisions, communication, correction, and closure.",
    "decision": "Whether available evidence supports a proportionate action and stated confidence.",
    "evidence": "Case notes, evidence references, decisions, approvals, actions, corrections, and closure."
  },
  {
    "role": "Recovery owner",
    "owns": "Fictional minimum evidence during failure, source restoration, platform recovery, reconciliation, and recovery validation.",
    "decision": "Whether visibility and trust are restored enough to resume normal operation.",
    "evidence": "Recovery sequence, source restoration, reconciliation, service checks, and signoff."
  },
  {
    "role": "Governance and risk owner",
    "owns": "Fictional access exceptions, retention decisions, blind spots, architecture drift, corrective actions, residual risk, and final acceptance.",
    "decision": "Whether remaining visibility and privacy risks are acceptable.",
    "evidence": "Decision records, exception register, blind-spot acceptance, deadlines, corrective evidence, and signoff."
  }
];
const evidenceMatrix = [
  {
    "id": "VIS-01",
    "source": "Fictional coverage map",
    "observation": "Identity and application activity are visible, but database administration, backup changes, and recovery actions are not.",
    "supports": "Several high-impact questions cannot be answered completely.",
    "limits": "Does not prove harmful activity occurred.",
    "use": "Add administrative and recovery evidence with owner, access, health, and retention controls."
  },
  {
    "id": "VIS-02",
    "source": "Fictional source-health dashboard",
    "observation": "The management-zone source stopped reporting forty minutes before an administrative change.",
    "supports": "Confidence in the administrative timeline is reduced.",
    "limits": "Does not prove the change was unauthorized.",
    "use": "Preserve uncertainty, seek independent evidence, validate the change, and restore source health."
  },
  {
    "id": "VIS-03",
    "source": "Fictional time-quality report",
    "observation": "Three sources differ by several minutes during a recovery exercise.",
    "supports": "Event order may be unreliable across those sources.",
    "limits": "Does not prove any event is false.",
    "use": "Use receipt time, sequence, service state, and alternate evidence to reconstruct the timeline cautiously."
  },
  {
    "id": "VIS-04",
    "source": "Fictional event-schema review",
    "observation": "A parser update removed the approver and target fields from privileged-access events.",
    "supports": "Attribution and authorization evidence became incomplete after the version change.",
    "limits": "Does not prove the original source stopped producing the fields.",
    "use": "Restore the schema, validate parsing, preserve version context, and recheck affected events."
  },
  {
    "id": "VIS-05",
    "source": "Fictional privacy review",
    "observation": "Application logs store full support-message content even though category and status fields answer the approved question.",
    "supports": "The evidence design collects more personal content than necessary.",
    "limits": "Does not prove the content has been accessed improperly.",
    "use": "Minimize fields, restrict access, review retention, and validate that required questions remain answerable."
  },
  {
    "id": "VIS-06",
    "source": "Fictional platform-access matrix",
    "observation": "One logging administrator can change sources, parsers, retention, access, and deletion without independent approval.",
    "supports": "Privilege concentration may allow one identity to alter evidence and proof of the alteration.",
    "limits": "Does not prove improper change occurred.",
    "use": "Separate duties, require approval, preserve independent administrative evidence, and review sessions."
  },
  {
    "id": "VIS-07",
    "source": "Fictional retention review",
    "observation": "Privileged-session evidence expires before the scheduled access review and recovery exercise review.",
    "supports": "Retention does not match approved governance and recovery needs.",
    "limits": "Does not prove a current investigation lacks evidence.",
    "use": "Align retention with purpose, privacy, review cycles, case lifecycle, and deletion evidence."
  },
  {
    "id": "VIS-08",
    "source": "Fictional alert-quality dashboard",
    "observation": "Duplicate low-context alerts consume most analyst time while one high-impact source-health alert waited two hours.",
    "supports": "Noise and prioritization weaken visibility outcomes.",
    "limits": "Does not prove every duplicate is unnecessary.",
    "use": "Group duplicates, enrich context, tune ownership and thresholds, and prioritize source-health and mission-impact signals."
  }
];
const commonMistakes = [
  "Collecting every fictional event because it is available instead of starting with approved evidence questions.",
  "Using event volume as a substitute for visibility quality.",
  "Logging authentication while omitting authorization, approval, privilege, target, result, lifecycle, and recovery context.",
  "Failing to monitor fictional source health, transport delay, schema changes, parser failures, duplication, and time quality.",
  "Assuming a central platform contains complete evidence because events appear on a dashboard.",
  "Collecting full sensitive content when categories, identifiers, status, or minimum metadata would answer the question.",
  "Allowing one fictional administrator to change sources, parsing, access, retention, deletion, alerts, and all administrative evidence.",
  "Recording allowed network or service activity while omitting denied attempts, rule changes, and recovery paths.",
  "Treating time stamps as exact without documenting source and clock quality.",
  "Normalizing events so aggressively that source-specific meaning, version, and uncertainty are lost.",
  "Setting retention by storage convenience instead of purpose, privacy, risk, case lifecycle, access review, and recovery needs.",
  "Designing alerts without owner, question, context, evidence limitations, response path, or feedback loop.",
  "Failing to preserve minimum fictional evidence during central-platform, identity, network, storage, or source failure.",
  "Using real logs, internal system names, usernames, addresses, identifiers, supplier records, or architecture details in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What best describes logging and visibility by design?",
    "choices": [
      "Turning on every available log source.",
      "Planning fictional evidence questions, fields, sources, health, time, privacy, access, retention, ownership, resilience, and validation before incidents occur.",
      "Building one large dashboard.",
      "Keeping logs forever."
    ],
    "answer": 1,
    "explanation": "Visibility by design begins with the decisions and questions evidence must support, then builds trustworthy and proportionate collection around them."
  },
  {
    "question": "Why is source health necessary?",
    "choices": [
      "It makes dashboards look better.",
      "It helps distinguish no activity from no evidence.",
      "It replaces event integrity.",
      "It removes the need for owners."
    ],
    "answer": 1,
    "explanation": "Without source-health evidence, a quiet source may be mistaken for a safe environment."
  },
  {
    "question": "A fictional parser update removes approver and target fields. What is the strongest interpretation?",
    "choices": [
      "The original actions were unauthorized.",
      "The evidence became incomplete after a version change, so parsing and affected events must be validated.",
      "The logging platform should be deleted.",
      "Time quality is automatically wrong."
    ],
    "answer": 1,
    "explanation": "Schema and parser drift can reduce evidence quality without proving anything about the underlying action."
  },
  {
    "question": "Which event design best supports privacy?",
    "choices": [
      "Store full message content for every event.",
      "Collect only approved fields necessary to answer the fictional evidence question, with restricted access and retention.",
      "Delete all logs immediately.",
      "Give every analyst export access."
    ],
    "answer": 1,
    "explanation": "Data minimization preserves the required evidence while reducing unnecessary privacy and access risk."
  },
  {
    "question": "A central fictional logging platform fails. What is the strongest response?",
    "choices": [
      "Continue every high-impact action as normal.",
      "Use minimum alternate evidence, action limits, manual review, source buffering conceptually, recovery priorities, and later reconciliation.",
      "Assume no event occurred.",
      "Disable all systems permanently."
    ],
    "answer": 1,
    "explanation": "Visibility resilience preserves cautious decision-making and reconciliation during platform failure."
  },
  {
    "question": "What is strongest evidence that fictional visibility works?",
    "choices": [
      "The dashboard contains many charts.",
      "An event can be traced from source through health, time, collection, analysis, case, decision, retention, recovery, and closure.",
      "The platform stores more data than before.",
      "No analyst has complained."
    ],
    "answer": 1,
    "explanation": "End-to-end validation proves that evidence remains usable, trustworthy, owned, and connected to decisions."
  },
  {
    "question": "What makes an A2.6 portfolio artifact safe to share?",
    "choices": [
      "Only real usernames are removed.",
      "The real logs are shortened.",
      "Every organization, system, identity, record, source, dashboard, alert, decision, date, and outcome is invented.",
      "Only passwords are removed."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects real people, systems, evidence, and architecture."
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

export default function LoggingAndVisibilityByDesignPage() {
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
              Lesson 6 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Visibility Architecture
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A2.6 Logging and Visibility by Design
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how advanced defenders design fictional evidence before
            incidents occur by defining the questions that matter, selecting
            proportionate sources and fields, monitoring source health and time
            quality, protecting privacy and access, preserving resilience, and
            validating the complete evidence chain.
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
          lessonTitle="Logging and Visibility by Design"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional organizations, systems, identities, records, sources, dashboards, alerts, decisions, dates, and outcomes.",
            "I understand that more events do not automatically create better visibility.",
            "I will begin with approved evidence questions and collect only the fields necessary to answer them.",
            "I will not upload or reproduce real logs, usernames, system names, addresses, identifiers, supplier records, private content, or architecture details.",
            "I will analyze only supplied fictional evidence and will not access, query, test, change, or investigate real systems.",
            "I will document source health, time quality, schema version, privacy, access, retention, blind spots, resilience, confidence, and limitations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Dashboard Can Be Green while the Evidence Is Failing"
        >
          <p className="leading-8">
            A fictional monitoring platform shows normal application and
            identity activity. However, the management source stopped reporting
            forty minutes before an administrative change, three clocks disagree
            during recovery, a parser update removed approver and target fields,
            full support-message content is collected unnecessarily, and one
            administrator controls sources, access, retention, and deletion.
            The dashboard contains data, but confidence in the evidence is weak.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Log collection
              </p>
              <p className="mt-2 leading-7">
                Turn on many fictional sources, keep large volumes, and assume
                events in one platform are complete and trustworthy.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Visibility by design
              </p>
              <p className="mt-2 leading-7">
                Start with questions, collect minimum fields, monitor source and
                time quality, protect access and privacy, preserve failure
                evidence, and validate end to end.
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
          title="Defenders Can Act Only on Evidence They Can Trust"
        >
          <p className="leading-8">
            Fictional controls may prevent or detect activity, but defenders
            still need reliable evidence to understand what happened, what did
            not happen, who or what acted, which systems were affected, how
            confident the timeline is, whether the source was healthy, and what
            decision is justified. Visibility architecture supports security,
            service reliability, privacy, recovery, governance, and leadership
            communication at the same time.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Answer questions",
                "Connect fictional evidence to specific defender, owner, privacy, recovery, governance, and leadership decisions.",
              ],
              [
                "Measure confidence",
                "Use fictional source health, time quality, integrity, context, and limitations to avoid overclaiming.",
              ],
              [
                "Preserve resilience",
                "Keep fictional minimum evidence and cautious decision-making available when sources or platforms fail.",
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
          title="Question → Source → Schema → Health → Analysis → Decision → Retention → Improvement"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Question", "Define the fictional defender, service, privacy, recovery, governance, or leadership decision that evidence must support."],
              ["Source", "Select the fictional identity, system, service, network, data, supplier, backup, or change source that can answer it."],
              ["Schema", "Capture fictional time, actor, action, target, purpose, decision, result, source, owner, and integrity fields."],
              ["Health", "Monitor fictional source availability, transport, delay, duplication, parsing, schema, time, and integrity."],
              ["Analysis", "Normalize and correlate fictional events while preserving source meaning, uncertainty, and limitations."],
              ["Decision", "Use fictional evidence confidence, context, owner, and mission impact to support a proportionate action."],
              ["Retention", "Keep fictional evidence for approved purpose and duration with controlled access and deletion evidence."],
              ["Improvement", "Review fictional blind spots, noise, failures, changes, corrective actions, and architecture drift."],
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
          title="Language for Evidence Architecture"
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
            Evidence Questions
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions the Fictional Architecture Must Answer
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceQuestions.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.audience}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {item.question}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Required sources", item.required_sources],
                    ["Minimum fields", item.minimum_fields],
                    ["Risk if missing", item.risk_if_missing],
                    ["Validation", item.validation],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.audience}-${label}`}
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
            Source Catalog
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Evidence Sources with Different Risks
          </h2>

          <div className="mt-6 grid gap-5">
            {sourceCatalog.map((item) => (
              <article
                key={item.source}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.source}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.purpose}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Key fields", item.key_fields],
                    ["Privacy consideration", item.privacy],
                    ["Failure pattern", item.failure_mode],
                    ["Primary owners", item.owner],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.source}-${label}`}
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
            Event Schema Design
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Field Groups for Trustworthy Fictional Evidence
          </h2>

          <div className="mt-6 grid gap-5">
            {schemaDesign.map((item) => (
              <article
                key={item.field_group}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.field_group}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.fields}</p>

                <div className="mt-4 grid gap-4 lg:grid-cols-4">
                  {[
                    ["Why it matters", item.why],
                    ["Weak design", item.weak_design],
                    ["Strong design", item.strong_design],
                    ["Validation", item.validation],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.field_group}-${label}`}
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
            Visibility Failure Modes
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Ways Fictional Evidence Can Become Unreliable
          </h2>

          <div className="mt-6 grid gap-5">
            {visibilityFailureModes.map((item) => (
              <article
                key={item.failure}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.failure}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Impact", item.impact],
                    ["Design response", item.design_response],
                    ["Validation", item.validation],
                    ["Stop condition", item.stop],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.failure}-${label}`}
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
            Ten Steps from Evidence Questions to Visibility Governance
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
            Visibility Ownership
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Owners for Evidence, Privacy, Decisions, Recovery, and Risk
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
          title="Fake Northbridge Visibility Architecture Dashboard"
          subtitle="Fictional source, schema, time, privacy, access, retention, alert, and recovery review for training only."
          metrics={[
            {
              label: "Evidence sources",
              value: "23",
              note: "Fictional identity, application, network, data, supplier, administrative, logging, and recovery sources are included.",
            },
            {
              label: "Critical blind spots",
              value: "6",
              note: "Management, backup, recovery, source health, parser version, and administrative evidence require improvement.",
            },
            {
              label: "Evidence confidence",
              value: "Low",
              note: "Source outage, time mismatch, schema drift, overcollection, privilege concentration, and retention gaps reduce confidence.",
            },
          ]}
        />

        <FakeAlertCard
          title="Visibility Gaps and Evidence-Control Concentration Reduce Confidence"
          severity="High"
          time="7:11 PM"
          source="Fake Northbridge Evidence Architecture Console"
          details="The fictional management source stopped reporting before an administrative change, three sources disagree on time, a parser update removed critical fields, privileged-session evidence expires too early, and one administrator controls sources, parsing, access, retention, and deletion."
          recommendation="Pause high-confidence conclusions, preserve uncertainty, restore source health, validate time and schema, minimize sensitive fields, separate evidence administration, align retention, improve alert prioritization, and verify the end-to-end evidence chain."
        />

        <FakeLogPanel
          title="Fake Visibility Architecture Review Timeline"
          logs={[
            "18:00 SOURCE identity='healthy'",
            "18:01 SOURCE application='healthy'",
            "18:02 SOURCE management='silent'",
            "18:42 CHANGE privileged-action='observed'",
            "18:43 HEALTH management-source='missing-40m'",
            "18:50 TIME source-a='18:50'",
            "18:50 TIME source-b='18:46'",
            "18:50 TIME source-c='18:53'",
            "18:55 PARSER version='v7'",
            "18:56 FIELD approver='missing'",
            "18:56 FIELD target='missing'",
            "19:00 PRIVACY full-message-content='collected'",
            "19:02 ACCESS logging-admin='sources,parsers,retention,delete'",
            "19:05 RETENTION privileged-session='expires-before-review'",
            "19:08 ALERT duplicate-low-context='high-volume'",
            "19:11 STATUS evidence-confidence='low'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence before Approving the Visibility Architecture
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
          title="Should the Fictional Visibility Architecture Be Approved?"
          question="Should the current fictional Northbridge logging and visibility architecture be approved?"
          evidence={[
            "Identity and application activity are visible, but database administration, backup changes, and recovery actions are not.",
            "The management-zone source stopped reporting forty minutes before an administrative change.",
            "Three sources differ by several minutes during a recovery exercise.",
            "A parser update removed approver and target fields from privileged-access events.",
            "Application logs store full support-message content even though minimum metadata would answer the approved question.",
            "One logging administrator can change sources, parsers, retention, access, and deletion without independent approval.",
            "Privileged-session evidence expires before scheduled reviews.",
            "Duplicate low-context alerts consume most analyst time.",
          ]}
          options={[
            "No. Pause high-confidence conclusions, close blind spots, restore source and time quality, repair schema coverage, minimize data, separate administration, align retention, reduce noise, and validate the evidence chain end to end.",
            "Yes, because the dashboard contains many events.",
            "Yes, because identity and application sources are healthy.",
            "Yes, because storage volume is high.",
          ]}
          bestAnswer={0}
          explanation="Visibility architecture approval requires question-driven coverage, trustworthy sources, reliable time and schema, privacy-aware fields, protected administration, appropriate retention, resilient evidence, useful prioritization, and end-to-end validation."
        />

        <SectionCard
          eyebrow="Common Visibility Mistakes"
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
          title="Build a Fictional Logging and Visibility Architecture"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Redesign the Northbridge Evidence Architecture
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                copy, quote, lightly modify, summarize, or reproduce real logs,
                usernames, addresses, system names, identifiers, configurations,
                dashboards, alerts, supplier records, private content, or
                internal architecture.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Fictional evidence-question register by audience and decision.</li>
                <li>Source inventory with purpose, owner, schema, health, access, retention, and recovery.</li>
                <li>Minimum event-field and schema standard.</li>
                <li>Source-health, time-quality, integrity, and parser-version monitoring.</li>
                <li>Evidence-chain diagram from source through collection, analysis, case, decision, retention, and closure.</li>
                <li>Privacy minimization, access, export, retention, deletion, and administrative-control plan.</li>
                <li>Coverage, blind-spot, confidence, and evidence-limitations matrix.</li>
                <li>Alert-quality, ownership, prioritization, and feedback plan.</li>
                <li>Visibility failure, degraded-mode, recovery, reconciliation, and end-to-end validation plan.</li>
                <li>Reflection, revision history, and complete fictionalization statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This activity creates a fictional educational design only. It does
            not authorize access, log collection, querying, monitoring, testing,
            configuration, investigation, recovery, or analysis involving any
            real system.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Management Source Stops Reporting"
          scenario="A fictional management-zone source becomes silent forty minutes before an administrative change. The central dashboard still shows overall system health as green."
          choices={[
            {
              label: "Choice A",
              response: "Reduce confidence, preserve the gap, seek independent evidence, validate the change and source health, limit high-impact conclusions, restore the source, reconcile events, and document uncertainty.",
              outcome: "Best professional choice. The response distinguishes missing evidence from safe behavior without assuming misconduct.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Assume no unusual activity occurred because no events were received.",
              outcome: "Risky. Silence may reflect source failure rather than absence of activity.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Declare the administrator malicious.",
              outcome: "Unsafe. The evidence gap lowers confidence but does not prove intent or harm.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Logs Contain Too Much Personal Content"
          scenario="A fictional application records full support-message content even though event category, service, status, actor, result, and case identifier answer the approved security and service questions."
          choices={[
            {
              label: "Choice A",
              response: "Minimize the event schema, restrict access, review retention and deletion, preserve only approved fields, validate that required questions remain answerable, and document the privacy decision.",
              outcome: "Best professional choice. The response preserves useful evidence while reducing unnecessary privacy risk.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Keep everything forever because more evidence is always safer.",
              outcome: "Risky. Overcollection increases privacy, access, retention, and governance risk.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Delete all application evidence immediately.",
              outcome: "Unsafe. The design should minimize and govern evidence, not eliminate approved visibility.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Preserve Minimum Evidence during a Multi-Source Failure"
        >
          <p className="leading-8">
            Extend the fictional Northbridge design for a combined failure of
            the central logging platform, one identity source, and reliable time
            synchronization during a recovery event. Critical restoration must
            continue, but high-impact decisions require evidence. Design the
            minimum alternate sources, event fields, independent ownership,
            manual review, action limits, source buffering conceptually,
            chronology strategy, reconciliation, privacy controls, and recovery
            validation needed to continue safely.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              [
                "Required architecture",
                "Show fictional minimum evidence questions, alternate sources, health signals, source and receipt time, identity assurance, approvals, access, retention, and owners.",
              ],
              [
                "Required validation",
                "Explain how the design preserves cautious decisions, restores the evidence chain, reconciles delayed events, protects privacy, and proves closure.",
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
          title="Logging and Visibility by Design Checklist"
          items={[
            "I can define fictional evidence questions for identity, services, networks, data, suppliers, administration, recovery, governance, and leadership.",
            "I can select fictional sources and minimum fields based on approved questions rather than collecting every available event.",
            "I can design fictional event fields for time, actor, action, target, purpose, decision, result, source, integrity, owner, and closure.",
            "I can monitor fictional source health, delay, duplication, parsing, schema version, time quality, transport, and integrity.",
            "I can distinguish fictional no activity from no evidence.",
            "I can minimize fictional sensitive content while preserving approved security, service, privacy, recovery, and governance questions.",
            "I can separate fictional evidence-source, platform, access, retention, deletion, rule, and validation duties.",
            "I can map fictional evidence coverage, blind spots, confidence, limitations, and residual risk.",
            "I can design fictional visibility resilience during source, network, identity, time, storage, parser, or central-platform failure.",
            "I can validate fictional evidence from source through collection, analysis, case, decision, retention, recovery, and closure.",
            "I can govern fictional source changes, schemas, dashboards, alerts, access, retention, exceptions, corrective actions, and architecture drift.",
            "I will never use real logs, usernames, system names, addresses, identifiers, configurations, supplier records, private content, or architecture details in this portfolio.",
          ]}
        />

        <MiniQuiz
          title="A2.6 Mini Quiz: Logging and Visibility by Design"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Logging and Visibility Architecture Package for Northbridge. Include the evidence-question register, source catalog, ownership map, event-schema standard, source-health plan, time-quality plan, integrity controls, normalization and correlation design, evidence-chain diagram, privacy minimization, access model, retention and deletion plan, administrative evidence, coverage and blind-spot matrix, confidence model, alert-quality plan, platform-failure design, degraded-mode evidence, recovery and reconciliation plan, end-to-end validation, governance, residual risk, reflection, revision history, and a statement that every organization, system, identity, record, source, dashboard, alert, decision, date, and outcome is invented."
          tips={[
            "Begin with fictional questions and decisions rather than event volume.",
            "Show source health, time quality, schema version, integrity, ownership, and limitations for every critical source.",
            "Include at least one privacy overcollection problem and redesign the event schema.",
            "Include one central-platform or source failure and show how minimum evidence and cautious decisions continue.",
            "Keep every identity, system, record, source, dashboard, alert, decision, date, and outcome completely invented.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready to Design Resilience and Recovery Planning?"
        >
          <p className="leading-8">
            Before moving to A2.7, rate your readiness from 1 to 5 for each area:
            evidence questions, source selection, event schema, source health,
            time quality, integrity, privacy, access, retention, blind spots,
            alert quality, degraded visibility, reconciliation, and end-to-end
            validation.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why fictional event volume is not the same as visibility quality.",
              "I can define fictional evidence questions and the minimum sources and fields needed to answer them.",
              "I can identify fictional source-health, time-quality, parser, schema, privacy, access, and retention failures.",
              "I can judge fictional evidence confidence without treating missing evidence as proof of safe or harmful behavior.",
              "I can design fictional minimum visibility during a source or central-platform failure and reconcile evidence afterward.",
              "I can keep the entire visibility architecture portfolio fully invented and safe to share.",
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
            Record one fictional evidence question you can answer confidently,
            one source-health or privacy gap you would fix first, and one
            recovery question you will carry into A2.7.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Logging and visibility by design begin with fictional evidence questions, not event volume.",
            "Useful fictional evidence preserves time, actor, action, target, purpose, decision, result, source, integrity, owner, and closure context.",
            "Source health helps distinguish no activity from no evidence.",
            "Time quality, schema version, parsing, transport, duplication, and integrity affect evidence confidence.",
            "Data minimization preserves approved evidence value while reducing privacy, access, retention, and governance risk.",
            "Administrative changes to sources, rules, access, retention, deletion, and recovery require independent evidence.",
            "Coverage maps should state which fictional questions are fully, partially, or not answerable.",
            "Visibility resilience preserves minimum evidence, cautious decisions, recovery priorities, and later reconciliation during failure.",
            "End-to-end validation traces fictional evidence from source through collection, analysis, case, decision, retention, recovery, and closure.",
            "Every CyberShield visibility artifact must remain fully fictional, defensive, non-operational, privacy-safe, and incapable of exposing real systems.",
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