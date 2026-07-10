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
  `${modulePath}/cloud-storage-safety`;
const nextLesson =
  `${modulePath}/human-error-and-data-loss-scenarios`;

const vocab = [
  [
    "Full backup",
    "A complete copy of the selected data at a specific point in time.",
  ],
  [
    "Incremental backup",
    "A backup that copies only the data changed since the most recent backup of any type.",
  ],
  [
    "Differential backup",
    "A backup that copies the data changed since the most recent full backup.",
  ],
  [
    "Recovery point objective",
    "The maximum acceptable amount of recent data loss, often described as how old the restored data may be.",
  ],
  [
    "Recovery time objective",
    "The target amount of time allowed to restore data or service after a disruption.",
  ],
  [
    "Offline backup",
    "A protected backup that is not continuously connected to the original device or service.",
  ],
];

const backupStages = [
  {
    title: "Identify critical data",
    example:
      "Determine which files, records, projects, and systems must be recoverable.",
  },
  {
    title: "Choose the backup type",
    example:
      "Match full, incremental, differential, local, cloud, offline, or managed backups to the need.",
  },
  {
    title: "Set recovery goals",
    example:
      "Decide how much recent data loss is acceptable and how quickly recovery should happen.",
  },
  {
    title: "Verify recovery",
    example:
      "Confirm that backups complete successfully and can restore trusted data when needed.",
  },
];

const backupRows = [
  {
    item: "Weekly full backup",
    source: "Complete copy every Friday evening",
    review:
      "Simple recovery point, but may require more storage and time.",
  },
  {
    item: "Daily incremental backup",
    source: "Copies changes since the most recent backup",
    review:
      "Efficient storage, but recovery may require several backup sets.",
  },
  {
    item: "Daily differential backup",
    source: "Copies changes since the last full backup",
    review:
      "Larger over time, but recovery may be simpler than many incrementals.",
  },
  {
    item: "Cloud backup",
    source: "Protected copy stored through an approved service",
    review:
      "Improves off-device recovery but still requires account security and access review.",
  },
  {
    item: "Offline backup",
    source: "Protected copy disconnected after completion",
    review:
      "Reduces exposure to mistakes or problems affecting continuously connected storage.",
  },
];

const mistakes = [
  "Assuming synchronization automatically creates a complete backup.",
  "Keeping every backup in the same place as the original data.",
  "Choosing a backup schedule without considering how much recent work could be lost.",
  "Never testing whether a backup can actually restore trusted data.",
  "Protecting the original files but leaving backup accounts or devices weakly secured.",
  "Deleting older backups without understanding retention or recovery requirements.",
];

const quizQuestions = [
  {
    question: "What is a full backup?",
    choices: [
      "A complete copy of the selected data at a point in time.",
      "Only the files changed since the last backup.",
      "Only deleted files.",
      "A public cloud folder.",
    ],
    answer: 0,
    explanation:
      "A full backup copies the entire selected data set and can provide a simple recovery base.",
  },
  {
    question: "What does an incremental backup copy?",
    choices: [
      "Data changed since the most recent backup of any type.",
      "The complete data set every time.",
      "Only public files.",
      "Only data changed since the last full backup.",
    ],
    answer: 0,
    explanation:
      "Incremental backups usually save time and storage by copying only the newest changes.",
  },
  {
    question: "What does recovery point objective describe?",
    choices: [
      "How much recent data loss is acceptable.",
      "How many users may edit a file.",
      "How long a password should be.",
      "How many folders exist.",
    ],
    answer: 0,
    explanation:
      "The recovery point objective defines how current the restored data should be.",
  },
  {
    question: "What does recovery time objective describe?",
    choices: [
      "How quickly data or service should be restored.",
      "How often a file is shared.",
      "How many backup copies exist.",
      "How old a device is.",
    ],
    answer: 0,
    explanation:
      "The recovery time objective sets a target for how long recovery may take.",
  },
  {
    question: "Why should backups be verified?",
    choices: [
      "To confirm that trusted data can actually be restored.",
      "To make access controls unnecessary.",
      "To guarantee no file will ever be lost.",
      "To replace account security.",
    ],
    answer: 0,
    explanation:
      "A backup is useful only if it is complete, trusted, accessible, and restorable.",
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
          Previous: B11.4 Cloud Storage Safety
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
          Next: B11.6 Human Error and Data Loss Scenarios
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

function BackupFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Backup Planning Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong backup planning connects data value, backup type, schedule,
        location, recovery goals, and verification.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {backupStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> a backup plan is not
        complete until the protected copy has been verified and the recovery
        process is understood.
      </div>
    </section>
  );
}

function FakeBackupPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Backup Type and Recovery Goal Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares full, incremental, differential,
            cloud, local, and offline backup choices.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {backupRows.map((row) => (
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

function RecoveryGoalsBoard() {
  const areas = [
    {
      name: "Recovery point",
      saferQuestion:
        "How much recent work or data could be lost without causing unacceptable impact?",
      saferChoice:
        "Set a backup frequency that keeps restored data within the acceptable age.",
    },
    {
      name: "Recovery time",
      saferQuestion:
        "How quickly must the data or service be available again?",
      saferChoice:
        "Choose backup and restoration methods that can meet the target recovery time.",
    },
    {
      name: "Backup location",
      saferQuestion:
        "Would the same device failure, account issue, mistake, or physical event affect both the original and the backup?",
      saferChoice:
        "Keep protected copies in appropriately separate local, cloud, offline, or managed locations.",
    },
    {
      name: "Verification",
      saferQuestion:
        "Has the backup completed successfully, and can trusted data be restored?",
      saferChoice:
        "Review backup status and perform approved recovery tests using safe fictional or noncritical data.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Recovery Goals Board
      </h2>
      <p className="mt-3 text-slate-300">
        Recovery planning asks how much data loss is acceptable, how quickly
        access must return, where copies should live, and how restoration is
        verified.
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

export default function BackupTypesRecoveryGoalsPage() {
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
              Lesson 5 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B11.5 Backup Types and Recovery Goals
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Compare full, incremental, differential, local, cloud, offline, and
            managed backups while learning how recovery point and recovery time
            goals shape a practical backup plan.
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
          lessonTitle="Backup Types and Recovery Goals"
          lessonNumber={5}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that synchronization and backup are related but not identical.",
            "I will use fictional files, devices, accounts, services, organizations, backup sets, and recovery goals only.",
            "I am ready to compare backup type, schedule, location, retention, and restoration needs.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Backup Is Useful Only When It Meets the Recovery Need"
        >
          <p className="leading-8">
            A weekly backup may be enough for files that rarely change, but it
            may be unacceptable for work updated every hour. A complete copy may
            be simple to restore but slow to create. Strong planning balances
            storage, speed, cost, impact, and recovery.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every file,
            account, device, service, backup, recovery point, and organization
            in this lesson is fictional. Never test backups using important live
            data without permission.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain full, incremental, differential, local, cloud, offline, and managed backup concepts.",
            "Compare recovery point objectives and recovery time objectives.",
            "Choose backup types, schedules, locations, retention, and verification steps for fictional data needs.",
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
          title="Different Data Needs Different Recovery Plans"
        >
          <p className="leading-8">
            A personal photo library, school assignment folder, club budget,
            family document archive, and small organization database may all
            require different backup schedules, locations, retention periods,
            and recovery speeds.
          </p>
        </SectionCard>

        <BackupFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Backup Planning Starts With Acceptable Loss and Downtime"
        >
          <p className="leading-8">
            Recovery point objective asks how old restored data may be. Recovery
            time objective asks how quickly access should return. These goals
            guide the backup type, frequency, location, retention, and recovery
            process.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Backup and Recovery Planning
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

        <RecoveryGoalsBoard />
        <FakeBackupPanel />

        <FakeDashboardCard
          title="Fake Backup Planning Dashboard"
          subtitle="Training dashboard using fictional backup types, schedules, storage locations, recovery points, and recovery times."
          metrics={[
            {
              label: "Data sets reviewed",
              value: "15",
              note: "Fictional personal, school, family, club, and small-organization data.",
            },
            {
              label: "Backup plans created",
              value: "12",
              note: "Plans matched data importance, change rate, location, and recovery goals.",
            },
            {
              label: "Recovery tests verified",
              value: "9",
              note: "Trusted sample data was restored successfully through approved practice.",
            },
          ]}
        />

        <FakeAlertCard
          title="Only Backup Is Stored on the Same Laptop"
          severity="High"
          time="4:16 PM"
          source="Fake Backup Planning Training"
          details="A fictional student copies important project files into a second folder on the same laptop and considers the files fully backed up."
          recommendation="Create a protected copy in an appropriately separate approved location, confirm the recovery point, and verify that the files can be restored."
        />

        <FakeLogPanel
          title="Fake Backup Planning Review Log"
          logs={[
            "15:42:06 DATASET name='final_project' change_rate='daily'",
            "15:45:31 CURRENT_COPY location='student_laptop' count='2_folders'",
            "15:48:19 BACKUP_SEPARATION status='not_met' same_device='true'",
            "15:52:44 RPO target='24_hours' current='7_days'",
            "15:57:12 RTO target='2_hours' restore_process='undocumented'",
            "16:16:03 PLAN cloud_copy='approved' offline_copy='scheduled' test='required'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Backup Plan Best Matches the Need?"
          evidence={[
            "A fictional project changes every school day.",
            "Losing more than one day of work would be unacceptable.",
            "The only current copy is on one laptop.",
            "The project should be recoverable within two hours.",
          ]}
          question="What is the safest planning decision?"
          options={[
            "Use an approved daily backup to a separate trusted location, keep a protected recovery copy, and verify restoration within the two-hour target.",
            "Make one copy at the end of the semester.",
            "Save a second folder on the same laptop and stop there.",
            "Publish the project publicly as a backup.",
          ]}
          bestAnswer={0}
          explanation="The daily schedule meets the recovery point need, the separate location reduces single-device risk, and testing supports the recovery time goal."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Backup Planning"
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
          title="Match Fictional Data With Backup and Recovery Goals"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Data Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Backup Planning Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student reviews personal photos, daily schoolwork,
                a club budget, a family archive, a shared project, and a small
                organization record system.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the data owner, value, and change rate.</li>
                <li>Set a recovery point objective.</li>
                <li>Set a recovery time objective.</li>
                <li>Choose full, incremental, differential, local, cloud, offline, or managed backup methods.</li>
                <li>Choose schedule, retention, and separate storage locations.</li>
                <li>Verify backup completion and approved restoration.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Daily Work Is Backed Up Only Once a Month"
          scenario="A fictional student updates a major project every day, but the backup runs only on the first day of each month."
          choices={[
            {
              label: "Choice A",
              response:
                "Increase the approved backup frequency so the recovery point matches the amount of acceptable recent data loss.",
              outcome:
                "Best defensive choice. The schedule should reflect how often the data changes and how much work can be lost.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the monthly schedule because any backup is enough.",
              outcome:
                "Risky. Several weeks of work could be lost.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Make the project public so other people have copies.",
              outcome:
                "Unsafe. Public exposure is not a protected backup strategy.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Backup Has Never Been Restored"
          scenario="A fictional club reports successful backups every week, but no one has ever confirmed that the files can be restored."
          choices={[
            {
              label: "Choice A",
              response:
                "Perform an approved recovery test using safe fictional or noncritical data and document the result.",
              outcome:
                "Best defensive choice. Verification confirms whether the backup process supports real recovery.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume the backup works because the status icon is green.",
              outcome:
                "Risky. Completion does not always prove successful restoration.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the original files to force a test.",
              outcome:
                "Unsafe. Recovery testing should never put important live data at unnecessary risk.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Backup Types and Recovery Goals Checklist"
          items={[
            "I identify the data owner, value, change rate, and recovery need.",
            "I understand full, incremental, and differential backup differences.",
            "I choose local, cloud, offline, or managed locations appropriately.",
            "I set a recovery point objective that matches acceptable recent data loss.",
            "I set a recovery time objective that matches acceptable downtime.",
            "I keep protected backups appropriately separate from the original data.",
            "I verify backup completion and restoration through approved testing.",
          ]}
        />

        <MiniQuiz
          title="B11.5 Mini Quiz: Backup Types and Recovery Goals"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional backup plan. Include six data sets, owner, value, change rate, backup type, schedule, location, retention, recovery point objective, recovery time objective, and verification step."
          tips={[
            "Use fictional files, accounts, devices, services, organizations, and backup locations only.",
            "Do not use real private data, credentials, or important live files for recovery testing.",
            "Explain why each backup choice matches the data and recovery goals.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Full, incremental, and differential backups balance storage, speed, and recovery complexity differently.",
            "Recovery point objective describes acceptable recent data loss.",
            "Recovery time objective describes acceptable recovery duration.",
            "Backup copies should be appropriately separate from the original data.",
            "A backup is not proven until trusted data can be restored through an approved process.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}