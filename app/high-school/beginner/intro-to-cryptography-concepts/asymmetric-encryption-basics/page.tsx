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
  `${modulePath}/symmetric-encryption-basics`;
const nextLesson =
  `${modulePath}/hashing-and-data-integrity`;

const vocab = [
  [
    "Asymmetric encryption",
    "Cryptography that uses a mathematically related public key and private key for different operations.",
  ],
  [
    "Public key",
    "A key that may be shared openly and used for approved encryption or signature verification.",
  ],
  [
    "Private key",
    "A protected secret key used for approved decryption or digital-signature creation.",
  ],
  [
    "Key pair",
    "A public key and private key that are mathematically related and used together.",
  ],
  [
    "Digital signature",
    "A cryptographic result created with a private key that can be checked with the matching public key.",
  ],
  [
    "Key exchange",
    "A process that helps systems establish protected shared secrets without sending the final secret openly.",
  ],
];

const workflowStages = [
  {
    title: "Create a key pair",
    example:
      "An approved system generates a mathematically related public key and private key.",
  },
  {
    title: "Share the public key",
    example:
      "The public key can be distributed through trusted channels for encryption or signature verification.",
  },
  {
    title: "Protect the private key",
    example:
      "The private key remains restricted to its authorized owner, device, or service.",
  },
  {
    title: "Verify the result",
    example:
      "Authorized users confirm the expected identity, key, certificate, or signature before trusting the outcome.",
  },
];

const conceptRows = [
  {
    item: "Public key",
    source: "Shared through an approved directory or certificate",
    review:
      "Verify that it belongs to the expected person, device, service, or website.",
  },
  {
    item: "Private key",
    source: "Stored in a protected approved location",
    review:
      "Limit access, monitor use, and follow rotation or revocation procedures after suspected exposure.",
  },
  {
    item: "Encrypted message",
    source: "Protected using the recipient's public key",
    review:
      "Only the matching protected private key should support authorized decryption.",
  },
  {
    item: "Digital signature",
    source: "Created using the sender's protected private key",
    review:
      "Verify with the trusted matching public key and expected identity.",
  },
  {
    item: "Key replacement",
    source: "Private key may have been exposed",
    review:
      "Report, revoke or retire the affected key pair, issue a trusted replacement, and review impacted data.",
  },
];

const mistakes = [
  "Sharing or uploading a private key because the public key is safe to share.",
  "Trusting a public key without confirming the expected owner or certificate.",
  "Assuming asymmetric encryption is always faster than symmetric encryption for large files.",
  "Believing a digital signature hides the content of a message.",
  "Keeping an exposed key pair active after suspected private-key compromise.",
  "Using unofficial key-generation or storage tools for sensitive data without approval.",
];

const quizQuestions = [
  {
    question: "What makes encryption asymmetric?",
    choices: [
      "It uses a related public key and private key for different operations.",
      "It uses no keys.",
      "It always uses one shared secret key.",
      "It requires the algorithm to remain secret.",
    ],
    answer: 0,
    explanation:
      "Asymmetric cryptography relies on a key pair with separate public and private roles.",
  },
  {
    question: "Which key may normally be shared openly?",
    choices: [
      "The public key.",
      "The private key.",
      "Every recovery secret.",
      "Every account password.",
    ],
    answer: 0,
    explanation:
      "The public key can be shared, but users still need to verify that it belongs to the expected identity.",
  },
  {
    question: "Which key must remain protected?",
    choices: [
      "The private key.",
      "The lesson title.",
      "The public key fingerprint.",
      "The website name.",
    ],
    answer: 0,
    explanation:
      "The private key supports sensitive operations and must remain restricted.",
  },
  {
    question: "What can a digital signature help verify?",
    choices: [
      "The source and integrity of digital information.",
      "That the content is automatically secret.",
      "That backups are unnecessary.",
      "That every user should receive the private key.",
    ],
    answer: 0,
    explanation:
      "A digital signature can support authenticity and integrity, but it does not automatically provide confidentiality.",
  },
  {
    question: "What should happen after suspected private-key exposure?",
    choices: [
      "Report the issue, revoke or retire the affected key, issue a replacement, and review impact.",
      "Post the private key publicly.",
      "Keep using the same key forever.",
      "Delete every public key.",
    ],
    answer: 0,
    explanation:
      "Possible private-key exposure requires containment, replacement, and impact review.",
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
          Previous: B12.3 Symmetric Encryption Basics
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
          Next: B12.5 Hashing and Data Integrity
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

function AsymmetricFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        One Key Pair, Different Roles
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Asymmetric cryptography separates public and private operations so users
        can share one key while protecting the other.
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
        <span className="font-bold">Defender rule:</span> public does not mean
        unverified. Before trusting a public key, confirm that it belongs to the
        expected identity.
      </div>
    </section>
  );
}

function FakeAsymmetricPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Public and Private Key Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares key pairs, public-key distribution,
            private-key protection, signatures, verification, and replacement.
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

function KeyPairBoard() {
  const areas = [
    {
      name: "Public key",
      saferQuestion:
        "How will users confirm that the key belongs to the expected identity?",
      saferChoice:
        "Use trusted certificates, directories, fingerprints, or approved identity-verification processes.",
    },
    {
      name: "Private key",
      saferQuestion:
        "Who can use the key, where is it stored, and how is its use monitored?",
      saferChoice:
        "Restrict access, use approved protected storage, and document ownership and recovery.",
    },
    {
      name: "Encryption",
      saferQuestion:
        "Which key should be used to protect data for a specific recipient?",
      saferChoice:
        "Use the recipient's trusted public key so the matching private key supports authorized decryption.",
    },
    {
      name: "Digital signature",
      saferQuestion:
        "How can the recipient verify origin and integrity?",
      saferChoice:
        "Verify the signature using the trusted matching public key and expected identity.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Public and Private Key Board
      </h2>
      <p className="mt-3 text-slate-300">
        The two keys have different roles, and the private key must never be
        treated like the public key.
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

export default function AsymmetricEncryptionBasicsPage() {
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
              Lesson 4 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B12.4 Asymmetric Encryption Basics
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how public and private keys support secure exchange, protected
            communication, digital signatures, certificate trust, and safer key
            management.
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
          lessonTitle="Asymmetric Encryption Basics"
          lessonNumber={4}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand how shared-secret symmetric encryption works.",
            "I will use fictional public keys, private keys, certificates, signatures, files, accounts, and identities only.",
            "I am ready to compare encryption, decryption, signing, verification, key trust, and key replacement.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="One Key Can Be Shared While the Other Must Stay Private"
        >
          <p className="leading-8">
            Asymmetric cryptography allows a public key to be distributed while
            the related private key remains protected. This separation helps
            solve key-sharing challenges and supports digital signatures,
            certificates, and secure connections.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every key pair,
            file, certificate, signature, account, website, service, and identity
            in this lesson is fictional. Never upload or share a real private key.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain the different roles of public and private keys.",
            "Describe how asymmetric cryptography supports encryption, decryption, digital signatures, and secure exchange.",
            "Choose safer public-key verification, private-key storage, revocation, and replacement decisions.",
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
          title="A Public Key Is Useful Only When Its Identity Is Trusted"
        >
          <p className="leading-8">
            Anyone can create a key pair and claim a public key belongs to a
            certain person or website. Defenders must verify the expected
            identity before trusting the key.
          </p>
        </SectionCard>

        <AsymmetricFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Public and Private Keys Have Different Jobs"
        >
          <p className="leading-8">
            Data protected for a recipient may use the recipient's public key,
            while the matching private key supports authorized decryption.
            Digital signatures are created with a protected private key and
            checked with the matching trusted public key.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Asymmetric Cryptography
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

        <KeyPairBoard />
        <FakeAsymmetricPanel />

        <FakeDashboardCard
          title="Fake Asymmetric Cryptography Dashboard"
          subtitle="Training dashboard using fictional key pairs, public-key directories, private-key storage, signatures, certificates, and replacement events."
          metrics={[
            {
              label: "Key pairs reviewed",
              value: "19",
              note: "Fictional people, devices, websites, publishers, and managed services.",
            },
            {
              label: "Identity checks",
              value: "24",
              note: "Certificates, approved directories, fingerprints, and expected names were reviewed.",
            },
            {
              label: "Private-key actions",
              value: "7",
              note: "Rotation, revocation, replacement, storage, and access reviews were completed.",
            },
          ]}
        />

        <FakeAlertCard
          title="Private Key Uploaded to a Shared Folder"
          severity="High"
          time="11:26 AM"
          source="Fake Key-Pair Training"
          details="A fictional user accidentally uploads a private key beside the public certificate in a broadly shared folder."
          recommendation="Remove access, report the exposure, revoke or retire the affected key pair, issue a trusted replacement, and review impacted signatures or encrypted data."
        />

        <FakeLogPanel
          title="Fake Public-Key Review Log"
          logs={[
            "10:58:07 KEYPAIR owner='school_service' status='active'",
            "11:03:19 PUBLIC_KEY location='approved_directory' identity='verified'",
            "11:08:44 PRIVATE_KEY location='shared_folder' access='broad'",
            "11:13:52 EXPOSURE status='suspected' users='14'",
            "11:19:36 RESPONSE access='removed' revocation='initiated'",
            "11:26:11 REPLACEMENT new_keypair='issued' impact_review='open'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Key Should Remain Secret?"
          evidence={[
            "A fictional service publishes its public key through an approved certificate.",
            "The private key is stored in a broadly shared folder.",
            "Several users can download both files.",
            "The service uses the key pair for signatures and protected connections.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The public key may be shared, but the exposed private key must be treated as compromised and replaced.",
            "Both keys should remain public.",
            "Only the public key needs protection.",
            "The private key can remain active because the certificate is valid.",
          ]}
          bestAnswer={0}
          explanation="The private key supports sensitive operations and must remain protected. Exposure can damage trust in signatures or encrypted sessions."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Asymmetric Cryptography"
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
          title="Review a Fictional Public-Key Trust Plan"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Trust Plan
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                School Service Key Pair
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional school service uses a public certificate, protected
                private key, signed notices, encrypted requests, and a documented
                replacement process.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the owner and approved use of the key pair.</li>
                <li>Verify how the public key is distributed and trusted.</li>
                <li>Review private-key storage and authorized access.</li>
                <li>Identify encryption, decryption, signing, and verification roles.</li>
                <li>Check revocation and replacement procedures.</li>
                <li>Document verification and impact-review steps.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Public Key Arrives Through an Unverified Message"
          scenario="A fictional user receives a new public key through an unexpected message and is told to trust it immediately."
          choices={[
            {
              label: "Choice A",
              response:
                "Verify the key through an approved certificate, directory, fingerprint, or trusted contact before using it.",
              outcome:
                "Best defensive choice. A public key must be connected to the expected identity.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Use the key because public keys are always trustworthy.",
              outcome:
                "Risky. An attacker could substitute a different public key.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Send a real private key back for comparison.",
              outcome:
                "Unsafe. Private keys must never be shared.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Private Key May Have Been Exposed"
          scenario="A fictional service discovers that its private key may have been copied from an unprotected folder."
          choices={[
            {
              label: "Choice A",
              response:
                "Report the exposure, revoke or retire the key, issue a trusted replacement, and review impacted signatures or encrypted data.",
              outcome:
                "Best defensive choice. Possible private-key exposure damages trust in sensitive operations.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep using the key because no misuse has been confirmed.",
              outcome:
                "Risky. Continued use may extend the impact.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Post the key publicly so everyone has the same copy.",
              outcome:
                "Unsafe. This guarantees exposure.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Asymmetric Encryption Checklist"
          items={[
            "I understand that asymmetric cryptography uses a public and private key pair.",
            "I verify that a public key belongs to the expected identity.",
            "I protect private keys through approved storage and limited access.",
            "I understand how public-key encryption supports recipient confidentiality.",
            "I understand how private-key signing and public-key verification support authenticity and integrity.",
            "I report suspected private-key exposure and follow revocation or replacement procedures.",
            "I understand that digital signatures do not automatically hide message content.",
          ]}
        />

        <MiniQuiz
          title="B12.4 Mini Quiz: Asymmetric Encryption Basics"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional asymmetric-cryptography plan. Include owner, public-key distribution, identity verification, private-key storage, encryption use, signature use, authorized users, revocation trigger, replacement process, and verification evidence."
          tips={[
            "Use fictional keys, certificates, signatures, files, accounts, services, people, and organizations only.",
            "Do not include real passwords, private keys, secret keys, MFA codes, recovery codes, or personal data.",
            "Explain how users verify that the public key belongs to the expected identity.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Asymmetric cryptography uses a related public key and private key.",
            "The public key may be shared, but its identity still must be verified.",
            "The private key must remain protected and restricted.",
            "Digital signatures support authenticity and integrity, not automatic confidentiality.",
            "Suspected private-key exposure requires revocation, replacement, and impact review.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}
