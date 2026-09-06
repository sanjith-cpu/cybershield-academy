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
const previousLesson = `${modulePath}/secrets-and-key-handling-in-cloud`;
const nextLesson = `${modulePath}/cloud-misconfiguration-prevention`;

const objectives = [
  "Explain cloud resilience as the ability to continue or recover critical services through architecture, dependencies, backup, restoration, ownership, monitoring, and evidence rather than through backup existence alone.",
  "Distinguish availability, redundancy, backup, recovery, restoration, recovery objectives, dependency resilience, and business continuity by purpose and evidence.",
  "Evaluate fictional cloud resilience evidence using protected-resource scope, recovery objectives, backup health, restoration tests, identity and key dependencies, failure domains, monitoring, and owner readiness.",
  "Identify architecture risks such as stale restoration evidence, unprotected dependencies, single points of failure, unclear recovery ownership, inaccessible backups, weak key recovery, and recovery plans that do not match current architecture.",
  "Build a Cloud Recovery and Resilience Assessment that becomes the seventh artifact in the A12 Cloud Security Architecture Assessment.",
];

const resilienceConcepts = [
  {
    concept: "Availability",
    meaning:
      "The ability of a service to remain usable during normal operation and some failures.",
    evidence:
      "Service health, redundancy design, dependency health, failover behavior, and operational monitoring.",
    caution:
      "A service being available now does not prove it can recover from data loss or a major outage.",
  },
  {
    concept: "Redundancy",
    meaning:
      "Having multiple components, instances, zones, copies, or paths so one component failure does not immediately stop the service.",
    evidence:
      "Architecture diagram, service configuration metadata, dependency distribution, health monitoring, and failover evidence.",
    caution:
      "Redundant copies can still share the same failure domain or corrupted data state.",
  },
  {
    concept: "Backup",
    meaning:
      "A protected copy of data or configuration intended to support recovery.",
    evidence:
      "Protected-resource inventory, backup job history, retention, access policy, backup integrity evidence, and owner.",
    caution:
      "Backup existence does not prove restoration works or that all critical dependencies are covered.",
  },
  {
    concept: "Restoration",
    meaning:
      "The act of recovering data or configuration from a protected copy into a usable state.",
    evidence:
      "Restoration exercise, recovered-data validation, timing, owner participation, dependency validation, and documented result.",
    caution:
      "A successful restore from an old architecture may not prove recovery of the current system.",
  },
  {
    concept: "Recovery",
    meaning:
      "Returning the full service or business capability to an acceptable operational state after disruption.",
    evidence:
      "Restoration evidence, identity readiness, key access, dependency recovery, application validation, monitoring, and owner sign-off.",
    caution:
      "Recovery is broader than restoring one database.",
  },
  {
    concept: "Business continuity",
    meaning:
      "The ability of the organization to continue essential business functions during disruption, even if the preferred technology path is unavailable.",
    evidence:
      "Priority services, manual or alternate procedures, communications, owner readiness, dependency assumptions, and exercises.",
    caution:
      "Continuity plans should match actual business priorities and current service dependencies.",
  },
];

const recoveryObjectives = [
  {
    term: "Recovery Time Objective (RTO)",
    meaning:
      "The target amount of time within which a service or capability should be restored after a disruption.",
    question:
      "How long can the business tolerate the service being unavailable?",
    evidence:
      "Measured recovery exercise duration and dependency restoration time.",
  },
  {
    term: "Recovery Point Objective (RPO)",
    meaning:
      "The target amount of data loss the organization can tolerate, expressed as a time window.",
    question:
      "How much recent data could be lost and still remain within the approved business tolerance?",
    evidence:
      "Backup or replication frequency, protected-resource coverage, and restoration validation.",
  },
  {
    term: "Service priority",
    meaning:
      "The relative importance of restoring one service before another during a disruption.",
    question:
      "Which service must return first for the business process to function?",
    evidence:
      "Business impact review, dependency map, owner approval, and continuity plan.",
  },
  {
    term: "Recovery dependency",
    meaning:
      "A service, identity, key, network path, storage layer, integration, or platform capability that another service requires before it can recover.",
    question:
      "What must be available before this service can become usable?",
    evidence:
      "Dependency inventory, architecture map, recovery sequence, and exercise results.",
  },
];

const resiliencePrinciples = [
  {
    title: "Protect the whole service, not only the database",
    meaning:
      "Applications depend on identity, keys, configuration, network paths, integrations, storage, and monitoring in addition to data.",
    review:
      "Does the recovery design include every dependency needed for usable service?",
  },
  {
    title: "Restore evidence matters more than backup assumptions",
    meaning:
      "A backup job can succeed while restoration remains untested or incomplete.",
    review:
      "When was the current architecture last restored successfully?",
  },
  {
    title: "Recovery objectives need business ownership",
    meaning:
      "RTO and RPO should reflect business tolerance rather than arbitrary technical guesses.",
    review:
      "Who approved the recovery targets and do they still match service priority?",
  },
  {
    title: "Identity and key access are recovery dependencies",
    meaning:
      "Recovery can fail if operators cannot authenticate or restored services cannot access required keys and secrets.",
    review:
      "Can approved recovery identities reach the resources they need without bypassing normal governance?",
  },
  {
    title: "Failure domains should be explicit",
    meaning:
      "Redundant components provide less value when they share the same dependency or failure boundary.",
    review:
      "Could one provider, region, account, configuration, or dependency failure affect every copy?",
  },
  {
    title: "Recovery paths need monitoring",
    meaning:
      "Backup failures, stale protection, restore failures, and dependency gaps should become visible before a real emergency.",
    review:
      "Who receives and owns recovery-related alerts?",
  },
  {
    title: "Plans must follow architecture change",
    meaning:
      "New services, identities, data stores, keys, integrations, and dependencies can invalidate old recovery evidence.",
    review:
      "Was the recovery plan refreshed after the most recent material change?",
  },
  {
    title: "Recovery completion needs validation",
    meaning:
      "Restored infrastructure is not enough; the application and business workflow should be validated as usable.",
    review:
      "Who confirms the service actually works after technical restoration?",
  },
];

const vocabulary = [
  {
    term: "Recovery Time Objective (RTO)",
    definition:
      "The target time within which an interrupted service or capability should be restored.",
  },
  {
    term: "Recovery Point Objective (RPO)",
    definition:
      "The acceptable amount of data loss expressed as a time window before the disruption.",
  },
  {
    term: "Failover",
    definition:
      "Moving service operation from a failed or unhealthy component to an alternate component or path.",
  },
  {
    term: "Failback",
    definition:
      "Returning service operation to the preferred primary architecture after recovery is stable and approved.",
  },
  {
    term: "Recovery exercise",
    definition:
      "A controlled, authorized practice used to validate whether the documented recovery process can restore the intended service or data.",
  },
  {
    term: "Restoration evidence",
    definition:
      "Documented proof that protected data or service components were successfully recovered and validated.",
  },
  {
    term: "Failure domain",
    definition:
      "A set of components that could be affected by the same underlying failure.",
  },
  {
    term: "Single point of failure",
    definition:
      "A component or dependency whose failure can prevent the service from meeting its required outcome.",
  },
  {
    term: "Resilience",
    definition:
      "The ability of a system and organization to withstand disruption, continue important functions, and recover to an acceptable state.",
  },
  {
    term: "Business continuity",
    definition:
      "The organizational ability to continue essential work during a disruption, including through alternate procedures when technology is unavailable.",
  },
  {
    term: "Recovery owner",
    definition:
      "The accountable person or team responsible for coordinating recovery readiness, exercises, evidence, and improvement.",
  },
  {
    term: "Recovery runbook",
    definition:
      "An approved, defensive sequence of responsibilities, decisions, checks, and validation activities used during recovery.",
  },
];

const recoveryRecords = [
  {
    id: "REC-01",
    service: "Student Services Portal",
    priority: "Critical",
    rto: "2 hours",
    rpo: "30 minutes",
    protectedAssets:
      "Application configuration, deployment definition, student-support database, report-storage references",
    dependencies:
      "Workforce identity, portal workload identity, database, report storage, logging, key references",
    backup:
      "Application configuration and data protected through approved managed services",
    restoreEvidence:
      "Full service exercise completed 42 days ago",
    owner: "Application Recovery Owner",
    monitoring:
      "Application health + backup status + identity + dependency telemetry",
    status: "Confirmed",
    concern:
      "Next exercise must include the planned analytics dependency.",
  },
  {
    id: "REC-02",
    service: "Student Support Database",
    priority: "Critical",
    rto: "60 minutes",
    rpo: "15 minutes",
    protectedAssets:
      "Primary data, database configuration metadata, backup policy",
    dependencies:
      "Database service, backup service, workload identity, key reference, private service path",
    backup:
      "Frequent managed backups with policy-defined retention",
    restoreEvidence:
      "Database-only restore completed 28 days ago",
    owner: "Data Platform Recovery Owner",
    monitoring:
      "Backup jobs + database health + restore activity",
    status: "Confirmed",
    concern:
      "Database restore is current, but complete application recovery still depends on REC-01.",
  },
  {
    id: "REC-03",
    service: "Generated Report Storage",
    priority: "High",
    rto: "4 hours",
    rpo: "24 hours",
    protectedAssets:
      "Report storage configuration and recoverable report data where required",
    dependencies:
      "Storage service, report workload identity, key reference, application access",
    backup:
      "Lifecycle and recovery configuration documented",
    restoreEvidence:
      "Last storage recovery exercise was 210 days ago",
    owner: "Reporting Team",
    monitoring:
      "Storage health + backup state + object access telemetry",
    status: "Conditional",
    concern:
      "Restoration evidence predates the current report-storage configuration baseline.",
  },
  {
    id: "REC-04",
    service: "Scheduling Integration",
    priority: "Medium",
    rto: "8 hours",
    rpo: "Not data-bearing / integration state only",
    protectedAssets:
      "Integration configuration, certificate reference, mapping rules",
    dependencies:
      "External SaaS, integration service, external identity, certificate, network boundary",
    backup:
      "Configuration version history available",
    restoreEvidence:
      "Configuration recovery validated 75 days ago",
    owner: "Integration Owner",
    monitoring:
      "Integration health + certificate lifecycle + gateway telemetry",
    status: "Conditional",
    concern:
      "Recovery depends on external SaaS availability and certificate renewal readiness.",
  },
  {
    id: "REC-05",
    service: "Cloud Monitoring Platform",
    priority: "High",
    rto: "2 hours",
    rpo: "15 minutes for critical source state",
    protectedAssets:
      "Monitoring configuration, alert definitions, source-health definitions, dashboard metadata",
    dependencies:
      "Cloud logging service, identity, source connections, notification path",
    backup:
      "Configuration exported through approved deployment process",
    restoreEvidence:
      "Monitoring configuration rebuild exercised 63 days ago",
    owner: "Security Monitoring",
    monitoring:
      "Platform health + source health + alert-delivery health",
    status: "Confirmed",
    concern:
      "Recovery should preserve source-health checks before dashboards are treated as reliable.",
  },
  {
    id: "REC-06",
    service: "Legacy Team File Share",
    priority: "Unknown",
    rto: "Unknown",
    rpo: "Unknown",
    protectedAssets:
      "Mixed historical files",
    dependencies:
      "Legacy file service + inherited group access",
    backup:
      "Backup state unclear",
    restoreEvidence:
      "No current restoration evidence",
    owner: "Unknown",
    monitoring:
      "Basic service health only",
    status: "Blocked",
    concern:
      "Business need, data classification, owner, backup state, and recovery requirement are unresolved.",
  },
  {
    id: "REC-07",
    service: "Emergency Recovery Access",
    priority: "Critical dependency",
    rto: "Immediate availability during approved recovery",
    rpo: "Not applicable",
    protectedAssets:
      "Emergency access process and recovery identity governance",
    dependencies:
      "Recovery owner, dual approval, emergency credential governance, audit logging",
    backup:
      "Governance record maintained separately from service data",
    restoreEvidence:
      "Emergency-access drill completed 31 days ago",
    owner: "Recovery Owner",
    monitoring:
      "Activation, use, post-use review, and replacement evidence",
    status: "Confirmed",
    concern:
      "Use remains exceptional and must not replace normal privileged identity architecture.",
  },
];

const dependencyChains = [
  {
    service: "Student Services Portal",
    chain:
      "Workforce Identity → Public Entry → Application Workload → Database → Report Storage → Logging",
    failureMeaning:
      "The application may be running but still unusable if identity, data, report access, or logging dependencies are not restored.",
  },
  {
    service: "Database Recovery",
    chain:
      "Recovery Operator → Privileged Identity → Backup Service → Key Reference → Database Service → Application Validation",
    failureMeaning:
      "A backup can exist but remain unusable if identity, key access, or application validation is unavailable.",
  },
  {
    service: "Scheduling Integration",
    chain:
      "Integration Service → External Identity / Certificate → Partner Network Boundary → SaaS Provider",
    failureMeaning:
      "Internal recovery cannot fully restore the integration when the external provider remains unavailable.",
  },
  {
    service: "Monitoring Recovery",
    chain:
      "Monitoring Platform → Log Sources → Source Health → Alert Routing → Service Owners",
    failureMeaning:
      "Restoring dashboards without restoring source health and alert delivery can create false confidence.",
  },
];

const exerciseEvidence = [
  {
    exercise: "Database Restore Exercise",
    date: "28 days ago",
    scope:
      "Restore database backup into isolated recovery environment and validate schema/data availability",
    result: "Passed",
    gap:
      "Did not validate complete application workflow.",
  },
  {
    exercise: "Full Portal Recovery Exercise",
    date: "42 days ago",
    scope:
      "Recover application configuration, database, report references, workload identities, logging, and service validation",
    result: "Passed with observation",
    gap:
      "Upcoming analytics dependency not yet included.",
  },
  {
    exercise: "Report Storage Recovery Exercise",
    date: "210 days ago",
    scope:
      "Recover report-storage configuration and approved sample data",
    result: "Passed at the time",
    gap:
      "Evidence predates current storage architecture and should be refreshed.",
  },
  {
    exercise: "Emergency Access Drill",
    date: "31 days ago",
    scope:
      "Validate dual approval, emergency access activation, audit logging, and post-use replacement workflow",
    result: "Passed",
    gap:
      "Must remain exceptional and separately monitored.",
  },
  {
    exercise: "Monitoring Rebuild Exercise",
    date: "63 days ago",
    scope:
      "Rebuild monitoring configuration and restore critical source-health and alert definitions",
    result: "Passed",
    gap:
      "Temporary export source-health coverage was added afterward and is not included in this evidence.",
  },
];

const antiPatterns = [
  {
    title: "Backup exists, so recovery is solved",
    problem:
      "The team proves backup jobs run but never validates restoration, dependency recovery, or application usability.",
    better:
      "Use current restoration exercises and service-level validation.",
  },
  {
    title: "Recover only the database",
    problem:
      "Identity, keys, configuration, networking, applications, integrations, and monitoring may remain unavailable.",
    better:
      "Map the full recovery dependency chain.",
  },
  {
    title: "RTO and RPO chosen by engineers alone",
    problem:
      "Technical targets may not match the actual business tolerance for outage or data loss.",
    better:
      "Tie recovery objectives to business priority and owner approval.",
  },
  {
    title: "Redundancy in one failure domain",
    problem:
      "Multiple copies or instances can still fail together when they share the same underlying dependency.",
    better:
      "Understand the failure domains behind redundancy claims.",
  },
  {
    title: "Recovery owner is everyone",
    problem:
      "No one is clearly accountable for exercises, evidence, decisions, and improvements.",
    better:
      "Assign named service and recovery owners.",
  },
  {
    title: "Old exercise proves new architecture",
    problem:
      "Services, identities, storage, keys, or integrations change while recovery evidence remains unchanged.",
    better:
      "Refresh recovery evidence after material architecture changes.",
  },
  {
    title: "Emergency access replaces normal IAM",
    problem:
      "Exceptional recovery credentials become a convenient permanent administrative path.",
    better:
      "Keep emergency access narrow, exceptional, monitored, and reviewed after use.",
  },
  {
    title: "Monitoring is restored last",
    problem:
      "Teams cannot confidently observe the recovery state or detect failing dependencies.",
    better:
      "Restore enough telemetry early to validate recovery progress and service health.",
  },
];

const dashboardMetrics = [
  {
    label: "Critical services assessed",
    value: "7",
    note: "Application, database, storage, integration, monitoring, legacy share, and emergency access",
  },
  {
    label: "Current restore evidence",
    value: "5 / 7",
    note: "Report storage is stale and legacy share has no current recovery evidence",
  },
  {
    label: "Named recovery owners",
    value: "6 / 7",
    note: "Legacy Team File Share has no confirmed owner",
  },
  {
    label: "Known resilience gaps",
    value: "4",
    note: "Stale storage restore, external SaaS dependency, legacy share uncertainty, and new analytics dependency coverage",
  },
];

const logs = [
  "[08:20] REC-01 student-portal full-recovery=42d status=CONFIRMED",
  "[08:42] REC-02 student-db restore=28d rto_test=PASSED",
  "[09:08] REC-03 report-storage restore=210d architecture_changed=YES status=CONDITIONAL",
  "[09:31] REC-04 scheduling-integration external_dependency=SAAS certificate_renewal=PENDING",
  "[09:59] REC-05 monitoring-rebuild=63d source_health=RESTORED",
  "[10:26] REC-06 legacy-share owner=UNKNOWN backup=UNKNOWN restore=NONE status=BLOCKED",
  "[10:53] REC-07 emergency-access drill=31d dual_approval=PASSED post_review=PASSED",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep REC-03 Conditional and schedule a current recovery exercise because the last restoration evidence predates the current storage architecture.",
    outcome:
      "Best. Old restore evidence should not be treated as proof for a materially changed design.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark REC-03 Confirmed because backup configuration is current.",
    outcome:
      "Risky. Current backup configuration does not prove current restoration capability.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Delete restoration evidence so reviewers do not see that it is old.",
    outcome:
      "Risky. Evidence gaps should remain visible and be remediated, not hidden.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep the scheduling integration recovery claim Conditional because internal recovery depends on an external SaaS service and a certificate lifecycle that must remain valid.",
    outcome:
      "Best. Resilience claims should include external dependencies that the organization does not fully control.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark the integration fully resilient because the internal service configuration can be restored.",
    outcome:
      "Risky. Internal restoration does not guarantee the external dependency is available.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Ignore certificate renewal because networking is handled by the provider.",
    outcome:
      "Risky. Service trust and certificate lifecycle remain part of the organization's recovery dependency chain.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest description of cloud resilience?",
    choices: [
      "Having one successful backup job.",
      "The ability to withstand disruption and restore critical service through architecture, dependencies, backup, restoration, ownership, monitoring, and evidence.",
      "Keeping every service public.",
      "Running more virtual machines than needed.",
    ],
    answer: 1,
    explanation:
      "Resilience is broader than backup or availability and depends on the complete service recovery path.",
  },
  {
    question:
      "Why does backup existence not prove recoverability?",
    choices: [
      "Because backups are never useful.",
      "Because restoration, identity, keys, dependencies, configuration, application validation, and owner readiness may still fail.",
      "Because backups cannot contain data.",
      "Because only providers can restore systems.",
    ],
    answer: 1,
    explanation:
      "A backup is one input to recovery, not proof that the full service can return to operation.",
  },
  {
    question:
      "What does RTO describe?",
    choices: [
      "The acceptable data-loss window.",
      "The target amount of time within which a service should be restored.",
      "The number of backup copies.",
      "The cloud provider's billing period.",
    ],
    answer: 1,
    explanation:
      "RTO is the recovery time target.",
  },
  {
    question:
      "What does RPO describe?",
    choices: [
      "The target acceptable amount of data loss expressed as a time window.",
      "The time needed to approve a role.",
      "The number of administrators.",
      "The network path to a backup.",
    ],
    answer: 0,
    explanation:
      "RPO expresses the tolerated point-in-time data loss.",
  },
  {
    question:
      "A recovery exercise predates a major architecture change. What is the strongest conclusion?",
    choices: [
      "The old exercise fully proves the new architecture can recover.",
      "Recovery confidence should be Conditional until the current architecture is validated.",
      "Recovery evidence is unnecessary.",
      "Architecture changes never affect resilience.",
    ],
    answer: 1,
    explanation:
      "Material changes can invalidate earlier assumptions and recovery evidence.",
  },
  {
    question:
      "Why are identity and key services part of recovery architecture?",
    choices: [
      "Because restored services may remain unusable if workloads and operators cannot authenticate or access required key operations.",
      "Because identity replaces backups.",
      "Because keys should be copied into recovery documents.",
      "Because recovery operators should bypass IAM.",
    ],
    answer: 0,
    explanation:
      "Authentication and protected key access are dependencies of many recovery workflows.",
  },
  {
    question:
      "Why can external SaaS dependencies limit recovery confidence?",
    choices: [
      "Because the organization cannot fully control the availability and recovery of an external provider.",
      "Because SaaS never supports resilience.",
      "Because internal configuration is irrelevant.",
      "Because external services should always be public.",
    ],
    answer: 0,
    explanation:
      "The organization can prepare its side of the integration but cannot guarantee an external dependency's availability.",
  },
];

const checklistItems = [
  "Every critical service has a documented recovery priority.",
  "RTO and RPO are tied to approved business tolerance.",
  "Protected resources include data, configuration, identity, keys, and other required service components.",
  "Backup coverage is mapped to the current architecture.",
  "Restoration evidence is current enough to support present-tense recovery claims.",
  "Recovery dependencies are documented.",
  "Workload and privileged identities needed for recovery are governed.",
  "Key and certificate dependencies are included without exposing sensitive material.",
  "External providers and SaaS dependencies are included in resilience claims.",
  "Failure domains are identified so redundancy claims are meaningful.",
  "Recovery monitoring covers backup health, restore outcomes, and important dependencies.",
  "Each critical service has an accountable recovery owner.",
  "Emergency access remains exceptional, narrow, logged, and reviewed.",
  "Recovery plans are refreshed after material architecture changes.",
  "Restored services are validated as usable, not merely technically started.",
  "Unknown owner, stale evidence, and untested recovery paths remain visible.",
  "No lesson activity requires modifying, restoring, disrupting, or testing any real cloud service or production data.",
];

const takeaways = [
  "Availability, backup, restoration, and recovery are related but different concepts.",
  "A successful backup job does not prove a service can recover.",
  "RTO and RPO should reflect business tolerance and be validated with evidence.",
  "Recovery depends on identity, keys, configuration, network paths, storage, applications, integrations, and monitoring.",
  "Redundancy is meaningful only when failure domains are understood.",
  "Current restoration evidence is stronger than assumptions based on old exercises.",
  "External SaaS and provider dependencies limit what the organization can guarantee.",
  "Emergency access should support recovery without becoming a permanent IAM shortcut.",
  "Monitoring should return early enough to validate recovery progress and health.",
  "The Cloud Recovery and Resilience Assessment will connect directly to A12 misconfiguration prevention, governance, and the final cloud architecture review.",
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

export default function BackupRecoveryResiliencePage() {
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
              A12.7
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cloud Security Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A12.7
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Backup, Recovery, and Resilience
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A cloud service is resilient when the organization can explain what
            must recover, how quickly it must return, how much data loss is
            acceptable, what dependencies must be restored first, and what
            evidence proves the recovery design still works.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional recovery records, synthetic exercises,
            and safe architecture evidence only. It does not involve disrupting,
            restoring, or modifying any real cloud system.
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
          lessonTitle="Backup, Recovery, and Resilience"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A12.7 Entry Readiness"
          items={[
            "I understand storage, IAM, monitoring, secrets, and key dependencies from A12.2–A12.6.",
            "I can distinguish backup configuration from restoration evidence.",
            "I understand that a service depends on more than its primary data store.",
            "I will use only fictional recovery records and synthetic evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Backup Can Be Healthy While Recovery Is Still Broken"
        >
          <p className="leading-8">
            Imagine a fictional application whose database backups complete
            successfully every hour. During a recovery exercise, the team
            discovers that the restored application cannot start because the
            workload identity, key reference, and report-storage configuration
            were never included in the recovery design.
          </p>

          <p className="mt-4 leading-8">
            The database backup worked. The service recovery did not.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Backup protects copies. Recovery restores capability.
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
          eyebrow="Core Resilience Concepts"
          title="Availability, Backup, Restoration, and Recovery Are Not the Same Thing"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {resilienceConcepts.map((item) => (
              <article
                key={item.concept}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.concept}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Evidence
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.evidence}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Caution
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.caution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Recovery Objectives"
          title="Recovery Targets Should Describe Business Tolerance"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {recoveryObjectives.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="text-lg font-black text-blue-50">
                  {item.term}
                </h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Key question: {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Resilience Principles"
          title="Eight Principles for Evidence-Based Cloud Recovery"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {resiliencePrinciples.map((item) => (
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
          title="Recovery and Resilience Terms"
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
          eyebrow="Fictional Recovery Register"
          title="Seven Northbridge Recovery Records"
        >
          <div className="grid gap-5">
            {recoveryRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.priority}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.service}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["RTO", item.rto],
                    ["RPO", item.rpo],
                    ["Protected assets", item.protectedAssets],
                    ["Dependencies", item.dependencies],
                    ["Backup / protection", item.backup],
                    ["Restore evidence", item.restoreEvidence],
                    ["Owner", item.owner],
                    ["Monitoring", item.monitoring],
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
          title="Northbridge Cloud Recovery and Resilience Dashboard"
          subtitle="Fictional recovery evidence and dependency metrics"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Report Storage Restore Evidence Is Stale"
          severity="High"
          time="09:08"
          source="Fictional Recovery Readiness Review"
          details="REC-03 last completed a recovery exercise 210 days ago, before the current report-storage architecture baseline."
          recommendation="Keep REC-03 Conditional and perform an authorized current-architecture recovery exercise before declaring restoration readiness Confirmed."
        />

        <Section
          eyebrow="Dependency Chains"
          title="Recovery Fails When One Required Dependency Is Missing"
        >
          <div className="grid gap-5">
            {dependencyChains.map((item) => (
              <article
                key={item.service}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.service}</h3>

                <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                    Dependency chain
                  </p>
                  <p className="mt-2 text-sm leading-7 text-cyan-50">
                    {item.chain}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Recovery meaning: {item.failureMeaning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Recovery Exercise Evidence"
          title="Exercises Should Match the Current Architecture"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[1050px] w-full border-collapse text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-700 p-4">Exercise</th>
                  <th className="border-b border-slate-700 p-4">Date</th>
                  <th className="border-b border-slate-700 p-4">Scope</th>
                  <th className="border-b border-slate-700 p-4">Result</th>
                  <th className="border-b border-slate-700 p-4">Gap</th>
                </tr>
              </thead>
              <tbody>
                {exerciseEvidence.map((item) => (
                  <tr key={item.exercise} className="align-top">
                    <td className="border-b border-slate-800 p-4 font-black text-white">
                      {item.exercise}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm text-cyan-100">
                      {item.date}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-slate-300">
                      {item.scope}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm font-black text-emerald-100">
                      {item.result}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-yellow-100">
                      {item.gap}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Cloud Recovery Readiness Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Report Storage Recovery"
          question="What is the strongest conclusion about REC-03?"
          evidence={[
            "Report-storage backup and lifecycle configuration are current.",
            "The service owner is known.",
            "The last documented recovery exercise was 210 days ago.",
            "The storage architecture has changed since that exercise.",
          ]}
          options={[
            "Recovery readiness is fully Confirmed because backups are current.",
            "Recovery readiness should remain Conditional until a current-architecture restoration exercise is completed.",
            "Old restoration evidence is always sufficient.",
            "The backup should be removed.",
          ]}
          bestAnswer={1}
          explanation="Backup health and restoration readiness are separate claims. Material architecture changes can invalidate older recovery evidence."
        />

        <Section
          eyebrow="Resilience Anti-Patterns"
          title="Eight Ways Recovery Confidence Becomes Misleading"
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
          eyebrow="Failure Domains"
          title="Redundancy Only Helps When Copies Do Not Fail Together"
        >
          <p className="leading-8">
            Two instances are more resilient than one only when the architecture
            understands what could affect both at the same time. Failure domains
            can include service regions, zones, accounts, shared identity,
            configuration, providers, network paths, key services, and external
            dependencies.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Compute failure domain",
                detail:
                  "Multiple application instances should not all depend on one fragile runtime component.",
              },
              {
                title: "Storage failure domain",
                detail:
                  "Replicas and backups should not be treated as independent when the same event could corrupt or delete every copy.",
              },
              {
                title: "Identity failure domain",
                detail:
                  "Recovery should consider what happens when the primary authentication path is unavailable.",
              },
              {
                title: "Key-management failure domain",
                detail:
                  "Protected data may remain unusable if required key operations cannot be performed.",
              },
              {
                title: "Network failure domain",
                detail:
                  "A single path or integration gateway can become a dependency for many otherwise healthy services.",
              },
              {
                title: "External-provider failure domain",
                detail:
                  "A SaaS or partner service can remain unavailable even after the organization's own cloud environment recovers.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Current Backups, Stale Restore Evidence"
          scenario="Report-storage backups are currently configured and healthy, but the last restoration exercise predates the current architecture by several months."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — External SaaS Dependency"
          scenario="Northbridge can restore its scheduling integration service and configuration, but the integration also depends on an external SaaS provider and an expiring certificate."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Cloud Recovery and Resilience Assessment"
        >
          <p className="leading-8">
            Use fictional services, dependencies, exercises, owners, and
            recovery evidence only. Do not restore, disrupt, or test any real
            cloud service.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least ten fictional recovery records.",
              "Include an application, database, object storage, monitoring service, partner integration, backup service, identity dependency, key dependency, and one legacy service.",
              "Give each recovery record a stable ID.",
              "State service priority.",
              "Record RTO.",
              "Record RPO or explain why it is not applicable.",
              "List protected data and configuration.",
              "List required identities and key references.",
              "List internal and external dependencies.",
              "Record backup or protection mechanism at a conceptual level.",
              "Record the most recent restoration evidence.",
              "Assign an accountable recovery owner.",
              "Record monitoring coverage.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, or Not Applicable.",
              "Identify at least two single points of failure or shared failure domains.",
              "Identify at least one stale recovery exercise.",
              "Identify at least one external dependency that limits recovery confidence.",
              "Define remediation and next exercise.",
              "Add change triggers for new services, storage changes, identity changes, key changes, network changes, provider changes, integrations, and major deployments.",
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
              This is a planning and evidence exercise only. Do not delete,
              fail, restore, interrupt, modify, or test any real cloud service,
              backup, account, workload, network, or production data.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Full Service Recovery"
          question="Which evidence most strongly supports REC-01 as a service-level recovery claim?"
          evidence={[
            "Database restore completed successfully.",
            "Application configuration was restored.",
            "Workload identities and key references were validated.",
            "Report-storage access and logging were restored.",
            "The application workflow was tested end-to-end.",
            "The exercise completed within the approved RTO.",
          ]}
          options={[
            "Only the database restore matters.",
            "The combined evidence supports a stronger service-level recovery claim because data, identity, configuration, dependencies, monitoring, and application usability were validated together.",
            "Logging should not be part of recovery.",
            "RTO is irrelevant when backups exist.",
          ]}
          bestAnswer={1}
          explanation="Service recovery is stronger when all required dependencies and the actual business workflow are validated together."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design Recovery for a Multi-Service Cloud Application"
        >
          <p className="leading-8">
            A fictional service includes a public application, managed database,
            report storage, workload identities, a key reference, monitoring,
            a notification provider, and a scheduling SaaS integration. Build a
            conceptual recovery design that explains how the service returns to
            usable operation.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Business priority",
              "RTO and RPO",
              "Data protection scope",
              "Configuration protection",
              "Identity dependencies",
              "Key and certificate dependencies",
              "Network dependencies",
              "External SaaS dependencies",
              "Backup and restore evidence",
              "Recovery sequence",
              "Monitoring restored early enough to validate progress",
              "Emergency access governance",
              "Application validation",
              "Owner sign-off",
              "Known residual risk",
              "Next exercise date and change triggers",
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
            A strong answer shows that resilience is an architecture property
            spanning data, identity, keys, network, applications, monitoring,
            people, and external dependencies.
          </p>
        </Section>

        <DefenderChecklist
          title="A12.7 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A12.7 Mini Quiz: Backup, Recovery, and Resilience"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Cloud Recovery and Resilience Assessment"
          prompt="Create the seventh artifact for your A12 Cloud Security Architecture Assessment: a fictional Cloud Recovery and Resilience Assessment with at least ten recovery records. Include recovery ID, service, business priority, RTO, RPO, protected assets, identity/key/network/external dependencies, backup or protection design, latest restoration evidence, owner, monitoring coverage, status, failure-domain concern, remediation, next exercise, and change trigger."
          tips={[
            "Include both technical and external dependencies.",
            "Separate backup health from restoration evidence.",
            "Include at least one stale restore exercise and keep it Conditional.",
            "Include one Blocked legacy service with Unknown ownership or recovery need.",
            "Show how identity and key access can affect recovery.",
            "Use fictional provider-neutral names and no real system details.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A12.8?"
        >
          <p className="leading-8">
            A12.8 moves into Cloud Misconfiguration Prevention. Before
            continuing, make sure you can explain how configuration drift,
            backup settings, identity changes, storage exposure, and logging
            changes can all weaken recovery readiness.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish availability, redundancy, backup, restoration, and recovery.",
              "I can explain RTO and RPO.",
              "I can identify recovery dependencies beyond the primary database.",
              "I can evaluate whether restoration evidence is current enough for the present architecture.",
              "I can explain why failure domains, ownership, and monitoring matter to resilience.",
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
          title="How to Make the Recovery Assessment Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Lead with business priority",
                detail:
                  "A reviewer should know which services matter most before reading technical recovery details.",
              },
              {
                title: "Separate RTO and RPO",
                detail:
                  "Show outage tolerance and data-loss tolerance as different business decisions.",
              },
              {
                title: "Show dependencies",
                detail:
                  "Identity, keys, network, storage, monitoring, and external providers should appear alongside the primary service.",
              },
              {
                title: "Show evidence age",
                detail:
                  "Make the date and architecture relevance of recovery exercises visible.",
              },
              {
                title: "Show failure domains",
                detail:
                  "Explain whether redundant components can fail together because they share an underlying dependency.",
              },
              {
                title: "Show ownership",
                detail:
                  "Every critical service should have a named recovery owner and a clear validation responsibility.",
              },
              {
                title: "Show residual uncertainty",
                detail:
                  "Use Conditional, Unknown, or Blocked when evidence does not support a full recovery claim.",
              },
              {
                title: "Connect forward",
                detail:
                  "Make the assessment reusable in A12.8 configuration assurance, A12.9 governance, and A12.10 architecture review.",
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
            Recovery architecture review does not require disrupting real systems
          </h2>
          <p className="mt-3 leading-7">
            Do not fail, interrupt, delete, restore, modify, disconnect, or test
            real cloud services, accounts, storage, workloads, networks,
            backups, credentials, or production data. All recovery evidence in
            this lesson is fictional and defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A12.7 Backup, Recovery, and Resilience Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a resilience model for recovery objectives, backup
            coverage, restoration evidence, dependency chains, failure domains,
            recovery ownership, emergency access, monitoring, and business
            validation. Next, A12.8 focuses on Cloud Misconfiguration
            Prevention.
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