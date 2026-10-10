import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how the Linux filesystem is organized and why important paths matter during defensive review.",
  "Recognize the difference between system configuration, user data, logs, temporary files, software, devices, and mounted filesystems.",
  "Use safe inspection commands to identify what a file or directory is before changing it.",
  "Interpret absolute paths, relative paths, hidden files, symbolic links, ownership, timestamps, and mount points.",
  "Know which high-value Linux paths commonly contain account, service, authentication, networking, logging, package, and startup information.",
  "Avoid destructive filesystem changes until purpose, dependency, ownership, and evidence value are understood.",
];

const coreConcepts = [
  {
    title: "Everything begins at /",
    text:
      "Linux uses one directory tree rooted at /. Drives, partitions, removable media, and network filesystems appear somewhere inside that tree instead of receiving Windows-style drive letters.",
  },
  {
    title: "Paths describe location",
    text:
      "An absolute path starts at /, such as /etc/ssh/sshd_config. A relative path starts from the current working directory, such as ./notes.txt or ../logs.",
  },
  {
    title: "Names can be hidden",
    text:
      "Files and directories beginning with a dot are normally hidden from a basic directory listing. Hidden does not mean malicious; many legitimate user and application settings use dotfiles.",
  },
  {
    title: "Links can point elsewhere",
    text:
      "A symbolic link is a reference to another path. Inspect where a link resolves before changing or deleting it because the visible path may not be the real file.",
  },
  {
    title: "Mounts change what a path represents",
    text:
      "A directory may be a mount point for another filesystem. Changes beneath it can affect a separate disk, partition, removable device, or network share.",
  },
  {
    title: "Metadata is evidence",
    text:
      "Ownership, permissions, size, timestamps, file type, link target, and filesystem location can help explain what a file is and how it is used.",
  },
];

const hierarchy = [
  {
    path: "/",
    name: "Root",
    purpose:
      "Top of the Linux filesystem tree. Every other path is below it.",
    review:
      "Use it as the starting point for understanding where system, user, application, and mounted data live.",
  },
  {
    path: "/etc",
    name: "System configuration",
    purpose:
      "Stores many system-wide configuration files for accounts, services, networking, authentication, scheduled jobs, and applications.",
    review:
      "High-value for defensive review, but changes here can affect the entire system. Inspect and preserve originals before editing.",
  },
  {
    path: "/home",
    name: "User home directories",
    purpose:
      "Usually stores normal users' personal files, shell configuration, application settings, SSH data, and other user-scoped content.",
    review:
      "Compare directory ownership with authorized users and inspect hidden configuration only when relevant to the scenario.",
  },
  {
    path: "/root",
    name: "Root user's home",
    purpose:
      "Home directory for the root account.",
    review:
      "Treat as highly privileged. Files here may contain administrative scripts, shell history, SSH material, or evidence.",
  },
  {
    path: "/var",
    name: "Variable application and system data",
    purpose:
      "Stores changing data such as logs, caches, queues, application state, databases, package information, and web content on many systems.",
    review:
      "Important subdirectories include /var/log, /var/lib, /var/cache, and sometimes /var/www.",
  },
  {
    path: "/var/log",
    name: "Logs",
    purpose:
      "Contains many text logs and service-specific log directories, depending on the distribution and service.",
    review:
      "Preserve relevant logs before remediation and correlate them with journalctl rather than assuming every event is stored here.",
  },
  {
    path: "/usr",
    name: "Installed user-space software and shared data",
    purpose:
      "Contains many commands, libraries, documentation, and application resources installed by the operating system or package manager.",
    review:
      "Unexpected files can matter, but package-managed content should not be modified casually.",
  },
  {
    path: "/usr/bin",
    name: "Common commands",
    purpose:
      "Contains many executable programs available to users and administrators.",
    review:
      "If a process runs an unfamiliar executable here, identify its package and purpose before judging it.",
  },
  {
    path: "/usr/sbin",
    name: "Administrative commands",
    purpose:
      "Contains many system-administration utilities and service-related executables.",
    review:
      "Administrative location alone does not make a file suspicious.",
  },
  {
    path: "/bin and /sbin",
    name: "Essential command paths",
    purpose:
      "Traditionally contain essential commands. On modern Ubuntu-based systems they may be symbolic links into /usr.",
    review:
      "Use readlink or ls -l to understand the actual layout instead of assuming every distribution stores binaries identically.",
  },
  {
    path: "/opt",
    name: "Optional or third-party software",
    purpose:
      "Often used by manually installed or vendor software outside the normal package-managed hierarchy.",
    review:
      "Useful place to investigate unfamiliar applications, but confirm legitimacy and dependencies before removal.",
  },
  {
    path: "/tmp",
    name: "Temporary files",
    purpose:
      "Shared temporary storage used by users, applications, installers, and scripts.",
    review:
      "Temporary does not mean safe to delete blindly. Active applications may rely on files here, and artifacts may matter to forensics.",
  },
  {
    path: "/run",
    name: "Runtime state",
    purpose:
      "Stores volatile runtime information such as PID files, sockets, lock state, and other data created since boot.",
    review:
      "Useful for understanding active services and runtime behavior. Much of it disappears after reboot.",
  },
  {
    path: "/dev",
    name: "Device interfaces",
    purpose:
      "Represents devices and pseudo-devices as filesystem objects.",
    review:
      "Do not treat these like ordinary files. Writing to device paths can have direct system effects.",
  },
  {
    path: "/proc",
    name: "Process and kernel information",
    purpose:
      "Virtual filesystem exposing live process and kernel information.",
    review:
      "Excellent for inspection. Content reflects current system state and is not ordinary persistent disk data.",
  },
  {
    path: "/sys",
    name: "Kernel and device information",
    purpose:
      "Virtual filesystem exposing kernel objects, devices, drivers, and system attributes.",
    review:
      "Primarily inspect unless you clearly understand the effect of writing to a sysfs control.",
  },
  {
    path: "/boot",
    name: "Boot files",
    purpose:
      "Contains bootloader and kernel-related files used to start the system.",
    review:
      "High-impact area. Avoid changing boot content during routine hardening unless the scenario specifically requires it.",
  },
  {
    path: "/mnt and /media",
    name: "Mounted filesystems",
    purpose:
      "Common locations for manually mounted filesystems and removable media.",
    review:
      "Check what is mounted before assuming the files belong to the root filesystem.",
  },
];

const highValuePaths = [
  {
    category: "Accounts",
    paths: [
      "/etc/passwd",
      "/etc/shadow",
      "/etc/group",
      "/etc/gshadow",
      "/etc/sudoers",
      "/etc/sudoers.d/",
    ],
    purpose:
      "User, group, password-hash metadata, and sudo configuration.",
  },
  {
    category: "Authentication",
    paths: [
      "/etc/pam.d/",
      "/etc/login.defs",
      "/etc/security/",
    ],
    purpose:
      "Authentication modules, login defaults, and security-related configuration.",
  },
  {
    category: "SSH",
    paths: [
      "/etc/ssh/sshd_config",
      "/etc/ssh/sshd_config.d/",
      "~/.ssh/",
    ],
    purpose:
      "System-wide SSH server settings and user-level SSH keys or authorization data.",
  },
  {
    category: "Networking",
    paths: [
      "/etc/hosts",
      "/etc/resolv.conf",
      "/etc/netplan/",
      "/etc/NetworkManager/",
    ],
    purpose:
      "Hostname resolution, DNS state, network configuration, and NetworkManager configuration where used.",
  },
  {
    category: "Services",
    paths: [
      "/etc/systemd/system/",
      "/usr/lib/systemd/system/",
      "/lib/systemd/system/",
    ],
    purpose:
      "systemd unit files and local overrides. Exact vendor-unit location can vary across systems.",
  },
  {
    category: "Scheduled execution",
    paths: [
      "/etc/crontab",
      "/etc/cron.d/",
      "/etc/cron.daily/",
      "/etc/cron.hourly/",
      "/var/spool/cron/",
    ],
    purpose:
      "System and user scheduled tasks. Exact spool paths can vary by distribution and configuration.",
  },
  {
    category: "Logs",
    paths: [
      "/var/log/",
      "/var/log/auth.log",
      "/var/log/syslog",
      "/var/log/apt/",
    ],
    purpose:
      "Traditional text logs, authentication evidence, general system messages, and package-management history where present.",
  },
  {
    category: "Web content",
    paths: [
      "/var/www/",
      "/etc/apache2/",
      "/etc/nginx/",
    ],
    purpose:
      "Common web roots and web-service configuration when Apache or Nginx is installed.",
  },
  {
    category: "User startup",
    paths: [
      "~/.profile",
      "~/.bashrc",
      "~/.bash_profile",
      "~/.config/autostart/",
    ],
    purpose:
      "User shell and graphical startup behavior. Which files are used depends on shell and desktop environment.",
  },
];

const inspectionCommands = [
  {
    command: "pwd",
    meaning:
      "Print the current working directory so you know what relative paths will refer to.",
  },
  {
    command: "ls -la",
    meaning:
      "List files including hidden entries, with ownership, permissions, size, and timestamps.",
  },
  {
    command: "ls -ld /path",
    meaning:
      "Inspect the directory or link itself instead of listing its contents.",
  },
  {
    command: "file /path/to/item",
    meaning:
      "Identify the apparent file type using content and metadata rather than relying only on the filename extension.",
  },
  {
    command: "stat /path/to/item",
    meaning:
      "Display detailed metadata such as size, ownership, permissions, inode information, and timestamps.",
  },
  {
    command: "readlink -f /path/to/link",
    meaning:
      "Resolve a symbolic link to its final target when possible.",
  },
  {
    command: "findmnt",
    meaning:
      "Display mounted filesystems and their mount points so you can understand what storage a path belongs to.",
  },
  {
    command: "df -hT",
    meaning:
      "Show mounted filesystem capacity and filesystem type in human-readable form.",
  },
  {
    command: "du -sh /path",
    meaning:
      "Estimate the total space used by a directory or file tree without changing it.",
  },
  {
    command: "find /path -maxdepth 2 -type f -print 2>/dev/null",
    meaning:
      "List files within a limited search depth. Keep scope narrow so the command is useful and does not flood the terminal.",
  },
];

const pathReasoning = [
  {
    finding: "A file named update.sh appears in /tmp",
    weakConclusion:
      "It is in /tmp, so it must be malicious.",
    betterReasoning:
      "Inspect owner, permissions, timestamps, content, process references, scheduled execution, and whether a legitimate installer or application created it.",
  },
  {
    finding: "/bin points to /usr/bin",
    weakConclusion:
      "The /bin directory was replaced.",
    betterReasoning:
      "Modern Ubuntu-family systems commonly use a merged /usr layout. Confirm with ls -ld /bin and readlink rather than assuming compromise.",
  },
  {
    finding: "A hidden file exists in a user's home directory",
    weakConclusion:
      "Hidden means suspicious.",
    betterReasoning:
      "Many legitimate shell and application settings are dotfiles. Identify the file's purpose, owner, content, and startup behavior.",
  },
  {
    finding: "An executable exists under /opt",
    weakConclusion:
      "Anything in /opt is unauthorized.",
    betterReasoning:
      "Determine the software vendor, package or installation source, running processes, service dependencies, and scenario requirement first.",
  },
  {
    finding: "A directory contains root-owned files",
    weakConclusion:
      "The entire directory should belong to the user.",
    betterReasoning:
      "System or application files may legitimately be root-owned. Compare the expected ownership model before running chown.",
  },
  {
    finding: "A path under /mnt contains unusual files",
    weakConclusion:
      "Those files are part of the Linux image.",
    betterReasoning:
      "Check findmnt or mount first. The path may belong to another filesystem, removable device, or shared storage.",
  },
];

const timestamps = [
  {
    name: "Modification time",
    label: "mtime",
    meaning:
      "Usually reflects when file content was last modified.",
    caution:
      "Copying, restoring, extracting, editing, or tooling can alter timestamps. Treat them as evidence that needs context.",
  },
  {
    name: "Metadata change time",
    label: "ctime",
    meaning:
      "Reflects when inode metadata such as permissions, ownership, or links changed.",
    caution:
      "ctime is not file creation time. It can change even when file contents do not.",
  },
  {
    name: "Access time",
    label: "atime",
    meaning:
      "Can reflect when a file was accessed.",
    caution:
      "Mount options and filesystem behavior may reduce, delay, or suppress atime updates, so it is not universally reliable.",
  },
  {
    name: "Birth/creation time",
    label: "btime",
    meaning:
      "Some filesystems and tools may expose file creation time.",
    caution:
      "Availability varies. Do not assume every Linux filesystem records or exposes it.",
  },
];

const safeWorkflow = [
  {
    number: "01",
    title: "Locate",
    text:
      "Confirm the exact path and whether it is absolute or relative.",
  },
  {
    number: "02",
    title: "Classify",
    text:
      "Determine whether the item is a regular file, directory, symbolic link, device, socket, mount point, or another object type.",
  },
  {
    number: "03",
    title: "Inspect metadata",
    text:
      "Review ownership, permissions, size, timestamps, and link target.",
  },
  {
    number: "04",
    title: "Understand purpose",
    text:
      "Connect the path to a user, package, service, application, startup mechanism, log source, or scenario requirement.",
  },
  {
    number: "05",
    title: "Preserve evidence",
    text:
      "Capture relevant metadata, command output, and content before a destructive change if the item may matter to forensics.",
  },
  {
    number: "06",
    title: "Change narrowly",
    text:
      "Modify only the confirmed problem rather than recursively changing an entire tree.",
  },
  {
    number: "07",
    title: "Verify",
    text:
      "Re-inspect the path and test the dependent user, service, or application.",
  },
];

const dangerousPatterns = [
  {
    pattern: "Recursive chmod without a defined target model",
    why:
      "Different files and directories often require different permissions. A blanket recursive mode can break executables, private keys, services, or application data.",
  },
  {
    pattern: "Recursive chown across system directories",
    why:
      "Package-managed files, service accounts, and privileged configuration may depend on specific ownership.",
  },
  {
    pattern: "Deleting everything in /tmp because it is temporary",
    why:
      "Active applications may use temporary files or sockets, and artifacts may still be relevant to investigation.",
  },
  {
    pattern: "Editing /etc files without a backup or validation plan",
    why:
      "A syntax error in authentication, networking, sudo, SSH, or service configuration can create immediate operational problems.",
  },
  {
    pattern: "Following symbolic links without checking them",
    why:
      "A command aimed at one visible path may affect data stored somewhere else.",
  },
  {
    pattern: "Changing files under /proc, /sys, or /dev as if they were ordinary documents",
    why:
      "These paths represent live kernel, process, hardware, or device interfaces and can have direct system effects.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Identify the system and confirm the current directory with cat /etc/os-release and pwd.",
  },
  {
    step: "02",
    task:
      "Inspect /home, /etc, /var/log, /tmp, and /opt using ls -ld and ls -la without changing anything.",
  },
  {
    step: "03",
    task:
      "Use file and stat on a fictional script named /tmp/maintenance-check.sh and record its type, owner, permissions, and timestamps.",
  },
  {
    step: "04",
    task:
      "Use readlink -f on /bin and compare the result with the expected merged-/usr layout.",
  },
  {
    step: "05",
    task:
      "Use findmnt and df -hT to identify which filesystems are mounted and where.",
  },
  {
    step: "06",
    task:
      "Classify the fictional script as Required, Unnecessary, Suspicious, or Investigate based on evidence. Do not delete it just because it is stored in /tmp.",
  },
  {
    step: "07",
    task:
      "Document what additional evidence would be needed before remediation, such as cron references, process execution, package origin, or log events.",
  },
];

const commandPractice = [
  {
    prompt: "Where am I right now?",
    command: "pwd",
  },
  {
    prompt: "Show hidden files and ownership in the current directory.",
    command: "ls -la",
  },
  {
    prompt: "What type of object is this?",
    command: "file /path/to/item",
  },
  {
    prompt: "What are its detailed metadata and timestamps?",
    command: "stat /path/to/item",
  },
  {
    prompt: "Where does this symbolic link really point?",
    command: "readlink -f /path/to/link",
  },
  {
    prompt: "Is this directory on another mounted filesystem?",
    command: "findmnt",
  },
  {
    prompt: "How much space does this directory use?",
    command: "du -sh /path",
  },
  {
    prompt: "What files exist near this path without searching the whole system?",
    command: "find /path -maxdepth 2 -type f -print 2>/dev/null",
  },
];

const checklist = [
  "I can explain the difference between an absolute and relative path.",
  "I know that hidden files are not automatically suspicious.",
  "I check symbolic links before acting on the visible path.",
  "I check mount points before assuming where data is stored.",
  "I can identify high-value paths for users, sudo, SSH, networking, services, cron, and logs.",
  "I use pwd, ls, file, stat, readlink, findmnt, df, du, and scoped find commands for inspection.",
  "I understand that /proc, /sys, and /dev are not ordinary persistent data directories.",
  "I preserve useful metadata and evidence before destructive remediation.",
  "I avoid broad recursive chmod or chown changes without a known permission model.",
  "I verify dependent users, services, and applications after filesystem changes.",
];

const reflection = [
  "Why does Linux use one filesystem tree instead of drive letters?",
  "Why can a symbolic link make a filesystem change more dangerous than it first appears?",
  "Why should /tmp not be treated as a directory that is always safe to empty?",
  "What makes /etc especially important during defensive administration?",
  "Why can ownership or permission changes break a service even when the file still exists?",
  "How would you determine whether an unfamiliar file is required, suspicious, or simply unknown?",
];

export default function LinuxFilesystemImportantPathsPage() {
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

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux/competition-workflow"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              ← Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/users-groups-sudo"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lesson &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Linux · Lesson 02
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Linux Filesystem & Important Paths
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how Linux organizes system configuration, user data,
                software, logs, devices, temporary files, mounted storage, and
                runtime state so you can investigate before you change.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Filesystem knowledge is foundational to every later Linux lesson.
                Users, permissions, SSH, services, packages, persistence,
                networking, and forensic evidence all depend on knowing what a
                path represents and what may depend on it.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core concepts</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Filesystem areas</span>
                  <span className="font-bold text-white">18</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">10</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Understand before editing</span>
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
            What you should understand before touching important files
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
              A path tells you where something lives, not whether it is safe
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Security decisions require more than location. A file under /tmp
              can be legitimate, a file under /usr can be compromised, and a
              hidden file in a home directory can be completely normal. Combine
              path, metadata, purpose, dependencies, and evidence.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Safety boundary
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Never repair a filesystem by guesswork
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Deleting, moving, recursively changing ownership, or recursively
              changing permissions can break authentication, SSH, applications,
              package management, services, and evidence.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Filesystem fundamentals
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six ideas that make the directory tree easier to reason about
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coreConcepts.map((item) => (
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

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Linux filesystem map
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know what the major paths are for
          </h2>

          <div className="mt-8 grid gap-4">
            {hierarchy.map((item) => (
              <div
                key={item.path}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[150px_0.8fr_1.2fr]"
              >
                <div>
                  <code className="text-base font-black text-cyan-200">
                    {item.path}
                  </code>
                  <p className="mt-2 text-sm font-bold text-white">{item.name}</p>
                </div>

                <p className="text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>

                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Defensive review
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            High-value locations
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Paths you will revisit throughout the Linux pathway
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {highValuePaths.map((item) => (
              <div
                key={item.category}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.category}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>

                <div className="mt-4 grid gap-2">
                  {item.paths.map((path) => (
                    <code
                      key={path}
                      className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200"
                    >
                      {path}
                    </code>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Inspection commands
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Describe the filesystem before you modify it
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {inspectionCommands.map((item) => (
              <div
                key={item.command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-bold text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Keep searches scoped
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              A full-filesystem find can generate enormous output, cross mounted
              filesystems, hit permission errors, and waste competition time.
              Start with the smallest path and depth that can answer the question.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Evidence-based interpretation
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Replace location-based guesses with filesystem reasoning
          </h2>

          <div className="mt-8 grid gap-5">
            {pathReasoning.map((item) => (
              <div
                key={item.finding}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-black text-white">{item.finding}</h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak conclusion
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.weakConclusion}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Better reasoning
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.betterReasoning}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              File timestamps
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Useful evidence, not perfect truth
            </h2>

            <div className="mt-6 grid gap-3">
              {timestamps.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-black text-white">{item.name}</h3>
                    <code className="rounded-md border border-cyan-400/20 bg-cyan-400/10 px-2 py-1 text-xs font-bold text-cyan-200">
                      {item.label}
                    </code>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.meaning}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.caution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Safe filesystem workflow
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Seven steps before a high-impact change
            </h2>

            <div className="mt-6 grid gap-3">
              {safeWorkflow.map((item) => (
                <div
                  key={item.number}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">{item.number}</span>
                  <div>
                    <h3 className="font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-risk shortcuts
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Filesystem changes that deserve extra caution
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {dangerousPatterns.map((item) => (
              <div
                key={item.pattern}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.pattern}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Map a fictional Linux filesystem safely
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            The lab uses inspection first. The goal is to understand what an
            item is and what evidence you still need, not to rush into deletion.
          </p>

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
            Command practice
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Match the question to the inspection command
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {commandPractice.map((item) => (
              <div
                key={item.prompt}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-bold text-white">{item.prompt}</p>
                <code className="mt-3 block overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-cyan-200">
                  {item.command}
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Lesson checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Before moving on
            </h2>

            <div className="mt-6 grid gap-3">
              {checklist.map((item, index) => (
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

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Check your reasoning
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
                Carry this forward
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                The filesystem is the context for later Linux security work.
                Before changing an account file, SSH configuration, service,
                scheduled job, log, package, or permission, understand where it
                lives and what depends on it.
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

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux/competition-workflow"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              ← Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/users-groups-sudo"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lesson &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
