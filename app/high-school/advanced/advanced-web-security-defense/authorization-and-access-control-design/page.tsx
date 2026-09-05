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
const modulePath = `${trackPath}/advanced-web-security-defense`;
const previousLesson = `${modulePath}/authentication-and-session-design`;
const nextLesson = `${modulePath}/input-handling-and-output-safety`;

const objectives = [
  "Distinguish authentication from authorization and explain why every protected fictional action still requires an independent access decision after identity has been established.",
  "Design fictional least-privilege access using roles, attributes, resource ownership, service identity, administrative separation, deny-by-default thinking, and explicit business purpose.",
  "Evaluate access-control decisions through subject, resource, action, context, ownership, sensitivity, business need, exception status, source health, monitoring, and owner approval.",
  "Review fictional administrative and service-to-service permissions for excessive privilege, unclear ownership, stale access, conflicting duties, exception drift, and weak recertification without teaching bypass or escalation techniques.",
  "Create a professional fictional Authorization and Access Control Review package containing an access matrix, policy questions, exception register, service-identity review, access-review workflow, monitoring plan, validation criteria, and public-safe summary.",
];

const vocabulary = [
  {
    term: "Authorization",
    definition:
      "The fictional decision that determines whether an already identified user or service may perform a specific action on a specific resource under current policy and context.",
  },
  {
    term: "Subject",
    definition:
      "The fictional user, administrator, service identity, application component, or automated process requesting an action.",
  },
  {
    term: "Resource",
    definition:
      "The fictional object or capability being protected, such as a case record, report, profile, administrative setting, API resource, or service function.",
  },
  {
    term: "Action",
    definition:
      "The fictional operation being requested, such as view, create, update, approve, export, configure, or administer.",
  },
  {
    term: "Least privilege",
    definition:
      "The principle that a fictional subject receives only the access needed for an approved business purpose and no unnecessary capability.",
  },
  {
    term: "Deny by default",
    definition:
      "A fictional access-design approach in which a subject receives no protected capability unless an explicit approved rule allows it.",
  },
  {
    term: "Role-based access concept",
    definition:
      "A fictional design that groups permissions around approved job or service responsibilities rather than assigning every permission individually.",
  },
  {
    term: "Attribute-aware access concept",
    definition:
      "A fictional design that considers approved context such as department, case assignment, resource sensitivity, owner relationship, time-limited status, or service purpose in addition to role.",
  },
  {
    term: "Object ownership",
    definition:
      "A fictional relationship showing which user, team, service, or business owner is responsible for or legitimately associated with a protected resource.",
  },
  {
    term: "Service identity",
    definition:
      "A fictional non-human identity used by an application or service to perform approved system-to-system actions under explicit purpose and privilege.",
  },
  {
    term: "Separation of duties",
    definition:
      "A fictional control that divides high-impact responsibilities so one subject does not unnecessarily create, approve, review, and conceal the same sensitive action.",
  },
  {
    term: "Access exception",
    definition:
      "A fictional temporary or unusual permission granted for a documented business reason with owner approval, scope, duration, monitoring, and expiration.",
  },
  {
    term: "Access review",
    definition:
      "A fictional process that compares current permissions with current role, ownership, business need, exceptions, and risk.",
  },
  {
    term: "Recertification",
    definition:
      "A fictional owner-driven confirmation that existing access is still required, appropriate, and correctly scoped after time or organizational change.",
  },
  {
    term: "Policy decision",
    definition:
      "The fictional result of applying approved access rules to subject, resource, action, and context.",
  },
  {
    term: "Policy enforcement",
    definition:
      "The fictional application of the authorization decision at the relevant application or service boundary. A10 studies this conceptually rather than through bypass testing.",
  },
];

const corePrinciples = [
  {
    principle: "Authenticate first, authorize every protected action",
    explanation:
      "Knowing who the fictional subject is does not answer whether that subject may view, modify, approve, export, configure, or administer the requested resource.",
    question:
      "What exact resource and action is being requested after identity is known?",
  },
  {
    principle: "Default to no protected access",
    explanation:
      "A fictional subject should receive capability because an approved rule grants it, not because no one remembered to deny it.",
    question:
      "Which explicit business rule grants this fictional action?",
  },
  {
    principle: "Use least privilege",
    explanation:
      "Permissions should match current responsibility, current ownership, and current business purpose instead of broad future convenience.",
    question:
      "What is the minimum fictional capability needed to complete the approved task?",
  },
  {
    principle: "Protect object ownership",
    explanation:
      "Two users may have the same broad role but still need different access to specific fictional cases, reports, or records.",
    question:
      "Does this subject have the required relationship to this exact resource?",
  },
  {
    principle: "Separate administration",
    explanation:
      "Higher-impact configuration, user management, access changes, and security settings should not inherit ordinary user assumptions.",
    question:
      "Which fictional actions belong only in an approved privileged role or session?",
  },
  {
    principle: "Govern service identities",
    explanation:
      "Application-to-application access needs purpose, owner, resource scope, lifecycle, monitoring, and review just like human access.",
    question:
      "Why does this fictional service identity need this exact action on this exact resource?",
  },
  {
    principle: "Use context carefully",
    explanation:
      "Approved context can refine access, but context should not become a vague reason to grant broad permission.",
    question:
      "Which contextual attribute is necessary, reliable, current, and owned?",
  },
  {
    principle: "Time-bound exceptions",
    explanation:
      "Emergency, temporary, project, and support access should expire unless explicitly reviewed and renewed.",
    question:
      "When does this fictional exception end, who owns it, and what evidence justifies renewal?",
  },
  {
    principle: "Review stale access",
    explanation:
      "Role changes, project endings, ownership changes, supplier changes, and service redesign can make old access inappropriate.",
    question:
      "What changed since the permission was first approved?",
  },
  {
    principle: "Monitor decisions, not private behavior",
    explanation:
      "Useful fictional access monitoring focuses on approvals, denials, privilege changes, administrative actions, exception use, service-identity behavior, and source health.",
    question:
      "Which access event answers a defender or governance question without collecting unnecessary personal information?",
  },
  {
    principle: "Keep decisions explainable",
    explanation:
      "Owners should be able to explain why a fictional subject was allowed or denied without relying on hidden assumptions.",
    question:
      "Can the access decision be traced to role, ownership, context, policy, and owner approval?",
  },
  {
    principle: "Treat Unknown as a valid review result",
    explanation:
      "If ownership, resource classification, service purpose, or policy is incomplete, the strongest outcome may be to hold access until the design is clarified.",
    question:
      "Which missing fictional fact prevents a defensible allow decision?",
  },
];

const authorizationWorkflow = [
  {
    step: "1. Identify the subject",
    detail:
      "Determine whether the fictional requester is a standard user, manager, administrator, service identity, support function, or another approved subject class.",
    output:
      "Subject class and owner.",
  },
  {
    step: "2. Identify the resource",
    detail:
      "Define the exact fictional case, report, profile, setting, API resource, administrative function, or data class being protected.",
    output:
      "Resource identity, classification, and owner.",
  },
  {
    step: "3. Identify the action",
    detail:
      "State the requested fictional operation precisely: view, create, update, approve, export, configure, assign, administer, or another bounded action.",
    output:
      "Action and business purpose.",
  },
  {
    step: "4. Check authentication state",
    detail:
      "Confirm that the subject has the appropriate fictional identity/session context for the action without assuming authentication alone grants access.",
    output:
      "Bounded identity assurance context.",
  },
  {
    step: "5. Check role and ownership",
    detail:
      "Compare the subject role, service purpose, team assignment, object ownership, and current responsibility to the requested resource.",
    output:
      "Role/ownership relationship.",
  },
  {
    step: "6. Check context and sensitivity",
    detail:
      "Review fictional resource sensitivity, privilege level, administrative status, recovery state, business workflow, and approved time-limited context.",
    output:
      "Context and sensitivity decision inputs.",
  },
  {
    step: "7. Apply deny-by-default policy",
    detail:
      "Allow only when the fictional policy explicitly supports the subject-resource-action-context combination.",
    output:
      "Allow, deny, restrict, or hold-for-review decision.",
  },
  {
    step: "8. Record and monitor important decisions",
    detail:
      "Capture fictional access approvals, denials, administrative changes, privilege updates, service-identity actions, exception use, and owner review according to privacy limits.",
    output:
      "Audit and monitoring record.",
  },
  {
    step: "9. Review exceptions and stale access",
    detail:
      "Compare temporary access, emergency access, supplier access, transferred staff, inactive projects, and changed service responsibilities against current need.",
    output:
      "Exception and recertification actions.",
  },
  {
    step: "10. Validate and improve",
    detail:
      "Use safe fictional evidence, owner review, expected decisions, monitoring, and change records to confirm the design without bypass testing.",
    output:
      "Authorization review package and improvement plan.",
  },
];

const roleMatrix = [
  {
    role: "Support User",
    purpose:
      "Create and manage fictional support cases assigned to the user or approved team workflow.",
    allowed:
      "Create case, view assigned case, update approved fields, add case notes within policy.",
    notAllowed:
      "Administrative configuration, unrelated case access, role changes, system-wide export, access-policy changes.",
    review:
      "Assignment, case ownership, department context, session state, and resource sensitivity.",
  },
  {
    role: "Support Manager",
    purpose:
      "Coordinate fictional team workload and review cases within the manager's approved scope.",
    allowed:
      "View team cases, approve selected workflow actions, reassign within approved team boundaries.",
    notAllowed:
      "Global administration, identity-policy changes, unrelated department data, unrestricted export.",
    review:
      "Team ownership, approval responsibility, case sensitivity, separation of duties.",
  },
  {
    role: "Reporting Analyst",
    purpose:
      "Produce fictional approved reports using minimized data required for business analysis.",
    allowed:
      "Access approved reporting views and aggregated data products.",
    notAllowed:
      "Modify support cases, manage users, change application configuration, access unnecessary personal fields.",
    review:
      "Reporting purpose, data minimization, aggregation level, export need, retention.",
  },
  {
    role: "Application Administrator",
    purpose:
      "Perform fictional application configuration and support administration.",
    allowed:
      "Approved administrative settings and operational support actions.",
    notAllowed:
      "Automatic access to all case content, identity administration, data-owner decisions, unrestricted reporting.",
    review:
      "Separate privileged session, least privilege, approval, monitoring, change record, rollback.",
  },
  {
    role: "Identity Administrator",
    purpose:
      "Manage fictional identity-specific settings and approved account administration.",
    allowed:
      "Approved identity-management actions.",
    notAllowed:
      "Application data ownership, support-case content, business-report approval, supplier administration.",
    review:
      "Identity-specific need, sensitive action verification, monitoring, separation of duties.",
  },
  {
    role: "Service Identity P",
    purpose:
      "Allow fictional Application Service B to call API Service P for approved case functions.",
    allowed:
      "Only the bounded API resources and actions required by the application purpose.",
    notAllowed:
      "Administrative APIs, unrelated data collections, identity-policy changes, human user interfaces.",
    review:
      "Service owner, caller purpose, resource scope, environment, lifecycle, monitoring, recertification.",
  },
  {
    role: "Recovery Operator",
    purpose:
      "Support fictional staged recovery and service validation.",
    allowed:
      "Only approved recovery functions and validation-related service access.",
    notAllowed:
      "Permanent production administration, ordinary case handling, identity policy changes.",
    review:
      "Recovery event, time-bound approval, monitoring, dependencies, automatic expiration.",
  },
  {
    role: "Governance Reviewer",
    purpose:
      "Review fictional policy, privacy, exception, and access-review evidence.",
    allowed:
      "Read approved governance records and minimized evidence needed for review.",
    notAllowed:
      "Modify operational data, approve own access, perform application administration.",
    review:
      "Need-to-know, independence, privacy, retention, separation of duties.",
  },
];

const decisionDimensions = [
  {
    dimension: "Subject",
    question:
      "Who or what is making the fictional request?",
    strongEvidence:
      "Current role or service identity, approved owner, valid session context.",
    weakAssumption:
      "The subject is internal, senior, or familiar, so broad access is acceptable.",
  },
  {
    dimension: "Resource",
    question:
      "What exact fictional object or capability is being protected?",
    strongEvidence:
      "Resource identifier, data classification, owner, business workflow.",
    weakAssumption:
      "Everything inside the same application can use one access rule.",
  },
  {
    dimension: "Action",
    question:
      "What exact operation is requested?",
    strongEvidence:
      "Bounded view, update, approve, export, configure, or administrative action.",
    weakAssumption:
      "If a user can view something, they should probably be able to change it.",
  },
  {
    dimension: "Ownership",
    question:
      "What approved relationship connects the subject to this resource?",
    strongEvidence:
      "Case assignment, team ownership, business responsibility, service contract.",
    weakAssumption:
      "Same role means access to every object's data.",
  },
  {
    dimension: "Context",
    question:
      "Which current fictional conditions matter?",
    strongEvidence:
      "Sensitive-action state, administrative session, approved project, recovery event, time-bound exception.",
    weakAssumption:
      "Context should always increase access.",
  },
  {
    dimension: "Sensitivity",
    question:
      "How important or private is the resource/action?",
    strongEvidence:
      "Data classification, administrative impact, business criticality, privacy requirement.",
    weakAssumption:
      "All fields and actions deserve the same access rule.",
  },
  {
    dimension: "Exception",
    question:
      "Is the access outside normal policy?",
    strongEvidence:
      "Documented reason, owner, scope, start/end, monitoring, approval, expiration.",
    weakAssumption:
      "Temporary access can remain until someone remembers to remove it.",
  },
  {
    dimension: "Decision owner",
    question:
      "Who is accountable for the allow, deny, or exception rule?",
    strongEvidence:
      "Named application, data, identity, service, governance, or business owner.",
    weakAssumption:
      "The system can decide everything without owner responsibility.",
  },
];

const accessReviewCases = [
  {
    caseId: "AC-01",
    scenario:
      "A Support User needs to view a fictional case assigned to that user's team.",
    subject:
      "Support User U-17",
    resource:
      "Case C-104",
    action:
      "View",
    context:
      "Team assignment verified; standard authenticated session; case sensitivity Standard.",
    decision:
      "Allow",
    reason:
      "Role, team ownership, action, and resource context align with normal policy.",
    monitoring:
      "Routine access event according to approved privacy-aware audit policy.",
  },
  {
    caseId: "AC-02",
    scenario:
      "The same Support User attempts to open a fictional case owned by another department.",
    subject:
      "Support User U-17",
    resource:
      "Case C-880",
    action:
      "View",
    context:
      "No assignment, no approved cross-department purpose, no exception.",
    decision:
      "Deny",
    reason:
      "Authentication does not replace object/team ownership requirements.",
    monitoring:
      "Denied access may be recorded for defender trend questions without assuming malicious intent.",
  },
  {
    caseId: "AC-03",
    scenario:
      "A Support Manager needs to approve a team workflow change.",
    subject:
      "Manager M-04",
    resource:
      "Team Workflow W-3",
    action:
      "Approve",
    context:
      "Manager owns the team workflow and has approved responsibility.",
    decision:
      "Allow",
    reason:
      "Role plus ownership supports the specific approval action.",
    monitoring:
      "Approval action recorded with owner and change context.",
  },
  {
    caseId: "AC-04",
    scenario:
      "An Application Administrator wants to read all fictional case content while troubleshooting configuration.",
    subject:
      "App Admin A-02",
    resource:
      "All case content",
    action:
      "Read",
    context:
      "Admin role exists, but no case-content business purpose is documented.",
    decision:
      "Deny / redesign support process",
    reason:
      "Administrative role does not automatically justify unrestricted business-data access.",
    monitoring:
      "Record the denied broad request and define a minimized troubleshooting path.",
  },
  {
    caseId: "AC-05",
    scenario:
      "Reporting Analyst R-02 needs an approved aggregate service report.",
    subject:
      "Reporting Analyst R-02",
    resource:
      "Aggregated Support Metrics",
    action:
      "View / Export approved report",
    context:
      "Reporting purpose approved; minimized data view; no unnecessary case text.",
    decision:
      "Allow",
    reason:
      "Reporting need, minimized resource, and approved role align.",
    monitoring:
      "Report generation and export according to approved audit/retention policy.",
  },
  {
    caseId: "AC-06",
    scenario:
      "Service Identity P needs to call a fictional case-status API.",
    subject:
      "Service Identity P",
    resource:
      "Case Status API",
    action:
      "Read bounded case status",
    context:
      "Application purpose documented; owner approved; environment current.",
    decision:
      "Allow",
    reason:
      "Service purpose and resource/action scope are explicit and least-privileged.",
    monitoring:
      "Service call category, policy decision, error state, source health, and owner review.",
  },
  {
    caseId: "AC-07",
    scenario:
      "Recovery Operator R-7 requests temporary access to recovery validation functions.",
    subject:
      "Recovery Operator R-7",
    resource:
      "Recovery Validation Functions",
    action:
      "Validate staged recovery",
    context:
      "Active recovery event; owner approval; time-bound exception; monitoring Healthy.",
    decision:
      "Allow temporarily",
    reason:
      "Purpose, time bound, owner approval, least privilege, and automatic expiration are documented.",
    monitoring:
      "Start/end, approved actions, exception expiration, and post-event review.",
  },
  {
    caseId: "AC-08",
    scenario:
      "A temporary project role ended last week, but its fictional access remains assigned.",
    subject:
      "Project User P-19",
    resource:
      "Project Reporting View",
    action:
      "Current access remains active",
    context:
      "Project assignment ended; no renewal approval exists.",
    decision:
      "Remove / recertify",
    reason:
      "Access no longer has documented current business need.",
    monitoring:
      "Recertification action and stale-access finding recorded.",
  },
];

const exceptionRules = [
  {
    field: "Business reason",
    requirement:
      "State why normal fictional policy is insufficient for the specific task.",
    failure:
      "Convenience, seniority, or vague urgency without a bounded purpose.",
  },
  {
    field: "Scope",
    requirement:
      "Limit the fictional exception to exact subject, resource, action, environment, and workflow.",
    failure:
      "Broad 'temporary admin' access with unrelated capability.",
  },
  {
    field: "Owner",
    requirement:
      "Name the fictional business/security owner authorized to approve the exception.",
    failure:
      "Self-approved access or unclear ownership.",
  },
  {
    field: "Duration",
    requirement:
      "Define start, end, or event-based expiration.",
    failure:
      "No expiration because the request is described as temporary.",
  },
  {
    field: "Monitoring",
    requirement:
      "Define which fictional approval, access, change, or termination events need visibility.",
    failure:
      "Exception use cannot be distinguished from ordinary activity.",
  },
  {
    field: "Review",
    requirement:
      "Define validation, post-use review, and whether renewal requires fresh justification.",
    failure:
      "Exception automatically renews without current need.",
  },
  {
    field: "Privacy",
    requirement:
      "Keep monitoring and evidence limited to what the access-governance purpose needs.",
    failure:
      "Collect unrelated personal content because the subject has exceptional access.",
  },
  {
    field: "Closure",
    requirement:
      "Confirm the fictional permission ended and dependent systems reflect the change.",
    failure:
      "Exception expires on paper but access remains active elsewhere.",
  },
];

const serviceIdentityQuestions = [
  "What fictional application or service owns this service identity?",
  "Which exact resource and action does the service identity need?",
  "Which environment or business workflow is the permission for?",
  "Could the service function with narrower data, fewer actions, or fewer resources?",
  "Who approves changes to the service identity's access?",
  "How is access reviewed when the application architecture changes?",
  "Which fictional events show normal versus unexpected service-identity use?",
  "What happens if the service identity is no longer needed?",
  "How do recovery and continuity affect the service identity's permissions?",
  "Which access decisions should be visible without exposing secrets or private content?",
];

const reviewCadence = [
  {
    trigger: "Role change",
    question:
      "Does the fictional user still need the same permissions after moving to a new responsibility?",
    action:
      "Recalculate role, resource ownership, administrative privilege, and exceptions.",
  },
  {
    trigger: "Team or case ownership change",
    question:
      "Should existing object-level access move, remain, or end?",
    action:
      "Update assignment-based access and verify stale permissions are removed.",
  },
  {
    trigger: "Project completion",
    question:
      "Which project-specific access no longer has business purpose?",
    action:
      "Expire or recertify temporary roles and exceptions.",
  },
  {
    trigger: "Application redesign",
    question:
      "Did trust boundaries, APIs, roles, resources, or service identities change?",
    action:
      "Re-run access design and service-identity review.",
  },
  {
    trigger: "Supplier change",
    question:
      "Does the fictional external dependency still need the same data or capability?",
    action:
      "Review purpose limitation, ownership, data scope, and access expiration.",
  },
  {
    trigger: "Recovery event",
    question:
      "Which temporary recovery permissions must expire after staged restoration?",
    action:
      "Remove time-bound access and validate normal policy state.",
  },
  {
    trigger: "Governance review",
    question:
      "Are privileged, sensitive, and exceptional permissions still current and explainable?",
    action:
      "Recertify, remove, narrow, or document accepted risk.",
  },
  {
    trigger: "Monitoring anomaly or policy drift",
    question:
      "Does observed fictional access behavior reveal stale policy, bad ownership, or incorrect role design?",
    action:
      "Review the policy and context without assuming malicious intent.",
  },
];

const evidenceSet = [
  {
    id: "AUTHZ-01",
    source: "Fictional role matrix",
    health: "Current",
    observation:
      "Support Users, Managers, Reporting Analysts, Application Administrators, Identity Administrators, Recovery Operators, Governance Reviewers, and Service Identity P have distinct purposes.",
    supports:
      "Role separation and least-privilege review.",
    limits:
      "Role names alone do not prove individual resource/action decisions are correct.",
    use:
      "Map roles to resources, actions, ownership, and exceptions.",
  },
  {
    id: "AUTHZ-02",
    source: "Fictional case-ownership record",
    health: "Healthy",
    observation:
      "Case C-104 belongs to Team Blue while Case C-880 belongs to Team Gold.",
    supports:
      "Object/team ownership can refine access beyond broad role.",
    limits:
      "Ownership alone does not authorize every action on the case.",
    use:
      "Evaluate AC-01 and AC-02.",
  },
  {
    id: "AUTHZ-03",
    source: "Fictional admin policy",
    health: "Current",
    observation:
      "Application Administrators manage settings but do not automatically own case content.",
    supports:
      "Administrative capability is separated from business-data ownership.",
    limits:
      "Does not prove all admin permissions are least-privileged.",
    use:
      "Evaluate administrative access and separation of duties.",
  },
  {
    id: "AUTHZ-04",
    source: "Fictional service-identity register",
    health: "Conditional",
    observation:
      "Service Identity P has a documented API purpose, but the next recertification owner is not recorded.",
    supports:
      "Purpose and resource scope are documented.",
    limits:
      "Lifecycle governance is incomplete.",
    use:
      "Record an ownership/recertification Unknown rather than a bypass finding.",
  },
  {
    id: "AUTHZ-05",
    source: "Fictional exception register",
    health: "Current",
    observation:
      "Recovery Operator R-7 has time-bound access that expires at the end of the staged recovery event.",
    supports:
      "A governed exception with purpose, duration, owner, and monitoring.",
    limits:
      "Does not prove all dependent systems will terminate access correctly.",
    use:
      "Validate exception closure and cross-service consistency.",
  },
  {
    id: "AUTHZ-06",
    source: "Fictional recertification report",
    health: "Healthy",
    observation:
      "Project User P-19 still has a project permission after the project ended.",
    supports:
      "A stale-access finding.",
    limits:
      "Does not prove misuse occurred.",
    use:
      "Remove or reapprove access based on current need.",
  },
  {
    id: "AUTHZ-07",
    source: "Fictional monitoring summary",
    health: "Healthy",
    observation:
      "Important allow/deny decisions, privileged changes, exception use, service-identity actions, and role changes are monitored.",
    supports:
      "High-level authorization observability.",
    limits:
      "Does not prove every policy decision is correct or every log is independent.",
    use:
      "Monitoring design, source-health review, and recertification support.",
  },
  {
    id: "AUTHZ-08",
    source: "Fictional architecture change",
    health: "Current",
    observation:
      "A new reporting feature introduces a browser-facing workflow that requests aggregate metrics from API P.",
    supports:
      "A new subject-resource-action path exists.",
    limits:
      "Does not prove the new feature is over-permissioned.",
    use:
      "Re-run role, service identity, data minimization, API authorization, and monitoring review.",
  },
];

const commonMistakes = [
  {
    mistake: "Authenticated means authorized",
    why:
      "Identity establishes who the fictional subject is, not which exact resource/action is allowed.",
    correction:
      "Evaluate authorization independently for each protected resource and action.",
  },
  {
    mistake: "Role alone decides everything",
    why:
      "A broad role may not capture resource ownership, sensitivity, administrative state, exception status, or service purpose.",
    correction:
      "Combine role with object ownership and relevant approved context.",
  },
  {
    mistake: "Administrators get all data",
    why:
      "Application administration and business-data ownership are different responsibilities.",
    correction:
      "Grant only the administrative data/capability required for the approved task.",
  },
  {
    mistake: "Temporary access never expires",
    why:
      "Project, emergency, support, and recovery permissions can become stale.",
    correction:
      "Use time bounds, owners, monitoring, automatic expiration, and post-use review.",
  },
  {
    mistake: "Service identities are invisible",
    why:
      "Non-human access can accumulate privilege and survive architecture changes.",
    correction:
      "Give service identities purpose, owner, resource/action scope, lifecycle, monitoring, and recertification.",
  },
  {
    mistake: "Denied access proves malicious intent",
    why:
      "A denial may result from mistake, stale links, workflow confusion, or changing ownership.",
    correction:
      "Treat the denial as an access event and use context before interpreting intent.",
  },
  {
    mistake: "Access review is annual paperwork only",
    why:
      "Role, project, resource, supplier, architecture, and recovery changes can make permissions stale much sooner.",
    correction:
      "Use event-driven review triggers in addition to periodic recertification.",
  },
  {
    mistake: "Validate by bypass testing",
    why:
      "A10 teaches defensive access design and review without unauthorized testing.",
    correction:
      "Use fictional expected-decision cases, owner evidence, policy tables, monitoring, and safe validation records.",
  },
];

const labPhases = [
  {
    phase: "Phase 1 — Define subjects and resources",
    tasks: [
      "Create fictional subject classes for ordinary users, managers, analysts, administrators, service identities, recovery roles, and governance reviewers.",
      "Create resource classes for cases, reports, profiles, configuration, identity settings, APIs, recovery functions, and governance records.",
      "Assign owners and data/security sensitivity.",
    ],
  },
  {
    phase: "Phase 2 — Define actions",
    tasks: [
      "List bounded fictional actions such as view, create, update, approve, assign, export, configure, administer, or validate.",
      "Separate view permission from change permission.",
      "Separate ordinary actions from privileged administrative actions.",
    ],
  },
  {
    phase: "Phase 3 — Build the access matrix",
    tasks: [
      "Map subject + resource + action combinations.",
      "Add ownership, context, sensitivity, exception status, and decision owner.",
      "Start from deny by default and add only explicit approved allows.",
    ],
  },
  {
    phase: "Phase 4 — Review object ownership",
    tasks: [
      "Use fictional Team Blue and Team Gold case ownership examples.",
      "Show why the same Support User role can allow one case and deny another.",
      "Create at least four ownership-sensitive policy examples.",
    ],
  },
  {
    phase: "Phase 5 — Review admin and service identities",
    tasks: [
      "Separate Application Admin, Identity Admin, Recovery Operator, and Service Identity P.",
      "Define exact purpose, resources, actions, session/exception requirements, owners, monitoring, and recertification.",
      "Identify where separation of duties matters.",
    ],
  },
  {
    phase: "Phase 6 — Build the exception register",
    tasks: [
      "Create fictional temporary, recovery, emergency, project, and supplier exceptions.",
      "For each include business reason, scope, owner, duration, monitoring, privacy, review, and closure.",
      "Reject any exception that has no expiration or owner.",
    ],
  },
  {
    phase: "Phase 7 — Build the access-review workflow",
    tasks: [
      "Use role change, project completion, ownership change, architecture change, supplier change, recovery, governance, and monitoring triggers.",
      "Create decisions to keep, narrow, remove, or reapprove access.",
      "Record Unknowns instead of inventing policy rules.",
    ],
  },
  {
    phase: "Phase 8 — Produce the review package",
    tasks: [
      "Create the final fictional access matrix, service-identity register, exception register, recertification plan, monitoring questions, findings, decision owners, validation cases, leadership summary, and public-safe portfolio summary.",
      "Use invented identifiers only.",
      "Do not test real accounts, objects, APIs, roles, or access-control boundaries.",
    ],
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
        Module A10
      </Link>
      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function AuthorizationAndAccessControlDesignPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Module A10
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">
              Lesson A10.3
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Authorization and Access
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A10.3 Authorization and Access Control Design
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders decide which authenticated
            fictional users and services may perform which actions on which
            resources. Build least-privilege, deny-by-default access using
            roles, ownership, attributes, service identities, administrative
            separation, exceptions, recertification, monitoring, and explicit
            decision ownership—without privilege escalation, access-control
            bypass, unauthorized requests, enumeration, or testing against real
            accounts or objects.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A10: Advanced Web Security Defense"
          lessonTitle="Authorization and Access Control Design"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that A10.3 teaches defensive authorization design, not privilege escalation, object-access bypass, IDOR exploitation, endpoint enumeration, or unauthorized requests.",
            "I will use only invented Northbridge subjects, roles, resources, actions, cases, APIs, service identities, policies, exceptions, and monitoring evidence.",
            "I can keep authentication and authorization separate: a valid session does not automatically permit a protected action.",
            "I will use least privilege, deny by default, object ownership, explicit business purpose, and decision ownership throughout the lesson.",
            "I will treat denied access as an access event rather than automatic proof of malicious intent.",
            "I will validate fictional access design through policy tables, expected decisions, owner evidence, monitoring, and safe review—not bypass testing.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Knowing Who the User Is Does Not Answer What the User May Do"
        >
          <p className="leading-8">
            A fictional Support User signs in successfully and opens Case
            C-104, which belongs to the user's approved team. That may be an
            allowed action. The same user then attempts to open Case C-880,
            which belongs to another department. The identity has not changed,
            but the authorization decision should.
          </p>

          <p className="mt-4 leading-8">
            Professional access control therefore evaluates the complete
            subject-resource-action-context relationship. Role matters, but so
            do object ownership, sensitivity, current business purpose,
            administrative state, service identity, exceptions, and owner
            decisions.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak access thinking
              </p>
              <p className="mt-2 leading-7">
                “The user is authenticated and has the Support User role, so all
                support cases should be accessible.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Defender access thinking
              </p>
              <p className="mt-2 leading-7">
                “Authentication gives identity context. Authorization still
                checks the exact resource, action, ownership, sensitivity,
                approved context, exception state, and policy.”
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Learning Objectives"
          title="Five Objectives for A10.3"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 text-sm font-semibold leading-7">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Why It Matters"
          title="Access Control Turns Identity into Safe Business Capability"
        >
          <p className="leading-8">
            Authentication alone cannot protect sensitive case data,
            administrative settings, identity configuration, reporting exports,
            APIs, or recovery functions. A fictional system also needs to decide
            what each subject may do, to which exact resource, under which
            ownership and business conditions.
          </p>

          <p className="mt-4 leading-8">
            Strong access design prevents both accidental over-permission and
            long-term privilege drift while keeping legitimate work possible.
            It also makes owner approval, monitoring, exceptions, recertification,
            privacy, and governance easier to explain.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Authorization and Access-Control Language"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{item.term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.definition}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Core Framework"
          title="Twelve Authorization and Access-Control Principles"
        >
          <div className="grid gap-5">
            {corePrinciples.map((item, index) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.principle}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.explanation}
                    </p>

                    <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                        Defender question
                      </p>
                      <p className="mt-2 text-sm leading-6">{item.question}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Professional Workflow"
          title="The Ten-Step Authorization Decision Workflow"
        >
          <div className="grid gap-5">
            {authorizationWorkflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.step}</h3>
                <p className="mt-2 leading-7 text-slate-300">{item.detail}</p>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Output
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.output}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fictional Northbridge Access Governance Dashboard"
          subtitle="A10.3 — authorization design review"
          metrics={[
            {
              label: "Subject classes",
              value: "8",
              note: "Users, managers, analysts, admins, service identity, recovery, and governance roles",
            },
            {
              label: "Review cases",
              value: "8",
              note: "Allow, deny, temporary allow, stale-access removal, and redesign decisions",
            },
            {
              label: "Decision model",
              value: "Subject → Resource → Action → Context",
              note: "Role alone is not enough for protected access",
            },
            {
              label: "Default posture",
              value: "Deny",
              note: "Protected capability requires an explicit approved rule",
            },
          ]}
        />

        <SectionCard
          eyebrow="Role Design"
          title="Eight Fictional Subject Classes"
        >
          <div className="grid gap-5">
            {roleMatrix.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.role}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Typical allowed purpose
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.allowed}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Not automatically allowed
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.notAllowed}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Review focus
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.review}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeAlertCard
          title="Fictional Access-Control Design Warning"
          severity="High"
          time="Northbridge access review 13:15"
          source="A10.3 authorization review board"
          details="A proposed Application Administrator role would receive unrestricted read access to all support-case content because administrators may need to troubleshoot the service, even though no business requirement for case-content access is documented."
          recommendation="Separate application administration from business-data ownership. Define the exact troubleshooting information administrators need, minimize case-content exposure, require explicit authorization for any sensitive data access, monitor privileged actions, and document owner-approved exceptions when unusual access is truly necessary."
        />

        <SectionCard
          eyebrow="Decision Dimensions"
          title="Eight Inputs to a Defensible Authorization Decision"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {decisionDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.dimension}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.question}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.strongEvidence}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Weak assumption
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.weakAssumption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeLogPanel
          title="Fictional Authorization Decision Log"
          logs={[
            "13:00 | SUBJECT | U-17 | role=SupportUser | session=Standard",
            "13:01 | RESOURCE | C-104 | owner=TeamBlue | sensitivity=Standard",
            "13:01 | DECISION | subject=U-17 | action=view | result=Allow | reason=team-owned-case",
            "13:03 | RESOURCE | C-880 | owner=TeamGold | sensitivity=Standard",
            "13:03 | DECISION | subject=U-17 | action=view | result=Deny | reason=no-approved-ownership",
            "13:07 | ADMIN | A-02 | request=all-case-content | result=Hold | business_need=undocumented",
            "13:10 | SERVICE | P | action=case-status-read | purpose=approved | result=Allow",
            "13:12 | EXCEPTION | R-7 | recovery-access=true | expiry=end-of-recovery-event",
            "13:15 | REVIEW | role=AppAdmin | broad-data-access=true | approval=hold",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze the Cross-Team Case Request"
          question="What is the strongest interpretation of AC-02?"
          evidence={[
            "U-17 is successfully authenticated.",
            "U-17 has the Support User role.",
            "Case C-880 belongs to Team Gold.",
            "U-17 has no assignment, approved cross-team purpose, or exception for C-880.",
          ]}
          options={[
            "Allow access because the user is authenticated and works in support.",
            "Deny the specific resource/action because the broad role does not satisfy the case-ownership requirement.",
            "Assume U-17 is acting maliciously because the request was denied.",
            "Give U-17 temporary administrator access so the case can be opened.",
          ]}
          bestAnswer={1}
          explanation="Authentication and broad role are not enough. Object/team ownership is an independent authorization input, and a denied request does not by itself prove malicious intent."
        />

        <SectionCard
          eyebrow="Access Decision Cases"
          title="Eight Fictional Authorization Decisions"
        >
          <div className="grid gap-5">
            {accessReviewCases.map((item) => (
              <article
                key={item.caseId}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.caseId}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">
                    {item.decision}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.scenario}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    ["Subject", item.subject],
                    ["Resource", item.resource],
                    ["Action", item.action],
                    ["Context", item.context],
                    ["Reason", item.reason],
                    ["Monitoring", item.monitoring],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1: The Helpful Administrator"
          scenario="A fictional Application Administrator says unrestricted read access to every support case would make troubleshooting faster. The current architecture separates application configuration from business-data ownership, and most troubleshooting can be performed with service-health and configuration evidence."
          choices={[
            {
              label: "Choice A",
              response:
                "Grant unrestricted case access because administrators are trusted employees.",
              outcome:
                "Trust in a person does not replace least privilege, business need, data ownership, privacy, or separation of responsibilities.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response:
                "Keep routine administrative access separate from case content, use minimized troubleshooting evidence, and create an owner-approved time-bound exception only when a specific case-content need is justified.",
              outcome:
                "This preserves least privilege while still allowing legitimate troubleshooting.",
              tone: "best",
            },
            {
              label: "Choice C",
              response:
                "Remove all administrator access to the application.",
              outcome:
                "Administration may be required; the goal is to scope it safely rather than eliminate necessary operations.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard
          eyebrow="Service Identities"
          title="Ten Questions for Non-Human Access"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {serviceIdentityQuestions.map((question, index) => (
              <div
                key={question}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Service Identity Question {index + 1}
                </p>
                <p className="mt-2 text-sm leading-7">{question}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Exception Governance"
          title="Eight Requirements for Temporary or Exceptional Access"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {exceptionRules.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.field}</h3>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Requirement
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.requirement}</p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Failure pattern
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.failure}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Analyze the Service Identity"
          question="What is the strongest response to AUTHZ-04?"
          evidence={[
            "Service Identity P has a documented application purpose.",
            "Its API resource/action scope is documented.",
            "The next recertification owner is missing.",
            "No supplied evidence shows unauthorized service access.",
          ]}
          options={[
            "Declare Service Identity P compromised.",
            "Record an ownership/recertification Unknown, assign the appropriate service/application owner, and complete lifecycle governance before calling the access design fully mature.",
            "Ignore the missing owner because the service identity is non-human.",
            "Attempt unauthorized API requests to determine whether the service identity is over-permissioned.",
          ]}
          bestAnswer={1}
          explanation="The evidence supports incomplete governance, not a proven authorization failure. Service identities need lifecycle ownership and recertification just like human access."
        />

        <SectionCard
          eyebrow="Access Review"
          title="Eight Triggers for Rechecking Existing Permission"
        >
          <div className="grid gap-5">
            {reviewCadence.map((item) => (
              <article
                key={item.trigger}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.trigger}</h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Review question
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.question}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Review action
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.action}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2: The Temporary Permission That Never Ended"
          scenario="A fictional project role ended last week, but Project User P-19 still has access to the Project Reporting View. No current project assignment or renewal approval exists."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the access because the user may need it again someday.",
              outcome:
                "Future convenience is not current business need and conflicts with least privilege.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response:
                "Remove or suspend the stale project access, record the recertification action, and require a fresh owner-approved request if the business need returns.",
              outcome:
                "This restores least privilege while keeping future legitimate access possible through normal governance.",
              tone: "best",
            },
            {
              label: "Choice C",
              response:
                "Assume the user misused the access because it remained active.",
              outcome:
                "Stale access is a governance finding, not proof of misuse.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard
          eyebrow="Fictional Evidence"
          title="Northbridge Authorization Evidence Set"
        >
          <div className="grid gap-5">
            {evidenceSet.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">
                    {item.health}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.source}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Limits", item.limits],
                    ["Review use", item.use],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Common Mistakes"
          title="Eight Authorization Mistakes to Avoid"
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
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Fictional Lab"
          title="Build the Northbridge Authorization and Access Control Review"
        >
          <p className="leading-8">
            Use only the invented roles, resources, actions, access cases,
            service identities, exception records, and evidence on this page.
            The goal is defensive policy design, governance, ownership,
            recertification, privacy, and monitoring—not bypass testing.
          </p>

          <div className="mt-6 grid gap-5">
            {labPhases.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.phase}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {item.tasks.map((task) => (
                    <li key={task}>• {task}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              Do not test real authorization boundaries, accounts, roles,
              objects, URLs, APIs, identifiers, administrative functions, or
              service identities. Do not enumerate resources, change identifiers,
              send unauthorized requests, test object-level access, attempt
              privilege escalation, or bypass access controls. Use only the
              fictional policy evidence and expected decisions supplied here.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Redesign an Over-Permissive Support Portal"
        >
          <p className="leading-8">
            A fictional Northbridge redesign gives every employee one broad
            “Staff” role. That role can view all support cases, export reports,
            change application settings, and call internal APIs because the
            product team wants simple access management. Redesign the model
            without offensive testing.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Split the broad Staff role into at least six purpose-based subject classes.",
              "Define resource classes and protected actions separately.",
              "Create deny-by-default rules and add only explicit approved allows.",
              "Use case/team ownership to refine ordinary support access.",
              "Separate application administration from business-data ownership.",
              "Create a least-privileged service identity for API calls.",
              "Design temporary recovery and emergency exceptions with automatic expiration.",
              "Create separation-of-duties rules for sensitive approval and administrative actions.",
              "Build event-driven recertification triggers for role, project, supplier, architecture, and recovery changes.",
              "Write a leadership summary explaining how the redesign reduces privilege while preserving legitimate work.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A10.3 Authorization and Access Control Checklist"
          items={[
            "I can separate authentication from authorization.",
            "I can model fictional access as subject, resource, action, context, and decision.",
            "I can use deny by default and least privilege.",
            "I can combine role with object ownership and relevant approved context.",
            "I can separate application administration from business-data ownership.",
            "I can design service-identity access with explicit purpose, scope, owner, monitoring, lifecycle, and recertification.",
            "I can govern temporary and emergency exceptions with scope, owner, duration, monitoring, privacy, review, and closure.",
            "I can use separation of duties for higher-impact fictional actions.",
            "I can identify stale access after role, project, ownership, supplier, architecture, or recovery changes.",
            "I can treat denied access as an event rather than proof of malicious intent.",
            "I can validate authorization through fictional policy decisions and owner evidence instead of bypass testing.",
            "I can create a public-safe access-control portfolio artifact without real accounts, resources, identifiers, endpoints, or security configuration.",
          ]}
        />

        <MiniQuiz
          title="A10.3 Mini Quiz: Authorization and Access Control Design"
          questions={[
            {
              question:
                "What does fictional authentication establish?",
              choices: [
                "The subject may access every resource.",
                "Identity context; authorization still decides each protected resource/action.",
                "Administrative privilege.",
                "Object ownership.",
              ],
              answer: 1,
              explanation:
                "Authentication and authorization are separate. Identity alone does not grant every capability.",
            },
            {
              question:
                "Which access model best demonstrates deny by default?",
              choices: [
                "Allow everything unless a rule denies it.",
                "Grant broad Staff access to simplify support.",
                "Protected actions are denied unless an explicit approved rule allows the subject-resource-action-context combination.",
                "Let administrators decide informally.",
              ],
              answer: 2,
              explanation:
                "Deny by default requires an explicit approved allow for protected capability.",
            },
            {
              question:
                "Why can two Support Users with the same role receive different case-access decisions?",
              choices: [
                "Roles are useless.",
                "Object/team ownership and resource context can refine authorization beyond broad role.",
                "One user must be an administrator.",
                "Authentication failed for one user.",
              ],
              answer: 1,
              explanation:
                "Role is one input. Ownership and resource context may change the decision.",
            },
            {
              question:
                "What is strongest for a temporary fictional recovery permission?",
              choices: [
                "Grant broad access with no end date.",
                "Use exact scope, owner approval, time/event-based expiration, monitoring, and post-use review.",
                "Give the Recovery Operator permanent administrator rights.",
                "Avoid monitoring because the access is temporary.",
              ],
              answer: 1,
              explanation:
                "Temporary access should be bounded, owned, monitored, and designed to expire.",
            },
            {
              question:
                "Why should service identities receive access review?",
              choices: [
                "They should not; only human users matter.",
                "Their purpose, resource scope, architecture, lifecycle, and business need can change over time.",
                "They always have administrator access.",
                "They cannot be monitored.",
              ],
              answer: 1,
              explanation:
                "Non-human access can become stale or over-broad and needs ownership and recertification.",
            },
            {
              question:
                "A user receives a denied access decision. What is the strongest interpretation?",
              choices: [
                "The user is malicious.",
                "The policy denied the subject-resource-action-context combination; intent remains a separate question.",
                "The account is compromised.",
                "The authorization system is broken.",
              ],
              answer: 1,
              explanation:
                "A denial is an access-control result, not automatic proof of intent or compromise.",
            },
            {
              question:
                "What is the strongest response to an incomplete fictional authorization rule?",
              choices: [
                "Test a real resource to see whether access can be bypassed.",
                "Assume the user should be allowed.",
                "Record the policy area as Unknown, assign an owner, document the missing role/ownership/context rule, and validate with fictional expected decisions.",
                "Assume a vulnerability exists.",
              ],
              answer: 2,
              explanation:
                "A10 uses safe defensive review. Missing policy should become an owned Unknown rather than an excuse for live bypass testing.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: Authorization and Access Control Review"
          prompt="Create a fully fictional A10.3 Authorization and Access Control Review for Northbridge. Include subject classes; roles; service identities; resource classes; actions; object ownership; data sensitivity; business purpose; deny-by-default rules; least-privilege decisions; attribute-aware context; administrative separation; separation of duties; service-to-service access; access matrix; expected allow/deny cases; exception register; project/recovery/emergency access; owner approvals; expiration; access-review triggers; recertification; stale-access findings; monitoring questions; source-health expectations; privacy/minimization; denied-access interpretation; decision owners; validation criteria; residual risk; technical summary; leadership summary; governance summary; and a public-safe access-control diagram. Every user, account, role, resource, case, service identity, policy, exception, event, and decision must be invented."
          tips={[
            "Model access as subject + resource + action + context.",
            "Use deny by default and least privilege.",
            "Keep role and object ownership as separate decision inputs.",
            "Separate administrative capability from business-data ownership.",
            "Give service identities owners, purpose, lifecycle, and recertification.",
            "Validate with fictional expected decisions rather than bypass testing.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A10.4 Input Handling and Output Safety?"
        >
          <p className="leading-8">
            Rate your readiness from 1 to 5 for separating authentication and
            authorization, applying least privilege and deny by default,
            modeling object ownership, governing service identities and
            exceptions, reviewing stale access, and explaining access decisions.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why successful sign-in does not grant every protected action.",
              "I can model subject, resource, action, ownership, and context.",
              "I can apply deny by default and least privilege.",
              "I can use object ownership to refine a broad role.",
              "I can separate administrative access from ordinary business-data access.",
              "I can govern service identities and temporary exceptions.",
              "I can use access-review triggers and recertification.",
              "I can treat a denied request as a policy event rather than automatic proof of malicious intent.",
              "I can record Unknowns and validate design without bypass testing.",
              "I am ready to focus on safe input contracts, validation, normalization, output handling, errors, logging, and privacy in A10.4.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Portfolio Build Guide"
          title="What a Strong A10.3 Artifact Should Show"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Clear subject classes and business purposes",
              "Explicit resource classes and protected actions",
              "Deny-by-default policy structure",
              "Least-privilege role design",
              "Object/team ownership rules",
              "Administrative separation",
              "Separation-of-duties decisions",
              "Service-identity purpose, owner, scope, lifecycle, and recertification",
              "Temporary and emergency exception governance",
              "Expected allow/deny decision cases",
              "Event-driven access-review triggers",
              "Stale-access findings and remediation",
              "Privacy-aware authorization monitoring",
              "Decision owners and validation criteria",
              "Technical, leadership, and governance summaries",
              "A public-safe diagram using invented labels only",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Portfolio element {index + 1}
                </p>
                <p className="mt-2 text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Authentication establishes identity context; authorization independently decides each protected action.",
            "Strong access control evaluates subject, resource, action, ownership, context, sensitivity, and policy.",
            "Deny by default and least privilege reduce unnecessary capability and make access easier to explain.",
            "Broad role membership does not automatically replace object ownership or business-purpose checks.",
            "Administrative capability should be separated from ordinary business-data ownership.",
            "Service identities need purpose, resource scope, owners, monitoring, lifecycle, and recertification.",
            "Temporary and emergency permissions should be time-bound, monitored, reviewable, and designed to expire.",
            "Denied access is a policy result and does not automatically establish malicious intent.",
            "Access review should respond to role, project, ownership, supplier, architecture, recovery, and governance changes.",
            "A10.3 prepares you for A10.4, where authorization-protected web functions must safely handle incoming data, output, errors, logs, and privacy-sensitive information.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Defensive Access Design — No Authorization Bypass Testing
          </h2>
          <p className="mt-3 leading-7">
            Nothing in A10.3 authorizes testing real accounts, roles, resources,
            object identifiers, endpoints, APIs, administrative functions, or
            service identities. Do not enumerate objects, modify identifiers,
            send unauthorized requests, attempt object-level access, escalate
            privileges, bypass access checks, or test real authorization
            weaknesses. Use only fictional policy tables, expected decisions,
            owner evidence, monitoring records, and safe design review.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Continue to Input Handling and Output Safety
          </h2>
          <p className="mt-3 max-w-4xl leading-7">
            A10.3 established subject-resource-action decisions, least
            privilege, deny by default, object ownership, administrative
            separation, service identities, exceptions, access review,
            recertification, monitoring, and owner accountability. A10.4 will
            focus on how authorized web functions safely accept, validate,
            normalize, store, display, log, and return fictional data without
            using attack payloads or exploitation strings.
          </p>

          <div className="mt-6">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}