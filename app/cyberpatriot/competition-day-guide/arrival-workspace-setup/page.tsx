import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const setupZones = [
  {
    title: "Power & Devices",
    items: [
      "Connect competition devices to reliable power before the round begins.",
      "Keep chargers, spare cables, and approved accessories within reach.",
      "Avoid moving devices once the team has confirmed a stable setup.",
      "Make sure vents and cooling areas are not blocked by papers or bags.",
    ],
  },
  {
    title: "Network & Connectivity",
    items: [
      "Confirm the expected wired or approved wireless connection before the clock starts.",
      "Check that Ethernet cables are seated properly and routed where they will not be pulled loose.",
      "Do not begin troubleshooting competition systems until the basic workspace network path is known to be stable.",
      "Keep spare cables nearby when possible.",
    ],
  },
  {
    title: "Reference Area",
    items: [
      "Place the most-used checklists and command references where the team can access them quickly.",
      "Keep platform-specific references grouped instead of mixing Windows, Linux, Cisco, and forensics notes together.",
      "Make sure important offline files open correctly before the round.",
      "Avoid covering the workspace with too many papers or duplicate notes.",
    ],
  },
  {
    title: "Shared Status Area",
    items: [
      "Prepare the shared change log, status board, or team tracking document.",
      "Create clear columns for platform, owner, status, finding, change, verification, and unresolved items.",
      "Make sure every teammate knows where updates belong.",
      "Use one shared operational view instead of multiple disconnected tracking systems.",
    ],
  },
  {
    title: "Seating & Ownership",
    items: [
      "Seat teammates so platform ownership and communication make sense.",
      "Keep the team lead or coordinator where they can see the shared status view easily.",
      "Avoid placing teammates with frequent dependencies too far apart if the room allows flexibility.",
      "Leave enough room for notebooks, references, and cables without creating clutter.",
    ],
  },
  {
    title: "Workspace Calm",
    items: [
      "Remove unnecessary bags, packaging, food, and loose equipment from the main working area.",
      "Set water and personal items where they will not interfere with devices.",
      "Keep the competition area predictable so the team does not waste attention searching for things.",
      "Finish setup before opening deep technical tools.",
    ],
  },
];

const arrivalSequence = [
  {
    step: "01",
    title: "Enter and inventory",
    detail:
      "Confirm the team, equipment, power adapters, cables, references, and required personal items arrived.",
  },
  {
    step: "02",
    title: "Build the workspace",
    detail:
      "Place devices, power, networking, references, and shared status tools in predictable positions.",
  },
  {
    step: "03",
    title: "Verify basic access",
    detail:
      "Check that required local files, collaboration tools, and approved accounts are accessible.",
  },
  {
    step: "04",
    title: "Confirm ownership",
    detail:
      "Review which teammate is expected to own each platform and who is coordinating the round.",
  },
  {
    step: "05",
    title: "Prepare tracking",
    detail:
      "Open the shared change log or status board and confirm everyone can use it.",
  },
  {
    step: "06",
    title: "Stop setup changes",
    detail:
      "Once the environment is stable, stop reorganizing and wait for the round instructions.",
  },
];

const doNotDo = [
  "Rearrange cables repeatedly after connectivity is stable.",
  "Install new tools simply because there is extra time.",
  "Start broad hardening before the competition begins.",
  "Change account settings without a scenario-driven reason.",
  "Open many unrelated windows and terminals before ownership is assigned.",
  "Scatter references across multiple devices with no shared structure.",
  "Let one teammate control the only copy of the shared status notes.",
  "Leave chargers or Ethernet cables where people can trip over them.",
  "Begin technical troubleshooting before confirming the basic workspace setup.",
  "Use the arrival period as an unplanned practice round.",
];

const workspaceChecklist = [
  "All team members are present or accounted for.",
  "Competition devices are powered and stable.",
  "Chargers are connected or immediately available.",
  "Ethernet or approved network access is confirmed.",
  "Spare cable or backup hardware is available if possible.",
  "Platform references are organized.",
  "Shared status log is open.",
  "Every teammate knows where to record changes.",
  "Platform ownership is roughly confirmed.",
  "Team lead has visibility into the shared status view.",
  "Workspace clutter is removed.",
  "No unnecessary technical changes are still happening.",
];

const strongSetup = [
  {
    weak: "Everyone can sit wherever and move later.",
    better:
      "Choose seats with platform ownership, communication, and cable stability in mind before the round starts.",
  },
  {
    weak: "We can open all our tools now just in case.",
    better:
      "Open only the references and tracking tools needed for the start so the workspace stays easy to understand.",
  },
  {
    weak: "The cable works, so leave it across the floor.",
    better:
      "Route power and network cables so they stay connected and do not create a trip or accidental-disconnect risk.",
  },
  {
    weak: "Each person can track their own progress.",
    better:
      "Use one shared operational view so ownership, findings, and verification stay visible to the entire team.",
  },
  {
    weak: "Let's start checking systems while everyone else sets up.",
    better:
      "Finish the basic workspace first so the team starts from a coordinated and stable environment.",
  },
  {
    weak: "We have extra time, so let's install another tool.",
    better:
      "Protect the known-good environment and use extra time to organize references or review the communication plan.",
  },
];

const finalQuestions = [
  "Does every competition device have reliable power?",
  "Is the expected network connection physically stable?",
  "Can every teammate access the shared status system?",
  "Are the most important references easy to reach?",
  "Does every platform have an expected owner?",
  "Can the team lead see the overall status clearly?",
  "Are cables and equipment arranged safely?",
  "Is the workspace calm enough that the team can focus when the round starts?",
];

const finalChecklist = [
  "Power is stable for every competition device.",
  "Network connectivity is physically stable.",
  "Required accounts and local files are accessible.",
  "References are grouped and easy to reach.",
  "Shared change log or status board is ready.",
  "Every teammate knows where to record updates.",
  "Platform ownership is roughly confirmed.",
  "Team lead or coordinator has a clear view of team status.",
  "Cables are routed safely.",
  "Workspace clutter is removed.",
  "Unnecessary applications and setup tasks are closed.",
  "The team is ready to wait for the scenario instead of making premature changes.",
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
      {description && (
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function ArrivalWorkspaceSetupPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/competition-day-guide"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Competition Day Guide
            </Link>

            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/competition-day-guide/night-before-preparation"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/competition-day-guide/team-roles-communication-plan"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Next Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Competition Day Guide &middot; Guide 02 &middot; Arrival
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Arrival &amp; Workspace Setup
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                The arrival period should remove distractions before the clock
                starts. Build a stable workspace, confirm basic access, prepare
                the shared status system, and make ownership visible.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                A clean setup reduces accidental disconnects, duplicate work,
                missing references, and the frantic first few minutes that
                happen when the team starts before it is organized.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Setup Goal
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Power</span>
                  <span className="font-bold text-white">Stable</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Network</span>
                  <span className="font-bold text-white">Confirmed</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Status board</span>
                  <span className="font-bold text-white">Ready</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Ownership</span>
                  <span className="font-bold text-white">Visible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Arrival rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Finish the workspace before beginning the competition work
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Stable power, network access, references, ownership, and shared
            tracking should already be in place when the team begins reading
            the scenario.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Arrival sequence"
            title="Set up in a predictable order"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {arrivalSequence.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black text-cyan-300">{item.step}</p>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Six setup zones"
            title="Organize the workspace around how the team will actually work"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {setupZones.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{area.title}</h3>

                <div className="mt-4 grid gap-2">
                  {area.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm leading-6 text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Do not do this
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Arrival time is for setup, not experimentation
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {doNotDo.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-red-200">
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
          <SectionHeading
            label="Workspace check"
            title="Confirm the room is ready before the round"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {workspaceChecklist.map((item, index) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Weak setup vs better setup
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Replace arrival chaos with predictable preparation
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {strongSetup.map((item) => (
              <div
                key={item.weak}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                  Weak setup
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {item.weak}
                </p>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Better setup
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.better}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Final questions"
            title="Ask these before the clock starts"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalQuestions.map((question, index) => (
              <div
                key={question}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Arrival &amp; Workspace final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Start the round from a stable, shared, and organized environment
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalChecklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-emerald-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/competition-day-guide"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Competition Day Guide
            </Link>

            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/competition-day-guide/night-before-preparation"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/competition-day-guide/team-roles-communication-plan"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Next Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
