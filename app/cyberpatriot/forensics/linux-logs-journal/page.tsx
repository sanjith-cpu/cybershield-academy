import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Understand how Linux systems record authentication, services, boot activity, package changes, and system events.",
  "Use journalctl safely to filter by time, boot, service, priority, and keyword.",
  "Recognize common Ubuntu and Linux Mint log files while remembering that exact logging depends on system configuration.",
  "Interpret sudo, SSH, login, service, and package-management evidence without overclaiming intent.",
  "Correlate Linux logs with users, files, processes, services, cron jobs, and network evidence.",
  "Document the exact source, host, timestamp, user, unit, process, and message needed for a defensible forensic answer.",
];

const sourceCards = [
  {
    source: "systemd journal",
    location: "Queried with journalctl",
    value:
      "Centralized event records for boots, services, kernel messages, authentication-related activity, and applications that log through systemd.",
    caution:
      "Journal retention and persistence depend on configuration. Some records may exist only in memory or for a limited time.",
  },
  {
    source: "/var/log/auth.log",
    location: "Common on Ubuntu-family systems when rsyslog-style logging is enabled",
    value:
      "Authentication, sudo, SSH, PAM, and account-related messages.",
    caution:
      "This file may not exist on every Linux installation or may be incomplete if logging is configured differently.",
  },
  {
    source: "/var/log/syslog",
    location: "Common on Ubuntu-family systems when rsyslog is enabled",
    value:
      "General system and service messages from many components.",
    caution:
      "Some systems rely more heavily on the journal and may not maintain this file.",
  },
  {
    source: "/var/log/kern.log",
    location: "Present on some Ubuntu-family systems",
    value:
      "Kernel-related messages such as driver, device, and low-level system activity.",
    caution:
      "Kernel messages may instead be primarily available through journalctl -k.",
  },
  {
    source: "/var/log/apt",
    location: "APT package-management logs",
    value:
      "Package installation, removal, upgrade, and command history.",
    caution:
      "Package logs explain package-manager activity, not necessarily who physically initiated it.",
  },
  {
    source: "Application-specific logs",
    location: "/var/log or application-defined directories",
    value:
      "Web servers, databases, security tools, and other services may maintain dedicated log files.",
    caution:
      "Paths, formats, and retention vary by application.",
  },
];

const journalFields = [
  {
    field: "Timestamp",
    meaning:
      "When the event was recorded by the system.",
    ask:
      "What time zone is displayed, and does it align with other evidence?",
  },
  {
    field: "Hostname",
    meaning:
      "The system that generated the event.",
    ask:
      "Are records from more than one host being mixed together?",
  },
  {
    field: "Unit",
    meaning:
      "The systemd service, socket, timer, mount, or other unit associated with the message.",
    ask:
      "Is this the service actually relevant to the forensic question?",
  },
  {
    field: "Process / PID",
    meaning:
      "The process name or process identifier associated with the message.",
    ask:
      "Can process evidence or service status corroborate the event?",
  },
  {
    field: "User / UID",
    meaning:
      "An account or numeric user identifier associated with the event where available.",
    ask:
      "Does this represent the caller, service account, target user, or another identity?",
  },
  {
    field: "Priority",
    meaning:
      "A syslog-style severity from emergency through debug.",
    ask:
      "Is severity relevant to the forensic question, or only to operational health?",
  },
  {
    field: "Boot ID",
    meaning:
      "An identifier that separates events by system boot.",
    ask:
      "Did the event occur before or after a reboot?",
  },
  {
    field: "Message",
    meaning:
      "Human-readable details from the logging component.",
    ask:
      "Which facts are directly stated, and which conclusions still require corroboration?",
  },
];

const journalWorkflow = [
  {
    step: "01",
    title: "Start with the question",
    text:
      "Decide whether you need login, sudo, SSH, service, boot, package, kernel, cron, or application evidence.",
  },
  {
    step: "02",
    title: "Choose the likely source",
    text:
      "Use the systemd journal first for service and boot context, then check text logs such as auth.log or syslog when they are present and relevant.",
  },
  {
    step: "03",
    title: "Set a time window",
    text:
      "Use known file, browser, process, or scenario timestamps to avoid reading thousands of unrelated records.",
  },
  {
    step: "04",
    title: "Filter by unit or keyword",
    text:
      "Narrow by service, process, priority, user-related term, or keyword while preserving enough surrounding records for context.",
  },
  {
    step: "05",
    title: "Read neighboring events",
    text:
      "Look before and after the target message to identify startup sequences, failures, retries, privilege changes, or related service activity.",
  },
  {
    step: "06",
    title: "Correlate",
    text:
      "Compare the log with account state, files, services, cron jobs, processes, package logs, and network listeners.",
  },
  {
    step: "07",
    title: "Document before hardening",
    text:
      "Record the source, time, host, unit, user, process, and message before changing accounts, services, SSH, cron, or files.",
  },
];

const journalCommands = [
  {
    label: "Recent journal records",
    command: `journalctl -n 50`,
    purpose:
      "Shows the most recent journal entries.",
  },
  {
    label: "Current boot",
    command: `journalctl -b`,
    purpose:
      "Shows records from the current boot.",
  },
  {
    label: "Previous boot",
    command: `journalctl -b -1`,
    purpose:
      "Shows records from the previous boot when retained.",
  },
  {
    label: "Time window",
    command: `journalctl --since "2026-10-10 13:00:00" --until "2026-10-10 14:00:00"`,
    purpose:
      "Limits results to a defined period.",
  },
  {
    label: "One service",
    command: `journalctl -u ssh --since today`,
    purpose:
      "Shows events associated with the SSH service unit where the unit name is ssh.",
  },
  {
    label: "Kernel messages",
    command: `journalctl -k`,
    purpose:
      "Shows kernel-related records for the selected boot context.",
  },
  {
    label: "Priority filter",
    command: `journalctl -p warning..emerg`,
    purpose:
      "Shows warning-and-higher-priority records, useful for operational review but not a replacement for question-driven filtering.",
  },
  {
    label: "Reverse order",
    command: `journalctl -r -n 50`,
    purpose:
      "Shows recent records newest first.",
  },
];

const textLogCommands = [
  {
    label: "Review authentication log",
    command: `sudo less /var/log/auth.log`,
    purpose:
      "Reads the authentication log without modifying it when the file exists.",
  },
  {
    label: "Search sudo activity",
    command: `grep -i "sudo" /var/log/auth.log`,
    purpose:
      "Finds lines that reference sudo activity.",
  },
  {
    label: "Search SSH activity",
    command: `grep -i "sshd" /var/log/auth.log`,
    purpose:
      "Finds SSH daemon authentication and session records.",
  },
  {
    label: "Search a username",
    command: `grep -i "trainee1" /var/log/auth.log`,
    purpose:
      "Finds authentication records associated with a specific training username.",
  },
  {
    label: "Review syslog",
    command: `sudo less /var/log/syslog`,
    purpose:
      "Reads general system messages where that file is present.",
  },
  {
    label: "Search a service name",
    command: `grep -i "cron" /var/log/syslog`,
    purpose:
      "Finds references to a service or subsystem in a text log.",
  },
];

const authPatterns = [
  {
    pattern: "Accepted password / Accepted publickey",
    meaning:
      "An SSH authentication succeeded for the account and connection described by the log entry.",
    caution:
      "A successful authentication does not prove the session was unauthorized.",
  },
  {
    pattern: "Failed password",
    meaning:
      "An SSH password authentication attempt failed.",
    caution:
      "One failure can be normal. Repetition, source, timing, and later success matter.",
  },
  {
    pattern: "sudo: user : TTY= ... COMMAND= ...",
    meaning:
      "A sudo invocation was recorded with user and command context.",
    caution:
      "Read the exact account, command, and result rather than labeling all sudo activity suspicious.",
  },
  {
    pattern: "session opened / session closed",
    meaning:
      "PAM or another authentication subsystem recorded session lifecycle activity.",
    caution:
      "Session type and service context matter.",
  },
  {
    pattern: "authentication failure",
    meaning:
      "An authentication component recorded a failed authentication event.",
    caution:
      "Check the service, user, source, and nearby events before drawing conclusions.",
  },
  {
    pattern: "new user / group changes",
    meaning:
      "Account-management tools may log creation or membership activity through system logging.",
    caution:
      "Confirm with /etc/passwd, /etc/group, sudoers, and account state.",
  },
];

const sshEvidence = [
  {
    clue:
      "Successful SSH login",
    next:
      "Record account, source address, authentication method, time, and session-opening records.",
  },
  {
    clue:
      "Repeated failed SSH attempts",
    next:
      "Compare source addresses, target usernames, timing, and whether a success followed.",
  },
  {
    clue:
      "SSH service restart",
    next:
      "Check journal entries, configuration modification time, and whether the restart followed an administrative change.",
  },
  {
    clue:
      "Authorized key added",
    next:
      "Preserve ~/.ssh/authorized_keys metadata, ownership, permissions, hash, and related login records.",
  },
  {
    clue:
      "Unexpected SSH listener",
    next:
      "Correlate service state, sshd configuration, listening port, process ownership, and scenario requirements.",
  },
  {
    clue:
      "SSH login for privileged account",
    next:
      "Review policy and scenario requirements before concluding that the login was unauthorized.",
  },
];

const sudoEvidence = [
  {
    clue:
      "sudo command recorded",
    value:
      "Shows that an account invoked a privileged command through sudo.",
    next:
      "Record the exact command, account, time, TTY or session context, and nearby authentication events.",
  },
  {
    clue:
      "sudo authentication failure",
    value:
      "Shows an unsuccessful attempt to use sudo.",
    next:
      "Check whether later attempts succeeded and whether the account should have sudo access.",
  },
  {
    clue:
      "User added to sudo group",
    value:
      "Changes the account's potential privilege level.",
    next:
      "Check /etc/group, account-management logs, timestamps, and scenario authorization.",
  },
  {
    clue:
      "sudoers file changed",
    value:
      "May change privilege rules without changing group membership.",
    next:
      "Preserve file metadata, content, relevant include files, and administrative evidence.",
  },
];

const serviceEvidence = [
  {
    pattern:
      "Started <service>",
    meaning:
      "systemd reports the service entered a started state.",
    next:
      "Check the unit definition, executable path, user, process, and preceding events.",
  },
  {
    pattern:
      "Stopped <service>",
    meaning:
      "systemd reports the service stopped.",
    next:
      "Determine whether the stop was expected, manual, failure-related, or dependency-driven.",
  },
  {
    pattern:
      "Failed to start <service>",
    meaning:
      "The service startup failed.",
    next:
      "Read preceding and following journal messages, unit status, and configuration errors.",
  },
  {
    pattern:
      "Reloaded / Restarted <service>",
    meaning:
      "The service configuration or process state was refreshed.",
    next:
      "Check for nearby configuration changes or administrative commands.",
  },
  {
    pattern:
      "Unit file changed or enabled",
    meaning:
      "Startup behavior may have changed.",
    next:
      "Inspect the unit file, enablement state, timestamps, and related package or admin activity.",
  },
];

const packageEvidence = [
  {
    source: "/var/log/apt/history.log",
    value:
      "APT package transaction history such as installs, upgrades, and removals where retained.",
  },
  {
    source: "/var/log/apt/term.log",
    value:
      "Terminal-style output produced during APT operations where retained.",
  },
  {
    source: "journalctl",
    value:
      "May contain package-manager, service-start, and post-install activity surrounding a package change.",
  },
  {
    source: "dpkg logs",
    value:
      "Package status and installation actions can appear in /var/log/dpkg.log on Debian-family systems.",
  },
];

const packageCommands = [
  {
    label: "APT history",
    command: `sudo less /var/log/apt/history.log`,
    purpose:
      "Reviews package-management transaction history where present.",
  },
  {
    label: "Search package name",
    command: `grep -i "openssh" /var/log/apt/history.log`,
    purpose:
      "Finds package operations mentioning a specific package.",
  },
  {
    label: "DPKG history",
    command: `grep -i " install " /var/log/dpkg.log`,
    purpose:
      "Shows package installation records where the log exists and is retained.",
  },
];

const loginCommands = [
  {
    label: "Recent logins",
    command: `last`,
    purpose:
      "Reads login history from the wtmp database where available.",
  },
  {
    label: "Failed login history",
    command: `sudo lastb`,
    purpose:
      "Reads failed-login history from btmp where available and permissions allow.",
  },
  {
    label: "Currently logged-in users",
    command: `who`,
    purpose:
      "Shows current login sessions.",
  },
  {
    label: "Detailed current sessions",
    command: `w`,
    purpose:
      "Shows logged-in users and current activity summaries.",
  },
];

const loginLimitations = [
  {
    title: "wtmp can rotate",
    text:
      "Older login records may move to rotated files or be unavailable.",
  },
  {
    title: "btmp may require root",
    text:
      "Failed-login history is commonly restricted.",
  },
  {
    title: "Shell history is incomplete",
    text:
      "Commands may not be saved immediately, can be configured differently, and do not capture every action.",
  },
  {
    title: "Current sessions are snapshots",
    text:
      "who and w show present state, not the entire past timeline.",
  },
];

const cronEvidence = [
  {
    source: "cron / CRON messages",
    meaning:
      "Can show scheduled jobs being executed.",
    next:
      "Correlate with user crontabs, /etc/crontab, /etc/cron.*, process activity, and the command that ran.",
  },
  {
    source: "systemd timers",
    meaning:
      "Scheduled execution managed by systemd rather than classic cron.",
    next:
      "Use systemctl list-timers and journalctl for the timer and target service.",
  },
  {
    source: "User crontab",
    meaning:
      "Per-user recurring commands.",
    next:
      "Preserve the crontab entry, user, schedule, command, and related logs before changing it.",
  },
  {
    source: "/etc/cron.*",
    meaning:
      "System-wide periodic job directories.",
    next:
      "Check ownership, package source, timestamps, and expected administrative purpose.",
  },
];

const severityLevels = [
  {
    level: "emerg",
    meaning:
      "System is unusable.",
  },
  {
    level: "alert",
    meaning:
      "Immediate action may be required.",
  },
  {
    level: "crit",
    meaning:
      "Critical condition.",
  },
  {
    level: "err",
    meaning:
      "Error condition.",
  },
  {
    level: "warning",
    meaning:
      "Warning condition.",
  },
  {
    level: "notice",
    meaning:
      "Normal but significant condition.",
  },
  {
    level: "info",
    meaning:
      "Informational message.",
  },
  {
    level: "debug",
    meaning:
      "Detailed debugging information.",
  },
];

const correlationCases = [
  {
    records:
      "SSH accepted login at 09:10 + sudo command at 09:13 + configuration file mtime at 09:13",
    supported:
      "The account authenticated remotely and a privileged command aligns with a configuration change.",
  },
  {
    records:
      "APT install at 10:05 + new service unit at 10:06 + service started at 10:07",
    supported:
      "The package transaction likely introduced the service and the service started immediately afterward.",
  },
  {
    records:
      "Cron execution at 11:00 + script process start at 11:00 + outbound connection at 11:01",
    supported:
      "The scheduled job may explain the recurring process and related connection.",
  },
  {
    records:
      "Failed SSH attempts from one address + later successful login from the same address",
    supported:
      "The same source generated failed attempts followed by a success, but intent still requires context.",
  },
  {
    records:
      "Service restart at 12:22 + config mtime at 12:21",
    supported:
      "The service restart may have followed a configuration edit.",
  },
  {
    records:
      "sudo group membership change + later sudo command",
    supported:
      "The account gained privilege capability before performing a privileged command.",
  },
];

const documentationFields = [
  "Forensic question",
  "Hostname",
  "Log source",
  "Command or filter used",
  "Timestamp and zone",
  "Unit or process",
  "User or UID",
  "Source address if present",
  "Message or relevant fields",
  "Neighboring events",
  "Corroborating artifact",
  "Supported conclusion",
];

const fictionalTimeline = [
  {
    time: "09:02:11",
    source: "auth.log",
    message:
      "Accepted password for trainee5 from 192.0.2.44 via sshd.",
  },
  {
    time: "09:04:03",
    source: "auth.log",
    message:
      "trainee5 invokes sudo to edit /etc/ssh/sshd_config.",
  },
  {
    time: "09:05:20",
    source: "journal",
    message:
      "ssh.service is restarted.",
  },
  {
    time: "09:06:12",
    source: "filesystem",
    message:
      "/etc/ssh/sshd_config shows a modification time near the recorded sudo activity.",
  },
  {
    time: "09:10:00",
    source: "cron",
    message:
      "A fictional user cron job runs /home/trainee5/bin/check.sh.",
  },
  {
    time: "09:10:02",
    source: "process/network",
    message:
      "check.sh launches a process that connects to fictional lab host 203.0.113.70.",
  },
];

const labQuestions = [
  {
    question:
      "Which record establishes remote authentication?",
    answer:
      "The 09:02:11 auth.log record showing an accepted SSH login for trainee5.",
  },
  {
    question:
      "Which evidence best supports a privileged SSH configuration change?",
    answer:
      "The sudo record at 09:04:03 plus the sshd_config modification time at 09:06:12.",
  },
  {
    question:
      "What event supports that the SSH service applied a configuration change?",
    answer:
      "The 09:05:20 service restart provides timing consistent with applying updated configuration.",
  },
  {
    question:
      "Which evidence suggests recurring scheduled activity?",
    answer:
      "The 09:10:00 cron execution of check.sh.",
  },
  {
    question:
      "Does the outbound connection alone prove malicious behavior?",
    answer:
      "No. It shows network activity by the scheduled process. Purpose must be established from scenario and additional evidence.",
  },
  {
    question:
      "What should be preserved before changing the cron job or SSH configuration?",
    answer:
      "Relevant auth/journal records, configuration contents and metadata, cron entry, script path and hash, process evidence, and network evidence.",
  },
];

const mistakes = [
  {
    title: "Assuming auth.log always exists",
    text:
      "Ubuntu-family systems often use it when rsyslog is configured, but journal-only or differently configured systems may not.",
  },
  {
    title: "Reading only one matching line",
    text:
      "Session open, command, restart, failure, and follow-up events may be nearby.",
  },
  {
    title: "Treating sudo as suspicious by itself",
    text:
      "Legitimate administrators and defensive work use sudo constantly.",
  },
  {
    title: "Using shell history as authoritative",
    text:
      "History can be incomplete, delayed, disabled, or edited.",
  },
  {
    title: "Ignoring boot boundaries",
    text:
      "A reboot can separate events into different journal boots and reset process state.",
  },
  {
    title: "Ignoring source addresses",
    text:
      "Remote login evidence becomes much stronger when account, source, method, and time are recorded together.",
  },
  {
    title: "Changing SSH or cron before preserving evidence",
    text:
      "Configuration edits can remove the exact details needed for later questions.",
  },
  {
    title: "Treating severity as forensic importance",
    text:
      "An informational authentication or service event may be more relevant than a critical unrelated error.",
  },
];

const reviewChecklist = [
  "I start with the exact forensic question.",
  "I know when to use journalctl versus a text log.",
  "I check whether auth.log and syslog actually exist before relying on them.",
  "I can filter journal records by time, boot, unit, and priority.",
  "I record hostname, source, timestamp, unit, user, and process details.",
  "I distinguish successful authentication from proof of unauthorized access.",
  "I correlate sudo activity with the exact command and nearby events.",
  "I correlate service events with unit definitions, files, and process state.",
  "I review package logs when software installation matters.",
  "I use last, lastb, who, and w as supporting login evidence.",
  "I preserve cron, SSH, and service evidence before hardening changes.",
  "I remember that missing logs do not prove an event never happened.",
];

const reflection = [
  "Why can journalctl be useful even when /var/log/auth.log is missing?",
  "What does an accepted SSH login prove, and what does it not prove?",
  "Why should a sudo record be correlated with the exact command and nearby configuration evidence?",
  "How can a package installation log help explain a newly created service?",
  "Why is shell history weaker than system logging?",
  "What evidence would you preserve before deleting an unexpected cron job?",
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
      {description && (
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function LinuxLogsJournalPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/forensics"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Forensics
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
              href="/cyberpatriot/forensics/windows-event-logs"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/user-accounts-authentication-evidence"
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
                Forensics · Lesson 08
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Linux Logs &amp; Journal
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how Ubuntu and Linux Mint systems record logins, sudo,
                SSH, services, package changes, scheduled activity, boots, and
                system events through the systemd journal and traditional log
                files.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Linux logging is flexible. Do not assume every machine has the
                same files. Start with the question, inspect the journal, confirm
                which text logs exist, and correlate across sources.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main tool</span>
                  <span className="font-bold text-white">journalctl</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Auth source</span>
                  <span className="font-bold text-white">journal / auth.log</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Key habit</span>
                  <span className="font-bold text-white">Verify source</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Correlated Linux timeline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Learning objectives"
            title="Use Linux logs as evidence, not assumptions"
          />

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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Linux logs are distributed across multiple sources
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The systemd journal may contain service, boot, kernel, and
              authentication events, while traditional files under /var/log can
              provide text-based records when those logging services are
              configured.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
              Competition caution
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Do not clear or rotate the evidence you still need
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Preserve relevant login, sudo, service, package, cron, and SSH
              records before changing configuration or restarting services.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Log sources"
            title="Know where Linux evidence may be stored"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sourceCards.map((item) => (
              <div
                key={item.source}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.source}</h3>
                <p className="mt-2 text-sm font-semibold text-cyan-300">
                  {item.location}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.value}
                </p>
                <div className="mt-4 rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-yellow-200">
                    Caution
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
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
          <SectionHeading
            label="Journal fields"
            title="Read the metadata around each Linux event"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {journalFields.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.field}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Ask
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.ask}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Investigation workflow"
            title="Move from Linux question to evidence"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {journalWorkflow.map((item) => (
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
          <SectionHeading
            label="journalctl"
            title="Filter the systemd journal without changing it"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {journalCommands.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.label}</h3>
                <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.command}
                </pre>
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
          <SectionHeading
            label="Traditional text logs"
            title="Use grep and less when the files are present"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {textLogCommands.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.label}</h3>
                <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.command}
                </pre>
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
          <SectionHeading
            label="Authentication patterns"
            title="Read login and privilege records carefully"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {authPatterns.map((item) => (
              <div
                key={item.pattern}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-sm font-bold text-cyan-300">
                  {item.pattern}
                </code>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-yellow-200">
                    Caution
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.caution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="SSH evidence"
              title="Remote authentication and session clues"
            />
            <div className="mt-6 grid gap-4">
              {sshEvidence.map((item) => (
                <div
                  key={item.clue}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.clue}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.next}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="sudo evidence"
              title="Privilege-use clues"
            />
            <div className="mt-6 grid gap-4">
              {sudoEvidence.map((item) => (
                <div
                  key={item.clue}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.clue}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Next: {item.next}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Service evidence"
            title="Use systemd events to understand service state changes"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceEvidence.map((item) => (
              <div
                key={item.pattern}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.pattern}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Next evidence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.next}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Package history"
              title="Explain software installation and removal"
            />

            <div className="mt-6 grid gap-4">
              {packageEvidence.map((item) => (
                <div
                  key={item.source}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.source}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4">
              {packageCommands.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.command}
                  </pre>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Login history"
              title="Use session databases as supporting evidence"
            />

            <div className="mt-6 grid gap-4">
              {loginCommands.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.command}
                  </pre>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.purpose}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3">
              {loginLimitations.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Scheduled activity"
            title="Cron and systemd timers leave different clues"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {cronEvidence.map((item) => (
              <div
                key={item.source}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.source}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.next}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Severity"
            title="Priority is operational context, not forensic relevance"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {severityLevels.map((item) => (
              <div
                key={item.level}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-sm font-bold text-cyan-300">
                  {item.level}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm leading-7 text-slate-300">
              An informational SSH login or sudo event may be more important to
              a forensic question than an unrelated critical hardware error.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Correlation"
            title="Combine Linux log evidence with independent artifacts"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {correlationCases.map((item) => (
              <div
                key={item.records}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm leading-7 text-cyan-200">
                  {item.records}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Supported conclusion
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.supported}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Evidence note"
            title="Record Linux events so another teammate can reproduce them"
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {documentationFields.map((item, index) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Common mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Linux log-analysis mistakes that weaken forensic answers
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Fictional Linux log lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Reconstruct SSH, sudo, service, and cron activity
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fictionalTimeline.map((item) => (
              <div
                key={`${item.time}-${item.source}`}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black text-cyan-300">{item.time}</span>
                  <span className="rounded-full border border-slate-800 px-3 py-1 text-xs font-bold text-slate-400">
                    {item.source}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.message}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {labQuestions.map((item, index) => (
              <div
                key={item.question}
                className="rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Task {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-black text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.answer}
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
              Lesson checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Before moving on
            </h2>

            <div className="mt-6 grid gap-3">
              {reviewChecklist.map((item, index) => (
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
              Check your Linux log reasoning
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
                Start with journalctl, verify which text logs exist, filter by
                time and unit, read authentication and sudo records carefully,
                correlate with files and services, and preserve evidence before
                changing SSH, cron, accounts, or service configuration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/forensics"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Forensics
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
              href="/cyberpatriot/forensics/windows-event-logs"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/user-accounts-authentication-evidence"
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
