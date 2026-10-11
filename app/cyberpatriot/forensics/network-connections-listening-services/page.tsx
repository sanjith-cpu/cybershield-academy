import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain the difference between listening sockets, established connections, and remote endpoints.",
  "Map network activity to the process and account responsible for it.",
  "Recognize common Windows and Linux tools for reviewing local ports and connections without changing system state.",
  "Distinguish expected services from unexpected exposure using scenario context, service configuration, and process evidence.",
  "Correlate network connections with processes, services, logs, scheduled activity, and executable paths.",
  "Preserve network-state evidence before stopping services, killing processes, or changing firewall rules.",
];

const networkPrinciples = [
  {
    title: "A port is only one clue",
    text:
      "A port number does not prove which application is using it or whether the activity is legitimate. Map the socket to a process, executable, account, and service.",
  },
  {
    title: "Listening is different from connected",
    text:
      "A listening socket waits for incoming traffic. An established connection shows active communication with a remote endpoint.",
  },
  {
    title: "Local and remote addresses matter",
    text:
      "The local bind address shows where a service is exposed. The remote address identifies the peer for established connections.",
  },
  {
    title: "Process ownership matters",
    text:
      "Network activity becomes more meaningful when you know the PID, executable path, command line, user, and parent process.",
  },
  {
    title: "Expected services can still be misconfigured",
    text:
      "A required service may still be listening on an unnecessary interface or port.",
  },
  {
    title: "Preserve before hardening",
    text:
      "Stopping a service or changing a firewall rule can erase the current state that explains what was listening or connected.",
  },
];

const socketStates = [
  {
    state: "LISTEN / Listening",
    meaning:
      "A local process is waiting for inbound connection attempts.",
    forensicValue:
      "Useful for identifying exposed services and mapping ports to processes.",
  },
  {
    state: "ESTABLISHED",
    meaning:
      "A connection is currently active between the local system and a remote endpoint.",
    forensicValue:
      "Useful for connecting process activity to remote systems.",
  },
  {
    state: "TIME_WAIT",
    meaning:
      "The local stack is temporarily retaining a recently closed TCP connection.",
    forensicValue:
      "Can show recent communication but not an active session.",
  },
  {
    state: "CLOSE_WAIT",
    meaning:
      "The remote side closed the connection, but the local application has not fully closed it yet.",
    forensicValue:
      "May help explain application or service behavior.",
  },
  {
    state: "SYN_SENT / SYN_RECV",
    meaning:
      "A TCP connection is being established.",
    forensicValue:
      "Shows connection setup activity but not a fully established session.",
  },
];

const addressConcepts = [
  {
    item: "127.0.0.1 / ::1",
    meaning:
      "Loopback only. The service is reachable from the local machine but not directly from other hosts.",
  },
  {
    item: "0.0.0.0",
    meaning:
      "IPv4 wildcard bind. The service may listen on all available IPv4 interfaces.",
  },
  {
    item: "::",
    meaning:
      "IPv6 wildcard bind. Depending on platform and configuration, this can expose the service broadly.",
  },
  {
    item: "Specific local IP",
    meaning:
      "The service is bound only to a selected interface/address.",
  },
  {
    item: "Remote IP",
    meaning:
      "For an established connection, identifies the remote peer.",
  },
  {
    item: "Remote port",
    meaning:
      "Shows the service port used on the remote side of the connection.",
  },
];

const windowsCommands = [
  {
    label: "List TCP connections",
    command: `Get-NetTCPConnection`,
    purpose:
      "Shows local/remote addresses, ports, connection states, and owning process IDs.",
  },
  {
    label: "Show listeners only",
    command: `Get-NetTCPConnection -State Listen`,
    purpose:
      "Filters to listening TCP sockets.",
  },
  {
    label: "Compact network view",
    command: `Get-NetTCPConnection |
  Select-Object LocalAddress,LocalPort,RemoteAddress,RemotePort,State,OwningProcess`,
    purpose:
      "Displays the most useful network-state fields.",
  },
  {
    label: "Map PID to process",
    command: `Get-Process -Id 4312`,
    purpose:
      "Maps an owning process ID to a process name.",
  },
  {
    label: "Process path and command line",
    command: `Get-CimInstance Win32_Process -Filter "ProcessId=4312" |
  Select-Object ProcessId,ParentProcessId,ExecutablePath,CommandLine`,
    purpose:
      "Adds executable path, parent process, and command-line context.",
  },
  {
    label: "Classic view",
    command: `netstat -ano`,
    purpose:
      "Shows TCP/UDP endpoints, states, and PIDs using a widely available Windows command.",
  },
];

const linuxCommands = [
  {
    label: "Listening sockets with processes",
    command: `sudo ss -lntup`,
    purpose:
      "Shows listening TCP/UDP sockets and process information where permissions allow.",
  },
  {
    label: "Active TCP connections",
    command: `sudo ss -ntup`,
    purpose:
      "Shows active TCP connections and associated processes.",
  },
  {
    label: "All sockets",
    command: `sudo ss -auntp`,
    purpose:
      "Shows listening and connected TCP/UDP sockets with process context.",
  },
  {
    label: "Process command",
    command: `ps -fp 4312`,
    purpose:
      "Shows process owner and command for one PID.",
  },
  {
    label: "Executable path",
    command: `readlink -f /proc/4312/exe`,
    purpose:
      "Resolves the executable used by a running process.",
  },
  {
    label: "Service relationship",
    command: `systemctl status example.service`,
    purpose:
      "Shows whether a process belongs to a systemd service.",
  },
];

const processMapping = [
  {
    step: "01",
    title: "Record the socket",
    text:
      "Write down protocol, local address, local port, remote address, remote port, state, and PID.",
  },
  {
    step: "02",
    title: "Resolve the PID",
    text:
      "Identify process name, executable path, command line, parent PID, and user.",
  },
  {
    step: "03",
    title: "Check service context",
    text:
      "Determine whether the process belongs to a Windows service, systemd unit, scheduled task, or user session.",
  },
  {
    step: "04",
    title: "Validate the executable",
    text:
      "Record path, hash, ownership, permissions, and installation/package context.",
  },
  {
    step: "05",
    title: "Check logs",
    text:
      "Look for service starts, process launches, authentication, firewall, or application events around the same time.",
  },
  {
    step: "06",
    title: "Compare with scenario requirements",
    text:
      "Determine whether the service or connection is expected and necessary.",
  },
];

const commonPortAwareness = [
  {
    port: "22",
    service: "SSH",
    note:
      "Common for secure remote shell access, especially on Linux.",
  },
  {
    port: "53",
    service: "DNS",
    note:
      "Common for name-resolution services.",
  },
  {
    port: "80",
    service: "HTTP",
    note:
      "Common for web services.",
  },
  {
    port: "443",
    service: "HTTPS",
    note:
      "Common for encrypted web services.",
  },
  {
    port: "3389",
    service: "RDP",
    note:
      "Common for Windows Remote Desktop.",
  },
  {
    port: "445",
    service: "SMB",
    note:
      "Common for Windows file and printer sharing.",
  },
];

const portCautions = [
  {
    title: "Ports are conventions",
    text:
      "Applications can use nonstandard ports, and different applications can reuse the same port number on different hosts.",
  },
  {
    title: "A known port does not prove the service",
    text:
      "Always map the socket to the process and service configuration.",
  },
  {
    title: "An unfamiliar port is not automatically suspicious",
    text:
      "Custom applications, development tools, monitoring agents, and vendor software often use high-numbered ports.",
  },
  {
    title: "UDP differs from TCP",
    text:
      "UDP has no connection state like ESTABLISHED, so interpretation relies more on process, service, and application context.",
  },
];

const windowsServiceLinks = [
  {
    clue:
      "PID belongs to a process launched by services.exe",
    meaning:
      "The process may belong to a Windows service.",
    next:
      "Check Get-CimInstance Win32_Service for matching ProcessId or executable path.",
  },
  {
    clue:
      "Service PathName matches the executable path",
    meaning:
      "The service configuration and process point to the same binary.",
    next:
      "Record service name, start mode, account, state, and relevant System events.",
  },
  {
    clue:
      "Event 7045 exists shortly before first listener",
    meaning:
      "A newly installed service may explain the new network exposure.",
    next:
      "Correlate install time, binary metadata, process start, and scenario requirements.",
  },
];

const linuxServiceLinks = [
  {
    clue:
      "PID appears as MainPID for a systemd service",
    meaning:
      "The process is directly managed by that unit.",
    next:
      "Inspect systemctl status, systemctl cat, and the service journal.",
  },
  {
    clue:
      "Executable path matches ExecStart",
    meaning:
      "The unit definition and running process refer to the same program.",
    next:
      "Check unit ownership, package source, user, enablement, and logs.",
  },
  {
    clue:
      "Timer or cron launches the same executable",
    meaning:
      "Scheduled activity may explain periodic network connections.",
    next:
      "Correlate trigger times with process and socket timestamps.",
  },
];

const listenerReasoning = [
  {
    evidence:
      "0.0.0.0:8080 is listening",
    supported:
      "A process is listening on TCP port 8080 across available IPv4 interfaces.",
    notSupported:
      "The service is malicious or internet-accessible from everywhere.",
  },
  {
    evidence:
      "127.0.0.1:5000 is listening",
    supported:
      "The service is bound to local loopback on port 5000.",
    notSupported:
      "Remote hosts can directly reach it.",
  },
  {
    evidence:
      "PID 4312 owns port 3389",
    supported:
      "Process 4312 currently owns that socket.",
    notSupported:
      "The process is definitely the Windows RDP service without further mapping.",
  },
  {
    evidence:
      "Process has an established connection to 203.0.113.50:443",
    supported:
      "The process is currently communicating with that remote endpoint over TCP port 443.",
    notSupported:
      "The remote service is trustworthy or malicious based on the port alone.",
  },
  {
    evidence:
      "UDP socket is bound to port 53",
    supported:
      "A local process has bound UDP port 53.",
    notSupported:
      "It is necessarily a DNS server without process/service confirmation.",
  },
  {
    evidence:
      "Service is required but bound to all interfaces",
    supported:
      "The service may be more broadly exposed than necessary.",
    notSupported:
      "It should be disabled without checking the scenario and network requirements.",
  },
];

const firewallContext = [
  {
    title: "Listening does not guarantee reachability",
    text:
      "A local firewall can block inbound traffic even when a service is listening.",
  },
  {
    title: "Firewall rule does not prove a listener",
    text:
      "An allow rule may exist even if no service is currently bound to that port.",
  },
  {
    title: "Outbound rules matter too",
    text:
      "Established connections can be influenced by outbound policy and application behavior.",
  },
  {
    title: "Preserve first",
    text:
      "Record the listener and owning process before changing firewall or service state.",
  },
];

const windowsFirewallCommands = [
  {
    label: "Enabled firewall profiles",
    command: `Get-NetFirewallProfile`,
    purpose:
      "Shows Windows Defender Firewall profile state.",
  },
  {
    label: "Enabled firewall rules",
    command: `Get-NetFirewallRule -Enabled True`,
    purpose:
      "Lists enabled firewall rules for review.",
  },
  {
    label: "Rule details",
    command: `Get-NetFirewallRule -DisplayName "Example Rule" | Get-NetFirewallPortFilter`,
    purpose:
      "Shows protocol and port filters associated with a selected rule.",
  },
];

const linuxFirewallCommands = [
  {
    label: "UFW status",
    command: `sudo ufw status verbose`,
    purpose:
      "Shows Ubuntu-family UFW state and configured rules.",
  },
  {
    label: "nftables ruleset",
    command: `sudo nft list ruleset`,
    purpose:
      "Shows nftables configuration where nftables is in use.",
  },
];

const networkQuestionMap = [
  {
    question:
      "What is listening?",
    evidence:
      "Local address, local port, protocol, state, and owning PID.",
  },
  {
    question:
      "Which process owns the listener?",
    evidence:
      "PID mapped to process name, executable path, command line, and user.",
  },
  {
    question:
      "Why is the process running?",
    evidence:
      "Service, task, cron, timer, startup source, parent process, and logs.",
  },
  {
    question:
      "Is the service required?",
    evidence:
      "Scenario requirements, role, dependencies, and application purpose.",
  },
  {
    question:
      "Was there remote communication?",
    evidence:
      "Established connection records, application logs, process state, and firewall/network evidence.",
  },
  {
    question:
      "Was the exposure broader than necessary?",
    evidence:
      "Bind address, firewall policy, service configuration, and network role.",
  },
];

const preservationChecklist = [
  "Record protocol.",
  "Record local address and local port.",
  "Record remote address and remote port for active connections.",
  "Record connection state.",
  "Record owning PID.",
  "Record process name, path, command line, user, and parent.",
  "Record service or scheduler relationship.",
  "Record executable hash when useful.",
  "Record relevant firewall state.",
  "Record related logs and timestamps.",
  "Check whether the service is required by the scenario.",
  "Only then stop, disable, or firewall the service if appropriate.",
];

const correlationCases = [
  {
    records:
      "Service installed at 09:10 + process starts at 09:11 + listener appears on 0.0.0.0:8088",
    supported:
      "The newly installed service likely explains the new listener.",
  },
  {
    records:
      "Cron executes script at 10:00 + child process starts + outbound connection appears at 10:00",
    supported:
      "The scheduled job likely explains the process and connection.",
  },
  {
    records:
      "RDP logon at 11:02 + user process starts at 11:05 + established connection at 11:06",
    supported:
      "The network activity occurred during the remote interactive session.",
  },
  {
    records:
      "Package install + systemd service start + TCP listener on expected application port",
    supported:
      "The package installation likely introduced the service and listener.",
  },
  {
    records:
      "Unexpected listener + executable in user Temp + scheduled task points to same executable",
    supported:
      "The process, path, task, and listener belong to one recurring execution chain.",
  },
  {
    records:
      "Required service + wildcard bind + firewall allows all inbound sources",
    supported:
      "The service may be more broadly exposed than necessary even if it is required.",
  },
];

const fictionalTimeline = [
  {
    time: "13:02",
    source: "System Event",
    detail:
      "Fictional service LabReporter starts on CP-WIN-14.",
  },
  {
    time: "13:02",
    source: "Process Evidence",
    detail:
      "reporter.exe runs as PID 5520 from C:\\ProgramData\\LabReporter\\reporter.exe.",
  },
  {
    time: "13:03",
    source: "Network State",
    detail:
      "PID 5520 listens on 0.0.0.0:8099.",
  },
  {
    time: "13:04",
    source: "Firewall",
    detail:
      "A rule allows inbound TCP 8099 on the current profile.",
  },
  {
    time: "13:06",
    source: "Application Log",
    detail:
      "LabReporter records a connection from fictional client 192.0.2.80.",
  },
  {
    time: "13:08",
    source: "Scenario Review",
    detail:
      "The fictional scenario states LabReporter is required but should only be reachable from the local management subnet.",
  },
];

const labQuestions = [
  {
    question:
      "What proves the service is actually listening?",
    answer:
      "The network-state record showing PID 5520 listening on 0.0.0.0:8099.",
  },
  {
    question:
      "What connects the listener to the service executable?",
    answer:
      "The owning PID maps to reporter.exe, which matches the LabReporter service process.",
  },
  {
    question:
      "Why does 0.0.0.0 matter?",
    answer:
      "It indicates the service is listening across available IPv4 interfaces rather than only loopback.",
  },
  {
    question:
      "Does the inbound firewall rule prove a client connected?",
    answer:
      "No. The application log provides the separate evidence that a client connection occurred.",
  },
  {
    question:
      "Should the service simply be disabled?",
    answer:
      "No. The scenario says the service is required. The defensive issue is limiting exposure appropriately.",
  },
  {
    question:
      "What should be preserved before changing the firewall rule?",
    answer:
      "Listener details, PID/process mapping, service configuration, firewall rule, application log, scenario requirement, and timestamps.",
  },
];

const mistakes = [
  {
    title: "Assuming port equals application",
    text:
      "Ports are conventions. Map the socket to the process and service before naming the application.",
  },
  {
    title: "Stopping the service before recording the socket",
    text:
      "You can lose the current listener and connection evidence.",
  },
  {
    title: "Ignoring bind address",
    text:
      "Loopback-only exposure is very different from listening on all interfaces.",
  },
  {
    title: "Treating every remote IP as suspicious",
    text:
      "Backups, updates, cloud services, monitoring, and legitimate applications all create remote connections.",
  },
  {
    title: "Ignoring the process path",
    text:
      "The executable location often determines which evidence source to inspect next.",
  },
  {
    title: "Confusing firewall rule with active service",
    text:
      "An allow rule may exist even when nothing is listening.",
  },
  {
    title: "Disabling required services",
    text:
      "Competition scenarios can require services to remain available.",
  },
  {
    title: "Forgetting your own changes",
    text:
      "Firewall and service changes create new state that should be recorded separately.",
  },
];

const reviewChecklist = [
  "I distinguish listening sockets from established connections.",
  "I record local and remote addresses and ports.",
  "I record protocol and connection state.",
  "I map the socket to an owning PID.",
  "I map the PID to process name, path, command line, and user.",
  "I check service or scheduler context.",
  "I compare executable path and hash where useful.",
  "I review firewall state separately from listener state.",
  "I check whether the service is required.",
  "I correlate network evidence with logs and process timing.",
  "I preserve evidence before stopping or blocking anything.",
  "I record my own defensive changes separately.",
];

const reflection = [
  "Why does a port number fail to prove which application is running?",
  "What does 127.0.0.1 listening tell you that 0.0.0.0 listening does not?",
  "Why should firewall state and listener state be reviewed separately?",
  "How would you connect an established connection to a user or service?",
  "Why can a required service still create a security problem?",
  "What evidence should you preserve before disabling a listener?",
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

export default function NetworkConnectionsListeningServicesPage() {
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
              href="/cyberpatriot/forensics/scheduled-tasks-cron-persistence-clues"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/browser-download-artifacts"
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
                Forensics · Lesson 12
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Network Connections &amp; Listening Services
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how to map listening ports and active connections to
                processes, services, users, executable paths, and firewall
                context on Windows and Linux.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Network evidence becomes useful when you connect the socket to
                the process, the process to the service or user, and the service
                to the scenario requirement.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main evidence</span>
                  <span className="font-bold text-white">Sockets + PIDs</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Key distinction</span>
                  <span className="font-bold text-white">Listening vs connected</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Exposure clue</span>
                  <span className="font-bold text-white">Bind address</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Explain network activity</span>
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
            title="Connect network state to process and service evidence"
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
              Map socket → PID → process → service → scenario
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The strongest network conclusion comes from connecting the local
              endpoint to the owning process, executable, account, service, and
              expected system role.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
              Competition caution
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve the listener before you block it
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Record addresses, ports, PID, executable, service, account, logs,
              and firewall context before stopping services or changing rules.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Network principles"
            title="Interpret sockets without overclaiming"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {networkPrinciples.map((item) => (
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
            label="Connection states"
            title="Know what the socket state actually means"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {socketStates.map((item) => (
              <div
                key={item.state}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.state}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Forensic value
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.forensicValue}
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
            label="Address meaning"
            title="Bind address changes exposure context"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {addressConcepts.map((item) => (
              <div
                key={item.item}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-sm font-bold text-cyan-300">
                  {item.item}
                </code>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.meaning}
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
              title="Inspect sockets and owning processes"
            />
            <div className="mt-6 grid gap-4">
              {windowsCommands.map((item) => (
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
              label="Linux"
              title="Inspect sockets and owning processes"
            />
            <div className="mt-6 grid gap-4">
              {linuxCommands.map((item) => (
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
            label="Process mapping"
            title="Move from socket to executable and service"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {processMapping.map((item) => (
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
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Common ports"
              title="Use port numbers as hints, not conclusions"
            />

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {commonPortAwareness.map((item) => (
                <div
                  key={item.port}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-black text-cyan-300">
                      {item.port}
                    </span>
                    <span className="font-bold text-white">
                      {item.service}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-400/15 bg-yellow-400/5 p-7">
            <SectionHeading
              label="Port cautions"
              title="Why memorized ports are not enough"
            />

            <div className="mt-6 grid gap-4">
              {portCautions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-yellow-400/15 bg-slate-950/40 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.text}
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
              label="Windows service links"
              title="Connect listeners to service configuration"
            />
            <div className="mt-6 grid gap-4">
              {windowsServiceLinks.map((item) => (
                <div
                  key={item.clue}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.clue}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.meaning}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Next: {item.next}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Linux service links"
              title="Connect sockets to systemd and scheduling"
            />
            <div className="mt-6 grid gap-4">
              {linuxServiceLinks.map((item) => (
                <div
                  key={item.clue}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.clue}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.meaning}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Next: {item.next}
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
            label="Reasoning"
            title="Say only what the network evidence supports"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {listenerReasoning.map((item) => (
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
            label="Firewall context"
            title="Listener state and firewall state answer different questions"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {firewallContext.map((item) => (
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
              label="Windows firewall"
              title="Inspect policy without changing it"
            />
            <div className="mt-6 grid gap-4">
              {windowsFirewallCommands.map((item) => (
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
              label="Linux firewall"
              title="Inspect policy without changing it"
            />
            <div className="mt-6 grid gap-4">
              {linuxFirewallCommands.map((item) => (
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
            label="Question-to-evidence map"
            title="Choose the right artifact for the network question"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {networkQuestionMap.map((item) => (
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
            Capture the live network state before changing it
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {preservationChecklist.map((item, index) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Correlation"
            title="Connect sockets to services, users, schedules, and logs"
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
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Common mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Network-analysis mistakes that weaken forensic conclusions
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
            Fictional network lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Reconstruct a required service and evaluate its exposure
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
              Check your network reasoning
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
                Map the socket to the process, map the process to its service or
                user, compare the exposure with the scenario, and preserve the
                live state before making defensive changes.
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
              href="/cyberpatriot/forensics/scheduled-tasks-cron-persistence-clues"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/browser-download-artifacts"
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
