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
  "/high-school/beginner/intro-to-cryptography-concepts";
const previousLesson =
  `${modulePath}/asymmetric-encryption-basics`;
const nextLesson =
  `${modulePath}/certificates-and-secure-connections`;

const vocab = [
  [
    "Cryptographic hash",
    "A one-way mathematical result that represents input data as a fixed-length digital fingerprint.",
  ],
  [
    "Hash value",
    "The fixed-length output produced by a cryptographic hash function.",
  ],
  [
    "Integrity check",
    "A comparison used to determine whether data appears unchanged from a trusted reference.",
  ],
  [
    "One-way function",
    "A process designed to be easy to calculate in one direction but impractical to reverse into the original input.",
  ],
  [
    "Collision",
    "A situation in which two different inputs produce the same hash value.",
  ],
  [
    "Salt",
    "A unique random value added before password hashing so identical passwords do not produce identical stored results.",
  ],
];

const workflowStages = [
  {
    title: "Start with trusted data",
    example:
      "Use an approved original file, message, record, or password-processing workflow.",
  },
  {
    title: "Calculate the hash",
    example:
      "A trusted hash function produces a fixed-length digital fingerprint.",
  },
  {
    title: "Record the trusted value",
    example:
      "The expected hash is stored or published through an approved trusted source.",
  },
  {
    title: "Compare later",
    example:
      "A new hash is calculated and compared to determine whether the data appears unchanged.",
  },
];

const conceptRows = [
  {
    item: "Software download",
    source: "Publisher provides a trusted expected hash",
    review:
      "Compare the downloaded file through an approved verification tool before use.",
  },
  {
    item: "Backup archive",
    source: "Hash recorded when the trusted backup is created",
    review:
      "Compare during approved recovery to help detect unexpected changes.",
  },
  {
    item: "Document transfer",
    source: "Sender and recipient compare trusted hash values",
    review:
      "A match supports integrity, but identity and confidentiality still require separate checks.",
  },
  {
    item: "Password storage",
    source: "Approved service stores salted password hashes",
    review:
      "Use trusted account systems rather than storing readable passwords.",
  },
  {
    item: "Unexpected mismatch",
    source: "Current file hash differs from the trusted reference",
    review:
      "Stop, preserve evidence, verify the source, and obtain a trusted copy.",
  },
];

const mistakes = [
  "Treating hashing as reversible encryption.",
  "Assuming a matching hash automatically proves who created the file.",
  "Comparing against a hash from the same untrusted source as the file.",
  "Ignoring a mismatch because the filename and icon look correct.",
  "Using outdated or unsupported hash methods for sensitive verification.",
  "Storing readable passwords instead of using an approved salted-hashing system.",
];

const quizQuestions = [
  {
    question: "What does a cryptographic hash function produce?",
    choices: [
      "A fixed-length digital fingerprint of the input.",
      "A public encryption key.",
      "A readable backup copy.",
      "A browser certificate.",
    ],
    answer: 0,
    explanation:
      "A cryptographic hash function produces a fixed-length value that represents the input data.",
  },
  {
    question: "What usually happens if a file changes?",
    choices: [
      "Its cryptographic hash should change.",
      "Its hash must remain identical.",
      "It automatically becomes encrypted.",
      "Its owner always changes.",
    ],
    answer: 0,
    explanation:
      "Even a small input change should normally produce a different cryptographic hash.",
  },
  {
    question: "Is hashing the same as encryption?",
    choices: [
      "No. Hashing is designed as a one-way integrity process, while encryption supports authorized recovery.",
      "Yes. Both always use the same key.",
      "Yes. Every hash can be decrypted.",
      "Yes. Hashing always hides a message for later recovery.",
    ],
    answer: 0,
    explanation:
      "Encryption is intended to be reversible with authorized keys, while cryptographic hashing is designed to be one-way.",
  },
  {
    question: "What should happen if a downloaded file hash does not match the trusted value?",
    choices: [
      "Do not use the file; verify the source, preserve evidence, and obtain a trusted copy.",
      "Install it anyway if the filename looks correct.",
      "Disable security tools.",
      "Change the expected hash to match the file.",
    ],
    answer: 0,
    explanation:
      "A mismatch may indicate corruption, incomplete transfer, or unauthorized modification.",
  },
  {
    question: "Why are salts used in approved password-hashing systems?",
    choices: [
      "To make identical passwords produce different stored hash results.",
      "To make passwords public.",
      "To remove the need for account security.",
      "To convert passwords into encryption keys for sharing.",
    ],
    answer: 0,
    explanation:
      "Unique salts reduce the usefulness of precomputed comparisons and prevent identical passwords from having identical stored results.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B12</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B12.4 Asymmetric Encryption Basics
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
          Next: B12.6 Certificates and Secure Connections
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

function HashingFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        From Data to Integrity Check
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Hashing turns input data into a fixed-length fingerprint that can be
        compared later to help detect changes.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {workflowStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> a hash comparison is
        only meaningful when the expected value comes from a trusted,
        independently verified source.
      </div>
    </section>
  );
}

function FakeHashPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Hash and Integrity Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares trusted hashes, current values,
            integrity status, source trust, and defensive response.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {conceptRows.map((row) => (
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

function HashingBoard() {
  const areas = [
    {
      name: "Input",
      saferQuestion:
        "Which exact file, message, password-processing input, or backup is being hashed?",
      saferChoice:
        "Identify the data precisely and avoid comparing different versions or formats by mistake.",
    },
    {
      name: "Trusted hash",
      saferQuestion:
        "Where did the expected value come from, and is that source independent and trusted?",
      saferChoice:
        "Use an official publisher, approved system, signed record, or trusted internal reference.",
    },
    {
      name: "Comparison",
      saferQuestion:
        "Does the newly calculated value match the expected value exactly?",
      saferChoice:
        "Treat an unexplained mismatch as a reason to stop, verify, and investigate.",
    },
    {
      name: "Meaning",
      saferQuestion:
        "What does a match prove, and what does it not prove?",
      saferChoice:
        "A match supports integrity for the compared data, but identity, confidentiality, and authorization may need separate controls.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Hash Verification Board
      </h2>
      <p className="mt-3 text-slate-300">
        Strong integrity verification depends on the exact input, a trusted
        expected value, an accurate comparison, and careful interpretation.
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

export default function HashingAndDataIntegrityPage() {
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
              Module B12
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 5 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B12.5 Hashing and Data Integrity
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how cryptographic hashes create fixed-length digital
            fingerprints that help detect changes in files, messages,
            downloads, backups, records, and approved password systems.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B12: Introduction to Cryptography Concepts"
          lessonTitle="Hashing and Data Integrity"
          lessonNumber={5}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that hashing and encryption have different purposes.",
            "I will use fictional files, hashes, downloads, backups, records, passwords, and organizations only.",
            "I am ready to compare trusted expected hashes with newly calculated values.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Tiny Change Can Produce a Completely Different Fingerprint"
        >
          <p className="leading-8">
            A document may look identical after a hidden change. A software
            download may keep the same filename after corruption or tampering.
            Cryptographic hashes help defenders compare the exact data rather
            than relying only on appearance.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every file, hash,
            download, backup, password record, account, and organization in this
            lesson is fictional. Never upload real passwords or sensitive files
            to untrusted hash-checking websites.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain how cryptographic hashes create fixed-length one-way fingerprints.",
            "Use trusted hash comparisons to reason about file, message, download, and backup integrity.",
            "Recognize the limits of hashing and the purpose of salted password hashing.",
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
          title="Appearance Does Not Prove Integrity"
        >
          <p className="leading-8">
            Two files can have the same name and icon while containing
            different data. A trusted hash comparison helps determine whether
            the exact content appears unchanged.
          </p>
        </SectionCard>

        <HashingFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Hashing Creates a One-Way Digital Fingerprint"
        >
          <p className="leading-8">
            A cryptographic hash function accepts input of many possible sizes
            and produces a fixed-length output. The same exact input should
            produce the same value, while a changed input should normally
            produce a different value.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Hashing and Integrity
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

        <HashingBoard />
        <FakeHashPanel />

        <FakeDashboardCard
          title="Fake Hash Verification Dashboard"
          subtitle="Training dashboard using fictional files, downloads, backups, expected hashes, current hashes, and integrity decisions."
          metrics={[
            {
              label: "Items verified",
              value: "22",
              note: "Fictional software files, documents, backups, messages, and records.",
            },
            {
              label: "Hash matches",
              value: "18",
              note: "Current values matched trusted independent references.",
            },
            {
              label: "Mismatches investigated",
              value: "4",
              note: "Files were blocked, sources were checked, and trusted copies were requested.",
            },
          ]}
        />

        <FakeAlertCard
          title="Downloaded File Hash Does Not Match"
          severity="High"
          time="12:18 PM"
          source="Fake Integrity Verification Training"
          details="A fictional software package has a different hash than the value published through the official trusted source."
          recommendation="Do not open or install the file. Preserve the mismatch evidence, verify the source, delete or quarantine through approved procedures, and obtain a trusted copy."
        />

        <FakeLogPanel
          title="Fake Hash Comparison Log"
          logs={[
            "11:52:07 FILE name='school_tool.pkg' source='official_publisher'",
            "11:56:24 EXPECTED_HASH source='trusted_publisher_page' status='recorded'",
            "12:01:39 CURRENT_HASH status='calculated' match='false'",
            "12:06:15 INTEGRITY result='mismatch' execution='blocked'",
            "12:11:43 SOURCE_CHECK download_origin='unverified_mirror'",
            "12:18:02 RESPONSE trusted_copy='requested' report='submitted'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="What Does the Hash Mismatch Mean?"
          evidence={[
            "A fictional file was downloaded from an unofficial mirror.",
            "The official publisher provides a trusted expected hash.",
            "The calculated hash does not match.",
            "The filename and icon look correct.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The file should not be trusted or used until the source and integrity are verified.",
            "The file is safe because the filename matches.",
            "The expected hash should be changed to match the downloaded file.",
            "The mismatch proves the file is encrypted.",
          ]}
          bestAnswer={0}
          explanation="A mismatch indicates that the exact file content differs from the trusted reference and requires investigation."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Hash Verification"
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
          title="Compare Fictional Hash Evidence"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Evidence Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Integrity Verification Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student reviews a software download, backup archive,
                transferred document, signed notice, password-storage record,
                and unexplained hash mismatch.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the exact input and version.</li>
                <li>Identify the trusted expected hash source.</li>
                <li>Compare the values exactly.</li>
                <li>Record whether the result matches.</li>
                <li>Explain what the result supports and what it does not prove.</li>
                <li>Choose the safest response to a mismatch.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Trusted Backup Hash Changes"
          scenario="A fictional backup archive has a different hash during recovery than the trusted value recorded when the backup was created."
          choices={[
            {
              label: "Choice A",
              response:
                "Pause recovery, preserve evidence, verify the backup source, compare other trusted copies, and report the mismatch.",
              outcome:
                "Best defensive choice. The backup may be corrupted, incomplete, or altered.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Restore it immediately because it is labeled backup.",
              outcome:
                "Risky. The integrity mismatch has not been explained.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Change the trusted record to match the current value.",
              outcome:
                "Unsafe. This destroys the independent integrity reference.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Readable Passwords Are Stored in a Spreadsheet"
          scenario="A fictional club stores account passwords as readable text in a shared spreadsheet and claims hashing is unnecessary."
          choices={[
            {
              label: "Choice A",
              response:
                "Stop the unsafe practice, report it, move accounts to an approved authentication system, and use salted password hashing through trusted services.",
              outcome:
                "Best defensive choice. Passwords should not be stored as readable shared text.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Rename the spreadsheet so it looks private.",
              outcome:
                "Risky. Renaming does not protect the passwords.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Post the spreadsheet so every member has a backup.",
              outcome:
                "Unsafe. This creates a major credential exposure.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Hashing and Data Integrity Checklist"
          items={[
            "I understand that a cryptographic hash is a fixed-length one-way fingerprint.",
            "I compare the exact same input and version.",
            "I use a trusted independent source for the expected hash.",
            "I treat unexplained mismatches as reasons to stop and verify.",
            "I understand that a matching hash supports integrity but does not automatically prove identity or confidentiality.",
            "I understand that hashing is not reversible encryption.",
            "I support approved salted password-hashing systems instead of readable password storage.",
          ]}
        />

        <MiniQuiz
          title="B12.5 Mini Quiz: Hashing and Data Integrity"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional hash-verification plan. Include six data items, trusted source, expected hash, current hash, match status, integrity conclusion, additional identity or confidentiality controls, and response to a mismatch."
          tips={[
            "Use fictional files, hashes, downloads, backups, records, passwords, accounts, and organizations only.",
            "Do not upload real passwords or sensitive files to untrusted tools.",
            "Explain why the expected hash source can be trusted independently from the file.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cryptographic hashes create fixed-length one-way digital fingerprints.",
            "The same exact input should produce the same hash value.",
            "A changed input should normally produce a different hash.",
            "A trusted expected value is essential for meaningful integrity verification.",
            "Hashing supports integrity but does not automatically provide confidentiality or prove identity.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}