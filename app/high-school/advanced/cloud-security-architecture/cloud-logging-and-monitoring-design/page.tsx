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
const previousLesson = `${modulePath}/cloud-network-boundaries`;
const nextLesson = `${modulePath}/secrets-and-key-handling-in-cloud`;

const objectives = [
  "Explain cloud logging and monitoring as an evidence architecture that connects sources, events, ownership, retention, source health, alerting, and review rather than simply collecting as many logs as possible.",
  "Distinguish identity, administrative, configuration, data-access, application, network, workload, backup, and service-health telemetry by security purpose and decision value.",
  "Evaluate fictional cloud monitoring evidence using source coverage, freshness, schema quality, ownership, retention, alert logic, escalation path, and known visibility gaps.",
  "Identify monitoring architecture risks such as disabled sources, stale collectors, noisy alerts, missing context, weak retention, unowned telemetry, and overconfident conclusions from incomplete evidence.",
  "Build a Cloud Monitoring Coverage Matrix that becomes the fifth artifact in the A12 Cloud Security Architecture Assessment.",
];

const telemetryDomains = [
  {
    domain: "Identity and authentication telemetry",
    purpose:
      "Shows sign-ins, authentication outcomes, identity lifecycle changes, role assignments, privileged activations, federation events, and access reviews.",
    questions:
      "Can reviewers tell which identity acted, what changed, whether privilege increased, and whether the event belongs to a normal or privileged workflow?",
    evidenceValue:
      "Supports IAM review, privileged-access review, account lifecycle investigation, and access-governance decisions.",
  },
  {
    domain: "Administrative and configuration telemetry",
    purpose:
      "Records changes to cloud services, policies, roles, storage settings, network controls, logging configuration, backups, and other management-plane state.",
    questions:
      "Who changed what, when, under which privileged identity, through which approved workflow, and what was the before/after intent?",
    evidenceValue:
      "Supports change accountability, configuration assurance, drift review, and incident investigation.",
  },
  {
    domain: "Data-access telemetry",
    purpose:
      "Shows reads, writes, administrative access, sharing, restore actions, or other important interactions with sensitive storage and data services.",
    questions:
      "Which human or workload identity reached which data class, through which service path, and was the access expected for the role?",
    evidenceValue:
      "Supports storage exposure review, authorization validation, privacy governance, and recovery oversight.",
  },
  {
    domain: "Application security telemetry",
    purpose:
      "Provides application-level evidence about authentication state, authorization decisions, important workflow outcomes, errors, and service behavior.",
    questions:
      "Can the application explain important security outcomes without exposing sensitive secrets or unnecessary personal data?",
    evidenceValue:
      "Connects cloud platform events to business actions and software security controls.",
  },
  {
    domain: "Network and integration telemetry",
    purpose:
      "Shows approved ingress, egress, partner, service-to-service, DNS, gateway, or integration activity at an architectural level.",
    questions:
      "Which source communicated with which destination, through which boundary, and does the activity match documented dependency or exposure intent?",
    evidenceValue:
      "Supports trust-boundary validation, partner monitoring, external-dependency review, and environment-separation checks.",
  },
  {
    domain: "Workload and service telemetry",
    purpose:
      "Shows application workload health, service errors, execution state, scaling, deployment behavior, and service-to-service operation.",
    questions:
      "Is the workload healthy? Are failures expected? Is identity or dependency context available? Did behavior change after deployment?",
    evidenceValue:
      "Supports operational security, release validation, resilience review, and detection of unexpected service behavior.",
  },
  {
    domain: "Backup and recovery telemetry",
    purpose:
      "Records backup execution, failures, retention actions, restore attempts, recovery exercises, and protected-resource coverage.",
    questions:
      "Are protected resources actually covered? Are backup jobs healthy? Is restoration evidence current? Who owns failures?",
    evidenceValue:
      "Supports resilience claims and prevents teams from mistaking backup configuration for proven recoverability.",
  },
  {
    domain: "Logging pipeline and source-health telemetry",
    purpose:
      "Shows whether important telemetry sources are connected, current, delayed, malformed, or missing.",
    questions:
      "Can the monitoring system detect when its own evidence disappears or becomes stale?",
    evidenceValue:
      "Supports confidence in every other monitoring claim because missing source health can create false certainty.",
  },
];

const evidenceStates = [
  {
    state: "Current",
    meaning:
      "The source is healthy, recent, correctly routed, and aligned to the current architecture.",
    use:
      "Can support present-tense claims within the source's actual scope.",
  },
  {
    state: "Delayed",
    meaning:
      "The source is still arriving but outside the expected freshness window.",
    use:
      "Useful with caution; alerting and current-state conclusions may be unreliable.",
  },
  {
    state: "Partial",
    meaning:
      "Some events or resources are covered, but important scope is missing.",
    use:
      "Supports bounded claims only. The uncovered scope must remain visible.",
  },
  {
    state: "Stale",
    meaning:
      "The evidence predates an important architecture, configuration, identity, or service change.",
    use:
      "Should not be treated as proof of the current design.",
  },
  {
    state: "Missing",
    meaning:
      "A required source is not available or not enabled.",
    use:
      "Creates a visibility gap that should be owned and remediated.",
  },
  {
    state: "Unknown",
    meaning:
      "The team cannot establish whether the source is healthy, complete, or current.",
    use:
      "The uncertainty itself is part of the architecture risk.",
  },
];

const monitoringPrinciples = [
  {
    title: "Collect for a decision",
    meaning:
      "Telemetry should exist because it supports a security, operational, governance, or resilience question.",
    review:
      "Can the owner explain what decision each important source supports?",
  },
  {
    title: "Source health is part of monitoring",
    meaning:
      "A monitoring platform should know when a required source stops sending current evidence.",
    review:
      "Can the team detect a missing or delayed telemetry source?",
  },
  {
    title: "Identity context matters",
    meaning:
      "Security events are stronger when they identify the human or workload principal responsible for the action.",
    review:
      "Can important administrative and data events be tied to a named identity?",
  },
  {
    title: "Configuration changes deserve evidence",
    meaning:
      "Cloud architecture can change through configuration, so management-plane events should be observable.",
    review:
      "Are high-impact configuration changes captured and owned?",
  },
  {
    title: "Alerts need actionable context",
    meaning:
      "An alert should explain what happened, why it matters, who owns it, and what evidence should be reviewed next.",
    review:
      "Does the alert reduce investigation uncertainty rather than create noise?",
  },
  {
    title: "Retention follows purpose",
    meaning:
      "Logs should be kept long enough to support investigations, reviews, compliance, and operational needs without retaining unnecessary sensitive detail forever.",
    review:
      "Can the team justify the retention period for each major telemetry category?",
  },
  {
    title: "Minimize sensitive content",
    meaning:
      "Logs should capture useful evidence without exposing credentials, secret values, or unnecessary sensitive data.",
    review:
      "Are redaction and data-minimization expectations built into logging design?",
  },
  {
    title: "Unknown stays Unknown",
    meaning:
      "Missing telemetry should not be silently converted into a claim that nothing happened.",
    review:
      "Do dashboards and reviews distinguish no-event evidence from no-source evidence?",
  },
];

const vocabulary = [
  {
    term: "Telemetry",
    definition:
      "Machine-generated evidence about system, identity, application, configuration, network, or service activity.",
  },
  {
    term: "Log source",
    definition:
      "A system, service, application, identity provider, workload, or cloud platform component that produces telemetry.",
  },
  {
    term: "Source health",
    definition:
      "Evidence that a telemetry source is connected, current, complete enough for its purpose, and not unexpectedly delayed or missing.",
  },
  {
    term: "Audit event",
    definition:
      "A record of an important action such as role change, configuration update, privileged operation, data access, or administrative decision.",
  },
  {
    term: "Alert",
    definition:
      "A signal generated when evidence matches a condition that deserves review or response.",
  },
  {
    term: "Detection logic",
    definition:
      "The rule, query, model, or condition used to turn telemetry into a security signal.",
  },
  {
    term: "False positive",
    definition:
      "An alert that appears suspicious under its logic but is ultimately explained by expected or authorized activity.",
  },
  {
    term: "False negative",
    definition:
      "A meaningful condition that occurs without producing the expected alert or detection.",
  },
  {
    term: "Retention",
    definition:
      "How long telemetry remains available for review, investigation, governance, or operational analysis.",
  },
  {
    term: "Normalization",
    definition:
      "Transforming different telemetry sources into consistent fields or structures so they can be compared and searched.",
  },
  {
    term: "Correlation",
    definition:
      "Connecting events from multiple sources to build a clearer picture of one identity, workload, change, or incident.",
  },
  {
    term: "Coverage gap",
    definition:
      "An important architecture area where required telemetry is missing, stale, incomplete, or unowned.",
  },
];

const monitoringSources = [
  {
    id: "LOG-01",
    source: "Workforce Identity Audit",
    domain: "Identity",
    purpose: "Track sign-ins, role changes, lifecycle, and privileged identity events",
    scope: "Production workforce + privileged identities",
    freshness: "Current",
    retention: "180 days",
    owner: "Identity Platform Team",
    alerting: "Privileged role changes + unusual authentication failures",
    status: "Confirmed",
    gap: "No known coverage gap in current production identity scope.",
  },
  {
    id: "LOG-02",
    source: "Cloud Management Audit",
    domain: "Administrative configuration",
    purpose: "Record high-impact cloud configuration changes",
    scope: "Production cloud services",
    freshness: "Current",
    retention: "365 days",
    owner: "Platform Engineering",
    alerting: "High-impact configuration and logging changes",
    status: "Confirmed",
    gap: "One legacy shared service still uses a separate audit source.",
  },
  {
    id: "LOG-03",
    source: "Student Support Database Audit",
    domain: "Data access",
    purpose: "Record privileged and workload access to restricted application data",
    scope: "Production student-support database",
    freshness: "Current",
    retention: "180 days",
    owner: "Data Platform",
    alerting: "Privileged data access + unexpected workload identity",
    status: "Confirmed",
    gap: "Legacy reporting role review is still scheduled for next month.",
  },
  {
    id: "LOG-04",
    source: "Object Storage Access Logs",
    domain: "Storage access",
    purpose: "Record access to generated reports and temporary exports",
    scope: "Report storage + temporary export area",
    freshness: "Partial",
    retention: "90 days",
    owner: "Reporting Team",
    alerting: "Public exposure change + abnormal admin access",
    status: "Conditional",
    gap: "Generated report storage is current, but temporary export source-health monitoring is incomplete.",
  },
  {
    id: "LOG-05",
    source: "Application Security Events",
    domain: "Application",
    purpose: "Record authentication, authorization, major workflow, and security-relevant error outcomes",
    scope: "Student Services Portal",
    freshness: "Current",
    retention: "90 days",
    owner: "Application Team",
    alerting: "Repeated authorization denials + security-relevant error patterns",
    status: "Confirmed",
    gap: "No secret values or raw sensitive payloads are permitted in event content.",
  },
  {
    id: "LOG-06",
    source: "Integration Gateway Telemetry",
    domain: "Partner / network",
    purpose: "Record SaaS scheduling integration requests, failures, and boundary activity",
    scope: "Scheduling integration service",
    freshness: "Current",
    retention: "120 days",
    owner: "Integration Owner",
    alerting: "Unexpected partner source + schema mismatch + repeated failures",
    status: "Conditional",
    gap: "Partner review is due soon, so monitoring ownership remains current only through that review window.",
  },
  {
    id: "LOG-07",
    source: "Backup and Restore Activity",
    domain: "Recovery",
    purpose: "Track backup success, failures, restore attempts, and recovery exercises",
    scope: "Critical database + report storage",
    freshness: "Current",
    retention: "365 days",
    owner: "Recovery Owner",
    alerting: "Backup failure + restore failure + protected-resource gap",
    status: "Conditional",
    gap: "Current backup telemetry exists, but one restoration exercise is stale.",
  },
  {
    id: "LOG-08",
    source: "Telemetry Source Health",
    domain: "Monitoring pipeline",
    purpose: "Track ingestion freshness and missing-source conditions",
    scope: "Critical identity, management, database, application, network, and recovery sources",
    freshness: "Partial",
    retention: "90 days",
    owner: "Security Monitoring",
    alerting: "Source delayed + source missing + schema parse failure",
    status: "Conditional",
    gap: "Temporary export storage is not yet included in freshness checks.",
  },
];

const alertDesigns = [
  {
    alert: "Privileged Role Granted",
    source: "LOG-01 Workforce Identity Audit",
    why:
      "Privilege changes are high-impact identity events.",
    context:
      "Identity, role, approver, target environment, change ticket, previous privilege state.",
    owner:
      "Identity Platform Team",
    response:
      "Validate approval, expected role scope, and whether temporary access has an expiration.",
  },
  {
    alert: "Public Storage Exposure Changed",
    source: "LOG-02 + LOG-04",
    why:
      "Storage exposure changes can alter who can reach data.",
    context:
      "Storage ID, classification, previous exposure, new exposure, changing identity, owner.",
    owner:
      "Storage Owner + Security Monitoring",
    response:
      "Confirm whether the public state is explicitly approved for Public-classified content.",
  },
  {
    alert: "Critical Telemetry Source Missing",
    source: "LOG-08 Source Health",
    why:
      "Missing telemetry can create false confidence across security monitoring.",
    context:
      "Source ID, expected freshness, last-seen time, affected coverage area, owner.",
    owner:
      "Security Monitoring",
    response:
      "Restore source health and mark affected monitoring claims Conditional or Unknown until evidence is current.",
  },
  {
    alert: "Unexpected Workload Identity Access",
    source: "LOG-03 Database Audit",
    why:
      "A workload outside the approved application path is accessing restricted data.",
    context:
      "Workload identity, resource, requested action, environment, application owner, recent deployment change.",
    owner:
      "Application + Data Platform",
    response:
      "Validate whether the identity belongs to an approved dependency or represents architecture drift.",
  },
  {
    alert: "Backup Protection Failure",
    source: "LOG-07 Backup and Restore Activity",
    why:
      "A critical protected resource may no longer meet recovery expectations.",
    context:
      "Resource ID, backup job, failure time, last successful backup, recovery owner.",
    owner:
      "Recovery Owner",
    response:
      "Restore protection and reassess recovery confidence until current backup and restoration evidence exists.",
  },
];

const coverageGaps = [
  {
    gap: "Source exists but freshness is not monitored",
    risk:
      "Dashboards may look normal even after the source silently stops sending current events.",
    decision:
      "Add source-health expectations and mark affected claims Conditional until freshness monitoring is active.",
  },
  {
    gap: "Alert exists but no owner is assigned",
    risk:
      "Important signals may be generated without anyone accountable for review or escalation.",
    decision:
      "Assign a service or security owner and define the expected review path.",
  },
  {
    gap: "Logs are current but retention is too short",
    risk:
      "Evidence may disappear before a periodic review or later investigation requires it.",
    decision:
      "Align retention to investigation, governance, and business needs.",
  },
  {
    gap: "Event content lacks identity context",
    risk:
      "A reviewer knows that something changed but cannot establish which person or workload performed the action.",
    decision:
      "Improve event schema so important actions include human or workload identity context.",
  },
  {
    gap: "Sensitive data appears in logs",
    risk:
      "The monitoring system becomes another unnecessary storage location for protected data or secrets.",
    decision:
      "Redact or minimize sensitive fields and retain only the evidence needed for the monitoring purpose.",
  },
  {
    gap: "Dashboard says zero events from a missing source",
    risk:
      "The team may interpret lack of telemetry as lack of activity.",
    decision:
      "Separate no-event states from no-source states in dashboards and reviews.",
  },
];

const antiPatterns = [
  {
    title: "Collect everything forever",
    problem:
      "Unbounded collection increases cost, complexity, noise, and sensitive-data exposure without a defined decision purpose.",
    better:
      "Collect evidence that supports security, operational, governance, and resilience decisions with justified retention.",
  },
  {
    title: "No alerts means no problem",
    problem:
      "The alerting system may be missing sources, using weak logic, or lacking coverage for the relevant behavior.",
    better:
      "Validate source health and detection coverage before interpreting silence.",
  },
  {
    title: "Source enabled means source healthy",
    problem:
      "A configured source can be delayed, broken, misrouted, or partially scoped.",
    better:
      "Monitor freshness, ingestion, parsing, and resource coverage.",
  },
  {
    title: "One dashboard proves the architecture",
    problem:
      "A dashboard summarizes selected evidence and may hide scope limitations or stale data.",
    better:
      "Connect dashboard claims to source-level evidence and coverage notes.",
  },
  {
    title: "Alert on every event",
    problem:
      "Excessive alerting creates noise and makes high-value signals harder to notice.",
    better:
      "Alert on meaningful conditions tied to defined owners and review actions.",
  },
  {
    title: "Logs can contain any detail",
    problem:
      "Secrets, credentials, raw sensitive records, or unnecessary personal data can leak into monitoring systems.",
    better:
      "Design event content with minimization and redaction.",
  },
  {
    title: "Monitoring belongs only to security",
    problem:
      "Application, platform, identity, data, integration, and recovery teams may own the systems and evidence needed to resolve a signal.",
    better:
      "Assign monitoring and response ownership across service teams.",
  },
  {
    title: "Old evidence supports new architecture",
    problem:
      "Deployments, identity changes, service migrations, and integrations can invalidate previous telemetry assumptions.",
    better:
      "Refresh coverage after meaningful architecture changes.",
  },
];

const dashboardMetrics = [
  {
    label: "Critical telemetry sources",
    value: "8",
    note: "Identity, management, data, storage, application, integration, recovery, and source-health evidence",
  },
  {
    label: "Current sources",
    value: "6 / 8",
    note: "Object-storage and source-health coverage remain Partial",
  },
  {
    label: "Owned alert families",
    value: "5 / 5",
    note: "Each high-priority alert has a service or security owner",
  },
  {
    label: "Known visibility gaps",
    value: "3",
    note: "Temporary export freshness, stale restore evidence, and one legacy shared-service audit source",
  },
];

const logs = [
  "[08:14] LOG-01 workforce-identity freshness=CURRENT privileged-alerts=HEALTHY",
  "[08:38] LOG-02 management-audit freshness=CURRENT scope=PRODUCTION",
  "[09:02] LOG-03 database-audit freshness=CURRENT workload-context=YES",
  "[09:31] LOG-04 storage-access report-store=CURRENT temp-export=SOURCE_HEALTH_PARTIAL",
  "[09:58] LOG-05 application-security redaction=ENFORCED status=CONFIRMED",
  "[10:22] LOG-06 integration-gateway freshness=CURRENT partner-review=8d",
  "[10:47] LOG-07 backup-activity jobs=CURRENT restore-evidence=STALE",
  "[11:05] LOG-08 source-health critical-sources=8 monitored=7 status=CONDITIONAL",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Treat the affected storage-monitoring claim as Conditional, add temporary-export source freshness to LOG-08, and keep the gap visible until current evidence is confirmed.",
    outcome:
      "Best. A missing source-health check reduces confidence even when the source is configured.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark monitoring Confirmed because the storage source is enabled.",
    outcome:
      "Risky. Enabled does not prove current, complete, or healthy telemetry.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Remove the temporary-export logs so the dashboard no longer reports a gap.",
    outcome:
      "Risky. Removing evidence reduces visibility rather than resolving source health.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Use a targeted alert with workload identity, data resource, environment, owner, and recent deployment context, then validate whether the access matches an approved dependency.",
    outcome:
      "Best. Actionable context helps reviewers distinguish expected workload behavior from architecture drift.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Alert on every database read from every approved workload.",
    outcome:
      "Caution. Excessive alerting can create noise without improving decision quality.",
    tone: "caution" as const,
  },
  {
    label: "Choice C",
    response:
      "Ignore workload identity in the alert because private network traffic is trusted.",
    outcome:
      "Risky. Identity context is essential even on private service-to-service paths.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest description of cloud logging and monitoring architecture?",
    choices: [
      "Collecting the maximum possible number of logs.",
      "Designing sources, event purpose, ownership, retention, source health, alerting, and evidence coverage so the cloud can support security decisions.",
      "Keeping one dashboard.",
      "Alerting on every event.",
    ],
    answer: 1,
    explanation:
      "Monitoring architecture is about useful evidence and decision support, not raw log volume.",
  },
  {
    question:
      "Why is source health important?",
    choices: [
      "Because a configured source can still be delayed, missing, partial, or broken.",
      "Because source health replaces security logs.",
      "Because healthy sources never need owners.",
      "Because delayed logs are always malicious.",
    ],
    answer: 0,
    explanation:
      "Without source-health evidence, a dashboard can appear normal while important telemetry is absent.",
  },
  {
    question:
      "What should a team conclude when a required telemetry source is missing?",
    choices: [
      "Nothing happened.",
      "The affected claim should remain Conditional or Unknown until evidence is restored.",
      "The architecture is automatically secure.",
      "Retention no longer matters.",
    ],
    answer: 1,
    explanation:
      "No-source and no-event are different states.",
  },
  {
    question:
      "Why should important cloud events include identity context?",
    choices: [
      "To determine which human or workload principal performed the action.",
      "To eliminate the need for authorization.",
      "To make every event public.",
      "To replace source health.",
    ],
    answer: 0,
    explanation:
      "Identity context connects an event to accountability and architecture intent.",
  },
  {
    question:
      "What makes an alert more actionable?",
    choices: [
      "A vague message with no owner.",
      "Context about the identity, resource, environment, purpose, owner, and evidence needed for review.",
      "Triggering on every possible event.",
      "Removing timestamps.",
    ],
    answer: 1,
    explanation:
      "Actionable alerts reduce uncertainty and direct the reviewer toward the evidence needed for a decision.",
  },
  {
    question:
      "Why should logs minimize sensitive content?",
    choices: [
      "Because logs are never useful.",
      "Because monitoring systems can become another unnecessary location for secrets or protected data.",
      "Because security events should be anonymous.",
      "Because retention becomes impossible otherwise.",
    ],
    answer: 1,
    explanation:
      "Useful evidence should not require unnecessary secret values or raw sensitive payloads.",
  },
  {
    question:
      "A backup source shows current backup jobs but the last restoration exercise is stale. What is the strongest conclusion?",
    choices: [
      "Recovery readiness is fully Confirmed.",
      "Backup monitoring is current, but the broader recovery claim remains Conditional until restoration evidence is current.",
      "Backups should be disabled.",
      "Source health no longer matters.",
    ],
    answer: 1,
    explanation:
      "Current backup telemetry supports backup operation, but recoverability requires restoration evidence too.",
  },
];

const checklistItems = [
  "Every critical cloud telemetry source has a documented security or operational purpose.",
  "Identity events include enough context to identify the responsible human or workload.",
  "High-impact configuration changes are observable.",
  "Sensitive data-access events have appropriate audit coverage.",
  "Application security events avoid secret values and unnecessary sensitive payloads.",
  "Network and integration telemetry align to documented trust boundaries and dependencies.",
  "Backup and restore telemetry supports resilience claims.",
  "Source health detects delayed, missing, or malformed critical telemetry.",
  "Dashboards distinguish no-event from no-source conditions.",
  "Important alert families have accountable owners.",
  "Alerts contain enough context for efficient review.",
  "Retention is justified by investigation, governance, operational, and business needs.",
  "Known coverage gaps remain visible.",
  "Stale evidence is not treated as proof of the current architecture.",
  "Monitoring design is reviewed after major service, identity, integration, storage, or network changes.",
  "No lesson activity requires collecting, accessing, or analyzing private telemetry from any real cloud environment.",
];

const takeaways = [
  "Cloud logging and monitoring should be designed around decisions, not maximum event volume.",
  "Identity, configuration, data, application, network, workload, recovery, and source-health telemetry serve different purposes.",
  "Source health is part of the security architecture because missing evidence can create false confidence.",
  "No-event and no-source are different states and should appear differently in dashboards.",
  "Important events are stronger when they include human or workload identity context.",
  "Actionable alerts need context, ownership, and a defined review path.",
  "Retention should match investigation and governance needs without keeping unnecessary sensitive data forever.",
  "Logs should minimize secrets and protected content.",
  "Current backup logs do not automatically prove restoration readiness.",
  "The Cloud Monitoring Coverage Matrix becomes the evidence foundation for A12 secrets, resilience, misconfiguration, governance, and the final architecture review.",
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

export default function CloudLoggingMonitoringDesignPage() {
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
              A12.5
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cloud Security Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A12.5
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Cloud Logging and Monitoring Design
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A secure cloud architecture should be able to explain what changed,
            which identity acted, what data or service was affected, whether the
            event was expected, and whether the evidence itself is current.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional logs, synthetic alerts, and safe
            monitoring records only. It does not involve accessing private
            telemetry from real cloud accounts or production systems.
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
          lessonTitle="Cloud Logging and Monitoring Design"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A12.5 Entry Readiness"
          items={[
            "I understand IAM, storage, and network architecture from A12.2–A12.4.",
            "I can distinguish an architecture claim from the evidence that supports it.",
            "I understand that missing evidence should remain visible as Unknown or Conditional.",
            "I will use only fictional logs, alerts, dashboards, and telemetry.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Dashboard Can Look Green While the Evidence Behind It Is Missing"
        >
          <p className="leading-8">
            Suppose a fictional security dashboard reports zero suspicious
            storage events for the day. That sounds reassuring until the team
            discovers that the storage source stopped sending logs six hours
            earlier.
          </p>

          <p className="mt-4 leading-8">
            The absence of an alert is meaningful only when the monitoring
            system knows its required sources are healthy.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Monitoring the evidence pipeline is part of monitoring the cloud.
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
          eyebrow="Telemetry Domains"
          title="Eight Evidence Areas a Cloud Architecture May Need"
        >
          <div className="grid gap-5">
            {telemetryDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.domain}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Architecture questions
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.questions}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Evidence value
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.evidenceValue}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence Quality"
          title="Monitoring Sources Need States, Not Assumptions"
        >
          <p className="leading-8">
            A telemetry source is not simply on or off. Architecture reviews
            should distinguish current, delayed, partial, stale, missing, and
            unknown evidence.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {evidenceStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.state}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Architecture use: {item.use}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Monitoring Principles"
          title="Eight Principles for Useful Cloud Evidence"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {monitoringPrinciples.map((item) => (
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
          title="Cloud Logging and Monitoring Terms"
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
          eyebrow="Fictional Monitoring Register"
          title="Eight Northbridge Telemetry Sources"
        >
          <div className="grid gap-5">
            {monitoringSources.map((item) => (
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
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.source}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Purpose", item.purpose],
                    ["Scope", item.scope],
                    ["Freshness", item.freshness],
                    ["Retention", item.retention],
                    ["Owner", item.owner],
                    ["Alerting", item.alerting],
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
                    Coverage note
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
          title="Northbridge Cloud Monitoring Coverage Dashboard"
          subtitle="Fictional telemetry coverage and source-health metrics"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Temporary Export Telemetry Has No Freshness Monitor"
          severity="High"
          time="11:05"
          source="Fictional Telemetry Source Health"
          details="The temporary-export storage source is enabled, but LOG-08 does not currently verify whether events continue to arrive within the expected freshness window."
          recommendation="Mark affected storage-monitoring claims Conditional and add source-health monitoring before treating the evidence as fully current."
        />

        <Section
          eyebrow="Alert Design"
          title="Useful Alerts Connect Evidence to a Decision"
        >
          <p className="leading-8">
            An alert should not merely announce that something happened. It
            should help a reviewer understand why the event matters and what
            evidence should be checked next.
          </p>

          <div className="mt-6 grid gap-5">
            {alertDesigns.map((item) => (
              <article
                key={item.alert}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.alert}</h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Source
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.source}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Why it matters
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.why}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Context
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.context}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Owner
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.owner}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 md:col-span-2">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Review action
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.response}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Cloud Monitoring Architecture Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Source Enabled vs. Source Healthy"
          question="What is the strongest conclusion about LOG-04 and LOG-08?"
          evidence={[
            "Object-storage logging is enabled.",
            "Generated report storage events are arriving normally.",
            "Temporary-export storage events are configured.",
            "The monitoring pipeline does not yet check temporary-export freshness.",
            "LOG-08 therefore cannot confirm whether that source remains current.",
          ]}
          options={[
            "Storage monitoring is fully Confirmed because the source is enabled.",
            "The generated-report source is current, but temporary-export coverage remains Conditional until source freshness is monitored.",
            "The temporary-export logs should be deleted.",
            "No alerts prove the source is healthy.",
          ]}
          bestAnswer={1}
          explanation="A configured source and a healthy source are different claims. Freshness evidence is needed to support current monitoring confidence."
        />

        <Section
          eyebrow="Coverage Gaps"
          title="Six Ways Monitoring Can Look Stronger Than It Really Is"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {coverageGaps.map((item) => (
              <article
                key={item.gap}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.gap}</h3>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Risk: {item.risk}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Architecture decision: {item.decision}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Monitoring Anti-Patterns"
          title="Eight Designs That Create Visibility Debt"
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
          eyebrow="Retention and Data Minimization"
          title="Monitoring Evidence Should Be Useful Without Becoming a New Data-Exposure Problem"
        >
          <p className="leading-8">
            Logging systems often centralize evidence from many parts of the
            cloud. That makes them valuable, but it also means event design
            should avoid unnecessary secret values, raw sensitive payloads, or
            excessive personal data.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Good event content",
                items: [
                  "Stable event ID",
                  "Timestamp",
                  "Human or workload identity",
                  "Resource or service ID",
                  "Action category",
                  "Outcome",
                  "Environment",
                  "Correlation ID where useful",
                  "Owner or service context",
                ],
              },
              {
                title: "Avoid unnecessary content",
                items: [
                  "Secret values",
                  "Passwords or credentials",
                  "Raw authentication tokens",
                  "Full sensitive records",
                  "Unnecessary message bodies",
                  "Excessive personal data",
                  "Private keys",
                  "Unredacted protected payloads",
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
          title="Scenario Decision Lab 1 — Monitoring a Monitoring Gap"
          scenario="Temporary-export access logs are enabled, but the source-health service does not verify whether those events continue to arrive. The dashboard currently shows zero concerning export events."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Unexpected Workload Identity"
          scenario="The database audit source records a production read from a workload identity not listed in the current application dependency map. The event contains workload, resource, environment, and timestamp context."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Cloud Monitoring Coverage Matrix"
        >
          <p className="leading-8">
            Use fictional telemetry sources, alerts, dashboards, owners, and
            event examples only. Do not collect or inspect private logs from
            real cloud systems.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twelve fictional telemetry-source records.",
              "Include identity, management, data, storage, application, network, integration, workload, recovery, and source-health telemetry.",
              "Give each source a stable ID.",
              "State the monitoring purpose.",
              "Record architecture scope.",
              "Record expected freshness.",
              "Record retention.",
              "Assign an accountable owner.",
              "Describe alert or review use.",
              "Record source-health coverage.",
              "Classify status as Current, Partial, Delayed, Stale, Missing, or Unknown.",
              "Identify at least three coverage gaps.",
              "Create at least five alert designs with clear context and owners.",
              "Identify one source where no-event could be confused with no-source.",
              "Identify one source where sensitive event content should be minimized.",
              "Define remediation for each monitoring gap.",
              "Add change triggers for new services, identities, storage locations, network paths, partners, deployments, or recovery changes.",
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
              This is a fictional monitoring-design exercise. Use synthetic
              telemetry only — no real cloud logs, private account data,
              credentials, tokens, production events, or connected systems.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Backup Monitoring vs. Recovery Evidence"
          question="What is the strongest conclusion about LOG-07?"
          evidence={[
            "Backup jobs are currently reporting normally.",
            "Critical database and report-storage resources appear in the protected-resource inventory.",
            "Backup failure alerting is enabled.",
            "The most recent restoration exercise for one critical data path predates the current architecture baseline.",
          ]}
          options={[
            "Recovery readiness is fully Confirmed.",
            "Backup-operation monitoring is current, but recovery readiness remains Conditional until restoration evidence is current.",
            "Backup telemetry should be disabled because restoration evidence is stale.",
            "Current backup jobs prove every recovery objective will be met.",
          ]}
          bestAnswer={1}
          explanation="Backup operation and recovery readiness are related but separate claims. Restoration evidence is still required."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design Monitoring for a Cloud Architecture Change"
        >
          <p className="leading-8">
            A fictional organization adds a new analytics service that receives
            minimized data from the Student Support Database and exports
            aggregate results to a reporting service. Design the monitoring
            evidence needed to make the new architecture reviewable.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Workload identity events",
              "Data-access events",
              "Configuration changes",
              "New storage-source events",
              "Service-to-service network evidence",
              "Outbound or partner dependency telemetry if applicable",
              "Source-health checks",
              "Alert ownership",
              "Retention",
              "Sensitive-data minimization",
              "Deployment correlation",
              "Dashboard status",
              "Known coverage gaps",
              "Change-trigger review",
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
            A strong answer shows that monitoring is designed alongside the
            architecture change instead of being added only after the service
            is already running.
          </p>
        </Section>

        <DefenderChecklist
          title="A12.5 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A12.5 Mini Quiz: Cloud Logging and Monitoring Design"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Cloud Monitoring Coverage Matrix"
          prompt="Create the fifth artifact for your A12 Cloud Security Architecture Assessment: a fictional Cloud Monitoring Coverage Matrix with at least twelve telemetry sources. Include source ID, domain, purpose, scope, freshness expectation, retention, owner, event context, alert or review use, source-health coverage, current status, known gap, remediation, and change trigger."
          tips={[
            "Include identity, management, data, storage, application, network, integration, recovery, and source-health sources.",
            "Use Current, Partial, Delayed, Stale, Missing, or Unknown states instead of only Enabled/Disabled.",
            "Include at least one no-source vs. no-event example.",
            "Include at least five alert designs with owners and review context.",
            "Show at least one source where sensitive content is intentionally minimized.",
            "Use fictional provider-neutral names and synthetic events only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A12.6?"
        >
          <p className="leading-8">
            A12.6 moves into Secrets and Key Handling in Cloud. Before
            continuing, make sure you can explain how secret and key access,
            rotation, configuration changes, and source health should become
            observable without exposing secret values.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish telemetry domains by security purpose.",
              "I can explain why source health is required for monitoring confidence.",
              "I can distinguish no-event from no-source states.",
              "I can design an alert with identity, resource, owner, and review context.",
              "I can explain why logs should minimize secrets and unnecessary sensitive data.",
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
          title="How to Make the Monitoring Matrix Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Lead with purpose",
                detail:
                  "Every source should state what security or operational decision it supports.",
              },
              {
                title: "Show freshness",
                detail:
                  "A reviewer should quickly see whether the source is current, delayed, partial, stale, missing, or unknown.",
              },
              {
                title: "Show ownership",
                detail:
                  "Identify both the service owner and the alert or review owner when they differ.",
              },
              {
                title: "Show source health",
                detail:
                  "Critical sources should include evidence that ingestion itself remains healthy.",
              },
              {
                title: "Show event context",
                detail:
                  "Important events should connect identity, resource, environment, action, outcome, and service context.",
              },
              {
                title: "Show gaps",
                detail:
                  "Missing freshness, short retention, weak context, unowned alerts, and stale evidence should remain visible.",
              },
              {
                title: "Show minimization",
                detail:
                  "Document where redaction or reduced event content protects secrets and sensitive data.",
              },
              {
                title: "Connect forward",
                detail:
                  "Make the matrix reusable in A12.6 secrets, A12.7 resilience, A12.8 configuration assurance, A12.9 governance, and A12.10 capstone review.",
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
            Monitoring design does not require access to real private telemetry
          </h2>
          <p className="mt-3 leading-7">
            Do not collect, inspect, request, or expose real cloud logs,
            credentials, tokens, account identifiers, private user activity,
            production dashboards, or connected monitoring systems. All logs,
            alerts, dashboards, and evidence in this lesson are fictional and
            defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A12.5 Cloud Logging and Monitoring Design Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a monitoring architecture model for telemetry purpose,
            source health, identity context, configuration evidence, data
            access, alerts, retention, coverage gaps, ownership, and evidence
            quality. Next, A12.6 focuses on Secrets and Key Handling in Cloud.
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