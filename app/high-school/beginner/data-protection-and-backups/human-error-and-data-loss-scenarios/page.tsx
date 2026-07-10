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
  `${modulePath}/backup-types-and-recovery-goals`;
const nextLesson =
  `${modulePath}/backup-planning-lab`;

const vocab = [
  [
    "Human error",
    "An accidental action or decision that exposes, changes, deletes, misroutes, or makes data unavailable.",
  ],
  [
    "Accidental deletion",
    "The unintentional removal of a file, folder, record, or cloud item.",
  ],
  [
    "Overwriting",
    "Replacing trusted content with a different version, often by saving over the original file.",
  ],
  [
    "Wrong-recipient sharing",
    "Sending or granting access to information to a person who was not intended to receive it.",
  ],
  [
    "Containment",
    "The immediate defensive action used to limit further exposure, alteration, deletion, or access.",
  ],
  [
    "Recovery point",
    "The date and time represented by the trusted data version used for restoration.",
  ],
];

const responseStages = [
  {
    title: "Stop the spread",
    example:
      "Pause further sharing, editing, deletion, synchronization, or use of the affected data.",
  },
  {
    title: "Report quickly",
    example:
      "Notify the data owner, teacher, trusted adult, or approved technology staff.",
  },
  {
    title: "Preserve evidence",
    example:
      "Record what happened, when it happened, which files or users were involved, and what remains available.",
  },
  {
    title: "Recover carefully",
    example:
      "Use version history, backups, access review, or approved restoration only after containment.",
  },
];

const incidentRows = [
  {
    item: "Accidental deletion",
    source: "Shared project folder moved to trash",
    review:
      "Stop further changes, notify the owner, and use approved restore or version tools.",
  },
  {
    item: "Wrong-recipient email",
    source: "Private attachment sent to an unintended person",
    review:
      "Report immediately, request approved containment, and review access or sharing.",
  },
  {
    item: "Overwritten document",
    source: "Old draft saved over the final version",
    review:
      "Preserve current evidence and restore the trusted version from history or backup.",
  },
  {
    item: "Sync mistake",
    source: "Deletion on one device spreads to connected cloud storage",
    review:
      "Pause affected synchronization if approved, preserve remaining copies, and restore carefully.",
  },
  {
    item: "Lost device",
    source: "Only current copy of important files is on a missing laptop",
    review:
      "Report the device loss, protect accounts, and recover from a trusted backup.",
  },
];

const mistakes = [
  "Hiding a data mistake because of embarrassment.",
  "Continuing to edit or synchronize files before preserving evidence.",
  "Deleting logs, messages, or versions that could help recovery.",
  "Restoring the first available copy without checking whether it is trusted.",
  "Contacting unintended recipients through unofficial or unsafe channels.",
  "Blaming a person before understanding the event and improving the process.",
];

const quizQuestions = [
  {
    question: "What should happen first after accidental data loss?",
    choices: [
      "Contain the problem and report it through the approved process.",
      "Keep making changes until the issue disappears.",
      "Hide the mistake from the data owner.",
      "Delete all remaining versions.",
    ],
    answer: 0,
    explanation:
      "Fast containment and reporting reduce additional loss and give authorized people more recovery options.",
  },
  {
    question: "Why should evidence be preserved?",
    choices: [
      "It helps identify what happened, which data was affected, and which recovery point is trustworthy.",
      "It makes backups unnecessary.",
      "It guarantees no one made a mistake.",
      "It replaces access controls.",
    ],
    answer: 0,
    explanation:
      "Accurate records support containment, recovery, verification, and future prevention.",
  },
  {
    question: "What is the safest response to an overwritten final file?",
    choices: [
      "Use approved version history or backup tools to restore the verified trusted version.",
      "Assume the newest visible file is correct.",
      "Delete every version.",
      "Make the folder public.",
    ],
    answer: 0,
    explanation:
      "The trusted version should be identified and restored without destroying recoverable evidence.",
  },
  {
    question: "What should happen after a private file is sent to the wrong person?",
    choices: [
      "Report immediately and follow approved containment and access-review steps.",
      "Ignore the mistake.",
      "Forward the file to more people.",
      "Share account credentials to remove it.",
    ],
    answer: 0,
    explanation:
      "Wrong-recipient sharing requires quick reporting and official containment.",
  },
  {
    question: "Why is blame-first response harmful?",
    choices: [
      "It can discourage reporting and prevent the organization from improving the process.",
      "It always improves recovery speed.",
      "It makes backups stronger.",
      "It removes the need for documentation.",
    ],
    answer: 0,
    explanation:
      "A learning-focused response supports honest reporting, recovery, and better safeguards.",
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
          Previous: B11.5 Backup Types and Recovery Goals
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
          Next: B11.7 Backup Planning Lab
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

function ResponseFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Human-Error Response Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong response limits further harm, preserves useful evidence, and
        restores trusted data through an approved process.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {responseStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> report mistakes early.
        Delayed reporting can turn a small data error into a larger incident.
      </div>
    </section>
  );
}

function FakeIncidentPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Human Error and Data Loss Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares deletion, overwriting, wrong-recipient
            sharing, synchronization mistakes, and lost-device data loss.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {incidentRows.map((row) => (
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

function IncidentBoard() {
  const areas = [
    {
      name: "Deletion",
      saferQuestion:
        "Was the item moved to trash, permanently removed, or synchronized as deleted across connected locations?",
      saferChoice:
        "Stop further changes, preserve remaining copies, report, and use approved restore tools.",
    },
    {
      name: "Overwriting",
      saferQuestion:
        "Which version is trusted, and what version history, backup, or audit information is available?",
      saferChoice:
        "Preserve evidence and restore only the verified trusted version.",
    },
    {
      name: "Wrong recipient",
      saferQuestion:
        "What information was shared, who received it, and can access or delivery be contained?",
      saferChoice:
        "Report immediately and use official recall, link removal, permission, or notification procedures.",
    },
    {
      name: "Process improvement",
      saferQuestion:
        "Which safeguard could reduce the chance or impact of the same mistake?",
      saferChoice:
        "Improve permissions, confirmation steps, naming, training, backups, versioning, or review workflows.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Human Error Incident Board
      </h2>
      <p className="mt-3 text-slate-300">
        Strong response protects the data first, then improves the process so
        the same mistake is less likely to happen again.
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

export default function HumanErrorAndDataLossScenariosPage() {
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
              Lesson 6 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B11.6 Human Error and Data Loss Scenarios
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how accidental deletion, overwriting, wrong-recipient sharing,
            synchronization mistakes, lost devices, and weak backup habits can
            affect data—and how to contain, report, recover, and improve.
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
          lessonTitle="Human Error and Data Loss Scenarios"
          lessonNumber={6}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that honest mistakes can affect confidentiality, integrity, and availability.",
            "I will use fictional files, users, devices, accounts, messages, backups, and incidents only.",
            "I am ready to prioritize containment, reporting, evidence preservation, recovery, and process improvement.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Many Data Incidents Begin With an Ordinary Mistake"
        >
          <p className="leading-8">
            A user may send a file to the wrong person, overwrite the trusted
            version, delete a synchronized folder, or store the only copy on a
            lost device. Strong organizations design systems that reduce these
            mistakes and recover safely when they occur.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every file,
            account, user, device, message, backup, and incident in this lesson
            is fictional. Never use real private data or live important files
            for testing.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain accidental deletion, overwriting, wrong-recipient sharing, sync mistakes, containment, and recovery points.",
            "Prioritize reporting, evidence preservation, access review, version recovery, and restoration.",
            "Recommend process improvements that reduce the chance and impact of repeated human error.",
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
          title="Fast Reporting Preserves More Recovery Options"
        >
          <p className="leading-8">
            Trash folders may expire, version history may be limited, links may
            continue spreading, and synchronization may copy a mistake to more
            devices. Early reporting gives authorized people more time to
            contain and recover.
          </p>
        </SectionCard>

        <ResponseFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Contain Before You Restore"
        >
          <p className="leading-8">
            Restoring data too early can reintroduce the same problem or destroy
            useful evidence. First stop the spread, report the incident, identify
            trusted versions, and then recover through an approved process.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Human Error and Data Loss
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

        <IncidentBoard />
        <FakeIncidentPanel />

        <FakeDashboardCard
          title="Fake Human Error Response Dashboard"
          subtitle="Training dashboard using fictional deletion, overwriting, sharing, synchronization, device-loss, and recovery evidence."
          metrics={[
            {
              label: "Incidents reviewed",
              value: "17",
              note: "Fictional school, family, club, project, and small-organization scenarios.",
            },
            {
              label: "Contained quickly",
              value: "13",
              note: "Access, sync, deletion, sharing, or editing was limited before recovery.",
            },
            {
              label: "Trusted recoveries",
              value: "11",
              note: "Verified versions or backups were restored through approved processes.",
            },
          ]}
        />

        <FakeAlertCard
          title="Private Attachment Sent to Wrong Recipient"
          severity="High"
          time="2:07 PM"
          source="Fake Data Loss Training"
          details="A fictional student sends a private project attachment to an unintended recipient and notices the mistake two minutes later."
          recommendation="Report immediately, preserve the message details, use approved recall or access-removal options, notify the data owner, and document the response."
        />

        <FakeLogPanel
          title="Fake Human Error Incident Log"
          logs={[
            "13:52:11 FILE name='private_project_notes.pdf' owner='student_team'",
            "13:55:27 MESSAGE recipient='unintended_user' attachment='included'",
            "13:57:09 DISCOVERY sender='reported_immediately'",
            "14:00:18 CONTAINMENT link_access='removed' owner='notified'",
            "14:03:46 EVIDENCE message_time='preserved' recipient='documented'",
            "14:07:22 FOLLOW_UP process='recipient_confirmation_and_review'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="What Should Happen After an Overwrite?"
          evidence={[
            "A fictional final project file was overwritten by an older draft.",
            "Version history contains five earlier versions.",
            "A protected backup from the previous night is available.",
            "Several students are still editing the folder.",
          ]}
          question="What is the safest response?"
          options={[
            "Pause further editing, notify the owner, compare version history and backup evidence, restore the verified trusted version, and confirm permissions.",
            "Delete every version immediately.",
            "Choose the file with the newest filename without checking.",
            "Make the folder public so more people can help.",
          ]}
          bestAnswer={0}
          explanation="Containment preserves evidence, while version and backup review identifies the trusted recovery point before restoration."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Data-Loss Response"
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
          title="Build Responses for Fictional Data-Loss Scenarios"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Incident Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Human Error Response Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student reviews accidental deletion, overwriting,
                wrong-recipient sharing, a synchronization conflict, lost-device
                data, and an unverified backup.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the data owner and affected CIA goals.</li>
                <li>Stop further sharing, editing, deletion, or synchronization.</li>
                <li>Report through the approved process.</li>
                <li>Preserve timestamps, versions, messages, and remaining copies.</li>
                <li>Choose a verified recovery point.</li>
                <li>Recommend a process improvement.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Shared Folder Is Deleted by Mistake"
          scenario="A fictional student accidentally deletes a shared project folder and sees that the deletion is synchronizing across connected devices."
          choices={[
            {
              label: "Choice A",
              response:
                "Stop further changes if approved, report immediately, preserve remaining copies, and use trusted restore tools.",
              outcome:
                "Best defensive choice. It limits additional loss and protects recovery options.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep deleting files to make the folders match.",
              outcome:
                "Risky. This increases the damage.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Hide the mistake and wait several days.",
              outcome:
                "Unsafe. Recovery options may expire or become harder to use.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Private File Goes to the Wrong Person"
          scenario="A fictional student sends a private attachment to an unintended recipient."
          choices={[
            {
              label: "Choice A",
              response:
                "Report immediately, preserve the message details, and use approved containment and notification procedures.",
              outcome:
                "Best defensive choice. Quick reporting reduces exposure and supports an accurate response.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Ignore the mistake because the recipient may not open it.",
              outcome:
                "Risky. The exposure still exists.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Share an account password so the recipient can delete it.",
              outcome:
                "Unsafe. This creates a second security incident.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Human Error and Data Loss Checklist"
          items={[
            "I report data mistakes immediately instead of hiding them.",
            "I stop further sharing, editing, deletion, or synchronization when approved.",
            "I preserve useful evidence and remaining copies.",
            "I identify the trusted recovery point before restoration.",
            "I use approved version history, backup, access, and recovery tools.",
            "I verify the restored data and final permissions.",
            "I recommend a process improvement instead of focusing only on blame.",
          ]}
        />

        <MiniQuiz
          title="B11.6 Mini Quiz: Human Error and Data Loss Scenarios"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional human-error incident response plan. Include six scenarios, affected data, CIA impact, containment, reporting contact, evidence to preserve, recovery source, verification step, and process improvement."
          tips={[
            "Use fictional people, files, devices, accounts, messages, backups, and organizations only.",
            "Do not include real private data, credentials, cloud links, or important live files.",
            "Show containment before recovery in every scenario.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Human error can affect confidentiality, integrity, and availability.",
            "Fast reporting preserves more containment and recovery options.",
            "Evidence should be preserved before restoring or deleting data.",
            "Trusted version history and backups support careful recovery.",
            "A strong response improves the process instead of focusing only on blame.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}