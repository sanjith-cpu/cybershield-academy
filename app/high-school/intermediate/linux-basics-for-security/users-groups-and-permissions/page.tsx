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
const modulePath = `${trackPath}/linux-basics-for-security`;
const previousLesson = `${modulePath}/files-directories-and-paths`;
const nextLesson = `${modulePath}/processes-and-services`;

const objectives = [
  "Explain Linux users, groups, ownership, primary groups, supplementary groups, and least-privilege access.",
  "Interpret symbolic permission strings for owner, group, and others without changing real systems.",
  "Connect account and permission evidence with approved roles, service needs, file sensitivity, and business purpose.",
  "Identify broad, stale, inherited, temporary, shared, and review-required access patterns.",
  "Recommend authorized permission corrections with dependency review, validation, rollback, and documentation.",
];

const vocabulary = [
  [
    "User account",
    "A named identity used by a person, service, application, or system process.",
  ],
  [
    "Group",
    "A collection of accounts used to organize shared access and responsibilities.",
  ],
  [
    "Primary group",
    "The default group associated with a user account.",
  ],
  [
    "Supplementary group",
    "An additional group that grants access beyond the primary group.",
  ],
  [
    "Owner",
    "The user account recorded as owning a file or directory.",
  ],
  [
    "Group owner",
    "The group associated with a file or directory for group-based access.",
  ],
  [
    "Read permission",
    "Permission to read file contents or list directory entries, depending on object type.",
  ],
  [
    "Write permission",
    "Permission to modify a file or create, remove, or rename entries within a directory, depending on context.",
  ],
  [
    "Execute permission",
    "Permission to run a file or traverse and access a directory path, depending on object type.",
  ],
  [
    "Least privilege",
    "Giving only the minimum access needed for an approved role and duration.",
  ],
  [
    "Service account",
    "A nonhuman account used by an application, background service, automation, or scheduled task.",
  ],
  [
    "Privileged account",
    "An account with elevated authority that requires strong controls, limited use, and detailed monitoring.",
  ],
];

const permissionGuide = [
  {
    string: "rwx------",
    meaning:
      "The owner can read, write, and execute; group and others have no access.",
    context:
      "Appropriate for highly private user or administrative content when the owner requires full control.",
  },
  {
    string: "rw-r-----",
    meaning:
      "The owner can read and write; the group can read; others have no access.",
    context:
      "Useful for confidential team files where the owner edits and an approved group reviews.",
  },
  {
    string: "rwxr-x---",
    meaning:
      "The owner has full access; the group can read and traverse; others have no access.",
    context:
      "May fit a shared service directory when group members need controlled use but not modification.",
  },
  {
    string: "rw-rw----",
    meaning:
      "The owner and group can read and write; others have no access.",
    context:
      "May fit collaborative team files when group membership is tightly governed.",
  },
  {
    string: "rwxrwxrwx",
    meaning:
      "Owner, group, and others all have full access.",
    context:
      "Extremely broad and rarely appropriate for sensitive or production content.",
  },
  {
    string: "r--r--r--",
    meaning:
      "Everyone can read; nobody can write or execute.",
    context:
      "May fit truly public reference material, but sensitivity and exposure still require review.",
  },
];

const accountTypes = [
  {
    type: "Standard user",
    purpose:
      "Supports normal interactive work with limited access to approved files, applications, and groups.",
    controls:
      "Named ownership, strong authentication, limited groups, no unnecessary elevation, review on role changes.",
  },
  {
    type: "Administrator",
    purpose:
      "Performs approved system management and security tasks.",
    controls:
      "Named account, MFA where supported, separate standard account, limited use, logging, and periodic review.",
  },
  {
    type: "Service account",
    purpose:
      "Runs one approved application, daemon, automation, or integration.",
    controls:
      "Noninteractive when possible, narrow permissions, owned by a team, rotated credentials, monitored use.",
  },
  {
    type: "Shared account",
    purpose:
      "Sometimes used by legacy systems or controlled operational workflows.",
    controls:
      "Avoid where possible; require documented owner, approved purpose, compensating logging, and retirement plan.",
  },
  {
    type: "Temporary account",
    purpose:
      "Supports time-limited maintenance, testing, training, or vendor work.",
    controls:
      "Approval, expiration date, limited groups, activity logging, and confirmed removal or disablement.",
  },
  {
    type: "Disabled or retired account",
    purpose:
      "Preserves historical ownership or audit context after active use ends.",
    controls:
      "No login, reviewed group memberships, transferred ownership, documented retention, and eventual cleanup.",
  },
];

const evidenceMatrix = [
  {
    source: "Account inventory",
    supports:
      "Account name, type, owner, status, shell, home directory, creation date, and lifecycle.",
    limitation:
      "Does not prove current activity, legitimate purpose, or all effective permissions.",
  },
  {
    source: "Group membership",
    supports:
      "Primary and supplementary groups associated with an account.",
    limitation:
      "Does not prove why membership exists, whether it is still needed, or which files it affects.",
  },
  {
    source: "File and directory metadata",
    supports:
      "Owner, group owner, symbolic permissions, timestamps, object type, and path.",
    limitation:
      "Does not prove the complete business purpose or every indirect access path.",
  },
  {
    source: "Service configuration",
    supports:
      "Which account a service uses and which paths or resources it requires.",
    limitation:
      "Does not prove every permission is necessary or correctly scoped.",
  },
  {
    source: "Authentication and activity logs",
    supports:
      "Login events, account use, failures, privilege events, and timestamps.",
    limitation:
      "Absence of events may reflect missing logs, inactive use, or limited retention.",
  },
  {
    source: "Role and change records",
    supports:
      "Approved job role, project need, owner, temporary access, review date, and removal plan.",
    limitation:
      "Does not prove the final technical state matches the approval.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Identify the identity",
    detail:
      "Record the fictional account name, type, owner, role, status, shell, home directory, and lifecycle.",
  },
  {
    step: "2",
    title: "Map group membership",
    detail:
      "Review primary and supplementary groups and connect each one to an approved responsibility.",
  },
  {
    step: "3",
    title: "Read ownership and permissions",
    detail:
      "Interpret owner, group owner, read, write, execute, directory traversal, and effective access context.",
  },
  {
    step: "4",
    title: "Compare with business need",
    detail:
      "Check job role, service dependency, data sensitivity, project duration, and approved baseline.",
  },
  {
    step: "5",
    title: "Find excess or stale access",
    detail:
      "Identify broad permissions, old groups, shared accounts, temporary access, unknown owners, or disabled users retaining access.",
  },
  {
    step: "6",
    title: "Recommend controlled correction",
    detail:
      "Document owner, impact, authorization, exact change, testing, validation, rollback, and review date.",
  },
];

const mistakes = [
  "Assuming account existence proves current business need.",
  "Removing a user from a group without checking service, project, and file dependencies.",
  "Treating rwxrwxrwx as convenient instead of recognizing extremely broad access.",
  "Ignoring directory execute permission and focusing only on read and write.",
  "Giving users permanent administrator access for occasional support tasks.",
  "Using shared accounts without ownership, logging, expiration, or accountability.",
  "Leaving temporary vendor or project accounts active after the approved end date.",
  "Changing ownership before preserving the original metadata and audit context.",
  "Assuming a disabled account cannot still own sensitive files or scheduled tasks.",
  "Publishing real usernames, groups, permissions, or internal paths in a portfolio.",
];

const quizQuestions = [
  {
    question:
      "What is the purpose of a Linux group?",
    choices: [
      "To organize shared access and responsibilities for multiple accounts.",
      "To replace every user account.",
      "To store only log files.",
      "To prove a file is safe.",
    ],
    answer: 0,
    explanation:
      "Groups make it possible to manage shared access according to approved roles.",
  },
  {
    question:
      "What does rw-r----- mean?",
    choices: [
      "The owner can read and write, the group can read, and others have no access.",
      "Everyone has full access.",
      "Only others can write.",
      "The file is executable by everyone.",
    ],
    answer: 0,
    explanation:
      "The three permission triplets represent owner, group, and others.",
  },
  {
    question:
      "Why is execute permission important on a directory?",
    choices: [
      "It controls the ability to traverse the directory path and access entries.",
      "It automatically runs every file inside.",
      "It changes the group owner.",
      "It proves the directory is public.",
    ],
    answer: 0,
    explanation:
      "Directory execute permission supports traversal rather than running the directory.",
  },
  {
    question:
      "Which account should normally have the narrowest permissions needed for one application?",
    choices: [
      "A service account.",
      "A shared administrator account.",
      "Every standard user.",
      "A disabled account.",
    ],
    answer: 0,
    explanation:
      "A service account should be limited to the exact resources needed by its application.",
  },
  {
    question:
      "What is the strongest evidence that group membership is still required?",
    choices: [
      "Current role, owner confirmation, resource dependency, and recent approved use reviewed together.",
      "The account was added years ago.",
      "The group name sounds important.",
      "The user remembers having access.",
    ],
    answer: 0,
    explanation:
      "Ongoing access should be supported by current business and technical evidence.",
  },
  {
    question:
      "A temporary support account remains enabled after its approved expiration. What is the strongest next step?",
    choices: [
      "Preserve status and activity evidence, confirm no current need remains, and request authorized disablement and group cleanup.",
      "Give it more groups so it remains useful.",
      "Publish the credentials for review.",
      "Ignore it because the account is not currently logged in.",
    ],
    answer: 0,
    explanation:
      "Expired access should be reviewed and removed through controlled account lifecycle management.",
  },
  {
    question:
      "Why should defenders review ownership as well as permissions?",
    choices: [
      "Ownership determines which user and group permission sets apply to the object.",
      "Ownership replaces all permissions.",
      "Ownership proves the user created the file.",
      "Ownership never changes.",
    ],
    answer: 0,
    explanation:
      "Effective access depends on both ownership and the permission bits.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>
      <Link
        href={modulePath}
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>
      <Link
        href={nextLesson}
        className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

function BottomNav() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Navigation
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Continue Module I2
      </h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: I2.2 Files, Directories, and Paths
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
          Next: I2.4 Processes and Services
        </Link>
      </div>
    </section>
  );
}

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

function PermissionGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Permission Reading
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Interpret Owner, Group, and Other Access
      </h2>

      <div className="mt-6 grid gap-4">
        {permissionGuide.map((item) => (
          <div
            key={item.string}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.45fr_1fr_1.2fr]"
          >
            <div className="rounded-xl border border-blue-400/30 bg-blue-400/10 p-4 font-mono text-lg font-black text-blue-100">
              {item.string}
            </div>
            <p className="text-sm leading-6 text-slate-300">{item.meaning}</p>
            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-sm leading-6 text-yellow-50">
              {item.context}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AccountTypeGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Account Types
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Different Identities Need Different Controls
      </h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {accountTypes.map((item) => (
          <div
            key={item.type}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.type}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>
            <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-50">
              <span className="font-bold">Defensive controls:</span>{" "}
              {item.controls}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceLimits() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Analysis
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        What Account and Permission Evidence Can and Cannot Prove
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

function ReviewWorkflow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Review Users, Groups, and Permissions in Six Steps
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

export default function UsersGroupsAndPermissionsPage() {
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
              Module I2
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 3 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I2.3 Users, Groups, and Permissions
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Analyze fictional Linux identities, group memberships, file
            ownership, read-write-execute permissions, service accounts,
            temporary access, and least-privilege decisions.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I2: Linux Basics for Security"
          lessonTitle="Users, Groups, and Permissions"
          lessonNumber={3}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain Linux paths, file metadata, owners, groups, and the approved system role.",
            "I understand that an account or group membership does not prove current business need by itself.",
            "I will preserve account, group, permission, ownership, activity, and change evidence before recommending changes.",
            "I will use only fictional users, groups, paths, services, logs, systems, and organizations.",
            "I will not create, disable, modify, elevate, or remove accounts or permissions on any real system.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Access Can Be Technically Valid and Still Be Too Broad, Stale, or Unowned"
        >
          <p className="leading-8">
            A user may belong to a group because of an old project. A service
            account may own files outside its approved application. A directory
            may grant write access to every local user because it was convenient
            during setup. Defenders compare the current technical state with
            role, ownership, sensitivity, duration, dependency, and least
            privilege.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The permission works, so leave it unchanged.”
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Confirm the identity, role, groups, ownership, effective
                access, business need, sensitivity, duration, and dependencies
                before recommending the narrowest safe access.”
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
          title="Identity and Permission Errors Can Expose Data or Break Services"
        >
          <p className="leading-8">
            Overly broad access may expose sensitive files, while overly narrow
            access may interrupt an approved application. Strong defenders
            balance confidentiality, integrity, availability, accountability,
            ownership, and operational dependencies.
          </p>
        </SectionCard>

        <AccountTypeGuide />
        <PermissionGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Effective Access Comes From Identity, Groups, Ownership, Permissions, and Context"
        >
          <p className="leading-8">
            A permission string cannot be interpreted correctly without knowing
            the object owner, group owner, account memberships, file type, path,
            service relationship, and approved purpose. Direct ownership,
            group-based access, directory traversal, and service behavior all
            contribute to what an account can actually do.
          </p>

          <div className="mt-5 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5 text-blue-50">
            <span className="font-bold">Intermediate habit:</span> ask “Which
            identity receives this permission, through which ownership or group
            relationship, for which approved task, and for how long?”
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Linux Identity and Permission Terms
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

        <EvidenceLimits />
        <ReviewWorkflow />

        <FakeDashboardCard
          title="Fake Linux Access Review Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services environment."
          metrics={[
            {
              label: "Active accounts",
              value: "27",
              note: "Standard users, administrators, service accounts, and one approved temporary account are listed.",
            },
            {
              label: "Expired temporary access",
              value: "2",
              note: "Two project accounts remain enabled beyond their approved end dates.",
            },
            {
              label: "Broad permission findings",
              value: "3",
              note: "One shared directory grants write access to all local users and two files have incorrect group ownership.",
            },
          ]}
        />

        <FakeAlertCard
          title="Expired Project Account Retains Write Access to Production Content"
          severity="High"
          time="02:36 PM"
          source="Fake Linux Access Governance Monitor"
          details="The fictional account temp-content-support expired seven days ago but remains enabled and still belongs to the web-content group. That group has write access to /srv/training-web/public. No current ticket, owner request, or approved extension is documented."
          recommendation="Preserve account, group, permission, ownership, activity, and project evidence; confirm that no active dependency remains; then request authorized account disablement and group removal with validation and rollback."
        />

        <FakeLogPanel
          title="Fake Account and Permission Evidence Timeline"
          logs={[
            "14:03:00 ACCOUNT user='temp-content-support' type='temporary' status='enabled'",
            "14:03:00 ACCOUNT_META owner='content-project' expiration='7_days_ago'",
            "14:05:22 GROUP user='temp-content-support' membership='web-content'",
            "14:07:14 PATH path='/srv/training-web/public' owner='deploy-user' group='web-content' permissions='rwxrwxr-x'",
            "14:11:39 ACTIVITY user='temp-content-support' last_login='12_days_ago' recent_file_changes='0'",
            "14:18:04 PROJECT status='complete' active_support_need='none'",
            "14:21:47 CHANGE approved_extension='none'",
            "14:27:15 OWNER_CONFIRMATION account_required='false'",
            "14:36:08 CORRELATION finding='expired_account_retains_production_write_access' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Access-Control Conclusion Is Best Supported?"
          evidence={[
            "The fictional account temp-content-support is classified as temporary.",
            "Its approved expiration was seven days ago.",
            "The account remains enabled and belongs to the web-content group.",
            "The web-content group has write access to the production public-content directory.",
            "The project is complete and the owner confirms no active support need.",
            "No approved extension or current dependency is documented.",
          ]}
          question="What is the strongest conclusion and next action?"
          options={[
            "The expired account retains unnecessary production write access; preserve evidence and request authorized disablement and group removal with validation and rollback.",
            "The account is definitely being used maliciously.",
            "Delete every file the group can access.",
            "Give the temporary account administrator access so it can be monitored more easily.",
          ]}
          bestAnswer={0}
          explanation="The evidence confirms stale access and an expired lifecycle. It does not prove malicious use, but it strongly supports controlled removal of unnecessary access."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Identity and Permission Review"
        >
          <div className="grid gap-3">
            {mistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Complete a Fictional Linux Access Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Learning Portal Access Matrix
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review fictional users, administrators, service accounts,
                temporary support accounts, groups, files, directories,
                permissions, owners, activity records, and project changes.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Classify each account by type, owner, role, status, and lifecycle.</li>
                <li>Map primary and supplementary groups to approved responsibilities.</li>
                <li>Interpret owner, group owner, and symbolic permissions.</li>
                <li>Identify broad, stale, temporary, shared, unknown, or unnecessary access.</li>
                <li>Check service dependencies and directory traversal requirements.</li>
                <li>Separate confirmed facts, likely explanations, and missing evidence.</li>
                <li>Write an authorized least-privilege correction and validation plan.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional records. Do not create, modify, disable,
            elevate, or remove accounts, groups, ownership, or permissions on
            any real Linux device, server, website, cloud system, or school
            computer.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Service Account Can Write to Every User Home Directory"
          scenario="A fictional backup service account needs read access to selected approved data paths but has group membership that also grants write access across all user home directories."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve group and dependency evidence, define the exact backup paths, and request a narrower authorized access model with testing and rollback.",
              outcome:
                "Best defensive choice. The current access exceeds the approved service purpose.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave broad write access because backup accounts are trusted.",
              outcome:
                "Unsafe. Service accounts should still follow least privilege.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable the backup account immediately without checking scheduled jobs.",
              outcome:
                "Risky. Removal without dependency review may interrupt recovery capability.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Disabled User Still Owns an Important Application Directory"
          scenario="A fictional former developer account is disabled but remains the owner of /opt/training-app. The active service runs under a separate service account and the ownership baseline expects the application team group."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve ownership and service evidence, confirm the approved owner and group, and request a controlled ownership correction with validation and rollback.",
              outcome:
                "Best defensive choice. Disabled accounts can still own important files and directories.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Re-enable the former developer account permanently.",
              outcome:
                "Unsupported. Ownership should be corrected rather than restoring unnecessary login access.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the application directory because the owner is disabled.",
              outcome:
                "Unsafe and destructive. The directory supports an active approved service.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Linux Users, Groups, and Permissions Review Checklist"
          items={[
            "I identify the account type, owner, role, status, shell, home directory, and lifecycle.",
            "I review primary and supplementary groups and connect each membership to an approved need.",
            "I record the object path, owner, group owner, type, and symbolic permissions.",
            "I interpret read, write, and execute differently for files and directories.",
            "I compare effective access with role, service dependency, data sensitivity, duration, and baseline.",
            "I identify broad, stale, temporary, shared, inherited, unknown, or unnecessary access.",
            "I preserve original ownership, permissions, memberships, activity, and change evidence.",
            "I separate confirmed facts, likely explanations, missing evidence, and unsupported assumptions.",
            "I recommend only authorized least-privilege changes with testing, validation, rollback, and review.",
            "I use fictional evidence and never inspect or publish real account or permission details.",
          ]}
        />

        <MiniQuiz
          title="I2.3 Mini Quiz: Users, Groups, and Permissions"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Linux Access Governance Matrix for a learning-portal environment. Include standard users, administrators, service accounts, temporary support accounts, shared legacy accounts, groups, important files and directories, ownership, symbolic permissions, approved purpose, expiration, activity evidence, risk, and recommended action."
          tips={[
            "Use only fictional users, groups, paths, services, systems, logs, and organizations.",
            "Include one expired temporary account, one overprivileged service account, one disabled owner, and one broadly writable directory.",
            "Explain the effective access path for each major finding.",
            "Do not include real usernames, groups, permissions, home directories, credentials, or production details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Linux access depends on users, groups, ownership, symbolic permissions, object type, path, and context.",
            "Read, write, and execute permissions behave differently for files and directories.",
            "Service and privileged accounts require narrow scope, named ownership, logging, and periodic review.",
            "Temporary, shared, disabled, and stale accounts can retain meaningful access.",
            "Least privilege balances security with approved operational dependencies.",
            "Safe corrections preserve evidence and use authorization, testing, validation, rollback, and documentation.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}