import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mistakes = [
  {
    title: "Multiple teammates changing the same system without coordination",
    what:
      "Two or more teammates may investigate or modify the same machine, account, service, or network device at the same time.",
    consequence:
      "Changes can conflict, evidence can be lost, and nobody may know which action caused a regression.",
    replacement:
      "Assign clear ownership for each platform or issue and communicate before another teammate touches the same area.",
  },
  {
    title: "No shared status view",
    what:
      "Each teammate may know what they are doing, but the team has no common view of completed work, unresolved findings, or risky areas.",
    consequence:
      "Important issues are duplicated, forgotten, or assumed to be handled by someone else.",
    replacement:
      "Use a shared status board, change log, or handoff list with owner, state, evidence, and next action.",
  },
  {
    title: "Using vague handoffs",
    what:
      "A teammate may say 'Windows is done' or 'Linux looks fine' without explaining what was checked or what remains unresolved.",
    consequence:
      "The next teammate cannot trust the status and may repeat work or miss hidden risk.",
    replacement:
      "Handoffs should state findings, evidence, changes, verification, unresolved items, and what should not be changed.",
  },
  {
    title: "Failing to warn others about risky dependencies",
    what:
      "A teammate may discover that a service account, firewall rule, VLAN, share, or remote-access path is critical but never tell the rest of the team.",
    consequence:
      "Another teammate may break the dependency while trying to harden a different part of the environment.",
    replacement:
      "Mark critical dependencies clearly and communicate do-not-touch items before others work nearby.",
  },
  {
    title: "Duplicating investigations",
    what:
      "Two teammates may separately investigate the same account, service, process, or network issue.",
    consequence:
      "Time is wasted while other unresolved issues receive no attention.",
    replacement:
      "Use explicit ownership and short status updates so everyone knows what is already being investigated.",
  },
  {
    title: "Assuming silence means completion",
    what:
      "If a teammate stops talking about an issue, others may assume it is resolved.",
    consequence:
      "Unresolved findings can disappear from the team's attention.",
    replacement:
      "Use clear states such as Not Started, Investigating, Changed, Verified, Unresolved, and Do Not Touch.",
  },
  {
    title: "Reporting changes without reporting verification",
    what:
      "A teammate may announce that a setting was changed but omit whether required functionality still works.",
    consequence:
      "The team may build more work on top of a broken system.",
    replacement:
      "Every high-impact status update should include both the change and the verification result.",
  },
  {
    title: "Keeping important findings in private notes",
    what:
      "A teammate may document useful evidence locally but never move the key information into the shared team record.",
    consequence:
      "If that teammate switches tasks or becomes unavailable, the rest of the team loses the context.",
    replacement:
      "Keep detailed personal notes if useful, but copy critical findings, changes, and unresolved questions into the shared record.",
  },
  {
    title: "Interrupting teammates without context",
    what:
      "A teammate may interrupt another person with a vague question like 'Can you check this?' without explaining urgency or what has already been tested.",
    consequence:
      "The receiving teammate has to repeat discovery work and loses focus on their current task.",
    replacement:
      "Give a compact escalation: system, symptom, evidence, what was tried, risk, and the exact help needed.",
  },
  {
    title: "Failing to communicate final-state risk",
    what:
      "Near the end of the round, teammates may continue making high-risk changes without telling the team lead or platform owner.",
    consequence:
      "Late regressions can appear with too little time for recovery.",
    replacement:
      "As time gets short, require explicit coordination before risky changes and shift communication toward verification and stability.",
  },
];

const ownershipModel = [
  {
    role: "Platform Owner",
    responsibility:
      "Primary person responsible for the current state, changes, verification, and handoff of one platform or device.",
  },
  {
    role: "Issue Owner",
    responsibility:
      "Person responsible for investigating one specific finding that may cross multiple systems.",
  },
  {
    role: "Team Lead",
    responsibility:
      "Maintains overall priorities, resolves ownership conflicts, and controls late-round risk.",
  },
  {
    role: "Verifier",
    responsibility:
      "Confirms that a high-impact change achieved the security goal without breaking required functionality.",
  },
];

const statusStates = [
  {
    state: "Not Started",
    meaning:
      "Nobody has begun the task yet.",
  },
  {
    state: "Investigating",
    meaning:
      "The issue is being examined and no final remediation decision has been made.",
  },
  {
    state: "Changed",
    meaning:
      "A remediation was applied but verification is still required.",
  },
  {
    state: "Verified",
    meaning:
      "The change was confirmed and required functionality still works.",
  },
  {
    state: "Unresolved",
    meaning:
      "The team lacks enough evidence, time, or confidence to make a safe decision.",
  },
  {
    state: "Do Not Touch",
    meaning:
      "A known dependency or high-risk area should not be modified without coordination.",
  },
];

const handoffFields = [
  "System or platform",
  "Owner",
  "Current status",
  "Important finding",
  "Supporting evidence",
  "Change made",
  "Verification result",
  "Unresolved question",
  "Known dependency",
  "Next recommended action",
  "Do-not-touch warning",
  "Time of last update",
];

const strongMessages = [
  {
    weak: "Windows is done.",
    better:
      "Windows 11: accounts, Defender, firewall, services, tasks, and RDP reviewed. One unauthorized admin removed and verified. No unresolved items. Avoid changing RDP because the mission requires it.",
  },
  {
    weak: "Can you look at Linux?",
    better:
      "Linux host: sshd is required, but port 22 is exposed wider than expected. I verified the service and firewall state but have not changed it. Need a second review of the allowed source scope.",
  },
  {
    weak: "I fixed the network.",
    better:
      "Cisco: VLAN 20 was missing from one trunk. Added VLAN 20 only, verified end-to-end reachability, and saved the known-good config. No other trunk changes made.",
  },
  {
    weak: "Don't touch that.",
    better:
      "Do not change svc-backup yet. It appears to run the scheduled backup task and uses a share dependency. Ownership and required privileges are still under review.",
  },
];

const escalationQuestions = [
  "What system is affected?",
  "What exact symptom or finding exists?",
  "What evidence supports the concern?",
  "What has already been checked or changed?",
  "What required function could break?",
  "What specific help is needed?",
];

const badVsBetter = [
  {
    bad: "Everyone should just help wherever they see a problem.",
    better:
      "Assign owners so the team knows who controls each system and when cross-platform help is needed.",
  },
  {
    bad: "Windows is finished.",
    better:
      "Report what was checked, what changed, what was verified, and what remains unresolved.",
  },
  {
    bad: "I changed the firewall.",
    better:
      "State the exact rule, reason, expected effect, and whether required traffic was verified afterward.",
  },
  {
    bad: "Keep your own notes so you can move faster.",
    better:
      "Keep detailed private notes if useful, but synchronize important status and evidence into the shared team record.",
  },
  {
    bad: "Ask someone else to look at it.",
    better:
      "Escalate with system, symptom, evidence, attempted checks, risk, and the exact question.",
  },
  {
    bad: "We have five minutes left, just fix whatever you can.",
    better:
      "Coordinate late changes through the team lead and prioritize verified, reversible, high-confidence work.",
  },
];

const finalRoundSignals = [
  "A teammate cannot explain who owns a system",
  "Two people are working the same issue",
  "A major change was made but not verified",
  "A dependency is known by only one teammate",
  "The shared log is missing recent high-impact work",
  "An unresolved issue has no owner",
  "A late risky change is being attempted without coordination",
  "The team lead does not know which systems are stable",
];

const finalChecklist = [
  "Every major platform has a clear owner.",
  "Cross-platform issues have an explicit issue owner.",
  "The team uses shared status labels consistently.",
  "High-impact findings and changes are visible in the shared record.",
  "Handoffs include evidence, remediation, verification, and unresolved items.",
  "Critical dependencies are clearly marked.",
  "Do-not-touch areas are communicated before nearby work begins.",
  "Major changes include a verification result.",
  "Escalations include enough context to avoid repeating discovery work.",
  "Unresolved issues have owners or are clearly documented.",
  "Late-round risky changes require coordination.",
  "The team lead has an accurate final view of system health.",
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

export default function TeamCommunicationMistakesPage() {
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

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/common-mistakes/troubleshooting-verification-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/final-minute-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
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
                Common Mistakes &middot; Guide 11 &middot; Team Communication
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Team Communication Mistakes
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Strong technical teams can still lose time when ownership is
                unclear, handoffs are vague, dependencies are hidden, and
                changes are not shared. Communication should reduce uncertainty,
                not add more of it.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The goal is not constant talking. It is concise operational
                communication: who owns the task, what was found, what changed,
                what was verified, and what remains unresolved.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Assign</span>
                  <span className="font-bold text-white">Ownership</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Share</span>
                  <span className="font-bold text-white">Evidence + status</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Warn about</span>
                  <span className="font-bold text-white">Dependencies</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Handoff with</span>
                  <span className="font-bold text-white">Next action</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Communication rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Every teammate should know who owns the system and what state it is in
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Good communication is short, specific, and tied to action. It tells
            the team what is happening now, what has already been verified, and
            where risk still exists.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="10 team mistakes"
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
            label="Ownership model"
            title="Give each responsibility a clear owner"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {ownershipModel.map((item) => (
              <div
                key={item.role}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.role}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.responsibility}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Status language"
            title="Use states that everyone interprets the same way"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {statusStates.map((item) => (
              <div
                key={item.state}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-cyan-300">
                  {item.state}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Handoff fields"
            title="A complete handoff should preserve operational context"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {handoffFields.map((item, index) => (
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
            Strong team messages
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Replace vague updates with useful context
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {strongMessages.map((item) => (
              <div
                key={item.weak}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                  Too vague
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {item.weak}
                </p>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Better
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
            label="Escalation"
            title="Ask for help without forcing someone to restart the investigation"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {escalationQuestions.map((item, index) => (
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
            Replace noise with clear operational communication
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
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Team warning signs
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            These signals mean coordination is breaking down
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalRoundSignals.map((item, index) => (
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
            Team Communication final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Make ownership, status, risk, and next actions visible
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

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/common-mistakes/troubleshooting-verification-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/final-minute-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
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
