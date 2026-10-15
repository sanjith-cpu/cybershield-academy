import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const missionRequirements = [
  "This fictional case uses an authorized practice workstation and prepared evidence only.",
  "A suspicious archive was downloaded by a user during a normal work session.",
  "Your goal is to determine what happened after the download without executing any unknown file.",
  "Preserve hashes, paths, timestamps, browser artifacts, process evidence, persistence clues, and network evidence before remediation.",
  "Do not open or run the suspicious executable during the investigation.",
  "Separate direct evidence from assumptions about intent.",
  "Use multiple artifacts to support conclusions about download, extraction, execution, persistence, and communication.",
  "Contain or remove only what the evidence supports and only inside the authorized lab.",
];

const caseProfile = [
  {
    label: "User",
    value: "Jordan",
  },
  {
    label: "System",
    value: "Windows 11 practice workstation",
  },
  {
    label: "Initial clue",
    value: "Unexpected ZIP archive in Downloads",
  },
  {
    label: "Primary question",
    value: "Was the downloaded content only present, or was it executed and made persistent?",
  },
];

const browserChecks = [
  {
    title: "Download history",
    examples: [
      "Browser download database",
      "Recent downloads list",
      "Original URL",
      "Download timestamp",
    ],
    purpose:
      "Establish how and when the archive arrived and whether the browser recorded a completed download.",
  },
  {
    title: "Visited pages",
    examples: [
      "History entries",
      "Referrer page",
      "Search terms",
      "Download landing page",
    ],
    purpose:
      "Add context around the user's browsing activity without assuming the visit itself proves execution.",
  },
  {
    title: "Cached content",
    examples: [
      "Cached page resources",
      "Temporary files",
      "Browser profile artifacts",
    ],
    purpose:
      "Use supporting artifacts to confirm the sequence around the download.",
  },
];

const fileChecks = [
  {
    title: "Hash the archive",
    commands: [
      'Get-FileHash "$env:USERPROFILE\\Downloads\\update-tool.zip" -Algorithm SHA256',
    ],
    purpose:
      "Record a stable identifier for the downloaded archive before further analysis.",
  },
  {
    title: "Inspect metadata",
    commands: [
      'Get-Item "$env:USERPROFILE\\Downloads\\update-tool.zip" | Format-List Name,Length,CreationTime,LastWriteTime,FullName',
    ],
    purpose:
      "Record path, size, and timestamps without opening or modifying the archive.",
  },
  {
    title: "Inspect extracted artifacts",
    commands: [
      'Get-ChildItem "$env:USERPROFILE\\Downloads\\UpdateTool" -Force | Select-Object Name,Length,CreationTime,LastWriteTime',
    ],
    purpose:
      "Document extracted files if the fictional case already includes them, while avoiding execution.",
  },
  {
    title: "Hash the executable",
    commands: [
      'Get-FileHash "$env:USERPROFILE\\Downloads\\UpdateTool\\update-tool.exe" -Algorithm SHA256',
    ],
    purpose:
      "Identify the executable and preserve evidence before containment or removal.",
  },
];

const executionChecks = [
  {
    title: "Process creation evidence",
    commands: [
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4688} -MaxEvents 100',
    ],
    purpose:
      "Look for execution records that include the suspicious path, user, process ID, and parent process.",
  },
  {
    title: "Running processes",
    commands: [
      "Get-Process | Sort-Object ProcessName",
    ],
    purpose:
      "Determine whether any process matching the suspicious artifact is currently active.",
  },
  {
    title: "Recent service installation",
    commands: [
      'Get-WinEvent -FilterHashtable @{LogName="System"; Id=7045} -MaxEvents 50',
    ],
    purpose:
      "Check whether execution created or installed a service.",
  },
  {
    title: "PowerShell evidence",
    commands: [
      'Get-WinEvent -LogName "Microsoft-Windows-PowerShell/Operational" -MaxEvents 80',
    ],
    purpose:
      "Review PowerShell activity if the case suggests a script or shell was launched.",
  },
];

const persistenceChecks = [
  {
    title: "Scheduled tasks",
    commands: [
      "Get-ScheduledTask",
      'Get-ScheduledTask | Where-Object {$_.TaskName -match "Update|Check|Tool"}',
    ],
    purpose:
      "Identify tasks that may launch the suspicious executable at logon or on a schedule.",
  },
  {
    title: "Startup folders",
    commands: [
      'Get-ChildItem "$env:APPDATA\\Microsoft\\Windows\\Start Menu\\Programs\\Startup" -Force',
      'Get-ChildItem "$env:ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\StartUp" -Force',
    ],
    purpose:
      "Check common startup locations for links or executables.",
  },
  {
    title: "Run keys",
    commands: [
      'Get-ItemProperty "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Run"',
      'Get-ItemProperty "HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Run"',
    ],
    purpose:
      "Review common autorun registry locations for suspicious entries.",
  },
  {
    title: "Services",
    commands: [
      "Get-Service | Sort-Object Name",
    ],
    purpose:
      "Identify newly added or oddly named services that require deeper correlation.",
  },
];

const networkChecks = [
  {
    title: "Current connections",
    commands: [
      "Get-NetTCPConnection | Sort-Object State,RemoteAddress",
    ],
    purpose:
      "Review active TCP connections and correlate them with process ownership where possible.",
  },
  {
    title: "Process-to-connection mapping",
    commands: [
      "Get-NetTCPConnection | Select-Object LocalAddress,LocalPort,RemoteAddress,RemotePort,State,OwningProcess",
    ],
    purpose:
      "Tie remote communication to an owning PID rather than treating every connection as suspicious.",
  },
  {
    title: "Listening ports",
    commands: [
      'Get-NetTCPConnection -State Listen | Select-Object LocalAddress,LocalPort,OwningProcess',
    ],
    purpose:
      "Check whether a suspicious process created a local listener.",
  },
  {
    title: "DNS cache",
    commands: [
      "Get-DnsClientCache",
    ],
    purpose:
      "Use cached name-resolution evidence as supporting context for recent communication.",
  },
];

const fictionalEvidence = [
  {
    id: "E01",
    time: "14:07",
    source: "Browser",
    observation:
      "Jordan's browser history shows a visit to a fictional download page for an 'update helper.'",
    prompt:
      "What additional evidence would you want before claiming a file was downloaded?",
  },
  {
    id: "E02",
    time: "14:09",
    source: "Download history",
    observation:
      "The browser records a completed download named update-tool.zip into Jordan's Downloads folder.",
    prompt:
      "What does this establish, and what does it still not prove?",
  },
  {
    id: "E03",
    time: "14:11",
    source: "File system",
    observation:
      "A folder named UpdateTool appears with update-tool.exe inside it.",
    prompt:
      "What event likely occurred between the archive download and this folder's appearance?",
  },
  {
    id: "E04",
    time: "14:13",
    source: "Process creation",
    observation:
      "A process-creation event records update-tool.exe launched from the extracted folder under Jordan's account.",
    prompt:
      "Why is this stronger evidence than file presence?",
  },
  {
    id: "E05",
    time: "14:14",
    source: "Network",
    observation:
      "The PID associated with update-tool.exe opens an outbound TCP connection to a fictional external address.",
    prompt:
      "How does PID correlation strengthen the network evidence?",
  },
  {
    id: "E06",
    time: "14:16",
    source: "Scheduled task",
    observation:
      "A new task named UpdateCheck launches update-tool.exe at user logon.",
    prompt:
      "What behavior does this add to the case?",
  },
  {
    id: "E07",
    time: "14:18",
    source: "Defender",
    observation:
      "Microsoft Defender records a detection tied to the same executable path, but the file remains present in the prepared lab snapshot.",
    prompt:
      "Why should the detection be correlated with other evidence rather than treated as the entire investigation?",
  },
  {
    id: "E08",
    time: "14:24",
    source: "Authentication",
    observation:
      "Jordan logs off while the UpdateCheck task remains configured.",
    prompt:
      "What would you predict may occur at Jordan's next logon if the task is not removed?",
  },
];

const caseQuestions = [
  {
    question: "Did the archive arrive through the browser?",
    evidence: "Browser download history + file presence",
  },
  {
    question: "Was the archive extracted?",
    evidence: "Extracted folder + file metadata",
  },
  {
    question: "Was the executable launched?",
    evidence: "Process-creation event",
  },
  {
    question: "Did it communicate externally?",
    evidence: "Owning PID + outbound connection",
  },
  {
    question: "Did it create persistence?",
    evidence: "Scheduled task action + trigger",
  },
  {
    question: "Did security tooling react?",
    evidence: "Defender event tied to the same path/hash",
  },
];

const preservationChecklist = [
  "Record SHA-256 hashes for the archive and executable.",
  "Record browser download URL, destination path, and timestamp.",
  "Record archive and extracted-file metadata.",
  "Record process ID, parent process, user, path, and command line.",
  "Record the scheduled-task name, action, trigger, run-as account, and timestamps.",
  "Record network endpoints and owning PID.",
  "Record Defender evidence including path, detection time, and threat name from the prepared lab.",
  "Keep an evidence notebook separating facts, interpretations, and remediation actions.",
];

const containmentExamples = [
  {
    title: "Disable a suspicious scheduled task",
    commands: [
      'Disable-ScheduledTask -TaskName "UpdateCheck"',
    ],
    note:
      "Use only after the case evidence confirms the task is tied to the suspicious executable.",
  },
  {
    title: "Stop a verified suspicious process",
    commands: [
      "Stop-Process -Id <PID>",
    ],
    note:
      "Use only in the authorized lab after preserving process and network evidence.",
  },
  {
    title: "Remove persistence after preservation",
    commands: [
      'Unregister-ScheduledTask -TaskName "UpdateCheck" -Confirm:$false',
    ],
    note:
      "Remove only after documenting the task definition and confirming it is not required.",
  },
  {
    title: "Re-scan with Defender",
    commands: [
      "Start-MpScan -ScanType QuickScan",
    ],
    note:
      "Use as a verification step after containment in the practice environment.",
  },
];

const verificationChecks = [
  {
    area: "Execution",
    commands: [
      "Get-Process | Sort-Object ProcessName",
    ],
    verify:
      "The suspicious process is no longer running after authorized containment.",
  },
  {
    area: "Persistence",
    commands: [
      'Get-ScheduledTask | Where-Object {$_.TaskName -eq "UpdateCheck"}',
    ],
    verify:
      "The confirmed suspicious task is disabled or removed according to the lab decision.",
  },
  {
    area: "Network",
    commands: [
      "Get-NetTCPConnection | Select-Object RemoteAddress,RemotePort,State,OwningProcess",
    ],
    verify:
      "No connection remains tied to the suspicious process.",
  },
  {
    area: "Defender",
    commands: [
      "Get-MpComputerStatus",
      "Get-MpThreatDetection",
    ],
    verify:
      "Defender remains enabled and the system shows the expected post-containment security state.",
  },
  {
    area: "Evidence",
    commands: [
      'Get-FileHash "$env:USERPROFILE\\Downloads\\update-tool.zip" -Algorithm SHA256',
    ],
    verify:
      "Your recorded evidence identifiers still match the preserved case data.",
  },
];

const reflectionQuestions = [
  "What is the difference between proving a file was downloaded and proving it was executed?",
  "Why is process-creation evidence especially valuable in this case?",
  "Why should network activity be tied to a PID when possible?",
  "How does the scheduled task change the case from a one-time event to persistent behavior?",
  "Why should Defender evidence be correlated with browser, process, and persistence artifacts?",
  "Why should the suspicious executable not be opened during the investigation?",
  "What should be preserved before removing the scheduled task?",
  "Which two artifacts provide the strongest evidence that the suspicious file affected system behavior?",
];

const completionChecklist = [
  "I preserved hashes and metadata before containment.",
  "I confirmed the archive arrived through the browser.",
  "I distinguished file presence from execution.",
  "I correlated the executable with a process-creation event.",
  "I tied network activity to the suspicious PID.",
  "I identified persistence through the scheduled task.",
  "I reviewed Defender evidence without relying on it alone.",
  "I separated direct observations from inferences.",
  "I applied only narrow authorized containment actions.",
  "I verified the suspicious behavior no longer persists.",
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

export default function ForensicsSuspiciousDownloadCaseLab() {
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
              href="/cyberpatriot/practice-labs/forensics-evidence-timeline"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/mixed-system-incident-triage"
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
                Practice Lab &middot; 10 &middot; Forensics
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Suspicious Download Case
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Investigate a fictional suspicious download by correlating browser
                history, file metadata, process creation, network activity,
                scheduled persistence, and Defender evidence.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The lab does not require executing unknown content. Your job is to
                reconstruct behavior from evidence and contain only what is supported.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lab Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Difficulty</span>
                  <span className="font-bold text-white">Advanced</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Area</span>
                  <span className="font-bold text-white">Forensics</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core skill</span>
                  <span className="font-bold text-white">Artifact correlation</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Safety rule</span>
                  <span className="font-bold text-white">Do not execute</span>
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
            Determine whether the download was present, executed, persistent, and network-active
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
          <SectionHeading label="Case profile" title="Start with the known facts" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {caseProfile.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Investigation boundary
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Analyze the suspicious file without running it
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Hashing, metadata review, event logs, scheduled tasks, Defender evidence,
            and process/network correlation can reveal behavior without intentionally
            launching the unknown executable.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Browser evidence" title="Establish how the file arrived" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {browserChecks.map((item) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="File evidence" title="Preserve hashes, paths, and timestamps" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {fileChecks.map((item) => (
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
          <SectionHeading label="Execution evidence" title="Determine whether the file actually ran" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {executionChecks.map((item) => (
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
          <SectionHeading label="Persistence evidence" title="Check whether execution was designed to return" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {persistenceChecks.map((item) => (
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
          <SectionHeading label="Network evidence" title="Tie communication to the suspicious process" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {networkChecks.map((item) => (
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
          <SectionHeading label="Fictional evidence set" title="Correlate the case from download to persistence" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {fictionalEvidence.map((item) => (
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
          <SectionHeading label="Case questions" title="Build conclusions from supporting artifacts" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {caseQuestions.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.question}</h3>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                  Evidence to use
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.evidence}</p>
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
            Capture the evidence before containment changes system state
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
            label="Authorized containment examples"
            title="Contain only what the evidence supports"
            description="These examples apply only to the fictional practice workstation after evidence preservation."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {containmentExamples.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.note}</p>
                <div className="mt-4 grid gap-2">
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
          <SectionHeading label="Verification" title="Prove the suspicious behavior no longer persists" />
          <div className="mt-8 grid gap-5">
            {verificationChecks.map((item) => (
              <div key={item.area} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
                  <div>
                    <h3 className="text-xl font-black text-white">{item.area}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{item.verify}</p>
                  </div>
                  <div className="grid gap-3">
                    {item.commands.map((command) => (
                      <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{command}
                      </pre>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Reflection" title="Debrief the suspicious download case" />
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
            Finish only when the case is supported and contained
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
              href="/cyberpatriot/practice-labs/forensics-evidence-timeline"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/mixed-system-incident-triage"
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
