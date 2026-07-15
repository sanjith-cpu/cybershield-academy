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
const previousLesson = `${modulePath}/identity-authentication-and-authorization`;
const nextLesson = `${modulePath}/passwords-mfa-and-authentication-factors`;

const objectives = [
  "Explain how fictional user accounts, service accounts, groups, roles, permissions, entitlements, ownership, and business purpose connect.",
  "Apply least privilege, need to know, separation of duties, time limits, approval, and review to fictional access decisions.",
  "Identify excessive, stale, inherited, duplicate, temporary, orphaned, unowned, and conflicting access.",
  "Evaluate fictional role design using job function, resource sensitivity, action level, environment, duration, and accountable ownership.",
  "Create a professional fictional Access Matrix and Least-Privilege Review with evidence, findings, owners, remediation, validation, and residual risk.",
];

const vocabulary = [
  ["User account", "A fictional account representing a person who signs in and performs approved actions."],
  ["Service account", "A fictional non-human account used by an application, scheduled task, integration, or workload."],
  ["Shared account", "A fictional account used by more than one person, reducing individual accountability unless tightly governed."],
  ["Group", "A collection of fictional accounts used to assign access consistently through membership."],
  ["Role", "A named collection of fictional permissions aligned to a job or service function."],
  ["Permission", "A specific allowed fictional action such as view, edit, approve, export, configure, or administer."],
  ["Entitlement", "A broader term for access granted through a role, group, license, permission, resource share, or application assignment."],
  ["Least privilege", "Giving a fictional identity only the access required for the approved purpose, scope, and duration."],
  ["Need to know", "Limiting fictional information access to identities with a justified business or learning need."],
  ["Separation of duties", "Dividing sensitive fictional actions so one identity does not control every critical step."],
  ["Orphaned access", "Fictional access that remains without a valid owner, active identity, current purpose, or review path."],
  ["Access recertification", "A periodic owner review confirming whether fictional access is still required, correct, and appropriately scoped."],
];

const accountTypes = [
  {
    type: "Standard user account",
    purpose:
      "Represents one fictional person performing normal learning, teaching, support, reporting, or business tasks.",
    controls:
      "Unique ownership, MFA when required, role-based access, normal device policy, session limits, and periodic review.",
    risk:
      "Old roles, direct permissions, duplicate accounts, shared use, or access that outlives a job change.",
  },
  {
    type: "Privileged user account",
    purpose:
      "Represents one fictional administrator performing elevated configuration, account, security, or system actions.",
    controls:
      "Separate identity, fresh authentication, temporary elevation, approval, logging, restricted device, and detailed review.",
    risk:
      "Standing privilege, daily use for normal tasks, excessive scope, weak monitoring, or shared credentials.",
  },
  {
    type: "Service account",
    purpose:
      "Represents a fictional application, scheduled job, integration, automation, or service-to-service workflow.",
    controls:
      "Named owner, exact workload, restricted source, minimal permissions, identity lifecycle, logging, and expiration review.",
    risk:
      "Unknown owner, nonexpiring secret, interactive use, excessive permissions, or use from unexpected systems.",
  },
  {
    type: "Application identity",
    purpose:
      "Represents a fictional application or workload using an approved platform identity, certificate, token, or managed identity.",
    controls:
      "Exact application owner, audience, environment, permission scope, source workload, rotation, and monitoring.",
    risk:
      "Production and test reuse, broad API access, stale ownership, or unexpected workload source.",
  },
  {
    type: "Temporary account",
    purpose:
      "Provides fictional short-term access for a project, event, substitute, vendor, intern, or training activity.",
    controls:
      "Sponsor, purpose, start and end time, restricted role, approved device, monitoring, and automatic expiration.",
    risk:
      "No expiration, vague sponsor, reused identity, broad access, or failure to disable after work ends.",
  },
  {
    type: "Emergency account",
    purpose:
      "Supports fictional recovery when normal identity services or administrative paths are unavailable.",
    controls:
      "Strict storage, limited use, named owner, strong monitoring, periodic testing, post-use review, and immediate rotation.",
    risk:
      "Routine use, unmonitored access, unknown ownership, stale credentials, or excessive standing permissions.",
  },
  {
    type: "Shared operational account",
    purpose:
      "Supports a fictional legacy workflow that cannot yet use unique identities.",
    controls:
      "Documented exception, restricted device, limited permission, session logging, named users, expiration, and replacement plan.",
    risk:
      "No individual accountability, password sharing, uncontrolled membership, and permanent exception status.",
  },
  {
    type: "Disabled or dormant account",
    purpose:
      "Represents a fictional identity no longer active but retained temporarily for records, recovery, or lifecycle handling.",
    controls:
      "Disabled state, session revocation, group removal, ownership record, retention reason, review date, and deletion plan.",
    risk:
      "Active sessions, application-local access, forgotten API permissions, or accidental reactivation.",
  },
];

const leastPrivilegePrinciples = [
  {
    principle: "Minimum required action",
    question:
      "Does the fictional identity need view, edit, approve, export, configure, administer, or a smaller action set?",
    strong:
      "Grant the narrowest action required for the approved task.",
    weak:
      "Grant administrator because it includes the needed view permission.",
  },
  {
    principle: "Minimum resource scope",
    question:
      "Which exact fictional file, class, report, application, database, folder, environment, or service is required?",
    strong:
      "Limit access to the specific owned resource or defined collection.",
    weak:
      "Grant access to an entire department or environment for one report.",
  },
  {
    principle: "Minimum duration",
    question:
      "How long does the fictional access need to remain active?",
    strong:
      "Use automatic expiration for temporary access and review standing access periodically.",
    weak:
      "Leave project access permanent because the user may need it later.",
  },
  {
    principle: "Correct account type",
    question:
      "Should the work use a standard user, privileged identity, service account, application identity, or emergency account?",
    strong:
      "Separate normal work, privileged work, and non-human workloads.",
    weak:
      "Use one powerful account for every task.",
  },
  {
    principle: "Named ownership",
    question:
      "Who owns the fictional account, role, group, resource, and approval?",
    strong:
      "Assign accountable owners and review dates to every access path.",
    weak:
      "Keep access because nobody knows who should decide.",
  },
  {
    principle: "Separation of duties",
    question:
      "Should one fictional identity request, approve, implement, and verify the same sensitive action?",
    strong:
      "Separate critical steps and document emergency exceptions.",
    weak:
      "Allow one account to create, approve, and conceal its own changes.",
  },
  {
    principle: "Context and conditions",
    question:
      "Does access require a managed device, approved location, fresh MFA, specific application, or protected network?",
    strong:
      "Use context only when it is reliable, relevant, and validated.",
    weak:
      "Trust any device or session once a role exists.",
  },
  {
    principle: "Review and removal",
    question:
      "How will the fictional access be recertified, changed, suspended, expired, or removed?",
    strong:
      "Define lifecycle events, owners, evidence, technical validation, and closure.",
    weak:
      "Treat access grants as permanent configuration.",
  },
];


const accessPaths = [
  {
    path: "Direct permission",
    example:
      "training-user-17 receives report-edit directly.",
    strength:
      "The exact grant is visible and easy to identify.",
    risk:
      "Direct access can bypass standard roles and become difficult to recertify.",
  },
  {
    path: "Group membership",
    example:
      "training-user-17 joins report-reviewers, which grants report-view.",
    strength:
      "Consistent access can be governed through one group.",
    risk:
      "Nested or stale membership can hide the true path.",
  },
  {
    path: "Role assignment",
    example:
      "The teacher role grants class-view and comment permissions.",
    strength:
      "Access aligns with a defined job function.",
    risk:
      "Roles can become too broad or remain after responsibilities change.",
  },
  {
    path: "Nested group",
    example:
      "learning-support is a member of application-operators, creating inherited access.",
    strength:
      "Large environments can reuse structured membership.",
    risk:
      "Reviewers may miss indirect access several levels deep.",
  },
  {
    path: "Resource sharing",
    example:
      "A fictional report owner shares one document with one reviewer.",
    strength:
      "The owner can grant narrow resource-level access.",
    risk:
      "Shares can remain active after the business need ends.",
  },
  {
    path: "Temporary role",
    example:
      "A fictional administrator activates support-admin for forty-five minutes.",
    strength:
      "Reduces standing privilege.",
    risk:
      "Weak expiration, approval, or session revocation can extend access.",
  },
  {
    path: "Application-local permission",
    example:
      "A learning application grants editor access outside the central directory.",
    strength:
      "Supports detailed application-specific actions.",
    risk:
      "Central access reviews may not see the local grant.",
  },
  {
    path: "Exception or allow list",
    example:
      "A fictional service identity receives a limited exception for one integration.",
    strength:
      "Supports a necessary workflow when standard roles are insufficient.",
    risk:
      "Exceptions can become permanent, broad, unowned, or untested.",
  },
];

const roleDesignQuestions = [
  {
    question: "What job or service function does the role represent?",
    evidence:
      "Fictional position description, application purpose, owner, workflow, and resource responsibility.",
    failure:
      "The role exists because users requested broad access over time.",
  },
  {
    question: "Which exact actions are required?",
    evidence:
      "View, edit, approve, export, assign, configure, administer, or other specific permissions.",
    failure:
      "The role includes every permission because it is easier to manage.",
  },
  {
    question: "Which resources and environments are in scope?",
    evidence:
      "Named reports, classes, applications, folders, systems, test environments, or production resources.",
    failure:
      "The role applies to all resources in every environment.",
  },
  {
    question: "Which permissions should never be combined?",
    evidence:
      "Request, approval, payment, configuration, audit, role assignment, or verification responsibilities.",
    failure:
      "One role controls the entire sensitive workflow.",
  },
  {
    question: "Who owns and approves the role?",
    evidence:
      "Business owner, technical owner, security reviewer, recertification schedule, and escalation path.",
    failure:
      "The role has no active owner.",
  },
  {
    question: "Is access standing or temporary?",
    evidence:
      "Normal job need, activation conditions, start, expiration, session limits, and emergency procedures.",
    failure:
      "Temporary project access becomes permanent.",
  },
  {
    question: "How will role use be monitored?",
    evidence:
      "Assignments, activations, sensitive actions, denials, unusual use, owner review, and alert routing.",
    failure:
      "The role is reviewed only after a problem occurs.",
  },
  {
    question: "How will the role be tested and changed?",
    evidence:
      "Positive and negative access tests, business validation, change approval, rollback, and version history.",
    failure:
      "Permissions change without preserving the prior role or checking user workflows.",
  },
];

const evidenceMatrix = [
  {
    source: "Account inventory",
    supports:
      "Fictional account type, identifier, owner, status, creation, expiration, manager, service purpose, and lifecycle state.",
    limitation:
      "Inventory may not include application-local access or active sessions.",
  },
  {
    source: "Group membership",
    supports:
      "Direct and nested fictional group relationships, change time, requester, approver, and membership state.",
    limitation:
      "Membership does not prove current business need or all permissions granted by the group.",
  },
  {
    source: "Role catalog",
    supports:
      "Role purpose, owner, permissions, resource scope, conflicting roles, review date, and intended users.",
    limitation:
      "The deployed role can differ from documentation.",
  },
  {
    source: "Application permission record",
    supports:
      "The fictional local role, resource, action, direct grant, share, owner, and application-specific access path.",
    limitation:
      "Central identity tools may not automatically collect every local permission.",
  },
  {
    source: "Access request and approval",
    supports:
      "Requester, purpose, scope, duration, resource owner, approver, conditions, and expected outcome.",
    limitation:
      "The implemented access may be broader, narrower, delayed, or different from the request.",
  },
  {
    source: "Authentication and session logs",
    supports:
      "The fictional account, device, application, MFA, session, sign-in result, source, and time of use.",
    limitation:
      "Usage does not automatically prove appropriate authorization or continuing business need.",
  },
  {
    source: "Change and lifecycle records",
    supports:
      "Joiner, mover, leaver, transfer, temporary assignment, disablement, expiration, and removal actions.",
    limitation:
      "The ticket may close before every technical access path and active session are removed.",
  },
  {
    source: "Owner recertification",
    supports:
      "The fictional owner’s decision to retain, reduce, remove, transfer, or investigate access.",
    limitation:
      "Owner approval can be weak if the reviewer lacks understandable permission details or current evidence.",
  },
];

const reviewFindings = [
  {
    finding: "Excessive direct permission",
    evidence:
      "A fictional teacher has report-admin directly even though the approved role requires report-view only.",
    risk:
      "The account can configure and export beyond the approved learning need.",
    correction:
      "Remove the direct grant, confirm role-based view access remains, run positive and negative tests, and document owner approval.",
  },
  {
    finding: "Nested-group inheritance",
    evidence:
      "learning-support is nested inside application-operators, indirectly granting restart and configuration permissions.",
    risk:
      "Reviewers may approve the visible group without understanding the inherited operational access.",
    correction:
      "Document the full path, separate support viewing from operator actions, and recertify both groups.",
  },
  {
    finding: "Stale temporary role",
    evidence:
      "A fictional project role remains active three weeks after its scheduled expiration.",
    risk:
      "The account retains unnecessary edit and export access.",
    correction:
      "Expire the role, revoke related sessions, verify required work is complete, and review other temporary assignments.",
  },
  {
    finding: "Orphaned service account",
    evidence:
      "svc-report-old has application-read permission but no active owner or current workload record.",
    risk:
      "The account may remain usable without accountable maintenance or review.",
    correction:
      "Identify dependencies, disable through approved change control, validate reports, and remove after the retention period.",
  },
  {
    finding: "Separation-of-duties conflict",
    evidence:
      "One fictional finance-training account can create and approve the same reimbursement request.",
    risk:
      "One identity controls both creation and approval of a sensitive transaction.",
    correction:
      "Separate requester and approver permissions, test the workflow, and document emergency exception handling.",
  },
  {
    finding: "Application-local access gap",
    evidence:
      "A former editor was removed from the central role but still has editor permission inside the fictional learning application.",
    risk:
      "Central recertification incorrectly shows that access ended.",
    correction:
      "Remove the local permission, refresh the session, validate denial, and add the application to future reviews.",
  },
  {
    finding: "Shared operational account",
    evidence:
      "Three fictional staff members use one legacy display account with edit permission.",
    risk:
      "Individual actions cannot be attributed reliably.",
    correction:
      "Restrict the account, identify named users, reduce permission, improve session logging, and create a replacement plan.",
  },
  {
    finding: "Missing required access",
    evidence:
      "A new fictional reviewer has no report-view role despite an approved request.",
    risk:
      "The authorized workflow cannot be completed, encouraging unsafe workarounds.",
    correction:
      "Implement the exact approved role, validate viewing, confirm editing remains denied, and close the request with owner confirmation.",
  },
];

const separationExamples = [
  {
    workflow: "Access request",
    split:
      "The fictional requester describes the need; the resource owner approves; an administrator implements; another reviewer validates.",
    reason:
      "No one identity controls request, approval, implementation, and verification.",
  },
  {
    workflow: "Financial reimbursement",
    split:
      "One fictional user creates the request and a different authorized user approves it.",
    reason:
      "The creator cannot approve the same transaction.",
  },
  {
    workflow: "Role design",
    split:
      "The application owner defines required actions, identity governance reviews scope, and security validates conflicts.",
    reason:
      "Technical convenience does not become the only role-design decision.",
  },
  {
    workflow: "Privileged change",
    split:
      "One fictional administrator performs the approved change while another reviewer verifies the result and logs.",
    reason:
      "The same account does not make and independently approve its own evidence.",
  },
  {
    workflow: "Emergency access",
    split:
      "The emergency user performs the recovery, a separate owner reviews the use, and the identity team rotates the credential.",
    reason:
      "Urgent access still receives post-use accountability.",
  },
  {
    workflow: "Access recertification",
    split:
      "The account manager confirms employment need, the resource owner confirms resource access, and the technical owner removes rejected access.",
    reason:
      "Each reviewer answers a question they are qualified to judge.",
  },
];

const accessMatrixRows = [
  {
    identity: "training-jlee",
    accountType: "Standard user",
    role: "attendance-viewers",
    resources: "Attendance dashboard",
    actions: "View",
    duration: "7 days",
    owner: "Attendance Owner",
    decision: "Retain until expiration",
  },
  {
    identity: "training-rpatel",
    accountType: "Standard user",
    role: "report-admin direct",
    resources: "Reporting platform",
    actions: "View, edit, export, configure",
    duration: "Standing",
    owner: "Reporting Owner",
    decision: "Reduce to report-view",
  },
  {
    identity: "svc-report-training",
    accountType: "Service account",
    role: "report-data-reader",
    resources: "Reporting data service",
    actions: "Read",
    duration: "Standing with quarterly review",
    owner: "Reporting Application Team",
    decision: "Retain with monitoring",
  },
  {
    identity: "svc-report-old",
    accountType: "Service account",
    role: "legacy-report-reader",
    resources: "Old report service",
    actions: "Read",
    duration: "Unknown",
    owner: "None active",
    decision: "Investigate and disable",
  },
  {
    identity: "finance-training",
    accountType: "Standard user",
    role: "reimbursement-full",
    resources: "Reimbursement workflow",
    actions: "Create and approve",
    duration: "Standing",
    owner: "Finance Process Owner",
    decision: "Separate duties",
  },
  {
    identity: "legacy-display",
    accountType: "Shared account",
    role: "display-editor",
    resources: "Operations display",
    actions: "View and edit",
    duration: "Exception",
    owner: "Operations Team",
    decision: "Restrict and replace",
  },
];

const workflow = [
  {
    step: "1",
    title: "Inventory identities and accounts",
    detail:
      "List the fictional user, privileged, service, application, temporary, emergency, shared, disabled, and dormant accounts in scope.",
  },
  {
    step: "2",
    title: "Map every access path",
    detail:
      "Trace direct permissions, groups, nested groups, roles, resource sharing, temporary elevation, local permissions, and exceptions.",
  },
  {
    step: "3",
    title: "Confirm business need",
    detail:
      "Identify owner, purpose, resource, action, sensitivity, environment, duration, approval, and expected workflow.",
  },
  {
    step: "4",
    title: "Evaluate least privilege",
    detail:
      "Find excessive scope, conflicting permissions, stale roles, orphaned access, missing expiration, and weak separation of duties.",
  },
  {
    step: "5",
    title: "Remediate safely",
    detail:
      "Use narrow owner-approved changes with preserved evidence, rollback, user communication, and positive and negative tests.",
  },
  {
    step: "6",
    title: "Validate and recertify",
    detail:
      "Confirm required work still functions, removed access is denied, sessions refresh, monitoring works, and residual risk is recorded.",
  },
];


const timeline = [
  {
    time: "08:00:00",
    source: "Access request",
    event:
      "Fictional reporting analyst requests report-view for the quarterly review.",
    meaning:
      "Defines the approved business purpose, resource, action, owner, and duration.",
  },
  {
    time: "08:04:00",
    source: "Resource owner",
    event:
      "Reporting owner approves view access for thirty days.",
    meaning:
      "Confirms the intended authorization scope.",
  },
  {
    time: "08:10:00",
    source: "Directory",
    event:
      "Administrator adds training-rpatel to report-admin instead of report-viewers.",
    meaning:
      "The implemented role exceeds the approved request.",
  },
  {
    time: "08:12:00",
    source: "Application",
    event:
      "The account can view, edit, export, and configure reporting settings.",
    meaning:
      "Confirms the technical effect of the excessive role.",
  },
  {
    time: "08:20:00",
    source: "Access review",
    event:
      "Reviewer compares the request, role catalog, group membership, and application permissions.",
    meaning:
      "Independent evidence identifies the least-privilege mismatch.",
  },
  {
    time: "08:25:00",
    source: "Owner decision",
    event:
      "Reporting owner approves reduction from report-admin to report-view.",
    meaning:
      "Provides accountable remediation approval.",
  },
  {
    time: "08:30:00",
    source: "Change",
    event:
      "Administrator removes report-admin and assigns report-viewers.",
    meaning:
      "Implements the narrow correction.",
  },
  {
    time: "08:31:00",
    source: "Session control",
    event:
      "Existing fictional application sessions are revoked and refreshed.",
    meaning:
      "Prevents the older session from retaining excessive claims.",
  },
  {
    time: "08:35:00",
    source: "Positive validation",
    event:
      "The account successfully views the approved quarterly report.",
    meaning:
      "Confirms the required business function remains available.",
  },
  {
    time: "08:36:00",
    source: "Negative validation",
    event:
      "The account is denied report configuration and export administration.",
    meaning:
      "Confirms excessive actions were removed.",
  },
  {
    time: "Day 30",
    source: "Lifecycle",
    event:
      "Temporary report-view membership expires automatically.",
    meaning:
      "Aligns the technical state with the approved duration.",
  },
  {
    time: "Day 31",
    source: "Owner review",
    event:
      "Owner confirms access ended and no application-local permission remains.",
    meaning:
      "Completes technical and business validation.",
  },
];

const mistakes = [
  "Assuming every account belongs to a person and ignoring service, application, shared, emergency, and dormant identities.",
  "Granting a broad role because it contains one permission the user needs.",
  "Reviewing only direct permissions while missing groups, nested groups, resource sharing, temporary roles, and application-local access.",
  "Treating role membership as proof of current business need.",
  "Leaving temporary access active without automatic expiration and session revocation.",
  "Allowing one fictional identity to request, approve, implement, and verify the same sensitive action.",
  "Keeping orphaned accounts because the team is unsure whether they are still used.",
  "Using shared accounts without a documented exception, named users, restricted scope, monitoring, and replacement plan.",
  "Removing access without validating that the required business workflow still functions.",
  "Closing an access ticket before checking active sessions and application-local permissions.",
  "Recertifying access from unclear role names or incomplete permission descriptions.",
  "Publishing real usernames, account IDs, group memberships, permissions, owners, session details, screenshots, or internal access architecture.",
];

const quizQuestions = [
  {
    question:
      "What is least privilege?",
    choices: [
      "Giving a fictional identity only the access required for the approved purpose, scope, and duration.",
      "Giving every user administrator access to reduce support requests.",
      "Using one shared account for a department.",
      "Keeping temporary access permanently.",
    ],
    answer: 0,
    explanation:
      "Least privilege limits actions, resources, duration, context, and account type to the minimum required.",
  },
  {
    question:
      "Why is a direct permission often harder to govern than role-based access?",
    choices: [
      "It can accumulate outside standard role review and become difficult to recertify.",
      "It never grants access.",
      "It automatically expires.",
      "It always requires MFA.",
    ],
    answer: 0,
    explanation:
      "Direct grants are easy to overlook when reviewers expect access to come from standard roles or groups.",
  },
  {
    question:
      "What is an orphaned service account?",
    choices: [
      "A fictional service account with no valid owner, current workload, or review path.",
      "A service account with one named owner.",
      "A temporary user account with an expiration date.",
      "A standard account using MFA.",
    ],
    answer: 0,
    explanation:
      "Without ownership and purpose, maintenance, rotation, permission review, and safe removal become unreliable.",
  },
  {
    question:
      "Which access design best supports separation of duties?",
    choices: [
      "One user creates and approves the same reimbursement request.",
      "One fictional user creates the request and a different authorized user approves it.",
      "One shared administrator performs and verifies every change.",
      "Every user receives all workflow permissions.",
    ],
    answer: 1,
    explanation:
      "Sensitive steps should be divided so one identity does not control the complete process.",
  },
  {
    question:
      "What is the strongest response to excessive report-admin access?",
    choices: [
      "Remove all reporting access immediately without checking business need.",
      "Compare the approved request with the implemented role, reduce access to the exact required permission, refresh sessions, and run positive and negative tests.",
      "Keep the role because the user has not changed settings.",
      "Create a second administrator account.",
    ],
    answer: 1,
    explanation:
      "The correction should preserve required work while removing actions beyond the approved scope.",
  },
  {
    question:
      "Why should an access review include application-local permissions?",
    choices: [
      "Central directory and role records may not show access stored inside the application.",
      "Application permissions are always temporary.",
      "Local permissions cannot grant sensitive access.",
      "Central roles automatically remove every local grant.",
    ],
    answer: 0,
    explanation:
      "A central review can incorrectly show access removed while a local editor, owner, or administrator permission remains.",
  },
  {
    question:
      "What should happen after a temporary role expires?",
    choices: [
      "Nothing, because the expiration date is enough.",
      "Verify membership removal, refresh or revoke sessions, test denial, confirm business completion, and document residual risk.",
      "Convert it to standing access.",
      "Delete all evidence.",
    ],
    answer: 1,
    explanation:
      "Lifecycle validation confirms the technical and application states actually match the approved expiration.",
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

function AccountTypeGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Account Types
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Account Types with Different Control Needs
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {accountTypes.map((item) => (
          <div key={item.type} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="text-lg font-black text-cyan-100">{item.type}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.purpose}</p>
            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Expected controls</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.controls}</p>
            </div>
            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Common risk</p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.risk}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LeastPrivilegeGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Least-Privilege Principles
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Questions for Every Access Grant
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {leastPrivilegePrinciples.map((item) => (
          <div key={item.principle} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="font-black text-cyan-100">{item.principle}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.question}</p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Strong practice</p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">{item.strong}</p>
              </div>
              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Weak practice</p>
                <p className="mt-2 text-sm leading-6 text-red-50">{item.weak}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AccessPathGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Access Paths
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Ways Permissions Can Reach an Account
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {accessPaths.map((item) => (
          <div key={item.path} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="font-black text-cyan-100">{item.path}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.example}</p>
            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Strength</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.strength}</p>
            </div>
            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Governance risk</p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.risk}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function RoleDesignGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Role Design</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Eight Questions for a Defensible Role</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {roleDesignQuestions.map((item) => (
          <div key={item.question} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="font-black text-cyan-100">{item.question}</h3>
            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Evidence</p>
              <p className="mt-2 text-sm leading-6 text-blue-50">{item.evidence}</p>
            </div>
            <div className="mt-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Design failure</p>
              <p className="mt-2 text-sm leading-6 text-red-50">{item.failure}</p>
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Evidence Matrix</p>
      <h2 className="mt-2 text-2xl font-bold text-white">What Access Evidence Can and Cannot Prove</h2>
      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div key={item.source} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Evidence source</p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>
            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Can support</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.supports}</p>
            </div>
            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Limitation</p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.limitation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FindingGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Access Review Findings</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Eight Common Least-Privilege Findings</h2>
      <div className="mt-6 grid gap-5">
        {reviewFindings.map((item) => (
          <div key={item.finding} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="text-xl font-black text-white">{item.finding}</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Evidence</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">{item.evidence}</p>
              </div>
              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Risk</p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">{item.risk}</p>
              </div>
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Correction</p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">{item.correction}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SeparationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Separation of Duties</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Six Workflows That Benefit from Split Responsibility</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {separationExamples.map((item) => (
          <div key={item.workflow} className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5">
            <h3 className="font-black text-cyan-100">{item.workflow}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.split}</p>
            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Why it matters</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.reason}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MatrixGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Access Matrix</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Read Ownership, Scope, Duration, and Decision Together</h2>
      <div className="mt-6 grid gap-4">
        {accessMatrixRows.map((item) => (
          <div key={item.identity} className="grid gap-3 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Identity</p>
              <p className="mt-2 font-mono font-black text-cyan-200">{item.identity}</p>
              <p className="mt-1 text-sm text-slate-400">{item.accountType}</p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Role and resources</p>
              <p className="mt-2 text-sm font-bold text-white">{item.role}</p>
              <p className="mt-1 text-sm text-slate-300">{item.resources}</p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Actions and lifecycle</p>
              <p className="mt-2 text-sm text-slate-300">{item.actions}</p>
              <p className="mt-1 text-sm text-slate-400">{item.duration} · {item.owner}</p>
            </div>
            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Review decision</p>
              <p className="mt-2 text-sm font-bold text-yellow-50">{item.decision}</p>
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Defensive Workflow</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Complete a Least-Privilege Review in Six Steps</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflow.map((item) => (
          <div key={item.step} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">{item.step}</div>
            <h3 className="mt-4 font-black text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TimelineGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Remediation Timeline</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Reduce Excessive Access Without Breaking Required Work</h2>
      <div className="mt-6 grid gap-3">
        {timeline.map((item) => (
          <div key={`${item.time}-${item.source}`} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.2fr_0.35fr_1fr_1fr]">
            <p className="font-mono text-sm font-black text-cyan-300">{item.time}</p>
            <p className="text-sm font-black text-blue-200">{item.source}</p>
            <p className="text-sm font-semibold text-white">{item.event}</p>
            <p className="text-sm leading-6 text-slate-300">{item.meaning}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


export default function AccountsRolesAndLeastPrivilegePage() {
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
              Lesson 2 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I6.2 Accounts, Roles, and Least Privilege
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders map fictional accounts, groups, roles,
            permissions, ownership, duration, and business need to find
            excessive, stale, inherited, unowned, conflicting, and missing
            access.
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
          lessonTitle="Accounts, Roles, and Least Privilege"
          lessonNumber={2}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that accounts, groups, roles, permissions, and entitlements are related but not identical.",
            "I will review direct, inherited, nested, temporary, shared, service, and application-local access.",
            "I will compare technical access with fictional business purpose, owner approval, resource scope, action level, and duration.",
            "I will validate both required access and removed access after a change.",
            "I will use only fictional users, accounts, groups, roles, permissions, applications, resources, owners, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Most Powerful Role Is Rarely the Correct Shortcut"
        >
          <p className="leading-8">
            A fictional user may need to view one report, but a broad
            administrator role also allows editing, exporting, role assignment,
            and configuration. Least privilege does not mean denying required
            work. It means granting the exact actions, resources, conditions,
            and duration needed while preserving accountability and safe
            removal.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “Give the user administrator because it includes the permission
                they need.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Identify the exact resource, action, owner, purpose, duration,
                access path, conflicting duties, and validation plan.”
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
          title="Access Can Be Correct Technically and Still Be Wrong for the Business Need"
        >
          <p className="leading-8">
            A valid role or group membership shows that access exists. It does
            not prove the identity still needs the access, the role is designed
            correctly, the owner approved the exact scope, the duration is
            appropriate, or the application removed older local permissions.
            Strong review compares technical paths with current purpose and
            ownership.
          </p>
        </SectionCard>

        <AccountTypeGuide />
        <LeastPrivilegeGuide />
        <AccessPathGuide />
        <RoleDesignGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Review the Complete Access Path"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              ["Account", "Which fictional person, service, application, device, shared workflow, or emergency function is represented?"],
              ["Path", "Does access come from a direct grant, group, nested group, role, share, local permission, temporary role, or exception?"],
              ["Scope", "Which resources and actions are available, and are any permissions broader than the approved need?"],
              ["Lifecycle", "Who owns the access, when was it granted, when is it reviewed, and when should it expire or change?"],
              ["Validation", "Does required work still succeed while removed or unrelated actions are denied after the correction?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5">
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <EvidenceGuide />
        <MatrixGuide />
        <FindingGuide />
        <SeparationGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Accounts, Roles, and Least-Privilege Terms
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Accounts, Roles, and Least-Privilege Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services access-review environment."
          metrics={[
            {
              label: "Accounts reviewed",
              value: "36",
              note: "Twenty-six standard users, three privileged identities, four service accounts, one shared account, and two dormant accounts.",
            },
            {
              label: "Access findings",
              value: "11",
              note: "Three excessive permissions, two stale temporary roles, two local-access gaps, one orphaned service account, one shared account, one duty conflict, and one missing grant.",
            },
            {
              label: "Validated corrections",
              value: "8",
              note: "Every correction includes owner approval, session refresh, positive testing, negative testing, monitoring, and residual-risk documentation.",
            },
          ]}
        />

        <FakeAlertCard
          title="Approved Report Viewer Receives Report Administrator"
          severity="High"
          time="08:12 AM"
          source="Fake Identity Governance Review Console"
          details="A fictional access request approves report-view for thirty days, but the account is assigned report-admin. Application evidence confirms view, edit, export, and configuration capabilities. The account has not used the extra permissions, but the technical access exceeds the approved business need."
          recommendation="Preserve the request, role catalog, group membership, application permissions, session, and owner evidence; reduce access to report-view; refresh sessions; validate report viewing; verify edit, export administration, and configuration are denied; and confirm automatic expiration."
        />

        <FakeLogPanel
          title="Fake Least-Privilege Remediation Timeline"
          logs={[
            "08:00:00 ACCESS_REQUEST user='training-rpatel' resource='quarterly-report' action='view' duration='30d'",
            "08:04:00 OWNER_APPROVAL role='report-view' approved='true'",
            "08:10:00 DIRECTORY user='training-rpatel' assigned_role='report-admin'",
            "08:12:00 APPLICATION permissions='view,edit,export,configure'",
            "08:20:00 REVIEW mismatch='approved_view_vs_admin' finding='excessive_access'",
            "08:25:00 OWNER_DECISION remove='report-admin' add='report-viewers'",
            "08:30:00 CHANGE excessive_role_removed='true' required_role_added='true'",
            "08:31:00 SESSION action='revoke_and_refresh'",
            "08:35:00 TEST action='view_report' result='allow'",
            "08:36:00 TEST action='configure_reports' result='deny'",
            "DAY30 LIFECYCLE temporary_membership='expired'",
            "DAY31 OWNER_REVIEW local_permissions='none' closure='approved'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Least-Privilege Decision Is Best Supported?"
          evidence={[
            "The fictional access request approves report-view for thirty days.",
            "The resource owner confirms that editing, export administration, and configuration are not required.",
            "The account is assigned report-admin instead of report-view.",
            "The application confirms the broader actions are technically available.",
            "No evidence shows that the extra permissions were used.",
            "The prior role and access records are preserved.",
            "After reduction, report viewing succeeds.",
            "After reduction, report configuration is denied.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The account has excessive access even though the extra permissions were not used; reduce it to the approved role and validate both required and denied actions.",
            "Keep administrator because no harmful action occurred.",
            "Remove every reporting permission without testing the required workflow.",
            "Convert the account into a shared administrator account.",
          ]}
          bestAnswer={0}
          explanation="Least privilege evaluates what an account can do, not only what it has already done. The narrow correction preserves the approved workflow and removes unnecessary capability."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Access Governance"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Build a Fictional Least-Privilege Access Matrix"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Access Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review thirty supplied fictional records involving standard,
                privileged, service, temporary, emergency, shared, and dormant
                accounts; direct permissions; groups; nested groups; roles;
                resource sharing; local application access; requests; approvals;
                sessions; lifecycle records; and owner decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Inventory every fictional account type and accountable owner.</li>
                <li>Trace direct, group, nested, role, share, temporary, local, and exception access paths.</li>
                <li>Record resource, action, environment, duration, approval, and business purpose.</li>
                <li>Identify excessive, stale, inherited, orphaned, shared, conflicting, missing, and unowned access.</li>
                <li>Propose narrow owner-approved corrections with preserved evidence and rollback.</li>
                <li>Run positive and negative access tests and refresh affected sessions.</li>
                <li>Document monitoring, recertification, residual risk, and closure criteria.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access real accounts,
            request credentials, change groups or roles, create privileged
            users, test live permissions, enter administrative consoles, or
            publish real usernames, account IDs, owners, memberships,
            permissions, sessions, screenshots, or internal access architecture.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Project Role Remains Active After the Project Ends"
          scenario="A fictional project-editor role was approved for two weeks. Three weeks after the expiration date, the account still has edit and export access through the role and an active application session."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the request, role, session, owner, and lifecycle evidence; expire the role; revoke and refresh sessions; validate required normal access; verify edit and export are denied; and review similar temporary assignments.",
              outcome:
                "Best defensive choice. The response restores the approved duration and checks for related lifecycle gaps.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the role because the user may need it again.",
              outcome:
                "Unsafe. Future need requires a new approved request rather than permanent stale access.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the user’s entire account without reviewing normal job access.",
              outcome:
                "Disproportionate. The evidence supports removing the expired project role.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Service Account Has No Active Owner"
          scenario="A fictional service account retains read access to an old reporting service, but no current application team claims ownership and the workload is not listed in current inventory."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve account, application, network, permission, usage, and change evidence; identify dependencies; assign an investigation owner; disable through approved change control; validate reports and services; and remove after the retention period.",
              outcome:
                "Best defensive choice. Orphaned access is investigated and removed without blindly breaking a dependency.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the account permanently because ownership is unknown.",
              outcome:
                "Unsafe. Missing ownership is a reason for controlled investigation, not permanent access.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Immediately delete the account without checking dependencies.",
              outcome:
                "Risky. A controlled disable-and-validate process is safer.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Accounts, Roles, and Least-Privilege Checklist"
          items={[
            "I inventory fictional standard, privileged, service, application, temporary, emergency, shared, disabled, and dormant accounts.",
            "I identify the accountable account, role, group, resource, application, and approval owners.",
            "I trace direct permissions, groups, nested groups, roles, resource sharing, temporary elevation, application-local access, and exceptions.",
            "I compare technical access with exact business purpose, resource, action, environment, duration, and sensitivity.",
            "I identify excessive, stale, inherited, duplicate, orphaned, unowned, conflicting, shared, and missing access.",
            "I check whether sensitive fictional workflows require separation of request, approval, implementation, and verification.",
            "I use narrow owner-approved corrections and preserve the original access state for traceability and rollback.",
            "I refresh or revoke affected sessions after role, group, account, or permission changes.",
            "I validate required actions positively and removed or unrelated actions negatively.",
            "I use only fictional evidence and never request or publish real credentials, accounts, groups, roles, permissions, sessions, owners, screenshots, or internal access architecture.",
          ]}
        />

        <MiniQuiz
          title="I6.2 Mini Quiz: Accounts, Roles, and Least Privilege"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Access Matrix and Least-Privilege Review containing at least thirty account, group, nested-group, role, permission, resource-share, application-local, request, approval, session, lifecycle, owner, and validation records. Include account types, owners, business purpose, resources, actions, duration, access paths, excessive access, stale access, orphaned service accounts, shared accounts, duty conflicts, missing access, proposed corrections, rollback, positive tests, negative tests, session refresh, monitoring, recertification, residual risk, and closure criteria."
          tips={[
            "Use only fictional users, accounts, groups, roles, permissions, applications, resources, owners, requests, and organizations.",
            "Include one excessive direct grant, one nested-group inheritance issue, one stale temporary role, one orphaned service account, and one separation-of-duties conflict.",
            "Show both required access and access that must remain denied after remediation.",
            "Do not include real passwords, MFA codes, tokens, usernames, email addresses, account IDs, screenshots, or internal access architecture.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Least privilege limits fictional access by action, resource, duration, context, account type, and business need.",
            "Access can arrive through direct permissions, groups, nested groups, roles, resource sharing, temporary elevation, local permissions, and exceptions.",
            "Role membership proves a technical access path, not current business need or correct scope.",
            "Service, shared, temporary, privileged, emergency, and dormant accounts require different ownership and lifecycle controls.",
            "Separation of duties prevents one identity from controlling every critical step of a sensitive workflow.",
            "Safe remediation preserves evidence, uses narrow changes, refreshes sessions, validates required and denied actions, and records residual risk.",
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