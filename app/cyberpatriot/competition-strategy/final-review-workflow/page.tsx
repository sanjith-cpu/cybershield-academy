import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain why the final review phase should focus on verification and unresolved high-value work rather than random last-minute changes.",
  "Re-read the scenario and confirm required users, administrators, services, software, and restrictions are still satisfied.",
  "Review risky changes and verify that networking, authentication, permissions, and required services still function.",
  "Revisit unresolved tasks using evidence and priority instead of panic.",
  "Confirm forensic answers are supported by evidence and directly answer the question asked.",
  "Use a structured final-review workflow that reduces the chance of undoing earlier progress.",
];

const phases = [
  {
    number: "01",
    title: "Re-read the scenario",
    text: "Return to the source of truth. Confirm the team has not accidentally violated a requirement while hardening the image.",
    checks: [
      "Required users still exist.",
      "Authorized administrators are correct.",
      "Required services and software remain available.",
      "Restrictions and exceptions are still respected.",
    ],
  },
  {
    number: "02",
    title: "Review the task board",
    text: "Look at Done / Verify, Revisit, Investigate, and Coordinate items. Decide which unresolved tasks still deserve attention.",
    checks: [
      "High-value unresolved tasks are visible.",
      "Completed tasks are actually verified.",
      "Blocked tasks have useful notes.",
      "Low-value distractions stay deprioritized.",
    ],
  },
  {
    number: "03",
    title: "Verify risky changes",
    text: "Re-check the changes most likely to cause broad side effects before time expires.",
    checks: [
      "Networking and firewall behavior.",
      "Authentication and administrator access.",
      "Required services and server roles.",
      "Permissions and shared resources.",
    ],
  },
  {
    number: "04",
    title: "Confirm forensic work",
    text: "Review every forensic answer and make sure the supporting evidence still makes sense.",
    checks: [
      "The answer directly matches the question.",
      "Evidence is recorded.",
      "Assumptions are not presented as facts.",
      "Important artifacts were not overlooked.",
    ],
  },
  {
    number: "05",
    title: "Run functional checks",
    text: "Test what the system is supposed to do. Security changes are not complete if required functionality is broken.",
    checks: [
      "Required applications open.",
      "Required services respond.",
      "Authorized users can access what they need.",
      "Network-dependent functions still work.",
    ],
  },
  {
    number: "06",
    title: "Stop risky guessing",
    text: "As time becomes limited, raise the evidence threshold for new changes. Unverified high-impact guesses can undo strong earlier work.",
    checks: [
      "Avoid broad new changes.",
      "Prefer verified improvements.",
      "Revert only when evidence supports it.",
      "Document unresolved issues.",
    ],
  },
];

const finalReviewQuestions = [
  "What does the scenario still require?",
  "Did any defensive change remove required functionality?",
  "Are all authorized users and administrators correct?",
  "Are required services still running and reachable?",
  "Did any firewall, network, or permission change create a hidden failure?",
  "Are completed tasks actually verified?",
  "Which unresolved tasks still offer meaningful value?",
  "Are forensic answers supported by evidence?",
  "Did we create any temporary workaround that should be cleaned up?",
  "Is there enough time to verify any new change we are considering?",
];

const highRiskAreas = [
  {
    title: "Networking",
    text: "Re-check firewall rules, interfaces, DNS, routing, remote access, and other connectivity that may have been altered.",
  },
  {
    title: "Authentication",
    text: "Confirm administrator access, account state, login paths, and any policy changes that could lock out authorized users.",
  },
  {
    title: "Required services",
    text: "Verify services, server roles, applications, and dependencies remain available after hardening.",
  },
  {
    title: "Permissions",
    text: "Re-check file, share, group, and service permissions that could block legitimate access.",
  },
  {
    title: "Updates and restarts",
    text: "Confirm update activity or restarts did not leave the system in an unexpected state.",
  },
  {
    title: "Evidence-rich areas",
    text: "Make sure cleanup did not destroy evidence needed for unresolved forensic questions.",
  },
];

const unresolvedDecision = [
  {
    title: "High value + high confidence",
    action: "Handle now if there is enough time to verify the result.",
  },
  {
    title: "High value + medium confidence",
    action: "Investigate quickly or ask for a second review before changing the system.",
  },
  {
    title: "High value + high risk",
    action: "Proceed only if the evidence is strong and verification can be completed.",
  },
  {
    title: "Low value + low confidence",
    action: "Leave documented rather than making a last-minute guess.",
  },
];

const finalMinutesRules = [
  {
    title: "Raise the evidence threshold",
    text: "The less time remains, the stronger the evidence should be before making a disruptive change.",
  },
  {
    title: "Prefer verification over exploration",
    text: "Confirm known work before opening entirely new lines of investigation.",
  },
  {
    title: "Do not break known-good state",
    text: "If required functionality is working and the suspected issue is weakly supported, avoid risky experimentation.",
  },
  {
    title: "Keep rollback possible",
    text: "If you must make a late change, know how to restore the previous state if verification fails.",
  },
];

const workedCases = [
  {
    title: "Case 1: final firewall review",
    situation:
      "A teammate narrowed firewall access earlier. The required remote function worked at the time, but no one has checked it since other changes were made.",
    weak:
      "Assume it is fine because it worked once.",
    strong:
      "Re-test the required remote function, confirm the intended rule remains in place, and check for later changes that may have altered connectivity.",
  },
  {
    title: "Case 2: unresolved account question",
    situation:
      "An unfamiliar user remains on the system and the team still lacks strong evidence about whether it is authorized.",
    weak:
      "Delete the account because the round is almost over.",
    strong:
      "Re-check the scenario and available evidence. If the conclusion remains uncertain and deletion could be disruptive, document the unresolved risk instead of guessing.",
  },
  {
    title: "Case 3: required service after hardening",
    situation:
      "A required service was hardened earlier by changing permissions and network exposure.",
    weak:
      "Check only that the service process is running.",
    strong:
      "Verify the service state, authorized access, required user workflow, and the security condition that was supposed to improve.",
  },
  {
    title: "Case 4: forensic answer under review",
    situation:
      "A forensic answer was written based on one ambiguous timestamp.",
    weak:
      "Leave it because time is short.",
    strong:
      "Check whether another log, file, or event can confirm the conclusion. If not, clearly distinguish what is known from what is inferred.",
  },
];

const teamReview = [
  {
    role: "Coordinator",
    responsibility:
      "Runs the final review sequence, checks the task board, confirms scenario requirements, and prevents random last-minute changes.",
  },
  {
    role: "System specialists",
    responsibility:
      "Verify their major changes, required services, account state, permissions, updates, and unresolved tasks.",
  },
  {
    role: "Networking / Cisco",
    responsibility:
      "Confirm connectivity, device state, addressing, access controls, and any changes that could affect multiple systems.",
  },
  {
    role: "Forensics lead",
    responsibility:
      "Review every answer, supporting evidence, and any unresolved investigation that still needs attention.",
  },
];

const mistakes = [
  {
    title: "Starting new broad work too late",
    text: "Large new changes are difficult to test under time pressure and can create failures that are harder to recover from.",
  },
  {
    title: "Skipping scenario re-read",
    text: "The team may have accidentally violated a requirement while focusing on security settings.",
  },
  {
    title: "Trusting completed labels",
    text: "A task marked done may never have been verified. Final review should separate changed from verified.",
  },
  {
    title: "Ignoring required functionality",
    text: "A hardened system that cannot perform its required role is not a successful final state.",
  },
  {
    title: "Guessing on unresolved tasks",
    text: "Time pressure does not turn weak evidence into strong evidence.",
  },
  {
    title: "Reviewing silently",
    text: "The team should coordinate final checks so two people do not undo each other's work or miss shared dependencies.",
  },
];

const reflection = [
  "Why should the scenario be re-read during final review?",
  "What kinds of changes deserve extra verification near the end of the round?",
  "Why should the evidence threshold rise as time becomes limited?",
  "What is the difference between a completed task and a verified task?",
  "How should the team handle a high-value unresolved issue with weak evidence?",
  "Why is required functionality part of final security verification?",
];

const checklist = [
  "Re-read the scenario and ReadMe.",
  "Confirm authorized users and administrators.",
  "Confirm required services and applications.",
  "Confirm restrictions and exceptions are still satisfied.",
  "Review all Done / Verify tasks.",
  "Review unresolved high-value tasks.",
  "Re-check firewall and networking changes.",
  "Re-check authentication and permission changes.",
  "Test required services and user workflows.",
  "Review every forensic answer and supporting evidence.",
  "Look for temporary workarounds or unfinished changes.",
  "Avoid broad new work that cannot be verified.",
  "Document unresolved risks.",
  "Finish with known-good, verified state whenever possible.",
];

export default function FinalReviewWorkflowPage() {
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
            href="/cyberpatriot/competition-strategy/when-you-get-stuck"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/strategy-checklist"
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
                Competition Strategy 11
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Final Review Workflow
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Use the final phase to verify requirements, revisit high-value
                unresolved work, confirm forensic answers, and protect the
                progress your team has already made.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Final review is not a last-minute hardening sprint. It is a
                structured verification phase where the team confirms the image
                is secure, functional, and consistent with the scenario.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Review phases</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main focus</span>
                  <span className="font-bold text-white">Verification</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Late-round rule</span>
                  <span className="font-bold text-white">Reduce risk</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Finish controlled</span>
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
              What a strong final review should accomplish
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
              Final review is verification, not panic
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The final phase should answer one question: Is the system now in a
              secure, functional, scenario-compliant state that the team can
              explain and defend?
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              That means re-checking the work with the highest impact, not
              trying to touch every remaining setting.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Late-round discipline
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Less time means less room for unverified risk
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              As time decreases, the team should become more conservative about
              disruptive changes. A new issue may be real, but if the evidence
              is weak and the effect is broad, guessing can damage verified work.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Near the end, prefer proven state over speculative improvement.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Six-phase review
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            A repeatable closing workflow
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                Phase {phase.number}
              </p>
              <h3 className="mt-2 text-xl font-black text-white">
                {phase.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {phase.text}
              </p>

              <div className="mt-5 grid gap-2">
                {phase.checks.map((check) => (
                  <div
                    key={check}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-300"
                  >
                    {check}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Final review questions
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Ten questions before you stop
            </h2>
            <div className="mt-5 grid gap-3">
              {finalReviewQuestions.map((question, index) => (
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
              Highest-risk areas
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Re-check changes with broad side effects
            </h2>
            <div className="mt-5 grid gap-3">
              {highRiskAreas.map((item) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Unresolved work
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Decide what still deserves time
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Not every unresolved task should be touched at the end. Re-rank
              by value, confidence, risk, and available verification time.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {unresolvedDecision.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Final minutes
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Four rules for protecting strong work
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {finalMinutesRules.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
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
              Team review
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Everyone owns part of the final state
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {teamReview.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Worked final-review cases
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Compare rushed endings with controlled verification
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
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.weak}
                  </p>
                </div>

                <div className="mt-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Better response
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
            Closing habits that can undo earlier progress
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
              Test your final-review reasoning
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
              Final review checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Finish in a known-good state
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
                Final strategy lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Strategy Checklist
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                The final lesson will combine the entire strategy section into
                one practical competition checklist that students can use during
                authorized practice rounds.
              </p>
            </div>
            <Link
              href="/cyberpatriot/competition-strategy/strategy-checklist"
              className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
            >
              Open Lesson 12 →
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
            href="/cyberpatriot/competition-strategy/when-you-get-stuck"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/strategy-checklist"
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
