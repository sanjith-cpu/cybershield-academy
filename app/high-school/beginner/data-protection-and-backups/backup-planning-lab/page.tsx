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
  `${modulePath}/human-error-and-data-loss-scenarios`;
const nextLesson = `${modulePath}/module-test`;

const vocab = [
  [
    "Backup strategy",
    "A documented plan that defines what data is protected, how often copies are created, where they are stored, and how recovery is verified.",
  ],
  [
    "Backup scope",
    "The files, folders, records, settings, or systems included in a backup plan.",
  ],
  [
    "Backup frequency",
    "How often protected copies are created based on how quickly data changes and how much recent loss is acceptable.",
  ],
  [
    "Retention schedule",
    "The approved length of time backup copies are kept before review, archival, or deletion.",
  ],
  [
    "Recovery procedure",
    "The ordered steps used to contain a problem, select a trusted recovery point, restore data, and verify the result.",
  ],
  [
    "Verification",
    "The process of confirming that backups completed successfully and trusted data can be restored.",
  ],
];

const planningStages = [
  {
    title: "Inventory",
    example:
      "Identify the data owner, purpose, classification, location, users, change rate, and importance.",
  },
  {
    title: "Design",
    example:
      "Choose backup type, frequency, location, retention, recovery point, and recovery time goals.",
  },
  {
    title: "Protect",
    example:
      "Secure backup accounts, devices, permissions, ownership, and appropriately separate copies.",
  },
  {
    title: "Verify",
    example:
      "Review backup status, test approved restoration, document results, and improve the plan.",
  },
];

const planningRows = [
  {
    item: "Daily school project",
    source: "Changes every day and cannot lose more than one day of work",
    review:
      "Use an approved daily backup to a separate trusted location and verify restoration.",
  },
  {
    item: "Family photo archive",
    source: "Changes occasionally but has high personal value",
    review:
      "Use protected local and cloud or offline copies with longer retention.",
  },
  {
    item: "Club budget",
    source: "Shared by several approved members and updated weekly",
    review:
      "Use controlled cloud access, version history, weekly protected backup, and clear ownership.",
  },
  {
    item: "Public event flyers",
    source: "Low sensitivity but needed before events",
    review:
      "Protect integrity and availability with an approved final folder and recoverable copies.",
  },
  {
    item: "Highly sensitive records",
    source: "Strict access and recovery requirements",
    review:
      "Use the strongest approved permissions, protected backups, limited recovery roles, and verified retention.",
  },
];

const mistakes = [
  "Creating backups without documenting the owner or recovery responsibility.",
  "Using the same schedule for every kind of data.",
  "Keeping every copy in one device, account, or physical location.",
  "Giving broad access to backup folders or recovery tools.",
  "Restoring data before containing the original problem.",
  "Marking a plan complete without testing approved recovery.",
];

const quizQuestions = [
  {
    question: "What should a backup plan identify first?",
    choices: [
      "The data owner, scope, value, classification, users, and recovery need.",
      "Only the folder color.",
      "Only the device brand.",
      "Only the newest filename.",
    ],
    answer: 0,
    explanation:
      "Strong planning begins with understanding what is being protected and why.",
  },
  {
    question: "How should backup frequency be chosen?",
    choices: [
      "Based on how fast the data changes and how much recent loss is acceptable.",
      "Randomly.",
      "Only by file size.",
      "Only by the number of users.",
    ],
    answer: 0,
    explanation:
      "Frequency should match the recovery point objective and the rate of change.",
  },
  {
    question: "Why should backup copies be appropriately separated?",
    choices: [
      "So one device failure, account issue, mistake, or event does not affect every copy.",
      "So every copy can be public.",
      "So access controls are unnecessary.",
      "So recovery can be skipped.",
    ],
    answer: 0,
    explanation:
      "Separation reduces the chance that one problem destroys or exposes the original and every backup.",
  },
  {
    question: "What should happen before restoring data?",
    choices: [
      "Contain the problem and identify a trusted recovery point.",
      "Delete all evidence.",
      "Restore the first copy found.",
      "Share the backup publicly.",
    ],
    answer: 0,
    explanation:
      "Containment prevents the same problem from immediately affecting restored data.",
  },
  {
    question: "How is a backup plan verified?",
    choices: [
      "By confirming completion and testing approved restoration with safe data.",
      "By assuming a green icon is enough.",
      "By deleting the original files.",
      "By disabling account security.",
    ],
    answer: 0,
    explanation:
      "Verification proves that the protected copy is complete, trusted, accessible, and restorable.",
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
        Module Test
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
      <h2 className="mt-2 text-2xl font-bold text-white">Complete Module B11</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B11.6 Human Error and Data Loss Scenarios
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
          Open B11 Module Test
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

function PlanningFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Backup Planning Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        A complete plan connects data value, classification, backup design,
        account protection, recovery goals, verification, and ownership.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {planningStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> a backup plan is only
        complete when ownership, access, retention, recovery, and verification
        are documented.
      </div>
    </section>
  );
}

function FakePlanningPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Backup Planning Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares data classification, change rate,
            backup type, schedule, location, recovery goals, and verification.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {planningRows.map((row) => (
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

function StrategyBoard() {
  const areas = [
    {
      name: "Scope",
      saferQuestion:
        "Which files, records, settings, devices, accounts, or systems must be recoverable?",
      saferChoice:
        "Document the exact protected data and identify anything intentionally excluded.",
    },
    {
      name: "Schedule",
      saferQuestion:
        "How quickly does the data change, and how much recent work could be lost?",
      saferChoice:
        "Match backup frequency to the recovery point objective.",
    },
    {
      name: "Location",
      saferQuestion:
        "Could one account issue, device failure, mistake, or event affect the original and every backup?",
      saferChoice:
        "Use appropriately separate trusted local, cloud, offline, or managed locations.",
    },
    {
      name: "Recovery",
      saferQuestion:
        "Who is authorized to restore data, which recovery point is trusted, and how will success be verified?",
      saferChoice:
        "Document containment, recovery roles, restoration steps, testing, and final verification.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Backup Strategy Board
      </h2>
      <p className="mt-3 text-slate-300">
        Strong backup strategies define scope, schedule, location, retention,
        ownership, access, recovery, and verification.
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

export default function BackupPlanningLabPage() {
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
              Lesson 7 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B11.7 Backup Planning Lab
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Apply data value, the CIA triad, classification, cloud safety,
            backup types, recovery goals, human-error response, retention,
            ownership, and verification to a complete fictional backup plan.
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
          lessonTitle="Backup Planning Lab"
          lessonNumber={7}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can compare data value, classification, access, cloud sharing, backup types, and recovery goals.",
            "I will use fictional files, records, accounts, devices, services, organizations, backups, and incidents only.",
            "I am ready to create a complete documented strategy with ownership, schedule, retention, recovery, and verification.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Backup Plan Must Work Before the Emergency"
        >
          <p className="leading-8">
            When data is deleted, overwritten, exposed, unavailable, or trapped
            on a lost device, it is too late to begin deciding what should have
            been backed up. Strong plans are created, protected, documented, and
            verified before recovery is needed.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every file,
            account, device, service, backup, user, organization, and incident in
            this lab is fictional. Never test recovery using important live data
            without permission.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Build a complete fictional backup strategy from data inventory through verification.",
            "Match classification, change rate, access, backup type, location, retention, and recovery goals.",
            "Prioritize containment, trusted recovery points, restoration, verification, and process improvement.",
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
          title="Recovery Depends on Decisions Made Earlier"
        >
          <p className="leading-8">
            Ownership, classification, permissions, schedules, storage
            locations, retention, account protection, and testing determine
            whether recovery is fast, trustworthy, and appropriately private.
          </p>
        </SectionCard>

        <PlanningFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Design for the Data, Not for Convenience"
        >
          <p className="leading-8">
            Different data sets change at different speeds, have different
            sensitivity, and require different recovery times. A good strategy
            matches the plan to the actual data instead of forcing every file
            into one schedule or location.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Backup Planning
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

        <StrategyBoard />
        <FakePlanningPanel />

        <FakeDashboardCard
          title="Fake Backup Planning Dashboard"
          subtitle="Training dashboard using fictional data inventories, classifications, schedules, locations, retention, recovery goals, and verification evidence."
          metrics={[
            {
              label: "Data sets inventoried",
              value: "18",
              note: "Fictional personal, school, family, club, and small-organization data.",
            },
            {
              label: "Backup plans completed",
              value: "15",
              note: "Plans include owners, scope, schedules, locations, retention, and recovery goals.",
            },
            {
              label: "Recovery tests passed",
              value: "12",
              note: "Approved fictional or noncritical data was restored and verified.",
            },
          ]}
        />

        <FakeAlertCard
          title="Backup Plan Has No Recovery Owner or Test Record"
          severity="High"
          time="10:46 AM"
          source="Fake Backup Planning Training"
          details="A fictional organization creates daily backups but has not assigned recovery responsibility, documented the restoration process, or verified a recovery test."
          recommendation="Assign authorized recovery roles, document containment and restoration steps, verify trusted recovery points, and complete an approved test."
        />

        <FakeLogPanel
          title="Fake Backup Planning Lab Log"
          logs={[
            "10:08:14 INVENTORY data_sets='18' owners_identified='16'",
            "10:14:27 CLASSIFICATION public='3' internal='6' private='7' highly_sensitive='2'",
            "10:21:39 BACKUP_TYPES full='weekly' incremental='daily' offline='monthly'",
            "10:28:52 RECOVERY_GOALS rpo='24_hours' rto='4_hours'",
            "10:35:11 OWNERSHIP recovery_owner='missing' alternate='missing'",
            "10:41:26 VERIFICATION last_test='none' restore_documentation='incomplete'",
            "10:46:03 ACTION owners='assigned' recovery_test='scheduled'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Plan Is Most Complete?"
          evidence={[
            "A fictional school project changes every day.",
            "The project is private and shared with four approved students.",
            "Losing more than one day of work is unacceptable.",
            "The only current backup is a second folder on the same laptop.",
          ]}
          question="What is the safest complete plan?"
          options={[
            "Use daily protected backups to a separate approved location, limit access to the project team, define retention, assign recovery responsibility, and verify restoration.",
            "Keep the second folder on the same laptop and stop there.",
            "Publish the project publicly as a backup.",
            "Create one backup at the end of the semester.",
          ]}
          bestAnswer={0}
          explanation="The best plan matches classification, change rate, access, separation, recovery point, ownership, retention, and verification."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken a Backup Strategy"
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
          title="Build a Complete Fictional Backup and Recovery Plan"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Organization Profile
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                School Club Data Protection Plan
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional school club manages public flyers, internal meeting
                notes, private member contacts, a weekly budget, daily project
                work, event photos, and highly sensitive support records.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Planning Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Inventory every data set and identify its owner.</li>
                <li>Assign CIA needs and classification.</li>
                <li>Choose approved users and cloud permissions.</li>
                <li>Select backup type, schedule, location, and retention.</li>
                <li>Set recovery point and recovery time goals.</li>
                <li>Document containment, restoration, verification, and review.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Every Backup Is in One Cloud Account"
          scenario="A fictional club stores the original files and every backup in the same cloud account with the same broad permissions."
          choices={[
            {
              label: "Choice A",
              response:
                "Use appropriately separate protected copies, limit backup access, assign ownership, and verify recovery.",
              outcome:
                "Best defensive choice. Separation and limited access reduce single-account and broad-permission risk.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep everything in one account because it is convenient.",
              outcome:
                "Risky. One account issue or mistake may affect every copy.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Make the backup folder public so more people can protect it.",
              outcome:
                "Unsafe. Public access creates additional confidentiality and integrity risk.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Recovery Test Has Never Been Completed"
          scenario="A fictional organization reports successful backups for six months but has never restored a file."
          choices={[
            {
              label: "Choice A",
              response:
                "Run an approved recovery test with fictional or noncritical data, record the time, verify integrity, and document improvements.",
              outcome:
                "Best defensive choice. Testing proves whether the plan meets recovery goals.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume the plan works because the backup status is green.",
              outcome:
                "Risky. Successful completion does not always prove successful restoration.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete important original files to force a real test.",
              outcome:
                "Unsafe. Recovery testing should not create unnecessary risk to live data.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Backup Planning Checklist"
          items={[
            "I inventory the data, owner, purpose, location, classification, and approved users.",
            "I choose backup types and schedules that match data change rate and recovery point goals.",
            "I keep protected copies appropriately separate from the original data.",
            "I secure backup accounts, devices, permissions, and recovery roles.",
            "I define retention, recovery time, containment, restoration, and verification steps.",
            "I test approved recovery using fictional or noncritical data.",
            "I document the result and improve the plan after testing or incidents.",
          ]}
        />

        <MiniQuiz
          title="B11.7 Mini Quiz: Backup Planning Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional backup and recovery strategy. Include seven data sets, owner, classification, CIA priorities, approved users, backup type, frequency, location, retention, recovery point objective, recovery time objective, recovery owner, containment steps, and verification."
          tips={[
            "Use fictional people, schools, organizations, files, accounts, devices, services, and incidents only.",
            "Do not include real private data, credentials, cloud links, MFA codes, recovery codes, or important live files.",
            "Show how each plan changes based on sensitivity, value, change rate, and recovery need.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A complete backup strategy defines scope, ownership, schedule, location, retention, recovery, and verification.",
            "Backup frequency should match data change rate and the recovery point objective.",
            "Appropriately separate copies reduce single-device, single-account, and single-location risk.",
            "Containment and trusted recovery-point selection come before restoration.",
            "Verified recovery testing turns a backup idea into a dependable plan.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}