import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  { number: "01", title: "Forensics Competition Workflow", focus: "Turn a forensic prompt into a focused evidence search and answer only from verifiable artifacts.", lab: "Work through a fictional question-to-evidence exercise." },
  { number: "02", title: "Evidence Preservation & Documentation", focus: "Preserve context, record observations, separate facts from interpretation, and avoid destroying evidence.", lab: "Create a simple evidence worksheet for a fictional workstation." },
  { number: "03", title: "Hashing & File Integrity", focus: "Use cryptographic hashes to compare files, verify integrity, and document exact file identity.", lab: "Hash a fictional file set and compare matching and changed artifacts." },
  { number: "04", title: "File Systems & Important Paths", focus: "Understand common Windows and Linux evidence locations, profiles, logs, temporary data, startup locations, and application storage.", lab: "Map likely evidence locations in fictional Windows and Linux systems." },
  { number: "05", title: "File Metadata & Timestamps", focus: "Interpret filename, size, ownership, permissions, extension, and timestamps without treating metadata as unquestionable proof.", lab: "Compare fictional file metadata and identify facts that need corroboration." },
  { number: "06", title: "Log Analysis Fundamentals", focus: "Read logs as event records, filter noise, identify useful fields, and connect timestamps, users, hosts, and actions.", lab: "Extract a short relevant sequence from a fictional mixed log set." },
  { number: "07", title: "Windows Event Logs", focus: "Navigate common Windows event channels and correlate authentication, service, and system evidence.", lab: "Review a fictional Windows event timeline." },
  { number: "08", title: "Linux Logs & Journal", focus: "Review Linux authentication, service, system, and administrative evidence using common logs and journal-style records.", lab: "Build a timeline from fictional Linux logs." },
  { number: "09", title: "User Accounts & Authentication Evidence", focus: "Review users, groups, logins, failed authentication, privilege use, and account changes without assuming unusual means malicious.", lab: "Compare expected and observed account activity." },
  { number: "10", title: "Processes, Services & Startup Evidence", focus: "Use process, service, startup, and configuration evidence to understand what was running and what may start automatically.", lab: "Classify a fictional process and service inventory." },
  { number: "11", title: "Scheduled Tasks, Cron & Persistence Clues", focus: "Review scheduled execution and startup persistence locations while preserving required automation.", lab: "Investigate a fictional scheduled-task and cron evidence set." },
  { number: "12", title: "Network Connections & Listening Services", focus: "Interpret local and remote addresses, ports, listeners, active connections, and process ownership in context.", lab: "Correlate fictional connection records with processes and required services." },
  { number: "13", title: "Browser & Download Artifacts", focus: "Reason about browser history, downloads, filenames, and timestamps without overclaiming user intent.", lab: "Answer questions from a fictional browser and download history dataset." },
  { number: "14", title: "Email, Documents & Suspicious File Triage", focus: "Inspect sender, recipient, subject, attachment, filename, extension, metadata, and hashes while keeping analysis non-executing.", lab: "Triage a fictional email and document evidence package." },
  { number: "15", title: "Archives, Hidden Files & Alternate Storage Awareness", focus: "Recognize compressed archives, hidden items, unusual extensions, and alternate storage locations without treating concealment alone as proof.", lab: "Inventory a fictional directory with visible, hidden, and archived evidence." },
  { number: "16", title: "Timeline Reconstruction & Correlation", focus: "Combine files, logs, authentication, processes, services, network, and browser evidence into a defensible sequence.", lab: "Construct a fictional cross-source timeline." },
  { number: "17", title: "Forensics Practice Case", focus: "Apply the full workflow to a fictional multi-source case without being told which artifact contains the answer.", lab: "Complete a competition-style case using multiple evidence sources." },
  { number: "18", title: "Forensics Final Review Checklist", focus: "Review the highest-value evidence sources, reasoning mistakes, documentation habits, and final verification steps.", lab: "Run a timed fictional final review and produce an evidence-backed answer sheet." },
];

const workflow = [
  ["01", "Read the question exactly", "Identify whether the prompt asks for a user, file, time, process, service, address, event, action, or sequence."],
  ["02", "Choose the evidence source", "Decide which artifact is most likely to answer the question instead of searching the whole system randomly."],
  ["03", "Collect context", "Record timestamps, paths, users, IDs, hashes, neighboring events, and fields that give the artifact meaning."],
  ["04", "Corroborate", "Use another source where possible so one misleading timestamp, filename, or log entry does not become the whole conclusion."],
  ["05", "Answer only what is supported", "Separate direct observation from inference and avoid adding certainty the evidence does not justify."],
];

const evidenceZones = [
  ["Files & Metadata", "Paths, names, extensions, size, ownership, permissions, timestamps, hashes, archives, hidden items."],
  ["Logs & Events", "Authentication, services, system events, application logs, administrative changes, errors, warnings."],
  ["Accounts & Privilege", "Users, groups, login history, failed logins, privilege changes, administrative actions."],
  ["Processes & Persistence", "Running processes, services, startup items, scheduled tasks, cron jobs, configuration references."],
  ["Network Evidence", "Listeners, local and remote addresses, ports, connection state, process ownership, DNS references."],
  ["User Activity Artifacts", "Browser history, downloads, documents, email metadata, recent files, application traces."],
];

const principles = [
  ["Artifact does not equal intent", "A browser entry, file, process, or account can show that something existed or occurred without proving why a person did it."],
  ["Timestamps need context", "Creation, modification, access, event, and log timestamps can represent different actions and may use different time zones."],
  ["Names can mislead", "A filename or process name is only one clue. Path, hash, parent process, owner, and surrounding evidence matter too."],
  ["Preserve before changing", "Service restarts, file deletion, account changes, and log clearing can destroy evidence needed to answer later questions."],
  ["Correlate independent sources", "Stronger conclusions usually come from multiple artifacts that agree on user, time, host, path, or action."],
  ["Keep answers scoped", "Forensic questions often ask for one exact fact. Give the fact and supporting evidence rather than a broad unsupported story."],
];

const safetyNotes = [
  "Use only CyberPatriot images, fictional evidence, lab systems, or other environments you are authorized to inspect.",
  "Do not execute unknown attachments, scripts, macros, binaries, or archived content merely to investigate them.",
  "Preserve logs and artifacts before changing services, accounts, scheduled tasks, or startup entries.",
  "Do not publish real credentials, private user data, API keys, secrets, or complete sensitive configurations.",
  "A forensic answer should be based on the provided evidence, not assumptions about a real person's motive or identity.",
];

const outcomes = [
  "Choose the right evidence source for a specific forensic question.",
  "Read Windows and Linux logs without treating every event as important.",
  "Use metadata and hashes carefully.",
  "Correlate users, files, processes, services, network activity, and browser artifacts.",
  "Recognize persistence clues without deleting evidence too early.",
  "Build a defensible timeline from multiple sources.",
  "Write concise evidence-backed competition answers.",
  "Recognize when evidence is insufficient and more corroboration is needed.",
];

const lessonRoutes: Record<string, string> = {
  "01": "/cyberpatriot/forensics/competition-workflow",
  "02": "/cyberpatriot/forensics/evidence-preservation-documentation",
  "03": "/cyberpatriot/forensics/hashing-file-integrity",
  "04": "/cyberpatriot/forensics/file-systems-important-paths",
  "05": "/cyberpatriot/forensics/file-metadata-timestamps",
  "06": "/cyberpatriot/forensics/log-analysis-fundamentals",
  "07": "/cyberpatriot/forensics/windows-event-logs",
  "08": "/cyberpatriot/forensics/linux-logs-journal",
  "09": "/cyberpatriot/forensics/user-accounts-authentication-evidence",
  "10": "/cyberpatriot/forensics/processes-services-startup-evidence",
  "11": "/cyberpatriot/forensics/scheduled-tasks-cron-persistence-clues",
  "12": "/cyberpatriot/forensics/network-connections-listening-services",
  "13": "/cyberpatriot/forensics/browser-download-artifacts",
  "14": "/cyberpatriot/forensics/email-documents-suspicious-file-triage",
  "15": "/cyberpatriot/forensics/archives-hidden-files-alternate-storage-awareness",
  "16": "/cyberpatriot/forensics/timeline-reconstruction-correlation",
  "17": "/cyberpatriot/forensics/forensics-practice-case",
  "18": "/cyberpatriot/forensics/final-review-checklist",
};
export default function ForensicsHubPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/cyberpatriot"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            &larr; CyberPatriot Hub
          </Link>
          <div className="rounded-full border border-slate-800 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-500">
            18-Lesson Forensics Pathway
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                CyberPatriot Training Hub
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Forensics
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how to answer forensic questions from evidence rather than
                guesses. Build skill with files, metadata, hashes, logs, users,
                processes, services, persistence, network activity, browser
                artifacts, and timeline reconstruction.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This pathway is designed for defensive CyberPatriot practice in
                fictional or authorized environments. It teaches how to find,
                preserve, correlate, and explain evidence without live-round answers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Pathway Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex justify-between gap-6 border-b border-slate-800 pb-3"><span>Lessons</span><span className="font-bold text-white">18</span></div>
                <div className="flex justify-between gap-6 border-b border-slate-800 pb-3"><span>Systems</span><span className="font-bold text-white">Windows + Linux</span></div>
                <div className="flex justify-between gap-6 border-b border-slate-800 pb-3"><span>Practice style</span><span className="font-bold text-white">Evidence-driven</span></div>
                <div className="flex justify-between gap-6"><span>Final goal</span><span className="font-bold text-white">Defensible answers</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Main question</p>
            <h2 className="mt-3 text-3xl font-black text-white">What does the evidence actually support?</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Identify the exact question, find the most relevant evidence,
              preserve context, corroborate where possible, and state only the
              conclusion the artifacts justify.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">Safety boundary</p>
            <h2 className="mt-3 text-3xl font-black text-white">Inspect, do not execute</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Unknown files, attachments, scripts, macros, and binaries should
              not be executed simply to investigate them. Focus on safe evidence review.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Forensics workflow</p>
          <h2 className="mt-3 text-3xl font-black text-white">Question to evidence to answer</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {workflow.map(([step, title, text]) => (
              <div key={step} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <span className="text-sm font-black text-cyan-300">{step}</span>
                <h3 className="mt-3 text-lg font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Evidence zones</p>
          <h2 className="mt-3 text-3xl font-black text-white">Know where different answers are likely to live</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {evidenceZones.map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Reasoning principles</p>
          <h2 className="mt-3 text-3xl font-black text-white">Avoid conclusions the evidence cannot support</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {principles.map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Lesson pathway</p>
          <h2 className="mt-3 text-3xl font-black text-white">Eighteen lessons from evidence basics to case reconstruction</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {lessons.map((lesson) => (
              <Link
              key={lesson.number}
              href={lessonRoutes[String(lesson.number).padStart(2, "0")] ?? "/cyberpatriot/forensics"}
              className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition hover:border-cyan-400/40 hover:bg-slate-900"
            >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-black text-cyan-300">Lesson {lesson.number}</span>
                  <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">Forensics</span>
                </div>
                <h3 className="mt-4 text-xl font-black text-white">{lesson.title}</h3>
                <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">Focus</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{lesson.focus}</p>
                </div>
                <div className="mt-3 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">Defensive lab</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{lesson.lab}</p>
                </div>
                <div className="mt-auto pt-5">
                <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3 text-center text-sm font-semibold text-cyan-200">
                  Open Lesson &rarr;
                </div>
              </div>
            </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Fictional evidence preview</p>
            <h2 className="mt-3 text-3xl font-black text-white">One artifact rarely tells the whole story</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              A training workstation contains an unexpected archive in a user's
              Downloads folder. A browser record, file metadata, hash,
              authentication events, process evidence, and connection records
              each contribute a different part of the answer.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Pathway outcome</p>
            <h2 className="mt-3 text-2xl font-black text-white">What you should be able to do</h2>
            <div className="mt-6 grid gap-3">
              {outcomes.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">Safe evidence handling</p>
          <h2 className="mt-3 text-3xl font-black text-white">Preserve what you may need later</h2>
          <div className="mt-8 grid gap-3">
            {safetyNotes.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-yellow-400/15 bg-slate-950/50 p-4">
                <span className="font-black text-yellow-200">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Start here</p>
          <h2 className="mt-3 text-3xl font-black text-white">Begin with the Forensics Competition Workflow</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            Lesson 01 will teach how to turn a forensic prompt into a focused
            evidence search without jumping directly into every file, log, and
            configuration on the system.
          </p>
          <Link
              href="/cyberpatriot/forensics/competition-workflow"
              className="mt-6 inline-flex rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Start Lesson 01 &rarr;
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
