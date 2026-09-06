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
const modulePath = `${trackPath}/secure-software-architecture`;
const previousLesson = `${modulePath}/testing-security-requirements-safely`;
const nextLesson = `${modulePath}/secure-software-design-lab`;

const objectives = [
  "Explain why secure deployment is a release decision built from evidence rather than simply the act of copying software into production.",
  "Evaluate artifact identity, environment separation, configuration baselines, deployment access, change control, rollback, monitoring, and post-release validation as connected deployment concerns.",
  "Review a fictional release packet and distinguish sufficient, missing, stale, conditional, and blocking evidence.",
  "Make bounded release decisions using requirements, test evidence, code-review findings, dependency status, secret governance, monitoring readiness, and approved exceptions.",
  "Build a secure deployment readiness record that becomes the ninth artifact in the A11 Secure Software Design Assessment.",
];

const deploymentPillars = [
  {
    title: "Approved artifact",
    question: "Are we deploying the exact software that was reviewed and validated?",
    detail:
      "A secure release should identify the intended build or artifact and connect it to approved source, review, test, and release evidence. Teams should be able to distinguish the approved artifact from an unexpected or stale build.",
    evidence:
      "Build identifier, artifact record, source revision reference, approval record, dependency baseline.",
  },
  {
    title: "Environment separation",
    question: "Are development, test, staging, and production boundaries still intact?",
    detail:
      "Production should not casually inherit test identities, development secrets, temporary debugging settings, or test-only dependencies. Environment-specific ownership and configuration matter.",
    evidence:
      "Environment map, secret metadata, identity policy, dependency manifest, configuration record.",
  },
  {
    title: "Configuration baseline",
    question: "Do security-sensitive settings match the approved production baseline?",
    detail:
      "Authorization, logging, retention, feature flags, identity settings, dependency endpoints, retry behavior, and other security-sensitive settings can change behavior even when application code is unchanged.",
    evidence:
      "Configuration snapshot, approved baseline, drift review, change record.",
  },
  {
    title: "Controlled deployment access",
    question: "Who is allowed to approve and perform the release?",
    detail:
      "Deployment authority should be limited, accountable, and auditable. High-impact changes should not depend on informal shared access or unexplained manual steps.",
    evidence:
      "Release role list, approval chain, deployment audit record, emergency-access policy.",
  },
  {
    title: "Change control",
    question: "What exactly is changing, why, and who accepted the risk?",
    detail:
      "A deployment record should describe the release scope, affected services, relevant requirements, findings, dependencies, exceptions, timing, and owners.",
    evidence:
      "Change record, release notes, requirement links, exception register.",
  },
  {
    title: "Rollback readiness",
    question: "Can the team safely return to a known state if the release fails?",
    detail:
      "Rollback is not only a technical command. It includes data compatibility, dependency state, configuration, secret or identity changes, monitoring, ownership, and clear decision criteria.",
    evidence:
      "Rollback plan, previous approved artifact reference, data compatibility note, owner and trigger.",
  },
  {
    title: "Monitoring readiness",
    question: "How will the team know whether the release behaves as expected?",
    detail:
      "Critical audit sources, operational telemetry, dependency health, error rates, authorization decisions, and source-health checks should be ready before the release is considered complete.",
    evidence:
      "Monitoring checklist, alert ownership, dashboard health, log-source status.",
  },
  {
    title: "Post-release validation",
    question: "What must be confirmed after deployment?",
    detail:
      "The team should verify artifact identity, critical configuration, expected service health, logging, authorization behavior, dependency connectivity, and required user workflows using safe approved checks.",
    evidence:
      "Post-release checklist, validation result, audit event, deployment record.",
  },
];

const evidenceClasses = [
  {
    status: "Sufficient",
    meaning:
      "The evidence is current, relevant, owned, traceable to the release, and adequate for the specific claim.",
    releaseUse:
      "Can support a release-readiness decision for that claim.",
  },
  {
    status: "Conditional",
    meaning:
      "The evidence supports the claim only with a stated limitation, dependency, follow-up, or bounded exception.",
    releaseUse:
      "May support release when policy allows and the condition is explicitly accepted and monitored.",
  },
  {
    status: "Missing",
    meaning:
      "Required evidence is not present in the release packet.",
    releaseUse:
      "Should remain Unknown and may block release when the requirement is mandatory.",
  },
  {
    status: "Stale",
    meaning:
      "Evidence exists but no longer matches the current artifact, configuration, dependency, role, or environment.",
    releaseUse:
      "Should not be treated as current proof until refreshed.",
  },
  {
    status: "Blocking",
    meaning:
      "The release fails a mandatory requirement, lacks a required control, or reaches a defined stop condition.",
    releaseUse:
      "Release should not proceed unless the issue is remediated or a valid governance process explicitly permits an exception.",
  },
];

const releasePacket = [
  {
    id: "REL-ART-01",
    category: "Artifact",
    item: "Approved application build",
    evidence:
      "Artifact NB-PORTAL-11.9-RC3 linked to source revision and completed code review.",
    freshness: "Current",
    owner: "Release Engineering",
    status: "Sufficient",
    note:
      "Artifact ID matches the version referenced by the current validation packet.",
  },
  {
    id: "REL-REQ-02",
    category: "Requirements",
    item: "Blocking security requirements",
    evidence:
      "17 Confirmed, 1 Conditional with approved exception, 1 Unknown dependency validation.",
    freshness: "Current",
    owner: "Security Review Owner",
    status: "Blocking",
    note:
      "DEP-02 compatibility evidence remains Unknown and release policy marks it blocking.",
  },
  {
    id: "REL-CFG-03",
    category: "Configuration",
    item: "Production configuration baseline",
    evidence:
      "Authorization, logging, retention, and feature settings compared to approved baseline.",
    freshness: "Current",
    owner: "Platform Owner",
    status: "Sufficient",
    note:
      "No unexplained drift in supplied fictional evidence.",
  },
  {
    id: "REL-SEC-04",
    category: "Secrets",
    item: "Production secret governance",
    evidence:
      "All production secret records owned; rotation status current; no values included in packet.",
    freshness: "Current",
    owner: "Platform Security Owner",
    status: "Sufficient",
    note:
      "Metadata-only review supports deployment readiness.",
  },
  {
    id: "REL-DEP-05",
    category: "Dependencies",
    item: "Messaging client update",
    evidence:
      "Candidate version documented, but compatibility result is not attached.",
    freshness: "Incomplete",
    owner: "Notification Service Team",
    status: "Missing",
    note:
      "This is the same open evidence gap from A11.8 VAL-06.",
  },
  {
    id: "REL-LOG-06",
    category: "Monitoring",
    item: "Critical log-source health",
    evidence:
      "Authorization, privileged action, dependency, and application error sources healthy at review time.",
    freshness: "Current",
    owner: "Security Monitoring",
    status: "Sufficient",
    note:
      "Source freshness and parser health are recorded.",
  },
  {
    id: "REL-RBK-07",
    category: "Rollback",
    item: "Rollback plan",
    evidence:
      "Previous approved artifact identified; configuration reversal documented; data compatibility reviewed.",
    freshness: "Current",
    owner: "Release Owner",
    status: "Sufficient",
    note:
      "Rollback trigger and decision owner are present.",
  },
  {
    id: "REL-EXC-08",
    category: "Exception",
    item: "Legacy report renderer exception",
    evidence:
      "Time-bounded exception with owner, compensating controls, migration target, review date, and monitoring.",
    freshness: "Current",
    owner: "Reporting Owner + Risk Owner",
    status: "Conditional",
    note:
      "Release may proceed for this item under the fictional policy because the exception is valid and current.",
  },
  {
    id: "REL-POST-09",
    category: "Post-release",
    item: "Post-release validation checklist",
    evidence:
      "Artifact identity, configuration, sign-in, authorization, logging, dependency health, and source freshness checks listed.",
    freshness: "Current",
    owner: "Release Owner",
    status: "Sufficient",
    note:
      "Checklist exists but results are collected only after deployment.",
  },
];

const vocabulary = [
  {
    term: "Deployment",
    definition:
      "The controlled process of moving an approved software artifact and its required configuration into an intended environment.",
  },
  {
    term: "Release",
    definition:
      "The governance decision that a particular software change and evidence package are ready to be made available in the intended environment.",
  },
  {
    term: "Artifact",
    definition:
      "A specific software build, package, image, or other deliverable intended for deployment.",
  },
  {
    term: "Baseline",
    definition:
      "An approved reference state for configuration, dependencies, permissions, monitoring, or another release-relevant property.",
  },
  {
    term: "Configuration drift",
    definition:
      "A difference between an environment's actual settings and the approved baseline.",
  },
  {
    term: "Rollback",
    definition:
      "A planned return from a problematic release to a previously approved state or another defined safe state.",
  },
  {
    term: "Change control",
    definition:
      "The process for documenting, reviewing, approving, scheduling, and tracking changes to software or its operating environment.",
  },
  {
    term: "Release gate",
    definition:
      "A requirement or evidence condition that must be satisfied before a release can proceed.",
  },
  {
    term: "Exception",
    definition:
      "A time-bounded, owned, approved decision to temporarily accept a condition that does not meet the normal release standard.",
  },
  {
    term: "Post-release validation",
    definition:
      "Safe checks performed after deployment to confirm the intended artifact, configuration, monitoring, and important workflows are behaving as expected.",
  },
  {
    term: "Separation of duties",
    definition:
      "Dividing high-impact responsibilities so one person or role does not control an entire sensitive process without appropriate review or approval.",
  },
  {
    term: "Release evidence packet",
    definition:
      "The collection of requirements, approvals, test results, review findings, configuration, dependency, monitoring, rollback, and exception evidence used to support a release decision.",
  },
];

const environmentComparisons = [
  {
    area: "Identity",
    test:
      "Synthetic test identities and test-only role assignments.",
    production:
      "Approved production identities, production role governance, no synthetic test accounts.",
    concern:
      "Test identities should not be copied into production.",
  },
  {
    area: "Secrets",
    test:
      "Test-environment secret records or workload identities.",
    production:
      "Production-specific secret metadata, ownership, scope, rotation, and approved storage.",
    concern:
      "Do not reuse lower-environment secret values for production.",
  },
  {
    area: "Dependencies",
    test:
      "Candidate dependencies may be evaluated before approval.",
    production:
      "Only approved dependency versions and services should be present.",
    concern:
      "Test-only packages should not appear in the production artifact.",
  },
  {
    area: "Logging",
    test:
      "Verbose but still sanitized validation evidence may be temporarily allowed.",
    production:
      "Approved production schemas, retention, access, redaction, and source-health monitoring.",
    concern:
      "Temporary diagnostic verbosity should not become the production baseline.",
  },
  {
    area: "Configuration",
    test:
      "Settings may intentionally simulate failure or alternate behavior.",
    production:
      "Approved security baseline and production endpoints only.",
    concern:
      "Temporary test flags must be removed before release.",
  },
  {
    area: "Data",
    test:
      "Synthetic records and fictional identifiers.",
    production:
      "Real business data governed by production privacy and access requirements.",
    concern:
      "Synthetic validation artifacts should remain separate from production records.",
  },
];

const decisionQuestions = [
  "Does the artifact ID match the artifact that received code-review and validation evidence?",
  "Are all blocking security requirements Confirmed or governed by a policy-permitted exception?",
  "Are any findings still Unknown because evidence is missing?",
  "Does the production configuration match the approved baseline?",
  "Are production secret records owned, scoped, current, and environment-specific?",
  "Are new or changed dependencies approved and validated?",
  "Are test-only dependencies and temporary debugging settings absent from the production artifact?",
  "Is deployment authority limited and auditable?",
  "Is the release change record complete and approved?",
  "Is rollback technically and operationally possible?",
  "Are rollback triggers and decision owners clear?",
  "Are critical logs and monitoring sources healthy?",
  "Are required alerts and operational owners ready?",
  "Is the exception register current?",
  "Are post-release checks defined before the release begins?",
  "Does the release packet clearly show which evidence is current, stale, missing, or conditional?",
];

const commonMistakes = [
  {
    mistake: "Deploying a different artifact than the one tested",
    why:
      "Review and test evidence may no longer apply when the build identity changes.",
    better:
      "Tie release approval to the exact artifact identity and source/build evidence.",
  },
  {
    mistake: "Treating configuration as separate from security",
    why:
      "Authorization, logging, identity, retention, and dependency behavior can change through configuration alone.",
    better:
      "Review production configuration against an approved baseline.",
  },
  {
    mistake: "Reusing test credentials or settings in production",
    why:
      "Lower-environment trust assumptions can leak into production and weaken separation.",
    better:
      "Use production-specific identities, secrets, and configuration.",
  },
  {
    mistake: "No rollback decision criteria",
    why:
      "Teams can recognize a bad release but still disagree about when or how to reverse it.",
    better:
      "Define rollback triggers, owner, prior state, data considerations, and monitoring evidence in advance.",
  },
  {
    mistake: "Missing monitoring readiness",
    why:
      "The release may succeed technically while the team has no reliable evidence about authorization, errors, dependency health, or source freshness.",
    better:
      "Verify critical telemetry and ownership before release.",
  },
  {
    mistake: "Counting Unknown as passed",
    why:
      "Missing validation or stale evidence creates false confidence.",
    better:
      "Keep Unknown visible and apply release policy consistently.",
  },
  {
    mistake: "Permanent exceptions",
    why:
      "A temporary release decision can become hidden long-term risk.",
    better:
      "Require owner, expiration, monitoring, target state, and closure criteria.",
  },
  {
    mistake: "Skipping post-release validation",
    why:
      "The packet may be correct before deployment while the final environment differs after deployment.",
    better:
      "Confirm artifact identity, configuration, health, logging, and critical workflows after the release.",
  },
];

const dashboardMetrics = [
  {
    label: "Release gates",
    value: "19",
    note: "17 Sufficient, 1 Conditional, 1 Blocking",
  },
  {
    label: "Artifact traceability",
    value: "100%",
    note: "Current candidate linked to review and validation evidence",
  },
  {
    label: "Configuration drift",
    value: "0 blocking",
    note: "No unexplained security-sensitive drift in current packet",
  },
  {
    label: "Monitoring readiness",
    value: "Healthy",
    note: "Critical fictional sources current at release review",
  },
];

const logs = [
  "[13:05] RELEASE artifact=NB-PORTAL-11.9-RC3 review=LINKED validation=LINKED",
  "[13:14] CONFIG baseline=PROD-2026-09 drift=NONE_BLOCKING",
  "[13:22] SECRETS production-records=OWNED rotation=CURRENT values-in-packet=NO",
  "[13:31] DEP DEP-02 compatibility-evidence=MISSING release-status=BLOCKING",
  "[13:40] MON critical-sources=HEALTHY source-freshness=PASS",
  "[13:52] ROLLBACK previous-artifact=IDENTIFIED owner=ReleaseOwner trigger=DEFINED",
  "[14:03] RELEASE decision=HOLD reason=DEP-02_VALIDATION_UNKNOWN",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Hold the release because the fictional release policy marks the missing DEP-02 compatibility evidence as a blocking Unknown.",
    outcome:
      "Best. The team applies the release gate consistently instead of treating schedule pressure as evidence.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Release anyway because the code review passed and the missing test is probably fine.",
    outcome:
      "Risky. Code review does not replace the required compatibility evidence.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Mark the dependency test Confirmed to keep the release packet complete.",
    outcome:
      "Risky. Changing the status without evidence destroys traceability.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Pause the release, compare the setting to the approved baseline and change record, determine whether it is intentional, and update evidence before proceeding.",
    outcome:
      "Best. Unexplained drift should be resolved rather than normalized.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Ignore the setting because the application artifact did not change.",
    outcome:
      "Risky. Configuration can change security behavior independently of application code.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Change the setting manually without documenting it.",
    outcome:
      "Caution. The baseline may be restored, but unrecorded production changes weaken change control and evidence.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest description of secure deployment?",
    choices: [
      "Copying the newest build to production as quickly as possible.",
      "A controlled release decision supported by artifact, configuration, access, validation, monitoring, rollback, and governance evidence.",
      "Only checking whether the application starts.",
      "Only approving the source-code diff.",
    ],
    answer: 1,
    explanation:
      "Secure deployment combines technical release activity with evidence, ownership, control, and recovery readiness.",
  },
  {
    question:
      "Why must the released artifact match the tested artifact?",
    choices: [
      "Because file names must always be identical.",
      "Because review and validation evidence may not apply to a different build.",
      "Because every build has the same behavior.",
      "Because source code is irrelevant.",
    ],
    answer: 1,
    explanation:
      "Traceability depends on knowing that the artifact being released is the one that received the current evidence.",
  },
  {
    question:
      "A production configuration differs from the approved baseline with no change record. What is the strongest response?",
    choices: [
      "Ignore it because code did not change.",
      "Pause and resolve whether the drift is intentional, approved, and safe before release.",
      "Delete the baseline.",
      "Assume the production setting is better.",
    ],
    answer: 1,
    explanation:
      "Security-sensitive configuration can alter behavior and unexplained drift weakens release confidence.",
  },
  {
    question:
      "What does a rollback plan need besides a previous artifact?",
    choices: [
      "Nothing else.",
      "Decision triggers, owner, configuration and dependency considerations, data compatibility, monitoring, and validation.",
      "A public announcement.",
      "A permanent exception.",
    ],
    answer: 1,
    explanation:
      "Rollback is an operational and governance process, not only an artifact switch.",
  },
  {
    question:
      "A required compatibility validation is missing. What is the strongest release status?",
    choices: [
      "Confirmed",
      "Unknown or Blocking according to the release policy",
      "Passed by default",
      "Not Applicable",
    ],
    answer: 1,
    explanation:
      "Missing required evidence must remain visible and should follow the defined release gate.",
  },
  {
    question:
      "Why verify monitoring readiness before release?",
    choices: [
      "So the release has more dashboards.",
      "So the team can detect whether important security and operational behavior is healthy after deployment.",
      "So testing is no longer needed.",
      "So logs can include secret values.",
    ],
    answer: 1,
    explanation:
      "Monitoring provides evidence about the released system and helps teams detect unexpected behavior or degraded sources.",
  },
  {
    question:
      "What is the purpose of post-release validation?",
    choices: [
      "To repeat every development task.",
      "To confirm that the intended artifact, configuration, monitoring, and critical workflows are correct in the final environment.",
      "To make exceptions permanent.",
      "To replace rollback planning.",
    ],
    answer: 1,
    explanation:
      "Post-release checks confirm that deployment produced the intended state.",
  },
];

const checklistItems = [
  "The exact release artifact is identified and linked to current review and validation evidence.",
  "Blocking requirements are Confirmed or governed according to approved exception policy.",
  "Missing or stale evidence remains visible.",
  "Production configuration is compared to an approved baseline.",
  "Development and test identities, secrets, dependencies, and debugging settings are separated from production.",
  "Production secret governance is current and no secret values appear in the release packet.",
  "Changed dependencies have current approval and compatibility evidence.",
  "Deployment access and approvals are limited, owned, and auditable.",
  "The change record describes what is changing and why.",
  "Rollback has an owner, trigger, prior approved state, and configuration or data considerations.",
  "Critical monitoring and log sources are healthy before release.",
  "Alert and operational owners are prepared for the release window.",
  "Exceptions are current, time-bounded, and linked to closure criteria.",
  "Post-release validation is defined before deployment begins.",
  "Release decisions are recorded with evidence and rationale.",
  "No deployment exercise requires access to real production systems or credentials.",
];

const takeaways = [
  "Secure deployment is a release-evidence decision, not merely a technical transfer of files.",
  "Artifact identity ties code review and validation evidence to the software actually being released.",
  "Production configuration is part of the security design and should be checked against an approved baseline.",
  "Environment separation protects production from test identities, secrets, dependencies, and temporary debugging settings.",
  "Rollback requires technical, operational, data, monitoring, and ownership planning.",
  "Missing or stale evidence should never be silently counted as passed.",
  "Monitoring readiness is necessary to understand the system after deployment.",
  "Exceptions should remain visible, owned, time-bounded, and closable.",
  "Post-release validation confirms that the final environment matches the release decision.",
  "A11.9 combines the evidence built throughout A11 into a defensible release decision.",
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
        Module A11
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

export default function SecureDeploymentConceptsPage() {
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
              A11.9
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Secure Software Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A11.9
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Secure Deployment Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A release is not secure because a build finished successfully.
            Secure deployment asks whether the exact artifact, configuration,
            dependencies, secrets, approvals, validation evidence, monitoring,
            rollback plan, and post-release checks are ready together.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            In this lesson, you will review a fictional release packet and make
            evidence-based deployment decisions without touching real
            production systems.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A11: Secure Software Architecture"
          lessonTitle="Secure Deployment Concepts"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A11.9 Entry Readiness"
          items={[
            "I can trace security requirements through code review and safe validation.",
            "I understand secret and dependency governance from earlier A11 lessons.",
            "I can keep missing evidence Unknown instead of treating it as passed.",
            "I understand that this lesson uses fictional release evidence only.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Release Packet Tells the Story of Why Production Should Trust This Change"
        >
          <p className="leading-8">
            Imagine the Northbridge portal team has finished coding. The code
            review looks good. Most validation passed. The release deadline is
            today.
          </p>

          <p className="mt-4 leading-8">
            But one dependency compatibility result is missing. The team still
            has to decide whether the current release packet actually supports a
            production release.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Schedule pressure is not security evidence.
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
          eyebrow="The Big Idea"
          title="Deployment Is Where Many Earlier Security Decisions Meet"
        >
          <p className="leading-8">
            A11 has already created requirements, threat-model concerns, secret
            governance, dependency records, logging expectations, review
            findings, and validation evidence. Deployment is where the release
            owner asks whether those pieces still describe one coherent,
            approved change.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Identity",
                text:
                  "Are we releasing the artifact and configuration we actually reviewed?",
              },
              {
                title: "Readiness",
                text:
                  "Are controls, owners, monitoring, validation, and rollback prepared?",
              },
              {
                title: "Decision",
                text:
                  "Does the evidence justify Release, Hold, Conditional Release, or Remediation?",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Deployment Readiness Model"
          title="Eight Pillars That Belong in One Release Decision"
        >
          <p className="leading-8">
            These are not a fixed sequence. They are connected evidence areas a
            release owner should be able to review together.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {deploymentPillars.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 font-semibold leading-7 text-cyan-100">
                  {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
                <div className="mt-4 rounded-xl border border-purple-400/20 bg-purple-400/10 p-4 text-sm leading-7 text-purple-50">
                  Evidence: {item.evidence}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Deployment and Release Terms"
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
          eyebrow="Evidence Quality"
          title="Not Every Document in the Packet Has the Same Value"
        >
          <p className="leading-8">
            Release evidence must be current and connected to the actual
            artifact, environment, configuration, and change.
          </p>

          <div className="mt-6 grid gap-4">
            {evidenceClasses.map((item) => (
              <article
                key={item.status}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 md:grid-cols-[180px_1fr_1fr]">
                  <h3 className="font-black text-cyan-200">{item.status}</h3>
                  <p className="text-sm leading-7 text-slate-300">
                    {item.meaning}
                  </p>
                  <p className="text-sm leading-7 text-purple-100">
                    {item.releaseUse}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Environment Separation"
          title="Test Evidence Should Not Accidentally Become Production State"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[1000px] w-full border-collapse text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-700 p-4">Area</th>
                  <th className="border-b border-slate-700 p-4">Test</th>
                  <th className="border-b border-slate-700 p-4">Production</th>
                  <th className="border-b border-slate-700 p-4">Deployment concern</th>
                </tr>
              </thead>
              <tbody>
                {environmentComparisons.map((item) => (
                  <tr key={item.area} className="align-top">
                    <td className="border-b border-slate-800 p-4 font-black text-cyan-200">
                      {item.area}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-slate-300">
                      {item.test}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-emerald-100">
                      {item.production}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-yellow-100">
                      {item.concern}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Deployment Readiness Dashboard"
          subtitle="Fictional release packet status"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Release Gate Blocked by Missing Dependency Evidence"
          severity="High"
          time="14:03"
          source="Fictional Release Review"
          details="DEP-02 compatibility validation is still missing from the release packet. The current release policy marks this evidence as mandatory for the messaging client change."
          recommendation="Hold the release until the authorized compatibility result is attached or the issue is handled through a valid policy-approved process."
        />

        <Section
          eyebrow="Fictional Release Packet"
          title="Review the Evidence, Not the Deadline"
        >
          <div className="grid gap-5">
            {releasePacket.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.category}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.item}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
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
                      Freshness / owner
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.freshness}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-100">
                      {item.owner}
                    </p>
                  </div>
                </div>

                <p className="mt-4 rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm leading-7 text-slate-300">
                  {item.note}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Release Decision Log"
          logs={logs}
        />

        <Section
          eyebrow="Release Decision Questions"
          title="What a Release Owner Should Be Able to Answer"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {decisionQuestions.map((item, index) => (
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
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Release Candidate"
          question="What is the strongest release decision supported by the fictional packet?"
          evidence={[
            "Artifact NB-PORTAL-11.9-RC3 is linked to current code-review and validation evidence.",
            "Production configuration matches the approved baseline.",
            "Critical monitoring sources are healthy.",
            "Rollback evidence is current.",
            "DEP-02 compatibility validation is missing.",
            "The fictional release policy marks DEP-02 compatibility validation as a mandatory release gate.",
          ]}
          options={[
            "Release because most evidence is complete.",
            "Hold the release until the mandatory dependency evidence is resolved or valid policy handling changes the gate.",
            "Mark the dependency validation Confirmed so the packet is complete.",
            "Ignore the release policy because the deadline is today.",
          ]}
          bestAnswer={1}
          explanation="The packet contains strong evidence in several areas, but one mandatory release gate remains Unknown. The decision should follow the defined policy."
        />

        <Section
          eyebrow="Rollback"
          title="A Rollback Plan Must Describe More Than the Previous Build"
        >
          <p className="leading-8">
            Rollback can fail when teams think only about application code.
            Configuration, data compatibility, dependencies, identity, secrets,
            migrations, and monitoring can all affect whether a return to an
            earlier state is actually safe.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Trigger", "What evidence causes the team to consider or require rollback?"],
              ["Decision owner", "Who has authority to make the rollback decision?"],
              ["Previous state", "Which approved artifact and configuration represent the return point?"],
              ["Data compatibility", "Can current data safely work with the previous application state?"],
              ["Dependency state", "Do changed external services or packages need reversal?"],
              ["Secrets / identity", "Did the release alter credentials, trust relationships, or access?"],
              ["Monitoring", "How will the team know rollback is succeeding?"],
              ["Validation", "What checks confirm the restored state is usable and auditable?"],
            ].map(([title, detail]) => (
              <article
                key={title}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Post-Release Validation"
          title="The Release Is Not Finished the Moment Deployment Ends"
        >
          <p className="leading-8">
            Post-release checks verify that the intended release state actually
            exists in the target environment.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Confirm deployed artifact identity.",
              "Confirm critical production configuration against the approved baseline.",
              "Confirm expected service health.",
              "Confirm critical authorization and privileged-audit sources are healthy.",
              "Confirm required dependency connections are healthy.",
              "Confirm a small set of approved critical user workflows.",
              "Confirm error rates and operational indicators remain within expected bounds.",
              "Confirm no temporary test or diagnostic settings remain enabled.",
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
          eyebrow="Common Mistakes"
          title="Eight Deployment Habits That Weaken Security"
        >
          <div className="grid gap-5">
            {commonMistakes.map((item, index) => (
              <article
                key={item.mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.mistake}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-red-100">
                      Why it matters: {item.why}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      Stronger approach: {item.better}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 â€” Deadline vs. Missing Release Evidence"
          scenario="The fictional release window begins in 20 minutes. Code review, configuration, secrets, monitoring, and rollback evidence are current, but the required DEP-02 compatibility validation is still missing."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 â€” Unexplained Configuration Drift"
          scenario="During final fictional release review, one production authorization setting differs from the approved baseline. No change record explains the difference."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Review a Release Packet and Make a Deployment Decision"
        >
          <p className="leading-8">
            Build or use a fictional release packet. Your job is to classify
            evidence and make a release decision, not to perform a real
            deployment.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Identify the exact fictional artifact.",
              "Link current code-review evidence.",
              "Link current security validation evidence.",
              "Classify every blocking security requirement.",
              "Review dependency status.",
              "Review secret-governance status.",
              "Compare configuration with the approved baseline.",
              "Review deployment access and approval roles.",
              "Review current exceptions and expiration dates.",
              "Review rollback readiness.",
              "Review critical monitoring and source health.",
              "Review the post-release checklist.",
              "Classify each item as Sufficient, Conditional, Missing, Stale, or Blocking.",
              "Choose Release, Hold, Conditional Release, or Remediate.",
              "Write the evidence-based rationale.",
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
              Use fictional evidence only. Do not deploy to, modify, log into,
              or test any real production environment.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Conditional Exception"
          question="When does the fictional legacy report renderer exception support release?"
          evidence={[
            "The component has limited support and is scheduled for replacement.",
            "The exception has an accountable owner.",
            "The exception expires in 21 days.",
            "Compensating monitoring is active.",
            "The migration target and closure criteria are documented.",
            "The fictional release policy permits this specific class of time-bounded exception.",
          ]}
          options={[
            "The exception means the dependency is permanently acceptable.",
            "The exception may support a conditional release under the stated policy while remaining visible, monitored, owned, and time-bounded.",
            "The exception proves the component has no risk.",
            "The exception should never be reviewed again.",
          ]}
          bestAnswer={1}
          explanation="A valid exception does not erase risk. It governs temporary acceptance under defined conditions and a path to closure."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Write a Release Decision Record"
        >
          <p className="leading-8">
            Create a one-page fictional release decision for a high-impact
            software change. The goal is to make the reasoning understandable
            to engineering, security, operations, and leadership.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Release ID and artifact ID",
              "Change purpose",
              "Requirements summary",
              "Code-review status",
              "Validation status",
              "Dependency status",
              "Secret-governance status",
              "Configuration status",
              "Monitoring readiness",
              "Rollback readiness",
              "Open exceptions",
              "Unknowns",
              "Release decision",
              "Decision owner",
              "Conditions or blockers",
              "Post-release validation",
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
            A professional decision record should make it obvious which claims
            are supported, which are conditional, which are Unknown, and why the
            final decision follows from the evidence.
          </p>
        </Section>

        <DefenderChecklist
          title="A11.9 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A11.9 Mini Quiz: Secure Deployment Concepts"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build â€” Secure Deployment Readiness Record"
          prompt="Create the ninth artifact for your A11 Secure Software Design Assessment: a fictional deployment readiness record and release decision. Include artifact identity, requirement status, code-review status, validation status, production configuration baseline, dependency status, secrets governance, deployment access, change control, monitoring readiness, rollback readiness, exception status, post-release validation, evidence classification, decision, owner, rationale, and blockers or conditions."
          tips={[
            "Use only fictional release, artifact, environment, identity, configuration, dependency, and monitoring data.",
            "Include at least one Missing or Blocking item and show how it affects the decision.",
            "Include one valid time-bounded exception and explain why it does not erase residual risk.",
            "Include one configuration-baseline comparison.",
            "Include a rollback section with decision triggers and data or dependency considerations.",
            "Finish with a concise Release / Hold / Conditional Release decision supported by the evidence.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A11.10?"
        >
          <p className="leading-8">
            A11.10 is the Secure Software Design Lab. You will combine the
            artifacts and decisions from the entire module into one integrated
            architecture assessment.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain why release evidence must match the exact artifact.",
              "I can evaluate environment separation and configuration baselines.",
              "I can keep missing or stale evidence from becoming false confidence.",
              "I can evaluate rollback and monitoring readiness.",
              "I can write a defensible release decision using requirements, findings, validation, exceptions, and post-release checks.",
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
          title="How to Make the Deployment Record Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Lead with the decision",
                detail:
                  "State Release, Hold, Conditional Release, or Remediate near the top and connect it to evidence.",
              },
              {
                title: "Use artifact identity",
                detail:
                  "Make it obvious which build the decision applies to.",
              },
              {
                title: "Show evidence status",
                detail:
                  "Use Sufficient, Conditional, Missing, Stale, and Blocking consistently.",
              },
              {
                title: "Show configuration",
                detail:
                  "Include a brief production-baseline comparison rather than discussing code alone.",
              },
              {
                title: "Show rollback",
                detail:
                  "Document trigger, owner, prior approved state, data considerations, and validation.",
              },
              {
                title: "Show monitoring",
                detail:
                  "Identify critical sources, source-health state, and operational owners.",
              },
              {
                title: "Show exceptions clearly",
                detail:
                  "List owner, expiry, monitoring, target state, and closure criteria.",
              },
              {
                title: "Connect the whole module",
                detail:
                  "Reference requirements, threat model, secrets, dependencies, logging, code review, and validation so the release decision feels integrated.",
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
            This is release reasoning, not real production access
          </h2>
          <p className="mt-3 leading-7">
            Do not use real deployment credentials, production consoles,
            production systems, internal endpoints, secret values, private
            release records, or live infrastructure. All release evidence in
            this lesson is fictional and defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A11.9 Secure Deployment Concepts Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a deployment-readiness model that connects artifact
            identity, environment separation, configuration, dependencies,
            secrets, access, rollback, monitoring, exceptions, validation, and
            release decisions. Next, A11.10 brings the entire module together
            in the Secure Software Design Lab.
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
