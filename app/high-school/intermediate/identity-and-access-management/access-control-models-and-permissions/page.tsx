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

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/identity-and-access-management`;
const previousLesson = `${modulePath}/passwords-mfa-and-authentication-factors`;
const nextLesson = `${modulePath}/privileged-access-and-administrative-accounts`;

const objectives = [
  "Explain discretionary, mandatory, role-based, rule-based, attribute-based, relationship-based, and resource-level access-control concepts.",
  "Distinguish identities, subjects, objects, permissions, actions, policies, attributes, conditions, decisions, and enforcement points.",
  "Trace fictional access from direct permissions, groups, roles, resource ownership, policy rules, and inherited permissions.",
  "Identify conflicting policies, broad permissions, unsafe inheritance, stale attributes, missing ownership, and incorrect enforcement.",
  "Create a professional fictional Access-Control Policy Review with evidence, findings, owners, validation, and residual risk.",
];

const vocabulary = [
  [
    "Subject",
    "The fictional user, service, application, device, or session requesting access.",
  ],
  [
    "Object",
    "The fictional file, folder, report, database, application, system, setting, or other protected resource.",
  ],
  [
    "Action",
    "The exact fictional operation requested, such as view, edit, create, delete, approve, export, configure, or administer.",
  ],
  [
    "Permission",
    "An allowed or denied fictional action associated with a subject, role, group, policy, or resource.",
  ],
  [
    "Access-control policy",
    "A fictional rule or collection of rules that determines whether a requested action should be allowed, denied, challenged, or restricted.",
  ],
  [
    "Policy decision point",
    "The fictional component that evaluates subject, object, action, attributes, rules, and context to produce an access decision.",
  ],
  [
    "Policy enforcement point",
    "The fictional application, gateway, operating system, service, or resource that applies the access decision.",
  ],
  [
    "Inheritance",
    "The process through which fictional permissions flow from a parent resource, group, role, folder, or policy to another object or identity.",
  ],
  [
    "Explicit permission",
    "A fictional allow or deny directly assigned to a subject, group, role, or resource.",
  ],
  [
    "Effective access",
    "The final fictional access available after direct, inherited, role-based, group-based, resource-level, and policy conditions are evaluated.",
  ],
  [
    "Conflict",
    "A condition in which fictional rules, permissions, roles, or inherited settings produce competing or unclear access outcomes.",
  ],
  [
    "Default deny",
    "A design principle in which fictional access is denied unless an approved rule explicitly allows the required action.",
  ],
];

const accessControlModels = [
  {
    model: "Discretionary Access Control",
    abbreviation: "DAC",
    basis:
      "A fictional resource owner or authorized user decides who may access a resource.",
    example:
      "A teacher shares one fictional lesson-planning document with two reviewers.",
    strength:
      "Supports flexible, resource-specific collaboration.",
    risk:
      "Owner-managed sharing can become inconsistent, broad, stale, or difficult to recertify.",
    review:
      "Confirm owner authority, exact subject, action, resource, duration, inheritance, and removal.",
  },
  {
    model: "Mandatory Access Control",
    abbreviation: "MAC",
    basis:
      "A fictional system applies centrally controlled labels and rules that ordinary users cannot override.",
    example:
      "A training archive allows access only when the subject and resource labels satisfy the configured classification rule.",
    strength:
      "Provides consistent centralized control for highly structured information environments.",
    risk:
      "Incorrect labels or rigid rules can block required work or expose data if classification is wrong.",
    review:
      "Validate label ownership, assignment process, policy version, exceptions, and enforcement behavior.",
  },
  {
    model: "Role-Based Access Control",
    abbreviation: "RBAC",
    basis:
      "Fictional permissions are assigned to roles, and identities receive access through role membership.",
    example:
      "The report-reviewer role grants view and comment permissions to approved fictional reviewers.",
    strength:
      "Aligns access with defined job or service functions and simplifies consistent assignment.",
    risk:
      "Roles can become too broad, overlap, remain after job changes, or hide direct and local exceptions.",
    review:
      "Confirm role purpose, owner, permissions, conflicting roles, intended users, duration, and recertification.",
  },
  {
    model: "Rule-Based Access Control",
    abbreviation: "RuBAC",
    basis:
      "Fictional access follows centrally defined rules such as network zone, time, application, or action conditions.",
    example:
      "A training application allows report viewing only during approved support hours from the managed-school network.",
    strength:
      "Applies consistent organization-wide conditions.",
    risk:
      "Rules can conflict, become outdated, or deny valid workflows when context changes.",
    review:
      "Check rule order, scope, exceptions, version, owner, test cases, and default behavior.",
  },
  {
    model: "Attribute-Based Access Control",
    abbreviation: "ABAC",
    basis:
      "Fictional access is evaluated using subject, resource, action, and environmental attributes.",
    example:
      "A managed teacher device may view its assigned class report during the school term when the account department and resource owner match.",
    strength:
      "Supports detailed context-aware decisions without creating a separate role for every combination.",
    risk:
      "Stale or incorrect attributes can produce inappropriate allows or denials.",
    review:
      "Validate attribute source, freshness, owner, meaning, policy logic, missing-value behavior, and enforcement.",
  },
  {
    model: "Relationship-Based Access Control",
    abbreviation: "ReBAC",
    basis:
      "Fictional access depends on relationships between subjects, resources, organizations, groups, owners, or projects.",
    example:
      "A teacher may view only reports for classes they currently teach.",
    strength:
      "Represents ownership, membership, assignment, and collaboration relationships directly.",
    risk:
      "Incorrect or stale relationship data can extend access beyond the current responsibility.",
    review:
      "Confirm relationship source, lifecycle, owner, direction, resource scope, and removal.",
  },
  {
    model: "Resource-Level Access Control",
    abbreviation: "Resource ACL",
    basis:
      "A fictional resource stores an access list describing which identities or groups may perform specific actions.",
    example:
      "A project folder grants view to project-reviewers and edit to project-leads.",
    strength:
      "Provides precise object-level access.",
    risk:
      "Large numbers of local access lists can become inconsistent and invisible to central review.",
    review:
      "Inspect direct entries, inherited entries, owner, exceptions, shares, expiration, and effective access.",
  },
  {
    model: "Policy-Based Access Control",
    abbreviation: "PBAC",
    basis:
      "Fictional access is governed through reusable policies combining roles, attributes, rules, relationships, and resource conditions.",
    example:
      "A reporting policy requires the reviewer role, a managed device, an active project relationship, and fresh MFA before export.",
    strength:
      "Combines several control approaches into one governed decision process.",
    risk:
      "Complex policies can be difficult to understand, test, troubleshoot, and explain.",
    review:
      "Preserve policy versions, identify every input, test expected and denied cases, and document decision reasoning.",
  },
];

const permissionTypes = [
  {
    permission: "View or read",
    meaning:
      "The fictional subject can display or retrieve the protected resource.",
    risk:
      "Viewing can still expose sensitive information or enable copying through screenshots, exports, or connected applications.",
    validation:
      "Confirm the exact resource, field, record, class, report, or folder that is visible.",
  },
  {
    permission: "Create",
    meaning:
      "The fictional subject can add a new object, record, request, user-created item, or configuration entry.",
    risk:
      "Creation may trigger workflows, consume resources, or establish new sharing and ownership relationships.",
    validation:
      "Confirm where new objects appear, who owns them, and which approvals or restrictions apply.",
  },
  {
    permission: "Edit or update",
    meaning:
      "The fictional subject can change existing content or settings.",
    risk:
      "Editing may alter records, permissions, calculations, labels, ownership, or operational behavior.",
    validation:
      "Verify which fields and objects may change and whether sensitive settings remain protected.",
  },
  {
    permission: "Delete",
    meaning:
      "The fictional subject can remove a protected object or record.",
    risk:
      "Deletion can affect availability, evidence, recovery, and business continuity.",
    validation:
      "Confirm retention, recovery, approval, audit logging, and whether deletion is soft, reversible, or permanent.",
  },
  {
    permission: "Approve",
    meaning:
      "The fictional subject can authorize a request, workflow step, publication, payment, access grant, or change.",
    risk:
      "Approval combined with creation or implementation may weaken separation of duties.",
    validation:
      "Confirm approver authority, request ownership, independent review, and evidence preservation.",
  },
  {
    permission: "Export",
    meaning:
      "The fictional subject can move data out of the normal application view into a file, report, or connected destination.",
    risk:
      "Export may increase data exposure and reduce downstream control visibility.",
    validation:
      "Confirm resource sensitivity, destination, purpose, logging, owner approval, and retention.",
  },
  {
    permission: "Configure",
    meaning:
      "The fictional subject can change application, system, policy, integration, or resource settings.",
    risk:
      "Configuration access can affect many users and resources even without full administration.",
    validation:
      "Identify exact settings, change approval, rollback, testing, and monitoring.",
  },
  {
    permission: "Administer",
    meaning:
      "The fictional subject can manage users, roles, permissions, settings, integrations, or protected system functions.",
    risk:
      "Administrative access can create, change, or remove other identities and controls.",
    validation:
      "Require privileged-access controls, temporary elevation, approval, fresh authentication, logging, and post-action review.",
  },
];

const policyInputs = [
  {
    input: "Subject attributes",
    examples:
      "Fictional department, role, job function, project, account type, owner, employment state, or assurance level.",
    risk:
      "Stale or inaccurate subject data can grant access after responsibilities change.",
  },
  {
    input: "Resource attributes",
    examples:
      "Fictional owner, sensitivity, class, project, environment, retention state, location, or data category.",
    risk:
      "Incorrect resource classification can weaken or overrestrict access.",
  },
  {
    input: "Action attributes",
    examples:
      "View, comment, edit, approve, export, configure, administer, or delete.",
    risk:
      "Policies that treat all actions equally may overgrant sensitive capabilities.",
  },
  {
    input: "Device attributes",
    examples:
      "Managed state, compliance, platform, device owner, certificate, browser, or endpoint health.",
    risk:
      "Device attributes can be stale, missing, shared, or misattributed.",
  },
  {
    input: "Session attributes",
    examples:
      "Authentication time, MFA method, session age, risk state, step-up result, or revocation status.",
    risk:
      "An older session can outlive role, device, account, or policy changes.",
  },
  {
    input: "Environmental attributes",
    examples:
      "Fictional time, network zone, source region, application, connection type, emergency state, or maintenance window.",
    risk:
      "Context can change quickly and may be approximate or interpreted incorrectly.",
  },
  {
    input: "Relationship attributes",
    examples:
      "Owner, manager, assigned teacher, project member, resource reviewer, support team, or sponsoring organization.",
    risk:
      "Relationship data can remain after transfers, project completion, or ownership changes.",
  },
  {
    input: "Policy state",
    examples:
      "Policy version, rule order, exception, default behavior, approval, effective date, expiration, or emergency override.",
    risk:
      "Uncontrolled policy changes or conflicting versions can create inconsistent decisions.",
  },
];

const inheritanceScenarios = [
  {
    scenario: "Folder inheritance",
    path:
      "A fictional parent folder grants project-reviewers view access, and child folders inherit the permission.",
    benefit:
      "Consistent access across related resources.",
    risk:
      "A sensitive child folder may unintentionally inherit access that is too broad.",
    review:
      "Identify parent source, inherited entries, child exceptions, owner, and negative test.",
  },
  {
    scenario: "Nested group inheritance",
    path:
      "learning-support is inside application-operators, which receives configuration permission.",
    benefit:
      "Structured group reuse can simplify assignment.",
    risk:
      "A visible support group may silently inherit operational access.",
    review:
      "Trace every group level and calculate effective permissions.",
  },
  {
    scenario: "Role hierarchy",
    path:
      "A fictional senior-reviewer role inherits all permissions from reviewer plus export.",
    benefit:
      "Related roles can share a controlled permission foundation.",
    risk:
      "Inherited permissions can grow as lower roles change.",
    review:
      "Review both the child role and every inherited parent permission.",
  },
  {
    scenario: "Resource ownership",
    path:
      "A fictional project owner can share project resources with additional reviewers.",
    benefit:
      "Supports controlled collaboration.",
    risk:
      "Owner-created shares may remain after the project ends.",
    review:
      "Confirm owner authority, shared identities, duration, and lifecycle.",
  },
  {
    scenario: "Application mapping",
    path:
      "The identity-platform reviewer role maps to editor inside one fictional application.",
    benefit:
      "Central roles can drive application access.",
    risk:
      "Incorrect mapping can make a narrow central role broader in the application.",
    review:
      "Compare central claims, mapping rules, and actual application permissions.",
  },
  {
    scenario: "Exception inheritance",
    path:
      "A fictional network exception applies to a group containing multiple service identities.",
    benefit:
      "A single approved exception can support a defined integration set.",
    risk:
      "New group members may inherit access without separate review.",
    review:
      "Check exception scope, group lifecycle, owner, expiration, and new-member behavior.",
  },
];

const conflictPatterns = [
  {
    conflict: "Explicit allow and explicit deny",
    example:
      "A fictional user receives report-view through a role but a resource-level deny blocks the same report.",
    concern:
      "The final outcome depends on policy precedence and enforcement behavior.",
    response:
      "Preserve all rules, determine precedence, test the exact subject-resource-action combination, and document the intended result.",
  },
  {
    conflict: "Role permission and attribute policy disagree",
    example:
      "A fictional reviewer role allows export, but an attribute policy denies export from unmanaged devices.",
    concern:
      "A role alone does not reveal the final effective access.",
    response:
      "Evaluate the complete context and confirm the enforcement point applies the attribute policy.",
  },
  {
    conflict: "Central removal and local permission remain",
    example:
      "A fictional user loses the central editor role but remains an editor inside the application.",
    concern:
      "Governance records show removal while effective access remains.",
    response:
      "Remove the local grant, refresh sessions, validate denial, and add local access to future reviews.",
  },
  {
    conflict: "Temporary role expires but session claims remain",
    example:
      "A fictional temporary export role ends, but an older application session continues to allow export.",
    concern:
      "Current authorization and session state are misaligned.",
    response:
      "Revoke or refresh the session and validate the new decision.",
  },
  {
    conflict: "Nested group creates duty conflict",
    example:
      "A fictional requester group is nested inside an approver group.",
    concern:
      "One account can create and approve the same sensitive request.",
    response:
      "Separate the memberships, test both workflows, and monitor for recurrence.",
  },
  {
    conflict: "Missing attribute uses unsafe default",
    example:
      "A fictional resource has no sensitivity label, and the policy treats missing values as low sensitivity.",
    concern:
      "Incomplete data produces a permissive decision.",
    response:
      "Use a safe missing-value behavior, correct the attribute source, and test unlabeled resources.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the request",
    detail:
      "Identify the fictional subject, object, action, application, environment, time, owner, and business purpose.",
  },
  {
    step: "2",
    title: "Identify the control model",
    detail:
      "Determine whether the decision uses ownership, labels, roles, rules, attributes, relationships, resource lists, or combined policies.",
  },
  {
    step: "3",
    title: "Trace every permission path",
    detail:
      "Map direct, inherited, group, role, resource, local, temporary, exception, and session-based access.",
  },
  {
    step: "4",
    title: "Calculate effective access",
    detail:
      "Evaluate policy precedence, conditions, missing values, conflicts, default behavior, and enforcement.",
  },
  {
    step: "5",
    title: "Correct narrowly",
    detail:
      "Use owner-approved changes, preserve prior state, prepare rollback, refresh sessions, and communicate impact.",
  },
  {
    step: "6",
    title: "Validate and monitor",
    detail:
      "Test required actions, denied actions, inherited resources, edge cases, policy logs, owner acceptance, and residual risk.",
  },
];


const evidenceMatrix = [
  {
    source: "Identity and directory record",
    supports:
      "The fictional subject, account type, owner, role, group, status, department, project, and lifecycle attributes.",
    limitation:
      "Directory data may be stale or may not include application-local access and resource-level sharing.",
  },
  {
    source: "Role and permission catalog",
    supports:
      "The intended fictional role purpose, actions, resources, owner, conflicting roles, duration, and review schedule.",
    limitation:
      "The deployed role can differ from documentation, and direct exceptions may exist.",
  },
  {
    source: "Policy definition",
    supports:
      "The fictional rule logic, inputs, conditions, precedence, default behavior, version, owner, and effective date.",
    limitation:
      "A documented policy does not prove every enforcement point is using the same version.",
  },
  {
    source: "Resource access list",
    supports:
      "Direct and inherited fictional permissions attached to a file, folder, report, application object, or service.",
    limitation:
      "The list may not show external policy conditions, active sessions, or nested-group expansion.",
  },
  {
    source: "Application decision log",
    supports:
      "The fictional subject, resource, action, session, policy result, enforcement point, decision reason, and time.",
    limitation:
      "The event may show the final decision without fully explaining every underlying access path.",
  },
  {
    source: "Attribute source",
    supports:
      "The fictional department, project, device, sensitivity, owner, relationship, environment, or risk value used by a policy.",
    limitation:
      "Attributes can be delayed, incorrect, missing, ambiguous, or owned by another system.",
  },
  {
    source: "Access request and approval",
    supports:
      "The fictional requester, purpose, resource, action, duration, conditions, approver, and expected outcome.",
    limitation:
      "The implemented permission can differ from the approved request.",
  },
  {
    source: "Validation and owner confirmation",
    supports:
      "Whether required fictional actions work, unrelated actions remain denied, and the business owner accepts the result.",
    limitation:
      "A single successful test may not cover inheritance, edge cases, session state, or future policy changes.",
  },
];

const effectiveAccessExamples = [
  {
    subject: "training-jlee",
    resource: "Attendance dashboard",
    requestedAction: "View",
    directAccess: "None",
    inheritedAccess: "attendance-viewers role allows view",
    policyCondition: "Managed device and active teacher relationship",
    result: "Allow",
    reasoning:
      "The role, device, relationship, and resource conditions all match the approved request.",
  },
  {
    subject: "training-jlee",
    resource: "Attendance dashboard",
    requestedAction: "Manage users",
    directAccess: "None",
    inheritedAccess: "attendance-viewers does not include administration",
    policyCondition: "No privileged role or approval",
    result: "Deny",
    reasoning:
      "Successful authentication and view permission do not authorize user administration.",
  },
  {
    subject: "training-rpatel",
    resource: "Quarterly report",
    requestedAction: "Export",
    directAccess: "report-export directly assigned",
    inheritedAccess: "report-viewers allows view only",
    policyCondition: "Export requires owner approval and managed device",
    result: "Review",
    reasoning:
      "The direct export grant conflicts with the narrower role and lacks matching approval evidence.",
  },
  {
    subject: "svc-report-training",
    resource: "Reporting data API",
    requestedAction: "Read",
    directAccess: "Service role grants read",
    inheritedAccess: "None",
    policyCondition: "Approved workload source and production environment required",
    result: "Allow",
    reasoning:
      "The service identity, source workload, environment, owner, and read scope match the policy.",
  },
  {
    subject: "svc-report-training",
    resource: "Reporting data API",
    requestedAction: "Write",
    directAccess: "None",
    inheritedAccess: "Service role grants read only",
    policyCondition: "No approved write workflow",
    result: "Deny",
    reasoning:
      "The service requires read access only, and no evidence supports write authorization.",
  },
  {
    subject: "project-reviewers",
    resource: "Restricted child folder",
    requestedAction: "View",
    directAccess: "Resource-level deny",
    inheritedAccess: "Parent folder grants view",
    policyCondition: "Child resource sensitivity is restricted",
    result: "Deny",
    reasoning:
      "The child resource requires narrower handling, and the explicit restriction prevents broad inheritance.",
  },
];

const mistakes = [
  "Treating RBAC as the only access-control model and ignoring ownership, attributes, rules, relationships, labels, and resource access lists.",
  "Reviewing a role name without inspecting its exact permissions and resource scope.",
  "Assuming a direct or inherited allow is the final effective access without evaluating policy conditions and explicit denies.",
  "Missing nested groups, role hierarchies, parent-folder inheritance, resource sharing, and application-local permissions.",
  "Treating a successful authentication event as authorization for every resource action.",
  "Using stale department, project, device, relationship, or sensitivity attributes in an access decision.",
  "Allowing missing attributes to default to broad access.",
  "Changing a policy without preserving the previous version, owner approval, test cases, and rollback.",
  "Testing only the expected allow case and skipping denied actions, inheritance boundaries, missing values, expired relationships, and active sessions.",
  "Assuming every enforcement point uses the same policy version.",
  "Removing broad access without validating that the required business workflow remains available.",
  "Publishing real users, groups, roles, permissions, policies, resource names, sessions, logs, screenshots, or internal access architecture.",
];

const quizQuestions = [
  {
    question:
      "What is role-based access control?",
    choices: [
      "A model in which fictional permissions are assigned to roles and identities receive access through role membership.",
      "A model in which every user owns every resource.",
      "A model that removes the need for authentication.",
      "A model that always grants administrator access.",
    ],
    answer: 0,
    explanation:
      "RBAC organizes permissions around defined job or service functions.",
  },
  {
    question:
      "What is attribute-based access control?",
    choices: [
      "A model that evaluates fictional subject, resource, action, and environmental attributes.",
      "A model that uses only passwords.",
      "A model that ignores device and resource context.",
      "A model that requires shared accounts.",
    ],
    answer: 0,
    explanation:
      "ABAC can combine several attributes to make context-aware access decisions.",
  },
  {
    question:
      "What is effective access?",
    choices: [
      "The final fictional access available after direct, inherited, role, group, resource, policy, and context conditions are evaluated.",
      "Only the permissions displayed in a role name.",
      "Only direct permissions.",
      "Any action performed after authentication.",
    ],
    answer: 0,
    explanation:
      "Effective access includes every relevant access path and policy condition.",
  },
  {
    question:
      "Why is permission inheritance risky?",
    choices: [
      "A sensitive child resource may receive broader access from its parent than the owner intended.",
      "Inherited permissions never work.",
      "Inheritance automatically removes all owners.",
      "Inheritance always creates a new password.",
    ],
    answer: 0,
    explanation:
      "Inheritance is useful but must respect resource boundaries and exceptions.",
  },
  {
    question:
      "What should happen when a required policy attribute is missing?",
    choices: [
      "Use a safe default such as deny or review until the attribute is corrected.",
      "Assume the lowest sensitivity and allow access.",
      "Grant administrator access.",
      "Ignore the policy.",
    ],
    answer: 0,
    explanation:
      "Missing-value behavior should not create permissive access by accident.",
  },
  {
    question:
      "Why should an access-control change include a session refresh test?",
    choices: [
      "Existing fictional sessions may continue using older role or policy claims.",
      "Sessions always contain readable passwords.",
      "Policy changes automatically delete every session.",
      "Authorization applies only before authentication.",
    ],
    answer: 0,
    explanation:
      "A technically correct policy change can remain ineffective until sessions refresh or are revoked.",
  },
  {
    question:
      "Which validation plan is strongest?",
    choices: [
      "Test the required allow, unrelated deny, inheritance boundary, missing attribute, expired relationship, session refresh, and enforcement consistency.",
      "Test only one successful view action.",
      "Check only the policy name.",
      "Ask whether the user noticed a change.",
    ],
    answer: 0,
    explanation:
      "Professional validation covers normal, denied, edge, lifecycle, and enforcement cases.",
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
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
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


function AccessControlModelGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Access-Control Models
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Models and Their Defensive Tradeoffs
      </h2>

      <div className="mt-6 grid gap-5">
        {accessControlModels.map((item) => (
          <div
            key={item.abbreviation}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-black text-slate-950">
                {item.abbreviation}
              </span>
              <h3 className="text-xl font-black text-white">{item.model}</h3>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              {item.basis}
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-4">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Fictional example
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.example}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Strength
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.strength}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Risk
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.risk}
                </p>
              </div>

              <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                  Review
                </p>
                <p className="mt-2 text-sm leading-6 text-purple-50">
                  {item.review}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PermissionGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Permission Types
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Review the Exact Action, Not Just the Role Name
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {permissionTypes.map((item) => (
          <div
            key={item.permission}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">
              {item.permission}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>

            <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Risk
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.risk}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Validation
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.validation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PolicyInputGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Policy Inputs
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Inputs That Can Change the Same Access Request
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {policyInputs.map((item) => (
          <div
            key={item.input}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.input}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.examples}
            </p>

            <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Risk
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.risk}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InheritanceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Permission Inheritance
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Six Inheritance Paths That Affect Effective Access
      </h2>

      <div className="mt-6 grid gap-5">
        {inheritanceScenarios.map((item) => (
          <div
            key={item.scenario}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.scenario}</h3>

            <div className="mt-4 grid gap-4 lg:grid-cols-4">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Access path
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.path}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Benefit
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.benefit}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Risk
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.risk}
                </p>
              </div>

              <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                  Review
                </p>
                <p className="mt-2 text-sm leading-6 text-purple-50">
                  {item.review}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ConflictGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Policy Conflicts
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Six Conflicts That Require Evidence and Testing
      </h2>

      <div className="mt-6 grid gap-5">
        {conflictPatterns.map((item) => (
          <div
            key={item.conflict}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">
              {item.conflict}
            </h3>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Fictional example
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.example}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Concern
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.concern}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Response
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.response}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Matrix
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        What Access-Control Evidence Can and Cannot Prove
      </h2>

      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div
            key={item.source}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]"
          >
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                Evidence source
              </p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>

            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Can support
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.supports}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Limitation
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.limitation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EffectiveAccessGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Effective Access
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Calculate the Final Decision from Every Access Path
      </h2>

      <div className="mt-6 grid gap-5">
        {effectiveAccessExamples.map((item) => (
          <div
            key={`${item.subject}-${item.resource}-${item.requestedAction}`}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-200">
                {item.subject}
              </span>
              <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black text-blue-200">
                {item.resource}
              </span>
              <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-200">
                {item.requestedAction}
              </span>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-4">
              <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                  Direct access
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {item.directAccess}
                </p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                  Inherited access
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {item.inheritedAccess}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Policy condition
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.policyCondition}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Result: {item.result}
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.reasoning}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkflowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Review an Access-Control Decision in Six Steps
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflow.map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              {item.step}
            </div>
            <h3 className="mt-4 font-black text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AccessControlModelsAndPermissionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I6
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 4 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I6.4 Access Control Models and Permissions
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders evaluate fictional roles, rules, attributes,
            relationships, ownership, permissions, inheritance, conflicts, and
            enforcement to calculate effective access.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I6: Identity and Access Management"
          lessonTitle="Access Control Models and Permissions"
          lessonNumber={4}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that authentication and authorization are separate decisions.",
            "I will trace direct, inherited, role, group, resource, local, temporary, and policy-based access.",
            "I will compare technical permissions with fictional ownership, purpose, scope, duration, and sensitivity.",
            "I will test expected allows, expected denials, inheritance boundaries, missing attributes, and sessions.",
            "I will use only fictional identities, resources, policies, permissions, logs, owners, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Role Name Does Not Reveal the Final Effective Access"
        >
          <p className="leading-8">
            A fictional reviewer role may allow viewing, while a direct grant
            allows export, a resource deny protects one folder, an attribute
            policy requires a managed device, and an older session still holds
            earlier claims. Defenders calculate the final decision from every
            access path and policy condition.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The account has the reviewer role, so we already know all of
                its permissions.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Trace roles, groups, direct grants, inheritance, resource
                rules, attributes, sessions, precedence, and enforcement.”
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
          title="Access Decisions Depend on Models, Data Quality, and Enforcement"
        >
          <p className="leading-8">
            RBAC, ABAC, DAC, MAC, relationship-based controls, rules, and
            resource permissions solve different problems. Their strength
            depends on accurate owners, attributes, mappings, policy versions,
            inheritance boundaries, session state, and consistent enforcement.
          </p>
        </SectionCard>

        <AccessControlModelGuide />
        <PermissionGuide />
        <PolicyInputGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Calculate Effective Access in Five Questions"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              ["Subject", "Who or what requests access, and which account, role, group, device, and session represent it?"],
              ["Object", "Which exact fictional resource and sensitivity boundary are involved?"],
              ["Action", "Is the request to view, edit, approve, export, configure, delete, or administer?"],
              ["Policy", "Which direct, inherited, role, rule, attribute, relationship, and resource conditions apply?"],
              ["Enforcement", "Which application or service makes and applies the final decision, and which version is active?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <InheritanceGuide />
        <ConflictGuide />
        <EvidenceGuide />
        <EffectiveAccessGuide />
        <WorkflowGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Access-Control and Permission Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Access-Control Policy Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services environment."
          metrics={[
            {
              label: "Policies reviewed",
              value: "18",
              note: "Role, attribute, relationship, resource, rule, and combined policy decisions.",
            },
            {
              label: "Access conflicts",
              value: "7",
              note: "Two inheritance gaps, two stale attributes, one local permission, one session mismatch, and one rule conflict.",
            },
            {
              label: "Validated changes",
              value: "6",
              note: "Each includes owner approval, rollback, session refresh, allow tests, deny tests, and monitoring.",
            },
          ]}
        />

        <FakeAlertCard
          title="Restricted Child Folder Inherits Broad Parent Access"
          severity="High"
          time="11:15 AM"
          source="Fake Access-Control Review Console"
          details="The fictional project-reviewers group is approved to view a main workspace but not its restricted investigation folder. The child folder inherits the parent permission, and an application decision confirms that a reviewer can open it."
          recommendation="Preserve approval, group, parent, child, application, session, and owner evidence; create the approved resource boundary; refresh sessions; validate main-workspace access; verify restricted-folder denial; and monitor for alternate access paths."
        />

        <FakeLogPanel
          title="Fake Permission-Inheritance Timeline"
          logs={[
            "11:00:00 REQUEST subject='project-reviewers' resource='project-workspace' action='view'",
            "11:04:00 APPROVAL main_workspace='allow' restricted_folder='exclude'",
            "11:10:00 PARENT_PERMISSION group='project-reviewers' action='view' inheritance='enabled'",
            "11:12:00 CHILD_FOLDER restriction='missing' inherited_view='true'",
            "11:15:00 AUTHZ resource='restricted-investigation' result='allow'",
            "11:20:00 REVIEW finding='scope_mismatch'",
            "11:25:00 OWNER_DECISION child_folder='explicit_restriction'",
            "11:30:00 CHANGE restricted_inheritance='stopped' deny='applied'",
            "11:31:00 SESSION action='refresh'",
            "11:35:00 TEST resource='main-workspace' result='allow'",
            "11:36:00 TEST resource='restricted-investigation' result='deny'",
            "DAY7 REVIEW business_workflow='confirmed' closure='approved'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Access-Control Conclusion Is Best Supported?"
          evidence={[
            "The fictional owner approves view access to the main project workspace.",
            "The owner explicitly excludes the restricted investigation folder.",
            "The parent workspace grants inherited view access.",
            "The child folder has no separate restriction.",
            "A reviewer successfully opens the restricted folder.",
            "No direct individual permission is present.",
            "After the child restriction and session refresh, the main workspace remains available.",
            "The restricted folder is denied after remediation.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The parent-folder inheritance created access beyond the approved resource scope; a narrow child-resource restriction corrects it while preserving collaboration.",
            "The reviewer is an administrator because the folder opened.",
            "Every inherited permission should be removed from the workspace.",
            "The owner approval permitted all child resources automatically.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports an inheritance-boundary failure, not an authentication problem or a need to remove the approved main-workspace access."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Access-Control Analysis"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
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
          title="Review a Fictional Access-Control Policy Packet"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Effective-Access Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review thirty supplied fictional records covering roles,
                groups, attributes, relationships, resources, direct grants,
                inheritance, local permissions, policy versions, decisions,
                sessions, owners, approvals, and validation results.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Identify each fictional subject, object, action, owner, policy, and enforcement point.</li>
                <li>Classify DAC, MAC, RBAC, rule, attribute, relationship, resource, and combined controls.</li>
                <li>Trace direct, inherited, role, group, local, temporary, exception, and session access.</li>
                <li>Calculate effective access and identify conflicts, missing attributes, and unsafe defaults.</li>
                <li>Propose narrow owner-approved corrections with preserved versions and rollback.</li>
                <li>Test expected allows, expected denials, boundaries, lifecycle, sessions, and enforcement consistency.</li>
                <li>Document monitoring, evidence gaps, residual risk, and closure criteria.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access real accounts,
            change permissions, enter administrative consoles, test live
            resources, or publish real identities, groups, roles, policies,
            resource names, sessions, logs, screenshots, or internal access
            architecture.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Sensitive Child Folder Inherits Parent Access"
          scenario="A fictional project group needs the main workspace but must not view one restricted child folder. The child inherits the parent view permission."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the approval and permission evidence, create the approved child-resource boundary, refresh sessions, test main access, verify child denial, and monitor for alternate paths.",
              outcome:
                "Best defensive choice. The correction protects the restricted resource without breaking approved collaboration.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Remove all workspace access from the project group.",
              outcome:
                "Overbroad. The group still requires the approved main workspace.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the child folder because the permission was inherited.",
              outcome:
                "Unsafe. Inheritance does not override the approved resource boundary.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Missing Sensitivity Attribute Produces an Allow"
          scenario="A fictional export policy denies sensitive-report exports from unmanaged devices, but one unlabeled report is treated as low sensitivity and allowed."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the report, attribute, policy, device, session, and decision evidence; use a safe missing-value behavior; correct the label source; test labeled and unlabeled resources; and review similar decisions.",
              outcome:
                "Best defensive choice. The response fixes both the resource data and the policy’s unsafe default.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume every unlabeled resource is public.",
              outcome:
                "Unsafe. Missing data should not create broad access.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable the entire reporting application permanently.",
              outcome:
                "Disproportionate. A narrow policy and data-quality correction is supported.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Access-Control Models and Permissions Checklist"
          items={[
            "I distinguish DAC, MAC, RBAC, rule-based, attribute-based, relationship-based, resource-level, and policy-based controls.",
            "I identify the fictional subject, object, action, application, environment, owner, purpose, and sensitivity.",
            "I trace direct, inherited, group, role, resource, local, temporary, exception, and session access.",
            "I review subject, resource, action, device, session, environmental, relationship, and policy attributes.",
            "I calculate effective access instead of relying on one role or permission record.",
            "I identify explicit conflicts, unsafe inheritance, stale attributes, local-access gaps, session mismatches, and unsafe defaults.",
            "I preserve policy versions, approvals, source evidence, decision logs, and rollback plans.",
            "I test expected allows, expected denials, inheritance boundaries, missing attributes, expired relationships, session refresh, and enforcement consistency.",
            "I validate required business function, monitoring, owner acceptance, evidence gaps, and residual risk.",
            "I use only fictional evidence and never publish real identities, permissions, policies, sessions, logs, screenshots, or internal access architecture.",
          ]}
        />

        <MiniQuiz
          title="I6.4 Mini Quiz: Access Control Models and Permissions"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Access-Control Policy Review containing at least thirty subject, resource, action, role, group, attribute, relationship, direct-permission, inherited-permission, local-access, policy, session, decision, owner, approval, and validation records. Include model classification, effective-access calculations, conflicts, unsafe inheritance, stale or missing attributes, enforcement gaps, narrow recommendations, rollback, allow tests, deny tests, boundary tests, session refresh, monitoring, residual risk, and closure criteria."
          tips={[
            "Use only fictional identities, groups, roles, resources, policies, attributes, relationships, sessions, owners, and organizations.",
            "Include one inheritance boundary, one conflicting rule, one local-permission gap, one missing-attribute case, and one stale-session case.",
            "Show both required access and unrelated actions that must remain denied.",
            "Do not include real credentials, usernames, account IDs, resource names, policy details, screenshots, or internal access architecture.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Different access-control models use ownership, labels, roles, rules, attributes, relationships, resources, or combined policies.",
            "Effective access is the final result of every direct, inherited, role, group, resource, local, policy, and session condition.",
            "Permission names must be translated into exact actions and resource scope.",
            "Inheritance and missing attributes can create unintended access unless safe boundaries and defaults are tested.",
            "A documented policy is not enough; every enforcement point and active session must apply the approved decision.",
            "Strong remediation preserves evidence, uses narrow changes, validates allowed and denied paths, monitors outcomes, and records residual risk.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I6
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