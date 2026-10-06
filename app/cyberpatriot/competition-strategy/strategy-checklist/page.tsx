import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Combine the full competition-strategy section into one repeatable workflow that can be used during authorized practice rounds.",
  "Use the scenario, baseline, prioritization, evidence, communication, documentation, and verification habits together rather than as isolated ideas.",
  "Recognize which checklist items belong at the beginning, middle, and end of a round.",
  "Separate high-confidence work from investigation, coordination, and revisit tasks.",
  "Protect required services, users, and forensic evidence while hardening the environment.",
  "Finish the round in a verified, scenario-compliant, known-good state.",
];

const openingChecklist = [
  "Read the full scenario and ReadMe before broad changes.",
  "Identify the machine's role and required purpose.",
  "List authorized users.",
  "List authorized administrators separately.",
  "Record required services, applications, roles, and network functions.",
  "Record restrictions, exceptions, and must-not-change items.",
  "Read every forensic question early.",
  "Identify evidence-rich areas that should be preserved.",
  "Assign team roles and system ownership.",
  "Create a shared task board.",
  "Establish a quick baseline of users, security tools, services, updates, and networking.",
  "Separate confirmed facts from unknowns and assumptions.",
];

const taskBoard = [
  {
    label: "Do Now",
    meaning:
      "High-confidence, useful work with clear evidence and manageable risk.",
  },
  {
    label: "Investigate",
    meaning:
      "Potentially important findings that still need stronger evidence or context.",
  },
  {
    label: "Coordinate",
    meaning:
      "High-impact changes that may affect networking, authentication, permissions, services, evidence, or another teammate.",
  },
  {
    label: "Revisit",
    meaning:
      "Blocked, low-confidence, or time-consuming tasks that should remain visible without consuming the whole round.",
  },
  {
    label: "Done / Verify",
    meaning:
      "Completed actions that still need confirmation, documentation, or functional testing.",
  },
];

const beforeEveryMajorChange = [
  "What specific problem am I trying to solve?",
  "What evidence proves this is actually a problem?",
  "Does the scenario require the affected user, service, software, or capability?",
  "What is the least disruptive change that addresses the problem?",
  "What could break if my assumption is wrong?",
  "Does this action affect forensic evidence?",
  "Who else on the team needs to know?",
  "How will I verify the result afterward?",
];

const evidenceChecklist = [
  {
    title: "Scenario evidence",
    text: "What do the competition instructions explicitly require, allow, or prohibit?",
  },
  {
    title: "System evidence",
    text: "What does the current machine state actually show through users, settings, services, files, logs, processes, or configuration?",
  },
  {
    title: "Policy evidence",
    text: "What secure-state expectation or defensive policy helps define the desired configuration?",
  },
  {
    title: "Forensic evidence",
    text: "What artifacts, timestamps, logs, or metadata support the conclusion?",
  },
];

const communicationChecklist = [
  "Every active task has one clear owner.",
  "High-impact changes are announced before they happen.",
  "Important results are reported after verification.",
  "Unresolved work stays visible on the shared board.",
  "Forensic risks are communicated before evidence-changing actions.",
  "Handoffs include the problem, evidence, attempts, current state, and next question.",
  "The coordinator watches for duplicate work and missing ownership.",
  "Team updates stay short and useful.",
];

const documentationChecklist = [
  "Record the system and area being changed.",
  "Record the observed state before a major change.",
  "Record the reason for the change.",
  "Record the command, setting, or action used when it matters.",
  "Record unexpected errors or side effects.",
  "Record the verification result.",
  "Label assumptions and unknowns clearly.",
  "Keep unresolved follow-up visible.",
  "Do not store passwords, private keys, or sensitive credentials in shared notes.",
];

const requiredServiceChecklist = [
  "Confirm the service, application, or role is actually required.",
  "Identify who or what depends on it.",
  "Identify ports, protocols, interfaces, and network exposure.",
  "Identify authentication and privilege requirements.",
  "Identify files, shares, directories, or other dependencies.",
  "State the exact security problem.",
  "Choose the least disruptive hardening action.",
  "Verify required access still works.",
  "Verify unnecessary exposure is reduced.",
  "Check logs and dependent systems for errors.",
];

const forensicsChecklist = [
  "Read each forensic question before broad cleanup.",
  "Identify the exact fact the question asks for.",
  "Map the question to likely evidence sources.",
  "Preserve relevant files, logs, accounts, processes, timestamps, and configuration artifacts.",
  "Separate fact, inference, unknown, and assumption.",
  "Cross-check important conclusions when possible.",
  "Document the evidence supporting each answer.",
  "Move time-consuming forensic work to Revisit when needed.",
  "Return during final review and confirm every answer directly matches the question.",
];

const stuckChecklist = [
  "Pause after repeated failure instead of stacking more changes.",
  "Restate the expected end state.",
  "Write the exact symptom or error.",
  "Review what has already changed.",
  "Identify the next unknown.",
  "Check dependencies, logs, permissions, networking, and authentication as appropriate.",
  "Ask a teammate for a second opinion when it could save time or reduce risk.",
  "Move the task to Revisit when the time cost exceeds the current value.",
  "Record enough context to return later without starting over.",
];

const verificationChecklist = [
  {
    title: "Configuration",
    text: "Did the setting, policy, permission, service, account, or rule actually change to the intended state?",
  },
  {
    title: "Security",
    text: "Did the original weakness or unnecessary exposure actually decrease?",
  },
  {
    title: "Functionality",
    text: "Do required users, services, applications, roles, and network paths still work?",
  },
  {
    title: "Team awareness",
    text: "Was the result recorded and communicated if it affects other work?",
  },
];

const finalReviewChecklist = [
  "Re-read the scenario and ReadMe.",
  "Confirm authorized users and administrators.",
  "Confirm required services, software, roles, and network functions.",
  "Confirm restrictions and exceptions are still satisfied.",
  "Review all Done / Verify tasks.",
  "Review unresolved high-value tasks.",
  "Re-check networking and firewall changes.",
  "Re-check authentication and permission changes.",
  "Re-test required services and user workflows.",
  "Review every forensic answer and supporting evidence.",
  "Look for temporary workarounds or incomplete changes.",
  "Avoid broad new changes that cannot be verified.",
  "Document unresolved risks.",
  "Finish in a known-good, verified state whenever possible.",
];

const commonFailurePatterns = [
  {
    title: "Checklist without context",
    text: "Applying generic hardening steps without reading the scenario can break required functionality.",
  },
  {
    title: "Unknown equals malicious",
    text: "Unfamiliar users, services, or software should be investigated before destructive action.",
  },
  {
    title: "Too much silent work",
    text: "High-impact changes made without communication create conflicts and hidden dependencies.",
  },
  {
    title: "No verification",
    text: "A successful command or saved setting does not prove the task is complete.",
  },
  {
    title: "One problem consumes the round",
    text: "Difficult tasks should move to Revisit when they stop producing useful progress.",
  },
  {
    title: "Last-minute guessing",
    text: "Time pressure should increase caution, not reduce the evidence threshold.",
  },
];

const practiceSequence = [
  {
    step: "1",
    title: "Read and map",
    text: "Turn the scenario into a concise list of requirements, restrictions, authorized users, required services, and forensic targets.",
  },
  {
    step: "2",
    title: "Baseline",
    text: "Build a quick picture of users, privileges, security controls, services, software, updates, and networking.",
  },
  {
    step: "3",
    title: "Prioritize",
    text: "Sort findings into Do Now, Investigate, Coordinate, Revisit, and Done / Verify.",
  },
  {
    step: "4",
    title: "Act with evidence",
    text: "Make the least disruptive justified change and protect required functionality.",
  },
  {
    step: "5",
    title: "Verify",
    text: "Check configuration, security improvement, functionality, and team impact.",
  },
  {
    step: "6",
    title: "Document and communicate",
    text: "Keep major changes, evidence, results, and unresolved items visible.",
  },
  {
    step: "7",
    title: "Review",
    text: "Re-read requirements, revisit high-value tasks, verify forensic answers, and finish in known-good state.",
  },
];

const reflection = [
  "Why should the scenario be treated as a technical constraint rather than background information?",
  "What is the difference between a Do Now task and an Investigate task?",
  "Why should high-impact changes have a stronger evidence and communication requirement?",
  "How does documentation improve troubleshooting and team coordination?",
  "Why is protecting required services different from leaving them unchanged?",
  "What should happen when a task becomes a time trap?",
  "Why should verification include both security and functionality?",
  "What changes in your decision-making as the round approaches the final minutes?",
];

export default function StrategyChecklistPage() {
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
            href="/cyberpatriot/competition-strategy/final-review-workflow"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Competition Strategy 12
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Strategy Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Bring the entire Competition Strategy section together into one
                practical workflow for authorized CyberPatriot practice.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This checklist is not a substitute for understanding the image.
                It is a reminder of the reasoning habits that should guide the
                team from the first minute to the final review.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Strategy lessons combined</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Practice sequence</span>
                  <span className="font-bold text-white">7 steps</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main tool</span>
                  <span className="font-bold text-white">Repeatable checklist</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Controlled defense</span>
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
              What this final strategy lesson should help you do
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
              Core principle
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Use the checklist to remember the process, not replace thinking
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Every competition image is different. The checklist should help
              you remember what to consider, while the scenario and evidence
              determine what you actually change.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Safety boundary
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Train the reasoning, not live-round answers
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Use this material in authorized training environments and
              fictional practice scenarios. The goal is to build defensive
              judgment and repeatable habits rather than provide answers to a
              live competition image.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Opening phase
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Before broad hardening begins
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {openingChecklist.map((item, index) => (
            <div
              key={item}
              className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <span className="font-black text-cyan-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-6 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Task board
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Keep every finding in the right work category
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {taskBoard.map((item) => (
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
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Before every major change
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Eight questions before you act
            </h2>

            <div className="mt-5 grid gap-3">
              {beforeEveryMajorChange.map((question, index) => (
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

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Evidence check
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Know what supports your decision
            </h2>

            <div className="mt-5 grid gap-3">
              {evidenceChecklist.map((item) => (
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Communication
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Keep team ownership and risk visible
            </h2>

            <div className="mt-5 grid gap-3">
              {communicationChecklist.map((item, index) => (
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
              Documentation
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Track what matters without slowing the team
            </h2>

            <div className="mt-5 grid gap-3">
              {documentationChecklist.map((item, index) => (
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
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Required services
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve the mission while reducing risk
            </h2>

            <div className="mt-5 grid gap-3">
              {requiredServiceChecklist.map((item, index) => (
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

          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Forensics
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Protect evidence before cleanup
            </h2>

            <div className="mt-5 grid gap-3">
              {forensicsChecklist.map((item, index) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              When you get stuck
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Recover control instead of repeating failed attempts
            </h2>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {stuckChecklist.map((item, index) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Four layers before a task is truly complete
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {verificationChecklist.map((item) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Final review
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Finish in a known-good state
            </h2>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalReviewChecklist.map((item, index) => (
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
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Failure patterns
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Six habits to actively avoid
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {commonFailurePatterns.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Full practice sequence
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              The complete competition strategy in seven steps
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {practiceSequence.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.step.padStart(2, "0")}
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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Reflection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Check that the strategy makes sense as one system
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
            Strategy section complete
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            You now have the full competition-strategy workflow
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Review the twelve strategy lessons for consistency, accuracy, and
            layout using the Previous / Next navigation. After the review is
            complete, the Strategy hub can be fully connected before moving on
            to the next CyberPatriot training area.
          </p>
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
            href="/cyberpatriot/competition-strategy/final-review-workflow"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
