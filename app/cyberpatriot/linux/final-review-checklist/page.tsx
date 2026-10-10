import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Run a complete final Linux review without undoing required services, accounts, or competition functionality.",
  "Use one organized checklist that covers identity, authentication, permissions, packages, services, networking, persistence, logs, and evidence.",
  "Prioritize high-impact findings before low-risk cleanup during the final review window.",
  "Verify every important change with direct evidence instead of assuming that a successful command means the system is healthy.",
  "Record unresolved questions, required exceptions, and final system state so the team can hand off confidently.",
  "Finish with a repeatable Ubuntu and Linux Mint competition-day sequence that is fast, evidence-based, and safe.",
];

const finalReviewPrinciples = [
  {
    title: "Re-read the scenario",
    text:
      "The scenario is still the source of truth. Required users, services, applications, roles, and network functions override generic hardening rules.",
  },
  {
    title: "Verify, do not assume",
    text:
      "A command returning without an error does not prove the required function works. Recheck the actual user, service, network, and application behavior.",
  },
  {
    title: "Prefer high-value findings",
    text:
      "Final review time should focus first on unauthorized administrators, broken authentication, exposed services, suspicious persistence, and missing required protections.",
  },
  {
    title: "Preserve evidence",
    text:
      "Do not erase suspicious files, logs, startup entries, or account evidence simply to make the image look cleaner.",
  },
  {
    title: "Avoid late broad changes",
    text:
      "Large recursive permission changes, package removals, firewall resets, or network rewrites are especially risky late in a round.",
  },
  {
    title: "Leave the image stable",
    text:
      "The best final state is secure, functional, explainable, and verified. A technically hardened but broken image is not a successful result.",
  },
];

const rapidSystemSnapshot = [
  {
    command: "cat /etc/os-release",
    purpose:
      "Confirm the distribution and release before final distro-specific checks.",
  },
  {
    command: "hostnamectl",
    purpose:
      "Confirm hostname, operating system, kernel, architecture, and virtualization context.",
  },
  {
    command: "uptime",
    purpose:
      "Confirm current uptime and load before final changes.",
  },
  {
    command: "who",
    purpose:
      "Show currently logged-in users.",
  },
  {
    command: "systemctl --failed",
    purpose:
      "Identify failed systemd units that may indicate broken required functionality.",
  },
  {
    command: "ss -tulpn",
    purpose:
      "Review listening network sockets and owning processes.",
  },
  {
    command: "ip -br addr",
    purpose:
      "Summarize interface and address state.",
  },
  {
    command: "ip route",
    purpose:
      "Confirm active routing and default gateway.",
  },
  {
    command: "sudo ufw status verbose",
    purpose:
      "Review the final UFW state and default policy.",
  },
  {
    command: "journalctl -p warning..alert -b",
    purpose:
      "Review warning-or-higher events from the current boot.",
  },
];

const identityChecks = [
  {
    area: "Authorized users",
    inspect:
      "getent passwd",
    verify:
      "Every interactive account has a known scenario role or documented reason to remain.",
  },
  {
    area: "Administrative groups",
    inspect:
      "getent group sudo; getent group adm",
    verify:
      "Only users who require the privilege remain in sensitive groups.",
  },
  {
    area: "Per-user privilege",
    inspect:
      "id username; groups username; sudo -l -U username",
    verify:
      "The user's effective privilege matches the scenario.",
  },
  {
    area: "UID 0",
    inspect:
      "awk -F: '$3 == 0 {print $1 \":\" $3 \":\" $7}' /etc/passwd",
    verify:
      "Every UID 0 account is expected and justified.",
  },
  {
    area: "Login shells",
    inspect:
      "getent passwd",
    verify:
      "Service and system accounts do not have interactive shells unless required.",
  },
  {
    area: "Last login",
    inspect:
      "lastlog",
    verify:
      "Unexpected recent login activity has been investigated and documented.",
  },
];

const authenticationChecks = [
  {
    area: "Password state",
    command:
      "passwd -S username",
    verify:
      "Required human accounts have the intended password state.",
  },
  {
    area: "Password aging",
    command:
      "chage -l username",
    verify:
      "Aging and expiration settings match the scenario and do not lock out required users.",
  },
  {
    area: "PAM policy",
    command:
      "grep -RInE 'pam_pwquality|pam_pwhistory|pam_faillock|pam_tally' /etc/pam.d /etc/security 2>/dev/null",
    verify:
      "Authentication controls are present only where supported and required by the image.",
  },
  {
    area: "SSH authentication",
    command:
      "sudo sshd -t && sudo sshd -T | grep -Ei 'passwordauthentication|pubkeyauthentication|permitrootlogin|allowusers|allowgroups|maxauthtries'",
    verify:
      "Effective SSH authentication policy preserves required access while limiting unnecessary exposure.",
  },
  {
    area: "Authorized keys",
    command:
      "find /home -maxdepth 3 -type f -name authorized_keys -ls 2>/dev/null",
    verify:
      "Known authorized keys remain and unexplained keys have been investigated.",
  },
  {
    area: "Authentication logs",
    command:
      "sudo grep -iE 'failed|invalid|accepted|sudo|authentication' /var/log/auth.log | tail -n 100",
    verify:
      "Unexpected successful authentication or repeated suspicious patterns have been reviewed.",
  },
];

const permissionChecks = [
  {
    area: "Sensitive config ownership",
    command:
      "stat /etc/passwd /etc/shadow /etc/group /etc/gshadow",
    verify:
      "Ownership and mode are appropriate for account databases.",
  },
  {
    area: "Sudoers",
    command:
      "sudo visudo -c",
    verify:
      "Sudo policy parses successfully and no unintended broad privilege remains.",
  },
  {
    area: "SSH directory",
    command:
      "sudo ls -la /etc/ssh",
    verify:
      "Server configuration and host-key material have appropriate ownership and access.",
  },
  {
    area: "User SSH paths",
    command:
      "find /home -maxdepth 3 \\( -name .ssh -o -name authorized_keys \\) -ls 2>/dev/null",
    verify:
      "Home SSH paths belong to the intended users and are not broadly writable.",
  },
  {
    area: "World-writable files",
    command:
      "sudo find /home /etc -xdev -type f -perm -0002 -ls 2>/dev/null",
    verify:
      "Any world-writable file in reviewed high-value paths is intentional and justified.",
  },
  {
    area: "Setuid files",
    command:
      "sudo find / -xdev -type f -perm -4000 -ls 2>/dev/null",
    verify:
      "Unexpected setuid binaries have been traced to package ownership and purpose.",
  },
];

const packageChecks = [
  {
    area: "Installed packages",
    command:
      "apt list --installed",
    verify:
      "Known required software remains installed and high-risk unfamiliar software has been reviewed.",
  },
  {
    area: "Manual packages",
    command:
      "apt-mark showmanual",
    verify:
      "Unexpected manually installed packages have been investigated.",
  },
  {
    area: "Repositories",
    command:
      "apt-cache policy",
    verify:
      "Official and required repositories remain, and unexplained sources have been reviewed.",
  },
  {
    area: "Upgrades",
    command:
      "apt list --upgradable",
    verify:
      "Important pending updates are understood and handled according to competition requirements.",
  },
  {
    area: "Snap",
    command:
      "snap list",
    verify:
      "Snap packages are reviewed where Snap is installed.",
  },
  {
    area: "Flatpak",
    command:
      "flatpak list",
    verify:
      "Flatpak applications are reviewed where Flatpak is installed.",
  },
];

const serviceChecks = [
  {
    area: "Running services",
    command:
      "systemctl --type=service --state=running",
    verify:
      "Every important running service has a known purpose or has been investigated.",
  },
  {
    area: "Enabled services",
    command:
      "systemctl list-unit-files --type=service --state=enabled",
    verify:
      "Unnecessary enabled services have been reviewed without disabling scenario-required services.",
  },
  {
    area: "Failed units",
    command:
      "systemctl --failed",
    verify:
      "No required service remains failed.",
  },
  {
    area: "Service evidence",
    command:
      "systemctl status service-name; journalctl -u service-name --since today",
    verify:
      "Required services are active, stable, and free of unresolved configuration failures.",
  },
  {
    area: "Unit overrides",
    command:
      "systemctl cat service-name",
    verify:
      "Unexpected drop-ins or overrides have been investigated.",
  },
  {
    area: "Listener mapping",
    command:
      "ss -tulpn",
    verify:
      "Listening ports match required services and documented exceptions.",
  },
];

const networkChecks = [
  {
    area: "Interfaces",
    command:
      "ip -br addr",
    verify:
      "Required interfaces are up and have expected addresses.",
  },
  {
    area: "Routes",
    command:
      "ip route; ip -6 route",
    verify:
      "Required IPv4 and IPv6 routes remain intact.",
  },
  {
    area: "DNS",
    command:
      "resolvectl status; readlink -f /etc/resolv.conf; getent hosts example.com",
    verify:
      "Resolver configuration works and required names resolve.",
  },
  {
    area: "Firewall",
    command:
      "sudo ufw status numbered",
    verify:
      "Rules are narrow, required services remain allowed, and unnecessary exposure is removed.",
  },
  {
    area: "Listening sockets",
    command:
      "ss -tulpn",
    verify:
      "Listeners bind only where expected, including IPv4 and IPv6.",
  },
  {
    area: "Remote access",
    command:
      "systemctl status ssh; sudo sshd -t",
    verify:
      "SSH is secure and still available when required.",
  },
];

const persistenceChecks = [
  {
    area: "Cron",
    command:
      "sudo cat /etc/crontab; sudo ls -la /etc/cron.d /etc/cron.hourly /etc/cron.daily /etc/cron.weekly /etc/cron.monthly",
    verify:
      "Scheduled jobs are required, legitimate, or documented for further review.",
  },
  {
    area: "User crontabs",
    command:
      "sudo crontab -l; crontab -l",
    verify:
      "Root and current-user scheduled entries are understood.",
  },
  {
    area: "systemd persistence",
    command:
      "systemctl list-unit-files --type=service; systemctl list-timers --all",
    verify:
      "Unexpected services and timers have been investigated.",
  },
  {
    area: "Shell startup",
    command:
      "grep -RInE 'curl|wget|bash -c|sh -c|/tmp/|/dev/shm/' ~/.bashrc ~/.profile /etc/profile /etc/profile.d /etc/bash.bashrc 2>/dev/null",
    verify:
      "Suspicious shell startup behavior has been preserved and addressed.",
  },
  {
    area: "Desktop autostart",
    command:
      "find ~/.config/autostart /etc/xdg/autostart -maxdepth 1 -type f -name '*.desktop' -ls 2>/dev/null",
    verify:
      "Unfamiliar graphical startup entries have been traced to real executables and package purpose.",
  },
  {
    area: "Temporary paths",
    command:
      "sudo find /tmp /var/tmp /dev/shm -maxdepth 2 -type f -ls 2>/dev/null",
    verify:
      "Suspicious executables or scripts in temporary locations have been investigated without deleting evidence prematurely.",
  },
];

const logChecks = [
  {
    area: "Boot warnings",
    command:
      "journalctl -p warning..alert -b",
    verify:
      "High-priority events have been reviewed and required services are not failing silently.",
  },
  {
    area: "Authentication",
    command:
      "sudo grep -iE 'failed|invalid|accepted|sudo|authentication' /var/log/auth.log | tail -n 100",
    verify:
      "Unexpected successful sessions or privilege events have been investigated.",
  },
  {
    area: "Package history",
    command:
      "sudo tail -n 100 /var/log/apt/history.log; sudo tail -n 100 /var/log/dpkg.log",
    verify:
      "Recent package changes align with authorized actions.",
  },
  {
    area: "Service logs",
    command:
      "journalctl -u service-name --since today",
    verify:
      "Required services are stable after hardening changes.",
  },
  {
    area: "Boot history",
    command:
      "journalctl --list-boots",
    verify:
      "Unexpected reboots or missing journal history have been reviewed.",
  },
  {
    area: "Cron evidence",
    command:
      "sudo grep -i CRON /var/log/syslog | tail -n 50",
    verify:
      "Important scheduled tasks are behaving as expected where syslog records them.",
  },
];

const finalPriorityBuckets = [
  {
    priority: "P1",
    title: "Protect access and required functionality",
    examples:
      "Required administrator account, SSH, networking, DNS, web service, competition application, required user accounts.",
    action:
      "Fix or restore immediately if broken.",
  },
  {
    priority: "P2",
    title: "Remove confirmed high-impact risk",
    examples:
      "Unauthorized admin, known malicious persistence, exposed unnecessary remote service, unsafe sudo rule, confirmed rogue repository.",
    action:
      "Preserve evidence, remediate narrowly, then verify.",
  },
  {
    priority: "P3",
    title: "Resolve important misconfiguration",
    examples:
      "Weak permissions, failed required service, broken update source, unnecessary broad firewall rule, insecure SSH setting.",
    action:
      "Correct if the fix is understood and low-risk.",
  },
  {
    priority: "P4",
    title: "Investigate unresolved unknowns",
    examples:
      "Unfamiliar package, odd process, unknown startup entry, unexpected route, unexplained account.",
    action:
      "Gather evidence and classify before changing.",
  },
  {
    priority: "P5",
    title: "Cosmetic or low-value cleanup",
    examples:
      "Minor naming inconsistencies, harmless unused files, non-security desktop preferences.",
    action:
      "Leave for last or skip if time is limited.",
  },
];

const changeLogFields = [
  {
    field: "Time",
    description:
      "When the change or observation occurred.",
  },
  {
    field: "Area",
    description:
      "User, service, package, firewall, network, permission, persistence, or other category.",
  },
  {
    field: "Finding",
    description:
      "What evidence showed before the change.",
  },
  {
    field: "Action",
    description:
      "The exact controlled change performed.",
  },
  {
    field: "Verification",
    description:
      "How the team proved the intended result.",
  },
  {
    field: "Rollback",
    description:
      "Backup, original state, or recovery method if the change must be reversed.",
  },
];

const finalVerificationFlows = [
  {
    workflow: "SSH required",
    steps: [
      "sudo sshd -t",
      "systemctl status ssh",
      "ss -tulpn | grep -E '(:22\\b|sshd)'",
      "sudo ufw status verbose",
      "authorized client login test",
      "journalctl -u ssh --since '10 minutes ago'",
    ],
  },
  {
    workflow: "HTTPS required",
    steps: [
      "systemctl status web-service",
      "service-specific config test",
      "ss -tulpn | grep ':443'",
      "sudo ufw status verbose",
      "authorized client HTTPS test",
      "journalctl -u web-service --since '10 minutes ago'",
    ],
  },
  {
    workflow: "DNS required",
    steps: [
      "resolvectl status",
      "readlink -f /etc/resolv.conf",
      "getent hosts required-name",
      "ip route",
      "required application name-resolution test",
    ],
  },
  {
    workflow: "User privilege changed",
    steps: [
      "id username",
      "groups username",
      "sudo -l -U username",
      "passwd -S username",
      "authorized login or sudo test when required",
    ],
  },
  {
    workflow: "Persistence removed",
    steps: [
      "confirm startup or cron entry is disabled",
      "confirm suspicious process is not recreated",
      "review relevant journal/auth/cron logs",
      "verify required application startup still works",
    ],
  },
];

const stopAndThinkWarnings = [
  {
    trigger: "You are about to use chmod -R or chown -R",
    response:
      "Stop and confirm the exact path, application ownership model, and whether recursion is truly necessary.",
  },
  {
    trigger: "You are about to run ufw reset",
    response:
      "Stop. Rebuild only if you have a complete required-service plan and explicit reason. Late-round firewall reset is high risk.",
  },
  {
    trigger: "You are about to remove a package with many dependencies",
    response:
      "Stop and inspect the removal plan before confirming.",
  },
  {
    trigger: "You are about to restart networking over SSH",
    response:
      "Stop and confirm an out-of-band recovery path or safer test method.",
  },
  {
    trigger: "You are about to delete suspicious evidence",
    response:
      "Stop. Preserve file contents, metadata, logs, and references before destructive cleanup.",
  },
  {
    trigger: "You are changing something because it looks unfamiliar",
    response:
      "Stop and classify it using owner, package, service, process, path, logs, and scenario context.",
  },
];

const distroSpecificFinalChecks = [
  {
    distro: "Ubuntu",
    checks: [
      "Confirm Ubuntu repositories are expected and healthy.",
      "Review Snap only if snapd is present.",
      "Confirm GNOME or other Ubuntu desktop components remain functional if the image is graphical.",
      "Inspect netplan when it is actually used by the image.",
    ],
  },
  {
    distro: "Linux Mint",
    checks: [
      "Confirm Mint repositories are expected and healthy.",
      "Do not treat Mint-specific packages as unwanted by default.",
      "Confirm Cinnamon, MATE, or Xfce components required by the desktop remain functional.",
      "Do not install Snap merely to make Mint resemble Ubuntu.",
    ],
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Read the fictional final-round scenario: SSH and HTTPS are required, Morgan is the only administrator, Avery and Riley are standard users, nightly backups must continue, and the image is Linux Mint Cinnamon.",
  },
  {
    step: "02",
    task:
      "Capture a rapid system snapshot: distro, hostname, uptime, logged-in users, failed units, listeners, interfaces, routes, firewall state, and current-boot warnings.",
  },
  {
    step: "03",
    task:
      "Run the identity and authentication review. Confirm Morgan's admin role, Avery and Riley's standard-user roles, password state, sudo access, SSH policy, and authorized keys.",
  },
  {
    step: "04",
    task:
      "Review packages, repositories, services, listeners, networking, cron, startup files, desktop autostart, and logs using the final checklist.",
  },
  {
    step: "05",
    task:
      "Place each unresolved item into P1 through P5 priority buckets. Do not make changes based on unfamiliarity alone.",
  },
  {
    step: "06",
    task:
      "Apply only the justified final changes, recording time, finding, action, verification, and rollback for each important modification.",
  },
  {
    step: "07",
    task:
      "Run final functional verification: SSH, HTTPS, DNS, firewall, users, scheduled backup, desktop login, update sources, required services, and post-change logs.",
  },
  {
    step: "08",
    task:
      "Finish with a handoff note listing confirmed secure areas, required exceptions, unresolved low-risk questions, and the commands used for final verification.",
  },
];

const finalChecklist = [
  "I re-read the scenario and confirmed required users, services, applications, and network functions.",
  "I confirmed the distribution, release, and desktop environment.",
  "I reviewed interactive users, administrative groups, UID 0 accounts, login shells, and last-login information.",
  "I reviewed password state, aging, PAM-related policy, SSH authentication, and authorized keys.",
  "I checked ownership and permissions on high-value account, SSH, sudo, and configuration paths.",
  "I reviewed installed packages, manual packages, repositories, upgrades, Snap, and Flatpak where present.",
  "I reviewed running, enabled, failed, and network-exposed services.",
  "I reviewed interfaces, routes, DNS, IPv4, IPv6, firewall rules, SSH, and required remote access.",
  "I reviewed cron, timers, systemd units, shell startup, desktop autostart, and temporary-path persistence.",
  "I reviewed authentication, package, service, boot, and scheduled-task logs.",
  "I preserved evidence before destructive remediation.",
  "I avoided broad late-round changes such as recursive chmod/chown, firewall reset, or blind package removal.",
  "I verified required SSH, web, DNS, login, package, desktop, and scheduled-job workflows after changes.",
  "I recorded important findings, actions, verification, and rollback information.",
  "I left the image stable, functional, and ready for team handoff.",
];

const reflection = [
  "Why should the scenario be reread during final review instead of only at the beginning?",
  "Which findings belong in P1 and P2, and why should they come before cosmetic cleanup?",
  "Why is a successful systemctl command not enough to prove a service is healthy?",
  "What evidence should be preserved before removing suspicious persistence?",
  "Why are broad permission, firewall, package, and networking changes especially risky late in a round?",
  "What should a final handoff note contain so another teammate can trust the image state?",
];

export default function LinuxFinalReviewChecklistPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Linux
            </Link>
            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <Link
            href="/cyberpatriot/linux/ubuntu-vs-linux-mint-differences"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            &larr; Previous Lesson
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Linux · Lesson 18
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Linux Final Review Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Finish the Linux image with a structured final review covering
                identity, authentication, permissions, software, services,
                networking, persistence, logs, verification, and team handoff.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Final review is not the time for random cleanup. Use the scenario,
                current evidence, and the full defensive workflow to find
                high-impact problems, verify required functionality, and leave
                the image stable.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Final Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Review principles</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Priority buckets</span>
                  <span className="font-bold text-white">5</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Final checklist items</span>
                  <span className="font-bold text-white">15</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Secure + stable handoff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Learning objectives
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Finish the image without breaking what the scenario requires
          </h2>

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
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Final review is verification, not another rebuild
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Re-check the system from the scenario outward. Confirm required
              access and services first, then clean up only the risks you can
              explain and verify.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Late-round discipline
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              The closer you are to the end, the more controlled changes should become
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Broad changes can erase progress or break required functionality.
              Favor targeted fixes with known rollback and direct verification.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Final review principles
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six rules for the last pass
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {finalReviewPrinciples.map((item) => (
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

      <CommandCheckSection
        eyebrow="Rapid snapshot"
        title="Capture the final system state first"
        items={rapidSystemSnapshot.map((item) => ({
          command: item.command,
          text: item.purpose,
        }))}
      />

      <ReviewGridSection
        eyebrow="Identity"
        title="Final user and privilege review"
        items={identityChecks}
      />

      <ReviewGridSection
        eyebrow="Authentication"
        title="Final password, PAM, SSH, and key review"
        items={authenticationChecks}
      />

      <ReviewGridSection
        eyebrow="Permissions"
        title="Final ownership and access review"
        items={permissionChecks}
      />

      <ReviewGridSection
        eyebrow="Packages"
        title="Final software and repository review"
        items={packageChecks}
      />

      <ReviewGridSection
        eyebrow="Services"
        title="Final service and listener review"
        items={serviceChecks}
      />

      <ReviewGridSection
        eyebrow="Networking"
        title="Final interface, route, DNS, firewall, and SSH review"
        items={networkChecks}
      />

      <ReviewGridSection
        eyebrow="Persistence"
        title="Final scheduled and startup persistence review"
        items={persistenceChecks}
      />

      <ReviewGridSection
        eyebrow="Logs & evidence"
        title="Final evidence review"
        items={logChecks}
      />

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Final priority buckets
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Decide what still deserves time
          </h2>

          <div className="mt-8 grid gap-4">
            {finalPriorityBuckets.map((item) => (
              <div
                key={item.priority}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.35fr_0.8fr_1.3fr_1fr]"
              >
                <span className="text-xl font-black text-cyan-300">
                  {item.priority}
                </span>
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-300">
                  {item.examples}
                </p>
                <p className="text-sm leading-6 text-slate-400">
                  {item.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Change log
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Record the important changes another teammate may need to understand
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {changeLogFields.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.field}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <p className="text-sm font-black text-cyan-200">
              Keep the log short but useful
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Focus on changes that affected access, services, security policy,
              persistence, packages, networking, or evidence. The log should help
              a teammate understand what changed without reading every terminal command.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Functional verification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Verify the real workflow, not just the configuration
          </h2>

          <div className="mt-8 grid gap-5">
            {finalVerificationFlows.map((item) => (
              <div
                key={item.workflow}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.workflow}</h3>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {item.steps.map((step, index) => (
                    <div
                      key={`${item.workflow}-${step}`}
                      className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4"
                    >
                      <span className="font-black text-cyan-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <code className="overflow-x-auto text-sm text-cyan-200">
                        {step}
                      </code>
                    </div>
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
            Stop and think
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Final-round actions that deserve an extra check
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {stopAndThinkWarnings.map((item) => (
              <div
                key={item.trigger}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.trigger}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.response}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Ubuntu and Mint final branch
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Keep the shared workflow, then run the distro-specific checks
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {distroSpecificFinalChecks.map((item) => (
              <div
                key={item.distro}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-2xl font-black text-white">
                  {item.distro}
                </h3>
                <div className="mt-5 grid gap-3">
                  {item.checks.map((check, index) => (
                    <div
                      key={check}
                      className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4"
                    >
                      <span className="font-black text-cyan-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-6 text-slate-300">
                        {check}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Final defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Perform a complete fictional final review
          </h2>

          <div className="mt-8 grid gap-3">
            {fictionalLab.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="font-black text-cyan-300">{item.step}</span>
                <p className="text-sm leading-7 text-slate-300">{item.task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Master Linux checklist
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Final confirmation before handoff
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalChecklist.map((item, index) => (
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
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
              Final handoff
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              What your teammate should know
            </h2>

            <div className="mt-6 grid gap-3">
              {[
                "Required services and access that were verified",
                "Important changes made during the round",
                "Required exceptions that should not be undone",
                "Suspicious findings that were preserved or remediated",
                "Low-risk unknowns that remain unresolved",
                "Rollback notes or backups that still exist",
                "Final commands used to verify the image",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-emerald-300">
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
              Final reasoning check
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
                Linux pathway complete
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                You now have a complete defensive Linux workflow from scenario
                reading through accounts, permissions, software, services,
                networking, persistence, evidence, distro differences, and final
                verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Linux
            </Link>
            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <Link
            href="/cyberpatriot/linux/ubuntu-vs-linux-mint-differences"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            &larr; Previous Lesson
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function CommandCheckSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { command: string; text: string }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.command}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
            >
              <code className="block overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-bold text-cyan-200">
                {item.command}
              </code>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewGridSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { area: string; command?: string; inspect?: string; verify: string }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.area}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.area}</h3>
              <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                {item.command ?? item.inspect}
              </code>
              <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Verify
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.verify}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
