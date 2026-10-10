import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how cron, system cron directories, anacron, and user crontabs schedule work on Ubuntu and Linux Mint.",
  "Inspect scheduled tasks without immediately deleting unfamiliar entries.",
  "Distinguish legitimate maintenance jobs from unnecessary, misconfigured, suspicious, or unknown persistence.",
  "Trace a scheduled command to its owner, executable, script, package, environment, logs, and downstream effects.",
  "Preserve evidence before disabling or removing a suspicious scheduled task.",
  "Verify that required maintenance and application jobs still run after changes.",
];

const coreConcepts = [
  {
    title: "cron",
    text:
      "cron is a time-based job scheduler. It launches commands according to crontab entries and system scheduling files.",
  },
  {
    title: "crontab",
    text:
      "A crontab contains scheduled entries. Users can have their own crontabs, while system-wide jobs may be defined in /etc/crontab or cron directories.",
  },
  {
    title: "Owner context",
    text:
      "A scheduled task runs under a user identity. User context determines privileges, file access, environment, and impact.",
  },
  {
    title: "Environment",
    text:
      "cron jobs usually run with a smaller environment than an interactive shell. PATH, working directory, variables, and shell behavior can differ.",
  },
  {
    title: "Persistence",
    text:
      "Scheduled execution can be legitimate automation or a persistence mechanism. The schedule itself is not proof of malicious activity.",
  },
  {
    title: "Verification",
    text:
      "A scheduled task is not fully understood until you know what it runs, who owns it, why it exists, and whether required behavior still works after remediation.",
  },
];

const scheduleSyntax = [
  {
    field: "Minute",
    range: "0-59",
    meaning:
      "The minute of the hour when the job may run.",
  },
  {
    field: "Hour",
    range: "0-23",
    meaning:
      "The hour of the day when the job may run.",
  },
  {
    field: "Day of month",
    range: "1-31",
    meaning:
      "Limits execution by calendar day.",
  },
  {
    field: "Month",
    range: "1-12",
    meaning:
      "Limits execution by month.",
  },
  {
    field: "Day of week",
    range: "0-7",
    meaning:
      "Limits execution by weekday on many cron implementations, commonly with 0 or 7 representing Sunday.",
  },
  {
    field: "Command",
    range: "Executable / shell command",
    meaning:
      "The actual command cron launches when the time expression matches.",
  },
];

const importantPaths = [
  {
    path: "/etc/crontab",
    purpose:
      "System-wide crontab. Unlike ordinary user crontabs, entries include a user field before the command.",
    caution:
      "Do not copy user-crontab syntax into /etc/crontab without accounting for the user field.",
  },
  {
    path: "/etc/cron.d/",
    purpose:
      "Package and administrator system cron files.",
    caution:
      "Entries may be package-managed. Identify ownership before editing or removing.",
  },
  {
    path: "/etc/cron.hourly/",
    purpose:
      "Scripts intended for hourly execution on systems using these directories.",
    caution:
      "Inspect script contents, ownership, executable permissions, and package origin.",
  },
  {
    path: "/etc/cron.daily/",
    purpose:
      "Scripts commonly used for daily maintenance.",
    caution:
      "Many legitimate package maintenance jobs live here.",
  },
  {
    path: "/etc/cron.weekly/",
    purpose:
      "Scripts commonly scheduled for weekly maintenance.",
    caution:
      "Frequency alone does not indicate whether a job is required.",
  },
  {
    path: "/etc/cron.monthly/",
    purpose:
      "Scripts commonly scheduled for monthly maintenance.",
    caution:
      "Review package ownership and application purpose before changing.",
  },
  {
    path: "/var/spool/cron/crontabs/",
    purpose:
      "Common Ubuntu-family storage location for user crontabs.",
    caution:
      "Do not edit spool files directly unless you understand the platform behavior; use crontab tools for normal administration.",
  },
  {
    path: "/etc/anacrontab",
    purpose:
      "Controls anacron jobs designed to run periodic work even when the machine was powered off at the scheduled time.",
    caution:
      "Anacron complements cron behavior and can explain jobs that execute after boot.",
  },
];

const inspectionCommands = [
  {
    command: "crontab -l",
    purpose:
      "Show the current user's crontab.",
  },
  {
    command: "sudo crontab -l",
    purpose:
      "Show root's crontab.",
  },
  {
    command: "sudo crontab -u username -l",
    purpose:
      "Show a specific user's crontab.",
  },
  {
    command: "sudo cat /etc/crontab",
    purpose:
      "Review the main system-wide crontab.",
  },
  {
    command: "sudo ls -la /etc/cron.d /etc/cron.hourly /etc/cron.daily /etc/cron.weekly /etc/cron.monthly",
    purpose:
      "Inventory common system cron locations.",
  },
  {
    command: "sudo find /etc/cron.d /etc/cron.hourly /etc/cron.daily /etc/cron.weekly /etc/cron.monthly -maxdepth 1 -type f -ls",
    purpose:
      "Collect file ownership, permissions, timestamps, and paths for scheduled scripts.",
  },
  {
    command: "sudo systemctl status cron",
    purpose:
      "Review the cron service state on Ubuntu-family systems.",
  },
  {
    command: "sudo journalctl -u cron --since today",
    purpose:
      "Review cron service events where journal logging captures them.",
  },
  {
    command: "sudo grep -i CRON /var/log/syslog | tail -n 50",
    purpose:
      "Review recent cron-related syslog entries on systems that log cron activity there.",
  },
  {
    command: "sudo cat /etc/anacrontab",
    purpose:
      "Review anacron schedules and commands.",
  },
  {
    command: "dpkg -S /path/to/script",
    purpose:
      "Check whether a scheduled script belongs to an installed Debian package.",
  },
  {
    command: "stat /path/to/script",
    purpose:
      "Review script ownership, permissions, size, and timestamps.",
  },
];

const specialStrings = [
  {
    expression: "@reboot",
    meaning:
      "Runs once after the cron daemon starts following boot.",
    risk:
      "Useful for legitimate startup automation but also valuable for persistence.",
  },
  {
    expression: "@hourly",
    meaning:
      "Runs once per hour.",
    risk:
      "Frequent schedules deserve review if the command is unfamiliar or resource-heavy.",
  },
  {
    expression: "@daily",
    meaning:
      "Runs once per day.",
    risk:
      "Common for maintenance and backups; identify purpose before changing.",
  },
  {
    expression: "@weekly",
    meaning:
      "Runs once per week.",
    risk:
      "Can support maintenance or delayed persistence.",
  },
  {
    expression: "@monthly",
    meaning:
      "Runs once per month.",
    risk:
      "Long intervals make quick testing more difficult, so validate logic carefully.",
  },
];

const classification = [
  {
    label: "Required",
    signs:
      "Named by the scenario, supports backups, updates, logs, applications, reporting, or another known required function.",
    action:
      "Preserve it and verify the command, permissions, output, and schedule are secure.",
  },
  {
    label: "Legitimate",
    signs:
      "Package-owned maintenance task or known administrative automation with expected ownership and behavior.",
    action:
      "Leave intact unless there is a specific configuration problem.",
  },
  {
    label: "Misconfigured",
    signs:
      "Required task runs as the wrong user, uses unsafe writable paths, has broken syntax, leaks output, or executes too frequently.",
    action:
      "Correct the narrow configuration issue and verify the task still performs its required function.",
  },
  {
    label: "Suspicious",
    signs:
      "Unexpected root execution, script in /tmp or unusual user directory, encoded command, network download, strange interpreter chain, misleading filename, or persistence after an incident.",
    action:
      "Preserve crontab entry, script, metadata, logs, command line, package status, and related files before disabling it.",
  },
  {
    label: "Unknown",
    signs:
      "Purpose, owner, executable origin, schedule, or application relationship is unclear.",
    action:
      "Investigate further instead of deleting it because the name looks unfamiliar.",
  },
];

const reasoningCases = [
  {
    finding: "A root cron job runs every five minutes",
    weak:
      "Delete it because frequent root jobs are dangerous.",
    better:
      "Inspect the command, executable, package ownership, logs, script permissions, and scenario role. Monitoring or application jobs can legitimately run frequently.",
  },
  {
    finding: "A cron script lives in /tmp",
    weak:
      "Delete the file immediately.",
    better:
      "Treat the location as high-priority evidence. Preserve the job entry, file metadata, script contents, owner, parent directories, and logs before containment.",
  },
  {
    finding: "A daily cron file belongs to a package",
    weak:
      "It must be safe because a package owns it.",
    better:
      "Package ownership increases context but does not prove current configuration is secure. Review the package, script behavior, permissions, and scenario requirements.",
  },
  {
    finding: "A user's crontab is empty",
    weak:
      "There are no cron jobs for that user.",
    better:
      "Also inspect system cron files, /etc/cron.d, periodic directories, root's crontab, and other users.",
  },
  {
    finding: "A job uses curl or wget",
    weak:
      "Any download command is malicious.",
    better:
      "Determine the destination, source, package/application purpose, integrity expectations, and whether the scenario authorizes network retrieval.",
  },
  {
    finding: "A scheduled job is failing",
    weak:
      "Remove it because it does not work.",
    better:
      "Determine whether it is required, inspect logs and environment differences, then repair or remove based on purpose.",
  },
];

const cronEnvironment = [
  {
    title: "PATH may be limited",
    text:
      "A command that works interactively may fail under cron if it depends on a shell PATH that cron does not provide.",
  },
  {
    title: "Working directory may differ",
    text:
      "Relative paths can point somewhere unexpected. Security-sensitive cron jobs should generally use explicit paths.",
  },
  {
    title: "Shell behavior matters",
    text:
      "Cron commonly uses /bin/sh unless otherwise specified. Bash-specific syntax may fail.",
  },
  {
    title: "Variables may be absent",
    text:
      "Interactive profile variables are not guaranteed. Required environment values should be set deliberately.",
  },
  {
    title: "Output may reveal failures",
    text:
      "Cron output can be mailed, logged, redirected, or discarded depending on configuration. Missing visible output does not prove success.",
  },
  {
    title: "Permissions still apply",
    text:
      "The cron daemon does not magically bypass file permissions for non-root users. Execution context matters.",
  },
];

const persistenceIndicators = [
  {
    indicator: "Unexpected @reboot entry",
    reasoning:
      "Boot-triggered execution can maintain persistence. Inspect the command and owner.",
  },
  {
    indicator: "Root job launching a user-writable script",
    reasoning:
      "A privileged scheduler executing a file writable by lower-privileged users creates a serious trust problem.",
  },
  {
    indicator: "Script stored in /tmp or hidden user directory",
    reasoning:
      "Location can be suspicious, especially when paired with root execution or network activity.",
  },
  {
    indicator: "Encoded or heavily obfuscated command",
    reasoning:
      "Obfuscation increases investigation priority because it hides intent.",
  },
  {
    indicator: "Repeated download-and-execute pattern",
    reasoning:
      "Remote retrieval combined with immediate execution can create persistence or supply-chain risk.",
  },
  {
    indicator: "Task recreates a removed file or process",
    reasoning:
      "Recurring recreation suggests the scheduler may be the persistence source rather than the visible child process.",
  },
];

const controlledActions = [
  {
    goal: "Edit the current user's crontab",
    command: "crontab -e",
    caution:
      "Use for intentional administration. Preserve the original entry before removing anything important.",
  },
  {
    goal: "Edit root's crontab",
    command: "sudo crontab -e",
    caution:
      "Root jobs have high impact. Review the command and script permissions carefully.",
  },
  {
    goal: "Edit another user's crontab",
    command: "sudo crontab -u username -e",
    caution:
      "Confirm the user's role and preserve the existing schedule first.",
  },
  {
    goal: "Temporarily preserve but disable one line",
    command: "# comment the confirmed entry in the appropriate crontab or cron file",
    caution:
      "Commenting can preserve context better than deleting immediately, but only use a syntax-safe method for the specific file type.",
  },
  {
    goal: "Validate a referenced shell script",
    command: "bash -n /path/to/script",
    caution:
      "Checks Bash syntax only. It does not prove the script is safe or appropriate to execute.",
  },
  {
    goal: "Review executable ownership",
    command: "stat /path/to/script",
    caution:
      "Confirm ownership and permissions before allowing privileged scheduled execution.",
  },
];

const evidenceSources = [
  {
    source: "User crontab",
    command: "sudo crontab -u username -l",
    value:
      "Shows the user's scheduled entries at the time of inspection.",
  },
  {
    source: "System crontab",
    command: "sudo cat /etc/crontab",
    value:
      "Shows system-wide schedules including execution user.",
  },
  {
    source: "Cron directories",
    command: "sudo find /etc/cron.d /etc/cron.hourly /etc/cron.daily /etc/cron.weekly /etc/cron.monthly -maxdepth 1 -type f -ls",
    value:
      "Shows scheduled files with ownership, timestamps, and permissions.",
  },
  {
    source: "Cron logs",
    command: "sudo grep -i CRON /var/log/syslog | tail -n 50",
    value:
      "Can show when commands were launched, depending on logging configuration.",
  },
  {
    source: "Script metadata",
    command: "stat /path/to/script",
    value:
      "Shows ownership, permissions, timestamps, and other filesystem metadata.",
  },
  {
    source: "Package ownership",
    command: "dpkg -S /path/to/script",
    value:
      "Shows whether the file belongs to an installed Debian package.",
  },
];

const highRiskShortcuts = [
  {
    shortcut: "Deleting every unfamiliar cron entry",
    risk:
      "Can break backups, updates, reporting, application maintenance, and other required automation.",
  },
  {
    shortcut: "Stopping cron entirely",
    risk:
      "Removes all cron-based scheduling, including legitimate system and application tasks.",
  },
  {
    shortcut: "Deleting a suspicious script before preserving it",
    risk:
      "Destroys evidence about commands, network destinations, filenames, and attacker or administrator behavior.",
  },
  {
    shortcut: "Assuming user crontab review is complete",
    risk:
      "System cron directories, root, other users, and anacron may still schedule jobs.",
  },
  {
    shortcut: "Running an unfamiliar cron command manually",
    risk:
      "Can trigger the exact behavior you are investigating under the wrong context or at the wrong time.",
  },
  {
    shortcut: "Ignoring script permissions",
    risk:
      "A root cron job that executes a user-writable script can turn a legitimate schedule into a privilege-escalation path.",
  },
];

const verification = [
  {
    area: "Cron service",
    check:
      "Confirm the cron service remains healthy when required.",
  },
  {
    area: "Required jobs",
    check:
      "Confirm backup, maintenance, reporting, or application jobs that the scenario requires still exist.",
  },
  {
    area: "Removed persistence",
    check:
      "Confirm the unauthorized process or file is not recreated by the scheduled task.",
  },
  {
    area: "Permissions",
    check:
      "Confirm privileged jobs reference scripts and directories with appropriate ownership and write permissions.",
  },
  {
    area: "Logs",
    check:
      "Review subsequent cron and application logs for expected execution or unexpected failures.",
  },
  {
    area: "System function",
    check:
      "Verify required applications and maintenance workflows still operate after the scheduling change.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Read the fictional scenario: nightly backup and daily package-maintenance jobs are required; a root-owned @reboot entry launches /tmp/.sync-agent and requires investigation.",
  },
  {
    step: "02",
    task:
      "Inventory root, user, system, periodic-directory, and anacron schedules without changing anything.",
  },
  {
    step: "03",
    task:
      "Preserve the suspicious @reboot line, script contents, stat output, ownership, package lookup, hashes if your lab workflow supports them, and relevant logs.",
  },
  {
    step: "04",
    task:
      "Trace whether /tmp/.sync-agent launches a process, creates network connections, or recreates other files in the fictional lab.",
  },
  {
    step: "05",
    task:
      "Classify the required backup and maintenance jobs as Required, and classify the unknown @reboot task as Suspicious only after the evidence supports that conclusion.",
  },
  {
    step: "06",
    task:
      "Disable the confirmed unauthorized persistence while preserving the original evidence and leaving required schedules intact.",
  },
  {
    step: "07",
    task:
      "Verify cron health, required jobs, absence of recreation, logs, and normal application behavior.",
  },
];

const checklist = [
  "I understand the difference between user crontabs, /etc/crontab, /etc/cron.d, periodic cron directories, and anacron.",
  "I know that system-wide cron entries may include an execution-user field.",
  "I inspect root and multiple user schedules instead of checking only my own crontab.",
  "I trace scheduled commands to their scripts, executables, owners, packages, and logs.",
  "I understand that cron has a different environment from an interactive shell.",
  "I treat unexpected @reboot jobs as high-priority evidence rather than automatic proof of malware.",
  "I preserve suspicious entries and scripts before destructive cleanup.",
  "I review permissions on scripts launched by privileged cron jobs.",
  "I avoid stopping cron or deleting broad sets of jobs during routine hardening.",
  "I verify required scheduled functions after changes.",
];

const reflection = [
  "Why can a command work in a terminal but fail when launched by cron?",
  "Why does an @reboot entry deserve careful review?",
  "What evidence should be preserved before removing a suspicious scheduled task?",
  "Why is a root cron job that launches a user-writable script dangerous?",
  "Why is an empty user crontab not proof that no scheduled persistence exists?",
  "What should you verify after disabling a suspicious cron task?",
];

export default function LinuxCronJobsScheduledPersistencePage() {
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
              href="/cyberpatriot/linux/networking-interfaces-dns"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/startup-shell-profiles-persistence-review"
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
                Linux · Lesson 12
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Cron Jobs & Scheduled Persistence
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review Linux scheduled tasks across user crontabs, system cron
                files, periodic directories, and anacron while preserving
                required automation and investigating suspicious persistence.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Scheduled execution is normal on Linux. Backups, updates,
                cleanup, reporting, and applications often depend on it. The
                defensive skill is deciding which job is expected, which is
                misconfigured, and which requires evidence-driven containment.
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
                  <span>Common schedule fields</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Safe persistence review</span>
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
            Find scheduled persistence without destroying required automation
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
              A schedule is only the trigger
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The real security question is what the task executes, under which
              account, from which path, with which permissions, and for what
              required purpose.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Evidence risk
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Deleting the scheduler entry can erase the map to persistence
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Preserve the entry, referenced scripts, metadata, ownership, logs,
              and package information before removing a confirmed unauthorized
              task.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Cron fundamentals
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six concepts behind scheduled execution
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
            Schedule syntax
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Understand what the five time fields mean
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {scheduleSyntax.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {item.field}
                </p>
                <code className="mt-3 block text-lg font-black text-white">
                  {item.range}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <code className="block overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-bold text-cyan-200">
              15 2 * * * /usr/local/sbin/backup-job
            </code>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              This example means run the command at 02:15 each day. On a user
              crontab there is no separate user field. In /etc/crontab and many
              files under /etc/cron.d, a user field appears before the command.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Important paths
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Scheduled jobs can live in several places
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
            Inventory schedules before changing them
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
            Special schedules
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Named schedule shortcuts deserve the same review
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {specialStrings.map((item) => (
              <div
                key={item.expression}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-lg font-black text-cyan-200">
                  {item.expression}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                  <p className="text-sm leading-6 text-slate-400">
                    {item.risk}
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
            Cron environment
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Scheduled jobs do not run like your interactive shell
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {cronEnvironment.map((item) => (
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
            Classification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Required, legitimate, misconfigured, suspicious, or unknown
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
            Persistence indicators
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Patterns that increase investigation priority
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {persistenceIndicators.map((item) => (
              <div
                key={item.indicator}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.indicator}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.reasoning}
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
            Investigate the command behind the schedule
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
              Preserve the persistence chain
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
              Controlled actions
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve before you disable
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
            Scheduled-task cleanup that can break the system or erase evidence
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
            Prove required automation still works
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
            Investigate fictional cron-based persistence
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
                Scheduled persistence is a chain: scheduler, owner, command,
                script, permissions, logs, and resulting process or network
                activity. Investigate the whole chain before removing the trigger.
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
              href="/cyberpatriot/linux/networking-interfaces-dns"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/startup-shell-profiles-persistence-review"
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
