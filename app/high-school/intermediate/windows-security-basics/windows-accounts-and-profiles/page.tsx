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
const modulePath = `${trackPath}/windows-security-basics`;
const previousPage = modulePath;
const nextLesson = `${modulePath}/file-permissions-and-shared-folders`;

const objectives = [
  "Explain the difference between local accounts, connected organizational accounts, standard users, administrators, service identities, and temporary support accounts.",
  "Describe how Windows user profiles store settings, data, application state, cached information, and evidence tied to an account.",
  "Evaluate fictional accounts using owner, role, privilege, activity, expiration, group membership, sign-in method, profile state, and approved purpose.",
  "Distinguish confirmed account facts from likely explanations, missing evidence, alternate explanations, and unsupported assumptions.",
  "Create a professional account-and-profile review with prioritized findings, named owners, controlled actions, validation, rollback, and review dates.",
];

const vocabulary = [
  [
    "Local account",
    "An account created and managed primarily on one Windows device.",
  ],
  [
    "Connected organizational account",
    "An account linked to an organizational identity system and used to access managed devices, files, applications, and services.",
  ],
  [
    "Standard user",
    "An account intended for everyday work with limited authority to make system-wide changes.",
  ],
  [
    "Administrator",
    "An account or group with elevated authority to install software, change system settings, manage accounts, and alter protected resources.",
  ],
  [
    "User profile",
    "The collection of user-specific folders, settings, application data, cached state, and preferences associated with an account.",
  ],
  [
    "Local group",
    "A Windows group on one device that grants a defined set of permissions or privileges to its members.",
  ],
  [
    "Account lifecycle",
    "The process of creating, approving, using, reviewing, disabling, transferring, and removing an account.",
  ],
  [
    "Last sign-in",
    "Evidence showing when an account most recently authenticated or established a session under the available records.",
  ],
  [
    "Sign-in method",
    "The approved mechanism used to authenticate, such as a password, PIN, smart card, or organizational credential.",
  ],
  [
    "Profile ownership",
    "The relationship between an account and the user-specific files, settings, and application data stored in its profile.",
  ],
  [
    "Temporary account",
    "A time-bounded identity created for support, deployment, testing, migration, vendor work, or another approved short-term purpose.",
  ],
  [
    "Orphaned profile",
    "A profile that remains on a device after the associated account is disabled, deleted, transferred, or no longer actively used.",
  ],
];

const accountTypes = [
  {
    type: "Standard user account",
    purpose:
      "Supports normal daily work without broad system-wide authority.",
    normalEvidence:
      "Named owner, current role, approved applications, recent activity, limited groups, standard profile, and normal sign-in protections.",
    risks:
      "May still expose data through downloads, browsers, shared folders, removable media, weak passwords, or unsafe behavior.",
    reviewQuestions:
      "Does the owner still need the account? Are group memberships narrow? Is the profile current? Are downloads, browser state, and local data managed safely?",
  },
  {
    type: "Local administrator account",
    purpose:
      "Supports approved device administration, maintenance, deployment, or troubleshooting.",
    normalEvidence:
      "Named owner, separate standard account, documented approval, limited use, strong sign-in protection, monitoring, and periodic review.",
    risks:
      "Permanent broad privilege increases impact if the account is shared, stale, misused, or poorly monitored.",
    reviewQuestions:
      "Is administrator membership still required? Is the account separate from daily work? Is use time-bounded and logged? Is the owner current?",
  },
  {
    type: "Connected organizational account",
    purpose:
      "Provides managed access to organizational applications, files, policies, settings, and device resources.",
    normalEvidence:
      "Active organizational status, assigned device, current groups, approved profile, managed sign-in protection, and offboarding records.",
    risks:
      "Old group assignments, profile data, cached sign-in state, and shared-device access may outlive the original role.",
    reviewQuestions:
      "Does the account still belong on this device? Are role groups current? Is profile data appropriate? Has offboarding or transfer been completed?",
  },
  {
    type: "Service identity",
    purpose:
      "Runs an approved service, scheduled activity, automation, or application component.",
    normalEvidence:
      "Named technical owner, exact service mapping, narrow privilege, restricted sign-in rights, documented credential management, and monitoring.",
    risks:
      "Overprivilege, interactive sign-in, unknown ownership, broad folder access, stale credentials, and hidden dependencies.",
    reviewQuestions:
      "Which service uses the identity? Can it sign in interactively? What resources can it access? Is the owner current? Is the credential rotation process documented?",
  },
  {
    type: "Temporary support account",
    purpose:
      "Provides short-term access for support, deployment, migration, repair, or vendor activity.",
    normalEvidence:
      "Ticket, owner, approver, exact scope, expiration, temporary group membership, activity review, and confirmed closure.",
    risks:
      "Temporary accounts often remain enabled, privileged, or assigned to groups after the approved work ends.",
    reviewQuestions:
      "Has the expiration passed? Is the account still enabled? Does any active dependency remain? Were groups and profile data removed or transferred?",
  },
  {
    type: "Disabled or retired account",
    purpose:
      "Preserves historical ownership, audit context, or controlled access to retained profile data after active use ends.",
    normalEvidence:
      "Sign-in disabled, ownership transferred, jobs reassigned, groups removed, profile retention approved, and review date recorded.",
    risks:
      "May still own files, scheduled activity, services, encrypted data, shared resources, or cached credentials.",
    reviewQuestions:
      "Is sign-in blocked? Has ownership transferred? Are services and jobs reassigned? Is profile retention justified and time-bounded?",
  },
];

const profileComponents = [
  {
    component: "Desktop and user folders",
    evidence:
      "Documents, Downloads, Desktop, Pictures, and other user-managed content.",
    defenderQuestion:
      "Does the profile contain sensitive or business data that should be moved, protected, retained, or deleted under policy?",
  },
  {
    component: "Application settings",
    evidence:
      "User-specific application preferences, cached configuration, local databases, and extensions.",
    defenderQuestion:
      "Could stale settings, extensions, or application state continue after the account role changes?",
  },
  {
    component: "Browser state",
    evidence:
      "Bookmarks, history, downloads, profiles, cached data, extensions, and stored sign-in state.",
    defenderQuestion:
      "Are there privacy, exposure, or account-sharing concerns that require approved cleanup?",
  },
  {
    component: "Local application data",
    evidence:
      "Per-user application files, logs, tokens, databases, and temporary state.",
    defenderQuestion:
      "Which data is required for the role, and which data should be protected, transferred, or removed?",
  },
  {
    component: "Profile path and ownership",
    evidence:
      "Profile directory, owning account identifier, access permissions, last-use time, and profile status.",
    defenderQuestion:
      "Does the profile still map to an active and approved account owner?",
  },
  {
    component: "Cached organizational state",
    evidence:
      "Offline files, synchronized content, local policy state, or application sign-in cache.",
    defenderQuestion:
      "What remains accessible if the device is offline or the organizational account is disabled?",
  },
];

const lifecycleStages = [
  {
    step: "1",
    title: "Request and approve",
    detail:
      "Document the owner, business purpose, device scope, privilege level, duration, approver, and expected profile needs.",
  },
  {
    step: "2",
    title: "Create and configure",
    detail:
      "Assign the correct account type, groups, sign-in protections, profile location, and restrictions.",
  },
  {
    step: "3",
    title: "Use and monitor",
    detail:
      "Review sign-ins, group changes, privilege use, profile growth, support tickets, and unusual activity.",
  },
  {
    step: "4",
    title: "Review and recertify",
    detail:
      "Confirm that the owner, role, access, privilege, profile data, and expiration remain appropriate.",
  },
  {
    step: "5",
    title: "Disable and transfer",
    detail:
      "Block sign-in, transfer file ownership, reassign services or jobs, remove groups, and protect required profile data.",
  },
  {
    step: "6",
    title: "Retain or remove",
    detail:
      "Apply approved retention, archive or remove the profile, update records, and confirm the account cannot be used.",
  },
];

const evidenceMatrix = [
  {
    source: "Account inventory",
    supports:
      "Account name, type, status, owner, creation date, expiration, and local or organizational relationship.",
    limitation:
      "Does not prove current business need, actual human identity, or all effective privileges.",
  },
  {
    source: "Local group membership",
    supports:
      "Which local roles or privilege groups include the account.",
    limitation:
      "Does not show every permission gained through files, applications, network services, or organizational groups.",
  },
  {
    source: "Sign-in records",
    supports:
      "Successful or failed authentication, time, device, source, method, and session context under available logging.",
    limitation:
      "Does not always prove the physical person, purpose, or full activity performed after sign-in.",
  },
  {
    source: "Profile metadata",
    supports:
      "Profile path, owner mapping, last use, size, status, and local data presence.",
    limitation:
      "Does not prove every file is still required or that all sensitive data has been identified.",
  },
  {
    source: "Owner and role records",
    supports:
      "Approved user, job or student role, support responsibility, expiration, and current need.",
    limitation:
      "Documentation may be stale or may not match the technical state.",
  },
  {
    source: "Service and scheduled-task mappings",
    supports:
      "Which services, jobs, or automation still depend on an account.",
    limitation:
      "Does not prove the dependency is still needed or correctly configured.",
  },
  {
    source: "Support and change records",
    supports:
      "Why an account was created, who approved it, what changes occurred, and when access should end.",
    limitation:
      "Does not prove the account was actually removed or restricted afterward.",
  },
  {
    source: "File ownership and access",
    supports:
      "Which files, folders, or resources are owned by or accessible to an account.",
    limitation:
      "Does not prove that all access is approved or that ownership matches current responsibility.",
  },
];

const reviewWorkflow = [
  {
    step: "1",
    title: "Confirm system and scope",
    detail:
      "Identify the fictional Windows device, approved role, owner, time window, and allowed evidence sources.",
  },
  {
    step: "2",
    title: "Inventory accounts and profiles",
    detail:
      "Record account type, status, owner, groups, privilege, expiration, sign-in method, profile path, and last use.",
  },
  {
    step: "3",
    title: "Connect dependencies",
    detail:
      "Map accounts to files, services, scheduled activity, applications, shares, groups, and organizational roles.",
  },
  {
    step: "4",
    title: "Compare with lifecycle records",
    detail:
      "Check approvals, tickets, role changes, offboarding, expiration, retention, and transfer requirements.",
  },
  {
    step: "5",
    title: "Classify findings",
    detail:
      "Separate confirmed facts, likely explanations, missing evidence, alternate explanations, and unsupported claims.",
  },
  {
    step: "6",
    title: "Recommend controlled action",
    detail:
      "Assign an owner, define the exact approved change, preserve needed data, validate dependencies, and document rollback or recovery.",
  },
];

const mistakes = [
  "Assuming every enabled account belongs to a current user.",
  "Treating administrator membership as normal for convenience.",
  "Using one shared account for multiple people and losing accountability.",
  "Deleting a profile before checking files, application data, encryption, ownership, services, and retention.",
  "Disabling an account without checking scheduled tasks, services, file ownership, or business dependencies.",
  "Assuming no recent sign-in means the account is unnecessary without checking automation or offline use.",
  "Treating a familiar display name as proof of identity.",
  "Ignoring stale group memberships after a role change.",
  "Leaving temporary support accounts enabled after the ticket closes.",
  "Keeping broad profile data forever because deletion feels risky.",
  "Stating that a failed sign-in proves malicious intent.",
  "Publishing real usernames, device names, profile paths, sign-in records, or ownership details in a portfolio.",
];

const quizQuestions = [
  {
    question:
      "What is the main difference between a standard user and an administrator?",
    choices: [
      "An administrator has broader authority to make system-wide changes.",
      "A standard user cannot open files.",
      "An administrator cannot have a profile.",
      "A standard user cannot sign in.",
    ],
    answer: 0,
    explanation:
      "Administrator privilege allows broader system-wide changes and therefore requires tighter control.",
  },
  {
    question:
      "Why should temporary support accounts have an expiration date?",
    choices: [
      "So access ends when the approved support need ends.",
      "So the profile grows faster.",
      "So the account becomes an administrator automatically.",
      "So logs are no longer needed.",
    ],
    answer: 0,
    explanation:
      "Time-bounded access reduces stale privilege and supports accountability.",
  },
  {
    question:
      "What does a user profile contain?",
    choices: [
      "User-specific folders, settings, application state, and local data.",
      "Only the password.",
      "Only administrator settings.",
      "Only network addresses.",
    ],
    answer: 0,
    explanation:
      "Profiles store user-specific data and application context.",
  },
  {
    question:
      "An account has not signed in for six months. What is the strongest conclusion?",
    choices: [
      "The account appears inactive, but business need, automation, ownership, and dependencies still require review.",
      "The account is definitely malicious.",
      "The profile can be deleted immediately.",
      "The account has no permissions.",
    ],
    answer: 0,
    explanation:
      "Inactivity is useful evidence but does not prove that no dependency remains.",
  },
  {
    question:
      "Why should a retired account's file ownership be reviewed?",
    choices: [
      "Files may still depend on that account for ownership, access, accountability, or encryption context.",
      "Retired accounts cannot own files.",
      "Ownership changes automatically in every case.",
      "File ownership is unrelated to access.",
    ],
    answer: 0,
    explanation:
      "Ownership and access may remain after sign-in is disabled.",
  },
  {
    question:
      "Which evidence best supports removing a temporary account from the local Administrators group?",
    choices: [
      "The ticket is closed, expiration passed, owner confirms no current need, and no service or task dependency remains.",
      "The account name looks unusual.",
      "The profile is small.",
      "One sign-in failed.",
    ],
    answer: 0,
    explanation:
      "Lifecycle, owner, and dependency evidence support a controlled privilege removal.",
  },
  {
    question:
      "What should happen before deleting an orphaned profile?",
    choices: [
      "Review ownership, required files, application data, retention, encryption, and transfer needs.",
      "Disable logging.",
      "Delete the account name from every report.",
      "Add the account to Administrators.",
    ],
    answer: 0,
    explanation:
      "Profile removal requires evidence preservation and data-handling review.",
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
        href={previousPage}
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
        Different Windows Identities Need Different Controls
      </h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {accountTypes.map((item) => (
          <div
            key={item.type}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{item.type}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Healthy evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.normalEvidence}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-red-400/30 bg-red-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
                Main risks
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.risks}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Defender questions
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.reviewQuestions}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProfileGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Profile Anatomy
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        A User Profile Is More Than a Folder Name
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {profileComponents.map((item) => (
          <div
            key={item.component}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.component}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.evidence}
            </p>
            <p className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-sm leading-6 text-yellow-50">
              {item.defenderQuestion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LifecycleGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Account Lifecycle
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Manage Accounts from Approval through Removal
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {lifecycleStages.map((item) => (
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

function EvidenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Analysis
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        What Windows Account Evidence Can and Cannot Prove
      </h2>

      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div
            key={item.source}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Evidence source
              </p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>

            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Can support
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.supports}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
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

function ReviewWorkflowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Complete a Windows Account Review in Six Steps
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reviewWorkflow.map((item) => (
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

export default function WindowsAccountsAndProfilesPage() {
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
              Module I3
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 1 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I3.1 Windows Accounts and Profiles
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Review fictional Windows identities by account type, owner, role,
            privilege, group membership, activity, expiration, sign-in method,
            profile state, lifecycle, and approved purpose.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I3: Windows Security Basics"
          lessonTitle="Windows Accounts and Profiles"
          lessonNumber={1}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand least privilege, ownership, account lifecycle, evidence limits, and controlled change.",
            "I can distinguish a confirmed technical fact from a likely explanation or unsupported assumption.",
            "I will preserve account, profile, group, sign-in, owner, and dependency evidence before recommending changes.",
            "I will use only fictional devices, accounts, profiles, paths, groups, events, tickets, and organizations.",
            "I will not inspect, disable, remove, or alter any real account or profile without explicit authorization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="An Enabled Account Is Not Automatically a Valid Account"
        >
          <p className="leading-8">
            A Windows device may contain standard users, administrators,
            temporary support accounts, organizational identities, service
            identities, disabled accounts, and old profiles. The defender must
            determine which accounts still have an approved owner, purpose,
            privilege level, duration, and dependency.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “Delete every account that has not signed in recently.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Confirm the owner, role, privilege, lifecycle, dependencies,
                profile data, sign-in evidence, and approved need before making
                a controlled change.”
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Identity Errors Can Become Device-Wide Security Problems"
        >
          <p className="leading-8">
            A stale administrator, shared account, ownerless service identity,
            orphaned profile, or expired support account can preserve access
            long after the original need ends. Strong account governance
            reduces privilege, supports accountability, protects data, and
            improves incident response.
          </p>
        </SectionCard>

        <AccountTypeGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Account, Profile, Privilege, and Ownership Are Related but Different"
        >
          <p className="leading-8">
            The account identifies the security principal. The profile stores
            user-specific settings and data. Group membership and privilege
            determine authority. Ownership and lifecycle records explain why
            the account should exist. A complete review connects all four.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {[
              [
                "Account",
                "Who or what authenticates and receives access.",
              ],
              [
                "Profile",
                "Which user-specific data, settings, and application state remain.",
              ],
              [
                "Privilege",
                "What the identity can change or control.",
              ],
              [
                "Ownership",
                "Who approves, reviews, and remains responsible.",
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

        <ProfileGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Windows Identity and Profile Terms
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

        <LifecycleGuide />
        <EvidenceGuide />
        <ReviewWorkflowGuide />

        <FakeDashboardCard
          title="Fake Windows Account Governance Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services workstation fleet."
          metrics={[
            {
              label: "Enabled local accounts",
              value: "46",
              note: "Thirty-eight are standard users, four are administrators, two are service identities, and two are temporary support accounts.",
            },
            {
              label: "Accounts past expiration",
              value: "3",
              note: "Two temporary support accounts and one contractor account remain enabled after their approved end date.",
            },
            {
              label: "Orphaned profiles",
              value: "5",
              note: "Five profiles remain after account disablement and require retention, ownership, and transfer review.",
            },
          ]}
        />

        <FakeAlertCard
          title="Expired Support Account Retains Local Administrator Privilege"
          severity="High"
          time="10:36 AM"
          source="Fake Windows Identity Governance Monitor"
          details="The fictional account temp-support-17 expired eight days ago, remains enabled, belongs to the local Administrators group, and has a profile containing deployment notes. The support ticket is closed, and the listed owner confirms no current support need."
          recommendation="Preserve account, group, sign-in, profile, file ownership, service, scheduled-task, and ticket evidence; confirm no active dependency; then remove administrator membership, disable the account, transfer required data, and validate the device."
        />

        <FakeLogPanel
          title="Fake Windows Account Review Timeline"
          logs={[
            "09:58:00 INVENTORY device='training-win-04' role='staff-learning-workstation' owner='learning-ops'",
            "10:01:17 ACCOUNT name='temp-support-17' type='local' status='enabled'",
            "10:02:44 GROUP account='temp-support-17' membership='Administrators'",
            "10:05:03 LIFECYCLE expiration='8_days_ago' ticket='SUP-1042' ticket_status='closed'",
            "10:08:29 SIGNIN account='temp-support-17' last_success='12_days_ago' source='approved-support-console'",
            "10:12:11 PROFILE path='C:\\Users\\temp-support-17' size='1.8GB' contains='deployment-notes'",
            "10:18:52 SERVICE dependency='none_found'",
            "10:22:15 TASK dependency='none_found'",
            "10:27:40 OWNER current_need='false' data_transfer_required='true'",
            "10:36:09 CORRELATION finding='expired_admin_account_with_profile_data' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Account Decision Is Best Supported?"
          evidence={[
            "The fictional temporary support account expired eight days ago.",
            "The support ticket is closed.",
            "The listed owner confirms that no current support need remains.",
            "The account still belongs to the local Administrators group.",
            "No service or scheduled-task dependency appears in the supplied evidence.",
            "The profile contains deployment notes that may require transfer.",
            "The last successful sign-in came from the approved support console twelve days ago.",
          ]}
          question="What is the strongest next action?"
          options={[
            "Preserve evidence, transfer required profile data, remove administrator membership, disable the account through approved change, and validate sign-in, services, tasks, files, and logs.",
            "Delete the profile and account immediately without review.",
            "Leave the account enabled because the last sign-in came from an approved source.",
            "Give the account a new expiration date without an owner or ticket.",
          ]}
          bestAnswer={0}
          explanation="The lifecycle and dependency evidence support controlled removal, but required profile data must be preserved and transferred before deletion."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Windows Account Reviews"
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
          title="Complete a Fictional Windows Account-and-Profile Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Staff Workstation Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review twelve fictional Windows identities: standard users,
                administrators, service identities, temporary accounts,
                disabled accounts, and connected organizational accounts.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Classify every account by type and approved purpose.</li>
                <li>Record owner, status, privilege, groups, expiration, sign-in method, and last activity.</li>
                <li>Map each account to profiles, files, services, jobs, applications, and shares.</li>
                <li>Identify stale, shared, overprivileged, ownerless, expired, and orphaned items.</li>
                <li>Separate confirmed facts, likely explanations, gaps, and unsupported assumptions.</li>
                <li>Assign a risk priority and named owner.</li>
                <li>Write controlled disablement, transfer, retention, validation, and rollback steps.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional evidence. Do not inspect, disable,
            delete, reset, unlock, reassign, or modify any real account,
            profile, group, sign-in method, file, service, or task without
            explicit authorization.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Disabled Account Still Owns Important Project Files"
          scenario="A fictional former project lead's account is disabled, but hundreds of team files still list that account as owner. The project remains active, and the new team lead needs controlled access."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve ownership and access evidence, confirm the project owner, transfer ownership through approved change, validate group access, and retain or remove the profile according to policy.",
              outcome:
                "Best defensive choice. Ownership and continuity are corrected without re-enabling unnecessary sign-in.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Re-enable the former account permanently.",
              outcome:
                "Risky. Ownership can be transferred without restoring unnecessary access.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete all files owned by the disabled account.",
              outcome:
                "Unsafe. The files belong to an active project and require controlled transfer.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Service Identity Can Sign In Interactively"
          scenario="A fictional service identity runs an approved synchronization service but also has interactive sign-in rights and belongs to a broad local group. The technical owner is known."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve service and sign-in evidence, confirm exact dependencies, remove unnecessary interactive and group privilege through approved testing, and validate the service.",
              outcome:
                "Best defensive choice. The identity keeps only the access required for its service role.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Ignore the issue because the service is approved.",
              outcome:
                "Unsafe. Approved software does not justify unnecessary privilege.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the service identity immediately.",
              outcome:
                "Risky. The active service dependency must be preserved and tested.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Windows Account and Profile Review Checklist"
          items={[
            "I confirm the fictional device role, owner, scope, time window, and approved evidence sources.",
            "I classify every identity as standard, administrator, connected, service, temporary, disabled, or retired.",
            "I record owner, status, privilege, groups, expiration, sign-in method, profile path, and last activity.",
            "I map accounts to files, services, scheduled tasks, shares, applications, and organizational roles.",
            "I review profiles for required data, sensitive content, browser state, application data, and retention needs.",
            "I separate confirmed facts, likely explanations, alternate explanations, missing evidence, and unsupported claims.",
            "I identify stale, ownerless, shared, expired, overprivileged, and orphaned identities or profiles.",
            "I assign a named owner, exact approved action, validation, rollback, and review date.",
            "I preserve required data and transfer ownership before deletion or retirement.",
            "I use only fictional evidence and never publish real account, profile, sign-in, or ownership details.",
          ]}
        />

        <MiniQuiz
          title="I3.1 Mini Quiz: Windows Accounts and Profiles"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Windows Account and Profile Governance Report for twelve identities. Include account type, owner, purpose, status, privilege, local groups, expiration, sign-in method, last activity, profile path, profile data, services, tasks, file ownership, shares, lifecycle stage, finding, confidence, risk, owner, action, validation, rollback, and review date."
          tips={[
            "Use only fictional devices, usernames, groups, profile paths, sign-in records, tickets, and organizations.",
            "Include at least one standard user, administrator, connected account, service identity, temporary account, and retired account.",
            "Include one expired administrator, one orphaned profile, one service dependency, one file-ownership transfer, and one stale group membership.",
            "Do not include real usernames, device names, profile paths, identifiers, sign-in times, or internal records.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Windows accounts, profiles, privilege, group membership, ownership, and lifecycle must be reviewed together.",
            "An enabled account is not automatically valid, and an inactive account is not automatically safe to delete.",
            "Temporary and administrator accounts require named ownership, narrow privilege, expiration, and periodic review.",
            "Profiles may contain required files, application state, browser data, and sensitive content that must be handled carefully.",
            "Disabled accounts may still own files, services, scheduled tasks, or encrypted data.",
            "Strong recommendations preserve evidence, confirm dependencies, transfer required data, and validate controlled change.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I3
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