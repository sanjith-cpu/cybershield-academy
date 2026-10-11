import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain what logs are and why they are useful in forensic investigations.",
  "Recognize common log fields such as timestamp, source, user, host, event type, severity, and message.",
  "Filter large log sets without losing important context around an event.",
  "Distinguish normal, suspicious, unknown, and irrelevant records.",
  "Correlate log evidence with files, users, processes, services, and network activity.",
  "Build short evidence-backed timelines from multiple records instead of relying on one isolated event.",
];

const logConcepts = [
  {
    title: "Logs are records, not conclusions",
    text:
      "A log records that a system or application observed an event. The event still needs interpretation and context.",
  },
  {
    title: "Fields create structure",
    text:
      "Timestamp, source, host, user, event ID, severity, and message fields help organize raw activity into searchable evidence.",
  },
  {
    title: "Noise is normal",
    text:
      "Healthy systems generate many repetitive entries. The goal is to find what is relevant to the forensic question.",
  },
  {
    title: "Sequence matters",
    text:
      "Events before and after a target record can reveal cause, effect, or whether the event was expected.",
  },
  {
    title: "Absence is not proof",
    text:
      "Logs can rotate, be disabled, fail to capture an event, or use a different source. Missing records do not prove something never happened.",
  },
  {
    title: "Corroboration strengthens confidence",
    text:
      "A log becomes more useful when it agrees with file metadata, process state, user activity, service configuration, or network evidence.",
  },
];

const commonFields = [
  {
    field: "Timestamp",
    meaning:
      "When the event was recorded.",
    questions:
      "What time zone? Was the clock synchronized? Is this event time or collection time?",
  },
  {
    field: "Host",
    meaning:
      "The system that generated the record.",
    questions:
      "Are you mixing evidence from multiple machines?",
  },
  {
    field: "Source",
    meaning:
      "The service, application, subsystem, or component that wrote the event.",
    questions:
      "Does this source normally report the kind of event you are investigating?",
  },
  {
    field: "User",
    meaning:
      "An account associated with the event where available.",
    questions:
      "Does this mean authenticated user, process owner, service account, or target account?",
  },
  {
    field: "Event Type",
    meaning:
      "The category of activity, such as login, service change, error, process action, or network event.",
    questions:
      "What does this event type actually represent?",
  },
  {
    field: "Severity",
    meaning:
      "A label such as information, warning, error, or critical.",
    questions:
      "Is severity meaningful for the forensic question, or only operational health?",
  },
  {
    field: "Record ID",
    meaning:
      "A unique or sequential identifier within a log source.",
    questions:
      "Can this help order neighboring entries or reference the exact event later?",
  },
  {
    field: "Message",
    meaning:
      "Human-readable details about the event.",
    questions:
      "Which parts are facts, and which are interpretation by the logging application?",
  },
];

const analysisWorkflow = [
  {
    step: "01",
    title: "Define the question",
    text:
      "Decide whether you are looking for a login, service change, process, file action, network event, error, or sequence.",
  },
  {
    step: "02",
    title: "Choose the likely log source",
    text:
      "Start with the subsystem most likely to record the event instead of searching every log at once.",
  },
  {
    step: "03",
    title: "Set a time window",
    text:
      "Use known timestamps from files, browser records, user sessions, or scenario clues to narrow the search.",
  },
  {
    step: "04",
    title: "Filter carefully",
    text:
      "Filter by user, host, event ID, service, keyword, severity, process, or address while keeping enough context to understand the event.",
  },
  {
    step: "05",
    title: "Read neighboring events",
    text:
      "Inspect entries before and after the match to understand sequence and reduce false conclusions.",
  },
  {
    step: "06",
    title: "Correlate",
    text:
      "Compare the log with independent artifacts such as files, services, processes, account changes, or network records.",
  },
  {
    step: "07",
    title: "Document the evidence",
    text:
      "Record the exact source, timestamp, event identifier, relevant fields, and why the event matters.",
  },
];

const classification = [
  {
    label: "Relevant",
    meaning:
      "Directly helps answer the forensic question.",
    example:
      "A successful login event for the account named in the prompt.",
  },
  {
    label: "Supporting",
    meaning:
      "Does not answer the question alone but strengthens the timeline or conclusion.",
    example:
      "A service start event occurring immediately after a configuration change.",
  },
  {
    label: "Expected",
    meaning:
      "Normal activity that helps establish baseline behavior.",
    example:
      "Routine operating-system update service activity during its normal schedule.",
  },
  {
    label: "Suspicious",
    meaning:
      "Unexpected or concerning enough to investigate further.",
    example:
      "A newly created administrator account outside the expected scenario.",
  },
  {
    label: "Unknown",
    meaning:
      "Meaning is not yet understood.",
    example:
      "An unfamiliar application event with limited context.",
  },
  {
    label: "Irrelevant",
    meaning:
      "Unrelated to the current forensic question.",
    example:
      "A printer warning while investigating an SSH login.",
  },
];

const filteringPrinciples = [
  {
    title: "Start broad enough",
    text:
      "A time window of several minutes around a known event is often better than searching one exact second.",
  },
  {
    title: "Add one filter at a time",
    text:
      "Over-filtering can hide the event you need. Narrow gradually and confirm each filter still makes sense.",
  },
  {
    title: "Keep context",
    text:
      "A matching line may be meaningless without records immediately before and after it.",
  },
  {
    title: "Watch repeated events",
    text:
      "Repeated failures followed by success can mean something different from one isolated failure.",
  },
  {
    title: "Do not search only for suspicious words",
    text:
      "Useful evidence may contain ordinary usernames, service names, event IDs, or process paths instead of obvious warning terms.",
  },
  {
    title: "Record the query",
    text:
      "If you filtered by user, event ID, time, or keyword, write down the filter so another teammate can reproduce the result.",
  },
];

const windowsSources = [
  {
    source: "Security",
    value:
      "Authentication, account, privilege, and security-related events depending on audit policy.",
  },
  {
    source: "System",
    value:
      "Operating-system components, services, drivers, startup, shutdown, and system-level events.",
  },
  {
    source: "Application",
    value:
      "Application-generated records, errors, warnings, and operational messages.",
  },
  {
    source: "PowerShell",
    value:
      "Script and command activity where PowerShell logging features are enabled.",
  },
  {
    source: "Task Scheduler",
    value:
      "Task creation, trigger, execution, and completion information in relevant operational channels.",
  },
  {
    source: "Defender",
    value:
      "Antivirus and security-protection events in Defender-related channels where available.",
  },
];

const linuxSources = [
  {
    source: "journalctl",
    value:
      "Central systemd journal access for boots, services, kernel, authentication, and application events where captured.",
  },
  {
    source: "/var/log/auth.log",
    value:
      "Common Ubuntu-family authentication, sudo, SSH, and PAM activity where configured.",
  },
  {
    source: "/var/log/syslog",
    value:
      "General system and service messages on many Ubuntu-family systems.",
  },
  {
    source: "/var/log/apt",
    value:
      "Package installation and update history.",
  },
  {
    source: "Application logs",
    value:
      "Service-specific logs under /var/log or application-defined directories.",
  },
  {
    source: "Shell history",
    value:
      "Can provide useful user-command context but is incomplete and not a substitute for authoritative logs.",
  },
];

const windowsExamples = [
  {
    label: "Search recent system events",
    command: `Get-WinEvent -LogName System -MaxEvents 50`,
    purpose:
      "Reads recent System log entries for review.",
  },
  {
    label: "Filter by time",
    command: `Get-WinEvent -FilterHashtable @{
  LogName = "System"
  StartTime = (Get-Date).AddHours(-1)
}`,
    purpose:
      "Limits results to a defined recent time window.",
  },
  {
    label: "Filter by event ID",
    command: `Get-WinEvent -FilterHashtable @{
  LogName = "System"
  Id = 7045
}`,
    purpose:
      "Shows matching records for a specific event ID when that ID is relevant to the investigation.",
  },
  {
    label: "Format useful fields",
    command: `Get-WinEvent -LogName System -MaxEvents 20 |
  Select-Object TimeCreated, Id, ProviderName, LevelDisplayName, Message`,
    purpose:
      "Displays common evidence fields in a compact format.",
  },
];

const linuxExamples = [
  {
    label: "Recent journal events",
    command: `journalctl -n 50`,
    purpose:
      "Shows the most recent journal records.",
  },
  {
    label: "Filter by time",
    command: `journalctl --since "2026-10-10 13:00:00" --until "2026-10-10 14:00:00"`,
    purpose:
      "Limits the journal to a defined time window.",
  },
  {
    label: "Filter by service",
    command: `journalctl -u ssh --since today`,
    purpose:
      "Shows journal records associated with a specific service unit where applicable.",
  },
  {
    label: "Search authentication log",
    command: `grep -i "sudo" /var/log/auth.log`,
    purpose:
      "Finds lines containing a relevant keyword in a common Ubuntu-family authentication log.",
  },
];

const timelinePatterns = [
  {
    pattern: "Failure → failure → success",
    possibleMeaning:
      "Repeated authentication attempts followed by a successful login.",
    caution:
      "Could be a mistyped password, automation, or other legitimate behavior. Context matters.",
  },
  {
    pattern: "Config change → service restart",
    possibleMeaning:
      "A service may have been restarted to apply a new configuration.",
    caution:
      "Confirm the configuration file, user, command history, or administrative log.",
  },
  {
    pattern: "Download → process start",
    possibleMeaning:
      "A downloaded file may have been opened or executed.",
    caution:
      "Correlate filename, path, hash, process path, user, and timing.",
  },
  {
    pattern: "Account creation → group change",
    possibleMeaning:
      "A newly created user may have been granted additional privileges.",
    caution:
      "Verify whether the account was authorized by the scenario.",
  },
  {
    pattern: "Task creation → recurring process",
    possibleMeaning:
      "Scheduled execution may explain repeated process activity.",
    caution:
      "Preserve task details before removing or disabling it.",
  },
  {
    pattern: "Network error → service stop",
    possibleMeaning:
      "An application may have lost connectivity because a dependent service stopped.",
    caution:
      "Do not assume causation until sequence and dependency are confirmed.",
  },
];

const eventContext = [
  {
    title: "Before",
    question:
      "What event, login, process, file, or configuration change occurred immediately before the target record?",
  },
  {
    title: "Target",
    question:
      "What exactly does the matching event say happened?",
  },
  {
    title: "After",
    question:
      "What happened next, and does it support the same interpretation?",
  },
  {
    title: "Elsewhere",
    question:
      "Does another log or artifact show the same user, time, service, process, file, or host?",
  },
];

const correlationExamples = [
  {
    log:
      "Successful login for trainee1 at 09:12.",
    artifact:
      "User profile file modified at 09:16.",
    conclusion:
      "The account was authenticated before the file change, but this still does not prove who physically made the edit.",
  },
  {
    log:
      "Service DemoAgent installed at 10:20.",
    artifact:
      "Executable appears in ProgramData at 10:19.",
    conclusion:
      "The file and service events likely belong to the same installation sequence.",
  },
  {
    log:
      "SSH login for analyst at 11:02.",
    artifact:
      "sudo event appears at 11:04.",
    conclusion:
      "The analyst account authenticated and then performed a privileged action shortly afterward.",
  },
  {
    log:
      "Task Scheduler records a task start at 12:30.",
    artifact:
      "Related process appears under the configured task account.",
    conclusion:
      "The scheduled task likely launched that process.",
  },
  {
    log:
      "Application reports failed DNS lookup at 13:18.",
    artifact:
      "Network configuration shows an incorrect DNS server.",
    conclusion:
      "The configuration provides a plausible explanation for the application error.",
  },
  {
    log:
      "Package manager records installation at 14:05.",
    artifact:
      "New service file appears shortly afterward.",
    conclusion:
      "The service may have been installed as part of that package operation.",
  },
];

const severityNotes = [
  {
    label: "Information",
    text:
      "Often normal activity, but informational records can contain the exact evidence needed for a forensic question.",
  },
  {
    label: "Warning",
    text:
      "Indicates a condition that may need attention but is not automatically security-related.",
  },
  {
    label: "Error",
    text:
      "Shows that an operation failed or encountered a problem. Errors can explain outages or failed actions.",
  },
  {
    label: "Critical",
    text:
      "Represents severe operational conditions, but severity still does not replace forensic relevance.",
  },
];

const logLimitations = [
  {
    title: "Logging may be disabled",
    text:
      "A system can perform an action without the specific log source being enabled.",
  },
  {
    title: "Logs rotate",
    text:
      "Older records may be archived or overwritten when size or retention limits are reached.",
  },
  {
    title: "Clocks can disagree",
    text:
      "Different hosts may not share identical time settings.",
  },
  {
    title: "Messages vary by version",
    text:
      "Operating-system and application versions can change event wording or available fields.",
  },
  {
    title: "Applications log differently",
    text:
      "Some services use the system journal, some write files, and some maintain their own databases.",
  },
  {
    title: "Logs can be changed",
    text:
      "Do not assume every log is complete or untampered. Corroboration improves confidence.",
  },
];

const documentationTemplate = [
  {
    field: "Question",
    example:
      "Which account started the service?",
  },
  {
    field: "Log source",
    example:
      "Windows System log",
  },
  {
    field: "Time window",
    example:
      "10:15-10:25 local",
  },
  {
    field: "Event",
    example:
      "Record ID 4312 / relevant provider event",
  },
  {
    field: "Observed fields",
    example:
      "Time, provider, account, service name, message",
  },
  {
    field: "Context",
    example:
      "Related service-install event occurs two minutes earlier",
  },
  {
    field: "Corroboration",
    example:
      "Executable path and file timestamp align",
  },
  {
    field: "Conclusion",
    example:
      "Evidence supports that the service started under the recorded account",
  },
];

const fictionalLogs = [
  {
    time: "15:01:22",
    source: "Auth",
    user: "student3",
    message:
      "Successful interactive login.",
  },
  {
    time: "15:03:09",
    source: "Browser",
    user: "student3",
    message:
      "Downloaded tools.zip into the Downloads directory.",
  },
  {
    time: "15:04:17",
    source: "Filesystem",
    user: "student3",
    message:
      "tools.zip present with matching creation context.",
  },
  {
    time: "15:06:41",
    source: "Scheduler",
    user: "student3",
    message:
      "Task LabUpdater created to run every 30 minutes.",
  },
  {
    time: "15:07:02",
    source: "Process",
    user: "student3",
    message:
      "updater.exe starts from the user's AppData directory.",
  },
  {
    time: "15:07:05",
    source: "Network",
    user: "student3",
    message:
      "Process opens a connection to fictional server 203.0.113.20.",
  },
];

const labQuestions = [
  {
    question:
      "Which record establishes the user session?",
    answer:
      "The 15:01:22 authentication record for student3.",
  },
  {
    question:
      "Which two records best support the download event?",
    answer:
      "The 15:03:09 browser record and the 15:04:17 filesystem evidence.",
  },
  {
    question:
      "What event adds persistence-style context?",
    answer:
      "The 15:06:41 scheduled task creation.",
  },
  {
    question:
      "What links the task to later activity?",
    answer:
      "The process start at 15:07:02 occurs shortly after task creation and uses a user-profile path.",
  },
  {
    question:
      "Can the network record alone prove malicious activity?",
    answer:
      "No. It shows a connection by a process. Purpose and legitimacy require more context.",
  },
  {
    question:
      "What should be preserved before disabling the task?",
    answer:
      "Task name, trigger, command, user, timestamps, related process evidence, file hash, and neighboring log records.",
  },
];

const mistakes = [
  {
    title: "Searching without a question",
    text:
      "You can waste time reading thousands of unrelated entries.",
  },
  {
    title: "Using one matching line as the whole story",
    text:
      "Neighboring events often change the meaning of the target event.",
  },
  {
    title: "Ignoring source and host",
    text:
      "A log entry is meaningless if you cannot identify which system or component produced it.",
  },
  {
    title: "Treating severity as security importance",
    text:
      "An informational event may be more forensically useful than a critical operational error.",
  },
  {
    title: "Over-filtering",
    text:
      "Too many filters can hide the evidence you need.",
  },
  {
    title: "Ignoring time zones",
    text:
      "Cross-source ordering becomes unreliable when time references differ.",
  },
  {
    title: "Assuming missing logs mean no event",
    text:
      "Retention, configuration, and logging gaps can create false absence.",
  },
  {
    title: "Clearing logs before documentation",
    text:
      "This destroys evidence and makes later questions harder to answer.",
  },
];

const reviewChecklist = [
  "I know the exact forensic question before searching logs.",
  "I choose the most likely log source first.",
  "I define a reasonable time window.",
  "I record host, source, timestamp, event identifier, and user where available.",
  "I read neighboring events before drawing conclusions.",
  "I distinguish relevant, supporting, expected, suspicious, unknown, and irrelevant records.",
  "I do not treat severity as the same thing as forensic importance.",
  "I keep track of the filters or commands I used.",
  "I correlate important events with files, services, processes, users, or network evidence.",
  "I account for time zones and clock differences.",
  "I remember that missing records do not prove an event never happened.",
  "I preserve logs before making changes that could alter or rotate them.",
];

const reflection = [
  "Why is one matching log line usually weaker than a sequence of related events?",
  "What is the difference between an informational event and a forensically important event?",
  "Why should you record the log source and host with every important event?",
  "How can over-filtering hide useful evidence?",
  "Why does a missing event fail to prove that an action never occurred?",
  "What additional evidence would you use to strengthen a log-based conclusion?",
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

export default function LogAnalysisFundamentalsPage() {
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
              href="/cyberpatriot/forensics/file-metadata-timestamps"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/windows-event-logs"
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
                Forensics · Lesson 06
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Log Analysis Fundamentals
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how to read logs as structured evidence, filter noise,
                preserve surrounding context, recognize meaningful patterns,
                and correlate system events with users, files, services,
                processes, and network activity.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The goal is not to memorize every event ID or message. The goal
                is to know how to ask a focused question, find the right source,
                interpret the record, and verify the conclusion.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main skill</span>
                  <span className="font-bold text-white">Log correlation</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Best filter</span>
                  <span className="font-bold text-white">Question-driven</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Key habit</span>
                  <span className="font-bold text-white">Read context</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Reliable timeline</span>
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
            title="Turn large log sets into useful evidence"
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
                <p className="text-sm leading-6 text-slate-300">
                  {objective}
                </p>
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
              Logs tell you what a system recorded, not the entire story
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A log entry becomes useful when you know which host and component
              produced it, what the event means, and how it fits with other
              evidence.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
              Competition caution
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Do not clear logs before answering forensic questions
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Logs may contain the only record of a login, service change,
              scheduled action, package install, error, or privilege event.
              Preserve the relevant evidence before cleanup or hardening.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Log fundamentals"
            title="Understand what logs can and cannot tell you"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {logConcepts.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
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
            label="Common fields"
            title="Read the structure before reading the story"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {commonFields.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.field}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Ask
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.questions}
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
            label="Analysis workflow"
            title="Move from question to log evidence"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {analysisWorkflow.map((item) => (
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
            label="Event classification"
            title="Label records by relevance, not by fear"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {classification.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Example
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.example}
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
            label="Filtering"
            title="Narrow the evidence without losing the story"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteringPrinciples.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Windows logs"
              title="Common sources"
            />
            <div className="mt-6 grid gap-4">
              {windowsSources.map((item) => (
                <div
                  key={item.source}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="font-black text-white">{item.source}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Linux logs"
              title="Common sources"
            />
            <div className="mt-6 grid gap-4">
              {linuxSources.map((item) => (
                <div
                  key={item.source}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="font-black text-white">{item.source}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Windows commands"
              title="Review event data with PowerShell"
            />
            <div className="mt-6 grid gap-4">
              {windowsExamples.map((item) => (
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

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Linux commands"
              title="Review journal and text logs"
            />
            <div className="mt-6 grid gap-4">
              {linuxExamples.map((item) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Sequence patterns"
            title="Look for event relationships, not isolated lines"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {timelinePatterns.map((item) => (
              <div
                key={item.pattern}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.pattern}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.possibleMeaning}
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
            label="Context window"
            title="Read before, target, after, and elsewhere"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {eventContext.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Correlation"
            title="Combine logs with independent artifacts"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {correlationExamples.map((item) => (
              <div
                key={item.log}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Log
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.log}
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                    Other artifact
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.artifact}
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Supported conclusion
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.conclusion}
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
              label="Severity"
              title="Operational severity is not forensic importance"
            />
            <div className="mt-6 grid gap-4">
              {severityNotes.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Limitations"
              title="Know why log evidence can be incomplete"
            />
            <div className="mt-6 grid gap-4">
              {logLimitations.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
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
            label="Evidence note"
            title="Document a log event so another teammate can verify it"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {documentationTemplate.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.field}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.example}
                </p>
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
            Log-analysis habits that create weak conclusions
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.title}
                </h3>
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
            Fictional log lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build a short timeline from mixed evidence
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fictionalLogs.map((item) => (
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
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.13em] text-slate-500">
                  User: {item.user}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
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
                <h3 className="mt-3 font-black text-white">
                  {item.question}
                </h3>
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
                  <p className="text-sm leading-6 text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Check your log-analysis reasoning
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
                Start with a question, choose the right source, filter by time
                and relevant fields, read neighboring events, correlate with
                independent artifacts, and document the exact evidence used.
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
              href="/cyberpatriot/forensics/file-metadata-timestamps"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/windows-event-logs"
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
