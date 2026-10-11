import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Review the complete CyberPatriot forensics workflow from question to evidence-backed conclusion.",
  "Use a repeatable checklist for Windows and Linux evidence collection without destroying useful state.",
  "Match common forensic questions to the strongest evidence sources.",
  "Preserve timestamps, hashes, account context, process relationships, service state, scheduler configuration, and network evidence before remediation.",
  "Recognize common overclaims, weak assumptions, and evidence gaps before submitting an answer.",
  "Finish competition forensics work with concise documentation that another teammate can verify.",
];

const finalPrinciples = [
  {
    title: "Read the question exactly",
    text:
      "Identify what must be proved, which system is in scope, and whether the question asks for a user, file, time, process, service, connection, or sequence.",
  },
  {
    title: "Choose the evidence source before searching",
    text:
      "Authentication questions belong in account and log evidence. Execution questions require process evidence. File identity questions require hashes.",
  },
  {
    title: "Preserve before changing",
    text:
      "Record the state that could disappear if you stop a service, kill a process, disable an account, delete a task, move a file, or change a firewall rule.",
  },
  {
    title: "Corroborate important claims",
    text:
      "Use independent sources when possible. One artifact can be incomplete or misleading.",
  },
  {
    title: "Separate fact from inference",
    text:
      "Write what the artifact directly proves first, then clearly label broader conclusions.",
  },
  {
    title: "Stop where the evidence stops",
    text:
      "Do not invent intent, identity, or causation when the evidence only shows sequence or association.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Read the prompt",
    text:
      "Underline the exact entity, time, action, or relationship the question asks you to identify.",
  },
  {
    step: "02",
    title: "Select the strongest source",
    text:
      "Choose the log, file, account database, process state, scheduler record, network state, or browser artifact most likely to answer it.",
  },
  {
    step: "03",
    title: "Collect the minimum useful context",
    text:
      "Record time, source, identifier, path, account, PID, hash, event ID, or other fields needed to verify the observation.",
  },
  {
    step: "04",
    title: "Corroborate",
    text:
      "Use a second independent artifact when the conclusion matters or one source leaves ambiguity.",
  },
  {
    step: "05",
    title: "Classify confidence",
    text:
      "Decide whether the conclusion is directly observed, strongly correlated, weakly inferred, or unsupported.",
  },
  {
    step: "06",
    title: "Preserve before remediation",
    text:
      "Document the original state before changing accounts, tasks, services, files, firewall rules, or other evidence-producing configuration.",
  },
  {
    step: "07",
    title: "Answer concisely",
    text:
      "Give the direct answer, cite the supporting evidence in your notes, and state any important limitation.",
  },
];

const evidenceMap = [
  {
    question: "Does an account exist?",
    strongest: "Local account database / getent / Get-LocalUser",
    supporting: "Profile/home directory, account logs",
  },
  {
    question: "Is the account privileged?",
    strongest: "Local group membership, UID/GID, sudo/admin group evidence",
    supporting: "Security events and policy context",
  },
  {
    question: "Did the account authenticate?",
    strongest: "Windows Security log, auth.log, journal, SSH/PAM records",
    supporting: "Session records, last/who/w",
  },
  {
    question: "Was a file downloaded?",
    strongest: "Browser download record plus matching local file",
    supporting: "Filesystem metadata and hash",
  },
  {
    question: "Was a file executed?",
    strongest: "Process creation evidence or command line",
    supporting: "Task/service logs, application records",
  },
  {
    question: "Is this the same file?",
    strongest: "SHA-256 comparison",
    supporting: "Size, path, timestamps",
  },
  {
    question: "Why did a process start?",
    strongest: "Parent process, service, task, cron, timer, or startup source",
    supporting: "Logs and process start time",
  },
  {
    question: "What is listening?",
    strongest: "Socket state with owning PID",
    supporting: "Process path, service configuration, firewall state",
  },
  {
    question: "What caused recurring execution?",
    strongest: "Scheduled task, cron, or timer plus execution history",
    supporting: "Process and log correlation",
  },
  {
    question: "How did events unfold?",
    strongest: "Normalized multi-source timeline",
    supporting: "Authentication, browser, file, process, service, network evidence",
  },
];

const windowsQuickChecks = [
  {
    area: "Accounts",
    commands: [
      `Get-LocalUser`,
      `Get-LocalGroup`,
      `Get-LocalGroupMember -Group "Administrators"`,
      `whoami`,
      `whoami /groups`,
    ],
  },
  {
    area: "Logs",
    commands: [
      `Get-WinEvent -LogName Security -MaxEvents 50`,
      `Get-WinEvent -LogName System -MaxEvents 50`,
      `Get-WinEvent -LogName Application -MaxEvents 50`,
    ],
  },
  {
    area: "Processes",
    commands: [
      `Get-Process`,
      `Get-CimInstance Win32_Process |
  Select-Object ProcessId,ParentProcessId,Name,ExecutablePath,CommandLine`,
    ],
  },
  {
    area: "Services",
    commands: [
      `Get-Service`,
      `Get-CimInstance Win32_Service |
  Select-Object Name,State,StartMode,StartName,PathName`,
    ],
  },
  {
    area: "Scheduled Tasks",
    commands: [
      `Get-ScheduledTask`,
      `Get-ScheduledTaskInfo -TaskName "ExampleTask"`,
    ],
  },
  {
    area: "Network",
    commands: [
      `Get-NetTCPConnection`,
      `Get-NetTCPConnection -State Listen`,
      `netstat -ano`,
    ],
  },
  {
    area: "Files",
    commands: [
      `Get-Item "C:\\Path\\To\\File" | Format-List *`,
      `Get-FileHash "C:\\Path\\To\\File" -Algorithm SHA256`,
      `Get-Acl "C:\\Path\\To\\File"`,
    ],
  },
  {
    area: "Firewall",
    commands: [
      `Get-NetFirewallProfile`,
      `Get-NetFirewallRule -Enabled True`,
    ],
  },
];

const linuxQuickChecks = [
  {
    area: "Accounts",
    commands: [
      `getent passwd`,
      `getent group sudo`,
      `id trainee`,
      `groups trainee`,
    ],
  },
  {
    area: "Sessions",
    commands: [
      `who`,
      `w`,
      `last -F`,
      `lastlog`,
    ],
  },
  {
    area: "Logs",
    commands: [
      `journalctl -n 50`,
      `journalctl -b`,
      `grep -i "sudo\|sshd\|cron" /var/log/auth.log`,
    ],
  },
  {
    area: "Processes",
    commands: [
      `ps aux`,
      `ps -eo pid,ppid,user,lstart,cmd`,
      `pstree -ap`,
    ],
  },
  {
    area: "Services",
    commands: [
      `systemctl --type=service --state=running`,
      `systemctl status ssh`,
      `systemctl cat ssh`,
    ],
  },
  {
    area: "Scheduling",
    commands: [
      `crontab -l`,
      `sudo cat /etc/crontab`,
      `systemctl list-timers --all`,
    ],
  },
  {
    area: "Network",
    commands: [
      `sudo ss -lntup`,
      `sudo ss -ntup`,
    ],
  },
  {
    area: "Files",
    commands: [
      `stat /path/to/file`,
      `file /path/to/file`,
      `sha256sum /path/to/file`,
    ],
  },
];

const eventIds = [
  { id: "4624", meaning: "Successful logon", caution: "Check logon type and account context." },
  { id: "4625", meaning: "Failed logon", caution: "Failure alone does not prove attack." },
  { id: "4648", meaning: "Explicit credentials used", caution: "Interpret with process/session context." },
  { id: "4672", meaning: "Special privileges assigned to new logon", caution: "Privilege presence is not proof of misuse." },
  { id: "4720", meaning: "User account created", caution: "Does not by itself identify who physically created it." },
  { id: "4722", meaning: "User account enabled", caution: "Correlate with surrounding account-management activity." },
  { id: "4725", meaning: "User account disabled", caution: "Could be normal administration or team action." },
  { id: "4726", meaning: "User account deleted", caution: "Historical logs may remain after deletion." },
  { id: "4732", meaning: "Member added to local security-enabled group", caution: "Group membership provides capability, not proof of action." },
  { id: "4733", meaning: "Member removed from local security-enabled group", caution: "Document whether this was original activity or remediation." },
  { id: "7045", meaning: "Service installed", caution: "Correlate with binary path, package/software context, and scenario requirements." },
  { id: "7036", meaning: "Service state change", caution: "State change alone does not explain why it occurred." },
];

const logonTypes = [
  { type: "2", meaning: "Interactive" },
  { type: "3", meaning: "Network" },
  { type: "4", meaning: "Batch" },
  { type: "5", meaning: "Service" },
  { type: "7", meaning: "Unlock" },
  { type: "10", meaning: "RemoteInteractive / RDP" },
  { type: "11", meaning: "CachedInteractive" },
];

const preservationTargets = [
  {
    target: "Account",
    record:
      "Username, SID/UID, enabled state, group membership, home/profile path, shell, last-login context, related auth events.",
  },
  {
    target: "Process",
    record:
      "PID, name, executable path, command line, parent PID, user, start time, hash, network state.",
  },
  {
    target: "Service",
    record:
      "Name, state, start mode, run-as account, executable path/ExecStart, logs, dependencies, related process.",
  },
  {
    target: "Scheduled item",
    record:
      "Name, trigger, action, arguments, run-as account, enabled state, history, linked file.",
  },
  {
    target: "File",
    record:
      "Full path, size, owner, permissions, timestamps, actual type, SHA-256, source context.",
  },
  {
    target: "Network connection",
    record:
      "Protocol, local/remote addresses and ports, state, PID, process, service, user, timestamp.",
  },
  {
    target: "Browser download",
    record:
      "Browser profile, source URL, filename, destination, time, size, local hash, later process evidence.",
  },
  {
    target: "Archive",
    record:
      "Archive path, hash, timestamps, internal paths/times, extracted paths/hashes, extraction evidence.",
  },
];

const overclaimPairs = [
  {
    weak: "Account exists, so it was used.",
    better: "The account exists. Separate authentication or session evidence is required to prove use.",
  },
  {
    weak: "User is an administrator, so they performed the change.",
    better: "The user has administrative capability. Action attribution requires process or log evidence.",
  },
  {
    weak: "The file was downloaded, so it was executed.",
    better: "The browser recorded a download. Execution requires process or application evidence.",
  },
  {
    weak: "The port is 443, so the traffic is safe.",
    better: "The connection uses remote port 443. Port number alone does not establish destination trust.",
  },
  {
    weak: "The service runs as SYSTEM, so it is malicious.",
    better: "The service runs with high privilege. Legitimacy depends on path, source, purpose, and scenario.",
  },
  {
    weak: "The file is hidden, so it is suspicious.",
    better: "The file is hidden. Visibility state alone is not evidence of malicious intent.",
  },
  {
    weak: "Defender found nothing, so the file is clean.",
    better: "No detection was recorded by that scan. This is not proof of safety.",
  },
  {
    weak: "The first event caused the second event.",
    better: "The events occurred in sequence. Causation requires a supported connection between them.",
  },
];

const timelineChecklist = [
  "Preserve the original timestamp exactly as shown.",
  "Record timezone or offset.",
  "Label timestamp type.",
  "Identify source host/application.",
  "Normalize copies of timestamps only for comparison.",
  "Account for archive/copy behavior.",
  "Check for clock drift or VM snapshot effects.",
  "Separate direct observation from inferred sequence.",
  "Corroborate major links with another source.",
  "Record team remediation actions separately.",
  "State confidence and unresolved gaps.",
];

const browserChecklist = [
  "Browser/profile identified",
  "Visited URL recorded",
  "Download source recorded",
  "Destination path recorded",
  "Download time recorded",
  "Local file located",
  "File size checked",
  "Actual type checked",
  "SHA-256 recorded",
  "Later open/execute evidence checked",
  "Session context checked",
];

const fileTriageChecklist = [
  "Do not execute unknown files",
  "Record original path",
  "Record filename and extension",
  "Verify actual file type",
  "Record size",
  "Record owner/permissions",
  "Record timestamps",
  "Calculate SHA-256",
  "Check source context",
  "Check process/application use",
  "Preserve archive/container first",
  "Avoid enabling macros or active content",
];

const schedulerChecklist = [
  "Name / path",
  "Trigger",
  "Action",
  "Arguments",
  "Working directory",
  "Run-as account",
  "Enabled state",
  "Last/next run",
  "Execution history",
  "Linked script/executable",
  "File hash",
  "Related process evidence",
];

const networkChecklist = [
  "Protocol",
  "Local address",
  "Local port",
  "Remote address",
  "Remote port",
  "Connection state",
  "Owning PID",
  "Process name",
  "Executable path",
  "User/service context",
  "Firewall context",
  "Scenario requirement",
];

const evidenceConfidence = [
  {
    level: "Direct",
    description:
      "The artifact itself records the fact being stated.",
  },
  {
    level: "Strongly correlated",
    description:
      "Multiple independent artifacts support the same link or sequence.",
  },
  {
    level: "Moderate",
    description:
      "The evidence is consistent but one important link remains indirect.",
  },
  {
    level: "Weak",
    description:
      "Only one ambiguous artifact supports the claim.",
  },
  {
    level: "Unsupported",
    description:
      "The available evidence does not justify the claim.",
  },
];

const competitionSequence = [
  {
    phase: "Start",
    actions:
      "Read the question, note exact wording, identify host/account/file/process/time scope.",
  },
  {
    phase: "Collect",
    actions:
      "Gather the strongest direct evidence with minimal changes to system state.",
  },
  {
    phase: "Correlate",
    actions:
      "Cross-check with a second source, then map account → file → process → service/task → network as needed.",
  },
  {
    phase: "Preserve",
    actions:
      "Capture screenshots/notes, hashes, IDs, paths, times, and relevant configuration before remediation.",
  },
  {
    phase: "Remediate",
    actions:
      "Only make changes that are justified by the scenario and do not break required services.",
  },
  {
    phase: "Document",
    actions:
      "Record what changed, when, why, and which evidence existed before the change.",
  },
  {
    phase: "Answer",
    actions:
      "Give the concise result, strongest evidence, confidence, and any important limitation.",
  },
];

const finalScenario = [
  {
    time: "09:00",
    source: "Authentication",
    detail:
      "trainee-final begins a fictional interactive session.",
  },
  {
    time: "09:05",
    source: "Browser",
    detail:
      "Browser records download of toolkit.zip.",
  },
  {
    time: "09:06",
    source: "Filesystem",
    detail:
      "toolkit.zip appears in Downloads with SHA-256 HASH-FINAL-1.",
  },
  {
    time: "09:09",
    source: "Archive",
    detail:
      "Archive contains scripts/check.ps1.",
  },
  {
    time: "09:11",
    source: "Filesystem",
    detail:
      "check.ps1 appears in AppData and matches the archived script hash.",
  },
  {
    time: "09:12",
    source: "Task Scheduler",
    detail:
      "Task FinalCheck is configured to launch check.ps1 every 20 minutes.",
  },
  {
    time: "09:20",
    source: "Process",
    detail:
      "PowerShell starts with check.ps1 in the command line.",
  },
  {
    time: "09:21",
    source: "Network",
    detail:
      "Child process connects to fictional 203.0.113.200:443.",
  },
];

const finalQuestions = [
  {
    question:
      "What proves toolkit.zip was downloaded?",
    answer:
      "The browser download record plus the matching local archive appearance.",
  },
  {
    question:
      "What proves check.ps1 came from the archive?",
    answer:
      "The archive listing, extracted local path, and matching file hash.",
  },
  {
    question:
      "What proves scheduled persistence?",
    answer:
      "The FinalCheck task configuration plus the later PowerShell execution.",
  },
  {
    question:
      "What proves outbound network activity?",
    answer:
      "The network evidence tied to the child process after check.ps1 execution.",
  },
  {
    question:
      "What should not be claimed?",
    answer:
      "Do not claim malicious intent, human attribution, or destination reputation without additional evidence.",
  },
  {
    question:
      "What should be preserved before disabling the task?",
    answer:
      "Task configuration, file path/hash, process chain, network evidence, relevant logs, and timestamps.",
  },
];

const finalMistakes = [
  {
    title: "Changing before documenting",
    text:
      "Stopping or deleting the evidence source can erase the strongest proof.",
  },
  {
    title: "Answering from memory",
    text:
      "Use the actual artifact and current system state rather than relying on what a command usually shows.",
  },
  {
    title: "Using one source for everything",
    text:
      "Different questions require different evidence sources.",
  },
  {
    title: "Confusing capability with action",
    text:
      "Privilege, macro capability, or service permission does not prove use.",
  },
  {
    title: "Ignoring time context",
    text:
      "Timezone, timestamp type, and archive behavior can completely change the sequence.",
  },
  {
    title: "Breaking required services",
    text:
      "Always compare a suspicious-looking component with scenario requirements before disabling it.",
  },
  {
    title: "Treating no detection as safe",
    text:
      "Security tools add evidence, not certainty.",
  },
  {
    title: "Overwriting uncertainty",
    text:
      "If a fact cannot be proved, say so.",
  },
];

const finalChecklist = [
  "I know exactly what the question asks.",
  "I chose the strongest evidence source.",
  "I recorded original timestamps and timezone context.",
  "I recorded stable identifiers such as SID, UID, PID, event ID, or SHA-256 where useful.",
  "I mapped processes to paths, parents, users, services, tasks, or sockets when relevant.",
  "I distinguished configured state from actual execution.",
  "I distinguished file presence from opening or execution.",
  "I distinguished privilege capability from proof of privileged action.",
  "I preserved evidence before remediation.",
  "I checked scenario requirements before disabling anything.",
  "I recorded my own changes separately.",
  "I corroborated important conclusions.",
  "I labeled inference and uncertainty.",
  "I avoided exposing passwords, hashes from protected credential stores, tokens, or private keys.",
  "I wrote a concise final answer another teammate can verify.",
];

const reflection = [
  "Which evidence source would you use first for a question about account creation?",
  "What is the strongest way to prove two files contain the same content?",
  "Why is a scheduled task definition not enough to prove execution?",
  "Why must a listening port be mapped to a PID and executable?",
  "What evidence would you preserve before disabling a suspicious service?",
  "What does a good final forensic answer include besides the conclusion?",
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

export default function ForensicsFinalReviewChecklistPage() {
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
              href="/cyberpatriot/forensics/forensics-practice-case"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Forensics · Lesson 18
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Forensics Final Review Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review the complete CyberPatriot forensics workflow, the most
                useful Windows and Linux commands, the strongest evidence sources,
                preservation rules, reasoning traps, and final-answer discipline.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Use this page as your final pre-competition reference: question,
                evidence, corroboration, preservation, remediation, documentation,
                and concise conclusion.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Final Review Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Lessons covered</span>
                  <span className="font-bold text-white">01-18</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Platforms</span>
                  <span className="font-bold text-white">Windows + Linux</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main habit</span>
                  <span className="font-bold text-white">Preserve first</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Defensible answers</span>
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
            title="Finish the forensics track with a complete competition checklist"
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Final principles"
            title="The habits that protect both evidence and your score"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {finalPrinciples.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Competition workflow
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            From question to defensible answer
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">{item.step}</span>
                <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Question-to-evidence map"
            title="Start with the source most likely to answer the question"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {evidenceMap.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.question}</h3>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Strongest source
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.strongest}</p>
                </div>
                <div className="mt-3 rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                    Supporting
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.supporting}</p>
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
              label="Windows quick reference"
              title="High-value read-only checks"
            />
            <div className="mt-6 grid gap-5">
              {windowsQuickChecks.map((item) => (
                <div
                  key={item.area}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="text-lg font-black text-white">{item.area}</h3>
                  <div className="mt-4 grid gap-3">
                    {item.commands.map((command) => (
                      <pre
                        key={command}
                        className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100"
                      >
{command}
                      </pre>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Linux quick reference"
              title="High-value read-only checks"
            />
            <div className="mt-6 grid gap-5">
              {linuxQuickChecks.map((item) => (
                <div
                  key={item.area}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="text-lg font-black text-white">{item.area}</h3>
                  <div className="mt-4 grid gap-3">
                    {item.commands.map((command) => (
                      <pre
                        key={command}
                        className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100"
                      >
{command}
                      </pre>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Windows event IDs"
            title="Useful Security and System event awareness"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {eventIds.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xl font-black text-cyan-300">{item.id}</span>
                  <span className="text-sm font-bold text-white">{item.meaning}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.caution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Windows logon types"
            title="Authentication context changes the meaning of Event 4624"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {logonTypes.map((item) => (
              <div
                key={item.type}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-xl font-black text-cyan-300">{item.type}</span>
                <p className="mt-3 text-sm font-bold text-white">{item.meaning}</p>
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
            Record the state that remediation could erase
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {preservationTargets.map((item) => (
              <div
                key={item.target}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.target}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.record}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Reasoning traps"
            title="Replace weak claims with evidence-safe language"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {overclaimPairs.map((item) => (
              <div
                key={item.weak}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-red-200">
                    Weak claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.weak}</p>
                </div>
                <div className="mt-3 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Better
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.better}</p>
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
              label="Timeline checklist"
              title="Before trusting event order"
            />
            <div className="mt-6 grid gap-3">
              {timelineChecklist.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Browser checklist"
              title="Before concluding what happened after a download"
            />
            <div className="mt-6 grid gap-3">
              {browserChecklist.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="File triage"
              title="Suspicious file checklist"
            />
            <div className="mt-6 grid gap-3">
              {fileTriageChecklist.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Scheduling"
              title="Task / cron / timer checklist"
            />
            <div className="mt-6 grid gap-3">
              {schedulerChecklist.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Network"
              title="Connection / listener checklist"
            />
            <div className="mt-6 grid gap-3">
              {networkChecklist.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Confidence"
            title="Label how strongly the evidence supports your conclusion"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {evidenceConfidence.map((item) => (
              <div
                key={item.level}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.level}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Competition sequence"
            title="What to do from the first minute to final submission"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {competitionSequence.map((item) => (
              <div
                key={item.phase}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-cyan-300">{item.phase}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.actions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Final fictional review
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            One last evidence chain before competition
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {finalScenario.map((item) => (
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
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {finalQuestions.map((item, index) => (
              <div
                key={item.question}
                className="rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Review {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-black text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Final mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            The errors most likely to weaken your forensic answer
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {finalMistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Final competition checklist
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Before submitting any forensic answer
            </h2>

            <div className="mt-6 grid gap-3">
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

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Final self-check
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
                  <p className="mt-2 text-sm leading-6 text-slate-300">{question}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
              <p className="text-sm font-black text-emerald-200">
                Forensics track complete
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                You now have the complete 18-lesson Forensics pathway. The next
                step is wiring every lesson's Previous/Next navigation and
                enabling the Forensics hub only after one full browser sweep.
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
              href="/cyberpatriot/forensics/forensics-practice-case"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
