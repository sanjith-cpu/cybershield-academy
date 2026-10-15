import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sweepAreas = [
  {
    title: "Required services",
    checks: [
      "Confirm every mission-required service is still running.",
      "Retest required shares, websites, remote management, and application dependencies.",
      "Check that no earlier hardening step accidentally disabled a dependency.",
    ],
  },
  {
    title: "Accounts & privilege",
    checks: [
      "Re-check approved users and administrators.",
      "Confirm unauthorized privilege was removed.",
      "Verify service accounts and automation identities still function.",
    ],
  },
  {
    title: "Security controls",
    checks: [
      "Confirm Defender or antivirus is enabled where applicable.",
      "Confirm firewall profiles or rules remain active.",
      "Confirm logging and auditing still function.",
    ],
  },
  {
    title: "Persistence",
    checks: [
      "Re-check scheduled tasks, cron jobs, timers, startup items, and service-based persistence.",
      "Confirm suspicious persistence did not return after remediation.",
      "Document anything still unresolved.",
    ],
  },
  {
    title: "Network state",
    checks: [
      "Re-check listeners and active connections.",
      "Confirm required VLANs, trunks, routes, and ACL behavior.",
      "Retest required reachability after network changes.",
    ],
  },
  {
    title: "Evidence & documentation",
    checks: [
      "Make sure high-impact findings have evidence captured.",
      "Confirm the change log includes exact remediation and verification.",
      "Record unresolved questions before moving into the final phase.",
    ],
  },
];

const platformChecks = [
  {
    platform: "Windows 11",
    items: [
      "Approved users and local Administrators are correct.",
      "Defender, Firewall, and Windows Update are healthy.",
      "Required services remain running.",
      "RDP state matches the mission.",
      "Scheduled tasks, startup items, and listeners were re-checked.",
      "Suspicious processes or services have not reappeared.",
    ],
  },
  {
    platform: "Windows Server",
    items: [
      "Required roles and services still function.",
      "Shares and permissions remain correct.",
      "Approved local or domain privilege is intact.",
      "RDP / WinRM state matches the mission.",
      "Authentication and service-installation evidence is preserved.",
      "No remediation broke server dependencies.",
    ],
  },
  {
    platform: "Linux",
    items: [
      "Approved users and sudo rights are correct.",
      "Required services and SSH state match the mission.",
      "Cron jobs, timers, and startup behavior were re-checked.",
      "Listeners and active sockets match expected services.",
      "Sensitive permissions remain correct.",
      "Authentication and journal evidence is preserved.",
    ],
  },
  {
    platform: "Cisco / Networking",
    items: [
      "Required interfaces are up.",
      "VLAN and trunk state is correct.",
      "Required routes exist.",
      "ACL order and placement still match the policy.",
      "Approved SSH / VTY access still works.",
      "Required reachability was retested end to end.",
    ],
  },
  {
    platform: "Forensics",
    items: [
      "Evidence needed for open questions has been preserved.",
      "Important files have paths and hashes where practical.",
      "Timeline notes are consistent with system time zones.",
      "Major conclusions have supporting artifacts.",
      "Unresolved uncertainty is documented.",
      "Remediation did not destroy evidence still needed.",
    ],
  },
];

const regressionSignals = [
  {
    signal: "Required service stopped after hardening",
    response:
      "Identify the exact change that caused the regression, restore only the required function, and document the correction.",
  },
  {
    signal: "Approved user lost access",
    response:
      "Check group membership, ACLs, sudo, RDP, SSH, and application-specific rights changed earlier in the round.",
  },
  {
    signal: "Suspicious listener returned",
    response:
      "Correlate the listener with process, service, task, cron, or timer persistence before containing it again.",
  },
  {
    signal: "Network path broke",
    response:
      "Re-check interface state, VLANs, trunks, routes, and ACLs in that order before making another broad change.",
  },
  {
    signal: "Service works locally but not remotely",
    response:
      "Check firewall, ACL, listener binding, route, and remote-access restrictions before changing the service itself.",
  },
  {
    signal: "Evidence no longer matches the current state",
    response:
      "Keep the original evidence in the case notes and record the remediation time so the timeline still makes sense.",
  },
];

const verificationQuestions = [
  "What critical function have we not retested yet?",
  "Which high-risk finding has not been independently verified?",
  "Did any teammate make a change that another platform depends on?",
  "Which service, route, share, or account is most likely to have been broken accidentally?",
  "Did any suspicious persistence return?",
  "Are all major changes in the change log?",
  "Do we still have any unexplained privileged access?",
  "Are there any open forensic questions that require preserving evidence before the final phase?",
];

const timingPlan = [
  {
    time: "2 minutes",
    focus: "Team sync",
    detail:
      "Each owner gives one status line: what is secure, what is broken, and what is unresolved.",
  },
  {
    time: "4 minutes",
    focus: "Mission-critical verification",
    detail:
      "Retest required services, shares, remote access, applications, and network reachability.",
  },
  {
    time: "4 minutes",
    focus: "Security regression sweep",
    detail:
      "Re-check privilege, listeners, persistence, firewall state, and high-risk findings already remediated.",
  },
  {
    time: "3 minutes",
    focus: "Evidence and notes",
    detail:
      "Confirm change-log completeness and preserve anything still needed for open forensic questions.",
  },
  {
    time: "2 minutes",
    focus: "Prioritize next work",
    detail:
      "Choose the remaining items that are actually worth spending the final phase on.",
  },
];

const stopDoing = [
  "Stop broad experimentation if required functionality is unstable.",
  "Stop making cosmetic hardening changes while unresolved high-risk findings remain.",
  "Stop changing multiple variables at once when troubleshooting a regression.",
  "Stop deleting evidence before open forensic questions are complete.",
  "Stop making undocumented privilege or network changes.",
  "Stop revisiting already verified low-risk items unless new evidence appears.",
];

const finalChecklist = [
  "Each platform owner reported current status.",
  "Required services were retested.",
  "Approved user and privilege state was re-checked.",
  "Security controls remain enabled.",
  "Remote-access state matches the mission.",
  "Suspicious persistence was re-checked.",
  "Listeners and active network connections were re-checked.",
  "Required VLAN, route, ACL, and reachability state was verified.",
  "Major remediations were independently verified where practical.",
  "Important forensic evidence is preserved.",
  "The change log is current.",
  "Unresolved findings are clearly prioritized.",
  "The team knows which items are safe to defer.",
  "The final phase will focus on high-value verification instead of random changes.",
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

export default function MidRoundVerificationChecklistPage() {
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
              href="/cyberpatriot/competition-checklists/evidence-change-log-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/final-15-minute-checklist"
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
                Competition Checklist &middot; 10 &middot; Verification
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Mid-Round Verification Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Pause the main hardening pass long enough to prove that required
                services, users, remote access, security controls, persistence,
                and network paths still match the mission.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The purpose of this sweep is regression detection. It catches
                accidental breakage before the final minutes become too
                expensive to troubleshoot.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Best time</span>
                  <span className="font-bold text-white">Mid-round</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Catch regressions</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Method</span>
                  <span className="font-bold text-white">Retest + compare</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish with</span>
                  <span className="font-bold text-white">Prioritized next steps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Verification rule
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Do not wait until the last five minutes to discover what broke
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Mid-round verification should be short and deliberate. Re-test the
            functions that matter most, compare the current state with the
            mission, and fix regressions before continuing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Core sweep"
            title="Six areas to verify before continuing"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sweepAreas.map((item) => (
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
            label="Platform sweep"
            title="Ask each owner to verify the essentials"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {platformChecks.map((item) => (
              <div
                key={item.platform}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.platform}</h3>
                <div className="mt-4 grid gap-2">
                  {item.items.map((check) => (
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
            Regression signals
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            If one of these appears, investigate the last relevant change first
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {regressionSignals.map((item) => (
              <div
                key={item.signal}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="font-black text-white">{item.signal}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.response}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            15-minute mid-round sweep
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Keep the verification pass short and structured
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {timingPlan.map((item) => (
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
            label="Decision questions"
            title="Ask these before the team starts the next hardening pass"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {verificationQuestions.map((item, index) => (
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
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Stop doing
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Mid-round is where random work should decrease
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {stopDoing.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-yellow-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-yellow-200">
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
            Mid-Round Verification final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Continue only after the team trusts the current state
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
              href="/cyberpatriot/competition-checklists/evidence-change-log-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/final-15-minute-checklist"
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
