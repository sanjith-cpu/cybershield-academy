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
const previousLesson = modulePath;
const nextLesson = `${modulePath}/symmetric-and-asymmetric-encryption-concepts`;

const objectives = [
  "Explain cryptography as an architecture capability that supports confidentiality, integrity, authenticity, trust, and lifecycle rather than as a single feature called encryption.",
  "Map where cryptographic protections belong across data in transit, data at rest, identity, application trust, software artifacts, backups, integrations, and recovery.",
  "Evaluate fictional cryptographic design records using protection goal, owner, trust boundary, key or certificate dependency, lifecycle, resilience, and evidence.",
  "Identify architecture risks such as unclear protection goals, duplicated key ownership, hidden legacy paths, missing recovery design, and stale cryptographic evidence.",
  "Build a Cryptography Architecture Map that becomes the first artifact in the A14 Key-Management Design Recommendation.",
];

const protectionGoals = [
  {
    goal: "Confidentiality",
    question:
      "Who should be able to read this data, and under what conditions?",
    examples:
      "Sensitive application data, stored records, backups, transport between services.",
    cryptoRole:
      "Encryption can reduce unauthorized disclosure when keys and access boundaries are governed correctly.",
    caution:
      "Encryption does not automatically solve authorization, ownership, retention, or recovery.",
  },
  {
    goal: "Integrity",
    question:
      "How can the architecture detect that data or an artifact changed unexpectedly?",
    examples:
      "Configuration packages, files, software artifacts, stored records, messages.",
    cryptoRole:
      "Hashing or digital signatures can help provide integrity evidence depending on the trust goal.",
    caution:
      "A hash alone does not prove who created the data.",
  },
  {
    goal: "Authenticity",
    question:
      "How can the system gain confidence about the identity of a signer, service, or endpoint?",
    examples:
      "Signed software, service identity, trusted web endpoints, partner integrations.",
    cryptoRole:
      "Digital signatures and certificates can support authenticity when trust relationships are valid.",
    caution:
      "Trust depends on key ownership, certificate lifecycle, and validation, not just the presence of a signature.",
  },
  {
    goal: "Trust establishment",
    question:
      "What cryptographic relationship allows one system to trust another?",
    examples:
      "Certificate chains, service certificates, signing keys, federation-related service trust.",
    cryptoRole:
      "Certificates, public keys, and signing relationships can help establish bounded trust.",
    caution:
      "Trust should be scoped and lifecycle-managed rather than treated as permanent.",
  },
  {
    goal: "Lifecycle control",
    question:
      "How will keys and certificates be issued, stored, rotated, renewed, recovered, revoked, and retired?",
    examples:
      "Application keys, storage keys, signing keys, partner certificates, recovery keys.",
    cryptoRole:
      "Key and certificate management turns cryptography from a one-time configuration into a sustainable control.",
    caution:
      "A strong algorithm with weak lifecycle governance can still create serious risk.",
  },
  {
    goal: "Resilience",
    question:
      "What happens when a key, certificate, provider, device, or recovery path becomes unavailable?",
    examples:
      "Certificate expiration, key rotation, backup restoration, service migration, disaster recovery.",
    cryptoRole:
      "Recovery and redundancy planning preserve secure operations during change or failure.",
    caution:
      "Recovery must not become a permanent bypass around normal trust controls.",
  },
];

const dataStates = [
  {
    state: "Data in transit",
    meaning:
      "Data moving between users, applications, services, networks, or external partners.",
    designQuestions:
      "Which endpoints communicate? What identity or service trust is required? Who owns the certificate or trust relationship?",
  },
  {
    state: "Data at rest",
    meaning:
      "Data stored in databases, object storage, local disks, file systems, archives, or backups.",
    designQuestions:
      "What storage contains sensitive data? Which key protects it? Who owns the key? What happens during restore?",
  },
  {
    state: "Data in use",
    meaning:
      "Data actively processed by an application or service.",
    designQuestions:
      "Which identities and workloads are allowed to process the data? What does cryptography not protect once authorized processing begins?",
  },
  {
    state: "Data in backup",
    meaning:
      "Copies stored for restoration, continuity, or archive purposes.",
    designQuestions:
      "Are backup copies protected consistently? Can recovery succeed if the key lifecycle changes?",
  },
  {
    state: "Data in export",
    meaning:
      "Reports, files, or data packages leaving the normal application boundary.",
    designQuestions:
      "Who can create exports, where are they stored, how are they protected, and what integrity or disclosure controls apply?",
  },
  {
    state: "Data in integration",
    meaning:
      "Information exchanged with partner systems, APIs, queues, or service-to-service workflows.",
    designQuestions:
      "Which service identities, certificates, transport protections, and partner trust relationships are required?",
  },
];

const architectureLayers = [
  {
    layer: "Application layer",
    purpose:
      "Protect application sessions, sensitive workflows, software artifacts, and application-owned data relationships.",
    examples:
      "Protected web sessions, signed application packages, application-level secrets governance.",
    owner:
      "Application Team / Application Security",
  },
  {
    layer: "Data layer",
    purpose:
      "Protect databases, storage services, exports, archives, and backups.",
    examples:
      "Storage encryption, backup protection, data-classification-driven crypto requirements.",
    owner:
      "Data Platform / Storage Owner",
  },
  {
    layer: "Identity and trust layer",
    purpose:
      "Support service identity, endpoint trust, signing relationships, and certificate lifecycle.",
    examples:
      "Certificates, public-key trust, service authentication relationships.",
    owner:
      "Identity / PKI / Platform Security",
  },
  {
    layer: "Infrastructure layer",
    purpose:
      "Protect platform services and infrastructure-managed storage or transport boundaries.",
    examples:
      "Managed encryption services, platform key stores, protected administrative connections.",
    owner:
      "Cloud / Infrastructure Security",
  },
  {
    layer: "Integration layer",
    purpose:
      "Protect partner, vendor, API, and service-to-service trust relationships.",
    examples:
      "Partner certificates, service identity, protected transport, signed artifacts.",
    owner:
      "Integration Owner / Service Owner",
  },
  {
    layer: "Recovery layer",
    purpose:
      "Preserve confidentiality and trust while supporting backup restoration, disaster recovery, and service migration.",
    examples:
      "Recovery keys, backup-key dependencies, certificate renewal during recovery.",
    owner:
      "Resilience / Platform / Security",
  },
];

const ownershipModel = [
  {
    owner: "Data owner",
    responsibility:
      "Defines sensitivity, business purpose, retention, and acceptable disclosure risk.",
  },
  {
    owner: "Application owner",
    responsibility:
      "Defines how the application uses cryptographic services and what data flows require protection.",
  },
  {
    owner: "Key owner",
    responsibility:
      "Is accountable for key purpose, lifecycle, storage class, rotation, recovery, and retirement.",
  },
  {
    owner: "Certificate owner",
    responsibility:
      "Is accountable for certificate identity binding, renewal, expiration, revocation, and relying services.",
  },
  {
    owner: "Platform owner",
    responsibility:
      "Operates the service or infrastructure where cryptographic controls are implemented.",
  },
  {
    owner: "Governance owner",
    responsibility:
      "Defines policy, approved standards, exceptions, review cadence, and evidence expectations.",
  },
];

const architecturePrinciples = [
  {
    title: "Start with the protection goal",
    meaning:
      "Choose cryptographic controls because they solve a defined confidentiality, integrity, authenticity, trust, or lifecycle problem.",
    review:
      "Can the team state exactly what the cryptographic control is supposed to protect?",
  },
  {
    title: "Cryptography does not replace authorization",
    meaning:
      "Encrypted data can still be overexposed to identities that are legitimately allowed to decrypt or use it.",
    review:
      "Are identity and access decisions governed separately from encryption?",
  },
  {
    title: "Keys are part of the architecture",
    meaning:
      "The key that protects data has ownership, lifecycle, storage, recovery, and dependency requirements.",
    review:
      "Can the design explain who owns the key and what happens when it rotates or becomes unavailable?",
  },
  {
    title: "Certificates are trust relationships",
    meaning:
      "Certificates are not only files; they connect identities, public keys, issuers, validity, and relying services.",
    review:
      "Can the team explain who trusts the certificate and why?",
  },
  {
    title: "Crypto boundaries should match trust boundaries",
    meaning:
      "Protection should follow where data crosses between users, services, systems, environments, or organizations.",
    review:
      "Does the map show where data crosses a boundary and what cryptographic relationship protects it?",
  },
  {
    title: "Recovery must be designed with protection",
    meaning:
      "A backup is not recoverable if its required key is lost or inaccessible during restoration.",
    review:
      "Can the organization restore protected data under realistic recovery conditions?",
  },
  {
    title: "Lifecycle matters more than a one-time deployment",
    meaning:
      "Keys and certificates age, rotate, expire, move, and retire.",
    review:
      "Does the architecture have defined lifecycle events and evidence?",
  },
  {
    title: "Evidence should prove current state",
    meaning:
      "Inventories, renewal records, rotation status, source health, and owner confirmation help verify that the cryptographic design is still valid.",
    review:
      "Is current evidence available, or is the team relying on old assumptions?",
  },
];

const vocabulary = [
  {
    term: "Cryptography",
    definition:
      "The use of mathematical techniques and managed trust relationships to support goals such as confidentiality, integrity, authenticity, and secure communication.",
  },
  {
    term: "Encryption",
    definition:
      "A reversible protection process that transforms readable information into a protected form using a key.",
  },
  {
    term: "Hashing",
    definition:
      "A one-way transformation used to produce a fixed-size digest that can support integrity and related security goals.",
  },
  {
    term: "Digital signature",
    definition:
      "A cryptographic mechanism that can provide evidence about integrity and signer authenticity.",
  },
  {
    term: "Certificate",
    definition:
      "A structured trust object that binds identity information to a public key under an issuing relationship.",
  },
  {
    term: "Key",
    definition:
      "Cryptographic material used by an algorithm to perform operations such as encryption, decryption, signing, or verification.",
  },
  {
    term: "Key lifecycle",
    definition:
      "The sequence of generation, approval, storage, distribution, use, rotation, recovery, revocation or retirement, and evidence.",
  },
  {
    term: "Trust boundary",
    definition:
      "A point where data, identity, or responsibility crosses between systems, environments, organizations, or control domains.",
  },
  {
    term: "Cryptographic dependency",
    definition:
      "A system relationship that depends on a key, certificate, trust anchor, or cryptographic service to function securely.",
  },
  {
    term: "Rotation",
    definition:
      "The planned replacement of cryptographic key material or related trust objects according to policy or event triggers.",
  },
  {
    term: "Revocation",
    definition:
      "The process of marking a certificate, key relationship, or trust object as no longer acceptable before its normal end of life.",
  },
  {
    term: "Crypto inventory",
    definition:
      "A governed record of cryptographic assets, owners, purposes, dependencies, lifecycle states, and evidence.",
  },
];

const architectureRecords = [
  {
    id: "CRY-01",
    system: "Student Services Portal",
    data: "Student support session data",
    state: "In transit",
    goal: "Confidentiality + service authenticity",
    boundary: "Browser ↔ Student Services Portal",
    cryptoDependency: "Managed service certificate + transport protection",
    keyOwner: "Platform Security",
    dataOwner: "Student Services",
    lifecycle: "Certificate renewal + endpoint policy review",
    resilience: "Renewal monitoring + emergency replacement path",
    evidence: "Current certificate inventory + endpoint monitoring",
    status: "Confirmed",
    concern:
      "Application authorization still determines which signed-in users may access student-support functions.",
  },
  {
    id: "CRY-02",
    system: "Student Support Database",
    data: "Student support records",
    state: "At rest",
    goal: "Confidentiality",
    boundary: "Database storage boundary",
    cryptoDependency: "Managed storage encryption key",
    keyOwner: "Data Platform",
    dataOwner: "Student Services",
    lifecycle: "Managed rotation + ownership review",
    resilience: "Restore procedure includes key availability",
    evidence: "Storage policy + key lifecycle metadata",
    status: "Confirmed",
    concern:
      "Encryption at rest does not replace database authorization or retention policy.",
  },
  {
    id: "CRY-03",
    system: "Reporting Export Workflow",
    data: "Sensitive generated report",
    state: "Export",
    goal: "Confidentiality + integrity",
    boundary: "Reporting platform → approved export storage",
    cryptoDependency: "Protected storage + integrity evidence",
    keyOwner: "Analytics Platform",
    dataOwner: "Analytics Product Owner",
    lifecycle: "Export policy review + storage key lifecycle",
    resilience: "Fallback export workflow documented but not recently reviewed",
    evidence: "Current policy + stale fallback review",
    status: "Conditional",
    concern:
      "The primary protection is current, but fallback evidence needs review.",
  },
  {
    id: "CRY-04",
    system: "Scheduling Integration",
    data: "Partner scheduling messages",
    state: "Integration",
    goal: "Confidentiality + partner service authenticity",
    boundary: "Northbridge ↔ Scheduling Partner",
    cryptoDependency: "Partner service certificate",
    keyOwner: "Partner / Integration trust relationship",
    dataOwner: "Integration Owner",
    lifecycle: "Certificate renewal in 45 days",
    resilience: "Renewal owner and replacement window documented",
    evidence: "Current certificate + sponsor + renewal record",
    status: "Conditional",
    concern:
      "Renewal must complete before expiration to avoid operational disruption.",
  },
  {
    id: "CRY-05",
    system: "Legacy Reporting Service",
    data: "Historical reporting output",
    state: "At rest + integration",
    goal: "Historical confidentiality",
    boundary: "Legacy application ↔ report storage",
    cryptoDependency: "Legacy encryption key",
    keyOwner: "Unknown",
    dataOwner: "Reporting Operations",
    lifecycle: "No current rotation evidence",
    resilience: "Recovery dependency unclear",
    evidence: "Partial inventory + stale documentation",
    status: "Blocked",
    concern:
      "Unknown key ownership and unclear recovery dependency prevent confident governance.",
  },
  {
    id: "CRY-06",
    system: "Recovery Backup Repository",
    data: "Encrypted production backups",
    state: "Backup",
    goal: "Confidentiality + recoverability",
    boundary: "Production services → recovery repository",
    cryptoDependency: "Recovery-bound encryption key",
    keyOwner: "Resilience Team",
    dataOwner: "Multiple service owners",
    lifecycle: "Rotation coordinated with recovery testing",
    resilience: "Restore test includes key-access validation",
    evidence: "Current recovery test + key inventory",
    status: "Confirmed",
    concern:
      "Future key changes must continue to be tested with realistic restore procedures.",
  },
  {
    id: "CRY-07",
    system: "Software Release Pipeline",
    data: "Release artifact",
    state: "Artifact",
    goal: "Integrity + authenticity",
    boundary: "Build system → deployment environment",
    cryptoDependency: "Signing key + verification relationship",
    keyOwner: "Release Engineering",
    dataOwner: "Application Team",
    lifecycle: "Signing-key rotation + release trust review",
    resilience: "Replacement signing process documented",
    evidence: "Artifact signature metadata + owner confirmation",
    status: "Confirmed",
    concern:
      "Verification must remain part of the deployment trust process rather than an optional check.",
  },
];

const dashboardMetrics = [
  {
    label: "Crypto records reviewed",
    value: "7",
    note: "Transport, storage, exports, integration, legacy, backup, and software-release protection",
  },
  {
    label: "Confirmed",
    value: "4",
    note: "Modern transport, storage, backup, and release trust designs have current evidence",
  },
  {
    label: "Conditional",
    value: "2",
    note: "Reporting fallback and partner certificate renewal need follow-up",
  },
  {
    label: "Blocked",
    value: "1",
    note: "Legacy key ownership and recovery dependency are unresolved",
  },
];

const logs = [
  "[08:03] CRY-01 portal-transport cert=CURRENT owner=PLATFORM_SECURITY state=CONFIRMED",
  "[08:27] CRY-02 database-at-rest key_owner=DATA_PLATFORM lifecycle=CURRENT state=CONFIRMED",
  "[08:51] CRY-03 report-export fallback_review=STALE state=CONDITIONAL",
  "[09:16] CRY-04 partner-cert renewal_due=45d sponsor=CURRENT state=CONDITIONAL",
  "[09:41] CRY-05 legacy-key owner=UNKNOWN rotation=UNKNOWN recovery=UNKNOWN state=BLOCKED",
  "[10:05] CRY-06 backup-key restore_test=CURRENT state=CONFIRMED",
  "[10:29] CRY-07 release-signing verification=REQUIRED lifecycle=CURRENT state=CONFIRMED",
];

const antiPatterns = [
  {
    title: "Encryption everywhere with no stated goal",
    problem:
      "Teams deploy cryptographic controls without explaining what confidentiality, integrity, authenticity, or trust problem they solve.",
    better:
      "Define the protection goal first and then choose the cryptographic capability.",
  },
  {
    title: "Encryption treated as authorization",
    problem:
      "A team assumes encrypted data is safe even when too many identities are authorized to read it.",
    better:
      "Govern identity and authorization separately from cryptographic protection.",
  },
  {
    title: "Keys hidden from architecture diagrams",
    problem:
      "The design shows encrypted databases but never shows key ownership, rotation, or recovery dependency.",
    better:
      "Treat keys as first-class architecture assets.",
  },
  {
    title: "Certificates treated as static files",
    problem:
      "Renewal, expiration, issuer trust, relying-service dependency, and ownership are ignored.",
    better:
      "Model certificates as lifecycle-managed trust relationships.",
  },
  {
    title: "Recovery designed after encryption",
    problem:
      "Backups are encrypted but restore plans never verify that the required keys are available during recovery.",
    better:
      "Test key availability as part of recovery design.",
  },
  {
    title: "Legacy cryptography excluded from inventory",
    problem:
      "Old applications continue using keys or certificates nobody owns because modern inventory covers only new services.",
    better:
      "Keep legacy cryptographic dependencies visible until they are modernized or retired.",
  },
  {
    title: "Same trust assumption across environments",
    problem:
      "Development, staging, and production reuse cryptographic relationships without considering environment boundaries.",
    better:
      "Treat environment as part of scope and ownership.",
  },
  {
    title: "Evidence never refreshed",
    problem:
      "A design is considered secure because it was reviewed years ago.",
    better:
      "Use current inventories, lifecycle evidence, owner confirmation, and review triggers.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep CRY-05 Blocked until the team identifies the key owner, current purpose, rotation state, recovery dependency, and modernization or retirement path.",
    outcome:
      "Best. A legacy key cannot be governed confidently when ownership and lifecycle are Unknown.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark the design Confirmed because the legacy application still produces reports.",
    outcome:
      "Risky. Operational usefulness does not replace key ownership or recovery evidence.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Ignore the key because the data is already encrypted.",
    outcome:
      "Risky. Encryption without governed key lifecycle creates hidden dependency and recovery risk.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Treat the partner certificate as Conditional until renewal completes, while keeping current service operation and monitoring in place.",
    outcome:
      "Best. The trust relationship is currently valid but has a lifecycle condition that must close before expiration.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Ignore the renewal date because the certificate works today.",
    outcome:
      "Risky. Certificate trust is time-bounded and requires lifecycle planning.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Replace the partner integration immediately without reviewing ownership or continuity.",
    outcome:
      "Caution. The current relationship is valid; controlled renewal is more appropriate than unnecessary disruption.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What should come first when designing a cryptographic control?",
    choices: [
      "Choosing an algorithm name.",
      "Defining the protection goal and trust boundary.",
      "Buying a key-management product.",
      "Creating as many keys as possible.",
    ],
    answer: 1,
    explanation:
      "Architecture should begin with the security goal and relationship the control needs to protect.",
  },
  {
    question:
      "Which statement about encryption is strongest?",
    choices: [
      "Encryption automatically solves authorization.",
      "Encryption can support confidentiality, but access control and lifecycle remain separate responsibilities.",
      "Encryption makes data ownership unnecessary.",
      "Encryption removes the need for recovery planning.",
    ],
    answer: 1,
    explanation:
      "Encryption is one control within a larger architecture and does not replace identity, governance, or recovery.",
  },
  {
    question:
      "Why should keys appear in architecture reviews?",
    choices: [
      "Because keys have ownership, lifecycle, storage, rotation, recovery, and dependency requirements.",
      "Because every key should be public.",
      "Because key inventory replaces application inventory.",
      "Because keys never change after deployment.",
    ],
    answer: 0,
    explanation:
      "Keys are first-class dependencies and should be governed as part of the architecture.",
  },
  {
    question:
      "What is strongest for a certificate-based trust relationship?",
    choices: [
      "Treat the certificate as permanent once issued.",
      "Track identity binding, owner, issuer/trust relationship, validity, renewal, and relying-service dependency.",
      "Ignore expiration if the application is important.",
      "Use one certificate for unrelated environments by default.",
    ],
    answer: 1,
    explanation:
      "Certificates are lifecycle-managed trust relationships rather than static files.",
  },
  {
    question:
      "Why should backup encryption be reviewed with recovery?",
    choices: [
      "Because the organization must still be able to access the required key during legitimate restoration.",
      "Because backups do not need confidentiality.",
      "Because recovery removes encryption.",
      "Because keys should always be stored inside the backup file.",
    ],
    answer: 0,
    explanation:
      "Protected backups are useful only if secure recovery can actually succeed.",
  },
  {
    question:
      "What is strongest for a legacy encryption key with Unknown owner and no current rotation evidence?",
    choices: [
      "Confirmed because the application still works.",
      "Blocked until ownership, purpose, lifecycle, recovery, and retirement or modernization are resolved.",
      "Ignored because it is old.",
      "Accepted automatically because the data is encrypted.",
    ],
    answer: 1,
    explanation:
      "Unknown ownership and lifecycle prevent confident cryptographic governance.",
  },
  {
    question:
      "Which statement best describes cryptography in system design?",
    choices: [
      "It is mainly a checkbox asking whether encryption is enabled.",
      "It is a set of architecture relationships involving protection goals, data, trust, keys, certificates, lifecycle, resilience, ownership, and evidence.",
      "It replaces all access control.",
      "It matters only to network engineers.",
    ],
    answer: 1,
    explanation:
      "Strong cryptographic design connects protection mechanisms with trust, lifecycle, ownership, resilience, and evidence.",
  },
];

const checklistItems = [
  "Every cryptographic control has a stated protection goal.",
  "Confidentiality, integrity, authenticity, and trust are not treated as interchangeable.",
  "Data in transit is mapped to the endpoints and trust relationship protecting it.",
  "Data at rest is mapped to storage and key ownership.",
  "Backup protection includes recovery-key availability.",
  "Exports and integrations have explicit protection boundaries.",
  "Keys are first-class architecture assets.",
  "Certificate owners and relying services are identified.",
  "Key and certificate lifecycle events are documented.",
  "Rotation and renewal have accountable owners.",
  "Recovery does not become an ungoverned bypass.",
  "Environment boundaries are included in cryptographic scope.",
  "Legacy cryptographic dependencies remain visible.",
  "Monitoring or inventory evidence supports current state.",
  "Stale evidence does not become Confirmed.",
  "Unknown ownership is treated as a governance finding.",
  "Cryptography is not used as a replacement for authorization.",
  "Resilience and continuity are considered alongside confidentiality.",
  "Every material finding has a next action.",
  "No lesson activity requires real key extraction, cracking, or crypto bypass.",
];

const takeaways = [
  "Cryptography is an architecture capability, not a single checkbox.",
  "Start with the protection goal before selecting a cryptographic mechanism.",
  "Encryption supports confidentiality but does not replace authorization.",
  "Hashing, signatures, certificates, and encryption solve different trust problems.",
  "Keys and certificates are lifecycle-managed architecture assets.",
  "Data in transit, at rest, in backup, in export, and in integration can have different protection needs.",
  "Recovery must be designed together with key and encryption dependencies.",
  "Legacy cryptographic paths should remain visible until they are owned, modernized, or retired.",
  "Current inventories and lifecycle evidence are necessary to verify architecture claims.",
  "The Cryptography Architecture Map will become the foundation for A14.2 Symmetric and Asymmetric Encryption Concepts.",
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
        Previous: A14 Home
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

export default function CryptographyInSystemDesignPage() {
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
              A14.1
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cryptography and Key Management Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A14.1
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Cryptography in System Design
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Strong cryptography begins before an algorithm is selected. It
            begins with architecture questions: what are we protecting, where
            does trust cross a boundary, who owns the key, what happens when
            that key rotates, and how will the organization prove the design
            still works later?
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional cryptographic architecture records and
            safe lifecycle metadata only. It does not require real keys,
            certificates, cracking, bypass, extraction, or attack testing.
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
          lessonTitle="Cryptography in System Design"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A14.1 Entry Readiness"
          items={[
            "I can distinguish data, identity, resource, and trust boundaries from earlier architecture modules.",
            "I understand that encryption and access control are different responsibilities.",
            "I am ready to reason about keys, certificates, integrity, and trust at a conceptual level.",
            "I will use only fictional cryptographic records and safe metadata.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="The Algorithm Is Only One Small Part of the Architecture"
        >
          <p className="leading-8">
            Imagine two systems both say “encryption enabled.” One has a named
            key owner, documented rotation, tested recovery, current certificate
            inventory, clear data classification, and monitoring. The other has
            an old key nobody owns and no record of what would happen during a
            restore. The technical label may look similar, but the architecture
            quality is completely different.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Cryptography becomes trustworthy when protection goals, key ownership, lifecycle, trust, resilience, and evidence all line up.
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
          eyebrow="Protection Goals"
          title="Cryptographic Controls Solve Different Problems"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {protectionGoals.map((item) => (
              <article
                key={item.goal}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.goal}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  {item.question}
                </p>

                <div className="mt-4 rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                    Examples
                  </p>
                  <p className="mt-2 text-sm leading-7 text-blue-50">
                    {item.examples}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Cryptographic role
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.cryptoRole}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Important caution
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.caution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Data States"
          title="Protection Requirements Change as Data Moves"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {dataStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="text-lg font-black text-purple-50">
                  {item.state}
                </h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Design questions: {item.designQuestions}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Architecture Placement"
          title="Where Cryptographic Responsibilities Live"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {architectureLayers.map((item) => (
              <article
                key={item.layer}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.layer}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Examples: {item.examples}
                </p>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  Typical owner: {item.owner}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Ownership"
          title="Cryptographic Architecture Has Multiple Accountable Owners"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {ownershipModel.map((item) => (
              <article
                key={item.owner}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.owner}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.responsibility}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Architecture Principles"
          title="Eight Principles for Strong Cryptography Placement"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {architecturePrinciples.map((item) => (
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
          title="Cryptography Architecture Terms"
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
          eyebrow="Fictional Architecture Register"
          title="Seven Northbridge Cryptography Design Records"
        >
          <div className="grid gap-5">
            {architectureRecords.map((item) => (
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
                  {item.system}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Data", item.data],
                    ["State", item.state],
                    ["Protection goal", item.goal],
                    ["Trust boundary", item.boundary],
                    ["Crypto dependency", item.cryptoDependency],
                    ["Key / trust owner", item.keyOwner],
                    ["Data owner", item.dataOwner],
                    ["Lifecycle", item.lifecycle],
                    ["Resilience", item.resilience],
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
          title="Northbridge Cryptography Architecture Dashboard"
          subtitle="Fictional protection goals, ownership, lifecycle, and evidence summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Legacy Encryption Key Has No Current Owner"
          severity="High"
          time="09:41"
          source="Fictional Cryptography Architecture Review"
          details="CRY-05 protects a legacy reporting path, but the key owner is Unknown, rotation evidence is missing, and recovery dependency is unclear."
          recommendation="Keep the design Blocked until ownership, current purpose, lifecycle, recovery, and modernization or retirement are resolved."
        />

        <Section
          eyebrow="Cryptography vs. Authorization"
          title="Protected Data Can Still Be Overexposed"
        >
          <p className="leading-8">
            Encryption protects data from parties that do not possess or cannot
            access the required key relationship. It does not decide whether a
            legitimately authenticated application user should have access to
            the underlying business data. Those are separate architecture
            questions.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <h3 className="font-black text-cyan-50">
                Cryptographic question
              </h3>
              <p className="mt-2 text-sm leading-7 text-cyan-100">
                Is data protected from unauthorized disclosure or change while
                it crosses or remains inside this boundary?
              </p>
            </article>

            <article className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5">
              <h3 className="font-black text-purple-50">
                Authorization question
              </h3>
              <p className="mt-2 text-sm leading-7 text-purple-100">
                Which identity or workload is allowed to access the resource or
                perform the action after trust is established?
              </p>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Cryptography Architecture Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Key Governance"
          question="What is the strongest architecture conclusion for CRY-05?"
          evidence={[
            "The legacy reporting service still produces intermittent reports.",
            "The encryption key owner is Unknown.",
            "No current rotation evidence exists.",
            "Recovery dependency is unclear.",
            "The current inventory is Partial.",
          ]}
          options={[
            "Confirmed because encrypted reports are still being generated.",
            "Blocked until ownership, current purpose, lifecycle, recovery, and modernization or retirement are resolved.",
            "Accepted automatically because the key is old.",
            "Ignore the key because encryption is already enabled.",
          ]}
          bestAnswer={1}
          explanation="Operational usefulness does not replace accountable key ownership, lifecycle, recovery, and evidence."
        />

        <Section
          eyebrow="Common Design Mistakes"
          title="Eight Ways Cryptography Gets Misplaced in Architecture"
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
          title="Scenario Decision Lab 1 — Legacy Key With Unknown Ownership"
          scenario="A legacy reporting application still works and its stored reports are encrypted, but nobody can identify the current key owner or confirm the recovery dependency."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Partner Certificate Renewal"
          scenario="A partner service certificate is current and the integration is healthy, but the certificate expires in 45 days and renewal work is scheduled."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Cryptography Architecture Map"
        >
          <p className="leading-8">
            Use fictional applications, data flows, certificates, keys, owners,
            and evidence only. Do not inspect, export, manipulate, or test any
            real cryptographic material.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least fifteen fictional cryptography architecture records.",
              "Give every record a stable CRY ID.",
              "Record the system or service.",
              "Record the data or artifact being protected.",
              "Record the data state: transit, rest, use, backup, export, integration, or artifact.",
              "State the protection goal.",
              "Identify the trust boundary.",
              "Record the cryptographic dependency type.",
              "Assign a key, certificate, platform, or trust owner.",
              "Assign a data or application owner.",
              "Record lifecycle requirements.",
              "Record rotation or renewal triggers.",
              "Record recovery dependencies.",
              "Record evidence source and freshness.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, Accepted Risk, or Not Applicable.",
              "Include at least three transit examples.",
              "Include at least three at-rest examples.",
              "Include at least two certificate trust examples.",
              "Include at least two integrity/signature examples.",
              "Include at least two recovery or backup examples.",
              "Include at least one legacy cryptographic dependency and keep it Blocked if ownership is unresolved.",
              "Add change triggers for application, environment, owner, key, certificate, provider, data classification, and recovery changes.",
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
              Do not use real private keys, certificates, passwords, secrets,
              tokens, encrypted files, or production cryptographic settings.
              This lab is architecture mapping only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Partner Certificate Lifecycle"
          question="What is the strongest current status for CRY-04?"
          evidence={[
            "The partner service certificate is currently valid.",
            "The sponsor and integration owner are current.",
            "The integration is functioning normally.",
            "Certificate renewal is due in 45 days.",
            "A replacement window is documented.",
          ]}
          options={[
            "Confirmed forever because the certificate works today.",
            "Conditional until renewal completes, while current operation continues under monitoring.",
            "Blocked immediately even though current trust is valid.",
            "Ignore the renewal date.",
          ]}
          bestAnswer={1}
          explanation="The trust relationship is currently valid, but certificate lifecycle is time-bounded and should remain Conditional until renewal closes."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Redesign a Fictional Crypto Architecture With Hidden Dependencies"
        >
          <p className="leading-8">
            A fictional organization has encrypted databases, protected web
            sessions, partner certificates, signed release artifacts, and
            encrypted backups, but its diagrams omit key ownership, renewal
            dates, recovery dependencies, and environment boundaries. Redesign
            the architecture model conceptually.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Protection goals",
              "Data states",
              "Trust boundaries",
              "Key ownership",
              "Certificate ownership",
              "Data ownership",
              "Environment scope",
              "Rotation triggers",
              "Renewal triggers",
              "Recovery dependencies",
              "Backup key availability",
              "Artifact-signing trust",
              "Partner trust lifecycle",
              "Legacy key inventory",
              "Evidence freshness",
              "Architecture decision states",
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
            The goal is not to add cryptography everywhere. The goal is to make
            every important protection decision explainable, owned,
            lifecycle-aware, recoverable, and supported by current evidence.
          </p>
        </Section>

        <DefenderChecklist
          title="A14.1 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A14.1 Mini Quiz: Cryptography in System Design"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Cryptography Architecture Map"
          prompt="Create the first artifact for your A14 Key-Management Design Recommendation: a fictional Cryptography Architecture Map with at least fifteen records. Include CRY ID, system/service, data or artifact, data state, protection goal, trust boundary, cryptographic dependency, key/certificate/trust owner, data/application owner, lifecycle, rotation/renewal trigger, recovery dependency, evidence source, freshness, status, concern, next action, and change trigger."
          tips={[
            "Start with protection goals rather than algorithm names.",
            "Include transit, rest, backup, export, integration, and software-artifact examples.",
            "Keep keys and certificates visible as architecture dependencies.",
            "Include at least one legacy Blocked finding.",
            "Include recovery dependencies for protected backups.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A14.2?"
        >
          <p className="leading-8">
            A14.2 compares symmetric and asymmetric encryption concepts. Before
            continuing, make sure you can explain where encryption belongs in
            the architecture and why key relationships matter as much as the
            encryption mechanism itself.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish confidentiality, integrity, authenticity, and trust goals.",
              "I can map cryptography to transit, rest, backup, export, integration, and artifact states.",
              "I can explain why key ownership and lifecycle are architecture concerns.",
              "I can explain why encryption does not replace authorization.",
              "I can keep legacy and stale cryptographic evidence visible instead of assuming it is safe.",
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
          title="How to Make the Cryptography Architecture Map Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Lead with the protection goal",
                detail:
                  "State whether the architecture is protecting confidentiality, integrity, authenticity, trust, lifecycle, or resilience.",
              },
              {
                title: "Show the data state",
                detail:
                  "Transit, rest, backup, export, integration, and artifact states often need different controls and owners.",
              },
              {
                title: "Show the trust boundary",
                detail:
                  "Make it clear where data or identity moves between systems, environments, or organizations.",
              },
              {
                title: "Show key and certificate dependencies",
                detail:
                  "Do not draw an encrypted database or trusted service without showing what trust material the design depends on.",
              },
              {
                title: "Show ownership",
                detail:
                  "Data owner, application owner, key owner, certificate owner, and governance owner may be different.",
              },
              {
                title: "Show lifecycle",
                detail:
                  "Rotation, renewal, recovery, revocation, and retirement should appear as architecture events.",
              },
              {
                title: "Show evidence quality",
                detail:
                  "Current, Partial, Stale, Missing, and Unknown evidence should affect confidence.",
              },
              {
                title: "Connect forward",
                detail:
                  "A14.2 will use this map to compare symmetric, asymmetric, and hybrid encryption roles.",
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
            Cryptography architecture learning does not require breaking cryptography
          </h2>
          <p className="mt-3 leading-7">
            Do not attempt to crack encryption, recover keys, extract secrets,
            bypass certificate validation, downgrade protected connections, or
            manipulate real cryptographic systems. All keys, certificates,
            trust records, and evidence in this lesson are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A14.1 Cryptography in System Design Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a system-level model for cryptographic protection,
            including goals, data states, trust boundaries, ownership, keys,
            certificates, lifecycle, recovery, and evidence. Next, A14.2
            compares Symmetric and Asymmetric Encryption Concepts.
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