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
const previousLesson = `${modulePath}/backup-recovery-and-resilience`;
const nextLesson = `${modulePath}/cloud-governance-concepts`;

const objectives = [
  "Explain cloud misconfiguration as a lifecycle and governance problem involving secure baselines, ownership, change control, drift, exceptions, evidence, and remediation.",
  "Distinguish preventive controls, detective controls, configuration baselines, policy checks, review gates, exceptions, and compensating controls by purpose and evidence.",
  "Evaluate fictional configuration evidence for identity, storage, network, logging, backup, secrets, and environment settings without accessing or changing any real cloud environment.",
  "Identify architecture risks such as baseline drift, overbroad permissions, accidental public exposure, disabled logging, stale exceptions, insecure defaults, and unowned configuration changes.",
  "Build a Cloud Configuration Assurance Register that becomes the eighth artifact in the A12 Cloud Security Architecture Assessment.",
];

const configurationDomains = [
  {
    domain: "Identity and access",
    baseline:
      "Roles are purpose-specific, privileged access is controlled, external identities have sponsors and expiration, and production identities remain separate from lower environments.",
    drift:
      "Broad role assignments, stale guests, permanent admin access, inherited permissions, or unowned service identities appear over time.",
    evidence:
      "Role inventory, access review, privileged activation records, identity lifecycle evidence, and configuration history.",
  },
  {
    domain: "Storage exposure",
    baseline:
      "Sensitive storage is private by default, public access is explicit and justified, retention is defined, and access logging is enabled where required.",
    drift:
      "A storage location becomes public, inherits broad access, loses logging, keeps temporary exports too long, or outlives its business owner.",
    evidence:
      "Storage configuration record, exposure review, access policy, retention metadata, owner, and logs.",
  },
  {
    domain: "Network boundaries",
    baseline:
      "Only required public entry points exist, private service paths remain bounded, partner integrations are narrow, and cross-environment access is exceptional.",
    drift:
      "New public paths, broad outbound access, stale partner connectivity, environment crossover, or undocumented internal reachability appears.",
    evidence:
      "Trust-boundary map, approved flow register, network configuration history, owner, and monitoring evidence.",
  },
  {
    domain: "Logging and monitoring",
    baseline:
      "Critical sources are enabled, current, owned, retained appropriately, and covered by source-health monitoring.",
    drift:
      "A source is disabled, stops reporting, changes schema, loses retention, or becomes unowned.",
    evidence:
      "Telemetry source register, source-health status, configuration history, alert ownership, and retention record.",
  },
  {
    domain: "Backup and recovery",
    baseline:
      "Critical resources are protected, backup settings match policy, restoration evidence is current, and recovery owners are known.",
    drift:
      "New resources are not added to protection, retention changes, restore permissions broaden, or recovery evidence becomes stale.",
    evidence:
      "Protected-resource inventory, backup configuration, restore exercise record, recovery owner, and monitoring evidence.",
  },
  {
    domain: "Secrets and key handling",
    baseline:
      "Workload identity is preferred, reusable credentials are narrow and owned, production and staging are separated, and rotation/revocation are governed.",
    drift:
      "Long-lived credentials appear, environment reuse occurs, certificates near expiration, owners disappear, or monitoring becomes incomplete.",
    evidence:
      "Secrets governance register, identity bindings, owner record, lifecycle metadata, and secret-access audit evidence.",
  },
  {
    domain: "Application and platform configuration",
    baseline:
      "Approved deployment and runtime settings match the architecture standard for production.",
    drift:
      "Debug features, outdated options, unsupported settings, or inconsistent runtime configuration appear after deployment or manual changes.",
    evidence:
      "Deployment definition, configuration baseline, change record, validation result, and application/platform logs.",
  },
  {
    domain: "Environment separation",
    baseline:
      "Development, test, staging, and production use distinct identity, data, network, secret, and approval boundaries.",
    drift:
      "Production data, credentials, roles, or service paths are copied into lower environments for convenience.",
    evidence:
      "Environment inventory, IAM matrix, data-flow review, secrets register, network map, and exception record.",
  },
];

const assuranceMechanisms = [
  {
    mechanism: "Secure baseline",
    purpose:
      "Defines the approved starting state for a cloud service, identity, storage location, network boundary, monitoring source, or recovery configuration.",
    strength:
      "Makes review measurable because teams can compare current state to an expected state.",
    caution:
      "A baseline becomes stale if architecture changes and the baseline is never updated.",
  },
  {
    mechanism: "Preventive guardrail",
    purpose:
      "Blocks or constrains configurations that should not be allowed under normal policy.",
    strength:
      "Reduces the chance that unsafe settings reach production.",
    caution:
      "Guardrails should be scoped carefully so they do not encourage people to bypass governance when legitimate exceptions exist.",
  },
  {
    mechanism: "Pre-deployment review",
    purpose:
      "Checks planned configuration before release or major change.",
    strength:
      "Finds design problems before they become live drift.",
    caution:
      "A one-time review does not protect against later manual changes.",
  },
  {
    mechanism: "Continuous configuration check",
    purpose:
      "Compares current state to approved expectations on a recurring basis.",
    strength:
      "Helps detect drift after deployment.",
    caution:
      "The check is only as reliable as its scope, freshness, and ownership.",
  },
  {
    mechanism: "Change approval",
    purpose:
      "Ensures meaningful configuration changes have purpose, owner, risk context, and validation.",
    strength:
      "Improves traceability and discourages unexplained production changes.",
    caution:
      "Approval alone does not prove the implemented state matches the approved plan.",
  },
  {
    mechanism: "Exception record",
    purpose:
      "Documents a temporary or justified deviation from the standard.",
    strength:
      "Keeps risk visible and gives the deviation an owner, expiration, and target state.",
    caution:
      "Exceptions can become permanent architecture debt if review dates and closure evidence are ignored.",
  },
];

const assurancePrinciples = [
  {
    title: "Baseline before drift",
    meaning:
      "Teams cannot identify drift unless an approved expected state exists.",
    review:
      "Is the baseline current and tied to the service's actual architecture?",
  },
  {
    title: "Prevent what should never happen",
    meaning:
      "Some unsafe states should be constrained before deployment rather than discovered later.",
    review:
      "Which settings are important enough to block by default?",
  },
  {
    title: "Detect what can still change",
    meaning:
      "Manual changes, new services, inherited access, and platform updates can create new configuration states after release.",
    review:
      "What recurring evidence shows the current state still matches intent?",
  },
  {
    title: "Exceptions need expiration",
    meaning:
      "A deviation should have an owner, reason, risk, compensating control, target state, and review or end date.",
    review:
      "Can the team tell when the exception must be closed or renewed?",
  },
  {
    title: "Change evidence matters",
    meaning:
      "Configuration history should connect a change to an identity, purpose, approval, and result.",
    review:
      "Can reviewers explain why the current state changed?",
  },
  {
    title: "Manual changes are architecture changes",
    meaning:
      "A quick console edit can alter identity, exposure, logging, recovery, or data handling just as much as a formal deployment.",
    review:
      "Are manual production changes visible and reviewed?",
  },
  {
    title: "Unknown stays visible",
    meaning:
      "If a control cannot establish current configuration, the status should remain Unknown or Conditional.",
    review:
      "Does the dashboard distinguish evidence gaps from compliant state?",
  },
  {
    title: "Remediation needs validation",
    meaning:
      "Closing a finding requires evidence that the configuration actually returned to the approved state.",
    review:
      "What proves the fix is complete and durable?",
  },
];

const vocabulary = [
  {
    term: "Configuration baseline",
    definition:
      "The approved expected state for important service, identity, storage, network, monitoring, recovery, or platform settings.",
  },
  {
    term: "Configuration drift",
    definition:
      "A difference between the approved expected state and the current observed state.",
  },
  {
    term: "Guardrail",
    definition:
      "A preventive or constraining control designed to keep cloud configuration within approved boundaries.",
  },
  {
    term: "Policy check",
    definition:
      "A rule or review that evaluates whether configuration meets an approved standard.",
  },
  {
    term: "Exception",
    definition:
      "A documented, approved deviation from the normal baseline for a bounded reason and period.",
  },
  {
    term: "Compensating control",
    definition:
      "An alternate control used to reduce risk when the preferred standard cannot yet be met.",
  },
  {
    term: "Drift detection",
    definition:
      "The process of identifying when current configuration differs from the approved baseline.",
  },
  {
    term: "Configuration assurance",
    definition:
      "The combination of baseline, prevention, detection, review, ownership, remediation, and evidence used to maintain trustworthy configuration.",
  },
  {
    term: "Change trigger",
    definition:
      "An event that should cause a configuration review, such as a new service, identity change, architecture change, integration, or exception.",
  },
  {
    term: "Closure evidence",
    definition:
      "Proof that a configuration finding or exception was actually remediated and validated.",
  },
  {
    term: "Desired state",
    definition:
      "The approved target configuration the architecture expects a service to maintain.",
  },
  {
    term: "Observed state",
    definition:
      "The configuration currently supported by available evidence.",
  },
];

const configurationRecords = [
  {
    id: "CFG-01",
    domain: "Identity",
    component: "Platform Administrator Role",
    baseline:
      "Privileged role activated only through approved JIT workflow",
    observed:
      "JIT enabled; one emergency activation lacks linked post-use review",
    owner: "Platform Engineering",
    evidence:
      "IAM review + privileged activation audit",
    status: "Conditional",
    exception: "None",
    nextAction:
      "Complete missing post-use review and confirm closure.",
  },
  {
    id: "CFG-02",
    domain: "Storage",
    component: "Generated Report Storage",
    baseline:
      "Private access, 14-day retention, access logging enabled",
    observed:
      "Private access and retention match baseline; logging current",
    owner: "Reporting Team",
    evidence:
      "Storage review + telemetry source health",
    status: "Confirmed",
    exception: "None",
    nextAction:
      "Revalidate on data-classification or sharing change.",
  },
  {
    id: "CFG-03",
    domain: "Monitoring",
    component: "Temporary Export Access Logs",
    baseline:
      "Access logs enabled and freshness monitored",
    observed:
      "Logs enabled; source freshness check incomplete",
    owner: "Security Monitoring",
    evidence:
      "Monitoring coverage matrix",
    status: "Conditional",
    exception: "Temporary source-health gap",
    nextAction:
      "Add source freshness monitoring and validate event arrival.",
  },
  {
    id: "CFG-04",
    domain: "Recovery",
    component: "Report Storage Recovery",
    baseline:
      "Current restoration evidence after material configuration change",
    observed:
      "Last restore exercise predates current architecture",
    owner: "Reporting Team",
    evidence:
      "Recovery assessment",
    status: "Conditional",
    exception: "None",
    nextAction:
      "Run authorized current-architecture recovery exercise.",
  },
  {
    id: "CFG-05",
    domain: "Secrets",
    component: "Legacy Reporting Credential",
    baseline:
      "Owned, narrow, rotated, monitored, revocable credential or workload identity",
    observed:
      "Owner Unknown; rotation overdue; revocation path Unknown",
    owner: "Unknown",
    evidence:
      "Secrets governance register",
    status: "Blocked",
    exception: "None",
    nextAction:
      "Resolve business need and owner; replace or retire credential.",
  },
  {
    id: "CFG-06",
    domain: "Network",
    component: "Development-to-Production Reporting Path",
    baseline:
      "No standing cross-environment production path without approved exception",
    observed:
      "Legacy development path still documented; no current owner or exception",
    owner: "Unknown",
    evidence:
      "Trust-boundary map",
    status: "Blocked",
    exception: "Missing",
    nextAction:
      "Remove path or create narrowly scoped reviewed exception if still required.",
  },
  {
    id: "CFG-07",
    domain: "Storage",
    component: "Public Help Content",
    baseline:
      "Public only for explicitly Public-classified content with controlled publishing",
    observed:
      "Matches baseline",
    owner: "Communications Web Owner",
    evidence:
      "Storage exposure review + publishing workflow",
    status: "Confirmed",
    exception: "None",
    nextAction:
      "Revalidate if content classification or publishing workflow changes.",
  },
  {
    id: "CFG-08",
    domain: "Certificate lifecycle",
    component: "Scheduling Integration Certificate",
    baseline:
      "Renewal started early enough to validate replacement before expiration",
    observed:
      "Renewal due in 45 days; replacement validation not started",
    owner: "Integration Owner",
    evidence:
      "Secrets governance register + integration monitoring",
    status: "Conditional",
    exception: "None",
    nextAction:
      "Begin renewal and replacement validation.",
  },
];

const exceptionRecords = [
  {
    id: "EX-01",
    deviation:
      "Temporary export log source lacks automated freshness monitoring",
    reason:
      "Source-health integration is not yet complete.",
    owner:
      "Security Monitoring",
    compensating:
      "Daily manual source check plus direct event-volume review.",
    expiration:
      "14 days",
    target:
      "Add source to automated freshness monitoring.",
    status:
      "Open / approved",
  },
  {
    id: "EX-02",
    deviation:
      "Scheduling certificate replacement validation not yet started",
    reason:
      "Partner testing window opens next week.",
    owner:
      "Integration Owner",
    compensating:
      "Expiration alerting and confirmed renewal ownership.",
    expiration:
      "21 days",
    target:
      "Complete replacement validation and update lifecycle evidence.",
    status:
      "Open / approved",
  },
  {
    id: "EX-03",
    deviation:
      "Legacy development-to-production reporting path",
    reason:
      "Historical troubleshooting convenience.",
    owner:
      "Unknown",
    compensating:
      "None documented.",
    expiration:
      "None",
    target:
      "Remove or formally redesign.",
    status:
      "Invalid / Blocked",
  },
];

const antiPatterns = [
  {
    title: "Secure on launch day",
    problem:
      "The team validates configuration once and never checks whether it changes later.",
    better:
      "Combine secure baselines with recurring drift detection and change evidence.",
  },
  {
    title: "Manual fix with no record",
    problem:
      "A configuration is changed directly in production but no approved purpose or review evidence exists.",
    better:
      "Treat manual changes as governed architecture changes and record identity, reason, result, and validation.",
  },
  {
    title: "Exception with no end date",
    problem:
      "A temporary deviation becomes permanent because no review or closure trigger exists.",
    better:
      "Require owner, expiration, target state, and closure evidence.",
  },
  {
    title: "Compliant because the tool is green",
    problem:
      "A dashboard result is trusted without checking whether its scope, source health, or baseline is current.",
    better:
      "Connect compliance claims to current evidence and known coverage limits.",
  },
  {
    title: "Fix the symptom, not the baseline",
    problem:
      "One unsafe setting is corrected but the approved standard still allows the same state to return.",
    better:
      "Update baseline, guardrail, review, or deployment process so the issue is less likely to recur.",
  },
  {
    title: "Every deviation is equally severe",
    problem:
      "Teams cannot prioritize because trivial and high-impact drift receive the same treatment.",
    better:
      "Evaluate impact on identity, data, exposure, monitoring, recovery, and business service.",
  },
  {
    title: "No owner means platform owns it",
    problem:
      "Configuration responsibility becomes vague and remediation stalls.",
    better:
      "Assign accountable service, platform, data, identity, or security ownership explicitly.",
  },
  {
    title: "Stale baseline",
    problem:
      "The approved state describes an older architecture, so valid new configuration appears noncompliant or unsafe new settings appear normal.",
    better:
      "Review the baseline when services, dependencies, providers, or architecture materially change.",
  },
];

const dashboardMetrics = [
  {
    label: "Configuration records reviewed",
    value: "8",
    note: "Identity, storage, monitoring, recovery, secrets, network, public content, and certificate lifecycle",
  },
  {
    label: "Confirmed baseline matches",
    value: "2",
    note: "Report storage and public help content currently match approved state",
  },
  {
    label: "Conditional findings",
    value: "4",
    note: "IAM review, telemetry freshness, recovery evidence, and certificate renewal need follow-up",
  },
  {
    label: "Blocked drift",
    value: "2",
    note: "Legacy credential and development-to-production path lack acceptable ownership/governance",
  },
];

const logs = [
  "[08:16] CFG-01 platform-admin baseline=JIT observed=JIT post_review=PARTIAL status=CONDITIONAL",
  "[08:41] CFG-02 report-storage baseline_match=YES status=CONFIRMED",
  "[09:04] CFG-03 temp-export-source freshness_monitor=INCOMPLETE exception=EX-01",
  "[09:28] CFG-04 report-recovery restore_evidence=STALE status=CONDITIONAL",
  "[09:56] CFG-05 legacy-credential owner=UNKNOWN rotation=OVERDUE status=BLOCKED",
  "[10:21] CFG-06 dev-to-prod path=LEGACY exception=MISSING status=BLOCKED",
  "[10:47] CFG-07 public-help classification=PUBLIC baseline_match=YES",
  "[11:09] CFG-08 scheduling-cert renewal=45d validation=NOT_STARTED status=CONDITIONAL",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep the cross-environment path Blocked, verify whether it is still needed, remove it if unnecessary, or create a narrowly scoped exception with owner, expiration, compensating control, monitoring, and target state.",
    outcome:
      "Best. Unowned drift should not survive as an informal exception.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Leave the path in place because it has existed for a long time.",
    outcome:
      "Risky. Age is not evidence of current need or acceptable risk.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Rename the path so it no longer appears as an exception.",
    outcome:
      "Risky. Relabeling does not change the architecture or evidence.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Treat the logging state as Conditional, keep EX-01 time-bounded, use the temporary manual check, and close the exception only after automated source freshness is validated.",
    outcome:
      "Best. A compensating control can reduce temporary risk while the target state is completed.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark the logging source fully Confirmed because logs are enabled.",
    outcome:
      "Risky. Enabled does not prove freshness monitoring exists.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Remove the expiration date so the team has more time.",
    outcome:
      "Risky. Exceptions without deadlines are more likely to become permanent architecture debt.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest description of cloud configuration assurance?",
    choices: [
      "A one-time setup checklist.",
      "The ongoing use of baselines, prevention, detection, review, ownership, exceptions, remediation, and evidence to keep cloud configuration aligned with architecture intent.",
      "A list of cloud products.",
      "Only a compliance dashboard.",
    ],
    answer: 1,
    explanation:
      "Configuration assurance is continuous because cloud settings and dependencies change over time.",
  },
  {
    question:
      "What is configuration drift?",
    choices: [
      "A difference between approved expected state and current observed state.",
      "Any cloud outage.",
      "A new employee joining.",
      "A backup restoration.",
    ],
    answer: 0,
    explanation:
      "Drift describes the gap between desired/baseline configuration and what the current evidence shows.",
  },
  {
    question:
      "Why does a baseline need to stay current?",
    choices: [
      "Because an outdated baseline can misclassify valid changes or fail to represent new risk.",
      "Because baselines should never change.",
      "Because current configuration does not matter.",
      "Because only providers define customer baselines.",
    ],
    answer: 0,
    explanation:
      "The baseline should reflect the current approved architecture.",
  },
  {
    question:
      "What should a strong configuration exception contain?",
    choices: [
      "Only a short note saying temporary.",
      "Reason, owner, risk, compensating control, expiration/review date, target state, and closure evidence.",
      "No owner so responsibility is shared.",
      "Permanent approval by default.",
    ],
    answer: 1,
    explanation:
      "A bounded exception remains governable because it has ownership, timing, and a path back to the preferred state.",
  },
  {
    question:
      "A logging source is enabled but its freshness is not monitored. What is the strongest status?",
    choices: [
      "Fully Confirmed",
      "Conditional until source-health evidence supports current coverage",
      "Retired",
      "Public",
    ],
    answer: 1,
    explanation:
      "Enabled configuration alone does not prove the source is still producing current evidence.",
  },
  {
    question:
      "Why should remediation include closure evidence?",
    choices: [
      "To prove the observed configuration returned to the approved state and the finding can be closed.",
      "To make the report longer.",
      "To replace ownership.",
      "To hide the original finding.",
    ],
    answer: 0,
    explanation:
      "Closure evidence distinguishes an intended fix from a verified fix.",
  },
  {
    question:
      "What is the strongest response to an unowned legacy development-to-production path?",
    choices: [
      "Keep it because it is internal.",
      "Block or remove it until business need, ownership, scope, exception, monitoring, and target state are resolved.",
      "Make it public.",
      "Ignore it if no alert fired.",
    ],
    answer: 1,
    explanation:
      "Unowned cross-environment drift is a meaningful configuration and trust-boundary risk.",
  },
];

const checklistItems = [
  "Every critical cloud configuration domain has an approved baseline.",
  "Baselines reflect the current architecture rather than an outdated design.",
  "Preventive guardrails exist for settings that should not normally be allowed.",
  "Recurring checks identify drift after deployment.",
  "Manual production changes are visible and reviewed.",
  "High-impact configuration changes include identity, reason, owner, and validation evidence.",
  "Storage exposure changes are reviewed against data classification.",
  "IAM changes are reviewed for privilege, ownership, and lifecycle impact.",
  "Logging changes include source-health and retention considerations.",
  "Backup configuration changes include recovery evidence implications.",
  "Secret and certificate changes include ownership, lifecycle, and dependency impact.",
  "Cross-environment changes remain exceptional and documented.",
  "Exceptions include owner, reason, risk, compensating control, expiration, target state, and closure evidence.",
  "Unknown or stale configuration evidence remains visible.",
  "Remediation is validated before a finding is closed.",
  "Change triggers cover new services, identities, data stores, public exposure, partners, credentials, monitoring, recovery, and major deployments.",
  "No lesson activity requires changing, testing, or inspecting any real cloud configuration.",
];

const takeaways = [
  "Cloud misconfiguration is usually a lifecycle problem, not just a setup mistake.",
  "A secure baseline gives the organization something concrete to compare current state against.",
  "Preventive guardrails and detective controls solve different parts of configuration risk.",
  "Manual changes should be treated as architecture changes because they can alter identity, exposure, monitoring, data, and recovery.",
  "Exceptions should be time-bounded and should have owners, compensating controls, target states, and closure evidence.",
  "A green dashboard is only trustworthy when its baseline, source health, and scope are current.",
  "Configuration drift should be prioritized by impact on identity, data, exposure, monitoring, recovery, and business service.",
  "Unowned drift should remain Blocked or Unknown rather than being normalized.",
  "Remediation is not complete until evidence confirms the desired state was restored.",
  "The Cloud Configuration Assurance Register will connect directly to A12 governance and the final cloud architecture review.",
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

export default function CloudMisconfigurationPreventionPage() {
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
              A12.8
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cloud Security Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A12.8
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Cloud Misconfiguration Prevention
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Cloud configuration changes constantly. New identities, storage
            settings, network paths, logging sources, credentials, integrations,
            and recovery settings can all change the security posture after the
            original design review.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional configuration records, baselines,
            exceptions, and synthetic evidence only. It does not involve
            inspecting or changing any real cloud environment.
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
          lessonTitle="Cloud Misconfiguration Prevention"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A12.8 Entry Readiness"
          items={[
            "I understand IAM, storage, network, monitoring, secrets, and recovery architecture from A12.2–A12.7.",
            "I can distinguish approved design intent from observed evidence.",
            "I understand that exceptions should not hide unresolved risk.",
            "I will use only fictional configuration records and safe architecture evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Secure Architecture Can Drift Into an Insecure One"
        >
          <p className="leading-8">
            A team can launch a cloud application with strong identity,
            private storage, limited network exposure, complete logging, and
            tested recovery. Months later, manual changes may broaden a role,
            add a partner path, disable a telemetry source, create a new export
            location, or leave an expired exception in place.
          </p>

          <p className="mt-4 leading-8">
            The architecture did not fail because the original design was
            necessarily weak. It failed because the organization stopped
            comparing the current state to the approved state.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Secure configuration is a maintained state, not a launch-day achievement.
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
          eyebrow="Configuration Domains"
          title="Eight Areas Where Cloud Drift Commonly Appears"
        >
          <div className="grid gap-5">
            {configurationDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.domain}</h3>

                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Approved baseline
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.baseline}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Common drift
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.drift}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.evidence}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Assurance Mechanisms"
          title="Prevention, Detection, Review, and Exceptions Solve Different Problems"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {assuranceMechanisms.map((item) => (
              <article
                key={item.mechanism}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {item.mechanism}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Strength
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.strength}
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
          eyebrow="Assurance Principles"
          title="Eight Principles for Keeping Cloud Configuration Trustworthy"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {assurancePrinciples.map((item) => (
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
          title="Configuration Assurance Terms"
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
          eyebrow="Fictional Configuration Register"
          title="Eight Northbridge Baseline and Drift Records"
        >
          <div className="grid gap-5">
            {configurationRecords.map((item) => (
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
                  {item.component}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Baseline
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.baseline}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Observed state
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.observed}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    ["Owner", item.owner],
                    ["Evidence", item.evidence],
                    ["Exception", item.exception],
                    ["Next action", item.nextAction],
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
          title="Northbridge Cloud Configuration Assurance Dashboard"
          subtitle="Fictional baseline, drift, exception, and remediation metrics"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Legacy Cross-Environment Path Has No Valid Exception"
          severity="High"
          time="10:21"
          source="Fictional Configuration Assurance Review"
          details="CFG-06 shows a development-to-production reporting path that conflicts with the approved environment-separation baseline. No current owner or approved exception is documented."
          recommendation="Keep the flow Blocked until it is removed or a narrowly scoped, owned, time-bounded exception is approved and monitored."
        />

        <Section
          eyebrow="Exception Governance"
          title="An Exception Should Be a Managed Path Back to the Standard"
        >
          <p className="leading-8">
            Exceptions are sometimes necessary. The important distinction is
            whether the deviation is visible, owned, bounded, monitored, and
            connected to a target state.
          </p>

          <div className="mt-6 grid gap-5">
            {exceptionRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 font-mono text-xs font-black text-purple-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Deviation", item.deviation],
                    ["Reason", item.reason],
                    ["Owner", item.owner],
                    ["Compensating control", item.compensating],
                    ["Expiration", item.expiration],
                    ["Target state", item.target],
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

        <FakeLogPanel
          title="Fictional Configuration Assurance Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Cross-Environment Drift"
          question="What is the strongest conclusion about CFG-06?"
          evidence={[
            "The approved baseline says there should be no standing development-to-production path without an exception.",
            "A legacy development-to-production reporting path still exists in the architecture record.",
            "No current owner is documented.",
            "No valid exception is documented.",
            "The original troubleshooting reason is historical.",
          ]}
          options={[
            "The path is safe because both environments are internal.",
            "The path should remain Blocked until current need, ownership, scope, exception, monitoring, and target state are resolved.",
            "The baseline should be deleted so the path becomes compliant.",
            "The path should be made public.",
          ]}
          bestAnswer={1}
          explanation="The current state conflicts with the approved environment-separation baseline and lacks the governance required for a valid exception."
        />

        <Section
          eyebrow="Configuration Anti-Patterns"
          title="Eight Ways Drift Becomes Permanent Architecture Debt"
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
          eyebrow="Prevention vs. Detection"
          title="Strong Assurance Uses Both"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
              <h3 className="text-xl font-black text-emerald-50">
                Preventive controls
              </h3>
              <p className="mt-3 leading-7 text-emerald-100">
                Preventive controls try to stop unsafe configuration before it
                becomes active.
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "Approved deployment templates",
                  "Guardrails for prohibited exposure",
                  "Role design standards",
                  "Environment-specific configuration",
                  "Pre-deployment review gates",
                  "Required ownership metadata",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-emerald-300/20 bg-slate-950/20 p-3 text-sm text-emerald-50"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
              <h3 className="text-xl font-black text-cyan-50">
                Detective controls
              </h3>
              <p className="mt-3 leading-7 text-cyan-100">
                Detective controls identify unsafe or unexpected state after
                configuration changes.
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "Drift checks",
                  "Configuration-change telemetry",
                  "Source-health monitoring",
                  "Access reviews",
                  "Exposure review",
                  "Exception expiration review",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-cyan-300/20 bg-slate-950/20 p-3 text-sm text-cyan-50"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </Section>

        <Section
          eyebrow="Remediation"
          title="A Finding Is Not Closed Until the Current State Is Verified"
        >
          <p className="leading-8">
            A remediation plan describes what should change. Closure evidence
            proves that it changed and that the result matches the approved
            target state.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Finding",
                detail:
                  "State the observed drift and the evidence supporting it.",
              },
              {
                title: "Impact",
                detail:
                  "Explain how the drift affects identity, data, exposure, monitoring, recovery, or governance.",
              },
              {
                title: "Owner",
                detail:
                  "Assign the person or team accountable for remediation.",
              },
              {
                title: "Target state",
                detail:
                  "Describe the approved configuration the system should return to.",
              },
              {
                title: "Due date",
                detail:
                  "Set a reviewable completion target appropriate to the risk.",
              },
              {
                title: "Validation",
                detail:
                  "Use current evidence to confirm the desired state is actually in place.",
              },
              {
                title: "Recurrence prevention",
                detail:
                  "Improve baseline, guardrail, review, automation, ownership, or monitoring so the drift is less likely to return.",
              },
              {
                title: "Closure evidence",
                detail:
                  "Record the final evidence and reviewer decision before marking the finding closed.",
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
          title="Scenario Decision Lab 1 — Legacy Cross-Environment Drift"
          scenario="A development-to-production reporting path conflicts with the current environment-separation baseline. The original troubleshooting need is old, and no current owner or exception exists."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Temporary Monitoring Exception"
          scenario="Temporary-export logs are enabled but automated source-freshness monitoring is incomplete. A 14-day exception includes daily manual verification while the source-health integration is finished."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Cloud Configuration Assurance Register"
        >
          <p className="leading-8">
            Use fictional baselines, observed states, exceptions, owners, and
            evidence only. Do not inspect or modify any real cloud configuration.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twelve fictional configuration records.",
              "Include identity, storage, network, monitoring, recovery, secrets, application/platform, and environment-separation domains.",
              "Give each record a stable ID.",
              "State the approved baseline.",
              "State the observed configuration.",
              "Classify the difference as Match, Drift, Unknown, or Exception.",
              "Assign an accountable owner.",
              "Record supporting evidence.",
              "Record risk impact.",
              "Record exception ID where applicable.",
              "Define the desired target state.",
              "Define remediation.",
              "Define validation evidence.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, or Closed.",
              "Create at least three exception records.",
              "Give each exception a reason, owner, compensating control, expiration, target state, and closure requirement.",
              "Identify at least two recurring-drift patterns.",
              "Recommend one preventive and one detective improvement for each recurring pattern.",
              "Add change triggers for new services, identity changes, public exposure, integrations, credentials, logging changes, backup changes, and major deployments.",
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
              This is a fictional assurance exercise. Do not inspect, scan,
              query, test, change, or remediate any real cloud account,
              permission, storage service, network rule, log source, backup,
              credential, or production configuration.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Time-Bounded Exception"
          question="What is the strongest conclusion about EX-01?"
          evidence={[
            "The required source-health integration is not complete.",
            "The affected telemetry source remains enabled.",
            "A daily manual source check is defined as a compensating control.",
            "The exception has an accountable owner.",
            "The exception expires in 14 days.",
            "The target state is automated freshness monitoring.",
          ]}
          options={[
            "The configuration is fully Confirmed because an exception exists.",
            "The temporary state can be treated as Conditional because the deviation is visible, owned, compensated, time-bounded, and connected to a target state.",
            "The exception should never expire.",
            "The monitoring source should be removed.",
          ]}
          bestAnswer={1}
          explanation="A well-governed exception can temporarily manage risk, but it does not convert the deviation into the preferred baseline state."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design Configuration Assurance for a New Cloud Service"
        >
          <p className="leading-8">
            A fictional organization is launching a new analytics service with
            a workload identity, private storage, outbound dependency, logging,
            backup, a managed key reference, and a partner reporting feed.
            Design the configuration assurance model for the service.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Identity baseline",
              "Storage baseline",
              "Network and egress baseline",
              "Logging baseline",
              "Backup and recovery baseline",
              "Secrets/key baseline",
              "Environment-separation baseline",
              "Preventive guardrails",
              "Pre-deployment review",
              "Recurring drift checks",
              "Source-health evidence",
              "Exception process",
              "Manual-change governance",
              "Remediation validation",
              "Ownership",
              "Change triggers",
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
            A strong design shows how configuration stays trustworthy after
            launch, not merely how the service is configured on day one.
          </p>
        </Section>

        <DefenderChecklist
          title="A12.8 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A12.8 Mini Quiz: Cloud Misconfiguration Prevention"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Cloud Configuration Assurance Register"
          prompt="Create the eighth artifact for your A12 Cloud Security Architecture Assessment: a fictional Cloud Configuration Assurance Register with at least twelve records. Include record ID, domain, component, approved baseline, observed state, drift/exception classification, owner, supporting evidence, risk impact, exception reference, target state, remediation, validation evidence, status, and change trigger."
          tips={[
            "Include IAM, storage, network, monitoring, recovery, secrets, platform, and environment-separation records.",
            "Include at least three exception records with owners, compensating controls, expiration, and target state.",
            "Keep unowned cross-environment or credential drift Blocked.",
            "Show both preventive and detective assurance mechanisms.",
            "Include closure evidence before marking a finding Closed.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A12.9?"
        >
          <p className="leading-8">
            A12.9 moves into Cloud Governance Concepts. Before continuing, make
            sure you can explain how standards, ownership, review, exceptions,
            evidence, and remediation turn configuration assurance into an
            organization-wide governance system.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish desired state from observed state.",
              "I can explain prevention, detection, drift, and exception governance.",
              "I can evaluate whether an exception is properly bounded and owned.",
              "I can explain why remediation requires closure evidence.",
              "I can connect configuration assurance to IAM, storage, network, monitoring, secrets, and recovery.",
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
          title="How to Make the Configuration Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Show baseline and observed state side by side",
                detail:
                  "A reviewer should be able to understand the drift without reading a long paragraph.",
              },
              {
                title: "Use stable finding IDs",
                detail:
                  "Configuration findings and exceptions should be easy to reference in later governance and capstone records.",
              },
              {
                title: "Show evidence freshness",
                detail:
                  "Make it clear when observed state comes from current, partial, stale, or unknown evidence.",
              },
              {
                title: "Separate drift from exception",
                detail:
                  "A valid exception is an approved deviation; unowned drift is not.",
              },
              {
                title: "Show ownership",
                detail:
                  "Every finding and exception should have an accountable owner.",
              },
              {
                title: "Show target state",
                detail:
                  "A remediation record should make the intended secure end state explicit.",
              },
              {
                title: "Show validation",
                detail:
                  "Closure evidence should prove the current state actually matches the intended result.",
              },
              {
                title: "Connect forward",
                detail:
                  "Make the register reusable in A12.9 governance and A12.10 final architecture review.",
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
            Configuration assurance does not require touching real cloud systems
          </h2>
          <p className="mt-3 leading-7">
            Do not inspect, query, test, change, remediate, or access real cloud
            accounts, identity policies, storage settings, network rules,
            logging sources, backups, secrets, credentials, or production
            configuration. All records and evidence in this lesson are
            fictional and defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A12.8 Cloud Misconfiguration Prevention Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a configuration assurance model for baselines,
            preventive controls, drift detection, change evidence, exceptions,
            remediation, closure evidence, ownership, and change triggers. Next,
            A12.9 focuses on Cloud Governance Concepts.
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