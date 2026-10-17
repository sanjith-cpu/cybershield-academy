import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const officialResources = [
  {
    title: "Ubuntu Server Documentation",
    href: "https://ubuntu.com/server/docs",
    description:
      "Canonical's official reference for Ubuntu Server administration, services, networking, storage, security, and troubleshooting.",
  },
  {
    title: "Ubuntu Security Documentation",
    href: "https://documentation.ubuntu.com/security/",
    description:
      "Official guidance covering Ubuntu security features, hardening concepts, firewalling, updates, and access controls.",
  },
  {
    title: "Ubuntu Firewall Documentation",
    href: "https://documentation.ubuntu.com/security/security-features/network/firewall/",
    description:
      "Reference material for UFW and the Linux firewall technologies underneath it.",
  },
  {
    title: "Ubuntu Manpages",
    href: "https://manpages.ubuntu.com/",
    description:
      "Searchable manual pages for commands, configuration files, utilities, and system interfaces.",
  },
  {
    title: "Linux Mint User Guide",
    href: "https://linuxmint-user-guide.readthedocs.io/",
    description:
      "Linux Mint documentation for system operation, administration, packages, troubleshooting, and Mint-specific behavior.",
  },
  {
    title: "systemd Manuals",
    href: "https://systemd.io/",
    description:
      "Primary documentation for services, units, timers, dependencies, logging, and systemd administration.",
  },
];

const studyAreas = [
  {
    title: "Users & Groups",
    items: [
      "Understand /etc/passwd, /etc/shadow, and /etc/group.",
      "Use getent to inspect users and groups.",
      "Distinguish normal users from system and service accounts.",
      "Review sudo access before changing privilege.",
    ],
  },
  {
    title: "Permissions",
    items: [
      "Understand owner, group, and other permission bits.",
      "Know the difference between chmod and chown.",
      "Treat recursive permission changes as high risk.",
      "Investigate world-writable files in context.",
    ],
  },
  {
    title: "Services",
    items: [
      "Use systemctl to inspect services and startup state.",
      "Review unit files and overrides when behavior is unexpected.",
      "Understand dependencies before disabling unfamiliar services.",
      "Verify required applications after service changes.",
    ],
  },
  {
    title: "Logs & Evidence",
    items: [
      "Use journalctl for systemd-managed logs.",
      "Review relevant files under /var/log.",
      "Correlate authentication, service, process, and network evidence.",
      "Keep system and timestamp context with findings.",
    ],
  },
  {
    title: "SSH & Remote Access",
    items: [
      "Confirm whether SSH is required by the competition scenario.",
      "Review sshd service state and configuration.",
      "Check authentication settings and listening exposure.",
      "Verify approved remote access after any change.",
    ],
  },
  {
    title: "Firewall & Networking",
    items: [
      "Use ip and ss to understand network state.",
      "Use UFW when it is the intended firewall interface.",
      "Remember that UFW is a frontend for Linux packet filtering.",
      "Verify required connectivity after firewall changes.",
    ],
  },
];

const commands = [
  ["id", "Show user identity and group membership."],
  ["getent passwd", "Review account entries."],
  ["getent group", "Review groups and membership."],
  ["sudo -l", "Show allowed sudo privileges for the current user."],
  ["ps aux", "Review running processes."],
  ["pstree -ap", "View parent-child process relationships."],
  ["systemctl --type=service", "Review systemd service units."],
  ["systemctl status NAME", "Inspect one service."],
  ["journalctl -u NAME", "Review logs for one systemd unit."],
  ["ss -tulpn", "Review listening TCP and UDP sockets."],
  ["ip addr", "Review interface addressing."],
  ["ip route", "Review routing state."],
  ["ufw status verbose", "Review UFW status and rules."],
  ["stat FILE", "Review file metadata."],
  ["find", "Locate files using ownership, permissions, time, path, and other attributes."],
];

const importantPaths = [
  ["/etc/passwd", "User-account definitions and user IDs."],
  ["/etc/shadow", "Protected password and account-aging information."],
  ["/etc/group", "Group definitions and membership."],
  ["/etc/sudoers", "Primary sudo policy configuration."],
  ["/etc/sudoers.d/", "Additional sudo policy files."],
  ["/etc/ssh/sshd_config", "OpenSSH server configuration on many Linux systems."],
  ["/etc/systemd/system/", "Local systemd units and overrides."],
  ["/etc/cron.*", "System scheduled-task locations."],
  ["/var/log/", "Traditional service and operating-system logs."],
];

const competitionCases = [
  {
    title: "An account looks unauthorized",
    steps: [
      "Compare the account with the approved-user list.",
      "Review UID, groups, shell, home directory, and privilege.",
      "Determine whether it is a user, system account, or service account.",
      "Preserve useful authentication evidence.",
      "Make only the justified change and verify required access.",
    ],
  },
  {
    title: "A service looks suspicious",
    steps: [
      "Identify the service, executable, startup state, and listener.",
      "Check whether required functions depend on it.",
      "Review journal and configuration evidence.",
      "Do not disable it only because the name is unfamiliar.",
      "Verify mission functionality after any change.",
    ],
  },
  {
    title: "Permissions look too open",
    steps: [
      "Record the current owner, group, and permission mode.",
      "Determine the intended purpose of the object.",
      "Check whether an application depends on the existing permissions.",
      "Avoid broad recursive chmod or chown changes.",
      "Test the affected service or application afterward.",
    ],
  },
  {
    title: "SSH exposure looks wrong",
    steps: [
      "Confirm whether SSH is required.",
      "Check sshd service and listening state.",
      "Review authentication-related configuration.",
      "Review firewall exposure.",
      "Test the approved remote-access path after changes.",
    ],
  },
];

const weakVsBetter = [
  {
    weak: "Delete unfamiliar users immediately.",
    better:
      "Classify the identity, compare it with the scenario, and check privilege and dependencies first.",
  },
  {
    weak: "Use chmod -R to fix permissions quickly.",
    better:
      "Change only the specific file or directory whose intended permissions are understood.",
  },
  {
    weak: "Disable every unfamiliar service.",
    better:
      "Inspect the service, process, listener, dependencies, logs, and mission purpose first.",
  },
  {
    weak: "Restart when the system behaves strangely.",
    better:
      "Collect process, service, log, configuration, and network evidence before considering a reboot.",
  },
  {
    weak: "Disable SSH because remote access is dangerous.",
    better:
      "Confirm mission requirements and secure only the exposure or authentication settings justified by evidence.",
  },
  {
    weak: "Run a remembered command without checking it.",
    better:
      "Use the man page or official documentation when the command's scope or side effects are uncertain.",
  },
];

const checklist = [
  "Use official Ubuntu, Mint, systemd, and man-page references first.",
  "Classify accounts before changing or removing them.",
  "Review sudo and group membership when evaluating privilege.",
  "Avoid broad recursive chmod and chown operations.",
  "Understand service purpose and dependencies before disabling it.",
  "Use journalctl and appropriate log files to support conclusions.",
  "Preserve evidence before removing suspicious persistence.",
  "Confirm whether SSH is required before changing remote access.",
  "Map listeners to owning processes and services.",
  "Review UFW or the system's intended firewall carefully.",
  "Verify required services and network access after changes.",
  "Let the competition scenario determine what must remain functional.",
];

export default function LinuxUbuntuMintResourcePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/resources"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Resources
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
              href="/cyberpatriot/resources/windows-server-active-directory"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Resource
            </Link>

            <Link href="/cyberpatriot/resources/cisco-networking" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 lg:p-12">
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            CyberPatriot Resources &middot; Resource 04
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Linux: Ubuntu &amp; Mint
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Use official Ubuntu, Linux Mint, systemd, and manual-page
            references to understand users, privilege, permissions, services,
            logs, remote access, firewalling, and evidence.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            Linux administration can change a large amount of system state with
            a small command. Check scope, dependencies, and side effects before
            making broad changes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Linux resource rule
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Understand the command before running the command
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Use documentation whenever you are uncertain about syntax, scope,
            dependencies, or reversibility.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">Official references</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {officialResources.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-cyan-400/40"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
              <p className="mt-4 text-sm font-bold text-cyan-300">
                Open reference &rarr;
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">What to study</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {studyAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-xl font-black text-white">{area.title}</h3>

              <div className="mt-4 grid gap-2">
                {area.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm leading-6 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Observation command reference
        </h2>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {commands.map(([command, meaning]) => (
            <div
              key={command}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <code className="font-bold text-cyan-300">{command}</code>
              <p className="mt-2 text-sm leading-6 text-slate-300">{meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">Important Linux paths</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {importantPaths.map(([path, meaning]) => (
            <div
              key={path}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <code className="font-bold text-cyan-300">{path}</code>
              <p className="mt-3 text-sm leading-7 text-slate-400">{meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">
            Using references during competition work
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {competitionCases.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>

                <div className="mt-4 grid gap-2">
                  {item.steps.map((step, index) => (
                    <div
                      key={step}
                      className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-3"
                    >
                      <span className="font-black text-cyan-300">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-6 text-slate-300">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Weak habit vs better habit
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {weakVsBetter.map((item) => (
            <div
              key={item.weak}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                Weak habit
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                {item.weak}
              </p>

              <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                Better habit
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {item.better}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">
            Linux resource checklist
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {checklist.map((item, index) => (
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
              href="/cyberpatriot/resources"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Resources
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
              href="/cyberpatriot/resources/windows-server-active-directory"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Resource
            </Link>

            <Link href="/cyberpatriot/resources/cisco-networking" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}