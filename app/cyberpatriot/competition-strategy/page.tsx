import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const strategyTopics = [
  {
    number: "01",
    title: "Competition Strategy Overview",
    route: "/cyberpatriot/competition-strategy/overview",
    summary:
      "Understand what a strong CyberPatriot workflow looks like, why random hardening can cause problems, and how disciplined teams move from scenario review to final verification.",
    focus: [
      "Scenario-first thinking",
      "Evidence before changes",
      "Prioritization",
      "Verification",
    ],
  },
  {
    number: "02",
    title: "Read the Scenario First",
    route: "/cyberpatriot/competition-strategy/read-scenario-first",
    summary:
      "Learn how to turn the scenario, ReadMe, requirements, required users, required services, and forensic questions into a clear competition task list before making changes.",
    focus: [
      "Required users",
      "Required services",
      "Restrictions",
      "Task extraction",
    ],
  },
  {
    number: "03",
    title: "The First 15 Minutes",
    route: "/cyberpatriot/competition-strategy/first-15-minutes",
    summary:
      "Establish a safe baseline, identify high-value areas, review forensic questions early, assign responsibilities, and avoid making rushed changes before the team understands the image.",
    focus: [
      "Baseline review",
      "Initial checks",
      "Team assignments",
      "Early forensics",
    ],
  },
  {
    number: "04",
    title: "Prioritization",
    route: "/cyberpatriot/competition-strategy/prioritization",
    summary:
      "Decide what to work on first by balancing confidence, impact, risk, time, and available evidence. Learn when to fix, when to investigate, and when to move on temporarily.",
    focus: [
      "High-confidence fixes",
      "High-impact tasks",
      "Time traps",
      "Revisit queue",
    ],
  },
  {
    number: "05",
    title: "Team Roles and Communication",
    route: "/cyberpatriot/competition-strategy/team-roles-communication",
    summary:
      "Coordinate Windows, Linux, Server, networking, forensics, and team leadership so people do not duplicate work, overwrite each other's changes, or lose track of important findings.",
    focus: [
      "Role assignment",
      "Change communication",
      "Ownership",
      "Handoffs",
    ],
  },
  {
    number: "06",
    title: "Documentation and Change Tracking",
    route: "/cyberpatriot/competition-strategy/documentation-change-tracking",
    summary:
      "Keep a useful competition record of important observations, commands, changes, possible risks, unresolved issues, and verification results so the team can reason clearly under time pressure.",
    focus: [
      "Change log",
      "Before and after",
      "Commands used",
      "Risk notes",
    ],
  },
  {
    number: "07",
    title: "Evidence-Based Hardening",
    route: "/cyberpatriot/competition-strategy/evidence-based-hardening",
    summary:
      "Learn how to justify a defensive change using scenario evidence, system evidence, policy evidence, logs, configuration state, and verification instead of blindly applying a generic checklist.",
    focus: [
      "Justification",
      "System evidence",
      "Policy evidence",
      "Verification",
    ],
  },
  {
    number: "08",
    title: "Protect Required Services",
    route: "/cyberpatriot/competition-strategy/protect-required-services",
    summary:
      "Recognize legitimate users, services, applications, networking requirements, permissions, and system functions that must remain available while the team improves security.",
    focus: [
      "Service awareness",
      "Availability",
      "Permissions safety",
      "Network safety",
    ],
  },
  {
    number: "09",
    title: "Forensics Strategy",
    route: "/cyberpatriot/competition-strategy/forensics-strategy",
    summary:
      "Approach forensic questions early, preserve useful evidence, search systematically, document supporting evidence, and avoid making changes that destroy information before it is investigated.",
    focus: [
      "Read questions early",
      "Preserve evidence",
      "Search methodically",
      "Record support",
    ],
  },
  {
    number: "10",
    title: "When You Get Stuck",
    route: "/cyberpatriot/competition-strategy/when-you-get-stuck",
    summary:
      "Use a recovery process instead of repeating the same failed attempt: stop, re-read the scenario, inspect errors or logs, ask a teammate for a second look, and return later if necessary.",
    focus: [
      "Reset your approach",
      "Inspect errors",
      "Ask for review",
      "Move and return",
    ],
  },
  {
    number: "11",
    title: "Final Review Workflow",
    route: "/cyberpatriot/competition-strategy/final-review-workflow",
    summary:
      "Use the final portion of the round to revisit scenario requirements, users, updates, security tools, services, software, permissions, networking, forensics, and risky changes.",
    focus: [
      "Requirements check",
      "System verification",
      "Unresolved items",
      "Final pass",
    ],
  },
  {
    number: "12",
    title: "Strategy Checklist",
    route: "/cyberpatriot/competition-strategy/strategy-checklist",
    summary:
      "Condense the entire workflow into a practical practice-round checklist that students can keep open while training and eventually internalize through repetition.",
    focus: [
      "Before changes",
      "During work",
      "Team checks",
      "Final review",
    ],
  },
];

const workflowPhases = [
  {
    phase: "Phase 1",
    title: "Understand",
    text: "Read the scenario, identify requirements, review forensic questions, and understand what the machine is supposed to do.",
  },
  {
    phase: "Phase 2",
    title: "Baseline",
    text: "Observe the current state before making broad changes. Know the users, services, network state, security tools, software, and obvious problems.",
  },
  {
    phase: "Phase 3",
    title: "Prioritize",
    text: "Choose high-confidence, high-value work first. Separate clear fixes from issues that need more evidence.",
  },
  {
    phase: "Phase 4",
    title: "Fix",
    text: "Make controlled defensive changes, one area at a time, while communicating important changes to the rest of the team.",
  },
  {
    phase: "Phase 5",
    title: "Verify",
    text: "Confirm the system still functions, required services remain available, and the change actually improved the intended security condition.",
  },
  {
    phase: "Phase 6",
    title: "Review",
    text: "Return to unresolved items, forensic questions, scenario requirements, and risky changes before the round ends.",
  },
];

const firstFifteen = [
  "Read the scenario and ReadMe completely.",
  "Highlight required users, administrators, services, software, and special restrictions.",
  "Read every forensic question before changing evidence-rich areas.",
  "Confirm who is responsible for each operating system, networking, forensics, and coordination.",
  "Establish the current system state before applying broad security changes.",
  "Write down obvious high-confidence issues instead of immediately changing everything you notice.",
];

const priorityRules = [
  {
    title: "High confidence + high value",
    text: "Usually handle these first. The team understands the issue, has clear evidence, and can verify the result safely.",
  },
  {
    title: "High value + uncertain",
    text: "Investigate before changing. A major setting can be important and still be dangerous to modify without understanding dependencies.",
  },
  {
    title: "Low value + time consuming",
    text: "Place it in a revisit queue. Do not let one uncertain task consume the time needed for many clearer tasks.",
  },
  {
    title: "Potentially disruptive",
    text: "Pause and verify requirements before touching it. Services, networking, permissions, domain roles, and authentication changes can affect the whole image.",
  },
];

const teamRoles = [
  {
    role: "Team Captain / Coordinator",
    detail:
      "Tracks scenario requirements, team progress, unresolved items, major changes, and time. The coordinator should not become so busy with one machine that the team loses overall awareness.",
  },
  {
    role: "Windows Specialist",
    detail:
      "Owns Windows workstation review and communicates major user, policy, service, firewall, update, Defender, software, and permission changes.",
  },
  {
    role: "Windows Server Specialist",
    detail:
      "Handles server-specific work while protecting required roles, Active Directory-related functions, Group Policy, shares, IIS, and other scenario-dependent services.",
  },
  {
    role: "Linux Specialist",
    detail:
      "Owns Linux users, sudo, packages, services, SSH, firewall, permissions, logs, scheduled jobs, networking, and configuration review.",
  },
  {
    role: "Networking / Cisco Specialist",
    detail:
      "Handles networking knowledge, Packet Tracer, Cisco device configuration, addressing, VLANs, interfaces, routing, and network verification.",
  },
  {
    role: "Forensics Lead",
    detail:
      "Tracks forensic questions, evidence locations, supporting facts, and answers while coordinating with OS specialists so evidence is not accidentally changed first.",
  },
];

const changeLogFields = [
  "Time",
  "System or image",
  "Area being reviewed",
  "What was observed",
  "What was changed",
  "Why the change was justified",
  "Command or setting used",
  "Verification result",
  "Possible side effect or follow-up",
  "Person responsible",
];

const finalReview = [
  "Re-read the scenario and confirm all explicit requirements were addressed.",
  "Review authorized and unauthorized users and administrators.",
  "Check password and account policy decisions against the scenario.",
  "Confirm security tools, firewall, and updates are in an appropriate state.",
  "Review important services and confirm required functionality still works.",
  "Review installed software, startup behavior, and scheduled activity.",
  "Re-check file, folder, share, and permission decisions.",
  "Confirm networking still works and required remote or server functions remain available.",
  "Return to every forensic question and verify the answer is supported by evidence.",
  "Review the change log for anything risky, incomplete, or not yet verified.",
  "Ask teammates for unresolved issues before time runs out.",
  "Stop making unnecessary last-minute changes that cannot be verified.",
];

export default function CompetitionStrategyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/cyberpatriot"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Back to CyberPatriot
          </Link>

          <Link
            href="/"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Home
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                CyberPatriot Training Hub
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Competition Strategy
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Build the workflow that guides every operating system,
                networking task, forensic question, and team decision during
                CyberPatriot practice.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The goal is not to memorize a giant list of changes. Strong
                teams understand the scenario, establish a baseline, prioritize
                evidence, make controlled defensive changes, communicate, and
                verify that important functionality still works.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#strategy-pathway"
                  className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore Strategy Pathway
                </Link>

                <Link
                  href="#workflow"
                  className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  View Core Workflow
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Strategy Scope
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Strategy topics</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core workflow phases</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Controlled defense</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Applies to</span>
                  <span className="font-bold text-white">Every section</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="workflow"
        className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"
      >
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core competition workflow
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Understand. Baseline. Prioritize. Fix. Verify. Review.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              This six-phase cycle should guide the team throughout a practice
              round. Individual Windows, Server, Linux, Cisco, and Forensics
              sections will later show exactly how the same workflow applies in
              each environment.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {workflowPhases.map((item) => (
              <div
                key={item.phase}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                  {item.phase}
                </p>
                <h3 className="mt-3 text-xl font-black text-white">
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

      <section
        id="strategy-pathway"
        className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"
      >
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Full strategy pathway
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              Competition Strategy Topics
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-slate-400">
            These topics build from the opening minutes of a round through team
            coordination, evidence-based hardening, troubleshooting, and final
            review.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {strategyTopics.map((topic) => (
            <Link
              key={topic.number}
              href={topic.route}
              className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20 transition hover:border-cyan-400/50 hover:bg-slate-900 hover:shadow-cyan-950/20"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Strategy
                </span>
                <span className="text-sm font-black text-slate-600">
                  {topic.number}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-black text-white">
                {topic.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {topic.summary}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2">
                {topic.focus.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-xs font-semibold leading-5 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-center text-sm font-bold text-cyan-200 transition group-hover:border-cyan-300/60 group-hover:bg-cyan-400/15 group-hover:text-white">
                Open Lesson →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Opening routine
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              What to do in the first 15 minutes
            </h2>

            <div className="mt-5 grid gap-3">
              {firstFifteen.map((item, index) => (
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
              Decision making
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Prioritize with confidence, impact, risk, and time
            </h2>

            <div className="mt-5 grid gap-3">
              {priorityRules.map((rule) => (
                <div
                  key={rule.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-bold text-white">{rule.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {rule.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Team coordination
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Give every role ownership without creating silos
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Teams work faster when each person owns an area but still reports
              important findings and risky changes. Roles should prevent
              duplication, not prevent collaboration.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {teamRoles.map((item) => (
              <div
                key={item.role}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.role}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Important principle
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Do not confuse a checklist with evidence
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A checklist can remind you where to look. It should not tell you
              to change every setting the same way on every image.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Before a high-impact change, ask what requirement, observation,
              policy, log entry, configuration state, or other evidence
              justifies it. Then verify the result.
            </p>

            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Avoid destructive or disruptive changes when you cannot explain
              why they are needed or how you will verify that required
              functionality still works.
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Change tracking
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Keep a competition change log
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              A simple change log makes it easier to coordinate, troubleshoot,
              undo risky decisions, and remember what still needs verification.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {changeLogFields.map((field) => (
                <div
                  key={field}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm font-semibold text-slate-300"
                >
                  {field}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Final review
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Finish with verification, not panic
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              The final part of a round should become more deliberate, not more
              chaotic. Re-check requirements and unresolved issues before
              making last-minute changes that cannot be tested.
            </p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalReview.map((item, index) => (
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

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Next training area
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Windows 11
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                The Windows 11 section will take this general strategy and show
                exactly how to apply it to Windows users, policies, Defender,
                firewall, services, updates, software, permissions, logs, and
                PowerShell.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-950/70 px-5 py-3 text-center text-sm font-bold text-slate-300">
              Windows 11 coming next
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap justify-between gap-3 border-t border-slate-800 pt-8">
          <Link
            href="/cyberpatriot"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Back to CyberPatriot
          </Link>

          <Link
            href="/"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
