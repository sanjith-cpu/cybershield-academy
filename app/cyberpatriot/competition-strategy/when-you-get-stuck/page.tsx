import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Recognize when a difficult task has become a time trap instead of productive investigation.",
  "Reset your approach by restating the problem, evidence, expected state, and next unknown.",
  "Use a structured stuck workflow instead of repeating the same failed action.",
  "Know when to ask a teammate for help, transfer ownership, or move a task to Revisit.",
  "Preserve useful context so returning to the task later is faster than starting over.",
  "Avoid risky last-minute guesses when the evidence is incomplete.",
];

const stuckSignals = [
  {
    title: "Repeated failure",
    text: "You have tried the same command, setting, or approach several times without learning anything new.",
  },
  {
    title: "No clear success condition",
    text: "You cannot explain what the correct end state should look like or how you would verify it.",
  },
  {
    title: "Too many assumptions",
    text: "Your next step depends more on guesses than on scenario, system, policy, or forensic evidence.",
  },
  {
    title: "Time cost is growing",
    text: "The task is consuming a large amount of time while other clear, higher-value work remains.",
  },
  {
    title: "The task is blocked",
    text: "Progress depends on another configuration, teammate action, missing evidence, or unresolved prerequisite.",
  },
  {
    title: "Risk is increasing",
    text: "You are considering broader or more disruptive changes simply because the original fix did not work.",
  },
];

const resetWorkflow = [
  {
    number: "01",
    title: "Stop changing things",
    text: "Pause before making the problem larger. Do not stack more changes on top of an uncertain state.",
  },
  {
    number: "02",
    title: "Restate the goal",
    text: "Write one sentence describing what should be true when the task is solved.",
  },
  {
    number: "03",
    title: "Restate the evidence",
    text: "List what you actually know from the scenario, current system state, logs, configuration, or error messages.",
  },
  {
    number: "04",
    title: "List what changed",
    text: "Review the actions already taken so you do not repeat them and can identify possible side effects.",
  },
  {
    number: "05",
    title: "Define the next unknown",
    text: "Turn the problem into one question you can answer next instead of trying random fixes.",
  },
  {
    number: "06",
    title: "Choose the next path",
    text: "Either investigate, ask for help, hand off the task, revert a risky change, or move the issue to Revisit.",
  },
];

const usefulQuestions = [
  "What was the last known working state?",
  "What exact symptom am I trying to explain?",
  "What did I expect to happen?",
  "What actually happened?",
  "What changed immediately before the problem appeared?",
  "What evidence do I have rather than assume?",
  "What dependency could be involved?",
  "Can I safely test one smaller hypothesis?",
  "Who on the team may recognize this faster?",
  "Is this still worth the time right now?",
];

const askForHelp = [
  {
    title: "You lack domain context",
    text: "A Windows, Linux, Server, Cisco, or Forensics specialist may recognize a system-specific issue much faster.",
  },
  {
    title: "The task is high risk",
    text: "A second reviewer can help prevent a disruptive guess involving networking, authentication, permissions, or required services.",
  },
  {
    title: "You have tunnel vision",
    text: "Another person may notice a simple explanation that is hard to see after staring at the same problem too long.",
  },
  {
    title: "A dependency crosses roles",
    text: "A system issue may involve networking, DNS, authentication, storage, or another image that belongs to a teammate.",
  },
];

const handoffTemplate = [
  ["Problem", "What is not working or what suspicious condition exists?"],
  ["Expected state", "What should be true when the issue is solved?"],
  ["Evidence", "What facts, logs, settings, errors, or scenario requirements support the task?"],
  ["Attempts", "What have you already checked or changed?"],
  ["Current state", "What is true now, including any side effects?"],
  ["Next question", "What is the next unknown that should be investigated?"],
];

const revisitRules = [
  {
    title: "Record before moving on",
    text: "Capture the problem, evidence, attempts, and next question so returning later is efficient.",
  },
  {
    title: "Set a reason to return",
    text: "Come back when new evidence appears, a prerequisite is solved, another teammate becomes available, or higher-value work is complete.",
  },
  {
    title: "Do not hide the task",
    text: "Keep it visible on the shared board so unresolved work is not forgotten.",
  },
  {
    title: "Re-rank later",
    text: "A task that was low priority earlier can become important if new evidence changes its impact or confidence.",
  },
];

const troubleshootingLayers = [
  {
    layer: "Requirement",
    question: "What does the scenario say must work or remain configured?",
  },
  {
    layer: "Configuration",
    question: "Is the relevant setting, policy, service, permission, or rule actually configured as expected?",
  },
  {
    layer: "Dependency",
    question: "Does another service, account, file, network path, DNS setting, or role support this function?",
  },
  {
    layer: "Connectivity",
    question: "Can the required systems or users reach each other where networking is involved?",
  },
  {
    layer: "Authentication",
    question: "Are credentials, permissions, group memberships, or access controls blocking the expected action?",
  },
  {
    layer: "Logs / errors",
    question: "What do logs, warnings, or error messages say about why the task failed?",
  },
];

const workedCases = [
  {
    title: "Case 1: service will not start",
    situation:
      "A required service fails to start after a configuration change.",
    weak:
      "Keep toggling settings and restarting the service repeatedly without checking the error or dependencies.",
    strong:
      "Stop, record the last change, inspect the service error and dependency state, identify the next unknown, and either correct the specific issue or revert the risky change.",
  },
  {
    title: "Case 2: remote access stops working",
    situation:
      "A teammate changes firewall settings and a required remote-management path stops working.",
    weak:
      "Add broad allow rules until connectivity returns.",
    strong:
      "Review the exact firewall change, identify the required traffic, compare before and after state, restore only the necessary access, and verify the required connection.",
  },
  {
    title: "Case 3: suspicious account remains unclear",
    situation:
      "An unfamiliar account is not listed in the scenario, but there is not enough evidence to know whether it supports a required function.",
    weak:
      "Delete the account because time is running out.",
    strong:
      "Mark the account as Investigate or Revisit, document what is known, check ownership and usage evidence, and ask for a second review before a destructive action.",
  },
  {
    title: "Case 4: repeated command failure",
    situation:
      "A command keeps returning an error and the student has already retried it several times.",
    weak:
      "Keep entering variations of the same command from memory.",
    strong:
      "Read the exact error, confirm syntax and context, verify permissions and prerequisites, and decide whether another teammate can resolve it faster.",
  },
];

const recoveryMindset = [
  {
    title: "Shrink the problem",
    text: "Break a broad issue into one testable question instead of trying to solve everything at once.",
  },
  {
    title: "Return to evidence",
    text: "Use current facts and errors to guide the next step instead of inventing explanations.",
  },
  {
    title: "Change one thing at a time",
    text: "When troubleshooting, smaller controlled changes make cause and effect easier to understand.",
  },
  {
    title: "Verify every recovery step",
    text: "A change that removes one symptom may still create a different failure. Confirm both security and functionality.",
  },
];

const lastMinuteRules = [
  {
    title: "Do not widen the blast radius",
    text: "Avoid broad firewall, permission, service, or account changes that you cannot fully verify before time expires.",
  },
  {
    title: "Prefer known-good state",
    text: "If a recent risky change clearly caused a failure, restoring the last known working state can be safer than adding more guesses.",
  },
  {
    title: "Finish strong work first",
    text: "Verified high-value tasks are better than several incomplete, risky changes made under pressure.",
  },
  {
    title: "Leave evidence for review",
    text: "Document unresolved issues instead of hiding them with last-minute cleanup or unsupported actions.",
  },
];

const mistakes = [
  {
    title: "Repeating the same failed approach",
    text: "If nothing new is being learned, repetition is not troubleshooting.",
  },
  {
    title: "Making the change broader",
    text: "Expanding permissions, firewall rules, or service access can hide the symptom while creating a larger security problem.",
  },
  {
    title: "Refusing to ask for help",
    text: "A short second opinion can save much more time than working alone out of pride or habit.",
  },
  {
    title: "Moving on without notes",
    text: "Returning later becomes slower if the team has to reconstruct the entire problem from memory.",
  },
  {
    title: "Changing multiple variables",
    text: "When several settings change at once, it becomes difficult to know which one caused the result.",
  },
  {
    title: "Guessing near the deadline",
    text: "Time pressure does not improve weak evidence. High-risk guesses can undo earlier progress.",
  },
];

const reflection = [
  "What signs tell you that a task has become a time trap?",
  "Why should you stop making changes before resetting your troubleshooting approach?",
  "What makes a useful handoff different from saying 'I couldn't fix it'?",
  "When is moving a task to Revisit a good strategic decision?",
  "Why is changing one variable at a time useful during troubleshooting?",
  "What should you avoid doing in the final minutes if you cannot verify the result?",
];

const checklist = [
  "Pause after repeated failure.",
  "State the expected end state.",
  "Record the exact symptom.",
  "Review the evidence you actually have.",
  "Review the changes already made.",
  "Identify the next unknown.",
  "Check likely dependencies.",
  "Read logs and error messages before guessing.",
  "Ask for teammate help when useful.",
  "Move time-consuming tasks to Revisit when appropriate.",
  "Record the problem before moving on.",
  "Return when new evidence or time becomes available.",
  "Avoid broad last-minute guesses.",
  "Verify any recovery action before marking the task complete.",
];

export default function WhenYouGetStuckPage() {
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
            href="/cyberpatriot/competition-strategy/forensics-strategy"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/final-review-workflow"
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
                Competition Strategy 10
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                When You Get Stuck
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Recognize time traps, reset your approach, preserve useful
                context, ask for help, and return to hard problems without
                losing the rest of the round.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Strong competitors are not people who never get stuck. They are
                people who notice when progress has stopped and switch to a more
                controlled troubleshooting process.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Stuck signals</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Reset workflow</span>
                  <span className="font-bold text-white">6 steps</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main tool</span>
                  <span className="font-bold text-white">Revisit queue</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Recover control</span>
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
              What good recovery strategy should help you do
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
              Getting stuck is a signal to change process
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              If repeated attempts are not producing new evidence, the answer is
              usually not to try harder in the same direction. Stop, restate the
              problem, and reduce the next step to one testable question.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition rule
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Do not let one mystery consume the whole round
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A difficult problem can be important, but unresolved complexity
              should not prevent the team from completing clearer, higher-value
              work elsewhere.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Moving a task to Revisit is a strategic decision when the team has
              preserved enough context to return later.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Recognize the time trap
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Six signs that productive investigation has stopped
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stuckSignals.map((item) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reset workflow
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Six steps to regain control of the problem
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {resetWorkflow.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.number}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
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
              Reset questions
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Ask these before making another change
            </h2>
            <div className="mt-5 grid gap-3">
              {usefulQuestions.map((question, index) => (
                <div
                  key={question}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{question}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Ask for help
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              When a second person can save time
            </h2>
            <div className="mt-5 grid gap-3">
              {askForHelp.map((item) => (
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
              Troubleshooting layers
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Check the system from requirement to evidence
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {troubleshootingLayers.map((item) => (
              <div
                key={item.layer}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.layer}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Handoff template
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Transfer the problem without losing context
            </h2>
            <div className="mt-5 grid gap-3">
              {handoffTemplate.map(([label, prompt]) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{prompt}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Revisit queue
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Move on without abandoning the issue
            </h2>
            <div className="mt-5 grid gap-3">
              {revisitRules.map((item) => (
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
              Worked recovery cases
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Compare frustration-driven changes with controlled recovery
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
                  {item.situation}
                </p>
                <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                    Weak response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.weak}</p>
                </div>
                <div className="mt-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Better response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.strong}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Recovery mindset
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Four habits that make troubleshooting safer
            </h2>
            <div className="mt-5 grid gap-3">
              {recoveryMindset.map((item) => (
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

          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Final-minute discipline
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Do not turn time pressure into guesswork
            </h2>
            <div className="mt-5 grid gap-3">
              {lastMinuteRules.map((item) => (
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
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Common mistakes
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Stuck behaviors that make the problem worse
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
              Test your recovery reasoning
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
                  <p className="mt-2 text-sm leading-6 text-slate-300">{question}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Stuck-task checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Recover control before making more changes
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
                Final Review Workflow
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how to use the final phase of the round to revisit
                scenario requirements, unresolved tasks, risky changes,
                forensic answers, services, and verification without creating
                last-minute damage.
              </p>
            </div>
            <Link
              href="/cyberpatriot/competition-strategy/final-review-workflow"
              className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
            >
              Open Lesson 11 →
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
            href="/cyberpatriot/competition-strategy/forensics-strategy"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/final-review-workflow"
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
