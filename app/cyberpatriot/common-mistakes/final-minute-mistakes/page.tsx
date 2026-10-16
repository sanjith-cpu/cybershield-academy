import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mistakes = [
  {
    title: "Starting a risky change with only minutes left",
    what:
      "A team may begin a major service, account, firewall, ACL, permission, or network change because it still appears possible to gain value before time expires.",
    consequence:
      "If the change breaks required functionality, there may not be enough time to diagnose or roll it back safely.",
    replacement:
      "As the clock gets short, require higher confidence and lower risk. Prefer verification, documentation, and small reversible fixes.",
  },
  {
    title: "Chasing low-value hardening",
    what:
      "Teams may spend the final minutes adjusting cosmetic settings or minor hardening items while important verification remains unfinished.",
    consequence:
      "A hidden regression or unresolved critical issue can survive because the team focused on low-impact work.",
    replacement:
      "Prioritize mission functionality, high-confidence security issues, unresolved critical findings, and final verification.",
  },
  {
    title: "Skipping the final functionality sweep",
    what:
      "A team may assume that systems still work because they worked earlier in the round.",
    consequence:
      "Later account, service, firewall, permission, or network changes may have introduced unnoticed breakage.",
    replacement:
      "Run a short final verification sweep across required logins, services, shares, applications, remote access, and network paths.",
  },
  {
    title: "Making one last broad account cleanup",
    what:
      "Teams may disable or remove several users or privileges near the end to improve security quickly.",
    consequence:
      "Approved users, service accounts, scheduled tasks, or recovery access can break with little time to recover.",
    replacement:
      "Change only identities that are clearly unauthorized and verify affected access immediately.",
  },
  {
    title: "Disabling services without time to test dependencies",
    what:
      "A service may look unnecessary and be disabled late in the round without checking what depends on it.",
    consequence:
      "Applications, remote administration, logging, shares, or required roles may fail after the change.",
    replacement:
      "Avoid late service changes unless the issue is high-confidence, the dependency is understood, and verification can be completed immediately.",
  },
  {
    title: "Forgetting to save network configuration",
    what:
      "Cisco changes may work in the running configuration but remain unsaved.",
    consequence:
      "A reload or later state change can erase the verified configuration.",
    replacement:
      "After final network verification, save the known-good configuration and avoid additional risky edits.",
  },
  {
    title: "Saving a network configuration before verifying it",
    what:
      "Teams may save immediately after a last-minute ACL, VLAN, routing, or management change.",
    consequence:
      "A broken state becomes persistent and harder to recover from.",
    replacement:
      "Verify required reachability and management access first, then save only the known-good state.",
  },
  {
    title: "Ignoring unresolved findings because time is short",
    what:
      "A suspicious account, listener, service, or forensic question may be left only in one teammate's memory.",
    consequence:
      "The final handoff becomes incomplete and the team may forget which risks remain.",
    replacement:
      "Mark unresolved findings explicitly with evidence, risk, owner, and the safest next action.",
  },
  {
    title: "Continuing independent work without a team sync",
    what:
      "Each teammate may keep working until the buzzer without a final coordination point.",
    consequence:
      "Duplicate work, conflicting changes, unsaved configuration, or unverified systems may go unnoticed.",
    replacement:
      "Use a short final sync so every platform owner reports health, unresolved risks, and whether risky changes should stop.",
  },
  {
    title: "Treating the last minutes as a sprint instead of a stabilization phase",
    what:
      "Teams may increase the number and size of changes because time pressure feels urgent.",
    consequence:
      "Risk rises exactly when recovery time is lowest.",
    replacement:
      "Shift from exploration to stabilization: verify, document, save known-good state, and protect required functionality.",
  },
];

const fifteenMinutePlan = [
  {
    window: "15-12 minutes",
    title: "Freeze broad experimentation",
    detail:
      "Stop low-confidence exploration. Platform owners identify unresolved high-risk items and decide which can still be handled safely.",
  },
  {
    window: "12-9 minutes",
    title: "Verify required functionality",
    detail:
      "Check approved logins, critical services, remote administration, shares, applications, network reachability, and other mission requirements.",
  },
  {
    window: "9-6 minutes",
    title: "Resolve only high-confidence issues",
    detail:
      "Make only narrow, reversible changes where the evidence is strong and immediate verification is possible.",
  },
  {
    window: "6-4 minutes",
    title: "Save and stabilize",
    detail:
      "Save verified network configuration, stop broad changes, and make sure known-good states are preserved.",
  },
  {
    window: "4-2 minutes",
    title: "Team status handoff",
    detail:
      "Each owner reports verified, unresolved, and do-not-touch items to the team lead.",
  },
  {
    window: "2-0 minutes",
    title: "Final evidence and documentation check",
    detail:
      "Confirm critical notes are captured, unresolved findings are visible, and no last-second risky change is in progress.",
  },
];

const platformSweeps = [
  {
    title: "Windows 11",
    checks: [
      "Approved users and administrators can still sign in.",
      "Defender and Firewall are healthy.",
      "Required services and RDP state match the mission.",
      "Suspicious scheduled tasks or startup persistence did not return.",
    ],
  },
  {
    title: "Windows Server",
    checks: [
      "Required server roles still function.",
      "Approved local and domain administrators still have access.",
      "Required shares and NTFS permissions work.",
      "RDP / WinRM and service accounts still match the mission.",
    ],
  },
  {
    title: "Linux",
    checks: [
      "Approved users and sudo access remain correct.",
      "Required services and SSH state match the mission.",
      "Permissions changes did not break applications.",
      "Suspicious cron, timer, or service persistence did not return.",
    ],
  },
  {
    title: "Cisco & Networking",
    checks: [
      "Required interfaces, VLANs, trunks, and routes are correct.",
      "ACLs allow required traffic and block only intended traffic.",
      "Approved management access still works.",
      "Known-good configuration is saved only after verification.",
    ],
  },
  {
    title: "Forensics",
    checks: [
      "Important evidence has been preserved.",
      "Hashes, paths, times, and event references are documented.",
      "Unresolved conclusions are labeled with appropriate confidence.",
      "Evidence needed for final questions was not destroyed by remediation.",
    ],
  },
  {
    title: "Team Operations",
    checks: [
      "Every platform has a final owner status.",
      "Unresolved findings are visible.",
      "Do-not-touch dependencies are known.",
      "No teammate is still making an uncoordinated high-risk change.",
    ],
  },
];

const stopDoing = [
  "Broad firewall rewrites",
  "Bulk account deletion",
  "Large permission resets",
  "Unplanned service removal",
  "Major ACL redesign",
  "Trunk or routing changes without immediate verification",
  "Package removal without dependency review",
  "Reboots used only to see what happens",
  "Unverified password resets for service identities",
  "Deleting evidence that may still be needed",
  "Starting a new deep investigation with no clear payoff",
  "Making changes another teammate does not know about",
];

const safeLateActions = [
  {
    title: "Verify known-good state",
    detail:
      "Recheck required functionality and important security controls using the same tests the team already understands.",
  },
  {
    title: "Document unresolved findings",
    detail:
      "Record evidence, risk, owner, and next action instead of forcing a low-confidence remediation.",
  },
  {
    title: "Make narrow high-confidence fixes",
    detail:
      "A clearly unauthorized group membership or one proven bad rule may still be worth fixing if verification is immediate.",
  },
  {
    title: "Save verified configuration",
    detail:
      "Persist only configuration that has already passed the required checks.",
  },
  {
    title: "Protect remote access",
    detail:
      "Confirm approved management paths still work before the team loses time to accidental lockout.",
  },
  {
    title: "Finish the handoff",
    detail:
      "Make sure the team lead knows what is verified, unresolved, and unsafe to change.",
  },
];

const badVsBetter = [
  {
    bad: "We have five minutes, change whatever might help.",
    better:
      "With five minutes left, require strong evidence, low risk, and immediate verification before any change.",
  },
  {
    bad: "One more hardening setting cannot hurt.",
    better:
      "If the security value is low and the regression risk is real, leave the stable system alone.",
  },
  {
    bad: "The network works now, save it immediately.",
    better:
      "Verify required reachability and management access first, then save the known-good configuration.",
  },
  {
    bad: "We can skip documentation because the round is almost over.",
    better:
      "Use the final minutes to make unresolved findings and important changes visible to the whole team.",
  },
  {
    bad: "Nobody reported a problem, so every platform is fine.",
    better:
      "Require a final status from each platform owner: Verified, Unresolved, or Do Not Touch.",
  },
  {
    bad: "Keep working until the timer reaches zero.",
    better:
      "Reserve the end of the round for stabilization, verification, saving, and handoff.",
  },
];

const goNoGoQuestions = [
  "Is the issue high-impact enough to justify changing now?",
  "Is the evidence strong?",
  "Do we know exactly what will change?",
  "Do we know what required function could break?",
  "Can the change be rolled back quickly?",
  "Can we verify the result immediately?",
  "Does the platform owner know about the change?",
  "Would leaving the stable state alone be safer?",
];

const finalTeamReport = [
  "Platform",
  "Owner",
  "Overall status",
  "Required functions verified",
  "Important security fixes completed",
  "Unresolved findings",
  "Known dependency or do-not-touch item",
  "Configuration saved where appropriate",
  "Final evidence / documentation complete",
  "Last known-good verification time",
];

const finalChecklist = [
  "Broad experimentation stopped before the final minutes.",
  "Required functionality received a final verification sweep.",
  "Only high-confidence, reversible late fixes were considered.",
  "Approved user and administrator access still works.",
  "Required services and remote-management paths still work.",
  "Network paths and ACL behavior were rechecked.",
  "Known-good network configuration was saved after verification.",
  "Important forensic evidence remains preserved.",
  "Unresolved findings are documented instead of guessed.",
  "Every platform owner reported final status.",
  "No uncoordinated risky changes are still in progress.",
  "The team finished in a stable, documented, verified state.",
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

export default function FinalMinuteMistakesPage() {
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
            href="/cyberpatriot/common-mistakes/team-communication-mistakes"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            &larr; Previous Guide
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Common Mistakes &middot; Guide 12 &middot; Final Minutes
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Final-Minute Mistakes
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                The final minutes should become calmer, not more aggressive.
                Recovery time is disappearing, so the team should reduce risk,
                verify required functions, save known-good state, document
                unresolved findings, and coordinate every remaining change.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Finishing well means protecting everything the team already
                fixed instead of creating one last preventable regression.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Risk level</span>
                  <span className="font-bold text-white">Decrease</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Priority</span>
                  <span className="font-bold text-white">Verify</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Network</span>
                  <span className="font-bold text-white">Verify then save</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish with</span>
                  <span className="font-bold text-white">Stable handoff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Final-minute rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            The less recovery time remains, the stronger the evidence should be before a change
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Late work should become more conservative. A stable system with one
            documented unresolved issue can be safer than a broken system
            caused by a rushed low-confidence fix.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="10 final-minute mistakes"
            title="What goes wrong and the safer replacement"
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Final 15 minutes"
            title="Shift from hardening to stabilization"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fifteenMinutePlan.map((item) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Platform sweep"
            title="Run a short final verification across every area"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {platformSweeps.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>

                <div className="mt-4 grid gap-2">
                  {item.checks.map((check) => (
                    <div
                      key={check}
                      className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm leading-6 text-slate-300"
                    >
                      {check}
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
            Avoid these late-round actions unless the evidence and recovery plan are unusually strong
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
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
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Safer late actions
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            There is still useful work to do without increasing risk
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {safeLateActions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-emerald-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
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
            Go / No-Go questions
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Ask these before any final risky change
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {goNoGoQuestions.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  Q{String(index + 1).padStart(2, "0")}
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
            Replace last-second urgency with deliberate stabilization
          </h2>

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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Final team report"
            title="Every platform owner should provide the same core status"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {finalTeamReport.map((item, index) => (
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
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Final-Minute final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Finish stable, verified, documented, and coordinated
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
            href="/cyberpatriot/common-mistakes/team-communication-mistakes"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            &larr; Previous Guide
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
