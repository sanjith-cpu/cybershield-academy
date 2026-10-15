import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const firstPriorities = [
  {
    item: "Stop broad experimentation.",
    why:
      "The final minutes are for stability, verification, and high-confidence fixes, not large configuration changes with unknown side effects.",
  },
  {
    item: "Retest mission-critical functionality first.",
    why:
      "Required services, shares, remote access, applications, and network paths must still work before anything else matters.",
  },
  {
    item: "Review only unresolved high-impact findings.",
    why:
      "Focus on privilege, suspicious persistence, disabled security controls, or broken required services instead of low-value cosmetic hardening.",
  },
  {
    item: "Confirm persistence and remote-access state.",
    why:
      "Scheduled tasks, cron jobs, services, RDP, SSH, VTY, and listeners can reintroduce risk if they are not checked again.",
  },
  {
    item: "Save validated network configuration.",
    why:
      "A working Cisco configuration should be saved only after required reachability and policy are verified.",
  },
  {
    item: "Complete the team handoff.",
    why:
      "Everyone should know what is finished, what remains unresolved, and what should not be touched in the final moments.",
  },
];

const windowsFinal = [
  "Approved users and Administrators membership match the mission.",
  "Defender and Firewall remain enabled and healthy.",
  "Windows Update remains available.",
  "Required services are running.",
  "RDP state matches the scenario.",
  "Scheduled tasks and startup entries were re-checked.",
  "Suspicious listeners or processes did not return.",
  "Required shares and applications still work.",
];

const serverFinal = [
  "Required roles and features remain installed.",
  "Approved local and domain privilege is correct.",
  "Required SMB shares still work.",
  "Share and NTFS permissions remain correct.",
  "RDP / WinRM state matches the mission.",
  "Required services are running.",
  "No remediation broke server dependencies.",
  "Important authentication and service evidence is preserved.",
];

const linuxFinal = [
  "Approved users and sudo rights are correct.",
  "Required services remain active.",
  "SSH state matches the mission.",
  "Cron jobs and systemd timers were re-checked.",
  "Sensitive permissions remain correct.",
  "Listeners and active connections were reviewed.",
  "Firewall state supports required services.",
  "Authentication and journal evidence is preserved.",
];

const ciscoFinal = [
  "Required interfaces are up.",
  "VLAN and trunk state is correct.",
  "Required routes are present.",
  "ACL order, placement, and direction match the policy.",
  "Approved SSH / VTY management still works.",
  "Port-security state is understood.",
  "Required reachability was retested.",
  "The verified configuration was saved.",
];

const forensicsFinal = [
  "Open forensic questions have enough evidence to answer or are clearly marked unresolved.",
  "Important files have paths, timestamps, and hashes where practical.",
  "Authentication, process, service, persistence, and network evidence is preserved.",
  "Timeline notes use consistent time-zone context.",
  "Major conclusions are supported by multiple artifacts when possible.",
  "Observation and interpretation remain separated.",
];

const riskyActions = [
  {
    action: "Bulk disabling services",
    reason:
      "A late service sweep can break dependencies and leave no time to recover.",
  },
  {
    action: "Large firewall or ACL rewrites",
    reason:
      "A broad policy change can break required traffic and be difficult to troubleshoot quickly.",
  },
  {
    action: "Deleting unknown accounts without validation",
    reason:
      "A legitimate service or administrator identity may be removed.",
  },
  {
    action: "Recursive permission changes",
    reason:
      "Broad ownership or ACL edits can break applications, shares, or system behavior.",
  },
  {
    action: "Unverified package or role removal",
    reason:
      "Required functionality can disappear with little time to restore it.",
  },
  {
    action: "Restarting systems without a clear reason",
    reason:
      "A reboot can introduce new problems, destroy transient evidence, or consume valuable time.",
  },
];

const finalDecisionQuestions = [
  "What required function would hurt us most if it were broken right now?",
  "Which unresolved finding has the highest security impact?",
  "Which change would be hardest to reverse if it goes wrong?",
  "Did any suspicious persistence return?",
  "Did any approved account lose access?",
  "Are the security controls still enabled?",
  "Has required network reachability been retested?",
  "Is every major change documented and verified?",
];

const finalTimeline = [
  {
    time: "15-12 min",
    focus: "Team sync",
    detail:
      "Each owner reports current status, unresolved high-impact findings, and any mission-critical function that needs retesting.",
  },
  {
    time: "12-8 min",
    focus: "Mission verification",
    detail:
      "Retest required services, shares, applications, remote access, and network paths.",
  },
  {
    time: "8-5 min",
    focus: "Security re-sweep",
    detail:
      "Re-check privilege, persistence, listeners, security controls, and the most important remediations.",
  },
  {
    time: "5-3 min",
    focus: "Documentation",
    detail:
      "Finish the change log, unresolved findings, and forensic notes.",
  },
  {
    time: "3-0 min",
    focus: "Stability only",
    detail:
      "Avoid new risky changes. Save validated network configuration and perform the final handoff.",
  },
];

const saveAndHandoff = [
  {
    title: "Windows / Linux",
    action:
      "Do not make new high-impact changes unless they address a confirmed critical issue. Keep required services stable.",
  },
  {
    title: "Cisco",
    action:
      "Save the configuration only after reachability, ACL behavior, VLANs, trunks, and management access are verified.",
  },
  {
    title: "Forensics",
    action:
      "Preserve the final evidence notes and mark unanswered questions clearly instead of guessing.",
  },
  {
    title: "Team lead",
    action:
      "Collect one final status from every owner: verified, unresolved, or do not touch.",
  },
];

const finalChecklist = [
  "The team stopped broad experimentation.",
  "Mission-critical services were retested.",
  "Approved users and privilege were re-checked.",
  "Core security controls remain enabled.",
  "RDP, SSH, WinRM, and VTY state match the mission.",
  "Suspicious persistence was re-checked.",
  "Listeners and active connections were reviewed.",
  "Required shares and applications still work.",
  "Required VLANs, trunks, routes, and ACL behavior were verified.",
  "Required network reachability was retested.",
  "The verified Cisco configuration was saved.",
  "Important forensic evidence is preserved.",
  "The change log is current.",
  "Unresolved findings are clearly marked.",
  "Each platform owner gave a final status.",
  "No new risky change is being started in the final moments.",
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

function ChecklistBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
      <h3 className="text-xl font-black text-white">{title}</h3>
      <div className="mt-4 grid gap-2">
        {items.map((item, index) => (
          <div
            key={item}
            className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-3"
          >
            <span className="font-black text-cyan-300">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-sm leading-6 text-slate-300">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FinalFifteenMinuteChecklistPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/competition-checklists"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Competition Checklists
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
              href="/cyberpatriot/competition-checklists/mid-round-verification-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/team-lead-handoff-checklist"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Checklist &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Competition Checklist &middot; 11 &middot; Competition Finish
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Final 15-Minute Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Shift from broad hardening to stability, verification,
                high-confidence remediation, documentation, configuration
                saving, and team handoff.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The final minutes are not the time to chase every remaining
                weakness. Protect the mission, verify the highest-impact work,
                and avoid introducing a problem that cannot be recovered.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Time remaining</span>
                  <span className="font-bold text-white">15 minutes</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Primary goal</span>
                  <span className="font-bold text-white">Stability</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Risk tolerance</span>
                  <span className="font-bold text-white">Low</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish with</span>
                  <span className="font-bold text-white">Verified handoff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Final-round rule
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Stability matters more than one more speculative fix
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            A verified system with one documented low-priority weakness is
            better than a broken required service caused by an untested
            last-second change.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="First priorities"
            title="What to do when the final 15 minutes begin"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {firstPriorities.map((item, index) => (
              <div
                key={item.item}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.item}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            15-minute timeline
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Use the remaining time deliberately
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {finalTimeline.map((item) => (
              <div
                key={item.time}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-lg font-black text-cyan-300">{item.time}</p>
                <h3 className="mt-3 font-black text-white">{item.focus}</h3>
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
            label="Platform final sweep"
            title="Retest the essentials on each system"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <ChecklistBlock title="Windows 11" items={windowsFinal} />
            <ChecklistBlock title="Windows Server" items={serverFinal} />
            <ChecklistBlock title="Linux" items={linuxFinal} />
            <ChecklistBlock title="Cisco / Networking" items={ciscoFinal} />
            <ChecklistBlock title="Forensics" items={forensicsFinal} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-risk final actions
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Avoid changes that are difficult to recover
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {riskyActions.map((item) => (
              <div
                key={item.action}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="font-black text-white">{item.action}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Final decision questions"
            title="Ask these before approving another major change"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalDecisionQuestions.map((item, index) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Save & handoff"
            title="End with a state the next person can trust"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {saveAndHandoff.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Final 15-Minute checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Finish with verification, documentation, and stability
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
              href="/cyberpatriot/competition-checklists"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Competition Checklists
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
              href="/cyberpatriot/competition-checklists/mid-round-verification-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/team-lead-handoff-checklist"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Checklist &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
