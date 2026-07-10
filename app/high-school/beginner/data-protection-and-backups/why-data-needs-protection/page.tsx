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
  "/high-school/beginner/device-and-operating-system-safety/module-test";
const nextLesson =
  `${modulePath}/confidentiality-integrity-and-availability-in-data`;

const vocab = [
  [
    "Data",
    "Information stored, processed, shared, or used by people, devices, apps, schools, families, or organizations.",
  ],
  [
    "Sensitive data",
    "Information that could create harm, embarrassment, unfair access, fraud, or privacy problems if exposed or misused.",
  ],
  [
    "Personal data",
    "Information connected to an individual, such as contact details, school records, account activity, or identifying information.",
  ],
  [
    "Data owner",
    "The person or organization responsible for deciding how information should be used, protected, shared, and retained.",
  ],
  [
    "Data exposure",
    "A situation in which information becomes available to people who should not have access.",
  ],
  [
    "Data lifecycle",
    "The stages information passes through, including creation, storage, use, sharing, backup, retention, and deletion.",
  ],
];

const protectionStages = [
  {
    title: "Identify the data",
    example:
      "Determine what the information contains, who owns it, where it is stored, and who needs it.",
  },
  {
    title: "Understand the value",
    example:
      "Consider why the data matters and what could happen if it is exposed, changed, lost, or unavailable.",
  },
  {
    title: "Limit access",
    example:
      "Give access only to approved people and services that need the information.",
  },
  {
    title: "Prepare for loss",
    example:
      "Use trusted storage, protected backups, clear ownership, and a recovery plan.",
  },
];

const dataRows = [
  {
    item: "School contact list",
    source: "Names, school emails, and class information",
    review:
      "Limit access to approved school users and avoid public sharing.",
  },
  {
    item: "Public event flyer",
    source: "Approved date, time, location, and public announcement",
    review:
      "May be shared publicly after confirming the information is intended for release.",
  },
  {
    item: "Medical accommodation note",
    source: "Private health-related school information",
    review:
      "Highly sensitive. Share only with authorized people through approved channels.",
  },
  {
    item: "Draft research project",
    source: "Unfinished student work stored in a personal folder",
    review:
      "Protect against accidental deletion, overwriting, or unapproved editing.",
  },
  {
    item: "Family photo backup",
    source: "Personal images stored in a cloud account",
    review:
      "Use trusted access, careful sharing, account protection, and a verified backup.",
  },
];

const mistakes = [
  "Assuming information has no value because it does not include a password.",
  "Sharing a private file through a public link for convenience.",
  "Giving broad access when only one person needs the data.",
  "Keeping important files in only one location.",
  "Ignoring who owns the data and who is responsible for protecting it.",
  "Collecting or keeping information longer than necessary without a clear purpose.",
];

const quizQuestions = [
  {
    question: "Why does data need protection?",
    choices: [
      "Because exposure, loss, misuse, alteration, or unavailability can harm people and organizations.",
      "Because every file must be hidden forever.",
      "Because backups replace access controls.",
      "Because only passwords have value.",
    ],
    answer: 0,
    explanation:
      "Different data can create privacy, safety, financial, academic, operational, or trust-related harm if mishandled.",
  },
  {
    question: "What is sensitive data?",
    choices: [
      "Information that could cause harm or privacy problems if exposed or misused.",
      "Any file with a long name.",
      "Only information stored on paper.",
      "Only public announcements.",
    ],
    answer: 0,
    explanation:
      "Sensitivity depends on the possible impact of exposure, misuse, loss, or unauthorized access.",
  },
  {
    question: "Who is the data owner?",
    choices: [
      "The person or organization responsible for deciding how the data is used and protected.",
      "Anyone who happens to download the file.",
      "The first person who sees the data.",
      "Every internet user.",
    ],
    answer: 0,
    explanation:
      "Ownership identifies responsibility for approved use, access, sharing, retention, and protection.",
  },
  {
    question: "What is safest for an important file?",
    choices: [
      "Store it in a trusted location with limited access and a protected backup.",
      "Keep the only copy on one device.",
      "Share it publicly so it cannot be lost.",
      "Remove every access control.",
    ],
    answer: 0,
    explanation:
      "Trusted storage, appropriate access, and backups reduce both exposure and loss risk.",
  },
  {
    question: "Why does the data lifecycle matter?",
    choices: [
      "Protection decisions may change as data is created, stored, shared, retained, backed up, and deleted.",
      "Data needs protection only when it is first created.",
      "Old data can never create risk.",
      "Deletion removes the need for ownership.",
    ],
    answer: 0,
    explanation:
      "Information can create different risks at every stage of its lifecycle.",
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
          Previous: B10 Module Test
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
          Next: B11.2 Confidentiality, Integrity, and Availability in Data
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

function ProtectionFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Data Protection Decision Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong protection begins by understanding the information, its value,
        its approved users, and what recovery would require.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {protectionStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> protect data according
        to its value and possible impact—not only by whether it contains a
        password.
      </div>
    </section>
  );
}

function FakeDataPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Data Value and Protection Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares public, personal, private, academic,
            and highly sensitive information.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {dataRows.map((row) => (
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

function ValueBoard() {
  const areas = [
    {
      name: "Privacy impact",
      saferQuestion:
        "Could exposure reveal private, personal, school, family, health, financial, or identifying information?",
      saferChoice:
        "Limit access, use trusted storage, and avoid public links or broad sharing.",
    },
    {
      name: "Integrity impact",
      saferQuestion:
        "Could unauthorized changes damage grades, records, projects, decisions, or trust?",
      saferChoice:
        "Use clear ownership, version history, limited editing rights, and protected copies.",
    },
    {
      name: "Availability impact",
      saferQuestion:
        "What happens if the data is deleted, unavailable, locked, damaged, or stored only on one device?",
      saferChoice:
        "Maintain protected backups and a tested recovery process.",
    },
    {
      name: "Lifecycle responsibility",
      saferQuestion:
        "Who creates, stores, shares, retains, backs up, and eventually deletes the information?",
      saferChoice:
        "Assign clear ownership and use approved rules at every stage.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Data Value and Impact Board
      </h2>
      <p className="mt-3 text-slate-300">
        Data value is measured by what could happen if the information is
        exposed, changed, lost, unavailable, or misused.
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

export default function WhyDataNeedsProtectionPage() {
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
              Lesson 1 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B11.1 Why Data Needs Protection
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn why personal, school, family, and organizational information
            has value and how exposure, misuse, alteration, loss, or
            unavailability can create real harm.
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
          lessonTitle="Why Data Needs Protection"
          lessonNumber={1}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that data can have value even when it does not include a password.",
            "I will use fictional files, records, accounts, people, schools, families, and organizations only.",
            "I am ready to compare data ownership, sensitivity, impact, access, storage, and recovery needs.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Small File Can Create a Large Impact"
        >
          <p className="leading-8">
            A contact list, draft project, family photo folder, medical note,
            attendance record, or cloud document may seem ordinary. The value
            becomes clear when the file is exposed, changed, deleted, shared
            incorrectly, or unavailable when someone needs it.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every file,
            record, person, account, link, school, family, and organization in
            this lesson is fictional. Never share real private information.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain why different kinds of data have value and require protection.",
            "Recognize personal, sensitive, public, academic, family, and organizational information.",
            "Choose safe ownership, access, storage, sharing, backup, and retention decisions.",
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
          title="Data Can Affect Privacy, Safety, Trust, and Opportunity"
        >
          <p className="leading-8">
            Information may affect grades, identity, relationships, finances,
            health, school decisions, family privacy, or organizational
            operations. Protection should match the possible impact if the data
            is mishandled.
          </p>
        </SectionCard>

        <ProtectionFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Protection Begins With Understanding the Information"
        >
          <p className="leading-8">
            Defenders cannot protect data well without knowing what it contains,
            who owns it, where it is stored, who needs access, how long it should
            be kept, and what recovery would require after loss or damage.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Understanding Data Value
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

        <ValueBoard />
        <FakeDataPanel />

        <FakeDashboardCard
          title="Fake Data Protection Dashboard"
          subtitle="Training dashboard using fictional data ownership, sensitivity, access, storage, sharing, and recovery evidence."
          metrics={[
            {
              label: "Data sets reviewed",
              value: "20",
              note: "Fictional school, family, personal, public, and organizational information.",
            },
            {
              label: "Sensitive items",
              value: "11",
              note: "Items requiring limited access, trusted storage, or protected sharing.",
            },
            {
              label: "Protection gaps",
              value: "8",
              note: "Public links, unclear ownership, single copies, broad access, and weak retention decisions.",
            },
          ]}
        />

        <FakeAlertCard
          title="Private Student Contact List Shared Through Public Link"
          severity="High"
          time="1:18 PM"
          source="Fake School Data Training"
          details="A fictional class contact list containing student names and school email addresses is stored in a folder that anyone with the link can open."
          recommendation="Remove public access, limit permissions to approved school users, identify the data owner, and report the exposure through the school process."
        />

        <FakeLogPanel
          title="Fake Data Protection Review Log"
          logs={[
            "13:02:11 DATASET name='class_contact_list' owner='teacher'",
            "13:04:25 CONTENT names='present' school_emails='present' sensitivity='private'",
            "13:07:18 SHARING link_scope='anyone_with_link' permission='view'",
            "13:10:43 ACCESS expected_users='class_members_only' actual_scope='public_link'",
            "13:14:09 CONTAINMENT public_link='removed' approved_users='restored'",
            "13:18:02 REPORT school_process='submitted' follow_up='scheduled'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Data Needs the Strongest Protection?"
          evidence={[
            "A fictional public event flyer contains only approved public details.",
            "A medical accommodation note contains private health-related information.",
            "A draft research project can be recovered only from one laptop.",
            "A class contact list includes student names and school email addresses.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The medical note and contact list need limited access, while the draft also needs a protected backup; the flyer may be public after approval.",
            "Every item should be shared publicly.",
            "Only the flyer needs protection.",
            "The draft does not matter because it is unfinished.",
          ]}
          bestAnswer={0}
          explanation="Protection should match sensitivity, access needs, and the impact of exposure, alteration, or loss."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Data Protection"
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
          title="Classify Fictional Data by Value and Impact"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Data Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Data Value Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student reviews a public flyer, contact list,
                medical note, family photo folder, project draft, club budget,
                and school attendance record.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the data owner and approved purpose.</li>
                <li>Classify the information by sensitivity and impact.</li>
                <li>Choose who should have access.</li>
                <li>Choose a trusted storage and sharing method.</li>
                <li>Decide whether a protected backup is required.</li>
                <li>Record retention and deletion responsibility.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Contact List Is Shared With a Public Link"
          scenario="A fictional student notices that a class contact list can be opened by anyone with the link."
          choices={[
            {
              label: "Choice A",
              response:
                "Remove public access, limit the file to approved users, and report the exposure to the data owner.",
              outcome:
                "Best defensive choice. The action contains exposure and restores appropriate access.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave the link public because the email addresses are school accounts.",
              outcome:
                "Risky. School email addresses and class membership are still private information.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Post the link in more places so everyone receives it.",
              outcome:
                "Unsafe. This increases the exposure.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Only Copy of a Project Is on One Laptop"
          scenario="A fictional student has spent several weeks on a project, but the only copy is stored on one device."
          choices={[
            {
              label: "Choice A",
              response:
                "Create a protected backup in an approved location and verify that the copy can be accessed.",
              outcome:
                "Best defensive choice. The project becomes recoverable if the device is lost or damaged.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep one copy because the laptop is usually reliable.",
              outcome:
                "Risky. One device creates a single point of failure.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Publish the project publicly as a backup.",
              outcome:
                "Unsafe. Public exposure is not a safe backup strategy.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Why Data Needs Protection Checklist"
          items={[
            "I identify what the data contains and who owns it.",
            "I consider privacy, integrity, availability, safety, trust, and recovery impact.",
            "I limit access to approved people and services.",
            "I use trusted storage and careful sharing methods.",
            "I maintain protected backups for important information.",
            "I follow clear retention and deletion responsibility.",
          ]}
        />

        <MiniQuiz
          title="B11.1 Mini Quiz: Why Data Needs Protection"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional data protection review. Include seven data examples, owner, purpose, sensitivity, possible impact, approved users, storage method, backup need, and retention decision."
          tips={[
            "Use fictional people, schools, organizations, accounts, files, and records only.",
            "Do not include real private, medical, financial, school, family, or identifying information.",
            "Explain why the protection level matches the possible impact.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Data has value because exposure, alteration, loss, misuse, or unavailability can create harm.",
            "Sensitive data includes more than passwords and financial information.",
            "Data owners are responsible for approved use, access, sharing, retention, and protection.",
            "Trusted storage and limited access reduce exposure risk.",
            "Protected backups reduce the impact of loss, damage, or unavailability.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}