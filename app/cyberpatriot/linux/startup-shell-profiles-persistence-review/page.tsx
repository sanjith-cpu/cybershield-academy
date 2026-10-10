import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain the difference between shell startup files, desktop autostart, system-wide profile scripts, and other startup mechanisms.",
  "Inspect user and system startup locations without immediately deleting unfamiliar files or commands.",
  "Identify persistence clues in shell profiles, XDG autostart entries, environment files, and startup scripts.",
  "Trace a startup command to its owner, executable, package, permissions, and purpose before taking action.",
  "Distinguish legitimate customization from misconfiguration, unauthorized persistence, and unknown behavior.",
  "Preserve evidence before disabling suspicious startup behavior and verify required user workflows afterward.",
];

const coreConcepts = [
  {
    title: "Login shell",
    text:
      "A login shell may read one set of profile files when a user signs in through a console, terminal, or remote session.",
  },
  {
    title: "Interactive shell",
    text:
      "Interactive shells can read shell-specific files such as .bashrc. These files often customize aliases, prompts, environment variables, and commands.",
  },
  {
    title: "System-wide profile",
    text:
      "Files under /etc can affect many users at once. A small change in a global profile can alter every interactive session.",
  },
  {
    title: "Desktop autostart",
    text:
      "Graphical environments can launch applications automatically when a user signs in. These entries are separate from shell profile files.",
  },
  {
    title: "Environment configuration",
    text:
      "Environment variables influence application behavior, search paths, proxies, language, and tool execution.",
  },
  {
    title: "Persistence",
    text:
      "Any mechanism that repeatedly launches a command at login or startup can be legitimate automation or a persistence technique. Context decides which.",
  },
];

const importantPaths = [
  {
    path: "~/.bashrc",
    purpose:
      "Common Bash interactive-shell configuration for a user.",
    caution:
      "May contain aliases, functions, PATH changes, or commands that run every time an interactive shell starts.",
  },
  {
    path: "~/.profile",
    purpose:
      "Common per-user login profile read by compatible shells or display managers.",
    caution:
      "A command here can affect login sessions even when .bashrc looks normal.",
  },
  {
    path: "~/.bash_profile",
    purpose:
      "Optional Bash login profile that may be preferred over ~/.profile when present.",
    caution:
      "Its presence can change which profile file Bash reads at login.",
  },
  {
    path: "/etc/profile",
    purpose:
      "System-wide login profile for many shell environments.",
    caution:
      "Changes can affect every user. Preserve evidence and understand downstream impact before editing.",
  },
  {
    path: "/etc/profile.d/",
    purpose:
      "System-wide shell profile fragments commonly used by packages and administrators.",
    caution:
      "Many files are package-managed. Check package ownership before removing anything.",
  },
  {
    path: "/etc/bash.bashrc",
    purpose:
      "System-wide Bash interactive-shell configuration on Ubuntu-family systems.",
    caution:
      "A command here can affect every Bash user session.",
  },
  {
    path: "~/.config/autostart/",
    purpose:
      "Per-user XDG desktop autostart entries.",
    caution:
      "A .desktop file here can launch a program automatically at graphical login.",
  },
  {
    path: "/etc/xdg/autostart/",
    purpose:
      "System-wide desktop autostart entries used by many Linux desktop environments.",
    caution:
      "Package-managed desktop components often place legitimate entries here.",
  },
  {
    path: "/etc/environment",
    purpose:
      "System-wide environment variable configuration used by some login/session components.",
    caution:
      "Not a general shell script. Treat its syntax differently from Bash files.",
  },
];

const inspectionCommands = [
  {
    command: "ls -la ~",
    purpose:
      "Inventory user profile files including hidden shell startup files.",
  },
  {
    command: "sed -n '1,220p' ~/.bashrc",
    purpose:
      "Review the user's Bash interactive configuration without editing it.",
  },
  {
    command: "sed -n '1,220p' ~/.profile",
    purpose:
      "Review common per-user login profile content.",
  },
  {
    command: "sudo sed -n '1,220p' /etc/profile",
    purpose:
      "Review system-wide login profile content.",
  },
  {
    command: "sudo ls -la /etc/profile.d",
    purpose:
      "Inventory system-wide profile fragments.",
  },
  {
    command: "sudo grep -RInE 'curl|wget|nc|ncat|python|perl|bash -c|sh -c|/tmp/|/dev/shm/' /etc/profile /etc/profile.d /etc/bash.bashrc 2>/dev/null",
    purpose:
      "Search common global shell startup locations for commands that deserve closer review.",
  },
  {
    command: "find ~/.config/autostart -maxdepth 1 -type f -name '*.desktop' -ls 2>/dev/null",
    purpose:
      "Inventory per-user desktop autostart entries when the directory exists.",
  },
  {
    command: "sudo find /etc/xdg/autostart -maxdepth 1 -type f -name '*.desktop' -ls 2>/dev/null",
    purpose:
      "Inventory system-wide desktop autostart entries.",
  },
  {
    command: "env | sort",
    purpose:
      "Review the current shell environment for unexpected PATH, proxy, or other variables.",
  },
  {
    command: "printf '%s\\n' \"$PATH\"",
    purpose:
      "Inspect the current command-search path in order.",
  },
  {
    command: "stat /path/to/file",
    purpose:
      "Review ownership, permissions, size, and timestamps for a suspicious startup file or script.",
  },
  {
    command: "dpkg -S /path/to/file",
    purpose:
      "Check whether a startup file belongs to an installed Debian package.",
  },
];

const shellBehavior = [
  {
    context: "Bash login shell",
    files:
      "/etc/profile, then the first applicable user login file such as ~/.bash_profile or ~/.profile",
    note:
      "Exact behavior depends on shell and invocation mode. Do not assume every terminal reads the same file.",
  },
  {
    context: "Bash interactive non-login shell",
    files:
      "/etc/bash.bashrc and ~/.bashrc on typical Ubuntu-family systems",
    note:
      "Opening a new terminal window commonly falls into this category.",
  },
  {
    context: "Graphical desktop login",
    files:
      "Desktop session files plus XDG autostart entries",
    note:
      "A graphical session can launch applications without any shell profile command.",
  },
  {
    context: "SSH login",
    files:
      "Depends on shell and SSH session type",
    note:
      "A remote interactive shell may read different profile files than a local GUI terminal.",
  },
  {
    context: "Non-interactive script",
    files:
      "Usually does not load the full interactive shell profile set",
    note:
      "Do not rely on aliases or interactive environment behavior inside scripts.",
  },
];

const desktopAutostartFields = [
  {
    field: "Name",
    meaning:
      "Human-readable label for the application or startup item.",
  },
  {
    field: "Exec",
    meaning:
      "Command launched by the desktop environment.",
  },
  {
    field: "Hidden",
    meaning:
      "Can be used to disable an autostart entry in some desktop environments.",
  },
  {
    field: "OnlyShowIn / NotShowIn",
    meaning:
      "Controls which desktop environments should or should not launch the item.",
  },
  {
    field: "X-GNOME-Autostart-enabled",
    meaning:
      "GNOME-family extension that may indicate whether the item is enabled.",
  },
  {
    field: "Type",
    meaning:
      "Commonly Application for executable desktop autostart entries.",
  },
];

const classification = [
  {
    label: "Required",
    signs:
      "Supports a scenario-required shell environment, application, desktop component, or user workflow.",
    action:
      "Preserve it and secure the referenced files, permissions, and command path.",
  },
  {
    label: "Legitimate",
    signs:
      "Expected shell customization, package-owned environment setup, or known desktop component.",
    action:
      "Leave intact unless there is a specific security or configuration issue.",
  },
  {
    label: "Misconfigured",
    signs:
      "Unsafe PATH ordering, broken command, world-writable script, duplicate startup item, insecure proxy value, or incorrect user context.",
    action:
      "Correct the narrow issue while preserving the intended function.",
  },
  {
    label: "Suspicious",
    signs:
      "Unexpected network download, hidden executable, /tmp or /dev/shm launch, encoded command, root-owned global profile entry, or unexplained autostart command.",
    action:
      "Preserve the file, command, metadata, package status, logs, and referenced executable before disabling it.",
  },
  {
    label: "Unknown",
    signs:
      "Purpose, package origin, user impact, or referenced executable is unclear.",
    action:
      "Investigate further instead of deleting the file because the name looks unfamiliar.",
  },
];

const reasoningCases = [
  {
    finding: "A line in ~/.bashrc launches a script",
    weak:
      "Delete the line because startup commands are suspicious.",
    better:
      "Inspect the script, owner, permissions, package/application role, and whether the user intentionally needs it before deciding.",
  },
  {
    finding: "PATH begins with a user-writable directory",
    weak:
      "Remove the whole PATH customization.",
    better:
      "Determine why the directory is present and whether privileged workflows rely on it. Correct unsafe ordering or permissions without breaking required tools.",
  },
  {
    finding: "A .desktop file autostarts an unfamiliar program",
    weak:
      "Delete the .desktop file immediately.",
    better:
      "Inspect Exec, file ownership, package origin, desktop purpose, and the launched executable before disabling it.",
  },
  {
    finding: "A profile script uses curl",
    weak:
      "Any startup download is malicious.",
    better:
      "Treat it as high priority because network retrieval at login is risky, but inspect source, destination, integrity checks, package ownership, and scenario purpose before concluding.",
  },
  {
    finding: "A file exists in /etc/profile.d",
    weak:
      "It affects all users, so remove it.",
    better:
      "Many legitimate packages use /etc/profile.d. Check package ownership and contents before changing global shell behavior.",
  },
  {
    finding: "A profile file was recently modified",
    weak:
      "Recent timestamp proves compromise.",
    better:
      "Use timestamps as one clue and correlate them with package upgrades, administrator work, logs, file contents, and other evidence.",
  },
];

const pathSecurity = [
  {
    title: "Search order matters",
    text:
      "When a command is run without an absolute path, the shell searches PATH from left to right. Earlier directories can override later ones.",
  },
  {
    title: "Writable directories increase risk",
    text:
      "If an untrusted user can place executables in an early PATH directory, command hijacking becomes more plausible.",
  },
  {
    title: "Current directory should be treated carefully",
    text:
      "Including . in PATH can cause commands in the current working directory to run unexpectedly.",
  },
  {
    title: "Absolute paths reduce ambiguity",
    text:
      "Security-sensitive startup scripts should use explicit executable paths when practical.",
  },
  {
    title: "sudo has its own environment rules",
    text:
      "Do not assume the user's PATH and root's secure_path are identical.",
  },
  {
    title: "Aliases are not universal",
    text:
      "Aliases and shell functions affect interactive shells but may not apply to scripts or other execution contexts.",
  },
];

const persistenceIndicators = [
  {
    indicator: "Startup command points to /tmp or /dev/shm",
    reasoning:
      "Temporary memory-backed or world-writable locations can be useful to attackers and deserve close review.",
  },
  {
    indicator: "Encoded shell command",
    reasoning:
      "Encoding or obfuscation can hide intent and raises investigation priority.",
  },
  {
    indicator: "Global profile launches a network client",
    reasoning:
      "A command that contacts a remote endpoint every user login can create wide-impact persistence.",
  },
  {
    indicator: "Per-user autostart entry with misleading name",
    reasoning:
      "A friendly desktop label can hide an unexpected Exec command.",
  },
  {
    indicator: "Startup script recreates a deleted process or file",
    reasoning:
      "Repeated recreation suggests the startup mechanism is the persistence source.",
  },
  {
    indicator: "World-writable referenced script",
    reasoning:
      "A legitimate startup mechanism becomes dangerous if lower-privileged users can alter what it executes.",
  },
];

const controlledActions = [
  {
    goal: "Edit a user's Bash configuration",
    command: "nano ~/.bashrc",
    caution:
      "Preserve the original line or file before removing startup behavior.",
  },
  {
    goal: "Edit a system profile fragment",
    command: "sudoedit /etc/profile.d/example.sh",
    caution:
      "Global changes affect multiple users. Confirm package ownership and required behavior first.",
  },
  {
    goal: "Disable one per-user desktop autostart entry",
    command: "mv ~/.config/autostart/example.desktop ~/.config/autostart/example.desktop.disabled",
    caution:
      "Preserves the original file for review better than immediate deletion. Use only when the item is confirmed unnecessary or unauthorized.",
  },
  {
    goal: "Validate shell syntax",
    command: "bash -n /path/to/script",
    caution:
      "Syntax validation does not prove the script is safe or appropriate to execute.",
  },
  {
    goal: "Review script ownership",
    command: "stat /path/to/script",
    caution:
      "Check the full directory path too, not only the final file.",
  },
  {
    goal: "Check package ownership",
    command: "dpkg -S /path/to/file",
    caution:
      "Package ownership provides context but does not replace content review.",
  },
];

const evidenceSources = [
  {
    source: "User shell profile",
    command: "sed -n '1,220p' ~/.bashrc",
    value:
      "Shows aliases, functions, environment changes, and commands executed for interactive Bash sessions.",
  },
  {
    source: "Login profile",
    command: "sed -n '1,220p' ~/.profile",
    value:
      "Shows per-user login initialization that may affect graphical or shell sessions.",
  },
  {
    source: "Global profile fragments",
    command: "sudo ls -la /etc/profile.d",
    value:
      "Shows files that can affect many users at login.",
  },
  {
    source: "Desktop autostart",
    command: "find ~/.config/autostart -maxdepth 1 -type f -name '*.desktop' -ls 2>/dev/null",
    value:
      "Shows user-level graphical startup entries.",
  },
  {
    source: "Environment",
    command: "env | sort",
    value:
      "Shows current variables that may influence paths, proxies, tools, and applications.",
  },
  {
    source: "File metadata",
    command: "stat /path/to/file",
    value:
      "Shows ownership, permissions, timestamps, and other filesystem metadata.",
  },
];

const highRiskShortcuts = [
  {
    shortcut: "Deleting every unfamiliar line from .bashrc",
    risk:
      "Can break development tools, aliases, required environment variables, and legitimate user workflows.",
  },
  {
    shortcut: "Removing /etc/profile.d files without package checks",
    risk:
      "Can break installed software that depends on system-wide environment initialization.",
  },
  {
    shortcut: "Running an unfamiliar startup command manually",
    risk:
      "Can trigger the exact suspicious behavior you are trying to investigate.",
  },
  {
    shortcut: "Deleting autostart files before preserving them",
    risk:
      "Removes evidence about the command, label, desktop targeting, and referenced executable.",
  },
  {
    shortcut: "Changing PATH without understanding search order",
    risk:
      "Can make required commands disappear or cause different executables to run.",
  },
  {
    shortcut: "Treating timestamps as proof",
    risk:
      "Package updates and legitimate administrator actions can also create recent timestamps.",
  },
];

const verification = [
  {
    area: "Shell startup",
    check:
      "Open a new authorized shell and confirm required environment variables, commands, and prompt behavior still work.",
  },
  {
    area: "Login session",
    check:
      "Verify required login workflows remain functional after profile changes.",
  },
  {
    area: "Desktop session",
    check:
      "Confirm expected desktop applications start and unauthorized autostart behavior no longer occurs.",
  },
  {
    area: "PATH",
    check:
      "Confirm command-search order is intentional and required tools still resolve correctly.",
  },
  {
    area: "Persistence",
    check:
      "Confirm removed or disabled startup behavior does not recreate the suspicious process or file.",
  },
  {
    area: "Evidence",
    check:
      "Confirm suspicious files, commands, metadata, and package information were preserved before destructive cleanup.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Read the fictional scenario: Morgan requires a custom development PATH entry; the desktop environment uses several package-owned autostart items; an unknown user-level autostart entry launches /tmp/update-helper.",
  },
  {
    step: "02",
    task:
      "Inventory Morgan's shell profiles, system profile fragments, current PATH, per-user autostart entries, and system-wide autostart files without changing anything.",
  },
  {
    step: "03",
    task:
      "Preserve the unknown .desktop file, Exec command, referenced executable, ownership, permissions, timestamps, and package lookup.",
  },
  {
    step: "04",
    task:
      "Inspect whether the referenced executable launches a process, opens a network connection, or recreates itself in the fictional lab.",
  },
  {
    step: "05",
    task:
      "Classify the development PATH entry as Required, package-owned desktop entries as Legitimate, and the unknown autostart item as Suspicious only after evidence supports that conclusion.",
  },
  {
    step: "06",
    task:
      "Disable the confirmed unauthorized startup entry while preserving the original file and leaving required shell and desktop configuration intact.",
  },
  {
    step: "07",
    task:
      "Verify shell startup, PATH, graphical login behavior, required applications, and absence of suspicious process recreation.",
  },
];

const checklist = [
  "I understand the difference between login-shell files, interactive-shell files, and desktop autostart entries.",
  "I inspect both user-level and system-wide startup locations.",
  "I know /etc/profile.d files are often package-managed and should not be deleted blindly.",
  "I inspect Exec fields in .desktop autostart files instead of trusting their display names.",
  "I review PATH order and writable directories before deciding a customization is safe.",
  "I trace startup commands to their referenced scripts, executables, owners, packages, and permissions.",
  "I treat unusual network or encoded startup commands as high-priority evidence, not automatic proof.",
  "I preserve suspicious startup files before disabling them.",
  "I avoid running unfamiliar startup commands manually during investigation.",
  "I verify required shell and desktop workflows after changes.",
];

const reflection = [
  "Why might ~/.bashrc and ~/.profile behave differently?",
  "Why should package ownership be checked before removing a file from /etc/profile.d?",
  "How can PATH order create a command-hijacking risk?",
  "Why is a .desktop file's Name field less important than its Exec field during investigation?",
  "What evidence should be preserved before disabling a suspicious startup entry?",
  "What should you verify after removing unauthorized startup persistence from a user's session?",
];

export default function LinuxStartupShellProfilesPersistenceReviewPage() {
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
              href="/cyberpatriot/linux/cron-jobs-scheduled-persistence"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/logs-journalctl-system-evidence"
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
                Linux · Lesson 13
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Startup, Shell Profiles & Persistence Review
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review shell startup files, environment configuration, PATH
                behavior, XDG desktop autostart entries, and system-wide profile
                scripts while preserving legitimate user workflows.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Startup persistence is broader than cron and systemd. Commands
                can execute when a user opens a shell, signs in, starts a desktop
                session, or loads environment configuration. The goal is to
                trace each startup action to its real purpose and owner.
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
                  <span>Startup paths</span>
                  <span className="font-bold text-white">9</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Evidence-based startup review</span>
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
            Trace what launches when users sign in or open shells
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
              Startup behavior depends on session type
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A local terminal, SSH login, graphical desktop session, and
              non-interactive script can load different files. Inspect the
              actual execution context instead of assuming one profile controls
              everything.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Persistence risk
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              One small profile line can execute repeatedly
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A command placed in a widely loaded shell or desktop startup file
              can run every login or terminal launch. Preserve the file and
              referenced executable before cleanup.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Startup fundamentals
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six concepts behind session startup
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
            Important startup paths
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Shell and desktop persistence live in different locations
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {importantPaths.map((item) => (
              <div
                key={item.path}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-base font-black text-cyan-200">
                  {item.path}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <div className="mt-4 rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                  <p className="text-sm leading-6 text-slate-400">
                    {item.caution}
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
            Session behavior
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Different sessions can read different startup files
          </h2>

          <div className="mt-8 grid gap-4">
            {shellBehavior.map((item) => (
              <div
                key={item.context}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.75fr_1.1fr_1.2fr]"
              >
                <h3 className="text-lg font-black text-white">{item.context}</h3>
                <p className="text-sm leading-6 text-cyan-200">
                  {item.files}
                </p>
                <p className="text-sm leading-6 text-slate-400">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Inspection first
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Inventory startup behavior before editing it
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
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Desktop autostart
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Read the Exec field, not just the display name
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {desktopAutostartFields.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-base font-black text-cyan-200">
                  {item.field}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <p className="text-sm font-black text-cyan-200">
              Example review target
            </p>
            <code className="mt-3 block overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-cyan-200">
              Exec=/usr/bin/example-app --background
            </code>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Investigate the executable path, package ownership, user context,
              and purpose. A harmless-looking Name field does not prove what the
              entry actually launches.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            PATH security
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Command lookup order can change what actually runs
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pathSecurity.map((item) => (
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
            Classification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Required, legitimate, misconfigured, suspicious, or unknown
          </h2>

          <div className="mt-8 grid gap-4">
            {classification.map((item) => (
              <div
                key={item.label}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.55fr_1.2fr_1fr]"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Evidence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.signs}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.action}
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
            Persistence indicators
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Patterns that deserve closer review
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {persistenceIndicators.map((item) => (
              <div
                key={item.indicator}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.indicator}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.reasoning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Trace startup behavior before you remove it
          </h2>

          <div className="mt-8 grid gap-5">
            {reasoningCases.map((item) => (
              <div
                key={item.finding}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-black text-white">{item.finding}</h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak response
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.weak}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Better reasoning
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.better}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Evidence sources
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve startup context before cleanup
            </h2>

            <div className="mt-6 grid gap-3">
              {evidenceSources.map((item) => (
                <div
                  key={item.source}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.source}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Controlled actions
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve first, then disable narrowly
            </h2>

            <div className="mt-6 grid gap-3">
              {controlledActions.map((item) => (
                <div
                  key={item.goal}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.goal}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.caution}
                  </p>
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
            Startup cleanup that can break user sessions or erase evidence
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highRiskShortcuts.map((item) => (
              <div
                key={item.shortcut}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.shortcut}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.risk}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Verification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Prove the user's required session still works
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {verification.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.check}
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
            Investigate fictional desktop startup persistence
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
                Startup persistence can hide in shell profiles, environment
                files, desktop autostart entries, and global configuration. Map
                the execution context, preserve the evidence, and disable only
                the behavior that is actually unauthorized.
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
              href="/cyberpatriot/linux/cron-jobs-scheduled-persistence"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/logs-journalctl-system-evidence"
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
