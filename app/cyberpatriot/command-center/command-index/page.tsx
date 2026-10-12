import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const groups = [
  {
    title: "Windows 11",
    rows: [
      ["Users", "Get-LocalUser", "List local users."],
      ["Administrators", 'Get-LocalGroupMember -Group "Administrators"', "Show local administrators."],
      ["Services", "Get-Service", "List services and state."],
      ["Service detail", "Get-CimInstance Win32_Service | Select Name,State,StartMode,StartName,PathName", "Show service account, path, mode, and state."],
      ["Processes", "Get-CimInstance Win32_Process | Select ProcessId,ParentProcessId,Name,ExecutablePath,CommandLine", "Show PID, parent, path, and command line."],
      ["Scheduled tasks", "Get-ScheduledTask", "List scheduled tasks."],
      ["Firewall", "Get-NetFirewallProfile", "Show firewall profile state."],
      ["IP config", "ipconfig /all", "Show addresses, gateways, DNS, and DHCP."],
      ["Listeners", "Get-NetTCPConnection -State Listen", "Show listening TCP sockets."],
      ["Connections", "Get-NetTCPConnection", "Show TCP states and owning PIDs."],
      ["Routes", "route print", "Show routing tables."],
      ["Security log", "Get-WinEvent -LogName Security -MaxEvents 50", "Show recent Security events."],
      ["File hash", 'Get-FileHash "C:\\Path\\To\\File" -Algorithm SHA256', "Calculate SHA-256."],
      ["File metadata", 'Get-Item "C:\\Path\\To\\File" | Format-List Name,Length,CreationTime,LastWriteTime,Attributes', "Show file metadata."],
      ["Startup", "Get-CimInstance Win32_StartupCommand", "Show startup commands."],
      ["Defender", "Get-MpComputerStatus", "Show Defender status."],
      ["Updates", "Get-HotFix | Sort-Object InstalledOn -Descending", "Show visible hotfix history."],
    ],
  },
  {
    title: "Windows Server",
    rows: [
      ["Roles", "Get-WindowsFeature", "List server roles and features."],
      ["Installed roles", "Get-WindowsFeature | Where-Object Installed", "Show installed roles/features."],
      ["Domain role", "Get-ComputerInfo | Select CsDomain,CsDomainRole,CsName", "Show domain and server-role context."],
      ["AD users", "Get-ADUser -Filter *", "List AD users when the AD module is available."],
      ["AD groups", "Get-ADGroup -Filter *", "List AD groups."],
      ["Domain Admins", 'Get-ADGroupMember -Identity "Domain Admins"', "Show Domain Admins membership."],
      ["Shares", "Get-SmbShare", "List SMB shares."],
      ["SMB sessions", "Get-SmbSession", "Show current SMB sessions."],
      ["Open SMB files", "Get-SmbOpenFile", "Show files opened through SMB."],
      ["IP config", "Get-NetIPConfiguration", "Show IP, gateway, DNS, and interface data."],
      ["DNS servers", "Get-DnsClientServerAddress", "Show DNS assignments."],
      ["Listeners", "Get-NetTCPConnection -State Listen", "Show TCP listeners."],
      ["Directory log", "Get-WinEvent -LogName 'Directory Service' -MaxEvents 100", "Show Directory Service events where available."],
    ],
  },
  {
    title: "Linux",
    rows: [
      ["Users", "getent passwd", "List visible users."],
      ["Groups", "getent group", "List visible groups."],
      ["User detail", "id <username>", "Show UID, GID, and groups."],
      ["Sessions", "who", "Show current logins."],
      ["Login history", "last", "Show recent login history."],
      ["Sudo group", "getent group sudo", "Show sudo-group membership."],
      ["Sudo rights", "sudo -l -U <username>", "Show sudo permissions for a user."],
      ["Permissions", "ls -l <path>", "Show owner, group, and mode bits."],
      ["Metadata", "stat <path>", "Show timestamps, ownership, mode, and inode."],
      ["Packages", "dpkg -l", "List installed Debian packages."],
      ["Running services", "systemctl --type=service --state=running", "List running services."],
      ["Service status", "systemctl status <service>", "Show service state and recent logs."],
      ["Processes", "ps -eo pid,ppid,user,lstart,cmd --sort=pid", "Show detailed process state."],
      ["Process tree", "pstree -ap", "Show process parent-child relationships."],
      ["Interfaces", "ip addr", "Show interfaces and addresses."],
      ["Routes", "ip route", "Show routes."],
      ["Listeners", "ss -tulpn", "Show listening TCP/UDP sockets."],
      ["Connections", "ss -tpn", "Show active TCP connections."],
      ["Firewall", "sudo ufw status verbose", "Show UFW state and rules."],
      ["Journal", 'journalctl -u <service> --since "2 hours ago"', "Show recent service logs."],
      ["Auth log", "sudo tail -n 100 /var/log/auth.log", "Show recent authentication events."],
      ["Cron", "crontab -l", "Show current user's cron jobs."],
      ["Timers", "systemctl list-timers --all", "Show systemd timers."],
      ["SSH", "systemctl status ssh", "Show SSH service state."],
      ["Hash", "sha256sum <file>", "Calculate SHA-256."],
      ["File type", "file <file>", "Identify file type by content."],
    ],
  },
  {
    title: "Cisco & Networking",
    rows: [
      ["Baseline", "show version", "Show IOS, uptime, hardware, and image details."],
      ["Running config", "show running-config", "Show active configuration."],
      ["Startup config", "show startup-config", "Show saved configuration."],
      ["Interfaces", "show ip interface brief", "Show interface IP and status."],
      ["Interface detail", "show interfaces", "Show detailed interface counters/state."],
      ["Routes", "show ip route", "Show IPv4 routing table."],
      ["ARP", "show arp", "Show IPv4-to-MAC mappings."],
      ["IPv6", "show ipv6 interface brief", "Show IPv6 interface addresses/state."],
      ["MAC table", "show mac address-table", "Show learned MAC addresses."],
      ["VLANs", "show vlan brief", "Show VLANs and access-port membership."],
      ["Trunks", "show interfaces trunk", "Show trunk state and allowed VLANs."],
      ["Switchport", "show interfaces switchport", "Show access/trunk details."],
      ["Spanning tree", "show spanning-tree", "Show root, roles, and STP state."],
      ["ACLs", "show access-lists", "Show ACL entries and counters."],
      ["ACL application", "show ip interface", "Show ACLs applied to interfaces."],
      ["Port security", "show port-security", "Show port-security summary."],
      ["DHCP bindings", "show ip dhcp binding", "Show DHCP leases."],
      ["SSH", "show ip ssh", "Show SSH status."],
      ["CDP", "show cdp neighbors detail", "Show Cisco neighbor details."],
      ["LLDP", "show lldp neighbors detail", "Show LLDP neighbor details."],
      ["Logging", "show logging", "Show logging config and buffered messages."],
      ["NTP", "show ntp status", "Show time synchronization state."],
      ["Ping", "ping <destination>", "Test reachability."],
      ["Traceroute", "traceroute <destination>", "Show path toward a destination."],
    ],
  },
  {
    title: "Forensics",
    rows: [
      ["Windows hash", 'Get-FileHash "C:\\Path\\To\\File" -Algorithm SHA256', "Hash a Windows file."],
      ["Linux hash", "sha256sum <file>", "Hash a Linux file."],
      ["Windows metadata", 'Get-Item "C:\\Path\\To\\File" | Format-List Name,Length,CreationTime,LastWriteTime,Attributes', "Show Windows file metadata."],
      ["Linux metadata", "stat <file>", "Show Linux file metadata."],
      ["Windows processes", "Get-CimInstance Win32_Process | Select ProcessId,ParentProcessId,Name,ExecutablePath,CommandLine", "Show detailed process evidence."],
      ["Linux processes", "ps -eo pid,ppid,user,lstart,cmd --sort=pid", "Show detailed process evidence."],
      ["Windows listeners", "Get-NetTCPConnection -State Listen", "Show Windows listeners."],
      ["Linux listeners", "ss -tulpn", "Show Linux listeners."],
      ["Windows tasks", "Get-ScheduledTask", "List scheduled tasks."],
      ["Linux cron", "crontab -l", "Show current user's cron jobs."],
      ["Linux timers", "systemctl list-timers --all", "Show systemd timers."],
      ["Security events", "Get-WinEvent -LogName Security -MaxEvents 100", "Show recent Security events."],
      ["Linux auth", "sudo tail -n 100 /var/log/auth.log", "Show recent auth events."],
      ["Alternate streams", 'Get-Item "C:\\Path\\To\\File" -Stream *', "List NTFS alternate data streams."],
      ["Hidden Linux files", "ls -la <path>", "Show hidden entries and metadata."],
    ],
  },
];

const taskLookup = [
  ["Need users?", "Get-LocalUser / getent passwd"],
  ["Need admin or sudo membership?", 'Get-LocalGroupMember -Group "Administrators" / getent group sudo'],
  ["Need services?", "Get-Service / systemctl --type=service --state=running"],
  ["Need process details?", "Get-CimInstance Win32_Process / ps -eo pid,ppid,user,lstart,cmd"],
  ["Need listeners?", "Get-NetTCPConnection -State Listen / ss -tulpn"],
  ["Need connections?", "Get-NetTCPConnection / ss -tpn"],
  ["Need routes?", "route print / ip route / show ip route"],
  ["Need logs?", "Get-WinEvent / journalctl / /var/log/auth.log"],
  ["Need scheduled activity?", "Get-ScheduledTask / crontab -l / systemctl list-timers --all"],
  ["Need file identity?", "Get-FileHash / sha256sum"],
  ["Need file metadata?", "Get-Item / stat"],
  ["Need firewall state?", "Get-NetFirewallProfile / ufw status verbose / show access-lists"],
  ["Need VLAN state?", "show vlan brief / show interfaces trunk"],
  ["Need interface state?", "show ip interface brief / ip addr / Get-NetIPConfiguration"],
];

const rules = [
  "Use read-only commands first.",
  "Record current state before changing configuration.",
  "Check scenario requirements before disabling services or remote access.",
  "Map ports to owning processes or services.",
  "Treat privilege as capability, not proof of action.",
  "Treat a task or timer as configured state, not proof of execution.",
  "Treat a hash as file identity, not a safety verdict.",
  "Corroborate important conclusions with another source.",
  "After remediation, re-run the command that proves the intended result.",
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
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{label}</p>
      <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
      {description && <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">{description}</p>}
    </div>
  );
}

export default function CommandIndexPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/command-center" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              &larr; Command Center
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>

          <Link href="/cyberpatriot/command-center/ports-protocols-services" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
            &larr; Ports, Protocols &amp; Services
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Command Center &middot; Reference 07
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Competition Command Index
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                One fast index for Windows 11, Windows Server, Linux, Cisco, networking, and forensics.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Use this when you know what you need to inspect but cannot remember the exact command. Open the full platform reference for cautions and deeper context.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Fast rule</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex justify-between gap-6 border-b border-slate-800 pb-3"><span>Find task</span><span className="font-bold text-white">Choose command</span></div>
                <div className="flex justify-between gap-6 border-b border-slate-800 pb-3"><span>Run</span><span className="font-bold text-white">Inspect first</span></div>
                <div className="flex justify-between gap-6 border-b border-slate-800 pb-3"><span>Interpret</span><span className="font-bold text-white">Use context</span></div>
                <div className="flex justify-between gap-6"><span>Finish</span><span className="font-bold text-white">Verify</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">Important</p>
          <h2 className="mt-3 text-3xl font-black text-white">The index gives commands, not automatic answers</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Interpret output with scenario requirements, host role, account context, service dependencies, timestamps, and corroborating evidence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Task lookup" title="Find the right command family quickly" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {taskLookup.map(([question, answer]) => (
              <div key={question} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="font-black text-white">{question}</p>
                <p className="mt-3 text-sm leading-7 text-cyan-300">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6">
          {groups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
              <SectionHeading label="Command index" title={group.title} description="Use the full quick-reference page when you need interpretation or cautions." />
              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-800">
                <table className="min-w-full divide-y divide-slate-800">
                  <thead className="bg-slate-950/80">
                    <tr>
                      <th className="px-5 py-4 text-left text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Task</th>
                      <th className="px-5 py-4 text-left text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Command</th>
                      <th className="px-5 py-4 text-left text-xs font-black uppercase tracking-[0.16em] text-cyan-300">What it gives you</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 bg-slate-950/40">
                    {group.rows.map(([task, command, meaning]) => (
                      <tr key={`${group.title}-${task}-${command}`}>
                        <td className="px-5 py-4 align-top text-sm font-bold text-white">{task}</td>
                        <td className="px-5 py-4 align-top"><code className="whitespace-pre-wrap text-sm leading-6 text-cyan-200">{command}</code></td>
                        <td className="px-5 py-4 align-top text-sm leading-6 text-slate-400">{meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Competition rules</p>
          <h2 className="mt-3 text-3xl font-black text-white">Keep the index fast without becoming careless</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {rules.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/command-center" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              &larr; Command Center
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <Link href="/cyberpatriot/command-center/ports-protocols-services" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
            &larr; Ports, Protocols &amp; Services
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
