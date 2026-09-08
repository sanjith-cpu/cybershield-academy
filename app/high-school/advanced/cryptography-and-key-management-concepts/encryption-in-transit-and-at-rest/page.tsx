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
const previousLesson = `${modulePath}/common-crypto-design-mistakes`;
const nextLesson = `${modulePath}/crypto-policy-and-compliance-concepts`;

const objectives = [
  "Explain the difference between encryption in transit and encryption at rest using data state, trust boundary, key ownership, and architecture purpose.",
  "Evaluate fictional transport and storage protections across browsers, APIs, service-to-service traffic, databases, object storage, local disks, backups, exports, and recovery environments.",
  "Identify gaps where one data state is protected but another is not, or where encryption exists without appropriate identity, authorization, lifecycle, or recovery design.",
  "Analyze protection coverage using data classification, endpoint trust, storage location, key ownership, certificate lifecycle, recovery evidence, and monitoring.",
  "Build a Data Protection Coverage Matrix that becomes the eighth artifact in the A14 Key-Management Design Recommendation.",
];

const dataStates = [
  {
    state: "In transit",
    definition:
      "Data moving between users, applications, services, networks, storage endpoints, or external partners.",
    commonExamples:
      "Browser sessions, API calls, service-to-service messages, partner transfers, backup replication, administrative connections.",
    primaryGoal:
      "Protect confidentiality and endpoint/service trust while data crosses a communication boundary.",
    reviewQuestion:
      "Which endpoints communicate, which identity relationship is trusted, and who owns the certificate or transport policy?",
  },
  {
    state: "At rest",
    definition:
      "Data stored on disks, databases, object stores, archives, file systems, devices, snapshots, or backups.",
    commonExamples:
      "Databases, file shares, object storage, server disks, local caches, backup repositories, archived exports.",
    primaryGoal:
      "Reduce unauthorized disclosure from storage media or storage-layer access while supporting governed recovery.",
    reviewQuestion:
      "Which storage location contains the data, what key protects it, who owns that key, and how is restoration handled?",
  },
  {
    state: "In use",
    definition:
      "Data actively processed by an authorized application, service, or user.",
    commonExamples:
      "Application memory, analytics processing, report generation, business logic, document editing.",
    primaryGoal:
      "Apply identity, authorization, minimization, workload trust, and process controls once data is legitimately available for use.",
    reviewQuestion:
      "What does encryption no longer protect once an authorized process has access to the data?",
  },
  {
    state: "In backup",
    definition:
      "Data stored for restoration, continuity, archive, or disaster-recovery purposes.",
    commonExamples:
      "Database backups, snapshots, archive copies, recovery replicas.",
    primaryGoal:
      "Maintain confidentiality without making legitimate recovery impossible.",
    reviewQuestion:
      "Can current backup data still be decrypted and restored with the present key lifecycle?",
  },
  {
    state: "In export",
    definition:
      "Data packaged or moved outside its normal application boundary.",
    commonExamples:
      "Reports, CSV exports, document bundles, partner files, analytics packages.",
    primaryGoal:
      "Preserve confidentiality and integrity while keeping export authorization and recipient scope separate.",
    reviewQuestion:
      "Who approved the export, how is it protected during storage and transfer, and what happens after delivery?",
  },
  {
    state: "In replication",
    definition:
      "Data copied between systems, regions, environments, or providers for resilience or scale.",
    commonExamples:
      "Database replicas, backup replication, storage synchronization, regional copies.",
    primaryGoal:
      "Maintain equivalent protection across the replication path and destination storage boundary.",
    reviewQuestion:
      "Are both the transfer path and destination copy protected under the expected trust and key model?",
  },
];

const transitProtectionPatterns = [
  {
    pattern: "Browser to web application",
    boundary:
      "User device ↔ public application endpoint",
    trust:
      "Service certificate and client-side validation of the expected endpoint",
    crypto:
      "Protected transport with a managed certificate relationship",
    evidence:
      "Current certificate inventory, endpoint policy, trust monitoring, renewal status",
    caution:
      "Protected transport does not prove the user is authorized to access every application function.",
  },
  {
    pattern: "Service to service",
    boundary:
      "Application workload ↔ internal API or service",
    trust:
      "Workload identity and approved service trust",
    crypto:
      "Protected service communication under internal certificate or platform trust",
    evidence:
      "Service identity, certificate/trust state, environment scope, connection policy",
    caution:
      "Internal location should not automatically mean trusted or unencrypted.",
  },
  {
    pattern: "Partner integration",
    boundary:
      "Internal integration service ↔ external partner service",
    trust:
      "Bounded partner certificate or service-identity relationship",
    crypto:
      "Protected transport with explicit partner trust",
    evidence:
      "Partner sponsor, certificate validity, renewal state, relying-system policy",
    caution:
      "Partner transport trust should be limited to the intended integration.",
  },
  {
    pattern: "Administrative connection",
    boundary:
      "Administrator device ↔ management endpoint",
    trust:
      "Approved admin identity, device/context policy, protected management channel",
    crypto:
      "Encrypted administrative transport",
    evidence:
      "Admin identity, endpoint policy, management certificate/trust, monitoring",
    caution:
      "Strong transport does not justify broad administrative privilege.",
  },
  {
    pattern: "Backup replication",
    boundary:
      "Production backup platform ↔ recovery or secondary repository",
    trust:
      "Approved backup service identity and destination trust",
    crypto:
      "Protected replication channel plus protected destination storage",
    evidence:
      "Replication policy, destination identity, storage-key inventory, recovery test",
    caution:
      "Transit protection alone does not protect the replicated copy after arrival.",
  },
  {
    pattern: "Export delivery",
    boundary:
      "Approved export service ↔ approved receiving service",
    trust:
      "Recipient identity + export authorization + protected transfer",
    crypto:
      "Protected transport, optionally combined with package-level protection where required",
    evidence:
      "Export approval, recipient trust, transfer status, integrity evidence",
    caution:
      "Recipient possession of a trusted key or certificate does not replace export authorization.",
  },
];

const restProtectionPatterns = [
  {
    storage: "Database",
    protection:
      "Managed storage encryption under a governed data-encryption key",
    owner:
      "Data Platform / Application Owner",
    evidence:
      "Database encryption state, key owner, key version, access policy, restore evidence",
    caution:
      "Storage encryption does not reduce excessive logical database permissions.",
  },
  {
    storage: "Object storage",
    protection:
      "Managed encryption for stored objects with policy-aligned key scope",
    owner:
      "Storage Platform / Data Owner",
    evidence:
      "Bucket/container policy, encryption state, key metadata, data classification",
    caution:
      "Public or overly broad access remains a problem even when objects are encrypted at rest.",
  },
  {
    storage: "Server or device disk",
    protection:
      "Platform or device encryption protecting local storage media",
    owner:
      "Endpoint / Infrastructure Team",
    evidence:
      "Device compliance, encryption state, ownership, recovery policy",
    caution:
      "Disk encryption does not replace user-level authorization once the device is unlocked and operating.",
  },
  {
    storage: "Backup repository",
    protection:
      "Backup encryption with documented key lifecycle and tested restore access",
    owner:
      "Resilience Team",
    evidence:
      "Backup key inventory, retention mapping, restore test, recovery-role evidence",
    caution:
      "Encrypted backups can become unrecoverable if required key versions are retired too early.",
  },
  {
    storage: "Export staging area",
    protection:
      "Encrypted temporary storage with short retention and narrow export-service access",
    owner:
      "Analytics / Export Service Owner",
    evidence:
      "Storage policy, key scope, retention, export authorization, cleanup evidence",
    caution:
      "Temporary export copies should not become long-lived shadow data stores.",
  },
  {
    storage: "Archive",
    protection:
      "Encryption aligned with long-term retention and future key availability",
    owner:
      "Records / Data Governance Owner",
    evidence:
      "Retention policy, archive key lifecycle, recovery plan, historical-data mapping",
    caution:
      "Long retention can outlive current key owners, providers, or algorithms.",
  },
];

const coverageDimensions = [
  {
    dimension: "Data classification",
    transitQuestion:
      "Does sensitivity require protected communication for every path?",
    restQuestion:
      "Does sensitivity require storage encryption, restricted access, and retention controls?",
    gapSignal:
      "Sensitive data receives weaker protection in one state than another without justification.",
  },
  {
    dimension: "Trust boundary",
    transitQuestion:
      "Where does data cross between users, services, environments, or organizations?",
    restQuestion:
      "Which storage system or account owns the stored copy?",
    gapSignal:
      "A path or storage location is missing from architecture diagrams or inventories.",
  },
  {
    dimension: "Identity",
    transitQuestion:
      "Which endpoint or workload identity is trusted?",
    restQuestion:
      "Which identities or workloads may access stored data or the storage key?",
    gapSignal:
      "Encryption exists but identity scope is overly broad or Unknown.",
  },
  {
    dimension: "Key / certificate ownership",
    transitQuestion:
      "Who owns the certificate or transport trust relationship?",
    restQuestion:
      "Who owns the storage or data-encryption key?",
    gapSignal:
      "Protection is enabled but no one owns lifecycle and recovery.",
  },
  {
    dimension: "Lifecycle",
    transitQuestion:
      "How are certificates renewed, revoked, or replaced?",
    restQuestion:
      "How are storage keys rotated and old data/key versions managed?",
    gapSignal:
      "Current protection depends on a key or certificate with no transition plan.",
  },
  {
    dimension: "Recovery",
    transitQuestion:
      "Can service trust be restored after certificate or platform failure?",
    restQuestion:
      "Can encrypted data be restored with current and retained key versions?",
    gapSignal:
      "Recovery assumptions are undocumented or stale.",
  },
  {
    dimension: "Evidence",
    transitQuestion:
      "Is endpoint trust, certificate state, and connection policy current?",
    restQuestion:
      "Is encryption state, key inventory, and restore evidence current?",
    gapSignal:
      "One side of the protection claim relies on stale or missing evidence.",
  },
  {
    dimension: "Authorization",
    transitQuestion:
      "Is the communicating identity allowed to perform the requested action?",
    restQuestion:
      "Is the identity allowed to read or modify the stored data?",
    gapSignal:
      "Encryption is mistakenly treated as permission.",
  },
];

const endToEndExamples = [
  {
    workflow: "Student support record",
    transit:
      "Browser ↔ Student Services Portal and portal ↔ database gateway use protected transport.",
    rest:
      "Database records are encrypted under a managed storage key.",
    inUse:
      "Application authorization limits which support staff may view the record.",
    recovery:
      "Backup restore is tested with current and retained key versions.",
    gap:
      "No major gap when transport, storage, authorization, and recovery evidence are all current.",
  },
  {
    workflow: "Analytics export",
    transit:
      "Export package is transferred through an approved protected channel to the authorized recipient.",
    rest:
      "Temporary export staging uses encrypted storage with short retention.",
    inUse:
      "Export service creates the package only after policy approval.",
    recovery:
      "Failed delivery is regenerated rather than leaving permanent recovery copies.",
    gap:
      "A gap exists if recipient authorization is assumed from transport trust alone.",
  },
  {
    workflow: "Partner scheduling data",
    transit:
      "Internal integration service communicates with partner over a certificate-backed protected channel.",
    rest:
      "Inbound data is stored only in approved application storage with encryption.",
    inUse:
      "Integration workload has narrow access to the scheduling workflow.",
    recovery:
      "Partner certificate renewal and replacement are planned.",
    gap:
      "A gap exists if partner certificate expires or if inbound data lands in unprotected staging storage.",
  },
  {
    workflow: "Software release artifact",
    transit:
      "Artifact moves between repository and deployment workflow through protected service communication.",
    rest:
      "Repository storage is encrypted.",
    inUse:
      "Deployment system verifies signature and release authorization before use.",
    recovery:
      "Repository recovery retains artifact integrity and required signing verification context.",
    gap:
      "Encryption alone would not prove software publisher authenticity.",
  },
  {
    workflow: "Backup replication",
    transit:
      "Backup copies move to secondary repository through protected replication.",
    rest:
      "Destination backup sets are encrypted under governed recovery keys.",
    inUse:
      "Only backup and recovery workflows may access the repository.",
    recovery:
      "Full restore tests confirm data, keys, and trust dependencies.",
    gap:
      "Transit-only encryption is insufficient if the destination copy is unprotected.",
  },
  {
    workflow: "Legacy report archive",
    transit:
      "Legacy report transfers use inconsistent transport protection.",
    rest:
      "Archive is encrypted under a key with Unknown owner.",
    inUse:
      "Manual reporting jobs have broad access.",
    recovery:
      "Recovery dependency is unclear.",
    gap:
      "Multiple high-impact gaps make the design Blocked despite some at-rest encryption.",
  },
];

const principles = [
  {
    title: "Transit and rest are separate states",
    meaning:
      "A system can protect one state well while leaving another weak.",
    review:
      "Can the architecture prove both the communication path and the stored copy are protected where required?",
  },
  {
    title: "Encryption does not erase trust boundaries",
    meaning:
      "Protected communication still depends on the identity of endpoints and the authorization of the action.",
    review:
      "Who is on each end of the protected channel, and are they allowed to exchange the data?",
  },
  {
    title: "Storage encryption does not erase access policy",
    meaning:
      "Authorized applications can still read encrypted-at-rest data through normal service access.",
    review:
      "Are logical database, object, and application permissions appropriately narrow?",
  },
  {
    title: "Destination protection matters",
    meaning:
      "Data protected during transfer can become exposed after it lands in a weak storage location.",
    review:
      "What protection applies after arrival?",
  },
  {
    title: "Backup is another copy of the data",
    meaning:
      "Backups inherit confidentiality, retention, and key-lifecycle requirements.",
    review:
      "Do backups receive protection equivalent to their source data classification?",
  },
  {
    title: "Exports create new boundaries",
    meaning:
      "Exported data may leave the application, storage, and policy controls that originally protected it.",
    review:
      "Is the export authorized, encrypted while stored and sent, and removed when no longer needed?",
  },
  {
    title: "Recovery validates at-rest design",
    meaning:
      "A storage-encryption design is incomplete if legitimate recovery cannot access required key versions.",
    review:
      "Has restore been tested under the current key lifecycle?",
  },
  {
    title: "Evidence should cover every state",
    meaning:
      "A claim of 'encrypted' should be supported by current transport, storage, key, certificate, authorization, and recovery evidence.",
    review:
      "Which data state has the weakest evidence?",
  },
];

const vocabulary = [
  {
    term: "Encryption in transit",
    definition:
      "Cryptographic protection applied while data moves between communicating endpoints.",
  },
  {
    term: "Encryption at rest",
    definition:
      "Cryptographic protection applied to data stored on persistent media or storage services.",
  },
  {
    term: "Endpoint trust",
    definition:
      "Confidence that the communicating service or system is the expected identity.",
  },
  {
    term: "Storage boundary",
    definition:
      "The platform, service, account, device, or repository where data is stored.",
  },
  {
    term: "Data path",
    definition:
      "The sequence of systems and boundaries through which data moves.",
  },
  {
    term: "Coverage gap",
    definition:
      "A data state or trust boundary that lacks the required protection or current evidence.",
  },
  {
    term: "Protected channel",
    definition:
      "A communication path that uses cryptographic mechanisms to protect data and establish endpoint trust.",
  },
  {
    term: "Storage encryption key",
    definition:
      "A cryptographic key used to protect stored data under a defined storage or data scope.",
  },
  {
    term: "Replication",
    definition:
      "Copying data between storage systems, regions, environments, or recovery locations.",
  },
  {
    term: "Export staging",
    definition:
      "A temporary storage location used while preparing or delivering exported data.",
  },
  {
    term: "End-to-end coverage",
    definition:
      "A design view that follows data through transit, storage, use, export, replication, and recovery states.",
  },
  {
    term: "Data Protection Coverage Matrix",
    definition:
      "A structured review showing where data is protected, by what relationship, under which owner, and with what evidence.",
  },
];

const records = [
  {
    id: "DPC-01",
    workflow: "Student Services Portal",
    data: "Student support session + support records",
    classification: "Sensitive",
    transitPath: "Browser ↔ Portal ↔ Database Gateway",
    transitProtection: "Protected browser and service transport",
    transitOwner: "Application + Platform Security",
    restLocations: "Student Support Database + backup repository",
    restProtection: "Managed database and backup encryption",
    keyOwner: "Data Platform / Resilience Team",
    authorization: "Support-role policy + workload identity",
    recovery: "Current restore test",
    evidence: "Certificate inventory + key inventory + access review + restore test",
    state: "Confirmed",
    gap:
      "No current major gap; continued certificate and key lifecycle monitoring required.",
  },
  {
    id: "DPC-02",
    workflow: "Analytics Export",
    data: "Approved sensitive report package",
    classification: "Sensitive",
    transitPath: "Export Service ↔ Approved Recipient",
    transitProtection: "Protected recipient transfer",
    transitOwner: "Analytics Product Owner",
    restLocations: "Temporary export staging",
    restProtection: "Encrypted short-lived storage",
    keyOwner: "Analytics Platform",
    authorization: "Export approval + recipient policy",
    recovery: "Regenerate failed export through approved workflow",
    evidence: "Export policy + recipient trust + storage key metadata",
    state: "Confirmed",
    gap:
      "No major gap if temporary staging cleanup remains current.",
  },
  {
    id: "DPC-03",
    workflow: "Partner Scheduling Integration",
    data: "Scheduling messages",
    classification: "Internal / partner-shared",
    transitPath: "Northbridge Integration ↔ Partner Service",
    transitProtection: "Certificate-backed protected transport",
    transitOwner: "Integration Owner",
    restLocations: "Integration queue + application database",
    restProtection: "Managed storage encryption",
    keyOwner: "Integration Platform",
    authorization: "Partner-specific integration policy",
    recovery: "Certificate replacement window documented",
    evidence: "Partner certificate + sponsor + queue/storage policy",
    state: "Conditional",
    gap:
      "Partner certificate renewal is due in 45 days.",
  },
  {
    id: "DPC-04",
    workflow: "Backup Replication",
    data: "Encrypted production backup sets",
    classification: "Sensitive",
    transitPath: "Primary Backup Platform ↔ Recovery Repository",
    transitProtection: "Protected replication channel",
    transitOwner: "Resilience Team",
    restLocations: "Primary + recovery backup repositories",
    restProtection: "Encrypted backup storage",
    keyOwner: "Resilience Team",
    authorization: "Backup/recovery workloads only",
    recovery: "Last full restore test current",
    evidence: "Replication policy + key inventory + restore test",
    state: "Confirmed",
    gap:
      "Retained key versions must remain mapped to retained backup sets.",
  },
  {
    id: "DPC-05",
    workflow: "Legacy Reporting Archive",
    data: "Historical reports",
    classification: "Internal sensitive",
    transitPath: "Legacy Report Server ↔ Archive Host",
    transitProtection: "Inconsistent; some transfers use old unverified path",
    transitOwner: "Unknown",
    restLocations: "Legacy archive hosts",
    restProtection: "Encrypted under legacy shared key",
    keyOwner: "Unknown",
    authorization: "Broad legacy job access",
    recovery: "Unclear",
    evidence: "Partial network notes + stale key inventory",
    state: "Blocked",
    gap:
      "Transit protection, key ownership, authorization, and recovery are all insufficiently governed.",
  },
  {
    id: "DPC-06",
    workflow: "Software Release Pipeline",
    data: "Release artifacts",
    classification: "Integrity-critical",
    transitPath: "Repository ↔ Deployment Pipeline",
    transitProtection: "Protected service communication",
    transitOwner: "Release Engineering",
    restLocations: "Artifact repository",
    restProtection: "Managed repository encryption",
    keyOwner: "Platform Security",
    authorization: "Release approval + signed-artifact verification",
    recovery: "Repository recovery includes integrity metadata",
    evidence: "Repository policy + signer trust + deployment verification",
    state: "Confirmed",
    gap:
      "Confidentiality is not the only goal; artifact integrity and publisher authenticity remain essential.",
  },
  {
    id: "DPC-07",
    workflow: "Temporary Data Science Workspace",
    data: "Derived analytics dataset",
    classification: "Sensitive",
    transitPath: "Approved Data Store ↔ Temporary Workspace",
    transitProtection: "Protected service transport",
    transitOwner: "Data Science Platform",
    restLocations: "Temporary workspace volume",
    restProtection: "Encryption enabled, but retention and key scope under review",
    keyOwner: "Data Science Platform",
    authorization: "Project-scoped workload/user access",
    recovery: "No long-term recovery required; workspace designed to expire",
    evidence: "Workspace policy + project owner + storage encryption status",
    state: "Conditional",
    gap:
      "Retention and automatic destruction evidence must confirm that temporary copies do not persist beyond project need.",
  },
];

const dashboardMetrics = [
  {
    label: "Data flows reviewed",
    value: "7",
    note: "Portal, export, partner, backup, legacy archive, release, and temporary analytics workflows",
  },
  {
    label: "Confirmed",
    value: "4",
    note: "Portal, export, backup, and release flows have current transit/rest coverage",
  },
  {
    label: "Conditional",
    value: "2",
    note: "Partner renewal and temporary workspace retention need follow-up",
  },
  {
    label: "Blocked",
    value: "1",
    note: "Legacy reporting has transit, ownership, authorization, and recovery gaps",
  },
];

const logs = [
  "[08:09] DPC-01 portal transit=PROTECTED rest=PROTECTED recovery=CURRENT state=CONFIRMED",
  "[08:33] DPC-02 export transit=PROTECTED staging=ENCRYPTED retention=SHORT state=CONFIRMED",
  "[08:57] DPC-03 partner transit=PROTECTED cert_renewal=45d rest=PROTECTED state=CONDITIONAL",
  "[09:21] DPC-04 backups replication=PROTECTED rest=ENCRYPTED restore=PASS state=CONFIRMED",
  "[09:45] DPC-05 legacy transit=INCONSISTENT key_owner=UNKNOWN recovery=UNKNOWN state=BLOCKED",
  "[10:09] DPC-06 release transit=PROTECTED repo=ENCRYPTED signature=VERIFIED state=CONFIRMED",
  "[10:33] DPC-07 workspace transit=PROTECTED rest=ENCRYPTED retention=REVIEW state=CONDITIONAL",
];

const antiPatterns = [
  {
    title: "Transit protected, destination exposed",
    problem:
      "Data moves through an encrypted channel but lands in storage with weak protection or broad access.",
    better:
      "Review transport and destination storage as separate control points.",
  },
  {
    title: "At-rest encryption used as permission",
    problem:
      "Teams assume encrypted databases are safe even with overly broad logical access.",
    better:
      "Keep authorization and encryption as separate architecture controls.",
  },
  {
    title: "Internal traffic left unprotected by default",
    problem:
      "Service-to-service paths are trusted merely because they are inside the organization.",
    better:
      "Use workload identity and protected transport where sensitivity and trust boundaries require it.",
  },
  {
    title: "Export copies become permanent",
    problem:
      "Temporary report staging grows into an unmanaged shadow repository.",
    better:
      "Use short retention, encrypted staging, cleanup evidence, and data-owner policy.",
  },
  {
    title: "Backup replication protects only the path",
    problem:
      "The copy arrives securely but is stored unencrypted at the recovery location.",
    better:
      "Protect both replication and destination storage.",
  },
  {
    title: "Certificate trust without authorization",
    problem:
      "A trusted endpoint is allowed to receive any data simply because its certificate is valid.",
    better:
      "Require separate business authorization for the requested data transfer.",
  },
  {
    title: "Encrypted storage with unowned key",
    problem:
      "At-rest protection exists, but nobody can explain key ownership, rotation, or recovery.",
    better:
      "Treat key lifecycle as part of the storage design.",
  },
  {
    title: "Data-state inventory stops at production",
    problem:
      "Backups, exports, replicas, archives, and temporary workspaces are omitted.",
    better:
      "Follow the data through every meaningful copy and state.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep DPC-05 Blocked until transit protection, key ownership, logical access, recovery, and archive dependencies are all governed.",
    outcome:
      "Best. Some at-rest encryption does not compensate for multiple unresolved high-impact gaps.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark it Confirmed because the archive files are encrypted.",
    outcome:
      "Risky. Encryption at rest alone does not address weak transit, Unknown ownership, broad access, or recovery.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Ignore transit because the traffic is internal.",
    outcome:
      "Risky. Internal traffic still crosses trust boundaries and may require protection.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep DPC-07 Conditional until retention and automatic-destruction evidence prove that encrypted temporary copies expire as designed.",
    outcome:
      "Best. Encryption protects the copy while it exists, but lifecycle and retention still matter.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark it Confirmed because the workspace volume is encrypted.",
    outcome:
      "Caution. At-rest encryption is strong, but unmanaged retention can still violate data-handling requirements.",
    tone: "caution" as const,
  },
  {
    label: "Choice C",
    response:
      "Make the temporary workspace permanent so recovery is easier.",
    outcome:
      "Risky. Permanent retention expands exposure and conflicts with the temporary design purpose.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the main difference between encryption in transit and encryption at rest?",
    choices: [
      "Transit protects data while moving; at-rest protects data while stored.",
      "Transit is only for public networks and at-rest is only for laptops.",
      "They are identical controls.",
      "At-rest encryption replaces authorization.",
    ],
    answer: 0,
    explanation:
      "The distinction is based on the state and location of the data.",
  },
  {
    question:
      "What is wrong with protecting a transfer but leaving the destination storage unencrypted?",
    choices: [
      "The data may be protected while moving but exposed after arrival.",
      "Nothing; transit encryption automatically protects stored copies.",
      "The endpoint certificate becomes invalid.",
      "The transfer becomes a signature.",
    ],
    answer: 0,
    explanation:
      "Transit and rest protections must be reviewed separately.",
  },
  {
    question:
      "Why does database encryption not replace database authorization?",
    choices: [
      "Authorized applications and users may still read data through normal database access.",
      "Because encrypted databases cannot have permissions.",
      "Because at-rest encryption is only for backups.",
      "Because authorization is a hashing function.",
    ],
    answer: 0,
    explanation:
      "Encryption protects the storage layer, while authorization controls logical access.",
  },
  {
    question:
      "What is strongest for encrypted backups?",
    choices: [
      "Protect the backup at rest, protect replication in transit, and test recovery with current key versions.",
      "Encrypt only during replication.",
      "Delete old keys immediately after rotation.",
      "Give every administrator permanent recovery-key access.",
    ],
    answer: 0,
    explanation:
      "Backup confidentiality and recoverability depend on both data states and key lifecycle.",
  },
  {
    question:
      "Why should temporary export storage have short retention?",
    choices: [
      "To reduce long-lived duplicate copies outside the primary application boundary.",
      "Because encrypted data cannot be deleted.",
      "Because retention replaces authorization.",
      "Because temporary storage never needs encryption.",
    ],
    answer: 0,
    explanation:
      "Exports create new data copies and therefore new lifecycle and exposure risk.",
  },
  {
    question:
      "What is strongest for internal service-to-service traffic?",
    choices: [
      "Use protected transport and workload trust where the sensitivity and trust boundary require it.",
      "Assume all internal traffic is trusted.",
      "Use one shared certificate for all services.",
      "Skip identity because encryption is enabled.",
    ],
    answer: 0,
    explanation:
      "Internal location does not eliminate the need for service identity and protected transport.",
  },
  {
    question:
      "What is the best way to evaluate end-to-end data protection?",
    choices: [
      "Follow data through transit, storage, use, backup, export, replication, recovery, authorization, and lifecycle evidence.",
      "Check only whether the database is encrypted.",
      "Check only whether a certificate exists.",
      "Ignore temporary and legacy copies.",
    ],
    answer: 0,
    explanation:
      "A mature review follows the data across all meaningful states and trust boundaries.",
  },
];

const checklistItems = [
  "Sensitive data paths are mapped.",
  "Sensitive storage locations are mapped.",
  "Encryption in transit is reviewed separately from encryption at rest.",
  "Browser-to-application trust is current.",
  "Service-to-service trust is current.",
  "Partner transport trust is explicitly scoped.",
  "Storage encryption keys have owners.",
  "Database authorization remains separate from encryption.",
  "Object storage access remains separate from encryption.",
  "Backup replication is protected.",
  "Backup destination storage is protected.",
  "Recovery is tested with current key versions.",
  "Export staging uses narrow access and short retention.",
  "Export authorization remains separate from transport trust.",
  "Temporary workspaces have lifecycle and cleanup evidence.",
  "Replication destinations receive equivalent protection.",
  "Legacy traffic and archives remain visible in coverage reviews.",
  "Certificate and key lifecycle evidence is current.",
  "Every coverage gap has a state and next action.",
  "No lesson activity requires interception, decryption, certificate bypass, key extraction, or access to real protected data.",
];

const takeaways = [
  "Encryption in transit protects data while it moves between endpoints.",
  "Encryption at rest protects data while it is stored.",
  "One data state can be protected while another remains weak.",
  "Transport encryption depends on endpoint identity and trust.",
  "At-rest encryption depends on storage scope, key ownership, lifecycle, and recovery.",
  "Encryption does not replace authorization in either state.",
  "Backups, exports, replicas, and temporary workspaces are additional copies that need coverage.",
  "Recovery testing is part of validating at-rest encryption.",
  "End-to-end protection follows the data across states, owners, keys, certificates, and evidence.",
  "The Data Protection Coverage Matrix prepares you for A14.9 Crypto Policy and Compliance Concepts.",
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

export default function EncryptionInTransitAndAtRestPage() {
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
              A14.8
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cryptography and Key Management Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A14.8
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Encryption in Transit and At Rest
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Data does not stay in one place. It moves between users, services,
            partners, storage systems, backups, and recovery environments.
            Strong protection follows the data and checks whether each state has
            the right trust, key, authorization, and lifecycle controls.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson stays conceptual and defensive. It does not teach
            traffic interception, decryption, certificate bypass, key
            extraction, or access to real protected data.
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
          lessonTitle="Encryption in Transit and At Rest"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A14.8 Entry Readiness"
          items={[
            "I can explain encryption, key ownership, certificates, and trust scope.",
            "I understand that cryptography and authorization are separate controls.",
            "I can identify common crypto design mistakes from A14.7.",
            "I will use only fictional data flows, storage locations, keys, certificates, and evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Protected While Moving Does Not Mean Protected After Arrival"
        >
          <p className="leading-8">
            A sensitive export might travel over a protected connection and then
            sit for weeks in an ungoverned staging folder. A backup may be
            encrypted in storage but copied across an unprotected path. A
            database may use strong at-rest encryption while logical access is
            far too broad. End-to-end design looks at the entire lifecycle of
            the data.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Data protection is strongest when transit, storage, identity, authorization, key lifecycle, and recovery are reviewed together.
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
          eyebrow="Data States"
          title="Follow the Data, Not Just the Application"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {dataStates.map((item) => (
              <article
                key={item.state}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.state}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.definition}
                </p>

                <div className="mt-4 rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                    Examples
                  </p>
                  <p className="mt-2 text-sm leading-7 text-blue-50">
                    {item.commonExamples}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Primary goal
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.primaryGoal}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                    Review question
                  </p>
                  <p className="mt-2 text-sm leading-7 text-cyan-50">
                    {item.reviewQuestion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Transit Protection"
          title="Common Communication Boundaries"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {transitProtectionPatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.pattern}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Boundary: {item.boundary}
                </p>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Trust: {item.trust}
                </p>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Protection: {item.crypto}
                </p>
                <p className="mt-2 text-sm leading-7 text-white">
                  Evidence: {item.evidence}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="At-Rest Protection"
          title="Common Storage Boundaries"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {restProtectionPatterns.map((item) => (
              <article
                key={item.storage}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.storage}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Protection: {item.protection}
                </p>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Owner: {item.owner}
                </p>
                <p className="mt-2 text-sm leading-7 text-white">
                  Evidence: {item.evidence}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Coverage Dimensions"
          title="Eight Questions for End-to-End Protection"
        >
          <div className="grid gap-5">
            {coverageDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {item.dimension}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Transit
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.transitQuestion}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      At rest
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.restQuestion}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Gap signal
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.gapSignal}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="End-to-End Examples"
          title="How One Workflow Spans Multiple Protection States"
        >
          <div className="grid gap-6">
            {endToEndExamples.map((item) => (
              <article
                key={item.workflow}
                className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6"
              >
                <h3 className="text-xl font-black text-emerald-50">
                  {item.workflow}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Transit
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.transit}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      At rest
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.rest}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      In use
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.inUse}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Recovery
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.recovery}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Coverage observation
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.gap}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Principles"
          title="Eight Principles for Transit and At-Rest Coverage"
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
          title="Transit and At-Rest Protection Terms"
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
          eyebrow="Fictional Coverage Register"
          title="Seven Northbridge Data Protection Records"
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
                    {item.state}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.workflow}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Data", item.data],
                    ["Classification", item.classification],
                    ["Transit path", item.transitPath],
                    ["Transit protection", item.transitProtection],
                    ["Transit owner", item.transitOwner],
                    ["Rest locations", item.restLocations],
                    ["Rest protection", item.restProtection],
                    ["Key owner", item.keyOwner],
                    ["Authorization", item.authorization],
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
                    Coverage gap / condition
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.gap}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Data Protection Coverage Dashboard"
          subtitle="Fictional transit, at-rest, authorization, recovery, and lifecycle summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Legacy Reporting Data Has Multiple Protection Gaps"
          severity="High"
          time="09:45"
          source="Fictional Data Protection Coverage Review"
          details="DPC-05 uses inconsistent transport protection, a legacy at-rest key with Unknown owner, broad job access, and an unclear recovery path."
          recommendation="Keep the workflow Blocked until transport, key ownership, logical access, archive dependencies, and recovery are governed together."
        />

        <Section
          eyebrow="Encryption vs. Authorization"
          title="Protected Data Can Still Be Available to the Wrong Identity"
        >
          <p className="leading-8">
            Encryption changes who can access data through a cryptographic
            boundary, but application and storage permissions still decide which
            authenticated identities may legitimately read or modify the data.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <h3 className="font-black text-cyan-50">
                Cryptographic protection
              </h3>
              <p className="mt-2 text-sm leading-7 text-cyan-100">
                Protects the communication path or stored representation using
                keys, certificates, and trust relationships.
              </p>
            </article>

            <article className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5">
              <h3 className="font-black text-purple-50">
                Authorization
              </h3>
              <p className="mt-2 text-sm leading-7 text-purple-100">
                Decides which user, service, or workload is permitted to access
                the data after identity and trust have been established.
              </p>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Data Protection Coverage Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Archive Coverage"
          question="What is the strongest conclusion for DPC-05?"
          evidence={[
            "Some archive data is encrypted at rest.",
            "Transport between legacy systems is inconsistent.",
            "The encryption-key owner is Unknown.",
            "Legacy job access is broad.",
            "Recovery dependency is unclear.",
          ]}
          options={[
            "Confirmed because at-rest encryption exists.",
            "Blocked until transit, key ownership, authorization, and recovery gaps are governed.",
            "Safe because the systems are internal.",
            "Ignore recovery because the archive is historical.",
          ]}
          bestAnswer={1}
          explanation="End-to-end data protection requires more than one protected state. Multiple unresolved gaps prevent approval."
        />

        <Section
          eyebrow="Common Coverage Mistakes"
          title="Eight Ways Data Protection Becomes Incomplete"
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
          title="Scenario Decision Lab 1 — Some Encryption, Multiple Gaps"
          scenario="A legacy reporting archive uses at-rest encryption, but internal transfer protection is inconsistent, key ownership is Unknown, access is broad, and recovery has not been validated."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Temporary Analytics Workspace"
          scenario="A temporary analytics workspace uses protected transport and encrypted storage, but the team has not yet proven that temporary copies are automatically destroyed at the end of the project."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Data Protection Coverage Matrix"
        >
          <p className="leading-8">
            Use fictional data flows, endpoints, storage systems, certificates,
            key IDs, owners, classifications, and synthetic evidence only. Do
            not inspect or interact with real protected traffic or storage.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twenty fictional data-protection records.",
              "Give every record a stable DPC ID.",
              "Record the workflow or data flow.",
              "Record the data classification.",
              "Record all transit paths.",
              "Record transit protection.",
              "Assign transit trust/certificate owner.",
              "Record all storage locations.",
              "Record at-rest protection.",
              "Assign storage/key owner.",
              "Record authorization dependency.",
              "Record backup or replication copies.",
              "Record export or temporary copies.",
              "Record recovery dependency.",
              "Record certificate/key lifecycle state.",
              "Record evidence source and freshness.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, Accepted Risk, or Not Applicable.",
              "Record the weakest coverage point.",
              "Record the next remediation step.",
              "Include at least four browser/API transit examples.",
              "Include at least four service-to-service examples.",
              "Include at least four database/object-storage examples.",
              "Include at least three backup/replication examples.",
              "Include at least three export/temporary-workspace examples.",
              "Include at least two partner/integration examples.",
              "Include at least one legacy workflow with both transit and rest gaps.",
              "Add change triggers for data classification, endpoint, service identity, certificate, key version, storage location, retention, recovery, and provider changes.",
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
              Do not capture traffic, inspect real encrypted data, bypass
              certificate validation, access protected storage, recover real
              keys, or test live endpoints. This is a defensive architecture
              mapping exercise only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Temporary Workspace Retention"
          question="What is the strongest state for DPC-07?"
          evidence={[
            "Transport to the workspace is protected.",
            "The workspace storage volume is encrypted.",
            "Access is project-scoped.",
            "The workspace is intended to be temporary.",
            "Automatic destruction and retention evidence are still under review.",
          ]}
          options={[
            "Confirmed because encryption is enabled.",
            "Conditional until lifecycle evidence proves temporary data is removed as designed.",
            "Blocked permanently because temporary storage is never allowed.",
            "Make the workspace permanent to simplify operations.",
          ]}
          bestAnswer={1}
          explanation="Encryption protects the stored copy, but retention and lifecycle remain part of data-protection coverage."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Redesign a Fictional Data Platform With Uneven Protection Coverage"
        >
          <p className="leading-8">
            A fictional organization has strong database encryption and public
            web transport, but internal APIs, temporary workspaces, backup
            replication, export staging, and old archives follow inconsistent
            rules. Redesign the protection model conceptually.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Data classification",
              "Transit inventory",
              "Storage inventory",
              "Endpoint identity",
              "Certificate ownership",
              "Storage-key ownership",
              "Service-to-service trust",
              "Partner trust",
              "Authorization separation",
              "Backup replication",
              "Recovery testing",
              "Export staging",
              "Temporary data retention",
              "Legacy archive handling",
              "Evidence freshness",
              "Coverage-gap states",
              "Change triggers",
              "Residual risk",
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
            A mature data-protection design should make it easy to trace a
            sensitive record from creation through communication, storage,
            processing, export, backup, replication, recovery, retention, and
            eventual deletion.
          </p>
        </Section>

        <DefenderChecklist
          title="A14.8 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A14.8 Mini Quiz: Encryption in Transit and At Rest"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Data Protection Coverage Matrix"
          prompt="Create the eighth artifact for your A14 Key-Management Design Recommendation: a fictional Data Protection Coverage Matrix with at least twenty records. Include DPC ID, workflow, data classification, transit path, transit protection, transit owner, storage locations, at-rest protection, key owner, authorization dependency, backup/replication copies, export/temporary copies, recovery, certificate/key lifecycle, evidence, freshness, status, weakest coverage point, remediation, residual risk, and change trigger."
          tips={[
            "Follow the data across every meaningful state.",
            "Keep transport and storage protection separate.",
            "Keep authorization separate from encryption.",
            "Include backups, exports, replicas, and temporary workspaces.",
            "Keep one legacy multi-gap workflow Blocked.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A14.9?"
        >
          <p className="leading-8">
            A14.9 moves into Crypto Policy and Compliance Concepts. Before
            continuing, make sure you can turn technical protection coverage
            into a governance statement: what policy requires, who owns it, what
            evidence proves it, and how exceptions are handled.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish data in transit and data at rest.",
              "I can identify endpoint trust and storage-key ownership.",
              "I can explain why encryption and authorization remain separate.",
              "I can follow data through backups, exports, replicas, and temporary storage.",
              "I can identify the weakest point in an end-to-end data-protection design.",
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
          title="How to Make the Data Protection Coverage Matrix Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Follow one data object end to end",
                detail:
                  "Show where it moves, where it lands, where it is copied, and how it is recovered.",
              },
              {
                title: "Separate transit and rest",
                detail:
                  "Do not summarize both with one field called 'encrypted.'",
              },
              {
                title: "Show trust and key owners",
                detail:
                  "Certificates, service identities, storage keys, and recovery keys may have different owners.",
              },
              {
                title: "Show authorization",
                detail:
                  "Record who may legitimately access the data after cryptographic trust is established.",
              },
              {
                title: "Include secondary copies",
                detail:
                  "Backups, replicas, exports, archives, and temporary workspaces often create the biggest coverage gaps.",
              },
              {
                title: "Show lifecycle",
                detail:
                  "Certificate renewal, key rotation, retention, recovery, and deletion should all appear.",
              },
              {
                title: "Show the weakest point",
                detail:
                  "A coverage matrix is most useful when it reveals the least-governed data state.",
              },
              {
                title: "Connect forward",
                detail:
                  "A14.9 will turn these technical coverage decisions into policy, standards, exceptions, evidence, and compliance governance.",
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
            Data-protection learning does not require intercepting or decrypting real traffic
          </h2>
          <p className="mt-3 leading-7">
            Do not capture real traffic, inspect protected data, bypass
            certificate validation, extract keys, access encrypted storage, or
            test real endpoints without authorization. All data flows, storage
            systems, certificates, key IDs, and evidence in this lesson are
            fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A14.8 Encryption in Transit and At Rest Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have an end-to-end model for protecting data in transit, at
            rest, in backup, in export, in replication, and in temporary
            storage, while keeping identity, authorization, key lifecycle, and
            recovery visible. Next, A14.9 focuses on Crypto Policy and
            Compliance Concepts.
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