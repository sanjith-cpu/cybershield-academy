import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain why strong team structure improves both speed and accuracy during CyberPatriot practice.",
  "Assign clear responsibilities across Windows, Linux, Server, Cisco, Forensics, and coordination roles.",
  "Use short, consistent communication so teammates know about important changes without creating noise.",
  "Prevent duplicate work and conflicting changes by establishing ownership and handoff rules.",
  "Recognize which changes require immediate team awareness because they can affect other systems or tasks.",
  "Use a shared status board and handoff process to keep work visible throughout the round.",
];

const roles = [
  {
    title: "Team Captain / Coordinator",
    responsibility:
      "Maintains the big picture: scenario requirements, time, task ownership, unresolved issues, risky changes, and final-review priorities.",
    watchFor: [
      "Two people working the same problem",
      "Important tasks with no owner",
      "Risky changes happening silently",
      "Forensic questions being forgotten",
    ],
  },
  {
    title: "Windows Specialist",
    responsibility:
      "Owns Windows workstation review, hardening, user and group checks, security tools, services, updates, software, permissions, and PowerShell tasks.",
    watchFor: [
      "Changes that affect other teammates",
      "Administrative privilege decisions",
      "Required services and applications",
      "Firewall or networking side effects",
    ],
  },
  {
    title: "Windows Server Specialist",
    responsibility:
      "Handles Server Manager, roles, services, Active Directory-related work, Group Policy, shares, permissions, IIS, and server-specific requirements.",
    watchFor: [
      "Required server roles",
      "Domain-wide effects",
      "Authentication dependencies",
      "Changes that affect multiple systems",
    ],
  },
  {
    title: "Linux Specialist",
    responsibility:
      "Owns Linux users, groups, sudo, packages, permissions, services, SSH, firewall, processes, logs, scheduled tasks, and configuration review.",
    watchFor: [
      "Required daemons",
      "Privilege changes",
      "Config-file side effects",
      "SSH and networking dependencies",
    ],
  },
  {
    title: "Networking / Cisco Specialist",
    responsibility:
      "Handles Cisco, Packet Tracer, addressing, VLANs, interfaces, routing, device hardening, and network verification.",
    watchFor: [
      "Connectivity loss",
      "Incorrect interface changes",
      "Misconfigured access controls",
      "Dependencies on required services",
    ],
  },
  {
    title: "Forensics Lead",
    responsibility:
      "Reads forensic questions early, identifies evidence-rich areas, records supporting facts, and coordinates before changes that could alter evidence.",
    watchFor: [
      "Evidence being deleted or changed",
      "Questions left until the end",
      "Unsupported answers",
      "Missing documentation",
    ],
  },
];

const communicationRules = [
  {
    rule: "Say what you are changing",
    text: "Before a high-impact action, briefly state the system, the setting, the reason, and what could be affected.",
  },
  {
    rule: "Say when it is done",
    text: "After the change, report whether verification succeeded, failed, or produced a new issue.",
  },
  {
    rule: "Name the owner",
    text: "Every active task should have one clear owner so two teammates do not unknowingly change the same area.",
  },
  {
    rule: "Escalate uncertainty",
    text: "If the task is disruptive or unclear, ask for a second opinion instead of silently guessing.",
  },
  {
    rule: "Use short status updates",
    text: "Communication should be useful, not constant. Share information that affects priorities, dependencies, or risk.",
  },
  {
    rule: "Keep unresolved work visible",
    text: "A problem should not disappear when someone moves on. Put it on the shared task board with the next question to investigate.",
  },
];

const handoffSteps = [
  {
    number: "01",
    title: "State the current condition",
    text: "Describe what you found and what the system is doing now.",
  },
  {
    number: "02",
    title: "State what you already tried",
    text: "List the settings, commands, or checks that have already been used so the next person does not repeat the same path.",
  },
  {
    number: "03",
    title: "Share the evidence",
    text: "Point to the scenario statement, error, log entry, file, setting, or observation that makes the task important.",
  },
  {
    number: "04",
    title: "Define the open question",
    text: "Explain exactly what remains unknown or what decision still needs to be made.",
  },
  {
    number: "05",
    title: "Transfer ownership",
    text: "Confirm who is responsible for the task after the handoff and what follow-up is expected.",
  },
];

const changeAlerts = [
  {
    title: "Networking",
    text: "Firewall, interface, routing, DNS, remote-access, or connectivity changes should be communicated before they are made.",
  },
  {
    title: "Authentication",
    text: "Administrator membership, password policy, account lockout, domain, SSH, or login changes may affect multiple teammates.",
  },
  {
    title: "Required services",
    text: "Stopping, disabling, removing, or reconfiguring a required service can create competition-wide problems.",
  },
  {
    title: "Permissions",
    text: "Share, folder, group, or file permission changes can block legitimate access or alter evidence.",
  },
  {
    title: "Server roles",
    text: "Changes to Active Directory, IIS, file services, DNS, or other server roles may have broad impact.",
  },
  {
    title: "Evidence-rich areas",
    text: "Deleting files, clearing logs, uninstalling software, or cleaning up suspicious items can destroy forensic evidence.",
  },
];

const duplicateWorkSigns = [
  "Two people are checking the same user list without realizing it.",
  "A teammate repeats a command or setting review someone else already completed.",
  "One person reverses another person's change because the reason was never communicated.",
  "Multiple people investigate the same error while other high-value tasks remain untouched.",
  "A task has been completed, but the board still shows it as unassigned or unresolved.",
  "A teammate begins work on a risky area without knowing another task depends on it.",
];

const statusBoard = [
  ["Task", "What needs to be done or investigated?"],
  ["Owner", "Who is currently responsible?"],
  ["Status", "Do Now, Investigate, Coordinate, Revisit, or Done / Verify"],
  ["Evidence", "What supports the task?"],
  ["Risk", "What could be affected?"],
  ["Next step", "What should happen next?"],
];

const workedExample = [
  {
    stage: "Observation",
    text: "The Windows specialist finds an account with unexpected administrator rights.",
  },
  {
    stage: "Communication",
    text: "They tell the coordinator: 'Windows 11: account X has admin rights, scenario lists only Y as admin. I am verifying whether X is still an authorized standard user.'",
  },
  {
    stage: "Coordination",
    text: "The coordinator checks that no forensic question depends on the account state and confirms no teammate is currently using the account for another task.",
  },
  {
    stage: "Action",
    text: "The Windows specialist corrects only the privilege mismatch, then verifies the account remains usable if required.",
  },
  {
    stage: "Closure",
    text: "The task is moved to Done / Verify with the result recorded. The team now knows exactly what changed and why.",
  },
];

const mistakes = [
  {
    title: "Everyone works independently",
    text: "Specialization helps, but total isolation causes duplicate work, conflicting changes, and missed dependencies.",
  },
  {
    title: "The captain becomes another specialist",
    text: "If the coordinator disappears into one image, the team can lose task visibility and time awareness.",
  },
  {
    title: "Long updates for every tiny action",
    text: "Over-communication can become noise. Share changes that affect risk, dependencies, ownership, or priorities.",
  },
  {
    title: "No ownership",
    text: "Tasks without owners are easy to forget, while tasks with multiple owners are easy to duplicate.",
  },
  {
    title: "Silent risky changes",
    text: "A change to networking, authentication, services, permissions, or server roles should not surprise the team.",
  },
  {
    title: "Weak handoffs",
    text: "Saying 'I couldn't fix it' wastes context. A good handoff includes evidence, attempts, and the next open question.",
  },
];

const reflection = [
  "Why should every active task have one clear owner?",
  "What kinds of changes deserve immediate communication to the whole team?",
  "Why is over-communication also a problem?",
  "What information should be included in a useful handoff?",
  "How can the team captain help prevent duplicate work?",
  "Why should a forensic lead coordinate with operating-system specialists before evidence-changing actions?",
];

const checklist = [
  "Assign a coordinator before major work begins.",
  "Assign a clear owner to each active task.",
  "Separate Windows, Server, Linux, Cisco, and Forensics responsibilities when possible.",
  "Keep a shared task board visible.",
  "Communicate high-impact changes before making them.",
  "Report verification results after important changes.",
  "Mark unresolved tasks instead of letting them disappear.",
  "Use second reviews for uncertain or disruptive actions.",
  "Avoid duplicate work by checking ownership first.",
  "Use short, useful status updates.",
  "Use the five-step handoff process when transferring a task.",
  "Re-check ownership and priorities throughout the round.",
];

export default function TeamRolesCommunicationPage() {
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
            href="/cyberpatriot/competition-strategy/prioritization"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/documentation-change-tracking"
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
                Competition Strategy 05
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Team Roles and Communication
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Divide responsibility clearly, communicate high-impact changes,
                and keep the entire team aware of priorities without creating
                unnecessary noise.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                A strong team is not just several skilled people working at the
                same time. It is a coordinated system where ownership,
                evidence, risk, and progress remain visible throughout the
                round.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core roles</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Communication rules</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Handoff process</span>
                  <span className="font-bold text-white">5 steps</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">One coordinated team</span>
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
              What good team coordination should accomplish
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
              Specialization should reduce overlap, not communication
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Assigning roles helps the team cover more ground. But specialists
              still need to report findings that affect other systems,
              dependencies, evidence, or priorities.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Ownership answers the question “Who is responsible?” Communication
              answers “Who else needs to know?”
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Team risk
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Silent changes create invisible dependencies
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A firewall rule, service change, permission update, or account
              modification can affect a teammate who is working somewhere else.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              If a change can affect another person's work, announce it before
              making it and report the result afterward.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Core roles
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Clear ownership across the competition
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Teams may combine roles depending on size. The important idea is
            that responsibilities are explicit rather than assumed.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {roles.map((role) => (
            <article
              key={role.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-black text-white">{role.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {role.responsibility}
              </p>

              <div className="mt-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Watch for
                </p>
                <div className="mt-3 grid gap-2">
                  {role.watchFor.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Communication rules
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Keep updates short, useful, and actionable
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {communicationRules.map((item) => (
              <div
                key={item.rule}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.rule}</h3>
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
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Shared status board
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Make ownership and risk visible
            </h2>

            <div className="mt-5 grid gap-3">
              {statusBoard.map(([field, description]) => (
                <div
                  key={field}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    {field}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              High-impact alerts
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Changes that deserve immediate team awareness
            </h2>

            <div className="mt-5 grid gap-3">
              {changeAlerts.map((item) => (
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
              Task handoffs
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Transfer context, not just responsibility
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              A strong handoff helps the next teammate continue from the current
              state instead of starting over.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {handoffSteps.map((item) => (
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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Duplicate-work warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Signs the team is losing coordination
            </h2>
            <div className="mt-5 grid gap-3">
              {duplicateWorkSigns.map((item, index) => (
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

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Fast communication model
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              System + finding + action + result
            </h2>

            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/60 p-5 text-sm leading-7 text-slate-300">
              <p className="font-black text-white">Example:</p>
              <p className="mt-2">
                “Windows 11: user A has unexpected admin rights. Scenario lists
                only user B as admin. I am verifying whether A is still an
                authorized standard user before changing group membership.”
              </p>
            </div>

            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-5 text-sm leading-7 text-slate-300">
              <p className="font-black text-white">After verification:</p>
              <p className="mt-2">
                “Windows 11: removed unauthorized admin privilege from A,
                account kept because it is an authorized user. Verified A is no
                longer in Administrators.”
              </p>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              This style gives teammates enough context to understand risk and
              progress without requiring a long explanation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Worked coordination example
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              From finding to verified team action
            </h2>
          </div>

          <div className="mt-8 grid gap-4">
            {workedExample.map((item, index) => (
              <div
                key={item.stage}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.28fr_1fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    {String(index + 1).padStart(2, "0")} · {item.stage}
                  </p>
                </div>
                <p className="text-sm leading-7 text-slate-300">{item.text}</p>
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
            Team habits that create avoidable problems
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
              Test your coordination reasoning
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
              Team coordination checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Keep the team synchronized
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
                Documentation and Change Tracking
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how to record important observations, commands,
                changes, risks, and verification results without slowing the
                team down.
              </p>
            </div>

            <Link
              href="/cyberpatriot/competition-strategy/documentation-change-tracking"
              className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
            >
              Open Lesson 06 →
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
            href="/cyberpatriot/competition-strategy/prioritization"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/documentation-change-tracking"
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
