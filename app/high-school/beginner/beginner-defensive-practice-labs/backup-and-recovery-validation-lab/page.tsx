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
  "/high-school/beginner/beginner-defensive-practice-labs";
const previousLesson = `${modulePath}/network-traffic-review-lab`;
const nextLesson = `${modulePath}/multi-alert-defensive-challenge`;

const vocab = [
  ["Backup", "A protected copy of data or systems used to restore information after loss, corruption, failure, or an incident."],
  ["Restore", "The process of recovering data, settings, or systems from a backup copy."],
  ["Recovery point objective", "The maximum acceptable amount of recent data that could be lost, usually expressed as a time period."],
  ["Recovery time objective", "The target amount of time allowed to restore a service after disruption."],
  ["Retention", "The period for which backup copies are kept before deletion or replacement."],
  ["Restore validation", "A controlled test used to confirm that backup data can actually be recovered and used as expected."],
];

const workflowStages = [
  {
    title: "Confirm coverage",
    example:
      "Identify which fictional systems, data, owners, schedules, retention rules, and recovery priorities are included.",
  },
  {
    title: "Review job health",
    example:
      "Check successful, failed, missed, partial, delayed, and unverified backup jobs.",
  },
  {
    title: "Validate recovery",
    example:
      "Use approved test restores to confirm data integrity, access, usability, timing, and documentation.",
  },
  {
    title: "Document and improve",
    example:
      "Record gaps, owners, deadlines, risks, escalation, and the next validation date.",
  },
];

const backupRows = [
  {
    item: "Student records backup",
    source: "Nightly job succeeds, but no restore test has been completed in nine months",
    review:
      "High concern. Schedule an approved restore validation and assign an owner.",
  },
  {
    item: "Learning portal database",
    source: "Hourly backup fails twice during a maintenance window, then succeeds",
    review:
      "Review the failure reason, confirm current coverage, and document whether the recovery objective was still met.",
  },
  {
    item: "Teacher shared drive",
    source: "Daily backup succeeds and quarterly restore tests pass",
    review:
      "Likely healthy if scope, retention, access control, and evidence remain current.",
  },
  {
    item: "Retired application",
    source: "Backups continue even though the system was decommissioned",
    review:
      "Confirm legal and business retention needs, then update the approved backup scope.",
  },
  {
    item: "Critical configuration files",
    source: "Stored only on the same device as the original system",
    review:
      "Unsafe design. Add a separate protected copy and test recovery.",
  },
];

const mistakes = [
  "Assuming a successful backup job proves the data can be restored.",
  "Ignoring ownership for failed or untested backups.",
  "Keeping every backup forever without reviewing retention needs.",
  "Storing all copies in the same location or on the same device.",
  "Running a production restore without authorization and change planning.",
  "Deleting failed-job evidence before the cause and coverage gap are documented.",
];

const quizQuestions = [
  {
    question: "What is restore validation?",
    choices: [
      "A controlled test that confirms backup data can be recovered and used as expected.",
      "A report that only shows the backup job started.",
      "Deleting old copies without review.",
      "Turning off retention rules.",
    ],
    answer: 0,
    explanation:
      "A backup is only trustworthy when recovery can be tested safely and successfully.",
  },
  {
    question: "What does the recovery point objective describe?",
    choices: [
      "The maximum acceptable amount of recent data that could be lost.",
      "The total number of backup servers.",
      "The password length for the backup system.",
      "The cost of a storage device.",
    ],
    answer: 0,
    explanation:
      "The recovery point objective describes how much recent data loss the organization can tolerate.",
  },
  {
    question: "What does the recovery time objective describe?",
    choices: [
      "The target time allowed to restore a service after disruption.",
      "How long every backup must be retained.",
      "The time of day a user logs in.",
      "The age of the oldest device.",
    ],
    answer: 0,
    explanation:
      "The recovery time objective focuses on how quickly service should be restored.",
  },
  {
    question: "Why is storing every backup in the same location risky?",
    choices: [
      "One failure, incident, or disaster could affect both the original and all copies.",
      "It always improves recovery speed.",
      "It makes restore testing unnecessary.",
      "It guarantees longer retention.",
    ],
    answer: 0,
    explanation:
      "Separate protected copies reduce the chance that one event destroys every recovery option.",
  },
  {
    question: "What is the strongest response to repeated backup failures?",
    choices: [
      "Preserve evidence, confirm current coverage, assign an owner, fix the cause, test recovery, and document the result.",
      "Delete the failed jobs from the dashboard.",
      "Assume the next backup will succeed.",
      "Disable alerts.",
    ],
    answer: 0,
    explanation:
      "Failures require ownership, cause review, coverage verification, recovery testing, and documented follow-up.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href="/high-school/beginner" className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Beginner Track
      </Link>
      <Link href={nextLesson} className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

function BottomNav() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B14</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
          Previous: B14.5 Network Traffic Review Lab
        </Link>
        <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
          Back to Module
        </Link>
        <Link href="/high-school/beginner" className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
          Beginner Track
        </Link>
        <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
          Next: B14.7 Multi-Alert Defensive Challenge
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function RecoveryFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Diagram</p>
      <h2 className="mt-2 text-2xl font-bold text-white">The Backup and Recovery Validation Workflow</h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Reliable recovery depends on complete coverage, healthy jobs, protected copies, tested restores, ownership, and documented improvement.
      </p>
      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {workflowStages.map((stage, index) => (
          <div key={stage.title} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">{index + 1}</div>
            <h3 className="mt-4 text-lg font-black text-white">{stage.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{stage.example}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
        <span className="font-bold">Recovery rule:</span> a backup job is not fully trusted until an approved restore test confirms the data is usable.
      </div>
    </section>
  );
}

function FakeBackupPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fake Backup Dashboard</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Coverage, Job Health, and Restore Review</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares protected systems, schedules, retention, job results, restore evidence, ownership, and next action.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">Fake Data</span>
      </div>
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {backupRows.map((row) => (
          <div key={row.item} className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 md:grid-cols-[0.8fr_1fr_1.4fr]">
            <p className="font-bold text-cyan-100">{row.item}</p>
            <p className="text-slate-300">{row.source}</p>
            <p className="text-sm font-semibold text-yellow-100">{row.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function RecoveryDecisionBoard() {
  const areas = [
    {
      name: "Coverage",
      saferQuestion: "Which systems, files, configurations, owners, and recovery priorities are protected?",
      saferChoice: "Compare the backup inventory with current critical assets and approved recovery requirements.",
    },
    {
      name: "Job health",
      saferQuestion: "Which jobs succeeded, failed, missed, completed partially, or exceeded the allowed window?",
      saferChoice: "Preserve the evidence, identify gaps, assign ownership, and confirm current protection.",
    },
    {
      name: "Restore readiness",
      saferQuestion: "When was the last successful restore test, and did it meet recovery objectives?",
      saferChoice: "Schedule approved testing for unverified or outdated recovery evidence.",
    },
    {
      name: "Retention and protection",
      saferQuestion: "Are copies separated, access-controlled, retained appropriately, and protected from the same incident?",
      saferChoice: "Use approved retention, separation, encryption, access control, and review practices.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Recovery Review</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Backup Validation Decision Board</h2>
      <p className="mt-3 text-slate-300">
        Strong recovery decisions connect coverage, job health, restore evidence, retention, ownership, and approved priorities.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {areas.map((area) => (
          <div key={area.name} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="text-xl font-black text-cyan-100">{area.name}</h3>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">Review question</p>
              <p className="mt-2 text-sm">{area.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">Strong defensive action</p>
              <p className="mt-2 text-sm">{area.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function BackupAndRecoveryValidationLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Beginner</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module B14</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 6 of 7</span>
          </div>
          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B14.6 Backup and Recovery Validation Lab
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Practice reviewing fictional backup coverage, job results, retention, protected copies, restore evidence, recovery objectives, ownership, priorities, and escalation.
          </p>
          <div className="mt-8"><TopNav /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B14: Beginner Defensive Practice Labs"
          lessonTitle="Backup and Recovery Validation Lab"
          lessonNumber={6}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that a successful backup job does not automatically prove recovery will work.",
            "I will use fictional systems, files, reports, owners, schedules, and organizations only.",
            "I will not restore, delete, move, or modify real backup data or production systems.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="The Worst Time to Discover a Backup Cannot Be Restored Is During a Real Emergency">
          <p className="leading-8">
            Backups protect organizations only when the correct data is covered, copies remain protected, failures are owned, and restore testing proves the recovery process works.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Lab safety reminder:</span> all backup records and restore scenarios in this lesson are fictional. Do not access, copy, restore, or delete real backup data.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain backups, restores, recovery point objectives, recovery time objectives, retention, and validation.",
            "Evaluate fictional backup coverage, job health, copy separation, ownership, and restore evidence.",
            "Choose safe validate, repair, monitor, retain, retire, or escalate actions based on risk and recovery needs.",
          ].map((objective) => (
            <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">Learning Objective</p>
              <p className="mt-3 font-semibold">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard eyebrow="Why This Matters" title="Recovery Depends on More Than Copying Data">
          <p className="leading-8">
            A complete recovery plan must protect the right systems, meet acceptable data-loss and restoration targets, preserve multiple protected copies, and assign responsibility for failures and tests.
          </p>
        </SectionCard>

        <RecoveryFlow />

        <SectionCard eyebrow="Core Concept" title="Coverage, Job Success, and Restore Success Are Different Questions">
          <p className="leading-8">
            Coverage asks whether critical systems and data are included. Job health asks whether backup tasks completed. Restore validation asks whether the copies can actually return usable data within the required recovery window.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Terms for Backup and Recovery Validation</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocab.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </section>

        <RecoveryDecisionBoard />
        <FakeBackupPanel />

        <FakeDashboardCard
          title="Fake Backup and Recovery Dashboard"
          subtitle="Training dashboard using fictional systems, backup jobs, retention rules, recovery objectives, restore tests, owners, and response decisions."
          metrics={[
            {
              label: "Protected systems",
              value: "27",
              note: "Fictional databases, file shares, applications, configurations, and learning platforms.",
            },
            {
              label: "Failed or missed jobs",
              value: "6",
              note: "Jobs requiring ownership, root-cause review, coverage confirmation, and follow-up.",
            },
            {
              label: "Restore tests overdue",
              value: "8",
              note: "Critical and important systems without current recovery evidence.",
            },
          ]}
        />

        <FakeAlertCard
          title="Critical Student Records Backup Has No Recent Restore Test"
          severity="High"
          time="8:36 AM"
          source="Fake Recovery Assurance Monitor"
          details="A fictional student records system completes nightly backups, but the last documented restore test was nine months ago and no current owner is assigned."
          recommendation="Assign an owner, schedule an approved test restore, verify recovery objectives, document results, and escalate the ownership gap."
        />

        <FakeLogPanel
          title="Fake Backup Validation Log"
          logs={[
            "07:45:02 SYSTEM name='student_records' criticality='high'",
            "07:47:18 BACKUP schedule='nightly' last_job='success'",
            "07:51:33 RETENTION daily='30_days' monthly='12_months'",
            "07:56:09 RECOVERY_POINT target='24_hours' current='met'",
            "08:01:42 RECOVERY_TIME target='4_hours' tested='unknown'",
            "08:09:27 RESTORE_TEST last_success='9_months_ago'",
            "08:36:11 DECISION assign_owner='true' validate_restore='urgent'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Is This Backup Program Ready for Recovery?"
          evidence={[
            "A fictional critical system completes nightly backups.",
            "The most recent restore test occurred nine months ago.",
            "The recovery time objective is four hours, but no current test proves it can be met.",
            "No owner is assigned to the next validation.",
          ]}
          question="What is the strongest defensive action?"
          options={[
            "Assign an owner, schedule an approved restore test, verify the recovery objective, document results, and escalate any failure.",
            "Assume the backups are ready because the jobs succeed.",
            "Delete older backup evidence.",
            "Perform an unapproved production restore.",
          ]}
          bestAnswer={0}
          explanation="Successful backup jobs do not prove the system can be restored within the required time."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken Recovery Readiness">
          <div className="grid gap-3">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Review a Fictional Backup Validation Queue">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Fake Recovery Queue</p>
              <h3 className="mt-3 text-xl font-black text-white">Community Learning Portal Recovery Program</h3>
              <p className="mt-3 text-slate-300">
                A fictional queue includes successful but untested backups, failed jobs, missing system coverage, outdated retention, same-location copies, and completed restore tests.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Validation Steps</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Confirm system criticality, owner, data, schedule, and coverage.</li>
                <li>Review successful, failed, missed, partial, and delayed jobs.</li>
                <li>Compare actual backup timing with the recovery point objective.</li>
                <li>Review the most recent restore test and recovery time result.</li>
                <li>Check copy separation, access control, retention, and documentation.</li>
                <li>Assign actions, owners, deadlines, escalation, and retest dates.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Backup Job Fails Twice and Then Succeeds"
          scenario="A fictional database backup fails twice during maintenance, then completes successfully before the recovery point objective is exceeded."
          choices={[
            {
              label: "Choice A",
              response: "Preserve the failures, confirm current coverage, review the maintenance cause, document the result, and monitor or retest as required.",
              outcome: "Best defensive choice. The final success reduces immediate risk, but the earlier failures still need review.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Delete the failed-job records because the final job succeeded.",
              outcome: "Risky. The failures may reveal a repeatable weakness.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Ignore the recovery objective.",
              outcome: "Unsafe. Recovery requirements determine whether the coverage remained acceptable.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="All Backup Copies Are Stored With the Original System"
          scenario="A fictional small organization keeps the production files and every backup copy on the same physical device."
          choices={[
            {
              label: "Choice A",
              response: "Create an approved separate protected copy, restrict access, test recovery, and document ownership and retention.",
              outcome: "Best recovery choice. Separation protects against one event affecting every copy.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Keep the design because copying within one device is faster.",
              outcome: "Risky. One device failure could destroy the original and every backup.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Turn off backup alerts.",
              outcome: "Unsafe. Alerts help reveal failures and coverage gaps.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Backup and Recovery Validation Checklist"
          items={[
            "I confirm the protected systems, data, owners, schedules, and priorities.",
            "I review successful, failed, missed, partial, and delayed jobs.",
            "I compare backup timing with the recovery point objective.",
            "I verify restore-test evidence against the recovery time objective.",
            "I review copy separation, access control, retention, and protection.",
            "I assign owners, deadlines, retest dates, and escalation for gaps.",
            "I preserve evidence and document results, limitations, and follow-up.",
          ]}
        />

        <MiniQuiz title="B14.6 Mini Quiz: Backup and Recovery Validation" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional backup validation report. Include system name, criticality, owner, protected data, schedule, job results, retention, copy locations, recovery point objective, recovery time objective, last restore test, current gaps, risk decision, action owner, deadline, and retest date."
          tips={[
            "Use fictional systems, files, owners, reports, recovery targets, and organizations only.",
            "Do not include real backup data, private records, credentials, storage locations, or production details.",
            "Explain the difference between backup success and proven recovery readiness.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Backups protect organizations only when the correct systems and data are covered.",
            "Successful jobs do not prove recovery will work.",
            "Recovery point and recovery time objectives define acceptable data loss and restoration targets.",
            "Protected copies should be separated, access-controlled, retained appropriately, and tested.",
            "Every failure, overdue restore test, and coverage gap needs ownership, documentation, and follow-up.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}