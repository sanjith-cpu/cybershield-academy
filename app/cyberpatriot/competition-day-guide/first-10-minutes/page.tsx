import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const minutePlan = [
  {
    window: "0-2 minutes",
    title: "Read before touching",
    detail:
      "Open the scenario, README, or competition instructions and identify required users, services, remote access, special restrictions, and scoring-sensitive functions.",
  },
  {
    window: "2-4 minutes",
    title: "Assign ownership",
    detail:
      "Confirm who owns Windows, Server, Linux, Cisco, forensics, and the shared status log. Avoid multiple people beginning on the same platform.",
  },
  {
    window: "4-6 minutes",
    title: "Capture the first baseline",
    detail:
      "Record the obvious starting state: approved users, privileged groups, required services, listeners, network status, and anything immediately suspicious.",
  },
  {
    window: "6-8 minutes",
    title: "Rank the first priorities",
    detail:
      "Separate mission-breaking issues, high-confidence security problems, useful hardening, and low-confidence findings.",
  },
  {
    window: "8-10 minutes",
    title: "Begin the first controlled work cycle",
    detail:
      "Start with the highest-value issue that has clear evidence and a safe verification path. Do not launch several broad changes at once.",
  },
];

const firstActions = [
  {
    title: "Read the mission",
    items: [
      "Identify required users and administrators.",
      "Identify required services and applications.",
      "Identify approved remote-access methods.",
      "Identify prohibited actions or special constraints.",
      "Note any system that has a special role in the scenario.",
    ],
  },
  {
    title: "Confirm ownership",
    items: [
      "One current owner per platform.",
      "One person watching the shared log.",
      "One lead coordinating priorities.",
      "One verifier available for high-impact changes.",
      "Escalation path understood before deep work begins.",
    ],
  },
  {
    title: "Baseline the environment",
    items: [
      "Approved and privileged users.",
      "Critical service state.",
      "Important listeners and remote-access paths.",
      "Basic network reachability.",
      "Obvious persistence or suspicious startup items.",
    ],
  },
  {
    title: "Prioritize",
    items: [
      "Mission-breaking issues first.",
      "Unauthorized privilege and dangerous persistence next.",
      "High-confidence service and network exposure after that.",
      "Useful hardening only after critical work is under control.",
      "Low-confidence items remain unresolved until evidence improves.",
    ],
  },
];

const doNotRush = [
  "Bulk account deletion",
  "Disabling unfamiliar services",
  "Turning off RDP or SSH automatically",
  "Broad firewall rewrites",
  "Recursive permission changes",
  "Large ACL edits",
  "Unplanned software removal",
  "Deleting suspicious files before evidence capture",
  "Rebooting systems to see what happens",
  "Changing several platforms before the team has a shared baseline",
];

const priorityModel = [
  {
    level: "P1",
    title: "Mission-breaking or critical",
    detail:
      "Required service failure, approved access failure, dangerous unauthorized privilege, major persistence, or broken network path.",
  },
  {
    level: "P2",
    title: "High-confidence security issue",
    detail:
      "The evidence is strong, the risk is meaningful, and the remediation is understood and verifiable.",
  },
  {
    level: "P3",
    title: "Useful hardening",
    detail:
      "Security improvement with lower urgency than confirmed privilege, persistence, service, or network issues.",
  },
  {
    level: "P4",
    title: "Low-confidence or cosmetic",
    detail:
      "The evidence is weak, the value is low, or the change carries more risk than the likely benefit.",
  },
];

const strongOpening = [
  {
    weak: "Start securing the machine immediately.",
    better:
      "Read the scenario, identify required functions, capture the baseline, then begin with the highest-value confirmed issue.",
  },
  {
    weak: "Everyone should check for something suspicious.",
    better:
      "Assign platforms and issue ownership before parallel work begins.",
  },
  {
    weak: "Disable anything that is not obviously needed.",
    better:
      "Classify accounts, services, listeners, and tasks before changing them.",
  },
  {
    weak: "Fix easy settings first to build points quickly.",
    better:
      "Prioritize mission impact, security impact, evidence confidence, and reversibility.",
  },
  {
    weak: "We can document later.",
    better:
      "Start the shared log immediately so the original state and first changes are not lost.",
  },
  {
    weak: "If the first command works, keep going.",
    better:
      "Verify the result and required functionality before stacking more changes on top.",
  },
];

const firstBaseline = [
  "Hostname / device identity",
  "System time and time zone",
  "Approved users",
  "Privileged groups",
  "Required services",
  "Remote-access state",
  "Important listeners",
  "Basic IP / route state",
  "Critical shares or applications",
  "Obvious scheduled tasks / cron / timers",
  "Immediate suspicious processes or services",
  "Current platform owner",
];

const openingQuestions = [
  "What absolutely must keep working?",
  "Which users and administrators are approved?",
  "Which services or roles are explicitly required?",
  "Which remote-access methods are required or forbidden?",
  "Which platform has the highest current risk?",
  "What evidence should be preserved before remediation?",
  "Who owns each system right now?",
  "What is the first change we can safely verify?",
];

const warningSigns = [
  "A teammate is already making changes before the scenario is read.",
  "Two people are working the same platform.",
  "Nobody has written down required services.",
  "The team cannot say which account changes are approved.",
  "A broad firewall or service change is being attempted immediately.",
  "The shared log is still empty after several minutes.",
  "No one knows what the current top priority is.",
  "The team is making changes faster than it is verifying them.",
];

const finalChecklist = [
  "Scenario / README was read before major hardening.",
  "Required users and administrators were identified.",
  "Required services and remote-access paths were identified.",
  "Special restrictions were recorded.",
  "Platform ownership was assigned.",
  "Shared status log was opened.",
  "Initial baseline was captured.",
  "High-value evidence was preserved.",
  "First priorities were ranked.",
  "No broad low-confidence changes were started.",
  "The first remediation has a verification plan.",
  "The team knows what it is doing next.",
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

export default function FirstTenMinutesPage() {
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
              href="/cyberpatriot/competition-day-guide/team-roles-communication-plan"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/competition-day-guide/mission-readme-extraction"
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
                Competition Day Guide &middot; Guide 04 &middot; First 10 Minutes
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                First 10 Minutes
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                The first ten minutes should reduce uncertainty, not maximize
                the number of changes. Read the mission, assign ownership,
                capture the baseline, rank priorities, and begin one controlled
                work cycle.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                A disciplined opening prevents the team from breaking required
                services, destroying evidence, duplicating work, or spending
                the round recovering from rushed decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Opening Goal
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Mission</span>
                  <span className="font-bold text-white">Understood</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Ownership</span>
                  <span className="font-bold text-white">Assigned</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Baseline</span>
                  <span className="font-bold text-white">Captured</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Priorities</span>
                  <span className="font-bold text-white">Ranked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Opening rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            The first ten minutes are for orientation before acceleration
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Teams move faster later when they understand what must stay
            functional, who owns each platform, and which findings actually
            deserve immediate attention.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="10-minute plan"
            title="Use the opening in short, deliberate blocks"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {minutePlan.map((item) => (
              <div
                key={item.window}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black text-cyan-300">
                  {item.window}
                </p>
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
        <div className="grid gap-5 lg:grid-cols-2">
          {firstActions.map((area) => (
            <div
              key={area.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7"
            >
              <h2 className="text-2xl font-black text-white">{area.title}</h2>

              <div className="mt-6 grid gap-3">
                {area.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Do not rush into
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Avoid high-impact changes before context is clear
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {doNotRush.map((item, index) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Priority model
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Rank work before the team scatters
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {priorityModel.map((item) => (
              <div
                key={item.level}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-2xl font-black text-cyan-300">
                  {item.level}
                </p>
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
            label="Opening baseline"
            title="Capture enough state to know what changes later"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {firstBaseline.map((item, index) => (
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
            Weak opening vs better opening
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Replace immediate action with informed action
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {strongOpening.map((item) => (
              <div
                key={item.weak}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                  Weak opening
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {item.weak}
                </p>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Better opening
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
            label="Opening questions"
            title="The team should be able to answer these by minute ten"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {openingQuestions.map((question, index) => (
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
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Opening warning signs
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            These signals mean the team is moving faster than its understanding
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {warningSigns.map((item, index) => (
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
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            First 10 Minutes final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Finish the opening with context, ownership, and one safe next action
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
              href="/cyberpatriot/competition-day-guide/team-roles-communication-plan"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/competition-day-guide/mission-readme-extraction"
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
