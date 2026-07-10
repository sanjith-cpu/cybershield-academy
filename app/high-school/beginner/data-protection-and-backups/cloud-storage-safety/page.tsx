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

const modulePath =
  "/high-school/beginner/data-protection-and-backups";
const previousLesson =
  `${modulePath}/file-organization-and-data-classification-basics`;
const nextLesson =
  `${modulePath}/backup-types-and-recovery-goals`;

const vocab = [
  [
    "Cloud storage",
    "A service that stores files on remote systems so approved users can access, synchronize, share, and recover them through trusted accounts.",
  ],
  [
    "Sharing permission",
    "The level of access granted to another person, such as view, comment, edit, download, or manage.",
  ],
  [
    "Public link",
    "A sharing link that may allow anyone who receives it to access the content, depending on the service settings.",
  ],
  [
    "Synchronization",
    "The process of keeping file changes consistent across connected devices and cloud storage.",
  ],
  [
    "Version history",
    "A record of earlier file versions that may help review changes and restore trusted content.",
  ],
  [
    "Account recovery",
    "An approved process used to regain access to a cloud account when normal sign-in is unavailable.",
  ],
];

const cloudStages = [
  {
    title: "Verify the account",
    example:
      "Use the correct trusted account, confirm ownership, and protect sign-in and recovery settings.",
  },
  {
    title: "Review access",
    example:
      "Check who can view, comment, edit, download, reshare, or manage the file or folder.",
  },
  {
    title: "Control sharing",
    example:
      "Use specific approved people instead of broad public links whenever the data is not public.",
  },
  {
    title: "Prepare for recovery",
    example:
      "Use version history, protected backups, recovery contacts, and clear ownership.",
  },
];

const cloudRows = [
  {
    item: "Private research folder",
    source: "Anyone with the link can edit and reshare",
    review:
      "Remove broad access, invite approved users directly, and limit editing by role.",
  },
  {
    item: "Public club flyer",
    source: "Approved for broad release with view-only access",
    review:
      "Public sharing may be appropriate after confirming the final approved version.",
  },
  {
    item: "Shared project document",
    source: "Former team member still has edit access",
    review:
      "Remove outdated access and verify the current approved team.",
  },
  {
    item: "Cloud sync conflict",
    source: "Two devices created different versions of the same file",
    review:
      "Compare version history, identify the trusted copy, and preserve both until verified.",
  },
  {
    item: "Recovery settings",
    source: "Account depends on an outdated recovery email",
    review:
      "Update recovery through the official account process and verify trusted contact information.",
  },
];

const mistakes = [
  "Using anyone-with-the-link access for private or sensitive files.",
  "Giving edit access when view-only access is enough.",
  "Leaving former classmates, club members, or staff on shared folders.",
  "Assuming cloud synchronization is the same as a complete backup.",
  "Deleting files during a sync conflict before identifying the trusted version.",
  "Using an unofficial sign-in or recovery link from an unexpected message.",
];

const quizQuestions = [
  {
    question: "What is the safest way to share a private cloud file?",
    choices: [
      "Invite specific approved people and give the minimum access they need.",
      "Create a public edit link.",
      "Post the file link in a public chat.",
      "Give everyone account-management access.",
    ],
    answer: 0,
    explanation:
      "Specific users and minimum permissions reduce unnecessary exposure and editing risk.",
  },
  {
    question: "What does synchronization do?",
    choices: [
      "Keeps file changes consistent across connected devices and cloud storage.",
      "Guarantees every deleted file can always be recovered.",
      "Replaces all backups.",
      "Makes every file public.",
    ],
    answer: 0,
    explanation:
      "Synchronization copies changes across connected locations, including mistakes or deletions.",
  },
  {
    question: "What should happen when a former team member still has edit access?",
    choices: [
      "Remove outdated access and review the current approved users.",
      "Leave the access active forever.",
      "Make the folder public.",
      "Give the former member management access.",
    ],
    answer: 0,
    explanation:
      "Access should be reviewed as roles and membership change.",
  },
  {
    question: "Why is version history useful?",
    choices: [
      "It can help identify and restore an earlier trusted version of a file.",
      "It replaces account security.",
      "It prevents every possible mistake.",
      "It removes the need for ownership.",
    ],
    answer: 0,
    explanation:
      "Version history supports integrity and recovery after accidental or unauthorized changes.",
  },
  {
    question: "What is safest for cloud account recovery?",
    choices: [
      "Use the official service and verified recovery settings.",
      "Use a random link from an unexpected message.",
      "Share an MFA code with a stranger.",
      "Post the recovery code publicly.",
    ],
    answer: 0,
    explanation:
      "Recovery should occur only through the trusted cloud service and approved account process.",
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
        href="/high-school/beginner"
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Beginner Track
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B11</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B11.3 File Organization and Data Classification Basics
        </Link>
        <Link
          href={modulePath}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Back to Module
        </Link>
        <Link
          href="/high-school/beginner"
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Beginner Track
        </Link>
        <Link
          href={nextLesson}
          className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Next: B11.5 Backup Types and Recovery Goals
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

function CloudFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Cloud Storage Safety Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Safe cloud use connects account security, limited permissions, careful
        sharing, version control, synchronization, and recovery planning.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {cloudStages.map((stage, index) => (
          <div
            key={stage.title}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-black text-white">{stage.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {stage.example}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
        <span className="font-bold">Defender rule:</span> cloud storage can
        improve access and recovery, but broad sharing and synchronization can
        spread mistakes quickly.
      </div>
    </section>
  );
}

function FakeCloudPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Cloud Sharing and Recovery Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares public links, specific-user sharing,
            permissions, synchronization, version history, and recovery
            settings.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {cloudRows.map((row) => (
          <div
            key={row.item}
            className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 md:grid-cols-[0.8fr_1fr_1.4fr]"
          >
            <p className="font-bold text-cyan-100">{row.item}</p>
            <p className="text-slate-300">{row.source}</p>
            <p className="text-sm font-semibold text-yellow-100">{row.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PermissionBoard() {
  const areas = [
    {
      name: "View",
      saferQuestion:
        "Does the person only need to read the file without changing or resharing it?",
      saferChoice:
        "Use view-only access and disable unnecessary download or resharing options when available.",
    },
    {
      name: "Comment",
      saferQuestion:
        "Does the person need to give feedback without directly changing the content?",
      saferChoice:
        "Use comment access rather than full editing.",
    },
    {
      name: "Edit",
      saferQuestion:
        "Does the person need to change the content as part of an approved role?",
      saferChoice:
        "Give edit access only to current trusted contributors and review changes through version history.",
    },
    {
      name: "Manage",
      saferQuestion:
        "Does the person need control over membership, sharing, deletion, and ownership settings?",
      saferChoice:
        "Reserve management privileges for the smallest number of authorized owners or administrators.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Cloud Permission Board
      </h2>
      <p className="mt-3 text-slate-300">
        Cloud permissions should match the task instead of giving every user the
        same level of control.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {areas.map((area) => (
          <div
            key={area.name}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{area.name}</h3>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Review question
              </p>
              <p className="mt-2 text-sm">{area.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Safer choice
              </p>
              <p className="mt-2 text-sm">{area.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CloudStorageSafetyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Beginner
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module B11
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 4 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B11.4 Cloud Storage Safety
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how cloud accounts, sharing links, permissions,
            synchronization, version history, recovery settings, and ownership
            affect confidentiality, integrity, availability, and recovery.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B11: Data Protection and Backups"
          lessonTitle="Cloud Storage Safety"
          lessonNumber={4}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that cloud storage improves access but can also spread sharing mistakes and deletions.",
            "I will use fictional accounts, files, folders, users, links, permissions, devices, and recovery settings only.",
            "I am ready to compare view, comment, edit, manage, synchronization, versioning, and recovery decisions.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="One Link Can Change Who Can Access an Entire Folder"
        >
          <p className="leading-8">
            A cloud folder may contain months of work and several different
            kinds of data. One broad sharing link, outdated member, or incorrect
            permission can expose, alter, delete, or reshare many files at once.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every account,
            file, folder, user, link, service, device, and recovery setting in
            this lesson is fictional. Never change real cloud permissions or
            account recovery settings without permission.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain cloud storage, public links, permissions, synchronization, version history, and account recovery.",
            "Recognize broad sharing, excessive permissions, outdated users, sync conflicts, and weak recovery settings.",
            "Choose safer sharing, access, version, ownership, recovery, and verification decisions.",
          ].map((objective) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Learning Objective
              </p>
              <p className="mt-3 font-semibold">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Cloud Convenience Can Magnify Mistakes"
        >
          <p className="leading-8">
            Cloud storage makes collaboration and access easier, but changes can
            synchronize quickly across devices. A wrong deletion, incorrect
            permission, or public link may affect every connected user before
            the mistake is noticed.
          </p>
        </SectionCard>

        <CloudFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Share With People, Not With the Entire Internet"
        >
          <p className="leading-8">
            For nonpublic data, invite specific approved users and give each
            person only the access required for the task. Public links should be
            used only when the data owner has intentionally approved broad
            release.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Cloud Storage Safety
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocab.map(([term, definition]) => (
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

        <PermissionBoard />
        <FakeCloudPanel />

        <FakeDashboardCard
          title="Fake Cloud Storage Safety Dashboard"
          subtitle="Training dashboard using fictional accounts, folders, links, permissions, synchronization, version, and recovery evidence."
          metrics={[
            {
              label: "Cloud folders reviewed",
              value: "16",
              note: "Fictional school, club, family, and project storage.",
            },
            {
              label: "Access issues",
              value: "9",
              note: "Public links, excessive editing, outdated members, and unclear owners.",
            },
            {
              label: "Recovery-ready folders",
              value: "12",
              note: "Version history, protected backups, and verified account recovery were available.",
            },
          ]}
        />

        <FakeAlertCard
          title="Private Research Folder Shared With Public Edit Link"
          severity="High"
          time="3:24 PM"
          source="Fake Cloud Storage Training"
          details="A fictional research folder containing private student work allows anyone with the link to view, edit, download, and reshare files."
          recommendation="Remove public access, restore specific approved users, limit editing by role, review version history, and verify that trusted copies remain available."
        />

        <FakeLogPanel
          title="Fake Cloud Sharing Review Log"
          logs={[
            "15:07:12 FOLDER name='research_team' owner='teacher'",
            "15:10:28 SHARING scope='anyone_with_link' permission='edit'",
            "15:13:44 MEMBERS current='5' outdated='2'",
            "15:16:59 VERSION_HISTORY unauthorized_changes='possible' trusted_version='available'",
            "15:20:31 CONTAINMENT public_link='removed' outdated_members='removed'",
            "15:24:08 ACCESS approved_users='restored' permissions='least_required'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="What Should the Data Owner Change?"
          evidence={[
            "A fictional private research folder uses anyone-with-the-link editing.",
            "Two former team members still have access.",
            "The current reviewers only need to comment.",
            "Version history contains a trusted copy from before the latest changes.",
          ]}
          question="What is the safest response?"
          options={[
            "Remove public access and former members, give current reviewers comment access, and verify the trusted version through version history.",
            "Keep the public edit link because it is convenient.",
            "Delete version history and give everyone management access.",
            "Move the folder to another public account.",
          ]}
          bestAnswer={0}
          explanation="The safest response limits access, matches permissions to roles, removes outdated users, and protects integrity with version history."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Cloud Storage Safety"
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
          eyebrow="Safe Defensive Lab"
          title="Review a Fictional Cloud Storage Workspace"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Cloud Workspace
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Sharing and Recovery Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student reviews a public club flyer, private
                research folder, shared project document, sync conflict,
                outdated member list, and incomplete recovery settings.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the owner, classification, and approved users.</li>
                <li>Review link scope and each person’s permission level.</li>
                <li>Remove outdated access and excessive privileges.</li>
                <li>Check synchronization and version history before deleting anything.</li>
                <li>Verify account recovery through the official service.</li>
                <li>Document the final access and recovery state.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Private Folder Uses a Public Edit Link"
          scenario="A fictional student discovers that anyone with the link can edit and reshare a private research folder."
          choices={[
            {
              label: "Choice A",
              response:
                "Remove public access, invite approved users directly, and give each person the minimum permission needed.",
              outcome:
                "Best defensive choice. It protects confidentiality and integrity while preserving authorized access.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave the link active because only classmates received it.",
              outcome:
                "Risky. Links can be forwarded, copied, or discovered by unintended users.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Give everyone management access so they can protect the folder.",
              outcome:
                "Unsafe. Excessive privileges increase sharing, deletion, and ownership risk.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Two Devices Create Conflicting Versions"
          scenario="A fictional cloud folder contains two different versions of the same project after both devices synchronized."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve both versions, compare version history, identify the trusted copy, and then organize the final file.",
              outcome:
                "Best defensive choice. It protects integrity and avoids deleting recoverable work.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete one version immediately based only on the filename.",
              outcome:
                "Risky. The filename may not identify the trusted content.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Turn off account security and share the folder publicly.",
              outcome:
                "Unsafe. This creates additional confidentiality and account risk.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Cloud Storage Safety Checklist"
          items={[
            "I verify the correct trusted account and data owner.",
            "I share nonpublic data with specific approved users instead of broad public links.",
            "I give view, comment, edit, or manage access according to the user’s role.",
            "I remove former members and outdated access.",
            "I use version history carefully before restoring or deleting files.",
            "I understand that synchronization can copy both helpful changes and mistakes.",
            "I maintain official account recovery settings and protected backups.",
          ]}
        />

        <MiniQuiz
          title="B11.4 Mini Quiz: Cloud Storage Safety"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional cloud storage review. Include six folders, owner, classification, sharing scope, users, permissions, synchronization risk, version-history status, backup need, and account-recovery status."
          tips={[
            "Use fictional accounts, files, folders, users, services, links, and recovery settings only.",
            "Do not include real private data, credentials, cloud links, MFA codes, or recovery codes.",
            "Explain why each permission matches the approved role.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cloud storage improves collaboration and access but can spread mistakes quickly.",
            "Nonpublic data should usually be shared with specific approved users rather than broad public links.",
            "Permissions should match the task: view, comment, edit, or manage.",
            "Synchronization is not the same as a complete backup.",
            "Version history and official recovery settings support integrity and recovery.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}