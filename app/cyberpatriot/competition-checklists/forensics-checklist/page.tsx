import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openingChecks = [
  {
    item: "Read the forensic question or incident prompt before collecting evidence.",
    why:
      "Collection should be driven by the question you need to answer so you do not waste time or alter unrelated evidence.",
  },
  {
    item: "Preserve the original state before remediation.",
    why:
      "Stopping a process, deleting a file, disabling a task, or changing an account can destroy timestamps, logs, and relationships you may need later.",
  },
  {
    item: "Record the system name, user context, current time, and time zone.",
    why:
      "Timeline analysis becomes unreliable if evidence from different systems is compared without time context.",
  },
  {
    item: "Hash important files before and after handling when practical.",
    why:
      "A cryptographic hash provides a repeatable integrity check for the exact bytes you examined.",
  },
  {
    item: "Capture paths, timestamps, process IDs, service names, usernames, and network endpoints exactly.",
    why:
      "Precise identifiers make cross-system correlation possible and reduce guesswork.",
  },
  {
    item: "Separate observations from conclusions.",
    why:
      "Write down what the evidence actually shows before deciding what it means.",
  },
];

const preservationChecks = [
  {
    title: "Case notes",
    actions: [
      "Record hostname and operating system",
      "Record current date, time, and time zone",
      "Record logged-in user",
      "Record the question being investigated",
    ],
    verify:
      "Your notes make it clear which system and moment each artifact came from.",
  },
  {
    title: "File integrity",
    actions: [
      "Record full file path",
      "Record file size",
      "Record available timestamps",
      "Calculate a SHA-256 hash",
    ],
    verify:
      "The evidence record is specific enough to identify the same file later.",
  },
  {
    title: "Screenshots and exports",
    actions: [
      "Capture only useful evidence",
      "Label screenshots with context",
      "Export logs when practical",
      "Keep original artifacts unchanged",
    ],
    verify:
      "Screenshots supplement evidence instead of replacing exact text, paths, timestamps, or hashes.",
  },
  {
    title: "Change boundary",
    actions: [
      "Collect before deleting",
      "Collect before disabling",
      "Collect before terminating",
      "Collect before editing permissions",
    ],
    verify:
      "High-impact remediation happens only after the evidence you need is preserved.",
  },
];

const windowsChecks = [
  {
    title: "Authentication events",
    commands: [
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4624,4625,4672} -MaxEvents 150',
    ],
    verify:
      "Successful, failed, and privileged logons are correlated with usernames, times, and source information.",
  },
  {
    title: "Account and group changes",
    commands: [
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4720,4722,4725,4728,4732,4733} -MaxEvents 150',
    ],
    verify:
      "Unexpected identity or privilege changes are tied to the responsible account and time.",
  },
  {
    title: "Process creation",
    commands: [
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4688} -MaxEvents 150',
      "Get-CimInstance Win32_Process | Select-Object ProcessId,ParentProcessId,Name,ExecutablePath,CommandLine",
    ],
    verify:
      "Process evidence includes path, command line, parent relationship, user context, and time when available.",
  },
  {
    title: "Service installation",
    commands: [
      'Get-WinEvent -FilterHashtable @{LogName="System"; Id=7045} -MaxEvents 100',
    ],
    verify:
      "New services are correlated with executable paths, accounts, and related activity.",
  },
  {
    title: "Scheduled tasks",
    commands: [
      "Get-ScheduledTask",
    ],
    verify:
      "Suspicious tasks are documented by name, action, trigger, author, run-as identity, and path.",
  },
  {
    title: "Network state",
    commands: [
      "Get-NetTCPConnection | Select-Object LocalAddress,LocalPort,RemoteAddress,RemotePort,State,OwningProcess",
    ],
    verify:
      "Connections are mapped to owning processes before containment.",
  },
];

const linuxChecks = [
  {
    title: "Authentication evidence",
    commands: [
      "sudo tail -n 150 /var/log/auth.log",
      "sudo journalctl _SYSTEMD_UNIT=ssh.service --no-pager -n 100",
    ],
    verify:
      "Logins, failures, sudo activity, and SSH sessions are correlated by user and timestamp.",
  },
  {
    title: "Recent user sessions",
    commands: [
      "last -a | head -n 50",
      "lastb -a | head -n 50",
    ],
    verify:
      "Recent successful and failed sessions are compared with approved users and expected sources.",
  },
  {
    title: "Process evidence",
    commands: [
      "ps auxf",
      "pstree -ap",
    ],
    verify:
      "Suspicious processes are documented by user, parent, command line, and execution context.",
  },
  {
    title: "Executable details",
    commands: [
      "readlink -f /proc/<PID>/exe",
      "tr '\\0' ' ' < /proc/<PID>/cmdline",
    ],
    verify:
      "The real executable path and command line are preserved before termination.",
  },
  {
    title: "Scheduled activity",
    commands: [
      "crontab -l",
      "sudo crontab -l",
      "systemctl list-timers --all",
    ],
    verify:
      "Cron jobs and timers are recorded by owner, schedule, command, and associated service.",
  },
  {
    title: "Network state",
    commands: [
      "sudo ss -ntup",
      "sudo ss -lntup",
    ],
    verify:
      "Active and listening sockets are correlated with processes before changes.",
  },
];

const fileChecks = [
  {
    title: "Hash",
    windows: "Get-FileHash <Path> -Algorithm SHA256",
    linux: "sha256sum <path>",
    purpose:
      "Identify the exact bytes of a file and detect whether it changes during handling.",
  },
  {
    title: "Metadata",
    windows: "Get-Item <Path> | Format-List *",
    linux: "stat <path>",
    purpose:
      "Capture size, ownership, and available timestamps for correlation.",
  },
  {
    title: "Directory context",
    windows: "Get-ChildItem <Directory> -Force",
    linux: "ls -la <directory>",
    purpose:
      "Understand neighboring files, hidden items, and naming patterns.",
  },
  {
    title: "File type",
    windows: "Use extension, properties, and trusted inspection tools",
    linux: "file <path>",
    purpose:
      "Determine whether the content matches the apparent filename or extension.",
  },
];

const browserChecks = [
  {
    artifact: "History",
    lookFor:
      "Visited sites, timestamps, search activity, and navigation near the suspicious event.",
  },
  {
    artifact: "Downloads",
    lookFor:
      "Source URL, local filename, download time, destination path, and related browser activity.",
  },
  {
    artifact: "Recent files",
    lookFor:
      "Files opened or created near the incident window.",
  },
  {
    artifact: "Archive extraction",
    lookFor:
      "Extracted folders, renamed files, and timestamps that connect a downloaded archive to later execution.",
  },
  {
    artifact: "Execution follow-up",
    lookFor:
      "Process creation, service installation, scheduled tasks, Run keys, cron jobs, or timers following the download.",
  },
  {
    artifact: "Network follow-up",
    lookFor:
      "Outbound connections from the downloaded or extracted program and related processes.",
  },
];

const timelineModel = [
  {
    step: "01",
    source: "Authentication",
    question:
      "Who logged in, from where, and when did the relevant session begin?",
  },
  {
    step: "02",
    source: "Browser / download",
    question:
      "What was visited or downloaded during that session?",
  },
  {
    step: "03",
    source: "File system",
    question:
      "When did the file appear, change, move, or extract?",
  },
  {
    step: "04",
    source: "Process",
    question:
      "Was the file executed, by which user, and with what parent or command line?",
  },
  {
    step: "05",
    source: "Network",
    question:
      "Did the process create a listener or outbound connection?",
  },
  {
    step: "06",
    source: "Persistence",
    question:
      "Did a service, task, Run key, cron job, or timer create recurring execution?",
  },
  {
    step: "07",
    source: "Privilege",
    question:
      "Did account or group state change after the execution?",
  },
  {
    step: "08",
    source: "Verification",
    question:
      "Do at least two independent artifacts support the important conclusion?",
  },
];

const confidenceLevels = [
  {
    level: "High confidence",
    meaning:
      "Multiple independent artifacts agree on the same sequence, identity, path, or event.",
  },
  {
    level: "Moderate confidence",
    meaning:
      "The evidence points strongly in one direction but one important link is missing.",
  },
  {
    level: "Low confidence",
    meaning:
      "The conclusion depends on one weak artifact, assumption, or timestamp without corroboration.",
  },
  {
    level: "Unresolved",
    meaning:
      "The available evidence is insufficient or contradictory. Record the uncertainty rather than guessing.",
  },
];

const evidenceTableFields = [
  "Evidence ID",
  "System",
  "Source",
  "Timestamp",
  "User",
  "Path / PID / service",
  "Observation",
  "Hash if relevant",
  "Related evidence",
  "Confidence",
];

const highPriorityFindings = [
  {
    finding: "Unknown executable with active outbound connection",
    firstMove:
      "Record path, PID, parent, command line, user, hash, timestamps, remote endpoint, and related logs before containment.",
  },
  {
    finding: "New privileged account",
    firstMove:
      "Preserve account-creation, group-change, and logon evidence before changing the account.",
  },
  {
    finding: "Suspicious scheduled persistence",
    firstMove:
      "Record task or timer name, action, trigger, run-as identity, executable path, and timestamps before disabling it.",
  },
  {
    finding: "Recently installed service",
    firstMove:
      "Capture service name, executable path, start account, installation event, and related process or network evidence.",
  },
  {
    finding: "Downloaded archive followed by execution",
    firstMove:
      "Preserve browser download data, archive hash, extracted paths, execution evidence, and subsequent network or persistence activity.",
  },
  {
    finding: "Repeated failed logons followed by privileged success",
    firstMove:
      "Preserve source information, usernames, timestamps, successful session details, and subsequent administrative actions.",
  },
];

const doNotBlindlyDo = [
  "Do not execute an unknown file just to see what it does.",
  "Do not delete suspicious files before recording path, hash, metadata, and related evidence.",
  "Do not terminate a suspicious process before recording process and network context.",
  "Do not disable a task, service, cron job, or timer before preserving its configuration.",
  "Do not rely on one timestamp without corroborating it with another artifact.",
  "Do not assume a filename proves file type or purpose.",
  "Do not treat a screenshot as a substitute for exact evidence details.",
  "Do not turn an observation into a conclusion unless the evidence supports it.",
];

const verificationChecks = [
  {
    area: "Integrity",
    verify:
      "Important files have recorded paths, hashes, sizes, and timestamps where practical.",
  },
  {
    area: "Identity",
    verify:
      "Authentication and privilege evidence is tied to specific users and times.",
  },
  {
    area: "Execution",
    verify:
      "Process evidence includes enough context to explain what ran and how.",
  },
  {
    area: "Persistence",
    verify:
      "Services, tasks, Run keys, cron jobs, and timers were documented before remediation.",
  },
  {
    area: "Network",
    verify:
      "Connections and listeners were mapped to processes or services.",
  },
  {
    area: "Timeline",
    verify:
      "Important events are ordered consistently using known time-zone context.",
  },
  {
    area: "Correlation",
    verify:
      "Major conclusions are supported by more than one independent artifact when possible.",
  },
  {
    area: "Notes",
    verify:
      "Observations, conclusions, remediation, and unresolved questions are clearly separated.",
  },
];

const finalChecklist = [
  "The forensic question or incident prompt was read before collection.",
  "System name, current time, and time zone were recorded.",
  "Important evidence was preserved before remediation.",
  "Suspicious files have recorded paths, metadata, and SHA-256 hashes where practical.",
  "Authentication evidence was reviewed.",
  "Privilege and account changes were reviewed.",
  "Suspicious processes were documented before containment.",
  "Scheduled persistence was documented before disablement.",
  "Network connections and listeners were correlated with processes or services.",
  "Browser and download artifacts were reviewed when relevant.",
  "Windows or Linux logs were correlated with file and process evidence.",
  "A timeline was built from the most relevant events.",
  "Major conclusions are supported by multiple artifacts when possible.",
  "Confidence and uncertainty are recorded explicitly.",
  "The evidence notes distinguish observation from interpretation.",
  "Remediation was verified after evidence collection.",
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

function CommandSection({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: {
    title: string;
    commands: string[];
    verify: string;
  }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
        <SectionHeading label={label} title={title} />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
            >
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <div className="mt-5 grid gap-3">
                {item.commands.map((command) => (
                  <pre
                    key={command}
                    className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100"
                  >
                    {command}
                  </pre>
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.verify}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ForensicsChecklistPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/competition-checklists"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Competition Checklists
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
              href="/cyberpatriot/competition-checklists/cisco-networking-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/accounts-privilege-checklist"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Checklist &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Competition Checklist &middot; 06 &middot; Forensics
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Forensics Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Preserve evidence, record hashes and metadata, correlate
                authentication, processes, services, scheduled activity,
                browser artifacts, network state, and timelines before drawing
                conclusions or changing the system.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The goal is not to collect everything. Collect the evidence
                needed to answer the question, preserve context, and support
                conclusions with multiple independent artifacts.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>First action</span>
                  <span className="font-bold text-white">Preserve</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core method</span>
                  <span className="font-bold text-white">Correlate</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Integrity</span>
                  <span className="font-bold text-white">SHA-256</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish with</span>
                  <span className="font-bold text-white">Confidence statement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Evidence rule
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Preserve before you remediate
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            The moment you terminate a process, remove an account, disable a
            service, delete a file, or change permissions, the evidence changes.
            Capture what you need first.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Opening pass"
            title="Set the case context before collection"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {openingChecks.map((item, index) => (
              <div
                key={item.item}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex gap-4">
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-black text-white">{item.item}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Preservation"
            title="Protect the evidence before changing the system"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {preservationChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>

                <div className="mt-4 grid gap-2">
                  {item.actions.map((action) => (
                    <div
                      key={action}
                      className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-300"
                    >
                      {action}
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.verify}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CommandSection
        label="Windows evidence"
        title="Correlate identity, execution, persistence, and network state"
        items={windowsChecks}
      />

      <CommandSection
        label="Linux evidence"
        title="Correlate authentication, processes, schedules, and sockets"
        items={linuxChecks}
      />

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="File quick reference"
            title="Record the exact file before interpreting it"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {fileChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>

                <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  Windows
                </p>
                <pre className="mt-2 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.windows}
                </pre>

                <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  Linux
                </p>
                <pre className="mt-2 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.linux}
                </pre>

                <p className="mt-4 text-sm leading-7 text-slate-400">
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
            label="Browser & download artifacts"
            title="Follow the path from download to execution"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {browserChecks.map((item) => (
              <div
                key={item.artifact}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.artifact}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.lookFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Timeline reconstruction"
            title="Build the sequence from independent artifacts"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {timelineModel.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.source}
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Evidence table
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Keep one structured record for the important artifacts
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {evidenceTableFields.map((field, index) => (
              <div
                key={field}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-slate-300">
                  {field}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Confidence"
            title="State how strongly the evidence supports the conclusion"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {confidenceLevels.map((item) => (
              <div
                key={item.level}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.level}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-priority findings
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Preserve the relationships before containment
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highPriorityFindings.map((item) => (
              <div
                key={item.finding}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="font-black text-white">{item.finding}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.firstMove}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Do not blindly do
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Common evidence-destroying mistakes
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {doNotBlindlyDo.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-yellow-400/15 bg-slate-950/50 p-4"
              >
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
            label="Verification sweep"
            title="Confirm the case record is complete enough to support your conclusion"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {verificationChecks.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.verify}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Forensics final checklist
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Finish with evidence, correlation, and explicit confidence
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalChecklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"
              >
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
              href="/cyberpatriot/competition-checklists"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Competition Checklists
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
              href="/cyberpatriot/competition-checklists/cisco-networking-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/accounts-privilege-checklist"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Checklist &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
