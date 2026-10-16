import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mistakes = [
  {
    title: "Skipping the mission",
    what:
      "Teams sometimes begin hardening immediately without first extracting required users, services, remote-access needs, prohibited changes, and scoring constraints.",
    consequence:
      "A technically secure change can still be wrong if it breaks something the scenario explicitly requires.",
    replacement:
      "Read the mission first, write down required functionality, and keep those requirements visible throughout the round.",
  },
  {
    title: "Hardening before baselining",
    what:
      "Changing settings before recording the original state makes it difficult to explain what was already present and what the team changed.",
    consequence:
      "Evidence disappears, troubleshooting becomes harder, and the team may not know which change caused a regression.",
    replacement:
      "Capture users, services, listeners, privileged groups, network state, and other high-value baseline information before major remediation.",
  },
  {
    title: "Treating every unfamiliar item as malicious",
    what:
      "An unknown account, service, process, share, task, or listening port is sometimes removed simply because it is unfamiliar.",
    consequence:
      "Legitimate mission functionality, service dependencies, or useful forensic evidence can be destroyed.",
    replacement:
      "Classify first: required, expected, suspicious, unnecessary, or unresolved.",
  },
  {
    title: "Making broad changes",
    what:
      "Teams may disable many services, rewrite multiple firewall rules, change several ACL entries, or remove many privileges at once.",
    consequence:
      "If something breaks, the cause is unclear and recovery becomes slower.",
    replacement:
      "Make one justified change at a time whenever practical and verify the result before continuing.",
  },
  {
    title: "Chasing low-value hardening first",
    what:
      "Teams sometimes spend early time on cosmetic or low-impact settings while unauthorized privilege, suspicious persistence, or broken required services remain unresolved.",
    consequence:
      "High-risk issues survive while valuable competition time is lost.",
    replacement:
      "Prioritize findings by mission impact, security impact, evidence confidence, and reversibility.",
  },
  {
    title: "No clear ownership",
    what:
      "Multiple teammates may investigate or modify the same platform without knowing what others are doing.",
    consequence:
      "Work is duplicated, changes conflict, and evidence or required functionality may be lost.",
    replacement:
      "Assign clear platform or task ownership and use short status handoffs.",
  },
  {
    title: "Changing without evidence",
    what:
      "A setting may be changed because it feels insecure rather than because the mission, configuration, logs, or observed behavior support the decision.",
    consequence:
      "The team cannot explain why the change was justified and may create a new problem.",
    replacement:
      "Tie meaningful changes to mission requirements, observed evidence, or a clearly tested security need.",
  },
  {
    title: "Skipping verification",
    what:
      "Teams may assume a change worked because the command completed or the setting saved.",
    consequence:
      "Required functionality may be broken while the team continues working unaware.",
    replacement:
      "After each high-impact change, verify both the security result and the mission function it could affect.",
  },
  {
    title: "Waiting too long to document",
    what:
      "Important changes and findings are sometimes written down only near the end of the round.",
    consequence:
      "Commands, evidence, reasons, and unresolved questions are forgotten.",
    replacement:
      "Use a shared change log continuously and record important work while the context is fresh.",
  },
  {
    title: "Overreacting to time pressure",
    what:
      "As the clock drops, teams may become more aggressive and start risky changes because they feel they must keep doing something.",
    consequence:
      "Late regressions are harder to diagnose and may be impossible to recover before the round ends.",
    replacement:
      "Reduce risk as time decreases. Shift toward verification, documentation, and stability.",
  },
];

const priorityModel = [
  {
    label: "P1",
    title: "Mission-breaking or critical security issue",
    detail:
      "Examples include required service failure, unauthorized administrative access, dangerous persistence, or a broken network path.",
  },
  {
    label: "P2",
    title: "High-confidence security weakness",
    detail:
      "The evidence is strong, the remediation is understood, and the chance of breaking required functionality is manageable.",
  },
  {
    label: "P3",
    title: "Useful hardening",
    detail:
      "The change improves security but is less urgent than confirmed privilege, persistence, service, or network issues.",
  },
  {
    label: "P4",
    title: "Low-confidence or cosmetic item",
    detail:
      "The finding is weakly supported, low impact, or not worth the risk under current time pressure.",
  },
];

const openingQuestions = [
  "Which users and administrators are approved?",
  "Which services and applications must remain available?",
  "Which remote-access methods are required or forbidden?",
  "Which network paths, VLANs, shares, or roles are mission-critical?",
  "Are there explicit restrictions on what the team may change?",
  "Which systems are likely to contain forensic questions or evidence?",
  "Which teammate owns each platform or major task?",
  "What is the first high-risk item that deserves investigation?",
];

const badVsBetter = [
  {
    bad: "Disable anything that looks unnecessary.",
    better:
      "Identify the service owner, dependency, mission requirement, and listener before deciding whether it is unnecessary.",
  },
  {
    bad: "Delete suspicious users.",
    better:
      "Compare the account with the approved roster, preserve evidence, and remove only the unauthorized access that is justified.",
  },
  {
    bad: "Lock everything down first.",
    better:
      "Baseline first, then harden only what is supported by the mission and evidence.",
  },
  {
    bad: "Fix as much as possible before time runs out.",
    better:
      "Fix the highest-value issues first and lower risk as the clock gets shorter.",
  },
  {
    bad: "Everyone should help everywhere.",
    better:
      "Use clear ownership with concise cross-team handoffs when dependencies overlap.",
  },
  {
    bad: "If the command worked, the issue is fixed.",
    better:
      "Retest the security control and required functionality after the change.",
  },
];

const midRoundSignals = [
  "Required service unexpectedly stopped",
  "Approved user lost access",
  "Suspicious listener returned",
  "A teammate cannot explain a recent change",
  "Network reachability changed after a policy edit",
  "Evidence needed for a forensic question was altered",
  "Two teammates are working the same issue independently",
  "The change log is missing important work",
];

const finalChecklist = [
  "The mission was read before major hardening began.",
  "Required users, services, remote access, and network needs were recorded.",
  "The team established a baseline before broad remediation.",
  "High-impact work was prioritized ahead of cosmetic hardening.",
  "Unknown items were investigated before removal.",
  "Meaningful changes were supported by evidence or mission requirements.",
  "Large changes were broken into smaller verifiable steps when practical.",
  "Platform ownership was clear.",
  "Important findings and changes were documented as they happened.",
  "Required functionality was rechecked after high-impact changes.",
  "Mid-round regressions were investigated before more hardening continued.",
  "Risk tolerance decreased as the competition clock ran down.",
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

export default function CompetitionStrategyMistakesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/common-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Common Mistakes
            </Link>

            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <Link
              href="/cyberpatriot/common-mistakes/windows-11-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Guide &rarr;
            </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Common Mistakes &middot; Guide 01 &middot; Strategy
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Competition Strategy Mistakes
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                The biggest competition mistakes often happen before a command
                is ever typed: skipping the mission, prioritizing poorly,
                changing too much at once, working without ownership, and
                failing to verify.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Strong strategy does not mean moving slowly. It means spending
                a few deliberate moments to prevent hours of recovery later.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Read first</span>
                  <span className="font-bold text-white">Mission</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Before change</span>
                  <span className="font-bold text-white">Baseline</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>During round</span>
                  <span className="font-bold text-white">Prioritize + Verify</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Near finish</span>
                  <span className="font-bold text-white">Stability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Strategy rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Fast work is only useful when the team knows what must not break
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Competition strategy should reduce uncertainty. Read the mission,
            establish ownership, preserve the original state, and decide which
            findings deserve action before the team starts making large
            changes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Opening questions"
            title="Answer these before the main hardening pass"
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="10 common mistakes"
            title="What goes wrong and what to do instead"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {mistakes.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                    What goes wrong
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.what}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Why it hurts
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.consequence}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Stronger replacement
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.replacement}
                  </p>
                </div>
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
            Do the highest-value work first
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {priorityModel.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-2xl font-black text-cyan-300">{item.label}</p>
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
            label="Bad habit vs better habit"
            title="Replace vague competition instincts with explicit decisions"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {badVsBetter.map((item) => (
              <div
                key={item.bad}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                  Weak habit
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {item.bad}
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
            Mid-round warning signs
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            These signals mean the team should stop and verify
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {midRoundSignals.map((item, index) => (
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
            Strategy final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Strong competition habits before moving on
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
              href="/cyberpatriot/common-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Common Mistakes
            </Link>

            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <Link
              href="/cyberpatriot/common-mistakes/windows-11-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Guide &rarr;
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
