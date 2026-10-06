import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain why forensic questions should be reviewed early in the competition rather than saved for the end.",
  "Separate evidence collection from assumptions so answers remain supported by facts.",
  "Identify common evidence sources such as logs, files, accounts, processes, timestamps, and configuration artifacts.",
  "Protect evidence from accidental deletion, overwriting, or configuration changes during system hardening.",
  "Use a structured investigation workflow that keeps forensic work from stalling the rest of the team.",
  "Build concise, evidence-supported answers and document the reasoning behind them.",
];

const workflow = [
  {
    number: "01",
    title: "Read the question",
    text: "Identify exactly what the prompt is asking: a user, event, file, timestamp, process, configuration, cause, or other fact.",
  },
  {
    number: "02",
    title: "Define the evidence target",
    text: "Decide what kind of artifact is most likely to answer the question before searching randomly.",
  },
  {
    number: "03",
    title: "Preserve relevant evidence",
    text: "Avoid deleting, moving, modifying, clearing, or reconfiguring evidence-rich areas until the needed information is captured.",
  },
  {
    number: "04",
    title: "Collect supporting facts",
    text: "Record the specific log entry, file path, account detail, timestamp, process, or configuration item that supports the conclusion.",
  },
  {
    number: "05",
    title: "Cross-check",
    text: "Use a second source when possible so the answer does not rely on one ambiguous clue.",
  },
  {
    number: "06",
    title: "Answer precisely",
    text: "Respond to the actual question using the evidence you found instead of adding unsupported assumptions.",
  },
  {
    number: "07",
    title: "Document the result",
    text: "Record the answer, evidence source, and any remaining uncertainty so the team can review it later.",
  },
];

const evidenceSources = [
  {
    title: "Logs",
    text: "System, security, application, authentication, service, and event logs can reveal actions, failures, account activity, or timing.",
  },
  {
    title: "Files and directories",
    text: "File names, locations, contents, permissions, ownership, metadata, and timestamps can support investigation questions.",
  },
  {
    title: "Accounts and groups",
    text: "Users, administrative privileges, group membership, login history, and account properties can reveal authorization or access issues.",
  },
  {
    title: "Processes and services",
    text: "Running processes, enabled services, startup items, and background tasks can show what is active on the system.",
  },
  {
    title: "Scheduled tasks and startup locations",
    text: "Persistent tasks and startup mechanisms can explain why software or scripts run automatically.",
  },
  {
    title: "Network evidence",
    text: "Connections, listening services, firewall rules, routes, interface settings, and related logs can support network-focused questions.",
  },
  {
    title: "Configuration artifacts",
    text: "Policies, service configuration files, registry settings, package configuration, and server settings can reveal the intended system state.",
  },
  {
    title: "Timestamps and metadata",
    text: "Creation, modification, access, execution, or log times can help build a sequence of events when interpreted carefully.",
  },
];

const factAssumption = [
  {
    label: "Fact",
    text: "Directly supported by a log, file, account state, timestamp, configuration, or other observable artifact.",
  },
  {
    label: "Inference",
    text: "A reasonable conclusion drawn from multiple facts. Useful, but it should still be described as an interpretation.",
  },
  {
    label: "Unknown",
    text: "Information that the current evidence does not answer yet.",
  },
  {
    label: "Assumption",
    text: "A conclusion that feels plausible but is not yet supported. It should not be treated as evidence.",
  },
];

const preservationRisks = [
  {
    title: "Deleting suspicious files",
    text: "A suspicious file may be the exact artifact needed to answer a forensic question.",
  },
  {
    title: "Clearing logs",
    text: "Logs can contain event sequences, timestamps, authentication records, and service errors that disappear once cleared.",
  },
  {
    title: "Uninstalling software too early",
    text: "Installed applications, services, or configuration files may provide evidence about system behavior.",
  },
  {
    title: "Changing user accounts",
    text: "Deleting or heavily modifying accounts can remove useful information about permissions, ownership, or activity.",
  },
  {
    title: "Changing timestamps",
    text: "Moving or editing files can alter metadata that may matter for an investigation.",
  },
  {
    title: "Restarting without thinking",
    text: "Some temporary state, running processes, connections, or volatile evidence may change after a restart.",
  },
];

const teamModel = [
  {
    role: "Forensics lead",
    responsibility:
      "Reads questions early, maps each question to likely evidence sources, documents findings, and warns teammates before evidence-changing actions.",
  },
  {
    role: "System specialist",
    responsibility:
      "Helps interpret operating-system-specific evidence and pauses high-impact changes when the forensic lead identifies a dependency.",
  },
  {
    role: "Coordinator",
    responsibility:
      "Keeps forensic tasks visible, prevents them from consuming the entire round, and schedules revisits if an investigation becomes a time trap.",
  },
];

const searchQuestions = [
  "What exact fact is the question asking for?",
  "Which artifact type is most likely to contain that fact?",
  "What evidence must be preserved before hardening continues?",
  "Is there a second source that can confirm the same conclusion?",
  "Am I observing a fact or interpreting one?",
  "Could a teammate's planned change alter this evidence?",
  "What should be recorded before I move on?",
  "Is this investigation taking too much time compared with its value?",
];

const workedCases = [
  {
    title: "Case 1: suspicious login activity",
    question:
      "The forensic question asks which account was involved in a suspicious login event.",
    weak:
      "Guess based on which username looks unusual.",
    strong:
      "Review relevant authentication or security logs, identify the event and account, cross-check the time or source if possible, and record the evidence supporting the answer.",
  },
  {
    title: "Case 2: suspicious file activity",
    question:
      "The question asks for information about a recently modified file related to suspicious activity.",
    weak:
      "Delete the suspicious-looking file immediately.",
    strong:
      "Preserve the file and metadata first, record its path and timestamps, inspect related evidence, answer the question, then decide what cleanup is justified.",
  },
  {
    title: "Case 3: unknown startup item",
    question:
      "A startup item may explain why an unwanted process appears after login.",
    weak:
      "Disable every unfamiliar startup entry before investigating.",
    strong:
      "Record the startup location, command, associated file, user context, and process behavior before making a change.",
  },
  {
    title: "Case 4: unclear service event",
    question:
      "A question asks when a service-related problem began.",
    weak:
      "Use the first timestamp you notice.",
    strong:
      "Correlate relevant service logs, system events, configuration changes, and timestamps before choosing the best-supported time.",
  },
];

const timeManagement = [
  {
    title: "Start early",
    text: "Reading forensic questions early protects evidence and gives the team time to revisit difficult investigations later.",
  },
  {
    title: "Define a search target",
    text: "Searching is faster when you know whether you need a username, timestamp, file path, process, or configuration value.",
  },
  {
    title: "Set a stopping point",
    text: "If the investigation becomes a time trap, document what you know and move it to Revisit rather than consuming the entire round.",
  },
  {
    title: "Use teammate expertise",
    text: "A Windows, Linux, Server, or networking specialist may recognize an artifact faster than the forensic lead alone.",
  },
];

const mistakes = [
  {
    title: "Waiting until the end",
    text: "By then, evidence may already have been modified by normal hardening work.",
  },
  {
    title: "Answering from intuition",
    text: "A plausible story is not the same as an evidence-supported answer.",
  },
  {
    title: "Changing evidence before recording it",
    text: "Capture the relevant state before deleting, disabling, editing, or cleaning up.",
  },
  {
    title: "Using one weak clue",
    text: "When possible, confirm important findings with another artifact or source.",
  },
  {
    title: "Over-investigating low-value details",
    text: "A forensic task can become a time trap if the team keeps searching without a clear target or stopping point.",
  },
  {
    title: "Failing to document the evidence",
    text: "The team should be able to explain why the answer is correct during review.",
  },
];

const reflection = [
  "Why should forensic questions be read before broad hardening begins?",
  "What is the difference between a fact and an inference?",
  "Why can deleting a suspicious file too early be a mistake?",
  "What makes cross-checking evidence useful?",
  "How should the team respond when a forensic investigation becomes a time trap?",
  "Why should the forensic lead communicate with operating-system specialists?",
];

const checklist = [
  "Read every forensic question early.",
  "Identify the exact fact each question asks for.",
  "Map the question to likely evidence sources.",
  "Protect evidence-rich areas before major changes.",
  "Record file paths, logs, timestamps, users, processes, or configuration details that support the answer.",
  "Separate facts, inferences, unknowns, and assumptions.",
  "Cross-check important conclusions when possible.",
  "Communicate evidence risks to teammates.",
  "Document the answer and supporting evidence.",
  "Move time-consuming investigations to Revisit when necessary.",
  "Return to unresolved forensic tasks during review.",
  "Verify that the final answer directly addresses the question asked.",
];

export default function ForensicsStrategyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/cyberpatriot/competition-strategy"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Back to Competition Strategy
          </Link>
          <div className="flex flex-wrap gap-3">
          <Link
            href="/cyberpatriot/competition-strategy/protect-required-services"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/when-you-get-stuck"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
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
                Competition Strategy 09
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Forensics Strategy
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Read forensic questions early, protect evidence, investigate
                with a clear target, and build answers that are supported by
                facts rather than guesses.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Forensics is not separate from system hardening. Every cleanup,
                account change, service change, log action, or file modification
                can affect the evidence you may need later.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Investigation workflow</span>
                  <span className="font-bold text-white">7 steps</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Evidence sources</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main skill</span>
                  <span className="font-bold text-white">Evidence reasoning</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Supported answers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Learning objectives
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              What good forensic strategy should help you do
            </h2>
          </div>
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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core concept
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Forensics begins before you touch the evidence
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The first forensic skill is recognizing which artifacts may
              matter. Once you know what the question asks, you can protect the
              relevant evidence and search with purpose.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Investigation rule
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve first, clean up second
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Suspicious files, logs, accounts, services, and processes may look
              like immediate cleanup targets, but they may also contain the
              evidence needed to answer a question.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Record the evidence before you delete, disable, clear, move, or
              significantly modify it.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Investigation workflow
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Seven steps from question to supported answer
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {workflow.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <span className="text-sm font-black text-cyan-300">{item.number}</span>
              <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Evidence sources
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Know where different kinds of answers may live
            </h2>
          </div>

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
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Fact discipline
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Separate evidence from interpretation
            </h2>
            <div className="mt-5 grid gap-3">
              {factAssumption.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Evidence preservation
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Common actions that can change the evidence
            </h2>
            <div className="mt-5 grid gap-3">
              {preservationRisks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Team coordination
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Forensics should guide hardening, not compete with it
            </h2>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {teamModel.map((item) => (
              <div
                key={item.role}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.role}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.responsibility}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Search discipline
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Eight questions before you chase a clue
            </h2>
            <div className="mt-5 grid gap-3">
              {searchQuestions.map((item, index) => (
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

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Time management
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Investigate without stalling the round
            </h2>
            <div className="mt-5 grid gap-3">
              {timeManagement.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Worked forensic cases
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Compare guessing with evidence-supported investigation
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {workedCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.question}
                </p>

                <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                    Weak approach
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.weak}</p>
                </div>

                <div className="mt-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Better approach
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.strong}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Common mistakes
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Investigation habits that weaken the answer
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
              {reflection.map((question, index) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Forensics checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Protect the evidence and support the answer
            </h2>
            <div className="mt-5 grid gap-3">
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Next strategy lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                When You Get Stuck
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how to recognize time traps, reset your approach,
                gather better evidence, ask for help, and return to difficult
                problems without losing the rest of the round.
              </p>
            </div>
            <Link
              href="/cyberpatriot/competition-strategy/when-you-get-stuck"
              className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
            >
              Open Lesson 10 →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <Link
            href="/cyberpatriot/competition-strategy"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Back to Competition Strategy
          </Link>
          <div className="flex flex-wrap gap-3">
          <Link
            href="/cyberpatriot/competition-strategy/protect-required-services"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/when-you-get-stuck"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Next Lesson →
          </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
