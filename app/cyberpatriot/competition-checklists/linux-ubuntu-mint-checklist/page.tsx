import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openingChecks = [
  {
    item: "Read the Linux image requirements before changing users, sudo, SSH, services, packages, or scheduled activity.",
    why:
      "Ubuntu and Mint competition images may require specific accounts, services, software, and remote-access behavior.",
  },
  {
    item: "Record approved users and approved sudo-capable users.",
    why:
      "This gives you a trusted reference before disabling accounts or changing privileged group membership.",
  },
  {
    item: "Confirm required services and applications.",
    why:
      "Do not stop SSH, web services, database services, backup jobs, or other daemons until the mission confirms they are unnecessary.",
  },
  {
    item: "Capture the current user, group, sudo, service, process, listener, cron, and timer state.",
    why:
      "A baseline helps you identify pre-existing conditions and verify the effect of later changes.",
  },
  {
    item: "Check authentication and system logs early.",
    why:
      "Logs can reveal suspicious logins, sudo activity, failed authentication, service restarts, and scheduled behavior before remediation changes the evidence.",
  },
  {
    item: "Separate active risk from ordinary hardening.",
    why:
      "Unknown privileged users, suspicious persistence, disabled security controls, and unexpected listeners deserve attention before cosmetic cleanup.",
  },
];

const identityChecks = [
  {
    title: "Local users",
    commands: [
      "cut -d: -f1,3,4,7 /etc/passwd",
      "getent passwd",
    ],
    verify:
      "Every interactive user is approved, expected, or documented before account changes.",
  },
  {
    title: "Privileged groups",
    commands: [
      "getent group sudo",
      "getent group adm",
    ],
    verify:
      "Only approved users retain membership in privilege-sensitive groups.",
  },
  {
    title: "Effective sudo rights",
    commands: [
      "sudo -l -U <username>",
    ],
    verify:
      "Review what the user can actually run instead of assuming group membership tells the full story.",
  },
  {
    title: "Locked or disabled accounts",
    commands: [
      "sudo passwd -S <username>",
      "sudo awk -F: '($2==\"!\" || $2==\"*\"){print $1}' /etc/shadow",
    ],
    verify:
      "Disabled accounts are compared with the mission before re-enabling or deleting them.",
  },
];

const sudoChecks = [
  {
    title: "Main sudoers file",
    commands: [
      "sudo visudo -c",
      "sudo cat /etc/sudoers",
    ],
    verify:
      "Syntax is valid and rules grant only required privilege.",
  },
  {
    title: "sudoers.d entries",
    commands: [
      "sudo ls -la /etc/sudoers.d",
      "sudo grep -RInE 'NOPASSWD|ALL=\\(ALL' /etc/sudoers /etc/sudoers.d 2>/dev/null",
    ],
    verify:
      "Unexpected NOPASSWD or broad ALL rules are investigated before removal.",
  },
  {
    title: "Group-based privilege",
    commands: [
      "getent group sudo",
      "id <username>",
    ],
    verify:
      "Privilege through group membership matches the approved roster.",
  },
  {
    title: "Sudo activity",
    commands: [
      "sudo grep -i sudo /var/log/auth.log | tail -n 100",
      "sudo journalctl _COMM=sudo --no-pager -n 100",
    ],
    verify:
      "Suspicious administrative activity is correlated with users and timestamps.",
  },
];

const permissionChecks = [
  {
    title: "Sensitive file permissions",
    commands: [
      "ls -l /etc/passwd /etc/shadow /etc/group /etc/gshadow",
    ],
    verify:
      "Sensitive credential and identity files are not broadly writable or readable beyond expected defaults.",
  },
  {
    title: "World-writable files",
    commands: [
      "sudo find /etc /usr/local /opt -xdev -type f -perm -0002 -ls 2>/dev/null",
    ],
    verify:
      "World-writable configuration or executable files are investigated because they can enable tampering.",
  },
  {
    title: "SUID / SGID files",
    commands: [
      "sudo find / -xdev -type f \\( -perm -4000 -o -perm -2000 \\) -ls 2>/dev/null",
    ],
    verify:
      "Unexpected privileged executables are compared with known system packages and mission requirements.",
  },
  {
    title: "ACLs",
    commands: [
      "getfacl <path>",
    ],
    verify:
      "File ACLs are checked when ordinary mode bits do not explain effective access.",
  },
];

const serviceChecks = [
  {
    title: "Running services",
    commands: [
      "systemctl --type=service --state=running",
    ],
    verify:
      "Every unusual daemon is investigated before it is stopped or disabled.",
  },
  {
    title: "Enabled services",
    commands: [
      "systemctl list-unit-files --type=service --state=enabled",
    ],
    verify:
      "Automatic startup matches mission requirements.",
  },
  {
    title: "Service details",
    commands: [
      "systemctl status <service>",
      "systemctl cat <service>",
    ],
    verify:
      "Review executable paths, environment, dependencies, and unit configuration before remediation.",
  },
  {
    title: "Recent service activity",
    commands: [
      "journalctl -u <service> --no-pager -n 100",
    ],
    verify:
      "Restarts, crashes, or unusual activity are preserved as evidence before changes.",
  },
];

const sshChecks = [
  {
    title: "SSH service",
    commands: [
      "systemctl status ssh",
      "systemctl status sshd",
    ],
    verify:
      "SSH is running only if required by the mission.",
  },
  {
    title: "SSH configuration",
    commands: [
      "sudo sshd -T 2>/dev/null",
      "sudo grep -RInE 'PermitRootLogin|PasswordAuthentication|AllowUsers|AllowGroups' /etc/ssh 2>/dev/null",
    ],
    verify:
      "Remote access settings restrict exposure without blocking approved administration.",
  },
  {
    title: "SSH listeners",
    commands: [
      "sudo ss -lntp | grep ':22'",
    ],
    verify:
      "The listener is expected, required, and bound appropriately.",
  },
  {
    title: "SSH authentication evidence",
    commands: [
      "sudo grep -Ei 'sshd.*(Accepted|Failed)' /var/log/auth.log | tail -n 100",
      "sudo journalctl -u ssh --no-pager -n 100",
    ],
    verify:
      "Successful and failed remote logins are correlated with approved users and source systems.",
  },
];

const persistenceChecks = [
  {
    title: "User cron",
    commands: [
      "crontab -l",
      "sudo crontab -l",
    ],
    verify:
      "Scheduled commands are expected and required before removal.",
  },
  {
    title: "System cron",
    commands: [
      "sudo ls -la /etc/cron.d /etc/cron.daily /etc/cron.hourly /etc/cron.weekly /etc/cron.monthly",
      "sudo cat /etc/crontab",
    ],
    verify:
      "Unexpected scripts or jobs are reviewed by owner, command, path, and schedule.",
  },
  {
    title: "Systemd timers",
    commands: [
      "systemctl list-timers --all",
    ],
    verify:
      "Unexpected timers are correlated with their associated service units.",
  },
  {
    title: "Shell startup files",
    commands: [
      "grep -RInE 'curl|wget|nc|bash -c|python|perl' ~/.bashrc ~/.profile /etc/profile /etc/profile.d 2>/dev/null",
    ],
    verify:
      "Unusual startup commands are investigated before deletion.",
  },
];

const processChecks = [
  {
    title: "Process inventory",
    commands: [
      "ps auxf",
    ],
    verify:
      "Unknown processes are reviewed by user, parent, command line, executable path, and network activity.",
  },
  {
    title: "Process tree",
    commands: [
      "pstree -ap",
    ],
    verify:
      "Parent-child relationships are used to understand how suspicious processes started.",
  },
  {
    title: "Open files",
    commands: [
      "sudo lsof -p <PID>",
    ],
    verify:
      "Files, sockets, and working directories help explain process behavior.",
  },
  {
    title: "Executable path",
    commands: [
      "readlink -f /proc/<PID>/exe",
      "tr '\\0' ' ' < /proc/<PID>/cmdline",
    ],
    verify:
      "The real executable and command line are captured before containment.",
  },
];

const networkChecks = [
  {
    title: "IP configuration",
    commands: [
      "ip addr",
      "ip route",
    ],
    verify:
      "Addresses, interfaces, gateways, and routes match the intended environment.",
  },
  {
    title: "Listening sockets",
    commands: [
      "sudo ss -lntup",
    ],
    verify:
      "Every important listener is tied to a process and service purpose.",
  },
  {
    title: "Active connections",
    commands: [
      "sudo ss -ntup",
    ],
    verify:
      "Unexpected remote connections are correlated with owning processes.",
  },
  {
    title: "Firewall state",
    commands: [
      "sudo ufw status verbose",
      "sudo nft list ruleset 2>/dev/null",
    ],
    verify:
      "Firewall policy preserves required services while reducing unnecessary exposure.",
  },
];

const logChecks = [
  {
    source: "auth.log",
    purpose: "Authentication, SSH, sudo",
    commands: [
      "sudo tail -n 100 /var/log/auth.log",
    ],
  },
  {
    source: "journal",
    purpose: "Services and system activity",
    commands: [
      "sudo journalctl --since '2 hours ago' --no-pager",
    ],
  },
  {
    source: "syslog",
    purpose: "General system events",
    commands: [
      "sudo tail -n 100 /var/log/syslog",
    ],
  },
  {
    source: "last",
    purpose: "Recent user sessions",
    commands: [
      "last -a | head -n 50",
      "lastb -a | head -n 50",
    ],
  },
];

const highPriorityFindings = [
  {
    finding: "Unapproved user with sudo",
    firstMove:
      "Preserve identity, group, sudoers, and authentication evidence, confirm the roster, then remove excess privilege if unauthorized.",
  },
  {
    finding: "Unexpected SSH exposure",
    firstMove:
      "Confirm whether SSH is required, preserve login evidence, review configuration and listeners, then restrict or disable only if justified.",
  },
  {
    finding: "Suspicious process with active network connection",
    firstMove:
      "Record PID, executable path, command line, parent, open files, and network details before containment.",
  },
  {
    finding: "Unknown cron job or systemd timer",
    firstMove:
      "Record the schedule, command, owner, path, associated unit, and timestamps before disabling it.",
  },
  {
    finding: "World-writable sensitive configuration",
    firstMove:
      "Record current mode, ownership, ACLs, and expected package defaults before correcting permissions.",
  },
  {
    finding: "Required service stopped or broken",
    firstMove:
      "Restore mission-critical functionality first, then investigate why the service state changed.",
  },
];

const doNotBlindlyChange = [
  "Do not delete every unfamiliar user before checking the approved roster.",
  "Do not remove sudo from a user until you verify whether the mission requires it.",
  "Do not disable SSH simply because port 22 is listening.",
  "Do not stop all unfamiliar services.",
  "Do not delete cron jobs or timers before recording what they run.",
  "Do not change ownership or permissions broadly with recursive commands unless the scope is fully understood.",
  "Do not remove packages merely because you do not recognize them.",
  "Do not kill a suspicious process before preserving path, command line, parent, and network evidence.",
];

const verificationChecks = [
  {
    area: "Users",
    verify:
      "Approved users remain and unapproved identities are handled appropriately.",
  },
  {
    area: "Privilege",
    verify:
      "sudo and sensitive group membership match the mission.",
  },
  {
    area: "Permissions",
    verify:
      "Sensitive files have appropriate ownership, modes, and ACLs.",
  },
  {
    area: "Services",
    verify:
      "Required services are active and unnecessary services were changed only with evidence.",
  },
  {
    area: "Remote access",
    verify:
      "SSH state and configuration match approved administration needs.",
  },
  {
    area: "Persistence",
    verify:
      "Cron jobs, timers, and startup files match the final approved state.",
  },
  {
    area: "Network",
    verify:
      "Interfaces, routes, listeners, and firewall policy still support required connectivity.",
  },
  {
    area: "Evidence",
    verify:
      "Authentication, service, process, and schedule evidence was preserved before high-impact changes.",
  },
];

const finalChecklist = [
  "The Linux mission was reviewed before major changes.",
  "Approved users match the final account state.",
  "Approved sudo-capable users match the final privilege state.",
  "sudoers configuration validates successfully.",
  "Sensitive file permissions and ownership were reviewed.",
  "Unexpected world-writable or privileged files were investigated.",
  "Required services remain running.",
  "SSH state and configuration match the mission.",
  "Cron jobs and systemd timers were reviewed.",
  "Suspicious processes were investigated before containment.",
  "Listening sockets and active connections were mapped to processes.",
  "Firewall state supports required services without unnecessary exposure.",
  "Authentication and system logs were reviewed.",
  "Every major remediation was verified.",
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

export default function LinuxChecklistPage() {
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
              href="/cyberpatriot/competition-checklists/windows-server-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/cisco-networking-checklist"
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
                Competition Checklist &middot; 04 &middot; Linux
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Linux Ubuntu &amp; Mint Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review users, sudo, permissions, packages, services, SSH, cron,
                systemd timers, processes, listeners, firewall state, and logs
                without breaking required Linux functionality.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The same defensive reasoning applies to both Ubuntu and Mint:
                inspect first, preserve useful evidence, make narrow changes,
                and verify required services after remediation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Platforms</span>
                  <span className="font-bold text-white">Ubuntu + Mint</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Start with</span>
                  <span className="font-bold text-white">Users + Sudo</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Preserve</span>
                  <span className="font-bold text-white">Auth + Journal</span>
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
            Linux rule
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Do not confuse unfamiliar with malicious
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Linux systems contain many legitimate services, packages, scheduled
            jobs, service users, and privileged binaries. Confirm purpose,
            ownership, path, dependencies, and mission requirements before
            changing them.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Opening pass"
            title="Understand the Linux image before hardening it"
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
        label="Identity"
        title="Confirm users before changing account state"
        items={identityChecks}
      />

      <CommandSection
        label="Sudo & privilege"
        title="Review effective administrative access"
        items={sudoChecks}
      />

      <CommandSection
        label="Permissions"
        title="Check ownership, modes, privileged files, and ACLs"
        items={permissionChecks}
      />

      <CommandSection
        label="Services"
        title="Protect required daemons while investigating exposure"
        items={serviceChecks}
      />

      <CommandSection
        label="SSH"
        title="Review remote access without locking out approved administration"
        items={sshChecks}
      />

      <CommandSection
        label="Persistence"
        title="Review cron, timers, and startup behavior"
        items={persistenceChecks}
      />

      <CommandSection
        label="Processes"
        title="Preserve process context before containment"
        items={processChecks}
      />

      <CommandSection
        label="Network"
        title="Map interfaces, listeners, connections, and firewall state"
        items={networkChecks}
      />

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Log quick reference"
            title="Linux evidence sources worth checking"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {logChecks.map((item) => (
              <div
                key={item.source}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-lg font-black text-cyan-300">{item.source}</p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {item.purpose}
                </p>

                <div className="mt-4 grid gap-3">
                  {item.commands.map((command) => (
                    <pre
                      key={command}
                      className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100"
                    >
                      {command}
                    </pre>
                  ))}
                </div>
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
            Preserve the evidence, then make the narrowest justified change
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
            Common Linux competition overreactions
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
            title="Prove the Linux image still satisfies the mission"
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
            Linux final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Finish only when security and required functionality both verify
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
              href="/cyberpatriot/competition-checklists/windows-server-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/cisco-networking-checklist"
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
