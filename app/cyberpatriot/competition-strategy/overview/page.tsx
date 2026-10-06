import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain why CyberPatriot work should begin with the scenario instead of a generic hardening checklist.",
  "Describe the six-phase competition workflow: understand, baseline, prioritize, fix, verify, and review.",
  "Separate high-confidence defensive changes from changes that need more evidence.",
  "Explain why required users, services, software, and network functions must be protected.",
  "Use a simple change log to improve team coordination and troubleshooting.",
  "Recognize when to stop, investigate, ask for a second opinion, or return to a task later.",
];

const phases = [
  {
    number: "01",
    title: "Understand",
    question: "What is this system supposed to do?",
    explanation:
      "Before changing settings, understand the scenario, ReadMe, required users, required services, special restrictions, and forensic questions. A secure configuration is only useful if it still satisfies the mission of the image.",
    actions: [
      "Read the entire scenario before making broad changes.",
      "Highlight required accounts, administrators, applications, and services.",
      "Identify instructions that change what would normally be considered a best practice.",
      "Read forensic questions early so evidence is not accidentally changed first.",
    ],
  },
  {
    number: "02",
    title: "Baseline",
    question: "What is true right now?",
    explanation:
      "A baseline is the team's understanding of the system before major changes. It helps distinguish existing problems from side effects created by the team and gives everyone a shared picture of the machine.",
    actions: [
      "Review users, groups, and administrative access.",
      "Check major security tools and update status.",
      "Identify important services, applications, and network functions.",
      "Record obvious issues without immediately changing every one of them.",
    ],
  },
  {
    number: "03",
    title: "Prioritize",
    question: "What should we work on first?",
    explanation:
      "Not every issue deserves immediate attention. Strong prioritization balances confidence, impact, risk, time, and evidence. High-confidence problems can often be handled first, while uncertain or disruptive tasks should be investigated.",
    actions: [
      "Handle clear, high-value issues before low-impact time traps.",
      "Separate fixes from investigation tasks.",
      "Flag risky changes that may affect required services or networking.",
      "Keep an unresolved list instead of repeatedly getting stuck on one item.",
    ],
  },
  {
    number: "04",
    title: "Fix",
    question: "What controlled change should we make?",
    explanation:
      "A defensive change should have a reason. Teams should know what problem they are addressing, what setting or command changes it, and what could break if the assumption is wrong.",
    actions: [
      "Make one logical change at a time when possible.",
      "Use the least disruptive change that solves the identified problem.",
      "Communicate major changes to teammates.",
      "Record commands, settings, and important observations.",
    ],
  },
  {
    number: "05",
    title: "Verify",
    question: "Did the change actually help?",
    explanation:
      "Verification separates controlled defense from random configuration changes. After an important change, confirm the desired condition improved and that required functionality still works.",
    actions: [
      "Re-check the setting, status, service, user, or policy that was changed.",
      "Confirm required connectivity or application functionality still works.",
      "Look for errors or new symptoms after high-impact changes.",
      "Record whether the result was successful, uncertain, or needs follow-up.",
    ],
  },
  {
    number: "06",
    title: "Review",
    question: "What are we still missing?",
    explanation:
      "The final phase is not simply the last few minutes. Teams should review throughout the round. Re-read requirements, revisit unresolved items, verify forensic answers, and check risky changes before time runs out.",
    actions: [
      "Return to the scenario and confirm explicit requirements.",
      "Review the unresolved-task list.",
      "Revisit forensic questions and supporting evidence.",
      "Stop making unnecessary last-minute changes that cannot be verified.",
    ],
  },
];

const evidenceTypes = [
  {
    title: "Scenario evidence",
    text: "The instructions state that a user, service, application, role, or capability is required or prohibited.",
  },
  {
    title: "System evidence",
    text: "The machine itself shows an unsafe state, suspicious configuration, unauthorized account, disabled protection, outdated software, or another concrete issue.",
  },
  {
    title: "Policy evidence",
    text: "A security requirement or organizational rule explains how a setting should be configured.",
  },
  {
    title: "Log or forensic evidence",
    text: "Logs, files, processes, metadata, or other evidence support a conclusion that should affect the team's decision.",
  },
];

const badHabits = [
  {
    title: "Changing everything immediately",
    text: "A long checklist can make students feel productive, but it can also break required functionality and hide which change caused a problem.",
  },
  {
    title: "Assuming every unusual account is malicious",
    text: "Some accounts may be required by the scenario. Verify before removing or disabling them.",
  },
  {
    title: "Disabling services without understanding them",
    text: "A service may support a required role, application, remote-access method, or dependency. Investigate before disabling it.",
  },
  {
    title: "Ignoring forensic questions until the end",
    text: "Changes made earlier in the round may alter useful evidence. Read the questions early and protect what matters.",
  },
  {
    title: "Working silently",
    text: "If teammates do not know about major changes, they can duplicate work, undo each other, or misdiagnose a later problem.",
  },
  {
    title: "Spending too long on one mystery",
    text: "A difficult problem can consume the time needed for many clearer tasks. Record it, move on, and return with fresh evidence later.",
  },
];

const decisionQuestions = [
  "What specific problem am I trying to solve?",
  "What evidence tells me this is actually a problem?",
  "Does the scenario require this user, service, application, or capability?",
  "Could this change affect networking, authentication, permissions, or a required service?",
  "How will I verify that the change worked?",
  "What will I do if the change causes a problem?",
];

const changeLogExample = [
  {
    field: "Observation",
    value: "An account has administrator rights but is not listed as an authorized administrator in the scenario.",
  },
  {
    field: "Reasoning",
    value: "The scenario defines which administrators are authorized, so this privilege assignment requires review.",
  },
  {
    field: "Action",
    value: "Remove only the unauthorized administrative privilege after confirming the account itself is still required.",
  },
  {
    field: "Verification",
    value: "Confirm the account remains usable if required and is no longer a member of the administrative group.",
  },
];

const miniScenario = [
  {
    label: "Scenario fact",
    text: "A machine is required to provide a legitimate service during the round.",
  },
  {
    label: "Observation",
    text: "The service appears in a generic hardening checklist as something that is often disabled.",
  },
  {
    label: "Weak approach",
    text: "Disable it immediately because the checklist says it can reduce attack surface.",
  },
  {
    label: "Better approach",
    text: "Recognize that the scenario requirement overrides the generic checklist. Keep the required service available, then secure its configuration instead of removing the capability.",
  },
];

const practiceQuestions = [
  "Why can a generic security checklist be dangerous if it is used without reading the scenario?",
  "What is the difference between finding an unusual setting and having enough evidence to change it?",
  "Why should forensic questions be read near the beginning of a round?",
  "What makes a change high risk even when it improves security in general?",
  "How does a change log help when a teammate reports that something stopped working?",
  "When should a team temporarily move on from a difficult problem?",
];

const checklist = [
  "Read the scenario and ReadMe completely.",
  "Identify required users, administrators, services, applications, and restrictions.",
  "Read forensic questions before changing evidence-rich areas.",
  "Assign responsibilities and establish communication expectations.",
  "Baseline the system before broad hardening.",
  "Create a high-confidence task list and a separate investigation list.",
  "Make controlled changes with a clear reason.",
  "Record important changes and commands.",
  "Verify both security improvement and required functionality.",
  "Revisit unresolved items instead of repeating failed approaches.",
  "Re-read the scenario before the final review.",
  "Avoid unverified last-minute changes.",
];

export default function CompetitionStrategyOverviewPage() {
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
            href="/cyberpatriot/competition-strategy/read-scenario-first"
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
                Competition Strategy 01
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Competition Strategy Overview
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn the reasoning process that should guide every CyberPatriot
                task before you dive into individual operating systems,
                networking, or forensics.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                A strong team does not simply apply as many security settings as
                possible. It understands the mission of the image, observes the
                current state, prioritizes evidence, makes controlled defensive
                changes, verifies the result, and keeps track of what still
                needs attention.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core workflow</span>
                  <span className="font-bold text-white">6 phases</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main skill</span>
                  <span className="font-bold text-white">Reasoning</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Applies to</span>
                  <span className="font-bold text-white">Every image</span>
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
              What you should understand before moving on
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
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              CyberPatriot is a decision-making competition
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Technical knowledge matters, but knowing a command or setting is
              only part of the job. You also need to decide whether the change
              is appropriate for this image, this scenario, and this moment.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              The same setting can be safe in one situation and disruptive in
              another. That is why scenario awareness, evidence, verification,
              and communication are part of technical skill rather than
              separate from it.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Important warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Hardening without context can reduce security
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              A change that breaks a required service, locks out a legitimate
              administrator, destroys forensic evidence, or interrupts
              networking can make the image less useful even if the setting
              sounds secure in isolation.
            </p>

            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Never treat a generic checklist as permission to change every
              setting. Use the checklist to remember where to look, then use
              evidence to decide what to change.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Six-phase workflow
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            The cycle that guides the entire round
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
            The phases are shown in order, but real competition work is
            iterative. You may return to baseline, investigation, verification,
            or review many times as new evidence appears.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                    Phase {phase.number}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    {phase.title}
                  </h3>
                </div>
                <span className="text-sm font-black text-slate-600">
                  {phase.number}
                </span>
              </div>

              <p className="mt-4 font-semibold text-cyan-100">
                {phase.question}
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {phase.explanation}
              </p>

              <div className="mt-5 grid gap-2">
                {phase.actions.map((action) => (
                  <div
                    key={action}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-300"
                  >
                    {action}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Evidence first
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              What counts as a reason to make a change?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              A defensive decision becomes stronger when you can connect it to
              one or more forms of evidence. Evidence does not mean you must
              wait forever. It means you can explain why the change makes sense.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {evidenceTypes.map((item) => (
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

          <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Ask before changing
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {decisionQuestions.map((question, index) => (
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
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Change tracking
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              A simple log improves technical reasoning
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Documentation does not need to be complicated. The goal is to
              preserve enough context that the team understands what happened
              and can troubleshoot or reverse a risky decision later.
            </p>

            <div className="mt-5 grid gap-3">
              {changeLogExample.map((item) => (
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

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Team communication
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Major changes should never surprise your teammates
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Teams can divide responsibilities, but they should not become
              isolated. Important changes to users, services, networking,
              authentication, permissions, firewalls, or server roles can affect
              other work.
            </p>

            <div className="mt-5 grid gap-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300">
                Say what you are about to change when the change could affect
                another teammate's work.
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300">
                Report unexpected errors, lost connectivity, failed services,
                or authentication problems immediately.
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300">
                Keep a shared unresolved list so difficult tasks do not vanish
                when someone moves to another part of the image.
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300">
                Ask for a second opinion before a disruptive change when the
                evidence is incomplete.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Common strategy mistakes
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Habits that create avoidable problems
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {badHabits.map((habit) => (
            <div
              key={habit.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{habit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {habit.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Practice scenario
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Apply the workflow before touching the setting
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {miniScenario.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-sm leading-7 text-emerald-100">
            The lesson is not “never disable services.” The lesson is that a
            security action must fit the scenario. Required functionality must
            be protected while the underlying configuration is reviewed and
            secured.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Check your reasoning
            </h2>

            <div className="mt-5 grid gap-3">
              {practiceQuestions.map((question, index) => (
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
              Strategy checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Keep these habits visible during practice
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
                Read the Scenario First
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                The next lesson will show how to extract required users,
                services, software, restrictions, and investigation tasks from
                the scenario before the team begins hardening.
              </p>
            </div>

            <Link
              href="/cyberpatriot/competition-strategy/read-scenario-first"
              className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
            >
              Open Lesson 02 →
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
            href="/cyberpatriot/competition-strategy/read-scenario-first"
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
