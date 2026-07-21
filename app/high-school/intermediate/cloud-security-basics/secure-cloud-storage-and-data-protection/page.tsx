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

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/cloud-security-basics`;
const previousLesson = `${modulePath}/cloud-identities-roles-and-least-privilege`;
const nextLesson = `${modulePath}/cloud-networking-and-service-exposure`;

const objectives = [
  "Explain fictional cloud storage, database, backup, versioning, retention, lifecycle, encryption, key-management, sharing, recovery, and data-classification concepts.",
  "Evaluate fictional storage access by comparing identity permissions, resource policies, public-access controls, network paths, service settings, data sensitivity, and business need.",
  "Distinguish encryption at rest, encryption in transit, key ownership, key access, rotation, recovery, and logging concepts without accessing any real key or cloud account.",
  "Use fictional audit, configuration, identity, storage, network, backup, application, and business evidence to write bounded findings with alternatives, confidence, and limitations.",
  "Create a portfolio-safe fictional cloud data-protection package with storage maps, classification, access review, encryption decisions, recovery validation, lifecycle controls, and owner actions."
];
const vocabulary = [
  [
    "Object storage",
    "A fictional cloud service that stores data as objects with identifiers, metadata, permissions, versions, and lifecycle settings."
  ],
  [
    "Block storage",
    "A fictional storage service that presents fixed-size data blocks to a workload, often supporting virtual machines or databases."
  ],
  [
    "File storage",
    "A fictional managed file-sharing service that presents folders and files over an approved network path."
  ],
  [
    "Managed database",
    "A fictional provider-operated database platform where the customer still owns identities, network access, data classification, schema permissions, backups, logging, and usage."
  ],
  [
    "Data classification",
    "A fictional label describing sensitivity, business value, legal or contractual need, handling requirements, retention, sharing, and recovery priority."
  ],
  [
    "Encryption at rest",
    "A fictional protection concept for stored data on provider media, backups, snapshots, or managed storage."
  ],
  [
    "Encryption in transit",
    "A fictional protection concept for data moving between users, applications, services, networks, or providers."
  ],
  [
    "Key-management service",
    "A fictional managed capability for creating, protecting, authorizing, rotating, monitoring, disabling, and retiring encryption keys."
  ],
  [
    "Customer-managed key",
    "A fictional key whose policy, lifecycle, access, and use decisions are managed by the customer within the provider service."
  ],
  [
    "Provider-managed key",
    "A fictional key operated largely by the provider with fewer customer configuration decisions."
  ],
  [
    "Versioning",
    "A fictional storage capability that preserves multiple object versions so overwritten or deleted data may be recovered under documented conditions."
  ],
  [
    "Retention",
    "A fictional rule defining how long data, versions, logs, backups, or records must remain available before approved disposal."
  ],
  [
    "Lifecycle policy",
    "A fictional automated rule that moves, archives, expires, or deletes data based on age, state, classification, or business requirements."
  ],
  [
    "Recovery point objective",
    "A fictional target for how much recent data loss the business can tolerate after disruption."
  ],
  [
    "Recovery time objective",
    "A fictional target for how quickly an approved service or dataset should be restored after disruption."
  ],
  [
    "Public access",
    "Fictional access that may allow unauthenticated or broadly internet-reachable use of a storage resource, object, database, or service endpoint."
  ]
];
const storageModels = [
  {
    "model": "Managed object storage",
    "best_for": "Fictional lesson media, exports, documents, logs, backups, images, and application objects.",
    "customer_controls": "Identity and resource policy, public-access prevention, encryption choice, key access, versioning, lifecycle, retention, replication, logging, and recovery testing.",
    "common_gap": "A resource is durable but overexposed, unversioned, unlogged, incorrectly retained, or dependent on one broad service role.",
    "evidence": "Storage policy, object-access audit, configuration history, encryption settings, lifecycle, versions, network path, and owner approval."
  },
  {
    "model": "Managed database",
    "best_for": "Fictional structured records, transactions, application state, progress summaries, and indexed business data.",
    "customer_controls": "Database identities, schema and query access, network exposure, encryption, audit logging, backup, retention, replication, and restore validation.",
    "common_gap": "The database service is managed, but broad roles, public endpoints, untested backups, or missing query logs remain customer risks.",
    "evidence": "Role map, connection policy, audit events, encryption, backup jobs, restore tests, schema permissions, and application configuration."
  },
  {
    "model": "Managed file service",
    "best_for": "Fictional shared folders, collaborative workloads, content processing, and applications requiring file semantics.",
    "customer_controls": "Share permissions, directory ownership, network path, encryption, snapshots, retention, logging, and backup or restore.",
    "common_gap": "Legacy inherited permissions or wide network access persist after a migration.",
    "evidence": "Share policy, group membership, path access, network rules, snapshot history, logs, and owner review."
  },
  {
    "model": "Block storage",
    "best_for": "Fictional virtual-machine disks, application volumes, database volumes, and high-performance workloads.",
    "customer_controls": "Attachment, workload identity, encryption, snapshots, backup, deletion, reuse, monitoring, and recovery.",
    "common_gap": "A detached volume, stale snapshot, or copied image remains unowned or broadly accessible.",
    "evidence": "Volume inventory, attachment history, encryption, snapshot policy, image access, deletion records, and owner assignment."
  },
  {
    "model": "Backup repository",
    "best_for": "Fictional recovery copies, long-term recovery points, configuration exports, database backups, and protected archives.",
    "customer_controls": "Backup scope, schedule, retention, separate identity, encryption, immutability concept, monitoring, restore testing, and disposal.",
    "common_gap": "Backups exist but use the same identity, are never restored, lack required retention, or exclude a critical dataset.",
    "evidence": "Backup jobs, coverage map, retention policy, access, encryption, restore test, failure alert, and exception record."
  },
  {
    "model": "Archive or cold storage",
    "best_for": "Fictional long-retention records with low access frequency and defined retrieval expectations.",
    "customer_controls": "Classification, retention, retrieval time, access approval, legal hold concept, encryption, lifecycle, and disposal.",
    "common_gap": "Data is archived without a confirmed owner, retrieval test, disposal rule, or cost and time expectation.",
    "evidence": "Archive policy, object inventory, access records, retrieval test, retention, hold, owner, and disposal approval."
  }
];
const classificationLevels = [
  {
    "level": "Public",
    "examples": "Fictional published lesson pages, approved public images, public worksheets, and marketing material.",
    "controls": "Integrity, approved publication, version control, content ownership, availability, and change review.",
    "sharing": "Public sharing may be allowed only through the approved delivery path.",
    "recovery": "Recovery based on service availability and publication needs."
  },
  {
    "level": "Internal",
    "examples": "Fictional operational documentation, internal training drafts, service inventories, and team procedures.",
    "controls": "Authenticated access, team ownership, approved sharing, logging, versioning, and retention.",
    "sharing": "Limited to approved organizational identities and partner exceptions.",
    "recovery": "Recovery based on operational importance and update frequency."
  },
  {
    "level": "Confidential",
    "examples": "Fictional student progress records, internal assessment summaries, support case details, and security findings.",
    "controls": "Least privilege, private network paths, encryption, detailed logging, retention, monitoring, backup, and reviewed sharing.",
    "sharing": "Need-to-know only with explicit owner approval.",
    "recovery": "Documented recovery objectives and validated backups."
  },
  {
    "level": "Restricted",
    "examples": "Fictional sensitive identity records, emergency credentials metadata, protected research data, or high-impact security records.",
    "controls": "Strongest access governance, isolated paths, separate roles, customer-managed key concept, detailed monitoring, strict retention, and independent review.",
    "sharing": "Exceptional, time-limited, explicitly approved, and independently reviewed.",
    "recovery": "Prioritized recovery with protected backups and tested emergency procedures."
  }
];
const encryptionQuestions = [
  {
    "question": "What data is protected?",
    "strong": "Map fictional data class, storage service, backups, snapshots, exports, logs, replicas, and temporary processing locations.",
    "risk": "Enabling encryption on one service while copies, exports, backups, or logs remain outside the design."
  },
  {
    "question": "Where is encryption applied?",
    "strong": "Document fictional at-rest, in-transit, application, database, backup, archive, and service-to-service protections.",
    "risk": "Treating one encryption label as proof of end-to-end protection."
  },
  {
    "question": "Who owns the key decision?",
    "strong": "Assign fictional data owner, key owner, security reviewer, service owner, and recovery owner.",
    "risk": "Using a customer-managed key without clear lifecycle or emergency ownership."
  },
  {
    "question": "Who may use or administer the key?",
    "strong": "Separate fictional data access, key use, key administration, approval, review, and emergency duties.",
    "risk": "One broad identity can read the data, change the key policy, and disable the key."
  },
  {
    "question": "How is key use monitored?",
    "strong": "Enable fictional key-use, policy-change, disable, deletion, failure, and unusual-source records with verified retention.",
    "risk": "The key is protected but its use and policy changes are not reviewed."
  },
  {
    "question": "How is rotation or replacement handled?",
    "strong": "Document fictional schedule, compatibility, validation, rollback, old-version treatment, owner approval, and completion evidence.",
    "risk": "Rotation is assumed safe without testing application and recovery dependencies."
  },
  {
    "question": "What happens during recovery?",
    "strong": "Confirm fictional backup-key access, restore identity, emergency approval, key availability, region dependency, and restore testing.",
    "risk": "Backups exist but cannot be decrypted or restored during an incident."
  },
  {
    "question": "What evidence proves the design works?",
    "strong": "Use fictional configuration, access, key audit, network, backup, restore, application, and owner records.",
    "risk": "Relying on one dashboard status without independent validation."
  }
];
const protectionFields = [
  {
    "field": "Data set and owner",
    "purpose": "Identifies the fictional data, business purpose, classification, system owner, and data owner.",
    "example": "Student-progress summaries owned by Learning Data Governance.",
    "quality": "Every dataset has one accountable owner and an approved purpose."
  },
  {
    "field": "Storage and copies",
    "purpose": "Maps the fictional primary store, replicas, versions, backups, exports, caches, snapshots, and archives.",
    "example": "Managed database, daily backup, weekly archive, and approved reporting export.",
    "quality": "No copy is omitted from protection, retention, or disposal decisions."
  },
  {
    "field": "Access and network path",
    "purpose": "Records fictional human, service, partner, application, and emergency access with private or public paths.",
    "example": "Private application identity through a private service endpoint.",
    "quality": "Effective access and reachability are supported by evidence."
  },
  {
    "field": "Encryption and key",
    "purpose": "Documents fictional at-rest and in-transit protection, key type, owner, policy, monitoring, and recovery.",
    "example": "Customer-managed key concept with separate use and administration roles.",
    "quality": "The key design includes lifecycle, validation, rollback, and emergency access."
  },
  {
    "field": "Versioning and retention",
    "purpose": "Defines fictional overwrite recovery, deletion behavior, required retention, expiration, and hold exceptions.",
    "example": "Versioning enabled; deleted versions retained thirty fictional days.",
    "quality": "Rules match business, privacy, recovery, and cost requirements."
  },
  {
    "field": "Backup and restore",
    "purpose": "Maps fictional coverage, schedule, retention, identity, encryption, restore target, recovery objectives, and test evidence.",
    "example": "Daily backups with monthly sampled restore validation.",
    "quality": "A successful backup job is not accepted as proof of successful recovery."
  },
  {
    "field": "Logging and source health",
    "purpose": "Defines fictional configuration, object, query, sharing, key, deletion, lifecycle, backup, and restore events.",
    "example": "Object-access logging enabled for confidential storage with source-health monitoring.",
    "quality": "Expected events, delivery, retention, access, and owner are verified."
  },
  {
    "field": "Action and closure",
    "purpose": "Assigns fictional remediation, owner, approval, deadline, validation, rollback, monitoring, residual risk, and completion evidence.",
    "example": "Remove extra collection access, enable logging, run restore test, and preserve evidence.",
    "quality": "The final control state is reviewed and sustainable."
  }
];
const storageRecords = [
  {
    "id": "NLC-DP-01",
    "resource": "course-content-public",
    "type": "Object storage",
    "classification": "Public",
    "access": "Published only through approved content-delivery service",
    "encryption": "Provider-managed at rest; protected service connection in transit",
    "recovery": "Versioning enabled; daily configuration export",
    "finding": "Control design matches approved public-delivery purpose.",
    "limit": "Publication integrity and change approval still require monitoring."
  },
  {
    "id": "NLC-DP-02",
    "resource": "student-progress-primary",
    "type": "Managed database",
    "classification": "Confidential",
    "access": "Private application identity and approved data-administration role",
    "encryption": "Customer-managed key concept; separate key administration",
    "recovery": "Daily backups; last sampled restore test passed",
    "finding": "Primary controls are aligned with classification and recovery requirements.",
    "limit": "Query-log coverage for one read-only reporting role requires validation."
  },
  {
    "id": "NLC-DP-03",
    "resource": "export-packages",
    "type": "Object storage",
    "classification": "Confidential",
    "access": "Export automation writes; approved operations users read",
    "encryption": "Customer-managed key concept",
    "recovery": "Versioning enabled; thirty-day retention",
    "finding": "The storage policy permits the automation role to list more objects than the workflow requires.",
    "limit": "No unsupported read or disclosure is shown."
  },
  {
    "id": "NLC-DP-04",
    "resource": "archive-secondary",
    "type": "Object storage",
    "classification": "Confidential",
    "access": "Migration partner role and export automation role remain listed",
    "encryption": "Provider-managed at rest",
    "recovery": "Versioning disabled; lifecycle moves objects to archive after ninety days",
    "finding": "Stale identity access and missing versioning increase governance and recovery risk.",
    "limit": "No supplied evidence shows post-migration access or deletion."
  },
  {
    "id": "NLC-DP-05",
    "resource": "learning-backup-vault",
    "type": "Backup repository",
    "classification": "Restricted",
    "access": "Separate recovery service identity and two approved recovery administrators",
    "encryption": "Separate backup-key policy concept",
    "recovery": "Daily database backups and weekly configuration backups",
    "finding": "Backup coverage exists, but one application-storage collection is absent from the scope map.",
    "limit": "The missing collection may be reproducible from source, requiring owner confirmation."
  },
  {
    "id": "NLC-DP-06",
    "resource": "analytics-reporting-view",
    "type": "Managed database view",
    "classification": "Internal",
    "access": "Analytics-reader group",
    "encryption": "Inherited managed database protection",
    "recovery": "Rebuilt from the primary database",
    "finding": "The intended de-identified reporting view is appropriate, but one stale group member remains.",
    "limit": "No post-role-change query is supported by the supplied logs."
  },
  {
    "id": "NLC-DP-07",
    "resource": "support-case-attachments",
    "type": "Object storage",
    "classification": "Confidential",
    "access": "Support application and limited support leads",
    "encryption": "Provider-managed at rest",
    "recovery": "Versioning enabled; retention exceeds the current business schedule",
    "finding": "The retention period is longer than the documented support need.",
    "limit": "Contractual or investigation exceptions require separate approval."
  },
  {
    "id": "NLC-DP-08",
    "resource": "security-audit-archive",
    "type": "Archive storage",
    "classification": "Restricted",
    "access": "Security operations and evidence custodian",
    "encryption": "Customer-managed key concept with separate administration",
    "recovery": "Long retention; retrieval test overdue",
    "finding": "Access and retention are documented, but retrieval readiness is not current.",
    "limit": "The archive may remain intact even though retrieval has not been recently validated."
  }
];
const workflowSteps = [
  {
    "step": "1",
    "title": "Confirm the fictional data-protection question",
    "detail": "Restate the approved datasets, owners, classifications, services, regions, identities, time window, evidence sources, privacy limits, and prohibited real-account actions.",
    "output": "Data-protection review objective and scope."
  },
  {
    "step": "2",
    "title": "Map storage and every copy",
    "detail": "Record fictional primary stores, replicas, versions, snapshots, backups, exports, caches, archives, logs, and temporary processing locations.",
    "output": "Cloud data and storage map."
  },
  {
    "step": "3",
    "title": "Evaluate effective access and exposure",
    "detail": "Compare fictional identity roles, resource policies, public-access controls, network paths, service settings, conditions, and business need.",
    "output": "Storage access and exposure matrix."
  },
  {
    "step": "4",
    "title": "Review encryption and key responsibilities",
    "detail": "Document fictional at-rest and in-transit protections, key type, owners, use, administration, rotation, monitoring, recovery, and evidence.",
    "output": "Encryption and key-responsibility register."
  },
  {
    "step": "5",
    "title": "Review versions, retention, and lifecycle",
    "detail": "Compare fictional versioning, deletion, retention, archive, expiration, exception, legal-hold concept, and disposal with business and privacy requirements.",
    "output": "Versioning and lifecycle gap register."
  },
  {
    "step": "6",
    "title": "Validate backup and recovery",
    "detail": "Confirm fictional coverage, schedule, identity, encryption, retention, failure handling, recovery objectives, restore target, and test evidence.",
    "output": "Backup coverage and restore-readiness report."
  },
  {
    "step": "7",
    "title": "Write bounded findings and actions",
    "detail": "Separate fictional observations, alternatives, confidence, limitations, impact boundaries, owners, approvals, validation, rollback, and monitoring.",
    "output": "Data-protection findings and action plan."
  },
  {
    "step": "8",
    "title": "Review and communicate",
    "detail": "Confirm fictional source health, evidence lineage, privacy, need-to-know, residual risk, reviewer approval, and portfolio-safe reporting.",
    "output": "Reviewed cloud data-protection package."
  }
];
const findings = [
  {
    "id": "NLC-DP-F01",
    "statement": "The fictional export-packages storage policy grants the automation role broader listing capability than its documented workflow requires.",
    "support": "Storage policy, effective-access record, application workflow, object-access design, and owner requirement.",
    "alternative": "A troubleshooting requirement is possible but no approved exception is supplied.",
    "confidence": "High",
    "limitation": "No evidence supports unauthorized reading, sharing, or disclosure."
  },
  {
    "id": "NLC-DP-F02",
    "statement": "The archive-secondary collection has stale identity access and no versioning, creating avoidable access and recovery risk.",
    "support": "Role assignments, migration closure, storage configuration, lifecycle policy, owner review, and missing version history.",
    "alternative": "The data may be reproducible from another source, but that does not remove the stale-access finding.",
    "confidence": "High",
    "limitation": "No supplied record shows deletion, alteration, or post-migration use."
  },
  {
    "id": "NLC-DP-F03",
    "statement": "The backup vault omits one application-storage collection from the documented coverage map.",
    "support": "Backup scope, asset inventory, job configuration, owner requirement, and recovery plan.",
    "alternative": "The collection may be reproducible and intentionally excluded, but owner approval is missing.",
    "confidence": "High",
    "limitation": "Practical business impact depends on reconstruction time and data uniqueness."
  },
  {
    "id": "NLC-DP-F04",
    "statement": "Support-case attachments are retained longer than the current documented business schedule.",
    "support": "Storage lifecycle, retention policy, support requirement, privacy review, and object-age inventory.",
    "alternative": "A contractual or investigation requirement may justify longer retention but no active exception is supplied.",
    "confidence": "Medium-High",
    "limitation": "The lesson does not evaluate real legal obligations."
  },
  {
    "id": "NLC-DP-F05",
    "statement": "The restricted security-audit archive has strong ownership and access controls but an overdue retrieval test.",
    "support": "Access policy, key ownership, archive configuration, retention, test schedule, and owner record.",
    "alternative": "The archive may still be recoverable, but current readiness is unverified.",
    "confidence": "High",
    "limitation": "No real retrieval operation is performed in this lesson."
  },
  {
    "id": "NLC-DP-F06",
    "statement": "The student-progress database design aligns with the confidential classification, but query-log coverage for one reporting path requires validation.",
    "support": "Private network, role map, encryption, backup, restore test, audit configuration, and reporting architecture.",
    "alternative": "Application logs may provide partial coverage but do not automatically replace database-query audit.",
    "confidence": "Medium-High",
    "limitation": "No unsupported query activity is established."
  }
];
const commonMistakes = [
  "Treating provider durability as proof that fictional data is correctly backed up, retained, recoverable, private, and monitored.",
  "Reviewing only the primary storage resource and ignoring versions, backups, snapshots, exports, caches, logs, replicas, and archives.",
  "Treating encryption enabled as proof of correct key ownership, access, rotation, monitoring, recovery, and end-to-end protection.",
  "Using a customer-managed key without separating data access, key use, key administration, approval, and emergency duties.",
  "Assuming versioning is a complete backup or that a successful backup job proves a successful restore.",
  "Treating public-capable storage as proof that a resource is publicly reachable.",
  "Treating broad storage access as proof that every object was read or shared.",
  "Applying one retention period to public, internal, confidential, restricted, backup, audit, and support data without owner review.",
  "Deleting data or changing lifecycle settings without checking holds, recovery, replication, application dependency, and rollback.",
  "Ignoring object-access, query, key-use, sharing, lifecycle, deletion, backup, and restore logging coverage.",
  "Removing permissions or network paths without staged validation and service-owner approval.",
  "Treating missing cloud-audit events as proof of no activity without verifying source health, retention, account, platform, and event coverage.",
  "Failing to identify who owns the data, storage service, identity, key, network path, backup, retention, privacy, and final risk decision.",
  "Using or exposing any real storage account, bucket, database, key, backup, snapshot, object, path, policy, log, owner, or private data."
];
const quizQuestions = [
  {
    "question": "What should a fictional cloud data map include?",
    "choices": [
      "Primary storage, versions, replicas, backups, snapshots, exports, caches, logs, archives, owners, classifications, and dependencies.",
      "Only the largest storage service.",
      "Only the public resources.",
      "Only the provider dashboard."
    ],
    "answer": 0,
    "explanation": "Every meaningful copy and processing location belongs in the protection design."
  },
  {
    "question": "What does encryption enabled most directly support?",
    "choices": [
      "That a documented encryption control is configured within its stated boundary.",
      "That key ownership is correct.",
      "That every copy is protected.",
      "That recovery will succeed."
    ],
    "answer": 0,
    "explanation": "Encryption status must be correlated with key, access, copy, network, and recovery evidence."
  },
  {
    "question": "Why is versioning not the same as a complete backup?",
    "choices": [
      "Versions may share the same service, account, identity, failure mode, retention, or deletion boundary as the primary data.",
      "Versioning never helps recovery.",
      "Backups never use versions.",
      "Only databases need backups."
    ],
    "answer": 0,
    "explanation": "Versioning is useful but does not automatically provide independent recovery protection."
  },
  {
    "question": "Which statement about broad fictional storage access is strongest?",
    "choices": [
      "The access exceeds the documented business need and should be reviewed; object reads or disclosure are not proven by permission alone.",
      "Every object was read.",
      "The provider caused the issue.",
      "No action is needed because storage is managed."
    ],
    "answer": 0,
    "explanation": "Capability supports a least-privilege finding, not automatic evidence of use or impact."
  },
  {
    "question": "What should a fictional restore test prove?",
    "choices": [
      "That approved data can be recovered within documented conditions using available identities, keys, targets, procedures, and evidence.",
      "Only that the backup job finished.",
      "That no future failure can occur.",
      "That retention is unnecessary."
    ],
    "answer": 0,
    "explanation": "Restore validation tests practical recovery, not merely backup creation."
  },
  {
    "question": "When is a fictional retention finding strongest?",
    "choices": [
      "When storage age, policy, data class, business need, privacy requirement, owner decision, exceptions, and disposal evidence are compared.",
      "When one object is old.",
      "When storage cost is high.",
      "When the provider recommends deletion."
    ],
    "answer": 0,
    "explanation": "Retention should connect business, privacy, recovery, legal, operational, and owner requirements."
  },
  {
    "question": "What makes a fictional cloud data-protection finding defensible?",
    "choices": [
      "It links data classification, copies, effective access, network path, encryption, keys, retention, recovery, logs, owners, alternatives, confidence, and limitations.",
      "It relies on one encryption icon.",
      "It assumes every permission was used.",
      "It ignores backups and exports."
    ],
    "answer": 0,
    "explanation": "Defensible data protection connects the full lifecycle and evidence boundary."
  }
];

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

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>

      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function SecureCloudStorageDataProtectionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I13
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 3 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I13.3 Secure Cloud Storage and Data Protection
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders review fictional cloud storage, databases,
            backups, versions, retention, lifecycle, encryption, keys, public
            access, sharing, logging, and recovery without touching any real
            cloud account or private data.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I13: Cloud Security Basics"
          lessonTitle="Secure Cloud Storage and Data Protection"
          lessonNumber={3}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge Learning Cloud storage and data-protection records.",
            "I will not sign in to, query, scan, change, upload, download, decrypt, restore, share, delete, export from, or inspect any real cloud storage, database, backup, key, object, snapshot, log, or private record.",
            "I will map every fictional copy of the data, not only the primary storage resource.",
            "I will distinguish configuration capability from observed use, exposure, disclosure, or impact.",
            "I will preserve owners, classification, business need, alternatives, confidence, limitations, validation, rollback, monitoring, and portfolio safety.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Encrypted and Durable Does Not Automatically Mean Private, Recoverable, or Correctly Retained"
        >
          <p className="leading-8">
            The fictional Northbridge Learning Cloud uses managed object
            storage, a managed database, a backup vault, and archive storage.
            One collection has stale migration access and no versioning. One
            backup scope omits an application-storage collection. One restricted
            archive has strong access controls but an overdue retrieval test.
            The provider operates durable services, but the customer still owns
            access, classification, logging, lifecycle, key decisions, backup
            scope, recovery validation, and disposal.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak analysis
              </p>

              <p className="mt-2 leading-7">
                See an encryption icon and successful backup job, then conclude
                every copy is protected, private, retained correctly, and fully
                recoverable.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional analysis
              </p>

              <p className="mt-2 leading-7">
                Map every copy, effective access, network path, encryption
                boundary, key ownership, versioning, retention, logging, backup
                coverage, restore readiness, and owner decision.
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>

              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Cloud Data Exists across More Places than the Primary Storage Screen Shows"
        >
          <p className="leading-8">
            Fictional data may appear in a database, object store, file share,
            cache, export, snapshot, backup, archive, log, analytics view,
            temporary job, content-delivery layer, or recovery environment. A
            strong design protects each copy according to classification,
            purpose, owner, access, key, network path, retention, monitoring,
            and recovery need. Missing one copy can undermine the entire data
            protection plan.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Data–Access–Protection–Recovery Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Data", "Which fictional dataset, owner, purpose, classification, copies, regions, versions, exports, logs, and archives exist?"],
              ["Access", "Which fictional human, service, application, partner, emergency, and network paths can reach the data under which conditions?"],
              ["Protection", "Which fictional encryption, key, versioning, sharing, logging, lifecycle, retention, and disposal controls apply?"],
              ["Recovery", "Which fictional backups, recovery objectives, restore identities, keys, targets, tests, failures, and completion evidence exist?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Cloud Storage, Encryption, Lifecycle, and Recovery Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Storage Models
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Fictional Storage Patterns and Customer Responsibilities
          </h2>

          <div className="mt-6 grid gap-5">
            {storageModels.map((item) => (
              <article
                key={item.model}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.model}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Best suited for
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.best_for}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Customer controls
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.customer_controls}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Common gap
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.common_gap}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Review evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Data Classification
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Match Protection to the Fictional Data Class
          </h2>

          <div className="mt-6 grid gap-5">
            {classificationLevels.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.level}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Fictional examples
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.examples}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Expected controls
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.controls}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Sharing expectation
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.sharing}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Recovery expectation
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.recovery}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Encryption and Keys
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions before Accepting an Encryption Design
          </h2>

          <div className="mt-6 grid gap-5">
            {encryptionQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.question}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong design
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Design risk
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.risk}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Protection Worksheet
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fields for a Reviewable Data-Protection Decision
          </h2>

          <div className="mt-6 grid gap-5">
            {protectionFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.field}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Purpose
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.purpose}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Fictional example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.example}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Quality standard
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Storage Review
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Storage and Data Records
          </h2>

          <div className="mt-6 grid gap-5">
            {storageRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.resource}
                  </h3>

                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.type}
                  </span>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">
                    {item.classification}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Access and path", item.access],
                    ["Encryption", item.encryption],
                    ["Recovery", item.recovery],
                    ["Finding", item.finding],
                    ["Limitation", item.limit],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Defensive Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete a Fictional Cloud Data-Protection Review
          </h2>

          <div className="mt-6 grid gap-4">
            {workflowSteps.map((item) => (
              <article
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {item.step}
                </span>

                <h3 className="font-black text-cyan-100">{item.title}</h3>

                <p className="text-sm leading-6 text-slate-300">{item.detail}</p>

                <p className="text-sm leading-6 text-emerald-100">
                  <span className="font-black text-emerald-200">Output: </span>
                  {item.output}
                </p>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Cloud Data-Protection Dashboard"
          subtitle="Training dashboard for fictional storage and recovery evidence only."
          metrics={[
            {
              label: "Data resources reviewed",
              value: "8",
              note: "Object storage, databases, backup, archive, reporting, and support data are mapped.",
            },
            {
              label: "Protection gaps",
              value: "6",
              note: "Broad access, stale access, missing versioning, backup coverage, excess retention, and overdue retrieval testing require action.",
            },
            {
              label: "Supported disclosure events",
              value: "0",
              note: "The supplied fictional evidence supports configuration and governance gaps but no confirmed disclosure.",
            },
          ]}
        />

        <FakeAlertCard
          title="Confidential Storage Has Stale Access and No Versioning"
          severity="High"
          time="10:46 AM"
          source="Fake Cloud Data-Protection Console"
          details="The fictional archive-secondary collection still lists a completed migration partner role and the export automation role, while versioning is disabled."
          recommendation="Confirm effective access, business need, owner, classification, network path, logging coverage, lifecycle, recovery requirement, and alternate sources. Do not claim misuse or deletion. Plan approved access removal, versioning or alternate recovery, staged validation, rollback, monitoring, retention review, and completion evidence."
        />

        <FakeLogPanel
          title="Fake Northbridge Data-Protection Records"
          logs={[
            "09:00 REVIEW scope='cloud storage,data protection,recovery'",
            "09:08 DATA resources='8' owners='mapped'",
            "09:14 CLASSIFY student-progress='confidential' audit-archive='restricted'",
            "09:20 ACCESS export-packages='automation role broad list'",
            "09:27 ACCESS archive-secondary='partner role,export role'",
            "09:32 VERSION archive-secondary='disabled'",
            "09:38 BACKUP vault_scope='database,config' missing='application collection'",
            "09:44 RETENTION support-attachments='longer than schedule'",
            "09:51 KEY audit-archive='separate administration'",
            "09:58 TEST audit-archive retrieval='overdue'",
            "10:05 LOG database reporting-path='coverage unverified'",
            "10:12 FINDING disclosure='not supported'",
            "10:20 ACTION owners='data,storage,identity,key,recovery,privacy'",
            "10:32 VALIDATE restore='required' access_change='staged'",
            "10:46 PORTFOLIO fictionalization='required'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Data-Protection Findings and Limits
          </h2>

          <div className="mt-6 grid gap-5">
            {findings.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.statement}
                  </h3>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence support
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.support}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Alternative
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.alternative}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.limitation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="What Does the Archive-Secondary Evidence Support?"
          evidence={[
            "The fictional collection is classified confidential.",
            "The migration partner role remains active after project closure.",
            "The export automation role also retains read access.",
            "Versioning is disabled.",
            "The lifecycle policy archives older objects after ninety fictional days.",
            "The supplied logs do not show post-migration reads, sharing, deletion, or external access.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The collection has stale access and weaker recovery protection than required; misuse, deletion, or disclosure is not proven.",
            "The partner stole confidential data.",
            "Every object was read by the export automation.",
            "Encryption makes the stale access harmless.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion preserves the access and recovery findings while respecting the activity and impact limits."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Cloud Storage and Data-Protection Analysis"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Build the Northbridge Cloud Data-Protection Review"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Data Map, Access Review, Encryption Design, Lifecycle, and Recovery
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to complete
                an end-to-end cloud storage and data-protection review.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Data inventory with owner, purpose, classification, region, service, and every copy.</li>
                <li>Effective-access and network-path matrix.</li>
                <li>Encryption and key-responsibility register.</li>
                <li>Versioning, retention, lifecycle, sharing, and disposal review.</li>
                <li>Backup coverage, recovery objectives, restore identity, key, target, and test evidence.</li>
                <li>Logging and source-health matrix.</li>
                <li>Findings with alternatives, confidence, limitations, impact boundaries, and owners.</li>
                <li>Staged action plan, technical summary, leadership summary, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Do not access, change, restore, decrypt, download, upload, or inspect
            any real cloud data. Complete the lab only with fictional records
            displayed in this lesson.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Confidential Collection Has Stale Access but No Supported Use"
          scenario="The fictional archive-secondary collection still allows a completed migration partner role and the export automation role, but supplied logs do not show post-migration reads."
          choices={[
            {
              label: "Choice A",
              response:
                "Report stale access and lifecycle risk, preserve the no-supported-use limitation, confirm dependencies, assign owners, stage access removal, validate services, monitor, and document completion.",
              outcome:
                "Best defensive choice. The control gap is corrected without overstating activity.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "State that the partner accessed confidential data because the role existed.",
              outcome:
                "Unsupported. Capability is not proof of use.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the access because encryption is enabled.",
              outcome:
                "Unsafe. Encryption does not replace least privilege.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Backup Job Succeeds, but One Data Collection Is Missing"
          scenario="The fictional backup dashboard is green, yet the asset and scope maps show that one application-storage collection is not included."
          choices={[
            {
              label: "Choice A",
              response:
                "Confirm whether the collection is unique or reproducible, obtain owner approval, update coverage or document the exception, test restore, validate keys and targets, and preserve monitoring and completion evidence.",
              outcome:
                "Best defensive choice. Backup success is evaluated against actual coverage and recovery need.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Accept the green dashboard as proof that every dataset is recoverable.",
              outcome:
                "Weak. Job success does not prove complete coverage or restore readiness.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Add the collection immediately without checking cost, privacy, retention, or owner need.",
              outcome:
                "Unsafe. Backup scope changes require approved design and validation.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Secure Cloud Storage and Data-Protection Checklist"
          items={[
            "I can inventory fictional object, file, block, database, backup, archive, version, snapshot, export, cache, log, and replica locations.",
            "I can assign each fictional dataset an owner, purpose, classification, sharing rule, retention, recovery need, and disposal decision.",
            "I can evaluate effective storage access using identity roles, resource policies, public-access controls, network paths, service settings, and conditions.",
            "I can distinguish encryption configuration from key ownership, key access, monitoring, rotation, recovery, and end-to-end protection.",
            "I can compare provider-managed and customer-managed key concepts without using any real key.",
            "I can evaluate versioning, retention, lifecycle, deletion, archive, and exception evidence.",
            "I can distinguish successful backup jobs from complete coverage and successful restore validation.",
            "I can write findings with alternatives, confidence, limitations, impact boundaries, named owners, and approved actions.",
            "I can design staged remediation with validation, rollback, monitoring, source health, residual risk, and completion evidence.",
            "I will use only fictional evidence and never access or expose real storage, databases, keys, backups, objects, policies, logs, owners, or private data.",
          ]}
        />

        <MiniQuiz
          title="I13.3 Mini Quiz: Secure Cloud Storage and Data Protection"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Secure Cloud Storage and Data-Protection Review for the Northbridge Learning Cloud. Include data inventory, classification, every copy, owner map, effective access, public-access controls, network paths, encryption, key responsibilities, versioning, retention, lifecycle, sharing, logging, backup coverage, recovery objectives, restore validation, findings, alternatives, confidence, limitations, remediation, rollback, monitoring, and a portfolio-safety statement."
          tips={[
            "Use only fictional storage resources, databases, keys, identities, objects, backups, snapshots, logs, owners, dates, and decisions.",
            "Do not treat encryption, versioning, backup success, or role assignment as proof of complete protection or observed activity.",
            "Map every meaningful copy of the data and every owner who controls access, key, retention, backup, recovery, and disposal.",
            "Make every change approved, staged, reversible, validated, monitored, and documented.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cloud data protection covers every copy, not only the primary storage resource.",
            "Provider durability does not automatically provide correct access, privacy, retention, recovery, logging, or disposal.",
            "Encryption should be evaluated with key ownership, key access, monitoring, rotation, recovery, and end-to-end scope.",
            "Versioning improves recovery but does not automatically replace independent backup and restore validation.",
            "Broad storage access supports a least-privilege finding but does not independently prove use or disclosure.",
            "Retention and lifecycle decisions should connect data class, business need, privacy, recovery, cost, owner approval, and exceptions.",
            "Portfolio artifacts should use fully fictional data-protection evidence and never expose real storage or private records.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I13
          </h2>

          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}