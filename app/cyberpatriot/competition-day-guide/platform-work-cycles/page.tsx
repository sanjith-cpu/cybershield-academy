import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cycleSteps = [
  {
    step: "01",
    title: "Inspect",
    detail:
      "Collect enough current-state evidence to understand the account, service, process, task, rule, interface, or file before changing it.",
  },
  {
    step: "02",
    title: "Decide",
    detail:
      "Compare the evidence with the mission, required functionality, team priorities, and likely risk of the proposed action.",
  },
  {
    step: "03",
    title: "Change Narrowly",
    detail:
      "Apply the smallest justified remediation instead of bundling several unrelated changes together.",
  },
  {
    step: "04",
    title: "Verify",
    detail:
      "Confirm both the intended security result and the required mission function that could have been affected.",
  },
  {
    step: "05",
    title: "Document",
    detail:
      "Record the original state, evidence, change, verification, unresolved questions, and any dependency the team should know.",
  },
];

const platformPatterns = [
  {
    title: "Windows 11",
    focus:
      "Accounts, local Administrators, Defender, Firewall, RDP, services, scheduled tasks, startup items, event evidence, and mission applications.",
    caution:
      "Avoid broad service disabling, mass account cleanup, or firewall rewrites without dependency evidence.",
  },
  {
    title: "Windows Server",
    focus:
      "Roles, domain or local identity, service accounts, shares, NTFS permissions, remote management, event evidence, and role dependencies.",
    caution:
      "A server change can affect many users at once, so verification must include the role it is supposed to provide.",
  },
  {
    title: "Linux",
    focus:
      "Users, sudo, permissions, SSH, services, systemd, cron or timers, listeners, logs, packages, and required applications.",
    caution:
      "Avoid recursive permission changes, unvalidated sudoers edits, and service removals based only on unfamiliar names.",
  },
  {
    title: "Cisco & Networking",
    focus:
      "Interfaces, VLANs, trunks, routes, ACLs, management access, port security, counters, and end-to-end reachability.",
    caution:
      "Change one layer at a time so the team can tell whether a failure comes from switching, routing, policy, or management access.",
  },
  {
    title: "Forensics",
    focus:
      "Preservation, hashes, timestamps, processes, logs, account evidence, persistence clues, network artifacts, and timeline correlation.",
    caution:
      "Preserve evidence before remediation and avoid turning a suspicious clue into a conclusion without correlation.",
  },
  {
    title: "Shared Operations",
    focus:
      "Priority board, evidence log, handoffs, dependencies, verification ownership, and team-wide risk decisions.",
    caution:
      "Platform work is not complete until the team can understand what changed and whether it was verified.",
  },
];

const stopPoints = [
  "The proposed change affects a required service or role.",
  "The team cannot explain why the current state is unsafe.",
  "The evidence is based only on an unfamiliar name or setting.",
  "The rollback path is unclear.",
  "Another teammate is already changing the same system.",
  "The change crosses platforms or dependencies.",
  "Verification would require a reboot or other high-impact action.",
  "The round is late enough that recovery time is shrinking.",
];

const verificationLayers = [
  {
    title: "Security Result",
    question: "Did the risky condition actually improve?",
  },
  {
    title: "Identity",
    question: "Can approved users and administrators still authenticate as expected?",
  },
  {
    title: "Service",
    question: "Does the required service still start and perform its intended role?",
  },
  {
    title: "Network",
    question: "Can required traffic still reach the intended destination?",
  },
  {
    title: "Application",
    question: "Does the mission application or workflow still function?",
  },
  {
    title: "Persistence",
    question: "Will the secure state survive restart, reload, or service recovery when appropriate?",
  },
];

const weakVsBetter = [
  {
    weak: "Make every obvious fix on the page before testing anything.",
    better:
      "Make one justified change, verify it, document it, then continue with the next issue.",
  },
  {
    weak: "Use the exact same checklist order on every platform.",
    better:
      "Use the same decision discipline while allowing each platform to follow its natural technical structure.",
  },
  {
    weak: "If a setting looks insecure, change it immediately.",
    better:
      "Inspect mission context, dependencies, and evidence before changing high-impact settings.",
  },
  {
    weak: "Verification means the command completed without an error.",
    better:
      "Verification means the security objective was achieved and required functionality still works.",
  },
  {
    weak: "Document only major findings.",
    better:
      "Document enough original state, change, verification, and unresolved context to support handoffs and rollback.",
  },
  {
    weak: "Keep working until the platform looks perfectly hardened.",
    better:
      "Stop when higher-value work exists elsewhere or when further changes carry more risk than likely benefit.",
  },
];

const workCycleRecord = [
  "System / platform",
  "Owner",
  "Finding",
  "Evidence",
  "Mission dependency",
  "Planned change",
  "Rollback path",
  "Security verification",
  "Mission verification",
  "Final status",
  "Unresolved question",
  "Next action",
];

const escalationSignals = [
  "Required functionality breaks after a change.",
  "Evidence conflicts with the mission instructions.",
  "Two systems appear to depend on the same account, service, or network path.",
  "A platform owner cannot safely verify the result alone.",
  "Rollback fails or the original state cannot be restored.",
  "A high-impact change is proposed late in the round.",
  "The same issue keeps reappearing after remediation.",
  "The team cannot agree whether the finding is actually malicious or unauthorized.",
];

const finalQuestions = [
  "Are we inspecting before changing?",
  "Is the change tied to mission context and evidence?",
  "Is this the smallest effective remediation?",
  "Do we know how to undo it if verification fails?",
  "Are we checking both security and mission functionality?",
  "Is the result recorded in the shared team log?",
  "Does another teammate need to know about a dependency?",
  "Is this still the highest-value use of time?",
];

const finalChecklist = [
  "Each active platform has one clear owner.",
  "Inspection happens before high-impact remediation.",
  "Mission dependencies are considered before changes.",
  "Broad changes are broken into smaller verifiable actions.",
  "Rollback is understood for risky work.",
  "Security results are verified after changes.",
  "Required services and workflows are also verified.",
  "Important evidence is preserved before remediation.",
  "The shared log reflects current platform status.",
  "Cross-platform dependencies are escalated early.",
  "Low-value perfection does not block higher-priority work.",
  "Risk tolerance decreases as the round gets later.",
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

export default function PlatformWorkCyclesPage() {
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
              href="/cyberpatriot/competition-day-guide/baseline-priority-board"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/competition-day-guide/evidence-change-log-discipline"
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
                Competition Day Guide &middot; Guide 07 &middot; Work Cycles
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Platform Work Cycles
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                The main round should feel controlled even when the technical
                work is different on every platform. Inspect, decide, change
                narrowly, verify, and document without forcing Windows, Linux,
                Cisco, and forensics into identical technical steps.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The repeated discipline is the decision process, not a rigid
                checklist. Each platform still needs the tools and reasoning
                that fit its own architecture.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Work-Cycle Goal
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Evidence</span>
                  <span className="font-bold text-white">Before change</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Remediation</span>
                  <span className="font-bold text-white">Narrow</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Verification</span>
                  <span className="font-bold text-white">Two-sided</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Documentation</span>
                  <span className="font-bold text-white">Continuous</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Work-cycle rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            One justified change is easier to verify than five simultaneous changes
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Controlled work preserves cause and effect. When several variables
            change at once, the team may not know which action improved the
            system or which action broke required functionality.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Core cycle"
            title="Use a repeatable decision discipline"
            description="The cycle stays consistent even when the technical checks differ by platform."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {cycleSteps.map((item) => (
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
            label="Platform patterns"
            title="Keep the discipline consistent while letting the technical work stay natural"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {platformPatterns.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>

                <p className="mt-4 text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                  Focus
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.focus}
                </p>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                  Caution
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {item.caution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Stop points
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Pause when the evidence, dependency, or recovery path is unclear
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {stopPoints.map((item, index) => (
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
            Verification layers
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Prove security improvement without losing the mission
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {verificationLayers.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-cyan-300">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Work-cycle record"
            title="Capture enough context for verification, rollback, and handoff"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {workCycleRecord.map((item, index) => (
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
            Weak habit vs better habit
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Replace fast-looking work with controlled progress
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {weakVsBetter.map((item) => (
              <div
                key={item.weak}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                  Weak habit
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {item.weak}
                </p>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Better habit
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
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Escalation signals
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Some work should become a team decision
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {escalationSignals.map((item, index) => (
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
            label="Cycle questions"
            title="Ask these before moving to the next change"
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
            Platform Work Cycles final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Keep progress explainable, verifiable, and safe to hand off
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
              href="/cyberpatriot/competition-day-guide/baseline-priority-board"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/competition-day-guide/evidence-change-log-discipline"
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
