import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mistakes = [
  {
    title: "Remediating before preserving evidence",
    what:
      "A suspicious account, service, file, process, task, or network connection is changed immediately after discovery.",
    consequence:
      "The original state can disappear, making it harder to answer forensic questions or reconstruct what happened.",
    replacement:
      "Capture the relevant logs, paths, hashes, timestamps, process details, service state, network context, and configuration before remediation.",
  },
  {
    title: "Jumping from one artifact to a conclusion",
    what:
      "A single log entry, filename, timestamp, or process is treated as enough proof for a complete story.",
    consequence:
      "The team may misclassify normal activity as suspicious or miss the real sequence of events.",
    replacement:
      "Correlate multiple artifacts and look for agreement across time, identity, process, file, service, and network evidence.",
  },
  {
    title: "Mixing observation with interpretation",
    what:
      "Notes may say an attacker created a file or a user was compromised when the evidence only proves that a file existed or an account logged on.",
    consequence:
      "The investigation becomes biased and later evidence may be interpreted to fit an unsupported theory.",
    replacement:
      "Write what was observed first, then separately record the interpretation and confidence level.",
  },
  {
    title: "Ignoring time zone and clock context",
    what:
      "Timestamps from different systems or logs are compared without checking time zone, clock skew, or format.",
    consequence:
      "Events can appear in the wrong order and the timeline may become misleading.",
    replacement:
      "Record system time, time zone, and any known clock differences before building the event sequence.",
  },
  {
    title: "Failing to hash important files",
    what:
      "A suspicious file may be inspected or moved without recording an integrity value.",
    consequence:
      "The team cannot prove whether the file changed later or reliably identify the exact artifact in notes.",
    replacement:
      "Record a SHA-256 hash when practical before making changes to important files.",
  },
  {
    title: "Deleting suspicious files too early",
    what:
      "A file is removed as soon as it looks malicious or unnecessary.",
    consequence:
      "Metadata, hashes, file type, directory context, and related artifacts may be lost.",
    replacement:
      "Record the full path, hash, size, timestamps, file type, owner, and related process or service context before removal.",
  },
  {
    title: "Ignoring parent-child process relationships",
    what:
      "A suspicious process is reviewed in isolation.",
    consequence:
      "The team may miss the launcher, persistence mechanism, script, service, or user action that explains how the process started.",
    replacement:
      "Trace parent PID, command line, executable path, user, service relationship, and related network activity.",
  },
  {
    title: "Treating successful logon as proof of normal behavior",
    what:
      "A successful authentication event is assumed to be legitimate because the credentials worked.",
    consequence:
      "Unauthorized use of a valid account can be overlooked.",
    replacement:
      "Compare the account, logon type, source, time, privilege level, and nearby activity with the mission and expected behavior.",
  },
  {
    title: "Building a timeline from one log source",
    what:
      "The investigation relies only on one event log, journal source, or application record.",
    consequence:
      "Important gaps remain and the sequence can be misunderstood.",
    replacement:
      "Correlate authentication, process, service, persistence, file, browser, and network artifacts when available.",
  },
  {
    title: "Overstating confidence",
    what:
      "The team presents a possible explanation as certain even though the evidence is incomplete.",
    consequence:
      "Wrong conclusions can drive unnecessary remediation and weaken the final answer.",
    replacement:
      "Label findings as confirmed, strongly supported, possible, or unresolved based on the evidence actually available.",
  },
];

const preserveFirst = [
  "Exact hostname and system time",
  "Time zone or clock context",
  "Full file path",
  "SHA-256 hash",
  "File size and timestamps",
  "PID and parent PID",
  "Executable path and command line",
  "Service or scheduled-task relationship",
  "Username and privilege context",
  "Listening port or remote endpoint",
  "Relevant event IDs or log lines",
  "Screenshots or exports when useful",
];

const correlationAreas = [
  {
    title: "Identity",
    examples: [
      "Who logged on?",
      "Was the account approved?",
      "Did the session have elevated privilege?",
    ],
  },
  {
    title: "Process",
    examples: [
      "What started?",
      "What was the parent?",
      "What command line or path was used?",
    ],
  },
  {
    title: "Persistence",
    examples: [
      "Was a service, task, cron job, or timer involved?",
      "Did the activity return after reboot or logon?",
    ],
  },
  {
    title: "File",
    examples: [
      "What file changed or appeared?",
      "What are the timestamps, owner, type, and hash?",
    ],
  },
  {
    title: "Network",
    examples: [
      "What listener or outbound connection existed?",
      "Which process owned it?",
    ],
  },
  {
    title: "Time",
    examples: [
      "Which events happened first?",
      "Do timestamps agree across systems and logs?",
    ],
  },
];

const confidenceLevels = [
  {
    label: "Confirmed",
    meaning:
      "Multiple artifacts directly support the finding and there is little reasonable ambiguity.",
  },
  {
    label: "Strongly supported",
    meaning:
      "The evidence aligns well, but one or more details are still inferred rather than directly observed.",
  },
  {
    label: "Possible",
    meaning:
      "Some evidence fits the theory, but other explanations remain plausible.",
  },
  {
    label: "Unresolved",
    meaning:
      "The available artifacts are not sufficient to support a reliable conclusion.",
  },
];

const badVsBetter = [
  {
    bad: "The attacker created this file.",
    better:
      "The file appeared at this path at this time. The creating process is not yet confirmed.",
  },
  {
    bad: "This login proves the user was compromised.",
    better:
      "The account logged on successfully from this source. Legitimacy still needs to be compared with expected use.",
  },
  {
    bad: "Delete the suspicious file now.",
    better:
      "Record path, hash, metadata, owner, file type, and related process or service evidence first.",
  },
  {
    bad: "The timestamp proves event A happened before event B.",
    better:
      "Confirm system clocks and time zones before ordering cross-system events.",
  },
  {
    bad: "The process is malicious because the name looks strange.",
    better:
      "Check path, parent, command line, user, service relationship, file hash, and network activity.",
  },
  {
    bad: "We know exactly what happened.",
    better:
      "State what is confirmed, what is strongly supported, and what remains unresolved.",
  },
];

const timelineSteps = [
  "Record system time and time zone.",
  "Identify the earliest reliable event.",
  "Add authentication activity.",
  "Add process and service activity.",
  "Add persistence changes.",
  "Add file and browser artifacts.",
  "Add network connections or listeners.",
  "Compare the sequence with mission context and mark gaps.",
];

const finalChecklist = [
  "Important evidence was preserved before remediation.",
  "System time and time-zone context were recorded.",
  "Important files were documented with full paths and hashes where practical.",
  "Process evidence included parent, command line, path, and user context.",
  "Service, task, cron, and timer evidence was preserved before deletion.",
  "Successful logons were reviewed in context rather than assumed legitimate.",
  "Multiple evidence sources were correlated where possible.",
  "Observation and interpretation were written separately.",
  "Timeline conclusions accounted for clock and time-zone differences.",
  "Confidence levels matched the strength of the evidence.",
  "Unresolved findings were labeled clearly instead of guessed.",
  "Forensic notes were complete enough for another teammate to continue the investigation.",
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

export default function ForensicsMistakesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/common-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Common Mistakes
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
              href="/cyberpatriot/common-mistakes/cisco-networking-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/accounts-privilege-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Common Mistakes &middot; Guide 06 &middot; Forensics
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Forensics Mistakes
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Forensics mistakes usually happen when the team acts before it
                records the evidence or becomes too confident too early.
                Preserve first, correlate multiple artifacts, and separate what
                you observed from what you think happened.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Strong forensic work protects the original state, builds a
                defensible timeline, and makes uncertainty explicit instead of
                hiding it.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Before remediation</span>
                  <span className="font-bold text-white">Preserve</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Before conclusion</span>
                  <span className="font-bold text-white">Correlate</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Timeline</span>
                  <span className="font-bold text-white">Normalize time</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Final answer</span>
                  <span className="font-bold text-white">State confidence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Forensics rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Preserve the evidence before you improve the system
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Security remediation changes the state you are trying to
            investigate. Capture the details that matter first, then contain
            or remediate only after the evidence needed for the question is
            safe.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="10 forensic mistakes"
            title="What goes wrong and the safer replacement"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {mistakes.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                    What goes wrong
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.what}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Why it hurts
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.consequence}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Stronger replacement
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.replacement}
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
            label="Preserve first"
            title="Capture context that remediation can destroy"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {preserveFirst.map((item, index) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Correlation"
            title="Build conclusions from multiple evidence dimensions"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {correlationAreas.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>

                <div className="mt-4 grid gap-2">
                  {item.examples.map((example) => (
                    <div
                      key={example}
                      className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm leading-6 text-slate-300"
                    >
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Confidence model
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Match the conclusion to the strength of the evidence
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {confidenceLevels.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
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
            label="Timeline reconstruction"
            title="Build the sequence only after time context is understood"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {timelineSteps.map((item, index) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Weak habit vs better habit
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Replace assumptions with evidence language
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {badVsBetter.map((item) => (
              <div
                key={item.bad}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                  Weak statement
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {item.bad}
                </p>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Better statement
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.better}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Forensics final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Preserve, correlate, document, and state uncertainty clearly
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalChecklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-emerald-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/common-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Common Mistakes
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
              href="/cyberpatriot/common-mistakes/cisco-networking-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/accounts-privilege-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
