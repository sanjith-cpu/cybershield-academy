import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain why lightweight documentation improves speed, safety, and troubleshooting during CyberPatriot practice.",
  "Record the most important observations, commands, changes, risks, and verification results without creating unnecessary overhead.",
  "Distinguish useful documentation from excessive note-taking that slows the team down.",
  "Build a simple change log that can support handoffs, reversals, and final review.",
  "Use before-and-after notes to identify whether a change caused a new problem.",
  "Keep unresolved tasks and follow-up questions visible instead of relying on memory.",
];

const logFields = [
  {
    title: "Time",
    text: "Record when a major observation or change happened so the team can reconstruct the sequence later if something breaks.",
  },
  {
    title: "System",
    text: "Identify the image or device involved so notes remain useful when the team is working across multiple systems.",
  },
  {
    title: "Area",
    text: "Name the category being reviewed, such as users, firewall, services, permissions, updates, networking, or forensics.",
  },
  {
    title: "Observation",
    text: "Write what was actually seen before the change. Avoid replacing evidence with assumptions.",
  },
  {
    title: "Action",
    text: "Record the setting changed, command used, configuration edited, or other defensive action taken.",
  },
  {
    title: "Reason",
    text: "State why the team believed the action was justified using scenario, system, policy, or forensic evidence.",
  },
  {
    title: "Verification",
    text: "Record what was checked afterward and whether the expected result was achieved.",
  },
  {
    title: "Follow-up",
    text: "Note any remaining uncertainty, possible side effect, or task that should be revisited later.",
  },
];

const whatToRecord = [
  {
    title: "High-impact changes",
    text: "Networking, authentication, administrator membership, permissions, services, firewall, server roles, or anything that could affect the entire image.",
  },
  {
    title: "Commands with meaningful effects",
    text: "Record commands that modify state, especially when they may need to be explained, repeated, or reversed later.",
  },
  {
    title: "Important evidence",
    text: "Record useful logs, file paths, process names, account details, or other facts that support forensic or defensive reasoning.",
  },
  {
    title: "Unexpected results",
    text: "If a change produces an error, loss of connectivity, failed service, or new symptom, document it immediately.",
  },
  {
    title: "Unresolved questions",
    text: "Write down what remains unknown and the next question to investigate so difficult tasks do not disappear.",
  },
  {
    title: "Verification outcomes",
    text: "A change is not complete just because the command ran. Record whether the intended security state and required functionality were confirmed.",
  },
];

const whatNotToRecord = [
  {
    title: "Every mouse click",
    text: "Over-documenting tiny navigation steps wastes time and hides the important information.",
  },
  {
    title: "Long paragraphs during the round",
    text: "Use concise notes that capture the facts, action, reason, and result. Detailed explanations can be expanded later if needed.",
  },
  {
    title: "Unverified assumptions as facts",
    text: "Label uncertainty clearly. Notes should help the team reason, not make guesses look authoritative.",
  },
  {
    title: "Sensitive credentials",
    text: "Do not copy passwords, recovery secrets, private keys, or other sensitive authentication material into shared notes.",
  },
];

const beforeAfter = [
  {
    stage: "Before",
    label: "Observed state",
    example:
      "Account 'alex' is a member of Administrators. Scenario lists 'maya' as the only authorized administrator.",
  },
  {
    stage: "Reason",
    label: "Why action is justified",
    example:
      "The scenario explicitly defines administrator authorization, so alex's elevated privilege conflicts with the requirement.",
  },
  {
    stage: "Action",
    label: "What changed",
    example:
      "Removed alex from the Administrators group while keeping the account because alex remains an authorized user.",
  },
  {
    stage: "After",
    label: "Verification",
    example:
      "Confirmed alex is no longer in Administrators and the account still exists as required.",
  },
];

const commandLogExample = [
  {
    field: "Command",
    value: "Example: a command used to inspect or modify a system setting.",
  },
  {
    field: "Purpose",
    value: "What the command was intended to check or change.",
  },
  {
    field: "Result",
    value: "What output, status, or behavior appeared after running it.",
  },
  {
    field: "Next step",
    value: "Whether the result is complete, needs verification, or requires more investigation.",
  },
];

const handoffTemplate = [
  "What system and area are we talking about?",
  "What did you observe?",
  "What have you already checked or changed?",
  "What evidence supports the task?",
  "What is still unknown?",
  "What should the next person do next?",
];

const failureScenario = [
  {
    stage: "Initial state",
    text: "Networking works and a required remote function is available.",
  },
  {
    stage: "Change",
    text: "A teammate modifies a firewall or service setting without recording what changed.",
  },
  {
    stage: "Problem",
    text: "The remote function stops working, but the team is unsure which action caused it.",
  },
  {
    stage: "With documentation",
    text: "The change log identifies the exact time, setting, reason, and expected effect, making the troubleshooting path much faster.",
  },
];

const statusLabels = [
  {
    label: "Observed",
    meaning: "A fact has been noticed, but no decision has been made yet.",
  },
  {
    label: "Investigating",
    meaning: "The team is gathering more evidence before changing the system.",
  },
  {
    label: "Changed",
    meaning: "An action has been completed but still needs verification.",
  },
  {
    label: "Verified",
    meaning: "The intended state is confirmed and required functionality still works.",
  },
  {
    label: "Revisit",
    meaning: "The task remains unresolved and should be returned to later.",
  },
];

const mistakes = [
  {
    title: "Writing nothing down",
    text: "Memory becomes unreliable when several teammates are changing multiple systems under time pressure.",
  },
  {
    title: "Documenting only the fix",
    text: "Without the before state and the reason, it becomes harder to understand whether the change was appropriate.",
  },
  {
    title: "Marking tasks complete before verification",
    text: "A successful command is not the same as a successful outcome.",
  },
  {
    title: "Keeping private notes only",
    text: "Useful information should be visible to the people who may need it for coordination, handoff, or troubleshooting.",
  },
  {
    title: "Recording assumptions as facts",
    text: "Use words like unknown, suspected, or needs verification when evidence is incomplete.",
  },
  {
    title: "Letting the log become a distraction",
    text: "Documentation should support the work. If note-taking becomes slower than the task itself, simplify the format.",
  },
];

const reflection = [
  "Why is the before state important when troubleshooting a problem that appears after a change?",
  "Which changes deserve more detailed documentation than others?",
  "Why should verification be recorded separately from the action itself?",
  "What is the danger of writing an assumption as if it were a confirmed fact?",
  "How does a shared log improve task handoffs?",
  "Why should sensitive credentials never be placed in competition notes?",
];

const checklist = [
  "Record the system and area being reviewed.",
  "Write the observed state before major changes.",
  "Record the reason for the change.",
  "Record the command, setting, or action used.",
  "Verify and record the result.",
  "Capture unexpected errors or side effects immediately.",
  "Keep unresolved questions visible.",
  "Use short notes instead of long paragraphs.",
  "Share important notes with the team.",
  "Label unknowns and assumptions clearly.",
  "Do not store passwords, keys, or sensitive credentials in shared notes.",
  "Use the log during final review to identify risky or incomplete work.",
];

export default function DocumentationChangeTrackingPage() {
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
            href="/cyberpatriot/competition-strategy/team-roles-communication"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/evidence-based-hardening"
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
                Competition Strategy 06
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Documentation and Change Tracking
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Record the right details so the team can coordinate,
                troubleshoot, verify, and recover from mistakes without slowing
                the round down.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Good documentation is not a long report. It is a compact record
                of what was observed, what changed, why it changed, and what
                happened afterward.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core log fields</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main use</span>
                  <span className="font-bold text-white">Traceability</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Best format</span>
                  <span className="font-bold text-white">Short + shared</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Know what changed</span>
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
              What useful documentation should accomplish
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
              Documentation is a troubleshooting tool
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Notes are most valuable when something becomes confusing. If a
              service fails, connectivity disappears, or an account behaves
              differently, the team can trace what changed instead of guessing.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              This is especially important when several teammates are making
              changes at the same time.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Balance
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Record enough to be useful, not enough to become the task
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The team does not need a formal incident report during the round.
              Short, consistent notes are usually enough.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              If note-taking is taking longer than the defensive work itself,
              simplify the format.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Change log structure
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Eight fields that preserve the important context
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Teams can shorten or combine fields, but the log should still answer
            what happened, why it happened, and whether it worked.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {logFields.map((field) => (
            <div
              key={field.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{field.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {field.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Record these
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Information worth capturing
            </h2>

            <div className="mt-5 grid gap-3">
              {whatToRecord.map((item) => (
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

          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Skip these
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Documentation that creates more noise than value
            </h2>

            <div className="mt-5 grid gap-3">
              {whatNotToRecord.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Before and after
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Build a traceable chain from observation to verification
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {beforeAfter.map((item) => (
              <div
                key={item.stage}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  {item.stage}
                </p>
                <h3 className="mt-3 font-black text-white">{item.label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Command tracking
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Record commands that matter
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Commands used only to view information may not always need to be
              logged. Commands that modify state, affect a service, change a
              user, or alter network behavior are much more important to record.
            </p>

            <div className="mt-5 grid gap-3">
              {commandLogExample.map((item) => (
                <div
                  key={item.field}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    {item.field}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Useful status labels
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Show where each task stands
            </h2>

            <div className="mt-5 grid gap-3">
              {statusLabels.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.meaning}
                  </p>
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
              Handoff documentation
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Leave enough context for the next person to continue
            </h2>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {handoffTemplate.map((item, index) => (
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
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Why documentation matters
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Compare troubleshooting with and without a change log
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {failureScenario.map((item) => (
              <div
                key={item.stage}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                  {item.stage}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
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
            Documentation habits that reduce usefulness
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mistakes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
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
              Test your change-tracking reasoning
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
              Change tracking checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Keep important context visible
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
                Evidence-Based Hardening
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how to connect scenario evidence, system evidence,
                policy evidence, and verification to specific defensive
                decisions instead of blindly applying a checklist.
              </p>
            </div>

            <Link
              href="/cyberpatriot/competition-strategy/evidence-based-hardening"
              className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
            >
              Open Lesson 07 →
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
            href="/cyberpatriot/competition-strategy/team-roles-communication"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/evidence-based-hardening"
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
