import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Turn a forensic question into a focused evidence plan before searching the system.",
  "Distinguish direct observation, reasonable inference, and unsupported speculation.",
  "Choose the most relevant artifact source for users, files, times, processes, services, network activity, and browser evidence.",
  "Preserve context such as paths, timestamps, account names, hashes, event IDs, and neighboring records.",
  "Corroborate important conclusions with a second source when the evidence allows it.",
  "Write concise competition answers that include exactly the fact requested and the evidence supporting it.",
];

const questionTypes = [
  {
    title: "Who?",
    prompt:
      "Which user account, administrator, process owner, sender, recipient, or logged-in identity is relevant?",
    likelySources:
      "Authentication logs, account databases, file ownership, process ownership, browser profiles, email metadata.",
  },
  {
    title: "What?",
    prompt:
      "Which file, process, service, event, command, configuration, or artifact is being asked about?",
    likelySources:
      "Filesystem, hashes, process lists, services, logs, startup locations, application records.",
  },
  {
    title: "When?",
    prompt:
      "What time did an event, login, file change, download, startup, or connection occur?",
    likelySources:
      "File timestamps, event logs, journal entries, browser history, scheduler history, network logs.",
  },
  {
    title: "Where?",
    prompt:
      "Which path, host, interface, directory, profile, network address, or storage location is involved?",
    likelySources:
      "Filesystem paths, hostnames, log source fields, IP addresses, browser downloads, configuration files.",
  },
  {
    title: "How?",
    prompt:
      "Which process, service, scheduled task, account action, browser event, or network connection explains the activity?",
    likelySources:
      "Process evidence, service logs, task scheduler, cron, authentication, browser artifacts, connection records.",
  },
  {
    title: "Sequence?",
    prompt:
      "What happened first, next, and last across multiple artifacts?",
    likelySources:
      "Cross-source timeline combining logs, files, accounts, processes, browser, and network evidence.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Read the question exactly",
    description:
      "Underline the noun and verb. Decide whether the prompt asks for a file, user, time, path, process, service, address, event, or sequence.",
    output:
      "A one-sentence restatement of the fact you need to prove.",
  },
  {
    step: "02",
    title: "Identify the best primary artifact",
    description:
      "Choose the evidence source most directly connected to the question rather than opening every available file and log.",
    output:
      "One primary evidence source and one optional secondary source.",
  },
  {
    step: "03",
    title: "Collect surrounding context",
    description:
      "Record path, timestamp, user, host, event ID, process, hash, port, or nearby records that explain what the artifact means.",
    output:
      "A short evidence note, not just a copied value.",
  },
  {
    step: "04",
    title: "Corroborate",
    description:
      "Look for another independent artifact that supports or challenges the same conclusion.",
    output:
      "A second clue, or a note that corroborating evidence was not available.",
  },
  {
    step: "05",
    title: "Check competing explanations",
    description:
      "Ask whether the evidence could reasonably mean something else, especially when using filenames, timestamps, browser records, or account names.",
    output:
      "A clear confidence boundary.",
  },
  {
    step: "06",
    title: "Answer only the question",
    description:
      "Provide the requested fact and the evidence that supports it. Avoid adding a larger story unless the prompt asks for one.",
    output:
      "A concise, evidence-backed competition answer.",
  },
];

const evidenceHierarchy = [
  {
    level: "Direct evidence",
    description:
      "The artifact directly contains the requested fact.",
    example:
      "A log entry records the username and exact login time.",
  },
  {
    level: "Corroborating evidence",
    description:
      "A separate artifact independently supports the same conclusion.",
    example:
      "A browser download time aligns with a file creation time.",
  },
  {
    level: "Contextual evidence",
    description:
      "The artifact helps explain the environment but does not prove the answer by itself.",
    example:
      "The system hostname and active user profile establish where the evidence came from.",
  },
  {
    level: "Inference",
    description:
      "A conclusion is reasonable but is not stated directly in any one artifact.",
    example:
      "A process likely opened a file because the timestamps and application history align.",
  },
  {
    level: "Speculation",
    description:
      "The claim goes beyond what the evidence can support.",
    example:
      "Assuming a person intentionally performed an action merely because a file exists in their profile.",
  },
];

const primarySources = [
  {
    question:
      "Which account logged in?",
    primary:
      "Authentication logs or event records",
    secondary:
      "User profile activity, process ownership, recent file activity",
  },
  {
    question:
      "Which file was downloaded?",
    primary:
      "Browser download history",
    secondary:
      "Filesystem metadata and hash",
  },
  {
    question:
      "When was a service changed?",
    primary:
      "Service or system event logs",
    secondary:
      "Configuration timestamps, administrative logs",
  },
  {
    question:
      "Which process was listening on a port?",
    primary:
      "Process and network connection evidence",
    secondary:
      "Service configuration and logs",
  },
  {
    question:
      "What started automatically?",
    primary:
      "Startup entries, scheduled tasks, cron, service configuration",
    secondary:
      "Process history or logs",
  },
  {
    question:
      "What happened first?",
    primary:
      "Timeline built from the most reliable timestamps available",
    secondary:
      "Independent source with matching time and event context",
  },
];

const windowsSources = [
  {
    area: "Event Viewer",
    examples:
      "System, Security, Application, and specialized channels where supported.",
  },
  {
    area: "User Profiles",
    examples:
      "Desktop, Downloads, Documents, AppData, browser data, recent activity.",
  },
  {
    area: "Services & Startup",
    examples:
      "Services, Task Scheduler, startup folders, configuration references.",
  },
  {
    area: "Filesystem Metadata",
    examples:
      "Names, paths, sizes, timestamps, ownership, permissions, hashes.",
  },
  {
    area: "Network State",
    examples:
      "Listeners, active connections, local and remote addresses, process ownership.",
  },
  {
    area: "Application Artifacts",
    examples:
      "Browser records, application logs, document metadata, email metadata.",
  },
];

const linuxSources = [
  {
    area: "Authentication Logs",
    examples:
      "Login, sudo, SSH, and account activity depending on distribution and logging setup.",
  },
  {
    area: "Journal",
    examples:
      "Systemd journal records for services, boots, authentication, and system events.",
  },
  {
    area: "User Home Directories",
    examples:
      "Documents, downloads, shell history, application configuration, user-owned files.",
  },
  {
    area: "Services & Startup",
    examples:
      "systemd units, enabled services, cron jobs, shell startup files.",
  },
  {
    area: "Filesystem Metadata",
    examples:
      "Paths, permissions, ownership, timestamps, hidden files, hashes.",
  },
  {
    area: "Network State",
    examples:
      "Listeners, connections, interface state, DNS configuration, process ownership.",
  },
];

const contextFields = [
  {
    field: "Path",
    why:
      "The same filename in Downloads, System32, /tmp, or /usr/bin has very different context.",
  },
  {
    field: "Timestamp type",
    why:
      "Creation, modification, access, event, and log timestamps can describe different actions.",
  },
  {
    field: "Time zone",
    why:
      "Cross-source timelines can be wrong if artifacts use different zones or formats.",
  },
  {
    field: "User",
    why:
      "Ownership, login identity, and process owner may be different concepts.",
  },
  {
    field: "Host",
    why:
      "Evidence from multiple machines must not be mixed without noting source system.",
  },
  {
    field: "Hash",
    why:
      "A hash identifies exact file content more reliably than a filename alone.",
  },
  {
    field: "Event ID or record ID",
    why:
      "Structured logs often need identifiers to explain what type of event occurred.",
  },
  {
    field: "Neighboring records",
    why:
      "Events before and after the target record often explain cause, sequence, or scope.",
  },
];

const timelineRules = [
  {
    title: "Normalize time carefully",
    text:
      "Record the original timestamp and its zone or format before converting anything.",
  },
  {
    title: "Do not overread file times",
    text:
      "File creation or modification times can be changed by copying, extraction, restoration, or application behavior.",
  },
  {
    title: "Logs may roll over",
    text:
      "Absence of an older event does not prove the event never occurred.",
  },
  {
    title: "Clock drift can exist",
    text:
      "Different systems can disagree slightly if time synchronization is imperfect.",
  },
  {
    title: "Sequence matters more than one timestamp",
    text:
      "Several agreeing events are stronger than one isolated timestamp.",
  },
  {
    title: "Record uncertainty",
    text:
      "If two sources conflict, document the difference instead of silently choosing one.",
  },
];

const preservationRules = [
  {
    action: "Do not delete the suspicious file",
    reason:
      "Its path, hash, metadata, or contents may be needed for later questions.",
  },
  {
    action: "Do not clear logs",
    reason:
      "Authentication, service, system, and application events can be the only record of an action.",
  },
  {
    action: "Do not restart services casually",
    reason:
      "A restart can change timestamps, process IDs, memory state, and log context.",
  },
  {
    action: "Do not rename evidence casually",
    reason:
      "The original path and filename may be part of the answer.",
  },
  {
    action: "Do not execute unknown content",
    reason:
      "Investigation should not create new activity or expose the lab system unnecessarily.",
  },
  {
    action: "Do not overwrite original notes",
    reason:
      "Keep observations, interpretation, and later corrections distinguishable.",
  },
];

const noteTemplate = [
  {
    field: "Question",
    example:
      "Which user downloaded archive.zip?",
  },
  {
    field: "Primary artifact",
    example:
      "Browser download history for the relevant profile.",
  },
  {
    field: "Observed fact",
    example:
      "archive.zip appears in the download record at 14:08.",
  },
  {
    field: "Context",
    example:
      "Record belongs to profile student1 and points to Downloads\\archive.zip.",
  },
  {
    field: "Corroboration",
    example:
      "Filesystem creation time is near 14:08 and the file hash matches the evidence set.",
  },
  {
    field: "Answer",
    example:
      "student1, supported by the browser record and matching file evidence.",
  },
];

const confidenceLevels = [
  {
    level: "High confidence",
    criteria:
      "The requested fact appears directly in a reliable artifact and is supported by another source.",
  },
  {
    level: "Moderate confidence",
    criteria:
      "The primary artifact supports the conclusion but corroboration is limited or indirect.",
  },
  {
    level: "Low confidence",
    criteria:
      "The conclusion depends heavily on inference, ambiguous metadata, or incomplete logs.",
  },
  {
    level: "Insufficient evidence",
    criteria:
      "The available artifacts do not support a responsible answer yet.",
  },
];

const competitionMistakes = [
  {
    mistake:
      "Searching everything before reading the question",
    impact:
      "Wastes time and increases the chance of being distracted by irrelevant artifacts.",
  },
  {
    mistake:
      "Treating a filename as proof",
    impact:
      "Names can be changed, misleading, duplicated, or unrelated to actual content.",
  },
  {
    mistake:
      "Assuming the owner performed the action",
    impact:
      "File ownership and user intent are not the same thing.",
  },
  {
    mistake:
      "Ignoring neighboring log events",
    impact:
      "The target event may make sense only when viewed with the entries before and after it.",
  },
  {
    mistake:
      "Copying a timestamp without its time zone",
    impact:
      "Cross-source timeline order can become incorrect.",
  },
  {
    mistake:
      "Deleting or fixing evidence too early",
    impact:
      "A later forensic question may depend on the artifact you changed.",
  },
  {
    mistake:
      "Writing a long story instead of the requested fact",
    impact:
      "Extra unsupported claims make an otherwise correct answer weaker.",
  },
  {
    mistake:
      "Confusing correlation with causation",
    impact:
      "Two events occurring near each other does not automatically prove one caused the other.",
  },
];

const reasoningCases = [
  {
    finding:
      "A suspicious archive exists in a user's Downloads folder",
    weak:
      "The user definitely downloaded and intentionally used the archive.",
    better:
      "The file exists in that profile. Check browser download records, file metadata, hash, and nearby user activity before making a stronger conclusion.",
  },
  {
    finding:
      "A process name looks unfamiliar",
    weak:
      "Mark it malicious immediately.",
    better:
      "Record the process name, path, owner, parent, start time, hash where available, and related service or startup evidence.",
  },
  {
    finding:
      "A login event appears at 09:14",
    weak:
      "Assume the account owner was physically at the keyboard.",
    better:
      "The event shows authentication activity for that account. Additional evidence would be needed to claim who physically initiated it.",
  },
  {
    finding:
      "A file modification time matches a browser download time",
    weak:
      "The browser definitely modified the file.",
    better:
      "The timestamps align and support a possible relationship, but corroborate with path, browser record, and file creation context.",
  },
  {
    finding:
      "A network connection uses an unusual remote port",
    weak:
      "The traffic is malicious because the port is uncommon.",
    better:
      "Record the process, remote address, protocol, port, timestamp, and whether the connection matches an expected service.",
  },
  {
    finding:
      "An administrator account was created recently",
    weak:
      "Delete it immediately before answering the forensic question.",
    better:
      "Preserve the account evidence, identify who or what created it, record timing and privilege, answer the forensic question, then harden separately if required.",
  },
];

const practicePrompts = [
  {
    prompt:
      "Which user downloaded the file research-notes.zip?",
    firstSource:
      "Browser download history for each user profile.",
    supportingSource:
      "File path, ownership, creation time, and hash.",
  },
  {
    prompt:
      "At what time did the service stop?",
    firstSource:
      "Service or system event log.",
    supportingSource:
      "Application log or adjacent service events.",
  },
  {
    prompt:
      "Which process was listening on TCP port 8080?",
    firstSource:
      "Network listener and process mapping.",
    supportingSource:
      "Service configuration, process path, or startup evidence.",
  },
  {
    prompt:
      "Which account performed an administrative action?",
    firstSource:
      "Authentication and administrative logs.",
    supportingSource:
      "Process owner, command history, or related system event where available.",
  },
  {
    prompt:
      "Which event happened first?",
    firstSource:
      "Normalize timestamps from the directly relevant artifacts.",
    supportingSource:
      "Independent logs or file metadata that confirm sequence.",
  },
  {
    prompt:
      "Was the downloaded file later opened?",
    firstSource:
      "Application or recent-file evidence if available.",
    supportingSource:
      "Process timeline, document history, or related logs.",
  },
];

const fictionalCase = [
  {
    time: "14:05",
    source: "Authentication log",
    evidence:
      "User trainee1 begins an interactive session on CP-WS-07.",
  },
  {
    time: "14:08",
    source: "Browser download record",
    evidence:
      "archive.zip is recorded as a download into the trainee1 Downloads folder.",
  },
  {
    time: "14:08",
    source: "Filesystem metadata",
    evidence:
      "archive.zip appears in the Downloads directory with a matching creation time.",
  },
  {
    time: "14:11",
    source: "Application history",
    evidence:
      "An archive utility starts under trainee1.",
  },
  {
    time: "14:13",
    source: "Filesystem metadata",
    evidence:
      "notes.txt appears in a new extracted folder.",
  },
  {
    time: "14:16",
    source: "Network connection record",
    evidence:
      "A process owned by trainee1 opens a connection to a fictional lab server.",
  },
];

const caseQuestions = [
  {
    question:
      "Which account was active before the download?",
    answer:
      "trainee1, based on the authentication record at 14:05.",
  },
  {
    question:
      "What artifact most directly shows the file was downloaded?",
    answer:
      "The browser download record at 14:08.",
  },
  {
    question:
      "What supports the browser record?",
    answer:
      "Filesystem metadata shows archive.zip appearing in the same profile at approximately the same time.",
  },
  {
    question:
      "Can we prove why trainee1 downloaded the archive?",
    answer:
      "No. The evidence supports activity and sequence, not motive.",
  },
  {
    question:
      "What additional evidence would strengthen the claim that the archive was opened?",
    answer:
      "Application history, recent-file evidence, process records, or extraction-related filesystem changes.",
  },
  {
    question:
      "What should be preserved before any cleanup?",
    answer:
      "The archive, metadata, relevant logs, browser record, extracted files, process evidence, and network record.",
  },
];

const finalChecklist = [
  "I restate the forensic question before searching.",
  "I choose a primary artifact instead of opening everything.",
  "I record path, time, user, host, and other relevant context.",
  "I distinguish observation from inference.",
  "I look for a second source when the conclusion matters.",
  "I preserve evidence before changing or deleting anything.",
  "I do not execute unknown content simply to investigate it.",
  "I account for timestamp type and time zone.",
  "I avoid treating filename, ownership, or location as proof of intent.",
  "I keep my answer scoped to exactly what the question asks.",
  "I state when evidence is incomplete or ambiguous.",
  "I keep a short evidence note that another teammate could follow.",
];

const reflection = [
  "Why is reading the forensic question carefully more important than opening every available log?",
  "What is the difference between direct evidence and corroborating evidence?",
  "Why can a file in a user's profile fail to prove that the user intentionally created or used it?",
  "Why should timestamps be recorded with their type and time zone?",
  "What evidence would you preserve before changing a suspicious service or scheduled task?",
  "When should you answer that the evidence is insufficient instead of guessing?",
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

export default function ForensicsCompetitionWorkflowPage() {
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

          <Link
            href="/cyberpatriot/forensics/evidence-preservation-documentation"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Next Lesson &rarr;
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Forensics · Lesson 01
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Forensics Competition Workflow
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how to turn a forensic prompt into a focused evidence
                search, preserve useful context, corroborate important facts,
                and produce a concise answer that says no more than the evidence
                can support.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The goal is not to inspect everything. The goal is to find the
                right evidence for the exact question and explain why it answers
                that question.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Workflow stages</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Question types</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Evidence principle</span>
                  <span className="font-bold text-white">Corroborate</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
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
            title="Answer the question from evidence, not intuition"
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
              Every forensic question should become an evidence plan
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Before searching, decide what fact must be proven and which
              artifact is most likely to contain it. This keeps the investigation
              focused and reduces unsupported conclusions.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
              Safety boundary
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve evidence before hardening
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              If a forensic question concerns a suspicious file, process,
              account, service, task, or connection, record the evidence before
              deleting, stopping, disabling, or renaming it.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Question types"
            title="Identify what the prompt is really asking for"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {questionTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.prompt}
                </p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    Likely sources
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.likelySources}
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
            label="Competition workflow"
            title="Move from prompt to defensible answer"
          />

          <div className="mt-8 grid gap-5">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <div className="grid gap-5 lg:grid-cols-[0.15fr_0.85fr_1.2fr_0.8fr]">
                  <span className="font-black text-cyan-300">{item.step}</span>
                  <h3 className="text-lg font-black text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Output
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.output}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Evidence hierarchy"
            title="Know how strong your conclusion really is"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {evidenceHierarchy.map((item) => (
              <div
                key={item.level}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.level}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-3">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Example
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.example}
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
            label="Question-to-source map"
            title="Start with the artifact most likely to answer directly"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {primarySources.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.question}
                </h3>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Primary
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.primary}
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Corroborate with
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.secondary}
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
              label="Windows evidence"
              title="Common places to look"
            />
            <div className="mt-6 grid gap-3">
              {windowsSources.map((item) => (
                <div
                  key={item.area}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.area}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.examples}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Linux evidence"
              title="Common places to look"
            />
            <div className="mt-6 grid gap-3">
              {linuxSources.map((item) => (
                <div
                  key={item.area}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.area}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.examples}
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
            label="Context fields"
            title="Never copy one value without recording what gives it meaning"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {contextFields.map((item) => (
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
            label="Timeline discipline"
            title="Time is powerful evidence, but only when interpreted carefully"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {timelineRules.map((item) => (
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
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Evidence preservation
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Do not destroy the artifact you still need to understand
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {preservationRules.map((item) => (
              <div
                key={item.action}
                className="rounded-2xl border border-yellow-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.action}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Evidence notes"
            title="Write notes another teammate could follow"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {noteTemplate.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.field}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Confidence"
            title="Say how strong the evidence actually is"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {confidenceLevels.map((item) => (
              <div
                key={item.level}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.level}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.criteria}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Competition mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Habits that produce weak forensic answers
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {competitionMistakes.map((item) => (
              <div
                key={item.mistake}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.mistake}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Evidence-based reasoning"
            title="Separate what you observed from what you think happened"
          />

          <div className="mt-8 grid gap-5">
            {reasoningCases.map((item) => (
              <div
                key={item.finding}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-black text-white">
                  {item.finding}
                </h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak conclusion
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.weak}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Better conclusion
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Practice prompts"
            title="Choose the best first evidence source"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {practicePrompts.map((item) => (
              <div
                key={item.prompt}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">
                  {item.prompt}
                </h3>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Start here
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.firstSource}
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Corroborate
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.supportingSource}
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
            Fictional case lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build a conclusion from several independent artifacts
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fictionalCase.map((item) => (
              <div
                key={`${item.time}-${item.source}`}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.time}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.source}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.evidence}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {caseQuestions.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-5"
              >
                <h3 className="font-black text-white">
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
              {finalChecklist.map((item, index) => (
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
                Read the exact question, select the most relevant artifact,
                preserve context, corroborate important facts, record uncertainty,
                and answer only what the evidence supports.
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

          <Link
            href="/cyberpatriot/forensics/evidence-preservation-documentation"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Next Lesson &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
