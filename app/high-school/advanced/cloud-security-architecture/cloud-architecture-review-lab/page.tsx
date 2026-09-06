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
const previousLesson = `${modulePath}/cloud-governance-concepts`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate shared responsibility, IAM, storage, network, monitoring, secrets, resilience, configuration assurance, and governance into one evidence-based cloud architecture assessment.",
  "Evaluate a fictional cloud release candidate by separating confirmed controls, conditional evidence, unknowns, blocked findings, exceptions, and accepted residual risk.",
  "Connect architecture claims to owners, current evidence, dependencies, review triggers, remediation, and governance decisions instead of relying on diagrams or configuration labels alone.",
  "Produce a defensible cloud release recommendation that distinguishes technical readiness from unresolved governance, recovery, identity, monitoring, and lifecycle risk.",
  "Complete the A12 Cloud Security Architecture Assessment as a portfolio-ready capstone artifact.",
];

const architectureDomains = [
  {
    domain: "Shared responsibility",
    question:
      "Which security outcomes are handled by the provider, which are handled by Northbridge, and which require coordination?",
    strongEvidence:
      "Service-model responsibility matrix, provider capability assumptions, customer-owned controls, named owners, and evidence boundaries.",
    warning:
      "Provider capability should never be treated as proof that customer configuration, ownership, or governance is correct.",
  },
  {
    domain: "Identity and access",
    question:
      "Can every important human and workload access path explain who or what acts, why access exists, what scope is allowed, who approves it, and when it ends?",
    strongEvidence:
      "IAM architecture matrix, workload identity records, privileged-access evidence, guest lifecycle, access review, and ownership.",
    warning:
      "Shared credentials, stale roles, unowned service identities, or permanent broad admin access weaken the architecture.",
  },
  {
    domain: "Storage and data exposure",
    question:
      "Where does data live, which copies exist, who can access them, what exposure is intended, and how do retention and deletion work?",
    strongEvidence:
      "Storage exposure review, classification, access scope, copy lineage, retention, logging, backup relationships, and ownership.",
    warning:
      "Encryption alone does not prove storage is private, least-privileged, correctly retained, or properly owned.",
  },
  {
    domain: "Network trust boundaries",
    question:
      "Which sources can reach which destinations, why do those paths exist, where does trust change, and which flows should not exist?",
    strongEvidence:
      "Trust-boundary map, public/private service paths, partner connectivity, administrative path, egress, environment separation, and monitoring.",
    warning:
      "Private network location should not be confused with identity or authorization.",
  },
  {
    domain: "Logging and monitoring",
    question:
      "Can the cloud produce current evidence about identity, configuration, data access, network, application, recovery, and source health?",
    strongEvidence:
      "Monitoring coverage matrix, source-health checks, alert ownership, event context, retention, and known gaps.",
    warning:
      "No alert is not reassuring when the required telemetry source may be missing or stale.",
  },
  {
    domain: "Secrets and key governance",
    question:
      "Are workload identities, service credentials, key references, certificates, and emergency credentials owned, narrow, monitored, revocable, and lifecycle-managed?",
    strongEvidence:
      "Secrets/key governance register, workload identity adoption, rotation/renewal evidence, revocation paths, environment separation, and dependency mapping.",
    warning:
      "Architecture artifacts should never contain real secret values or private key material.",
  },
  {
    domain: "Backup, recovery, and resilience",
    question:
      "What must recover, how quickly, with how much acceptable data loss, through which dependencies, and what current evidence proves recovery?",
    strongEvidence:
      "Recovery assessment, RTO/RPO, protected-resource scope, restore exercises, identity/key dependencies, external dependencies, monitoring, and owner sign-off.",
    warning:
      "Healthy backups do not prove a service can be restored and validated end-to-end.",
  },
  {
    domain: "Configuration assurance",
    question:
      "Does the observed cloud state still match the approved baseline, and are drift, exceptions, manual changes, and remediation governed?",
    strongEvidence:
      "Configuration assurance register, current baseline, drift evidence, exceptions, compensating controls, validation, and closure evidence.",
    warning:
      "A one-time secure launch does not prove the architecture remains secure months later.",
  },
  {
    domain: "Governance",
    question:
      "Who owns each service, control, evidence source, exception, residual risk, review decision, and retirement obligation?",
    strongEvidence:
      "Governance decision register, service inventory, standards, review triggers, risk decisions, exception lifecycle, and retirement conditions.",
    warning:
      "Unowned cloud risk should not become accepted risk by default.",
  },
];

const assessmentStates = [
  {
    state: "Confirmed",
    meaning:
      "Current evidence supports the architecture claim within its stated scope.",
    use:
      "Use only when ownership, evidence freshness, and relevant dependencies are sufficiently established.",
  },
  {
    state: "Conditional",
    meaning:
      "Important control evidence exists, but one bounded gap, dependency, review, or follow-up remains.",
    use:
      "Use when the design is partly supported but readiness depends on a known unresolved condition.",
  },
  {
    state: "Unknown",
    meaning:
      "The review cannot establish whether the expected control or condition is present.",
    use:
      "Use when evidence is missing, stale, incomplete, conflicting, or outside the reviewer’s scope.",
  },
  {
    state: "Blocked",
    meaning:
      "A material finding prevents the architecture from meeting the required release or governance condition.",
    use:
      "Use for unresolved high-impact issues such as unowned privileged access, unsupported exposure, missing lifecycle control, or invalid environment crossover.",
  },
  {
    state: "Accepted Risk",
    meaning:
      "A known residual risk remains after mitigation and has been explicitly accepted by an authorized risk owner under defined conditions.",
    use:
      "Use only when risk, mitigation, residual impact, authority, review date, and triggers are documented.",
  },
  {
    state: "Not Applicable",
    meaning:
      "The control or architecture question does not apply to the reviewed service for a documented reason.",
    use:
      "Use sparingly and explain why the domain or requirement is outside the architecture scope.",
  },
];

const reviewPrinciples = [
  {
    title: "Claim → evidence → owner",
    meaning:
      "Every important architecture claim should point to current evidence and an accountable owner.",
    test:
      "Could another reviewer independently understand why the claim is trusted?",
  },
  {
    title: "Architecture includes dependencies",
    meaning:
      "The cloud service depends on identity, keys, logging, data, networks, partners, recovery, and governance beyond the visible application.",
    test:
      "What breaks if one supporting platform or external dependency is unavailable?",
  },
  {
    title: "Conditional is a valid outcome",
    meaning:
      "A professional review does not force every item into Pass or Fail when evidence is incomplete but bounded.",
    test:
      "Is the unresolved condition specific, owned, and reviewable?",
  },
  {
    title: "Unknown is evidence about evidence",
    meaning:
      "A missing or stale record is itself a meaningful review result.",
    test:
      "Does the assessment preserve uncertainty instead of inventing confidence?",
  },
  {
    title: "Exceptions do not erase standards",
    meaning:
      "A temporary approved deviation remains a deviation and should retain its target state and expiration.",
    test:
      "What happens when the exception reaches its review date?",
  },
  {
    title: "Risk acceptance needs authority",
    meaning:
      "A technical team can describe residual risk, but only an authorized owner should accept it for the relevant business scope.",
    test:
      "Who owns the impact if the residual risk becomes real?",
  },
  {
    title: "Recovery is part of release readiness",
    meaning:
      "A production service should have a credible recovery story appropriate to its business priority.",
    test:
      "Does current evidence show the actual service, not only a backup, can recover?",
  },
  {
    title: "Review should produce a decision",
    meaning:
      "The final output should explain what is ready, what is not, what remains conditional, and what must happen next.",
    test:
      "Can leadership or an engineering team act on the conclusion without rereading every raw record?",
  },
];

const vocabulary = [
  {
    term: "Architecture assessment",
    definition:
      "A structured review that compares cloud design intent, current evidence, ownership, risk, and governance to determine readiness.",
  },
  {
    term: "Architecture claim",
    definition:
      "A statement about how the cloud environment is intended to behave, such as a storage location being private or a privileged role being time-bounded.",
  },
  {
    term: "Evidence package",
    definition:
      "The records used to support an architecture claim, including ownership, configuration, logs, reviews, tests, lifecycle evidence, and related decisions.",
  },
  {
    term: "Release recommendation",
    definition:
      "A documented decision such as Ready, Ready with Conditions, Hold, or Reject based on current evidence and risk.",
  },
  {
    term: "Blocking finding",
    definition:
      "A material unresolved issue that prevents the reviewed architecture from meeting required release or governance conditions.",
  },
  {
    term: "Residual risk",
    definition:
      "The risk that remains after current controls and mitigations are considered.",
  },
  {
    term: "Compensating control",
    definition:
      "An alternate control used to reduce risk when the preferred standard cannot yet be met.",
  },
  {
    term: "Evidence freshness",
    definition:
      "How current the supporting record is relative to the architecture claim and recent system changes.",
  },
  {
    term: "Review trigger",
    definition:
      "A scheduled or event-driven condition that should cause an architecture decision to be reassessed.",
  },
  {
    term: "Decision authority",
    definition:
      "The person or role authorized to approve release, accept residual risk, approve exceptions, or require remediation.",
  },
  {
    term: "Architecture debt",
    definition:
      "Known design, ownership, lifecycle, evidence, or governance weakness that remains unresolved and can increase future risk.",
  },
  {
    term: "Closure evidence",
    definition:
      "Proof that a finding or exception has actually reached the approved target state and can be closed.",
  },
];

const portfolioArtifacts = [
  {
    lesson: "A12.1",
    artifact: "Shared Responsibility Architecture Map",
    contribution:
      "Defines provider, customer, and shared responsibility boundaries across the reviewed cloud service.",
    capstoneUse:
      "Prevents the review from assuming the provider owns customer IAM, data classification, guest lifecycle, monitoring design, or risk acceptance.",
  },
  {
    lesson: "A12.2",
    artifact: "Cloud IAM Architecture Matrix",
    contribution:
      "Maps human, privileged, workload, service, temporary, and external identities.",
    capstoneUse:
      "Supports identity scope, least privilege, workload identity, approval, lifecycle, and ownership decisions.",
  },
  {
    lesson: "A12.3",
    artifact: "Cloud Storage Exposure Review",
    contribution:
      "Maps data stores, classifications, access, exposure, copies, retention, encryption responsibility, logging, and owners.",
    capstoneUse:
      "Supports data-boundary and public/private exposure conclusions.",
  },
  {
    lesson: "A12.4",
    artifact: "Cloud Trust Boundary Map",
    contribution:
      "Maps public ingress, private service paths, administration, partner integration, egress, recovery, and environment boundaries.",
    capstoneUse:
      "Supports reachability and trust-change conclusions.",
  },
  {
    lesson: "A12.5",
    artifact: "Cloud Monitoring Coverage Matrix",
    contribution:
      "Maps telemetry domains, source health, event context, retention, alert ownership, and known visibility gaps.",
    capstoneUse:
      "Supports confidence in the evidence used by the architecture review itself.",
  },
  {
    lesson: "A12.6",
    artifact: "Cloud Secrets and Key Governance Register",
    contribution:
      "Maps workload identity, managed secret references, service credentials, keys, certificates, emergency access, rotation, revocation, and ownership.",
    capstoneUse:
      "Supports service trust, identity, availability, and lifecycle conclusions without exposing secret values.",
  },
  {
    lesson: "A12.7",
    artifact: "Cloud Recovery and Resilience Assessment",
    contribution:
      "Maps RTO, RPO, protected resources, restore evidence, dependencies, failure domains, owners, and monitoring.",
    capstoneUse:
      "Supports production recovery readiness and business continuity conclusions.",
  },
  {
    lesson: "A12.8",
    artifact: "Cloud Configuration Assurance Register",
    contribution:
      "Compares approved baseline to observed state and tracks drift, exceptions, remediation, validation, and change triggers.",
    capstoneUse:
      "Supports current-state confidence rather than launch-day confidence.",
  },
  {
    lesson: "A12.9",
    artifact: "Cloud Governance Decision Register",
    contribution:
      "Maps service owners, standards, evidence, exceptions, residual risk, decision authority, review cadence, and lifecycle.",
    capstoneUse:
      "Supports final release authority, risk decisions, and ongoing ownership.",
  },
];

const evidenceRecords = [
  {
    id: "ARCH-01",
    domain: "Shared responsibility",
    claim:
      "Northbridge owns customer IAM, data classification, access decisions, monitoring use, configuration assurance, and recovery governance for the reviewed service.",
    evidence:
      "A12.1 responsibility map + current service inventory",
    owner:
      "Cloud Service Owner",
    state: "Confirmed",
    finding:
      "Provider-managed capabilities remain inputs; customer configuration and governance remain Northbridge responsibilities.",
  },
  {
    id: "ARCH-02",
    domain: "IAM",
    claim:
      "Production application data access uses workload identity and privileged administration is JIT-controlled.",
    evidence:
      "IAM-03 workload identity + IAM-02 privileged access records",
    owner:
      "Application Team + Platform Engineering",
    state: "Conditional",
    finding:
      "Workload identity is current; one emergency admin activation still lacks linked post-use review.",
  },
  {
    id: "ARCH-03",
    domain: "Storage",
    claim:
      "Restricted application data and generated reports remain private and access-controlled.",
    evidence:
      "STO-01 database + STO-02 report storage records",
    owner:
      "Data Platform + Reporting Team",
    state: "Confirmed",
    finding:
      "No public access is required for restricted application data or generated reports.",
  },
  {
    id: "ARCH-04",
    domain: "Network",
    claim:
      "Only the student portal entry point is public; database and report storage remain on private service paths.",
    evidence:
      "NET-01, NET-02, NET-03 trust-boundary records",
    owner:
      "Application Platform Team",
    state: "Confirmed",
    finding:
      "Public exposure is intentionally limited to the approved application entry point.",
  },
  {
    id: "ARCH-05",
    domain: "Network / environment",
    claim:
      "Development has no standing path to production reporting data.",
    evidence:
      "NET-07 + CFG-06",
    owner:
      "Unknown",
    state: "Blocked",
    finding:
      "A legacy development-to-production reporting path still exists without current owner or valid exception.",
  },
  {
    id: "ARCH-06",
    domain: "Monitoring",
    claim:
      "Critical identity, management, database, application, network, and recovery telemetry is current and source health is monitored.",
    evidence:
      "LOG-01 through LOG-08 monitoring matrix",
    owner:
      "Security Monitoring",
    state: "Conditional",
    finding:
      "Critical sources are broadly covered, but temporary-export freshness automation remains incomplete under a time-bounded exception.",
  },
  {
    id: "ARCH-07",
    domain: "Secrets / identity",
    claim:
      "Primary application access avoids copied human credentials and uses workload identity.",
    evidence:
      "SEC-01 Student Portal Workload Identity",
    owner:
      "Application Team",
    state: "Confirmed",
    finding:
      "Portal workload access is bound to named non-human identity and approved service scope.",
  },
  {
    id: "ARCH-08",
    domain: "Secrets / legacy",
    claim:
      "All active production service credentials have current ownership, rotation, and revocation.",
    evidence:
      "SEC-05 Legacy Reporting Credential",
    owner:
      "Unknown",
    state: "Blocked",
    finding:
      "Legacy credential remains active with Unknown ownership, overdue rotation, and no documented revocation path.",
  },
  {
    id: "ARCH-09",
    domain: "Resilience",
    claim:
      "Critical Student Services Portal recovery is supported by current service-level exercise evidence.",
    evidence:
      "REC-01 full service recovery exercise",
    owner:
      "Application Recovery Owner",
    state: "Confirmed",
    finding:
      "Current exercise includes application, database, workload identity, report storage, logging, and service validation.",
  },
  {
    id: "ARCH-10",
    domain: "Resilience / storage",
    claim:
      "Generated Report Storage has current restoration evidence.",
    evidence:
      "REC-03",
    owner:
      "Reporting Team",
    state: "Conditional",
    finding:
      "Backup state is current, but restoration evidence predates the current storage architecture.",
  },
  {
    id: "ARCH-11",
    domain: "Configuration assurance",
    claim:
      "Critical cloud baselines are continuously compared with observed state.",
    evidence:
      "CFG-01 through CFG-08 configuration assurance records",
    owner:
      "Cloud Security + Service Owners",
    state: "Conditional",
    finding:
      "Most domains are governed, but blocked legacy identity/network drift and several conditional follow-ups remain.",
  },
  {
    id: "ARCH-12",
    domain: "Governance",
    claim:
      "All material cloud risks and exceptions have current owners and decision authority.",
    evidence:
      "GOV-01 through GOV-08 + RISK-01 through RISK-04",
    owner:
      "Cloud Governance",
    state: "Blocked",
    finding:
      "Legacy credential and cross-environment path remain unowned and therefore cannot be validly accepted as residual risk.",
  },
];

const conflicts = [
  {
    id: "CONFLICT-01",
    evidenceA:
      "Network architecture says production services are private and environment-separated.",
    evidenceB:
      "NET-07 / CFG-06 show a legacy development-to-production reporting path.",
    interpretation:
      "The general design intent is strong, but the observed environment state conflicts with it.",
    decision:
      "Keep the environment-separation claim Blocked until the path is removed or validly governed.",
  },
  {
    id: "CONFLICT-02",
    evidenceA:
      "Monitoring dashboard shows no concerning temporary-export events.",
    evidenceB:
      "LOG-08 does not yet verify temporary-export source freshness automatically.",
    interpretation:
      "No-event evidence is weaker while source-health confidence is incomplete.",
    decision:
      "Keep the monitoring claim Conditional under the time-bounded exception.",
  },
  {
    id: "CONFLICT-03",
    evidenceA:
      "Report-storage backup configuration is current.",
    evidenceB:
      "The latest restore exercise predates the current storage architecture.",
    interpretation:
      "Backup operation and restoration readiness are different claims.",
    decision:
      "Keep report-storage recovery Conditional until current restoration evidence exists.",
  },
  {
    id: "CONFLICT-04",
    evidenceA:
      "Northbridge has a standard requiring owned, revocable, lifecycle-managed service credentials.",
    evidenceB:
      "SEC-05 has no owner, overdue rotation, and no revocation path.",
    interpretation:
      "The legacy credential is not a valid exception or accepted risk.",
    decision:
      "Keep it Blocked and require replacement or retirement.",
  },
];

const releaseCriteria = [
  {
    criterion: "No unowned production privileged or credential path",
    evidence:
      "IAM and secrets governance records",
    current:
      "Not met — SEC-05 has no confirmed owner",
    result:
      "Blocker",
  },
  {
    criterion: "No unsupported cross-environment production access",
    evidence:
      "Network and configuration assurance records",
    current:
      "Not met — NET-07 / CFG-06 remain unresolved",
    result:
      "Blocker",
  },
  {
    criterion: "Critical application recovery evidence current",
    evidence:
      "REC-01 full service recovery",
    current:
      "Met",
    result:
      "Ready",
  },
  {
    criterion: "Critical monitoring sources current enough for release review",
    evidence:
      "LOG-01 through LOG-08",
    current:
      "Mostly met; temporary-export source-health exception remains bounded",
    result:
      "Conditional",
  },
  {
    criterion: "Restricted application data remains private",
    evidence:
      "STO-01, STO-02, NET-02, NET-03",
    current:
      "Met",
    result:
      "Ready",
  },
  {
    criterion: "Privileged administration governed",
    evidence:
      "IAM-02 + CFG-01",
    current:
      "Mostly met; one post-use review missing",
    result:
      "Conditional",
  },
  {
    criterion: "Material residual risks have authorized ownership",
    evidence:
      "Governance decision register",
    current:
      "Not met for two blocked legacy findings",
    result:
      "Blocker",
  },
  {
    criterion: "Configuration findings have current owners and next actions",
    evidence:
      "Configuration assurance register",
    current:
      "Not met for two legacy findings",
    result:
      "Blocker",
  },
];

const remediationRegister = [
  {
    id: "REM-01",
    finding:
      "Legacy reporting credential has Unknown owner, overdue rotation, and no revocation path.",
    priority:
      "Critical",
    owner:
      "Cloud Service Owner to assign accountable service owner",
    action:
      "Confirm whether the legacy reporting service is still needed; replace with governed identity/credential or retire service and credential.",
    closure:
      "Named owner, approved target state, replacement/retirement evidence, and monitoring confirmation.",
    trigger:
      "Before production architecture approval.",
  },
  {
    id: "REM-02",
    finding:
      "Legacy development-to-production reporting path lacks owner and valid exception.",
    priority:
      "Critical",
    owner:
      "Platform + Application Owner",
    action:
      "Remove the path or document a narrowly scoped, time-bounded, monitored exception if a current business requirement truly exists.",
    closure:
      "Updated trust-boundary map, configuration evidence, owner, and validation of target state.",
    trigger:
      "Before production architecture approval.",
  },
  {
    id: "REM-03",
    finding:
      "One emergency privileged activation lacks linked post-use review.",
    priority:
      "High",
    owner:
      "Platform Engineering Manager",
    action:
      "Complete the required post-use review and verify privileged-access workflow evidence.",
    closure:
      "Review record linked to activation and governance item returned to Confirmed.",
    trigger:
      "Before final release sign-off or within approved governance window.",
  },
  {
    id: "REM-04",
    finding:
      "Temporary-export telemetry freshness automation incomplete.",
    priority:
      "Medium",
    owner:
      "Security Monitoring",
    action:
      "Complete automated source-health integration while maintaining the approved manual compensating control.",
    closure:
      "Freshness alert validated, exception closed, monitoring source state Confirmed.",
    trigger:
      "Before EX-01 expires.",
  },
  {
    id: "REM-05",
    finding:
      "Report-storage restoration evidence predates current architecture.",
    priority:
      "High",
    owner:
      "Reporting Team",
    action:
      "Complete an authorized current-architecture restoration exercise and validate application access.",
    closure:
      "New restore evidence supports present architecture and REC-03 returns to Confirmed.",
    trigger:
      "Before recovery readiness is claimed as complete.",
  },
  {
    id: "REM-06",
    finding:
      "Scheduling certificate replacement validation not yet started.",
    priority:
      "Medium",
    owner:
      "Integration Owner",
    action:
      "Complete renewal and replacement validation before the current certificate reaches the defined safety window.",
    closure:
      "Replacement validation evidence, updated certificate metadata, and successful integration health evidence.",
    trigger:
      "Before certificate lifecycle exception expires.",
  },
];

const dashboardMetrics = [
  {
    label: "Architecture domains reviewed",
    value: "9",
    note: "Responsibility, IAM, storage, network, monitoring, secrets, resilience, configuration, and governance",
  },
  {
    label: "Evidence records",
    value: "12",
    note: "Cross-domain claims linked to current A12 artifacts",
  },
  {
    label: "Blocking findings",
    value: "2",
    note: "Unowned legacy credential and unowned development-to-production path",
  },
  {
    label: "Conditional findings",
    value: "4",
    note: "Privileged post-review, telemetry freshness, report restore evidence, and certificate validation",
  },
];

const logs = [
  "[08:11] ARCH-01 responsibility-map owner=CloudServiceOwner state=CONFIRMED",
  "[08:34] ARCH-02 privileged-access JIT=YES post_review=PARTIAL state=CONDITIONAL",
  "[08:57] ARCH-05 dev-to-prod path=LEGACY owner=UNKNOWN state=BLOCKED",
  "[09:21] ARCH-06 monitoring temp-export-source-health=PARTIAL state=CONDITIONAL",
  "[09:48] ARCH-08 legacy-credential owner=UNKNOWN rotation=OVERDUE state=BLOCKED",
  "[10:14] ARCH-09 full-service-recovery evidence=42d state=CONFIRMED",
  "[10:39] ARCH-10 report-storage-restore evidence=STALE state=CONDITIONAL",
  "[11:02] ARCH-12 governance unowned-material-risks=2 state=BLOCKED",
  "[11:26] REVIEW recommendation=HOLD pending=REM-01+REM-02",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Issue a Hold recommendation because the unowned legacy credential and unowned cross-environment path are material blockers; allow the bounded conditional items to remain tracked with owners and due dates.",
    outcome:
      "Best. Blocking ownership and boundary findings should be resolved before the architecture is approved.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Approve the release because most controls are Confirmed and the blockers have not caused a known incident.",
    outcome:
      "Risky. A majority of good controls does not erase material unowned production risk.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Convert both blockers into Accepted Risk without assigning risk owners so the release can proceed.",
    outcome:
      "Risky. Risk acceptance requires appropriate authority, evidence, ownership, and explicit conditions.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep temporary-export monitoring Conditional, preserve the 14-day exception and manual compensating check, and require automated freshness validation before closure.",
    outcome:
      "Best. The gap is bounded, owned, time-limited, and has a clear target state.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Treat the monitoring domain as Failed because one source-health automation item is incomplete.",
    outcome:
      "Caution. The gap is real, but the broader monitoring architecture has current evidence and a governed temporary exception.",
    tone: "caution" as const,
  },
  {
    label: "Choice C",
    response:
      "Mark the domain Confirmed because no concerning export events appeared.",
    outcome:
      "Risky. No-event evidence is weaker when freshness monitoring is incomplete.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest purpose of a cloud architecture review?",
    choices: [
      "To produce the largest possible diagram.",
      "To connect architecture claims to current evidence, ownership, risk, dependencies, governance, and an actionable readiness decision.",
      "To verify only provider features.",
      "To replace all operational monitoring.",
    ],
    answer: 1,
    explanation:
      "A professional review turns evidence into a decision about readiness, risk, and next actions.",
  },
  {
    question:
      "When should a finding remain Unknown?",
    choices: [
      "When current evidence is missing, stale, conflicting, or insufficient to support the claim.",
      "Whenever the reviewer dislikes the service.",
      "Only when the cloud provider is offline.",
      "Never; every finding must be Pass or Fail.",
    ],
    answer: 0,
    explanation:
      "Unknown preserves uncertainty instead of inventing confidence.",
  },
  {
    question:
      "Why can a release be held even when most architecture domains are Confirmed?",
    choices: [
      "Because one material blocker can create unacceptable production risk even if many other controls are strong.",
      "Because every release must fail once.",
      "Because Confirmed controls have no value.",
      "Because the provider decides all customer releases.",
    ],
    answer: 0,
    explanation:
      "Release decisions depend on the impact of unresolved findings, not a simple majority vote.",
  },
  {
    question:
      "What is the strongest treatment of a time-bounded monitoring exception with owner, compensating control, expiration, and target state?",
    choices: [
      "Conditional until the preferred control is validated and the exception closes.",
      "Automatically Confirmed.",
      "Automatically Blocked forever.",
      "Remove it from the review.",
    ],
    answer: 0,
    explanation:
      "A governed exception can temporarily manage risk while remaining visibly different from the preferred state.",
  },
  {
    question:
      "Why does current backup status not automatically confirm report-storage recovery readiness?",
    choices: [
      "Because restoration evidence may be stale relative to the current architecture.",
      "Because backups are never useful.",
      "Because storage cannot be restored.",
      "Because only network evidence matters.",
    ],
    answer: 0,
    explanation:
      "Backup operation and current restoration capability are separate claims.",
  },
  {
    question:
      "What is required before an unowned legacy credential can be treated as Accepted Risk?",
    choices: [
      "Nothing; age is enough.",
      "A defined risk, current evidence, accountable service/risk owner, appropriate decision authority, mitigation, residual-risk rationale, conditions, and review triggers.",
      "Only a screenshot.",
      "A shared employee password.",
    ],
    answer: 1,
    explanation:
      "Risk acceptance is an authorized governance decision, not a label used to bypass unresolved ownership.",
  },
  {
    question:
      "What should the final architecture recommendation communicate?",
    choices: [
      "Only whether the diagram looks complete.",
      "What is Confirmed, Conditional, Unknown, Blocked, or Accepted Risk; why; who owns next actions; and what must happen before approval or re-review.",
      "Only provider responsibilities.",
      "Only the number of alerts generated.",
    ],
    answer: 1,
    explanation:
      "The final recommendation should make the evidence and action path clear to both technical and governance stakeholders.",
  },
];

const checklistItems = [
  "Shared responsibility is explicit for provider, customer, and shared outcomes.",
  "Every material human and workload access path has purpose, scope, owner, lifecycle, and evidence.",
  "Restricted and sensitive storage has clear classification, exposure, retention, ownership, logging, and copy lineage.",
  "Public exposure is limited to services with an explicit business requirement.",
  "Private network location is not treated as a replacement for identity or authorization.",
  "Partner and outbound dependencies are documented and owned.",
  "Critical telemetry sources have source-health evidence and accountable alert ownership.",
  "Monitoring gaps distinguish no-event from no-source conditions.",
  "Workload identity is preferred over reusable credentials where practical.",
  "Secret, key, certificate, and emergency-access records contain metadata only and have lifecycle controls.",
  "Critical services have business-approved recovery objectives and current restoration evidence.",
  "Recovery dependencies include identity, keys, networks, storage, applications, monitoring, and external providers.",
  "Configuration baselines are compared with current observed state.",
  "Exceptions have owners, expiration, compensating controls, target states, and closure requirements.",
  "Every production service and material control has accountable ownership.",
  "Residual risk is accepted only by authorized decision-makers.",
  "Blocking findings remain visible and cannot be converted into acceptance without proper governance.",
  "Release recommendation clearly separates blockers from bounded conditional findings.",
  "Remediation items have owners, due triggers, and closure evidence.",
  "Review triggers include major architecture, identity, provider, data, partner, recovery, monitoring, policy, and ownership changes.",
  "No capstone activity requires accessing, probing, modifying, restoring, or testing any real cloud system.",
];

const takeaways = [
  "Cloud architecture review is an evidence-and-decision discipline, not a diagram-completion exercise.",
  "Strong reviews integrate responsibility, identity, data, networks, monitoring, secrets, resilience, configuration assurance, and governance.",
  "Confirmed, Conditional, Unknown, Blocked, Accepted Risk, and Not Applicable communicate more useful nuance than simple Pass/Fail.",
  "Unknown evidence should stay Unknown until the gap is resolved.",
  "A bounded exception can be acceptable temporarily without becoming the preferred standard.",
  "Unowned production risk should not be silently converted into accepted risk.",
  "Backup health and recovery readiness are different claims.",
  "Monitoring confidence depends on source health as well as event content.",
  "Release decisions should be based on finding impact, not the percentage of controls marked Confirmed.",
  "The final A12 portfolio artifact is the Cloud Security Architecture Assessment, supported by the nine earlier A12 artifacts.",
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
        Module Test
      </Link>
    </div>
  );
}

export default function CloudArchitectureReviewLabPage() {
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
              A12.10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cloud Security Architecture
            </span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-100">
              Capstone Lab
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A12.10
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Cloud Architecture Review Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            The final A12 lesson brings the entire module together. You will act
            as a defensive cloud architecture reviewer and decide whether a
            fictional production release has enough current evidence, ownership,
            resilience, monitoring, configuration assurance, and governance to
            move forward.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            Every identity, service, log, record, risk, finding, and architecture
            detail in this lesson is fictional and synthetic. No real cloud
            environment is accessed or tested.
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
          lessonTitle="Cloud Architecture Review Lab"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A12.10 Capstone Readiness"
          items={[
            "I can explain shared responsibility without assuming the provider owns customer configuration.",
            "I can review IAM, storage, network, monitoring, secrets, recovery, configuration, and governance evidence.",
            "I can preserve Conditional, Unknown, and Blocked states instead of forcing Pass/Fail.",
            "I can distinguish a technical finding from an authorized residual-risk decision.",
            "I will use only the fictional Northbridge evidence package in this lab.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Cloud Review Is a Decision About Evidence, Not Confidence"
        >
          <p className="leading-8">
            The fictional Northbridge Student Services Platform has many strong
            controls: workload identity, private data services, bounded public
            exposure, current application recovery evidence, monitoring, and a
            governance model. It also has a few unresolved findings.
          </p>

          <p className="mt-4 leading-8">
            Your job is not to make the review look good. Your job is to decide
            which claims are supported, which remain conditional, which are
            unknown, and which findings materially block approval.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              A professional review protects the decision from optimism, not just the system from threats.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for the A12 Capstone"
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
          eyebrow="Capstone Scenario"
          title="Northbridge Student Services Platform — Release Candidate NB-CLOUD-A12-RC1"
        >
          <p className="leading-8">
            Northbridge is preparing a production architecture approval for a
            fictional Student Services Platform. The platform includes a public
            web application, private application services, a restricted managed
            database, generated report storage, an analytics capability, a
            notification provider, a scheduling SaaS integration, cloud
            monitoring, backups, workload identities, managed key references,
            certificates, and privileged administration.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Release candidate", "NB-CLOUD-A12-RC1"],
              ["Business service", "Student Services Platform"],
              ["Environment", "Production"],
              ["Primary owner", "Application Owner"],
              ["Data classes", "Restricted, Sensitive, Internal, Public"],
              ["External dependencies", "Notification Provider + Scheduling SaaS"],
              ["Recovery priority", "Critical"],
              ["Architecture review", "A12 Cloud Security Assessment"],
              ["Decision authority", "Cloud Architecture Review Board"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                  {label}
                </p>
                <p className="mt-2 text-sm leading-7 text-blue-50">{value}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Review Domains"
          title="Nine Architecture Areas Must Agree With One Another"
        >
          <div className="grid gap-5">
            {architectureDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.domain}</h3>

                <p className="mt-3 leading-7 text-slate-300">{item.question}</p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Strong evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.strongEvidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Review warning
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.warning}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Assessment States"
          title="Use Status Language That Preserves Evidence Quality"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {assessmentStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.state}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Use: {item.use}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Review Principles"
          title="Eight Principles for a Defensible Architecture Decision"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reviewPrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Reviewer test: {item.test}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Cloud Architecture Review Terms"
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
          eyebrow="A12 Portfolio Integration"
          title="Nine Earlier Artifacts Become One Evidence Package"
        >
          <div className="grid gap-5">
            {portfolioArtifacts.map((item) => (
              <article
                key={item.lesson}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-black text-cyan-100">
                    {item.lesson}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 font-black text-purple-100">
                    {item.artifact}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Contribution
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.contribution}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Capstone use
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.capstoneUse}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence Register"
          title="Twelve Cross-Domain Architecture Claims"
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

                <h3 className="mt-5 text-lg font-black text-white">
                  {item.claim}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.evidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Owner
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.owner}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Finding
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.finding}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Cloud Architecture Review Dashboard"
          subtitle="Fictional release-candidate evidence and readiness summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Release Recommendation Is HOLD"
          severity="High"
          time="11:26"
          source="Fictional Cloud Architecture Review Board"
          details="NB-CLOUD-A12-RC1 has two material blockers: an unowned long-lived production reporting credential and an unowned development-to-production reporting path with no valid exception."
          recommendation="Resolve REM-01 and REM-02 with current closure evidence before production architecture approval. Track bounded Conditional items separately."
        />

        <Section
          eyebrow="Conflicting Evidence"
          title="Professional Reviewers Do Not Ignore Contradictions"
        >
          <p className="leading-8">
            Evidence packages often contain statements that are individually
            true but collectively inconsistent. The reviewer should reconcile
            the conflict rather than selecting whichever record looks safer.
          </p>

          <div className="mt-6 grid gap-5">
            {conflicts.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <span className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 font-mono text-xs font-black text-red-100">
                  {item.id}
                </span>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Evidence A
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
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

                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Interpretation
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.interpretation}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Decision
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.decision}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Cloud Architecture Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Release Decision"
          question="What is the strongest overall recommendation for NB-CLOUD-A12-RC1?"
          evidence={[
            "Primary application workload identity is Confirmed.",
            "Restricted database and report storage remain private.",
            "Full service recovery evidence for the Student Services Portal is current.",
            "Critical monitoring is broadly covered with one bounded source-health exception.",
            "One emergency privileged activation is missing post-use review.",
            "A long-lived production credential has no confirmed owner or revocation path.",
            "A development-to-production reporting path has no current owner or valid exception.",
          ]}
          options={[
            "Ready with no conditions because most controls are Confirmed.",
            "Hold until the two material blockers are resolved; track the bounded Conditional items with owners and closure evidence.",
            "Reject the entire cloud design permanently.",
            "Convert every unresolved item into Accepted Risk.",
          ]}
          bestAnswer={1}
          explanation="The architecture has many strong controls, but the two unowned production findings are material blockers that should be resolved before approval."
        />

        <Section
          eyebrow="Release Criteria"
          title="A Release Board Should Know What Is Actually Blocking"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[1100px] w-full border-collapse text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-700 p-4">Criterion</th>
                  <th className="border-b border-slate-700 p-4">Evidence</th>
                  <th className="border-b border-slate-700 p-4">Current state</th>
                  <th className="border-b border-slate-700 p-4">Result</th>
                </tr>
              </thead>
              <tbody>
                {releaseCriteria.map((item) => (
                  <tr key={item.criterion} className="align-top">
                    <td className="border-b border-slate-800 p-4 font-black text-white">
                      {item.criterion}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-slate-300">
                      {item.evidence}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-blue-100">
                      {item.current}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm font-black text-yellow-100">
                      {item.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          eyebrow="Remediation Register"
          title="Findings Need Owners, Target States, and Closure Evidence"
        >
          <div className="grid gap-5">
            {remediationRegister.map((item) => (
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
                </div>

                <h3 className="mt-5 text-lg font-black text-white">
                  {item.finding}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
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
                      Closure evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.closure}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Trigger
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.trigger}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Architecture Decision"
          title="Final Review Recommendation: HOLD"
        >
          <div className="rounded-3xl border border-red-400/30 bg-red-400/10 p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
              Decision
            </p>
            <h3 className="mt-2 text-3xl font-black text-red-50">
              Hold production architecture approval until two blockers close
            </h3>

            <p className="mt-4 leading-8 text-red-50">
              NB-CLOUD-A12-RC1 demonstrates strong architecture in workload
              identity, private storage, bounded public exposure, critical
              application recovery, monitoring design, configuration assurance,
              and governance structure. However, two material findings prevent
              approval:
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-red-300/20 bg-slate-950/20 p-5">
                <p className="font-black text-white">Blocker 1 — REM-01</p>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Unowned long-lived production reporting credential with
                  overdue rotation and no documented revocation path.
                </p>
              </div>

              <div className="rounded-xl border border-red-300/20 bg-slate-950/20 p-5">
                <p className="font-black text-white">Blocker 2 — REM-02</p>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Unowned development-to-production reporting path with no valid
                  environment exception.
                </p>
              </div>
            </div>

            <p className="mt-5 leading-8 text-red-50">
              The remaining Conditional findings are important but bounded and
              owned. They should remain tracked with due dates and closure
              evidence rather than being hidden or incorrectly marked
              Confirmed.
            </p>
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Majority Ready, Two Material Blockers"
          scenario="Most architecture domains are Confirmed or bounded Conditional, but an unowned production credential and an unowned development-to-production path remain unresolved."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Bounded Monitoring Exception"
          scenario="Temporary-export logs are enabled, but automated freshness monitoring is incomplete. A current 14-day exception has an owner, manual compensating check, expiration, and target state."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Complete the A12 Cloud Security Architecture Assessment"
        >
          <p className="leading-8">
            Build the final portfolio artifact using the fictional Northbridge
            scenario or another completely fictional cloud system. Do not
            inspect, test, access, or change a real cloud environment.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create a one-page executive architecture summary.",
              "Define service purpose, environment, owner, business priority, data classes, and provider/service model.",
              "Include a shared-responsibility summary.",
              "Include the IAM architecture matrix.",
              "Include the storage exposure review.",
              "Include the cloud trust-boundary map.",
              "Include the monitoring coverage matrix.",
              "Include the secrets and key governance register.",
              "Include the recovery and resilience assessment.",
              "Include the configuration assurance register.",
              "Include the governance decision register.",
              "Create at least twelve cross-domain architecture claims.",
              "Link each claim to evidence and an owner.",
              "Use Confirmed, Conditional, Unknown, Blocked, Accepted Risk, or Not Applicable.",
              "Identify at least three evidence conflicts or contradictions.",
              "Create a release-criteria table.",
              "Create a remediation register with owners and closure evidence.",
              "Document any valid exceptions separately from ungoverned drift.",
              "Document residual risk and decision authority.",
              "Give one final recommendation: Ready, Ready with Conditions, Hold, or Reject.",
              "Explain what would cause the architecture to be reviewed again.",
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
            <p className="font-black">Capstone boundary</p>
            <p className="mt-2 leading-7">
              Use fictional services, synthetic evidence, invented owners, safe
              metadata, and conceptual architecture only. Do not access real
              cloud accounts, logs, credentials, storage, network settings,
              private policies, recovery systems, or production services.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Conflicting Recovery Evidence"
          question="How should the reviewer classify Generated Report Storage recovery readiness?"
          evidence={[
            "Backup configuration is current.",
            "The reporting team is the documented owner.",
            "The last restoration exercise succeeded at the time.",
            "The restoration exercise was 210 days ago.",
            "The storage architecture changed after that exercise.",
          ]}
          options={[
            "Confirmed because current backups exist.",
            "Conditional until a current-architecture restoration exercise validates the present recovery design.",
            "Blocked permanently.",
            "Not Applicable because storage is managed by the provider.",
          ]}
          bestAnswer={1}
          explanation="The provider may operate the storage platform, but Northbridge still owns its recovery evidence and service-readiness claim. Current backup status does not replace current restoration evidence."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Present the Architecture Review to a Fictional Review Board"
        >
          <p className="leading-8">
            Prepare a concise professional briefing for a fictional Cloud
            Architecture Review Board. The board should be able to understand
            the decision without reading every detailed artifact first.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Service and business purpose",
              "Primary architecture strengths",
              "Shared-responsibility boundary",
              "Top IAM conclusion",
              "Top data/storage conclusion",
              "Top network conclusion",
              "Top monitoring conclusion",
              "Top secrets/key conclusion",
              "Top resilience conclusion",
              "Top configuration-assurance conclusion",
              "Top governance conclusion",
              "Blocking findings",
              "Conditional findings",
              "Residual risks",
              "Final recommendation",
              "Exact conditions for re-review or approval",
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

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="font-black">Board briefing standard</p>
            <p className="mt-2 leading-7">
              The briefing should be short enough to support a decision, but
              every important conclusion should trace back to a stable evidence,
              finding, remediation, or governance ID.
            </p>
          </div>
        </Section>

        <DefenderChecklist
          title="A12.10 Cloud Architecture Review Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Capstone Questions"
        >
          <MiniQuiz
            title="A12.10 Mini Quiz: Cloud Architecture Review Lab"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Final A12 Portfolio Artifact — Cloud Security Architecture Assessment"
          prompt="Create a polished fictional Cloud Security Architecture Assessment that integrates all nine earlier A12 portfolio artifacts. Include an executive summary, service context, responsibility matrix, IAM review, storage exposure review, trust-boundary map, monitoring matrix, secrets/key register, resilience assessment, configuration assurance register, governance decision register, cross-domain evidence claims, conflicts, release criteria, remediation register, residual-risk decisions, final recommendation, and re-review triggers."
          tips={[
            "Use stable IDs so claims, findings, risks, exceptions, and remediation actions cross-reference each other.",
            "Do not force every finding into Pass/Fail; preserve Confirmed, Conditional, Unknown, Blocked, Accepted Risk, and Not Applicable when appropriate.",
            "Separate a valid time-bounded exception from unowned drift.",
            "Use current evidence and clearly mark stale or incomplete evidence.",
            "Never include real secrets, credentials, production identifiers, or private organizational information.",
            "Finish with a decision that a fictional engineering or governance team could act on immediately.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the A12 Module Test?"
        >
          <p className="leading-8">
            Before taking the module test, make sure you can review cloud
            architecture as one connected system rather than nine isolated
            topics.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can connect provider capability to customer responsibility without confusing the two.",
              "I can review identities, data, networks, telemetry, credentials, resilience, configuration, and governance together.",
              "I can preserve evidence uncertainty instead of inventing confidence.",
              "I can distinguish a blocker from a bounded conditional finding.",
              "I can explain when residual risk can and cannot be accepted.",
              "I can produce a release recommendation supported by evidence, ownership, and next actions.",
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
          title="How to Make the Final A12 Assessment Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Start with the decision",
                detail:
                  "Put Ready, Ready with Conditions, Hold, or Reject near the beginning with a one-paragraph explanation.",
              },
              {
                title: "Use cross-reference IDs",
                detail:
                  "Architecture claims, findings, exceptions, risks, and remediation actions should reference stable IDs.",
              },
              {
                title: "Separate evidence from interpretation",
                detail:
                  "Show what the record says before explaining what the reviewer concludes.",
              },
              {
                title: "Make blockers obvious",
                detail:
                  "A board should not have to search through dozens of pages to find the issues preventing approval.",
              },
              {
                title: "Keep conditional items bounded",
                detail:
                  "For every Conditional item, show owner, unresolved condition, due trigger, and closure evidence.",
              },
              {
                title: "Show governance authority",
                detail:
                  "Identify service owners, control owners, evidence owners, risk owners, and release authority.",
              },
              {
                title: "Show re-review triggers",
                detail:
                  "Explain which architecture, provider, identity, data, partner, monitoring, recovery, policy, or ownership changes reopen the decision.",
              },
              {
                title: "Finish with portfolio quality",
                detail:
                  "The final artifact should read like a defensive architecture assessment rather than a collection of disconnected class worksheets.",
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
            Cloud architecture assessment is defensive and evidence-based
          </h2>
          <p className="mt-3 leading-7">
            Do not access, scan, probe, enumerate, modify, restore, test, or
            interfere with real cloud accounts, services, networks, storage,
            credentials, logs, identity systems, backups, partner integrations,
            or private organizational records. Everything in this lab is
            fictional, synthetic, and designed for defensive architecture
            learning.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A12.10 Cloud Architecture Review Lab Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You have completed all ten lessons in A12 Cloud Security
            Architecture and built the final Cloud Security Architecture
            Assessment. The next page is the A12 Module Test.
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