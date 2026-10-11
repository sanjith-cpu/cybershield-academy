import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain why preserving original evidence matters before configuration changes or cleanup.",
  "Separate original artifacts, working copies, notes, and conclusions so the investigation remains understandable.",
  "Record enough context that a teammate can reproduce where an observation came from.",
  "Use hashes, timestamps, paths, account names, event identifiers, and source-system details consistently.",
  "Document uncertainty, conflicting evidence, and unanswered questions instead of hiding them.",
  "Build concise evidence notes that support later forensic answers and final review.",
];

const preservationPrinciples = [
  {
    title: "Preserve before changing",
    text:
      "A file, account, log, process, service, scheduled task, startup item, or network state may become evidence for a later question. Record it before you alter it.",
  },
  {
    title: "Originals are references",
    text:
      "Treat the original artifact as the reference point. If a lab permits copies, analyze the copy while keeping the original state documented.",
  },
  {
    title: "Context is part of the evidence",
    text:
      "A filename alone is weak. Path, owner, timestamp, host, event source, and surrounding records often determine what the artifact means.",
  },
  {
    title: "Notes must distinguish fact from interpretation",
    text:
      "Write what you observed separately from what you think it means. This prevents an early assumption from becoming an undocumented conclusion.",
  },
  {
    title: "Every change creates new evidence",
    text:
      "Stopping a service, resetting a password, editing a file, or rebooting can create logs and timestamps that did not exist before.",
  },
  {
    title: "Documentation is part of verification",
    text:
      "If you cannot explain where a fact came from, another teammate cannot reliably verify it.",
  },
];

const evidenceStates = [
  {
    state: "Original state",
    meaning:
      "What existed before you intentionally changed anything.",
    examples:
      "Current file path, service state, task configuration, log records, running process, user membership.",
  },
  {
    state: "Observed state",
    meaning:
      "The facts you directly recorded from the original environment.",
    examples:
      "Timestamp, hash, event ID, username, process ID, port, service startup type.",
  },
  {
    state: "Working copy",
    meaning:
      "A duplicate or exported artifact used for safe inspection when the lab allows it.",
    examples:
      "Copied text log, exported event record, copied document, screenshot, hash list.",
  },
  {
    state: "Changed state",
    meaning:
      "What exists after a deliberate defensive action.",
    examples:
      "Disabled account, stopped service, removed startup entry, updated permission, blocked port.",
  },
  {
    state: "Verified state",
    meaning:
      "Evidence that confirms the intended change occurred and required functionality still works.",
    examples:
      "New service status, new group membership, clean listener list, successful required login.",
  },
];

const noteFields = [
  {
    field: "Case or question",
    description:
      "The exact forensic prompt or issue being investigated.",
    example:
      "Which account created the scheduled task BackupCheck?",
  },
  {
    field: "Source system",
    description:
      "The hostname or lab system where the artifact was observed.",
    example:
      "CP-WIN-04",
  },
  {
    field: "Artifact source",
    description:
      "The log, path, application, configuration area, or command output used.",
    example:
      "Task Scheduler / task details",
  },
  {
    field: "Location",
    description:
      "Exact path, log channel, registry location, unit file, or other precise location.",
    example:
      "\\Microsoft\\Windows\\BackupCheck",
  },
  {
    field: "Observed value",
    description:
      "The fact you directly saw.",
    example:
      "Task runs as user labadmin at 07:30 daily.",
  },
  {
    field: "Timestamp",
    description:
      "The relevant time plus its type and zone when known.",
    example:
      "2026-10-10 07:28 EDT, task modification time",
  },
  {
    field: "Identity",
    description:
      "User, process, service, host, or application associated with the evidence.",
    example:
      "labadmin",
  },
  {
    field: "Identifier",
    description:
      "Hash, event ID, process ID, task name, service name, or record ID.",
    example:
      "SHA-256: fictional-example-hash",
  },
  {
    field: "Interpretation",
    description:
      "What the evidence may mean, clearly labeled as interpretation.",
    example:
      "The task may have been created by or for labadmin, but creator identity needs corroboration.",
  },
  {
    field: "Corroboration",
    description:
      "A second artifact that supports or challenges the conclusion.",
    example:
      "Security log shows an administrative session near the modification time.",
  },
];

const chainOfCustody = [
  {
    step: "01",
    title: "Identify",
    text:
      "Label the artifact clearly enough that there is no confusion about what was collected.",
  },
  {
    step: "02",
    title: "Record source",
    text:
      "Document the system, user profile, path, log, or application where the artifact originated.",
  },
  {
    step: "03",
    title: "Record time",
    text:
      "Note when you observed or collected it and distinguish that time from the artifact's own timestamps.",
  },
  {
    step: "04",
    title: "Protect the original",
    text:
      "Avoid editing, renaming, deleting, opening in a way that writes changes, or otherwise altering the source evidence unnecessarily.",
  },
  {
    step: "05",
    title: "Hash where useful",
    text:
      "For copied files in authorized labs, calculate and record a cryptographic hash so later comparisons can verify file identity.",
  },
  {
    step: "06",
    title: "Track analysis",
    text:
      "Record which copy or export you examined and what tools or commands produced your observations.",
  },
];

const safeActions = [
  {
    situation: "Suspicious file",
    before:
      "Record path, filename, owner, size, timestamps, and hash if appropriate.",
    avoid:
      "Deleting, renaming, moving, or executing it before the forensic question is answered.",
  },
  {
    situation: "Unexpected user account",
    before:
      "Record username, group memberships, status, profile path, and relevant authentication evidence.",
    avoid:
      "Deleting the account immediately and losing easy access to its context.",
  },
  {
    situation: "Unknown service",
    before:
      "Record service name, display name, startup type, state, executable path, account, and related logs.",
    avoid:
      "Stopping or disabling it before documenting what it was doing.",
  },
  {
    situation: "Scheduled task or cron entry",
    before:
      "Record name, command, trigger, user, path, timestamps, and whether it is enabled.",
    avoid:
      "Removing the task before preserving its configuration.",
  },
  {
    situation: "Listening network service",
    before:
      "Record protocol, local address, port, process ID, process path, owner, and expected purpose.",
    avoid:
      "Killing the process before tying the listener to a specific program.",
  },
  {
    situation: "Relevant logs",
    before:
      "Record channel, source, event ID, timestamps, user, host, neighboring entries, and export if permitted.",
    avoid:
      "Clearing logs or restarting components that may rotate or overwrite them.",
  },
];

const hashGuidance = [
  {
    title: "What a hash tells you",
    text:
      "If the same cryptographic algorithm produces the same digest for two files, the content is extremely likely to be identical.",
  },
  {
    title: "What a hash does not tell you",
    text:
      "A hash does not explain who created a file, why it exists, whether a user intended to use it, or whether it is safe.",
  },
  {
    title: "Record the algorithm",
    text:
      "A digest is incomplete documentation without the algorithm name, such as SHA-256.",
  },
  {
    title: "Hash before and after copies",
    text:
      "In authorized practice, comparing hashes can help confirm that a copied artifact matches the source content.",
  },
  {
    title: "Do not rely on filenames",
    text:
      "Two files with the same name can have different content, and the same content can appear under different names.",
  },
  {
    title: "Do not expose secrets",
    text:
      "Do not publish hashes of passwords, tokens, private keys, or other secret material from real systems.",
  },
];

const screenshots = [
  {
    good:
      "A screenshot includes the artifact, relevant path or source, visible timestamp or identifier, and enough interface context to understand where the evidence came from.",
    weak:
      "A tightly cropped screenshot shows only one value with no source or context.",
  },
  {
    good:
      "The note references the screenshot by a clear label such as F02-S03 and explains what it proves.",
    weak:
      "A folder contains many unnamed screenshots such as Screenshot1.png, Screenshot2.png, and Screenshot3.png.",
  },
  {
    good:
      "Sensitive or unrelated personal data is excluded from the capture.",
    weak:
      "The capture includes real credentials, private messages, or unrelated personal information.",
  },
  {
    good:
      "The screenshot supports the written evidence note rather than replacing it.",
    weak:
      "The team relies on memory of what the screenshot supposedly showed.",
  },
];

const timestampRules = [
  {
    title: "Observation time",
    text:
      "When you looked at or collected the artifact. This is not necessarily the time the event occurred.",
  },
  {
    title: "Artifact time",
    text:
      "The time stored in a file, log, application, task, or other source.",
  },
  {
    title: "Timestamp type",
    text:
      "Creation, modification, access, event, start, stop, login, download, or another specific kind of time.",
  },
  {
    title: "Time zone",
    text:
      "Record the zone or offset when known so evidence from different sources can be compared correctly.",
  },
  {
    title: "Clock reliability",
    text:
      "Different systems can have drift or incorrect settings, so timestamps may require corroboration.",
  },
  {
    title: "Sequence over precision",
    text:
      "When exact time is uncertain, several agreeing artifacts may still establish a reliable order of events.",
  },
];

const changeLogFields = [
  {
    field: "Time",
    example:
      "15:42 local",
  },
  {
    field: "System",
    example:
      "CP-WIN-04",
  },
  {
    field: "Change",
    example:
      "Disabled fictional unused service DemoUpdater",
  },
  {
    field: "Reason",
    example:
      "Service not required by scenario and confirmed unrelated to required applications",
  },
  {
    field: "Evidence saved",
    example:
      "Service name, executable path, startup type, account, related event IDs",
  },
  {
    field: "Verification",
    example:
      "Service stopped; required web application still reachable",
  },
  {
    field: "Performed by",
    example:
      "Team member initials",
  },
];

const distinctionExamples = [
  {
    observation:
      "File notes.zip exists at C:\\Users\\trainee\\Downloads.",
    interpretation:
      "The file may have been downloaded by the trainee profile.",
    unsupported:
      "The trainee intentionally downloaded a malicious archive.",
  },
  {
    observation:
      "Security log records a successful logon for labadmin at 09:17.",
    interpretation:
      "The account was authenticated at that time.",
    unsupported:
      "The account owner was physically sitting at the machine.",
  },
  {
    observation:
      "TCP port 8080 is listening under process ID 4312.",
    interpretation:
      "Process 4312 owns the listener at the time of observation.",
    unsupported:
      "The service is malicious because port 8080 is unusual.",
  },
  {
    observation:
      "A scheduled task launches script.ps1 every hour.",
    interpretation:
      "The task provides recurring execution of that script.",
    unsupported:
      "The task is definitely persistence created by an attacker.",
  },
  {
    observation:
      "A browser record and file creation time are both near 14:08.",
    interpretation:
      "The two artifacts may describe the same download event.",
    unsupported:
      "The browser record proves every later action involving the file.",
  },
  {
    observation:
      "The file hash changed after editing the document.",
    interpretation:
      "The file content changed.",
    unsupported:
      "The editor changed only the sentence visible on screen and nothing else.",
  },
];

const evidenceLabels = [
  {
    label: "F",
    meaning: "File or filesystem evidence",
    example: "F-01 archive.zip metadata",
  },
  {
    label: "L",
    meaning: "Log or event evidence",
    example: "L-03 authentication event",
  },
  {
    label: "A",
    meaning: "Account or identity evidence",
    example: "A-02 Administrators membership",
  },
  {
    label: "P",
    meaning: "Process or service evidence",
    example: "P-04 service executable path",
  },
  {
    label: "N",
    meaning: "Network evidence",
    example: "N-01 TCP listener mapping",
  },
  {
    label: "B",
    meaning: "Browser or user-activity evidence",
    example: "B-02 download history record",
  },
];

const practiceCase = [
  {
    id: "F-01",
    source: "Filesystem",
    fact:
      "C:\\Users\\analyst\\Downloads\\report-pack.zip exists and is 8.2 MB.",
  },
  {
    id: "F-02",
    source: "Hash record",
    fact:
      "SHA-256 was recorded for report-pack.zip before any cleanup.",
  },
  {
    id: "B-01",
    source: "Browser history",
    fact:
      "A download entry references report-pack.zip at 13:22.",
  },
  {
    id: "L-01",
    source: "Authentication log",
    fact:
      "User analyst logged in at 13:10.",
  },
  {
    id: "P-01",
    source: "Process evidence",
    fact:
      "An archive utility started under analyst at 13:24.",
  },
  {
    id: "F-03",
    source: "Filesystem",
    fact:
      "A new folder named report-pack appears at 13:25.",
  },
];

const practiceTasks = [
  {
    task:
      "Write the strongest supported answer to: Which account was active before the download?",
    expected:
      "analyst, supported by L-01.",
  },
  {
    task:
      "What evidence should be preserved before deleting report-pack.zip?",
    expected:
      "Path, size, timestamps, ownership, hash, browser record, related process evidence, and extracted-folder context.",
  },
  {
    task:
      "Can B-01 alone prove who physically initiated the download?",
    expected:
      "No. It supports activity in that browser profile but does not prove physical identity.",
  },
  {
    task:
      "Which two artifacts best support that the archive was opened or extracted?",
    expected:
      "P-01 and F-03.",
  },
  {
    task:
      "Why is F-02 valuable?",
    expected:
      "It records exact file content identity so later copies or changes can be compared.",
  },
  {
    task:
      "What should the team document before disabling a related suspicious task discovered later?",
    expected:
      "Name, command, trigger, user, path, state, timestamps, and relevant supporting logs.",
  },
];

const mistakes = [
  {
    title: "Changing first, documenting later",
    text:
      "The original state may be impossible to reconstruct after the change.",
  },
  {
    title: "Screenshots with no labels",
    text:
      "A teammate cannot tell which question the image supports or where it came from.",
  },
  {
    title: "Notes that contain only conclusions",
    text:
      "A statement such as 'malicious task found' is weaker than recording the task name, trigger, command, user, and source.",
  },
  {
    title: "Mixing evidence from multiple hosts",
    text:
      "The same username, process name, or path can exist on different machines.",
  },
  {
    title: "Ignoring timestamp type",
    text:
      "A modification time is not the same as a creation time or event time.",
  },
  {
    title: "Overwriting the original evidence file",
    text:
      "Editing a log or document used as evidence destroys the reference state.",
  },
  {
    title: "Publishing sensitive data",
    text:
      "Evidence notes should not expose real credentials, keys, tokens, or unrelated private information.",
  },
  {
    title: "Treating hashes as verdicts",
    text:
      "A hash identifies content; it does not by itself explain intent, safety, or origin.",
  },
];

const reviewChecklist = [
  "I know the exact question or issue this evidence supports.",
  "I recorded the source system.",
  "I recorded the artifact location.",
  "I recorded the relevant value and surrounding context.",
  "I labeled timestamp type and time zone when known.",
  "I preserved the original before changing anything.",
  "I used a working copy or export where appropriate and permitted.",
  "I recorded the hash algorithm when a hash was used.",
  "I separated observation from interpretation.",
  "I documented uncertainty or conflicting evidence.",
  "I tracked defensive changes separately from original observations.",
  "I can explain the evidence to another teammate without relying on memory.",
];

const reflection = [
  "Why can a defensive change make later forensic questions harder to answer?",
  "What information should accompany a screenshot so it remains useful evidence?",
  "Why should observation and interpretation be written separately?",
  "What does a matching SHA-256 hash help establish?",
  "Why is the time you collected an artifact different from the artifact's own timestamp?",
  "When is it better to write 'insufficient evidence' than to choose the most likely explanation?",
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

export default function EvidencePreservationDocumentationPage() {
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
              href="/cyberpatriot/forensics/competition-workflow"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/hashing-file-integrity"
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
                Forensics · Lesson 02
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Evidence Preservation &amp; Documentation
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how to preserve the original state of useful artifacts,
                document where evidence came from, separate observations from
                conclusions, and track defensive changes without losing the
                information needed for later forensic questions.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Strong forensic work is reproducible. Another teammate should be
                able to read your notes and understand what you observed, where
                you observed it, what changed afterward, and how confident the
                conclusion should be.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main skill</span>
                  <span className="font-bold text-white">Preserve context</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Documentation rule</span>
                  <span className="font-bold text-white">Facts first</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Integrity aid</span>
                  <span className="font-bold text-white">Hashes</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Reproducible evidence</span>
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
            title="Preserve enough evidence to explain what happened later"
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
              Evidence loses value when its context disappears
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A copied value without its path, host, timestamp type, user, log
              source, or neighboring records may be impossible to interpret
              correctly later. Preservation means keeping both the artifact and
              the information that gives it meaning.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
              Competition caution
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Hardening can destroy useful forensic state
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Removing an account, disabling a task, deleting a file, restarting
              a service, or clearing a log may erase details needed for another
              question. Record the original state first whenever it is safe and
              practical.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Preservation principles"
            title="Treat the original state as evidence"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {preservationPrinciples.map((item) => (
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
            label="Evidence states"
            title="Know which version of the system you are describing"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {evidenceStates.map((item) => (
              <div
                key={item.state}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.state}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    Examples
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.examples}
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
            label="Evidence note"
            title="Record enough information to reproduce the observation"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {noteFields.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.field}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-3">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
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
            label="Chain-of-custody mindset"
            title="Track what the artifact is, where it came from, and what happened to it"
            description="CyberPatriot practice is not a courtroom investigation, but the same disciplined habits make competition evidence more reliable and easier to verify."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {chainOfCustody.map((item) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Before you change it"
            title="Capture the evidence that a defensive action could erase"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {safeActions.map((item) => (
              <div
                key={item.situation}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.situation}
                </h3>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Record first
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.before}
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-red-200">
                    Avoid
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.avoid}
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
            label="Hashing for preservation"
            title="Use hashes to identify exact file content"
            description="Lesson 03 will go deeper into hashing. Here, focus on how hashes support preservation and documentation."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {hashGuidance.map((item) => (
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

          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <p className="text-sm font-black text-cyan-200">
              Example documentation
            </p>
            <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-slate-300">
{`Artifact: report-pack.zip
Source system: CP-WIN-04
Path: C:\\Users\\analyst\\Downloads\\report-pack.zip
Algorithm: SHA-256
Digest: <fictional training digest>
Observation time: 2026-10-10 13:31 EDT
Purpose: Verify file identity before later defensive cleanup`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Screenshots"
            title="Capture context, not just pixels"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {screenshots.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Strong evidence capture
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.good}
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                    Weak evidence capture
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.weak}
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
            label="Timestamp discipline"
            title="Document what each time actually means"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {timestampRules.map((item) => (
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
            label="Change tracking"
            title="Keep defensive changes separate from original observations"
          />

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-800">
            <table className="min-w-full divide-y divide-slate-800 text-left text-sm">
              <thead className="bg-slate-950/80 text-slate-200">
                <tr>
                  {changeLogFields.map((item) => (
                    <th key={item.field} className="px-4 py-3 font-black">
                      {item.field}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950/40 text-slate-300">
                <tr>
                  {changeLogFields.map((item) => (
                    <td key={item.field} className="px-4 py-4 align-top leading-6">
                      {item.example}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            The change log answers a different question from the evidence note.
            The evidence note records what existed. The change log records what
            your team intentionally did afterward.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Observation vs interpretation"
            title="Do not let assumptions become facts in your notes"
          />

          <div className="mt-8 grid gap-5">
            {distinctionExamples.map((item) => (
              <div
                key={item.observation}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <div className="grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                      Observation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.observation}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Reasonable interpretation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.interpretation}
                    </p>
                  </div>
                  <div className="rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Unsupported claim
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.unsupported}
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
            label="Evidence labels"
            title="Use a simple naming system so teammates can reference artifacts quickly"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {evidenceLabels.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 font-black text-cyan-300">
                    {item.label}
                  </span>
                  <h3 className="font-black text-white">{item.meaning}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Example: {item.example}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            This is only a training convention. The important part is
            consistency: every teammate should know exactly which artifact a
            note such as F-01 or L-03 refers to.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Common mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Documentation failures that weaken later answers
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
            Fictional documentation lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Preserve the case before cleanup begins
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            The evidence below comes from a fictional training workstation. Your
            goal is to organize it so a teammate can answer forensic questions
            even after later defensive changes.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {practiceCase.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black text-cyan-300">{item.id}</span>
                  <span className="rounded-full border border-slate-800 px-3 py-1 text-xs font-bold text-slate-400">
                    {item.source}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.fact}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {practiceTasks.map((item, index) => (
              <div
                key={item.task}
                className="rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Task {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-black text-white">{item.task}</h3>
                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Evidence-based answer
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.expected}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Final checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Before you consider an artifact documented
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
              Check your preservation habits
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
                Preserve original state, record source and context, hash files
                when useful, separate observation from interpretation, and log
                every defensive change that could affect later evidence.
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
              href="/cyberpatriot/forensics/competition-workflow"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/hashing-file-integrity"
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
