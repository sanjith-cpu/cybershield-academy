import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how running processes, services, startup mechanisms, and executable paths support forensic reasoning.",
  "Distinguish process identity from filename, display name, service name, and user account.",
  "Recognize evidence that connects a running process to a service, startup item, scheduled mechanism, or user session.",
  "Use Windows and Linux tools to inspect process ownership, executable paths, parent relationships, service state, and startup configuration.",
  "Preserve relevant process and service evidence before stopping, disabling, or deleting anything.",
  "Correlate process and service evidence with logs, files, accounts, scheduled tasks, and network activity.",
];

const processPrinciples = [
  {
    title: "A name is not an identity",
    text:
      "Two different executables can share the same process name, and legitimate software can be copied or renamed. Path, hash, owner, and parent context matter.",
  },
  {
    title: "Processes are temporary",
    text:
      "A running process can disappear quickly. Record PID, path, account, parent, command line, start time, and network state before stopping it.",
  },
  {
    title: "Services add persistence and privilege context",
    text:
      "A service can start automatically, run under a specific account, and launch an executable without an interactive user.",
  },
  {
    title: "Startup location changes meaning",
    text:
      "A program started from Program Files or /usr may be expected, while a similar binary in AppData, Temp, /tmp, or a user autostart folder may require more review.",
  },
  {
    title: "Parent-child relationships help explain sequence",
    text:
      "The parent process can show whether a program was launched by a shell, service manager, scheduled task, browser, script host, or another application.",
  },
  {
    title: "Preserve before hardening",
    text:
      "Stopping a process or disabling a service can erase current-state evidence and create new log entries that complicate the timeline.",
  },
];

const processEvidenceFields = [
  {
    field: "Process name",
    why:
      "Useful label, but not enough to identify the executable.",
  },
  {
    field: "PID",
    why:
      "Identifies the process instance at that moment.",
  },
  {
    field: "Executable path",
    why:
      "Connects the process to a specific file and location.",
  },
  {
    field: "Command line",
    why:
      "Can reveal arguments, scripts, configuration files, or launched targets.",
  },
  {
    field: "User / account",
    why:
      "Shows which security context the process is running under.",
  },
  {
    field: "Parent process",
    why:
      "Adds launch context and can explain how the process started.",
  },
  {
    field: "Start time",
    why:
      "Places the process in the timeline.",
  },
  {
    field: "Hash",
    why:
      "Provides strong content identity for the executable file.",
  },
  {
    field: "Network activity",
    why:
      "Connects the process to listening ports or remote connections.",
  },
];

const serviceEvidenceFields = [
  {
    field: "Service name",
    why:
      "Stable identifier used by the operating system.",
  },
  {
    field: "Display name",
    why:
      "Human-readable label that can differ from the service name.",
  },
  {
    field: "Executable / unit command",
    why:
      "Shows what program or script actually starts.",
  },
  {
    field: "Startup type",
    why:
      "Shows whether the service starts automatically, manually, or is disabled.",
  },
  {
    field: "Run-as account",
    why:
      "Explains privilege and security context.",
  },
  {
    field: "Current state",
    why:
      "Running, stopped, failed, inactive, or another state.",
  },
  {
    field: "Dependencies",
    why:
      "Helps explain why a service starts, stops, or fails.",
  },
  {
    field: "Related logs",
    why:
      "Supports installation, startup, stop, restart, or failure timing.",
  },
];

const windowsProcessCommands = [
  {
    label: "List processes",
    command: `Get-Process`,
    purpose:
      "Shows running Windows processes and their PIDs.",
  },
  {
    label: "Process details",
    command: `Get-Process -Id 1234 | Format-List *`,
    purpose:
      "Shows detailed properties for one process instance when permissions allow.",
  },
  {
    label: "Executable path and command line",
    command: `Get-CimInstance Win32_Process |
  Select-Object ProcessId, ParentProcessId, Name, ExecutablePath, CommandLine`,
    purpose:
      "Provides process identity, parent PID, path, and command line.",
  },
  {
    label: "Current process owner",
    command: `Get-CimInstance Win32_Process -Filter "ProcessId=1234" |
  Invoke-CimMethod -MethodName GetOwner`,
    purpose:
      "Returns the user context for a selected process.",
  },
  {
    label: "Hash the executable",
    command: `Get-FileHash "C:\\ProgramData\\Example\\helper.exe" -Algorithm SHA256`,
    purpose:
      "Adds strong content identity for the executable file.",
  },
];

const windowsServiceCommands = [
  {
    label: "List services",
    command: `Get-Service`,
    purpose:
      "Shows service names, display names, and current state.",
  },
  {
    label: "Detailed service configuration",
    command: `Get-CimInstance Win32_Service |
  Select-Object Name, DisplayName, State, StartMode, StartName, PathName`,
    purpose:
      "Shows state, startup mode, account, and executable path.",
  },
  {
    label: "Inspect one service",
    command: `Get-CimInstance Win32_Service -Filter "Name='ExampleService'" | Format-List *`,
    purpose:
      "Shows detailed configuration for one service.",
  },
  {
    label: "Classic service configuration",
    command: `sc.exe qc ExampleService`,
    purpose:
      "Displays service type, start mode, account, and binary path.",
  },
  {
    label: "Classic service status",
    command: `sc.exe query ExampleService`,
    purpose:
      "Shows current service state.",
  },
];

const windowsStartupSources = [
  {
    source: "Startup folders",
    value:
      "Per-user and all-users startup shortcuts and files.",
    evidence:
      "Target path, arguments, user scope, timestamps, and linked executable.",
  },
  {
    source: "Run / RunOnce registry locations",
    value:
      "Common Windows auto-start configuration points.",
    evidence:
      "Value name, command, path, user/system scope, and related file metadata.",
  },
  {
    source: "Scheduled Tasks",
    value:
      "Can trigger at logon, startup, time intervals, or events.",
    evidence:
      "Task name, trigger, action, arguments, run-as account, enabled state, and history.",
  },
  {
    source: "Services",
    value:
      "Can launch at boot and run without user interaction.",
    evidence:
      "Service name, binary path, account, start mode, state, and installation/start logs.",
  },
  {
    source: "Shell extensions and application startup",
    value:
      "Some applications configure their own login-time or startup behavior.",
    evidence:
      "Application configuration, startup path, user profile context, and process evidence.",
  },
];

const linuxProcessCommands = [
  {
    label: "Process snapshot",
    command: `ps aux`,
    purpose:
      "Shows users, PIDs, resource use, and command information.",
  },
  {
    label: "Custom process view",
    command: `ps -eo pid,ppid,user,lstart,cmd`,
    purpose:
      "Shows PID, parent PID, user, start time, and full command.",
  },
  {
    label: "Process tree",
    command: `pstree -ap`,
    purpose:
      "Displays parent-child process relationships with PIDs and arguments where available.",
  },
  {
    label: "Executable path",
    command: `readlink -f /proc/1234/exe`,
    purpose:
      "Resolves the executable used by a running process.",
  },
  {
    label: "Command line",
    command: `tr '\0' ' ' < /proc/1234/cmdline`,
    purpose:
      "Reads the command line for a selected process.",
  },
  {
    label: "Process owner",
    command: `ps -o user= -p 1234`,
    purpose:
      "Shows the user account associated with one process.",
  },
];

const linuxServiceCommands = [
  {
    label: "Running services",
    command: `systemctl --type=service --state=running`,
    purpose:
      "Lists currently running systemd services.",
  },
  {
    label: "Service status",
    command: `systemctl status ssh`,
    purpose:
      "Shows current state, recent logs, main PID, and unit information for a service.",
  },
  {
    label: "Unit definition",
    command: `systemctl cat ssh`,
    purpose:
      "Displays the unit file and drop-in configuration used by systemd.",
  },
  {
    label: "Enablement state",
    command: `systemctl is-enabled ssh`,
    purpose:
      "Shows whether the service is configured to start automatically.",
  },
  {
    label: "Service properties",
    command: `systemctl show ssh -p FragmentPath -p User -p ExecStart -p MainPID -p ActiveState`,
    purpose:
      "Shows useful forensic properties in a compact form.",
  },
];

const linuxStartupSources = [
  {
    source: "systemd system units",
    value:
      "/etc/systemd/system and vendor-managed unit locations.",
    evidence:
      "Unit file, ExecStart, User, enablement, timestamps, package source, and journal records.",
  },
  {
    source: "systemd user units",
    value:
      "~/.config/systemd/user",
    evidence:
      "Per-user service and timer definitions.",
  },
  {
    source: "Cron",
    value:
      "User crontabs, /etc/crontab, and /etc/cron.* directories.",
    evidence:
      "Schedule, command, user, file timestamps, ownership, and execution logs.",
  },
  {
    source: "Desktop autostart",
    value:
      "~/.config/autostart and system-wide autostart locations.",
    evidence:
      "Desktop entry, Exec command, user scope, timestamps, and launched process.",
  },
  {
    source: "Shell startup files",
    value:
      "~/.profile, ~/.bashrc, ~/.bash_profile, and related files.",
    evidence:
      "Commands that may run during login or shell startup depending on shell behavior.",
  },
];

const processReasoning = [
  {
    evidence:
      "Process name is chrome.exe",
    supported:
      "A process with that name is running.",
    notSupported:
      "It is definitely the legitimate browser binary.",
  },
  {
    evidence:
      "Executable path is C:\\Program Files\\Vendor\\app.exe",
    supported:
      "That process instance points to the executable at that path.",
    notSupported:
      "The executable is trustworthy solely because it is under Program Files.",
  },
  {
    evidence:
      "Process runs as SYSTEM",
    supported:
      "The process has a highly privileged Windows security context.",
    notSupported:
      "The process is malicious or unauthorized.",
  },
  {
    evidence:
      "Linux process runs as root",
    supported:
      "The process has root privileges.",
    notSupported:
      "The process was started by a human administrator.",
  },
  {
    evidence:
      "Parent process is powershell.exe",
    supported:
      "The selected process was launched by a PowerShell process.",
    notSupported:
      "The launch was malicious.",
  },
  {
    evidence:
      "Process owns a listening port",
    supported:
      "That process is bound to the port at the time of observation.",
    notSupported:
      "The service is unauthorized without scenario and application context.",
  },
];

const serviceReasoning = [
  {
    evidence:
      "Automatic service points to C:\\Users\\student\\AppData\\Local\\helper.exe",
    supported:
      "The service will attempt to launch a user-profile executable automatically.",
    next:
      "Preserve service configuration, file hash, account, install event, process state, and scenario context.",
  },
  {
    evidence:
      "Linux systemd service ExecStart points to /opt/vendor/bin/agent",
    supported:
      "The service manager launches that executable when the unit starts.",
    next:
      "Check package/source context, unit file ownership, enablement, logs, process, and required functionality.",
  },
  {
    evidence:
      "Service is disabled but running",
    supported:
      "The current process exists even though future automatic startup may be disabled.",
    next:
      "Separate current state from startup policy.",
  },
  {
    evidence:
      "Service is enabled but inactive",
    supported:
      "It is configured for startup conditions but is not currently running.",
    next:
      "Check triggers, failure logs, dependencies, and whether it is required.",
  },
  {
    evidence:
      "Service runs under a dedicated low-privilege account",
    supported:
      "The software uses an isolated service identity.",
    next:
      "Do not remove the account before confirming the service requirement.",
  },
  {
    evidence:
      "Service installed minutes after a package install",
    supported:
      "The package may have created the service.",
    next:
      "Correlate package logs, unit/service file creation, and installation source.",
  },
];

const parentChildExamples = [
  {
    parent:
      "explorer.exe",
    child:
      "document-viewer.exe",
    meaning:
      "Could reflect a user launching an application from the desktop shell.",
  },
  {
    parent:
      "taskeng.exe / Task Scheduler",
    child:
      "script-host process",
    meaning:
      "Could reflect scheduled execution.",
  },
  {
    parent:
      "services.exe",
    child:
      "service executable",
    meaning:
      "Consistent with Windows Service Control Manager launching a service process.",
  },
  {
    parent:
      "systemd",
    child:
      "daemon process",
    meaning:
      "Consistent with systemd starting a service.",
  },
  {
    parent:
      "bash",
    child:
      "python script",
    meaning:
      "Could reflect an interactive or scripted shell launch.",
  },
  {
    parent:
      "browser process",
    child:
      "download helper / viewer",
    meaning:
      "Could reflect browser-triggered application activity.",
  },
];

const startupQuestions = [
  {
    question:
      "Why does this program run after reboot?",
    evidence:
      "Service start mode, scheduled task trigger, Run key, startup folder, systemd enablement, cron, or autostart configuration.",
  },
  {
    question:
      "Which user context launches it?",
    evidence:
      "Service account, task run-as user, process owner, unit User= directive, or user startup location.",
  },
  {
    question:
      "What executable actually runs?",
    evidence:
      "Service PathName, task action, ExecStart, startup shortcut target, or registry value.",
  },
  {
    question:
      "When was startup configured?",
    evidence:
      "Service/task logs, file timestamps, registry change context, package logs, or unit metadata.",
  },
  {
    question:
      "Did it run successfully?",
    evidence:
      "Process state, service state, task history, journal, Event Viewer, exit status, and application logs.",
  },
  {
    question:
      "Is it required?",
    evidence:
      "Scenario requirements, application dependencies, business purpose, and service documentation.",
  },
];

const preserveBeforeAction = [
  {
    target: "Running process",
    record:
      "PID, name, executable path, command line, user, parent PID, start time, hash, open files where relevant, and network connections.",
  },
  {
    target: "Windows service",
    record:
      "Service name, display name, state, startup type, run-as account, binary path, dependencies, install/start events, and file hash.",
  },
  {
    target: "Linux service",
    record:
      "Unit name, state, enablement, ExecStart, User, FragmentPath, main PID, journal records, file metadata, and package/source context.",
  },
  {
    target: "Startup entry",
    record:
      "Location, value or shortcut target, arguments, user scope, timestamps, ownership, hash, and linked process evidence.",
  },
  {
    target: "Scheduled mechanism",
    record:
      "Task or cron/timer name, trigger, command, user, enabled state, timestamps, execution logs, and related process.",
  },
];

const processNetworkCorrelation = [
  {
    evidence:
      "PID 4312 owns TCP port 8080",
    conclusion:
      "Process 4312 is listening on TCP port 8080 at the time of observation.",
  },
  {
    evidence:
      "PID 4312 path is C:\\ProgramData\\Demo\\server.exe",
    conclusion:
      "The listener maps to that executable path.",
  },
  {
    evidence:
      "Service DemoServer has PathName pointing to the same executable",
    conclusion:
      "The service and network listener likely belong to the same running component.",
  },
  {
    evidence:
      "System event shows DemoServer started at 10:02",
    conclusion:
      "The service-start event supports the process timeline.",
  },
  {
    evidence:
      "File hash is recorded before service disablement",
    conclusion:
      "The executable content can still be identified after the process is stopped.",
  },
];

const windowsNetworkCommands = [
  {
    label: "Connections with PID",
    command: `Get-NetTCPConnection | Select-Object LocalAddress,LocalPort,RemoteAddress,RemotePort,State,OwningProcess`,
    purpose:
      "Maps TCP connections and listeners to process IDs.",
  },
  {
    label: "Resolve PID",
    command: `Get-Process -Id 4312`,
    purpose:
      "Maps a selected PID to a process name.",
  },
];

const linuxNetworkCommands = [
  {
    label: "Listeners and processes",
    command: `sudo ss -lntup`,
    purpose:
      "Shows listening TCP/UDP sockets and process information where permissions allow.",
  },
  {
    label: "Active connections",
    command: `sudo ss -ntup`,
    purpose:
      "Shows current TCP connections and associated processes where available.",
  },
];

const logCorrelationCases = [
  {
    records:
      "7045 service install at 09:10 + 7036 running at 09:11 + process start at 09:11",
    supported:
      "The installed service likely launched the observed process.",
  },
  {
    records:
      "systemd unit enabled at 10:00 + journal shows start at 10:01 + daemon PID exists",
    supported:
      "The service was configured for startup and then entered a running state.",
  },
  {
    records:
      "Task trigger at 11:30 + PowerShell parent + child executable at 11:30",
    supported:
      "The scheduled task may explain the process launch chain.",
  },
  {
    records:
      "Cron record at 12:00 + shell script process + outbound connection at 12:00",
    supported:
      "The scheduled Linux job may explain the process and network activity.",
  },
  {
    records:
      "RDP session at 13:05 + explorer parent + user application at 13:07",
    supported:
      "The process started during the remote interactive user session.",
  },
  {
    records:
      "Package install at 14:10 + service unit appears + daemon starts at 14:12",
    supported:
      "The package installation likely introduced and started the service.",
  },
];

const fictionalTimeline = [
  {
    time: "10:02",
    source: "Windows System",
    detail:
      "Service DemoSync is installed with binary C:\\ProgramData\\DemoSync\\sync.exe.",
  },
  {
    time: "10:03",
    source: "Windows System",
    detail:
      "DemoSync enters the running state under LocalSystem.",
  },
  {
    time: "10:03",
    source: "Process Evidence",
    detail:
      "sync.exe is running as PID 4312 with parent services.exe.",
  },
  {
    time: "10:04",
    source: "Network Evidence",
    detail:
      "PID 4312 listens on fictional lab port TCP 8088.",
  },
  {
    time: "10:06",
    source: "Filesystem",
    detail:
      "sync.exe SHA-256 and file metadata are recorded before any defensive change.",
  },
  {
    time: "10:08",
    source: "Change Log",
    detail:
      "Team disables and stops DemoSync after confirming it is not required by the fictional scenario.",
  },
];

const labQuestions = [
  {
    question:
      "Which evidence most directly identifies the executable path?",
    answer:
      "The service-install record and service configuration showing C:\\ProgramData\\DemoSync\\sync.exe.",
  },
  {
    question:
      "What connects the running process to the service?",
    answer:
      "The matching executable name/path, parent services.exe, service state, and aligned start time.",
  },
  {
    question:
      "What does the network evidence establish?",
    answer:
      "PID 4312 was listening on TCP port 8088 at the time of observation.",
  },
  {
    question:
      "Why record the hash before stopping the service?",
    answer:
      "The hash preserves exact executable-content identity after the process is no longer running.",
  },
  {
    question:
      "Does LocalSystem execution prove the service is malicious?",
    answer:
      "No. It establishes a highly privileged service context, but legitimacy depends on scenario, source, software purpose, and corroborating evidence.",
  },
  {
    question:
      "Why keep the change-log entry at 10:08?",
    answer:
      "It separates the team's defensive action from the original system state and prevents later timeline confusion.",
  },
];

const mistakes = [
  {
    title: "Stopping the process first",
    text:
      "You can lose PID, command line, parent, network, and current-state evidence.",
  },
  {
    title: "Trusting process names",
    text:
      "Names can be duplicated or misleading. Verify executable path and hash.",
  },
  {
    title: "Ignoring the run-as account",
    text:
      "User, SYSTEM, root, and dedicated service accounts have very different privilege implications.",
  },
  {
    title: "Ignoring parent process",
    text:
      "Parent-child relationships can explain whether a process came from a shell, service, task, browser, or automation mechanism.",
  },
  {
    title: "Confusing enabled with running",
    text:
      "Startup policy and current state are different facts.",
  },
  {
    title: "Removing a service before checking dependencies",
    text:
      "Required applications can break if the service supports an expected function.",
  },
  {
    title: "Assuming root or SYSTEM means malicious",
    text:
      "Many legitimate system services require high privilege.",
  },
  {
    title: "Ignoring your own defensive changes",
    text:
      "Stopping or disabling services creates new logs and state changes that must be documented.",
  },
];

const reviewChecklist = [
  "I record process name, PID, path, user, parent, command line, and start time.",
  "I use hashes when executable identity matters.",
  "I record service name, start mode, account, path, state, and related logs.",
  "I distinguish startup configuration from current running state.",
  "I check parent-child relationships before concluding how a process started.",
  "I correlate processes with network connections when relevant.",
  "I inspect scheduled tasks, cron, systemd timers, startup folders, and autostart only when the question points there.",
  "I preserve evidence before stopping or disabling anything.",
  "I confirm required functionality before removing services or startup items.",
  "I keep a change log for my own defensive actions.",
  "I do not treat SYSTEM or root context as proof of maliciousness.",
  "I correlate process and service evidence with files, logs, accounts, and scenario requirements.",
];

const reflection = [
  "Why is executable path stronger evidence than process name alone?",
  "What can a parent process tell you about how a program started?",
  "Why does a running service differ from an enabled service?",
  "What evidence should you preserve before stopping a suspicious process?",
  "Why can a process running as SYSTEM or root still be legitimate?",
  "How would you connect a listening network port to a specific service?",
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

export default function ProcessesServicesStartupEvidencePage() {
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
              href="/cyberpatriot/forensics/user-accounts-authentication-evidence"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/scheduled-tasks-cron-persistence-clues"
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
                Forensics · Lesson 10
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Processes, Services &amp; Startup Evidence
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how running processes, service configuration, startup
                mechanisms, parent-child relationships, executable paths, user
                context, and network activity work together to explain what is
                running and how it started.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Current-state evidence can disappear as soon as you stop a
                process or service. Preserve the process identity, service
                configuration, startup source, and related logs before making
                defensive changes.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main evidence</span>
                  <span className="font-bold text-white">Process + service state</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Strong identifier</span>
                  <span className="font-bold text-white">Path + hash</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Launch clue</span>
                  <span className="font-bold text-white">Parent / startup source</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Explain execution</span>
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
            title="Connect running state to launch mechanism and evidence"
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
                <p className="text-sm leading-6 text-slate-300">{objective}</p>
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
              A running process is only one moment in a larger chain
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              To explain a process, connect its executable, account, parent,
              start time, service or startup source, logs, and network activity.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
              Competition caution
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Do not kill the evidence before recording it
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Stopping a process or service can erase current state. Record the
              PID, path, command line, user, parent, service configuration,
              startup mechanism, and related network evidence first.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Process principles"
            title="Use identity and context, not names alone"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {processPrinciples.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
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
              label="Process evidence"
              title="Fields worth preserving"
            />
            <div className="mt-6 grid gap-4">
              {processEvidenceFields.map((item) => (
                <div
                  key={item.field}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.field}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.why}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Service evidence"
              title="Fields worth preserving"
            />
            <div className="mt-6 grid gap-4">
              {serviceEvidenceFields.map((item) => (
                <div
                  key={item.field}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.field}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.why}
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
              label="Windows processes"
              title="Inspect running state safely"
            />
            <div className="mt-6 grid gap-4">
              {windowsProcessCommands.map((item) => (
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
              label="Windows services"
              title="Inspect service configuration"
            />
            <div className="mt-6 grid gap-4">
              {windowsServiceCommands.map((item) => (
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
            label="Windows startup"
            title="Common automatic-start evidence sources"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {windowsStartupSources.map((item) => (
              <div
                key={item.source}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.source}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.value}
                </p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Preserve
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.evidence}
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
              label="Linux processes"
              title="Inspect process identity and ancestry"
            />
            <div className="mt-6 grid gap-4">
              {linuxProcessCommands.map((item) => (
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
              label="Linux services"
              title="Inspect systemd units"
            />
            <div className="mt-6 grid gap-4">
              {linuxServiceCommands.map((item) => (
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
            label="Linux startup"
            title="Common automatic and scheduled execution sources"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {linuxStartupSources.map((item) => (
              <div
                key={item.source}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.source}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.value}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Preserve
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.evidence}
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
            label="Process reasoning"
            title="Separate observation from conclusion"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {processReasoning.map((item) => (
              <div
                key={item.evidence}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.evidence}</h3>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Supported
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.supported}
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-red-200">
                    Not supported
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.notSupported}
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
            label="Service reasoning"
            title="Use service configuration to explain persistence and privilege"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceReasoning.map((item) => (
              <div
                key={item.evidence}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.evidence}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.supported}
                </p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Next evidence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.next}
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
            label="Parent-child relationships"
            title="Understand launch context"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {parentChildExamples.map((item) => (
              <div
                key={`${item.parent}-${item.child}`}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                  Parent
                </p>
                <p className="mt-2 font-bold text-white">{item.parent}</p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                  Child
                </p>
                <p className="mt-2 font-bold text-white">{item.child}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Startup questions"
            title="Use the right evidence for the right persistence question"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {startupQuestions.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.evidence}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Preserve before action
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Capture the state that stopping or disabling could erase
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {preserveBeforeAction.map((item) => (
              <div
                key={item.target}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.target}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.record}
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
              label="Windows networking"
              title="Map sockets to processes"
            />
            <div className="mt-6 grid gap-4">
              {windowsNetworkCommands.map((item) => (
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
              label="Linux networking"
              title="Map sockets to processes"
            />
            <div className="mt-6 grid gap-4">
              {linuxNetworkCommands.map((item) => (
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
            label="Process-network correlation"
            title="Build the connection from port to executable to service"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {processNetworkCorrelation.map((item) => (
              <div
                key={item.evidence}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="font-bold text-cyan-200">{item.evidence}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Log correlation"
            title="Connect process state with launch events"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {logCorrelationCases.map((item) => (
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
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Common mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Process and service mistakes that destroy useful evidence
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
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
            Fictional process &amp; service lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Reconstruct a service from installation to network activity
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fictionalTimeline.map((item) => (
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
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.detail}
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
                <h3 className="mt-3 font-black text-white">{item.question}</h3>
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
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Check your process and service reasoning
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
                Record the process before it disappears, identify the actual
                executable and account, connect it to its launch mechanism,
                correlate with logs and network state, and only then make
                defensive changes.
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
              href="/cyberpatriot/forensics/user-accounts-authentication-evidence"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/scheduled-tasks-cron-persistence-clues"
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
