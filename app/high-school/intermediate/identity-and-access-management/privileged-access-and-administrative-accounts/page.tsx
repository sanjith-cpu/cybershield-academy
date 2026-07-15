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
const previousLesson = `${modulePath}/access-control-models-and-permissions`;
const nextLesson = `${modulePath}/account-lifecycle-and-access-reviews`;

const objectives = [
  "Explain privileged access, administrative accounts, standing privilege, temporary elevation, emergency access, and separation of administrative duties.",
  "Evaluate fictional privileged-access requests using owner, purpose, resource, action, duration, approval, device, MFA, session, logging, and rollback evidence.",
  "Identify excessive standing privilege, shared administration, stale privileged roles, unowned emergency accounts, session gaps, and weak monitoring.",
  "Distinguish privileged authentication, privileged authorization, elevation, action execution, validation, and post-use review.",
  "Create a professional fictional Privileged Access Review Report with confirmed facts, findings, owners, remediation, validation, monitoring, and residual risk.",
];

const vocabulary = [
  [
    "Privileged access",
    "Fictional access that can create, change, delete, approve, configure, monitor, or control identities, systems, applications, policies, or sensitive resources.",
  ],
  [
    "Administrative account",
    "A fictional account used for elevated system, application, identity, security, or resource-management actions.",
  ],
  [
    "Standard account",
    "A fictional account used for ordinary work that should not carry unnecessary administrative permissions.",
  ],
  [
    "Standing privilege",
    "Fictional privileged access that remains continuously assigned rather than being activated only when needed.",
  ],
  [
    "Temporary elevation",
    "A fictional privileged role or permission activated for a limited approved time and purpose.",
  ],
  [
    "Just-in-time access",
    "A fictional process that grants privileged access only when approved and needed, then removes or expires it automatically.",
  ],
  [
    "Just-enough access",
    "A fictional design that grants only the specific privileged actions required for the approved task.",
  ],
  [
    "Privileged session",
    "A fictional authenticated session used to perform elevated administrative actions.",
  ],
  [
    "Break-glass account",
    "A tightly controlled fictional emergency account used only when normal administrative or identity paths are unavailable.",
  ],
  [
    "Separation of duties",
    "Dividing fictional request, approval, implementation, and verification responsibilities among different accountable identities.",
  ],
  [
    "Elevation approval",
    "The documented fictional decision authorizing a specific privileged role, action, resource, duration, and condition.",
  ],
  [
    "Post-use review",
    "A fictional review of the privileged request, actions, evidence, outcome, validation, and residual risk after the elevated work ends.",
  ],
];

const privilegedAccountTypes = [
  {
    type: "Named administrative account",
    purpose:
      "Represents one fictional administrator performing approved elevated work.",
    strongControls:
      "Unique ownership, separate standard account, MFA, approved device, temporary elevation, logging, session limits, and periodic review.",
    commonRisk:
      "The account is used for normal browsing or email, keeps standing privilege, or is shared by multiple administrators.",
  },
  {
    type: "Application administrator",
    purpose:
      "Manages fictional application users, roles, settings, integrations, or protected business functions.",
    strongControls:
      "Application owner, exact administrative scope, fresh authentication, change approval, local-access review, and application audit logs.",
    commonRisk:
      "Central identity records do not show local application privilege or the role includes unrelated configuration powers.",
  },
  {
    type: "System administrator",
    purpose:
      "Manages fictional servers, operating systems, services, updates, storage, or infrastructure settings.",
    strongControls:
      "Restricted administrative device, separate account, approved maintenance window, command or action logging, rollback, and validation.",
    commonRisk:
      "Broad access across unrelated systems, use from personal devices, or insufficient review of high-impact changes.",
  },
  {
    type: "Identity administrator",
    purpose:
      "Manages fictional accounts, groups, roles, factors, policies, access reviews, or privileged elevation.",
    strongControls:
      "Separation of duties, temporary role activation, strong MFA, protected workstation, approval, monitoring, and independent verification.",
    commonRisk:
      "One identity can request, approve, assign, and conceal its own privilege.",
  },
  {
    type: "Security administrator",
    purpose:
      "Manages fictional defensive tools, alerts, policies, exclusions, quarantine, isolation, or security configuration.",
    strongControls:
      "Narrow tool role, evidence preservation, approval for disruptive actions, change control, rollback, and post-action validation.",
    commonRisk:
      "Broad exclusions, unreviewed containment, disabled logging, or excessive access to private security data.",
  },
  {
    type: "Service administrator",
    purpose:
      "Represents a fictional non-human identity that performs an approved elevated service or automation function.",
    strongControls:
      "Named owner, exact workload, restricted source, minimal permissions, managed identity or protected credential, logging, and lifecycle review.",
    commonRisk:
      "No active owner, nonexpiring credential, interactive use, unexpected source workload, or broad permissions.",
  },
  {
    type: "Emergency or break-glass account",
    purpose:
      "Provides fictional recovery access when normal identity or administrative services are unavailable.",
    strongControls:
      "Strict storage, strong monitoring, limited permissions, periodic testing, named owners, immediate post-use review, and credential rotation.",
    commonRisk:
      "Routine use, stale credentials, unknown ownership, no alerting, or failure to rotate after use.",
  },
  {
    type: "Shared legacy administrator",
    purpose:
      "Supports a fictional legacy environment that cannot yet use unique named administrative identities.",
    strongControls:
      "Documented exception, named authorized users, restricted device, session recording, limited permissions, expiration, and replacement plan.",
    commonRisk:
      "Weak individual accountability, password sharing, permanent exception status, and incomplete action attribution.",
  },
];

const privilegedWorkflow = [
  {
    phase: "Request",
    requiredEvidence:
      "Fictional requester, account, role, resource, exact actions, purpose, urgency, start, duration, owner, and expected outcome.",
    failurePattern:
      "The request says only “admin needed” without defining scope or business need.",
  },
  {
    phase: "Approval",
    requiredEvidence:
      "Resource owner, privileged-role owner, separation-of-duties reviewer, conditions, maintenance window, and expiration.",
    failurePattern:
      "The requester approves their own privilege or an unrelated manager approves access they do not own.",
  },
  {
    phase: "Authentication",
    requiredEvidence:
      "Fictional administrative account, strong MFA, approved device, fresh session, source environment, and policy result.",
    failurePattern:
      "A remembered standard-user session becomes privileged without fresh authentication.",
  },
  {
    phase: "Elevation",
    requiredEvidence:
      "Exact role, permissions, activation time, expiration, ticket, approver, session, and reason.",
    failurePattern:
      "A broad permanent role is assigned instead of a narrow temporary role.",
  },
  {
    phase: "Execution",
    requiredEvidence:
      "Fictional actions, targets, commands or changes at a safe conceptual level, timestamps, results, errors, and linked change record.",
    failurePattern:
      "The session is active but the system records no traceable action evidence.",
  },
  {
    phase: "Validation",
    requiredEvidence:
      "Required function, configuration state, service health, user experience, negative tests, rollback readiness, and owner confirmation.",
    failurePattern:
      "The change is considered complete because the administrative console shows success.",
  },
  {
    phase: "De-elevation",
    requiredEvidence:
      "Role removal or expiration, session revocation or refresh, account state, remaining privilege, and effective-access check.",
    failurePattern:
      "The temporary role expires, but an older privileged session remains active.",
  },
  {
    phase: "Post-use review",
    requiredEvidence:
      "Request, approval, actions, outcome, exceptions, monitoring, evidence gaps, owner acceptance, and residual risk.",
    failurePattern:
      "No one reviews emergency or high-impact administrative use after the work ends.",
  },
];

const leastPrivilegeQuestions = [
  {
    question: "Which exact privileged action is required?",
    strong:
      "Grant only the needed action, such as restart one service or manage one application role.",
    weak:
      "Grant full system administrator because it includes the required action.",
  },
  {
    question: "Which exact resource is in scope?",
    strong:
      "Limit the fictional role to the named server, application, tenant, group, project, or policy.",
    weak:
      "Grant access to every environment for one local task.",
  },
  {
    question: "How long is privilege needed?",
    strong:
      "Use automatic expiration tied to the approved maintenance or support window.",
    weak:
      "Leave privilege standing because the administrator may need it again.",
  },
  {
    question: "Which account should be used?",
    strong:
      "Use a separate named administrative identity or approved service identity.",
    weak:
      "Use the everyday account for email, browsing, and privileged work.",
  },
  {
    question: "Which device and session are approved?",
    strong:
      "Require a protected fictional administrative device and fresh authenticated session.",
    weak:
      "Allow elevation from any device or remembered session.",
  },
  {
    question: "Who approves and verifies the work?",
    strong:
      "Use accountable owners and independent review for sensitive actions.",
    weak:
      "Let one fictional identity request, approve, implement, and close the same task.",
  },
  {
    question: "What evidence must be preserved?",
    strong:
      "Preserve request, approval, role, session, actions, target, results, validation, and review evidence.",
    weak:
      "Keep only a screenshot showing the final dashboard.",
  },
  {
    question: "How will access end?",
    strong:
      "Define role expiration, session revocation, access verification, monitoring, and closure.",
    weak:
      "Assume closing the administrative window removes privilege automatically.",
  },
];

const evidenceMatrix = [
  {
    source: "Privileged-access request",
    supports:
      "The fictional requester, purpose, role, resource, actions, urgency, duration, owner, and expected outcome.",
    limitation:
      "The implemented privilege can be broader, longer, or different from the request.",
  },
  {
    source: "Approval record",
    supports:
      "The fictional approver, scope, conditions, maintenance window, expiration, separation-of-duties review, and decision.",
    limitation:
      "Approval does not prove the approver understood the technical permissions or that the system enforced the exact scope.",
  },
  {
    source: "Role and permission record",
    supports:
      "The fictional privileged role, permissions, resource scope, activation time, expiration, owner, and assignment path.",
    limitation:
      "Application-local permissions, nested roles, or active sessions may create additional effective access.",
  },
  {
    source: "Authentication record",
    supports:
      "The fictional administrative account, MFA, device, source, application, policy, session, and sign-in result.",
    limitation:
      "Successful authentication does not prove approval, safe intent, or correct authorization for every privileged action.",
  },
  {
    source: "Privileged session record",
    supports:
      "The fictional session start, account, role, device, target, duration, recorded actions, result, and end state.",
    limitation:
      "A session record may be incomplete if some tools, local consoles, or connected systems do not forward evidence.",
  },
  {
    source: "Change or action log",
    supports:
      "The fictional target, action, setting, object, result, error, time, and administrative identity associated with a change.",
    limitation:
      "The log may show a technical result without business purpose, owner approval, or full impact.",
  },
  {
    source: "Validation evidence",
    supports:
      "The fictional required function, service health, configuration state, positive test, negative test, rollback state, and owner confirmation.",
    limitation:
      "One test may not cover delayed effects, other environments, cached sessions, or alternate access paths.",
  },
  {
    source: "Post-use review",
    supports:
      "The fictional evidence summary, deviations, exceptions, findings, owner acceptance, monitoring, lessons learned, and residual risk.",
    limitation:
      "A review is only as reliable as the completeness and independence of the evidence.",
  },
];

const privilegedRisks = [
  {
    risk: "Standing administrator privilege",
    evidence:
      "A fictional account retains a broad administrative role continuously despite using it only during monthly maintenance.",
    impact:
      "The account has elevated capability during normal activity and outside approved maintenance windows.",
    correction:
      "Replace standing privilege with narrow time-limited activation, fresh authentication, logging, and expiration validation.",
  },
  {
    risk: "Shared administrative account",
    evidence:
      "Four fictional administrators use one legacy account to manage an application.",
    impact:
      "Actions cannot be attributed reliably to one person, and factor or session ownership is unclear.",
    correction:
      "Move toward named accounts; meanwhile restrict use, record sessions, identify users, limit permissions, and maintain an approved exception.",
  },
  {
    risk: "Self-approved elevation",
    evidence:
      "A fictional identity requests and approves its own temporary identity-administrator role.",
    impact:
      "Separation of duties is bypassed and unauthorized privilege can be concealed.",
    correction:
      "Require an independent privileged-role owner or approved emergency review path.",
  },
  {
    risk: "Expired role with active session",
    evidence:
      "A fictional elevated role expires, but the existing administrative session continues to allow privileged actions.",
    impact:
      "The technical session remains more powerful than the current authorization state.",
    correction:
      "Revoke or refresh the session, verify effective access, and test similar applications.",
  },
  {
    risk: "Unowned emergency account",
    evidence:
      "A fictional break-glass account has broad privilege but no current owner or recent test.",
    impact:
      "No one is accountable for storage, monitoring, rotation, or post-use review.",
    correction:
      "Assign owners, restrict permissions, test safely, verify alerting, document storage, and define post-use rotation.",
  },
  {
    risk: "Broad service privilege",
    evidence:
      "A fictional service identity has write and administrative access even though the workload reads one data set.",
    impact:
      "A non-human identity can change unrelated resources or permissions.",
    correction:
      "Reduce to the exact read scope, restrict source workload, validate reports, and monitor denied write attempts.",
  },
  {
    risk: "Administrative use from standard device",
    evidence:
      "A fictional privileged session begins from a general-purpose device used for email and browsing.",
    impact:
      "The administrative session is exposed to a broader set of everyday risks and weaker separation.",
    correction:
      "Require the approved administrative device or protected environment and fresh authentication.",
  },
  {
    risk: "Incomplete action logging",
    evidence:
      "A fictional privileged role activates and a change occurs, but no session or action record links the administrator to the exact target.",
    impact:
      "Reviewers cannot reconstruct what changed, validate scope, or investigate an error.",
    correction:
      "Improve logging and evidence routing before allowing similar privileged work.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the privileged need",
    detail:
      "Identify the fictional administrator, role, target, exact actions, owner, purpose, urgency, and duration.",
  },
  {
    step: "2",
    title: "Verify approval and separation",
    detail:
      "Confirm independent approval, resource ownership, change control, conditions, and conflict checks.",
  },
  {
    step: "3",
    title: "Establish trusted elevation",
    detail:
      "Use the approved administrative account, protected device, fresh MFA, session, and time-limited role.",
  },
  {
    step: "4",
    title: "Monitor the privileged work",
    detail:
      "Preserve activation, actions, targets, results, errors, deviations, and security-tool evidence.",
  },
  {
    step: "5",
    title: "Remove privilege",
    detail:
      "Expire or revoke the role, refresh sessions, verify effective access, and handle emergency credential rotation.",
  },
  {
    step: "6",
    title: "Validate and review",
    detail:
      "Confirm required function, negative tests, owner acceptance, evidence completeness, monitoring, and residual risk.",
  },
];


const separationExamples = [
  {
    workflow: "Privileged role request",
    requester:
      "A fictional administrator describes the exact task, target, actions, urgency, and duration.",
    independentRole:
      "A resource owner or privileged-role owner approves the scope.",
    reason:
      "The requester cannot create and approve their own elevated authority.",
  },
  {
    workflow: "Identity administration",
    requester:
      "A fictional support reviewer identifies an account or role change.",
    independentRole:
      "An identity administrator implements the approved change and another reviewer validates effective access.",
    reason:
      "Request, implementation, and verification remain separate.",
  },
  {
    workflow: "Security-tool policy change",
    requester:
      "A fictional analyst proposes a narrow defensive-tool rule adjustment.",
    independentRole:
      "The tool owner approves and a separate reviewer validates alerting and false-negative coverage.",
    reason:
      "The same person does not silently reduce security coverage and approve the result.",
  },
  {
    workflow: "Emergency access",
    requester:
      "A fictional incident lead authorizes break-glass use under an approved emergency condition.",
    independentRole:
      "A separate owner reviews the session, rotates the credential, and confirms closure afterward.",
    reason:
      "Urgency does not remove post-use accountability.",
  },
  {
    workflow: "High-impact configuration",
    requester:
      "A fictional system owner approves a critical service configuration change.",
    independentRole:
      "One administrator performs the change and another verifies service health, logs, and rollback readiness.",
    reason:
      "Independent validation reduces the chance that an unnoticed error becomes accepted evidence.",
  },
  {
    workflow: "Privileged-access recertification",
    requester:
      "The fictional account manager confirms current job responsibility.",
    independentRole:
      "The resource owner confirms exact privileged need and the identity team removes rejected roles.",
    reason:
      "Each reviewer answers a distinct ownership and technical question.",
  },
];

const emergencyAccessChecks = [
  {
    check: "Named ownership",
    question:
      "Which fictional leaders or teams own the emergency account, storage method, review schedule, and escalation path?",
    failure:
      "The account exists, but no current owner accepts responsibility.",
  },
  {
    check: "Narrow emergency purpose",
    question:
      "Which fictional outage, recovery, or identity-service failure justifies use?",
    failure:
      "The account is used for routine convenience or normal maintenance.",
  },
  {
    check: "Protected storage",
    question:
      "How is the fictional emergency credential or factor protected, accessed, inventoried, and changed?",
    failure:
      "The credential is stored in an unreviewed document or shared message.",
  },
  {
    check: "Strong monitoring",
    question:
      "Which fictional alerts, session records, action logs, owner notifications, and case workflows begin when the account is used?",
    failure:
      "Emergency access produces no immediate alert or independent review.",
  },
  {
    check: "Periodic safe test",
    question:
      "Can the fictional account authenticate and perform only the approved recovery actions during a scheduled test?",
    failure:
      "The organization discovers during an emergency that the account is expired or unusable.",
  },
  {
    check: "Post-use rotation",
    question:
      "How are fictional credentials, factors, sessions, and stored recovery materials changed after use?",
    failure:
      "The same emergency authentication material remains valid after an incident.",
  },
  {
    check: "Post-use review",
    question:
      "Who confirms the fictional reason, actions, target, duration, outcome, exceptions, and residual risk?",
    failure:
      "The session ends without evidence-based review.",
  },
  {
    check: "Replacement and retirement",
    question:
      "When should the fictional emergency account, method, or dependency be redesigned or removed?",
    failure:
      "A temporary emergency workaround becomes permanent standing privilege.",
  },
];

const validationTests = [
  {
    test: "Approved action succeeds",
    purpose:
      "Confirm the fictional administrator can complete the exact required task during the approved window.",
    example:
      "The temporary service-operator role can restart one named training service.",
    success:
      "The required action succeeds and is linked to the correct session, ticket, target, and owner.",
  },
  {
    test: "Unrelated action remains denied",
    purpose:
      "Confirm the fictional role does not include broader administrative powers.",
    example:
      "The service operator cannot create users or change network policy.",
    success:
      "The unrelated actions are denied and the decision reason is logged.",
  },
  {
    test: "Resource boundary holds",
    purpose:
      "Confirm the fictional privilege applies only to the approved target.",
    example:
      "The role can manage training-server-04 but not other servers.",
    success:
      "The approved target works and neighboring resources remain denied.",
  },
  {
    test: "Expiration removes role",
    purpose:
      "Confirm the fictional elevation ends automatically at the approved time.",
    example:
      "The temporary role disappears after forty-five minutes.",
    success:
      "The role assignment and effective access both show no remaining privilege.",
  },
  {
    test: "Session refresh removes claims",
    purpose:
      "Confirm existing fictional sessions do not retain expired privilege.",
    example:
      "The administrative console requires a new access decision after expiration.",
    success:
      "The old session cannot continue privileged actions.",
  },
  {
    test: "Rollback remains available",
    purpose:
      "Confirm the fictional change can be reversed safely if service or policy validation fails.",
    example:
      "The previous approved configuration is preserved and tested in the rollback plan.",
    success:
      "The team can restore the prior state without improvising.",
  },
  {
    test: "Monitoring records the work",
    purpose:
      "Confirm fictional activation, actions, errors, results, and closure reach the expected monitoring systems.",
    example:
      "The privileged session and change appear in the review dashboard with matching timestamps.",
    success:
      "Another reviewer can reconstruct the work from preserved evidence.",
  },
  {
    test: "Business function remains healthy",
    purpose:
      "Confirm the fictional service, application, or user workflow works after the privileged change.",
    example:
      "The training application operates normally and the owner accepts the result.",
    success:
      "Technical and business validation agree.",
  },
];

const mistakes = [
  "Using an everyday fictional account for both normal work and privileged administration.",
  "Keeping broad standing administrator roles because temporary elevation seems inconvenient.",
  "Allowing one identity to request, approve, implement, and verify the same privileged action.",
  "Treating strong MFA as permission to perform every administrative action.",
  "Granting administrator when only one narrow action or resource is required.",
  "Ignoring service, application, security-tool, and emergency identities during privileged-access reviews.",
  "Using shared administrator accounts without named users, restricted devices, session evidence, expiration, and a replacement plan.",
  "Assuming role expiration automatically removes privilege from every active session and application.",
  "Closing a privileged task because the administrative console reports success without technical and business validation.",
  "Failing to preserve the original configuration, rollback plan, action evidence, errors, and deviations.",
  "Treating emergency access as exempt from ownership, monitoring, rotation, and post-use review.",
  "Publishing real administrative usernames, roles, targets, session IDs, actions, logs, screenshots, or internal privileged-access architecture.",
];

const quizQuestions = [
  {
    question:
      "What is standing privilege?",
    choices: [
      "Fictional privileged access that remains continuously assigned.",
      "A temporary role that expires automatically.",
      "A standard account with no elevated permission.",
      "A completed post-use review.",
    ],
    answer: 0,
    explanation:
      "Standing privilege remains available even when no approved administrative task is active.",
  },
  {
    question:
      "What is just-in-time access?",
    choices: [
      "Fictional privilege granted only when approved and needed, then removed or expired.",
      "Permanent administrator access for every support user.",
      "A shared password sent during an emergency.",
      "A role with no owner.",
    ],
    answer: 0,
    explanation:
      "Just-in-time access reduces continuous exposure by limiting when privilege exists.",
  },
  {
    question:
      "What is just-enough access?",
    choices: [
      "Fictional privilege limited to the exact actions and resources required.",
      "Every administrative permission in one role.",
      "A role without expiration.",
      "A remembered privileged session.",
    ],
    answer: 0,
    explanation:
      "Just-enough access reduces the scope of elevated capability.",
  },
  {
    question:
      "Why should privileged work use a separate named administrative account?",
    choices: [
      "It improves separation, accountability, monitoring, and restriction of elevated activity.",
      "It removes the need for approval.",
      "It allows password sharing.",
      "It guarantees every action is safe.",
    ],
    answer: 0,
    explanation:
      "Separate named accounts help distinguish ordinary activity from elevated work and preserve individual accountability.",
  },
  {
    question:
      "What should happen when a temporary privileged role expires?",
    choices: [
      "Verify role removal, refresh or revoke sessions, test denied privileged actions, and document closure.",
      "Assume every application removed the access.",
      "Convert the role to standing access.",
      "Delete all evidence.",
    ],
    answer: 0,
    explanation:
      "Role state and session state can differ, so effective de-elevation must be validated.",
  },
  {
    question:
      "Which emergency-account control is strongest?",
    choices: [
      "Named ownership, protected storage, narrow purpose, monitoring, safe testing, post-use rotation, and independent review.",
      "Routine daily use by the whole team.",
      "No alerts because emergencies are urgent.",
      "A permanent shared credential in a document.",
    ],
    answer: 0,
    explanation:
      "Emergency access remains privileged access and requires strong governance before, during, and after use.",
  },
  {
    question:
      "Which privileged-access validation plan is strongest?",
    choices: [
      "Test the approved action, unrelated denial, resource boundary, expiration, session refresh, monitoring, rollback, and business function.",
      "Check only whether the console shows success.",
      "Ask the administrator whether the task worked.",
      "Keep the role active in case another test is needed.",
    ],
    answer: 0,
    explanation:
      "Professional validation covers function, boundaries, lifecycle, evidence, rollback, and business outcome.",
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


function PrivilegedAccountGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Privileged Account Types
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Administrative Identities with Different Control Needs
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {privilegedAccountTypes.map((item) => (
          <div
            key={item.type}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.type}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Strong controls
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.strongControls}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Common risk
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.commonRisk}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PrivilegedWorkflowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Privileged Access Lifecycle
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Phases from Request to Post-Use Review
      </h2>

      <div className="mt-6 grid gap-5">
        {privilegedWorkflow.map((item) => (
          <div
            key={item.phase}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.35fr_1fr_1fr]"
          >
            <div>
              <p className="text-lg font-black text-cyan-100">{item.phase}</p>
            </div>

            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Required evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.requiredEvidence}
              </p>
            </div>

            <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Failure pattern
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.failurePattern}
              </p>
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
        Just-Enough and Just-in-Time Access
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Questions Before Elevating Privilege
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {leastPrivilegeQuestions.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.question}</h3>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Strong practice
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.strong}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Weak practice
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.weak}
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
        What Privileged-Access Evidence Can and Cannot Prove
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

function RiskGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Privileged Access Findings
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight High-Value Risks and Narrow Corrections
      </h2>

      <div className="mt-6 grid gap-5">
        {privilegedRisks.map((item) => (
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

function SeparationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Separation of Administrative Duties
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Six Workflows That Need Independent Responsibility
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {separationExamples.map((item) => (
          <div
            key={item.workflow}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.workflow}</h3>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Request or execution
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.requester}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                Independent role
              </p>
              <p className="mt-2 text-sm leading-6 text-purple-50">
                {item.independentRole}
              </p>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              {item.reason}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EmergencyAccessGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Emergency Access
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Checks for a Fictional Break-Glass Account
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {emergencyAccessChecks.map((item) => (
          <div
            key={item.check}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.check}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
            </p>

            <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Failure pattern
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.failure}
              </p>
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
        Privileged Access Validation
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Tests for Safe Elevation and De-Elevation
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {validationTests.map((item) => (
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
        Review Privileged Access in Six Steps
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

export default function PrivilegedAccessAndAdministrativeAccountsPage() {
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
              Lesson 5 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I6.5 Privileged Access and Administrative Accounts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders govern fictional administrative identities,
            temporary elevation, privileged sessions, emergency access,
            separation of duties, action evidence, de-elevation, and post-use
            review.
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
          lessonTitle="Privileged Access and Administrative Accounts"
          lessonNumber={5}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that privileged authentication, privileged authorization, role elevation, action execution, and validation are separate stages.",
            "I will review standing, temporary, service, application, security, shared, and emergency administrative access.",
            "I will require fictional ownership, approval, scope, duration, protected devices, fresh authentication, session evidence, and rollback.",
            "I will validate role removal and active-session cleanup after privileged work ends.",
            "I will use only fictional administrators, accounts, devices, roles, resources, sessions, logs, owners, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Administrative Access Should Exist Only for the Approved Task"
        >
          <p className="leading-8">
            Privilege is not a permanent reward for technical skill. A
            fictional administrator should receive only the actions, resources,
            conditions, and time required for an approved task. Strong
            governance separates ordinary work from administration and
            preserves evidence from request through post-use review.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “Give permanent administrator access because this user handles
                technical support.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Define the exact action and target, approve a narrow temporary
                role, use a protected session, preserve evidence, and verify
                de-elevation.”
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
          title="Privilege Can Change Other Identities, Controls, and Evidence"
        >
          <p className="leading-8">
            Administrative access can create accounts, assign roles, change
            policies, disable controls, alter services, approve workflows, or
            remove evidence. That makes ownership, separation of duties,
            temporary elevation, monitoring, rollback, and independent
            validation especially important.
          </p>
        </SectionCard>

        <PrivilegedAccountGuide />
        <PrivilegedWorkflowGuide />
        <LeastPrivilegeGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Privileged Access Requires Five Connected Boundaries"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              [
                "Identity",
                "Use the approved named administrative or service identity rather than an everyday or unowned account.",
              ],
              [
                "Authority",
                "Match the fictional role and permissions to the exact approved action, resource, and duration.",
              ],
              [
                "Session",
                "Use fresh authentication, a protected device, a traceable session, and appropriate expiration.",
              ],
              [
                "Action",
                "Preserve the exact target, change, result, error, deviation, and linked change record.",
              ],
              [
                "Closure",
                "Remove privilege, refresh sessions, validate outcomes, review evidence, and document residual risk.",
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

        <EvidenceGuide />
        <RiskGuide />
        <SeparationGuide />
        <EmergencyAccessGuide />
        <ValidationGuide />
        <WorkflowGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Privileged Access and Administration Terms
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
          title="Fake Privileged Access Review Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services environment."
          metrics={[
            {
              label: "Elevations reviewed",
              value: "21",
              note: "Fifteen normal temporary activations, two emergency tests, two standing-role findings, one service identity, and one incomplete session.",
            },
            {
              label: "Privilege findings",
              value: "8",
              note: "Standing access, shared administration, self-approval, stale session, unowned emergency access, broad service privilege, weak device separation, and incomplete logging.",
            },
            {
              label: "Validated closures",
              value: "18",
              note: "Each includes role removal, session review, positive and negative tests, owner confirmation, monitoring, and residual risk.",
            },
          ]}
        />

        <FakeAlertCard
          title="Temporary Administrative Role Expires but the Session Retains Privileged Claims"
          severity="High"
          time="01:57 PM"
          source="Fake Privileged Access Review Console"
          details="A fictional restart-only service-operator role expires at the approved time. The administrative console continues displaying an older privileged page until the session is revoked and refreshed. No unrelated administrative action is recorded."
          recommendation="Preserve the request, approval, role, session, action, target, expiration, and owner evidence; revoke the affected session; verify privileged actions are denied; review similar applications; and document the short residual-risk window."
        />

        <FakeLogPanel
          title="Fake Temporary Privileged-Access Timeline"
          logs={[
            "13:00:00 REQUEST admin='training-akal' role='service-operator' target='training-service-04' action='restart'",
            "13:04:00 OWNER_APPROVAL scope='restart_only' duration='45m'",
            "13:07:00 CHANGE_REVIEW rollback='approved' validation='approved'",
            "13:10:00 AUTH account='admin-training-akal' device='admin-workstation-08' mfa='fresh'",
            "13:11:00 ELEVATION role='service-operator' expires='13:56'",
            "13:15:00 ACTION target='training-service-04' operation='restart' result='success'",
            "13:20:00 NEGATIVE_TEST action='manage_users' result='deny'",
            "13:20:10 BOUNDARY_TEST target='training-service-05' result='deny'",
            "13:30:00 OWNER_VALIDATION service_workflow='healthy'",
            "13:56:00 ROLE state='expired'",
            "13:57:00 SESSION old_claims='present'",
            "13:58:00 SESSION action='revoked'",
            "14:00:00 TEST privileged_action='deny'",
            "17:00:00 POST_USE_REVIEW closure='approved' residual_risk='documented'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Privileged-Access Conclusion Is Best Supported?"
          evidence={[
            "The fictional service owner approves restart-only access to one named service for forty-five minutes.",
            "A separate reviewer approves rollback and validation.",
            "The administrator uses a named administrative account, protected device, and fresh MFA.",
            "The temporary role is limited to the approved target.",
            "The service restart succeeds.",
            "User administration and a neighboring service remain denied.",
            "The role expires at the approved time.",
            "An older privileged session remains briefly until revocation and refresh.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The privileged workflow is mostly controlled and least-privileged, but de-elevation has a short session-refresh gap that requires correction and broader review.",
            "The administrator should receive permanent system administration because the restart succeeded.",
            "The denied unrelated actions prove the administrator acted maliciously.",
            "The expired role means no session review is needed.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports correct request, approval, elevation, action, and resource boundaries while identifying a specific de-elevation weakness."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Privileged-Access Governance"
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
          title="Review a Fictional Privileged-Access Packet"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Administrative Access Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review thirty-two supplied fictional records involving named
                administrators, standard accounts, service identities,
                temporary roles, standing privilege, emergency access, devices,
                sessions, approvals, actions, validation, monitoring, and
                post-use review.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Identify every fictional privileged identity, owner, account type, role, resource, action, and duration.</li>
                <li>Trace request, approval, authentication, elevation, execution, validation, de-elevation, and review evidence.</li>
                <li>Find standing privilege, broad scope, self-approval, shared administration, session gaps, and emergency-account weaknesses.</li>
                <li>Separate confirmed actions from assumptions about intent or impact.</li>
                <li>Recommend narrow owner-approved corrections with preserved evidence and rollback.</li>
                <li>Validate approved actions, unrelated denials, resource boundaries, expiration, session refresh, monitoring, and business function.</li>
                <li>Document evidence gaps, owners, residual risk, and closure criteria.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access real
            administrative accounts, request credentials or codes, elevate
            privilege, change roles, enter live consoles, run commands, alter
            systems, or publish real administrators, devices, roles, targets,
            sessions, logs, screenshots, or internal privileged-access
            architecture.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Support Administrator Has Permanent Broad Privilege"
          scenario="A fictional support administrator uses a standing system-admin role for monthly service restarts and everyday work. The role also permits user management, policy changes, and access to unrelated systems."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve role, usage, owner, device, session, and task evidence; define a restart-only temporary role for named services; separate the administrative account; validate required and denied actions; and remove standing privilege.",
              outcome:
                "Best defensive choice. The correction reduces action, resource, account, and time scope while preserving required support work.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep system administration because the user is trusted.",
              outcome:
                "Unsafe. Personal trust does not replace least privilege and evidence-based governance.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove every support permission without testing the maintenance workflow.",
              outcome:
                "Overbroad. Required work should be preserved through a narrow role.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Break-Glass Account Is Used During a Fictional Identity Outage"
          scenario="A fictional identity-service outage requires emergency access. The break-glass account restores service, but the credential has not been rotated and no independent post-use review has occurred."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the emergency authorization, session, action, target, and outcome evidence; end active sessions; rotate the emergency authentication material; verify alerting and storage; conduct independent post-use review; and document residual risk.",
              outcome:
                "Best defensive choice. Emergency success is followed by lifecycle cleanup and accountability.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave the account unchanged because the emergency is over.",
              outcome:
                "Unsafe. Emergency authentication material and sessions require post-use handling.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Publish the emergency credential so more staff can respond next time.",
              outcome:
                "Unsafe. Emergency access must remain tightly protected and individually governed.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Privileged Access and Administrative Accounts Checklist"
          items={[
            "I inventory fictional named administrators, application administrators, system administrators, identity administrators, security administrators, service identities, emergency accounts, and shared legacy accounts.",
            "I separate standard work from privileged work through appropriate accounts, devices, sessions, and roles.",
            "I confirm the exact role, resource, action, purpose, duration, owner, approval, maintenance window, and expected outcome.",
            "I require fresh authentication, a protected device, traceable activation, action evidence, and automatic expiration.",
            "I identify standing privilege, self-approval, shared administration, broad service access, weak device separation, stale sessions, and incomplete logging.",
            "I preserve request, approval, authentication, role, session, target, action, result, error, rollback, and validation evidence.",
            "I verify role removal and refresh or revoke sessions after privilege expires or is revoked.",
            "I test approved actions, unrelated denials, resource boundaries, expiration, monitoring, rollback, and business function.",
            "I require named ownership, monitoring, testing, rotation, and independent post-use review for emergency access.",
            "I use only fictional evidence and never publish real credentials, administrators, roles, targets, sessions, logs, screenshots, or internal privileged-access architecture.",
          ]}
        />

        <MiniQuiz
          title="I6.5 Mini Quiz: Privileged Access and Administrative Accounts"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Privileged Access Review Report containing at least thirty-two request, approval, administrative-account, device, MFA, role, permission, resource, session, action, result, error, rollback, validation, emergency-access, monitoring, and post-use-review records. Include standing privilege, temporary elevation, just-enough access, just-in-time access, separation of duties, shared administration, service privilege, emergency-account governance, session cleanup, narrow recommendations, positive tests, negative tests, residual risk, and closure criteria."
          tips={[
            "Use only fictional administrators, accounts, roles, permissions, resources, devices, sessions, owners, applications, and organizations.",
            "Include one standing-role finding, one self-approval conflict, one shared administrator, one emergency-account review, and one expired-role session gap.",
            "Show both required privileged actions and unrelated actions that must remain denied.",
            "Do not include real passwords, MFA codes, usernames, account IDs, command output, target names, screenshots, or internal privileged-access architecture.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Privileged access can change identities, systems, policies, controls, and evidence, so it requires stronger governance.",
            "Just-in-time access limits when privilege exists, while just-enough access limits which actions and resources are available.",
            "Named administrative identities, protected devices, fresh authentication, temporary roles, and traceable sessions improve accountability.",
            "Role expiration is incomplete until effective access and active sessions are validated.",
            "Emergency access still requires ownership, monitoring, safe testing, post-use rotation, and independent review.",
            "Strong privileged-access closure includes technical validation, business validation, evidence review, monitoring, and documented residual risk.",
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