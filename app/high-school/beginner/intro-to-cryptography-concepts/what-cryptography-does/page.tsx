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
  "/high-school/beginner/data-protection-and-backups/module-test";
const nextLesson =
  `${modulePath}/plaintext-ciphertext-algorithms-and-keys`;

const vocab = [
  [
    "Cryptography",
    "The use of mathematical methods to help protect information, verify identity, detect changes, and support trusted communication.",
  ],
  [
    "Confidentiality",
    "Keeping information available only to approved people, devices, accounts, or services.",
  ],
  [
    "Integrity",
    "Protecting information from unauthorized or accidental changes and helping detect when content is different.",
  ],
  [
    "Authenticity",
    "Confidence that data, a message, software, or a digital identity comes from the expected source.",
  ],
  [
    "Encryption",
    "Transforming readable information into a protected form using an approved algorithm and key.",
  ],
  [
    "Digital signature",
    "A cryptographic method that can help verify the origin and integrity of digital information.",
  ],
];

const goalStages = [
  {
    title: "Keep data private",
    example:
      "Encryption can help prevent unauthorized people from reading protected files, messages, backups, or connections.",
  },
  {
    title: "Detect changes",
    example:
      "Hashes and signatures can help show whether a file, message, or software package has changed.",
  },
  {
    title: "Verify identity",
    example:
      "Certificates and digital signatures can help confirm the expected website, service, publisher, or sender.",
  },
  {
    title: "Build trust",
    example:
      "Cryptographic protections support secure browsing, updates, accounts, storage, and communication.",
  },
];

const goalRows = [
  {
    item: "Private school file",
    source: "Readable by anyone who opens the storage folder",
    review:
      "Use approved encryption and limit access to authorized users.",
  },
  {
    item: "Software download",
    source: "Publisher provides a trusted hash or signature",
    review:
      "Verify integrity and source before using the file.",
  },
  {
    item: "Secure website",
    source: "Browser shows a valid trusted HTTPS connection",
    review:
      "Confirm the expected site name and review any browser warnings.",
  },
  {
    item: "Signed document",
    source: "Recipient needs confidence about origin and changes",
    review:
      "Use an approved digital-signature process and verify it through trusted software.",
  },
  {
    item: "Protected backup",
    source: "Backup contains private records and account data",
    review:
      "Use encryption, limited access, trusted storage, and recovery planning.",
  },
];

const mistakes = [
  "Assuming encryption automatically proves who created the data.",
  "Treating hashing and encryption as the same process.",
  "Sharing secret or private keys through untrusted messages.",
  "Ignoring certificate or signature warnings because a page or file looks familiar.",
  "Using unofficial cryptographic tools for sensitive information without approval.",
  "Believing cryptography replaces strong accounts, updates, backups, and safe user decisions.",
];

const quizQuestions = [
  {
    question: "What is one main purpose of cryptography?",
    choices: [
      "To help protect information and support trust in digital systems.",
      "To make every file public.",
      "To replace all cybersecurity controls.",
      "To remove the need for account security.",
    ],
    answer: 0,
    explanation:
      "Cryptography helps protect confidentiality, integrity, authenticity, and trusted communication.",
  },
  {
    question: "Which goal focuses on keeping information private?",
    choices: [
      "Confidentiality.",
      "Availability only.",
      "Formatting.",
      "Compression.",
    ],
    answer: 0,
    explanation:
      "Confidentiality limits information access to approved users and systems.",
  },
  {
    question: "Which goal focuses on detecting unauthorized changes?",
    choices: [
      "Integrity.",
      "Screen brightness.",
      "File naming.",
      "Storage capacity.",
    ],
    answer: 0,
    explanation:
      "Integrity helps users determine whether data remains accurate and unchanged.",
  },
  {
    question: "What can authenticity help verify?",
    choices: [
      "That information or identity comes from the expected source.",
      "That every file is encrypted.",
      "That a device has unlimited storage.",
      "That no backup is required.",
    ],
    answer: 0,
    explanation:
      "Authenticity supports confidence in the expected sender, publisher, website, device, or service.",
  },
  {
    question: "Does cryptography replace all other security practices?",
    choices: [
      "No. It works with access controls, updates, backups, monitoring, and safe decisions.",
      "Yes. Encryption alone solves every security problem.",
      "Yes. It removes the need for passwords.",
      "Yes. It makes reporting unnecessary.",
    ],
    answer: 0,
    explanation:
      "Cryptography is one defensive layer and must be supported by other security controls.",
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
          Previous: B11 Module Test
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
          Next: B12.2 Plaintext, Ciphertext, Algorithms, and Keys
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

function GoalFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        What Cryptography Helps Protect
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Cryptography supports several goals that often work together in secure
        storage, communication, websites, software, accounts, and backups.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {goalStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> begin with the
        protection goal. Different cryptographic methods solve different
        problems.
      </div>
    </section>
  );
}

function FakeCryptoPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Cryptographic Goal Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares confidentiality, integrity,
            authenticity, identity, and trust decisions.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {goalRows.map((row) => (
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

function PurposeBoard() {
  const areas = [
    {
      name: "Confidentiality",
      saferQuestion:
        "Should unauthorized people be prevented from reading the data?",
      saferChoice:
        "Use approved encryption with protected keys and appropriate access controls.",
    },
    {
      name: "Integrity",
      saferQuestion:
        "Do users need to detect whether the data or file has changed?",
      saferChoice:
        "Use trusted hashing, signatures, version controls, or verification tools.",
    },
    {
      name: "Authenticity",
      saferQuestion:
        "Do users need confidence about the expected sender, publisher, website, or service?",
      saferChoice:
        "Verify trusted certificates, signatures, official accounts, and expected identities.",
    },
    {
      name: "Trust",
      saferQuestion:
        "Which other protections must support the cryptographic method?",
      saferChoice:
        "Combine cryptography with access controls, updates, backups, monitoring, and safe user decisions.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Cryptography Purpose Board
      </h2>
      <p className="mt-3 text-slate-300">
        The correct cryptographic method depends on what the defender needs to
        protect or verify.
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

export default function WhatCryptographyDoesPage() {
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
              Lesson 1 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B12.1 What Cryptography Does
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how cryptography supports confidentiality, integrity,
            authenticity, identity verification, trusted software, secure
            connections, protected storage, and safer communication.
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
          lessonTitle="What Cryptography Does"
          lessonNumber={1}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that cryptography supports several different security goals.",
            "I will use fictional messages, files, keys, certificates, accounts, websites, and services only.",
            "I am ready to match defensive scenarios with confidentiality, integrity, authenticity, and trust goals.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Cryptography Works Quietly Across the Internet"
        >
          <p className="leading-8">
            When a browser creates a secure connection, a phone protects stored
            data, a software publisher signs an update, or a backup is encrypted,
            cryptography helps protect information and establish trust behind
            the scenes.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every key,
            message, file, certificate, account, website, and service in this
            lesson is fictional. Never share real passwords, MFA codes, recovery
            codes, secret keys, or private keys.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain the defensive goals of confidentiality, integrity, authenticity, and trust.",
            "Recognize where encryption, hashing, signatures, and certificates are used.",
            "Choose the correct cryptographic goal for fictional files, messages, software, backups, and connections.",
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
          title="Digital Trust Requires More Than Secrecy"
        >
          <p className="leading-8">
            A private message is not useful if no one can tell whether it was
            changed. A software file may be readable but unsafe if its publisher
            cannot be verified. Cryptography helps protect several connected
            trust goals.
          </p>
        </SectionCard>

        <GoalFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Cryptography Solves Different Problems With Different Methods"
        >
          <p className="leading-8">
            Encryption focuses on protecting readable information. Hashing can
            help detect changes. Digital signatures can support integrity and
            authenticity. Certificates can help connect an identity with a
            trusted public key.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Cryptographic Protection
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

        <PurposeBoard />
        <FakeCryptoPanel />

        <FakeDashboardCard
          title="Fake Cryptography Goals Dashboard"
          subtitle="Training dashboard using fictional files, messages, software, websites, certificates, signatures, hashes, and encryption evidence."
          metrics={[
            {
              label: "Scenarios reviewed",
              value: "18",
              note: "Fictional storage, messaging, software, website, account, and backup situations.",
            },
            {
              label: "Protection goals",
              value: "31",
              note: "Several scenarios required confidentiality, integrity, and authenticity together.",
            },
            {
              label: "Correct defensive matches",
              value: "15",
              note: "Cryptographic methods were matched to the protection need.",
            },
          ]}
        />

        <FakeAlertCard
          title="Downloaded File Fails Integrity Verification"
          severity="High"
          time="1:42 PM"
          source="Fake Software Verification Training"
          details="A fictional software file has a different cryptographic hash than the value published through the official trusted source."
          recommendation="Do not open or install the file. Preserve the evidence, verify the official source, obtain a trusted copy, and report the mismatch."
        />

        <FakeLogPanel
          title="Fake Cryptography Goal Review Log"
          logs={[
            "13:18:07 FILE name='approved_update.pkg' source='official_publisher'",
            "13:22:14 CONFIDENTIALITY requirement='low' public_download='expected'",
            "13:27:33 INTEGRITY expected_hash='publisher_value' actual_hash='different'",
            "13:31:49 AUTHENTICITY signature_status='unverified'",
            "13:36:02 ACTION execution='blocked' source='rechecked'",
            "13:42:18 RESPONSE trusted_copy='requested' report='submitted'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Cryptographic Goals Are Needed?"
          evidence={[
            "A fictional backup contains private school and family records.",
            "The owner needs to detect whether the backup changes.",
            "Only approved users should be able to restore it.",
            "Recovery staff need confidence that the backup is authentic.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The backup needs confidentiality, integrity, authenticity, limited access, and verified recovery.",
            "Only confidentiality matters.",
            "Only availability matters.",
            "Cryptography is unnecessary because the backup is not online.",
          ]}
          bestAnswer={0}
          explanation="Protected backups may require encryption, integrity checking, trusted ownership, access control, and verified recovery."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Cryptographic Protection"
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
          title="Match Fictional Scenarios With Cryptographic Goals"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Scenario Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Cryptography Goal Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student reviews a private message, protected backup,
                signed document, software download, secure website, cloud file,
                and account-recovery process.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the data, owner, users, and purpose.</li>
                <li>Choose confidentiality, integrity, authenticity, or several goals.</li>
                <li>Match the goal with encryption, hashing, signatures, or certificates.</li>
                <li>Identify which keys or trust relationships must be protected.</li>
                <li>Choose an approved verification step.</li>
                <li>Record which noncryptographic controls are also required.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Private Backup Is Stored as Readable Data"
          scenario="A fictional backup contains private student and family records but can be opened by anyone who reaches the storage folder."
          choices={[
            {
              label: "Choice A",
              response:
                "Use approved encryption, limit access, protect the keys, and verify recovery through a trusted process.",
              outcome:
                "Best defensive choice. It protects confidentiality while preserving authorized recovery.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Rename the folder so people cannot guess what it contains.",
              outcome:
                "Risky. Renaming does not protect the data.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Post the backup publicly so more people can preserve it.",
              outcome:
                "Unsafe. Public access destroys confidentiality.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Software File Has a Different Hash"
          scenario="A fictional downloaded software file does not match the trusted hash published by the official source."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not use the file, verify the official source, obtain a trusted copy, and report the mismatch.",
              outcome:
                "Best defensive choice. The difference may indicate corruption, an incomplete download, or unauthorized change.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Install the file because the name looks correct.",
              outcome:
                "Risky. The matching filename does not prove integrity.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable security tools before opening it.",
              outcome:
                "Unsafe. This removes defensive protections.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="What Cryptography Does Checklist"
          items={[
            "I identify whether the goal is confidentiality, integrity, authenticity, identity verification, or several goals.",
            "I understand that encryption protects readable information.",
            "I understand that hashing can help detect changes.",
            "I understand that signatures and certificates can support authenticity and trust.",
            "I protect secret and private keys through approved methods.",
            "I verify warnings, hashes, signatures, certificates, and expected identities.",
            "I combine cryptography with access controls, updates, backups, monitoring, and safe decisions.",
          ]}
        />

        <MiniQuiz
          title="B12.1 Mini Quiz: What Cryptography Does"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional cryptography goal map. Include seven scenarios, data owner, protection goal, cryptographic method, key or trust requirement, verification step, and additional noncryptographic controls."
          tips={[
            "Use fictional messages, files, keys, certificates, accounts, websites, services, and organizations only.",
            "Do not include real passwords, private keys, secret keys, MFA codes, recovery codes, or personal data.",
            "Explain why each method matches the protection goal.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cryptography helps protect confidentiality, integrity, authenticity, and digital trust.",
            "Encryption, hashing, signatures, and certificates solve different defensive problems.",
            "Secret and private keys must remain protected.",
            "Warnings and failed verification should not be ignored.",
            "Cryptography works best as one layer within a larger security plan.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}