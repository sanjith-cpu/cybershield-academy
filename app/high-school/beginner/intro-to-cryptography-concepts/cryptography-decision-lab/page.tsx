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
  `${modulePath}/certificates-and-secure-connections`;
const nextLesson =
  `${modulePath}/module-test`;

const vocab = [
  [
    "Protection goal",
    "The specific need cryptography should support, such as confidentiality, integrity, authenticity, or secure exchange.",
  ],
  [
    "Trust decision",
    "A decision about whether a key, certificate, signature, file, website, or source should be accepted as expected.",
  ],
  [
    "Verification evidence",
    "Information used to confirm integrity, identity, validity, ownership, or approved cryptographic use.",
  ],
  [
    "Key lifecycle",
    "The stages of creating, distributing, storing, using, rotating, revoking, replacing, and retiring cryptographic keys.",
  ],
  [
    "Revocation",
    "The process of marking a key or certificate as no longer trusted before its normal expiration.",
  ],
  [
    "Defense in depth",
    "Using cryptography together with access controls, updates, monitoring, backups, training, and safe user decisions.",
  ],
];

const decisionStages = [
  {
    title: "Identify the asset",
    example:
      "Determine which message, file, account, device, backup, download, website, or service needs protection.",
  },
  {
    title: "Choose the goal",
    example:
      "Decide whether confidentiality, integrity, authenticity, secure exchange, or several goals are required.",
  },
  {
    title: "Match the method",
    example:
      "Use encryption, hashing, signatures, certificates, or a combined trusted workflow.",
  },
  {
    title: "Verify and respond",
    example:
      "Check keys, identities, warnings, hashes, signatures, ownership, recovery, and incident evidence.",
  },
];

const decisionRows = [
  {
    item: "Private backup",
    source: "Contains sensitive records and must remain recoverable",
    review:
      "Use approved encryption, protected key storage, limited access, integrity checks, and tested recovery.",
  },
  {
    item: "Software download",
    source: "Publisher provides a trusted hash and digital signature",
    review:
      "Verify the official source, integrity value, signature, and expected publisher before use.",
  },
  {
    item: "Secure website",
    source: "Requests credentials through HTTPS",
    review:
      "Check the exact domain, certificate trust, warning status, purpose, and request before entering data.",
  },
  {
    item: "Signed message",
    source: "Recipient needs confidence about origin and changes",
    review:
      "Verify the signature with the trusted public key and expected identity.",
  },
  {
    item: "Shared encrypted archive",
    source: "Several users rely on one shared secret",
    review:
      "Limit access, protect distribution, rotate after membership changes, and document recovery.",
  },
];

const mistakes = [
  "Choosing encryption when the main need is integrity verification.",
  "Trusting a public key, certificate, or signature without checking the expected identity.",
  "Keeping an exposed secret or private key active.",
  "Assuming HTTPS makes every website request trustworthy.",
  "Treating a matching hash as proof of identity or confidentiality.",
  "Using cryptography without ownership, access control, backup, or recovery planning.",
];

const quizQuestions = [
  {
    question: "Which method best supports confidentiality for a private file?",
    choices: [
      "Approved encryption with protected key access.",
      "A public filename.",
      "A screenshot of the file.",
      "A browser bookmark.",
    ],
    answer: 0,
    explanation:
      "Encryption helps prevent unauthorized users from reading protected data.",
  },
  {
    question: "Which method best helps detect whether a file changed?",
    choices: [
      "A trusted cryptographic hash comparison.",
      "Changing the file icon.",
      "Renaming the folder.",
      "Creating a public link.",
    ],
    answer: 0,
    explanation:
      "Hash comparison supports integrity verification when the expected value comes from a trusted source.",
  },
  {
    question: "Which method best supports source authenticity?",
    choices: [
      "A verified digital signature connected to the expected public key and identity.",
      "A matching file color.",
      "A large file size.",
      "A public comment.",
    ],
    answer: 0,
    explanation:
      "Digital signatures can support authenticity and integrity when the public key is trusted.",
  },
  {
    question: "What should happen after suspected private-key exposure?",
    choices: [
      "Report, revoke or retire the key, issue a replacement, and review impact.",
      "Keep using the key.",
      "Publish the key.",
      "Ignore the event if no misuse is visible.",
    ],
    answer: 0,
    explanation:
      "Possible exposure damages trust and requires containment, replacement, and review.",
  },
  {
    question: "Why is defense in depth important?",
    choices: [
      "Cryptography works best with access controls, updates, backups, monitoring, and safe decisions.",
      "Cryptography replaces every other security control.",
      "Encryption makes user training unnecessary.",
      "Certificates remove the need for account protection.",
    ],
    answer: 0,
    explanation:
      "Cryptography is powerful but cannot solve every security problem by itself.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Complete Module B12</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B12.6 Certificates and Secure Connections
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
          Open B12 Module Test
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

function DecisionFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Cryptography Decision Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong decisions connect the asset, protection goal, cryptographic
        method, key or trust requirement, and verification evidence.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {decisionStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> choose cryptography
        based on the security goal, not because one method sounds strongest.
      </div>
    </section>
  );
}

function FakeDecisionPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Cryptography Decision Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares encryption, hashing, signatures,
            certificates, key management, recovery, and verification.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {decisionRows.map((row) => (
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

function DecisionBoard() {
  const areas = [
    {
      name: "Confidentiality",
      saferQuestion:
        "Who should be able to read the information, and how will authorized recovery work?",
      saferChoice:
        "Use approved encryption, protected keys, limited access, and documented recovery.",
    },
    {
      name: "Integrity",
      saferQuestion:
        "How will users detect whether the data or software changed?",
      saferChoice:
        "Use trusted hashes, signatures, version evidence, and independent reference values.",
    },
    {
      name: "Authenticity",
      saferQuestion:
        "How will users verify the expected sender, publisher, website, service, or key owner?",
      saferChoice:
        "Use verified signatures, certificates, trusted directories, and expected identity checks.",
    },
    {
      name: "Lifecycle",
      saferQuestion:
        "What happens when keys expire, users leave, exposure is suspected, or recovery is needed?",
      saferChoice:
        "Document rotation, revocation, replacement, retirement, ownership, backup, and incident response.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Cryptography Decision Board
      </h2>
      <p className="mt-3 text-slate-300">
        Every scenario should be reviewed through protection goals, trust
        evidence, key lifecycle, and noncryptographic controls.
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

export default function CryptographyDecisionLabPage() {
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
              Lesson 7 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B12.7 Cryptography Decision Lab
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Apply encryption, key management, hashing, signatures, certificates,
            secure connections, verification, recovery, and incident response to
            complete defensive cryptography scenarios.
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
          lessonTitle="Cryptography Decision Lab"
          lessonNumber={7}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can distinguish encryption, hashing, signatures, certificates, public keys, private keys, and shared secrets.",
            "I will use fictional keys, certificates, signatures, files, accounts, websites, services, and organizations only.",
            "I am ready to choose protection goals, trust evidence, key-lifecycle actions, and defensive responses.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Strongest Method Is the One That Matches the Need"
        >
          <p className="leading-8">
            Defenders do not choose cryptography by asking which word sounds
            most advanced. They identify the asset, risk, protection goal,
            authorized users, trust relationship, recovery requirement, and
            evidence needed to verify success.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every key,
            certificate, signature, hash, file, account, website, service, and
            organization in this lab is fictional. Never expose real secrets or
            test cryptography on important live data without permission.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Match confidentiality, integrity, authenticity, and secure-exchange needs with appropriate cryptographic methods.",
            "Review shared-key, public-key, private-key, hash, signature, certificate, and HTTPS evidence.",
            "Design safer key-lifecycle, verification, recovery, and incident-response decisions.",
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
          title="Cryptographic Tools Can Fail Through Bad Decisions"
        >
          <p className="leading-8">
            Strong algorithms cannot compensate for exposed keys, unverified
            identities, ignored warnings, weak recovery plans, or unsafe account
            access. The surrounding decisions determine whether the protection
            can be trusted.
          </p>
        </SectionCard>

        <DecisionFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Goal, Method, Key, Trust, and Verification Must Align"
        >
          <p className="leading-8">
            Encryption supports confidentiality. Hashing supports integrity
            checks. Signatures support integrity and authenticity. Certificates
            help connect identities with public keys. Secure connections combine
            several cryptographic methods, but users still must verify the
            domain, purpose, and request.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Cryptography Decisions
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

        <DecisionBoard />
        <FakeDecisionPanel />

        <FakeDashboardCard
          title="Fake Cryptography Decision Dashboard"
          subtitle="Training dashboard using fictional encryption, hashing, signatures, certificates, keys, secure connections, recovery, and incident evidence."
          metrics={[
            {
              label: "Scenarios reviewed",
              value: "24",
              note: "Fictional backups, messages, software, websites, devices, cloud files, and accounts.",
            },
            {
              label: "Protection goals mapped",
              value: "41",
              note: "Several scenarios required confidentiality, integrity, and authenticity together.",
            },
            {
              label: "Defensive actions approved",
              value: "20",
              note: "Key rotation, verification, recovery, warning response, and access review were completed.",
            },
          ]}
        />

        <FakeAlertCard
          title="Multiple Trust Failures in One Workflow"
          severity="Critical"
          time="2:32 PM"
          source="Fake Cryptography Decision Training"
          details="A fictional portal uses the wrong domain, shows a certificate warning, requests an MFA code, and provides a software download whose hash does not match the official publisher value."
          recommendation="Stop immediately, do not enter information or run the file, preserve evidence, use official trusted routes, verify the publisher, and report the incident."
        />

        <FakeLogPanel
          title="Fake Cryptography Decision Log"
          logs={[
            "14:02:06 DOMAIN expected='portal.school-example.test' actual='login-other.test'",
            "14:07:31 CERTIFICATE status='name_mismatch'",
            "14:12:44 REQUEST password='requested' mfa_code='requested'",
            "14:18:09 DOWNLOAD name='security_tool.pkg' source='same_untrusted_portal'",
            "14:24:17 HASH expected='official_value' actual='different'",
            "14:28:53 USER_ACTION data_submitted='false' file_executed='false'",
            "14:32:05 RESPONSE official_portal='opened' report='submitted'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Protection Plan Is Complete?"
          evidence={[
            "A fictional backup contains private student records.",
            "Authorized staff must detect changes before recovery.",
            "Only two approved staff members may restore the data.",
            "The backup must remain recoverable after a device failure.",
          ]}
          question="What is the safest complete plan?"
          options={[
            "Use approved encryption, protected key access, a trusted integrity value, separate backup storage, limited recovery roles, and tested restoration.",
            "Rename the backup and store it beside the original.",
            "Use hashing only and make the backup public.",
            "Encrypt the backup but place the key in the same shared folder.",
          ]}
          bestAnswer={0}
          explanation="The complete plan addresses confidentiality, integrity, access, storage separation, key protection, and recovery."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Cryptography Decisions"
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
          title="Build a Complete Fictional Cryptography Protection Plan"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Organization
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Northstar Student Services
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional organization manages private records, signed notices,
                software downloads, encrypted backups, secure websites, shared
                archives, and account-recovery messages.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Planning Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the asset, owner, classification, and approved users.</li>
                <li>Choose confidentiality, integrity, authenticity, or combined goals.</li>
                <li>Match encryption, hashing, signatures, certificates, or secure connections.</li>
                <li>Document public, private, or shared-key responsibilities.</li>
                <li>Define verification, recovery, rotation, revocation, and incident response.</li>
                <li>Add access control, backups, monitoring, updates, and user training.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Signed File Has an Untrusted Public Key"
          scenario="A fictional document includes a digital signature, but the public key was delivered through an unexpected message and has not been connected to the expected sender."
          choices={[
            {
              label: "Choice A",
              response:
                "Verify the public key through an approved certificate, directory, fingerprint, or trusted contact before trusting the signature.",
              outcome:
                "Best defensive choice. A valid mathematical result is not enough if the key identity is untrusted.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Trust the signature because any public key is acceptable.",
              outcome:
                "Risky. The key may belong to a different identity.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Send a private key for comparison.",
              outcome:
                "Unsafe. Private keys must never be shared.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Encrypted Backup Has an Exposed Key"
          scenario="A fictional backup is strongly encrypted, but the secret key is stored in the same public folder."
          choices={[
            {
              label: "Choice A",
              response:
                "Remove public access, report the exposure, rotate or replace the key through an approved process, and review whether the backup must be reprotected.",
              outcome:
                "Best defensive choice. The exposed key may defeat the confidentiality of the backup.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the key there because the algorithm is strong.",
              outcome:
                "Risky. Strong algorithms cannot protect an exposed key.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Rename the key file and leave it public.",
              outcome:
                "Unsafe. Renaming does not protect the secret.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Cryptography Decision Checklist"
          items={[
            "I identify the asset, owner, classification, approved users, and protection goal.",
            "I match encryption, hashing, signatures, certificates, and HTTPS to the correct need.",
            "I distinguish shared-secret, public-key, and private-key responsibilities.",
            "I verify public keys, signatures, hashes, certificates, domains, and warnings through trusted evidence.",
            "I protect keys throughout creation, storage, use, rotation, revocation, replacement, and retirement.",
            "I include backup, recovery, access control, monitoring, updates, and user training.",
            "I report mismatches, warnings, exposed keys, suspicious requests, and failed verification.",
          ]}
        />

        <MiniQuiz
          title="B12.7 Mini Quiz: Cryptography Decision Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional cryptography decision matrix. Include seven scenarios, asset, owner, classification, protection goal, cryptographic method, key or trust requirement, verification evidence, recovery step, incident response, and additional controls."
          tips={[
            "Use fictional keys, certificates, signatures, hashes, files, accounts, websites, services, people, and organizations only.",
            "Do not include real passwords, secret keys, private keys, MFA codes, recovery codes, or personal data.",
            "Explain why each selected method matches the protection goal and what it does not solve.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cryptographic methods should be selected according to the protection goal.",
            "Encryption, hashing, signatures, certificates, and HTTPS solve different but connected problems.",
            "Key protection and identity verification are essential to trust.",
            "Warnings, mismatches, and suspected exposure require immediate defensive action.",
            "Cryptography works best as one layer within a larger defense-in-depth plan.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}