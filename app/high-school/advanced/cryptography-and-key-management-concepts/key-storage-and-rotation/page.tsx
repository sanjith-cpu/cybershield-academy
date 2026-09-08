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
const previousLesson = `${modulePath}/certificates-and-pki-concepts`;
const nextLesson = `${modulePath}/common-crypto-design-mistakes`;

const objectives = [
  "Explain why cryptographic keys are sensitive architecture assets with ownership, storage, access, lifecycle, recovery, and retirement requirements.",
  "Compare conceptual key-storage boundaries such as application-local storage, managed key services, hardware-backed protection, and recovery repositories without exposing real secrets.",
  "Evaluate fictional rotation designs using key purpose, owner, scope, versioning, dependent systems, re-encryption or trust-update requirements, rollback, and evidence.",
  "Identify key-management risks such as hard-coded keys, uncontrolled copies, shared ownership, missed rotation, orphaned versions, recovery gaps, and indefinite legacy retention.",
  "Build a Key Lifecycle Register that becomes the sixth artifact in the A14 Key-Management Design Recommendation.",
];

const keyClasses = [
  {
    type: "Data-encryption key",
    purpose:
      "Protects stored or transmitted data within a defined application, storage, backup, or session scope.",
    ownership:
      "Usually owned by the application, data platform, or storage service team.",
    lifecycleFocus:
      "Versioning, rotation, dependency mapping, recovery, and retirement.",
    risk:
      "One data key reused across unrelated systems expands trust and complicates rotation.",
  },
  {
    type: "Key-encryption key",
    purpose:
      "Protects other cryptographic keys in a layered key-management design.",
    ownership:
      "Typically owned by a central security or platform key-management function.",
    lifecycleFocus:
      "High-assurance storage, tightly controlled access, rotation planning, and recovery.",
    risk:
      "Compromise or loss can affect many dependent data keys.",
  },
  {
    type: "Private signing key",
    purpose:
      "Creates signatures representing an approved signer or publishing service.",
    ownership:
      "Owned by the signer identity, signing service, or responsible publishing team.",
    lifecycleFocus:
      "Custody, authorization, rotation, revocation, replacement, and historical verification.",
    risk:
      "Broad private-key access weakens signer accountability.",
  },
  {
    type: "Certificate private key",
    purpose:
      "Proves possession of the private key associated with a certificate identity.",
    ownership:
      "Owned by the service, workload, or platform responsible for that certificate relationship.",
    lifecycleFocus:
      "Certificate renewal, private-key replacement, trust continuity, and retirement.",
    risk:
      "Copying the private key to multiple systems broadens service-identity exposure.",
  },
  {
    type: "Recovery key",
    purpose:
      "Supports authorized restoration of protected data or services during recovery.",
    ownership:
      "Owned jointly through a tightly governed resilience/security process.",
    lifecycleFocus:
      "Escrow or recovery governance, testability, restricted access, evidence, and retirement.",
    risk:
      "Recovery copies can become permanent bypass paths if not controlled.",
  },
  {
    type: "Session or temporary key",
    purpose:
      "Protects a bounded communication session or short-lived data operation.",
    ownership:
      "Managed by the protocol, service, or session boundary.",
    lifecycleFocus:
      "Short lifetime, automatic creation/destruction, and bounded scope.",
    risk:
      "Treating temporary keys as permanent can create unnecessary exposure.",
  },
];

const storageBoundaries = [
  {
    boundary: "Application configuration",
    description:
      "The application has direct access to key material through a configuration or local secret mechanism.",
    strength:
      "Simple for small systems when ownership and deployment are tightly controlled.",
    weakness:
      "Risk rises if secrets are hard-coded, copied into repositories, logs, or many hosts.",
    reviewQuestion:
      "Can the application reference a protected key service instead of distributing raw key material widely?",
  },
  {
    boundary: "Managed key service",
    description:
      "Applications request cryptographic operations or key access through a dedicated managed platform.",
    strength:
      "Centralizes policy, versioning, ownership, access control, monitoring, and rotation workflows.",
    weakness:
      "The service becomes a critical dependency whose availability and governance must be designed carefully.",
    reviewQuestion:
      "Are application permissions narrow enough to use only the keys they actually need?",
  },
  {
    boundary: "Hardware-backed protection",
    description:
      "Private or high-impact key operations occur inside a protected hardware-backed boundary.",
    strength:
      "Can reduce raw key exposure and support strong custody controls.",
    weakness:
      "Operational complexity, recovery, dependency, and access governance still matter.",
    reviewQuestion:
      "Can the key remain non-exportable while the required operation occurs inside the protected boundary?",
  },
  {
    boundary: "Platform-managed encryption",
    description:
      "A storage or cloud platform manages encryption and key interaction on behalf of the application.",
    strength:
      "Reduces direct key handling by application teams and can improve consistency.",
    weakness:
      "Ownership and policy can become unclear if teams assume platform management means no governance is needed.",
    reviewQuestion:
      "Who owns the protection decision, key policy, rotation expectations, and recovery evidence?",
  },
  {
    boundary: "Recovery repository",
    description:
      "Authorized recovery material is stored separately to support disaster recovery or continuity.",
    strength:
      "Can preserve access to protected data during a major platform failure.",
    weakness:
      "Recovery copies become dangerous if access, testing, expiry, and cleanup are weak.",
    reviewQuestion:
      "Is recovery access restricted, auditable, periodically tested, and retired when no longer needed?",
  },
  {
    boundary: "Legacy local key store",
    description:
      "An older application stores or references keys locally under historical operational practices.",
    strength:
      "May continue supporting legacy workloads temporarily.",
    weakness:
      "Often has unclear ownership, weak rotation, broad copies, and incomplete inventory.",
    reviewQuestion:
      "What is the modernization or retirement plan, and can the current key dependency be fully mapped?",
  },
];

const rotationTriggers = [
  {
    trigger: "Scheduled rotation",
    meaning:
      "A key is replaced on a defined policy cadence.",
    architectureImpact:
      "Dependent systems must support new versions without losing access to required data.",
  },
  {
    trigger: "Ownership change",
    meaning:
      "The responsible application, service, team, or business owner changes.",
    architectureImpact:
      "Access rights and lifecycle responsibility should be reviewed immediately.",
  },
  {
    trigger: "Scope change",
    meaning:
      "The key begins protecting new data, systems, regions, environments, or services.",
    architectureImpact:
      "The existing key relationship may no longer be appropriately narrow.",
  },
  {
    trigger: "Suspected exposure",
    meaning:
      "The organization has reason to believe key confidentiality or custody may be uncertain.",
    architectureImpact:
      "Trust should be contained and the key replaced under an incident-governed process.",
  },
  {
    trigger: "Certificate renewal",
    meaning:
      "A certificate relationship is replaced and may use new associated private-key material.",
    architectureImpact:
      "Relying systems and identity binding must transition cleanly.",
  },
  {
    trigger: "Platform migration",
    meaning:
      "A workload moves to a new provider, service, environment, or storage architecture.",
    architectureImpact:
      "Key ownership, storage, access path, and recovery assumptions should be re-evaluated.",
  },
  {
    trigger: "Algorithm or policy change",
    meaning:
      "Approved cryptographic standards or organizational policy change.",
    architectureImpact:
      "The key format, algorithm relationship, or protection design may need migration.",
  },
  {
    trigger: "Service retirement",
    meaning:
      "The protected system is decommissioned.",
    architectureImpact:
      "Keys should be retired only after required data retention, archive, and recovery dependencies are resolved.",
  },
];

const rotationLifecycle = [
  {
    stage: "Inventory current key",
    goal:
      "Identify owner, purpose, version, storage boundary, dependent systems, and evidence.",
    failure:
      "Rotating an unknown dependency can break applications or make data unavailable.",
  },
  {
    stage: "Create replacement",
    goal:
      "Provision a new key version under the approved storage and ownership model.",
    failure:
      "A replacement that changes custody or scope unexpectedly can weaken governance.",
  },
  {
    stage: "Authorize dependencies",
    goal:
      "Grant only the approved applications or services access to the new version.",
    failure:
      "Broad grants can recreate the same excessive trust the rotation was meant to reduce.",
  },
  {
    stage: "Transition use",
    goal:
      "Move new encryption, signing, or trust operations to the replacement key.",
    failure:
      "Hard-coded key references or missing version support can cause outages.",
  },
  {
    stage: "Handle existing protected data",
    goal:
      "Decide whether older data remains under the old key temporarily or is re-protected under the new key according to policy.",
    failure:
      "Removing the old key too early can make retained data unreadable.",
  },
  {
    stage: "Verify operations",
    goal:
      "Confirm applications, recovery workflows, monitoring, and evidence all use the intended key versions.",
    failure:
      "A rotation can look complete while some hidden workload still uses the old key.",
  },
  {
    stage: "Retire old version",
    goal:
      "Remove old-key access only after dependencies and retention needs are closed.",
    failure:
      "Retiring too late leaves unnecessary exposure; retiring too early breaks required access.",
  },
  {
    stage: "Close with evidence",
    goal:
      "Record owner, completion time, dependent-system status, old-key state, and any remaining exceptions.",
    failure:
      "Without closure evidence, future reviewers cannot tell whether rotation actually finished.",
  },
];

const governanceDimensions = [
  {
    dimension: "Ownership",
    question:
      "Who is accountable for the key's purpose, scope, lifecycle, and retirement?",
    evidence:
      "Named key owner + application/data owner + governance owner.",
  },
  {
    dimension: "Storage",
    question:
      "Where is the key held or where do cryptographic operations occur?",
    evidence:
      "Managed service, hardware-backed boundary, application secret store, recovery repository.",
  },
  {
    dimension: "Access",
    question:
      "Which identities or workloads may use the key?",
    evidence:
      "Service identities, role mappings, authorization policy, environment scope.",
  },
  {
    dimension: "Versioning",
    question:
      "Can the system distinguish current and historical key versions?",
    evidence:
      "Key IDs, version metadata, transition state, retained-data mapping.",
  },
  {
    dimension: "Rotation",
    question:
      "What event or cadence causes replacement?",
    evidence:
      "Policy schedule, change trigger, incident trigger, certificate renewal.",
  },
  {
    dimension: "Recovery",
    question:
      "Can legitimate restoration succeed without uncontrolled key copies?",
    evidence:
      "Recovery procedure, restricted access, test evidence, expiry, cleanup.",
  },
  {
    dimension: "Monitoring",
    question:
      "Can the organization observe key use, policy change, failed access, rotation, and source health?",
    evidence:
      "Key-use telemetry, policy logs, rotation records, alert ownership.",
  },
  {
    dimension: "Retirement",
    question:
      "When can the key be safely disabled or destroyed?",
    evidence:
      "Dependency closure, data-retention decision, service retirement, historical validation needs.",
  },
];

const principles = [
  {
    title: "Keys should be referenced, not copied, when practical",
    meaning:
      "Centralized protected boundaries reduce uncontrolled duplication and simplify governance.",
    review:
      "Can the application use a managed key operation without receiving raw key material?",
  },
  {
    title: "One key should have one explainable purpose",
    meaning:
      "Broad multi-purpose keys create large blast radius and confusing ownership.",
    review:
      "Does the key protect one clear trust domain, environment, or data class?",
  },
  {
    title: "Versioning is part of safe rotation",
    meaning:
      "Applications and retained data may depend on different key generations during transition.",
    review:
      "Can the system identify which key version protects which data or operation?",
  },
  {
    title: "Rotation is a system change, not a button press",
    meaning:
      "Key replacement affects applications, data, recovery, monitoring, and trust.",
    review:
      "Have all dependencies and rollback needs been mapped?",
  },
  {
    title: "Recovery must be tested",
    meaning:
      "A documented recovery key or escrow relationship is useful only if legitimate restoration actually works.",
    review:
      "Has recovery been tested with current key versions and ownership?",
  },
  {
    title: "Retirement should wait for dependency closure",
    meaning:
      "Old keys may still be required for retained data, archives, or historical verification.",
    review:
      "Is every required dependency either migrated or intentionally preserved?",
  },
  {
    title: "Access should match workload purpose",
    meaning:
      "A service should use only the keys required for its own environment and function.",
    review:
      "Can cross-application or cross-environment key access be removed?",
  },
  {
    title: "Evidence should show the entire lifecycle",
    meaning:
      "Generation, use, rotation, recovery, exception, and retirement all need reviewable metadata.",
    review:
      "Can a reviewer reconstruct the key's current state without seeing the secret itself?",
  },
];

const vocabulary = [
  {
    term: "Key store",
    definition:
      "A protected system or boundary used to manage cryptographic keys and related lifecycle metadata.",
  },
  {
    term: "Hardware-backed key protection",
    definition:
      "A design where sensitive key operations occur inside a protected hardware-supported boundary.",
  },
  {
    term: "Key rotation",
    definition:
      "The planned replacement of one key version with another according to policy or change triggers.",
  },
  {
    term: "Key version",
    definition:
      "A distinct generation of key material associated with the same logical key purpose.",
  },
  {
    term: "Key scope",
    definition:
      "The applications, environments, data sets, users, or operations allowed to use a key.",
  },
  {
    term: "Key custody",
    definition:
      "The ownership and control model governing who or what can access or use private or secret key material.",
  },
  {
    term: "Key recovery",
    definition:
      "A governed process for restoring authorized access to protected data or services when normal key access is unavailable.",
  },
  {
    term: "Key retirement",
    definition:
      "The process of ending active use of a key after dependencies, retention, and historical needs are resolved.",
  },
  {
    term: "Crypto-agility",
    definition:
      "The ability to change keys, algorithms, providers, or cryptographic designs without unsafe emergency rework.",
  },
  {
    term: "Envelope encryption",
    definition:
      "A conceptual layered pattern where one key protects another key, allowing data keys and higher-level key protection to have separate roles.",
  },
  {
    term: "Orphaned key",
    definition:
      "A key that remains active or stored but no longer has a clear owner, purpose, or dependency record.",
  },
  {
    term: "Key inventory",
    definition:
      "A governed record of key identifiers, purposes, owners, storage class, scope, versions, dependencies, and lifecycle state.",
  },
];

const records = [
  {
    id: "KEY-01",
    asset: "Student Support Database Key",
    purpose: "Production database encryption",
    keyClass: "Data-encryption key",
    storage: "Managed key service",
    owner: "Data Platform",
    scope: "Student Support Database / Production",
    users: "Database service identity",
    currentVersion: "v6 active",
    rotation: "Scheduled annual rotation + incident trigger",
    dependency: "Database storage + restore workflow",
    recovery: "Current restore test confirms v5/v6 access as required",
    retirement: "v5 retained only for approved historical data window",
    evidence: "Key inventory + rotation record + restore test",
    status: "Confirmed",
    concern:
      "Old versions should remain accessible only as long as retained data requires them.",
  },
  {
    id: "KEY-02",
    asset: "Student Services Portal Certificate Private Key",
    purpose: "Production service identity",
    keyClass: "Certificate private key",
    storage: "Hardware-backed platform boundary",
    owner: "Platform Security",
    scope: "Student Services Portal / Production",
    users: "Portal service identity only",
    currentVersion: "Current certificate key pair",
    rotation: "Certificate renewal in 60 days",
    dependency: "Public service certificate + client trust",
    recovery: "Replacement path documented",
    retirement: "Old private key disabled after certificate rollout verification",
    evidence: "Certificate inventory + custody metadata + renewal plan",
    status: "Confirmed",
    concern:
      "Private key should remain non-exportable and bounded to the portal identity.",
  },
  {
    id: "KEY-03",
    asset: "Recovery Backup Protection Key",
    purpose: "Encrypted backup repository",
    keyClass: "Data-encryption / recovery key",
    storage: "Managed key service + restricted recovery relationship",
    owner: "Resilience Team",
    scope: "Production backup repository",
    users: "Backup platform + approved recovery workflow",
    currentVersion: "v4 active",
    rotation: "Coordinated with quarterly recovery test",
    dependency: "Backup restore + disaster recovery",
    recovery: "Last full restore test successful",
    retirement: "Prior version retained until corresponding backup sets expire",
    evidence: "Recovery test + key inventory + retention mapping",
    status: "Confirmed",
    concern:
      "Recovery access must remain exceptional and should not become routine application access.",
  },
  {
    id: "KEY-04",
    asset: "Release Signing Key",
    purpose: "Production artifact signing",
    keyClass: "Private signing key",
    storage: "Protected signing service",
    owner: "Release Engineering",
    scope: "Approved production releases",
    users: "Release-signing workload identity",
    currentVersion: "Signer generation 3",
    rotation: "Planned next quarter",
    dependency: "Deployment verification trust",
    recovery: "Controlled replacement process",
    retirement: "Historical verification metadata retained",
    evidence: "Signer inventory + key-use audit + verification policy",
    status: "Conditional",
    concern:
      "Verifier trust transition must be rehearsed before the next signing-key rotation.",
  },
  {
    id: "KEY-05",
    asset: "Legacy Reporting Shared Key",
    purpose: "Historical report encryption",
    keyClass: "Data-encryption key",
    storage: "Copied across legacy hosts",
    owner: "Unknown",
    scope: "Multiple reporting jobs and archives",
    users: "Several legacy workloads",
    currentVersion: "Unknown",
    rotation: "No current evidence",
    dependency: "Legacy reports + archive access",
    recovery: "Unclear",
    retirement: "No defined plan",
    evidence: "Partial inventory + stale documentation",
    status: "Blocked",
    concern:
      "Unknown owner, broad copies, unclear version, and no recovery or retirement plan create an unmanaged key dependency.",
  },
  {
    id: "KEY-06",
    asset: "Partner Integration Trust Key",
    purpose: "Partner service trust",
    keyClass: "Certificate private key",
    storage: "Partner-managed protected boundary",
    owner: "Partner / Integration Owner",
    scope: "Scheduling integration only",
    users: "Partner service identity",
    currentVersion: "Current certificate key pair",
    rotation: "Renewal due in 45 days",
    dependency: "Scheduling integration trust",
    recovery: "Replacement window documented",
    retirement: "Old certificate/key trust removed after renewal validation",
    evidence: "Partner certificate + sponsor + renewal ticket",
    status: "Conditional",
    concern:
      "Current trust is valid, but renewal and relying-system transition must complete before expiration.",
  },
  {
    id: "KEY-07",
    asset: "Analytics Export Data Key",
    purpose: "Temporary protection of approved export payloads",
    keyClass: "Session / temporary data key",
    storage: "Managed short-lived key boundary",
    owner: "Analytics Platform",
    scope: "One approved export package",
    users: "Export service only",
    currentVersion: "Per-export temporary key",
    rotation: "New key per export",
    dependency: "Approved recipient transfer workflow",
    recovery: "Failed transfer is regenerated through governed export process",
    retirement: "Destroyed after transfer lifecycle closes",
    evidence: "Export job + key metadata + recipient trust record",
    status: "Confirmed",
    concern:
      "Authorization for the export remains separate from cryptographic protection.",
  },
];

const dashboardMetrics = [
  {
    label: "Key relationships reviewed",
    value: "7",
    note: "Database, service identity, backup, signing, legacy, partner, and export keys",
  },
  {
    label: "Confirmed",
    value: "4",
    note: "Modern database, service, backup, and temporary export key designs have current evidence",
  },
  {
    label: "Conditional",
    value: "2",
    note: "Signing-key transition and partner renewal require lifecycle closure",
  },
  {
    label: "Blocked",
    value: "1",
    note: "Legacy shared key has Unknown owner, version, recovery, and retirement state",
  },
];

const logs = [
  "[08:07] KEY-01 database-key version=v6 storage=MANAGED scope=DB_PROD state=CONFIRMED",
  "[08:31] KEY-02 portal-private-key custody=HARDWARE_BACKED exportable=NO state=CONFIRMED",
  "[08:55] KEY-03 backup-key version=v4 restore_test=PASS state=CONFIRMED",
  "[09:19] KEY-04 signing-key rotation=NEXT_QUARTER verifier_transition=OPEN state=CONDITIONAL",
  "[09:43] KEY-05 legacy-key owner=UNKNOWN copies=MULTIPLE version=UNKNOWN state=BLOCKED",
  "[10:07] KEY-06 partner-key renewal=45d state=CONDITIONAL",
  "[10:31] KEY-07 export-key lifetime=PER_EXPORT retirement=AUTO state=CONFIRMED",
];

const antiPatterns = [
  {
    title: "Hard-coded key material",
    problem:
      "Secret key values are embedded in source code or configuration that is copied widely.",
    better:
      "Use protected key references or managed secret/key services with narrow application access.",
  },
  {
    title: "One key reused across unrelated systems",
    problem:
      "The same key protects multiple applications, environments, or data classes.",
    better:
      "Align key scope with application, environment, purpose, and ownership.",
  },
  {
    title: "Rotation with no dependency map",
    problem:
      "Teams replace a key without knowing which systems or retained data still depend on the old version.",
    better:
      "Inventory dependencies and support version transition before retiring old keys.",
  },
  {
    title: "Recovery copy never retired",
    problem:
      "Emergency copies remain active long after the recovery event ends.",
    better:
      "Use time-bounded, auditable recovery access and post-recovery cleanup.",
  },
  {
    title: "Private key exported for convenience",
    problem:
      "A protected signing or service-identity key is copied to many hosts.",
    better:
      "Keep key operations inside the narrow protected boundary where practical.",
  },
  {
    title: "Old key versions kept forever",
    problem:
      "Historical versions accumulate without a retention or dependency reason.",
    better:
      "Retain old versions only as long as approved data or historical validation requires them.",
  },
  {
    title: "No owner after team change",
    problem:
      "A key remains active after the original team or application changes ownership.",
    better:
      "Ownership changes should trigger immediate key-governance review.",
  },
  {
    title: "Rotation considered complete after new key creation",
    problem:
      "Hidden workloads still use the old key even though a replacement exists.",
    better:
      "Verify dependency migration, monitoring, recovery, and old-key retirement before closure.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep KEY-05 Blocked until ownership, copies, versions, dependencies, recovery needs, and a modernization or retirement plan are established.",
    outcome:
      "Best. The legacy key cannot be governed safely while ownership and lifecycle remain Unknown.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Leave all existing copies in place because the legacy jobs still work.",
    outcome:
      "Risky. Operational continuity does not justify uncontrolled key copies.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Delete every old key immediately without mapping retained-data dependencies.",
    outcome:
      "Caution. Unplanned retirement could make required data inaccessible.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Rotate the signing key only after verifier trust, deployment policy, rollback, and historical-verification requirements are prepared.",
    outcome:
      "Best. Signing-key rotation requires coordination between signer and relying systems.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Create a new signing key and immediately delete the old one before testing verifier trust.",
    outcome:
      "Risky. Verification dependencies may break and historical signatures may become difficult to interpret.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Never rotate the signing key because transition is inconvenient.",
    outcome:
      "Risky. Avoiding lifecycle change creates long-term operational and security risk.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "Why are cryptographic keys considered architecture assets?",
    choices: [
      "Because they have ownership, access, storage, lifecycle, recovery, and dependency requirements.",
      "Because they should be copied to every system.",
      "Because key values belong in source code.",
      "Because keys never change.",
    ],
    answer: 0,
    explanation:
      "Keys must be governed across their entire lifecycle and dependency chain.",
  },
  {
    question:
      "What is a major benefit of a managed key service?",
    choices: [
      "It can centralize policy, access, versioning, monitoring, and rotation.",
      "It eliminates the need for ownership.",
      "It makes all keys public.",
      "It guarantees every application should use the same key.",
    ],
    answer: 0,
    explanation:
      "Managed services can reduce uncontrolled key distribution while improving lifecycle governance.",
  },
  {
    question:
      "Why is key versioning important during rotation?",
    choices: [
      "Because different data or systems may temporarily depend on different key generations.",
      "Because old keys should always be deleted immediately.",
      "Because version numbers replace access control.",
      "Because every key should have identical scope.",
    ],
    answer: 0,
    explanation:
      "Versioning supports safe transitions between old and new key material.",
  },
  {
    question:
      "What should happen before retiring an old key version?",
    choices: [
      "Verify that required data, systems, recovery workflows, and historical needs no longer depend on it.",
      "Delete it immediately after a new key exists.",
      "Copy it to more systems.",
      "Remove all lifecycle evidence.",
    ],
    answer: 0,
    explanation:
      "Retirement should follow dependency closure, not merely replacement creation.",
  },
  {
    question:
      "What is strongest for a private signing key?",
    choices: [
      "Keep custody narrow and perform signing inside a protected boundary where practical.",
      "Export it to every build server.",
      "Store it in plaintext configuration.",
      "Share it among unrelated teams.",
    ],
    answer: 0,
    explanation:
      "Narrow custody preserves signer accountability and reduces exposure.",
  },
  {
    question:
      "Why should recovery key access be tightly governed?",
    choices: [
      "Because recovery capability can become a bypass path if copies and access remain uncontrolled.",
      "Because recovery keys should never be tested.",
      "Because backups do not need encryption.",
      "Because every user should have emergency access.",
    ],
    answer: 0,
    explanation:
      "Recovery must preserve both resilience and security boundaries.",
  },
  {
    question:
      "Which statement about rotation is strongest?",
    choices: [
      "Rotation is a system change involving dependencies, versions, recovery, monitoring, and retirement.",
      "Rotation is complete as soon as a new key is created.",
      "Rotation should never occur.",
      "Rotation eliminates the need for ownership.",
    ],
    answer: 0,
    explanation:
      "Safe rotation requires a coordinated lifecycle transition.",
  },
];

const checklistItems = [
  "Every key has a named owner.",
  "Every key has one clear purpose.",
  "Key scope is limited by application, environment, data class, or operation.",
  "Raw key material is not distributed more widely than necessary.",
  "Managed key services or protected boundaries are used where appropriate.",
  "Private signing keys have narrow custody.",
  "Certificate private keys remain tied to the correct service identity.",
  "Key versions are tracked.",
  "Rotation triggers are documented.",
  "Dependent systems are mapped before rotation.",
  "Retained data is mapped to the key version required to access it.",
  "Recovery workflows are tested with current key versions.",
  "Recovery access is restricted and auditable.",
  "Old key versions are retired after dependencies close.",
  "Ownership changes trigger review.",
  "Environment boundaries are part of key scope.",
  "Legacy local keys remain visible until modernized or retired.",
  "Monitoring captures use, policy change, failed access, and rotation events.",
  "Closure evidence shows when rotation or retirement is complete.",
  "No lesson activity requires real key extraction, secret recovery, or bypassing protected key boundaries.",
];

const takeaways = [
  "Keys are sensitive architecture assets with ownership, storage, access, lifecycle, recovery, and retirement requirements.",
  "Managed key services can reduce uncontrolled key copying and improve lifecycle governance.",
  "Private signing and certificate keys should remain under narrow custody.",
  "Key scope should match application, environment, purpose, and data sensitivity.",
  "Rotation requires dependency mapping and version-aware transition.",
  "Old keys should not be retired until required data and systems no longer depend on them.",
  "Recovery keys improve resilience only when access is tightly governed and tested.",
  "Ownership changes, migrations, policy changes, and suspected exposure can all trigger rotation or review.",
  "Crypto-agility means being able to change keys or cryptographic designs without unsafe emergency work.",
  "The Key Lifecycle Register prepares you for A14.7 Common Crypto Design Mistakes.",
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

export default function KeyStorageAndRotationPage() {
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
              A14.6
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cryptography and Key Management Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A14.6
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Key Storage and Rotation
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Cryptographic protection is only as trustworthy as the lifecycle of
            the keys behind it. A strong key design answers where the key lives,
            who can use it, how broadly it is scoped, how it rotates, how
            recovery works, and when the old version can safely disappear.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional key IDs and lifecycle metadata only. It
            does not contain real keys, key values, extraction methods, secret
            recovery procedures, or instructions for bypassing protected key
            boundaries.
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
          lessonTitle="Key Storage and Rotation"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A14.6 Entry Readiness"
          items={[
            "I understand symmetric and asymmetric key relationships.",
            "I can explain private-key custody from the digital-signature and PKI lessons.",
            "I understand that certificate and data protection depend on key lifecycle.",
            "I will use only fictional key IDs, storage classes, owners, versions, and evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Key Is Not Safe Just Because Nobody Can See Its Value"
        >
          <p className="leading-8">
            A key may be hidden from humans but still be poorly governed. It may
            be accessible to too many workloads, reused across environments,
            impossible to rotate, or unavailable during recovery. Good key
            management protects both the secret material and the architecture
            around its use.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Strong key management makes ownership, storage, access, versioning, recovery, rotation, and retirement visible without exposing the key itself.
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
          eyebrow="Key Classes"
          title="Different Keys Have Different Lifecycle Responsibilities"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {keyClasses.map((item) => (
              <article
                key={item.type}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.type}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  Ownership: {item.ownership}
                </p>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Lifecycle: {item.lifecycleFocus}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Risk: {item.risk}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Storage Boundaries"
          title="Where Key Operations Live Changes the Risk Model"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {storageBoundaries.map((item) => (
              <article
                key={item.boundary}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.boundary}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.description}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Strength: {item.strength}
                </p>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  Weakness: {item.weakness}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Review: {item.reviewQuestion}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Rotation Triggers"
          title="Keys Change Because Systems and Trust Change"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {rotationTriggers.map((item) => (
              <article
                key={item.trigger}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.trigger}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Architecture impact: {item.architectureImpact}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Rotation Lifecycle"
          title="Safe Rotation Is a Coordinated Transition"
        >
          <div className="grid gap-5">
            {rotationLifecycle.map((item, index) => (
              <article
                key={item.stage}
                className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-emerald-50">
                      {item.stage}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      Goal: {item.goal}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-yellow-100">
                      Failure mode: {item.failure}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Governance Dimensions"
          title="Eight Questions That Define Key Governance"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {governanceDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.dimension}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Principles"
          title="Eight Principles for Key Storage and Rotation"
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
          title="Key Management Terms"
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
          eyebrow="Fictional Key Lifecycle Register"
          title="Seven Northbridge Key Management Records"
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
                    ["Key class", item.keyClass],
                    ["Storage", item.storage],
                    ["Owner", item.owner],
                    ["Scope", item.scope],
                    ["Authorized users", item.users],
                    ["Current version", item.currentVersion],
                    ["Rotation", item.rotation],
                    ["Dependency", item.dependency],
                    ["Recovery", item.recovery],
                    ["Retirement", item.retirement],
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
          title="Northbridge Key Lifecycle Dashboard"
          subtitle="Fictional key storage, versioning, rotation, recovery, and retirement summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Legacy Shared Key Has Unknown Ownership and Version"
          severity="High"
          time="09:43"
          source="Fictional Key Management Review"
          details="KEY-05 is copied across several legacy reporting hosts. The owner is Unknown, the current version is Unknown, rotation evidence is missing, recovery dependency is unclear, and no retirement plan exists."
          recommendation="Keep the key Blocked until copies, dependencies, ownership, version, recovery needs, and modernization or retirement are mapped."
        />

        <Section
          eyebrow="Storage vs. Access"
          title="Protected Storage Does Not Mean Every Workload Should Be Allowed to Use the Key"
        >
          <p className="leading-8">
            A key can be stored in a strong managed service and still be
            overexposed if too many applications are authorized to use it. Key
            storage and key authorization are separate architecture dimensions.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-50">
                Storage question
              </h3>
              <p className="mt-2 text-sm leading-7 text-emerald-100">
                Where does the key live, and can cryptographic operations remain
                inside a protected boundary?
              </p>
            </article>

            <article className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5">
              <h3 className="font-black text-purple-50">
                Authorization question
              </h3>
              <p className="mt-2 text-sm leading-7 text-purple-100">
                Which identities and workloads are allowed to use this key for
                which data, environment, and operation?
              </p>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Key Lifecycle Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Key Governance"
          question="What is the strongest conclusion for KEY-05?"
          evidence={[
            "The key is copied across multiple legacy hosts.",
            "The current owner is Unknown.",
            "The current key version is Unknown.",
            "Rotation evidence is missing.",
            "Recovery dependency and retirement plan are unclear.",
          ]}
          options={[
            "Confirmed because the legacy jobs still run.",
            "Blocked until ownership, copies, versions, dependencies, recovery, and modernization or retirement are mapped.",
            "Safe because the key is stored locally.",
            "Delete all copies immediately without dependency review.",
          ]}
          bestAnswer={1}
          explanation="Unknown ownership and lifecycle make the key ungoverned, but retirement still requires dependency mapping to avoid data loss."
        />

        <Section
          eyebrow="Common Key Management Mistakes"
          title="Eight Ways Key Storage and Rotation Break Down"
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
          title="Scenario Decision Lab 1 — Legacy Key Copies Across Hosts"
          scenario="A legacy reporting system uses one encryption key copied across several hosts. The key owner and current version are Unknown, but retained reports may still depend on it."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Signing-Key Rotation"
          scenario="Release Engineering is preparing to rotate its production signing key. Deployment systems currently trust the existing public verification relationship."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Key Lifecycle Register"
        >
          <p className="leading-8">
            Use fictional key IDs, storage classes, owners, scopes, versions,
            dependencies, and evidence only. Never include real key values or
            secret material.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least fifteen fictional key-lifecycle records.",
              "Give every record a stable KEY ID.",
              "Record the key purpose.",
              "Record the key class.",
              "Record storage boundary.",
              "Assign key owner.",
              "Assign application or data owner.",
              "Record environment and scope.",
              "Record authorized workloads or roles.",
              "Record current key version.",
              "Record rotation cadence or trigger.",
              "Record dependent systems.",
              "Record retained-data dependencies.",
              "Record recovery design.",
              "Record monitoring source.",
              "Record retirement criteria.",
              "Record evidence source and freshness.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, Accepted Risk, or Not Applicable.",
              "Include at least four data-encryption keys.",
              "Include at least two signing/private keys.",
              "Include at least two certificate private keys.",
              "Include at least two recovery-related keys.",
              "Include at least two temporary/session key examples.",
              "Include at least one broad legacy copied key and keep it Blocked.",
              "Add change triggers for owner, system, environment, certificate, provider, algorithm policy, incident, rotation, and service retirement.",
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
              Do not collect, reveal, export, recover, or manipulate real key
              values. Do not attempt to bypass key services, protected hardware,
              or access controls. This is key-governance architecture only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Signing-Key Rotation"
          question="What is the strongest rotation plan for KEY-04?"
          evidence={[
            "The signing key is currently valid.",
            "A replacement is planned next quarter.",
            "Deployment systems rely on the current verification trust.",
            "Historical signatures must remain interpretable.",
            "No emergency rotation is required.",
          ]}
          options={[
            "Prepare verifier trust, policy transition, rollback, and historical validation before rotating the signing key.",
            "Delete the old key before relying systems recognize the replacement.",
            "Never rotate because current signatures verify.",
            "Share the private signing key with more systems during transition.",
          ]}
          bestAnswer={0}
          explanation="Signing-key rotation is a coordinated trust transition, not just replacement of private material."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Redesign a Fictional Key Program With Poor Crypto-Agility"
        >
          <p className="leading-8">
            A fictional organization stores keys in application files, reuses
            them across environments, and avoids rotation because dependencies
            are poorly understood. Redesign the program conceptually so future
            key and policy changes are routine rather than emergencies.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Key inventory",
              "Purpose and scope",
              "Managed storage",
              "Private-key custody",
              "Workload authorization",
              "Environment separation",
              "Versioning",
              "Rotation triggers",
              "Dependency mapping",
              "Retained-data mapping",
              "Recovery testing",
              "Rollback planning",
              "Old-key retirement",
              "Ownership change triggers",
              "Monitoring and evidence",
              "Crypto-agility roadmap",
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
            A mature key program should allow an organization to replace keys,
            services, providers, and cryptographic policy without exposing raw
            secrets or discovering critical dependencies during an outage.
          </p>
        </Section>

        <DefenderChecklist
          title="A14.6 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A14.6 Mini Quiz: Key Storage and Rotation"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Key Lifecycle Register"
          prompt="Create the sixth artifact for your A14 Key-Management Design Recommendation: a fictional Key Lifecycle Register with at least fifteen records. Include KEY ID, key purpose, key class, storage boundary, key owner, application/data owner, environment, scope, authorized users/workloads, current version, rotation trigger, dependencies, retained-data dependencies, recovery, monitoring, retirement criteria, evidence, freshness, status, concern, next action, and change trigger."
          tips={[
            "Never include real key values.",
            "Use narrow key scope by application, environment, and purpose.",
            "Show versions and rotation dependencies.",
            "Include recovery and retirement criteria.",
            "Keep one broad legacy copied key Blocked.",
            "Use fictional provider-neutral metadata only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A14.7?"
        >
          <p className="leading-8">
            A14.7 focuses on Common Crypto Design Mistakes. Before continuing,
            make sure you can explain why a secure cryptographic design can fail
            because of storage, ownership, rotation, recovery, or retirement
            even when the underlying algorithm is strong.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain why key storage and key authorization are separate concerns.",
              "I can explain managed and hardware-backed key boundaries conceptually.",
              "I can describe a safe key-rotation lifecycle.",
              "I can explain why recovery and old-key retirement require dependency mapping.",
              "I can identify crypto-agility as an architecture quality.",
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
          title="How to Make the Key Lifecycle Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use key IDs, never key values",
                detail:
                  "The register should describe purpose and lifecycle without exposing secret material.",
              },
              {
                title: "Show storage boundary",
                detail:
                  "Record whether operations occur in a managed service, hardware-backed boundary, application secret store, or recovery repository.",
              },
              {
                title: "Show access scope",
                detail:
                  "List the workloads or roles allowed to use the key and the environment where use is valid.",
              },
              {
                title: "Show versions",
                detail:
                  "Make old and new generations visible during rotation and retained-data transitions.",
              },
              {
                title: "Show dependencies",
                detail:
                  "Applications, certificates, backups, archives, and verification systems can all depend on a key version.",
              },
              {
                title: "Show recovery",
                detail:
                  "Document how legitimate recovery is tested without creating uncontrolled extra copies.",
              },
              {
                title: "Show retirement criteria",
                detail:
                  "State what must be true before an old key can be disabled or destroyed.",
              },
              {
                title: "Connect forward",
                detail:
                  "A14.7 will use these lifecycle patterns to identify broader cryptographic design mistakes.",
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
            Key-management learning never requires exposing real keys
          </h2>
          <p className="mt-3 leading-7">
            Do not collect, export, reveal, recover, or attempt to extract real
            secret or private keys. Do not bypass key services, protected
            hardware, certificate custody, or access controls. All key IDs,
            versions, storage classes, and evidence in this lesson are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A14.6 Key Storage and Rotation Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a key-management model built around storage, ownership,
            scope, custody, versions, rotation, dependency mapping, recovery,
            retirement, monitoring, and crypto-agility. Next, A14.7 focuses on
            Common Crypto Design Mistakes.
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