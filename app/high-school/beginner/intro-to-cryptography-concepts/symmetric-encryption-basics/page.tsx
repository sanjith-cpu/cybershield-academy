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
  `${modulePath}/plaintext-ciphertext-algorithms-and-keys`;
const nextLesson =
  `${modulePath}/asymmetric-encryption-basics`;

const vocab = [
  [
    "Symmetric encryption",
    "Encryption that uses the same shared secret key for both encryption and decryption.",
  ],
  [
    "Shared secret key",
    "A protected key known only to the approved people, devices, or services that need to encrypt or decrypt the data.",
  ],
  [
    "Key distribution",
    "The approved process used to provide a secret key to authorized participants without exposing it.",
  ],
  [
    "Key storage",
    "The protected location and method used to keep a secret key available only to approved users or systems.",
  ],
  [
    "Key rotation",
    "Replacing an older key with a new approved key according to policy or after a security concern.",
  ],
  [
    "Data at rest",
    "Information stored on a device, drive, server, cloud service, or backup rather than actively moving across a network.",
  ],
];

const workflowStages = [
  {
    title: "Create or receive the key",
    example:
      "An approved service generates or provides one shared secret key for authorized use.",
  },
  {
    title: "Encrypt the plaintext",
    example:
      "The approved algorithm and secret key transform readable data into ciphertext.",
  },
  {
    title: "Store or send ciphertext",
    example:
      "The protected output can be stored or transmitted while access to the key remains restricted.",
  },
  {
    title: "Decrypt with the same key",
    example:
      "An authorized user or system uses the same shared secret key to recover the plaintext.",
  },
];

const conceptRows = [
  {
    item: "Encrypted backup",
    source: "One approved secret key protects the backup archive",
    review:
      "Limit key access, document recovery ownership, and test restoration.",
  },
  {
    item: "Protected device storage",
    source: "Stored files are encrypted using a device-managed secret",
    review:
      "Use approved device security, strong account protection, and recovery planning.",
  },
  {
    item: "Shared project archive",
    source: "Several authorized members need the same protected file",
    review:
      "Use an approved key-sharing method and remove access when membership changes.",
  },
  {
    item: "Key rotation event",
    source: "A former member may still know the old secret",
    review:
      "Replace the key through an approved process and review affected data.",
  },
  {
    item: "Lost secret key",
    source: "No approved recovery copy exists",
    review:
      "Escalate to the owner and follow the documented recovery plan rather than guessing or exposing data.",
  },
];

const mistakes = [
  "Sending a shared secret key in the same message as the ciphertext.",
  "Using one secret key forever without review or rotation.",
  "Giving every user permanent access to the same key.",
  "Saving the key in a public note, shared document, or unprotected folder.",
  "Losing the only authorized recovery copy of the secret key.",
  "Assuming symmetric encryption proves who originally created the data.",
];

const quizQuestions = [
  {
    question: "What makes encryption symmetric?",
    choices: [
      "The same shared secret key is used for encryption and decryption.",
      "No key is required.",
      "Only public keys are used.",
      "The algorithm must remain secret.",
    ],
    answer: 0,
    explanation:
      "Symmetric encryption uses one shared secret key for both directions of the protected workflow.",
  },
  {
    question: "What is one major advantage of symmetric encryption?",
    choices: [
      "It is efficient for protecting large amounts of data.",
      "The key can always be public.",
      "It removes the need for access control.",
      "It automatically proves the sender's identity.",
    ],
    answer: 0,
    explanation:
      "Symmetric encryption is commonly used because it can protect large files, storage, and backups efficiently.",
  },
  {
    question: "What is one major challenge of symmetric encryption?",
    choices: [
      "Distributing and protecting the shared secret key.",
      "Finding a filename.",
      "Choosing a folder color.",
      "Creating a public link.",
    ],
    answer: 0,
    explanation:
      "Every authorized participant must receive the secret key safely without exposing it to unauthorized people.",
  },
  {
    question: "What should happen if a shared secret may be exposed?",
    choices: [
      "Report the issue, limit access, rotate the key through an approved process, and review affected data.",
      "Keep using the same key forever.",
      "Post the key publicly so everyone has the same version.",
      "Delete all ciphertext immediately.",
    ],
    answer: 0,
    explanation:
      "Possible key exposure should trigger containment, reporting, key replacement, and review.",
  },
  {
    question: "Does symmetric encryption alone prove who created a message?",
    choices: [
      "No. Anyone with the shared key may be able to create valid ciphertext.",
      "Yes. The shared key always identifies one unique person.",
      "Yes. No other verification is needed.",
      "Yes. It replaces digital signatures.",
    ],
    answer: 0,
    explanation:
      "Because multiple authorized participants may know the same secret, symmetric encryption alone does not uniquely prove origin.",
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
          Previous: B12.2 Plaintext, Ciphertext, Algorithms, and Keys
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
          Next: B12.4 Asymmetric Encryption Basics
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

function SymmetricFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        One Shared Secret Key, Two Directions
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Symmetric encryption uses the same protected key to transform plaintext
        into ciphertext and later recover the plaintext.
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
        <span className="font-bold">Defender rule:</span> every person, device,
        or service that can access the shared secret may be able to decrypt the
        data. Access should be limited and reviewed.
      </div>
    </section>
  );
}

function FakeSymmetricPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Symmetric Encryption Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares shared-key encryption, distribution,
            storage, access, rotation, and recovery.
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

function KeyManagementBoard() {
  const areas = [
    {
      name: "Distribution",
      saferQuestion:
        "How will authorized users or systems receive the shared secret without exposing it?",
      saferChoice:
        "Use approved secure distribution or service-managed key exchange rather than ordinary messages.",
    },
    {
      name: "Storage",
      saferQuestion:
        "Where is the key kept, and who can retrieve or use it?",
      saferChoice:
        "Use approved protected storage with limited access, ownership, logging, and recovery.",
    },
    {
      name: "Rotation",
      saferQuestion:
        "When should the key be replaced?",
      saferChoice:
        "Rotate according to policy, membership changes, role changes, or possible exposure.",
    },
    {
      name: "Recovery",
      saferQuestion:
        "What happens if the key is lost or an authorized user becomes unavailable?",
      saferChoice:
        "Document approved recovery ownership and avoid creating public or weak backup copies of the key.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Shared Secret Key Management Board
      </h2>
      <p className="mt-3 text-slate-300">
        Symmetric encryption is efficient, but its safety depends on careful key
        distribution, storage, access, rotation, and recovery.
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

export default function SymmetricEncryptionBasicsPage() {
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
              Lesson 3 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B12.3 Symmetric Encryption Basics
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how one shared secret key can protect stored data, files,
            backups, devices, and large amounts of information—and why secure
            key distribution, storage, rotation, and recovery matter.
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
          lessonTitle="Symmetric Encryption Basics"
          lessonNumber={3}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand the difference between plaintext, ciphertext, algorithms, and keys.",
            "I will use fictional files, messages, keys, accounts, devices, services, and organizations only.",
            "I am ready to review shared-key distribution, storage, access, rotation, and recovery.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Symmetric Encryption Is Fast, but the Shared Secret Must Stay Secret"
        >
          <p className="leading-8">
            Symmetric encryption can efficiently protect large files, device
            storage, backups, and network traffic. Its major challenge is making
            sure every authorized user or system receives the same key safely
            without exposing it.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every key, file,
            message, account, device, service, and organization in this lesson is
            fictional. Never share real secret keys, private keys, passwords,
            MFA codes, or recovery codes.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain how the same shared secret key is used for symmetric encryption and decryption.",
            "Recognize the benefits and limitations of symmetric encryption.",
            "Choose safer key-distribution, storage, access, rotation, and recovery decisions.",
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
          title="Every Holder of the Shared Secret Becomes Part of the Trust Boundary"
        >
          <p className="leading-8">
            If one person, device, or service exposes the shared secret, the
            confidentiality of protected data may be lost. Strong symmetric
            encryption therefore requires limited access, clear ownership, and
            rapid response to possible key exposure.
          </p>
        </SectionCard>

        <SymmetricFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="One Key Protects and Recovers the Data"
        >
          <p className="leading-8">
            Symmetric encryption uses the same secret key to encrypt plaintext
            and decrypt ciphertext. This makes it efficient, but authorized
            participants must receive and protect the key through trusted
            methods.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Symmetric Encryption
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

        <KeyManagementBoard />
        <FakeSymmetricPanel />

        <FakeDashboardCard
          title="Fake Symmetric Encryption Dashboard"
          subtitle="Training dashboard using fictional shared keys, encrypted files, backups, storage, authorized users, rotation events, and recovery plans."
          metrics={[
            {
              label: "Shared-key workflows",
              value: "17",
              note: "Fictional backups, devices, files, archives, and managed storage systems.",
            },
            {
              label: "Key access reviews",
              value: "26",
              note: "Owners, approved users, devices, recovery roles, and former members were reviewed.",
            },
            {
              label: "Rotation actions",
              value: "8",
              note: "Keys were replaced after role changes, possible exposure, or scheduled review.",
            },
          ]}
        />

        <FakeAlertCard
          title="Former Team Member Still Has the Shared Secret"
          severity="High"
          time="3:14 PM"
          source="Fake Shared-Key Training"
          details="A fictional club removes a member from the cloud folder but does not replace the secret key used to protect the shared archive."
          recommendation="Report the access change, rotate the key through an approved process, reprotect affected data if needed, and verify current authorized users."
        />

        <FakeLogPanel
          title="Fake Symmetric Key Review Log"
          logs={[
            "14:41:12 ARCHIVE name='club_records' classification='private'",
            "14:46:33 KEY type='shared_secret' authorized_users='6'",
            "14:51:08 MEMBERSHIP former_member='removed_from_folder'",
            "14:57:26 KEY_ACCESS former_member='may_still_know_secret'",
            "15:03:49 RESPONSE rotation='approved' owner='club_advisor'",
            "15:14:02 VERIFY new_key='active' old_key='retired' access_review='complete'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="What Is the Key-Management Problem?"
          evidence={[
            "A fictional encrypted archive is shared by five approved club members.",
            "One member leaves the club.",
            "The folder permission is removed.",
            "The shared secret key remains unchanged.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The former member may still know the secret, so the key should be rotated and affected access reviewed.",
            "Removing the folder permission automatically erases the key from memory.",
            "The old key can remain forever because the archive is encrypted.",
            "The key should be posted publicly so everyone uses the same version.",
          ]}
          bestAnswer={0}
          explanation="Removing account access does not guarantee that a former user no longer knows or possesses the shared secret."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Symmetric Encryption"
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
          title="Review a Fictional Shared-Key Protection Plan"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Plan
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Encrypted Student Club Archive
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional club uses one shared secret key to protect private
                records, event plans, backup archives, and approved project files.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the data owner and classification.</li>
                <li>List approved users, devices, and services.</li>
                <li>Review how the key is distributed and stored.</li>
                <li>Check whether access is removed when roles change.</li>
                <li>Define rotation and possible-exposure response.</li>
                <li>Document approved recovery responsibility.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Key Is Sent Beside the Ciphertext"
          scenario="A fictional student emails an encrypted archive and includes the shared secret key in the same message."
          choices={[
            {
              label: "Choice A",
              response:
                "Report the exposure, stop further sharing, use an approved secure key-distribution method, and rotate the key if required.",
              outcome:
                "Best defensive choice. Sending the key beside the ciphertext can defeat confidentiality.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave the message unchanged because the archive is encrypted.",
              outcome:
                "Risky. Anyone who receives the message may have both the ciphertext and the key.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Post the same key publicly so recipients know it is official.",
              outcome:
                "Unsafe. Public key exposure removes the protection of the shared secret.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Only Recovery Key Is Lost"
          scenario="A fictional organization encrypts an important backup, but the only authorized copy of the shared secret key is lost."
          choices={[
            {
              label: "Choice A",
              response:
                "Notify the owner, follow the documented recovery process, preserve evidence, and improve key-recovery planning.",
              outcome:
                "Best defensive choice. Authorized recovery and future prevention should follow approved procedures.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Guess random keys until the backup opens.",
              outcome:
                "Risky and ineffective. The organization should follow its approved recovery process.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ask users to post any keys they know in a public chat.",
              outcome:
                "Unsafe. This may expose other secrets and create additional incidents.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Symmetric Encryption Checklist"
          items={[
            "I understand that the same shared secret key is used for encryption and decryption.",
            "I limit shared-key access to approved users, devices, and services.",
            "I use approved secure key distribution rather than ordinary messages.",
            "I store the key separately from public or broadly shared ciphertext.",
            "I rotate keys after role changes, possible exposure, or scheduled review.",
            "I document ownership and authorized recovery responsibility.",
            "I understand that symmetric encryption alone does not uniquely prove who created the data.",
          ]}
        />

        <MiniQuiz
          title="B12.3 Mini Quiz: Symmetric Encryption Basics"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional symmetric-encryption plan. Include data owner, classification, plaintext, ciphertext, approved users, shared-key owner, distribution method, storage location, rotation trigger, recovery process, and verification step."
          tips={[
            "Use fictional keys, files, devices, accounts, services, people, and organizations only.",
            "Do not include real passwords, secret keys, private keys, MFA codes, recovery codes, or personal data.",
            "Explain how the plan limits the number of people and systems that can access the shared secret.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Symmetric encryption uses the same shared secret key for encryption and decryption.",
            "It is efficient for protecting large amounts of stored or transmitted data.",
            "Secure key distribution is one of its biggest challenges.",
            "Key storage, access review, rotation, and recovery are essential.",
            "A shared secret protects confidentiality but does not uniquely prove who created the data.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}