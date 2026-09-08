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
const previousLesson = `${modulePath}/key-storage-and-rotation`;
const nextLesson = `${modulePath}/encryption-in-transit-and-at-rest`;

const objectives = [
  "Recognize common cryptographic design mistakes as architecture and governance failures rather than merely algorithm-selection problems.",
  "Evaluate fictional crypto designs for protection goal, key ownership, trust boundary, lifecycle, environment scope, recovery, monitoring, and evidence quality.",
  "Distinguish implementation convenience from defensible cryptographic architecture, especially around shared keys, hard-coded secrets, broad trust, and unmanaged legacy dependencies.",
  "Recommend safer redesigns for fictional systems without teaching bypasses, exploitation, key extraction, or cryptographic attacks.",
  "Build a Crypto Design Mistake Review that becomes the seventh artifact in the A14 Key-Management Design Recommendation.",
];

const mistakeFamilies = [
  {
    family: "Wrong protection goal",
    description:
      "The team applies cryptography without clearly stating whether the actual need is confidentiality, integrity, authenticity, trust, or lifecycle control.",
    signs: [
      "Hashing is described as encryption.",
      "Signing is described as confidentiality.",
      "Encryption is expected to replace authorization.",
      "A certificate is treated as permission to access every resource.",
    ],
    impact:
      "The control may be technically present while failing to solve the real security problem.",
    redesign:
      "State the security goal first, then select the cryptographic control that actually supports that goal.",
  },
  {
    family: "Weak key ownership",
    description:
      "Keys exist but no current owner is accountable for scope, rotation, recovery, or retirement.",
    signs: [
      "Key owner is Unknown.",
      "Several teams believe someone else owns rotation.",
      "Legacy keys remain active after service ownership changes.",
      "Recovery copies have no expiry owner.",
    ],
    impact:
      "Unowned keys become difficult to rotate, investigate, retire, or recover safely.",
    redesign:
      "Assign a named key owner plus application/data owner and define lifecycle triggers.",
  },
  {
    family: "Overbroad trust",
    description:
      "One key, certificate, issuer, or trust anchor is accepted across more systems or environments than necessary.",
    signs: [
      "Development certificates are trusted in production.",
      "One symmetric key protects unrelated applications.",
      "Every internal CA is trusted everywhere.",
      "One private signing key represents several independent publishers.",
    ],
    impact:
      "A problem in one trust domain can affect unrelated systems.",
    redesign:
      "Reduce scope by application, environment, purpose, owner, and relying relationship.",
  },
  {
    family: "Unmanaged lifecycle",
    description:
      "The design works today but has no credible plan for rotation, renewal, revocation, migration, or retirement.",
    signs: [
      "Hard-coded key references.",
      "Certificate renewal tested only after failure.",
      "Old key versions kept indefinitely.",
      "No historical-validation plan for signing-key rotation.",
    ],
    impact:
      "Routine lifecycle events become outages or emergency exceptions.",
    redesign:
      "Design versioning, dependency mapping, transition, rollback, evidence, and retirement before production use.",
  },
  {
    family: "Weak recovery architecture",
    description:
      "Protected data cannot be restored safely, or recovery creates uncontrolled extra key access.",
    signs: [
      "Encrypted backups are never restored in tests.",
      "Recovery keys exist but nobody knows whether they still work.",
      "Emergency copies become permanent.",
      "Old keys are deleted before retained data ages out.",
    ],
    impact:
      "The organization may choose between data loss and unsafe emergency access.",
    redesign:
      "Test recovery with current key versions, bound access, evidence, cleanup, and retained-data mapping.",
  },
  {
    family: "Stale trust evidence",
    description:
      "The design is considered safe because of an old review rather than current ownership and lifecycle evidence.",
    signs: [
      "Certificate inventory is months out of date.",
      "Key owner changed but register was never updated.",
      "Retired trust anchors remain installed.",
      "No current verification logs exist.",
    ],
    impact:
      "Teams may confirm controls that no longer match reality.",
    redesign:
      "Use current inventory, lifecycle status, source health, owner confirmation, and review triggers.",
  },
];

const designMistakes = [
  {
    mistake: "Hard-coded secrets",
    whyItFails:
      "Secrets embedded in code or configuration can be duplicated across repositories, builds, hosts, and environments.",
    strongerDesign:
      "Reference a protected secret or key service and grant only the workload access it requires.",
    evidence:
      "Secret reference, workload identity, access policy, deployment metadata, rotation record.",
  },
  {
    mistake: "One key for multiple environments",
    whyItFails:
      "Development, staging, and production become part of one shared trust boundary.",
    strongerDesign:
      "Use environment-specific key scope and ownership.",
    evidence:
      "Environment field, key ID, workload scope, access policy, inventory.",
  },
  {
    mistake: "One certificate for unrelated services",
    whyItFails:
      "Identity binding becomes vague and service trust is harder to reason about.",
    strongerDesign:
      "Use certificates that map clearly to the intended service or workload identity.",
    evidence:
      "Subject identity, relying systems, issuer, owner, environment.",
  },
  {
    mistake: "Shared private signing key",
    whyItFails:
      "Multiple publishers can create signatures under the same signer identity.",
    strongerDesign:
      "Give each signing identity narrow custody and an explicit publishing role.",
    evidence:
      "Signer ID, signing service, custody boundary, authorization, verification logs.",
  },
  {
    mistake: "No certificate renewal owner",
    whyItFails:
      "Expiration becomes an avoidable outage.",
    strongerDesign:
      "Assign certificate owner, renewal window, monitoring, rollout, and rollback.",
    evidence:
      "Owner, expiration date, renewal ticket, monitoring source, rollout state.",
  },
  {
    mistake: "Trusting a retired CA",
    whyItFails:
      "Old certificates may remain accepted long after the issuing trust domain should have ended.",
    strongerDesign:
      "Map dependencies, migrate valid identities, then remove obsolete trust anchors.",
    evidence:
      "Trust-store inventory, CA state, dependency map, closure evidence.",
  },
  {
    mistake: "Deleting old keys too early",
    whyItFails:
      "Retained data, backups, or historical signatures may still depend on the old key.",
    strongerDesign:
      "Retire only after dependency and retention closure.",
    evidence:
      "Data-version mapping, restore test, archival need, retirement approval.",
  },
  {
    mistake: "Keeping old keys forever",
    whyItFails:
      "Unnecessary historical key material expands exposure and operational complexity.",
    strongerDesign:
      "Retain only while there is a documented dependency or historical-validation need.",
    evidence:
      "Retention reason, dependent data, expiry date, retirement ticket.",
  },
  {
    mistake: "Encryption assumed to solve authorization",
    whyItFails:
      "Authorized users or workloads may still have more data access than policy allows.",
    strongerDesign:
      "Keep identity/access policy separate from encryption.",
    evidence:
      "Authorization policy, role mapping, data classification, key policy.",
  },
  {
    mistake: "Hash treated as signer proof",
    whyItFails:
      "Anyone with the same content can compute the same digest.",
    strongerDesign:
      "Use digital signatures or another authenticated publishing relationship when signer identity matters.",
    evidence:
      "Signer identity, verification trust, signed manifest, approval record.",
  },
  {
    mistake: "Signature treated as confidentiality",
    whyItFails:
      "Signed content can still be readable.",
    strongerDesign:
      "Use encryption for confidentiality and signatures for authenticity/integrity.",
    evidence:
      "Protection-goal mapping, encryption policy, signature policy.",
  },
  {
    mistake: "Recovery bypass becomes normal access",
    whyItFails:
      "Emergency privileges or key copies escape normal ownership and monitoring.",
    strongerDesign:
      "Use time-bounded recovery access, explicit approval, evidence, and cleanup.",
    evidence:
      "Recovery ticket, access window, operator identity, post-use review.",
  },
];

const lifecycleFailureModes = [
  {
    stage: "Design",
    failure:
      "No owner, protection goal, environment scope, or recovery requirement is defined.",
    symptom:
      "The crypto control exists as a feature rather than an explainable architecture decision.",
    correction:
      "Add purpose, owner, scope, dependency, and lifecycle before implementation.",
  },
  {
    stage: "Deployment",
    failure:
      "Key references, private keys, or certificates are copied across too many systems.",
    symptom:
      "The trust boundary expands during rollout.",
    correction:
      "Use narrow workload authorization and protected storage/custody boundaries.",
  },
  {
    stage: "Operation",
    failure:
      "Monitoring shows use but not owner, lifecycle, failures, or trust state.",
    symptom:
      "Teams can see activity without knowing whether the trust relationship is still valid.",
    correction:
      "Monitor source health, key/certificate state, owner, failures, and policy changes.",
  },
  {
    stage: "Rotation / Renewal",
    failure:
      "Replacement occurs without dependency mapping or rollback.",
    symptom:
      "The first rotation causes service outages or hidden legacy use.",
    correction:
      "Treat rotation as a coordinated system transition.",
  },
  {
    stage: "Recovery",
    failure:
      "Restore cannot access required keys, or recovery introduces uncontrolled copies.",
    symptom:
      "The organization discovers key dependencies during an emergency.",
    correction:
      "Test restore and recovery with current lifecycle state.",
  },
  {
    stage: "Retirement",
    failure:
      "Old keys and trust anchors stay active after dependencies close.",
    symptom:
      "Legacy trust paths accumulate indefinitely.",
    correction:
      "Use closure evidence and explicit retirement criteria.",
  },
];

const reviewDimensions = [
  {
    dimension: "Protection goal",
    question:
      "What security goal is this crypto control supposed to support?",
    weakEvidence:
      "“Encryption enabled.”",
    strongerEvidence:
      "Confidentiality for production database records under a defined data classification.",
  },
  {
    dimension: "Ownership",
    question:
      "Who owns the cryptographic relationship?",
    weakEvidence:
      "“Platform team probably owns it.”",
    strongerEvidence:
      "Named key owner, application owner, data owner, certificate owner, or signer owner.",
  },
  {
    dimension: "Scope",
    question:
      "Which systems, environments, data, or identities can use this trust relationship?",
    weakEvidence:
      "“Internal systems.”",
    strongerEvidence:
      "Student Support Database / Production / database workload only.",
  },
  {
    dimension: "Storage / custody",
    question:
      "Where does the secret or private key live?",
    weakEvidence:
      "“On the server.”",
    strongerEvidence:
      "Managed key service or protected signing boundary with explicit workload authorization.",
  },
  {
    dimension: "Lifecycle",
    question:
      "How does the control rotate, renew, revoke, migrate, or retire?",
    weakEvidence:
      "“We will handle it later.”",
    strongerEvidence:
      "Documented cadence, trigger, version transition, rollback, and closure evidence.",
  },
  {
    dimension: "Recovery",
    question:
      "What happens when the key, certificate, service, or provider is unavailable?",
    weakEvidence:
      "“Backups exist.”",
    strongerEvidence:
      "Current restore test verifies access to required key versions under governed recovery.",
  },
  {
    dimension: "Monitoring",
    question:
      "Can the organization observe failures and lifecycle drift?",
    weakEvidence:
      "“Logs are enabled.”",
    strongerEvidence:
      "Owner, key/cert state, use, failures, renewal, rotation, and source-health telemetry.",
  },
  {
    dimension: "Evidence freshness",
    question:
      "How current is the information supporting the decision?",
    weakEvidence:
      "A two-year-old architecture diagram.",
    strongerEvidence:
      "Current inventory, owner confirmation, lifecycle event, and verification logs.",
  },
];

const principles = [
  {
    title: "Crypto mistakes are usually system mistakes",
    meaning:
      "A strong algorithm cannot compensate for bad ownership, broad trust, weak lifecycle, or failed recovery.",
    review:
      "What architecture dependency would still be risky even if the cryptographic primitive were strong?",
  },
  {
    title: "Convenience is not a trust boundary",
    meaning:
      "Using one key or certificate everywhere because it is easier creates hidden coupling.",
    review:
      "Can scope be reduced without breaking the legitimate workflow?",
  },
  {
    title: "Unknown should stay Unknown",
    meaning:
      "Missing owner, stale evidence, or unclear version should reduce confidence.",
    review:
      "Is the system Confirmed only because nobody has checked recently?",
  },
  {
    title: "Lifecycle should be tested before failure",
    meaning:
      "Renewal, rotation, recovery, and retirement are predictable events.",
    review:
      "Has the team rehearsed the transition before urgency?",
  },
  {
    title: "Historical trust should be bounded",
    meaning:
      "Old keys or certificates may need archival context without remaining active for new operations.",
    review:
      "Can historical validation be preserved without current acceptance?",
  },
  {
    title: "One control should not be asked to solve every problem",
    meaning:
      "Encryption, hashing, signatures, certificates, authorization, and governance have different purposes.",
    review:
      "Is the architecture using the right control for each protection goal?",
  },
  {
    title: "Recovery is part of crypto design",
    meaning:
      "Availability and resilience must be considered when protected data depends on keys or certificates.",
    review:
      "Can legitimate recovery succeed under the current key lifecycle?",
  },
  {
    title: "Evidence should support decisions",
    meaning:
      "Inventories and logs matter because they let defenders Confirm, Conditionalize, Block, or remediate a design.",
    review:
      "What evidence would change the current conclusion?",
  },
];

const vocabulary = [
  {
    term: "Crypto design mistake",
    definition:
      "A weakness in how cryptographic controls are selected, scoped, owned, deployed, operated, or retired.",
  },
  {
    term: "Trust sprawl",
    definition:
      "The uncontrolled expansion of keys, certificates, issuers, or trust relationships across too many systems.",
  },
  {
    term: "Key reuse",
    definition:
      "Using the same key across more applications, environments, or purposes than the architecture can justify.",
  },
  {
    term: "Hard-coded secret",
    definition:
      "Secret or key material embedded directly in source code or static configuration.",
  },
  {
    term: "Orphaned trust",
    definition:
      "A key, certificate, or trust relationship that remains active without a clear current owner or purpose.",
  },
  {
    term: "Lifecycle drift",
    definition:
      "A condition where actual rotation, renewal, revocation, or retirement no longer matches policy.",
  },
  {
    term: "Trust anchor sprawl",
    definition:
      "Acceptance of too many root or issuing authorities across systems and environments.",
  },
  {
    term: "Crypto-agility",
    definition:
      "The ability to change keys, certificates, algorithms, providers, or policy without emergency redesign.",
  },
  {
    term: "Residual risk",
    definition:
      "The remaining risk after controls and remediation are considered.",
  },
  {
    term: "Accepted risk",
    definition:
      "A formally documented decision to tolerate a known residual risk under defined ownership and review.",
  },
  {
    term: "Blocked design",
    definition:
      "A design state where a material issue prevents safe approval or release.",
  },
  {
    term: "Conditional design",
    definition:
      "A design that can continue under bounded conditions while specific lifecycle, evidence, or remediation work remains open.",
  },
];

const records = [
  {
    id: "MIS-01",
    system: "Student Support Database",
    mistake: "Encryption assumed to replace authorization review",
    protectionGoal: "Confidentiality at rest",
    currentDesign: "Managed database encryption with broad analyst permissions",
    evidence: "Key lifecycle current; access review found excess read scope",
    owner: "Data Platform + Student Services",
    severity: "High",
    state: "Conditional",
    correction:
      "Keep encryption, reduce analyst authorization scope, and track access review separately from key management.",
  },
  {
    id: "MIS-02",
    system: "Development and Production API",
    mistake: "Same symmetric key reused across environments",
    protectionGoal: "Application data confidentiality",
    currentDesign: "One shared application key used in dev and production",
    evidence: "Inventory confirms same logical key ID across environments",
    owner: "Application Platform",
    severity: "High",
    state: "Blocked",
    correction:
      "Separate environment-specific keys and workload authorization, then retire cross-environment key access.",
  },
  {
    id: "MIS-03",
    system: "Partner Scheduling Integration",
    mistake: "Certificate renewal responsibility unclear",
    protectionGoal: "Partner service identity",
    currentDesign: "Valid certificate expires in 45 days; sponsor current",
    evidence: "Renewal ticket exists but owner field is not assigned",
    owner: "Integration Team",
    severity: "Medium",
    state: "Conditional",
    correction:
      "Assign renewal owner, replacement window, monitoring, and relying-system validation before expiration.",
  },
  {
    id: "MIS-04",
    system: "Release Signing",
    mistake: "Shared private signing key across two release systems",
    protectionGoal: "Artifact integrity + publisher authenticity",
    currentDesign: "One signer identity used by independent release pipelines",
    evidence: "Signer inventory shows shared custody boundary",
    owner: "Release Engineering",
    severity: "High",
    state: "Blocked",
    correction:
      "Separate signer identities or use a single controlled signing service with policy-bound workload authorization and accountable use.",
  },
  {
    id: "MIS-05",
    system: "Legacy Reporting Archive",
    mistake: "Old encryption key has no owner or retirement plan",
    protectionGoal: "Historical confidentiality",
    currentDesign: "Legacy key copied across archive hosts",
    evidence: "Owner Unknown; rotation Unknown; recovery unclear",
    owner: "Unknown",
    severity: "High",
    state: "Blocked",
    correction:
      "Map dependencies and retained data, assign owner, then modernize or retire under a controlled lifecycle.",
  },
  {
    id: "MIS-06",
    system: "Recovery Backup Repository",
    mistake: "Recovery key exists but restore evidence is stale",
    protectionGoal: "Confidentiality + recoverability",
    currentDesign: "Managed backup key with last full restore test 14 months ago",
    evidence: "Current key inventory; stale recovery validation",
    owner: "Resilience Team",
    severity: "Medium",
    state: "Conditional",
    correction:
      "Run an authorized recovery validation using safe operational procedures and refresh key/recovery evidence.",
  },
  {
    id: "MIS-07",
    system: "Internal Trust Store",
    mistake: "Retired CA still trusted in production",
    protectionGoal: "Service identity trust",
    currentDesign: "Old root/intermediate chain remains installed on three servers",
    evidence: "Trust inventory current; dependencies partially mapped",
    owner: "Infrastructure Security",
    severity: "High",
    state: "Blocked",
    correction:
      "Finish dependency mapping, migrate valid identities, and remove obsolete trust anchors with closure evidence.",
  },
];

const dashboardMetrics = [
  {
    label: "Design mistakes reviewed",
    value: "7",
    note: "Authorization confusion, environment key reuse, renewal ownership, signing custody, legacy key lifecycle, recovery evidence, and trust anchors",
  },
  {
    label: "Blocked",
    value: "4",
    note: "Cross-environment key reuse, shared signing identity, orphaned legacy key, and retired CA trust require remediation before approval",
  },
  {
    label: "Conditional",
    value: "3",
    note: "Access scope, renewal ownership, and recovery evidence can continue only under bounded remediation",
  },
  {
    label: "Confirmed",
    value: "0",
    note: "Every record represents a design issue and therefore requires correction or explicit closure",
  },
];

const logs = [
  "[08:08] MIS-01 db-encryption access_scope=TOO_BROAD key_lifecycle=CURRENT state=CONDITIONAL",
  "[08:32] MIS-02 api-key envs=DEV+PROD shared_key=YES state=BLOCKED",
  "[08:56] MIS-03 partner-cert expiry=45d renewal_owner=UNASSIGNED state=CONDITIONAL",
  "[09:20] MIS-04 signing-key custody=SHARED pipelines=2 state=BLOCKED",
  "[09:44] MIS-05 legacy-key owner=UNKNOWN retirement=NONE state=BLOCKED",
  "[10:08] MIS-06 backup-key restore_test_age=14mo state=CONDITIONAL",
  "[10:32] MIS-07 trust-anchor retired_ca=STILL_TRUSTED prod_hosts=3 state=BLOCKED",
];

const antiPatterns = [
  {
    title: "Algorithm-first thinking",
    problem:
      "Teams debate algorithms before defining the security goal and trust relationship.",
    better:
      "Start with confidentiality, integrity, authenticity, trust, or lifecycle requirements.",
  },
  {
    title: "Crypto checkbox reviews",
    problem:
      "Architecture asks only whether encryption is enabled.",
    better:
      "Review owner, scope, key/certificate dependency, lifecycle, recovery, and evidence.",
  },
  {
    title: "Shared keys for convenience",
    problem:
      "One key spans unrelated applications or environments because configuration is easier.",
    better:
      "Narrow key scope and automate lifecycle instead of broadening trust.",
  },
  {
    title: "Certificates with vague identities",
    problem:
      "Generic subjects or wildcard trust obscure which service is actually represented.",
    better:
      "Use precise identity binding and relying-system scope.",
  },
  {
    title: "Rotation without rollback",
    problem:
      "A new key or certificate is introduced without a safe transition plan.",
    better:
      "Support version overlap where needed, verify dependencies, and define rollback.",
  },
  {
    title: "Legacy exclusion",
    problem:
      "Old systems are left out of crypto inventory because nobody wants to change them.",
    better:
      "Keep legacy trust visible until modernization or retirement closes the dependency.",
  },
  {
    title: "Recovery as an exception to governance",
    problem:
      "Emergency access ignores normal ownership and monitoring.",
    better:
      "Use exceptional but still accountable recovery controls.",
  },
  {
    title: "Evidence by assumption",
    problem:
      "Teams accept “it has always worked” instead of current lifecycle evidence.",
    better:
      "Require current inventory, owner, monitoring, and verification state.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep MIS-02 Blocked and separate development and production key scope before further rollout.",
    outcome:
      "Best. Shared cross-environment key trust creates unnecessary coupling and weakens production boundaries.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep one key because both environments use the same application code.",
    outcome:
      "Risky. Shared code does not justify shared cryptographic trust.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Rename the key differently in each environment while keeping the same underlying secret.",
    outcome:
      "Risky. Cosmetic naming does not create real trust separation.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep MIS-06 Conditional until an authorized recovery test confirms the current backup-key lifecycle and restore dependency.",
    outcome:
      "Best. Current key inventory does not replace actual recovery evidence.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark recovery Confirmed because the key exists.",
    outcome:
      "Risky. Key existence does not prove restore capability.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Create permanent extra recovery copies to avoid future testing.",
    outcome:
      "Risky. Uncontrolled copies weaken custody and do not prove the recovery workflow.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "Why can a crypto design still be weak even when it uses a strong algorithm?",
    choices: [
      "Because ownership, scope, key storage, lifecycle, recovery, and evidence can still be poorly designed.",
      "Because strong algorithms never work.",
      "Because encryption eliminates the need for governance.",
      "Because certificates replace key management.",
    ],
    answer: 0,
    explanation:
      "Most architecture failures come from trust, lifecycle, and governance decisions around the cryptographic mechanism.",
  },
  {
    question:
      "What is wrong with reusing one symmetric key across development and production?",
    choices: [
      "It creates unnecessary cross-environment trust and dependency.",
      "It guarantees better separation.",
      "It removes the need for access control.",
      "It makes rotation simpler without any downside.",
    ],
    answer: 0,
    explanation:
      "Environment boundaries should usually be reflected in key scope and ownership.",
  },
  {
    question:
      "Why is an unassigned certificate renewal owner a risk?",
    choices: [
      "Because predictable expiration can become an avoidable outage.",
      "Because certificates never expire.",
      "Because the public key should be secret.",
      "Because renewal replaces authorization.",
    ],
    answer: 0,
    explanation:
      "Renewal needs accountable ownership, monitoring, and transition planning.",
  },
  {
    question:
      "What is the strongest response to a retired CA still trusted in production?",
    choices: [
      "Map dependencies, migrate valid identities, and remove the obsolete trust anchor with closure evidence.",
      "Keep trusting it forever because some systems are old.",
      "Ignore it because it is internal.",
      "Add more retired CAs for compatibility.",
    ],
    answer: 0,
    explanation:
      "Obsolete trust should be removed after legitimate dependencies are safely closed.",
  },
  {
    question:
      "Why is a stale backup restore test a crypto design concern?",
    choices: [
      "Because current key availability and recovery dependencies may no longer match the old test.",
      "Because backups never need testing.",
      "Because encryption automatically guarantees recoverability.",
      "Because recovery should use plaintext copies.",
    ],
    answer: 0,
    explanation:
      "Recoverability depends on current keys, versions, access, and workflow—not old assumptions.",
  },
  {
    question:
      "Which statement about digital signatures is strongest?",
    choices: [
      "A valid signature still requires separate authorization when the business action is sensitive.",
      "A valid signature automatically grants all permissions.",
      "A signature provides confidentiality by itself.",
      "Every team should share one signing key.",
    ],
    answer: 0,
    explanation:
      "Signature trust and authorization protect different parts of the decision.",
  },
  {
    question:
      "What is the best overall way to review crypto design mistakes?",
    choices: [
      "Evaluate protection goal, ownership, scope, custody, lifecycle, recovery, monitoring, evidence, and residual risk.",
      "Check only whether encryption is enabled.",
      "Check only the algorithm name.",
      "Ignore legacy systems.",
    ],
    answer: 0,
    explanation:
      "A mature review examines the whole cryptographic trust lifecycle.",
  },
];

const checklistItems = [
  "Protection goal is explicit.",
  "Encryption, hashing, signatures, certificates, and authorization are not treated as interchangeable.",
  "Every key has a current owner.",
  "Every certificate has a current owner.",
  "Every signing identity has accountable private-key custody.",
  "Environment boundaries are reflected in key and trust scope.",
  "Shared keys are not used across unrelated systems without strong justification.",
  "Private keys are not broadly copied.",
  "Certificates identify the intended service or signer clearly.",
  "Trust anchors are limited to approved use.",
  "Retired CAs are removed after dependencies close.",
  "Rotation and renewal have named owners and tested transitions.",
  "Old key versions are retained only while documented dependencies require them.",
  "Recovery is tested with current key versions.",
  "Recovery access remains exceptional and auditable.",
  "Legacy crypto dependencies remain visible.",
  "Evidence freshness affects decision state.",
  "Unknown ownership does not become Confirmed.",
  "Every Blocked or Conditional issue has a next action.",
  "No lesson activity requires attacking, cracking, extracting, bypassing, or manipulating real cryptographic systems.",
];

const takeaways = [
  "Most crypto design mistakes are architecture and governance failures, not algorithm failures.",
  "Cryptographic controls should begin with a clear protection goal.",
  "Key and certificate ownership must be explicit.",
  "Trust scope should align with application, environment, purpose, and relying relationship.",
  "Hard-coded secrets and broad shared keys create unnecessary exposure and coupling.",
  "Rotation, renewal, recovery, and retirement should be designed before they become urgent.",
  "A valid signature or certificate does not replace authorization.",
  "Legacy and retired trust should remain visible until dependencies are closed.",
  "Current evidence is required for confident cryptographic governance.",
  "The Crypto Design Mistake Review prepares you for A14.8 Encryption in Transit and At Rest.",
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

export default function CommonCryptoDesignMistakesPage() {
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
              A14.7
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cryptography and Key Management Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A14.7
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Common Crypto Design Mistakes
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Cryptography can fail architecturally even when the underlying
            algorithm is strong. Weak ownership, broad trust, hard-coded
            secrets, stale certificates, poor recovery, and untested rotation
            can all create serious design risk.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson is defensive and architecture-focused. It teaches how to
            identify and correct design mistakes without showing how to exploit,
            crack, extract, bypass, or abuse real cryptographic systems.
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
          lessonTitle="Common Crypto Design Mistakes"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A14.7 Entry Readiness"
          items={[
            "I can distinguish encryption, hashing, signatures, and certificates.",
            "I understand key ownership, storage, rotation, recovery, and retirement.",
            "I can evaluate trust scope across systems and environments.",
            "I will analyze only fictional architecture records and safe metadata.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Strong Cryptography Can Still Be Wrapped in Weak Architecture"
        >
          <p className="leading-8">
            A database may use strong encryption while analysts have excessive
            permissions. A certificate may be valid while nobody owns its
            renewal. A signing key may be protected while two independent teams
            share the same signing identity. Security architecture has to judge
            the whole trust relationship, not just the cryptographic primitive.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Good cryptography is necessary. Good cryptographic architecture also requires clear purpose, narrow trust, accountable lifecycle, recoverability, and current evidence.
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
          eyebrow="Mistake Families"
          title="Six Families of Cryptographic Design Failure"
        >
          <div className="grid gap-6">
            {mistakeFamilies.map((item) => (
              <article
                key={item.family}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-2xl font-black text-white">{item.family}</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Common signs
                    </p>
                    <ul className="mt-2 space-y-2 text-sm leading-7 text-yellow-50">
                      {item.signs.map((sign) => (
                        <li key={sign}>• {sign}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Architecture impact
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.impact}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Safer redesign
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.redesign}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Concrete Mistakes"
          title="Twelve Common Crypto Architecture Mistakes"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {designMistakes.map((item) => (
              <article
                key={item.mistake}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.mistake}</h3>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Why it fails: {item.whyItFails}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Stronger design: {item.strongerDesign}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Lifecycle Failure"
          title="Crypto Design Can Break at Any Stage"
        >
          <div className="grid gap-5">
            {lifecycleFailureModes.map((item, index) => (
              <article
                key={item.stage}
                className="rounded-3xl border border-blue-400/20 bg-blue-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="text-xl font-black text-blue-50">
                      {item.stage}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-red-100">
                      Failure: {item.failure}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-100">
                      Symptom: {item.symptom}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      Correction: {item.correction}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Review Dimensions"
          title="Eight Questions That Expose Weak Crypto Design"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reviewDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.dimension}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Weak evidence: {item.weakEvidence}
                </p>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Stronger evidence: {item.strongerEvidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Principles"
          title="Eight Principles for Avoiding Crypto Architecture Mistakes"
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
          title="Crypto Design Review Terms"
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
          eyebrow="Fictional Mistake Register"
          title="Seven Northbridge Crypto Design Findings"
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
                  <span className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-xs font-black text-red-100">
                    {item.severity}
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
                    ["Design mistake", item.mistake],
                    ["Protection goal", item.protectionGoal],
                    ["Current design", item.currentDesign],
                    ["Evidence", item.evidence],
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

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Recommended correction
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.correction}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Crypto Design Mistake Dashboard"
          subtitle="Fictional architecture findings across ownership, trust scope, lifecycle, recovery, and evidence"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Production and Development Share the Same Encryption Key"
          severity="High"
          time="08:32"
          source="Fictional Cryptography Architecture Review"
          details="MIS-02 confirms that development and production API workloads use the same logical symmetric key. The design crosses environment boundaries and creates shared trust between lower- and higher-sensitivity systems."
          recommendation="Keep the design Blocked until environment-specific keys and workload authorization are implemented and cross-environment key access is retired."
        />

        <Section
          eyebrow="Why Strong Algorithms Are Not Enough"
          title="The Primitive Can Be Strong While the Trust Model Is Weak"
        >
          <p className="leading-8">
            Cryptographic algorithms operate inside systems. Those systems
            decide who can use keys, which certificates are trusted, when
            signatures are checked, how rotation occurs, and how recovery works.
            Weak system decisions can undermine an otherwise strong primitive.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
              <h3 className="font-black text-blue-50">Primitive</h3>
              <p className="mt-2 text-sm leading-7 text-blue-100">
                The mathematical cryptographic mechanism.
              </p>
            </article>

            <article className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5">
              <h3 className="font-black text-purple-50">Architecture</h3>
              <p className="mt-2 text-sm leading-7 text-purple-100">
                The systems, trust boundaries, data flows, key relationships,
                and relying parties around the primitive.
              </p>
            </article>

            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-50">Governance</h3>
              <p className="mt-2 text-sm leading-7 text-emerald-100">
                Ownership, lifecycle, evidence, policy, exceptions, and review.
              </p>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Crypto Design Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Cross-Environment Key Reuse"
          question="What is the strongest conclusion for MIS-02?"
          evidence={[
            "Development and production workloads use the same logical symmetric key.",
            "The application codebase is shared across environments.",
            "Production data is more sensitive than development data.",
            "The current key inventory confirms both environments can use the key.",
            "No technical requirement requires shared key material.",
          ]}
          options={[
            "Confirmed because the application code is the same.",
            "Blocked until environment-specific key scope and workload authorization are implemented.",
            "Safe because symmetric encryption is strong.",
            "Rename the same underlying secret differently in each environment.",
          ]}
          bestAnswer={1}
          explanation="Environment separation is an architecture boundary. Strong encryption does not justify unnecessary shared trust across environments."
        />

        <Section
          eyebrow="Common Review Anti-Patterns"
          title="Eight Ways Teams Miss Crypto Design Problems"
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
          title="Scenario Decision Lab 1 — Development and Production Share a Key"
          scenario="A fictional API platform uses one symmetric encryption key in both development and production because both environments run the same code."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Stale Recovery Evidence"
          scenario="A backup repository uses a managed encryption key, but the last full restore test was fourteen months ago and several key versions have changed since then."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Crypto Design Mistake Review"
        >
          <p className="leading-8">
            Use fictional applications, trust relationships, keys, certificates,
            owners, policies, and synthetic evidence only. The task is to
            identify unsafe architecture patterns and recommend defensive
            redesigns.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twenty fictional crypto design findings.",
              "Give every finding a stable MIS ID.",
              "Record the affected system or workflow.",
              "State the intended protection goal.",
              "Describe the current cryptographic design.",
              "Identify the design mistake.",
              "Classify the mistake family.",
              "Assign severity.",
              "Assign owner or mark owner Unknown.",
              "Record evidence source and freshness.",
              "Record environment scope.",
              "Record key/certificate/signature dependency where relevant.",
              "Record lifecycle issue where relevant.",
              "Record recovery issue where relevant.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, Accepted Risk, or Not Applicable.",
              "Write a safer redesign recommendation.",
              "Write the next validation step using safe evidence only.",
              "Include at least three ownership mistakes.",
              "Include at least three scope/environment mistakes.",
              "Include at least three lifecycle mistakes.",
              "Include at least three certificate/PKI mistakes.",
              "Include at least three signature/integrity mistakes.",
              "Include at least three recovery/resilience mistakes.",
              "Include at least two legacy crypto findings.",
              "Keep high-impact unresolved findings Blocked.",
              "Add change triggers for ownership, environment, provider, certificate, key version, data classification, policy, incident, recovery, and retirement.",
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
              Do not test real cryptographic weaknesses, attempt key extraction,
              bypass certificate validation, crack hashes, forge signatures,
              inspect real secrets, or manipulate production trust. This is a
              defensive design-review exercise only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Recovery Key Without Current Restore Evidence"
          question="What is the strongest state for MIS-06?"
          evidence={[
            "The backup encryption key inventory is current.",
            "The last full restore test was fourteen months ago.",
            "Several key versions changed after the last restore test.",
            "The backup platform remains operational.",
            "No current evidence proves recovery with the present key lifecycle.",
          ]}
          options={[
            "Confirmed because backups are still being created.",
            "Conditional until current authorized recovery testing proves the present key and restore dependencies.",
            "Blocked permanently because encryption prevents recovery.",
            "Create uncontrolled recovery copies instead of testing.",
          ]}
          bestAnswer={1}
          explanation="Current backup creation and key inventory do not prove that recovery still works under the current key lifecycle."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Redesign a Fictional Organization With Crypto Trust Sprawl"
        >
          <p className="leading-8">
            A fictional organization has hundreds of keys and certificates but
            no consistent ownership model. Development and production trust
            overlap, retired issuers remain installed, recovery evidence is
            stale, and rotation is handled differently by every team. Build a
            conceptual redesign.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Protection-goal catalog",
              "Crypto inventory",
              "Key ownership model",
              "Certificate ownership model",
              "Signer ownership model",
              "Environment separation",
              "Trust-anchor reduction",
              "Managed key boundaries",
              "Rotation standards",
              "Renewal standards",
              "Revocation handling",
              "Recovery validation",
              "Historical trust handling",
              "Legacy modernization",
              "Monitoring/source health",
              "Evidence freshness",
              "Exception governance",
              "Residual-risk decisions",
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
            The strongest redesign should make routine key rotation, certificate
            renewal, trust reduction, and recovery validation normal operations
            rather than emergencies.
          </p>
        </Section>

        <DefenderChecklist
          title="A14.7 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A14.7 Mini Quiz: Common Crypto Design Mistakes"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Crypto Design Mistake Review"
          prompt="Create the seventh artifact for your A14 Key-Management Design Recommendation: a fictional Crypto Design Mistake Review with at least twenty findings. Include MIS ID, system/workflow, protection goal, current design, design mistake, mistake family, severity, owner, environment, crypto dependency, lifecycle issue, recovery issue, evidence source, freshness, status, safer redesign, next validation step, residual risk, and change trigger."
          tips={[
            "Review the whole trust architecture, not only algorithm names.",
            "Include ownership, scope, lifecycle, certificate, signing, recovery, and legacy findings.",
            "Keep unresolved high-impact issues Blocked.",
            "Use safe evidence and architecture metadata only.",
            "Do not include attack procedures.",
            "Use fictional provider-neutral examples.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A14.8?"
        >
          <p className="leading-8">
            A14.8 focuses on Encryption in Transit and At Rest. Before moving
            on, make sure you can identify when a design uses the right
            cryptographic control but still fails because of trust, lifecycle,
            ownership, recovery, or environment scope.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can identify crypto design mistakes beyond algorithm choice.",
              "I can spot cross-environment key and trust reuse.",
              "I can explain why stale recovery and renewal evidence matters.",
              "I can distinguish cryptographic trust from authorization.",
              "I can recommend safer architecture changes without using offensive techniques.",
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
          title="How to Make the Crypto Design Mistake Review Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Name the real mistake",
                detail:
                  "Avoid vague labels like 'bad crypto.' State whether the issue is ownership, scope, lifecycle, recovery, trust, or control misuse.",
              },
              {
                title: "State the protection goal",
                detail:
                  "Show what the design was trying to protect so the redesign can be evaluated fairly.",
              },
              {
                title: "Show current evidence",
                detail:
                  "Use inventory, owner state, lifecycle metadata, monitoring, and dependency records.",
              },
              {
                title: "Classify decision state",
                detail:
                  "Use Confirmed, Conditional, Unknown, Blocked, Accepted Risk, or Not Applicable consistently.",
              },
              {
                title: "Recommend architecture correction",
                detail:
                  "Focus on ownership, scope, protected boundaries, lifecycle, recovery, and governance—not exploit testing.",
              },
              {
                title: "Show residual risk",
                detail:
                  "Explain what risk remains after the proposed correction.",
              },
              {
                title: "Use change triggers",
                detail:
                  "Ownership, environment, provider, data class, key version, certificate, and recovery changes should reopen review.",
              },
              {
                title: "Connect forward",
                detail:
                  "A14.8 will apply these lessons to data moving between systems and data stored across platforms.",
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
            Finding crypto mistakes does not require exploiting them
          </h2>
          <p className="mt-3 leading-7">
            Do not attempt to crack encryption, recover secrets, extract keys,
            forge signatures, manipulate real certificates, bypass trust
            validation, or attack live systems. All findings, keys,
            certificates, logs, and architectures in this lesson are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A14.7 Common Crypto Design Mistakes Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a design-review model for cryptographic mistakes across
            protection goals, ownership, scope, storage, trust, lifecycle,
            recovery, legacy dependencies, monitoring, and evidence. Next,
            A14.8 focuses on Encryption in Transit and At Rest.
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