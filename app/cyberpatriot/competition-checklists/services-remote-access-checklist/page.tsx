import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openingChecks = [
  {
    item: "Read the mission before stopping, disabling, uninstalling, or reconfiguring any service.",
    why:
      "A listening service may be required for file sharing, administration, web access, monitoring, backup, directory services, or another competition requirement.",
  },
  {
    item: "Record which remote-access methods are explicitly required.",
    why:
      "RDP, SSH, WinRM, VTY access, or other management channels should match the scenario instead of a generic hardening rule.",
  },
  {
    item: "Map listeners to services and processes before changing them.",
    why:
      "A port number alone does not tell you whether the listener is malicious, unnecessary, or mission-critical.",
  },
  {
    item: "Identify service dependencies and service accounts.",
    why:
      "Stopping one service can break another role, and changing a service identity can disrupt required functionality.",
  },
  {
    item: "Preserve evidence for unknown services or listeners.",
    why:
      "Record names, paths, accounts, PIDs, ports, timestamps, and logs before remediation changes the state.",
  },
  {
    item: "Plan how required functionality will be tested after each major change.",
    why:
      "A service change is not complete until the mission function is verified.",
  },
];

const windowsServiceChecks = [
  {
    title: "Running services",
    commands: [
      "Get-Service | Where-Object Status -eq Running | Sort-Object Name",
    ],
    verify:
      "Every unusual running service is classified as required, expected, suspicious, or unresolved.",
  },
  {
    title: "Service details",
    commands: [
      "Get-CimInstance Win32_Service | Select-Object Name,State,StartMode,StartName,PathName",
    ],
    verify:
      "Service path, startup mode, account, and current state are understood before modification.",
  },
  {
    title: "Service installation evidence",
    commands: [
      'Get-WinEvent -FilterHashtable @{LogName="System"; Id=7045} -MaxEvents 100',
    ],
    verify:
      "Recently installed services are correlated with executable paths and timestamps.",
  },
  {
    title: "Service dependencies",
    commands: [
      "Get-Service <ServiceName> -DependentServices",
      "Get-Service <ServiceName> -RequiredServices",
    ],
    verify:
      "Required dependencies are known before a service is stopped or disabled.",
  },
];

const windowsRemoteChecks = [
  {
    title: "RDP service",
    commands: [
      "Get-Service TermService",
      "Get-NetTCPConnection -LocalPort 3389 -ErrorAction SilentlyContinue",
    ],
    verify:
      "RDP state matches the mission and the listener is present only when required.",
  },
  {
    title: "RDP users",
    commands: [
      'Get-LocalGroupMember "Remote Desktop Users"',
    ],
    verify:
      "Only approved remote users retain access.",
  },
  {
    title: "WinRM",
    commands: [
      "Get-Service WinRM",
      "Get-NetTCPConnection -LocalPort 5985,5986 -ErrorAction SilentlyContinue",
    ],
    verify:
      "PowerShell remoting is enabled only when needed and is understood before changes.",
  },
  {
    title: "Firewall exposure",
    commands: [
      "Get-NetFirewallRule -Enabled True | Get-NetFirewallPortFilter",
    ],
    verify:
      "Firewall rules expose only the services the scenario requires.",
  },
];

const linuxServiceChecks = [
  {
    title: "Running services",
    commands: [
      "systemctl --type=service --state=running",
    ],
    verify:
      "Unexpected daemons are investigated by purpose, package, user, and executable path.",
  },
  {
    title: "Enabled services",
    commands: [
      "systemctl list-unit-files --type=service --state=enabled",
    ],
    verify:
      "Automatic startup is justified by mission requirements.",
  },
  {
    title: "Service configuration",
    commands: [
      "systemctl status <service>",
      "systemctl cat <service>",
    ],
    verify:
      "The unit file, executable, environment, and dependencies are reviewed before changing state.",
  },
  {
    title: "Service logs",
    commands: [
      "journalctl -u <service> --no-pager -n 100",
    ],
    verify:
      "Recent restarts, failures, and suspicious activity are preserved before remediation.",
  },
];

const linuxRemoteChecks = [
  {
    title: "SSH service",
    commands: [
      "systemctl status ssh",
      "systemctl status sshd",
    ],
    verify:
      "SSH state matches the mission.",
  },
  {
    title: "SSH configuration",
    commands: [
      "sudo sshd -T 2>/dev/null",
      "sudo grep -RInE 'PermitRootLogin|PasswordAuthentication|AllowUsers|AllowGroups' /etc/ssh 2>/dev/null",
    ],
    verify:
      "Remote login settings restrict exposure without blocking approved administrators.",
  },
  {
    title: "SSH listener",
    commands: [
      "sudo ss -lntp | grep ':22'",
    ],
    verify:
      "The listener is expected, bound appropriately, and owned by the correct process.",
  },
  {
    title: "Authentication evidence",
    commands: [
      "sudo grep -Ei 'sshd.*(Accepted|Failed)' /var/log/auth.log | tail -n 100",
      "sudo journalctl -u ssh --no-pager -n 100",
    ],
    verify:
      "Successful and failed remote sessions are correlated with approved users and times.",
  },
];

const ciscoRemoteChecks = [
  {
    title: "VTY lines",
    commands: [
      "show running-config | section line vty",
    ],
    verify:
      "Remote management access methods and ACL restrictions match the mission.",
  },
  {
    title: "SSH state",
    commands: [
      "show ip ssh",
    ],
    verify:
      "SSH is available when required and insecure alternatives are not enabled unnecessarily.",
  },
  {
    title: "Local management users",
    commands: [
      "show running-config | include username",
    ],
    verify:
      "Only approved local device administrators remain.",
  },
  {
    title: "Management ACLs",
    commands: [
      "show access-lists",
      "show running-config | include access-class",
    ],
    verify:
      "VTY access is restricted to approved management sources when required.",
  },
];

const listenerChecks = [
  {
    platform: "Windows",
    commands: [
      "Get-NetTCPConnection -State Listen | Select-Object LocalAddress,LocalPort,OwningProcess",
      "Get-Process -Id <PID>",
    ],
    goal:
      "Tie each important listener to a process and then to the related Windows service or application.",
  },
  {
    platform: "Linux",
    commands: [
      "sudo ss -lntup",
      "ps -fp <PID>",
    ],
    goal:
      "Tie sockets to the owning process, executable, and service unit.",
  },
  {
    platform: "Cisco",
    commands: [
      "show control-plane host open-ports",
      "show running-config | section line vty",
    ],
    goal:
      "Confirm exposed management services and required device-control protocols.",
  },
];

const decisionModel = [
  {
    state: "Required and secure",
    action:
      "Leave it enabled, document why it is needed, and verify the protection around it.",
  },
  {
    state: "Required but overexposed",
    action:
      "Keep the service, reduce unnecessary access, and verify required clients still connect.",
  },
  {
    state: "Not required and inactive",
    action:
      "Disable automatic start if justified, then verify nothing depends on it.",
  },
  {
    state: "Not required and listening",
    action:
      "Preserve evidence, confirm no dependency exists, then stop or disable it.",
  },
  {
    state: "Unknown",
    action:
      "Investigate executable path, package, account, logs, listeners, dependencies, and mission context before changing anything.",
  },
  {
    state: "Suspicious",
    action:
      "Preserve service, process, network, path, and log evidence before containment.",
  },
];

const highPriorityFindings = [
  {
    finding: "RDP enabled with unapproved users",
    firstMove:
      "Record group membership, recent logons, service state, and firewall exposure before removing access.",
  },
  {
    finding: "SSH enabled when the mission does not require it",
    firstMove:
      "Preserve login and configuration evidence, confirm no approved administration depends on it, then disable or restrict it.",
  },
  {
    finding: "Unknown service listening externally",
    firstMove:
      "Record service name, executable path, account, PID, port, connections, logs, and install time before containment.",
  },
  {
    finding: "Service running as excessive privilege",
    firstMove:
      "Identify the required service function and minimum rights before changing its account.",
  },
  {
    finding: "Broad firewall or ACL exposure",
    firstMove:
      "Confirm required clients and ports, then narrow only the unnecessary exposure.",
  },
  {
    finding: "Required service stopped",
    firstMove:
      "Restore mission-critical functionality first, verify it, then investigate why the state changed.",
  },
];

const doNotBlindlyChange = [
  "Do not disable every service you do not recognize.",
  "Do not close a port until you know which service owns it.",
  "Do not disable RDP if the competition mission requires remote administration.",
  "Do not disable SSH merely because it is listening.",
  "Do not remove a service account before identifying dependencies.",
  "Do not change firewall policy in bulk just to reduce the number of open ports.",
  "Do not restart a suspicious service before preserving logs and process context.",
  "Do not assume a service is safe only because its display name sounds legitimate.",
];

const verificationChecks = [
  {
    area: "Required services",
    verify:
      "Every mission-required service is running and usable.",
  },
  {
    area: "Unneeded services",
    verify:
      "Services changed during remediation were confirmed unnecessary and remain disabled as intended.",
  },
  {
    area: "RDP",
    verify:
      "RDP state, users, listener, and firewall exposure match the scenario.",
  },
  {
    area: "SSH",
    verify:
      "SSH state, allowed users, listener, and authentication settings match the mission.",
  },
  {
    area: "WinRM / management",
    verify:
      "Remote management is available only where required and from approved sources.",
  },
  {
    area: "Listeners",
    verify:
      "Every significant listener is mapped to a known service, process, or approved device function.",
  },
  {
    area: "Dependencies",
    verify:
      "No required role, application, share, or automation broke after service changes.",
  },
  {
    area: "Evidence",
    verify:
      "Unknown or suspicious service evidence was preserved before containment.",
  },
];

const finalChecklist = [
  "The mission was reviewed before service or remote-access changes.",
  "Required services were identified and protected.",
  "Unknown services were investigated by path, account, state, and dependencies.",
  "Listeners were mapped to processes or services.",
  "RDP state matches the mission.",
  "RDP users match the approved roster.",
  "SSH state matches the mission.",
  "SSH configuration restricts access appropriately.",
  "WinRM or other management services were reviewed where relevant.",
  "Firewall or ACL exposure matches required clients and ports.",
  "Service accounts were reviewed before privilege changes.",
  "Suspicious services were documented before containment.",
  "Required functionality was retested after every high-impact change.",
  "The change log records service and remote-access remediation.",
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

export default function ServicesRemoteAccessChecklistPage() {
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
              href="/cyberpatriot/competition-checklists/accounts-privilege-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/evidence-change-log-checklist"
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
                Competition Checklist &middot; 08 &middot; Services
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Services &amp; Remote Access Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Identify required services, investigate unknown listeners,
                review RDP, SSH, WinRM, VTY access, service accounts, firewall
                exposure, and dependencies before disabling anything
                network-facing.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The objective is not to minimize the number of running services.
                The objective is to preserve required functionality while
                reducing unnecessary or suspicious exposure.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>First identify</span>
                  <span className="font-bold text-white">Required services</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Map</span>
                  <span className="font-bold text-white">Ports to processes</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Review</span>
                  <span className="font-bold text-white">Remote access</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish with</span>
                  <span className="font-bold text-white">Function test</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Service rule
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Required does not mean unrestricted, and unfamiliar does not mean unnecessary
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            A required service can still be hardened by limiting who can reach
            it, while an unfamiliar service must be investigated before it is
            stopped. Make the smallest change that solves the confirmed problem.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Opening pass"
            title="Understand service purpose before changing state"
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
        label="Windows services"
        title="Review service state, identity, path, and dependencies"
        items={windowsServiceChecks}
      />

      <CommandSection
        label="Windows remote access"
        title="Review RDP, WinRM, users, and firewall exposure"
        items={windowsRemoteChecks}
      />

      <CommandSection
        label="Linux services"
        title="Review systemd services before disabling them"
        items={linuxServiceChecks}
      />

      <CommandSection
        label="Linux remote access"
        title="Review SSH configuration and evidence"
        items={linuxRemoteChecks}
      />

      <CommandSection
        label="Cisco remote access"
        title="Protect VTY and SSH management paths"
        items={ciscoRemoteChecks}
      />

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Listener mapping"
            title="Turn ports into service context"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {listenerChecks.map((item) => (
              <div
                key={item.platform}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.platform}</h3>

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
                  {item.goal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision model
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Match the response to the actual service state
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {decisionModel.map((item) => (
              <div
                key={item.state}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.state}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.action}
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
            Preserve evidence before removing exposure
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
            Common service-hardening mistakes
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
            title="Prove required services still work after remediation"
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
            Services &amp; Remote Access final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Finish with required functionality and controlled exposure
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
              href="/cyberpatriot/competition-checklists/accounts-privilege-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/evidence-change-log-checklist"
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
