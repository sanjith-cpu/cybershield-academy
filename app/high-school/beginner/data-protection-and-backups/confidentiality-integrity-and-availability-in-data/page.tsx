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
  `${modulePath}/why-data-needs-protection`;
const nextLesson =
  `${modulePath}/file-organization-and-data-classification-basics`;

const vocab = [
  [
    "Confidentiality",
    "Keeping data available only to approved people, accounts, devices, or services.",
  ],
  [
    "Integrity",
    "Keeping data accurate, complete, trustworthy, and protected from unauthorized or accidental changes.",
  ],
  [
    "Availability",
    "Keeping data and services accessible to authorized users when they are needed.",
  ],
  [
    "CIA triad",
    "A cybersecurity model that groups protection goals into confidentiality, integrity, and availability.",
  ],
  [
    "Authorized access",
    "Permission granted to a person, account, device, or service for an approved purpose.",
  ],
  [
    "Version history",
    "A record of earlier file versions that may help review changes or recover trusted content.",
  ],
];

const ciaStages = [
  {
    title: "Protect confidentiality",
    example:
      "Limit access, avoid public links, use trusted accounts, and share only with approved people.",
  },
  {
    title: "Protect integrity",
    example:
      "Use clear ownership, limited editing rights, version history, and verified copies.",
  },
  {
    title: "Protect availability",
    example:
      "Maintain reliable storage, protected backups, recovery options, and clear service responsibility.",
  },
  {
    title: "Balance all three",
    example:
      "Choose controls that protect privacy and accuracy without making authorized access impossible.",
  },
];

const ciaRows = [
  {
    item: "Private student record",
    source: "Public sharing link allows anyone to view",
    review:
      "Confidentiality issue. Remove public access and limit the file to authorized users.",
  },
  {
    item: "Final project document",
    source: "Older draft overwrites the approved version",
    review:
      "Integrity issue. Use version history and restore the correct trusted version.",
  },
  {
    item: "Club budget sheet",
    source: "Storage service is unavailable before a meeting",
    review:
      "Availability issue. Use approved backup access and follow the recovery plan.",
  },
  {
    item: "Shared research folder",
    source: "Everyone can edit every file",
    review:
      "Integrity and confidentiality risk. Limit editing and access by role.",
  },
  {
    item: "Encrypted archive",
    source: "Only one person knows how to access it",
    review:
      "Confidentiality may be strong, but availability is weak without approved recovery responsibility.",
  },
];

const mistakes = [
  "Treating confidentiality as the only data-protection goal.",
  "Giving everyone edit access when most users need view-only access.",
  "Restoring an old file without confirming it is the trusted version.",
  "Keeping the only copy of important data in one account or on one device.",
  "Making data so restricted that authorized users cannot access it when needed.",
  "Ignoring accidental changes because no attacker was involved.",
];

const quizQuestions = [
  {
    question: "What does confidentiality protect?",
    choices: [
      "Data from being viewed or used by unauthorized people.",
      "Data from every possible deletion.",
      "Only the speed of a service.",
      "Only public information.",
    ],
    answer: 0,
    explanation:
      "Confidentiality focuses on limiting data access to approved users and purposes.",
  },
  {
    question: "What does integrity protect?",
    choices: [
      "The accuracy, completeness, and trustworthiness of data.",
      "Only the physical device location.",
      "The length of a password.",
      "Only internet availability.",
    ],
    answer: 0,
    explanation:
      "Integrity means data has not been altered, damaged, or replaced improperly.",
  },
  {
    question: "What does availability protect?",
    choices: [
      "Authorized access to data and services when they are needed.",
      "Only file secrecy.",
      "Only version names.",
      "Only app permissions.",
    ],
    answer: 0,
    explanation:
      "Availability ensures approved users can reach reliable data and services when required.",
  },
  {
    question:
      "A public link exposes a private file. Which CIA goal is affected most directly?",
    choices: [
      "Confidentiality.",
      "Integrity.",
      "Availability.",
      "None of them.",
    ],
    answer: 0,
    explanation:
      "The file is visible to people who should not have access, so confidentiality is affected.",
  },
  {
    question:
      "An older draft replaces the final approved file. Which CIA goal is affected most directly?",
    choices: [
      "Integrity.",
      "Confidentiality.",
      "Availability.",
      "Physical security only.",
    ],
    answer: 0,
    explanation:
      "The trusted accuracy and correctness of the file have been damaged.",
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
          Previous: B11.1 Why Data Needs Protection
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
          Next: B11.3 File Organization and Data Classification Basics
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

function CIAFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The CIA Data Protection Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong data protection keeps information private enough, trustworthy,
        and available to the correct users at the correct time.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {ciaStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> a control that protects
        one CIA goal should not unnecessarily damage the other two.
      </div>
    </section>
  );
}

function FakeCIAPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            CIA Data Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares confidentiality, integrity,
            availability, and situations where several goals overlap.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {ciaRows.map((row) => (
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

function CIABoard() {
  const areas = [
    {
      name: "Confidentiality",
      saferQuestion:
        "Who can view, download, share, copy, or use the information?",
      saferChoice:
        "Limit access to approved users, remove public links, and use trusted accounts and channels.",
    },
    {
      name: "Integrity",
      saferQuestion:
        "Who can change the information, and how can trusted versions be identified or restored?",
      saferChoice:
        "Limit editing, use version history, confirm ownership, and preserve verified copies.",
    },
    {
      name: "Availability",
      saferQuestion:
        "Can authorized users access the data when needed if a device, account, file, or service fails?",
      saferChoice:
        "Use reliable storage, protected backups, alternate access, and a recovery plan.",
    },
    {
      name: "Balance",
      saferQuestion:
        "Does the protection reduce exposure without making legitimate use or recovery impossible?",
      saferChoice:
        "Choose controls that match the data’s sensitivity, purpose, users, and recovery requirements.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Confidentiality, Integrity, and Availability Board
      </h2>
      <p className="mt-3 text-slate-300">
        The CIA triad helps defenders explain what the data needs and which
        protection goal has been affected.
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

export default function ConfidentialityIntegrityAvailabilityDataPage() {
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
              Lesson 2 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B11.2 Confidentiality, Integrity, and Availability in Data
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Apply the CIA triad to files, records, cloud folders, shared
            documents, backups, and recovery decisions so data remains private
            enough, trustworthy, and available when needed.
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
          lessonTitle="Confidentiality, Integrity, and Availability in Data"
          lessonNumber={2}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that data protection includes privacy, accuracy, and reliable access.",
            "I will use fictional files, records, accounts, cloud folders, services, users, and incidents only.",
            "I am ready to classify data events by confidentiality, integrity, availability, or several goals together.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A File Can Be Private but Still Unreliable or Unavailable"
        >
          <p className="leading-8">
            A strongly protected file may still create a problem if no
            authorized person can access it during an emergency. A widely
            available file may still be unsafe if anyone can change it. The CIA
            triad helps defenders balance all three needs.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every file,
            record, person, account, link, service, and incident in this lesson
            is fictional. Never expose real private information or change real
            sharing settings without permission.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain confidentiality, integrity, availability, authorized access, and the CIA triad.",
            "Classify fictional incidents by which data-protection goal was affected.",
            "Choose access, versioning, backup, recovery, and sharing controls that balance all three goals.",
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
          title="The Same Data Can Fail in Different Ways"
        >
          <p className="leading-8">
            A student record may be exposed to the wrong people, changed
            incorrectly, or unavailable during an important meeting. These are
            different problems, and each one requires a different defensive
            response.
          </p>
        </SectionCard>

        <CIAFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Protect Privacy, Trust, and Access Together"
        >
          <p className="leading-8">
            Confidentiality asks who should have access. Integrity asks whether
            the data is accurate and trustworthy. Availability asks whether
            authorized users can reach the information when they need it.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for the CIA Triad
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

        <CIABoard />
        <FakeCIAPanel />

        <FakeDashboardCard
          title="Fake CIA Data Protection Dashboard"
          subtitle="Training dashboard using fictional confidentiality, integrity, availability, access, version, and recovery evidence."
          metrics={[
            {
              label: "Data events reviewed",
              value: "18",
              note: "Fictional school, family, club, project, and organizational data scenarios.",
            },
            {
              label: "CIA goals affected",
              value: "27",
              note: "Several incidents affected more than one protection goal.",
            },
            {
              label: "Balanced responses",
              value: "15",
              note: "Access, versioning, backup, and recovery controls were matched to the incident.",
            },
          ]}
        />

        <FakeAlertCard
          title="Shared Project Folder Allows Public Viewing and Editing"
          severity="High"
          time="11:36 AM"
          source="Fake Cloud Data Training"
          details="A fictional project folder contains private student work and allows anyone with the link to view, edit, and replace files."
          recommendation="Remove public access, restore approved users, limit editing by role, review version history, and verify that trusted copies remain available."
        />

        <FakeLogPanel
          title="Fake CIA Incident Review Log"
          logs={[
            "11:18:02 FOLDER name='project_team' owner='teacher'",
            "11:21:17 SHARING scope='anyone_with_link' permission='edit'",
            "11:24:41 CONFIDENTIALITY status='affected' unauthorized_view='possible'",
            "11:27:55 INTEGRITY status='affected' unauthorized_changes='detected'",
            "11:31:23 AVAILABILITY trusted_version='available_in_history'",
            "11:36:09 RESPONSE public_link='removed' roles='restored' version='verified'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which CIA Goals Are Affected?"
          evidence={[
            "A fictional club budget file is shared publicly.",
            "Several numbers were changed by an unknown editor.",
            "The approved version still exists in version history.",
            "The club needs the file before a meeting in one hour.",
          ]}
          question="What is the best conclusion and response?"
          options={[
            "Confidentiality and integrity are affected; remove public access, restore the trusted version, limit editing, and keep the file available to approved club leaders.",
            "Only availability matters, so leave the public link active.",
            "Only confidentiality matters, so delete every copy.",
            "No CIA goal is affected because the file still opens.",
          ]}
          bestAnswer={0}
          explanation="Public exposure affects confidentiality, unauthorized changes affect integrity, and the meeting creates an availability need for authorized users."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken CIA Protection"
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
          title="Classify Fictional Data Incidents With the CIA Triad"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Incident Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                CIA Data Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student reviews a public private-file link, an
                overwritten project, an unavailable cloud folder, a broadly
                editable budget, and a protected archive with no recovery owner.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the data owner and approved users.</li>
                <li>Classify each event as confidentiality, integrity, availability, or several goals.</li>
                <li>Explain the possible impact.</li>
                <li>Choose access, version, backup, or recovery controls.</li>
                <li>Verify that the response protects all three goals appropriately.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Final Project Is Replaced by an Older Draft"
          scenario="A fictional student opens a shared project folder and discovers that the final approved file has been overwritten by an older version."
          choices={[
            {
              label: "Choice A",
              response:
                "Review version history, restore the verified final version, and limit editing rights to approved contributors.",
              outcome:
                "Best defensive choice. It restores integrity and reduces the chance of repeated unauthorized or accidental changes.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the older version because it is the newest visible file.",
              outcome:
                "Risky. The visible file may not be the trusted version.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the entire folder so no one can change it again.",
              outcome:
                "Unsafe. This damages availability and may destroy recoverable data.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Protected Archive Has No Recovery Owner"
          scenario="A fictional organization stores an important archive in a protected account, but only one person knows how to access it."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the protection while assigning approved recovery responsibility and documenting a trusted access process.",
              outcome:
                "Best defensive choice. Confidentiality remains strong while availability improves.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Make the archive public so everyone can reach it.",
              outcome:
                "Risky. This destroys confidentiality.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the issue because the current owner is available today.",
              outcome:
                "Unsafe. Future availability depends on one person.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="CIA Data Protection Checklist"
          items={[
            "I identify who should and should not access the information.",
            "I protect trusted accuracy with limited editing, ownership, and version history.",
            "I maintain reliable access through backups and recovery planning.",
            "I recognize that one incident may affect several CIA goals.",
            "I balance strong protection with legitimate access needs.",
            "I verify the response after access, version, or recovery changes.",
          ]}
        />

        <MiniQuiz
          title="B11.2 Mini Quiz: Confidentiality, Integrity, and Availability in Data"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional CIA data review. Include six data scenarios, the affected CIA goal or goals, impact, approved users, recommended control, recovery need, and verification step."
          tips={[
            "Use fictional people, accounts, files, services, records, and organizations only.",
            "Do not include real private information, cloud links, credentials, or school records.",
            "Explain how each response balances confidentiality, integrity, and availability.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Confidentiality limits data access to approved users and purposes.",
            "Integrity protects the accuracy, completeness, and trustworthiness of information.",
            "Availability ensures authorized users can access data and services when needed.",
            "One incident may affect several CIA goals at the same time.",
            "Strong controls balance privacy, trust, access, backup, and recovery requirements.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}