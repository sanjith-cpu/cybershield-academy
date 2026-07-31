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
const previousLesson = `${modulePath}/network-segmentation-strategy`;
const nextLesson = `${modulePath}/logging-and-visibility-by-design`;

const objectives = [
  "Explain identity-centered architecture as the coordinated fictional design of human, service, device, workload, administrator, supplier, and recovery identities across their full lifecycle.",
  "Distinguish fictional authentication, authorization, role, privilege, approval, session, delegation, lifecycle, and evidence decisions rather than treating identity as a single login event.",
  "Design fictional least-privilege access for users, services, administrators, suppliers, automation, and recovery using explicit ownership, context, separation of duties, and time limits.",
  "Evaluate fictional identity architecture for privilege concentration, shared accounts, stale access, service-account risk, emergency access, supplier trust, evidence gaps, failure modes, and recovery dependencies.",
  "Create a portfolio-ready fictional identity architecture package using only invented organizations, identities, systems, evidence, decisions, dates, roles, and outcomes."
];
const vocabulary = [
  [
    "Identity-centered architecture",
    "A fictional architecture approach that treats identities, authority, privilege, lifecycle, context, evidence, recovery, and ownership as central design elements across every system and service."
  ],
  [
    "Human identity",
    "A fictional named identity representing a person with defined role, lifecycle, approval, access, evidence, and accountability."
  ],
  [
    "Service identity",
    "A fictional non-human identity used by an application, process, integration, workload, or automation to request approved actions."
  ],
  [
    "Device identity",
    "A fictional identity or assurance signal representing a managed device or platform context involved in an access decision."
  ],
  [
    "Workload identity",
    "A fictional identity assigned to a software workload, service, container, process, or hosted component rather than to a human user."
  ],
  [
    "Privileged identity",
    "A fictional identity with authority to administer, configure, recover, approve, monitor, or change security-critical systems and controls."
  ],
  [
    "Recovery identity",
    "A fictional identity reserved for approved restoration, continuity, or emergency recovery actions and separated from normal production administration."
  ],
  [
    "Authentication",
    "The fictional process of establishing that an identity is who or what it claims to be at an approved assurance level."
  ],
  [
    "Authorization",
    "The fictional decision about whether an authenticated identity may perform a specific action on a specific resource for a specific purpose and context."
  ],
  [
    "Role",
    "A fictional grouping of permissions and responsibilities assigned according to mission function, ownership, and approved need."
  ],
  [
    "Privilege",
    "A fictional permission enabling sensitive, administrative, high-impact, or security-relevant action."
  ],
  [
    "Least privilege",
    "Granting a fictional identity only the minimum permissions, scope, duration, and context required for an approved task."
  ],
  [
    "Separation of duties",
    "Dividing fictional approval, execution, evidence, validation, and recovery responsibilities so one identity cannot control every stage."
  ],
  [
    "Just-in-time access",
    "Fictional privileged access activated only for an approved task and time window rather than remaining continuously available."
  ],
  [
    "Just-enough access",
    "Fictional access limited to the exact systems, actions, data, and context required for the approved task."
  ],
  [
    "Conditional access",
    "A fictional authorization decision using identity, role, device or workload state, location conceptually, time, risk, service, and action context."
  ],
  [
    "Delegation",
    "A fictional arrangement where one identity or service acts with authority granted by another under explicit scope and evidence."
  ],
  [
    "Identity lifecycle",
    "The fictional creation, proofing, activation, change, review, suspension, recovery, and retirement of an identity and its access."
  ],
  [
    "Access review",
    "A fictional evidence-based process confirming that identities, roles, permissions, ownership, purpose, and lifecycle remain appropriate."
  ],
  [
    "Emergency access",
    "Fictional tightly governed access used when normal identity controls are unavailable, with narrow scope, independent approval, evidence, expiration, and review."
  ],
  [
    "Identity evidence",
    "Fictional records showing identity, assurance, role, action, target, decision, approver, result, session, source health, time, and lifecycle state."
  ],
  [
    "Orphaned identity",
    "A fictional account or service identity that remains active without a current owner, mission need, or valid lifecycle state."
  ],
  [
    "Privilege creep",
    "A fictional condition where permissions accumulate over time without removal, review, or continuing mission need."
  ],
  [
    "Identity drift",
    "A fictional mismatch between approved roles, permissions, owners, lifecycle, and the effective access identities actually possess."
  ]
];
const identityClasses = [
  {
    "class": "Standard user identities",
    "purpose": "Allow fictional students, staff, analysts, or service users to perform ordinary role-based tasks.",
    "access": "Minimum service functions, approved data, and user-level actions.",
    "controls": "Named identity, approved role, authentication assurance, session limits, access review, and lifecycle.",
    "evidence": "Identity, role, session, action, target, result, approval where required, and lifecycle state.",
    "failure": "Broad inherited access or stale role membership exposes more services and data than needed."
  },
  {
    "class": "Privileged administrator identities",
    "purpose": "Perform fictional approved configuration, support, security, recovery, and system-management tasks.",
    "access": "Time-bound, task-specific administration to named systems and actions.",
    "controls": "Separate privileged identity, approval, just-in-time access, session evidence, change record, rollback, and review.",
    "evidence": "Administrator, approver, purpose, target, action category, start, end, result, change, and validation.",
    "failure": "One administrator controls identity, data, logs, backups, and recovery without independent oversight."
  },
  {
    "class": "Application service identities",
    "purpose": "Allow fictional applications to call approved services and data functions.",
    "access": "Specific service actions, narrow data roles, and documented dependencies.",
    "controls": "Registered service identity, scoped authorization, rotation, owner, health, logging, and recovery.",
    "evidence": "Calling service, target, action, role, data category, result, configuration version, and owner.",
    "failure": "A long-lived shared credential gives broad service and data access without clear ownership."
  },
  {
    "class": "Automation identities",
    "purpose": "Run fictional scheduled, rule-based, or workflow actions under defined authority.",
    "access": "Only the actions required by the approved automation playbook.",
    "controls": "Narrow scope, approval gates, rate limits, versioning, audit, rollback, owner, and disable path.",
    "evidence": "Automation identity, rule version, trigger, approver when required, action, target, result, and rollback.",
    "failure": "A noisy signal or bad rule scales high-impact action through broad privilege."
  },
  {
    "class": "Device and workload identities",
    "purpose": "Represent fictional devices, platforms, services, and hosted workloads in access decisions.",
    "access": "Approved connections and actions based on registered identity and current assurance.",
    "controls": "Registration, attestation conceptually, lifecycle, owner, context, narrow role, health, and evidence.",
    "evidence": "Identity, owner, workload or device state, service, action, target, result, and lifecycle.",
    "failure": "Network location or hostname alone is treated as proof of trust."
  },
  {
    "class": "Supplier identities",
    "purpose": "Provide fictional external support, integration, or service delivery under contract and approved scope.",
    "access": "Minimum named systems, interfaces, data, actions, and time windows.",
    "controls": "Named supplier identity, sponsor, contract purpose, approval, expiration, monitoring, fallback, and exit.",
    "evidence": "Supplier, sponsor, role, purpose, target, action, result, data category, health, and review.",
    "failure": "Supplier approval becomes permanent broad internal trust."
  },
  {
    "class": "Emergency and recovery identities",
    "purpose": "Support fictional continuity and restoration when normal identity services or administrators are unavailable.",
    "access": "Narrow recovery actions to approved systems and restore states.",
    "controls": "Separate custody, independent approval, restricted scope, expiration, evidence, integrity, exercise, and post-use review.",
    "evidence": "Recovery identity, custodian, approver, purpose, target, restore state, action, result, and closure.",
    "failure": "Emergency access becomes a permanent bypass or depends on the failed identity system."
  },
  {
    "class": "Break-glass observer identities",
    "purpose": "Provide fictional limited visibility for authorized decision-makers during identity or logging disruption.",
    "access": "Read-only approved status, health, evidence, and recovery information.",
    "controls": "Separate identity, read-only scope, owner approval, time limit, independent evidence, and closure.",
    "evidence": "Observer identity, approver, viewed resources, time, result, and expiration.",
    "failure": "Read-only emergency access silently gains administrative or data-export privilege."
  }
];
const lifecycleStages = [
  {
    "stage": "Request and sponsorship",
    "question": "Why does the fictional identity need to exist, which mission function does it support, and who sponsors it?",
    "requirements": "Purpose, identity type, owner, sponsor, requested role, scope, duration, systems, data, and risk.",
    "evidence": "Request record, sponsor, owner, justification, approval path, and requested expiration.",
    "failure": "Identities are created for convenience without clear mission need or owner."
  },
  {
    "stage": "Proofing and registration",
    "question": "How is the fictional identity established and linked to the correct person, service, device, workload, supplier, or recovery role?",
    "requirements": "Approved registration, unique identity, ownership, assurance, service or device context, and no shared secret reuse.",
    "evidence": "Registration record, owner, source, assurance level, and verification result.",
    "failure": "A shared or weakly registered identity cannot be attributed reliably."
  },
  {
    "stage": "Authorization design",
    "question": "Which exact fictional actions, resources, data, services, and time windows are required?",
    "requirements": "Least privilege, role, purpose, separation of duties, conditional context, denial conditions, and owner approval.",
    "evidence": "Role-to-permission matrix, policy decision, data scope, owner approval, and denied-path design.",
    "failure": "Authentication is treated as permission for every action."
  },
  {
    "stage": "Activation",
    "question": "When should the fictional identity or privilege become usable, and under which current conditions?",
    "requirements": "Approved start, time limit, session context, device or workload state, service health, and monitoring.",
    "evidence": "Activation event, approver, start, expiry, role, context, and source health.",
    "failure": "Privilege becomes permanent even though the task is temporary."
  },
  {
    "stage": "Use and session control",
    "question": "How is the fictional identity used safely during normal, privileged, automated, supplier, and recovery activity?",
    "requirements": "Session limits, purpose, target, action scope, rate, approval gates, evidence, and safe termination.",
    "evidence": "Session start, actor, action, target, result, change, approval, errors, and end.",
    "failure": "A valid session performs unrelated or excessive actions without detection."
  },
  {
    "stage": "Change and role transition",
    "question": "How should fictional access change when job, service, owner, supplier, system, project, or risk conditions change?",
    "requirements": "Prompt update, removal before addition where appropriate, role conflict review, new approval, and evidence.",
    "evidence": "Change record, old role, new role, owner, approver, effective date, and removed access.",
    "failure": "Old access remains while new privilege is added, causing privilege creep."
  },
  {
    "stage": "Periodic review",
    "question": "Does the fictional identity still have a current owner, mission need, correct role, appropriate scope, and valid evidence?",
    "requirements": "Owner attestation, actual-use review, role conflicts, stale privilege, service ownership, supplier need, and expiration.",
    "evidence": "Review date, reviewer, decision, removed access, exception, deadline, and closure.",
    "failure": "Reviews confirm access by default without examining use, need, or conflicts."
  },
  {
    "stage": "Suspension and incident handling",
    "question": "How is fictional access limited safely during suspected misuse, owner uncertainty, leave, supplier issue, or system risk?",
    "requirements": "Targeted reversible action, evidence preservation, service impact, approval, communication, and recovery path.",
    "evidence": "Reason, approver, identity, scope, action, result, service effect, and restoration decision.",
    "failure": "Broad disabling causes unnecessary outage or destroys evidence without improving safety."
  },
  {
    "stage": "Recovery",
    "question": "How is fictional identity trust restored after credential loss, platform failure, compromise concern, or continuity event?",
    "requirements": "Independent proofing, separate recovery authority, limited access, rotation, session review, service validation, and closure.",
    "evidence": "Recovery identity, approver, proofing, changed credentials, revoked sessions, validation, and signoff.",
    "failure": "Recovery depends entirely on the failed or untrusted identity path."
  },
  {
    "stage": "Retirement",
    "question": "How is the fictional identity removed when the person, service, supplier, workload, project, or recovery role no longer exists?",
    "requirements": "Disablement, access removal, secret or key rotation conceptually, ownership transfer, data handling, evidence retention, and dependency review.",
    "evidence": "Retirement event, owner, removed permissions, dependency update, replacement identity, and closure.",
    "failure": "Orphaned identities remain active and invisible."
  }
];
const authorizationDimensions = [
  {
    "dimension": "Who",
    "question": "Which fictional human, service, device, workload, supplier, automation, administrator, or recovery identity is acting?",
    "strong_design": "Unique registered identity with owner, lifecycle, assurance, and current role.",
    "weak_design": "Shared account, generic credential, network location, or unowned service identity.",
    "evidence": "Identity, owner, type, assurance, role, lifecycle, and source health."
  },
  {
    "dimension": "What action",
    "question": "Which exact fictional read, write, approve, configure, restore, export, or administrative action is requested?",
    "strong_design": "Narrow action permission linked to mission purpose and target.",
    "weak_design": "Broad manage-all or administrator permission.",
    "evidence": "Requested action, policy decision, result, denied actions, and exception."
  },
  {
    "dimension": "Which target",
    "question": "Which fictional resource, service, system, identity, record type, or control is affected?",
    "strong_design": "Named target group or resource class with explicit owner.",
    "weak_design": "Access to all systems or all data in a broad environment.",
    "evidence": "Target, owner, classification, service, and result."
  },
  {
    "dimension": "For what purpose",
    "question": "Which fictional mission task, support action, service workflow, contract need, or recovery step justifies access?",
    "strong_design": "Purpose is documented, current, and linked to an approved workflow.",
    "weak_design": "Convenience, possible future use, or general support.",
    "evidence": "Request, purpose, owner, approval, task, and closure."
  },
  {
    "dimension": "Under which context",
    "question": "Which fictional time, device or workload state, service health, risk, location conceptually, and approval conditions apply?",
    "strong_design": "Access depends on approved current context and fails safely when context is unreliable.",
    "weak_design": "Once authenticated, access works from any context indefinitely.",
    "evidence": "Session context, assurance, time, device or workload state, approval, and result."
  },
  {
    "dimension": "For how long",
    "question": "When should fictional access start, expire, pause, renew, or be reviewed?",
    "strong_design": "Time-bound access with explicit activation, expiry, renewal, and removal.",
    "weak_design": "Permanent access for a temporary need.",
    "evidence": "Activation, expiration, renewal, review, and disablement."
  },
  {
    "dimension": "With which approval",
    "question": "Who authorizes the fictional access, and is that approver independent from the person executing the action?",
    "strong_design": "Named authorized owner and separate approver for high-impact actions.",
    "weak_design": "Self-approval or approval by the same identity controlling evidence and recovery.",
    "evidence": "Approver, authority, decision, time, scope, and conflict review."
  },
  {
    "dimension": "With which evidence and recovery",
    "question": "How will fictional use, denial, change, error, emergency access, and closure be reconstructed and reversed?",
    "strong_design": "Reliable session, decision, action, change, source-health, rollback, and recovery evidence.",
    "weak_design": "Login success is the only recorded event.",
    "evidence": "Session, policy decision, action, target, result, change, rollback, source health, and signoff."
  }
];
const roleDesigns = [
  {
    "role": "Support analyst",
    "mission": "Review fictional user issues and perform approved low-impact support actions.",
    "allowed": "Read approved status, update support records, trigger limited user workflows, and escalate.",
    "denied": "Direct data administration, identity policy change, logging deletion, backup change, and recovery administration.",
    "approval": "Standard role approval; separate approval for exceptional user-impact actions.",
    "review": "Quarterly fictional owner review plus actual-use and stale-access checks."
  },
  {
    "role": "Application operator",
    "mission": "Operate fictional application services without controlling identity, data policy, or evidence retention.",
    "allowed": "View service health, restart approved components conceptually, deploy approved changes, and review service logs.",
    "denied": "Broad identity administration, unrestricted data export, logging disablement, and backup deletion.",
    "approval": "Named owner approval and change record for high-impact actions.",
    "review": "Role conflict, service ownership, change history, and unused privilege review."
  },
  {
    "role": "Identity administrator",
    "mission": "Manage fictional identity lifecycle, roles, approvals, and recovery under separation of duties.",
    "allowed": "Create, change, suspend, recover, and retire identities through approved workflows.",
    "denied": "Self-approval, unrestricted application administration, evidence deletion, and business risk acceptance.",
    "approval": "Separate approver for privileged grants, emergency access, and recovery.",
    "review": "Privileged-session, grant, revocation, recovery, and conflict review."
  },
  {
    "role": "Data steward",
    "mission": "Own fictional data purpose, classification, field scope, access policy, retention, and deletion decisions.",
    "allowed": "Approve data roles, review access, define field scope, and validate lifecycle controls.",
    "denied": "Routine system administration and unilateral evidence deletion.",
    "approval": "Business and privacy approval for sensitive data changes.",
    "review": "Data-access use, role need, field scope, retention, and exception review."
  },
  {
    "role": "Detection engineer",
    "mission": "Design fictional visibility and alert logic without broad authority to alter source systems or business access.",
    "allowed": "Manage approved detection content, review evidence, tune rules, and document coverage.",
    "denied": "Unapproved account disabling, unrestricted production administration, and silent retention change.",
    "approval": "Change approval for high-impact detection or response behavior.",
    "review": "Rule version, false-positive impact, evidence access, and separation-of-duties review."
  },
  {
    "role": "Recovery operator",
    "mission": "Restore fictional identity, service, data, logging, and configuration from approved states.",
    "allowed": "Use time-bound recovery identity, approved restore states, and defined recovery actions.",
    "denied": "Routine production administration, self-approval, unrestricted backup deletion, and permanent emergency access.",
    "approval": "Independent recovery owner and mission owner approval.",
    "review": "Every recovery session plus periodic exercise and custody review."
  },
  {
    "role": "Supplier support specialist",
    "mission": "Perform fictional contract-approved support for a named service.",
    "allowed": "Time-bound access to the minimum approved service interface and diagnostic information.",
    "denied": "Broad internal access, unrelated data, identity administration, logging deletion, and recovery control.",
    "approval": "Internal sponsor, service owner, and time-limited access approval.",
    "review": "Per-session evidence, contract scope, sponsor, expiration, and supplier lifecycle review."
  },
  {
    "role": "Automation service",
    "mission": "Perform fictional repeatable low-risk workflow actions under a documented playbook.",
    "allowed": "Specific approved actions with narrow targets, rate limits, and rollback.",
    "denied": "Self-expanding privilege, broad account disabling, role changes, and unreviewed high-impact action.",
    "approval": "Human approval gate for high-impact steps and versioned rule approval.",
    "review": "Trigger quality, action volume, failures, rollback, owner, and privilege review."
  }
];
const identityFailureModes = [
  {
    "failure": "Shared administrator identity",
    "impact": "Fictional actions cannot be attributed reliably, and one credential may control several systems.",
    "design_response": "Use named separate privileged identities, approval, session evidence, role separation, and review.",
    "validation": "Every privileged action maps to one named identity, approver, task, session, and result.",
    "stop": "Shared privileged use remains necessary without independent accountability."
  },
  {
    "failure": "Stale role membership",
    "impact": "A fictional user retains access after role, project, ownership, or employment changes.",
    "design_response": "Use lifecycle triggers, owner review, actual-use evidence, expiration, and prompt removal.",
    "validation": "Old roles and permissions are removed and effective access matches the current job.",
    "stop": "No current owner can confirm continuing need."
  },
  {
    "failure": "Broad service identity",
    "impact": "A fictional application or automation can access unrelated services, data, or administration.",
    "design_response": "Use unique service identities, narrow roles, owner, rotation, path limits, monitoring, and recovery.",
    "validation": "Approved actions succeed and unrelated actions are denied and recorded.",
    "stop": "One service identity remains shared across unrelated workloads."
  },
  {
    "failure": "Identity-provider outage",
    "impact": "Authentication, authorization, approval, administration, evidence attribution, and recovery may fail together.",
    "design_response": "Define limited safe degraded service, separate emergency authority, independent evidence, and recovery validation.",
    "validation": "Critical functions continue narrowly while risky access remains blocked and recorded.",
    "stop": "No owner can identify who may act safely during the outage."
  },
  {
    "failure": "Emergency-access drift",
    "impact": "A fictional break-glass identity or privilege remains active after the emergency.",
    "design_response": "Use separate custody, time limit, post-use review, rotation, closure evidence, and owner signoff.",
    "validation": "Emergency privilege expires, related sessions end, and effective access is rechecked.",
    "stop": "Emergency access lacks current owner, expiration, or evidence."
  },
  {
    "failure": "Supplier identity overreach",
    "impact": "A fictional external identity reaches systems, data, or actions beyond contract purpose.",
    "design_response": "Use named identities, sponsor, narrow scope, time limits, session evidence, fallback, and exit review.",
    "validation": "Only approved supplier targets and actions remain reachable.",
    "stop": "Supplier access cannot be linked to a current sponsor or mission need."
  },
  {
    "failure": "Privilege concentration",
    "impact": "One fictional identity can approve, execute, alter evidence, change recovery, and accept risk.",
    "design_response": "Separate duties, approvals, evidence ownership, recovery authority, and risk acceptance.",
    "validation": "No single identity controls every stage of a high-impact action.",
    "stop": "The same identity can change systems and remove all proof."
  },
  {
    "failure": "Orphaned identity",
    "impact": "A fictional account or service continues operating without current owner or lifecycle review.",
    "design_response": "Use ownership checks, automatic expiration conceptually, dependency review, disablement, and replacement planning.",
    "validation": "Every active identity has current owner, purpose, role, lifecycle, and recent review.",
    "stop": "The identity is active but no owner accepts responsibility."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Inventory fictional identities",
    "questions": "Which human, service, device, workload, administrator, supplier, automation, emergency, and recovery identities exist?",
    "output": "Identity inventory with type, owner, purpose, lifecycle, systems, and data.",
    "stop": "Do not design access while important identities remain shared, generic, or unowned."
  },
  {
    "step": "2",
    "title": "Map mission tasks and authority",
    "questions": "Which fictional identities must perform which exact actions on which targets for which mission purpose?",
    "output": "Task, action, target, purpose, and owner map.",
    "stop": "Reject access justified only by convenience or possible future need."
  },
  {
    "step": "3",
    "title": "Design roles and permissions",
    "questions": "Which fictional permissions belong together, which must remain separate, and what should be denied explicitly?",
    "output": "Role-to-permission and denied-action matrix.",
    "stop": "Pause if one role crosses conflicting duties or unrelated systems."
  },
  {
    "step": "4",
    "title": "Add context and approval",
    "questions": "Which fictional time, device or workload state, service health, location conceptually, approval, session, and risk conditions apply?",
    "output": "Conditional-access and approval design.",
    "stop": "Do not treat authentication alone as authorization."
  },
  {
    "step": "5",
    "title": "Design privilege activation and use",
    "questions": "How should fictional privileged, supplier, automation, and recovery access start, operate, expire, and leave evidence?",
    "output": "Just-in-time, just-enough, session, and evidence plan.",
    "stop": "Do not leave temporary high-impact access permanently active."
  },
  {
    "step": "6",
    "title": "Map lifecycle and review",
    "questions": "How are fictional identities created, changed, reviewed, suspended, recovered, and retired?",
    "output": "Identity lifecycle and access-review workflow.",
    "stop": "Pause if role or ownership changes do not remove old privilege."
  },
  {
    "step": "7",
    "title": "Analyze failure and recovery",
    "questions": "What happens when fictional identity, approval, logging, supplier, automation, administrator, or recovery controls fail?",
    "output": "Identity failure-state, degraded-mode, and recovery matrix.",
    "stop": "Do not allow uncontrolled fail-open access or unnecessary total outage."
  },
  {
    "step": "8",
    "title": "Design evidence and source health",
    "questions": "Which fictional records prove identity, role, context, decision, approver, action, target, result, session, lifecycle, and closure?",
    "output": "Identity evidence and source-health coverage map.",
    "stop": "Do not approve access that cannot be attributed or reconstructed."
  },
  {
    "step": "9",
    "title": "Validate effective access",
    "questions": "Do fictional actual permissions, roles, sessions, service identities, exceptions, and lifecycle states match the approved design?",
    "output": "Effective-access validation and identity-drift review.",
    "stop": "Do not treat role documentation or policy as proof of current access."
  },
  {
    "step": "10",
    "title": "Govern change and residual risk",
    "questions": "How are fictional new roles, suppliers, services, exceptions, emergency use, orphaned identities, conflicts, and risk decisions reviewed?",
    "output": "Identity governance, exception, corrective-action, and risk plan.",
    "stop": "Do not accept unowned identities or unresolved privilege concentration."
  }
];
const owners = [
  {
    "role": "Mission owner",
    "owns": "Fictional critical tasks, user outcomes, acceptable disruption, business priority, and residual business risk.",
    "decision": "Which identity capabilities are truly required for the mission.",
    "evidence": "Mission-task map, service priority, disruption limits, and risk acceptance."
  },
  {
    "role": "Identity architect",
    "owns": "Fictional identity classes, trust, roles, lifecycle, conditional access, privilege, evidence, and recovery design.",
    "decision": "Whether identity architecture is least-privileged, resilient, attributable, and governed.",
    "evidence": "Identity model, role matrix, lifecycle, failure analysis, decisions, and validation plan."
  },
  {
    "role": "Identity operations owner",
    "owns": "Fictional identity creation, change, activation, suspension, recovery, retirement, source health, and operational evidence.",
    "decision": "Whether approved identity changes are implemented and supportable.",
    "evidence": "Requests, approvals, change records, activation, disablement, recovery, and closure."
  },
  {
    "role": "System and service owner",
    "owns": "Fictional service functions, required actions, dependencies, service identities, continuity, and target authorization.",
    "decision": "Which identities and actions the service requires.",
    "evidence": "Service map, action catalog, dependency review, access tests, health, and rollback."
  },
  {
    "role": "Data and privacy owner",
    "owns": "Fictional data purpose, categories, fields, access, sharing, retention, deletion, and privacy effects.",
    "decision": "Which identities may access which data for which purpose.",
    "evidence": "Data inventory, field scope, role approval, access review, retention, deletion, and restore checks."
  },
  {
    "role": "Privileged-access owner",
    "owns": "Fictional administrative roles, approval, just-in-time access, sessions, emergency use, evidence, and review.",
    "decision": "Which high-impact actions require privilege and how duties remain separated.",
    "evidence": "Privilege requests, approvals, sessions, actions, changes, expiration, and review."
  },
  {
    "role": "Detection and evidence owner",
    "owns": "Fictional identity logs, policy decisions, source health, time quality, session evidence, access, retention, alerts, and case linkage.",
    "decision": "Whether identity use, denial, drift, misuse concern, failure, and recovery can be reconstructed.",
    "evidence": "Coverage map, sample events, source-health checks, access review, and retention."
  },
  {
    "role": "Recovery owner",
    "owns": "Fictional recovery identities, custody, restore authority, emergency access, exercises, closure, and service validation.",
    "decision": "Whether identity trust can be restored without depending entirely on the failed identity system.",
    "evidence": "Recovery map, custodian records, exercise, proofing, rotation, service checks, and signoff."
  },
  {
    "role": "Supplier sponsor",
    "owns": "Fictional supplier identities, purpose, contract scope, systems, data, approval, expiration, monitoring, fallback, and exit.",
    "decision": "Which supplier access remains necessary and acceptable.",
    "evidence": "Supplier register, sponsor, sessions, actions, data scope, expiration, and review."
  },
  {
    "role": "Governance and risk owner",
    "owns": "Fictional access exceptions, role conflicts, identity drift, orphaned identities, corrective actions, residual risk, and final acceptance.",
    "decision": "Whether remaining identity risks are accepted, reduced, transferred, avoided, or monitored.",
    "evidence": "Decision records, exception register, deadlines, owner signoff, corrective evidence, and closure."
  }
];
const evidenceMatrix = [
  {
    "id": "IAM-01",
    "source": "Fictional identity inventory",
    "observation": "Human, service, supplier, automation, administrator, and recovery identities are listed, but four service identities have no current owner.",
    "supports": "Orphaned or weakly governed service identities may exist.",
    "limits": "Does not prove the identities are misused or unnecessary.",
    "use": "Confirm purpose, owner, dependencies, permissions, lifecycle, and replacement or retirement."
  },
  {
    "id": "IAM-02",
    "source": "Fictional role matrix",
    "observation": "One support role includes application, data, identity, logging, backup, and recovery permissions.",
    "supports": "Privilege concentration and role conflict may weaken separation of duties.",
    "limits": "Does not prove misuse.",
    "use": "Split duties, reduce scope, require temporary privilege, and add independent approval and evidence."
  },
  {
    "id": "IAM-03",
    "source": "Fictional access review",
    "observation": "Twelve users retain permissions from previous roles or completed projects.",
    "supports": "Privilege creep and lifecycle drift exist.",
    "limits": "Does not prove every retained permission is inappropriate.",
    "use": "Validate current role, actual use, owner need, conflicts, expiration, and removal."
  },
  {
    "id": "IAM-04",
    "source": "Fictional service-identity record",
    "observation": "Three applications share one long-lived credential with broad data access.",
    "supports": "Attribution, least privilege, rotation, and blast-radius controls are weak.",
    "limits": "Does not prove the credential has been exposed.",
    "use": "Create unique identities, narrow roles, owners, path limits, monitoring, and recovery."
  },
  {
    "id": "IAM-05",
    "source": "Fictional privileged-session map",
    "observation": "Identity administrators can approve their own privileged access and alter related evidence retention.",
    "supports": "Separation of duties and independent evidence are insufficient.",
    "limits": "Does not prove improper action occurred.",
    "use": "Separate approval, evidence ownership, retention authority, and risk acceptance."
  },
  {
    "id": "IAM-06",
    "source": "Fictional supplier-access record",
    "observation": "A supplier identity remains active after the contract support window ended.",
    "supports": "Supplier lifecycle and expiration controls failed.",
    "limits": "Does not prove the identity was used after expiration.",
    "use": "Suspend access, preserve evidence, confirm sponsor and need, then remove or formally reapprove."
  },
  {
    "id": "IAM-07",
    "source": "Fictional identity-outage exercise",
    "observation": "Critical support cannot continue because approval and recovery access depend on the failed identity platform.",
    "supports": "Identity architecture lacks safe degraded operation and independent recovery authority.",
    "limits": "Does not prove broad fail-open access would be safe.",
    "use": "Design limited fallback, separate recovery identity, independent evidence, and restoration validation."
  },
  {
    "id": "IAM-08",
    "source": "Fictional emergency-access review",
    "observation": "A break-glass identity remains enabled ten days after use, with no post-use rotation or owner signoff.",
    "supports": "Emergency-access closure and review are incomplete.",
    "limits": "Does not prove the identity was used improperly.",
    "use": "Expire access, rotate recovery material conceptually, review sessions, validate effective state, and close with owner signoff."
  }
];
const commonMistakes = [
  "Treating fictional identity as a username and password problem rather than architecture spanning purpose, role, privilege, lifecycle, context, evidence, failure, and recovery.",
  "Assuming successful authentication authorizes every action, target, data set, or service.",
  "Using shared administrator, service, supplier, automation, or recovery identities.",
  "Assigning broad roles for convenience instead of task-specific permissions.",
  "Allowing one fictional identity to approve, execute, alter evidence, recover, and accept risk.",
  "Leaving temporary privilege, supplier access, emergency access, or project access active indefinitely.",
  "Creating fictional service identities without current owner, lifecycle, narrow role, path scope, monitoring, and recovery.",
  "Failing to remove old permissions during role, project, supplier, or ownership changes.",
  "Performing access reviews as simple confirmation rather than examining actual use, conflicts, owner need, stale privilege, and exceptions.",
  "Using network location, device name, or internal status as proof of identity or authorization.",
  "Designing broad fail-open access during identity outages.",
  "Designing total fail-closed behavior without limited safe degraded service and independent recovery.",
  "Logging only authentication while omitting policy decisions, approvals, privileged actions, session changes, lifecycle events, and closure.",
  "Allowing emergency or recovery access to depend entirely on the failed identity system.",
  "Using real usernames, directories, role names, permissions, system names, logs, supplier details, or recovery identities in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What best describes identity-centered architecture?",
    "choices": [
      "Adding a login page to every system.",
      "Coordinating fictional identity types, authority, privilege, lifecycle, context, evidence, failure, recovery, and ownership across the architecture.",
      "Using one identity provider for everything.",
      "Giving every user a unique password."
    ],
    "answer": 1,
    "explanation": "Identity-centered architecture treats identity and authority as a complete lifecycle and system design problem."
  },
  {
    "question": "What is the difference between authentication and authorization?",
    "choices": [
      "They are the same decision.",
      "Authentication establishes identity; authorization decides whether that identity may perform a specific action on a specific target under current conditions.",
      "Authorization happens before identity exists.",
      "Authentication always grants administrator access."
    ],
    "answer": 1,
    "explanation": "Authentication identifies the actor; authorization evaluates the exact action, target, purpose, and context."
  },
  {
    "question": "Three fictional applications share one broad service credential. What is the strongest concern?",
    "choices": [
      "Service identities should never exist.",
      "Attribution, least privilege, rotation, ownership, and blast-radius controls are weak.",
      "The applications need more passwords.",
      "The credential is automatically compromised."
    ],
    "answer": 1,
    "explanation": "Shared broad service identities make it difficult to attribute actions and limit impact."
  },
  {
    "question": "Which design best supports separation of duties for a privileged fictional action?",
    "choices": [
      "The same administrator requests, approves, performs, validates, and deletes the evidence.",
      "One identity requests, an authorized separate owner approves, a named administrator performs, independent evidence is preserved, and another owner validates.",
      "A shared administrator account performs the task.",
      "No approval or evidence is required if the task is urgent."
    ],
    "answer": 1,
    "explanation": "High-impact actions should divide approval, execution, evidence, validation, and risk ownership."
  },
  {
    "question": "A fictional identity platform fails. What is the strongest architecture response?",
    "choices": [
      "Fail open for every user and administrator.",
      "Use a preapproved limited safe mode, separate emergency authority, narrow roles, independent evidence, and validated recovery.",
      "Disable every service indefinitely.",
      "Ignore identity until the platform returns."
    ],
    "answer": 1,
    "explanation": "The strongest design preserves critical mission outcomes while blocking uncontrolled privilege."
  },
  {
    "question": "What should happen after a fictional break-glass identity is used?",
    "choices": [
      "Leave it enabled for convenience.",
      "Review the session, expire access, rotate recovery material conceptually, validate effective state, document the decision, and obtain owner signoff.",
      "Delete all evidence.",
      "Convert it into a standard administrator account."
    ],
    "answer": 1,
    "explanation": "Emergency access requires strict post-use closure, review, and validation."
  },
  {
    "question": "What makes an A2.5 portfolio artifact safe to share?",
    "choices": [
      "Only real passwords are removed.",
      "Real role names are shortened.",
      "Every organization, identity, role, permission, system, evidence item, exception, decision, date, and outcome is invented.",
      "The real directory is summarized."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects real people, systems, identities, privileges, and security design."
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

export default function IdentityCenteredArchitecturePage() {
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
              Lesson 5 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Identity Architecture
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A2.5 Identity-Centered Architecture
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how advanced defenders design fictional human, service,
            device, workload, administrator, supplier, automation, emergency,
            and recovery identities across authentication, authorization,
            privilege, lifecycle, context, evidence, failure, and recovery.
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
          lessonTitle="Identity-Centered Architecture"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional organizations, identities, roles, permissions, systems, evidence, exceptions, decisions, dates, and outcomes.",
            "I understand that authentication does not automatically authorize every action or resource.",
            "I will treat human, service, device, workload, supplier, automation, administrator, emergency, and recovery identities as different architecture concerns.",
            "I will not upload or reproduce real usernames, directories, role names, permissions, credentials, logs, supplier identities, or recovery details.",
            "I will analyze only supplied fictional evidence and will not access, test, change, recover, or investigate real systems.",
            "I will document lifecycle, least privilege, separation of duties, safe degraded operation, evidence quality, effective access, and residual risk.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="One Login Can Control Too Much of the Architecture"
        >
          <p className="leading-8">
            A fictional support role can reach application, data, identity,
            logging, backup, and recovery functions. Three applications share
            one broad service credential, supplier access remains active after
            its support window, and identity administrators can approve their
            own privilege while changing evidence retention. Every identity may
            be technically valid, yet the architecture still concentrates too
            much authority and too little accountability.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Login-centered thinking
              </p>
              <p className="mt-2 leading-7">
                Confirm an identity once, assign broad roles, leave access
                active, and assume valid credentials equal trusted behavior.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Identity-centered thinking
              </p>
              <p className="mt-2 leading-7">
                Validate identity, exact action, target, purpose, context,
                approval, duration, evidence, lifecycle, recovery, and owner.
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
          title="Every Architecture Decision Eventually Becomes an Identity Decision"
        >
          <p className="leading-8">
            Fictional users access services, applications call data, suppliers
            support integrations, administrators change controls, automation
            performs actions, and recovery operators restore systems. Each
            activity depends on deciding who or what is acting, what it may do,
            where, why, for how long, under which context, with whose approval,
            and with which evidence. Weak identity architecture can bypass
            segmentation, collapse defense in depth, hide responsibility, and
            prevent safe recovery.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Limit authority",
                "Give fictional identities only the systems, actions, data, context, and time required for the task.",
              ],
              [
                "Preserve accountability",
                "Keep fictional identity, approval, session, action, target, result, and lifecycle evidence.",
              ],
              [
                "Support resilience",
                "Design fictional safe degraded service and recovery that do not depend entirely on one identity platform.",
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
          title="Identity → Role → Context → Decision → Session → Evidence → Lifecycle → Recovery"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Identity", "Establish which fictional human, service, device, workload, supplier, automation, or recovery actor exists."],
              ["Role", "Assign fictional responsibilities and minimum permissions aligned with mission function."],
              ["Context", "Evaluate fictional time, service, action, device or workload state, approval, and risk conditions."],
              ["Decision", "Allow, deny, limit, pause, require approval, or use safe fallback for the exact request."],
              ["Session", "Control fictional start, scope, action, target, rate, evidence, termination, and expiry."],
              ["Evidence", "Preserve fictional identity, assurance, role, decision, approver, action, target, result, and source health."],
              ["Lifecycle", "Create, change, review, suspend, recover, and retire fictional identities and access."],
              ["Recovery", "Restore fictional identity trust with separate authority, proofing, limited privilege, validation, and closure."],
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
          title="Language for Identity Architecture"
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
            Identity Classes
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Identity Types with Different Risk and Lifecycle Needs
          </h2>

          <div className="mt-6 grid gap-5">
            {identityClasses.map((item) => (
              <article
                key={item.class}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.class}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.purpose}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Expected access", item.access],
                    ["Core controls", item.controls],
                    ["Required evidence", item.evidence],
                    ["Failure pattern", item.failure],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.class}-${label}`}
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
            Identity Lifecycle
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Stages from Request to Retirement
          </h2>

          <div className="mt-6 grid gap-5">
            {lifecycleStages.map((item) => (
              <article
                key={item.stage}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.stage}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.question}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Requirements", item.requirements],
                    ["Evidence", item.evidence],
                    ["Failure pattern", item.failure],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.stage}-${label}`}
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
            Authorization Dimensions
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions beyond Authentication
          </h2>

          <div className="mt-6 grid gap-5">
            {authorizationDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.dimension}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.question}</p>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong design
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strong_design}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak design
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.weak_design}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.evidence}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Role Design
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Roles with Explicit Boundaries
          </h2>

          <div className="mt-6 grid gap-5">
            {roleDesigns.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.role}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.mission}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Allowed", item.allowed],
                    ["Denied", item.denied],
                    ["Approval model", item.approval],
                    ["Review model", item.review],
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Identity Failure Modes
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Architecture Failures and Defensive Responses
          </h2>

          <div className="mt-6 grid gap-5">
            {identityFailureModes.map((item) => (
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
            Ten Steps from Identity Inventory to Governance
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
            Identity Ownership
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Owners for Access, Evidence, Recovery, and Risk
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
          title="Fake Northbridge Identity Architecture Dashboard"
          subtitle="Fictional identity, role, privilege, lifecycle, evidence, supplier, emergency, and recovery review for training only."
          metrics={[
            {
              label: "Active identities",
              value: "146",
              note: "Fictional human, service, supplier, automation, administrator, and recovery identities are included.",
            },
            {
              label: "Identity concerns",
              value: "8",
              note: "Orphaned services, privilege concentration, stale roles, shared credentials, supplier drift, and emergency-access closure require review.",
            },
            {
              label: "Current status",
              value: "High Risk",
              note: "Effective fictional access exceeds approved role, lifecycle, and separation-of-duties expectations.",
            },
          ]}
        />

        <FakeAlertCard
          title="Privilege Concentration and Lifecycle Drift Weaken Identity Architecture"
          severity="High"
          time="6:08 PM"
          source="Fake Northbridge Identity Governance Console"
          details="One fictional support role reaches application, data, identity, logging, backup, and recovery functions. Four service identities have no owner, three applications share one broad credential, supplier access remains active after expiration, and a break-glass identity remains enabled."
          recommendation="Pause high-risk grants, preserve evidence, assign owners, split roles, create unique service identities, remove stale access, close supplier and emergency privileges, design safe degraded operation, and validate effective access."
        />

        <FakeLogPanel
          title="Fake Identity Architecture Review Timeline"
          logs={[
            "17:00 INVENTORY active-identities='146'",
            "17:05 SERVICE owner-missing='4'",
            "17:10 ROLE support-broad='app,data,id,logs,backup,recovery'",
            "17:20 REVIEW stale-role-memberships='12'",
            "17:30 SERVICE shared-credential='3-apps'",
            "17:40 PRIVILEGE self-approval='enabled'",
            "17:41 EVIDENCE retention-owner='same-admin'",
            "17:50 SUPPLIER access-expired='still-active'",
            "17:55 OUTAGE approval-dependency='same-idp'",
            "17:56 OUTAGE recovery-dependency='same-idp'",
            "18:00 EMERGENCY break-glass='enabled-10-days'",
            "18:02 CLOSURE post-use-review='missing'",
            "18:04 RISK privilege-concentration='confirmed'",
            "18:05 RISK lifecycle-drift='confirmed'",
            "18:06 DECISION high-risk-grants='paused'",
            "18:08 STATUS redesign='required'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence before Approving the Identity Architecture
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
          title="Should the Fictional Identity Architecture Be Approved?"
          question="Should the current fictional Northbridge identity architecture be approved?"
          evidence={[
            "Four service identities have no current owner.",
            "One support role includes application, data, identity, logging, backup, and recovery permissions.",
            "Twelve users retain access from previous roles or completed projects.",
            "Three applications share one long-lived credential with broad data access.",
            "Identity administrators can approve their own privilege and alter related evidence retention.",
            "A supplier identity remains active after its support window ended.",
            "Critical support and recovery depend on the same identity platform.",
            "A break-glass identity remains enabled ten days after use.",
          ]}
          options={[
            "No. Pause high-risk approval, assign owners, split duties, narrow roles, create unique service identities, remove stale access, close supplier and emergency access, design safe degraded operation, and validate effective access.",
            "Yes, because every identity can authenticate.",
            "Yes, because the support role is trusted.",
            "Yes, because emergency access may be useful later.",
          ]}
          bestAnswer={0}
          explanation="Identity architecture approval requires current ownership, least privilege, separation of duties, unique attributable identities, lifecycle control, safe failure, independent recovery, reliable evidence, and effective-access validation."
        />

        <SectionCard
          eyebrow="Common Identity Mistakes"
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
          title="Build a Fictional Identity-Centered Architecture"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Redesign the Northbridge Identity Model
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                copy, quote, lightly modify, summarize, or reproduce real
                usernames, directories, identity systems, roles, permissions,
                service credentials, privileged sessions, logs, supplier
                identities, or recovery details.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Fictional identity inventory by human, service, device, workload, supplier, automation, administrator, emergency, and recovery type.</li>
                <li>Mission-task, action, target, purpose, and owner map.</li>
                <li>Role-to-permission and explicitly denied-action matrix.</li>
                <li>Conditional-access, approval, just-in-time, and just-enough design.</li>
                <li>Identity lifecycle from request through retirement.</li>
                <li>Separation-of-duties and privilege-concentration review.</li>
                <li>Service, supplier, automation, emergency, and recovery identity design.</li>
                <li>Identity evidence and source-health coverage.</li>
                <li>Failure-state, degraded-service, recovery, and effective-access validation.</li>
                <li>Reflection, revision history, and complete fictionalization statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This activity creates a fictional educational design only. It does
            not authorize access, account creation, privilege change, recovery,
            testing, investigation, or collection involving any real system.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Support Role Has Cross-System Privilege"
          scenario="A fictional support role includes application, data, identity, logging, backup, and recovery permissions. The role exists for convenience, and current task evidence shows most users need only application support."
          choices={[
            {
              label: "Choice A",
              response: "Split the role into task-specific permissions, remove unrelated access, use temporary privilege for approved exceptions, separate approval and evidence ownership, and validate effective access.",
              outcome: "Best professional choice. The redesign preserves support while reducing privilege concentration.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Keep the role because support staff are trusted.",
              outcome: "Risky. Personal trust does not replace least privilege, role separation, lifecycle, and evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Disable every support identity immediately without checking service impact.",
              outcome: "Unsafe. High-risk access should be narrowed, but critical support and recovery outcomes must remain available.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Identity Platform Is Unavailable"
          scenario="The fictional identity platform provides authentication, authorization, approvals, administrator access, and recovery access. It fails during a critical support period."
          choices={[
            {
              label: "Choice A",
              response: "Use a preapproved limited safe mode, separate emergency authority, narrow roles, independent evidence, blocked high-risk actions, timed access, recovery validation, and post-use closure.",
              outcome: "Best professional choice. The design preserves the mission without uncontrolled fail-open access.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Allow every previously known identity to act as administrator.",
              outcome: "Risky. The response removes authorization, accountability, and blast-radius controls.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Block every user and service indefinitely.",
              outcome: "Risky. Total outage may be unnecessary when a controlled limited mode is approved.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design Identity Resilience without Permanent Bypass"
        >
          <p className="leading-8">
            Extend the fictional Northbridge architecture for a combined
            identity-platform and logging failure. A critical support function
            must continue, a supplier is assisting, and recovery requires
            privileged access. Design separate human, supplier, recovery, and
            observer identities with narrow authority, independent approval,
            minimum data, time limits, source-health awareness, evidence,
            restoration, revocation, and post-use validation.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              [
                "Required architecture",
                "Show fictional identity classes, roles, denied actions, approvals, contexts, session limits, independent evidence, recovery custody, and expiry.",
              ],
              [
                "Required validation",
                "Explain how the design preserves critical service, prevents privilege concentration, restores normal identity trust, removes temporary access, and proves closure.",
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
          title="Identity-Centered Architecture Checklist"
          items={[
            "I can inventory fictional human, service, device, workload, supplier, automation, administrator, emergency, observer, and recovery identities.",
            "I can distinguish fictional authentication, authorization, role, privilege, approval, session, delegation, lifecycle, and recovery decisions.",
            "I can map fictional identities to exact actions, targets, purposes, contexts, data, owners, approvals, durations, and denial conditions.",
            "I can design fictional least privilege, just-in-time access, just-enough access, conditional access, and separation of duties.",
            "I can identify fictional shared accounts, broad roles, service-identity risk, stale access, privilege creep, orphaned identities, supplier drift, and emergency-access drift.",
            "I can design fictional service, automation, supplier, privileged, emergency, observer, and recovery identities with unique ownership and evidence.",
            "I can preserve fictional identity, role, decision, approver, session, action, target, result, lifecycle, source-health, and closure evidence.",
            "I can design fictional safe degraded operation during identity or logging failure without uncontrolled fail-open access or unnecessary total outage.",
            "I can separate fictional approval, execution, evidence ownership, recovery authority, validation, and risk acceptance.",
            "I can validate fictional effective roles, permissions, sessions, exceptions, lifecycle, and access removal.",
            "I can govern fictional role changes, supplier access, emergency use, service ownership, access reviews, corrective actions, and residual risk.",
            "I will never use real usernames, directories, role names, permissions, service identities, privileged sessions, logs, supplier identities, or recovery details in this portfolio.",
          ]}
        />

        <MiniQuiz
          title="A2.5 Mini Quiz: Identity-Centered Architecture"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Identity-Centered Architecture Package for Northbridge. Include the identity inventory, identity classes, mission-task map, role-to-permission matrix, denied actions, conditional access, just-in-time and just-enough privilege, separation of duties, lifecycle workflow, access-review design, service identities, automation identities, supplier identities, privileged identities, emergency and recovery identities, observer access, identity evidence, source health, failure-state decisions, safe degraded mode, recovery design, effective-access validation, identity drift, orphaned identities, exceptions, residual risk, reflection, revision history, and a statement that every organization, identity, role, permission, system, evidence item, exception, decision, date, and outcome is invented."
          tips={[
            "Separate fictional authentication from authorization for every important action.",
            "Give each fictional human, service, supplier, automation, and recovery identity a current owner, purpose, role, lifecycle, and evidence plan.",
            "Include at least one privilege-concentration or stale-access problem and redesign it.",
            "Show how fictional emergency access activates, operates, expires, rotates conceptually, closes, and receives owner validation.",
            "Keep every identity, role, permission, system, supplier, session, evidence item, exception, decision, and outcome completely invented.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready to Design Logging and Visibility by Design?"
        >
          <p className="leading-8">
            Before moving to A2.6, rate your readiness from 1 to 5 for each area:
            identity classes, authentication, authorization, role design,
            privilege, context, approval, lifecycle, access review, service
            identities, supplier identities, emergency access, evidence,
            recovery, and effective-access validation.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why a fictional valid login does not authorize every action.",
              "I can design fictional human, service, supplier, automation, privileged, emergency, and recovery identities differently.",
              "I can separate fictional approval, execution, evidence, validation, recovery, and risk ownership.",
              "I can identify fictional stale access, privilege creep, orphaned identities, shared credentials, supplier drift, and emergency-access drift.",
              "I can validate fictional effective roles, permissions, sessions, lifecycle, source health, and closure.",
              "I can keep the entire identity architecture portfolio fully invented and safe to share.",
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
            Record one fictional role you would narrow, one identity lifecycle
            failure you would correct first, and one evidence question you will
            carry into A2.6.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Identity-centered architecture covers human, service, device, workload, supplier, automation, privileged, emergency, observer, and recovery identities.",
            "Authentication establishes identity; authorization decides whether that identity may perform a specific action on a specific target under current conditions.",
            "Least privilege limits fictional systems, actions, data, scope, context, duration, and authority.",
            "Separation of duties divides fictional approval, execution, evidence, validation, recovery, and risk acceptance.",
            "Service and automation identities need unique ownership, narrow roles, path limits, lifecycle, monitoring, and recovery.",
            "Identity lifecycle includes request, proofing, authorization, activation, use, change, review, suspension, recovery, and retirement.",
            "Access reviews should examine fictional current need, actual use, role conflicts, stale privilege, owner status, exceptions, and removal.",
            "Identity outages require limited safe degraded service, separate emergency authority, independent evidence, validated recovery, and strict closure.",
            "Effective-access validation compares fictional approved roles and policy with actual permissions, sessions, identities, exceptions, and lifecycle states.",
            "Every CyberShield identity-architecture artifact must remain fully fictional, defensive, non-operational, privacy-safe, and incapable of exposing real systems.",
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