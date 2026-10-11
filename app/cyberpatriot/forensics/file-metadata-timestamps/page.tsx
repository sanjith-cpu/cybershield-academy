import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain the difference between file metadata and file content.",
  "Interpret common file timestamps without assuming they always represent user actions.",
  "Understand how copying, extracting, downloading, editing, and restoring files can affect timestamp meaning.",
  "Use size, ownership, permissions, extension, attributes, and path as supporting forensic context.",
  "Compare Windows and Linux timestamp behavior at a practical competition level.",
  "Correlate metadata with logs, browser activity, hashes, and process evidence before drawing conclusions.",
];

const metadataFields = [
  {
    field: "Filename",
    meaning:
      "The visible name assigned to the file.",
    caution:
      "Names can be changed and do not prove content, origin, or intent.",
  },
  {
    field: "Extension",
    meaning:
      "The suffix commonly used to suggest file type, such as .txt, .zip, .exe, or .pdf.",
    caution:
      "Extensions can be misleading. A renamed file may not match the type implied by its extension.",
  },
  {
    field: "Path",
    meaning:
      "The directory location of the artifact.",
    caution:
      "Location gives important context but does not by itself prove legitimacy or maliciousness.",
  },
  {
    field: "Size",
    meaning:
      "The number of bytes stored in the file.",
    caution:
      "Two different files can have the same size, so size is not a strong identity field alone.",
  },
  {
    field: "Owner",
    meaning:
      "The account associated with ownership of the object.",
    caution:
      "Ownership does not automatically prove who created, downloaded, or intentionally used the file.",
  },
  {
    field: "Permissions",
    meaning:
      "Rules controlling who can read, write, execute, modify, or delete the file.",
    caution:
      "Changing permissions before documenting them can destroy useful evidence.",
  },
  {
    field: "Attributes",
    meaning:
      "Flags such as hidden, read-only, archive, or system on Windows, plus filesystem-specific metadata.",
    caution:
      "Hidden or read-only status is not automatically suspicious.",
  },
  {
    field: "Hash",
    meaning:
      "A cryptographic digest representing exact file content.",
    caution:
      "Useful for content identity, but not for proving why the file exists.",
  },
];

const timestampTypes = [
  {
    name: "Creation / Birth",
    meaning:
      "A timestamp associated with when a filesystem entry was created, where the filesystem exposes this field.",
    competitionNote:
      "Copying or extraction can create a new file and therefore a new creation-style timestamp.",
  },
  {
    name: "Modification",
    meaning:
      "When file content was last changed.",
    competitionNote:
      "Editing a document, changing script content, or rewriting an archive can update modification time.",
  },
  {
    name: "Access",
    meaning:
      "When the file was last accessed, if the operating system and filesystem track or update this field.",
    competitionNote:
      "Access-time behavior varies widely and may be disabled, delayed, or optimized.",
  },
  {
    name: "Metadata Change",
    meaning:
      "A timestamp reflecting changes to metadata such as permissions, ownership, or other inode-style fields on many Unix-like filesystems.",
    competitionNote:
      "Linux ctime is not file-creation time.",
  },
];

const windowsTimeNotes = [
  {
    title: "CreationTime",
    text:
      "Represents when the current filesystem entry was created. Copying a file to a new location can produce a new creation time.",
  },
  {
    title: "LastWriteTime",
    text:
      "Represents when file contents were last written.",
  },
  {
    title: "LastAccessTime",
    text:
      "Represents access-time information, but Windows may delay or limit updates for performance reasons.",
  },
  {
    title: "Time zones",
    text:
      "Tools may display local time even when underlying storage or logs use another representation. Record the display context.",
  },
  {
    title: "Archive extraction",
    text:
      "Extracted files may preserve some internal archive times while receiving new filesystem creation context.",
  },
  {
    title: "Copy operations",
    text:
      "Different copy tools and destinations can affect timestamps differently, so avoid assuming one universal behavior.",
  },
];

const linuxTimeNotes = [
  {
    title: "mtime",
    text:
      "Modification time: when file contents were last changed.",
  },
  {
    title: "atime",
    text:
      "Access time: when file data was last read, subject to mount options and update policies.",
  },
  {
    title: "ctime",
    text:
      "Metadata-change time: when inode metadata changed. It is not creation time.",
  },
  {
    title: "Birth time",
    text:
      "Some Linux filesystems and tools expose file birth/creation time, but support is filesystem-dependent.",
  },
  {
    title: "stat output",
    text:
      "The stat command is useful because it shows multiple timestamp fields, ownership, permissions, size, and inode information together.",
  },
  {
    title: "Timezone context",
    text:
      "Command output typically follows the system's configured time zone unless a tool specifies otherwise.",
  },
];

const timePitfalls = [
  {
    situation:
      "A file creation time matches a browser download time.",
    weak:
      "The browser definitely created the file.",
    better:
      "The timestamps align and support a possible relationship. Correlate with the browser download record, path, hash, and user profile.",
  },
  {
    situation:
      "A file modification time is later than its creation time.",
    weak:
      "The user manually edited it.",
    better:
      "The file content changed after the current entry was created. Additional evidence is needed to determine what changed it.",
  },
  {
    situation:
      "A Linux ctime is recent.",
    weak:
      "The file was created recently.",
    better:
      "Metadata changed recently. Check mtime, birth time where available, logs, and surrounding activity.",
  },
  {
    situation:
      "A file access time is recent.",
    weak:
      "A person opened the file.",
    better:
      "The filesystem recorded recent access, but the accessing process and reason require more evidence.",
  },
  {
    situation:
      "An extracted file has an older modification time than the archive download time.",
    weak:
      "The file existed on this computer before the archive was downloaded.",
    better:
      "The archive may have preserved the internal file modification time. Use extraction context and creation-style timestamps.",
  },
  {
    situation:
      "Two files have identical timestamps.",
    weak:
      "They were created by the same action.",
    better:
      "They share timestamp values. Hashes, paths, logs, and process evidence are needed to connect them.",
  },
];

const windowsCommands = [
  {
    label: "Basic file metadata",
    command: `Get-Item "C:\\Users\\trainee\\Downloads\\sample.zip" | Format-List Name,FullName,Length,CreationTime,LastWriteTime,LastAccessTime,Attributes`,
    purpose:
      "Shows common Windows metadata fields in one place.",
  },
  {
    label: "Owner",
    command: `(Get-Acl "C:\\Users\\trainee\\Downloads\\sample.zip").Owner`,
    purpose:
      "Shows the NTFS owner associated with the object.",
  },
  {
    label: "Permissions",
    command: `Get-Acl "C:\\Users\\trainee\\Downloads\\sample.zip" | Format-List`,
    purpose:
      "Displays owner and access-control information without changing it.",
  },
  {
    label: "Hash",
    command: `Get-FileHash "C:\\Users\\trainee\\Downloads\\sample.zip" -Algorithm SHA256`,
    purpose:
      "Adds strong content-identity evidence to the metadata record.",
  },
];

const linuxCommands = [
  {
    label: "Detailed metadata",
    command: `stat /home/trainee/Downloads/sample.zip`,
    purpose:
      "Shows size, ownership, permissions, inode information, and multiple timestamp fields.",
  },
  {
    label: "Directory listing",
    command: `ls -lah /home/trainee/Downloads`,
    purpose:
      "Provides a quick view of names, permissions, ownership, size, and modification times.",
  },
  {
    label: "File type",
    command: `file /home/trainee/Downloads/sample.zip`,
    purpose:
      "Examines file-content signatures to help compare actual type with the filename extension.",
  },
  {
    label: "Hash",
    command: `sha256sum /home/trainee/Downloads/sample.zip`,
    purpose:
      "Records a SHA-256 digest for exact content comparison.",
  },
];

const extensionVsType = [
  {
    filename: "notes.txt",
    possibleReality:
      "Plain text, script content, binary data, or another file type renamed with .txt.",
    bestCheck:
      "Inspect safely with metadata-aware tools and file-type identification without executing unknown content.",
  },
  {
    filename: "photo.jpg",
    possibleReality:
      "JPEG image, renamed archive, or unrelated content.",
    bestCheck:
      "Use file-type inspection and hashes; do not trust the extension alone.",
  },
  {
    filename: "report.pdf",
    possibleReality:
      "PDF document or a renamed file.",
    bestCheck:
      "Validate actual file type and inspect only with safe, appropriate tools.",
  },
  {
    filename: "update.exe",
    possibleReality:
      "Executable content, but legitimacy depends on path, signature, hash, source, and behavior.",
    bestCheck:
      "Document path, hash, owner, timestamps, and related process or service evidence before any change.",
  },
];

const copyScenarios = [
  {
    action:
      "Copy file to another directory",
    expectedEffect:
      "The destination entry may receive a new creation-style timestamp while preserving or changing other times depending on tool and filesystem.",
    lesson:
      "Do not assume the destination's creation time equals the original file's historical creation.",
  },
  {
    action:
      "Extract file from archive",
    expectedEffect:
      "The extracted file may inherit archive-stored modification time while receiving new local filesystem context.",
    lesson:
      "An old modification time does not prove the file existed locally before extraction.",
  },
  {
    action:
      "Edit file content",
    expectedEffect:
      "Modification time and hash usually change.",
    lesson:
      "Use both metadata and hash to distinguish content change from simple renaming.",
  },
  {
    action:
      "Rename file",
    expectedEffect:
      "Content may remain identical while path or metadata changes.",
    lesson:
      "A hash can show that renamed content stayed the same.",
  },
  {
    action:
      "Change permissions",
    expectedEffect:
      "Linux ctime or Windows metadata/ACL context may change without changing file content.",
    lesson:
      "Metadata can change even when the hash remains identical.",
  },
  {
    action:
      "Restore from backup",
    expectedEffect:
      "Restoration software may preserve some historical timestamps and recreate others.",
    lesson:
      "Backup and restore context matters when interpreting time evidence.",
  },
];

const metadataQuestions = [
  {
    question:
      "Did the file content change?",
    strongest:
      "Compare secure hashes and modification context.",
    supporting:
      "LastWriteTime or mtime, application logs, process activity.",
  },
  {
    question:
      "Did the file move or get copied?",
    strongest:
      "Compare paths, hashes, creation-style timestamps, and filesystem context.",
    supporting:
      "Logs, shell history, browser activity, application records.",
  },
  {
    question:
      "Who owns the file?",
    strongest:
      "Filesystem ownership or ACL information.",
    supporting:
      "Account and group records.",
  },
  {
    question:
      "Was the file downloaded?",
    strongest:
      "Browser or application download history.",
    supporting:
      "Path in Downloads, creation time, hash, user activity.",
  },
  {
    question:
      "Was the file opened?",
    strongest:
      "Application history, recent-file records, process evidence, or logs.",
    supporting:
      "Access time only as supporting evidence where meaningful.",
  },
  {
    question:
      "Is the extension truthful?",
    strongest:
      "File-content type inspection and safe structural analysis.",
    supporting:
      "Filename, MIME-style identification, application context.",
  },
];

const sizeAndStructure = [
  {
    clue:
      "Size changed but filename stayed the same",
    meaning:
      "Content likely changed, but verify with hashes.",
  },
  {
    clue:
      "Size stayed the same but hash changed",
    meaning:
      "Content definitely differs despite identical size.",
  },
  {
    clue:
      "Different filename and same hash",
    meaning:
      "The content is extremely likely identical despite the rename.",
  },
  {
    clue:
      "Same filename and different hash",
    meaning:
      "The files contain different bytes.",
  },
  {
    clue:
      "Unexpectedly tiny executable or archive",
    meaning:
      "Worth checking actual type, source, and integrity, but size alone is not proof.",
  },
  {
    clue:
      "Large temporary file",
    meaning:
      "Could be legitimate cache, installer, extraction, or application data. Correlate before concluding.",
  },
];

const ownershipCases = [
  {
    caseTitle:
      "User-owned file in Downloads",
    interpretation:
      "Consistent with user-profile storage, but ownership does not prove who initiated the download.",
  },
  {
    caseTitle:
      "SYSTEM-owned service executable",
    interpretation:
      "Potentially normal for installed software. Validate path, signature, service definition, and installation context.",
  },
  {
    caseTitle:
      "Root-owned script in /usr/local/bin",
    interpretation:
      "Could be administrator-installed software. Check package/source context, timestamps, and related service or cron references.",
  },
  {
    caseTitle:
      "User-owned file in a system directory",
    interpretation:
      "Unusual context worth investigating, but confirm permissions, installation history, and logs before drawing conclusions.",
  },
];

const timelineMethod = [
  {
    step: "01",
    title: "Record original display",
    text:
      "Write down the timestamp exactly as the tool shows it, including date, time, and zone where available.",
  },
  {
    step: "02",
    title: "Label the timestamp type",
    text:
      "Creation, modification, access, metadata-change, event, download, or another specific category.",
  },
  {
    step: "03",
    title: "Record the source",
    text:
      "Note the host, path, log, application, or filesystem that produced the timestamp.",
  },
  {
    step: "04",
    title: "Compare related evidence",
    text:
      "Place browser, log, process, and file times side by side instead of relying on one artifact.",
  },
  {
    step: "05",
    title: "Check for transformations",
    text:
      "Ask whether copy, extraction, restore, edit, rename, or permission changes could explain the time values.",
  },
  {
    step: "06",
    title: "State uncertainty",
    text:
      "If the timestamp meaning is ambiguous, document the limitation and avoid pretending the sequence is exact.",
  },
];

const timelineExample = [
  {
    time: "13:20",
    source: "Authentication log",
    meaning:
      "trainee3 signs in to the fictional workstation.",
  },
  {
    time: "13:24",
    source: "Browser download record",
    meaning:
      "training.zip is downloaded into the user's Downloads folder.",
  },
  {
    time: "13:24",
    source: "Filesystem creation time",
    meaning:
      "training.zip appears locally near the browser-record time.",
  },
  {
    time: "2024-06-01",
    source: "Internal archive modification time",
    meaning:
      "A file inside the archive carries an older stored timestamp.",
  },
  {
    time: "13:27",
    source: "Filesystem creation context",
    meaning:
      "notes.txt appears after extraction.",
  },
  {
    time: "13:29",
    source: "Modification time",
    meaning:
      "notes.txt content changes after extraction.",
  },
];

const timelineQuestions = [
  {
    question:
      "Does the 2024 modification time prove notes.txt existed on this computer in 2024?",
    answer:
      "No. The archive may have preserved an older internal timestamp.",
  },
  {
    question:
      "What supports the conclusion that training.zip was downloaded around 13:24?",
    answer:
      "The browser download record and matching local creation context.",
  },
  {
    question:
      "What does the 13:29 modification time support?",
    answer:
      "The local notes.txt content changed after extraction.",
  },
  {
    question:
      "Can the timestamps alone identify who edited notes.txt?",
    answer:
      "No. User session, process, application, and log evidence would be needed.",
  },
  {
    question:
      "Which event appears first on the local system?",
    answer:
      "The 13:20 authentication event.",
  },
  {
    question:
      "Why should the archived 2024 time not be mixed directly with local event times?",
    answer:
      "It represents stored file metadata from before extraction, not necessarily local-system activity.",
  },
];

const commonMistakes = [
  {
    title: "Treating creation time as universal origin",
    text:
      "Creation-style timestamps usually describe the current filesystem entry, not the first time the content ever existed.",
  },
  {
    title: "Calling Linux ctime creation time",
    text:
      "ctime normally represents metadata change time, not creation.",
  },
  {
    title: "Ignoring time zones",
    text:
      "Cross-source ordering can become wrong when logs and tools display different zones.",
  },
  {
    title: "Trusting file extensions",
    text:
      "Extensions can be changed and should not replace actual type inspection.",
  },
  {
    title: "Using access time as proof of human action",
    text:
      "Applications, scanners, indexing, backups, and the OS can access files automatically.",
  },
  {
    title: "Ignoring copy and extraction behavior",
    text:
      "Transformations can preserve some timestamps while generating others.",
  },
  {
    title: "Changing permissions before recording them",
    text:
      "Original ownership and ACLs may be valuable evidence.",
  },
  {
    title: "Assuming identical size means identical content",
    text:
      "Only a strong content comparison such as hashing can establish byte-level identity.",
  },
];

const reviewChecklist = [
  "I record the full path with the filename.",
  "I understand the difference between metadata and content.",
  "I label each timestamp type correctly.",
  "I do not call Linux ctime creation time.",
  "I consider copy, extraction, restore, and edit behavior.",
  "I record time zone context when available.",
  "I use hashes when exact content identity matters.",
  "I treat file extensions as clues, not proof.",
  "I record ownership and permissions before changing them.",
  "I avoid using access time alone as proof that a person opened a file.",
  "I correlate metadata with logs, browser records, and process evidence.",
  "I document uncertainty when timestamp meaning is ambiguous.",
];

const reflection = [
  "Why can a file's creation time fail to represent the first time that content ever existed?",
  "What is the difference between Linux mtime and ctime?",
  "Why is an extension weaker evidence than a content hash or file-type check?",
  "How can extraction create a misleading timeline if you do not understand stored archive timestamps?",
  "Why can access time fail to prove a person opened a file?",
  "What additional evidence would you use to identify who modified a file?",
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

export default function FileMetadataTimestampsPage() {
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
              href="/cyberpatriot/forensics/file-systems-important-paths"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/log-analysis-fundamentals"
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
                Forensics · Lesson 05
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                File Metadata &amp; Timestamps
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how filenames, paths, extensions, sizes, ownership,
                permissions, attributes, hashes, and timestamps work together to
                describe a file without overclaiming what any one field proves.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Timestamp interpretation is one of the easiest places to make a
                forensic mistake. Copying, extraction, editing, restoration, and
                filesystem behavior can all change what a time value means.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main evidence</span>
                  <span className="font-bold text-white">Metadata</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Key risk</span>
                  <span className="font-bold text-white">Time misread</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Best content check</span>
                  <span className="font-bold text-white">SHA-256</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Correct context</span>
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
            title="Read metadata without turning clues into conclusions"
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
              Metadata describes context around content
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Metadata can explain where a file is, who owns it, when certain
              filesystem events occurred, and how the object is configured. It
              does not automatically explain who performed an action or why.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
              Timestamp warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              A timestamp is only meaningful when its type is known
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Creation, modification, access, metadata-change, event, and
              download times can represent completely different actions. Always
              label the type before using the time in a timeline.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Metadata fields"
            title="Know what each field can and cannot tell you"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metadataFields.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.field}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Timestamp types"
            title="Different clocks answer different questions"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {timestampTypes.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Competition note
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.competitionNote}
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
              label="Windows timestamps"
              title="Practical interpretation"
            />

            <div className="mt-6 grid gap-4">
              {windowsTimeNotes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Linux timestamps"
              title="Practical interpretation"
            />

            <div className="mt-6 grid gap-4">
              {linuxTimeNotes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.text}
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
            label="Timestamp interpretation"
            title="Replace assumptions with evidence-backed language"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {timePitfalls.map((item) => (
              <div
                key={item.situation}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.situation}</h3>
                <div className="mt-4 rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                    Weak conclusion
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.weak}
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Better conclusion
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.better}
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
              label="Windows commands"
              title="Inspect metadata without changing it"
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
              title="Inspect metadata and actual type"
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
            label="Extensions vs actual type"
            title="Do not trust the filename suffix alone"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {extensionVsType.map((item) => (
              <div
                key={item.filename}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-sm font-bold text-cyan-300">
                  {item.filename}
                </code>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.possibleReality}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Better check
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.bestCheck}
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
            label="File transformations"
            title="Copying, extraction, editing, and restoration can change metadata meaning"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {copyScenarios.map((item) => (
              <div
                key={item.action}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.action}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.expectedEffect}
                </p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Lesson
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.lesson}
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
            title="Pick the field that actually answers the question"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {metadataQuestions.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.question}
                </h3>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Strongest evidence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.strongest}
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Supporting evidence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.supporting}
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
              label="Size & content"
              title="Combine size with hashing"
            />
            <div className="mt-6 grid gap-4">
              {sizeAndStructure.map((item) => (
                <div
                  key={item.clue}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.clue}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Ownership"
              title="Ownership gives account context, not motive"
            />
            <div className="mt-6 grid gap-4">
              {ownershipCases.map((item) => (
                <div
                  key={item.caseTitle}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.caseTitle}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.interpretation}
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
            label="Timeline method"
            title="Build time evidence carefully"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {timelineMethod.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Fictional timeline lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Separate archive history from local-system history
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {timelineExample.map((item) => (
              <div
                key={`${item.time}-${item.source}`}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.time}
                </span>
                <h3 className="mt-3 font-black text-white">{item.source}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {timelineQuestions.map((item, index) => (
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
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Common mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Metadata mistakes that create false timelines
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
              Check your timestamp reasoning
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
                Treat metadata as context, label timestamp types correctly,
                account for copy and extraction behavior, and use logs, hashes,
                browser records, and process evidence to confirm the story.
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
              href="/cyberpatriot/forensics/file-systems-important-paths"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/log-analysis-fundamentals"
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
