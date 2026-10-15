import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const handoffStatuses = [
  {
    status: "Verified",
    meaning:
      "The platform owner completed the planned work, required functionality was retested, and the current state is trusted.",
  },
  {
    status: "Unresolved",
    meaning:
      "A finding remains open, the evidence is incomplete, or the team intentionally deferred the item because the risk of further change was too high.",
  },
  {
    status: "Do not touch",
    meaning:
      "The current configuration is working and further changes could break required functionality or destroy evidence.",
  },
];

const platformReportFields = [
  {
    field: "Current status",
    guidance:
      "State whether the platform is verified, unresolved, or in a do-not-touch state.",
  },
  {
    field: "Required functionality",
    guidance:
      "Confirm the mission-critical services, shares, applications, remote access, and network paths that were retested.",
  },
  {
    field: "High-impact findings",
    guidance:
      "List only the most important security or reliability findings, not every minor hardening item.",
  },
  {
    field: "Changes made",
    guidance:
      "Summarize the meaningful remediations already recorded in the shared change log.",
  },
  {
    field: "Evidence preserved",
    guidance:
      "Call out important logs, hashes, paths, event IDs, process details, configuration snapshots, or timeline notes.",
  },
  {
    field: "Open questions",
    guidance:
      "State exactly what remains unknown instead of using vague labels like 'might still be bad.'",
  },
  {
    field: "Next action",
    guidance:
      "If more work is justified, specify the safest next verification or remediation step.",
  },
];

const platformHandoffs = [
  {
    platform: "Windows 11",
    questions: [
      "Do approved users and Administrators membership match the mission?",
      "Are Defender, Firewall, and Windows Update healthy?",
      "Are required services, shares, and applications working?",
      "Does RDP state match the scenario?",
      "Did suspicious tasks, services, processes, or listeners return?",
      "What Windows item, if any, should not be touched again?",
    ],
  },
  {
    platform: "Windows Server",
    questions: [
      "Do required roles and services still function?",
      "Are local and domain privileged identities correct?",
      "Do required SMB shares and permissions still work?",
      "Does RDP / WinRM state match the mission?",
      "Did any remediation affect server dependencies?",
      "What server item, if any, remains unresolved?",
    ],
  },
  {
    platform: "Linux",
    questions: [
      "Do approved users and sudo rights match the mission?",
      "Are required services and SSH state correct?",
      "Were cron jobs, timers, and persistence re-checked?",
      "Do listeners and firewall state match required services?",
      "Are sensitive permissions still correct?",
      "What Linux item, if any, remains unresolved?",
    ],
  },
  {
    platform: "Cisco / Networking",
    questions: [
      "Are required interfaces, VLANs, and trunks operational?",
      "Are required routes present?",
      "Do ACLs enforce the intended policy?",
      "Does approved SSH / VTY access work?",
      "Was required reachability retested end to end?",
      "Was the verified configuration saved?",
    ],
  },
  {
    platform: "Forensics",
    questions: [
      "Were important files, logs, paths, hashes, and timestamps preserved?",
      "Are authentication, process, persistence, and network artifacts correlated?",
      "Is the timeline internally consistent?",
      "Are conclusions supported by multiple artifacts where possible?",
      "What remains uncertain?",
      "Did any remediation destroy evidence still needed?",
    ],
  },
];

const teamLeadChecks = [
  {
    title: "Mission health",
    checks: [
      "Required services are still available.",
      "Required users can still access what they need.",
      "Required network paths still work.",
      "Required management access remains available.",
    ],
  },
  {
    title: "Security health",
    checks: [
      "Core security controls remain enabled.",
      "Unauthorized privilege was addressed.",
      "Suspicious persistence was re-checked.",
      "Unnecessary exposure was reduced without breaking the mission.",
    ],
  },
  {
    title: "Evidence health",
    checks: [
      "High-impact findings have preserved evidence.",
      "Open forensic questions have enough context to continue.",
      "Important hashes, paths, logs, and timestamps are recorded.",
      "Observation and interpretation are separated.",
    ],
  },
  {
    title: "Documentation health",
    checks: [
      "Major changes are in the shared change log.",
      "Verification results are recorded.",
      "Unresolved findings are clearly marked.",
      "Each open item has an owner or a deliberate decision to defer.",
    ],
  },
];

const escalationQuestions = [
  "Is the unresolved issue actively dangerous right now?",
  "Could the next change break a required service or lock out the team?",
  "Do we have enough evidence to justify the change?",
  "Can the change be reversed quickly if it fails?",
  "Has the platform owner already verified the current working state?",
  "Would doing nothing be safer than making a speculative last-minute change?",
];

const handoffTemplate = [
  "Platform:",
  "Owner:",
  "Status: Verified / Unresolved / Do not touch",
  "Required functionality verified:",
  "Highest-impact finding:",
  "Evidence preserved:",
  "Major changes made:",
  "Open question:",
  "Recommended next action:",
  "Final warning / dependency:",
];

const lastFiveMinutes = [
  {
    time: "5:00-4:00",
    action:
      "Collect one concise status report from every platform owner.",
  },
  {
    time: "4:00-3:00",
    action:
      "Confirm mission-critical functionality and any do-not-touch dependencies.",
  },
  {
    time: "3:00-2:00",
    action:
      "Confirm unresolved high-impact findings and decide whether any final action is justified.",
  },
  {
    time: "2:00-1:00",
    action:
      "Ensure the change log, forensic notes, and saved network configuration are complete.",
  },
  {
    time: "1:00-0:00",
    action:
      "No speculative changes. Final team confirmation and stability check only.",
  },
];

const finalChecklist = [
  "Every platform owner gave a final status.",
  "Each platform is marked Verified, Unresolved, or Do not touch.",
  "Mission-critical functionality was confirmed.",
  "Approved user and privilege state was confirmed.",
  "Required remote access still works.",
  "Required network reachability was confirmed.",
  "Core security controls remain enabled.",
  "Suspicious persistence was re-checked.",
  "High-impact evidence was preserved.",
  "Major changes are recorded in the shared change log.",
  "Unresolved findings are clearly described.",
  "Each unresolved issue has a deliberate decision: act, defer, or do not touch.",
  "The verified Cisco configuration was saved.",
  "No teammate is starting a speculative high-impact change.",
  "The team can explain the final state of every platform.",
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

export default function TeamLeadHandoffChecklistPage() {
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

          <Link
            href="/cyberpatriot/competition-checklists/final-15-minute-checklist"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            &larr; Previous Checklist
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Competition Checklist &middot; 12 &middot; Team Coordination
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Team Lead Handoff Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Collect platform status, required-function verification,
                unresolved findings, preserved evidence, major changes, and
                final warnings so the entire team shares one accurate picture
                of the environment.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                A final handoff should be concise enough to use under time
                pressure, but specific enough that another teammate can
                understand the state without repeating the investigation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Owner</span>
                  <span className="font-bold text-white">Team lead</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Input</span>
                  <span className="font-bold text-white">Platform reports</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Output</span>
                  <span className="font-bold text-white">Trusted final state</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Last rule</span>
                  <span className="font-bold text-white">No speculation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Handoff rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            A good handoff describes the current state, not the entire history
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            The team lead needs the information required to make the next
            decision: what works, what is secure, what remains unresolved, what
            evidence exists, and what should not be changed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Status language"
            title="Use three clear final states"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {handoffStatuses.map((item) => (
              <div
                key={item.status}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.status}</h3>
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
            label="Platform report"
            title="Every owner should provide the same seven fields"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {platformReportFields.map((item, index) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.field}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.guidance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Platform handoffs"
            title="Questions each owner should answer"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {platformHandoffs.map((item) => (
              <div
                key={item.platform}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.platform}</h3>

                <div className="mt-4 grid gap-2">
                  {item.questions.map((question, index) => (
                    <div
                      key={question}
                      className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-3"
                    >
                      <span className="font-black text-cyan-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-6 text-slate-300">
                        {question}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Team lead overview
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Confirm four types of health before the round ends
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {teamLeadChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>

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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Escalation questions"
            title="Use these before approving a late high-impact change"
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Handoff template"
            title="A compact format the team can actually use"
          />

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
            <div className="grid gap-3 md:grid-cols-2">
              {handoffTemplate.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4"
                >
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Final five minutes
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Team lead the clock, not just the technology
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {lastFiveMinutes.map((item) => (
              <div
                key={item.time}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <p className="text-lg font-black text-red-200">{item.time}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
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
            Team Lead Handoff final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            End with one trusted picture of the environment
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

          <Link
            href="/cyberpatriot/competition-checklists/final-15-minute-checklist"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            &larr; Previous Checklist
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
