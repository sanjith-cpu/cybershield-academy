import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how archives, hidden files, alternate paths, and non-obvious storage locations can complicate forensic review.",
  "Recognize common Windows and Linux methods for hiding or obscuring files without assuming hidden automatically means malicious.",
  "Preserve original archives before extraction and compare contained files using paths, timestamps, sizes, and hashes.",
  "Inspect hidden and alternate-storage evidence safely without executing unknown content.",
  "Correlate archive contents and hidden files with downloads, user profiles, scheduled tasks, services, and process evidence.",
  "Document path, visibility state, ownership, timestamps, hash, and source before deleting, moving, or unhiding anything.",
];

const principles = [
  {
    title: "Hidden does not mean malicious",
    text:
      "Operating systems and applications routinely hide configuration, cache, and support files. Visibility is context, not a verdict.",
  },
  {
    title: "Archives preserve internal history",
    text:
      "Files inside ZIP, tar, and similar containers can carry timestamps and names that predate the local extraction event.",
  },
  {
    title: "Path changes meaning",
    text:
      "The same filename in Downloads, Temp, AppData, ProgramData, /tmp, ~/.config, or /opt can imply very different context.",
  },
  {
    title: "Original container matters",
    text:
      "The archive itself is evidence separate from the files extracted from it.",
  },
  {
    title: "Alternate storage can hide in plain sight",
    text:
      "Application folders, user-local directories, startup paths, removable media, network shares, and alternate data mechanisms can all hold relevant evidence.",
  },
  {
    title: "Preserve before changing visibility",
    text:
      "Renaming, moving, extracting, unhiding, or changing attributes can modify timestamps and metadata.",
  },
];

const archiveFields = [
  { field: "Archive path", why: "Shows where the container was stored on the local system." },
  { field: "Archive hash", why: "Provides exact identity for the original container." },
  { field: "Archive timestamps", why: "Places local appearance and later modification into the timeline." },
  { field: "Contained filename", why: "Shows the name recorded inside the archive." },
  { field: "Internal path", why: "Preserves directory structure stored in the container." },
  { field: "Internal timestamp", why: "May reflect older source history rather than local extraction time." },
  { field: "Extracted path", why: "Shows where the file appeared after extraction." },
  { field: "Extracted hash", why: "Allows comparison to the archived content." },
  { field: "Extraction evidence", why: "Connects the container to the newly created local files." },
];

const archiveReasoning = [
  {
    evidence: "ZIP created locally at 10:02, internal file mtime is 2024-04-01",
    supported: "The archive appeared locally at 10:02 while the file stored inside carries an older modification timestamp.",
    notSupported: "The internal file necessarily existed on this computer in 2024.",
  },
  {
    evidence: "Extracted file and archived copy have matching SHA-256",
    supported: "The extracted content is identical to the archived content.",
    notSupported: "The extracted path is the original source location.",
  },
  {
    evidence: "Archive filename changed but hash is identical",
    supported: "The archive content is unchanged despite the rename.",
    notSupported: "The archive was never copied or moved.",
  },
  {
    evidence: "Archive contains hidden-dotfile configuration",
    supported: "The container includes a hidden-style filename.",
    notSupported: "The file is malicious because its name begins with a dot.",
  },
  {
    evidence: "Extraction produces startup shortcut or autostart file",
    supported: "The extracted content can affect future startup if placed in an active startup location.",
    notSupported: "The startup behavior actually occurred without separate execution evidence.",
  },
];

const windowsHiddenConcepts = [
  {
    mechanism: "Hidden attribute",
    detail:
      "Windows files and folders can carry the Hidden attribute and may not appear in default File Explorer views.",
  },
  {
    mechanism: "System attribute",
    detail:
      "System files can be hidden by default and should not be treated as suspicious solely because of that attribute.",
  },
  {
    mechanism: "AppData",
    detail:
      "Per-user application data is commonly stored under hidden profile locations.",
  },
  {
    mechanism: "ProgramData",
    detail:
      "Shared application data can contain service files, update data, logs, and configuration.",
  },
  {
    mechanism: "Alternate Data Streams",
    detail:
      "NTFS can store additional named data streams associated with a file. Awareness is useful, but their presence alone does not prove misuse.",
  },
];

const linuxHiddenConcepts = [
  {
    mechanism: "Dotfiles",
    detail:
      "Names beginning with a dot are hidden from ordinary directory listings unless hidden files are requested.",
  },
  {
    mechanism: "~/.config",
    detail:
      "Common per-user application configuration location.",
  },
  {
    mechanism: "~/.local",
    detail:
      "Common per-user application data and binaries location.",
  },
  {
    mechanism: "~/.cache",
    detail:
      "Application cache location that may contain temporary or automatically created data.",
  },
  {
    mechanism: "/tmp and /var/tmp",
    detail:
      "Temporary-storage areas that may contain legitimate or unexpected files.",
  },
];

const windowsCommands = [
  {
    label: "Show hidden items",
    command: `Get-ChildItem "C:\\Users\\trainee" -Force`,
    purpose:
      "Includes hidden and system-marked entries in PowerShell output.",
  },
  {
    label: "Inspect attributes",
    command: `Get-Item "C:\\Users\\trainee\\AppData\\Local\\example.bin" |
  Format-List Name,FullName,Attributes,Length,CreationTime,LastWriteTime`,
    purpose:
      "Shows path, attributes, size, and timestamps.",
  },
  {
    label: "Find hidden files",
    command: `Get-ChildItem "C:\\Users\\trainee" -Recurse -Force -ErrorAction SilentlyContinue |
  Where-Object { $_.Attributes -match "Hidden" }`,
    purpose:
      "Finds hidden entries within a scoped user profile.",
  },
  {
    label: "List NTFS streams",
    command: `Get-Item "C:\\Users\\trainee\\Documents\\sample.txt" -Stream *`,
    purpose:
      "Lists alternate data streams associated with a selected NTFS file where supported.",
  },
  {
    label: "Hash a file",
    command: `Get-FileHash "C:\\Users\\trainee\\AppData\\Local\\example.bin" -Algorithm SHA256`,
    purpose:
      "Provides exact content identity.",
  },
];

const linuxCommands = [
  {
    label: "Show hidden entries",
    command: `ls -la /home/trainee`,
    purpose:
      "Includes dotfiles and hidden directories.",
  },
  {
    label: "Inspect one file",
    command: `stat /home/trainee/.config/example/settings.conf`,
    purpose:
      "Shows ownership, permissions, size, and timestamps.",
  },
  {
    label: "Find hidden files",
    command: `find /home/trainee -name ".*" 2>/dev/null`,
    purpose:
      "Finds hidden-style names inside the selected user profile.",
  },
  {
    label: "Identify file type",
    command: `file /home/trainee/.local/bin/example`,
    purpose:
      "Checks actual file type without executing it.",
  },
  {
    label: "Hash a file",
    command: `sha256sum /home/trainee/.local/bin/example`,
    purpose:
      "Provides exact content identity.",
  },
];

const windowsArchiveCommands = [
  {
    label: "List ZIP contents",
    command: `tar -tf "C:\\Users\\trainee\\Downloads\\evidence.zip"`,
    purpose:
      "Lists archive contents without extracting them on modern Windows systems where tar is available.",
  },
  {
    label: "Hash the archive",
    command: `Get-FileHash "C:\\Users\\trainee\\Downloads\\evidence.zip" -Algorithm SHA256`,
    purpose:
      "Preserves the original container identity.",
  },
  {
    label: "Inspect archive metadata",
    command: `Get-Item "C:\\Users\\trainee\\Downloads\\evidence.zip" |
  Format-List Name,FullName,Length,CreationTime,LastWriteTime`,
    purpose:
      "Records the archive's local metadata.",
  },
];

const linuxArchiveCommands = [
  {
    label: "List ZIP contents",
    command: `unzip -l /home/trainee/Downloads/evidence.zip`,
    purpose:
      "Lists ZIP contents without extracting them.",
  },
  {
    label: "List tar contents",
    command: `tar -tf /home/trainee/Downloads/evidence.tar.gz`,
    purpose:
      "Lists archive contents without extraction.",
  },
  {
    label: "Hash the archive",
    command: `sha256sum /home/trainee/Downloads/evidence.zip`,
    purpose:
      "Preserves container identity.",
  },
  {
    label: "Inspect archive metadata",
    command: `stat /home/trainee/Downloads/evidence.zip`,
    purpose:
      "Shows local archive timestamps and ownership.",
  },
];

const storageLocations = [
  {
    platform: "Windows",
    path: "C:\\Users\\<user>\\AppData\\Local",
    why:
      "Per-user application data, caches, local settings, and sometimes executables.",
  },
  {
    platform: "Windows",
    path: "C:\\Users\\<user>\\AppData\\Roaming",
    why:
      "User profile data intended to follow the user in some environments.",
  },
  {
    platform: "Windows",
    path: "C:\\ProgramData",
    why:
      "Shared application data, service files, logs, and vendor directories.",
  },
  {
    platform: "Windows",
    path: "C:\\Windows\\Temp",
    why:
      "System temporary storage.",
  },
  {
    platform: "Linux",
    path: "~/.config",
    why:
      "Per-user application configuration.",
  },
  {
    platform: "Linux",
    path: "~/.local",
    why:
      "Per-user application data and binaries.",
  },
  {
    platform: "Linux",
    path: "/tmp and /var/tmp",
    why:
      "Temporary storage with different retention behavior.",
  },
  {
    platform: "Linux",
    path: "/opt",
    why:
      "Optional or third-party software location.",
  },
  {
    platform: "Both",
    path: "Removable media",
    why:
      "USB or external storage can introduce or remove files without browser or email evidence.",
  },
  {
    platform: "Both",
    path: "Network shares",
    why:
      "Files can arrive through shared storage without local download history.",
  },
];

const alternateStorageReasoning = [
  {
    evidence: "File exists only in AppData",
    supported: "The file is stored in a per-user application-data location.",
    notSupported: "The file is malicious because the directory is normally hidden.",
  },
  {
    evidence: "Executable exists under ~/.local/bin",
    supported: "The executable is stored in a per-user binary location.",
    notSupported: "The executable is unauthorized without package, user, and scenario context.",
  },
  {
    evidence: "File arrived from USB",
    supported: "Removable media is a possible source path.",
    notSupported: "The user intentionally executed the file.",
  },
  {
    evidence: "File copied from network share",
    supported: "The network share can explain local arrival.",
    notSupported: "The file originated on the local computer.",
  },
  {
    evidence: "NTFS stream exists on sample.txt",
    supported: "The file has additional named stream data.",
    notSupported: "The stream is malicious solely because it exists.",
  },
];

const hiddenQuestionMap = [
  {
    question: "Why did I not see the file in a normal directory view?",
    evidence: "Hidden/system attribute, dotfile naming, permissions, or application-specific path.",
  },
  {
    question: "Where did the hidden file come from?",
    evidence: "Browser, email, archive extraction, package install, process, removable media, or share evidence.",
  },
  {
    question: "Was it used?",
    evidence: "Process execution, service/task references, application logs, or access evidence.",
  },
  {
    question: "Is it the same content as another file?",
    evidence: "SHA-256 comparison.",
  },
  {
    question: "Did extraction change the timeline?",
    evidence: "Archive internal timestamp versus local extraction timestamp.",
  },
  {
    question: "Is the location expected?",
    evidence: "Application/package context, scenario requirement, ownership, and startup/service references.",
  },
];

const correlationCases = [
  {
    records: "Browser download at 09:02 + archive in Downloads + extraction into AppData at 09:05",
    supported: "The archive likely explains the later files under AppData.",
  },
  {
    records: "Archive internal file mtime from 2024 + local extraction at 10:10",
    supported: "The older timestamp may reflect archive metadata rather than earlier local presence.",
  },
  {
    records: "Hidden script in user profile + scheduled task points to same path + process runs later",
    supported: "The scheduler and process evidence connect the hidden file to actual execution.",
  },
  {
    records: "Executable under ~/.local/bin + systemd user unit references it",
    supported: "The user-level service configuration explains recurring execution of that file.",
  },
  {
    records: "File on USB + same SHA-256 appears later in Downloads",
    supported: "The local file content matches the removable-media copy.",
  },
  {
    records: "Network share access + matching hash appears in ProgramData",
    supported: "The share can explain the local file's arrival path.",
  },
];

const preservationChecklist = [
  "Record the original archive or container path.",
  "Hash the original archive before extraction when practical.",
  "List archive contents before extraction.",
  "Record internal paths and timestamps.",
  "Record hidden/system attributes or dotfile naming.",
  "Record full path, owner, permissions, and timestamps.",
  "Record actual file type.",
  "Hash important extracted or hidden files.",
  "Record startup, service, task, or cron references.",
  "Record removable-media or network-share context if relevant.",
  "Separate archive timestamps from local extraction timestamps.",
  "Only then move, delete, unhide, or disable if appropriate.",
];

const fictionalTimeline = [
  {
    time: "10:01",
    source: "Browser",
    detail:
      "trainee9 downloads tools.zip to the Downloads directory.",
  },
  {
    time: "10:02",
    source: "Archive",
    detail:
      "tools.zip SHA-256 is HASH-A1 and contains scripts/check.ps1 with an internal mtime from 2024-03-01.",
  },
  {
    time: "10:05",
    source: "Filesystem",
    detail:
      "check.ps1 is extracted into C:\\Users\\trainee9\\AppData\\Local\\ToolsLab\\.",
  },
  {
    time: "10:06",
    source: "Attributes",
    detail:
      "A related folder under ToolsLab is marked Hidden.",
  },
  {
    time: "10:08",
    source: "Scheduled Task",
    detail:
      "A fictional task references the extracted check.ps1 path.",
  },
  {
    time: "10:10",
    source: "Process Evidence",
    detail:
      "PowerShell runs check.ps1 from the AppData path.",
  },
];

const labQuestions = [
  {
    question: "What proves the archive existed before extraction?",
    answer: "The browser/download record and archive metadata at 10:01-10:02.",
  },
  {
    question: "Does the 2024 internal timestamp prove the script existed locally in 2024?",
    answer: "No. The older timestamp may have been preserved inside the archive.",
  },
  {
    question: "Does the Hidden attribute prove the folder is malicious?",
    answer: "No. It only changes visibility. Context, source, and usage still matter.",
  },
  {
    question: "What connects the extracted script to actual execution?",
    answer: "The scheduled-task reference plus the PowerShell process evidence at 10:10.",
  },
  {
    question: "Why preserve HASH-A1?",
    answer: "It identifies the original archive content and allows later comparison.",
  },
  {
    question: "What should be preserved before deleting the hidden folder?",
    answer: "Archive identity, contained paths/timestamps, extracted file metadata and hashes, hidden attribute state, scheduled-task configuration, and process evidence.",
  },
];

const mistakes = [
  {
    title: "Treating hidden as malicious",
    text: "Many legitimate operating-system and application files are intentionally hidden.",
  },
  {
    title: "Extracting before documenting",
    text: "Extraction changes local filesystem state and can complicate the timeline.",
  },
  {
    title: "Trusting archive timestamps as local history",
    text: "Internal timestamps can predate local arrival by years.",
  },
  {
    title: "Ignoring the original archive",
    text: "The container is separate evidence with its own hash and timestamps.",
  },
  {
    title: "Ignoring alternate paths",
    text: "AppData, ProgramData, ~/.config, ~/.local, /tmp, and /opt can contain relevant artifacts.",
  },
  {
    title: "Ignoring removable media or shares",
    text: "Files can arrive without browser or email history.",
  },
  {
    title: "Unhiding or moving evidence first",
    text: "Changing attributes or paths can alter metadata and destroy original-state context.",
  },
  {
    title: "Equating storage location with intent",
    text: "An unusual path can justify review, but not a conclusion by itself.",
  },
];

const reviewChecklist = [
  "I preserve the original archive before extraction.",
  "I record archive hash and local timestamps.",
  "I list archive contents before extracting when practical.",
  "I distinguish internal archive timestamps from local extraction times.",
  "I record hidden/system attributes or dotfile naming.",
  "I inspect AppData, ProgramData, ~/.config, ~/.local, and temp paths when relevant.",
  "I record actual file type and SHA-256.",
  "I correlate hidden files with tasks, services, cron, or processes.",
  "I consider removable media and network shares as source paths.",
  "I do not assume hidden means malicious.",
  "I preserve original path and metadata before moving or deleting.",
  "I record my own cleanup changes separately.",
];

const reflection = [
  "Why can an archive contain timestamps older than the local download?",
  "What evidence would you use to prove an extracted file actually executed?",
  "Why is a hidden attribute or dotfile name not enough to label a file suspicious?",
  "How can a hash connect a file on removable media to a local copy?",
  "Why should the original archive be preserved even after extraction?",
  "What storage locations would you review if a file did not come through a browser or email client?",
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

export default function ArchivesHiddenFilesAlternateStorageAwarenessPage() {
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
              href="/cyberpatriot/forensics/email-documents-suspicious-file-triage"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/timeline-reconstruction-correlation"
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
                Forensics · Lesson 15
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Archives, Hidden Files &amp; Alternate Storage Awareness
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how archives, hidden items, application data folders,
                temporary locations, removable media, and network shares can
                preserve or obscure important forensic evidence.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The key is to preserve the original container and path context,
                then separate archive history from local extraction and actual
                execution evidence.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main evidence</span>
                  <span className="font-bold text-white">Archive + path context</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Visibility clue</span>
                  <span className="font-bold text-white">Hidden / dotfiles</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Key distinction</span>
                  <span className="font-bold text-white">Internal vs local time</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Preserve hidden context</span>
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
            title="Find evidence that ordinary views can miss"
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
              Visibility and location change context, not truth
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Hidden files and unusual paths deserve review, but the evidence
              still needs source, ownership, timestamps, hash, execution, and
              scenario context.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
              Competition caution
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve the archive before extraction
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The original archive has its own hash and timestamps. Extraction
              creates new local state and can preserve older internal metadata.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Principles"
            title="Use hidden and archive evidence without overclaiming"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {principles.map((item) => (
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
            label="Archive evidence"
            title="Preserve both container and extracted content"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {archiveFields.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.field}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Archive reasoning"
            title="Separate container history from local history"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {archiveReasoning.map((item) => (
              <div
                key={item.evidence}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.evidence}</h3>

                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Supported
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.supported}
                  </p>
                </div>

                <div className="mt-3 rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-red-200">
                    Not supported
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.notSupported}
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
              label="Windows hidden storage"
              title="Common visibility and storage mechanisms"
            />
            <div className="mt-6 grid gap-4">
              {windowsHiddenConcepts.map((item) => (
                <div
                  key={item.mechanism}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">
                    {item.mechanism}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Linux hidden storage"
              title="Common dotfile and user-storage locations"
            />
            <div className="mt-6 grid gap-4">
              {linuxHiddenConcepts.map((item) => (
                <div
                  key={item.mechanism}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">
                    {item.mechanism}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Windows commands"
              title="Inspect hidden entries safely"
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
              title="Inspect hidden entries safely"
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Windows archives"
              title="List and hash before extraction"
            />
            <div className="mt-6 grid gap-4">
              {windowsArchiveCommands.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.command}
                  </pre>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Linux archives"
              title="List and hash before extraction"
            />
            <div className="mt-6 grid gap-4">
              {linuxArchiveCommands.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.command}
                  </pre>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
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
            label="Alternate storage"
            title="Look beyond ordinary Downloads and Documents folders"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {storageLocations.map((item) => (
              <div
                key={`${item.platform}-${item.path}`}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <code className="text-sm font-bold text-cyan-300">
                    {item.path}
                  </code>
                  <span className="rounded-full border border-slate-800 px-3 py-1 text-xs font-bold text-slate-400">
                    {item.platform}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Reasoning"
            title="Unusual storage is a clue, not a conclusion"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {alternateStorageReasoning.map((item) => (
              <div
                key={item.evidence}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.evidence}</h3>

                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Supported
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.supported}
                  </p>
                </div>

                <div className="mt-3 rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-red-200">
                    Not supported
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.notSupported}
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
            label="Question-to-evidence map"
            title="Use the right evidence for hidden and alternate-storage questions"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {hiddenQuestionMap.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.evidence}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Correlation"
            title="Connect archives and hidden files to source and execution"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {correlationCases.map((item) => (
              <div
                key={item.records}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm leading-7 text-cyan-200">
                  {item.records}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Supported conclusion
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.supported}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Preserve before action
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Capture original archive, path, and visibility state
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {preservationChecklist.map((item, index) => (
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Common mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Archive and hidden-file mistakes that distort the timeline
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {mistakes.map((item) => (
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
            Fictional archive &amp; hidden-file lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Reconstruct download, extraction, hidden storage, and execution
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fictionalTimeline.map((item) => (
              <div
                key={`${item.time}-${item.source}`}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black text-cyan-300">
                    {item.time}
                  </span>
                  <span className="rounded-full border border-slate-800 px-3 py-1 text-xs font-bold text-slate-400">
                    {item.source}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {labQuestions.map((item, index) => (
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
              Check your archive and hidden-file reasoning
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
                Preserve the container, separate internal timestamps from local
                history, treat hidden state as context, and connect alternate
                storage to source and execution evidence before cleanup.
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
              href="/cyberpatriot/forensics/email-documents-suspicious-file-triage"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/timeline-reconstruction-correlation"
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
