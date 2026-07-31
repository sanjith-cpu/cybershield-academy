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
const previousLesson = `${modulePath}/architecture-tradeoffs-and-constraints`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate fictional mission, trust boundaries, segmentation, identity, logging, resilience, hardening, and tradeoff decisions into one coherent security architecture.",
  "Translate fictional stakeholder needs and evidence into explicit architecture requirements, design decisions, controls, owners, assumptions, exceptions, and validation criteria.",
  "Evaluate a fictional architecture across normal, degraded, failed, recovered, changed, supplier-outage, and growth conditions without relying on one control or one diagram.",
  "Produce a defensible fictional design package containing diagrams, matrices, decision records, risk statements, evidence plans, recovery gates, and owner approvals.",
  "Create a portfolio-ready fictional security architecture design lab using only invented organizations, systems, identities, data, evidence, decisions, dates, and outcomes."
];
const vocabulary = [
  [
    "Architecture brief",
    "A fictional statement of mission, users, systems, data, constraints, trust, risks, dependencies, and decisions that the design must address."
  ],
  [
    "System context",
    "A fictional view of the people, services, identities, data, suppliers, environments, owners, and external relationships surrounding the architecture."
  ],
  [
    "Architecture requirement",
    "A fictional measurable outcome the design must satisfy across security, privacy, availability, accessibility, evidence, operations, and recovery."
  ],
  [
    "Architecture decision record",
    "A fictional artifact documenting context, options, criteria, decision, consequences, assumptions, owner, evidence, review, and revision."
  ],
  [
    "Trust model",
    "A fictional explanation of which identities, services, data, paths, owners, and assertions are trusted, under what conditions, and how that trust is validated."
  ],
  [
    "Control stack",
    "A fictional set of preventive, detective, responsive, recovery, governance, and compensating controls working together for one risk or requirement."
  ],
  [
    "Control objective",
    "A fictional statement describing the outcome a control or group of controls must achieve."
  ],
  [
    "Architecture pattern",
    "A fictional reusable design approach for identity, segmentation, evidence, recovery, supplier access, administration, or another security concern."
  ],
  [
    "Design assumption",
    "A fictional condition treated as true during architecture work, with evidence, owner, confidence, review trigger, and fallback if it changes."
  ],
  [
    "Design constraint",
    "A fictional limit involving time, budget, staff, technology, supplier, policy, privacy, accessibility, operations, or recovery."
  ],
  [
    "Design invariant",
    "A fictional non-negotiable condition that must remain true across normal, degraded, failed, and recovered states."
  ],
  [
    "Attack surface",
    "The fictional identities, services, interfaces, paths, data, suppliers, administrative functions, and recovery mechanisms that could be reached or misused."
  ],
  [
    "Failure domain",
    "A fictional group of systems, controls, identities, owners, suppliers, or services that may fail together because of a shared dependency."
  ],
  [
    "Blast radius",
    "The fictional scope of users, systems, identities, data, evidence, suppliers, and mission functions affected by a failure or control weakness."
  ],
  [
    "Architecture drift",
    "A fictional mismatch between approved design and effective identities, paths, services, settings, data flows, exceptions, evidence, or recovery behavior."
  ],
  [
    "Design evidence",
    "Fictional records that prove or challenge assumptions, requirements, controls, effective state, failures, recovery, and owner decisions."
  ],
  [
    "Validation gate",
    "A fictional checkpoint requiring evidence and owner approval before a design phase, change, rollout, recovery, or closure proceeds."
  ],
  [
    "Residual risk",
    "The fictional risk remaining after architecture controls, decisions, and compensating measures are applied."
  ],
  [
    "Exception architecture",
    "A fictional temporary or approved deviation with purpose, owner, scope, evidence, compensating controls, expiration, recovery behavior, and removal."
  ],
  [
    "Operational model",
    "A fictional explanation of who runs, monitors, changes, supports, validates, recovers, and governs the architecture."
  ],
  [
    "Recovery architecture",
    "A fictional design for safe continuity, degraded operation, restore order, recovery identity, evidence, validation, and closure."
  ],
  [
    "Portfolio artifact",
    "A fictional educational deliverable that demonstrates reasoning, design, evidence, communication, and reflection without exposing real systems."
  ]
];
const architectureBrief = [
  {
    "area": "Mission and users",
    "brief": "The fictional Northbridge Learning Support Service helps students, teachers, and staff submit support requests, view status, and receive approved assistance.",
    "requirements": "Critical read-only status must remain available during limited disruption; accessibility and privacy are non-negotiable.",
    "risk": "A design may protect systems while blocking intended users or exposing unnecessary personal information.",
    "evidence": "User journeys, mission-owner approval, accessibility review, privacy review, and support outcomes."
  },
  {
    "area": "Core services",
    "brief": "The fictional service includes public access, application processing, identity, authorization, data, logging, administration, supplier integration, and recovery capabilities.",
    "requirements": "Each service must have purpose, owner, identity, dependencies, approved paths, evidence, failure behavior, and recovery order.",
    "risk": "Hidden dependencies and broad communication may collapse segmentation and recovery.",
    "evidence": "Service catalog, dependency map, flow matrix, source-health plan, and recovery exercise."
  },
  {
    "area": "Identity",
    "brief": "Fictional human, service, supplier, administrator, automation, observer, emergency, and recovery identities exist.",
    "requirements": "Unique ownership, least privilege, separation of duties, lifecycle, time-bound privilege, and effective-access validation.",
    "risk": "One broad identity may bypass segmentation, logging, data, and recovery controls.",
    "evidence": "Identity inventory, role matrix, approvals, privileged sessions, access reviews, and closure records."
  },
  {
    "area": "Data and privacy",
    "brief": "The fictional service processes support metadata, status, limited user information, and service evidence.",
    "requirements": "Collect and retain only the minimum necessary fields for approved service, security, recovery, and governance questions.",
    "risk": "Full message content, broad exports, unnecessary retention, or supplier sharing may increase privacy exposure.",
    "evidence": "Data inventory, field allowlist, flow map, access review, retention, deletion, and privacy signoff."
  },
  {
    "area": "Trust boundaries and segmentation",
    "brief": "Public, application, identity, data, management, logging, supplier, and recovery zones must remain meaningfully separate.",
    "requirements": "Every crossing needs purpose, identity, action, data scope, owner, control, evidence, failure behavior, and denied alternatives.",
    "risk": "Visual zones may be bypassed by broad roles, hidden paths, supplier overreach, or temporary recovery rules.",
    "evidence": "Boundary register, effective-flow review, denied-path evidence, rule changes, exceptions, and recovery closure."
  },
  {
    "area": "Logging and evidence",
    "brief": "Fictional identity, application, network, data, administrative, supplier, and recovery evidence must answer approved questions.",
    "requirements": "Source health, time quality, schema version, privacy, access, retention, administrative evidence, and resilience are required.",
    "risk": "A green dashboard may hide source silence, schema drift, overcollection, or privileged evidence control.",
    "evidence": "Coverage map, event schema, source-health dashboard, time-quality checks, access review, and reconciliation."
  },
  {
    "area": "Resilience and recovery",
    "brief": "The fictional mission must continue in a limited safe mode during identity, logging, supplier, or platform failure.",
    "requirements": "Separate recovery identity, alternate evidence, local fallback, gated restore order, complete service validation, and temporary-access closure.",
    "risk": "The application may return before identity, data, logging, suppliers, users, and trust are restored.",
    "evidence": "Recovery sequence, restore exercise, source reconciliation, user journeys, owner acceptance, and closure."
  },
  {
    "area": "Constraints and tradeoffs",
    "brief": "The fictional organization has limited budget, two specialized operators, a six-month timeline, a legacy dependency, and supplier reliance.",
    "requirements": "Protect non-negotiable outcomes, stage delivery, preserve accessibility and privacy, and maintain reversibility.",
    "risk": "Low purchase cost or fast delivery may create lock-in, shared failure, privacy risk, or permanent transition debt.",
    "evidence": "Option matrix, lifecycle cost, staffing model, pilot results, rollback, sunset criteria, and decision record."
  }
];
const architectureRequirements = [
  {
    "id": "REQ-01",
    "requirement": "Fictional public users may access only approved public and user-facing functions.",
    "rationale": "Reduces direct exposure to data, management, logging, supplier, and recovery capabilities.",
    "validation": "Approved public journeys succeed; direct requests to protected functions are denied and recorded.",
    "owner": "Mission, application, and network owners.",
    "failure": "Public or anonymous access reaches internal service or management functions."
  },
  {
    "id": "REQ-02",
    "requirement": "Every fictional service-to-service request must use a registered identity and explicit authorization.",
    "rationale": "Prevents internal location from becoming automatic trust.",
    "validation": "Approved service actions succeed; unregistered identities and unrelated actions are denied and visible.",
    "owner": "Identity, application, and service owners.",
    "failure": "Shared credentials or broad internal trust permit unrelated access."
  },
  {
    "id": "REQ-03",
    "requirement": "Fictional sensitive data access must be minimum necessary by identity, purpose, fields, action, and duration.",
    "rationale": "Reduces security and privacy exposure.",
    "validation": "Approved fields and actions succeed; unrelated fields, exports, and out-of-purpose access are denied and reviewed.",
    "owner": "Data, privacy, identity, and service owners.",
    "failure": "A valid service or user can access all records or full content."
  },
  {
    "id": "REQ-04",
    "requirement": "Fictional administrative access must use separate named privilege, approval, time limits, session evidence, and rollback.",
    "rationale": "Separates normal use from high-impact control authority.",
    "validation": "One privileged change is traceable from request through approval, action, result, validation, rollback readiness, and closure.",
    "owner": "Privileged-access, system, evidence, and governance owners.",
    "failure": "Shared administration or self-approval controls identity, systems, logs, backups, and evidence."
  },
  {
    "id": "REQ-05",
    "requirement": "Fictional evidence must preserve actor, action, target, purpose, decision, result, source, time, health, integrity, and owner.",
    "rationale": "Supports detection, response, recovery, governance, privacy, and leadership decisions.",
    "validation": "Normal, denied, changed, failed, and recovered actions can be reconstructed end to end.",
    "owner": "Evidence, source-system, service, and governance owners.",
    "failure": "Events exist without enough context or source confidence to support a decision."
  },
  {
    "id": "REQ-06",
    "requirement": "The fictional service must support a limited safe mode during identity, logging, or supplier failure.",
    "rationale": "Preserves critical mission outcomes without uncontrolled fail-open access.",
    "validation": "Read-only status and approved low-risk tasks work; high-risk updates and administration remain blocked.",
    "owner": "Mission, service, identity, evidence, supplier, and recovery owners.",
    "failure": "The organization chooses total outage or broad unrestricted fallback."
  },
  {
    "id": "REQ-07",
    "requirement": "Fictional recovery must restore identity, authorization, data, services, logging, suppliers, user journeys, and normal access in gated order.",
    "rationale": "Prevents premature recovery declarations.",
    "validation": "All dependency gates and multi-owner acceptance checks pass before closure.",
    "owner": "Recovery, mission, identity, data, service, evidence, and supplier owners.",
    "failure": "The application is online while key dependencies or trust remain incomplete."
  },
  {
    "id": "REQ-08",
    "requirement": "Fictional temporary exceptions must have purpose, owner, scope, evidence, compensating controls, expiration, remediation, and recovery behavior.",
    "rationale": "Prevents temporary access from becoming permanent architecture debt.",
    "validation": "The exception register matches effective identities, rules, paths, and settings; expired access is removed.",
    "owner": "Security, service, governance, risk, and recovery owners.",
    "failure": "An exception lacks current owner, end date, removal evidence, or residual-risk approval."
  },
  {
    "id": "REQ-09",
    "requirement": "Fictional accessibility and privacy must remain release gates for user-facing design.",
    "rationale": "Security architecture must protect intended users and minimize unnecessary personal information.",
    "validation": "Diverse user journeys pass; only approved minimum fields are collected and retained.",
    "owner": "Accessibility, privacy, mission, application, and governance owners.",
    "failure": "A secure-looking design excludes users or collects unnecessary content."
  },
  {
    "id": "REQ-10",
    "requirement": "Fictional architecture changes must be reversible and reviewable.",
    "rationale": "Preserves future choice and reduces risk under uncertainty.",
    "validation": "Pilot, rollback, migration, exit, sunset criteria, review triggers, and revision history are documented and exercised safely.",
    "owner": "Architecture, operations, supplier, recovery, finance, and governance owners.",
    "failure": "A temporary or supplier-dependent decision becomes permanent without review."
  }
];
const designDecisions = [
  {
    "decision": "Use a staged hybrid architecture",
    "reason": "Balances fictional staffing, budget, resilience, reversibility, and supplier dependence.",
    "alternatives": "Immediate centralization, distributed specialized tools, or maintaining the current state indefinitely.",
    "consequence": "Transition complexity and temporary duplication require strong sunset ownership and evidence.",
    "validation": "Pilot critical identity, evidence, and recovery functions; test rollback, supplier outage, staffing loss, and closure.",
    "review_trigger": "Cost growth, failed accessibility gate, source-health weakness, staffing loss, or missed sunset milestone."
  },
  {
    "decision": "Keep identity and recovery authority in separate failure domains",
    "reason": "Fictional recovery must remain possible during primary identity failure.",
    "alternatives": "Use one production identity platform and administrator group for all normal and recovery actions.",
    "consequence": "Adds governance, custody, exercise, and evidence requirements.",
    "validation": "Run a fictional recovery exercise while the primary identity service is unavailable.",
    "review_trigger": "Recovery identity drift, failed exercise, custody gap, or changed identity architecture."
  },
  {
    "decision": "Use question-driven minimum evidence",
    "reason": "Supports fictional decisions while reducing privacy, noise, cost, and retention burden.",
    "alternatives": "Collect all available events or minimize evidence until critical questions cannot be answered.",
    "consequence": "Blind spots must be documented and periodically reviewed.",
    "validation": "Trace approved, denied, changed, failed, and recovered events across critical sources.",
    "review_trigger": "New threat model, source failure, privacy change, incident gap, or recovery evidence weakness."
  },
  {
    "decision": "Use mission-based segmentation with identity-aware flows",
    "reason": "Limits fictional blast radius while avoiding trust based only on network location.",
    "alternatives": "Flat internal trust or highly fragmented segmentation without dependency analysis.",
    "consequence": "Requires accurate service identities, flow ownership, denied-path evidence, and recovery path planning.",
    "validation": "Compare approved and effective flows during normal, degraded, supplier-outage, and recovered states.",
    "review_trigger": "New service, supplier, data use, hidden dependency, recovery exception, or flow drift."
  },
  {
    "decision": "Make accessibility and privacy non-negotiable release gates",
    "reason": "The fictional service must protect and remain usable by intended users.",
    "alternatives": "Treat accessibility and privacy as post-launch improvements.",
    "consequence": "Some release scope may be reduced or delayed.",
    "validation": "Diverse user pilot, field-minimization review, retention review, and safe alternate flow.",
    "review_trigger": "User exclusion, support spike, new data field, supplier change, or privacy concern."
  },
  {
    "decision": "Use secure defaults with explicit exceptions",
    "reason": "Reduces fictional unnecessary capability and architecture drift.",
    "alternatives": "Broad initial access or undocumented one-off configuration.",
    "consequence": "Requires baseline ownership, drift review, dependency analysis, exception expiry, and recovery-state alignment.",
    "validation": "Compare approved baseline with effective state after change, failure, supplier update, and recovery.",
    "review_trigger": "Service outage, stale exception, unsupported setting, configuration drift, or outdated restore state."
  },
  {
    "decision": "Use limited safe degraded service",
    "reason": "Preserves fictional critical status and low-risk support while identity, logging, or supplier functions are unavailable.",
    "alternatives": "Total outage or broad fail-open access.",
    "consequence": "The architecture needs preapproved roles, data limits, alternate evidence, communication, and expiry.",
    "validation": "Exercise degraded user journeys and confirm high-risk actions remain denied.",
    "review_trigger": "Mission change, new dependency, failed exercise, source-health gap, or broadened fallback."
  },
  {
    "decision": "Require complete multi-owner recovery acceptance",
    "reason": "Application availability alone does not prove fictional mission recovery.",
    "alternatives": "Close recovery when the main system starts.",
    "consequence": "Recovery may remain open longer while identity, data, evidence, suppliers, users, and temporary access are validated.",
    "validation": "Pass identity, authorization, data, service, logging, supplier, accessibility, communication, and closure checks.",
    "review_trigger": "Missed recovery target, data gap, unreconciled evidence, failed user journey, or open temporary access."
  }
];
const controlStacks = [
  {
    "objective": "Prevent broad privileged control",
    "preventive": "Fictional separate identities, least privilege, just-in-time access, target allowlists, and separation of duties.",
    "detective": "Privileged-session evidence, approval comparison, role-drift review, source health, and unusual-action alerts.",
    "responsive": "Suspend narrow privilege, preserve evidence, validate changes, communicate owners, and use rollback.",
    "recovery": "Use separately governed recovery identities and restore normal roles after validation.",
    "governance": "Access reviews, conflict reviews, exception expiry, residual-risk decisions, and corrective actions."
  },
  {
    "objective": "Protect sensitive fictional data",
    "preventive": "Purpose limitation, field allowlists, service identity, explicit authorization, export limits, and retention defaults.",
    "detective": "Data-access evidence, volume review, denied-field events, export alerts, integrity, and source health.",
    "responsive": "Limit access, preserve evidence, validate purpose, notify owners, and correct scope.",
    "recovery": "Restore trusted data state, validate integrity and field scope, and reconcile gaps.",
    "governance": "Privacy review, retention, deletion, supplier scope, exceptions, and owner signoff."
  },
  {
    "objective": "Preserve segmentation",
    "preventive": "Mission-based zones, identity-aware flows, default deny, protected management, supplier, logging, and recovery paths.",
    "detective": "Allowed and denied-flow records, rule changes, architecture drift, exceptions, and source health.",
    "responsive": "Pause unapproved paths, narrow rules, preserve service, validate dependencies, and update architecture.",
    "recovery": "Use approved temporary recovery paths with expiration and effective-state closure.",
    "governance": "Flow ownership, rule hygiene, exception review, supplier review, and residual risk."
  },
  {
    "objective": "Maintain trustworthy evidence",
    "preventive": "Question-driven schemas, minimum fields, source identity, time quality, integrity, separate administration, and protected retention.",
    "detective": "Source-health alerts, schema tests, parser-version checks, access review, time-quality monitoring, and gap detection.",
    "responsive": "Reduce confidence, seek alternate evidence, repair source or schema, reconcile records, and update cases.",
    "recovery": "Restore sources, transport, parsing, access, storage, and delayed-event reconciliation.",
    "governance": "Coverage review, privacy minimization, retention, blind-spot acceptance, and administrative evidence."
  },
  {
    "objective": "Support safe continuity",
    "preventive": "Redundancy conceptually, separate failure domains, recovery identities, trusted restore states, dependency maps, and runbooks.",
    "detective": "Service health, backup integrity, source health, dependency failure, recovery gate status, and user-journey checks.",
    "responsive": "Enter limited safe mode, protect evidence and backups, coordinate owners, and communicate uncertainty.",
    "recovery": "Restore identity, data, services, logging, suppliers, users, and normal access in approved order.",
    "governance": "Recovery exercises, corrective actions, owner coverage, closure evidence, and residual-risk decisions."
  },
  {
    "objective": "Control supplier dependence",
    "preventive": "Named supplier identity, sponsor, narrow paths, data limits, contract purpose, expiration, fallback, and portability.",
    "detective": "Supplier health, access, data scope, flow evidence, changes, support sessions, and expiration review.",
    "responsive": "Pause unapproved reach, preserve evidence, use fallback, communicate owners, and correct scope.",
    "recovery": "Revalidate supplier identity, health, interface, data, evidence, and user impact before full use.",
    "governance": "Supplier register, service requirements, exit test, residual risk, and renewal decision."
  }
];
const validationScenarios = [
  {
    "scenario": "Normal operation",
    "question": "Do fictional users, services, identities, data, evidence, suppliers, and administrators operate only through approved paths and roles?",
    "tests": "Critical user journeys, service authorization, data scope, denied paths, privileged session, source health, and owner review.",
    "success": "Approved actions succeed; unrelated actions are denied; evidence is complete; privacy and accessibility gates pass.",
    "failure": "Broad trust, missing context, user exclusion, or hidden path appears."
  },
  {
    "scenario": "Identity service failure",
    "question": "Can the fictional mission continue in a limited safe mode without uncontrolled privilege?",
    "tests": "Alternate identity assurance, low-risk roles, blocked high-impact actions, independent approval, alternate evidence, expiry, and recovery.",
    "success": "Critical status remains available; risky actions stay blocked; recovery identity remains separate and accountable.",
    "failure": "Every user becomes trusted or every service stops unnecessarily."
  },
  {
    "scenario": "Logging platform failure",
    "question": "Can fictional high-impact decisions remain cautious and attributable with minimum alternate evidence?",
    "tests": "Source buffering conceptually, alternate records, action limits, manual review, source health, time quality, and reconciliation.",
    "success": "Minimum questions remain answerable; uncertainty is explicit; delayed evidence reconciles after restoration.",
    "failure": "Silence is treated as safety or high-impact actions continue without evidence."
  },
  {
    "scenario": "Supplier outage",
    "question": "Can the fictional mission continue safely without the external service?",
    "tests": "Local fallback, narrow data use, alternate communication, owner decision, evidence, recovery, and exit readiness.",
    "success": "Critical service continues in limited mode and full supplier use resumes only after scope and health validation.",
    "failure": "The mission stops completely or broad emergency supplier access is granted."
  },
  {
    "scenario": "Configuration change failure",
    "question": "Can the fictional architecture detect mission impact, preserve the security objective, and roll back safely?",
    "tests": "Change evidence, hidden dependency review, service health, rollback, denied actions, owner communication, and baseline update.",
    "success": "The change is paused or rolled back, the minimum dependency is documented, and broad access is not restored.",
    "failure": "The organization removes all hardening or leaves the outage unresolved."
  },
  {
    "scenario": "Recovery from disruption",
    "question": "Can fictional identity, data, services, logging, suppliers, users, communication, and normal access be restored in gated order?",
    "tests": "Restore integrity, dependency gates, user journeys, source reconciliation, temporary-access closure, and owner acceptance.",
    "success": "Complete mission outcome passes and all temporary trust is closed or formally governed.",
    "failure": "The application is online while dependencies, evidence, users, or access closure remain incomplete."
  },
  {
    "scenario": "Rapid growth",
    "question": "Can the fictional architecture scale without expanding broad trust, overcollection, complexity, or supplier lock-in?",
    "tests": "Capacity assumptions, identity lifecycle, segmentation, evidence volume, staffing, cost, privacy, and recovery.",
    "success": "Growth preserves minimum access, source health, owner coverage, user accessibility, and reversible decisions.",
    "failure": "Scaling depends on shared identities, disabled evidence, broad paths, or unreviewed data collection."
  },
  {
    "scenario": "Staffing loss",
    "question": "Can fictional alternate owners operate, change, validate, and recover the architecture?",
    "tests": "Runbooks, role separation, alternate approvals, training, support, change, rollback, and recovery exercise.",
    "success": "Another authorized operator completes a safe change and recovery without privilege concentration.",
    "failure": "Only one person understands or controls the design."
  }
];
const labPhases = [
  {
    "phase": "Phase 1: Frame the mission",
    "tasks": "Define fictional users, critical functions, data, service outcomes, accessibility, privacy, and recovery priorities.",
    "deliverable": "Mission and stakeholder brief.",
    "gate": "Mission owner confirms the problem and non-negotiable outcomes.",
    "failure": "The design begins with tools or controls before mission context."
  },
  {
    "phase": "Phase 2: Map the system context",
    "tasks": "Identify fictional systems, identities, services, suppliers, data, owners, environments, paths, and external relationships.",
    "deliverable": "System-context and ownership diagram.",
    "gate": "Every major component and relationship has current purpose and owner.",
    "failure": "Important supplier, administrative, evidence, or recovery elements remain outside the model."
  },
  {
    "phase": "Phase 3: Model trust and flows",
    "tasks": "Define fictional trust assumptions, boundaries, zones, approved flows, denied paths, data scope, and service identities.",
    "deliverable": "Trust-boundary, zone, and flow package.",
    "gate": "Every crossing has identity, purpose, action, data, owner, control, and evidence.",
    "failure": "Internal location or diagram color is treated as trust."
  },
  {
    "phase": "Phase 4: Design identity and privilege",
    "tasks": "Create fictional roles, service identities, supplier access, privileged access, lifecycle, emergency, and recovery identities.",
    "deliverable": "Identity, role, lifecycle, and separation-of-duties package.",
    "gate": "No one identity controls approval, execution, evidence, recovery, and risk acceptance.",
    "failure": "Shared or broad privilege bypasses the architecture."
  },
  {
    "phase": "Phase 5: Design control stacks",
    "tasks": "Choose fictional preventive, detective, responsive, recovery, governance, and compensating controls for major risks.",
    "deliverable": "Control-objective and control-stack matrix.",
    "gate": "Each control has owner, evidence, failure behavior, recovery, and validation.",
    "failure": "One control is treated as complete protection."
  },
  {
    "phase": "Phase 6: Design evidence",
    "tasks": "Define fictional evidence questions, sources, fields, health, time quality, integrity, access, retention, privacy, and resilience.",
    "deliverable": "Logging, visibility, and evidence-chain package.",
    "gate": "Critical normal, denied, changed, failed, and recovered actions are reconstructable.",
    "failure": "High event volume hides blind spots or overcollection."
  },
  {
    "phase": "Phase 7: Design resilience and recovery",
    "tasks": "Define fictional safe degraded modes, dependencies, restore states, recovery order, communication, evidence, closure, and acceptance.",
    "deliverable": "Resilience, recovery, and continuity package.",
    "gate": "The complete mission—not only the main application—can be recovered and validated.",
    "failure": "Recovery shares the same identity, evidence, or supplier failure domain."
  },
  {
    "phase": "Phase 8: Evaluate tradeoffs",
    "tasks": "Compare fictional options across mission, security, privacy, accessibility, availability, operations, cost, evidence, suppliers, recovery, and reversibility.",
    "deliverable": "Option matrix and architecture decision records.",
    "gate": "The selected option satisfies non-negotiable requirements and states its disadvantages.",
    "failure": "Criteria change to favor a preferred answer."
  },
  {
    "phase": "Phase 9: Validate scenarios",
    "tasks": "Evaluate fictional normal, degraded, failed, recovered, changed, supplier-outage, growth, and staffing-loss conditions.",
    "deliverable": "Scenario, evidence, and validation package.",
    "gate": "Owners agree that success criteria and stop conditions are met.",
    "failure": "The architecture is validated only in normal conditions."
  },
  {
    "phase": "Phase 10: Package and present",
    "tasks": "Create fictional diagrams, matrices, decision records, risk statements, executive summary, portfolio reflection, and revision history.",
    "deliverable": "Complete security architecture design portfolio.",
    "gate": "The artifact is clear, internally consistent, fully fictional, privacy-safe, and decision-ready.",
    "failure": "The package exposes real details or hides unresolved risk."
  }
];
const owners = [
  {
    "role": "Mission owner",
    "owns": "Fictional critical functions, users, service priorities, accessibility, acceptable disruption, recovery outcomes, and business risk.",
    "decision": "Whether the architecture supports the complete mission.",
    "evidence": "Mission brief, user journeys, service impact, recovery acceptance, and risk decision."
  },
  {
    "role": "Security architect",
    "owns": "Fictional system context, trust model, requirements, patterns, decisions, control stacks, failure domains, and integrated validation.",
    "decision": "Whether the architecture is coherent, layered, visible, recoverable, and governed.",
    "evidence": "Architecture package, decision records, control matrix, scenarios, and revision history."
  },
  {
    "role": "Identity and privileged-access owner",
    "owns": "Fictional human, service, supplier, administrator, automation, emergency, observer, and recovery identities.",
    "decision": "Which identities may perform which actions, under which conditions, and for how long.",
    "evidence": "Identity inventory, roles, approvals, sessions, lifecycle, reviews, and closure."
  },
  {
    "role": "Application and service owner",
    "owns": "Fictional service functions, interfaces, dependencies, performance, user outcomes, errors, change, and rollback.",
    "decision": "Which service capabilities and dependencies are minimum necessary.",
    "evidence": "Service map, interface catalog, health, dependency tests, change, rollback, and user journeys."
  },
  {
    "role": "Data and privacy owner",
    "owns": "Fictional data purpose, fields, access, sharing, logging, retention, deletion, supplier use, integrity, and restore states.",
    "decision": "Which data use and evidence fields are necessary and proportionate.",
    "evidence": "Data inventory, flow map, field scope, access review, retention, deletion, and restore validation."
  },
  {
    "role": "Network and platform owner",
    "owns": "Fictional zones, paths, rules, platform services, configuration, health, drift, change, rollback, and recovery connectivity.",
    "decision": "Which communication and platform states are supportable and safe.",
    "evidence": "Zone map, flow matrix, rule inventory, effective paths, changes, health, and rollback."
  },
  {
    "role": "Detection and evidence owner",
    "owns": "Fictional evidence questions, sources, schema, source health, time quality, integrity, access, retention, alerts, and reconciliation.",
    "decision": "Whether important architecture behavior can be reconstructed with stated confidence.",
    "evidence": "Coverage map, source catalog, event samples, health, access, retention, gaps, and reconciliation."
  },
  {
    "role": "Recovery and continuity owner",
    "owns": "Fictional degraded mode, backups, restore states, recovery identities, sequence, communication, evidence, closure, and exercises.",
    "decision": "Whether the architecture can continue and recover safely.",
    "evidence": "Recovery plan, exercise, restore records, source reconciliation, user journeys, closure, and signoff."
  },
  {
    "role": "Supplier and resource owner",
    "owns": "Fictional supplier scope, cost, staffing, service requirements, evidence, fallback, portability, change, and exit.",
    "decision": "Whether supplier and resource constraints are sustainable and acceptable.",
    "evidence": "Supplier register, lifecycle cost, staffing model, service evidence, fallback, exit test, and review."
  },
  {
    "role": "Governance and risk owner",
    "owns": "Fictional requirements, assumptions, exceptions, residual risk, debt, corrective actions, deadlines, review triggers, and final acceptance.",
    "decision": "Whether the remaining architecture risk is accepted, reduced, transferred, avoided, or monitored.",
    "evidence": "Decision records, risk register, exception register, owners, deadlines, corrective evidence, and signoff."
  }
];
const evidenceMatrix = [
  {
    "id": "LAB-01",
    "source": "Fictional mission brief",
    "observation": "Critical status access, accessibility, privacy, and limited continuity are non-negotiable.",
    "supports": "The architecture must preserve user and mission outcomes, not only technical controls.",
    "limits": "Does not specify the complete control design.",
    "use": "Create measurable requirements and release gates."
  },
  {
    "id": "LAB-02",
    "source": "Fictional system-context review",
    "observation": "Identity, logging, supplier, and recovery services share one platform and administrator group.",
    "supports": "Correlated failure and privilege concentration may exist.",
    "limits": "Does not prove the platform will fail or the design must be rejected.",
    "use": "Separate recovery authority, alternate evidence, administration, and supplier fallback."
  },
  {
    "id": "LAB-03",
    "source": "Fictional effective-flow review",
    "observation": "The public application reaches a management service through an undocumented path.",
    "supports": "Trust-boundary and segmentation drift may exist.",
    "limits": "Does not prove harmful use.",
    "use": "Validate purpose, identity, action, data, owner, evidence, and correction."
  },
  {
    "id": "LAB-04",
    "source": "Fictional role matrix",
    "observation": "One support role includes application, data, identity, logging, backup, and recovery permissions.",
    "supports": "The architecture violates least privilege and separation of duties.",
    "limits": "Does not prove the role has been misused.",
    "use": "Split duties, use temporary privilege, preserve independent evidence, and validate effective access."
  },
  {
    "id": "LAB-05",
    "source": "Fictional evidence review",
    "observation": "Management and recovery sources are incomplete, while full support-message content is collected.",
    "supports": "The architecture has both visibility gaps and privacy overcollection.",
    "limits": "Does not prove current harm or total evidence failure.",
    "use": "Add question-driven sources and minimize unnecessary content."
  },
  {
    "id": "LAB-06",
    "source": "Fictional recovery exercise",
    "observation": "The application returned before identity synchronization, supplier validation, evidence reconciliation, and temporary-access closure.",
    "supports": "Complete mission recovery was declared too early.",
    "limits": "Does not prove the application itself was unavailable.",
    "use": "Add dependency gates, multi-owner validation, reconciliation, and closure."
  },
  {
    "id": "LAB-07",
    "source": "Fictional accessibility pilot",
    "observation": "One proposed identity flow excludes users who require an approved accessible alternative.",
    "supports": "The design fails a non-negotiable user requirement.",
    "limits": "Does not prove the entire identity model must be removed.",
    "use": "Redesign the flow, preserve security, and retest with diverse users."
  },
  {
    "id": "LAB-08",
    "source": "Fictional architecture decision history",
    "observation": "A previous temporary migration remained for years without a sunset owner or review trigger.",
    "supports": "Transition architecture can become permanent debt.",
    "limits": "Does not prove a staged design must fail again.",
    "use": "Require milestones, sunset criteria, rollback, transition owners, and review triggers."
  }
];
const commonMistakes = [
  "Starting the fictional architecture lab with tools or products instead of mission, users, data, trust, constraints, and recovery outcomes.",
  "Drawing zones without defining identities, data, allowed flows, denied flows, owners, evidence, failure, and recovery.",
  "Treating one control, supplier, platform, identity provider, or dashboard as complete protection.",
  "Using broad fictional support or administrator roles that bypass every domain.",
  "Collecting large fictional event volume while missing administrative, denied, supplier, or recovery evidence.",
  "Designing strong controls that exclude intended users or collect unnecessary personal information.",
  "Ignoring fictional hidden dependencies until hardening or segmentation causes outage.",
  "Restoring the fictional main application before identity, data, logging, suppliers, users, and temporary access are validated.",
  "Comparing architecture options with inconsistent criteria or unrealistic alternatives.",
  "Ignoring lifecycle cost, staffing, supplier lock-in, portability, exit, and future flexibility.",
  "Allowing fictional exceptions or transition architecture to remain without owner, expiry, remediation, and closure.",
  "Using diagrams or policy documents as proof of effective state.",
  "Failing to validate normal, degraded, failed, recovered, changed, growth, supplier-outage, and staffing-loss conditions.",
  "Hiding fictional uncertainty, disadvantages, blind spots, residual risk, or incomplete evidence from decision-makers.",
  "Using real internal diagrams, system names, identities, data, costs, suppliers, configurations, logs, incidents, or decisions in the portfolio."
];
const quizQuestions = [
  {
    "question": "What should begin a fictional security architecture design lab?",
    "choices": [
      "Selecting the strongest security product.",
      "Defining mission, users, data, trust, constraints, dependencies, evidence, recovery, and non-negotiable outcomes.",
      "Drawing as many zones as possible.",
      "Writing firewall rules first."
    ],
    "answer": 1,
    "explanation": "Architecture begins with the mission and conditions the design must satisfy, not with a product or control."
  },
  {
    "question": "What makes a fictional architecture requirement strong?",
    "choices": [
      "It says use strong security.",
      "It is measurable, owned, connected to mission and risk, and has validation and failure criteria.",
      "It names a product.",
      "It applies only during normal operation."
    ],
    "answer": 1,
    "explanation": "Strong requirements define testable outcomes and how success or failure will be recognized."
  },
  {
    "question": "A fictional diagram has many zones, but one support role reaches all of them. What is strongest?",
    "choices": [
      "The design is secure because segmentation exists visually.",
      "Privilege concentration may collapse the intended boundaries and requires role redesign and effective-access validation.",
      "The support role should be trusted automatically.",
      "More colors should be added to the diagram."
    ],
    "answer": 1,
    "explanation": "Identity and privilege can bypass visual segmentation if not designed explicitly."
  },
  {
    "question": "What is strongest evidence that fictional visibility is well designed?",
    "choices": [
      "The dashboard contains many events.",
      "Critical approved, denied, changed, failed, and recovered actions can be reconstructed with source health, time quality, context, privacy, and limitations.",
      "All data is retained forever.",
      "One administrator controls the evidence platform."
    ],
    "answer": 1,
    "explanation": "Visibility quality depends on trustworthy, proportionate, question-driven evidence—not volume alone."
  },
  {
    "question": "When should fictional recovery be declared complete?",
    "choices": [
      "When the main application loads.",
      "After identity, authorization, data, services, logging, suppliers, users, communication, temporary-access closure, and owner acceptance all pass.",
      "When a backup finishes restoring.",
      "When no new alert appears."
    ],
    "answer": 1,
    "explanation": "Complete recovery is a multi-system mission outcome validated by several owners."
  },
  {
    "question": "What is strongest when fictional uncertainty remains high?",
    "choices": [
      "Hide uncertainty and choose the fastest option.",
      "Use a limited pilot, consistent criteria, rollback, evidence, review triggers, sunset criteria, and explicit residual-risk ownership.",
      "Make the decision permanent immediately.",
      "Ignore accessibility and privacy until later."
    ],
    "answer": 1,
    "explanation": "Pilots and reversible decisions reduce uncertainty while preserving accountability and future choice."
  },
  {
    "question": "What makes an A2.10 portfolio artifact safe to share?",
    "choices": [
      "Only real passwords are removed.",
      "The real architecture is summarized.",
      "Every organization, system, identity, data flow, configuration, source, cost, supplier, decision, date, and outcome is invented.",
      "Only names are changed."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects real organizations, people, systems, security controls, and decisions."
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
        Module Test
      </Link>
    </div>
  );
}

export default function SecurityArchitectureDesignLabPage() {
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
              Lesson 10 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Integrated Design Lab
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A2.10 Security Architecture Design Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Integrate every A2 concept into one fully fictional architecture:
            mission, trust boundaries, segmentation, identity, evidence,
            resilience, hardening, suppliers, tradeoffs, validation, governance,
            and portfolio-ready communication.
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
          lessonTitle="Security Architecture Design Lab"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional organizations, systems, identities, data, flows, configurations, sources, costs, suppliers, decisions, dates, and outcomes.",
            "I will connect every architecture element to mission, owner, evidence, failure behavior, recovery, and validation.",
            "I understand that diagrams and policies do not prove effective state.",
            "I will not upload or reproduce real internal diagrams, system names, addresses, identities, roles, configurations, logs, suppliers, costs, incidents, or private data.",
            "I will analyze only supplied fictional evidence and will not access, test, scan, configure, change, recover, or investigate real systems.",
            "I will document uncertainty, assumptions, blind spots, exceptions, tradeoffs, residual risk, corrective actions, and revision history.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Good Architecture Must Work beyond the Diagram"
        >
          <p className="leading-8">
            The fictional Northbridge Learning Support Service has attractive
            diagrams, several security tools, and a written baseline. Yet the
            public application reaches management through an undocumented path,
            one support role crosses every major zone, critical evidence sources
            are incomplete, full support content is overcollected, recovery
            shares the primary identity platform, accessibility testing fails
            for some users, and temporary migration rules have no sunset owner.
            The final design lab is about turning those disconnected controls
            into one coherent, operable, evidence-based, recoverable architecture.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Architecture as appearance
              </p>
              <p className="mt-2 leading-7">
                Fictional diagrams, policies, tools, and zones exist, but their
                identities, paths, evidence, owners, failures, and recovery do
                not work together.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Architecture as an operating system
              </p>
              <p className="mt-2 leading-7">
                Fictional mission, trust, controls, evidence, ownership, failure,
                recovery, tradeoffs, and validation form one governed design.
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
          title="Security Architecture Coordinates Decisions across the Whole Mission"
        >
          <p className="leading-8">
            Fictional identity controls influence segmentation. Segmentation
            influences logging. Logging influences response and recovery.
            Recovery influences hardening and supplier design. Accessibility,
            privacy, cost, staffing, and delivery constraints influence every
            option. A strong architecture connects these decisions, states what
            remains uncertain, assigns owners, and proves that intended outcomes
            work during normal and abnormal conditions.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Integrate",
                "Connect fictional mission, identities, paths, data, controls, evidence, suppliers, and recovery.",
              ],
              [
                "Validate",
                "Test fictional normal, degraded, failed, changed, recovered, growth, supplier-outage, and staffing-loss conditions.",
              ],
              [
                "Communicate",
                "Produce fictional diagrams, matrices, decisions, risk statements, executive summaries, and portfolio reflections.",
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
          eyebrow="Integrated Architecture Model"
          title="Mission → Context → Trust → Requirements → Controls → Evidence → Failure → Recovery → Decisions → Governance"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Mission", "Define fictional users, critical functions, privacy, accessibility, continuity, and success."],
              ["Context", "Map fictional systems, services, identities, data, suppliers, owners, and dependencies."],
              ["Trust", "Document fictional assumptions, boundaries, zones, flows, privilege, and denied paths."],
              ["Requirements", "Write fictional measurable security, evidence, privacy, availability, and recovery outcomes."],
              ["Controls", "Build fictional preventive, detective, responsive, recovery, governance, and compensating stacks."],
              ["Evidence", "Design fictional questions, sources, schema, health, time, access, retention, and confidence."],
              ["Failure", "Evaluate fictional identity, logging, supplier, service, staffing, and configuration failure."],
              ["Recovery", "Restore fictional identity, data, services, evidence, users, suppliers, and normal access in order."],
              ["Decisions", "Compare fictional options, constraints, costs, accessibility, privacy, and reversibility."],
              ["Governance", "Assign fictional owners, exceptions, residual risk, corrective actions, reviews, and revision history."],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <p className="text-lg font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Language for the Integrated Design Lab"
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
            Architecture Brief
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Design Areas
          </h2>

          <div className="mt-6 grid gap-5">
            {architectureBrief.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.area}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.brief}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Requirements", item.requirements],
                    ["Primary risk", item.risk],
                    ["Required evidence", item.evidence],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.area}-${label}`}
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
            Architecture Requirements
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Measurable Requirements for the Fictional Design
          </h2>

          <div className="mt-6 grid gap-5">
            {architectureRequirements.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.requirement}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Rationale", item.rationale],
                    ["Validation", item.validation],
                    ["Owners", item.owner],
                    ["Failure condition", item.failure],
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Architecture Decision Records
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Major Fictional Design Decisions
          </h2>

          <div className="mt-6 grid gap-5">
            {designDecisions.map((item) => (
              <article
                key={item.decision}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.decision}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Reason", item.reason],
                    ["Alternatives", item.alternatives],
                    ["Consequence", item.consequence],
                    ["Validation", item.validation],
                    ["Review trigger", item.review_trigger],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.decision}-${label}`}
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
            Control Stacks
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Layered Fictional Control Objectives
          </h2>

          <div className="mt-6 grid gap-5">
            {controlStacks.map((item) => (
              <article
                key={item.objective}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.objective}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                  {[
                    ["Preventive", item.preventive],
                    ["Detective", item.detective],
                    ["Responsive", item.responsive],
                    ["Recovery", item.recovery],
                    ["Governance", item.governance],
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
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Validation Scenarios
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Conditions the Fictional Architecture Must Survive
          </h2>

          <div className="mt-6 grid gap-5">
            {validationScenarios.map((item) => (
              <article
                key={item.scenario}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.scenario}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.question}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Tests", item.tests],
                    ["Success criteria", item.success],
                    ["Failure condition", item.failure],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.scenario}-${label}`}
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
            Lab Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Phases from Mission Brief to Portfolio Presentation
          </h2>

          <div className="mt-6 grid gap-5">
            {labPhases.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.phase}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.tasks}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Deliverable", item.deliverable],
                    ["Validation gate", item.gate],
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
            Architecture Ownership
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Owners for Mission, Identity, Data, Evidence, Recovery, Suppliers, and Risk
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
          title="Fake Northbridge Integrated Architecture Dashboard"
          subtitle="Fictional mission, trust, identity, data, evidence, recovery, accessibility, supplier, and decision review for training only."
          metrics={[
            {
              label: "Architecture requirements",
              value: "10",
              note: "Fictional mission, identity, data, administration, evidence, continuity, recovery, exceptions, accessibility, and reversibility requirements are included.",
            },
            {
              label: "Major design gaps",
              value: "8",
              note: "Undocumented path, broad role, evidence gaps, privacy overcollection, shared recovery failure, accessibility failure, stale transition rules, and weak closure remain.",
            },
            {
              label: "Current decision",
              value: "Redesign",
              note: "The fictional architecture should not receive final approval until integrated validation gates pass.",
            },
          ]}
        />

        <FakeAlertCard
          title="Integrated Architecture Fails Multiple Non-Negotiable Gates"
          severity="High"
          time="11:26 PM"
          source="Fake Northbridge Architecture Review Console"
          details="The fictional design has an undocumented public-to-management path, cross-domain support privilege, incomplete management and recovery evidence, unnecessary full-content logging, recovery dependence on the primary identity platform, accessibility failure, and transition rules without reliable sunset closure."
          recommendation="Pause final approval, preserve limited safe service, redesign trust and identity, minimize evidence, separate recovery authority, fix accessibility, govern transition rules, run all validation scenarios, close temporary access, and obtain multi-owner acceptance."
        />

        <FakeLogPanel
          title="Fake Integrated Architecture Review Timeline"
          logs={[
            "22:00 MISSION critical-status='required'",
            "22:01 GATE accessibility='required'",
            "22:02 GATE privacy='required'",
            "22:10 FLOW public-to-management='undocumented'",
            "22:20 ROLE support='cross-domain-broad'",
            "22:30 EVIDENCE management='partial'",
            "22:31 EVIDENCE recovery='partial'",
            "22:40 PRIVACY full-support-content='collected'",
            "22:50 RECOVERY identity-dependency='shared-primary'",
            "23:00 ACCESSIBILITY alternate-flow='failed'",
            "23:10 TRANSITION temporary-rules='no-sunset-owner'",
            "23:15 SUPPLIER fallback='incomplete'",
            "23:18 RECOVERY closure='not-proven'",
            "23:20 DECISION final-approval='paused'",
            "23:22 ACTION integrated-redesign='required'",
            "23:26 STATUS architecture='not-ready'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence before Final Architecture Approval
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
                    ["Architecture use", item.use],
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
          title="Should the Fictional Architecture Receive Final Approval?"
          question="Should the current fictional Northbridge architecture receive final approval?"
          evidence={[
            "Critical status access, accessibility, privacy, and limited continuity are non-negotiable.",
            "The public application reaches a management service through an undocumented path.",
            "One support role includes application, data, identity, logging, backup, and recovery permissions.",
            "Management and recovery evidence sources are incomplete.",
            "Full support-message content is collected even though minimum metadata answers approved questions.",
            "Recovery identity and logging depend on the same primary platform and administrator group.",
            "One proposed identity flow fails accessibility testing.",
            "Temporary migration rules have no reliable sunset owner or closure evidence.",
          ]}
          options={[
            "No. Pause final approval, redesign trust, privilege, evidence, privacy, accessibility, recovery independence, transition governance, validation scenarios, and multi-owner closure before accepting residual risk.",
            "Yes, because the architecture has several security tools and diagrams.",
            "Yes, because the main application works normally.",
            "Yes, because the remaining issues are temporary.",
          ]}
          bestAnswer={0}
          explanation="Final approval requires the integrated architecture to satisfy non-negotiable mission, trust, identity, privacy, accessibility, evidence, recovery, governance, and effective-state validation requirements."
        />

        <SectionCard
          eyebrow="Common Architecture Lab Mistakes"
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
          title="Complete the Fictional Northbridge Architecture"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Produce the Final A2 Architecture Package
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                copy, quote, lightly modify, summarize, or reproduce real
                diagrams, systems, identities, addresses, configurations, logs,
                costs, suppliers, incidents, contracts, recovery plans, or
                private data.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Fictional mission, stakeholder, accessibility, privacy, and recovery brief.</li>
                <li>System-context, ownership, dependency, and trust-boundary diagrams.</li>
                <li>Zone catalog, approved and denied flow matrix, and service-identity model.</li>
                <li>Architecture requirements and decision records.</li>
                <li>Role, privilege, lifecycle, supplier, emergency, and recovery identity package.</li>
                <li>Preventive, detective, responsive, recovery, governance, and compensating control stacks.</li>
                <li>Evidence questions, source catalog, schema, source health, privacy, retention, blind spots, and resilience.</li>
                <li>Secure-default baseline, exception register, configuration-drift, rollback, and restored-state comparison.</li>
                <li>Normal, degraded, failed, recovered, supplier-outage, growth, staffing-loss, and change-failure validations.</li>
                <li>Executive summary, residual-risk decision, corrective actions, reflection, revision history, and complete fictionalization statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This activity creates a fictional educational architecture only. It
            does not authorize system access, testing, scanning, configuration,
            monitoring, recovery, purchasing, contracting, investigation, or
            collection involving any real organization or system.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Architecture Works Normally but Fails during Identity Outage"
          scenario="In fictional normal operation, users can access the support service. During an identity outage, however, every service stops because approval, administration, logging access, and recovery all depend on the same identity platform."
          choices={[
            {
              label: "Choice A",
              response: "Redesign separate recovery authority, limited safe roles, blocked high-risk actions, alternate evidence, independent approval, timed access, restoration gates, and post-use closure; then rerun the outage scenario.",
              outcome: "Best professional choice. The response preserves mission continuity without uncontrolled trust.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Fail open for every user and administrator.",
              outcome: "Risky. The response removes authorization, accountability, and blast-radius controls.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Accept permanent total outage during identity failure.",
              outcome: "Risky. A limited safe mode may preserve approved critical service while high-risk functions remain blocked.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Preferred Option Fails Accessibility and Privacy Gates"
          scenario="A fictional architecture option is fast, low-cost, and highly visible, but several intended users cannot complete the identity flow and the evidence design collects full support-message content unnecessarily."
          choices={[
            {
              label: "Choice A",
              response: "Pause approval, redesign the accessible identity path, minimize evidence fields, restrict access and retention, preserve security requirements, pilot with diverse users, and retest before adoption.",
              outcome: "Best professional choice. The response protects intended users and privacy without abandoning security.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Launch because the option is inexpensive and most users succeed.",
              outcome: "Risky. The design fails two non-negotiable architecture requirements.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Remove identity controls and all logging.",
              outcome: "Unsafe. The solution is an accessible, proportionate design—not elimination of protection or evidence.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend the Final Architecture before a Review Board"
        >
          <p className="leading-8">
            Prepare a fictional ten-minute architecture defense for a review
            board containing the mission owner, privacy owner, accessibility
            owner, service owner, recovery owner, supplier owner, finance owner,
            and governance owner. Explain the selected architecture, rejected
            alternatives, non-negotiable requirements, trust model, control
            stacks, evidence design, degraded service, recovery, costs,
            staffing, supplier dependence, residual risk, corrective actions,
            sunset criteria, and review triggers.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              [
                "Required defense",
                "Use only fictional diagrams, matrices, evidence, options, owners, costs, assumptions, and outcomes. State disadvantages and uncertainty honestly.",
              ],
              [
                "Required response",
                "Answer one challenge about privacy, one about accessibility, one about failure, one about cost, one about evidence, and one about recovery.",
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
          title="Security Architecture Design Lab Checklist"
          items={[
            "I can define the fictional mission, users, critical functions, data, accessibility, privacy, continuity, and recovery outcomes.",
            "I can create a fictional system-context map containing systems, services, identities, suppliers, owners, dependencies, and external relationships.",
            "I can identify fictional trust assumptions, boundaries, zones, approved flows, denied paths, service identities, and administrative paths.",
            "I can write fictional measurable architecture requirements with rationale, owner, validation, and failure criteria.",
            "I can create fictional role, privilege, lifecycle, supplier, emergency, observer, and recovery identity designs.",
            "I can build fictional preventive, detective, responsive, recovery, governance, and compensating control stacks.",
            "I can design fictional question-driven evidence with source health, time quality, schema, privacy, access, retention, blind spots, and resilience.",
            "I can define fictional secure defaults, baselines, exceptions, configuration evidence, drift review, rollback, and restored-state comparison.",
            "I can design fictional safe degraded service, gated recovery, alternate evidence, supplier fallback, communication, and temporary-access closure.",
            "I can compare fictional options across mission, security, privacy, accessibility, availability, operations, cost, staffing, evidence, suppliers, recovery, and reversibility.",
            "I can validate fictional normal, degraded, failed, recovered, changed, growth, supplier-outage, and staffing-loss scenarios.",
            "I can produce a clear fictional executive summary, decision record, residual-risk statement, corrective-action plan, revision history, and portfolio reflection.",
            "I will never use real diagrams, systems, identities, addresses, configurations, logs, costs, suppliers, incidents, contracts, recovery plans, or private data in this portfolio.",
          ]}
        />

        <MiniQuiz
          title="A2.10 Mini Quiz: Security Architecture Design Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Security Architecture Design Portfolio for Northbridge. Include the mission and stakeholder brief, accessibility and privacy gates, system-context diagram, ownership map, dependency map, trust assumptions, trust-boundary register, zone catalog, approved and denied flows, service identities, architecture requirements, decision records, role and privilege matrix, lifecycle design, supplier access, control stacks, evidence questions, source catalog, event schema, source health, time quality, privacy minimization, retention, blind spots, resilience, secure defaults, baselines, exceptions, configuration drift, rollback, recovery architecture, degraded modes, validation scenarios, lifecycle cost, staffing, supplier lock-in, pilot, sunset criteria, residual risk, corrective actions, executive summary, reflection, revision history, and a statement that every organization, system, identity, data flow, configuration, source, cost, supplier, decision, date, and outcome is invented."
          tips={[
            "Make the fictional package internally consistent: identities, flows, logs, recovery, and decision records should describe the same architecture.",
            "State non-negotiable accessibility, privacy, evidence, and recovery requirements before selecting controls or options.",
            "Include at least one failed scenario and show how the architecture changes in response.",
            "Show effective-state validation rather than relying only on intended diagrams and policies.",
            "Keep every organization, system, identity, data flow, configuration, source, cost, supplier, decision, date, and outcome completely invented.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the A2 Module Test?"
        >
          <p className="leading-8">
            Before taking the module test, rate your readiness from 1 to 5 for
            each area: mission framing, system context, trust boundaries,
            segmentation, identity, evidence, resilience, hardening, tradeoffs,
            decision records, validation, governance, residual risk, and
            portfolio communication.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain how fictional mission, trust, identity, data, evidence, recovery, privacy, accessibility, and cost influence one another.",
              "I can build fictional measurable requirements, control stacks, decision records, validation gates, and owner maps.",
              "I can identify fictional broad privilege, hidden paths, overcollection, source gaps, correlated failure, stale exceptions, and transition debt.",
              "I can validate fictional normal, degraded, failed, recovered, supplier-outage, growth, staffing-loss, and change-failure scenarios.",
              "I can state fictional uncertainty, disadvantages, blind spots, residual risk, corrective actions, and review triggers honestly.",
              "I can keep the entire architecture design portfolio fully invented, defensive, and safe to share.",
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
            Record one fictional architecture strength, one unresolved residual
            risk, one validation result that changed your design, and one topic
            you will review before the A2 module test.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Security architecture integrates fictional mission, users, trust, identities, data, paths, controls, evidence, suppliers, recovery, and governance.",
            "A strong fictional requirement is measurable, owned, justified, testable, and connected to failure conditions.",
            "Trust boundaries and segmentation are meaningful only when identities, actions, data, paths, owners, evidence, and denied alternatives are explicit.",
            "Control stacks combine fictional preventive, detective, responsive, recovery, governance, and compensating measures.",
            "Question-driven fictional evidence must include source health, time quality, context, privacy, access, retention, confidence, and limitations.",
            "Resilience requires fictional safe degraded service, separate recovery authority, alternate evidence, gated restoration, and temporary-access closure.",
            "Secure defaults reduce fictional unnecessary capability, while exceptions require owner, scope, evidence, expiry, remediation, and recovery behavior.",
            "Tradeoff decisions should compare fictional security, privacy, accessibility, availability, operations, cost, suppliers, evidence, recovery, and reversibility consistently.",
            "Final architecture approval requires fictional normal and abnormal scenario validation, multi-owner acceptance, residual-risk decisions, corrective actions, and revision history.",
            "Every CyberShield architecture design artifact must remain fully fictional, defensive, non-operational, privacy-safe, and incapable of exposing real organizations or systems.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete Module A2
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