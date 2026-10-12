import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Server Roles & Features",
    items: [
      {
        command: "Get-WindowsFeature",
        meaning: "Lists Windows Server roles and features with install state.",
        caution: "Do not remove a role just because it looks unnecessary. Check the scenario first.",
      },
      {
        command: "Get-WindowsFeature | Where-Object Installed",
        meaning: "Shows only installed roles and features.",
        caution: "Installed roles may be required for scoring or business functionality.",
      },
      {
        command: "Get-Service | Sort-Object Status,Name",
        meaning: "Provides a quick service-state inventory.",
        caution: "Service state alone does not tell you whether the service is required.",
      },
    ],
  },
  {
    title: "Local Users & Groups",
    items: [
      {
        command: "Get-LocalUser",
        meaning: "Lists local server accounts and their enabled state.",
        caution: "On a domain controller, local account behavior differs because AD DS is authoritative.",
      },
      {
        command: 'Get-LocalGroupMember -Group "Administrators"',
        meaning: "Shows members of the local Administrators group.",
        caution: "Privilege membership is capability, not proof of misuse.",
      },
      {
        command: "net user",
        meaning: "Classic local-user inventory command.",
        caution: "Use domain-specific commands when the server is acting as a domain controller.",
      },
    ],
  },
  {
    title: "Domain Awareness",
    items: [
      {
        command: "Get-ComputerInfo | Select CsDomain,CsDomainRole,CsName",
        meaning: "Shows domain membership and basic server role information.",
        caution: "Confirm whether the host is standalone, domain-joined, or a domain controller before making account changes.",
      },
      {
        command: "whoami /fqdn",
        meaning: "Shows the current user's fully qualified domain name when available.",
        caution: "This describes the current user context, not every domain account.",
      },
      {
        command: "nltest /dsgetdc:<domain>",
        meaning: "Locates a domain controller for the specified domain.",
        caution: "Use the actual domain name from the environment rather than guessing.",
      },
    ],
  },
  {
    title: "Active Directory Quick Checks",
    items: [
      {
        command: "Get-ADUser -Filter *",
        meaning: "Lists Active Directory users when the AD module is installed and available.",
        caution: "This can return many accounts. Filter deliberately when possible.",
      },
      {
        command: "Get-ADGroup -Filter *",
        meaning: "Lists Active Directory groups.",
        caution: "Group existence does not show membership or recent use.",
      },
      {
        command: 'Get-ADGroupMember -Identity "Domain Admins"',
        meaning: "Shows members of a selected AD group.",
        caution: "Do not remove members until scenario requirements and ownership are clear.",
      },
      {
        command: "Get-ADComputer -Filter *",
        meaning: "Lists computers known to Active Directory.",
        caution: "An AD object can remain after the device is no longer active.",
      },
    ],
  },
  {
    title: "Shared Folders & SMB",
    items: [
      {
        command: "Get-SmbShare",
        meaning: "Lists SMB shares configured on the server.",
        caution: "Administrative shares such as C$ and ADMIN$ are expected on many Windows systems.",
      },
      {
        command: "Get-SmbSession",
        meaning: "Shows current SMB client sessions.",
        caution: "Current sessions are volatile and may disappear quickly.",
      },
      {
        command: "Get-SmbOpenFile",
        meaning: "Shows files currently opened through SMB.",
        caution: "Record useful evidence before disconnecting anything.",
      },
      {
        command: 'Get-SmbShareAccess -Name "ExampleShare"',
        meaning: "Shows share-level permissions for one SMB share.",
        caution: "Share permissions and NTFS permissions both affect effective access.",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        command: "Get-Service",
        meaning: "Lists service names, display names, and state.",
        caution: "Never bulk-disable unfamiliar services.",
      },
      {
        command:
          "Get-CimInstance Win32_Service | Select Name,State,StartMode,StartName,PathName",
        meaning: "Shows startup mode, service account, executable path, and state.",
        caution: "Required server roles often depend on multiple services.",
      },
      {
        command: 'Get-CimInstance Win32_Service -Filter "Name=\'ExampleService\'" | Format-List *',
        meaning: "Shows detailed configuration for a selected service.",
        caution: "Preserve configuration details before making changes.",
      },
    ],
  },
  {
    title: "Firewall",
    items: [
      {
        command: "Get-NetFirewallProfile",
        meaning: "Shows the state of Domain, Private, and Public firewall profiles.",
        caution: "Profile state alone does not describe all individual rules.",
      },
      {
        command: "Get-NetFirewallRule -Enabled True",
        meaning: "Lists enabled firewall rules.",
        caution: "Review direction, profile, program, protocol, and address scope.",
      },
      {
        command:
          'Get-NetFirewallRule -DisplayName "Example Rule" | Get-NetFirewallPortFilter',
        meaning: "Shows protocol and port filters for a selected rule.",
        caution: "A firewall allow rule does not prove that a service is listening.",
      },
    ],
  },
  {
    title: "Network Configuration",
    items: [
      {
        command: "Get-NetIPConfiguration",
        meaning: "Shows IP addresses, gateways, DNS servers, and adapter details.",
        caution: "Servers often have static addressing; do not change it without checking the scenario.",
      },
      {
        command: "Get-NetIPAddress",
        meaning: "Lists configured IP addresses.",
        caution: "Virtual adapters and link-local addresses may be present.",
      },
      {
        command: "Get-DnsClientServerAddress",
        meaning: "Shows DNS server assignments per interface.",
        caution: "Domain controllers and domain members depend heavily on correct DNS configuration.",
      },
      {
        command: "route print",
        meaning: "Shows routing tables.",
        caution: "Use routes for troubleshooting, not as a reason for arbitrary deletion.",
      },
    ],
  },
  {
    title: "Listening Ports & Connections",
    items: [
      {
        command: "Get-NetTCPConnection -State Listen",
        meaning: "Shows listening TCP sockets and owning PIDs.",
        caution: "Map the PID to a process and service before judging the listener.",
      },
      {
        command: "Get-NetTCPConnection",
        meaning: "Shows TCP connection state and owning process IDs.",
        caution: "A connection is an observation, not proof of malicious activity.",
      },
      {
        command: "netstat -ano",
        meaning: "Classic network-socket and PID view.",
        caution: "Use PID mapping to identify the owning process.",
      },
    ],
  },
  {
    title: "Event Logs",
    items: [
      {
        command: "Get-WinEvent -LogName Security -MaxEvents 100",
        meaning: "Shows recent Security events.",
        caution: "Filter by event ID and time once you know what evidence you need.",
      },
      {
        command: "Get-WinEvent -LogName System -MaxEvents 100",
        meaning: "Shows recent System events including service and boot activity.",
        caution: "Correlate service events with configuration and process evidence.",
      },
      {
        command: "Get-WinEvent -LogName 'Directory Service' -MaxEvents 100",
        meaning: "Shows Directory Service events on systems where that log exists.",
        caution: "This log is relevant mainly on domain controllers.",
      },
      {
        command:
          "Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4624,4625,4720,4726; StartTime=(Get-Date).AddHours(-4)}",
        meaning: "Filters recent logons and account-creation/deletion events.",
        caution: "Adjust the time window to the scenario rather than searching blindly.",
      },
    ],
  },
  {
    title: "Scheduled Tasks & Startup",
    items: [
      {
        command: "Get-ScheduledTask",
        meaning: "Lists scheduled tasks and state.",
        caution: "Configured does not mean executed.",
      },
      {
        command: 'Get-ScheduledTaskInfo -TaskName "ExampleTask"',
        meaning: "Shows last-run and next-run information.",
        caution: "Pair this with task action, trigger, and account.",
      },
      {
        command: "Get-CimInstance Win32_StartupCommand",
        meaning: "Provides a broad startup-command inventory.",
        caution: "It is not exhaustive and should be combined with services and scheduled-task review.",
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
        meaning: "Adds parent PID, executable path, and command line.",
        caution: "Some fields may require elevation.",
      },
      {
        command: "Get-Process -Id 1234 | Format-List Id,ProcessName,Path,StartTime",
        meaning: "Shows details for one PID.",
        caution: "PIDs are temporary and can be reused.",
      },
    ],
  },
  {
    title: "Updates & Defender",
    items: [
      {
        command: "Get-HotFix | Sort-Object InstalledOn -Descending",
        meaning: "Shows visible hotfix/update history.",
        caution: "Not every modern update appears identically in Get-HotFix.",
      },
      {
        command: "Get-MpComputerStatus",
        meaning: "Shows Microsoft Defender protection state.",
        caution: "Healthy Defender status does not prove the system is clean.",
      },
      {
        command: "Get-MpThreatDetection",
        meaning: "Shows recorded Defender detections where available.",
        caution: "Detection history is only one evidence source.",
      },
    ],
  },
  {
    title: "Remote Access",
    items: [
      {
        command:
          'Get-ItemProperty "HKLM:\\System\\CurrentControlSet\\Control\\Terminal Server" -Name fDenyTSConnections',
        meaning: "Shows the RDP deny/allow setting.",
        caution: "Remote Desktop may be required for administration; check the scenario.",
      },
      {
        command: "Get-Service TermService",
        meaning: "Shows Remote Desktop Services state.",
        caution: "Service state, firewall rules, and policy all affect RDP availability.",
      },
      {
        command:
          "Get-NetTCPConnection -LocalPort 3389 -ErrorAction SilentlyContinue",
        meaning: "Checks whether TCP 3389 currently has an endpoint.",
        caution: "Map the PID and process before drawing conclusions.",
      },
    ],
  },
];

const serverRoles = [
  { role: "AD DS", purpose: "Active Directory Domain Services" },
  { role: "DNS", purpose: "Name resolution, often critical in AD environments" },
  { role: "DHCP", purpose: "Dynamic IP address assignment" },
  { role: "File Services", purpose: "SMB shares and file access" },
  { role: "IIS", purpose: "Web server role" },
  { role: "Hyper-V", purpose: "Virtualization platform" },
  { role: "Print Services", purpose: "Centralized printing" },
  { role: "Remote Access", purpose: "Routing/VPN-related functionality" },
];

const eventIds = [
  { id: "4624", meaning: "Successful logon" },
  { id: "4625", meaning: "Failed logon" },
  { id: "4648", meaning: "Explicit credentials used" },
  { id: "4672", meaning: "Special privileges assigned" },
  { id: "4720", meaning: "User account created" },
  { id: "4722", meaning: "User account enabled" },
  { id: "4725", meaning: "User account disabled" },
  { id: "4726", meaning: "User account deleted" },
  { id: "4728", meaning: "Member added to global security group" },
  { id: "4729", meaning: "Member removed from global security group" },
  { id: "4732", meaning: "Member added to local security group" },
  { id: "4733", meaning: "Member removed from local security group" },
  { id: "7045", meaning: "Service installed" },
  { id: "7036", meaning: "Service state changed" },
];

const decisionChecks = [
  "What role is this server expected to perform?",
  "Is this system standalone, domain-joined, or a domain controller?",
  "Which services are required by the assigned roles?",
  "Are any shares required for the scenario?",
  "Are the account or group memberships expected?",
  "What process owns the port or connection I am investigating?",
  "Do I need to preserve logs, hashes, PIDs, task settings, or service paths before changing anything?",
  "What is the smallest justified defensive change?",
  "How will I verify the server still performs its required role afterward?",
];

const commonMistakes = [
  "Removing a server role before confirming that the scenario does not require it.",
  "Treating domain controllers like ordinary standalone Windows machines.",
  "Changing DNS settings without understanding their role in Active Directory.",
  "Removing SMB shares without checking whether they are required.",
  "Disabling services that belong to required server roles.",
  "Changing several firewall rules at once and losing track of the effect.",
  "Deleting evidence before recording task actions, service paths, event IDs, or PIDs.",
  "Forgetting to verify that required clients can still reach the server after remediation.",
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

export default function WindowsServerQuickReferencePage() {
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
              href="/cyberpatriot/command-center/windows-11"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Windows 11
            </Link>
            <Link
              href="/cyberpatriot/command-center/linux"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next: Linux &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Command Center Â· Reference 02
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows Server Quick Reference
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Fast lookup for server roles, domain awareness, users and groups,
                shares, services, firewall, networking, event logs, scheduled
                tasks, processes, updates, Defender, and remote access.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Server security starts with understanding the role of the host.
                Preserve required services and dependencies while you investigate.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Server Rule
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>First</span>
                  <span className="font-bold text-white">Identify role</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Then</span>
                  <span className="font-bold text-white">Inspect state</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Change</span>
                  <span className="font-bold text-white">Only if justified</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish</span>
                  <span className="font-bold text-white">Verify service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Before changing a server
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Required roles and dependencies matter more than familiarity
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            A server can intentionally run services, ports, shares, and roles
            that would look unnecessary on a normal workstation. Confirm the
            server&apos;s assigned purpose before disabling or removing anything.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Role awareness"
            title="Common Windows Server roles"
            description="Recognize the role first so you do not break required functionality while securing the host."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {serverRoles.map((item) => (
              <div
                key={item.role}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.role}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"
            >
              <SectionHeading label="Windows Server" title={section.title} />
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Event IDs"
            title="High-value Windows Server event awareness"
          />
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision check
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Ask these before changing server configuration
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
            Server mistakes that can break required services
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {commonMistakes.map((item, index) => (
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
              href="/cyberpatriot/command-center/windows-11"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Windows 11
            </Link>
            <Link
              href="/cyberpatriot/command-center/linux"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next: Linux &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
