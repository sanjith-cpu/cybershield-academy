import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain why filesystem location is a major part of forensic context.",
  "Recognize important Windows and Linux directories that commonly contain user, system, application, log, startup, and temporary evidence.",
  "Distinguish system-wide locations from per-user locations.",
  "Understand why the same filename can have very different meaning depending on its path.",
  "Use directory structure, ownership, permissions, and application conventions to guide evidence collection.",
  "Avoid deleting or moving artifacts before their original locations are documented.",
];

const pathPrinciples = [
  {
    title: "Path changes meaning",
    text:
      "A file named updater.exe in a trusted application directory means something different from the same name in Downloads, Temp, or a user startup folder.",
  },
  {
    title: "User and system scope differ",
    text:
      "Per-user folders describe one profile's activity, while system-wide directories may affect every account on the machine.",
  },
  {
    title: "Applications leave traces",
    text:
      "Browsers, office tools, messaging apps, security products, and services often maintain logs, caches, profiles, history, or configuration files in predictable locations.",
  },
  {
    title: "Temporary does not mean irrelevant",
    text:
      "Temporary directories can contain installers, extracted files, scripts, caches, or short-lived artifacts useful for reconstruction.",
  },
  {
    title: "Hidden does not mean malicious",
    text:
      "Operating systems and applications legitimately hide many files and directories. Concealment is only one clue.",
  },
  {
    title: "Document before cleanup",
    text:
      "Record the original path, name, owner, timestamps, permissions, and hash where useful before moving or deleting anything.",
  },
];

const windowsRoots = [
  {
    path: "C:\\Windows",
    purpose:
      "Core operating system files, logs, services, drivers, updates, and system components.",
    forensicUse:
      "Useful for system configuration, event artifacts, service binaries, temporary update data, and operating-system context.",
  },
  {
    path: "C:\\Windows\\System32",
    purpose:
      "Important Windows executables, libraries, administrative tools, drivers, and configuration resources.",
    forensicUse:
      "Path context matters because many legitimate Windows processes run from here. A similarly named binary elsewhere may deserve closer review.",
  },
  {
    path: "C:\\Windows\\Temp",
    purpose:
      "System-level temporary storage.",
    forensicUse:
      "May contain installer remnants, temporary scripts, extracted files, or short-lived application artifacts.",
  },
  {
    path: "C:\\Program Files",
    purpose:
      "Primary location for installed 64-bit applications.",
    forensicUse:
      "Useful for validating expected application paths, installed software, service executables, and application configuration.",
  },
  {
    path: "C:\\Program Files (x86)",
    purpose:
      "Common location for 32-bit applications on 64-bit Windows.",
    forensicUse:
      "Helpful when comparing installed software, process paths, and application versions.",
  },
  {
    path: "C:\\ProgramData",
    purpose:
      "Shared application data for all users.",
    forensicUse:
      "Can contain service configuration, application logs, caches, databases, updater data, and shared state.",
  },
];

const windowsUserPaths = [
  {
    path: "C:\\Users\\<user>",
    purpose:
      "Root of a Windows user profile.",
    clues:
      "Ownership, profile-specific activity, personal files, browser data, and application settings.",
  },
  {
    path: "Desktop",
    purpose:
      "Files intentionally placed on the user's desktop.",
    clues:
      "Documents, shortcuts, tools, scripts, or training artifacts associated with the profile.",
  },
  {
    path: "Downloads",
    purpose:
      "Default location for many browser and application downloads.",
    clues:
      "Useful for correlating downloaded files with browser history, timestamps, hashes, and later execution evidence.",
  },
  {
    path: "Documents",
    purpose:
      "Common storage for user-created documents and project files.",
    clues:
      "Document metadata, recent activity, archives, scripts, or saved output.",
  },
  {
    path: "AppData\\Roaming",
    purpose:
      "Per-user application data designed to roam with a domain profile.",
    clues:
      "Application settings, profiles, startup shortcuts, caches, and user-specific configuration.",
  },
  {
    path: "AppData\\Local",
    purpose:
      "Per-user local application data.",
    clues:
      "Browser profiles, caches, temp-like application data, logs, databases, and local state.",
  },
  {
    path: "AppData\\LocalLow",
    purpose:
      "Per-user low-integrity application data.",
    clues:
      "Some applications store sandboxed or restricted-profile data here.",
  },
  {
    path: "AppData\\Local\\Temp",
    purpose:
      "Per-user temporary storage.",
    clues:
      "Temporary installers, extracted content, working files, caches, and transient artifacts.",
  },
];

const windowsStartup = [
  {
    area: "User Startup Folder",
    path:
      "C:\\Users\\<user>\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup",
    use:
      "Programs or shortcuts here can launch when that user signs in.",
  },
  {
    area: "All Users Startup Folder",
    path:
      "C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Startup",
    use:
      "Items here can affect multiple users.",
  },
  {
    area: "Task Scheduler",
    path:
      "Administrative interface and stored task definitions",
    use:
      "Scheduled execution can launch programs or scripts at logon, startup, time intervals, or events.",
  },
  {
    area: "Services",
    path:
      "Service Control Manager configuration and service executable paths",
    use:
      "Services can start automatically and run under specific accounts.",
  },
];

const windowsLogs = [
  {
    source: "Windows Event Logs",
    path:
      "Viewed through Event Viewer; underlying .evtx files are typically stored under C:\\Windows\\System32\\winevt\\Logs",
    value:
      "Security, System, Application, and specialized event channels.",
  },
  {
    source: "Windows Defender",
    path:
      "Event Viewer channels and Defender-related operational logs",
    value:
      "Detection, scan, remediation, and protection activity where logging is available.",
  },
  {
    source: "Application logs",
    path:
      "Varies by software; commonly under ProgramData, AppData, or the application's install directory",
    value:
      "Application-specific events, errors, update history, user activity, and service state.",
  },
  {
    source: "PowerShell logs",
    path:
      "Event Viewer channels when the relevant logging features are enabled",
    value:
      "Can provide command and script activity depending on configuration.",
  },
];

const linuxRoots = [
  {
    path: "/etc",
    purpose:
      "System-wide configuration.",
    forensicUse:
      "Accounts, authentication, services, network settings, scheduled jobs, application configuration, and policy.",
  },
  {
    path: "/var",
    purpose:
      "Variable system data.",
    forensicUse:
      "Logs, caches, spool data, application state, package metadata, and service data.",
  },
  {
    path: "/var/log",
    purpose:
      "Traditional Linux log directory.",
    forensicUse:
      "Authentication, system, service, package, kernel, and application logs depending on distribution and configuration.",
  },
  {
    path: "/home",
    purpose:
      "Regular user home directories.",
    forensicUse:
      "Documents, downloads, shell history, hidden application directories, SSH data, browser profiles, and user scripts.",
  },
  {
    path: "/root",
    purpose:
      "Home directory for the root account.",
    forensicUse:
      "Administrative shell history, scripts, configuration, and root-owned user artifacts.",
  },
  {
    path: "/tmp",
    purpose:
      "Temporary storage generally available to users and applications.",
    forensicUse:
      "Transient files, extracted content, scripts, sockets, temporary application data, and installers.",
  },
  {
    path: "/usr",
    purpose:
      "Installed user-space programs, libraries, documentation, and shared data.",
    forensicUse:
      "Useful for validating expected executable paths and installed software structure.",
  },
  {
    path: "/opt",
    purpose:
      "Optional or third-party software.",
    forensicUse:
      "May contain manually installed or vendor applications outside the normal package layout.",
  },
];

const linuxUserPaths = [
  {
    path: "/home/<user>",
    purpose:
      "User profile root.",
    clues:
      "Personal files, downloads, hidden application settings, shell history, SSH data, scripts, and configuration.",
  },
  {
    path: "~/Downloads",
    purpose:
      "Common user download directory.",
    clues:
      "Downloaded archives, installers, documents, and browser-linked evidence.",
  },
  {
    path: "~/.config",
    purpose:
      "Per-user application configuration under common desktop conventions.",
    clues:
      "Application settings, autostart entries, profiles, and user configuration.",
  },
  {
    path: "~/.local",
    purpose:
      "Per-user local data and installed content.",
    clues:
      "User-local applications, state, binaries, shares, caches, and application data.",
  },
  {
    path: "~/.cache",
    purpose:
      "Per-user application cache.",
    clues:
      "Temporary but potentially useful records of application activity.",
  },
  {
    path: "~/.ssh",
    purpose:
      "Per-user SSH configuration and keys.",
    clues:
      "Authorized keys, known hosts, client configuration, and key material. Handle secrets carefully.",
  },
  {
    path: "~/.bash_history",
    purpose:
      "Common Bash command history file.",
    clues:
      "May show prior interactive commands, but coverage is incomplete and depends on shell behavior and configuration.",
  },
];

const linuxStartup = [
  {
    area: "systemd system services",
    path:
      "/etc/systemd/system and distribution-managed unit locations",
    use:
      "Services and timers may start at boot or on triggers.",
  },
  {
    area: "User systemd services",
    path:
      "~/.config/systemd/user",
    use:
      "Per-user service and timer definitions.",
  },
  {
    area: "Cron",
    path:
      "/etc/crontab, /etc/cron.*, and user crontabs",
    use:
      "Scheduled commands and recurring jobs.",
  },
  {
    area: "Desktop autostart",
    path:
      "~/.config/autostart and system-wide autostart locations",
    use:
      "Graphical-session programs may launch automatically after login.",
  },
  {
    area: "Shell startup files",
    path:
      "~/.profile, ~/.bashrc, ~/.bash_profile, and related shell files",
    use:
      "Commands can execute during login or shell startup depending on the shell and file.",
  },
];

const linuxLogs = [
  {
    source: "systemd journal",
    path:
      "Queried with journalctl",
    value:
      "Boot, service, kernel, authentication, and application events depending on configuration.",
  },
  {
    source: "Authentication logs",
    path:
      "/var/log/auth.log on many Debian/Ubuntu-family systems",
    value:
      "Login, sudo, SSH, and PAM-related events where configured.",
  },
  {
    source: "Syslog",
    path:
      "/var/log/syslog on many Ubuntu-family systems",
    value:
      "General system and service messages where rsyslog-style logging is enabled.",
  },
  {
    source: "Package logs",
    path:
      "/var/log/apt and related package-management logs",
    value:
      "Install, upgrade, and package-management activity.",
  },
];

const pathComparison = [
  {
    scenario:
      "update.exe in C:\\Program Files\\VendorApp\\",
    interpretation:
      "Could be a legitimate vendor component. Validate signature, hash, installation context, service mapping, and logs.",
  },
  {
    scenario:
      "update.exe in C:\\Users\\student\\Downloads\\",
    interpretation:
      "User-space download context. Correlate browser history, timestamps, ownership, and execution evidence.",
  },
  {
    scenario:
      "update.exe in C:\\Users\\student\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\",
    interpretation:
      "The path adds automatic-start context and deserves review before any cleanup.",
  },
  {
    scenario:
      "update.sh in /usr/local/bin",
    interpretation:
      "Could be an administrator-installed utility. Check ownership, package/source context, permissions, and related services.",
  },
  {
    scenario:
      "update.sh in /tmp",
    interpretation:
      "Temporary location. Record timestamps, owner, content hash, process evidence, and related logs.",
  },
  {
    scenario:
      "update.sh in ~/.config/autostart",
    interpretation:
      "User login persistence context. Preserve the file and desktop entry details before changing it.",
  },
];

const windowsCommands = [
  {
    label: "List directory including hidden items",
    command: `Get-ChildItem "C:\\Users\\trainee\\Downloads" -Force`,
    purpose:
      "Shows normal and hidden items in a target directory.",
  },
  {
    label: "Show detailed file properties",
    command: `Get-Item "C:\\Users\\trainee\\Downloads\\sample.zip" | Format-List *`,
    purpose:
      "Provides path, size, timestamps, attributes, and other available metadata.",
  },
  {
    label: "Search recursively by filename",
    command: `Get-ChildItem "C:\\Users\\trainee" -Filter "sample.zip" -Recurse -Force -ErrorAction SilentlyContinue`,
    purpose:
      "Finds matching files under an authorized profile while suppressing inaccessible-path noise.",
  },
  {
    label: "Show environment paths",
    command: `$env:USERPROFILE
$env:APPDATA
$env:LOCALAPPDATA
$env:TEMP`,
    purpose:
      "Quickly identifies current-user profile, roaming data, local data, and temp locations.",
  },
];

const linuxCommands = [
  {
    label: "List including hidden entries",
    command: `ls -la /home/trainee/Downloads`,
    purpose:
      "Shows ownership, permissions, size, timestamp, and hidden items.",
  },
  {
    label: "Inspect detailed metadata",
    command: `stat /home/trainee/Downloads/sample.zip`,
    purpose:
      "Displays size, ownership, permissions, inode, and timestamp fields.",
  },
  {
    label: "Find a filename",
    command: `find /home/trainee -name "sample.zip" 2>/dev/null`,
    purpose:
      "Searches the authorized home directory while hiding permission errors.",
  },
  {
    label: "Show home and temp locations",
    command: `echo "$HOME"
echo "\${TMPDIR:-/tmp}"`,
    purpose:
      "Identifies common current-user storage locations.",
  },
];

const permissionsContext = [
  {
    title: "Owner",
    windows:
      "NTFS ownership and ACLs help identify who controls the object.",
    linux:
      "User and group ownership are shown by tools such as ls -l and stat.",
  },
  {
    title: "Permissions",
    windows:
      "NTFS ACLs can grant or deny access to users and groups.",
    linux:
      "Read, write, and execute bits plus ACLs determine access.",
  },
  {
    title: "Executable path",
    windows:
      "Processes and services should be tied to the actual binary path, not only a display name.",
    linux:
      "Resolve the executable path and package or installation source where practical.",
  },
  {
    title: "System vs user location",
    windows:
      "Program Files and Windows directories have different trust and privilege context from user profile folders.",
    linux:
      "/usr and /etc differ in purpose from /home and /tmp.",
  },
];

const hiddenItems = [
  {
    platform: "Windows",
    examples:
      "Hidden and system attributes, AppData, protected operating-system files, application caches.",
    caution:
      "Many legitimate Windows files are hidden by design.",
  },
  {
    platform: "Linux",
    examples:
      "Dotfiles and dot-directories such as .config, .ssh, .cache, and .local.",
    caution:
      "A leading dot is a normal Unix convention, not evidence of malicious intent.",
  },
];

const temporaryArtifacts = [
  {
    artifact:
      "Installer remnants",
    value:
      "Can help explain when software was installed or updated.",
  },
  {
    artifact:
      "Extracted archives",
    value:
      "May reveal the relationship between a downloaded archive and later files.",
  },
  {
    artifact:
      "Application caches",
    value:
      "Can preserve traces of documents, webpages, or application activity.",
  },
  {
    artifact:
      "Temporary scripts",
    value:
      "May show automation or setup activity, but require context before conclusions.",
  },
  {
    artifact:
      "Crash or error files",
    value:
      "Can contain timestamps, application names, or diagnostic details.",
  },
  {
    artifact:
      "Temporary copies",
    value:
      "Applications sometimes create working copies whose metadata differs from the original.",
  },
];

const scenarioEvidence = [
  {
    id: "F-01",
    platform: "Windows",
    path:
      "C:\\Users\\student1\\Downloads\\inventory.zip",
    note:
      "Archive created at 11:03 in the user Downloads folder.",
  },
  {
    id: "F-02",
    platform: "Windows",
    path:
      "C:\\Users\\student1\\AppData\\Local\\Temp\\inventory\\run.ps1",
    note:
      "Script appears two minutes later under the user's temporary directory.",
  },
  {
    id: "P-01",
    platform: "Windows",
    path:
      "C:\\Users\\student1\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\inventory.lnk",
    note:
      "Startup shortcut references a script under the user's profile.",
  },
  {
    id: "L-01",
    platform: "Linux",
    path:
      "/home/analyst/Downloads/package.tar.gz",
    note:
      "Archive appears in the analyst account's Downloads directory.",
  },
  {
    id: "L-02",
    platform: "Linux",
    path:
      "/tmp/package/install.sh",
    note:
      "Temporary extraction contains a shell script.",
  },
  {
    id: "L-03",
    platform: "Linux",
    path:
      "/home/analyst/.config/autostart/package.desktop",
    note:
      "Desktop autostart entry references a user-local script.",
  },
];

const scenarioQuestions = [
  {
    question:
      "Which paths provide download context?",
    answer:
      "F-01 and L-01 because both artifacts are in user Downloads directories.",
  },
  {
    question:
      "Which paths add temporary-extraction context?",
    answer:
      "F-02 and L-02 because both sit in temporary storage associated with extracted or transient content.",
  },
  {
    question:
      "Which paths add automatic-start context?",
    answer:
      "P-01 and L-03 because they are located in Windows Startup and Linux desktop autostart locations.",
  },
  {
    question:
      "Do these paths alone prove malicious intent?",
    answer:
      "No. They establish location and execution context. Logs, hashes, user activity, process evidence, and scenario requirements are still needed.",
  },
  {
    question:
      "What should be recorded before removing the startup entries?",
    answer:
      "Exact path, target command, user, timestamps, file hash where useful, related logs, and the evidence connecting the entry to the question.",
  },
  {
    question:
      "Why does the same filename mean little without its path?",
    answer:
      "The directory indicates whether the file is part of an installed application, a user download, temporary data, or an automatic-start location.",
  },
];

const commonMistakes = [
  {
    title: "Searching the whole disk first",
    text:
      "Start with the question and likely evidence location. Broad searches can waste competition time.",
  },
  {
    title: "Ignoring the full path",
    text:
      "A filename without its directory loses essential context.",
  },
  {
    title: "Deleting temp files automatically",
    text:
      "Temporary directories can contain valuable evidence and should be documented before cleanup.",
  },
  {
    title: "Treating hidden files as suspicious by default",
    text:
      "Hidden files and dotfiles are normal parts of both Windows and Linux environments.",
  },
  {
    title: "Confusing user data with system data",
    text:
      "Profile-specific evidence and system-wide configuration answer different questions.",
  },
  {
    title: "Assuming Program Files or /usr means trusted",
    text:
      "Location is only one factor. Validate ownership, package context, hashes, signatures where applicable, and logs.",
  },
  {
    title: "Ignoring application-specific folders",
    text:
      "Important evidence may live under AppData, ProgramData, ~/.config, ~/.local, or application-specific directories.",
  },
  {
    title: "Changing permissions before documenting them",
    text:
      "Ownership and ACLs may themselves answer forensic questions.",
  },
];

const reviewChecklist = [
  "I record the full original path of every relevant artifact.",
  "I distinguish system-wide paths from user-specific paths.",
  "I know the important Windows profile locations.",
  "I know the important Linux home-directory locations.",
  "I recognize common Windows and Linux startup locations.",
  "I recognize common Windows and Linux log locations.",
  "I treat temporary directories as possible evidence sources.",
  "I understand that hidden does not automatically mean malicious.",
  "I record ownership and permissions before changing them.",
  "I use hashes when exact file-content identity matters.",
  "I correlate path evidence with logs, browser records, processes, or services.",
  "I preserve important artifacts before cleanup.",
];

const reflection = [
  "Why does a path often matter as much as a filename?",
  "What is the difference between a user-specific directory and a system-wide directory?",
  "Why can temporary folders contain strong forensic evidence?",
  "Why is a file in a startup location more interesting than the same file in Documents?",
  "Why should hidden files not automatically be considered malicious?",
  "What evidence should you record before moving or deleting a suspicious file?",
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

export default function FileSystemsImportantPathsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/forensics"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Forensics
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
              href="/cyberpatriot/forensics/hashing-file-integrity"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/file-metadata-timestamps"
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
                Forensics &middot; Lesson 04
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                File Systems &amp; Important Paths
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn where Windows and Linux commonly store user data, system
                files, application state, logs, temporary artifacts, startup
                entries, and configuration so you can search for evidence
                efficiently and interpret location correctly.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The same filename can tell a completely different story
                depending on whether it appears in Program Files, Downloads,
                AppData, /usr, /home, /tmp, or an automatic-start location.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Platforms</span>
                  <span className="font-bold text-white">Windows + Linux</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main clue</span>
                  <span className="font-bold text-white">Full path</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Key context</span>
                  <span className="font-bold text-white">User vs system</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Search efficiently</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Learning objectives"
            title="Know where evidence is likely to live"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              The directory is part of the evidence
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A file's path often tells you whether it belongs to the operating
              system, an installed application, a user profile, temporary
              storage, or an automatic-start mechanism.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
              Competition caution
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Location is context, not a verdict
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A file in Temp, AppData, /tmp, or a hidden directory is not
              automatically malicious. Use ownership, timestamps, hashes, logs,
              process activity, and scenario requirements to corroborate.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Path principles"
            title="Use filesystem structure as investigative context"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pathPrinciples.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.title}
                </h3>
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
          <SectionHeading
            label="Windows system paths"
            title="Know the major operating-system and application locations"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {windowsRoots.map((item) => (
              <div
                key={item.path}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-sm font-bold text-cyan-300">
                  {item.path}
                </code>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Forensic value
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.forensicUse}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Windows user profile"
            title="Per-user paths can reconstruct user activity"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {windowsUserPaths.map((item) => (
              <div
                key={item.path}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-sm font-bold text-cyan-300">
                  {item.path}
                </code>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.clues}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Windows startup"
              title="Automatic-start locations"
            />
            <div className="mt-6 grid gap-4">
              {windowsStartup.map((item) => (
                <div
                  key={item.area}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="font-black text-white">{item.area}</h3>
                  <code className="mt-3 block text-sm text-cyan-300">
                    {item.path}
                  </code>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.use}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Windows logs"
              title="Common evidence sources"
            />
            <div className="mt-6 grid gap-4">
              {windowsLogs.map((item) => (
                <div
                  key={item.source}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="font-black text-white">{item.source}</h3>
                  <p className="mt-3 text-sm leading-6 text-cyan-300">
                    {item.path}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Linux system paths"
            title="Know the major configuration, log, software, and temporary locations"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {linuxRoots.map((item) => (
              <div
                key={item.path}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-sm font-bold text-cyan-300">
                  {item.path}
                </code>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Forensic value
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.forensicUse}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Linux user paths"
            title="Home directories contain high-value user evidence"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {linuxUserPaths.map((item) => (
              <div
                key={item.path}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-sm font-bold text-cyan-300">
                  {item.path}
                </code>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.clues}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Linux startup"
              title="Automatic and scheduled execution locations"
            />
            <div className="mt-6 grid gap-4">
              {linuxStartup.map((item) => (
                <div
                  key={item.area}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="font-black text-white">{item.area}</h3>
                  <code className="mt-3 block text-sm text-cyan-300">
                    {item.path}
                  </code>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.use}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Linux logs"
              title="Common system and authentication evidence"
            />
            <div className="mt-6 grid gap-4">
              {linuxLogs.map((item) => (
                <div
                  key={item.source}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="font-black text-white">{item.source}</h3>
                  <p className="mt-3 text-sm leading-6 text-cyan-300">
                    {item.path}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Path comparison"
            title="Same-looking names can have very different context"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {pathComparison.map((item) => (
              <div
                key={item.scenario}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-sm font-bold text-cyan-300">
                  {item.scenario}
                </code>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.interpretation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Windows commands"
              title="Inspect paths without changing them"
            />
            <div className="mt-6 grid gap-4">
              {windowsCommands.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.command}
                  </pre>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Linux commands"
              title="Inspect directories and metadata safely"
            />
            <div className="mt-6 grid gap-4">
              {linuxCommands.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.command}
                  </pre>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Ownership & permissions"
            title="Path evidence becomes stronger when access context is included"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {permissionsContext.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.title}
                </h3>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Windows
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.windows}
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Linux
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.linux}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Hidden items"
              title="Hidden is a display choice, not a verdict"
            />
            <div className="mt-6 grid gap-4">
              {hiddenItems.map((item) => (
                <div
                  key={item.platform}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="font-black text-white">{item.platform}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.examples}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.caution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Temporary artifacts"
              title="Short-lived files can still explain the timeline"
            />
            <div className="mt-6 grid gap-3">
              {temporaryArtifacts.map((item) => (
                <div
                  key={item.artifact}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.artifact}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.value}
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
            Common mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Filesystem mistakes that weaken forensic reasoning
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {commonMistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Fictional path lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Use directory location to reconstruct activity without overclaiming
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {scenarioEvidence.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black text-cyan-300">{item.id}</span>
                  <span className="rounded-full border border-slate-800 px-3 py-1 text-xs font-bold text-slate-400">
                    {item.platform}
                  </span>
                </div>
                <code className="mt-4 block text-sm text-cyan-100">
                  {item.path}
                </code>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {scenarioQuestions.map((item, index) => (
              <div
                key={item.question}
                className="rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Task {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-black text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.answer}
                </p>
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
              {reviewChecklist.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Check your path reasoning
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
                Record the full path, understand what that directory normally
                contains, distinguish user from system scope, and combine
                location with ownership, timestamps, hashes, logs, and process
                evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/forensics"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Forensics
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
              href="/cyberpatriot/forensics/hashing-file-integrity"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/file-metadata-timestamps"
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
