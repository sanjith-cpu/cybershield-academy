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
const modulePath = `${trackPath}/cloud-security-architecture`;
const previousLesson = `${modulePath}/cloud-iam-architecture`;
const nextLesson = `${modulePath}/cloud-network-boundaries`;

const objectives = [
  "Explain cloud storage security as a combination of data purpose, classification, access, exposure, lifecycle, encryption responsibilities, logging, and evidence rather than simply choosing a storage service.",
  "Compare object storage, managed databases, file storage, backup repositories, analytics stores, and temporary export locations by security purpose and exposure risk.",
  "Evaluate storage access paths, public/private state, identity scope, retention, encryption configuration, logging coverage, replication, and backup relationships using fictional cloud evidence.",
  "Identify architecture risks such as overbroad access, unnecessary public exposure, stale exports, weak ownership, retention drift, unmonitored copies, and unclear data lifecycle.",
  "Build a Cloud Storage Exposure Review that becomes the third artifact in the A12 Cloud Security Architecture Assessment.",
];

const storageTypes = [
  {
    type: "Object storage",
    purpose:
      "Stores files, generated reports, media, archives, application objects, or export packages.",
    architectureQuestions:
      "Who can read or write objects? Is the location public or private? How are sharing, lifecycle, retention, and logging controlled?",
    commonRisk:
      "Broad access, accidental public exposure, old exports, weak ownership, or missing data lifecycle.",
  },
  {
    type: "Managed relational database",
    purpose:
      "Stores structured application records with schemas, transactions, and application queries.",
    architectureQuestions:
      "Which workloads and administrators can connect? How are identities scoped? What backup, audit, retention, and recovery controls apply?",
    commonRisk:
      "Overprivileged identities, broad network exposure, weak audit evidence, or unclear backup ownership.",
  },
  {
    type: "Managed non-relational database",
    purpose:
      "Stores structured or semi-structured application data at flexible scale.",
    architectureQuestions:
      "Which services can access collections or records? How are indexes, backups, replication, retention, and audit handled?",
    commonRisk:
      "Broad service permissions, unexpected copies, weak data classification, or stale development replicas.",
  },
  {
    type: "Cloud file storage",
    purpose:
      "Provides shared file-style access for approved workloads or business processes.",
    architectureQuestions:
      "Which identities and workloads can mount or access the share? Is access environment-specific? What audit and lifecycle evidence exists?",
    commonRisk:
      "Shared write access, inherited permissions, cross-environment reuse, or unclear owner.",
  },
  {
    type: "Backup repository",
    purpose:
      "Stores protected copies intended to support recovery.",
    architectureQuestions:
      "Who can create, read, restore, modify, or delete backups? Are retention and restoration evidence current?",
    commonRisk:
      "Backup data treated as less sensitive than production, weak restore controls, or retention that does not match business needs.",
  },
  {
    type: "Analytics or reporting store",
    purpose:
      "Holds approved datasets for analysis, dashboards, reporting, or aggregate insight.",
    architectureQuestions:
      "Is raw sensitive data necessary? Are fields minimized? Who can query it? How are exports and derived datasets governed?",
    commonRisk:
      "Secondary copies expand exposure, data minimization weakens, and old datasets remain after purpose ends.",
  },
  {
    type: "Temporary export location",
    purpose:
      "Holds short-lived generated files for approved transfer, processing, or user download.",
    architectureQuestions:
      "How long do exports remain? Who can access them? Are they automatically removed? Is access logged?",
    commonRisk:
      "Temporary data becomes permanent because expiration, cleanup, or ownership is missing.",
  },
];

const exposureStates = [
  {
    state: "Private by design",
    meaning:
      "The storage location is not intended for general public access and is reachable only by approved identities or workloads.",
    evidence:
      "Access policy, identity scope, network architecture, storage configuration, and audit evidence support the claim.",
  },
  {
    state: "Public by explicit business requirement",
    meaning:
      "The storage content is intentionally public because the business purpose requires it.",
    evidence:
      "Data classification, public-content approval, owner, exposure review, logging, and change trigger support the decision.",
  },
  {
    state: "Shared with bounded external access",
    meaning:
      "Specific external users or systems may access selected data without making the storage location generally public.",
    evidence:
      "Guest or partner identity, narrow resource scope, expiration, sponsor, sharing policy, and audit record.",
  },
  {
    state: "Service-to-service only",
    meaning:
      "Only named workloads or managed services should access the storage location.",
    evidence:
      "Workload identity, resource scope, service policy, environment boundary, and application architecture.",
  },
  {
    state: "Administrative access",
    meaning:
      "Privileged personnel can administer storage configuration or perform approved support actions.",
    evidence:
      "Privileged role, JIT activation where appropriate, approval, audit, and access review.",
  },
  {
    state: "Unknown or conflicting",
    meaning:
      "Available evidence does not clearly establish whether the storage is exposed, who can reach it, or whether the current configuration matches design intent.",
    evidence:
      "The uncertainty itself should be recorded and resolved rather than converted into an assumed safe state.",
  },
];

const storagePrinciples = [
  {
    title: "Purpose before platform",
    meaning:
      "Start with why the data exists and what business function needs it before choosing storage controls.",
    review:
      "Can every storage location explain its business purpose and data type?",
  },
  {
    title: "Data minimization",
    meaning:
      "Store only the fields and copies required for the approved purpose.",
    review:
      "Do reporting, analytics, export, and backup copies contain more data than necessary?",
  },
  {
    title: "Least-privilege access",
    meaning:
      "Limit who and what can read, write, administer, restore, delete, or share data.",
    review:
      "Do permissions match identity and workload purpose?",
  },
  {
    title: "Private by default",
    meaning:
      "Sensitive or internal data should not become publicly reachable unless an explicit approved requirement exists.",
    review:
      "Is any public state documented, justified, and reviewed?",
  },
  {
    title: "Environment separation",
    meaning:
      "Production data should not casually flow into development, test, or personal storage locations.",
    review:
      "Are lower environments using synthetic or appropriately minimized data?",
  },
  {
    title: "Lifecycle control",
    meaning:
      "Data should have creation, active-use, retention, archive, export, backup, and deletion expectations.",
    review:
      "Can the owner explain when the data should no longer exist?",
  },
  {
    title: "Evidence and logging",
    meaning:
      "Important access and configuration claims need current evidence.",
    review:
      "Are access, sharing, configuration, and administrative events observable enough to support architecture claims?",
  },
  {
    title: "Copy awareness",
    meaning:
      "Backups, replicas, exports, caches, and analytics copies extend the data boundary.",
    review:
      "Has every secondary copy been included in classification, access, retention, and recovery decisions?",
  },
];

const vocabulary = [
  {
    term: "Data classification",
    definition:
      "A method for grouping data by sensitivity, business importance, regulatory or contractual needs, and expected handling.",
  },
  {
    term: "Exposure",
    definition:
      "The set of identities, workloads, networks, external parties, or public users able to reach stored data.",
  },
  {
    term: "Storage policy",
    definition:
      "The configuration or authorization rules that determine who can access a storage service and under what conditions.",
  },
  {
    term: "Public access",
    definition:
      "A state where data can be reached without belonging to a narrowly approved internal or partner identity boundary.",
  },
  {
    term: "Private access",
    definition:
      "A state where data access is limited to approved identities, workloads, networks, or service paths.",
  },
  {
    term: "Encryption at rest",
    definition:
      "Protection applied to stored data while it resides on storage media or in a managed storage service.",
  },
  {
    term: "Key governance",
    definition:
      "The ownership, access, rotation, separation, evidence, and lifecycle decisions associated with cryptographic keys.",
  },
  {
    term: "Retention",
    definition:
      "The period data should remain available before archive, deletion, or another lifecycle action.",
  },
  {
    term: "Replication",
    definition:
      "Maintaining additional copies of data to support availability, locality, performance, or resilience.",
  },
  {
    term: "Backup",
    definition:
      "A protected copy intended to support recovery after data loss, corruption, or another failure.",
  },
  {
    term: "Data lineage",
    definition:
      "A record of where data came from, where it moved, what transformations occurred, and which derived copies were created.",
  },
  {
    term: "Derived dataset",
    definition:
      "A new dataset produced from another source through filtering, aggregation, transformation, reporting, or analytics.",
  },
];

const storageRecords = [
  {
    id: "STO-01",
    name: "Student Support Database",
    type: "Managed relational database",
    purpose: "Primary student-support application records",
    classification: "Restricted",
    access: "Portal workload + approved data administrators",
    exposure: "Service-to-service + privileged administration",
    retention: "Per approved student-record schedule",
    encryption: "Provider-managed storage encryption enabled",
    logging: "Database audit + access telemetry",
    owner: "Data Platform Owner",
    status: "Confirmed",
    concern:
      "One legacy read-only reporting role is scheduled for review next month.",
  },
  {
    id: "STO-02",
    name: "Generated Report Storage",
    type: "Object storage",
    purpose: "Stores approved generated reports for short-term retrieval",
    classification: "Sensitive",
    access: "Reporting workload + authorized application users",
    exposure: "Private",
    retention: "Automatic removal after 14 days",
    encryption: "Storage encryption enabled",
    logging: "Read/write/admin events enabled",
    owner: "Reporting Team",
    status: "Confirmed",
    concern:
      "No public access is required for the business purpose.",
  },
  {
    id: "STO-03",
    name: "Analytics Workspace",
    type: "Managed analytics store",
    purpose: "Aggregate service-quality analysis",
    classification: "Internal / minimized",
    access: "Analytics workload + approved analysts",
    exposure: "Private",
    retention: "90-day rolling analysis window",
    encryption: "Managed encryption enabled",
    logging: "Query and administration logs enabled",
    owner: "Analytics Owner",
    status: "Conditional",
    concern:
      "A new derived dataset has not yet completed minimization review.",
  },
  {
    id: "STO-04",
    name: "Recovery Backup Repository",
    type: "Backup repository",
    purpose: "Recovery copies for critical application data",
    classification: "Restricted",
    access: "Backup service + recovery operators",
    exposure: "Private / recovery-only",
    retention: "Policy-defined recovery schedule",
    encryption: "Managed encryption enabled",
    logging: "Backup and restore events enabled",
    owner: "Recovery Owner",
    status: "Conditional",
    concern:
      "Backup configuration is current, but one restoration test is stale.",
  },
  {
    id: "STO-05",
    name: "Temporary Export Area",
    type: "Temporary object storage",
    purpose: "Short-lived approved export packages",
    classification: "Sensitive",
    access: "Export workload + requesting user",
    exposure: "Private, time-bounded",
    retention: "24-hour automatic expiration",
    encryption: "Storage encryption enabled",
    logging: "Object access and deletion logs",
    owner: "Application Team",
    status: "Confirmed",
    concern:
      "A failed cleanup event last month was resolved and monitoring was added.",
  },
  {
    id: "STO-06",
    name: "Legacy Team File Share",
    type: "Cloud file storage",
    purpose: "Historical internal document workflow",
    classification: "Mixed / unclear",
    access: "Large inherited group",
    exposure: "Internal but broad",
    retention: "Unknown",
    encryption: "Managed encryption enabled",
    logging: "Basic access logging",
    owner: "Unknown",
    status: "Blocked",
    concern:
      "Purpose, owner, classification, permission scope, and retention are not current.",
  },
  {
    id: "STO-07",
    name: "Public Help Content",
    type: "Object storage",
    purpose: "Publicly available help documents and static assets",
    classification: "Public",
    access: "Public read, controlled publishing",
    exposure: "Public by business requirement",
    retention: "Content lifecycle managed by communications owner",
    encryption: "Managed storage encryption",
    logging: "Publishing and administrative events",
    owner: "Communications Web Owner",
    status: "Confirmed",
    concern:
      "Publishing workflow must prevent restricted content from entering this location.",
  },
];

const copyRelationships = [
  {
    source: "STO-01 Student Support Database",
    copy: "STO-04 Recovery Backup Repository",
    reason: "Recovery",
    securityEffect:
      "Backup contains similarly sensitive data and therefore requires strong access, retention, recovery, and deletion controls.",
  },
  {
    source: "STO-01 Student Support Database",
    copy: "STO-03 Analytics Workspace",
    reason: "Approved analysis",
    securityEffect:
      "Data should be minimized before analysis so the secondary dataset exposes only fields needed for the approved purpose.",
  },
  {
    source: "STO-01 Student Support Database",
    copy: "STO-02 Generated Report Storage",
    reason: "User-requested report generation",
    securityEffect:
      "Reports are temporary secondary copies and should inherit sensitivity, access controls, logging, and short retention.",
  },
  {
    source: "STO-02 Generated Report Storage",
    copy: "STO-05 Temporary Export Area",
    reason: "Approved export transfer",
    securityEffect:
      "Export packages should remain private, time-bounded, and linked to a requesting user or workflow.",
  },
];

const antiPatterns = [
  {
    title: "Public because it is easier",
    problem:
      "Public exposure becomes a convenience choice rather than an explicit business requirement.",
    better:
      "Keep storage private unless public access is required, approved, and supported by data classification.",
  },
  {
    title: "Encrypted means safe",
    problem:
      "Encryption at rest does not fix overbroad identities, public exposure, poor retention, or weak logging.",
    better:
      "Evaluate encryption alongside access, exposure, lifecycle, ownership, and monitoring.",
  },
  {
    title: "Backups are less sensitive",
    problem:
      "Backup copies often contain the same sensitive data as production but may receive weaker access or retention controls.",
    better:
      "Apply classification and access governance to backup and recovery data too.",
  },
  {
    title: "Temporary exports can stay forever",
    problem:
      "A short-lived business process becomes a permanent secondary data store.",
    better:
      "Use explicit expiration and evidence that cleanup occurs.",
  },
  {
    title: "Internal means least privilege",
    problem:
      "An internal file share may still expose data to far more people than the business purpose requires.",
    better:
      "Review identity scope even when data is not public.",
  },
  {
    title: "Copy without lineage",
    problem:
      "Analytics, reporting, backup, and export copies exist without clear links to the source data or owner.",
    better:
      "Record lineage, purpose, classification, retention, and responsible owner for each copy.",
  },
  {
    title: "Unknown owner but still active",
    problem:
      "No one can approve access, retention, or retirement decisions.",
    better:
      "Block expansion and resolve ownership before treating the storage location as normal.",
  },
  {
    title: "Old evidence proves current exposure",
    problem:
      "A previous review is treated as proof after identities, policies, network paths, or service configuration changed.",
    better:
      "Refresh evidence after material changes and on an appropriate review cadence.",
  },
];

const dashboardMetrics = [
  {
    label: "Storage locations reviewed",
    value: "7",
    note: "Database, object, analytics, backup, export, file, and public content storage",
  },
  {
    label: "Private or bounded",
    value: "6 / 7",
    note: "One public location is intentionally public for approved help content",
  },
  {
    label: "Current ownership",
    value: "6 / 7",
    note: "Legacy Team File Share has no confirmed owner",
  },
  {
    label: "Lifecycle current",
    value: "5 / 7",
    note: "Legacy share retention is Unknown and one recovery test is stale",
  },
];

const logs = [
  "[08:18] STO-01 student-db exposure=PRIVATE workload=PortalDBClient status=CONFIRMED",
  "[08:44] STO-02 report-storage public_access=NO retention=14d status=CONFIRMED",
  "[09:06] STO-03 analytics derived_dataset=minimization_review=PENDING status=CONDITIONAL",
  "[09:33] STO-04 recovery-backup configuration=CURRENT restore_test=STALE",
  "[09:57] STO-05 temp-export expiry=24h cleanup_monitor=HEALTHY",
  "[10:23] STO-06 legacy-share owner=UNKNOWN retention=UNKNOWN permissions=BROAD status=BLOCKED",
  "[10:49] STO-07 help-content classification=PUBLIC exposure=PUBLIC_APPROVED status=CONFIRMED",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep STO-06 Blocked, identify an accountable owner, classify the data, review inherited permissions, define retention, and retire or redesign the share if the business purpose no longer exists.",
    outcome:
      "Best. Unknown ownership and broad inherited access should not be normalized.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Leave the share unchanged because it is internal rather than public.",
    outcome:
      "Risky. Internal access can still be overbroad and poorly governed.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Make the share public so teams no longer need inherited permissions.",
    outcome:
      "Risky. Public exposure increases access rather than resolving ownership or least privilege.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep STO-07 public only because its content is intentionally classified Public, preserve controlled publishing, and prevent restricted data from entering the location.",
    outcome:
      "Best. Public exposure can be valid when it follows explicit business purpose and classification.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Treat all public storage as automatically insecure even when it contains approved public content.",
    outcome:
      "Caution. Public exposure is not automatically wrong; it must match the business purpose and data classification.",
    tone: "caution" as const,
  },
  {
    label: "Choice C",
    response:
      "Allow teams to upload any file because the storage location is already public.",
    outcome:
      "Risky. Publishing controls must prevent sensitive data from entering public storage.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest description of cloud storage security?",
    choices: [
      "Choosing the most expensive storage service.",
      "Designing data purpose, classification, access, exposure, lifecycle, encryption responsibilities, logging, ownership, and evidence around stored data.",
      "Enabling encryption and ignoring access.",
      "Keeping every storage location public.",
    ],
    answer: 1,
    explanation:
      "Storage security is an architecture problem involving data, identity, exposure, lifecycle, and evidence together.",
  },
  {
    question:
      "Why is encryption at rest not enough to prove storage is secure?",
    choices: [
      "Because encryption is never useful.",
      "Because data can still be overexposed through broad access, public state, weak retention, poor ownership, or missing monitoring.",
      "Because encrypted storage cannot be backed up.",
      "Because only public data can be encrypted.",
    ],
    answer: 1,
    explanation:
      "Encryption protects one dimension of storage risk but does not replace access, lifecycle, ownership, or monitoring controls.",
  },
  {
    question:
      "A temporary export location automatically deletes files after 24 hours. Why is that useful?",
    choices: [
      "It guarantees no one can ever access the data.",
      "It reduces the chance that a short-lived business copy becomes a long-lived secondary data store.",
      "It eliminates the need for identity controls.",
      "It means the data is public.",
    ],
    answer: 1,
    explanation:
      "Expiration supports data minimization and lifecycle control for temporary secondary copies.",
  },
  {
    question:
      "Why should backup repositories receive strong access controls?",
    choices: [
      "Because backups often contain similarly sensitive data as production.",
      "Because backup data is always public.",
      "Because backups do not need retention rules.",
      "Because recovery operators should have permanent unrestricted access.",
    ],
    answer: 0,
    explanation:
      "Backup copies often preserve the same sensitive content and therefore remain part of the protected data boundary.",
  },
  {
    question:
      "What is the strongest conclusion about an internal file share with no owner, unknown retention, and broad inherited access?",
    choices: [
      "It is safe because it is internal.",
      "It should remain Blocked or Unknown until ownership, classification, permission scope, purpose, and retention are resolved.",
      "It should become public.",
      "It needs no review because it is old.",
    ],
    answer: 1,
    explanation:
      "Internal access can still be excessive, and unowned storage cannot be confidently governed.",
  },
  {
    question:
      "When can public cloud storage be appropriate?",
    choices: [
      "Whenever it is convenient.",
      "When the business purpose requires public content, the data is classified for public release, publishing is controlled, and exposure is intentionally reviewed.",
      "Whenever encryption is enabled.",
      "When the owner is unknown.",
    ],
    answer: 1,
    explanation:
      "Public exposure should be an explicit design decision supported by data classification and governance.",
  },
  {
    question:
      "Why is data lineage useful in cloud storage architecture?",
    choices: [
      "It shows where data came from, where copies moved, and which derived datasets, backups, reports, or exports were created.",
      "It replaces access control.",
      "It makes retention unnecessary.",
      "It proves every copy is safe.",
    ],
    answer: 0,
    explanation:
      "Lineage helps reviewers see the full data boundary instead of focusing only on the primary database.",
  },
];

const checklistItems = [
  "Every storage location has a documented business purpose.",
  "Data classification is known and matches the stored content.",
  "Access scope identifies approved humans and workloads.",
  "Public exposure is explicit, justified, and limited to approved public content.",
  "Private storage is not assumed safe without reviewing identities and policies.",
  "Environment boundaries prevent casual production-data reuse in lower environments.",
  "Retention and deletion expectations are documented.",
  "Temporary exports have explicit expiration.",
  "Backups and replicas are included in the security boundary.",
  "Analytics and reporting copies are minimized for purpose.",
  "Encryption responsibilities are documented without treating encryption as the only control.",
  "Logging and evidence support important access and configuration claims.",
  "Every storage location has an accountable owner.",
  "Unknown or stale ownership, retention, access, and evidence remain visible.",
  "Change triggers cover new copies, new integrations, identity changes, public exposure, retention changes, and architecture changes.",
  "No lesson activity requires access to real cloud storage, accounts, credentials, buckets, databases, shares, or production data.",
];

const takeaways = [
  "Cloud storage security begins with data purpose and classification.",
  "Storage exposure includes public access, internal users, workloads, privileged administrators, guests, network paths, and secondary copies.",
  "Encryption is important but does not replace access, retention, ownership, or logging.",
  "Backups, replicas, reports, exports, and analytics datasets extend the protected data boundary.",
  "Temporary data should have explicit expiration so short-lived copies do not become permanent.",
  "Internal storage can still be overbroad and poorly governed.",
  "Public storage can be appropriate when it contains intentionally public content and has controlled publishing.",
  "Unknown ownership and retention are architecture risks, not minor documentation problems.",
  "Data lineage helps reviewers understand where sensitive data moves and where new copies appear.",
  "The Cloud Storage Exposure Review will connect directly to A12 network, logging, resilience, and governance lessons.",
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
        Module A12
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

export default function StorageSecurityDataExposurePage() {
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
              A12.3
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cloud Security Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A12.3
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Storage Security and Data Exposure
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Cloud storage is secure only when the organization understands what
            data is stored, why it exists, who and what can reach it, where
            copies move, how long they remain, and which evidence proves the
            intended exposure.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional storage records, synthetic identifiers,
            and safe evidence. It does not involve real cloud storage consoles,
            accounts, credentials, databases, buckets, shares, or production
            data.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A12: Cloud Security Architecture"
          lessonTitle="Storage Security and Data Exposure"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A12.3 Entry Readiness"
          items={[
            "I understand cloud IAM architecture from A12.2.",
            "I can distinguish data purpose, identity scope, and access privilege.",
            "I understand that backups, reports, and exports create additional copies of data.",
            "I will use only fictional storage and synthetic evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="The Primary Database Is Only One Part of the Data Boundary"
        >
          <p className="leading-8">
            A fictional student-support application may store its main records
            in a managed database. But the same information can also appear in
            backups, generated reports, analytics datasets, temporary exports,
            caches, file shares, or vendor integrations.
          </p>

          <p className="mt-4 leading-8">
            A storage review that examines only the primary database can miss
            the places where exposure actually grows.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Data security follows the data — including every approved copy.
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
          eyebrow="Storage Types"
          title="Different Storage Services Create Different Exposure Questions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {storageTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.type}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>

                <div className="mt-4 rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                    Architecture questions
                  </p>
                  <p className="mt-2 text-sm leading-7 text-blue-50">
                    {item.architectureQuestions}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Common risk
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.commonRisk}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Exposure States"
          title="Public and Private Are Not the Only Useful Categories"
        >
          <div className="grid gap-5">
            {exposureStates.map((item) => (
              <article
                key={item.state}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.state}</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Evidence that should support the state
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.evidence}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Storage Architecture Principles"
          title="Eight Principles for Keeping Cloud Data Understandable"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {storagePrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Review: {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Cloud Storage and Data Exposure Terms"
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
          eyebrow="Fictional Storage Register"
          title="Seven Northbridge Storage Locations"
        >
          <div className="grid gap-5">
            {storageRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.type}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.name}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Purpose", item.purpose],
                    ["Classification", item.classification],
                    ["Access", item.access],
                    ["Exposure", item.exposure],
                    ["Retention", item.retention],
                    ["Encryption", item.encryption],
                    ["Logging", item.logging],
                    ["Owner", item.owner],
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

        <Section
          eyebrow="Data Copies"
          title="Secondary Copies Extend the Security Boundary"
        >
          <p className="leading-8">
            Copies are not automatically wrong. Backups, reports, analytics,
            exports, and replicas can be necessary. The architecture problem is
            losing track of them.
          </p>

          <div className="mt-6 grid gap-5">
            {copyRelationships.map((item) => (
              <article
                key={`${item.source}-${item.copy}`}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-50">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Source
                    </p>
                    <p className="mt-2 font-black">{item.source}</p>
                  </div>

                  <div className="text-center text-sm font-black uppercase tracking-[0.15em] text-purple-200">
                    {item.reason}
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Copy
                    </p>
                    <p className="mt-2 font-black">{item.copy}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Security effect: {item.securityEffect}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Cloud Storage Dashboard"
          subtitle="Fictional storage exposure and lifecycle metrics"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Legacy File Share Has Unresolved Ownership and Retention"
          severity="High"
          time="10:23"
          source="Fictional Storage Governance Review"
          details="STO-06 has broad inherited access, mixed or unclear classification, no confirmed owner, and no current retention rule."
          recommendation="Keep STO-06 Blocked until purpose, ownership, classification, permission scope, lifecycle, and retirement options are reviewed."
        />

        <FakeLogPanel
          title="Fictional Storage Architecture Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Team File Share"
          question="What is the strongest conclusion about STO-06?"
          evidence={[
            "The share is not publicly exposed.",
            "A large inherited internal group can access it.",
            "No accountable owner is documented.",
            "Retention is Unknown.",
            "Data classification is mixed or unclear.",
          ]}
          options={[
            "The share is safe because it is internal.",
            "The share should remain Blocked or Unknown until ownership, classification, permission scope, purpose, and retention are resolved.",
            "The share should be made public.",
            "The share needs no review because it is old.",
          ]}
          bestAnswer={1}
          explanation="Private or internal exposure does not prove least privilege or good governance. Ownership and lifecycle still matter."
        />

        <Section
          eyebrow="Storage Anti-Patterns"
          title="Eight Ways Data Exposure Quietly Grows"
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

        <Section
          eyebrow="Encryption Responsibilities"
          title="Encryption Helps, but Architecture Still Determines Who Can Reach the Data"
        >
          <p className="leading-8">
            Cloud services commonly provide encryption capabilities. The
            provider may operate the underlying encryption service, but the
            organization still owns important decisions about data
            classification, identity access, key-governance expectations,
            service configuration, and evidence.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Encryption can help protect",
                items: [
                  "Data stored on provider-managed media",
                  "Data moving between approved services when protected transport is used",
                  "Backup and replica storage",
                  "Managed service storage layers",
                ],
              },
              {
                title: "Encryption does not automatically solve",
                items: [
                  "Overbroad identity permissions",
                  "Intentional or accidental public exposure",
                  "Unnecessary secondary copies",
                  "Weak retention",
                  "Unowned storage",
                  "Missing access logging",
                  "Unsafe application authorization",
                ],
              },
            ].map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{group.title}</h3>
                <div className="mt-4 grid gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-blue-300/20 bg-slate-950/20 p-3 text-sm leading-7 text-blue-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Internal Does Not Mean Least Privilege"
          scenario="A legacy file share is internal only, but a large inherited group can access it. No owner is documented, retention is Unknown, and the data classification is mixed."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Intentional Public Content"
          scenario="Northbridge stores approved public help documents and static assets in a public-read object-storage location. The content is classified Public and publishing is controlled."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Cloud Storage Exposure Review"
        >
          <p className="leading-8">
            Use fictional storage services, datasets, identities, and evidence
            only. Do not sign in to or inspect any real cloud storage service.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least ten fictional storage records.",
              "Include object storage, a managed database, backup storage, analytics, temporary exports, and file-style storage.",
              "Give each storage location a stable ID.",
              "State the business purpose.",
              "Classify the data.",
              "List approved human and workload access.",
              "Record public, private, shared, service-only, privileged, or Unknown exposure state.",
              "Record retention and deletion expectations.",
              "Record encryption responsibility at a conceptual level.",
              "Record logging and evidence coverage.",
              "Assign an accountable owner.",
              "Link secondary copies back to their source data.",
              "Identify at least two overexposure or lifecycle gaps.",
              "Identify at least one unnecessary or stale copy.",
              "Add a remediation or retirement decision.",
              "Add change triggers for new identities, public exposure, new copies, retention changes, integrations, or service-model changes.",
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
              This is an architecture and governance exercise. Use fictional
              storage metadata only — no real buckets, databases, shares,
              credentials, account IDs, or private data.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Temporary Export Storage"
          question="What is the strongest conclusion about STO-05?"
          evidence={[
            "Exports are stored for approved user-requested workflows.",
            "The location is private.",
            "Access is limited to the export workload and requesting user.",
            "Objects expire automatically after 24 hours.",
            "Object access and deletion are logged.",
          ]}
          options={[
            "The temporary export location is reasonably bounded because purpose, access, exposure, expiration, and logging support the design.",
            "The export location should be public because the files are temporary.",
            "Temporary data does not need classification.",
            "Deletion evidence is unnecessary when storage is encrypted.",
          ]}
          bestAnswer={0}
          explanation="Temporary copies still need purpose, bounded access, short retention, and evidence. STO-05 demonstrates those controls."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Trace One Sensitive Record Through the Cloud Architecture"
        >
          <p className="leading-8">
            Choose one fictional sensitive record from the Student Support
            Database and trace every approved place it may appear during its
            lifecycle.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Primary database",
              "Application cache if applicable",
              "Generated report",
              "Temporary export",
              "Analytics dataset",
              "Backup repository",
              "Recovery restoration environment",
              "Audit or monitoring metadata",
              "External integration field set",
              "Retention rule for each copy",
              "Identity boundary for each copy",
              "Final deletion or retirement condition",
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
            The strongest answer shows that classification and ownership follow
            the data into every meaningful copy instead of stopping at the
            primary database.
          </p>
        </Section>

        <DefenderChecklist
          title="A12.3 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A12.3 Mini Quiz: Storage Security and Data Exposure"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Cloud Storage Exposure Review"
          prompt="Create the third artifact for your A12 Cloud Security Architecture Assessment: a fictional Cloud Storage Exposure Review with at least ten storage records. Include storage ID, type, business purpose, data classification, approved human/workload access, exposure state, retention, encryption responsibility, logging, owner, evidence status, secondary copies, risk concern, next action, and change trigger."
          tips={[
            "Include at least one database, object store, analytics store, backup repository, file share, and temporary export location.",
            "Include one intentionally public storage location with Public-classified content.",
            "Include one unowned or stale storage location and keep its status Blocked or Unknown.",
            "Trace secondary copies so reports, backups, analytics, and exports remain visible.",
            "Do not treat encryption as proof that access and lifecycle are safe.",
            "Use provider-neutral fictional names and synthetic data only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A12.4?"
        >
          <p className="leading-8">
            A12.4 moves into Cloud Network Boundaries. Before continuing, make
            sure you can explain how storage exposure depends not only on
            identity but also on which network and service paths can reach the
            data.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain the difference between public, private, shared, service-only, privileged, and Unknown exposure.",
              "I can evaluate storage access using identity, purpose, classification, lifecycle, and evidence.",
              "I can explain why backups and secondary copies remain part of the protected data boundary.",
              "I can identify why encryption alone does not prove storage safety.",
              "I can trace data into reports, analytics, backups, and temporary exports.",
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
          title="How to Make the Storage Review Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Lead with business purpose",
                detail:
                  "The reason the storage exists should be visible before the technical settings.",
              },
              {
                title: "Use clear exposure states",
                detail:
                  "Separate public, private, shared, service-only, privileged, and Unknown access instead of using vague labels.",
              },
              {
                title: "Show identity connections",
                detail:
                  "Link storage access to the human and workload identities from A12.2.",
              },
              {
                title: "Show lifecycle",
                detail:
                  "Include retention, expiration, archive, backup, deletion, and retirement expectations.",
              },
              {
                title: "Show copy relationships",
                detail:
                  "Trace backups, reports, exports, analytics, and other derived data back to their source.",
              },
              {
                title: "Show evidence quality",
                detail:
                  "Mark stale access reviews, missing retention, weak logging, and Unknown ownership clearly.",
              },
              {
                title: "Show explicit public decisions",
                detail:
                  "Public storage should visibly connect to Public-classified content and controlled publishing.",
              },
              {
                title: "Connect forward",
                detail:
                  "Make the review reusable in A12.4 network boundaries, A12.5 monitoring, A12.7 resilience, and A12.9 governance.",
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
            Storage architecture review does not require real storage access
          </h2>
          <p className="mt-3 leading-7">
            Do not use real cloud credentials, storage consoles, database
            endpoints, bucket names, account IDs, private logs, files, exports,
            or production data. All storage and evidence in this lesson are
            fictional and defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A12.3 Storage Security and Data Exposure Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a storage architecture model for purpose,
            classification, access, exposure, encryption responsibilities,
            lifecycle, copies, logging, ownership, and evidence. Next, A12.4
            focuses on Cloud Network Boundaries.
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