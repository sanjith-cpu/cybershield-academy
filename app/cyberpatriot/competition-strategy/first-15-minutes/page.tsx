import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain why the opening minutes should focus on orientation and baseline awareness instead of rapid-fire changes.",
  "Build a practical 15-minute opening routine that the whole team can repeat during practice rounds.",
  "Assign responsibilities without isolating teammates or duplicating work.",
  "Identify high-confidence findings while separating them from issues that still require investigation.",
  "Protect forensic evidence and required services during the opening review.",
  "Create a shared task board that guides the rest of the round.",
];

const timeline = [
  {
    window: "0-3 minutes",
    title: "Read and orient",
    text: "Confirm the scenario, machine purpose, required users, administrators, services, applications, restrictions, and forensic questions before anyone starts making broad changes.",
    actions: [
      "Read the ReadMe and scenario completely.",
      "Highlight must-keep users, services, and software.",
      "Identify must-not-change restrictions.",
      "Read forensic questions immediately.",
    ],
  },
  {
    window: "3-7 minutes",
    title: "Assign and baseline",
    text: "Give each teammate a clear starting responsibility and establish a quick picture of the current system state without attempting to fix every issue yet.",
    actions: [
      "Assign system ownership and coordination roles.",
      "Check users and administrator membership.",
      "Note security-tool and update status.",
      "Identify important services and network functions.",
    ],
  },
  {
    window: "7-12 minutes",
    title: "Triage findings",
    text: "Separate obvious high-confidence issues from items that need more evidence. This is where the team turns observations into an ordered task list.",
    actions: [
      "Flag high-confidence fixes.",
      "Create an investigation queue.",
      "Mark risky or disruptive changes.",
      "Share important findings with the team.",
    ],
  },
  {
    window: "12-15 minutes",
    title: "Start controlled work",
    text: "Begin the first justified changes while the team continues documenting, verifying, and protecting required functionality.",
    actions: [
      "Start with clear, low-risk, high-value work.",
      "Record important changes.",
      "Verify after each significant action.",
      "Keep unresolved items visible.",
    ],
  },
];

const baselineAreas = [
  {
    title: "Users and administrators",
    text: "Compare existing accounts and elevated privileges with the scenario. Record mismatches, but confirm context before removing or disabling anything.",
  },
  {
    title: "Security protections",
    text: "Check whether the system's built-in protections, firewall, anti-malware controls, and update mechanisms appear functional and appropriately configured.",
  },
  {
    title: "Services and applications",
    text: "Identify major services and software that support the machine's mission. Distinguish required functionality from suspicious or unnecessary items that need further review.",
  },
  {
    title: "Networking",
    text: "Confirm basic connectivity and note important network settings before making firewall, interface, remote-access, or service changes that could affect communication.",
  },
  {
    title: "Updates and patch state",
    text: "Determine whether the operating system and major applications appear current enough for the scenario, while remembering that updates can take time and may affect services.",
  },
  {
    title: "Forensic evidence",
    text: "Identify logs, files, accounts, processes, or other evidence connected to forensic questions before cleanup or hardening changes alter the state.",
  },
];

const teamRoles = [
  {
    title: "Coordinator",
    text: "Tracks the scenario summary, task board, major findings, time, risky changes, and unresolved items. The coordinator keeps the team synchronized.",
  },
  {
    title: "System owner",
    text: "Takes primary responsibility for the current image and performs controlled review and hardening while reporting major changes.",
  },
  {
    title: "Forensics lead",
    text: "Reads forensic questions early, identifies evidence-rich areas, records supporting facts, and warns teammates before evidence-changing actions.",
  },
  {
    title: "Networking / Cisco lead",
    text: "Handles networking tasks and verifies that connectivity remains stable when firewall, interface, or service changes are made.",
  },
  {
    title: "Second reviewer",
    text: "Provides a second set of eyes for uncertain or disruptive changes and can investigate difficult findings while the main system owner continues with clear work.",
  },
];

const taskBoardColumns = [
  {
    title: "Do now",
    text: "High-confidence, high-value tasks with clear evidence and manageable risk.",
  },
  {
    title: "Investigate",
    text: "Important findings that need more context, logs, documentation, or teammate review before action.",
  },
  {
    title: "Risky / coordinate",
    text: "Changes that may affect required services, networking, authentication, permissions, domain roles, or other teammates.",
  },
  {
    title: "Done / verify",
    text: "Completed actions that still need confirmation, documentation, or follow-up testing.",
  },
];

const quickQuestions = [
  "What is this machine supposed to do?",
  "Which users and administrators are explicitly authorized?",
  "Which services or applications must remain available?",
  "What forensic evidence should be protected?",
  "What is clearly wrong right now?",
  "What looks unusual but is not yet proven to be wrong?",
  "Which changes could disrupt the image if done carelessly?",
  "Who owns each task and who needs to know about it?",
];

const openingMistakes = [
  {
    title: "Starting before the scenario is understood",
    text: "A teammate can create a problem in the first minute by changing something the scenario explicitly requires.",
  },
  {
    title: "Everyone reviewing the same thing",
    text: "Duplicate work wastes the most valuable time and leaves other areas untouched.",
  },
  {
    title: "Treating every observation as a fix",
    text: "An unusual user, service, or application may only be a lead. Separate observations from confirmed problems.",
  },
  {
    title: "Ignoring the current state",
    text: "Without a baseline, it becomes harder to determine whether a later problem existed before the team changed the system.",
  },
  {
    title: "Delaying forensic review",
    text: "Evidence can be overwritten, deleted, or changed by normal hardening actions. Read the questions early.",
  },
  {
    title: "Making risky changes silently",
    text: "Changes to networking, permissions, authentication, or services can affect the whole team. Communicate before high-impact actions.",
  },
];

const workedExample = [
  {
    stage: "Minute 1",
    action:
      "The team reads the scenario and learns that two named users are authorized, only one is an administrator, and a remote-management service is required.",
    reasoning:
      "These are immediate constraints. Any user, privilege, or service decision must preserve those requirements.",
  },
  {
    stage: "Minute 5",
    action:
      "The system owner notices an unfamiliar account and a disabled security feature. The forensics lead finds a question related to recent file activity.",
    reasoning:
      "The disabled protection looks like a high-confidence lead. The unfamiliar account and file activity need investigation before removal or cleanup.",
  },
  {
    stage: "Minute 9",
    action:
      "The team places the security feature in Do Now, the unfamiliar account in Investigate, and any remote-service changes in Risky / Coordinate.",
    reasoning:
      "The task board separates clear work from uncertain and potentially disruptive work.",
  },
  {
    stage: "Minute 13",
    action:
      "The system owner begins the high-confidence protection fix while the forensics lead preserves relevant evidence and the coordinator records the change.",
    reasoning:
      "The team is now moving quickly without losing control of context, evidence, or required functionality.",
  },
];

const practicePrompts = [
  "Why is it useful to spend several minutes reading and baselining instead of immediately applying a hardening checklist?",
  "What should happen when a teammate finds a suspicious account but the scenario does not clearly say whether it is authorized?",
  "Why should risky networking or service changes be placed in a separate coordination category?",
  "What makes a task appropriate for the Do Now column?",
  "How can a quick baseline help troubleshoot a problem that appears later?",
  "Why should the task board include a Done / Verify column instead of only marking tasks complete?",
];

const checklist = [
  "Read the scenario and ReadMe before broad changes.",
  "List required users, administrators, services, applications, and restrictions.",
  "Read forensic questions immediately.",
  "Assign system ownership and coordination roles.",
  "Baseline users and administrative privileges.",
  "Baseline security protections and update state.",
  "Identify required services and major applications.",
  "Confirm basic networking before disruptive changes.",
  "Separate high-confidence findings from investigation items.",
  "Mark risky changes that require team coordination.",
  "Create a shared task board.",
  "Begin with controlled, verifiable work.",
  "Record important changes.",
  "Keep unresolved items visible.",
  "Re-check team priorities after the opening phase.",
];

export default function FirstFifteenMinutesPage() {
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
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/prioritization"
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
                Competition Strategy 03
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                The First 15 Minutes
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Use the opening minutes to understand the image, divide
                responsibilities, protect evidence, establish a baseline, and
                create a task order that guides the rest of the round.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Fast does not mean random. A disciplined opening reduces
                duplicate work, protects required functionality, and helps the
                team start high-value work with better information.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Opening window</span>
                  <span className="font-bold text-white">15 minutes</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Timeline stages</span>
                  <span className="font-bold text-white">4</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main output</span>
                  <span className="font-bold text-white">Shared task board</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Start with control</span>
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
              What a strong opening should accomplish
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
              Opening principle
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              The first goal is orientation, not maximum change count
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The opening phase should answer four questions: What is required?
              What is the current state? What is clearly wrong? What still
              needs investigation?
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Once the team can answer those questions, it can move faster
              because people are less likely to duplicate work or make
              conflicting decisions.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Time pressure trap
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Rushing can make the round slower
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              If the team skips scenario review, duplicates the same checks, or
              changes high-impact settings without context, later
              troubleshooting can consume far more time than the opening review
              would have taken.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              A five-minute mistake involving networking, permissions,
              authentication, or a required service can create a much longer
              recovery problem.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Opening timeline
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            A repeatable 15-minute routine
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            The exact timing can vary by team and image. The important part is
            preserving the sequence: understand, baseline, triage, then begin
            controlled work.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {timeline.map((item) => (
            <article
              key={item.window}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                {item.window}
              </p>
              <h3 className="mt-3 text-2xl font-black text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.text}</p>

              <div className="mt-5 grid gap-2">
                {item.actions.map((action) => (
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
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Baseline snapshot
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Know the starting state before broad changes
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              A baseline is not a full audit. It is a fast, structured snapshot
              that helps the team understand what exists and where deeper
              investigation is needed.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {baselineAreas.map((item) => (
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
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Team assignments
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Divide responsibility without losing communication
            </h2>
            <div className="mt-5 grid gap-3">
              {teamRoles.map((role) => (
                <div
                  key={role.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{role.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {role.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Quick team questions
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              What everyone should know before the team splits up
            </h2>
            <div className="mt-5 grid gap-3">
              {quickQuestions.map((question, index) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Shared task board
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Turn observations into an ordered work queue
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              A task board prevents the team from treating every finding the
              same way. It also makes unresolved and risky work visible instead
              of letting it disappear in someone's notes.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {taskBoardColumns.map((column) => (
              <div
                key={column.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{column.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {column.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-5 text-sm leading-7 text-yellow-100">
            A task should move to Done / Verify only after the action is
            completed. Verification still matters. The team should be able to
            explain what changed and whether required functionality remains
            intact.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Opening mistakes
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            What not to do in the first 15 minutes
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {openingMistakes.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Worked opening
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              From scenario review to controlled action
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              This fictional timeline shows how the opening routine turns raw
              observations into coordinated work.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {workedExample.map((item) => (
              <div
                key={item.stage}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.35fr_0.9fr_1.1fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    {item.stage}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                    What happens
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white">
                    {item.action}
                  </p>
                </div>
                <div className="border-t border-slate-800 pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                    Why it matters
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.reasoning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Test your opening-round reasoning
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
              First 15 checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Practice this until it becomes routine
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
                Prioritization
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how to decide which tasks deserve immediate
                attention, which need more evidence, which are too risky to rush,
                and which should be placed in a revisit queue.
              </p>
            </div>

            <Link
              href="/cyberpatriot/competition-strategy/prioritization"
              className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
            >
              Open Lesson 04 →
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
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/prioritization"
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
