import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how Linux processes, PIDs, parent-child relationships, users, executables, and system resources fit together.",
  "Use ps, top, free, uptime, lsof, and /proc data to inspect activity before stopping anything.",
  "Distinguish a process from a service and understand why not every suspicious-looking process is systemd-managed.",
  "Identify evidence that helps classify a process as required, normal, resource-heavy, misconfigured, suspicious, or unknown.",
  "Trace a running process back to its executable, user, parent, package, network sockets, files, and service context.",
  "Terminate or contain a process only when the evidence and scenario justify it, then verify required functionality.",
];

const coreConcepts = [
  {
    title: "PID",
    text:
      "Every running process has a process identifier. PIDs are temporary runtime identifiers and can be reused after a process exits.",
  },
  {
    title: "PPID",
    text:
      "The parent process identifier links a process to the process that created it. Parent-child relationships can help explain how an application or suspicious process started.",
  },
  {
    title: "User context",
    text:
      "Processes run under a user identity. The account affects file access, privilege, environment, and the impact of the process.",
  },
  {
    title: "Executable",
    text:
      "A process executes code from an executable or interpreter. The command shown by ps is useful, but the actual executable path and package origin may provide stronger evidence.",
  },
  {
    title: "Resources",
    text:
      "CPU, memory, open files, sockets, and I/O can reveal performance problems or unusual behavior, but high usage by itself does not prove malicious activity.",
  },
  {
    title: "Lifecycle",
    text:
      "Processes start, run, sleep, stop, become zombies, or exit. Runtime state is evidence about behavior, not a complete security verdict.",
  },
];

const processStates = [
  {
    state: "R",
    meaning:
      "Running or runnable on the CPU.",
    caution:
      "A process can briefly appear in R during normal execution. High CPU over time matters more than one snapshot.",
  },
  {
    state: "S",
    meaning:
      "Interruptible sleep, commonly waiting for an event.",
    caution:
      "This is very common and usually normal.",
  },
  {
    state: "D",
    meaning:
      "Uninterruptible sleep, often waiting on I/O.",
    caution:
      "Persistent D state can indicate storage or device problems. Investigate before forcing actions.",
  },
  {
    state: "T",
    meaning:
      "Stopped or traced.",
    caution:
      "Could be caused by job control, debugging, or another signal. Context matters.",
  },
  {
    state: "Z",
    meaning:
      "Zombie process: the process exited but its parent has not collected the exit status.",
    caution:
      "The zombie itself consumes little memory, but repeated zombies can reveal a parent-process problem.",
  },
];

const inspectionCommands = [
  {
    command: "ps aux",
    purpose:
      "Show a broad process list with user, PID, CPU, memory, start time, and command information.",
  },
  {
    command: "ps -eo user,pid,ppid,stat,lstart,cmd --sort=user",
    purpose:
      "Show user, PID, parent PID, process state, start time, and command in a structured format.",
  },
  {
    command: "ps -ef --forest",
    purpose:
      "Display process relationships in a tree-like format.",
  },
  {
    command: "pstree -ap 2>/dev/null",
    purpose:
      "Show parent-child process relationships with PIDs and arguments when pstree is installed.",
  },
  {
    command: "top",
    purpose:
      "Interactively inspect CPU, memory, load, and running processes.",
  },
  {
    command: "uptime",
    purpose:
      "Show how long the system has been running and recent load averages.",
  },
  {
    command: "free -h",
    purpose:
      "Show memory and swap usage in human-readable form.",
  },
  {
    command: "sudo lsof -p PID",
    purpose:
      "Show files and sockets opened by one process when lsof is installed.",
  },
  {
    command: "readlink -f /proc/PID/exe",
    purpose:
      "Resolve the executable associated with a running process.",
  },
  {
    command: "tr '\\0' ' ' < /proc/PID/cmdline",
    purpose:
      "Display the process command line directly from /proc.",
  },
  {
    command: "cat /proc/PID/status",
    purpose:
      "Inspect process status information such as UIDs, GIDs, memory, state, and capabilities-related fields.",
  },
  {
    command: "ss -tulpn",
    purpose:
      "Correlate listening network sockets with processes where permissions allow.",
  },
];

const evidenceMap = [
  {
    question: "Who owns the process?",
    source: "ps / /proc/PID/status",
    value:
      "User and group context can show whether the process runs as root, a service account, or a normal user.",
  },
  {
    question: "What started it?",
    source: "PPID, ps --forest, pstree",
    value:
      "Parent relationships can connect a process to systemd, a shell, cron, a script, an application, or another process.",
  },
  {
    question: "What code is running?",
    source: "/proc/PID/exe",
    value:
      "Resolving the executable helps distinguish the actual binary from a misleading command name.",
  },
  {
    question: "What arguments were used?",
    source: "/proc/PID/cmdline",
    value:
      "Arguments can reveal configuration paths, network targets, file locations, or application mode.",
  },
  {
    question: "What files are open?",
    source: "lsof",
    value:
      "Open files can reveal configuration, logs, data, working directories, deleted-but-open files, and sockets.",
  },
  {
    question: "What network activity is exposed?",
    source: "ss / lsof",
    value:
      "Listening ports and established connections can connect a process to a required or unexpected network function.",
  },
  {
    question: "What package owns the executable?",
    source: "dpkg -S",
    value:
      "Package ownership can help determine whether the executable belongs to an installed package or was placed manually.",
  },
  {
    question: "Is it tied to a service?",
    source: "systemctl status / systemctl show",
    value:
      "systemd context can reveal restart behavior, service user, unit configuration, and logs.",
  },
];

const classification = [
  {
    label: "Required",
    signs:
      "Supports a scenario-required application, service, user workflow, network function, or system component.",
    action:
      "Preserve it and secure the surrounding configuration rather than killing the process.",
  },
  {
    label: "Normal",
    signs:
      "Matches expected desktop, system, package, or service behavior and has no conflicting evidence.",
    action:
      "Leave it alone unless there is a specific hardening or performance reason to change it.",
  },
  {
    label: "Resource-heavy",
    signs:
      "Consumes unusual CPU, memory, file descriptors, or I/O but has a legitimate role.",
    action:
      "Troubleshoot the cause, logs, workload, and configuration instead of assuming malicious activity.",
  },
  {
    label: "Misconfigured",
    signs:
      "Required process is running with the wrong user, unexpected arguments, bad permissions, wrong port, or repeated failure/restart behavior.",
    action:
      "Fix the root configuration issue and verify the required function.",
  },
  {
    label: "Suspicious",
    signs:
      "Unexpected executable path, misleading name, unexplained root privilege, odd parent, strange network exposure, deleted executable, or evidence of persistence.",
    action:
      "Preserve process, command-line, executable, socket, open-file, parent, and log evidence before containment.",
  },
  {
    label: "Unknown",
    signs:
      "Purpose, package, user, parent, executable, or scenario relationship is not yet clear.",
    action:
      "Investigate further instead of killing it just because the name is unfamiliar.",
  },
];

const reasoningCases = [
  {
    finding: "A root process is using 90% CPU",
    weak:
      "Kill it because high CPU plus root is suspicious.",
    better:
      "Identify the executable, parent, service, package, logs, and workload. A legitimate update, backup, compression, indexing, or application task may temporarily use high CPU.",
  },
  {
    finding: "A process name resembles a system service",
    weak:
      "Trust the name because it looks legitimate.",
    better:
      "Resolve /proc/PID/exe, inspect the package owner, parent, user, and unit context. Names can be changed or misleading.",
  },
  {
    finding: "A process runs from /tmp",
    weak:
      "Immediately kill and delete it.",
    better:
      "Treat the location as a high-priority clue. Preserve executable metadata, command line, parent, open files, network sockets, and logs before remediation.",
  },
  {
    finding: "A process has no obvious systemd service",
    weak:
      "It should not be running.",
    better:
      "Processes can start from user sessions, cron, systemd timers, scripts, desktop autostart, containers, shells, or applications.",
  },
  {
    finding: "A process is listening on a port",
    weak:
      "Kill the process because open ports are dangerous.",
    better:
      "Determine whether the port and service are required. If required, reduce exposure through configuration or firewall rather than removing the function.",
  },
  {
    finding: "A process executable shows '(deleted)'",
    weak:
      "Ignore it because the file is already gone.",
    better:
      "Preserve evidence. A process can continue running from an executable that has been deleted or replaced on disk, which can be important for forensics or update troubleshooting.",
  },
];

const procPaths = [
  {
    path: "/proc/PID/exe",
    meaning:
      "Symbolic link to the process executable.",
  },
  {
    path: "/proc/PID/cmdline",
    meaning:
      "Raw command-line arguments separated by null characters.",
  },
  {
    path: "/proc/PID/environ",
    meaning:
      "Process environment variables. May contain sensitive data, so inspect only when authorized and necessary.",
  },
  {
    path: "/proc/PID/cwd",
    meaning:
      "Symbolic link to the current working directory.",
  },
  {
    path: "/proc/PID/fd/",
    meaning:
      "Open file descriptors including files, pipes, sockets, and devices.",
  },
  {
    path: "/proc/PID/status",
    meaning:
      "Human-readable runtime status including identity and memory information.",
  },
  {
    path: "/proc/PID/maps",
    meaning:
      "Memory mappings showing loaded libraries and mapped files.",
  },
];

const resourceReview = [
  {
    area: "CPU",
    commands: ["top", "ps aux --sort=-%cpu | head"],
    question:
      "Is one process consuming sustained CPU, and is that usage expected for its workload?",
  },
  {
    area: "Memory",
    commands: ["free -h", "ps aux --sort=-%mem | head"],
    question:
      "Is memory pressure real, and which processes are using the most memory?",
  },
  {
    area: "Load",
    commands: ["uptime"],
    question:
      "Are load averages elevated relative to the system's CPU count and current workload?",
  },
  {
    area: "Open files",
    commands: ["sudo lsof -p PID"],
    question:
      "What configuration, data, logs, devices, or sockets does the process currently use?",
  },
  {
    area: "Network",
    commands: ["ss -tulpn"],
    question:
      "Does the process listen on or connect through network ports that match the scenario?",
  },
  {
    area: "Storage / I/O",
    commands: ["df -h", "du -sh /relevant/path"],
    question:
      "Could low disk space or rapidly growing files be causing the process or service problem?",
  },
];

const controlledActions = [
  {
    goal: "Ask a process to terminate normally",
    command: "sudo kill PID",
    caution:
      "Default SIGTERM allows the process to clean up. Use only after confirming the process should stop.",
  },
  {
    goal: "Terminate by service",
    command: "sudo systemctl stop service-name",
    caution:
      "Prefer service-level control when systemd manages the required lifecycle and you understand dependencies.",
  },
  {
    goal: "Force-kill as a last resort",
    command: "sudo kill -KILL PID",
    caution:
      "SIGKILL prevents cleanup and cannot be handled by the process. Use only when justified and after evidence is preserved.",
  },
  {
    goal: "Pause a process",
    command: "sudo kill -STOP PID",
    caution:
      "Temporarily suspends execution but can freeze dependent workflows. Use only for controlled investigation.",
  },
  {
    goal: "Resume a stopped process",
    command: "sudo kill -CONT PID",
    caution:
      "Use when you intentionally suspended the process and are ready to restore execution.",
  },
  {
    goal: "Lower CPU scheduling priority",
    command: "sudo renice 10 -p PID",
    caution:
      "Changes scheduling priority rather than solving the root cause. Appropriate only for a known legitimate workload.",
  },
];

const highRiskShortcuts = [
  {
    shortcut: "kill -9 every unfamiliar process",
    risk:
      "Can terminate required applications, corrupt in-progress work, destroy runtime evidence, and trigger automatic restart mechanisms.",
  },
  {
    shortcut: "Trusting only the process name",
    risk:
      "Names can be generic, truncated, changed, or deliberately misleading. Resolve the executable and package origin.",
  },
  {
    shortcut: "Treating high CPU as malicious",
    risk:
      "Legitimate updates, backups, scans, builds, compression, and indexing can create high resource use.",
  },
  {
    shortcut: "Ignoring parent-child relationships",
    risk:
      "You may kill a child repeatedly while the parent, service, cron job, or persistence mechanism immediately recreates it.",
  },
  {
    shortcut: "Deleting an executable before collecting evidence",
    risk:
      "Removes file metadata and can make it harder to understand the running process or answer forensic questions.",
  },
  {
    shortcut: "Stopping network-facing processes without scenario review",
    risk:
      "Can remove required SSH, web, DNS, database, or application functionality.",
  },
];

const evidenceSources = [
  {
    source: "Process list",
    command: "ps -eo user,pid,ppid,stat,lstart,cmd",
    value:
      "Shows runtime identity, parentage, state, start time, and command line.",
  },
  {
    source: "Executable path",
    command: "readlink -f /proc/PID/exe",
    value:
      "Shows the executable backing the process when accessible.",
  },
  {
    source: "Command line",
    command: "tr '\\0' ' ' < /proc/PID/cmdline",
    value:
      "Shows process arguments that can reveal configuration and runtime behavior.",
  },
  {
    source: "Open files",
    command: "sudo lsof -p PID",
    value:
      "Shows files, sockets, pipes, and deleted-but-open objects used by the process.",
  },
  {
    source: "Service logs",
    command: "journalctl -u service-name",
    value:
      "Provides service-specific events when systemd manages the process.",
  },
  {
    source: "Package ownership",
    command: "dpkg -S /path/to/executable",
    value:
      "Shows whether an executable belongs to an installed Debian package.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Read the fictional scenario: SSH and an internal web application are required; a scheduled backup job runs nightly; one unknown process named updaterd is consuming CPU and listening on a high port.",
  },
  {
    step: "02",
    task:
      "Use ps, top, pstree, and /proc to record updaterd's PID, PPID, user, start time, executable path, command line, and resource use.",
  },
  {
    step: "03",
    task:
      "Use lsof, ss, dpkg -S, and systemctl to determine whether the process is package-managed, service-managed, and network-facing.",
  },
  {
    step: "04",
    task:
      "Check the parent process and persistence sources before killing anything so you understand how updaterd started.",
  },
  {
    step: "05",
    task:
      "Classify the backup process as Required, the web and SSH processes as Required, and updaterd as Investigate until package, executable, parent, and log evidence are clear.",
  },
  {
    step: "06",
    task:
      "If updaterd is confirmed unauthorized in the fictional lab, preserve evidence first and contain it using the least disruptive process or service control.",
  },
  {
    step: "07",
    task:
      "Verify SSH, the web application, backup scheduling, system load, network exposure, and logs after remediation.",
  },
];

const verification = [
  {
    area: "Process state",
    check:
      "Re-run ps or pstree and confirm the intended process is running, stopped, or gone.",
  },
  {
    area: "Parent / persistence",
    check:
      "Confirm the process does not immediately respawn from a service, timer, cron job, shell, or other parent mechanism unless that behavior is expected.",
  },
  {
    area: "Resource usage",
    check:
      "Review CPU, memory, and load again to confirm the resource issue changed as expected.",
  },
  {
    area: "Network exposure",
    check:
      "Re-run ss -tulpn and confirm required ports remain available while unnecessary exposure is reduced.",
  },
  {
    area: "Required function",
    check:
      "Test SSH, web, backup, desktop, or other scenario-required functions that may depend on the affected process.",
  },
  {
    area: "Evidence",
    check:
      "Confirm command lines, executable metadata, logs, process relationships, and other useful evidence were preserved before destructive action.",
  },
];

const checklist = [
  "I can explain PID, PPID, process user, executable, and process state.",
  "I know a process is not the same thing as a service.",
  "I can use ps, pstree, top, uptime, free, lsof, ss, and /proc to investigate runtime activity.",
  "I resolve the executable path instead of trusting the displayed process name alone.",
  "I check parent-child relationships before killing a process.",
  "I investigate package ownership and service context when possible.",
  "I do not classify high CPU or root ownership as malicious by itself.",
  "I preserve process evidence before destructive containment.",
  "I prefer graceful termination or service-level control before SIGKILL when appropriate.",
  "I verify required functionality, network exposure, and resource state after changes.",
];

const reflection = [
  "Why can a process name be misleading during investigation?",
  "Why is the parent process important when a process keeps returning after termination?",
  "What evidence would you collect before killing an unfamiliar root-owned process?",
  "Why does high CPU use not prove malicious activity?",
  "When is systemctl stop better than kill PID?",
  "What should you verify after terminating a network-facing process?",
];

export default function LinuxProcessesResourceReviewPage() {
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
              href="/cyberpatriot/linux/services-systemd"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/ssh-remote-access-security"
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
                Linux · Lesson 08
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Processes & Resource Review
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Investigate Linux processes using identity, parentage,
                executables, resources, open files, sockets, packages, and
                service context before deciding what should stay, stop, or be
                contained.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Process review is runtime forensics. The objective is not to kill
                anything that looks unfamiliar. It is to understand what is
                running, why it started, what it touches, what depends on it, and
                whether the scenario requires it.
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
                  <span>Common process states</span>
                  <span className="font-bold text-white">5</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Evidence-based process review</span>
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
            Understand runtime behavior before you terminate it
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
              A process is a runtime fact, not a verdict
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A process name, CPU percentage, or user account can be a useful
              clue, but no single field proves whether a process is required or
              malicious. Build the decision from multiple sources.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Investigation risk
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Killing first can destroy both function and evidence
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A process may support a required application or contain valuable
              runtime evidence. Preserve the executable path, command line,
              parent, sockets, files, and logs before destructive containment.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Process fundamentals
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six concepts behind runtime activity
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
            Process states
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Runtime state gives context, not a conclusion
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {processStates.map((item) => (
              <div
                key={item.state}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-xl font-black text-cyan-200">
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
            Build a runtime picture before taking action
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
            Evidence map
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Ask a different question of each data source
          </h2>

          <div className="mt-8 grid gap-4">
            {evidenceMap.map((item) => (
              <div
                key={item.question}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.8fr_0.8fr_1.4fr]"
              >
                <h3 className="text-lg font-black text-white">
                  {item.question}
                </h3>
                <code className="text-sm text-cyan-200">{item.source}</code>
                <p className="text-sm leading-6 text-slate-400">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            /proc
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Runtime evidence directly from the kernel
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {procPaths.map((item) => (
              <div
                key={item.path}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-base font-black text-cyan-200">
                  {item.path}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Some /proc data can be sensitive
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Environment variables and command-line arguments can contain
              credentials, tokens, or private paths. Inspect only what is needed
              for authorized defensive work and avoid exposing sensitive values.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Process classification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Required, normal, resource-heavy, misconfigured, suspicious, or unknown
          </h2>

          <div className="mt-8 grid gap-4">
            {classification.map((item) => (
              <div
                key={item.label}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.55fr_1.2fr_1fr]"
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
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Replace process-name guesses with runtime analysis
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Resource review
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Performance data helps explain process behavior
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {resourceReview.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <div className="mt-4 grid gap-2">
                  {item.commands.map((command) => (
                    <code
                      key={command}
                      className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200"
                    >
                      {command}
                    </code>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.question}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <p className="text-sm font-black text-cyan-200">
              One snapshot is not a trend
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              CPU and memory usage change quickly. A process that spikes during
              startup or backup activity may be normal. Look for sustained,
              unexplained behavior and correlate it with logs and workload.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Process evidence
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve runtime context before containment
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

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Controlled process actions
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Use the least destructive control that solves the problem
            </h2>

            <div className="mt-6 grid gap-3">
              {controlledActions.map((item) => (
                <div
                  key={item.goal}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.goal}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.caution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-risk shortcuts
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Process-response mistakes that can destroy evidence or function
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
            Prove the runtime state after containment or troubleshooting
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Investigate a fictional high-resource process
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
                Process review is about identity, parentage, executable origin,
                resource use, sockets, files, and scenario role. Preserve
                evidence, choose the least destructive response, and verify the
                system still performs its required functions.
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
              href="/cyberpatriot/linux/services-systemd"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/ssh-remote-access-security"
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
