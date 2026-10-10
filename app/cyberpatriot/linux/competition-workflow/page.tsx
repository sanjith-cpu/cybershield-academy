import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Translate the overall CyberPatriot strategy into a Linux-specific competition workflow.",
  "Read the scenario before making changes and identify required users, services, applications, networking, and forensic questions.",
  "Build a useful Linux baseline using read-only inspection commands before broad hardening begins.",
  "Separate high-confidence fixes from findings that require investigation, dependency review, or teammate coordination.",
  "Make controlled Linux changes that preserve required functionality and forensic evidence.",
  "Verify the final Linux state from both the configuration and user/service perspective.",
];

const firstLook = [
  {
    title: "Scenario requirements",
    text:
      "Identify authorized users, administrators, required services, software, network access, remote-management needs, restrictions, and forensic questions before changing the image.",
  },
  {
    title: "Identity",
    text:
      "Review users, groups, sudo privilege, login shells, home directories, locked accounts, and anything that conflicts with the scenario.",
  },
  {
    title: "Services",
    text:
      "Check running and enabled services, especially anything required by the scenario such as SSH, web services, logging, networking, or databases.",
  },
  {
    title: "Software",
    text:
      "Inventory installed packages, repository configuration, update posture, and software that appears required, unnecessary, unsupported, or unfamiliar.",
  },
  {
    title: "Network exposure",
    text:
      "Review interfaces, routes, listening ports, UFW status, required services, remote access, and DNS behavior before changing network controls.",
  },
  {
    title: "Evidence",
    text:
      "Read forensic questions early and preserve logs, account state, process information, scheduled tasks, configuration files, timestamps, and command output that may matter later.",
  },
];

const baselineAreas = [
  {
    area: "System identity",
    commands: ["hostnamectl", "cat /etc/os-release", "uname -a"],
    why:
      "Confirm which system and distribution you are actually working on before assuming a tool, package, or default behavior.",
  },
  {
    area: "Users",
    commands: ["getent passwd", "awk -F: '{print $1, $3, $7}' /etc/passwd"],
    why:
      "Establish which accounts exist, which shells they use, and which identities need closer review.",
  },
  {
    area: "Groups and sudo",
    commands: ["getent group", "getent group sudo", "sudo -l"],
    why:
      "Administrative privilege is one of the highest-impact parts of a Linux image and should match the scenario.",
  },
  {
    area: "Services",
    commands: ["systemctl --type=service --state=running", "systemctl list-unit-files --type=service"],
    why:
      "A service may be required, unnecessary, misconfigured, or unfamiliar. The baseline tells you what is actually active.",
  },
  {
    area: "Processes",
    commands: ["ps aux", "ps -eo user,pid,ppid,cmd --sort=user"],
    why:
      "Running processes show which users, executables, and services are active right now and can reveal clues that need investigation.",
  },
  {
    area: "Network",
    commands: ["ip addr", "ip route", "ss -tulpn"],
    why:
      "Before changing firewall or service settings, understand interfaces, routes, listening ports, and network dependencies.",
  },
  {
    area: "Firewall",
    commands: ["sudo ufw status verbose"],
    why:
      "Know whether UFW is active, what the default policy is, and which rules protect or expose required services.",
  },
  {
    area: "Packages",
    commands: ["apt list --installed 2>/dev/null", "apt-cache policy"],
    why:
      "Installed software and package sources can affect both security posture and required functionality.",
  },
  {
    area: "Scheduled execution",
    commands: ["crontab -l", "sudo ls -la /etc/cron.*", "systemctl list-timers --all"],
    why:
      "Scheduled jobs and timers may be legitimate maintenance or persistence. Their purpose should be understood before changing them.",
  },
  {
    area: "Logs",
    commands: ["journalctl -p warning --since today", "sudo journalctl --since today"],
    why:
      "Recent logs can explain service failures, authentication activity, configuration changes, and forensic clues.",
  },
];

const taskBuckets = [
  {
    label: "Do Now",
    description:
      "A clear scenario conflict or confirmed weakness with strong evidence, manageable risk, and a result you can verify quickly.",
    example:
      "The scenario names Morgan as the only administrator, but a confirmed standard user is also in the sudo group.",
  },
  {
    label: "Investigate",
    description:
      "A potentially important finding where the purpose, dependency, or evidence is still incomplete.",
    example:
      "An unfamiliar root-owned process is running, but its executable belongs to a package you have not identified yet.",
  },
  {
    label: "Coordinate",
    description:
      "A change may affect networking, remote access, a required service, another teammate, or evidence needed elsewhere.",
    example:
      "Changing UFW rules while SSH must remain available to an authorized administrator.",
  },
  {
    label: "Revisit",
    description:
      "The task is low-confidence, blocked, or consuming too much time compared with higher-value work.",
    example:
      "A strange log pattern needs deeper research while several confirmed account and permission problems are still unresolved.",
  },
  {
    label: "Done / Verify",
    description:
      "The configuration change is complete, but the team still needs to prove both the security improvement and required functionality.",
    example:
      "A user was removed from sudo and now needs privilege verification and an authorized login check.",
  },
];

const changeQuestions = [
  "What exactly is wrong right now?",
  "What Linux evidence proves it?",
  "What does the scenario require?",
  "Is the affected user, service, package, process, file, or network path required?",
  "Could this change break SSH, networking, an application, package management, or another service?",
  "Could this alter or destroy forensic evidence?",
  "What is the least disruptive fix?",
  "How will I verify both the security state and required functionality afterward?",
];

const toolMap = [
  {
    tool: "Terminal",
    use:
      "Primary workspace for inspection, inventory, verification, and controlled administration.",
  },
  {
    tool: "systemctl",
    use:
      "Inspect service state, enablement, dependencies, startup behavior, and recent failures.",
  },
  {
    tool: "journalctl",
    use:
      "Review systemd journal evidence for services, authentication activity, errors, boots, and other events.",
  },
  {
    tool: "getent",
    use:
      "Query users and groups through the system account databases without manually parsing every file.",
  },
  {
    tool: "ss",
    use:
      "Inspect listening sockets and network exposure before changing services or firewall rules.",
  },
  {
    tool: "ip",
    use:
      "Review addresses, interfaces, routes, and other current network state.",
  },
  {
    tool: "UFW",
    use:
      "Review and manage host firewall policy on systems where UFW is the configured frontend.",
  },
  {
    tool: "APT",
    use:
      "Inspect installed packages, repositories, updates, and package metadata on Ubuntu and Linux Mint.",
  },
];

const inspectionCommands = [
  {
    command: "cat /etc/os-release",
    purpose:
      "Identify the distribution and release before assuming Ubuntu- or Mint-specific defaults.",
    changesSystem: "No",
  },
  {
    command: "getent passwd",
    purpose:
      "List account records using the system account database.",
    changesSystem: "No",
  },
  {
    command: "getent group sudo",
    purpose:
      "Inspect membership of the sudo group on systems that use it for administrative privilege.",
    changesSystem: "No",
  },
  {
    command: "systemctl --type=service --state=running",
    purpose:
      "List currently running systemd services.",
    changesSystem: "No",
  },
  {
    command: "ps aux",
    purpose:
      "Inspect running processes, users, resource usage, and command names.",
    changesSystem: "No",
  },
  {
    command: "ss -tulpn",
    purpose:
      "Inspect listening TCP/UDP sockets and associated processes where permissions allow.",
    changesSystem: "No",
  },
  {
    command: "sudo ufw status verbose",
    purpose:
      "Display UFW status, default policy, and configured rules.",
    changesSystem: "No",
  },
  {
    command: "systemctl list-timers --all",
    purpose:
      "Review systemd timers that may schedule recurring execution.",
    changesSystem: "No",
  },
];

const linuxBoundaries = [
  {
    title: "Do not delete unfamiliar accounts first",
    text:
      "Confirm whether the account is human, service-related, package-created, or required by the scenario before disabling or removing it.",
  },
  {
    title: "Do not disable unfamiliar services first",
    text:
      "Identify the unit, package, dependencies, listening ports, and scenario role before stopping or disabling it.",
  },
  {
    title: "Do not chmod recursively without scope",
    text:
      "Broad recursive permission changes can break applications, SSH, service accounts, package-managed files, and user access.",
  },
  {
    title: "Do not remove packages by name alone",
    text:
      "Confirm whether the package is required directly or as a dependency before removal.",
  },
  {
    title: "Do not flush firewall rules blindly",
    text:
      "Required SSH, web, DNS, or application access can disappear if network controls are changed without a baseline.",
  },
  {
    title: "Do not clear logs",
    text:
      "Logs may answer forensic questions or explain service and authentication behavior. Preserve them unless the scenario explicitly requires otherwise.",
  },
];

const verificationLayers = [
  {
    title: "Configuration",
    text:
      "Re-query the user, group, service, package, firewall rule, permission, or configuration file and confirm the intended state actually changed.",
  },
  {
    title: "Security",
    text:
      "Confirm the original exposure or weakness is reduced rather than merely shifted elsewhere.",
  },
  {
    title: "Functionality",
    text:
      "Test the authorized user, required service, SSH path, application, DNS resolution, or other scenario-required workflow.",
  },
  {
    title: "Evidence",
    text:
      "Confirm logs, timestamps, configuration history, or other artifacts needed for forensics were preserved.",
  },
  {
    title: "Team",
    text:
      "Record important changes and communicate anything that may affect another teammate or a later verification step.",
  },
];

const workedRound = [
  {
    stage: "Scenario",
    text:
      "A fictional Ubuntu image must keep SSH available for Morgan, keep an internal web service running, preserve Avery and Riley as standard users, and answer a forensic question about a root-owned scheduled command.",
  },
  {
    stage: "Baseline",
    text:
      "The team identifies the distribution, users, sudo membership, running services, listening ports, UFW status, packages, processes, timers, cron locations, and recent logs before changing anything.",
  },
  {
    stage: "Prioritize",
    text:
      "An unauthorized sudo membership goes to Do Now. A broad SSH firewall rule goes to Coordinate. The unknown scheduled command goes to Investigate because evidence must be preserved first.",
  },
  {
    stage: "Remediate",
    text:
      "The team removes only the unnecessary sudo privilege, narrows SSH exposure without disabling the required service, and leaves the scheduled command unchanged until its purpose and evidence are documented.",
  },
  {
    stage: "Verify",
    text:
      "The corrected user no longer has sudo access, Morgan can still connect through the authorized SSH path, the web service still responds, UFW remains active, and the scheduled-task evidence is preserved.",
  },
];

const commonMistakes = [
  {
    title: "Starting with a hardening script",
    text:
      "Bulk scripts can change many settings before the team understands required users, services, packages, or networking.",
  },
  {
    title: "Treating every UID as a normal user",
    text:
      "Linux systems contain human accounts and many service or system identities. Context matters before account changes.",
  },
  {
    title: "Stopping unfamiliar services",
    text:
      "Unknown does not mean unnecessary. Identify the package, dependency, port, and scenario purpose first.",
  },
  {
    title: "Using recursive permission fixes",
    text:
      "Commands such as broad recursive chmod or chown can damage service, package, and application behavior.",
  },
  {
    title: "Locking yourself out of SSH",
    text:
      "Changing sshd configuration, user authorization, firewall rules, or the service itself without coordinated verification can remove required access.",
  },
  {
    title: "Ignoring logs until the end",
    text:
      "Authentication, service, sudo, package, and scheduled-execution evidence may be changed or lost during remediation.",
  },
];

const finalReview = [
  "Re-read the Linux scenario and requirements.",
  "Confirm the distribution and system identity.",
  "Confirm every authorized user still exists.",
  "Confirm sudo or administrative privilege matches the scenario.",
  "Confirm required services remain running and enabled as appropriate.",
  "Confirm important packages and applications remain installed.",
  "Confirm required network interfaces, routes, DNS, and listening services work.",
  "Confirm firewall state and required access paths.",
  "Review scheduled jobs, timers, and startup findings.",
  "Review important logs and forensic evidence.",
  "Re-query every high-impact change.",
  "Test SSH or other required remote access if applicable.",
  "Test required applications or services from the user/client perspective.",
  "Document unresolved Investigate items.",
  "Finish in a known-good, secure, functional Linux state.",
];

const reflection = [
  "Why should the distribution be identified before broad Linux hardening begins?",
  "Why is an unfamiliar user, service, package, or process an Investigate item instead of automatically malicious?",
  "What makes a Linux change high-impact even when the command itself is short?",
  "Why should SSH and firewall changes be coordinated?",
  "Why are logs and scheduled-execution artifacts important to both security and forensics?",
  "What does complete verification look like after a Linux change?",
];

export default function LinuxCompetitionWorkflowPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Linux
            </Link>
            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux/filesystem-important-paths"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lesson &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Linux · Lesson 01
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Linux Competition Workflow
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Turn the overall competition strategy into a practical Linux
                workflow: understand the image, identify the distribution,
                establish a baseline, classify evidence, make controlled changes,
                and verify the final state.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This lesson is the map for the rest of the Linux pathway. It
                teaches how professionals reason about Linux security before
                later lessons go deeper into users, permissions, packages,
                services, networking, persistence, logs, and administration.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>First-look areas</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Baseline areas</span>
                  <span className="font-bold text-white">10</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Task categories</span>
                  <span className="font-bold text-white">5</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Controlled Linux defense</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Learning objectives
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              What this workflow should help you do
            </h2>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Linux is not a list of commands
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A competition image is a functioning system with identities,
              services, packages, permissions, network paths, configuration,
              evidence, and dependencies. Commands are tools for understanding
              and changing that system, not substitutes for reasoning.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Linux risk
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Short commands can have large consequences
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A single command can change ownership, permissions, packages,
              firewall rules, services, or account access across the system.
              Strong Linux work starts with scope, evidence, and a verification
              plan before the command is run.
            </p>

            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              If you cannot explain what a Linux command changes, what depends on
              it, and how you will test the result, gather more evidence before
              using it on a high-impact target.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Step 1 · Understand the image
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Read first, then inspect
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            Before the terminal becomes a hardening tool, it should be an
            observation tool. Start by understanding what the image is supposed
            to do and which parts of Linux are required to support that mission.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {firstLook.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Step 2 · Establish a baseline
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know the current Linux state before changing it
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            A baseline gives the team something to compare against after
            remediation. The commands below are primarily inspection commands.
            They help answer what is present, what is active, what is exposed,
            and what needs more investigation.
          </p>

          <div className="mt-8 grid gap-5">
            {baselineAreas.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <h3 className="text-xl font-black text-white">
                      {item.area}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.why}
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {item.commands.map((command) => (
                      <code
                        key={command}
                        className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-cyan-200"
                      >
                        {command}
                      </code>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Read-only command set
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Start with commands that describe the system
            </h2>

            <div className="mt-6 grid gap-3">
              {inspectionCommands.map((item) => (
                <div
                  key={item.command}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <code className="text-sm font-bold text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.purpose}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
                    Changes system: {item.changesSystem}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-400/25 bg-yellow-400/10 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Important note about sudo
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Elevated inspection still deserves care
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Some read-only commands need sudo to reveal complete information.
              Using sudo does not automatically make a command destructive, but
              it does mean the shell has elevated privilege. Read the command
              carefully before pressing Enter and avoid copying unfamiliar
              commands blindly.
            </p>

            <div className="mt-6 rounded-xl border border-slate-700 bg-slate-950/50 p-5">
              <p className="text-sm font-black text-white">
                A useful habit
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Ask: “Is this command querying state, or changing state?” If you
                are not sure, check the manual page or help output first.
              </p>
              <code className="mt-4 block rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-cyan-200">
                man command-name
              </code>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Step 3 · Prioritize
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Turn findings into decisions
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            A baseline usually creates more findings than the team can solve at
            once. Classification keeps the team from spending ten minutes on an
            uncertain process while a confirmed sudo or firewall problem remains
            unresolved.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {taskBuckets.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Example
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Before changing anything
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Eight questions
            </h2>

            <div className="mt-6 grid gap-3">
              {changeQuestions.map((question, index) => (
                <div
                  key={question}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{question}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Linux tool map
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Know which tool answers which question
            </h2>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {toolMap.map((item) => (
                <div
                  key={item.tool}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.tool}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.use}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Step 4 · Remediate carefully
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Linux rewards precise changes
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            The goal is not to make the system look “locked down.” The goal is
            to correct confirmed weaknesses while keeping the scenario-required
            mission intact. The safest fix is usually the narrowest fix that
            addresses the evidence.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {linuxBoundaries.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-red-400/15 bg-red-400/5 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Step 5 · Verify
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A successful command is not proof of a successful fix
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            Verification asks whether the security state improved and whether
            the required system still works. Linux makes it easy to change
            configuration quickly, so disciplined teams re-query the state and
            test the dependent function afterward.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {verificationLayers.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Worked fictional round
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            How the workflow fits together
          </h2>

          <div className="mt-8 grid gap-4">
            {workedRound.map((item, index) => (
              <div
                key={item.stage}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 md:grid-cols-[120px_1fr]"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-black text-white">{item.stage}</h3>
                </div>
                <p className="text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Common workflow mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            What strong Linux teams avoid
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {commonMistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              End-of-round Linux review
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Finish in a known-good state
            </h2>

            <div className="mt-6 grid gap-3">
              {finalReview.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Check your reasoning
            </h2>

            <div className="mt-6 grid gap-3">
              {reflection.map((question, index) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {question}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
              <p className="text-sm font-black text-yellow-200">
                The lesson to carry forward
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Linux expertise is not measured by how many commands you can run.
                It is measured by how well you understand the system, justify
                the change, preserve required functions, and prove the result.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Linux
            </Link>
            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <Link
              href="/cyberpatriot/linux/filesystem-important-paths"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lesson &rarr;
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
