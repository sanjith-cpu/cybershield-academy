import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const extractionCategories = [
  {
    number: "01",
    title: "Mission and system purpose",
    text: "Determine what the machine is supposed to do. A workstation, server, development machine, or system supporting a specific service may require different defensive decisions.",
    questions: [
      "What role does this machine serve?",
      "What functionality must remain available?",
      "Are there special operational requirements?",
    ],
  },
  {
    number: "02",
    title: "Authorized users",
    text: "Identify the accounts that are explicitly allowed to exist. Do not assume an unfamiliar account is unauthorized simply because you do not recognize it.",
    questions: [
      "Which users are authorized?",
      "Are any accounts explicitly prohibited?",
      "Are there special account requirements?",
    ],
  },
  {
    number: "03",
    title: "Authorized administrators",
    text: "Separate permission to use the system from permission to administer it. A legitimate user does not automatically need elevated privileges.",
    questions: [
      "Who is allowed administrative access?",
      "Which users should remain standard users?",
      "Are group memberships described?",
    ],
  },
  {
    number: "04",
    title: "Required services and applications",
    text: "Record software, roles, services, and capabilities that must remain operational. Generic hardening advice must not override an explicit competition requirement.",
    questions: [
      "Which services must stay enabled?",
      "Which applications are required?",
      "What dependencies might support them?",
    ],
  },
  {
    number: "05",
    title: "Restrictions and exceptions",
    text: "Look for wording that changes the normal approach. Exceptions are easy to overlook because they may appear as one sentence inside a larger scenario.",
    questions: [
      "What must not be changed?",
      "Are there unusual policy requirements?",
      "Does the scenario create an exception to a common best practice?",
    ],
  },
  {
    number: "06",
    title: "Investigation clues",
    text: "Notice references to suspicious activity, files, users, logs, incidents, or other evidence. These clues may connect directly to forensic questions.",
    questions: [
      "What evidence may need preservation?",
      "What claims need verification?",
      "Which areas should be inspected before broad changes?",
    ],
  },
];

const readingPasses = [
  {
    pass: "Pass 1",
    title: "Understand the story",
    text: "Read from beginning to end without immediately trying to solve individual issues. Identify the organization, machine role, users, services, and overall mission.",
  },
  {
    pass: "Pass 2",
    title: "Extract constraints",
    text: "Read again and record authorized users, administrators, required software, required services, restrictions, exceptions, and anything that must remain functional.",
  },
  {
    pass: "Pass 3",
    title: "Connect tasks to evidence",
    text: "Review forensic questions and suspicious details. Decide what should be inspected before making changes that could alter useful evidence.",
  },
];

const wordingSignals = [
  {
    signal: "must / required",
    meaning:
      "Treat the item as a constraint that your defensive work must preserve unless later evidence clearly changes the interpretation.",
  },
  {
    signal: "authorized / approved",
    meaning:
      "Use the scenario's definition when evaluating accounts, administrators, software, or access.",
  },
  {
    signal: "only",
    meaning:
      "This often creates a boundary. For example, only named administrators may be intended to have elevated privileges.",
  },
  {
    signal: "should not / must not",
    meaning:
      "Treat this as a warning against a change or condition that might otherwise seem reasonable.",
  },
  {
    signal: "needed for operations",
    meaning:
      "Protect the associated functionality while investigating how to secure it.",
  },
  {
    signal: "recent / suspicious / reported",
    meaning:
      "This may point toward evidence that should be examined before broad cleanup or configuration changes.",
  },
];

const notesTemplate = [
  ["System purpose", "What is this machine expected to provide or support?"],
  ["Authorized users", "Who is allowed to have an account?"],
  ["Authorized admins", "Who is allowed elevated access?"],
  ["Required services", "What must remain running or available?"],
  ["Required software", "What applications or tools must remain installed?"],
  ["Restrictions", "What must not be changed, removed, or interrupted?"],
  ["Forensics", "What questions or evidence need investigation?"],
  ["Unknowns", "What details are unclear and need verification?"],
];

const conflictSteps = [
  {
    number: "1",
    title: "Identify the conflict",
    text: "State exactly which generic recommendation appears to conflict with the scenario.",
  },
  {
    number: "2",
    title: "Find the explicit requirement",
    text: "Re-read the relevant wording and determine what functionality or access must be preserved.",
  },
  {
    number: "3",
    title: "Secure instead of blindly removing",
    text: "Look for a way to reduce risk while maintaining the required capability.",
  },
  {
    number: "4",
    title: "Verify the result",
    text: "Confirm both the defensive improvement and the required functionality after the change.",
  },
];

const scenarioFacts = [
  {
    fact: "Jordan and Priya are authorized users. Priya is the only authorized administrator.",
    extraction:
      "Jordan should have a legitimate account but does not automatically need administrative privileges. Priya is the explicitly authorized administrator.",
  },
  {
    fact: "The workstation must continue supporting a required remote-management function.",
    extraction:
      "Do not disable related functionality merely because remote access can increase risk. Determine how it is configured and secure it while preserving the requirement.",
  },
  {
    fact: "The organization recently reported suspicious file activity.",
    extraction:
      "Inspect relevant evidence and forensic questions before deleting files or performing broad cleanup that could remove useful clues.",
  },
  {
    fact: "An unfamiliar account named temp-support exists but is not mentioned in the authorized-user information.",
    extraction:
      "The account deserves investigation. Compare it against scenario requirements and system evidence before deciding what action is appropriate.",
  },
];

const mistakes = [
  {
    title: "Skimming for usernames only",
    text: "The scenario can contain equally important requirements about services, software, networking, roles, or restrictions.",
  },
  {
    title: "Treating the ReadMe as background",
    text: "Operational requirements are part of the technical problem. They determine whether a security change is appropriate.",
  },
  {
    title: "Starting the checklist while reading",
    text: "Changing settings before finishing the scenario can create avoidable mistakes because later instructions may change the meaning of an earlier observation.",
  },
  {
    title: "Assuming silence means permission",
    text: "If something is unclear, mark it as an unknown and investigate. Do not invent scenario requirements that are not actually stated.",
  },
  {
    title: "Forgetting the forensic questions",
    text: "Questions may reveal what evidence matters. Reading them late can mean useful evidence has already been changed.",
  },
  {
    title: "Failing to share extracted constraints",
    text: "A teammate can accidentally undo required functionality if the scenario notes stay only in one person's head.",
  },
];

const practicePrompts = [
  "A user is authorized but is not listed as an administrator. What should you verify before changing the account?",
  "A generic checklist recommends disabling a service, but the scenario says the capability is required. How should the team reason about the conflict?",
  "Why should suspicious-file clues and forensic questions be reviewed before broad cleanup?",
  "What is the difference between an unauthorized item and an unknown item?",
  "Why is a short shared scenario summary useful even if every teammate has access to the original ReadMe?",
  "What should you do when the scenario wording is ambiguous and a proposed change could be disruptive?",
];

const checklist = [
  "Read the entire scenario before broad hardening.",
  "Write down the machine's purpose.",
  "List authorized users.",
  "List authorized administrators separately.",
  "Record required services and applications.",
  "Record restrictions, exceptions, and must-not-change items.",
  "Read forensic questions early.",
  "Mark suspicious clues that may require evidence preservation.",
  "Separate confirmed facts from assumptions.",
  "Create an unknowns list for anything that needs verification.",
  "Share the extracted constraints with teammates.",
  "Re-read the scenario during final review.",
];

export default function ReadScenarioFirstPage() {
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
            href="/cyberpatriot/competition-strategy/overview"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/first-15-minutes"
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
                Competition Strategy 02
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Read the Scenario First
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Turn the competition scenario into a set of technical
                constraints before you begin changing the system.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The scenario tells you what the machine is for, who belongs on
                it, what must keep working, and what evidence may matter.
                Reading it carefully is not paperwork before the real work. It
                is the first technical task.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Reading method</span>
                  <span className="font-bold text-white">3 passes</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Extraction groups</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main skill</span>
                  <span className="font-bold text-white">Constraint mapping</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Know before changing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core concept
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              The scenario defines the mission
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Security is not simply the absence of services, accounts, or
              software. A defended system must still perform its authorized
              purpose. The scenario gives you the context needed to distinguish
              legitimate functionality from unnecessary risk.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              That context should influence every later decision about users,
              permissions, services, applications, firewall rules, remote
              access, updates, and evidence handling.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Key distinction
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Unknown does not automatically mean unauthorized
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              An unfamiliar user, program, service, or configuration deserves
              investigation. It does not automatically deserve removal. First
              compare it with the scenario, then gather enough system evidence
              to make a controlled decision.
            </p>
            <div className="mt-5 rounded-xl border border-yellow-300/20 bg-slate-950/40 p-4 text-sm leading-6 text-yellow-100">
              When the scenario does not answer a question, label it as an
              unknown instead of filling the gap with an assumption.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Three-pass reading method
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Read for understanding before reading for fixes
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Re-reading is useful because each pass has a different purpose. The
            first builds context, the second extracts constraints, and the third
            protects evidence and prepares investigation.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {readingPasses.map((item) => (
            <article
              key={item.pass}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                {item.pass}
              </p>
              <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Constraint extraction
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Six things to pull out of every scenario
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            These categories turn a paragraph of competition instructions into
            information the team can use while defending the image.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {extractionCategories.map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                    Extract {item.number}
                  </p>
                  <h3 className="mt-2 text-xl font-black text-white">
                    {item.title}
                  </h3>
                </div>
                <span className="font-black text-slate-600">{item.number}</span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-400">{item.text}</p>

              <div className="mt-5 grid gap-2">
                {item.questions.map((question) => (
                  <div
                    key={question}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-300"
                  >
                    {question}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Language signals
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Small words can create major technical constraints
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Competition instructions often communicate importance through
              ordinary language. Train yourself to notice words that establish
              requirements, boundaries, and investigation clues.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {wordingSignals.map((item) => (
              <div
                key={item.signal}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="font-black text-cyan-200">{item.signal}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Shared notes
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Build a one-page scenario map
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              The goal is not to rewrite the entire ReadMe. Create a compact
              reference that teammates can scan while they work.
            </p>

            <div className="mt-5 grid gap-3">
              {notesTemplate.map(([label, prompt]) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {prompt}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Facts vs. assumptions
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Keep three mental buckets
            </h2>

            <div className="mt-6 grid gap-4">
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <p className="font-black text-emerald-200">Confirmed fact</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  The scenario or reliable system evidence directly supports the
                  conclusion.
                </p>
              </div>
              <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-5">
                <p className="font-black text-yellow-200">Unknown</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  The available information does not yet answer the question.
                  Investigate before making a disruptive decision.
                </p>
              </div>
              <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-5">
                <p className="font-black text-red-200">Assumption</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  A conclusion that feels plausible but is not yet supported.
                  Treat it as a hypothesis, not as permission to change the
                  system.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-slate-700 bg-slate-950/60 p-5 text-sm leading-7 text-slate-300">
              Good competition reasoning often sounds like: “We know X from the
              scenario. We observed Y on the system. Z is still unknown, so we
              will verify it before making the higher-risk change.”
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Scenario vs. checklist
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              What if a normal hardening step conflicts with the mission?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The scenario provides the operational context. If generic advice
              would remove required functionality, do not blindly apply it.
              Instead, understand the requirement and look for a safer
              configuration that preserves the capability.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {conflictSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-yellow-300">
                  {step.number.padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-black text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.text}
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
              Worked scenario
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Extract the requirements before deciding what to fix
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              This fictional example demonstrates the reasoning process. The
              point is not to memorize the names or exact situation; it is to
              practice translating scenario statements into defensive
              constraints.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {scenarioFacts.map((item, index) => (
              <div
                key={item.fact}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.85fr_1.15fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Scenario statement {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white">{item.fact}</p>
                </div>
                <div className="border-t border-slate-800 pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                    Defensive extraction
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.extraction}
                  </p>
                </div>
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
            Reading errors that become technical errors
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
              Test your scenario reasoning
            </h2>
            <div className="mt-5 grid gap-3">
              {practicePrompts.map((question, index) => (
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
              Scenario checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Before the first major change
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
                First 15 Minutes
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, turn the scenario map into an organized opening workflow:
                coordinate the team, establish a baseline, protect evidence,
                identify high-confidence work, and avoid rushed changes.
              </p>
            </div>

            <Link
              href="/cyberpatriot/competition-strategy/first-15-minutes"
              className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
            >
              Open Lesson 03 →
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
            href="/cyberpatriot/competition-strategy/overview"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/first-15-minutes"
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
