import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Review scheduled tasks as legitimate automation and as a possible persistence mechanism.",
  "Use Task Scheduler, PowerShell, Event Viewer, and task XML to inspect task triggers, actions, identities, and execution history.",
  "Recognize suspicious task characteristics without assuming every unfamiliar task is malicious.",
  "Preserve task evidence before disabling, deleting, or editing a suspicious task.",
  "Understand how task actions, triggers, run-as accounts, privileges, and file paths affect risk.",
  "Verify required maintenance jobs, applications, and server roles after any task change.",
];

const concepts = [
  {
    title: "Scheduled task",
    text:
      "A Windows automation object that launches one or more actions when a trigger or condition is met.",
  },
  {
    title: "Trigger",
    text:
      "Defines when a task should run, such as at startup, at logon, on a schedule, or in response to an event.",
  },
  {
    title: "Action",
    text:
      "Defines what the task executes, such as a program, script, or command.",
  },
  {
    title: "Principal",
    text:
      "The user or service identity under which the task runs, including its logon type and privilege level.",
  },
  {
    title: "Condition",
    text:
      "Additional requirement such as idle state, network availability, or power conditions that can affect whether a task runs.",
  },
  {
    title: "Persistence",
    text:
      "A mechanism that allows software or an account-controlled process to execute again after reboot, logon, or another recurring event.",
  },
];

const toolPaths = [
  {
    title: "Task Scheduler",
    path:
      "Win + R → taskschd.msc",
    quick:
      "Task Scheduler Library → select folders and tasks",
    note:
      "Primary GUI for reviewing task names, status, triggers, actions, run-as identity, history, and settings.",
  },
  {
    title: "Task properties",
    path:
      "Task Scheduler Library → right-click task → Properties",
    quick:
      "Review General, Triggers, Actions, Conditions, Settings, and History",
    note:
      "Do not change a task until you understand each tab and the server role or application that may depend on it.",
  },
  {
    title: "Task history",
    path:
      "Task Scheduler → select task → History",
    quick:
      "Review task registration, start, completion, failure, and return-code events",
    note:
      "History may be disabled globally, so Event Viewer can provide additional evidence.",
  },
  {
    title: "Event Viewer",
    path:
      "Event Viewer → Applications and Services Logs → Microsoft → Windows → TaskScheduler → Operational",
    quick:
      "Review task registration, trigger, action, completion, and failure events",
    note:
      "Use timestamps to correlate task activity with service changes, file creation, logons, or application behavior.",
  },
  {
    title: "Task files",
    path:
      "C:\\Windows\\System32\\Tasks",
    quick:
      "Review only with appropriate permissions",
    note:
      "Scheduled task definitions are stored under this protected location. Treat the files as evidence and do not edit them directly.",
  },
  {
    title: "PowerShell",
    path:
      "Start → search PowerShell → Run as administrator when required",
    quick:
      "Use Get-ScheduledTask and Get-ScheduledTaskInfo",
    note:
      "PowerShell is useful for fast inventory and for revealing actions, triggers, principals, and state.",
  },
];

const taskProperties = [
  {
    title: "Task name and path",
    text:
      "The name and TaskPath show where the task appears in the Task Scheduler hierarchy.",
  },
  {
    title: "Author / description",
    text:
      "Legitimate vendor or administrative tasks often include useful metadata, though missing metadata alone does not prove maliciousness.",
  },
  {
    title: "Run-as account",
    text:
      "A task running as SYSTEM, an administrator, or a privileged domain account can have significant impact.",
  },
  {
    title: "Run with highest privileges",
    text:
      "Allows the task to run elevated when the principal and configuration permit it.",
  },
  {
    title: "Trigger",
    text:
      "Shows when the task runs and whether the schedule makes sense for the claimed purpose.",
  },
  {
    title: "Action",
    text:
      "Shows the executable, script, arguments, and working directory launched by the task.",
  },
  {
    title: "Conditions",
    text:
      "Can delay or prevent execution based on idle, power, or network state.",
  },
  {
    title: "Settings",
    text:
      "Controls restart, retry, timeout, concurrency, and other runtime behavior.",
  },
];

const suspiciousSignals = [
  {
    title: "User-writable execution path",
    text:
      "A privileged task launching from Downloads, Temp, a user profile, or another broadly writable location deserves investigation.",
  },
  {
    title: "Encoded or heavily obfuscated command",
    text:
      "Complex or encoded arguments may be legitimate automation, but they deserve careful review and evidence preservation.",
  },
  {
    title: "Unexpected privileged identity",
    text:
      "A task running as SYSTEM or a highly privileged domain account without a clear server-role purpose deserves investigation.",
  },
  {
    title: "Trigger at startup or logon",
    text:
      "These triggers are common for legitimate software but are also useful for persistence.",
  },
  {
    title: "Hidden task",
    text:
      "Hidden tasks can be legitimate, but an unexplained hidden task with an unusual action should be reviewed carefully.",
  },
  {
    title: "Unfamiliar executable or script",
    text:
      "Unknown does not mean malicious. Check file path, publisher, hash, application ownership, and server role before changing the task.",
  },
  {
    title: "Task recently created",
    text:
      "Recent registration near another suspicious event can be meaningful when timestamps correlate.",
  },
  {
    title: "Repeated failures",
    text:
      "Frequent task failures can reveal broken credentials, missing files, bad paths, or unwanted automation.",
  },
];

const legitimateExamples = [
  {
    title: "Backup task",
    text:
      "May run nightly using a service account and access protected storage.",
    verify:
      "Confirm the backup destination, service account, schedule, and successful recent runs.",
  },
  {
    title: "Application maintenance",
    text:
      "A vendor application may use a scheduled task for updates, cleanup, indexing, or health checks.",
    verify:
      "Confirm the task maps to installed software and that the executable path belongs to the application.",
  },
  {
    title: "Certificate renewal",
    text:
      "Infrastructure software may schedule renewal or enrollment jobs.",
    verify:
      "Confirm the task is tied to the required certificate or server role.",
  },
  {
    title: "Log cleanup",
    text:
      "Administrators may schedule scripts to archive or rotate logs.",
    verify:
      "Confirm the script path, owner, destination, and retention policy.",
  },
  {
    title: "Monitoring agent",
    text:
      "A security or monitoring platform may run recurring health or inventory tasks.",
    verify:
      "Confirm the vendor, installed agent, and management requirement.",
  },
  {
    title: "Domain / management automation",
    text:
      "Enterprise administration tools may create tasks remotely or through policy.",
    verify:
      "Confirm the management system or Group Policy owns the task before changing it.",
  },
];

const powerShellChecks = [
  {
    label: "All scheduled tasks",
    command:
      "Get-ScheduledTask | Select-Object TaskPath, TaskName, State",
    purpose:
      "Creates a broad inventory of scheduled tasks and their current states.",
  },
  {
    label: "Task actions",
    command:
      "Get-ScheduledTask | ForEach-Object { $t = $_; $t.Actions | Select-Object @{N='TaskPath';E={$t.TaskPath}}, @{N='TaskName';E={$t.TaskName}}, Execute, Arguments, WorkingDirectory }",
    purpose:
      "Shows what scheduled tasks execute and the arguments they use.",
  },
  {
    label: "Task principals",
    command:
      "Get-ScheduledTask | Select-Object TaskPath, TaskName, @{N='UserId';E={$_.Principal.UserId}}, @{N='RunLevel';E={$_.Principal.RunLevel}}, @{N='LogonType';E={$_.Principal.LogonType}}",
    purpose:
      "Shows which identities tasks run as and whether elevated run level is configured.",
  },
  {
    label: "Task triggers",
    command:
      "Get-ScheduledTask | ForEach-Object { $t = $_; $t.Triggers | Select-Object @{N='TaskPath';E={$t.TaskPath}}, @{N='TaskName';E={$t.TaskName}}, StartBoundary, Enabled }",
    purpose:
      "Provides a readable trigger inventory. Some trigger-specific properties may require deeper inspection.",
  },
  {
    label: "One task in detail",
    command:
      'Get-ScheduledTask -TaskName "TaskName" | Format-List *',
    purpose:
      "Shows detailed metadata for one selected task. Replace TaskName with the authorized target.",
  },
  {
    label: "Last / next run information",
    command:
      'Get-ScheduledTaskInfo -TaskName "TaskName" | Format-List *',
    purpose:
      "Shows last run time, last task result, next run time, and missed runs for the selected task.",
  },
  {
    label: "Export task XML",
    command:
      'Export-ScheduledTask -TaskName "TaskName"',
    purpose:
      "Displays the task definition as XML for evidence and deeper review without changing the task.",
  },
  {
    label: "Task Scheduler events",
    command:
      "Get-WinEvent -LogName 'Microsoft-Windows-TaskScheduler/Operational' -MaxEvents 60 | Select-Object TimeCreated, Id, LevelDisplayName, Message",
    purpose:
      "Reviews recent task registration, execution, completion, and failure events.",
  },
];

const reviewQuestions = [
  "What is the task name and TaskPath?",
  "Who created or owns the task?",
  "Which identity does it run as?",
  "Does it run with highest privileges?",
  "What exactly does the Action execute?",
  "Where is the executable or script stored?",
  "What arguments are passed?",
  "What trigger causes the task to run?",
  "Does the trigger match the task's claimed purpose?",
  "What was the last run time and result?",
  "Which server role or application depends on the task?",
  "How will you verify that required functionality still works if the task is disabled?",
];

const actionPathReview = [
  {
    title: "Windows system path",
    text:
      "Executables under Windows system directories can be legitimate, but the exact binary and arguments still matter.",
  },
  {
    title: "Program Files",
    text:
      "Often indicates installed software, but confirm the vendor and whether that product is required.",
  },
  {
    title: "User profile",
    text:
      "A privileged task launching from a user profile deserves extra scrutiny because users can often modify those files.",
  },
  {
    title: "Temp or Downloads",
    text:
      "These are unusual locations for long-term privileged automation and should be investigated carefully.",
  },
  {
    title: "Network path",
    text:
      "A UNC path creates a dependency on network availability, share permissions, and remote file integrity.",
  },
  {
    title: "Script path",
    text:
      "Review the script itself, not just the interpreter. A legitimate powershell.exe action can still launch an unsafe script.",
  },
];

const evidenceChecklist = [
  "Task name and full TaskPath",
  "Author and description",
  "Run-as identity",
  "Run level",
  "Trigger type and schedule",
  "Action executable",
  "Arguments and working directory",
  "Last run time",
  "Last task result",
  "Relevant Task Scheduler events",
  "File path and file metadata for the launched executable or script",
  "Related application, service, or server role",
];

const eventReasoning = [
  {
    title: "Task registered",
    text:
      "A registration event can help establish when the task first appeared or was modified.",
  },
  {
    title: "Task triggered",
    text:
      "Shows that the scheduled condition actually caused task execution.",
  },
  {
    title: "Action started",
    text:
      "Helps correlate the task with the specific process or script it launched.",
  },
  {
    title: "Task completed",
    text:
      "Shows whether execution finished and can provide result context.",
  },
  {
    title: "Task failed",
    text:
      "Repeated failures can reveal bad paths, credentials, permissions, missing dependencies, or broken automation.",
  },
  {
    title: "Task disabled / changed",
    text:
      "Configuration changes can be useful evidence when reviewing unexpected behavior.",
  },
];

const troubleshooting = [
  {
    symptom: "A required task no longer runs.",
    checks:
      "Review task Enabled state, trigger, principal credentials, run level, action path, working directory, LastTaskResult, and TaskScheduler Operational events.",
  },
  {
    symptom: "Task runs manually but not on schedule.",
    checks:
      "Review trigger enablement, conditions, missed-start settings, time zone, server time, and whether the trigger actually occurs.",
  },
  {
    symptom: "Task starts but the script fails.",
    checks:
      "Review script path, interpreter path, arguments, execution account, file permissions, network dependencies, working directory, and application logs.",
  },
  {
    symptom: "Task fails after service-account password change.",
    checks:
      "Confirm the task's logon type and stored credential behavior, update authorized credentials if required, then verify the dependent job.",
  },
  {
    symptom: "Disabled task returns.",
    checks:
      "A vendor updater, Group Policy, management agent, installer, or other automation may be recreating it. Identify the owner before repeating the change.",
  },
  {
    symptom: "Unknown task launches a file from Temp.",
    checks:
      "Preserve the task XML, file path, file metadata, timestamps, related events, user context, and application ownership before disabling or removing anything.",
  },
];

const decisionCases = [
  {
    title: "Unknown SYSTEM task launches from a user Temp folder",
    evidence:
      "The task triggers at startup and runs a script from a writable user path with highest privileges.",
    reasoning:
      "The combination of high privilege, startup persistence, and user-writable execution path is high risk, but evidence should be preserved first.",
    response:
      "Export the task XML, record triggers/actions/principal/history, inspect the script and related events, confirm no required software owns it, then disable the task if justified and verify server functionality.",
  },
  {
    title: "Vendor maintenance task looks unfamiliar",
    evidence:
      "The task runs nightly from Program Files and references an installed backup product.",
    reasoning:
      "The task may be legitimate and required even if the team did not create it.",
    response:
      "Verify vendor ownership, application requirement, recent successful runs, and backup dependency before changing it.",
  },
  {
    title: "Task runs as Domain Admin",
    evidence:
      "The task is required, but its principal has domain-wide administrative privilege.",
    reasoning:
      "The automation may be necessary while the assigned identity is overprivileged.",
    response:
      "Preserve the task, determine the minimum privileges the action actually needs, move to a less-privileged authorized service identity only after controlled testing.",
  },
  {
    title: "Hidden task has no recent runs",
    evidence:
      "The task is hidden and unfamiliar but has not run recently.",
    reasoning:
      "Hidden plus unfamiliar warrants investigation, but inactivity alone does not prove it is safe to delete.",
    response:
      "Review task XML, trigger conditions, application ownership, creation/modification evidence, and dependencies before deciding whether to disable it.",
  },
];

const controlledActions = [
  {
    title: "Disable a confirmed unnecessary task",
    command:
      'Disable-ScheduledTask -TaskName "ExampleTask"',
    caution:
      "Disable before deleting when you want a reversible change and have already preserved evidence.",
    verify:
      'Get-ScheduledTask -TaskName "ExampleTask" | Select-Object TaskName, State',
  },
  {
    title: "Re-enable a required task",
    command:
      'Enable-ScheduledTask -TaskName "ExampleTask"',
    caution:
      "Use when verification shows a required task was disabled incorrectly.",
    verify:
      'Get-ScheduledTask -TaskName "ExampleTask" | Select-Object TaskName, State',
  },
  {
    title: "Inspect without running",
    command:
      'Export-ScheduledTask -TaskName "ExampleTask"',
    caution:
      "Prefer inspection and XML review before manually starting an unfamiliar task.",
    verify:
      "Review the returned XML and compare it with the GUI properties.",
  },
];

const verification = [
  "Required maintenance tasks remain enabled.",
  "Required backup, update, application, or monitoring jobs still function.",
  "Suspicious or unnecessary tasks have documented evidence and a justified final state.",
  "No privileged task launches from an unexplained writable path without investigation.",
  "Run-as identities have appropriate privilege for their purpose.",
  "Task triggers match the required schedule or event.",
  "Recent task results are understood.",
  "No new Task Scheduler failures appeared after changes.",
  "Required applications and server roles still work.",
  "All task changes are documented with original and final state.",
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional server requirement",
    text:
      "APP-SRV runs a required nightly backup task and a vendor application-maintenance task. A third task named SystemHealthCheck was recently added and runs at startup as SYSTEM.",
  },
  {
    number: "02",
    title: "Inventory tasks",
    text:
      "Use Task Scheduler and Get-ScheduledTask to record task names, paths, state, principals, triggers, and actions.",
  },
  {
    number: "03",
    title: "Review known tasks",
    text:
      "Confirm the backup and vendor-maintenance tasks map to installed software, expected schedules, and recent successful results.",
  },
  {
    number: "04",
    title: "Investigate SystemHealthCheck",
    text:
      "The task launches a script from C:\\Users\\Public\\Temp and runs with highest privileges. Preserve XML, task history, file path, timestamps, and related events.",
  },
  {
    number: "05",
    title: "Make the narrowest justified change",
    text:
      "If no required application or administrator owns SystemHealthCheck, disable the task rather than deleting it immediately so the change remains reversible.",
  },
  {
    number: "06",
    title: "Verify",
    text:
      "Confirm the required backup and application tasks still work, APP-SRV remains healthy, and the suspicious task no longer executes.",
  },
];

const mistakes = [
  {
    title: "Deleting unfamiliar tasks immediately",
    text:
      "You can destroy useful evidence and break legitimate automation before understanding the task.",
  },
  {
    title: "Assuming SYSTEM means malicious",
    text:
      "Many legitimate Windows and server-management tasks run as SYSTEM.",
  },
  {
    title: "Reviewing only the task name",
    text:
      "A harmless-looking name can launch a risky script, while a strange name may belong to legitimate software.",
  },
  {
    title: "Ignoring arguments",
    text:
      "The same executable can behave very differently depending on the command-line arguments passed to it.",
  },
  {
    title: "Ignoring working directory",
    text:
      "Scripts and applications may depend on a specific working directory or may load relative files from it.",
  },
  {
    title: "Running an unknown task to see what it does",
    text:
      "Manual execution can trigger harmful or disruptive behavior. Inspect evidence first.",
  },
];

const checklist = [
  "Open taskschd.msc.",
  "Review Task Scheduler Library and subfolders.",
  "Inspect General, Triggers, Actions, Conditions, Settings, and History.",
  "Record run-as identity and run level.",
  "Review executable or script path.",
  "Review arguments and working directory.",
  "Run Get-ScheduledTask.",
  "Run Get-ScheduledTaskInfo for suspicious or required tasks.",
  "Export task XML before high-impact changes.",
  "Review TaskScheduler Operational events.",
  "Disable rather than delete when a reversible change is appropriate.",
  "Verify required automation and server roles afterward.",
];

const reflection = [
  "Why can a scheduled task be both legitimate automation and a persistence mechanism?",
  "Why is the action path more important than the task name alone?",
  "What makes a privileged task running from a user-writable folder risky?",
  "Why should task XML and history be preserved before disabling a suspicious task?",
  "Why is disabling often safer than deleting during an investigation?",
  "What should be verified after changing a scheduled task on a production-style server?",
];

export default function ScheduledTasksPersistenceReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows Server
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server/dhcp-server-security-review" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/event-viewer-server-logs" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows Server · Lesson 15
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Scheduled Tasks &amp; Persistence Review
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review scheduled tasks as both legitimate automation and a
                possible persistence mechanism by examining triggers, actions,
                identities, history, and execution paths.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                An unfamiliar task is not automatically malicious. Evidence,
                ownership, execution path, privilege, timing, and server-role
                dependencies determine what the task actually means.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Primary console</span>
                  <span className="font-bold text-white">taskschd.msc</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Key evidence</span>
                  <span className="font-bold text-white">Trigger + action</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Persistence concern</span>
                  <span className="font-bold text-white">Startup / logon</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Inspect + preserve</span>
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
            What this lesson should help you do
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((item, index) => (
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Core concepts
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Understand how a scheduled task works
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {concepts.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              The action matters more than the task name
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A task with a harmless name can launch a dangerous script, while
              a strange task name may belong to legitimate vendor software.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Evidence warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve before disabling or deleting
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Task XML, triggers, actions, run-as identity, timestamps, and
              history can explain what happened and what the task depends on.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Do not delete a suspicious task before recording its evidence and dependencies.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Tool map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Exactly where to review scheduled tasks
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {toolPaths.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                {item.path}
              </code>
              <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                Quick action
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.quick}</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Task properties
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Eight properties to inspect before changing a task
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {taskProperties.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Suspicious signals
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Task characteristics that deserve deeper investigation
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {suspiciousSignals.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Legitimate automation
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Unfamiliar does not mean malicious
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {legitimateExamples.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Verify
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.verify}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            PowerShell inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Inventory tasks without changing them
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {powerShellChecks.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Review questions
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Twelve questions before changing a task
        </h2>
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {reviewQuestions.map((item, index) => (
            <div
              key={item}
              className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <span className="font-black text-cyan-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-6 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Action path review
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Where the task launches from changes the risk
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {actionPathReview.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Evidence preservation
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Record these details before remediation
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {evidenceChecklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-yellow-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Event reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Use timestamps to build the task timeline
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {eventReasoning.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Troubleshooting
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            When scheduled automation fails or behaves unexpectedly
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {troubleshooting.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                  Symptom
                </p>
                <h3 className="mt-2 text-lg font-black text-white">{item.symptom}</h3>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Check
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.checks}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Scheduled-task decisions in server context
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {decisionCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.evidence}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.reasoning}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.response}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Controlled actions
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Prefer reversible changes when possible
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {controlledActions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                  Command
                </p>
                <code className="mt-2 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.caution}</p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                  Verify
                </p>
                <code className="mt-2 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-emerald-200">
                  {item.verify}
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Fictional defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Review scheduled tasks on APP-SRV
          </h2>
          <div className="mt-8 grid gap-4">
            {labSteps.map((item) => (
              <div
                key={item.number}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.24fr_1fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                    Step {item.number}
                  </p>
                  <h3 className="mt-2 font-black text-white">{item.title}</h3>
                </div>
                <p className="text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Common mistakes
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Scheduled-task mistakes that destroy evidence or break automation
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mistakes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Test your scheduled-task reasoning
            </h2>
            <div className="mt-5 grid gap-3">
              {reflection.map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm required automation still works
            </h2>
            <div className="mt-5 grid gap-3">
              {verification.map((item, index) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Competition checklist
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Before leaving scheduled-task review
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Next Windows Server lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Event Viewer &amp; Server Logs
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, review System, Security, Application, Task Scheduler,
                Defender, DNS, DHCP, and role-specific logs to build a reliable
                evidence timeline instead of guessing from isolated events.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-server/event-viewer-server-logs"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 16 &rarr;
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows Server
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server/dhcp-server-security-review" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/event-viewer-server-logs" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
