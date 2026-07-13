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
const previousLesson = `${modulePath}/windows-accounts-and-profiles`;
const nextLesson = `${modulePath}/windows-updates-and-security-settings`;

const objectives = [
  "Explain how Windows file and folder permissions, ownership, inheritance, local groups, and shared-folder access work together.",
  "Distinguish explicit permissions, inherited permissions, allow entries, deny entries, ownership, share permissions, and effective access.",
  "Evaluate fictional access using data classification, approved role, owner, business need, group membership, and least privilege.",
  "Identify broad, stale, duplicate, inherited, conflicting, and ownerless access without changing real systems.",
  "Create a professional permission-review report with findings, confidence, owners, controlled corrections, validation, rollback, and review dates.",
];

const vocabulary = [
  [
    "Permission",
    "A rule that allows or restricts actions such as reading, writing, modifying, deleting, or changing access.",
  ],
  [
    "Ownership",
    "The recorded relationship between an account and a file or folder, often affecting who can change permissions.",
  ],
  [
    "Inheritance",
    "The process by which a child file or folder receives permissions from a parent folder.",
  ],
  [
    "Explicit permission",
    "A permission applied directly to a specific file or folder rather than inherited from a parent.",
  ],
  [
    "Effective access",
    "The final access result after relevant user, group, inherited, explicit, allow, deny, and sharing rules are considered.",
  ],
  [
    "Share permission",
    "An access rule applied when a folder is reached through a network share.",
  ],
  [
    "Local permission",
    "An access rule applied directly to files or folders on the Windows device.",
  ],
  [
    "Security principal",
    "A user, group, service identity, or other identity to which access rules can be assigned.",
  ],
  [
    "Least privilege",
    "The practice of granting only the access required for an approved task and no more.",
  ],
  [
    "Access control entry",
    "A specific rule that assigns permissions to a user or group.",
  ],
  [
    "Broad access",
    "Access granted to a large group or population beyond the narrow approved need.",
  ],
  [
    "Stale access",
    "Access that remains after the original role, project, owner, or business need has ended.",
  ],
];

const permissionLevels = [
  {
    level: "Read",
    meaning:
      "Allows viewing file contents, folder listings, and basic metadata under the applicable conditions.",
    risk:
      "Sensitive information may be exposed even when users cannot modify it.",
    defenderQuestion:
      "Does this role need to view this data, and is the classification appropriate for the audience?",
  },
  {
    level: "Write",
    meaning:
      "Allows creating or changing content within the scope of the granted permission.",
    risk:
      "Users may alter data, introduce unsafe files, or create integrity and accountability problems.",
    defenderQuestion:
      "Does the role need to create or update content, or would read-only access be enough?",
  },
  {
    level: "Modify",
    meaning:
      "Typically includes reading, writing, changing, and deleting content.",
    risk:
      "Deletion and broad content changes can cause data loss or operational disruption.",
    defenderQuestion:
      "Is deletion required for the approved workflow, and are backups and ownership clear?",
  },
  {
    level: "Full control",
    meaning:
      "Allows broad use of the resource and may include changing permissions or ownership.",
    risk:
      "Excessive control can allow access expansion, permission changes, and destructive actions.",
    defenderQuestion:
      "Why is this level necessary, and can a narrower role-based permission replace it?",
  },
  {
    level: "Deny",
    meaning:
      "Explicitly blocks an action under the relevant permission calculation.",
    risk:
      "Deny entries can create confusing and unexpected results when users belong to multiple groups.",
    defenderQuestion:
      "Is the deny rule necessary, documented, and tested against all required roles?",
  },
  {
    level: "Special permissions",
    meaning:
      "Granular combinations controlling specific actions such as listing, reading attributes, deleting, or changing permissions.",
    risk:
      "Complex entries can be difficult to review and may hide unintended access paths.",
    defenderQuestion:
      "Can the design be simplified into clear role-based groups and standard permission sets?",
  },
];

const inheritanceConcepts = [
  {
    title: "Parent-to-child inheritance",
    detail:
      "A child file or folder may receive access rules from its parent, creating consistent permission structures.",
    evidence:
      "Parent path, inherited entries, inheritance state, and any child-level exceptions.",
  },
  {
    title: "Inheritance disabled",
    detail:
      "A child object may stop receiving future parent changes and keep or remove previously inherited entries.",
    evidence:
      "Inheritance status, conversion history, explicit entries, owner, and change record.",
  },
  {
    title: "Explicit exception",
    detail:
      "A directly assigned rule may create more or less access than the parent design.",
    evidence:
      "Specific user or group entry, permission level, approver, purpose, expiration, and review date.",
  },
  {
    title: "Nested groups",
    detail:
      "A user may receive access indirectly through one group that belongs to another group.",
    evidence:
      "Complete group path, role ownership, current membership, and effective-access calculation.",
  },
  {
    title: "Conflicting entries",
    detail:
      "Users may receive permissions from multiple groups, explicit rules, inherited rules, or deny entries.",
    evidence:
      "All applicable entries, membership paths, share access, local access, and final effective result.",
  },
  {
    title: "Moved or copied objects",
    detail:
      "Permission behavior may change depending on destination, method, ownership, and inheritance.",
    evidence:
      "Original path, destination, operation type, resulting permissions, owner, and validation results.",
  },
];

const sharingModels = [
  {
    model: "Local-only folder",
    accessPath:
      "Used directly on the Windows device by local users, applications, or services.",
    review:
      "Check local ownership, inherited and explicit permissions, profile or application need, and data classification.",
  },
  {
    model: "Network-shared folder",
    accessPath:
      "Reached through a share name from another authorized device or user.",
    review:
      "Check both share permissions and local file permissions, network scope, group access, owner, logging, and business purpose.",
  },
  {
    model: "Team project share",
    accessPath:
      "Used by a defined project, class, department, or operational team.",
    review:
      "Check role groups, project dates, owners, stale members, read versus modify needs, and offboarding.",
  },
  {
    model: "Public or broad internal share",
    accessPath:
      "Available to a large internal population or all authenticated users.",
    review:
      "Confirm classification, intended audience, write restrictions, monitoring, and whether broad access is still justified.",
  },
  {
    model: "Administrative share or protected location",
    accessPath:
      "Used for approved management, deployment, support, or system operations.",
    review:
      "Check administrator scope, separate support identities, logging, time-bounded access, and business owner approval.",
  },
  {
    model: "Application data folder",
    accessPath:
      "Used by a service, application, scheduled task, or system component.",
    review:
      "Check service identity, executable path, required permissions, user access, backup, update, and dependency evidence.",
  },
];

const evidenceMatrix = [
  {
    source: "Permission list",
    supports:
      "Users, groups, inherited entries, explicit entries, allow or deny rules, and assigned permission levels.",
    limitation:
      "Does not prove current business need, complete group nesting, or network-share effects.",
  },
  {
    source: "Ownership metadata",
    supports:
      "Which identity is recorded as owner and may have authority to manage access.",
    limitation:
      "Does not prove the owner is current, appropriate, or actively responsible.",
  },
  {
    source: "Group membership",
    supports:
      "Direct and indirect role membership that may grant access.",
    limitation:
      "Does not prove the role remains approved or that every nested group is visible in one record.",
  },
  {
    source: "Share configuration",
    supports:
      "Share name, allowed users or groups, access level, network scope, and availability.",
    limitation:
      "Does not prove the final local file permission or actual business need.",
  },
  {
    source: "Effective-access result",
    supports:
      "The calculated access outcome for a specific identity under the reviewed conditions.",
    limitation:
      "May not include application-level controls, offline copies, alternate paths, or future group changes.",
  },
  {
    source: "File and folder classification",
    supports:
      "Expected sensitivity, handling requirements, owner, retention, and approved audience.",
    limitation:
      "Labels may be missing, outdated, or inconsistent with actual content.",
  },
  {
    source: "Usage and audit records",
    supports:
      "Observed access, modification, deletion, sharing, or ownership activity under available logging.",
    limitation:
      "Absence of recorded use does not prove no access occurred or no future need exists.",
  },
  {
    source: "Owner and project records",
    supports:
      "Approved purpose, role groups, project dates, owner, expiration, and review requirements.",
    limitation:
      "Documentation may be stale or may not match the technical permission state.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define resource and purpose",
    detail:
      "Identify the fictional path, owner, classification, application or project role, and approved audience.",
  },
  {
    step: "2",
    title: "Collect permission evidence",
    detail:
      "Record ownership, inherited and explicit entries, group membership, share permissions, and effective access.",
  },
  {
    step: "3",
    title: "Map access paths",
    detail:
      "Connect direct users, nested groups, services, applications, network shares, alternate paths, and profile locations.",
  },
  {
    step: "4",
    title: "Compare with approved need",
    detail:
      "Check whether each user or group needs read, write, modify, full control, or no access.",
  },
  {
    step: "5",
    title: "Classify findings",
    detail:
      "Separate confirmed broad access, stale access, inheritance problems, owner gaps, evidence gaps, and unsupported claims.",
  },
  {
    step: "6",
    title: "Plan controlled correction",
    detail:
      "Assign an owner, preserve evidence, test the change, define rollback, validate applications and users, and document the new baseline.",
  },
];

const commonMistakes = [
  "Reviewing only one permission entry instead of the complete effective-access path.",
  "Ignoring nested group membership.",
  "Checking only share permissions and not local file permissions.",
  "Assuming inherited permissions are correct because they came from a parent folder.",
  "Adding explicit deny entries without understanding their effect on multiple groups.",
  "Granting full control when modify or read access would be enough.",
  "Assigning access directly to many users instead of using clear role-based groups.",
  "Removing access without checking service, application, scheduled-task, backup, or workflow dependencies.",
  "Treating no recent access as proof that the permission is unnecessary.",
  "Leaving project groups unchanged after team membership or project dates change.",
  "Changing ownership without documenting the responsible business owner.",
  "Publishing real paths, usernames, group names, permission lists, or internal share names in a portfolio.",
];

const quizQuestions = [
  {
    question:
      "What is effective access?",
    choices: [
      "The final access result after relevant user, group, inherited, explicit, allow, deny, and share rules are considered.",
      "Only the permission shown on the parent folder.",
      "Only the user's direct permission entry.",
      "Only the share permission.",
    ],
    answer: 0,
    explanation:
      "Effective access reflects the combined result of all relevant access paths.",
  },
  {
    question:
      "Why can inherited permissions create risk?",
    choices: [
      "Broad parent access may automatically spread to sensitive child folders.",
      "Inheritance always deletes ownership.",
      "Inherited permissions cannot be reviewed.",
      "Inheritance prevents group use.",
    ],
    answer: 0,
    explanation:
      "Inheritance is useful, but overly broad parent access can propagate unexpectedly.",
  },
  {
    question:
      "What should be reviewed for a network-shared folder?",
    choices: [
      "Both share permissions and local file permissions, plus groups, classification, owner, and purpose.",
      "Only the share name.",
      "Only the network address.",
      "Only the folder owner.",
    ],
    answer: 0,
    explanation:
      "Network access depends on multiple permission layers and business context.",
  },
  {
    question:
      "Why is direct user-by-user access usually harder to manage than role-based group access?",
    choices: [
      "Individual entries are harder to review, update, recertify, and remove consistently.",
      "Groups cannot receive permissions.",
      "Users cannot belong to groups.",
      "Direct access is always denied.",
    ],
    answer: 0,
    explanation:
      "Role-based groups improve consistency, ownership, and lifecycle review.",
  },
  {
    question:
      "A user has not opened a project folder recently. What is the strongest conclusion?",
    choices: [
      "Recent usage appears low, but role, project need, future work, and owner confirmation still require review.",
      "The access is definitely malicious.",
      "The user has no effective access.",
      "The folder can be deleted.",
    ],
    answer: 0,
    explanation:
      "Usage evidence is useful but does not prove the future business need.",
  },
  {
    question:
      "Which evidence best supports removing write access from a broad staff group?",
    choices: [
      "The folder is classified internal, only one project team edits it, staff only need read access, and the owner approves role-based modification.",
      "The folder name looks old.",
      "One user forgot the path.",
      "The group has many members.",
    ],
    answer: 0,
    explanation:
      "Classification, approved need, role separation, and owner approval support a controlled least-privilege change.",
  },
  {
    question:
      "What should happen after changing folder permissions?",
    choices: [
      "Validate required user, group, service, application, backup, and network access, then document the new baseline.",
      "Delete all previous evidence.",
      "Assume every dependency still works.",
      "Remove the owner.",
    ],
    answer: 0,
    explanation:
      "Post-change validation confirms the correction did not break approved use.",
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

function PermissionLevelGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Permission Levels
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Match Access Level to Approved Need
      </h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {permissionLevels.map((item) => (
          <div
            key={item.level}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{item.level}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>

            <div className="mt-4 rounded-xl border border-red-400/30 bg-red-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
                Main risk
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.risk}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Defender question
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.defenderQuestion}
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
        Inheritance and Exceptions
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow the Complete Permission Path
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {inheritanceConcepts.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>
            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Review evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.evidence}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SharingGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Folder Models
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Different Shared Resources Need Different Reviews
      </h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {sharingModels.map((item) => (
          <div
            key={item.model}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.model}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.accessPath}
            </p>
            <div className="mt-4 rounded-xl border border-blue-400/30 bg-blue-400/10 p-4 text-sm leading-6 text-blue-50">
              {item.review}
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
        Evidence Analysis
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        What Permission Evidence Can and Cannot Prove
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

function WorkflowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Complete a Permission Review in Six Steps
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

export default function FilePermissionsAndSharedFoldersPage() {
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
              Lesson 2 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I3.2 File Permissions and Shared Folders
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Review fictional Windows files, folders, shares, owners, groups,
            inherited rules, explicit rules, effective access, classification,
            and business need using least-privilege principles.
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
          lessonTitle="File Permissions and Shared Folders"
          lessonNumber={2}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand Windows accounts, groups, profiles, ownership, lifecycle, and least privilege.",
            "I can distinguish a direct permission from access received through a group.",
            "I will preserve ownership, inheritance, group, share, classification, and effective-access evidence before recommending changes.",
            "I will use only fictional files, folders, shares, users, groups, devices, paths, projects, and organizations.",
            "I will not inspect, access, share, move, delete, or modify any real file or permission without explicit authorization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Folder Can Look Private While Still Being Broadly Accessible"
        >
          <p className="leading-8">
            A user may gain access through a direct entry, inherited rule,
            nested group, local group, share permission, application identity,
            or administrative role. Defenders must follow the complete access
            path rather than trusting one visible permission.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The folder lists only the project group, so access must be correct.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Review ownership, inheritance, explicit entries, nested groups,
                share access, effective access, classification, and approved need.”
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
          title="Permissions Protect Confidentiality, Integrity, and Availability"
        >
          <p className="leading-8">
            Read access affects confidentiality. Write, modify, and delete
            access affect integrity and availability. Full control can also
            change who receives access. A clear permission model protects data
            while preserving legitimate work.
          </p>
        </SectionCard>

        <PermissionLevelGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Effective Access Is the Result of Multiple Layers"
        >
          <p className="leading-8">
            A user's final access may depend on direct entries, inherited
            entries, local groups, nested groups, explicit deny rules, share
            permissions, application controls, and the path used to reach the
            resource. No single line tells the complete story.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-5">
            {[
              ["Identity", "Which user, group, or service is requesting access?"],
              ["Path", "Which local, shared, linked, or application path is used?"],
              ["Rules", "Which explicit, inherited, allow, and deny entries apply?"],
              ["Purpose", "What approved role or workflow requires access?"],
              ["Result", "What can the identity actually do under the reviewed conditions?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <InheritanceGuide />
        <SharingGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Windows Permission and Sharing Terms
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

        <EvidenceGuide />
        <WorkflowGuide />

        <FakeDashboardCard
          title="Fake Windows Permission Governance Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook Learning Services shared-resource environment."
          metrics={[
            {
              label: "Shared folders reviewed",
              value: "28",
              note: "Twelve project shares, six department shares, four application folders, and six broad internal shares.",
            },
            {
              label: "Broad write-access findings",
              value: "5",
              note: "Five folders allow modification by groups larger than the approved editing population.",
            },
            {
              label: "Ownerless permission exceptions",
              value: "7",
              note: "Seven explicit user or group entries have no current owner, expiration, or change record.",
            },
          ]}
        />

        <FakeAlertCard
          title="Internal Deployment Folder Writable by Broad Staff Group"
          severity="High"
          time="02:18 PM"
          source="Fake Windows Access Governance Monitor"
          details="The fictional share \\training-files\deployment-notes is classified internal. The Deployment Editors group needs modify access, but the All Staff group receives inherited modify access from the parent share. The owner confirms that general staff should have read-only access."
          recommendation="Preserve ownership, inheritance, group, share, effective-access, classification, and usage evidence; test a role-based permission correction; remove broad modify access through approved change; and validate editor, reader, service, backup, and application workflows."
        />

        <FakeLogPanel
          title="Fake Windows Shared-Folder Review Timeline"
          logs={[
            "13:41:00 RESOURCE path='\\\\training-files\\deployment-notes' classification='internal' owner='deployment-ops'",
            "13:44:19 SHARE group='All Staff' permission='Change'",
            "13:46:02 LOCAL inherited_group='All Staff' permission='Modify' source='D:\\Shared'",
            "13:47:51 LOCAL explicit_group='Deployment Editors' permission='Modify'",
            "13:50:14 GROUP nested_member='Contractor Team' parent='All Staff'",
            "13:53:28 EFFECTIVE user='sample-contractor' access='Modify'",
            "13:58:43 OWNER intended_editors='Deployment Editors' intended_readers='All Staff'",
            "14:03:10 USAGE staff_modifications='0' editor_modifications='42'",
            "14:09:26 CHANGE test_group='Deployment Editors' validation='passed'",
            "14:18:05 CORRELATION finding='broad_inherited_modify_access' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Permission Decision Is Best Supported?"
          evidence={[
            "The fictional folder is classified internal.",
            "The Deployment Editors group needs modify access.",
            "The All Staff group should have read-only access.",
            "All Staff currently receives modify access through both share and inherited local permissions.",
            "A contractor group is nested inside All Staff.",
            "Usage records show no general-staff modification activity.",
            "The owner approves a role-based correction and the editor test passes.",
          ]}
          question="What is the strongest next action?"
          options={[
            "Preserve evidence, change All Staff to read-only at the required layers, retain modify for Deployment Editors, validate nested groups, services, backups, and applications, and document the new baseline.",
            "Delete the shared folder.",
            "Remove all access from every group.",
            "Leave the permissions unchanged because no misuse is recorded.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports a least-privilege correction that preserves approved readers and editors while removing broad write capability."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Permission Reviews"
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
          title="Complete a Fictional Windows Permission Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Northstar Shared Resource Assessment
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review twelve fictional folders across project, department,
                public-internal, application, administrative, and local-user
                use cases.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Record path, owner, classification, purpose, and approved audience.</li>
                <li>List inherited and explicit permissions.</li>
                <li>Map direct users, nested groups, services, applications, and shares.</li>
                <li>Calculate fictional effective access for selected identities.</li>
                <li>Identify broad, stale, duplicate, conflicting, and ownerless entries.</li>
                <li>Assign risk, confidence, owner, expiration, and review date.</li>
                <li>Write a tested correction, rollback, validation, and baseline-update plan.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not open, share, move,
            delete, encrypt, copy, or change permissions on any real file,
            folder, share, device, account, or service without explicit
            authorization.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Project Ended but Its Write Group Still Exists"
          scenario="A fictional project share remains available after project completion. The Project Editors group still has modify access, but no current project owner is assigned and retention rules require the data to remain read-only for one year."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve permission and ownership evidence, assign a retention owner, remove modify access through approved change, keep authorized read-only access, validate backups, and schedule final review.",
              outcome:
                "Best defensive choice. The data remains available while unnecessary write access is removed.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete the entire share immediately.",
              outcome:
                "Unsafe. Retention requirements still apply.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Leave modify access because the data is no longer active.",
              outcome:
                "Weak governance. Inactive data still needs least privilege and ownership.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Service Stops Working After a Permission Change"
          scenario="A fictional application service can no longer write to its approved data folder after broad user permissions are reduced. The service identity's exact required access was not tested before the change."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the failure and change evidence, use the approved rollback if needed, identify the service identity's exact access, test a narrow service-specific permission, and validate the application.",
              outcome:
                "Best defensive choice. The human-access correction is preserved while the required service dependency is restored narrowly.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Restore full control to all users.",
              outcome:
                "Unsafe. Broad access is not required to fix the service dependency.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable the application permanently.",
              outcome:
                "Unsupported. A controlled permission correction may restore service safely.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Windows File Permission and Shared Folder Checklist"
          items={[
            "I confirm the fictional path, owner, classification, purpose, application role, and approved audience.",
            "I record ownership, inherited entries, explicit entries, allow rules, deny rules, and inheritance state.",
            "I map direct users, local groups, nested groups, service identities, applications, and network shares.",
            "I review both share permissions and local file permissions.",
            "I calculate effective access for selected identities under the supplied conditions.",
            "I compare read, write, modify, full control, and special permissions with approved need.",
            "I identify broad, stale, duplicate, conflicting, ownerless, and undocumented access.",
            "I preserve service, backup, application, project, and retention dependencies before change.",
            "I assign an owner, exact approved correction, test, rollback, validation, and review date.",
            "I use only fictional evidence and never publish real paths, users, groups, shares, or permission lists.",
          ]}
        />

        <MiniQuiz
          title="I3.2 Mini Quiz: File Permissions and Shared Folders"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Windows File Permission and Shared Folder Review for twelve resources. Include path, owner, classification, purpose, approved audience, local permissions, share permissions, inheritance, explicit entries, groups, nested groups, service identities, effective access, usage, finding, confidence, risk, owner, correction, test, rollback, validation, and review date."
          tips={[
            "Use only fictional devices, paths, share names, users, groups, services, applications, and organizations.",
            "Include one broad inherited permission, one nested-group issue, one stale project group, one service dependency, and one ownerless exception.",
            "Show the difference between share permissions and local file permissions.",
            "Do not include real folder names, internal share paths, usernames, group names, or permission screenshots.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Windows effective access depends on users, groups, inheritance, explicit rules, deny rules, ownership, and sharing layers.",
            "Read, write, modify, and full control create different confidentiality, integrity, and availability risks.",
            "Inherited permissions are efficient but can spread broad access into sensitive child folders.",
            "Network shares require review of both share permissions and local file permissions.",
            "Role-based group access is easier to govern than many direct user entries.",
            "Strong corrections preserve dependencies, use least privilege, validate approved workflows, and document the new baseline.",
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