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
const previousLesson = `${modulePath}/logging-and-visibility-by-design`;
const nextLesson = `${modulePath}/secure-defaults-and-hardening-strategy`;

const objectives = [
  "Explain resilience and recovery as the coordinated fictional design of continuity, degradation, backup, restoration, identity, data, evidence, communication, ownership, validation, and improvement.",
  "Distinguish fictional availability, redundancy, backup, restoration, continuity, disaster recovery, rollback, failover, and complete service recovery.",
  "Map fictional critical functions, recovery dependencies, recovery order, recovery identities, restore states, communication paths, evidence sources, and owner decisions.",
  "Evaluate fictional recovery architecture for shared failure domains, untested backups, incomplete identity or logging restoration, unsafe temporary access, supplier dependence, and weak closure.",
  "Create a portfolio-ready fictional resilience and recovery package using only invented organizations, systems, identities, records, evidence, decisions, dates, and outcomes."
];
const vocabulary = [
  [
    "Resilience",
    "The fictional ability of a service to continue safely, degrade predictably, recover from approved states, and improve after disruption."
  ],
  [
    "Availability",
    "The fictional degree to which a service or function is usable when users and owners need it."
  ],
  [
    "Continuity",
    "The fictional ability to preserve critical mission functions during disruption, possibly in a limited or alternate mode."
  ],
  [
    "Recovery",
    "The fictional process of restoring identity, data, systems, services, evidence, access, communication, and trust to approved states."
  ],
  [
    "Backup",
    "A fictional preserved copy or state intended to support restoration, retention, continuity, or evidence needs."
  ],
  [
    "Restore",
    "The fictional act of returning data, configuration, identity state, service, or another asset from an approved recovery source."
  ],
  [
    "Rollback",
    "The fictional act of returning a change, configuration, release, or service state to a previously approved state."
  ],
  [
    "Failover",
    "The fictional shift of service or control to an approved alternate system, path, provider, or process."
  ],
  [
    "Safe degraded mode",
    "A fictional limited operating state that preserves critical mission functions while higher-risk or nonessential features remain restricted."
  ],
  [
    "Recovery point objective",
    "A fictional business-defined limit on how much recent data or state may be unavailable after recovery."
  ],
  [
    "Recovery time objective",
    "A fictional business-defined target for restoring a function or service after disruption."
  ],
  [
    "Recovery sequence",
    "The fictional approved order in which identities, dependencies, data, services, logging, access, and user functions are restored."
  ],
  [
    "Known good state",
    "A fictional recovery state whose integrity, ownership, version, origin, and validation are documented."
  ],
  [
    "Recovery identity",
    "A fictional identity reserved for approved recovery actions and protected separately from normal production administration."
  ],
  [
    "Recovery dependency",
    "A fictional identity, service, network, data, supplier, tool, time source, evidence source, owner, or communication path required for restoration."
  ],
  [
    "Recovery validation",
    "The fictional evidence-based process proving restored identity, data, service, logging, access, dependencies, and user outcomes function as approved."
  ],
  [
    "Recovery closure",
    "The fictional process of ending temporary access and paths, reconciling evidence, documenting residual risk, obtaining owner signoff, and returning to governed operation."
  ],
  [
    "Recovery exercise",
    "A fictional safe test of continuity, restoration, communication, evidence, ownership, and validation using invented systems and data."
  ],
  [
    "Single point of failure",
    "A fictional component, identity, service, supplier, owner, path, or process whose failure can remove a critical mission function."
  ],
  [
    "Correlated failure",
    "A fictional event in which several supposedly separate controls fail together because they share one dependency or assumption."
  ],
  [
    "Resilience debt",
    "Fictional accumulated recovery weakness caused by untested changes, stale documentation, hidden dependencies, exceptions, or deferred corrective actions."
  ],
  [
    "Residual recovery risk",
    "The fictional risk remaining after continuity and recovery controls are applied, including uncertainty, dependencies, exceptions, and untested conditions."
  ]
];
const criticalFunctions = [
  {
    "function": "User authentication and authorization",
    "mission": "Allow fictional users and services to access approved functions while blocking unauthorized actions.",
    "dependencies": "Identity provider, authorization service, reliable time, role data, network path, logging, and owner approval.",
    "degraded_mode": "Permit only preapproved low-risk user functions; block high-impact administration and broad privilege.",
    "recovery_order": "Restore identity core, role data, policy decisions, service registration, logging, then broader access.",
    "validation": "Approved access works, denied access remains blocked, sessions and lifecycle are correct, and evidence is reliable."
  },
  {
    "function": "Public application service",
    "mission": "Provide fictional user requests and approved status information.",
    "dependencies": "Public entry, application services, identity when needed, data, time, logging, supplier services, and health monitoring.",
    "degraded_mode": "Offer read-only or limited request functions while high-risk updates remain paused.",
    "recovery_order": "Restore application dependencies, service identities, data connection, logging, user access, and health checks.",
    "validation": "Critical user journeys succeed, errors are controlled, dependencies are healthy, and evidence is complete."
  },
  {
    "function": "Sensitive data service",
    "mission": "Preserve fictional protected records, integrity, minimum access, retention, and restoration.",
    "dependencies": "Data service, service identity, authorization, integrity records, backups, logging, recovery owner, and storage.",
    "degraded_mode": "Allow minimum read-only access for approved critical workflows while writes or exports remain restricted.",
    "recovery_order": "Validate restore source, recover data, confirm integrity, reconnect approved services, restore logging, then reopen writes.",
    "validation": "Integrity, field scope, authorization, retention, audit evidence, and service consistency are confirmed."
  },
  {
    "function": "Logging and evidence",
    "mission": "Preserve fictional security, service, administrative, and recovery evidence.",
    "dependencies": "Sources, transport, storage, time quality, schema, identity, access controls, backup, and evidence owner.",
    "degraded_mode": "Preserve minimum local or alternate evidence and limit high-impact actions requiring unavailable context.",
    "recovery_order": "Restore source health, time quality, transport, collection, parsing, storage, access, correlation, and reconciliation.",
    "validation": "Important events remain reconstructable, gaps are documented, delayed evidence is reconciled, and source health is normal."
  },
  {
    "function": "Administrative control",
    "mission": "Allow fictional authorized operators to manage systems safely and accountably.",
    "dependencies": "Privileged identity, approval, management path, session evidence, change system, rollback, logging, and owner.",
    "degraded_mode": "Permit only narrow emergency actions with separate approval, time limits, and independent evidence.",
    "recovery_order": "Restore privileged identity, approval, management path, session recording, change control, rollback, and review.",
    "validation": "Every administrative action is attributable, approved, scoped, recorded, reversible, and independently reviewed."
  },
  {
    "function": "Supplier-supported service",
    "mission": "Provide a fictional external capability required by the application.",
    "dependencies": "Supplier identity, integration path, contract scope, data limits, health, support communication, fallback, and owner.",
    "degraded_mode": "Use approved local fallback or suspend noncritical supplier-dependent features.",
    "recovery_order": "Validate supplier health, identity, interface, data scope, evidence, owner approval, and user impact before full use.",
    "validation": "Only approved supplier functions and data flows resume, with evidence, fallback, and owner signoff."
  },
  {
    "function": "Backup and restore service",
    "mission": "Preserve fictional approved states and support safe restoration.",
    "dependencies": "Backup source, storage, integrity, recovery identity, time, retention, restore service, evidence, and recovery owner.",
    "degraded_mode": "Continue protected backup creation where safe while delaying nonessential restore operations.",
    "recovery_order": "Restore backup control, validate integrity, confirm recovery identity, test restore, then support production recovery.",
    "validation": "Backups are present, readable, trusted, restorable, correctly retained, and independently owned."
  },
  {
    "function": "Status and stakeholder communication",
    "mission": "Provide fictional users, owners, responders, suppliers, and leaders with accurate decision-ready status.",
    "dependencies": "Case facts, service health, owner approvals, communication channels, templates, accessibility, and correction process.",
    "degraded_mode": "Use approved alternate channels and clearly state uncertainty, affected functions, next update, and user action.",
    "recovery_order": "Restore primary communication, reconcile status, issue corrections, confirm acknowledgment, and close updates.",
    "validation": "Messages are accurate, audience-appropriate, privacy-safe, timely, corrected when needed, and linked to decisions."
  }
];
const recoveryPhases = [
  {
    "phase": "Preparation",
    "question": "What fictional mission functions, dependencies, owners, restore states, identities, evidence, communication, and validation must exist before disruption?",
    "activities": "Business priorities, architecture map, recovery requirements, backup design, identity separation, exercises, runbooks, and communication planning.",
    "evidence": "Approved requirements, asset and dependency map, owner list, exercise results, backup records, and corrective actions.",
    "failure": "Recovery plans exist as documents but are not aligned with effective architecture or current owners."
  },
  {
    "phase": "Detection and declaration",
    "question": "What fictional evidence shows service degradation, control failure, data concern, supplier outage, or recovery need?",
    "activities": "Source-health review, service impact, confidence assessment, owner notification, incident linkage, and recovery declaration.",
    "evidence": "Alert, service health, evidence confidence, declaration time, decision owner, scope, and affected functions.",
    "failure": "Recovery starts too late, too broadly, or without clear authority and evidence."
  },
  {
    "phase": "Stabilization",
    "question": "How will the fictional organization protect people, data, evidence, critical services, and recovery options before restoration?",
    "activities": "Limit risky access, preserve evidence, protect backups, use safe degraded mode, coordinate suppliers, and communicate status.",
    "evidence": "Containment decision, temporary access, service state, backup protection, communication, and owner approval.",
    "failure": "Urgent actions destroy evidence, remove recovery options, or create uncontrolled access."
  },
  {
    "phase": "Dependency restoration",
    "question": "Which fictional identity, time, network, name, logging, storage, supplier, or control dependencies must return first?",
    "activities": "Restore foundational services in approved order, validate each dependency, and stop when evidence or ownership is insufficient.",
    "evidence": "Dependency checklist, restore action, integrity, health, owner, result, and next-gate approval.",
    "failure": "Application systems are restored before required identity, data, logging, or trust services."
  },
  {
    "phase": "Data and configuration restoration",
    "question": "Which fictional known state should be restored, and how will integrity, version, scope, and ownership be verified?",
    "activities": "Select restore source, validate integrity, restore data and configuration, compare versions, and document gaps.",
    "evidence": "Source state, owner, integrity, version, recovery point, restore result, and data consistency.",
    "failure": "A system starts successfully from an untrusted, incomplete, or outdated state."
  },
  {
    "phase": "Service restoration",
    "question": "How will fictional services return in a controlled order without reopening broad trust or hidden dependencies?",
    "activities": "Reconnect approved paths, activate service identities, restore controls, validate critical user journeys, and monitor residual risk.",
    "evidence": "Service health, identity, path, authorization, data, logging, errors, user journey, and owner signoff.",
    "failure": "The application appears online while identity, authorization, data, logging, or dependencies remain incomplete."
  },
  {
    "phase": "Evidence reconciliation",
    "question": "How will fictional missing, delayed, buffered, duplicated, or time-degraded evidence be reconciled?",
    "activities": "Restore sources, compare alternate records, document gaps, normalize chronology, update cases, and revise confidence.",
    "evidence": "Source health, gap register, sequence, receipt time, reconciliation result, case updates, and limitations.",
    "failure": "The team declares recovery without understanding evidence gaps or timeline uncertainty."
  },
  {
    "phase": "Access and exception closure",
    "question": "Which fictional temporary identities, paths, rules, supplier permissions, and emergency privileges must be removed?",
    "activities": "Expire access, close rules, end sessions, restore normal roles, validate effective state, and obtain owner approval.",
    "evidence": "Temporary-access register, removal event, rule closure, session end, effective-state check, and signoff.",
    "failure": "Emergency access becomes a permanent invisible bypass."
  },
  {
    "phase": "Business validation",
    "question": "Do fictional users and owners confirm that the complete mission outcome has returned safely?",
    "activities": "Validate critical workflows, data quality, support, communication, privacy, performance, and business priorities.",
    "evidence": "User journey, owner test, service status, data checks, communication, exceptions, and acceptance.",
    "failure": "Technical checks pass, but the actual user or mission function remains broken."
  },
  {
    "phase": "Closure and improvement",
    "question": "What fictional residual risk, corrective action, architecture change, owner, deadline, and future exercise result remain?",
    "activities": "Close case, document lessons, update architecture, assign actions, revise plans, and schedule validation.",
    "evidence": "Closure record, residual-risk decision, corrective actions, deadlines, architecture revision, and owner signoff.",
    "failure": "The same recovery weaknesses return because no accountable improvement occurs."
  }
];
const recoveryDependencies = [
  {
    "dependency": "Identity and authorization",
    "why": "Fictional users, services, administrators, suppliers, and recovery operators need controlled authority.",
    "risk": "Broad fail-open access or total lockout may occur if identity recovery is not independent.",
    "design": "Separate recovery identity, limited degraded roles, independent approval, source-health awareness, and post-use closure.",
    "validation": "Approved low-risk actions work, high-risk actions remain blocked, and all temporary authority expires."
  },
  {
    "dependency": "Reliable time",
    "why": "Fictional identity, evidence, sequence, approvals, expiry, retention, and recovery chronology depend on time quality.",
    "risk": "Events may appear out of order and access or evidence decisions may become unreliable.",
    "design": "Monitor time quality, retain source and receipt time, use alternate sequencing evidence, and reduce confidence when degraded.",
    "validation": "Recovery chronology can be reconstructed despite one degraded source."
  },
  {
    "dependency": "Network and service paths",
    "why": "Fictional identities, applications, data, logging, suppliers, backups, and management services require approved communication.",
    "risk": "Hidden dependencies may cause outage or emergency broad rules.",
    "design": "Document recovery paths, use narrow temporary rules, monitor changes, and close all exceptions after restoration.",
    "validation": "Required paths work, denied paths remain blocked, and temporary access is removed."
  },
  {
    "dependency": "Evidence and source health",
    "why": "Fictional recovery decisions require reliable records of actions, results, gaps, integrity, and owner approval.",
    "risk": "The team may restore systems without knowing what changed or whether evidence is complete.",
    "design": "Preserve alternate evidence, source health, minimum event fields, reconciliation, and independent administration.",
    "validation": "Recovery actions remain attributable and reconstructable during one platform outage."
  },
  {
    "dependency": "Known restore states",
    "why": "Fictional data, configuration, identity state, and services need trusted recovery sources.",
    "risk": "The organization may restore incomplete, altered, outdated, or incompatible states.",
    "design": "Protect integrity, version, ownership, retention, testing, dependency compatibility, and restore evidence.",
    "validation": "A complete fictional restore exercise proves integrity and service compatibility."
  },
  {
    "dependency": "Owners and decision authority",
    "why": "Fictional declaration, restoration, exception, communication, acceptance, and residual risk require authorized decisions.",
    "risk": "Recovery stalls or unsafe actions proceed without accountable approval.",
    "design": "Primary and alternate owners, escalation, decision thresholds, communication, and documented authority.",
    "validation": "A recovery exercise succeeds when one primary owner is unavailable."
  },
  {
    "dependency": "Supplier support and fallback",
    "why": "Fictional external identity, application, storage, communication, or monitoring services may be critical.",
    "risk": "The organization may lack direct control, evidence, or timely restoration.",
    "design": "Contract requirements, local fallback, status channels, evidence expectations, exit, and residual-risk ownership.",
    "validation": "The fictional mission continues in a limited mode during supplier outage."
  },
  {
    "dependency": "Communication channels",
    "why": "Fictional responders, users, suppliers, leaders, and owners need coordinated status and decisions.",
    "risk": "Conflicting actions, privacy exposure, delayed approval, and user harm may occur.",
    "design": "Primary and alternate channels, audience templates, verification, correction, accessibility, and cadence.",
    "validation": "A fictional exercise confirms timely, accurate, privacy-safe communication through an alternate channel."
  }
];
const recoveryRequirements = [
  {
    "category": "Mission continuity",
    "weak": "The fictional service should stay available.",
    "strong": "The critical support function must continue in a limited read-only mode while high-impact updates and administration remain blocked.",
    "validation": "Run fictional critical user journeys under normal and degraded conditions."
  },
  {
    "category": "Recovery time",
    "weak": "Restore quickly.",
    "strong": "The fictional identity and support functions must reach the approved minimum service state within the owner-defined recovery target.",
    "validation": "Measure declaration, dependency restoration, service availability, validation, and owner acceptance times."
  },
  {
    "category": "Recovery point",
    "weak": "Use recent backups.",
    "strong": "The fictional restore state must meet the owner-approved maximum acceptable data or configuration gap and document any missing state.",
    "validation": "Compare restored state with approved checkpoint, transaction sequence, and owner tolerance."
  },
  {
    "category": "Identity recovery",
    "weak": "Administrators can use emergency access.",
    "strong": "Fictional recovery access must use separate identity, independent approval, narrow targets, time limits, evidence, expiry, and post-use review.",
    "validation": "Exercise activation, use, evidence, revocation, restoration, and closure."
  },
  {
    "category": "Evidence recovery",
    "weak": "Logs should return.",
    "strong": "Fictional source health, time quality, minimum evidence, delayed-event reconciliation, gap documentation, and administrative evidence must be restored.",
    "validation": "Reconstruct one recovery action before, during, and after central-platform failure."
  },
  {
    "category": "Service validation",
    "weak": "The application loads.",
    "strong": "Fictional identity, authorization, data integrity, dependencies, logging, user journeys, support, privacy, and temporary-access closure must pass.",
    "validation": "Use a multi-owner recovery validation checklist and signoff."
  },
  {
    "category": "Exception closure",
    "weak": "Remove temporary rules later.",
    "strong": "Every fictional temporary identity, path, role, supplier permission, and rule must have owner, scope, expiration, monitoring, removal, and effective-state proof.",
    "validation": "Compare the exception register with actual identities, rules, sessions, and paths after recovery."
  },
  {
    "category": "Improvement",
    "weak": "Document lessons learned.",
    "strong": "Each fictional recovery weakness must have a corrective owner, action, deadline, architecture update, validation evidence, and closure decision.",
    "validation": "Review corrective evidence in the next exercise and confirm the weakness no longer repeats."
  }
];
const failureModes = [
  {
    "failure": "Backup exists but restore is untested",
    "impact": "Fictional data or configuration may be incomplete, unreadable, incompatible, or too old.",
    "design_response": "Use recurring safe restore exercises, integrity checks, owner validation, dependency testing, and documented recovery points.",
    "validation": "Restore a fully invented service state and validate identity, data, service, logging, and closure.",
    "stop": "No one can prove the backup supports the required mission outcome."
  },
  {
    "failure": "Recovery depends on production identity",
    "impact": "A fictional identity outage or compromise concern blocks the same recovery needed to restore trust.",
    "design_response": "Use separately governed recovery identities, custody, approval, narrow roles, evidence, and post-use closure.",
    "validation": "Perform a fictional recovery exercise while normal identity services are unavailable.",
    "stop": "Recovery authority cannot be established independently."
  },
  {
    "failure": "Application restored before dependencies",
    "impact": "The fictional service appears online while authorization, data, logging, time, or supplier functions remain unreliable.",
    "design_response": "Use gated dependency order and owner validation before reopening user or administrative functions.",
    "validation": "Confirm each dependency and critical user journey before declaring service restored.",
    "stop": "Any required dependency remains unhealthy or unowned."
  },
  {
    "failure": "Temporary recovery access remains open",
    "impact": "Fictional emergency identities, paths, rules, or supplier permissions become permanent bypasses.",
    "design_response": "Use expiration, closure checklist, effective-state review, session termination, rule removal, and owner signoff.",
    "validation": "Compare actual identities, rules, sessions, and paths with the approved normal architecture.",
    "stop": "Temporary access lacks current owner, expiration, or removal evidence."
  },
  {
    "failure": "Recovery evidence is incomplete",
    "impact": "The fictional team cannot explain who restored what, from which state, in what order, or with what result.",
    "design_response": "Preserve independent minimum evidence, source health, time quality, approvals, restore actions, validation, and reconciliation.",
    "validation": "Reconstruct one complete recovery timeline despite one source failure.",
    "stop": "Critical recovery actions cannot be attributed or validated."
  },
  {
    "failure": "Supplier outage removes a critical function",
    "impact": "The fictional mission may stop because local fallback, evidence, communication, or exit planning is insufficient.",
    "design_response": "Define local safe mode, alternate channel, supplier evidence, owner decisions, service priorities, and residual risk.",
    "validation": "Run a fictional supplier-outage tabletop using only invented systems and records.",
    "stop": "No approved fallback or owner decision exists for the critical function."
  },
  {
    "failure": "Recovery restores unsafe configuration",
    "impact": "The fictional service returns with outdated privilege, weak rules, missing logging, or incompatible dependencies.",
    "design_response": "Validate version, baseline, identity, segmentation, logging, data, dependencies, and current architecture before acceptance.",
    "validation": "Compare restored effective state with the approved baseline and current architecture requirements.",
    "stop": "The restore state cannot be trusted or reconciled with current controls."
  },
  {
    "failure": "Closure occurs before business validation",
    "impact": "Technical components appear healthy while users, data quality, support, privacy, or communication remain incomplete.",
    "design_response": "Require mission-owner and service-owner validation, user journeys, data checks, communication, and residual-risk decision.",
    "validation": "Complete a fictional multi-owner acceptance checklist.",
    "stop": "The mission owner has not confirmed the critical outcome."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define fictional recovery priorities",
    "questions": "Which critical functions, users, data, identities, services, evidence, suppliers, and communication outcomes matter most?",
    "output": "Critical-function and recovery-priority register.",
    "stop": "Do not begin with technology before mission priorities are approved."
  },
  {
    "step": "2",
    "title": "Map dependencies and failure domains",
    "questions": "Which fictional identity, network, time, data, logging, storage, supplier, owner, and recovery dependencies support each function?",
    "output": "Dependency, single-point-of-failure, and correlated-failure map.",
    "stop": "Pause if one failure removes service, identity, evidence, and recovery together."
  },
  {
    "step": "3",
    "title": "Define continuity and degraded service",
    "questions": "Which fictional functions must continue, which may pause, and what limits apply during disruption?",
    "output": "Safe degraded-mode and continuity plan.",
    "stop": "Do not use broad fail-open access or unnecessary total outage."
  },
  {
    "step": "4",
    "title": "Design backups and restore states",
    "questions": "Which fictional data, configuration, identity, evidence, and service states must be preserved, for how long, and with which integrity?",
    "output": "Backup, retention, integrity, and restore-state design.",
    "stop": "Do not count a backup as recoverable until restoration is validated."
  },
  {
    "step": "5",
    "title": "Build recovery sequence and gates",
    "questions": "In what fictional order should identity, time, network, data, logging, applications, suppliers, users, and administration return?",
    "output": "Gated recovery sequence and stop conditions.",
    "stop": "Do not reopen services before required dependencies and evidence are healthy."
  },
  {
    "step": "6",
    "title": "Assign identities, owners, and communication",
    "questions": "Who declares recovery, approves access, performs restoration, validates results, communicates status, and accepts residual risk?",
    "output": "Recovery responsibility, authority, identity, and communication map.",
    "stop": "Pause if recovery depends on one unavailable owner or untrusted identity."
  },
  {
    "step": "7",
    "title": "Design recovery evidence",
    "questions": "Which fictional records prove source state, identity, approval, action, order, result, integrity, validation, exception, and closure?",
    "output": "Recovery evidence and source-health plan.",
    "stop": "Do not perform high-impact recovery actions without minimum attributable evidence."
  },
  {
    "step": "8",
    "title": "Exercise normal and failure cases",
    "questions": "Can fictional continuity, restoration, communication, alternate ownership, supplier fallback, and closure work under safe invented scenarios?",
    "output": "Exercise plan, results, gaps, and corrective actions.",
    "stop": "Do not use real production systems, private data, or operational recovery actions."
  },
  {
    "step": "9",
    "title": "Validate complete service recovery",
    "questions": "Do fictional identity, authorization, data, applications, logging, dependencies, user journeys, communication, privacy, and temporary-access closure pass?",
    "output": "Multi-owner recovery validation and acceptance package.",
    "stop": "Do not declare recovery based only on system availability."
  },
  {
    "step": "10",
    "title": "Govern improvement and residual risk",
    "questions": "Which fictional architecture changes, corrective actions, owners, deadlines, exceptions, and future exercises remain?",
    "output": "Recovery improvement, risk, and governance plan.",
    "stop": "Do not close unresolved weaknesses without an authorized residual-risk decision."
  }
];
const owners = [
  {
    "role": "Mission owner",
    "owns": "Fictional critical functions, recovery priorities, acceptable disruption, recovery time, recovery point, and business residual risk.",
    "decision": "Whether the complete mission outcome has recovered sufficiently.",
    "evidence": "Critical-function map, recovery targets, user journeys, acceptance, and risk decision."
  },
  {
    "role": "Security architect",
    "owns": "Fictional resilience principles, failure domains, recovery patterns, identities, evidence, tradeoffs, and architecture updates.",
    "decision": "Whether recovery architecture is independent, layered, visible, and governed.",
    "evidence": "Dependency map, recovery architecture, decisions, failure analysis, and validation plan."
  },
  {
    "role": "Service owner",
    "owns": "Fictional service function, dependencies, degraded mode, restoration, health, user journeys, and support.",
    "decision": "Whether the service is ready to return to normal operation.",
    "evidence": "Service checks, dependency status, errors, performance, user journey, rollback, and signoff."
  },
  {
    "role": "Identity and privileged-access owner",
    "owns": "Fictional recovery identities, emergency roles, approval, session evidence, expiry, revocation, and normal-access restoration.",
    "decision": "Who may perform recovery actions and when temporary authority ends.",
    "evidence": "Identity, custodian, approval, session, action, expiry, revocation, and review."
  },
  {
    "role": "Data and privacy owner",
    "owns": "Fictional restore state, integrity, field scope, retention, deletion, privacy impact, and data acceptance.",
    "decision": "Whether restored data is complete, trusted, minimum necessary, and suitable for approved use.",
    "evidence": "Restore source, integrity, consistency, access, retention, privacy review, and signoff."
  },
  {
    "role": "Logging and evidence owner",
    "owns": "Fictional source health, time quality, minimum evidence, platform recovery, reconciliation, access, retention, and confidence.",
    "decision": "Whether recovery actions and gaps can be reconstructed reliably.",
    "evidence": "Source status, gap register, chronology, administrative evidence, reconciliation, and closure."
  },
  {
    "role": "Network and platform owner",
    "owns": "Fictional recovery paths, temporary rules, platform services, connectivity, health, rollback, and effective-state closure.",
    "decision": "Which paths and platform states are safe to enable during each phase.",
    "evidence": "Path map, temporary rules, change records, health, effective flows, closure, and rollback."
  },
  {
    "role": "Supplier owner",
    "owns": "Fictional supplier continuity, identity, status, evidence, data scope, support, fallback, change, and exit.",
    "decision": "Whether supplier-supported functions may resume.",
    "evidence": "Supplier status, identity, approved flows, data scope, fallback, communication, and review."
  },
  {
    "role": "Communication owner",
    "owns": "Fictional internal, user, supplier, leadership, and correction messages during disruption and recovery.",
    "decision": "Which facts, uncertainty, user actions, decisions, and next updates should be communicated.",
    "evidence": "Approved message, audience, channel, time, acknowledgment, correction, and closure."
  },
  {
    "role": "Governance and risk owner",
    "owns": "Fictional recovery exceptions, residual risk, corrective actions, deadlines, architecture changes, and final acceptance.",
    "decision": "Whether remaining recovery risk is accepted, reduced, transferred, avoided, or monitored.",
    "evidence": "Decision records, exceptions, owners, deadlines, corrective evidence, architecture revision, and signoff."
  }
];
const evidenceMatrix = [
  {
    "id": "REC-01",
    "source": "Fictional critical-function register",
    "observation": "Identity, application, data, logging, recovery, supplier support, and communication are all required for the mission.",
    "supports": "Recovery must restore a complete service chain rather than one application.",
    "limits": "Does not define exact recovery order or owner-approved targets.",
    "use": "Build dependency order, degraded mode, recovery gates, and multi-owner validation."
  },
  {
    "id": "REC-02",
    "source": "Fictional backup inventory",
    "observation": "Backups exist, but two critical services have not completed a restore exercise in twelve months.",
    "supports": "Recoverability is uncertain despite backup presence.",
    "limits": "Does not prove the backups are unusable.",
    "use": "Schedule safe fictional restore exercises and validate integrity, dependencies, and service outcomes."
  },
  {
    "id": "REC-03",
    "source": "Fictional identity recovery map",
    "observation": "Recovery access depends on the same identity platform and administrator group affected by the outage.",
    "supports": "Recovery authority shares the primary failure domain.",
    "limits": "Does not prove recovery is impossible in every scenario.",
    "use": "Create separate recovery identity, custody, approval, evidence, and closure."
  },
  {
    "id": "REC-04",
    "source": "Fictional recovery timeline",
    "observation": "The application returned before identity synchronization, logging, and supplier-health validation.",
    "supports": "The recovery sequence reopened service before dependencies were trusted.",
    "limits": "Does not prove user harm occurred.",
    "use": "Add dependency gates and block full service until identity, evidence, and supplier checks pass."
  },
  {
    "id": "REC-05",
    "source": "Fictional data-integrity review",
    "observation": "The restored database is readable, but the restore point is older than the owner-approved data-gap limit.",
    "supports": "The recovery point does not meet the approved mission requirement.",
    "limits": "Does not prove the data is corrupted.",
    "use": "Document the gap, compare alternate states, obtain owner decision, and update backup design."
  },
  {
    "id": "REC-06",
    "source": "Fictional recovery-access register",
    "observation": "Two temporary rules and one emergency identity remain active after service restoration.",
    "supports": "Recovery closure and effective-state validation are incomplete.",
    "limits": "Does not prove the access was used improperly.",
    "use": "Expire access, close rules, end sessions, validate normal architecture, and obtain owner signoff."
  },
  {
    "id": "REC-07",
    "source": "Fictional evidence-gap report",
    "observation": "The central logging platform was unavailable during early restoration, and delayed events have not been reconciled.",
    "supports": "Recovery chronology and confidence remain incomplete.",
    "limits": "Does not prove recovery actions were unauthorized.",
    "use": "Reconcile alternate and delayed evidence, document gaps, revise confidence, and update cases."
  },
  {
    "id": "REC-08",
    "source": "Fictional after-action review",
    "observation": "Three previously identified recovery weaknesses remain open with no current owner or deadline.",
    "supports": "Recovery improvement and governance are ineffective.",
    "limits": "Does not prove every corrective action was feasible.",
    "use": "Assign owners, deadlines, architecture updates, validation evidence, and residual-risk decisions."
  }
];
const commonMistakes = [
  "Treating fictional backup presence as proof that restoration will work.",
  "Restoring the application before identity, data, logging, time, network, supplier, and authorization dependencies are healthy.",
  "Using the same fictional identity platform, administrator, or evidence source for production and recovery.",
  "Designing recovery around technology rather than mission functions, users, data, communication, and owner decisions.",
  "Failing to define safe degraded service and instead choosing broad fail-open access or unnecessary total outage.",
  "Restoring a fictional system from an outdated, unverified, incompatible, or unowned state.",
  "Declaring recovery complete because a system starts or a webpage loads.",
  "Ignoring fictional data consistency, identity synchronization, logging, denied paths, privacy, and user journeys.",
  "Leaving emergency identities, temporary roles, supplier permissions, or recovery rules active after restoration.",
  "Failing to preserve minimum fictional evidence and source-health information during recovery.",
  "Treating one successful exercise as permanent proof of resilience despite architecture changes.",
  "Failing to identify alternate owners, communication paths, and supplier fallback.",
  "Closing recovery without owner signoff, residual-risk decision, corrective actions, deadlines, and architecture updates.",
  "Using real internal recovery plans, system names, backup details, identities, configurations, logs, supplier information, or outage records in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What best describes fictional resilience?",
    "choices": [
      "Keeping every service online at all times.",
      "Continuing safely, degrading predictably, recovering from approved states, validating outcomes, and improving after disruption.",
      "Having one backup copy.",
      "Restarting the main application quickly."
    ],
    "answer": 1,
    "explanation": "Resilience includes continuity, safe degradation, recovery, validation, ownership, evidence, and improvement."
  },
  {
    "question": "Why is a fictional backup not the same as recovery?",
    "choices": [
      "Backups are never useful.",
      "Recovery also requires trusted restore states, identities, dependencies, sequence, service validation, evidence, and closure.",
      "Recovery only concerns applications.",
      "Backups automatically prove integrity."
    ],
    "answer": 1,
    "explanation": "A backup is only one input to a complete recovery process."
  },
  {
    "question": "The fictional application returns before identity synchronization and logging. What is the strongest conclusion?",
    "choices": [
      "Recovery is complete.",
      "Service restoration is incomplete because required dependencies and evidence are not yet trusted.",
      "Identity and logging are optional.",
      "The application should remain permanently offline."
    ],
    "answer": 1,
    "explanation": "Application availability alone does not prove complete service recovery."
  },
  {
    "question": "What is strongest for fictional recovery identity design?",
    "choices": [
      "Use the same production administrator account.",
      "Use separately governed recovery identity, independent approval, narrow scope, evidence, expiration, and post-use closure.",
      "Share one emergency identity with every operator.",
      "Leave emergency access active permanently."
    ],
    "answer": 1,
    "explanation": "Recovery authority should not depend completely on the same identity and ownership failure domain."
  },
  {
    "question": "What should happen to temporary fictional recovery access?",
    "choices": [
      "Leave it active for future convenience.",
      "Expire it, close rules, end sessions, validate effective state, review evidence, and obtain owner signoff.",
      "Hide it from documentation.",
      "Convert it into permanent support access."
    ],
    "answer": 1,
    "explanation": "Recovery closure prevents temporary trust from becoming a permanent bypass."
  },
  {
    "question": "What is strongest evidence that fictional recovery succeeded?",
    "choices": [
      "The main webpage loads.",
      "Identity, authorization, data, dependencies, logging, user journeys, privacy, communication, temporary-access closure, and owner acceptance all pass.",
      "The backup job completed.",
      "No new alert appeared."
    ],
    "answer": 1,
    "explanation": "Complete recovery is a multi-system and mission outcome validated by multiple owners."
  },
  {
    "question": "What makes an A2.7 portfolio artifact safe to share?",
    "choices": [
      "Only real passwords are removed.",
      "The real plan is shortened.",
      "Every organization, system, identity, backup, record, timeline, decision, date, and outcome is invented.",
      "Only server names are changed."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects real organizations, systems, people, continuity plans, and security details."
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

export default function ResilienceAndRecoveryPlanningPage() {
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
              Lesson 7 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Resilience Architecture
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A2.7 Resilience and Recovery Planning
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how advanced defenders design fictional services to continue
            safely, degrade predictably, restore trusted identity, data,
            systems, evidence, access, communication, and dependencies in the
            correct order, and prove that the complete mission outcome has
            recovered.
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
          lessonTitle="Resilience and Recovery Planning"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional organizations, systems, identities, backups, restore states, records, evidence, decisions, dates, and outcomes.",
            "I understand that backup presence does not prove complete recovery.",
            "I will connect recovery to mission, users, identity, data, services, dependencies, evidence, communication, ownership, validation, and closure.",
            "I will not upload or reproduce real recovery plans, system names, backup details, credentials, logs, supplier information, outage records, or private data.",
            "I will analyze only supplied fictional evidence and will not access, test, change, restore, recover, or investigate real systems.",
            "I will document assumptions, gaps, source health, temporary access, degraded modes, recovery order, residual risk, and owner signoff.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Application Is Online, but the Service Is Not Recovered"
        >
          <p className="leading-8">
            A fictional application returns after an outage. However, identity
            synchronization remains incomplete, the logging platform missed
            early recovery events, the restored data is older than the approved
            recovery point, the supplier connection has not been validated, and
            temporary recovery rules remain active. The webpage loads, but the
            full mission, trust, evidence, and recovery state are not ready.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Component recovery
              </p>
              <p className="mt-2 leading-7">
                Restore one fictional system, confirm it starts, and close the
                event while dependencies, evidence, access, and users remain
                incomplete.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Service recovery
              </p>
              <p className="mt-2 leading-7">
                Restore fictional identity, data, dependencies, services,
                logging, communication, user outcomes, normal access, and
                owner-approved trust.
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
          title="Architecture Must Expect Controls and Dependencies to Fail"
        >
          <p className="leading-8">
            Strong fictional architecture does not assume identity, networks,
            data, suppliers, logging, administrators, storage, or communication
            will remain perfect. It defines which mission functions must
            continue, which may pause, how trust is restored, how evidence is
            preserved, who may decide, which temporary access is allowed, and
            what proof is required before normal operation resumes.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Continue safely",
                "Preserve fictional critical user outcomes in a limited approved mode.",
              ],
              [
                "Restore trust",
                "Recover fictional identity, data, controls, evidence, dependencies, and communication from approved states.",
              ],
              [
                "Prove closure",
                "Remove fictional temporary access, validate effective state, document residual risk, and obtain owner signoff.",
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
          title="Prepare → Stabilize → Restore Dependencies → Restore Service → Validate → Close → Improve"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Prepare", "Define fictional priorities, dependencies, owners, restore states, identities, evidence, communication, and exercises."],
              ["Stabilize", "Protect fictional critical functions, data, evidence, backups, access, and recovery options."],
              ["Dependencies", "Restore fictional identity, time, network, storage, logging, supplier, and control foundations in order."],
              ["Service", "Restore fictional data, configuration, applications, paths, users, support, and business functions."],
              ["Validate", "Test fictional identity, authorization, integrity, dependencies, evidence, user journeys, privacy, and communication."],
              ["Close", "Remove fictional temporary identities, rules, paths, supplier access, sessions, and exceptions."],
              ["Improve", "Assign fictional corrective owners, deadlines, architecture changes, exercises, and residual-risk decisions."],
              ["Govern", "Keep fictional plans, owners, dependencies, restore states, evidence, and recovery requirements current."],
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
          title="Language for Resilience and Recovery"
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
            Critical Functions
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Functions That Must Recover Together
          </h2>

          <div className="mt-6 grid gap-5">
            {criticalFunctions.map((item) => (
              <article
                key={item.function}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.function}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.mission}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Dependencies", item.dependencies],
                    ["Safe degraded mode", item.degraded_mode],
                    ["Recovery order", item.recovery_order],
                    ["Validation", item.validation],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.function}-${label}`}
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
            Recovery Lifecycle
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Phases from Preparation to Improvement
          </h2>

          <div className="mt-6 grid gap-5">
            {recoveryPhases.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.phase}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.question}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Core activities", item.activities],
                    ["Required evidence", item.evidence],
                    ["Failure pattern", item.failure],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.phase}-${label}`}
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
            Recovery Dependencies
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Dependencies That Shape Recovery Success
          </h2>

          <div className="mt-6 grid gap-5">
            {recoveryDependencies.map((item) => (
              <article
                key={item.dependency}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.dependency}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Why it matters", item.why],
                    ["Main risk", item.risk],
                    ["Architecture design", item.design],
                    ["Validation", item.validation],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.dependency}-${label}`}
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
            Measurable Recovery Requirements
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Replace Vague Recovery Language with Testable Outcomes
          </h2>

          <div className="mt-6 grid gap-5">
            {recoveryRequirements.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.category}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak requirement
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong requirement
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
            Recovery Failure Modes
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Ways Fictional Recovery Can Fail
          </h2>

          <div className="mt-6 grid gap-5">
            {failureModes.map((item) => (
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
            Ten Steps from Mission Priority to Recovery Governance
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
            Recovery Ownership
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Owners for Mission, Identity, Data, Evidence, Communication, and Risk
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
          title="Fake Northbridge Resilience and Recovery Dashboard"
          subtitle="Fictional continuity, backup, restore, identity, evidence, supplier, communication, and closure review for training only."
          metrics={[
            {
              label: "Critical functions",
              value: "8",
              note: "Fictional identity, application, data, logging, administration, supplier, backup, and communication functions require recovery.",
            },
            {
              label: "Recovery concerns",
              value: "7",
              note: "Untested restores, shared identity dependence, sequence errors, stale data, open access, evidence gaps, and overdue corrective actions remain.",
            },
            {
              label: "Current status",
              value: "Incomplete",
              note: "The fictional application is available, but complete mission recovery has not been validated.",
            },
          ]}
        />

        <FakeAlertCard
          title="Application Availability Does Not Equal Complete Service Recovery"
          severity="High"
          time="8:24 PM"
          source="Fake Northbridge Recovery Architecture Console"
          details="The fictional application returned before identity synchronization, logging recovery, supplier validation, and data-point acceptance. Two temporary rules and one emergency identity remain active, and delayed evidence has not been reconciled."
          recommendation="Keep recovery open, restore and validate dependencies, review the data gap, reconcile evidence, close temporary access, complete user and owner validation, document residual risk, and assign corrective actions."
        />

        <FakeLogPanel
          title="Fake Recovery Review Timeline"
          logs={[
            "19:00 OUTAGE service='declared'",
            "19:05 CONTINUITY support-mode='read-only'",
            "19:10 BACKUP restore-source='selected'",
            "19:12 INTEGRITY restore-state='verified'",
            "19:20 APPLICATION status='online'",
            "19:21 IDENTITY sync='incomplete'",
            "19:22 LOGGING platform='recovering'",
            "19:23 SUPPLIER health='not-validated'",
            "19:25 DATA restore-point='older-than-target'",
            "19:30 ACCESS temporary-rules='2-active'",
            "19:31 ACCESS emergency-identity='active'",
            "19:40 EVIDENCE delayed-events='not-reconciled'",
            "19:50 USER-JOURNEY full-support='failed'",
            "20:00 OWNER acceptance='pending'",
            "20:10 CORRECTIVE open-unowned='3'",
            "20:24 STATUS recovery='incomplete'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence before Declaring Complete Recovery
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
          title="Should the Fictional Recovery Be Declared Complete?"
          question="Should the current fictional Northbridge recovery be declared complete?"
          evidence={[
            "The application is online.",
            "Identity synchronization remains incomplete.",
            "The logging platform missed early recovery events and delayed evidence is not reconciled.",
            "The supplier-supported function has not been validated.",
            "The restored data point is older than the owner-approved limit.",
            "Two temporary rules and one emergency identity remain active.",
            "The complete support user journey still fails.",
            "Three previously identified recovery weaknesses remain open without current owners.",
          ]}
          options={[
            "No. Keep recovery open, restore and validate dependencies, address the data gap, reconcile evidence, close temporary access, pass the full user journey, obtain owner acceptance, and assign corrective actions.",
            "Yes, because the application is online.",
            "Yes, because the backup restored successfully.",
            "Yes, because no new alert has appeared.",
          ]}
          bestAnswer={0}
          explanation="Complete recovery requires trusted identity, data, services, dependencies, evidence, user outcomes, communication, temporary-access closure, owner acceptance, and accountable improvement."
        />

        <SectionCard
          eyebrow="Common Recovery Mistakes"
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
          title="Build a Fictional Resilience and Recovery Plan"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Redesign the Northbridge Recovery Architecture
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                copy, quote, lightly modify, summarize, or reproduce real
                recovery plans, backup details, system names, identities,
                configurations, logs, supplier records, outage reports, or
                private data.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Fictional critical-function and recovery-priority register.</li>
                <li>Dependency, single-point-of-failure, and correlated-failure map.</li>
                <li>Safe degraded-mode and continuity plan.</li>
                <li>Backup, restore-state, integrity, retention, and recovery-point design.</li>
                <li>Gated recovery sequence with stop conditions.</li>
                <li>Recovery identities, owners, approvals, supplier roles, and communication plan.</li>
                <li>Recovery evidence, source-health, chronology, gap, and reconciliation plan.</li>
                <li>Restore exercise, failure scenario, and corrective-action package.</li>
                <li>Multi-owner service validation, temporary-access closure, acceptance, and residual-risk decision.</li>
                <li>Reflection, revision history, and complete fictionalization statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This activity creates a fictional educational design only. It does
            not authorize backup access, restoration, account use, system
            changes, testing, recovery, investigation, or collection involving
            any real system.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Application Returns before Its Dependencies"
          scenario="A fictional application is online, but identity synchronization, logging, and supplier-health checks remain incomplete. Leaders want to announce full recovery immediately."
          choices={[
            {
              label: "Choice A",
              response: "Keep full recovery pending, maintain limited service, validate identity, evidence, supplier, data, and user journeys, communicate uncertainty, then obtain owner acceptance.",
              outcome: "Best professional choice. The response protects users and trust without hiding incomplete recovery.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Declare recovery because the main page loads.",
              outcome: "Risky. Application availability does not prove complete mission recovery.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Shut down every restored component indefinitely.",
              outcome: "Unsafe. A limited approved mode may preserve critical service while validation continues.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Emergency Recovery Access Remains Active"
          scenario="After a fictional recovery, two temporary network rules and one emergency identity remain active. The original recovery owner is unavailable."
          choices={[
            {
              label: "Choice A",
              response: "Identify an authorized alternate owner, preserve evidence, validate service health, close rules and sessions, expire the identity, compare effective state with the normal design, and document signoff.",
              outcome: "Best professional choice. Recovery is incomplete until temporary trust is removed or formally governed.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Leave the access active in case another outage occurs.",
              outcome: "Risky. Temporary recovery access can become a permanent bypass.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Delete the access records and close the case.",
              outcome: "Unsafe. Evidence, accountability, closure validation, and owner approval are required.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Recover a Mission after Identity, Logging, and Supplier Failure"
        >
          <p className="leading-8">
            Extend the fictional Northbridge plan for a combined failure of the
            central identity service, logging platform, and supplier-supported
            function. The critical support mission must continue in a limited
            mode. Design the recovery identities, alternate evidence, local
            fallback, data limits, approved paths, owner authority,
            communication, recovery order, source reconciliation, temporary
            access closure, and complete validation needed to return safely.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              [
                "Required architecture",
                "Show fictional normal, degraded, recovery, and restored states with dependencies, identities, evidence, owners, stop conditions, and residual risk.",
              ],
              [
                "Required proof",
                "Explain how the design validates identity, data, services, logging, users, supplier scope, communication, closure, and future corrective action.",
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
          title="Resilience and Recovery Planning Checklist"
          items={[
            "I can define fictional critical mission functions, users, recovery priorities, acceptable disruption, recovery time, and recovery point expectations.",
            "I can distinguish fictional availability, redundancy, backup, restoration, rollback, failover, continuity, and complete service recovery.",
            "I can map fictional identity, network, time, data, logging, storage, supplier, owner, communication, and recovery dependencies.",
            "I can identify fictional single points of failure, correlated failures, hidden dependencies, and resilience debt.",
            "I can design fictional safe degraded service without broad fail-open access or unnecessary total outage.",
            "I can design fictional protected restore states, integrity checks, retention, recovery identities, and safe restore exercises.",
            "I can create a fictional gated recovery sequence with dependency checks and stop conditions.",
            "I can preserve fictional minimum evidence, source health, time quality, alternate records, reconciliation, and confidence during recovery.",
            "I can validate fictional identity, authorization, data, services, dependencies, logging, user journeys, privacy, suppliers, and communication.",
            "I can close fictional emergency identities, temporary roles, rules, paths, supplier access, sessions, and exceptions.",
            "I can assign fictional mission, architecture, service, identity, data, evidence, network, supplier, communication, governance, and risk owners.",
            "I will never use real recovery plans, system names, backup details, identities, configurations, logs, supplier information, outage records, or private data in this portfolio.",
          ]}
        />

        <MiniQuiz
          title="A2.7 Mini Quiz: Resilience and Recovery Planning"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Resilience and Recovery Architecture Package for Northbridge. Include the critical-function register, recovery priorities, recovery time and recovery point requirements, dependency map, single points of failure, correlated failures, safe degraded modes, continuity plan, backup and restore-state design, integrity and retention, recovery identities, owner and authority map, supplier fallback, communication plan, gated recovery sequence, stop conditions, recovery evidence, source health, chronology and reconciliation, exercise plan, service validation, temporary-access closure, residual risk, corrective actions, architecture updates, reflection, revision history, and a statement that every organization, system, identity, backup, record, timeline, decision, date, and outcome is invented."
          tips={[
            "Begin with fictional mission functions and dependencies rather than backup technology.",
            "Show why backup success alone does not prove service recovery.",
            "Include at least one shared identity or evidence failure domain and redesign recovery around it.",
            "Show how fictional temporary access activates, operates, expires, closes, and receives effective-state validation.",
            "Keep every system, identity, restore state, record, timeline, decision, date, and outcome completely invented.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready to Design Secure Defaults and Hardening Strategy?"
        >
          <p className="leading-8">
            Before moving to A2.8, rate your readiness from 1 to 5 for each area:
            critical functions, recovery priorities, dependencies, degraded
            service, backup versus recovery, restore integrity, recovery order,
            identity, evidence, communication, supplier fallback, user
            validation, temporary-access closure, and residual risk.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why fictional application availability does not prove complete service recovery.",
              "I can map fictional identity, data, logging, supplier, network, owner, communication, and restore dependencies.",
              "I can design fictional safe degraded service and recovery identities without creating permanent bypasses.",
              "I can validate fictional restore states, evidence, chronology, service outcomes, user journeys, and owner acceptance.",
              "I can close fictional temporary access, rules, sessions, supplier permissions, and recovery exceptions.",
              "I can keep the entire resilience and recovery portfolio fully invented and safe to share.",
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
            Record one fictional recovery dependency you would protect first,
            one closure control you would never skip, and one secure-default
            question you will carry into A2.8.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Resilience means fictional services continue safely, degrade predictably, recover from approved states, and improve after disruption.",
            "A backup is not the same as recovery; complete recovery also requires identity, dependencies, evidence, service validation, communication, and closure.",
            "Recovery architecture should begin with fictional mission functions, users, priorities, and owner-approved recovery expectations.",
            "Identity, time, network, logging, data, suppliers, owners, communication, and restore states are critical recovery dependencies.",
            "Safe degraded modes preserve fictional critical functions while high-risk actions remain restricted.",
            "Recovery identities, approvals, evidence, and restore paths should not depend entirely on the same production failure domain.",
            "The recovery sequence should use fictional dependency gates and stop when integrity, ownership, evidence, or health is insufficient.",
            "Complete fictional recovery validates identity, authorization, data, services, logging, suppliers, user journeys, privacy, communication, and owner acceptance.",
            "Temporary fictional recovery identities, rules, paths, sessions, supplier access, and exceptions must be removed or formally governed before closure.",
            "Every CyberShield resilience artifact must remain fully fictional, defensive, non-operational, privacy-safe, and incapable of exposing real systems.",
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