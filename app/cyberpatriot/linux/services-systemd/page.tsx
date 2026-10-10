import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain the difference between a service, a systemd unit, a process, a package, and a socket.",
  "Inspect running, enabled, failed, and masked services before changing their state.",
  "Use systemctl and journalctl to understand why a service exists, what starts it, and what depends on it.",
  "Distinguish required, unnecessary, misconfigured, suspicious, and unknown services using scenario evidence.",
  "Make controlled service changes without breaking networking, SSH, logging, applications, or other required dependencies.",
  "Verify service health after changes using status, logs, listening ports, and client-facing tests.",
];

const coreConcepts = [
  {
    title: "Service",
    text:
      "A service is a long-running or background function such as SSH, web hosting, logging, networking, printing, or application support.",
  },
  {
    title: "Unit",
    text:
      "systemd manages resources through units. Service units are common, but sockets, timers, mounts, targets, paths, and other unit types can also influence behavior.",
  },
  {
    title: "Process",
    text:
      "A process is a running program. A service may create one or more processes, and not every process is managed as a standalone service.",
  },
  {
    title: "Enablement",
    text:
      "Enabled means systemd is configured to start a unit automatically in the appropriate context. Running describes current state. They are not the same thing.",
  },
  {
    title: "Dependency",
    text:
      "Units can require, want, order, or otherwise relate to other units. Disabling one service can break another service that depends on it.",
  },
  {
    title: "State",
    text:
      "A unit can be active, inactive, failed, enabled, disabled, static, masked, or in another state. Interpret the state before acting.",
  },
];

const stateGuide = [
  {
    state: "active (running)",
    meaning:
      "The service is currently running.",
    caution:
      "Running does not prove that the service is required or correctly configured.",
  },
  {
    state: "inactive",
    meaning:
      "The service is not currently running.",
    caution:
      "It may still be enabled for future startup or triggered on demand.",
  },
  {
    state: "failed",
    meaning:
      "The unit entered a failed state.",
    caution:
      "Investigate logs and dependencies before repeatedly restarting it.",
  },
  {
    state: "enabled",
    meaning:
      "The unit is configured to start automatically through installed systemd links or related mechanisms.",
    caution:
      "Enabled does not mean currently running.",
  },
  {
    state: "disabled",
    meaning:
      "The unit is not configured for normal automatic startup through enablement links.",
    caution:
      "It can still be started manually or triggered by another mechanism.",
  },
  {
    state: "static",
    meaning:
      "The unit does not have ordinary enablement instructions and is typically started as a dependency or trigger.",
    caution:
      "Do not assume static means unnecessary.",
  },
  {
    state: "masked",
    meaning:
      "The unit is deliberately blocked from being started through normal systemd mechanisms.",
    caution:
      "Masking is stronger than disabling. Use it only when the effect is understood and justified.",
  },
];

const inspectionCommands = [
  {
    command: "systemctl --type=service --state=running",
    purpose:
      "List currently running service units.",
  },
  {
    command: "systemctl list-unit-files --type=service",
    purpose:
      "Show installed service unit files and their enablement states.",
  },
  {
    command: "systemctl --failed",
    purpose:
      "Show units currently in a failed state.",
  },
  {
    command: "systemctl status service-name",
    purpose:
      "Show current service state, recent log lines, main process information, and unit metadata.",
  },
  {
    command: "systemctl cat service-name",
    purpose:
      "Display the unit definition and any drop-in configuration that systemd is using.",
  },
  {
    command: "systemctl show service-name",
    purpose:
      "Display detailed systemd properties for deeper inspection.",
  },
  {
    command: "systemctl list-dependencies service-name",
    purpose:
      "Show related dependency units in the service graph.",
  },
  {
    command: "systemctl list-dependencies --reverse service-name",
    purpose:
      "Show units that may depend on or reference the selected service.",
  },
  {
    command: "journalctl -u service-name --since today",
    purpose:
      "Review service-specific journal entries from the current day.",
  },
  {
    command: "ss -tulpn",
    purpose:
      "Inspect listening sockets and help correlate services with network exposure.",
  },
  {
    command: "ps -ef",
    purpose:
      "Review running processes and compare them with systemd service information.",
  },
  {
    command: "dpkg -S /path/to/executable",
    purpose:
      "Identify the Debian package that owns a service executable when known to the package database.",
  },
];

const unitLocations = [
  {
    path: "/etc/systemd/system/",
    purpose:
      "Local administrator units, overrides, and links often live here.",
    review:
      "High-value location for custom services and persistence review. Preserve evidence before removing unfamiliar units.",
  },
  {
    path: "/usr/lib/systemd/system/",
    purpose:
      "Common location for vendor-provided unit files on many modern systems.",
    review:
      "Often package-managed. Identify package ownership before editing.",
  },
  {
    path: "/lib/systemd/system/",
    purpose:
      "Common vendor-unit location on Ubuntu-family systems, sometimes related to the merged /usr layout.",
    review:
      "Inspect the actual system because path layout can vary by version.",
  },
  {
    path: "/etc/systemd/system/*.d/",
    purpose:
      "Drop-in override directories can modify unit behavior without editing the vendor file.",
    review:
      "A service may behave differently from its base unit because of an override.",
  },
  {
    path: "/run/systemd/system/",
    purpose:
      "Runtime units and transient configuration can appear here.",
    review:
      "Content may be temporary and disappear after reboot.",
  },
];

const requiredExamples = [
  {
    service: "ssh / sshd",
    role:
      "Remote administration when explicitly required by the scenario.",
    dependency:
      "Accounts, authentication, network interfaces, firewall rules, host keys, and SSH configuration.",
  },
  {
    service: "NetworkManager or systemd-networkd",
    role:
      "Network interface and connectivity management depending on the image.",
    dependency:
      "Disabling the active network manager can remove connectivity.",
  },
  {
    service: "systemd-resolved",
    role:
      "DNS resolution on systems using it.",
    dependency:
      "Name resolution can fail if DNS handling is changed without understanding /etc/resolv.conf and the active resolver design.",
  },
  {
    service: "apache2 / nginx",
    role:
      "Required web hosting when the scenario includes an internal or public web application.",
    dependency:
      "Ports, firewall, configuration, certificates, files, permissions, and application backends.",
  },
  {
    service: "cron",
    role:
      "Scheduled job execution on systems using cron.",
    dependency:
      "Legitimate maintenance and application jobs may depend on it even while some cron entries require investigation.",
  },
  {
    service: "rsyslog",
    role:
      "Traditional logging on systems where it is installed and active.",
    dependency:
      "Logs may support troubleshooting or forensics. Do not disable logging casually.",
  },
];

const classification = [
  {
    label: "Required",
    signs:
      "Named by the scenario, supports a required application, or is a clear dependency of required functionality.",
    action:
      "Preserve it, secure its configuration, and verify the client-facing function.",
  },
  {
    label: "Unnecessary",
    signs:
      "Clearly prohibited, outside the intended role, or confirmed to expose functionality that the system does not need.",
    action:
      "Review dependencies, preserve evidence if relevant, then stop/disable or remove only when justified.",
  },
  {
    label: "Misconfigured",
    signs:
      "Required service with insecure permissions, wrong interface exposure, weak authentication, bad configuration, or repeated failures.",
    action:
      "Fix the specific configuration issue while preserving the service role.",
  },
  {
    label: "Suspicious",
    signs:
      "Unexpected executable path, unusual unit file, unexplained root privilege, odd persistence, unknown package origin, or evidence tying it to a security event.",
    action:
      "Preserve unit files, logs, process data, executable metadata, and dependencies before remediation.",
  },
  {
    label: "Unknown",
    signs:
      "Purpose or dependency relationship is not yet clear.",
    action:
      "Investigate package ownership, unit definition, logs, process tree, ports, and reverse dependencies.",
  },
];

const reasoningCases = [
  {
    finding: "An unfamiliar service is running as root",
    weak:
      "Stop and disable it immediately.",
    better:
      "Inspect the unit file, executable path, package ownership, logs, ports, scenario role, and reverse dependencies before deciding whether it is unnecessary or suspicious.",
  },
  {
    finding: "SSH is enabled",
    weak:
      "Disable remote access because remote services are risky.",
    better:
      "Check whether SSH is required. If it is, harden authentication and firewall exposure while preserving authorized access.",
  },
  {
    finding: "A service is failed",
    weak:
      "Disable it because it is broken.",
    better:
      "Determine whether the service is required, inspect journal logs, identify the failure cause, and decide whether to repair or remove it.",
  },
  {
    finding: "A service is disabled",
    weak:
      "It cannot be running.",
    better:
      "Check current state and triggers. A disabled unit can still be started manually or by another unit.",
  },
  {
    finding: "A unit file exists in /etc/systemd/system",
    weak:
      "Custom unit means malware.",
    better:
      "Local administrators legitimately create custom units. Investigate who created it, what it runs, what package/application it supports, and whether the scenario requires it.",
  },
  {
    finding: "A web service listens on all interfaces",
    weak:
      "Disable the whole service.",
    better:
      "If the web application is required, review bind addresses, firewall rules, TLS, authentication, and application configuration to reduce exposure while preserving service.",
  },
];

const controlledActions = [
  {
    goal: "Start a required service",
    command: "sudo systemctl start service-name",
    caution:
      "Use after understanding why the service should be active and what configuration it will load.",
  },
  {
    goal: "Stop a confirmed unnecessary service",
    command: "sudo systemctl stop service-name",
    caution:
      "Stopping affects the current session only. Verify no required dependency or client function breaks.",
  },
  {
    goal: "Enable a required service",
    command: "sudo systemctl enable service-name",
    caution:
      "Enablement affects future startup behavior. Confirm automatic startup is actually desired.",
  },
  {
    goal: "Disable unnecessary automatic startup",
    command: "sudo systemctl disable service-name",
    caution:
      "Disabling does not necessarily stop a currently running service or prevent manual activation.",
  },
  {
    goal: "Restart after a validated configuration change",
    command: "sudo systemctl restart service-name",
    caution:
      "A restart can interrupt users and may fail if the new configuration has errors. Validate configuration first when the service supports it.",
  },
  {
    goal: "Reload configuration without full restart",
    command: "sudo systemctl reload service-name",
    caution:
      "Only works when the service supports reload behavior. Check service documentation and status.",
  },
];

const dependencyChecks = [
  {
    question: "What starts this service?",
    command: "systemctl list-dependencies service-name",
  },
  {
    question: "What depends on this service?",
    command: "systemctl list-dependencies --reverse service-name",
  },
  {
    question: "What unit file and overrides are active?",
    command: "systemctl cat service-name",
  },
  {
    question: "What executable does it run?",
    command: "systemctl show service-name -p ExecStart",
  },
  {
    question: "What user runs it?",
    command: "systemctl show service-name -p User -p Group",
  },
  {
    question: "What network ports are associated with it?",
    command: "ss -tulpn",
  },
];

const evidenceSources = [
  {
    source: "Unit definition",
    command: "systemctl cat service-name",
    value:
      "Shows vendor unit content plus drop-ins that may modify behavior.",
  },
  {
    source: "Service properties",
    command: "systemctl show service-name",
    value:
      "Shows detailed properties such as executable, user, restart behavior, dependencies, and state.",
  },
  {
    source: "Service logs",
    command: "journalctl -u service-name",
    value:
      "Provides service-specific journal evidence when retained.",
  },
  {
    source: "Process tree",
    command: "ps -ef --forest",
    value:
      "Helps correlate services with child processes and runtime activity.",
  },
  {
    source: "Network exposure",
    command: "ss -tulpn",
    value:
      "Shows listening sockets and associated processes where permissions allow.",
  },
  {
    source: "Package ownership",
    command: "dpkg -S /path/to/executable",
    value:
      "Identifies the package responsible for a service binary when package-managed.",
  },
];

const highRiskShortcuts = [
  {
    shortcut: "systemctl disable --now everything unfamiliar",
    risk:
      "Combines current shutdown and future disablement without understanding dependencies or system role.",
  },
  {
    shortcut: "Masking a service as the first response",
    risk:
      "Masking strongly blocks startup and can break dependencies or troubleshooting workflows.",
  },
  {
    shortcut: "Deleting unit files before preserving evidence",
    risk:
      "Custom unit files can answer forensic questions about persistence, executable paths, users, and command lines.",
  },
  {
    shortcut: "Restarting repeatedly without reading logs",
    risk:
      "Repeated restarts can hide the real failure pattern, alter evidence, and waste time.",
  },
  {
    shortcut: "Disabling logging services",
    risk:
      "Can reduce visibility and destroy the team's ability to troubleshoot or answer forensic questions.",
  },
  {
    shortcut: "Assuming package removal is the same as service disablement",
    risk:
      "Package removal changes installed software and may affect configuration and dependencies beyond one running service.",
  },
];

const verification = [
  {
    area: "Service state",
    check:
      "Re-run systemctl status and confirm active/inactive state matches the intended result.",
  },
  {
    area: "Startup state",
    check:
      "Check systemctl is-enabled when future startup behavior matters.",
  },
  {
    area: "Logs",
    check:
      "Review journalctl for new errors or warnings after the change.",
  },
  {
    area: "Network exposure",
    check:
      "Re-run ss -tulpn when the service listens on the network.",
  },
  {
    area: "Dependency health",
    check:
      "Confirm related required services remain active and functional.",
  },
  {
    area: "Client function",
    check:
      "Test the actual SSH, web, DNS, application, or other scenario-required function from the appropriate perspective.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Read the fictional scenario: SSH and an internal web application are required; printing is not required; logging must remain available; an unfamiliar root-owned service named sync-helper.service requires investigation.",
  },
  {
    step: "02",
    task:
      "Inventory running, enabled, failed, and masked services using systemctl without changing anything.",
  },
  {
    step: "03",
    task:
      "Inspect ssh.service, the web service, the printing service, rsyslog if present, and sync-helper.service using status, cat, show, and journalctl.",
  },
  {
    step: "04",
    task:
      "Check reverse dependencies before stopping or disabling any service.",
  },
  {
    step: "05",
    task:
      "Classify the printing service as unnecessary only after confirming no scenario requirement depends on it. Classify sync-helper.service as Investigate until executable, package, logs, and persistence evidence are understood.",
  },
  {
    step: "06",
    task:
      "Apply only the justified service-state change and preserve the unfamiliar unit's evidence before remediation.",
  },
  {
    step: "07",
    task:
      "Verify SSH, the internal web application, logging, service states, and listening ports after the change.",
  },
];

const checklist = [
  "I understand the difference between a service, unit, process, and package.",
  "I know enabled and running describe different things.",
  "I can identify active, inactive, failed, disabled, static, and masked unit states.",
  "I use systemctl status, cat, show, and dependency commands before changing a service.",
  "I inspect journalctl evidence instead of repeatedly restarting failed services.",
  "I check listening ports when a service exposes network functionality.",
  "I do not disable unfamiliar services without checking package ownership and dependencies.",
  "I preserve custom unit files and logs when a service may matter to forensics.",
  "I make narrow service changes instead of bulk disabling.",
  "I verify both systemd state and the real client-facing function after changes.",
];

const reflection = [
  "Why is a disabled service not necessarily stopped?",
  "Why can a static service still be important?",
  "What evidence would you collect before disabling an unfamiliar root-owned service?",
  "Why should reverse dependencies be checked before changing service state?",
  "How can a required network service be hardened without disabling it?",
  "Why is systemctl status alone not enough to prove a required service is functioning correctly?",
];

export default function LinuxServicesSystemdPage() {
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
              href="/cyberpatriot/linux/packages-repositories-software-review"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/processes-resource-review"
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
                Linux · Lesson 07
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Services & systemd
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Inspect Linux services, systemd units, startup behavior,
                dependencies, logs, process context, and network exposure before
                stopping or disabling anything.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Services provide the functions the operating system and
                applications depend on. Strong defensive administration is not
                about disabling the longest list of services. It is about
                understanding each service's role, reducing unnecessary exposure,
                and preserving required functionality.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core concepts</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Common states</span>
                  <span className="font-bold text-white">7</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Dependency-aware services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Learning objectives
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Understand what a service does before changing its state
          </h2>

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
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Service security is role security
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A required service should be secured, not automatically disabled.
              An unnecessary service should be removed from the attack surface
              only after its dependencies and mission impact are understood.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Availability risk
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              One systemctl command can break multiple functions
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Network managers, DNS resolvers, authentication services, SSH,
              databases, logging, and application backends can have hidden
              dependencies. Check the relationship graph before high-impact
              service changes.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            systemd fundamentals
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six concepts behind Linux service management
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coreConcepts.map((item) => (
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
            Unit states
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Running and enabled are different questions
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {stateGuide.map((item) => (
              <div
                key={item.state}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-base font-black text-cyan-200">
                  {item.state}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                  <p className="text-sm leading-6 text-slate-400">
                    {item.caution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Inspection first
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build the service inventory before hardening it
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {inspectionCommands.map((item) => (
              <div
                key={item.command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-bold text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Unit locations
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know where systemd configuration can come from
          </h2>

          <div className="mt-8 grid gap-4">
            {unitLocations.map((item) => (
              <div
                key={item.path}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.8fr_1fr_1.2fr]"
              >
                <code className="text-sm font-bold text-cyan-200">
                  {item.path}
                </code>
                <p className="text-sm leading-6 text-slate-300">
                  {item.purpose}
                </p>
                <p className="text-sm leading-6 text-slate-400">
                  {item.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Common required-service examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Service value depends on the scenario
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {requiredExamples.map((item) => (
              <div
                key={item.service}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-base font-black text-cyan-200">
                  {item.service}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.role}
                </p>
                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Dependencies
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.dependency}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Service classification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Required, unnecessary, misconfigured, suspicious, or unknown
          </h2>

          <div className="mt-8 grid gap-4">
            {classification.map((item) => (
              <div
                key={item.label}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.5fr_1.2fr_1fr]"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Evidence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.signs}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Evidence-based service reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Replace service-name guesses with dependency analysis
          </h2>

          <div className="mt-8 grid gap-5">
            {reasoningCases.map((item) => (
              <div
                key={item.finding}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-black text-white">{item.finding}</h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak response
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.weak}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Better reasoning
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.better}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Dependency review
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Ask what starts it and what needs it
            </h2>

            <div className="mt-6 grid gap-3">
              {dependencyChecks.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="font-black text-white">{item.question}</p>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Service evidence
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve context before cleanup
            </h2>

            <div className="mt-6 grid gap-3">
              {evidenceSources.map((item) => (
                <div
                  key={item.source}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.source}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.value}
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
            Controlled service actions
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Change state only after role and dependency review
          </h2>

          <div className="mt-8 grid gap-4">
            {controlledActions.map((item) => (
              <div
                key={item.goal}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.8fr_1fr_1.2fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Goal
                  </p>
                  <p className="mt-2 text-sm font-bold text-white">{item.goal}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Example
                  </p>
                  <code className="mt-2 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Caution
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.caution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-risk shortcuts
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Service changes that deserve extra caution
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highRiskShortcuts.map((item) => (
              <div
                key={item.shortcut}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <code className="text-sm font-black text-red-100">
                  {item.shortcut}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.risk}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Verification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Prove service state and real functionality
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {verification.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.check}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
            <p className="text-sm font-black text-emerald-200">
              Active is not the same as healthy
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              A service can show active while the application is misconfigured,
              blocked by the firewall, or failing from the client perspective.
              Test the actual scenario-required function.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Audit fictional Linux services without breaking dependencies
          </h2>

          <div className="mt-8 grid gap-3">
            {fictionalLab.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="font-black text-cyan-300">{item.step}</span>
                <p className="text-sm leading-7 text-slate-300">{item.task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Lesson checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Before moving on
            </h2>

            <div className="mt-6 grid gap-3">
              {checklist.map((item, index) => (
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

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
              <p className="text-sm font-black text-cyan-200">
                Carry this forward
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                A service should be judged by its role, dependencies, exposure,
                configuration, and evidence. Inspect first, change state
                deliberately, and prove the required function still works.
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

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux/packages-repositories-software-review"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/processes-resource-review"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lesson &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
