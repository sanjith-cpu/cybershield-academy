import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how Windows Task Scheduler uses tasks, triggers, actions, accounts, conditions, and settings.",
  "Distinguish legitimate automation from suspicious or unnecessary persistence without assuming every unfamiliar task is malicious.",
  "Review task location, author, trigger, action path, account context, and last-run evidence before making changes.",
  "Recognize common persistence signals such as unusual paths, unexpected user contexts, repetitive triggers, or tasks with no clear required purpose.",
  "Use Task Scheduler and PowerShell to inspect scheduled tasks in an authorized practice environment.",
  "Disable or remove only tasks that are clearly unnecessary or unauthorized, then verify that required software and services still function.",
];

const taskAnatomy = [
  {
    title: "Task name and path",
    text:
      "The task name and folder location help show whether it belongs to Windows, an application, or a custom configuration.",
  },
  {
    title: "Trigger",
    text:
      "Defines when the task runs, such as at startup, at logon, on a schedule, or when a specific event occurs.",
  },
  {
    title: "Action",
    text:
      "Defines what the task launches or performs, such as running a program or script.",
  },
  {
    title: "Account context",
    text:
      "Shows which user or service identity the task runs as and whether elevated privileges are requested.",
  },
  {
    title: "Conditions",
    text:
      "Controls whether the task runs only under specific power, network, idle, or other conditions.",
  },
  {
    title: "Settings",
    text:
      "Controls retries, time limits, missed-run behavior, and other execution details.",
  },
  {
    title: "Last run and result",
    text:
      "Execution history can show whether the task runs successfully, fails, or has not run recently.",
  },
  {
    title: "Author / owner context",
    text:
      "Author information can help explain whether the task came from Windows, a known application, an administrator, or an unknown source.",
  },
];

const triggerTypes = [
  {
    title: "At startup",
    text:
      "Runs when Windows starts. Useful for maintenance and applications, but also important when reviewing automatic persistence.",
  },
  {
    title: "At logon",
    text:
      "Runs when a user signs in. Review whether the task applies to one user or many users.",
  },
  {
    title: "On a schedule",
    text:
      "Runs at a specific time or interval. Frequency and purpose should make sense for the application or maintenance job.",
  },
  {
    title: "On an event",
    text:
      "Runs when a Windows event occurs. These tasks can support legitimate automation and require event-context review.",
  },
  {
    title: "On idle / condition",
    text:
      "Runs when system conditions are met rather than at a fixed time.",
  },
];

const actionSignals = [
  {
    title: "Program Files path",
    text:
      "Often indicates installed software, but still verify the application and publisher.",
  },
  {
    title: "Windows system path",
    text:
      "May indicate a built-in Windows component. Do not modify system tasks without understanding their role.",
  },
  {
    title: "User-profile path",
    text:
      "Can be legitimate, but deserves closer review when paired with automatic or privileged execution.",
  },
  {
    title: "Temporary or unusual path",
    text:
      "A task launching from a temporary or unexpected folder deserves investigation because the path may not match normal installed software.",
  },
  {
    title: "Script or command interpreter",
    text:
      "PowerShell, cmd, wscript, cscript, and other interpreters may be used legitimately. Review the exact script or command and its purpose.",
  },
  {
    title: "Missing target",
    text:
      "A task whose action points to a file that no longer exists may be leftover configuration or evidence of prior software.",
  },
];

const classification = [
  {
    label: "Required",
    text:
      "Clearly supports Windows, a required application, updates, backup, security, or another scenario-required function.",
    action:
      "Keep it, understand what it does, and verify the required function.",
  },
  {
    label: "Unnecessary",
    text:
      "Legitimate but not needed, and it adds avoidable automatic execution.",
    action:
      "Disable the task first when appropriate, verify impact, and remove only if justified.",
  },
  {
    label: "Misconfigured",
    text:
      "The task is required but its trigger, account, privilege, or action is inappropriate.",
    action:
      "Correct the specific configuration rather than removing the whole task.",
  },
  {
    label: "Investigate",
    text:
      "Purpose is unclear or suspicious signals exist, but evidence is incomplete.",
    action:
      "Gather path, trigger, action, account, history, file details, and application ownership before changing it.",
  },
];

const inspectionTools = [
  {
    title: "Task Scheduler Library",
    command: "taskschd.msc",
    text:
      "Primary graphical tool for reviewing scheduled tasks, triggers, actions, accounts, history, and folders.",
  },
  {
    title: "Task Scheduler folders",
    command: "Task Scheduler Library → Microsoft → Windows",
    text:
      "Contains many built-in Windows tasks. Avoid assuming system-folder tasks are removable merely because their names are unfamiliar.",
  },
  {
    title: "Task properties",
    command: "Task → Properties",
    text:
      "Shows General, Triggers, Actions, Conditions, Settings, and History information for one task.",
  },
  {
    title: "Task history",
    command: "Task Scheduler → History",
    text:
      "Helps establish when a task ran, whether it succeeded, and how its execution relates to other system events.",
  },
];

const powershellExamples = [
  {
    label: "List scheduled tasks",
    command:
      "Get-ScheduledTask | Sort-Object TaskPath, TaskName | Select-Object TaskPath, TaskName, State",
    purpose:
      "Creates a broad inventory of scheduled tasks without changing them.",
  },
  {
    label: "Inspect one task",
    command:
      'Get-ScheduledTask -TaskName "ExampleTask" | Format-List *',
    purpose:
      "Shows task metadata, triggers, actions, principal, and settings for a known authorized practice task.",
  },
  {
    label: "Review task run information",
    command:
      'Get-ScheduledTaskInfo -TaskName "ExampleTask"',
    purpose:
      "Shows last-run time, next-run time, result, and other execution information.",
  },
  {
    label: "Find executable actions",
    command:
      "Get-ScheduledTask | ForEach-Object { $t=$_; $t.Actions | Select-Object @{N='TaskName';E={$t.TaskName}}, Execute, Arguments }",
    purpose:
      "Helps connect tasks to their program or script actions for investigation.",
  },
];

const reviewQuestions = [
  "What application, Windows component, or administrator created this task?",
  "Where is the task stored in Task Scheduler?",
  "What triggers it?",
  "What exact program, script, or command does it run?",
  "Where is that executable or script located?",
  "Which account runs the task?",
  "Does it run with elevated privileges?",
  "How often does it run?",
  "When did it last run and what was the result?",
  "Is the task required by the scenario or a required application?",
  "Would disabling it break updates, security, backup, remote access, or another workflow?",
  "Could the task or its history matter to a forensic question?",
];

const persistenceSignals = [
  {
    title: "Unexpected logon or startup trigger",
    text:
      "A task that launches automatically for every user or at every boot deserves attention if its purpose is unclear.",
  },
  {
    title: "Unusual executable path",
    text:
      "User-profile, temporary, or hidden-looking locations deserve context, especially when the task runs elevated.",
  },
  {
    title: "Unknown author or owner",
    text:
      "Missing or unfamiliar author information is not proof of abuse, but it increases the need for investigation.",
  },
  {
    title: "High privilege without clear need",
    text:
      "A task running as SYSTEM or with highest privileges should have a strong operational reason.",
  },
  {
    title: "Very frequent repetition",
    text:
      "A task that runs every few minutes may be legitimate monitoring or maintenance, but the frequency should match its purpose.",
  },
  {
    title: "Encoded or opaque command",
    text:
      "Commands that are difficult to interpret deserve careful review and evidence collection before modification.",
  },
];

const decisionCases = [
  {
    title: "Required backup task",
    evidence:
      "A scheduled task runs nightly under a dedicated service account and backs up a required project directory.",
    reasoning:
      "The task has a clear business purpose and expected schedule.",
    response:
      "Keep it, verify the account and destination are appropriate, and confirm the task completes successfully.",
  },
  {
    title: "Updater task for unnecessary software",
    evidence:
      "A removed media utility left behind a daily updater task that points to a file that no longer exists.",
    reasoning:
      "The original application is gone and the task no longer performs a useful function.",
    response:
      "Document the leftover task, disable or remove it, and verify no required application depends on it.",
  },
  {
    title: "Unknown task at every logon",
    evidence:
      "A task triggers at every user logon, runs with highest privileges, and launches a script from a user-profile directory.",
    reasoning:
      "The combination of trigger, privilege, and path deserves investigation, but the task should not be destroyed before evidence is preserved.",
    response:
      "Record task XML or properties, trigger, action, account, timestamps, script path, and related logs before deciding on remediation.",
  },
  {
    title: "Built-in Windows maintenance task",
    evidence:
      "A task inside a Microsoft\\Windows folder has an unfamiliar technical name and runs automatically.",
    reasoning:
      "Built-in system tasks often have unfamiliar names and may support maintenance or security.",
    response:
      "Verify that it is a legitimate Windows task and leave it unchanged unless strong evidence shows a problem.",
  },
];

const evidenceValue = [
  {
    title: "Task creation and modification",
    text:
      "Task metadata and logs may help establish when automatic execution was configured.",
  },
  {
    title: "Last-run time",
    text:
      "Can help correlate task execution with suspicious activity or application behavior.",
  },
  {
    title: "Action path",
    text:
      "Identifies the executable or script connected to the task.",
  },
  {
    title: "Principal",
    text:
      "Shows which user or system account runs the task and how much privilege it has.",
  },
  {
    title: "Trigger",
    text:
      "Explains when execution occurs and whether it is tied to startup, logon, schedule, or an event.",
  },
  {
    title: "Task result",
    text:
      "Success or failure can help determine whether the task was actually functioning.",
  },
];

const safeChangeOptions = [
  {
    title: "Disable first",
    text:
      "For a suspicious but non-urgent task, disabling can be safer than immediate deletion because it preserves configuration for review.",
  },
  {
    title: "Correct the task",
    text:
      "If the task is required but misconfigured, change only the trigger, account, privilege, or action that is wrong.",
  },
  {
    title: "Remove when justified",
    text:
      "Delete only when the task is clearly unnecessary or unauthorized and relevant evidence has been preserved.",
  },
  {
    title: "Leave and document",
    text:
      "If evidence is incomplete and the task is not causing immediate harm, document it and continue investigation rather than guessing.",
  },
];

const troubleshooting = [
  {
    symptom: "Required task no longer runs",
    questions:
      "Was the task disabled? Did the account password change? Is the action path valid? Are conditions preventing execution? Does Task Scheduler show an error result?",
  },
  {
    symptom: "Task runs but application fails",
    questions:
      "Does the task use the correct working directory, arguments, account, permissions, and environment? Is the target executable still present?",
  },
  {
    symptom: "Task keeps reappearing",
    questions:
      "Is an installed application, service, deployment tool, or another scheduled task recreating it?",
  },
  {
    symptom: "Task runs unexpectedly often",
    questions:
      "Are there multiple triggers? Is a repeat interval configured? Is an event trigger firing repeatedly?",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional scenario",
    text:
      "Windows Update, Defender, and a nightly project backup are required. A forensic question asks about an unknown script that ran at user logon.",
  },
  {
    number: "02",
    title: "Inventory tasks",
    text:
      "The backup task runs nightly under a service account. A Microsoft Windows task handles maintenance. An unknown task named UserSync runs at every logon with highest privileges.",
  },
  {
    number: "03",
    title: "Inspect UserSync",
    text:
      "Its action points to a script in a user-profile directory. The author field is unclear, and the last-run time matches the forensic timeline.",
  },
  {
    number: "04",
    title: "Preserve evidence",
    text:
      "Record the task path, trigger, action, arguments, account, privilege level, last-run time, and script location before making changes.",
  },
  {
    number: "05",
    title: "Apply controlled remediation",
    text:
      "Keep the required backup and Windows maintenance tasks. Disable UserSync after evidence is preserved while further investigation continues.",
  },
  {
    number: "06",
    title: "Verify",
    text:
      "Confirm required tasks still run, UserSync no longer executes automatically, the system remains stable, and forensic notes capture the relevant evidence.",
  },
];

const mistakes = [
  {
    title: "Deleting unfamiliar tasks immediately",
    text:
      "This can erase useful forensic context or break required software.",
  },
  {
    title: "Ignoring built-in task folders",
    text:
      "Windows contains many legitimate scheduled tasks with technical names.",
  },
  {
    title: "Reviewing only task name",
    text:
      "Trigger, action, path, account, privilege, and history provide far more useful context.",
  },
  {
    title: "Assuming every PowerShell task is malicious",
    text:
      "Administrative scripts and maintenance tasks may legitimately use PowerShell.",
  },
  {
    title: "Ignoring account context",
    text:
      "A task running as SYSTEM or with highest privileges deserves different scrutiny than a normal user task.",
  },
  {
    title: "No post-change verification",
    text:
      "Disabling a task can affect updates, backups, applications, or security automation.",
  },
];

const verification = [
  "Re-open Task Scheduler and confirm the intended task state.",
  "Confirm required Windows and application tasks remain enabled.",
  "Confirm required backup, update, or maintenance tasks still work.",
  "Confirm disabled suspicious tasks no longer execute automatically.",
  "Confirm related applications still function.",
  "Review Task Scheduler history for unexpected failures.",
  "Check Event Viewer when required tasks fail.",
  "Confirm no required service or startup workflow was affected.",
  "Preserve forensic notes for suspicious tasks and scripts.",
  "Document every high-impact scheduled-task change.",
];

const checklist = [
  "Review Task Scheduler Library and major subfolders.",
  "Record task name, path, trigger, action, and account for suspicious items.",
  "Review highest-privilege execution carefully.",
  "Review user-profile and temporary action paths.",
  "Check last-run time and result.",
  "Map tasks to required Windows or application functions.",
  "Separate Required, Unnecessary, Misconfigured, and Investigate tasks.",
  "Preserve evidence before deleting suspicious tasks.",
  "Prefer disable-first when investigation is still active.",
  "Verify required automation after changes.",
  "Document unresolved tasks and scripts.",
];

const reflection = [
  "Why is an unfamiliar scheduled task not automatically malicious?",
  "What makes a task running at logon with highest privileges worth investigating?",
  "Why can disabling a task be safer than deleting it immediately?",
  "What information should be preserved before changing a suspicious task?",
  "Why should built-in Microsoft Windows tasks be treated carefully?",
  "What should be verified after disabling or removing a scheduled task?",
];

export default function TaskSchedulerPersistenceReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows 11
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11/remote-access-rdp" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/event-viewer-windows-logs" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows 11 · Lesson 12
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Task Scheduler &amp; Persistence Review
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how scheduled tasks automate Windows, how legitimate tasks
                differ from suspicious persistence, and how to preserve evidence
                before changing automatic execution.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                A scheduled task is not suspicious just because it runs
                automatically. The key is whether its trigger, action, account,
                privilege, path, timing, and purpose make sense for the system.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Task components</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Trigger types</span>
                  <span className="font-bold text-white">5</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Classification buckets</span>
                  <span className="font-bold text-white">4</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Explainable automation</span>
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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core concept
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Persistence is about repeated execution
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Scheduled tasks can make programs or scripts run again at startup,
              logon, a set time, or another trigger. That can be completely
              legitimate or worth investigating depending on context.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Evidence warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Deleting a task can destroy useful context
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Task properties, action paths, timestamps, account context, and
              history can help answer forensic questions.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Preserve the task details before destructive remediation.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Task anatomy
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Eight parts of a scheduled task
        </h2>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {taskAnatomy.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Trigger types
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Understand when execution happens
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {triggerTypes.map((item) => (
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
          Action-path review
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Where the task points matters
        </h2>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {actionSignals.map((item) => (
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
            Classification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Put each task in the right category
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {classification.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.action}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Task Scheduler
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Inspect tasks from the GUI
            </h2>

            <div className="mt-5 grid gap-3">
              {inspectionTools.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              PowerShell inspection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Query tasks without changing them
            </h2>

            <div className="mt-5 grid gap-3">
              {powershellExamples.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Investigation questions
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Twelve questions before changing a task
          </h2>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {reviewQuestions.map((item, index) => (
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Persistence signals
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Indicators that deserve closer review
        </h2>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {persistenceSignals.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Scheduled-task decisions in context
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
            Forensic value
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Scheduled tasks can help explain a timeline
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {evidenceValue.map((item) => (
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
          Change choices
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Choose the least destructive option that fits the evidence
        </h2>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {safeChangeOptions.map((item) => (
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
            Fictional defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Investigate suspicious persistence without breaking required automation
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Troubleshooting
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            When a scheduled task does not behave as expected
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {troubleshooting.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.symptom}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.questions}
                </p>
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
          Task-review habits that create avoidable problems
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

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm the final scheduled-task state
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
            Before leaving Task Scheduler
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
                Next Windows lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Event Viewer &amp; Windows Logs
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how to use Security, System, Application, and
                operational logs to troubleshoot changes, investigate activity,
                and support forensic conclusions.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-11/event-viewer-windows-logs"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 13 →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows 11
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11/remote-access-rdp" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/event-viewer-windows-logs" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
