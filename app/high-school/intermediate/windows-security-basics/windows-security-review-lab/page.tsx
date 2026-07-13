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

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/windows-security-basics`;
const previousLesson = `${modulePath}/local-security-habits`;
const nextPage = `${modulePath}/module-test`;

const objectives = [
  "Integrate Windows account, profile, permission, update, Defender, Event Viewer, startup, service, configuration, and user-habit evidence into one review.",
  "Build a defensible device timeline that separates confirmed facts, likely explanations, alternate explanations, evidence gaps, and unsupported claims.",
  "Prioritize fictional Windows findings using exposure, privilege, sensitivity, business impact, confidence, dependency, and change readiness.",
  "Create safe remediation recommendations with authorization, owner, testing, rollback, validation, monitoring, and review dates.",
  "Produce a professional Windows Security Review Report suitable for a fictional student portfolio without exposing real system details.",
];

const vocabulary = [
  [
    "Security review",
    "A structured assessment of a device, account, configuration, evidence, risk, and defensive improvement needs.",
  ],
  [
    "Scope",
    "The authorized devices, accounts, time window, evidence sources, systems, and questions included in the review.",
  ],
  [
    "Finding",
    "A documented condition that differs from an approved baseline, creates risk, or requires further investigation.",
  ],
  [
    "Evidence strength",
    "The degree to which a conclusion is supported by reliable, relevant, and correlated information.",
  ],
  [
    "Confidence",
    "A stated level of certainty such as low, medium, or high based on the available evidence.",
  ],
  [
    "Risk priority",
    "The relative urgency of a finding based on likelihood, exposure, privilege, sensitivity, impact, and readiness.",
  ],
  [
    "Compensating control",
    "A temporary safeguard used to reduce risk while the preferred correction is tested or scheduled.",
  ],
  [
    "Change readiness",
    "The degree to which owner approval, testing, backup, rollback, communication, and support are prepared.",
  ],
  [
    "Validation",
    "A controlled check confirming that a change achieved the intended result without breaking approved use.",
  ],
  [
    "Rollback",
    "A documented method for returning to a known-good state if a change fails.",
  ],
  [
    "Residual risk",
    "The risk that remains after approved controls or remediation are applied.",
  ],
  [
    "Executive summary",
    "A concise overview of scope, major findings, priorities, risk, and recommended actions for decision-makers.",
  ],
];

const reviewDomains = [
  {
    domain: "Accounts and profiles",
    questions:
      "Which accounts exist, who owns them, what privilege do they have, when were they last used, and which profiles or dependencies remain?",
    evidence:
      "Account inventory, group membership, sign-in records, profile path, owner record, expiration, services, tasks, and file ownership.",
    commonFindings:
      "Stale accounts, expired support accounts, shared identities, unnecessary administrators, orphaned profiles, and ownerless service identities.",
  },
  {
    domain: "Permissions and shared folders",
    questions:
      "Who can read, write, modify, delete, share, or change access, and does that match the approved role?",
    evidence:
      "Ownership, inherited and explicit entries, local groups, nested groups, share rules, effective access, classification, and usage.",
    commonFindings:
      "Broad modify access, stale project groups, ownerless exceptions, conflicting permissions, inherited overexposure, and service dependencies.",
  },
  {
    domain: "Updates and security settings",
    questions:
      "Is the device supported, updated, restarted, encrypted, protected by the firewall, backed up, and aligned with the baseline?",
    evidence:
      "Update history, pending restart, support lifecycle, firewall profiles, encryption state, sign-in settings, backup, and change records.",
    commonFindings:
      "Pending restart, unsupported release, broad firewall exception, encryption recovery gap, delayed lock, and configuration drift.",
  },
  {
    domain: "Microsoft Defender",
    questions:
      "Which protections are active, what was detected, what action completed, and do exclusions weaken coverage?",
    evidence:
      "Protection state, scan history, detection, path, process, user, quarantine, remediation, exclusion, publisher, source, and follow-up.",
    commonFindings:
      "Failed remediation, stale exclusions, broad Downloads exclusions, incomplete scans, outdated installers, and missing owners.",
  },
  {
    domain: "Event Viewer and Windows logs",
    questions:
      "What happened, when, under which account, on which device, and which related events support the conclusion?",
    evidence:
      "Security, System, Application, Setup, Defender, service, task, and operational event records.",
    commonFindings:
      "Service failures, access denied, delayed forwarding, clock offset, overwritten events, restart loops, and incomplete audit coverage.",
  },
  {
    domain: "Startup apps and services",
    questions:
      "Which components start automatically, under which accounts, from which paths, for which owners, and with which dependencies?",
    evidence:
      "Startup inventory, service state, task trigger, executable path, publisher, service account, resource use, owner, and event history.",
    commonFindings:
      "Legacy services, ownerless tasks, duplicate updaters, overprivileged service identities, repeated failures, and unsupported components.",
  },
  {
    domain: "Local security habits",
    questions:
      "Do user actions support locking, least privilege, trusted downloads, approved media, backup, privacy, and reporting?",
    evidence:
      "Lock events, account use, browser warnings, download source, removable-media records, backup scope, user report, and training record.",
    commonFindings:
      "Unlocked sessions, unapproved USB use, local-only storage, ignored warnings, shared accounts, and delayed reporting.",
  },
  {
    domain: "Governance and change control",
    questions:
      "Does every exception, finding, account, service, share, exclusion, and action have an owner, approval, test, rollback, and review date?",
    evidence:
      "Tickets, change records, project dates, owner confirmation, exception approvals, maintenance windows, validation, and monitoring.",
    commonFindings:
      "Ownerless exceptions, expired approvals, undocumented changes, missing rollback, incomplete validation, and stale baselines.",
  },
];

const evidenceStrength = [
  {
    level: "Strong",
    description:
      "Several independent fictional sources agree and the timeline, owner, technical state, and business purpose align.",
    example:
      "A permission change, access-denied event, service failure, owner report, narrow correction, and successful validation all support the same cause.",
  },
  {
    level: "Moderate",
    description:
      "Multiple sources support the conclusion, but one important dependency, owner record, or timeline segment remains incomplete.",
    example:
      "An account appears stale and expired, but one scheduled task mapping has not yet been confirmed.",
  },
  {
    level: "Limited",
    description:
      "Only one or two records support the claim, or the evidence is indirect, delayed, filtered, or missing context.",
    example:
      "One high-resource process snapshot exists, but no owner, path, event, duration, or baseline is available.",
  },
  {
    level: "Unsupported",
    description:
      "The conclusion goes beyond the supplied evidence or treats a label, severity, username, or single event as proof.",
    example:
      "A failed sign-in is described as intentional account theft without source, user, device, or timeline evidence.",
  },
];

const priorityFactors = [
  {
    factor: "Exposure",
    detail:
      "Internet-facing, public-network, shared, remote, traveling, or broadly accessible conditions increase likelihood.",
  },
  {
    factor: "Privilege",
    detail:
      "Administrator, service, deployment, backup, and security identities can create larger impact.",
  },
  {
    factor: "Sensitivity",
    detail:
      "Personal data, school records, internal documents, credentials, and protected files increase consequences.",
  },
  {
    factor: "Business impact",
    detail:
      "Required applications, learning systems, records, backups, monitoring, and operations affect urgency and change planning.",
  },
  {
    factor: "Evidence confidence",
    detail:
      "High-confidence findings can support direct action, while lower-confidence findings may require additional evidence first.",
  },
  {
    factor: "Dependency",
    detail:
      "Services, applications, tasks, users, backups, network access, and recovery needs affect safe remediation.",
  },
  {
    factor: "Change readiness",
    detail:
      "Owner approval, testing, maintenance window, backup, rollback, and support determine when the correction can be applied safely.",
  },
  {
    factor: "Residual risk",
    detail:
      "The remaining risk after a temporary or permanent control helps determine monitoring and review needs.",
  },
];

const evidenceMatrix = [
  {
    source: "Account and profile evidence",
    supports:
      "Account type, owner, privilege, groups, status, activity, expiration, profile path, and dependencies.",
    limitation:
      "Does not prove every action was performed by the named person or that all profile data is still required.",
  },
  {
    source: "Permission and sharing evidence",
    supports:
      "Ownership, inherited and explicit permissions, nested groups, share access, effective access, and classification.",
    limitation:
      "Does not prove business need, application-level access, or all alternate access paths.",
  },
  {
    source: "Update and setting evidence",
    supports:
      "Installed updates, restart state, support status, firewall, encryption, sign-in settings, sharing, and backup.",
    limitation:
      "Does not prove every control works correctly or every application remains compatible.",
  },
  {
    source: "Defender evidence",
    supports:
      "Protection state, scan, detection, path, process, action, quarantine, exclusion, publisher, and follow-up.",
    limitation:
      "Does not prove complete origin, intent, impact, or that every related item was found.",
  },
  {
    source: "Windows event evidence",
    supports:
      "Timestamp, provider, event ID, user, process, service, result, device, and sequence.",
    limitation:
      "Logs may be incomplete, delayed, filtered, overwritten, or missing business context.",
  },
  {
    source: "Startup and service evidence",
    supports:
      "Startup source, executable path, service account, trigger, state, dependencies, resource use, and owner.",
    limitation:
      "Running or starting automatically does not prove necessity, approval, or safe configuration.",
  },
  {
    source: "User and support evidence",
    supports:
      "Observed behavior, warning, impact, business need, action taken, and reporting timeline.",
    limitation:
      "Human reports may be incomplete, delayed, or influenced by assumptions.",
  },
  {
    source: "Governance and change evidence",
    supports:
      "Owner, approval, purpose, ticket, expiration, test, rollback, validation, and review date.",
    limitation:
      "Documentation may be stale or may not match the technical state.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Confirm authorization and scope",
    detail:
      "Define the fictional device, owner, users, evidence sources, time window, systems, and review questions.",
  },
  {
    step: "2",
    title: "Collect and preserve evidence",
    detail:
      "Record account, permission, update, Defender, event, startup, service, user, and governance evidence before recommending changes.",
  },
  {
    step: "3",
    title: "Build the baseline and timeline",
    detail:
      "Compare current state with the approved role and order relevant events using normalized time and shared identifiers.",
  },
  {
    step: "4",
    title: "Classify findings",
    detail:
      "Label confirmed facts, likely explanations, alternate explanations, evidence gaps, confidence, and unsupported claims.",
  },
  {
    step: "5",
    title: "Prioritize and plan",
    detail:
      "Rate risk, assign owners, identify dependencies, define compensating controls, and prepare test, rollback, and communication.",
  },
  {
    step: "6",
    title: "Validate and report",
    detail:
      "Confirm the intended result, approved workflows, protection, recovery, monitoring, residual risk, and updated baseline.",
  },
];

const fictionalFindings = [
  {
    title: "Expired local administrator account",
    domain: "Accounts and profiles",
    evidence:
      "Account expired nine days ago, remains enabled, belongs to local Administrators, ticket is closed, owner confirms no current need, and no service or task dependency remains.",
    risk:
      "Unnecessary elevated access increases impact and weakens accountability.",
    priority: "High",
    recommendation:
      "Transfer required profile data, remove administrator membership, disable the account through approved change, validate dependencies, and schedule profile retention review.",
  },
  {
    title: "Broad modify access on an internal project share",
    domain: "Permissions and shared folders",
    evidence:
      "All Staff inherits modify access, a contractor group is nested inside All Staff, the owner approves read-only for staff, and the project team has a separate editor group.",
    risk:
      "Internal data can be modified or deleted by users outside the editing role.",
    priority: "High",
    recommendation:
      "Change broad access to read-only at both share and local layers, retain modify for the approved editor group, validate services and backups, and update the baseline.",
  },
  {
    title: "Security update installed with restart pending",
    domain: "Updates and security settings",
    evidence:
      "Relevant update installed successfully, restart is required, backup and recovery test passed, maintenance window remains open, and application pre-test succeeded.",
    risk:
      "The intended protected running state is not yet active.",
    priority: "Medium",
    recommendation:
      "Complete the authorized restart and validate version, application, services, firewall, encryption, events, and monitoring.",
  },
  {
    title: "Stale broad Defender exclusion",
    domain: "Microsoft Defender",
    evidence:
      "Downloads folder exclusion remains after a testing project ended, no owner exists, and a quarantined outdated vendor bundle appeared when the exclusion was removed.",
    risk:
      "Common download content receives reduced protection.",
    priority: "High",
    recommendation:
      "Keep the old bundle quarantined, remove the stale exclusion, obtain the current approved package, and validate the required workflow.",
  },
  {
    title: "Ownerless legacy synchronization service",
    domain: "Startup apps and services",
    evidence:
      "Service starts automatically, project ended four months ago, no active application dependency remains, no successful run occurred for 119 days, and rollback testing succeeds.",
    risk:
      "Unnecessary software and archive access increase attack surface and maintenance burden.",
    priority: "Medium",
    recommendation:
      "Remove stale share access, disable the service through approved change, monitor the device, and document rollback and the new baseline.",
  },
  {
    title: "Unapproved removable-media transfer",
    domain: "Local security habits",
    evidence:
      "Internal files moved from a local-only Desktop folder to a personal USB during a share outage; the device was unlocked and the data owner did not approve the transfer.",
    risk:
      "Sensitive data may leave managed storage and the only working copy may remain outside backup.",
    priority: "High",
    recommendation:
      "Stop transfer, preserve evidence, notify the owner, use approved protected storage, review the media through the authorized process, and improve outage guidance.",
  },
];

const reportSections = [
  {
    section: "Executive summary",
    content:
      "Scope, overall security posture, highest-priority findings, major strengths, residual risk, and immediate decisions.",
  },
  {
    section: "Authorization and scope",
    content:
      "Fictional device, owner, users, evidence sources, time window, systems, exclusions, and review limitations.",
  },
  {
    section: "Device role and baseline",
    content:
      "Approved purpose, operating role, sensitivity, exposure, expected accounts, protections, services, applications, and user behaviors.",
  },
  {
    section: "Evidence inventory",
    content:
      "Account, permission, update, Defender, event, startup, service, user, support, and governance records.",
  },
  {
    section: "Timeline",
    content:
      "Normalized sequence of relevant events with source, user, process, service, result, and correlation identifiers.",
  },
  {
    section: "Findings",
    content:
      "Condition, evidence, confidence, risk, business impact, owner, dependency, priority, and evidence limitation.",
  },
  {
    section: "Remediation plan",
    content:
      "Exact approved action, test, backup, rollback, maintenance window, communication, validation, and monitoring.",
  },
  {
    section: "Residual risk and follow-up",
    content:
      "Remaining exposure, temporary controls, review date, success criteria, and owner accountability.",
  },
];

const mistakes = [
  "Starting a review without clearly defining authorization, scope, evidence sources, and time window.",
  "Treating one alert, event, username, severity, or dashboard metric as the complete conclusion.",
  "Mixing confirmed facts, likely explanations, assumptions, and recommendations in one sentence.",
  "Prioritizing only by technical severity while ignoring exposure, privilege, sensitivity, impact, and readiness.",
  "Recommending account, permission, service, firewall, or Defender changes without checking dependencies.",
  "Making several unrelated changes at once and weakening cause-and-effect validation.",
  "Deleting evidence, profiles, logs, services, files, or accounts before preservation and transfer review.",
  "Using vague recommendations such as “fix security” without owner, action, test, rollback, and validation.",
  "Ignoring user workflow, backup, recovery, support lifecycle, and business continuity.",
  "Closing a finding because the immediate symptom disappeared without validating the new baseline.",
  "Failing to document residual risk, evidence gaps, or review dates.",
  "Publishing real usernames, device names, file paths, events, alerts, rules, or internal settings in a portfolio.",
];

const quizQuestions = [
  {
    question:
      "What should happen before beginning a Windows security review?",
    choices: [
      "Confirm authorization, scope, devices, users, time window, evidence sources, and review questions.",
      "Disable every unfamiliar service.",
      "Delete old profiles.",
      "Clear the event logs.",
    ],
    answer: 0,
    explanation:
      "Authorization and scope define what evidence can be reviewed and what actions are permitted.",
  },
  {
    question:
      "Why should findings include confidence?",
    choices: [
      "Confidence shows how strongly the available evidence supports the conclusion.",
      "Confidence replaces evidence.",
      "Confidence proves intent.",
      "Confidence removes the need for validation.",
    ],
    answer: 0,
    explanation:
      "A confidence rating helps readers understand the strength and limits of the conclusion.",
  },
  {
    question:
      "Which finding should usually receive higher priority?",
    choices: [
      "An enabled expired administrator account with no owner or dependency on a sensitive shared device.",
      "A cosmetic setting difference with no risk or impact.",
      "A stopped manual service that matches the baseline.",
      "An approved application with normal resource use.",
    ],
    answer: 0,
    explanation:
      "Privilege, exposure, sensitivity, and lifecycle evidence support higher priority.",
  },
  {
    question:
      "Why must dependencies be reviewed before remediation?",
    choices: [
      "Accounts, permissions, services, tasks, applications, backups, and users may rely on the current state.",
      "Dependencies prove every setting is safe.",
      "Dependencies eliminate the need for owners.",
      "Dependencies make rollback unnecessary.",
    ],
    answer: 0,
    explanation:
      "Dependency review prevents defensive changes from breaking required functions.",
  },
  {
    question:
      "What makes a recommendation professional?",
    choices: [
      "It includes evidence, owner, exact action, authorization, test, rollback, validation, monitoring, and review date.",
      "It says to fix the issue immediately.",
      "It removes all access.",
      "It avoids mentioning evidence gaps.",
    ],
    answer: 0,
    explanation:
      "Professional recommendations are specific, controlled, testable, and accountable.",
  },
  {
    question:
      "A service failure stops after a permission is restored. What should the report do?",
    choices: [
      "Document the correlated cause, validate the narrow correction, update the baseline, and improve dependency testing.",
      "Delete the service logs.",
      "Assume the device is fully secure.",
      "Remove every permission from the folder.",
    ],
    answer: 0,
    explanation:
      "Recovery should be validated and the process improved to prevent recurrence.",
  },
  {
    question:
      "What belongs in residual-risk documentation?",
    choices: [
      "The risk that remains, temporary controls, owner, monitoring, review date, and success criteria.",
      "Only the original alert title.",
      "Only the device name.",
      "Only the final risk color.",
    ],
    answer: 0,
    explanation:
      "Residual risk explains what remains after approved action and how it will be managed.",
  },
];

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>
      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>
      <Link
        href={nextPage}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Module Test
      </Link>
    </div>
  );
}

function DomainGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Integrated Review Domains
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Windows Evidence Domains Work Together
      </h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {reviewDomains.map((item) => (
          <div
            key={item.domain}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{item.domain}</h3>

            <div className="mt-4 rounded-xl border border-blue-400/30 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Review questions
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.questions}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.evidence}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Common findings
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.commonFindings}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceStrengthGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Strength
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Match Conclusion Strength to Evidence Quality
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {evidenceStrength.map((item) => (
          <div
            key={item.level}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.level}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.description}
            </p>
            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-sm leading-6 text-blue-50">
              {item.example}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PriorityGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Risk Prioritization
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Prioritize Beyond the Alert Severity
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {priorityFactors.map((item) => (
          <div
            key={item.factor}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.factor}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Matrix
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        What Each Evidence Source Can and Cannot Prove
      </h2>

      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div
            key={item.source}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Evidence source
              </p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>

            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Can support
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.supports}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Limitation
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.limitation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkflowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Integrated Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Complete a Windows Security Review in Six Steps
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflow.map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              {item.step}
            </div>
            <h3 className="mt-4 font-black text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FindingMatrix() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Integrated Findings
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Fictional Windows Review Finding Matrix
      </h2>

      <div className="mt-6 grid gap-5">
        {fictionalFindings.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                  {item.domain}
                </p>
                <h3 className="mt-2 text-xl font-black text-white">
                  {item.title}
                </h3>
              </div>
              <span
                className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.15em] ${
                  item.priority === "High"
                    ? "bg-red-400/15 text-red-200"
                    : "bg-yellow-400/15 text-yellow-200"
                }`}
              >
                {item.priority}
              </span>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                  Evidence
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.evidence}
                </p>
              </div>

              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
                  Risk
                </p>
                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.risk}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                  Recommendation
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.recommendation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReportGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Professional Report
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Build the Final Windows Security Review Report
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {reportSections.map((item, index) => (
          <div
            key={item.section}
            className="grid gap-4 rounded-2xl border border-cyan-400/25 bg-slate-950 p-5 sm:grid-cols-[0.15fr_1fr]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
              {index + 1}
            </div>
            <div>
              <h3 className="font-black text-cyan-100">{item.section}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function WindowsSecurityReviewLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I3
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 8 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I3.8 Windows Security Review Lab
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete a multi-source fictional Windows assessment that combines
            accounts, profiles, permissions, updates, security settings,
            Microsoft Defender, Event Viewer, startup apps, services, local
            habits, governance, and change control.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I3: Windows Security Basics"
          lessonTitle="Windows Security Review Lab"
          lessonNumber={8}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I completed or reviewed I3.1 through I3.7 and understand the major Windows evidence domains.",
            "I understand that one alert, event, account, setting, or user report cannot tell the complete security story.",
            "I will preserve original fictional evidence and clearly label facts, conclusions, gaps, and assumptions.",
            "I will use only the supplied fictional devices, accounts, paths, alerts, events, services, files, and organizations.",
            "I will not inspect, alter, disable, delete, scan, export, or publish anything from a real Windows system.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Security Review Is a Decision Process, Not a Settings Checklist"
        >
          <p className="leading-8">
            A strong Windows review does more than count missing updates or list
            administrators. It connects the device's approved role with
            identity, access, protection, software, event history, user
            behavior, ownership, dependencies, and change readiness.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The dashboard has three red findings, so make every change immediately.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Preserve evidence, confirm scope, correlate sources, rate
                confidence and risk, check dependencies, assign owners, and use
                controlled changes with validation.”
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Integrated Evidence Produces Safer and More Accurate Decisions"
        >
          <p className="leading-8">
            Accounts can explain services. Permissions can explain application
            failures. Defender alerts can connect to downloads and exclusions.
            Event Viewer can confirm timing. User reports can explain business
            impact. Change records can reveal whether a condition is expected.
            Integration prevents rushed conclusions.
          </p>
        </SectionCard>

        <DomainGuide />
        <EvidenceStrengthGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Fact, Conclusion, Gap, Risk, and Action Are Different"
        >
          <p className="leading-8">
            A professional report separates what the evidence directly shows,
            what the analyst reasonably concludes, what remains unknown, why
            the condition matters, and what controlled action should follow.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-5">
            {[
              ["Fact", "Directly supported by supplied evidence."],
              ["Conclusion", "A reasoned explanation supported by correlated facts."],
              ["Gap", "Missing information that limits confidence."],
              ["Risk", "The possible harm created by the condition."],
              ["Action", "The authorized, owned, testable response."],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <PriorityGuide />
        <EvidenceGuide />
        <WorkflowGuide />
        <FindingMatrix />
        <ReportGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Integrated Windows Review Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Windows Security Review Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services Windows environment."
          metrics={[
            {
              label: "Review domains completed",
              value: "8",
              note: "Accounts, permissions, updates, Defender, events, startup, habits, and governance evidence are available.",
            },
            {
              label: "High-priority findings",
              value: "4",
              note: "Expired administrator, broad modify access, stale Defender exclusion, and unapproved media transfer.",
            },
            {
              label: "Open evidence gaps",
              value: "5",
              note: "One profile-retention decision, one delayed log segment, one incomplete application test, one ownerless task, and one recovery record remain.",
            },
          ]}
        />

        <FakeAlertCard
          title="Multiple Windows Control Gaps Increase Combined Risk"
          severity="High"
          time="04:52 PM"
          source="Fake Integrated Windows Review Monitor"
          details="The fictional workstation training-win-52 has an expired local administrator account, broad modify access to an internal share, a stale Downloads exclusion, a pending restart, and an ownerless legacy service. Each finding is important alone, but the combined privilege, access, protection, and maintenance gaps increase overall risk."
          recommendation="Preserve all source evidence, sequence changes by priority and dependency, assign owners, correct elevated access and broad protection gaps first, complete the authorized restart, validate required workflows, and monitor residual risk."
        />

        <FakeLogPanel
          title="Fake Integrated Windows Review Timeline"
          logs={[
            "14:01:00 SCOPE device='training-win-52' role='staff-project-workstation' owner='project-operations'",
            "14:06:22 ACCOUNT name='temp-admin-52' status='enabled' expired='9_days_ago' group='Administrators'",
            "14:11:47 PERMISSION share='project-docs' group='All Staff' effective='Modify'",
            "14:17:09 DEFENDER exclusion='C:\\Users\\sample-user\\Downloads' owner='none' project='closed'",
            "14:22:34 UPDATE security_update='installed' restart='required'",
            "14:27:51 SERVICE name='LegacySyncAgent' start_type='automatic' owner='none'",
            "14:33:15 EVENT service_activity='none' last_success='117_days_ago'",
            "14:38:02 MEDIA type='personal_usb' transfer='internal_files' approval='none'",
            "14:42:49 BACKUP local_desktop_included='false' approved_share='restored'",
            "14:46:18 OWNER admin_need='false' share_editors='Project Editors' vendor_bundle='replaceable'",
            "14:49:37 TEST service_stop='passed' permission_change='passed' application_pre_restart='passed'",
            "14:52:10 CORRELATION finding='combined_privilege_access_protection_maintenance_gaps' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Remediation Sequence Is Best Supported?"
          evidence={[
            "The expired administrator account has no current owner or dependency.",
            "All Staff has modify access, while only Project Editors require modification.",
            "The broad Downloads exclusion belongs to a closed project and has no owner.",
            "A relevant security update is installed but restart is pending.",
            "The legacy service has no active dependency and controlled stop testing passes.",
            "Backup and recovery are current.",
            "The maintenance window is open.",
            "Application, permission, and service pre-tests pass.",
          ]}
          question="What is the strongest remediation sequence?"
          options={[
            "Preserve evidence; remove unnecessary administrator and broad protection exposure first; correct share access; complete the authorized restart; disable the stale service; validate each change; update the baseline; and monitor residual risk.",
            "Delete every account, service, and profile at once.",
            "Complete only the restart and ignore the other findings.",
            "Leave all settings unchanged because the device still functions.",
          ]}
          bestAnswer={0}
          explanation="The sequence addresses high-impact privilege and protection gaps first while preserving dependencies, testing, rollback, and validation."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Integrated Windows Reviews"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Capstone Practice Lab"
          title="Complete the Fictional Windows Security Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Integrated Workstation Assessment
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review three fictional Windows devices: a staff project
                workstation, a shared learning lab device, and a travel laptop.
                Each includes account, permission, update, Defender, event,
                startup, service, user, and governance evidence.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Authorization and scope statement.</li>
                <li>Approved baseline for each device role.</li>
                <li>Evidence inventory across all eight domains.</li>
                <li>Normalized timeline with at least twenty fictional events.</li>
                <li>At least eight findings with confidence and evidence limitations.</li>
                <li>Risk-priority matrix using exposure, privilege, sensitivity, impact, and readiness.</li>
                <li>Controlled remediation plan with owner, test, rollback, validation, and monitoring.</li>
                <li>Executive summary and residual-risk section.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional evidence. Do not access, scan,
            export, disable, delete, reconfigure, or publish anything from a
            real Windows device, account, log, file, service, alert, or network.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A High-Risk Finding Has Incomplete Dependency Evidence"
          scenario="A fictional ownerless service runs under a privileged identity and has not completed work in months. However, one application dependency record is missing, and no controlled stop test has been performed."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the finding, reduce exposure with a temporary control if needed, obtain the missing dependency evidence, perform an authorized test with rollback, and then decide whether to disable or retain the service.",
              outcome:
                "Best defensive choice. Risk is recognized without making an unsafe unsupported change.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete the service immediately.",
              outcome:
                "Risky. A required application dependency may still exist.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the service because the evidence is incomplete.",
              outcome:
                "Weak response. The privileged ownerless condition still requires controlled review.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A User Habit Finding Reveals a Missing Process"
          scenario="A fictional user transferred files to personal media during an outage because the approved temporary storage process was not communicated. The user reports the action quickly and no external sharing is recorded."
          choices={[
            {
              label: "Choice A",
              response:
                "Stop further transfer, preserve evidence, protect the data, review the media through the approved process, restore approved storage, and improve outage guidance and training.",
              outcome:
                "Best defensive choice. The response addresses both the risky action and the missing organizational process.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Blame only the user and make no process change.",
              outcome:
                "Incomplete. The missing approved alternative contributed to the situation.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Allow personal media whenever storage is unavailable.",
              outcome:
                "Unsafe. Data-handling and device-security risks remain.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Integrated Windows Security Review Checklist"
          items={[
            "I confirm fictional authorization, scope, devices, users, time window, evidence sources, and review questions.",
            "I define the approved role and security baseline for each device.",
            "I preserve account, profile, permission, update, Defender, event, startup, service, user, and governance evidence.",
            "I normalize timestamps and correlate users, processes, services, paths, devices, alerts, and change records.",
            "I separate confirmed facts, likely explanations, alternate explanations, evidence gaps, and unsupported claims.",
            "I rate confidence and risk using exposure, privilege, sensitivity, impact, dependency, readiness, and residual risk.",
            "I assign a named owner and exact approved action for every finding.",
            "I include test, backup, rollback, maintenance window, communication, validation, monitoring, and review date.",
            "I validate accounts, applications, services, permissions, protection, events, backups, network functions, and user impact after change.",
            "I use only fictional evidence and never publish real identifying or security-sensitive Windows details.",
          ]}
        />

        <MiniQuiz
          title="I3.8 Mini Quiz: Windows Security Review Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a complete fictional Windows Security Review Report for three devices. Include authorization, scope, role baseline, evidence inventory, account review, profile review, permission matrix, update and settings review, Defender analysis, event timeline, startup and service baseline, user-habit review, governance findings, confidence ratings, risk priorities, owners, remediation, test, rollback, validation, monitoring, residual risk, and executive summary."
          tips={[
            "Use only fictional devices, accounts, paths, users, events, alerts, applications, services, rules, and organizations.",
            "Include at least eight findings across all major I3 lesson domains.",
            "Clearly label facts, conclusions, alternate explanations, evidence gaps, and unsupported claims.",
            "Do not include real screenshots, logs, usernames, device names, paths, addresses, detection details, or internal settings.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A Windows security review connects identity, access, protection, software, events, user behavior, ownership, and change control.",
            "Strong conclusions rely on multiple correlated sources and clearly stated evidence limits.",
            "Risk priority should consider exposure, privilege, sensitivity, impact, confidence, dependency, readiness, and residual risk.",
            "Professional recommendations are authorized, owned, specific, testable, reversible, validated, and monitored.",
            "User behavior findings may reveal missing technical controls, communication, or operational processes.",
            "A strong final report separates facts, conclusions, gaps, risk, action, and follow-up.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete Module I3
          </h2>
          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}