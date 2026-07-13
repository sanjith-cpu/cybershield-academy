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
const nextLesson = `${modulePath}/files-directories-and-paths`;

const objectives = [
  "Explain where Linux appears in servers, cloud systems, networking, security tools, development environments, and embedded devices.",
  "Distinguish the Linux kernel, distribution, shell, desktop environment, package manager, service manager, and application layers.",
  "Classify fictional Linux systems by role, owner, sensitivity, exposure, trust level, and approved purpose.",
  "Identify why a system role affects accounts, services, ports, updates, logging, backups, and defensive priorities.",
  "Separate confirmed inventory facts from reasonable conclusions, missing evidence, and unsafe assumptions.",
];

const vocabulary = [
  [
    "Linux kernel",
    "The core software that manages hardware, memory, processes, devices, and system resources.",
  ],
  [
    "Distribution",
    "A packaged Linux operating system that combines the kernel with tools, libraries, applications, repositories, and defaults.",
  ],
  [
    "Shell",
    "A command interpreter that lets users interact with the operating system through commands and scripts.",
  ],
  [
    "Desktop environment",
    "A graphical interface that may include windows, menus, settings, and desktop applications.",
  ],
  [
    "Package manager",
    "A trusted system for installing, updating, verifying, and removing software packages from approved repositories.",
  ],
  [
    "Service manager",
    "A system component that starts, stops, monitors, and manages background services.",
  ],
  [
    "Daemon",
    "A background process that provides a system or network service.",
  ],
  [
    "Repository",
    "An approved source of software packages and metadata used by a package manager.",
  ],
  [
    "System role",
    "The approved purpose of a device or server, such as web server, database server, log collector, workstation, or gateway.",
  ],
  [
    "Exposure",
    "The degree to which a system can be reached by users, devices, networks, or external services.",
  ],
  [
    "Baseline",
    "The approved expected state for accounts, packages, services, ports, settings, updates, logs, and ownership.",
  ],
  [
    "Hardening",
    "The defensive process of reducing unnecessary exposure and configuring a system according to approved security requirements.",
  ],
];

const roleGuide = [
  {
    role: "Web server",
    purpose:
      "Hosts approved websites, learning portals, APIs, or internal web applications.",
    expected:
      "Web service, application files, certificates, limited administration, logging, updates, backups, and monitoring.",
    defenderQuestions:
      "Which sites are approved? Which ports are required? Who owns the application? Is the service internet-facing or internal?",
  },
  {
    role: "Database server",
    purpose:
      "Stores structured application or business data for approved systems.",
    expected:
      "Database service, restricted client access, protected storage, backup jobs, auditing, and strong administration controls.",
    defenderQuestions:
      "Which applications should connect? What data sensitivity applies? Are direct user connections expected?",
  },
  {
    role: "File or collaboration server",
    purpose:
      "Stores and shares approved documents, projects, media, or team resources.",
    expected:
      "File-sharing service, group-based permissions, quotas, backups, auditing, and controlled remote access.",
    defenderQuestions:
      "Which groups need access? Which folders are sensitive? Are guest or public shares expected?",
  },
  {
    role: "Log collector or monitoring server",
    purpose:
      "Receives logs, alerts, health data, metrics, or security telemetry from approved sources.",
    expected:
      "Collection services, protected storage, time synchronization, limited analyst access, retention, and integrity controls.",
    defenderQuestions:
      "Which systems should report? Are timestamps aligned? Are missing logs caused by collection failure?",
  },
  {
    role: "Developer workstation",
    purpose:
      "Supports authorized software development, testing, documentation, and local tools.",
    expected:
      "User applications, development tools, approved repositories, source-control access, endpoint protection, and limited local services.",
    defenderQuestions:
      "Which tools are approved? Are test services exposed? Does the user need elevated access?",
  },
  {
    role: "Gateway or network appliance",
    purpose:
      "Routes, filters, proxies, translates, monitors, or protects network communication.",
    expected:
      "Minimal services, restricted administration, strong logging, reliable updates, configuration backups, and limited management access.",
    defenderQuestions:
      "Which interfaces and routes exist? Who may administer it? Which services are essential?",
  },
];

const linuxLayers = [
  {
    layer: "Hardware and virtualization",
    detail:
      "Physical or virtual CPU, memory, storage, interfaces, and devices provide the underlying platform.",
  },
  {
    layer: "Linux kernel",
    detail:
      "The kernel manages hardware, scheduling, memory, devices, filesystems, networking, and process isolation.",
  },
  {
    layer: "System libraries and tools",
    detail:
      "Core libraries and utilities provide functions used by applications, administrators, and services.",
  },
  {
    layer: "Service and package management",
    detail:
      "Approved tools manage background services, dependencies, repositories, updates, and software state.",
  },
  {
    layer: "Shell or desktop",
    detail:
      "Users interact through a command shell, graphical environment, or both.",
  },
  {
    layer: "Applications and services",
    detail:
      "Web, database, file, monitoring, development, and other approved workloads run at the top.",
  },
];

const evidenceMatrix = [
  {
    source: "Asset inventory",
    supports:
      "System name, owner, operating system, environment, location, purpose, sensitivity, and lifecycle status.",
    limitation:
      "May be stale and does not prove current services, packages, users, or network activity.",
  },
  {
    source: "Distribution and kernel record",
    supports:
      "The installed Linux distribution, release, kernel family, architecture, and update context.",
    limitation:
      "Does not prove the system is correctly configured or fully supported.",
  },
  {
    source: "Service inventory",
    supports:
      "Which background services are configured, running, stopped, enabled, or failed.",
    limitation:
      "A running service may still be misconfigured, unnecessary, unreachable, or unused.",
  },
  {
    source: "Package inventory",
    supports:
      "Installed software, versions, repositories, dependencies, and package state.",
    limitation:
      "Does not prove every package is actively used or securely configured.",
  },
  {
    source: "Network and firewall records",
    supports:
      "Observed interfaces, addresses, listening services, approved zones, rules, and connections.",
    limitation:
      "Do not prove the complete business purpose or current owner by themselves.",
  },
  {
    source: "Change and ownership records",
    supports:
      "Approved role, owner, maintenance window, planned service, validation, and rollback.",
    limitation:
      "Do not prove the final system state matches the documented plan.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Identify the system",
    detail:
      "Record the fictional hostname, distribution, environment, owner, location, and lifecycle state.",
  },
  {
    step: "2",
    title: "Confirm the approved role",
    detail:
      "Determine whether the system is a web server, database, file server, workstation, gateway, monitor, or another approved role.",
  },
  {
    step: "3",
    title: "Map required components",
    detail:
      "List the accounts, services, packages, ports, storage, logs, backups, and management paths the role needs.",
  },
  {
    step: "4",
    title: "Compare observed state",
    detail:
      "Review fictional inventory, service, package, network, ownership, and change evidence against the approved baseline.",
  },
  {
    step: "5",
    title: "Find unnecessary exposure",
    detail:
      "Identify broad access, unrelated services, stale accounts, unsupported packages, unclear ownership, or missing monitoring.",
  },
  {
    step: "6",
    title: "Recommend controlled action",
    detail:
      "Document the narrowest authorized correction, owner, test plan, rollback, validation, and review date.",
  },
];

const mistakes = [
  "Assuming every Linux system has the same purpose, services, packages, and risk.",
  "Treating a distribution name as proof that the system is secure or supported.",
  "Ignoring system ownership, business purpose, exposure, and lifecycle status.",
  "Removing a service before checking dependencies, owners, users, and rollback.",
  "Keeping unnecessary services because they were installed by default.",
  "Giving a general user permanent administrative access for convenience.",
  "Assuming an internet-facing server and an internal workstation need the same baseline.",
  "Ignoring time synchronization, logging, backups, and monitoring because the main application works.",
  "Using one inventory source without checking services, packages, network evidence, and changes.",
  "Publishing real hostnames, internal addresses, package inventories, or service details in a portfolio.",
];

const quizQuestions = [
  {
    question:
      "What is a Linux distribution?",
    choices: [
      "A packaged operating system that combines the Linux kernel with tools, libraries, applications, repositories, and defaults.",
      "Only a graphical theme.",
      "Only a hardware driver.",
      "A single user account.",
    ],
    answer: 0,
    explanation:
      "A distribution packages the kernel with the surrounding operating-system tools and software ecosystem.",
  },
  {
    question:
      "Why is the approved system role important to defenders?",
    choices: [
      "It defines which users, services, ports, packages, logs, backups, and controls should exist.",
      "It proves every running process is safe.",
      "It replaces monitoring.",
      "It makes ownership unnecessary.",
    ],
    answer: 0,
    explanation:
      "A role provides the baseline used to judge expected and unnecessary system behavior.",
  },
  {
    question:
      "Which system should normally have the narrowest administrative exposure?",
    choices: [
      "A gateway or network-security appliance.",
      "A public information kiosk with no management access.",
      "Every system should allow administration from anywhere.",
      "A guest device.",
    ],
    answer: 0,
    explanation:
      "Infrastructure systems should have tightly restricted, strongly authenticated, and monitored administration.",
  },
  {
    question:
      "What does a running service prove?",
    choices: [
      "The service process is active, but its need, configuration, reachability, and safety still require evidence.",
      "The service is definitely required.",
      "The service is fully secure.",
      "The service is internet-facing.",
    ],
    answer: 0,
    explanation:
      "Running state is only one piece of evidence.",
  },
  {
    question:
      "Which evidence best confirms a system's approved business purpose?",
    choices: [
      "Current ownership, inventory, architecture, and change records reviewed together.",
      "Only the desktop wallpaper.",
      "Only the kernel version.",
      "Only one process name.",
    ],
    answer: 0,
    explanation:
      "Purpose should be supported by multiple current governance and technical records.",
  },
  {
    question:
      "What is hardening?",
    choices: [
      "Reducing unnecessary exposure and configuring the system according to approved security requirements.",
      "Installing every available package.",
      "Disabling all logging.",
      "Giving every user administrative access.",
    ],
    answer: 0,
    explanation:
      "Hardening removes unnecessary risk while preserving the system's approved function.",
  },
  {
    question:
      "A fictional web server still runs an old file-sharing service with no confirmed owner or dependency. What is the strongest next step?",
    choices: [
      "Preserve evidence, confirm whether any approved dependency remains, and request controlled removal or restriction with validation and rollback.",
      "Delete the entire server immediately.",
      "Publish the service details for testing.",
      "Give every user access to the service.",
    ],
    answer: 0,
    explanation:
      "The service appears unnecessary, but safe change still requires ownership, evidence, authorization, testing, and rollback.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
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
          href={modulePath}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Back to Module
        </Link>
        <Link
          href={nextLesson}
          className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Next: I2.2 Files, Directories, and Paths
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

function RoleGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        System Roles
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Role Determines What Should Exist
      </h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {roleGuide.map((item) => (
          <div
            key={item.role}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.role}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>
            <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Expected defensive context
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.expected}
              </p>
            </div>
            <div className="mt-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
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

function LinuxLayers() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Linux Structure
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Read the System as Connected Layers
      </h2>

      <div className="mt-6 grid gap-4">
        {linuxLayers.map((item, index) => (
          <div
            key={item.layer}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 md:grid-cols-[0.18fr_0.55fr_1.4fr] md:items-center"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="font-black text-cyan-100">{item.layer}</h3>
            <p className="text-sm leading-6 text-slate-300">{item.detail}</p>
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
        What Linux System Evidence Can and Cannot Prove
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
        Review a Linux System in Six Steps
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

export default function LinuxSystemsAndSecurityRolesPage() {
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
              Lesson 1 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I2.1 Linux Systems and Security Roles
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Understand Linux structure, distributions, system roles, ownership,
            exposure, expected services, and the defensive baseline used to
            evaluate a fictional system safely.
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
          lessonTitle="Linux Systems and Security Roles"
          lessonNumber={1}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that Linux appears in servers, cloud systems, networking, development, security, and embedded devices.",
            "I will compare every system with its approved role rather than assuming all Linux systems should look the same.",
            "I will separate inventory facts, technical observations, likely explanations, missing evidence, and assumptions.",
            "I will use only fictional systems, accounts, services, packages, addresses, logs, organizations, and change records.",
            "I will not test, scan, reconfigure, or inspect any real system without explicit authorization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Linux System Is Secure Only When Its Configuration Fits Its Approved Role"
        >
          <p className="leading-8">
            A database server, developer workstation, log collector, gateway,
            and web server may all run Linux, but they should not have the same
            users, packages, services, ports, permissions, update schedule, or
            exposure. Defenders first identify what the system is supposed to
            do, then compare the observed state with that purpose.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “It runs Linux, so every installed service is probably needed.”
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Confirm the role, owner, exposure, dependencies, baseline,
                observed state, and change history before recommending action.”
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
          title="System Role Drives Defensive Expectations"
        >
          <p className="leading-8">
            Defenders cannot judge a service, package, account, or open port
            without knowing why the system exists. A web service may be expected
            on a portal server but unnecessary on a database server. Development
            tools may be approved on a workstation but inappropriate on a
            production gateway. Role gives evidence meaning.
          </p>
        </SectionCard>

        <LinuxLayers />
        <RoleGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Linux Is an Ecosystem, Not One Identical Operating System"
        >
          <p className="leading-8">
            Different distributions may use different repositories, package
            managers, service defaults, release schedules, desktop environments,
            and support lifecycles. The Linux kernel is only one layer. Strong
            defenders record the exact distribution, release, system role,
            owner, environment, and expected workload before evaluating risk.
          </p>

          <div className="mt-5 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5 text-blue-50">
            <span className="font-bold">Intermediate habit:</span> replace the
            vague statement “This is a Linux server” with a precise description
            such as “This fictional internal Ubuntu-based web server hosts the
            student portal, is owned by Learning Applications, and should expose
            only approved web and monitoring services.”
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Linux Structure and System-Role Terms
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
          title="Fake Linux System Role Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook Learning Network."
          metrics={[
            {
              label: "Documented Linux systems",
              value: "18",
              note: "Web, database, monitoring, file, development, backup, and gateway roles are listed.",
            },
            {
              label: "Role mismatch findings",
              value: "3",
              note: "Two servers run unrelated services and one workstation has production credentials.",
            },
            {
              label: "Unknown owner",
              value: "1",
              note: "A legacy synchronization server has no confirmed business owner or active dependency.",
            },
          ]}
        />

        <FakeAlertCard
          title="Legacy File-Sharing Service Running on an Internal Web Server"
          severity="Medium"
          time="09:42 AM"
          source="Fake Linux Baseline Monitor"
          details="The fictional server training-web-02 is documented as an internal learning portal. The approved baseline requires the web application, monitoring agent, time synchronization, and backup client. A legacy file-sharing service is also enabled and listening, but no current owner or dependency is documented."
          recommendation="Preserve service, package, network, ownership, and change evidence; confirm whether any approved dependency remains; then request authorized restriction or removal with testing, rollback, and post-change validation."
        />

        <FakeLogPanel
          title="Fake Linux Role Review Timeline"
          logs={[
            "09:18:00 INVENTORY host='training-web-02' role='internal-learning-portal' owner='learning-apps'",
            "09:19:14 OS distribution='Ubuntu-like-training-release' support='current'",
            "09:21:08 SERVICE name='web-app' state='running' baseline='expected'",
            "09:21:12 SERVICE name='monitor-agent' state='running' baseline='expected'",
            "09:21:17 SERVICE name='legacy-file-share' state='running' baseline='not-listed'",
            "09:23:06 NETWORK service='legacy-file-share' exposure='staff-zone' connections_last_30d='0'",
            "09:27:41 PACKAGE package='legacy-file-share-suite' installed='true' owner='unknown'",
            "09:31:55 CHANGE active_exception='none' historical_project='ended_8_months_ago'",
            "09:42:03 CORRELATION finding='unowned_unnecessary_service_candidate' confidence='medium'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Linux System Conclusion Is Best Supported?"
          evidence={[
            "training-web-02 is documented as an internal learning portal.",
            "The approved baseline lists the web application, monitoring agent, time synchronization, and backup client.",
            "A legacy file-sharing service is running and reachable from the staff zone.",
            "No connections to the file-sharing service appear in the supplied 30-day evidence.",
            "The historical project associated with the service ended eight months ago.",
            "No current owner, dependency, or approved exception is documented.",
          ]}
          question="What is the strongest conclusion and next action?"
          options={[
            "The service appears unnecessary and unowned for the current web-server role; preserve evidence, complete dependency review, and request controlled restriction or removal with validation and rollback.",
            "The server is definitely compromised.",
            "Delete the entire server immediately.",
            "Allow the service from every zone so someone can test it.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports a role mismatch and stale-service concern, but safe change still requires ownership, dependency review, authorization, testing, and rollback."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Linux System Review"
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
          title="Classify a Fictional Linux Environment"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Harborview Linux System Inventory
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review twelve fictional Linux systems representing web,
                database, monitoring, file, development, backup, gateway, and
                test roles. Each record includes ownership, exposure, services,
                packages, support status, and change history.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Assign or confirm the approved role of each system.</li>
                <li>Identify owner, environment, sensitivity, exposure, and lifecycle.</li>
                <li>List the services and packages required by the role.</li>
                <li>Mark unrelated, stale, unsupported, or unowned components.</li>
                <li>Identify missing logging, time, backup, update, or monitoring controls.</li>
                <li>Separate confirmed facts, likely explanations, and missing evidence.</li>
                <li>Write an authorized recommendation with validation and rollback.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional records. Do not inspect, scan, log in to,
            or change any real Linux server, computer, virtual machine, cloud
            system, router, school device, or website.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Developer Tool Appears on a Production Database Server"
          scenario="A fictional production database server has a large development tool installed. The package inventory confirms it exists, but the service is not running and no owner or approved change explains why it was added."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve package and change evidence, confirm whether a legitimate dependency exists, and request authorized removal if the tool is unnecessary.",
              outcome:
                "Best defensive choice. Installation alone supports review, not an immediate conclusion about compromise.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare the server compromised because development tools are installed.",
              outcome:
                "Unsupported. The evidence shows a role mismatch requiring review, not confirmed hostile activity.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Use the tool on the production server to see what it can do.",
              outcome:
                "Unsafe. Production testing requires explicit authorization and a controlled plan.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Internal Log Collector Has No Reliable Time Source"
          scenario="A fictional log collector receives events from many systems, but its clock is several minutes behind and the approved time service is stopped."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the time and log evidence, document the offset, request authorized restoration of the approved time service, and validate event ordering afterward.",
              outcome:
                "Best defensive choice. Time reliability is essential for correlation and should be restored through controlled change.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete all logs with incorrect timestamps.",
              outcome:
                "Unsafe. Original evidence should be preserved and interpreted with documented offset context.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the issue because the collector still receives events.",
              outcome:
                "Weak analysis. Collection without reliable timestamps can mislead investigations.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Linux System Role Review Checklist"
          items={[
            "I identify the exact distribution, release, environment, owner, location, sensitivity, and lifecycle.",
            "I confirm the approved system role and business purpose.",
            "I list the users, groups, services, packages, ports, storage, logs, backups, and management paths required by the role.",
            "I compare observed state with the approved baseline and recent changes.",
            "I identify unrelated, stale, unsupported, unnecessary, or unowned components.",
            "I review exposure, trust zones, administrative access, monitoring, time, update, backup, and recovery needs.",
            "I state what each evidence source confirms and what it cannot prove alone.",
            "I separate confirmed facts, likely explanations, missing evidence, and unsupported assumptions.",
            "I recommend only authorized, documented, tested, reversible, and validated changes.",
            "I use fictional evidence and never inspect or publish real Linux system details.",
          ]}
        />

        <MiniQuiz
          title="I2.1 Mini Quiz: Linux Systems and Security Roles"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Linux System Role and Baseline Matrix for eight systems: web, database, file, monitoring, developer workstation, gateway, backup, and test server. For each system, include distribution family, owner, purpose, environment, sensitivity, exposure, expected users, required services, required packages, logging, time, backup, update approach, management path, and review date."
          tips={[
            "Use only fictional organizations, hostnames, accounts, services, packages, addresses, logs, and diagrams.",
            "Include one role mismatch, one stale service, one unsupported package, and one ownership gap.",
            "Explain what is confirmed, likely, uncertain, and still missing.",
            "Do not include real hostnames, internal addresses, package inventories, credentials, or production details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Linux is an ecosystem made of the kernel, distribution, tools, services, package management, shell or desktop, and applications.",
            "A system's approved role determines which accounts, packages, services, ports, logs, backups, and controls should exist.",
            "A running service or installed package does not prove that it is required, safe, or correctly configured.",
            "Defenders compare inventory, ownership, service, package, network, and change evidence before acting.",
            "Hardening reduces unnecessary exposure while preserving the system's approved purpose.",
            "Safe Linux changes require authorization, dependency review, testing, rollback, validation, and updated documentation.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}