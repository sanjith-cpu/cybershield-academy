import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how scheduled execution can create persistence without a continuously running process.",
  "Recognize Windows Scheduled Tasks, Linux cron, and systemd timers as different scheduling mechanisms.",
  "Inspect triggers, commands, users, arguments, working directories, and execution history before changing scheduled items.",
  "Distinguish legitimate automation from suspicious persistence using scenario context and corroborating evidence.",
  "Correlate scheduled activity with processes, files, logs, network connections, and account evidence.",
  "Preserve task and timer evidence before disabling, deleting, or editing configuration.",
];

const principles = [
  { title: "Persistence is a mechanism, not a verdict", text: "Scheduled tasks, cron jobs, and timers are used by legitimate software and administrators. Their presence alone does not prove malicious activity." },
  { title: "Trigger and action belong together", text: "The trigger explains when execution should occur. The action explains what actually runs." },
  { title: "User context changes meaning", text: "SYSTEM, root, service accounts, and normal users have different privilege and access implications." },
  { title: "Paths provide context", text: "Recurring execution from Program Files or /usr differs from recurring execution from Downloads, Temp, AppData, /tmp, or a hidden user directory." },
  { title: "Configured is not the same as executed", text: "Use scheduler history, logs, process evidence, output files, or network activity to prove actual execution." },
  { title: "Preserve before cleanup", text: "Deleting a scheduler entry can remove the trigger, command, account, arguments, and history needed for a forensic answer." },
];

const evidenceFields = [
  { field: "Name", why: "Identifies the task, cron entry, timer, or related unit." },
  { field: "Trigger / schedule", why: "Explains when or under what condition execution occurs." },
  { field: "Action / command", why: "Shows the executable, script, or command that actually runs." },
  { field: "Arguments", why: "Can reveal script paths, configuration files, or targets." },
  { field: "Run-as user", why: "Explains account and privilege context." },
  { field: "Working directory", why: "Can affect relative paths and loaded files." },
  { field: "Enabled state", why: "Shows whether future execution is currently permitted." },
  { field: "Last / next run", why: "Adds timeline context where available." },
  { field: "History / logs", why: "Helps prove whether execution actually occurred." },
];

const windowsConcepts = [
  { concept: "At logon", detail: "Runs when a selected user or any user signs in." },
  { concept: "At startup", detail: "Runs when Windows starts." },
  { concept: "Time-based", detail: "Runs once or repeatedly according to a schedule." },
  { concept: "On event", detail: "Runs when a selected Windows event condition occurs." },
  { concept: "Action", detail: "Usually starts a program or command with optional arguments." },
  { concept: "Principal", detail: "Defines which account and privilege context the task uses." },
];

const windowsCommands = [
  {
    label: "List scheduled tasks",
    command: `Get-ScheduledTask`,
    purpose: "Shows task names, paths, states, and basic configuration.",
  },
  {
    label: "Inspect one task",
    command: `Get-ScheduledTask -TaskName "ExampleTask" | Format-List *`,
    purpose: "Shows detailed configuration for one task.",
  },
  {
    label: "Runtime information",
    command: `Get-ScheduledTaskInfo -TaskName "ExampleTask"`,
    purpose: "Shows last run time, next run time, and last result where available.",
  },
  {
    label: "Actions and triggers",
    command: `(Get-ScheduledTask -TaskName "ExampleTask").Actions
(Get-ScheduledTask -TaskName "ExampleTask").Triggers`,
    purpose: "Displays what runs and when.",
  },
  {
    label: "Full XML definition",
    command: `Export-ScheduledTask -TaskName "ExampleTask"`,
    purpose: "Shows the full task definition for deeper evidence review.",
  },
  {
    label: "Task Scheduler operational events",
    command: `Get-WinEvent -LogName "Microsoft-Windows-TaskScheduler/Operational" -MaxEvents 50`,
    purpose: "Reads recent Task Scheduler operational events when that channel is enabled.",
  },
];

const windowsHistory = [
  { source: "Task configuration", value: "Task name, trigger, action, arguments, account, conditions, and settings." },
  { source: "Task Scheduler Operational log", value: "Registration, trigger, launch, completion, and failure evidence when enabled." },
  { source: "Process evidence", value: "Can prove that the configured executable or script actually ran." },
  { source: "File metadata", value: "Can show when the linked script or executable was created or modified." },
  { source: "Network evidence", value: "Can connect the launched process to listening or outbound activity." },
];

const cronSources = [
  { source: "User crontab", path: "crontab -l", meaning: "Schedules commands under one user's context." },
  { source: "/etc/crontab", path: "/etc/crontab", meaning: "System-wide cron configuration that explicitly includes a user field." },
  { source: "/etc/cron.d", path: "/etc/cron.d/*", meaning: "Package or administrator-defined system cron jobs." },
  { source: "Periodic directories", path: "/etc/cron.hourly, /etc/cron.daily, /etc/cron.weekly, /etc/cron.monthly", meaning: "Scripts executed on periodic schedules according to system configuration." },
];

const cronExamples = [
  { schedule: "0 2 * * *", meaning: "Runs daily at 02:00." },
  { schedule: "*/15 * * * *", meaning: "Runs every 15 minutes." },
  { schedule: "0 9 * * 1-5", meaning: "Runs at 09:00 Monday through Friday." },
  { schedule: "@reboot", meaning: "Runs after cron starts following reboot on implementations supporting this form." },
];

const cronCommands = [
  { label: "Current user's crontab", command: `crontab -l`, purpose: "Displays the current user's cron jobs." },
  { label: "Another user's crontab", command: `sudo crontab -u trainee1 -l`, purpose: "Displays the selected user's cron jobs where authorized." },
  { label: "System crontab", command: `sudo cat /etc/crontab`, purpose: "Shows system-wide cron entries." },
  { label: "Cron.d inventory", command: `sudo ls -la /etc/cron.d`, purpose: "Lists cron definitions stored in /etc/cron.d." },
  { label: "Periodic directories", command: `sudo ls -la /etc/cron.hourly /etc/cron.daily /etc/cron.weekly /etc/cron.monthly`, purpose: "Shows common periodic script locations." },
  { label: "Search cron logs", command: `grep -i "cron" /var/log/syslog`, purpose: "Finds cron-related messages on systems that log cron activity to syslog." },
];

const timerConcepts = [
  { title: "Timer unit", text: "Defines when activation occurs." },
  { title: "Service unit", text: "Defines what command actually runs." },
  { title: "OnCalendar", text: "Provides calendar-style scheduling." },
  { title: "OnBootSec / OnUnitActiveSec", text: "Provides relative scheduling based on boot or prior activation." },
  { title: "Persistent", text: "Can cause missed calendar runs to be triggered later when configured." },
  { title: "Enablement", text: "Determines whether the timer activates automatically." },
];

const timerCommands = [
  { label: "List timers", command: `systemctl list-timers --all`, purpose: "Shows timer units, next run, last run, and associated units." },
  { label: "Inspect timer", command: `systemctl status example.timer`, purpose: "Shows current state and recent records." },
  { label: "Timer definition", command: `systemctl cat example.timer`, purpose: "Displays the timer unit file and drop-ins." },
  { label: "Linked service", command: `systemctl cat example.service`, purpose: "Shows what command the timer ultimately launches." },
  { label: "Timer journal", command: `journalctl -u example.timer`, purpose: "Shows timer-unit journal records." },
  { label: "Service journal", command: `journalctl -u example.service`, purpose: "Shows execution records for the linked service." },
];

const reasoning = [
  {
    evidence: "Task runs at logon",
    supported: "The task is configured to launch when its logon condition is met.",
    notSupported: "The task definitely executed during every login.",
  },
  {
    evidence: "Cron uses */15 * * * *",
    supported: "The command is configured for execution every 15 minutes.",
    notSupported: "The command successfully ran every 15 minutes.",
  },
  {
    evidence: "systemd timer is enabled",
    supported: "The timer is configured for automatic activation according to its unit definition.",
    notSupported: "The linked service is currently running.",
  },
  {
    evidence: "Task runs as SYSTEM or cron runs as root",
    supported: "The scheduled action executes with a highly privileged account when triggered.",
    notSupported: "The scheduled item is malicious.",
  },
  {
    evidence: "Action points to AppData or /tmp",
    supported: "The scheduler launches a user-profile or temporary-location file.",
    notSupported: "The file is malicious without further evidence.",
  },
  {
    evidence: "History shows repeated launches",
    supported: "The scheduler recorded multiple executions.",
    notSupported: "Every run completed successfully unless result evidence confirms that.",
  },
];

const pathTriage = [
  { path: "Program Files / /usr / vendor path", ask: "Is the executable part of installed or required software?" },
  { path: "AppData / ~/.config / ~/.local", ask: "Is this normal per-user application behavior or an unexpected startup location?" },
  { path: "Temp / /tmp", ask: "Why is recurring execution tied to temporary storage?" },
  { path: "Downloads / Documents", ask: "Was the file downloaded or manually placed before scheduling?" },
  { path: "ProgramData / /opt", ask: "Does software installation or package history explain the file?" },
  { path: "Hidden user directory", ask: "Is this ordinary application configuration or something unexpected?" },
];

const questionMap = [
  { question: "What runs?", evidence: "Task action, cron command, systemd service ExecStart." },
  { question: "When does it run?", evidence: "Task trigger, cron schedule, timer OnCalendar or relative timing settings." },
  { question: "Who runs it?", evidence: "Task principal, cron owner or user field, systemd User= setting." },
  { question: "Did it actually run?", evidence: "Task history, cron/syslog, journal, process evidence, file output, or network activity." },
  { question: "Was it added recently?", evidence: "Task-registration events, file timestamps, unit metadata, administrative logs, or package activity." },
  { question: "Is it required?", evidence: "Scenario requirements, dependencies, package/vendor context, and business purpose." },
];

const preserve = [
  {
    target: "Windows Scheduled Task",
    record: "Task name/path, triggers, actions, arguments, working directory, run-as account, enabled state, last/next run, XML, and history.",
  },
  {
    target: "User cron job",
    record: "User, exact schedule, command, crontab contents, linked files, and execution logs.",
  },
  {
    target: "System cron job",
    record: "File path, schedule, user field, command, ownership, permissions, timestamps, package source, and execution logs.",
  },
  {
    target: "systemd timer",
    record: "Timer name, schedule, enablement, linked service, unit paths, ExecStart, User, journal records, and last/next activation.",
  },
];

const correlations = [
  {
    records: "Task registered at 09:00 + task starts at 09:05 + powershell.exe parent + helper.exe child",
    supported: "The scheduled task likely explains the PowerShell and helper.exe execution chain.",
  },
  {
    records: "Cron entry every 10 minutes + syslog CRON record + script process at matching time",
    supported: "The cron job likely launched the observed script process.",
  },
  {
    records: "systemd timer activates + linked service starts + process opens outbound connection",
    supported: "The timer-service chain likely explains the network-active process.",
  },
  {
    records: "Downloaded script at 11:12 + task created at 11:15 pointing to script + first run at 11:20",
    supported: "The download, registration, and scheduled execution form a coherent sequence.",
  },
  {
    records: "Package install + /etc/cron.d file creation + recurring maintenance logs",
    supported: "The cron job may have been legitimately installed by the package.",
  },
  {
    records: "Privileged-group change + scheduled item under that account + later privileged file modification",
    supported: "Privilege capability increased before the scheduled action and file change.",
  },
];

const fictionalTimeline = [
  { time: "11:02", source: "Browser", detail: "student6 downloads reports.zip into the Windows Downloads directory." },
  { time: "11:04", source: "Filesystem", detail: "update.ps1 is extracted into C:\\Users\\student6\\AppData\\Local\\Temp\\Reports\\." },
  { time: "11:06", source: "Task Scheduler", detail: "Task ReportUpdater is registered to run every 30 minutes as student6." },
  { time: "11:30", source: "Task Scheduler", detail: "ReportUpdater starts PowerShell with update.ps1." },
  { time: "11:30", source: "Process Evidence", detail: "PowerShell launches helper.exe from the same temporary directory." },
  { time: "11:31", source: "Network Evidence", detail: "helper.exe opens a fictional outbound connection to 203.0.113.120." },
];

const labQuestions = [
  { question: "What establishes the persistence mechanism?", answer: "The ReportUpdater scheduled task configured to run every 30 minutes." },
  { question: "What links the task to the script?", answer: "The task action launches PowerShell with the update.ps1 path." },
  { question: "What connects the script to helper.exe?", answer: "The observed process parent-child chain at 11:30." },
  { question: "Why is the Temp path relevant but not conclusive?", answer: "Temporary storage is unusual for recurring execution, but legitimate installers and applications can also use Temp." },
  { question: "What proves the task actually executed?", answer: "Task Scheduler history plus the observed PowerShell and helper.exe process activity." },
  { question: "What should be preserved before disabling the task?", answer: "Task configuration/XML, triggers, action, account, run history, script and executable metadata/hashes, process chain, and network evidence." },
];

const mistakes = [
  { title: "Deleting the task first", text: "You can lose the exact trigger, action, arguments, account, and history needed for the question." },
  { title: "Treating scheduling as malicious", text: "Updaters, backups, maintenance tools, and administrators all use scheduled execution." },
  { title: "Ignoring the run-as account", text: "Privilege and user context can completely change the meaning of the action." },
  { title: "Reading only the schedule", text: "A trigger means little without the action it launches." },
  { title: "Assuming configured means executed", text: "Use history, logs, process evidence, or output to prove actual execution." },
  { title: "Ignoring package context", text: "A package may legitimately install cron jobs, timers, or scheduled tasks." },
  { title: "Ignoring linked files", text: "Preserve script and executable metadata as part of the evidence chain." },
  { title: "Forgetting your own changes", text: "Disabling or deleting items creates new state and logs that should be documented separately." },
];

const checklist = [
  "I identify the scheduled item's exact name and location.",
  "I record the exact trigger or schedule.",
  "I record the exact action or command.",
  "I record arguments and working directory where available.",
  "I record the run-as account or cron owner.",
  "I distinguish enabled configuration from actual execution.",
  "I check scheduler history or logs.",
  "I correlate the item with the process it launches.",
  "I preserve linked script or executable metadata and hashes.",
  "I check package or application context before labeling it unauthorized.",
  "I preserve evidence before disabling or deleting anything.",
  "I record my own defensive changes separately.",
];

const reflection = [
  "Why is a scheduled task or cron job not automatically suspicious?",
  "What is the difference between trigger evidence and execution evidence?",
  "Why does the run-as account matter?",
  "How can package logs explain an unexpected cron job or timer?",
  "What evidence would you use to prove that a configured task actually ran?",
  "Why should the linked script or executable be preserved before removing the scheduler entry?",
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
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{label}</p>
      <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
      {description && (
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">{description}</p>
      )}
    </div>
  );
}

export default function ScheduledTasksCronPersistenceCluesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/forensics" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Forensics
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/forensics/processes-services-startup-evidence" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/network-connections-listening-services"
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
                Forensics · Lesson 11
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Scheduled Tasks, Cron &amp; Persistence Clues
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how Windows Scheduled Tasks, Linux cron jobs, and systemd timers create recurring or triggered execution, how to inspect them safely, and how to connect configuration to actual process activity.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Scheduled execution is common in legitimate systems. Identify the trigger, action, account, linked files, and execution evidence before deciding whether an item belongs.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Lesson Snapshot</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Windows</span><span className="font-bold text-white">Scheduled Tasks</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Linux</span><span className="font-bold text-white">cron + timers</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Key distinction</span><span className="font-bold text-white">Configured vs executed</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span><span className="font-bold text-white">Explain recurrence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Learning objectives" title="Connect scheduled configuration to real execution" />
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div key={objective} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-300">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Core idea</p>
            <h2 className="mt-3 text-2xl font-black text-white">Scheduling explains recurrence, not intent</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">The schedule tells you when execution should happen. The action, user, path, logs, and process evidence explain what actually happened.</p>
          </div>
          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">Competition caution</p>
            <h2 className="mt-3 text-2xl font-black text-white">Preserve the scheduler entry before removing it</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">Record trigger, action, arguments, user, linked script or executable, and execution history before disabling or deleting the item.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Persistence principles" title="Use scheduler evidence without overclaiming" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Evidence fields" title="Preserve the configuration that explains execution" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {evidenceFields.map((item) => (
              <div key={item.field} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.field}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Windows Scheduled Tasks" title="Understand common triggers and actions" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {windowsConcepts.map((item) => (
              <div key={item.concept} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.concept}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {windowsCommands.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="font-black text-white">{item.label}</h3>
                <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">{item.command}</pre>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Windows execution history" title="Prove whether the task actually ran" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {windowsHistory.map((item) => (
              <div key={item.source} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.source}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Linux cron" title="Know the main cron configuration locations" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {cronSources.map((item) => (
              <div key={item.source} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.source}</h3>
                <code className="mt-3 block text-sm text-cyan-300">{item.path}</code>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.meaning}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {cronExamples.map((item) => (
              <div key={item.schedule} className="rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                <code className="font-bold text-cyan-200">{item.schedule}</code>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.meaning}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cronCommands.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="font-black text-white">{item.label}</h3>
                <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">{item.command}</pre>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="systemd timers" title="Treat timer and service as a pair" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {timerConcepts.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {timerCommands.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="font-black text-white">{item.label}</h3>
                <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">{item.command}</pre>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Reasoning" title="Separate configured behavior from observed execution" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {reasoning.map((item) => (
              <div key={item.evidence} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="font-black text-white">{item.evidence}</h3>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">Supported</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.supported}</p>
                </div>
                <div className="mt-3 rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-red-200">Not supported</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.notSupported}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Path triage" title="The scheduled command path changes the investigation" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pathTriage.map((item) => (
              <div key={item.path} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.path}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.ask}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Question-to-evidence map" title="Use the right artifact for the right scheduling question" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {questionMap.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.evidence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Preserve before action</p>
          <h2 className="mt-3 text-3xl font-black text-white">Capture scheduler state before disabling it</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {preserve.map((item) => (
              <div key={item.target} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.target}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.record}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Correlation" title="Connect scheduler configuration to actual activity" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {correlations.map((item) => (
              <div key={item.records} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-sm leading-7 text-cyan-200">{item.records}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">Supported conclusion</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.supported}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">Common mistakes</p>
          <h2 className="mt-3 text-3xl font-black text-white">Scheduling mistakes that erase or distort evidence</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {mistakes.map((item) => (
              <div key={item.title} className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Fictional persistence lab</p>
          <h2 className="mt-3 text-3xl font-black text-white">Reconstruct a recurring task from download to execution</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fictionalTimeline.map((item) => (
              <div key={`${item.time}-${item.source}`} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black text-cyan-300">{item.time}</span>
                  <span className="rounded-full border border-slate-800 px-3 py-1 text-xs font-bold text-slate-400">{item.source}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {labQuestions.map((item, index) => (
              <div key={item.question} className="rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-5">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">Task {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-black text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Lesson checklist</p>
            <h2 className="mt-3 text-2xl font-black text-white">Before moving on</h2>
            <div className="mt-6 grid gap-3">
              {checklist.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Reflection</p>
            <h2 className="mt-3 text-2xl font-black text-white">Check your persistence reasoning</h2>
            <div className="mt-6 grid gap-3">
              {reflection.map((question, index) => (
                <div key={question} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Question {index + 1}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/forensics" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Forensics
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/forensics/processes-services-startup-evidence" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/network-connections-listening-services"
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
