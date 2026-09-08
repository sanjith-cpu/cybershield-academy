import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/cryptography-and-key-management-concepts`;
const previousLesson = `${modulePath}/key-management-design-lab`;
const nextModule = `${trackPath}/risk-management-and-compliance`;

const quizQuestions = [
  {
    question:
      "A security architect begins a cryptography review. What should be identified before choosing a cryptographic mechanism?",
    choices: [
      "The protection goal, assets, data, trust boundaries, and ownership.",
      "The longest available key size only.",
      "The most complicated algorithm.",
      "The vendor with the largest product catalog.",
    ],
    answer: 0,
    explanation:
      "Cryptographic architecture starts with the security goal and trust context. The mechanism should serve the requirement rather than define it.",
  },
  {
    question:
      "Which statement best describes symmetric encryption?",
    choices: [
      "It normally uses the same secret-key relationship for encryption and decryption.",
      "It always uses a public key for encryption and a private key for decryption.",
      "It is a one-way integrity mechanism.",
      "It automatically proves who authorized the data.",
    ],
    answer: 0,
    explanation:
      "Symmetric encryption relies on shared secret-key material and is commonly useful for efficient confidentiality at scale.",
  },
  {
    question:
      "Which architecture problem is asymmetric cryptography especially useful for?",
    choices: [
      "Creating public/private key relationships that support trust without first sharing the same secret key.",
      "Replacing authorization policies.",
      "Making every stored password reversible.",
      "Eliminating certificate lifecycle management.",
    ],
    answer: 0,
    explanation:
      "Asymmetric cryptography supports public/private key relationships that are useful for identity, trust establishment, signatures, and key exchange patterns.",
  },
  {
    question:
      "Why do many real systems use hybrid encryption concepts?",
    choices: [
      "They combine asymmetric trust or key-establishment strengths with efficient symmetric data protection.",
      "They avoid using keys entirely.",
      "They replace all certificates with hashes.",
      "They make authorization unnecessary.",
    ],
    answer: 0,
    explanation:
      "Hybrid approaches commonly use asymmetric mechanisms to establish trust or protect key exchange and symmetric mechanisms for efficient bulk data protection.",
  },
  {
    question:
      "What is the primary conceptual difference between hashing and encryption?",
    choices: [
      "Hashing is one-way, while encryption is designed to be reversible with the appropriate key.",
      "Hashing always uses a private key.",
      "Encryption can never protect confidentiality.",
      "There is no meaningful difference.",
    ],
    answer: 0,
    explanation:
      "Hashing supports one-way verification and comparison. Encryption protects confidentiality and is intended to be reversed by authorized parties.",
  },
  {
    question:
      "Why is a unique salt used in password-verifier storage?",
    choices: [
      "To make identical password inputs produce different stored verifier values across accounts.",
      "To make the password directly recoverable.",
      "To replace the password-hashing method.",
      "To act as a secret encryption key.",
    ],
    answer: 0,
    explanation:
      "A unique salt separates password-verifier inputs. Its purpose is uniqueness, not secrecy.",
  },
  {
    question:
      "A file's observed hash matches a trusted reference digest. What does that support most directly?",
    choices: [
      "Confidence that the observed content matches the trusted reference content.",
      "Proof of who originally authored the file.",
      "Proof that the file is confidential.",
      "Proof that every user is authorized to open it.",
    ],
    answer: 0,
    explanation:
      "A matching digest supports integrity comparison. It does not by itself establish authorship, confidentiality, or authorization.",
  },
  {
    question:
      "What does a digital signature primarily add beyond a plain hash?",
    choices: [
      "Signer-authenticity evidence when the signing key and trust relationship are valid.",
      "Automatic confidentiality.",
      "Automatic permission to every resource.",
      "Password recovery.",
    ],
    answer: 0,
    explanation:
      "A signature can combine integrity with evidence about the signer, provided signer identity and key ownership are trustworthy.",
  },
  {
    question:
      "Which key should remain under narrow control in a digital-signature architecture?",
    choices: [
      "The private signing key.",
      "Every verifier's public key.",
      "The public certificate only.",
      "No key requires protection.",
    ],
    answer: 0,
    explanation:
      "The private signing key represents the signer. Broad access to it weakens signer accountability.",
  },
  {
    question:
      "Why does a valid digital signature not automatically authorize a business action?",
    choices: [
      "Signature verification proves a cryptographic trust claim, while authorization is a separate policy decision.",
      "Digital signatures are never useful.",
      "Authorization is part of hashing.",
      "A signature always means the signer is unauthorized.",
    ],
    answer: 0,
    explanation:
      "A valid signature can show who signed and that content was not changed, but policy still decides whether that signer was permitted to approve the action.",
  },
  {
    question:
      "What is the main purpose of a certificate in PKI?",
    choices: [
      "Bind identity information to a public key under an issuing trust relationship.",
      "Store a plaintext password.",
      "Replace access-control policy.",
      "Guarantee every network connection is authorized.",
    ],
    answer: 0,
    explanation:
      "Certificates help relying systems associate public keys with identities through trusted issuers.",
  },
  {
    question:
      "What role does a root certificate authority play?",
    choices: [
      "It serves as a top-level trust anchor in a PKI hierarchy.",
      "It stores every application's symmetric key.",
      "It replaces service authorization.",
      "It acts as a password-verifier database.",
    ],
    answer: 0,
    explanation:
      "A root CA acts as a trust anchor from which certificate trust can be delegated through intermediate issuers.",
  },
  {
    question:
      "Which statement correctly distinguishes certificate expiration and revocation?",
    choices: [
      "Expiration ends trust at the normal validity boundary; revocation ends trust early.",
      "They are identical.",
      "Revocation extends certificate validity.",
      "Expiration applies only to public keys.",
    ],
    answer: 0,
    explanation:
      "Expiration is scheduled lifecycle completion. Revocation is an early end to trust.",
  },
  {
    question:
      "Why should production and development certificate trust be intentionally separated?",
    choices: [
      "To reduce accidental cross-environment identity trust.",
      "Because certificates never work across environments.",
      "Because development systems do not need identities.",
      "Because every environment should share the same private key.",
    ],
    answer: 0,
    explanation:
      "Environment-aware trust reduces unnecessary coupling between lower- and higher-sensitivity systems.",
  },
  {
    question:
      "What is a major advantage of a managed key service?",
    choices: [
      "It can centralize key policy, access, versioning, monitoring, and rotation.",
      "It eliminates the need for key ownership.",
      "It makes all secret keys public.",
      "It guarantees all applications should share one key.",
    ],
    answer: 0,
    explanation:
      "Managed key services can reduce uncontrolled key distribution and improve lifecycle governance.",
  },
  {
    question:
      "Why is key versioning important during rotation?",
    choices: [
      "Different systems or retained data may temporarily depend on different key generations.",
      "Every old key should be deleted immediately.",
      "Version numbers replace access control.",
      "A key never changes after creation.",
    ],
    answer: 0,
    explanation:
      "Version-aware design supports safe transition and prevents accidental loss of access to data that still depends on an older key.",
  },
  {
    question:
      "What should happen before an old encryption-key version is retired?",
    choices: [
      "Confirm that required data, systems, recovery workflows, and retention needs no longer depend on it.",
      "Delete it as soon as a replacement exists.",
      "Copy it to every application.",
      "Remove all lifecycle evidence.",
    ],
    answer: 0,
    explanation:
      "Retirement should follow dependency closure rather than merely the creation of a new key.",
  },
  {
    question:
      "Which situation is the clearest example of a crypto architecture mistake?",
    choices: [
      "Development and production share the same encryption key without a justified need.",
      "A key has a named owner and narrow environment scope.",
      "A certificate renewal is scheduled and monitored.",
      "A backup restore is tested with current key versions.",
    ],
    answer: 0,
    explanation:
      "Unnecessary cross-environment key reuse creates shared trust and complicates lifecycle and incident response.",
  },
  {
    question:
      "Why can strong cryptographic algorithms still be part of a weak design?",
    choices: [
      "Ownership, scope, storage, lifecycle, recovery, authorization, or evidence may still be weak.",
      "Strong algorithms always fail.",
      "Algorithms automatically control user permissions.",
      "Certificates eliminate all lifecycle risk.",
    ],
    answer: 0,
    explanation:
      "Cryptographic strength is only one part of a trustworthy architecture.",
  },
  {
    question:
      "What is the main difference between encryption in transit and encryption at rest?",
    choices: [
      "Transit protects data while moving; at-rest protects data while stored.",
      "Transit applies only to public networks.",
      "At-rest encryption automatically protects network traffic.",
      "They are the same control.",
    ],
    answer: 0,
    explanation:
      "The terms describe different data states and therefore different trust and key relationships.",
  },
  {
    question:
      "Why does database encryption at rest not replace database authorization?",
    choices: [
      "Authorized applications and users can still read data through normal logical access.",
      "Encrypted databases cannot use permissions.",
      "Authorization is an encryption algorithm.",
      "At-rest encryption applies only to backups.",
    ],
    answer: 0,
    explanation:
      "At-rest encryption protects the storage representation. Authorization controls legitimate logical access to the data.",
  },
  {
    question:
      "What is strongest for an encrypted backup repository?",
    choices: [
      "Protect the stored backup, protect replication paths where required, and test recovery with current key versions.",
      "Encrypt the backup but never test restore.",
      "Delete every older key immediately after rotation.",
      "Give every administrator permanent recovery-key access.",
    ],
    answer: 0,
    explanation:
      "Backup security requires confidentiality, lifecycle governance, and proven recoverability.",
  },
  {
    question:
      "What makes a cryptography-policy exception well governed?",
    choices: [
      "Exact scope, reason, compensating controls, owner, expiry, residual-risk decision, and closure criteria.",
      "No owner and no expiry.",
      "A note saying 'temporary.'",
      "A promise to fix it someday.",
    ],
    answer: 0,
    explanation:
      "A real exception is bounded, accountable, time-limited, and tied to measurable closure.",
  },
  {
    question:
      "A backup key inventory is current, but the last full restore test is fourteen months old. What is the strongest decision?",
    choices: [
      "Keep recovery Conditional until current restore evidence proves recoverability.",
      "Mark recovery Confirmed because the key exists.",
      "Delete the recovery requirement.",
      "Create uncontrolled recovery-key copies.",
    ],
    answer: 0,
    explanation:
      "Current key metadata does not prove current recoverability. Different evidence sources support different control objectives.",
  },
  {
    question:
      "An enterprise cryptography review finds strong modern controls but three high-impact Blocked legacy trust paths. What is the strongest final decision?",
    choices: [
      "HOLD until the material blockers have objective closure evidence.",
      "Approve because most controls are healthy.",
      "Treat every legacy issue as Accepted Risk automatically.",
      "Ignore the blockers because encryption is enabled elsewhere.",
    ],
    answer: 0,
    explanation:
      "High-impact blockers should not be averaged away by a mostly healthy architecture. Final approval should reflect the most material unresolved risks.",
  },
];

const coverage = [
  {
    range: "Questions 1–4",
    topic: "Cryptography goals and encryption models",
    lessons:
      "A14.1 Cryptography in System Design + A14.2 Symmetric and Asymmetric Encryption Concepts",
  },
  {
    range: "Questions 5–7",
    topic: "Hashing, salting, and integrity",
    lessons:
      "A14.3 Hashing, Salting, and Integrity Concepts",
  },
  {
    range: "Questions 8–10",
    topic: "Digital signatures",
    lessons:
      "A14.4 Digital Signatures Conceptually",
  },
  {
    range: "Questions 11–14",
    topic: "Certificates and PKI",
    lessons:
      "A14.5 Certificates and PKI Concepts",
  },
  {
    range: "Questions 15–17",
    topic: "Key storage and rotation",
    lessons:
      "A14.6 Key Storage and Rotation",
  },
  {
    range: "Questions 18–19",
    topic: "Crypto design mistakes",
    lessons:
      "A14.7 Common Crypto Design Mistakes",
  },
  {
    range: "Questions 20–22",
    topic: "Encryption in transit and at rest",
    lessons:
      "A14.8 Encryption in Transit and At Rest",
  },
  {
    range: "Question 23",
    topic: "Crypto policy and compliance",
    lessons:
      "A14.9 Crypto Policy and Compliance Concepts",
  },
  {
    range: "Questions 24–25",
    topic: "Integrated architecture decisions",
    lessons:
      "A14.10 Key Management Design Lab",
  },
];

const reviewMap = [
  {
    score: "21–25",
    level: "Strong",
    guidance:
      "You can reason across cryptographic purpose, trust, key lifecycle, PKI, recovery, evidence, and governance. Review any missed questions before continuing.",
  },
  {
    score: "17–20",
    level: "Good",
    guidance:
      "You understand most of the module. Revisit the lesson groups connected to your missed questions, especially lifecycle and integrated architecture decisions.",
  },
  {
    score: "13–16",
    level: "Partial",
    guidance:
      "Several important distinctions still need reinforcement. Rebuild the affected portfolio artifacts and retake the test after review.",
  },
  {
    score: "0–12",
    level: "Rebuild",
    guidance:
      "Return to the core sequence from protection goals through key management, PKI, data coverage, and governance before moving forward.",
  },
];

const targetedReview = [
  {
    weakness: "Confusing hashing with encryption",
    returnTo: "A14.3",
    focus:
      "One-way digests, trusted references, integrity, salting, and password-verifier concepts.",
  },
  {
    weakness: "Confusing signatures with encryption or authorization",
    returnTo: "A14.4",
    focus:
      "Signer authenticity, private signing-key custody, verification trust, and authorization separation.",
  },
  {
    weakness: "Weak PKI understanding",
    returnTo: "A14.5",
    focus:
      "Certificate subject, issuer, root/intermediate trust, validity, renewal, revocation, and relying systems.",
  },
  {
    weakness: "Weak rotation reasoning",
    returnTo: "A14.6",
    focus:
      "Key scope, versions, dependency mapping, recovery, transition, and retirement.",
  },
  {
    weakness: "Missing architecture mistakes",
    returnTo: "A14.7",
    focus:
      "Hard-coded secrets, broad trust, environment overlap, stale ownership, lifecycle drift, and recovery gaps.",
  },
  {
    weakness: "Transit vs. at-rest confusion",
    returnTo: "A14.8",
    focus:
      "Data states, endpoint trust, storage boundaries, backups, exports, replication, and authorization separation.",
  },
  {
    weakness: "Weak policy / exception reasoning",
    returnTo: "A14.9",
    focus:
      "Policy, standards, evidence, exceptions, compensating controls, Accepted Risk, and review cadence.",
  },
  {
    weakness: "Difficulty making final decisions",
    returnTo: "A14.10",
    focus:
      "Evidence conflicts, Blocked vs. Conditional states, release criteria, remediation, validation evidence, and HOLD decisions.",
  },
];

const checklistItems = [
  "I can state the protection goal before selecting a cryptographic control.",
  "I can distinguish symmetric, asymmetric, and hybrid encryption.",
  "I can distinguish hashing from reversible encryption.",
  "I can explain the purpose of unique salts in password-verifier storage.",
  "I understand that a hash alone does not prove authorship.",
  "I can explain digital signatures and signer-authenticity evidence.",
  "I know why a signature does not replace authorization.",
  "I can explain certificates, issuers, trust chains, and trust anchors.",
  "I can distinguish certificate expiration from revocation.",
  "I can explain why private-key custody matters.",
  "I can explain managed key storage conceptually.",
  "I can reason about key versions and safe rotation.",
  "I can identify broad key reuse as a design risk.",
  "I can identify weak crypto architecture even when algorithms are strong.",
  "I can distinguish encryption in transit from encryption at rest.",
  "I can follow data through backups, exports, replicas, and temporary storage.",
  "I can explain why encryption does not replace authorization.",
  "I can evaluate crypto policy using technical and governance evidence.",
  "I can recognize a properly bounded exception and Accepted Risk.",
  "I can make an integrated APPROVE, CONDITIONAL APPROVAL, or HOLD recommendation from evidence.",
];

const takeaways = [
  "Cryptography begins with protection goals and trust boundaries, not algorithm names.",
  "Symmetric, asymmetric, hashing, signing, and certificate mechanisms solve different problems.",
  "Private and secret key lifecycle is as important as the cryptographic mechanism itself.",
  "PKI trust depends on identity binding, issuers, trust anchors, private-key custody, and lifecycle.",
  "Strong algorithms can still sit inside weak architecture.",
  "Transit and at-rest encryption protect different data states.",
  "Authorization remains separate from cryptographic protection.",
  "Recovery must be proven with current evidence.",
  "Exceptions and Accepted Risks must be bounded, owned, and reviewable.",
  "Material Blocked trust paths should drive final architecture decisions even when many other controls are healthy.",
];

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-5 text-slate-300">{children}</div>
    </section>
  );
}

export default function A14ModuleTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-100">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">
              A14 Module Test
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              25 Questions
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Module Assessment
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A14 — Cryptography and Key Management Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This 25-question assessment checks whether you can reason across the
            complete cryptography architecture lifecycle: protection goals,
            encryption models, integrity, signing, PKI, key management, data
            protection, policy, recovery, evidence, and final design decisions.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            Answers remain hidden until you use the quiz controls. The questions
            are defensive and conceptual; no real secrets, credentials,
            cryptographic attacks, or live-system testing are required.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Back to A14.10
            </Link>

            <Link
              href={modulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              A14 Module Home
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Before You Start"
          items={[
            "I completed or reviewed A14.1 through A14.10.",
            "I understand that this test measures architecture reasoning, not memorization alone.",
            "I will answer all 25 questions before deciding which lessons to review.",
            "I know that cryptography, authorization, recovery, and governance must often be evaluated separately.",
          ]}
        />

        <Section
          eyebrow="Assessment Coverage"
          title="What the 25 Questions Measure"
        >
          <div className="grid gap-4">
            {coverage.map((item) => (
              <article
                key={item.range}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-blue-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.range}
                  </span>
                  <span className="font-black text-blue-50">{item.topic}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.lessons}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Module Test"
          title="25 Questions — Answers Hidden Until Reveal"
        >
          <MiniQuiz
            title="A14 Module Test: Cryptography and Key Management Concepts"
            questions={quizQuestions}
          />
        </Section>

        <Section
          eyebrow="Performance Guide"
          title="Interpret Your Score"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reviewMap.map((item) => (
              <article
                key={item.score}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-black text-purple-50">
                    {item.level}
                  </h3>
                  <span className="rounded-full border border-purple-300/30 px-3 py-1 text-sm font-black text-purple-100">
                    {item.score}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  {item.guidance}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Targeted Review"
          title="Use Missed Questions to Decide What to Revisit"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {targetedReview.map((item) => (
              <article
                key={item.returnTo}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-300/30 px-3 py-1 text-xs font-black text-cyan-100">
                    Return to {item.returnTo}
                  </span>
                </div>
                <h3 className="mt-4 font-black text-cyan-50">
                  {item.weakness}
                </h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  Focus: {item.focus}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <DefenderChecklist
          title="A14 Final Competency Checklist"
          items={checklistItems}
        />

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
            Portfolio Checkpoint
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Enterprise Cryptography and Key Management Review
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-emerald-50">
            Your strongest A14 portfolio artifact should now connect protection
            goals, encryption models, integrity, signer trust, PKI, key
            lifecycle, transit/rest coverage, design mistakes, governance,
            exceptions, evidence states, remediation, residual risk, and a final
            architecture recommendation.
          </p>
        </section>

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Assessment Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            This assessment is conceptual and defensive
          </h2>
          <p className="mt-3 leading-7">
            Do not attempt to crack encryption, recover real keys, extract
            secrets, forge signatures, manipulate certificates, alter trust
            stores, intercept protected traffic, or access real encrypted data.
            All scenarios in the module are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Module Complete
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A14 — Cryptography and Key Management Concepts
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-cyan-50">
            After you finish the assessment and review any missed concepts, the
            next Advanced module is A15 — Risk Management and Compliance.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Previous: A14.10
            </Link>

            <Link
              href={modulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              A14 Module Home
            </Link>

            <Link
              href={nextModule}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Next: A15 Risk Management and Compliance
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}