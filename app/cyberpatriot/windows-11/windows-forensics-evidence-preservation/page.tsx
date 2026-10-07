import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain why forensic evidence should be preserved before remediation whenever a question may depend on the original state.",
  "Distinguish observations, artifacts, timestamps, and conclusions so evidence does not get mixed with assumptions.",
  "Identify high-value Windows evidence sources such as Event Viewer, Defender history, scheduled tasks, user accounts, services, startup entries, installed software, and file metadata.",
  "Build a simple evidence timeline that connects multiple Windows artifacts.",
  "Document evidence in a repeatable way that another teammate could review later.",
  "Make defensive changes only after relevant evidence has been preserved and then verify the system state afterward.",
];

const evidencePrinciples = [
  {
    title: "Preserve before change",
    text:
      "If a file, task, account, service, or log may help answer a forensic question, record the evidence before disabling, deleting, or reconfiguring it.",
  },
  {
    title: "Facts before conclusions",
    text:
      "Write down what the evidence actually shows before deciding what it means.",
  },
  {
    title: "Use multiple sources",
    text:
      "One artifact may create a lead. Multiple independent sources make a stronger conclusion.",
  },
  {
    title: "Keep time context",
    text:
      "Timestamps become far more useful when they are compared across logs, tasks, files, Defender, accounts, and team actions.",
  },
  {
    title: "Separate team activity",
    text:
      "Your own hardening work can create events and modify timestamps, so maintain a clear change log.",
  },
  {
    title: "Preserve required functionality",
    text:
      "Evidence collection should not unnecessarily disrupt the system or required services.",
  },
];

const evidenceSources = [
  {
    title: "Event Viewer",
    text:
      "Security, System, Application, and operational logs can reveal account activity, service changes, scheduled-task activity, application failures, and system events.",
  },
  {
    title: "Microsoft Defender",
    text:
      "Protection History and Defender detections can provide file paths, timestamps, threat names, remediation actions, and investigation leads.",
  },
  {
    title: "Scheduled Tasks",
    text:
      "Task names, triggers, actions, accounts, privilege level, and last-run information can reveal automatic execution.",
  },
  {
    title: "Users and Groups",
    text:
      "Local account state, group membership, and administrator access help explain privilege changes and authorized versus unauthorized identities.",
  },
  {
    title: "Services",
    text:
      "Service name, startup mode, account, executable path, and state can connect background activity to installed software or persistence.",
  },
  {
    title: "Startup Entries",
    text:
      "Automatic logon-time execution can reveal legitimate helpers or potentially suspicious persistence.",
  },
  {
    title: "Installed Software",
    text:
      "Application name, publisher, version, install date, path, and related services or tasks can support a forensic timeline.",
  },
  {
    title: "Files and Folders",
    text:
      "File path, size, timestamps, ownership, permissions, and related application context can help explain activity.",
  },
];

const evidenceFields = [
  {
    title: "Artifact",
    text:
      "The file, account, task, event, service, application, or configuration item being examined.",
  },
  {
    title: "Source",
    text:
      "Where the evidence came from, such as Security log, Defender history, Task Scheduler, or a filesystem path.",
  },
  {
    title: "Timestamp",
    text:
      "The relevant date and time associated with creation, execution, detection, modification, logon, or another event.",
  },
  {
    title: "Identity",
    text:
      "The user, service account, computer, or security principal connected to the artifact.",
  },
  {
    title: "Location",
    text:
      "The file path, task path, service path, log name, or other location that helps another reviewer find the same evidence.",
  },
  {
    title: "Observed fact",
    text:
      "A plain statement of what the system shows without interpretation.",
  },
  {
    title: "Interpretation",
    text:
      "What the team thinks the evidence may mean, clearly separated from the raw fact.",
  },
  {
    title: "Verification",
    text:
      "Another source or test that supports, contradicts, or refines the interpretation.",
  },
];

const observationExamples = [
  {
    observation:
      "Task Scheduler shows a task named UserSync triggered at logon and last run at 10:42 PM.",
    badConclusion:
      "UserSync is malware.",
    betterConclusion:
      "UserSync is an unknown logon-triggered task that ran at 10:42 PM and requires correlation with its action, account, file path, and logs.",
  },
  {
    observation:
      "Defender quarantined an executable from a Downloads folder.",
    badConclusion:
      "The user intentionally downloaded malware.",
    betterConclusion:
      "Defender detected and quarantined an executable in Downloads; user intent is not established by this evidence alone.",
  },
  {
    observation:
      "An unfamiliar account is in Administrators.",
    badConclusion:
      "The account is unauthorized.",
    betterConclusion:
      "The account has administrative privilege and must be compared with scenario authorization and account-change evidence.",
  },
];

const timelineSources = [
  {
    title: "Account timeline",
    examples:
      "Account creation, enable/disable state, group membership changes, successful or failed sign-ins.",
  },
  {
    title: "Execution timeline",
    examples:
      "Scheduled-task run time, service start, startup entry execution, application launch evidence.",
  },
  {
    title: "File timeline",
    examples:
      "Created, modified, accessed, downloaded, quarantined, moved, or removed artifacts where timestamps are available.",
  },
  {
    title: "Security timeline",
    examples:
      "Defender detection, firewall change, policy change, account lockout, authentication activity.",
  },
  {
    title: "System timeline",
    examples:
      "Startup, shutdown, update, service failure, driver issue, application crash.",
  },
];

const collectionTools = [
  {
    title: "Event Viewer",
    command: "eventvwr.msc",
    text:
      "Review and filter relevant logs before remediation.",
  },
  {
    title: "Task Scheduler",
    command: "taskschd.msc",
    text:
      "Capture task trigger, action, user context, and history.",
  },
  {
    title: "Services",
    command: "services.msc",
    text:
      "Review service state, startup mode, account, and dependencies.",
  },
  {
    title: "Windows Security",
    command: "Windows Security → Virus & threat protection → Protection history",
    text:
      "Review Defender detections and actions before clearing or altering related evidence.",
  },
];

const powershellExamples = [
  {
    label: "Recent Security events",
    command:
      "Get-WinEvent -LogName Security -MaxEvents 100 | Select-Object TimeCreated, Id, ProviderName, Message",
    purpose:
      "Creates a read-only recent Security log snapshot when permissions allow.",
  },
  {
    label: "Scheduled task inventory",
    command:
      "Get-ScheduledTask | Select-Object TaskPath, TaskName, State",
    purpose:
      "Provides a broad view of automatic task-based execution.",
  },
  {
    label: "Service inventory",
    command:
      'Get-CimInstance Win32_Service | Select-Object Name, State, StartMode, StartName, PathName',
    purpose:
      "Captures service state, startup mode, account, and executable path.",
  },
  {
    label: "Administrator membership",
    command:
      'Get-LocalGroupMember -Group "Administrators"',
    purpose:
      "Captures current local administrative membership for comparison with scenario authorization.",
  },
  {
    label: "Defender detections",
    command:
      "Get-MpThreatDetection",
    purpose:
      "Reviews Defender detection records when available in the authorized environment.",
  },
  {
    label: "File metadata",
    command:
      'Get-Item "C:\\Practice\\Evidence\\sample.exe" | Select-Object FullName, Length, CreationTime, LastWriteTime, LastAccessTime',
    purpose:
      "Shows basic filesystem metadata for a known practice artifact.",
  },
];

const documentationTemplate = [
  {
    field: "Question",
    example:
      "When did the unknown administrator appear, and what activity occurred around that time?",
  },
  {
    field: "Known anchor",
    example:
      "Unknown scheduled task last ran at 10:42 PM.",
  },
  {
    field: "Evidence source",
    example:
      "Task Scheduler, Security log, local Administrators group, Defender history.",
  },
  {
    field: "Observed fact",
    example:
      "UserSync ran at 10:42 PM under account TempAdmin.",
  },
  {
    field: "Interpretation",
    example:
      "The task may be related to the administrator account, but more evidence is needed.",
  },
  {
    field: "Corroboration",
    example:
      "Security log shows TempAdmin authenticated shortly before the task run.",
  },
  {
    field: "Action taken",
    example:
      "Evidence preserved; task disabled after review.",
  },
  {
    field: "Verification",
    example:
      "Task remains disabled, required services still work, and no authorized account lost access.",
  },
];

const preservationQuestions = [
  "Could this artifact answer a forensic question?",
  "Could changing it alter timestamps or logs?",
  "Can I record the state before remediation?",
  "Do I know the exact source and location of the evidence?",
  "Can another teammate reproduce what I saw?",
  "Is there another evidence source that supports the same conclusion?",
  "Will this change affect a required service or application?",
  "Have I separated my own team actions from pre-existing activity?",
  "Do I need to export, screenshot, or write down the evidence before continuing?",
  "What verification will confirm the system remains functional afterward?",
];

const decisionCases = [
  {
    title: "Unknown admin account",
    evidence:
      "The local Administrators group contains an unfamiliar account that the scenario does not list.",
    reasoning:
      "The account is a high-priority finding, but removing it immediately may destroy the chance to understand when or how it appeared.",
    response:
      "Record membership, inspect account properties, correlate account-change and logon evidence, then remove privilege or disable the account after preservation if it is confirmed unauthorized.",
  },
  {
    title: "Defender quarantined a suspicious executable",
    evidence:
      "Protection History shows a quarantined executable and a timestamp matching the forensic window.",
    reasoning:
      "Deleting history or related artifacts too early could erase useful context.",
    response:
      "Record detection details, file path, timestamp, action, and related user or process evidence before cleanup.",
  },
  {
    title: "Unknown scheduled task",
    evidence:
      "A task runs at every logon from an unusual user-profile path.",
    reasoning:
      "The task may represent persistence, but the strongest conclusion requires action-path, account, timing, and log correlation.",
    response:
      "Document task properties and history, correlate with file and event evidence, then disable after preservation if justified.",
  },
  {
    title: "Suspicious service",
    evidence:
      "An automatic service runs from an unexpected path using a privileged account.",
    reasoning:
      "The path and privilege are suspicious signals, but the service may still belong to installed software.",
    response:
      "Capture service metadata, application ownership, executable path, and relevant events before changing the service.",
  },
];

const evidenceQuality = [
  {
    title: "Direct observation",
    text:
      "You personally viewed the artifact in Windows or through a read-only command.",
  },
  {
    title: "Reproducible",
    text:
      "Another teammate can follow the same steps and see the same evidence.",
  },
  {
    title: "Corroborated",
    text:
      "A second independent source supports the same interpretation.",
  },
  {
    title: "Time-linked",
    text:
      "The timestamps align with the suspected or known activity window.",
  },
  {
    title: "Context-aware",
    text:
      "The evidence is interpreted against scenario requirements and known team actions.",
  },
  {
    title: "Preserved before change",
    text:
      "The original state was documented before remediation modified it.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional scenario",
    text:
      "Morgan is the only authorized administrator. RDP is required. The system contains an unknown administrator, an unknown logon task, and one Defender detection from the same evening.",
  },
  {
    number: "02",
    title: "Define the forensic question",
    text:
      "Determine whether the unknown account, task, and Defender detection are connected in time and context.",
  },
  {
    number: "03",
    title: "Collect evidence",
    text:
      "Record administrator membership, task properties and last-run time, Defender detection details, and relevant Security/System events.",
  },
  {
    number: "04",
    title: "Build a timeline",
    text:
      "Place only supported facts in chronological order and label any interpretation separately from observations.",
  },
  {
    number: "05",
    title: "Corroborate",
    text:
      "Compare the account, task, detection, file path, and event evidence. Note which points are confirmed and which remain uncertain.",
  },
  {
    number: "06",
    title: "Remediate and verify",
    text:
      "After evidence is preserved, remove the confirmed unnecessary privilege or disable the suspicious task, then verify RDP, Defender, firewall, and required services still function.",
  },
];

const mistakes = [
  {
    title: "Remediating before collecting evidence",
    text:
      "The original state may disappear once a task, account, file, or service is changed.",
  },
  {
    title: "Writing conclusions as facts",
    text:
      "A suspicious artifact is not proof of intent, ownership, or compromise.",
  },
  {
    title: "Using only one source",
    text:
      "One artifact may be misleading or incomplete. Correlation improves confidence.",
  },
  {
    title: "Ignoring your own team actions",
    text:
      "Hardening changes create events and timestamps that can contaminate a timeline.",
  },
  {
    title: "Clearing logs",
    text:
      "Log cleanup can destroy evidence needed for later troubleshooting or forensic questions.",
  },
  {
    title: "Breaking required functionality during collection",
    text:
      "Evidence preservation should not unnecessarily disrupt required services or access.",
  },
];

const verification = [
  "Confirm all relevant evidence was recorded before remediation.",
  "Confirm observations and interpretations are written separately.",
  "Confirm timestamps are documented consistently.",
  "Confirm at least two evidence sources support important conclusions where possible.",
  "Confirm team-generated changes are identified separately.",
  "Confirm the evidence source and location are documented.",
  "Confirm required services still work after remediation.",
  "Confirm authorized users still have required access.",
  "Confirm Defender and firewall remain healthy.",
  "Confirm suspicious or unauthorized items are in the intended final state.",
  "Document unresolved questions instead of inventing an answer.",
];

const checklist = [
  "Define the exact forensic question.",
  "Identify likely evidence sources.",
  "Record evidence before changing the system.",
  "Capture timestamps, paths, users, providers, and task/service names.",
  "Separate observations from conclusions.",
  "Correlate multiple sources.",
  "Maintain a team change log.",
  "Do not clear logs during active investigation.",
  "Preserve suspicious task, service, account, and Defender details.",
  "Remediate only after evidence collection.",
  "Verify required functionality after remediation.",
  "Document what remains unknown.",
];

const reflection = [
  "Why should evidence be preserved before remediation?",
  "What is the difference between an observed fact and an interpretation?",
  "Why is correlation stronger than relying on one artifact?",
  "How can your team's own changes affect a forensic timeline?",
  "What evidence sources would you compare for an unknown scheduled task?",
  "What should be verified after remediation is complete?",
];

export default function WindowsForensicsEvidencePreservationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows 11
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11/powershell-defensive-administration" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/final-review-checklist" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows 11 · Lesson 15
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows Forensics &amp; Evidence Preservation
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Preserve the original Windows state before remediation, connect
                multiple evidence sources, and build defensible timelines from
                facts instead of assumptions.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Good forensic work is careful, reproducible, and evidence-aware.
                You should be able to explain what you observed, where it came
                from, when it happened, what it may mean, and what remains
                uncertain.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Evidence principles</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Evidence sources</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main skill</span>
                  <span className="font-bold text-white">Correlation</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Defensible findings</span>
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
            What this lesson should help you do
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((item, index) => (
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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core concept
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve first, remediate second
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              If the original state matters to a forensic question, document it
              before disabling, deleting, uninstalling, or changing anything.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Evidence warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Your own actions become part of the timeline
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Hardening, reboots, scans, updates, logons, and administrative
              changes can all create new evidence.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Keep a change log so team activity is not confused with the
              original state.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Evidence principles
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Six habits that protect forensic value
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {evidencePrinciples.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Windows evidence map
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Eight places to look for useful evidence
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {evidenceSources.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Evidence record
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Eight fields that make findings reproducible
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {evidenceFields.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Observation vs conclusion
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Say only what the evidence supports
          </h2>
          <div className="mt-8 grid gap-5">
            {observationExamples.map((item, index) => (
              <div
                key={item.observation}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <p className="text-sm font-black text-yellow-300">
                  Example {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  <span className="font-bold text-white">Observation: </span>
                  {item.observation}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-200">
                  <span className="font-bold">Unsupported conclusion: </span>
                  {item.badConclusion}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-200">
                  <span className="font-bold">Better conclusion: </span>
                  {item.betterConclusion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Timeline construction
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Connect activity across evidence types
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {timelineSources.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.examples}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Windows collection tools
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Inspect before you remediate
            </h2>
            <div className="mt-5 grid gap-3">
              {collectionTools.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              PowerShell collection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Capture evidence with read-only queries
            </h2>
            <div className="mt-5 grid gap-3">
              {powershellExamples.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Evidence documentation template
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A simple structure the whole team can use
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {documentationTemplate.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.field}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Before remediation
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Ten preservation questions
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {preservationQuestions.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-yellow-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Evidence-aware decisions in context
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {decisionCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.evidence}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.reasoning}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.response}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Evidence quality
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          What makes a conclusion stronger
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {evidenceQuality.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Fictional defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Correlate an unknown account, task, and Defender detection
          </h2>
          <div className="mt-8 grid gap-4">
            {labSteps.map((item) => (
              <div
                key={item.number}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.24fr_1fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                    Step {item.number}
                  </p>
                  <h3 className="mt-2 font-black text-white">{item.title}</h3>
                </div>
                <p className="text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Common mistakes
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Forensic habits that weaken conclusions
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mistakes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Test your forensic reasoning
            </h2>
            <div className="mt-5 grid gap-3">
              {reflection.map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm the evidence and the final system state
            </h2>
            <div className="mt-5 grid gap-3">
              {verification.map((item, index) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Competition checklist
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Before leaving Windows Forensics
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Final Windows lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Windows 11 Final Review Checklist
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, combine identity, protection, system, access, evidence,
                and verification into one final competition-ready Windows review.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-11/final-review-checklist"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 16 →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows 11
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11/powershell-defensive-administration" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/final-review-checklist" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
