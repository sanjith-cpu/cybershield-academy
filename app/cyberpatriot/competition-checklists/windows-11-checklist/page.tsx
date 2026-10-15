import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openingChecks = [
  {
    item: "Read the Windows 11 image requirements before changing accounts, services, remote access, or security settings.",
    why:
      "The competition scenario may require specific users, applications, services, shares, or remote-access behavior.",
  },
  {
    item: "Record approved local users and approved administrators.",
    why:
      "This gives you a trusted reference before changing account state or Administrators membership.",
  },
  {
    item: "Confirm Defender, Firewall, and Windows Update status early.",
    why:
      "Core protections should be understood before lower-priority cleanup begins.",
  },
  {
    item: "Capture the current service, scheduled-task, startup, process, and listener state.",
    why:
      "A baseline helps you identify what changed after remediation and preserves evidence before state-changing actions.",
  },
  {
    item: "Write down any required remote-access method.",
    why:
      "RDP or another service should not be disabled until the mission confirms it is unnecessary.",
  },
  {
    item: "Record high-risk findings before acting.",
    why:
      "Unknown privileged accounts, disabled protection, suspicious persistence, or active suspicious processes should be prioritized.",
  },
];

const accountChecks = [
  {
    title: "Local users",
    commands: [
      "Get-LocalUser",
      "net user",
    ],
    verify:
      "Every local account is approved, expected, disabled when appropriate, and documented before removal.",
  },
  {
    title: "Administrators group",
    commands: [
      "Get-LocalGroupMember Administrators",
      "net localgroup Administrators",
    ],
    verify:
      "Only approved administrators retain elevated membership.",
  },
  {
    title: "Other local groups",
    commands: [
      "Get-LocalGroup",
      "Get-LocalGroupMember \"Remote Desktop Users\"",
    ],
    verify:
      "Membership in security-sensitive groups matches the scenario.",
  },
  {
    title: "Recent account changes",
    commands: [
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4720,4722,4725,4732,4733} -MaxEvents 80',
    ],
    verify:
      "Unexpected account creation, enable/disable activity, or privileged group changes are investigated.",
  },
];

const securityChecks = [
  {
    title: "Microsoft Defender",
    commands: [
      "Get-MpComputerStatus",
      "Get-MpPreference",
    ],
    verify:
      "Antivirus, real-time protection, signatures, and relevant protection features remain enabled unless the scenario states otherwise.",
  },
  {
    title: "Windows Firewall",
    commands: [
      "Get-NetFirewallProfile",
      "Get-NetFirewallRule | Where-Object Enabled -eq True",
    ],
    verify:
      "Domain, Private, and Public profiles are enabled as appropriate and required application rules still function.",
  },
  {
    title: "Windows Update",
    commands: [
      "Get-Service wuauserv",
      "Get-HotFix | Sort-Object InstalledOn -Descending | Select-Object -First 20",
    ],
    verify:
      "Update services are available and the machine is not obviously missing required security maintenance.",
  },
  {
    title: "Security Center services",
    commands: [
      "Get-Service SecurityHealthService,WinDefend,MpsSvc",
    ],
    verify:
      "Core Windows security services are running or configured as expected.",
  },
];

const serviceChecks = [
  {
    title: "Running services",
    commands: [
      "Get-Service | Where-Object Status -eq Running | Sort-Object Name",
    ],
    verify:
      "Every unusual service is compared with the mission before being disabled.",
  },
  {
    title: "Automatic services",
    commands: [
      "Get-CimInstance Win32_Service | Where-Object StartMode -eq Auto | Select-Object Name,State,StartName,PathName",
    ],
    verify:
      "Automatic services have expected names, accounts, and executable paths.",
  },
  {
    title: "Remote Desktop",
    commands: [
      "Get-Service TermService",
      "Get-NetTCPConnection -LocalPort 3389 -ErrorAction SilentlyContinue",
      "Get-LocalGroupMember \"Remote Desktop Users\"",
    ],
    verify:
      "RDP state matches the mission and only approved users can use it.",
  },
  {
    title: "Other listeners",
    commands: [
      "Get-NetTCPConnection -State Listen | Select-Object LocalAddress,LocalPort,OwningProcess",
    ],
    verify:
      "Unexpected listeners are mapped to processes and services before remediation.",
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
      "Unexpected tasks are investigated by action, trigger, author, run-as identity, and path.",
  },
  {
    title: "Startup folders",
    commands: [
      'Get-ChildItem "$env:APPDATA\\Microsoft\\Windows\\Start Menu\\Programs\\Startup" -Force',
      'Get-ChildItem "$env:ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\StartUp" -Force',
    ],
    verify:
      "Startup entries are expected, required, or documented before removal.",
  },
  {
    title: "Run keys",
    commands: [
      'Get-ItemProperty "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Run"',
      'Get-ItemProperty "HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Run"',
    ],
    verify:
      "Autorun entries point to expected software and locations.",
  },
  {
    title: "Services as persistence",
    commands: [
      'Get-WinEvent -FilterHashtable @{LogName="System"; Id=7045} -MaxEvents 50',
    ],
    verify:
      "Recently installed services are compared with executable paths and mission requirements.",
  },
];

const processChecks = [
  {
    title: "Process inventory",
    commands: [
      "Get-Process | Sort-Object ProcessName",
    ],
    verify:
      "Unknown processes are investigated by path, owner, parent, command line, and network activity before termination.",
  },
  {
    title: "Process details",
    commands: [
      "Get-CimInstance Win32_Process | Select-Object ProcessId,ParentProcessId,Name,ExecutablePath,CommandLine",
    ],
    verify:
      "Suspicious-looking names are not judged without checking path and execution context.",
  },
  {
    title: "Process-to-network mapping",
    commands: [
      "Get-NetTCPConnection | Select-Object LocalAddress,LocalPort,RemoteAddress,RemotePort,State,OwningProcess",
    ],
    verify:
      "Active connections are tied to owning processes so network findings have context.",
  },
  {
    title: "Process creation evidence",
    commands: [
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4688} -MaxEvents 100',
    ],
    verify:
      "Execution evidence is preserved when auditing is available.",
  },
];

const networkChecks = [
  {
    title: "IP configuration",
    commands: [
      "Get-NetIPConfiguration",
      "ipconfig /all",
    ],
    verify:
      "Addresses, gateways, DNS, and adapter state match the expected environment.",
  },
  {
    title: "Active connections",
    commands: [
      "Get-NetTCPConnection | Sort-Object State,RemoteAddress",
    ],
    verify:
      "Unexpected external connections are investigated with process ownership.",
  },
  {
    title: "Listening ports",
    commands: [
      "Get-NetTCPConnection -State Listen | Sort-Object LocalPort",
    ],
    verify:
      "Every important listener is associated with a required or investigated service.",
  },
  {
    title: "Shares",
    commands: [
      "Get-SmbShare",
      "Get-SmbSession",
    ],
    verify:
      "Unexpected shares or sessions are investigated without breaking required collaboration.",
  },
];

const eventChecks = [
  {
    event: "4624",
    meaning: "Successful logon",
    use:
      "Correlate approved or suspicious sessions with later account, process, or service activity.",
  },
  {
    event: "4625",
    meaning: "Failed logon",
    use:
      "Identify repeated authentication failures and unusual source patterns.",
  },
  {
    event: "4672",
    meaning: "Special privileges assigned",
    use:
      "Review privileged sessions and correlate them with account or system changes.",
  },
  {
    event: "4688",
    meaning: "Process creation",
    use:
      "Use when available to connect an executable, user, parent process, and command line.",
  },
  {
    event: "4720",
    meaning: "User account created",
    use:
      "Investigate new local identities and whether they match the mission roster.",
  },
  {
    event: "4732",
    meaning: "Member added to local group",
    use:
      "Investigate unexpected additions to Administrators or other privileged groups.",
  },
  {
    event: "7045",
    meaning: "Service installed",
    use:
      "Correlate newly installed services with executable paths and timestamps.",
  },
];

const highPriorityFindings = [
  {
    finding: "Unapproved user in Administrators",
    firstMove:
      "Preserve account and event evidence, verify the roster, then remove or disable only if confirmed unauthorized.",
  },
  {
    finding: "Defender or Firewall disabled",
    firstMove:
      "Confirm the scenario does not require the state, re-enable protection, and verify required applications still work.",
  },
  {
    finding: "Unknown process with active outbound connection",
    firstMove:
      "Record PID, path, parent, command line, hash, and network details before containment.",
  },
  {
    finding: "Suspicious scheduled task or service",
    firstMove:
      "Record action, trigger, account, path, and related logs before disabling or removing it.",
  },
  {
    finding: "RDP enabled when not required",
    firstMove:
      "Verify no required administration depends on it, then restrict or disable it and re-check management functionality.",
  },
  {
    finding: "Unexpected SMB share",
    firstMove:
      "Confirm whether it is required, record permissions and sessions, then remove only if justified.",
  },
];

const doNotBlindlyChange = [
  "Do not delete every account you do not recognize without checking the mission.",
  "Do not disable all services marked unfamiliar.",
  "Do not turn off RDP until the scenario confirms it is unnecessary.",
  "Do not remove scheduled tasks only because their names look unusual.",
  "Do not terminate a process before preserving useful process and network evidence.",
  "Do not remove shares before verifying whether users or services depend on them.",
  "Do not change firewall rules in bulk without understanding the required applications.",
  "Do not assume a clean-looking desktop means the system is secure.",
];

const verificationChecks = [
  {
    area: "Accounts",
    verify:
      "Approved users remain, unauthorized users are handled, and Administrators membership matches the mission.",
  },
  {
    area: "Defender",
    verify:
      "Microsoft Defender is healthy and real-time protection is active.",
  },
  {
    area: "Firewall",
    verify:
      "Required firewall profiles are enabled and approved applications still communicate.",
  },
  {
    area: "Updates",
    verify:
      "Windows Update services remain usable and no remediation broke update functionality.",
  },
  {
    area: "Services",
    verify:
      "Required services are running and disabled services were actually unnecessary.",
  },
  {
    area: "Persistence",
    verify:
      "Scheduled tasks, startup entries, and service-based persistence match the final approved state.",
  },
  {
    area: "Network",
    verify:
      "Expected addressing, listeners, connections, shares, and remote-access behavior remain functional.",
  },
  {
    area: "Evidence",
    verify:
      "Important logs, paths, timestamps, hashes, and notes were preserved before high-impact changes.",
  },
];

const finalChecklist = [
  "Scenario requirements were reviewed before Windows changes.",
  "Approved local users and administrators match the final state.",
  "Defender is enabled and healthy.",
  "Windows Firewall profiles are enabled as required.",
  "Windows Update remains functional.",
  "Required services remain available.",
  "Unneeded remote access is disabled only when justified.",
  "Scheduled tasks and startup locations were reviewed.",
  "Suspicious processes were investigated before containment.",
  "Listening ports and active connections were mapped to processes.",
  "Shares and sessions were reviewed without breaking required access.",
  "Relevant event logs were checked for account, privilege, process, and service changes.",
  "Every major remediation was verified.",
  "The change log records what was changed and why.",
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

export default function Windows11ChecklistPage() {
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
              href="/cyberpatriot/competition-checklists/competition-start-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/windows-server-checklist"
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
                Competition Checklist &middot; 02 &middot; Windows 11
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows 11 Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                A competition-ready reference for accounts, Defender, Firewall,
                updates, services, persistence, processes, networking, remote
                access, shares, and Windows event evidence.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Use this after reading the image-specific requirements. The
                checklist helps you inspect consistently without replacing the
                scenario or encouraging blind hardening.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Platform</span>
                  <span className="font-bold text-white">Windows 11</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Start with</span>
                  <span className="font-bold text-white">Accounts + Protection</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Preserve</span>
                  <span className="font-bold text-white">Logs + Process State</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish with</span>
                  <span className="font-bold text-white">Full verification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Windows rule
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Verify the mission before disabling anything
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Windows has many services, scheduled tasks, built-in accounts, and
            listeners that can look unfamiliar. Investigate purpose and
            dependency first, then make the smallest justified change.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Opening pass" title="Do these checks before deep hardening" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {openingChecks.map((item, index) => (
              <div key={item.item} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="flex gap-4">
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-black text-white">{item.item}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{item.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {[
        ["Accounts & privilege", "Confirm identities before account cleanup", accountChecks],
        ["Core security", "Check Defender, Firewall, updates, and security services", securityChecks],
        ["Services & remote access", "Know what is listening before you disable it", serviceChecks],
        ["Persistence", "Review scheduled and automatic execution", persistenceChecks],
        ["Processes", "Investigate execution before containment", processChecks],
        ["Network & shares", "Map connections, listeners, and required access", networkChecks],
      ].map(([label, title, items]) => (
        <section key={label as string} className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
            <SectionHeading label={label as string} title={title as string} />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {(items as typeof accountChecks).map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                  <div className="mt-5 grid gap-3">
                    {item.commands.map((command) => (
                      <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
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
      ))}

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Event quick reference" title="Windows events worth checking during investigation" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {eventChecks.map((item) => (
              <div key={item.event} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-2xl font-black text-cyan-300">{item.event}</p>
                <h3 className="mt-3 text-lg font-black text-white">{item.meaning}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.use}</p>
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
            Preserve the evidence, then address the actual risk
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highPriorityFindings.map((item) => (
              <div key={item.finding} className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5">
                <h3 className="font-black text-white">{item.finding}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.firstMove}</p>
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
            Common Windows competition overreactions
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {doNotBlindlyChange.map((item, index) => (
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
          <SectionHeading label="Verification sweep" title="Re-check the system after remediation" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {verificationChecks.map((item) => (
              <div key={item.area} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.verify}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Windows 11 final checklist
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Finish only when the workstation still satisfies the mission
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalChecklist.map((item, index) => (
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
              href="/cyberpatriot/competition-checklists/competition-start-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/windows-server-checklist"
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
