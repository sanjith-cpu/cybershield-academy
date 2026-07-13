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
const modulePath = `${trackPath}/linux-basics-for-security`;
const previousLesson = `${modulePath}/users-groups-and-permissions`;
const nextLesson = `${modulePath}/safe-command-line-navigation`;

const objectives = [
  "Explain Linux processes, parent-child relationships, process identifiers, foreground and background activity, and service concepts.",
  "Connect running processes and services with approved system roles, users, packages, ports, files, dependencies, and logs.",
  "Interpret fictional process and service evidence without stopping, starting, or changing real systems.",
  "Identify unexpected, duplicate, failed, stale, orphaned, high-resource, and review-required activity.",
  "Recommend authorized process or service corrections with dependency review, validation, rollback, and monitoring.",
];

const vocabulary = [
  [
    "Process",
    "A running instance of a program with its own identifier, user context, memory, state, and resource use.",
  ],
  [
    "PID",
    "Process identifier: a number used by the operating system to distinguish one running process from another.",
  ],
  [
    "Parent process",
    "The process that created or launched another process.",
  ],
  [
    "Child process",
    "A process started by another process.",
  ],
  [
    "Foreground process",
    "A process attached to the current interactive session and receiving direct user input.",
  ],
  [
    "Background process",
    "A process running without controlling the current interactive prompt.",
  ],
  [
    "Service",
    "A managed background function that supports the operating system, users, applications, or network activity.",
  ],
  [
    "Daemon",
    "A background process that provides a persistent system or network service.",
  ],
  [
    "Service state",
    "The current condition of a managed service, such as running, stopped, failed, inactive, or restarting.",
  ],
  [
    "Startup state",
    "Whether a service is configured to start automatically during system startup or another approved trigger.",
  ],
  [
    "Dependency",
    "A process, service, file, account, library, network path, or system resource another component requires.",
  ],
  [
    "Resource use",
    "The CPU, memory, storage, network, and process capacity consumed by running activity.",
  ],
];

const processStates = [
  {
    state: "Running or active",
    meaning:
      "The process or service is currently executing or available.",
    defenderQuestions:
      "Is it required by the approved role? Which user, package, files, ports, and dependencies support it?",
  },
  {
    state: "Stopped or inactive",
    meaning:
      "The service is not currently running.",
    defenderQuestions:
      "Is this expected, planned, failed, manually stopped, or causing an approved workflow outage?",
  },
  {
    state: "Failed",
    meaning:
      "The service manager reports that startup or continued operation did not succeed.",
    defenderQuestions:
      "What error, dependency, permission, configuration, resource, or change evidence explains the failure?",
  },
  {
    state: "Restarting",
    meaning:
      "The service repeatedly stops and starts or is being automatically recovered.",
    defenderQuestions:
      "Is the restart expected? Is there a crash loop, dependency problem, update, or resource limit?",
  },
  {
    state: "Enabled but unused",
    meaning:
      "The service is configured to start automatically but no current dependency or recent use is confirmed.",
    defenderQuestions:
      "Who owns it? Why is it enabled? Can it be restricted or removed through controlled change?",
  },
  {
    state: "Running but unowned",
    meaning:
      "The process is active, but no current team or approved purpose is documented.",
    defenderQuestions:
      "Which package, user, files, connections, project, and historical changes are associated with it?",
  },
];

const processRelationships = [
  {
    relationship: "User to process",
    detail:
      "The account context helps explain who or what launched the process and which permissions it receives.",
  },
  {
    relationship: "Parent to child",
    detail:
      "The process tree can show whether activity came from a shell, service manager, application, scheduler, or another process.",
  },
  {
    relationship: "Process to executable",
    detail:
      "The executable path connects running activity to an installed file, package, owner, and baseline.",
  },
  {
    relationship: "Process to service",
    detail:
      "A service manager may track startup, restarts, failures, dependencies, and logs for the process.",
  },
  {
    relationship: "Process to port",
    detail:
      "A listening or connected port can reveal which network service the process provides or uses.",
  },
  {
    relationship: "Process to files",
    detail:
      "Configuration, logs, data, temporary files, and open files provide operational and evidence context.",
  },
  {
    relationship: "Process to resources",
    detail:
      "CPU, memory, storage, and network use may indicate normal workload, failure, overload, or review needs.",
  },
  {
    relationship: "Process to change",
    detail:
      "Updates, deployments, maintenance, startup changes, and project work may explain why activity changed.",
  },
];

const evidenceMatrix = [
  {
    source: "Process inventory",
    supports:
      "PID, parent PID, user, executable, state, start time, command context, and resource use.",
    limitation:
      "Does not prove approved business purpose, package trust, or complete activity by itself.",
  },
  {
    source: "Service status",
    supports:
      "Service name, state, startup behavior, recent result, dependency, and management context.",
    limitation:
      "Does not prove configuration quality, necessity, reachability, or all child processes.",
  },
  {
    source: "Package and executable record",
    supports:
      "Which installed package or file provides the executable and its version or owner.",
    limitation:
      "Does not prove the process is currently required or correctly configured.",
  },
  {
    source: "Network evidence",
    supports:
      "Listening services, outbound connections, addresses, ports, zones, and firewall decisions.",
    limitation:
      "Does not prove complete application purpose or user intent.",
  },
  {
    source: "Log evidence",
    supports:
      "Startup, stop, failure, restart, authentication, application, and service events over time.",
    limitation:
      "Logs may be incomplete, filtered, delayed, or affected by time synchronization.",
  },
  {
    source: "Ownership and change records",
    supports:
      "Approved role, owner, deployment, exception, maintenance, test, retirement, and rollback context.",
    limitation:
      "Does not prove the final technical state matches the approved plan.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Identify the process or service",
    detail:
      "Record the fictional name, PID, parent, user, executable path, package, state, start time, and startup behavior.",
  },
  {
    step: "2",
    title: "Connect it to system role",
    detail:
      "Ask whether the activity belongs on this web, database, file, monitoring, workstation, gateway, or backup system.",
  },
  {
    step: "3",
    title: "Map dependencies",
    detail:
      "Review required files, users, groups, ports, services, storage, network paths, and startup ordering.",
  },
  {
    step: "4",
    title: "Review behavior and resources",
    detail:
      "Compare logs, restarts, failures, CPU, memory, connections, open files, and recent changes.",
  },
  {
    step: "5",
    title: "Separate fact from conclusion",
    detail:
      "State what is confirmed, likely, uncertain, missing, and unsupported.",
  },
  {
    step: "6",
    title: "Recommend controlled action",
    detail:
      "Document the owner, exact change, dependency review, test, rollback, validation, and monitoring.",
  },
];

const mistakes = [
  "Assuming an unfamiliar process name proves malicious activity.",
  "Stopping a process before preserving its PID, user, executable, parent, connections, files, and logs.",
  "Treating high CPU or memory use as proof of compromise.",
  "Ignoring parent-child relationships and reviewing only one process.",
  "Removing a service without checking users, applications, backups, monitoring, and recovery dependencies.",
  "Assuming a running service is required because it starts automatically.",
  "Ignoring failed or restarting services because the main application still appears available.",
  "Focusing on a port without connecting it to the owning process and approved role.",
  "Making multiple service changes at once and losing the ability to validate the cause.",
  "Publishing real process lists, hostnames, ports, paths, or service configurations in a portfolio.",
];

const quizQuestions = [
  {
    question:
      "What is a Linux process?",
    choices: [
      "A running instance of a program with its own identifier, user context, state, and resources.",
      "Only a file stored on disk.",
      "A user group.",
      "A network address.",
    ],
    answer: 0,
    explanation:
      "A process is active execution rather than only the program file itself.",
  },
  {
    question:
      "What does a PID identify?",
    choices: [
      "A specific running process.",
      "A file permission.",
      "A network zone.",
      "A package repository.",
    ],
    answer: 0,
    explanation:
      "The operating system uses process identifiers to distinguish running processes.",
  },
  {
    question:
      "Why is the parent process useful evidence?",
    choices: [
      "It helps explain what launched the child process and the surrounding activity chain.",
      "It proves the child process is safe.",
      "It replaces service logs.",
      "It identifies the network gateway.",
    ],
    answer: 0,
    explanation:
      "Parent-child relationships provide important execution context.",
  },
  {
    question:
      "What does a running service prove?",
    choices: [
      "The service is active, but its need, safety, configuration, and ownership still require evidence.",
      "The service is definitely approved.",
      "The service is internet-facing.",
      "The system is fully secure.",
    ],
    answer: 0,
    explanation:
      "Running state is only one part of a complete defensive review.",
  },
  {
    question:
      "Which evidence best connects a listening port to a Linux service?",
    choices: [
      "Network socket evidence correlated with the owning process, executable, package, and service record.",
      "Only the port number.",
      "Only the hostname.",
      "Only the service description.",
    ],
    answer: 0,
    explanation:
      "The strongest conclusion connects the port with the process and service context.",
  },
  {
    question:
      "A service repeatedly restarts after a configuration change. What is the strongest response?",
    choices: [
      "Preserve status and logs, compare the approved change and dependencies, and use authorized rollback or correction with validation.",
      "Delete the service immediately.",
      "Disable all monitoring.",
      "Assume the system is compromised.",
    ],
    answer: 0,
    explanation:
      "A restart loop requires evidence, dependency review, and controlled recovery.",
  },
  {
    question:
      "A legacy service is enabled, listening, and unused for months with no owner. What is the strongest next step?",
    choices: [
      "Preserve evidence, complete dependency and ownership review, and request controlled restriction or removal.",
      "Expose it to more users for testing.",
      "Ignore it because no recent connections exist.",
      "Delete the entire system.",
    ],
    answer: 0,
    explanation:
      "The evidence supports a stale-service review, not an unsafe immediate change.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>
      <Link
        href={modulePath}
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>
      <Link
        href={nextLesson}
        className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

function BottomNav() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Navigation
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Continue Module I2
      </h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: I2.3 Users, Groups, and Permissions
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
          Next: I2.5 Safe Command-Line Navigation
        </Link>
      </div>
    </section>
  );
}

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

function ProcessStateGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        State Interpretation
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Service State Needs Context
      </h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {processStates.map((item) => (
          <div
            key={item.state}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.state}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Defender questions
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.defenderQuestions}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RelationshipGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Correlation Map
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Connect a Process to the Rest of the System
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {processRelationships.map((item) => (
          <div
            key={item.relationship}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.relationship}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceLimits() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Analysis
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        What Process and Service Evidence Can and Cannot Prove
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

function ReviewWorkflow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Review a Process or Service in Six Steps
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

export default function ProcessesAndServicesPage() {
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
              Module I2
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 4 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I2.4 Processes and Services
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Analyze fictional Linux processes, parent-child relationships,
            service states, startup behavior, packages, users, ports, files,
            resource use, logs, dependencies, and change evidence.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I2: Linux Basics for Security"
          lessonTitle="Processes and Services"
          lessonNumber={4}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain Linux system roles, filesystem paths, users, groups, ownership, and permissions.",
            "I understand that an unfamiliar process name or high resource use does not prove malicious activity.",
            "I will preserve process, service, executable, user, network, file, log, and change evidence before recommending action.",
            "I will use only fictional processes, services, users, packages, ports, paths, logs, and organizations.",
            "I will not start, stop, restart, terminate, reconfigure, or inspect processes on any real system without authorization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Running Process Is an Observation, Not a Complete Conclusion"
        >
          <p className="leading-8">
            A process may be expected, unnecessary, misconfigured, overloaded,
            stale, failed, or part of an approved change. Defenders connect the
            process to its parent, user, executable, package, service, files,
            ports, logs, owner, system role, and recent changes before deciding
            what it means.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The process name looks strange, so stop it.”
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Preserve the evidence, identify the process chain and owner,
                compare it with the approved role and changes, then choose the
                narrowest authorized action.”
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
          title="Processes and Services Turn Stored Software Into Active System Behavior"
        >
          <p className="leading-8">
            Files and packages show what is installed. Processes and services
            show what is running, which accounts are involved, which resources
            are used, which ports are open, which files are active, and whether
            approved applications are healthy.
          </p>
        </SectionCard>

        <ProcessStateGuide />
        <RelationshipGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Review the Full Execution Chain"
        >
          <p className="leading-8">
            A strong process review connects the parent process, child process,
            user, executable path, installed package, service definition,
            startup state, open files, network activity, resource use, logs, and
            ownership. One isolated process name rarely provides enough context.
          </p>

          <div className="mt-5 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5 text-blue-50">
            <span className="font-bold">Intermediate habit:</span> write one
            evidence sentence that includes process, user, parent, executable,
            service, system role, and timestamp.
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Linux Process and Service Terms
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

        <EvidenceLimits />
        <ReviewWorkflow />

        <FakeDashboardCard
          title="Fake Linux Process and Service Dashboard"
          subtitle="Training dashboard for the fictional Harborview Learning Portal."
          metrics={[
            {
              label: "Expected services",
              value: "9",
              note: "Web, database client, monitoring, time, backup, logging, and update services match the baseline.",
            },
            {
              label: "Failed services",
              value: "1",
              note: "The approved media-processing service repeatedly restarts after a configuration change.",
            },
            {
              label: "Unowned legacy service",
              value: "1",
              note: "A synchronization service remains enabled and listening with no current dependency.",
            },
          ]}
        />

        <FakeAlertCard
          title="Approved Media Service Enters a Restart Loop After Configuration Change"
          severity="High"
          time="03:17 PM"
          source="Fake Linux Service Health Monitor"
          details="The fictional service media-render.service restarts every 45 seconds after an approved configuration update. Logs show a permission-denied error reading /srv/media-render/config/app.conf. The file owner changed during deployment, and the service account no longer has the expected read access."
          recommendation="Preserve service, process, file, permission, deployment, and log evidence; compare the approved ownership baseline; then request an authorized ownership or permission correction with validation and rollback."
        />

        <FakeLogPanel
          title="Fake Process and Service Evidence Timeline"
          logs={[
            "14:52:00 CHANGE title='media-render configuration update' approved='true'",
            "14:54:16 FILE path='/srv/media-render/config/app.conf' owner='deploy-user' group='deploy-team' permissions='rw-r-----'",
            "14:55:02 SERVICE name='media-render.service' user='media-render' state='starting'",
            "14:55:03 PROCESS pid='4812' parent='service-manager' executable='/opt/media-render/bin/renderer'",
            "14:55:03 ERROR service='media-render.service' message='permission denied reading app.conf'",
            "14:55:04 SERVICE name='media-render.service' state='failed' restart='scheduled'",
            "15:01:44 BASELINE config_owner='root' config_group='media-render' permissions='rw-r-----'",
            "15:08:31 DEPLOYMENT ownership_change='not_documented'",
            "15:17:09 CORRELATION finding='service_restart_loop_due_to_config_group_mismatch' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Process and Service Conclusion Is Best Supported?"
          evidence={[
            "The fictional media-render service is approved for the server role.",
            "The service account is media-render.",
            "The service fails while reading its approved configuration file.",
            "The file group changed from media-render to deploy-team during deployment.",
            "The current permissions allow the owner and group to read, but the service account is not in deploy-team.",
            "The approved baseline requires group ownership by media-render.",
            "The service restarts repeatedly after the change.",
          ]}
          question="What is the strongest conclusion and next action?"
          options={[
            "A configuration ownership mismatch prevents the approved service account from reading its file; preserve evidence and request an authorized ownership correction with validation and rollback.",
            "The process is definitely malicious because it restarts.",
            "Delete the configuration file.",
            "Give every user full access to the file.",
          ]}
          bestAnswer={0}
          explanation="The evidence directly connects the failed service with the changed group ownership and permission model. The correction should restore the approved ownership safely."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Process and Service Review"
        >
          <div className="grid gap-3">
            {mistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Review a Fictional Linux Process and Service Inventory"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Learning Application Server
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review a supplied fictional process tree, service-status table,
                executable inventory, package list, ports, open files, resource
                data, ownership records, logs, and approved changes.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Classify each process and service as expected, failed, stale, duplicate, or review-required.</li>
                <li>Map process, parent, user, executable, package, service, port, and files.</li>
                <li>Compare startup behavior and service state with the approved role.</li>
                <li>Review resource use, restarts, errors, dependencies, and changes.</li>
                <li>Identify one service failure and one unnecessary exposure.</li>
                <li>State facts, likely explanation, missing evidence, and confidence.</li>
                <li>Write an authorized correction, validation, rollback, and monitoring plan.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This is a read-only fictional evidence lab. Do not terminate,
            restart, reconfigure, inspect, or test processes or services on a
            real computer, server, virtual machine, website, cloud system, or
            school device.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Process Uses High CPU During an Approved Media Export"
          scenario="A fictional media-render process uses 92% CPU while an approved large video export is active. The parent service, user, file paths, job record, and change window all match the documented workflow."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve resource and job evidence, continue monitoring, and compare performance with the approved workload baseline before escalating.",
              outcome:
                "Best defensive choice. High CPU is expected during the documented workload unless other evidence shows failure.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Terminate the process because CPU use is high.",
              outcome:
                "Unsafe. This would interrupt an approved workload without evidence of failure or abuse.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Declare the system compromised.",
              outcome:
                "Unsupported. Resource use alone does not prove compromise.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Legacy Service Is Enabled but Has No Recent Connections"
          scenario="A fictional synchronization service starts automatically and listens on the staff zone. The related project ended eight months ago, no recent connections exist, and no current owner or dependency is documented."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve service, port, package, owner, dependency, and change evidence; complete review; then request controlled restriction or removal.",
              outcome:
                "Best defensive choice. The service appears stale, but safe removal still requires evidence and authorization.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Ignore it because no recent connections exist.",
              outcome:
                "Weak governance. An unnecessary listening service still creates exposure.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Expose it to more zones to determine whether anyone needs it.",
              outcome:
                "Unsafe. Testing should not broaden access.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Linux Process and Service Review Checklist"
          items={[
            "I record process name, PID, parent, user, executable path, package, state, and start time.",
            "I connect the process with a managed service, startup state, dependencies, files, ports, and logs.",
            "I compare the activity with the approved system role, owner, baseline, and recent changes.",
            "I review CPU, memory, storage, network use, failures, restarts, and open files in context.",
            "I identify unexpected, duplicate, stale, failed, unowned, or review-required activity.",
            "I preserve the original process, service, file, network, log, and change evidence before action.",
            "I distinguish confirmed facts, likely explanations, missing evidence, and unsupported assumptions.",
            "I avoid interpreting high resource use or unfamiliar names as proof of malicious activity.",
            "I recommend only authorized changes with dependency review, testing, validation, rollback, and monitoring.",
            "I use fictional evidence and never inspect or publish real process or service details.",
          ]}
        />

        <MiniQuiz
          title="I2.4 Mini Quiz: Processes and Services"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Linux Process and Service Review for a learning-application server. Include at least twelve processes and services with PID, parent, user, executable, package, state, startup behavior, required files, ports, dependencies, resource use, owner, baseline status, logs, risk, and recommended action."
          tips={[
            "Use only fictional processes, services, users, packages, ports, paths, logs, systems, and organizations.",
            "Include one failed service, one stale listening service, one expected high-resource process, and one duplicate process.",
            "Explain what each evidence source confirms and what it cannot prove alone.",
            "Do not include real process lists, hostnames, ports, file paths, credentials, or production details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A process is a running program instance with a PID, parent, user, executable, state, and resources.",
            "Services are managed background functions with startup, dependency, failure, restart, and logging context.",
            "Running, failed, stopped, or high-resource states require system-role and workload evidence.",
            "Strong analysis connects process, parent, user, executable, package, service, files, ports, logs, and changes.",
            "Unfamiliar names and resource spikes do not prove malicious activity.",
            "Safe process and service changes require preservation, authorization, dependency review, testing, rollback, validation, and monitoring.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}