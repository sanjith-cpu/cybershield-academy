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
const previousLesson = `${modulePath}/cryptography-in-system-design`;
const nextLesson = `${modulePath}/hashing-salting-and-integrity-concepts`;

const objectives = [
  "Explain the conceptual difference between symmetric and asymmetric encryption, including how their key relationships affect system design.",
  "Evaluate when symmetric, asymmetric, or hybrid encryption is a better architectural fit for data protection, trust establishment, transport, storage, and service communication.",
  "Analyze key-distribution, ownership, performance, recovery, and lifecycle tradeoffs without treating one encryption model as universally superior.",
  "Identify design mistakes such as using one shared key too broadly, confusing public keys with secrets, ignoring key rotation, or choosing asymmetric encryption for high-volume data without a clear reason.",
  "Build an Encryption Model Comparison that becomes the second artifact in the A14 Key-Management Design Recommendation.",
];

const encryptionModels = [
  {
    model: "Symmetric encryption",
    keyRelationship:
      "The same secret key, or equivalent shared secret material, is used for encryption and decryption.",
    strengths:
      "Efficient for protecting larger volumes of data and well suited to storage, backups, bulk data processing, and session data once a secure key relationship exists.",
    designChallenge:
      "The secret must be protected and made available only to approved systems or identities.",
    ownershipQuestion:
      "Who is allowed to use the shared secret and how narrowly is that trust scoped?",
    lifecycleQuestion:
      "How is the key generated, stored, rotated, recovered, and retired without creating broad shared trust?",
  },
  {
    model: "Asymmetric encryption",
    keyRelationship:
      "A mathematically related public/private key pair is used, where the private key remains protected and the public key can be distributed more broadly.",
    strengths:
      "Useful for trust establishment, protected key exchange patterns, identity binding, certificates, signatures, and cases where sharing one secret with every participant would be difficult.",
    designChallenge:
      "The private key must remain strongly protected, and the public key must be associated with the correct identity or trust relationship.",
    ownershipQuestion:
      "Who owns the private key and who is allowed to rely on the public key?",
    lifecycleQuestion:
      "How are the pair, certificate relationship, renewal, revocation, and replacement governed?",
  },
  {
    model: "Hybrid encryption",
    keyRelationship:
      "Asymmetric mechanisms help establish trust or protect a temporary symmetric key, while symmetric encryption protects the larger data stream.",
    strengths:
      "Combines scalable trust establishment with efficient bulk encryption.",
    designChallenge:
      "The design now depends on both asymmetric trust and symmetric key lifecycle.",
    ownershipQuestion:
      "Which system owns the long-term trust key and which session or data key protects the actual payload?",
    lifecycleQuestion:
      "How are both long-term trust material and short-lived or data-specific symmetric keys managed together?",
  },
];

const comparisonDimensions = [
  {
    dimension: "Key relationship",
    symmetric:
      "One secret relationship is shared between approved participants.",
    asymmetric:
      "A public/private key pair separates public trust information from protected private material.",
    hybrid:
      "Long-term asymmetric trust helps establish or protect a temporary symmetric data key.",
  },
  {
    dimension: "Performance",
    symmetric:
      "Usually well suited to larger data volumes and repeated encryption operations.",
    asymmetric:
      "Generally more computationally expensive and not usually the first choice for bulk data protection.",
    hybrid:
      "Uses asymmetric operations for trust establishment and symmetric operations for efficient data protection.",
  },
  {
    dimension: "Distribution",
    symmetric:
      "The secret must reach every approved participant through a secure governance path.",
    asymmetric:
      "The public key can be distributed broadly while the private key remains protected.",
    hybrid:
      "Public-key trust can protect the exchange or wrapping of temporary symmetric keys.",
  },
  {
    dimension: "Trust scope",
    symmetric:
      "Every holder of the same secret participates in the same shared trust relationship.",
    asymmetric:
      "Trust can be associated with individual private-key owners and public-key identities.",
    hybrid:
      "Trust is split between long-term identity/trust keys and short-lived data/session keys.",
  },
  {
    dimension: "Rotation impact",
    symmetric:
      "Rotation can affect every system that depends on the shared secret.",
    asymmetric:
      "Rotation requires updating the key pair and any certificates, trust references, or relying systems.",
    hybrid:
      "Different key classes may rotate at different cadences.",
  },
  {
    dimension: "Recovery",
    symmetric:
      "Recovery must preserve authorized access to the secret without creating uncontrolled copies.",
    asymmetric:
      "Recovery depends on the role of the private key and may have different requirements for signing, decryption, or service identity.",
    hybrid:
      "Recovery must account for both long-term trust keys and data-protection keys.",
  },
  {
    dimension: "Common architecture role",
    symmetric:
      "Database encryption, storage encryption, backups, application data protection, session data.",
    asymmetric:
      "Certificates, service identity, trust establishment, protected key exchange, signatures.",
    hybrid:
      "Protected web sessions, service communication, application protocols that combine identity trust with efficient data encryption.",
  },
  {
    dimension: "Primary governance risk",
    symmetric:
      "Shared secret spreads too broadly or remains active too long.",
    asymmetric:
      "Private key ownership, identity binding, certificate lifecycle, or public-key trust becomes unclear.",
    hybrid:
      "Teams manage one layer well but ignore the lifecycle of the other.",
  },
];

const architectureUseCases = [
  {
    useCase: "Database storage encryption",
    bestFit: "Symmetric",
    why:
      "The platform must efficiently protect large volumes of stored data under a governed key relationship.",
    caution:
      "The key still needs narrow ownership, rotation, recovery, and access governance.",
  },
  {
    useCase: "Service certificate trust",
    bestFit: "Asymmetric",
    why:
      "A service identity can be associated with a public key while the private key remains protected.",
    caution:
      "Certificate validity, issuer trust, renewal, revocation, and private-key custody still matter.",
  },
  {
    useCase: "Protected application session",
    bestFit: "Hybrid",
    why:
      "Asymmetric trust can help establish the secure relationship, while symmetric encryption protects the higher-volume session data.",
    caution:
      "Both trust material and session/data keys need lifecycle and evidence.",
  },
  {
    useCase: "Encrypted backup repository",
    bestFit: "Symmetric",
    why:
      "Bulk data protection and efficient restore operations favor symmetric encryption.",
    caution:
      "Recovery planning must include access to the required key under disaster conditions.",
  },
  {
    useCase: "Partner service identity",
    bestFit: "Asymmetric",
    why:
      "The partner can prove service identity through a certificate/public-key trust relationship without sharing one permanent secret with every relying system.",
    caution:
      "The relationship still needs sponsor, scope, renewal, and revocation governance.",
  },
  {
    useCase: "Software artifact signing",
    bestFit: "Asymmetric",
    why:
      "A private signing key can produce a signature that relying systems verify using the associated public key.",
    caution:
      "Signing is not the same as encrypting the artifact.",
  },
  {
    useCase: "Large file transfer after trust establishment",
    bestFit: "Hybrid",
    why:
      "Public-key trust can establish a protected key relationship and symmetric encryption can efficiently protect the large payload.",
    caution:
      "Do not assume the transport relationship automatically authorizes the receiver to access every file.",
  },
  {
    useCase: "Local application cache protection",
    bestFit: "Symmetric",
    why:
      "The application needs efficient local data protection under a tightly scoped key.",
    caution:
      "Key storage and recovery become part of the endpoint or application architecture.",
  },
];

const keyDistributionQuestions = [
  {
    question: "Who creates the key?",
    symmetric:
      "A governed key service or approved system creates the shared secret.",
    asymmetric:
      "A governed process creates the public/private pair, often near the private-key protection boundary.",
  },
  {
    question: "Who receives secret material?",
    symmetric:
      "Every approved participant that must encrypt or decrypt may need controlled access to the shared secret.",
    asymmetric:
      "Only the private-key owner needs the private key; public keys can be shared more broadly.",
  },
  {
    question: "How is trust verified?",
    symmetric:
      "Trust depends on who is authorized to access the secret and whether that secret remains protected.",
    asymmetric:
      "Trust depends on correct public-key identity binding, certificate relationships, or another verified public-key association.",
  },
  {
    question: "What changes during rotation?",
    symmetric:
      "All dependent systems may need coordinated access to the new secret.",
    asymmetric:
      "The private/public pair and any associated certificate or trust record may need replacement.",
  },
  {
    question: "What can break during recovery?",
    symmetric:
      "Protected data may become unavailable if the required secret is lost.",
    asymmetric:
      "Services may lose identity or access to data if a required private key is unavailable and no governed recovery or replacement exists.",
  },
  {
    question: "What evidence matters?",
    symmetric:
      "Key owner, access scope, storage class, rotation, version, recovery, and dependent systems.",
    asymmetric:
      "Private-key owner, public-key identity, certificate/trust state, renewal, revocation, and relying systems.",
  },
];

const principles = [
  {
    title: "Choose the model for the architecture problem",
    meaning:
      "Symmetric and asymmetric encryption solve different key-management and trust problems.",
    review:
      "What makes this key relationship easier to govern in the selected model?",
  },
  {
    title: "Public does not mean unimportant",
    meaning:
      "Public keys can be shared, but the system still needs confidence that the public key belongs to the expected identity.",
    review:
      "How is the public key bound to the correct service, user, or signer?",
  },
  {
    title: "Secret sharing creates shared trust",
    meaning:
      "A symmetric key shared across many systems expands the number of places that can use the same secret.",
    review:
      "Can the scope be narrowed to fewer systems or a smaller trust domain?",
  },
  {
    title: "Private keys should stay private",
    meaning:
      "The architecture should minimize exposure and copying of private-key material.",
    review:
      "Can the private-key operation happen inside a protected boundary instead of exporting the key?",
  },
  {
    title: "Hybrid designs have two lifecycle layers",
    meaning:
      "Long-term asymmetric trust and temporary symmetric data keys may rotate, expire, or fail differently.",
    review:
      "Does the architecture track both key classes?",
  },
  {
    title: "Performance matters but should not drive trust blindly",
    meaning:
      "Efficient encryption is important, but the architecture must still meet ownership and trust requirements.",
    review:
      "Is the selected model efficient without broadening key exposure?",
  },
  {
    title: "Rotation should be planned before deployment",
    meaning:
      "A key that cannot be changed safely becomes an operational and security liability.",
    review:
      "Can the system replace the key without an emergency redesign?",
  },
  {
    title: "Recovery should preserve trust",
    meaning:
      "Restoring a key relationship should not bypass ownership, identity, or access governance.",
    review:
      "Can legitimate recovery occur without creating uncontrolled copies or permanent exceptions?",
  },
];

const vocabulary = [
  {
    term: "Symmetric encryption",
    definition:
      "Encryption that uses the same shared secret, or equivalent secret key relationship, for encryption and decryption.",
  },
  {
    term: "Asymmetric encryption",
    definition:
      "Encryption based on a mathematically related public/private key pair.",
  },
  {
    term: "Public key",
    definition:
      "The shareable part of an asymmetric key pair used in operations such as encryption or signature verification depending on the design.",
  },
  {
    term: "Private key",
    definition:
      "The protected part of an asymmetric key pair that should remain under the control of its authorized owner.",
  },
  {
    term: "Hybrid encryption",
    definition:
      "A design that combines asymmetric trust or key-establishment mechanisms with symmetric data encryption.",
  },
  {
    term: "Shared secret",
    definition:
      "Secret material known to multiple authorized participants and used in a shared cryptographic relationship.",
  },
  {
    term: "Key distribution",
    definition:
      "The governed process by which approved systems or identities receive access to the cryptographic key material they need.",
  },
  {
    term: "Key wrapping",
    definition:
      "A conceptual pattern in which one key protects another key for controlled storage or transfer.",
  },
  {
    term: "Session key",
    definition:
      "A temporary symmetric key used for a bounded communication or data-protection session.",
  },
  {
    term: "Trust binding",
    definition:
      "The association between a public key and the identity, service, signer, or role that relying systems expect it to represent.",
  },
  {
    term: "Key scope",
    definition:
      "The systems, data, environments, or operations that are allowed to use a particular key.",
  },
  {
    term: "Key dependency",
    definition:
      "A system or data relationship that depends on a key remaining available, valid, and governed.",
  },
];

const records = [
  {
    id: "ENC-01",
    system: "Student Support Database",
    protectionGoal: "Confidentiality at rest",
    model: "Symmetric",
    relationship: "Managed storage key protects database data",
    participants: "Database service + governed key service",
    scope: "Production student-support database only",
    owner: "Data Platform",
    rotation: "Managed rotation with application validation",
    recovery: "Restore process confirms authorized key availability",
    evidence: "Current key metadata + storage policy",
    status: "Confirmed",
    concern:
      "The key should not be reused across unrelated databases merely for convenience.",
  },
  {
    id: "ENC-02",
    system: "Student Services Web Session",
    protectionGoal: "Confidentiality + service authenticity",
    model: "Hybrid",
    relationship: "Asymmetric trust establishes the endpoint relationship; symmetric session protection carries application data",
    participants: "Browser + Student Services Portal",
    scope: "Interactive web session",
    owner: "Application + Platform Security",
    rotation: "Certificate lifecycle + bounded session keys",
    recovery: "Certificate replacement and service continuity plan",
    evidence: "Current certificate + endpoint policy",
    status: "Confirmed",
    concern:
      "Session protection does not replace application authorization.",
  },
  {
    id: "ENC-03",
    system: "Partner Scheduling Integration",
    protectionGoal: "Service identity + protected transport",
    model: "Hybrid",
    relationship: "Partner certificate establishes trust; symmetric session protection handles ongoing traffic",
    participants: "Northbridge integration service + partner service",
    scope: "Scheduling integration only",
    owner: "Integration Owner",
    rotation: "Partner certificate renewal due in 45 days",
    recovery: "Replacement certificate window documented",
    evidence: "Current certificate + sponsor + renewal record",
    status: "Conditional",
    concern:
      "Long-term trust and session-key lifecycle must both remain current.",
  },
  {
    id: "ENC-04",
    system: "Recovery Backup Repository",
    protectionGoal: "Confidentiality + recoverability",
    model: "Symmetric",
    relationship: "Backup encryption key protects large backup sets",
    participants: "Backup platform + recovery key service",
    scope: "Production backup repository",
    owner: "Resilience Team",
    rotation: "Coordinated with recovery testing",
    recovery: "Restore test verifies key availability",
    evidence: "Current restore test + key inventory",
    status: "Confirmed",
    concern:
      "A successful backup is not enough; recovery must still work after key rotation.",
  },
  {
    id: "ENC-05",
    system: "Software Release Signing",
    protectionGoal: "Authenticity + integrity",
    model: "Asymmetric",
    relationship: "Protected private signing key; public verification key trusted by deployment process",
    participants: "Release pipeline + deployment verification",
    scope: "Approved production release artifacts",
    owner: "Release Engineering",
    rotation: "Signing-key rotation with trust update",
    recovery: "Controlled replacement path documented",
    evidence: "Signing-key inventory + verification policy",
    status: "Confirmed",
    concern:
      "Signing is not encryption and should not be presented as protecting artifact confidentiality.",
  },
  {
    id: "ENC-06",
    system: "Legacy Reporting Service",
    protectionGoal: "Historical data confidentiality",
    model: "Symmetric",
    relationship: "One shared legacy secret protects multiple reporting paths",
    participants: "Legacy application + report processor + archival job",
    scope: "Unclear; multiple workloads share one key",
    owner: "Unknown",
    rotation: "No current rotation evidence",
    recovery: "Dependency unclear",
    evidence: "Partial inventory + stale documentation",
    status: "Blocked",
    concern:
      "The key has spread across multiple systems without current ownership or bounded scope.",
  },
  {
    id: "ENC-07",
    system: "Analytics Export Transfer",
    protectionGoal: "Confidential transfer of approved export package",
    model: "Hybrid",
    relationship: "Recipient trust protects a temporary symmetric data key; symmetric encryption protects the export payload",
    participants: "Analytics export service + approved receiving service",
    scope: "Approved export package only",
    owner: "Analytics Product Owner",
    rotation: "Recipient trust lifecycle + per-transfer data key",
    recovery: "Failed transfer can be retried through governed workflow",
    evidence: "Current recipient trust + export policy",
    status: "Conditional",
    concern:
      "Authorization for export must be decided before cryptographic transfer begins.",
  },
];

const dashboardMetrics = [
  {
    label: "Encryption designs reviewed",
    value: "7",
    note: "Storage, web session, partner integration, backups, release signing, legacy reporting, and export transfer",
  },
  {
    label: "Symmetric",
    value: "3",
    note: "Storage, backup, and legacy data-protection relationships",
  },
  {
    label: "Asymmetric / Hybrid",
    value: "4",
    note: "Service trust, signing, partner communication, and export transfer",
  },
  {
    label: "Blocked",
    value: "1",
    note: "Legacy shared secret has Unknown ownership and uncontrolled scope",
  },
];

const logs = [
  "[08:04] ENC-01 database model=SYMMETRIC key_scope=DB_ONLY owner=DATA_PLATFORM state=CONFIRMED",
  "[08:28] ENC-02 web-session model=HYBRID trust=CURRENT session_scope=BOUNDED state=CONFIRMED",
  "[08:52] ENC-03 partner model=HYBRID cert_renewal=45d state=CONDITIONAL",
  "[09:16] ENC-04 backup model=SYMMETRIC restore_test=CURRENT state=CONFIRMED",
  "[09:40] ENC-05 release-signing model=ASYMMETRIC purpose=AUTHENTICITY state=CONFIRMED",
  "[10:03] ENC-06 legacy model=SYMMETRIC owner=UNKNOWN key_scope=BROAD rotation=UNKNOWN state=BLOCKED",
  "[10:27] ENC-07 export-transfer model=HYBRID authorization=REQUIRED_BEFORE_TRANSFER state=CONDITIONAL",
];

const antiPatterns = [
  {
    title: "One symmetric key for everything",
    problem:
      "Multiple applications, environments, and data sets share the same secret because it is easy to configure.",
    better:
      "Use narrower key scope aligned with system, environment, data class, and ownership.",
  },
  {
    title: "Public key treated as secret",
    problem:
      "Teams focus on hiding public keys rather than validating who the key belongs to.",
    better:
      "Protect the private key and govern the identity binding of the public key.",
  },
  {
    title: "Private key copied to many systems",
    problem:
      "The same private key is exported across multiple servers and teams.",
    better:
      "Minimize private-key exposure and keep operations within a protected trust boundary where practical.",
  },
  {
    title: "Asymmetric encryption used for bulk data by default",
    problem:
      "The design chooses asymmetric encryption for high-volume payloads without an architecture reason.",
    better:
      "Use hybrid patterns when asymmetric trust and efficient symmetric data protection both matter.",
  },
  {
    title: "Symmetric key distribution ignored",
    problem:
      "A design says 'use one secret' but never explains how approved systems receive it safely.",
    better:
      "Treat distribution, access scope, storage, and rotation as part of the design.",
  },
  {
    title: "Hybrid lifecycle modeled as one key",
    problem:
      "Long-term trust keys and temporary data/session keys are treated as one lifecycle.",
    better:
      "Track each key class separately with purpose and cadence.",
  },
  {
    title: "Rotation added after production",
    problem:
      "The system works until the first key change, then teams discover every dependency is hard-coded.",
    better:
      "Design rotation and version transition before deployment.",
  },
  {
    title: "Recovery creates permanent extra copies",
    problem:
      "Emergency key copies remain indefinitely because nobody defines retirement.",
    better:
      "Use governed recovery with bounded custody, evidence, and post-recovery cleanup.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep the legacy design Blocked and replace the broad shared key with narrower governed key relationships after ownership and dependencies are mapped.",
    outcome:
      "Best. Broad secret sharing increases trust scope and makes rotation and accountability difficult.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep the one shared key because all three workloads belong to the same department.",
    outcome:
      "Risky. Organizational proximity does not justify uncontrolled cryptographic trust.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Make the shared key permanent so rotation is never required.",
    outcome:
      "Risky. Avoiding rotation does not solve lifecycle or ownership risk.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Use a hybrid design: establish recipient trust with asymmetric mechanisms and protect the large export payload with a temporary symmetric data key.",
    outcome:
      "Best. The design combines scalable trust establishment with efficient bulk data protection.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Use asymmetric encryption directly for every part of a very large payload simply because public keys are easier to distribute.",
    outcome:
      "Caution. Trust distribution is useful, but bulk encryption is usually better handled symmetrically.",
    tone: "caution" as const,
  },
  {
    label: "Choice C",
    response:
      "Skip authorization because the recipient has a valid public key.",
    outcome:
      "Risky. Cryptographic trust does not replace permission to receive the data.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the defining key relationship in symmetric encryption?",
    choices: [
      "A public/private key pair.",
      "A shared secret relationship used for encryption and decryption.",
      "No key is required.",
      "A certificate only.",
    ],
    answer: 1,
    explanation:
      "Symmetric encryption depends on shared secret key material.",
  },
  {
    question:
      "What is the defining key relationship in asymmetric encryption?",
    choices: [
      "One shared secret used by every participant.",
      "A mathematically related public/private key pair.",
      "A password hash only.",
      "No lifecycle is required.",
    ],
    answer: 1,
    explanation:
      "Asymmetric encryption separates shareable public-key material from protected private-key material.",
  },
  {
    question:
      "Why are hybrid encryption designs common?",
    choices: [
      "They combine asymmetric trust establishment with efficient symmetric data protection.",
      "They eliminate key management.",
      "They make authorization unnecessary.",
      "They require one permanent shared secret for everyone.",
    ],
    answer: 0,
    explanation:
      "Hybrid designs combine the strengths of both key models for different parts of the architecture.",
  },
  {
    question:
      "What is a major governance risk of one symmetric key shared across many unrelated systems?",
    choices: [
      "The secret has too narrow a scope.",
      "The shared trust boundary becomes too broad and rotation becomes harder.",
      "Public-key identity becomes clearer.",
      "Recovery is automatically solved.",
    ],
    answer: 1,
    explanation:
      "Shared secrets expand trust to every approved holder, so scope and lifecycle should be minimized.",
  },
  {
    question:
      "What is most important about a public key?",
    choices: [
      "Keeping it secret at all costs.",
      "Knowing that it is correctly bound to the expected identity or service.",
      "Using it as a password.",
      "Sharing its matching private key widely.",
    ],
    answer: 1,
    explanation:
      "Public keys are designed to be shared; trust depends on correct identity binding.",
  },
  {
    question:
      "Which model is generally a strong fit for bulk database or backup encryption?",
    choices: [
      "Symmetric encryption under a governed key lifecycle.",
      "A digital signature only.",
      "A public key with no private key.",
      "No encryption because backups are temporary.",
    ],
    answer: 0,
    explanation:
      "Symmetric encryption is typically well suited to efficient large-volume data protection.",
  },
  {
    question:
      "Which statement about encryption models is strongest?",
    choices: [
      "Asymmetric encryption is always better.",
      "Symmetric encryption is always better.",
      "The right model depends on performance, trust, distribution, ownership, lifecycle, recovery, and the protection goal.",
      "Hybrid encryption removes all key-management responsibilities.",
    ],
    answer: 2,
    explanation:
      "Architecture fit matters more than declaring one model universally superior.",
  },
];

const checklistItems = [
  "The protection goal is stated before choosing an encryption model.",
  "Symmetric and asymmetric key relationships are clearly distinguished.",
  "Shared-secret scope is kept narrow.",
  "Public-key identity binding is documented.",
  "Private-key ownership is explicit.",
  "Private-key exposure and copying are minimized.",
  "Bulk data protection is evaluated for performance and lifecycle fit.",
  "Hybrid designs identify both long-term and temporary key classes.",
  "Key distribution is part of the architecture.",
  "Rotation is designed before production use.",
  "Recovery is documented for required key relationships.",
  "Recovery does not create uncontrolled permanent copies.",
  "Certificates and public-key trust are not treated as authorization.",
  "Environment boundaries are included in key scope.",
  "Shared keys are not reused across unrelated systems without a justified architecture reason.",
  "Legacy shared secrets remain visible as findings.",
  "Evidence includes owner, scope, lifecycle, and dependent systems.",
  "Stale or Unknown evidence does not become Confirmed.",
  "Every encryption model has a next review trigger.",
  "No lesson activity requires real key extraction, cracking, or cryptographic bypass.",
];

const takeaways = [
  "Symmetric encryption uses a shared secret relationship.",
  "Asymmetric encryption uses a public/private key pair.",
  "Symmetric encryption is commonly efficient for large-volume data protection.",
  "Asymmetric encryption is useful for identity trust, key establishment, certificates, and signatures.",
  "Hybrid encryption combines asymmetric trust with symmetric data encryption.",
  "A public key can be shared, but its identity binding still needs governance.",
  "Private keys should remain tightly protected and narrowly exposed.",
  "Shared symmetric keys expand trust to every approved holder.",
  "Rotation and recovery must be designed for each key class.",
  "The Encryption Model Comparison will prepare you for A14.3 Hashing, Salting, and Integrity Concepts.",
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

export default function SymmetricAndAsymmetricEncryptionConceptsPage() {
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
              A14.2
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cryptography and Key Management Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A14.2
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Symmetric and Asymmetric Encryption Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Symmetric and asymmetric encryption are not competing answers to
            the same question. They create different key relationships and
            therefore solve different architecture problems.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson stays conceptual and defensive. It uses fictional key
            relationships and architecture evidence only. It does not teach
            key recovery, cryptographic cracking, downgrade attacks, or bypass
            techniques.
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
          lessonTitle="Symmetric and Asymmetric Encryption Concepts"
          lessonNumber={2}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A14.2 Entry Readiness"
          items={[
            "I can explain protection goals and trust boundaries from A14.1.",
            "I understand that key ownership and lifecycle are part of architecture.",
            "I can distinguish confidentiality from authorization.",
            "I will use only fictional key relationships and safe metadata.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="The Real Difference Is the Trust Relationship Created by the Keys"
        >
          <p className="leading-8">
            Symmetric encryption asks approved participants to share secret
            material. Asymmetric encryption separates a protected private key
            from a public key that can be distributed more broadly. Hybrid
            designs combine those relationships so long-term trust and
            high-volume data protection can each use the model that fits best.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Choose the encryption model by trust, distribution, performance, lifecycle, recovery, and ownership—not by popularity.
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
          eyebrow="Core Models"
          title="Symmetric, Asymmetric, and Hybrid Encryption"
        >
          <div className="grid gap-6">
            {encryptionModels.map((item) => (
              <article
                key={item.model}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-2xl font-black text-white">{item.model}</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {item.keyRelationship}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Strengths
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.strengths}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Design challenge
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.designChallenge}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Ownership question
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.ownershipQuestion}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Lifecycle question
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.lifecycleQuestion}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Comparison"
          title="Eight Architecture Dimensions"
        >
          <div className="grid gap-5">
            {comparisonDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {item.dimension}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Symmetric
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.symmetric}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Asymmetric
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.asymmetric}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Hybrid
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.hybrid}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Architecture Fit"
          title="Common Defensive Use Cases"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {architectureUseCases.map((item) => (
              <article
                key={item.useCase}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-black text-cyan-50">{item.useCase}</h3>
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-black text-cyan-100">
                    {item.bestFit}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Why: {item.why}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Key Distribution"
          title="The Encryption Model Changes the Distribution Problem"
        >
          <div className="grid gap-5">
            {keyDistributionQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.question}</h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Symmetric view
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.symmetric}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Asymmetric view
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.asymmetric}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Principles"
          title="Eight Principles for Choosing and Governing an Encryption Model"
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
          title="Encryption Model Terms"
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
          eyebrow="Fictional Encryption Register"
          title="Seven Northbridge Encryption Model Decisions"
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
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.model}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.system}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Protection goal", item.protectionGoal],
                    ["Key relationship", item.relationship],
                    ["Participants", item.participants],
                    ["Scope", item.scope],
                    ["Owner", item.owner],
                    ["Rotation", item.rotation],
                    ["Recovery", item.recovery],
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
          title="Northbridge Encryption Model Dashboard"
          subtitle="Fictional symmetric, asymmetric, and hybrid architecture summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Legacy Shared Secret Has Uncontrolled Scope"
          severity="High"
          time="10:03"
          source="Fictional Encryption Architecture Review"
          details="ENC-06 uses one symmetric key across several legacy reporting workloads. The owner is Unknown, rotation evidence is missing, and the key scope is broader than any single service boundary."
          recommendation="Keep the relationship Blocked until ownership and dependencies are mapped, then replace the broad shared secret with narrower governed key relationships."
        />

        <Section
          eyebrow="Symmetric vs. Asymmetric"
          title="Neither Model Is Universally Better"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-blue-400/20 bg-blue-400/10 p-6">
              <h3 className="text-xl font-black text-blue-50">
                Symmetric strength
              </h3>
              <p className="mt-3 leading-7 text-blue-100">
                Efficient data protection with a relatively simple key
                relationship—when the shared secret can be kept narrow,
                protected, and lifecycle-managed.
              </p>
            </article>

            <article className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6">
              <h3 className="text-xl font-black text-purple-50">
                Asymmetric strength
              </h3>
              <p className="mt-3 leading-7 text-purple-100">
                Separation between protected private material and shareable
                public trust information—when identity binding and private-key
                governance are strong.
              </p>
            </article>
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
            <h3 className="font-black text-emerald-50">Hybrid strength</h3>
            <p className="mt-2 leading-7 text-emerald-100">
              Hybrid designs can use asymmetric trust where distribution and
              identity matter, then use symmetric encryption where efficient
              data protection matters.
            </p>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Encryption Architecture Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Shared Secret"
          question="What is the strongest architecture conclusion for ENC-06?"
          evidence={[
            "One symmetric key is shared across three legacy workloads.",
            "The current key owner is Unknown.",
            "The scope crosses several reporting functions.",
            "No current rotation evidence exists.",
            "Recovery dependency is unclear.",
          ]}
          options={[
            "Confirmed because all workloads are in the same department.",
            "Blocked until ownership and dependencies are mapped, then narrow the trust relationship and design rotation/recovery.",
            "Permanent because rotation would be inconvenient.",
            "Safe automatically because symmetric encryption is efficient.",
          ]}
          bestAnswer={1}
          explanation="The problem is not symmetric encryption itself; it is uncontrolled shared trust, Unknown ownership, and weak lifecycle governance."
        />

        <Section
          eyebrow="Common Design Mistakes"
          title="Eight Ways Encryption Models Are Misapplied"
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
          title="Scenario Decision Lab 1 — One Shared Key Across Legacy Workloads"
          scenario="Three legacy reporting workloads share one symmetric key. The owner is Unknown and the team keeps the key because changing it would require coordinated work."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Large Export to an Approved Recipient"
          scenario="An approved receiving service needs a large encrypted export. The sender already has a trusted public-key relationship with the recipient."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build an Encryption Model Comparison"
        >
          <p className="leading-8">
            Use fictional systems, keys, owners, trust relationships, and
            evidence only. Do not inspect, export, recover, or manipulate any
            real cryptographic material.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least fifteen fictional encryption-design records.",
              "Give every record a stable ENC ID.",
              "Record the system or service.",
              "Record the protection goal.",
              "Choose Symmetric, Asymmetric, or Hybrid.",
              "Describe the key relationship conceptually.",
              "Record participating systems or identities.",
              "Record key/trust scope.",
              "Assign key or trust owner.",
              "Record public-key identity binding where applicable.",
              "Record private-key custody boundary where applicable.",
              "Record shared-secret distribution scope where applicable.",
              "Record rotation trigger.",
              "Record recovery dependency.",
              "Record evidence source and freshness.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, Accepted Risk, or Not Applicable.",
              "Include at least five symmetric examples.",
              "Include at least five asymmetric examples.",
              "Include at least five hybrid examples.",
              "Include at least one broad shared-secret problem.",
              "Include at least one private-key exposure/custody problem.",
              "Include at least one rotation dependency problem.",
              "Include at least one recovery dependency problem.",
              "Add change triggers for system, environment, owner, certificate, key version, provider, and data-classification changes.",
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
              Do not use real keys, certificates, encrypted files, secrets, or
              key-recovery tools. Do not test cryptographic weaknesses. This is
              an architecture comparison exercise only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Large Approved Export"
          question="Which model is the strongest conceptual fit for ENC-07?"
          evidence={[
            "The recipient is already associated with a trusted public-key relationship.",
            "The export payload is large.",
            "The transfer needs confidentiality.",
            "Authorization is decided before the transfer.",
            "A temporary data key can be bounded to the export.",
          ]}
          options={[
            "Use a hybrid design: asymmetric trust for recipient relationship and a temporary symmetric key for the payload.",
            "Use one permanent symmetric secret shared with every possible recipient.",
            "Skip authorization because the recipient has a public key.",
            "Use a digital signature only and assume confidentiality.",
          ]}
          bestAnswer={0}
          explanation="Hybrid encryption is a strong architecture fit when trusted public-key identity and efficient bulk data protection are both required."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Redesign a Fictional Encryption Architecture With Mixed Key Models"
        >
          <p className="leading-8">
            A fictional organization uses shared secrets for some services,
            certificates for others, and hybrid web sessions across several
            environments. The current architecture has duplicated secrets,
            inconsistent ownership, and no unified rotation model. Redesign the
            model conceptually.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Protection goals",
              "Symmetric key scope",
              "Asymmetric trust boundaries",
              "Public-key identity binding",
              "Private-key custody",
              "Hybrid session/data keys",
              "Environment separation",
              "Key distribution",
              "Rotation ownership",
              "Version transitions",
              "Certificate renewal",
              "Recovery dependencies",
              "Backup access",
              "Legacy shared secrets",
              "Evidence freshness",
              "Decision states",
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
            A strong redesign should make the key relationship obvious for each
            protection goal and should avoid treating convenience as a reason
            for broad, permanent cryptographic trust.
          </p>
        </Section>

        <DefenderChecklist
          title="A14.2 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A14.2 Mini Quiz: Symmetric and Asymmetric Encryption Concepts"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Encryption Model Comparison"
          prompt="Create the second artifact for your A14 Key-Management Design Recommendation: a fictional Encryption Model Comparison with at least fifteen records. Include ENC ID, system/service, protection goal, selected model, key relationship, participants, trust scope, owner, public-key binding or shared-secret distribution where relevant, private-key custody where relevant, rotation, recovery, evidence, freshness, status, concern, next action, and change trigger."
          tips={[
            "Include symmetric, asymmetric, and hybrid examples.",
            "Show why the selected model fits the architecture problem.",
            "Keep public-key identity binding and private-key custody visible.",
            "Include at least one broad shared-secret Blocked finding.",
            "Include rotation and recovery dependencies.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A14.3?"
        >
          <p className="leading-8">
            A14.3 moves from encryption into hashing, salting, and integrity.
            Before continuing, make sure you can explain why encryption is
            reversible with the right key while hashing serves a different,
            one-way purpose.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish symmetric and asymmetric key relationships.",
              "I can explain why hybrid encryption combines both models.",
              "I can identify shared-secret scope as a governance concern.",
              "I can explain public-key identity binding and private-key custody.",
              "I can evaluate encryption-model fit using trust, performance, rotation, recovery, and ownership.",
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
          title="How to Make the Encryption Model Comparison Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Explain the key relationship",
                detail:
                  "Make it obvious whether the design uses a shared secret, public/private pair, or both.",
              },
              {
                title: "Show why the model fits",
                detail:
                  "Connect the model to performance, distribution, trust, ownership, and data volume.",
              },
              {
                title: "Show trust scope",
                detail:
                  "Identify every system or identity that can use the secret or rely on the public key.",
              },
              {
                title: "Show private-key custody",
                detail:
                  "Document the protected boundary where private-key operations occur.",
              },
              {
                title: "Show rotation",
                detail:
                  "Include which systems must change when the key relationship changes.",
              },
              {
                title: "Show recovery",
                detail:
                  "Describe how legitimate service or data recovery continues without uncontrolled key copies.",
              },
              {
                title: "Keep legacy problems visible",
                detail:
                  "Do not mark a broad shared secret safe just because changing it is inconvenient.",
              },
              {
                title: "Connect forward",
                detail:
                  "A14.3 will separate encryption from hashing and integrity-oriented controls.",
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
            Encryption-model learning does not require breaking encryption
          </h2>
          <p className="mt-3 leading-7">
            Do not attempt to crack ciphertext, recover keys, extract private
            keys, bypass certificate validation, downgrade protected
            connections, or manipulate real cryptographic systems. All key
            relationships and evidence in this lesson are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A14.2 Symmetric and Asymmetric Encryption Concepts Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have an architecture model for symmetric, asymmetric, and
            hybrid encryption, including distribution, trust scope, private-key
            custody, rotation, recovery, performance, and governance. Next,
            A14.3 focuses on Hashing, Salting, and Integrity Concepts.
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