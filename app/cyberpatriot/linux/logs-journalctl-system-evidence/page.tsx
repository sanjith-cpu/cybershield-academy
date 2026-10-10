import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain the difference between the systemd journal, traditional log files, application logs, and authentication records.",
  "Use journalctl filters to narrow evidence by service, boot, time, priority, user, and executable.",
  "Preserve timestamps, source context, and file metadata before modifying or rotating logs.",
  "Correlate system logs with services, users, processes, network activity, and configuration changes.",
  "Recognize common signs of tampering, gaps, repeated failures, and suspicious authentication activity without over-interpreting one event.",
  "Build a concise evidence timeline that supports defensive decisions and post-change verification.",
];

const coreConcepts = [
  {
    title: "Journal",
    text:
      "systemd-journald collects structured event records from the kernel, services, user sessions, and other system components.",
  },
  {
    title: "Traditional logs",
    text:
      "Many Ubuntu-family systems also use files under /var/log such as auth.log, syslog, apt history, and application-specific logs.",
  },
  {
    title: "Timestamp",
    text:
      "Time is essential for correlating events, but system clock changes, time zones, log rotation, and delayed writes can complicate interpretation.",
  },
  {
    title: "Source",
    text:
      "A log record is stronger when you know which service, process, executable, unit, user, or kernel component produced it.",
  },
  {
    title: "Retention",
    text:
      "Logs may be rotated, compressed, stored only in memory, or limited by size. Missing older logs do not automatically prove tampering.",
  },
  {
    title: "Correlation",
    text:
      "One event rarely tells the whole story. Strong defensive analysis connects logs with users, processes, services, files, packages, and network evidence.",
  },
];

const importantPaths = [
  {
    path: "/var/log/auth.log",
    purpose:
      "Common Ubuntu-family authentication log containing SSH, sudo, login, and related security events.",
    caution:
      "Availability depends on logging configuration. Do not assume it exists on every image.",
  },
  {
    path: "/var/log/syslog",
    purpose:
      "General system log on systems using rsyslog or similar traditional logging.",
    caution:
      "Some events may instead be visible only through the journal.",
  },
  {
    path: "/var/log/kern.log",
    purpose:
      "Kernel-related events on systems configured to write them separately.",
    caution:
      "journalctl -k may provide the same or broader evidence depending on configuration.",
  },
  {
    path: "/var/log/apt/history.log",
    purpose:
      "APT transaction history showing package install, upgrade, and removal activity.",
    caution:
      "Use together with dpkg logs and current package state.",
  },
  {
    path: "/var/log/dpkg.log",
    purpose:
      "Detailed package-management activity recorded by dpkg.",
    caution:
      "Package events are not the same thing as user intent; correlate with time and administrator activity.",
  },
  {
    path: "/var/log/ufw.log",
    purpose:
      "Firewall events where UFW logging is configured to write here.",
    caution:
      "UFW records may instead appear in kernel or journal sources depending on the system.",
  },
  {
    path: "/var/log/",
    purpose:
      "Main directory for traditional system and application logs.",
    caution:
      "Application logs can live elsewhere. Inspect service configuration before assuming a log path.",
  },
  {
    path: "/var/log/journal/",
    purpose:
      "Persistent journal storage when persistent journaling is enabled.",
    caution:
      "If this directory is absent, the journal may be volatile under /run/log/journal.",
  },
  {
    path: "/run/log/journal/",
    purpose:
      "Volatile journal storage for the current boot or runtime.",
    caution:
      "Data here can disappear after reboot.",
  },
];

const inspectionCommands = [
  {
    command: "journalctl -b",
    purpose:
      "Show journal records from the current boot.",
  },
  {
    command: "journalctl -b -1",
    purpose:
      "Show the previous boot when retained.",
  },
  {
    command: "journalctl --list-boots",
    purpose:
      "List retained boot sessions and their time ranges.",
  },
  {
    command: "journalctl -u service-name --since today",
    purpose:
      "Show service-specific journal records from today.",
  },
  {
    command: "journalctl --since '2026-10-10 08:00' --until '2026-10-10 09:00'",
    purpose:
      "Review a bounded time window. Replace the example date and time with the actual investigation window.",
  },
  {
    command: "journalctl -p warning..alert -b",
    purpose:
      "Show warning through alert priority records from the current boot.",
  },
  {
    command: "journalctl _PID=1234",
    purpose:
      "Filter by one process ID when that PID is relevant and still meaningful to the retained records.",
  },
  {
    command: "journalctl _UID=1000",
    purpose:
      "Filter records associated with one user ID.",
  },
  {
    command: "journalctl _COMM=sshd",
    purpose:
      "Filter by command name stored in journal metadata.",
  },
  {
    command: "journalctl -k -b",
    purpose:
      "Show current-boot kernel messages.",
  },
  {
    command: "sudo grep -iE 'failed|failure|invalid|accepted|sudo|authentication' /var/log/auth.log | tail -n 100",
    purpose:
      "Review recent authentication-related events when auth.log is present.",
  },
  {
    command: "sudo zgrep -i 'pattern' /var/log/auth.log*",
    purpose:
      "Search current and compressed rotated authentication logs for a specific pattern.",
  },
  {
    command: "sudo tail -n 100 /var/log/apt/history.log",
    purpose:
      "Review recent APT package transactions.",
  },
  {
    command: "sudo tail -n 100 /var/log/dpkg.log",
    purpose:
      "Review recent dpkg package activity.",
  },
];

const journalFilters = [
  {
    filter: "-b / -b -1",
    meaning:
      "Select the current or previous boot.",
    use:
      "Useful for comparing before-and-after reboot behavior.",
  },
  {
    filter: "-u UNIT",
    meaning:
      "Filter by systemd unit.",
    use:
      "Best for service-specific troubleshooting and verification.",
  },
  {
    filter: "--since / --until",
    meaning:
      "Limit output to a time window.",
    use:
      "Essential for building a focused timeline.",
  },
  {
    filter: "-p PRIORITY",
    meaning:
      "Filter by severity such as warning, err, crit, alert, or emerg.",
    use:
      "Useful for triage, but normal-priority events may still matter.",
  },
  {
    filter: "_PID= / _UID=",
    meaning:
      "Filter by process or user metadata.",
    use:
      "Useful when correlating activity with a known process or account.",
  },
  {
    filter: "_COMM= / _EXE=",
    meaning:
      "Filter by command name or executable path where journal metadata contains it.",
    use:
      "Helps connect events to the program that produced them.",
  },
  {
    filter: "-k",
    meaning:
      "Show kernel messages.",
    use:
      "Useful for drivers, interfaces, storage, firewall, and low-level system events.",
  },
  {
    filter: "-o short-iso",
    meaning:
      "Use an ISO-like output format with precise timestamps.",
    use:
      "Helpful when building evidence timelines.",
  },
];

const evidenceCategories = [
  {
    category: "Authentication",
    examples:
      "SSH logins, failed passwords, invalid users, sudo use, console logins, account switching.",
    sources:
      "auth.log, journal, ssh service logs, sudo records",
  },
  {
    category: "Services",
    examples:
      "Start, stop, failure, restart loops, configuration errors, dependency failures.",
    sources:
      "journalctl -u, systemctl status, application logs",
  },
  {
    category: "Packages",
    examples:
      "Installs, upgrades, removals, package configuration.",
    sources:
      "apt history, dpkg.log, package state",
  },
  {
    category: "Network",
    examples:
      "Interface changes, DHCP activity, DNS failures, firewall blocks, service binding.",
    sources:
      "journal, NetworkManager, kernel, UFW, service logs",
  },
  {
    category: "Kernel",
    examples:
      "Device events, storage errors, driver problems, security denials, network stack events.",
    sources:
      "journalctl -k, kern.log where present",
  },
  {
    category: "Applications",
    examples:
      "Web errors, database failures, application authentication, startup issues.",
    sources:
      "application-specific logs and service journal",
  },
];

const timelineWorkflow = [
  {
    step: "01",
    title: "Define the event window",
    text:
      "Start with the scenario clue, user report, service failure, or suspicious event and choose the smallest useful time range.",
  },
  {
    step: "02",
    title: "Capture system context",
    text:
      "Record boot ID, hostname, current time, uptime, users, services, and relevant process state.",
  },
  {
    step: "03",
    title: "Collect primary logs",
    text:
      "Review journal records and the most relevant traditional or application log files.",
  },
  {
    step: "04",
    title: "Correlate sources",
    text:
      "Match timestamps across authentication, services, packages, processes, network events, and file changes.",
  },
  {
    step: "05",
    title: "Separate facts from interpretation",
    text:
      "Write down what the log actually says before deciding what you think caused it.",
  },
  {
    step: "06",
    title: "Verify after remediation",
    text:
      "Compare post-change logs and service behavior to confirm the intended result and detect new failures.",
  },
];

const reasoningCases = [
  {
    finding: "Many failed SSH logins appear in auth.log",
    weak:
      "A compromise definitely occurred.",
    better:
      "Failed logins show authentication attempts, not successful access. Look for accepted sessions, source addresses, usernames, timing, account changes, and subsequent activity.",
  },
  {
    finding: "A service shows repeated restart messages",
    weak:
      "The service is malicious.",
    better:
      "Repeated restarts can result from configuration errors, dependency failures, crash loops, resource problems, or persistence. Inspect the unit, logs, executable, and scenario role.",
  },
  {
    finding: "There is a gap in one log file",
    weak:
      "Someone deleted logs.",
    better:
      "Check rotation, journal retention, reboot history, logging configuration, disk pressure, and alternate sources before concluding tampering.",
  },
  {
    finding: "A package was installed recently",
    weak:
      "The installer created the security issue.",
    better:
      "Correlate package timestamps with administrator activity, service changes, files, and the scenario. Package installation alone does not prove wrongdoing.",
  },
  {
    finding: "journalctl shows a warning",
    weak:
      "Every warning must be fixed immediately.",
    better:
      "Warnings vary in importance. Decide whether the warning affects security, availability, or a required service before acting.",
  },
  {
    finding: "An authentication event uses a service account",
    weak:
      "Service accounts should never appear in logs.",
    better:
      "Determine whether the account was used interactively, by a service, through sudo, or by an application, then compare that behavior with the account's intended role.",
  },
];

const tamperClues = [
  {
    clue: "Unexpected gap across several independent log sources",
    meaning:
      "More significant than a gap in one rotated file, especially if the time window overlaps suspicious activity.",
  },
  {
    clue: "Logging service stopped or disabled",
    meaning:
      "Can reduce visibility, but may also result from misconfiguration or service failure.",
  },
  {
    clue: "Abrupt timestamp discontinuity",
    meaning:
      "May indicate clock change, reboot, time synchronization correction, or manipulation.",
  },
  {
    clue: "Rotated logs missing unexpectedly",
    meaning:
      "Could indicate retention policy, cleanup, disk pressure, or deliberate removal.",
  },
  {
    clue: "Application logs stop while service continues",
    meaning:
      "May indicate logging failure, changed configuration, permissions, or tampering.",
  },
  {
    clue: "Journal storage changed from persistent to volatile",
    meaning:
      "Can reduce historical visibility and deserves investigation when unexplained.",
  },
];

const authPatterns = [
  {
    pattern: "Failed password",
    meaning:
      "Authentication attempt did not succeed.",
    next:
      "Correlate source, username, frequency, and later accepted sessions.",
  },
  {
    pattern: "Invalid user",
    meaning:
      "Login attempt referenced an account that did not exist at that moment.",
    next:
      "Review source and whether the account was later created.",
  },
  {
    pattern: "Accepted password / Accepted publickey",
    meaning:
      "SSH authentication succeeded.",
    next:
      "Determine whether the account and source were authorized and what happened afterward.",
  },
  {
    pattern: "sudo:",
    meaning:
      "A sudo-related event was recorded.",
    next:
      "Review invoking user, target command, target user, and scenario authorization.",
  },
  {
    pattern: "session opened / closed",
    meaning:
      "A PAM-backed session changed state.",
    next:
      "Use surrounding events to understand the complete login or privilege sequence.",
  },
  {
    pattern: "authentication failure",
    meaning:
      "A PAM or application authentication attempt failed.",
    next:
      "Identify the service, account, and source before deciding significance.",
  },
];

const controlledActions = [
  {
    goal: "Export a focused journal window",
    command: "journalctl --since 'START' --until 'END' -o short-iso > investigation-journal.txt",
    caution:
      "Write exports to an authorized evidence location and preserve original timestamps and context.",
  },
  {
    goal: "Export one service's logs",
    command: "journalctl -u service-name --since today -o short-iso > service-journal.txt",
    caution:
      "Use service logs as one evidence source, not the only source.",
  },
  {
    goal: "View rotated compressed logs",
    command: "zless /var/log/auth.log.2.gz",
    caution:
      "Read compressed logs without modifying them.",
  },
  {
    goal: "Check journal storage use",
    command: "journalctl --disk-usage",
    caution:
      "Do not vacuum or delete journals just to save space during an investigation.",
  },
  {
    goal: "Verify journald configuration",
    command: "systemctl status systemd-journald",
    caution:
      "If logging is unhealthy, preserve current evidence before restarting services when possible.",
  },
  {
    goal: "Inspect log permissions",
    command: "stat /var/log/auth.log",
    caution:
      "Do not weaken permissions to make logs easier to read. Use appropriate authorized privileges.",
  },
];

const evidenceSources = [
  {
    source: "System journal",
    command: "journalctl -b -o short-iso",
    value:
      "Structured system events from the current boot with useful metadata.",
  },
  {
    source: "Authentication log",
    command: "sudo tail -n 100 /var/log/auth.log",
    value:
      "Recent SSH, sudo, PAM, and login events where the file exists.",
  },
  {
    source: "Package history",
    command: "sudo tail -n 100 /var/log/apt/history.log",
    value:
      "Recent APT package transactions that can explain software changes.",
  },
  {
    source: "Kernel events",
    command: "journalctl -k -b",
    value:
      "Current-boot kernel events that can explain device, network, storage, and firewall behavior.",
  },
  {
    source: "Service journal",
    command: "journalctl -u service-name --since today",
    value:
      "Focused evidence for one systemd-managed service.",
  },
  {
    source: "Boot history",
    command: "journalctl --list-boots",
    value:
      "Shows retained boots and helps identify reboots or missing history.",
  },
];

const highRiskShortcuts = [
  {
    shortcut: "Clearing logs before understanding the incident",
    risk:
      "Destroys evidence needed for forensics, troubleshooting, and verification.",
  },
  {
    shortcut: "Using journalctl --vacuum-* during active investigation",
    risk:
      "Can remove historical records that may be relevant to the timeline.",
  },
  {
    shortcut: "Restarting logging services repeatedly",
    risk:
      "Can complicate the timeline and create new log gaps or noise.",
  },
  {
    shortcut: "Treating one failed login as proof of compromise",
    risk:
      "Failed attempts are evidence of activity, not successful access.",
  },
  {
    shortcut: "Ignoring rotated logs",
    risk:
      "Older but relevant evidence may be stored in .1, .2.gz, or other rotated files.",
  },
  {
    shortcut: "Relying on only one log source",
    risk:
      "A single source can be incomplete, rotated, misconfigured, or misleading without correlation.",
  },
];

const verification = [
  {
    area: "Logging services",
    check:
      "Confirm systemd-journald and any required traditional logging services are healthy.",
  },
  {
    area: "Service behavior",
    check:
      "Verify the remediated service produces expected normal logs and no new failure loop.",
  },
  {
    area: "Authentication",
    check:
      "Confirm authorized access succeeds and unauthorized patterns are no longer producing unexpected successful sessions.",
  },
  {
    area: "Package state",
    check:
      "Confirm package changes match the intended administrative action.",
  },
  {
    area: "Timeline",
    check:
      "Record the before-and-after timestamps that prove when the change occurred and what followed.",
  },
  {
    area: "Evidence preservation",
    check:
      "Ensure the original relevant logs or exports remain available for later review.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Read the fictional scenario: Morgan reports that SSH briefly failed around 08:20, a new package was installed near the same time, and a service restarted repeatedly.",
  },
  {
    step: "02",
    task:
      "Record current time, uptime, boot history, SSH status, affected service status, and package state without changing anything.",
  },
  {
    step: "03",
    task:
      "Build a focused 08:00-09:00 timeline using journalctl, auth.log, apt history, dpkg.log, and the affected service journal.",
  },
  {
    step: "04",
    task:
      "Separate facts from interpretation: note failed SSH attempts, any accepted login, the package transaction, service restart timestamps, and configuration errors.",
  },
  {
    step: "05",
    task:
      "Determine whether the evidence supports a simple misconfiguration, authorized maintenance, or suspicious activity in the fictional lab.",
  },
  {
    step: "06",
    task:
      "Apply only the justified remediation and preserve the evidence window before making changes.",
  },
  {
    step: "07",
    task:
      "Verify SSH, the affected service, logging health, and post-change journal records, then summarize the final timeline.",
  },
];

const checklist = [
  "I understand the difference between the systemd journal and traditional log files.",
  "I can filter journalctl by boot, service, time, priority, user, and process metadata.",
  "I know rotated and compressed logs may contain relevant older evidence.",
  "I preserve timestamps and source context before changing or deleting anything.",
  "I correlate authentication, service, package, network, and kernel logs instead of relying on one source.",
  "I do not treat failed authentication as proof of successful compromise.",
  "I understand that missing logs can result from rotation, retention, reboot, or misconfiguration as well as tampering.",
  "I avoid clearing or vacuuming logs during active investigation.",
  "I build timelines that separate facts from interpretation.",
  "I verify that logging and required services remain healthy after remediation.",
];

const reflection = [
  "Why is one log source rarely enough to explain a security event?",
  "Why can a gap in auth.log have a non-malicious explanation?",
  "What is the difference between a failed SSH login and an accepted SSH login?",
  "Why is a bounded time window useful when using journalctl?",
  "What evidence would you correlate with a recent package installation?",
  "What should you preserve before restarting a failing service during an investigation?",
];

export default function LinuxLogsJournalctlSystemEvidencePage() {
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
              href="/cyberpatriot/linux/startup-shell-profiles-persistence-review"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/configuration-files-secure-editing"
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
                Linux · Lesson 14
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Logs, journalctl & System Evidence
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Use the systemd journal, authentication logs, package history,
                kernel records, service logs, and application evidence to build
                defensible timelines before making security decisions.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Logs are not just error messages. They are evidence. Strong
                analysis preserves the original record, narrows the time window,
                correlates independent sources, and separates what happened from
                what you think caused it.
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
                  <span>Journal filters</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">14</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Evidence-based timelines</span>
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
            Turn raw logs into defensible system evidence
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
              Logs answer different parts of the same story
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Authentication logs may show who connected, package logs may show
              what changed, and a service journal may show what broke. Correlate
              them by time and context instead of treating each source alone.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Evidence risk
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Cleaning logs during investigation destroys your timeline
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Do not vacuum, truncate, delete, or rotate evidence just to make
              the system look cleaner. Preserve relevant records first and make
              storage changes only when the investigation is complete.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Logging fundamentals
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six concepts behind Linux evidence
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
            Important log locations
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know where system evidence may be stored
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {importantPaths.map((item) => (
              <div
                key={item.path}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-base font-black text-cyan-200">
                  {item.path}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
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
            Narrow the evidence instead of scrolling endlessly
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
            journalctl filters
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Filter by context, not just keywords
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {journalFilters.map((item) => (
              <div
                key={item.filter}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-base font-black text-cyan-200">
                  {item.filter}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.use}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Evidence categories
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Match the question to the right evidence source
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {evidenceCategories.map((item) => (
              <div
                key={item.category}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.category}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.examples}
                </p>
                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Useful sources
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.sources}
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
            Evidence timeline
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build a sequence that separates fact from interpretation
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {timelineWorkflow.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
                </h3>
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
            Authentication evidence
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Read login records in context
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {authPatterns.map((item) => (
              <div
                key={item.pattern}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-base font-black text-cyan-200">
                  {item.pattern}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Next question
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.next}
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
            Tamper clues
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Missing evidence needs explanation, not immediate accusation
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tamperClues.map((item) => (
              <div
                key={item.clue}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.clue}</h3>
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
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Avoid conclusions that the logs do not support
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
              Evidence sources
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve the records that support the timeline
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
              Controlled evidence handling
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Export and inspect without destroying originals
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
            Log handling mistakes that destroy evidence
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
            Use post-change logs to prove the system improved
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
            Build a fictional one-hour evidence timeline
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
                Treat logs as evidence, not decoration. Narrow the time window,
                correlate independent sources, preserve originals, and write a
                timeline that clearly separates facts from conclusions.
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
              href="/cyberpatriot/linux/startup-shell-profiles-persistence-review"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/configuration-files-secure-editing"
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
