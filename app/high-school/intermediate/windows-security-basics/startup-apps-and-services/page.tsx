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
const previousLesson = `${modulePath}/event-viewer-and-windows-logs`;
const nextLesson = `${modulePath}/local-security-habits`;

const objectives = [
  "Explain the difference between startup applications, Windows services, scheduled activity, background processes, and approved system dependencies.",
  "Interpret fictional startup and service evidence using name, path, publisher, account, trigger, state, dependencies, resource use, owner, and business purpose.",
  "Distinguish expected startup behavior from stale, duplicate, failed, ownerless, overprivileged, or review-required entries.",
  "Separate confirmed facts, reasonable conclusions, alternate explanations, missing evidence, and unsupported assumptions.",
  "Create a professional startup-and-service baseline with safe corrections, validation, rollback, monitoring, ownership, and review dates.",
];

const vocabulary = [
  [
    "Startup application",
    "Software configured to launch automatically when Windows starts or when a user signs in.",
  ],
  [
    "Windows service",
    "A background component managed by Windows to provide operating-system or application functions.",
  ],
  [
    "Scheduled task",
    "An approved activity configured to run at a specific time, event, sign-in, startup, or other trigger.",
  ],
  [
    "Service account",
    "The account or identity under which a Windows service runs.",
  ],
  [
    "Startup trigger",
    "The condition that causes an application, service, or task to start.",
  ],
  [
    "Executable path",
    "The recorded location of the program or component that starts.",
  ],
  [
    "Publisher",
    "The organization or developer associated with the software under the available evidence.",
  ],
  [
    "Dependency",
    "Another service, file, account, application, network resource, or component required for normal operation.",
  ],
  [
    "Automatic start",
    "A configuration that starts a service or application without manual user action.",
  ],
  [
    "Delayed start",
    "A configuration that starts a service after core startup activity to reduce contention or improve reliability.",
  ],
  [
    "Disabled service",
    "A service configured not to start under normal conditions.",
  ],
  [
    "Baseline",
    "An approved record of expected startup applications, services, tasks, settings, owners, and dependencies.",
  ],
];

const startupSources = [
  {
    source: "User sign-in startup",
    purpose:
      "Launches approved applications when a specific user signs in.",
    evidence:
      "User, startup location, application name, path, publisher, owner, and business need.",
    risk:
      "Stale, duplicate, or broad user-specific startup entries can slow sign-in or introduce unreviewed software.",
  },
  {
    source: "System startup",
    purpose:
      "Starts approved components when the Windows device boots.",
    evidence:
      "Startup source, executable path, account, trigger, owner, dependency, and event history.",
    risk:
      "System-wide startup entries can affect every user and may run with elevated authority.",
  },
  {
    source: "Windows service",
    purpose:
      "Provides continuous or on-demand background functions for Windows or approved applications.",
    evidence:
      "Service name, display name, state, start type, service account, path, dependencies, owner, and logs.",
    risk:
      "Ownerless, overprivileged, failed, or unnecessary services increase attack surface and maintenance burden.",
  },
  {
    source: "Scheduled task",
    purpose:
      "Runs approved maintenance, synchronization, reporting, backup, or application activity on a trigger.",
    evidence:
      "Task name, trigger, account, action, path, result, owner, expiration, and last run.",
    risk:
      "Stale or hidden tasks can continue after projects end or run under unnecessary privilege.",
  },
  {
    source: "Application background component",
    purpose:
      "Supports updates, synchronization, notifications, licensing, or application integration.",
    evidence:
      "Application owner, package, publisher, path, trigger, resource use, update source, and logs.",
    risk:
      "Background components may duplicate functions, persist after removal, or consume unnecessary resources.",
  },
  {
    source: "Management or security agent",
    purpose:
      "Supports approved monitoring, configuration, backup, protection, inventory, or support functions.",
    evidence:
      "Agent owner, publisher, package source, service account, policy, communication path, health, and update status.",
    risk:
      "Disabling a required agent can weaken visibility, backup, policy, or endpoint protection.",
  },
];

const serviceStates = [
  {
    state: "Running and expected",
    meaning:
      "The service is active, owned, approved, healthy, and required for the documented device role.",
    review:
      "Confirm path, publisher, service account, dependencies, recent events, resource use, and current owner.",
  },
  {
    state: "Running but ownerless",
    meaning:
      "The service is active, but no current application or business owner is recorded.",
    review:
      "Identify the package, dependency, users, change history, and whether the service remains necessary.",
  },
  {
    state: "Stopped and expected",
    meaning:
      "The service is configured for manual or trigger-based use and is not currently needed.",
    review:
      "Confirm trigger conditions, dependent applications, owner, and whether stopped state matches the baseline.",
  },
  {
    state: "Stopped unexpectedly",
    meaning:
      "A required service failed, was disabled, or could not start.",
    review:
      "Correlate System, Application, service, account, permission, update, and dependency evidence.",
  },
  {
    state: "Automatic but unused",
    meaning:
      "The service starts automatically even though no current approved workflow appears to use it.",
    review:
      "Confirm project status, owner, last use, dependencies, package support, and safe test plan.",
  },
  {
    state: "Disabled by exception",
    meaning:
      "The service is intentionally disabled under an approved security or compatibility decision.",
    review:
      "Confirm owner, reason, approval, expiration, compensating controls, application impact, and review date.",
  },
];

const dependencyTypes = [
  {
    type: "Service dependency",
    detail:
      "One service may require another service to start or remain healthy.",
    evidence:
      "Dependency list, startup order, failure events, restart sequence, and owner confirmation.",
  },
  {
    type: "Account dependency",
    detail:
      "A service or task may require a specific identity, credential process, group, or sign-in right.",
    evidence:
      "Service account, privilege, group membership, logon right, expiration, and authentication events.",
  },
  {
    type: "File and folder dependency",
    detail:
      "A component may require read, write, modify, or execute access to approved paths.",
    evidence:
      "Executable path, configuration path, data path, ownership, permissions, and access events.",
  },
  {
    type: "Network dependency",
    detail:
      "A service may require an approved server, port, name resolution, share, or cloud endpoint.",
    evidence:
      "Destination, port, DNS, firewall rule, connection event, owner, and approved purpose.",
  },
  {
    type: "Application dependency",
    detail:
      "A startup component may support an application, plug-in, updater, synchronization tool, or integration.",
    evidence:
      "Application owner, package, version, startup relationship, usage, and support record.",
  },
  {
    type: "Update and support dependency",
    detail:
      "A startup component may require a supported package, driver, runtime, or current Windows release.",
    evidence:
      "Version, publisher, update source, support lifecycle, failed update, and compatibility test.",
  },
];

const resourceSignals = [
  {
    signal: "High CPU use",
    possibleMeaning:
      "The component may be processing legitimate work, updating, scanning, looping, failing, or competing for resources.",
    nextEvidence:
      "Process path, owner, task, service state, event logs, application activity, duration, and baseline.",
  },
  {
    signal: "High memory use",
    possibleMeaning:
      "The application may be caching, processing large data, leaking memory, or operating outside normal behavior.",
    nextEvidence:
      "Historical baseline, uptime, application workload, version, errors, restart behavior, and owner report.",
  },
  {
    signal: "Frequent restart",
    possibleMeaning:
      "A service may be configured for recovery, experiencing repeated failure, or being restarted by an updater.",
    nextEvidence:
      "System and service events, failure code, dependency, update history, path, account, and recovery settings.",
  },
  {
    signal: "Slow sign-in",
    possibleMeaning:
      "Many startup applications, network dependencies, profile issues, updates, or policy processing may contribute.",
    nextEvidence:
      "Startup inventory, timing, user profile, network state, event logs, package health, and comparison with baseline.",
  },
  {
    signal: "Unknown publisher",
    possibleMeaning:
      "Publisher metadata is missing, incomplete, unavailable, or requires verification.",
    nextEvidence:
      "Source, package owner, path, signature, version, change record, support ticket, and business need.",
  },
  {
    signal: "Unusual path",
    possibleMeaning:
      "The component may be portable, user-specific, misconfigured, legacy, or intentionally installed in a nonstandard location.",
    nextEvidence:
      "Owner, package source, publisher, permissions, user context, application mapping, and change record.",
  },
];

const evidenceMatrix = [
  {
    source: "Startup inventory",
    supports:
      "Application name, startup source, user, enabled state, path, publisher, and startup impact.",
    limitation:
      "Does not prove current business need, safe behavior, complete dependencies, or all startup locations.",
  },
  {
    source: "Service configuration",
    supports:
      "Service name, display name, state, start type, account, path, recovery, and dependencies.",
    limitation:
      "Does not prove the service is approved, required, healthy, or securely configured.",
  },
  {
    source: "Scheduled-task record",
    supports:
      "Task name, trigger, action, account, last run, result, owner, and next run.",
    limitation:
      "Does not prove the task is still necessary or that every action completed correctly.",
  },
  {
    source: "Publisher and package metadata",
    supports:
      "Publisher, product, version, source, package relationship, and support context.",
    limitation:
      "Metadata may be missing, outdated, or insufficient to prove safe behavior.",
  },
  {
    source: "Process and resource evidence",
    supports:
      "Current process, user, path, CPU, memory, start time, parent process, and active workload.",
    limitation:
      "A single resource snapshot does not prove long-term behavior, need, or malicious intent.",
  },
  {
    source: "Event Viewer records",
    supports:
      "Startup, failure, recovery, update, account, permission, service, and application timeline evidence.",
    limitation:
      "Logs may be incomplete, filtered, overwritten, delayed, or missing business context.",
  },
  {
    source: "Owner and change record",
    supports:
      "Approved purpose, technical owner, business owner, installation, exception, expiration, and review date.",
    limitation:
      "Documentation may be stale or may not match the current technical state.",
  },
  {
    source: "User and application report",
    supports:
      "Expected behavior, observed impact, workflow need, timing, and owner confirmation.",
    limitation:
      "Human reports may be incomplete and require technical correlation.",
  },
];

const reviewWorkflow = [
  {
    step: "1",
    title: "Define the device role",
    detail:
      "Identify the fictional device, owner, users, approved applications, management tools, security controls, and business purpose.",
  },
  {
    step: "2",
    title: "Inventory automatic activity",
    detail:
      "Record startup applications, services, scheduled tasks, background agents, triggers, paths, accounts, and owners.",
  },
  {
    step: "3",
    title: "Map dependencies",
    detail:
      "Connect services, accounts, files, folders, network resources, applications, updates, and monitoring.",
  },
  {
    step: "4",
    title: "Compare with baseline",
    detail:
      "Identify expected, stale, duplicate, failed, ownerless, overprivileged, unsupported, or review-required items.",
  },
  {
    step: "5",
    title: "Plan controlled action",
    detail:
      "Preserve evidence, assign an owner, test disablement or restriction, define rollback, and protect required workflows.",
  },
  {
    step: "6",
    title: "Validate and document",
    detail:
      "Confirm startup time, service health, applications, security agents, backups, network functions, logs, monitoring, and the new baseline.",
  },
];

const baselineFields = [
  {
    field: "Name and type",
    detail:
      "Startup application, Windows service, scheduled task, background component, security agent, or management tool.",
  },
  {
    field: "Path and publisher",
    detail:
      "Executable or action path, product, publisher, package, source, version, and support status.",
  },
  {
    field: "Trigger and state",
    detail:
      "Startup, sign-in, schedule, event, demand, automatic, delayed, manual, disabled, running, or stopped.",
  },
  {
    field: "Account and privilege",
    detail:
      "User, service identity, administrator context, local group, sign-in right, and permission scope.",
  },
  {
    field: "Owner and purpose",
    detail:
      "Technical owner, business owner, approved role, application dependency, project, and expiration.",
  },
  {
    field: "Dependencies",
    detail:
      "Services, files, folders, ports, servers, names, applications, backups, monitoring, and update systems.",
  },
  {
    field: "Health and usage",
    detail:
      "Last start, last run, result, errors, CPU, memory, sign-in impact, user report, and recent use.",
  },
  {
    field: "Governance",
    detail:
      "Approval, baseline state, exception, test, rollback, validation, monitoring, and review date.",
  },
];

const mistakes = [
  "Disabling an unfamiliar startup item before identifying its owner, path, publisher, purpose, and dependencies.",
  "Treating high CPU or memory use as proof of malicious activity.",
  "Assuming an unknown publisher automatically means unsafe software.",
  "Ignoring user-specific startup entries while reviewing only system services.",
  "Removing a service without checking application, backup, monitoring, update, network, or security dependencies.",
  "Ignoring service account privilege and sign-in rights.",
  "Treating a stopped service as a problem when it is designed for manual or trigger-based use.",
  "Treating a running service as necessary because Windows started it.",
  "Leaving temporary scheduled tasks active after the project or support window ends.",
  "Changing multiple startup items at once and making validation difficult.",
  "Failing to test startup time, sign-in, applications, security agents, backups, and network functions after change.",
  "Publishing real service names, tasks, paths, accounts, publishers, or internal dependencies in a portfolio.",
];

const quizQuestions = [
  {
    question:
      "What is the main difference between a startup application and a Windows service?",
    choices: [
      "A startup application often launches for a user or at startup, while a service runs as a background component managed by Windows.",
      "Services cannot have owners.",
      "Startup applications never run automatically.",
      "Services cannot use accounts.",
    ],
    answer: 0,
    explanation:
      "Both can start automatically, but their management, context, and purpose differ.",
  },
  {
    question:
      "Why should a service account be reviewed?",
    choices: [
      "Its privilege, sign-in rights, ownership, expiration, and resource access affect security.",
      "Service accounts cannot access files.",
      "All service accounts should be administrators.",
      "Service accounts do not appear in logs.",
    ],
    answer: 0,
    explanation:
      "Service identities can hold powerful access and require strong governance.",
  },
  {
    question:
      "What does high CPU use prove?",
    choices: [
      "The process is using significant CPU at that time; purpose and cause require more evidence.",
      "The process is definitely malicious.",
      "The service should be deleted.",
      "The publisher is untrusted.",
    ],
    answer: 0,
    explanation:
      "Resource use is a signal, not a complete conclusion.",
  },
  {
    question:
      "A service is stopped. What is the strongest first question?",
    choices: [
      "Is the service expected to run continuously, manually, or only on a trigger?",
      "Who should be blamed?",
      "Should every service be set to automatic?",
      "Can the logs be deleted?",
    ],
    answer: 0,
    explanation:
      "Expected startup behavior must be understood before classifying the state.",
  },
  {
    question:
      "Why should changes be made one at a time?",
    choices: [
      "It improves cause-and-effect validation and makes rollback easier.",
      "It guarantees no failures.",
      "It removes the need for backups.",
      "It eliminates dependencies.",
    ],
    answer: 0,
    explanation:
      "Sequenced changes make testing and recovery clearer.",
  },
  {
    question:
      "Which evidence best supports disabling an automatic service?",
    choices: [
      "The project ended, no owner or active dependency remains, recent use is absent, testing passes, and rollback is prepared.",
      "The service name looks old.",
      "The path is long.",
      "The service uses memory.",
    ],
    answer: 0,
    explanation:
      "Lifecycle, ownership, dependency, use, test, and rollback evidence support a controlled change.",
  },
  {
    question:
      "What should happen after changing startup or service configuration?",
    choices: [
      "Validate startup, sign-in, applications, services, security agents, backups, networking, logs, and monitoring.",
      "Delete the old baseline.",
      "Assume the device works because it boots.",
      "Remove every manual service.",
    ],
    answer: 0,
    explanation:
      "Post-change validation confirms required functions and protections still work.",
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
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

function StartupSourceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Startup Sources
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Automatic Activity Can Begin in Several Places
      </h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {startupSources.map((item) => (
          <div
            key={item.source}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{item.source}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.evidence}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-red-400/30 bg-red-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
                Main risk
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.risk}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceStateGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Service States
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Running, Stopped, Automatic, and Disabled Need Context
      </h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {serviceStates.map((item) => (
          <div
            key={item.state}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.state}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>
            <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-sm leading-6 text-yellow-50">
              {item.review}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DependencyGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Dependency Mapping
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Startup Components Rarely Operate Alone
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dependencyTypes.map((item) => (
          <div
            key={item.type}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.type}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>
            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Review evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.evidence}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResourceSignalGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Resource Signals
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Performance Signals Need Supporting Evidence
      </h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {resourceSignals.map((item) => (
          <div
            key={item.signal}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.signal}</h3>

            <div className="mt-4 rounded-xl border border-blue-400/30 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Possible meaning
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.possibleMeaning}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Next evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.nextEvidence}
              </p>
            </div>
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
        Evidence Analysis
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        What Startup and Service Evidence Can and Cannot Prove
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
        Defensive Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Review Startup Apps and Services in Six Steps
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reviewWorkflow.map((item) => (
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

function BaselineGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Baseline Design
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Record the Expected State Before Making Changes
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {baselineFields.map((item) => (
          <div
            key={item.field}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.field}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function StartupAppsAndServicesPage() {
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
              Lesson 6 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I3.6 Startup Apps and Services
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Review fictional startup applications, Windows services, scheduled
            tasks, background components, accounts, paths, publishers,
            triggers, dependencies, resource use, owners, and expected device
            roles.
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
          lessonTitle="Startup Apps and Services"
          lessonNumber={6}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand Windows accounts, permissions, updates, Defender evidence, Event Viewer, and controlled change.",
            "I understand that running, stopped, automatic, high-resource, or unfamiliar does not automatically mean unsafe.",
            "I will preserve path, publisher, account, trigger, dependency, owner, resource, and event evidence before recommending changes.",
            "I will use only fictional startup items, services, tasks, applications, accounts, paths, devices, and organizations.",
            "I will not disable, delete, stop, start, reconfigure, or investigate any real service, task, process, or startup entry without explicit authorization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Automatic Does Not Mean Necessary, and Unfamiliar Does Not Mean Malicious"
        >
          <p className="leading-8">
            Windows devices may start operating-system services, security
            agents, backup tools, application updaters, synchronization
            components, scheduled jobs, and user startup applications. The
            defender must determine which entries are expected, owned,
            supported, least-privileged, healthy, and still necessary.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “Disable every startup item that looks unfamiliar.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Confirm the path, publisher, account, trigger, owner, purpose,
                dependencies, health, usage, and rollback before changing it.”
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
          title="Startup and Service Decisions Affect Security, Reliability, and Performance"
        >
          <p className="leading-8">
            Unnecessary automatic activity increases attack surface and
            maintenance work. Overprivileged services increase impact.
            Removing required components can break security monitoring,
            backups, updates, networking, applications, or user workflows.
            Strong reviews balance reduction with continuity.
          </p>
        </SectionCard>

        <StartupSourceGuide />
        <ServiceStateGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Name, Path, Account, Trigger, Owner, and Dependency Belong Together"
        >
          <p className="leading-8">
            A service name or startup label is not enough. Strong analysis
            connects the actual executable or action path, the identity used,
            the startup trigger, the technical and business owner, required
            dependencies, support status, and observed behavior.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-6">
            {[
              ["Name", "What is the entry called?"],
              ["Path", "What program or action runs?"],
              ["Account", "Which identity and privilege apply?"],
              ["Trigger", "When and why does it start?"],
              ["Owner", "Who is accountable for the need?"],
              ["Dependency", "What requires it or depends on it?"],
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

        <DependencyGuide />
        <ResourceSignalGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Startup, Service, and Task Terms
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

        <EvidenceGuide />
        <WorkflowGuide />
        <BaselineGuide />

        <FakeDashboardCard
          title="Fake Windows Startup and Service Governance Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook Learning Services Windows fleet."
          metrics={[
            {
              label: "Automatic startup entries",
              value: "63",
              note: "Thirty-one Windows services, twelve security or management agents, eleven application components, and nine user startup items.",
            },
            {
              label: "Ownerless entries",
              value: "8",
              note: "Three legacy services, two scheduled tasks, two application updaters, and one user startup component lack current owners.",
            },
            {
              label: "Repeated failure patterns",
              value: "5",
              note: "Three services restart repeatedly, one task fails under an expired account, and one updater cannot reach its approved source.",
            },
          ]}
        />

        <FakeAlertCard
          title="Legacy Synchronization Service Starts Automatically with No Current Owner"
          severity="High"
          time="08:46 AM"
          source="Fake Windows Startup Governance Monitor"
          details="The fictional service LegacySyncAgent starts automatically on training-win-33. The associated project ended four months ago, the listed owner left the team, no current application dependency is documented, and the service account still has modify access to a shared archive."
          recommendation="Preserve service, account, path, publisher, dependency, share, event, project, and owner evidence; assign a temporary review owner; test a controlled stop and disablement with rollback; validate archive access, backup, monitoring, and required applications; then update the baseline."
        />

        <FakeLogPanel
          title="Fake Startup and Service Review Timeline"
          logs={[
            "08:02:00 INVENTORY device='training-win-33' role='staff-workstation' owner='operations'",
            "08:05:17 SERVICE name='LegacySyncAgent' state='running' start_type='automatic'",
            "08:07:44 PATH executable='C:\\Program Files\\LegacySync\\sync-agent.exe' publisher='TrainingSoft'",
            "08:10:13 ACCOUNT service_identity='legacy-sync-svc' privilege='standard_service'",
            "08:13:29 PROJECT name='ArchiveMigration' status='closed' ended='124_days_ago'",
            "08:16:51 OWNER technical_owner='departed' business_owner='none'",
            "08:20:08 DEPENDENCY active_application='none_found' scheduled_task='none_found'",
            "08:24:33 SHARE account='legacy-sync-svc' path='\\\\training-files\\archive' access='Modify'",
            "08:29:41 EVENT recent_sync_activity='none' last_success='119_days_ago'",
            "08:34:06 TEST controlled_stop='passed' user_impact='none' backup_health='normal'",
            "08:39:52 ROLLBACK service_start='tested' result='success'",
            "08:46:18 CORRELATION finding='stale_ownerless_automatic_service_with_archive_access' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Startup and Service Decision Is Best Supported?"
          evidence={[
            "The fictional synchronization project ended four months ago.",
            "The service still starts automatically.",
            "The listed technical owner is no longer responsible.",
            "No active application or scheduled-task dependency appears in the supplied evidence.",
            "The service account retains modify access to an archive share.",
            "No successful synchronization has occurred for 119 days.",
            "A controlled stop test shows no user, application, backup, or monitoring impact.",
            "Rollback testing succeeds.",
          ]}
          question="What is the strongest next action?"
          options={[
            "Preserve evidence, remove the stale share access, disable the service through approved change, monitor the device, and document rollback and the new baseline.",
            "Delete the executable immediately.",
            "Leave the service running because it has a known publisher.",
            "Give the service account administrator access.",
          ]}
          bestAnswer={0}
          explanation="Lifecycle, owner, dependency, activity, access, test, and rollback evidence support a controlled removal of the stale service."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Startup and Service Reviews"
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
          eyebrow="Safe Practice Lab"
          title="Complete a Fictional Startup and Service Baseline Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Northstar Windows Automatic Activity Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review sixteen fictional startup applications, services,
                scheduled tasks, security agents, backup tools, application
                updaters, and legacy components across four device roles.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Classify each entry by type, source, trigger, and expected state.</li>
                <li>Record name, path, publisher, account, privilege, owner, version, and support status.</li>
                <li>Map service, account, file, network, application, update, backup, and monitoring dependencies.</li>
                <li>Compare resource use, events, last run, failure state, and user impact with the baseline.</li>
                <li>Identify stale, duplicate, ownerless, overprivileged, failed, unsupported, and review-required entries.</li>
                <li>Write controlled stop, disable, restrict, update, or retain recommendations.</li>
                <li>Define test, rollback, validation, monitoring, and review dates.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not stop, start, disable,
            delete, reconfigure, inspect, or test any real service, task,
            process, account, path, startup item, or security agent without
            explicit authorization.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Security Agent Uses High CPU During a Scheduled Scan"
          scenario="A fictional endpoint-protection agent uses high CPU for eight minutes during its approved scheduled scan. Event records show the scan completes successfully, CPU returns to normal, and no user-facing failures occur."
          choices={[
            {
              label: "Choice A",
              response:
                "Document the temporary resource use, compare it with the approved scan baseline, confirm completion and user impact, and keep the required security agent enabled.",
              outcome:
                "Best defensive choice. The evidence supports expected temporary load rather than an unsafe component.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Disable the security agent permanently.",
              outcome:
                "Unsafe. The high resource use is time-bounded and tied to an approved scan.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Declare the agent malicious.",
              outcome:
                "Unsupported. The path, owner, task, event, and timing match the approved baseline.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Scheduled Backup Task Fails Under an Expired Account"
          scenario="A fictional backup task fails because its service account expired. The backup is required, the owner is current, the task path is approved, and the last successful backup was two days ago."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve task and account evidence, restore the approved service-account lifecycle through authorized identity management, test the backup, confirm protected storage, and monitor the next run.",
              outcome:
                "Best defensive choice. The required task is restored without creating unnecessary broad privilege.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Run the task permanently under a shared administrator account.",
              outcome:
                "Unsafe. Shared elevated access weakens accountability and least privilege.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the backup task.",
              outcome:
                "Unsafe. The backup remains a required control.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Startup Apps and Services Review Checklist"
          items={[
            "I confirm the fictional device role, owner, users, applications, security tools, backup tools, and management requirements.",
            "I inventory startup applications, services, scheduled tasks, agents, and background components.",
            "I record name, type, path, publisher, version, source, trigger, state, account, and privilege.",
            "I identify technical owner, business owner, project, expiration, support status, and approved purpose.",
            "I map service, account, file, folder, network, application, update, backup, and monitoring dependencies.",
            "I review events, last start, last run, failures, recovery, CPU, memory, sign-in impact, and user reports.",
            "I classify expected, stale, duplicate, failed, ownerless, unsupported, overprivileged, and review-required entries.",
            "I preserve evidence and test changes one at a time with rollback.",
            "I validate startup, sign-in, applications, services, security agents, backups, networking, logs, and monitoring.",
            "I use only fictional evidence and never publish real service, task, path, account, or dependency details.",
          ]}
        />

        <MiniQuiz
          title="I3.6 Mini Quiz: Startup Apps and Services"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Windows Startup and Service Baseline for sixteen entries. Include device role, name, type, path, publisher, package, version, source, trigger, state, start type, account, privilege, owner, purpose, dependencies, last run, result, resource use, event evidence, baseline status, finding, confidence, risk, action, test, rollback, validation, monitoring, and review date."
          tips={[
            "Use only fictional devices, services, tasks, applications, paths, accounts, publishers, and organizations.",
            "Include one stale service, one failed scheduled task, one required security agent, one duplicate updater, one ownerless component, and one overprivileged service identity.",
            "Show how dependency evidence changes at least two recommendations.",
            "Do not include real service names, task names, executable paths, account names, publishers, or internal dependencies.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Windows automatic activity includes startup applications, services, scheduled tasks, agents, and background components.",
            "Running, stopped, automatic, delayed, disabled, high-resource, or unfamiliar states require context.",
            "Strong reviews connect name, path, publisher, account, trigger, owner, purpose, dependencies, events, and support status.",
            "Performance signals are clues, not automatic proof of malicious activity.",
            "Required security, backup, management, and application components should not be removed without dependency testing.",
            "Controlled changes preserve evidence, use one change at a time, validate required functions, and update the baseline.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I3
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