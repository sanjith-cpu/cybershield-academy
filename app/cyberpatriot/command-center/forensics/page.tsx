import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Evidence Preservation",
    items: [
      ["Record before changing", "Capture paths, timestamps, hashes, PIDs, accounts, log entries, scheduled-task details, and network state before remediation.", "Changing the system can destroy or alter evidence."],
      ["Work from copies when possible", "Preserve the original evidence source and analyze a working copy.", "Do not confuse a copied artifact with the original source."],
      ["Separate observation from inference", "Write what the evidence directly shows first, then label any interpretation separately.", "A plausible explanation is not the same as proof."],
      ["Document your own changes", "Keep remediation actions separate from the original state.", "This prevents later confusion when reconstructing the timeline."],
    ],
  },
  {
    title: "Hashes & File Identity",
    items: [
      ['Get-FileHash "C:\\Path\\To\\File" -Algorithm SHA256', "Calculates a SHA-256 hash on Windows.", "A hash identifies content; it does not prove whether the file is safe."],
      ["sha256sum <file>", "Calculates a SHA-256 hash on Linux.", "Hash equality means identical content, not identical origin or intent."],
      ["file <file>", "Identifies a Linux file by content rather than extension.", "File type is useful triage evidence, not a verdict."],
      ['Get-Item "C:\\Path\\To\\File" | Format-List Name,Length,CreationTime,LastWriteTime,Attributes', "Shows useful Windows metadata.", "Creation and write times describe different events."],
    ],
  },
  {
    title: "Windows Accounts & Authentication",
    items: [
      ["Get-LocalUser", "Lists local Windows accounts.", "Account presence does not prove activity."],
      ['Get-LocalGroupMember -Group "Administrators"', "Shows local Administrators membership.", "Privilege membership is capability, not proof of use."],
      ["Get-WinEvent -LogName Security -MaxEvents 100", "Shows recent Security events.", "Filter by time and event ID when possible."],
      ["Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4624,4625,4648,4672}", "Filters common authentication/privilege events.", "Use logon type and surrounding events for context."],
    ],
  },
  {
    title: "Linux Accounts & Authentication",
    items: [
      ["getent passwd", "Lists visible user accounts.", "Presence alone does not indicate recent activity."],
      ["id <username>", "Shows UID and group membership for one account.", "Group membership is capability, not action."],
      ["last", "Shows recent login history from wtmp where available.", "Historical login databases can be rotated or incomplete."],
      ["sudo tail -n 100 /var/log/auth.log", "Shows recent authentication events on many Ubuntu/Mint systems.", "Some systems rely more heavily on journald."],
    ],
  },
  {
    title: "Processes",
    items: [
      ["Get-Process", "Lists current Windows processes.", "Process name alone does not establish legitimacy."],
      ["Get-CimInstance Win32_Process | Select ProcessId,ParentProcessId,Name,ExecutablePath,CommandLine", "Shows PID, PPID, path, and command line on Windows.", "Some fields may require elevation."],
      ["ps -eo pid,ppid,user,lstart,cmd --sort=pid", "Shows detailed Linux process context.", "Processes are volatile; capture useful details promptly."],
      ["pstree -ap", "Shows Linux parent-child process relationships.", "Parentage helps explain execution but does not prove intent."],
    ],
  },
  {
    title: "Services & Startup",
    items: [
      ["Get-CimInstance Win32_Service | Select Name,State,StartMode,StartName,PathName", "Shows Windows service state, startup mode, account, and executable path.", "Required services can look unfamiliar."],
      ["Get-CimInstance Win32_StartupCommand", "Shows a broad Windows startup-command inventory.", "It is useful but not exhaustive."],
      ["systemctl --type=service --state=running", "Lists running Linux services.", "Running does not automatically mean required or suspicious."],
      ["systemctl cat <service>", "Shows the effective Linux systemd unit and overrides.", "Drop-in overrides can change behavior from the vendor default."],
    ],
  },
  {
    title: "Scheduled Tasks, Cron & Timers",
    items: [
      ["Get-ScheduledTask", "Lists Windows scheduled tasks.", "Configured does not mean executed."],
      ['Get-ScheduledTaskInfo -TaskName "ExampleTask"', "Shows last and next run details for one task.", "Pair with task action, trigger, and account."],
      ["crontab -l", "Shows the current Linux user's crontab.", "Other users and system cron locations must be checked separately."],
      ["systemctl list-timers --all", "Lists systemd timers and run timing.", "Inspect the associated service unit before changing anything."],
    ],
  },
  {
    title: "Network Connections",
    items: [
      ["Get-NetTCPConnection", "Shows Windows TCP endpoints, states, and owning PIDs.", "Map OwningProcess to the actual process before concluding anything."],
      ["Get-NetTCPConnection -State Listen", "Shows listening Windows TCP sockets.", "Listening does not guarantee remote reachability."],
      ["ss -tulpn", "Shows Linux listening TCP/UDP sockets and processes when permissions allow.", "A port number is a clue, not proof of the service."],
      ["ss -tpn", "Shows active Linux TCP connections with process context.", "Connection presence alone does not establish malicious activity."],
    ],
  },
  {
    title: "Browser & Download Artifacts",
    items: [
      ["Browser history", "Can show visited URLs and timing.", "Visited does not necessarily mean downloaded or executed."],
      ["Download history", "Can show file names, source URLs, paths, and times.", "Downloaded does not mean opened or executed."],
      ["Cache and profile data", "Can add context around browsing activity.", "Cache presence can be automatic and should be interpreted carefully."],
      ["Hash the downloaded file", "Correlates the browser artifact to a specific file on disk.", "File identity still does not prove user intent."],
    ],
  },
  {
    title: "Email & Document Triage",
    items: [
      ["Check sender address", "Compare display name with the actual sending address.", "Display names are easy to imitate."],
      ["Review message headers", "Headers can show routing, authentication, and source clues.", "Headers require context and should not be reduced to one field."],
      ["Check actual file type", "Use file/content identification rather than trusting the extension.", "Extensions can be misleading."],
      ["Record document metadata", "Author, timestamps, title, and application metadata can support correlation.", "Metadata can be modified and should be corroborated."],
    ],
  },
  {
    title: "Archives, Hidden Files & Alternate Storage",
    items: [
      ["List archive contents safely", "Inspect filenames and structure before extracting or opening content.", "Archive presence does not prove malicious intent."],
      ["Check hidden/system attributes", "Windows attributes and Linux dotfiles can reveal intentionally less-visible files.", "Hidden does not mean malicious."],
      ['Get-Item "C:\\Path\\To\\File" -Stream *', "Lists NTFS alternate data streams where supported.", "An alternate stream is not automatically suspicious."],
      ["ls -la <path>", "Shows hidden Linux entries and permissions.", "Interpret ownership, timestamps, and location together."],
    ],
  },
  {
    title: "Timeline Reconstruction",
    items: [
      ["Normalize time zones", "Keep original timestamps and note the time zone before comparing events.", "Do not silently convert times without recording the original."],
      ["Order events", "Sort by time, then label source and evidence type.", "Close timestamps do not always mean direct causation."],
      ["Correlate independent sources", "Use logs, browser data, files, processes, scheduled activity, and network evidence together.", "One source can be incomplete or misleading."],
      ["Mark confidence", "Separate high-confidence facts from reasonable inferences.", "Do not present uncertain interpretation as fact."],
    ],
  },
];

const windowsEventIds = [
  ["4624", "Successful logon"],
  ["4625", "Failed logon"],
  ["4648", "Explicit credentials used"],
  ["4672", "Special privileges assigned"],
  ["4720", "User account created"],
  ["4722", "User account enabled"],
  ["4725", "User account disabled"],
  ["4726", "User account deleted"],
  ["4732", "Member added to local security group"],
  ["4733", "Member removed from local security group"],
  ["7045", "Service installed"],
  ["7036", "Service state changed"],
];

const windowsLogonTypes = [
  ["2", "Interactive"],
  ["3", "Network"],
  ["4", "Batch"],
  ["5", "Service"],
  ["7", "Unlock"],
  ["10", "RemoteInteractive / RDP"],
  ["11", "CachedInteractive"],
];

const timestampGuide = [
  ["Windows CreationTime", "When the current file object was created on that volume."],
  ["Windows LastWriteTime", "When file content was last written."],
  ["Linux mtime", "File content modification time."],
  ["Linux atime", "Last access time when tracked."],
  ["Linux ctime", "Metadata-change time, not creation time."],
  ["Linux birth time", "Creation-like timestamp when supported by filesystem/tools."],
];

const evidenceQuestions = [
  "What exact question am I trying to answer?",
  "Which source is most likely to contain direct evidence?",
  "What should I preserve before touching the system?",
  "Is this a fact, an inference, or only a possibility?",
  "Can another independent source corroborate it?",
  "Are the timestamps in the same time zone?",
  "Does the account, task, service, or process merely exist, or is there evidence it actually ran?",
  "What evidence would contradict my current explanation?",
];

const mistakes = [
  "Answering from one artifact when the question requires correlation.",
  "Treating ctime as Linux file creation time.",
  "Assuming a downloaded file was opened or executed.",
  "Assuming an account with privilege actually used that privilege.",
  "Killing a process before recording path, command line, parent PID, hash, and network state.",
  "Deleting a scheduled task before recording its action, trigger, account, and run history.",
  "Changing timestamps or files before preserving the original evidence.",
  "Presenting an inference as if it were a directly observed fact.",
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

export default function ForensicsQuickReferencePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/command-center"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Command Center
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
              href="/cyberpatriot/command-center/cisco-networking"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Cisco &amp; Networking
            </Link>
            <Link
              href="/cyberpatriot/command-center/ports-protocols-services"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next: Ports, Protocols &amp; Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Command Center &middot; Reference 05
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Forensics Quick Reference
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Fast evidence-first lookup for preservation, hashing, accounts,
                logs, processes, services, scheduled activity, network
                connections, browser artifacts, suspicious files, and timelines.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Start with the question, choose the right source, preserve useful
                evidence, corroborate, and answer only what the evidence supports.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Evidence Rule
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>01</span>
                  <span className="font-bold text-white">Preserve</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>02</span>
                  <span className="font-bold text-white">Observe</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>03</span>
                  <span className="font-bold text-white">Corroborate</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>04</span>
                  <span className="font-bold text-white">Conclude carefully</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Before remediation
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Evidence can disappear when the system changes
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Processes exit, network connections close, files change, logs rotate,
            and scheduled tasks can be deleted. Record the details that matter
            before making defensive changes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"
            >
              <SectionHeading label="Forensics" title={section.title} />

              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {section.items.map(([command, meaning, caution]) => (
                  <div
                    key={command}
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                  >
                    <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm font-semibold leading-7 text-cyan-100">
                      {command}
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {meaning}
                    </p>
                    <div className="mt-4 rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-yellow-200">
                        Caution
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {caution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Windows events"
              title="High-value event IDs"
            />
            <div className="mt-6 grid gap-3">
              {windowsEventIds.map(([id, meaning]) => (
                <div
                  key={id}
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">{id}</span>
                  <span className="text-right text-sm text-slate-300">
                    {meaning}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Windows logons"
              title="Common logon types"
            />
            <div className="mt-6 grid gap-3">
              {windowsLogonTypes.map(([type, meaning]) => (
                <div
                  key={type}
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">{type}</span>
                  <span className="text-right text-sm text-slate-300">
                    {meaning}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Timestamp guide"
            title="Do not treat every timestamp as the same event"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {timestampGuide.map(([name, meaning]) => (
              <div
                key={name}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-cyan-300">{name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Evidence questions
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Ask these before writing your conclusion
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {evidenceQuestions.map((item, index) => (
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
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Common mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Forensics mistakes that weaken the evidence
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {mistakes.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-red-200">
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
              href="/cyberpatriot/command-center"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Command Center
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
              href="/cyberpatriot/command-center/cisco-networking"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Cisco &amp; Networking
            </Link>
            <Link
              href="/cyberpatriot/command-center/ports-protocols-services"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next: Ports, Protocols &amp; Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
