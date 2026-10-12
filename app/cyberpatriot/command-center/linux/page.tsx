import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Users & Groups",
    items: [
      {
        command: "getent passwd",
        meaning: "Lists local and directory-backed user accounts visible to the system.",
        caution: "Account presence does not prove recent or legitimate use.",
      },
      {
        command: "getent group",
        meaning: "Lists groups and visible membership data.",
        caution: "Group membership can grant privilege; verify whether it is expected before changing it.",
      },
      {
        command: "id <username>",
        meaning: "Shows UID, primary group, and supplementary groups for one account.",
        caution: "Use the actual account name from the system or scenario.",
      },
      {
        command: "who",
        meaning: "Shows currently logged-in users and terminals.",
        caution: "This is current-session evidence only.",
      },
      {
        command: "last",
        meaning: "Shows recent login history from wtmp where available.",
        caution: "Historical records can be incomplete or rotated.",
      },
    ],
  },
  {
    title: "Sudo & Privilege",
    items: [
      {
        command: "getent group sudo",
        meaning: "Shows members of the sudo group on Ubuntu/Mint systems.",
        caution: "Membership provides privilege capability but does not prove use.",
      },
      {
        command: "sudo -l -U <username>",
        meaning: "Shows sudo permissions for a selected user.",
        caution: "Run only when appropriate and authorized; output depends on sudoers configuration.",
      },
      {
        command: "sudo visudo -c",
        meaning: "Checks sudoers syntax without intentionally editing policy.",
        caution: "Use visudo for actual edits to avoid syntax errors.",
      },
      {
        command: "grep -R \"^[^#].*ALL\" /etc/sudoers /etc/sudoers.d 2>/dev/null",
        meaning: "Searches active-looking sudoers rules for review.",
        caution: "Interpret aliases and included files carefully; a simple grep is not a full policy parser.",
      },
    ],
  },
  {
    title: "File Permissions & Ownership",
    items: [
      {
        command: "ls -l <path>",
        meaning: "Shows mode bits, owner, group, size, and timestamp.",
        caution: "Standard ls output does not show every ACL entry.",
      },
      {
        command: "stat <path>",
        meaning: "Shows detailed metadata including mode, owner, timestamps, and inode.",
        caution: "Linux ctime is metadata-change time, not file creation time.",
      },
      {
        command: "getfacl <path>",
        meaning: "Shows POSIX ACL entries where supported.",
        caution: "Extended ACLs can affect access even when basic mode bits look restrictive.",
      },
      {
        command: "find /path -xdev -type f -perm -0002 2>/dev/null",
        meaning: "Finds world-writable files within a selected filesystem tree.",
        caution: "Scope the path deliberately instead of scanning the whole system blindly.",
      },
    ],
  },
  {
    title: "Packages",
    items: [
      {
        command: "dpkg -l",
        meaning: "Lists installed Debian packages and package state.",
        caution: "Installed does not automatically mean unnecessary or unsafe.",
      },
      {
        command: "apt list --installed 2>/dev/null",
        meaning: "Lists packages recognized as installed by APT.",
        caution: "Do not remove software before checking required functionality.",
      },
      {
        command: "apt-cache policy <package>",
        meaning: "Shows installed and candidate package versions.",
        caution: "Repository state may differ if package lists are stale.",
      },
      {
        command: "grep -h \" install \" /var/log/dpkg.log* 2>/dev/null | tail -n 50",
        meaning: "Shows recent package-install records from dpkg logs.",
        caution: "Rotated or compressed logs may require additional review.",
      },
    ],
  },
  {
    title: "Services & systemd",
    items: [
      {
        command: "systemctl --type=service --state=running",
        meaning: "Lists currently running systemd services.",
        caution: "A running service is not automatically required, and a stopped service is not automatically safe.",
      },
      {
        command: "systemctl status <service>",
        meaning: "Shows current state, recent logs, unit path, and process information.",
        caution: "Review dependencies and scenario requirements before stopping or disabling a service.",
      },
      {
        command: "systemctl is-enabled <service>",
        meaning: "Shows whether the service is enabled to start automatically.",
        caution: "Enabled state and running state are separate concepts.",
      },
      {
        command: "systemctl cat <service>",
        meaning: "Displays the effective unit file and drop-in overrides.",
        caution: "Drop-ins can change behavior from the vendor default.",
      },
    ],
  },
  {
    title: "Processes",
    items: [
      {
        command: "ps aux",
        meaning: "Shows a broad snapshot of running processes.",
        caution: "Process name alone does not establish legitimacy.",
      },
      {
        command: "ps -eo pid,ppid,user,lstart,cmd --sort=pid",
        meaning: "Shows PID, parent PID, user, start time, and command line.",
        caution: "Command lines can be incomplete for protected or exited processes.",
      },
      {
        command: "pstree -ap",
        meaning: "Shows process parent-child relationships with PIDs and arguments.",
        caution: "Parent relationships help with context but do not prove maliciousness.",
      },
      {
        command: "readlink -f /proc/<pid>/exe",
        meaning: "Resolves the executable backing a running process when accessible.",
        caution: "Processes can exit between inspection steps; preserve volatile evidence quickly.",
      },
    ],
  },
  {
    title: "Networking",
    items: [
      {
        command: "ip addr",
        meaning: "Shows network interfaces and configured IP addresses.",
        caution: "Virtual, loopback, and inactive interfaces may also appear.",
      },
      {
        command: "ip route",
        meaning: "Shows the routing table.",
        caution: "Unexpected routes should be investigated before deletion.",
      },
      {
        command: "ss -tulpn",
        meaning: "Shows listening TCP/UDP sockets with process information when permissions allow.",
        caution: "A listening port does not automatically mean it is remotely reachable or unsafe.",
      },
      {
        command: "ss -tpn",
        meaning: "Shows active TCP connections and associated processes.",
        caution: "Connection presence is an observation, not proof of malicious activity.",
      },
      {
        command: "resolvectl status",
        meaning: "Shows DNS configuration on systems using systemd-resolved.",
        caution: "Some Ubuntu/Mint installations may use different DNS management.",
      },
    ],
  },
  {
    title: "Firewall",
    items: [
      {
        command: "sudo ufw status verbose",
        meaning: "Shows UFW state, defaults, and configured rules.",
        caution: "Do not enable, disable, or delete rules until required services are known.",
      },
      {
        command: "sudo ufw status numbered",
        meaning: "Shows numbered UFW rules for easier review.",
        caution: "Rule order and defaults influence actual behavior.",
      },
      {
        command: "sudo nft list ruleset",
        meaning: "Shows the nftables ruleset where nftables is in use.",
        caution: "Avoid editing low-level firewall rules unless the environment and requirements are clear.",
      },
      {
        command: "sudo iptables -S",
        meaning: "Shows iptables rules in rule syntax where legacy iptables is in use.",
        caution: "Ubuntu systems may use nftables underneath compatibility commands.",
      },
    ],
  },
  {
    title: "Logs & journalctl",
    items: [
      {
        command: "journalctl -p warning..alert -b",
        meaning: "Shows warning-and-higher journal events from the current boot.",
        caution: "Severity filtering can hide important informational events.",
      },
      {
        command: "journalctl -u <service> --since \"2 hours ago\"",
        meaning: "Shows recent journal entries for one service.",
        caution: "Use a time window relevant to the investigation.",
      },
      {
        command: "sudo tail -n 100 /var/log/auth.log",
        meaning: "Shows recent authentication-related events on many Ubuntu/Mint systems.",
        caution: "Some systems use journald-only logging or different file locations.",
      },
      {
        command: "sudo tail -n 100 /var/log/syslog",
        meaning: "Shows recent general system log entries where syslog exists.",
        caution: "Not every distribution or configuration uses this file.",
      },
      {
        command: "lastlog",
        meaning: "Shows last-login information per account.",
        caution: "Never treat one login database as the only source of truth.",
      },
    ],
  },
  {
    title: "Cron & systemd Timers",
    items: [
      {
        command: "crontab -l",
        meaning: "Shows the current user's crontab.",
        caution: "Other users and system-wide cron locations must be checked separately.",
      },
      {
        command: "sudo crontab -l",
        meaning: "Shows root's crontab.",
        caution: "Root cron jobs may be legitimate administrative tasks.",
      },
      {
        command: "ls -la /etc/cron.d /etc/cron.daily /etc/cron.hourly /etc/cron.weekly /etc/cron.monthly",
        meaning: "Shows common system-wide cron directories.",
        caution: "Presence does not prove execution; inspect timestamps and content.",
      },
      {
        command: "systemctl list-timers --all",
        meaning: "Lists systemd timers, last run, and next run information.",
        caution: "Inspect the associated service unit before making changes.",
      },
    ],
  },
  {
    title: "SSH & Remote Access",
    items: [
      {
        command: "systemctl status ssh",
        meaning: "Shows OpenSSH server state when installed as ssh.service.",
        caution: "Remote access may be required; check scenario instructions before disabling it.",
      },
      {
        command: "ss -ltnp | grep ':22 '",
        meaning: "Checks whether something is listening on TCP 22.",
        caution: "Map the listener to its process and verify whether SSH is required.",
      },
      {
        command: "sudo sshd -T",
        meaning: "Shows effective OpenSSH server configuration when sshd is installed.",
        caution: "Review output carefully; configuration may include included files.",
      },
      {
        command: "grep -R \"^[[:space:]]*[^#]\" /etc/ssh/sshd_config /etc/ssh/sshd_config.d 2>/dev/null",
        meaning: "Shows active-looking SSH configuration lines and included snippets.",
        caution: "The effective configuration is better confirmed with sshd -T when available.",
      },
    ],
  },
  {
    title: "Files, Hashes & Metadata",
    items: [
      {
        command: "sha256sum <file>",
        meaning: "Calculates a SHA-256 hash of a file.",
        caution: "A hash identifies file content; it does not tell you whether the file is safe.",
      },
      {
        command: "file <file>",
        meaning: "Identifies file type from content rather than filename extension.",
        caution: "File-type identification is useful but not a malware verdict.",
      },
      {
        command: "stat <file>",
        meaning: "Shows timestamps, owner, mode, size, and inode information.",
        caution: "Interpret mtime, atime, and ctime correctly.",
      },
      {
        command: "readlink -f <path>",
        meaning: "Resolves symbolic links to their final target path.",
        caution: "The target may change later; record the result if it matters.",
      },
    ],
  },
];

const importantPaths = [
  { path: "/etc/passwd", use: "Local account definitions and UID information." },
  { path: "/etc/group", use: "Local group definitions and membership." },
  { path: "/etc/sudoers", use: "Primary sudo policy file." },
  { path: "/etc/sudoers.d/", use: "Additional sudo policy snippets." },
  { path: "/etc/ssh/sshd_config", use: "Primary OpenSSH server configuration." },
  { path: "/var/log/auth.log", use: "Authentication events on many Ubuntu/Mint systems." },
  { path: "/var/log/syslog", use: "General system logging on many Ubuntu/Mint systems." },
  { path: "/var/log/apt/", use: "APT package-management history." },
  { path: "/var/log/dpkg.log", use: "Package install/remove history from dpkg." },
  { path: "/etc/cron.d/", use: "System-wide cron definitions." },
  { path: "/etc/systemd/system/", use: "Administrator-created or overridden systemd units." },
  { path: "/home/<user>/.config/autostart/", use: "Per-user desktop autostart entries where used." },
  { path: "/tmp", use: "Temporary storage; useful but noisy." },
  { path: "/var/tmp", use: "Longer-lived temporary storage." },
];

const permissionBits = [
  { value: "4", meaning: "read" },
  { value: "2", meaning: "write" },
  { value: "1", meaning: "execute" },
  { value: "7", meaning: "read + write + execute" },
  { value: "6", meaning: "read + write" },
  { value: "5", meaning: "read + execute" },
];

const accountFiles = [
  { file: "/etc/passwd", note: "Account name, UID, GID, home directory, shell." },
  { file: "/etc/shadow", note: "Password hashes and aging data; root-readable." },
  { file: "/etc/group", note: "Group definitions and supplementary membership." },
  { file: "/etc/gshadow", note: "Protected group security information." },
];

const decisionChecks = [
  "Is the account, service, package, or port required by the scenario?",
  "Who owns the process or file?",
  "What is the full executable or file path?",
  "Is the service enabled, running, both, or neither?",
  "Do logs show when the activity occurred?",
  "Is there a cron job, systemd timer, autostart item, or service that explains the activity?",
  "Do I need to preserve a hash, PID, command line, log entry, or timestamp first?",
  "What is the smallest justified change?",
  "How will I verify required functionality afterward?",
];

const mistakes = [
  "Removing a package simply because you do not recognize its name.",
  "Disabling SSH without checking whether remote administration is required.",
  "Confusing service enabled state with current running state.",
  "Treating ctime as file creation time.",
  "Changing permissions broadly with chmod 777 instead of fixing the specific access problem.",
  "Deleting a cron job or timer before recording its command, account, and timing.",
  "Killing a process before recording executable path, command line, parent PID, and network state.",
  "Assuming an open port is automatically a vulnerability.",
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

export default function LinuxQuickReferencePage() {
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
              href="/cyberpatriot/command-center/windows-server"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Windows Server
            </Link>
            <Link
              href="/cyberpatriot/command-center/cisco-networking"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next: Cisco &amp; Networking &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Command Center Â· Reference 03
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Linux Quick Reference
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Fast Ubuntu and Mint lookup for accounts, sudo, permissions,
                packages, services, processes, networking, firewall, logs, cron,
                systemd timers, SSH, file metadata, and common paths.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Use inspection commands first. Preserve evidence and understand
                dependencies before removing packages, disabling services, or
                changing permissions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Linux Rule
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Identity</span>
                  <span className="font-bold text-white">User + groups</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>State</span>
                  <span className="font-bold text-white">Service + process</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Evidence</span>
                  <span className="font-bold text-white">Logs + files</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish</span>
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
            Before changing Linux
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Small commands can have large system-wide effects
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Package removal, permission changes, service changes, firewall edits,
            and sudo policy changes can quickly break required functionality.
            Inspect first and make the narrowest justified change.
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
              <SectionHeading label="Ubuntu / Mint" title={section.title} />

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
              label="Account files"
              title="Files worth recognizing"
            />
            <div className="mt-6 grid gap-3">
              {accountFiles.map((item) => (
                <div
                  key={item.file}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <code className="font-bold text-cyan-300">{item.file}</code>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Permission math"
              title="Numeric mode reminder"
            />
            <div className="mt-6 grid gap-3">
              {permissionBits.map((item) => (
                <div
                  key={item.value}
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">{item.value}</span>
                  <span className="text-right text-sm text-slate-300">
                    {item.meaning}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
              <p className="text-sm leading-7 text-slate-300">
                Example: <code className="text-cyan-200">chmod 640 file</code>
                {" "}means owner read/write, group read, others no permissions.
                Avoid broad permissions such as 777 unless there is a clearly
                justified requirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Important paths"
            title="Common Linux locations worth recognizing"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {importantPaths.map((item) => (
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
            Ask these before changing Linux configuration
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
            Linux mistakes that cause avoidable damage
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
              href="/cyberpatriot/command-center/windows-server"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Windows Server
            </Link>
            <Link
              href="/cyberpatriot/command-center/cisco-networking"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next: Cisco &amp; Networking &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
