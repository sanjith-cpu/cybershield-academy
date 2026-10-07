import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Use Event Viewer and PowerShell to investigate Windows Server activity without relying on isolated events.",
  "Distinguish System, Security, Application, and role-specific event logs.",
  "Build a timeline by correlating timestamps, event IDs, providers, users, processes, services, tasks, and network-related evidence.",
  "Recognize high-value authentication, service, task, policy, update, Defender, DNS, and DHCP events.",
  "Preserve logs and event details before clearing, overwriting, or changing the systems that produced them.",
  "Verify server health after remediation by reviewing both functionality and new log evidence.",
];

const coreConcepts = [
  {
    title: "Event log",
    text:
      "A structured record of activity written by Windows, services, applications, and security components.",
  },
  {
    title: "Channel",
    text:
      "A named log such as System, Security, Application, DNS Server, or a Microsoft-Windows operational log.",
  },
  {
    title: "Provider",
    text:
      "The component that generated the event, such as Service Control Manager, Security-Auditing, DNS Server, or TaskScheduler.",
  },
  {
    title: "Event ID",
    text:
      "A numeric identifier that helps classify an event, but the ID must still be interpreted with the provider and event details.",
  },
  {
    title: "Timeline",
    text:
      "A chronological sequence that connects related events instead of treating each log entry as an isolated fact.",
  },
  {
    title: "Correlation",
    text:
      "The process of comparing multiple logs, timestamps, identities, processes, services, and configuration changes to understand what happened.",
  },
];

const toolPaths = [
  {
    title: "Event Viewer",
    path:
      "Win + R → eventvwr.msc",
    quick:
      "Event Viewer → Windows Logs",
    note:
      "Primary GUI for System, Security, Application, Setup, and Forwarded Events.",
  },
  {
    title: "System log",
    path:
      "Event Viewer → Windows Logs → System",
    quick:
      "Filter by Critical, Error, Warning, provider, Event ID, or time",
    note:
      "Useful for services, drivers, startup/shutdown, networking, hardware, and operating-system activity.",
  },
  {
    title: "Security log",
    path:
      "Event Viewer → Windows Logs → Security",
    quick:
      "Review successful/failed logons, account changes, privilege use, and audit events",
    note:
      "Available detail depends on the effective audit policy. Missing events do not automatically prove nothing happened.",
  },
  {
    title: "Application log",
    path:
      "Event Viewer → Windows Logs → Application",
    quick:
      "Review application and framework errors",
    note:
      "Useful when a required server application or service fails after a configuration change.",
  },
  {
    title: "Task Scheduler log",
    path:
      "Event Viewer → Applications and Services Logs → Microsoft → Windows → TaskScheduler → Operational",
    quick:
      "Correlate task registration, trigger, action, success, and failure events",
    note:
      "Important when scheduled tasks are used for required automation or suspicious persistence.",
  },
  {
    title: "Defender log",
    path:
      "Event Viewer → Applications and Services Logs → Microsoft → Windows → Windows Defender → Operational",
    quick:
      "Review detections, remediation, configuration, and protection events",
    note:
      "Preserve detection details before clearing history or changing suspicious files.",
  },
  {
    title: "Windows Update log",
    path:
      "Event Viewer → Applications and Services Logs → Microsoft → Windows → WindowsUpdateClient → Operational",
    quick:
      "Review scan, download, installation, and update failures",
    note:
      "Useful when patching behavior does not match what Windows Update reports in the GUI.",
  },
  {
    title: "Role-specific logs",
    path:
      "Event Viewer → Applications and Services Logs",
    quick:
      "Review DNS Server, DHCP-Server, and other installed-role channels",
    note:
      "Server roles often have their own logs with better context than the general Windows logs.",
  },
];

const windowsLogs = [
  {
    title: "System",
    focus:
      "Services, drivers, boot, shutdown, devices, networking, and core operating-system components.",
    example:
      "A required service fails to start after a configuration change.",
  },
  {
    title: "Security",
    focus:
      "Authentication, account changes, group membership, audit policy, process creation, and other audited security activity.",
    example:
      "Repeated failed logons followed by a successful privileged logon.",
  },
  {
    title: "Application",
    focus:
      "Applications, frameworks, database engines, application services, and software-specific failures.",
    example:
      "A required application crashes after a patch or service-account change.",
  },
  {
    title: "Setup",
    focus:
      "Operating-system setup and some installation or servicing events.",
    example:
      "A role, feature, or update-related installation event.",
  },
  {
    title: "Forwarded Events",
    focus:
      "Events collected from other systems when Windows Event Forwarding is configured.",
    example:
      "Centralized evidence from authorized domain systems.",
  },
];

const securityEventExamples = [
  {
    id: "4624",
    title: "Successful logon",
    text:
      "Useful for identifying account, logon type, source information, and timing of successful authentication.",
  },
  {
    id: "4625",
    title: "Failed logon",
    text:
      "Useful for reviewing failed authentication attempts and the account or source involved.",
  },
  {
    id: "4688",
    title: "Process creation",
    text:
      "Can show newly created processes when the required audit policy is enabled. Command-line detail depends on audit configuration.",
  },
  {
    id: "4720",
    title: "User account created",
    text:
      "Useful when investigating unexpected account creation in environments where this auditing is recorded.",
  },
  {
    id: "4728 / 4732",
    title: "Member added to privileged or local groups",
    text:
      "Can help identify membership changes in supported group contexts.",
  },
  {
    id: "4719",
    title: "System audit policy changed",
    text:
      "Important when auditing behavior unexpectedly changes.",
  },
  {
    id: "1102",
    title: "Audit log cleared",
    text:
      "A high-value event because clearing the Security log destroys evidence and deserves investigation.",
  },
];

const systemEventExamples = [
  {
    id: "7045",
    title: "Service installed",
    provider:
      "Service Control Manager",
    text:
      "Useful when investigating newly created services or possible persistence.",
  },
  {
    id: "7036",
    title: "Service state changed",
    provider:
      "Service Control Manager",
    text:
      "Shows service transitions such as running or stopped.",
  },
  {
    id: "7031 / 7034",
    title: "Service terminated unexpectedly",
    provider:
      "Service Control Manager",
    text:
      "Useful when a required service repeatedly crashes or stops.",
  },
  {
    id: "6005",
    title: "Event Log service started",
    provider:
      "EventLog",
    text:
      "Often useful as a startup-related timeline marker.",
  },
  {
    id: "6006",
    title: "Event Log service stopped",
    provider:
      "EventLog",
    text:
      "Often useful as a normal shutdown-related timeline marker.",
  },
  {
    id: "6008",
    title: "Unexpected shutdown",
    provider:
      "EventLog",
    text:
      "Can indicate a crash, power loss, forced restart, or other abnormal shutdown.",
  },
];

const highValueQuestions = [
  "What exact time did the event occur?",
  "Which server generated it?",
  "Which log and provider produced it?",
  "What Event ID is shown?",
  "Which user, computer, process, service, or task is referenced?",
  "Was this event expected for the server role?",
  "What happened immediately before it?",
  "What happened immediately after it?",
  "Does another log confirm or contradict the same activity?",
  "Did the event coincide with a configuration change?",
  "Did required functionality stop or start working at the same time?",
  "What evidence should be preserved before remediation?",
];

const powershellChecks = [
  {
    label: "Recent System events",
    command:
      "Get-WinEvent -LogName System -MaxEvents 50 | Select-Object TimeCreated, Id, ProviderName, LevelDisplayName, Message",
    purpose:
      "Provides a quick recent-event view for core server activity.",
  },
  {
    label: "Recent Security events",
    command:
      "Get-WinEvent -LogName Security -MaxEvents 50 | Select-Object TimeCreated, Id, ProviderName, Message",
    purpose:
      "Reviews recent audited security events. Administrator rights are commonly required.",
  },
  {
    label: "Recent Application events",
    command:
      "Get-WinEvent -LogName Application -MaxEvents 50 | Select-Object TimeCreated, Id, ProviderName, LevelDisplayName, Message",
    purpose:
      "Reviews recent application and framework events.",
  },
  {
    label: "Filter failed logons",
    command:
      "Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4625} -MaxEvents 30 | Select-Object TimeCreated, Id, Message",
    purpose:
      "Narrows the Security log to failed logon events.",
  },
  {
    label: "Filter service-install events",
    command:
      "Get-WinEvent -FilterHashtable @{LogName='System'; ProviderName='Service Control Manager'; Id=7045} -MaxEvents 20 | Select-Object TimeCreated, Id, Message",
    purpose:
      "Finds recent service-installation events.",
  },
  {
    label: "Filter by time window",
    command:
      "$start = (Get-Date).AddHours(-2); Get-WinEvent -FilterHashtable @{LogName='System'; StartTime=$start} | Select-Object TimeCreated, Id, ProviderName, Message",
    purpose:
      "Limits investigation to a relevant time window instead of reviewing the entire log.",
  },
  {
    label: "Task Scheduler events",
    command:
      "Get-WinEvent -LogName 'Microsoft-Windows-TaskScheduler/Operational' -MaxEvents 60 | Select-Object TimeCreated, Id, LevelDisplayName, Message",
    purpose:
      "Correlates scheduled-task activity with other server events.",
  },
  {
    label: "Defender events",
    command:
      "Get-WinEvent -LogName 'Microsoft-Windows-Windows Defender/Operational' -MaxEvents 60 | Select-Object TimeCreated, Id, LevelDisplayName, Message",
    purpose:
      "Reviews recent Defender activity and detections.",
  },
];

const filterTechniques = [
  {
    title: "Time window",
    text:
      "Start with the period surrounding the incident, change, outage, logon, or alert.",
  },
  {
    title: "Event level",
    text:
      "Critical and Error events are useful, but informational events often contain the timeline detail you need.",
  },
  {
    title: "Provider",
    text:
      "Filter for Service Control Manager, Security-Auditing, TaskScheduler, DNS Server, or another relevant component.",
  },
  {
    title: "Event ID",
    text:
      "Use Event IDs only after confirming the provider and context.",
  },
  {
    title: "User / computer",
    text:
      "Search event details for a specific account, hostname, source address, process, or service.",
  },
  {
    title: "Custom View",
    text:
      "Create a temporary view that combines selected logs, levels, providers, IDs, or time ranges without deleting anything.",
  },
];

const timelineMethod = [
  {
    number: "01",
    title: "Define the question",
    text:
      "Example: Why did RDP stop working, when was an admin account added, or what created a new service?",
  },
  {
    number: "02",
    title: "Choose the time range",
    text:
      "Use the last known good state and first known bad state to narrow the window.",
  },
  {
    number: "03",
    title: "Find anchor events",
    text:
      "Start with a known logon, service failure, task execution, Defender alert, reboot, or configuration change.",
  },
  {
    number: "04",
    title: "Correlate other logs",
    text:
      "Compare System, Security, Application, Task Scheduler, Defender, DNS, DHCP, and role-specific logs around the same timestamp.",
  },
  {
    number: "05",
    title: "Preserve evidence",
    text:
      "Record important event details and export logs before clearing, restarting, deleting, or changing the evidence source.",
  },
  {
    number: "06",
    title: "Remediate and verify",
    text:
      "Make the narrowest justified change, then confirm required services and review fresh logs for new errors.",
  },
];

const roleSpecificLogs = [
  {
    title: "DNS Server",
    path:
      "Applications and Services Logs → DNS Server",
    use:
      "Review service startup, zone loading, query-related errors, and other DNS role activity.",
  },
  {
    title: "DHCP Server",
    path:
      "Applications and Services Logs → Microsoft → Windows → DHCP-Server",
    use:
      "Review applicable operational/admin events plus DHCP audit logs for leases and service behavior.",
  },
  {
    title: "Task Scheduler",
    path:
      "Microsoft → Windows → TaskScheduler → Operational",
    use:
      "Review task registration, starts, actions, completions, and failures.",
  },
  {
    title: "Windows Defender",
    path:
      "Microsoft → Windows → Windows Defender → Operational",
    use:
      "Review protection state, detections, remediation, and configuration events.",
  },
  {
    title: "Windows Update",
    path:
      "Microsoft → Windows → WindowsUpdateClient → Operational",
    use:
      "Review update detection, download, installation, and failure evidence.",
  },
  {
    title: "Group Policy",
    path:
      "Microsoft → Windows → GroupPolicy → Operational",
    use:
      "Review policy processing when a server setting unexpectedly changes or reverts.",
  },
];

const evidencePreservation = [
  {
    title: "Export the log",
    text:
      "Use Event Viewer → Save All Events As to preserve a relevant log as an .evtx file when appropriate.",
  },
  {
    title: "Save selected events",
    text:
      "Preserve the exact event details that support the timeline.",
  },
  {
    title: "Record server time",
    text:
      "Timestamps only help if you know the server's current time and time zone context.",
  },
  {
    title: "Record event metadata",
    text:
      "Capture log name, provider, Event ID, timestamp, computer, user, and important event data.",
  },
  {
    title: "Do not clear logs",
    text:
      "Clearing logs destroys useful history and can remove evidence needed for troubleshooting or investigation.",
  },
  {
    title: "Preserve before reboot",
    text:
      "Some volatile context may change after restart even though persistent event logs remain.",
  },
];

const suspiciousPatterns = [
  {
    title: "Many failed logons followed by success",
    text:
      "May indicate password guessing, a mistyped credential sequence, or an automated service problem. Correlate account, source, logon type, and timing.",
  },
  {
    title: "New service near suspicious activity",
    text:
      "A 7045 event can reveal service-based persistence, but also legitimate software installation.",
  },
  {
    title: "Security log cleared",
    text:
      "Event 1102 is a high-value investigation signal because evidence was intentionally removed.",
  },
  {
    title: "New privileged group membership",
    text:
      "Unexpected administrative-group changes deserve correlation with the initiating account and nearby logons.",
  },
  {
    title: "Task activity near a new file",
    text:
      "A scheduled task may explain repeated process or script execution.",
  },
  {
    title: "Policy changes before protection weakens",
    text:
      "Audit, firewall, Defender, or user-right changes may explain why later events look different.",
  },
];

const pitfalls = [
  {
    title: "Treating one event as proof",
    text:
      "A single event rarely explains intent. Correlate it with surrounding evidence.",
  },
  {
    title: "Looking only at errors",
    text:
      "Informational events often show successful logons, service starts, task launches, and normal transitions that complete the timeline.",
  },
  {
    title: "Ignoring audit-policy limits",
    text:
      "If auditing was not enabled, the expected Security event may never have been recorded.",
  },
  {
    title: "Assuming every failed logon is an attack",
    text:
      "Services, scheduled tasks, expired passwords, old credentials, and ordinary mistakes can create repeated failures.",
  },
  {
    title: "Clearing logs after fixing the problem",
    text:
      "That removes the historical record needed to prove what changed.",
  },
  {
    title: "Ignoring time differences",
    text:
      "Incorrect server time or mismatched time zones can make unrelated events appear connected.",
  },
];

const troubleshooting = [
  {
    symptom: "A required service suddenly stopped.",
    checks:
      "Review System for Service Control Manager events, Application for dependent software, Security for relevant account changes, Task Scheduler for automated actions, and recent configuration changes.",
  },
  {
    symptom: "A user cannot log on through RDP.",
    checks:
      "Review failed/successful logon events, account state, group membership changes, user-right policy changes, TermService/System events, and firewall-related evidence.",
  },
  {
    symptom: "A server setting keeps reverting.",
    checks:
      "Review GroupPolicy Operational events, scheduled tasks, services, management agents, and recent administrative logons.",
  },
  {
    symptom: "The Security log lacks the expected event.",
    checks:
      "Review effective audit policy, event-log retention, whether the correct server is being checked, and alternative logs that may contain supporting evidence.",
  },
  {
    symptom: "Events are present but the timeline does not make sense.",
    checks:
      "Check system time, time zone, reboot events, source-server differences, and whether timestamps from multiple systems are being compared consistently.",
  },
  {
    symptom: "An application broke after remediation.",
    checks:
      "Review Application and System logs immediately after the change, then compare with the pre-change baseline and role-specific logs.",
  },
];

const decisionCases = [
  {
    title: "Hundreds of failed logons appear",
    evidence:
      "Event 4625 repeats for one service account every few minutes.",
    reasoning:
      "The pattern could be an attack, but a scheduled task or service using an old password is also plausible.",
    response:
      "Correlate logon type, source, service/task activity, recent password changes, and successful logons before changing the account.",
  },
  {
    title: "A new service was installed",
    evidence:
      "System Event 7045 appears shortly before suspicious behavior.",
    reasoning:
      "The event is important but may represent legitimate software installation.",
    response:
      "Record the service name, executable path, account, installer context, nearby logons, and installed-software evidence before classifying it.",
  },
  {
    title: "Security log was cleared",
    evidence:
      "Event 1102 appears during the investigation window.",
    reasoning:
      "Evidence was removed, making other logs and remaining artifacts more important.",
    response:
      "Preserve remaining logs, identify the account associated with the clearing event when available, and correlate System, Application, Task Scheduler, Defender, and role logs.",
  },
  {
    title: "DNS stops after a configuration change",
    evidence:
      "Clients fail to resolve names and DNS Server logs show new errors at the same time.",
    reasoning:
      "The timing strongly links the outage to the change, but the exact dependency still needs confirmation.",
    response:
      "Compare DNS Server, System, and Security events, restore only the incorrect setting, then verify client resolution and watch for fresh errors.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional incident",
    text:
      "APP-SRV experienced repeated failed logons, a newly installed service, and a scheduled task execution within a 20-minute window. The required application later stopped responding.",
  },
  {
    number: "02",
    title: "Set the time window",
    text:
      "Use the last known good application check and the first failure to define the investigation period.",
  },
  {
    number: "03",
    title: "Collect anchor events",
    text:
      "Review Security for logons, System for Service Control Manager events, Task Scheduler Operational for task activity, and Application for the application failure.",
  },
  {
    number: "04",
    title: "Build the timeline",
    text:
      "Order the events by timestamp and record account, process, service, task, and error details.",
  },
  {
    number: "05",
    title: "Preserve evidence",
    text:
      "Export the relevant logs or save selected events before disabling a suspicious task or service.",
  },
  {
    number: "06",
    title: "Remediate and verify",
    text:
      "Make the narrowest justified change, restart only if required, verify the application, and review fresh logs for new failures.",
  },
];

const verification = [
  "System, Security, and Application logs remain available.",
  "Relevant role-specific logs remain enabled and readable.",
  "Important investigation events were preserved before remediation.",
  "No logs were cleared as part of routine cleanup.",
  "Required services and applications are functioning.",
  "No new critical or repeated role-specific errors appeared after remediation.",
  "Authentication behavior matches the expected accounts and services.",
  "Scheduled-task and service activity now matches the intended configuration.",
  "Server time and timeline context are understood.",
  "The final evidence timeline and changes are documented.",
];

const checklist = [
  "Open eventvwr.msc.",
  "Review System, Security, and Application.",
  "Define a relevant time window.",
  "Filter by provider and Event ID when useful.",
  "Check TaskScheduler Operational.",
  "Check Windows Defender Operational.",
  "Check WindowsUpdateClient Operational.",
  "Check DNS, DHCP, Group Policy, or other role-specific logs as applicable.",
  "Use Get-WinEvent for fast filtering.",
  "Correlate at least two evidence sources before concluding.",
  "Preserve relevant events before remediation.",
  "Verify required server functions and fresh logs afterward.",
];

const reflection = [
  "Why is one Event ID rarely enough to prove what happened?",
  "Why can informational events be as important as errors?",
  "How can audit policy affect what appears in the Security log?",
  "Why should a 7045 service-install event be investigated but not automatically labeled malicious?",
  "What makes Event 1102 important during an investigation?",
  "What should be checked after remediation besides whether the original problem disappeared?",
];

export default function EventViewerServerLogsPage() {
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
            <Link href="/cyberpatriot/windows-server/scheduled-tasks-persistence-review" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/powershell-server-administration" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows Server · Lesson 16
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Event Viewer &amp; Server Logs
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Build evidence-based timelines from Windows Server logs instead
                of guessing from one error, one Event ID, or one suspicious
                timestamp.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Strong log analysis connects authentication, services, tasks,
                applications, Defender, updates, DNS, DHCP, Group Policy, and
                server-role evidence around the same time window.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Primary console</span>
                  <span className="font-bold text-white">eventvwr.msc</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core logs</span>
                  <span className="font-bold text-white">System / Security / App</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Primary method</span>
                  <span className="font-bold text-white">Correlation</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Evidence timeline</span>
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
          Understand the evidence before interpreting it
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {coreConcepts.map((item) => (
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
              Logs are strongest when they agree with other evidence
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A failed logon, service install, task launch, or Defender alert
              becomes more meaningful when another log confirms the same
              account, process, file, service, or time window.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Evidence boundary
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Do not clear logs to make the server look clean
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Logs are evidence for troubleshooting, verification, and
              investigation.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Preserve relevant events before remediation, restart, deletion, or cleanup.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Tool map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Exactly where to review server logs
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Windows logs
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Know which log is most likely to answer the question
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {windowsLogs.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.focus}</p>
              <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <p className="text-sm leading-6 text-slate-400">{item.example}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Security log examples
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              High-value events to recognize
            </h2>
            <div className="mt-6 grid gap-4">
              {securityEventExamples.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-sm font-black text-cyan-300">Event {item.id}</p>
                  <h3 className="mt-2 font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              System log examples
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Services and startup timeline markers
            </h2>
            <div className="mt-6 grid gap-4">
              {systemEventExamples.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-sm font-black text-cyan-300">Event {item.id}</p>
                  <h3 className="mt-2 font-black text-white">{item.title}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    {item.provider}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Investigation questions
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Twelve questions for every important event
        </h2>
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {highValueQuestions.map((item, index) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            PowerShell inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Filter logs quickly with Get-WinEvent
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {powershellChecks.map((item) => (
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
          Filtering
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Reduce noise without deleting evidence
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filterTechniques.map((item) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Timeline method
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build the timeline before making conclusions
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {timelineMethod.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black text-cyan-300">{item.number}</p>
                <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Role-specific logs
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Server roles often have better evidence than general logs
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {roleSpecificLogs.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                {item.path}
              </code>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.use}</p>
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
            Preserve before you remediate
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Suspicious patterns
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Patterns worth correlating across logs
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {suspiciousPatterns.map((item) => (
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
        <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Analysis pitfalls
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Logging mistakes that lead to bad conclusions
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pitfalls.map((item) => (
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
            Use logs to answer operational questions
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
            Evidence decisions in server context
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
            Fictional defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build an APP-SRV incident timeline
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

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm evidence and server health
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
            Before leaving server-log review
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
                PowerShell for Server Administration
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, use PowerShell as a defensive administration tool for
                inventory, verification, filtering, evidence collection, and
                carefully controlled server changes.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-server/powershell-server-administration"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 17 &rarr;
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
            <Link href="/cyberpatriot/windows-server/scheduled-tasks-persistence-review" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/powershell-server-administration" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
