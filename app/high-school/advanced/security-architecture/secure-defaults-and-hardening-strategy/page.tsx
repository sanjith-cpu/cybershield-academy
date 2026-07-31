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
const previousLesson = `${modulePath}/resilience-and-recovery-planning`;
const nextLesson = `${modulePath}/architecture-tradeoffs-and-constraints`;

const objectives = [
  "Explain secure defaults and hardening as a fictional architecture strategy that begins with the minimum safe state and adds only approved capabilities.",
  "Distinguish fictional baseline configuration, least functionality, attack-surface reduction, secure failure, exception handling, validation, and lifecycle governance.",
  "Design fictional hardening requirements for identities, services, networks, applications, data, logging, administration, suppliers, backups, and recovery.",
  "Evaluate fictional hardening for hidden dependencies, usability and availability impact, configuration drift, unsupported settings, weak evidence, emergency bypasses, and recovery compatibility.",
  "Create a portfolio-ready fictional secure-defaults and hardening package using only invented organizations, systems, identities, configurations, evidence, decisions, dates, and outcomes."
];
const vocabulary = [
  [
    "Secure default",
    "A fictional starting state that limits access, exposure, functionality, sharing, privilege, and risky behavior until an approved need is established."
  ],
  [
    "Hardening",
    "The fictional process of reducing unnecessary exposure, functionality, privilege, services, paths, data, and configuration risk while preserving the mission."
  ],
  [
    "Security baseline",
    "A fictional approved minimum configuration standard for a system, service, identity, application, data store, network segment, or recovery environment."
  ],
  [
    "Least functionality",
    "Enabling only the fictional features, services, interfaces, protocols, roles, and integrations required for the approved mission."
  ],
  [
    "Attack surface",
    "The fictional collection of identities, interfaces, services, paths, data, functions, suppliers, and administrative capabilities that could be reached or misused."
  ],
  [
    "Configuration drift",
    "A fictional mismatch between the approved baseline and the effective settings, services, permissions, paths, exceptions, or versions in operation."
  ],
  [
    "Baseline exception",
    "A fictional approved deviation from a secure baseline with purpose, owner, scope, evidence, expiration, compensating controls, and review."
  ],
  [
    "Compensating control",
    "A fictional alternative safeguard used when a preferred baseline requirement cannot be implemented fully, with documented limits and owner acceptance."
  ],
  [
    "Secure failure",
    "A fictional failure behavior that preserves safety, evidence, recovery options, and mission priorities without uncontrolled access or unnecessary total outage."
  ],
  [
    "Fail-open",
    "A fictional control behavior that continues access or service during failure, preserving availability while increasing some security risk."
  ],
  [
    "Fail-closed",
    "A fictional control behavior that blocks access or service during failure, reducing some exposure while increasing availability risk."
  ],
  [
    "Default deny",
    "A fictional principle that blocks access or communication unless an approved identity, action, path, purpose, and rule permit it."
  ],
  [
    "Allowlist",
    "A fictional approved list of identities, services, actions, paths, data, or software capabilities permitted for a defined purpose."
  ],
  [
    "Denylist",
    "A fictional list of disallowed items that may reduce some risk but can miss unknown or changing exposure."
  ],
  [
    "Configuration owner",
    "The fictional role accountable for approving, implementing, reviewing, validating, and correcting a configuration area."
  ],
  [
    "Effective state",
    "The fictional configuration, permission, service, path, and control behavior actually operating, not merely what documentation says should exist."
  ],
  [
    "Baseline validation",
    "The fictional evidence-based process of comparing effective state with the approved baseline and documenting deviations."
  ],
  [
    "Change gate",
    "A fictional approval and validation point before a baseline, exception, configuration, service, privilege, or recovery state changes."
  ],
  [
    "Configuration evidence",
    "Fictional records showing version, owner, approval, effective setting, change, result, validation, exception, rollback, and closure."
  ],
  [
    "Hardening debt",
    "Fictional accumulated risk caused by deferred updates, stale exceptions, unsupported settings, hidden dependencies, weak ownership, or incomplete validation."
  ],
  [
    "Golden state",
    "A fictional approved reference configuration or recovery state used to build, compare, restore, or validate systems consistently."
  ],
  [
    "Drift detection",
    "The fictional process of identifying changes between approved and effective configuration states."
  ],
  [
    "Configuration rollback",
    "The fictional controlled return from an unsafe or failed configuration to a previously approved state."
  ],
  [
    "Hardening lifecycle",
    "The fictional process of defining, implementing, validating, monitoring, changing, recovering, and retiring configuration standards."
  ]
];
const hardeningDomains = [
  {
    "domain": "Identity and access defaults",
    "secure_default": "Fictional identities receive no access until a current owner, purpose, role, approval, scope, duration, and lifecycle are defined.",
    "hardening_actions": "Use unique identities, least privilege, denied high-risk actions, just-in-time privilege, session evidence, access review, and retirement.",
    "evidence": "Identity inventory, role matrix, approvals, effective permissions, privileged sessions, lifecycle, and access-removal records.",
    "failure_risk": "Shared, stale, broad, or orphaned identities bypass otherwise strong architecture.",
    "recovery_need": "Separate recovery identities, limited emergency roles, independent approval, expiration, and post-use closure."
  },
  {
    "domain": "Network and communication defaults",
    "secure_default": "Fictional communication is denied unless a specific source, destination, identity, service, purpose, data scope, owner, and rule are approved.",
    "hardening_actions": "Segment by mission, narrow flows, protect management and recovery paths, govern suppliers, record denied attempts, and remove stale rules.",
    "evidence": "Approved flow matrix, effective-flow records, denied-path evidence, rule changes, exceptions, source health, and closure.",
    "failure_risk": "Broad internal trust, hidden dependencies, supplier overreach, or emergency rules flatten segmentation.",
    "recovery_need": "Document recovery paths, use narrow temporary rules, validate dependencies, and remove temporary access after restoration."
  },
  {
    "domain": "Application and service defaults",
    "secure_default": "Fictional services expose only required interfaces, actions, integrations, error detail, dependencies, and administrative functions.",
    "hardening_actions": "Use service identity, explicit authorization, minimum interfaces, safe errors, configuration control, dependency ownership, logging, and rollback.",
    "evidence": "Service map, interface catalog, authorization results, dependency health, error records, versions, changes, and validation.",
    "failure_risk": "Unused features, broad service roles, verbose errors, unmanaged interfaces, or hidden dependencies increase exposure.",
    "recovery_need": "Preserve approved service states, dependency order, configuration versions, rollback, and complete user-journey validation."
  },
  {
    "domain": "Data and privacy defaults",
    "secure_default": "Fictional systems collect, process, share, retain, and expose only the minimum data required for the approved purpose.",
    "hardening_actions": "Use classification, field allowlists, narrow access, integrity, retention, deletion, backup, export control, and privacy review.",
    "evidence": "Data inventory, field scope, purpose, access records, export evidence, retention, deletion, integrity, and restore checks.",
    "failure_risk": "Broad access, full-content logging, unmanaged exports, or indefinite retention create security and privacy harm.",
    "recovery_need": "Restore only approved data states, validate integrity and scope, preserve retention decisions, and document any data gap."
  },
  {
    "domain": "Administrative defaults",
    "secure_default": "Fictional administrative capability is unavailable to standard identities and inaccessible through normal user or service paths.",
    "hardening_actions": "Use separate named privilege, approval, time limits, target allowlists, session evidence, change records, rollback, and independent review.",
    "evidence": "Administrator, approver, purpose, target, action, start, end, result, change version, rollback, and validation.",
    "failure_risk": "One administrator may change systems, identity, logs, backups, and proof of the change.",
    "recovery_need": "Use separately governed recovery administration and close all temporary privilege after use."
  },
  {
    "domain": "Logging and evidence defaults",
    "secure_default": "Fictional critical actions, changes, failures, denied requests, recovery steps, and evidence-system administration are recorded with minimum necessary context.",
    "hardening_actions": "Monitor source health, time quality, schema, integrity, access, retention, parser changes, administrative actions, and platform recovery.",
    "evidence": "Coverage map, source health, time-quality records, event schema, access reviews, retention, administrative evidence, and reconciliation.",
    "failure_risk": "A system may appear hardened while changes, failures, bypasses, or evidence deletion remain invisible.",
    "recovery_need": "Preserve alternate evidence, restore source health, reconcile delayed records, and validate the evidence chain."
  },
  {
    "domain": "Supplier and integration defaults",
    "secure_default": "Fictional suppliers have no access or data exchange beyond the minimum contract-approved service, identity, path, fields, actions, and time window.",
    "hardening_actions": "Use named identities, sponsors, narrow interfaces, data limits, monitoring, expiration, fallback, change review, and exit planning.",
    "evidence": "Supplier identity, sponsor, service, flow, action, data category, result, health, expiration, communication, and review.",
    "failure_risk": "Approved supplier status becomes broad permanent internal trust.",
    "recovery_need": "Use local safe mode, alternate communication, revalidate supplier health and scope, and close temporary access."
  },
  {
    "domain": "Backup and recovery defaults",
    "secure_default": "Fictional backups, restore states, recovery identities, and recovery paths are protected from routine production administration.",
    "hardening_actions": "Use separate ownership, integrity, retention, restore exercises, narrow recovery authority, evidence, dependency gates, and closure.",
    "evidence": "Backup state, owner, integrity, retention, recovery identity, restore action, service validation, temporary access, and signoff.",
    "failure_risk": "Backups exist but are untested, broadly writable, or dependent on the same failed identities and systems.",
    "recovery_need": "Validate complete restore outcomes and ensure recovered configuration matches the current approved baseline."
  }
];
const baselineRequirements = [
  {
    "category": "Identity",
    "weak": "Use strong accounts.",
    "strong": "Every fictional active identity must have a unique identifier, current owner, approved role, purpose, lifecycle state, review date, and denied high-risk actions.",
    "validation": "Compare approved role and lifecycle with effective permissions, sessions, exceptions, and actual use."
  },
  {
    "category": "Services and features",
    "weak": "Disable unnecessary services.",
    "strong": "Every enabled fictional service, interface, feature, and integration must have a current mission purpose, owner, dependency, evidence source, recovery need, and review date.",
    "validation": "Inventory enabled capabilities and confirm each has approved need and owner."
  },
  {
    "category": "Communication",
    "weak": "Use a firewall.",
    "strong": "Every fictional communication path must define source, destination, identity, service, action, data, purpose, owner, result, evidence, and denied alternatives.",
    "validation": "Test conceptually approved flows, denied paths, rule changes, hidden dependencies, and recovery access."
  },
  {
    "category": "Administration",
    "weak": "Limit administrator access.",
    "strong": "Fictional administration must use named separate privilege, independent approval, time-bound scope, target allowlists, session evidence, change records, rollback, and post-use review.",
    "validation": "Trace one privileged action from request through approval, session, change, validation, rollback readiness, and closure."
  },
  {
    "category": "Application configuration",
    "weak": "Use secure settings.",
    "strong": "Fictional applications must expose only required interfaces and actions, use explicit authorization, safe errors, protected configuration, owned dependencies, logging, versioning, and rollback.",
    "validation": "Compare approved interfaces and settings with effective service behavior and configuration evidence."
  },
  {
    "category": "Data and privacy",
    "weak": "Protect sensitive data.",
    "strong": "Fictional data collection, access, fields, sharing, export, retention, deletion, logging, and restore states must remain minimum necessary for approved purpose.",
    "validation": "Trace one approved use, one denied field, one export, one retention decision, one deletion, and one restore."
  },
  {
    "category": "Logging and evidence",
    "weak": "Enable logging.",
    "strong": "Fictional critical actions, denials, changes, source health, time quality, schema version, evidence administration, recovery, and closure must be observable with approved retention and access.",
    "validation": "Reconstruct one normal action, one denied action, one configuration change, one source failure, and one recovery."
  },
  {
    "category": "Recovery compatibility",
    "weak": "Keep backups.",
    "strong": "Fictional hardened states must be restorable using protected recovery identities, trusted configuration versions, approved dependencies, complete service validation, and temporary-access closure.",
    "validation": "Run a fully invented restore exercise and compare recovered effective state with the current baseline."
  }
];
const hardeningPrinciples = [
  {
    "principle": "Start closed, add approved capability",
    "design_question": "What fictional access, service, interface, path, data, or privilege should exist before a mission need is proven?",
    "strong_pattern": "Begin with no unnecessary capability and add only the minimum approved function with owner and evidence.",
    "failure_pattern": "Begin broadly open and attempt to remove risky access later.",
    "validation": "Confirm every enabled capability has current purpose, owner, scope, evidence, and review."
  },
  {
    "principle": "Separate identity from location",
    "design_question": "Is fictional access authorized because the actor is known and approved, or merely because it is inside a network?",
    "strong_pattern": "Require registered identity, role, action, target, purpose, context, and policy decision.",
    "failure_pattern": "Trust all internal users, services, devices, or workloads.",
    "validation": "Confirm an unapproved identity cannot inherit access from the same segment or path."
  },
  {
    "principle": "Reduce functionality deliberately",
    "design_question": "Which fictional features, interfaces, services, integrations, protocols, or administrative functions are truly required?",
    "strong_pattern": "Maintain an enabled-capability inventory with owner, purpose, dependency, evidence, and recovery.",
    "failure_pattern": "Keep default or legacy capabilities enabled in case they may be useful.",
    "validation": "Review one disabled capability and confirm the mission still works safely."
  },
  {
    "principle": "Protect the administrative plane",
    "design_question": "Can fictional normal user or service paths reach configuration, logging, backup, identity, or recovery controls?",
    "strong_pattern": "Use separate management paths, identities, approval, evidence, rollback, and review.",
    "failure_pattern": "Routine support identities can administer every control.",
    "validation": "Prove standard roles and normal service paths cannot perform high-impact administration."
  },
  {
    "principle": "Make denials and changes visible",
    "design_question": "Can defenders explain which fictional action was blocked, which setting changed, who approved it, and what result followed?",
    "strong_pattern": "Record denied actions, configuration changes, source health, version, owner, validation, and rollback.",
    "failure_pattern": "Only successful actions and final configuration are visible.",
    "validation": "Reconstruct one denied request and one baseline change end to end."
  },
  {
    "principle": "Design exceptions as temporary architecture",
    "design_question": "What fictional condition prevents the preferred baseline, and how will risk be reduced and removed?",
    "strong_pattern": "Document purpose, owner, scope, compensating controls, evidence, expiration, review, and removal.",
    "failure_pattern": "Mark a deviation temporary without expiration or accountable owner.",
    "validation": "Compare the exception register with effective settings and verify closure."
  },
  {
    "principle": "Preserve mission and recovery",
    "design_question": "Does the fictional hardened state support critical service, safe degradation, restoration, evidence, and rollback?",
    "strong_pattern": "Validate normal, degraded, failed, recovered, and rolled-back outcomes.",
    "failure_pattern": "Apply restrictive settings without testing dependencies or recovery.",
    "validation": "Run safe fictional service and recovery scenarios using only invented data and systems."
  },
  {
    "principle": "Continuously verify effective state",
    "design_question": "Do fictional actual settings, permissions, services, rules, identities, and exceptions still match the approved baseline?",
    "strong_pattern": "Use recurring drift review, owner attestation, evidence, correction, and architecture updates.",
    "failure_pattern": "Approve a baseline once and assume it remains true.",
    "validation": "Compare approved and effective state after one change, failure, supplier update, and recovery."
  }
];
const exceptionModel = [
  {
    "field": "Purpose and constraint",
    "question": "Why can the fictional baseline not be met, and which mission or technical constraint exists?",
    "required_record": "Specific requirement, constraint, affected system, mission need, and evidence.",
    "weak_example": "Legacy reason.",
    "strong_example": "A fictional reporting service requires one older interface until a replacement project completes on an approved date."
  },
  {
    "field": "Scope",
    "question": "Which fictional identities, systems, services, paths, data, actions, and times are affected?",
    "required_record": "Exact source, destination, identity, action, data, owner, and duration.",
    "weak_example": "Applies to the reporting environment.",
    "strong_example": "Applies only to one invented service identity and one named function in the fictional reporting segment."
  },
  {
    "field": "Risk and blast radius",
    "question": "What fictional exposure remains, and which users, data, services, evidence, or recovery functions could be affected?",
    "required_record": "Threat, impact, likelihood conceptually, blast radius, uncertainty, and residual risk.",
    "weak_example": "Low risk.",
    "strong_example": "The exception increases one service-to-service path and could expose one data category if identity and monitoring also fail."
  },
  {
    "field": "Compensating controls",
    "question": "Which fictional controls reduce the remaining exposure while the exception exists?",
    "required_record": "Identity limits, path scope, approval, monitoring, rate limit, data minimization, rollback, recovery, and review.",
    "weak_example": "Extra monitoring.",
    "strong_example": "Unique service identity, narrow path, read-only action, owner approval, source-health alert, daily review, and tested rollback."
  },
  {
    "field": "Ownership and approval",
    "question": "Who owns the fictional system, exception, data, service, evidence, remediation, and residual risk?",
    "required_record": "Named roles, approval authority, decision, date, and conflict review.",
    "weak_example": "Approved by IT.",
    "strong_example": "Service owner requests, security architect reviews, data owner approves scope, and risk owner accepts the residual exposure."
  },
  {
    "field": "Evidence and validation",
    "question": "How will the fictional exception, compensating controls, use, failures, changes, and closure be proven?",
    "required_record": "Events, source health, review method, success criteria, denied actions, and closure evidence.",
    "weak_example": "Logs are enabled.",
    "strong_example": "Approved and denied use, source health, rule version, identity, target, result, owner review, and removal are recorded."
  },
  {
    "field": "Expiration and remediation",
    "question": "When should the fictional exception end, what replacement is planned, and who owns completion?",
    "required_record": "Expiration, milestones, owner, deadline, validation, renewal conditions, and removal.",
    "weak_example": "Temporary until fixed.",
    "strong_example": "Expires on an approved fictional date unless the risk owner reapproves after evidence review and remediation status."
  },
  {
    "field": "Recovery compatibility",
    "question": "How does the fictional exception behave during failure, degraded service, restore, rollback, and normal-state recovery?",
    "required_record": "Failure state, recovery path, temporary access, restore compatibility, closure, and residual monitoring.",
    "weak_example": "Handled during recovery.",
    "strong_example": "The exception remains read-only during degraded mode, is restored only after identity and logging, and is removed before closure."
  }
];
const failureModes = [
  {
    "failure": "Hardening breaks an undocumented dependency",
    "impact": "A fictional critical service or recovery function stops working after a restrictive change.",
    "design_response": "Pause rollout, preserve the intended restriction, identify the minimum dependency, approve a narrow path, add evidence, and update architecture.",
    "validation": "Confirm the mission works with only the documented minimum dependency.",
    "stop": "The dependency cannot be owned, scoped, monitored, or recovered safely."
  },
  {
    "failure": "Baseline exists only on paper",
    "impact": "Fictional effective settings, services, roles, rules, and exceptions drift from approved intent.",
    "design_response": "Use recurring effective-state comparison, evidence, owner review, correction, and exception governance.",
    "validation": "Compare current state with the baseline after changes, supplier updates, and recovery.",
    "stop": "Critical deviations cannot be explained or owned."
  },
  {
    "failure": "One administrator controls hardening and evidence",
    "impact": "A fictional identity may change settings and remove proof of the change.",
    "design_response": "Separate implementation, approval, evidence administration, validation, rollback, and risk ownership.",
    "validation": "Confirm no one identity controls every stage and every copy of evidence.",
    "stop": "The same identity can change the baseline and erase all related evidence."
  },
  {
    "failure": "Exception becomes permanent",
    "impact": "Fictional broad access, legacy service, supplier path, or weak setting remains indefinitely.",
    "design_response": "Require owner, purpose, scope, compensating controls, expiration, remediation, evidence, and renewal decision.",
    "validation": "Compare the exception register with effective state and confirm expired access is removed.",
    "stop": "The exception has no current owner, date, or removal path."
  },
  {
    "failure": "Fail-closed causes mission outage",
    "impact": "A fictional security control protects one boundary but blocks an approved critical function or recovery path.",
    "design_response": "Design a limited safe degraded mode, alternate ownership, narrow roles, evidence, and time-bound fallback.",
    "validation": "Run normal, degraded, failed, and recovered fictional service journeys.",
    "stop": "No safe operating mode preserves both mission and control objectives."
  },
  {
    "failure": "Fail-open creates uncontrolled privilege",
    "impact": "A fictional identity, service, path, or data function becomes broadly available when a dependency fails.",
    "design_response": "Limit fallback to approved low-risk actions, minimum data, short duration, owner approval, evidence, and automatic closure conceptually.",
    "validation": "Confirm high-risk actions remain blocked during the degraded state.",
    "stop": "Fallback cannot be narrowed or attributed."
  },
  {
    "failure": "Recovery restores an outdated baseline",
    "impact": "A fictional system returns with old privilege, services, rules, logging, supplier access, or exceptions.",
    "design_response": "Validate restore version against the current baseline, reapply approved changes, reconcile exceptions, and verify effective state.",
    "validation": "Compare restored configuration with current identity, network, logging, data, supplier, and recovery requirements.",
    "stop": "The restored state cannot be trusted or reconciled."
  },
  {
    "failure": "Hardening creates unmanageable complexity",
    "impact": "Fictional operators cannot understand, support, troubleshoot, validate, or recover the architecture reliably.",
    "design_response": "Simplify patterns, standardize baselines, assign owners, automate only safely, improve documentation, and validate operability.",
    "validation": "A fictional alternate operator follows the runbook and completes a safe change and rollback.",
    "stop": "Only one person can operate or recover the hardened design."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define fictional mission and risk",
    "questions": "Which users, services, data, identities, suppliers, administrators, evidence, and recovery outcomes must the baseline protect?",
    "output": "Mission, asset, trust, dependency, and risk context.",
    "stop": "Do not harden settings without knowing the mission outcome and constraints."
  },
  {
    "step": "2",
    "title": "Inventory effective capabilities",
    "questions": "Which fictional identities, permissions, services, interfaces, paths, data uses, integrations, administrative functions, and recovery features are enabled?",
    "output": "Effective-capability and configuration inventory.",
    "stop": "Pause if important capabilities are unknown, shared, or unowned."
  },
  {
    "step": "3",
    "title": "Define secure defaults",
    "questions": "What should fictional access, functionality, sharing, communication, administration, logging, supplier use, and recovery look like before exceptions?",
    "output": "Secure-default and denied-capability standard.",
    "stop": "Do not begin with broad access and attempt to remove risk later."
  },
  {
    "step": "4",
    "title": "Build measurable baselines",
    "questions": "Which fictional identity, service, network, application, data, evidence, supplier, backup, and recovery requirements can be tested?",
    "output": "Domain-specific security baseline.",
    "stop": "Reject vague requirements such as use secure settings."
  },
  {
    "step": "5",
    "title": "Analyze dependencies and tradeoffs",
    "questions": "Which fictional mission, usability, performance, accessibility, support, supplier, logging, and recovery needs could be affected?",
    "output": "Dependency, service-impact, and tradeoff matrix.",
    "stop": "Do not apply a restriction that creates unknown mission or recovery failure."
  },
  {
    "step": "6",
    "title": "Implement through governed change",
    "questions": "Who approves, applies, monitors, validates, communicates, rolls back, and accepts residual risk for each fictional change?",
    "output": "Change, ownership, rollback, and communication plan.",
    "stop": "Pause if one identity controls change, evidence, validation, and risk acceptance."
  },
  {
    "step": "7",
    "title": "Validate effective state",
    "questions": "Do fictional actual settings, identities, services, paths, data uses, logs, exceptions, and recovery behavior match the baseline?",
    "output": "Baseline-validation and drift report.",
    "stop": "Do not approve based only on documentation or intended configuration."
  },
  {
    "step": "8",
    "title": "Govern exceptions",
    "questions": "Which fictional constraint prevents compliance, what residual risk remains, and how will the deviation expire or be removed?",
    "output": "Exception and compensating-control register.",
    "stop": "Do not accept temporary exceptions without owner, evidence, expiration, and remediation."
  },
  {
    "step": "9",
    "title": "Test failure, rollback, and recovery",
    "questions": "How does the fictional hardened state behave under identity, network, logging, supplier, service, data, and recovery failure?",
    "output": "Failure-state, rollback, degraded-mode, and recovery-validation package.",
    "stop": "Do not approve hardening that cannot fail or recover safely."
  },
  {
    "step": "10",
    "title": "Monitor drift and improve",
    "questions": "How are fictional baselines, versions, owners, exceptions, unsupported settings, suppliers, evidence, recovery states, and corrective actions reviewed?",
    "output": "Hardening lifecycle, drift, and improvement plan.",
    "stop": "Do not allow hardening debt to grow without an accountable decision."
  }
];
const owners = [
  {
    "role": "Mission owner",
    "owns": "Fictional critical functions, acceptable disruption, user needs, service priorities, and business residual risk.",
    "decision": "Whether secure defaults and restrictions preserve the required mission outcome.",
    "evidence": "Mission requirements, service-impact review, options, user journeys, and risk acceptance."
  },
  {
    "role": "Security architect",
    "owns": "Fictional hardening principles, domain baselines, dependencies, failure behavior, exceptions, tradeoffs, and integrated validation.",
    "decision": "Whether the hardened architecture is secure, supportable, visible, recoverable, and governed.",
    "evidence": "Baseline, dependency map, decisions, failure analysis, exceptions, and validation plan."
  },
  {
    "role": "Configuration and platform owner",
    "owns": "Fictional effective settings, services, features, versions, implementation, health, rollback, drift, and platform recovery.",
    "decision": "Which baseline settings are implementable and operationally supportable.",
    "evidence": "Configuration inventory, versions, changes, effective state, health, rollback, and validation."
  },
  {
    "role": "Identity and privileged-access owner",
    "owns": "Fictional identity defaults, roles, privilege, approvals, sessions, lifecycle, emergency access, and recovery identities.",
    "decision": "Which identities and high-impact actions are permitted by default or exception.",
    "evidence": "Identity inventory, role matrix, approvals, sessions, reviews, exceptions, and closure."
  },
  {
    "role": "Network and service owner",
    "owns": "Fictional communication defaults, service interfaces, dependencies, errors, continuity, performance, and user outcomes.",
    "decision": "Which paths and capabilities are minimum necessary for the service.",
    "evidence": "Flow matrix, service map, dependency review, health, denied paths, errors, and rollback."
  },
  {
    "role": "Data and privacy owner",
    "owns": "Fictional data defaults, field scope, access, sharing, export, retention, deletion, logging, and restore states.",
    "decision": "Which data uses and evidence fields are necessary and proportionate.",
    "evidence": "Data inventory, field allowlist, access review, retention, deletion, privacy review, and restore validation."
  },
  {
    "role": "Detection and evidence owner",
    "owns": "Fictional baseline evidence, source health, time quality, configuration changes, denied actions, access, retention, and drift detection.",
    "decision": "Whether effective-state changes and failures can be reconstructed reliably.",
    "evidence": "Coverage map, source health, change events, drift reports, access, retention, and reconciliation."
  },
  {
    "role": "Recovery owner",
    "owns": "Fictional golden states, recovery identities, restore compatibility, temporary access, rollback, exercises, closure, and service validation.",
    "decision": "Whether the hardened design can be restored safely and completely.",
    "evidence": "Restore state, integrity, version, recovery session, service checks, baseline comparison, and signoff."
  },
  {
    "role": "Supplier owner",
    "owns": "Fictional supplier defaults, identities, interfaces, data, access, expiration, evidence, fallback, change, and exit.",
    "decision": "Which supplier deviations and dependencies are acceptable.",
    "evidence": "Supplier register, approved scope, sessions, flows, data, health, exceptions, and review."
  },
  {
    "role": "Governance and risk owner",
    "owns": "Fictional baseline exceptions, compensating controls, hardening debt, residual risk, corrective actions, deadlines, and final acceptance.",
    "decision": "Whether remaining hardening risk is accepted, reduced, transferred, avoided, or monitored.",
    "evidence": "Decision records, exception register, corrective evidence, deadlines, renewals, closure, and signoff."
  }
];
const evidenceMatrix = [
  {
    "id": "HAR-01",
    "source": "Fictional approved baseline",
    "observation": "Identity, network, service, data, logging, supplier, administrative, and recovery requirements are documented.",
    "supports": "The intended hardening standard covers major architecture domains.",
    "limits": "Does not prove effective configuration matches the baseline.",
    "use": "Compare approved requirements with actual identities, settings, services, paths, exceptions, and restore states."
  },
  {
    "id": "HAR-02",
    "source": "Fictional effective-state review",
    "observation": "Five unused services and two broad administrative interfaces remain enabled.",
    "supports": "Least functionality and administrative separation are incomplete.",
    "limits": "Does not prove the capabilities have been misused.",
    "use": "Confirm mission need, owner, dependency, evidence, recovery, and safe removal."
  },
  {
    "id": "HAR-03",
    "source": "Fictional identity matrix",
    "observation": "One support role retains broad identity, data, logging, backup, and recovery privilege.",
    "supports": "Privilege concentration bypasses hardened domain boundaries.",
    "limits": "Does not prove improper action occurred.",
    "use": "Split roles, use time-bound privilege, separate approval and evidence, and validate effective access."
  },
  {
    "id": "HAR-04",
    "source": "Fictional exception register",
    "observation": "Seven baseline exceptions have no expiration, and three lack current owners.",
    "supports": "Temporary deviations may have become permanent hardening debt.",
    "limits": "Does not prove every exception is unnecessary.",
    "use": "Assign owners, purpose, scope, compensating controls, evidence, remediation, and expiry."
  },
  {
    "id": "HAR-05",
    "source": "Fictional change record",
    "observation": "A restrictive network setting caused a critical support outage because an identity dependency was undocumented.",
    "supports": "Dependency analysis and safe rollout were incomplete.",
    "limits": "Does not prove the intended restriction was wrong.",
    "use": "Restore limited service, document the minimum dependency, approve a narrow path, and update the baseline."
  },
  {
    "id": "HAR-06",
    "source": "Fictional logging coverage map",
    "observation": "Successful actions are visible, but denied requests, baseline changes, and exception renewals are not.",
    "supports": "Defenders cannot validate prevention, drift, or governance reliably.",
    "limits": "Does not prove denied actions succeeded.",
    "use": "Add denial, configuration, exception, source-health, version, and closure evidence."
  },
  {
    "id": "HAR-07",
    "source": "Fictional recovery exercise",
    "observation": "The restored system returned with an older baseline containing stale supplier access and missing source-health checks.",
    "supports": "Recovery states are not aligned with current hardening requirements.",
    "limits": "Does not prove the restore data is corrupted.",
    "use": "Version golden states, reconcile changes, validate current baseline, and close outdated access."
  },
  {
    "id": "HAR-08",
    "source": "Fictional operations review",
    "observation": "Only one administrator understands the hardened configuration and rollback process.",
    "supports": "Operational complexity and ownership concentration create resilience risk.",
    "limits": "Does not prove the administrator is unreliable.",
    "use": "Standardize patterns, improve documentation, train alternate owners, and validate independent operation."
  }
];
const commonMistakes = [
  "Treating fictional hardening as a checklist of settings without connecting each requirement to mission, identity, data, service, evidence, failure, and recovery.",
  "Assuming vendor or product defaults are automatically secure for the fictional mission.",
  "Enabling broad access, services, interfaces, integrations, and privilege first, then trying to reduce them later.",
  "Using network location as a substitute for identity and authorization.",
  "Disabling fictional services or paths without understanding hidden dependencies and recovery needs.",
  "Applying fail-closed behavior that causes unnecessary mission outage.",
  "Applying fail-open fallback that creates uncontrolled identity, path, data, or administrative access.",
  "Allowing one fictional administrator to approve, implement, validate, alter evidence, recover, and accept risk.",
  "Maintaining baseline documents without comparing them to effective configuration.",
  "Leaving fictional exceptions without purpose, owner, scope, compensating controls, evidence, expiration, and remediation.",
  "Logging successful activity while omitting denied actions, configuration changes, source health, exception renewals, and rollback.",
  "Restoring fictional systems from outdated golden states that reintroduce stale access, weak settings, or missing evidence.",
  "Creating a hardening design so complex that only one person can support or recover it.",
  "Failing to review fictional baselines after architecture, supplier, service, identity, privacy, or recovery changes.",
  "Using real internal configurations, addresses, hostnames, usernames, rules, services, logs, supplier details, or exceptions in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What best describes a fictional secure default?",
    "choices": [
      "Enable every feature and remove risky ones later.",
      "Begin with the minimum safe access and functionality, then add only approved capabilities with ownership and evidence.",
      "Block every service regardless of mission need.",
      "Use the product default configuration unchanged."
    ],
    "answer": 1,
    "explanation": "Secure defaults start from minimum necessary capability and add approved functions deliberately."
  },
  {
    "question": "Why is least functionality important?",
    "choices": [
      "Every feature is dangerous.",
      "Unused fictional services, interfaces, integrations, and administrative functions increase exposure and complexity without supporting the mission.",
      "It removes the need for recovery.",
      "It guarantees perfect security."
    ],
    "answer": 1,
    "explanation": "Least functionality reduces unnecessary exposure while preserving required mission outcomes."
  },
  {
    "question": "A hardening change breaks an undocumented identity dependency. What is the strongest response?",
    "choices": [
      "Remove all hardening permanently.",
      "Pause rollout, preserve the intended restriction, document the minimum dependency, approve a narrow path, add evidence, and update the architecture.",
      "Keep the outage because restrictive settings are always correct.",
      "Allow broad communication again."
    ],
    "answer": 1,
    "explanation": "The design should correct the hidden dependency without restoring unnecessary broad access."
  },
  {
    "question": "What makes a fictional baseline exception defensible?",
    "choices": [
      "It is labeled temporary.",
      "It has purpose, owner, scope, risk, compensating controls, evidence, expiration, remediation, recovery behavior, and review.",
      "It was requested by an administrator.",
      "It has existed for a long time."
    ],
    "answer": 1,
    "explanation": "A defensible exception is narrow, accountable, monitored, time-limited, and removable."
  },
  {
    "question": "What is strongest evidence that fictional hardening works?",
    "choices": [
      "The baseline document is complete.",
      "Effective settings, identities, services, paths, data uses, denials, exceptions, failures, rollback, and recovered states match approved requirements.",
      "No user has complained.",
      "The system has many disabled features."
    ],
    "answer": 1,
    "explanation": "Hardening must be validated in effective state across normal, degraded, changed, and recovered conditions."
  },
  {
    "question": "A fictional recovery restores an older baseline. What should happen?",
    "choices": [
      "Accept it because the service starts.",
      "Compare it with the current approved baseline, reconcile changes and exceptions, close stale access, and validate complete service state.",
      "Delete all recovery evidence.",
      "Keep the older baseline permanently."
    ],
    "answer": 1,
    "explanation": "Recovery must restore current trusted architecture, not merely an available older state."
  },
  {
    "question": "What makes an A2.8 portfolio artifact safe to share?",
    "choices": [
      "Only real passwords are removed.",
      "The real configuration is shortened.",
      "Every organization, system, identity, setting, service, path, exception, evidence item, decision, date, and outcome is invented.",
      "Only addresses are changed."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects real systems, people, architecture, and control details."
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

export default function SecureDefaultsAndHardeningStrategyPage() {
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
              Lesson 8 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Secure Defaults
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A2.8 Secure Defaults and Hardening Strategy
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how advanced defenders begin fictional systems in the minimum
            safe state, enable only approved capabilities, reduce unnecessary
            exposure, create measurable baselines, govern exceptions, preserve
            mission and recovery, detect drift, and validate effective
            configuration across the architecture lifecycle.
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
          lessonTitle="Secure Defaults and Hardening Strategy"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional organizations, systems, identities, settings, services, paths, exceptions, evidence, decisions, dates, and outcomes.",
            "I understand that a written baseline does not prove effective hardening.",
            "I will connect every fictional restriction to mission, identity, service, data, evidence, failure, rollback, and recovery.",
            "I will not upload or reproduce real configurations, addresses, hostnames, usernames, rules, services, logs, supplier details, exceptions, or recovery states.",
            "I will analyze only supplied fictional evidence and will not access, test, configure, harden, scan, change, or investigate real systems.",
            "I will document hidden dependencies, usability and availability impact, exceptions, drift, source health, rollback, recovery compatibility, and residual risk.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Secure Setting Can Still Create an Unsafe System"
        >
          <p className="leading-8">
            A fictional team applies a restrictive network baseline and disables
            several services. A critical support function fails because an
            identity dependency was undocumented. Meanwhile, five truly unused
            services remain enabled, seven exceptions have no expiration, one
            support role retains broad privilege, denied requests and baseline
            changes are not visible, and the recovery state restores an older
            configuration. Hardening is not simply making settings stricter. It
            is building the minimum safe, supportable, visible, and recoverable
            architecture.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Restrictive configuration
              </p>
              <p className="mt-2 leading-7">
                Disable fictional features and paths without proving mission
                need, dependencies, evidence, safe failure, rollback, or
                recovery.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Defensible hardening
              </p>
              <p className="mt-2 leading-7">
                Begin from minimum capability, add only approved functions,
                validate effective state, govern exceptions, and preserve safe
                operation and recovery.
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
          title="Every Enabled Capability Creates Responsibility"
        >
          <p className="leading-8">
            Each fictional identity, role, interface, service, path, data field,
            supplier integration, administrative function, evidence source, and
            recovery feature adds value only when it supports an approved
            mission. It also creates ownership, monitoring, change, failure,
            privacy, and recovery obligations. Secure defaults make capability
            deliberate instead of accidental.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Reduce exposure",
                "Remove fictional unnecessary access, services, interfaces, data, integrations, and privilege.",
              ],
              [
                "Improve consistency",
                "Use fictional measurable baselines, versions, owners, evidence, validation, and drift correction.",
              ],
              [
                "Preserve recovery",
                "Ensure fictional hardened states can degrade, roll back, restore, reconcile, and close safely.",
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
          title="Minimum State → Approved Capability → Measurable Baseline → Effective Validation → Drift Control → Recovery"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Minimum state", "Begin fictional access, functionality, paths, sharing, privilege, and supplier use at the minimum safe level."],
              ["Approved capability", "Add fictional features only with mission purpose, owner, scope, dependency, evidence, failure behavior, and recovery."],
              ["Baseline", "Express fictional identity, service, network, application, data, evidence, supplier, and recovery requirements measurably."],
              ["Validation", "Compare fictional approved requirements with actual settings, identities, services, paths, exceptions, and results."],
              ["Drift control", "Detect fictional unapproved change, stale access, new services, broad rules, source gaps, and expired exceptions."],
              ["Exception governance", "Document fictional constraint, risk, scope, compensating controls, owner, evidence, expiration, and remediation."],
              ["Safe failure", "Define fictional fail-open, fail-closed, degraded, manual, rollback, and recovery behavior based on mission and risk."],
              ["Lifecycle", "Review fictional changes, suppliers, versions, restore states, owners, hardening debt, and corrective actions over time."],
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
          title="Language for Secure Defaults and Hardening"
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
            Hardening Domains
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Architecture Domains Requiring Secure Defaults
          </h2>

          <div className="mt-6 grid gap-5">
            {hardeningDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.domain}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {item.secure_default}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Hardening actions", item.hardening_actions],
                    ["Required evidence", item.evidence],
                    ["Failure risk", item.failure_risk],
                    ["Recovery need", item.recovery_need],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.domain}-${label}`}
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
            Measurable Baseline Requirements
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Replace Vague Hardening Language with Testable Outcomes
          </h2>

          <div className="mt-6 grid gap-5">
            {baselineRequirements.map((item) => (
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
            Hardening Principles
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Principles for a Defensible Baseline
          </h2>

          <div className="mt-6 grid gap-5">
            {hardeningPrinciples.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.principle}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {item.design_question}
                </p>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong pattern
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strong_pattern}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Failure pattern
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.failure_pattern}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Validation
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.validation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Exception Architecture
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fields for a Defensible Fictional Exception
          </h2>

          <div className="mt-6 grid gap-5">
            {exceptionModel.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.field}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.question}</p>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required record
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.required_record}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak example
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.weak_example}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong example
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strong_example}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Hardening Failure Modes
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Ways a Strong-Looking Baseline Can Fail
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
            Ten Steps from Mission Context to Hardening Governance
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
            Hardening Ownership
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Owners for Baselines, Evidence, Recovery, and Risk
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
          title="Fake Northbridge Secure-Defaults Dashboard"
          subtitle="Fictional baseline, effective-state, exception, drift, evidence, operations, and recovery review for training only."
          metrics={[
            {
              label: "Baseline domains",
              value: "8",
              note: "Fictional identity, network, service, data, administration, evidence, supplier, and recovery domains are included.",
            },
            {
              label: "Hardening concerns",
              value: "8",
              note: "Unused capabilities, broad privilege, stale exceptions, hidden dependency, evidence gaps, outdated recovery state, and operational concentration require action.",
            },
            {
              label: "Current status",
              value: "Drift",
              note: "The fictional effective state does not fully match the approved secure-default baseline.",
            },
          ]}
        />

        <FakeAlertCard
          title="Effective Configuration Has Drifted from the Approved Hardening Baseline"
          severity="High"
          time="9:16 PM"
          source="Fake Northbridge Hardening Governance Console"
          details="Five unused fictional services and two broad administrative interfaces remain enabled. One support role has cross-domain privilege, seven exceptions lack expiration, denied requests and baseline changes are not fully visible, and recovery restores an outdated configuration."
          recommendation="Pause final approval, inventory effective capability, remove or justify exposure, split privilege, govern exceptions, restore denial and change evidence, update golden states, train alternate operators, and validate normal, degraded, failed, rolled-back, and recovered outcomes."
        />

        <FakeLogPanel
          title="Fake Hardening Review Timeline"
          logs={[
            "20:00 BASELINE domains='8'",
            "20:05 EFFECTIVE unused-services='5'",
            "20:06 EFFECTIVE broad-admin-interfaces='2'",
            "20:15 IDENTITY support-role='cross-domain-broad'",
            "20:25 EXCEPTION total='7'",
            "20:26 EXCEPTION no-owner='3'",
            "20:27 EXCEPTION no-expiration='7'",
            "20:40 CHANGE restrictive-rule='applied'",
            "20:41 SERVICE critical-support='failed'",
            "20:42 DEPENDENCY identity-path='undocumented'",
            "20:50 EVIDENCE denied-actions='missing'",
            "20:51 EVIDENCE baseline-changes='partial'",
            "21:00 RECOVERY golden-state='outdated'",
            "21:01 RECOVERY stale-supplier-access='restored'",
            "21:05 OPERATIONS alternate-owner='missing'",
            "21:16 STATUS baseline-drift='confirmed'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence before Approving the Hardening Strategy
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
          title="Should the Fictional Hardening Strategy Be Approved?"
          question="Should the current fictional Northbridge secure-default and hardening strategy be approved?"
          evidence={[
            "The approved baseline covers eight major architecture domains.",
            "Five unused services and two broad administrative interfaces remain enabled.",
            "One support role retains identity, data, logging, backup, and recovery privilege.",
            "Seven baseline exceptions have no expiration, and three lack current owners.",
            "A restrictive change caused a critical support outage because an identity dependency was undocumented.",
            "Denied requests, baseline changes, and exception renewals have incomplete evidence coverage.",
            "The recovery state restores stale supplier access and lacks current source-health checks.",
            "Only one administrator understands the hardened configuration and rollback process.",
          ]}
          options={[
            "No. Pause approval, inventory effective capability, remove or justify exposure, split privilege, govern exceptions, correct dependency analysis, restore evidence, update recovery states, train alternate operators, and validate the complete lifecycle.",
            "Yes, because the baseline document covers eight domains.",
            "Yes, because restrictive settings are always secure.",
            "Yes, because the recovery image starts successfully.",
          ]}
          bestAnswer={0}
          explanation="Hardening approval requires minimum necessary capability, measurable baselines, effective-state validation, accountable exceptions, safe mission impact, reliable evidence, current recovery states, operational resilience, and lifecycle governance."
        />

        <SectionCard
          eyebrow="Common Hardening Mistakes"
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
          title="Build a Fictional Secure-Defaults and Hardening Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Redesign the Northbridge Hardening Baseline
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                copy, quote, lightly modify, summarize, or reproduce real
                configurations, addresses, hostnames, usernames, rules,
                services, logs, suppliers, exceptions, golden states, or
                internal architecture.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Fictional mission, asset, trust, dependency, and risk context.</li>
                <li>Effective-capability inventory covering identities, services, interfaces, paths, data, suppliers, administration, evidence, and recovery.</li>
                <li>Secure-default and explicitly denied-capability standard.</li>
                <li>Eight-domain measurable hardening baseline.</li>
                <li>Dependency, service-impact, usability, accessibility, support, and recovery tradeoff matrix.</li>
                <li>Change, approval, communication, rollback, and validation plan.</li>
                <li>Effective-state comparison, drift, denied-action, source-health, and configuration-evidence package.</li>
                <li>Exception and compensating-control register with expiration and remediation.</li>
                <li>Failure-state, safe degraded mode, rollback, restore compatibility, and recovery-closure plan.</li>
                <li>Reflection, revision history, residual-risk decision, and complete fictionalization statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This activity creates a fictional educational design only. It does
            not authorize access, configuration, hardening, scanning, service
            changes, account changes, testing, recovery, or investigation
            involving any real system.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Restrictive Change Breaks a Critical Service"
          scenario="A fictional hardening change blocks an undocumented identity dependency. The intended restriction reduces broad communication, but the critical support function also stops working."
          choices={[
            {
              label: "Choice A",
              response: "Pause rollout, preserve the intended restriction, identify and document the minimum dependency, approve a narrow identity-aware path, add evidence, validate service recovery, and update the baseline.",
              outcome: "Best professional choice. The response preserves hardening intent while correcting the hidden dependency safely.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Remove the entire hardening baseline.",
              outcome: "Risky. One hidden dependency does not justify restoring every unnecessary capability.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Keep the outage because stricter settings are always safer.",
              outcome: "Unsafe. Architecture must preserve approved critical mission and recovery outcomes.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Temporary Exception Has No End Date"
          scenario="A fictional supplier integration uses a broad temporary path. The exception has existed for months, the original owner has changed roles, and current evidence shows only one narrow service action is needed."
          choices={[
            {
              label: "Choice A",
              response: "Assign a current owner, preserve evidence, narrow identity, path, action, and data scope, add compensating controls, set expiration and remediation, validate denied alternatives, and document the risk decision.",
              outcome: "Best professional choice. The response turns an unmanaged exception into narrow temporary architecture with a removal path.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Keep the broad path because it has not caused a known incident.",
              outcome: "Risky. Absence of known harm does not prove the exception is safe or necessary.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Remove the supplier connection immediately without checking mission impact or fallback.",
              outcome: "Unsafe. The exception should be narrowed or removed through an evidence-based service and owner decision.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design a Baseline That Survives Failure and Recovery"
        >
          <p className="leading-8">
            Extend the fictional Northbridge baseline for a combined identity,
            logging, and supplier failure during recovery. A critical support
            function must continue in a limited mode. Design the secure defaults,
            enabled capabilities, denied actions, alternate identities, minimum
            paths, data limits, evidence, owners, exceptions, rollback, restore
            state, closure, and validation required to preserve the mission
            without restoring broad access.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              [
                "Required architecture",
                "Show fictional normal, degraded, rollback, recovery, and restored baselines with versions, owners, evidence, expiration, and stop conditions.",
              ],
              [
                "Required proof",
                "Explain how the design reduces exposure, preserves critical service, prevents exception drift, reconciles recovery state, and validates effective closure.",
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
          title="Secure Defaults and Hardening Strategy Checklist"
          items={[
            "I can define fictional mission, users, identities, services, data, suppliers, administrators, evidence, dependencies, and recovery outcomes.",
            "I can inventory fictional effective identities, permissions, services, interfaces, paths, integrations, data uses, administrative functions, and recovery features.",
            "I can define fictional secure defaults that begin with minimum access, functionality, communication, sharing, privilege, and supplier use.",
            "I can write fictional measurable baselines for identity, network, service, application, data, administration, logging, supplier, backup, and recovery domains.",
            "I can identify fictional unnecessary functionality, broad privilege, hidden dependencies, weak source health, stale settings, configuration drift, and hardening debt.",
            "I can design fictional fail-open, fail-closed, degraded, manual, rollback, and recovery behavior based on mission and risk.",
            "I can create fictional exceptions with purpose, owner, scope, risk, compensating controls, evidence, expiration, remediation, and recovery compatibility.",
            "I can preserve fictional denied-action, configuration-change, source-health, exception, rollback, recovery, and closure evidence.",
            "I can separate fictional approval, implementation, evidence administration, validation, recovery, and risk acceptance.",
            "I can validate fictional approved baselines against effective settings, identities, services, paths, data, exceptions, and restore states.",
            "I can govern fictional versions, suppliers, owners, exceptions, unsupported settings, corrective actions, recovery states, and residual risk.",
            "I will never use real configurations, addresses, hostnames, usernames, rules, services, logs, supplier details, exceptions, or recovery states in this portfolio.",
          ]}
        />

        <MiniQuiz
          title="A2.8 Mini Quiz: Secure Defaults and Hardening Strategy"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Secure-Defaults and Hardening Strategy Package for Northbridge. Include the mission and risk context, effective-capability inventory, secure-default standard, denied capabilities, eight-domain measurable baseline, least functionality review, identity and administrative controls, communication defaults, service configuration, data minimization, logging and configuration evidence, supplier defaults, backup and recovery compatibility, dependency and service-impact analysis, change and rollback plan, effective-state validation, configuration drift, exception and compensating-control register, hardening debt, safe degraded modes, restored-state comparison, residual risk, reflection, revision history, and a statement that every organization, system, identity, setting, service, path, exception, evidence item, decision, date, and outcome is invented."
          tips={[
            "Begin every fictional domain from minimum safe capability and add only approved functions.",
            "Make each baseline requirement measurable, owned, visible, supportable, and recoverable.",
            "Include at least one hidden dependency or restrictive change failure and redesign it without restoring broad access.",
            "Show how fictional exceptions expire, remediate, close, and remain compatible with failure and recovery.",
            "Keep every system, identity, setting, service, path, supplier, exception, evidence item, decision, date, and outcome completely invented.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready to Evaluate Architecture Tradeoffs and Constraints?"
        >
          <p className="leading-8">
            Before moving to A2.9, rate your readiness from 1 to 5 for each area:
            secure defaults, least functionality, measurable baselines,
            identities, administrative separation, data minimization,
            configuration evidence, drift, exceptions, service impact, safe
            failure, rollback, recovery compatibility, and lifecycle governance.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why a fictional stricter setting may still create an unsafe mission outcome.",
              "I can define fictional minimum safe capability and add only approved services, paths, privilege, data, and integrations.",
              "I can distinguish fictional baseline documentation from effective-state validation.",
              "I can identify fictional hidden dependencies, stale exceptions, broad privilege, missing evidence, outdated recovery states, and operational concentration.",
              "I can design fictional exception, rollback, degraded-mode, recovery, and closure controls.",
              "I can keep the entire secure-defaults and hardening portfolio fully invented and safe to share.",
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
            Record one fictional capability you would disable by default, one
            exception you would challenge, and one architecture tradeoff you
            will carry into A2.9.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Secure defaults begin fictional systems with minimum safe access, functionality, communication, sharing, privilege, and supplier use.",
            "Hardening reduces unnecessary fictional capability while preserving mission, usability, evidence, failure safety, rollback, and recovery.",
            "Measurable baselines are stronger than vague instructions such as use secure settings.",
            "Least functionality requires every fictional enabled service, interface, feature, integration, and administrative function to have current purpose and owner.",
            "Authentication, internal location, or supplier approval does not create unlimited fictional authorization.",
            "Baseline exceptions need fictional purpose, owner, scope, risk, compensating controls, evidence, expiration, remediation, and recovery compatibility.",
            "Hardening changes should account for fictional hidden dependencies, safe degraded service, rollback, communication, and complete recovery.",
            "Effective-state validation compares fictional approved baselines with actual settings, identities, services, paths, data, exceptions, and restore states.",
            "Golden states and backups must be reconciled with the current fictional baseline so recovery does not reintroduce old risk.",
            "Every CyberShield hardening artifact must remain fully fictional, defensive, non-operational, privacy-safe, and incapable of exposing real systems.",
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