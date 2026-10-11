import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain what browser and download artifacts can reveal without assuming they prove user intent.",
  "Recognize common evidence such as browser history, downloads, cache, cookies, profiles, and downloaded files.",
  "Connect a download record to a local file using filename, path, timestamps, size, and hash.",
  "Distinguish browsing evidence from proof that a person intentionally opened, trusted, or executed a file.",
  "Correlate browser artifacts with file metadata, process evidence, authentication records, and network activity.",
  "Preserve browser and download evidence before deleting files, clearing history, or changing profiles.",
];

const browserPrinciples = [
  {
    title: "History is activity evidence, not intent",
    text:
      "A browser record can show that a page was visited or requested, but it does not automatically explain why.",
  },
  {
    title: "Downloads create multiple artifacts",
    text:
      "A download can leave browser history, a download record, a local file, filesystem timestamps, and later process or application evidence.",
  },
  {
    title: "Filename is not identity",
    text:
      "A downloaded file can be renamed, moved, copied, or replaced. Use hashes and metadata when exact content identity matters.",
  },
  {
    title: "Profiles matter",
    text:
      "Browser evidence usually belongs to a specific browser profile, which can help connect activity to a local account context.",
  },
  {
    title: "Automatic activity exists",
    text:
      "Browsers load background resources, prefetch content, update extensions, and create cache entries without direct user action.",
  },
  {
    title: "Preserve before cleanup",
    text:
      "Clearing history, deleting downloads, or resetting a profile can remove the evidence needed to answer later questions.",
  },
];

const artifactTypes = [
  {
    artifact: "Browsing history",
    value:
      "Visited URLs, page titles, and timestamps depending on the browser.",
    caution:
      "A record shows browser activity, not necessarily deliberate reading or approval.",
  },
  {
    artifact: "Download history",
    value:
      "Downloaded filename, source URL, destination path, timestamp, status, and size where available.",
    caution:
      "A browser record may remain even if the file was later moved or deleted.",
  },
  {
    artifact: "Cache",
    value:
      "Locally stored web resources used to speed future browsing.",
    caution:
      "Cached content can be created automatically and does not prove the user intentionally saved it.",
  },
  {
    artifact: "Cookies",
    value:
      "Site state, session identifiers, preferences, and tracking data.",
    caution:
      "Cookies can show site interaction but should not be treated as credentials or exposed unnecessarily.",
  },
  {
    artifact: "Browser profile",
    value:
      "History, settings, extensions, bookmarks, saved state, and application-specific databases.",
    caution:
      "A browser profile can persist after account or browser changes.",
  },
  {
    artifact: "Local downloaded file",
    value:
      "File path, size, timestamps, type, ownership, permissions, and hash.",
    caution:
      "File presence alone does not prove it was opened or executed.",
  },
];

const evidenceChain = [
  {
    step: "01",
    title: "Find the browser record",
    text:
      "Identify source URL, timestamp, filename, destination, browser profile, and download status where available.",
  },
  {
    step: "02",
    title: "Find the local file",
    text:
      "Check the expected download path, full filename, size, timestamps, ownership, and actual file type.",
  },
  {
    step: "03",
    title: "Hash the file",
    text:
      "Record SHA-256 when exact content identity matters.",
  },
  {
    step: "04",
    title: "Look for later activity",
    text:
      "Check whether an application, process, service, task, or script used the file after download.",
  },
  {
    step: "05",
    title: "Correlate the user session",
    text:
      "Use authentication and profile context to establish which account session existed at the time.",
  },
  {
    step: "06",
    title: "Answer only what the evidence supports",
    text:
      "Separate downloaded, opened, executed, modified, and trusted because each requires different evidence.",
  },
];

const windowsPaths = [
  {
    path: "C:\\Users\\<user>\\Downloads",
    value:
      "Default location for many user downloads.",
  },
  {
    path: "C:\\Users\\<user>\\AppData\\Local",
    value:
      "Common location for Chromium-based browser profile data and caches.",
  },
  {
    path: "C:\\Users\\<user>\\AppData\\Roaming",
    value:
      "Some browser and application profile data may appear here.",
  },
  {
    path: "Browser profile directories",
    value:
      "Profile-specific history, downloads, cache, extensions, and state.",
  },
];

const linuxPaths = [
  {
    path: "/home/<user>/Downloads",
    value:
      "Common default download directory for desktop Linux users.",
  },
  {
    path: "~/.config",
    value:
      "Common location for browser configuration and profile data.",
  },
  {
    path: "~/.cache",
    value:
      "Common location for browser cache data.",
  },
  {
    path: "~/.mozilla / browser-specific profile paths",
    value:
      "Application-specific user profile information depending on browser.",
  },
];

const fileCommandsWindows = [
  {
    label: "Inspect a downloaded file",
    command: `Get-Item "C:\\Users\\trainee\\Downloads\\sample.zip" |
  Format-List Name,FullName,Length,CreationTime,LastWriteTime,LastAccessTime,Attributes`,
    purpose:
      "Shows common file metadata.",
  },
  {
    label: "Hash a downloaded file",
    command: `Get-FileHash "C:\\Users\\trainee\\Downloads\\sample.zip" -Algorithm SHA256`,
    purpose:
      "Provides exact content identity for later comparison.",
  },
  {
    label: "Search profile for a filename",
    command: `Get-ChildItem "C:\\Users\\trainee" -Filter "sample.zip" -Recurse -Force -ErrorAction SilentlyContinue`,
    purpose:
      "Finds matching filenames under a scoped user profile.",
  },
  {
    label: "Review process evidence",
    command: `Get-CimInstance Win32_Process |
  Select-Object ProcessId,ParentProcessId,Name,ExecutablePath,CommandLine`,
    purpose:
      "Helps determine whether a downloaded file or related application was later executed.",
  },
];

const fileCommandsLinux = [
  {
    label: "Inspect a downloaded file",
    command: `stat /home/trainee/Downloads/sample.zip`,
    purpose:
      "Shows size, ownership, permissions, and timestamps.",
  },
  {
    label: "Hash a downloaded file",
    command: `sha256sum /home/trainee/Downloads/sample.zip`,
    purpose:
      "Provides exact content identity.",
  },
  {
    label: "Identify actual file type",
    command: `file /home/trainee/Downloads/sample.zip`,
    purpose:
      "Checks content type instead of trusting the filename extension.",
  },
  {
    label: "Find matching files",
    command: `find /home/trainee -name "sample.zip" 2>/dev/null`,
    purpose:
      "Searches the selected user profile for copies or moved versions.",
  },
];

const browserEvidenceQuestions = [
  {
    question: "Was the site visited?",
    strongest:
      "Browser history or application-specific browsing database.",
    supporting:
      "Cache, cookies, DNS/application logs, and user session context.",
  },
  {
    question: "Was a file downloaded?",
    strongest:
      "Browser download record plus matching local file.",
    supporting:
      "File creation context, source URL, size, timestamp, and hash.",
  },
  {
    question: "Was the file opened?",
    strongest:
      "Application history, recent-file records, process evidence, or application logs.",
    supporting:
      "Access-time information only where meaningful.",
  },
  {
    question: "Was the file executed?",
    strongest:
      "Process execution evidence, service/task launch evidence, or execution logs.",
    supporting:
      "Browser download history and file presence do not prove execution.",
  },
  {
    question: "Was the file modified?",
    strongest:
      "Hash comparison and file modification evidence.",
    supporting:
      "Application logs, process timeline, and LastWriteTime/mtime.",
  },
  {
    question: "Which user profile was involved?",
    strongest:
      "Browser profile path plus OS account/profile context.",
    supporting:
      "Authentication records and file ownership.",
  },
];

const downloadReasoning = [
  {
    evidence:
      "Browser shows file.zip downloaded at 10:04",
    supported:
      "The browser recorded a download event for file.zip at that time.",
    notSupported:
      "The user trusted, opened, or executed the file.",
  },
  {
    evidence:
      "Matching file exists in Downloads at 10:04",
    supported:
      "The local file aligns with the browser download record.",
    notSupported:
      "The file remained unchanged after download.",
  },
  {
    evidence:
      "Browser record and local file have matching size",
    supported:
      "The artifacts are consistent with one another.",
    notSupported:
      "The files are byte-for-byte identical without a hash comparison.",
  },
  {
    evidence:
      "Downloaded file later appears in AppData with same SHA-256",
    supported:
      "The content is identical despite the changed path.",
    notSupported:
      "The user intentionally copied it without additional evidence.",
  },
  {
    evidence:
      "Process starts from the downloaded path",
    supported:
      "The file at that path was executed as a process.",
    notSupported:
      "The execution was malicious or intentional without more context.",
  },
  {
    evidence:
      "Cache contains content from a site",
    supported:
      "The browser stored content associated with that site.",
    notSupported:
      "The user intentionally saved or viewed every cached object.",
  },
];

const profileQuestions = [
  {
    title: "Which browser profile?",
    text:
      "Record the profile directory or browser account context if available.",
  },
  {
    title: "Which OS account?",
    text:
      "Map the profile directory back to the Windows or Linux user account.",
  },
  {
    title: "Was the session active?",
    text:
      "Use authentication and session evidence around the browser timestamp.",
  },
  {
    title: "Was more than one profile present?",
    text:
      "Multiple browser profiles can exist under the same operating-system account.",
  },
  {
    title: "Was sync enabled?",
    text:
      "Synced history or bookmarks can complicate assumptions about which device originated an artifact.",
  },
];

const cacheCautions = [
  {
    title: "Automatic fetches",
    text:
      "Browsers can retrieve images, scripts, advertisements, icons, and background resources automatically.",
  },
  {
    title: "Prefetching",
    text:
      "Some browsers may retrieve resources before a user explicitly opens the destination.",
  },
  {
    title: "Service workers",
    text:
      "Web applications can store resources for offline or background behavior.",
  },
  {
    title: "Extensions",
    text:
      "Browser extensions can make web requests that are not direct user navigation.",
  },
  {
    title: "Cache eviction",
    text:
      "Older cache entries can disappear automatically as space is reused.",
  },
];

const cookiesAndSessions = [
  {
    title: "Cookies show site state",
    text:
      "They can indicate that the browser interacted with a site or maintained a session.",
  },
  {
    title: "Do not expose secrets",
    text:
      "Session cookies and tokens can be sensitive. Training notes should describe evidence without publishing live secrets.",
  },
  {
    title: "Cookie presence is not account ownership",
    text:
      "A cookie can exist because someone authenticated, a session was restored, or an application created site state.",
  },
  {
    title: "Correlate with account context",
    text:
      "Use browser profile, OS user session, and site/application evidence together.",
  },
];

const filenamePathScenarios = [
  {
    scenario:
      "Same filename in Downloads and Temp, different hashes",
    meaning:
      "The files are different content despite matching names.",
  },
  {
    scenario:
      "Different names, same SHA-256",
    meaning:
      "The file content is the same despite rename or copy.",
  },
  {
    scenario:
      "Download record points to Downloads, file now in AppData",
    meaning:
      "The file may have been moved or copied after download.",
  },
  {
    scenario:
      "Download history exists but file is missing",
    meaning:
      "The browser recorded the download, but the local file may have been moved, deleted, quarantined, or cleaned.",
  },
  {
    scenario:
      "File exists but no browser download record",
    meaning:
      "It may have arrived through another browser, application, archive extraction, network share, USB, or another method.",
  },
];

const correlationCases = [
  {
    records:
      "Browser download at 09:15 + local file creation at 09:15 + matching filename and size",
    supported:
      "The local file is consistent with the recorded browser download.",
  },
  {
    records:
      "Download at 10:02 + task creation at 10:05 + task launches downloaded script at 10:10",
    supported:
      "The browser, scheduler, and process evidence form a coherent execution chain.",
  },
  {
    records:
      "Browser history visit at 11:00 + no download record + no local file",
    supported:
      "The page was visited, but there is no direct evidence here that a file was downloaded.",
  },
  {
    records:
      "Download record + local file hash + Defender detection referencing same path/hash",
    supported:
      "The browser, file, and security-product records refer to the same content.",
  },
  {
    records:
      "Download at 12:20 + RDP session active + process starts at 12:25",
    supported:
      "The download and execution occurred during the remote interactive session.",
  },
  {
    records:
      "Downloaded archive + extracted script with older mtime + extraction event later",
    supported:
      "The older script timestamp may have been preserved from the archive rather than representing earlier local existence.",
  },
];

const preservationFields = [
  "Browser name and profile",
  "OS user account",
  "History URL and title",
  "Download source URL",
  "Download filename",
  "Destination path",
  "Download timestamp and zone",
  "Download status and size",
  "Local file metadata",
  "Actual file type",
  "SHA-256 hash",
  "Related process/application evidence",
  "Related authentication/session evidence",
];

const fictionalTimeline = [
  {
    time: "15:02",
    source: "Authentication",
    detail:
      "trainee7 begins a fictional Windows interactive session.",
  },
  {
    time: "15:08",
    source: "Browser History",
    detail:
      "The browser visits https://training.example/resources.",
  },
  {
    time: "15:09",
    source: "Download Record",
    detail:
      "utilities.zip is downloaded to C:\\Users\\trainee7\\Downloads\\utilities.zip.",
  },
  {
    time: "15:09",
    source: "Filesystem",
    detail:
      "utilities.zip appears locally with size 84 KB and SHA-256 HASH-U1.",
  },
  {
    time: "15:12",
    source: "Filesystem",
    detail:
      "helper.ps1 is extracted into C:\\Users\\trainee7\\AppData\\Local\\Temp\\UtilityLab\\.",
  },
  {
    time: "15:14",
    source: "Process Evidence",
    detail:
      "PowerShell runs helper.ps1 from the extracted temporary directory.",
  },
];

const labQuestions = [
  {
    question:
      "What proves the browser visited the training page?",
    answer:
      "The browser-history record at 15:08.",
  },
  {
    question:
      "What best proves utilities.zip was downloaded?",
    answer:
      "The browser download record plus the matching local file at the recorded destination.",
  },
  {
    question:
      "What does HASH-U1 add?",
    answer:
      "It provides exact content identity for utilities.zip.",
  },
  {
    question:
      "Does the browser record prove helper.ps1 was executed?",
    answer:
      "No. The later PowerShell process evidence establishes execution.",
  },
  {
    question:
      "Why is the Temp extraction path useful?",
    answer:
      "It connects the extracted script to a specific local location and later process command line.",
  },
  {
    question:
      "What should be preserved before deleting the archive or script?",
    answer:
      "Browser history/download record, file paths, timestamps, sizes, hashes, extraction context, PowerShell process evidence, and session context.",
  },
];

const mistakes = [
  {
    title: "Equating visit with intent",
    text:
      "A page visit does not explain why the browser loaded it.",
  },
  {
    title: "Equating download with execution",
    text:
      "A browser download record does not prove the file was opened or run.",
  },
  {
    title: "Trusting filenames",
    text:
      "Files can be renamed or replaced. Use hashes when exact identity matters.",
  },
  {
    title: "Ignoring browser profile",
    text:
      "Multiple profiles can exist under one operating-system account.",
  },
  {
    title: "Treating cache as deliberate saving",
    text:
      "Cache entries are often created automatically.",
  },
  {
    title: "Ignoring archive extraction",
    text:
      "Extracted files can preserve older internal timestamps and create misleading timelines.",
  },
  {
    title: "Clearing browser data first",
    text:
      "This can destroy history, download, and profile evidence.",
  },
  {
    title: "Recording sensitive session tokens",
    text:
      "Preserve evidence conceptually without exposing live credentials or cookies.",
  },
];

const reviewChecklist = [
  "I distinguish browsing, downloading, opening, and executing.",
  "I record browser name and profile context.",
  "I record the source URL and download destination.",
  "I compare download record time with local file metadata.",
  "I record file size and actual type.",
  "I use SHA-256 when exact file identity matters.",
  "I correlate later process or application activity.",
  "I account for archive extraction and timestamp preservation.",
  "I treat cache and cookies cautiously.",
  "I use authentication evidence to place browser activity in a user session.",
  "I preserve browser records before cleanup.",
  "I avoid exposing sensitive cookies, tokens, or credentials.",
];

const reflection = [
  "Why does a browser download record fail to prove execution?",
  "What evidence would you use to prove a downloaded file later ran?",
  "Why can browser cache be misleading if interpreted as deliberate user action?",
  "How can hashes connect a renamed or moved file to the original download?",
  "Why can archive extraction create confusing timestamps?",
  "What evidence would you preserve before clearing a browser profile?",
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

export default function BrowserDownloadArtifactsPage() {
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
              href="/cyberpatriot/forensics/network-connections-listening-services"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/email-documents-suspicious-file-triage"
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
                Forensics · Lesson 13
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Browser &amp; Download Artifacts
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how browser history, download records, profiles, cache,
                local files, hashes, and later process activity work together to
                explain web and download activity.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                A browser can prove browsing and download activity, but it does
                not automatically prove that a user trusted, opened, or executed
                the downloaded content.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main artifacts</span>
                  <span className="font-bold text-white">History + downloads</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Content identity</span>
                  <span className="font-bold text-white">SHA-256</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Key distinction</span>
                  <span className="font-bold text-white">Downloaded vs executed</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Build evidence chain</span>
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
            title="Connect web activity to local file and process evidence"
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
                <p className="text-sm leading-6 text-slate-300">{objective}</p>
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
              Browsing, downloading, opening, and executing are different claims
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Each claim requires different evidence. Avoid turning a browser
              record into a stronger conclusion than the artifacts support.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
              Competition caution
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve browser evidence before cleanup
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Clearing history or deleting downloads can remove useful evidence.
              Record the browser profile, URLs, download path, timestamps, file
              metadata, and hashes first.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Browser principles"
            title="Use web artifacts without overclaiming"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {browserPrinciples.map((item) => (
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
          <SectionHeading
            label="Artifact types"
            title="Know what each browser artifact can tell you"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {artifactTypes.map((item) => (
              <div
                key={item.artifact}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.artifact}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.value}
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
            label="Evidence chain"
            title="Move from browser record to later activity"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {evidenceChain.map((item) => (
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Windows paths"
              title="Common user-profile evidence locations"
            />
            <div className="mt-6 grid gap-4">
              {windowsPaths.map((item) => (
                <div
                  key={item.path}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <code className="text-sm font-bold text-cyan-300">
                    {item.path}
                  </code>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Linux paths"
              title="Common user-profile evidence locations"
            />
            <div className="mt-6 grid gap-4">
              {linuxPaths.map((item) => (
                <div
                  key={item.path}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <code className="text-sm font-bold text-cyan-300">
                    {item.path}
                  </code>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.value}
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
              label="Windows file review"
              title="Inspect downloaded artifacts"
            />
            <div className="mt-6 grid gap-4">
              {fileCommandsWindows.map((item) => (
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
              label="Linux file review"
              title="Inspect downloaded artifacts"
            />
            <div className="mt-6 grid gap-4">
              {fileCommandsLinux.map((item) => (
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
            label="Question-to-evidence map"
            title="Use the right artifact for each browser question"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {browserEvidenceQuestions.map((item) => (
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
                <div className="mt-3 rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                    Supporting
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Reasoning"
            title="Separate downloaded from opened or executed"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {downloadReasoning.map((item) => (
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
              label="Browser profiles"
              title="Connect browser data to user context"
            />
            <div className="mt-6 grid gap-4">
              {profileQuestions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Cache cautions"
              title="Why cache does not equal deliberate action"
            />
            <div className="mt-6 grid gap-4">
              {cacheCautions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
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
            label="Cookies & sessions"
            title="Handle site-state evidence carefully"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {cookiesAndSessions.map((item) => (
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
          <SectionHeading
            label="Filename & path"
            title="Track content even when location or name changes"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filenamePathScenarios.map((item) => (
              <div
                key={item.scenario}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.scenario}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
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
            title="Combine browser, file, session, and process evidence"
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
            Evidence note
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Preserve the browser-to-file chain
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {preservationFields.map((item, index) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-slate-300">
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
            Browser-analysis mistakes that create false conclusions
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
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
            Fictional browser lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Reconstruct browsing, download, extraction, and execution
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fictionalTimeline.map((item) => (
              <div
                key={`${item.time}-${item.source}`}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black text-cyan-300">{item.time}</span>
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
              Check your browser-artifact reasoning
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
                Separate browsing from downloading and execution, connect the
                browser record to the local file, use hashes for identity, and
                preserve profile evidence before cleanup.
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
              href="/cyberpatriot/forensics/network-connections-listening-services"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/email-documents-suspicious-file-triage"
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
