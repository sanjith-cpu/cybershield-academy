import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Prioritize competition tasks using confidence, impact, risk, time, and evidence instead of instinct alone.",
  "Distinguish high-confidence fixes from investigation tasks and risky changes.",
  "Use a revisit queue so difficult problems do not consume the entire round.",
  "Recognize when a technically important task should still be delayed because the evidence is incomplete.",
  "Explain why disruptive changes require stronger justification and verification.",
  "Build a repeatable prioritization process that can be used across Windows, Linux, Server, Cisco, and Forensics.",
];

const priorityFactors = [
  {
    title: "Confidence",
    text: "How certain are you that the condition is actually a problem and that the proposed change addresses it?",
  },
  {
    title: "Impact",
    text: "How much security value could the task provide if completed correctly?",
  },
  {
    title: "Risk",
    text: "Could the change disrupt networking, authentication, required services, permissions, evidence, or another teammate's work?",
  },
  {
    title: "Time",
    text: "How long will the task probably take compared with other available work?",
  },
  {
    title: "Evidence",
    text: "What scenario, system, policy, or forensic evidence supports the decision?",
  },
];

const taskTypes = [
  {
    label: "Do Now",
    title: "High confidence, meaningful value, manageable risk",
    text: "These tasks are usually good early targets because the team understands the problem, can explain the fix, and knows how to verify the result.",
    examples: [
      "A clearly unauthorized administrative privilege confirmed by the scenario.",
      "A disabled security protection that should be active and can be safely restored.",
      "An obvious policy mismatch with a clear requirement.",
    ],
  },
  {
    label: "Investigate",
    title: "Potentially important, but not yet proven",
    text: "These findings deserve attention, but the team needs more context before changing the system.",
    examples: [
      "An unfamiliar user not mentioned in the scenario.",
      "A service that looks unusual but may support required functionality.",
      "A process or file that seems suspicious without enough supporting evidence.",
    ],
  },
  {
    label: "Coordinate",
    title: "High-impact or disruptive changes",
    text: "These tasks may be necessary, but they should be communicated and verified carefully because mistakes can affect the entire image.",
    examples: [
      "Firewall or networking changes.",
      "Authentication or administrator changes.",
      "Disabling a service tied to a required role or application.",
    ],
  },
  {
    label: "Revisit",
    title: "Low confidence, time-consuming, or currently blocked",
    text: "These tasks should stay visible without dominating the round. Return later with more evidence, a fresh perspective, or teammate help.",
    examples: [
      "A difficult configuration issue with no clear symptoms.",
      "A low-impact item taking too long to research.",
      "A problem that depends on another task being completed first.",
    ],
  },
];

const scoringMatrix = [
  {
    confidence: "High",
    impact: "High",
    risk: "Low/Medium",
    action: "Do now",
  },
  {
    confidence: "High",
    impact: "Medium",
    risk: "Low",
    action: "Do soon",
  },
  {
    confidence: "Medium",
    impact: "High",
    risk: "Medium/High",
    action: "Investigate and coordinate",
  },
  {
    confidence: "Low",
    impact: "High",
    risk: "High",
    action: "Do not rush",
  },
  {
    confidence: "Low",
    impact: "Low",
    risk: "Any",
    action: "Revisit later",
  },
];

const prioritizationQuestions = [
  "What evidence proves this is a problem?",
  "What security value does the task provide?",
  "What could break if the assumption is wrong?",
  "Does the scenario require the affected user, service, application, or capability?",
  "How long will this probably take?",
  "Can the result be verified quickly?",
  "Is another teammate already working on a related area?",
  "Would a different task provide more value with less uncertainty?",
];

const timeTrapSigns = [
  "You have repeated the same failed attempt several times.",
  "The task requires more assumptions than evidence.",
  "You are researching a low-impact detail while clear high-value work remains.",
  "You cannot explain what success would look like.",
  "The task depends on another unresolved issue.",
  "A teammate has useful expertise but you have not asked for help.",
];

const revisitProcess = [
  {
    number: "01",
    title: "Record the exact problem",
    text: "Write down what you observed, what you expected, and what remains unknown.",
  },
  {
    number: "02",
    title: "Capture useful evidence",
    text: "Save the error message, setting, log location, command output, or other clue that will help when you return.",
  },
  {
    number: "03",
    title: "State the next question",
    text: "Define what you need to learn next instead of writing a vague note such as 'fix later.'",
  },
  {
    number: "04",
    title: "Move to higher-value work",
    text: "Use the remaining time on tasks with clearer evidence or better value.",
  },
  {
    number: "05",
    title: "Return deliberately",
    text: "Come back after another task, new evidence, or teammate review changes the situation.",
  },
];

const workedCases = [
  {
    title: "Case A: clear privilege mismatch",
    facts:
      "The scenario names one authorized administrator. A second account is clearly in the administrators group with no requirement for elevated access.",
    weak:
      "Ignore it because there are many other settings to check.",
    strong:
      "Treat it as high-confidence, high-value work. Confirm the account itself is still required, correct the privilege mismatch, and verify group membership afterward.",
  },
  {
    title: "Case B: unusual service",
    facts:
      "A service is running that the student does not recognize, but the scenario says the machine must support a related application.",
    weak:
      "Disable it immediately because unknown services are suspicious.",
    strong:
      "Place it in Investigate. Determine what it supports, whether it is required, and what would happen if it were stopped.",
  },
  {
    title: "Case C: risky firewall change",
    facts:
      "A firewall rule appears too permissive, but the machine must remain reachable for a required function.",
    weak:
      "Delete the rule without checking dependencies.",
    strong:
      "Place it in Coordinate. Identify the required traffic, narrow the rule if appropriate, and verify the required connection afterward.",
  },
  {
    title: "Case D: low-value time trap",
    facts:
      "A cosmetic configuration inconsistency has taken 15 minutes to diagnose while several clear security issues remain.",
    weak:
      "Keep working until it is solved because stopping feels like failure.",
    strong:
      "Record the issue, move it to Revisit, and return only after higher-value tasks are handled.",
  },
];

const commonMistakes = [
  {
    title: "Equating difficulty with importance",
    text: "A hard problem can feel important simply because it is consuming attention. Judge value separately from difficulty.",
  },
  {
    title: "Doing easy tasks just to feel productive",
    text: "Low-value tasks can create activity without meaningful progress. Balance ease with security impact.",
  },
  {
    title: "Ignoring risk because the fix sounds correct",
    text: "A technically valid change can still be dangerous if it affects required functionality or team coordination.",
  },
  {
    title: "Never revisiting blocked tasks",
    text: "Moving on should be temporary. Keep a visible revisit queue so unresolved work does not disappear.",
  },
  {
    title: "Prioritizing without the scenario",
    text: "Impact cannot be judged correctly if the team does not understand what the machine is supposed to do.",
  },
  {
    title: "Failing to update priorities",
    text: "New evidence can change what matters. Re-rank tasks as the round develops.",
  },
];

const reflection = [
  "Why might a high-impact task still be a bad first move?",
  "What is the difference between a Do Now task and an Investigate task?",
  "When should a task be moved to Revisit?",
  "Why does risk matter even when the proposed change improves security?",
  "How can a team avoid spending too long on one difficult issue?",
  "Why should priorities be updated as new evidence appears?",
];

const checklist = [
  "Confirm the task is supported by evidence.",
  "Estimate the security value.",
  "Estimate the risk of disruption.",
  "Estimate the likely time cost.",
  "Decide whether the task belongs in Do Now, Investigate, Coordinate, or Revisit.",
  "Communicate high-impact tasks before changing the system.",
  "Define how the result will be verified.",
  "Move blocked tasks to the revisit queue instead of repeating failed attempts.",
  "Capture useful evidence before moving on.",
  "Ask for teammate help when another perspective could reduce uncertainty.",
  "Re-rank priorities when new evidence appears.",
  "Use final review time to return to unresolved high-value items.",
];

export default function PrioritizationPage() {
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
            href="/cyberpatriot/competition-strategy/first-15-minutes"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/team-roles-communication"
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
                Competition Strategy 04
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Prioritization
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Decide what to work on first by balancing confidence, security
                impact, risk, time, and available evidence.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                A strong team does not simply complete tasks in the order they
                are discovered. It continuously asks which action creates the
                most useful progress without creating unnecessary risk.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Priority factors</span>
                  <span className="font-bold text-white">5</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Task categories</span>
                  <span className="font-bold text-white">4</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main tool</span>
                  <span className="font-bold text-white">Revisit queue</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Best use of time</span>
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
              What good prioritization should help you do
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
              Important does not always mean immediate
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A task can have high security value and still be a poor first move
              if the evidence is weak or the risk of disruption is high.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Prioritization is the process of deciding not only what matters,
              but what the team is ready to handle safely right now.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition trap
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Attention is a limited resource
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Every minute spent on one task is a minute not spent somewhere
              else. A low-value mystery can quietly cost more than several clear
              security fixes.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Do not let frustration decide priority. Use evidence, impact,
              risk, and time.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Five priority factors
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Evaluate the task before committing time to it
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {priorityFactors.map((factor) => (
            <div
              key={factor.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{factor.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {factor.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Four task categories
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Decide how the team should handle each finding
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {taskTypes.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                  {item.label}
                </p>
                <h3 className="mt-3 text-xl font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>

                <div className="mt-5 grid gap-2">
                  {item.examples.map((example) => (
                    <div
                      key={example}
                      className="rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-sm leading-6 text-slate-300"
                    >
                      {example}
                    </div>
                  ))}
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
              Quick decision matrix
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              A simple way to compare tasks
            </h2>

            <div className="mt-5 overflow-hidden rounded-xl border border-slate-800">
              <div className="grid grid-cols-4 bg-slate-950/80 text-xs font-black uppercase tracking-[0.12em] text-slate-400">
                <div className="p-3">Confidence</div>
                <div className="p-3">Impact</div>
                <div className="p-3">Risk</div>
                <div className="p-3">Action</div>
              </div>
              {scoringMatrix.map((row) => (
                <div
                  key={`${row.confidence}-${row.impact}-${row.risk}`}
                  className="grid grid-cols-4 border-t border-slate-800 text-sm text-slate-300"
                >
                  <div className="p-3">{row.confidence}</div>
                  <div className="p-3">{row.impact}</div>
                  <div className="p-3">{row.risk}</div>
                  <div className="p-3 font-semibold text-cyan-200">
                    {row.action}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Ask before starting
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Eight questions for priority decisions
            </h2>

            <div className="mt-5 grid gap-3">
              {prioritizationQuestions.map((question, index) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Time traps
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Know when to stop pushing the same problem
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Moving on is not giving up. It is a deliberate decision to protect
              the team's time until new evidence or a new perspective makes the
              problem easier to solve.
            </p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {timeTrapSigns.map((item, index) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Revisit queue
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Move on without losing the problem
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {revisitProcess.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.number}
                </span>
                <h3 className="mt-3 font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Worked cases
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Compare weak and strong priority decisions
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
                  {item.facts}
                </p>

                <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                    Weak decision
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.weak}
                  </p>
                </div>

                <div className="mt-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Strong decision
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.strong}
                  </p>
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
            Priority errors that waste competition time
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {commonMistakes.map((item) => (
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
              Test your priority reasoning
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
              Prioritization checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Use before committing time
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
                Team Roles and Communication
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how to divide responsibility across Windows, Linux,
                Server, Cisco, forensics, and coordination without creating
                duplicate work or communication gaps.
              </p>
            </div>

            <Link
              href="/cyberpatriot/competition-strategy/team-roles-communication"
              className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
            >
              Open Lesson 05 →
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
            href="/cyberpatriot/competition-strategy/first-15-minutes"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/team-roles-communication"
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
