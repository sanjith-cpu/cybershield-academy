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
const previousLesson = `${modulePath}/encryption-in-transit-and-at-rest`;
const nextLesson = `${modulePath}/key-management-design-lab`;

const objectives = [
  "Explain how cryptographic policy translates security goals into enforceable requirements for encryption, hashing, signatures, certificates, key management, and evidence.",
  "Distinguish policy, standard, procedure, guideline, exception, compensating control, evidence, and residual-risk decision.",
  "Evaluate fictional cryptography governance using ownership, data classification, approved control patterns, lifecycle requirements, auditability, exceptions, and review cadence.",
  "Analyze whether technical crypto evidence actually satisfies a policy objective instead of assuming that one enabled control proves compliance.",
  "Build a Cryptography Governance Register that becomes the ninth artifact in the A14 Key-Management Design Recommendation.",
];

const governanceLayers = [
  {
    layer: "Policy",
    purpose:
      "States the organization's mandatory security expectations and high-level control objectives.",
    example:
      "Sensitive information must receive approved cryptographic protection during storage and transmission where required by classification and architecture.",
    owner:
      "Security Governance / Risk",
    reviewQuestion:
      "Is the requirement clear enough to guide architecture decisions without prescribing every implementation detail?",
  },
  {
    layer: "Standard",
    purpose:
      "Defines approved technical and operational requirements that support policy.",
    example:
      "Approved key ownership, certificate lifecycle, storage boundaries, monitoring, rotation, and evidence expectations.",
    owner:
      "Security Architecture / Cryptography Governance",
    reviewQuestion:
      "Does the standard provide enough precision for teams to implement controls consistently?",
  },
  {
    layer: "Procedure",
    purpose:
      "Describes the authorized operational workflow for carrying out a governed activity.",
    example:
      "Certificate renewal, key rotation, exception review, or recovery validation workflow.",
    owner:
      "Platform / Security Operations / Service Owner",
    reviewQuestion:
      "Can the procedure be followed repeatedly with clear ownership and evidence?",
  },
  {
    layer: "Guideline",
    purpose:
      "Offers recommended practices that improve consistency but may not be mandatory.",
    example:
      "Preferred architecture patterns for short-lived workload certificates or managed key services.",
    owner:
      "Security Architecture",
    reviewQuestion:
      "Is the guidance clearly distinguished from mandatory requirements?",
  },
  {
    layer: "Exception",
    purpose:
      "Documents a temporary or bounded departure from a required policy or standard.",
    example:
      "A legacy application cannot yet use the approved key-management pattern and has a time-bounded remediation plan.",
    owner:
      "Risk Owner + Control Owner",
    reviewQuestion:
      "Does the exception have scope, reason, compensating controls, owner, expiry, and closure criteria?",
  },
];

const policyObjectives = [
  {
    objective: "Protect sensitive data",
    requirement:
      "Data classified as sensitive receives approved encryption in transit and at rest where the architecture requires confidentiality.",
    evidence:
      "Data-flow map, storage inventory, certificate status, key inventory, protection state, owner confirmation.",
    weakClaim:
      "“Encryption is enabled somewhere.”",
    strongerClaim:
      "Every sensitive path and storage location is mapped to an approved protection control with current lifecycle evidence.",
  },
  {
    objective: "Protect key material",
    requirement:
      "Secret and private keys are stored and used within approved protected boundaries with narrow authorization.",
    evidence:
      "Key storage class, authorized workload identities, custody record, key-use telemetry, owner.",
    weakClaim:
      "“The key is hidden.”",
    strongerClaim:
      "The key remains within a governed storage boundary and only approved workloads can use it.",
  },
  {
    objective: "Maintain lifecycle",
    requirement:
      "Keys and certificates have owners, rotation or renewal triggers, recovery considerations, and retirement criteria.",
    evidence:
      "Lifecycle register, renewal ticket, rotation record, version state, dependency map, closure evidence.",
    weakClaim:
      "“We rotate when necessary.”",
    strongerClaim:
      "The lifecycle trigger, accountable owner, transition plan, and completion evidence are documented.",
  },
  {
    objective: "Verify integrity and authenticity",
    requirement:
      "Integrity-critical artifacts use approved integrity or signature mechanisms where the business process requires trustworthy change detection or signer identity.",
    evidence:
      "Trusted manifest, signature result, signer owner, verification policy, failure action.",
    weakClaim:
      "“The file has a hash.”",
    strongerClaim:
      "The workflow uses a trusted reference or signer trust and blocks or reviews mismatches before the sensitive action.",
  },
  {
    objective: "Enable recoverability",
    requirement:
      "Cryptographic controls must not make authorized recovery impossible.",
    evidence:
      "Restore test, retained-key mapping, recovery access record, recovery certificate state, cleanup evidence.",
    weakClaim:
      "“Backups are encrypted.”",
    strongerClaim:
      "Encrypted backups are recoverable using current governed key relationships under tested procedures.",
  },
  {
    objective: "Produce audit evidence",
    requirement:
      "Cryptographic controls generate enough safe metadata to show owner, state, lifecycle, exceptions, and important decisions.",
    evidence:
      "Key IDs, certificate IDs, policy decisions, rotation events, verification outcomes, source health.",
    weakClaim:
      "“Logging is enabled.”",
    strongerClaim:
      "Current evidence directly supports the policy objective without exposing secret material.",
  },
];

const governanceResponsibilities = [
  {
    role: "Policy owner",
    responsibility:
      "Defines the mandatory cryptographic security objective and approves major policy changes.",
  },
  {
    role: "Standard owner",
    responsibility:
      "Defines approved architecture and lifecycle requirements that implement the policy.",
  },
  {
    role: "Control owner",
    responsibility:
      "Operates or maintains the specific key, certificate, encryption, signature, or integrity control.",
  },
  {
    role: "System owner",
    responsibility:
      "Ensures the application's architecture satisfies applicable cryptographic requirements.",
  },
  {
    role: "Data owner",
    responsibility:
      "Defines data sensitivity, business purpose, retention, disclosure, and acceptable protection expectations.",
  },
  {
    role: "Risk owner",
    responsibility:
      "Accepts or rejects residual risk when a requirement cannot be fully met.",
  },
  {
    role: "Evidence owner",
    responsibility:
      "Maintains the records needed to demonstrate that the control is operating as intended.",
  },
  {
    role: "Reviewer / auditor",
    responsibility:
      "Evaluates whether evidence supports the stated control objective and whether exceptions remain valid.",
  },
];

const evidenceStates = [
  {
    state: "Confirmed",
    meaning:
      "Current evidence supports the policy requirement and lifecycle state.",
    action:
      "Continue monitoring and normal review cadence.",
  },
  {
    state: "Conditional",
    meaning:
      "The requirement is substantially met, but a bounded lifecycle or remediation condition remains open.",
    action:
      "Track the condition, owner, due date, and closure evidence.",
  },
  {
    state: "Unknown",
    meaning:
      "Evidence is insufficient, stale, contradictory, or missing.",
    action:
      "Do not assume compliance; obtain current evidence.",
  },
  {
    state: "Blocked",
    meaning:
      "A material policy or architecture requirement is not met and risk is too high for approval.",
    action:
      "Remediate before release, renewal, or continued operation where required.",
  },
  {
    state: "Accepted Risk",
    meaning:
      "A known residual risk is formally approved for a defined scope and period.",
    action:
      "Maintain owner, rationale, compensating controls, expiry, and re-review trigger.",
  },
  {
    state: "Not Applicable",
    meaning:
      "The requirement does not apply to the system or data scope under review.",
    action:
      "Record why the control is not applicable and who confirmed that decision.",
  },
];

const exceptionModel = [
  {
    field: "Requirement",
    question:
      "Which policy or standard requirement cannot currently be met?",
    weak:
      "“Crypto exception.”",
    strong:
      "Production legacy reporting cannot yet use the approved managed key storage requirement.",
  },
  {
    field: "Scope",
    question:
      "Exactly which systems, data, environment, keys, or certificates are covered?",
    weak:
      "“Legacy systems.”",
    strong:
      "Legacy Reporting Service / Production / KEY-05 / historical report archive only.",
  },
  {
    field: "Reason",
    question:
      "Why can the requirement not be met immediately?",
    weak:
      "“Too difficult.”",
    strong:
      "Application dependency requires code modernization before managed key-service integration.",
  },
  {
    field: "Compensating controls",
    question:
      "What reduces risk while the exception exists?",
    weak:
      "“Extra monitoring.”",
    strong:
      "Restricted network scope, limited workload access, daily key-use review, no new data onboarding.",
  },
  {
    field: "Owner",
    question:
      "Who is accountable for the residual risk and remediation?",
    weak:
      "“IT.”",
    strong:
      "Reporting Product Owner + Infrastructure Security Risk Owner.",
  },
  {
    field: "Expiry",
    question:
      "When does the exception end or require re-approval?",
    weak:
      "“Until fixed.”",
    strong:
      "Expires 2027-01-31 unless modernization closes earlier.",
  },
  {
    field: "Closure criteria",
    question:
      "What evidence proves the exception can be retired?",
    weak:
      "“New system works.”",
    strong:
      "Managed key migration completed, restore validated, old key retired, and dependency closure recorded.",
  },
];

const complianceMappings = [
  {
    domain: "Data confidentiality",
    policyQuestion:
      "Is sensitive data protected in required transit and storage states?",
    technicalEvidence:
      "Data Protection Coverage Matrix, transport trust, storage-key state, authorization boundary.",
    governanceEvidence:
      "Data classification, policy applicability, owner approval, exception state.",
  },
  {
    domain: "Key governance",
    policyQuestion:
      "Are keys owned, stored, scoped, rotated, recovered, and retired according to standard?",
    technicalEvidence:
      "Key Lifecycle Register, key-use monitoring, version state, recovery test.",
    governanceEvidence:
      "Key owner, standard reference, review cadence, exception record.",
  },
  {
    domain: "Certificate / PKI governance",
    policyQuestion:
      "Are certificate trust relationships current, scoped, and lifecycle-managed?",
    technicalEvidence:
      "PKI Trust Register, issuer/trust anchor, validity, renewal, revocation status.",
    governanceEvidence:
      "Certificate owner, sponsor, renewal accountability, trust-domain policy.",
  },
  {
    domain: "Integrity / signature governance",
    policyQuestion:
      "Are critical artifacts verified before sensitive actions?",
    technicalEvidence:
      "Signature verification result, trusted manifest, failure action, signer trust.",
    governanceEvidence:
      "Approved signer role, release policy, exception or residual-risk record.",
  },
  {
    domain: "Recovery / resilience",
    policyQuestion:
      "Can protected data and services be restored without ungoverned bypasses?",
    technicalEvidence:
      "Restore test, retained key versions, recovery certificate state, recovery logs.",
    governanceEvidence:
      "Recovery owner, test cadence, exception status, post-use review.",
  },
  {
    domain: "Monitoring / evidence",
    policyQuestion:
      "Can reviewers tell whether cryptographic controls remain current and healthy?",
    technicalEvidence:
      "Lifecycle logs, key/cert state, source health, failed verification events.",
    governanceEvidence:
      "Evidence owner, retention, review cadence, issue escalation.",
  },
];

const reviewCadences = [
  {
    trigger: "Scheduled review",
    examples:
      "Quarterly key ownership review, monthly certificate-expiry review, annual crypto-policy assessment.",
    why:
      "Routine review catches drift before an incident or outage.",
  },
  {
    trigger: "System change",
    examples:
      "New service, new environment, provider migration, architecture redesign.",
    why:
      "Cryptographic scope and ownership can change with the system.",
  },
  {
    trigger: "Data classification change",
    examples:
      "A dataset becomes sensitive or begins containing regulated information.",
    why:
      "Protection requirements should reflect the current data sensitivity.",
  },
  {
    trigger: "Key / certificate lifecycle event",
    examples:
      "Rotation, renewal, revocation, retirement, signer change.",
    why:
      "Lifecycle changes can invalidate previous evidence or relying-system assumptions.",
  },
  {
    trigger: "Ownership change",
    examples:
      "Team reorganization, application transfer, vendor change.",
    why:
      "Unclear ownership is one of the fastest ways for crypto governance to decay.",
  },
  {
    trigger: "Exception expiry",
    examples:
      "Temporary legacy exception reaches its approved end date.",
    why:
      "Exceptions should not silently become permanent policy.",
  },
  {
    trigger: "Incident or suspected exposure",
    examples:
      "Key custody uncertain, certificate identity questioned, trust relationship changed.",
    why:
      "Risk and trust state should be re-evaluated immediately.",
  },
  {
    trigger: "Evidence degradation",
    examples:
      "Monitoring source fails, inventory becomes stale, recovery test ages out.",
    why:
      "A control cannot remain confidently Confirmed without current evidence.",
  },
];

const principles = [
  {
    title: "Policy should describe the security outcome",
    meaning:
      "Policy explains what must be protected and governed rather than naming every implementation.",
    review:
      "Can different approved technologies satisfy the same control objective?",
  },
  {
    title: "Standards make policy testable",
    meaning:
      "Standards convert broad policy into measurable architecture and lifecycle expectations.",
    review:
      "Can a reviewer determine whether the system meets the standard using current evidence?",
  },
  {
    title: "Compliance is evidence-based",
    meaning:
      "A control is not compliant merely because a feature is enabled.",
    review:
      "Does the evidence show scope, owner, lifecycle, effectiveness, and current state?",
  },
  {
    title: "Exceptions need an end",
    meaning:
      "Temporary deviations should expire, close, or require re-approval.",
    review:
      "Does every exception have an expiry and closure criteria?",
  },
  {
    title: "Accepted risk is not silent risk",
    meaning:
      "Residual risk should have a named owner, rationale, scope, and review trigger.",
    review:
      "Who accepted the risk and when must that decision be reconsidered?",
  },
  {
    title: "Technical and governance evidence belong together",
    meaning:
      "A valid certificate or key state may still fail policy if ownership, scope, or authorization is wrong.",
    review:
      "Does the policy conclusion consider both technical and organizational evidence?",
  },
  {
    title: "Review cadence should follow change",
    meaning:
      "Some cryptographic relationships need event-driven review in addition to scheduled review.",
    review:
      "Which changes automatically reopen the governance decision?",
  },
  {
    title: "Policy should support crypto-agility",
    meaning:
      "Governance should permit safe migration when keys, algorithms, providers, or approved standards change.",
    review:
      "Can the organization update cryptographic controls without creating emergency exceptions?",
  },
];

const vocabulary = [
  {
    term: "Policy",
    definition:
      "A mandatory high-level statement of organizational security intent and required outcomes.",
  },
  {
    term: "Standard",
    definition:
      "A mandatory set of technical or operational requirements that supports policy.",
  },
  {
    term: "Procedure",
    definition:
      "A defined operational process for carrying out a governed task.",
  },
  {
    term: "Guideline",
    definition:
      "Recommended practice that helps teams make consistent decisions but may not be mandatory.",
  },
  {
    term: "Control objective",
    definition:
      "The security outcome a policy or standard expects a control to achieve.",
  },
  {
    term: "Evidence",
    definition:
      "Current information used to determine whether a control is designed and operating as intended.",
  },
  {
    term: "Exception",
    definition:
      "A formally documented, bounded departure from a required policy or standard.",
  },
  {
    term: "Compensating control",
    definition:
      "An alternate safeguard used to reduce risk when the primary requirement cannot yet be met.",
  },
  {
    term: "Residual risk",
    definition:
      "Risk that remains after controls and remediation are considered.",
  },
  {
    term: "Accepted risk",
    definition:
      "Residual risk formally approved by an authorized risk owner for a defined scope and time.",
  },
  {
    term: "Auditability",
    definition:
      "The ability to reconstruct control state, ownership, decisions, and lifecycle from evidence.",
  },
  {
    term: "Compliance mapping",
    definition:
      "The process of connecting policy or standard requirements to technical controls and evidence.",
  },
];

const records = [
  {
    id: "GOV-01",
    system: "Student Services Portal",
    requirement: "Sensitive web and service traffic uses approved protected transport",
    controlObjective: "Confidentiality + service trust",
    technicalEvidence: "Current service certificate + internal workload trust + transport policy",
    governanceEvidence: "Application owner + data classification + certificate owner",
    exception: "None",
    reviewCadence: "Quarterly + certificate renewal trigger",
    owner: "Application Security / Platform Security",
    residualRisk: "Low; routine lifecycle monitoring remains",
    state: "Confirmed",
    nextAction: "Complete planned certificate renewal before remaining-validity window becomes short",
  },
  {
    id: "GOV-02",
    system: "Student Support Database",
    requirement: "Sensitive stored data uses approved encryption and governed key lifecycle",
    controlObjective: "Confidentiality at rest",
    technicalEvidence: "Managed key v6 + database encryption + restore test",
    governanceEvidence: "Data owner + key owner + annual rotation standard",
    exception: "None",
    reviewCadence: "Quarterly key review + rotation event",
    owner: "Data Platform",
    residualRisk: "Low; authorization must remain separately governed",
    state: "Confirmed",
    nextAction: "Retire old key version after retained-data dependency closes",
  },
  {
    id: "GOV-03",
    system: "Partner Scheduling Integration",
    requirement: "External trust relationships must have current certificate, sponsor, renewal owner, and bounded scope",
    controlObjective: "Partner service identity + protected transport",
    technicalEvidence: "Current partner certificate; expires in 45 days",
    governanceEvidence: "Sponsor current; renewal owner assigned",
    exception: "None",
    reviewCadence: "Monthly until renewal closes",
    owner: "Integration Owner",
    residualRisk: "Moderate until renewal completes",
    state: "Conditional",
    nextAction: "Complete partner certificate renewal and relying-system validation",
  },
  {
    id: "GOV-04",
    system: "Legacy Reporting Service",
    requirement: "Production encryption keys must use approved managed storage with named owner and rotation",
    controlObjective: "Governed confidentiality",
    technicalEvidence: "Legacy key copied across hosts; version Unknown",
    governanceEvidence: "Owner Unknown; modernization project approved",
    exception: "EXC-14-04 approved through 2027-01-31 with restricted network scope and no new data onboarding",
    reviewCadence: "Monthly exception review",
    owner: "Reporting Product Owner + Risk Owner",
    residualRisk: "High but temporarily accepted within strict scope",
    state: "Accepted Risk",
    nextAction: "Complete managed-key migration, recovery validation, and old-key retirement before exception expiry",
  },
  {
    id: "GOV-05",
    system: "Release Signing Service",
    requirement: "Production artifacts must be signed by approved signer with protected private-key custody",
    controlObjective: "Integrity + publisher authenticity",
    technicalEvidence: "Current signing key + verification logs + protected signing boundary",
    governanceEvidence: "Approved signer role + release authorization policy",
    exception: "None",
    reviewCadence: "Quarterly + signer rotation trigger",
    owner: "Release Engineering",
    residualRisk: "Moderate until planned rotation transition is rehearsed",
    state: "Conditional",
    nextAction: "Complete verifier-transition rehearsal before next signing-key rotation",
  },
  {
    id: "GOV-06",
    system: "Recovery Backup Repository",
    requirement: "Encrypted backups must remain recoverable under current key lifecycle",
    controlObjective: "Confidentiality + resilience",
    technicalEvidence: "Backup encryption current; last full restore test 14 months old",
    governanceEvidence: "Recovery owner current; test standard requires annual validation",
    exception: "None",
    reviewCadence: "Immediate due to overdue recovery test",
    owner: "Resilience Team",
    residualRisk: "Moderate because recoverability evidence is stale",
    state: "Conditional",
    nextAction: "Perform authorized recovery validation and refresh evidence",
  },
  {
    id: "GOV-07",
    system: "Internal Trust Store",
    requirement: "Only approved active trust anchors may remain in production",
    controlObjective: "Scoped certificate trust",
    technicalEvidence: "Retired CA still installed on three production systems",
    governanceEvidence: "Dependency map partial; no approved exception",
    exception: "None",
    reviewCadence: "Immediate",
    owner: "Infrastructure Security",
    residualRisk: "High",
    state: "Blocked",
    nextAction: "Finish dependency mapping, migrate remaining valid identities, and remove retired CA trust",
  },
];

const dashboardMetrics = [
  {
    label: "Governance records reviewed",
    value: "7",
    note: "Transport, storage, partner trust, legacy exception, signing, recovery, and trust-anchor governance",
  },
  {
    label: "Confirmed",
    value: "2",
    note: "Portal transport and database storage meet current policy with current evidence",
  },
  {
    label: "Conditional / Accepted Risk",
    value: "4",
    note: "Partner renewal, signing rotation, stale recovery evidence, and bounded legacy exception require active governance",
  },
  {
    label: "Blocked",
    value: "1",
    note: "Retired CA trust remains active without an approved exception",
  },
];

const logs = [
  "[08:10] GOV-01 portal policy=TRANSIT_PROTECTION evidence=CURRENT state=CONFIRMED",
  "[08:34] GOV-02 database policy=AT_REST+KEY_LIFECYCLE evidence=CURRENT state=CONFIRMED",
  "[08:58] GOV-03 partner policy=TRUST_LIFECYCLE renewal=45d state=CONDITIONAL",
  "[09:22] GOV-04 legacy-key exception=EXC-14-04 expires=2027-01-31 state=ACCEPTED_RISK",
  "[09:46] GOV-05 signing policy=PROTECTED_CUSTODY rotation_rehearsal=OPEN state=CONDITIONAL",
  "[10:10] GOV-06 recovery policy=ANNUAL_TEST last_test=14mo state=CONDITIONAL",
  "[10:34] GOV-07 trust-anchor retired_ca=ACTIVE exception=NONE state=BLOCKED",
];

const antiPatterns = [
  {
    title: "Policy says only 'use encryption'",
    problem:
      "The requirement is too vague to evaluate scope, data state, ownership, lifecycle, or evidence.",
    better:
      "Define the protection objective and supporting standard requirements.",
  },
  {
    title: "Compliance by feature checkbox",
    problem:
      "A team assumes that one enabled setting proves the control objective is met.",
    better:
      "Evaluate technical state, ownership, lifecycle, authorization, recovery, and evidence.",
  },
  {
    title: "Exception without expiry",
    problem:
      "A temporary deviation silently becomes permanent architecture.",
    better:
      "Require expiry, owner, compensating controls, and closure criteria.",
  },
  {
    title: "Risk accepted by nobody",
    problem:
      "Teams continue with known gaps but no authorized person owns the residual risk.",
    better:
      "Assign an authorized risk owner and record rationale, scope, and re-review trigger.",
  },
  {
    title: "Evidence owner is unclear",
    problem:
      "Key, certificate, or recovery evidence becomes stale because nobody maintains it.",
    better:
      "Assign evidence ownership and freshness expectations.",
  },
  {
    title: "Technical evidence without governance context",
    problem:
      "A valid certificate is treated as enough even though sponsor, scope, or authorization is wrong.",
    better:
      "Combine technical and governance evidence in the compliance decision.",
  },
  {
    title: "Policy ignores recovery",
    problem:
      "Encryption requirements are met technically but protected data cannot be restored.",
    better:
      "Include recoverability and retention in cryptographic control objectives.",
  },
  {
    title: "Policy blocks all change",
    problem:
      "Approved requirements are so rigid that provider, key, or algorithm migration becomes an emergency exception.",
    better:
      "Write standards around defensible security properties and support crypto-agility.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Approve a time-bounded exception only if scope, owner, compensating controls, expiry, residual-risk owner, and closure criteria are documented.",
    outcome:
      "Best. An exception should be a governed temporary state, not a permanent workaround.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Allow the legacy design indefinitely because modernization is difficult.",
    outcome:
      "Risky. Difficulty does not justify an open-ended policy deviation.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Mark the requirement Not Applicable because the system is old.",
    outcome:
      "Risky. Age does not remove the protection requirement when sensitive data remains in scope.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep the recovery control Conditional until current authorized restore evidence proves the policy objective is still met.",
    outcome:
      "Best. Encryption state alone does not prove recoverability.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark it Confirmed because the backup key inventory is current.",
    outcome:
      "Caution. Key inventory is useful, but the recovery objective requires current restore evidence.",
    tone: "caution" as const,
  },
  {
    label: "Choice C",
    response:
      "Remove recovery testing from the policy because testing takes time.",
    outcome:
      "Risky. That would weaken the stated resilience objective instead of fixing evidence.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the main role of a cryptography policy?",
    choices: [
      "Define mandatory security outcomes and governance expectations.",
      "Store private keys.",
      "Replace technical standards.",
      "Eliminate the need for evidence.",
    ],
    answer: 0,
    explanation:
      "Policy states what security outcomes the organization requires.",
  },
  {
    question:
      "What is the main role of a technical standard?",
    choices: [
      "Translate policy into measurable implementation and lifecycle requirements.",
      "Approve every risk exception automatically.",
      "Replace all procedures.",
      "Make every system use identical technology forever.",
    ],
    answer: 0,
    explanation:
      "Standards make policy specific enough to evaluate consistently.",
  },
  {
    question:
      "What makes an exception well governed?",
    choices: [
      "Scope, reason, compensating controls, owner, expiry, and closure criteria.",
      "No expiry and no owner.",
      "A note saying 'temporary.'",
      "Using the same exception for every system.",
    ],
    answer: 0,
    explanation:
      "A real exception is bounded, owned, temporary, and reviewable.",
  },
  {
    question:
      "Why is 'encryption enabled' weak compliance evidence?",
    choices: [
      "Because it does not show scope, ownership, lifecycle, authorization, recovery, or effectiveness.",
      "Because encryption never supports security.",
      "Because compliance never requires evidence.",
      "Because only certificates matter.",
    ],
    answer: 0,
    explanation:
      "Control evidence should prove the actual policy objective, not just feature presence.",
  },
  {
    question:
      "What is accepted risk?",
    choices: [
      "Residual risk formally approved by an authorized owner for a defined scope and period.",
      "Any risk a technical team ignores.",
      "A permanent exemption from all future review.",
      "A missing control automatically marked safe.",
    ],
    answer: 0,
    explanation:
      "Accepted risk should be explicit, owned, bounded, and reviewable.",
  },
  {
    question:
      "Why should technical and governance evidence be reviewed together?",
    choices: [
      "Because a technically valid crypto control can still have wrong ownership, scope, authorization, or lifecycle.",
      "Because technical evidence is never useful.",
      "Because policy should ignore system state.",
      "Because governance replaces cryptography.",
    ],
    answer: 0,
    explanation:
      "Cryptographic compliance depends on both technical effectiveness and accountable governance.",
  },
  {
    question:
      "What is strongest for a control whose evidence is stale?",
    choices: [
      "Move it to Conditional or Unknown until current evidence supports the requirement.",
      "Keep it Confirmed forever.",
      "Delete the requirement.",
      "Assume the previous review still applies.",
    ],
    answer: 0,
    explanation:
      "Confidence should reflect current evidence quality.",
  },
];

const checklistItems = [
  "Policy states clear cryptographic security outcomes.",
  "Technical standards make policy requirements measurable.",
  "Procedures define repeatable lifecycle workflows.",
  "Guidelines are clearly distinguished from mandatory standards.",
  "Every control objective maps to current technical evidence.",
  "Every control objective maps to accountable governance evidence.",
  "Data classification drives applicable protection requirements.",
  "Key owners are current.",
  "Certificate owners are current.",
  "Signer owners are current.",
  "Recovery owners are current.",
  "Evidence owners are current.",
  "Exceptions have exact scope.",
  "Exceptions have compensating controls.",
  "Exceptions have authorized risk owners.",
  "Exceptions have expiry dates.",
  "Exceptions have closure criteria.",
  "Accepted risk is documented rather than assumed.",
  "Stale evidence changes decision state.",
  "No compliance conclusion depends on accessing or exposing real cryptographic secrets.",
];

const takeaways = [
  "Policy defines required cryptographic security outcomes.",
  "Standards translate policy into measurable architecture and lifecycle requirements.",
  "Compliance requires evidence that the control objective is actually met.",
  "Technical evidence and governance evidence should be reviewed together.",
  "Exceptions should be scoped, owned, time-bounded, and tied to closure criteria.",
  "Accepted risk requires an authorized owner and a re-review trigger.",
  "Evidence freshness affects whether a control is Confirmed, Conditional, Unknown, or Blocked.",
  "Recovery, key lifecycle, certificate lifecycle, and trust scope belong in crypto governance.",
  "Policy should support crypto-agility rather than making safe migration impossible.",
  "The Cryptography Governance Register prepares you for A14.10 Key Management Design Lab.",
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

export default function CryptoPolicyAndComplianceConceptsPage() {
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
              A14.9
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cryptography and Key Management Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A14.9
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Crypto Policy and Compliance Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Good cryptography governance turns technical protection into a
            repeatable organizational decision. Policy says what outcomes are
            required. Standards define measurable expectations. Evidence shows
            whether the system actually meets them.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional policy records, key IDs, certificate
            metadata, exception records, and synthetic evidence only. It does
            not require access to real keys, private data, production trust
            stores, or protected systems.
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
          lessonTitle="Crypto Policy and Compliance Concepts"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A14.9 Entry Readiness"
          items={[
            "I can explain encryption, hashing, signatures, certificates, key lifecycle, and data-protection coverage.",
            "I understand that current evidence matters as much as technical configuration.",
            "I can distinguish a technical control from a governance decision.",
            "I will use only fictional policy, exception, ownership, and evidence records.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Compliance Is Not the Same as Turning On a Crypto Feature"
        >
          <p className="leading-8">
            A system can have encryption enabled and still fail policy because
            the wrong data is protected, the key has no owner, certificate
            renewal is overdue, recovery has never been tested, or a temporary
            exception expired months ago. Governance asks whether the control
            objective is actually satisfied.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Cryptography compliance is strongest when policy, technical evidence, ownership, lifecycle, exceptions, and residual risk all tell the same story.
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
          eyebrow="Governance Layers"
          title="Policy, Standards, Procedures, Guidelines, and Exceptions"
        >
          <div className="grid gap-6">
            {governanceLayers.map((item) => (
              <article
                key={item.layer}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-2xl font-black text-white">{item.layer}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.purpose}</p>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Example
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.example}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Typical owner
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.owner}
                    </p>
                  </div>

                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Review question
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.reviewQuestion}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Control Objectives"
          title="Policy Should Connect to Evidence That Actually Proves the Outcome"
        >
          <div className="grid gap-5">
            {policyObjectives.map((item) => (
              <article
                key={item.objective}
                className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6"
              >
                <h3 className="text-xl font-black text-emerald-50">
                  {item.objective}
                </h3>
                <p className="mt-3 leading-7 text-emerald-100">
                  Requirement: {item.requirement}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Useful evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.evidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Weak claim
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.weakClaim}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Stronger claim
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.strongerClaim}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Ownership"
          title="Governance Works Only When Responsibilities Are Explicit"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {governanceResponsibilities.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.role}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.responsibility}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision States"
          title="Compliance Conclusions Should Reflect Evidence Quality"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.state}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Action: {item.action}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Exception Governance"
          title="A Strong Exception Is Specific, Temporary, and Reviewable"
        >
          <div className="grid gap-5">
            {exceptionModel.map((item) => (
              <article
                key={item.field}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.field}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.question}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Weak
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.weak}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Strong
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.strong}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Compliance Mapping"
          title="Connect Policy Objectives to Technical and Governance Evidence"
        >
          <div className="grid gap-5">
            {complianceMappings.map((item) => (
              <article
                key={item.domain}
                className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6"
              >
                <h3 className="text-xl font-black text-cyan-50">
                  {item.domain}
                </h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Policy question: {item.policyQuestion}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Technical evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.technicalEvidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Governance evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.governanceEvidence}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Review Cadence"
          title="Cryptographic Governance Should Reopen When Conditions Change"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reviewCadences.map((item) => (
              <article
                key={item.trigger}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.trigger}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
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
          eyebrow="Design Principles"
          title="Eight Principles for Cryptography Governance"
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
          title="Policy and Compliance Terms"
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
          eyebrow="Fictional Governance Register"
          title="Seven Northbridge Cryptography Governance Records"
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
                  {item.system}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Requirement", item.requirement],
                    ["Control objective", item.controlObjective],
                    ["Technical evidence", item.technicalEvidence],
                    ["Governance evidence", item.governanceEvidence],
                    ["Exception", item.exception],
                    ["Review cadence", item.reviewCadence],
                    ["Owner", item.owner],
                    ["Residual risk", item.residualRisk],
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
                    Next action
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.nextAction}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Cryptography Governance Dashboard"
          subtitle="Fictional policy, evidence, exception, residual-risk, and lifecycle summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Retired CA Trust Has No Approved Exception"
          severity="High"
          time="10:34"
          source="Fictional Cryptography Governance Review"
          details="GOV-07 shows a retired certificate authority still trusted on three production systems. The dependency map is incomplete and no approved exception exists."
          recommendation="Keep the control Blocked until dependencies are mapped, valid identities are migrated, obsolete trust is removed, and closure evidence is recorded."
        />

        <Section
          eyebrow="Policy vs. Technical State"
          title="A Technical Control Can Be Healthy and Still Miss the Policy Objective"
        >
          <p className="leading-8">
            A certificate may be valid but belong to the wrong service. A key
            may be stored securely but authorized to too many workloads. A
            backup may be encrypted but not recoverable. Compliance asks whether
            the actual policy outcome is satisfied—not whether one component
            looks technically healthy.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <h3 className="font-black text-cyan-50">Technical evidence</h3>
              <p className="mt-2 text-sm leading-7 text-cyan-100">
                Shows configuration, key/certificate state, control use,
                verification outcome, recovery test, or monitoring health.
              </p>
            </article>

            <article className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5">
              <h3 className="font-black text-purple-50">
                Governance evidence
              </h3>
              <p className="mt-2 text-sm leading-7 text-purple-100">
                Shows owner, policy applicability, data classification,
                authorization, exception, residual-risk decision, and review
                cadence.
              </p>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Cryptography Governance Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Crypto Exception"
          question="What makes GOV-04 a defensible Accepted Risk rather than an unmanaged exception?"
          evidence={[
            "The production legacy key does not yet meet the approved managed-storage standard.",
            "The exact system and key scope are documented.",
            "The exception expires on 2027-01-31.",
            "Restricted network scope and no new data onboarding are compensating controls.",
            "A named product owner and risk owner are accountable.",
            "Closure requires managed-key migration, recovery validation, and old-key retirement.",
          ]}
          options={[
            "The exception is defensible because it is scoped, owned, time-bounded, compensated, and tied to closure evidence.",
            "The exception is safe because the system is old.",
            "The exception should never expire.",
            "The requirement should be marked Not Applicable.",
          ]}
          bestAnswer={0}
          explanation="Accepted risk is a formal governance state with scope, owner, compensating controls, expiry, and closure criteria."
        />

        <Section
          eyebrow="Common Governance Mistakes"
          title="Eight Ways Crypto Compliance Becomes Superficial"
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
          title="Scenario Decision Lab 1 — Time-Bounded Legacy Exception"
          scenario="A legacy reporting service cannot yet use the approved managed key-storage standard. The business needs it for several more months while modernization is underway."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Encryption Current, Recovery Evidence Stale"
          scenario="A backup repository uses current encryption and key inventory, but the required annual full restore test is overdue."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Cryptography Governance Register"
        >
          <p className="leading-8">
            Use fictional policy statements, standards, key IDs, certificate
            records, system owners, exceptions, and evidence only. Do not access
            real cryptographic systems or sensitive organizational records.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twenty fictional cryptography governance records.",
              "Give every record a stable GOV ID.",
              "Record the system or workflow.",
              "Record the policy requirement.",
              "Record the control objective.",
              "Record applicable data classification.",
              "Record technical evidence.",
              "Record governance evidence.",
              "Assign control owner.",
              "Assign system/data owner.",
              "Assign evidence owner.",
              "Record applicable standard.",
              "Record lifecycle requirement.",
              "Record review cadence.",
              "Record current evidence freshness.",
              "Record exception ID if applicable.",
              "Record compensating controls if applicable.",
              "Record exception expiry if applicable.",
              "Record residual risk.",
              "Assign risk owner where required.",
              "Classify state as Confirmed, Conditional, Unknown, Blocked, Accepted Risk, or Not Applicable.",
              "Record next action.",
              "Record closure evidence.",
              "Include at least four encryption-policy examples.",
              "Include at least four key-management examples.",
              "Include at least three certificate/PKI examples.",
              "Include at least three integrity/signature examples.",
              "Include at least three recovery/resilience examples.",
              "Include at least three exception or Accepted Risk examples.",
              "Include at least one Blocked control with no valid exception.",
              "Add change triggers for ownership, data class, environment, key version, certificate, provider, policy, exception expiry, recovery, and evidence degradation.",
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
              Do not request, collect, or expose real private keys, credentials,
              secrets, production trust data, or confidential compliance
              records. This lab uses fictional governance metadata only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Overdue Recovery Evidence"
          question="What is the strongest state for GOV-06?"
          evidence={[
            "Backup encryption is currently enabled.",
            "The key inventory is current.",
            "Policy requires annual recovery validation.",
            "The last full restore test was fourteen months ago.",
            "The recovery owner is current.",
          ]}
          options={[
            "Conditional until current restore evidence proves the resilience objective.",
            "Confirmed because encryption is enabled.",
            "Not Applicable because recovery is operational rather than security-related.",
            "Accepted Risk automatically without risk-owner approval.",
          ]}
          bestAnswer={0}
          explanation="The technical encryption state is current, but the recovery control objective lacks current evidence."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Fictional Enterprise Cryptography Governance Program"
        >
          <p className="leading-8">
            A fictional organization has strong individual crypto controls but
            inconsistent policy interpretation. Some teams treat encryption as a
            checkbox, exceptions have no expiry, and certificate/key evidence is
            maintained differently by every department. Design a governance
            model conceptually.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Policy hierarchy",
              "Approved standards",
              "Control-objective catalog",
              "Data-classification mapping",
              "Key-management requirements",
              "Certificate/PKI requirements",
              "Integrity/signature requirements",
              "Transit/rest requirements",
              "Recovery requirements",
              "Evidence ownership",
              "Review cadence",
              "Exception workflow",
              "Compensating controls",
              "Residual-risk ownership",
              "Exception expiry",
              "Closure evidence",
              "Evidence freshness",
              "Crypto-agility governance",
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
            The strongest governance design should make it easy to answer what
            the policy requires, which technical controls satisfy it, who owns
            each control, what evidence proves it, what exceptions exist, and
            when the decision must be reviewed again.
          </p>
        </Section>

        <DefenderChecklist
          title="A14.9 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A14.9 Mini Quiz: Crypto Policy and Compliance Concepts"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Cryptography Governance Register"
          prompt="Create the ninth artifact for your A14 Key-Management Design Recommendation: a fictional Cryptography Governance Register with at least twenty records. Include GOV ID, system/workflow, policy requirement, control objective, data classification, applicable standard, technical evidence, governance evidence, control owner, system/data owner, evidence owner, lifecycle requirement, review cadence, evidence freshness, exception, compensating controls, exception expiry, residual risk, risk owner, state, next action, closure evidence, and change trigger."
          tips={[
            "Map every requirement to evidence.",
            "Separate technical evidence from governance evidence.",
            "Include exceptions with owner, expiry, and closure criteria.",
            "Use Accepted Risk only when formally owned and bounded.",
            "Keep one unresolved high-impact control Blocked.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A14.10?"
        >
          <p className="leading-8">
            A14.10 is the Key Management Design Lab. Before continuing, make
            sure you can connect technical crypto architecture to policy,
            ownership, lifecycle, evidence, exceptions, residual risk, and a
            final governance decision.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish policy, standard, procedure, guideline, and exception.",
              "I can map a cryptographic control objective to technical and governance evidence.",
              "I can evaluate evidence freshness and decision state.",
              "I can explain how Accepted Risk differs from an unmanaged gap.",
              "I can design a time-bounded exception with compensating controls and closure criteria.",
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
          title="How to Make the Cryptography Governance Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Lead with the requirement",
                detail:
                  "State exactly which policy outcome or technical standard the control must satisfy.",
              },
              {
                title: "Separate technical and governance evidence",
                detail:
                  "A current key state and a current owner/risk decision are different kinds of evidence.",
              },
              {
                title: "Show decision state",
                detail:
                  "Use Confirmed, Conditional, Unknown, Blocked, Accepted Risk, or Not Applicable consistently.",
              },
              {
                title: "Make exceptions bounded",
                detail:
                  "Scope, owner, compensating controls, expiry, and closure criteria should be visible.",
              },
              {
                title: "Show residual risk",
                detail:
                  "Explain what remains after current controls and remediation are considered.",
              },
              {
                title: "Show review cadence",
                detail:
                  "Include both scheduled review and event-driven triggers.",
              },
              {
                title: "Show evidence freshness",
                detail:
                  "Current, Partial, Stale, Missing, or Unknown evidence should affect confidence.",
              },
              {
                title: "Connect forward",
                detail:
                  "A14.10 will combine every A14 artifact into one Key-Management Design Recommendation.",
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
            Governance learning uses policy and metadata, not real cryptographic secrets
          </h2>
          <p className="mt-3 leading-7">
            Do not request, collect, expose, or manipulate real private keys,
            secrets, certificates, protected trust stores, or confidential
            compliance records. All systems, policy records, exceptions, and
            evidence in this lesson are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A14.9 Crypto Policy and Compliance Concepts Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a governance model connecting policy, standards,
            technical controls, evidence, ownership, exceptions, residual risk,
            review cadence, and compliance decisions. Next, A14.10 is the Key
            Management Design Lab.
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