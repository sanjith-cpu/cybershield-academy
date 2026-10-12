import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Accounts & Groups",
    items: [
      {
        command: "Get-LocalUser",
        meaning: "Lists local Windows user accounts.",
        caution: "Account existence does not prove recent use.",
      },
      {
        command: 'Get-LocalGroupMember -Group "Administrators"',
        meaning: "Shows members of the local Administrators group.",
        caution: "Privilege membership is capability, not proof of privileged action.",
      },
      {
        command: "whoami",
        meaning: "Shows the current user context.",
        caution: "Use whoami /groups for token/group context.",
      },
      {
        command: "whoami /groups",
        meaning: "Shows groups and security identifiers in the current token.",
        caution: "Current-token groups are not the same as every local group on the system.",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        command: "Get-Service",
        meaning: "Lists service names, display names, and current state.",
        caution: "A stopped service is not automatically safe, and a running service is not automatically required.",
      },
      {
        command:
          "Get-CimInstance Win32_Service | Select Name,State,StartMode,StartName,PathName",
        meaning: "Shows service state, startup mode, account, and executable path.",
        caution: "Check scenario requirements before disabling anything.",
      },
      {
        command: 'Get-CimInstance Win32_Service -Filter "Name=\'ExampleService\'" | Format-List *',
        meaning: "Shows detailed configuration for one service.",
        caution: "Preserve path, account, state, and start mode before changing it.",
      },
    ],
  },
  {
    title: "Processes",
    items: [
      {
        command: "Get-Process",
        meaning: "Lists currently running processes.",
        caution: "Process name alone does not establish legitimacy.",
      },
      {
        command:
          "Get-CimInstance Win32_Process | Select ProcessId,ParentProcessId,Name,ExecutablePath,CommandLine",
        meaning: "Adds PID, parent PID, executable path, and command line.",
        caution: "Some fields may require elevation or be unavailable for protected processes.",
      },
      {
        command: "Get-Process -Id 1234 | Format-List Id,ProcessName,Path,StartTime",
        meaning: "Shows details for one PID.",
        caution: "PIDs are temporary and can be reused.",
      },
    ],
  },
  {
    title: "Scheduled Tasks",
    items: [
      {
        command: "Get-ScheduledTask",
        meaning: "Lists scheduled tasks and their states.",
        caution: "Task presence does not prove it has run.",
      },
      {
        command: 'Get-ScheduledTaskInfo -TaskName "ExampleTask"',
        meaning: "Shows last and next run information for one task.",
        caution: "Pair with task action, trigger, and process evidence.",
      },
      {
        command:
          'Get-ScheduledTask -TaskName "ExampleTask" | Select-Object -ExpandProperty Actions',
        meaning: "Shows the action configured for the task.",
        caution: "Record executable, arguments, and run-as context before changes.",
      },
    ],
  },
  {
    title: "Firewall",
    items: [
      {
        command: "Get-NetFirewallProfile",
        meaning: "Shows Defender Firewall profile state.",
        caution: "Profile state does not show every individual allow/block rule.",
      },
      {
        command: "Get-NetFirewallRule -Enabled True",
        meaning: "Lists enabled firewall rules.",
        caution: "An allow rule does not prove a service is currently listening.",
      },
      {
        command:
          'Get-NetFirewallRule -DisplayName "Example Rule" | Get-NetFirewallPortFilter',
        meaning: "Shows protocol and port filters for a selected rule.",
        caution: "Check direction, profile, program, and address scope too.",
      },
    ],
  },
  {
    title: "Networking",
    items: [
      {
        command: "ipconfig /all",
        meaning: "Shows IP addresses, gateways, DNS servers, DHCP state, and adapter details.",
        caution: "Check all adapters, including virtual or disconnected ones.",
      },
      {
        command: "Get-NetTCPConnection",
        meaning: "Shows TCP endpoints, connection states, and owning PIDs.",
        caution: "Map OwningProcess to an executable before making conclusions.",
      },
      {
        command: "Get-NetTCPConnection -State Listen",
        meaning: "Shows listening TCP sockets.",
        caution: "Listening does not guarantee remote reachability because firewall rules also matter.",
      },
      {
        command: "netstat -ano",
        meaning: "Classic socket and PID view available on most Windows systems.",
        caution: "Use PID mapping to identify the owning process.",
      },
      {
        command: "route print",
        meaning: "Shows IPv4/IPv6 routing tables.",
        caution: "Use only when troubleshooting reachability or unexpected routes.",
      },
    ],
  },
  {
    title: "Event Logs",
    items: [
      {
        command: "Get-WinEvent -LogName Security -MaxEvents 50",
        meaning: "Shows recent Security log events.",
        caution: "Interpret event IDs with account, logon type, and time context.",
      },
      {
        command: "Get-WinEvent -LogName System -MaxEvents 50",
        meaning: "Shows recent System events such as service and boot activity.",
        caution: "One event rarely explains the entire cause.",
      },
      {
        command: "Get-WinEvent -LogName Application -MaxEvents 50",
        meaning: "Shows recent application events.",
        caution: "Application logs vary widely by installed software.",
      },
      {
        command:
          "Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4624,4625; StartTime=(Get-Date).AddHours(-2)}",
        meaning: "Filters Security events to recent successful/failed logons.",
        caution: "Use the requested time window rather than searching everything blindly.",
      },
    ],
  },
  {
    title: "Files & Hashes",
    items: [
      {
        command:
          'Get-Item "C:\\Path\\To\\File" | Format-List Name,FullName,Length,CreationTime,LastWriteTime,Attributes',
        meaning: "Shows useful file metadata.",
        caution: "CreationTime and LastWriteTime describe different events.",
      },
      {
        command:
          'Get-FileHash "C:\\Path\\To\\File" -Algorithm SHA256',
        meaning: "Calculates a SHA-256 file hash.",
        caution: "A hash identifies content; it does not by itself tell you whether the file is safe.",
      },
      {
        command: 'Get-Acl "C:\\Path\\To\\File"',
        meaning: "Shows ownership and access control information.",
        caution: "Permissions must be interpreted with user/group context.",
      },
      {
        command: 'Get-Item "C:\\Path\\To\\File" -Stream *',
        meaning: "Lists NTFS alternate data streams where supported.",
        caution: "An alternate stream is not automatically malicious.",
      },
    ],
  },
  {
    title: "Startup Locations",
    items: [
      {
        command:
          'Get-ItemProperty "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Run"',
        meaning: "Shows current-user Run startup entries.",
        caution: "Review only; do not delete entries until requirements and source are understood.",
      },
      {
        command:
          'Get-ItemProperty "HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Run"',
        meaning: "Shows machine-wide Run startup entries.",
        caution: "Check executable path, publisher/source, and required software context.",
      },
      {
        command: "Get-CimInstance Win32_StartupCommand",
        meaning: "Provides a broad startup-command inventory.",
        caution: "It is useful but not exhaustive.",
      },
    ],
  },
  {
    title: "Windows Update & Defender",
    items: [
      {
        command: "Get-MpComputerStatus",
        meaning: "Shows Microsoft Defender status and protection state.",
        caution: "A healthy status does not prove every file or process is benign.",
      },
      {
        command: "Get-MpThreatDetection",
        meaning: "Shows Defender threat-detection records where available.",
        caution: "Detection history is one evidence source, not a complete timeline.",
      },
      {
        command: "Get-HotFix | Sort-Object InstalledOn -Descending",
        meaning: "Lists installed hotfixes and update history visible to this command.",
        caution: "Not every modern update appears exactly the same way in Get-HotFix.",
      },
    ],
  },
  {
    title: "Remote Access",
    items: [
      {
        command:
          'Get-ItemProperty "HKLM:\\System\\CurrentControlSet\\Control\\Terminal Server" -Name fDenyTSConnections',
        meaning: "Shows whether Remote Desktop connections are denied by this setting.",
        caution: "Firewall and service state also affect RDP reachability.",
      },
      {
        command: "Get-Service TermService",
        meaning: "Shows Remote Desktop Services state.",
        caution: "Do not disable required remote access without checking the scenario.",
      },
      {
        command:
          "Get-NetTCPConnection -LocalPort 3389 -ErrorAction SilentlyContinue",
        meaning: "Checks whether TCP 3389 has an active/listening endpoint.",
        caution: "Port number alone does not prove which service owns it; map the PID.",
      },
    ],
  },
];

const eventIds = [
  { id: "4624", meaning: "Successful logon" },
  { id: "4625", meaning: "Failed logon" },
  { id: "4648", meaning: "Explicit credentials used" },
  { id: "4672", meaning: "Special privileges assigned to new logon" },
  { id: "4720", meaning: "User account created" },
  { id: "4722", meaning: "User account enabled" },
  { id: "4725", meaning: "User account disabled" },
  { id: "4726", meaning: "User account deleted" },
  { id: "4732", meaning: "Member added to local security-enabled group" },
  { id: "4733", meaning: "Member removed from local security-enabled group" },
  { id: "7045", meaning: "Service installed" },
  { id: "7036", meaning: "Service state changed" },
];

const logonTypes = [
  { type: "2", meaning: "Interactive" },
  { type: "3", meaning: "Network" },
  { type: "4", meaning: "Batch" },
  { type: "5", meaning: "Service" },
  { type: "7", meaning: "Unlock" },
  { type: "10", meaning: "RemoteInteractive / RDP" },
  { type: "11", meaning: "CachedInteractive" },
];

const paths = [
  {
    path: "C:\\Users\\<user>\\Downloads",
    use: "Common user download location.",
  },
  {
    path: "C:\\Users\\<user>\\AppData\\Local",
    use: "Per-user local application data, cache, and sometimes executables.",
  },
  {
    path: "C:\\Users\\<user>\\AppData\\Roaming",
    use: "Per-user roaming application data and settings.",
  },
  {
    path: "C:\\ProgramData",
    use: "Shared application data and service-related files.",
  },
  {
    path: "C:\\Windows\\Temp",
    use: "System temporary storage.",
  },
  {
    path: "%APPDATA%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup",
    use: "Current-user Startup folder.",
  },
  {
    path: "%ProgramData%\\Microsoft\\Windows\\Start Menu\\Programs\\StartUp",
    use: "Machine-wide Startup folder.",
  },
];

const decisionChecks = [
  "Is this item required by the scenario?",
  "What account owns or runs it?",
  "What is the full executable or file path?",
  "Is there a service, task, startup entry, or parent process that explains it?",
  "Is there matching log or network evidence?",
  "Do I need to preserve a hash, PID, command line, event ID, or timestamp before changing it?",
  "What is the smallest justified defensive change?",
  "How will I verify that the system still works afterward?",
];

const mistakes = [
  "Disabling an unfamiliar service before checking whether it is required.",
  "Treating Administrator membership as proof that the account performed a privileged action.",
  "Deleting a scheduled task before recording its action, trigger, and run-as account.",
  "Killing a process before recording path, command line, parent PID, hash, and network state.",
  "Assuming a listening port means the host is remotely reachable.",
  "Assuming a Defender no-detection result proves a file is safe.",
  "Trusting filenames or extensions without checking the actual file and path context.",
  "Making several changes at once and losing track of which change fixed or broke something.",
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

export default function Windows11QuickReferencePage() {
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

          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-slate-800 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-400">
              Windows 11 Quick Reference
            </div>
            <Link
              href="/cyberpatriot/command-center/windows-server"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next: Windows Server &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Command Center Â· Reference 01
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows 11 Quick Reference
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Fast lookup for high-value Windows 11 checks: accounts, groups,
                services, processes, scheduled tasks, firewall, networking,
                event logs, files, startup, Defender, updates, and remote access.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Use this page to remember the right command and what its output
                means. Inspect first, preserve useful evidence, then make the
                smallest justified change.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Reference Rule
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Step 1</span>
                  <span className="font-bold text-white">Inspect</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Step 2</span>
                  <span className="font-bold text-white">Compare</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Step 3</span>
                  <span className="font-bold text-white">Change carefully</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Step 4</span>
                  <span className="font-bold text-white">Verify</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Before using a command
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Check the scenario before changing Windows
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Required accounts, services, remote-access settings, roles, and
            applications can look unusual. This page favors read-only inspection
            so you can understand the current state before remediation.
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
              <SectionHeading label="Windows 11" title={section.title} />

              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {section.items.map((item) => (
                  <div
                    key={item.command}
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                  >
                    <pre className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.command}
                    </pre>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
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
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Event IDs"
              title="High-value Windows event awareness"
            />
            <div className="mt-6 grid gap-3">
              {eventIds.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">{item.id}</span>
                  <span className="text-right text-sm text-slate-300">
                    {item.meaning}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Logon types"
              title="Interpret Event 4624 correctly"
            />
            <div className="mt-6 grid gap-3">
              {logonTypes.map((item) => (
                <div
                  key={item.type}
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">{item.type}</span>
                  <span className="text-right text-sm text-slate-300">
                    {item.meaning}
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
            label="Useful paths"
            title="Common Windows locations worth recognizing"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {paths.map((item) => (
              <div
                key={item.path}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-sm font-bold text-cyan-300">
                  {item.path}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.use}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision check
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Ask these before changing anything important
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {decisionChecks.map((item, index) => (
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
            Windows mistakes that waste time or destroy evidence
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

          <Link
            href="/cyberpatriot/command-center/windows-server"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Next: Windows Server &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
