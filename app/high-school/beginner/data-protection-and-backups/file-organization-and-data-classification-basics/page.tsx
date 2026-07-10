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
  `${modulePath}/confidentiality-integrity-and-availability-in-data`;
const nextLesson =
  `${modulePath}/cloud-storage-safety`;

const vocab = [
  [
    "Data classification",
    "Assigning a protection label to information based on sensitivity, purpose, impact, ownership, and approved access.",
  ],
  [
    "Public data",
    "Information approved for broad release, such as an official event announcement or published resource.",
  ],
  [
    "Internal data",
    "Information intended for approved members of a school, team, family, or organization but not for the general public.",
  ],
  [
    "Private data",
    "Information that should be limited to specific approved people because exposure could create privacy or operational harm.",
  ],
  [
    "Highly sensitive data",
    "Information requiring the strongest handling because exposure, alteration, or loss could create serious harm.",
  ],
  [
    "Retention",
    "The approved length of time information should be kept before review, archival, or deletion.",
  ],
];

const organizationStages = [
  {
    title: "Identify ownership",
    example:
      "Determine who is responsible for the file, why it exists, and who is allowed to use it.",
  },
  {
    title: "Classify sensitivity",
    example:
      "Label the file as public, internal, private, or highly sensitive based on impact and access needs.",
  },
  {
    title: "Organize clearly",
    example:
      "Use descriptive names, approved folders, dates, versions, and consistent structure.",
  },
  {
    title: "Apply handling rules",
    example:
      "Match sharing, editing, retention, backup, and deletion decisions to the classification.",
  },
];

const fileRows = [
  {
    item: "Public event flyer",
    source: "Approved announcement with date, time, and location",
    review:
      "Classify as public after approval and store in the official published-materials folder.",
  },
  {
    item: "Club planning notes",
    source: "Draft agenda and internal task assignments",
    review:
      "Classify as internal and limit access to approved club members.",
  },
  {
    item: "Student contact list",
    source: "Names, school emails, and class membership",
    review:
      "Classify as private and restrict access to approved school users.",
  },
  {
    item: "Medical accommodation record",
    source: "Private health-related information",
    review:
      "Classify as highly sensitive and follow strict authorized handling and retention rules.",
  },
  {
    item: "Final project versions",
    source: "Files named final, final2, final-new, and final-really-final",
    review:
      "Use clear version naming, ownership, dates, and an approved final folder.",
  },
];

const mistakes = [
  "Using vague filenames such as document1, final2, or new-final.",
  "Storing public and highly sensitive files in the same broadly shared folder.",
  "Giving everyone edit access instead of matching access to roles.",
  "Keeping duplicate files without identifying the trusted version.",
  "Saving important information without a clear owner or retention rule.",
  "Deleting records without checking policy, ownership, backup, or legal requirements.",
];

const quizQuestions = [
  {
    question: "What is data classification?",
    choices: [
      "Assigning a protection label based on sensitivity, impact, ownership, and approved access.",
      "Changing every file into a PDF.",
      "Sharing all files with the same group.",
      "Deleting old folders automatically.",
    ],
    answer: 0,
    explanation:
      "Classification connects the value and sensitivity of data to the correct handling rules.",
  },
  {
    question: "Which item is most likely public data?",
    choices: [
      "An approved event flyer intended for broad release.",
      "A student medical accommodation record.",
      "A private contact list.",
      "An internal staff planning document.",
    ],
    answer: 0,
    explanation:
      "Public data is intentionally approved for broad distribution.",
  },
  {
    question: "Why are clear filenames important?",
    choices: [
      "They help users identify ownership, purpose, date, version, and trusted content.",
      "They remove the need for backups.",
      "They make every file public.",
      "They replace access controls.",
    ],
    answer: 0,
    explanation:
      "Clear naming reduces confusion, overwriting, duplicate files, and accidental use of the wrong version.",
  },
  {
    question: "What should determine retention?",
    choices: [
      "Approved purpose, ownership, policy, value, and recovery or legal needs.",
      "Whether the filename is short.",
      "Whether the file is colorful.",
      "Whether the folder is old.",
    ],
    answer: 0,
    explanation:
      "Retention should follow approved rules rather than random deletion or indefinite storage.",
  },
  {
    question: "Which access choice best follows classification?",
    choices: [
      "Give only the people who need the data the minimum approved access.",
      "Give everyone edit access.",
      "Use a public link for every file.",
      "Store sensitive files in an open shared folder.",
    ],
    answer: 0,
    explanation:
      "Classification should guide limited, role-based access and handling.",
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
          Previous: B11.2 Confidentiality, Integrity, and Availability in Data
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
          Next: B11.4 Cloud Storage Safety
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

function OrganizationFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The File Organization and Classification Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong file handling connects ownership, classification, organization,
        access, backup, retention, and deletion.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {organizationStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> classification is only
        useful when the label changes how the file is stored, shared, edited,
        backed up, retained, and deleted.
      </div>
    </section>
  );
}

function FakeClassificationPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            File Organization and Classification Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares public, internal, private, highly
            sensitive, versioned, and retained information.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {fileRows.map((row) => (
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

function ClassificationBoard() {
  const areas = [
    {
      name: "Public",
      saferQuestion:
        "Has the information been approved for broad release, and does it avoid private or sensitive details?",
      saferChoice:
        "Publish only the approved version and keep ownership and release status clear.",
    },
    {
      name: "Internal",
      saferQuestion:
        "Is the file intended only for approved members of a team, class, family, or organization?",
      saferChoice:
        "Limit access to the relevant group and avoid public sharing links.",
    },
    {
      name: "Private",
      saferQuestion:
        "Could exposure create privacy, academic, personal, or operational harm?",
      saferChoice:
        "Use specific authorized access, trusted storage, and protected backups.",
    },
    {
      name: "Highly sensitive",
      saferQuestion:
        "Could exposure, alteration, or loss create serious harm or require strict legal or policy handling?",
      saferChoice:
        "Apply the strongest approved access, sharing, retention, logging, and recovery controls.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Data Classification Board
      </h2>
      <p className="mt-3 text-slate-300">
        Classification labels should reflect sensitivity, approved use,
        possible impact, and required handling.
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

export default function FileOrganizationDataClassificationBasicsPage() {
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
              Lesson 3 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B11.3 File Organization and Data Classification Basics
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how ownership, clear naming, folder structure, versioning,
            classification, access, retention, backup, and deletion rules reduce
            mistakes and protect important information.
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
          lessonTitle="File Organization and Data Classification Basics"
          lessonNumber={3}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that file organization and classification reduce accidental exposure, overwriting, and loss.",
            "I will use fictional files, folders, people, organizations, labels, links, and records only.",
            "I am ready to classify data and match each label with access, storage, sharing, retention, and backup rules.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Poor Organization Can Become a Security Problem"
        >
          <p className="leading-8">
            When files have unclear names, duplicate versions, unknown owners,
            broad permissions, or mixed sensitivity levels, users may share the
            wrong document, overwrite the trusted version, or expose private
            information by mistake.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every file,
            folder, label, account, owner, record, and organization in this
            lesson is fictional. Never reorganize or reclassify real managed
            data without permission.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain public, internal, private, highly sensitive, ownership, versioning, and retention concepts.",
            "Recognize unclear filenames, mixed-sensitivity folders, broad permissions, duplicates, and uncertain trusted versions.",
            "Choose clear organization, classification, access, retention, backup, and deletion decisions.",
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
          title="The Wrong File in the Wrong Folder Can Expose Data"
        >
          <p className="leading-8">
            A private contact list placed beside a public flyer may inherit the
            wrong sharing settings. A file named final2 may replace the trusted
            version. Clear structure and classification help users make safer
            decisions before a mistake happens.
          </p>
        </SectionCard>

        <OrganizationFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Labels Must Change Handling"
        >
          <p className="leading-8">
            Calling a file private is not enough. The label should determine who
            can view or edit it, where it is stored, how it is backed up, how
            long it is kept, and how it is shared or deleted.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for File Organization and Classification
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

        <ClassificationBoard />
        <FakeClassificationPanel />

        <FakeDashboardCard
          title="Fake File Classification Dashboard"
          subtitle="Training dashboard using fictional ownership, filenames, folders, labels, access, versions, retention, and backup evidence."
          metrics={[
            {
              label: "Files reviewed",
              value: "24",
              note: "Fictional public, internal, private, and highly sensitive records.",
            },
            {
              label: "Organization issues",
              value: "12",
              note: "Unclear names, duplicate versions, mixed folders, and unknown owners.",
            },
            {
              label: "Correct classifications",
              value: "20",
              note: "Labels were matched with safer access, storage, sharing, and retention rules.",
            },
          ]}
        />

        <FakeAlertCard
          title="Highly Sensitive Record Stored in Public Folder"
          severity="High"
          time="10:14 AM"
          source="Fake Data Classification Training"
          details="A fictional medical accommodation record is stored in the same publicly shared folder as an approved event flyer."
          recommendation="Remove public access, move the record to approved highly sensitive storage, restore authorized access, and report the exposure to the data owner."
        />

        <FakeLogPanel
          title="Fake Classification Review Log"
          logs={[
            "09:58:03 FILE name='student_support_note.pdf' owner='school_office'",
            "10:01:19 CLASSIFICATION expected='highly_sensitive' actual='unlabeled'",
            "10:04:45 FOLDER name='public_event_materials' link_scope='public'",
            "10:07:32 EXPOSURE unauthorized_view='possible' retention_rule='required'",
            "10:11:06 CONTAINMENT public_access='removed' approved_storage='restored'",
            "10:14:22 REPORT data_owner='notified' classification='updated'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="How Should These Files Be Organized?"
          evidence={[
            "A fictional event flyer is approved for public release.",
            "A club task list is intended only for members.",
            "A class contact list includes student names and school email addresses.",
            "A medical accommodation record contains private health-related information.",
          ]}
          question="What is the safest classification plan?"
          options={[
            "Classify the flyer as public, the task list as internal, the contact list as private, and the medical record as highly sensitive.",
            "Place every file in one public folder.",
            "Classify every file as public because they relate to school.",
            "Give everyone edit access so classification is easier.",
          ]}
          bestAnswer={0}
          explanation="The classifications match the intended audience, sensitivity, and possible impact of exposure."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken File Organization"
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
          title="Organize and Classify a Fictional File Set"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake File Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                File Organization Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student reviews an event flyer, club notes, contact
                list, medical record, final project versions, old drafts, and a
                folder with unclear ownership.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify owner, purpose, and approved users.</li>
                <li>Assign a classification label.</li>
                <li>Create a clear folder and filename structure.</li>
                <li>Identify the trusted version and archive older drafts appropriately.</li>
                <li>Choose access, backup, retention, and deletion rules.</li>
                <li>Verify that the final structure matches the classification.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Medical Record Appears in a Public Folder"
          scenario="A fictional student notices that a highly sensitive support record is stored beside public event materials."
          choices={[
            {
              label: "Choice A",
              response:
                "Remove public access, move the record to approved restricted storage, and notify the data owner.",
              outcome:
                "Best defensive choice. It contains exposure and restores handling that matches the classification.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave it there because the filename is not obvious.",
              outcome:
                "Risky. Hidden meaning does not make public access safe.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Rename the record and keep the public link active.",
              outcome:
                "Unsafe. Renaming does not correct the access problem.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Several Files Are Named Final"
          scenario="A fictional project folder contains final.docx, final2.docx, final-new.docx, and final-really-final.docx."
          choices={[
            {
              label: "Choice A",
              response:
                "Verify the trusted version, use a clear date-and-version naming rule, and archive older drafts.",
              outcome:
                "Best defensive choice. Clear version control protects integrity and reduces overwriting mistakes.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete every file except the newest modified date without checking.",
              outcome:
                "Risky. The newest timestamp may not represent the approved version.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Give everyone edit access so they can choose a version.",
              outcome:
                "Unsafe. This increases confusion and integrity risk.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="File Organization and Data Classification Checklist"
          items={[
            "I identify the owner, purpose, sensitivity, and approved users for each file.",
            "I classify data as public, internal, private, or highly sensitive.",
            "I use clear folder names, filenames, dates, and version labels.",
            "I separate files with different sensitivity and access needs.",
            "I match classification with storage, sharing, editing, backup, retention, and deletion rules.",
            "I verify the trusted version before archiving or deleting duplicates.",
          ]}
        />

        <MiniQuiz
          title="B11.3 Mini Quiz: File Organization and Data Classification Basics"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional file classification plan. Include eight files, owner, purpose, classification, folder, filename, approved users, permission level, backup need, retention rule, and trusted-version method."
          tips={[
            "Use fictional people, files, folders, schools, organizations, labels, and records only.",
            "Do not include real private, medical, school, family, or identifying information.",
            "Explain how the classification changes the handling rules.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Data classification connects sensitivity and impact with practical handling rules.",
            "Public, internal, private, and highly sensitive data require different access and sharing decisions.",
            "Clear filenames, folders, dates, and versions reduce accidental overwriting and confusion.",
            "Retention and deletion should follow ownership, policy, purpose, and recovery needs.",
            "A label is only effective when storage, access, backup, and sharing match it.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}