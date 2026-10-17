import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const officialResources = [
  {
    title: "Ubuntu Manpages",
    href: "https://manpages.ubuntu.com/",
    description:
      "Search Ubuntu manual pages for commands, configuration files, system calls, libraries, and administrative utilities.",
  },
  {
    title: "GNU Coreutils Manual",
    href: "https://www.gnu.org/software/coreutils/manual/coreutils.html",
    description:
      "Official documentation for common GNU tools such as ls, cp, mv, rm, chmod, chown, stat, sort, cut, head, tail, and many others.",
  },
  {
    title: "systemd Manual Pages",
    href: "https://systemd.io/",
    description:
      "Reference documentation for systemctl, journalctl, unit files, timers, targets, services, and other systemd components.",
  },
  {
    title: "Linux Kernel Documentation",
    href: "https://docs.kernel.org/",
    description:
      "Primary documentation for Linux kernel behavior, networking, filesystems, security features, and kernel interfaces.",
  },
];

const manSections = [
  {
    section: "1",
    title: "User Commands",
    examples: "ls, cat, grep, find, ps, ssh",
    detail:
      "Commands normally used directly from a shell by users and administrators.",
  },
  {
    section: "2",
    title: "System Calls",
    examples: "open, read, write, fork",
    detail:
      "Interfaces programs use to request services from the Linux kernel.",
  },
  {
    section: "3",
    title: "Library Functions",
    examples: "printf, malloc",
    detail:
      "Functions provided by programming libraries.",
  },
  {
    section: "4",
    title: "Devices",
    examples: "/dev entries",
    detail:
      "Special files and device interfaces.",
  },
  {
    section: "5",
    title: "File Formats",
    examples: "passwd, shadow, sudoers",
    detail:
      "Configuration-file formats and structured system files.",
  },
  {
    section: "7",
    title: "Miscellaneous",
    examples: "protocols and conventions",
    detail:
      "Standards, protocols, concepts, and general system information.",
  },
  {
    section: "8",
    title: "Administration",
    examples: "useradd, ip, mount",
    detail:
      "System administration and privileged management commands.",
  },
];

const commandGroups = [
  {
    title: "Identity & Privilege",
    commands: [
      ["id", "Display UID, GID, and group membership."],
      ["who", "Show logged-in users."],
      ["w", "Show logged-in users and their activity."],
      ["getent passwd", "Query account information through system databases."],
      ["getent group", "Query group information."],
      ["sudo -l", "Show sudo permissions available to the current user."],
    ],
  },
  {
    title: "Processes & Services",
    commands: [
      ["ps aux", "Review running processes."],
      ["pstree -ap", "Show process parent-child relationships."],
      ["systemctl", "Inspect and manage systemd units."],
      ["systemctl status NAME", "Review a specific service."],
      ["systemctl list-unit-files", "Review configured unit startup states."],
      ["journalctl -u NAME", "View journal entries for a service."],
    ],
  },
  {
    title: "Files & Permissions",
    commands: [
      ["ls -la", "Review files, ownership, and permissions."],
      ["stat FILE", "Display detailed file metadata."],
      ["find", "Search using path, owner, permission, time, and other criteria."],
      ["chmod", "Change permission bits."],
      ["chown", "Change file ownership."],
      ["readlink", "Resolve symbolic-link targets."],
    ],
  },
  {
    title: "Networking",
    commands: [
      ["ip addr", "Review interface addressing."],
      ["ip route", "Review routing state."],
      ["ss -tulpn", "Review listening TCP and UDP sockets."],
      ["ping", "Test basic network reachability."],
      ["traceroute", "Observe the path toward a destination when installed."],
      ["ufw status verbose", "Review UFW firewall state and rules."],
    ],
  },
  {
    title: "Logs & Text Analysis",
    commands: [
      ["journalctl", "Query the systemd journal."],
      ["grep", "Search text using patterns."],
      ["head", "Display the beginning of a file."],
      ["tail", "Display the end of a file."],
      ["less", "Read long output interactively."],
      ["sort | uniq", "Group and count repeated text values."],
    ],
  },
  {
    title: "Packages & System State",
    commands: [
      ["dpkg -l", "List Debian packages known to the system."],
      ["apt list --installed", "Review installed APT packages."],
      ["uname -a", "Display kernel and system information."],
      ["hostnamectl", "Review hostname and operating-system information."],
      ["df -h", "Review mounted filesystem space."],
      ["lsblk", "Review block devices and mount relationships."],
    ],
  },
];

const discoveryMethods = [
  {
    title: "man command",
    example: "man systemctl",
    detail:
      "Open the primary manual page for a command.",
  },
  {
    title: "Specific manual section",
    example: "man 5 passwd",
    detail:
      "Open a specific manual section when a name exists in multiple sections.",
  },
  {
    title: "Keyword search",
    example: "man -k password",
    detail:
      "Search manual-page names and descriptions for a keyword.",
  },
  {
    title: "Short description",
    example: "whatis chmod",
    detail:
      "Display the one-line manual description for a known command.",
  },
  {
    title: "Built-in help",
    example: "command --help",
    detail:
      "Quickly review syntax and common options without leaving the terminal.",
  },
  {
    title: "Shell help",
    example: "help cd",
    detail:
      "Use shell-provided help for commands implemented as shell built-ins.",
  },
];

const readingChecklist = [
  "Read the SYNOPSIS to understand required argument order.",
  "Check DESCRIPTION before copying an example.",
  "Review OPTIONS for scope-changing flags such as recursive or force.",
  "Check FILES to learn which configuration files the command uses.",
  "Review EXIT STATUS when troubleshooting scripts or failed commands.",
  "Read EXAMPLES only after understanding the command's purpose.",
  "Check SEE ALSO for related utilities and configuration references.",
  "Confirm whether the documentation matches the installed distribution and command version.",
];

const competitionCases = [
  {
    title: "You remember the command but not the option",
    steps: [
      "Do not guess a destructive or scope-changing flag.",
      "Open the manual page or --help output.",
      "Find the exact option and read its description.",
      "Check whether it is recursive, destructive, or requires privilege.",
      "Run the narrowest command that satisfies the task.",
    ],
  },
  {
    title: "A configuration file is unfamiliar",
    steps: [
      "Determine which program owns the file.",
      "Search for the file-format manual page, often in section 5.",
      "Identify valid directives and defaults.",
      "Preserve the original configuration before meaningful edits.",
      "Verify the affected service after the change.",
    ],
  },
  {
    title: "A service command behaves unexpectedly",
    steps: [
      "Check systemctl and the relevant unit documentation.",
      "Review systemctl status output.",
      "Review journalctl evidence.",
      "Inspect the unit file and any override files.",
      "Understand dependencies before restarting or disabling the service.",
    ],
  },
  {
    title: "You need to locate suspicious files",
    steps: [
      "Read the find manual if the expression is complex.",
      "Start with observation-only criteria.",
      "Confirm quoting and operator behavior.",
      "Review results before combining find with a modifying command.",
      "Avoid broad deletion pipelines during investigation.",
    ],
  },
];

const dangerousPatterns = [
  {
    pattern: "chmod -R",
    risk: "Can alter permissions across an entire directory tree.",
  },
  {
    pattern: "chown -R",
    risk: "Can break application ownership across many files.",
  },
  {
    pattern: "rm -rf",
    risk: "Removes files recursively without normal confirmation.",
  },
  {
    pattern: "find ... -delete",
    risk: "Can delete every object matching a search expression.",
  },
  {
    pattern: "systemctl disable --now",
    risk: "Changes startup behavior and immediately stops a service.",
  },
  {
    pattern: "iptables / nft flush operations",
    risk: "Can remove active firewall policy and change network exposure.",
  },
];

const weakVsBetter = [
  {
    weak: "Run the command from memory when the flags are uncertain.",
    better:
      "Check the manual page or --help before using unfamiliar or high-impact options.",
  },
  {
    weak: "Copy commands from random forum answers.",
    better:
      "Start with installed man pages and official project or distribution documentation.",
  },
  {
    weak: "Assume a command has the same behavior on every Linux system.",
    better:
      "Confirm the installed command, distribution, version, and implementation.",
  },
  {
    weak: "Use recursive options to save time.",
    better:
      "Make the smallest targeted change that solves the verified problem.",
  },
  {
    weak: "Pipe investigation output directly into a modifying command.",
    better:
      "Review the result set first, then separately perform justified changes.",
  },
  {
    weak: "Treat example commands as universal instructions.",
    better:
      "Understand what each argument means before adapting an example to the current system.",
  },
];

const finalChecklist = [
  "Use installed man pages as a first-line Linux reference.",
  "Know that manual sections distinguish commands, file formats, administration, and other topics.",
  "Use man -k when you know the concept but not the command name.",
  "Use section 5 references for important configuration-file formats.",
  "Use section 8 references for many administration commands.",
  "Read scope-changing options carefully.",
  "Avoid guessing recursive, force, delete, or disable flags.",
  "Use observation commands before modification commands.",
  "Confirm distribution and version differences.",
  "Use official project documentation when man pages are insufficient.",
  "Verify the system after meaningful administrative changes.",
  "Let the CyberPatriot scenario determine what should remain enabled and functional.",
];

export default function LinuxCommandsManualPagesResource() {
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
              href="/cyberpatriot/resources/sysinternals-windows-utilities"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Resource
            </Link>

            <Link href="/cyberpatriot/resources/wireshark-packet-analysis" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 lg:p-12">
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            CyberPatriot Resources &middot; Resource 07
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Linux Commands &amp; Manual Pages
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Build the habit of checking Linux documentation before using
            unfamiliar commands, options, configuration files, or system
            administration tools.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            Linux commands can be extremely precise, but a single option can
            also expand a change across an entire system. Manual pages help you
            understand syntax, scope, files, side effects, and related tools.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Command reference rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Never guess a high-impact option
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            If a flag changes files recursively, removes data, alters
            permissions, disables services, or modifies firewall state, check
            its documentation before running it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">Official references</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
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
        <h2 className="text-3xl font-black text-white">
          Understanding manual sections
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {manSections.map((item) => (
            <div
              key={item.section}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-sm font-black text-cyan-300">
                Section {item.section}
              </p>
              <h3 className="mt-2 text-xl font-black text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.detail}
              </p>
              <p className="mt-3 text-xs font-semibold text-slate-500">
                Examples: {item.examples}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Finding the right documentation
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {discoveryMethods.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <code className="mt-3 block rounded-lg border border-slate-800 bg-slate-950/70 p-3 text-sm text-cyan-300">
                {item.example}
              </code>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Command groups worth knowing
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {commandGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-xl font-black text-white">{group.title}</h3>

              <div className="mt-4 grid gap-3">
                {group.commands.map(([command, meaning]) => (
                  <div
                    key={command}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                  >
                    <code className="font-bold text-cyan-300">{command}</code>
                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {meaning}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">
            How to read a manual page
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {readingChecklist.map((item, index) => (
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
        <h2 className="text-3xl font-black text-white">
          Competition reference situations
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {competitionCases.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>

              <div className="mt-4 grid gap-2">
                {item.steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3"
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-impact patterns
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Read the documentation before using these broadly
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {dangerousPatterns.map((item) => (
              <div
                key={item.pattern}
                className="rounded-2xl border border-red-400/15 bg-slate-950/60 p-5"
              >
                <code className="font-bold text-red-200">{item.pattern}</code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.risk}
                </p>
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
            Linux command reference checklist
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
              href="/cyberpatriot/resources/sysinternals-windows-utilities"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Resource
            </Link>

            <Link href="/cyberpatriot/resources/wireshark-packet-analysis" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}