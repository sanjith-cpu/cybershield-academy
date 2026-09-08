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

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/cryptography-and-key-management-concepts`;
const previousLesson = `${modulePath}/symmetric-and-asymmetric-encryption-concepts`;
const nextLesson = `${modulePath}/digital-signatures-conceptually`;

const objectives = [
  "Explain hashing as a one-way transformation used for integrity and comparison purposes, and distinguish it clearly from reversible encryption.",
  "Explain salting conceptually as a way to make stored password-verifier values less reusable across accounts, without teaching cracking or attack procedures.",
  "Evaluate fictional integrity designs for files, software artifacts, configuration packages, records, exports, and stored password verifiers using purpose, owner, evidence, lifecycle, and trust context.",
  "Identify limitations such as assuming a hash proves authorship, treating identical digests as identity proof, relying on stale integrity evidence, or confusing secrecy with integrity.",
  "Build an Integrity Protection Review that becomes the third artifact in the A14 Key-Management Design Recommendation.",
];

const coreConcepts = [
  {
    concept: "Hashing",
    purpose:
      "Produces a fixed-size digest from input data using a one-way transformation.",
    usefulFor:
      "Integrity comparison, content identification within a trusted workflow, password-verifier construction, artifact checks, evidence correlation.",
    notFor:
      "Recovering the original data or providing confidentiality.",
    architectureQuestion:
      "What decision will this digest support, and who provides the trusted reference value?",
  },
  {
    concept: "Encryption",
    purpose:
      "Transforms readable data into protected data that authorized parties can reverse with the appropriate key relationship.",
    usefulFor:
      "Confidentiality for stored or transmitted information.",
    notFor:
      "Proving authorship by itself or replacing access control.",
    architectureQuestion:
      "Who is authorized to decrypt, and how is the key lifecycle governed?",
  },
  {
    concept: "Salting",
    purpose:
      "Adds unique, non-secret random data to a password-verifier process so identical passwords do not produce identical stored verifier values across accounts.",
    usefulFor:
      "Reducing reuse of precomputed comparisons and preventing identical password choices from producing identical stored outputs.",
    notFor:
      "Replacing a strong password-hashing design, authentication controls, or account protection.",
    architectureQuestion:
      "Does each stored verifier have an appropriate unique salt and a governed password-storage method?",
  },
  {
    concept: "Digital signature",
    purpose:
      "Provides integrity plus signer-authenticity evidence using an asymmetric signing relationship.",
    usefulFor:
      "Software artifacts, approved documents, release packages, signed records, trusted publishing workflows.",
    notFor:
      "Keeping the signed data secret.",
    architectureQuestion:
      "Who owns the signing key, who trusts the verifier, and what lifecycle governs the signing relationship?",
  },
];

const integrityQuestions = [
  {
    question: "What exactly needs integrity protection?",
    examples:
      "File, release artifact, configuration package, exported report, audit record, stored verifier, message, backup manifest.",
    why:
      "Integrity design should start with the object whose unexpected change matters.",
  },
  {
    question: "Who creates the trusted reference?",
    examples:
      "Release pipeline, approved publisher, data platform, backup system, configuration owner.",
    why:
      "A digest is meaningful only when the comparison value itself comes from a trusted source.",
  },
  {
    question: "When is comparison performed?",
    examples:
      "Before deployment, during restore, during ingestion, during package validation, during account verification.",
    why:
      "Integrity controls need a defined decision point, not just a stored hash nobody checks.",
  },
  {
    question: "What happens on mismatch?",
    examples:
      "Block release, flag review, quarantine package, stop restore, mark evidence Unknown.",
    why:
      "A control is incomplete when mismatches are detected but no action is defined.",
  },
  {
    question: "How is the reference protected?",
    examples:
      "Signed manifest, trusted inventory, controlled metadata store, verified release record.",
    why:
      "An attacker-independent reference is necessary for trustworthy integrity conclusions.",
  },
  {
    question: "How fresh is the evidence?",
    examples:
      "Current artifact digest, stale package manifest, outdated inventory, expired review.",
    why:
      "Integrity evidence that no longer matches the current object or version can create false confidence.",
  },
];

const passwordStorageConcepts = [
  {
    topic: "Stored verifier, not reversible password storage",
    explanation:
      "A strong password-storage architecture does not need to recover the original password. It stores a verifier derived through a one-way process.",
    designNote:
      "The architecture should be able to verify a legitimate login without keeping a recoverable copy of the password.",
  },
  {
    topic: "Unique salt per verifier",
    explanation:
      "A unique salt helps ensure that two accounts using the same password do not produce the same stored verifier value.",
    designNote:
      "The salt is not a secret; its value is in making each verification input unique.",
  },
  {
    topic: "Purpose-built password hashing",
    explanation:
      "Password verification should use a dedicated password-hashing design rather than a general fast digest intended for file integrity.",
    designNote:
      "The lesson stays conceptual and does not provide cracking, benchmarking, or attack instructions.",
  },
  {
    topic: "No plaintext password logging",
    explanation:
      "Authentication logs should record safe metadata about the decision, not the user's secret password.",
    designNote:
      "Monitoring can show account, time, policy outcome, and source health without recording credentials.",
  },
  {
    topic: "Reset instead of recovery",
    explanation:
      "If a user forgets a password, a secure architecture generally resets the credential through a governed identity process rather than recovering the original secret.",
    designNote:
      "Recovery workflows should preserve identity assurance and accountability.",
  },
  {
    topic: "Lifecycle and migration",
    explanation:
      "Password-verifier formats may need to evolve as policy and standards change.",
    designNote:
      "The architecture should support safe migration without exposing user passwords.",
  },
];

const integrityEvidenceTypes = [
  {
    type: "Digest comparison",
    strength:
      "Useful when a trusted reference digest is available and the comparison point is well controlled.",
    limitation:
      "A matching digest supports content consistency but does not prove who created the content.",
  },
  {
    type: "Signed digest / signature",
    strength:
      "Adds signer-authenticity evidence to integrity when the signing key and trust chain are governed.",
    limitation:
      "Trust still depends on signer ownership, key lifecycle, and verifier trust.",
  },
  {
    type: "Versioned manifest",
    strength:
      "Connects expected artifact names, versions, digests, and release state.",
    limitation:
      "The manifest itself must come from a trusted source.",
  },
  {
    type: "Trusted repository metadata",
    strength:
      "Can support comparison between expected and observed package content.",
    limitation:
      "Repository ownership and update process remain part of the trust model.",
  },
  {
    type: "Backup integrity record",
    strength:
      "Supports confidence that backup content is consistent before restore.",
    limitation:
      "Integrity alone does not prove the backup can be decrypted or restored successfully.",
  },
  {
    type: "Audit evidence",
    strength:
      "Can record when integrity checks occurred, which version was evaluated, and what decision followed.",
    limitation:
      "Audit evidence should avoid secrets and remain subject to source-health and retention controls.",
  },
];

const principles = [
  {
    title: "Hashing is not encryption",
    meaning:
      "Hashing is one-way and usually supports comparison or verification; encryption is reversible with the proper key.",
    review:
      "Can the team explain why the control needs comparison rather than secrecy?",
  },
  {
    title: "Integrity needs a trusted reference",
    meaning:
      "A digest becomes useful only when the expected value comes from a source the architecture trusts.",
    review:
      "Who owns and protects the expected digest or manifest?",
  },
  {
    title: "A hash does not prove authorship",
    meaning:
      "Two parties can compute the same digest for the same content.",
    review:
      "If signer identity matters, is a digital signature or another authenticated trust mechanism required?",
  },
  {
    title: "Salts are unique, not secret",
    meaning:
      "A salt separates password-verifier inputs so identical passwords do not produce identical stored values.",
    review:
      "Does each verifier have a unique salt and a purpose-built password-hashing method?",
  },
  {
    title: "Fast file hashes and password hashes have different goals",
    meaning:
      "File integrity values are often designed for efficient comparison, while password verification should use a dedicated password-hashing design.",
    review:
      "Is the chosen mechanism appropriate to the security problem?",
  },
  {
    title: "Mismatches need a decision",
    meaning:
      "Detecting a changed artifact is useful only if the architecture defines what happens next.",
    review:
      "Does a mismatch block, quarantine, alert, or require review?",
  },
  {
    title: "Evidence must be version-aware",
    meaning:
      "A correct digest for version 4 does not verify version 5.",
    review:
      "Are object version, digest, timestamp, and owner connected in the evidence?",
  },
  {
    title: "Integrity and confidentiality can coexist",
    meaning:
      "The same data may require encryption for secrecy and hashing/signatures for integrity or authenticity.",
    review:
      "Does the architecture separately identify each protection goal?",
  },
];

const vocabulary = [
  {
    term: "Hash",
    definition:
      "A fixed-size digest produced by applying a one-way hash function to input data.",
  },
  {
    term: "Digest",
    definition:
      "Another term for the output of a hash function.",
  },
  {
    term: "Hash function",
    definition:
      "A one-way mathematical function that maps input data to a fixed-size output used for comparison and related security goals.",
  },
  {
    term: "Salt",
    definition:
      "Unique, non-secret random data combined with password input before deriving a stored verifier.",
  },
  {
    term: "Password verifier",
    definition:
      "Stored one-way data used to check whether a supplied password is correct without storing a recoverable plaintext password.",
  },
  {
    term: "Integrity",
    definition:
      "Confidence that data or an artifact has not changed unexpectedly.",
  },
  {
    term: "Reference digest",
    definition:
      "A trusted expected hash value used to compare against an observed object.",
  },
  {
    term: "Manifest",
    definition:
      "A structured record that may list artifacts, versions, digests, and other release or package metadata.",
  },
  {
    term: "Collision",
    definition:
      "A conceptual condition where different inputs produce the same hash output.",
  },
  {
    term: "Preimage resistance",
    definition:
      "The security property that makes it infeasible to recover an original input merely from its hash output.",
  },
  {
    term: "Integrity mismatch",
    definition:
      "A condition where the observed digest differs from the trusted expected digest.",
  },
  {
    term: "Verification evidence",
    definition:
      "Metadata showing what object was checked, against which trusted reference, when, by which system, and with what result.",
  },
];

const records = [
  {
    id: "INT-01",
    asset: "Student Services Release Package",
    purpose: "Verify release artifact integrity before deployment",
    method: "Digest comparison against trusted release manifest",
    referenceOwner: "Release Engineering",
    objectOwner: "Application Team",
    decisionPoint: "Before deployment",
    mismatchAction: "Block deployment and open release review",
    freshness: "Current for release version 8.4",
    evidence: "Manifest ID + artifact version + verification event",
    status: "Confirmed",
    concern:
      "Digest match proves consistency with the trusted manifest, not signer identity by itself.",
  },
  {
    id: "INT-02",
    asset: "Configuration Baseline Package",
    purpose: "Detect unexpected package changes",
    method: "Digest comparison against approved baseline record",
    referenceOwner: "Platform Security",
    objectOwner: "Infrastructure Team",
    decisionPoint: "Before promotion between environments",
    mismatchAction: "Hold promotion and require configuration-owner review",
    freshness: "Current",
    evidence: "Baseline version + digest + approval record",
    status: "Confirmed",
    concern:
      "The baseline repository itself is part of the trust boundary.",
  },
  {
    id: "INT-03",
    asset: "Workforce Password Verifiers",
    purpose: "Verify passwords without storing recoverable plaintext credentials",
    method: "Purpose-built password hashing with unique salt per account",
    referenceOwner: "Identity Platform",
    objectOwner: "Identity Security",
    decisionPoint: "Authentication verification",
    mismatchAction: "Authentication fails without logging the password",
    freshness: "Current policy",
    evidence: "Verifier format version + salt-present flag + migration state",
    status: "Confirmed",
    concern:
      "Authentication logs must never record plaintext passwords or reusable secrets.",
  },
  {
    id: "INT-04",
    asset: "Backup Manifest",
    purpose: "Verify backup content consistency before restoration",
    method: "Versioned digest manifest",
    referenceOwner: "Resilience Team",
    objectOwner: "Backup Platform",
    decisionPoint: "Restore preparation",
    mismatchAction: "Stop restore and review affected backup set",
    freshness: "Current for last tested backup",
    evidence: "Backup ID + manifest version + restore-check record",
    status: "Confirmed",
    concern:
      "Integrity evidence does not replace decryption-key availability or a full restore test.",
  },
  {
    id: "INT-05",
    asset: "Partner Data Import Package",
    purpose: "Detect unexpected changes before ingestion",
    method: "Digest comparison supplied through approved partner workflow",
    referenceOwner: "Integration Owner",
    objectOwner: "Partner Integration Service",
    decisionPoint: "Before import",
    mismatchAction: "Quarantine package and request partner review",
    freshness: "Partner reference process under review",
    evidence: "Package ID + digest + sponsor record",
    status: "Conditional",
    concern:
      "The partner reference channel needs renewed trust documentation.",
  },
  {
    id: "INT-06",
    asset: "Legacy Reporting Archive",
    purpose: "Historical file consistency checking",
    method: "Old digest list stored beside archive",
    referenceOwner: "Unknown",
    objectOwner: "Reporting Operations",
    decisionPoint: "Manual checks only",
    mismatchAction: "Undefined",
    freshness: "Stale",
    evidence: "Partial digest list with no current owner",
    status: "Blocked",
    concern:
      "A digest stored beside the data with Unknown ownership is not a strong trusted reference.",
  },
  {
    id: "INT-07",
    asset: "Analytics Export Package",
    purpose: "Verify approved export content before transfer",
    method: "Versioned digest + approved export manifest",
    referenceOwner: "Analytics Product Owner",
    objectOwner: "Export Service",
    decisionPoint: "After generation, before transfer",
    mismatchAction: "Cancel transfer and rebuild from approved source",
    freshness: "Current",
    evidence: "Export job + manifest + digest + policy decision",
    status: "Conditional",
    concern:
      "Confidentiality and authorization remain separate from the integrity check.",
  },
];

const dashboardMetrics = [
  {
    label: "Integrity records reviewed",
    value: "7",
    note: "Release, configuration, password verification, backups, partner imports, legacy archives, and exports",
  },
  {
    label: "Confirmed",
    value: "4",
    note: "Modern release, configuration, password, and backup integrity controls have current evidence",
  },
  {
    label: "Conditional",
    value: "2",
    note: "Partner reference trust and export workflow need continued review",
  },
  {
    label: "Blocked",
    value: "1",
    note: "Legacy digest list lacks trusted ownership and defined mismatch handling",
  },
];

const logs = [
  "[08:02] INT-01 release-package manifest=TRUSTED digest=MATCH version=8.4 state=CONFIRMED",
  "[08:25] INT-02 config-baseline reference=CURRENT digest=MATCH state=CONFIRMED",
  "[08:49] INT-03 password-verifier salt=UNIQUE format=CURRENT plaintext_logging=NO state=CONFIRMED",
  "[09:13] INT-04 backup-manifest digest=MATCH restore_test=CURRENT state=CONFIRMED",
  "[09:37] INT-05 partner-import reference_trust=REVIEW state=CONDITIONAL",
  "[10:01] INT-06 legacy-archive reference_owner=UNKNOWN mismatch_action=UNDEFINED state=BLOCKED",
  "[10:25] INT-07 export-package digest=MATCH authorization=SEPARATE state=CONDITIONAL",
];

const antiPatterns = [
  {
    title: "Hash used as encryption",
    problem:
      "A team assumes a hash can later be reversed to recover the original data.",
    better:
      "Use hashing for one-way verification and encryption for reversible confidentiality.",
  },
  {
    title: "Hash assumed to prove authorship",
    problem:
      "A matching digest is treated as proof of who created the content.",
    better:
      "Use authenticated publishing or digital signatures when signer identity matters.",
  },
  {
    title: "Reference digest stored beside untrusted data",
    problem:
      "An attacker or uncontrolled process could change both the object and the expected digest.",
    better:
      "Protect the reference through a separate trusted workflow or signed manifest.",
  },
  {
    title: "Same password verifier for identical passwords",
    problem:
      "No unique salt is used, so identical password inputs may produce identical stored outputs.",
    better:
      "Use unique salts with a purpose-built password-hashing design.",
  },
  {
    title: "Plaintext passwords in logs",
    problem:
      "Authentication telemetry accidentally stores reusable credentials.",
    better:
      "Log only safe decision metadata and never record plaintext passwords.",
  },
  {
    title: "Mismatch detected but ignored",
    problem:
      "The system computes integrity checks but deployment or ingestion continues even when they fail.",
    better:
      "Define an explicit block, quarantine, review, or remediation action.",
  },
  {
    title: "Stale digest verifies a new version",
    problem:
      "A reference from an older artifact is reused for a different release.",
    better:
      "Bind integrity evidence to object version and lifecycle.",
  },
  {
    title: "Integrity treated as confidentiality",
    problem:
      "A team assumes hashing a file prevents unauthorized reading.",
    better:
      "Use encryption for confidentiality and integrity controls for change detection.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep INT-06 Blocked until a trusted owner, current reference process, version scope, and mismatch action are established.",
    outcome:
      "Best. An unowned digest list stored beside the archive does not provide trustworthy integrity governance.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark it Confirmed because the digest list exists.",
    outcome:
      "Risky. Presence of a digest does not make the reference trustworthy.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Delete the archive immediately without understanding business need.",
    outcome:
      "Caution. Governance should resolve ownership and purpose before making a retirement decision.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep password verification based on a purpose-built one-way verifier with a unique salt per account and safe authentication logging.",
    outcome:
      "Best. The design verifies passwords without storing recoverable plaintext or creating identical verifier values for identical passwords.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Encrypt passwords so administrators can recover them when users forget.",
    outcome:
      "Risky. A secure password-storage design should not require recovering the original password.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Store plaintext passwords but protect the database with encryption.",
    outcome:
      "Risky. Database encryption does not justify storing recoverable plaintext credentials.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the main conceptual difference between hashing and encryption?",
    choices: [
      "Hashing is one-way, while encryption is designed to be reversible with the correct key.",
      "Hashing always uses a public/private key pair.",
      "Encryption can never protect confidentiality.",
      "There is no difference.",
    ],
    answer: 0,
    explanation:
      "Hashing supports one-way verification, while encryption supports reversible confidentiality.",
  },
  {
    question:
      "What does a matching file hash prove most directly?",
    choices: [
      "That the file matches the trusted reference content used for comparison.",
      "Who originally authored the file.",
      "That the file is confidential.",
      "That every user is authorized to open it.",
    ],
    answer: 0,
    explanation:
      "A digest match supports content consistency with the trusted reference, not authorship or authorization.",
  },
  {
    question:
      "Why are unique salts used in password-verifier storage?",
    choices: [
      "To make identical password inputs produce different stored verifier values across accounts.",
      "To encrypt the password so administrators can recover it.",
      "To replace password hashing.",
      "To make the salt secret.",
    ],
    answer: 0,
    explanation:
      "Unique salts separate verifier inputs and reduce reuse of identical comparisons across accounts.",
  },
  {
    question:
      "Which statement about salts is strongest?",
    choices: [
      "Salts must always remain secret.",
      "Salts are typically non-secret but should be unique for each stored verifier.",
      "Every account should use the same salt.",
      "Salts replace authentication controls.",
    ],
    answer: 1,
    explanation:
      "The value of a salt is uniqueness, not secrecy.",
  },
  {
    question:
      "Why does an integrity check need a trusted reference digest?",
    choices: [
      "Because comparing against an untrusted or attacker-controlled reference provides weak assurance.",
      "Because the digest must be reversible.",
      "Because hashes provide confidentiality.",
      "Because every hash proves signer identity.",
    ],
    answer: 0,
    explanation:
      "Integrity depends on both the observed object and a trustworthy expected value.",
  },
  {
    question:
      "What should happen when an important integrity check fails?",
    choices: [
      "Continue automatically because the hash was only informational.",
      "Follow a defined action such as block, quarantine, review, or remediation.",
      "Delete all evidence.",
      "Assume the reference is always wrong.",
    ],
    answer: 1,
    explanation:
      "Integrity controls need explicit decisions when observed content does not match expectations.",
  },
  {
    question:
      "Which statement is strongest?",
    choices: [
      "Hashing, salting, encryption, and signatures solve identical problems.",
      "Hashing supports one-way comparison, salting strengthens password-verifier uniqueness, encryption protects confidentiality, and signatures can add authenticity to integrity.",
      "Salting provides confidentiality.",
      "Encryption alone proves authorship.",
    ],
    answer: 1,
    explanation:
      "Each cryptographic concept has a different architecture purpose.",
  },
];

const checklistItems = [
  "Hashing is distinguished from reversible encryption.",
  "Every integrity control identifies the object being verified.",
  "Every integrity control identifies the trusted reference source.",
  "Digest comparisons are tied to object version.",
  "Mismatch behavior is explicitly defined.",
  "Hash matches are not treated as proof of authorship.",
  "Digital signatures are considered when signer authenticity matters.",
  "Password storage uses one-way verifiers rather than recoverable plaintext.",
  "Each password verifier uses a unique salt.",
  "Salts are not treated as secret credentials.",
  "Authentication logs never contain plaintext passwords.",
  "Password reset is preferred over password recovery.",
  "File-integrity mechanisms and password-hashing mechanisms are not treated as interchangeable.",
  "Backup integrity is reviewed separately from backup decryption and restore capability.",
  "Integrity and confidentiality are documented as separate goals.",
  "Reference manifests have owners and lifecycle.",
  "Legacy digest lists remain visible if ownership is Unknown.",
  "Evidence freshness affects confidence.",
  "Every Blocked or Conditional finding has a next action.",
  "No lesson activity requires password cracking, hash cracking, or credential attacks.",
];

const takeaways = [
  "Hashing is a one-way transformation used for comparison and verification.",
  "Encryption is reversible with the appropriate key and primarily supports confidentiality.",
  "A matching digest supports content consistency with a trusted reference but does not prove authorship.",
  "Salts are unique, non-secret values used in password-verifier construction.",
  "Password storage should use purpose-built one-way verification rather than recoverable plaintext.",
  "Integrity controls need a trusted reference and a defined mismatch action.",
  "Version and evidence freshness matter when verifying artifacts.",
  "Signatures can add signer-authenticity evidence to integrity.",
  "Integrity and confidentiality are separate goals that may both apply to the same data.",
  "The Integrity Protection Review prepares you for A14.4 Digital Signatures Conceptually.",
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

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
      >
        Previous Lesson
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
      >
        Module A14
      </Link>

      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function HashingSaltingAndIntegrityConceptsPage() {
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
              A14.3
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cryptography and Key Management Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A14.3
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Hashing, Salting, and Integrity Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Hashing is not a weaker form of encryption. It solves a different
            problem. A good integrity design asks what object should remain
            unchanged, who provides the trusted reference, when verification
            happens, and what the system does when evidence does not match.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            Password-storage discussion remains conceptual and defensive. This
            lesson does not provide hash cracking, password guessing, credential
            attacks, or instructions for defeating stored verifiers.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A14: Cryptography and Key Management Concepts"
          lessonTitle="Hashing, Salting, and Integrity Concepts"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A14.3 Entry Readiness"
          items={[
            "I can distinguish symmetric, asymmetric, and hybrid encryption from A14.2.",
            "I understand that encryption supports confidentiality and is reversible with the right key.",
            "I am ready to reason about one-way verification and integrity evidence.",
            "I will use only fictional password-verifier records and safe metadata.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Digest Is Useful Only When the Architecture Knows What It Is Comparing"
        >
          <p className="leading-8">
            Computing a hash is easy. Building a trustworthy integrity process
            is harder. A release pipeline needs a trusted expected value,
            version context, an accountable owner, a decision point, and a
            response when the digest does not match. Without those pieces, a
            hash may exist without creating meaningful assurance.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Integrity is a relationship between an object, a trusted reference, a verification event, and a decision.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for This Lesson"
        >
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Core Concepts"
          title="Hashing, Encryption, Salting, and Signatures Are Not Interchangeable"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {coreConcepts.map((item) => (
              <article
                key={item.concept}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.concept}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Useful for
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.usefulFor}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                    Not for
                  </p>
                  <p className="mt-2 text-sm leading-7 text-red-50">
                    {item.notFor}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                    Architecture question
                  </p>
                  <p className="mt-2 text-sm leading-7 text-cyan-50">
                    {item.architectureQuestion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Integrity Model"
          title="Six Questions Behind a Trustworthy Integrity Check"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {integrityQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Examples: {item.examples}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Why it matters: {item.why}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Password Storage"
          title="Password Verification Without Recoverable Password Storage"
        >
          <p className="leading-8">
            Password storage is one of the most important places to understand
            the difference between encryption and hashing. A verifier should
            allow the system to check a login without storing a plaintext or
            routinely recoverable copy of the user's password.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {passwordStorageConcepts.map((item) => (
              <article
                key={item.topic}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.topic}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.explanation}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Design note: {item.designNote}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Safety boundary</p>
            <p className="mt-2 leading-7">
              This lesson explains defensive password-storage architecture only.
              It does not provide password cracking, hash cracking, guessing
              strategies, wordlists, attack tooling, or methods for obtaining
              credentials.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Evidence Types"
          title="Different Integrity Evidence Supports Different Claims"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {integrityEvidenceTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.type}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Strength: {item.strength}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Limitation: {item.limitation}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Principles"
          title="Eight Principles for Hashing and Integrity Architecture"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Review: {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Hashing, Salting, and Integrity Terms"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.term}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.definition}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional Integrity Register"
          title="Seven Northbridge Integrity Protection Records"
        >
          <div className="grid gap-5">
            {records.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.asset}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Purpose", item.purpose],
                    ["Method", item.method],
                    ["Reference owner", item.referenceOwner],
                    ["Object owner", item.objectOwner],
                    ["Decision point", item.decisionPoint],
                    ["Mismatch action", item.mismatchAction],
                    ["Freshness", item.freshness],
                    ["Evidence", item.evidence],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-blue-50">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Architecture concern
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.concern}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Integrity Protection Dashboard"
          subtitle="Fictional hashing, password-verifier, manifest, and integrity evidence summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Legacy Digest List Is Not a Trusted Integrity Reference"
          severity="High"
          time="10:01"
          source="Fictional Integrity Architecture Review"
          details="INT-06 stores an old digest list beside the legacy archive. The reference owner is Unknown, the evidence is stale, and no mismatch response is defined."
          recommendation="Keep the control Blocked until a trusted owner, protected reference source, current version scope, and mismatch action are established."
        />

        <Section
          eyebrow="Hashing vs. Encryption"
          title="One-Way Verification and Reversible Confidentiality Solve Different Problems"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-blue-400/20 bg-blue-400/10 p-6">
              <h3 className="text-xl font-black text-blue-50">Hashing</h3>
              <p className="mt-3 leading-7 text-blue-100">
                Use when the architecture needs a one-way comparison or
                verifier. The original input is not intended to be recovered
                from the digest.
              </p>
            </article>

            <article className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6">
              <h3 className="text-xl font-black text-purple-50">Encryption</h3>
              <p className="mt-3 leading-7 text-purple-100">
                Use when authorized parties need to recover protected data
                through a governed key relationship.
              </p>
            </article>
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
            <p className="font-black text-emerald-50">
              The same object can need both.
            </p>
            <p className="mt-2 leading-7 text-emerald-100">
              A backup package might be encrypted for confidentiality and also
              verified against an integrity manifest before restoration.
            </p>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Integrity Verification Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Integrity Reference"
          question="What is the strongest conclusion for INT-06?"
          evidence={[
            "The archive includes a list of expected digests.",
            "The digest list is stored beside the archive.",
            "The current reference owner is Unknown.",
            "The list is stale.",
            "No mismatch action is defined.",
          ]}
          options={[
            "Confirmed because a hash list exists.",
            "Blocked until the reference source, owner, version scope, and mismatch action are governed.",
            "Safe because hashing always proves integrity.",
            "Accepted automatically because the archive is old.",
          ]}
          bestAnswer={1}
          explanation="Integrity assurance depends on the trustworthiness of the reference and the decision process, not merely the existence of a digest."
        />

        <Section
          eyebrow="Common Mistakes"
          title="Eight Ways Hashing and Integrity Are Misunderstood"
        >
          <div className="grid gap-5">
            {antiPatterns.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-red-100">
                      Why it fails: {item.problem}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      Better approach: {item.better}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Untrusted Legacy Digest List"
          scenario="A legacy archive has an old digest list stored in the same location. Nobody owns the list, and no process explains what to do when a digest differs."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Workforce Password Storage"
          scenario="A fictional identity platform needs to verify passwords without keeping a recoverable copy of each user's password."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build an Integrity Protection Review"
        >
          <p className="leading-8">
            Use fictional files, artifacts, manifests, password-verifier
            records, owners, and synthetic evidence only. Do not test or attack
            real hashes, accounts, or credentials.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least fifteen fictional integrity-protection records.",
              "Give every record a stable INT ID.",
              "Record the object or data being verified.",
              "State the integrity purpose.",
              "Record the verification method conceptually.",
              "Identify the trusted reference source.",
              "Assign reference owner.",
              "Assign object/application owner.",
              "Record object version.",
              "Record verification decision point.",
              "Record mismatch action.",
              "Record evidence freshness.",
              "Record evidence source.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, Accepted Risk, or Not Applicable.",
              "Include at least four software or configuration artifacts.",
              "Include at least two backup or restore examples.",
              "Include at least two partner/import/export examples.",
              "Include at least two password-verifier architecture records.",
              "Include at least one signed-integrity example for comparison.",
              "Include at least one untrusted legacy digest reference and keep it Blocked.",
              "Add change triggers for object version, manifest owner, password-verifier format, application, repository, and recovery changes.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              Do not perform password guessing, hash cracking, credential
              testing, account access, or attempts to defeat real integrity
              controls. This lab is defensive architecture review only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Password-Verifier Design"
          question="Which architecture statement is strongest for INT-03?"
          evidence={[
            "The platform needs to verify passwords during login.",
            "The original password does not need to be recovered.",
            "Each account has a unique salt.",
            "A purpose-built password-hashing design is used.",
            "Authentication logs exclude plaintext passwords.",
          ]}
          options={[
            "The design is appropriate because it supports one-way verification with unique salts and safe logging.",
            "The passwords should also be stored in plaintext for recovery.",
            "All users should share one salt.",
            "The verifier should be reversible so support staff can retrieve passwords.",
          ]}
          bestAnswer={0}
          explanation="Password verification should avoid recoverable plaintext storage while using a dedicated one-way verifier and unique per-account salt."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Redesign a Fictional Integrity Program With Weak Trust References"
        >
          <p className="leading-8">
            A fictional organization computes hashes for software, backups,
            configuration packages, and exports, but the expected values are
            scattered across shared folders with unclear ownership and no
            version control. Redesign the integrity architecture conceptually.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Object inventory",
              "Integrity purpose",
              "Trusted reference owner",
              "Protected reference source",
              "Object version",
              "Verification event",
              "Mismatch action",
              "Release blocking",
              "Backup restore checks",
              "Partner import quarantine",
              "Signed-manifest use",
              "Password-verifier governance",
              "Salt uniqueness",
              "Safe authentication logging",
              "Evidence freshness",
              "Lifecycle review",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5 text-purple-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 leading-8">
            A strong redesign should make every integrity conclusion traceable
            to a trusted expected value, a current object version, a verification
            event, an accountable owner, and a defined response.
          </p>
        </Section>

        <DefenderChecklist
          title="A14.3 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A14.3 Mini Quiz: Hashing, Salting, and Integrity Concepts"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Integrity Protection Review"
          prompt="Create the third artifact for your A14 Key-Management Design Recommendation: a fictional Integrity Protection Review with at least fifteen records. Include INT ID, object/data, integrity purpose, verification method, trusted reference, reference owner, object/application owner, version, decision point, mismatch action, evidence source, freshness, status, concern, next action, and change trigger. Include password-verifier records using only safe architectural metadata."
          tips={[
            "Clearly distinguish hashing from encryption.",
            "Show where the trusted reference comes from.",
            "Tie digests to object versions.",
            "Define mismatch behavior.",
            "Include unique-salt password-verifier concepts without any attack content.",
            "Keep one unowned legacy reference Blocked.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A14.4?"
        >
          <p className="leading-8">
            A14.4 adds signer authenticity to integrity through digital
            signatures. Before continuing, make sure you can explain why a
            matching hash tells you that content matches a reference but does
            not, by itself, tell you who signed or published it.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish hashing from encryption.",
              "I can explain why integrity needs a trusted reference.",
              "I can explain why a hash does not prove authorship.",
              "I can explain unique salts conceptually in password-verifier storage.",
              "I can evaluate integrity evidence using version, owner, freshness, and mismatch handling.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Portfolio Build Guide"
          title="How to Make the Integrity Protection Review Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Name the integrity object",
                detail:
                  "Show exactly which file, package, verifier, backup, export, or record is being checked.",
              },
              {
                title: "Show the trusted reference",
                detail:
                  "A digest is only useful when the expected value comes from a protected, accountable source.",
              },
              {
                title: "Bind evidence to version",
                detail:
                  "Record artifact version, manifest version, or verifier-format version so stale evidence is obvious.",
              },
              {
                title: "Define mismatch behavior",
                detail:
                  "Block, quarantine, review, or remediation should be explicit.",
              },
              {
                title: "Separate integrity from authenticity",
                detail:
                  "Use signatures when the publisher or signer identity matters.",
              },
              {
                title: "Keep password records conceptual",
                detail:
                  "Use fields such as verifier format, salt-present flag, owner, and migration state—never plaintext credentials.",
              },
              {
                title: "Show evidence freshness",
                detail:
                  "Current, Partial, Stale, Missing, and Unknown should change the decision state.",
              },
              {
                title: "Connect forward",
                detail:
                  "A14.4 will build on this integrity model by adding signer identity and digital-signature trust.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Lesson Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Integrity learning does not require cracking hashes or passwords
          </h2>
          <p className="mt-3 leading-7">
            Do not attempt password guessing, hash cracking, credential attacks,
            account access, real verifier testing, or methods for defeating
            integrity checks. All password-verifier, digest, manifest, and
            integrity records in this lesson are fictional and defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A14.3 Hashing, Salting, and Integrity Concepts Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have an integrity model built around one-way hashing,
            trusted references, version-aware evidence, mismatch decisions,
            safe password-verifier concepts, salting, and integrity limits.
            Next, A14.4 focuses on Digital Signatures Conceptually.
          </p>

          <div className="mt-6">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}