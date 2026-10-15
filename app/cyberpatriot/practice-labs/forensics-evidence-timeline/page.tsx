import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const missionRequirements = [
  "This fictional forensics lab uses an authorized practice workstation and a prepared evidence set.",
  "Your goal is to reconstruct a timeline without altering the original evidence.",
  "Preserve original filenames, paths, timestamps, and hashes before drawing conclusions.",
  "Different timestamp types can mean different things; do not treat every time value as proof of user action.",
  "Authentication, process, scheduled-task, browser, and file evidence should be correlated rather than analyzed in isolation.",
  "A single artifact may be misleading unless another source supports the same event.",
  "Do not rename, move, delete, or edit evidence files during the investigation.",
  "Document what is directly observed separately from what is inferred.",
];

const timelineSources = [
  {
    title: "File-system timestamps",
    examples: [
      "Created time",
      "Modified time",
      "Accessed time",
      "Metadata change time where supported",
    ],
    purpose:
      "Use timestamps as timeline anchors, but remember that copying, extraction, synchronization, and system behavior can alter them.",
  },
  {
    title: "Authentication events",
    examples: [
      "Successful logon",
      "Failed logon",
      "Account creation",
      "Privilege assignment",
    ],
    purpose:
      "Establish when identities authenticated or changed privilege and correlate those events with later activity.",
  },
  {
    title: "Process and service activity",
    examples: [
      "Process start",
      "Service installation",
      "Service start/stop",
      "Parent-child process relationships",
    ],
    purpose:
      "Connect a file or command with actual execution rather than assuming presence means use.",
  },
  {
    title: "Scheduled activity",
    examples: [
      "Scheduled tasks",
      "Cron entries",
      "Systemd timers",
      "Last-run information",
    ],
    purpose:
      "Identify recurring or delayed execution that may explain activity outside an interactive session.",
  },
  {
    title: "Browser and download artifacts",
    examples: [
      "Download history",
      "Visited URLs",
      "Cached files",
      "Download timestamps",
    ],
    purpose:
      "Add context around how a file may have arrived and what the user was doing around that time.",
  },
  {
    title: "Network evidence",
    examples: [
      "Listening ports",
      "Active connections",
      "Firewall logs",
      "Remote endpoints",
    ],
    purpose:
      "Correlate execution with communication and distinguish local-only activity from network-facing behavior.",
  },
];

const windowsChecks = [
  {
    title: "Authentication events",
    commands: [
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4624,4625,4672,4720} -MaxEvents 80',
    ],
    purpose:
      "Review successful and failed logons, special privileges, and account creation.",
  },
  {
    title: "Process creation",
    commands: [
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4688} -MaxEvents 80',
    ],
    purpose:
      "Use process-creation auditing when available to correlate execution with user and command-line context.",
  },
  {
    title: "Service installation",
    commands: [
      'Get-WinEvent -FilterHashtable @{LogName="System"; Id=7045} -MaxEvents 40',
    ],
    purpose:
      "Identify recently installed services and correlate their executable paths with the file timeline.",
  },
  {
    title: "Scheduled tasks",
    commands: [
      "Get-ScheduledTask",
      "Get-ScheduledTaskInfo -TaskName \"ExampleTask\"",
    ],
    purpose:
      "Review configured tasks, triggers, and run history where available.",
  },
];

const linuxChecks = [
  {
    title: "Authentication timeline",
    commands: [
      "sudo grep -Ei \"accepted|failed|sudo|session opened|session closed\" /var/log/auth.log 2>/dev/null | tail -n 120",
    ],
    purpose:
      "Review authentication and sudo activity with timestamps.",
  },
  {
    title: "Journal timeline",
    commands: [
      "journalctl --since today --no-pager",
      "journalctl -p warning --since today --no-pager",
    ],
    purpose:
      "Use the system journal to correlate services, processes, and failures.",
  },
  {
    title: "Cron and timers",
    commands: [
      "crontab -l",
      "sudo crontab -l",
      "systemctl list-timers --all",
    ],
    purpose:
      "Identify recurring execution sources that may explain events outside interactive sessions.",
  },
  {
    title: "File metadata",
    commands: [
      "stat /path/to/evidence-file",
      "sha256sum /path/to/evidence-file",
    ],
    purpose:
      "Record file timestamps and hash without modifying the file.",
  },
];

const evidenceSet = [
  {
    id: "E01",
    time: "09:12",
    source: "Authentication",
    observation:
      "A successful logon event shows user Jordan signed in interactively.",
    prompt:
      "What later artifacts would you expect to fall within or shortly after this session if Jordan initiated them?",
  },
  {
    id: "E02",
    time: "09:18",
    source: "Browser history",
    observation:
      "The browser history shows a visit to a fictional software download page.",
    prompt:
      "What additional artifact would help prove that a file was actually downloaded rather than only viewed?",
  },
  {
    id: "E03",
    time: "09:20",
    source: "Download artifact",
    observation:
      "A file named update-tool.zip appears in Downloads with a created timestamp near 09:20.",
    prompt:
      "Why is the created timestamp useful but not sufficient by itself to prove execution?",
  },
  {
    id: "E04",
    time: "09:23",
    source: "File metadata",
    observation:
      "An executable extracted from the archive has a modified timestamp older than the download event.",
    prompt:
      "Why can an extracted file legitimately have an older modified timestamp than the archive arrival time?",
  },
  {
    id: "E05",
    time: "09:26",
    source: "Process creation",
    observation:
      "A process-creation event shows update-tool.exe launched from the user's Downloads folder.",
    prompt:
      "How does this strengthen the timeline compared with file presence alone?",
  },
  {
    id: "E06",
    time: "09:27",
    source: "Network",
    observation:
      "The same process ID is associated with an outbound connection to a fictional external endpoint.",
    prompt:
      "What new behavior does this add to the timeline?",
  },
  {
    id: "E07",
    time: "09:31",
    source: "Scheduled task",
    observation:
      "A scheduled task named UpdateCheck was created to run update-tool.exe at user logon.",
    prompt:
      "How does this change the interpretation from one-time execution to persistence?",
  },
  {
    id: "E08",
    time: "10:04",
    source: "Authentication",
    observation:
      "Jordan logs off. The scheduled task remains configured.",
    prompt:
      "Why is this important when predicting what might happen at the next logon?",
  },
];

const timelineMethod = [
  {
    step: "01",
    title: "Normalize time",
    text:
      "Record timezone, clock source, and timestamp format before comparing artifacts.",
  },
  {
    step: "02",
    title: "List direct observations",
    text:
      "Write down what each artifact actually says without adding interpretation.",
  },
  {
    step: "03",
    title: "Group by event",
    text:
      "Cluster artifacts that appear to describe the same action, such as download, execution, or logon.",
  },
  {
    step: "04",
    title: "Correlate identities",
    text:
      "Connect user sessions and privilege events to process, file, and network activity.",
  },
  {
    step: "05",
    title: "Separate fact from inference",
    text:
      "Mark conclusions that are supported by multiple artifacts but are not directly recorded by any one source.",
  },
  {
    step: "06",
    title: "Verify sequence",
    text:
      "Check whether the event order makes technical sense and investigate contradictions instead of forcing them to fit.",
  },
];

const timestampWarnings = [
  "A modified timestamp may reflect the original source file rather than when it arrived on the system.",
  "Archive extraction can preserve or alter timestamps depending on the tool and format.",
  "Copying a file can change created time while leaving modified time intact.",
  "System clocks and time zones can make two valid artifacts appear out of order.",
  "Accessed time may be disabled, delayed, or updated inconsistently.",
  "Log ingestion time is not always the same as event occurrence time.",
  "A timestamp proves timing context, not user intent.",
  "The strongest timelines use multiple independent sources.",
];

const preservationChecklist = [
  "Record SHA-256 hashes for evidence files before analysis.",
  "Work from copies whenever possible.",
  "Record original path, filename, size, owner, and timestamps.",
  "Record event-log source, event ID, timestamp, account, and relevant fields.",
  "Record process PID, parent PID, executable path, and command line.",
  "Record scheduled-task action, trigger, run-as account, and last-run details.",
  "Record network endpoints and owning process information.",
  "Document every inference separately from direct observation.",
];

const timelineTable = [
  {
    time: "09:12",
    event: "Interactive logon",
    sources: "Authentication event",
    confidence: "High",
  },
  {
    time: "09:18",
    event: "Software page visited",
    sources: "Browser history",
    confidence: "High",
  },
  {
    time: "09:20",
    event: "Archive appears in Downloads",
    sources: "File metadata + download artifact",
    confidence: "High",
  },
  {
    time: "09:23",
    event: "Executable extracted",
    sources: "File-system metadata",
    confidence: "Medium",
  },
  {
    time: "09:26",
    event: "Executable launched",
    sources: "Process-creation event",
    confidence: "High",
  },
  {
    time: "09:27",
    event: "Outbound connection observed",
    sources: "Network + process correlation",
    confidence: "High",
  },
  {
    time: "09:31",
    event: "Persistence configured",
    sources: "Scheduled-task evidence",
    confidence: "High",
  },
  {
    time: "10:04",
    event: "Interactive session ends",
    sources: "Authentication event",
    confidence: "High",
  },
];

const reflectionQuestions = [
  "Why is file presence weaker evidence than process-creation evidence?",
  "Why can created and modified timestamps appear out of chronological order?",
  "What is the difference between a direct observation and an inference in a forensic timeline?",
  "Why should authentication events be correlated with process activity?",
  "How does a scheduled task change the interpretation of one-time execution?",
  "Why is an outbound network connection stronger when tied to a specific PID?",
  "What should you do when two artifacts appear to contradict each other?",
  "Which artifact in this lab gives the strongest evidence of execution, and why?",
];

const completionChecklist = [
  "I recorded timezone and timestamp context before comparing artifacts.",
  "I separated direct observations from inferences.",
  "I preserved file hashes and metadata before analysis.",
  "I correlated authentication with process and network evidence.",
  "I used more than one source to support major conclusions.",
  "I identified the difference between file arrival and execution.",
  "I identified the evidence suggesting persistence.",
  "I documented the event sequence without altering the original evidence.",
  "I investigated timestamp contradictions instead of ignoring them.",
  "I can explain the confidence level of each major timeline event.",
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

export default function ForensicsEvidenceTimelineLab() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/practice-labs"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Practice Labs
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
              href="/cyberpatriot/practice-labs/cisco-acl-port-security-review"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/forensics-suspicious-download-case"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lab &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Practice Lab &middot; 09 &middot; Forensics
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Forensics Evidence Timeline
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Reconstruct a fictional sequence of events by correlating
                authentication, browser, file, process, network, and scheduled
                activity evidence without altering the original artifacts.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This lab focuses on evidence reasoning. A reliable timeline is
                built from multiple independent sources, not a single timestamp.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lab Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Difficulty</span>
                  <span className="font-bold text-white">Intermediate</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Area</span>
                  <span className="font-bold text-white">Forensics</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core skill</span>
                  <span className="font-bold text-white">Timeline correlation</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Rule</span>
                  <span className="font-bold text-white">Preserve first</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Mission briefing
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Reconstruct the sequence without changing the evidence
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {missionRequirements.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Evidence sources"
            title="Know what each artifact can and cannot prove"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {timelineSources.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.examples.map((example) => (
                    <span key={example} className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-300">
                      {example}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Timestamp rule
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A timestamp is evidence of time context, not automatic proof of action
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Copying, extraction, synchronization, time zones, and system behavior
            can all affect timestamp interpretation. Correlate timestamps with
            logs and execution evidence before forming conclusions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Windows collection" title="Collect timeline evidence without changing it" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {windowsChecks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{command}
                    </pre>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Linux collection" title="Use logs, schedules, and metadata as independent evidence" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {linuxChecks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{command}
                    </pre>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Fictional evidence set" title="Build the event sequence" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {evidenceSet.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black text-cyan-300">{item.id}</span>
                  <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">
                    {item.time} &middot; {item.source}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.observation}</p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Investigation prompt
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.prompt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Timeline method" title="Turn artifacts into a defensible sequence" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {timelineMethod.map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <span className="text-sm font-black text-cyan-300">{item.step}</span>
                <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Timestamp warnings
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Common reasons timestamps can mislead you
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {timestampWarnings.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-yellow-400/15 bg-slate-950/50 p-4">
                <span className="font-black text-yellow-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Preserve first
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Keep the original evidence intact
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {preservationChecklist.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-yellow-400/15 bg-slate-950/50 p-4">
                <span className="font-black text-yellow-200">
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
          <SectionHeading
            label="Reconstructed timeline"
            title="One defensible interpretation of the fictional evidence"
            description="This table models how to present a timeline while keeping confidence explicit."
          />

          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-slate-300">
                  <th className="px-4 py-3 font-black">Time</th>
                  <th className="px-4 py-3 font-black">Event</th>
                  <th className="px-4 py-3 font-black">Sources</th>
                  <th className="px-4 py-3 font-black">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {timelineTable.map((row) => (
                  <tr key={`${row.time}-${row.event}`} className="border-b border-slate-800">
                    <td className="px-4 py-4 font-bold text-cyan-300">{row.time}</td>
                    <td className="px-4 py-4 text-slate-200">{row.event}</td>
                    <td className="px-4 py-4 text-slate-400">{row.sources}</td>
                    <td className="px-4 py-4 text-slate-300">{row.confidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Reflection" title="Debrief the timeline reasoning" />
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {reflectionQuestions.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <span className="font-black text-cyan-300">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Completion checklist
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Finish only when the sequence is supported by evidence
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {completionChecklist.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4">
                <span className="font-black text-emerald-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/practice-labs"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Practice Labs
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
              href="/cyberpatriot/practice-labs/cisco-acl-port-security-review"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/forensics-suspicious-download-case"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lab &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
