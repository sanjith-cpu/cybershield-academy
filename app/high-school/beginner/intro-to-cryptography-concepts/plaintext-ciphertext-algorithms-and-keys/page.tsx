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
  `${modulePath}/what-cryptography-does`;
const nextLesson =
  `${modulePath}/symmetric-encryption-basics`;

const vocab = [
  [
    "Plaintext",
    "Readable information before encryption or after successful decryption.",
  ],
  [
    "Ciphertext",
    "Protected output produced when plaintext is transformed by an encryption algorithm and key.",
  ],
  [
    "Algorithm",
    "A defined mathematical process used for encryption, decryption, hashing, signatures, or other cryptographic operations.",
  ],
  [
    "Key",
    "A value used with a cryptographic algorithm to control how data is protected or recovered.",
  ],
  [
    "Encryption",
    "The process of transforming plaintext into ciphertext using an approved algorithm and key.",
  ],
  [
    "Decryption",
    "The approved process of transforming ciphertext back into readable plaintext using the correct key.",
  ],
];

const workflowStages = [
  {
    title: "Start with plaintext",
    example:
      "The original message, file, or record is readable and should be classified before protection.",
  },
  {
    title: "Use an algorithm",
    example:
      "An approved cryptographic method defines how the information will be transformed.",
  },
  {
    title: "Apply the key",
    example:
      "The key controls the specific result and must be protected according to its role.",
  },
  {
    title: "Produce ciphertext",
    example:
      "The protected output should be unreadable without the correct authorized recovery process.",
  },
];

const conceptRows = [
  {
    item: "Plaintext message",
    source: "Readable project note before protection",
    review:
      "Classify the information and avoid exposing it before approved encryption.",
  },
  {
    item: "Encryption algorithm",
    source: "Approved method selected by the trusted service",
    review:
      "Use supported cryptography rather than inventing a custom method.",
  },
  {
    item: "Secret key",
    source: "Required to protect and recover the data",
    review:
      "Store through an approved method and never post or send it through untrusted channels.",
  },
  {
    item: "Ciphertext file",
    source: "Protected output appears unreadable",
    review:
      "Keep ownership, backup, key access, and recovery responsibility documented.",
  },
  {
    item: "Recovery process",
    source: "Authorized user needs the correct key",
    review:
      "Verify identity and use the approved decryption workflow.",
  },
];

const mistakes = [
  "Assuming unreadable data is automatically secure without knowing the method or key handling.",
  "Sharing a secret or private key beside the ciphertext.",
  "Inventing a homemade encryption method for sensitive data.",
  "Confusing encoding or compression with encryption.",
  "Deleting the only authorized recovery key without an approved recovery plan.",
  "Believing the algorithm must be secret instead of protecting the key and implementation.",
];

const quizQuestions = [
  {
    question: "What is plaintext?",
    choices: [
      "Readable information before encryption or after authorized decryption.",
      "A protected hash value.",
      "A certificate warning.",
      "A backup schedule.",
    ],
    answer: 0,
    explanation:
      "Plaintext is the readable form of the information.",
  },
  {
    question: "What is ciphertext?",
    choices: [
      "Protected output created by encryption.",
      "The public name of a website.",
      "A list of approved users.",
      "A recovery contact.",
    ],
    answer: 0,
    explanation:
      "Ciphertext is the transformed output that should not be readable without the correct key and process.",
  },
  {
    question: "What role does a cryptographic key play?",
    choices: [
      "It works with an algorithm to control the specific protection or recovery result.",
      "It replaces the algorithm.",
      "It makes backups unnecessary.",
      "It must always be public.",
    ],
    answer: 0,
    explanation:
      "The algorithm defines the process while the key controls a specific cryptographic result.",
  },
  {
    question: "Which part usually needs the strongest secrecy?",
    choices: [
      "The secret or private key.",
      "The general name of the approved algorithm.",
      "The lesson title.",
      "The file extension.",
    ],
    answer: 0,
    explanation:
      "Modern cryptography normally relies on protecting keys rather than hiding the algorithm.",
  },
  {
    question: "What is decryption?",
    choices: [
      "The approved transformation of ciphertext back into readable plaintext.",
      "The deletion of every protected file.",
      "The creation of a public sharing link.",
      "The compression of a folder.",
    ],
    answer: 0,
    explanation:
      "Decryption uses the correct authorized key and process to recover readable data.",
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
          Previous: B12.1 What Cryptography Does
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
          Next: B12.3 Symmetric Encryption Basics
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

function EncryptionFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Plaintext to Ciphertext
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Encryption combines readable information, an approved algorithm, and a
        key to produce protected ciphertext.
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
        <span className="font-bold">Defender rule:</span> trusted algorithms may
        be publicly known. The protection depends heavily on strong keys, safe
        key handling, correct implementation, and approved use.
      </div>
    </section>
  );
}

function FakeConceptPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Encryption Concept Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares plaintext, algorithms, keys,
            ciphertext, and approved recovery.
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

function ConceptBoard() {
  const areas = [
    {
      name: "Plaintext",
      saferQuestion:
        "What readable information is being protected, and what is its sensitivity?",
      saferChoice:
        "Classify the data and limit exposure before encryption begins.",
    },
    {
      name: "Algorithm",
      saferQuestion:
        "Is the method approved, supported, and appropriate for the service or data?",
      saferChoice:
        "Use trusted cryptographic tools and avoid custom homemade methods.",
    },
    {
      name: "Key",
      saferQuestion:
        "Who may use the key, where is it stored, and how is recovery handled?",
      saferChoice:
        "Protect secret and private keys through approved access, storage, rotation, and recovery processes.",
    },
    {
      name: "Ciphertext",
      saferQuestion:
        "Can authorized users recover the data while unauthorized users remain unable to read it?",
      saferChoice:
        "Verify approved decryption, ownership, backups, permissions, and recovery responsibility.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Plaintext, Algorithm, Key, and Ciphertext Board
      </h2>
      <p className="mt-3 text-slate-300">
        Every part of the encryption workflow has a different defensive
        responsibility.
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

export default function PlaintextCiphertextAlgorithmsKeysPage() {
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
              Lesson 2 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B12.2 Plaintext, Ciphertext, Algorithms, and Keys
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn the basic language of encryption and how readable plaintext,
            approved algorithms, protected keys, ciphertext, and authorized
            decryption work together.
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
          lessonTitle="Plaintext, Ciphertext, Algorithms, and Keys"
          lessonNumber={2}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that encryption transforms readable data into protected output.",
            "I will use fictional messages, files, keys, accounts, services, and recovery processes only.",
            "I am ready to distinguish plaintext, ciphertext, algorithms, keys, encryption, and decryption.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Algorithm Can Be Known While the Key Remains Protected"
        >
          <p className="leading-8">
            Strong modern cryptography does not depend on hiding the name of the
            algorithm. The method may be widely studied, while the security of a
            specific file or connection depends on the correct implementation
            and protected key.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every message,
            file, key, account, service, and recovery process in this lesson is
            fictional. Never share real secret keys, private keys, passwords,
            MFA codes, or recovery codes.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Define plaintext, ciphertext, algorithms, keys, encryption, and decryption.",
            "Explain how an algorithm and key work together without using operational cryptographic instructions.",
            "Recognize unsafe key sharing, custom methods, false encryption claims, and missing recovery planning.",
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
          title="Weak Key Handling Can Defeat Strong Encryption"
        >
          <p className="leading-8">
            A trusted algorithm cannot protect data if the key is exposed,
            copied into a public message, stored beside the protected file, or
            unavailable to authorized recovery staff.
          </p>
        </SectionCard>

        <EncryptionFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Algorithm Plus Key Produces the Protected Result"
        >
          <p className="leading-8">
            The algorithm defines the cryptographic process. The key changes the
            specific output and controls authorized protection or recovery. The
            plaintext becomes ciphertext through encryption, and authorized
            decryption recovers readable information.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for the Encryption Workflow
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

        <ConceptBoard />
        <FakeConceptPanel />

        <FakeDashboardCard
          title="Fake Encryption Workflow Dashboard"
          subtitle="Training dashboard using fictional plaintext, ciphertext, algorithms, keys, ownership, and recovery evidence."
          metrics={[
            {
              label: "Workflows reviewed",
              value: "16",
              note: "Fictional messages, files, backups, cloud storage, and secure connections.",
            },
            {
              label: "Key handling issues",
              value: "7",
              note: "Public sharing, unclear ownership, weak storage, and missing recovery responsibility.",
            },
            {
              label: "Approved workflows",
              value: "13",
              note: "Plaintext, algorithm, key, ciphertext, and recovery roles were documented correctly.",
            },
          ]}
        />

        <FakeAlertCard
          title="Secret Key Stored Beside Protected File"
          severity="High"
          time="10:38 AM"
          source="Fake Encryption Training"
          details="A fictional protected archive and the secret key needed to open it are stored in the same publicly shared folder."
          recommendation="Remove public access, protect the key separately through an approved method, review exposure, and reestablish trusted ownership and recovery."
        />

        <FakeLogPanel
          title="Fake Encryption Workflow Log"
          logs={[
            "10:12:04 PLAINTEXT name='private_archive' classification='private'",
            "10:16:28 ALGORITHM source='approved_service' status='supported'",
            "10:20:47 KEY type='secret' storage='shared_folder'",
            "10:24:19 CIPHERTEXT status='created' public_access='enabled'",
            "10:30:52 EXPOSURE key_and_ciphertext='same_location'",
            "10:38:11 RESPONSE public_access='removed' key_storage='approved_separate_location'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Part Must Be Protected?"
          evidence={[
            "A fictional organization uses a trusted, publicly documented encryption algorithm.",
            "The protected archive is stored in approved cloud storage.",
            "The secret key is posted in the same shared folder.",
            "Authorized recovery staff are documented.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The algorithm can remain public, but the exposed key defeats confidentiality and must be protected separately.",
            "The algorithm name must be hidden, while the key can remain public.",
            "Ciphertext never needs access controls.",
            "Recovery staff should receive the key through a public message.",
          ]}
          bestAnswer={0}
          explanation="Modern cryptography normally assumes the algorithm may be known. The secret or private key requires strong protection."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken the Encryption Workflow"
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
          title="Label a Fictional Encryption Workflow"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Workflow
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Protected Project Archive
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student reviews readable project files, an approved
                encryption service, a secret key, the protected archive, and the
                authorized recovery process.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the plaintext and its classification.</li>
                <li>Identify the approved algorithm or service.</li>
                <li>Identify the key type and approved owner.</li>
                <li>Identify the ciphertext and storage location.</li>
                <li>Check whether the key is separated from public access.</li>
                <li>Document authorized decryption and recovery responsibility.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Protected File and Key Are Shared Together"
          scenario="A fictional student uploads an encrypted project archive and the secret key into the same public folder."
          choices={[
            {
              label: "Choice A",
              response:
                "Remove public access, protect the key separately through an approved method, and review whether the data must be reprotected.",
              outcome:
                "Best defensive choice. The key exposure may allow unauthorized decryption.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave both files public because the archive looks unreadable.",
              outcome:
                "Risky. The nearby key may allow the ciphertext to be decrypted.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Rename the key file and keep it public.",
              outcome:
                "Unsafe. Renaming does not protect the key.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Custom Method Claims to Be Unbreakable"
          scenario="A fictional app claims it uses a secret homemade algorithm and refuses to identify any independent review or approved standard."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not trust the claim for sensitive data; use approved, supported cryptographic tools and report concerns.",
              outcome:
                "Best defensive choice. Strong security should not depend only on hiding an unreviewed method.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Use it because secret algorithms are always stronger.",
              outcome:
                "Risky. Lack of review and support may hide serious weaknesses.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Upload real private keys to test the app.",
              outcome:
                "Unsafe. Real secrets should never be exposed to an untrusted service.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Plaintext, Ciphertext, Algorithms, and Keys Checklist"
          items={[
            "I can identify plaintext and ciphertext in a fictional workflow.",
            "I understand that the algorithm defines the process and the key controls the specific result.",
            "I use approved cryptographic tools instead of homemade methods.",
            "I protect secret and private keys through approved storage and access.",
            "I keep key ownership and recovery responsibility documented.",
            "I verify authorized decryption without exposing real secrets.",
            "I understand that encoding and compression are not the same as encryption.",
          ]}
        />

        <MiniQuiz
          title="B12.2 Mini Quiz: Plaintext, Ciphertext, Algorithms, and Keys"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional encryption workflow. Include plaintext, classification, approved algorithm, key type, key owner, key storage, ciphertext location, authorized users, decryption process, backup need, and recovery responsibility."
          tips={[
            "Use fictional files, messages, keys, accounts, services, people, and organizations only.",
            "Do not include real passwords, secret keys, private keys, MFA codes, recovery codes, or personal data.",
            "Explain which parts may be public and which must remain protected.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Plaintext is readable information, while ciphertext is protected encrypted output.",
            "The algorithm defines the cryptographic process, and the key controls the specific result.",
            "Trusted algorithms may be public, but secret and private keys require strong protection.",
            "Encryption is different from encoding and compression.",
            "Authorized recovery requires documented ownership, key access, and approved decryption.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}