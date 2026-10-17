import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const finalThirtyPlan = [
  {
    window: "30-25 minutes",
    title: "Re-rank the board",
    detail:
      "Identify the remaining P1 and P2 items, stop low-value cleanup, and make sure every unresolved high-impact issue has one owner.",
  },
  {
    window: "25-20 minutes",
    title: "Finish high-confidence work",
    detail:
      "Complete only changes with strong evidence, understood dependencies, and a realistic verification path before time becomes tight.",
  },
  {
    window: "20-15 minutes",
    title: "Verify mission health",
    detail:
      "Check required services, accounts, remote access, network paths, and key applications before entering the final fifteen-minute stabilization window.",
  },
  {
    window: "15-minute handoff",
    title: "Transition to stabilization",
    detail:
      "Freeze broad experimentation, surface unresolved items, protect known-good state, and hand the round into the Final 15 Minutes guide.",
  },
];

const priorityActions = [
  {
    title: "Finish",
    detail:
      "Complete high-value work that already has strong evidence and a safe verification plan.",
  },
  {
    title: "Verify",
    detail:
      "Recheck high-impact changes that are marked Changed but not yet Verified.",
  },
  {
    title: "Stabilize",
    detail:
      "Protect required services, remote access, network state, and known-good configurations.",
  },
  {
    title: "Defer",
    detail:
      "Leave low-confidence or low-value work unresolved rather than forcing a risky late decision.",
  },
  {
    title: "Document",
    detail:
      "Make sure unresolved risks, verification results, and final ownership are visible to the team.",
  },
  {
    title: "Coordinate",
    detail:
      "Tell the team before any late change that could affect shared services, accounts, or network paths.",
  },
];

const platformChecks = [
  {
    platform: "Windows 11",
    checks: [
      "Approved users and local administrators still correct",
      "Required services still functional",
      "Defender and Firewall state understood",
      "RDP requirement still satisfied",
      "Scheduled tasks and startup findings resolved or documented",
      "High-impact changes verified",
    ],
  },
  {
    platform: "Windows Server",
    checks: [
      "Required roles and services healthy",
      "Domain or local privilege changes verified",
      "Required shares still accessible",
      "RDP or WinRM requirements still satisfied",
      "No risky reboot pending without justification",
      "Role dependencies understood",
    ],
  },
  {
    platform: "Linux",
    checks: [
      "Required services active",
      "Users, groups, and sudo state verified",
      "SSH requirement and exposure understood",
      "Cron, timers, and persistence reviewed",
      "Firewall state supports required access",
      "Permission changes did not break mission functions",
    ],
  },
  {
    platform: "Cisco & Networking",
    checks: [
      "Required interfaces are up",
      "VLAN and trunk state verified",
      "Routes support required reachability",
      "ACL changes tested",
      "Remote management still works if required",
      "Known-good configuration saved only after verification",
    ],
  },
  {
    platform: "Forensics",
    checks: [
      "Important evidence preserved",
      "High-confidence findings communicated to platform owners",
      "Unresolved evidence questions documented",
      "Suspicious artifacts not destroyed before capture",
      "Timeline or correlation work summarized",
      "Final evidence notes identify system and time context",
    ],
  },
  {
    platform: "Team Operations",
    checks: [
      "Shared log current",
      "Every unresolved P1 or P2 has an owner",
      "No duplicate investigations remain",
      "Do-not-touch dependencies visible",
      "Team lead knows the highest remaining risks",
      "Final 15-minute responsibilities assigned",
    ],
  },
];

const stopDoing = [
  "Broad account cleanup without confirmed authorization context",
  "Disabling unfamiliar services just because they look unnecessary",
  "Large firewall or ACL rewrites",
  "Recursive permission changes",
  "New software or tool installations",
  "Major package upgrades",
  "Reboots used as a troubleshooting shortcut",
  "Unverified remote-access changes",
  "Deleting suspicious artifacts before preserving evidence",
  "Starting a large investigation that cannot reasonably finish",
  "Changing several variables at once",
  "Low-value cosmetic cleanup while high-impact work remains",
];

const lateChangeQuestions = [
  "What exact problem does this change solve?",
  "What evidence supports the decision?",
  "What required function could break?",
  "Can we verify the result immediately?",
  "Can we reverse the change if verification fails?",
  "Does another teammate depend on this service, account, or path?",
  "Is this more valuable than verifying work already completed?",
  "Would we still make this change if only ten minutes remained?",
];

const strongVsWeak = [
  {
    weak: "Use the last 30 minutes to squeeze in as many fixes as possible.",
    better:
      "Use the last 30 minutes to finish high-confidence work, verify major changes, and steadily reduce risk.",
  },
  {
    weak: "If an issue looks suspicious, fix it before time runs out.",
    better:
      "Require stronger evidence for late changes because there is less time to recover from mistakes.",
  },
  {
    weak: "Keep working until the final minute, then check functionality.",
    better:
      "Begin mission-health checks before the final fifteen minutes so there is still time to recover.",
  },
  {
    weak: "Save network configuration as soon as a change appears to work.",
    better:
      "Verify required reachability first, then save the known-good state.",
  },
  {
    weak: "A changed item is basically complete.",
    better:
      "Treat Changed and Verified as different states and prioritize verification before the round closes.",
  },
  {
    weak: "Unresolved items are failures.",
    better:
      "A clearly documented unresolved item is safer than a low-confidence late remediation that breaks the mission.",
  },
];

const warningSigns = [
  "A teammate starts a broad change without telling the team.",
  "Required service health has not been checked recently.",
  "Several items remain in Changed status with no verification.",
  "A low-value investigation is consuming one teammate's entire final half hour.",
  "The team lead cannot identify the highest remaining risk.",
  "A network or remote-access change has no rollback plan.",
  "Unresolved issues are disappearing from the board instead of being documented.",
  "The team is making changes faster as time decreases.",
];

const finalThirtyChecklist = [
  "P1 and P2 items were re-ranked.",
  "Low-value cleanup was paused.",
  "Every active high-impact item has one owner.",
  "High-confidence work was completed before broad experimentation.",
  "Changed items were moved toward Verified status.",
  "Required services and applications were rechecked.",
  "Required remote-access paths were rechecked.",
  "Network reachability and configuration state were reviewed.",
  "Known-good network state was saved only after verification.",
  "Unresolved risks remain visible in the shared log.",
  "Do-not-touch dependencies are visible to the team.",
  "Final 15-minute responsibilities are assigned.",
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

export default function FinalThirtyMinutesPage() {
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
              href="/cyberpatriot/competition-day-guide/mid-round-team-sync"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/competition-day-guide/final-15-minutes"
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
                Competition Day Guide &middot; Guide 10 &middot; Final 30 Minutes
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Final 30 Minutes
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                The final half hour is where the team's operating model should
                change. Finish high-confidence work, verify important changes,
                protect required functionality, and steadily reduce the amount
                of risk the team is willing to introduce.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                As recovery time disappears, a stable verified system is worth
                more than one more speculative change.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Final-30 Goal
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Priorities</span>
                  <span className="font-bold text-white">Narrowed</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>High-value work</span>
                  <span className="font-bold text-white">Finished</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Mission health</span>
                  <span className="font-bold text-white">Rechecked</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Risk</span>
                  <span className="font-bold text-white">Reduced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Late-round rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Risk tolerance should decrease as recovery time decreases
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            The last thirty minutes are not a sprint for more changes. They are
            a controlled transition from active remediation toward verified,
            documented, and stable final state.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Final-30 timeline"
            title="Use the last half hour differently from the middle of the round"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {finalThirtyPlan.map((item) => (
              <div
                key={item.window}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black text-cyan-300">{item.window}</p>
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Six late-round actions
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Finish, verify, stabilize, defer, document, coordinate
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {priorityActions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-cyan-300">
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
            label="Platform sweep"
            title="Begin checking mission health before the final fifteen minutes"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {platformChecks.map((area) => (
              <div
                key={area.platform}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">
                  {area.platform}
                </h3>

                <div className="mt-4 grid gap-2">
                  {area.checks.map((item) => (
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
            Stop doing
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Do not spend the final half hour creating new recovery problems
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {stopDoing.map((item, index) => (
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
            label="Late-change gate"
            title="Ask harder questions before every high-impact late change"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {lateChangeQuestions.map((question, index) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Weak late-round habit vs better habit
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Replace late-round urgency with controlled stabilization
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {strongVsWeak.map((item) => (
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
            Final-30 warning signs
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            These signals mean the team is carrying too much late-round risk
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
            Final 30 Minutes checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Enter the final fifteen minutes with stable systems and known risks
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalThirtyChecklist.map((item, index) => (
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
              href="/cyberpatriot/competition-day-guide/mid-round-team-sync"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/competition-day-guide/final-15-minutes"
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
