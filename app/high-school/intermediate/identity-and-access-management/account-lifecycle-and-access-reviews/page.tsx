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
const previousLesson = `${modulePath}/privileged-access-and-administrative-accounts`;
const nextLesson = `${modulePath}/identity-logs-and-access-monitoring`;

const objectives = [
  "Explain the fictional joiner, mover, leaver, temporary-access, inactive-account, suspension, reactivation, and deletion lifecycle.",
  "Evaluate fictional account and access changes using owners, approvals, roles, groups, permissions, sessions, devices, applications, dates, and business purpose.",
  "Distinguish technical removal, session revocation, application-local cleanup, resource-transfer, data-retention, and owner validation.",
  "Identify stale accounts, orphaned permissions, incomplete transfers, missed temporary expirations, weak recertification, and lifecycle evidence gaps.",
  "Create a professional fictional Account Lifecycle and Access Review Report with findings, owners, remediation, validation, monitoring, and residual risk.",
];

const vocabulary = [
  [
    "Joiner",
    "A fictional person, service, or workload entering an organization or environment and receiving approved accounts and access.",
  ],
  [
    "Mover",
    "A fictional identity whose job, project, department, responsibility, device, owner, or service purpose changes.",
  ],
  [
    "Leaver",
    "A fictional identity ending employment, enrollment, contract, project participation, service ownership, or workload use.",
  ],
  [
    "Lifecycle event",
    "A fictional change that should create, modify, suspend, expire, disable, transfer, review, or remove accounts and access.",
  ],
  [
    "Access review",
    "A structured fictional process in which accountable owners decide whether access should be retained, reduced, removed, transferred, or investigated.",
  ],
  [
    "Recertification",
    "A periodic fictional confirmation that an account, role, group, permission, device, application, and resource relationship is still required and correct.",
  ],
  [
    "Dormant account",
    "A fictional account that remains enabled or retained but shows little or no expected activity.",
  ],
  [
    "Orphaned account",
    "A fictional account with no valid active owner, sponsor, workload, manager, or review path.",
  ],
  [
    "Stale access",
    "Fictional access that remains after the approved purpose, role, project, duration, or ownership has changed.",
  ],
  [
    "Suspension",
    "A controlled fictional state that temporarily blocks normal account access while preserving evidence and review options.",
  ],
  [
    "Deprovisioning",
    "The approved fictional process of disabling, removing, transferring, expiring, or revoking accounts, access, sessions, devices, and application relationships.",
  ],
  [
    "Closure criteria",
    "The evidence required to show that the fictional lifecycle change is technically complete, business-validated, monitored, and documented.",
  ],
];

const lifecycleStages = [
  {
    stage: "Request and sponsorship",
    purpose:
      "A fictional manager, owner, project lead, application owner, or service owner documents why the identity needs access.",
    evidence:
      "Identity type, owner, sponsor, job or service purpose, start date, resource scope, required actions, duration, and approval path.",
    commonRisk:
      "Vague requests create broad default access, unclear ownership, and difficult future removal.",
  },
  {
    stage: "Identity and account creation",
    purpose:
      "Approved fictional accounts are created with unique identifiers, correct ownership, required authentication, and initial state.",
    evidence:
      "Account ID, account type, owner, creation time, directory, application, device, factor, and provisioning record.",
    commonRisk:
      "Duplicate accounts, shared identities, wrong account types, or accounts created before approval.",
  },
  {
    stage: "Access assignment",
    purpose:
      "The fictional identity receives exact roles, groups, permissions, resources, devices, applications, and conditions required for the approved purpose.",
    evidence:
      "Role, group, direct permission, resource share, local access, start, expiration, owner, and implementation details.",
    commonRisk:
      "Broad templates, copied access, direct grants, or missing expiration can exceed business need.",
  },
  {
    stage: "Activation and validation",
    purpose:
      "The fictional identity confirms approved sign-in and required access while unrelated or higher-risk actions remain denied.",
    evidence:
      "Authentication, MFA, device, session, application, positive test, negative test, owner confirmation, and issue resolution.",
    commonRisk:
      "The account is marked complete without verifying that required access works or excessive access is denied.",
  },
  {
    stage: "Normal use and monitoring",
    purpose:
      "The fictional account performs expected work while sign-ins, sessions, permissions, changes, and unusual activity are monitored.",
    evidence:
      "Usage records, authentication, application actions, owner reviews, alerts, device state, and support records.",
    commonRisk:
      "Dormant, shared, unexpected, or excessive use can remain unnoticed.",
  },
  {
    stage: "Change or mover event",
    purpose:
      "The fictional identity’s access is updated when role, project, department, manager, device, application, or service responsibility changes.",
    evidence:
      "Old and new role, effective date, owner approval, resource transfer, permissions removed, permissions added, sessions, and validation.",
    commonRisk:
      "New access is added while old access remains, creating privilege accumulation.",
  },
  {
    stage: "Temporary expiration or suspension",
    purpose:
      "The fictional identity or access is restricted when a project ends, an approved duration expires, risk requires review, or a temporary pause is needed.",
    evidence:
      "Expiration, suspension reason, owner, account state, role state, session revocation, application state, and review date.",
    commonRisk:
      "The central account changes, but application-local access or existing sessions continue.",
  },
  {
    stage: "Separation and closure",
    purpose:
      "The fictional identity’s accounts, access, sessions, devices, resources, ownership, and records are safely transferred, disabled, retained, or removed.",
    evidence:
      "Effective time, owner, disablement, session revocation, group removal, local-access cleanup, resource transfer, retention, deletion, and validation.",
    commonRisk:
      "Tickets close before every system, session, permission, resource, and owner relationship is resolved.",
  },
];

const joinerControls = [
  {
    control: "Unique identity and account type",
    strongPractice:
      "Create the correct fictional standard, privileged, service, application, temporary, or emergency identity with named ownership.",
    weakPractice:
      "Reuse a shared or existing account because creation is faster.",
  },
  {
    control: "Approved access baseline",
    strongPractice:
      "Assign only the role, groups, applications, resources, and device conditions needed for the approved starting function.",
    weakPractice:
      "Copy all access from another person without comparing responsibilities.",
  },
  {
    control: "Start and expiration dates",
    strongPractice:
      "Use an approved start date and automatic expiration for temporary identities, projects, and elevated access.",
    weakPractice:
      "Create the account immediately and leave temporary access permanent.",
  },
  {
    control: "Authentication and recovery",
    strongPractice:
      "Register approved fictional factors, recovery ownership, device relationships, and session policies.",
    weakPractice:
      "Use a temporary shared password and never review recovery methods.",
  },
  {
    control: "Resource ownership",
    strongPractice:
      "Document which fictional folders, reports, applications, classes, services, or projects the identity owns or uses.",
    weakPractice:
      "Assign broad access without naming resources or accountable owners.",
  },
  {
    control: "Positive validation",
    strongPractice:
      "Confirm the fictional identity can complete the required sign-in and business workflow.",
    weakPractice:
      "Assume provisioning succeeded because the directory shows the role.",
  },
  {
    control: "Negative validation",
    strongPractice:
      "Verify unrelated, privileged, restricted, or expired actions remain denied.",
    weakPractice:
      "Test only the required page and ignore broader effective access.",
  },
  {
    control: "Review scheduling",
    strongPractice:
      "Set a fictional manager, owner, project, service, and privileged-access review date.",
    weakPractice:
      "Wait for a problem or separation event before reviewing access.",
  },
];

const moverRisks = [
  {
    risk: "Privilege accumulation",
    evidence:
      "A fictional employee receives a new department role but retains all prior department permissions.",
    impact:
      "The account can access resources unrelated to the current responsibility.",
    correction:
      "Compare old and new job needs, remove stale roles, refresh sessions, and validate both required and denied actions.",
  },
  {
    risk: "Manager or owner mismatch",
    evidence:
      "A fictional account’s manager changes, but access reviews still route to the former manager.",
    impact:
      "Recertification decisions may be delayed, incorrect, or completed by someone without current context.",
    correction:
      "Update ownership and review routing, then reissue high-risk access decisions.",
  },
  {
    risk: "Project relationship remains",
    evidence:
      "A fictional user leaves a project but still belongs to its workspace group and resource shares.",
    impact:
      "Project data and collaboration access continue after the business relationship ends.",
    correction:
      "Remove project membership, shares, local permissions, and sessions; transfer owned resources; validate denial.",
  },
  {
    risk: "Privileged role follows normal transfer",
    evidence:
      "A fictional administrator moves into a non-administrative role but keeps standing privileged access.",
    impact:
      "High-impact capability remains without current job need.",
    correction:
      "Remove privileged roles, check administrative sessions and local access, and require a new approved request for future use.",
  },
  {
    risk: "Application-local access missed",
    evidence:
      "The central directory role changes, but a fictional application still lists the account as editor.",
    impact:
      "Governance records show reduced access while effective access remains broad.",
    correction:
      "Update the local application permission, refresh sessions, and add the application to future mover reviews.",
  },
  {
    risk: "Device relationship remains stale",
    evidence:
      "A fictional user changes roles and devices, but the previous managed device remains associated with remembered sessions.",
    impact:
      "Older device and session trust may outlast the current ownership and role.",
    correction:
      "Review device ownership, remembered sessions, certificates, and application access during the mover event.",
  },
  {
    risk: "Resource ownership not transferred",
    evidence:
      "A fictional project lead changes teams but remains owner of reports and shared folders.",
    impact:
      "Approvals, sharing, and lifecycle decisions route to the wrong person.",
    correction:
      "Transfer ownership to the approved successor and validate permissions and notifications.",
  },
  {
    risk: "Change date and access date disagree",
    evidence:
      "A fictional role change becomes effective on Monday, but old access remains until Friday.",
    impact:
      "The account has an unnecessary overlap window.",
    correction:
      "Align technical changes with the effective date and document any approved overlap exception.",
  },
];

const leaverControls = [
  {
    control: "Effective-time coordination",
    question:
      "When should the fictional account, role, device, session, and application access change?",
    evidence:
      "Approved separation time, owner, manager, identity team, application owners, and timezone.",
  },
  {
    control: "Account disablement",
    question:
      "Which fictional directories, applications, services, local accounts, and privileged identities must be disabled or expired?",
    evidence:
      "Account inventory, status changes, timestamps, owner, and error results.",
  },
  {
    control: "Session revocation",
    question:
      "Which fictional browser, application, mobile, administrative, service, or remembered sessions remain active?",
    evidence:
      "Session inventory, revocation state, application confirmation, and post-change sign-in attempts.",
  },
  {
    control: "Role and group removal",
    question:
      "Which fictional direct, inherited, nested, temporary, privileged, resource, and application-local access paths must end?",
    evidence:
      "Before-and-after effective-access records, group changes, role changes, shares, and local permissions.",
  },
  {
    control: "Device and factor lifecycle",
    question:
      "Which fictional devices, certificates, authenticators, keys, recovery methods, or registered factors require transfer or revocation?",
    evidence:
      "Device inventory, factor inventory, owner, return state, revocation, and replacement record.",
  },
  {
    control: "Resource and data transfer",
    question:
      "Who becomes the fictional owner of reports, folders, applications, services, approvals, and project records?",
    evidence:
      "Successor owner, transfer time, resource list, access validation, and communication.",
  },
  {
    control: "Retention and deletion",
    question:
      "Which fictional account records, logs, files, messages, or service data must be retained, archived, transferred, or removed?",
    evidence:
      "Approved policy, owner, retention period, legal or business requirement, and deletion validation.",
  },
  {
    control: "Business closure",
    question:
      "Which fictional manager, application owner, resource owner, and security reviewer confirm the separation is complete?",
    evidence:
      "Technical validation, denied-access tests, owner confirmation, exceptions, monitoring, and residual risk.",
  },
];

const evidenceMatrix = [
  {
    source: "Human-resources or sponsor event",
    supports:
      "The fictional join, transfer, leave, project, contract, or ownership event and its effective date.",
    limitation:
      "The event may not describe every application, role, resource, device, or session affected.",
  },
  {
    source: "Directory account record",
    supports:
      "The fictional account identifier, owner, manager, department, status, groups, roles, creation, disablement, and expiration.",
    limitation:
      "Application-local permissions, external shares, local accounts, and active sessions may remain elsewhere.",
  },
  {
    source: "Access request and approval",
    supports:
      "The fictional purpose, resource, action, role, duration, requester, sponsor, approver, and expected outcome.",
    limitation:
      "The implemented access can differ from the approved request.",
  },
  {
    source: "Application and resource inventory",
    supports:
      "The fictional applications, reports, folders, services, devices, resources, owners, and local permissions connected to the identity.",
    limitation:
      "Inventories may be incomplete or stale and may not show current session state.",
  },
  {
    source: "Authentication and session records",
    supports:
      "The fictional sign-ins, factors, devices, applications, active sessions, revocation, and post-change access attempts.",
    limitation:
      "No recent sign-in does not prove the account has no access or no active token.",
  },
  {
    source: "Change and deprovisioning records",
    supports:
      "The fictional account, role, group, permission, device, session, factor, ownership, and resource changes performed.",
    limitation:
      "A closed ticket does not prove every target system applied the change successfully.",
  },
  {
    source: "Access-review decision",
    supports:
      "The fictional owner’s retain, reduce, remove, transfer, suspend, or investigate decision and rationale.",
    limitation:
      "The owner may lack understandable permission details or complete technical evidence.",
  },
  {
    source: "Validation and monitoring",
    supports:
      "The fictional required access, denied access, session cleanup, resource transfer, application state, owner confirmation, and residual risk.",
    limitation:
      "One successful test may miss delayed synchronization, alternate access paths, and future reactivation.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Identify the lifecycle event",
    detail:
      "Determine whether the fictional identity is joining, moving, leaving, expiring, suspending, returning, or changing ownership.",
  },
  {
    step: "2",
    title: "Inventory the identity footprint",
    detail:
      "List accounts, roles, groups, applications, resources, devices, factors, sessions, ownership, shares, and local access.",
  },
  {
    step: "3",
    title: "Compare approved and current state",
    detail:
      "Match purpose, owner, job or service function, permissions, duration, effective date, and review evidence.",
  },
  {
    step: "4",
    title: "Decide and remediate",
    detail:
      "Retain, reduce, remove, transfer, suspend, expire, investigate, or document a temporary exception.",
  },
  {
    step: "5",
    title: "Validate every system",
    detail:
      "Check required access, denied access, sessions, factors, devices, application-local permissions, resources, and ownership.",
  },
  {
    step: "6",
    title: "Close and monitor",
    detail:
      "Record owners, evidence gaps, exceptions, due dates, residual risk, monitoring, and closure criteria.",
  },
];


const accessReviewFailures = [
  {
    failure: "Rubber-stamp approval",
    evidence:
      "A fictional owner approves every account in a large review within seconds without opening permission details.",
    concern:
      "The decision may not reflect current purpose, resource sensitivity, inherited access, or role conflicts.",
    correction:
      "Provide understandable permission summaries, require rationale for high-risk access, and reissue the affected decisions.",
  },
  {
    failure: "Unknown owner",
    evidence:
      "A fictional service account and two application roles have no current accountable owner.",
    concern:
      "No one can reliably confirm purpose, dependencies, rotation, review, or removal.",
    correction:
      "Assign an investigation owner, restrict risk where safe, identify dependencies, and establish a removal or transfer deadline.",
  },
  {
    failure: "Review covers only central roles",
    evidence:
      "The fictional review excludes application-local editor access, folder shares, and nested groups.",
    concern:
      "The owner can approve an incomplete picture while effective access remains broader.",
    correction:
      "Expand the review to direct, inherited, local, resource, session, service, and exception paths.",
  },
  {
    failure: "Temporary access lacks expiration",
    evidence:
      "A fictional project role is marked temporary but has no technical end date.",
    concern:
      "The access can remain indefinitely after the project ends.",
    correction:
      "Add an owner-approved expiration, automatic removal, session cleanup, and post-expiration validation.",
  },
  {
    failure: "Leaver ticket closes early",
    evidence:
      "The fictional central account is disabled, but one application account and two active sessions remain.",
    concern:
      "The identity can still access protected resources after the separation event.",
    correction:
      "Reopen the workflow, remove local access, revoke sessions, test denial, and review similar applications.",
  },
  {
    failure: "Mover adds without removing",
    evidence:
      "A fictional user receives a new department role while old department groups remain.",
    concern:
      "Privilege accumulates across job changes.",
    correction:
      "Use an old-state versus new-state comparison and remove access that no longer matches the role.",
  },
  {
    failure: "Dormant account treated as harmless",
    evidence:
      "A fictional enabled account has no expected activity for six months but retains report-export access.",
    concern:
      "Unused access remains available without a current operational reason.",
    correction:
      "Confirm ownership and need, suspend or disable through approval, review sessions and factors, and validate dependencies.",
  },
  {
    failure: "Resource ownership remains behind",
    evidence:
      "A fictional leaver’s account is disabled but still owns shared reports and approval workflows.",
    concern:
      "Business processes, sharing decisions, and future access reviews route to an inactive identity.",
    correction:
      "Transfer ownership to an approved successor and validate resource access, notifications, and approvals.",
  },
];

const lifecycleValidationTests = [
  {
    test: "Required access succeeds",
    purpose:
      "Confirm the fictional joiner or mover can complete the approved sign-in and business workflow.",
    example:
      "A newly assigned reviewer can view and comment on the required project report.",
    success:
      "The correct account, role, application, resource, and session support the expected workflow.",
  },
  {
    test: "Excess access remains denied",
    purpose:
      "Confirm the fictional identity cannot perform unrelated, previous-role, privileged, or restricted actions.",
    example:
      "The reviewer cannot export administrator data or open the former department workspace.",
    success:
      "Every denied action produces the expected policy result and no alternate path works.",
  },
  {
    test: "Temporary expiration works",
    purpose:
      "Confirm a fictional temporary role, account, share, or exception ends at the approved time.",
    example:
      "A project-editor role expires after fourteen days.",
    success:
      "The role is removed, sessions refresh, and the protected action is denied.",
  },
  {
    test: "Session cleanup works",
    purpose:
      "Confirm lifecycle changes affect existing fictional sessions and remembered devices.",
    example:
      "A disabled leaver account cannot continue through a previously active application session.",
    success:
      "Identity and application sessions are revoked or refreshed across the relevant systems.",
  },
  {
    test: "Application-local cleanup works",
    purpose:
      "Confirm fictional local roles, shares, editors, owners, and service permissions match the central lifecycle decision.",
    example:
      "A former editor is removed inside the learning application after the central role changes.",
    success:
      "The application denies the old action and records the current owner and role.",
  },
  {
    test: "Ownership transfer works",
    purpose:
      "Confirm fictional reports, folders, services, approval queues, and groups have an active successor owner.",
    example:
      "A departing project lead’s reports move to the approved new project owner.",
    success:
      "The successor can manage the resources and the inactive identity no longer owns them.",
  },
  {
    test: "Dormant-account control works",
    purpose:
      "Confirm a fictional dormant or orphaned account can be suspended or disabled without breaking an approved dependency.",
    example:
      "An unused service account is disabled during a controlled observation window.",
    success:
      "No approved service fails, and the account remains unable to authenticate or access resources.",
  },
  {
    test: "Review closure is complete",
    purpose:
      "Confirm every fictional retain, reduce, remove, transfer, suspend, expire, investigate, or exception decision has evidence and an owner.",
    example:
      "The quarterly access review has no unresolved high-risk item without a due date and accountable owner.",
    success:
      "Technical state, business validation, monitoring, exceptions, and residual risk are documented.",
  },
];

const mistakes = [
  "Treating account creation as complete before required and denied access are validated.",
  "Copying another fictional user’s entire access package without comparing responsibilities.",
  "Adding a new mover role without removing old groups, direct permissions, shares, and local application access.",
  "Disabling a central leaver account without revoking sessions, factors, devices, local accounts, and application access.",
  "Closing a lifecycle ticket before transferring owned resources, approval queues, services, and shared folders.",
  "Assuming no recent sign-in means an account has no access or no active session.",
  "Keeping orphaned accounts because no one knows whether they are still needed.",
  "Allowing temporary roles, accounts, shares, and exceptions to exist without technical expiration.",
  "Recertifying unclear role names without showing exact actions, resources, inheritance, and risk.",
  "Letting the requester or technical administrator approve every access-review decision without accountable resource ownership.",
  "Removing access without positive testing of the required new workflow.",
  "Publishing real names, usernames, managers, owners, groups, permissions, sessions, devices, resource names, screenshots, or internal lifecycle architecture.",
];

const quizQuestions = [
  {
    question:
      "What is a mover event?",
    choices: [
      "A fictional identity’s job, project, department, responsibility, owner, device, or service purpose changes.",
      "A fictional password is entered incorrectly.",
      "A temporary role expires automatically.",
      "A firewall rule changes.",
    ],
    answer: 0,
    explanation:
      "Mover events require comparing the old approved access state with the new required state.",
  },
  {
    question:
      "What is privilege accumulation?",
    choices: [
      "New access is added while old access remains after responsibilities change.",
      "A temporary role expires on time.",
      "A resource owner approves a narrow share.",
      "A session is revoked.",
    ],
    answer: 0,
    explanation:
      "Privilege accumulation commonly occurs when mover workflows add but do not remove access.",
  },
  {
    question:
      "What makes an account orphaned?",
    choices: [
      "It has no valid active owner, sponsor, workload, manager, or review path.",
      "It has a named owner and current purpose.",
      "It uses MFA.",
      "It is reviewed every quarter.",
    ],
    answer: 0,
    explanation:
      "Ownership and purpose are required for safe maintenance, review, and removal.",
  },
  {
    question:
      "Why must leaver workflows include session revocation?",
    choices: [
      "Existing fictional application or browser sessions may continue after the central account changes.",
      "Sessions always contain readable passwords.",
      "Disabling an account creates administrator access.",
      "Session revocation replaces resource ownership transfer.",
    ],
    answer: 0,
    explanation:
      "Account state and session state can differ across identity providers and applications.",
  },
  {
    question:
      "What is the strongest access-review decision for incomplete ownership evidence?",
    choices: [
      "Investigate with an accountable owner, temporary risk controls, due date, and decision criteria.",
      "Retain the access forever.",
      "Approve it because the account exists.",
      "Delete all related resources immediately.",
    ],
    answer: 0,
    explanation:
      "An evidence-incomplete decision should not be disguised as approval or removal without dependency review.",
  },
  {
    question:
      "Which mover validation plan is strongest?",
    choices: [
      "Confirm required new access, deny old access, refresh sessions, remove local permissions, transfer resources, and monitor.",
      "Check only whether the new dashboard opens.",
      "Keep both old and new roles for convenience.",
      "Close the ticket after adding the new group.",
    ],
    answer: 0,
    explanation:
      "Mover validation covers both the new required state and complete removal of the old state.",
  },
  {
    question:
      "What should an access-review owner receive?",
    choices: [
      "Understandable fictional account, role, permission, resource, inheritance, usage, duration, and risk evidence.",
      "Only a list of unclear role IDs.",
      "Only the account display name.",
      "No information about application-local access.",
    ],
    answer: 0,
    explanation:
      "Reviewers need enough technical and business context to make a meaningful decision.",
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


function LifecycleStageGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Identity Lifecycle
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Stages from Sponsorship to Closure
      </h2>

      <div className="mt-6 grid gap-5">
        {lifecycleStages.map((item) => (
          <div
            key={item.stage}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.stage}</h3>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Purpose
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.purpose}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Required evidence
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.evidence}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Common risk
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.commonRisk}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function JoinerControlGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Joiner Controls
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Controls for Safe Initial Access
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {joinerControls.map((item) => (
          <div
            key={item.control}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.control}</h3>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Strong practice
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.strongPractice}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Weak practice
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.weakPractice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MoverRiskGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Mover Risks
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Ways Access Becomes Misaligned During Change
      </h2>

      <div className="mt-6 grid gap-5">
        {moverRisks.map((item) => (
          <div
            key={item.risk}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.risk}</h3>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Evidence
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.evidence}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Impact
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.impact}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Correction
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.correction}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LeaverControlGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Leaver and Separation Controls
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Questions Before Declaring Closure
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {leaverControls.map((item) => (
          <div
            key={item.control}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.control}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
            </p>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.evidence}
              </p>
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
        What Lifecycle Evidence Can and Cannot Prove
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

function ReviewFailureGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Access Review Failures
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Problems That Make Recertification Unreliable
      </h2>

      <div className="mt-6 grid gap-5">
        {accessReviewFailures.map((item) => (
          <div
            key={item.failure}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.failure}</h3>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Evidence
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.evidence}
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
                  Correction
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.correction}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ValidationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Lifecycle Validation
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Tests for Joiner, Mover, and Leaver Changes
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {lifecycleValidationTests.map((item) => (
          <div
            key={item.test}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.test}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Fictional example
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.example}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Successful result
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.success}
              </p>
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
        Review a Lifecycle Event in Six Steps
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

export default function AccountLifecycleAndAccessReviewsPage() {
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
              Lesson 6 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I6.6 Account Lifecycle and Access Reviews
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders manage fictional joiners, movers, leavers,
            temporary access, dormant accounts, ownership changes,
            recertification, session cleanup, resource transfer, and
            evidence-based closure.
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
          lessonTitle="Account Lifecycle and Access Reviews"
          lessonNumber={6}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that lifecycle work includes accounts, access, sessions, devices, factors, applications, resources, ownership, and retention.",
            "I will compare the fictional approved state with the current technical state.",
            "I will review joiner, mover, leaver, temporary, dormant, suspended, service, and ownership-change events.",
            "I will validate both required access and removed access after every lifecycle change.",
            "I will use only fictional identities, accounts, systems, owners, resources, logs, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Closed Ticket Does Not Prove Access Is Gone"
        >
          <p className="leading-8">
            A fictional central account can be disabled while active sessions,
            application-local roles, shared folders, registered devices,
            recovery factors, service permissions, and resource ownership
            remain. Defenders close lifecycle work only after every relevant
            system and owner confirms the approved final state.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The directory account is disabled, so the leaver process is
                complete.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Verify sessions, factors, devices, groups, roles, local
                permissions, resource ownership, retention, denied access, and
                accountable owner closure.”
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
          title="Identity Risk Often Appears During Change"
        >
          <p className="leading-8">
            Access can become unsafe when new roles are added without removing
            old roles, temporary access lacks expiration, service accounts lose
            owners, inactive identities remain enabled, local permissions are
            missed, or resources remain owned by departed identities. Strong
            lifecycle controls prevent access from drifting away from current
            responsibility.
          </p>
        </SectionCard>

        <LifecycleStageGuide />
        <JoinerControlGuide />
        <MoverRiskGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Compare the Approved State with the Current State"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              [
                "Identity",
                "Which fictional person, service, application, device, sponsor, manager, or owner is changing?",
              ],
              [
                "Access",
                "Which roles, groups, direct permissions, shares, local access, privileged roles, and exceptions exist?",
              ],
              [
                "Lifecycle",
                "What join, move, leave, suspension, expiration, return, or ownership event occurred, and when is it effective?",
              ],
              [
                "Dependencies",
                "Which applications, sessions, devices, factors, resources, services, approvals, and records depend on the identity?",
              ],
              [
                "Closure",
                "Which technical tests, owner confirmations, monitoring results, exceptions, and residual risks prove completion?",
              ],
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

        <LeaverControlGuide />
        <EvidenceGuide />
        <ReviewFailureGuide />
        <ValidationGuide />
        <WorkflowGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Account Lifecycle and Access Review Terms
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
          title="Fake Account Lifecycle and Access Review Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services identity environment."
          metrics={[
            {
              label: "Lifecycle events",
              value: "44",
              note: "Twelve joiners, ten movers, eight leavers, six temporary expirations, four suspensions, two service-owner changes, and two reactivations.",
            },
            {
              label: "Review findings",
              value: "13",
              note: "Privilege accumulation, stale project access, local-role gaps, dormant accounts, orphaned service identities, session gaps, and ownership-transfer issues.",
            },
            {
              label: "Validated closures",
              value: "37",
              note: "Each includes required-access tests, denied-access tests, session review, local-access review, owner confirmation, and residual risk.",
            },
          ]}
        />

        <FakeAlertCard
          title="Mover Receives New Analytics Access but Retains Former Department Permissions"
          severity="High"
          time="10:05 AM"
          source="Fake Identity Lifecycle Review Console"
          details="A fictional employee transfers from Student Services to Learning Analytics. The new analytics role is assigned, but the old central group and a local case-editor permission remain. Application evidence confirms access to both environments."
          recommendation="Preserve the mover event, approvals, group, local-role, session, resource, and owner evidence; remove former-role access; refresh sessions; transfer owned resources; validate analytics access; verify old editing and export actions are denied; and monitor for alternate paths."
        />

        <FakeLogPanel
          title="Fake Mover Access-Remediation Timeline"
          logs={[
            "DAY0 09:00 MOVER user='training-mchen' old_team='student-services' new_team='learning-analytics'",
            "DAY0 09:10 APPROVAL add_role='analytics-reviewers'",
            "DAY0 09:20 OLD_OWNER remove_role='student-services-editors' remove_export='true'",
            "DAY0 10:00 DIRECTORY analytics_reviewers='added' student_services_editors='still_present'",
            "DAY0 10:05 APPLICATION old_case_editor='allow' new_analytics_view='allow'",
            "DAY0 10:15 REVIEW finding='privilege_accumulation'",
            "DAY0 10:25 OWNER_DECISION remove_old_access='approved'",
            "DAY0 10:30 CHANGE central_old_role='removed' local_case_editor='removed'",
            "DAY0 10:31 SESSION action='revoke_and_refresh'",
            "DAY0 10:35 TEST analytics_view='allow' dashboard_comment='allow'",
            "DAY0 10:36 TEST old_case_edit='deny' student_export='deny'",
            "DAY0 11:00 OWNERSHIP old_reports='transferred'",
            "DAY7 MONITORING alternate_old_access='none'",
            "DAY30 RECERTIFICATION closure='approved'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Lifecycle Conclusion Is Best Supported?"
          evidence={[
            "The fictional employee’s transfer becomes effective on Monday.",
            "The new manager approves analytics-view and dashboard-comment.",
            "The old owner confirms that case-editor and student-record-export should end.",
            "The new analytics role is added.",
            "The former central group and local application editor permission remain.",
            "Application evidence confirms both old and new access.",
            "After remediation and session refresh, analytics access succeeds.",
            "Old case editing and export are denied, and owned reports transfer to a successor.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The mover process created privilege accumulation by adding new access without removing old central and local access; the corrected workflow preserves the new role and removes the former role.",
            "The employee should keep both roles because both applications opened.",
            "The account should be deleted even though the employee remains active.",
            "The new manager’s approval automatically authorizes all old department access.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports a mover-governance gap, not a need to remove the active identity or retain unnecessary former-role access."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Lifecycle Governance"
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
          title="Review a Fictional Joiner-Mover-Leaver Packet"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Identity Lifecycle Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review thirty-four supplied fictional records involving
                joiners, movers, leavers, temporary accounts, dormant
                identities, service accounts, groups, roles, local
                permissions, sessions, devices, factors, resources, owners,
                approvals, retention, and validation.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Identify each fictional lifecycle event, effective date, sponsor, manager, service owner, and resource owner.</li>
                <li>Inventory accounts, roles, groups, permissions, applications, sessions, devices, factors, resources, shares, and ownership.</li>
                <li>Compare approved purpose and duration with current technical access.</li>
                <li>Classify retain, reduce, remove, transfer, suspend, expire, investigate, and exception decisions.</li>
                <li>Find privilege accumulation, stale access, dormant accounts, orphaned identities, local-access gaps, and incomplete ownership transfer.</li>
                <li>Propose narrow owner-approved remediation with preserved evidence, rollback, communication, and due dates.</li>
                <li>Validate required access, denied access, sessions, local permissions, resource transfer, monitoring, residual risk, and closure.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access real accounts,
            request credentials, change roles, disable users, revoke sessions,
            inspect private records, enter administrative consoles, or publish
            real names, usernames, managers, owners, devices, sessions,
            resources, screenshots, or internal lifecycle architecture.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Mover Keeps Old Department Access"
          scenario="A fictional employee transfers to a new team. The new role is assigned, but the old central group, local editor permission, and active application session remain."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the transfer, approval, role, local-access, session, owner, and resource evidence; remove former-role access; refresh sessions; transfer owned resources; validate new access; verify old actions are denied; and monitor.",
              outcome:
                "Best defensive choice. The response corrects privilege accumulation while preserving the approved new workflow.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep both roles because the employee may help the old team.",
              outcome:
                "Unsafe. Any continued support requires a separate narrow and time-limited approval.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the employee’s entire identity immediately.",
              outcome:
                "Disproportionate. The identity remains active and needs the new role.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Leaver Account Is Disabled but an Application Session Remains"
          scenario="A fictional separation workflow disables the central account at the approved time. One application-local account and an older browser session still provide report access."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve account, application, session, resource, owner, and separation evidence; disable the local account; revoke the session; transfer owned reports; validate denial; review similar applications; and document residual risk.",
              outcome:
                "Best defensive choice. Closure covers central identity, local access, sessions, resources, and owner validation.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close the ticket because the central directory account is disabled.",
              outcome:
                "Unsafe. Effective access remains through the application and session.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete all reports owned by the leaver without reviewing retention or successor ownership.",
              outcome:
                "Unsafe. Resource transfer and retention require accountable review.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Account Lifecycle and Access Review Checklist"
          items={[
            "I identify fictional joiner, mover, leaver, temporary, dormant, suspended, reactivated, service-owner, and resource-owner events.",
            "I inventory accounts, roles, groups, direct permissions, local access, shares, applications, sessions, devices, factors, resources, and owners.",
            "I compare the approved purpose, scope, duration, effective date, and ownership with the current technical state.",
            "I identify privilege accumulation, stale access, orphaned identities, dormant accounts, missed expiration, local-access gaps, and ownership-transfer issues.",
            "I use retain, reduce, remove, transfer, suspend, expire, investigate, and exception decisions with clear evidence.",
            "I require automatic expiration for fictional temporary access and validate removal afterward.",
            "I refresh or revoke sessions after account, role, permission, factor, device, or ownership changes.",
            "I validate required access, denied access, application-local cleanup, resource transfer, monitoring, and owner acceptance.",
            "I document accountable owners, due dates, evidence gaps, exceptions, residual risk, and closure criteria.",
            "I use only fictional evidence and never publish real identities, managers, owners, permissions, sessions, devices, resources, screenshots, or internal lifecycle architecture.",
          ]}
        />

        <MiniQuiz
          title="I6.6 Mini Quiz: Account Lifecycle and Access Reviews"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Account Lifecycle and Access Review Report containing at least thirty-four joiner, mover, leaver, temporary-access, dormant-account, service-owner, account, role, group, permission, application, session, device, factor, resource, ownership, approval, retention, and validation records. Include approved-state versus current-state comparisons, privilege accumulation, stale access, orphaned identities, application-local gaps, resource transfer, retain/reduce/remove/transfer/suspend/expire/investigate/exception decisions, narrow remediation, rollback, positive tests, negative tests, monitoring, residual risk, and closure criteria."
          tips={[
            "Use only fictional identities, accounts, managers, sponsors, owners, roles, groups, applications, resources, sessions, devices, factors, and organizations.",
            "Include one joiner validation issue, one mover privilege-accumulation case, one leaver session gap, one orphaned service account, and one missed temporary expiration.",
            "Show both required access that must remain available and old or unrelated access that must be denied.",
            "Do not include real names, emails, credentials, account IDs, device IDs, session values, resource names, screenshots, or internal lifecycle architecture.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Identity lifecycle covers accounts, access, sessions, devices, factors, applications, resources, ownership, retention, and validation.",
            "Joiner workflows should provide the correct access baseline rather than copying another identity’s entire access package.",
            "Mover workflows must remove old access as carefully as they add new access.",
            "Leaver closure is incomplete until central and local accounts, sessions, permissions, devices, factors, resources, and owners are resolved.",
            "Access reviews require understandable evidence and accountable retain, reduce, remove, transfer, suspend, expire, investigate, or exception decisions.",
            "Strong closure combines technical validation, business-owner confirmation, monitoring, evidence gaps, due dates, and residual risk.",
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