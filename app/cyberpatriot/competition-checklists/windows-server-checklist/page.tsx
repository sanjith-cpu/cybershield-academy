import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openingChecks = [
  {
    item: "Read the server mission before changing roles, services, shares, identities, or remote access.",
    why:
      "A server may be intentionally providing file sharing, directory services, DNS, DHCP, web services, or remote administration that must remain available.",
  },
  {
    item: "Record approved privileged identities before account cleanup.",
    why:
      "Local Administrators, Domain Admins, service accounts, and delegated operators may all be legitimate depending on the scenario.",
  },
  {
    item: "Identify required server roles and features.",
    why:
      "Removing an unfamiliar role can break mission-critical services and create more problems than it solves.",
  },
  {
    item: "Capture current shares, sessions, services, listeners, and firewall state.",
    why:
      "A baseline helps distinguish required activity from suspicious or unnecessary exposure.",
  },
  {
    item: "Confirm how administrators are expected to manage the server.",
    why:
      "RDP, PowerShell remoting, console access, and other management paths should match the mission.",
  },
  {
    item: "Preserve authentication and service-installation evidence before remediation.",
    why:
      "Server logs often contain the clearest evidence of privilege changes, remote access, service installation, and failed logons.",
  },
];

const identityChecks = [
  {
    title: "Local users",
    commands: [
      "Get-LocalUser",
      "net user",
    ],
    verify:
      "Every local identity is approved, expected, and documented before disablement or removal.",
  },
  {
    title: "Local Administrators",
    commands: [
      "Get-LocalGroupMember Administrators",
      "net localgroup Administrators",
    ],
    verify:
      "Only approved administrators remain in the local Administrators group.",
  },
  {
    title: "Domain users and privileged groups",
    commands: [
      "Get-ADUser -Filter * | Select-Object SamAccountName,Enabled",
      "Get-ADGroupMember \"Domain Admins\"",
    ],
    verify:
      "Use these only if Active Directory is present. Privileged membership must match the mission.",
  },
  {
    title: "Disabled or stale accounts",
    commands: [
      "Search-ADAccount -AccountDisabled -UsersOnly",
      "Search-ADAccount -AccountInactive -UsersOnly -TimeSpan 30.00:00:00",
    ],
    verify:
      "Inactive or disabled accounts are reviewed in context instead of deleted automatically.",
  },
];

const roleChecks = [
  {
    title: "Installed roles and features",
    commands: [
      "Get-WindowsFeature | Where-Object Installed",
    ],
    verify:
      "Each installed role is either required, expected, or investigated before removal.",
  },
  {
    title: "Server services",
    commands: [
      "Get-Service | Where-Object Status -eq Running | Sort-Object Name",
    ],
    verify:
      "Unexpected services are correlated with role dependencies and executable paths.",
  },
  {
    title: "Automatic services",
    commands: [
      "Get-CimInstance Win32_Service | Where-Object StartMode -eq Auto | Select-Object Name,State,StartName,PathName",
    ],
    verify:
      "Automatic startup is justified by role, dependency, or mission requirement.",
  },
  {
    title: "Recently installed services",
    commands: [
      'Get-WinEvent -FilterHashtable @{LogName="System"; Id=7045} -MaxEvents 80',
    ],
    verify:
      "New service installations are correlated with path, account, timestamp, and mission expectations.",
  },
];

const shareChecks = [
  {
    title: "SMB shares",
    commands: [
      "Get-SmbShare",
    ],
    verify:
      "Required shares remain available and unexpected shares are investigated before removal.",
  },
  {
    title: "Share permissions",
    commands: [
      "Get-SmbShareAccess -Name <ShareName>",
    ],
    verify:
      "Share permissions follow the least privilege needed by the mission.",
  },
  {
    title: "NTFS permissions",
    commands: [
      "Get-Acl <Path> | Format-List",
    ],
    verify:
      "NTFS permissions are checked together with share permissions so effective access is understood.",
  },
  {
    title: "Active SMB sessions",
    commands: [
      "Get-SmbSession",
      "Get-SmbOpenFile",
    ],
    verify:
      "Current sessions and open files are documented before disrupting access.",
  },
];

const remoteChecks = [
  {
    title: "Remote Desktop service",
    commands: [
      "Get-Service TermService",
      "Get-NetTCPConnection -LocalPort 3389 -ErrorAction SilentlyContinue",
    ],
    verify:
      "RDP is enabled only if the mission requires it and approved administrators are the only intended users.",
  },
  {
    title: "Remote Desktop Users group",
    commands: [
      "Get-LocalGroupMember \"Remote Desktop Users\"",
    ],
    verify:
      "Membership matches approved remote-management users.",
  },
  {
    title: "PowerShell remoting",
    commands: [
      "Get-PSSessionConfiguration",
      "Get-NetTCPConnection -LocalPort 5985,5986 -ErrorAction SilentlyContinue",
    ],
    verify:
      "WinRM exposure is required, restricted, and understood before it is changed.",
  },
  {
    title: "Other listeners",
    commands: [
      "Get-NetTCPConnection -State Listen | Select-Object LocalAddress,LocalPort,OwningProcess",
    ],
    verify:
      "Every important listener is mapped to a process, service, and mission purpose.",
  },
];

const firewallChecks = [
  {
    title: "Firewall profiles",
    commands: [
      "Get-NetFirewallProfile",
    ],
    verify:
      "Required profiles are enabled and the server role still functions.",
  },
  {
    title: "Enabled inbound rules",
    commands: [
      "Get-NetFirewallRule -Direction Inbound -Enabled True",
    ],
    verify:
      "Inbound rules support required services without exposing unnecessary management or application ports.",
  },
  {
    title: "Port filters",
    commands: [
      "Get-NetFirewallRule -Enabled True | Get-NetFirewallPortFilter",
    ],
    verify:
      "Rules are reviewed by actual ports and protocols rather than display name alone.",
  },
  {
    title: "Network profiles",
    commands: [
      "Get-NetConnectionProfile",
    ],
    verify:
      "The active network category matches the intended server environment.",
  },
];

const persistenceChecks = [
  {
    title: "Scheduled tasks",
    commands: [
      "Get-ScheduledTask",
      "Get-ScheduledTask | Where-Object State -ne Disabled",
    ],
    verify:
      "Unexpected tasks are reviewed by action, trigger, run-as identity, author, and executable path.",
  },
  {
    title: "Startup locations",
    commands: [
      'Get-ChildItem "$env:ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\StartUp" -Force',
    ],
    verify:
      "Startup entries are expected or investigated before removal.",
  },
  {
    title: "Run keys",
    commands: [
      'Get-ItemProperty "HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Run"',
    ],
    verify:
      "Autorun entries point to expected applications and trusted locations.",
  },
  {
    title: "Service accounts",
    commands: [
      "Get-CimInstance Win32_Service | Select-Object Name,StartName,State,PathName",
    ],
    verify:
      "Services running under privileged or custom accounts are justified and documented.",
  },
];

const eventChecks = [
  {
    event: "4624",
    meaning: "Successful logon",
    use:
      "Correlate remote or privileged sessions with later administrative activity.",
  },
  {
    event: "4625",
    meaning: "Failed logon",
    use:
      "Review repeated failures, unusual usernames, source addresses, and timing.",
  },
  {
    event: "4672",
    meaning: "Special privileges assigned",
    use:
      "Identify privileged sessions that deserve closer correlation.",
  },
  {
    event: "4720",
    meaning: "User account created",
    use:
      "Investigate newly created accounts against the approved roster.",
  },
  {
    event: "4728",
    meaning: "Member added to global security group",
    use:
      "Important for domain-group changes such as privileged group membership.",
  },
  {
    event: "4732",
    meaning: "Member added to local security group",
    use:
      "Review additions to local Administrators and other sensitive groups.",
  },
  {
    event: "5140",
    meaning: "Network share accessed",
    use:
      "Use when share auditing is available to correlate SMB access.",
  },
  {
    event: "7045",
    meaning: "Service installed",
    use:
      "Correlate service installation with executable path, user activity, and timestamps.",
  },
];

const highPriorityFindings = [
  {
    finding: "Unapproved Domain Admin or local Administrator",
    firstMove:
      "Preserve group-membership and log evidence, confirm the mission roster, then remove privilege only if the identity is unauthorized.",
  },
  {
    finding: "Unexpected service running as a privileged account",
    firstMove:
      "Record service name, path, start account, state, installation evidence, and dependencies before containment.",
  },
  {
    finding: "Unapproved or overly broad SMB share",
    firstMove:
      "Capture share path, share permissions, NTFS permissions, open files, and sessions before making changes.",
  },
  {
    finding: "RDP exposed when not required",
    firstMove:
      "Verify the approved administration method, review group membership and firewall rules, then restrict or disable RDP if justified.",
  },
  {
    finding: "Required server role stopped or broken",
    firstMove:
      "Restore required functionality first, then investigate why the service or role changed.",
  },
  {
    finding: "Suspicious new service or scheduled task",
    firstMove:
      "Preserve executable path, account, trigger, timestamps, logs, and related network activity before disabling it.",
  },
];

const doNotBlindlyChange = [
  "Do not remove server roles just because they are unfamiliar.",
  "Do not disable SMB if the mission requires file sharing.",
  "Do not remove Domain Admins or local Administrators without checking the approved roster.",
  "Do not stop a service before checking role dependencies.",
  "Do not close RDP until you know how the server is supposed to be administered.",
  "Do not delete shares before checking active sessions and required paths.",
  "Do not modify firewall rules in bulk without testing required services afterward.",
  "Do not treat domain-joined and standalone servers as if they have identical identity models.",
];

const verificationChecks = [
  {
    area: "Identity",
    verify:
      "Approved users, administrators, and domain privilege match the mission.",
  },
  {
    area: "Roles",
    verify:
      "Required Windows Server roles and features remain installed and functional.",
  },
  {
    area: "Shares",
    verify:
      "Required SMB shares are accessible only to intended users and groups.",
  },
  {
    area: "Services",
    verify:
      "Required services are running and any disabled service was confirmed unnecessary.",
  },
  {
    area: "Remote access",
    verify:
      "RDP, WinRM, and other management paths match the approved design.",
  },
  {
    area: "Firewall",
    verify:
      "Firewall profiles are enabled and required server traffic still passes.",
  },
  {
    area: "Persistence",
    verify:
      "Scheduled tasks, startup entries, and service-based persistence match the final approved state.",
  },
  {
    area: "Logs",
    verify:
      "Important authentication, privilege, share, and service-installation evidence was preserved.",
  },
];

const finalChecklist = [
  "The Windows Server mission was reviewed before major changes.",
  "Approved local and domain privileged users match the final state.",
  "Required roles and features remain installed.",
  "Required services remain running.",
  "Required SMB shares remain available.",
  "Share and NTFS permissions were reviewed together.",
  "Active SMB sessions and open files were considered before share changes.",
  "RDP and WinRM state match the scenario.",
  "Firewall profiles are enabled as required.",
  "Listening ports were mapped to required or investigated services.",
  "Scheduled tasks and service-based persistence were reviewed.",
  "Relevant authentication, group-change, share, and service events were checked.",
  "Every major change was verified against required server functionality.",
  "The change log records what changed, why, and the result.",
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

export default function WindowsServerChecklistPage() {
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
              href="/cyberpatriot/competition-checklists/windows-11-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/linux-ubuntu-mint-checklist"
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
                Competition Checklist &middot; 03 &middot; Windows Server
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows Server Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review privileged identities, installed roles, required shares,
                active sessions, services, RDP, firewall state, persistence,
                and event evidence without breaking the server mission.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Server hardening is dependency-sensitive. A setting that looks
                unnecessary on a workstation may be essential on a file server,
                domain controller, web server, or other role-based system.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Platform</span>
                  <span className="font-bold text-white">Windows Server</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Protect first</span>
                  <span className="font-bold text-white">Required roles</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Review closely</span>
                  <span className="font-bold text-white">Privilege + Shares</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish with</span>
                  <span className="font-bold text-white">Service verification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Server rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Preserve the service mission while reducing unnecessary exposure
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Do not treat a server like a normal workstation. Roles, service
            accounts, management paths, shares, and network listeners may exist
            because the server is supposed to provide them.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Opening pass"
            title="Understand the server before deep remediation"
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

      <CommandSection
        label="Identity & privilege"
        title="Confirm who is allowed to administer the server"
        items={identityChecks}
      />

      <CommandSection
        label="Roles & services"
        title="Protect required server functionality"
        items={roleChecks}
      />

      <CommandSection
        label="Shares & permissions"
        title="Review SMB access before changing it"
        items={shareChecks}
      />

      <CommandSection
        label="Remote administration"
        title="Restrict management access without locking out approved admins"
        items={remoteChecks}
      />

      <CommandSection
        label="Firewall"
        title="Reduce exposure while preserving required traffic"
        items={firewallChecks}
      />

      <CommandSection
        label="Persistence"
        title="Review scheduled and automatic execution"
        items={persistenceChecks}
      />

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Event quick reference"
            title="Server events worth correlating"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {eventChecks.map((item) => (
              <div
                key={item.event}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-2xl font-black text-cyan-300">{item.event}</p>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.meaning}
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
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-priority findings
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Investigate the finding before changing the server
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
            Do not blindly change
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Common Windows Server overreactions
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {doNotBlindlyChange.map((item, index) => (
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
            title="Prove the server still performs its required role"
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
            Windows Server final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Finish only when security and required services both verify
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
              href="/cyberpatriot/competition-checklists/windows-11-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/linux-ubuntu-mint-checklist"
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
