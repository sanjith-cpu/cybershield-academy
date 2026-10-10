import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Use core Linux command-line tools to inspect users, processes, services, files, permissions, packages, networking, and logs safely.",
  "Distinguish inspection commands from change commands so students know when they are observing versus modifying the system.",
  "Build short defensive command sequences that answer specific questions instead of running broad destructive commands.",
  "Interpret command output critically, including empty results, permission errors, symbolic links, truncated output, and stale information.",
  "Use shell features such as pipes, grep, sort, head, tail, and redirection without accidentally overwriting evidence.",
  "Apply verification commands after changes so the command line supports a complete defensive workflow rather than isolated actions.",
];

const commandPrinciples = [
  {
    title: "Inspect before modify",
    text:
      "Start with commands that reveal the current state. A good defender gathers context before changing accounts, services, files, packages, or firewall rules.",
  },
  {
    title: "Ask one question at a time",
    text:
      "Each command should answer a clear question: Which users exist? What is listening? Which service owns this process? What changed recently?",
  },
  {
    title: "Prefer narrow scope",
    text:
      "Target one account, one service, one directory, or one time range rather than scanning or changing the entire system without purpose.",
  },
  {
    title: "Read output carefully",
    text:
      "Blank output, permission errors, symbolic links, aliases, and command defaults all affect interpretation. Do not treat missing output as proof that nothing exists.",
  },
  {
    title: "Preserve evidence",
    text:
      "When a command reveals suspicious data, record or export it before removing files, stopping processes, or changing configurations.",
  },
  {
    title: "Verify after change",
    text:
      "Every modification should be followed by commands that confirm the intended result and check required functionality.",
  },
];

const shellTools = [
  {
    tool: "pwd",
    purpose:
      "Show the current working directory so you know where relative paths begin.",
    example: "pwd",
  },
  {
    tool: "ls",
    purpose:
      "List directory contents. Use -l for metadata and -a to include hidden entries.",
    example: "ls -la /etc/ssh",
  },
  {
    tool: "cat",
    purpose:
      "Print file contents. Best for short text files.",
    example: "cat /etc/os-release",
  },
  {
    tool: "less",
    purpose:
      "Page through long text without loading everything into the visible terminal at once.",
    example: "less /var/log/auth.log",
  },
  {
    tool: "head / tail",
    purpose:
      "Show the beginning or end of a file or command output.",
    example: "tail -n 50 /var/log/syslog",
  },
  {
    tool: "grep",
    purpose:
      "Search text for matching patterns.",
    example: "grep -i 'failed' /var/log/auth.log",
  },
  {
    tool: "sort / uniq",
    purpose:
      "Organize repeated text and count or remove duplicates.",
    example: "cut -d: -f7 /etc/passwd | sort | uniq -c",
  },
  {
    tool: "find",
    purpose:
      "Search the filesystem by path, type, owner, permissions, time, or other metadata.",
    example: "sudo find /etc -maxdepth 2 -type f -mtime -1 -ls",
  },
  {
    tool: "stat",
    purpose:
      "Show detailed file metadata such as owner, mode, size, and timestamps.",
    example: "stat /etc/ssh/sshd_config",
  },
  {
    tool: "file",
    purpose:
      "Identify the type of a file based on content and metadata.",
    example: "file /usr/local/bin/tool",
  },
  {
    tool: "readlink",
    purpose:
      "Resolve symbolic-link targets.",
    example: "readlink -f /etc/resolv.conf",
  },
  {
    tool: "namei",
    purpose:
      "Inspect permissions and ownership along every component of a path.",
    example: "namei -l /home/user/.ssh/authorized_keys",
  },
];

const userCommands = [
  {
    command: "getent passwd",
    question:
      "Which local and directory-backed user accounts are visible through the system's configured account sources?",
  },
  {
    command: "getent group",
    question:
      "Which groups are visible through the configured group sources?",
  },
  {
    command: "id username",
    question:
      "What UID, primary group, and supplementary groups belong to this user?",
  },
  {
    command: "groups username",
    question:
      "Which groups is this user a member of?",
  },
  {
    command: "sudo -l -U username",
    question:
      "What sudo privileges does this user have?",
  },
  {
    command: "passwd -S username",
    question:
      "What is the user's password state?",
  },
  {
    command: "chage -l username",
    question:
      "What password-aging and account-expiration settings apply to the user?",
  },
  {
    command: "lastlog",
    question:
      "What is the recorded last-login information for local accounts?",
  },
];

const processCommands = [
  {
    command: "ps aux",
    question:
      "Which processes are currently running, under which users, and with what resource usage?",
  },
  {
    command: "ps -ef --forest",
    question:
      "How are processes related by parent and child relationships?",
  },
  {
    command: "pstree -ap",
    question:
      "What does the process tree look like with arguments and PIDs?",
  },
  {
    command: "top",
    question:
      "Which processes are using the most CPU or memory right now?",
  },
  {
    command: "readlink -f /proc/PID/exe",
    question:
      "Which executable backs this process?",
  },
  {
    command: "tr '\\0' ' ' < /proc/PID/cmdline",
    question:
      "What command line launched this process?",
  },
  {
    command: "sudo lsof -p PID",
    question:
      "Which files and sockets are open in this process?",
  },
  {
    command: "ss -tulpn",
    question:
      "Which TCP and UDP sockets are listening, and which processes own them?",
  },
];

const serviceCommands = [
  {
    command: "systemctl --type=service --state=running",
    question:
      "Which systemd services are currently running?",
  },
  {
    command: "systemctl --failed",
    question:
      "Which systemd units are currently failed?",
  },
  {
    command: "systemctl status service-name",
    question:
      "What is the service's current state, recent logs, PID, and unit information?",
  },
  {
    command: "systemctl is-enabled service-name",
    question:
      "Will the service start automatically according to systemd enablement state?",
  },
  {
    command: "systemctl cat service-name",
    question:
      "Which unit file and drop-in overrides define the service?",
  },
  {
    command: "systemctl list-dependencies service-name",
    question:
      "Which units does this service depend on?",
  },
  {
    command: "journalctl -u service-name --since today",
    question:
      "What has the service logged today?",
  },
];

const filePermissionCommands = [
  {
    command: "ls -ld /path /path/to/file",
    question:
      "Who owns the directory and file, and what are the basic permissions?",
  },
  {
    command: "stat /path/to/file",
    question:
      "What detailed mode, owner, group, size, and timestamps apply?",
  },
  {
    command: "getfacl /path/to/file",
    question:
      "Do ACLs grant access beyond the standard owner/group/other mode bits?",
  },
  {
    command: "namei -l /path/to/file",
    question:
      "Are any parent directories writable or inaccessible in a way that changes the security picture?",
  },
  {
    command: "sudo find /home -xdev -type f -perm -0002 -ls",
    question:
      "Which files under /home are world-writable on this filesystem?",
  },
  {
    command: "sudo find / -xdev -type f -perm -4000 -ls 2>/dev/null",
    question:
      "Which files on the current filesystem have the setuid bit?",
  },
];

const packageCommands = [
  {
    command: "apt list --installed",
    question:
      "Which packages does APT report as installed?",
  },
  {
    command: "dpkg -l",
    question:
      "What is the Debian package database state?",
  },
  {
    command: "apt-cache policy package-name",
    question:
      "Which package version is installed and which repositories can provide it?",
  },
  {
    command: "apt show package-name",
    question:
      "What metadata describes this package?",
  },
  {
    command: "dpkg -S /path/to/file",
    question:
      "Which installed package owns this file?",
  },
  {
    command: "apt-mark showmanual",
    question:
      "Which packages are marked as manually installed?",
  },
  {
    command: "apt list --upgradable",
    question:
      "Which installed packages have newer candidate versions available?",
  },
];

const networkCommands = [
  {
    command: "ip link",
    question:
      "Which network interfaces exist and which are up?",
  },
  {
    command: "ip addr",
    question:
      "Which IPv4 and IPv6 addresses are assigned?",
  },
  {
    command: "ip route",
    question:
      "Which IPv4 routes and default gateway are active?",
  },
  {
    command: "ip -6 route",
    question:
      "Which IPv6 routes are active?",
  },
  {
    command: "ip neigh",
    question:
      "Which directly connected neighbors are in the cache?",
  },
  {
    command: "nmcli device status",
    question:
      "What device state does NetworkManager report?",
  },
  {
    command: "resolvectl status",
    question:
      "Which DNS servers and search domains are active when systemd-resolved is used?",
  },
  {
    command: "sudo ufw status verbose",
    question:
      "What host-firewall policy and rules are active?",
  },
];

const logCommands = [
  {
    command: "journalctl -b",
    question:
      "What happened during the current boot?",
  },
  {
    command: "journalctl --list-boots",
    question:
      "Which boot sessions are retained?",
  },
  {
    command: "journalctl -p warning..alert -b",
    question:
      "Which warning-or-higher events occurred this boot?",
  },
  {
    command: "journalctl -u service-name --since today",
    question:
      "What did this service log today?",
  },
  {
    command: "sudo grep -iE 'failed|invalid|accepted|sudo' /var/log/auth.log | tail -n 100",
    question:
      "Which recent authentication-related events match these keywords?",
  },
  {
    command: "sudo tail -n 100 /var/log/apt/history.log",
    question:
      "Which recent APT transactions occurred?",
  },
];

const pipelineConcepts = [
  {
    symbol: "|",
    name: "Pipe",
    meaning:
      "Send the output of one command into the input of another.",
    example: "ps aux | grep ssh",
  },
  {
    symbol: ">",
    name: "Overwrite redirection",
    meaning:
      "Write command output to a file, replacing existing contents.",
    example: "command > output.txt",
  },
  {
    symbol: ">>",
    name: "Append redirection",
    meaning:
      "Add command output to the end of a file.",
    example: "command >> notes.txt",
  },
  {
    symbol: "2>",
    name: "Standard-error redirection",
    meaning:
      "Redirect error output separately.",
    example: "find / -name target 2>/dev/null",
  },
  {
    symbol: "&&",
    name: "Run next on success",
    meaning:
      "Run the next command only if the previous command succeeds.",
    example: "sudo sshd -t && sudo systemctl reload ssh",
  },
  {
    symbol: "||",
    name: "Run next on failure",
    meaning:
      "Run the next command only if the previous command fails.",
    example: "command || echo 'Command failed'",
  },
];

const defensiveSequences = [
  {
    goal: "Investigate an unknown listening port",
    commands: [
      "ss -tulpn",
      "ps -fp PID",
      "readlink -f /proc/PID/exe",
      "tr '\\0' ' ' < /proc/PID/cmdline",
      "dpkg -S /path/to/executable",
      "systemctl status suspected-service",
    ],
    reasoning:
      "Move from socket to process, executable, package, and service context before deciding whether the listener is required.",
  },
  {
    goal: "Review an unfamiliar user",
    commands: [
      "getent passwd username",
      "id username",
      "groups username",
      "sudo -l -U username",
      "passwd -S username",
      "chage -l username",
      "lastlog -u username",
    ],
    reasoning:
      "Build the user's identity, privilege, password, aging, and login picture before changing the account.",
  },
  {
    goal: "Review a suspicious startup file",
    commands: [
      "stat /path/to/file",
      "file /path/to/file",
      "readlink -f /path/to/file",
      "namei -l /path/to/file",
      "dpkg -S /path/to/file",
      "sed -n '1,220p' /path/to/file",
    ],
    reasoning:
      "Preserve metadata, understand path security, determine package ownership, and read contents before disabling or removing it.",
  },
  {
    goal: "Troubleshoot a failing service",
    commands: [
      "systemctl status service-name",
      "journalctl -u service-name --since today",
      "systemctl cat service-name",
      "systemctl list-dependencies service-name",
      "service-specific-config-test",
    ],
    reasoning:
      "Use service state, logs, effective unit configuration, dependencies, and supported validation before restart.",
  },
  {
    goal: "Investigate a DNS complaint",
    commands: [
      "ip addr",
      "ip route",
      "resolvectl status",
      "readlink -f /etc/resolv.conf",
      "cat /etc/resolv.conf",
      "getent hosts example.com",
    ],
    reasoning:
      "Separate interface and routing health from resolver configuration and actual name-resolution behavior.",
  },
];

const interpretationTraps = [
  {
    trap: "grep returned nothing",
    meaning:
      "The pattern was not found in that input, but the data may exist elsewhere, use different capitalization, be compressed, or require permission.",
  },
  {
    trap: "Permission denied",
    meaning:
      "The command may lack authorization. Do not conclude the file or directory does not exist.",
  },
  {
    trap: "Command not found",
    meaning:
      "The package may be absent, PATH may be different, or the tool may have another location.",
  },
  {
    trap: "Output is truncated",
    meaning:
      "Terminal width, ps defaults, pager behavior, or application output formatting may hide part of the evidence.",
  },
  {
    trap: "A process name looks familiar",
    meaning:
      "Names can be misleading. Confirm executable path, command line, owner, parent, package, and service context.",
  },
  {
    trap: "A file has a recent timestamp",
    meaning:
      "Recent modification can result from updates, legitimate administration, configuration management, or suspicious activity.",
  },
];

const changeCommands = [
  {
    command: "sudo systemctl stop service-name",
    effect:
      "Stops a service.",
    caution:
      "Confirm the service is not required and preserve evidence first.",
  },
  {
    command: "sudo systemctl disable service-name",
    effect:
      "Changes whether a service starts automatically.",
    caution:
      "Does not necessarily stop the currently running service.",
  },
  {
    command: "sudo ufw delete RULE_NUMBER",
    effect:
      "Removes one firewall rule.",
    caution:
      "Re-check numbered rules immediately before deletion because numbering can change.",
  },
  {
    command: "sudo gpasswd -d username groupname",
    effect:
      "Removes a user from a supplementary group.",
    caution:
      "Confirm the user does not require the privilege for a scenario-defined role.",
  },
  {
    command: "sudo chmod MODE /path/to/file",
    effect:
      "Changes file permissions.",
    caution:
      "Use the narrowest justified mode and verify service access afterward.",
  },
  {
    command: "sudo chown OWNER:GROUP /path/to/file",
    effect:
      "Changes ownership.",
    caution:
      "Do not use broad recursive ownership changes without understanding application expectations.",
  },
];

const highRiskShortcuts = [
  {
    shortcut: "sudo rm -rf as a cleanup habit",
    risk:
      "Recursive forced deletion can destroy the operating system, evidence, or required application data.",
  },
  {
    shortcut: "chmod -R 777",
    risk:
      "Creates broad write access and can introduce privilege-escalation paths.",
  },
  {
    shortcut: "kill -9 first",
    risk:
      "Forces immediate process termination, prevents graceful cleanup, and can destroy useful runtime evidence.",
  },
  {
    shortcut: "apt remove based only on package name",
    risk:
      "Can remove required software and dependencies without understanding system impact.",
  },
  {
    shortcut: "find / with destructive -exec actions",
    risk:
      "A broad search combined with automatic deletion or chmod can affect huge portions of the system.",
  },
  {
    shortcut: "Redirecting evidence with > into an existing file",
    risk:
      "Overwrite redirection destroys the previous contents of the destination file.",
  },
];

const verificationQuestions = [
  {
    area: "Users",
    question:
      "Do required accounts and group memberships still match the scenario?",
  },
  {
    area: "Services",
    question:
      "Are required services running and unnecessary confirmed services stopped or disabled as intended?",
  },
  {
    area: "Files",
    question:
      "Do ownership, permissions, ACLs, and parent-directory permissions match the intended state?",
  },
  {
    area: "Packages",
    question:
      "Are required packages present and unintended software changes documented?",
  },
  {
    area: "Network",
    question:
      "Are required interfaces, routes, DNS, firewall rules, and listeners still functional?",
  },
  {
    area: "Logs",
    question:
      "Do post-change logs show successful operation without new errors or unexpected authentication activity?",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Read the fictional scenario: SSH and an HTTPS application are required, Morgan is the only administrator, and an unknown process is listening on TCP 9090.",
  },
  {
    step: "02",
    task:
      "Use inspection commands only to review users, sudo access, running services, listening ports, routes, UFW rules, and current-boot logs.",
  },
  {
    step: "03",
    task:
      "Trace the TCP 9090 listener from socket to PID, process owner, executable path, command line, package ownership, and service unit.",
  },
  {
    step: "04",
    task:
      "Preserve the relevant command outputs and service logs before making any change to the unknown listener.",
  },
  {
    step: "05",
    task:
      "Classify the listener as Required, Unnecessary, Suspicious, or Unknown based on scenario and evidence rather than port number alone.",
  },
  {
    step: "06",
    task:
      "If the lab evidence confirms the service is unauthorized, stop and disable only that service using controlled commands.",
  },
  {
    step: "07",
    task:
      "Verify SSH, HTTPS, UFW, service state, listening sockets, user privileges, and post-change logs.",
  },
];

const checklist = [
  "I know which commands are inspection-only and which commands modify the system.",
  "I ask a specific defensive question before choosing a command.",
  "I use narrow paths, users, services, and time ranges instead of broad destructive scope.",
  "I can trace a listening port to a process, executable, package, and service.",
  "I can review a user's identity, groups, sudo privileges, password state, and login history.",
  "I can inspect file ownership, permissions, ACLs, and parent-directory security.",
  "I can review interfaces, routes, DNS, firewall rules, and listening services.",
  "I understand pipes and redirection and know that > overwrites the destination.",
  "I preserve suspicious evidence before stopping services or deleting files.",
  "I verify the intended state after every meaningful change.",
];

const reflection = [
  "Why is ss -tulpn only the first step when investigating an unknown listening port?",
  "Why can grep returning no output be misleading?",
  "What is the security difference between > and >> redirection?",
  "Why should kill -9 usually not be the first process-control action?",
  "Why is package ownership useful but not sufficient to prove a file is safe?",
  "What commands would you use to verify that a defensive change did not break required SSH or HTTPS access?",
];

export default function LinuxDefensiveCommandLinePage() {
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
              href="/cyberpatriot/linux/configuration-files-secure-editing"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/ubuntu-vs-linux-mint-differences"
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
                Linux · Lesson 16
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Linux Defensive Command Line
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Use the Linux command line as a defensive investigation tool:
                inspect users, processes, services, files, packages, networking,
                and logs before making controlled, verifiable changes.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Good command-line work is not about memorizing hundreds of
                commands. It is about asking the right question, choosing the
                narrowest command that answers it, preserving evidence, and
                verifying the result.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Command principles</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core shell tools</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Defensive sequences</span>
                  <span className="font-bold text-white">5</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Evidence-driven command use</span>
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
            Use commands to answer defensive questions safely
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
              Commands should answer questions, not replace reasoning
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The command line is strongest when you already know what you are
              trying to learn. Start with a question, gather evidence, then
              choose the smallest justified change.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Safety boundary
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              A short command can have a huge impact
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Commands such as rm, chmod, chown, kill, apt remove, systemctl,
              and firewall edits can change the system immediately. Understand
              scope and rollback before execution.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Command-line principles
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six habits for defensive terminal work
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {commandPrinciples.map((item) => (
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
            Core shell tools
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build strong inspection habits with simple commands
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {shellTools.map((item) => (
              <div
                key={item.tool}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.tool}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <code className="mt-4 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                  {item.example}
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CommandQuestionSection eyebrow="Users & privilege" title="Commands for account review" items={userCommands} />
      <CommandQuestionSection eyebrow="Processes & sockets" title="Commands for runtime investigation" items={processCommands} />
      <CommandQuestionSection eyebrow="Services" title="Commands for systemd service review" items={serviceCommands} />
      <CommandQuestionSection eyebrow="Files & permissions" title="Commands for ownership and access review" items={filePermissionCommands} />
      <CommandQuestionSection eyebrow="Packages" title="Commands for software review" items={packageCommands} />
      <CommandQuestionSection eyebrow="Networking" title="Commands for interfaces, routes, DNS, and firewall review" items={networkCommands} />
      <CommandQuestionSection eyebrow="Logs" title="Commands for system evidence" items={logCommands} />

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Pipes & redirection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Combine commands without overwriting evidence accidentally
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pipelineConcepts.map((item) => (
              <div
                key={item.symbol}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-2xl font-black text-cyan-200">
                  {item.symbol}
                </code>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
                <code className="mt-4 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                  {item.example}
                </code>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-red-400/20 bg-red-400/5 p-5">
            <p className="text-sm font-black text-red-100">
              Be careful with &gt;
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Single greater-than redirection overwrites the destination file.
              If that file already contains notes or evidence, its prior contents
              are replaced.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Defensive sequences
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Chain small commands into an investigation
          </h2>

          <div className="mt-8 grid gap-5">
            {defensiveSequences.map((item) => (
              <div
                key={item.goal}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.goal}</h3>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {item.commands.map((command, index) => (
                    <div
                      key={`${item.goal}-${command}`}
                      className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4"
                    >
                      <span className="font-black text-cyan-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <code className="overflow-x-auto text-sm text-cyan-200">
                        {command}
                      </code>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-sm leading-7 text-slate-300">
                    {item.reasoning}
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
            Interpretation traps
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Command output can be incomplete or misleading
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {interpretationTraps.map((item) => (
              <div
                key={item.trap}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.trap}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Change commands
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know when the command stops observing and starts modifying
          </h2>

          <div className="mt-8 grid gap-4">
            {changeCommands.map((item) => (
              <div
                key={item.command}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[1fr_0.85fr_1.15fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Command
                  </p>
                  <code className="mt-2 block overflow-x-auto text-sm text-cyan-200">
                    {item.command}
                  </code>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Effect
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.effect}
                  </p>
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
            Commands that can cause major damage when used casually
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highRiskShortcuts.map((item) => (
              <div
                key={item.shortcut}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.shortcut}
                </h3>
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
            End every command-line change with proof
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {verificationQuestions.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.question}
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
            Investigate a fictional unknown listener from the terminal
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
                Defensive command-line work follows a simple discipline: ask a
                precise question, inspect narrowly, preserve important evidence,
                make the smallest justified change, and verify the real system
                function afterward.
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
              href="/cyberpatriot/linux/configuration-files-secure-editing"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/ubuntu-vs-linux-mint-differences"
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

function CommandQuestionSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { command: string; question: string }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.command}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
            >
              <code className="block overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-bold text-cyan-200">
                {item.command}
              </code>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.question}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
