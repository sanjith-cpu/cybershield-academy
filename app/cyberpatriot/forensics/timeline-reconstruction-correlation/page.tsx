import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain why a forensic timeline must combine evidence from multiple sources rather than rely on one timestamp.",
  "Normalize timestamps across sources while preserving original timezone and timestamp-type context.",
  "Distinguish direct observations from inferred sequence and explicitly document uncertainty.",
  "Correlate authentication, browser, file, process, service, scheduled-task, network, and security-product evidence.",
  "Recognize how copying, extraction, clock differences, log rotation, and delayed writes can distort apparent order.",
  "Build a concise evidence-backed event sequence that answers the forensic question without inventing missing steps.",
];

const timelinePrinciples = [
  {
    title: "A timeline is a model of evidence",
    text:
      "It organizes observed events into sequence. It does not magically fill gaps or prove that every unobserved step occurred.",
  },
  {
    title: "Timestamp type matters",
    text:
      "Creation time, modification time, access time, log time, browser time, and internal document/archive time describe different events.",
  },
  {
    title: "Timezone must be explicit",
    text:
      "Two correct timestamps can appear inconsistent if they are displayed in different timezones or offsets.",
  },
  {
    title: "Corroboration raises confidence",
    text:
      "A browser download record, matching file creation, process launch, and network connection together create a stronger sequence than any one artifact alone.",
  },
  {
    title: "Absence is not proof",
    text:
      "Missing logs, overwritten history, disabled auditing, or incomplete records do not prove an event never happened.",
  },
  {
    title: "Your own actions enter the timeline",
    text:
      "Defensive changes, reboots, service stops, file moves, and scans can create new evidence that must be separated from the original state.",
  },
];

const timestampTypes = [
  {
    type: "Log timestamp",
    meaning:
      "When an event source recorded an event.",
    caution:
      "Depends on system clock, logging configuration, and timezone display.",
  },
  {
    type: "Filesystem creation / birth",
    meaning:
      "When a local filesystem entry was created where supported.",
    caution:
      "Copying or extraction can create a new local timestamp unrelated to original content age.",
  },
  {
    type: "Modification time",
    meaning:
      "When file content was last changed according to that filesystem or format.",
    caution:
      "Can be preserved during archive extraction or copying.",
  },
  {
    type: "Access time",
    meaning:
      "When a file was accessed under the filesystem's update rules.",
    caution:
      "May be delayed, disabled, coarse, or changed by automated processes.",
  },
  {
    type: "Document-internal time",
    meaning:
      "Timestamp stored inside a document or application format.",
    caution:
      "Can survive copies and may not match local filesystem history.",
  },
  {
    type: "Archive-internal time",
    meaning:
      "Timestamp stored for a file inside an archive.",
    caution:
      "Can be much older than local archive download or extraction.",
  },
  {
    type: "Browser time",
    meaning:
      "Time stored for a page visit, download, or other browser event.",
    caution:
      "Browser databases may use different timestamp formats internally.",
  },
  {
    type: "Process start time",
    meaning:
      "When a process instance began.",
    caution:
      "Useful only while the process or supporting logs remain available.",
  },
];

const normalizationSteps = [
  {
    step: "01",
    title: "Record the original timestamp",
    text:
      "Do not overwrite the evidence value. Keep the exact displayed value, source, timestamp type, and timezone or offset.",
  },
  {
    step: "02",
    title: "Identify the clock source",
    text:
      "Determine which host, application, filesystem, or archive produced the time.",
  },
  {
    step: "03",
    title: "Normalize for comparison",
    text:
      "Convert copies of the timestamps to one comparison timezone when necessary while preserving the originals.",
  },
  {
    step: "04",
    title: "Label the timestamp type",
    text:
      "Creation, modification, event-recorded, browser, process start, and archive times should never be mixed without labels.",
  },
  {
    step: "05",
    title: "Check clock reliability",
    text:
      "Consider clock drift, virtual-machine snapshots, manual clock changes, or unsynchronized systems when evidence appears inconsistent.",
  },
  {
    step: "06",
    title: "Compare sequence, not just equality",
    text:
      "Look for events that logically precede or follow one another and identify where the evidence leaves gaps.",
  },
];

const confidenceLevels = [
  {
    level: "High",
    use:
      "Multiple independent sources agree and directly support the sequence.",
  },
  {
    level: "Moderate",
    use:
      "Evidence is consistent but one important link is indirect or incomplete.",
  },
  {
    level: "Low",
    use:
      "Only one weak source exists or multiple explanations remain plausible.",
  },
  {
    level: "Insufficient",
    use:
      "The available evidence cannot responsibly answer the question.",
  },
];

const evidenceCategories = [
  {
    category: "Authentication",
    examples:
      "Windows logons, SSH sessions, sudo activity, PAM records, RDP evidence.",
    timelineUse:
      "Establishes when an account session began, failed, succeeded, or changed privilege context.",
  },
  {
    category: "Browser & download",
    examples:
      "Visited URL, download record, destination path, browser profile.",
    timelineUse:
      "Establishes browsing and file-arrival context.",
  },
  {
    category: "Filesystem",
    examples:
      "Creation, modification, path, owner, size, hash, archive extraction.",
    timelineUse:
      "Places files into local context and tracks transformations.",
  },
  {
    category: "Process",
    examples:
      "PID, parent PID, path, command line, start time, user.",
    timelineUse:
      "Shows actual execution and launch relationships.",
  },
  {
    category: "Service / startup",
    examples:
      "Service install/start, systemd unit, startup entry, scheduled task, cron.",
    timelineUse:
      "Explains persistence and automatic execution.",
  },
  {
    category: "Network",
    examples:
      "Listeners, established connections, source/remote address, owning PID.",
    timelineUse:
      "Connects running processes to network activity.",
  },
  {
    category: "Security product",
    examples:
      "Defender or endpoint scan/detection records.",
    timelineUse:
      "Adds independent file/process/security context.",
  },
  {
    category: "Team changes",
    examples:
      "Service disabled, account removed, firewall rule changed, file quarantined.",
    timelineUse:
      "Separates original evidence from defensive actions.",
  },
];

const directVsInference = [
  {
    statement:
      "Browser record shows tools.zip downloaded at 09:14.",
    classification:
      "Direct observation",
    why:
      "The browser artifact directly records a download event.",
  },
  {
    statement:
      "The user intentionally downloaded tools.zip.",
    classification:
      "Inference",
    why:
      "The artifact shows the browser recorded a download, but intent requires additional context.",
  },
  {
    statement:
      "PowerShell process started at 09:18 with helper.ps1 in the command line.",
    classification:
      "Direct observation",
    why:
      "Process evidence directly records the executable and argument.",
  },
  {
    statement:
      "The downloaded archive caused the PowerShell execution.",
    classification:
      "Correlated inference",
    why:
      "This can become strong if extraction, matching paths/hashes, and task/process evidence connect the events.",
  },
  {
    statement:
      "A connection to 203.0.113.40:443 occurred at 09:19.",
    classification:
      "Direct observation",
    why:
      "Network-state or application evidence records the connection.",
  },
  {
    statement:
      "The remote host was malicious.",
    classification:
      "Unsupported from timeline alone",
    why:
      "A connection and endpoint do not establish intent or reputation by themselves.",
  },
];

const sequencePatterns = [
  {
    pattern:
      "Authentication → browser activity → download → file creation",
    use:
      "Useful for reconstructing how a file arrived during a user session.",
  },
  {
    pattern:
      "Download → extraction → script/process start",
    use:
      "Useful for separating arrival from later execution.",
  },
  {
    pattern:
      "Account creation → privileged-group change → login",
    use:
      "Useful for reconstructing account lifecycle and privilege sequence.",
  },
  {
    pattern:
      "Task creation → task trigger → process start",
    use:
      "Useful for proving scheduled execution.",
  },
  {
    pattern:
      "Package install → service creation → service start → listener",
    use:
      "Useful for explaining new services and network exposure.",
  },
  {
    pattern:
      "Config change → service restart → new behavior",
    use:
      "Useful for connecting configuration edits to service-state changes.",
  },
];

const transformationEffects = [
  {
    transformation: "Copy",
    effect:
      "May create a new local creation timestamp while preserving modification time depending on tool and filesystem.",
  },
  {
    transformation: "Archive extraction",
    effect:
      "Can create new local files while preserving older archive-internal modification times.",
  },
  {
    transformation: "Rename",
    effect:
      "Changes path/name without changing file content or hash.",
  },
  {
    transformation: "Edit",
    effect:
      "Usually changes content and therefore the file hash and modification time.",
  },
  {
    transformation: "Move on same filesystem",
    effect:
      "May preserve many timestamps while changing path.",
  },
  {
    transformation: "Restore / snapshot",
    effect:
      "Can make local timestamps appear older than surrounding system events.",
  },
];

const clockProblems = [
  {
    issue: "Timezone mismatch",
    symptom:
      "Events appear hours apart but align after converting offsets.",
  },
  {
    issue: "Clock drift",
    symptom:
      "One host consistently records events slightly ahead or behind another.",
  },
  {
    issue: "Manual time change",
    symptom:
      "System events appear to move backward or jump forward.",
  },
  {
    issue: "VM snapshot restore",
    symptom:
      "Filesystem or system state appears older than later external records.",
  },
  {
    issue: "Log ingestion delay",
    symptom:
      "Centralized log time differs from event-generation time.",
  },
  {
    issue: "Rounded timestamps",
    symptom:
      "Different sources record only seconds or minutes, creating apparent ties.",
  },
];

const timelineEntryFields = [
  "Normalized time",
  "Original time",
  "Timezone / offset",
  "Source host",
  "Evidence source",
  "Timestamp type",
  "Observed event",
  "Account / process",
  "Path / object",
  "Identifier / hash",
  "Confidence",
  "Corroboration",
  "Notes / uncertainty",
];

const eventTable = [
  {
    time: "09:02",
    source: "Security",
    event:
      "trainee10 successful interactive logon.",
    confidence:
      "High",
  },
  {
    time: "09:08",
    source: "Browser",
    event:
      "training-tools.zip downloaded.",
    confidence:
      "High",
  },
  {
    time: "09:08",
    source: "Filesystem",
    event:
      "training-tools.zip created in Downloads.",
    confidence:
      "High",
  },
  {
    time: "09:11",
    source: "Filesystem",
    event:
      "helper.ps1 appears under AppData after archive extraction.",
    confidence:
      "Moderate",
  },
  {
    time: "09:14",
    source: "Task Scheduler",
    event:
      "Task LabHelper registered to launch helper.ps1.",
    confidence:
      "High",
  },
  {
    time: "09:20",
    source: "Process",
    event:
      "PowerShell starts with helper.ps1 argument.",
    confidence:
      "High",
  },
  {
    time: "09:21",
    source: "Network",
    event:
      "PowerShell-related child process connects to fictional 203.0.113.140.",
    confidence:
      "Moderate",
  },
];

const eventInterpretation = [
  {
    question:
      "What can be stated directly?",
    answer:
      "The account logged on, the archive was downloaded, a script appeared locally, a task was registered, PowerShell executed the script path, and a related process made a network connection.",
  },
  {
    question:
      "What requires correlation?",
    answer:
      "That the extracted script came from the downloaded archive and that the task caused the later PowerShell launch.",
  },
  {
    question:
      "What should not be claimed?",
    answer:
      "That the user intended harm or that the remote host was malicious without additional evidence.",
  },
];

const windowsCommands = [
  {
    label: "Recent Security events",
    command: `Get-WinEvent -LogName Security -MaxEvents 50 |
  Select-Object TimeCreated,Id,ProviderName,Message`,
    purpose:
      "Provides timestamped authentication and account-related events where permissions and auditing allow.",
  },
  {
    label: "System events",
    command: `Get-WinEvent -LogName System -MaxEvents 50 |
  Select-Object TimeCreated,Id,ProviderName,Message`,
    purpose:
      "Adds service, boot, driver, and system-event context.",
  },
  {
    label: "Process inventory",
    command: `Get-CimInstance Win32_Process |
  Select-Object ProcessId,ParentProcessId,Name,ExecutablePath,CommandLine`,
    purpose:
      "Provides process relationships for correlation.",
  },
  {
    label: "File timestamps",
    command: `Get-Item "C:\\Users\\trainee\\Downloads\\training-tools.zip" |
  Format-List Name,FullName,CreationTime,LastWriteTime,LastAccessTime,Length`,
    purpose:
      "Adds local filesystem time context.",
  },
];

const linuxCommands = [
  {
    label: "Journal time window",
    command: `journalctl --since "2026-10-10 09:00:00" --until "2026-10-10 10:00:00"`,
    purpose:
      "Reviews systemd journal activity for a bounded time range.",
  },
  {
    label: "Authentication log window",
    command: `grep "Oct 10 09:" /var/log/auth.log`,
    purpose:
      "Illustrative filter for authentication records when auth.log exists and date format matches.",
  },
  {
    label: "Process view",
    command: `ps -eo pid,ppid,user,lstart,cmd`,
    purpose:
      "Adds process start and parent-child context.",
  },
  {
    label: "File timestamps",
    command: `stat /home/trainee/Downloads/training-tools.zip`,
    purpose:
      "Adds Linux filesystem time and ownership context.",
  },
];

const correlationCases = [
  {
    records:
      "Successful login 09:02 + browser download 09:08 + file creation 09:08",
    supported:
      "The download occurred during the authenticated session and aligns with the local file appearance.",
  },
  {
    records:
      "Archive download 09:08 + extracted script local creation 09:11 + matching archive path/name",
    supported:
      "The archive is a plausible source for the extracted script, with moderate confidence unless hash/content comparison confirms it.",
  },
  {
    records:
      "Task registered 09:14 + trigger 09:20 + PowerShell command line references same script",
    supported:
      "The scheduled task likely caused the PowerShell execution.",
  },
  {
    records:
      "PowerShell execution 09:20 + child process 09:20 + network connection 09:21",
    supported:
      "The network activity closely follows the process chain.",
  },
  {
    records:
      "Service config edited 11:05 + service restart 11:06 + new listener 11:07",
    supported:
      "The service behavior changed immediately after configuration and restart.",
  },
  {
    records:
      "Linux sudo command 12:10 + file mtime 12:10 + service restart 12:11",
    supported:
      "The privileged command, file modification, and restart form a coherent administrative sequence.",
  },
];

const contradictionHandling = [
  {
    problem:
      "Browser download occurs after file mtime",
    response:
      "Check whether the file came from an archive or copy that preserved an older modification time.",
  },
  {
    problem:
      "Logon appears after application activity",
    response:
      "Check timezone, cached sessions, service accounts, remote sessions, and clock drift before declaring contradiction.",
  },
  {
    problem:
      "Process start appears before task creation",
    response:
      "The process may have had another launch source, or the task-registration time may not represent the first execution mechanism.",
  },
  {
    problem:
      "Network event exists but process is gone",
    response:
      "Use logs, PID references, service/task configuration, and neighboring events to reconstruct the earlier process context.",
  },
  {
    problem:
      "Security product time differs by minutes",
    response:
      "Check event-generation time versus scan, detection, or ingestion time.",
  },
  {
    problem:
      "Two sources disagree on seconds",
    response:
      "Document the discrepancy and use sequence plus broader timing rather than forcing exact equality.",
  },
];

const timelineMistakes = [
  {
    title: "Sorting without labeling timestamp type",
    text:
      "A creation time and a modification time can describe different events and should not be treated as interchangeable.",
  },
  {
    title: "Converting times and losing originals",
    text:
      "Always preserve the source timestamp and timezone before creating a normalized copy.",
  },
  {
    title: "Treating sequence as causation",
    text:
      "One event occurring before another does not automatically prove it caused the later event.",
  },
  {
    title: "Ignoring archive and copy behavior",
    text:
      "Preserved timestamps can make files appear to predate local arrival.",
  },
  {
    title: "Filling gaps with assumptions",
    text:
      "A timeline should expose missing evidence, not hide it.",
  },
  {
    title: "Ignoring team changes",
    text:
      "Your own hardening actions can create events that look like original system activity.",
  },
  {
    title: "Forcing exact timestamp matches",
    text:
      "Different sources may round, delay, or record events at slightly different moments.",
  },
  {
    title: "Using one source as the whole story",
    text:
      "Strong timelines combine independent evidence categories.",
  },
];

const practiceTimeline = [
  {
    time: "14:00:03",
    source: "Auth",
    detail:
      "student11 successful SSH login from fictional 192.0.2.77.",
  },
  {
    time: "14:02:10",
    source: "Browser",
    detail:
      "Browser downloads admin-kit.tar.gz.",
  },
  {
    time: "14:02:12",
    source: "Filesystem",
    detail:
      "admin-kit.tar.gz appears in Downloads.",
  },
  {
    time: "14:04:40",
    source: "Filesystem",
    detail:
      "maint.sh appears under ~/.local/bin; internal archive mtime is from 2025.",
  },
  {
    time: "14:06:01",
    source: "Cron",
    detail:
      "User crontab is changed to run maint.sh every 10 minutes.",
  },
  {
    time: "14:10:00",
    source: "Cron Log",
    detail:
      "Cron launches maint.sh.",
  },
  {
    time: "14:10:02",
    source: "Process",
    detail:
      "maint.sh launches a child process.",
  },
  {
    time: "14:10:05",
    source: "Network",
    detail:
      "Child process connects to fictional 203.0.113.155:443.",
  },
];

const practiceQuestions = [
  {
    question:
      "Which event establishes the remote session?",
    answer:
      "The 14:00:03 SSH authentication record.",
  },
  {
    question:
      "Why does the 2025 mtime not prove maint.sh existed locally in 2025?",
    answer:
      "The timestamp may have been preserved inside the downloaded archive and carried through extraction.",
  },
  {
    question:
      "What evidence most strongly connects cron to process execution?",
    answer:
      "The crontab change, cron launch at 14:10:00, and immediate process activity at 14:10:02.",
  },
  {
    question:
      "What connects the process chain to network activity?",
    answer:
      "The child process appears immediately before the connection at 14:10:05.",
  },
  {
    question:
      "What remains uncertain?",
    answer:
      "Intent, authorization, and the purpose of the remote endpoint require scenario or additional evidence.",
  },
  {
    question:
      "How should confidence be expressed?",
    answer:
      "Use high confidence for directly corroborated events, moderate confidence for inferred links, and explicitly mark unsupported conclusions.",
  },
];

const timelineTemplate = [
  {
    field: "Question",
    example:
      "How did helper.ps1 arrive and execute?",
  },
  {
    field: "Scope",
    example:
      "CP-WIN-12, 09:00-09:30 local time.",
  },
  {
    field: "Sources",
    example:
      "Security, browser, filesystem, Task Scheduler, process, network.",
  },
  {
    field: "Normalization",
    example:
      "All comparison times converted to EDT; originals preserved.",
  },
  {
    field: "Sequence",
    example:
      "Login → download → extraction → task registration → execution → connection.",
  },
  {
    field: "Confidence",
    example:
      "High for direct events, moderate for causal links.",
  },
  {
    field: "Gaps",
    example:
      "No direct artifact proves who initiated the download.",
  },
  {
    field: "Conclusion",
    example:
      "State only what the combined evidence supports.",
  },
];

const reviewChecklist = [
  "I preserve original timestamps before normalization.",
  "I label timestamp type and timezone.",
  "I identify which host or application produced each time.",
  "I distinguish direct observations from inferences.",
  "I use more than one evidence source for important links.",
  "I account for archive, copy, and extraction behavior.",
  "I consider clock drift and VM/snapshot effects.",
  "I separate original system activity from my team's changes.",
  "I record contradictions instead of hiding them.",
  "I use confidence labels when evidence is incomplete.",
  "I do not treat sequence alone as proof of causation.",
  "I end with a concise conclusion tied to the original question.",
];

const reflection = [
  "Why must timestamp type be recorded alongside the timestamp itself?",
  "What makes a timeline correlation stronger than a single log entry?",
  "How can archive extraction make a file appear older than its local arrival?",
  "Why does event order fail to prove causation by itself?",
  "How should you handle two sources whose clocks differ by a few minutes?",
  "What belongs in the final conclusion when some steps remain uncertain?",
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

export default function TimelineReconstructionCorrelationPage() {
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
              href="/cyberpatriot/forensics/archives-hidden-files-alternate-storage-awareness"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/forensics-practice-case"
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
                Forensics · Lesson 16
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Timeline Reconstruction &amp; Correlation
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how to combine authentication, browser, filesystem,
                process, service, scheduler, network, and security evidence into
                one defensible sequence.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                A strong timeline preserves original timestamps, normalizes them
                carefully, labels uncertainty, and never invents missing steps.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main skill</span>
                  <span className="font-bold text-white">Correlation</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Time discipline</span>
                  <span className="font-bold text-white">Normalize carefully</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Reasoning rule</span>
                  <span className="font-bold text-white">Evidence before inference</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Defensible sequence</span>
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
            title="Build timelines that expose evidence and uncertainty"
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
              A timeline is only as strong as the evidence links inside it
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Build the sequence from independent artifacts, preserve the
              original timestamp context, and mark which links are direct versus
              inferred.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
              Competition caution
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Do not force the evidence into a story
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              If the timeline has a gap, document the gap. An incomplete but
              defensible answer is stronger than a complete story built on
              assumptions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Timeline principles"
            title="Keep sequence, timestamp meaning, and uncertainty separate"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {timelinePrinciples.map((item) => (
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
            label="Timestamp types"
            title="Label what each time actually represents"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {timestampTypes.map((item) => (
              <div
                key={item.type}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.type}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Normalization workflow"
            title="Compare times without losing their original meaning"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {normalizationSteps.map((item) => (
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
            label="Confidence"
            title="State how strongly the evidence supports the link"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {confidenceLevels.map((item) => (
              <div
                key={item.level}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.level}
                </h3>
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
          <SectionHeading
            label="Evidence categories"
            title="Build the timeline from independent sources"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {evidenceCategories.map((item) => (
              <div
                key={item.category}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.category}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.examples}
                </p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Timeline use
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.timelineUse}
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
            label="Observation vs inference"
            title="Keep evidence statements separate from interpretation"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {directVsInference.map((item) => (
              <div
                key={item.statement}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="font-bold text-white">{item.statement}</p>
                <p className="mt-3 text-sm font-bold text-cyan-300">
                  {item.classification}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Common sequences"
            title="Recognize useful event patterns without assuming causation"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sequencePatterns.map((item) => (
              <div
                key={item.pattern}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="font-bold text-cyan-200">{item.pattern}</p>
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
          <SectionHeading
            label="Transformations"
            title="Know how file operations distort apparent time"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {transformationEffects.map((item) => (
              <div
                key={item.transformation}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.transformation}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.effect}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Clock problems"
            title="Explain timestamp disagreement before declaring contradiction"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {clockProblems.map((item) => (
              <div
                key={item.issue}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.issue}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.symptom}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Timeline entry
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Record enough context for another teammate to verify the event
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {timelineEntryFields.map((item, index) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Worked example"
            title="Build one timeline from multiple evidence categories"
          />

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800">
            <div className="grid grid-cols-[0.7fr_1fr_2.4fr_0.8fr] bg-slate-900 px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-slate-400">
              <span>Time</span>
              <span>Source</span>
              <span>Observed event</span>
              <span>Confidence</span>
            </div>

            {eventTable.map((item) => (
              <div
                key={`${item.time}-${item.source}`}
                className="grid grid-cols-[0.7fr_1fr_2.4fr_0.8fr] gap-3 border-t border-slate-800 bg-slate-950/60 px-4 py-4 text-sm"
              >
                <span className="font-bold text-cyan-300">{item.time}</span>
                <span className="text-slate-300">{item.source}</span>
                <span className="text-slate-300">{item.event}</span>
                <span className="text-slate-400">{item.confidence}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {eventInterpretation.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.answer}
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
              label="Windows"
              title="Collect timestamped evidence for correlation"
            />

            <div className="mt-6 grid gap-4">
              {windowsCommands.map((item) => (
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
              label="Linux"
              title="Collect timestamped evidence for correlation"
            />

            <div className="mt-6 grid gap-4">
              {linuxCommands.map((item) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Correlation"
            title="Use multiple independent artifacts to strengthen each link"
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
            label="Contradictions"
            title="Investigate disagreement instead of forcing a match"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {contradictionHandling.map((item) => (
              <div
                key={item.problem}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.problem}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.response}
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
            Timeline mistakes that turn evidence into assumptions
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {timelineMistakes.map((item) => (
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
            Fictional timeline lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Correlate session, download, extraction, cron, process, and network evidence
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {practiceTimeline.map((item) => (
              <div
                key={`${item.time}-${item.source}`}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black text-cyan-300">
                    {item.time}
                  </span>
                  <span className="rounded-full border border-slate-800 px-3 py-1 text-xs font-bold text-slate-400">
                    {item.source}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {practiceQuestions.map((item, index) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Timeline template"
            title="Turn evidence into a concise forensic answer"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {timelineTemplate.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.field}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.example}
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
              Check your timeline reasoning
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
                Preserve original times, normalize carefully, correlate across
                independent sources, label confidence, expose gaps, and answer
                only what the evidence supports.
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
              href="/cyberpatriot/forensics/archives-hidden-files-alternate-storage-awareness"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/forensics-practice-case"
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
