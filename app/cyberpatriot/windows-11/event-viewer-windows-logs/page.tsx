import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain the purpose of the Security, System, Application, and operational logs in Windows.",
  "Use Event Viewer to filter, search, and correlate events instead of reading logs randomly.",
  "Recognize how event time, source, event ID, user context, computer, and message details support troubleshooting and forensics.",
  "Distinguish a useful event from background noise and avoid treating a single log entry as complete proof.",
  "Use Event Viewer and PowerShell to inspect logs without deleting or altering evidence.",
  "Build a simple timeline that connects account activity, services, tasks, Defender, updates, and remote access.",
];

const logFamilies = [
  {
    title: "Security",
    text:
      "Contains audited security events such as logons, account changes, privilege use, and policy-related activity when the relevant auditing is enabled.",
  },
  {
    title: "System",
    text:
      "Contains events from Windows system components, drivers, services, startup, shutdown, and other operating-system activity.",
  },
  {
    title: "Application",
    text:
      "Contains events written by applications and application components, often useful for troubleshooting required software.",
  },
  {
    title: "Setup",
    text:
      "Contains installation and servicing activity related to Windows setup and some update operations.",
  },
  {
    title: "Forwarded Events",
    text:
      "Can contain events collected from other systems when event forwarding is configured. It may be empty in a normal local practice image.",
  },
  {
    title: "Applications and Services Logs",
    text:
      "Contains more specialized operational logs for Windows components and applications, often with richer detail than the basic Windows Logs view.",
  },
];

const eventFields = [
  {
    title: "Date and time",
    text:
      "Establishes when the event occurred and allows correlation with other activity.",
  },
  {
    title: "Source / provider",
    text:
      "Identifies the Windows component or application that wrote the event.",
  },
  {
    title: "Event ID",
    text:
      "Identifies a specific event type within that provider. Event IDs are useful only when interpreted with the provider and message.",
  },
  {
    title: "Level",
    text:
      "Information, Warning, Error, Critical, and other levels help prioritize, but severity alone does not determine security significance.",
  },
  {
    title: "User / security context",
    text:
      "Shows which account or security principal is associated with the event when available.",
  },
  {
    title: "Computer",
    text:
      "Identifies the system that generated the event, especially useful when working with forwarded or exported logs.",
  },
  {
    title: "Task category / keywords",
    text:
      "Provide additional classification that can help group or filter related event types.",
  },
  {
    title: "Message details",
    text:
      "The event message often contains paths, account names, services, error codes, process information, or other critical context.",
  },
];

const logMindset = [
  {
    title: "Question first",
    text:
      "Start with a specific question, such as 'Why did RDP fail?' or 'When was this account changed?' instead of scrolling through thousands of events.",
  },
  {
    title: "Relevant log second",
    text:
      "Choose the log and provider most likely to answer the question.",
  },
  {
    title: "Time window third",
    text:
      "Narrow the investigation to the period surrounding the known activity.",
  },
  {
    title: "Correlate",
    text:
      "Connect multiple events, users, files, services, tasks, or Defender findings rather than relying on one isolated entry.",
  },
  {
    title: "Verify context",
    text:
      "Confirm that the event actually refers to the user, system, service, or action you think it does.",
  },
];

const inspectionTools = [
  {
    title: "Event Viewer",
    command: "eventvwr.msc",
    text:
      "Primary graphical interface for Windows logs, custom views, filters, event properties, and saved log files.",
  },
  {
    title: "Filter Current Log",
    command: "Event Viewer → Filter Current Log",
    text:
      "Narrows events by time, level, source, event ID, user, keywords, and other criteria.",
  },
  {
    title: "Find",
    command: "Event Viewer → Find",
    text:
      "Searches the current log for text such as an account name, service, executable, or error code.",
  },
  {
    title: "Custom Views",
    command: "Event Viewer → Custom Views",
    text:
      "Lets you preserve useful filters so repeated investigation can be faster and more consistent.",
  },
];

const powershellExamples = [
  {
    label: "Recent System events",
    command:
      "Get-WinEvent -LogName System -MaxEvents 50 | Select-Object TimeCreated, Id, LevelDisplayName, ProviderName, Message",
    purpose:
      "Provides a quick read-only view of recent System events.",
  },
  {
    label: "Recent Security events",
    command:
      "Get-WinEvent -LogName Security -MaxEvents 50 | Select-Object TimeCreated, Id, ProviderName, Message",
    purpose:
      "Shows recent Security events when permissions allow access.",
  },
  {
    label: "Filter by Event ID",
    command:
      "Get-WinEvent -FilterHashtable @{LogName='System'; Id=7036} -MaxEvents 20",
    purpose:
      "Illustrates how to narrow one log to a specific event type instead of reading everything.",
  },
  {
    label: "Filter by recent time",
    command:
      "$start=(Get-Date).AddHours(-2); Get-WinEvent -FilterHashtable @{LogName='System'; StartTime=$start}",
    purpose:
      "Limits review to a recent time window when troubleshooting a known change.",
  },
];

const usefulSecurityExamples = [
  {
    event: "Successful sign-in activity",
    use:
      "Can help establish when an account authenticated successfully and support remote-access or local-logon timelines.",
  },
  {
    event: "Failed sign-in activity",
    use:
      "Can reveal repeated authentication failures, stale credentials, misconfiguration, or suspicious access attempts.",
  },
  {
    event: "Account creation, deletion, or change",
    use:
      "Can support investigation of user-management activity when the relevant auditing is enabled.",
  },
  {
    event: "Group membership change",
    use:
      "Can help establish when a user gained or lost privileged group membership.",
  },
  {
    event: "Policy change",
    use:
      "Can help explain when security or audit settings were modified.",
  },
  {
    event: "Process or privilege activity",
    use:
      "Can provide additional context when the correct auditing is enabled, but these categories may generate significant volume.",
  },
];

const systemExamples = [
  {
    event: "Service start / stop",
    use:
      "Useful when a required service fails, changes state, or is unexpectedly restarted.",
  },
  {
    event: "Service Control Manager error",
    use:
      "Can explain why a service failed to start or why a dependency is missing.",
  },
  {
    event: "Driver or device issue",
    use:
      "Can help connect hardware or networking problems to a driver or device event.",
  },
  {
    event: "Unexpected shutdown",
    use:
      "Can establish whether the system restarted or shut down unexpectedly during the timeline.",
  },
  {
    event: "Update or servicing issue",
    use:
      "Can help explain failures surrounding Windows Update or component servicing.",
  },
  {
    event: "Time synchronization or system state",
    use:
      "Important when comparing timestamps across evidence sources.",
  },
];

const applicationExamples = [
  {
    event: "Application crash",
    use:
      "Can explain why required software stopped working after a configuration or update change.",
  },
  {
    event: "Application warning",
    use:
      "May show degraded operation before a complete failure occurs.",
  },
  {
    event: "Application service error",
    use:
      "Can connect an app failure to service state, permissions, or configuration.",
  },
  {
    event: "Authentication or database error",
    use:
      "Some applications log their own user-access or backend problems in the Application log.",
  },
];

const timelineQuestions = [
  "What happened first?",
  "Which user or service account was involved?",
  "Which system component recorded the event?",
  "What changed immediately before the problem or finding?",
  "Did another event occur seconds or minutes later?",
  "Does the same account appear in Security, System, Task Scheduler, Defender, or application evidence?",
  "Does the event message contain a file path, process, service, or error code?",
  "Does the scenario or forensic question give a known time anchor?",
  "Are the system clock and timestamps trustworthy enough for comparison?",
  "What evidence would confirm or challenge the current hypothesis?",
];

const decisionCases = [
  {
    title: "RDP failure after firewall work",
    evidence:
      "Morgan reports that RDP stopped working immediately after firewall changes.",
    reasoning:
      "The team has a known time window and a specific service path to investigate.",
    response:
      "Correlate firewall changes, Security sign-in events, System service events, and RDP-related operational logs around that time instead of changing random settings.",
  },
  {
    title: "Unexpected administrator account",
    evidence:
      "An administrator account appears that the scenario does not authorize.",
    reasoning:
      "Account state alone does not explain when or how it appeared.",
    response:
      "Review relevant Security auditing for account and group changes, correlate timestamps with logons and other system activity, and document the timeline before remediation.",
  },
  {
    title: "Service repeatedly fails",
    evidence:
      "A required application service starts and then stops repeatedly.",
    reasoning:
      "The service state shows the symptom, while System and Application logs may explain the cause.",
    response:
      "Filter around the failure time for the service provider, Service Control Manager, and application events; fix the root cause and verify the service remains stable.",
  },
  {
    title: "Scheduled task ran near suspicious activity",
    evidence:
      "Task Scheduler shows an unknown task ran at 10:42 PM, close to another suspicious event.",
    reasoning:
      "One timestamp creates a lead but not proof of cause.",
    response:
      "Correlate task history, Security logons, System/Application events, script path evidence, and other timestamps before drawing a conclusion.",
  },
];

const evidencePreservation = [
  {
    title: "Do not clear logs",
    text:
      "Clearing a log can remove exactly the evidence needed for troubleshooting or forensic questions.",
  },
  {
    title: "Record before changing",
    text:
      "Capture key event details, timestamps, IDs, provider, account, path, and message before related configuration is modified.",
  },
  {
    title: "Export when useful",
    text:
      "Saving a relevant log or filtered view can preserve evidence for later review in an authorized practice environment.",
  },
  {
    title: "Keep notes separate",
    text:
      "Maintain a change log so team actions are not confused with pre-existing events.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional scenario",
    text:
      "A Windows 11 workstation has a forensic question about an unexpected administrator account. RDP is required for Morgan, and an unknown scheduled task ran during the same evening.",
  },
  {
    number: "02",
    title: "Define the question",
    text:
      "The investigation asks when the account appeared, which activity occurred around that time, and whether the scheduled task is connected.",
  },
  {
    number: "03",
    title: "Narrow the timeline",
    text:
      "Use the known task run time and account evidence to define a small review window rather than reading an entire day's logs.",
  },
  {
    number: "04",
    title: "Correlate sources",
    text:
      "Review Security account and logon activity, Task Scheduler history, System events, and any relevant script or file timestamps.",
  },
  {
    number: "05",
    title: "Build the timeline",
    text:
      "Record only supported facts in chronological order and separate confirmed events from assumptions.",
  },
  {
    number: "06",
    title: "Preserve and remediate",
    text:
      "Save the important evidence, document the timeline, then correct the unauthorized account or task only after the evidence has been preserved.",
  },
];

const troubleshooting = [
  {
    symptom: "Too many events",
    questions:
      "Can you narrow by time, provider, event ID, account name, or known error code? Start from the investigation question.",
  },
  {
    symptom: "Expected Security events are missing",
    questions:
      "Was the relevant audit category enabled at the time? Are you looking at the correct log? Was the log overwritten or cleared?",
  },
  {
    symptom: "Event message is unclear",
    questions:
      "What provider generated it? What is the event ID? What other events occurred immediately before and after it?",
  },
  {
    symptom: "Timestamps do not line up",
    questions:
      "Are events from the same system and timezone? Did the system clock change? Are you comparing local time with another time format?",
  },
];

const mistakes = [
  {
    title: "Scrolling without a question",
    text:
      "Large Windows logs contain too much background activity for random browsing to be efficient.",
  },
  {
    title: "Treating one event as proof",
    text:
      "A single entry may show that something occurred without explaining why, who caused it, or whether it is suspicious.",
  },
  {
    title: "Ignoring provider context",
    text:
      "The same event ID number can mean different things for different providers.",
  },
  {
    title: "Clearing logs during cleanup",
    text:
      "This destroys useful evidence and can make later forensic questions impossible to answer.",
  },
  {
    title: "Confusing team actions with pre-existing activity",
    text:
      "Without a change log, your own hardening work can contaminate the investigation timeline.",
  },
  {
    title: "Ignoring operational logs",
    text:
      "Specialized Applications and Services logs may contain the most useful detail for RDP, Task Scheduler, Defender, or another component.",
  },
];

const verification = [
  "Confirm the investigation question is answered by evidence rather than assumption.",
  "Record timestamps, provider, event ID, user, and relevant message details.",
  "Correlate at least two evidence sources when making an important forensic conclusion.",
  "Confirm team-generated changes are documented separately.",
  "Do not clear logs needed for later work.",
  "Export relevant evidence when useful in the practice environment.",
  "Check System and Application logs after high-impact configuration changes.",
  "Use Security logs when account, privilege, or authentication activity is relevant.",
  "Review operational logs for component-specific troubleshooting.",
  "Document unresolved questions instead of forcing a conclusion.",
];

const checklist = [
  "Start with a specific troubleshooting or forensic question.",
  "Choose the most relevant log.",
  "Narrow by time window.",
  "Filter by provider, event ID, user, or keywords.",
  "Read the full event message.",
  "Record important timestamps and context.",
  "Correlate with at least one other source.",
  "Separate confirmed facts from hypotheses.",
  "Preserve relevant logs and notes.",
  "Do not clear evidence during cleanup.",
  "Re-check logs after major changes for new errors.",
];

const reflection = [
  "Why is an Event ID incomplete without its provider and message context?",
  "Why should you start with a question instead of browsing logs randomly?",
  "What is the value of correlating Security, System, Task Scheduler, and Defender evidence?",
  "Why can clearing logs damage a forensic investigation?",
  "How can your team's own actions contaminate a timeline?",
  "What should be recorded from an important Windows event?",
];

export default function EventViewerWindowsLogsPage() {
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
            <Link href="/cyberpatriot/windows-11/task-scheduler-persistence-review" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/powershell-defensive-administration" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
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
                Windows 11 · Lesson 13
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Event Viewer &amp; Windows Logs
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Use Windows logs to answer specific questions, troubleshoot
                failures, build timelines, and support forensic conclusions
                without drowning in background noise.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The best log analysis begins with a question. Choose the right
                log, narrow the time window, filter intelligently, and correlate
                multiple sources before deciding what happened.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Major log families</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core event fields</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main skill</span>
                  <span className="font-bold text-white">Correlation</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Evidence-based timeline</span>
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
              Logs answer questions when you give them context
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A useful event is one that helps answer a specific question and
              can be connected to users, services, files, tasks, or other
              evidence.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Evidence warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              One event rarely tells the whole story
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Event logs can show that something occurred, but context and
              correlation are usually required to explain why and what it means.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Do not clear logs or force a conclusion from one isolated event.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Windows log map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Six log families to recognize
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {logFamilies.map((item) => (
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
            Event anatomy
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Eight fields that give an event meaning
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {eventFields.map((item) => (
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
          Investigation mindset
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          A practical way to reason through logs
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {logMindset.map((item) => (
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
              Event Viewer tools
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Narrow the evidence efficiently
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
              Query event logs without altering them
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Security log examples
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Account and authentication evidence
            </h2>
            <div className="mt-5 grid gap-3">
              {usefulSecurityExamples.map((item) => (
                <div
                  key={item.event}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.event}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.use}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              System log examples
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Services, drivers, restart, and system health
            </h2>
            <div className="mt-5 grid gap-3">
              {systemExamples.map((item) => (
                <div
                  key={item.event}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.event}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.use}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Application log examples
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Required software can explain its own failures
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {applicationExamples.map((item) => (
            <div
              key={item.event}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.event}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.use}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Timeline questions
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Ten questions that turn events into a timeline
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {timelineQuestions.map((item, index) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Use logs to answer the right question
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
            Evidence preservation
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Protect the logs before cleanup
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {evidencePreservation.map((item) => (
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
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Fictional defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build a timeline for an unexpected administrator account
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
            When log analysis gets confusing
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {troubleshooting.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.symptom}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.questions}</p>
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
          Log-analysis habits that create bad conclusions
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
              Test your log-analysis reasoning
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
              Confirm your conclusion is evidence-based
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
            Before leaving Event Viewer
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
                PowerShell for Defensive Administration
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how to use PowerShell for fast defensive inventory,
                filtering, verification, and evidence-aware administration
                without turning scripts into blind bulk changes.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-11/powershell-defensive-administration"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 14 →
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
            <Link href="/cyberpatriot/windows-11/task-scheduler-persistence-review" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/powershell-defensive-administration" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
