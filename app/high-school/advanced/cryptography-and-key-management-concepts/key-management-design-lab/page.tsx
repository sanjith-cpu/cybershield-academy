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
const previousLesson = `${modulePath}/crypto-policy-and-compliance-concepts`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate protection goals, encryption models, hashing, signatures, PKI, key lifecycle, data-protection coverage, and governance into one coherent cryptography architecture review.",
  "Resolve conflicting evidence by distinguishing Confirmed, Conditional, Unknown, Blocked, Accepted Risk, and Not Applicable states across technical and governance domains.",
  "Prioritize remediation based on trust impact, data sensitivity, key or certificate scope, recoverability, lifecycle urgency, and evidence quality.",
  "Make an architecture release recommendation that explains which cryptographic risks must block approval, which can be conditionally managed, and which are acceptable only through formal governance.",
  "Produce the final Enterprise Cryptography and Key Management Review for the A14 portfolio.",
];

const reviewDomains = [
  {
    domain: "Protection goals",
    lessons: "A14.1",
    questions: [
      "Which assets need confidentiality, integrity, authenticity, or a combination?",
      "Which trust boundaries matter?",
      "Which goals are cryptographic and which depend on authorization or governance?",
    ],
    strongEvidence:
      "Asset inventory, data classification, trust-boundary map, protection requirement, owner.",
    commonConflict:
      "A control is technically strong but aimed at the wrong protection goal.",
  },
  {
    domain: "Encryption model selection",
    lessons: "A14.2",
    questions: [
      "Is symmetric, asymmetric, or hybrid encryption appropriate for the architecture problem?",
      "Is shared-secret scope narrow enough?",
      "Is public/private key ownership clear?",
    ],
    strongEvidence:
      "Encryption-model register, key scope, participants, performance need, lifecycle owner.",
    commonConflict:
      "A convenient key model creates excessive trust or difficult distribution.",
  },
  {
    domain: "Hashing and integrity",
    lessons: "A14.3",
    questions: [
      "What object needs integrity verification?",
      "Who provides the trusted reference?",
      "What happens when verification fails?",
    ],
    strongEvidence:
      "Trusted manifest, object version, digest record, verifier event, mismatch action.",
    commonConflict:
      "A hash exists but the trusted reference is stale or unowned.",
  },
  {
    domain: "Digital signatures",
    lessons: "A14.4",
    questions: [
      "Who is the signer?",
      "Where is the private signing key protected?",
      "Which relying systems verify before a sensitive action?",
    ],
    strongEvidence:
      "Signer inventory, protected signing boundary, verification logs, release authorization.",
    commonConflict:
      "A signature verifies mathematically but signer ownership or authorization is weak.",
  },
  {
    domain: "Certificates and PKI",
    lessons: "A14.5",
    questions: [
      "What identity does each certificate represent?",
      "Which issuer and trust anchor are accepted?",
      "Are renewal, revocation, and retirement current?",
    ],
    strongEvidence:
      "Certificate inventory, issuer path, trust-anchor list, owner, validity, renewal evidence.",
    commonConflict:
      "The leaf certificate is current but obsolete trust anchors remain accepted.",
  },
  {
    domain: "Key storage and lifecycle",
    lessons: "A14.6",
    questions: [
      "Where do key operations occur?",
      "Who may use each key?",
      "Can rotation and recovery happen without unsafe disruption?",
    ],
    strongEvidence:
      "Key lifecycle register, version map, workload authorization, recovery test, retirement criteria.",
    commonConflict:
      "A new key exists but hidden workloads or retained data still depend on the old key.",
  },
  {
    domain: "Crypto design mistakes",
    lessons: "A14.7",
    questions: [
      "Where is trust broader than necessary?",
      "Which legacy dependencies are unmanaged?",
      "Which controls are being asked to solve the wrong problem?",
    ],
    strongEvidence:
      "Design finding register, severity, owner, environment, lifecycle, recovery, remediation.",
    commonConflict:
      "Strong algorithms are wrapped in weak ownership, scope, or recovery architecture.",
  },
  {
    domain: "Transit and at-rest coverage",
    lessons: "A14.8",
    questions: [
      "Is sensitive data protected while moving and while stored?",
      "Are backups, exports, replicas, and temporary copies included?",
      "Does authorization remain separate?",
    ],
    strongEvidence:
      "Data Protection Coverage Matrix, path inventory, storage inventory, certificate/key owner, recovery evidence.",
    commonConflict:
      "One data state is protected while another is missing or stale.",
  },
  {
    domain: "Policy and governance",
    lessons: "A14.9",
    questions: [
      "Which policy requirement applies?",
      "What evidence proves the control objective?",
      "Which exceptions or Accepted Risks are bounded and current?",
    ],
    strongEvidence:
      "Policy mapping, control owner, evidence owner, exception record, risk owner, review cadence.",
    commonConflict:
      "A technical control is healthy but the policy exception, owner, or evidence is expired.",
  },
];

const evidenceStates = [
  {
    state: "Confirmed",
    meaning:
      "Current technical and governance evidence supports the intended cryptographic control and lifecycle.",
    releaseMeaning:
      "No material blocker remains in this domain.",
  },
  {
    state: "Conditional",
    meaning:
      "The design is substantially acceptable, but a bounded lifecycle, evidence, or remediation condition remains.",
    releaseMeaning:
      "May proceed only if the condition is explicitly owned, monitored, and time-bounded.",
  },
  {
    state: "Unknown",
    meaning:
      "Evidence is missing, stale, contradictory, or insufficient.",
    releaseMeaning:
      "Do not assume safety. Resolve evidence before relying on the control.",
  },
  {
    state: "Blocked",
    meaning:
      "A material cryptographic trust, lifecycle, recovery, or governance problem prevents approval.",
    releaseMeaning:
      "Must be remediated before release or continued operation where applicable.",
  },
  {
    state: "Accepted Risk",
    meaning:
      "A known residual risk is formally approved for a defined scope, owner, period, and review trigger.",
    releaseMeaning:
      "May proceed only within the exact approved exception or risk boundary.",
  },
  {
    state: "Not Applicable",
    meaning:
      "The control objective does not apply to this system or data scope.",
    releaseMeaning:
      "Record rationale and approving owner.",
  },
];

const architectureSystems = [
  {
    system: "Student Services Portal",
    role: "Public web application for student-support workflows",
    data: "Sensitive student support records",
    crypto:
      "Protected web transport, internal workload trust, database encryption, signed release artifacts",
    keyDependencies:
      "Portal certificate private key, database encryption key, release signing trust",
    governance:
      "Application owner + Platform Security + Data Platform",
  },
  {
    system: "Student Support Database",
    role: "Primary sensitive data store",
    data: "Sensitive support records",
    crypto:
      "Managed at-rest encryption with versioned key lifecycle",
    keyDependencies:
      "Database key v6 active; v5 retained for approved historical dependency",
    governance:
      "Data Platform + Student Services data owner",
  },
  {
    system: "Partner Scheduling Integration",
    role: "External partner data exchange",
    data: "Scheduling messages",
    crypto:
      "Partner certificate, protected service transport, encrypted application storage",
    keyDependencies:
      "Partner certificate renewal due in 45 days",
    governance:
      "Integration Owner + external partner sponsor",
  },
  {
    system: "Release Signing Service",
    role: "Signs production release artifacts",
    data: "Integrity-critical software packages",
    crypto:
      "Protected private signing key + verification trust in deployment pipeline",
    keyDependencies:
      "Signer generation 3; rotation planned next quarter",
    governance:
      "Release Engineering + deployment control owner",
  },
  {
    system: "Recovery Backup Repository",
    role: "Production backup and disaster-recovery repository",
    data: "Encrypted sensitive backup sets",
    crypto:
      "At-rest backup encryption + protected replication",
    keyDependencies:
      "Recovery key v4 active; retained versions map to older backup sets",
    governance:
      "Resilience Team",
  },
  {
    system: "Analytics Export Service",
    role: "Creates approved outbound data exports",
    data: "Sensitive report packages",
    crypto:
      "Encrypted temporary staging, protected recipient transfer, signed manifest",
    keyDependencies:
      "Per-export temporary data key + service certificate + signer trust",
    governance:
      "Analytics Product Owner + Data Governance",
  },
  {
    system: "Legacy Reporting Service",
    role: "Historical reporting application awaiting modernization",
    data: "Historical sensitive reports",
    crypto:
      "Legacy shared encryption key, old certificate trust, inconsistent transport protection",
    keyDependencies:
      "Owner Unknown for legacy key; retired CA trust remains on some hosts",
    governance:
      "Reporting Product Owner + Infrastructure Security + risk owner",
  },
];

const evidenceRecords = [
  {
    id: "CRYPTO-01",
    domain: "Protection goals",
    system: "Student Services Portal",
    claim:
      "Sensitive student-support data needs confidentiality in transit and at rest plus integrity/authenticity for production releases.",
    source:
      "Current data classification + architecture map + release policy",
    freshness: "Current",
    state: "Confirmed",
    conflict:
      "None",
    decision:
      "Protection goals are correctly separated and mapped to distinct controls.",
  },
  {
    id: "CRYPTO-02",
    domain: "Encryption model",
    system: "Student Support Database",
    claim:
      "Managed symmetric storage encryption is appropriate for high-volume database data.",
    source:
      "Current key inventory + database encryption state",
    freshness: "Current",
    state: "Confirmed",
    conflict:
      "Logical authorization is a separate issue and must not be inferred from encryption.",
    decision:
      "Encryption model is appropriate; maintain separate access review.",
  },
  {
    id: "CRYPTO-03",
    domain: "Hashing / integrity",
    system: "Student Services Release Package",
    claim:
      "Release artifact digest matches a trusted versioned manifest before deployment.",
    source:
      "Release manifest + verification event",
    freshness: "Current for version 8.4",
    state: "Confirmed",
    conflict:
      "Digest match alone does not prove signer identity.",
    decision:
      "Integrity evidence is valid when combined with signature verification.",
  },
  {
    id: "CRYPTO-04",
    domain: "Digital signature",
    system: "Release Signing Service",
    claim:
      "Production release package is signed by the approved release signer.",
    source:
      "Signer inventory + signature verification logs",
    freshness: "Current",
    state: "Conditional",
    conflict:
      "Next-quarter key rotation has not yet completed verifier-transition rehearsal.",
    decision:
      "Current signing is trusted; rotation readiness remains a release-readiness condition for the next lifecycle event.",
  },
  {
    id: "CRYPTO-05",
    domain: "PKI",
    system: "Partner Scheduling Integration",
    claim:
      "Partner service certificate currently validates under the approved partner trust relationship.",
    source:
      "Current partner certificate + sponsor record",
    freshness: "Current",
    state: "Conditional",
    conflict:
      "Certificate expires in 45 days.",
    decision:
      "Current operation may continue under monitoring; renewal must close before expiry.",
  },
  {
    id: "CRYPTO-06",
    domain: "Key lifecycle",
    system: "Student Support Database",
    claim:
      "Database key v6 is active and v5 remains available only for approved retained-data dependency.",
    source:
      "Key Lifecycle Register + restore test",
    freshness: "Current",
    state: "Confirmed",
    conflict:
      "Old-key retention could become excessive if the dependency closure date slips.",
    decision:
      "Maintain retention mapping and retire v5 when closure criteria are met.",
  },
  {
    id: "CRYPTO-07",
    domain: "Key lifecycle",
    system: "Recovery Backup Repository",
    claim:
      "Backup encryption keys are present and versioned.",
    source:
      "Current key inventory",
    freshness: "Current",
    state: "Conditional",
    conflict:
      "Last full restore test is fourteen months old.",
    decision:
      "Key inventory is current, but recoverability remains Conditional until a current restore test passes.",
  },
  {
    id: "CRYPTO-08",
    domain: "Transit / rest coverage",
    system: "Analytics Export Service",
    claim:
      "Export is protected in staging and during recipient transfer.",
    source:
      "Storage policy + recipient trust + export workflow",
    freshness: "Current",
    state: "Confirmed",
    conflict:
      "Recipient authorization must remain separate from transport trust.",
    decision:
      "Coverage is acceptable when authorization and cleanup remain enforced.",
  },
  {
    id: "CRYPTO-09",
    domain: "Governance",
    system: "Legacy Reporting Service",
    claim:
      "Legacy key storage does not meet the approved managed-key standard.",
    source:
      "Legacy key inventory + architecture exception EXC-14-04",
    freshness: "Current",
    state: "Accepted Risk",
    conflict:
      "Exception expires 2027-01-31 and modernization is incomplete.",
    decision:
      "Legacy key gap is acceptable only within the exact exception scope and until the approved expiry.",
  },
  {
    id: "CRYPTO-10",
    domain: "PKI / trust anchors",
    system: "Legacy Reporting Service",
    claim:
      "Retired internal CA is still trusted by three production hosts.",
    source:
      "Current trust-store inventory",
    freshness: "Current",
    state: "Blocked",
    conflict:
      "No approved exception covers obsolete CA trust.",
    decision:
      "Remove obsolete trust after dependency mapping and migration; this remains a blocker.",
  },
  {
    id: "CRYPTO-11",
    domain: "Key ownership",
    system: "Legacy Reporting Service",
    claim:
      "Legacy shared encryption key owner cannot be established.",
    source:
      "Partial key inventory + stale documentation",
    freshness: "Partial / stale",
    state: "Blocked",
    conflict:
      "Modernization exception does not make Unknown ownership safe.",
    decision:
      "Assign accountable ownership and map key copies/dependencies before approval.",
  },
  {
    id: "CRYPTO-12",
    domain: "Transport coverage",
    system: "Legacy Reporting Service",
    claim:
      "Some internal legacy report transfers use an old unverified transport path.",
    source:
      "Current architecture review + partial flow evidence",
    freshness: "Partial",
    state: "Blocked",
    conflict:
      "Internal network location was historically treated as sufficient trust.",
    decision:
      "Modernize transport protection and endpoint trust; internal placement is not a compensating control.",
  },
  {
    id: "CRYPTO-13",
    domain: "Integrity / signing",
    system: "Analytics Export Service",
    claim:
      "Export manifest is signed by the approved analytics export signer.",
    source:
      "Signature verification + signer inventory",
    freshness: "Current",
    state: "Confirmed",
    conflict:
      "Signature authenticity does not itself authorize release to the recipient.",
    decision:
      "Require both signed-manifest verification and export authorization.",
  },
  {
    id: "CRYPTO-14",
    domain: "Data retention",
    system: "Temporary Analytics Workspace",
    claim:
      "Temporary workspace storage is encrypted.",
    source:
      "Workspace storage configuration + project policy",
    freshness: "Current",
    state: "Conditional",
    conflict:
      "Automatic destruction evidence is still under review.",
    decision:
      "Keep Conditional until retention and cleanup evidence proves the temporary lifecycle.",
  },
];

const conflicts = [
  {
    id: "CONFLICT-01",
    title: "Current key inventory vs. stale recovery proof",
    evidenceA:
      "Backup key inventory is current and shows expected key versions.",
    evidenceB:
      "Full restore validation is fourteen months old.",
    correctInterpretation:
      "Current key metadata supports key governance, but it does not prove recoverability. Recovery remains Conditional.",
    why:
      "Different evidence sources prove different control objectives.",
  },
  {
    id: "CONFLICT-02",
    title: "Valid signature vs. future rotation readiness",
    evidenceA:
      "Current release signatures verify successfully.",
    evidenceB:
      "Verifier transition for the next signing-key rotation has not yet been rehearsed.",
    correctInterpretation:
      "Current signing trust is acceptable, but lifecycle readiness remains Conditional.",
    why:
      "Current effectiveness and future transition readiness are separate decisions.",
  },
  {
    id: "CONFLICT-03",
    title: "Approved legacy exception vs. unmanaged trust anchor",
    evidenceA:
      "EXC-14-04 allows a bounded legacy key-storage deviation through 2027-01-31.",
    evidenceB:
      "A retired CA remains trusted in production and is not covered by the exception.",
    correctInterpretation:
      "The key-storage gap may be Accepted Risk, while the obsolete trust-anchor gap remains Blocked.",
    why:
      "Exceptions apply only to their documented scope.",
  },
  {
    id: "CONFLICT-04",
    title: "Encrypted temporary workspace vs. uncertain retention",
    evidenceA:
      "Workspace storage is encrypted and project access is scoped.",
    evidenceB:
      "Automatic destruction evidence has not yet been confirmed.",
    correctInterpretation:
      "Confidentiality is strong while the data exists, but lifecycle governance remains Conditional.",
    why:
      "Encryption does not solve retention.",
  },
  {
    id: "CONFLICT-05",
    title: "Valid partner certificate vs. approaching expiry",
    evidenceA:
      "The partner certificate validates today and sponsor evidence is current.",
    evidenceB:
      "The certificate expires in 45 days.",
    correctInterpretation:
      "Current trust can remain in service under monitoring, but renewal is a time-bounded condition.",
    why:
      "Validity today does not remove lifecycle responsibility.",
  },
];

const releaseCriteria = [
  {
    criterion: "No unresolved high-impact Blocked trust paths",
    pass:
      "All retired or unauthorized trust anchors are removed or covered by valid, explicit governance.",
    fail:
      "A retired CA remains trusted without an approved exception.",
  },
  {
    criterion: "Every active key has accountable ownership",
    pass:
      "Key purpose, owner, scope, storage boundary, users, lifecycle, and dependencies are known.",
    fail:
      "A shared production key has Unknown owner or uncontrolled copies.",
  },
  {
    criterion: "Required recovery evidence is current",
    pass:
      "Protected backups and retained data can be restored under the current key lifecycle.",
    fail:
      "Only key inventory exists while restore validation is stale.",
  },
  {
    criterion: "Certificate and signer lifecycle is actively governed",
    pass:
      "Renewals and rotations have owner, timeline, verifier transition, and evidence.",
    fail:
      "An expiring certificate or planned signer rotation has no accountable transition.",
  },
  {
    criterion: "Data protection covers all meaningful states",
    pass:
      "Transit, storage, backup, export, replication, and temporary copies are mapped and governed.",
    fail:
      "A sensitive legacy flow uses unverified transport or unmanaged storage.",
  },
  {
    criterion: "Cryptographic controls do not replace authorization",
    pass:
      "Identity/access decisions remain separate for databases, exports, services, and signing workflows.",
    fail:
      "A valid certificate, signature, or encryption state is treated as blanket permission.",
  },
  {
    criterion: "Policy exceptions are valid and bounded",
    pass:
      "Every exception has exact scope, compensating controls, risk owner, expiry, and closure criteria.",
    fail:
      "A deviation exists with no valid exception or the exception has expired.",
  },
  {
    criterion: "Evidence quality supports the final recommendation",
    pass:
      "Material decisions use current, attributable, non-contradictory evidence.",
    fail:
      "High-impact claims depend on stale, missing, or Unknown evidence.",
  },
];

const remediation = [
  {
    id: "REM-01",
    priority: "P0",
    issue: "Retired CA remains trusted on three production hosts",
    owner: "Infrastructure Security",
    action:
      "Complete dependency mapping, migrate any legitimate remaining certificate relationships, remove obsolete trust anchors, and record closure evidence.",
    validation:
      "Current trust inventory shows retired CA absent from production relying systems.",
    state: "Open — Blocker",
  },
  {
    id: "REM-02",
    priority: "P0",
    issue: "Legacy shared encryption key has Unknown ownership and uncontrolled copies",
    owner: "Reporting Product Owner + Infrastructure Security",
    action:
      "Assign accountable owner, map key copies and retained-data dependencies, restrict further use, and execute the approved modernization path.",
    validation:
      "Key register has current owner, exact scope, dependency map, and migration state.",
    state: "Open — Blocker",
  },
  {
    id: "REM-03",
    priority: "P0",
    issue: "Legacy reporting transport protection is inconsistent",
    owner: "Reporting Platform Team",
    action:
      "Replace unverified internal transfer paths with approved protected service communication and current endpoint trust.",
    validation:
      "Data-flow evidence shows protected transport for all sensitive legacy transfer paths.",
    state: "Open — Blocker",
  },
  {
    id: "REM-04",
    priority: "P1",
    issue: "Recovery restore validation is stale",
    owner: "Resilience Team",
    action:
      "Perform an authorized full recovery validation using the current key-version and backup lifecycle, then refresh evidence.",
    validation:
      "Current restore evidence confirms required backup sets and key versions are usable.",
    state: "Open — Conditional",
  },
  {
    id: "REM-05",
    priority: "P1",
    issue: "Partner certificate renewal due in 45 days",
    owner: "Integration Owner",
    action:
      "Complete certificate renewal, relying-system validation, and old-trust retirement before expiry.",
    validation:
      "Replacement certificate is current and old relationship is retired after validation.",
    state: "Open — Conditional",
  },
  {
    id: "REM-06",
    priority: "P1",
    issue: "Signing-key rotation transition has not been rehearsed",
    owner: "Release Engineering",
    action:
      "Validate new verifier trust, deployment policy, rollback, and historical-signature handling before rotation.",
    validation:
      "Controlled rehearsal proves signer and verifier transition without breaking release verification.",
    state: "Open — Conditional",
  },
  {
    id: "REM-07",
    priority: "P2",
    issue: "Temporary analytics workspace destruction evidence incomplete",
    owner: "Data Science Platform",
    action:
      "Verify automated cleanup and retention closure for temporary encrypted workspaces.",
    validation:
      "Lifecycle evidence shows expired workspaces and data copies are removed according to policy.",
    state: "Open — Conditional",
  },
  {
    id: "REM-08",
    priority: "P2",
    issue: "Database old-key version remains retained",
    owner: "Data Platform",
    action:
      "Track retained-data dependency and retire key v5 once closure criteria are met.",
    validation:
      "No required data depends on v5 and retirement is recorded.",
    state: "Monitor",
  },
];

const decisionBoard = [
  {
    area: "Protection goals",
    state: "Confirmed",
    evidence: "Current classification + architecture map",
    blocker: "No",
    decision:
      "Distinct confidentiality, integrity, authenticity, and authorization goals are mapped correctly.",
  },
  {
    area: "Encryption model selection",
    state: "Confirmed",
    evidence: "Current model and key-scope register",
    blocker: "No",
    decision:
      "Primary modern systems use defensible symmetric/asymmetric/hybrid patterns.",
  },
  {
    area: "Integrity and signatures",
    state: "Conditional",
    evidence: "Current verification + future rotation condition",
    blocker: "No",
    decision:
      "Current release trust is sound; rotation readiness must close before the lifecycle event.",
  },
  {
    area: "PKI",
    state: "Blocked",
    evidence: "Retired CA still trusted in production",
    blocker: "Yes",
    decision:
      "Obsolete trust anchor must be removed.",
  },
  {
    area: "Key storage and lifecycle",
    state: "Blocked",
    evidence: "Legacy shared key owner Unknown",
    blocker: "Yes",
    decision:
      "Modern key program is strong, but unmanaged legacy key trust prevents approval.",
  },
  {
    area: "Transit / at-rest coverage",
    state: "Blocked",
    evidence: "Legacy transfer path inconsistent",
    blocker: "Yes",
    decision:
      "Modern data flows are well protected; legacy sensitive transit remains unacceptable.",
  },
  {
    area: "Recovery",
    state: "Conditional",
    evidence: "Restore evidence fourteen months old",
    blocker: "No",
    decision:
      "Must refresh recovery proof before full confidence.",
  },
  {
    area: "Governance / policy",
    state: "Conditional",
    evidence: "Legacy key exception valid; other legacy PKI gap not covered",
    blocker: "No for exception, Yes for uncovered PKI gap",
    decision:
      "Governance works when scoped precisely; exception cannot be stretched to unrelated trust problems.",
  },
  {
    area: "Overall release recommendation",
    state: "HOLD",
    evidence: "Three P0 cryptographic architecture blockers remain",
    blocker: "Yes",
    decision:
      "Do not approve full enterprise cryptography posture until REM-01, REM-02, and REM-03 close.",
  },
];

const dashboardMetrics = [
  {
    label: "Architecture domains",
    value: "9",
    note: "Protection goals through governance reviewed across A14.1–A14.9",
  },
  {
    label: "Evidence records",
    value: "14",
    note: "Current, Conditional, Accepted Risk, and Blocked evidence integrated",
  },
  {
    label: "P0 blockers",
    value: "3",
    note: "Retired CA trust, unowned legacy shared key, and inconsistent legacy transport",
  },
  {
    label: "Final recommendation",
    value: "HOLD",
    note: "Modern architecture is strong, but unresolved legacy trust paths block approval",
  },
];

const logs = [
  "[08:11] CRYPTO-01 goals system=STUDENT_PORTAL state=CONFIRMED",
  "[08:35] CRYPTO-04 signing current=TRUSTED rotation_rehearsal=OPEN state=CONDITIONAL",
  "[08:59] CRYPTO-05 partner-cert valid=YES expiry=45d state=CONDITIONAL",
  "[09:23] CRYPTO-07 recovery key_inventory=CURRENT restore_test_age=14mo state=CONDITIONAL",
  "[09:47] CRYPTO-09 legacy-key exception=VALID state=ACCEPTED_RISK",
  "[10:11] CRYPTO-10 retired-ca trusted_hosts=3 exception=NONE state=BLOCKED",
  "[10:35] CRYPTO-11 legacy-key owner=UNKNOWN copies=MULTIPLE state=BLOCKED",
  "[10:59] CRYPTO-12 legacy-transit protection=INCONSISTENT state=BLOCKED",
  "[11:23] DECISION overall=HOLD p0_blockers=3 conditional_items=4 accepted_risk=1",
];

const antiPatterns = [
  {
    title: "Averages hide blockers",
    problem:
      "Most domains are healthy, so reviewers average the results and ignore one critical Blocked trust path.",
    better:
      "Treat material blockers independently of the overall percentage of healthy controls.",
  },
  {
    title: "Exception scope is stretched",
    problem:
      "A valid exception for one key-storage issue is used to justify unrelated certificate or transport gaps.",
    better:
      "Apply exceptions only to the exact documented requirement and scope.",
  },
  {
    title: "Current control hides future lifecycle risk",
    problem:
      "A certificate or signing key works today, so renewal or rotation readiness is ignored.",
    better:
      "Separate current effectiveness from lifecycle readiness.",
  },
  {
    title: "Technical evidence overrides governance",
    problem:
      "A valid key or certificate is treated as sufficient despite Unknown ownership or expired risk approval.",
    better:
      "Require both technical and governance evidence for material decisions.",
  },
  {
    title: "Governance evidence overrides technical failure",
    problem:
      "A policy exception is treated as proof that the underlying control is healthy.",
    better:
      "Keep the technical state visible even when risk is formally accepted.",
  },
  {
    title: "Recovery is deferred",
    problem:
      "Teams assume backups are safe because encryption and key inventory are current.",
    better:
      "Require current restore evidence for recovery-related control objectives.",
  },
  {
    title: "Legacy systems disappear from scope",
    problem:
      "Modern systems score well because difficult legacy trust paths are omitted from the review.",
    better:
      "Keep legacy dependencies visible until migration or retirement is complete.",
  },
  {
    title: "Remediation lacks validation",
    problem:
      "A ticket is closed because work was attempted, not because evidence proves the risk changed.",
    better:
      "Every remediation should have objective closure evidence.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Issue an overall HOLD because the retired CA, unowned legacy key, and inconsistent sensitive transport are independent P0 blockers.",
    outcome:
      "Best. Strong modern controls do not cancel unresolved high-impact legacy trust paths.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Approve because six of nine review domains are Confirmed or Conditional.",
    outcome:
      "Risky. Architecture decisions should not average away critical Blocked trust paths.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Treat every legacy issue as Accepted Risk because one valid legacy exception exists.",
    outcome:
      "Risky. Exceptions apply only to their explicit scope.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep the backup domain Conditional until a current authorized restore test proves recovery with the present key lifecycle.",
    outcome:
      "Best. Current encryption and key inventory do not establish current recoverability.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark recovery Confirmed because all backup files are encrypted.",
    outcome:
      "Risky. Confidentiality and recoverability are different objectives.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Create permanent extra recovery key copies to reduce uncertainty.",
    outcome:
      "Risky. Uncontrolled recovery copies create new custody risk.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What should an integrated cryptography architecture review do first?",
    choices: [
      "Identify protection goals, systems, data, trust boundaries, owners, and cryptographic dependencies.",
      "Choose the strongest-sounding algorithm.",
      "Ignore legacy systems.",
      "Approve all current certificates.",
    ],
    answer: 0,
    explanation:
      "Architecture review begins with what needs protection and how trust is structured.",
  },
  {
    question:
      "What is the strongest interpretation when current backup key inventory exists but restore evidence is stale?",
    choices: [
      "Recovery remains Conditional until current restore evidence exists.",
      "Recovery is Confirmed because the key exists.",
      "Encryption automatically proves recoverability.",
      "Delete old key versions immediately.",
    ],
    answer: 0,
    explanation:
      "Key governance and recoverability are related but distinct control objectives.",
  },
  {
    question:
      "Can a valid exception for legacy key storage automatically cover a retired CA trust issue?",
    choices: [
      "No. Exceptions apply only to their explicit requirement and scope.",
      "Yes. One exception covers the entire system.",
      "Yes, if the system is old.",
      "Yes, if both issues involve cryptography.",
    ],
    answer: 0,
    explanation:
      "Exception scope must remain precise.",
  },
  {
    question:
      "Why can an overall architecture decision be HOLD even when most modern systems are strong?",
    choices: [
      "A small number of high-impact Blocked trust paths can prevent safe approval.",
      "Because every Conditional issue is automatically a blocker.",
      "Because no cryptographic design can ever be approved.",
      "Because legacy systems should always be deleted immediately.",
    ],
    answer: 0,
    explanation:
      "Material blockers are evaluated by impact, not averaged against healthy controls.",
  },
  {
    question:
      "What makes a remediation item complete?",
    choices: [
      "Objective validation evidence shows the architecture risk actually changed.",
      "A ticket exists.",
      "Someone says the issue is fixed.",
      "The issue is old.",
    ],
    answer: 0,
    explanation:
      "Closure evidence should prove the control state changed.",
  },
  {
    question:
      "Which statement about current signing trust and future rotation is strongest?",
    choices: [
      "Current signing can be trusted while rotation readiness remains Conditional.",
      "A future rotation concern means current signatures are automatically invalid.",
      "Current signatures mean rotation never needs planning.",
      "The private signing key should be copied widely during rotation.",
    ],
    answer: 0,
    explanation:
      "Current effectiveness and lifecycle readiness can have different states.",
  },
  {
    question:
      "What is the strongest final-review principle?",
    choices: [
      "Combine technical evidence, governance evidence, lifecycle, recovery, scope, exceptions, and remediation into an explicit decision.",
      "Check only whether encryption is enabled.",
      "Treat every legacy issue as Accepted Risk.",
      "Ignore evidence freshness.",
    ],
    answer: 0,
    explanation:
      "An integrated architecture decision considers the whole cryptographic trust lifecycle.",
  },
];

const checklistItems = [
  "All nine A14 review domains are represented.",
  "Protection goals are explicit.",
  "Symmetric, asymmetric, and hybrid relationships are correctly distinguished.",
  "Hashing is not confused with encryption.",
  "Signatures are not confused with confidentiality or authorization.",
  "Certificate trust includes issuer, trust anchor, and private-key ownership.",
  "Every active key has owner, scope, version, and lifecycle state.",
  "Key storage and key authorization are separately reviewed.",
  "Rotation includes dependency and rollback considerations.",
  "Recovery is supported by current evidence.",
  "Transit and at-rest coverage are separately mapped.",
  "Backups, exports, replicas, archives, and temporary data are included.",
  "Policy requirements map to technical and governance evidence.",
  "Exceptions are exact, time-bounded, and owned.",
  "Accepted Risk is not used as a synonym for Unknown or ignored.",
  "Retired or obsolete trust remains visible until closed.",
  "Conflicting evidence is explicitly reconciled.",
  "P0 blockers cannot be averaged away.",
  "Every remediation has validation evidence and an owner.",
  "No activity requires real keys, secrets, private data, certificate manipulation, traffic interception, cracking, or unauthorized system access.",
];

const takeaways = [
  "Enterprise cryptography is a system of protection goals, keys, certificates, signatures, data paths, storage boundaries, lifecycle, and governance.",
  "Technical correctness and governance correctness are both required for trustworthy cryptographic architecture.",
  "Current effectiveness and future lifecycle readiness can have different decision states.",
  "Exceptions apply only to their explicit scope.",
  "Accepted Risk is formal, bounded, owned, and reviewable.",
  "Recovery requires current evidence, not just current key inventory.",
  "Legacy cryptographic trust must remain visible until modernization or retirement closes it.",
  "Material blockers should not be averaged away by a mostly healthy architecture.",
  "Remediation is complete only when validation evidence proves the risk changed.",
  "The final Enterprise Cryptography and Key Management Review prepares you for the A14 Module Test.",
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
        Module Test
      </Link>
    </div>
  );
}

export default function KeyManagementDesignLabPage() {
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
              A14.10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cryptography and Key Management Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A14.10
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Key Management Design Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This capstone lesson combines every A14 concept into one enterprise
            architecture decision. You will review what needs protection, how
            cryptographic trust is implemented, whether key and certificate
            lifecycle is healthy, how recovery works, which evidence conflicts,
            and whether the overall design is ready for approval.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            The entire lab uses fictional architecture records and metadata.
            There are no real keys, secrets, credentials, encrypted files,
            certificate stores, production systems, or offensive cryptographic
            tasks.
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
          lessonTitle="Key Management Design Lab"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A14.10 Capstone Readiness"
          items={[
            "I can distinguish protection goals, encryption models, hashing, signatures, certificates, and authorization.",
            "I can evaluate key ownership, storage, rotation, recovery, and retirement.",
            "I can follow sensitive data across transit, rest, backup, export, replication, and temporary storage.",
            "I can evaluate policy evidence, exceptions, Accepted Risk, and residual risk.",
            "I will use only fictional systems, key IDs, certificate records, and synthetic evidence.",
          ]}
        />

        <Section
          eyebrow="Capstone Mindset"
          title="Your Job Is to Make a Defensible Architecture Decision"
        >
          <p className="leading-8">
            A mature architecture review does not ask whether the system uses
            cryptography. It asks whether each cryptographic relationship is
            appropriate, owned, scoped, recoverable, lifecycle-managed, and
            supported by current evidence.
          </p>

          <p className="mt-4 leading-8">
            This lab also requires you to resist a common mistake: treating a
            mostly healthy architecture as automatically acceptable. A single
            high-impact trust path can justify a HOLD even when many other
            controls are strong.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Final decisions should be traceable from protection goal → cryptographic relationship → evidence → state → remediation → validation → governance decision.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for the Final A14 Lab"
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
          eyebrow="Integrated Review"
          title="Nine Architecture Domains From A14.1–A14.9"
        >
          <div className="grid gap-6">
            {reviewDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-black text-white">
                    {item.domain}
                  </h3>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.lessons}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Review questions
                    </p>
                    <ul className="mt-2 space-y-2 text-sm leading-7 text-blue-50">
                      {item.questions.map((question) => (
                        <li key={question}>• {question}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Strong evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.strongEvidence}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Common evidence conflict
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.commonConflict}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence States"
          title="Use Decision States Consistently"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.state}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Release meaning: {item.releaseMeaning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional Enterprise Context"
          title="Northbridge Systems Under Review"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {architectureSystems.map((item) => (
              <article
                key={item.system}
                className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6"
              >
                <h3 className="text-xl font-black text-purple-50">
                  {item.system}
                </h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  Role: {item.role}
                </p>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Data: {item.data}
                </p>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Crypto: {item.crypto}
                </p>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  Dependencies: {item.keyDependencies}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Governance: {item.governance}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Integrated Evidence"
          title="Fourteen Cryptography Evidence Records"
        >
          <div className="grid gap-5">
            {evidenceRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.domain}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.state}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.system}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Claim", item.claim],
                    ["Source", item.source],
                    ["Freshness", item.freshness],
                    ["Conflict", item.conflict],
                    ["Decision", item.decision],
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
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Enterprise Cryptography Review Dashboard"
          subtitle="Fictional integrated A14 architecture state"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Three P0 Cryptography Architecture Blockers Prevent Approval"
          severity="High"
          time="11:23"
          source="Fictional Enterprise Cryptography Review"
          details="The final review identifies three independent blockers: retired CA trust remains active on production hosts, the legacy shared encryption key has Unknown ownership and uncontrolled copies, and sensitive legacy reporting traffic uses inconsistent protected transport."
          recommendation="Issue a HOLD until REM-01, REM-02, and REM-03 have objective closure evidence."
        />

        <Section
          eyebrow="Conflicting Evidence"
          title="Do Not Force Conflicting Evidence Into One Simplistic Answer"
        >
          <p className="leading-8">
            Mature reviews often contain evidence that looks contradictory only
            because it measures different parts of the architecture. Your job is
            to identify what each source actually proves.
          </p>

          <div className="mt-6 grid gap-5">
            {conflicts.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-yellow-300/30 px-3 py-1 font-mono text-xs font-black text-yellow-100">
                    {item.id}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-black text-yellow-50">
                  {item.title}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Evidence A
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.evidenceA}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Evidence B
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.evidenceB}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Correct interpretation
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.correctInterpretation}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white">
                    Why: {item.why}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Enterprise Cryptography Decision Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Valid Exception, Separate Blocked Trust"
          question="How should the review treat the legacy key exception and the retired CA trust issue?"
          evidence={[
            "EXC-14-04 explicitly covers the legacy managed-key storage requirement.",
            "The exception expires 2027-01-31.",
            "Compensating controls and a risk owner are documented.",
            "A retired CA remains trusted on three production hosts.",
            "The exception does not mention the retired CA or PKI trust-anchor requirement.",
          ]}
          options={[
            "Treat the key-storage gap as Accepted Risk within its exact scope, but keep the retired CA trust Blocked.",
            "Treat both issues as Accepted Risk because they affect the same system.",
            "Mark both Confirmed because an exception exists.",
            "Ignore the retired CA because the key-storage exception is current.",
          ]}
          bestAnswer={0}
          explanation="Exceptions are requirement- and scope-specific. Governance should not stretch one accepted deviation across unrelated cryptographic trust gaps."
        />

        <Section
          eyebrow="Release Criteria"
          title="What Must Be True Before Approval?"
        >
          <div className="grid gap-5">
            {releaseCriteria.map((item, index) => (
              <article
                key={item.criterion}
                className="rounded-3xl border border-blue-400/20 bg-blue-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                    {index + 1}
                  </span>

                  <div className="w-full">
                    <h3 className="text-xl font-black text-blue-50">
                      {item.criterion}
                    </h3>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                          Pass
                        </p>
                        <p className="mt-2 text-sm leading-7 text-emerald-50">
                          {item.pass}
                        </p>
                      </div>

                      <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                          Fail
                        </p>
                        <p className="mt-2 text-sm leading-7 text-red-50">
                          {item.fail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Remediation"
          title="Prioritize Work by Trust Impact and Validation Evidence"
        >
          <div className="grid gap-5">
            {remediation.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-xs font-black text-red-100">
                    {item.priority}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.state}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.issue}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Owner
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.owner}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Action
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.action}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Validation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.validation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision Board"
          title="Final Enterprise Cryptography Architecture Recommendation"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-3 text-left">
              <thead>
                <tr className="text-xs uppercase tracking-[0.15em] text-slate-400">
                  <th className="px-4 py-2">Area</th>
                  <th className="px-4 py-2">State</th>
                  <th className="px-4 py-2">Evidence</th>
                  <th className="px-4 py-2">Blocker</th>
                  <th className="px-4 py-2">Decision</th>
                </tr>
              </thead>
              <tbody>
                {decisionBoard.map((item) => (
                  <tr key={item.area} className="bg-slate-950">
                    <td className="rounded-l-xl border-y border-l border-slate-700 px-4 py-4 font-black text-white">
                      {item.area}
                    </td>
                    <td className="border-y border-slate-700 px-4 py-4 text-cyan-100">
                      {item.state}
                    </td>
                    <td className="border-y border-slate-700 px-4 py-4 text-slate-300">
                      {item.evidence}
                    </td>
                    <td className="border-y border-slate-700 px-4 py-4 text-yellow-100">
                      {item.blocker}
                    </td>
                    <td className="rounded-r-xl border-y border-r border-slate-700 px-4 py-4 text-slate-300">
                      {item.decision}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-red-400/30 bg-red-400/10 p-6 text-red-50">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
              Final recommendation
            </p>
            <p className="mt-2 text-2xl font-black">HOLD</p>
            <p className="mt-3 leading-7">
              The modern cryptography architecture is strong across most
              domains, but three P0 legacy trust problems remain: obsolete CA
              trust, an unowned shared encryption key, and inconsistent
              protected transport. These are independent blockers and should be
              closed before full enterprise approval.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Overall Release Recommendation"
          question="What is the strongest final decision for this fictional architecture?"
          evidence={[
            "Modern portal, database, export, and release controls are largely strong.",
            "A retired CA remains trusted on three production hosts.",
            "A shared legacy encryption key has Unknown owner and uncontrolled copies.",
            "Sensitive legacy report transfers use inconsistent protected transport.",
            "One bounded legacy key-storage exception is valid but does not cover the retired CA or transport gap.",
            "Recovery and several lifecycle items remain Conditional.",
          ]}
          options={[
            "HOLD until the three P0 Blocked cryptographic trust issues have closure evidence.",
            "Approve because most systems are healthy.",
            "Treat every legacy issue as Accepted Risk.",
            "Approve because encryption is enabled across the modern environment.",
          ]}
          bestAnswer={0}
          explanation="Material trust blockers should drive the release decision even when most modern controls are healthy."
        />

        <Section
          eyebrow="Review Anti-Patterns"
          title="Eight Ways a Capstone Decision Can Go Wrong"
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
          title="Scenario Decision Lab 1 — Strong Modern Crypto, Three Legacy Blockers"
          scenario="The enterprise review shows strong modern encryption, PKI, signing, and key management, but three high-impact legacy trust problems remain unresolved."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Current Key Inventory, Stale Recovery Proof"
          scenario="The backup platform shows current encryption keys and healthy backup creation, but the last full restore validation is fourteen months old."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Capstone Lab"
          title="Produce an Enterprise Cryptography and Key Management Review"
        >
          <p className="leading-8">
            Build the final A14 portfolio artifact using only fictional systems,
            key IDs, certificate metadata, evidence records, policy records, and
            risk decisions. The deliverable should read like a professional
            architecture review, not a collection of isolated lesson exercises.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Define the enterprise scope and business context.",
              "List all important systems, data classes, services, partners, backups, exports, and legacy components.",
              "Map confidentiality, integrity, authenticity, authorization, and recovery goals.",
              "Map symmetric, asymmetric, and hybrid encryption relationships.",
              "Map hashing/integrity controls and trusted references.",
              "Map signer identities and digital-signature trust.",
              "Map certificate subjects, issuers, trust anchors, and relying systems.",
              "Map key classes, owners, storage boundaries, versions, and authorized workloads.",
              "Map rotation, renewal, revocation, recovery, and retirement triggers.",
              "Map encryption in transit.",
              "Map encryption at rest.",
              "Include backups, replication, exports, archives, and temporary storage.",
              "Map policy and standard requirements.",
              "Map technical evidence and governance evidence separately.",
              "Classify every domain and material finding.",
              "Create at least twenty-five integrated evidence records.",
              "Create at least five explicit evidence conflicts.",
              "Explain what each conflicting source actually proves.",
              "Create release criteria.",
              "Identify P0, P1, and P2 remediation.",
              "Assign owners to every remediation.",
              "Define objective validation evidence for closure.",
              "List all active exceptions and Accepted Risks.",
              "Verify exception scope, owner, expiry, compensating controls, and closure criteria.",
              "Identify the three highest residual risks.",
              "Write a final APPROVE, CONDITIONAL APPROVAL, or HOLD recommendation.",
              "Explain exactly what evidence would change that recommendation.",
              "Add change triggers for data classification, owner, environment, provider, algorithm policy, key version, certificate, signer, trust anchor, recovery, incident, and exception expiry.",
              "Include a one-page executive summary.",
              "Include a technical evidence appendix.",
              "Include a governance and exception appendix.",
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
            <p className="font-black">Capstone safety boundary</p>
            <p className="mt-2 leading-7">
              Do not collect, expose, recover, extract, or manipulate real keys,
              secrets, certificates, trust stores, encrypted files, or private
              organizational data. Do not intercept traffic, crack encryption,
              forge signatures, or test live systems. The entire capstone is
              fictional and defensive.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Advanced Challenge"
          title="Create an Executive and Technical Decision Package"
        >
          <p className="leading-8">
            A strong senior security architect can communicate the same
            cryptography decision at two levels. Build both views.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6">
              <h3 className="text-xl font-black text-purple-50">
                Executive view
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-purple-100">
                <li>• Business scope and sensitive assets</li>
                <li>• Overall architecture recommendation</li>
                <li>• Top three cryptographic risks</li>
                <li>• Highest-priority remediation</li>
                <li>• Accepted Risks and exception expiries</li>
                <li>• What must happen before approval changes</li>
              </ul>
            </article>

            <article className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
              <h3 className="text-xl font-black text-cyan-50">
                Technical view
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-cyan-100">
                <li>• Crypto architecture inventory</li>
                <li>• Key/certificate/signing lifecycle</li>
                <li>• Transit and at-rest coverage</li>
                <li>• Evidence conflicts and resolution</li>
                <li>• Remediation validation criteria</li>
                <li>• Detailed decision-state matrix</li>
              </ul>
            </article>
          </div>

          <p className="mt-6 leading-8">
            The two views should never contradict each other. The executive
            summary should be a faithful compression of the technical evidence,
            not a softer version of the risk.
          </p>
        </Section>

        <DefenderChecklist
          title="A14.10 Capstone Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A14.10 Mini Quiz: Key Management Design Lab"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Final Portfolio Build — Enterprise Cryptography and Key Management Review"
          prompt="Create the final A14 portfolio artifact: an Enterprise Cryptography and Key Management Review integrating your A14.1–A14.9 work. Include scope, systems, protection goals, encryption models, integrity controls, signer trust, PKI, key lifecycle, design mistakes, transit/rest coverage, governance, evidence states, conflicts, release criteria, remediation priorities, exceptions, Accepted Risks, residual risk, validation evidence, and a final APPROVE, CONDITIONAL APPROVAL, or HOLD recommendation."
          tips={[
            "Use one integrated architecture story rather than nine disconnected sections.",
            "Preserve evidence conflicts instead of hiding them.",
            "Do not let a valid exception cover unrelated risks.",
            "Use P0/P1/P2 remediation with objective closure evidence.",
            "Include both executive and technical views.",
            "Use fictional provider-neutral architecture only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the A14 Module Test?"
        >
          <p className="leading-8">
            The module test will assess the entire A14 progression. You should
            be able to reason from a protection goal to a cryptographic control,
            then through trust, key lifecycle, evidence, recovery, policy, and a
            final architecture decision.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain symmetric, asymmetric, and hybrid encryption by architecture purpose.",
              "I can distinguish hashing, salting, signing, certificates, and encryption.",
              "I can evaluate PKI and key lifecycle without exposing secrets.",
              "I can follow sensitive data across transit, rest, backup, export, and recovery.",
              "I can resolve conflicting evidence and make an explicit cryptography architecture recommendation.",
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
          title="How to Make the Final A14 Review Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Start with scope and decision",
                detail:
                  "Tell the reader what environment is reviewed and whether your conclusion is APPROVE, CONDITIONAL APPROVAL, or HOLD.",
              },
              {
                title: "Trace each claim to evidence",
                detail:
                  "Key, certificate, signer, recovery, transport, storage, and policy claims should point to current evidence records.",
              },
              {
                title: "Show conflicting evidence",
                detail:
                  "Explain why one source may be Confirmed while a related lifecycle or recovery source remains Conditional.",
              },
              {
                title: "Keep blockers visible",
                detail:
                  "Do not bury P0 issues beneath a large number of healthy findings.",
              },
              {
                title: "Respect exception scope",
                detail:
                  "Show precisely which requirement each exception covers and what it does not cover.",
              },
              {
                title: "Use objective closure evidence",
                detail:
                  "A remediation is not complete until current evidence proves the trust state changed.",
              },
              {
                title: "Separate executive and technical detail",
                detail:
                  "Executives need risk and decision clarity; technical reviewers need evidence and lifecycle depth.",
              },
              {
                title: "Connect to the module test",
                detail:
                  "Use this review as your primary study artifact for the 25-question A14 assessment.",
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
            Capstone Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Enterprise crypto review is about architecture evidence—not breaking cryptography
          </h2>
          <p className="mt-3 leading-7">
            Do not extract or recover real keys, inspect private key material,
            crack encryption, forge signatures, alter trust stores, bypass
            certificate validation, capture protected traffic, access encrypted
            data, or test real systems without authorization. All architecture,
            evidence, keys, certificates, logs, and findings in this lab are
            fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A14.10 Key Management Design Lab Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You have now completed all ten A14 lessons and produced the final
            Enterprise Cryptography and Key Management Review. The next page is
            the A14 Module Test with 25 questions covering the full module.
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