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

const modulePath = "/high-school/advanced/advanced-defensive-labs";
const previousLesson = `${modulePath}/network-defense-architecture-review`;
const nextLesson = `${modulePath}/identity-access-review-case`;

const objectives = [
  "Review a fictional cloud environment using shared responsibility, identity, storage, network boundaries, logging, backup, recovery, ownership, and configuration-governance evidence.",
  "Distinguish cloud configuration state from governance evidence so a technically safe setting is not confused with a current review, approval, or ownership record.",
  "Evaluate cloud findings using exposure, privilege, business criticality, data sensitivity, monitoring quality, resilience, reversibility, and evidence freshness.",
  "Design bounded remediation recommendations that reduce risk without broadening permissions, bypassing controls, or requiring access to any real cloud tenant.",
  "Build a Cloud Security Case Review with evidence references, findings, risk statements, owners, compensating controls, validation criteria, and a prioritized remediation sequence.",
];

const sharedResponsibility = [
  {
    area: "Cloud provider responsibility",
    idea:
      "The provider operates and protects the underlying cloud infrastructure and service platform according to the service model.",
    review:
      "Do not assume the provider automatically configures the customer's identities, storage exposure, logging, retention, or business permissions.",
  },
  {
    area: "Customer responsibility",
    idea:
      "The organization still owns decisions about identities, access, data use, configuration, monitoring, retention, governance, and workload architecture.",
    review:
      "Ask which controls the fictional customer must configure, review, and evidence.",
  },
  {
    area: "Shared responsibility",
    idea:
      "Some protections depend on both provider capabilities and customer configuration.",
    review:
      "Separate platform capability from whether the fictional organization actually enabled, reviewed, and governed it.",
  },
];

const cloudReviewDomains = [
  {
    domain: "Identity and access",
    questions:
      "Which identities can access the environment? Are privileges appropriate, approved, current, and reviewed?",
    evidence:
      "Role assignments, service identities, approval records, review dates, exceptions, privileged-access logs.",
  },
  {
    domain: "Storage and data exposure",
    questions:
      "What data is stored? How sensitive is it? Who can read or modify it? Is exposure consistent with purpose?",
    evidence:
      "Storage classification, access policy summary, owner, review date, encryption status, sharing boundary.",
  },
  {
    domain: "Network boundaries",
    questions:
      "Which services are externally reachable? Which private paths exist? Are trust boundaries documented?",
    evidence:
      "Architecture diagram, approved ingress/egress purpose, service dependency records, management path.",
  },
  {
    domain: "Logging and monitoring",
    questions:
      "Are identity, administrative, storage, and workload events visible? Are logs attributable, retained, and monitored?",
    evidence:
      "Log-source inventory, health status, retention, ownership, alert coverage, evidence completeness.",
  },
  {
    domain: "Backup and recovery",
    questions:
      "Are important workloads and data recoverable? Are backups protected, monitored, and periodically validated?",
    evidence:
      "Backup policy, last validation date, recovery owner, failure evidence, dependency list.",
  },
  {
    domain: "Configuration governance",
    questions:
      "Are changes approved, attributable, reviewed, and reflected in current architecture and ownership records?",
    evidence:
      "Change records, configuration version, owner, exception, review cadence, drift findings.",
  },
  {
    domain: "Secrets and credentials",
    questions:
      "Are secrets handled through approved conceptual mechanisms with limited exposure and no unnecessary logging?",
    evidence:
      "Secret references, ownership, rotation/revocation policy, access boundary, audit evidence.",
  },
  {
    domain: "Service ownership",
    questions:
      "Who owns each cloud service, dependency, data store, and exception? Are owner records current?",
    evidence:
      "Service registry, owner review date, escalation path, business service mapping.",
  },
];

const northbridgeCloudEvidence = [
  {
    id: "CLD-1801",
    area: "Identity",
    observation:
      "Fictional workload APP-C1 uses service identity SVC-C1 with read access to DATA-C1 and write access to QUEUE-C2.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "Write permission is justified for queue updates, but the approval record is six months old.",
  },
  {
    id: "CLD-1802",
    area: "Privileged access",
    observation:
      "Two fictional administrator roles exist: Cloud Platform Admin and Security Review Admin.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "One user retains both roles under a temporary exception.",
  },
  {
    id: "CLD-1803",
    area: "Exception governance",
    observation:
      "Exception EXC-C17 permits dual-role access for 14 days.",
    freshness:
      "Expired",
    confidence:
      "High",
    concern:
      "The exception expired three days ago and no closure or renewal evidence is attached.",
  },
  {
    id: "CLD-1804",
    area: "Storage",
    observation:
      "DATA-C1 is classified Internal and restricted to APP-C1 plus the Security Review Admin role.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "The access setting appears bounded, but classification review is 11 months old.",
  },
  {
    id: "CLD-1805",
    area: "Storage governance",
    observation:
      "DATA-C2 is classified Restricted with an approved owner and current review date.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "No immediate exposure issue is shown.",
  },
  {
    id: "CLD-1806",
    area: "External reachability",
    observation:
      "WEB-C1 is publicly reachable by design through a fictional managed gateway.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "Public reachability is expected; review should focus on gateway purpose, logging, identity boundaries, and backend exposure.",
  },
  {
    id: "CLD-1807",
    area: "Private application path",
    observation:
      "WEB-C1 reaches APP-C1 only through the approved gateway-to-application service path.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "The architecture package does not show a backup path, which may be acceptable if fail-safe service degradation is documented.",
  },
  {
    id: "CLD-1808",
    area: "Logging",
    observation:
      "Identity and administrative logs are forwarded to MON-C1.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "Storage access logs for DATA-C1 are marked optional in the current logging matrix.",
  },
  {
    id: "CLD-1809",
    area: "Monitoring health",
    observation:
      "MON-C1 health check failed twice during the last synthetic monthly review window.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "No evidence indicates total loss, but health instability should be reviewed with fallback visibility.",
  },
  {
    id: "CLD-1810",
    area: "Backup",
    observation:
      "DATA-C2 has daily fictional backups and a successful recovery validation 21 days ago.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "Healthy evidence.",
  },
  {
    id: "CLD-1811",
    area: "Backup governance",
    observation:
      "DATA-C1 has daily backup records, but the last documented recovery validation was 13 months ago.",
    freshness:
      "Stale",
    confidence:
      "High",
    concern:
      "Backup existence is current; recovery confidence is stale.",
  },
  {
    id: "CLD-1812",
    area: "Configuration change",
    observation:
      "Change CHG-C44 modified APP-C1 queue-writing behavior last week.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "Change approval exists, but the architecture dependency summary was not refreshed.",
  },
  {
    id: "CLD-1813",
    area: "Architecture documentation",
    observation:
      "Cloud architecture diagram version 5.0 predates CHG-C44.",
    freshness:
      "Stale",
    confidence:
      "High",
    concern:
      "Current behavior and documentation are out of sync.",
  },
  {
    id: "CLD-1814",
    area: "Secrets",
    observation:
      "The case package references a fictional managed-secret identifier for APP-C1 and does not display any secret value.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "Appropriate evidence pattern; no secret value is needed for the review.",
  },
  {
    id: "CLD-1815",
    area: "Ownership",
    observation:
      "APP-C1 owner is Team Atlas; DATA-C1 owner is Team Atlas; MON-C1 owner is Security Platform.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "Ownership is clear.",
  },
  {
    id: "CLD-1816",
    area: "External dependency",
    observation:
      "APP-C1 uses EXT-C3 for a noncritical reference lookup.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "The runbook says the application may continue without the lookup, but the monitoring dashboard does not show degraded-state status.",
  },
];

const cloudFindings = [
  {
    id: "CF-1801",
    title: "Expired dual-role exception",
    evidence:
      "CLD-1802, CLD-1803",
    condition:
      "One fictional user still has two privileged roles after the approved exception expired.",
    risk:
      "Separation-of-duties intent may be weakened if temporary privilege remains beyond approved scope.",
    impact:
      "High",
    likelihood:
      "Moderate",
    priority:
      "P0",
    recommendation:
      "Return to the approved role model or obtain a new explicit, time-bounded exception with current evidence and compensating controls.",
    owner:
      "Identity Governance Owner",
    validation:
      "Confirm role state and exception closure in the synthetic access review record.",
  },
  {
    id: "CF-1802",
    title: "Storage classification review is stale",
    evidence:
      "CLD-1804",
    condition:
      "DATA-C1 access is bounded, but the classification review is eleven months old.",
    risk:
      "The storage configuration may still be correct while the governance basis for its classification is stale.",
    impact:
      "Moderate",
    likelihood:
      "Moderate",
    priority:
      "P1",
    recommendation:
      "Revalidate the data classification and owner approval without changing access solely because the review date is old.",
    owner:
      "Data Governance Owner",
    validation:
      "Record a current classification decision and owner signoff.",
  },
  {
    id: "CF-1803",
    title: "DATA-C1 storage access logging is optional",
    evidence:
      "CLD-1808",
    condition:
      "Storage access telemetry for DATA-C1 is not required in the current fictional logging matrix.",
    risk:
      "Reviewers may have weaker evidence for understanding access to an important internal data store.",
    impact:
      "Moderate",
    likelihood:
      "Moderate",
    priority:
      "P1",
    recommendation:
      "Evaluate whether access logging should become a required evidence source based on data sensitivity and review needs.",
    owner:
      "Security Monitoring Owner",
    validation:
      "Update the fictional logging matrix and confirm evidence completeness.",
  },
  {
    id: "CF-1804",
    title: "Monitoring health has repeated instability",
    evidence:
      "CLD-1809",
    condition:
      "MON-C1 health checks failed twice in one synthetic review window.",
    risk:
      "If monitoring becomes unavailable, the team may lose timely visibility into identity and administrative events.",
    impact:
      "High",
    likelihood:
      "Low to Moderate",
    priority:
      "P1",
    recommendation:
      "Review monitoring health evidence, fallback visibility, and recovery ownership before the next expansion.",
    owner:
      "Security Platform Owner",
    validation:
      "Run a fictional tabletop and confirm the team retains required evidence during MON-C1 degradation.",
  },
  {
    id: "CF-1805",
    title: "Backup exists but recovery confidence is stale",
    evidence:
      "CLD-1811",
    condition:
      "DATA-C1 backups are current, but recovery validation evidence is thirteen months old.",
    risk:
      "Backup creation alone does not prove the organization can restore the data within expected conditions.",
    impact:
      "High",
    likelihood:
      "Moderate",
    priority:
      "P1",
    recommendation:
      "Schedule a synthetic recovery validation and update recovery ownership and evidence.",
    owner:
      "Application Resilience Owner",
    validation:
      "Document successful fictional recovery validation and review date.",
  },
  {
    id: "CF-1806",
    title: "Cloud architecture documentation does not reflect recent change",
    evidence:
      "CLD-1812, CLD-1813",
    condition:
      "APP-C1 queue-writing behavior changed, but the architecture dependency summary still shows the older design.",
    risk:
      "Reviewers may reason from an outdated model of current service behavior.",
    impact:
      "Moderate",
    likelihood:
      "High",
    priority:
      "P1",
    recommendation:
      "Refresh the architecture diagram and dependency summary with the approved change evidence.",
    owner:
      "Cloud Architecture Owner",
    validation:
      "Compare the new diagram with CHG-C44 and current service behavior records.",
  },
  {
    id: "CF-1807",
    title: "Degraded external-service state is not visible on monitoring dashboard",
    evidence:
      "CLD-1816",
    condition:
      "APP-C1 may continue without EXT-C3, but the dashboard does not expose that degraded mode.",
    risk:
      "The service may appear fully healthy while optional capability is unavailable.",
    impact:
      "Low to Moderate",
    likelihood:
      "Moderate",
    priority:
      "P2",
    recommendation:
      "Add a visible degraded-state indicator to the fictional operational health model.",
    owner:
      "Application Service Owner",
    validation:
      "Use a synthetic EXT-C3 outage scenario and confirm degraded state is visible.",
  },
  {
    id: "CF-1808",
    title: "Service identity approval evidence needs refresh",
    evidence:
      "CLD-1801",
    condition:
      "SVC-C1 permissions match documented function, but the approval record is six months old.",
    risk:
      "The permission may remain appropriate while the governance evidence becomes stale.",
    impact:
      "Moderate",
    likelihood:
      "Low",
    priority:
      "P2",
    recommendation:
      "Revalidate the permission purpose and owner approval without broadening access.",
    owner:
      "Cloud IAM Owner",
    validation:
      "Record current approval and confirm the permission set remains least-privileged.",
  },
];

const interpretationPatterns = [
  {
    condition:
      "Public service is intentionally reachable through an approved gateway.",
    poorConclusion:
      "Public means insecure.",
    betterConclusion:
      "Public reachability is expected; review control placement, backend exposure, identity, logging, and ownership.",
  },
  {
    condition:
      "Backup jobs succeed every day.",
    poorConclusion:
      "Recovery is guaranteed.",
    betterConclusion:
      "Backup creation is healthy, but recovery confidence depends on current validation evidence.",
  },
  {
    condition:
      "A storage policy appears restrictive.",
    poorConclusion:
      "Governance is current.",
    betterConclusion:
      "Configuration looks bounded; review classification, owner, approval, and evidence freshness separately.",
  },
  {
    condition:
      "An administrator has two roles.",
    poorConclusion:
      "The access is definitely unauthorized.",
    betterConclusion:
      "Check the approval, purpose, exception, expiration, and current role requirements before concluding.",
  },
  {
    condition:
      "Monitoring health failed twice.",
    poorConclusion:
      "All cloud logging is lost.",
    betterConclusion:
      "Monitoring stability is a risk signal; inspect fallback evidence and actual collection health before making a stronger claim.",
  },
  {
    condition:
      "A diagram is stale.",
    poorConclusion:
      "The environment itself is misconfigured.",
    betterConclusion:
      "The documentation no longer proves the current architecture; reconcile it with approved change records.",
  },
];

const cloudRiskFactors = [
  {
    factor: "Exposure",
    question:
      "Is the service intentionally public, private, internal, or restricted, and is the boundary appropriate for its purpose?",
  },
  {
    factor: "Privilege",
    question:
      "How much authority does the identity have and is it still necessary?",
  },
  {
    factor: "Data sensitivity",
    question:
      "Would incorrect access or loss affect internal, restricted, regulated, or critical information?",
  },
  {
    factor: "Business criticality",
    question:
      "How important is the workload to normal organizational operations?",
  },
  {
    factor: "Monitoring quality",
    question:
      "Would important changes, access, or failures be visible to reviewers?",
  },
  {
    factor: "Resilience",
    question:
      "Can the workload degrade or recover safely when dependencies fail?",
  },
  {
    factor: "Reversibility",
    question:
      "Can the configuration or permission be safely corrected without broad disruption?",
  },
  {
    factor: "Evidence freshness",
    question:
      "Are the owner, approval, classification, architecture, and validation records current?",
  },
];

const reviewFields = [
  {
    field: "Cloud finding ID",
    purpose:
      "Stable reference for the case finding.",
    example:
      "CF-1805",
  },
  {
    field: "Service / resource",
    purpose:
      "Names the fictional workload, identity, data store, logging service, or dependency.",
    example:
      "DATA-C1",
  },
  {
    field: "Evidence references",
    purpose:
      "Links the finding to specific cloud records.",
    example:
      "CLD-1811",
  },
  {
    field: "Observed condition",
    purpose:
      "States what the case package actually shows.",
    example:
      "Daily backups exist; last recovery validation is 13 months old",
  },
  {
    field: "Risk statement",
    purpose:
      "Explains what could happen and why the condition matters.",
    example:
      "Backups may not provide expected recovery confidence without current validation",
  },
  {
    field: "Impact",
    purpose:
      "Rates consequence in the fictional environment.",
    example:
      "High",
  },
  {
    field: "Likelihood",
    purpose:
      "Rates plausibility from current evidence.",
    example:
      "Moderate",
  },
  {
    field: "Priority",
    purpose:
      "Orders remediation attention.",
    example:
      "P1",
  },
  {
    field: "Recommendation",
    purpose:
      "Defines the bounded defensive improvement.",
    example:
      "Perform a synthetic recovery validation and refresh ownership evidence",
  },
  {
    field: "Owner",
    purpose:
      "Names the accountable fictional role.",
    example:
      "Application Resilience Owner",
  },
  {
    field: "Compensating control",
    purpose:
      "Records an interim safeguard while remediation is pending.",
    example:
      "Daily backup-job health review",
  },
  {
    field: "Validation",
    purpose:
      "Defines what proves the issue is resolved.",
    example:
      "Current recovery validation with documented result",
  },
];

const dashboardMetrics = [
  {
    label: "Cloud evidence records",
    value: "16",
    note: "Identity, privilege, storage, logging, backup, change, secrets, ownership, and external dependency",
  },
  {
    label: "Priority findings",
    value: "8",
    note: "One P0, five P1, two P2",
  },
  {
    label: "Expired exceptions",
    value: "1",
    note: "Dual-role privilege exception requires immediate governance review",
  },
  {
    label: "Real cloud access",
    value: "0",
    note: "All analysis remains fictional, inert, and evidence-based",
  },
];

const logPreview = [
  "[08:10] CLD-1801 identity=SVC-C1 access=DATA-C1:READ,QUEUE-C2:WRITE approval_age=6_MONTHS",
  "[08:28] CLD-1803 exception=EXC-C17 state=EXPIRED age=3_DAYS",
  "[08:46] CLD-1804 storage=DATA-C1 classification=INTERNAL review_age=11_MONTHS",
  "[09:04] CLD-1808 logging=DATA-C1_ACCESS requirement=OPTIONAL",
  "[09:22] CLD-1809 monitor=MON-C1 failed_health_checks=2 window=MONTHLY",
  "[09:40] CLD-1811 backup=DATA-C1 daily=YES recovery_validation_age=13_MONTHS",
  "[09:58] CLD-1812 change=CHG-C44 approved=YES architecture_refreshed=NO",
  "[10:16] CLD-1816 dependency=EXT-C3 criticality=NONCRITICAL degraded_state_visible=NO",
];

const safeLabTasks = [
  "Create at least forty fictional CLD records.",
  "Give every record a stable CLD ID.",
  "Include at least six identity and access records.",
  "Include at least six storage and data-governance records.",
  "Include at least five network-boundary records.",
  "Include at least five logging and monitoring records.",
  "Include at least five backup and recovery records.",
  "Include at least five configuration-governance records.",
  "Include at least three secret-governance records using identifiers only, never secret values.",
  "Include at least five service-ownership records.",
  "Mark evidence freshness.",
  "Mark source ownership.",
  "Distinguish configuration state from governance evidence.",
  "Record public, private, internal, or restricted exposure purpose where relevant.",
  "Record service identity purpose.",
  "Record privileged-role purpose and review date.",
  "Record exceptions and expiration.",
  "Record data classification and review date.",
  "Record logging coverage.",
  "Record monitoring health.",
  "Record backup existence.",
  "Record recovery-validation freshness.",
  "Record current architecture version.",
  "Record approved changes not yet reflected in documentation.",
  "Create at least fifteen CF findings.",
  "Give every finding a stable CF ID.",
  "Link every finding to CLD evidence.",
  "Write bounded observed-condition statements.",
  "Write bounded risk statements.",
  "Assign impact.",
  "Assign likelihood.",
  "Assign priority.",
  "Assign a fictional owner.",
  "Identify compensating controls.",
  "Define validation evidence.",
  "Create at least three findings where configuration looks safe but governance evidence is stale.",
  "Create at least three findings where a public or external boundary is expected and not automatically a vulnerability.",
  "Create at least three resilience findings.",
  "Create at least three monitoring or logging findings.",
  "Create at least three identity-governance findings.",
  "Write a prioritized remediation sequence.",
  "Write a one-page leadership summary.",
  "Keep every record fictional, synthetic, and non-disruptive.",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Treat the expired privileged-role exception as a governance failure, verify the current business need, and either return to the approved role model or obtain a new time-bounded approval.",
    outcome:
      "Best. Temporary privilege should not continue automatically after exception expiration.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Leave both roles because the user already had them for two weeks.",
    outcome:
      "Risky. Past approval does not automatically authorize continued access after expiration.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Immediately assume malicious misuse occurred.",
    outcome:
      "Caution. The expired exception is a governance issue; misuse requires separate evidence.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep the approved public gateway model, confirm backend boundaries and logging, and document why public reachability is required.",
    outcome:
      "Best. Expected public exposure should be reviewed for control quality rather than labeled insecure automatically.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Call the service vulnerable solely because it is publicly reachable.",
    outcome:
      "Risky. Public reachability can be an intentional architecture decision.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Remove all monitoring because the gateway already protects the service.",
    outcome:
      "Risky. Gateway protection does not remove the need for observability.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What does shared responsibility mean in cloud security?",
    choices: [
      "The provider and customer each have different security responsibilities depending on the service model.",
      "The provider is responsible for every customer configuration.",
      "The customer is responsible for the physical data center.",
      "Neither side needs governance evidence.",
    ],
    answer: 0,
    explanation:
      "Cloud security depends on both provider capabilities and customer configuration and governance.",
  },
  {
    question:
      "What is strongest when a storage configuration appears restrictive but its classification review is stale?",
    choices: [
      "Keep configuration state and governance evidence separate, then refresh the classification review.",
      "Assume the storage is exposed.",
      "Assume governance is current because access looks safe.",
      "Broaden access while waiting for review.",
    ],
    answer: 0,
    explanation:
      "A technically bounded setting does not prove that governance evidence is current.",
  },
  {
    question:
      "Why is recovery validation different from backup existence?",
    choices: [
      "Backups show data copies exist; recovery validation provides evidence that restoration works as expected.",
      "There is no difference.",
      "Recovery validation is only about logging.",
      "Backup existence proves every recovery objective.",
    ],
    answer: 0,
    explanation:
      "Backup creation alone does not establish current recovery confidence.",
  },
  {
    question:
      "What is the best response to an expired privileged-role exception?",
    choices: [
      "Return to the approved role model or obtain a new explicit time-bounded exception with current evidence.",
      "Let the access continue indefinitely.",
      "Delete the exception record.",
      "Assume misuse occurred.",
    ],
    answer: 0,
    explanation:
      "Exception expiration requires a new governance decision rather than automatic continuation.",
  },
  {
    question:
      "What is strongest when a public service is intentionally exposed through an approved gateway?",
    choices: [
      "Review the gateway, backend boundary, identity, logging, and business purpose rather than assuming public means insecure.",
      "Call it compromised immediately.",
      "Remove logging.",
      "Ignore ownership.",
    ],
    answer: 0,
    explanation:
      "Expected exposure should be reviewed based on control design and purpose.",
  },
  {
    question:
      "What is a strong cloud review finding?",
    choices: [
      "An evidence-linked statement describing the observed condition, risk, impact, owner, priority, and validation need.",
      "A dramatic claim with no source references.",
      "A list of cloud product names.",
      "A set of real access commands.",
    ],
    answer: 0,
    explanation:
      "Professional findings remain traceable to evidence and bounded in scope.",
  },
  {
    question:
      "What is the purpose of the Cloud Security Case Review artifact?",
    choices: [
      "Document cloud evidence, findings, priorities, owners, compensating controls, validation criteria, and remediation sequence.",
      "Access a real cloud tenant.",
      "Test real credentials.",
      "Replace governance review.",
    ],
    answer: 0,
    explanation:
      "The artifact is a fictional defensive assessment and remediation plan.",
  },
];

const checklistItems = [
  "Shared-responsibility assumptions are explicit.",
  "Identity and access evidence is current.",
  "Privileged roles are reviewed.",
  "Service identities have clear purpose.",
  "Expired exceptions are not allowed to continue automatically.",
  "Storage exposure matches business purpose.",
  "Data classification is current.",
  "Public exposure is not treated as automatically insecure.",
  "Backend boundaries are reviewed.",
  "Logging coverage is documented.",
  "Monitoring health is reviewed.",
  "Backups are documented.",
  "Recovery validation is current.",
  "Architecture documentation reflects approved changes.",
  "Secrets are referenced without exposing values.",
  "Service ownership is current.",
  "External dependencies have degraded-mode assumptions.",
  "Findings link to evidence.",
  "Validation criteria are defined.",
  "No real cloud account, tenant, credential, secret, or production tool is accessed.",
];

const takeaways = [
  "Cloud security review separates provider capability from customer configuration and governance responsibility.",
  "A safe configuration can still have stale ownership, approval, classification, or review evidence.",
  "Public reachability is not automatically a vulnerability when it is intentional, bounded, monitored, and owned.",
  "Identity exceptions and privileged roles need current approval and expiration discipline.",
  "Backup existence and recovery confidence are different forms of evidence.",
  "Monitoring health matters because visibility can fail independently from workload availability.",
  "Architecture diagrams should reflect approved changes so reviewers can reason from the current design.",
  "External dependencies should have visible degraded-state behavior when the core service can continue safely.",
  "Strong cloud findings describe evidence, risk, owner, priority, compensating controls, and validation without overclaiming.",
  "The Cloud Security Case Review becomes the third artifact in the A18 Advanced Defensive Casebook.",
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
        Module A18
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

export default function CloudSecurityReviewCasePage() {
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
              A18.3
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Defensive Labs
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A18.3
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Cloud Security Review Case
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Cloud security is not one setting. It is a relationship among
            identity, data, exposure, logging, backup, architecture, ownership,
            and change governance. This case asks you to review that relationship
            without treating any single configuration as the whole answer.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            Every cloud service, identity, role, data store, dashboard, and
            change record in this lesson is fictional. No real cloud access is
            required or permitted.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A18: Advanced Defensive Labs"
          lessonTitle="Cloud Security Review Case"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A18.3 Entry Readiness"
          items={[
            "I understand that cloud-provider security and customer configuration are different responsibilities.",
            "I can separate technical configuration evidence from ownership, approval, and review evidence.",
            "I can evaluate identity, storage, logging, recovery, and change governance conceptually.",
            "I will not access any real cloud account, tenant, credential, secret, or production system.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Cloud Findings Often Hide in the Gap Between Configuration and Governance"
        >
          <p className="leading-8">
            A fictional storage policy may look perfectly restrictive today,
            yet the data classification supporting that policy may be a year
            old. A privileged role may still be technically valid while its
            temporary exception has expired. Backups may run every night while
            nobody has tested recovery recently.
          </p>

          <p className="mt-4 leading-8">
            That is why cloud review is not simply “look for open settings.”
            Strong reviewers ask whether the design is appropriate, current,
            observable, recoverable, owned, and governed.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Cloud security quality lives in both the technical state and the evidence that proves the state is still intentional.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for This Lab"
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
          eyebrow="Shared Responsibility"
          title="Who Is Responsible for What?"
        >
          <div className="grid gap-5">
            {sharedResponsibility.map((item) => (
              <article
                key={item.area}
                className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6"
              >
                <h3 className="text-xl font-black text-purple-50">
                  {item.area}
                </h3>
                <p className="mt-3 leading-7 text-purple-100">
                  {item.idea}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Review implication: {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Cloud Review Domains"
          title="Eight Areas That Shape the Case"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {cloudReviewDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.domain}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  Ask: {item.questions}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Cloud Case File"
          title="Northbridge Synthetic Cloud Evidence"
        >
          <div className="grid gap-5">
            {northbridgeCloudEvidence.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.area}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.freshness}
                  </span>
                </div>

                <p className="mt-5 leading-7 text-white">{item.observation}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Confidence
                    </p>
                    <p className="mt-2 text-sm text-emerald-50">
                      {item.confidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Review concern
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.concern}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Cloud Security Review Dashboard"
          subtitle="Fictional evidence volume, priority findings, expired exceptions, and safety posture"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Expired Privileged-Role Exception Requires Governance Review"
          severity="High"
          time="10:16"
          source="Fictional Cloud Review Queue"
          details="EXC-C17 allowed one fictional user to hold both Cloud Platform Admin and Security Review Admin roles for fourteen days. The exception expired three days ago, but the role assignment still appears active."
          recommendation="Verify current business need and either return to the approved role model or obtain a new explicit, time-bounded exception with current evidence and compensating controls."
        />

        <FakeLogPanel
          title="Northbridge Fictional Cloud Review Log"
          logs={logPreview}
        />

        <Section
          eyebrow="Cloud Findings"
          title="Eight Evidence-Backed Findings"
        >
          <div className="grid gap-5">
            {cloudFindings.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black text-yellow-100">
                    {item.priority}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.title}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Evidence", item.evidence],
                    ["Observed condition", item.condition],
                    ["Risk", item.risk],
                    ["Impact", item.impact],
                    ["Likelihood", item.likelihood],
                    ["Recommendation", item.recommendation],
                    ["Owner", item.owner],
                    ["Validation", item.validation],
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

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Expired Privileged Exception"
          question="What is the strongest conclusion about EXC-C17?"
          evidence={[
            "The dual-role assignment was explicitly approved for fourteen days.",
            "The exception expired three days ago.",
            "No renewal or closure evidence is attached.",
            "The user still appears to hold both roles.",
            "The case contains no evidence of misuse.",
          ]}
          options={[
            "The exception is no longer current and the role assignment needs governance review; misuse is not established.",
            "The access is definitely malicious.",
            "The expired exception can continue indefinitely because it was once approved.",
            "Delete the exception record and keep the roles.",
          ]}
          bestAnswer={0}
          explanation="The strongest supported finding is a governance failure: the temporary privilege outlived its approved exception. Misuse would require separate evidence."
        />

        <Section
          eyebrow="Interpretation Quality"
          title="Avoid Common Cloud Review Overstatements"
        >
          <div className="grid gap-5">
            {interpretationPatterns.map((item) => (
              <article
                key={item.condition}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <p className="font-black text-white">{item.condition}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Weak conclusion
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.poorConclusion}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Stronger conclusion
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.betterConclusion}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Cloud Risk Prioritization"
          title="Eight Factors That Shape Remediation Priority"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {cloudRiskFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.factor}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.question}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Review Artifact"
          title="What a Professional Cloud Security Case Review Contains"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reviewFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.field}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Privileged Exception Expired"
          scenario="A fictional user still holds two privileged cloud roles even though the approved temporary exception expired three days ago."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Intentional Public Service"
          scenario="A fictional web service is intentionally public through an approved managed gateway. Backend application and data services remain on private paths."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Cloud Security Case Review"
        >
          <p className="leading-8">
            Review a synthetic cloud environment as a combination of identity,
            data, exposure, evidence, resilience, ownership, and governance.
          </p>

          <div className="mt-6 grid gap-4">
            {safeLabTasks.map((item, index) => (
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
              Use only fictional cloud identities, roles, storage records,
              architecture diagrams, logging evidence, backup records, change
              records, and managed-secret identifiers. Never use real secrets,
              credentials, tenants, cloud consoles, accounts, or live services.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Backup vs Recovery Confidence"
          question="What is the strongest conclusion about DATA-C1?"
          evidence={[
            "Daily fictional backup records exist.",
            "Backup-job health is current.",
            "The last documented recovery validation is thirteen months old.",
            "No current recovery failure is shown.",
            "The service is operationally important.",
          ]}
          options={[
            "Backups appear current, but recovery confidence is stale and should be refreshed through a synthetic validation.",
            "The backups are definitely unusable.",
            "Recovery is guaranteed because backups exist.",
            "Delete the backup evidence and start over.",
          ]}
          bestAnswer={0}
          explanation="Backup existence and recoverability are related but distinct. Current restoration evidence provides stronger recovery confidence."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Write a Cloud Remediation Sequence"
        >
          <p className="leading-8">
            Using the Northbridge case, create a prioritized remediation
            sequence that explains what should happen first, why, who owns it,
            what evidence is needed, and what can wait.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "P0 governance issue",
              "Highest identity risk",
              "Highest storage-governance issue",
              "Highest logging concern",
              "Highest monitoring concern",
              "Highest recovery concern",
              "Highest documentation concern",
              "Highest external-dependency concern",
              "Compensating control",
              "Owner",
              "Validation evidence",
              "Review date",
              "What should not change yet",
              "Leadership summary",
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
            The strongest sequence should distinguish urgent governance gaps
            from lower-priority documentation or usability improvements.
          </p>
        </Section>

        <DefenderChecklist
          title="A18.3 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A18.3 Mini Quiz: Cloud Security Review Case"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Cloud Security Case Review"
          prompt="Create the third artifact for your A18 Advanced Defensive Casebook: a fictional Cloud Security Case Review. Include shared-responsibility assumptions, identity and privileged-access evidence, storage classification and exposure, network boundaries, logging and monitoring, backup and recovery, configuration governance, secret references, ownership, external dependencies, at least fifteen findings, evidence links, impact, likelihood, priority, compensating controls, remediation owners, validation criteria, remediation sequence, and a one-page leadership summary."
          tips={[
            "Separate technical configuration from governance evidence.",
            "Do not treat public exposure as automatically insecure.",
            "Review privilege, data, monitoring, resilience, and ownership together.",
            "Never include real secrets or credentials.",
            "Use bounded findings and current evidence.",
            "Keep the entire case fictional and non-disruptive.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A18.4?"
        >
          <p className="leading-8">
            A18.4 focuses on a fictional identity access review. Before
            continuing, make sure you can distinguish cloud identity,
            configuration, exposure, logging, recovery, and governance evidence
            without treating one setting as the entire security story.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain shared responsibility.",
              "I can separate configuration state from governance freshness.",
              "I can review cloud identity, storage, logging, backup, and architecture evidence together.",
              "I can prioritize cloud findings without exaggerating what the evidence proves.",
              "I can write remediation recommendations without accessing or changing a real cloud environment.",
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
          title="How to Make the Cloud Review Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Define the service context",
                detail:
                  "A reviewer should know which workloads, data stores, identities, and dependencies are in scope.",
              },
              {
                title: "Separate technical state from governance",
                detail:
                  "A safe-looking configuration can still have stale approval or ownership evidence.",
              },
              {
                title: "Use evidence IDs",
                detail:
                  "Every finding should trace directly to specific fictional cloud records.",
              },
              {
                title: "Protect secrets",
                detail:
                  "Use managed-secret identifiers or metadata only; never include secret values.",
              },
              {
                title: "Review resilience",
                detail:
                  "Backup, recovery, monitoring health, and degraded-mode behavior all belong in the cloud story.",
              },
              {
                title: "Write bounded exposure findings",
                detail:
                  "Intentional public access should be evaluated by purpose and controls, not labeled unsafe by default.",
              },
              {
                title: "Show remediation order",
                detail:
                  "P0 and P1 findings should clearly outrank lower-impact documentation improvements.",
              },
              {
                title: "Connect forward",
                detail:
                  "A18.4 narrows the focus to identity access review, approval, stale privilege, and exception decisions.",
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
            A18.3 stays fictional, defensive, conceptual, and credential-free
          </h2>
          <p className="mt-3 leading-7">
            Do not access real cloud consoles, tenants, accounts, secrets,
            credentials, tokens, private records, or production tools. Do not
            test or modify real cloud configurations. This lesson uses synthetic
            evidence to practice cloud architecture, identity, data, logging,
            recovery, governance, and risk review.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A18.3 Cloud Security Review Case Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a defensible cloud-review model covering shared
            responsibility, identity, storage, network boundaries, logging,
            monitoring, backup, recovery, secrets, ownership, configuration
            governance, findings, and remediation priorities. Next, A18.4 moves
            into an Identity Access Review Case.
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